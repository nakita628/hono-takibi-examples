<h1 id="health-repository-provider-specifications-for-hip">Health Repository Provider Specifications for HIP v0.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The following are the specifications for the APIs to be implemented at the Health Repository end if an entity is only serving the role of a HIP. The specs are essentially duplicates from the Gateway and Health Repository, but put together so as to make it clear to *HIPs* which set of APIs they should implement to participate in the network.

Base URLs:

* <a href="https://dev.ndhm.gov.in/gateway">https://dev.ndhm.gov.in/gateway</a> - Sandbox

Web: <a href="https://ndhm.gov.in/">National Health Authority</a> 

<h1 id="health-repository-provider-specifications-for-hip-user-auth">user auth</h1>

## notification API in case of DIRECT mode of authentication by the CM

> Code samples

```bash
curl https://example.com/v0.5/users/auth/notify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-HIP-ID: string' \
  -H 'X-HIU-ID: string' \
  -d '{
    "auth": {
      "accessToken": "string",
      "patient": {
        "address": {
          "district": "string",
          "line": "string",
          "pincode": "string",
          "state": "string"
        },
        "gender": "M",
        "id": "<patient-id>@<consent-manager-id>",
        "identifiers": [
          {
            "type": "MOBILE",
            "value": "+919800083232"
          }
        ],
        "name": "Hina Patel",
        "yearOfBirth": 2000
      },
      "status": "GRANTED",
      "transactionId": "string",
      "validity": {
        "expiry": "1970-01-01T00:00:00Z",
        "limit": "1",
        "purpose": "LINK",
        "requester": {
          "id": 100005,
          "type": "HIP"
        }
      }
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/users/auth/notify`

This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
  3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.


> Body parameter

