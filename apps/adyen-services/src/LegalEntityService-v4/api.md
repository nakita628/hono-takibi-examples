<h1 id="legal-entity-management-api">Legal Entity Management API v4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Legal Entity Management API enables you to manage legal entities that contain information required for verification.

## Authentication
Each request to the Legal Entity Management API must be signed with an API key. Generate an API key in your Customer Area if you have a [platform setup](https://docs.adyen.com/platforms/manage-access/api-credentials-web-service/#generate-api-key) or [marketplace setup](https://docs.adyen.com/marketplaces/manage-access/api-credentials-web-service/#generate-api-key).

 If you have an Adyen Issuing integration, [generate an API key](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service/#generate-api-key) in your Balance Platform Customer Area.

To connect to the API, add an `X-API-Key` header with the API key as the value. For example:

```
curl
-H "X-API-Key: YOUR_API_KEY" \
-H "Content-Type: application/json" \
...
```
## Versioning
The Legal Entity Management API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://kyc-test.adyen.com/lem/v4/legalEntities
```
## Rate limits
We enforce rate limits on Legal Entity Management API endpoints. When the number of requests you send exceeds a threshold within a time frame, additional requests are blocked until the time frame ends. Current limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.

## Going live
When going live, generate an API key in your [live Customer Area](https://ca-live.adyen.com/ca/) if you have an Adyen for Platforms integration or [live Balance Platform Customer Area](https://balanceplatform-live.adyen.com/balanceplatform/) if you have an Adyen Issuing integration.You can then use the API key to send requests to `https://kyc-live.adyen.com/lem/v4`.

Base URLs:

* <a href="https://kyc-test.adyen.com/lem/v4">https://kyc-test.adyen.com/lem/v4</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="legal-entity-management-api-legal-entities">Legal entities</h1>

## Create a legal entity

<a id="opIdpost-legalEntities"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "type": "individual",
    "individual": {
      "residentialAddress": {
        "city": "Sydney",
        "country": "AU",
        "postalCode": "1122",
        "stateOrProvince": "NSW",
        "street": "Winfield Avenue",
        "street2": "12"
      },
      "name": {
        "firstName": "Shelly",
        "lastName": "Eller"
      },
      "identificationData": {
        "issuerState": "NSW",
        "number": "1234567891",
        "type": "driversLicense",
        "cardNumber": "112327"
      },
      "birthData": {
        "dateOfBirth": "1991-01-01"
      },
      "email": "s.hopper@example.com"
    }
  }'
```

`POST /legalEntities`

Creates a legal entity. 

This resource contains information about the user that will be onboarded in your platform. Adyen uses this information to perform verification checks as required by payment industry regulations. Adyen informs you of the verification results through webhooks or API responses.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Body parameter

```json
{
  "type": "individual",
  "individual": {
    "residentialAddress": {
      "city": "Sydney",
      "country": "AU",
      "postalCode": "1122",
      "stateOrProvince": "NSW",
      "street": "Winfield Avenue",
      "street2": "12"
    },
    "name": {
      "firstName": "Shelly",
      "lastName": "Eller"
    },
    "identificationData": {
      "issuerState": "NSW",
      "number": "1234567891",
      "type": "driversLicense",
      "cardNumber": "112327"
    },
    "birthData": {
      "dateOfBirth": "1991-01-01"
    },
    "email": "s.hopper@example.com"
  }
}
```

<h3 id="create-a-legal-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-requested-verification-code|header|string|false|Use a suberror code as your requested verification code. You can include one code at a time in your request header. Requested verification codes can only be used in your test environment.|
|body|body|[LegalEntityInfoRequiredType](#schemalegalentityinforequiredtype)|false|none|
|» capabilities|body|object|false|Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.|
|» » **additionalProperties**|body|[LegalEntityCapability](#schemalegalentitycapability)|false|none|
|» entityAssociations|body|[[LegalEntityAssociation](#schemalegalentityassociation)]|false|List of legal entities associated with the current legal entity.<br>For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.|
|» individual|body|[Individual](#schemaindividual)|false|Information about the individual. Required if `type` is **individual**.|
|» organization|body|[Organization](#schemaorganization)|false|Information about the organization. Required if `type` is **organization**.|
|» reference|body|string|false|Your reference for the legal entity, maximum 150 characters.|
|» soleProprietorship|body|[SoleProprietorship](#schemasoleproprietorship)|false|Information about the sole proprietorship. Required if `type` is **soleProprietorship**.|
|» trust|body|[Trust](#schematrust)|false|Information about the trust. Required if `type` is **trust**.|
|» type|body|string|true|The type of legal entity.<br><br> Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**.|
|» unincorporatedPartnership|body|[UnincorporatedPartnership](#schemaunincorporatedpartnership)|false|Information about the unincorporated partnership. Required if `type` is **unincorporatedPartnership**.|
|» verificationPlan|body|string|false|A key-value pair that specifies the verification process for a legal entity. Set to **upfront** for upfront verification for [marketplaces](https://docs.adyen.com/marketplaces/verification-overview/verification-types/#upfront-verification).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|individual|
|» type|organization|
|» type|soleProprietorship|
|» type|trust|
|» type|unincorporatedPartnership|

> Example responses

> 200 Response

```json
{
  "individual": {
    "email": "s.hopper@example.com",
    "birthData": {
      "dateOfBirth": "1991-01-01"
    },
    "identificationData": {
      "cardNumber": "112327",
      "issuerState": "NSW",
      "number": "1234567891",
      "type": "driversLicense"
    },
    "name": {
      "firstName": "Shelly",
      "lastName": "Eller"
    },
    "residentialAddress": {
      "city": "Sydney",
      "country": "AU",
      "postalCode": "1122",
      "stateOrProvince": "NSW",
      "street": "Winfield Avenue",
      "street2": "12"
    }
  },
  "type": "individual",
  "id": "LE00000000000000000000001"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="create-a-legal-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[LegalEntity](#schemalegalentity)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get a legal entity

<a id="opIdget-legalEntities-id"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /legalEntities/{id}`

Returns a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="get-a-legal-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity.|

> Example responses

> 200 Response

```json
{
  "capabilities": {
    "sendToTransferInstrument": {
      "allowed": false,
      "requested": true,
      "transferInstruments": [
        {
          "allowed": false,
          "id": "SE322KH223222F5GXZFNM3BGP",
          "requested": true,
          "verificationStatus": "pending"
        }
      ],
      "verificationStatus": "pending"
    },
    "receivePayments": {
      "allowed": false,
      "requested": true,
      "verificationStatus": "pending"
    },
    "sendToBalanceAccount": {
      "allowed": false,
      "requested": true,
      "verificationStatus": "pending"
    },
    "receiveFromPlatformPayments": {
      "allowed": false,
      "requested": true,
      "verificationStatus": "pending"
    },
    "receiveFromBalanceAccount": {
      "allowed": false,
      "requested": true,
      "verificationStatus": "pending"
    }
  },
  "individual": {
    "email": "s.hopper@example.com",
    "birthData": {
      "dateOfBirth": "1990-06-21"
    },
    "name": {
      "firstName": "Simone",
      "lastName": "Hopper"
    },
    "phone": {
      "number": "+31858888138",
      "phoneCountryCode": "NL",
      "type": "mobile"
    },
    "residentialAddress": {
      "city": "Amsterdam",
      "country": "NL",
      "postalCode": "1011DJ",
      "street": "Simon Carmiggeltstraat 6 - 50",
      "street2": "274"
    }
  },
  "type": "individual",
  "id": "YOUR_LEGAL_ENTITY",
  "transferInstruments": [
    {
      "id": "SE322KH223222F5GXZFNM3BGP",
      "accountIdentifier": "NL**ABNA******0123",
      "trustedSource": false
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-a-legal-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[LegalEntity](#schemalegalentity)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Update a legal entity

<a id="opIdpatch-legalEntities-id"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "type": "individual"
  }'
```

`PATCH /legalEntities/{id}`

Updates a legal entity.

 >To change the legal entity type, include only the new `type` in your request.

If you need to update information for the legal entity, make a separate request. To update the `entityAssociations` array, you need to replace the entire array.For example, if the array has 3 entries and you want to remove 1 entry, you need to PATCH the resource with the remaining 2 entries.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Body parameter

```json
{
  "type": "individual"
}
```

<h3 id="update-a-legal-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity.|
|x-requested-verification-code|header|string|false|Use the requested verification code 0_0001 to resolve any suberrors associated with the legal entity. Requested verification codes can only be used in your test environment.|
|body|body|[LegalEntityInfo](#schemalegalentityinfo)|false|none|
|» capabilities|body|object|false|Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.|
|» » **additionalProperties**|body|[LegalEntityCapability](#schemalegalentitycapability)|false|none|
|» entityAssociations|body|[[LegalEntityAssociation](#schemalegalentityassociation)]|false|List of legal entities associated with the current legal entity.<br>For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.|
|» individual|body|[Individual](#schemaindividual)|false|Information about the individual. Required if `type` is **individual**.|
|» organization|body|[Organization](#schemaorganization)|false|Information about the organization. Required if `type` is **organization**.|
|» reference|body|string|false|Your reference for the legal entity, maximum 150 characters.|
|» soleProprietorship|body|[SoleProprietorship](#schemasoleproprietorship)|false|Information about the sole proprietorship. Required if `type` is **soleProprietorship**.|
|» trust|body|[Trust](#schematrust)|false|Information about the trust. Required if `type` is **trust**.|
|» type|body|string|false|The type of legal entity.<br><br>Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**.|
|» unincorporatedPartnership|body|[UnincorporatedPartnership](#schemaunincorporatedpartnership)|false|Information about the unincorporated partnership. Required if `type` is **unincorporatedPartnership**.|
|» verificationPlan|body|string|false|A key-value pair that specifies the verification process for a legal entity. Set to **upfront** for upfront verification for [marketplaces](https://docs.adyen.com/marketplaces/verification-overview/verification-types/#upfront-verification).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|individual|
|» type|organization|
|» type|soleProprietorship|
|» type|trust|
|» type|unincorporatedPartnership|

> Example responses

> 200 Response

```json
{
  "individual": {
    "name": {
      "firstName": "Explorer",
      "lastName": "Company based in US"
    },
    "residentialAddress": {
      "country": "US"
    }
  },
  "type": "individual",
  "id": "LE00000000000000000000001"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="update-a-legal-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[LegalEntity](#schemalegalentity)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get all business lines under a legal entity

<a id="opIdget-legalEntities-id-businessLines"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/businessLines \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /legalEntities/{id}/businessLines`

Returns the business lines owned by a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="get-all-business-lines-under-a-legal-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity.|

> Example responses

> 200 Response

```json
{
  "businessLines": [
    {
      "service": "banking",
      "industryCode": "55",
      "legalEntityId": "LE00000000000000000000001",
      "sourceOfFunds": {
        "adyenProcessedFunds": false,
        "description": "Funds from my flower shop business",
        "type": "business"
      },
      "webData": [
        {
          "webAddress": "https://www.adyen.com",
          "webAddressId": "SE577HA334222K5H8V87B3BPU"
        }
      ],
      "id": "SE322JV223222F5GVGMLNB83F"
    },
    {
      "service": "paymentProcessing",
      "industryCode": "339E",
      "legalEntityId": "LE00000000000000000000001",
      "salesChannels": [
        "eCommerce",
        "ecomMoto"
      ],
      "webData": [
        {
          "webAddress": "https://yoururl.com",
          "webAddressId": "SE908HJ723222F5GVGPNR55YH"
        }
      ],
      "id": "SE322JV223222F5GVGPNRB9GJ"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-all-business-lines-under-a-legal-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BusinessLines](#schemabusinesslines)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Check a legal entity's verification errors

<a id="opIdpost-legalEntities-id-checkVerificationErrors"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/checkVerificationErrors \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /legalEntities/{id}/checkVerificationErrors`

Returns the verification errors for a legal entity and its supporting entities.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="check-a-legal-entitys-verification-errors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity.|

> Example responses

> 200 Response

```json
{
  "problems": [
    {
      "entity": {
        "id": "LE00000000000000000000001",
        "type": "LegalEntity"
      },
      "verificationErrors": [
        {
          "capabilities": [
            "receivePayments",
            "sendToTransferInstrument"
          ],
          "code": "2_8179",
          "message": "'vatNumber' was missing.",
          "remediatingActions": [
            {
              "code": "2_158",
              "message": "Add 'organization.vatNumber' to legal entity."
            }
          ],
          "type": "dataMissing"
        },
        {
          "capabilities": [
            "receivePayments",
            "sendToTransferInstrument"
          ],
          "code": "2_8067",
          "message": "'Signatory' was missing.",
          "remediatingActions": [
            {
              "code": "2_124",
              "message": "Add 'organization.entityAssociations' of type 'signatory' to legal entity"
            }
          ],
          "type": "dataMissing"
        },
        {
          "capabilities": [
            "receivePayments",
            "sendToTransferInstrument"
          ],
          "code": "2_8189",
          "message": "'UBO through control' was missing.",
          "remediatingActions": [
            {
              "code": "2_151",
              "message": "Add 'organization.entityAssociations' of type 'uboThroughControl' to legal entity"
            }
          ],
          "type": "dataMissing"
        },
        {
          "capabilities": [
            "receivePayments"
          ],
          "code": "2_8190",
          "message": "'businessLine' was missing.",
          "remediatingActions": [
            {
              "code": "2_136",
              "message": "Add business line"
            }
          ],
          "type": "dataMissing"
        },
        {
          "capabilities": [
            "receivePayments",
            "sendToTransferInstrument"
          ],
          "code": "2_8021",
          "message": "'individual.residentialAddress.postalCode' was missing.",
          "remediatingActions": [
            {
              "code": "2_108",
              "message": "Add 'individual.residentialAddress.postalCode' to legal entity"
            }
          ],
          "type": "dataMissing"
        },
        {
          "capabilities": [
            "receivePayments",
            "sendToTransferInstrument"
          ],
          "code": "2_8064",
          "message": "'UBO through ownership' was missing.",
          "remediatingActions": [
            {
              "code": "2_123",
              "message": "Add 'organization.entityAssociations' of type 'uboThroughOwnership' to legal entity"
            }
          ],
          "type": "dataMissing"
        },
        {
          "capabilities": [
            "receivePayments",
            "sendToTransferInstrument"
          ],
          "code": "2_8141",
          "message": "'Registration document' was missing.",
          "remediatingActions": [
            {
              "code": "1_501",
              "message": "Upload a registration document"
            }
          ],
          "type": "dataMissing"
        },
        {
          "capabilities": [
            "receivePayments",
            "sendToTransferInstrument"
          ],
          "code": "2_8019",
          "message": "'individual.residentialAddress.street' was missing.",
          "remediatingActions": [
            {
              "code": "2_106",
              "message": "Add 'individual.residentialAddress.street' to legal entity"
            }
          ],
          "type": "dataMissing"
        },
        {
          "capabilities": [
            "receivePayments",
            "sendToTransferInstrument"
          ],
          "code": "2_8020",
          "message": "'individual.residentialAddress.city' was missing.",
          "remediatingActions": [
            {
              "code": "2_107",
              "message": "Add 'individual.residentialAddress.city' to legal entity"
            }
          ],
          "type": "dataMissing"
        },
        {
          "capabilities": [
            "receivePayments",
            "sendToTransferInstrument"
          ],
          "code": "2_8045",
          "message": "'organization.taxId' was missing.",
          "remediatingActions": [
            {
              "code": "2_118",
              "message": "Add 'organization.taxId' to legal entity"
            }
          ],
          "type": "dataMissing"
        },
        {
          "capabilities": [
            "receivePayments",
            "sendToTransferInstrument"
          ],
          "code": "2_8043",
          "message": "'organization.registrationNumber' was missing.",
          "remediatingActions": [
            {
              "code": "2_117",
              "message": "Add 'organization.registrationNumber' to legal entity"
            }
          ],
          "type": "dataMissing"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="check-a-legal-entitys-verification-errors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[VerificationErrors](#schemaverificationerrors)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Confirm data review

<a id="opIdpost-legalEntities-id-confirmDataReview"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/confirmDataReview \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /legalEntities/{id}/confirmDataReview`

Confirms that your user has reviewed the data for the legal entity specified in the path. Call this endpoint to inform Adyen that your user reviewed and verified that the data is up-to-date. The endpoint returns the timestamp of when Adyen received the request.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="confirm-data-review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity.|

> Example responses

> 200 Response

```json
{
  "dataReviewedAt": "2023-11-13T15:19:02Z"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="confirm-data-review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[DataReviewConfirmationResponse](#schemadatareviewconfirmationresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Request periodic data review.

<a id="opIdpost-legalEntities-id-requestPeriodicReview"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/requestPeriodicReview \
  -X POST \
  -H 'Accept: application/json'
```

`POST /legalEntities/{id}/requestPeriodicReview`

Requests a periodic data review for the legal entity of the user specified in the path.

<h3 id="request-periodic-data-review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity.|

<h3 id="request-periodic-data-review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content - the request has been successfully processed, but there is no additional content.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="legal-entity-management-api-transfer-instruments">Transfer instruments</h1>

## Create a transfer instrument

<a id="opIdpost-transferInstruments"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/transferInstruments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "legalEntityId": "LE00000000000000000000001",
    "type": "bankAccount",
    "bankAccount": {
      "accountIdentification": {
        "type": "iban",
        "iban": "NL62ABNA0000000123"
      }
    }
  }'
```

`POST /transferInstruments`

Creates a transfer instrument. 

A transfer instrument is a bank account that a legal entity owns. Adyen performs verification checks on the transfer instrument as required by payment industry regulations. We inform you of the verification results through webhooks or API responses.

When the transfer instrument passes the verification checks, you can start sending funds from the balance platform to the transfer instrument (such as payouts).

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Body parameter

```json
{
  "legalEntityId": "LE00000000000000000000001",
  "type": "bankAccount",
  "bankAccount": {
    "accountIdentification": {
      "type": "iban",
      "iban": "NL62ABNA0000000123"
    }
  }
}
```

<h3 id="create-a-transfer-instrument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-requested-verification-code|header|string|false|Use a suberror code as your requested verification code. You can include one code at a time in your request header. Requested verification codes can only be used in your test environment.|
|body|body|[TransferInstrumentInfo](#schematransferinstrumentinfo)|false|none|
|» bankAccount|body|[BankAccountInfo](#schemabankaccountinfo)|true|Contains information about the legal entity's bank account.|
|» legalEntityId|body|string|true|The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) that owns the transfer instrument.|
|» type|body|string|true|The type of transfer instrument.<br><br>Possible value: **bankAccount**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|bankAccount|
|» type|recurringDetail|

> Example responses

> 200 Response

```json
{
  "bankAccount": {
    "accountIdentification": {
      "type": "iban",
      "iban": "NL62ABNA0000000123"
    },
    "countryCode": "NL",
    "trustedSource": false
  },
  "legalEntityId": "LE00000000000000000000001",
  "type": "bankAccount",
  "capabilities": {
    "sendToTransferInstrument": {
      "allowed": false,
      "requested": true,
      "verificationStatus": "pending"
    }
  },
  "id": "SE322KH223222F5GXZFNM3BGP"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="create-a-transfer-instrument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransferInstrument](#schematransferinstrument)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get a transfer instrument

<a id="opIdget-transferInstruments-id"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/transferInstruments/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /transferInstruments/{id}`

Returns the details of a transfer instrument.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="get-a-transfer-instrument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the transfer instrument.|

> Example responses

> 200 Response

```json
{
  "bankAccount": {
    "accountIdentification": {
      "type": "iban",
      "iban": "NL62ABNA0000000123"
    },
    "countryCode": "NL"
  },
  "legalEntityId": "LE00000000000000000000001",
  "type": "bankAccount",
  "id": "SE322KH223222F5GXZFNM3BGP"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-a-transfer-instrument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransferInstrument](#schematransferinstrument)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Delete a transfer instrument

<a id="opIddelete-transferInstruments-id"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/transferInstruments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /transferInstruments/{id}`

Deletes a transfer instrument.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="delete-a-transfer-instrument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the transfer instrument to be deleted.|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="delete-a-transfer-instrument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content - look at the actual response code for the status of the request. |None|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Update a transfer instrument

<a id="opIdpatch-transferInstruments-id"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/transferInstruments/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "bankAccount": {
      "accountIdentification": {
        "type": "iban",
        "iban": "NL02ABNA0123456789"
      }
    },
    "legalEntityId": "LE00000000000000000000001",
    "type": "bankAccount"
  }'
```

`PATCH /transferInstruments/{id}`

Updates a transfer instrument.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Body parameter

```json
{
  "bankAccount": {
    "accountIdentification": {
      "type": "iban",
      "iban": "NL02ABNA0123456789"
    }
  },
  "legalEntityId": "LE00000000000000000000001",
  "type": "bankAccount"
}
```

<h3 id="update-a-transfer-instrument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the transfer instrument.|
|x-requested-verification-code|header|string|false|Use the requested verification code 0_0001 to resolve any suberrors associated with the transfer instrument. Requested verification codes can only be used in your test environment.|
|body|body|[TransferInstrumentInfo](#schematransferinstrumentinfo)|false|none|
|» bankAccount|body|[BankAccountInfo](#schemabankaccountinfo)|true|Contains information about the legal entity's bank account.|
|» legalEntityId|body|string|true|The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) that owns the transfer instrument.|
|» type|body|string|true|The type of transfer instrument.<br><br>Possible value: **bankAccount**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|bankAccount|
|» type|recurringDetail|

> Example responses

> 200 Response

```json
{
  "bankAccount": {
    "accountIdentification": {
      "type": "iban",
      "iban": "NL02ABNA0123456789"
    },
    "countryCode": "NL"
  },
  "legalEntityId": "LE00000000000000000000001",
  "type": "bankAccount",
  "id": "SE322KH223222F5GXZFNM3BGP"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="update-a-transfer-instrument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransferInstrument](#schematransferinstrument)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="legal-entity-management-api-business-lines">Business lines</h1>

## Create a business line

<a id="opIdpost-businessLines"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/businessLines \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "service": "banking",
    "industryCode": "4531",
    "webData": [
      {
        "webAddress": "https://www.adyen.com"
      }
    ],
    "legalEntityId": "LE00000000000000000000001",
    "sourceOfFunds": {
      "type": "business",
      "amount": {
        "currency": "EUR",
        "value": 600000
      },
      "adyenProcessedFunds": false,
      "description": "Funds from my flower shop business"
    }
  }'
```

`POST /businessLines`

Creates a business line. 

This resource contains information about your user's line of business, including their industry and their source of funds. Adyen uses this information to verify your users as required by payment industry regulations.Adyen informs you of the verification results through webhooks or API responses.

You can create a maximum of 200 business lines per legal entity for payment processing.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Body parameter

```json
{
  "service": "banking",
  "industryCode": "4531",
  "webData": [
    {
      "webAddress": "https://www.adyen.com"
    }
  ],
  "legalEntityId": "LE00000000000000000000001",
  "sourceOfFunds": {
    "type": "business",
    "amount": {
      "currency": "EUR",
      "value": 600000
    },
    "adyenProcessedFunds": false,
    "description": "Funds from my flower shop business"
  }
}
```

<h3 id="create-a-business-line-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BusinessLineInfo](#schemabusinesslineinfo)|false|none|
|» industryCode|body|string|true|A code that represents the industry of the legal entity for [marketplaces](https://docs.adyen.com/marketplaces/verification-requirements/reference-additional-products/#list-industry-codes) or [platforms](https://docs.adyen.com/platforms/verification-requirements/reference-additional-products/#list-industry-codes). For example, **4431A** for computer software stores.|
|» legalEntityId|body|string|true|Unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) that owns the business line.|
|» salesChannels|body|[string]|false|A list of channels where goods or services are sold.<br><br>Possible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.<br><br>Required only in combination with the `service` **paymentProcessing**.|
|» service|body|string|true|The service for which you are creating the business line.<br><br><br><br>Possible values:<br>*  **paymentProcessing**<br>*  **issuing**<br>*  **banking**<br><br>|
|» sourceOfFunds|body|[SourceOfFunds](#schemasourceoffunds)|false|Contains information about the source of your user's funds. Required only if the `service` is **banking** or **issuing**.|
|» webData|body|[[WebData](#schemawebdata)]|false|List of website URLs where your user's goods or services are sold. When this is required for a service but your user does not have an online presence, provide the reason in the `webDataExemption` object.|
|» webDataExemption|body|[WebDataExemption](#schemawebdataexemption)|false|The reason why the web data is not provided.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» service|paymentProcessing|
|» service|issuing|
|» service|banking|

> Example responses

> 200 Response

```json
{
  "industryCode": "4531",
  "legalEntityId": "LE00000000000000000000001",
  "service": "banking",
  "sourceOfFunds": {
    "adyenProcessedFunds": false,
    "amount": {
      "currency": "EUR",
      "value": 600000
    },
    "description": "Funds from my flower shop business",
    "type": "business"
  },
  "webData": [
    {
      "webAddress": "https://www.adyen.com",
      "webAddressId": "SE322JV223222F5H4CQGS77V4"
    }
  ],
  "id": "SE322KT223222D5FJ7TJN2986"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="create-a-business-line-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BusinessLine](#schemabusinessline)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get a business line

<a id="opIdget-businessLines-id"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/businessLines/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /businessLines/{id}`

Returns the detail of a business line.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="get-a-business-line-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the business line.|

> Example responses

> 200 Response

```json
{
  "service": "banking",
  "industryCode": "4531",
  "legalEntityId": "LE00000000000000000000001",
  "sourceOfFunds": {
    "adyenProcessedFunds": false,
    "description": "Funds from my flower shop business",
    "type": "business"
  },
  "webData": [
    {
      "webAddress": "https://www.adyen.com",
      "webAddressId": "SE322JV223222J5H8V87B3DHN"
    }
  ],
  "id": "SE322KH223222F5GV2SQ924F6"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-a-business-line-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BusinessLine](#schemabusinessline)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Delete a business line

<a id="opIddelete-businessLines-id"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/businessLines/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /businessLines/{id}`

Deletes a business line.

 >If you delete a business line linked to a [payment method](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api), it can affect your merchant account's ability to use the [payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings). The business line is removed from all linked merchant accounts.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="delete-a-business-line-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the business line to be deleted.|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="delete-a-business-line-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content - look at the actual response code for the status of the request. |None|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Update a business line

<a id="opIdpatch-businessLines-id"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/businessLines/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "industryCode": "55",
    "webData": [
      {
        "webAddress": "https://www.example.com"
      }
    ]
  }'
```

`PATCH /businessLines/{id}`

Updates a business line.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Body parameter

```json
{
  "industryCode": "55",
  "webData": [
    {
      "webAddress": "https://www.example.com"
    }
  ]
}
```

<h3 id="update-a-business-line-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the business line.|
|body|body|[BusinessLineInfoUpdate](#schemabusinesslineinfoupdate)|false|none|
|» industryCode|body|string|false|A code that represents the industry of your legal entity. For example, **4431A** for computer software stores.|
|» salesChannels|body|[string]|false|A list of channels where goods or services are sold.<br><br>Possible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.<br><br>Required only in combination with the `service` **paymentProcessing**.|
|» sourceOfFunds|body|[SourceOfFunds](#schemasourceoffunds)|false|Contains information about the source of your user's funds. Required only if the `service` is **banking** or **issuing**.|
|» webData|body|[[WebData](#schemawebdata)]|false|List of website URLs where your user's goods or services are sold. When this is required for a service but your user does not have an online presence, provide the reason in the `webDataExemption` object.|
|» webDataExemption|body|[WebDataExemption](#schemawebdataexemption)|false|The reason why the web data is not provided.|

> Example responses

> 200 Response

```json
{
  "service": "banking",
  "industryCode": "55",
  "legalEntityId": "LE00000000000000000000001",
  "sourceOfFunds": {
    "adyenProcessedFunds": false,
    "description": "Funds from my flower shop business",
    "type": "business"
  },
  "webData": [
    {
      "webAddress": "https://www.example.com",
      "webAddressId": "SE966LI345672J5H8V87B3FGH"
    }
  ],
  "id": "SE322JV223222F5GVGMLNB83F"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="update-a-business-line-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BusinessLine](#schemabusinessline)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="legal-entity-management-api-documents">Documents</h1>

## Upload a document for verification checks

<a id="opIdpost-documents"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "type": "registrationDocument",
    "attachments": [
      {
        "content": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC=="
      }
    ],
    "description": "Registration doc for Example Company",
    "owner": {
      "id": "LE00000000000000000000001",
      "type": "legalEntity"
    }
  }'
```

`POST /documents`

Uploads a document for verification checks.

 Adyen uses the information from the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities) to run automated verification checks. If these checks fail, you will be notified to provide additional documents.

 You should only upload documents when Adyen requests additional information for the legal entity.

 >You can upload a maximum of 15 pages for photo IDs.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Body parameter

```json
{
  "type": "registrationDocument",
  "attachments": [
    {
      "content": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC=="
    }
  ],
  "description": "Registration doc for Example Company",
  "owner": {
    "id": "LE00000000000000000000001",
    "type": "legalEntity"
  }
}
```

<h3 id="upload-a-document-for-verification-checks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-requested-verification-code|header|string|false|Use a suberror code as your requested verification code. You can include one code at a time in your request header. Requested verification codes can only be used in your test environment.|
|body|body|[Document](#schemadocument)|false|none|
|» attachment|body|[Attachment](#schemaattachment)|false|**Deprecated.** Object that contains the document.|
|» attachments|body|[[Attachment](#schemaattachment)]|false|Array that contains the document. The array supports multiple attachments for uploading different sides or pages of a document.|
|» description|body|string|true|Your description for the document.|
|» expiryDate|body|string|false|**Deprecated.** The expiry date of the document, in YYYY-MM-DD format.|
|» fileName|body|string|false|The filename of the document.|
|» issuerCountry|body|string|false|**Deprecated.** The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**.|
|» issuerState|body|string|false|**Deprecated.** The state or province where the document was issued (AU only).|
|» number|body|string|false|The number in the document.|
|» owner|body|[OwnerEntity](#schemaownerentity)|false|Contains information about the resource that owns the document.|
|» type|body|string|true|Type of document, used when providing an ID number or uploading a document. The possible values depend on the legal entity type.<br><br>* For **organization**, the `type` values can be **proofOfAddress**, **registrationDocument**, **vatDocument**, **proofOfOrganizationTaxInfo**, **proofOfOwnership**, **proofOfIndustry**, **proofOfSignatory**, **proofOfDirector**, or **proofOfFundingOrWealthSource**.<br><br>* For **individual**, the `type` values can be **identityCard**, **driversLicense**, **passport**, **liveSelfie**, **proofOfNationalIdNumber**, **proofOfResidency**, **proofOfIndustry**, **proofOfIndividualTaxId**, **proofOfFundingOrWealthSource** or **proofOfRelationship**.<br><br>* For **soleProprietorship**, the `type` values can be **constitutionalDocument**, **proofOfAddress**, or **proofOfIndustry**.<br><br>* For **trust**, the `type` value is **constitutionalDocument**.<br><br>* For **unincorporatedPartnership**, the `type` value is **constitutionalDocument**.<br><br>* Use **bankStatement** to upload documents for a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|bankStatement|
|» type|driversLicense|
|» type|identityCard|
|» type|nationalIdNumber|
|» type|passport|
|» type|proofOfAddress|
|» type|proofOfNationalIdNumber|
|» type|proofOfResidency|
|» type|registrationDocument|
|» type|vatDocument|
|» type|proofOfOrganizationTaxInfo|
|» type|proofOfIndividualTaxId|
|» type|proofOfOwnership|
|» type|proofOfSignatory|
|» type|liveSelfie|
|» type|proofOfIndustry|
|» type|constitutionalDocument|
|» type|proofOfFundingOrWealthSource|
|» type|proofOfRelationship|
|» type|proofOfDirector|

> Example responses

> 200 Response

```json
{
  "type": "registrationDocument",
  "attachments": [
    {
      "content": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC=="
    }
  ],
  "description": "Registration doc for Example Company",
  "fileName": "Registration doc for Example Company",
  "owner": {
    "id": "LE00000000000000000000001",
    "type": "legalEntity"
  },
  "id": "SE322JV223222F5GV2N9L8GDK"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="upload-a-document-for-verification-checks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[Document](#schemadocument)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get a document

<a id="opIdget-documents-id"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/documents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /documents/{id}`

Returns a document.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="get-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the document.|
|skipContent|query|boolean|false|Do not load document content while fetching the document.|

> Example responses

> 200 Response

```json
{
  "type": "registrationDocument",
  "attachments": [
    {
      "content": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC=="
    }
  ],
  "description": "Registration doc for Example Company",
  "fileName": "Registration doc for Example Company",
  "owner": {
    "id": "LE00000000000000000000001",
    "type": "legalEntity"
  },
  "id": "SE322JV223222F5GV2N9L8GDK"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[Document](#schemadocument)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Delete a document

<a id="opIddelete-documents-id"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/documents/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /documents/{id}`

Deletes a document.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="delete-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the document to be deleted.|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="delete-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content - look at the actual response code for the status of the request. |None|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Update a document

<a id="opIdpatch-documents-id"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/documents/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "type": "proofOfIndustry",
    "description": "Proof of industry doc for Example Company"
  }'
```

`PATCH /documents/{id}`

Updates a document.

 >You can upload a maximum of 15 pages for photo IDs.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Body parameter

```json
{
  "type": "proofOfIndustry",
  "description": "Proof of industry doc for Example Company"
}
```

<h3 id="update-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the document to be updated.|
|x-requested-verification-code|header|string|false|Use the requested verification code 0_0001 to resolve any suberrors associated with the document. Requested verification codes can only be used in your test environment.|
|body|body|[Document](#schemadocument)|false|none|
|» attachment|body|[Attachment](#schemaattachment)|false|**Deprecated.** Object that contains the document.|
|» attachments|body|[[Attachment](#schemaattachment)]|false|Array that contains the document. The array supports multiple attachments for uploading different sides or pages of a document.|
|» description|body|string|true|Your description for the document.|
|» expiryDate|body|string|false|**Deprecated.** The expiry date of the document, in YYYY-MM-DD format.|
|» fileName|body|string|false|The filename of the document.|
|» issuerCountry|body|string|false|**Deprecated.** The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**.|
|» issuerState|body|string|false|**Deprecated.** The state or province where the document was issued (AU only).|
|» number|body|string|false|The number in the document.|
|» owner|body|[OwnerEntity](#schemaownerentity)|false|Contains information about the resource that owns the document.|
|» type|body|string|true|Type of document, used when providing an ID number or uploading a document. The possible values depend on the legal entity type.<br><br>* For **organization**, the `type` values can be **proofOfAddress**, **registrationDocument**, **vatDocument**, **proofOfOrganizationTaxInfo**, **proofOfOwnership**, **proofOfIndustry**, **proofOfSignatory**, **proofOfDirector**, or **proofOfFundingOrWealthSource**.<br><br>* For **individual**, the `type` values can be **identityCard**, **driversLicense**, **passport**, **liveSelfie**, **proofOfNationalIdNumber**, **proofOfResidency**, **proofOfIndustry**, **proofOfIndividualTaxId**, **proofOfFundingOrWealthSource** or **proofOfRelationship**.<br><br>* For **soleProprietorship**, the `type` values can be **constitutionalDocument**, **proofOfAddress**, or **proofOfIndustry**.<br><br>* For **trust**, the `type` value is **constitutionalDocument**.<br><br>* For **unincorporatedPartnership**, the `type` value is **constitutionalDocument**.<br><br>* Use **bankStatement** to upload documents for a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|bankStatement|
|» type|driversLicense|
|» type|identityCard|
|» type|nationalIdNumber|
|» type|passport|
|» type|proofOfAddress|
|» type|proofOfNationalIdNumber|
|» type|proofOfResidency|
|» type|registrationDocument|
|» type|vatDocument|
|» type|proofOfOrganizationTaxInfo|
|» type|proofOfIndividualTaxId|
|» type|proofOfOwnership|
|» type|proofOfSignatory|
|» type|liveSelfie|
|» type|proofOfIndustry|
|» type|constitutionalDocument|
|» type|proofOfFundingOrWealthSource|
|» type|proofOfRelationship|
|» type|proofOfDirector|

> Example responses

> 200 Response

```json
{
  "type": "proofOfIndustry",
  "attachments": [
    {
      "content": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC=="
    }
  ],
  "description": "Proof of industry for Example Company",
  "fileName": "Proof of industry for Example Company",
  "owner": {
    "id": "LE00000000000000000000001",
    "type": "legalEntity"
  },
  "id": "SE322JV223222F5GV2N9L8GDK"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="update-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[Document](#schemadocument)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="legal-entity-management-api-terms-of-service">Terms of Service</h1>

## Get accepted Terms of Service document

<a id="opIdget-legalEntities-id-acceptedTermsOfServiceDocument-termsofserviceacceptancereference"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/acceptedTermsOfServiceDocument/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /legalEntities/{id}/acceptedTermsOfServiceDocument/{termsofserviceacceptancereference}`

Returns the accepted Terms of Service document for a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="get-accepted-terms-of-service-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity. For sole proprietorship, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.|
|termsofserviceacceptancereference|path|string|true|An Adyen-generated reference for the accepted Terms of Service.|
|termsOfServiceDocumentFormat|query|string|false|The format of the Terms of Service document. Possible values: **JSON**, **PDF**, or **TXT**|

> Example responses

> 200 Response

```json
{
  "document": "string",
  "id": "string",
  "termsOfServiceAcceptanceReference": "string",
  "termsOfServiceDocumentFormat": "JSON"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-accepted-terms-of-service-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetAcceptedTermsOfServiceDocumentResponse](#schemagetacceptedtermsofservicedocumentresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get Terms of Service document

<a id="opIdpost-legalEntities-id-termsOfService"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/termsOfService \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "type": "adyenIssuing",
    "language": "en"
  }'
```

`POST /legalEntities/{id}/termsOfService`

Returns the Terms of Service document for a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Body parameter

```json
{
  "type": "adyenIssuing",
  "language": "en"
}
```

<h3 id="get-terms-of-service-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.|
|body|body|[GetTermsOfServiceDocumentRequest](#schemagettermsofservicedocumentrequest)|false|none|
|» language|body|string|true|The language to be used for the Terms of Service document, specified by the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible values: **en** for English or **fr** for French.|
|» termsOfServiceDocumentFormat|body|string|false|The requested format for the Terms of Service document. Default value: JSON. Possible values: **JSON**, **PDF**, or **TXT**.|
|» type|body|string|true|The type of Terms of Service.<br><br>Possible values:<br>*  **adyenForPlatformsManage**<br>*  **adyenIssuing**<br>*  **adyenForPlatformsAdvanced**<br>*  **adyenCapital**<br>*  **adyenCapitalCashAdvance**<br>*  **adyenAccount**<br>*  **adyenCard**<br>*  **adyenFranchisee**<br>*  **adyenPccr**<br>*  **adyenChargeCard**<br>*  **kycOnInvite**<br>*  **directDebit**<br><br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|adyenAccount|
|» type|adyenCapital|
|» type|adyenCapitalCashAdvance|
|» type|adyenCard|
|» type|adyenChargeCard|
|» type|adyenForPlatformsAdvanced|
|» type|adyenForPlatformsManage|
|» type|adyenFranchisee|
|» type|adyenIssuing|
|» type|adyenPccr|
|» type|directDebit|
|» type|kycOnInvite|

> Example responses

> 200 Response

```json
{
  "id": "LE00000000000000000000001",
  "type": "adyenIssuing",
  "language": "en",
  "document": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==",
  "termsOfServiceDocumentId": "abc123",
  "termsOfServiceDocumentFormat": "JSON"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-terms-of-service-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetTermsOfServiceDocumentResponse](#schemagettermsofservicedocumentresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Accept Terms of Service

<a id="opIdpatch-legalEntities-id-termsOfService-termsofservicedocumentid"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/termsOfService/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "acceptedBy": "LE00000000000000000000002"
  }'
```

`PATCH /legalEntities/{id}/termsOfService/{termsofservicedocumentid}`

Accepts Terms of Service.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Body parameter

```json
{
  "acceptedBy": "LE00000000000000000000002"
}
```

<h3 id="accept-terms-of-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity.<br><br>For sole proprietorships, this is the individual legal entity ID of the owner.<br><br>For organizations, this is the ID of the organization.<br><br>For legal representatives of individuals, this is the ID of the individual.<br><br>|
|termsofservicedocumentid|path|string|true|The unique identifier of the Terms of Service document.|
|body|body|[AcceptTermsOfServiceRequest](#schemaaccepttermsofservicerequest)|false|none|
|» acceptedBy|body|string|true|The legal entity ID of the user accepting the Terms of Service.<br><br>For organizations, this must be the individual legal entity ID of an authorized signatory for the organization.<br><br>For sole proprietorships, this must be the individual legal entity ID of the owner.<br><br>For individuals, this must be the individual legal entity id of either the individual, parent, or guardian.<br><br>|
|» ipAddress|body|string|false|The IP address of the user accepting the Terms of Service.|

> Example responses

> 200 Response

```json
{
  "acceptedBy": "LE00000000000000000000002",
  "id": "TOSA000AB00000000B2AAAB2BA0AA0",
  "language": "en",
  "termsOfServiceDocumentId": "abc123",
  "type": "adyenIssuing"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="accept-terms-of-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[AcceptTermsOfServiceResponse](#schemaaccepttermsofserviceresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get Terms of Service information for a legal entity

<a id="opIdget-legalEntities-id-termsOfServiceAcceptanceInfos"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/termsOfServiceAcceptanceInfos \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /legalEntities/{id}/termsOfServiceAcceptanceInfos`

Returns Terms of Service information for a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="get-terms-of-service-information-for-a-legal-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "acceptedBy": "LE00000000000000000000002",
      "acceptedFor": "LE00000000000000000000001",
      "createdAt": "2022-12-05T13:36:58.212253Z",
      "id": "TOSA000AB00000000B2AAAB2BA0AA0",
      "type": "adyenIssuing"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-terms-of-service-information-for-a-legal-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetTermsOfServiceAcceptanceInfosResponse](#schemagettermsofserviceacceptanceinfosresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get Terms of Service status

<a id="opIdget-legalEntities-id-termsOfServiceStatus"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/termsOfServiceStatus \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /legalEntities/{id}/termsOfServiceStatus`

Returns the required types of Terms of Service that need to be accepted by a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="get-terms-of-service-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.|

> Example responses

> 200 Response

```json
{
  "termsOfServiceTypes": [
    "adyenIssuing"
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-terms-of-service-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CalculateTermsOfServiceStatusResponse](#schemacalculatetermsofservicestatusresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="legal-entity-management-api-pci-questionnaires">PCI questionnaires</h1>

## Get PCI questionnaire details

<a id="opIdget-legalEntities-id-pciQuestionnaires"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/pciQuestionnaires \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /legalEntities/{id}/pciQuestionnaires`

Get a list of signed PCI questionnaires.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="get-pci-questionnaire-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity to get PCI questionnaire information.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "createdAt": "2023-03-02T17:54:19.538365Z",
      "id": "PCID422GZ22322565HHMH48CW63CPH",
      "validUntil": "2024-03-01T17:54:19.538365Z"
    },
    {
      "createdAt": "2023-03-02T17:54:19.538365Z",
      "id": "PCID422GZ22322565HHMH49CW75Z9H",
      "validUntil": "2024-03-01T17:54:19.538365Z"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-pci-questionnaire-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetPciQuestionnaireInfosResponse](#schemagetpciquestionnaireinfosresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Generate PCI questionnaire

<a id="opIdpost-legalEntities-id-pciQuestionnaires-generatePciTemplates"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/pciQuestionnaires/generatePciTemplates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "language": "fr"
  }'
```

`POST /legalEntities/{id}/pciQuestionnaires/generatePciTemplates`

Generates the required PCI questionnaires based on the user's [salesChannel](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__reqParam_salesChannels).

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Body parameter

```json
{
  "language": "fr"
}
```

<h3 id="generate-pci-questionnaire-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity to get PCI questionnaire information.|
|body|body|[GeneratePciDescriptionRequest](#schemageneratepcidescriptionrequest)|false|none|
|» additionalSalesChannels|body|[string]|false|An array of additional sales channels to generate PCI questionnaires. Include the relevant sales channels if you need your user to sign PCI questionnaires. Not required if you [create stores](https://docs.adyen.com/platforms) and [add payment methods](https://docs.adyen.com/adyen-for-platforms-model) before you generate the questionnaires.<br><br>Possible values:<br>*  **eCommerce**<br>*  **pos**<br>*  **ecomMoto**<br>*  **posMoto**<br><br>|
|» language|body|string|false|Sets the language of the PCI questionnaire. Its value is a two-character [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code, for example, **en**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» additionalSalesChannels|eCommerce|
|» additionalSalesChannels|ecomMoto|
|» additionalSalesChannels|pos|
|» additionalSalesChannels|posMoto|

> Example responses

> 200 Response

```json
{
  "content": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==",
  "language": "fr",
  "pciTemplateReferences": [
    "PCIT-T7KC6VGL",
    "PCIT-PKB6DKS4"
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="generate-pci-questionnaire-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GeneratePciDescriptionResponse](#schemageneratepcidescriptionresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Sign PCI questionnaire

<a id="opIdpost-legalEntities-id-pciQuestionnaires-signPciTemplates"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/pciQuestionnaires/signPciTemplates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "signedBy": "LE00000000000000000000002",
    "pciTemplateReferences": [
      "PCIT-T7KC6VGL",
      "PCIT-PKB6DKS4"
    ]
  }'
```

`POST /legalEntities/{id}/pciQuestionnaires/signPciTemplates`

Signs the required PCI questionnaire.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Body parameter

```json
{
  "signedBy": "LE00000000000000000000002",
  "pciTemplateReferences": [
    "PCIT-T7KC6VGL",
    "PCIT-PKB6DKS4"
  ]
}
```

<h3 id="sign-pci-questionnaire-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The legal entity ID of the user that has a contractual relationship with your platform.|
|body|body|[PciSigningRequest](#schemapcisigningrequest)|false|none|
|» pciTemplateReferences|body|[string]|true|The array of Adyen-generated unique identifiers for the questionnaires.|
|» signedBy|body|string|true|The [legal entity ID](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) of the individual who signs the PCI questionnaire.|

> Example responses

> 200 Response

```json
{
  "pciQuestionnaireIds": [
    "PCID422GZ22322565HHMH48CW63CPH",
    "PCID422GZ22322565HHMH49CW75Z9H"
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="sign-pci-questionnaire-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PciSigningResponse](#schemapcisigningresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Calculate PCI status of a legal entity

<a id="opIdpost-legalEntities-id-pciQuestionnaires-signingRequired"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/pciQuestionnaires/signingRequired \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "additionalSalesChannels": [
      "eCommerce"
    ]
  }'
```

`POST /legalEntities/{id}/pciQuestionnaires/signingRequired`

Calculate PCI status of a legal entity.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Body parameter

```json
{
  "additionalSalesChannels": [
    "eCommerce"
  ]
}
```

<h3 id="calculate-pci-status-of-a-legal-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity to calculate PCI status.|
|body|body|[CalculatePciStatusRequest](#schemacalculatepcistatusrequest)|false|none|
|» additionalSalesChannels|body|[string]|false|An array of additional sales channels to generate PCI questionnaires. Include the relevant sales channels if you need your user to sign PCI questionnaires. Not required if you [create stores](https://docs.adyen.com/platforms) and [add payment methods](https://docs.adyen.com/adyen-for-platforms-model) before you generate the questionnaires.<br><br>Possible values:<br>*  **eCommerce**<br>*  **pos**<br>*  **ecomMoto**<br>*  **posMoto**<br><br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» additionalSalesChannels|eCommerce|
|» additionalSalesChannels|ecomMoto|
|» additionalSalesChannels|pos|
|» additionalSalesChannels|posMoto|

> Example responses

> 200 Response

```json
{
  "signingRequired": true
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="calculate-pci-status-of-a-legal-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CalculatePciStatusResponse](#schemacalculatepcistatusresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get PCI questionnaire

<a id="opIdget-legalEntities-id-pciQuestionnaires-pciid"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/pciQuestionnaires/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /legalEntities/{id}/pciQuestionnaires/{pciid}`

Returns the signed PCI questionnaire.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="get-pci-questionnaire-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The legal entity ID of the individual who signed the PCI questionnaire.|
|pciid|path|string|true|The unique identifier of the signed PCI questionnaire.|

> Example responses

> 200 Response

```json
{
  "content": "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==",
  "createdAt": "2023-03-02T17:54:19.538365Z",
  "id": "PCID422GZ22322565HHMH48CW63CPH",
  "validUntil": "2024-03-01T17:54:19.538365Z"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-pci-questionnaire-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetPciQuestionnaireResponse](#schemagetpciquestionnaireresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="legal-entity-management-api-tax-edelivery-consent">Tax eDelivery consent</h1>

## Check the status of consent for electronic delivery of tax forms

<a id="opIdpost-legalEntities-id-checkTaxElectronicDeliveryConsent"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/checkTaxElectronicDeliveryConsent \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /legalEntities/{id}/checkTaxElectronicDeliveryConsent`

Returns the consent status for electronic delivery of tax forms.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="check-the-status-of-consent-for-electronic-delivery-of-tax-forms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.|

> Example responses

> 200 Response

```json
{
  "US1099k": true
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="check-the-status-of-consent-for-electronic-delivery-of-tax-forms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CheckTaxElectronicDeliveryConsentResponse](#schemachecktaxelectronicdeliveryconsentresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Set the consent status for electronic delivery of tax forms

<a id="opIdpost-legalEntities-id-setTaxElectronicDeliveryConsent"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/setTaxElectronicDeliveryConsent \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "US1099k": true
  }'
```

`POST /legalEntities/{id}/setTaxElectronicDeliveryConsent`

Set the consent status for electronic delivery of tax forms.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Body parameter

```json
{
  "US1099k": true
}
```

<h3 id="set-the-consent-status-for-electronic-delivery-of-tax-forms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.|
|body|body|[SetTaxElectronicDeliveryConsentRequest](#schemasettaxelectronicdeliveryconsentrequest)|false|none|
|» US1099k|body|boolean|false|Consent to electronically deliver tax form US1099-K.|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="set-the-consent-status-for-electronic-delivery-of-tax-forms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - look at the actual response code for the status of the request. |None|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="legal-entity-management-api-hosted-onboarding">Hosted Onboarding</h1>

## Get a link to an Adyen-hosted onboarding page

<a id="opIdpost-legalEntities-id-onboardingLinks"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/legalEntities/string/onboardingLinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "themeId": "YOUR_THEME_ID",
    "redirectUrl": "https://your-company.example.com",
    "locale": "nl-NL"
  }'
```

`POST /legalEntities/{id}/onboardingLinks`

Returns a link to an Adyen-hosted onboarding page where you need to redirect your user.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Body parameter

```json
{
  "themeId": "YOUR_THEME_ID",
  "redirectUrl": "https://your-company.example.com",
  "locale": "nl-NL"
}
```

<h3 id="get-a-link-to-an-adyen-hosted-onboarding-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the legal entity|
|body|body|[OnboardingLinkInfo](#schemaonboardinglinkinfo)|false|none|
|» locale|body|string|false|The language that will be used for the page, specified by a combination of two letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language and [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. See possible valuesfor [marketplaces](https://docs.adyen.com/marketplaces/onboard-users/hosted#supported-languages) or [platforms](https://docs.adyen.com/platforms/onboard-users/hosted#supported-languages). <br><br>If not specified in the request or if the language is not supported, the page uses the browser language. If the browser language is not supported, the page uses **en-US** by default.|
|» redirectUrl|body|string|false|The URL where the user is redirected after they complete hosted onboarding.|
|» settings|body|[OnboardingLinkSettings](#schemaonboardinglinksettings)|false|Key-value pairs indicating the settings for the hosted onboarding page. The key represents a specific setting.|
|» themeId|body|string|false|The unique identifier of the hosted onboarding theme.|

> Example responses

> 200 Response

```json
{
  "url": "https://balanceplatform-test.adyen.com/balanceplatform/uo/form/xtl-...?signature=..&cd=..&redirectUrl=https%3A%2F%2Fyour-company.example.com%2F&expiry=1667226404807&locale=nl-NL"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-a-link-to-an-adyen-hosted-onboarding-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[OnboardingLink](#schemaonboardinglink)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get a list of hosted onboarding page themes

<a id="opIdget-themes"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/themes \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /themes`

Returns a list of hosted onboarding page themes.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



> Example responses

> 200 Response

```json
{
  "themes": [
    {
      "description": "Dark colors theme",
      "properties": {
        "supportPage": "https://www.adyen.com/contact",
        "logo": "ONBA422JV223222D5G8VG2T8JV39GV",
        "pageTitle": "Example onboarding dark colors",
        "backgroundColor": "#000000",
        "faqPage": "https://docs.adyen.com/hosted-onboarding-faqs",
        "backgroundImage": "ONBA422KH223222D5G8VG2TG9S5ZBH",
        "pageLayout": "withBackground"
      },
      "createdAt": "2022-01-20T00:00:00+01:00",
      "id": "ONBT422JV223222D5FGJ77B9C52WNN",
      "updatedAt": "2022-08-25T00:00:00+02:00"
    },
    {
      "description": "Light colors theme",
      "properties": {
        "privacyStatementPage": "https://www.adyen.com/legal/terms-and-conditions",
        "supportPage": "https://www.adyen.com/contact",
        "logo": "ONBA422JV223222D5FWC4TK25S3DQW",
        "pageTitle": "Example onboarding light colors",
        "backgroundColor": "#FFFFFF",
        "faqPage": "https://docs.adyen.com/hosted-onboarding-faqs",
        "backgroundImage": "ONBA422JV223222D5G82M96F6P2VTV",
        "pageLayout": "withBackground"
      },
      "createdAt": "2022-06-22T00:00:00+02:00",
      "id": "ONBT422KH223222D5G82M968PB46HR",
      "updatedAt": "2022-08-25T00:00:00+02:00"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-a-list-of-hosted-onboarding-page-themes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[OnboardingThemes](#schemaonboardingthemes)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get an onboarding link theme

<a id="opIdget-themes-id"></a>

> Code samples

```bash
curl https://kyc-test.adyen.com/lem/v4/themes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /themes/{id}`

Returns the details of the theme identified in the path.

Requests to this endpoint are subject to rate limits:

- Live environments: 700 requests per 5 seconds.

- Test environments: 200 requests per 5 seconds.

- Failed requests are subject to a limit of 5 failures per 10 seconds.



<h3 id="get-an-onboarding-link-theme-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the theme|

> Example responses

> 200 Response

```json
{
  "description": "Light colors theme",
  "properties": {
    "privacyStatementPage": "https://www.adyen.com/legal/terms-and-conditions",
    "supportPage": "https://www.adyen.com/contact",
    "logo": "ONBA422JV223222D5FWC4TK25S3DQW",
    "pageTitle": "Example onboarding light colors",
    "backgroundColor": "#FFFFFF",
    "faqPage": "https://docs.adyen.com/hosted-onboarding-faqs",
    "backgroundImage": "ONBA422JV223222D5G82M96F6P2VTV",
    "pageLayout": "withBackground"
  },
  "createdAt": "2022-06-22T00:00:00+02:00",
  "id": "ONBT422KH223222D5G82M968PB46HR",
  "updatedAt": "2022-08-25T00:00:00+02:00"
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="get-an-onboarding-link-theme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[OnboardingTheme](#schemaonboardingtheme)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_AULocalAccountIdentification">AULocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaaulocalaccountidentification"></a>
<a id="schema_AULocalAccountIdentification"></a>
<a id="tocSaulocalaccountidentification"></a>
<a id="tocsaulocalaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "bsbCode": "string",
  "type": "auLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The bank account number, without separators or whitespace.|
|bsbCode|string|true|none|The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.|
|type|string|true|none|**auLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|auLocal|

<h2 id="tocS_AcceptTermsOfServiceRequest">AcceptTermsOfServiceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccepttermsofservicerequest"></a>
<a id="schema_AcceptTermsOfServiceRequest"></a>
<a id="tocSaccepttermsofservicerequest"></a>
<a id="tocsaccepttermsofservicerequest"></a>

```json
{
  "acceptedBy": "string",
  "ipAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedBy|string|true|none|The legal entity ID of the user accepting the Terms of Service.<br><br>For organizations, this must be the individual legal entity ID of an authorized signatory for the organization.<br><br>For sole proprietorships, this must be the individual legal entity ID of the owner.<br><br>For individuals, this must be the individual legal entity id of either the individual, parent, or guardian.<br><br>|
|ipAddress|string|false|none|The IP address of the user accepting the Terms of Service.|

<h2 id="tocS_AcceptTermsOfServiceResponse">AcceptTermsOfServiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccepttermsofserviceresponse"></a>
<a id="schema_AcceptTermsOfServiceResponse"></a>
<a id="tocSaccepttermsofserviceresponse"></a>
<a id="tocsaccepttermsofserviceresponse"></a>

```json
{
  "acceptedBy": "string",
  "id": "string",
  "ipAddress": "string",
  "language": "string",
  "termsOfServiceDocumentId": "string",
  "type": "adyenAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedBy|string|false|none|The unique identifier of the user that accepted the Terms of Service.|
|id|string|false|none|The unique identifier of the Terms of Service acceptance.|
|ipAddress|string|false|none|The IP address of the user that accepted the Terms of Service.|
|language|string|false|none|The language used for the Terms of Service document, specified by the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible value: **en** for English or **fr** for French.<br><br>Note that French is only available for some integration types in certain countries/regions. Reach out to your Adyen contact for more information.|
|termsOfServiceDocumentId|string|false|none|The unique identifier of the Terms of Service document.|
|type|string|false|none|The type of Terms of Service.<br><br>Possible values:<br>*  **adyenForPlatformsManage**<br>*  **adyenIssuing**<br>*  **adyenForPlatformsAdvanced**<br>*  **adyenCapital**<br>*  **adyenCapitalCashAdvance**<br>*  **adyenAccount**<br>*  **adyenCard**<br>*  **adyenFranchisee**<br>*  **adyenPccr**<br>*  **adyenChargeCard**<br>*  **kycOnInvite**<br>*  **directDebit**<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|adyenAccount|
|type|adyenCapital|
|type|adyenCapitalCashAdvance|
|type|adyenCard|
|type|adyenChargeCard|
|type|adyenForPlatformsAdvanced|
|type|adyenForPlatformsManage|
|type|adyenFranchisee|
|type|adyenIssuing|
|type|adyenPccr|
|type|directDebit|
|type|kycOnInvite|

<h2 id="tocS_AdditionalBankIdentification">AdditionalBankIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalbankidentification"></a>
<a id="schema_AdditionalBankIdentification"></a>
<a id="tocSadditionalbankidentification"></a>
<a id="tocsadditionalbankidentification"></a>

```json
{
  "code": "string",
  "type": "auBsbCode"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The value of the additional bank identification.|
|type|string|false|none|The type of additional bank identification, depending on the country.<br><br>Possible values:<br><br> * **auBsbCode**: The 6-digit [Australian Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or spaces.<br> * **caRoutingNumber**: The 9-digit [Canadian routing number](https://en.wikipedia.org/wiki/Routing_number_(Canada)), in EFT format, without separators or spaces.<br> * **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or spaces<br> * **usRoutingNumber**: The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or spaces.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|auBsbCode|
|type|caRoutingNumber|
|type|gbSortCode|
|type|usRoutingNumber|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "city": "string",
  "country": "string",
  "postalCode": "string",
  "stateOrProvince": "string",
  "street": "string",
  "street2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The name of the city. Required if `stateOrProvince` is provided.<br><br>If you specify the city, you must also send `postalCode` and `street`.<br><br>The city name must be at least 3 characters. If the city name contains only repeated characters, the minimum length is two characters. For example, Aa is accepted, but Aaaa is not.<br><br>For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).|
|country|string|true|none|The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.|
|postalCode|string|false|none|The postal code. Required if `stateOrProvince` and/or `city` is provided.<br><br>When using alphanumeric postal codes, all letters must be uppercase. For example, 1234 AB or SW1A 1AA.|
|stateOrProvince|string|false|none|The two-letter ISO 3166-2 state or province code. For example, **CA** in the US. Required for Australia and New Zealand.<br><br>If you specify the state or province, you must also send `city`, `postalCode`, and `street`.|
|street|string|false|none|The name of the street, and the house or building number. Must be at least 3 characters. Required if `stateOrProvince` and/or `city` is provided. For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).|
|street2|string|false|none|The apartment, unit, or suite number.|

<h2 id="tocS_Amount">Amount</h2>
<!-- backwards compatibility -->
<a id="schemaamount"></a>
<a id="schema_Amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
{
  "currency": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The type of currency. Must be EUR (or EUR equivalent)|
|value|integer(int64)|false|none|Total value of amount. Must be >= 0|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "content": "string",
  "contentType": "string",
  "filename": "string",
  "pageName": "string",
  "pageType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|true|none|The document in Base64-encoded string format.|
|contentType|string|false|none|**Deprecated.** The file format.<br><br> Possible values: **application/pdf**, **image/jpg**, **image/jpeg**, **image/png**. |
|filename|string|false|none|**Deprecated.** The name of the file including the file extension.|
|pageName|string|false|none|The name of the file including the file extension.|
|pageType|string|false|none|Specifies which side of the ID card is uploaded.<br><br>* If the `type` is **driversLicense** or **identityCard**, you must set this to **front** or **back** and include both sides in the same API request.<br><br>* For any other types, when this is omitted, we infer the page number based on the order of attachments.|

<h2 id="tocS_BankAccountInfo">BankAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountinfo"></a>
<a id="schema_BankAccountInfo"></a>
<a id="tocSbankaccountinfo"></a>
<a id="tocsbankaccountinfo"></a>

```json
{
  "accountIdentification": {
    "accountNumber": "string",
    "bsbCode": "string",
    "type": "auLocal"
  },
  "accountType": "string",
  "bankName": "string",
  "countryCode": "string",
  "trustedSource": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIdentification|[AULocalAccountIdentification](#schemaaulocalaccountidentification) \| [CALocalAccountIdentification](#schemacalocalaccountidentification) \| [CZLocalAccountIdentification](#schemaczlocalaccountidentification) \| [DKLocalAccountIdentification](#schemadklocalaccountidentification) \| [HKLocalAccountIdentification](#schemahklocalaccountidentification) \| [HULocalAccountIdentification](#schemahulocalaccountidentification) \| [IbanAccountIdentification](#schemaibanaccountidentification) \| [NOLocalAccountIdentification](#schemanolocalaccountidentification) \| [NZLocalAccountIdentification](#schemanzlocalaccountidentification) \| [NumberAndBicAccountIdentification](#schemanumberandbicaccountidentification) \| [PLLocalAccountIdentification](#schemapllocalaccountidentification) \| [SELocalAccountIdentification](#schemaselocalaccountidentification) \| [SGLocalAccountIdentification](#schemasglocalaccountidentification) \| [UKLocalAccountIdentification](#schemauklocalaccountidentification) \| [USLocalAccountIdentification](#schemauslocalaccountidentification)|false|none|Identification of the bank account.|
|accountType|string|false|none|**Deprecated.** The type of bank account.|
|bankName|string|false|none|The name of the banking institution where the bank account is held.|
|countryCode|string|false|none|The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the bank account is registered. For example, **NL**.|
|trustedSource|boolean|false|read-only|Identifies if the bank account was created through [instant bank verification](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-08-hosted-onboarding).|

<h2 id="tocS_BirthData">BirthData</h2>
<!-- backwards compatibility -->
<a id="schemabirthdata"></a>
<a id="schema_BirthData"></a>
<a id="tocSbirthdata"></a>
<a id="tocsbirthdata"></a>

```json
{
  "dateOfBirth": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateOfBirth|string|false|none|The individual's date of birth, in YYYY-MM-DD format.|

<h2 id="tocS_BusinessLine">BusinessLine</h2>
<!-- backwards compatibility -->
<a id="schemabusinessline"></a>
<a id="schema_BusinessLine"></a>
<a id="tocSbusinessline"></a>
<a id="tocsbusinessline"></a>

```json
{
  "id": "string",
  "industryCode": "string",
  "industryCodeDescription": "string",
  "legalEntityId": "string",
  "problems": [
    {
      "entity": {
        "documents": [
          "string"
        ],
        "id": "string",
        "owner": {
          "documents": [
            "string"
          ],
          "id": "string",
          "type": "BankAccount"
        },
        "type": "BankAccount"
      },
      "verificationErrors": [
        {
          "capabilities": [
            "acceptExternalFunding"
          ],
          "code": "string",
          "message": "string",
          "remediatingActions": [
            {
              "code": "string",
              "message": "string"
            }
          ],
          "subErrors": [
            {
              "capabilities": [
                "acceptExternalFunding"
              ],
              "code": "string",
              "message": "string",
              "type": "dataMissing",
              "remediatingActions": [
                {
                  "code": "string",
                  "message": "string"
                }
              ]
            }
          ],
          "type": "dataMissing"
        }
      ]
    }
  ],
  "salesChannels": [
    "string"
  ],
  "service": "paymentProcessing",
  "sourceOfFunds": {
    "adyenProcessedFunds": true,
    "amount": {
      "currency": "string",
      "value": 0
    },
    "assetMonthsHeld": 0,
    "cryptocurrencyExchange": "string",
    "dateOfFundsReceived": "1970-01-01",
    "dateOfSourceEvent": "1970-01-01",
    "description": "string",
    "financiers": [
      {
        "amount": {
          "currency": "string",
          "value": 0
        },
        "firstName": "string",
        "lastName": "string",
        "location": "string"
      }
    ],
    "originatorLegalEntityId": "string",
    "purpose": "string",
    "relationship": "string",
    "type": "business",
    "website": "string"
  },
  "webData": [
    {
      "webAddress": "string",
      "webAddressId": "string"
    }
  ],
  "webDataExemption": {
    "reason": "noOnlinePresence"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|read-only|The unique identifier of the business line.|
|industryCode|string|true|none|A code that represents the industry of the legal entity for [marketplaces](https://docs.adyen.com/marketplaces/verification-requirements/reference-additional-products/#list-industry-codes) or [platforms](https://docs.adyen.com/platforms/verification-requirements/reference-additional-products/#list-industry-codes). For example, **4431A** for computer software stores.|
|industryCodeDescription|string|false|read-only|The description of the industry code.|
|legalEntityId|string|true|none|Unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) that owns the business line.|
|problems|[[CapabilityProblem](#schemacapabilityproblem)]|false|none|The verification errors related to capabilities for this supporting entity.|
|salesChannels|[string]|false|none|A list of channels where goods or services are sold.<br><br>Possible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.<br><br>Required only in combination with the `service` **paymentProcessing**.|
|service|string|true|none|The service for which you are creating the business line.<br><br><br><br>Possible values:<br>*  **paymentProcessing**<br>*  **issuing**<br>*  **banking**<br><br>|
|sourceOfFunds|[SourceOfFunds](#schemasourceoffunds)|false|none|Contains information about the source of your user's funds. Required only if the `service` is **banking** or **issuing**.|
|webData|[[WebData](#schemawebdata)]|false|none|List of website URLs where your user's goods or services are sold. When this is required for a service but your user does not have an online presence, provide the reason in the `webDataExemption` object.|
|webDataExemption|[WebDataExemption](#schemawebdataexemption)|false|none|The reason why the web data is not provided.|

#### Enumerated Values

|Property|Value|
|---|---|
|service|paymentProcessing|
|service|issuing|
|service|banking|

<h2 id="tocS_BusinessLineInfo">BusinessLineInfo</h2>
<!-- backwards compatibility -->
<a id="schemabusinesslineinfo"></a>
<a id="schema_BusinessLineInfo"></a>
<a id="tocSbusinesslineinfo"></a>
<a id="tocsbusinesslineinfo"></a>

```json
{
  "industryCode": "string",
  "industryCodeDescription": "string",
  "legalEntityId": "string",
  "salesChannels": [
    "string"
  ],
  "service": "paymentProcessing",
  "sourceOfFunds": {
    "adyenProcessedFunds": true,
    "amount": {
      "currency": "string",
      "value": 0
    },
    "assetMonthsHeld": 0,
    "cryptocurrencyExchange": "string",
    "dateOfFundsReceived": "1970-01-01",
    "dateOfSourceEvent": "1970-01-01",
    "description": "string",
    "financiers": [
      {
        "amount": {
          "currency": "string",
          "value": 0
        },
        "firstName": "string",
        "lastName": "string",
        "location": "string"
      }
    ],
    "originatorLegalEntityId": "string",
    "purpose": "string",
    "relationship": "string",
    "type": "business",
    "website": "string"
  },
  "webData": [
    {
      "webAddress": "string",
      "webAddressId": "string"
    }
  ],
  "webDataExemption": {
    "reason": "noOnlinePresence"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|industryCode|string|true|none|A code that represents the industry of the legal entity for [marketplaces](https://docs.adyen.com/marketplaces/verification-requirements/reference-additional-products/#list-industry-codes) or [platforms](https://docs.adyen.com/platforms/verification-requirements/reference-additional-products/#list-industry-codes). For example, **4431A** for computer software stores.|
|industryCodeDescription|string|false|read-only|The description of the industry code.|
|legalEntityId|string|true|none|Unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) that owns the business line.|
|salesChannels|[string]|false|none|A list of channels where goods or services are sold.<br><br>Possible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.<br><br>Required only in combination with the `service` **paymentProcessing**.|
|service|string|true|none|The service for which you are creating the business line.<br><br><br><br>Possible values:<br>*  **paymentProcessing**<br>*  **issuing**<br>*  **banking**<br><br>|
|sourceOfFunds|[SourceOfFunds](#schemasourceoffunds)|false|none|Contains information about the source of your user's funds. Required only if the `service` is **banking** or **issuing**.|
|webData|[[WebData](#schemawebdata)]|false|none|List of website URLs where your user's goods or services are sold. When this is required for a service but your user does not have an online presence, provide the reason in the `webDataExemption` object.|
|webDataExemption|[WebDataExemption](#schemawebdataexemption)|false|none|The reason why the web data is not provided.|

#### Enumerated Values

|Property|Value|
|---|---|
|service|paymentProcessing|
|service|issuing|
|service|banking|

<h2 id="tocS_BusinessLineInfoUpdate">BusinessLineInfoUpdate</h2>
<!-- backwards compatibility -->
<a id="schemabusinesslineinfoupdate"></a>
<a id="schema_BusinessLineInfoUpdate"></a>
<a id="tocSbusinesslineinfoupdate"></a>
<a id="tocsbusinesslineinfoupdate"></a>

```json
{
  "industryCode": "string",
  "industryCodeDescription": "string",
  "salesChannels": [
    "string"
  ],
  "sourceOfFunds": {
    "adyenProcessedFunds": true,
    "amount": {
      "currency": "string",
      "value": 0
    },
    "assetMonthsHeld": 0,
    "cryptocurrencyExchange": "string",
    "dateOfFundsReceived": "1970-01-01",
    "dateOfSourceEvent": "1970-01-01",
    "description": "string",
    "financiers": [
      {
        "amount": {
          "currency": "string",
          "value": 0
        },
        "firstName": "string",
        "lastName": "string",
        "location": "string"
      }
    ],
    "originatorLegalEntityId": "string",
    "purpose": "string",
    "relationship": "string",
    "type": "business",
    "website": "string"
  },
  "webData": [
    {
      "webAddress": "string",
      "webAddressId": "string"
    }
  ],
  "webDataExemption": {
    "reason": "noOnlinePresence"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|industryCode|string|false|none|A code that represents the industry of your legal entity. For example, **4431A** for computer software stores.|
|industryCodeDescription|string|false|read-only|The description of the industry code.|
|salesChannels|[string]|false|none|A list of channels where goods or services are sold.<br><br>Possible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.<br><br>Required only in combination with the `service` **paymentProcessing**.|
|sourceOfFunds|[SourceOfFunds](#schemasourceoffunds)|false|none|Contains information about the source of your user's funds. Required only if the `service` is **banking** or **issuing**.|
|webData|[[WebData](#schemawebdata)]|false|none|List of website URLs where your user's goods or services are sold. When this is required for a service but your user does not have an online presence, provide the reason in the `webDataExemption` object.|
|webDataExemption|[WebDataExemption](#schemawebdataexemption)|false|none|The reason why the web data is not provided.|

<h2 id="tocS_BusinessLines">BusinessLines</h2>
<!-- backwards compatibility -->
<a id="schemabusinesslines"></a>
<a id="schema_BusinessLines"></a>
<a id="tocSbusinesslines"></a>
<a id="tocsbusinesslines"></a>

```json
{
  "businessLines": [
    {
      "id": "string",
      "industryCode": "string",
      "industryCodeDescription": "string",
      "legalEntityId": "string",
      "problems": [
        {
          "entity": {
            "documents": [
              "string"
            ],
            "id": "string",
            "owner": {
              "documents": [
                "string"
              ],
              "id": "string",
              "type": "BankAccount"
            },
            "type": "BankAccount"
          },
          "verificationErrors": [
            {
              "capabilities": [
                "acceptExternalFunding"
              ],
              "code": "string",
              "message": "string",
              "remediatingActions": [
                {
                  "code": "string",
                  "message": "string"
                }
              ],
              "subErrors": [
                {
                  "capabilities": [
                    "acceptExternalFunding"
                  ],
                  "code": "string",
                  "message": "string",
                  "type": "dataMissing",
                  "remediatingActions": [
                    {
                      "code": "string",
                      "message": "string"
                    }
                  ]
                }
              ],
              "type": "dataMissing"
            }
          ]
        }
      ],
      "salesChannels": [
        "string"
      ],
      "service": "paymentProcessing",
      "sourceOfFunds": {
        "adyenProcessedFunds": true,
        "amount": {
          "currency": "string",
          "value": 0
        },
        "assetMonthsHeld": 0,
        "cryptocurrencyExchange": "string",
        "dateOfFundsReceived": "1970-01-01",
        "dateOfSourceEvent": "1970-01-01",
        "description": "string",
        "financiers": [
          {
            "amount": {
              "currency": "string",
              "value": 0
            },
            "firstName": "string",
            "lastName": "string",
            "location": "string"
          }
        ],
        "originatorLegalEntityId": "string",
        "purpose": "string",
        "relationship": "string",
        "type": "business",
        "website": "string"
      },
      "webData": [
        {
          "webAddress": "string",
          "webAddressId": "string"
        }
      ],
      "webDataExemption": {
        "reason": "noOnlinePresence"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessLines|[[BusinessLine](#schemabusinessline)]|true|none|List of business lines.|

<h2 id="tocS_CALocalAccountIdentification">CALocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemacalocalaccountidentification"></a>
<a id="schema_CALocalAccountIdentification"></a>
<a id="tocScalocalaccountidentification"></a>
<a id="tocscalocalaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "accountType": "checking",
  "institutionNumber": "str",
  "transitNumber": "strin",
  "type": "caLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 5- to 12-digit bank account number, without separators or whitespace.|
|accountType|string|false|none|The bank account type.<br><br>Possible values: **checking** or **savings**. Defaults to **checking**.|
|institutionNumber|string|true|none|The 3-digit institution number, without separators or whitespace.|
|transitNumber|string|true|none|The 5-digit transit number, without separators or whitespace.|
|type|string|true|none|**caLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|checking|
|accountType|savings|
|type|caLocal|

<h2 id="tocS_CZLocalAccountIdentification">CZLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaczlocalaccountidentification"></a>
<a id="schema_CZLocalAccountIdentification"></a>
<a id="tocSczlocalaccountidentification"></a>
<a id="tocsczlocalaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "bankCode": "stri",
  "type": "czLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 2- to 16-digit bank account number (Číslo účtu) in the following format:<br><br>- The optional prefix (předčíslí).<br><br>- The required second part (základní část) which must be at least two non-zero digits.<br><br>Examples:<br><br>- **19-123457** (with prefix)<br><br>- **123457** (without prefix)<br><br>- **000019-0000123457** (with prefix, normalized)<br><br>- **000000-0000123457** (without prefix, normalized)|
|bankCode|string|true|none|The 4-digit bank code (Kód banky), without separators or whitespace.|
|type|string|true|none|**czLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|czLocal|

<h2 id="tocS_CalculatePciStatusRequest">CalculatePciStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemacalculatepcistatusrequest"></a>
<a id="schema_CalculatePciStatusRequest"></a>
<a id="tocScalculatepcistatusrequest"></a>
<a id="tocscalculatepcistatusrequest"></a>

```json
{
  "additionalSalesChannels": [
    "eCommerce"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalSalesChannels|[string]|false|none|An array of additional sales channels to generate PCI questionnaires. Include the relevant sales channels if you need your user to sign PCI questionnaires. Not required if you [create stores](https://docs.adyen.com/platforms) and [add payment methods](https://docs.adyen.com/adyen-for-platforms-model) before you generate the questionnaires.<br><br>Possible values:<br>*  **eCommerce**<br>*  **pos**<br>*  **ecomMoto**<br>*  **posMoto**<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|additionalSalesChannels|eCommerce|
|additionalSalesChannels|ecomMoto|
|additionalSalesChannels|pos|
|additionalSalesChannels|posMoto|

<h2 id="tocS_CalculatePciStatusResponse">CalculatePciStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemacalculatepcistatusresponse"></a>
<a id="schema_CalculatePciStatusResponse"></a>
<a id="tocScalculatepcistatusresponse"></a>
<a id="tocscalculatepcistatusresponse"></a>

```json
{
  "signingRequired": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signingRequired|boolean|false|none|Indicates if the user is required to sign PCI questionnaires. If **false**, they do not need to sign any questionnaires.|

<h2 id="tocS_CalculateTermsOfServiceStatusResponse">CalculateTermsOfServiceStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemacalculatetermsofservicestatusresponse"></a>
<a id="schema_CalculateTermsOfServiceStatusResponse"></a>
<a id="tocScalculatetermsofservicestatusresponse"></a>
<a id="tocscalculatetermsofservicestatusresponse"></a>

```json
{
  "termsOfServiceTypes": [
    "adyenAccount"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|termsOfServiceTypes|[string]|false|none|The type of Terms of Service that the legal entity needs to accept. If empty, no Terms of Service needs to be accepted.|

#### Enumerated Values

|Property|Value|
|---|---|
|termsOfServiceTypes|adyenAccount|
|termsOfServiceTypes|adyenCapital|
|termsOfServiceTypes|adyenCapitalCashAdvance|
|termsOfServiceTypes|adyenCard|
|termsOfServiceTypes|adyenChargeCard|
|termsOfServiceTypes|adyenForPlatformsAdvanced|
|termsOfServiceTypes|adyenForPlatformsManage|
|termsOfServiceTypes|adyenFranchisee|
|termsOfServiceTypes|adyenIssuing|
|termsOfServiceTypes|adyenPccr|
|termsOfServiceTypes|directDebit|
|termsOfServiceTypes|kycOnInvite|

<h2 id="tocS_CapabilityProblem">CapabilityProblem</h2>
<!-- backwards compatibility -->
<a id="schemacapabilityproblem"></a>
<a id="schema_CapabilityProblem"></a>
<a id="tocScapabilityproblem"></a>
<a id="tocscapabilityproblem"></a>

```json
{
  "entity": {
    "documents": [
      "string"
    ],
    "id": "string",
    "owner": {
      "documents": [
        "string"
      ],
      "id": "string",
      "type": "BankAccount"
    },
    "type": "BankAccount"
  },
  "verificationErrors": [
    {
      "capabilities": [
        "acceptExternalFunding"
      ],
      "code": "string",
      "message": "string",
      "remediatingActions": [
        {
          "code": "string",
          "message": "string"
        }
      ],
      "subErrors": [
        {
          "capabilities": [
            "acceptExternalFunding"
          ],
          "code": "string",
          "message": "string",
          "type": "dataMissing",
          "remediatingActions": [
            {
              "code": "string",
              "message": "string"
            }
          ]
        }
      ],
      "type": "dataMissing"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|[CapabilityProblemEntity](#schemacapabilityproblementity)|false|none|none|
|verificationErrors|[[VerificationError](#schemaverificationerror)]|false|none|none|

<h2 id="tocS_CapabilityProblemEntity">CapabilityProblemEntity</h2>
<!-- backwards compatibility -->
<a id="schemacapabilityproblementity"></a>
<a id="schema_CapabilityProblemEntity"></a>
<a id="tocScapabilityproblementity"></a>
<a id="tocscapabilityproblementity"></a>

```json
{
  "documents": [
    "string"
  ],
  "id": "string",
  "owner": {
    "documents": [
      "string"
    ],
    "id": "string",
    "type": "BankAccount"
  },
  "type": "BankAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|[string]|false|none|List of document IDs corresponding to the verification errors from capabilities.|
|id|string|false|none|none|
|owner|[CapabilityProblemEntity-recursive](#schemacapabilityproblementity-recursive)|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BankAccount|
|type|Document|
|type|LegalEntity|
|type|product|

<h2 id="tocS_CapabilityProblemEntity-recursive">CapabilityProblemEntity-recursive</h2>
<!-- backwards compatibility -->
<a id="schemacapabilityproblementity-recursive"></a>
<a id="schema_CapabilityProblemEntity-recursive"></a>
<a id="tocScapabilityproblementity-recursive"></a>
<a id="tocscapabilityproblementity-recursive"></a>

```json
{
  "documents": [
    "string"
  ],
  "id": "string",
  "type": "BankAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|[string]|false|none|List of document IDs corresponding to the verification errors from capabilities.|
|id|string|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BankAccount|
|type|Document|
|type|LegalEntity|
|type|product|

<h2 id="tocS_CapabilitySettings">CapabilitySettings</h2>
<!-- backwards compatibility -->
<a id="schemacapabilitysettings"></a>
<a id="schema_CapabilitySettings"></a>
<a id="tocScapabilitysettings"></a>
<a id="tocscapabilitysettings"></a>

```json
{
  "amountPerIndustry": {
    "property1": {
      "currency": "string",
      "value": 0
    },
    "property2": {
      "currency": "string",
      "value": 0
    }
  },
  "authorizedCardUsers": true,
  "fundingSource": [
    "credit"
  ],
  "interval": "daily",
  "maxAmount": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountPerIndustry|object|false|none|The maximum amount a card holder can spend per industry.|
|authorizedCardUsers|boolean|false|none|The number of card holders who can use the card.|
|fundingSource|[string]|false|none|The funding source of the card, for example **debit**.|
|interval|string|false|none|The period when the rule conditions apply.|
|maxAmount|[Amount](#schemaamount)|false|none|The maximum amount a card holder can withdraw per day.|

#### Enumerated Values

|Property|Value|
|---|---|
|fundingSource|credit|
|fundingSource|debit|
|fundingSource|prepaid|
|interval|daily|
|interval|monthly|
|interval|weekly|

<h2 id="tocS_CheckTaxElectronicDeliveryConsentResponse">CheckTaxElectronicDeliveryConsentResponse</h2>
<!-- backwards compatibility -->
<a id="schemachecktaxelectronicdeliveryconsentresponse"></a>
<a id="schema_CheckTaxElectronicDeliveryConsentResponse"></a>
<a id="tocSchecktaxelectronicdeliveryconsentresponse"></a>
<a id="tocschecktaxelectronicdeliveryconsentresponse"></a>

```json
{
  "US1099k": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|US1099k|boolean|false|none|Consent to electronically deliver tax form US1099-K.|

<h2 id="tocS_DKLocalAccountIdentification">DKLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemadklocalaccountidentification"></a>
<a id="schema_DKLocalAccountIdentification"></a>
<a id="tocSdklocalaccountidentification"></a>
<a id="tocsdklocalaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "bankCode": "stri",
  "type": "dkLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 4-10 digits bank account number (Kontonummer) (without separators or whitespace).|
|bankCode|string|true|none|The 4-digit bank code (Registreringsnummer) (without separators or whitespace).|
|type|string|true|none|**dkLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|dkLocal|

<h2 id="tocS_DataReviewConfirmationResponse">DataReviewConfirmationResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatareviewconfirmationresponse"></a>
<a id="schema_DataReviewConfirmationResponse"></a>
<a id="tocSdatareviewconfirmationresponse"></a>
<a id="tocsdatareviewconfirmationresponse"></a>

```json
{
  "dataReviewedAt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataReviewedAt|string|false|none|Date when data review was confirmed.|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "attachment": {
    "content": "string",
    "contentType": "string",
    "filename": "string",
    "pageName": "string",
    "pageType": "string"
  },
  "attachments": [
    {
      "content": "string",
      "contentType": "string",
      "filename": "string",
      "pageName": "string",
      "pageType": "string"
    }
  ],
  "creationDate": "1970-01-01T00:00:00Z",
  "description": "string",
  "expiryDate": "string",
  "fileName": "string",
  "id": "string",
  "issuerCountry": "string",
  "issuerState": "string",
  "modificationDate": "1970-01-01T00:00:00Z",
  "number": "string",
  "owner": {
    "id": "string",
    "type": "string"
  },
  "type": "bankStatement"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachment|[Attachment](#schemaattachment)|false|none|**Deprecated.** Object that contains the document.|
|attachments|[[Attachment](#schemaattachment)]|false|none|Array that contains the document. The array supports multiple attachments for uploading different sides or pages of a document.|
|creationDate|string(date-time)|false|read-only|The creation date of the document.|
|description|string|true|none|Your description for the document.|
|expiryDate|string|false|none|**Deprecated.** The expiry date of the document, in YYYY-MM-DD format.|
|fileName|string|false|none|The filename of the document.|
|id|string|false|read-only|The unique identifier of the document.|
|issuerCountry|string|false|none|**Deprecated.** The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**.|
|issuerState|string|false|none|**Deprecated.** The state or province where the document was issued (AU only).|
|modificationDate|string(date-time)|false|read-only|The modification date of the document.|
|number|string|false|none|The number in the document.|
|owner|[OwnerEntity](#schemaownerentity)|false|none|Contains information about the resource that owns the document.|
|type|string|true|none|Type of document, used when providing an ID number or uploading a document. The possible values depend on the legal entity type.<br><br>* For **organization**, the `type` values can be **proofOfAddress**, **registrationDocument**, **vatDocument**, **proofOfOrganizationTaxInfo**, **proofOfOwnership**, **proofOfIndustry**, **proofOfSignatory**, **proofOfDirector**, or **proofOfFundingOrWealthSource**.<br><br>* For **individual**, the `type` values can be **identityCard**, **driversLicense**, **passport**, **liveSelfie**, **proofOfNationalIdNumber**, **proofOfResidency**, **proofOfIndustry**, **proofOfIndividualTaxId**, **proofOfFundingOrWealthSource** or **proofOfRelationship**.<br><br>* For **soleProprietorship**, the `type` values can be **constitutionalDocument**, **proofOfAddress**, or **proofOfIndustry**.<br><br>* For **trust**, the `type` value is **constitutionalDocument**.<br><br>* For **unincorporatedPartnership**, the `type` value is **constitutionalDocument**.<br><br>* Use **bankStatement** to upload documents for a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|bankStatement|
|type|driversLicense|
|type|identityCard|
|type|nationalIdNumber|
|type|passport|
|type|proofOfAddress|
|type|proofOfNationalIdNumber|
|type|proofOfResidency|
|type|registrationDocument|
|type|vatDocument|
|type|proofOfOrganizationTaxInfo|
|type|proofOfIndividualTaxId|
|type|proofOfOwnership|
|type|proofOfSignatory|
|type|liveSelfie|
|type|proofOfIndustry|
|type|constitutionalDocument|
|type|proofOfFundingOrWealthSource|
|type|proofOfRelationship|
|type|proofOfDirector|

<h2 id="tocS_DocumentPage">DocumentPage</h2>
<!-- backwards compatibility -->
<a id="schemadocumentpage"></a>
<a id="schema_DocumentPage"></a>
<a id="tocSdocumentpage"></a>
<a id="tocsdocumentpage"></a>

```json
{
  "pageName": "string",
  "pageNumber": 0,
  "type": "BACK"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageName|string|false|none|none|
|pageNumber|integer(int32)|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BACK|
|type|FRONT|
|type|UNDEFINED|

<h2 id="tocS_DocumentReference">DocumentReference</h2>
<!-- backwards compatibility -->
<a id="schemadocumentreference"></a>
<a id="schema_DocumentReference"></a>
<a id="tocSdocumentreference"></a>
<a id="tocsdocumentreference"></a>

```json
{
  "active": true,
  "description": "string",
  "fileName": "string",
  "id": "string",
  "modificationDate": "1970-01-01T00:00:00Z",
  "pages": [
    {
      "pageName": "string",
      "pageNumber": 0,
      "type": "BACK"
    }
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|Identifies whether the document is active and used for checks.|
|description|string|false|none|Your description for the document.|
|fileName|string|false|none|Document name.|
|id|string|false|none|The unique identifier of the resource.|
|modificationDate|string(date-time)|false|none|The modification date of the document.|
|pages|[[DocumentPage](#schemadocumentpage)]|false|none|List of document pages|
|type|string|false|none|Type of document, used when providing an ID number or uploading a document.|

<h2 id="tocS_EntityReference">EntityReference</h2>
<!-- backwards compatibility -->
<a id="schemaentityreference"></a>
<a id="schema_EntityReference"></a>
<a id="tocSentityreference"></a>
<a id="tocsentityreference"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the resource.|

<h2 id="tocS_FinancialReport">FinancialReport</h2>
<!-- backwards compatibility -->
<a id="schemafinancialreport"></a>
<a id="schema_FinancialReport"></a>
<a id="tocSfinancialreport"></a>
<a id="tocsfinancialreport"></a>

```json
{
  "annualTurnover": "string",
  "balanceSheetTotal": "string",
  "currencyOfFinancialData": "string",
  "dateOfFinancialData": "string",
  "employeeCount": "string",
  "netAssets": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annualTurnover|string|false|none|The annual turnover of the business.|
|balanceSheetTotal|string|false|none|The balance sheet total of the business.|
|currencyOfFinancialData|string|false|none|The currency used for the financial data.|
|dateOfFinancialData|string|false|none|The date the financial data were provided, in YYYY-MM-DD format.|
|employeeCount|string|false|none|The number of employees of the business.|
|netAssets|string|false|none|The net assets of the business.|

<h2 id="tocS_Financier">Financier</h2>
<!-- backwards compatibility -->
<a id="schemafinancier"></a>
<a id="schema_Financier"></a>
<a id="tocSfinancier"></a>
<a id="tocsfinancier"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  },
  "firstName": "string",
  "lastName": "string",
  "location": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The amount of the funds the financier provided.|
|firstName|string|true|none|The financier's first name.|
|lastName|string|true|none|The financier's last name.|
|location|string|true|none|The city and country/region where the financier is currently located. For example: Chicago, USA|

<h2 id="tocS_GeneratePciDescriptionRequest">GeneratePciDescriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemageneratepcidescriptionrequest"></a>
<a id="schema_GeneratePciDescriptionRequest"></a>
<a id="tocSgeneratepcidescriptionrequest"></a>
<a id="tocsgeneratepcidescriptionrequest"></a>

```json
{
  "additionalSalesChannels": [
    "eCommerce"
  ],
  "language": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalSalesChannels|[string]|false|none|An array of additional sales channels to generate PCI questionnaires. Include the relevant sales channels if you need your user to sign PCI questionnaires. Not required if you [create stores](https://docs.adyen.com/platforms) and [add payment methods](https://docs.adyen.com/adyen-for-platforms-model) before you generate the questionnaires.<br><br>Possible values:<br>*  **eCommerce**<br>*  **pos**<br>*  **ecomMoto**<br>*  **posMoto**<br><br>|
|language|string|false|none|Sets the language of the PCI questionnaire. Its value is a two-character [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code, for example, **en**.|

#### Enumerated Values

|Property|Value|
|---|---|
|additionalSalesChannels|eCommerce|
|additionalSalesChannels|ecomMoto|
|additionalSalesChannels|pos|
|additionalSalesChannels|posMoto|

<h2 id="tocS_GeneratePciDescriptionResponse">GeneratePciDescriptionResponse</h2>
<!-- backwards compatibility -->
<a id="schemageneratepcidescriptionresponse"></a>
<a id="schema_GeneratePciDescriptionResponse"></a>
<a id="tocSgeneratepcidescriptionresponse"></a>
<a id="tocsgeneratepcidescriptionresponse"></a>

```json
{
  "content": "string",
  "language": "string",
  "pciTemplateReferences": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|The generated questionnaires in a base64 encoded format.|
|language|string|false|none|The two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code for the questionnaire. For example, **en**.|
|pciTemplateReferences|[string]|false|none|The array of Adyen-generated unique identifiers for the questionnaires. If empty, the user is not required to sign questionnaires.|

<h2 id="tocS_GetAcceptedTermsOfServiceDocumentResponse">GetAcceptedTermsOfServiceDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetacceptedtermsofservicedocumentresponse"></a>
<a id="schema_GetAcceptedTermsOfServiceDocumentResponse"></a>
<a id="tocSgetacceptedtermsofservicedocumentresponse"></a>
<a id="tocsgetacceptedtermsofservicedocumentresponse"></a>

```json
{
  "document": "string",
  "id": "string",
  "termsOfServiceAcceptanceReference": "string",
  "termsOfServiceDocumentFormat": "JSON"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|string(byte)|false|none|The accepted Terms of Service document in the requested format represented as a Base64-encoded bytes array.|
|id|string|false|none|The unique identifier of the legal entity.|
|termsOfServiceAcceptanceReference|string|false|none|An Adyen-generated reference for the accepted Terms of Service.|
|termsOfServiceDocumentFormat|string|false|none|The format of the Terms of Service document.|

#### Enumerated Values

|Property|Value|
|---|---|
|termsOfServiceDocumentFormat|JSON|
|termsOfServiceDocumentFormat|PDF|
|termsOfServiceDocumentFormat|TXT|

<h2 id="tocS_GetPciQuestionnaireInfosResponse">GetPciQuestionnaireInfosResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpciquestionnaireinfosresponse"></a>
<a id="schema_GetPciQuestionnaireInfosResponse"></a>
<a id="tocSgetpciquestionnaireinfosresponse"></a>
<a id="tocsgetpciquestionnaireinfosresponse"></a>

```json
{
  "data": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "id": "string",
      "validUntil": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[PciDocumentInfo](#schemapcidocumentinfo)]|false|none|Information about the signed PCI questionnaires.|

<h2 id="tocS_GetPciQuestionnaireResponse">GetPciQuestionnaireResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpciquestionnaireresponse"></a>
<a id="schema_GetPciQuestionnaireResponse"></a>
<a id="tocSgetpciquestionnaireresponse"></a>
<a id="tocsgetpciquestionnaireresponse"></a>

```json
{
  "content": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "validUntil": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|The generated questionnaire in a base64 encoded format.|
|createdAt|string(date-time)|false|none|The date the questionnaire was created, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00|
|id|string|false|none|The unique identifier of the signed questionnaire.|
|validUntil|string(date-time)|false|none|The expiration date of the questionnaire, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00|

<h2 id="tocS_GetTermsOfServiceAcceptanceInfosResponse">GetTermsOfServiceAcceptanceInfosResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettermsofserviceacceptanceinfosresponse"></a>
<a id="schema_GetTermsOfServiceAcceptanceInfosResponse"></a>
<a id="tocSgettermsofserviceacceptanceinfosresponse"></a>
<a id="tocsgettermsofserviceacceptanceinfosresponse"></a>

```json
{
  "data": [
    {
      "acceptedBy": "string",
      "acceptedFor": "string",
      "createdAt": "1970-01-01T00:00:00Z",
      "id": "string",
      "type": "adyenAccount",
      "validTo": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[TermsOfServiceAcceptanceInfo](#schematermsofserviceacceptanceinfo)]|false|none|The Terms of Service acceptance information.|

<h2 id="tocS_GetTermsOfServiceDocumentRequest">GetTermsOfServiceDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettermsofservicedocumentrequest"></a>
<a id="schema_GetTermsOfServiceDocumentRequest"></a>
<a id="tocSgettermsofservicedocumentrequest"></a>
<a id="tocsgettermsofservicedocumentrequest"></a>

```json
{
  "language": "string",
  "termsOfServiceDocumentFormat": "string",
  "type": "adyenAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|string|true|none|The language to be used for the Terms of Service document, specified by the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible values: **en** for English or **fr** for French.|
|termsOfServiceDocumentFormat|string|false|none|The requested format for the Terms of Service document. Default value: JSON. Possible values: **JSON**, **PDF**, or **TXT**.|
|type|string|true|none|The type of Terms of Service.<br><br>Possible values:<br>*  **adyenForPlatformsManage**<br>*  **adyenIssuing**<br>*  **adyenForPlatformsAdvanced**<br>*  **adyenCapital**<br>*  **adyenCapitalCashAdvance**<br>*  **adyenAccount**<br>*  **adyenCard**<br>*  **adyenFranchisee**<br>*  **adyenPccr**<br>*  **adyenChargeCard**<br>*  **kycOnInvite**<br>*  **directDebit**<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|adyenAccount|
|type|adyenCapital|
|type|adyenCapitalCashAdvance|
|type|adyenCard|
|type|adyenChargeCard|
|type|adyenForPlatformsAdvanced|
|type|adyenForPlatformsManage|
|type|adyenFranchisee|
|type|adyenIssuing|
|type|adyenPccr|
|type|directDebit|
|type|kycOnInvite|

<h2 id="tocS_GetTermsOfServiceDocumentResponse">GetTermsOfServiceDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettermsofservicedocumentresponse"></a>
<a id="schema_GetTermsOfServiceDocumentResponse"></a>
<a id="tocSgettermsofservicedocumentresponse"></a>
<a id="tocsgettermsofservicedocumentresponse"></a>

```json
{
  "document": "string",
  "id": "string",
  "language": "string",
  "termsOfServiceDocumentFormat": "string",
  "termsOfServiceDocumentId": "string",
  "type": "adyenAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|string(byte)|false|none|The Terms of Service document in Base64-encoded format.|
|id|string|false|none|The unique identifier of the legal entity.|
|language|string|false|none|The language used for the Terms of Service document, specified by the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible value: **en** for English or **fr** for French.<br><br>Note that French is only available for some integration types in certain countries/regions. Reach out to your Adyen contact for more information.|
|termsOfServiceDocumentFormat|string|false|none|The format of the Terms of Service document.|
|termsOfServiceDocumentId|string|false|none|The unique identifier of the Terms of Service document.|
|type|string|false|none|The type of Terms of Service.<br><br>Possible values:<br>*  **adyenForPlatformsManage**<br>*  **adyenIssuing**<br>*  **adyenForPlatformsAdvanced**<br>*  **adyenCapital**<br>*  **adyenCapitalCashAdvance**<br>*  **adyenAccount**<br>*  **adyenCard**<br>*  **adyenFranchisee**<br>*  **adyenPccr**<br>*  **adyenChargeCard**<br>*  **kycOnInvite**<br>*  **directDebit**<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|adyenAccount|
|type|adyenCapital|
|type|adyenCapitalCashAdvance|
|type|adyenCard|
|type|adyenChargeCard|
|type|adyenForPlatformsAdvanced|
|type|adyenForPlatformsManage|
|type|adyenFranchisee|
|type|adyenIssuing|
|type|adyenPccr|
|type|directDebit|
|type|kycOnInvite|

<h2 id="tocS_HKLocalAccountIdentification">HKLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemahklocalaccountidentification"></a>
<a id="schema_HKLocalAccountIdentification"></a>
<a id="tocShklocalaccountidentification"></a>
<a id="tocshklocalaccountidentification"></a>

```json
{
  "accountNumber": "stringstr",
  "clearingCode": "str",
  "type": "hkLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 9- to 17-digit bank account number, without separators or whitespace. Starts with the 3-digit branch code.|
|clearingCode|string|true|none|The 3-digit clearing code, without separators or whitespace.|
|type|string|true|none|**hkLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|hkLocal|

<h2 id="tocS_HULocalAccountIdentification">HULocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemahulocalaccountidentification"></a>
<a id="schema_HULocalAccountIdentification"></a>
<a id="tocShulocalaccountidentification"></a>
<a id="tocshulocalaccountidentification"></a>

```json
{
  "accountNumber": "stringstringstringstring",
  "type": "huLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 24-digit bank account number, without separators or whitespace.|
|type|string|true|none|**huLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|huLocal|

<h2 id="tocS_IbanAccountIdentification">IbanAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaibanaccountidentification"></a>
<a id="schema_IbanAccountIdentification"></a>
<a id="tocSibanaccountidentification"></a>
<a id="tocsibanaccountidentification"></a>

```json
{
  "bic": "string",
  "iban": "string",
  "type": "iban"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bic|string|false|none|The bank's 8- or 11-character BIC or SWIFT code.|
|iban|string|true|none|The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.|
|type|string|true|none|**iban**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|iban|

<h2 id="tocS_IdentificationData">IdentificationData</h2>
<!-- backwards compatibility -->
<a id="schemaidentificationdata"></a>
<a id="schema_IdentificationData"></a>
<a id="tocSidentificationdata"></a>
<a id="tocsidentificationdata"></a>

```json
{
  "cardNumber": "string",
  "expiryDate": "string",
  "issuerCountry": "string",
  "issuerState": "string",
  "nationalIdExempt": true,
  "number": "string",
  "type": "nationalIdNumber"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardNumber|string|false|none|The card number of the document that was issued (AU only).|
|expiryDate|string|false|none|The expiry date of the document, in YYYY-MM-DD format.|
|issuerCountry|string|false|none|**Deprecated.** The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**.|
|issuerState|string|false|none|The state or province where the document was issued (AU only).|
|nationalIdExempt|boolean|false|none|Applies only to individuals in the US. Set to **true** if the individual does not have an SSN. To verify their identity, Adyen will require them to upload an ID document.|
|number|string|false|none|The number in the document.|
|type|string|true|none|Type of identity data. For individuals, the following types are supported. See our [onboarding guide](https://docs.adyen.com/platforms/onboard-users/onboarding-steps/?onboarding_type=custom) for other supported countries.<br><br>- Australia: **driversLicense**, **passport**<br><br>- Hong Kong: **driversLicense**, **nationalIdNumber**, **passport**<br><br>- New Zealand: **driversLicense**, **passport**<br><br>- Singapore: **driversLicense**, **nationalIdNumber**, **passport** <br><br>- All other supported countries: **nationalIdNumber**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|nationalIdNumber|
|type|passport|
|type|driversLicense|
|type|identityCard|

<h2 id="tocS_Individual">Individual</h2>
<!-- backwards compatibility -->
<a id="schemaindividual"></a>
<a id="schema_Individual"></a>
<a id="tocSindividual"></a>
<a id="tocsindividual"></a>

```json
{
  "birthData": {
    "dateOfBirth": "string"
  },
  "email": "string",
  "identificationData": {
    "cardNumber": "string",
    "expiryDate": "string",
    "issuerCountry": "string",
    "issuerState": "string",
    "nationalIdExempt": true,
    "number": "string",
    "type": "nationalIdNumber"
  },
  "name": {
    "firstName": "string",
    "infix": "string",
    "lastName": "string"
  },
  "nationality": "string",
  "phone": {
    "number": "string",
    "phoneCountryCode": "string",
    "type": "string"
  },
  "residentialAddress": {
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string",
    "street2": "string"
  },
  "support": {
    "email": "string",
    "phone": {
      "number": "string",
      "phoneCountryCode": "string",
      "type": "string"
    }
  },
  "taxInformation": [
    {
      "country": "st",
      "number": "string",
      "numberAbsent": true,
      "type": "string"
    }
  ],
  "webData": {
    "webAddress": "string",
    "webAddressId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|birthData|[BirthData](#schemabirthdata)|false|none|The individual's birth information.|
|email|string|false|none|The email address of the legal entity.|
|identificationData|[IdentificationData](#schemaidentificationdata)|false|none|Information about the individual's identification document.|
|name|[Name](#schemaname)|true|none|The individual's name. The combined length of `firstName` and `lastName` must be at least 3 characters.<br><br>Only **-**, **—**, **.**, **/** are allowed as special characters.<br><br>For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).|
|nationality|string|false|none|The individual's nationality.|
|phone|[PhoneNumber](#schemaphonenumber)|false|none|The phone number of the legal entity.|
|residentialAddress|[Address](#schemaaddress)|true|none|The residential address of the individual. Individuals cannot use a PO box as their residential address.<br><br>Address fields cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious values** such as **John Doe** or **N/A**. All parts of the address must be different. For example, Spain, Spain, Spain is not allowed.<br><br>For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).|
|support|[Support](#schemasupport)|false|none|Support information for the legal entity. Required if you have a platform setup.|
|taxInformation|[[TaxInformation](#schemataxinformation)]|false|none|The tax information of the individual.|
|webData|[WebData](#schemawebdata)|false|none|**Deprecated.** The website and app URL of the legal entity.|

<h2 id="tocS_LegalEntity">LegalEntity</h2>
<!-- backwards compatibility -->
<a id="schemalegalentity"></a>
<a id="schema_LegalEntity"></a>
<a id="tocSlegalentity"></a>
<a id="tocslegalentity"></a>

```json
{
  "capabilities": {
    "property1": {
      "allowed": true,
      "allowedLevel": "high",
      "allowedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "requested": true,
      "requestedLevel": "high",
      "requestedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "transferInstruments": [
        {
          "allowed": true,
          "id": "string",
          "requested": true,
          "verificationStatus": "string"
        }
      ],
      "verificationStatus": "string"
    },
    "property2": {
      "allowed": true,
      "allowedLevel": "high",
      "allowedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "requested": true,
      "requestedLevel": "high",
      "requestedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "transferInstruments": [
        {
          "allowed": true,
          "id": "string",
          "requested": true,
          "verificationStatus": "string"
        }
      ],
      "verificationStatus": "string"
    }
  },
  "documentDetails": [
    {
      "active": true,
      "description": "string",
      "fileName": "string",
      "id": "string",
      "modificationDate": "1970-01-01T00:00:00Z",
      "pages": [
        {
          "pageName": "string",
          "pageNumber": 0,
          "type": "BACK"
        }
      ],
      "type": "string"
    }
  ],
  "documents": [
    {
      "id": "string"
    }
  ],
  "entityAssociations": [
    {
      "associatorId": "string",
      "entityType": "string",
      "jobTitle": "string",
      "legalEntityId": "string",
      "name": "string",
      "nominee": true,
      "relationship": "string",
      "settlorExemptionReason": [
        "string"
      ],
      "type": "definedBeneficiary"
    }
  ],
  "id": "string",
  "individual": {
    "birthData": {
      "dateOfBirth": "string"
    },
    "email": "string",
    "identificationData": {
      "cardNumber": "string",
      "expiryDate": "string",
      "issuerCountry": "string",
      "issuerState": "string",
      "nationalIdExempt": true,
      "number": "string",
      "type": "nationalIdNumber"
    },
    "name": {
      "firstName": "string",
      "infix": "string",
      "lastName": "string"
    },
    "nationality": "string",
    "phone": {
      "number": "string",
      "phoneCountryCode": "string",
      "type": "string"
    },
    "residentialAddress": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "support": {
      "email": "string",
      "phone": {
        "number": "string",
        "phoneCountryCode": "string",
        "type": "string"
      }
    },
    "taxInformation": [
      {
        "country": "st",
        "number": "string",
        "numberAbsent": true,
        "type": "string"
      }
    ],
    "webData": {
      "webAddress": "string",
      "webAddressId": "string"
    }
  },
  "organization": {
    "countryOfGoverningLaw": "string",
    "dateOfIncorporation": "string",
    "dateOfInitiationOfLegalProceeding": "string",
    "description": "string",
    "doingBusinessAs": "string",
    "doingBusinessAsAbsent": true,
    "economicSector": "string",
    "email": "string",
    "financialReports": [
      {
        "annualTurnover": "string",
        "balanceSheetTotal": "string",
        "currencyOfFinancialData": "string",
        "dateOfFinancialData": "string",
        "employeeCount": "string",
        "netAssets": "string"
      }
    ],
    "globalLegalEntityIdentifier": "string",
    "headOfficeIndicator": true,
    "institutionalSector": "nonFinancialCorporation",
    "legalForm": "string",
    "legalName": "string",
    "phone": {
      "number": "string",
      "phoneCountryCode": "string",
      "type": "string"
    },
    "principalPlaceOfBusiness": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registeredAddress": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registrationNumber": "string",
    "registrationNumberAbsent": true,
    "residentialAddressIndicator": true,
    "statusOfLegalProceeding": "noLegalActionsTaken",
    "stockData": {
      "marketIdentifier": "string",
      "stockNumber": "string",
      "tickerSymbol": "string"
    },
    "support": {
      "email": "string",
      "phone": {
        "number": "string",
        "phoneCountryCode": "string",
        "type": "string"
      }
    },
    "taxInformation": [
      {
        "country": "st",
        "number": "string",
        "numberAbsent": true,
        "type": "string"
      }
    ],
    "taxReportingClassification": {
      "businessType": "other",
      "financialInstitutionNumber": "string",
      "mainSourceOfIncome": "businessOperation",
      "type": "nonFinancialNonReportable"
    },
    "type": "associationIncorporated",
    "vatAbsenceReason": "industryExemption",
    "vatNumber": "string",
    "webData": {
      "webAddress": "string",
      "webAddressId": "string"
    }
  },
  "problems": [
    {
      "entity": {
        "documents": [
          "string"
        ],
        "id": "string",
        "owner": {
          "documents": [
            "string"
          ],
          "id": "string",
          "type": "BankAccount"
        },
        "type": "BankAccount"
      },
      "verificationErrors": [
        {
          "capabilities": [
            "acceptExternalFunding"
          ],
          "code": "string",
          "message": "string",
          "remediatingActions": [
            {
              "code": "string",
              "message": "string"
            }
          ],
          "subErrors": [
            {
              "capabilities": [
                "acceptExternalFunding"
              ],
              "code": "string",
              "message": "string",
              "type": "dataMissing",
              "remediatingActions": [
                {
                  "code": "string",
                  "message": "string"
                }
              ]
            }
          ],
          "type": "dataMissing"
        }
      ]
    }
  ],
  "reference": "string",
  "soleProprietorship": {
    "countryOfGoverningLaw": "string",
    "dateOfIncorporation": "string",
    "doingBusinessAs": "string",
    "doingBusinessAsAbsent": true,
    "financialReports": [
      {
        "annualTurnover": "string",
        "balanceSheetTotal": "string",
        "currencyOfFinancialData": "string",
        "dateOfFinancialData": "string",
        "employeeCount": "string",
        "netAssets": "string"
      }
    ],
    "name": "string",
    "principalPlaceOfBusiness": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registeredAddress": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registrationNumber": "string",
    "residentialAddressIndicator": true,
    "taxAbsent": true,
    "taxInformation": [
      {
        "country": "st",
        "number": "string",
        "numberAbsent": true,
        "type": "string"
      }
    ],
    "vatAbsenceReason": "industryExemption",
    "vatNumber": "string"
  },
  "transferInstruments": [
    {
      "accountIdentifier": "string",
      "id": "string",
      "realLastFour": "string",
      "trustedSource": true
    }
  ],
  "trust": {
    "countryOfGoverningLaw": "string",
    "dateOfIncorporation": "string",
    "description": "string",
    "doingBusinessAs": "string",
    "doingBusinessAsAbsent": true,
    "name": "string",
    "principalPlaceOfBusiness": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registeredAddress": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registrationNumber": "string",
    "residentialAddressIndicator": true,
    "taxInformation": [
      {
        "country": "st",
        "number": "string",
        "numberAbsent": true,
        "type": "string"
      }
    ],
    "type": "businessTrust",
    "undefinedBeneficiaryInfo": [
      {
        "description": "string",
        "reference": "string"
      }
    ],
    "vatAbsenceReason": "industryExemption",
    "vatNumber": "string"
  },
  "type": "individual",
  "unincorporatedPartnership": {
    "countryOfGoverningLaw": "string",
    "dateOfIncorporation": "string",
    "description": "string",
    "doingBusinessAs": "string",
    "doingBusinessAsAbsent": true,
    "name": "string",
    "principalPlaceOfBusiness": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registeredAddress": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registrationNumber": "string",
    "residentialAddressIndicator": true,
    "taxInformation": [
      {
        "country": "st",
        "number": "string",
        "numberAbsent": true,
        "type": "string"
      }
    ],
    "type": "limitedPartnership",
    "vatAbsenceReason": "industryExemption",
    "vatNumber": "string"
  },
  "verificationDeadlines": [
    {
      "capabilities": [
        "acceptExternalFunding"
      ],
      "entityIds": [
        "string"
      ],
      "expiresAt": "1970-01-01T00:00:00Z"
    }
  ],
  "verificationPlan": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|object|false|none|Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.|
|documentDetails|[[DocumentReference](#schemadocumentreference)]|false|none|List of documents uploaded for the legal entity.|
|documents|[[EntityReference](#schemaentityreference)]|false|none|**Deprecated.** List of documents uploaded for the legal entity.|
|entityAssociations|[[LegalEntityAssociation](#schemalegalentityassociation)]|false|none|List of legal entities associated with the current legal entity.<br>For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.|
|id|string|true|read-only|The unique identifier of the legal entity.|
|individual|[Individual](#schemaindividual)|false|none|Information about the individual. Required if `type` is **individual**.|
|organization|[Organization](#schemaorganization)|false|none|Information about the organization. Required if `type` is **organization**.|
|problems|[[CapabilityProblem](#schemacapabilityproblem)]|false|none|List of verification errors related to capabilities for the legal entity.|
|reference|string|false|none|Your reference for the legal entity, maximum 150 characters.|
|soleProprietorship|[SoleProprietorship](#schemasoleproprietorship)|false|none|Information about the sole proprietorship. Required if `type` is **soleProprietorship**.|
|transferInstruments|[[TransferInstrumentReference](#schematransferinstrumentreference)]|false|read-only|List of transfer instruments that the legal entity owns.|
|trust|[Trust](#schematrust)|false|none|Information about the trust. Required if `type` is **trust**.|
|type|string|false|none|The type of legal entity.<br><br>Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**.|
|unincorporatedPartnership|[UnincorporatedPartnership](#schemaunincorporatedpartnership)|false|none|Information about the unincorporated partnership. Required if `type` is **unincorporatedPartnership**.|
|verificationDeadlines|[[VerificationDeadline](#schemaverificationdeadline)]|false|read-only|List of verification deadlines and the capabilities that will be disallowed if verification errors are not resolved.|
|verificationPlan|string|false|none|A key-value pair that specifies the verification process for a legal entity. Set to **upfront** for upfront verification for [marketplaces](https://docs.adyen.com/marketplaces/verification-overview/verification-types/#upfront-verification).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|individual|
|type|organization|
|type|soleProprietorship|
|type|trust|
|type|unincorporatedPartnership|

<h2 id="tocS_LegalEntityAssociation">LegalEntityAssociation</h2>
<!-- backwards compatibility -->
<a id="schemalegalentityassociation"></a>
<a id="schema_LegalEntityAssociation"></a>
<a id="tocSlegalentityassociation"></a>
<a id="tocslegalentityassociation"></a>

```json
{
  "associatorId": "string",
  "entityType": "string",
  "jobTitle": "string",
  "legalEntityId": "string",
  "name": "string",
  "nominee": true,
  "relationship": "string",
  "settlorExemptionReason": [
    "string"
  ],
  "type": "definedBeneficiary"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatorId|string|false|read-only|The unique identifier of another legal entity with which the `legalEntityId` is associated. When the `legalEntityId` is associated to legal entities other than the current one, the response returns all the associations.|
|entityType|string|false|read-only|The legal entity type of associated legal entity.<br><br>For example, **organization**, **soleProprietorship** or **individual**.|
|jobTitle|string|false|none|The individual's job title if the `type` is **uboThroughControl** or **signatory**.|
|legalEntityId|string|true|none|The unique identifier of the associated [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id).|
|name|string|false|read-only|The name of the associated [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id).<br><br>- For **individual**, `name.firstName` and `name.lastName`.<br>- For **organization**, `legalName`.<br>- For **soleProprietorship**, `name`.|
|nominee|boolean|false|none|Default value: **false**<br>Set to **true** if the entity association `type` **director**, **secondaryPartner** or **shareholder** is also a nominee. Only applicable to New Zealand.|
|relationship|string|false|none|The individual's relationship to a legal representative if the `type` is **legalRepresentative**. Possible values: **parent**, **guardian**.|
|settlorExemptionReason|[string]|false|none|Defines the KYC exemption reason for a settlor associated with a trust. Only applicable to trusts in Australia.<br><br>For example, **professionalServiceProvider**, **deceased**, or **contributionBelowThreshold**.|
|type|string|true|none|Defines the relationship of the legal entity to the current legal entity.<br><br>Possible value for individuals: **legalRepresentative**.<br><br>Possible values for organizations: **director**, **signatory**, **trustOwnership**, **uboThroughOwnership**, **uboThroughControl**, **ultimateParentCompany**, or **immediateParentCompany**.<br><br>Possible values for sole proprietorships: **soleProprietorship**.<br><br>Possible value for trusts: **trust**.<br><br>Possible values for trust members: **definedBeneficiary**, **protector**, **secondaryTrustee**, **settlor**, **uboThroughControl**, or **uboThroughOwnership**.<br><br>Possible value for unincorporated partnership: **unincorporatedPartnership**.<br><br>Possible values for unincorporated partnership members: **secondaryPartner**, **uboThroughControl**, **uboThroughOwnership**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|definedBeneficiary|
|type|director|
|type|immediateParentCompany|
|type|legalRepresentative|
|type|pciSignatory|
|type|protector|
|type|secondaryPartner|
|type|secondaryTrustee|
|type|settlor|
|type|signatory|
|type|soleProprietorship|
|type|trust|
|type|trustOwnership|
|type|uboThroughControl|
|type|uboThroughOwnership|
|type|ultimateParentCompany|
|type|undefinedBeneficiary|
|type|unincorporatedPartnership|

<h2 id="tocS_LegalEntityCapability">LegalEntityCapability</h2>
<!-- backwards compatibility -->
<a id="schemalegalentitycapability"></a>
<a id="schema_LegalEntityCapability"></a>
<a id="tocSlegalentitycapability"></a>
<a id="tocslegalentitycapability"></a>

```json
{
  "allowed": true,
  "allowedLevel": "high",
  "allowedSettings": {
    "amountPerIndustry": {
      "property1": {
        "currency": "string",
        "value": 0
      },
      "property2": {
        "currency": "string",
        "value": 0
      }
    },
    "authorizedCardUsers": true,
    "fundingSource": [
      "credit"
    ],
    "interval": "daily",
    "maxAmount": {
      "currency": "string",
      "value": 0
    }
  },
  "requested": true,
  "requestedLevel": "high",
  "requestedSettings": {
    "amountPerIndustry": {
      "property1": {
        "currency": "string",
        "value": 0
      },
      "property2": {
        "currency": "string",
        "value": 0
      }
    },
    "authorizedCardUsers": true,
    "fundingSource": [
      "credit"
    ],
    "interval": "daily",
    "maxAmount": {
      "currency": "string",
      "value": 0
    }
  },
  "transferInstruments": [
    {
      "allowed": true,
      "id": "string",
      "requested": true,
      "verificationStatus": "string"
    }
  ],
  "verificationStatus": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|read-only|Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful.|
|allowedLevel|string|false|read-only|The capability level that is allowed for the legal entity.<br><br>Possible values: **notApplicable**, **low**, **medium**, **high**.|
|allowedSettings|[CapabilitySettings](#schemacapabilitysettings)|false|none|The settings that are allowed for the legal entity.|
|requested|boolean|false|read-only|Indicates whether the capability is requested. To check whether the legal entity is permitted to use the capability, refer to the `allowed` field.|
|requestedLevel|string|false|read-only|The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.<br><br>Possible values: **notApplicable**, **low**, **medium**, **high**.|
|requestedSettings|[CapabilitySettings](#schemacapabilitysettings)|false|none|The settings that are requested for the legal entity.|
|transferInstruments|[[SupportingEntityCapability](#schemasupportingentitycapability)]|false|read-only|The capability status of transfer instruments associated with the legal entity.|
|verificationStatus|string|false|read-only|The status of the verification checks for the capability.<br><br>Possible values:<br><br>* **pending**: Adyen is running the verification.<br><br>* **invalid**: The verification failed. Check if the `errors` array contains more information.<br><br>* **valid**: The verification has been successfully completed.<br><br>* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|allowedLevel|high|
|allowedLevel|low|
|allowedLevel|medium|
|allowedLevel|notApplicable|
|requestedLevel|high|
|requestedLevel|low|
|requestedLevel|medium|
|requestedLevel|notApplicable|

<h2 id="tocS_LegalEntityInfo">LegalEntityInfo</h2>
<!-- backwards compatibility -->
<a id="schemalegalentityinfo"></a>
<a id="schema_LegalEntityInfo"></a>
<a id="tocSlegalentityinfo"></a>
<a id="tocslegalentityinfo"></a>

```json
{
  "capabilities": {
    "property1": {
      "allowed": true,
      "allowedLevel": "high",
      "allowedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "requested": true,
      "requestedLevel": "high",
      "requestedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "transferInstruments": [
        {
          "allowed": true,
          "id": "string",
          "requested": true,
          "verificationStatus": "string"
        }
      ],
      "verificationStatus": "string"
    },
    "property2": {
      "allowed": true,
      "allowedLevel": "high",
      "allowedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "requested": true,
      "requestedLevel": "high",
      "requestedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "transferInstruments": [
        {
          "allowed": true,
          "id": "string",
          "requested": true,
          "verificationStatus": "string"
        }
      ],
      "verificationStatus": "string"
    }
  },
  "entityAssociations": [
    {
      "associatorId": "string",
      "entityType": "string",
      "jobTitle": "string",
      "legalEntityId": "string",
      "name": "string",
      "nominee": true,
      "relationship": "string",
      "settlorExemptionReason": [
        "string"
      ],
      "type": "definedBeneficiary"
    }
  ],
  "individual": {
    "birthData": {
      "dateOfBirth": "string"
    },
    "email": "string",
    "identificationData": {
      "cardNumber": "string",
      "expiryDate": "string",
      "issuerCountry": "string",
      "issuerState": "string",
      "nationalIdExempt": true,
      "number": "string",
      "type": "nationalIdNumber"
    },
    "name": {
      "firstName": "string",
      "infix": "string",
      "lastName": "string"
    },
    "nationality": "string",
    "phone": {
      "number": "string",
      "phoneCountryCode": "string",
      "type": "string"
    },
    "residentialAddress": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "support": {
      "email": "string",
      "phone": {
        "number": "string",
        "phoneCountryCode": "string",
        "type": "string"
      }
    },
    "taxInformation": [
      {
        "country": "st",
        "number": "string",
        "numberAbsent": true,
        "type": "string"
      }
    ],
    "webData": {
      "webAddress": "string",
      "webAddressId": "string"
    }
  },
  "organization": {
    "countryOfGoverningLaw": "string",
    "dateOfIncorporation": "string",
    "dateOfInitiationOfLegalProceeding": "string",
    "description": "string",
    "doingBusinessAs": "string",
    "doingBusinessAsAbsent": true,
    "economicSector": "string",
    "email": "string",
    "financialReports": [
      {
        "annualTurnover": "string",
        "balanceSheetTotal": "string",
        "currencyOfFinancialData": "string",
        "dateOfFinancialData": "string",
        "employeeCount": "string",
        "netAssets": "string"
      }
    ],
    "globalLegalEntityIdentifier": "string",
    "headOfficeIndicator": true,
    "institutionalSector": "nonFinancialCorporation",
    "legalForm": "string",
    "legalName": "string",
    "phone": {
      "number": "string",
      "phoneCountryCode": "string",
      "type": "string"
    },
    "principalPlaceOfBusiness": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registeredAddress": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registrationNumber": "string",
    "registrationNumberAbsent": true,
    "residentialAddressIndicator": true,
    "statusOfLegalProceeding": "noLegalActionsTaken",
    "stockData": {
      "marketIdentifier": "string",
      "stockNumber": "string",
      "tickerSymbol": "string"
    },
    "support": {
      "email": "string",
      "phone": {
        "number": "string",
        "phoneCountryCode": "string",
        "type": "string"
      }
    },
    "taxInformation": [
      {
        "country": "st",
        "number": "string",
        "numberAbsent": true,
        "type": "string"
      }
    ],
    "taxReportingClassification": {
      "businessType": "other",
      "financialInstitutionNumber": "string",
      "mainSourceOfIncome": "businessOperation",
      "type": "nonFinancialNonReportable"
    },
    "type": "associationIncorporated",
    "vatAbsenceReason": "industryExemption",
    "vatNumber": "string",
    "webData": {
      "webAddress": "string",
      "webAddressId": "string"
    }
  },
  "reference": "string",
  "soleProprietorship": {
    "countryOfGoverningLaw": "string",
    "dateOfIncorporation": "string",
    "doingBusinessAs": "string",
    "doingBusinessAsAbsent": true,
    "financialReports": [
      {
        "annualTurnover": "string",
        "balanceSheetTotal": "string",
        "currencyOfFinancialData": "string",
        "dateOfFinancialData": "string",
        "employeeCount": "string",
        "netAssets": "string"
      }
    ],
    "name": "string",
    "principalPlaceOfBusiness": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registeredAddress": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registrationNumber": "string",
    "residentialAddressIndicator": true,
    "taxAbsent": true,
    "taxInformation": [
      {
        "country": "st",
        "number": "string",
        "numberAbsent": true,
        "type": "string"
      }
    ],
    "vatAbsenceReason": "industryExemption",
    "vatNumber": "string"
  },
  "trust": {
    "countryOfGoverningLaw": "string",
    "dateOfIncorporation": "string",
    "description": "string",
    "doingBusinessAs": "string",
    "doingBusinessAsAbsent": true,
    "name": "string",
    "principalPlaceOfBusiness": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registeredAddress": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registrationNumber": "string",
    "residentialAddressIndicator": true,
    "taxInformation": [
      {
        "country": "st",
        "number": "string",
        "numberAbsent": true,
        "type": "string"
      }
    ],
    "type": "businessTrust",
    "undefinedBeneficiaryInfo": [
      {
        "description": "string",
        "reference": "string"
      }
    ],
    "vatAbsenceReason": "industryExemption",
    "vatNumber": "string"
  },
  "type": "individual",
  "unincorporatedPartnership": {
    "countryOfGoverningLaw": "string",
    "dateOfIncorporation": "string",
    "description": "string",
    "doingBusinessAs": "string",
    "doingBusinessAsAbsent": true,
    "name": "string",
    "principalPlaceOfBusiness": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registeredAddress": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registrationNumber": "string",
    "residentialAddressIndicator": true,
    "taxInformation": [
      {
        "country": "st",
        "number": "string",
        "numberAbsent": true,
        "type": "string"
      }
    ],
    "type": "limitedPartnership",
    "vatAbsenceReason": "industryExemption",
    "vatNumber": "string"
  },
  "verificationPlan": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|object|false|none|Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.|
|entityAssociations|[[LegalEntityAssociation](#schemalegalentityassociation)]|false|none|List of legal entities associated with the current legal entity.<br>For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.|
|individual|[Individual](#schemaindividual)|false|none|Information about the individual. Required if `type` is **individual**.|
|organization|[Organization](#schemaorganization)|false|none|Information about the organization. Required if `type` is **organization**.|
|reference|string|false|none|Your reference for the legal entity, maximum 150 characters.|
|soleProprietorship|[SoleProprietorship](#schemasoleproprietorship)|false|none|Information about the sole proprietorship. Required if `type` is **soleProprietorship**.|
|trust|[Trust](#schematrust)|false|none|Information about the trust. Required if `type` is **trust**.|
|type|string|false|none|The type of legal entity.<br><br>Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**.|
|unincorporatedPartnership|[UnincorporatedPartnership](#schemaunincorporatedpartnership)|false|none|Information about the unincorporated partnership. Required if `type` is **unincorporatedPartnership**.|
|verificationPlan|string|false|none|A key-value pair that specifies the verification process for a legal entity. Set to **upfront** for upfront verification for [marketplaces](https://docs.adyen.com/marketplaces/verification-overview/verification-types/#upfront-verification).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|individual|
|type|organization|
|type|soleProprietorship|
|type|trust|
|type|unincorporatedPartnership|

<h2 id="tocS_LegalEntityInfoRequiredType">LegalEntityInfoRequiredType</h2>
<!-- backwards compatibility -->
<a id="schemalegalentityinforequiredtype"></a>
<a id="schema_LegalEntityInfoRequiredType"></a>
<a id="tocSlegalentityinforequiredtype"></a>
<a id="tocslegalentityinforequiredtype"></a>

```json
{
  "capabilities": {
    "property1": {
      "allowed": true,
      "allowedLevel": "high",
      "allowedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "requested": true,
      "requestedLevel": "high",
      "requestedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "transferInstruments": [
        {
          "allowed": true,
          "id": "string",
          "requested": true,
          "verificationStatus": "string"
        }
      ],
      "verificationStatus": "string"
    },
    "property2": {
      "allowed": true,
      "allowedLevel": "high",
      "allowedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "requested": true,
      "requestedLevel": "high",
      "requestedSettings": {
        "amountPerIndustry": {
          "property1": {
            "currency": "string",
            "value": 0
          },
          "property2": {
            "currency": "string",
            "value": 0
          }
        },
        "authorizedCardUsers": true,
        "fundingSource": [
          "credit"
        ],
        "interval": "daily",
        "maxAmount": {
          "currency": "string",
          "value": 0
        }
      },
      "transferInstruments": [
        {
          "allowed": true,
          "id": "string",
          "requested": true,
          "verificationStatus": "string"
        }
      ],
      "verificationStatus": "string"
    }
  },
  "entityAssociations": [
    {
      "associatorId": "string",
      "entityType": "string",
      "jobTitle": "string",
      "legalEntityId": "string",
      "name": "string",
      "nominee": true,
      "relationship": "string",
      "settlorExemptionReason": [
        "string"
      ],
      "type": "definedBeneficiary"
    }
  ],
  "individual": {
    "birthData": {
      "dateOfBirth": "string"
    },
    "email": "string",
    "identificationData": {
      "cardNumber": "string",
      "expiryDate": "string",
      "issuerCountry": "string",
      "issuerState": "string",
      "nationalIdExempt": true,
      "number": "string",
      "type": "nationalIdNumber"
    },
    "name": {
      "firstName": "string",
      "infix": "string",
      "lastName": "string"
    },
    "nationality": "string",
    "phone": {
      "number": "string",
      "phoneCountryCode": "string",
      "type": "string"
    },
    "residentialAddress": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "support": {
      "email": "string",
      "phone": {
        "number": "string",
        "phoneCountryCode": "string",
        "type": "string"
      }
    },
    "taxInformation": [
      {
        "country": "st",
        "number": "string",
        "numberAbsent": true,
        "type": "string"
      }
    ],
    "webData": {
      "webAddress": "string",
      "webAddressId": "string"
    }
  },
  "organization": {
    "countryOfGoverningLaw": "string",
    "dateOfIncorporation": "string",
    "dateOfInitiationOfLegalProceeding": "string",
    "description": "string",
    "doingBusinessAs": "string",
    "doingBusinessAsAbsent": true,
    "economicSector": "string",
    "email": "string",
    "financialReports": [
      {
        "annualTurnover": "string",
        "balanceSheetTotal": "string",
        "currencyOfFinancialData": "string",
        "dateOfFinancialData": "string",
        "employeeCount": "string",
        "netAssets": "string"
      }
    ],
    "globalLegalEntityIdentifier": "string",
    "headOfficeIndicator": true,
    "institutionalSector": "nonFinancialCorporation",
    "legalForm": "string",
    "legalName": "string",
    "phone": {
      "number": "string",
      "phoneCountryCode": "string",
      "type": "string"
    },
    "principalPlaceOfBusiness": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registeredAddress": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registrationNumber": "string",
    "registrationNumberAbsent": true,
    "residentialAddressIndicator": true,
    "statusOfLegalProceeding": "noLegalActionsTaken",
    "stockData": {
      "marketIdentifier": "string",
      "stockNumber": "string",
      "tickerSymbol": "string"
    },
    "support": {
      "email": "string",
      "phone": {
        "number": "string",
        "phoneCountryCode": "string",
        "type": "string"
      }
    },
    "taxInformation": [
      {
        "country": "st",
        "number": "string",
        "numberAbsent": true,
        "type": "string"
      }
    ],
    "taxReportingClassification": {
      "businessType": "other",
      "financialInstitutionNumber": "string",
      "mainSourceOfIncome": "businessOperation",
      "type": "nonFinancialNonReportable"
    },
    "type": "associationIncorporated",
    "vatAbsenceReason": "industryExemption",
    "vatNumber": "string",
    "webData": {
      "webAddress": "string",
      "webAddressId": "string"
    }
  },
  "reference": "string",
  "soleProprietorship": {
    "countryOfGoverningLaw": "string",
    "dateOfIncorporation": "string",
    "doingBusinessAs": "string",
    "doingBusinessAsAbsent": true,
    "financialReports": [
      {
        "annualTurnover": "string",
        "balanceSheetTotal": "string",
        "currencyOfFinancialData": "string",
        "dateOfFinancialData": "string",
        "employeeCount": "string",
        "netAssets": "string"
      }
    ],
    "name": "string",
    "principalPlaceOfBusiness": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registeredAddress": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registrationNumber": "string",
    "residentialAddressIndicator": true,
    "taxAbsent": true,
    "taxInformation": [
      {
        "country": "st",
        "number": "string",
        "numberAbsent": true,
        "type": "string"
      }
    ],
    "vatAbsenceReason": "industryExemption",
    "vatNumber": "string"
  },
  "trust": {
    "countryOfGoverningLaw": "string",
    "dateOfIncorporation": "string",
    "description": "string",
    "doingBusinessAs": "string",
    "doingBusinessAsAbsent": true,
    "name": "string",
    "principalPlaceOfBusiness": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registeredAddress": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registrationNumber": "string",
    "residentialAddressIndicator": true,
    "taxInformation": [
      {
        "country": "st",
        "number": "string",
        "numberAbsent": true,
        "type": "string"
      }
    ],
    "type": "businessTrust",
    "undefinedBeneficiaryInfo": [
      {
        "description": "string",
        "reference": "string"
      }
    ],
    "vatAbsenceReason": "industryExemption",
    "vatNumber": "string"
  },
  "type": "individual",
  "unincorporatedPartnership": {
    "countryOfGoverningLaw": "string",
    "dateOfIncorporation": "string",
    "description": "string",
    "doingBusinessAs": "string",
    "doingBusinessAsAbsent": true,
    "name": "string",
    "principalPlaceOfBusiness": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registeredAddress": {
      "city": "string",
      "country": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string",
      "street2": "string"
    },
    "registrationNumber": "string",
    "residentialAddressIndicator": true,
    "taxInformation": [
      {
        "country": "st",
        "number": "string",
        "numberAbsent": true,
        "type": "string"
      }
    ],
    "type": "limitedPartnership",
    "vatAbsenceReason": "industryExemption",
    "vatNumber": "string"
  },
  "verificationPlan": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|object|false|none|Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.|
|entityAssociations|[[LegalEntityAssociation](#schemalegalentityassociation)]|false|none|List of legal entities associated with the current legal entity.<br>For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.|
|individual|[Individual](#schemaindividual)|false|none|Information about the individual. Required if `type` is **individual**.|
|organization|[Organization](#schemaorganization)|false|none|Information about the organization. Required if `type` is **organization**.|
|reference|string|false|none|Your reference for the legal entity, maximum 150 characters.|
|soleProprietorship|[SoleProprietorship](#schemasoleproprietorship)|false|none|Information about the sole proprietorship. Required if `type` is **soleProprietorship**.|
|trust|[Trust](#schematrust)|false|none|Information about the trust. Required if `type` is **trust**.|
|type|string|true|none|The type of legal entity.<br><br> Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**.|
|unincorporatedPartnership|[UnincorporatedPartnership](#schemaunincorporatedpartnership)|false|none|Information about the unincorporated partnership. Required if `type` is **unincorporatedPartnership**.|
|verificationPlan|string|false|none|A key-value pair that specifies the verification process for a legal entity. Set to **upfront** for upfront verification for [marketplaces](https://docs.adyen.com/marketplaces/verification-overview/verification-types/#upfront-verification).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|individual|
|type|organization|
|type|soleProprietorship|
|type|trust|
|type|unincorporatedPartnership|

<h2 id="tocS_NOLocalAccountIdentification">NOLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemanolocalaccountidentification"></a>
<a id="schema_NOLocalAccountIdentification"></a>
<a id="tocSnolocalaccountidentification"></a>
<a id="tocsnolocalaccountidentification"></a>

```json
{
  "accountNumber": "stringstrin",
  "type": "noLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 11-digit bank account number, without separators or whitespace.|
|type|string|true|none|**noLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|noLocal|

<h2 id="tocS_NZLocalAccountIdentification">NZLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemanzlocalaccountidentification"></a>
<a id="schema_NZLocalAccountIdentification"></a>
<a id="tocSnzlocalaccountidentification"></a>
<a id="tocsnzlocalaccountidentification"></a>

```json
{
  "accountNumber": "stringstringstr",
  "type": "nzLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 15-16 digit bank account number. The first 2 digits are the bank number, the next 4 digits are the branch number, the next 7 digits are the account number, and the final 2-3 digits are the suffix.|
|type|string|true|none|**nzLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|nzLocal|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "firstName": "string",
  "infix": "string",
  "lastName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|true|none|The individual's first name. Must not be blank.<br><br>The combined length of `firstName` and `lastName` must be at least 3 characters. For example, a `firstName` of N and `lastName` of Ha is accepted.<br><br>Only the following special characters are allowed: **-**, **—**, **.**, **/**. Accents and non-Latin scripts are allowed.<br><br>The field cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious names** such as **John Doe** or **N/A**.<br><br>For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).|
|infix|string|false|none|The infix in the individual's name, if any.<br><br>Only the following special characters are allowed: **-**, **—**, **.**, **/**. Accents and non-Latin scripts are allowed.<br><br>The field cannot contain emojis, only symbols, only numbers, or only spaces.<br><br>For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).|
|lastName|string|true|none|The individual's last name. Must not be blank.<br><br>The combined length of `firstName` and `lastName` must be at least 3 characters.<br><br>Only the following special characters are allowed: **-**, **—**, **.**, **/**. Accents and non-Latin scripts are allowed.<br><br>The field cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious names** such as **John Doe** or **N/A**.<br><br>For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).|

<h2 id="tocS_NumberAndBicAccountIdentification">NumberAndBicAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemanumberandbicaccountidentification"></a>
<a id="schema_NumberAndBicAccountIdentification"></a>
<a id="tocSnumberandbicaccountidentification"></a>
<a id="tocsnumberandbicaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "additionalBankIdentification": {
    "code": "string",
    "type": "auBsbCode"
  },
  "bic": "stringst",
  "type": "numberAndBic"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The bank account number, without separators or whitespace. The length and format depends on the bank or country.|
|additionalBankIdentification|[AdditionalBankIdentification](#schemaadditionalbankidentification)|false|none|Additional identification codes of the bank. Some banks may require these identifiers for cross-border transfers.|
|bic|string|true|none|The bank's 8- or 11-character BIC or SWIFT code.|
|type|string|true|none|**numberAndBic**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|numberAndBic|

<h2 id="tocS_OnboardingLink">OnboardingLink</h2>
<!-- backwards compatibility -->
<a id="schemaonboardinglink"></a>
<a id="schema_OnboardingLink"></a>
<a id="tocSonboardinglink"></a>
<a id="tocsonboardinglink"></a>

```json
{
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|The URL of the hosted onboarding page where you need to redirect your user. This URL:<br><br> - Expires after 4 minutes.<br><br>- Can only be used once.<br><br>- Can only be clicked once by the user.<br><br>If the link expires, you need to create a new link.|

<h2 id="tocS_OnboardingLinkInfo">OnboardingLinkInfo</h2>
<!-- backwards compatibility -->
<a id="schemaonboardinglinkinfo"></a>
<a id="schema_OnboardingLinkInfo"></a>
<a id="tocSonboardinglinkinfo"></a>
<a id="tocsonboardinglinkinfo"></a>

```json
{
  "locale": "string",
  "redirectUrl": "string",
  "settings": {
    "acceptedCountries": [
      "string"
    ],
    "allowBankAccountFormatSelection": true,
    "allowDebugUi": true,
    "allowIntraRegionCrossBorderPayout": true,
    "changeLegalEntityType": true,
    "editPrefilledCountry": true,
    "enforceLegalAge": true,
    "hideOnboardingIntroductionIndividual": true,
    "hideOnboardingIntroductionOrganization": true,
    "hideOnboardingIntroductionSoleProprietor": true,
    "hideOnboardingIntroductionTrust": true,
    "instantBankVerification": true,
    "requirePciSignEcomMoto": true,
    "requirePciSignEcommerce": true,
    "requirePciSignPos": true,
    "requirePciSignPosMoto": true,
    "transferInstrumentLimit": 0
  },
  "themeId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locale|string|false|none|The language that will be used for the page, specified by a combination of two letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language and [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. See possible valuesfor [marketplaces](https://docs.adyen.com/marketplaces/onboard-users/hosted#supported-languages) or [platforms](https://docs.adyen.com/platforms/onboard-users/hosted#supported-languages). <br><br>If not specified in the request or if the language is not supported, the page uses the browser language. If the browser language is not supported, the page uses **en-US** by default.|
|redirectUrl|string|false|none|The URL where the user is redirected after they complete hosted onboarding.|
|settings|[OnboardingLinkSettings](#schemaonboardinglinksettings)|false|none|Key-value pairs indicating the settings for the hosted onboarding page. The key represents a specific setting.|
|themeId|string|false|none|The unique identifier of the hosted onboarding theme.|

<h2 id="tocS_OnboardingLinkSettings">OnboardingLinkSettings</h2>
<!-- backwards compatibility -->
<a id="schemaonboardinglinksettings"></a>
<a id="schema_OnboardingLinkSettings"></a>
<a id="tocSonboardinglinksettings"></a>
<a id="tocsonboardinglinksettings"></a>

```json
{
  "acceptedCountries": [
    "string"
  ],
  "allowBankAccountFormatSelection": true,
  "allowDebugUi": true,
  "allowIntraRegionCrossBorderPayout": true,
  "changeLegalEntityType": true,
  "editPrefilledCountry": true,
  "enforceLegalAge": true,
  "hideOnboardingIntroductionIndividual": true,
  "hideOnboardingIntroductionOrganization": true,
  "hideOnboardingIntroductionSoleProprietor": true,
  "hideOnboardingIntroductionTrust": true,
  "instantBankVerification": true,
  "requirePciSignEcomMoto": true,
  "requirePciSignEcommerce": true,
  "requirePciSignPos": true,
  "requirePciSignPosMoto": true,
  "transferInstrumentLimit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedCountries|[string]|false|none|The list of countries the user can choose from in hosted onboarding when `editPrefilledCountry` is allowed.<br><br>The value must be in the two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code format.<br><br>The array is empty by default, allowing all [countries and regions supported by hosted onboarding](https://docs.adyen.com/platforms/onboard-users/#hosted-onboarding).|
|allowBankAccountFormatSelection|boolean|false|none|Default value: **false**<br><br>Indicates if the user can select the format for their payout account (if applicable).|
|allowDebugUi|boolean|false|none|Default value: **true**<br><br>Indicates whether the debug user interface (UI) is enabled. The debug UI provides information for your support staff to diagnose and resolve user issues during onboarding. It can be accessed using a keyboard shortcut.|
|allowIntraRegionCrossBorderPayout|boolean|false|none|Default value: **false**<br><br>Indicates if the user can select a payout account in a different EU/EEA location (including Switzerland and the UK) than the location of their legal entity.|
|changeLegalEntityType|boolean|false|none|Default value: **true**<br><br>Indicates if the user can change their legal entity type.|
|editPrefilledCountry|boolean|false|none|Default value: **true**<br><br>Indicates if the user can change the country of their legal entity's address, for example the registered address of an organization.|
|enforceLegalAge|boolean|false|none|Default value: **false**<br><br>Indicates if only users above the age of 18 can be onboarded.|
|hideOnboardingIntroductionIndividual|boolean|false|none|Default value: **true**<br><br>Indicates whether the introduction screen is hidden for the user of the individual legal entity type.<br>The introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process.|
|hideOnboardingIntroductionOrganization|boolean|false|none|Default value: **true**<br><br>Indicates whether the introduction screen is hidden for the user of the organization legal entity type.<br>The introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process.|
|hideOnboardingIntroductionSoleProprietor|boolean|false|none|Default value: **true**<br><br>Indicates whether the introduction screen is hidden for the user of the sole proprietorship legal entity type.<br>The introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process.|
|hideOnboardingIntroductionTrust|boolean|false|none|Default value: **true**<br><br>Indicates whether the introduction screen is hidden for the user of the trust legal entity type.<br>The introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process.|
|instantBankVerification|boolean|false|none|Default value: **true**<br><br>Indicates if the user can initiate the verification process through open banking providers, like Plaid or Tink.|
|requirePciSignEcomMoto|boolean|false|none|Default value: **false**<br><br>Indicates if the user is required to sign a PCI questionnaires for the **ecomMoto** sales channel type.|
|requirePciSignEcommerce|boolean|false|none|Default value: **false**<br><br>Indicates if the user is required to sign a PCI questionnaires for the **eCommerce** sales channel type.|
|requirePciSignPos|boolean|false|none|Default value: **false**<br><br>Indicates if the user is required to sign a PCI questionnaires for the **pos** sales channel type.|
|requirePciSignPosMoto|boolean|false|none|Default value: **false**<br><br>Indicates if the user is required to sign a PCI questionnaires for the **posMoto** sales channel type.|
|transferInstrumentLimit|integer(int32)|false|none|The maximum number of transfer instruments the user can create.|

<h2 id="tocS_OnboardingTheme">OnboardingTheme</h2>
<!-- backwards compatibility -->
<a id="schemaonboardingtheme"></a>
<a id="schema_OnboardingTheme"></a>
<a id="tocSonboardingtheme"></a>
<a id="tocsonboardingtheme"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The creation date of the theme.|
|description|string|false|none|The description of the theme.|
|id|string|true|none|The unique identifier of the theme.|
|properties|object|true|none|The properties of the theme.|
|updatedAt|string(date-time)|false|none|The date when the theme was last updated.|

<h2 id="tocS_OnboardingThemes">OnboardingThemes</h2>
<!-- backwards compatibility -->
<a id="schemaonboardingthemes"></a>
<a id="schema_OnboardingThemes"></a>
<a id="tocSonboardingthemes"></a>
<a id="tocsonboardingthemes"></a>

```json
{
  "next": "string",
  "previous": "string",
  "themes": [
    {
      "createdAt": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|string|false|none|The next page. Only present if there is a next page.|
|previous|string|false|none|The previous page. Only present if there is a previous page.|
|themes|[[OnboardingTheme](#schemaonboardingtheme)]|true|none|List of onboarding themes.|

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "countryOfGoverningLaw": "string",
  "dateOfIncorporation": "string",
  "dateOfInitiationOfLegalProceeding": "string",
  "description": "string",
  "doingBusinessAs": "string",
  "doingBusinessAsAbsent": true,
  "economicSector": "string",
  "email": "string",
  "financialReports": [
    {
      "annualTurnover": "string",
      "balanceSheetTotal": "string",
      "currencyOfFinancialData": "string",
      "dateOfFinancialData": "string",
      "employeeCount": "string",
      "netAssets": "string"
    }
  ],
  "globalLegalEntityIdentifier": "string",
  "headOfficeIndicator": true,
  "institutionalSector": "nonFinancialCorporation",
  "legalForm": "string",
  "legalName": "string",
  "phone": {
    "number": "string",
    "phoneCountryCode": "string",
    "type": "string"
  },
  "principalPlaceOfBusiness": {
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string",
    "street2": "string"
  },
  "registeredAddress": {
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string",
    "street2": "string"
  },
  "registrationNumber": "string",
  "registrationNumberAbsent": true,
  "residentialAddressIndicator": true,
  "statusOfLegalProceeding": "noLegalActionsTaken",
  "stockData": {
    "marketIdentifier": "string",
    "stockNumber": "string",
    "tickerSymbol": "string"
  },
  "support": {
    "email": "string",
    "phone": {
      "number": "string",
      "phoneCountryCode": "string",
      "type": "string"
    }
  },
  "taxInformation": [
    {
      "country": "st",
      "number": "string",
      "numberAbsent": true,
      "type": "string"
    }
  ],
  "taxReportingClassification": {
    "businessType": "other",
    "financialInstitutionNumber": "string",
    "mainSourceOfIncome": "businessOperation",
    "type": "nonFinancialNonReportable"
  },
  "type": "associationIncorporated",
  "vatAbsenceReason": "industryExemption",
  "vatNumber": "string",
  "webData": {
    "webAddress": "string",
    "webAddressId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryOfGoverningLaw|string|false|none|The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country.|
|dateOfIncorporation|string|false|none|The date when the organization was incorporated in YYYY-MM-DD format.|
|dateOfInitiationOfLegalProceeding|string|false|none|Required if the value of `statusOfLegalProceeding` is one of the following:<br><br>**underJudicialAdministration**, **bankruptcyInsolvency**, **otherLegalMeasures**<br><br>The date at which a legal proceeding was initiated, in **YYYY-MM-DD** format. Example: **2000-02-12**<br>|
|description|string|false|none|Your description for the organization.|
|doingBusinessAs|string|false|none|The organization's trading name, if different from the registered legal name.|
|doingBusinessAsAbsent|boolean \| null|false|none|Set this to **true** if the organization or legal arrangement does not have a `Doing business as` name.|
|economicSector|string|false|none|The sector of the economy the legal entity operates within, represented by a 2-4 digit code that may include a ".". Example: 45.11<br><br>You can locate economic sector codes for your area by referencing codes defined by the NACE (Nomenclature of Economic Activities) used in the European Union.<br>|
|email|string|false|none|The email address of the legal entity.|
|financialReports|[[FinancialReport](#schemafinancialreport)]|false|none|The financial report information of the organization.|
|globalLegalEntityIdentifier|string|false|none|The global legal entity identifier for the organization.<br><br>This field is not required if the `registrationNumber` for the organization has been provided.|
|headOfficeIndicator|boolean|false|none|Indicates that the registered business address is also the company's headquarters.|
|institutionalSector|string|false|none|The institutional sector the organization operates within.|
|legalForm|string|false|none|The type of business entity as defined in the national legal system. Use a legal form listed within the accepted legal forms compiled by the Central Bank of Europe.<br>|
|legalName|string|true|none|The organization's legal name. Must be at least 3 characters.<br><br>Only the following special characters are allowed: **,**, **-**, **—**, **.**, **;**, **:**, **&**, **?**, **@**, **(**, **)**, **"**, **'**, **!**, **\**, **+**, **/**. Accents and non-Latin scripts are allowed.<br><br>The field cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious names** such as **John Doe** or **N/A**.<br><br>For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).|
|phone|[PhoneNumber](#schemaphonenumber)|false|none|The phone number of the legal entity.|
|principalPlaceOfBusiness|[Address](#schemaaddress)|false|none|The address where the organization operates from. Provide this if the principal place of business is different from the `registeredAddress`.|
|registeredAddress|[Address](#schemaaddress)|true|none|The address of the organization registered at their registrar (such as the Chamber of Commerce). If you use a PO box, you must also provide a `principalPlaceOfBusiness`. The principal place of business cannot be a PO box.<br><br>Address fields cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious values** such as **John Doe** or **N/A**. All parts of the address must be different. For example, Spain, Spain, Spain is not allowed.<br><br>For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).|
|registrationNumber|string|false|none|The organization's registration number.|
|registrationNumberAbsent|boolean \| null|false|none|Set this to **true** if the organization does not have a registration number available. Only applicable for organizations in New Zealand, and incorporated partnerships and government organizations in Australia.|
|residentialAddressIndicator|boolean \| null|false|none|Indicates if the `registeredAddress` is a place of residence, instead of a business address.<br><br>Set to **true** if the address is a place of residence. The default value is **false**.|
|statusOfLegalProceeding|string|false|none|The status of any current or past legal action taken against the legal entity.<br><br>Possible values: **noLegalActionsTaken**, **underJudicialAdministration**, **bankruptcyInsolvency**, **otherLegalMeasures**<br><br>If the value of this field is **noLegalActionsTaken**, then `dateOfInitiationOfLegalProceeding` is not required. Otherwise, it is required.<br>|
|stockData|[StockData](#schemastockdata)|false|none|Information about the organization's publicly traded stock. Provide this object only if `type` is **listedPublicCompany**.|
|support|[Support](#schemasupport)|false|none|Support information for the legal entity. Required if you have a platform setup.|
|taxInformation|[[TaxInformation](#schemataxinformation)]|false|none|The tax information of the organization.|
|taxReportingClassification|[TaxReportingClassification](#schemataxreportingclassification)|false|none|The tax reporting classification (FATCA/CRS self-certification) of the organization. Not required if your organization is US-based and requests business bank account capabilities.|
|type|string|false|none|Type of organization.<br><br>Possible values: **associationIncorporated**, **governmentalOrganization**, **listedPublicCompany**, **nonProfit**, **partnershipIncorporated**, **privateCompany**.|
|vatAbsenceReason|string|false|none|The reason the organization has not provided a VAT number.<br><br>Possible values: **industryExemption**, **belowTaxThreshold**.|
|vatNumber|string|false|none|The organization's VAT number.|
|webData|[WebData](#schemawebdata)|false|none|**Deprecated.** The website and app URL of the legal entity.|

#### Enumerated Values

|Property|Value|
|---|---|
|institutionalSector|nonFinancialCorporation|
|institutionalSector|centralBank|
|institutionalSector|creditInstitutions|
|institutionalSector|depositTakingCorporations|
|institutionalSector|moneyMarketFunds|
|institutionalSector|nonMMFInvestmentFunds|
|institutionalSector|financialVehicleCorporation|
|institutionalSector|otherFinancialIntermediaries|
|institutionalSector|financialAuxiliaries|
|institutionalSector|captiveFinancialInstitutionsAndMoneyLenders|
|institutionalSector|insuranceCorporations|
|institutionalSector|pensionFunds|
|institutionalSector|centralGovernment|
|institutionalSector|stateGovernment|
|institutionalSector|localGovernment|
|institutionalSector|socialSecurityFunds|
|institutionalSector|nonProfitInstitutionsServingHouseholds|
|statusOfLegalProceeding|noLegalActionsTaken|
|statusOfLegalProceeding|underJudicialAdministration|
|statusOfLegalProceeding|bankruptcyInsolvency|
|statusOfLegalProceeding|otherLegalMeasures|
|type|associationIncorporated|
|type|governmentalOrganization|
|type|listedPublicCompany|
|type|nonProfit|
|type|partnershipIncorporated|
|type|privateCompany|
|vatAbsenceReason|industryExemption|
|vatAbsenceReason|belowTaxThreshold|

<h2 id="tocS_OwnerEntity">OwnerEntity</h2>
<!-- backwards compatibility -->
<a id="schemaownerentity"></a>
<a id="schema_OwnerEntity"></a>
<a id="tocSownerentity"></a>
<a id="tocsownerentity"></a>

```json
{
  "id": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier of the resource that owns the document. For `type` **legalEntity**, this value is the unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id). For `type` **bankAccount**, this value is the unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).|
|type|string|true|none|Type of resource that owns the document.<br><br>Possible values: **legalEntity**, **bankAccount**.|

<h2 id="tocS_PLLocalAccountIdentification">PLLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemapllocalaccountidentification"></a>
<a id="schema_PLLocalAccountIdentification"></a>
<a id="tocSpllocalaccountidentification"></a>
<a id="tocspllocalaccountidentification"></a>

```json
{
  "accountNumber": "stringstringstringstringst",
  "type": "plLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.|
|type|string|true|none|**plLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|plLocal|

<h2 id="tocS_PciDocumentInfo">PciDocumentInfo</h2>
<!-- backwards compatibility -->
<a id="schemapcidocumentinfo"></a>
<a id="schema_PciDocumentInfo"></a>
<a id="tocSpcidocumentinfo"></a>
<a id="tocspcidocumentinfo"></a>

```json
{
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "validUntil": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|The date the questionnaire was created, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00|
|id|string|false|none|The unique identifier of the signed questionnaire.|
|validUntil|string(date-time)|false|none|The expiration date of the questionnaire, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00|

<h2 id="tocS_PciSigningRequest">PciSigningRequest</h2>
<!-- backwards compatibility -->
<a id="schemapcisigningrequest"></a>
<a id="schema_PciSigningRequest"></a>
<a id="tocSpcisigningrequest"></a>
<a id="tocspcisigningrequest"></a>

```json
{
  "pciTemplateReferences": [
    "string"
  ],
  "signedBy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pciTemplateReferences|[string]|true|none|The array of Adyen-generated unique identifiers for the questionnaires.|
|signedBy|string|true|none|The [legal entity ID](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) of the individual who signs the PCI questionnaire.|

<h2 id="tocS_PciSigningResponse">PciSigningResponse</h2>
<!-- backwards compatibility -->
<a id="schemapcisigningresponse"></a>
<a id="schema_PciSigningResponse"></a>
<a id="tocSpcisigningresponse"></a>
<a id="tocspcisigningresponse"></a>

```json
{
  "pciQuestionnaireIds": [
    "string"
  ],
  "signedBy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pciQuestionnaireIds|[string]|false|none|The unique identifiers of the signed PCI documents.|
|signedBy|string|false|none|The [legal entity ID](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) of the individual who signed the PCI questionnaire.|

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
{
  "number": "string",
  "phoneCountryCode": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|true|none|The full phone number, including the country code. For example, **+3112345678**.|
|phoneCountryCode|string|false|read-only|The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code prefix of the phone number. For example, **US** or **NL**.<br><br>The value of the `phoneCountryCode` is determined by the country code digit(s) of `phone.number`|
|type|string|false|none|The type of phone number.<br> Possible values: **mobile**, **landline**, **sip**, **fax.** |

<h2 id="tocS_RemediatingAction">RemediatingAction</h2>
<!-- backwards compatibility -->
<a id="schemaremediatingaction"></a>
<a id="schema_RemediatingAction"></a>
<a id="tocSremediatingaction"></a>
<a id="tocsremediatingaction"></a>

```json
{
  "code": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_SELocalAccountIdentification">SELocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaselocalaccountidentification"></a>
<a id="schema_SELocalAccountIdentification"></a>
<a id="tocSselocalaccountidentification"></a>
<a id="tocsselocalaccountidentification"></a>

```json
{
  "accountNumber": "strings",
  "clearingNumber": "strin",
  "type": "seLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 7- to 10-digit bank account number ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number, separators, or whitespace.|
|clearingNumber|string|true|none|The 4- to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or whitespace.|
|type|string|true|none|**seLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|seLocal|

<h2 id="tocS_SGLocalAccountIdentification">SGLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemasglocalaccountidentification"></a>
<a id="schema_SGLocalAccountIdentification"></a>
<a id="tocSsglocalaccountidentification"></a>
<a id="tocssglocalaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "bic": "stringst",
  "type": "sgLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 4- to 19-digit bank account number, without separators or whitespace.|
|bic|string|true|none|The bank's 8- or 11-character BIC or SWIFT code.|
|type|string|false|none|**sgLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|sgLocal|

<h2 id="tocS_ServiceError">ServiceError</h2>
<!-- backwards compatibility -->
<a id="schemaserviceerror"></a>
<a id="schema_ServiceError"></a>
<a id="tocSserviceerror"></a>
<a id="tocsserviceerror"></a>

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|The error code mapped to the error message.|
|errorType|string|false|none|The category of the error.|
|message|string|false|none|A short explanation of the issue.|
|pspReference|string|false|none|The PSP reference of the payment.|
|status|integer(int32)|false|none|The HTTP response status.|

<h2 id="tocS_SetTaxElectronicDeliveryConsentRequest">SetTaxElectronicDeliveryConsentRequest</h2>
<!-- backwards compatibility -->
<a id="schemasettaxelectronicdeliveryconsentrequest"></a>
<a id="schema_SetTaxElectronicDeliveryConsentRequest"></a>
<a id="tocSsettaxelectronicdeliveryconsentrequest"></a>
<a id="tocssettaxelectronicdeliveryconsentrequest"></a>

```json
{
  "US1099k": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|US1099k|boolean|false|none|Consent to electronically deliver tax form US1099-K.|

<h2 id="tocS_SoleProprietorship">SoleProprietorship</h2>
<!-- backwards compatibility -->
<a id="schemasoleproprietorship"></a>
<a id="schema_SoleProprietorship"></a>
<a id="tocSsoleproprietorship"></a>
<a id="tocssoleproprietorship"></a>

```json
{
  "countryOfGoverningLaw": "string",
  "dateOfIncorporation": "string",
  "doingBusinessAs": "string",
  "doingBusinessAsAbsent": true,
  "financialReports": [
    {
      "annualTurnover": "string",
      "balanceSheetTotal": "string",
      "currencyOfFinancialData": "string",
      "dateOfFinancialData": "string",
      "employeeCount": "string",
      "netAssets": "string"
    }
  ],
  "name": "string",
  "principalPlaceOfBusiness": {
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string",
    "street2": "string"
  },
  "registeredAddress": {
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string",
    "street2": "string"
  },
  "registrationNumber": "string",
  "residentialAddressIndicator": true,
  "taxAbsent": true,
  "taxInformation": [
    {
      "country": "st",
      "number": "string",
      "numberAbsent": true,
      "type": "string"
    }
  ],
  "vatAbsenceReason": "industryExemption",
  "vatNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryOfGoverningLaw|string|false|none|The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country.|
|dateOfIncorporation|string|false|none|The date when the legal arrangement was incorporated in YYYY-MM-DD format.|
|doingBusinessAs|string|false|none|The registered name, if different from the `name`.|
|doingBusinessAsAbsent|boolean \| null|false|none|Set this to **true** if the legal arrangement does not have a `Doing business as` name.|
|financialReports|[[FinancialReport](#schemafinancialreport)]|false|none|The information from the financial report of the sole proprietorship.|
|name|string|true|none|The legal name. Must be at least 3 characters.<br><br>Only the following special characters are allowed: **,**, **-**, **—**, **.**, **;**, **:**, **&**, **?**, **@**, **(**, **)**, **"**, **'**, **!**, **\**, **+**, **/**. Accents and non-Latin scripts are allowed.<br><br>The field cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious names** such as **John Doe** or **N/A**.<br><br>For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).|
|principalPlaceOfBusiness|[Address](#schemaaddress)|false|none|The business address. Required if the principal place of business is different from the `registeredAddress`.|
|registeredAddress|[Address](#schemaaddress)|true|none|The address registered at the registrar, such as the Chamber of Commerce. If you use a PO box, you must also provide a `principalPlaceOfBusiness`. The principal place of business cannot be a PO box.<br><br>Address fields cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious values** such as **John Doe** or **N/A**. All parts of the address must be different. For example, Spain, Spain, Spain is not allowed.<br><br>For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).|
|registrationNumber|string|false|none|The registration number.|
|residentialAddressIndicator|boolean \| null|false|none|Indicates if the `registeredAddress` is a place of residence, instead of a business address.<br><br>Set to **true** if the address is a place of residence. The default value is **false**.|
|taxAbsent|boolean \| null|false|none|The tax information is absent.|
|taxInformation|[[TaxInformation](#schemataxinformation)]|false|none|The tax information of the entity.|
|vatAbsenceReason|string|false|none|The reason for not providing a VAT number.<br><br>Possible values: **industryExemption**, **belowTaxThreshold**.|
|vatNumber|string|false|none|The VAT number.|

#### Enumerated Values

|Property|Value|
|---|---|
|vatAbsenceReason|industryExemption|
|vatAbsenceReason|belowTaxThreshold|

<h2 id="tocS_SourceOfFunds">SourceOfFunds</h2>
<!-- backwards compatibility -->
<a id="schemasourceoffunds"></a>
<a id="schema_SourceOfFunds"></a>
<a id="tocSsourceoffunds"></a>
<a id="tocssourceoffunds"></a>

```json
{
  "adyenProcessedFunds": true,
  "amount": {
    "currency": "string",
    "value": 0
  },
  "assetMonthsHeld": 0,
  "cryptocurrencyExchange": "string",
  "dateOfFundsReceived": "1970-01-01",
  "dateOfSourceEvent": "1970-01-01",
  "description": "string",
  "financiers": [
    {
      "amount": {
        "currency": "string",
        "value": 0
      },
      "firstName": "string",
      "lastName": "string",
      "location": "string"
    }
  ],
  "originatorLegalEntityId": "string",
  "purpose": "string",
  "relationship": "string",
  "type": "business",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adyenProcessedFunds|boolean|true|none|Indicates whether the funds are coming from transactions processed by Adyen. If **false**, the `type` is required.|
|amount|[Amount](#schemaamount)|false|none|Required if `type` is **business**, **assetSale**, **gamblingWinnings** or **inheritance**.<br><br>For `type` **business**, provide the annual turn over of the business. For `type` **assetSale**, **gamblingWinnings** or **inheritance**, provide the amount of the funds.|
|assetMonthsHeld|integer(int32)|false|none|The number of months that the asset has been in possession of the user.<br><br>For example, if the source of funds is of type **cryptocurrencyIncome** then `assetMonthsHeld` is the number of months the user has owned the cryptocurrency.|
|cryptocurrencyExchange|string|false|none|Required if `type` is **cryptocurrencyIncome**. The cryptocurrency exchange where the funds were acquired.|
|dateOfFundsReceived|string(date)|false|none|Required if `type` is **donations** or **inheritance**. The date the funds were received, in YYYY-MM-DD format.|
|dateOfSourceEvent|string(date)|false|none|Required if `type` is **assetSale** or **gamblingWinnings**. The date the funds were received, in YYYY-MM-DD format.<br><br>For example, if the source of funds is of type **assetSale**, the dateOfSourceEvent is the date of the sale. If the source of funds is of type **gamblingWinnings**, the dateOfSourceEvent is the date of winnings.|
|description|string|false|none|Required if `type` is **business** or **assetSale**. A description for the source of funds.<br><br>For example, for `type` **business**, provide a description of where the business transactions come from, such as payments through bank transfer. For `type` **assetSale**, provide a description of the asset. For example, the address of a residential property if it is a property sale.|
|financiers|[[Financier](#schemafinancier)]|false|none|Required if `type` is **thirdPartyFunding**. Information about the financiers.|
|originatorLegalEntityId|string|false|none|Required if `type` is **donations** or **inheritance**. The legal entity ID representing the originator of the source of funds.<br><br>For example, if the source of funds is **inheritance**, then `originatorOfFundsReference` should be the legal entity reference of the benefactor.|
|purpose|string|false|none|Required if `type` is **donations**. The reason for receiving the funds.|
|relationship|string|false|none|Required if `type` is **donations** or **inheritance**. The relationship of the originator of the funds to the recipient.|
|type|string|false|none|The type of the source of funds.<br><br><br><br>Possible values:<br>*  **business**<br>*  **employment**<br>*  **donations**<br>*  **inheritance**<br>*  **financialAid**<br>*  **rentalIncome**<br>*  **dividendIncome**<br>*  **royaltyIncome**<br>*  **thirdPartyFunding**<br>*  **pensionIncome**<br>*  **insuranceSettlement**<br>*  **cryptocurrencyIncome**<br>*  **assetSale**<br>*  **loans**<br>*  **gamblingWinnings**<br><br>|
|website|string|false|none|Required if `type` is **gamblingWinnings**. The location of the gambling site for the winnings.<br><br>For example, if the source of funds is online gambling, provide the website of the gambling company.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|business|
|type|employment|
|type|donations|
|type|inheritance|
|type|financialAid|
|type|rentalIncome|
|type|dividendIncome|
|type|royaltyIncome|
|type|thirdPartyFunding|
|type|pensionIncome|
|type|insuranceSettlement|
|type|cryptocurrencyIncome|
|type|assetSale|
|type|loans|
|type|gamblingWinnings|

<h2 id="tocS_StockData">StockData</h2>
<!-- backwards compatibility -->
<a id="schemastockdata"></a>
<a id="schema_StockData"></a>
<a id="tocSstockdata"></a>
<a id="tocsstockdata"></a>

```json
{
  "marketIdentifier": "string",
  "stockNumber": "string",
  "tickerSymbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|marketIdentifier|string|false|none|The four-digit [Market Identifier Code](https://en.wikipedia.org/wiki/Market_Identifier_Code) of the stock market where the organization's stocks are traded.|
|stockNumber|string|false|none|The 12-digit International Securities Identification Number (ISIN) of the company, without dashes (-).|
|tickerSymbol|string|false|none|The stock ticker symbol.|

<h2 id="tocS_Support">Support</h2>
<!-- backwards compatibility -->
<a id="schemasupport"></a>
<a id="schema_Support"></a>
<a id="tocSsupport"></a>
<a id="tocssupport"></a>

```json
{
  "email": "string",
  "phone": {
    "number": "string",
    "phoneCountryCode": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The support email address of the legal entity. Required if you have a platform setup.|
|phone|[PhoneNumber](#schemaphonenumber)|false|none|The support phone number of the legal entity. Required if you have a platform setup.|

<h2 id="tocS_SupportingEntityCapability">SupportingEntityCapability</h2>
<!-- backwards compatibility -->
<a id="schemasupportingentitycapability"></a>
<a id="schema_SupportingEntityCapability"></a>
<a id="tocSsupportingentitycapability"></a>
<a id="tocssupportingentitycapability"></a>

```json
{
  "allowed": true,
  "id": "string",
  "requested": true,
  "verificationStatus": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|read-only|Indicates whether the capability is allowed for the supporting entity.<br><br>If a capability is allowed for a supporting entity but not for the parent legal entity, this means the legal entity has other supporting entities that failed verification.<br><br>**You can use the allowed supporting entity** regardless of the verification status of other supporting entities.|
|id|string|false|read-only|Supporting entity reference |
|requested|boolean|false|read-only|Indicates whether the supporting entity capability is requested. |
|verificationStatus|string|false|read-only|The status of the verification checks for the capability of the supporting entity.<br><br>Possible values:<br><br>* **pending**: Adyen is running the verification.<br><br>* **invalid**: The verification failed. Check if the `errors` array contains more information.<br><br>* **valid**: The verification has been successfully completed.<br><br>* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.<br>|

<h2 id="tocS_TaxInformation">TaxInformation</h2>
<!-- backwards compatibility -->
<a id="schemataxinformation"></a>
<a id="schema_TaxInformation"></a>
<a id="tocStaxinformation"></a>
<a id="tocstaxinformation"></a>

```json
{
  "country": "st",
  "number": "string",
  "numberAbsent": true,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.|
|number|string|false|none|The tax ID number (TIN) of the organization or individual.|
|numberAbsent|boolean|false|none|Set this to **true** if the legal entity or legal arrangement does not have a tax ID number (TIN). Only applicable in Australia.|
|type|string|false|none|The TIN type depending on the country where it was issued. Only provide if the country has multiple tax IDs: Singapore, Sweden, the UK, or the US. For example, provide **SSN**, **EIN**, or **ITIN** for the US.|

<h2 id="tocS_TaxReportingClassification">TaxReportingClassification</h2>
<!-- backwards compatibility -->
<a id="schemataxreportingclassification"></a>
<a id="schema_TaxReportingClassification"></a>
<a id="tocStaxreportingclassification"></a>
<a id="tocstaxreportingclassification"></a>

```json
{
  "businessType": "other",
  "financialInstitutionNumber": "string",
  "mainSourceOfIncome": "businessOperation",
  "type": "nonFinancialNonReportable"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessType|string|false|none|The organization's business type.<br><br>Possible values: **other**, **listedPublicCompany**, **subsidiaryOfListedPublicCompany**, **governmentalOrganization**, **internationalOrganization**, **financialInstitution**.|
|financialInstitutionNumber|string|false|none|The Global Intermediary Identification Number (GIIN) required for FATCA. Only required if the organization is a US financial institution and the `businessType` is **financialInstitution**.|
|mainSourceOfIncome|string|false|none|The organization's main source of income. Only required if `businessType` is **other**.<br><br>Possible values: **businessOperation**, **realEstateSales**, **investmentInterestOrRoyalty**, **propertyRental**, **other**.|
|type|string|false|none|The tax reporting classification type.<br><br>Possible values: **nonFinancialNonReportable**, **financialNonReportable**, **nonFinancialActive**, **nonFinancialPassive**.|

#### Enumerated Values

|Property|Value|
|---|---|
|businessType|other|
|businessType|listedPublicCompany|
|businessType|subsidiaryOfListedPublicCompany|
|businessType|governmentalOrganization|
|businessType|internationalOrganization|
|businessType|financialInstitution|
|mainSourceOfIncome|businessOperation|
|mainSourceOfIncome|realEstateSales|
|mainSourceOfIncome|investmentInterestOrRoyalty|
|mainSourceOfIncome|propertyRental|
|mainSourceOfIncome|other|
|type|nonFinancialNonReportable|
|type|financialNonReportable|
|type|nonFinancialActive|
|type|nonFinancialPassive|

<h2 id="tocS_TermsOfServiceAcceptanceInfo">TermsOfServiceAcceptanceInfo</h2>
<!-- backwards compatibility -->
<a id="schematermsofserviceacceptanceinfo"></a>
<a id="schema_TermsOfServiceAcceptanceInfo"></a>
<a id="tocStermsofserviceacceptanceinfo"></a>
<a id="tocstermsofserviceacceptanceinfo"></a>

```json
{
  "acceptedBy": "string",
  "acceptedFor": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "id": "string",
  "type": "adyenAccount",
  "validTo": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedBy|string|false|none|The unique identifier of the user that accepted the Terms of Service.|
|acceptedFor|string|false|none|The unique identifier of the legal entity for which the Terms of Service are accepted.|
|createdAt|string(date-time)|false|none|The date when the Terms of Service were accepted, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00.|
|id|string|false|none|An Adyen-generated reference for the accepted Terms of Service.|
|type|string|false|none|The type of Terms of Service.<br><br>Possible values:<br>*  **adyenForPlatformsManage**<br>*  **adyenIssuing**<br>*  **adyenForPlatformsAdvanced**<br>*  **adyenCapital**<br>*  **adyenCapitalCashAdvance**<br>*  **adyenAccount**<br>*  **adyenCard**<br>*  **adyenFranchisee**<br>*  **adyenPccr**<br>*  **adyenChargeCard**<br>*  **kycOnInvite**<br>*  **directDebit**<br><br>|
|validTo|string(date-time)|false|none|The expiration date for the Terms of Service acceptance, in ISO 8601 extended format. For example, 2022-12-18T00:00:00+01:00.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|adyenAccount|
|type|adyenCapital|
|type|adyenCapitalCashAdvance|
|type|adyenCard|
|type|adyenChargeCard|
|type|adyenForPlatformsAdvanced|
|type|adyenForPlatformsManage|
|type|adyenFranchisee|
|type|adyenIssuing|
|type|adyenPccr|
|type|directDebit|
|type|kycOnInvite|

<h2 id="tocS_TransferInstrument">TransferInstrument</h2>
<!-- backwards compatibility -->
<a id="schematransferinstrument"></a>
<a id="schema_TransferInstrument"></a>
<a id="tocStransferinstrument"></a>
<a id="tocstransferinstrument"></a>

```json
{
  "bankAccount": {
    "accountIdentification": {
      "accountNumber": "string",
      "bsbCode": "string",
      "type": "auLocal"
    },
    "accountType": "string",
    "bankName": "string",
    "countryCode": "string",
    "trustedSource": true
  },
  "capabilities": {
    "property1": {
      "allowed": true,
      "id": "string",
      "requested": true,
      "verificationStatus": "string"
    },
    "property2": {
      "allowed": true,
      "id": "string",
      "requested": true,
      "verificationStatus": "string"
    }
  },
  "documentDetails": [
    {
      "active": true,
      "description": "string",
      "fileName": "string",
      "id": "string",
      "modificationDate": "1970-01-01T00:00:00Z",
      "pages": [
        {
          "pageName": "string",
          "pageNumber": 0,
          "type": "BACK"
        }
      ],
      "type": "string"
    }
  ],
  "id": "string",
  "legalEntityId": "string",
  "problems": [
    {
      "entity": {
        "documents": [
          "string"
        ],
        "id": "string",
        "owner": {
          "documents": [
            "string"
          ],
          "id": "string",
          "type": "BankAccount"
        },
        "type": "BankAccount"
      },
      "verificationErrors": [
        {
          "capabilities": [
            "acceptExternalFunding"
          ],
          "code": "string",
          "message": "string",
          "remediatingActions": [
            {
              "code": "string",
              "message": "string"
            }
          ],
          "subErrors": [
            {
              "capabilities": [
                "acceptExternalFunding"
              ],
              "code": "string",
              "message": "string",
              "type": "dataMissing",
              "remediatingActions": [
                {
                  "code": "string",
                  "message": "string"
                }
              ]
            }
          ],
          "type": "dataMissing"
        }
      ]
    }
  ],
  "type": "bankAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankAccount|[BankAccountInfo](#schemabankaccountinfo)|true|none|Contains information about the legal entity's bank account.|
|capabilities|object|false|none|List of capabilities for this transfer instrument.|
|documentDetails|[[DocumentReference](#schemadocumentreference)]|false|none|List of documents uploaded for the transfer instrument.|
|id|string|true|read-only|The unique identifier of the transfer instrument.|
|legalEntityId|string|true|none|The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) that owns the transfer instrument.|
|problems|[[CapabilityProblem](#schemacapabilityproblem)]|false|none|The verification errors related to capabilities for this transfer instrument.|
|type|string|true|none|The type of transfer instrument.<br><br>Possible value: **bankAccount**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|bankAccount|
|type|recurringDetail|

<h2 id="tocS_TransferInstrumentInfo">TransferInstrumentInfo</h2>
<!-- backwards compatibility -->
<a id="schematransferinstrumentinfo"></a>
<a id="schema_TransferInstrumentInfo"></a>
<a id="tocStransferinstrumentinfo"></a>
<a id="tocstransferinstrumentinfo"></a>

```json
{
  "bankAccount": {
    "accountIdentification": {
      "accountNumber": "string",
      "bsbCode": "string",
      "type": "auLocal"
    },
    "accountType": "string",
    "bankName": "string",
    "countryCode": "string",
    "trustedSource": true
  },
  "legalEntityId": "string",
  "type": "bankAccount"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankAccount|[BankAccountInfo](#schemabankaccountinfo)|true|none|Contains information about the legal entity's bank account.|
|legalEntityId|string|true|none|The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) that owns the transfer instrument.|
|type|string|true|none|The type of transfer instrument.<br><br>Possible value: **bankAccount**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|bankAccount|
|type|recurringDetail|

<h2 id="tocS_TransferInstrumentReference">TransferInstrumentReference</h2>
<!-- backwards compatibility -->
<a id="schematransferinstrumentreference"></a>
<a id="schema_TransferInstrumentReference"></a>
<a id="tocStransferinstrumentreference"></a>
<a id="tocstransferinstrumentreference"></a>

```json
{
  "accountIdentifier": "string",
  "id": "string",
  "realLastFour": "string",
  "trustedSource": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIdentifier|string|true|none|The masked IBAN or bank account number.|
|id|string|true|none|The unique identifier of the resource.|
|realLastFour|string|false|none|Four last digits of the bank account number. If the transfer instrument is created using [instant bank account verification](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-08-hosted-onboarding), and it is a virtual bank account, these digits may be different from the last four digits of the masked account number.|
|trustedSource|boolean|false|read-only|Identifies if the bank account was created through [instant bank verification](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-08-hosted-onboarding).|

<h2 id="tocS_Trust">Trust</h2>
<!-- backwards compatibility -->
<a id="schematrust"></a>
<a id="schema_Trust"></a>
<a id="tocStrust"></a>
<a id="tocstrust"></a>

```json
{
  "countryOfGoverningLaw": "string",
  "dateOfIncorporation": "string",
  "description": "string",
  "doingBusinessAs": "string",
  "doingBusinessAsAbsent": true,
  "name": "string",
  "principalPlaceOfBusiness": {
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string",
    "street2": "string"
  },
  "registeredAddress": {
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string",
    "street2": "string"
  },
  "registrationNumber": "string",
  "residentialAddressIndicator": true,
  "taxInformation": [
    {
      "country": "st",
      "number": "string",
      "numberAbsent": true,
      "type": "string"
    }
  ],
  "type": "businessTrust",
  "undefinedBeneficiaryInfo": [
    {
      "description": "string",
      "reference": "string"
    }
  ],
  "vatAbsenceReason": "industryExemption",
  "vatNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryOfGoverningLaw|string|true|none|The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country.|
|dateOfIncorporation|string|false|none|The date when the legal arrangement was incorporated in YYYY-MM-DD format.|
|description|string|false|none|A short description about the trust. Only applicable for charitable trusts in New Zealand.|
|doingBusinessAs|string|false|none|The registered name, if different from the `name`.|
|doingBusinessAsAbsent|boolean \| null|false|none|Set this to **true** if the legal arrangement does not have a `Doing business as` name.|
|name|string|true|none|The legal name. Must be at least 3 characters.<br><br>Only the following special characters are allowed: **,**, **-**, **—**, **.**, **;**, **:**, **&**, **?**, **@**, **(**, **)**, **"**, **'**, **!**, **\**, **+**, **/**. Accents and non-Latin scripts are allowed.<br><br>The field cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious names** such as **John Doe** or **N/A**.<br><br>For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).|
|principalPlaceOfBusiness|[Address](#schemaaddress)|false|none|The business address. Required if the principal place of business is different from the `registeredAddress`.|
|registeredAddress|[Address](#schemaaddress)|true|none|The address registered at the registrar, such as the Chamber of Commerce. If you use a PO box, you must also provide a `principalPlaceOfBusiness`. The principal place of business cannot be a PO box.<br><br>Address fields cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious values** such as **John Doe** or **N/A**. All parts of the address must be different. For example, Spain, Spain, Spain is not allowed.<br><br>For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).|
|registrationNumber|string|false|none|The registration number.|
|residentialAddressIndicator|boolean \| null|false|none|Indicates if the `registeredAddress` is a place of residence, instead of a business address.<br><br>Set to **true** if the address is a place of residence. The default value is **false**.|
|taxInformation|[[TaxInformation](#schemataxinformation)]|false|none|The tax information of the entity.|
|type|string|true|none|Type of trust.<br><br>See possible values for trusts in [Australia](https://docs.adyen.com/platforms/verification-requirements/?tab=trust_3_4#trust-types-in-australia) and [New Zealand](https://docs.adyen.com/platforms/verification-requirements/?tab=trust_3_4#trust-types-in-new-zealand).|
|undefinedBeneficiaryInfo|[[UndefinedBeneficiary](#schemaundefinedbeneficiary)]|false|none|The undefined beneficiary information of the entity.|
|vatAbsenceReason|string|false|none|The reason for not providing a VAT number.<br><br>Possible values: **industryExemption**, **belowTaxThreshold**.|
|vatNumber|string|false|none|The VAT number.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|businessTrust|
|type|cashManagementTrust|
|type|charitableTrust|
|type|corporateUnitTrust|
|type|deceasedEstate|
|type|discretionaryTrust|
|type|discretionaryInvestmentTrust|
|type|discretionaryServicesManagementTrust|
|type|discretionaryTradingTrust|
|type|familyTrust|
|type|firstHomeSaverAccountsTrust|
|type|fixedTrust|
|type|fixedUnitTrust|
|type|hybridTrust|
|type|listedPublicUnitTrust|
|type|otherTrust|
|type|pooledSuperannuationTrust|
|type|publicTradingTrust|
|type|unlistedPublicUnitTrust|
|vatAbsenceReason|industryExemption|
|vatAbsenceReason|belowTaxThreshold|

<h2 id="tocS_UKLocalAccountIdentification">UKLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemauklocalaccountidentification"></a>
<a id="schema_UKLocalAccountIdentification"></a>
<a id="tocSuklocalaccountidentification"></a>
<a id="tocsuklocalaccountidentification"></a>

```json
{
  "accountNumber": "stringst",
  "sortCode": "string",
  "type": "ukLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The 8-digit bank account number, without separators or whitespace.|
|sortCode|string|true|none|The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.|
|type|string|true|none|**ukLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ukLocal|

<h2 id="tocS_USLocalAccountIdentification">USLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemauslocalaccountidentification"></a>
<a id="schema_USLocalAccountIdentification"></a>
<a id="tocSuslocalaccountidentification"></a>
<a id="tocsuslocalaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "accountType": "checking",
  "routingNumber": "stringstr",
  "type": "usLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The bank account number, without separators or whitespace.|
|accountType|string|false|none|The bank account type.<br><br>Possible values: **checking** or **savings**. Defaults to **checking**.|
|routingNumber|string|true|none|The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.|
|type|string|true|none|**usLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|checking|
|accountType|savings|
|type|usLocal|

<h2 id="tocS_UndefinedBeneficiary">UndefinedBeneficiary</h2>
<!-- backwards compatibility -->
<a id="schemaundefinedbeneficiary"></a>
<a id="schema_UndefinedBeneficiary"></a>
<a id="tocSundefinedbeneficiary"></a>
<a id="tocsundefinedbeneficiary"></a>

```json
{
  "description": "string",
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The details of the undefined beneficiary.|
|reference|string|false|read-only|The reference of the undefined beneficiary.|

<h2 id="tocS_UnincorporatedPartnership">UnincorporatedPartnership</h2>
<!-- backwards compatibility -->
<a id="schemaunincorporatedpartnership"></a>
<a id="schema_UnincorporatedPartnership"></a>
<a id="tocSunincorporatedpartnership"></a>
<a id="tocsunincorporatedpartnership"></a>

```json
{
  "countryOfGoverningLaw": "string",
  "dateOfIncorporation": "string",
  "description": "string",
  "doingBusinessAs": "string",
  "doingBusinessAsAbsent": true,
  "name": "string",
  "principalPlaceOfBusiness": {
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string",
    "street2": "string"
  },
  "registeredAddress": {
    "city": "string",
    "country": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string",
    "street2": "string"
  },
  "registrationNumber": "string",
  "residentialAddressIndicator": true,
  "taxInformation": [
    {
      "country": "st",
      "number": "string",
      "numberAbsent": true,
      "type": "string"
    }
  ],
  "type": "limitedPartnership",
  "vatAbsenceReason": "industryExemption",
  "vatNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryOfGoverningLaw|string|true|none|The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country.|
|dateOfIncorporation|string|false|none|The date when the legal arrangement was incorporated in YYYY-MM-DD format.|
|description|string|false|none|Short description about the Legal Arrangement.|
|doingBusinessAs|string|false|none|The registered name, if different from the `name`.|
|doingBusinessAsAbsent|boolean \| null|false|none|Set this to **true** if the legal arrangement does not have a `Doing business as` name.|
|name|string|true|none|The legal name. Must be at least 3 characters.<br><br>Only the following special characters are allowed: **,**, **-**, **—**, **.**, **;**, **:**, **&**, **?**, **@**, **(**, **)**, **"**, **'**, **!**, **\**, **+**, **/**. Accents and non-Latin scripts are allowed.<br><br>The field cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious names** such as **John Doe** or **N/A**.<br><br>For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).|
|principalPlaceOfBusiness|[Address](#schemaaddress)|false|none|The business address. Required if the principal place of business is different from the `registeredAddress`.|
|registeredAddress|[Address](#schemaaddress)|true|none|The address registered at the registrar, such as the Chamber of Commerce. If you use a PO box, you must also provide a `principalPlaceOfBusiness`. The principal place of business cannot be a PO box.<br><br>Address fields cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious values** such as **John Doe** or **N/A**. All parts of the address must be different. For example, Spain, Spain, Spain is not allowed.<br><br>For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).|
|registrationNumber|string|false|none|The registration number.|
|residentialAddressIndicator|boolean \| null|false|none|Indicates if the `registeredAddress` is a place of residence, instead of a business address.<br><br>Set to **true** if the address is a place of residence. The default value is **false**.|
|taxInformation|[[TaxInformation](#schemataxinformation)]|false|none|The tax information of the entity.|
|type|string|false|read-only|Type of Partnership.<br><br>Possible values:<br>*  **limitedPartnership**<br>*  **generalPartnership**<br>*  **familyPartnership**<br>*  **commercialPartnership**<br>*  **publicPartnership**<br>*  **otherPartnership**<br>*  **gbr**<br>*  **gmbh**<br>*  **kgaa**<br>*  **cv**<br>*  **vof**<br>*  **maatschap**<br>*  **privateFundLimitedPartnership**<br>*  **businessTrustEntity**<br>*  **businessPartnership**<br>*  **limitedLiabilityPartnership**<br>*  **eg**<br>*  **cooperative**<br>*  **vos**<br>*  **comunidadDeBienes**<br>*  **herenciaYacente**<br>*  **comunidadDePropietarios**<br>*  **sep**<br>*  **sca**<br>*  **bt**<br>*  **kkt**<br>*  **scs**<br>*  **snc**<br><br>|
|vatAbsenceReason|string|false|none|The reason for not providing a VAT number.<br><br>Possible values: **industryExemption**, **belowTaxThreshold**.|
|vatNumber|string|false|none|The VAT number.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|limitedPartnership|
|type|generalPartnership|
|type|familyPartnership|
|type|commercialPartnership|
|type|publicPartnership|
|type|otherPartnership|
|type|gbr|
|type|gmbh|
|type|kgaa|
|type|cv|
|type|vof|
|type|maatschap|
|type|privateFundLimitedPartnership|
|type|businessTrustEntity|
|type|businessPartnership|
|type|limitedLiabilityPartnership|
|type|eg|
|type|cooperative|
|type|vos|
|type|comunidadDeBienes|
|type|herenciaYacente|
|type|comunidadDePropietarios|
|type|sep|
|type|sca|
|type|bt|
|type|kkt|
|type|scs|
|type|snc|
|vatAbsenceReason|industryExemption|
|vatAbsenceReason|belowTaxThreshold|

<h2 id="tocS_VerificationDeadline">VerificationDeadline</h2>
<!-- backwards compatibility -->
<a id="schemaverificationdeadline"></a>
<a id="schema_VerificationDeadline"></a>
<a id="tocSverificationdeadline"></a>
<a id="tocsverificationdeadline"></a>

```json
{
  "capabilities": [
    "acceptExternalFunding"
  ],
  "entityIds": [
    "string"
  ],
  "expiresAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[string]|true|read-only|The list of capabilities that will be disallowed if information is not reviewed by the time of the deadline|
|entityIds|[string]|false|read-only|The unique identifiers of the legal entity or supporting entities that the deadline applies to|
|expiresAt|string(date-time)|true|read-only|The date that verification is due by before capabilities are disallowed.|

#### Enumerated Values

|Property|Value|
|---|---|
|capabilities|acceptExternalFunding|
|capabilities|acceptPspFunding|
|capabilities|acceptTransactionInRestrictedCountries|
|capabilities|acceptTransactionInRestrictedCountriesCommercial|
|capabilities|acceptTransactionInRestrictedCountriesConsumer|
|capabilities|acceptTransactionInRestrictedIndustries|
|capabilities|acceptTransactionInRestrictedIndustriesCommercial|
|capabilities|acceptTransactionInRestrictedIndustriesConsumer|
|capabilities|acquiring|
|capabilities|atmWithdrawal|
|capabilities|atmWithdrawalCommercial|
|capabilities|atmWithdrawalConsumer|
|capabilities|atmWithdrawalInRestrictedCountries|
|capabilities|atmWithdrawalInRestrictedCountriesCommercial|
|capabilities|atmWithdrawalInRestrictedCountriesConsumer|
|capabilities|authorisedPaymentInstrumentUser|
|capabilities|getGrantOffers|
|capabilities|issueBankAccount|
|capabilities|issueCard|
|capabilities|issueCardCommercial|
|capabilities|issueCardConsumer|
|capabilities|issueChargeCard|
|capabilities|issueChargeCardCommercial|
|capabilities|issueCreditLimit|
|capabilities|localAcceptance|
|capabilities|payout|
|capabilities|payoutToTransferInstrument|
|capabilities|processing|
|capabilities|receiveFromBalanceAccount|
|capabilities|receiveFromPlatformPayments|
|capabilities|receiveFromThirdParty|
|capabilities|receiveFromTransferInstrument|
|capabilities|receiveGrants|
|capabilities|receivePayments|
|capabilities|sendToBalanceAccount|
|capabilities|sendToThirdParty|
|capabilities|sendToTransferInstrument|
|capabilities|thirdPartyFunding|
|capabilities|useCard|
|capabilities|useCardCommercial|
|capabilities|useCardConsumer|
|capabilities|useCardInRestrictedCountries|
|capabilities|useCardInRestrictedCountriesCommercial|
|capabilities|useCardInRestrictedCountriesConsumer|
|capabilities|useCardInRestrictedIndustries|
|capabilities|useCardInRestrictedIndustriesCommercial|
|capabilities|useCardInRestrictedIndustriesConsumer|
|capabilities|useChargeCard|
|capabilities|useChargeCardCommercial|
|capabilities|withdrawFromAtm|
|capabilities|withdrawFromAtmCommercial|
|capabilities|withdrawFromAtmConsumer|
|capabilities|withdrawFromAtmInRestrictedCountries|
|capabilities|withdrawFromAtmInRestrictedCountriesCommercial|
|capabilities|withdrawFromAtmInRestrictedCountriesConsumer|

<h2 id="tocS_VerificationError">VerificationError</h2>
<!-- backwards compatibility -->
<a id="schemaverificationerror"></a>
<a id="schema_VerificationError"></a>
<a id="tocSverificationerror"></a>
<a id="tocsverificationerror"></a>

```json
{
  "capabilities": [
    "acceptExternalFunding"
  ],
  "code": "string",
  "message": "string",
  "remediatingActions": [
    {
      "code": "string",
      "message": "string"
    }
  ],
  "subErrors": [
    {
      "capabilities": [
        "acceptExternalFunding"
      ],
      "code": "string",
      "message": "string",
      "type": "dataMissing",
      "remediatingActions": [
        {
          "code": "string",
          "message": "string"
        }
      ]
    }
  ],
  "type": "dataMissing"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[string]|false|none|Contains key-value pairs that specify the actions that the legal entity can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability.|
|code|string|false|none|The general error code.|
|message|string|false|none|The general error message.|
|remediatingActions|[[RemediatingAction](#schemaremediatingaction)]|false|none|An object containing possible solutions to fix a verification error.|
|subErrors|[[VerificationError-recursive](#schemaverificationerror-recursive)]|false|none|An array containing more granular information about the cause of the verification error.|
|type|string|false|none|The type of error.<br><br>Possible values:<br>*  **invalidInput**<br>*  **dataMissing**<br>*  **pendingStatus**<br>*  **rejected**<br>*  **dataReview**<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|capabilities|acceptExternalFunding|
|capabilities|acceptPspFunding|
|capabilities|acceptTransactionInRestrictedCountries|
|capabilities|acceptTransactionInRestrictedCountriesCommercial|
|capabilities|acceptTransactionInRestrictedCountriesConsumer|
|capabilities|acceptTransactionInRestrictedIndustries|
|capabilities|acceptTransactionInRestrictedIndustriesCommercial|
|capabilities|acceptTransactionInRestrictedIndustriesConsumer|
|capabilities|acquiring|
|capabilities|atmWithdrawal|
|capabilities|atmWithdrawalCommercial|
|capabilities|atmWithdrawalConsumer|
|capabilities|atmWithdrawalInRestrictedCountries|
|capabilities|atmWithdrawalInRestrictedCountriesCommercial|
|capabilities|atmWithdrawalInRestrictedCountriesConsumer|
|capabilities|authorisedPaymentInstrumentUser|
|capabilities|getGrantOffers|
|capabilities|issueBankAccount|
|capabilities|issueCard|
|capabilities|issueCardCommercial|
|capabilities|issueCardConsumer|
|capabilities|issueChargeCard|
|capabilities|issueChargeCardCommercial|
|capabilities|issueCreditLimit|
|capabilities|localAcceptance|
|capabilities|payout|
|capabilities|payoutToTransferInstrument|
|capabilities|processing|
|capabilities|receiveFromBalanceAccount|
|capabilities|receiveFromPlatformPayments|
|capabilities|receiveFromThirdParty|
|capabilities|receiveFromTransferInstrument|
|capabilities|receiveGrants|
|capabilities|receivePayments|
|capabilities|sendToBalanceAccount|
|capabilities|sendToThirdParty|
|capabilities|sendToTransferInstrument|
|capabilities|thirdPartyFunding|
|capabilities|useCard|
|capabilities|useCardCommercial|
|capabilities|useCardConsumer|
|capabilities|useCardInRestrictedCountries|
|capabilities|useCardInRestrictedCountriesCommercial|
|capabilities|useCardInRestrictedCountriesConsumer|
|capabilities|useCardInRestrictedIndustries|
|capabilities|useCardInRestrictedIndustriesCommercial|
|capabilities|useCardInRestrictedIndustriesConsumer|
|capabilities|useChargeCard|
|capabilities|useChargeCardCommercial|
|capabilities|withdrawFromAtm|
|capabilities|withdrawFromAtmCommercial|
|capabilities|withdrawFromAtmConsumer|
|capabilities|withdrawFromAtmInRestrictedCountries|
|capabilities|withdrawFromAtmInRestrictedCountriesCommercial|
|capabilities|withdrawFromAtmInRestrictedCountriesConsumer|
|type|dataMissing|
|type|dataReview|
|type|invalidInput|
|type|pendingStatus|
|type|rejected|

<h2 id="tocS_VerificationError-recursive">VerificationError-recursive</h2>
<!-- backwards compatibility -->
<a id="schemaverificationerror-recursive"></a>
<a id="schema_VerificationError-recursive"></a>
<a id="tocSverificationerror-recursive"></a>
<a id="tocsverificationerror-recursive"></a>

```json
{
  "capabilities": [
    "acceptExternalFunding"
  ],
  "code": "string",
  "message": "string",
  "type": "dataMissing",
  "remediatingActions": [
    {
      "code": "string",
      "message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[string]|false|none|Contains key-value pairs that specify the actions that the legal entity can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability.|
|code|string|false|none|The general error code.|
|message|string|false|none|The general error message.|
|type|string|false|none|The type of error.<br><br>Possible values:<br>*  **invalidInput**<br>*  **dataMissing**<br>*  **pendingStatus**<br>*  **rejected**<br>*  **dataReview**<br><br>|
|remediatingActions|[[RemediatingAction](#schemaremediatingaction)]|false|none|An object containing possible solutions to fix a verification error.|

#### Enumerated Values

|Property|Value|
|---|---|
|capabilities|acceptExternalFunding|
|capabilities|acceptPspFunding|
|capabilities|acceptTransactionInRestrictedCountries|
|capabilities|acceptTransactionInRestrictedCountriesCommercial|
|capabilities|acceptTransactionInRestrictedCountriesConsumer|
|capabilities|acceptTransactionInRestrictedIndustries|
|capabilities|acceptTransactionInRestrictedIndustriesCommercial|
|capabilities|acceptTransactionInRestrictedIndustriesConsumer|
|capabilities|acquiring|
|capabilities|atmWithdrawal|
|capabilities|atmWithdrawalCommercial|
|capabilities|atmWithdrawalConsumer|
|capabilities|atmWithdrawalInRestrictedCountries|
|capabilities|atmWithdrawalInRestrictedCountriesCommercial|
|capabilities|atmWithdrawalInRestrictedCountriesConsumer|
|capabilities|authorisedPaymentInstrumentUser|
|capabilities|getGrantOffers|
|capabilities|issueBankAccount|
|capabilities|issueCard|
|capabilities|issueCardCommercial|
|capabilities|issueCardConsumer|
|capabilities|issueChargeCard|
|capabilities|issueChargeCardCommercial|
|capabilities|issueCreditLimit|
|capabilities|localAcceptance|
|capabilities|payout|
|capabilities|payoutToTransferInstrument|
|capabilities|processing|
|capabilities|receiveFromBalanceAccount|
|capabilities|receiveFromPlatformPayments|
|capabilities|receiveFromThirdParty|
|capabilities|receiveFromTransferInstrument|
|capabilities|receiveGrants|
|capabilities|receivePayments|
|capabilities|sendToBalanceAccount|
|capabilities|sendToThirdParty|
|capabilities|sendToTransferInstrument|
|capabilities|thirdPartyFunding|
|capabilities|useCard|
|capabilities|useCardCommercial|
|capabilities|useCardConsumer|
|capabilities|useCardInRestrictedCountries|
|capabilities|useCardInRestrictedCountriesCommercial|
|capabilities|useCardInRestrictedCountriesConsumer|
|capabilities|useCardInRestrictedIndustries|
|capabilities|useCardInRestrictedIndustriesCommercial|
|capabilities|useCardInRestrictedIndustriesConsumer|
|capabilities|useChargeCard|
|capabilities|useChargeCardCommercial|
|capabilities|withdrawFromAtm|
|capabilities|withdrawFromAtmCommercial|
|capabilities|withdrawFromAtmConsumer|
|capabilities|withdrawFromAtmInRestrictedCountries|
|capabilities|withdrawFromAtmInRestrictedCountriesCommercial|
|capabilities|withdrawFromAtmInRestrictedCountriesConsumer|
|type|dataMissing|
|type|dataReview|
|type|invalidInput|
|type|pendingStatus|
|type|rejected|

<h2 id="tocS_VerificationErrors">VerificationErrors</h2>
<!-- backwards compatibility -->
<a id="schemaverificationerrors"></a>
<a id="schema_VerificationErrors"></a>
<a id="tocSverificationerrors"></a>
<a id="tocsverificationerrors"></a>

```json
{
  "problems": [
    {
      "entity": {
        "documents": [
          "string"
        ],
        "id": "string",
        "owner": {
          "documents": [
            "string"
          ],
          "id": "string",
          "type": "BankAccount"
        },
        "type": "BankAccount"
      },
      "verificationErrors": [
        {
          "capabilities": [
            "acceptExternalFunding"
          ],
          "code": "string",
          "message": "string",
          "remediatingActions": [
            {
              "code": "string",
              "message": "string"
            }
          ],
          "subErrors": [
            {
              "capabilities": [
                "acceptExternalFunding"
              ],
              "code": "string",
              "message": "string",
              "type": "dataMissing",
              "remediatingActions": [
                {
                  "code": "string",
                  "message": "string"
                }
              ]
            }
          ],
          "type": "dataMissing"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|problems|[[CapabilityProblem](#schemacapabilityproblem)]|false|none|List of the verification errors.|

<h2 id="tocS_WebData">WebData</h2>
<!-- backwards compatibility -->
<a id="schemawebdata"></a>
<a id="schema_WebData"></a>
<a id="tocSwebdata"></a>
<a id="tocswebdata"></a>

```json
{
  "webAddress": "string",
  "webAddressId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webAddress|string|false|none|The URL of the website or the app store URL.|
|webAddressId|string|false|read-only|The unique identifier of the web address.|

<h2 id="tocS_WebDataExemption">WebDataExemption</h2>
<!-- backwards compatibility -->
<a id="schemawebdataexemption"></a>
<a id="schema_WebDataExemption"></a>
<a id="tocSwebdataexemption"></a>
<a id="tocswebdataexemption"></a>

```json
{
  "reason": "noOnlinePresence"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason why the web data was not provided. Possible value: **noOnlinePresence**.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|noOnlinePresence|
|reason|notCollectedDuringOnboarding|
