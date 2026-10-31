<h1 id="health-data-consent-manager">Health Data Consent Manager v0.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Entity which provides health information aggregation services to customers of health care services.
It enables customers to fetch their health information from one or more Health Information Providers
(e.g., Hospitals, Diagnostic Labs, Medical Device Companies), based on their explicit Consent and to share such
aggregated information with Health Information Users i.e. entities in need of such data (e.g., Insurers,
Doctors, Medical Researchers).

# Specifications
1. This document maintains only the Health Information Gateway relevant APIs.

Base URLs:

* <a href="https://dev.ndhm.gov.in/cm">https://dev.ndhm.gov.in/cm</a> - Sandbox

Web: <a href="https://ndhm.gov.in/">National Health Authority</a> 

<h1 id="health-data-consent-manager-user-auth">user auth</h1>

## Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation

> Code samples

```bash
curl https://example.com/v0.5/users/auth/confirm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "credential": {
      "authCode": "string",
      "demographic": {
        "dateOfBirth": "1972-02-29",
        "gender": "M",
        "identifier": {
          "type": "MOBILE",
          "value": "+919800083232"
        },
        "name": "janki das"
      }
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "timestamp": "1970-01-01T00:00:00Z",
    "transactionId": "string"
  }'
```

`POST /v0.5/users/auth/confirm`

This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
  1. demographic details are only required for  demographic auth as of now. 
  2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
  3. demographic.identifier is optional, however maybe required if authentication so mandates. 
  4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP. 


> Body parameter

```json
{
  "credential": {
    "authCode": "string",
    "demographic": {
      "dateOfBirth": "1972-02-29",
      "gender": "M",
      "identifier": {
        "type": "MOBILE",
        "value": "+919800083232"
      },
      "name": "janki das"
    }
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z",
  "transactionId": "string"
}
```