```json
{
  "auth": {
    "accessToken": "string",
    "patient": {
      "address": {
        "district": "string",
        "line": "string",
        "pincode": "string",
        "state": "string"
      },
      "gender": "M",
      "id": "<patient-id>@<consent-manager-id>",
      "identifiers": [
        {
          "type": "MOBILE",
          "value": "+919800083232"
        }
      ],
      "name": "Hina Patel",
      "yearOfBirth": 2000
    },
    "status": "GRANTED",
    "transactionId": "string",
    "validity": {
      "expiry": "1970-01-01T00:00:00Z",
      "limit": "1",
      "purpose": "LINK",
      "requester": {
        "id": 100005,
        "type": "HIP"
      }
    }
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="notification-api-in-case-of-direct-mode-of-authentication-by-the-cm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-HIP-ID|header|string|true|Identifier of the health information provider to which the request was intended.|
|X-HIU-ID|header|string|true|Identifier of the health information user to which the request was intended.|
|body|body|[PatientAuthNotification](#schemapatientauthnotification)|true|none|
|» auth|body|object|false|depending on the purpose of auth, as specified in /auth/init, the response may include the following <br>  1. LINK - only returns **accessToken**<br>  2. KYC - only returns **patient**<br>  3. KYC_AND_LINK - returns both **accessToken** and **patient**<br>|
|» » accessToken|body|string|false|access token for initialization of subsequent action.|
|» » patient|body|[PatientDemographicResponse](#schemapatientdemographicresponse)|false|none|
|» » status|body|string|true|none|
|» » transactionId|body|string|true|transaction id for auth session|
|» » validity|body|[AccessTokenValidity](#schemaaccesstokenvalidity)|false|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » status|GRANTED|
|» » status|DENIED|

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

<h3 id="notification-api-in-case-of-direct-mode-of-authentication-by-the-cm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted|None|
|400|Bad Request|**Causes:**<br>  * required details not provided<br>  * neither auth nor error specified <br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not

> Code samples

```bash
curl https://example.com/v0.5/users/auth/on-confirm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-HIP-ID: string' \
  -H 'X-HIU-ID: string' \
  -d '{
    "auth": {
      "accessToken": "string",
      "patient": {
        "address": {
          "district": "string",
          "line": "string",
          "pincode": "string",
          "state": "string"
        },
        "gender": "M",
        "id": "<patient-id>@<consent-manager-id>",
        "identifiers": [
          {
            "type": "MOBILE",
            "value": "+919800083232"
          }
        ],
        "name": "Hina Patel",
        "yearOfBirth": 2000
      },
      "validity": {
        "expiry": "1970-01-01T00:00:00Z",
        "limit": "1",
        "purpose": "LINK",
        "requester": {
          "id": 100005,
          "type": "HIP"
        }
      }
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

`POST /v0.5/users/auth/on-confirm`

This API is called by CM to confirm authentication of users.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.     


> Body parameter

```json
{
  "auth": {
    "accessToken": "string",
    "patient": {
      "address": {
        "district": "string",
        "line": "string",
        "pincode": "string",
        "state": "string"
      },
      "gender": "M",
      "id": "<patient-id>@<consent-manager-id>",
      "identifiers": [
        {
          "type": "MOBILE",
          "value": "+919800083232"
        }
      ],
      "name": "Hina Patel",
      "yearOfBirth": 2000
    },
    "validity": {
      "expiry": "1970-01-01T00:00:00Z",
      "limit": "1",
      "purpose": "LINK",
      "requester": {
        "id": 100005,
        "type": "HIP"
      }
    }
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

<h3 id="callback-api-for-authconfirm-in-case-of-mediated-auth-to-confirm-user-authentication-or-not-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-HIP-ID|header|string|true|Identifier of the health information provider to which the request was intended.|
|X-HIU-ID|header|string|true|Identifier of the health information user to which the request was intended.|
|body|body|[PatientAuthConfirmResponse](#schemapatientauthconfirmresponse)|true|none|
|» auth|body|object|false|depending on the purpose of auth, as specified in /auth/init, the response may include the following <br>  1. LINK - only returns **accessToken**<br>  2. KYC - only returns **patient**<br>  3. KYC_AND_LINK - returns both **accessToken** and **patient**<br>|
|» » accessToken|body|string|false|access token for initialization of subsequent action.|
|» » patient|body|[PatientDemographicResponse](#schemapatientdemographicresponse)|false|none|
|» » validity|body|[AccessTokenValidity](#schemaaccesstokenvalidity)|false|none|
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

<h3 id="callback-api-for-authconfirm-in-case-of-mediated-auth-to-confirm-user-authentication-or-not-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted|None|
|400|Bad Request|**Causes:**<br>  * transaction id is not provided or invalid<br>  * token or other auth confirmation details not provided or invalid<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Identification result for a consent-manager user-id

> Code samples

```bash
curl https://example.com/v0.5/users/auth/on-fetch-modes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-HIP-ID: string' \
  -H 'X-HIU-ID: string' \
  -d '{
    "auth": {
      "modes": [
        "MOBILE_OTP"
      ],
      "purpose": "LINK"
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

`POST /v0.5/users/auth/on-fetch-modes`

If a patient is found then **auth** attribute contains the supported modes for the specified purpose. 
Otherwise, error is raised for invalid requests or for non-existent id.
Note in addition to the "Authorization" header, one of the following headers must be specified
1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)


> Body parameter

```json
{
  "auth": {
    "modes": [
      "MOBILE_OTP"
    ],
    "purpose": "LINK"
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

<h3 id="identification-result-for-a-consent-manager-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-HIP-ID|header|string|true|Identifier of the health information provider to which the request was intended.|
|X-HIU-ID|header|string|true|Identifier of the health information user to which the request was intended.|
|body|body|[PatientAuthModeQueryResponse](#schemapatientauthmodequeryresponse)|true|none|
|» auth|body|object|false|none|
|» » modes|body|[[AuthenticationMode](#schemaauthenticationmode)]|true|none|
|» » purpose|body|[PatientAuthPurpose](#schemapatientauthpurpose)|true|what is the purpose of user auth|
|» error|body|[Error](#schemaerror)|false|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» resp|body|[RequestReference](#schemarequestreference)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » modes|MOBILE_OTP|
|» » modes|DIRECT|
|» » modes|DEMOGRAPHICS|
|» » modes|AADHAAR_OTP|
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

<h3 id="identification-result-for-a-consent-manager-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted|None|
|400|Bad Request|Invalid request, required attributes not provided<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Response to user authentication initialization from HIP

> Code samples

```bash
curl https://example.com/v0.5/users/auth/on-init \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-HIP-ID: string' \
  -H 'X-HIU-ID: string' \
  -d '{
    "auth": {
      "meta": {
        "expiry": "2019-12-30T12:01:55Z",
        "hint": "string"
      },
      "mode": "MOBILE_OTP",
      "transactionId": "string"
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

`POST /v0.5/users/auth/on-init`

If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API. 

  1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values 
      1. MOBILE_OTP - auth via OTP to registered mobile. Mediated. 
      2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated. 
      3. DEMOGRAPHICS - auth initiated with demographic verification
      4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
  2. **meta.expiry** conveys the expiry time of the token and the authentication session
  3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both. 




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. Patient id is invalid


> Body parameter

```json
{
  "auth": {
    "meta": {
      "expiry": "2019-12-30T12:01:55Z",
      "hint": "string"
    },
    "mode": "MOBILE_OTP",
    "transactionId": "string"
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

<h3 id="response-to-user-authentication-initialization-from-hip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-HIP-ID|header|string|true|Identifier of the health information provider to which the request was intended.|
|X-HIU-ID|header|string|true|Identifier of the health information user to which the request was intended.|
|body|body|[PatientAuthInitResponse](#schemapatientauthinitresponse)|true|none|
|» auth|body|object|false|none|
|» » meta|body|[AuthMeta](#schemaauthmeta)|false|none|
|» » mode|body|[AuthenticationMode](#schemaauthenticationmode)|true|Subjected to CM specific capability<br> 1. MOBILE_OTP - for SMS OTP<br> 2. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS<br> 3. AADHAAR_OTP - for auth using OTP sent to Aadhaar number<br> 4. DEMOGRAPHICS - for auth using demographic verification.<br>|
|» » transactionId|body|string|true|none|
|» error|body|[Error](#schemaerror)|false|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» resp|body|[RequestReference](#schemarequestreference)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » mode|MOBILE_OTP|
|» » mode|DIRECT|
|» » mode|DEMOGRAPHICS|
|» » mode|AADHAAR_OTP|

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

<h3 id="response-to-user-authentication-initialization-from-hip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted|None|
|400|Bad Request|**Causes:**<br>  * required information not provided<br>  * neither authInit nor error specified <br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-repository-provider-specifications-for-hip-profile">profile</h1>

## Share patient profile details

> Code samples

```bash
curl https://example.com/v0.5/patients/profile/share \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-HIP-ID: string' \
  -d '{
    "patient": {
      "hipCode": "12345 (CounterId)",
      "userDemographics": {
        "address": {
          "district": "string",
          "line": "string",
          "pincode": "string",
          "state": "string"
        },
        "dayOfBirth": 0,
        "gender": "M",
        "healthId": "<username>@<suffix>",
        "healthIdNumber": "1111-1111-1111-11",
        "identifiers": [
          {
            "type": "MOBILE",
            "value": "+919800083232"
          }
        ],
        "monthOfBirth": 0,
        "name": "Jane Doe",
        "yearOfBirth": 2000
      }
    },
    "requestId": "499a5a4a-7dda-4f20-9b67-e24589627061",
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/patients/profile/share`

Request for sharing patient's profile details to HIP


> Body parameter

```json
{
  "patient": {
    "hipCode": "12345 (CounterId)",
    "userDemographics": {
      "address": {
        "district": "string",
        "line": "string",
        "pincode": "string",
        "state": "string"
      },
      "dayOfBirth": 0,
      "gender": "M",
      "healthId": "<username>@<suffix>",
      "healthIdNumber": "1111-1111-1111-11",
      "identifiers": [
        {
          "type": "MOBILE",
          "value": "+919800083232"
        }
      ],
      "monthOfBirth": 0,
      "name": "Jane Doe",
      "yearOfBirth": 2000
    }
  },
  "requestId": "499a5a4a-7dda-4f20-9b67-e24589627061",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="share-patient-profile-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-HIP-ID|header|string|true|Identifier of the health information provider to which the request was intended.|
|body|body|[ShareProfileRequest](#schemashareprofilerequest)|true|none|
|» patient|body|object|true|none|
|» » hipCode|body|string|false|additional details about HIP retrieved after scanning QR.|
|» » userDemographics|body|object|true|none|
|» » » address|body|[PatientAddress](#schemapatientaddress)|false|none|
|» » » dayOfBirth|body|integer|false|none|
|» » » gender|body|[PatientGender](#schemapatientgender)|true|none|
|» » » healthId|body|string|true|none|
|» » » healthIdNumber|body|string|true|none|
|» » » identifiers|body|[[Identifier](#schemaidentifier)]|false|none|
|» » » monthOfBirth|body|integer|false|none|
|» » » name|body|string|true|none|
|» » » yearOfBirth|body|integer|true|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request.|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » gender|M|
|» » » gender|F|
|» » » gender|O|
|» » » gender|U|

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

<h3 id="share-patient-profile-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted|None|
|400|Bad Request|**Causes:**<br>  * Invalid Request<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-repository-provider-specifications-for-hip-discovery">discovery</h1>

## Discover patient's accounts

> Code samples

```bash
curl https://example.com/v0.5/care-contexts/discover \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-HIP-ID: string' \
  -d '{
    "patient": {
      "gender": "M",
      "id": "<patient-id>@<consent-manager-id>",
      "name": "chandler bing",
      "unverifiedIdentifiers": [
        {
          "type": "MOBILE",
          "value": "+919800083232"
        }
      ],
      "verifiedIdentifiers": [
        {
          "type": "MOBILE",
          "value": "+919800083232"
        }
      ],
      "yearOfBirth": 2000
    },
    "requestId": "499a5a4a-7dda-4f20-9b67-e24589627061",
    "timestamp": "1970-01-01T00:00:00Z",
    "transactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v0.5/care-contexts/discover`

Request for patient care context discover, made by Gateway intended for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
  1. **At least one of the verified identifier matches**
  2. **Name (fuzzy), gender matches**
  3. **If YoB was given, age band(+-2) matches**
  4. **If unverified identifiers were given, one of them matches**
  5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
  6. **If there would be still more than one patients (after ranking) error would be returned**
  7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
  8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**


> Body parameter

```json
{
  "patient": {
    "gender": "M",
    "id": "<patient-id>@<consent-manager-id>",
    "name": "chandler bing",
    "unverifiedIdentifiers": [
      {
        "type": "MOBILE",
        "value": "+919800083232"
      }
    ],
    "verifiedIdentifiers": [
      {
        "type": "MOBILE",
        "value": "+919800083232"
      }
    ],
    "yearOfBirth": 2000
  },
  "requestId": "499a5a4a-7dda-4f20-9b67-e24589627061",
  "timestamp": "1970-01-01T00:00:00Z",
  "transactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="discover-patients-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-HIP-ID|header|string|true|Identifier of the health information provider to which the request was intended.|
|body|body|[PatientDiscoveryRequest](#schemapatientdiscoveryrequest)|true|none|
|» patient|body|object|true|none|
|» » gender|body|string|true|none|
|» » id|body|string|true|Identifier of patient at consent manager|
|» » name|body|string|true|none|
|» » unverifiedIdentifiers|body|[[Identifier](#schemaidentifier)]|false|none|
|» » verifiedIdentifiers|body|[[Identifier](#schemaidentifier)]|true|none|
|» » yearOfBirth|body|integer|true|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request.|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|
|» transactionId|body|string(uuid)|true|correlation-Id for patient discovery and subsequent care context linkage|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » gender|M|
|» » gender|F|
|» » gender|O|
|» » gender|U|

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

<h3 id="discover-patients-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted|None|
|400|Bad Request|**Causes:**<br>  * Empty verified identifiers.<br>  * Format mismatch of any of attributes.<br>    \| type   \| Format/Allowed Values\|<br>    \| ------- \| ----------------    \|<br>    \| gender  \| M/F/O/U \|<br>    \| MOBILE  \| valid mobile number with proper country code \|<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-repository-provider-specifications-for-hip-link">link</h1>

## Token submission by Consent Manager for link confirmation

> Code samples

```bash
curl https://example.com/v0.5/links/link/confirm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-HIP-ID: string' \
  -d '{
    "confirmation": {
      "linkRefNumber": "string",
      "token": "string"
    },
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/links/link/confirm`

API to submit the token that was sent by HIP during the link request. 


> Body parameter

```json
{
  "confirmation": {
    "linkRefNumber": "string",
    "token": "string"
  },
  "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="token-submission-by-consent-manager-for-link-confirmation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-HIP-ID|header|string|true|Identifier of the health information provider to which the request was intended.|
|body|body|[LinkConfirmationRequest](#schemalinkconfirmationrequest)|true|none|
|» confirmation|body|object|true|none|
|» » linkRefNumber|body|string|true|none|
|» » token|body|string|true|none|
|» requestId|body|string(uuid)|true|none|
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

<h3 id="token-submission-by-consent-manager-for-link-confirmation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|accepted|None|
|400|Bad Request|**Causes:**<br>  * Token is not provided<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Link patient's care contexts

> Code samples

```bash
curl https://example.com/v0.5/links/link/init \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-HIP-ID: string' \
  -d '{
    "patient": {
      "careContexts": [
        {
          "referenceNumber": "string"
        }
      ],
      "id": "hinapatel79@ndhm",
      "referenceNumber": "TMH-PUID-001"
    },
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "timestamp": "1970-01-01T00:00:00Z",
    "transactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v0.5/links/link/init`

Request from Gateway to links care contexts associated with only one patient
  1. **Validate account reference number and care context reference number**
  2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
      and were these care contexts discovered or not for a given patient**
  3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
  4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**


> Body parameter

```json
{
  "patient": {
    "careContexts": [
      {
        "referenceNumber": "string"
      }
    ],
    "id": "hinapatel79@ndhm",
    "referenceNumber": "TMH-PUID-001"
  },
  "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "timestamp": "1970-01-01T00:00:00Z",
  "transactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="link-patients-care-contexts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-HIP-ID|header|string|true|Identifier of the health information provider to which the request was intended.|
|body|body|[PatientLinkReferenceRequest](#schemapatientlinkreferencerequest)|true|none|
|» patient|body|object|true|none|
|» » careContexts|body|[[CareContext](#schemacarecontext)]|true|none|
|» » id|body|string|true|none|
|» » referenceNumber|body|string|true|none|
|» requestId|body|string(uuid)|true|none|
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

<h3 id="link-patients-care-contexts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted|None|
|400|Bad Request|**Causes:**<br>  * Consent manager user id is not provided<br>  * Patient reference number is not provided<br>  * Care context references are not provided<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## callback API for HIP initiated patient linking /link/add-context

> Code samples

```bash
curl https://example.com/v0.5/links/link/on-add-contexts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-HIP-ID: string' \
  -d '{
    "acknowledgement": {
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

`POST /v0.5/links/link/on-add-contexts`

If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so. 
  1. **accessToken must be valid and must be for the purpose of linking**


> Body parameter

```json
{
  "acknowledgement": {
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

<h3 id="callback-api-for-hip-initiated-patient-linking-linkadd-context-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-HIP-ID|header|string|true|Identifier of the health information provider to which the request was intended.|
|body|body|[PatientCareContextLinkResponse](#schemapatientcarecontextlinkresponse)|true|none|
|» acknowledgement|body|object|false|none|
|» » status|body|string|true|none|
|» error|body|[Error](#schemaerror)|false|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» resp|body|[RequestReference](#schemarequestreference)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » status|SUCCESS|

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

<h3 id="callback-api-for-hip-initiated-patient-linking-linkadd-context-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|accepted|None|
|400|Bad Request|**Causes:**<br>  * resp not specified<br>  * atleast acknowledgement or error should be specified<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-repository-provider-specifications-for-hip-consent-flow">consent flow</h1>

## Consent notification

> Code samples

```bash
curl https://example.com/v0.5/consents/hip/notify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-HIP-ID: string' \
  -d '{
    "notification": {
      "consentDetail": {
        "careContexts": [
          {
            "careContextReference": "Episode1",
            "patientReference": "hinapatel79@hospital"
          }
        ],
        "consentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "consentManager": {
          "id": "string"
        },
        "createdAt": "1970-01-01T00:00:00Z",
        "hiTypes": [
          "OPConsultation"
        ],
        "hip": {
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
        "schemaVersion": "string"
      },
      "consentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "signature": "Signature of CM as defined in W3C standards; Base64 encoded",
      "status": "GRANTED"
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/consents/hip/notify`

Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED and REVOKED status notifications will be sent to HIP.
  1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
  2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 


> Body parameter

```json
{
  "notification": {
    "consentDetail": {
      "careContexts": [
        {
          "careContextReference": "Episode1",
          "patientReference": "hinapatel79@hospital"
        }
      ],
      "consentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "consentManager": {
        "id": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "hiTypes": [
        "OPConsultation"
      ],
      "hip": {
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
      "schemaVersion": "string"
    },
    "consentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "signature": "Signature of CM as defined in W3C standards; Base64 encoded",
    "status": "GRANTED"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="consent-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-HIP-ID|header|string|true|Identifier of the health information provider to which the request was intended.|
|body|body|[HIPConsentNotification](#schemahipconsentnotification)|true|none|
|» notification|body|object|true|none|
|» » consentDetail|body|object|true|none|
|» » » careContexts|body|[object]|true|none|
|» » » » careContextReference|body|string|true|none|
|» » » » patientReference|body|string|true|none|
|» » » consentId|body|string(uuid)|true|none|
|» » » consentManager|body|object|true|none|
|» » » » id|body|string|true|none|
|» » » createdAt|body|string(date-time)|true|none|
|» » » hiTypes|body|[[HITypeEnum](#schemahitypeenum)]|true|none|
|» » » hip|body|object|true|none|
|» » » » id|body|string|true|none|
|» » » patient|body|[ConsentManagerPatientID](#schemaconsentmanagerpatientid)|true|none|
|» » » permission|body|[Permission](#schemapermission)|true|none|
|» » » purpose|body|[UsePurpose](#schemausepurpose)|true|none|
|» » » schemaVersion|body|string(string)|false|none|
|» » consentId|body|string(uuid)|true|none|
|» » signature|body|string|true|none|
|» » status|body|[ConsentStatus](#schemaconsentstatus)|true|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » hiTypes|OPConsultation|
|» » » hiTypes|Prescription|
|» » » hiTypes|DischargeSummary|
|» » » hiTypes|DiagnosticReport|
|» » status|GRANTED|
|» » status|EXPIRED|
|» » status|DENIED|
|» » status|REQUESTED|
|» » status|REVOKED|

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

<h1 id="health-repository-provider-specifications-for-hip-data-flow">data flow</h1>

## Health information data request

> Code samples

```bash
curl https://example.com/v0.5/health-information/hip/request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-HIP-ID: string' \
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
    "timestamp": "1970-01-01T00:00:00Z",
    "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d"
  }'
```

`POST /v0.5/health-information/hip/request`

API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**. 


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
  "timestamp": "1970-01-01T00:00:00Z",
  "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d"
}
```

<h3 id="health-information-data-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-HIP-ID|header|string|true|Identifier of the health information provider to which the request was intended.|
|body|body|[HIPHealthInformationRequest](#schemahiphealthinformationrequest)|true|none|
|» hiRequest|body|object|true|none|
|» » consent|body|[consent](#schemaconsent)|true|none|
|» » dataPushUrl|body|string|true|none|
|» » dateRange|body|[DateRange](#schemadaterange)|true|none|
|» » keyMaterial|body|[KeyMaterial](#schemakeymaterial)|true|none|
|» requestId|body|[UuidSchema](#schemauuidschema)|true|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|
|» transactionId|body|[UuidSchema](#schemauuidschema)|true|none|

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

<h3 id="health-information-data-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted.|None|
|400|Bad Request|**Causes:**<br>  * Bad request<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Token is invalid or Link has expired<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-repository-provider-specifications-for-hip-data-transfer">data transfer</h1>

## health information transfer API

> Code samples

```bash
curl https://example.com/v0.5/health-information/transfer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "entries": [
      {
        "careContextReference": "RVH1008",
        "checksum": "string",
        "content": "Encrypted content of data packaged in FHIR bundle",
        "media": "application/fhir+json"
      }
    ],
    "keyMaterial": {
      "cryptoAlg": "ECDH",
      "curve": "Curve25519",
      "dhPublicKey": {
        "expiry": "1970-01-01T00:00:00Z",
        "keyValue": "string",
        "parameters": "Curve25519/32byte random key"
      },
      "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    },
    "pageCount": 0,
    "pageNumber": 0,
    "transactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  }'
```

`POST /v0.5/health-information/transfer`

**NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway. 
  1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU. 
  2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred. 
  3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request. 
  4. Media contains the mimetype of content, and for v1, it is "application/fhir+json"
  5. checksum is Md5 checksum of the data conent, before encryption
  6. Please refer to the NDHM Sandbox Documentation for the format of FHIR bundle that is passed through content 


> Body parameter

```json
{
  "entries": [
    {
      "careContextReference": "RVH1008",
      "checksum": "string",
      "content": "Encrypted content of data packaged in FHIR bundle",
      "media": "application/fhir+json"
    }
  ],
  "keyMaterial": {
    "cryptoAlg": "ECDH",
    "curve": "Curve25519",
    "dhPublicKey": {
      "expiry": "1970-01-01T00:00:00Z",
      "keyValue": "string",
      "parameters": "Curve25519/32byte random key"
    },
    "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "pageCount": 0,
  "pageNumber": 0,
  "transactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="health-information-transfer-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|body|body|[DataNotification](#schemadatanotification)|true|none|
|» entries|body|[[EntryContent](#schemaentrycontent) \| [EntryLink](#schemaentrylink)]|true|none|
|» » *anyOf*|body|[EntryContent](#schemaentrycontent)|false|none|
|» » *anyOf*|body|[EntryLink](#schemaentrylink)|false|none|
|» keyMaterial|body|[KeyMaterial](#schemakeymaterial)|true|none|
|» pageCount|body|integer|true|Total number of pages.|
|» pageNumber|body|integer|true|Current page number.|
|» transactionId|body|string(uuid)|true|Transaction Id issued when data requested.|

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

<h3 id="health-information-transfer-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Data accepted.|None|
|401|Unauthorized|**Causes:**<br>  * Invalid/Expired/Empty token.<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream services are down<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-repository-provider-specifications-for-hip-monitoring">monitoring</h1>

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

<h3 id="get-consent-request-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HeartbeatResponse](#schemaheartbeatresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-repository-provider-specifications-for-hip-gateway">Gateway</h1>

## Get openid configuration

> Code samples

```bash
curl https://example.com/v0.5/.well-known/openid-configuration \
  -H 'Accept: application/json'
```

`GET /v0.5/.well-known/openid-configuration`

> Example responses

> 200 Response

```json
{
  "jwks_uri": "https://ncg-gateway/certs"
}
```

> 404 Response

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

<h3 id="get-openid-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OpenIdConfiguration](#schemaopenidconfiguration)|
|404|Not Found|**Causes:**<br>  * Invalid consent request id<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Response to patient's account discovery request

> Code samples

```bash
curl https://example.com/v0.5/care-contexts/on-discover \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CM-ID: string' \
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
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-CM-ID|header|string|true|Suffix of the consent manager to which the request was intended.|
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

## Get certs for JWT verification

> Code samples

```bash
curl https://example.com/v0.5/certs \
  -H 'Accept: application/json'
```

`GET /v0.5/certs`

> Example responses

> 200 Response

```json
{
  "keys": [
    {
      "alg": "string",
      "e": "string",
      "kid": "string",
      "kty": "string",
      "n": "string",
      "use": "string",
      "x5c": [
        "string"
      ],
      "x5t": "string",
      "x5t#S256": "string"
    }
  ]
}
```

> 404 Response

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

<h3 id="get-certs-for-jwt-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Certs](#schemacerts)|
|404|Not Found|**Causes:**<br>  * Invalid consent request id<br>|[ErrorResponse](#schemaerrorresponse)|
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
  -H 'X-CM-ID: string' \
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

This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration. 


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

<h3 id="consent-notification-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-CM-ID|header|string|true|Suffix of the consent manager to which the request was intended.|
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

<h3 id="consent-notification-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted|None|
|401|Unauthorized|**Causes:**<br>  * Invalid/Expired/Empty token.<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream services are down<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Health information data request

> Code samples

```bash
curl https://example.com/v0.5/health-information/hip/on-request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CM-ID: string' \
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

`POST /v0.5/health-information/hip/on-request`

API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.  


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

<h3 id="health-information-data-request-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-CM-ID|header|string|true|Suffix of the consent manager to which the request was intended.|
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

<h3 id="health-information-data-request-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted.|None|
|400|Bad Request|**Causes:**<br>  * Bad request<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Token is invalid or Link has expired<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Notifications corresponding to events during data flow

> Code samples

```bash
curl https://example.com/v0.5/health-information/notify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CM-ID: string' \
  -d '{
    "notification": {
      "consentId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
      "doneAt": "1970-01-01T00:00:00Z",
      "notifier": {
        "id": "tmh",
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
      "id": "tmh",
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
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-CM-ID|header|string|true|Suffix of the consent manager to which the request was intended.|
|body|body|[HealthInformationNotification](#schemahealthinformationnotification)|true|none|
|» notification|body|object|true|none|
|» » consentId|body|[UuidSchema](#schemauuidschema)|true|none|
|» » doneAt|body|string(date-time)|true|none|
|» » notifier|body|object|true|none|
|» » » id|body|string|false|none|
|» » » type|body|string|false|none|
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

## API for HIP initiated care-context linking for patient

> Code samples

```bash
curl https://example.com/v0.5/links/link/add-contexts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CM-ID: string' \
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
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-CM-ID|header|string|true|Suffix of the consent manager to which the request was intended.|
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
  -H 'X-CM-ID: string' \
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
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-CM-ID|header|string|true|Suffix of the consent manager to which the request was intended.|
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
  -H 'X-CM-ID: string' \
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
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-CM-ID|header|string|true|Suffix of the consent manager to which the request was intended.|
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

## Response to patient's share profile request

> Code samples

```bash
curl https://example.com/v0.5/patients/profile/on-share \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CM-ID: string' \
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
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-CM-ID|header|string|true|Suffix of the consent manager to which the request was intended.|
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

## API for HIP to send SMS notifications to patients

> Code samples

```bash
curl https://example.com/v0.5/patients/sms/notify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CM-ID: string' \
  -d '{
    "notification": {
      "careContextInfo": "X-Ray on 22nd Dec",
      "deeplinkUrl": "https://link.to.health.records/ (Optional)",
      "hip": {
        "id": "HIP_001",
        "name": "Max Healthcare (Optional)"
      },
      "phoneNo": "+91-9999999999",
      "receiverName": "Ramesh Singh (Optional)"
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/patients/sms/notify`

API to send SMS notifications to patient with custom deeplink.


> Body parameter

```json
{
  "notification": {
    "careContextInfo": "X-Ray on 22nd Dec",
    "deeplinkUrl": "https://link.to.health.records/ (Optional)",
    "hip": {
      "id": "HIP_001",
      "name": "Max Healthcare (Optional)"
    },
    "phoneNo": "+91-9999999999",
    "receiverName": "Ramesh Singh (Optional)"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="api-for-hip-to-send-sms-notifications-to-patients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-CM-ID|header|string|true|Suffix of the consent manager to which the request was intended.|
|body|body|[PatientSMSNotifcationRequest](#schemapatientsmsnotifcationrequest)|true|none|
|» notification|body|object|true|none|
|» » careContextInfo|body|string|true|Information about care context or visit for which the SMS is being sent.|
|» » deeplinkUrl|body|string(uri)|false|A link pointing to digital health records of the patient. PHR App's deeplink will be sent in SMS if this field is not provided.|
|» » hip|body|object|true|none|
|» » » id|body|string|true|Registered id of the HIP.|
|» » » name|body|string|false|Name of the HIP(Hospital). Hospital's name will be fetched from registry if not provided.|
|» » phoneNo|body|string|true|Phone number of the receiver with country code|
|» » receiverName|body|string|false|Name of the reciever/patient. Receiver's name will not be sent if not provided.|
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

<h3 id="api-for-hip-to-send-sms-notifications-to-patients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|accepted|None|
|400|Bad Request|**Causes:**<br>  * required information not provided<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get access token

> Code samples

```bash
curl https://example.com/v0.5/sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "clientId": "string",
    "clientSecret": "string"
  }'
```

`POST /v0.5/sessions`

> Body parameter

```json
{
  "clientId": "string",
  "clientSecret": "string"
}
```

<h3 id="get-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SessionRequest](#schemasessionrequest)|true|none|
|» clientId|body|string|true|none|
|» clientSecret|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "accessToken": "eyJhbGciOiJSUzI1Ni.IsInR5cCIgOiAiSldUIiwia2lkIiA6ICJrVVp.2MXJQMjRyYXN1UW9wU2lWbkdZQUZIVFowYVZGVWpYNXFLMnNibTk0In0",
  "expiresIn": 1800,
  "refreshExpiresIn": 1800,
  "refreshToken": "eyJhbGciOiJSUzI1Ni.IsInR5cCIgOiAiSldUIiwia2lkIiA6ICJrVVp.2MXJQMjRyYXN1UW9wU2lWbkdZQUZIVFowYVZGVWpYNXFLMnNibTk0In0",
  "tokenType": "bearer"
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

> 404 Response

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

<h3 id="get-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SessionResponse](#schemasessionresponse)|
|401|Unauthorized|**Causes:**<br>  * Invalid client Id or secret.<br>|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|**Causes:**<br>  * Invalid consent request id<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation

> Code samples

```bash
curl https://example.com/v0.5/users/auth/confirm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CM-ID: string' \
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
        "name": "Janki Das"
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
      "name": "Janki Das"
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
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-CM-ID|header|string|true|Suffix of the consent manager to which the request was intended.|
|body|body|[PatientAuthConfirmRequest](#schemapatientauthconfirmrequest)|true|none|
|» credential|body|object|true|note, demographic details are only required for demographic auth at this point.|
|» » authCode|body|string|false|none|
|» » demographic|body|[PatientDemographic](#schemapatientdemographic)|false|demographic details are only required for demographic auth at this point, in which case identifier.Type must be AADHAAR.|
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
  -H 'X-CM-ID: string' \
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
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-CM-ID|header|string|true|Suffix of the consent manager to which the request was intended.|
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
  -H 'X-CM-ID: string' \
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
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-CM-ID|header|string|true|Suffix of the consent manager to which the request was intended.|
|body|body|[PatientAuthInitRequest](#schemapatientauthinitrequest)|true|none|
|» query|body|object|true|none|
|» » authMode|body|[AuthenticationMode](#schemaauthenticationmode)|false|Subjected to CM specific capability<br> 1. MOBILE_OTP - for SMS OTP<br> 2. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS<br> 3. AADHAAR_OTP - for auth using OTP sent to Aadhaar number<br> 4. DEMOGRAPHICS - for auth using demographic verification.<br>|
|» » id|body|string|true|id  of the patient understood by the CM|
|» » purpose|body|[PatientAuthPurpose](#schemapatientauthpurpose)|true|what is the purpose of user auth|
|» » requester|body|object|true|identification of requester|
|» » » id|body|string|true|none|
|» » » type|body|string|true|none|
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

## callback API by HIU/HIPs as acknowledgement of auth notification

> Code samples

```bash
curl https://example.com/v0.5/users/auth/on-notify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CM-ID: string' \
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

<h3 id="callback-api-by-hiuhips-as-acknowledgement-of-auth-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-CM-ID|header|string|true|Suffix of the consent manager to which the request was intended.|
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

<h3 id="callback-api-by-hiuhips-as-acknowledgement-of-auth-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request accepted|None|
|400|Bad Request|**Causes:**<br>  * required details not provided<br>  * neither auth nor error specified <br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="health-repository-provider-specifications-for-hip-patient-notification">patient notification</h1>

## Acknowledgment response for SMS notification sent to patient by HIP

> Code samples

```bash
curl https://example.com/v0.5/patients/sms/on-notify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-HIP-ID: string' \
  -d '{
    "error": {
      "code": 1000,
      "message": "string"
    },
    "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
    "resp": {
      "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "status": "ACKNOWLEDGED",
    "timestamp": "1970-01-01T00:00:00Z"
  }'
```

`POST /v0.5/patients/sms/on-notify`

If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
If the SMS notification is failed then "status" will be "ERRORED" with error.


> Body parameter

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "status": "ACKNOWLEDGED",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

<h3 id="acknowledgment-response-for-sms-notification-sent-to-patient-by-hip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.|
|X-HIP-ID|header|string|true|Identifier of the health information provider to which the request was intended.|
|body|body|[PatientSMSNotifcationResponse](#schemapatientsmsnotifcationresponse)|true|none|
|» error|body|[Error](#schemaerror)|false|none|
|» requestId|body|string(uuid)|true|a nonce, unique for each HTTP request|
|» resp|body|[RequestReference](#schemarequestreference)|true|none|
|» status|body|string|false|none|
|» timestamp|body|[TimestampSchema](#schematimestampschema)|true|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|ACKNOWLEDGED|
|» status|ERRORED|

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

<h3 id="acknowledgment-response-for-sms-notification-sent-to-patient-by-hip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted|None|
|400|Bad Request|Invalid request, required attributes not provided<br>|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|**Causes:**<br>  * Unauthorized request<br>|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|**Causes:**<br>  * Downstream system(s) is down.<br>  * Unhandled exceptions.<br>|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AccessTokenValidity">AccessTokenValidity</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstokenvalidity"></a>
<a id="schema_AccessTokenValidity"></a>
<a id="tocSaccesstokenvalidity"></a>
<a id="tocsaccesstokenvalidity"></a>

```json
{
  "expiry": "1970-01-01T00:00:00Z",
  "limit": "1",
  "purpose": "LINK",
  "requester": {
    "id": 100005,
    "type": "HIP"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiry|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|
|limit|integer|true|none|number of times, the token can be used|
|purpose|[PatientAuthPurpose](#schemapatientauthpurpose)|true|none|what is the purpose of user auth|
|requester|[PatientAuthRequester](#schemapatientauthrequester)|true|none|identification of requester|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|LINK|
|purpose|KYC|
|purpose|KYC_AND_LINK|

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

<h2 id="tocS_AuthMeta">AuthMeta</h2>
<!-- backwards compatibility -->
<a id="schemaauthmeta"></a>
<a id="schema_AuthMeta"></a>
<a id="tocSauthmeta"></a>
<a id="tocsauthmeta"></a>

```json
{
  "expiry": "2019-12-30T12:01:55Z",
  "hint": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiry|string|false|none|none|
|hint|string|false|none|none|

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

<h2 id="tocS_CareContext">CareContext</h2>
<!-- backwards compatibility -->
<a id="schemacarecontext"></a>
<a id="schema_CareContext"></a>
<a id="tocScarecontext"></a>
<a id="tocscarecontext"></a>

```json
{
  "referenceNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|referenceNumber|string|true|none|none|

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

<h2 id="tocS_CertificateOrKeyGetSchema">CertificateOrKeyGetSchema</h2>
<!-- backwards compatibility -->
<a id="schemacertificateorkeygetschema"></a>
<a id="schema_CertificateOrKeyGetSchema"></a>
<a id="tocScertificateorkeygetschema"></a>
<a id="tocscertificateorkeygetschema"></a>

```json
{
  "alg": "string",
  "e": "string",
  "kid": "string",
  "kty": "string",
  "n": "string",
  "use": "string",
  "x5c": [
    "string"
  ],
  "x5t": "string",
  "x5t#S256": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alg|string|false|none|none|
|e|string|false|none|none|
|kid|string|false|none|none|
|kty|string|false|none|none|
|n|string|false|none|none|
|use|string|false|none|none|
|x5c|[string]|false|none|none|
|x5t|string|false|none|none|
|x5t#S256|string|false|none|none|

<h2 id="tocS_Certs">Certs</h2>
<!-- backwards compatibility -->
<a id="schemacerts"></a>
<a id="schema_Certs"></a>
<a id="tocScerts"></a>
<a id="tocscerts"></a>

```json
{
  "keys": [
    {
      "alg": "string",
      "e": "string",
      "kid": "string",
      "kty": "string",
      "n": "string",
      "use": "string",
      "x5c": [
        "string"
      ],
      "x5t": "string",
      "x5t#S256": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[[CertificateOrKeyGetSchema](#schemacertificateorkeygetschema)]|false|none|none|

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
|id|string(<user-id>@ndhm)|true|none|none|

<h2 id="tocS_ConsentStatus">ConsentStatus</h2>
<!-- backwards compatibility -->
<a id="schemaconsentstatus"></a>
<a id="schema_ConsentStatus"></a>
<a id="tocSconsentstatus"></a>
<a id="tocsconsentstatus"></a>

```json
"GRANTED"
```

<h2 id="tocS_DataNotification">DataNotification</h2>
<!-- backwards compatibility -->
<a id="schemadatanotification"></a>
<a id="schema_DataNotification"></a>
<a id="tocSdatanotification"></a>
<a id="tocsdatanotification"></a>

```json
{
  "entries": [
    {
      "careContextReference": "RVH1008",
      "checksum": "string",
      "content": "Encrypted content of data packaged in FHIR bundle",
      "media": "application/fhir+json"
    }
  ],
  "keyMaterial": {
    "cryptoAlg": "ECDH",
    "curve": "Curve25519",
    "dhPublicKey": {
      "expiry": "1970-01-01T00:00:00Z",
      "keyValue": "string",
      "parameters": "Curve25519/32byte random key"
    },
    "nonce": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "pageCount": 0,
  "pageNumber": 0,
  "transactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[EntryContent](#schemaentrycontent) \| [EntryLink](#schemaentrylink)]|true|none|none|
|keyMaterial|[KeyMaterial](#schemakeymaterial)|true|none|none|
|pageCount|integer|true|none|Total number of pages.|
|pageNumber|integer|true|none|Current page number.|
|transactionId|string(uuid)|true|none|Transaction Id issued when data requested.|

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

<h2 id="tocS_EntryContent">EntryContent</h2>
<!-- backwards compatibility -->
<a id="schemaentrycontent"></a>
<a id="schema_EntryContent"></a>
<a id="tocSentrycontent"></a>
<a id="tocsentrycontent"></a>

```json
{
  "careContextReference": "RVH1008",
  "checksum": "string",
  "content": "Encrypted content of data packaged in FHIR bundle",
  "media": "application/fhir+json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|careContextReference|string|true|none|care context reference number.|
|checksum|string|true|none|Md5 checksum of the content before encryption|
|content|string|true|none|Encrypted content|
|media|string|true|none|mimetype of the content.|

#### Enumerated Values

|Property|Value|
|---|---|
|media|application/fhir+json|

<h2 id="tocS_EntryLink">EntryLink</h2>
<!-- backwards compatibility -->
<a id="schemaentrylink"></a>
<a id="schema_EntryLink"></a>
<a id="tocSentrylink"></a>
<a id="tocsentrylink"></a>

```json
{
  "careContextReference": "NCC1701",
  "checksum": "string",
  "link": "https://data-from.net/sa2321afaf12e13",
  "media": "application/fhir+json"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|careContextReference|string|true|none|care context reference number.|
|checksum|string|true|none|Md5 checksum of the content before encryption|
|link|string|true|none|Encrypted content|
|media|string|true|none|mimetype of the content.|

#### Enumerated Values

|Property|Value|
|---|---|
|media|application/fhir+json|

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

<h2 id="tocS_HIPConsentNotification">HIPConsentNotification</h2>
<!-- backwards compatibility -->
<a id="schemahipconsentnotification"></a>
<a id="schema_HIPConsentNotification"></a>
<a id="tocShipconsentnotification"></a>
<a id="tocshipconsentnotification"></a>

```json
{
  "notification": {
    "consentDetail": {
      "careContexts": [
        {
          "careContextReference": "Episode1",
          "patientReference": "hinapatel79@hospital"
        }
      ],
      "consentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "consentManager": {
        "id": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "hiTypes": [
        "OPConsultation"
      ],
      "hip": {
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
      "schemaVersion": "string"
    },
    "consentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "signature": "Signature of CM as defined in W3C standards; Base64 encoded",
    "status": "GRANTED"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notification|object|true|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

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

<h2 id="tocS_HIPHealthInformationRequest">HIPHealthInformationRequest</h2>
<!-- backwards compatibility -->
<a id="schemahiphealthinformationrequest"></a>
<a id="schema_HIPHealthInformationRequest"></a>
<a id="tocShiphealthinformationrequest"></a>
<a id="tocshiphealthinformationrequest"></a>

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
  "timestamp": "1970-01-01T00:00:00Z",
  "transactionId": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hiRequest|object|true|none|none|
|requestId|[UuidSchema](#schemauuidschema)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|
|transactionId|[UuidSchema](#schemauuidschema)|true|none|none|

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

<h2 id="tocS_HITypeEnum">HITypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemahitypeenum"></a>
<a id="schema_HITypeEnum"></a>
<a id="tocShitypeenum"></a>
<a id="tocshitypeenum"></a>

```json
"OPConsultation"
```

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
      "id": "tmh",
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
|status|string|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

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
|type|NDHM_HEALTH_NUMBER|
|type|HEALTH_ID|

<h2 id="tocS_IdentifierType">IdentifierType</h2>
<!-- backwards compatibility -->
<a id="schemaidentifiertype"></a>
<a id="schema_IdentifierType"></a>
<a id="tocSidentifiertype"></a>
<a id="tocsidentifiertype"></a>

```json
"MOBILE"
```

<h2 id="tocS_KeyMaterial">KeyMaterial</h2>
<!-- backwards compatibility -->
<a id="schemakeymaterial"></a>
<a id="schema_KeyMaterial"></a>
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
|dhPublicKey|[keyObject](#schemakeyobject)|true|none|none|
|nonce|string(32 byte string)|true|none|none|

<h2 id="tocS_LinkConfirmationRequest">LinkConfirmationRequest</h2>
<!-- backwards compatibility -->
<a id="schemalinkconfirmationrequest"></a>
<a id="schema_LinkConfirmationRequest"></a>
<a id="tocSlinkconfirmationrequest"></a>
<a id="tocslinkconfirmationrequest"></a>

```json
{
  "confirmation": {
    "linkRefNumber": "string",
    "token": "string"
  },
  "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confirmation|object|true|none|none|
|requestId|string(uuid)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

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

<h2 id="tocS_OpenIdConfiguration">OpenIdConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaopenidconfiguration"></a>
<a id="schema_OpenIdConfiguration"></a>
<a id="tocSopenidconfiguration"></a>
<a id="tocsopenidconfiguration"></a>

```json
{
  "jwks_uri": "https://ncg-gateway/certs"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jwks_uri|string(uri)|false|none|none|

<h2 id="tocS_OrganizationReference">OrganizationReference</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationreference"></a>
<a id="schema_OrganizationReference"></a>
<a id="tocSorganizationreference"></a>
<a id="tocsorganizationreference"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

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

<h2 id="tocS_PatientAddress">PatientAddress</h2>
<!-- backwards compatibility -->
<a id="schemapatientaddress"></a>
<a id="schema_PatientAddress"></a>
<a id="tocSpatientaddress"></a>
<a id="tocspatientaddress"></a>

```json
{
  "district": "string",
  "line": "string",
  "pincode": "string",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|district|string|false|none|none|
|line|string|false|none|none|
|pincode|string|false|none|none|
|state|string|false|none|none|

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
      "name": "Janki Das"
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
|credential|object|true|none|note, demographic details are only required for demographic auth at this point.|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|
|transactionId|string|true|none|none|

<h2 id="tocS_PatientAuthConfirmResponse">PatientAuthConfirmResponse</h2>
<!-- backwards compatibility -->
<a id="schemapatientauthconfirmresponse"></a>
<a id="schema_PatientAuthConfirmResponse"></a>
<a id="tocSpatientauthconfirmresponse"></a>
<a id="tocspatientauthconfirmresponse"></a>

```json
{
  "auth": {
    "accessToken": "string",
    "patient": {
      "address": {
        "district": "string",
        "line": "string",
        "pincode": "string",
        "state": "string"
      },
      "gender": "M",
      "id": "<patient-id>@<consent-manager-id>",
      "identifiers": [
        {
          "type": "MOBILE",
          "value": "+919800083232"
        }
      ],
      "name": "Hina Patel",
      "yearOfBirth": 2000
    },
    "validity": {
      "expiry": "1970-01-01T00:00:00Z",
      "limit": "1",
      "purpose": "LINK",
      "requester": {
        "id": 100005,
        "type": "HIP"
      }
    }
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
|auth|object|false|none|depending on the purpose of auth, as specified in /auth/init, the response may include the following <br>  1. LINK - only returns **accessToken**<br>  2. KYC - only returns **patient**<br>  3. KYC_AND_LINK - returns both **accessToken** and **patient**<br>|
|error|[Error](#schemaerror)|false|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|resp|[RequestReference](#schemarequestreference)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

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

<h2 id="tocS_PatientAuthInitResponse">PatientAuthInitResponse</h2>
<!-- backwards compatibility -->
<a id="schemapatientauthinitresponse"></a>
<a id="schema_PatientAuthInitResponse"></a>
<a id="tocSpatientauthinitresponse"></a>
<a id="tocspatientauthinitresponse"></a>

```json
{
  "auth": {
    "meta": {
      "expiry": "2019-12-30T12:01:55Z",
      "hint": "string"
    },
    "mode": "MOBILE_OTP",
    "transactionId": "string"
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
|auth|object|false|none|none|
|error|[Error](#schemaerror)|false|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|resp|[RequestReference](#schemarequestreference)|true|none|none|
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

<h2 id="tocS_PatientAuthModeQueryResponse">PatientAuthModeQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemapatientauthmodequeryresponse"></a>
<a id="schema_PatientAuthModeQueryResponse"></a>
<a id="tocSpatientauthmodequeryresponse"></a>
<a id="tocspatientauthmodequeryresponse"></a>

```json
{
  "auth": {
    "modes": [
      "MOBILE_OTP"
    ],
    "purpose": "LINK"
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
|auth|object|false|none|none|
|error|[Error](#schemaerror)|false|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|resp|[RequestReference](#schemarequestreference)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_PatientAuthNotification">PatientAuthNotification</h2>
<!-- backwards compatibility -->
<a id="schemapatientauthnotification"></a>
<a id="schema_PatientAuthNotification"></a>
<a id="tocSpatientauthnotification"></a>
<a id="tocspatientauthnotification"></a>

```json
{
  "auth": {
    "accessToken": "string",
    "patient": {
      "address": {
        "district": "string",
        "line": "string",
        "pincode": "string",
        "state": "string"
      },
      "gender": "M",
      "id": "<patient-id>@<consent-manager-id>",
      "identifiers": [
        {
          "type": "MOBILE",
          "value": "+919800083232"
        }
      ],
      "name": "Hina Patel",
      "yearOfBirth": 2000
    },
    "status": "GRANTED",
    "transactionId": "string",
    "validity": {
      "expiry": "1970-01-01T00:00:00Z",
      "limit": "1",
      "purpose": "LINK",
      "requester": {
        "id": 100005,
        "type": "HIP"
      }
    }
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth|object|false|none|depending on the purpose of auth, as specified in /auth/init, the response may include the following <br>  1. LINK - only returns **accessToken**<br>  2. KYC - only returns **patient**<br>  3. KYC_AND_LINK - returns both **accessToken** and **patient**<br>|
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

<h2 id="tocS_PatientCareContextLinkResponse">PatientCareContextLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemapatientcarecontextlinkresponse"></a>
<a id="schema_PatientCareContextLinkResponse"></a>
<a id="tocSpatientcarecontextlinkresponse"></a>
<a id="tocspatientcarecontextlinkresponse"></a>

```json
{
  "acknowledgement": {
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
|acknowledgement|object|false|none|none|
|error|[Error](#schemaerror)|false|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|resp|[RequestReference](#schemarequestreference)|true|none|none|
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
  "name": "Janki Das"
}
```

demographic details are only required for demographic auth at this point, in which case identifier.Type must be AADHAAR.

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

<h2 id="tocS_PatientDemographicResponse">PatientDemographicResponse</h2>
<!-- backwards compatibility -->
<a id="schemapatientdemographicresponse"></a>
<a id="schema_PatientDemographicResponse"></a>
<a id="tocSpatientdemographicresponse"></a>
<a id="tocspatientdemographicresponse"></a>

```json
{
  "address": {
    "district": "string",
    "line": "string",
    "pincode": "string",
    "state": "string"
  },
  "gender": "M",
  "id": "<patient-id>@<consent-manager-id>",
  "identifiers": [
    {
      "type": "MOBILE",
      "value": "+919800083232"
    }
  ],
  "name": "Hina Patel",
  "yearOfBirth": 2000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[PatientAddress](#schemapatientaddress)|false|none|none|
|gender|[PatientGender](#schemapatientgender)|true|none|none|
|id|string|true|none|PHR Identifier of patient at consent manager|
|identifiers|[[Identifier](#schemaidentifier)]|false|none|none|
|name|string|true|none|none|
|yearOfBirth|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|M|
|gender|F|
|gender|O|
|gender|U|

<h2 id="tocS_PatientDiscoveryRequest">PatientDiscoveryRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatientdiscoveryrequest"></a>
<a id="schema_PatientDiscoveryRequest"></a>
<a id="tocSpatientdiscoveryrequest"></a>
<a id="tocspatientdiscoveryrequest"></a>

```json
{
  "patient": {
    "gender": "M",
    "id": "<patient-id>@<consent-manager-id>",
    "name": "chandler bing",
    "unverifiedIdentifiers": [
      {
        "type": "MOBILE",
        "value": "+919800083232"
      }
    ],
    "verifiedIdentifiers": [
      {
        "type": "MOBILE",
        "value": "+919800083232"
      }
    ],
    "yearOfBirth": 2000
  },
  "requestId": "499a5a4a-7dda-4f20-9b67-e24589627061",
  "timestamp": "1970-01-01T00:00:00Z",
  "transactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patient|object|true|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request.|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|
|transactionId|string(uuid)|true|none|correlation-Id for patient discovery and subsequent care context linkage|

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

<h2 id="tocS_PatientLinkReferenceRequest">PatientLinkReferenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatientlinkreferencerequest"></a>
<a id="schema_PatientLinkReferenceRequest"></a>
<a id="tocSpatientlinkreferencerequest"></a>
<a id="tocspatientlinkreferencerequest"></a>

```json
{
  "patient": {
    "careContexts": [
      {
        "referenceNumber": "string"
      }
    ],
    "id": "hinapatel79@ndhm",
    "referenceNumber": "TMH-PUID-001"
  },
  "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "timestamp": "1970-01-01T00:00:00Z",
  "transactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patient|object|true|none|none|
|requestId|string(uuid)|true|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|
|transactionId|string(uuid)|true|none|none|

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
|matchedBy|NDHM_HEALTH_NUMBER|
|matchedBy|HEALTH_ID|

<h2 id="tocS_PatientSMSNotifcationRequest">PatientSMSNotifcationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatientsmsnotifcationrequest"></a>
<a id="schema_PatientSMSNotifcationRequest"></a>
<a id="tocSpatientsmsnotifcationrequest"></a>
<a id="tocspatientsmsnotifcationrequest"></a>

```json
{
  "notification": {
    "careContextInfo": "X-Ray on 22nd Dec",
    "deeplinkUrl": "https://link.to.health.records/ (Optional)",
    "hip": {
      "id": "HIP_001",
      "name": "Max Healthcare (Optional)"
    },
    "phoneNo": "+91-9999999999",
    "receiverName": "Ramesh Singh (Optional)"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notification|object|true|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

<h2 id="tocS_PatientSMSNotifcationResponse">PatientSMSNotifcationResponse</h2>
<!-- backwards compatibility -->
<a id="schemapatientsmsnotifcationresponse"></a>
<a id="schema_PatientSMSNotifcationResponse"></a>
<a id="tocSpatientsmsnotifcationresponse"></a>
<a id="tocspatientsmsnotifcationresponse"></a>

```json
{
  "error": {
    "code": 1000,
    "message": "string"
  },
  "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
  "resp": {
    "requestId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  },
  "status": "ACKNOWLEDGED",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Error](#schemaerror)|false|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request|
|resp|[RequestReference](#schemarequestreference)|true|none|none|
|status|string|false|none|none|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACKNOWLEDGED|
|status|ERRORED|

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

<h2 id="tocS_SessionRequest">SessionRequest</h2>
<!-- backwards compatibility -->
<a id="schemasessionrequest"></a>
<a id="schema_SessionRequest"></a>
<a id="tocSsessionrequest"></a>
<a id="tocssessionrequest"></a>

```json
{
  "clientId": "string",
  "clientSecret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|true|none|none|
|clientSecret|string|true|none|none|

<h2 id="tocS_SessionResponse">SessionResponse</h2>
<!-- backwards compatibility -->
<a id="schemasessionresponse"></a>
<a id="schema_SessionResponse"></a>
<a id="tocSsessionresponse"></a>
<a id="tocssessionresponse"></a>

```json
{
  "accessToken": "eyJhbGciOiJSUzI1Ni.IsInR5cCIgOiAiSldUIiwia2lkIiA6ICJrVVp.2MXJQMjRyYXN1UW9wU2lWbkdZQUZIVFowYVZGVWpYNXFLMnNibTk0In0",
  "expiresIn": 1800,
  "refreshExpiresIn": 1800,
  "refreshToken": "eyJhbGciOiJSUzI1Ni.IsInR5cCIgOiAiSldUIiwia2lkIiA6ICJrVVp.2MXJQMjRyYXN1UW9wU2lWbkdZQUZIVFowYVZGVWpYNXFLMnNibTk0In0",
  "tokenType": "bearer"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string|false|none|none|
|expiresIn|integer|false|none|In Minutes|
|refreshExpiresIn|integer|false|none|In Minutes|
|refreshToken|string|false|none|none|
|tokenType|string|false|none|none|

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

<h2 id="tocS_ShareProfileRequest">ShareProfileRequest</h2>
<!-- backwards compatibility -->
<a id="schemashareprofilerequest"></a>
<a id="schema_ShareProfileRequest"></a>
<a id="tocSshareprofilerequest"></a>
<a id="tocsshareprofilerequest"></a>

```json
{
  "patient": {
    "hipCode": "12345 (CounterId)",
    "userDemographics": {
      "address": {
        "district": "string",
        "line": "string",
        "pincode": "string",
        "state": "string"
      },
      "dayOfBirth": 0,
      "gender": "M",
      "healthId": "<username>@<suffix>",
      "healthIdNumber": "1111-1111-1111-11",
      "identifiers": [
        {
          "type": "MOBILE",
          "value": "+919800083232"
        }
      ],
      "monthOfBirth": 0,
      "name": "Jane Doe",
      "yearOfBirth": 2000
    }
  },
  "requestId": "499a5a4a-7dda-4f20-9b67-e24589627061",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|patient|object|true|none|none|
|requestId|string(uuid)|true|none|a nonce, unique for each HTTP request.|
|timestamp|[TimestampSchema](#schematimestampschema)|true|none|Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ|

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

<h2 id="tocS_keyObject">keyObject</h2>
<!-- backwards compatibility -->
<a id="schemakeyobject"></a>
<a id="schema_keyObject"></a>
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
