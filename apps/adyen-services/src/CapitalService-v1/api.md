<h1 id="capital-api">Capital API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Capital API provides endpoints for embedding [Adyen Capital](https://docs.adyen.com/capital) into your marketplace or platform. With Capital, you can offer business financing to your users as grants. When a user receives a grant, they must repay the grant amount in a specified term, in addition to paying a fee for using this service.

With these endpoints, you can:
- **Get available financing offers**: You can get a list of offers with fixed amounts or a range of available financing for your users. Adyen configures the financing amount, the fee, and the repayment conditions for each offer. These configurations are based on proactive risk analyses that Adyen performs on your users.
- **Make requests for grants**: When a user selects a financing offer, you can make a request for the grant on their behalf.
- **Get information about your grant account**: Your grant account tracks the information of all grants in your marketplace or platform.

## Authentication
Each request made to the Capital API must be signed with an API key. Generate an API key in your Customer Area.

To connect to the API, add an `X-API-Key` header with the API key as the value, for example:

 ```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY" \
...
```

## Roles and permissions
To use the Capital API, your API credential must have the following roles:
- **Balance_Platform_Capital_Configuration_Role**
- **Balance_Platform_Capital_Grant_Initiation_Role**

Reach out to your Adyen contact to set up these roles.
## Going live
When going live, generate an API key in your [live Customer Area](https://ca-live.adyen.com/ca). You can then use the API key to send requests to `https://balanceplatform-api-live.adyen.com/capital/v{version}`.

Base URLs:

* <a href="https://balanceplatform-api-test.adyen.com/capital/v1">https://balanceplatform-api-test.adyen.com/capital/v1</a> - Test Environment

* <a href="https://balanceplatform-api-live.adyen.com/capital/v1">https://balanceplatform-api-live.adyen.com/capital/v1</a> - Live Environment

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="capital-api-dynamic-offers">Dynamic offers</h1>

## Get all available dynamic offers

<a id="opIdget-dynamicOffers"></a>

> Code samples

```bash
curl 'https://balanceplatform-api-test.adyen.com/capital/v1/dynamicOffers?accountHolderId=string' \
  -H 'Accept: application/json'
```

`GET /dynamicOffers`

Returns a list of all [dynamic offers](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/) available for `accountHolderId` specified as a query parameter.

<h3 id="get-all-available-dynamic-offers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountHolderId|query|string|true|The unique identifier of the account holder that the dynamic offer is for.|
|financingType|query|[FinancingType](#schemafinancingtype)|false|The type of financing that the offer is for. If the value is not specified, returns all available types.<br><br>Possible values: **businessFinancing**|

#### Enumerated Values

|Parameter|Value|
|---|---|
|financingType|hardwareFinancing|
|financingType|businessFinancing|

> Example responses

> 200 Response

```json
{
  "dynamicOffers": [
    {
      "accountHolderId": "string",
      "contractType": "cashAdvance",
      "expiresAt": "1970-01-01T00:00:00Z",
      "financingType": "hardwareFinancing",
      "id": "string",
      "maximumAmount": {
        "currency": "string",
        "value": 0
      },
      "minimumAmount": {
        "currency": "string",
        "value": 0
      },
      "repayment": {
        "term": {
          "estimatedDays": 0,
          "maximumDays": 0
        }
      },
      "startsAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-all-available-dynamic-offers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[GetDynamicOffersResponse](#schemagetdynamicoffersresponse)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Calculate a preliminary offer for a selected financing amount

<a id="opIdpost-dynamicOffers-id-calculate"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/capital/v1/dynamicOffers/string/calculate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "amount": {
      "currency": "string",
      "value": 0
    }
  }'
```

`POST /dynamicOffers/{id}/calculate`

Calculates a preliminary offer for the financing amount that the user selected from a [dynamic offer](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/). The preliminary offer is for informational purposes only and cannot be used to initiate a grant.

Requests to this endpoint are subject to rate limits:

- Live environments: 120 requests per minute.

- Test environments: 120 requests per minute.



> Body parameter

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  }
}
```

<h3 id="calculate-a-preliminary-offer-for-a-selected-financing-amount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the dynamic offer from which the user selected the financing amount.|
|body|body|[CalculateGrantOfferRequest](#schemacalculategrantofferrequest)|false|none|
|» amount|body|[Amount](#schemaamount)|true|The financing amount that the user selected from a dynamic offer. Adyen uses this amount to calculate a preliminary offer.|

> Example responses

> 200 Response

```json
{
  "accountHolderId": "string",
  "amount": {
    "currency": "string",
    "value": 0
  },
  "contractType": "cashAdvance",
  "expiresAt": "1970-01-01T00:00:00Z",
  "fee": {
    "amount": {
      "currency": "string",
      "value": 0
    },
    "aprBasisPoints": 0
  },
  "repayment": {
    "basisPoints": 0,
    "term": {
      "estimatedDays": 0,
      "maximumDays": 0
    },
    "threshold": {
      "amount": {
        "currency": "string",
        "value": 0
      }
    }
  },
  "startsAt": "1970-01-01T00:00:00Z"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="calculate-a-preliminary-offer-for-a-selected-financing-amount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[CalculatedGrantOffer](#schemacalculatedgrantoffer)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a static offer for a selected financing amount

<a id="opIdpost-dynamicOffers-id-grantOffer"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/capital/v1/dynamicOffers/string/grantOffer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "amount": {
      "currency": "string",
      "value": 0
    }
  }'
```

`POST /dynamicOffers/{id}/grantOffer`

Creates a static offer for the financing amount that the user selected from the [dynamic offer](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/).

Requests to this endpoint are subject to rate limits:

- Live environments: 30 requests per minute.

- Test environments: 30 requests per minute.



> Body parameter

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  }
}
```

<h3 id="create-a-static-offer-for-a-selected-financing-amount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the dynamic offer from which the user selected the financing amount.|
|body|body|[CreateGrantOfferRequest](#schemacreategrantofferrequest)|false|none|
|» amount|body|[Amount](#schemaamount)|true|The financing amount that the user selected from the dynamic offer. Adyen uses this amount to create a static offer.|

> Example responses

> 200 Response

```json
{
  "accountHolderId": "string",
  "amount": {
    "currency": "string",
    "value": 0
  },
  "contractType": "cashAdvance",
  "expiresAt": "1970-01-01T00:00:00Z",
  "fee": {
    "amount": {
      "currency": "string",
      "value": 0
    },
    "aprBasisPoints": 0
  },
  "id": "string",
  "repayment": {
    "basisPoints": 0,
    "term": {
      "estimatedDays": 0,
      "maximumDays": 0
    },
    "threshold": {
      "amount": {
        "currency": "string",
        "value": 0
      }
    }
  },
  "startsAt": "1970-01-01T00:00:00Z"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="create-a-static-offer-for-a-selected-financing-amount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[GrantOffer](#schemagrantoffer)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="capital-api-grant-offers">Grant offers</h1>

## Get all available static offers

<a id="opIdget-grantOffers"></a>

> Code samples

```bash
curl 'https://balanceplatform-api-test.adyen.com/capital/v1/grantOffers?accountHolderId=string' \
  -H 'Accept: application/json'
```

`GET /grantOffers`

Returns a list of all [static offers](https://docs.adyen.com/capital/get-grant-offers/static-offers) available for `accountHolderId` specified as a query parameter. This also includes static offers created for financing amounts that the user selected from [dynamic offers](https://docs.adyen.com/capital/get-grant-offers/dynamic-offers/).

<h3 id="get-all-available-static-offers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountHolderId|query|string|true|The unique identifier of the account holder for which you want to get the available static offers.|

> Example responses

> 200 Response

```json
{
  "grantOffers": [
    {
      "accountHolderId": "string",
      "amount": {
        "currency": "string",
        "value": 0
      },
      "contractType": "cashAdvance",
      "expiresAt": "1970-01-01T00:00:00Z",
      "fee": {
        "amount": {
          "currency": "string",
          "value": 0
        },
        "aprBasisPoints": 0
      },
      "id": "string",
      "repayment": {
        "basisPoints": 0,
        "term": {
          "estimatedDays": 0,
          "maximumDays": 0
        },
        "threshold": {
          "amount": {
            "currency": "string",
            "value": 0
          }
        }
      },
      "startsAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> 404 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-all-available-static-offers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[GrantOffers](#schemagrantoffers)|
|404|Not Found|Not Found - The entity was not found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the details of a static offer

<a id="opIdget-grantOffers-id"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/capital/v1/grantOffers/string \
  -H 'Accept: application/json'
```

`GET /grantOffers/{id}`

Returns the details of the specified static offer.

<h3 id="get-the-details-of-a-static-offer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the static offer.|

> Example responses

> 200 Response

```json
{
  "accountHolderId": "string",
  "amount": {
    "currency": "string",
    "value": 0
  },
  "contractType": "cashAdvance",
  "expiresAt": "1970-01-01T00:00:00Z",
  "fee": {
    "amount": {
      "currency": "string",
      "value": 0
    },
    "aprBasisPoints": 0
  },
  "id": "string",
  "repayment": {
    "basisPoints": 0,
    "term": {
      "estimatedDays": 0,
      "maximumDays": 0
    },
    "threshold": {
      "amount": {
        "currency": "string",
        "value": 0
      }
    }
  },
  "startsAt": "1970-01-01T00:00:00Z"
}
```

> 404 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-the-details-of-a-static-offer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[GrantOffer](#schemagrantoffer)|
|404|Not Found|Not Found - The entity was not found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="capital-api-grants">Grants</h1>

## Get all the grants of an account holder

<a id="opIdget-grants"></a>

> Code samples

```bash
curl 'https://balanceplatform-api-test.adyen.com/capital/v1/grants?counterpartyAccountHolderId=string' \
  -H 'Accept: application/json'
```

`GET /grants`

Returns a list of all the grants of a specific account holder.

<h3 id="get-all-the-grants-of-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|counterpartyAccountHolderId|query|string|true|The unique identifier of the account holder that received the grants.|

> Example responses

> 200 Response

```json
{
  "grants": [
    {
      "balances": {
        "currency": "string",
        "fee": 0,
        "principal": 0,
        "total": 0
      },
      "counterparty": {
        "accountHolderId": "string",
        "balanceAccountId": "string",
        "transferInstrumentId": "string"
      },
      "grantAccountId": "string",
      "grantOfferId": "string",
      "id": "string",
      "status": {
        "actions": [
          {
            "actionCode": "string",
            "resolved": true
          }
        ],
        "code": "Pending"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-all-the-grants-of-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[Grants](#schemagrants)|
|404|Not Found|Not Found - The entity was not found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Make a request for a grant

<a id="opIdpost-grants"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/capital/v1/grants \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "counterparty": {
      "balanceAccountId": "string",
      "transferInstrumentId": "string"
    },
    "grantAccountId": "string",
    "grantOfferId": "string"
  }'
```

`POST /grants`

Make a request for a grant on behalf of an account holder.

> Body parameter

```json
{
  "counterparty": {
    "balanceAccountId": "string",
    "transferInstrumentId": "string"
  },
  "grantAccountId": "string",
  "grantOfferId": "string"
}
```

<h3 id="make-a-request-for-a-grant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GrantInfo](#schemagrantinfo)|false|none|
|» counterparty|body|[GrantInfoCounterparty](#schemagrantinfocounterparty)|false|Contains the details of the party that receives the grant.|
|» grantAccountId|body|string|true|The unique identifier of the grant account that tracks this grant.|
|» grantOfferId|body|string|true|The unique identifier of the selected offer. Adyen uses the details of the selected offer to create a grant.|

> Example responses

> 200 Response

```json
{
  "balances": {
    "currency": "string",
    "fee": 0,
    "principal": 0,
    "total": 0
  },
  "counterparty": {
    "accountHolderId": "string",
    "balanceAccountId": "string",
    "transferInstrumentId": "string"
  },
  "grantAccountId": "string",
  "grantOfferId": "string",
  "id": "string",
  "status": {
    "actions": [
      {
        "actionCode": "string",
        "resolved": true
      }
    ],
    "code": "Pending"
  }
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="make-a-request-for-a-grant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[Grant](#schemagrant)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the details of a grant

<a id="opIdget-grants-grantId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/capital/v1/grants/string \
  -H 'Accept: application/json'
```

`GET /grants/{grantId}`

Returns the details of the specified grant.

<h3 id="get-the-details-of-a-grant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|grantId|path|string|true|The unique identifier of the grant reference.|

> Example responses

> 200 Response

```json
{
  "balances": {
    "currency": "string",
    "fee": 0,
    "principal": 0,
    "total": 0
  },
  "counterparty": {
    "accountHolderId": "string",
    "balanceAccountId": "string",
    "transferInstrumentId": "string"
  },
  "grantAccountId": "string",
  "grantOfferId": "string",
  "id": "string",
  "status": {
    "actions": [
      {
        "actionCode": "string",
        "resolved": true
      }
    ],
    "code": "Pending"
  }
}
```

> 404 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-the-details-of-a-grant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[Grant](#schemagrant)|
|404|Not Found|Not Found - The entity was not found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Get all the disbursements of a grant

<a id="opIdget-grants-grantId-disbursements"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/capital/v1/grants/string/disbursements \
  -H 'Accept: application/json'
```

`GET /grants/{grantId}/disbursements`

Returns the disbursements of a specified grant.

<h3 id="get-all-the-disbursements-of-a-grant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|grantId|path|string|true|The unique identifier of the grant reference.|

> Example responses

> 200 Response

```json
{
  "disbursements": [
    {
      "accountHolderId": "string",
      "amount": {
        "currency": "string",
        "value": 0
      },
      "balanceAccountId": "string",
      "balances": {
        "currency": "string",
        "fee": 0,
        "principal": 0,
        "total": 0
      },
      "fee": {
        "amount": {
          "currency": "string",
          "value": 0
        }
      },
      "fundsCollections": [
        {
          "accountIdentification": {
            "type": "string"
          },
          "fundsCollectionType": "UnscheduledRepayment"
        }
      ],
      "grantId": "string",
      "id": "string",
      "repayment": {
        "basisPoints": 0,
        "updateDescription": "string"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-all-the-disbursements-of-a-grant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[Disbursements](#schemadisbursements)|
|404|Not Found|Not Found - The entity was not found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Get disbursement details

<a id="opIdget-grants-grantId-disbursements-disbursementId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/capital/v1/grants/string/disbursements/string \
  -H 'Accept: application/json'
```

`GET /grants/{grantId}/disbursements/{disbursementId}`

Returns the details of a disbursement specified in the path.

<h3 id="get-disbursement-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|grantId|path|string|true|The unique identifier of the grant reference.|
|disbursementId|path|string|true|The unique identifier of the disbursement.|

> Example responses

> 200 Response

```json
{
  "accountHolderId": "string",
  "amount": {
    "currency": "string",
    "value": 0
  },
  "balanceAccountId": "string",
  "balances": {
    "currency": "string",
    "fee": 0,
    "principal": 0,
    "total": 0
  },
  "fee": {
    "amount": {
      "currency": "string",
      "value": 0
    }
  },
  "fundsCollections": [
    {
      "accountIdentification": {
        "type": "string"
      },
      "fundsCollectionType": "UnscheduledRepayment"
    }
  ],
  "grantId": "string",
  "id": "string",
  "repayment": {
    "basisPoints": 0,
    "updateDescription": "string"
  }
}
```

> 404 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-disbursement-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[Disbursement](#schemadisbursement)|
|404|Not Found|Not Found - The entity was not found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Update the repayment configuration of a disbursement

<a id="opIdpatch-grants-grantId-disbursements-disbursementId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/capital/v1/grants/string/disbursements/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "repayment": {
      "basisPoints": 0,
      "updateDescription": "string"
    }
  }'
```

`PATCH /grants/{grantId}/disbursements/{disbursementId}`

Update the percentage of your user's net income that is deducted for repaying the grant.

> Body parameter

```json
{
  "repayment": {
    "basisPoints": 0,
    "updateDescription": "string"
  }
}
```

<h3 id="update-the-repayment-configuration-of-a-disbursement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|grantId|path|string|true|The unique identifier of the grant reference.|
|disbursementId|path|string|true|The unique identifier of the disbursement.|
|body|body|[DisbursementInfoUpdate](#schemadisbursementinfoupdate)|true|none|
|» repayment|body|[DisbursementRepaymentInfoUpdate](#schemadisbursementrepaymentinfoupdate)|false|Contains information about the basis points configured for repaying the disbursement.|

> Example responses

> 200 Response

```json
{
  "accountHolderId": "string",
  "amount": {
    "currency": "string",
    "value": 0
  },
  "balanceAccountId": "string",
  "balances": {
    "currency": "string",
    "fee": 0,
    "principal": 0,
    "total": 0
  },
  "fee": {
    "amount": {
      "currency": "string",
      "value": 0
    }
  },
  "fundsCollections": [
    {
      "accountIdentification": {
        "type": "string"
      },
      "fundsCollectionType": "UnscheduledRepayment"
    }
  ],
  "grantId": "string",
  "id": "string",
  "repayment": {
    "basisPoints": 0,
    "updateDescription": "string"
  }
}
```

> 404 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="update-the-repayment-configuration-of-a-disbursement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[Disbursement](#schemadisbursement)|
|404|Not Found|Not Found - The entity was not found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="capital-api-grant-accounts">Grant accounts</h1>

## Get the information of your grant account

<a id="opIdget-grantAccounts-id"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/capital/v1/grantAccounts/string \
  -H 'Accept: application/json'
```

`GET /grantAccounts/{id}`

Returns the details of the specified grant account. This account tracks existing grants in your marketplace or platform.

<h3 id="get-the-information-of-your-grant-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the grant account.|

> Example responses

> 200 Response

```json
{
  "balances": [
    {
      "currency": "string",
      "fee": 0,
      "principal": 0,
      "total": 0
    }
  ],
  "fundingBalanceAccountId": "string",
  "id": "string",
  "limits": [
    {
      "amount": {
        "currency": "string",
        "value": 0
      }
    }
  ]
}
```

> 404 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-the-information-of-your-grant-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[GrantAccount](#schemagrantaccount)|
|404|Not Found|Not Found - The entity was not found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
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
  "type": "auLocal",
  "accountNumber": "string",
  "bsbCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|accountNumber|string|true|none|The bank account number, without separators or whitespace.|
|bsbCode|string|true|none|The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.|
|type|string|true|none|**auLocal**|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "actionCode": "string",
  "resolved": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionCode|string|true|none|The code identifying the action that needs to be completed.|
|resolved|boolean|true|none|Indicates whether this action has been successfully completed.|

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
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.|
|value|integer(int64)|true|none|The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units).|

<h2 id="tocS_BRLocalAccountIdentification">BRLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemabrlocalaccountidentification"></a>
<a id="schema_BRLocalAccountIdentification"></a>
<a id="tocSbrlocalaccountidentification"></a>
<a id="tocsbrlocalaccountidentification"></a>

```json
{
  "type": "brLocal",
  "accountNumber": "string",
  "bankCode": "str",
  "branchNumber": "stri",
  "ispb": "stringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|accountNumber|string|true|none|The bank account number, without separators or whitespace.|
|bankCode|string|true|none|The 3-digit bank code, with leading zeros.|
|branchNumber|string|true|none|The bank account branch number, without separators or whitespace.|
|ispb|string|false|none|The 8-digit ISPB, with leading zeros.|
|type|string|true|none|**brLocal**|

<h2 id="tocS_Balance">Balance</h2>
<!-- backwards compatibility -->
<a id="schemabalance"></a>
<a id="schema_Balance"></a>
<a id="tocSbalance"></a>
<a id="tocsbalance"></a>

```json
{
  "currency": "string",
  "fee": 0,
  "principal": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|fee|integer(int64)|true|none|The amount of the grant fee.|
|principal|integer(int64)|true|none|The grant amount that is paid out to the user for business financing.|
|total|integer(int64)|true|none|The total amount of the grant that the user must repay. It is the sum of the fee amount and the principal amount.|

<h2 id="tocS_BankAccountIdentification">BankAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountidentification"></a>
<a id="schema_BankAccountIdentification"></a>
<a id="tocSbankaccountidentification"></a>
<a id="tocsbankaccountidentification"></a>

```json
{
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of account, which depends on the country of the account and the currency of the transfer.|

<h2 id="tocS_CALocalAccountIdentification">CALocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemacalocalaccountidentification"></a>
<a id="schema_CALocalAccountIdentification"></a>
<a id="tocScalocalaccountidentification"></a>
<a id="tocscalocalaccountidentification"></a>

```json
{
  "type": "caLocal",
  "accountNumber": "string",
  "accountType": "checking",
  "institutionNumber": "str",
  "transitNumber": "strin"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|accountNumber|string|true|none|The 5- to 12-digit bank account number, without separators or whitespace.|
|accountType|[CALocalBankAccountType](#schemacalocalbankaccounttype)|false|none|The bank account type.<br><br>Possible values: **checking** or **savings**. Defaults to **checking**.|
|institutionNumber|string|true|none|The 3-digit institution number, without separators or whitespace.|
|transitNumber|string|true|none|The 5-digit transit number, without separators or whitespace.|
|type|string|true|none|**caLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|checking|
|accountType|savings|

<h2 id="tocS_CALocalBankAccountType">CALocalBankAccountType</h2>
<!-- backwards compatibility -->
<a id="schemacalocalbankaccounttype"></a>
<a id="schema_CALocalBankAccountType"></a>
<a id="tocScalocalbankaccounttype"></a>
<a id="tocscalocalbankaccounttype"></a>

```json
"checking"
```

<h2 id="tocS_CZLocalAccountIdentification">CZLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaczlocalaccountidentification"></a>
<a id="schema_CZLocalAccountIdentification"></a>
<a id="tocSczlocalaccountidentification"></a>
<a id="tocsczlocalaccountidentification"></a>

```json
{
  "type": "czLocal",
  "accountNumber": "string",
  "bankCode": "stri"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|accountNumber|string|true|none|The 2- to 16-digit bank account number (Číslo účtu) in the following format:<br><br>- The optional prefix (předčíslí).<br><br>- The required second part (základní část) which must be at least two non-zero digits.<br><br>Examples:<br><br>- **19-123457** (with prefix)<br><br>- **123457** (without prefix)<br><br>- **000019-0000123457** (with prefix, normalized)<br><br>- **000000-0000123457** (without prefix, normalized)|
|bankCode|string|true|none|The 4-digit bank code (Kód banky), without separators or whitespace.|
|type|string|true|none|**czLocal**|

<h2 id="tocS_CalculateGrantOfferRequest">CalculateGrantOfferRequest</h2>
<!-- backwards compatibility -->
<a id="schemacalculategrantofferrequest"></a>
<a id="schema_CalculateGrantOfferRequest"></a>
<a id="tocScalculategrantofferrequest"></a>
<a id="tocscalculategrantofferrequest"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The financing amount that the user selected from a dynamic offer. Adyen uses this amount to calculate a preliminary offer.|

<h2 id="tocS_CalculatedGrantOffer">CalculatedGrantOffer</h2>
<!-- backwards compatibility -->
<a id="schemacalculatedgrantoffer"></a>
<a id="schema_CalculatedGrantOffer"></a>
<a id="tocScalculatedgrantoffer"></a>
<a id="tocscalculatedgrantoffer"></a>

```json
{
  "accountHolderId": "string",
  "amount": {
    "currency": "string",
    "value": 0
  },
  "contractType": "cashAdvance",
  "expiresAt": "1970-01-01T00:00:00Z",
  "fee": {
    "amount": {
      "currency": "string",
      "value": 0
    },
    "aprBasisPoints": 0
  },
  "repayment": {
    "basisPoints": 0,
    "term": {
      "estimatedDays": 0,
      "maximumDays": 0
    },
    "threshold": {
      "amount": {
        "currency": "string",
        "value": 0
      }
    }
  },
  "startsAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the account holder that the dynamic offer is for.|
|amount|[Amount](#schemaamount)|true|none|The financing amount that would be paid out to your user.|
|contractType|string|true|none|The contract type of the offer.<br><br>Possible values:<br>* **loan**<br>* **cashAdvance**|
|expiresAt|string(date-time)|true|none|The expiration date and time of the offer validity period.|
|fee|[GrantOfferFee](#schemagrantofferfee)|true|none|Contains information about the fee that your user would pay for the grant.|
|repayment|[Repayment](#schemarepayment)|true|none|Contains information about the repayment configuration of the grant.|
|startsAt|string(date-time)|true|none|The starting date and time of the offer validity period.|

#### Enumerated Values

|Property|Value|
|---|---|
|contractType|cashAdvance|
|contractType|loan|

<h2 id="tocS_CreateGrantOfferRequest">CreateGrantOfferRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategrantofferrequest"></a>
<a id="schema_CreateGrantOfferRequest"></a>
<a id="tocScreategrantofferrequest"></a>
<a id="tocscreategrantofferrequest"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The financing amount that the user selected from the dynamic offer. Adyen uses this amount to create a static offer.|

<h2 id="tocS_DKLocalAccountIdentification">DKLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemadklocalaccountidentification"></a>
<a id="schema_DKLocalAccountIdentification"></a>
<a id="tocSdklocalaccountidentification"></a>
<a id="tocsdklocalaccountidentification"></a>

```json
{
  "type": "dkLocal",
  "accountNumber": "string",
  "bankCode": "stri"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|accountNumber|string|true|none|The 4-10 digits bank account number (Kontonummer) (without separators or whitespace).|
|bankCode|string|true|none|The 4-digit bank code (Registreringsnummer) (without separators or whitespace).|
|type|string|true|none|**dkLocal**|

<h2 id="tocS_DefaultErrorResponseEntity">DefaultErrorResponseEntity</h2>
<!-- backwards compatibility -->
<a id="schemadefaulterrorresponseentity"></a>
<a id="schema_DefaultErrorResponseEntity"></a>
<a id="tocSdefaulterrorresponseentity"></a>
<a id="tocsdefaulterrorresponseentity"></a>

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

Standardized error response following RFC-7807 format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this occurrence of the problem.|
|errorCode|string|false|none|Unique business error code.|
|instance|string|false|none|A URI that identifies the specific occurrence of the problem if applicable.|
|invalidFields|[[InvalidField](#schemainvalidfield)]|false|none|Array of fields with validation errors when applicable.|
|requestId|string|false|none|The unique reference for the request.|
|status|integer(int32)|false|none|The HTTP status code.|
|title|string|false|none|A short, human-readable summary of the problem type.|
|type|string|false|none|A URI that identifies the validation error type. It points to human-readable documentation for the problem type.|

<h2 id="tocS_Disbursement">Disbursement</h2>
<!-- backwards compatibility -->
<a id="schemadisbursement"></a>
<a id="schema_Disbursement"></a>
<a id="tocSdisbursement"></a>
<a id="tocsdisbursement"></a>

```json
{
  "accountHolderId": "string",
  "amount": {
    "currency": "string",
    "value": 0
  },
  "balanceAccountId": "string",
  "balances": {
    "currency": "string",
    "fee": 0,
    "principal": 0,
    "total": 0
  },
  "fee": {
    "amount": {
      "currency": "string",
      "value": 0
    }
  },
  "fundsCollections": [
    {
      "accountIdentification": {
        "type": "string"
      },
      "fundsCollectionType": "UnscheduledRepayment"
    }
  ],
  "grantId": "string",
  "id": "string",
  "repayment": {
    "basisPoints": 0,
    "updateDescription": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the account holder that received the disbursement.|
|amount|[Amount](#schemaamount)|true|none|Contains information about the amount of the disbursement.|
|balanceAccountId|string|true|none|The unique identifier of the balance account that received the disbursement.|
|balances|[Balance](#schemabalance)|true|none|Contains information about the balances of the disbursement.|
|fee|[Fee](#schemafee)|true|none|Contains information about the fee that your user must pay for the disbursement.|
|fundsCollections|[[FundsCollection](#schemafundscollection)]|false|none|Contains information about the accounts that Adyen uses to collect funds related to repayments.|
|grantId|string|true|none|The unique identifier of the grant related to the disbursement.|
|id|string|true|none|The unique identifier of the disbursement.|
|repayment|[DisbursementRepayment](#schemadisbursementrepayment)|true|none|Contains information about the basis points configured for repaying the disbursement.|

<h2 id="tocS_DisbursementInfoUpdate">DisbursementInfoUpdate</h2>
<!-- backwards compatibility -->
<a id="schemadisbursementinfoupdate"></a>
<a id="schema_DisbursementInfoUpdate"></a>
<a id="tocSdisbursementinfoupdate"></a>
<a id="tocsdisbursementinfoupdate"></a>

```json
{
  "repayment": {
    "basisPoints": 0,
    "updateDescription": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repayment|[DisbursementRepaymentInfoUpdate](#schemadisbursementrepaymentinfoupdate)|false|none|Contains information about the basis points configured for repaying the disbursement.|

<h2 id="tocS_DisbursementRepayment">DisbursementRepayment</h2>
<!-- backwards compatibility -->
<a id="schemadisbursementrepayment"></a>
<a id="schema_DisbursementRepayment"></a>
<a id="tocSdisbursementrepayment"></a>
<a id="tocsdisbursementrepayment"></a>

```json
{
  "basisPoints": 0,
  "updateDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basisPoints|integer(int32)|true|none|The percentage of your user's incoming net volume that is deducted for repaying the grant. The percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).|
|updateDescription|string|true|none|**Deprecated.**|

<h2 id="tocS_DisbursementRepaymentInfoUpdate">DisbursementRepaymentInfoUpdate</h2>
<!-- backwards compatibility -->
<a id="schemadisbursementrepaymentinfoupdate"></a>
<a id="schema_DisbursementRepaymentInfoUpdate"></a>
<a id="tocSdisbursementrepaymentinfoupdate"></a>
<a id="tocsdisbursementrepaymentinfoupdate"></a>

```json
{
  "basisPoints": 0,
  "updateDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basisPoints|integer(int32)|false|none|The percentage of your user's incoming net volume that is deducted for repaying the grant. The percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).|
|updateDescription|string|false|none|**Deprecated.**|

<h2 id="tocS_Disbursements">Disbursements</h2>
<!-- backwards compatibility -->
<a id="schemadisbursements"></a>
<a id="schema_Disbursements"></a>
<a id="tocSdisbursements"></a>
<a id="tocsdisbursements"></a>

```json
{
  "disbursements": [
    {
      "accountHolderId": "string",
      "amount": {
        "currency": "string",
        "value": 0
      },
      "balanceAccountId": "string",
      "balances": {
        "currency": "string",
        "fee": 0,
        "principal": 0,
        "total": 0
      },
      "fee": {
        "amount": {
          "currency": "string",
          "value": 0
        }
      },
      "fundsCollections": [
        {
          "accountIdentification": {
            "type": "string"
          },
          "fundsCollectionType": "UnscheduledRepayment"
        }
      ],
      "grantId": "string",
      "id": "string",
      "repayment": {
        "basisPoints": 0,
        "updateDescription": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disbursements|[[Disbursement](#schemadisbursement)]|true|none|Contains a list of all disbursements related to the specified grant.|

<h2 id="tocS_DynamicOffer">DynamicOffer</h2>
<!-- backwards compatibility -->
<a id="schemadynamicoffer"></a>
<a id="schema_DynamicOffer"></a>
<a id="tocSdynamicoffer"></a>
<a id="tocsdynamicoffer"></a>

```json
{
  "accountHolderId": "string",
  "contractType": "cashAdvance",
  "expiresAt": "1970-01-01T00:00:00Z",
  "financingType": "hardwareFinancing",
  "id": "string",
  "maximumAmount": {
    "currency": "string",
    "value": 0
  },
  "minimumAmount": {
    "currency": "string",
    "value": 0
  },
  "repayment": {
    "term": {
      "estimatedDays": 0,
      "maximumDays": 0
    }
  },
  "startsAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the account holder that the dynamic offer is for.|
|contractType|string|true|none|The contract type of the offer.<br><br>Possible values:<br>* **loan**<br>* **cashAdvance**|
|expiresAt|string(date-time)|true|none|The expiration date and time of the offer validity period.|
|financingType|[FinancingType](#schemafinancingtype)|true|none|The type of financing that the offer is for.<br><br>Possible values: **businessFinancing**.|
|id|string|true|none|The unique identifier of the dynamic offer.|
|maximumAmount|[Amount](#schemaamount)|true|none|The maximum financing amount available to the account holder under this offer.|
|minimumAmount|[Amount](#schemaamount)|true|none|The minimum financing amount available to the account holder under this offer.|
|repayment|[DynamicOfferRepayment](#schemadynamicofferrepayment)|true|none|Contains information about the repayment configuration of the grant.|
|startsAt|string(date-time)|true|none|The starting date and time of the offer validity period.|

#### Enumerated Values

|Property|Value|
|---|---|
|contractType|cashAdvance|
|contractType|loan|
|financingType|hardwareFinancing|
|financingType|businessFinancing|

<h2 id="tocS_DynamicOfferRepayment">DynamicOfferRepayment</h2>
<!-- backwards compatibility -->
<a id="schemadynamicofferrepayment"></a>
<a id="schema_DynamicOfferRepayment"></a>
<a id="tocSdynamicofferrepayment"></a>
<a id="tocsdynamicofferrepayment"></a>

```json
{
  "term": {
    "estimatedDays": 0,
    "maximumDays": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|term|[RepaymentTerm](#schemarepaymentterm)|true|none|Contains information about the time period in which your user must repay the total amount of the grant.|

<h2 id="tocS_Fee">Fee</h2>
<!-- backwards compatibility -->
<a id="schemafee"></a>
<a id="schema_Fee"></a>
<a id="tocSfee"></a>
<a id="tocsfee"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|Contains the amount of the grant fee.|

<h2 id="tocS_FinancingType">FinancingType</h2>
<!-- backwards compatibility -->
<a id="schemafinancingtype"></a>
<a id="schema_FinancingType"></a>
<a id="tocSfinancingtype"></a>
<a id="tocsfinancingtype"></a>

```json
"hardwareFinancing"
```

<h2 id="tocS_FundsCollection">FundsCollection</h2>
<!-- backwards compatibility -->
<a id="schemafundscollection"></a>
<a id="schema_FundsCollection"></a>
<a id="tocSfundscollection"></a>
<a id="tocsfundscollection"></a>

```json
{
  "accountIdentification": {
    "type": "string"
  },
  "fundsCollectionType": "UnscheduledRepayment"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIdentification|[BankAccountIdentification](#schemabankaccountidentification)|false|none|Contains the identification information of the account to which you can transfer funds related to repayments.|
|fundsCollectionType|[FundsCollectionType](#schemafundscollectiontype)|false|none|The type of funds collection.<br><br>Possible values: **UnscheduledRepayment**, **Revocation**.|

#### Enumerated Values

|Property|Value|
|---|---|
|fundsCollectionType|UnscheduledRepayment|
|fundsCollectionType|Revocation|

<h2 id="tocS_FundsCollectionType">FundsCollectionType</h2>
<!-- backwards compatibility -->
<a id="schemafundscollectiontype"></a>
<a id="schema_FundsCollectionType"></a>
<a id="tocSfundscollectiontype"></a>
<a id="tocsfundscollectiontype"></a>

```json
"UnscheduledRepayment"
```

<h2 id="tocS_GetDynamicOffersResponse">GetDynamicOffersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdynamicoffersresponse"></a>
<a id="schema_GetDynamicOffersResponse"></a>
<a id="tocSgetdynamicoffersresponse"></a>
<a id="tocsgetdynamicoffersresponse"></a>

```json
{
  "dynamicOffers": [
    {
      "accountHolderId": "string",
      "contractType": "cashAdvance",
      "expiresAt": "1970-01-01T00:00:00Z",
      "financingType": "hardwareFinancing",
      "id": "string",
      "maximumAmount": {
        "currency": "string",
        "value": 0
      },
      "minimumAmount": {
        "currency": "string",
        "value": 0
      },
      "repayment": {
        "term": {
          "estimatedDays": 0,
          "maximumDays": 0
        }
      },
      "startsAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dynamicOffers|[[DynamicOffer](#schemadynamicoffer)]|true|none|Contains a list of available dynamic offers for the specified account holder.|

<h2 id="tocS_Grant">Grant</h2>
<!-- backwards compatibility -->
<a id="schemagrant"></a>
<a id="schema_Grant"></a>
<a id="tocSgrant"></a>
<a id="tocsgrant"></a>

```json
{
  "balances": {
    "currency": "string",
    "fee": 0,
    "principal": 0,
    "total": 0
  },
  "counterparty": {
    "accountHolderId": "string",
    "balanceAccountId": "string",
    "transferInstrumentId": "string"
  },
  "grantAccountId": "string",
  "grantOfferId": "string",
  "id": "string",
  "status": {
    "actions": [
      {
        "actionCode": "string",
        "resolved": true
      }
    ],
    "code": "Pending"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balances|[Balance](#schemabalance)|true|none|Contains information about the balances of the grant.|
|counterparty|[GrantCounterparty](#schemagrantcounterparty)|false|none|Contains the details of the party that receives the grant.|
|grantAccountId|string|true|none|The unique identifier of the grant account that tracks this grant.|
|grantOfferId|string|true|none|The unique identifier of the selected offer. Adyen uses the details of the selected offer to create a grant.|
|id|string|true|none|The unique identifier of the grant reference.|
|status|[Status](#schemastatus)|true|none|Contains the status of the grant.|

<h2 id="tocS_GrantAccount">GrantAccount</h2>
<!-- backwards compatibility -->
<a id="schemagrantaccount"></a>
<a id="schema_GrantAccount"></a>
<a id="tocSgrantaccount"></a>
<a id="tocsgrantaccount"></a>

```json
{
  "balances": [
    {
      "currency": "string",
      "fee": 0,
      "principal": 0,
      "total": 0
    }
  ],
  "fundingBalanceAccountId": "string",
  "id": "string",
  "limits": [
    {
      "amount": {
        "currency": "string",
        "value": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balances|[[Balance](#schemabalance)]|false|none|Contains the sum of the balances of all grants tracked by this grant account. The balances are separated by currency.|
|fundingBalanceAccountId|string|false|none|The unique identifier of the balance account used to fund the grant.|
|id|string|false|none|The unique identifier of the grant account.|
|limits|[[GrantLimit](#schemagrantlimit)]|false|none|Contains the maximum amount of funds that you can disburse for grants.|

<h2 id="tocS_GrantCounterparty">GrantCounterparty</h2>
<!-- backwards compatibility -->
<a id="schemagrantcounterparty"></a>
<a id="schema_GrantCounterparty"></a>
<a id="tocSgrantcounterparty"></a>
<a id="tocsgrantcounterparty"></a>

```json
{
  "accountHolderId": "string",
  "balanceAccountId": "string",
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|false|none|The unique identifier of the account holder that receives the grant.|
|balanceAccountId|string|false|none|The unique identifier of the balance account where the funds are disbursed. The balance account must belong to the specified account holder.|
|transferInstrumentId|string|false|none|The unique identifier of the transfer instrument where the funds are disbursed. The transfer instrument must belong to the legal entity of the specified account holder.|

<h2 id="tocS_GrantInfo">GrantInfo</h2>
<!-- backwards compatibility -->
<a id="schemagrantinfo"></a>
<a id="schema_GrantInfo"></a>
<a id="tocSgrantinfo"></a>
<a id="tocsgrantinfo"></a>

```json
{
  "counterparty": {
    "balanceAccountId": "string",
    "transferInstrumentId": "string"
  },
  "grantAccountId": "string",
  "grantOfferId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counterparty|[GrantInfoCounterparty](#schemagrantinfocounterparty)|false|none|Contains the details of the party that receives the grant.|
|grantAccountId|string|true|none|The unique identifier of the grant account that tracks this grant.|
|grantOfferId|string|true|none|The unique identifier of the selected offer. Adyen uses the details of the selected offer to create a grant.|

<h2 id="tocS_GrantInfoCounterparty">GrantInfoCounterparty</h2>
<!-- backwards compatibility -->
<a id="schemagrantinfocounterparty"></a>
<a id="schema_GrantInfoCounterparty"></a>
<a id="tocSgrantinfocounterparty"></a>
<a id="tocsgrantinfocounterparty"></a>

```json
{
  "balanceAccountId": "string",
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the balance account where the funds are disbursed. The balance account must belong to the specified account holder.|
|transferInstrumentId|string|false|none|The unique identifier of the transfer instrument where the funds are disbursed. The transfer instrument must belong to the legal entity of the specified account holder.|

<h2 id="tocS_GrantLimit">GrantLimit</h2>
<!-- backwards compatibility -->
<a id="schemagrantlimit"></a>
<a id="schema_GrantLimit"></a>
<a id="tocSgrantlimit"></a>
<a id="tocsgrantlimit"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The limit amount of the grant account.|

<h2 id="tocS_GrantOffer">GrantOffer</h2>
<!-- backwards compatibility -->
<a id="schemagrantoffer"></a>
<a id="schema_GrantOffer"></a>
<a id="tocSgrantoffer"></a>
<a id="tocsgrantoffer"></a>

```json
{
  "accountHolderId": "string",
  "amount": {
    "currency": "string",
    "value": 0
  },
  "contractType": "cashAdvance",
  "expiresAt": "1970-01-01T00:00:00Z",
  "fee": {
    "amount": {
      "currency": "string",
      "value": 0
    },
    "aprBasisPoints": 0
  },
  "id": "string",
  "repayment": {
    "basisPoints": 0,
    "term": {
      "estimatedDays": 0,
      "maximumDays": 0
    },
    "threshold": {
      "amount": {
        "currency": "string",
        "value": 0
      }
    }
  },
  "startsAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|true|none|The unique identifier of the account holder to which the grant is offered.|
|amount|[Amount](#schemaamount)|false|none|The amount that would be paid out to the user for business financing.|
|contractType|string|false|none|The contract type of the offer.<br><br>Possible values:<br>* **loan**<br>* **cashAdvance**|
|expiresAt|string(date-time)|false|none|The expiration date and time of the offer validity period.|
|fee|[GrantOfferFee](#schemagrantofferfee)|false|none|Contains information about the fee that your user would pay for the grant.|
|id|string|false|none|The unique identifier of the offer.|
|repayment|[Repayment](#schemarepayment)|false|none|Contains information about the repayment configuration of the grant.|
|startsAt|string(date-time)|false|none|The starting date and time of the offer validity period.|

#### Enumerated Values

|Property|Value|
|---|---|
|contractType|cashAdvance|
|contractType|loan|

<h2 id="tocS_GrantOfferFee">GrantOfferFee</h2>
<!-- backwards compatibility -->
<a id="schemagrantofferfee"></a>
<a id="schema_GrantOfferFee"></a>
<a id="tocSgrantofferfee"></a>
<a id="tocsgrantofferfee"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  },
  "aprBasisPoints": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|Contains the amount of the offer fee.|
|aprBasisPoints|integer(int32)|false|none|Annual Percentage Rate (APR) of the offer. The percentage is expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).|

<h2 id="tocS_GrantOffers">GrantOffers</h2>
<!-- backwards compatibility -->
<a id="schemagrantoffers"></a>
<a id="schema_GrantOffers"></a>
<a id="tocSgrantoffers"></a>
<a id="tocsgrantoffers"></a>

```json
{
  "grantOffers": [
    {
      "accountHolderId": "string",
      "amount": {
        "currency": "string",
        "value": 0
      },
      "contractType": "cashAdvance",
      "expiresAt": "1970-01-01T00:00:00Z",
      "fee": {
        "amount": {
          "currency": "string",
          "value": 0
        },
        "aprBasisPoints": 0
      },
      "id": "string",
      "repayment": {
        "basisPoints": 0,
        "term": {
          "estimatedDays": 0,
          "maximumDays": 0
        },
        "threshold": {
          "amount": {
            "currency": "string",
            "value": 0
          }
        }
      },
      "startsAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grantOffers|[[GrantOffer](#schemagrantoffer)]|true|none|Contains a list of available offers for the specified account holder.|

<h2 id="tocS_Grants">Grants</h2>
<!-- backwards compatibility -->
<a id="schemagrants"></a>
<a id="schema_Grants"></a>
<a id="tocSgrants"></a>
<a id="tocsgrants"></a>

```json
{
  "grants": [
    {
      "balances": {
        "currency": "string",
        "fee": 0,
        "principal": 0,
        "total": 0
      },
      "counterparty": {
        "accountHolderId": "string",
        "balanceAccountId": "string",
        "transferInstrumentId": "string"
      },
      "grantAccountId": "string",
      "grantOfferId": "string",
      "id": "string",
      "status": {
        "actions": [
          {
            "actionCode": "string",
            "resolved": true
          }
        ],
        "code": "Pending"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grants|[[Grant](#schemagrant)]|true|none|Contains a list of the grants that the account holder has received.|

<h2 id="tocS_HKLocalAccountIdentification">HKLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemahklocalaccountidentification"></a>
<a id="schema_HKLocalAccountIdentification"></a>
<a id="tocShklocalaccountidentification"></a>
<a id="tocshklocalaccountidentification"></a>

```json
{
  "type": "hkLocal",
  "accountNumber": "stringstr",
  "clearingCode": "str"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|accountNumber|string|true|none|The 9- to 17-digit bank account number, without separators or whitespace. Starts with the 3-digit branch code.|
|clearingCode|string|true|none|The 3-digit clearing code, without separators or whitespace.|
|type|string|true|none|**hkLocal**|

<h2 id="tocS_HULocalAccountIdentification">HULocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemahulocalaccountidentification"></a>
<a id="schema_HULocalAccountIdentification"></a>
<a id="tocShulocalaccountidentification"></a>
<a id="tocshulocalaccountidentification"></a>

```json
{
  "type": "huLocal",
  "accountNumber": "stringstringstringstring"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|accountNumber|string|true|none|The 24-digit bank account number, without separators or whitespace.|
|type|string|true|none|**huLocal**|

<h2 id="tocS_IbanAccountIdentification">IbanAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaibanaccountidentification"></a>
<a id="schema_IbanAccountIdentification"></a>
<a id="tocSibanaccountidentification"></a>
<a id="tocsibanaccountidentification"></a>

```json
{
  "type": "iban",
  "bic": "string",
  "iban": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|bic|string|false|none|The bank's 8- or 11-character BIC or SWIFT code.|
|iban|string|true|none|The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.|
|type|string|true|none|**iban**|

<h2 id="tocS_InvalidField">InvalidField</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfield"></a>
<a id="schema_InvalidField"></a>
<a id="tocSinvalidfield"></a>
<a id="tocsinvalidfield"></a>

```json
{
  "message": "string",
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Description of the validation error.|
|name|string|true|none|The field that has an invalid value.|
|value|string|true|none|The invalid value.|

<h2 id="tocS_NOLocalAccountIdentification">NOLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemanolocalaccountidentification"></a>
<a id="schema_NOLocalAccountIdentification"></a>
<a id="tocSnolocalaccountidentification"></a>
<a id="tocsnolocalaccountidentification"></a>

```json
{
  "type": "noLocal",
  "accountNumber": "stringstrin"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|accountNumber|string|true|none|The 11-digit bank account number, without separators or whitespace.|
|type|string|true|none|**noLocal**|

<h2 id="tocS_NZLocalAccountIdentification">NZLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemanzlocalaccountidentification"></a>
<a id="schema_NZLocalAccountIdentification"></a>
<a id="tocSnzlocalaccountidentification"></a>
<a id="tocsnzlocalaccountidentification"></a>

```json
{
  "type": "nzLocal",
  "accountNumber": "stringstringstr"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|accountNumber|string|true|none|The 15-16 digit bank account number. The first 2 digits are the bank number, the next 4 digits are the branch number, the next 7 digits are the account number, and the final 2-3 digits are the suffix.|
|type|string|true|none|**nzLocal**|

<h2 id="tocS_NumberAndBicAccountIdentification">NumberAndBicAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemanumberandbicaccountidentification"></a>
<a id="schema_NumberAndBicAccountIdentification"></a>
<a id="tocSnumberandbicaccountidentification"></a>
<a id="tocsnumberandbicaccountidentification"></a>

```json
{
  "type": "numberAndBic",
  "accountNumber": "string",
  "additionalBankIdentification": {
    "code": "string",
    "type": "auBsbCode"
  },
  "bic": "stringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|accountNumber|string|true|none|The bank account number, without separators or whitespace. The length and format depends on the bank or country.|
|additionalBankIdentification|[AdditionalBankIdentification](#schemaadditionalbankidentification)|false|none|Additional identification codes of the bank. Some banks may require these identifiers for cross-border transfers.|
|bic|string|true|none|The bank's 8- or 11-character BIC or SWIFT code.|
|type|string|true|none|**numberAndBic**|

<h2 id="tocS_PLLocalAccountIdentification">PLLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemapllocalaccountidentification"></a>
<a id="schema_PLLocalAccountIdentification"></a>
<a id="tocSpllocalaccountidentification"></a>
<a id="tocspllocalaccountidentification"></a>

```json
{
  "type": "plLocal",
  "accountNumber": "stringstringstringstringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|accountNumber|string|true|none|The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.|
|type|string|true|none|**plLocal**|

<h2 id="tocS_Repayment">Repayment</h2>
<!-- backwards compatibility -->
<a id="schemarepayment"></a>
<a id="schema_Repayment"></a>
<a id="tocSrepayment"></a>
<a id="tocsrepayment"></a>

```json
{
  "basisPoints": 0,
  "term": {
    "estimatedDays": 0,
    "maximumDays": 0
  },
  "threshold": {
    "amount": {
      "currency": "string",
      "value": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basisPoints|integer(int32)|true|none|The percentage of your user's incoming net volume that is deducted for repaying the grant. The percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).|
|term|[RepaymentTerm](#schemarepaymentterm)|false|none|Contains information about the time period in which your user must repay the total amount of the grant.|
|threshold|[ThresholdRepayment](#schemathresholdrepayment)|false|none|Contains the minimum threshold amount that your user must repay every 30-day period.|

<h2 id="tocS_RepaymentTerm">RepaymentTerm</h2>
<!-- backwards compatibility -->
<a id="schemarepaymentterm"></a>
<a id="schema_RepaymentTerm"></a>
<a id="tocSrepaymentterm"></a>
<a id="tocsrepaymentterm"></a>

```json
{
  "estimatedDays": 0,
  "maximumDays": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimatedDays|integer(int32)|true|none|The estimated duration of the repayment term, in days.|
|maximumDays|integer(int32)|false|none|The maximum duration of the repayment term, in days. Only applies when `contractType` is **loan**.|

<h2 id="tocS_SELocalAccountIdentification">SELocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaselocalaccountidentification"></a>
<a id="schema_SELocalAccountIdentification"></a>
<a id="tocSselocalaccountidentification"></a>
<a id="tocsselocalaccountidentification"></a>

```json
{
  "type": "seLocal",
  "accountNumber": "strings",
  "clearingNumber": "strin"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|accountNumber|string|true|none|The 7- to 10-digit bank account number ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number, separators, or whitespace.|
|clearingNumber|string|true|none|The 4- to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or whitespace.|
|type|string|true|none|**seLocal**|

<h2 id="tocS_SGLocalAccountIdentification">SGLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemasglocalaccountidentification"></a>
<a id="schema_SGLocalAccountIdentification"></a>
<a id="tocSsglocalaccountidentification"></a>
<a id="tocssglocalaccountidentification"></a>

```json
{
  "type": "sgLocal",
  "accountNumber": "string",
  "bic": "stringst"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|accountNumber|string|true|none|The 4- to 19-digit bank account number, without separators or whitespace.|
|bic|string|true|none|The bank's 8- or 11-character BIC or SWIFT code.|
|type|string|false|none|**sgLocal**|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "actions": [
    {
      "actionCode": "string",
      "resolved": true
    }
  ],
  "code": "Pending"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[Action](#schemaaction)]|false|none|A list of actions that need to be completed to proceed with the grant. |
|code|string|true|none|The code for the status of the grant. Possible values:<br>- **Pending**<br>- **Active**<br>- **Repaid**<br>- **WrittenOff**<br>- **Failed**<br>- **Revoked**<br>- **Requested**<br>- **Reviewing**<br>- **Approved**<br>- **Rejected**<br>- **Cancelled**|

#### Enumerated Values

|Property|Value|
|---|---|
|code|Pending|
|code|Active|
|code|Repaid|
|code|WrittenOff|
|code|Failed|
|code|Revoked|
|code|Requested|
|code|Reviewing|
|code|Approved|
|code|Rejected|
|code|Cancelled|

<h2 id="tocS_ThresholdRepayment">ThresholdRepayment</h2>
<!-- backwards compatibility -->
<a id="schemathresholdrepayment"></a>
<a id="schema_ThresholdRepayment"></a>
<a id="tocSthresholdrepayment"></a>
<a id="tocsthresholdrepayment"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The minimum threshold amount that your user must repay on every 30-day period.|

<h2 id="tocS_UKLocalAccountIdentification">UKLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemauklocalaccountidentification"></a>
<a id="schema_UKLocalAccountIdentification"></a>
<a id="tocSuklocalaccountidentification"></a>
<a id="tocsuklocalaccountidentification"></a>

```json
{
  "type": "ukLocal",
  "accountNumber": "stringst",
  "sortCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|accountNumber|string|true|none|The 8-digit bank account number, without separators or whitespace.|
|sortCode|string|true|none|The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.|
|type|string|true|none|**ukLocal**|

<h2 id="tocS_USLocalAccountIdentification">USLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemauslocalaccountidentification"></a>
<a id="schema_USLocalAccountIdentification"></a>
<a id="tocSuslocalaccountidentification"></a>
<a id="tocsuslocalaccountidentification"></a>

```json
{
  "type": "usLocal",
  "accountNumber": "string",
  "accountType": "checking",
  "routingNumber": "stringstr"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of account, which depends on the country of the account and the currency of the transfer.|
|accountNumber|string|true|none|The bank account number, without separators or whitespace.|
|accountType|[USLocalBankAccountType](#schemauslocalbankaccounttype)|false|none|The bank account type.<br><br>Possible values: **checking** or **savings**. Defaults to **checking**.|
|routingNumber|string|true|none|The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.|
|type|string|true|none|**usLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|checking|
|accountType|savings|

<h2 id="tocS_USLocalBankAccountType">USLocalBankAccountType</h2>
<!-- backwards compatibility -->
<a id="schemauslocalbankaccounttype"></a>
<a id="schema_USLocalBankAccountType"></a>
<a id="tocSuslocalbankaccounttype"></a>
<a id="tocsuslocalbankaccounttype"></a>

```json
"checking"
```