<h3 id="confirmation-request-sending-token-otp-or-other-authentication-details-from-hiphiu-for-confirmation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[PatientAuthConfirmRequest](#schemapatientauthconfirmrequest)|true|none|
|» credential|body|object|true|note, demographic details are only required for demographic verfication.|
|» » authCode|body|string|false|none|
|» » demographic|body|[PatientDemographic](#schemapatientdemographic)|false|Demographic details must be same as registered|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|
|» transactionId|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="confirmation-request-sending-token-otp-or-other-authentication-details-from-hiphiu-for-confirmation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted|None|
|400|Bad Request|**Causes:**<br>  * transaction id is not provided or invalid<br>  * token or other auth confirmation details not provided or invalid<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a patient's authentication modes relevant to specified purpose

> Code samples

```bash
curl https://example.com/v0.5/users/auth/fetch-modes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": {
      "id": "hinapatel79@ndhm",
      "purpose": "LINK",
      "requester": {
        "id": "100005",
        "type": "HIP"
      }
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/users/auth/fetch-modes`

This API is meant for identify supported authentication modes for a patient given a specific purpose


> Body parameter

```json
{
  "query": {
    "id": "hinapatel79@ndhm",
    "purpose": "LINK",
    "requester": {
      "id": "100005",
      "type": "HIP"
    }
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-a-patients-authentication-modes-relevant-to-specified-purpose-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[PatientAuthModeQueryRequest](#schemapatientauthmodequeryrequest)|true|none|
|» query|body|object|true|none|
|» » id|body|string|true|none|
|» » purpose|body|[PatientAuthPurpose](#schemapatientauthpurpose)|true|what is the purpose of user auth|
|» » requester|body|object|true|none|
|» » » id|body|string|true|none|
|» » » type|body|string|true|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » purpose|LINK|
|» » purpose|KYC|
|» » purpose|KYC_AND_LINK|
|» » » type|HIP|
|» » » type|HIU|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="get-a-patients-authentication-modes-relevant-to-specified-purpose-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted|None|
|400|Bad Request|Invalid request, required attributes not provided<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Initialize authentication from HIP

> Code samples

```bash
curl https://example.com/v0.5/users/auth/init \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": {
      "authMode": "MOBILE_OTP",
      "id": "hinapatel@ndhm",
      "purpose": "LINK",
      "requester": {
        "id": 100005,
        "type": "HIP"
      }
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/users/auth/init`

This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.


> Body parameter

```json
{
  "query": {
    "authMode": "MOBILE_OTP",
    "id": "hinapatel@ndhm",
    "purpose": "LINK",
    "requester": {
      "id": 100005,
      "type": "HIP"
    }
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="initialize-authentication-from-hip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[PatientAuthInitRequest](#schemapatientauthinitrequest)|true|none|
|» query|body|object|true|none|
|» » authMode|body|[AuthenticationMode](#schemaauthenticationmode)|false|Subjected to CM specific capability<br> 1. MOBILE_OTP - for SMS OTP<br> 2. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS<br> 3. AADHAAR_OTP - for auth using OTP sent to Aadhaar number<br> 4. DEMOGRAPHICS - for auth using demographic verification.<br>|
|» » id|body|string|true|id  of the patient understood by the CM|
|» » purpose|body|[PatientAuthPurpose](#schemapatientauthpurpose)|true|what is the purpose of user auth|
|» » requester|body|[PatientAuthRequester](#schemapatientauthrequester)|true|identification of requester|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » authMode|MOBILE_OTP|
|» » authMode|DIRECT|
|» » authMode|DEMOGRAPHICS|
|» » authMode|AADHAAR_OTP|
|» » purpose|LINK|
|» » purpose|KYC|
|» » purpose|KYC_AND_LINK|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="initialize-authentication-from-hip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted|None|
|400|Bad Request|**Causes:**<br>  * patient id is not provided<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

> Code samples

```bash
curl https://example.com/v0.5/users/auth/on-notify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acknowledgement": {
      "status": "OK"
    },
    "error": {
      "code": 1000,
      "message": "string"
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "resp": {
      "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/users/auth/on-notify`

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


> Body parameter

```json
{
  "acknowledgement": {
    "status": "OK"
  },
  "error": {
    "code": 1000,
    "message": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="callback-api-from-hiuhips-as-acknowledgement-of-auth-notification-in-case-of-direct-auth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[PatientAuthNotificationAcknowledgement](#schemapatientauthnotificationacknowledgement)|true|none|
|» acknowledgement|body|object|false|none|
|» » status|body|string|true|none|
|» error|body|[Error](#schemaerror)|false|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» resp|body|[RequestReference](#schemarequestreference)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » status|OK|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="callback-api-from-hiuhips-as-acknowledgement-of-auth-notification-in-case-of-direct-auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted|None|
|400|Bad Request|**Causes:**<br>  * required details not provided<br>  * neither auth nor error specified <br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-data-consent-manager-identification">identification</h1>

## Identify a patient by her consent-manager user-id

> Code samples

```bash
curl https://example.com/v0.5/patients/find \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "query": {
      "patient": {
        "id": "hinapatel79@ndhm"
      },
      "requester": {
        "id": 100005,
        "type": "HIU"
      }
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/patients/find`

This API is meant for identify to patient given her consent-manager-user-id. CM subsequently makes the /on-find Gateway API call with results. 


> Body parameter

```json
{
  "query": {
    "patient": {
      "id": "hinapatel79@ndhm"
    },
    "requester": {
      "id": 100005,
      "type": "HIU"
    }
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="identify-a-patient-by-her-consent-manager-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[PatientIdentificationRequest](#schemapatientidentificationrequest)|true|none|
|» query|body|object|true|none|
|» » patient|body|object|true|none|
|» » » id|body|string|true|none|
|» » requester|body|object|true|none|
|» » » id|body|string|true|none|
|» » » type|body|string|true|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » type|HIU|
|» » » type|HIP|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="identify-a-patient-by-her-consent-manager-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted|None|
|400|Bad Request|Invalid request, required attributes not provided<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-data-consent-manager-profile">profile</h1>

## Response to patient's share profile request

> Code samples

```bash
curl https://example.com/v0.5/patients/profile/on-share \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acknowledgement": {
      "healthId": "<username>@<suffix>",
      "status": "SUCCESS"
    },
    "error": {
      "code": 1000,
      "message": "string"
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "resp": {
      "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/patients/profile/on-share`

Result of patient share profile request at HIP end.


> Body parameter

```json
{
  "acknowledgement": {
    "healthId": "<username>@<suffix>",
    "status": "SUCCESS"
  },
  "error": {
    "code": 1000,
    "message": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="response-to-patients-share-profile-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[ShareProfileResult](#schemashareprofileresult)|true|none|
|» acknowledgement|body|[ShareProfileAcknowledgement](#schemashareprofileacknowledgement)|true|none|
|» error|body|[Error](#schemaerror)|false|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» resp|body|[RequestReference](#schemarequestreference)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="response-to-patients-share-profile-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted|None|
|400|Bad Request|**Causes:**<br>  * Format mismatch of any of attributes.<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-data-consent-manager-discovery">discovery</h1>

## Response to patient's account discovery request

> Code samples

```bash
curl https://example.com/v0.5/care-contexts/on-discover \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "error": {
      "code": 1000,
      "message": "string"
    },
    "patient": {
      "careContexts": [
        {
          "display": "string",
          "referenceNumber": "string"
        }
      ],
      "display": "string",
      "matchedBy": [
        "MOBILE"
      ],
      "referenceNumber": "string"
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "resp": {
      "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "timestamp": "1970-01-01T00:00:00Z",
    "transactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v0.5/care-contexts/on-discover`

Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be 
  1. **more than one definitive match for the given request** 
  2. **no verified identifer was specified**


> Body parameter

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  },
  "patient": {
    "careContexts": [
      {
        "display": "string",
        "referenceNumber": "string"
      }
    ],
    "display": "string",
    "matchedBy": [
      "MOBILE"
    ],
    "referenceNumber": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z",
  "transactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="response-to-patients-account-discovery-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[PatientDiscoveryResult](#schemapatientdiscoveryresult)|true|none|
|» error|body|[Error](#schemaerror)|false|none|
|» patient|body|[PatientRepresentation](#schemapatientrepresentation)|false|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» resp|body|[RequestReference](#schemarequestreference)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|
|» transactionId|body|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="response-to-patients-account-discovery-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted|None|
|400|Bad Request|**Causes:**<br>  * Format mismatch of any of attributes.<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-data-consent-manager-link">link</h1>

## API for HIP initiated care-context linking for patient

> Code samples

```bash
curl https://example.com/v0.5/links/link/add-contexts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "link": {
      "accessToken": "string",
      "patient": {
        "careContexts": [
          {
            "display": "string",
            "referenceNumber": "string"
          }
        ],
        "display": "string",
        "referenceNumber": "TMH-PUID-001"
      }
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/links/link/add-contexts`

API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.  
  1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired


> Body parameter

```json
{
  "link": {
    "accessToken": "string",
    "patient": {
      "careContexts": [
        {
          "display": "string",
          "referenceNumber": "string"
        }
      ],
      "display": "string",
      "referenceNumber": "TMH-PUID-001"
    }
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="api-for-hip-initiated-care-context-linking-for-patient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[PatientCareContextLinkRequest](#schemapatientcarecontextlinkrequest)|true|none|
|» link|body|[PatientCareContextLink](#schemapatientcarecontextlink)|true|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="api-for-hip-initiated-care-context-linking-for-patient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|accepted|None|
|400|Bad Request|**Causes:**<br>  * required information not provided<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Token authenticated by HIP, indicating completion of linkage of care-contexts

> Code samples

```bash
curl https://example.com/v0.5/links/link/on-confirm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "error": {
      "code": 1000,
      "message": "string"
    },
    "patient": {
      "careContexts": [
        {
          "display": "string",
          "referenceNumber": "string"
        }
      ],
      "display": "string",
      "referenceNumber": "string"
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "resp": {
      "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/links/link/on-confirm`

Returns a list of linked care contexts with patient reference number.
  1. **Validated and linked account reference number**
  2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
  3. **Verified that same Consent Manager which made the link request is sending the token**
  4. **Results of unmasked linked care contexts with patient reference number**


> Body parameter

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  },
  "patient": {
    "careContexts": [
      {
        "display": "string",
        "referenceNumber": "string"
      }
    ],
    "display": "string",
    "referenceNumber": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="token-authenticated-by-hip-indicating-completion-of-linkage-of-care-contexts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[PatientLinkResult](#schemapatientlinkresult)|true|none|
|» error|body|[Error](#schemaerror)|false|none|
|» patient|body|object|false|none|
|» » careContexts|body|[[CareContextRepresentation](#schemacarecontextrepresentation)]|true|none|
|» » display|body|string|true|none|
|» » referenceNumber|body|string|true|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» resp|body|[RequestReference](#schemarequestreference)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="token-authenticated-by-hip-indicating-completion-of-linkage-of-care-contexts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|accepted|None|
|400|Bad Request|**Causes:**<br>  * resp not specified<br>  * atleast patient or error should be specified<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Response to patient's care context link request

> Code samples

```bash
curl https://example.com/v0.5/links/link/on-init \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "error": {
      "code": 1000,
      "message": "string"
    },
    "link": {
      "authenticationType": "DIRECT",
      "meta": {
        "communicationExpiry": "2019-12-30T12:01:55Z",
        "communicationHint": "string",
        "communicationMedium": "MOBILE"
      },
      "referenceNumber": "string"
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "resp": {
      "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "timestamp": "1970-01-01T00:00:00Z",
    "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d"
  }'
```

`POST /v0.5/links/link/on-init`

Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
  1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
  2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
  3. **HIP should communicate the mode of authentication of a successful request**
  4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. **Patient reference number is invalid**
  2. **Care context reference numbers are invalid**


> Body parameter

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  },
  "link": {
    "authenticationType": "DIRECT",
    "meta": {
      "communicationExpiry": "2019-12-30T12:01:55Z",
      "communicationHint": "string",
      "communicationMedium": "MOBILE"
    },
    "referenceNumber": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z",
  "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d"
}
```

<h3 id="response-to-patients-care-context-link-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[PatientLinkReferenceResult](#schemapatientlinkreferenceresult)|true|none|
|» error|body|[Error](#schemaerror)|false|none|
|» link|body|object|false|none|
|» » authenticationType|body|string|true|none|
|» » meta|body|[Meta](#schemameta)|false|none|
|» » referenceNumber|body|string|true|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» resp|body|[RequestReference](#schemarequestreference)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|
|» transactionId|body|[UuidSchema](#schemauuidschema)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » authenticationType|DIRECT|
|» » authenticationType|MEDIATED|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="response-to-patients-care-context-link-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted|None|
|400|Bad Request|**Causes:**<br>  * Format mismatch of any of attributes.<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-data-consent-manager-consent">consent</h1>

## Create consent request

> Code samples

```bash
curl https://example.com/v0.5/consent-requests/init \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "consent": {
      "careContexts": [
        {
          "careContextReference": "Episode1",
          "patientReference": "batman@tmh"
        }
      ],
      "hiTypes": [
        "OPConsultation"
      ],
      "hip": {
        "id": "string"
      },
      "hiu": {
        "id": "string"
      },
      "patient": {
        "id": "hinapatel79@ndhm"
      },
      "permission": {
        "accessMode": "VIEW",
        "dataEraseAt": "1970-01-01T00:00:00Z",
        "dateRange": {
          "from": "1970-01-01T00:00:00Z",
          "to": "1970-01-01T00:00:00Z"
        },
        "frequency": {
          "repeats": 0,
          "unit": "HOUR",
          "value": 0
        }
      },
      "purpose": {
        "code": "string",
        "refUri": "http://example.com",
        "text": "string"
      },
      "requester": {
        "identifier": {
          "system": "https://www.mciindia.org",
          "type": "REGNO",
          "value": "MH1001"
        },
        "name": "Dr. Manju"
      }
    },
    "requestId": "499a5a4a-7dda-4f20-9b67-e24589627061",
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/consent-requests/init`

Creates a consent request to get data about a patient by HIU user. CM should call Gateway - ***/v0.5/consent-requests/on-init*** API with the consent-request-id

> Body parameter

```json
{
  "consent": {
    "careContexts": [
      {
        "careContextReference": "Episode1",
        "patientReference": "batman@tmh"
      }
    ],
    "hiTypes": [
      "OPConsultation"
    ],
    "hip": {
      "id": "string"
    },
    "hiu": {
      "id": "string"
    },
    "patient": {
      "id": "hinapatel79@ndhm"
    },
    "permission": {
      "accessMode": "VIEW",
      "dataEraseAt": "1970-01-01T00:00:00Z",
      "dateRange": {
        "from": "1970-01-01T00:00:00Z",
        "to": "1970-01-01T00:00:00Z"
      },
      "frequency": {
        "repeats": 0,
        "unit": "HOUR",
        "value": 0
      }
    },
    "purpose": {
      "code": "string",
      "refUri": "http://example.com",
      "text": "string"
    },
    "requester": {
      "identifier": {
        "system": "https://www.mciindia.org",
        "type": "REGNO",
        "value": "MH1001"
      },
      "name": "Dr. Manju"
    }
  },
  "requestId": "499a5a4a-7dda-4f20-9b67-e24589627061",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="create-consent-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[ConsentRequest](#schemaconsentrequest)|true|none|
|» consent|body|object|true|none|
|» » careContexts|body|[[CareContextDefinition](#schemacarecontextdefinition)]|false|none|
|» » hiTypes|body|[[HITypeEnum](#schemahitypeenum)]|true|none|
|» » hip|body|object|false|none|
|» » » id|body|string|true|none|
|» » hiu|body|object|true|none|
|» » » id|body|string|true|none|
|» » patient|body|object|true|none|
|» » » id|body|string(<user-id>@<ndhm>)|true|none|
|» » permission|body|[Permission](#schemapermission)|true|none|
|» » purpose|body|[UsePurpose](#schemausepurpose)|true|none|
|» » requester|body|[Requester](#schemarequester)|true|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request.|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » hiTypes|OPConsultation|
|» » hiTypes|Prescription|
|» » hiTypes|DischargeSummary|
|» » hiTypes|DiagnosticReport|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="create-consent-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted|None|
|400|Bad Request|**Causes:**<br>  * Invalid data sent <br>  * Required attributes not mentioned<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Expired/Invalid token.<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get consent request status

> Code samples

```bash
curl https://example.com/v0.5/consent-requests/status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "consentRequestId": "string",
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/consent-requests/status`

Get status of consent request done previously. CM responds by calling Gateway API - ***/v0.5/consent-requests/on-status***

> Body parameter

```json
{
  "consentRequestId": "string",
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-consent-request-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[ConsentRequestStatusRequest](#schemaconsentrequeststatusrequest)|true|none|
|» consentRequestId|body|string|true|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="get-consent-request-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted|None|
|400|Bad Request|**Causes:**<br>  * Invalid data sent<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Expired/Invalid token.<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get consent artefact

> Code samples

```bash
curl https://example.com/v0.5/consents/fetch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "consentId": "string",
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/consents/fetch`

This API is called when a HIU makes a request to get a consent artefact. For response please refer to the Gateway ***/v0.5/consents/on-fetch***

> Body parameter

```json
{
  "consentId": "string",
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-consent-artefact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[ConsentFetchRequest](#schemaconsentfetchrequest)|true|none|
|» consentId|body|string|true|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="get-consent-artefact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted|None|
|400|Bad Request|**Causes:**<br>  * Invalid data sent<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Expired/Invalid token.<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Consent notification

> Code samples

```bash
curl https://example.com/v0.5/consents/hip/on-notify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acknowledgement": {
      "consentId": "<consent-artefact-id>",
      "status": "OK"
    },
    "error": {
      "code": 1000,
      "message": "string"
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "resp": {
      "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/consents/hip/on-notify`

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration, notified by CM earlier via Gateway API - ***/v0.5/consents/hip/notify***. 


> Body parameter

```json
{
  "acknowledgement": {
    "consentId": "<consent-artefact-id>",
    "status": "OK"
  },
  "error": {
    "code": 1000,
    "message": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="consent-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[HIPConsentNotificationResponse](#schemahipconsentnotificationresponse)|true|none|
|» acknowledgement|body|[ConsentAcknowledgement](#schemaconsentacknowledgement)|false|none|
|» error|body|[Error](#schemaerror)|false|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» resp|body|[RequestReference](#schemarequestreference)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

> Example responses

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="consent-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted|None|
|401|Unauthorized|**Causes:**<br>  * Invalid/Expired/Empty token.<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream services are down<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Consent notification

> Code samples

```bash
curl https://example.com/v0.5/consents/hiu/on-notify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acknowledgement": [
      {
        "consentId": "<consent-artefact-id>",
        "status": "OK"
      }
    ],
    "error": {
      "code": 1000,
      "message": "string"
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "resp": {
      "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/consents/hiu/on-notify`

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED, notified by CM earlier via Gateway API - ***/v0.5/consents/hiu/notify***.


> Body parameter

```json
{
  "acknowledgement": [
    {
      "consentId": "<consent-artefact-id>",
      "status": "OK"
    }
  ],
  "error": {
    "code": 1000,
    "message": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="consent-notification-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[HIUConsentNotificationResponse](#schemahiuconsentnotificationresponse)|true|none|
|» acknowledgement|body|[[ConsentAcknowledgement](#schemaconsentacknowledgement)]|false|none|
|» error|body|[Error](#schemaerror)|false|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» resp|body|[RequestReference](#schemarequestreference)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

> Example responses

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="consent-notification-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted.|None|
|401|Unauthorized|**Causes:**<br>  * Invalid/Expired/Empty token.<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream services are down<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-data-consent-manager-data-flow">data flow</h1>

## Notifications corresponding to events during data flow

> Code samples

```bash
curl https://example.com/v0.5/health-information/notify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "notification": {
      "consentId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
      "doneAt": "1970-01-01T00:00:00Z",
      "notifier": {
        "id": 100005,
        "type": "HIU"
      },
      "statusNotification": {
        "hipId": "max",
        "sessionStatus": "TRANSFERRED",
        "statusResponses": [
          {
            "careContextReference": "string",
            "description": "string",
            "hiStatus": "OK"
          }
        ]
      },
      "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d"
    },
    "requestId": "499a5a4a-7dda-4f20-9b67-e24589627061",
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/health-information/notify`

API called by HIU and HIP during data-transfer. 
1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED] 


> Body parameter

```json
{
  "notification": {
    "consentId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
    "doneAt": "1970-01-01T00:00:00Z",
    "notifier": {
      "id": 100005,
      "type": "HIU"
    },
    "statusNotification": {
      "hipId": "max",
      "sessionStatus": "TRANSFERRED",
      "statusResponses": [
        {
          "careContextReference": "string",
          "description": "string",
          "hiStatus": "OK"
        }
      ]
    },
    "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d"
  },
  "requestId": "499a5a4a-7dda-4f20-9b67-e24589627061",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="notifications-corresponding-to-events-during-data-flow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[HealthInformationNotification](#schemahealthinformationnotification)|true|none|
|» notification|body|object|true|none|
|» » consentId|body|[UuidSchema](#schemauuidschema)|true|none|
|» » doneAt|body|string(date-time)|true|none|
|» » notifier|body|object|true|none|
|» » » id|body|string|true|none|
|» » » type|body|string|true|none|
|» » statusNotification|body|object|true|none|
|» » » hipId|body|string|true|none|
|» » » sessionStatus|body|string|true|none|
|» » » statusResponses|body|[object]|false|none|
|» » » » careContextReference|body|string|true|none|
|» » » » description|body|string|false|none|
|» » » » hiStatus|body|string|true|none|
|» » transactionId|body|[UuidSchema](#schemauuidschema)|true|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request.|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » type|HIU|
|» » » type|HIP|
|» » » sessionStatus|TRANSFERRED|
|» » » sessionStatus|FAILED|
|» » » » hiStatus|DELIVERED|
|» » » » hiStatus|OK|
|» » » » hiStatus|ERRORED|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="notifications-corresponding-to-events-during-data-flow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Notification is Accepted|None|
|400|Bad Request|**Causes:**<br>  * Invalid Request<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Expired/Invalid token.<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Health information data request acknowledgement from HIP

> Code samples

```bash
curl https://example.com/v0.5/health-information/on-request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "error": {
      "code": 1000,
      "message": "string"
    },
    "hiRequest": {
      "sessionStatus": "ACKNOWLEDGED",
      "transactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "resp": {
      "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/health-information/on-request`

This API is called by HIP to acknowledge Health information request receipt. When HIU requests health information, CM generates a transactionId and makes a health information request to the HIP(s). HIPs acknowledgement to the health-information request is coveyed by this API. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


> Body parameter

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  },
  "hiRequest": {
    "sessionStatus": "ACKNOWLEDGED",
    "transactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="health-information-data-request-acknowledgement-from-hip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[HIPHealthInformationRequestAcknowledgement](#schemahiphealthinformationrequestacknowledgement)|true|none|
|» error|body|[Error](#schemaerror)|false|none|
|» hiRequest|body|object|false|none|
|» » sessionStatus|body|string|true|none|
|» » transactionId|body|string(uuid)|true|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» resp|body|[RequestReference](#schemarequestreference)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » sessionStatus|ACKNOWLEDGED|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="health-information-data-request-acknowledgement-from-hip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted.|None|
|400|Bad Request|**Causes:**<br>  * Bad request<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Token is invalid or Link has expired<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Health information data request from HIU

> Code samples

```bash
curl https://example.com/v0.5/health-information/request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "hiRequest": {
      "consent": {
        "id": "string"
      },
      "dataPushUrl": "string",
      "dateRange": {
        "from": "1970-01-01T00:00:00Z",
        "to": "1970-01-01T00:00:00Z"
      },
      "keyMaterial": {
        "cryptoAlg": "ECDH",
        "curve": "Curve25519",
        "dhPublicKey": {
          "expiry": "1970-01-01T00:00:00Z",
          "keyValue": "string",
          "parameters": "Curve25519/32byte random key"
        },
        "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    },
    "requestId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/health-information/request`

HIU request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via Gateway API - ***/v0.5/health-information/cm/on-request***. 


> Body parameter

```json
{
  "hiRequest": {
    "consent": {
      "id": "string"
    },
    "dataPushUrl": "string",
    "dateRange": {
      "from": "1970-01-01T00:00:00Z",
      "to": "1970-01-01T00:00:00Z"
    },
    "keyMaterial": {
      "cryptoAlg": "ECDH",
      "curve": "Curve25519",
      "dhPublicKey": {
        "expiry": "1970-01-01T00:00:00Z",
        "keyValue": "string",
        "parameters": "Curve25519/32byte random key"
      },
      "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
  },
  "requestId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="health-information-data-request-from-hiu-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[HIRequest](#schemahirequest)|true|none|
|» hiRequest|body|object|true|none|
|» » consent|body|[consent](#schemaconsent)|true|none|
|» » dataPushUrl|body|string|true|none|
|» » dateRange|body|[DateRange](#schemadaterange)|true|none|
|» » keyMaterial|body|[keyMaterial](#schemakeymaterial)|true|none|
|» requestId|body|[UuidSchema](#schemauuidschema)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="health-information-data-request-from-hiu-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted|None|
|400|Bad Request|**Causes:**<br>  * Bad request<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Token is invalid or Link has expired<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-data-consent-manager-subscriptions">subscriptions</h1>

## Request for subscription

> Code samples

```bash
curl https://example.com/v0.5/subscription-requests/cm/init \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "requestId": "499a5a4a-7dda-4f20-9b67-e24589627061",
    "subscription": {
      "categories": [
        "LINK"
      ],
      "hips": [
        {
          "id": "string"
        }
      ],
      "hiu": {
        "id": "string"
      },
      "patient": {
        "id": "hinapatel79@ndhm"
      },
      "period": {
        "from": "1970-01-01T00:00:00Z",
        "to": "1970-01-01T00:00:00Z"
      },
      "purpose": {
        "code": "string",
        "refUri": "http://example.com",
        "text": "string"
      }
    },
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/subscription-requests/cm/init`

creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role

> Body parameter

```json
{
  "requestId": "499a5a4a-7dda-4f20-9b67-e24589627061",
  "subscription": {
    "categories": [
      "LINK"
    ],
    "hips": [
      {
        "id": "string"
      }
    ],
    "hiu": {
      "id": "string"
    },
    "patient": {
      "id": "hinapatel79@ndhm"
    },
    "period": {
      "from": "1970-01-01T00:00:00Z",
      "to": "1970-01-01T00:00:00Z"
    },
    "purpose": {
      "code": "string",
      "refUri": "http://example.com",
      "text": "string"
    }
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="request-for-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[SubscriptionRequest](#schemasubscriptionrequest)|true|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request.|
|» subscription|body|object|true|none|
|» » categories|body|[[SubscriptionCategory](#schemasubscriptioncategory)]|true|none|
|» » hips|body|[[OrganizationRepresentation](#schemaorganizationrepresentation)]|false|none|
|» » hiu|body|[OrganizationRepresentation](#schemaorganizationrepresentation)|true|none|
|» » patient|body|[ConsentManagerPatientID](#schemaconsentmanagerpatientid)|true|none|
|» » period|body|[SubscriptionPeriod](#schemasubscriptionperiod)|true|none|
|» » purpose|body|[UsePurpose](#schemausepurpose)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » categories|LINK|

> Example responses

> 400 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="request-for-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted|None|
|400|Bad Request|**Causes:**<br>  * Invalid data sent <br>  * Required attributes not mentioned<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Expired/Invalid token.<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.

> Code samples

```bash
curl https://example.com/v0.5/subscription-requests/hiu/on-notify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acknowledgement": {
      "status": "OK",
      "subscriptionRequestId": "subscription Id"
    },
    "error": {
      "code": 1000,
      "message": "string"
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "resp": {
      "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/subscription-requests/hiu/on-notify`

This API is called by HIU as acknowledgement to subscription request relevant notifications. 


> Body parameter

```json
{
  "acknowledgement": {
    "status": "OK",
    "subscriptionRequestId": "subscription Id"
  },
  "error": {
    "code": 1000,
    "message": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="callback-api-for-subscription-requestshiunotify-to-acknowledge-receipt-of-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[HIUSubscriptionRequestNotificationAcknowledgement](#schemahiusubscriptionrequestnotificationacknowledgement)|true|none|
|» acknowledgement|body|object|false|none|
|» » status|body|string|true|none|
|» » subscriptionRequestId|body|string|true|none|
|» error|body|[Error](#schemaerror)|false|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» resp|body|[RequestReference](#schemarequestreference)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » status|OK|

> Example responses

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="callback-api-for-subscription-requestshiunotify-to-acknowledge-receipt-of-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted.|None|
|401|Unauthorized|**Causes:**<br>  * Invalid/Expired/Empty token.<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream services are down<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.

> Code samples

```bash
curl https://example.com/v0.5/subscriptions/hiu/on-notify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acknowledgement": {
      "eventId": "subscription event Id",
      "status": "OK"
    },
    "error": {
      "code": 1000,
      "message": "string"
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "resp": {
      "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/subscriptions/hiu/on-notify`

This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.


> Body parameter

```json
{
  "acknowledgement": {
    "eventId": "subscription event Id",
    "status": "OK"
  },
  "error": {
    "code": 1000,
    "message": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="callback-api-for-subscriptionshiunotify-to-acknowledge-receipt-of-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server.|
|body|body|[HIUSubscriptionNotificationAcknowledgment](#schemahiusubscriptionnotificationacknowledgment)|true|none|
|» acknowledgement|body|object|false|none|
|» » eventId|body|string|true|none|
|» » status|body|string|true|none|
|» error|body|[Error](#schemaerror)|false|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» resp|body|[RequestReference](#schemarequestreference)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » status|OK|

> Example responses

> 401 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

> 500 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

<h3 id="callback-api-for-subscriptionshiunotify-to-acknowledge-receipt-of-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted.|None|
|401|Unauthorized|**Causes:**<br>  * Invalid/Expired/Empty token.<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream services are down<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-data-consent-manager-monitoring">monitoring</h1>

## Get consent request status

> Code samples

```bash
curl https://example.com/v0.5/heartbeat \
  -H 'Accept: application/json'
```

`GET /v0.5/heartbeat`

> Example responses

> 200 Response

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  },
  "status": "UP",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-consent-request-status-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HeartbeatResponse](#schemaheartbeatresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AuthConfirmIdentifier">AuthConfirmIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaauthconfirmidentifier"></a>
<a id="schema_AuthConfirmIdentifier"></a>
<a id="tocSauthconfirmidentifier"></a>
<a id="tocsauthconfirmidentifier"></a>

```json
{
  "type": "MOBILE",
  "value": "+919800083232"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[AuthConfirmIdentifierType](#schemaauthconfirmidentifiertype)|true|none|none|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MOBILE|

<h2 id="tocS_AuthConfirmIdentifierType">AuthConfirmIdentifierType</h2>
<!-- backwards compatibility -->
<a id="schemaauthconfirmidentifiertype"></a>
<a id="schema_AuthConfirmIdentifierType"></a>
<a id="tocSauthconfirmidentifiertype"></a>
<a id="tocsauthconfirmidentifiertype"></a>

```json
"MOBILE"
```

<h2 id="tocS_AuthenticationMode">AuthenticationMode</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationmode"></a>
<a id="schema_AuthenticationMode"></a>
<a id="tocSauthenticationmode"></a>
<a id="tocsauthenticationmode"></a>

```json
"MOBILE_OTP"
```

Subjected to CM specific capability
 1. MOBILE_OTP - for SMS OTP
 2. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS
 3. AADHAAR_OTP - for auth using OTP sent to Aadhaar number
 4. DEMOGRAPHICS - for auth using demographic verification.

<h2 id="tocS_CareContextDefinition">CareContextDefinition</h2>
<!-- backwards compatibility -->
<a id="schemacarecontextdefinition"></a>
<a id="schema_CareContextDefinition"></a>
<a id="tocScarecontextdefinition"></a>
<a id="tocscarecontextdefinition"></a>

```json
{
  "careContextReference": "Episode1",
  "patientReference": "batman@tmh"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|careContextReference|string|true|none|none|
|patientReference|string|true|none|none|

<h2 id="tocS_CareContextRepresentation">CareContextRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemacarecontextrepresentation"></a>
<a id="schema_CareContextRepresentation"></a>
<a id="tocScarecontextrepresentation"></a>
<a id="tocscarecontextrepresentation"></a>

```json
{
  "display": "string",
  "referenceNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display|string|true|none|none|
|referenceNumber|string|true|none|none|

<h2 id="tocS_ConsentAcknowledgement">ConsentAcknowledgement</h2>
<!-- backwards compatibility -->
<a id="schemaconsentacknowledgement"></a>
<a id="schema_ConsentAcknowledgement"></a>
<a id="tocSconsentacknowledgement"></a>
<a id="tocsconsentacknowledgement"></a>

```json
{
  "consentId": "<consent-artefact-id>",
  "status": "OK"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentId|string|true|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OK|
|status|UNKNOWN|

<h2 id="tocS_ConsentFetchRequest">ConsentFetchRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconsentfetchrequest"></a>
<a id="schema_ConsentFetchRequest"></a>
<a id="tocSconsentfetchrequest"></a>
<a id="tocsconsentfetchrequest"></a>

```json
{
  "consentId": "string",
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentId|string|true|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_ConsentManagerPatientID">ConsentManagerPatientID</h2>
<!-- backwards compatibility -->
<a id="schemaconsentmanagerpatientid"></a>
<a id="schema_ConsentManagerPatientID"></a>
<a id="tocSconsentmanagerpatientid"></a>
<a id="tocsconsentmanagerpatientid"></a>

```json
{
  "id": "hinapatel79@ndhm"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(<user-id>@<ndhm>)|true|none|none|

<h2 id="tocS_ConsentRequest">ConsentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconsentrequest"></a>
<a id="schema_ConsentRequest"></a>
<a id="tocSconsentrequest"></a>
<a id="tocsconsentrequest"></a>

```json
{
  "consent": {
    "careContexts": [
      {
        "careContextReference": "Episode1",
        "patientReference": "batman@tmh"
      }
    ],
    "hiTypes": [
      "OPConsultation"
    ],
    "hip": {
      "id": "string"
    },
    "hiu": {
      "id": "string"
    },
    "patient": {
      "id": "hinapatel79@ndhm"
    },
    "permission": {
      "accessMode": "VIEW",
      "dataEraseAt": "1970-01-01T00:00:00Z",
      "dateRange": {
        "from": "1970-01-01T00:00:00Z",
        "to": "1970-01-01T00:00:00Z"
      },
      "frequency": {
        "repeats": 0,
        "unit": "HOUR",
        "value": 0
      }
    },
    "purpose": {
      "code": "string",
      "refUri": "http://example.com",
      "text": "string"
    },
    "requester": {
      "identifier": {
        "system": "https://www.mciindia.org",
        "type": "REGNO",
        "value": "MH1001"
      },
      "name": "Dr. Manju"
    }
  },
  "requestId": "499a5a4a-7dda-4f20-9b67-e24589627061",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consent|object|true|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request.|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_ConsentRequestStatusRequest">ConsentRequestStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconsentrequeststatusrequest"></a>
<a id="schema_ConsentRequestStatusRequest"></a>
<a id="tocSconsentrequeststatusrequest"></a>
<a id="tocsconsentrequeststatusrequest"></a>

```json
{
  "consentRequestId": "string",
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentRequestId|string|true|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_DateRange">DateRange</h2>
<!-- backwards compatibility -->
<a id="schemadaterange"></a>
<a id="schema_DateRange"></a>
<a id="tocSdaterange"></a>
<a id="tocsdaterange"></a>

```json
{
  "from": "1970-01-01T00:00:00Z",
  "to": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string(date-time)|true|none|none|
|to|string(date-time)|true|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 1000,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|true|none|none|
|message|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|code|1000|
|code|10001|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Error](#schemaerror)|false|none|none|

<h2 id="tocS_HIPConsentNotificationResponse">HIPConsentNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemahipconsentnotificationresponse"></a>
<a id="schema_HIPConsentNotificationResponse"></a>
<a id="tocShipconsentnotificationresponse"></a>
<a id="tocshipconsentnotificationresponse"></a>

```json
{
  "acknowledgement": {
    "consentId": "<consent-artefact-id>",
    "status": "OK"
  },
  "error": {
    "code": 1000,
    "message": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgement|[ConsentAcknowledgement](#schemaconsentacknowledgement)|false|none|none|
|error|[Error](#schemaerror)|false|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|resp|[RequestReference](#schemarequestreference)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_HIPHealthInformationRequestAcknowledgement">HIPHealthInformationRequestAcknowledgement</h2>
<!-- backwards compatibility -->
<a id="schemahiphealthinformationrequestacknowledgement"></a>
<a id="schema_HIPHealthInformationRequestAcknowledgement"></a>
<a id="tocShiphealthinformationrequestacknowledgement"></a>
<a id="tocshiphealthinformationrequestacknowledgement"></a>

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  },
  "hiRequest": {
    "sessionStatus": "ACKNOWLEDGED",
    "transactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Error](#schemaerror)|false|none|none|
|hiRequest|object|false|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|resp|[RequestReference](#schemarequestreference)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_HIRequest">HIRequest</h2>
<!-- backwards compatibility -->
<a id="schemahirequest"></a>
<a id="schema_HIRequest"></a>
<a id="tocShirequest"></a>
<a id="tocshirequest"></a>

```json
{
  "hiRequest": {
    "consent": {
      "id": "string"
    },
    "dataPushUrl": "string",
    "dateRange": {
      "from": "1970-01-01T00:00:00Z",
      "to": "1970-01-01T00:00:00Z"
    },
    "keyMaterial": {
      "cryptoAlg": "ECDH",
      "curve": "Curve25519",
      "dhPublicKey": {
        "expiry": "1970-01-01T00:00:00Z",
        "keyValue": "string",
        "parameters": "Curve25519/32byte random key"
      },
      "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
  },
  "requestId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hiRequest|object|true|none|none|
|requestId|[UuidSchema](#schemauuidschema)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_HITypeEnum">HITypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemahitypeenum"></a>
<a id="schema_HITypeEnum"></a>
<a id="tocShitypeenum"></a>
<a id="tocshitypeenum"></a>

```json
"OPConsultation"
```

<h2 id="tocS_HIUConsentNotificationResponse">HIUConsentNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemahiuconsentnotificationresponse"></a>
<a id="schema_HIUConsentNotificationResponse"></a>
<a id="tocShiuconsentnotificationresponse"></a>
<a id="tocshiuconsentnotificationresponse"></a>

```json
{
  "acknowledgement": [
    {
      "consentId": "<consent-artefact-id>",
      "status": "OK"
    }
  ],
  "error": {
    "code": 1000,
    "message": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgement|[[ConsentAcknowledgement](#schemaconsentacknowledgement)]|false|none|none|
|error|[Error](#schemaerror)|false|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|resp|[RequestReference](#schemarequestreference)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_HIUSubscriptionNotificationAcknowledgment">HIUSubscriptionNotificationAcknowledgment</h2>
<!-- backwards compatibility -->
<a id="schemahiusubscriptionnotificationacknowledgment"></a>
<a id="schema_HIUSubscriptionNotificationAcknowledgment"></a>
<a id="tocShiusubscriptionnotificationacknowledgment"></a>
<a id="tocshiusubscriptionnotificationacknowledgment"></a>

```json
{
  "acknowledgement": {
    "eventId": "subscription event Id",
    "status": "OK"
  },
  "error": {
    "code": 1000,
    "message": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgement|object|false|none|none|
|error|[Error](#schemaerror)|false|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|resp|[RequestReference](#schemarequestreference)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_HIUSubscriptionRequestNotificationAcknowledgement">HIUSubscriptionRequestNotificationAcknowledgement</h2>
<!-- backwards compatibility -->
<a id="schemahiusubscriptionrequestnotificationacknowledgement"></a>
<a id="schema_HIUSubscriptionRequestNotificationAcknowledgement"></a>
<a id="tocShiusubscriptionrequestnotificationacknowledgement"></a>
<a id="tocshiusubscriptionrequestnotificationacknowledgement"></a>

```json
{
  "acknowledgement": {
    "status": "OK",
    "subscriptionRequestId": "subscription Id"
  },
  "error": {
    "code": 1000,
    "message": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgement|object|false|none|none|
|error|[Error](#schemaerror)|false|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|resp|[RequestReference](#schemarequestreference)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_HealthInformationNotification">HealthInformationNotification</h2>
<!-- backwards compatibility -->
<a id="schemahealthinformationnotification"></a>
<a id="schema_HealthInformationNotification"></a>
<a id="tocShealthinformationnotification"></a>
<a id="tocshealthinformationnotification"></a>

```json
{
  "notification": {
    "consentId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
    "doneAt": "1970-01-01T00:00:00Z",
    "notifier": {
      "id": 100005,
      "type": "HIU"
    },
    "statusNotification": {
      "hipId": "max",
      "sessionStatus": "TRANSFERRED",
      "statusResponses": [
        {
          "careContextReference": "string",
          "description": "string",
          "hiStatus": "OK"
        }
      ]
    },
    "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d"
  },
  "requestId": "499a5a4a-7dda-4f20-9b67-e24589627061",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notification|object|true|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request.|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_HeartbeatResponse">HeartbeatResponse</h2>
<!-- backwards compatibility -->
<a id="schemaheartbeatresponse"></a>
<a id="schema_HeartbeatResponse"></a>
<a id="tocSheartbeatresponse"></a>
<a id="tocsheartbeatresponse"></a>

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  },
  "status": "UP",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Error](#schemaerror)|false|none|none|
|status|string|false|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|false|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Property|Value|
|---|---|
|status|UP|
|status|DOWN|

<h2 id="tocS_Identifier">Identifier</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier"></a>
<a id="schema_Identifier"></a>
<a id="tocSidentifier"></a>
<a id="tocsidentifier"></a>

```json
{
  "type": "MOBILE",
  "value": "+919800083232"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[IdentifierType](#schemaidentifiertype)|true|none|none|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|MOBILE|
|type|MR|

<h2 id="tocS_IdentifierType">IdentifierType</h2>
<!-- backwards compatibility -->
<a id="schemaidentifiertype"></a>
<a id="schema_IdentifierType"></a>
<a id="tocSidentifiertype"></a>
<a id="tocsidentifiertype"></a>

```json
"MOBILE"
```

<h2 id="tocS_KeyObject">KeyObject</h2>
<!-- backwards compatibility -->
<a id="schemakeyobject"></a>
<a id="schema_KeyObject"></a>
<a id="tocSkeyobject"></a>
<a id="tocskeyobject"></a>

```json
{
  "expiry": "1970-01-01T00:00:00Z",
  "keyValue": "string",
  "parameters": "Curve25519/32byte random key"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiry|string(date-time)|true|none|none|
|keyValue|string(string)|true|none|none|
|parameters|string(string)|true|none|none|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "communicationExpiry": "2019-12-30T12:01:55Z",
  "communicationHint": "string",
  "communicationMedium": "MOBILE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|communicationExpiry|string|false|none|none|
|communicationHint|string|false|none|none|
|communicationMedium|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|communicationMedium|MOBILE|
|communicationMedium|EMAIL|

<h2 id="tocS_OrganizationRepresentation">OrganizationRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationrepresentation"></a>
<a id="schema_OrganizationRepresentation"></a>
<a id="tocSorganizationrepresentation"></a>
<a id="tocsorganizationrepresentation"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<h2 id="tocS_PatientAuthConfirmRequest">PatientAuthConfirmRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatientauthconfirmrequest"></a>
<a id="schema_PatientAuthConfirmRequest"></a>
<a id="tocSpatientauthconfirmrequest"></a>
<a id="tocspatientauthconfirmrequest"></a>

```json
{
  "credential": {
    "authCode": "string",
    "demographic": {
      "dateOfBirth": "1972-02-29",
      "gender": "M",
      "identifier": {
        "type": "MOBILE",
        "value": "+919800083232"
      },
      "name": "janki das"
    }
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z",
  "transactionId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credential|object|true|none|note, demographic details are only required for demographic verfication.|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|
|transactionId|string|true|none|none|

<h2 id="tocS_PatientAuthInitRequest">PatientAuthInitRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatientauthinitrequest"></a>
<a id="schema_PatientAuthInitRequest"></a>
<a id="tocSpatientauthinitrequest"></a>
<a id="tocspatientauthinitrequest"></a>

```json
{
  "query": {
    "authMode": "MOBILE_OTP",
    "id": "hinapatel@ndhm",
    "purpose": "LINK",
    "requester": {
      "id": 100005,
      "type": "HIP"
    }
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|object|true|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_PatientAuthModeQueryRequest">PatientAuthModeQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatientauthmodequeryrequest"></a>
<a id="schema_PatientAuthModeQueryRequest"></a>
<a id="tocSpatientauthmodequeryrequest"></a>
<a id="tocspatientauthmodequeryrequest"></a>

```json
{
  "query": {
    "id": "hinapatel79@ndhm",
    "purpose": "LINK",
    "requester": {
      "id": "100005",
      "type": "HIP"
    }
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|object|true|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_PatientAuthNotificationAcknowledgement">PatientAuthNotificationAcknowledgement</h2>
<!-- backwards compatibility -->
<a id="schemapatientauthnotificationacknowledgement"></a>
<a id="schema_PatientAuthNotificationAcknowledgement"></a>
<a id="tocSpatientauthnotificationacknowledgement"></a>
<a id="tocspatientauthnotificationacknowledgement"></a>

```json
{
  "acknowledgement": {
    "status": "OK"
  },
  "error": {
    "code": 1000,
    "message": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgement|object|false|none|none|
|error|[Error](#schemaerror)|false|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|resp|[RequestReference](#schemarequestreference)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_PatientAuthPurpose">PatientAuthPurpose</h2>
<!-- backwards compatibility -->
<a id="schemapatientauthpurpose"></a>
<a id="schema_PatientAuthPurpose"></a>
<a id="tocSpatientauthpurpose"></a>
<a id="tocspatientauthpurpose"></a>

```json
"LINK"
```

what is the purpose of user auth

<h2 id="tocS_PatientAuthRequester">PatientAuthRequester</h2>
<!-- backwards compatibility -->
<a id="schemapatientauthrequester"></a>
<a id="schema_PatientAuthRequester"></a>
<a id="tocSpatientauthrequester"></a>
<a id="tocspatientauthrequester"></a>

```json
{
  "id": 100005,
  "type": "HIP"
}
```

identification of requester

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HIP|
|type|HIU|

<h2 id="tocS_PatientCareContextLink">PatientCareContextLink</h2>
<!-- backwards compatibility -->
<a id="schemapatientcarecontextlink"></a>
<a id="schema_PatientCareContextLink"></a>
<a id="tocSpatientcarecontextlink"></a>
<a id="tocspatientcarecontextlink"></a>

```json
{
  "accessToken": "string",
  "patient": {
    "careContexts": [
      {
        "display": "string",
        "referenceNumber": "string"
      }
    ],
    "display": "string",
    "referenceNumber": "TMH-PUID-001"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string|true|none|AccessToken fetched in the user auth process for the purpose specified|
|patient|object|true|none|none|

<h2 id="tocS_PatientCareContextLinkRequest">PatientCareContextLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatientcarecontextlinkrequest"></a>
<a id="schema_PatientCareContextLinkRequest"></a>
<a id="tocSpatientcarecontextlinkrequest"></a>
<a id="tocspatientcarecontextlinkrequest"></a>

```json
{
  "link": {
    "accessToken": "string",
    "patient": {
      "careContexts": [
        {
          "display": "string",
          "referenceNumber": "string"
        }
      ],
      "display": "string",
      "referenceNumber": "TMH-PUID-001"
    }
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|[PatientCareContextLink](#schemapatientcarecontextlink)|true|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_PatientDemographic">PatientDemographic</h2>
<!-- backwards compatibility -->
<a id="schemapatientdemographic"></a>
<a id="schema_PatientDemographic"></a>
<a id="tocSpatientdemographic"></a>
<a id="tocspatientdemographic"></a>

```json
{
  "dateOfBirth": "1972-02-29",
  "gender": "M",
  "identifier": {
    "type": "MOBILE",
    "value": "+919800083232"
  },
  "name": "janki das"
}
```

Demographic details must be same as registered

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateOfBirth|string|true|none|date of birth in YYYY-MM-DD format.|
|gender|[PatientGender](#schemapatientgender)|true|none|none|
|identifier|[AuthConfirmIdentifier](#schemaauthconfirmidentifier)|false|none|none|
|name|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|M|
|gender|F|
|gender|O|
|gender|U|

<h2 id="tocS_PatientDiscoveryResult">PatientDiscoveryResult</h2>
<!-- backwards compatibility -->
<a id="schemapatientdiscoveryresult"></a>
<a id="schema_PatientDiscoveryResult"></a>
<a id="tocSpatientdiscoveryresult"></a>
<a id="tocspatientdiscoveryresult"></a>

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  },
  "patient": {
    "careContexts": [
      {
        "display": "string",
        "referenceNumber": "string"
      }
    ],
    "display": "string",
    "matchedBy": [
      "MOBILE"
    ],
    "referenceNumber": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z",
  "transactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Error](#schemaerror)|false|none|none|
|patient|[PatientRepresentation](#schemapatientrepresentation)|false|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|resp|[RequestReference](#schemarequestreference)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|
|transactionId|string(uuid)|true|none|none|

<h2 id="tocS_PatientGender">PatientGender</h2>
<!-- backwards compatibility -->
<a id="schemapatientgender"></a>
<a id="schema_PatientGender"></a>
<a id="tocSpatientgender"></a>
<a id="tocspatientgender"></a>

```json
"M"
```

<h2 id="tocS_PatientIdentificationRequest">PatientIdentificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatientidentificationrequest"></a>
<a id="schema_PatientIdentificationRequest"></a>
<a id="tocSpatientidentificationrequest"></a>
<a id="tocspatientidentificationrequest"></a>

```json
{
  "query": {
    "patient": {
      "id": "hinapatel79@ndhm"
    },
    "requester": {
      "id": 100005,
      "type": "HIU"
    }
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query|object|true|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_PatientLinkReferenceResult">PatientLinkReferenceResult</h2>
<!-- backwards compatibility -->
<a id="schemapatientlinkreferenceresult"></a>
<a id="schema_PatientLinkReferenceResult"></a>
<a id="tocSpatientlinkreferenceresult"></a>
<a id="tocspatientlinkreferenceresult"></a>

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  },
  "link": {
    "authenticationType": "DIRECT",
    "meta": {
      "communicationExpiry": "2019-12-30T12:01:55Z",
      "communicationHint": "string",
      "communicationMedium": "MOBILE"
    },
    "referenceNumber": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z",
  "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Error](#schemaerror)|false|none|none|
|link|object|false|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|resp|[RequestReference](#schemarequestreference)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|
|transactionId|[UuidSchema](#schemauuidschema)|true|none|none|

<h2 id="tocS_PatientLinkResult">PatientLinkResult</h2>
<!-- backwards compatibility -->
<a id="schemapatientlinkresult"></a>
<a id="schema_PatientLinkResult"></a>
<a id="tocSpatientlinkresult"></a>
<a id="tocspatientlinkresult"></a>

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  },
  "patient": {
    "careContexts": [
      {
        "display": "string",
        "referenceNumber": "string"
      }
    ],
    "display": "string",
    "referenceNumber": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Error](#schemaerror)|false|none|none|
|patient|object|false|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|resp|[RequestReference](#schemarequestreference)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_PatientRepresentation">PatientRepresentation</h2>
<!-- backwards compatibility -->
<a id="schemapatientrepresentation"></a>
<a id="schema_PatientRepresentation"></a>
<a id="tocSpatientrepresentation"></a>
<a id="tocspatientrepresentation"></a>

```json
{
  "careContexts": [
    {
      "display": "string",
      "referenceNumber": "string"
    }
  ],
  "display": "string",
  "matchedBy": [
    "MOBILE"
  ],
  "referenceNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|careContexts|[[CareContextRepresentation](#schemacarecontextrepresentation)]|true|none|none|
|display|string|true|none|none|
|matchedBy|[[IdentifierType](#schemaidentifiertype)]|false|none|none|
|referenceNumber|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|matchedBy|MOBILE|
|matchedBy|MR|

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "accessMode": "VIEW",
  "dataEraseAt": "1970-01-01T00:00:00Z",
  "dateRange": {
    "from": "1970-01-01T00:00:00Z",
    "to": "1970-01-01T00:00:00Z"
  },
  "frequency": {
    "repeats": 0,
    "unit": "HOUR",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessMode|string|true|none|none|
|dataEraseAt|string(date-time)|true|none|none|
|dateRange|object|true|none|none|
|frequency|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accessMode|VIEW|
|accessMode|STORE|
|accessMode|QUERY|
|accessMode|STREAM|

<h2 id="tocS_RequestReference">RequestReference</h2>
<!-- backwards compatibility -->
<a id="schemarequestreference"></a>
<a id="schema_RequestReference"></a>
<a id="tocSrequestreference"></a>
<a id="tocsrequestreference"></a>

```json
{
  "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string(uuid)|true|none|the requestId that was passed|

<h2 id="tocS_Requester">Requester</h2>
<!-- backwards compatibility -->
<a id="schemarequester"></a>
<a id="schema_Requester"></a>
<a id="tocSrequester"></a>
<a id="tocsrequester"></a>

```json
{
  "identifier": {
    "system": "https://www.mciindia.org",
    "type": "REGNO",
    "value": "MH1001"
  },
  "name": "Dr. Manju"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|object|false|none|none|
|name|string|true|none|none|

<h2 id="tocS_ShareProfileAcknowledgement">ShareProfileAcknowledgement</h2>
<!-- backwards compatibility -->
<a id="schemashareprofileacknowledgement"></a>
<a id="schema_ShareProfileAcknowledgement"></a>
<a id="tocSshareprofileacknowledgement"></a>
<a id="tocsshareprofileacknowledgement"></a>

```json
{
  "healthId": "<username>@<suffix>",
  "status": "SUCCESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthId|string|true|none|none|
|status|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|SUCCESS|
|status|FAILURE|

<h2 id="tocS_ShareProfileResult">ShareProfileResult</h2>
<!-- backwards compatibility -->
<a id="schemashareprofileresult"></a>
<a id="schema_ShareProfileResult"></a>
<a id="tocSshareprofileresult"></a>
<a id="tocsshareprofileresult"></a>

```json
{
  "acknowledgement": {
    "healthId": "<username>@<suffix>",
    "status": "SUCCESS"
  },
  "error": {
    "code": 1000,
    "message": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgement|[ShareProfileAcknowledgement](#schemashareprofileacknowledgement)|true|none|none|
|error|[Error](#schemaerror)|false|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|resp|[RequestReference](#schemarequestreference)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_SubscriptionCategory">SubscriptionCategory</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptioncategory"></a>
<a id="schema_SubscriptionCategory"></a>
<a id="tocSsubscriptioncategory"></a>
<a id="tocssubscriptioncategory"></a>

```json
"LINK"
```

<h2 id="tocS_SubscriptionPeriod">SubscriptionPeriod</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionperiod"></a>
<a id="schema_SubscriptionPeriod"></a>
<a id="tocSsubscriptionperiod"></a>
<a id="tocssubscriptionperiod"></a>

```json
{
  "from": "1970-01-01T00:00:00Z",
  "to": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string(date-time)|true|none|none|
|to|string(date-time)|true|none|none|

<h2 id="tocS_SubscriptionRequest">SubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionrequest"></a>
<a id="schema_SubscriptionRequest"></a>
<a id="tocSsubscriptionrequest"></a>
<a id="tocssubscriptionrequest"></a>

```json
{
  "requestId": "499a5a4a-7dda-4f20-9b67-e24589627061",
  "subscription": {
    "categories": [
      "LINK"
    ],
    "hips": [
      {
        "id": "string"
      }
    ],
    "hiu": {
      "id": "string"
    },
    "patient": {
      "id": "hinapatel79@ndhm"
    },
    "period": {
      "from": "1970-01-01T00:00:00Z",
      "to": "1970-01-01T00:00:00Z"
    },
    "purpose": {
      "code": "string",
      "refUri": "http://example.com",
      "text": "string"
    }
  },
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request.|
|subscription|object|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_TimestampSchema">TimestampSchema</h2>
<!-- backwards compatibility -->
<a id="schematimestampschema"></a>
<a id="schema_TimestampSchema"></a>
<a id="tocStimestampschema"></a>
<a id="tocstimestampschema"></a>

```json
"1970-01-01T00:00:00Z"
```

Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ

<h2 id="tocS_UsePurpose">UsePurpose</h2>
<!-- backwards compatibility -->
<a id="schemausepurpose"></a>
<a id="schema_UsePurpose"></a>
<a id="tocSusepurpose"></a>
<a id="tocsusepurpose"></a>

```json
{
  "code": "string",
  "refUri": "http://example.com",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|From the fixed set, documented at refUri|
|refUri|string(uri)|false|none|none|
|text|string|true|none|none|

<h2 id="tocS_UuidSchema">UuidSchema</h2>
<!-- backwards compatibility -->
<a id="schemauuidschema"></a>
<a id="schema_UuidSchema"></a>
<a id="tocSuuidschema"></a>
<a id="tocsuuidschema"></a>

```json
"a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d"
```

<h2 id="tocS_consent">consent</h2>
<!-- backwards compatibility -->
<a id="schemaconsent"></a>
<a id="schema_consent"></a>
<a id="tocSconsent"></a>
<a id="tocsconsent"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<h2 id="tocS_keyMaterial">keyMaterial</h2>
<!-- backwards compatibility -->
<a id="schemakeymaterial"></a>
<a id="schema_keyMaterial"></a>
<a id="tocSkeymaterial"></a>
<a id="tocskeymaterial"></a>

```json
{
  "cryptoAlg": "ECDH",
  "curve": "Curve25519",
  "dhPublicKey": {
    "expiry": "1970-01-01T00:00:00Z",
    "keyValue": "string",
    "parameters": "Curve25519/32byte random key"
  },
  "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cryptoAlg|string(string)|true|none|none|
|curve|string(string)|true|none|none|
|dhPublicKey|[KeyObject](#schemakeyobject)|true|none|none|
|nonce|string(32 byte string)|true|none|none|
