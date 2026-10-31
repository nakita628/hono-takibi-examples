<h1 id="health-id-service">Health ID Service v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

It is important to standardize the process of identification of an individual across healthcare providers, to ensure that the created medical records are issued to the right individual or accessed by a Health Information User through appropriate consent. 
In order to issue a Health ID to an individual, one only needs basic demographic details like Name, Year of Birth, Gender. In addition, citizens should be able to update contact information easily.

Base URLs:

* <a href="https://healthidsbx.ndhm.gov.in/api">https://healthidsbx.ndhm.gov.in/api</a>

Web: <a href="https://ndhm.gov.in/">National Health Authority</a> 

# Authentication

* API Key (Authorization)
    - Parameter Name: **Authorization**, in: header.

* API Key (X-HIP-ID)
    - Parameter Name: **X-HIP-ID**, in: header.

<h1 id="health-id-service-authentication">Authentication</h1>

Health ID Authentication APIs

## Authenticate using Health ID number / Health ID and password

<a id="opIdauthenticateWithPasswordUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/auth/authPassword \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "healthId": "string",
    "password": "string"
  }'
```

`POST /v1/auth/authPassword`

> Body parameter

```json
{
  "healthId": "string",
  "password": "string"
}
```

<h3 id="authenticate-using-health-id-number-health-id-and-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[JwtRequest](#schemajwtrequest)|true|authenticationRequest|
|» healthId|body|string|false|none|
|» password|body|string|false|none|

<h3 id="authenticate-using-health-id-number-health-id-and-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[JwtResponse](#schemajwtresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Authenticate request to generate Mobile OTP using Health ID number / Health ID

<a id="opIdauthenticateUserUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/auth/authWithMobile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "healthid": "string"
  }'
```

`POST /v1/auth/authWithMobile`

> Body parameter

```json
{
  "healthid": "string"
}
```

<h3 id="authenticate-request-to-generate-mobile-otp-using-health-id-number-health-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[AuthMobileOTPRequest](#schemaauthmobileotprequest)|true|authRequest|
|» healthid|body|string|false|none|

<h3 id="authenticate-request-to-generate-mobile-otp-using-health-id-number-health-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TxnResponse](#schematxnresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Authenticate using verified Mobile Number and user data

<a id="opIdauthWithMobileTokenUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/auth/authWithMobileToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "gender": "string",
    "healthId": "string",
    "name": "string",
    "token": "string",
    "txnId": "string",
    "yearOfBirth": "string"
  }'
```

`POST /v1/auth/authWithMobileToken`

> Body parameter

```json
{
  "gender": "string",
  "healthId": "string",
  "name": "string",
  "token": "string",
  "txnId": "string",
  "yearOfBirth": "string"
}
```

<h3 id="authenticate-using-verified-mobile-number-and-user-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[AuthWithMobileTxnAndUserData](#schemaauthwithmobiletxnanduserdata)|true|authRequest|
|» gender|body|string|false|none|
|» healthId|body|string|false|none|
|» name|body|string|false|none|
|» token|body|string|false|none|
|» txnId|body|string|true|none|
|» yearOfBirth|body|string|false|none|

<h3 id="authenticate-using-verified-mobile-number-and-user-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[JwtResponse](#schemajwtresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Auth token public key.

<a id="opIdcertUsingGET"></a>

> Code samples

```bash
curl https://example.com/v1/auth/cert \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/auth/cert`

<h3 id="auth-token-public-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|

<h3 id="auth-token-public-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Authentication with Aadhaar Biometric based auth transaction.

<a id="opIdconfirmWithAadhaarBioUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/auth/confirmWithAadhaarBio \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "authType": "FINGERSCAN",
    "bioType": "string",
    "pid": "string",
    "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/auth/confirmWithAadhaarBio`

> Body parameter

```json
{
  "authType": "FINGERSCAN",
  "bioType": "string",
  "pid": "string",
  "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="authentication-with-aadhaar-biometric-based-auth-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[AuthAccountAadhaarBioRequest](#schemaauthaccountaadhaarbiorequest)|true|authenticationRequest|
|» authType|body|string|false|none|
|» bioType|body|string|false|none|
|» pid|body|string|false|none|
|» txnId|body|string(uuid)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authType|FINGERSCAN|
|» authType|IRIS|
|» authType|OTP|

<h3 id="authentication-with-aadhaar-biometric-based-auth-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[JwtResponse](#schemajwtresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Authentication with Aadhaar OTP based auth transaction.

<a id="opIdconfirmWithAadhaarOtpUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/auth/confirmWithAadhaarOtp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "otp": "string",
    "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/auth/confirmWithAadhaarOtp`

> Body parameter

```json
{
  "otp": "string",
  "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="authentication-with-aadhaar-otp-based-auth-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[AuthAccountAadhaarOTPRequest](#schemaauthaccountaadhaarotprequest)|true|authenticationRequest|
|» otp|body|string|true|none|
|» txnId|body|string(uuid)|true|none|

<h3 id="authentication-with-aadhaar-otp-based-auth-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[JwtResponse](#schemajwtresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Authenticate using demographic data of user.

<a id="opIdconfirmWithDemographicsUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/auth/confirmWithDemographics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "gender": "string",
    "name": "string",
    "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "yearOfBirth": "string"
  }'
```

`POST /v1/auth/confirmWithDemographics`

> Body parameter

```json
{
  "gender": "string",
  "name": "string",
  "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "yearOfBirth": "string"
}
```

<h3 id="authenticate-using-demographic-data-of-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[AuthAccountWithDemographicsRequest](#schemaauthaccountwithdemographicsrequest)|true|authenticationRequest|
|» gender|body|string|false|none|
|» name|body|string|false|none|
|» txnId|body|string(uuid)|true|none|
|» yearOfBirth|body|string|false|none|

<h3 id="authenticate-using-demographic-data-of-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Authentication with Mobile OTP based auth transaction.

<a id="opIdconfirmWithMobileUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/auth/confirmWithMobileOTP \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "otp": "string",
    "txnId": "string"
  }'
```

`POST /v1/auth/confirmWithMobileOTP`

> Body parameter

```json
{
  "otp": "string",
  "txnId": "string"
}
```

<h3 id="authentication-with-mobile-otp-based-auth-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[AuthAccountMobileOTPRequest](#schemaauthaccountmobileotprequest)|true|authenticationRequest|
|» otp|body|string|false|none|
|» txnId|body|string|false|none|

<h3 id="authentication-with-mobile-otp-based-auth-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[JwtResponse](#schemajwtresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Authentication with PASSWORD based auth transaction.

<a id="opIdauthAccountPasswordRequestUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/auth/confirmWithPassword \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "password": "string",
    "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/auth/confirmWithPassword`

> Body parameter

```json
{
  "password": "string",
  "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="authentication-with-password-based-auth-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[AuthWithPasswordRequest](#schemaauthwithpasswordrequest)|true|authenticationRequest|
|» password|body|string|true|none|
|» txnId|body|string(uuid)|true|none|

<h3 id="authentication-with-password-based-auth-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[JwtResponse](#schemajwtresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Initiate authentication process for given Health ID

<a id="opIdinitiateAuthUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/auth/init \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "authMethod": "AADHAAR_OTP",
    "healthid": "string"
  }'
```

`POST /v1/auth/init`

> Body parameter

```json
{
  "authMethod": "AADHAAR_OTP",
  "healthid": "string"
}
```

<h3 id="initiate-authentication-process-for-given-health-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[AuthInitRequest](#schemaauthinitrequest)|true|authRequest|
|» authMethod|body|string|true|none|
|» healthid|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» authMethod|AADHAAR_OTP|
|» authMethod|MOBILE_OTP|
|» authMethod|PASSWORD|
|» authMethod|DEMOGRAPHICS|
|» authMethod|AADHAAR_BIO|

<h3 id="initiate-authentication-process-for-given-health-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TxnResponse](#schematxnresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Resend Aadhaar/Mobile OTP for Authentication Transaction.

<a id="opIdresendAuthMobileOTPUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/auth/resendAuthOTP \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "txnId": "string"
  }'
```

`POST /v1/auth/resendAuthOTP`

> Body parameter

```json
{
  "txnId": "string"
}
```

<h3 id="resend-aadhaarmobile-otp-for-authentication-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[ResendOTPRequest](#schemaresendotprequest)|true|resendOtpRequest|
|» txnId|body|string|true|none|

<h3 id="resend-aadhaarmobile-otp-for-authentication-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

<h1 id="health-id-service-forgot-health-idnumber">Forgot health id/number</h1>

APIs to Retrieve Health ID/number using mobile number or aadhar.

## Verify aadhar OTP sent as part of forgetHealth id.

<a id="opIdretrievalHealthIdByAadharUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/forgot/healthId/aadhaar \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "otp": "string",
    "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v1/forgot/healthId/aadhaar`

Verify aadhar OTP sent as part of forgetHealth id.

> Body parameter

```json
{
  "otp": "string",
  "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="verify-aadhar-otp-sent-as-part-of-forgethealth-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[AuthAccountAadhaarOTPRequest](#schemaauthaccountaadhaarotprequest)|true|authAccountAadhaarOTPRequest|
|» otp|body|string|true|none|
|» txnId|body|string(uuid)|true|none|

<h3 id="verify-aadhar-otp-sent-as-part-of-forgethealth-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RetrieveHealthIdPayloadResponse](#schemaretrievehealthidpayloadresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Generate Aadhaar OTP on registrered mobile number

<a id="opIdgenerateAadharOTPUsingPOST_1"></a>

> Code samples

```bash
curl https://example.com/v1/forgot/healthId/aadhaar/generateOtp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "aadhaar": "string"
  }'
```

`POST /v1/forgot/healthId/aadhaar/generateOtp`

Generate Aadhaar OTP on registrered mobile number

> Body parameter

```json
{
  "aadhaar": "string"
}
```

<h3 id="generate-aadhaar-otp-on-registrered-mobile-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[AadharOtpGenerateRequestPayLoad](#schemaaadharotpgeneraterequestpayload)|true|generateOtpRequest|
|» aadhaar|body|string|false|none|

<h3 id="generate-aadhaar-otp-on-registrered-mobile-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TxnResponse](#schematxnresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Verify Mobile OTP sent as part of forgetHealth id.

<a id="opIdretrievalHealthIdByMobileUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/forgot/healthId/mobile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "dayOfBirth": "string",
    "firstName": "string",
    "gender": "string",
    "lastName": "string",
    "middleName": "string",
    "monthOfBirth": "string",
    "name": "string",
    "otp": "string",
    "txnId": "string",
    "yearOfBirth": "string"
  }'
```

`POST /v1/forgot/healthId/mobile`

Verify Mobile OTP sent as  part of forgetHealth id.

> Body parameter

```json
{
  "dayOfBirth": "string",
  "firstName": "string",
  "gender": "string",
  "lastName": "string",
  "middleName": "string",
  "monthOfBirth": "string",
  "name": "string",
  "otp": "string",
  "txnId": "string",
  "yearOfBirth": "string"
}
```

<h3 id="verify-mobile-otp-sent-as-part-of-forgethealth-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[RetriveHealthIdMobilePayLoad](#schemaretrivehealthidmobilepayload)|true|retriveHealthIdMobilePayLoad|
|» dayOfBirth|body|string|false|none|
|» firstName|body|string|false|none|
|» gender|body|string|false|none|
|» lastName|body|string|false|none|
|» middleName|body|string|false|none|
|» monthOfBirth|body|string|false|none|
|» name|body|string|false|none|
|» otp|body|string|false|none|
|» txnId|body|string|true|none|
|» yearOfBirth|body|string|false|none|

<h3 id="verify-mobile-otp-sent-as-part-of-forgethealth-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RetrieveHealthIdPayloadResponse](#schemaretrievehealthidpayloadresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Generate Mobile OTP to start registration

<a id="opIdgenerateMobileOTPUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/forgot/healthId/mobile/generateOtp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "mobile": "string"
  }'
```

`POST /v1/forgot/healthId/mobile/generateOtp`

Generate Mobile OTP to start registration transaction.

> Body parameter

```json
{
  "mobile": "string"
}
```

<h3 id="generate-mobile-otp-to-start-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[GenerateMobileOTPRequest](#schemageneratemobileotprequest)|true|generateOtpRequest|
|» mobile|body|string|false|none|

<h3 id="generate-mobile-otp-to-start-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TxnResponse](#schematxnresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

<h1 id="health-id-service-health-facility">Health Facility</h1>

Create Health facility ID APIs

## Generate token for heath facility id.

<a id="opIdauthenticateHealthFacilityUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/health/facility/authenticate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "hfrUid": "string",
    "password": "string"
  }'
```

`POST /v1/health/facility/authenticate`

Generate token for heath facility id.

> Body parameter

```json
{
  "hfrUid": "string",
  "password": "string"
}
```

<h3 id="generate-token-for-heath-facility-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[HealthFacilityAuthenticationRequest](#schemahealthfacilityauthenticationrequest)|true|healthFacilityAuthenticationRequest|
|» hfrUid|body|string|false|none|
|» password|body|string|false|none|

<h3 id="generate-token-for-heath-facility-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Change password for heath facility id.

<a id="opIdchangePasswordUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/health/facility/change/password \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "hfrUid": "string",
    "newPassword": "string",
    "oldPassword": "string"
  }'
```

`POST /v1/health/facility/change/password`

Change password for heath facility id.

> Body parameter

```json
{
  "hfrUid": "string",
  "newPassword": "string",
  "oldPassword": "string"
}
```

<h3 id="change-password-for-heath-facility-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[HealthFacilityChangedPasswordRequest](#schemahealthfacilitychangedpasswordrequest)|true|healthFacilityPasswordRequest|
|» hfrUid|body|string|false|none|
|» newPassword|body|string|false|none|
|» oldPassword|body|string|false|none|

<h3 id="change-password-for-heath-facility-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Generate Health ID card SVG

<a id="opIdcreateAadhaarAccountUsingPOST_1"></a>

> Code samples

```bash
curl https://example.com/v1/health/facility/createHealthIdWithPreVerified \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "email": "string",
    "firstName": "string",
    "healthId": "string",
    "lastName": "string",
    "middleName": "string",
    "password": "string",
    "profilePhoto": "string",
    "txnId": "string"
  }'
```

`POST /v1/health/facility/createHealthIdWithPreVerified`

> Body parameter

```json
{
  "email": "string",
  "firstName": "string",
  "healthId": "string",
  "lastName": "string",
  "middleName": "string",
  "password": "string",
  "profilePhoto": "string",
  "txnId": "string"
}
```

<h3 id="generate-health-id-card-svg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[CreateAccountWithPreVerifiedAadhaar](#schemacreateaccountwithpreverifiedaadhaar)|true|accountRequest|
|» email|body|string|false|none|
|» firstName|body|string|false|none|
|» healthId|body|string|false|none|
|» lastName|body|string|false|none|
|» middleName|body|string|false|none|
|» password|body|string|false|none|
|» profilePhoto|body|string|false|none|
|» txnId|body|string|false|none|

<h3 id="generate-health-id-card-svg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateAccountJwtResponse](#schemacreateaccountjwtresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Generates password for heath facility id.

<a id="opIdgeneratePasswordUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/health/facility/generate/password \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "hfrUid": "string"
  }'
```

`POST /v1/health/facility/generate/password`

Generates password for heath facility id.

> Body parameter

```json
{
  "hfrUid": "string"
}
```

<h3 id="generates-password-for-heath-facility-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[HealthFacilityPasswordRequest](#schemahealthfacilitypasswordrequest)|true|healthFacilityPasswordRequest|
|» hfrUid|body|string|false|none|

<h3 id="generates-password-for-heath-facility-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Generate health hacility OTP on registrered mobile number

<a id="opIdgenerateFacilityOTPUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/health/facility/generateOtp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer XToken' \
  -d '{
    "aadhaar": "string"
  }'
```

`POST /v1/health/facility/generateOtp`

Generate health facility OTP on registrered mobile number

> Body parameter

```json
{
  "aadhaar": "string"
}
```

<h3 id="generate-health-hacility-otp-on-registrered-mobile-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|
|body|body|[AadharOtpGenerateRequestPayLoad](#schemaaadharotpgeneraterequestpayload)|true|generateOtpRequest|
|» aadhaar|body|string|false|none|

<h3 id="generate-health-hacility-otp-on-registrered-mobile-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TxnResponse](#schematxnresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## generateSvgCard

<a id="opIdgenerateSvgCardUsingGET_1"></a>

> Code samples

```bash
curl https://example.com/v1/health/facility/getSvgCard \
  -H "Authorization: ${API_KEY}" \
  -H 'Health-ID: demo@ndhm' \
  -H 'X-Token: Bearer X-Token'
```

`GET /v1/health/facility/getSvgCard`

<h3 id="generatesvgcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|Health-ID|header|string|true|Your health id|
|X-Token|header|string|true|Auth Token|

<h3 id="generatesvgcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Reset password for heath facility id.

<a id="opIdresetPasswordUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/health/facility/reset/password \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "hfrUid": "string"
  }'
```

`POST /v1/health/facility/reset/password`

Reset password for heath facility id.

> Body parameter

```json
{
  "hfrUid": "string"
}
```

<h3 id="reset-password-for-heath-facility-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[HealthFacilityPasswordRequest](#schemahealthfacilitypasswordrequest)|true|healthFacilityPasswordRequest|
|» hfrUid|body|string|false|none|

<h3 id="reset-password-for-heath-facility-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

<h1 id="health-id-service-integrated-programs">Integrated Programs</h1>

APIs to be published by the Health ID system for benefit linkage

## Generate Aadhaar OTP on registrered mobile number

<a id="opIdgenerateAadharOTPUsingPOST_2"></a>

> Code samples

```bash
curl https://example.com/v1/hid/benefit/aadhaar/generateOtp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "aadhaar": "string"
  }'
```

`POST /v1/hid/benefit/aadhaar/generateOtp`

Generate Aadhaar OTP on registrered mobile number

> Body parameter

```json
{
  "aadhaar": "string"
}
```

<h3 id="generate-aadhaar-otp-on-registrered-mobile-number-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[AadharOtpGenerateRequestPayLoad](#schemaaadharotpgeneraterequestpayload)|true|generateOtpRequest|
|» aadhaar|body|string|false|none|

<h3 id="generate-aadhaar-otp-on-registrered-mobile-number-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TxnResponse](#schematxnresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Create health id using Aadhaar Number Otp.

<a id="opIdverifyAadharOtpUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/hid/benefit/aadhaar/verifyAadharOtp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "autoGeneratedBenefitId": true,
    "benefitId": "string",
    "benefitName": "string",
    "consentHealthId": true,
    "mobileNumber": "string",
    "otp": "string",
    "txnId": "string",
    "validity": "string"
  }'
```

`POST /v1/hid/benefit/aadhaar/verifyAadharOtp`

Create health id using Aadhaar number opt

> Body parameter

```json
{
  "autoGeneratedBenefitId": true,
  "benefitId": "string",
  "benefitName": "string",
  "consentHealthId": true,
  "mobileNumber": "string",
  "otp": "string",
  "txnId": "string",
  "validity": "string"
}
```

<h3 id="create-health-id-using-aadhaar-number-otp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[CreateHealthIdOptRequest](#schemacreatehealthidoptrequest)|true|createHealthIdOptRequest|
|» autoGeneratedBenefitId|body|boolean|false|none|
|» benefitId|body|string|false|none|
|» benefitName|body|string|false|none|
|» consentHealthId|body|boolean|false|none|
|» mobileNumber|body|string|false|none|
|» otp|body|string|false|none|
|» txnId|body|string|false|none|
|» validity|body|string|false|none|

<h3 id="create-health-id-using-aadhaar-number-otp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HidBenefitRequestPayload](#schemahidbenefitrequestpayload)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Create health id using Biometric Authentication.

<a id="opIdverifyBioUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/hid/benefit/aadhaar/verifyBio \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "aadhaar": "string",
    "autoGeneratedBenefitId": true,
    "benefitId": "string",
    "benefitName": "string",
    "bioType": "string",
    "consentHealthId": true,
    "mobileNumber": "string",
    "pid": "string",
    "validity": "string"
  }'
```

`POST /v1/hid/benefit/aadhaar/verifyBio`

Create health id using Biometric Authentication.

> Body parameter

```json
{
  "aadhaar": "string",
  "autoGeneratedBenefitId": true,
  "benefitId": "string",
  "benefitName": "string",
  "bioType": "string",
  "consentHealthId": true,
  "mobileNumber": "string",
  "pid": "string",
  "validity": "string"
}
```

<h3 id="create-health-id-using-biometric-authentication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[CreateHidBiometricRequest](#schemacreatehidbiometricrequest)|true|createHidBiometricRequest|
|» aadhaar|body|string|false|none|
|» autoGeneratedBenefitId|body|boolean|false|none|
|» benefitId|body|string|false|none|
|» benefitName|body|string|false|none|
|» bioType|body|string|false|none|
|» consentHealthId|body|boolean|false|none|
|» mobileNumber|body|string|false|none|
|» pid|body|string|false|none|
|» validity|body|string|false|none|

<h3 id="create-health-id-using-biometric-authentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HidBenefitRequestPayload](#schemahidbenefitrequestpayload)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Create health id using Aadhaar Demo Auth.

<a id="opIdcreateHealthIdByDemoAuthUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/hid/benefit/createHealthId/demo/auth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "aadharNumber": "string",
    "autoGeneratedBenefitId": true,
    "benefitId": "string",
    "benefitName": "string",
    "consentHealthId": true,
    "dateOfBirth": "string",
    "gender": "string",
    "mobileNumber": "string",
    "name": "string",
    "validity": "string"
  }'
```

`POST /v1/hid/benefit/createHealthId/demo/auth`

Create health id using Aadhaar Demo Auth.

> Body parameter

```json
{
  "aadharNumber": "string",
  "autoGeneratedBenefitId": true,
  "benefitId": "string",
  "benefitName": "string",
  "consentHealthId": true,
  "dateOfBirth": "string",
  "gender": "string",
  "mobileNumber": "string",
  "name": "string",
  "validity": "string"
}
```

<h3 id="create-health-id-using-aadhaar-demo-auth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[CreateHIdDemoAuthRequest](#schemacreatehiddemoauthrequest)|true|createHIdDemoAuthRequest|
|» aadharNumber|body|string|false|none|
|» autoGeneratedBenefitId|body|boolean|false|none|
|» benefitId|body|string|false|none|
|» benefitName|body|string|false|none|
|» consentHealthId|body|boolean|false|none|
|» dateOfBirth|body|string|false|none|
|» gender|body|string|false|none|
|» mobileNumber|body|string|false|none|
|» name|body|string|false|none|
|» validity|body|string|false|none|

<h3 id="create-health-id-using-aadhaar-demo-auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HidBenefitRequestPayload](#schemahidbenefitrequestpayload)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## De-Linked with hid.

<a id="opIddelinkHidBenefitUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/hid/benefit/delink \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "benefitName": "string",
    "uidToken": "string"
  }'
```

`POST /v1/hid/benefit/delink`

De-Linked with hid.

> Body parameter

```json
{
  "benefitName": "string",
  "uidToken": "string"
}
```

<h3 id="de-linked-with-hid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[HidBenefitDelinkRequestPayload](#schemahidbenefitdelinkrequestpayload)|true|hidBenefitLinkedRequestPayload|
|» benefitName|body|string|false|none|
|» uidToken|body|string|false|none|

<h3 id="de-linked-with-hid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HidBenefitLinkedResponsePayload](#schemahidbenefitlinkedresponsepayload)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Linked with hid.

<a id="opIdlinkHidBenefitUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/hid/benefit/link \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "benefitId": "string",
    "benefitName": "string",
    "stateCode": "string",
    "uidToken": "string",
    "validity": "string"
  }'
```

`POST /v1/hid/benefit/link`

Linked with hid.

> Body parameter

```json
{
  "benefitId": "string",
  "benefitName": "string",
  "stateCode": "string",
  "uidToken": "string",
  "validity": "string"
}
```

<h3 id="linked-with-hid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[HidBenefitLinkedRequestPayload](#schemahidbenefitlinkedrequestpayload)|true|hidBenefitLinkedRequestPayload|
|» benefitId|body|string|false|none|
|» benefitName|body|string|false|none|
|» stateCode|body|string|false|none|
|» uidToken|body|string|false|none|
|» validity|body|string|false|none|

<h3 id="linked-with-hid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HidBenefitLinkedResponsePayload](#schemahidbenefitlinkedresponsepayload)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Create health id using mobile Authentication.

<a id="opIdcreateHealthIdByMobileUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/hid/benefit/mobile/createHealthId \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "autoGeneratedBenefitId": true,
    "benefitDocType": "VOTER_ID_CARD",
    "benefitId": "string",
    "benefitName": "string",
    "consentHealthId": true,
    "dateOfBirth": "string",
    "docNumber": "string",
    "fileType": "string",
    "gender": "string",
    "name": "string",
    "otp": "string",
    "txnId": "string",
    "uploadedDoc": "string",
    "validity": "string"
  }'
```

`POST /v1/hid/benefit/mobile/createHealthId`

Create health id using mobile Authentication.

> Body parameter

```json
{
  "autoGeneratedBenefitId": true,
  "benefitDocType": "VOTER_ID_CARD",
  "benefitId": "string",
  "benefitName": "string",
  "consentHealthId": true,
  "dateOfBirth": "string",
  "docNumber": "string",
  "fileType": "string",
  "gender": "string",
  "name": "string",
  "otp": "string",
  "txnId": "string",
  "uploadedDoc": "string",
  "validity": "string"
}
```

<h3 id="create-health-id-using-mobile-authentication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[CreateHidMobileRequest](#schemacreatehidmobilerequest)|true|createHidMobileRequest|
|» autoGeneratedBenefitId|body|boolean|false|none|
|» benefitDocType|body|string|false|none|
|» benefitId|body|string|false|none|
|» benefitName|body|string|false|none|
|» consentHealthId|body|boolean|false|none|
|» dateOfBirth|body|string|false|none|
|» docNumber|body|string|false|none|
|» fileType|body|string|false|none|
|» gender|body|string|false|none|
|» name|body|string|false|none|
|» otp|body|string|false|none|
|» txnId|body|string|false|none|
|» uploadedDoc|body|string|false|none|
|» validity|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» benefitDocType|VOTER_ID_CARD|
|» benefitDocType|RATION_CARD|
|» benefitDocType|PAN_CARD|
|» benefitDocType|DRIVING_LICENSE|
|» benefitDocType|PENSIONER_PHOTO_CARD|
|» benefitDocType|KISSAN_PHOTO_PASSBOOK|
|» benefitDocType|FREEDOM_FIGHTER_PHOTO_CARD|
|» benefitDocType|CERTIFICATE_IDENTIFY|
|» benefitDocType|DISABILITY_ID_CARD|
|» benefitDocType|MNREGA_JOB_CARD|
|» benefitDocType|BIRTH_CERTIFICATE|
|» benefitDocType|MARRIAGE_CERTIFICATE|
|» benefitDocType|OTHER_GOVERNMENT_ID|
|» benefitDocType|ADOPTION_CERTIFICATE|

<h3 id="create-health-id-using-mobile-authentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TxnResponse](#schematxnresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Generate mobile OTP on registrered mobile number

<a id="opIdgenerateMobileOtpUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/hid/benefit/mobile/generateOtp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "mobile": "string"
  }'
```

`POST /v1/hid/benefit/mobile/generateOtp`

Generate mobile OTP on registrered mobile number

> Body parameter

```json
{
  "mobile": "string"
}
```

<h3 id="generate-mobile-otp-on-registrered-mobile-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[GenerateMobileOTPRequest](#schemageneratemobileotprequest)|true|generateOtpRequest|
|» mobile|body|string|false|none|

<h3 id="generate-mobile-otp-on-registrered-mobile-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TxnResponse](#schematxnresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Create health id using notify Benefit.

<a id="opIdnotifyBenefitUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/hid/benefit/notify/benefit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "aadharNumberOrUidToken": "string",
    "autoGeneratedBenefitId": true,
    "benefitId": "string",
    "benefitName": "string",
    "consentHealthId": true,
    "dateOfBirth": "string",
    "gender": "string",
    "mobileNumber": "string",
    "name": "string",
    "stateCode": "string",
    "validity": "string"
  }'
```

`POST /v1/hid/benefit/notify/benefit`

Create health id using notify Benefit.

> Body parameter

```json
{
  "aadharNumberOrUidToken": "string",
  "autoGeneratedBenefitId": true,
  "benefitId": "string",
  "benefitName": "string",
  "consentHealthId": true,
  "dateOfBirth": "string",
  "gender": "string",
  "mobileNumber": "string",
  "name": "string",
  "stateCode": "string",
  "validity": "string"
}
```

<h3 id="create-health-id-using-notify-benefit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[CreateHidNotifyBenefitRequest](#schemacreatehidnotifybenefitrequest)|true|createHidNotifyBenefitRequest|
|» aadharNumberOrUidToken|body|string|false|none|
|» autoGeneratedBenefitId|body|boolean|false|none|
|» benefitId|body|string|false|none|
|» benefitName|body|string|false|none|
|» consentHealthId|body|boolean|false|none|
|» dateOfBirth|body|string|false|none|
|» gender|body|string|false|none|
|» mobileNumber|body|string|false|none|
|» name|body|string|false|none|
|» stateCode|body|string|false|none|
|» validity|body|string|false|none|

<h3 id="create-health-id-using-notify-benefit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HidBenefitRequestPayload](#schemahidbenefitrequestpayload)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Search health id number using aadhar or aadhar token.

<a id="opIdfindByAadharUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/hid/benefit/search/aadhaar \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "aadhaar": "string"
  }'
```

`POST /v1/hid/benefit/search/aadhaar`

Search health id number using aadhar or aadhar token.

> Body parameter

```json
{
  "aadhaar": "string"
}
```

<h3 id="search-health-id-number-using-aadhar-or-aadhar-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[AadharNumberRequestPayload](#schemaaadharnumberrequestpayload)|true|aadharNumberRequestPayload|
|» aadhaar|body|string|false|none|

<h3 id="search-health-id-number-using-aadhar-or-aadhar-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="search-health-id-number-using-aadhar-or-aadhar-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Search benefit using health id number.

<a id="opIdfindByHealthIdUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/hid/benefit/search/healthIdNumber \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "benefitId": "string",
    "healthId": "string"
  }'
```

`POST /v1/hid/benefit/search/healthIdNumber`

Search benefit using health id number

> Body parameter

```json
{
  "benefitId": "string",
  "healthId": "string"
}
```

<h3 id="search-benefit-using-health-id-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[HidBenefitNameSearchRequest](#schemahidbenefitnamesearchrequest)|true|searchRequest|
|» benefitId|body|string|false|none|
|» healthId|body|string|false|none|

<h3 id="search-benefit-using-health-id-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="search-benefit-using-health-id-number-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[HidBenefitSearchResponsePayload](#schemahidbenefitsearchresponsepayload)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Update mobile number for account.

<a id="opIdupdateMobileInformationUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/hid/benefit/update/mobile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "healthIdNumber": "string",
    "mobile": "string"
  }'
```

`POST /v1/hid/benefit/update/mobile`

> Body parameter

```json
{
  "healthIdNumber": "string",
  "mobile": "string"
}
```

<h3 id="update-mobile-number-for-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[HidUpdateMobiletRequest](#schemahidupdatemobiletrequest)|true|request|
|» healthIdNumber|body|string|false|none|
|» mobile|body|string|false|none|

<h3 id="update-mobile-number-for-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserDTO](#schemauserdto)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Update account information

<a id="opIdupdateAccountInformationUsingPOST_1"></a>

> Code samples

```bash
curl https://example.com/v1/hid/benefit/update/profile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "address": "string",
    "dayOfBirth": "string",
    "districtCode": "string",
    "email": "string",
    "firstName": "string",
    "healthId": "string",
    "healthIdNumber": "string",
    "lastName": "string",
    "middleName": "string",
    "monthOfBirth": "string",
    "password": "string",
    "pincode": 0,
    "profilePhoto": "string",
    "stateCode": "string",
    "subdistrictCode": "string",
    "townCode": "string",
    "villageCode": "string",
    "wardCode": "string",
    "yearOfBirth": "string"
  }'
```

`POST /v1/hid/benefit/update/profile`

> Body parameter

```json
{
  "address": "string",
  "dayOfBirth": "string",
  "districtCode": "string",
  "email": "string",
  "firstName": "string",
  "healthId": "string",
  "healthIdNumber": "string",
  "lastName": "string",
  "middleName": "string",
  "monthOfBirth": "string",
  "password": "string",
  "pincode": 0,
  "profilePhoto": "string",
  "stateCode": "string",
  "subdistrictCode": "string",
  "townCode": "string",
  "villageCode": "string",
  "wardCode": "string",
  "yearOfBirth": "string"
}
```

<h3 id="update-account-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[HidUpdateAccountRequest](#schemahidupdateaccountrequest)|true|request|
|» address|body|string|false|none|
|» dayOfBirth|body|string|false|none|
|» districtCode|body|string|false|none|
|» email|body|string|false|none|
|» firstName|body|string|false|none|
|» healthId|body|string|false|none|
|» healthIdNumber|body|string|false|none|
|» lastName|body|string|false|none|
|» middleName|body|string|false|none|
|» monthOfBirth|body|string|false|none|
|» password|body|string|false|none|
|» pincode|body|integer(int32)|false|none|
|» profilePhoto|body|string|false|none|
|» stateCode|body|string|false|none|
|» subdistrictCode|body|string|false|none|
|» townCode|body|string|false|none|
|» villageCode|body|string|false|none|
|» wardCode|body|string|false|none|
|» yearOfBirth|body|string|false|none|

<h3 id="update-account-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserDTO](#schemauserdto)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Update health id status .

<a id="opIdupdateStatusUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/hid/benefit/update/status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "healthIdNumber": "string"
  }'
```

`POST /v1/hid/benefit/update/status`

Update health id status.

> Body parameter

```json
{
  "healthIdNumber": "string"
}
```

<h3 id="update-health-id-status--parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[HidStatusRequestPayload](#schemahidstatusrequestpayload)|true|generateOtpRequest|
|» healthIdNumber|body|string|false|none|

<h3 id="update-health-id-status--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

<h1 id="health-id-service-profile">Profile</h1>

Health ID Profile APIs (requires authenticated user token)

## Generate Aadhaar OTP on registrered for link account with aadhar number

<a id="opIdgeneratereKycAadharOTPUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/account/aadhaar/generateOTP \
  -X POST \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer X-Token'
```

`POST /v1/account/aadhaar/generateOTP`

Generate Aadhaar OTP on registrered for link account with aadhar number

<h3 id="generate-aadhaar-otp-on-registrered-for-link-account-with-aadhar-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|

<h3 id="generate-aadhaar-otp-on-registrered-for-link-account-with-aadhar-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TxnResponse](#schematxnresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Verify Aadhaar OTP to complete KYC/re-KYC verification.

<a id="opIdverifyAadharOTPOnlyUsingPOST_1"></a>

> Code samples

```bash
curl https://example.com/v1/account/aadhaar/verifyOTP \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer X-Token' \
  -d '{
    "otp": "string",
    "restrictions": "string",
    "txnId": "string"
  }'
```

`POST /v1/account/aadhaar/verifyOTP`

Verify Aadhaar OTP to complete KYC/re-KYC verification

> Body parameter

```json
{
  "otp": "string",
  "restrictions": "string",
  "txnId": "string"
}
```

<h3 id="verify-aadhaar-otp-to-complete-kycre-kyc-verification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|
|body|body|[VerifyAadhaarOtp](#schemaverifyaadhaarotp)|true|verifyAadhaarOtp|
|» otp|body|string|false|none|
|» restrictions|body|string|false|none|
|» txnId|body|string|false|none|

<h3 id="verify-aadhaar-otp-to-complete-kycre-kyc-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Get List of Benefits associated with HealthID.

<a id="opIdgetBenefitsUsingGET"></a>

> Code samples

```bash
curl https://example.com/v1/account/benefits \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer XToken'
```

`GET /v1/account/benefits`

<h3 id="get-list-of-benefits-associated-with-healthid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|

<h3 id="get-list-of-benefits-associated-with-healthid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserDTO](#schemauserdto)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Change password via Aadhar for heath id.

<a id="opIdchangePasswordViaAadharUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/account/change/passwd/byAadhaar \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer X-Token' \
  -d '{
    "newPassword": "string",
    "otp": "string",
    "txnId": "string"
  }'
```

`POST /v1/account/change/passwd/byAadhaar`

Change password via Aadhar for heath id.

> Body parameter

```json
{
  "newPassword": "string",
  "otp": "string",
  "txnId": "string"
}
```

<h3 id="change-password-via-aadhar-for-heath-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|
|body|body|[HidOtpRequestPaylaod](#schemahidotprequestpaylaod)|true|hidOtpRequestPaylaod|
|» newPassword|body|string|false|none|
|» otp|body|string|false|none|
|» txnId|body|string|false|none|

<h3 id="change-password-via-aadhar-for-heath-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Change password via mobile for heath id.

<a id="opIdchangePasswordViaMobileUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/account/change/passwd/byMobile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer X-Token' \
  -d '{
    "newPassword": "string",
    "otp": "string",
    "txnId": "string"
  }'
```

`POST /v1/account/change/passwd/byMobile`

Change password via mobile for heath id.

> Body parameter

```json
{
  "newPassword": "string",
  "otp": "string",
  "txnId": "string"
}
```

<h3 id="change-password-via-mobile-for-heath-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|
|body|body|[HidOtpRequestPaylaod](#schemahidotprequestpaylaod)|true|hidOtpRequestPaylaod|
|» newPassword|body|string|false|none|
|» otp|body|string|false|none|
|» txnId|body|string|false|none|

<h3 id="change-password-via-mobile-for-heath-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Generate Aadhaar OTP on registrered mobile number.

<a id="opIdgenerateAadharOTPUsingGET"></a>

> Code samples

```bash
curl https://example.com/v1/account/change/passwd/generateAadhaarOTP \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer X-Token'
```

`GET /v1/account/change/passwd/generateAadhaarOTP`

Generate Aadhaar OTP on registrered mobile number.

<h3 id="generate-aadhaar-otp-on-registrered-mobile-number-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|

<h3 id="generate-aadhaar-otp-on-registrered-mobile-number-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Generate Mobile OTP to start registration.

<a id="opIdgenerateMobileOTPUsingGET"></a>

> Code samples

```bash
curl https://example.com/v1/account/change/passwd/generateMobileOTP \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer X-Token'
```

`GET /v1/account/change/passwd/generateMobileOTP`

Generate Mobile OTP to start registration.

<h3 id="generate-mobile-otp-to-start-registration-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|

<h3 id="generate-mobile-otp-to-start-registration-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Change password via password for heath id.

<a id="opIdchangePasswordViaUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/account/change/password \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer X-Token' \
  -d '{
    "newPassword": "string",
    "oldPassword": "string"
  }'
```

`POST /v1/account/change/password`

Change password via password for heath id.

> Body parameter

```json
{
  "newPassword": "string",
  "oldPassword": "string"
}
```

<h3 id="change-password-via-password-for-heath-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|
|body|body|[HidChangePasswordRequestPayload](#schemahidchangepasswordrequestpayload)|true|healthFacilityPasswordRequest|
|» newPassword|body|string|false|none|
|» oldPassword|body|string|false|none|

<h3 id="change-password-via-password-for-heath-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Generate Health ID card in PDF format

<a id="opIdgenerateCardUsingGET"></a>

> Code samples

```bash
curl https://example.com/v1/account/getCard \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer X-Token'
```

`GET /v1/account/getCard`

<h3 id="generate-health-id-card-in-pdf-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|

<h3 id="generate-health-id-card-in-pdf-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserDTO](#schemauserdto)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Generate Health ID card PNG

<a id="opIdgeneratePngCardUsingGET"></a>

> Code samples

```bash
curl https://example.com/v1/account/getPngCard \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer X-Token'
```

`GET /v1/account/getPngCard`

<h3 id="generate-health-id-card-png-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|

<h3 id="generate-health-id-card-png-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserDTO](#schemauserdto)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Generate Health ID card SVG

<a id="opIdgenerateSvgCardUsingGET"></a>

> Code samples

```bash
curl https://example.com/v1/account/getSvgCard \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer X-Token'
```

`GET /v1/account/getSvgCard`

<h3 id="generate-health-id-card-svg-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|

<h3 id="generate-health-id-card-svg-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserDTO](#schemauserdto)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Get account information.

<a id="opIdgetAccountInformationUsingGET"></a>

> Code samples

```bash
curl https://example.com/v1/account/profile \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer XToken'
```

`GET /v1/account/profile`

<h3 id="get-account-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|

<h3 id="get-account-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserDTO](#schemauserdto)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Update account information

<a id="opIdupdateAccountInformationUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/account/profile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer X-Token' \
  -d '{
    "address": "string",
    "dayOfBirth": "string",
    "districtCode": "string",
    "email": "string",
    "firstName": "string",
    "healthId": "string",
    "lastName": "string",
    "middleName": "string",
    "monthOfBirth": "string",
    "password": "string",
    "pincode": 0,
    "profilePhoto": "string",
    "stateCode": "string",
    "subdistrictCode": "string",
    "townCode": "string",
    "villageCode": "string",
    "wardCode": "string",
    "yearOfBirth": "string"
  }'
```

`POST /v1/account/profile`

> Body parameter

```json
{
  "address": "string",
  "dayOfBirth": "string",
  "districtCode": "string",
  "email": "string",
  "firstName": "string",
  "healthId": "string",
  "lastName": "string",
  "middleName": "string",
  "monthOfBirth": "string",
  "password": "string",
  "pincode": 0,
  "profilePhoto": "string",
  "stateCode": "string",
  "subdistrictCode": "string",
  "townCode": "string",
  "villageCode": "string",
  "wardCode": "string",
  "yearOfBirth": "string"
}
```

<h3 id="update-account-information-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|
|body|body|[UpdateAccountRequest](#schemaupdateaccountrequest)|true|request|
|» address|body|string|false|none|
|» dayOfBirth|body|string|false|none|
|» districtCode|body|string|false|none|
|» email|body|string|false|none|
|» firstName|body|string|false|none|
|» healthId|body|string|false|none|
|» lastName|body|string|false|none|
|» middleName|body|string|false|none|
|» monthOfBirth|body|string|false|none|
|» password|body|string|false|none|
|» pincode|body|integer(int32)|false|none|
|» profilePhoto|body|string|false|none|
|» stateCode|body|string|false|none|
|» subdistrictCode|body|string|false|none|
|» townCode|body|string|false|none|
|» villageCode|body|string|false|none|
|» wardCode|body|string|false|none|
|» yearOfBirth|body|string|false|none|

<h3 id="update-account-information-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserDTO](#schemauserdto)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Delete account

<a id="opIddeleteAccountUsingDELETE"></a>

> Code samples

```bash
curl https://example.com/v1/account/profile \
  -X DELETE \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer X-Token'
```

`DELETE /v1/account/profile`

<h3 id="delete-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|

<h3 id="delete-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Get Quick Response code in PNG format for this account.

<a id="opIdgetQrCodeUsingGET"></a>

> Code samples

```bash
curl https://example.com/v1/account/qrCode \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer XToken'
```

`GET /v1/account/qrCode`

<h3 id="get-quick-response-code-in-png-format-for-this-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|

<h3 id="get-quick-response-code-in-png-format-for-this-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Validate auth token

<a id="opIdvalidateTokenUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/account/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "authToken": "string"
  }'
```

`POST /v1/account/token`

> Body parameter

```json
{
  "authToken": "string"
}
```

<h3 id="validate-auth-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[ValidateTokenRequest](#schemavalidatetokenrequest)|true|request|
|» authToken|body|string|false|none|

<h3 id="validate-auth-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

<h1 id="health-id-service-registration-with-aadhaar">Registration with Aadhaar</h1>

APIs to create Health ID using Aadhaar number & mobile number.

## Verify Aadhaar OTP on registrered mobile number to create Health ID.

<a id="opIdverifyAadharOTPUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/registration/aadhaar/createHealthIdWithAadhaarOtp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "middleName": "string",
    "mobile": "string",
    "otp": "string",
    "password": "string",
    "profilePhoto": "string",
    "restrictions": "string",
    "txnId": "string",
    "username": "string"
  }'
```

`POST /v1/registration/aadhaar/createHealthIdWithAadhaarOtp`

Verify Aadhar OTP received on registrered mobile number

> Body parameter

```json
{
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "middleName": "string",
  "mobile": "string",
  "otp": "string",
  "password": "string",
  "profilePhoto": "string",
  "restrictions": "string",
  "txnId": "string",
  "username": "string"
}
```

<h3 id="verify-aadhaar-otp-on-registrered-mobile-number-to-create-health-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[CreateAccountWithAadhaarOtp](#schemacreateaccountwithaadhaarotp)|true|verifyAadharOtpRequest|
|» email|body|string|false|none|
|» firstName|body|string|false|none|
|» lastName|body|string|false|none|
|» middleName|body|string|false|none|
|» mobile|body|string|false|none|
|» otp|body|string|false|none|
|» password|body|string|false|none|
|» profilePhoto|body|string|false|none|
|» restrictions|body|string|false|none|
|» txnId|body|string|false|none|
|» username|body|string|false|none|

<h3 id="verify-aadhaar-otp-on-registrered-mobile-number-to-create-health-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateAccountJwtResponse](#schemacreateaccountjwtresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Create Health ID using pre-verified Aadhaar &amp; Mobile.

<a id="opIdcreateAadhaarAccountUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/registration/aadhaar/createHealthIdWithPreVerified \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "email": "string",
    "firstName": "string",
    "healthId": "string",
    "lastName": "string",
    "middleName": "string",
    "password": "string",
    "profilePhoto": "string",
    "txnId": "string"
  }'
```

`POST /v1/registration/aadhaar/createHealthIdWithPreVerified`

Create Health ID using pre-verified Aadhaar & Mobile.

> Body parameter

```json
{
  "email": "string",
  "firstName": "string",
  "healthId": "string",
  "lastName": "string",
  "middleName": "string",
  "password": "string",
  "profilePhoto": "string",
  "txnId": "string"
}
```

<h3 id="create-health-id-using-pre-verified-aadhaar-mobile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[CreateAccountWithPreVerifiedAadhaar](#schemacreateaccountwithpreverifiedaadhaar)|true|accountRequest|
|» email|body|string|false|none|
|» firstName|body|string|false|none|
|» healthId|body|string|false|none|
|» lastName|body|string|false|none|
|» middleName|body|string|false|none|
|» password|body|string|false|none|
|» profilePhoto|body|string|false|none|
|» txnId|body|string|false|none|

<h3 id="create-health-id-using-pre-verified-aadhaar-mobile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateAccountJwtResponse](#schemacreateaccountjwtresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Generate Mobile OTP for verification.

<a id="opIdgenerateMobileOTPForTxnUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/registration/aadhaar/generateMobileOTP \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "mobile": "string",
    "txnId": "string"
  }'
```

`POST /v1/registration/aadhaar/generateMobileOTP`

Generate Mobile OTP to verify mobile number.

> Body parameter

```json
{
  "mobile": "string",
  "txnId": "string"
}
```

<h3 id="generate-mobile-otp-for-verification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[GenerateMobileOTPForTxnRequest](#schemageneratemobileotpfortxnrequest)|true|request|
|» mobile|body|string|false|none|
|» txnId|body|string|false|none|

<h3 id="generate-mobile-otp-for-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TxnResponse](#schematxnresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Generate Aadhaar OTP on registrered mobile number

<a id="opIdgenerateAadharOTPUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/registration/aadhaar/generateOtp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "aadhaar": "string"
  }'
```

`POST /v1/registration/aadhaar/generateOtp`

Generate Aadhaar OTP on registrered mobile number

> Body parameter

```json
{
  "aadhaar": "string"
}
```

<h3 id="generate-aadhaar-otp-on-registrered-mobile-number-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[AadharOtpGenerateRequestPayLoad](#schemaaadharotpgeneraterequestpayload)|true|generateOtpRequest|
|» aadhaar|body|string|false|none|

<h3 id="generate-aadhaar-otp-on-registrered-mobile-number-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TxnResponse](#schematxnresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Resend Aadhaar OTP on registrered mobile number to create Health ID.

<a id="opIdresendAadharOTPUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/registration/aadhaar/resendAadhaarOtp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "txnId": "string"
  }'
```

`POST /v1/registration/aadhaar/resendAadhaarOtp`

Resend Aadhar OTP on registrered mobile number

> Body parameter

```json
{
  "txnId": "string"
}
```

<h3 id="resend-aadhaar-otp-on-registrered-mobile-number-to-create-health-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[ResendOTPRequest](#schemaresendotprequest)|true|request|
|» txnId|body|string|true|none|

<h3 id="resend-aadhaar-otp-on-registrered-mobile-number-to-create-health-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateAccountJwtResponse](#schemacreateaccountjwtresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Search health id number using aadhar.

<a id="opIdgetHealthIdNumbersByAadharUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/registration/aadhaar/search/aadhar \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "aadhaar": "string"
  }'
```

`POST /v1/registration/aadhaar/search/aadhar`

Search health id number using aadhar.

> Body parameter

```json
{
  "aadhaar": "string"
}
```

<h3 id="search-health-id-number-using-aadhar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[AadharNumberRequestPayload](#schemaaadharnumberrequestpayload)|true|aadharNumberRequestPayload|
|» aadhaar|body|string|false|none|

<h3 id="search-health-id-number-using-aadhar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="search-health-id-number-using-aadhar-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Verify Aadhaar using biometrics.

<a id="opIdverifyAadharBioUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/registration/aadhaar/verifyBio \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "aadhaar": "string",
    "bioType": "string",
    "pid": "string",
    "restrictions": "string"
  }'
```

`POST /v1/registration/aadhaar/verifyBio`

Verify Aadhaar using biometrics

> Body parameter

```json
{
  "aadhaar": "string",
  "bioType": "string",
  "pid": "string",
  "restrictions": "string"
}
```

<h3 id="verify-aadhaar-using-biometrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[VerifyAadhaarWithBio](#schemaverifyaadhaarwithbio)|true|verifyAadharOtpRequest|
|» aadhaar|body|string|false|none|
|» bioType|body|string|false|none|
|» pid|body|string|false|none|
|» restrictions|body|string|false|none|

<h3 id="verify-aadhaar-using-biometrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TxnResponse](#schematxnresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Verify Mobile OTP in an existing transaction.

<a id="opIdverifyMobileOTPForTxnUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/registration/aadhaar/verifyMobileOTP \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "otp": "string",
    "txnId": "string"
  }'
```

`POST /v1/registration/aadhaar/verifyMobileOTP`

Verify Mobile OTP in an existing transaction.

> Body parameter

```json
{
  "otp": "string",
  "txnId": "string"
}
```

<h3 id="verify-mobile-otp-in-an-existing-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[VerifyMobileRequest](#schemaverifymobilerequest)|true|request|
|» otp|body|string|false|none|
|» txnId|body|string|false|none|

<h3 id="verify-mobile-otp-in-an-existing-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TxnResponse](#schematxnresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Verify Aadhaar OTP and continue for mobile verification.

<a id="opIdverifyAadharOTPOnlyUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/registration/aadhaar/verifyOTP \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "otp": "string",
    "restrictions": "string",
    "txnId": "string"
  }'
```

`POST /v1/registration/aadhaar/verifyOTP`

Verify Aadhaar OTP received on registrered mobile number

> Body parameter

```json
{
  "otp": "string",
  "restrictions": "string",
  "txnId": "string"
}
```

<h3 id="verify-aadhaar-otp-and-continue-for-mobile-verification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[VerifyAadhaarOtp](#schemaverifyaadhaarotp)|true|verifyAadhaarOtp|
|» otp|body|string|false|none|
|» restrictions|body|string|false|none|
|» txnId|body|string|false|none|

<h3 id="verify-aadhaar-otp-and-continue-for-mobile-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TxnResponse](#schematxnresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

<h1 id="health-id-service-registration-with-mobile-number">Registration with mobile number</h1>

APIs to create Health ID using mobile number.

## Create Health ID with verified mobile token

<a id="opIdverifyUserViaMobileUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/registration/mobile/createHealthId \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "address": "string",
    "dayOfBirth": "string",
    "districtCode": "string",
    "email": "string",
    "firstName": "string",
    "gender": "string",
    "healthId": "string",
    "lastName": "string",
    "middleName": "string",
    "monthOfBirth": "string",
    "name": "string",
    "password": "string",
    "pincode": 0,
    "profilePhoto": "string",
    "restrictions": "string",
    "stateCode": "string",
    "subdistrictCode": "string",
    "token": "string",
    "townCode": "string",
    "txnId": "string",
    "villageCode": "string",
    "wardCode": "string",
    "yearOfBirth": "string"
  }'
```

`POST /v1/registration/mobile/createHealthId`

> Body parameter

```json
{
  "address": "string",
  "dayOfBirth": "string",
  "districtCode": "string",
  "email": "string",
  "firstName": "string",
  "gender": "string",
  "healthId": "string",
  "lastName": "string",
  "middleName": "string",
  "monthOfBirth": "string",
  "name": "string",
  "password": "string",
  "pincode": 0,
  "profilePhoto": "string",
  "restrictions": "string",
  "stateCode": "string",
  "subdistrictCode": "string",
  "token": "string",
  "townCode": "string",
  "txnId": "string",
  "villageCode": "string",
  "wardCode": "string",
  "yearOfBirth": "string"
}
```

<h3 id="create-health-id-with-verified-mobile-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[CreateAccountByVerifiedMobileRequest](#schemacreateaccountbyverifiedmobilerequest)|true|createAccountRequest|
|» address|body|string|false|none|
|» dayOfBirth|body|string|false|none|
|» districtCode|body|string|false|none|
|» email|body|string|false|none|
|» firstName|body|string|false|none|
|» gender|body|string|false|none|
|» healthId|body|string|false|none|
|» lastName|body|string|false|none|
|» middleName|body|string|false|none|
|» monthOfBirth|body|string|false|none|
|» name|body|string|false|none|
|» password|body|string|false|none|
|» pincode|body|integer(int32)|false|none|
|» profilePhoto|body|string|false|none|
|» restrictions|body|string|false|none|
|» stateCode|body|string|false|none|
|» subdistrictCode|body|string|false|none|
|» token|body|string|false|none|
|» townCode|body|string|false|none|
|» txnId|body|string|true|none|
|» villageCode|body|string|false|none|
|» wardCode|body|string|false|none|
|» yearOfBirth|body|string|false|none|

<h3 id="create-health-id-with-verified-mobile-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateAccountJwtResponse](#schemacreateaccountjwtresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Generate Mobile OTP to start registration

<a id="opIdgenerateMobileOTPUsingPOST_1"></a>

> Code samples

```bash
curl https://example.com/v1/registration/mobile/generateOtp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "mobile": "string"
  }'
```

`POST /v1/registration/mobile/generateOtp`

Generate Mobile OTP to start registration transaction.

> Body parameter

```json
{
  "mobile": "string"
}
```

<h3 id="generate-mobile-otp-to-start-registration-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[GenerateMobileOTPRequest](#schemageneratemobileotprequest)|true|generateOtpRequest|
|» mobile|body|string|false|none|

<h3 id="generate-mobile-otp-to-start-registration-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TxnResponse](#schematxnresponse)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Resend Mobile OTP for Health ID registration

<a id="opIdresentOtpUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/registration/mobile/resendOtp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "txnId": "string"
  }'
```

`POST /v1/registration/mobile/resendOtp`

Resend Mobile OTP in an existing transaction in case previous OTP is not received.

> Body parameter

```json
{
  "txnId": "string"
}
```

<h3 id="resend-mobile-otp-for-health-id-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[ResendOTPRequest](#schemaresendotprequest)|true|resendRequest|
|» txnId|body|string|true|none|

<h3 id="resend-mobile-otp-for-health-id-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Verify Mobile OTP sent as part of registration transaction.

<a id="opIdverifyMobileOTPUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/registration/mobile/verifyOtp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "otp": "string",
    "txnId": "string"
  }'
```

`POST /v1/registration/mobile/verifyOtp`

Verify Mobile OTP in current registration transaction.

> Body parameter

```json
{
  "otp": "string",
  "txnId": "string"
}
```

<h3 id="verify-mobile-otp-sent-as-part-of-registration-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[VerifyMobileRequest](#schemaverifymobilerequest)|true|verifyOtpRequest|
|» otp|body|string|false|none|
|» txnId|body|string|false|none|

<h3 id="verify-mobile-otp-sent-as-part-of-registration-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MobileVerificationToken](#schemamobileverificationtoken)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

<h1 id="health-id-service-search">Search</h1>

Health ID Search APIs

## Search a user by Health IDs.

<a id="opIdsearchUserByUseridUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/search/existsByHealthId \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "healthId": "string"
  }'
```

`POST /v1/search/existsByHealthId`

> Body parameter

```json
{
  "healthId": "string"
}
```

<h3 id="search-a-user-by-health-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[SearchByHealthIdRequest](#schemasearchbyhealthidrequest)|true|searchDTO|
|» healthId|body|string|false|none|

<h3 id="search-a-user-by-health-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Search a user by Health ID Number.

<a id="opIdsearchUserByAccountUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/search/searchByHealthId \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "healthId": "string"
  }'
```

`POST /v1/search/searchByHealthId`

> Body parameter

```json
{
  "healthId": "string"
}
```

<h3 id="search-a-user-by-health-id-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[SearchByHealthIdRequest](#schemasearchbyhealthidrequest)|true|searchRequest|
|» healthId|body|string|false|none|

<h3 id="search-a-user-by-health-id-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SearchResponseSingle](#schemasearchresponsesingle)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Search users with a mobile number.

<a id="opIdsearchUserByMobileUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/search/searchByMobile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "gender": "string",
    "mobile": "string",
    "name": "string",
    "yearOfBirth": "string"
  }'
```

`POST /v1/search/searchByMobile`

> Body parameter

```json
{
  "gender": "string",
  "mobile": "string",
  "name": "string",
  "yearOfBirth": "string"
}
```

<h3 id="search-users-with-a-mobile-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[SearchByMobileRequest](#schemasearchbymobilerequest)|true|searchRequest|
|» gender|body|string|false|none|
|» mobile|body|string|false|none|
|» name|body|string|false|none|
|» yearOfBirth|body|string|false|none|

<h3 id="search-users-with-a-mobile-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SearchResponseSingle](#schemasearchresponsesingle)|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

<h1 id="health-id-service-tags">Tags</h1>

Health ID Tag APIs

## Get list of Tags against HealthID.

<a id="opIdgetTagsUsingGET"></a>

> Code samples

```bash
curl https://example.com/v1/ha/tags \
  -H "Authorization: ${API_KEY}" \
  -H 'X-Token: Bearer X-Token'
```

`GET /v1/ha/tags`

<h3 id="get-list-of-tags-against-healthid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|X-Token|header|string|true|Auth Token|

<h3 id="get-list-of-tags-against-healthid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Add tag against HealthId.

<a id="opIdaddTagUsingPOST"></a>

> Code samples

```bash
curl https://example.com/v1/ha/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "healthId": "string",
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1/ha/tags`

> Body parameter

```json
{
  "healthId": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="add-tag-against-healthid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[TagRequest](#schematagrequest)|true|tagRequest|
|» healthId|body|string|false|none|
|» tags|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|

<h3 id="add-tag-against-healthid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|201|Created|Created|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="add-tag-against-healthid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagRequest](#schematagrequest)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Delete tag against HealthId.

<a id="opIddeleteTagUsingDELETE"></a>

> Code samples

```bash
curl https://example.com/v1/ha/tags \
  -X DELETE \
  -H 'Content-Type: */*' \
  -H "Authorization: ${API_KEY}" \
  -d '{"healthId":"string","tags":{"property1":"string","property2":"string"}}'
```

`DELETE /v1/ha/tags`

> Body parameter

```json
{
  "healthId": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="delete-tag-against-healthid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|body|body|[TagRequest](#schematagrequest)|true|tagRequest|
|» healthId|body|string|false|none|
|» tags|body|object|false|none|
|» » **additionalProperties**|body|string|false|none|

<h3 id="delete-tag-against-healthid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<h3 id="delete-tag-against-healthid-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagRequest](#schematagrequest)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

<h1 id="health-id-service-utility">Utility</h1>

Health ID Information APIs

## Get a list of districts in a given State as per LGD.

<a id="opIdgetDistrictsInStateUsingGET"></a>

> Code samples

```bash
curl 'https://example.com/v1/ha/lgd/districts?stateCode=string' \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/ha/lgd/districts`

<h3 id="get-a-list-of-districts-in-a-given-state-as-per-lgd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|
|stateCode|query|string|true|stateCode|

<h3 id="get-a-list-of-districts-in-a-given-state-as-per-lgd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-a-list-of-districts-in-a-given-state-as-per-lgd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DistrictDTO](#schemadistrictdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

## Get a list of states as per LGD.

<a id="opIdgetStatesUsingGET"></a>

> Code samples

```bash
curl https://example.com/v1/ha/lgd/states \
  -H "Authorization: ${API_KEY}"
```

`GET /v1/ha/lgd/states`

<h3 id="get-a-list-of-states-as-per-lgd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|none|

<h3 id="get-a-list-of-states-as-per-lgd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<h3 id="get-a-list-of-states-as-per-lgd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[StatesDTO](#schemastatesdto)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization, X-HIP-ID
</aside>

# Schemas

<h2 id="tocS_AadharNumberRequestPayload">AadharNumberRequestPayload</h2>
<!-- backwards compatibility -->
<a id="schemaaadharnumberrequestpayload"></a>
<a id="schema_AadharNumberRequestPayload"></a>
<a id="tocSaadharnumberrequestpayload"></a>
<a id="tocsaadharnumberrequestpayload"></a>

```json
{
  "aadhaar": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aadhaar|string|false|none|none|

<h2 id="tocS_AadharOtpGenerateRequestPayLoad">AadharOtpGenerateRequestPayLoad</h2>
<!-- backwards compatibility -->
<a id="schemaaadharotpgeneraterequestpayload"></a>
<a id="schema_AadharOtpGenerateRequestPayLoad"></a>
<a id="tocSaadharotpgeneraterequestpayload"></a>
<a id="tocsaadharotpgeneraterequestpayload"></a>

```json
{
  "aadhaar": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aadhaar|string|false|none|none|

<h2 id="tocS_AuthAccountAadhaarBioRequest">AuthAccountAadhaarBioRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthaccountaadhaarbiorequest"></a>
<a id="schema_AuthAccountAadhaarBioRequest"></a>
<a id="tocSauthaccountaadhaarbiorequest"></a>
<a id="tocsauthaccountaadhaarbiorequest"></a>

```json
{
  "authType": "FINGERSCAN",
  "bioType": "string",
  "pid": "string",
  "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authType|string|false|none|none|
|bioType|string|false|none|none|
|pid|string|false|none|none|
|txnId|string(uuid)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|authType|FINGERSCAN|
|authType|IRIS|
|authType|OTP|

<h2 id="tocS_AuthAccountAadhaarOTPRequest">AuthAccountAadhaarOTPRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthaccountaadhaarotprequest"></a>
<a id="schema_AuthAccountAadhaarOTPRequest"></a>
<a id="tocSauthaccountaadhaarotprequest"></a>
<a id="tocsauthaccountaadhaarotprequest"></a>

```json
{
  "otp": "string",
  "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|otp|string|true|none|none|
|txnId|string(uuid)|true|none|none|

<h2 id="tocS_AuthAccountMobileOTPRequest">AuthAccountMobileOTPRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthaccountmobileotprequest"></a>
<a id="schema_AuthAccountMobileOTPRequest"></a>
<a id="tocSauthaccountmobileotprequest"></a>
<a id="tocsauthaccountmobileotprequest"></a>

```json
{
  "otp": "string",
  "txnId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|otp|string|false|none|none|
|txnId|string|false|none|none|

<h2 id="tocS_AuthAccountWithDemographicsRequest">AuthAccountWithDemographicsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthaccountwithdemographicsrequest"></a>
<a id="schema_AuthAccountWithDemographicsRequest"></a>
<a id="tocSauthaccountwithdemographicsrequest"></a>
<a id="tocsauthaccountwithdemographicsrequest"></a>

```json
{
  "gender": "string",
  "name": "string",
  "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "yearOfBirth": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gender|string|false|none|none|
|name|string|false|none|none|
|txnId|string(uuid)|true|none|none|
|yearOfBirth|string|false|none|none|

<h2 id="tocS_AuthInitRequest">AuthInitRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthinitrequest"></a>
<a id="schema_AuthInitRequest"></a>
<a id="tocSauthinitrequest"></a>
<a id="tocsauthinitrequest"></a>

```json
{
  "authMethod": "AADHAAR_OTP",
  "healthid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authMethod|string|true|none|none|
|healthid|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|authMethod|AADHAAR_OTP|
|authMethod|MOBILE_OTP|
|authMethod|PASSWORD|
|authMethod|DEMOGRAPHICS|
|authMethod|AADHAAR_BIO|

<h2 id="tocS_AuthMobileOTPRequest">AuthMobileOTPRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthmobileotprequest"></a>
<a id="schema_AuthMobileOTPRequest"></a>
<a id="tocSauthmobileotprequest"></a>
<a id="tocsauthmobileotprequest"></a>

```json
{
  "healthid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthid|string|false|none|none|

<h2 id="tocS_AuthWithMobileTxnAndUserData">AuthWithMobileTxnAndUserData</h2>
<!-- backwards compatibility -->
<a id="schemaauthwithmobiletxnanduserdata"></a>
<a id="schema_AuthWithMobileTxnAndUserData"></a>
<a id="tocSauthwithmobiletxnanduserdata"></a>
<a id="tocsauthwithmobiletxnanduserdata"></a>

```json
{
  "gender": "string",
  "healthId": "string",
  "name": "string",
  "token": "string",
  "txnId": "string",
  "yearOfBirth": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gender|string|false|none|none|
|healthId|string|false|none|none|
|name|string|false|none|none|
|token|string|false|none|none|
|txnId|string|true|none|none|
|yearOfBirth|string|false|none|none|

<h2 id="tocS_AuthWithPasswordRequest">AuthWithPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaauthwithpasswordrequest"></a>
<a id="schema_AuthWithPasswordRequest"></a>
<a id="tocSauthwithpasswordrequest"></a>
<a id="tocsauthwithpasswordrequest"></a>

```json
{
  "password": "string",
  "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|none|
|txnId|string(uuid)|true|none|none|

<h2 id="tocS_BenefitDTO">BenefitDTO</h2>
<!-- backwards compatibility -->
<a id="schemabenefitdto"></a>
<a id="schema_BenefitDTO"></a>
<a id="tocSbenefitdto"></a>
<a id="tocsbenefitdto"></a>

```json
{
  "benefitId": "string",
  "benefitName": "string",
  "description": "string",
  "linkageDate": "1970-01-01T00:00:00Z",
  "programName": "string",
  "validity": "1970-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|benefitId|string|false|none|none|
|benefitName|string|false|none|none|
|description|string|false|none|none|
|linkageDate|string(date-time)|false|none|none|
|programName|string|false|none|none|
|validity|string(date)|false|none|none|

<h2 id="tocS_ByteArrayResource">ByteArrayResource</h2>
<!-- backwards compatibility -->
<a id="schemabytearrayresource"></a>
<a id="schema_ByteArrayResource"></a>
<a id="tocSbytearrayresource"></a>
<a id="tocsbytearrayresource"></a>

```json
{
  "byteArray": "string",
  "description": "string",
  "file": {
    "absolute": true,
    "absoluteFile": {},
    "absolutePath": "string",
    "canonicalFile": {},
    "canonicalPath": "string",
    "directory": true,
    "file": true,
    "freeSpace": 0,
    "hidden": true,
    "name": "string",
    "parent": "string",
    "parentFile": {},
    "path": "string",
    "totalSpace": 0,
    "usableSpace": 0
  },
  "filename": "string",
  "inputStream": {},
  "open": true,
  "readable": true,
  "uri": {
    "absolute": true,
    "authority": "string",
    "fragment": "string",
    "host": "string",
    "opaque": true,
    "path": "string",
    "port": 0,
    "query": "string",
    "rawAuthority": "string",
    "rawFragment": "string",
    "rawPath": "string",
    "rawQuery": "string",
    "rawSchemeSpecificPart": "string",
    "rawUserInfo": "string",
    "scheme": "string",
    "schemeSpecificPart": "string",
    "userInfo": "string"
  },
  "url": {
    "authority": "string",
    "content": {},
    "defaultPort": 0,
    "file": "string",
    "host": "string",
    "path": "string",
    "port": 0,
    "protocol": "string",
    "query": "string",
    "ref": "string",
    "userInfo": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|byteArray|string(byte)|false|none|none|
|description|string|false|none|none|
|file|[File](#schemafile)|false|none|none|
|filename|string|false|none|none|
|inputStream|[InputStream](#schemainputstream)|false|none|none|
|open|boolean|false|none|none|
|readable|boolean|false|none|none|
|uri|[URI](#schemauri)|false|none|none|
|url|[URL](#schemaurl)|false|none|none|

<h2 id="tocS_CovinTxnResponse">CovinTxnResponse</h2>
<!-- backwards compatibility -->
<a id="schemacovintxnresponse"></a>
<a id="schema_CovinTxnResponse"></a>
<a id="tocScovintxnresponse"></a>
<a id="tocscovintxnresponse"></a>

```json
{
  "mobileNumber": "string",
  "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mobileNumber|string|false|none|none|
|txnId|string(uuid)|false|none|none|

<h2 id="tocS_CreateAccountByVerifiedMobileRequest">CreateAccountByVerifiedMobileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountbyverifiedmobilerequest"></a>
<a id="schema_CreateAccountByVerifiedMobileRequest"></a>
<a id="tocScreateaccountbyverifiedmobilerequest"></a>
<a id="tocscreateaccountbyverifiedmobilerequest"></a>

```json
{
  "address": "string",
  "dayOfBirth": "string",
  "districtCode": "string",
  "email": "string",
  "firstName": "string",
  "gender": "string",
  "healthId": "string",
  "lastName": "string",
  "middleName": "string",
  "monthOfBirth": "string",
  "name": "string",
  "password": "string",
  "pincode": 0,
  "profilePhoto": "string",
  "restrictions": "string",
  "stateCode": "string",
  "subdistrictCode": "string",
  "token": "string",
  "townCode": "string",
  "txnId": "string",
  "villageCode": "string",
  "wardCode": "string",
  "yearOfBirth": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|dayOfBirth|string|false|none|none|
|districtCode|string|false|none|none|
|email|string|false|none|none|
|firstName|string|false|none|none|
|gender|string|false|none|none|
|healthId|string|false|none|none|
|lastName|string|false|none|none|
|middleName|string|false|none|none|
|monthOfBirth|string|false|none|none|
|name|string|false|none|none|
|password|string|false|none|none|
|pincode|integer(int32)|false|none|none|
|profilePhoto|string|false|none|none|
|restrictions|string|false|none|none|
|stateCode|string|false|none|none|
|subdistrictCode|string|false|none|none|
|token|string|false|none|none|
|townCode|string|false|none|none|
|txnId|string|true|none|none|
|villageCode|string|false|none|none|
|wardCode|string|false|none|none|
|yearOfBirth|string|false|none|none|

<h2 id="tocS_CreateAccountJwtResponse">CreateAccountJwtResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountjwtresponse"></a>
<a id="schema_CreateAccountJwtResponse"></a>
<a id="tocScreateaccountjwtresponse"></a>
<a id="tocscreateaccountjwtresponse"></a>

```json
{
  "authMethods": [
    "AADHAAR_OTP"
  ],
  "dayOfBirth": "string",
  "districtCode": "string",
  "districtName": "string",
  "email": "string",
  "firstName": "string",
  "gender": "string",
  "healthId": "string",
  "healthIdNumber": "string",
  "kycPhoto": "string",
  "lastName": "string",
  "middleName": "string",
  "mobile": "string",
  "monthOfBirth": "string",
  "name": "string",
  "new": true,
  "stateCode": "string",
  "stateName": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "token": "string",
  "yearOfBirth": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authMethods|[string]|false|none|none|
|dayOfBirth|string|false|none|none|
|districtCode|string|false|none|none|
|districtName|string|false|none|none|
|email|string|false|none|none|
|firstName|string|false|none|none|
|gender|string|false|none|none|
|healthId|string|false|none|none|
|healthIdNumber|string|false|none|none|
|kycPhoto|string|false|none|none|
|lastName|string|false|none|none|
|middleName|string|false|none|none|
|mobile|string|false|none|none|
|monthOfBirth|string|false|none|none|
|name|string|false|none|none|
|new|boolean|false|none|none|
|stateCode|string|false|none|none|
|stateName|string|false|none|none|
|tags|object|false|none|none|
|token|string|false|none|none|
|yearOfBirth|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|authMethods|AADHAAR_OTP|
|authMethods|MOBILE_OTP|
|authMethods|PASSWORD|
|authMethods|DEMOGRAPHICS|
|authMethods|AADHAAR_BIO|

<h2 id="tocS_CreateAccountWithAadhaarOtp">CreateAccountWithAadhaarOtp</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountwithaadhaarotp"></a>
<a id="schema_CreateAccountWithAadhaarOtp"></a>
<a id="tocScreateaccountwithaadhaarotp"></a>
<a id="tocscreateaccountwithaadhaarotp"></a>

```json
{
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "middleName": "string",
  "mobile": "string",
  "otp": "string",
  "password": "string",
  "profilePhoto": "string",
  "restrictions": "string",
  "txnId": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|middleName|string|false|none|none|
|mobile|string|false|none|none|
|otp|string|false|none|none|
|password|string|false|none|none|
|profilePhoto|string|false|none|none|
|restrictions|string|false|none|none|
|txnId|string|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_CreateAccountWithPreVerifiedAadhaar">CreateAccountWithPreVerifiedAadhaar</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountwithpreverifiedaadhaar"></a>
<a id="schema_CreateAccountWithPreVerifiedAadhaar"></a>
<a id="tocScreateaccountwithpreverifiedaadhaar"></a>
<a id="tocscreateaccountwithpreverifiedaadhaar"></a>

```json
{
  "email": "string",
  "firstName": "string",
  "healthId": "string",
  "lastName": "string",
  "middleName": "string",
  "password": "string",
  "profilePhoto": "string",
  "txnId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|firstName|string|false|none|none|
|healthId|string|false|none|none|
|lastName|string|false|none|none|
|middleName|string|false|none|none|
|password|string|false|none|none|
|profilePhoto|string|false|none|none|
|txnId|string|false|none|none|

<h2 id="tocS_CreateHIdDemoAuthRequest">CreateHIdDemoAuthRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehiddemoauthrequest"></a>
<a id="schema_CreateHIdDemoAuthRequest"></a>
<a id="tocScreatehiddemoauthrequest"></a>
<a id="tocscreatehiddemoauthrequest"></a>

```json
{
  "aadharNumber": "string",
  "autoGeneratedBenefitId": true,
  "benefitId": "string",
  "benefitName": "string",
  "consentHealthId": true,
  "dateOfBirth": "string",
  "gender": "string",
  "mobileNumber": "string",
  "name": "string",
  "validity": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aadharNumber|string|false|none|none|
|autoGeneratedBenefitId|boolean|false|none|none|
|benefitId|string|false|none|none|
|benefitName|string|false|none|none|
|consentHealthId|boolean|false|none|none|
|dateOfBirth|string|false|none|none|
|gender|string|false|none|none|
|mobileNumber|string|false|none|none|
|name|string|false|none|none|
|validity|string|false|none|none|

<h2 id="tocS_CreateHealthIdOptRequest">CreateHealthIdOptRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehealthidoptrequest"></a>
<a id="schema_CreateHealthIdOptRequest"></a>
<a id="tocScreatehealthidoptrequest"></a>
<a id="tocscreatehealthidoptrequest"></a>

```json
{
  "autoGeneratedBenefitId": true,
  "benefitId": "string",
  "benefitName": "string",
  "consentHealthId": true,
  "mobileNumber": "string",
  "otp": "string",
  "txnId": "string",
  "validity": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoGeneratedBenefitId|boolean|false|none|none|
|benefitId|string|false|none|none|
|benefitName|string|false|none|none|
|consentHealthId|boolean|false|none|none|
|mobileNumber|string|false|none|none|
|otp|string|false|none|none|
|txnId|string|false|none|none|
|validity|string|false|none|none|

<h2 id="tocS_CreateHidBiometricRequest">CreateHidBiometricRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehidbiometricrequest"></a>
<a id="schema_CreateHidBiometricRequest"></a>
<a id="tocScreatehidbiometricrequest"></a>
<a id="tocscreatehidbiometricrequest"></a>

```json
{
  "aadhaar": "string",
  "autoGeneratedBenefitId": true,
  "benefitId": "string",
  "benefitName": "string",
  "bioType": "string",
  "consentHealthId": true,
  "mobileNumber": "string",
  "pid": "string",
  "validity": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aadhaar|string|false|none|none|
|autoGeneratedBenefitId|boolean|false|none|none|
|benefitId|string|false|none|none|
|benefitName|string|false|none|none|
|bioType|string|false|none|none|
|consentHealthId|boolean|false|none|none|
|mobileNumber|string|false|none|none|
|pid|string|false|none|none|
|validity|string|false|none|none|

<h2 id="tocS_CreateHidMobileRequest">CreateHidMobileRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehidmobilerequest"></a>
<a id="schema_CreateHidMobileRequest"></a>
<a id="tocScreatehidmobilerequest"></a>
<a id="tocscreatehidmobilerequest"></a>

```json
{
  "autoGeneratedBenefitId": true,
  "benefitDocType": "VOTER_ID_CARD",
  "benefitId": "string",
  "benefitName": "string",
  "consentHealthId": true,
  "dateOfBirth": "string",
  "docNumber": "string",
  "fileType": "string",
  "gender": "string",
  "name": "string",
  "otp": "string",
  "txnId": "string",
  "uploadedDoc": "string",
  "validity": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoGeneratedBenefitId|boolean|false|none|none|
|benefitDocType|string|false|none|none|
|benefitId|string|false|none|none|
|benefitName|string|false|none|none|
|consentHealthId|boolean|false|none|none|
|dateOfBirth|string|false|none|none|
|docNumber|string|false|none|none|
|fileType|string|false|none|none|
|gender|string|false|none|none|
|name|string|false|none|none|
|otp|string|false|none|none|
|txnId|string|false|none|none|
|uploadedDoc|string|false|none|none|
|validity|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|benefitDocType|VOTER_ID_CARD|
|benefitDocType|RATION_CARD|
|benefitDocType|PAN_CARD|
|benefitDocType|DRIVING_LICENSE|
|benefitDocType|PENSIONER_PHOTO_CARD|
|benefitDocType|KISSAN_PHOTO_PASSBOOK|
|benefitDocType|FREEDOM_FIGHTER_PHOTO_CARD|
|benefitDocType|CERTIFICATE_IDENTIFY|
|benefitDocType|DISABILITY_ID_CARD|
|benefitDocType|MNREGA_JOB_CARD|
|benefitDocType|BIRTH_CERTIFICATE|
|benefitDocType|MARRIAGE_CERTIFICATE|
|benefitDocType|OTHER_GOVERNMENT_ID|
|benefitDocType|ADOPTION_CERTIFICATE|

<h2 id="tocS_CreateHidNotifyBenefitRequest">CreateHidNotifyBenefitRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatehidnotifybenefitrequest"></a>
<a id="schema_CreateHidNotifyBenefitRequest"></a>
<a id="tocScreatehidnotifybenefitrequest"></a>
<a id="tocscreatehidnotifybenefitrequest"></a>

```json
{
  "aadharNumberOrUidToken": "string",
  "autoGeneratedBenefitId": true,
  "benefitId": "string",
  "benefitName": "string",
  "consentHealthId": true,
  "dateOfBirth": "string",
  "gender": "string",
  "mobileNumber": "string",
  "name": "string",
  "stateCode": "string",
  "validity": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aadharNumberOrUidToken|string|false|none|none|
|autoGeneratedBenefitId|boolean|false|none|none|
|benefitId|string|false|none|none|
|benefitName|string|false|none|none|
|consentHealthId|boolean|false|none|none|
|dateOfBirth|string|false|none|none|
|gender|string|false|none|none|
|mobileNumber|string|false|none|none|
|name|string|false|none|none|
|stateCode|string|false|none|none|
|validity|string|false|none|none|

<h2 id="tocS_DistrictDTO">DistrictDTO</h2>
<!-- backwards compatibility -->
<a id="schemadistrictdto"></a>
<a id="schema_DistrictDTO"></a>
<a id="tocSdistrictdto"></a>
<a id="tocsdistrictdto"></a>

```json
{
  "code": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "absolute": true,
  "absoluteFile": {
    "absolute": true,
    "absoluteFile": {},
    "absolutePath": "string",
    "canonicalFile": {},
    "canonicalPath": "string",
    "directory": true,
    "file": true,
    "freeSpace": 0,
    "hidden": true,
    "name": "string",
    "parent": "string",
    "parentFile": {},
    "path": "string",
    "totalSpace": 0,
    "usableSpace": 0
  },
  "absolutePath": "string",
  "canonicalFile": {
    "absolute": true,
    "absoluteFile": {},
    "absolutePath": "string",
    "canonicalFile": {},
    "canonicalPath": "string",
    "directory": true,
    "file": true,
    "freeSpace": 0,
    "hidden": true,
    "name": "string",
    "parent": "string",
    "parentFile": {},
    "path": "string",
    "totalSpace": 0,
    "usableSpace": 0
  },
  "canonicalPath": "string",
  "directory": true,
  "file": true,
  "freeSpace": 0,
  "hidden": true,
  "name": "string",
  "parent": "string",
  "parentFile": {
    "absolute": true,
    "absoluteFile": {},
    "absolutePath": "string",
    "canonicalFile": {},
    "canonicalPath": "string",
    "directory": true,
    "file": true,
    "freeSpace": 0,
    "hidden": true,
    "name": "string",
    "parent": "string",
    "parentFile": {},
    "path": "string",
    "totalSpace": 0,
    "usableSpace": 0
  },
  "path": "string",
  "totalSpace": 0,
  "usableSpace": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absolute|boolean|false|none|none|
|absoluteFile|[File](#schemafile)|false|none|none|
|absolutePath|string|false|none|none|
|canonicalFile|[File](#schemafile)|false|none|none|
|canonicalPath|string|false|none|none|
|directory|boolean|false|none|none|
|file|boolean|false|none|none|
|freeSpace|integer(int64)|false|none|none|
|hidden|boolean|false|none|none|
|name|string|false|none|none|
|parent|string|false|none|none|
|parentFile|[File](#schemafile)|false|none|none|
|path|string|false|none|none|
|totalSpace|integer(int64)|false|none|none|
|usableSpace|integer(int64)|false|none|none|

<h2 id="tocS_GenerateMobileOTPForTxnRequest">GenerateMobileOTPForTxnRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratemobileotpfortxnrequest"></a>
<a id="schema_GenerateMobileOTPForTxnRequest"></a>
<a id="tocSgeneratemobileotpfortxnrequest"></a>
<a id="tocsgeneratemobileotpfortxnrequest"></a>

```json
{
  "mobile": "string",
  "txnId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mobile|string|false|none|none|
|txnId|string|false|none|none|

<h2 id="tocS_GenerateMobileOTPRequest">GenerateMobileOTPRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratemobileotprequest"></a>
<a id="schema_GenerateMobileOTPRequest"></a>
<a id="tocSgeneratemobileotprequest"></a>
<a id="tocsgeneratemobileotprequest"></a>

```json
{
  "mobile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mobile|string|false|none|none|

<h2 id="tocS_HealthFacilityAuthenticationRequest">HealthFacilityAuthenticationRequest</h2>
<!-- backwards compatibility -->
<a id="schemahealthfacilityauthenticationrequest"></a>
<a id="schema_HealthFacilityAuthenticationRequest"></a>
<a id="tocShealthfacilityauthenticationrequest"></a>
<a id="tocshealthfacilityauthenticationrequest"></a>

```json
{
  "hfrUid": "string",
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hfrUid|string|false|none|none|
|password|string|false|none|none|

<h2 id="tocS_HealthFacilityAuthenticationResponse">HealthFacilityAuthenticationResponse</h2>
<!-- backwards compatibility -->
<a id="schemahealthfacilityauthenticationresponse"></a>
<a id="schema_HealthFacilityAuthenticationResponse"></a>
<a id="tocShealthfacilityauthenticationresponse"></a>
<a id="tocshealthfacilityauthenticationresponse"></a>

```json
{
  "changePassword": true,
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changePassword|boolean|false|none|none|
|token|string|false|none|none|

<h2 id="tocS_HealthFacilityChangedPasswordRequest">HealthFacilityChangedPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemahealthfacilitychangedpasswordrequest"></a>
<a id="schema_HealthFacilityChangedPasswordRequest"></a>
<a id="tocShealthfacilitychangedpasswordrequest"></a>
<a id="tocshealthfacilitychangedpasswordrequest"></a>

```json
{
  "hfrUid": "string",
  "newPassword": "string",
  "oldPassword": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hfrUid|string|false|none|none|
|newPassword|string|false|none|none|
|oldPassword|string|false|none|none|

<h2 id="tocS_HealthFacilityPasswordRequest">HealthFacilityPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemahealthfacilitypasswordrequest"></a>
<a id="schema_HealthFacilityPasswordRequest"></a>
<a id="tocShealthfacilitypasswordrequest"></a>
<a id="tocshealthfacilitypasswordrequest"></a>

```json
{
  "hfrUid": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hfrUid|string|false|none|none|

<h2 id="tocS_HealthFacilityPasswordResponse">HealthFacilityPasswordResponse</h2>
<!-- backwards compatibility -->
<a id="schemahealthfacilitypasswordresponse"></a>
<a id="schema_HealthFacilityPasswordResponse"></a>
<a id="tocShealthfacilitypasswordresponse"></a>
<a id="tocshealthfacilitypasswordresponse"></a>

```json
{
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|false|none|none|

<h2 id="tocS_HidBenefitDelinkRequestPayload">HidBenefitDelinkRequestPayload</h2>
<!-- backwards compatibility -->
<a id="schemahidbenefitdelinkrequestpayload"></a>
<a id="schema_HidBenefitDelinkRequestPayload"></a>
<a id="tocShidbenefitdelinkrequestpayload"></a>
<a id="tocshidbenefitdelinkrequestpayload"></a>

```json
{
  "benefitName": "string",
  "uidToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|benefitName|string|false|none|none|
|uidToken|string|false|none|none|

<h2 id="tocS_HidBenefitLinkedRequestPayload">HidBenefitLinkedRequestPayload</h2>
<!-- backwards compatibility -->
<a id="schemahidbenefitlinkedrequestpayload"></a>
<a id="schema_HidBenefitLinkedRequestPayload"></a>
<a id="tocShidbenefitlinkedrequestpayload"></a>
<a id="tocshidbenefitlinkedrequestpayload"></a>

```json
{
  "benefitId": "string",
  "benefitName": "string",
  "stateCode": "string",
  "uidToken": "string",
  "validity": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|benefitId|string|false|none|none|
|benefitName|string|false|none|none|
|stateCode|string|false|none|none|
|uidToken|string|false|none|none|
|validity|string|false|none|none|

<h2 id="tocS_HidBenefitLinkedResponsePayload">HidBenefitLinkedResponsePayload</h2>
<!-- backwards compatibility -->
<a id="schemahidbenefitlinkedresponsepayload"></a>
<a id="schema_HidBenefitLinkedResponsePayload"></a>
<a id="tocShidbenefitlinkedresponsepayload"></a>
<a id="tocshidbenefitlinkedresponsepayload"></a>

```json
{
  "benefitName": "string",
  "healthId": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|benefitName|string|false|none|none|
|healthId|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_HidBenefitNameSearchRequest">HidBenefitNameSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemahidbenefitnamesearchrequest"></a>
<a id="schema_HidBenefitNameSearchRequest"></a>
<a id="tocShidbenefitnamesearchrequest"></a>
<a id="tocshidbenefitnamesearchrequest"></a>

```json
{
  "benefitId": "string",
  "healthId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|benefitId|string|false|none|none|
|healthId|string|false|none|none|

<h2 id="tocS_HidBenefitRequestPayload">HidBenefitRequestPayload</h2>
<!-- backwards compatibility -->
<a id="schemahidbenefitrequestpayload"></a>
<a id="schema_HidBenefitRequestPayload"></a>
<a id="tocShidbenefitrequestpayload"></a>
<a id="tocshidbenefitrequestpayload"></a>

```json
{
  "address": "string",
  "authMethods": [
    "AADHAAR_OTP"
  ],
  "benefitId": "string",
  "dayOfBirth": "string",
  "districtCode": "string",
  "districtName": "string",
  "email": "string",
  "firstName": "string",
  "gender": "string",
  "healthId": "string",
  "healthIdNumber": "string",
  "kycPhoto": "string",
  "kycVerified": true,
  "lastName": "string",
  "middleName": "string",
  "mobile": "string",
  "monthOfBirth": "string",
  "name": "string",
  "new": true,
  "pincode": "string",
  "profilePhoto": "string",
  "stateCode": "string",
  "stateName": "string",
  "status": "string",
  "subDistrictCode": "string",
  "subdistrictName": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "token": "string",
  "townCode": "string",
  "townName": "string",
  "villageCode": "string",
  "villageName": "string",
  "wardCode": "string",
  "wardName": "string",
  "yearOfBirth": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|authMethods|[string]|false|none|none|
|benefitId|string|false|none|none|
|dayOfBirth|string|false|none|none|
|districtCode|string|false|none|none|
|districtName|string|false|none|none|
|email|string|false|none|none|
|firstName|string|false|none|none|
|gender|string|false|none|none|
|healthId|string|false|none|none|
|healthIdNumber|string|false|none|none|
|kycPhoto|string|false|none|none|
|kycVerified|boolean|false|none|none|
|lastName|string|false|none|none|
|middleName|string|false|none|none|
|mobile|string|false|none|none|
|monthOfBirth|string|false|none|none|
|name|string|false|none|none|
|new|boolean|false|none|none|
|pincode|string|false|none|none|
|profilePhoto|string|false|none|none|
|stateCode|string|false|none|none|
|stateName|string|false|none|none|
|status|string|false|none|none|
|subDistrictCode|string|false|none|none|
|subdistrictName|string|false|none|none|
|tags|object|false|none|none|
|token|string|false|none|none|
|townCode|string|false|none|none|
|townName|string|false|none|none|
|villageCode|string|false|none|none|
|villageName|string|false|none|none|
|wardCode|string|false|none|none|
|wardName|string|false|none|none|
|yearOfBirth|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|authMethods|AADHAAR_OTP|
|authMethods|MOBILE_OTP|
|authMethods|PASSWORD|
|authMethods|DEMOGRAPHICS|
|authMethods|AADHAAR_BIO|

<h2 id="tocS_HidBenefitSearchResponsePayload">HidBenefitSearchResponsePayload</h2>
<!-- backwards compatibility -->
<a id="schemahidbenefitsearchresponsepayload"></a>
<a id="schema_HidBenefitSearchResponsePayload"></a>
<a id="tocShidbenefitsearchresponsepayload"></a>
<a id="tocshidbenefitsearchresponsepayload"></a>

```json
{
  "benefitId": "string",
  "benefitName": "string",
  "healthIdNumber": "string",
  "stateCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|benefitId|string|false|none|none|
|benefitName|string|false|none|none|
|healthIdNumber|string|false|none|none|
|stateCode|string|false|none|none|

<h2 id="tocS_HidChangePasswordRequestPayload">HidChangePasswordRequestPayload</h2>
<!-- backwards compatibility -->
<a id="schemahidchangepasswordrequestpayload"></a>
<a id="schema_HidChangePasswordRequestPayload"></a>
<a id="tocShidchangepasswordrequestpayload"></a>
<a id="tocshidchangepasswordrequestpayload"></a>

```json
{
  "newPassword": "string",
  "oldPassword": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newPassword|string|false|none|none|
|oldPassword|string|false|none|none|

<h2 id="tocS_HidOtpRequestPaylaod">HidOtpRequestPaylaod</h2>
<!-- backwards compatibility -->
<a id="schemahidotprequestpaylaod"></a>
<a id="schema_HidOtpRequestPaylaod"></a>
<a id="tocShidotprequestpaylaod"></a>
<a id="tocshidotprequestpaylaod"></a>

```json
{
  "newPassword": "string",
  "otp": "string",
  "txnId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newPassword|string|false|none|none|
|otp|string|false|none|none|
|txnId|string|false|none|none|

<h2 id="tocS_HidStatusRequestPayload">HidStatusRequestPayload</h2>
<!-- backwards compatibility -->
<a id="schemahidstatusrequestpayload"></a>
<a id="schema_HidStatusRequestPayload"></a>
<a id="tocShidstatusrequestpayload"></a>
<a id="tocshidstatusrequestpayload"></a>

```json
{
  "healthIdNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthIdNumber|string|false|none|none|

<h2 id="tocS_HidUpdateAccountRequest">HidUpdateAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemahidupdateaccountrequest"></a>
<a id="schema_HidUpdateAccountRequest"></a>
<a id="tocShidupdateaccountrequest"></a>
<a id="tocshidupdateaccountrequest"></a>

```json
{
  "address": "string",
  "dayOfBirth": "string",
  "districtCode": "string",
  "email": "string",
  "firstName": "string",
  "healthId": "string",
  "healthIdNumber": "string",
  "lastName": "string",
  "middleName": "string",
  "monthOfBirth": "string",
  "password": "string",
  "pincode": 0,
  "profilePhoto": "string",
  "stateCode": "string",
  "subdistrictCode": "string",
  "townCode": "string",
  "villageCode": "string",
  "wardCode": "string",
  "yearOfBirth": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|dayOfBirth|string|false|none|none|
|districtCode|string|false|none|none|
|email|string|false|none|none|
|firstName|string|false|none|none|
|healthId|string|false|none|none|
|healthIdNumber|string|false|none|none|
|lastName|string|false|none|none|
|middleName|string|false|none|none|
|monthOfBirth|string|false|none|none|
|password|string|false|none|none|
|pincode|integer(int32)|false|none|none|
|profilePhoto|string|false|none|none|
|stateCode|string|false|none|none|
|subdistrictCode|string|false|none|none|
|townCode|string|false|none|none|
|villageCode|string|false|none|none|
|wardCode|string|false|none|none|
|yearOfBirth|string|false|none|none|

<h2 id="tocS_HidUpdateMobiletRequest">HidUpdateMobiletRequest</h2>
<!-- backwards compatibility -->
<a id="schemahidupdatemobiletrequest"></a>
<a id="schema_HidUpdateMobiletRequest"></a>
<a id="tocShidupdatemobiletrequest"></a>
<a id="tocshidupdatemobiletrequest"></a>

```json
{
  "healthIdNumber": "string",
  "mobile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthIdNumber|string|false|none|none|
|mobile|string|false|none|none|

<h2 id="tocS_InputStream">InputStream</h2>
<!-- backwards compatibility -->
<a id="schemainputstream"></a>
<a id="schema_InputStream"></a>
<a id="tocSinputstream"></a>
<a id="tocsinputstream"></a>

```json
{}
```

<h2 id="tocS_JwtRequest">JwtRequest</h2>
<!-- backwards compatibility -->
<a id="schemajwtrequest"></a>
<a id="schema_JwtRequest"></a>
<a id="tocSjwtrequest"></a>
<a id="tocsjwtrequest"></a>

```json
{
  "healthId": "string",
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthId|string|false|none|none|
|password|string|false|none|none|

<h2 id="tocS_JwtResponse">JwtResponse</h2>
<!-- backwards compatibility -->
<a id="schemajwtresponse"></a>
<a id="schema_JwtResponse"></a>
<a id="tocSjwtresponse"></a>
<a id="tocsjwtresponse"></a>

```json
{
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|none|

<h2 id="tocS_MobileVerificationToken">MobileVerificationToken</h2>
<!-- backwards compatibility -->
<a id="schemamobileverificationtoken"></a>
<a id="schema_MobileVerificationToken"></a>
<a id="tocSmobileverificationtoken"></a>
<a id="tocsmobileverificationtoken"></a>

```json
{
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|none|

<h2 id="tocS_ResendOTPRequest">ResendOTPRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresendotprequest"></a>
<a id="schema_ResendOTPRequest"></a>
<a id="tocSresendotprequest"></a>
<a id="tocsresendotprequest"></a>

```json
{
  "txnId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txnId|string|true|none|none|

<h2 id="tocS_ResponseEntity">ResponseEntity</h2>
<!-- backwards compatibility -->
<a id="schemaresponseentity"></a>
<a id="schema_ResponseEntity"></a>
<a id="tocSresponseentity"></a>
<a id="tocsresponseentity"></a>

```json
{
  "body": {},
  "statusCode": "100 CONTINUE",
  "statusCodeValue": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|object|false|none|none|
|statusCode|string|false|none|none|
|statusCodeValue|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|statusCode|100 CONTINUE|
|statusCode|101 SWITCHING_PROTOCOLS|
|statusCode|102 PROCESSING|
|statusCode|103 CHECKPOINT|
|statusCode|200 OK|
|statusCode|201 CREATED|
|statusCode|202 ACCEPTED|
|statusCode|203 NON_AUTHORITATIVE_INFORMATION|
|statusCode|204 NO_CONTENT|
|statusCode|205 RESET_CONTENT|
|statusCode|206 PARTIAL_CONTENT|
|statusCode|207 MULTI_STATUS|
|statusCode|208 ALREADY_REPORTED|
|statusCode|226 IM_USED|
|statusCode|300 MULTIPLE_CHOICES|
|statusCode|301 MOVED_PERMANENTLY|
|statusCode|302 FOUND|
|statusCode|302 MOVED_TEMPORARILY|
|statusCode|303 SEE_OTHER|
|statusCode|304 NOT_MODIFIED|
|statusCode|305 USE_PROXY|
|statusCode|307 TEMPORARY_REDIRECT|
|statusCode|308 PERMANENT_REDIRECT|
|statusCode|400 BAD_REQUEST|
|statusCode|401 UNAUTHORIZED|
|statusCode|402 PAYMENT_REQUIRED|
|statusCode|403 FORBIDDEN|
|statusCode|404 NOT_FOUND|
|statusCode|405 METHOD_NOT_ALLOWED|
|statusCode|406 NOT_ACCEPTABLE|
|statusCode|407 PROXY_AUTHENTICATION_REQUIRED|
|statusCode|408 REQUEST_TIMEOUT|
|statusCode|409 CONFLICT|
|statusCode|410 GONE|
|statusCode|411 LENGTH_REQUIRED|
|statusCode|412 PRECONDITION_FAILED|
|statusCode|413 PAYLOAD_TOO_LARGE|
|statusCode|413 REQUEST_ENTITY_TOO_LARGE|
|statusCode|414 URI_TOO_LONG|
|statusCode|414 REQUEST_URI_TOO_LONG|
|statusCode|415 UNSUPPORTED_MEDIA_TYPE|
|statusCode|416 REQUESTED_RANGE_NOT_SATISFIABLE|
|statusCode|417 EXPECTATION_FAILED|
|statusCode|418 I_AM_A_TEAPOT|
|statusCode|419 INSUFFICIENT_SPACE_ON_RESOURCE|
|statusCode|420 METHOD_FAILURE|
|statusCode|421 DESTINATION_LOCKED|
|statusCode|422 UNPROCESSABLE_ENTITY|
|statusCode|423 LOCKED|
|statusCode|424 FAILED_DEPENDENCY|
|statusCode|426 UPGRADE_REQUIRED|
|statusCode|428 PRECONDITION_REQUIRED|
|statusCode|429 TOO_MANY_REQUESTS|
|statusCode|431 REQUEST_HEADER_FIELDS_TOO_LARGE|
|statusCode|451 UNAVAILABLE_FOR_LEGAL_REASONS|
|statusCode|500 INTERNAL_SERVER_ERROR|
|statusCode|501 NOT_IMPLEMENTED|
|statusCode|502 BAD_GATEWAY|
|statusCode|503 SERVICE_UNAVAILABLE|
|statusCode|504 GATEWAY_TIMEOUT|
|statusCode|505 HTTP_VERSION_NOT_SUPPORTED|
|statusCode|506 VARIANT_ALSO_NEGOTIATES|
|statusCode|507 INSUFFICIENT_STORAGE|
|statusCode|508 LOOP_DETECTED|
|statusCode|509 BANDWIDTH_LIMIT_EXCEEDED|
|statusCode|510 NOT_EXTENDED|
|statusCode|511 NETWORK_AUTHENTICATION_REQUIRED|

<h2 id="tocS_RetrieveHealthIdPayloadResponse">RetrieveHealthIdPayloadResponse</h2>
<!-- backwards compatibility -->
<a id="schemaretrievehealthidpayloadresponse"></a>
<a id="schema_RetrieveHealthIdPayloadResponse"></a>
<a id="tocSretrievehealthidpayloadresponse"></a>
<a id="tocsretrievehealthidpayloadresponse"></a>

```json
{
  "healthId": "string",
  "healthIdNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthId|string|false|none|none|
|healthIdNumber|string|false|none|none|

<h2 id="tocS_RetriveHealthIdMobilePayLoad">RetriveHealthIdMobilePayLoad</h2>
<!-- backwards compatibility -->
<a id="schemaretrivehealthidmobilepayload"></a>
<a id="schema_RetriveHealthIdMobilePayLoad"></a>
<a id="tocSretrivehealthidmobilepayload"></a>
<a id="tocsretrivehealthidmobilepayload"></a>

```json
{
  "dayOfBirth": "string",
  "firstName": "string",
  "gender": "string",
  "lastName": "string",
  "middleName": "string",
  "monthOfBirth": "string",
  "name": "string",
  "otp": "string",
  "txnId": "string",
  "yearOfBirth": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfBirth|string|false|none|none|
|firstName|string|false|none|none|
|gender|string|false|none|none|
|lastName|string|false|none|none|
|middleName|string|false|none|none|
|monthOfBirth|string|false|none|none|
|name|string|false|none|none|
|otp|string|false|none|none|
|txnId|string|true|none|none|
|yearOfBirth|string|false|none|none|

<h2 id="tocS_SearchByHealthIdRequest">SearchByHealthIdRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchbyhealthidrequest"></a>
<a id="schema_SearchByHealthIdRequest"></a>
<a id="tocSsearchbyhealthidrequest"></a>
<a id="tocssearchbyhealthidrequest"></a>

```json
{
  "healthId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthId|string|false|none|none|

<h2 id="tocS_SearchByMobileRequest">SearchByMobileRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchbymobilerequest"></a>
<a id="schema_SearchByMobileRequest"></a>
<a id="tocSsearchbymobilerequest"></a>
<a id="tocssearchbymobilerequest"></a>

```json
{
  "gender": "string",
  "mobile": "string",
  "name": "string",
  "yearOfBirth": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gender|string|false|none|none|
|mobile|string|false|none|none|
|name|string|false|none|none|
|yearOfBirth|string|false|none|none|

<h2 id="tocS_SearchResponseSingle">SearchResponseSingle</h2>
<!-- backwards compatibility -->
<a id="schemasearchresponsesingle"></a>
<a id="schema_SearchResponseSingle"></a>
<a id="tocSsearchresponsesingle"></a>
<a id="tocssearchresponsesingle"></a>

```json
{
  "authMethods": [
    "AADHAAR_OTP"
  ],
  "healthId": "string",
  "healthIdNumber": "string",
  "name": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authMethods|[string]|false|none|none|
|healthId|string|false|none|none|
|healthIdNumber|string|false|none|none|
|name|string|false|none|none|
|tags|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|authMethods|AADHAAR_OTP|
|authMethods|MOBILE_OTP|
|authMethods|PASSWORD|
|authMethods|DEMOGRAPHICS|
|authMethods|AADHAAR_BIO|

<h2 id="tocS_StatesDTO">StatesDTO</h2>
<!-- backwards compatibility -->
<a id="schemastatesdto"></a>
<a id="schema_StatesDTO"></a>
<a id="tocSstatesdto"></a>
<a id="tocsstatesdto"></a>

```json
{
  "code": "string",
  "districts": [
    {
      "code": "string",
      "name": "string"
    }
  ],
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|districts|[[DistrictDTO](#schemadistrictdto)]|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_TagRequest">TagRequest</h2>
<!-- backwards compatibility -->
<a id="schematagrequest"></a>
<a id="schema_TagRequest"></a>
<a id="tocStagrequest"></a>
<a id="tocstagrequest"></a>

```json
{
  "healthId": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthId|string|false|none|none|
|tags|object|false|none|none|

<h2 id="tocS_TxnResponse">TxnResponse</h2>
<!-- backwards compatibility -->
<a id="schematxnresponse"></a>
<a id="schema_TxnResponse"></a>
<a id="tocStxnresponse"></a>
<a id="tocstxnresponse"></a>

```json
{
  "txnId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txnId|string(uuid)|false|none|none|

<h2 id="tocS_URI">URI</h2>
<!-- backwards compatibility -->
<a id="schemauri"></a>
<a id="schema_URI"></a>
<a id="tocSuri"></a>
<a id="tocsuri"></a>

```json
{
  "absolute": true,
  "authority": "string",
  "fragment": "string",
  "host": "string",
  "opaque": true,
  "path": "string",
  "port": 0,
  "query": "string",
  "rawAuthority": "string",
  "rawFragment": "string",
  "rawPath": "string",
  "rawQuery": "string",
  "rawSchemeSpecificPart": "string",
  "rawUserInfo": "string",
  "scheme": "string",
  "schemeSpecificPart": "string",
  "userInfo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absolute|boolean|false|none|none|
|authority|string|false|none|none|
|fragment|string|false|none|none|
|host|string|false|none|none|
|opaque|boolean|false|none|none|
|path|string|false|none|none|
|port|integer(int32)|false|none|none|
|query|string|false|none|none|
|rawAuthority|string|false|none|none|
|rawFragment|string|false|none|none|
|rawPath|string|false|none|none|
|rawQuery|string|false|none|none|
|rawSchemeSpecificPart|string|false|none|none|
|rawUserInfo|string|false|none|none|
|scheme|string|false|none|none|
|schemeSpecificPart|string|false|none|none|
|userInfo|string|false|none|none|

<h2 id="tocS_URL">URL</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_URL"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
{
  "authority": "string",
  "content": {},
  "defaultPort": 0,
  "file": "string",
  "host": "string",
  "path": "string",
  "port": 0,
  "protocol": "string",
  "query": "string",
  "ref": "string",
  "userInfo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authority|string|false|none|none|
|content|object|false|none|none|
|defaultPort|integer(int32)|false|none|none|
|file|string|false|none|none|
|host|string|false|none|none|
|path|string|false|none|none|
|port|integer(int32)|false|none|none|
|protocol|string|false|none|none|
|query|string|false|none|none|
|ref|string|false|none|none|
|userInfo|string|false|none|none|

<h2 id="tocS_UpdateAccountRequest">UpdateAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountrequest"></a>
<a id="schema_UpdateAccountRequest"></a>
<a id="tocSupdateaccountrequest"></a>
<a id="tocsupdateaccountrequest"></a>

```json
{
  "address": "string",
  "dayOfBirth": "string",
  "districtCode": "string",
  "email": "string",
  "firstName": "string",
  "healthId": "string",
  "lastName": "string",
  "middleName": "string",
  "monthOfBirth": "string",
  "password": "string",
  "pincode": 0,
  "profilePhoto": "string",
  "stateCode": "string",
  "subdistrictCode": "string",
  "townCode": "string",
  "villageCode": "string",
  "wardCode": "string",
  "yearOfBirth": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|dayOfBirth|string|false|none|none|
|districtCode|string|false|none|none|
|email|string|false|none|none|
|firstName|string|false|none|none|
|healthId|string|false|none|none|
|lastName|string|false|none|none|
|middleName|string|false|none|none|
|monthOfBirth|string|false|none|none|
|password|string|false|none|none|
|pincode|integer(int32)|false|none|none|
|profilePhoto|string|false|none|none|
|stateCode|string|false|none|none|
|subdistrictCode|string|false|none|none|
|townCode|string|false|none|none|
|villageCode|string|false|none|none|
|wardCode|string|false|none|none|
|yearOfBirth|string|false|none|none|

<h2 id="tocS_UserDTO">UserDTO</h2>
<!-- backwards compatibility -->
<a id="schemauserdto"></a>
<a id="schema_UserDTO"></a>
<a id="tocSuserdto"></a>
<a id="tocsuserdto"></a>

```json
{
  "address": "string",
  "authMethods": [
    "AADHAAR_OTP"
  ],
  "dayOfBirth": "string",
  "districtCode": "string",
  "districtName": "string",
  "email": "string",
  "firstName": "string",
  "gender": "string",
  "healthId": "string",
  "healthIdNumber": "string",
  "kycPhoto": "string",
  "kycVerified": true,
  "lastName": "string",
  "middleName": "string",
  "mobile": "string",
  "monthOfBirth": "string",
  "name": "string",
  "new": true,
  "pincode": "string",
  "profilePhoto": "string",
  "stateCode": "string",
  "stateName": "string",
  "subDistrictCode": "string",
  "subdistrictName": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  },
  "townCode": "string",
  "townName": "string",
  "villageCode": "string",
  "villageName": "string",
  "wardCode": "string",
  "wardName": "string",
  "yearOfBirth": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|authMethods|[string]|false|none|none|
|dayOfBirth|string|false|none|none|
|districtCode|string|false|none|none|
|districtName|string|false|none|none|
|email|string|false|none|none|
|firstName|string|false|none|none|
|gender|string|false|none|none|
|healthId|string|false|none|none|
|healthIdNumber|string|false|none|none|
|kycPhoto|string|false|none|none|
|kycVerified|boolean|false|none|none|
|lastName|string|false|none|none|
|middleName|string|false|none|none|
|mobile|string|false|none|none|
|monthOfBirth|string|false|none|none|
|name|string|false|none|none|
|new|boolean|false|none|none|
|pincode|string|false|none|none|
|profilePhoto|string|false|none|none|
|stateCode|string|false|none|none|
|stateName|string|false|none|none|
|subDistrictCode|string|false|none|none|
|subdistrictName|string|false|none|none|
|tags|object|false|none|none|
|townCode|string|false|none|none|
|townName|string|false|none|none|
|villageCode|string|false|none|none|
|villageName|string|false|none|none|
|wardCode|string|false|none|none|
|wardName|string|false|none|none|
|yearOfBirth|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|authMethods|AADHAAR_OTP|
|authMethods|MOBILE_OTP|
|authMethods|PASSWORD|
|authMethods|DEMOGRAPHICS|
|authMethods|AADHAAR_BIO|

<h2 id="tocS_ValidateTokenRequest">ValidateTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidatetokenrequest"></a>
<a id="schema_ValidateTokenRequest"></a>
<a id="tocSvalidatetokenrequest"></a>
<a id="tocsvalidatetokenrequest"></a>

```json
{
  "authToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authToken|string|false|none|none|

<h2 id="tocS_VerifyAadhaarOtp">VerifyAadhaarOtp</h2>
<!-- backwards compatibility -->
<a id="schemaverifyaadhaarotp"></a>
<a id="schema_VerifyAadhaarOtp"></a>
<a id="tocSverifyaadhaarotp"></a>
<a id="tocsverifyaadhaarotp"></a>

```json
{
  "otp": "string",
  "restrictions": "string",
  "txnId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|otp|string|false|none|none|
|restrictions|string|false|none|none|
|txnId|string|false|none|none|

<h2 id="tocS_VerifyAadhaarWithBio">VerifyAadhaarWithBio</h2>
<!-- backwards compatibility -->
<a id="schemaverifyaadhaarwithbio"></a>
<a id="schema_VerifyAadhaarWithBio"></a>
<a id="tocSverifyaadhaarwithbio"></a>
<a id="tocsverifyaadhaarwithbio"></a>

```json
{
  "aadhaar": "string",
  "bioType": "string",
  "pid": "string",
  "restrictions": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aadhaar|string|false|none|none|
|bioType|string|false|none|none|
|pid|string|false|none|none|
|restrictions|string|false|none|none|

<h2 id="tocS_VerifyMobileRequest">VerifyMobileRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifymobilerequest"></a>
<a id="schema_VerifyMobileRequest"></a>
<a id="tocSverifymobilerequest"></a>
<a id="tocsverifymobilerequest"></a>

```json
{
  "otp": "string",
  "txnId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|otp|string|false|none|none|
|txnId|string|false|none|none|
