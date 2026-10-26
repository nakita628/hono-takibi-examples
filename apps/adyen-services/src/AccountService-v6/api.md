<h1 id="account-api">Account API v6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API is used for the classic integration. If you are just starting your implementation, refer to our [new integration guide](https://docs.adyen.com/adyen-for-platforms-model) instead.

The Account API provides endpoints for managing account-related entities on your platform. These related entities include account holders, accounts, bank accounts, shareholders, and verification-related documents. The management operations include actions such as creation, retrieval, updating, and deletion of them.

For more information, refer to our [documentation](https://docs.adyen.com/classic-platforms).
## Authentication
Your Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:

 ```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY" \
...
```

Alternatively, you can use the username and password to connect to the API using basic authentication. For example:

```
curl
-U "ws@MarketPlace.YOUR_PLATFORM_ACCOUNT":"YOUR_WS_PASSWORD" \
-H "Content-Type: application/json" \
...
```
When going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).

## Versioning
The Account API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://cal-test.adyen.com/cal/services/Account/v6/createAccountHolder
```

Base URLs:

* <a href="https://cal-test.adyen.com/cal/services/Account/v6">https://cal-test.adyen.com/cal/services/Account/v6</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="account-api-account-holders">Account holders</h1>

## Close an account holder

<a id="opIdpost-closeAccountHolder"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/closeAccountHolder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER"
  }'
```

`POST /closeAccountHolder`

Changes the [status of an account holder](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#account-holder-statuses) to **Closed**. This state is final. If an account holder is closed, you can't process transactions, pay out funds, or reopen it. If payments are made to an account of an account holder with a **Closed** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status), the payments are sent to your liable account.

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER"
}
```

<h3 id="close-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CloseAccountHolderRequest](#schemacloseaccountholderrequest)|false|none|
|» accountHolderCode|body|string|true|The code of the Account Holder to be closed.|

> Example responses

> 200 Response

```json
{
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 202 Response

```json
{
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="close-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CloseAccountHolderResponse](#schemacloseaccountholderresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[CloseAccountHolderResponse](#schemacloseaccountholderresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Close stores

<a id="opIdpost-closeStores"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/closeStores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "string",
    "stores": [
      "string"
    ]
  }'
```

`POST /closeStores`

Closes stores associated with an account holder.

> Body parameter

```json
{
  "accountHolderCode": "string",
  "stores": [
    "string"
  ]
}
```

<h3 id="close-stores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CloseStoresRequest](#schemaclosestoresrequest)|false|none|
|» accountHolderCode|body|string|true|The code of the account holder.|
|» stores|body|[string]|true|List of stores to be closed.|

> Example responses

> 200 Response

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="close-stores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GenericResponse](#schemagenericresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Create an account holder

<a id="opIdpost-createAccountHolder"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/createAccountHolder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "YOUR_UNIQUE_ACCOUNT_HOLDER_CODE",
    "accountHolderDetails": {
      "address": {
        "country": "US"
      },
      "businessDetails": {
        "doingBusinessAs": "Real Good Restaurant",
        "legalBusinessName": "Real Good Restaurant Inc.",
        "shareholders": [
          {
            "shareholderType": "Controller",
            "name": {
              "firstName": "John",
              "lastName": "Carpenter"
            },
            "address": {
              "country": "NL"
            },
            "email": "testshareholder@email.com"
          }
        ]
      },
      "email": "test@email.com",
      "webAddress": "https://www.your-website.com"
    },
    "legalEntity": "Business"
  }'
```

`POST /createAccountHolder`

Creates an account holder that [represents the sub-merchant's entity](https://docs.adyen.com/classic-platforms/account-structure#your-platform) in your platform. The details that you need to provide in the request depend on the sub-merchant's legal entity type. For more information, refer to [Account holder and accounts](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#legal-entity-types).

> Body parameter

```json
{
  "accountHolderCode": "YOUR_UNIQUE_ACCOUNT_HOLDER_CODE",
  "accountHolderDetails": {
    "address": {
      "country": "US"
    },
    "businessDetails": {
      "doingBusinessAs": "Real Good Restaurant",
      "legalBusinessName": "Real Good Restaurant Inc.",
      "shareholders": [
        {
          "shareholderType": "Controller",
          "name": {
            "firstName": "John",
            "lastName": "Carpenter"
          },
          "address": {
            "country": "NL"
          },
          "email": "testshareholder@email.com"
        }
      ]
    },
    "email": "test@email.com",
    "webAddress": "https://www.your-website.com"
  },
  "legalEntity": "Business"
}
```

<h3 id="create-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAccountHolderRequest](#schemacreateaccountholderrequest)|false|none|
|» accountHolderCode|body|string|true|Your unique identifier for the prospective account holder.<br>The length must be between three (3) and fifty (50) characters long. Only letters, digits, and hyphens (-) are allowed.|
|» accountHolderDetails|body|[AccountHolderDetails](#schemaaccountholderdetails)|true|The details of the prospective account holder.|
|» createDefaultAccount|body|boolean|false|If set to **true**, an account with the default options is automatically created for the account holder.<br>By default, this field is set to **true**.|
|» description|body|string|false|A description of the prospective account holder, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.|
|» legalEntity|body|string|true|The legal entity type of the account holder. This determines the information that should be provided in the request.<br><br>Possible values: **Business**, **Individual**, or **NonProfit**.<br><br>* If set to **Business** or **NonProfit**, then `accountHolderDetails.businessDetails` must be provided, with at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.<br><br>* If set to **Individual**, then `accountHolderDetails.individualDetails` must be provided.|
|» primaryCurrency|body|string|false|**Deprecated.** The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.|
|» processingTier|body|integer(int32)|false|The starting [processing tier](https://docs.adyen.com/classic-platforms/onboarding-and-verification/precheck-kyc-information) for the prospective account holder.|
|» verificationProfile|body|string|false|The identifier of the profile that applies to this entity.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» legalEntity|Business|
|» legalEntity|Individual|
|» legalEntity|NonProfit|
|» legalEntity|Partnership|
|» legalEntity|PublicCompany|

> Example responses

> 200 Response

```json
{
  "pspReference": "ALPHANUMERIC_UNIQUE_RESPONSE_REFERENCE",
  "accountHolderCode": "YOUR_UNIQUE_ACCOUNT_HOLDER_CODE",
  "accountHolderDetails": {
    "address": {
      "country": "US"
    },
    "bankAccountDetails": [],
    "businessDetails": {
      "doingBusinessAs": "Real Good Restaurant",
      "legalBusinessName": "Real Good Restaurant Inc.",
      "shareholders": [
        {
          "address": {
            "country": "NL"
          },
          "email": "testshareholder@email.com",
          "name": {
            "firstName": "John",
            "lastName": "Carpenter"
          },
          "shareholderCode": "SHAREHOLDER_CODE",
          "shareholderType": "Controller"
        }
      ]
    },
    "email": "test@email.com",
    "merchantCategoryCode": "MCC_DEFAULT_VALUE",
    "payoutMethods": [],
    "webAddress": "https://www.your-website.com"
  },
  "accountHolderStatus": {
    "status": "Active",
    "processingState": {
      "disabled": false,
      "processedFrom": {
        "currency": "USD",
        "value": 0
      },
      "processedTo": {
        "currency": "USD",
        "value": 0
      },
      "tierNumber": 0
    },
    "payoutState": {
      "allowPayout": true,
      "payoutLimit": {
        "currency": "USD",
        "value": 0
      },
      "disabled": false,
      "tierNumber": 0
    },
    "events": []
  },
  "legalEntity": "Business",
  "invalidFields": [],
  "verification": {}
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="create-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CreateAccountHolderResponse](#schemacreateaccountholderresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get an account holder

<a id="opIdpost-getAccountHolder"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/getAccountHolder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountCode": "CODE_OF_ACCOUNT"
  }'
```

`POST /getAccountHolder`

Returns the details of an account holder.

> Body parameter

```json
{
  "accountCode": "CODE_OF_ACCOUNT"
}
```

<h3 id="get-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetAccountHolderRequest](#schemagetaccountholderrequest)|false|none|
|» accountCode|body|string|false|The code of the account of which to retrieve the details.<br>> Required if no `accountHolderCode` is provided.|
|» accountHolderCode|body|string|false|The code of the account holder of which to retrieve the details.<br>> Required if no `accountCode` is provided.|
|» showDetails|body|boolean|false|True if the request should return the account holder details|

> Example responses

> 200 Response

```json
{
  "accountHolderCode": "string",
  "accountHolderDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "bankAccountDetails": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "bankAccountName": "string",
        "bankAccountReference": "string",
        "bankAccountUUID": "string",
        "bankBicSwift": "string",
        "bankCity": "string",
        "bankCode": "string",
        "bankName": "string",
        "branchCode": "string",
        "checkCode": "string",
        "countryCode": "string",
        "currencyCode": "string",
        "iban": "string",
        "ownerCity": "string",
        "ownerCountryCode": "string",
        "ownerDateOfBirth": "string",
        "ownerHouseNumberOrName": "string",
        "ownerName": "string",
        "ownerNationality": "string",
        "ownerPostalCode": "string",
        "ownerState": "string",
        "ownerStreet": "string",
        "primaryAccount": true,
        "taxId": "string",
        "urlForVerification": "string"
      }
    ],
    "bankAggregatorDataReference": "string",
    "businessDetails": {
      "doingBusinessAs": "string",
      "legalBusinessName": "string",
      "listedUltimateParentCompany": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "businessDetails": {
            "legalBusinessName": "string",
            "registrationNumber": "string",
            "stockExchange": "string",
            "stockNumber": "string",
            "stockTicker": "string"
          },
          "ultimateParentCompanyCode": "string"
        }
      ],
      "registrationNumber": "string",
      "shareholders": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "shareholderCode": "string",
          "shareholderReference": "string",
          "shareholderType": "Controller",
          "webAddress": "string"
        }
      ],
      "signatories": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "signatoryCode": "string",
          "signatoryReference": "string",
          "webAddress": "string"
        }
      ],
      "stockExchange": "string",
      "stockNumber": "string",
      "stockTicker": "string",
      "taxId": "string"
    },
    "email": "string",
    "fullPhoneNumber": "string",
    "individualDetails": {
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      }
    },
    "lastReviewDate": "string",
    "legalArrangements": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "legalArrangementCode": "string",
        "legalArrangementEntities": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "doingBusinessAs": "string",
              "legalBusinessName": "string",
              "listedUltimateParentCompany": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "businessDetails": {
                    "legalBusinessName": "string",
                    "registrationNumber": "string",
                    "stockExchange": "string",
                    "stockNumber": "string",
                    "stockTicker": "string"
                  },
                  "ultimateParentCompanyCode": "string"
                }
              ],
              "registrationNumber": "string",
              "shareholders": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "shareholderCode": "string",
                  "shareholderReference": "string",
                  "shareholderType": "Controller",
                  "webAddress": "string"
                }
              ],
              "signatories": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "signatoryCode": "string",
                  "signatoryReference": "string",
                  "webAddress": "string"
                }
              ],
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string",
              "taxId": "string"
            },
            "email": "string",
            "fullPhoneNumber": "string",
            "individualDetails": {
              "name": {
                "firstName": "string",
                "gender": "MALE",
                "infix": "string",
                "lastName": "string"
              },
              "personalData": {
                "dateOfBirth": "string",
                "documentData": [
                  {
                    "expirationDate": "string",
                    "issuerCountry": "st",
                    "issuerState": "string",
                    "number": "string",
                    "type": "DRIVINGLICENSE"
                  }
                ],
                "nationality": "st"
              }
            },
            "legalArrangementEntityCode": "string",
            "legalArrangementEntityReference": "string",
            "legalArrangementMembers": [
              "Beneficiary"
            ],
            "legalEntityType": "Business",
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "webAddress": "string"
          }
        ],
        "legalArrangementReference": "string",
        "legalForm": "CashManagementTrust",
        "name": "string",
        "registrationNumber": "string",
        "taxNumber": "string",
        "type": "Association"
      }
    ],
    "merchantCategoryCode": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "payoutMethods": [
      {
        "merchantAccount": "string",
        "payoutMethodCode": "string",
        "payoutMethodReference": "string",
        "recurringDetailReference": "string",
        "shopperReference": "string"
      }
    ],
    "phoneNumber": {
      "phoneCountryCode": "string",
      "phoneNumber": "string",
      "phoneType": "Fax"
    },
    "principalBusinessAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "storeDetails": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "fullPhoneNumber": "string",
        "logo": "string",
        "merchantAccount": "string",
        "merchantCategoryCode": "string",
        "merchantHouseNumber": "string",
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shopperInteraction": "Ecommerce",
        "splitConfigurationUUID": "string",
        "status": "Active",
        "store": "string",
        "storeName": "string",
        "storeReference": "string",
        "virtualAccount": "string",
        "webAddress": "string"
      }
    ],
    "webAddress": "string"
  },
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "accounts": [
    {
      "accountCode": "string",
      "bankAccountUUID": "string",
      "beneficiaryAccount": "string",
      "beneficiaryMerchantReference": "string",
      "description": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "payoutMethodCode": "string",
      "payoutSchedule": {
        "nextScheduledPayout": "1970-01-01T00:00:00Z",
        "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
      },
      "payoutSpeed": "INSTANT",
      "status": "string"
    }
  ],
  "description": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "legalEntity": "Business",
  "migrationData": {
    "accountHolderId": "string",
    "balancePlatform": "string",
    "migrated": true,
    "migratedAccounts": [
      {
        "accountCode": "string",
        "balanceAccountId": "string"
      }
    ],
    "migratedShareholders": [
      {
        "legalEntityCode": "string",
        "shareholderCode": "string"
      }
    ],
    "migratedStores": [
      {
        "businessLineId": "string",
        "storeCode": "string",
        "storeId": "string",
        "storeReference": "string"
      }
    ],
    "migrationDate": "1970-01-01T00:00:00Z"
  },
  "primaryCurrency": "string",
  "pspReference": "string",
  "resultCode": "string",
  "systemUpToDateTime": "1970-01-01T00:00:00Z",
  "verification": {
    "accountHolder": {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ]
    },
    "legalArrangements": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string"
      }
    ],
    "legalArrangementsEntities": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string"
      }
    ],
    "payoutMethods": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "payoutMethodCode": "string"
      }
    ],
    "shareholders": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string",
        "shareholderCode": "string"
      }
    ],
    "signatories": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "signatoryCode": "string"
      }
    ],
    "ultimateParentCompany": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "ultimateParentCompanyCode": "string"
      }
    ]
  },
  "verificationProfile": "string"
}
```

> 202 Response

```json
{
  "accountHolderCode": "string",
  "accountHolderDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "bankAccountDetails": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "bankAccountName": "string",
        "bankAccountReference": "string",
        "bankAccountUUID": "string",
        "bankBicSwift": "string",
        "bankCity": "string",
        "bankCode": "string",
        "bankName": "string",
        "branchCode": "string",
        "checkCode": "string",
        "countryCode": "string",
        "currencyCode": "string",
        "iban": "string",
        "ownerCity": "string",
        "ownerCountryCode": "string",
        "ownerDateOfBirth": "string",
        "ownerHouseNumberOrName": "string",
        "ownerName": "string",
        "ownerNationality": "string",
        "ownerPostalCode": "string",
        "ownerState": "string",
        "ownerStreet": "string",
        "primaryAccount": true,
        "taxId": "string",
        "urlForVerification": "string"
      }
    ],
    "bankAggregatorDataReference": "string",
    "businessDetails": {
      "doingBusinessAs": "string",
      "legalBusinessName": "string",
      "listedUltimateParentCompany": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "businessDetails": {
            "legalBusinessName": "string",
            "registrationNumber": "string",
            "stockExchange": "string",
            "stockNumber": "string",
            "stockTicker": "string"
          },
          "ultimateParentCompanyCode": "string"
        }
      ],
      "registrationNumber": "string",
      "shareholders": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "shareholderCode": "string",
          "shareholderReference": "string",
          "shareholderType": "Controller",
          "webAddress": "string"
        }
      ],
      "signatories": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "signatoryCode": "string",
          "signatoryReference": "string",
          "webAddress": "string"
        }
      ],
      "stockExchange": "string",
      "stockNumber": "string",
      "stockTicker": "string",
      "taxId": "string"
    },
    "email": "string",
    "fullPhoneNumber": "string",
    "individualDetails": {
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      }
    },
    "lastReviewDate": "string",
    "legalArrangements": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "legalArrangementCode": "string",
        "legalArrangementEntities": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "doingBusinessAs": "string",
              "legalBusinessName": "string",
              "listedUltimateParentCompany": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "businessDetails": {
                    "legalBusinessName": "string",
                    "registrationNumber": "string",
                    "stockExchange": "string",
                    "stockNumber": "string",
                    "stockTicker": "string"
                  },
                  "ultimateParentCompanyCode": "string"
                }
              ],
              "registrationNumber": "string",
              "shareholders": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "shareholderCode": "string",
                  "shareholderReference": "string",
                  "shareholderType": "Controller",
                  "webAddress": "string"
                }
              ],
              "signatories": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "signatoryCode": "string",
                  "signatoryReference": "string",
                  "webAddress": "string"
                }
              ],
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string",
              "taxId": "string"
            },
            "email": "string",
            "fullPhoneNumber": "string",
            "individualDetails": {
              "name": {
                "firstName": "string",
                "gender": "MALE",
                "infix": "string",
                "lastName": "string"
              },
              "personalData": {
                "dateOfBirth": "string",
                "documentData": [
                  {
                    "expirationDate": "string",
                    "issuerCountry": "st",
                    "issuerState": "string",
                    "number": "string",
                    "type": "DRIVINGLICENSE"
                  }
                ],
                "nationality": "st"
              }
            },
            "legalArrangementEntityCode": "string",
            "legalArrangementEntityReference": "string",
            "legalArrangementMembers": [
              "Beneficiary"
            ],
            "legalEntityType": "Business",
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "webAddress": "string"
          }
        ],
        "legalArrangementReference": "string",
        "legalForm": "CashManagementTrust",
        "name": "string",
        "registrationNumber": "string",
        "taxNumber": "string",
        "type": "Association"
      }
    ],
    "merchantCategoryCode": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "payoutMethods": [
      {
        "merchantAccount": "string",
        "payoutMethodCode": "string",
        "payoutMethodReference": "string",
        "recurringDetailReference": "string",
        "shopperReference": "string"
      }
    ],
    "phoneNumber": {
      "phoneCountryCode": "string",
      "phoneNumber": "string",
      "phoneType": "Fax"
    },
    "principalBusinessAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "storeDetails": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "fullPhoneNumber": "string",
        "logo": "string",
        "merchantAccount": "string",
        "merchantCategoryCode": "string",
        "merchantHouseNumber": "string",
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shopperInteraction": "Ecommerce",
        "splitConfigurationUUID": "string",
        "status": "Active",
        "store": "string",
        "storeName": "string",
        "storeReference": "string",
        "virtualAccount": "string",
        "webAddress": "string"
      }
    ],
    "webAddress": "string"
  },
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "accounts": [
    {
      "accountCode": "string",
      "bankAccountUUID": "string",
      "beneficiaryAccount": "string",
      "beneficiaryMerchantReference": "string",
      "description": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "payoutMethodCode": "string",
      "payoutSchedule": {
        "nextScheduledPayout": "1970-01-01T00:00:00Z",
        "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
      },
      "payoutSpeed": "INSTANT",
      "status": "string"
    }
  ],
  "description": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "legalEntity": "Business",
  "migrationData": {
    "accountHolderId": "string",
    "balancePlatform": "string",
    "migrated": true,
    "migratedAccounts": [
      {
        "accountCode": "string",
        "balanceAccountId": "string"
      }
    ],
    "migratedShareholders": [
      {
        "legalEntityCode": "string",
        "shareholderCode": "string"
      }
    ],
    "migratedStores": [
      {
        "businessLineId": "string",
        "storeCode": "string",
        "storeId": "string",
        "storeReference": "string"
      }
    ],
    "migrationDate": "1970-01-01T00:00:00Z"
  },
  "primaryCurrency": "string",
  "pspReference": "string",
  "resultCode": "string",
  "systemUpToDateTime": "1970-01-01T00:00:00Z",
  "verification": {
    "accountHolder": {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ]
    },
    "legalArrangements": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string"
      }
    ],
    "legalArrangementsEntities": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string"
      }
    ],
    "payoutMethods": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "payoutMethodCode": "string"
      }
    ],
    "shareholders": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string",
        "shareholderCode": "string"
      }
    ],
    "signatories": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "signatoryCode": "string"
      }
    ],
    "ultimateParentCompany": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "ultimateParentCompanyCode": "string"
      }
    ]
  },
  "verificationProfile": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="get-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetAccountHolderResponse](#schemagetaccountholderresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[GetAccountHolderResponse](#schemagetaccountholderresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get a tax form

<a id="opIdpost-getTaxForm"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/getTaxForm \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
    "formType": "1099-K",
    "year": 2020
  }'
```

`POST /getTaxForm`

Generates a tax form for account holders operating in the US. For more information, refer to [Providing tax forms](https://docs.adyen.com/classic-platforms/tax-forms).

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
  "formType": "1099-K",
  "year": 2020
}
```

<h3 id="get-a-tax-form-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetTaxFormRequest](#schemagettaxformrequest)|false|none|
|» accountHolderCode|body|string|true|The account holder code you provided when you created the account holder.|
|» formType|body|string|true|Type of the requested tax form. For example, 1099-K.|
|» year|body|integer(int32)|true|Applicable tax year in the YYYY format.|

> Example responses

> 200 Response

```json
{
  "content": "string",
  "contentType": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="get-a-tax-form-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetTaxFormResponse](#schemagettaxformresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Suspend an account holder

<a id="opIdpost-suspendAccountHolder"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/suspendAccountHolder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER"
  }'
```

`POST /suspendAccountHolder`

Changes the [status of an account holder](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#account-holder-statuses) to **Suspended**.

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER"
}
```

<h3 id="suspend-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SuspendAccountHolderRequest](#schemasuspendaccountholderrequest)|false|none|
|» accountHolderCode|body|string|true|The code of the account holder to be suspended.|

> Example responses

> 200 Response

```json
{
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 202 Response

```json
{
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="suspend-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[SuspendAccountHolderResponse](#schemasuspendaccountholderresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[SuspendAccountHolderResponse](#schemasuspendaccountholderresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Unsuspend an account holder

<a id="opIdpost-unSuspendAccountHolder"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/unSuspendAccountHolder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER"
  }'
```

`POST /unSuspendAccountHolder`

Changes the [status of an account holder](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#account-holder-statuses) from **Suspended** to **Inactive**. 
Account holders can have a **Suspended** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status) if you suspend them through the [`/suspendAccountHolder`](https://docs.adyen.com/api-explorer/#/Account/v5/post/suspendAccountHolder) endpoint or if a verification deadline expires.

You can only unsuspend account holders if they do not have verification checks with a **FAILED** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status).

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER"
}
```

<h3 id="unsuspend-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UnSuspendAccountHolderRequest](#schemaunsuspendaccountholderrequest)|false|none|
|» accountHolderCode|body|string|true|The code of the account holder to be reinstated.|

> Example responses

> 200 Response

```json
{
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 202 Response

```json
{
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="unsuspend-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[UnSuspendAccountHolderResponse](#schemaunsuspendaccountholderresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[UnSuspendAccountHolderResponse](#schemaunsuspendaccountholderresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Update an account holder

<a id="opIdpost-updateAccountHolder"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/updateAccountHolder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "YOUR_UNIQUE_ACCOUNT_HOLDER_CODE",
    "accountHolderDetails": {
      "businessDetails": {
        "shareholders": [
          {
            "shareholderType": "Controller",
            "name": {
              "firstName": "Shelly",
              "lastName": "Eller"
            },
            "address": {
              "city": "San Francisco",
              "country": "US",
              "houseNumberOrName": "274",
              "postalCode": "94107",
              "stateOrProvince": "CA",
              "street": "Brannan"
            },
            "email": "testshareholder2@email.com",
            "personalData": {
              "dateOfBirth": "1970-01-01",
              "documentData": [
                {
                  "number": "1234567890",
                  "type": "ID"
                }
              ]
            }
          }
        ],
        "taxId": "123456789"
      },
      "email": "test@email.com",
      "fullPhoneNumber": "+14154890281",
      "webAddress": "http://www.accountholderwebsite.com"
    }
  }'
```

`POST /updateAccountHolder`

Updates the `accountHolderDetails` and `processingTier` of an account holder, and adds bank accounts and shareholders.

When updating `accountHolderDetails`, parameters that are not included in the request are left unchanged except for the following object:

* `metadata`: Updating the metadata replaces the entire object. This means that to update an existing key-value pair, you must provide the changes, as well as other existing key-value pairs.

When updating any field in the following objects, you must submit all the fields required for validation:

 * `address`

* `fullPhoneNumber`

* `bankAccountDetails.BankAccountDetail`

* `businessDetails.shareholders.ShareholderContact`

 For example, to update the `address.postalCode`, you must also submit the `address.country`, `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` so that the address can be validated.

To add a bank account or shareholder, provide the bank account or shareholder details without a `bankAccountUUID` or a `shareholderCode`.



> Body parameter

```json
{
  "accountHolderCode": "YOUR_UNIQUE_ACCOUNT_HOLDER_CODE",
  "accountHolderDetails": {
    "businessDetails": {
      "shareholders": [
        {
          "shareholderType": "Controller",
          "name": {
            "firstName": "Shelly",
            "lastName": "Eller"
          },
          "address": {
            "city": "San Francisco",
            "country": "US",
            "houseNumberOrName": "274",
            "postalCode": "94107",
            "stateOrProvince": "CA",
            "street": "Brannan"
          },
          "email": "testshareholder2@email.com",
          "personalData": {
            "dateOfBirth": "1970-01-01",
            "documentData": [
              {
                "number": "1234567890",
                "type": "ID"
              }
            ]
          }
        }
      ],
      "taxId": "123456789"
    },
    "email": "test@email.com",
    "fullPhoneNumber": "+14154890281",
    "webAddress": "http://www.accountholderwebsite.com"
  }
}
```

<h3 id="update-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateAccountHolderRequest](#schemaupdateaccountholderrequest)|false|none|
|» accountHolderCode|body|string|true|The code of the Account Holder to be updated.|
|» accountHolderDetails|body|[AccountHolderDetails](#schemaaccountholderdetails)|false|The details to which the Account Holder should be updated.<br><br>Required if a processingTier is not provided.|
|» description|body|string|false|A description of the account holder, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.|
|» legalEntity|body|string|false|The legal entity type of the account holder. This determines the information that should be provided in the request.<br><br>Possible values: **Business**, **Individual**, or **NonProfit**.<br><br>* If set to **Business** or **NonProfit**, then `accountHolderDetails.businessDetails` must be provided, with at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.<br><br>* If set to **Individual**, then `accountHolderDetails.individualDetails` must be provided.|
|» primaryCurrency|body|string|false|**Deprecated.** The primary three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), to which the account holder should be updated.|
|» processingTier|body|integer(int32)|false|The processing tier to which the Account Holder should be updated.<br>>The processing tier can not be lowered through this request.<br><br>>Required if accountHolderDetails are not provided.|
|» verificationProfile|body|string|false|The identifier of the profile that applies to this entity.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» legalEntity|Business|
|» legalEntity|Individual|
|» legalEntity|NonProfit|
|» legalEntity|Partnership|
|» legalEntity|PublicCompany|

> Example responses

> 200 Response

```json
{
  "invalidFields": [],
  "pspReference": "ALPHANUMERIC_UNIQUE_RESPONSE_REFERENCE",
  "accountHolderCode": "YOUR_UNIQUE_ACCOUNT_HOLDER_CODE",
  "accountHolderDetails": {
    "bankAccountDetails": [],
    "businessDetails": {
      "shareholders": [
        {
          "address": {
            "city": "San Francisco",
            "country": "US",
            "houseNumberOrName": "274",
            "postalCode": "94107",
            "stateOrProvince": "CA",
            "street": "Brannan"
          },
          "email": "testshareholder2@email.com",
          "name": {
            "firstName": "Shelly",
            "lastName": "Eller"
          },
          "personalData": {
            "dateOfBirth": "1970-01-01",
            "documentData": [
              {
                "number": "1234567890",
                "type": "ID"
              }
            ]
          },
          "shareholderCode": "SHAREHOLDER_CODE",
          "shareholderType": "Controller"
        }
      ],
      "taxId": "123456789"
    },
    "email": "test@email.com",
    "payoutMethods": [],
    "webAddress": "http://www.accountholderwebsite.com"
  }
}
```

> 202 Response

```json
{
  "accountHolderCode": "string",
  "accountHolderDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "bankAccountDetails": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "bankAccountName": "string",
        "bankAccountReference": "string",
        "bankAccountUUID": "string",
        "bankBicSwift": "string",
        "bankCity": "string",
        "bankCode": "string",
        "bankName": "string",
        "branchCode": "string",
        "checkCode": "string",
        "countryCode": "string",
        "currencyCode": "string",
        "iban": "string",
        "ownerCity": "string",
        "ownerCountryCode": "string",
        "ownerDateOfBirth": "string",
        "ownerHouseNumberOrName": "string",
        "ownerName": "string",
        "ownerNationality": "string",
        "ownerPostalCode": "string",
        "ownerState": "string",
        "ownerStreet": "string",
        "primaryAccount": true,
        "taxId": "string",
        "urlForVerification": "string"
      }
    ],
    "bankAggregatorDataReference": "string",
    "businessDetails": {
      "doingBusinessAs": "string",
      "legalBusinessName": "string",
      "listedUltimateParentCompany": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "businessDetails": {
            "legalBusinessName": "string",
            "registrationNumber": "string",
            "stockExchange": "string",
            "stockNumber": "string",
            "stockTicker": "string"
          },
          "ultimateParentCompanyCode": "string"
        }
      ],
      "registrationNumber": "string",
      "shareholders": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "shareholderCode": "string",
          "shareholderReference": "string",
          "shareholderType": "Controller",
          "webAddress": "string"
        }
      ],
      "signatories": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "signatoryCode": "string",
          "signatoryReference": "string",
          "webAddress": "string"
        }
      ],
      "stockExchange": "string",
      "stockNumber": "string",
      "stockTicker": "string",
      "taxId": "string"
    },
    "email": "string",
    "fullPhoneNumber": "string",
    "individualDetails": {
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      }
    },
    "lastReviewDate": "string",
    "legalArrangements": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "legalArrangementCode": "string",
        "legalArrangementEntities": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "doingBusinessAs": "string",
              "legalBusinessName": "string",
              "listedUltimateParentCompany": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "businessDetails": {
                    "legalBusinessName": "string",
                    "registrationNumber": "string",
                    "stockExchange": "string",
                    "stockNumber": "string",
                    "stockTicker": "string"
                  },
                  "ultimateParentCompanyCode": "string"
                }
              ],
              "registrationNumber": "string",
              "shareholders": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "shareholderCode": "string",
                  "shareholderReference": "string",
                  "shareholderType": "Controller",
                  "webAddress": "string"
                }
              ],
              "signatories": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "signatoryCode": "string",
                  "signatoryReference": "string",
                  "webAddress": "string"
                }
              ],
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string",
              "taxId": "string"
            },
            "email": "string",
            "fullPhoneNumber": "string",
            "individualDetails": {
              "name": {
                "firstName": "string",
                "gender": "MALE",
                "infix": "string",
                "lastName": "string"
              },
              "personalData": {
                "dateOfBirth": "string",
                "documentData": [
                  {
                    "expirationDate": "string",
                    "issuerCountry": "st",
                    "issuerState": "string",
                    "number": "string",
                    "type": "DRIVINGLICENSE"
                  }
                ],
                "nationality": "st"
              }
            },
            "legalArrangementEntityCode": "string",
            "legalArrangementEntityReference": "string",
            "legalArrangementMembers": [
              "Beneficiary"
            ],
            "legalEntityType": "Business",
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "webAddress": "string"
          }
        ],
        "legalArrangementReference": "string",
        "legalForm": "CashManagementTrust",
        "name": "string",
        "registrationNumber": "string",
        "taxNumber": "string",
        "type": "Association"
      }
    ],
    "merchantCategoryCode": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "payoutMethods": [
      {
        "merchantAccount": "string",
        "payoutMethodCode": "string",
        "payoutMethodReference": "string",
        "recurringDetailReference": "string",
        "shopperReference": "string"
      }
    ],
    "phoneNumber": {
      "phoneCountryCode": "string",
      "phoneNumber": "string",
      "phoneType": "Fax"
    },
    "principalBusinessAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "storeDetails": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "fullPhoneNumber": "string",
        "logo": "string",
        "merchantAccount": "string",
        "merchantCategoryCode": "string",
        "merchantHouseNumber": "string",
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shopperInteraction": "Ecommerce",
        "splitConfigurationUUID": "string",
        "status": "Active",
        "store": "string",
        "storeName": "string",
        "storeReference": "string",
        "virtualAccount": "string",
        "webAddress": "string"
      }
    ],
    "webAddress": "string"
  },
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "description": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "legalEntity": "Business",
  "primaryCurrency": "string",
  "pspReference": "string",
  "resultCode": "string",
  "verification": {
    "accountHolder": {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ]
    },
    "legalArrangements": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string"
      }
    ],
    "legalArrangementsEntities": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string"
      }
    ],
    "payoutMethods": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "payoutMethodCode": "string"
      }
    ],
    "shareholders": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string",
        "shareholderCode": "string"
      }
    ],
    "signatories": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "signatoryCode": "string"
      }
    ],
    "ultimateParentCompany": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "ultimateParentCompanyCode": "string"
      }
    ]
  },
  "verificationProfile": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="update-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[UpdateAccountHolderResponse](#schemaupdateaccountholderresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[UpdateAccountHolderResponse](#schemaupdateaccountholderresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Update payout or processing state

<a id="opIdpost-updateAccountHolderState"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/updateAccountHolderState \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
    "disable": true,
    "reason": "test reason payout",
    "stateType": "Payout"
  }'
```

`POST /updateAccountHolderState`

Disables or enables the processing or payout state of an account holder.

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
  "disable": true,
  "reason": "test reason payout",
  "stateType": "Payout"
}
```

<h3 id="update-payout-or-processing-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateAccountHolderStateRequest](#schemaupdateaccountholderstaterequest)|false|none|
|» accountHolderCode|body|string|true|The code of the Account Holder on which to update the state.|
|» disable|body|boolean|true|If true, disable the requested state.  If false, enable the requested state.|
|» reason|body|string|false|The reason that the state is being updated.<br>>Required if the state is being disabled.|
|» stateType|body|string|true|The state to be updated.<br>>Permitted values are: `Processing`, `Payout`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» stateType|LimitedPayout|
|» stateType|LimitedProcessing|
|» stateType|LimitlessPayout|
|» stateType|LimitlessProcessing|
|» stateType|Payout|
|» stateType|Processing|

> Example responses

> 200 Response

```json
{
  "accountHolderCode": "string",
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 202 Response

```json
{
  "accountHolderCode": "string",
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="update-payout-or-processing-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetAccountHolderStatusResponse](#schemagetaccountholderstatusresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[GetAccountHolderStatusResponse](#schemagetaccountholderstatusresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="account-api-accounts">Accounts</h1>

## Close an account

<a id="opIdpost-closeAccount"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/closeAccount \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountCode": "CODE_OF_ACCOUNT"
  }'
```

`POST /closeAccount`

Closes an account. If an account is closed, you cannot process transactions, pay out its funds, or reopen it. If payments are made to a closed account, the payments are sent to your liable account.

> Body parameter

```json
{
  "accountCode": "CODE_OF_ACCOUNT"
}
```

<h3 id="close-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CloseAccountRequest](#schemacloseaccountrequest)|false|none|
|» accountCode|body|string|true|The code of account to be closed.|

> Example responses

> 200 Response

```json
{
  "accountCode": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string",
  "status": "Active"
}
```

> 202 Response

```json
{
  "accountCode": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string",
  "status": "Active"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="close-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CloseAccountResponse](#schemacloseaccountresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[CloseAccountResponse](#schemacloseaccountresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Create an account

<a id="opIdpost-createAccount"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/createAccount \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER"
  }'
```

`POST /createAccount`

Creates an account under an account holder. An account holder can have [multiple accounts](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#create-additional-accounts).

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER"
}
```

<h3 id="create-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAccountRequest](#schemacreateaccountrequest)|false|none|
|» accountHolderCode|body|string|true|The code of Account Holder under which to create the account.|
|» bankAccountUUID|body|string|false|The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.|
|» description|body|string|false|A description of the account, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.|
|» metadata|body|object|false|A set of key and value pairs for general use by the merchant.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|» » **additionalProperties**|body|string|false|none|
|» payoutMethodCode|body|string|false|The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.|
|» payoutSchedule|body|string|false|The payout schedule for the account.<br><br>Possible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`.<br>> `HOLD` prevents scheduled payouts, but you can still initiate payouts manually.|
|» payoutScheduleReason|body|string|false|The reason for the payout schedule choice.<br>> This field is required when the `payoutSchedule` parameter is set to `HOLD`.|
|» payoutSpeed|body|string|false|Speed at which payouts for this account are processed.<br><br>Possible values: `STANDARD` (default), `SAME_DAY`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» payoutSchedule|BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT|
|» payoutSchedule|DAILY|
|» payoutSchedule|DAILY_AU|
|» payoutSchedule|DAILY_EU|
|» payoutSchedule|DAILY_SG|
|» payoutSchedule|DAILY_US|
|» payoutSchedule|HOLD|
|» payoutSchedule|MONTHLY|
|» payoutSchedule|WEEKLY|
|» payoutSchedule|WEEKLY_MON_TO_FRI_AU|
|» payoutSchedule|WEEKLY_MON_TO_FRI_EU|
|» payoutSchedule|WEEKLY_MON_TO_FRI_US|
|» payoutSchedule|WEEKLY_ON_TUE_FRI_MIDNIGHT|
|» payoutSchedule|WEEKLY_SUN_TO_THU_AU|
|» payoutSchedule|WEEKLY_SUN_TO_THU_US|
|» payoutSpeed|INSTANT|
|» payoutSpeed|SAME_DAY|
|» payoutSpeed|STANDARD|

> Example responses

> 200 Response

```json
{
  "accountCode": "string",
  "accountHolderCode": "string",
  "bankAccountUUID": "string",
  "description": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "payoutMethodCode": "string",
  "payoutSchedule": {
    "nextScheduledPayout": "1970-01-01T00:00:00Z",
    "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
  },
  "payoutSpeed": "INSTANT",
  "pspReference": "string",
  "resultCode": "string",
  "status": "Active"
}
```

> 202 Response

```json
{
  "accountCode": "string",
  "accountHolderCode": "string",
  "bankAccountUUID": "string",
  "description": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "payoutMethodCode": "string",
  "payoutSchedule": {
    "nextScheduledPayout": "1970-01-01T00:00:00Z",
    "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
  },
  "payoutSpeed": "INSTANT",
  "pspReference": "string",
  "resultCode": "string",
  "status": "Active"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="create-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CreateAccountResponse](#schemacreateaccountresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[CreateAccountResponse](#schemacreateaccountresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Update an account

<a id="opIdpost-updateAccount"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/updateAccount \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountCode": "CODE_OF_ACCOUNT",
    "payoutSchedule": {
      "schedule": "WEEKLY",
      "action": "CLOSE"
    }
  }'
```

`POST /updateAccount`

Updates the description or payout schedule of an account.

> Body parameter

```json
{
  "accountCode": "CODE_OF_ACCOUNT",
  "payoutSchedule": {
    "schedule": "WEEKLY",
    "action": "CLOSE"
  }
}
```

<h3 id="update-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateAccountRequest](#schemaupdateaccountrequest)|false|none|
|» accountCode|body|string|true|The code of the account to update.|
|» bankAccountUUID|body|string|false|The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.|
|» description|body|string|false|A description of the account, maximum 256 characters.You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.|
|» metadata|body|object|false|A set of key and value pairs for general use by the merchant.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|» » **additionalProperties**|body|string|false|none|
|» payoutMethodCode|body|string|false|The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.|
|» payoutSchedule|body|[UpdatePayoutScheduleRequest](#schemaupdatepayoutschedulerequest)|false|The details of the payout schedule to which the account must be updated.|
|» payoutSpeed|body|string|false|Speed at which payouts for this account are processed.<br><br>Possible values: `STANDARD` (default), `SAME_DAY`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» payoutSpeed|INSTANT|
|» payoutSpeed|SAME_DAY|
|» payoutSpeed|STANDARD|

> Example responses

> 200 Response

```json
{
  "accountCode": "string",
  "bankAccountUUID": "string",
  "description": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "payoutMethodCode": "string",
  "payoutSchedule": {
    "nextScheduledPayout": "1970-01-01T00:00:00Z",
    "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
  },
  "payoutSpeed": "INSTANT",
  "pspReference": "string",
  "resultCode": "string"
}
```

> 202 Response

```json
{
  "accountCode": "string",
  "bankAccountUUID": "string",
  "description": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "payoutMethodCode": "string",
  "payoutSchedule": {
    "nextScheduledPayout": "1970-01-01T00:00:00Z",
    "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
  },
  "payoutSpeed": "INSTANT",
  "pspReference": "string",
  "resultCode": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="update-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[UpdateAccountResponse](#schemaupdateaccountresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[UpdateAccountResponse](#schemaupdateaccountresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="account-api-verification">Verification</h1>

## Trigger verification

<a id="opIdpost-checkAccountHolder"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/checkAccountHolder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
    "accountStateType": "Processing",
    "tier": "2"
  }'
```

`POST /checkAccountHolder`

Triggers the verification of an account holder even if the checks are not yet required for the volume that they are currently processing.

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
  "accountStateType": "Processing",
  "tier": "2"
}
```

<h3 id="trigger-verification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PerformVerificationRequest](#schemaperformverificationrequest)|false|none|
|» accountHolderCode|body|string|true|The code of the account holder to verify.|
|» accountStateType|body|string|true|The state required for the account holder.<br>> Permitted values: `Processing`, `Payout`.|
|» tier|body|integer(int32)|true|The tier required for the account holder.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» accountStateType|LimitedPayout|
|» accountStateType|LimitedProcessing|
|» accountStateType|LimitlessPayout|
|» accountStateType|LimitlessProcessing|
|» accountStateType|Payout|
|» accountStateType|Processing|

> Example responses

> 200 Response

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 202 Response

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="trigger-verification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GenericResponse](#schemagenericresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[GenericResponse](#schemagenericresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Delete bank accounts

<a id="opIdpost-deleteBankAccounts"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/deleteBankAccounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
    "bankAccountUUIDs": [
      "eeb6ed22-3bae-483c-83b9-bc2097a75d40"
    ]
  }'
```

`POST /deleteBankAccounts`

Deletes bank accounts associated with an account holder. 

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
  "bankAccountUUIDs": [
    "eeb6ed22-3bae-483c-83b9-bc2097a75d40"
  ]
}
```

<h3 id="delete-bank-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteBankAccountRequest](#schemadeletebankaccountrequest)|false|none|
|» accountHolderCode|body|string|true|The code of the Account Holder from which to delete the Bank Account(s).|
|» bankAccountUUIDs|body|[string]|true|The code(s) of the Bank Accounts to be deleted.|

> Example responses

> 200 Response

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 202 Response

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="delete-bank-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GenericResponse](#schemagenericresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[GenericResponse](#schemagenericresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Delete legal arrangements

<a id="opIdpost-deleteLegalArrangements"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/deleteLegalArrangements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
    "legalArrangements": [
      {
        "legalArrangementCode": "cdf92f5a-a114-4ce6-8f19-c3f6ec83141c"
      }
    ]
  }'
```

`POST /deleteLegalArrangements`

Deletes legal arrangements and/or legal arrangement entities associated with an account holder.

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
  "legalArrangements": [
    {
      "legalArrangementCode": "cdf92f5a-a114-4ce6-8f19-c3f6ec83141c"
    }
  ]
}
```

<h3 id="delete-legal-arrangements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteLegalArrangementRequest](#schemadeletelegalarrangementrequest)|false|none|
|» accountHolderCode|body|string|true|The code of the account holder.|
|» legalArrangements|body|[[LegalArrangementRequest](#schemalegalarrangementrequest)]|true|List of legal arrangements.|

> Example responses

> 200 Response

```json
{
  "invalidFields": [],
  "pspReference": "8816080397613514"
}
```

> 202 Response

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 400 Response

```json
{
  "invalidFields": [
    {
      "errorCode": 34,
      "errorDescription": "An invalid legalArrangementCode code is provided for value 'cdf92f5a-a114-4ce6-8f19-c3f6ec83141c'",
      "fieldType": {
        "field": "AccountHolderDetails.LegalArrangements.legalArrangementCode",
        "fieldName": "legalArrangementCode"
      }
    }
  ],
  "pspReference": "9916613322577326"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="delete-legal-arrangements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GenericResponse](#schemagenericresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[GenericResponse](#schemagenericresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Delete payout methods

<a id="opIdpost-deletePayoutMethods"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/deletePayoutMethods \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
    "payoutMethodCodes": [
      "34b6ed22-3bae-483c-83b9-bc2097a75d40"
    ]
  }'
```

`POST /deletePayoutMethods`

Deletes payout methods associated with an account holder.

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
  "payoutMethodCodes": [
    "34b6ed22-3bae-483c-83b9-bc2097a75d40"
  ]
}
```

<h3 id="delete-payout-methods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeletePayoutMethodRequest](#schemadeletepayoutmethodrequest)|false|none|
|» accountHolderCode|body|string|true|The code of the account holder, from which to delete the payout methods.|
|» payoutMethodCodes|body|[string]|true|The codes of the payout methods to be deleted.|

> Example responses

> 200 Response

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 202 Response

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="delete-payout-methods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GenericResponse](#schemagenericresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[GenericResponse](#schemagenericresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Delete shareholders

<a id="opIdpost-deleteShareholders"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/deleteShareholders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
    "shareholderCodes": [
      "9188218c-576e-4cbe-8e86-72722f453920"
    ]
  }'
```

`POST /deleteShareholders`

Deletes shareholders associated with an account holder.

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
  "shareholderCodes": [
    "9188218c-576e-4cbe-8e86-72722f453920"
  ]
}
```

<h3 id="delete-shareholders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteShareholderRequest](#schemadeleteshareholderrequest)|false|none|
|» accountHolderCode|body|string|true|The code of the Account Holder from which to delete the Shareholders.|
|» shareholderCodes|body|[string]|true|The code(s) of the Shareholders to be deleted.|

> Example responses

> 200 Response

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 202 Response

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="delete-shareholders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GenericResponse](#schemagenericresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[GenericResponse](#schemagenericresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Delete signatories

<a id="opIdpost-deleteSignatories"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/deleteSignatories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "string",
    "signatoryCodes": [
      "string"
    ]
  }'
```

`POST /deleteSignatories`

Deletes signatories associated with an account holder.

> Body parameter

```json
{
  "accountHolderCode": "string",
  "signatoryCodes": [
    "string"
  ]
}
```

<h3 id="delete-signatories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteSignatoriesRequest](#schemadeletesignatoriesrequest)|false|none|
|» accountHolderCode|body|string|true|The code of the account holder from which to delete the signatories.|
|» signatoryCodes|body|[string]|true|Array of codes of the signatories to be deleted.|

> Example responses

> 200 Response

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 202 Response

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="delete-signatories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GenericResponse](#schemagenericresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[GenericResponse](#schemagenericresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get documents

<a id="opIdpost-getUploadedDocuments"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/getUploadedDocuments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
    "bankAccountUUID": "EXAMPLE_UUID"
  }'
```

`POST /getUploadedDocuments`

Returns documents that were previously uploaded for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/classic-platforms/verification-process).


> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
  "bankAccountUUID": "EXAMPLE_UUID"
}
```

<h3 id="get-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetUploadedDocumentsRequest](#schemagetuploadeddocumentsrequest)|false|none|
|» accountHolderCode|body|string|true|The code of the Account Holder for which to retrieve the documents.|
|» bankAccountUUID|body|string|false|The code of the Bank Account for which to retrieve the documents.|
|» shareholderCode|body|string|false|The code of the Shareholder for which to retrieve the documents.|

> Example responses

> 200 Response

```json
{
  "documentDetails": [
    {
      "accountHolderCode": "string",
      "bankAccountUUID": "string",
      "description": "string",
      "documentType": "BANK_STATEMENT",
      "filename": "string",
      "legalArrangementCode": "string",
      "legalArrangementEntityCode": "string",
      "shareholderCode": "string",
      "signatoryCode": "string"
    }
  ],
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="get-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetUploadedDocumentsResponse](#schemagetuploadeddocumentsresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Upload a document

<a id="opIdpost-uploadDocument"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Account/v6/uploadDocument \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "documentContent": "dGVzdCBkb2N1bWVudCBjb250ZW50",
    "documentDetail": {
      "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
      "documentType": "PASSPORT",
      "filename": "passport.png",
      "description": "test passport description"
    }
  }'
```

`POST /uploadDocument`

Uploads a document for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/classic-platforms/verification-process).

> Body parameter

```json
{
  "documentContent": "dGVzdCBkb2N1bWVudCBjb250ZW50",
  "documentDetail": {
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
    "documentType": "PASSPORT",
    "filename": "passport.png",
    "description": "test passport description"
  }
}
```

<h3 id="upload-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UploadDocumentRequest](#schemauploaddocumentrequest)|false|none|
|» documentContent|body|string(byte)|true|The content of the document, in Base64-encoded string format.<br><br>To learn about document requirements, refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks).|
|» documentDetail|body|[DocumentDetail](#schemadocumentdetail)|true|Details of the document being submitted.|

> Example responses

> 200 Response

```json
{
  "accountHolderCode": "string",
  "accountHolderDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "bankAccountDetails": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "bankAccountName": "string",
        "bankAccountReference": "string",
        "bankAccountUUID": "string",
        "bankBicSwift": "string",
        "bankCity": "string",
        "bankCode": "string",
        "bankName": "string",
        "branchCode": "string",
        "checkCode": "string",
        "countryCode": "string",
        "currencyCode": "string",
        "iban": "string",
        "ownerCity": "string",
        "ownerCountryCode": "string",
        "ownerDateOfBirth": "string",
        "ownerHouseNumberOrName": "string",
        "ownerName": "string",
        "ownerNationality": "string",
        "ownerPostalCode": "string",
        "ownerState": "string",
        "ownerStreet": "string",
        "primaryAccount": true,
        "taxId": "string",
        "urlForVerification": "string"
      }
    ],
    "bankAggregatorDataReference": "string",
    "businessDetails": {
      "doingBusinessAs": "string",
      "legalBusinessName": "string",
      "listedUltimateParentCompany": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "businessDetails": {
            "legalBusinessName": "string",
            "registrationNumber": "string",
            "stockExchange": "string",
            "stockNumber": "string",
            "stockTicker": "string"
          },
          "ultimateParentCompanyCode": "string"
        }
      ],
      "registrationNumber": "string",
      "shareholders": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "shareholderCode": "string",
          "shareholderReference": "string",
          "shareholderType": "Controller",
          "webAddress": "string"
        }
      ],
      "signatories": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "signatoryCode": "string",
          "signatoryReference": "string",
          "webAddress": "string"
        }
      ],
      "stockExchange": "string",
      "stockNumber": "string",
      "stockTicker": "string",
      "taxId": "string"
    },
    "email": "string",
    "fullPhoneNumber": "string",
    "individualDetails": {
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      }
    },
    "lastReviewDate": "string",
    "legalArrangements": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "legalArrangementCode": "string",
        "legalArrangementEntities": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "doingBusinessAs": "string",
              "legalBusinessName": "string",
              "listedUltimateParentCompany": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "businessDetails": {
                    "legalBusinessName": "string",
                    "registrationNumber": "string",
                    "stockExchange": "string",
                    "stockNumber": "string",
                    "stockTicker": "string"
                  },
                  "ultimateParentCompanyCode": "string"
                }
              ],
              "registrationNumber": "string",
              "shareholders": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "shareholderCode": "string",
                  "shareholderReference": "string",
                  "shareholderType": "Controller",
                  "webAddress": "string"
                }
              ],
              "signatories": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "signatoryCode": "string",
                  "signatoryReference": "string",
                  "webAddress": "string"
                }
              ],
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string",
              "taxId": "string"
            },
            "email": "string",
            "fullPhoneNumber": "string",
            "individualDetails": {
              "name": {
                "firstName": "string",
                "gender": "MALE",
                "infix": "string",
                "lastName": "string"
              },
              "personalData": {
                "dateOfBirth": "string",
                "documentData": [
                  {
                    "expirationDate": "string",
                    "issuerCountry": "st",
                    "issuerState": "string",
                    "number": "string",
                    "type": "DRIVINGLICENSE"
                  }
                ],
                "nationality": "st"
              }
            },
            "legalArrangementEntityCode": "string",
            "legalArrangementEntityReference": "string",
            "legalArrangementMembers": [
              "Beneficiary"
            ],
            "legalEntityType": "Business",
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "webAddress": "string"
          }
        ],
        "legalArrangementReference": "string",
        "legalForm": "CashManagementTrust",
        "name": "string",
        "registrationNumber": "string",
        "taxNumber": "string",
        "type": "Association"
      }
    ],
    "merchantCategoryCode": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "payoutMethods": [
      {
        "merchantAccount": "string",
        "payoutMethodCode": "string",
        "payoutMethodReference": "string",
        "recurringDetailReference": "string",
        "shopperReference": "string"
      }
    ],
    "phoneNumber": {
      "phoneCountryCode": "string",
      "phoneNumber": "string",
      "phoneType": "Fax"
    },
    "principalBusinessAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "storeDetails": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "fullPhoneNumber": "string",
        "logo": "string",
        "merchantAccount": "string",
        "merchantCategoryCode": "string",
        "merchantHouseNumber": "string",
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shopperInteraction": "Ecommerce",
        "splitConfigurationUUID": "string",
        "status": "Active",
        "store": "string",
        "storeName": "string",
        "storeReference": "string",
        "virtualAccount": "string",
        "webAddress": "string"
      }
    ],
    "webAddress": "string"
  },
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "description": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "legalEntity": "Business",
  "primaryCurrency": "string",
  "pspReference": "string",
  "resultCode": "string",
  "verification": {
    "accountHolder": {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ]
    },
    "legalArrangements": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string"
      }
    ],
    "legalArrangementsEntities": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string"
      }
    ],
    "payoutMethods": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "payoutMethodCode": "string"
      }
    ],
    "shareholders": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string",
        "shareholderCode": "string"
      }
    ],
    "signatories": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "signatoryCode": "string"
      }
    ],
    "ultimateParentCompany": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "ultimateParentCompanyCode": "string"
      }
    ]
  },
  "verificationProfile": "string"
}
```

> 202 Response

```json
{
  "accountHolderCode": "string",
  "accountHolderDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "bankAccountDetails": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "bankAccountName": "string",
        "bankAccountReference": "string",
        "bankAccountUUID": "string",
        "bankBicSwift": "string",
        "bankCity": "string",
        "bankCode": "string",
        "bankName": "string",
        "branchCode": "string",
        "checkCode": "string",
        "countryCode": "string",
        "currencyCode": "string",
        "iban": "string",
        "ownerCity": "string",
        "ownerCountryCode": "string",
        "ownerDateOfBirth": "string",
        "ownerHouseNumberOrName": "string",
        "ownerName": "string",
        "ownerNationality": "string",
        "ownerPostalCode": "string",
        "ownerState": "string",
        "ownerStreet": "string",
        "primaryAccount": true,
        "taxId": "string",
        "urlForVerification": "string"
      }
    ],
    "bankAggregatorDataReference": "string",
    "businessDetails": {
      "doingBusinessAs": "string",
      "legalBusinessName": "string",
      "listedUltimateParentCompany": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "businessDetails": {
            "legalBusinessName": "string",
            "registrationNumber": "string",
            "stockExchange": "string",
            "stockNumber": "string",
            "stockTicker": "string"
          },
          "ultimateParentCompanyCode": "string"
        }
      ],
      "registrationNumber": "string",
      "shareholders": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "shareholderCode": "string",
          "shareholderReference": "string",
          "shareholderType": "Controller",
          "webAddress": "string"
        }
      ],
      "signatories": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "signatoryCode": "string",
          "signatoryReference": "string",
          "webAddress": "string"
        }
      ],
      "stockExchange": "string",
      "stockNumber": "string",
      "stockTicker": "string",
      "taxId": "string"
    },
    "email": "string",
    "fullPhoneNumber": "string",
    "individualDetails": {
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      }
    },
    "lastReviewDate": "string",
    "legalArrangements": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "legalArrangementCode": "string",
        "legalArrangementEntities": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "doingBusinessAs": "string",
              "legalBusinessName": "string",
              "listedUltimateParentCompany": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "businessDetails": {
                    "legalBusinessName": "string",
                    "registrationNumber": "string",
                    "stockExchange": "string",
                    "stockNumber": "string",
                    "stockTicker": "string"
                  },
                  "ultimateParentCompanyCode": "string"
                }
              ],
              "registrationNumber": "string",
              "shareholders": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "shareholderCode": "string",
                  "shareholderReference": "string",
                  "shareholderType": "Controller",
                  "webAddress": "string"
                }
              ],
              "signatories": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "signatoryCode": "string",
                  "signatoryReference": "string",
                  "webAddress": "string"
                }
              ],
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string",
              "taxId": "string"
            },
            "email": "string",
            "fullPhoneNumber": "string",
            "individualDetails": {
              "name": {
                "firstName": "string",
                "gender": "MALE",
                "infix": "string",
                "lastName": "string"
              },
              "personalData": {
                "dateOfBirth": "string",
                "documentData": [
                  {
                    "expirationDate": "string",
                    "issuerCountry": "st",
                    "issuerState": "string",
                    "number": "string",
                    "type": "DRIVINGLICENSE"
                  }
                ],
                "nationality": "st"
              }
            },
            "legalArrangementEntityCode": "string",
            "legalArrangementEntityReference": "string",
            "legalArrangementMembers": [
              "Beneficiary"
            ],
            "legalEntityType": "Business",
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "webAddress": "string"
          }
        ],
        "legalArrangementReference": "string",
        "legalForm": "CashManagementTrust",
        "name": "string",
        "registrationNumber": "string",
        "taxNumber": "string",
        "type": "Association"
      }
    ],
    "merchantCategoryCode": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "payoutMethods": [
      {
        "merchantAccount": "string",
        "payoutMethodCode": "string",
        "payoutMethodReference": "string",
        "recurringDetailReference": "string",
        "shopperReference": "string"
      }
    ],
    "phoneNumber": {
      "phoneCountryCode": "string",
      "phoneNumber": "string",
      "phoneType": "Fax"
    },
    "principalBusinessAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "storeDetails": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "fullPhoneNumber": "string",
        "logo": "string",
        "merchantAccount": "string",
        "merchantCategoryCode": "string",
        "merchantHouseNumber": "string",
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shopperInteraction": "Ecommerce",
        "splitConfigurationUUID": "string",
        "status": "Active",
        "store": "string",
        "storeName": "string",
        "storeReference": "string",
        "virtualAccount": "string",
        "webAddress": "string"
      }
    ],
    "webAddress": "string"
  },
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "description": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "legalEntity": "Business",
  "primaryCurrency": "string",
  "pspReference": "string",
  "resultCode": "string",
  "verification": {
    "accountHolder": {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ]
    },
    "legalArrangements": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string"
      }
    ],
    "legalArrangementsEntities": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string"
      }
    ],
    "payoutMethods": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "payoutMethodCode": "string"
      }
    ],
    "shareholders": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string",
        "shareholderCode": "string"
      }
    ],
    "signatories": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "signatoryCode": "string"
      }
    ],
    "ultimateParentCompany": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "ultimateParentCompanyCode": "string"
      }
    ]
  },
  "verificationProfile": "string"
}
```

> 400 Response

```json
{
  "status": 400,
  "errorCode": "702",
  "message": "Unexpected input: I",
  "errorType": "validation"
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
  "status": 403,
  "errorCode": "10_003",
  "message": "Failed to authorize user",
  "errorType": "security"
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

<h3 id="upload-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[UpdateAccountHolderResponse](#schemaupdateaccountholderresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[UpdateAccountHolderResponse](#schemaupdateaccountholderresponse)|
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

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "accountCode": "string",
  "bankAccountUUID": "string",
  "beneficiaryAccount": "string",
  "beneficiaryMerchantReference": "string",
  "description": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "payoutMethodCode": "string",
  "payoutSchedule": {
    "nextScheduledPayout": "1970-01-01T00:00:00Z",
    "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
  },
  "payoutSpeed": "INSTANT",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The code of the account.|
|bankAccountUUID|string|false|none|The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.|
|beneficiaryAccount|string|false|none|The beneficiary of the account.|
|beneficiaryMerchantReference|string|false|none|The reason that a beneficiary has been set up for this account. This may have been supplied during the setup of a beneficiary at the discretion of the executing user.|
|description|string|false|none|A description of the account.|
|metadata|object|false|none|A set of key and value pairs for general use by the merchant.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|payoutMethodCode|string|false|none|The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.|
|payoutSchedule|[PayoutScheduleResponse](#schemapayoutscheduleresponse)|false|none|The account's payout schedule.|
|payoutSpeed|string|false|none|Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.|
|status|string|false|none|The status of the account. Possible values: `Active`, `Inactive`, `Suspended`, `Closed`.|

#### Enumerated Values

|Property|Value|
|---|---|
|payoutSpeed|INSTANT|
|payoutSpeed|SAME_DAY|
|payoutSpeed|STANDARD|

<h2 id="tocS_AccountEvent">AccountEvent</h2>
<!-- backwards compatibility -->
<a id="schemaaccountevent"></a>
<a id="schema_AccountEvent"></a>
<a id="tocSaccountevent"></a>
<a id="tocsaccountevent"></a>

```json
{
  "event": "InactivateAccount",
  "executionDate": "1970-01-01T00:00:00Z",
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|string|false|none|The event.<br>>Permitted values: `InactivateAccount`, `RefundNotPaidOutTransfers`.<br>For more information, refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-process).|
|executionDate|string(date-time)|false|none|The date on which the event will take place.|
|reason|string|false|none|The reason why this event has been created.|

#### Enumerated Values

|Property|Value|
|---|---|
|event|InactivateAccount|
|event|RefundNotPaidOutTransfers|

<h2 id="tocS_AccountHolderDetails">AccountHolderDetails</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderdetails"></a>
<a id="schema_AccountHolderDetails"></a>
<a id="tocSaccountholderdetails"></a>
<a id="tocsaccountholderdetails"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "bankAccountDetails": [
    {
      "accountNumber": "string",
      "accountType": "string",
      "bankAccountName": "string",
      "bankAccountReference": "string",
      "bankAccountUUID": "string",
      "bankBicSwift": "string",
      "bankCity": "string",
      "bankCode": "string",
      "bankName": "string",
      "branchCode": "string",
      "checkCode": "string",
      "countryCode": "string",
      "currencyCode": "string",
      "iban": "string",
      "ownerCity": "string",
      "ownerCountryCode": "string",
      "ownerDateOfBirth": "string",
      "ownerHouseNumberOrName": "string",
      "ownerName": "string",
      "ownerNationality": "string",
      "ownerPostalCode": "string",
      "ownerState": "string",
      "ownerStreet": "string",
      "primaryAccount": true,
      "taxId": "string",
      "urlForVerification": "string"
    }
  ],
  "bankAggregatorDataReference": "string",
  "businessDetails": {
    "doingBusinessAs": "string",
    "legalBusinessName": "string",
    "listedUltimateParentCompany": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "businessDetails": {
          "legalBusinessName": "string",
          "registrationNumber": "string",
          "stockExchange": "string",
          "stockNumber": "string",
          "stockTicker": "string"
        },
        "ultimateParentCompanyCode": "string"
      }
    ],
    "registrationNumber": "string",
    "shareholders": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "email": "string",
        "fullPhoneNumber": "string",
        "jobTitle": "string",
        "name": {
          "firstName": "string",
          "gender": "MALE",
          "infix": "string",
          "lastName": "string"
        },
        "personalData": {
          "dateOfBirth": "string",
          "documentData": [
            {
              "expirationDate": "string",
              "issuerCountry": "st",
              "issuerState": "string",
              "number": "string",
              "type": "DRIVINGLICENSE"
            }
          ],
          "nationality": "st"
        },
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shareholderCode": "string",
        "shareholderReference": "string",
        "shareholderType": "Controller",
        "webAddress": "string"
      }
    ],
    "signatories": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "email": "string",
        "fullPhoneNumber": "string",
        "jobTitle": "string",
        "name": {
          "firstName": "string",
          "gender": "MALE",
          "infix": "string",
          "lastName": "string"
        },
        "personalData": {
          "dateOfBirth": "string",
          "documentData": [
            {
              "expirationDate": "string",
              "issuerCountry": "st",
              "issuerState": "string",
              "number": "string",
              "type": "DRIVINGLICENSE"
            }
          ],
          "nationality": "st"
        },
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "signatoryCode": "string",
        "signatoryReference": "string",
        "webAddress": "string"
      }
    ],
    "stockExchange": "string",
    "stockNumber": "string",
    "stockTicker": "string",
    "taxId": "string"
  },
  "email": "string",
  "fullPhoneNumber": "string",
  "individualDetails": {
    "name": {
      "firstName": "string",
      "gender": "MALE",
      "infix": "string",
      "lastName": "string"
    },
    "personalData": {
      "dateOfBirth": "string",
      "documentData": [
        {
          "expirationDate": "string",
          "issuerCountry": "st",
          "issuerState": "string",
          "number": "string",
          "type": "DRIVINGLICENSE"
        }
      ],
      "nationality": "st"
    }
  },
  "lastReviewDate": "string",
  "legalArrangements": [
    {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "legalArrangementCode": "string",
      "legalArrangementEntities": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "businessDetails": {
            "doingBusinessAs": "string",
            "legalBusinessName": "string",
            "listedUltimateParentCompany": [
              {
                "address": {
                  "city": "string",
                  "country": "string",
                  "houseNumberOrName": "string",
                  "postalCode": "string",
                  "stateOrProvince": "string",
                  "street": "string"
                },
                "businessDetails": {
                  "legalBusinessName": "string",
                  "registrationNumber": "string",
                  "stockExchange": "string",
                  "stockNumber": "string",
                  "stockTicker": "string"
                },
                "ultimateParentCompanyCode": "string"
              }
            ],
            "registrationNumber": "string",
            "shareholders": [
              {
                "address": {
                  "city": "string",
                  "country": "string",
                  "houseNumberOrName": "string",
                  "postalCode": "string",
                  "stateOrProvince": "string",
                  "street": "string"
                },
                "email": "string",
                "fullPhoneNumber": "string",
                "jobTitle": "string",
                "name": {
                  "firstName": "string",
                  "gender": "MALE",
                  "infix": "string",
                  "lastName": "string"
                },
                "personalData": {
                  "dateOfBirth": "string",
                  "documentData": [
                    {
                      "expirationDate": "string",
                      "issuerCountry": "st",
                      "issuerState": "string",
                      "number": "string",
                      "type": "DRIVINGLICENSE"
                    }
                  ],
                  "nationality": "st"
                },
                "phoneNumber": {
                  "phoneCountryCode": "string",
                  "phoneNumber": "string",
                  "phoneType": "Fax"
                },
                "shareholderCode": "string",
                "shareholderReference": "string",
                "shareholderType": "Controller",
                "webAddress": "string"
              }
            ],
            "signatories": [
              {
                "address": {
                  "city": "string",
                  "country": "string",
                  "houseNumberOrName": "string",
                  "postalCode": "string",
                  "stateOrProvince": "string",
                  "street": "string"
                },
                "email": "string",
                "fullPhoneNumber": "string",
                "jobTitle": "string",
                "name": {
                  "firstName": "string",
                  "gender": "MALE",
                  "infix": "string",
                  "lastName": "string"
                },
                "personalData": {
                  "dateOfBirth": "string",
                  "documentData": [
                    {
                      "expirationDate": "string",
                      "issuerCountry": "st",
                      "issuerState": "string",
                      "number": "string",
                      "type": "DRIVINGLICENSE"
                    }
                  ],
                  "nationality": "st"
                },
                "phoneNumber": {
                  "phoneCountryCode": "string",
                  "phoneNumber": "string",
                  "phoneType": "Fax"
                },
                "signatoryCode": "string",
                "signatoryReference": "string",
                "webAddress": "string"
              }
            ],
            "stockExchange": "string",
            "stockNumber": "string",
            "stockTicker": "string",
            "taxId": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "individualDetails": {
            "name": {
              "firstName": "string",
              "gender": "MALE",
              "infix": "string",
              "lastName": "string"
            },
            "personalData": {
              "dateOfBirth": "string",
              "documentData": [
                {
                  "expirationDate": "string",
                  "issuerCountry": "st",
                  "issuerState": "string",
                  "number": "string",
                  "type": "DRIVINGLICENSE"
                }
              ],
              "nationality": "st"
            }
          },
          "legalArrangementEntityCode": "string",
          "legalArrangementEntityReference": "string",
          "legalArrangementMembers": [
            "Beneficiary"
          ],
          "legalEntityType": "Business",
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "webAddress": "string"
        }
      ],
      "legalArrangementReference": "string",
      "legalForm": "CashManagementTrust",
      "name": "string",
      "registrationNumber": "string",
      "taxNumber": "string",
      "type": "Association"
    }
  ],
  "merchantCategoryCode": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "payoutMethods": [
    {
      "merchantAccount": "string",
      "payoutMethodCode": "string",
      "payoutMethodReference": "string",
      "recurringDetailReference": "string",
      "shopperReference": "string"
    }
  ],
  "phoneNumber": {
    "phoneCountryCode": "string",
    "phoneNumber": "string",
    "phoneType": "Fax"
  },
  "principalBusinessAddress": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "storeDetails": [
    {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "fullPhoneNumber": "string",
      "logo": "string",
      "merchantAccount": "string",
      "merchantCategoryCode": "string",
      "merchantHouseNumber": "string",
      "phoneNumber": {
        "phoneCountryCode": "string",
        "phoneNumber": "string",
        "phoneType": "Fax"
      },
      "shopperInteraction": "Ecommerce",
      "splitConfigurationUUID": "string",
      "status": "Active",
      "store": "string",
      "storeName": "string",
      "storeReference": "string",
      "virtualAccount": "string",
      "webAddress": "string"
    }
  ],
  "webAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[ViasAddress](#schemaviasaddress)|true|none|The address of the account holder.|
|bankAccountDetails|[[BankAccountDetail](#schemabankaccountdetail)]|false|none|Array of bank accounts associated with the account holder. For details about the required `bankAccountDetail` fields, see [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information).|
|bankAggregatorDataReference|string|false|none|The opaque reference value returned by the Adyen API during bank account login.|
|businessDetails|[BusinessDetails](#schemabusinessdetails)|false|none|Details about the business or nonprofit account holder.<br>Required when creating an account holder with `legalEntity` **Business** or **NonProfit**.|
|email|string|false|none|The email address of the account holder.|
|fullPhoneNumber|string|false|none|The phone number of the account holder provided as a single string. It will be handled as a landline phone.<br>**Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"|
|individualDetails|[IndividualDetails](#schemaindividualdetails)|false|none|Details about the individual account holder.<br>Required when creating an account holder with `legalEntity` **Individual**.<br>|
|lastReviewDate|string|false|none|Date when you last reviewed the account holder's information, in ISO-8601 YYYY-MM-DD format. For example, **2020-01-31**.|
|legalArrangements|[[LegalArrangementDetail](#schemalegalarrangementdetail)]|false|none|An array containing information about the account holder's [legal arrangements](https://docs.adyen.com/classic-platforms/verification-process/legal-arrangements).|
|merchantCategoryCode|string|false|none|The Merchant Category Code of the account holder.<br>> If not specified in the request, this will be derived from the platform account (which is configured by Adyen).|
|metadata|object|false|none|A set of key and value pairs for general use by the account holder or merchant.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> The values being stored have a maximum length of eighty (80) characters and will be truncated if necessary.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|payoutMethods|[[PayoutMethod](#schemapayoutmethod)]|false|none|Array of tokenized card details associated with the account holder. For details about how you can use the tokens to pay out, refer to [Pay out to cards](https://docs.adyen.com/classic-platforms/payout-to-cards).|
|phoneNumber|[ViasPhoneNumber](#schemaviasphonenumber)|false|none|The phone number of the account holder.<br>> Required if a `fullPhoneNumber` is not provided.|
|principalBusinessAddress|[ViasAddress](#schemaviasaddress)|false|none|The principal business address of the account holder.|
|storeDetails|[[StoreDetail](#schemastoredetail)]|false|none|Array of stores associated with the account holder. Required when onboarding account holders that have an Adyen [point of sale](https://docs.adyen.com/classic-platforms/platforms-for-pos).|
|webAddress|string|false|none|The URL of the website of the account holder.|

<h2 id="tocS_AccountHolderStatus">AccountHolderStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderstatus"></a>
<a id="schema_AccountHolderStatus"></a>
<a id="tocSaccountholderstatus"></a>
<a id="tocsaccountholderstatus"></a>

```json
{
  "events": [
    {
      "event": "InactivateAccount",
      "executionDate": "1970-01-01T00:00:00Z",
      "reason": "string"
    }
  ],
  "payoutState": {
    "allowPayout": true,
    "disableReason": "string",
    "disabled": true,
    "notAllowedReason": "string",
    "payoutLimit": {
      "currency": "str",
      "value": 0
    },
    "tierNumber": 0
  },
  "processingState": {
    "disableReason": "string",
    "disabled": true,
    "processedFrom": {
      "currency": "str",
      "value": 0
    },
    "processedTo": {
      "currency": "str",
      "value": 0
    },
    "tierNumber": 0
  },
  "status": "Active",
  "statusReason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[[AccountEvent](#schemaaccountevent)]|false|none|A list of events scheduled for the account holder.|
|payoutState|[AccountPayoutState](#schemaaccountpayoutstate)|false|none|The payout state of the account holder.|
|processingState|[AccountProcessingState](#schemaaccountprocessingstate)|false|none|The processing state of the account holder.|
|status|string|true|none|The status of the account holder.<br>>Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.|
|statusReason|string|false|none|The reason why the status was assigned to the account holder.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Active|
|status|Closed|
|status|Inactive|
|status|Suspended|

<h2 id="tocS_AccountPayoutState">AccountPayoutState</h2>
<!-- backwards compatibility -->
<a id="schemaaccountpayoutstate"></a>
<a id="schema_AccountPayoutState"></a>
<a id="tocSaccountpayoutstate"></a>
<a id="tocsaccountpayoutstate"></a>

```json
{
  "allowPayout": true,
  "disableReason": "string",
  "disabled": true,
  "notAllowedReason": "string",
  "payoutLimit": {
    "currency": "str",
    "value": 0
  },
  "tierNumber": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowPayout|boolean|false|none|Indicates whether payouts are allowed. This field is the overarching payout status, and is the aggregate of multiple conditions (e.g., KYC status, disabled flag, etc). If this field is false, no payouts will be permitted for any of the account holder's accounts. If this field is true, payouts will be permitted for any of the account holder's accounts.|
|disableReason|string|false|none|The reason why payouts (to all of the account holder's accounts) have been disabled (by the platform). If the `disabled` field is true, this field can be used to explain why.|
|disabled|boolean|false|none|Indicates whether payouts have been disabled (by the platform) for all of the account holder's accounts. A platform may enable and disable this field at their discretion. If this field is true, `allowPayout` will be false and no payouts will be permitted for any of the account holder's accounts. If this field is false, `allowPayout` may or may not be enabled, depending on other factors.|
|notAllowedReason|string|false|none|The reason why payouts (to all of the account holder's accounts) have been disabled (by Adyen). If payouts have been disabled by Adyen, this field will explain why. If this field is blank, payouts have not been disabled by Adyen.|
|payoutLimit|[Amount](#schemaamount)|false|none|The maximum amount that payouts are limited to. Only applies if payouts are allowed but limited.|
|tierNumber|integer(int32)|false|none|The payout tier that the account holder occupies.|

<h2 id="tocS_AccountProcessingState">AccountProcessingState</h2>
<!-- backwards compatibility -->
<a id="schemaaccountprocessingstate"></a>
<a id="schema_AccountProcessingState"></a>
<a id="tocSaccountprocessingstate"></a>
<a id="tocsaccountprocessingstate"></a>

```json
{
  "disableReason": "string",
  "disabled": true,
  "processedFrom": {
    "currency": "str",
    "value": 0
  },
  "processedTo": {
    "currency": "str",
    "value": 0
  },
  "tierNumber": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableReason|string|false|none|The reason why processing has been disabled.|
|disabled|boolean|false|none|Indicates whether the processing of payments is allowed.|
|processedFrom|[Amount](#schemaamount)|false|none|The lower bound of the processing tier (i.e., an account holder must have processed at least this amount of money in order to be placed into this tier).|
|processedTo|[Amount](#schemaamount)|false|none|The upper bound of the processing tier (i.e., an account holder must have processed less than this amount of money in order to be placed into this tier).|
|tierNumber|integer(int32)|false|none|The processing tier that the account holder occupies.|

<h2 id="tocS_Amount">Amount</h2>
<!-- backwards compatibility -->
<a id="schemaamount"></a>
<a id="schema_Amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
{
  "currency": "str",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|value|integer(int64)|true|none|The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|

<h2 id="tocS_BankAccountDetail">BankAccountDetail</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountdetail"></a>
<a id="schema_BankAccountDetail"></a>
<a id="tocSbankaccountdetail"></a>
<a id="tocsbankaccountdetail"></a>

```json
{
  "accountNumber": "string",
  "accountType": "string",
  "bankAccountName": "string",
  "bankAccountReference": "string",
  "bankAccountUUID": "string",
  "bankBicSwift": "string",
  "bankCity": "string",
  "bankCode": "string",
  "bankName": "string",
  "branchCode": "string",
  "checkCode": "string",
  "countryCode": "string",
  "currencyCode": "string",
  "iban": "string",
  "ownerCity": "string",
  "ownerCountryCode": "string",
  "ownerDateOfBirth": "string",
  "ownerHouseNumberOrName": "string",
  "ownerName": "string",
  "ownerNationality": "string",
  "ownerPostalCode": "string",
  "ownerState": "string",
  "ownerStreet": "string",
  "primaryAccount": true,
  "taxId": "string",
  "urlForVerification": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|false|none|The bank account number (without separators).<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|accountType|string|false|none|The type of bank account.<br>Only applicable to bank accounts held in the USA.<br>The permitted values are: `checking`, `savings`.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|bankAccountName|string|false|none|The name of the bank account.|
|bankAccountReference|string|false|none|Merchant reference to the bank account.|
|bankAccountUUID|string|false|none|The unique identifier (UUID) of the Bank Account.<br>>If, during an account holder create or update request, this field is left blank (but other fields provided), a new Bank Account will be created with a procedurally-generated UUID.<br><br>>If, during an account holder create request, a UUID is provided, the creation of the Bank Account will fail while the creation of the account holder will continue.<br><br>>If, during an account holder update request, a UUID that is not correlated with an existing Bank Account is provided, the update of the account holder will fail.<br><br>>If, during an account holder update request, a UUID that is correlated with an existing Bank Account is provided, the existing Bank Account will be updated.<br>|
|bankBicSwift|string|false|none|The bank identifier code.<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|bankCity|string|false|none|The city in which the bank branch is located.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|bankCode|string|false|none|The bank code of the banking institution with which the bank account is registered.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|bankName|string|false|none|The name of the banking institution with which the bank account is held.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|branchCode|string|false|none|The branch code of the branch under which the bank account is registered. The value to be specified in this parameter depends on the country of the bank account:<br>* United States - Routing number<br>* United Kingdom - Sort code<br>* Germany - Bankleitzahl<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|checkCode|string|false|none|The check code of the bank account.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|countryCode|string|false|none|The two-letter country code in which the bank account is registered.<br>>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|currencyCode|string|false|none|The currency in which the bank account deals.<br>>The permitted currency codes are defined in ISO-4217 (e.g. 'EUR').<br>|
|iban|string|false|none|The international bank account number.<br>>The IBAN standard is defined in ISO-13616.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerCity|string|false|none|The city of residence of the bank account owner.<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerCountryCode|string|false|none|The country code of the country of residence of the bank account owner.<br>>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerDateOfBirth|string|false|none|**Deprecated.** The date of birth of the bank account owner.<br>The date should be in ISO-8601 format yyyy-mm-dd (e.g. 2000-01-31).|
|ownerHouseNumberOrName|string|false|none|The house name or number of the residence of the bank account owner.<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerName|string|false|none|The name of the bank account owner.<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerNationality|string|false|none|The country code of the country of nationality of the bank account owner.<br>>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerPostalCode|string|false|none|The postal code of the residence of the bank account owner.<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerState|string|false|none|The state of residence of the bank account owner.<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|ownerStreet|string|false|none|The street name of the residence of the bank account owner.<br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|primaryAccount|boolean|false|none|If set to true, the bank account is a primary account.|
|taxId|string|false|none|The tax ID number.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|
|urlForVerification|string|false|none|The URL to be used for bank account verification.<br>This may be generated on bank account creation.<br><br>>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.|

<h2 id="tocS_BusinessDetails">BusinessDetails</h2>
<!-- backwards compatibility -->
<a id="schemabusinessdetails"></a>
<a id="schema_BusinessDetails"></a>
<a id="tocSbusinessdetails"></a>
<a id="tocsbusinessdetails"></a>

```json
{
  "doingBusinessAs": "string",
  "legalBusinessName": "string",
  "listedUltimateParentCompany": [
    {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "businessDetails": {
        "legalBusinessName": "string",
        "registrationNumber": "string",
        "stockExchange": "string",
        "stockNumber": "string",
        "stockTicker": "string"
      },
      "ultimateParentCompanyCode": "string"
    }
  ],
  "registrationNumber": "string",
  "shareholders": [
    {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "email": "string",
      "fullPhoneNumber": "string",
      "jobTitle": "string",
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      },
      "phoneNumber": {
        "phoneCountryCode": "string",
        "phoneNumber": "string",
        "phoneType": "Fax"
      },
      "shareholderCode": "string",
      "shareholderReference": "string",
      "shareholderType": "Controller",
      "webAddress": "string"
    }
  ],
  "signatories": [
    {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "email": "string",
      "fullPhoneNumber": "string",
      "jobTitle": "string",
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      },
      "phoneNumber": {
        "phoneCountryCode": "string",
        "phoneNumber": "string",
        "phoneType": "Fax"
      },
      "signatoryCode": "string",
      "signatoryReference": "string",
      "webAddress": "string"
    }
  ],
  "stockExchange": "string",
  "stockNumber": "string",
  "stockTicker": "string",
  "taxId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doingBusinessAs|string|false|none|The registered name of the company (if it differs from the legal name of the company).|
|legalBusinessName|string|false|none|The legal name of the company.|
|listedUltimateParentCompany|[[UltimateParentCompany](#schemaultimateparentcompany)]|false|none|Information about the parent public company. Required if the account holder is 100% owned by a publicly listed company.|
|registrationNumber|string|false|none|The registration number of the company.|
|shareholders|[[ShareholderContact](#schemashareholdercontact)]|false|none|Array containing information about individuals associated with the account holder either through ownership or control. For details about how you can identify them, refer to [our verification guide](https://docs.adyen.com/classic-platforms/verification-process#identify-ubos).|
|signatories|[[SignatoryContact](#schemasignatorycontact)]|false|none|Signatories associated with the company.<br>Each array entry should represent one signatory.|
|stockExchange|string|false|none|Market Identifier Code (MIC).|
|stockNumber|string|false|none|International Securities Identification Number (ISIN).|
|stockTicker|string|false|none|Stock Ticker symbol.|
|taxId|string|false|none|The tax ID of the company.|

<h2 id="tocS_CloseAccountHolderRequest">CloseAccountHolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemacloseaccountholderrequest"></a>
<a id="schema_CloseAccountHolderRequest"></a>
<a id="tocScloseaccountholderrequest"></a>
<a id="tocscloseaccountholderrequest"></a>

```json
{
  "accountHolderCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the Account Holder to be closed.|

<h2 id="tocS_CloseAccountHolderResponse">CloseAccountHolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacloseaccountholderresponse"></a>
<a id="schema_CloseAccountHolderResponse"></a>
<a id="tocScloseaccountholderresponse"></a>
<a id="tocscloseaccountholderresponse"></a>

```json
{
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderStatus|[AccountHolderStatus](#schemaaccountholderstatus)|false|none|The new status of the Account Holder.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

<h2 id="tocS_CloseAccountRequest">CloseAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemacloseaccountrequest"></a>
<a id="schema_CloseAccountRequest"></a>
<a id="tocScloseaccountrequest"></a>
<a id="tocscloseaccountrequest"></a>

```json
{
  "accountCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|true|none|The code of account to be closed.|

<h2 id="tocS_CloseAccountResponse">CloseAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemacloseaccountresponse"></a>
<a id="schema_CloseAccountResponse"></a>
<a id="tocScloseaccountresponse"></a>
<a id="tocscloseaccountresponse"></a>

```json
{
  "accountCode": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string",
  "status": "Active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The account code of the account that is closed.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|
|status|string|false|none|The new status of the account.<br>>Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Active|
|status|Closed|
|status|Inactive|
|status|Suspended|

<h2 id="tocS_CloseStoresRequest">CloseStoresRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclosestoresrequest"></a>
<a id="schema_CloseStoresRequest"></a>
<a id="tocSclosestoresrequest"></a>
<a id="tocsclosestoresrequest"></a>

```json
{
  "accountHolderCode": "string",
  "stores": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the account holder.|
|stores|[string]|true|none|List of stores to be closed.|

<h2 id="tocS_CreateAccountHolderRequest">CreateAccountHolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountholderrequest"></a>
<a id="schema_CreateAccountHolderRequest"></a>
<a id="tocScreateaccountholderrequest"></a>
<a id="tocscreateaccountholderrequest"></a>

```json
{
  "accountHolderCode": "string",
  "accountHolderDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "bankAccountDetails": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "bankAccountName": "string",
        "bankAccountReference": "string",
        "bankAccountUUID": "string",
        "bankBicSwift": "string",
        "bankCity": "string",
        "bankCode": "string",
        "bankName": "string",
        "branchCode": "string",
        "checkCode": "string",
        "countryCode": "string",
        "currencyCode": "string",
        "iban": "string",
        "ownerCity": "string",
        "ownerCountryCode": "string",
        "ownerDateOfBirth": "string",
        "ownerHouseNumberOrName": "string",
        "ownerName": "string",
        "ownerNationality": "string",
        "ownerPostalCode": "string",
        "ownerState": "string",
        "ownerStreet": "string",
        "primaryAccount": true,
        "taxId": "string",
        "urlForVerification": "string"
      }
    ],
    "bankAggregatorDataReference": "string",
    "businessDetails": {
      "doingBusinessAs": "string",
      "legalBusinessName": "string",
      "listedUltimateParentCompany": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "businessDetails": {
            "legalBusinessName": "string",
            "registrationNumber": "string",
            "stockExchange": "string",
            "stockNumber": "string",
            "stockTicker": "string"
          },
          "ultimateParentCompanyCode": "string"
        }
      ],
      "registrationNumber": "string",
      "shareholders": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "shareholderCode": "string",
          "shareholderReference": "string",
          "shareholderType": "Controller",
          "webAddress": "string"
        }
      ],
      "signatories": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "signatoryCode": "string",
          "signatoryReference": "string",
          "webAddress": "string"
        }
      ],
      "stockExchange": "string",
      "stockNumber": "string",
      "stockTicker": "string",
      "taxId": "string"
    },
    "email": "string",
    "fullPhoneNumber": "string",
    "individualDetails": {
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      }
    },
    "lastReviewDate": "string",
    "legalArrangements": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "legalArrangementCode": "string",
        "legalArrangementEntities": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "doingBusinessAs": "string",
              "legalBusinessName": "string",
              "listedUltimateParentCompany": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "businessDetails": {
                    "legalBusinessName": "string",
                    "registrationNumber": "string",
                    "stockExchange": "string",
                    "stockNumber": "string",
                    "stockTicker": "string"
                  },
                  "ultimateParentCompanyCode": "string"
                }
              ],
              "registrationNumber": "string",
              "shareholders": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "shareholderCode": "string",
                  "shareholderReference": "string",
                  "shareholderType": "Controller",
                  "webAddress": "string"
                }
              ],
              "signatories": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "signatoryCode": "string",
                  "signatoryReference": "string",
                  "webAddress": "string"
                }
              ],
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string",
              "taxId": "string"
            },
            "email": "string",
            "fullPhoneNumber": "string",
            "individualDetails": {
              "name": {
                "firstName": "string",
                "gender": "MALE",
                "infix": "string",
                "lastName": "string"
              },
              "personalData": {
                "dateOfBirth": "string",
                "documentData": [
                  {
                    "expirationDate": "string",
                    "issuerCountry": "st",
                    "issuerState": "string",
                    "number": "string",
                    "type": "DRIVINGLICENSE"
                  }
                ],
                "nationality": "st"
              }
            },
            "legalArrangementEntityCode": "string",
            "legalArrangementEntityReference": "string",
            "legalArrangementMembers": [
              "Beneficiary"
            ],
            "legalEntityType": "Business",
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "webAddress": "string"
          }
        ],
        "legalArrangementReference": "string",
        "legalForm": "CashManagementTrust",
        "name": "string",
        "registrationNumber": "string",
        "taxNumber": "string",
        "type": "Association"
      }
    ],
    "merchantCategoryCode": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "payoutMethods": [
      {
        "merchantAccount": "string",
        "payoutMethodCode": "string",
        "payoutMethodReference": "string",
        "recurringDetailReference": "string",
        "shopperReference": "string"
      }
    ],
    "phoneNumber": {
      "phoneCountryCode": "string",
      "phoneNumber": "string",
      "phoneType": "Fax"
    },
    "principalBusinessAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "storeDetails": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "fullPhoneNumber": "string",
        "logo": "string",
        "merchantAccount": "string",
        "merchantCategoryCode": "string",
        "merchantHouseNumber": "string",
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shopperInteraction": "Ecommerce",
        "splitConfigurationUUID": "string",
        "status": "Active",
        "store": "string",
        "storeName": "string",
        "storeReference": "string",
        "virtualAccount": "string",
        "webAddress": "string"
      }
    ],
    "webAddress": "string"
  },
  "createDefaultAccount": true,
  "description": "string",
  "legalEntity": "Business",
  "primaryCurrency": "string",
  "processingTier": 0,
  "verificationProfile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|Your unique identifier for the prospective account holder.<br>The length must be between three (3) and fifty (50) characters long. Only letters, digits, and hyphens (-) are allowed.|
|accountHolderDetails|[AccountHolderDetails](#schemaaccountholderdetails)|true|none|The details of the prospective account holder.|
|createDefaultAccount|boolean|false|none|If set to **true**, an account with the default options is automatically created for the account holder.<br>By default, this field is set to **true**.|
|description|string|false|none|A description of the prospective account holder, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.|
|legalEntity|string|true|none|The legal entity type of the account holder. This determines the information that should be provided in the request.<br><br>Possible values: **Business**, **Individual**, or **NonProfit**.<br><br>* If set to **Business** or **NonProfit**, then `accountHolderDetails.businessDetails` must be provided, with at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.<br><br>* If set to **Individual**, then `accountHolderDetails.individualDetails` must be provided.|
|primaryCurrency|string|false|none|**Deprecated.** The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.|
|processingTier|integer(int32)|false|none|The starting [processing tier](https://docs.adyen.com/classic-platforms/onboarding-and-verification/precheck-kyc-information) for the prospective account holder.|
|verificationProfile|string|false|none|The identifier of the profile that applies to this entity.|

#### Enumerated Values

|Property|Value|
|---|---|
|legalEntity|Business|
|legalEntity|Individual|
|legalEntity|NonProfit|
|legalEntity|Partnership|
|legalEntity|PublicCompany|

<h2 id="tocS_CreateAccountHolderResponse">CreateAccountHolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountholderresponse"></a>
<a id="schema_CreateAccountHolderResponse"></a>
<a id="tocScreateaccountholderresponse"></a>
<a id="tocscreateaccountholderresponse"></a>

```json
{
  "accountCode": "string",
  "accountHolderCode": "string",
  "accountHolderDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "bankAccountDetails": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "bankAccountName": "string",
        "bankAccountReference": "string",
        "bankAccountUUID": "string",
        "bankBicSwift": "string",
        "bankCity": "string",
        "bankCode": "string",
        "bankName": "string",
        "branchCode": "string",
        "checkCode": "string",
        "countryCode": "string",
        "currencyCode": "string",
        "iban": "string",
        "ownerCity": "string",
        "ownerCountryCode": "string",
        "ownerDateOfBirth": "string",
        "ownerHouseNumberOrName": "string",
        "ownerName": "string",
        "ownerNationality": "string",
        "ownerPostalCode": "string",
        "ownerState": "string",
        "ownerStreet": "string",
        "primaryAccount": true,
        "taxId": "string",
        "urlForVerification": "string"
      }
    ],
    "bankAggregatorDataReference": "string",
    "businessDetails": {
      "doingBusinessAs": "string",
      "legalBusinessName": "string",
      "listedUltimateParentCompany": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "businessDetails": {
            "legalBusinessName": "string",
            "registrationNumber": "string",
            "stockExchange": "string",
            "stockNumber": "string",
            "stockTicker": "string"
          },
          "ultimateParentCompanyCode": "string"
        }
      ],
      "registrationNumber": "string",
      "shareholders": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "shareholderCode": "string",
          "shareholderReference": "string",
          "shareholderType": "Controller",
          "webAddress": "string"
        }
      ],
      "signatories": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "signatoryCode": "string",
          "signatoryReference": "string",
          "webAddress": "string"
        }
      ],
      "stockExchange": "string",
      "stockNumber": "string",
      "stockTicker": "string",
      "taxId": "string"
    },
    "email": "string",
    "fullPhoneNumber": "string",
    "individualDetails": {
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      }
    },
    "lastReviewDate": "string",
    "legalArrangements": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "legalArrangementCode": "string",
        "legalArrangementEntities": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "doingBusinessAs": "string",
              "legalBusinessName": "string",
              "listedUltimateParentCompany": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "businessDetails": {
                    "legalBusinessName": "string",
                    "registrationNumber": "string",
                    "stockExchange": "string",
                    "stockNumber": "string",
                    "stockTicker": "string"
                  },
                  "ultimateParentCompanyCode": "string"
                }
              ],
              "registrationNumber": "string",
              "shareholders": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "shareholderCode": "string",
                  "shareholderReference": "string",
                  "shareholderType": "Controller",
                  "webAddress": "string"
                }
              ],
              "signatories": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "signatoryCode": "string",
                  "signatoryReference": "string",
                  "webAddress": "string"
                }
              ],
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string",
              "taxId": "string"
            },
            "email": "string",
            "fullPhoneNumber": "string",
            "individualDetails": {
              "name": {
                "firstName": "string",
                "gender": "MALE",
                "infix": "string",
                "lastName": "string"
              },
              "personalData": {
                "dateOfBirth": "string",
                "documentData": [
                  {
                    "expirationDate": "string",
                    "issuerCountry": "st",
                    "issuerState": "string",
                    "number": "string",
                    "type": "DRIVINGLICENSE"
                  }
                ],
                "nationality": "st"
              }
            },
            "legalArrangementEntityCode": "string",
            "legalArrangementEntityReference": "string",
            "legalArrangementMembers": [
              "Beneficiary"
            ],
            "legalEntityType": "Business",
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "webAddress": "string"
          }
        ],
        "legalArrangementReference": "string",
        "legalForm": "CashManagementTrust",
        "name": "string",
        "registrationNumber": "string",
        "taxNumber": "string",
        "type": "Association"
      }
    ],
    "merchantCategoryCode": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "payoutMethods": [
      {
        "merchantAccount": "string",
        "payoutMethodCode": "string",
        "payoutMethodReference": "string",
        "recurringDetailReference": "string",
        "shopperReference": "string"
      }
    ],
    "phoneNumber": {
      "phoneCountryCode": "string",
      "phoneNumber": "string",
      "phoneType": "Fax"
    },
    "principalBusinessAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "storeDetails": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "fullPhoneNumber": "string",
        "logo": "string",
        "merchantAccount": "string",
        "merchantCategoryCode": "string",
        "merchantHouseNumber": "string",
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shopperInteraction": "Ecommerce",
        "splitConfigurationUUID": "string",
        "status": "Active",
        "store": "string",
        "storeName": "string",
        "storeReference": "string",
        "virtualAccount": "string",
        "webAddress": "string"
      }
    ],
    "webAddress": "string"
  },
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "description": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "legalEntity": "Business",
  "primaryCurrency": "string",
  "pspReference": "string",
  "resultCode": "string",
  "verification": {
    "accountHolder": {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ]
    },
    "legalArrangements": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string"
      }
    ],
    "legalArrangementsEntities": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string"
      }
    ],
    "payoutMethods": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "payoutMethodCode": "string"
      }
    ],
    "shareholders": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string",
        "shareholderCode": "string"
      }
    ],
    "signatories": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "signatoryCode": "string"
      }
    ],
    "ultimateParentCompany": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "ultimateParentCompanyCode": "string"
      }
    ]
  },
  "verificationProfile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The code of a new account created for the account holder.|
|accountHolderCode|string|false|none|The code of the new account holder.|
|accountHolderDetails|[AccountHolderDetails](#schemaaccountholderdetails)|false|none|Details of the new account holder.|
|accountHolderStatus|[AccountHolderStatus](#schemaaccountholderstatus)|false|none|The status of the new account holder.|
|description|string|false|none|The description of the new account holder.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|A list of fields that caused the `/createAccountHolder` request to fail.|
|legalEntity|string|false|none|The type of legal entity of the new account holder.|
|primaryCurrency|string|false|none|**Deprecated.** The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|
|verification|[KYCVerificationResult](#schemakycverificationresult)|false|none|The details of KYC Verification of the account holder.|
|verificationProfile|string|false|none|The identifier of the profile that applies to this entity.|

#### Enumerated Values

|Property|Value|
|---|---|
|legalEntity|Business|
|legalEntity|Individual|
|legalEntity|NonProfit|
|legalEntity|Partnership|
|legalEntity|PublicCompany|

<h2 id="tocS_CreateAccountRequest">CreateAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountrequest"></a>
<a id="schema_CreateAccountRequest"></a>
<a id="tocScreateaccountrequest"></a>
<a id="tocscreateaccountrequest"></a>

```json
{
  "accountHolderCode": "string",
  "bankAccountUUID": "string",
  "description": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "payoutMethodCode": "string",
  "payoutSchedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT",
  "payoutScheduleReason": "string",
  "payoutSpeed": "STANDARD"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of Account Holder under which to create the account.|
|bankAccountUUID|string|false|none|The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.|
|description|string|false|none|A description of the account, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.|
|metadata|object|false|none|A set of key and value pairs for general use by the merchant.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|payoutMethodCode|string|false|none|The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.|
|payoutSchedule|string|false|none|The payout schedule for the account.<br><br>Possible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`.<br>> `HOLD` prevents scheduled payouts, but you can still initiate payouts manually.|
|payoutScheduleReason|string|false|none|The reason for the payout schedule choice.<br>> This field is required when the `payoutSchedule` parameter is set to `HOLD`.|
|payoutSpeed|string|false|none|Speed at which payouts for this account are processed.<br><br>Possible values: `STANDARD` (default), `SAME_DAY`.|

#### Enumerated Values

|Property|Value|
|---|---|
|payoutSchedule|BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT|
|payoutSchedule|DAILY|
|payoutSchedule|DAILY_AU|
|payoutSchedule|DAILY_EU|
|payoutSchedule|DAILY_SG|
|payoutSchedule|DAILY_US|
|payoutSchedule|HOLD|
|payoutSchedule|MONTHLY|
|payoutSchedule|WEEKLY|
|payoutSchedule|WEEKLY_MON_TO_FRI_AU|
|payoutSchedule|WEEKLY_MON_TO_FRI_EU|
|payoutSchedule|WEEKLY_MON_TO_FRI_US|
|payoutSchedule|WEEKLY_ON_TUE_FRI_MIDNIGHT|
|payoutSchedule|WEEKLY_SUN_TO_THU_AU|
|payoutSchedule|WEEKLY_SUN_TO_THU_US|
|payoutSpeed|INSTANT|
|payoutSpeed|SAME_DAY|
|payoutSpeed|STANDARD|

<h2 id="tocS_CreateAccountResponse">CreateAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountresponse"></a>
<a id="schema_CreateAccountResponse"></a>
<a id="tocScreateaccountresponse"></a>
<a id="tocscreateaccountresponse"></a>

```json
{
  "accountCode": "string",
  "accountHolderCode": "string",
  "bankAccountUUID": "string",
  "description": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "payoutMethodCode": "string",
  "payoutSchedule": {
    "nextScheduledPayout": "1970-01-01T00:00:00Z",
    "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
  },
  "payoutSpeed": "INSTANT",
  "pspReference": "string",
  "resultCode": "string",
  "status": "Active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The code of the new account.|
|accountHolderCode|string|false|none|The code of the account holder.|
|bankAccountUUID|string|false|none|The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.|
|description|string|false|none|The description of the account.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|A list of fields that caused the `/createAccount` request to fail.|
|metadata|object|false|none|A set of key and value pairs containing metadata.|
|payoutMethodCode|string|false|none|The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.|
|payoutSchedule|[PayoutScheduleResponse](#schemapayoutscheduleresponse)|false|none|The details of the payout schedule added to the account.|
|payoutSpeed|string|false|none|Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|
|status|string|false|none|The status of the account.<br>>Permitted values: `Active`.|

#### Enumerated Values

|Property|Value|
|---|---|
|payoutSpeed|INSTANT|
|payoutSpeed|SAME_DAY|
|payoutSpeed|STANDARD|
|status|Active|
|status|Closed|
|status|Inactive|
|status|Suspended|

<h2 id="tocS_DeleteBankAccountRequest">DeleteBankAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletebankaccountrequest"></a>
<a id="schema_DeleteBankAccountRequest"></a>
<a id="tocSdeletebankaccountrequest"></a>
<a id="tocsdeletebankaccountrequest"></a>

```json
{
  "accountHolderCode": "string",
  "bankAccountUUIDs": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the Account Holder from which to delete the Bank Account(s).|
|bankAccountUUIDs|[string]|true|none|The code(s) of the Bank Accounts to be deleted.|

<h2 id="tocS_DeleteLegalArrangementRequest">DeleteLegalArrangementRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelegalarrangementrequest"></a>
<a id="schema_DeleteLegalArrangementRequest"></a>
<a id="tocSdeletelegalarrangementrequest"></a>
<a id="tocsdeletelegalarrangementrequest"></a>

```json
{
  "accountHolderCode": "string",
  "legalArrangements": [
    {
      "legalArrangementCode": "string",
      "legalArrangementEntityCodes": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the account holder.|
|legalArrangements|[[LegalArrangementRequest](#schemalegalarrangementrequest)]|true|none|List of legal arrangements.|

<h2 id="tocS_DeletePayoutMethodRequest">DeletePayoutMethodRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepayoutmethodrequest"></a>
<a id="schema_DeletePayoutMethodRequest"></a>
<a id="tocSdeletepayoutmethodrequest"></a>
<a id="tocsdeletepayoutmethodrequest"></a>

```json
{
  "accountHolderCode": "string",
  "payoutMethodCodes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the account holder, from which to delete the payout methods.|
|payoutMethodCodes|[string]|true|none|The codes of the payout methods to be deleted.|

<h2 id="tocS_DeleteShareholderRequest">DeleteShareholderRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteshareholderrequest"></a>
<a id="schema_DeleteShareholderRequest"></a>
<a id="tocSdeleteshareholderrequest"></a>
<a id="tocsdeleteshareholderrequest"></a>

```json
{
  "accountHolderCode": "string",
  "shareholderCodes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the Account Holder from which to delete the Shareholders.|
|shareholderCodes|[string]|true|none|The code(s) of the Shareholders to be deleted.|

<h2 id="tocS_DeleteSignatoriesRequest">DeleteSignatoriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletesignatoriesrequest"></a>
<a id="schema_DeleteSignatoriesRequest"></a>
<a id="tocSdeletesignatoriesrequest"></a>
<a id="tocsdeletesignatoriesrequest"></a>

```json
{
  "accountHolderCode": "string",
  "signatoryCodes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the account holder from which to delete the signatories.|
|signatoryCodes|[string]|true|none|Array of codes of the signatories to be deleted.|

<h2 id="tocS_DocumentDetail">DocumentDetail</h2>
<!-- backwards compatibility -->
<a id="schemadocumentdetail"></a>
<a id="schema_DocumentDetail"></a>
<a id="tocSdocumentdetail"></a>
<a id="tocsdocumentdetail"></a>

```json
{
  "accountHolderCode": "string",
  "bankAccountUUID": "string",
  "description": "string",
  "documentType": "BANK_STATEMENT",
  "filename": "string",
  "legalArrangementCode": "string",
  "legalArrangementEntityCode": "string",
  "shareholderCode": "string",
  "signatoryCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|false|none|The code of account holder, to which the document applies.|
|bankAccountUUID|string|false|none|The Adyen-generated [`bankAccountUUID`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-bankAccountDetails-bankAccountUUID) to which the document must be linked. Refer to [Bank account check](https://docs.adyen.com/classic-platforms/verification-checks/bank-account-check#uploading-a-bank-statement) for details on when a document should be submitted.<br>>Required if the `documentType` is **BANK_STATEMENT**, where a document is being submitted in order to verify a bank account.<br>|
|description|string|false|none|Description of the document.|
|documentType|string|true|none|The type of the document. Refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks) for details on when each document type should be submitted and for the accepted file formats.<br><br>Permitted values:<br>* **BANK_STATEMENT**: A file containing a bank statement or other document proving ownership of a specific bank account.<br>* **COMPANY_REGISTRATION_SCREENING** (Supported from v5 and later): A file containing a company registration document.<br>* **CONSTITUTIONAL_DOCUMENT**: A file containing information about the account holder's legal arrangement.<br>* **PASSPORT**: A file containing the identity page(s) of a passport.<br>* **ID_CARD_FRONT**: A file containing only the front of the ID card. In order for a document to be usable, both the **ID_CARD_FRONT** and **ID_CARD_BACK** must be submitted.<br>* **ID_CARD_BACK**: A file containing only the back of the ID card. In order for a document to be usable, both the **ID_CARD_FRONT** and **ID_CARD_BACK** must be submitted.<br>* **DRIVING_LICENCE_FRONT**: A file containing only the front of the driving licence. In order for a document to be usable, both the **DRIVING_LICENCE_FRONT** and **DRIVING_LICENCE_BACK** must be submitted.<br>* **DRIVING_LICENCE_BACK**: A file containing only the back of the driving licence. In order for a document to be usable, both the **DRIVING_LICENCE_FRONT** and **DRIVING_LICENCE_FRONT** must be submitted.<br>|
|filename|string|false|none|Filename of the document.|
|legalArrangementCode|string|false|none|The Adyen-generated [`legalArrangementCode`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-legalArrangements-legalArrangementCode) to which the document must be linked.|
|legalArrangementEntityCode|string|false|none|The Adyen-generated [`legalArrangementEntityCode`](https://docs.adyen.com/api-explorer/#/Account/v6/post/createAccountHolder__resParam_accountHolderDetails-legalArrangements-legalArrangementEntities-legalArrangementEntityCode)  to which the document must be linked.|
|shareholderCode|string|false|none|The Adyen-generated [`shareholderCode`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-businessDetails-shareholders-shareholderCode) to which the document must be linked. Refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks) for details on when a document should be submitted.<br>>Required if the account holder has a `legalEntity` of type **Business** and the `documentType` is either **PASSPORT**, **ID_CARD_FRONT**, **ID_CARD_BACK**, **DRIVING_LICENCE_FRONT**, or **DRIVING_LICENCE_BACK**. |
|signatoryCode|string|false|none|The Adyen-generated [`signatoryCode`](https://docs.adyen.com/api-explorer/#/Account/v6/post/createAccountHolder__resParam_accountHolderDetails-businessDetails-signatories-signatoryCode) to which the document must be linked.|

#### Enumerated Values

|Property|Value|
|---|---|
|documentType|BANK_STATEMENT|
|documentType|BSN|
|documentType|COMPANY_REGISTRATION_SCREENING|
|documentType|CONSTITUTIONAL_DOCUMENT|
|documentType|DRIVING_LICENCE|
|documentType|DRIVING_LICENCE_BACK|
|documentType|DRIVING_LICENCE_FRONT|
|documentType|ID_CARD|
|documentType|ID_CARD_BACK|
|documentType|ID_CARD_FRONT|
|documentType|PASSPORT|
|documentType|PROOF_OF_RESIDENCY|
|documentType|SSN|
|documentType|SUPPORTING_DOCUMENTS|

<h2 id="tocS_ErrorFieldType">ErrorFieldType</h2>
<!-- backwards compatibility -->
<a id="schemaerrorfieldtype"></a>
<a id="schema_ErrorFieldType"></a>
<a id="tocSerrorfieldtype"></a>
<a id="tocserrorfieldtype"></a>

```json
{
  "errorCode": 0,
  "errorDescription": "string",
  "fieldType": {
    "field": "string",
    "fieldName": "accountCode",
    "shareholderCode": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|integer(int32)|false|none|The validation error code.|
|errorDescription|string|false|none|A description of the validation error.|
|fieldType|[FieldType](#schemafieldtype)|false|none|The type of error field.|

<h2 id="tocS_FieldType">FieldType</h2>
<!-- backwards compatibility -->
<a id="schemafieldtype"></a>
<a id="schema_FieldType"></a>
<a id="tocSfieldtype"></a>
<a id="tocsfieldtype"></a>

```json
{
  "field": "string",
  "fieldName": "accountCode",
  "shareholderCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|The full name of the property.|
|fieldName|string|false|none|The type of the field.|
|shareholderCode|string|false|none|The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.|

#### Enumerated Values

|Property|Value|
|---|---|
|fieldName|accountCode|
|fieldName|accountHolderCode|
|fieldName|accountHolderDetails|
|fieldName|accountNumber|
|fieldName|accountStateType|
|fieldName|accountStatus|
|fieldName|accountType|
|fieldName|address|
|fieldName|balanceAccount|
|fieldName|balanceAccountActive|
|fieldName|balanceAccountCode|
|fieldName|balanceAccountId|
|fieldName|bankAccount|
|fieldName|bankAccountCode|
|fieldName|bankAccountName|
|fieldName|bankAccountUUID|
|fieldName|bankBicSwift|
|fieldName|bankCity|
|fieldName|bankCode|
|fieldName|bankName|
|fieldName|bankStatement|
|fieldName|branchCode|
|fieldName|businessContact|
|fieldName|cardToken|
|fieldName|checkCode|
|fieldName|city|
|fieldName|companyRegistration|
|fieldName|constitutionalDocument|
|fieldName|controller|
|fieldName|country|
|fieldName|countryCode|
|fieldName|currency|
|fieldName|currencyCode|
|fieldName|dateOfBirth|
|fieldName|description|
|fieldName|destinationAccountCode|
|fieldName|document|
|fieldName|documentContent|
|fieldName|documentExpirationDate|
|fieldName|documentIssuerCountry|
|fieldName|documentIssuerState|
|fieldName|documentName|
|fieldName|documentNumber|
|fieldName|documentType|
|fieldName|doingBusinessAs|
|fieldName|drivingLicence|
|fieldName|drivingLicenceBack|
|fieldName|drivingLicenceFront|
|fieldName|drivingLicense|
|fieldName|email|
|fieldName|firstName|
|fieldName|formType|
|fieldName|fullPhoneNumber|
|fieldName|gender|
|fieldName|hopWebserviceUser|
|fieldName|houseNumberOrName|
|fieldName|iban|
|fieldName|idCard|
|fieldName|idCardBack|
|fieldName|idCardFront|
|fieldName|idNumber|
|fieldName|identityDocument|
|fieldName|individualDetails|
|fieldName|infix|
|fieldName|jobTitle|
|fieldName|lastName|
|fieldName|lastReviewDate|
|fieldName|legalArrangement|
|fieldName|legalArrangementCode|
|fieldName|legalArrangementEntity|
|fieldName|legalArrangementEntityCode|
|fieldName|legalArrangementLegalForm|
|fieldName|legalArrangementMember|
|fieldName|legalArrangementMembers|
|fieldName|legalArrangementName|
|fieldName|legalArrangementReference|
|fieldName|legalArrangementRegistrationNumber|
|fieldName|legalArrangementTaxNumber|
|fieldName|legalArrangementType|
|fieldName|legalBusinessName|
|fieldName|legalEntity|
|fieldName|legalEntityType|
|fieldName|linkedViasVirtualAccount|
|fieldName|logo|
|fieldName|merchantAccount|
|fieldName|merchantCategoryCode|
|fieldName|merchantHouseNumber|
|fieldName|merchantReference|
|fieldName|microDeposit|
|fieldName|name|
|fieldName|nationality|
|fieldName|originalReference|
|fieldName|ownerCity|
|fieldName|ownerCountryCode|
|fieldName|ownerDateOfBirth|
|fieldName|ownerHouseNumberOrName|
|fieldName|ownerName|
|fieldName|ownerPostalCode|
|fieldName|ownerState|
|fieldName|ownerStreet|
|fieldName|passport|
|fieldName|passportNumber|
|fieldName|payoutMethod|
|fieldName|payoutMethodCode|
|fieldName|payoutSchedule|
|fieldName|pciSelfAssessment|
|fieldName|personalData|
|fieldName|phoneCountryCode|
|fieldName|phoneNumber|
|fieldName|postalCode|
|fieldName|primaryCurrency|
|fieldName|reason|
|fieldName|registrationNumber|
|fieldName|returnUrl|
|fieldName|schedule|
|fieldName|shareholder|
|fieldName|shareholderCode|
|fieldName|shareholderCodeAndSignatoryCode|
|fieldName|shareholderCodeOrSignatoryCode|
|fieldName|shareholderType|
|fieldName|shareholderTypes|
|fieldName|shopperInteraction|
|fieldName|signatory|
|fieldName|signatoryCode|
|fieldName|socialSecurityNumber|
|fieldName|sourceAccountCode|
|fieldName|splitAccount|
|fieldName|splitConfigurationUUID|
|fieldName|splitCurrency|
|fieldName|splitValue|
|fieldName|splits|
|fieldName|stateOrProvince|
|fieldName|status|
|fieldName|stockExchange|
|fieldName|stockNumber|
|fieldName|stockTicker|
|fieldName|store|
|fieldName|storeDetail|
|fieldName|storeName|
|fieldName|storeReference|
|fieldName|street|
|fieldName|taxId|
|fieldName|tier|
|fieldName|tierNumber|
|fieldName|transferCode|
|fieldName|ultimateParentCompany|
|fieldName|ultimateParentCompanyAddressDetails|
|fieldName|ultimateParentCompanyAddressDetailsCountry|
|fieldName|ultimateParentCompanyBusinessDetails|
|fieldName|ultimateParentCompanyBusinessDetailsLegalBusinessName|
|fieldName|ultimateParentCompanyBusinessDetailsRegistrationNumber|
|fieldName|ultimateParentCompanyCode|
|fieldName|ultimateParentCompanyStockExchange|
|fieldName|ultimateParentCompanyStockNumber|
|fieldName|ultimateParentCompanyStockNumberOrStockTicker|
|fieldName|ultimateParentCompanyStockTicker|
|fieldName|unknown|
|fieldName|value|
|fieldName|verificationType|
|fieldName|virtualAccount|
|fieldName|visaNumber|
|fieldName|webAddress|
|fieldName|year|

<h2 id="tocS_GenericResponse">GenericResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenericresponse"></a>
<a id="schema_GenericResponse"></a>
<a id="tocSgenericresponse"></a>
<a id="tocsgenericresponse"></a>

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

<h2 id="tocS_GetAccountHolderRequest">GetAccountHolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountholderrequest"></a>
<a id="schema_GetAccountHolderRequest"></a>
<a id="tocSgetaccountholderrequest"></a>
<a id="tocsgetaccountholderrequest"></a>

```json
{
  "accountCode": "string",
  "accountHolderCode": "string",
  "showDetails": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The code of the account of which to retrieve the details.<br>> Required if no `accountHolderCode` is provided.|
|accountHolderCode|string|false|none|The code of the account holder of which to retrieve the details.<br>> Required if no `accountCode` is provided.|
|showDetails|boolean|false|none|True if the request should return the account holder details|

<h2 id="tocS_GetAccountHolderResponse">GetAccountHolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountholderresponse"></a>
<a id="schema_GetAccountHolderResponse"></a>
<a id="tocSgetaccountholderresponse"></a>
<a id="tocsgetaccountholderresponse"></a>

```json
{
  "accountHolderCode": "string",
  "accountHolderDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "bankAccountDetails": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "bankAccountName": "string",
        "bankAccountReference": "string",
        "bankAccountUUID": "string",
        "bankBicSwift": "string",
        "bankCity": "string",
        "bankCode": "string",
        "bankName": "string",
        "branchCode": "string",
        "checkCode": "string",
        "countryCode": "string",
        "currencyCode": "string",
        "iban": "string",
        "ownerCity": "string",
        "ownerCountryCode": "string",
        "ownerDateOfBirth": "string",
        "ownerHouseNumberOrName": "string",
        "ownerName": "string",
        "ownerNationality": "string",
        "ownerPostalCode": "string",
        "ownerState": "string",
        "ownerStreet": "string",
        "primaryAccount": true,
        "taxId": "string",
        "urlForVerification": "string"
      }
    ],
    "bankAggregatorDataReference": "string",
    "businessDetails": {
      "doingBusinessAs": "string",
      "legalBusinessName": "string",
      "listedUltimateParentCompany": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "businessDetails": {
            "legalBusinessName": "string",
            "registrationNumber": "string",
            "stockExchange": "string",
            "stockNumber": "string",
            "stockTicker": "string"
          },
          "ultimateParentCompanyCode": "string"
        }
      ],
      "registrationNumber": "string",
      "shareholders": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "shareholderCode": "string",
          "shareholderReference": "string",
          "shareholderType": "Controller",
          "webAddress": "string"
        }
      ],
      "signatories": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "signatoryCode": "string",
          "signatoryReference": "string",
          "webAddress": "string"
        }
      ],
      "stockExchange": "string",
      "stockNumber": "string",
      "stockTicker": "string",
      "taxId": "string"
    },
    "email": "string",
    "fullPhoneNumber": "string",
    "individualDetails": {
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      }
    },
    "lastReviewDate": "string",
    "legalArrangements": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "legalArrangementCode": "string",
        "legalArrangementEntities": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "doingBusinessAs": "string",
              "legalBusinessName": "string",
              "listedUltimateParentCompany": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "businessDetails": {
                    "legalBusinessName": "string",
                    "registrationNumber": "string",
                    "stockExchange": "string",
                    "stockNumber": "string",
                    "stockTicker": "string"
                  },
                  "ultimateParentCompanyCode": "string"
                }
              ],
              "registrationNumber": "string",
              "shareholders": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "shareholderCode": "string",
                  "shareholderReference": "string",
                  "shareholderType": "Controller",
                  "webAddress": "string"
                }
              ],
              "signatories": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "signatoryCode": "string",
                  "signatoryReference": "string",
                  "webAddress": "string"
                }
              ],
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string",
              "taxId": "string"
            },
            "email": "string",
            "fullPhoneNumber": "string",
            "individualDetails": {
              "name": {
                "firstName": "string",
                "gender": "MALE",
                "infix": "string",
                "lastName": "string"
              },
              "personalData": {
                "dateOfBirth": "string",
                "documentData": [
                  {
                    "expirationDate": "string",
                    "issuerCountry": "st",
                    "issuerState": "string",
                    "number": "string",
                    "type": "DRIVINGLICENSE"
                  }
                ],
                "nationality": "st"
              }
            },
            "legalArrangementEntityCode": "string",
            "legalArrangementEntityReference": "string",
            "legalArrangementMembers": [
              "Beneficiary"
            ],
            "legalEntityType": "Business",
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "webAddress": "string"
          }
        ],
        "legalArrangementReference": "string",
        "legalForm": "CashManagementTrust",
        "name": "string",
        "registrationNumber": "string",
        "taxNumber": "string",
        "type": "Association"
      }
    ],
    "merchantCategoryCode": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "payoutMethods": [
      {
        "merchantAccount": "string",
        "payoutMethodCode": "string",
        "payoutMethodReference": "string",
        "recurringDetailReference": "string",
        "shopperReference": "string"
      }
    ],
    "phoneNumber": {
      "phoneCountryCode": "string",
      "phoneNumber": "string",
      "phoneType": "Fax"
    },
    "principalBusinessAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "storeDetails": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "fullPhoneNumber": "string",
        "logo": "string",
        "merchantAccount": "string",
        "merchantCategoryCode": "string",
        "merchantHouseNumber": "string",
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shopperInteraction": "Ecommerce",
        "splitConfigurationUUID": "string",
        "status": "Active",
        "store": "string",
        "storeName": "string",
        "storeReference": "string",
        "virtualAccount": "string",
        "webAddress": "string"
      }
    ],
    "webAddress": "string"
  },
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "accounts": [
    {
      "accountCode": "string",
      "bankAccountUUID": "string",
      "beneficiaryAccount": "string",
      "beneficiaryMerchantReference": "string",
      "description": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "payoutMethodCode": "string",
      "payoutSchedule": {
        "nextScheduledPayout": "1970-01-01T00:00:00Z",
        "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
      },
      "payoutSpeed": "INSTANT",
      "status": "string"
    }
  ],
  "description": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "legalEntity": "Business",
  "migrationData": {
    "accountHolderId": "string",
    "balancePlatform": "string",
    "migrated": true,
    "migratedAccounts": [
      {
        "accountCode": "string",
        "balanceAccountId": "string"
      }
    ],
    "migratedShareholders": [
      {
        "legalEntityCode": "string",
        "shareholderCode": "string"
      }
    ],
    "migratedStores": [
      {
        "businessLineId": "string",
        "storeCode": "string",
        "storeId": "string",
        "storeReference": "string"
      }
    ],
    "migrationDate": "1970-01-01T00:00:00Z"
  },
  "primaryCurrency": "string",
  "pspReference": "string",
  "resultCode": "string",
  "systemUpToDateTime": "1970-01-01T00:00:00Z",
  "verification": {
    "accountHolder": {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ]
    },
    "legalArrangements": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string"
      }
    ],
    "legalArrangementsEntities": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string"
      }
    ],
    "payoutMethods": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "payoutMethodCode": "string"
      }
    ],
    "shareholders": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string",
        "shareholderCode": "string"
      }
    ],
    "signatories": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "signatoryCode": "string"
      }
    ],
    "ultimateParentCompany": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "ultimateParentCompanyCode": "string"
      }
    ]
  },
  "verificationProfile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|false|none|The code of the account holder.|
|accountHolderDetails|[AccountHolderDetails](#schemaaccountholderdetails)|false|none|Details of the account holder.|
|accountHolderStatus|[AccountHolderStatus](#schemaaccountholderstatus)|false|none|The status of the account holder.|
|accounts|[[Account](#schemaaccount)]|false|none|A list of the accounts under the account holder.|
|description|string|false|none|The description of the account holder.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|legalEntity|string|false|none|The legal entity of the account holder.|
|migrationData|[MigrationData](#schemamigrationdata)|false|none|Details of the account holder migrated to the balance platform.|
|primaryCurrency|string|false|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|
|systemUpToDateTime|string(date-time)|false|none|The time that shows how up to date is the information in the response.|
|verification|[KYCVerificationResult](#schemakycverificationresult)|false|none|The details of KYC Verification of the account holder.|
|verificationProfile|string|false|none|The identifier of the profile that applies to this entity.|

#### Enumerated Values

|Property|Value|
|---|---|
|legalEntity|Business|
|legalEntity|Individual|
|legalEntity|NonProfit|
|legalEntity|Partnership|
|legalEntity|PublicCompany|

<h2 id="tocS_GetAccountHolderStatusResponse">GetAccountHolderStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetaccountholderstatusresponse"></a>
<a id="schema_GetAccountHolderStatusResponse"></a>
<a id="tocSgetaccountholderstatusresponse"></a>
<a id="tocsgetaccountholderstatusresponse"></a>

```json
{
  "accountHolderCode": "string",
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|false|none|The code of the Account Holder.|
|accountHolderStatus|[AccountHolderStatus](#schemaaccountholderstatus)|false|none|The status of the Account Holder.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

<h2 id="tocS_GetTaxFormRequest">GetTaxFormRequest</h2>
<!-- backwards compatibility -->
<a id="schemagettaxformrequest"></a>
<a id="schema_GetTaxFormRequest"></a>
<a id="tocSgettaxformrequest"></a>
<a id="tocsgettaxformrequest"></a>

```json
{
  "accountHolderCode": "string",
  "formType": "string",
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The account holder code you provided when you created the account holder.|
|formType|string|true|none|Type of the requested tax form. For example, 1099-K.|
|year|integer(int32)|true|none|Applicable tax year in the YYYY format.|

<h2 id="tocS_GetTaxFormResponse">GetTaxFormResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettaxformresponse"></a>
<a id="schema_GetTaxFormResponse"></a>
<a id="tocSgettaxformresponse"></a>
<a id="tocsgettaxformresponse"></a>

```json
{
  "content": "string",
  "contentType": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|The content of the tax form in the Base64 binary format.|
|contentType|string|false|none|The content type of the tax form.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

<h2 id="tocS_GetUploadedDocumentsRequest">GetUploadedDocumentsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetuploadeddocumentsrequest"></a>
<a id="schema_GetUploadedDocumentsRequest"></a>
<a id="tocSgetuploadeddocumentsrequest"></a>
<a id="tocsgetuploadeddocumentsrequest"></a>

```json
{
  "accountHolderCode": "string",
  "bankAccountUUID": "string",
  "shareholderCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the Account Holder for which to retrieve the documents.|
|bankAccountUUID|string|false|none|The code of the Bank Account for which to retrieve the documents.|
|shareholderCode|string|false|none|The code of the Shareholder for which to retrieve the documents.|

<h2 id="tocS_GetUploadedDocumentsResponse">GetUploadedDocumentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetuploadeddocumentsresponse"></a>
<a id="schema_GetUploadedDocumentsResponse"></a>
<a id="tocSgetuploadeddocumentsresponse"></a>
<a id="tocsgetuploadeddocumentsresponse"></a>

```json
{
  "documentDetails": [
    {
      "accountHolderCode": "string",
      "bankAccountUUID": "string",
      "description": "string",
      "documentType": "BANK_STATEMENT",
      "filename": "string",
      "legalArrangementCode": "string",
      "legalArrangementEntityCode": "string",
      "shareholderCode": "string",
      "signatoryCode": "string"
    }
  ],
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentDetails|[[DocumentDetail](#schemadocumentdetail)]|false|none|A list of the documents and their details.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

<h2 id="tocS_IndividualDetails">IndividualDetails</h2>
<!-- backwards compatibility -->
<a id="schemaindividualdetails"></a>
<a id="schema_IndividualDetails"></a>
<a id="tocSindividualdetails"></a>
<a id="tocsindividualdetails"></a>

```json
{
  "name": {
    "firstName": "string",
    "gender": "MALE",
    "infix": "string",
    "lastName": "string"
  },
  "personalData": {
    "dateOfBirth": "string",
    "documentData": [
      {
        "expirationDate": "string",
        "issuerCountry": "st",
        "issuerState": "string",
        "number": "string",
        "type": "DRIVINGLICENSE"
      }
    ],
    "nationality": "st"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[ViasName](#schemaviasname)|false|none|The name of the individual.<br>>Make sure your account holder registers using the name shown on their Photo ID. <br> Maximum length: 80 characters <br> Cannot contain numbers. /n Cannot be empty.|
|personalData|[ViasPersonalData](#schemaviaspersonaldata)|false|none|Personal information of the individual.|

<h2 id="tocS_KYCCheckResult">KYCCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemakyccheckresult"></a>
<a id="schema_KYCCheckResult"></a>
<a id="tocSkyccheckresult"></a>
<a id="tocskyccheckresult"></a>

```json
{
  "checks": [
    {
      "requiredFields": [
        "string"
      ],
      "status": "AWAITING_DATA",
      "summary": {
        "kycCheckCode": 0,
        "kycCheckDescription": "string"
      },
      "type": "BANK_ACCOUNT_VERIFICATION"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[KYCCheckStatusData](#schemakyccheckstatusdata)]|false|none|A list of the checks and their statuses.|

<h2 id="tocS_KYCCheckStatusData">KYCCheckStatusData</h2>
<!-- backwards compatibility -->
<a id="schemakyccheckstatusdata"></a>
<a id="schema_KYCCheckStatusData"></a>
<a id="tocSkyccheckstatusdata"></a>
<a id="tocskyccheckstatusdata"></a>

```json
{
  "requiredFields": [
    "string"
  ],
  "status": "AWAITING_DATA",
  "summary": {
    "kycCheckCode": 0,
    "kycCheckDescription": "string"
  },
  "type": "BANK_ACCOUNT_VERIFICATION"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requiredFields|[string]|false|none|A list of the fields required for execution of the check.|
|status|string|true|none|The status of the check.<br><br>Possible values: **AWAITING_DATA** , **DATA_PROVIDED**, **FAILED**, **INVALID_DATA**, **PASSED**, **PENDING**, **RETRY_LIMIT_REACHED**.|
|summary|[KYCCheckSummary](#schemakycchecksummary)|false|none|A summary of the execution of the check.|
|type|string|true|none|The type of check.<br><br>Possible values:<br><br> * **BANK_ACCOUNT_VERIFICATION**: Used in v5 and earlier. Replaced by **PAYOUT_METHOD_VERIFICATION** in v6 and later.<br><br> * **COMPANY_VERIFICATION**<br><br>  * **CARD_VERIFICATION**<br><br>* **IDENTITY_VERIFICATION**<br><br>* **LEGAL_ARRANGEMENT_VERIFICATION**<br><br>* **NONPROFIT_VERIFICATION**<br><br> * **PASSPORT_VERIFICATION**<br><br>* **PAYOUT_METHOD_VERIFICATION**: Used in v6 and later.<br><br>* **PCI_VERIFICATION**|

#### Enumerated Values

|Property|Value|
|---|---|
|status|AWAITING_DATA|
|status|DATA_PROVIDED|
|status|FAILED|
|status|INVALID_DATA|
|status|PASSED|
|status|PENDING|
|status|PENDING_REVIEW|
|status|RETRY_LIMIT_REACHED|
|status|UNCHECKED|
|type|BANK_ACCOUNT_VERIFICATION|
|type|CARD_VERIFICATION|
|type|COMPANY_VERIFICATION|
|type|IDENTITY_VERIFICATION|
|type|LEGAL_ARRANGEMENT_VERIFICATION|
|type|NONPROFIT_VERIFICATION|
|type|PASSPORT_VERIFICATION|
|type|PAYOUT_METHOD_VERIFICATION|
|type|PCI_VERIFICATION|

<h2 id="tocS_KYCCheckSummary">KYCCheckSummary</h2>
<!-- backwards compatibility -->
<a id="schemakycchecksummary"></a>
<a id="schema_KYCCheckSummary"></a>
<a id="tocSkycchecksummary"></a>
<a id="tocskycchecksummary"></a>

```json
{
  "kycCheckCode": 0,
  "kycCheckDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kycCheckCode|integer(int32)|false|none|The code of the check. For possible values, refer to [Verification codes](https://docs.adyen.com/classic-platforms/verification-process/verification-codes).|
|kycCheckDescription|string|false|none|A description of the check.|

<h2 id="tocS_KYCLegalArrangementCheckResult">KYCLegalArrangementCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemakyclegalarrangementcheckresult"></a>
<a id="schema_KYCLegalArrangementCheckResult"></a>
<a id="tocSkyclegalarrangementcheckresult"></a>
<a id="tocskyclegalarrangementcheckresult"></a>

```json
{
  "checks": [
    {
      "requiredFields": [
        "string"
      ],
      "status": "AWAITING_DATA",
      "summary": {
        "kycCheckCode": 0,
        "kycCheckDescription": "string"
      },
      "type": "BANK_ACCOUNT_VERIFICATION"
    }
  ],
  "legalArrangementCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[KYCCheckStatusData](#schemakyccheckstatusdata)]|false|none|A list of the checks and their statuses.|
|legalArrangementCode|string|false|none|The unique ID of the legal arrangement to which the check applies.|

<h2 id="tocS_KYCLegalArrangementEntityCheckResult">KYCLegalArrangementEntityCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemakyclegalarrangemententitycheckresult"></a>
<a id="schema_KYCLegalArrangementEntityCheckResult"></a>
<a id="tocSkyclegalarrangemententitycheckresult"></a>
<a id="tocskyclegalarrangemententitycheckresult"></a>

```json
{
  "checks": [
    {
      "requiredFields": [
        "string"
      ],
      "status": "AWAITING_DATA",
      "summary": {
        "kycCheckCode": 0,
        "kycCheckDescription": "string"
      },
      "type": "BANK_ACCOUNT_VERIFICATION"
    }
  ],
  "legalArrangementCode": "string",
  "legalArrangementEntityCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[KYCCheckStatusData](#schemakyccheckstatusdata)]|false|none|A list of the checks and their statuses.|
|legalArrangementCode|string|false|none|The unique ID of the legal arrangement to which the entity belongs.|
|legalArrangementEntityCode|string|false|none|The unique ID of the legal arrangement entity to which the check applies.|

<h2 id="tocS_KYCPayoutMethodCheckResult">KYCPayoutMethodCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemakycpayoutmethodcheckresult"></a>
<a id="schema_KYCPayoutMethodCheckResult"></a>
<a id="tocSkycpayoutmethodcheckresult"></a>
<a id="tocskycpayoutmethodcheckresult"></a>

```json
{
  "checks": [
    {
      "requiredFields": [
        "string"
      ],
      "status": "AWAITING_DATA",
      "summary": {
        "kycCheckCode": 0,
        "kycCheckDescription": "string"
      },
      "type": "BANK_ACCOUNT_VERIFICATION"
    }
  ],
  "payoutMethodCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[KYCCheckStatusData](#schemakyccheckstatusdata)]|false|none|A list of the checks and their statuses.|
|payoutMethodCode|string|false|none|The unique ID of the payoput method to which the check applies.|

<h2 id="tocS_KYCShareholderCheckResult">KYCShareholderCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemakycshareholdercheckresult"></a>
<a id="schema_KYCShareholderCheckResult"></a>
<a id="tocSkycshareholdercheckresult"></a>
<a id="tocskycshareholdercheckresult"></a>

```json
{
  "checks": [
    {
      "requiredFields": [
        "string"
      ],
      "status": "AWAITING_DATA",
      "summary": {
        "kycCheckCode": 0,
        "kycCheckDescription": "string"
      },
      "type": "BANK_ACCOUNT_VERIFICATION"
    }
  ],
  "legalArrangementCode": "string",
  "legalArrangementEntityCode": "string",
  "shareholderCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[KYCCheckStatusData](#schemakyccheckstatusdata)]|false|none|A list of the checks and their statuses.|
|legalArrangementCode|string|false|none|The unique ID of the legal arrangement to which the shareholder belongs, if applicable.|
|legalArrangementEntityCode|string|false|none|The unique ID of the legal arrangement entity to which the shareholder belongs, if applicable.|
|shareholderCode|string|false|none|The code of the shareholder to which the check applies.|

<h2 id="tocS_KYCSignatoryCheckResult">KYCSignatoryCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemakycsignatorycheckresult"></a>
<a id="schema_KYCSignatoryCheckResult"></a>
<a id="tocSkycsignatorycheckresult"></a>
<a id="tocskycsignatorycheckresult"></a>

```json
{
  "checks": [
    {
      "requiredFields": [
        "string"
      ],
      "status": "AWAITING_DATA",
      "summary": {
        "kycCheckCode": 0,
        "kycCheckDescription": "string"
      },
      "type": "BANK_ACCOUNT_VERIFICATION"
    }
  ],
  "signatoryCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[KYCCheckStatusData](#schemakyccheckstatusdata)]|false|none|A list of the checks and their statuses.|
|signatoryCode|string|false|none|The code of the signatory to which the check applies.|

<h2 id="tocS_KYCUltimateParentCompanyCheckResult">KYCUltimateParentCompanyCheckResult</h2>
<!-- backwards compatibility -->
<a id="schemakycultimateparentcompanycheckresult"></a>
<a id="schema_KYCUltimateParentCompanyCheckResult"></a>
<a id="tocSkycultimateparentcompanycheckresult"></a>
<a id="tocskycultimateparentcompanycheckresult"></a>

```json
{
  "checks": [
    {
      "requiredFields": [
        "string"
      ],
      "status": "AWAITING_DATA",
      "summary": {
        "kycCheckCode": 0,
        "kycCheckDescription": "string"
      },
      "type": "BANK_ACCOUNT_VERIFICATION"
    }
  ],
  "ultimateParentCompanyCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checks|[[KYCCheckStatusData](#schemakyccheckstatusdata)]|false|none|A list of the checks and their statuses.|
|ultimateParentCompanyCode|string|false|none|The code of the Ultimate Parent Company to which the check applies.|

<h2 id="tocS_KYCVerificationResult">KYCVerificationResult</h2>
<!-- backwards compatibility -->
<a id="schemakycverificationresult"></a>
<a id="schema_KYCVerificationResult"></a>
<a id="tocSkycverificationresult"></a>
<a id="tocskycverificationresult"></a>

```json
{
  "accountHolder": {
    "checks": [
      {
        "requiredFields": [
          "string"
        ],
        "status": "AWAITING_DATA",
        "summary": {
          "kycCheckCode": 0,
          "kycCheckDescription": "string"
        },
        "type": "BANK_ACCOUNT_VERIFICATION"
      }
    ]
  },
  "legalArrangements": [
    {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ],
      "legalArrangementCode": "string"
    }
  ],
  "legalArrangementsEntities": [
    {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ],
      "legalArrangementCode": "string",
      "legalArrangementEntityCode": "string"
    }
  ],
  "payoutMethods": [
    {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ],
      "payoutMethodCode": "string"
    }
  ],
  "shareholders": [
    {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ],
      "legalArrangementCode": "string",
      "legalArrangementEntityCode": "string",
      "shareholderCode": "string"
    }
  ],
  "signatories": [
    {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ],
      "signatoryCode": "string"
    }
  ],
  "ultimateParentCompany": [
    {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ],
      "ultimateParentCompanyCode": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[KYCCheckResult](#schemakyccheckresult)|false|none|The results of the checks on the account holder.|
|legalArrangements|[[KYCLegalArrangementCheckResult](#schemakyclegalarrangementcheckresult)]|false|none|The results of the checks on the legal arrangements.|
|legalArrangementsEntities|[[KYCLegalArrangementEntityCheckResult](#schemakyclegalarrangemententitycheckresult)]|false|none|The results of the checks on the legal arrangement entities.|
|payoutMethods|[[KYCPayoutMethodCheckResult](#schemakycpayoutmethodcheckresult)]|false|none|The results of the checks on the payout methods.|
|shareholders|[[KYCShareholderCheckResult](#schemakycshareholdercheckresult)]|false|none|The results of the checks on the shareholders.|
|signatories|[[KYCSignatoryCheckResult](#schemakycsignatorycheckresult)]|false|none|The results of the checks on the signatories.|
|ultimateParentCompany|[[KYCUltimateParentCompanyCheckResult](#schemakycultimateparentcompanycheckresult)]|false|none|The result of the check on the Ultimate Parent Company.|

<h2 id="tocS_LegalArrangementDetail">LegalArrangementDetail</h2>
<!-- backwards compatibility -->
<a id="schemalegalarrangementdetail"></a>
<a id="schema_LegalArrangementDetail"></a>
<a id="tocSlegalarrangementdetail"></a>
<a id="tocslegalarrangementdetail"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "legalArrangementCode": "string",
  "legalArrangementEntities": [
    {
      "address": {
        "city": "string",
        "country": "string",
        "houseNumberOrName": "string",
        "postalCode": "string",
        "stateOrProvince": "string",
        "street": "string"
      },
      "businessDetails": {
        "doingBusinessAs": "string",
        "legalBusinessName": "string",
        "listedUltimateParentCompany": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "legalBusinessName": "string",
              "registrationNumber": "string",
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string"
            },
            "ultimateParentCompanyCode": "string"
          }
        ],
        "registrationNumber": "string",
        "shareholders": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "email": "string",
            "fullPhoneNumber": "string",
            "jobTitle": "string",
            "name": {
              "firstName": "string",
              "gender": "MALE",
              "infix": "string",
              "lastName": "string"
            },
            "personalData": {
              "dateOfBirth": "string",
              "documentData": [
                {
                  "expirationDate": "string",
                  "issuerCountry": "st",
                  "issuerState": "string",
                  "number": "string",
                  "type": "DRIVINGLICENSE"
                }
              ],
              "nationality": "st"
            },
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "shareholderCode": "string",
            "shareholderReference": "string",
            "shareholderType": "Controller",
            "webAddress": "string"
          }
        ],
        "signatories": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "email": "string",
            "fullPhoneNumber": "string",
            "jobTitle": "string",
            "name": {
              "firstName": "string",
              "gender": "MALE",
              "infix": "string",
              "lastName": "string"
            },
            "personalData": {
              "dateOfBirth": "string",
              "documentData": [
                {
                  "expirationDate": "string",
                  "issuerCountry": "st",
                  "issuerState": "string",
                  "number": "string",
                  "type": "DRIVINGLICENSE"
                }
              ],
              "nationality": "st"
            },
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "signatoryCode": "string",
            "signatoryReference": "string",
            "webAddress": "string"
          }
        ],
        "stockExchange": "string",
        "stockNumber": "string",
        "stockTicker": "string",
        "taxId": "string"
      },
      "email": "string",
      "fullPhoneNumber": "string",
      "individualDetails": {
        "name": {
          "firstName": "string",
          "gender": "MALE",
          "infix": "string",
          "lastName": "string"
        },
        "personalData": {
          "dateOfBirth": "string",
          "documentData": [
            {
              "expirationDate": "string",
              "issuerCountry": "st",
              "issuerState": "string",
              "number": "string",
              "type": "DRIVINGLICENSE"
            }
          ],
          "nationality": "st"
        }
      },
      "legalArrangementEntityCode": "string",
      "legalArrangementEntityReference": "string",
      "legalArrangementMembers": [
        "Beneficiary"
      ],
      "legalEntityType": "Business",
      "phoneNumber": {
        "phoneCountryCode": "string",
        "phoneNumber": "string",
        "phoneType": "Fax"
      },
      "webAddress": "string"
    }
  ],
  "legalArrangementReference": "string",
  "legalForm": "CashManagementTrust",
  "name": "string",
  "registrationNumber": "string",
  "taxNumber": "string",
  "type": "Association"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[ViasAddress](#schemaviasaddress)|true|none|The address of the legal arrangement.|
|legalArrangementCode|string|false|none|Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement.<br>Use only when updating an account holder. If you include this field when creating an account holder, the request will fail.|
|legalArrangementEntities|[[LegalArrangementEntityDetail](#schemalegalarrangemententitydetail)]|false|none|An array containing information about other entities that are part of the legal arrangement.|
|legalArrangementReference|string|false|none|Your reference for the legal arrangement. Must be between 3 to 128 characters.|
|legalForm|string|false|none|The form of legal arrangement. Required if `type` is **Trust** or **Partnership**.<br><br>The possible values depend on the `type`.<br><br>- For `type` **Trust**:  **CashManagementTrust**, **CorporateUnitTrust**, **DeceasedEstate**, **DiscretionaryInvestmentTrust**, **DiscretionaryServicesManagementTrust**, **DiscretionaryTradingTrust**, **FirstHomeSaverAccountsTrust**, **FixedTrust**, **FixedUnitTrust**, **HybridTrust**, **ListedPublicUnitTrust**, **OtherTrust**, **PooledSuperannuationTrust**, **PublicTradingTrust**, or **UnlistedPublicUnitTrust**.<br><br>- For `type` **Partnership**: **LimitedPartnership**, **FamilyPartnership**, or **OtherPartnership**|
|name|string|true|none|The legal name of the legal arrangement. Minimum length: 3 characters.|
|registrationNumber|string|false|none|The registration number of the legal arrangement.|
|taxNumber|string|false|none|The tax identification number of the legal arrangement.|
|type|string|true|none|The [type of legal arrangement](https://docs.adyen.com/classic-platforms/verification-process/legal-arrangements#types-of-legal-arrangements).<br><br>Possible values:<br><br>- **Association** <br><br>- **Partnership** <br><br>- **SoleProprietorship** <br><br>- **Trust** <br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|legalForm|CashManagementTrust|
|legalForm|CorporateUnitTrust|
|legalForm|DeceasedEstate|
|legalForm|DiscretionaryInvestmentTrust|
|legalForm|DiscretionaryServicesManagementTrust|
|legalForm|DiscretionaryTradingTrust|
|legalForm|FirstHomeSaverAccountsTrust|
|legalForm|FixedTrust|
|legalForm|FixedUnitTrust|
|legalForm|HybridTrust|
|legalForm|ListedPublicUnitTrust|
|legalForm|OtherTrust|
|legalForm|PooledSuperannuationTrust|
|legalForm|PublicTradingTrust|
|legalForm|UnlistedPublicUnitTrust|
|legalForm|LimitedPartnership|
|legalForm|FamilyPartnership|
|legalForm|OtherPartnership|
|type|Association|
|type|Partnership|
|type|SoleProprietorship|
|type|Trust|

<h2 id="tocS_LegalArrangementEntityDetail">LegalArrangementEntityDetail</h2>
<!-- backwards compatibility -->
<a id="schemalegalarrangemententitydetail"></a>
<a id="schema_LegalArrangementEntityDetail"></a>
<a id="tocSlegalarrangemententitydetail"></a>
<a id="tocslegalarrangemententitydetail"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "businessDetails": {
    "doingBusinessAs": "string",
    "legalBusinessName": "string",
    "listedUltimateParentCompany": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "businessDetails": {
          "legalBusinessName": "string",
          "registrationNumber": "string",
          "stockExchange": "string",
          "stockNumber": "string",
          "stockTicker": "string"
        },
        "ultimateParentCompanyCode": "string"
      }
    ],
    "registrationNumber": "string",
    "shareholders": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "email": "string",
        "fullPhoneNumber": "string",
        "jobTitle": "string",
        "name": {
          "firstName": "string",
          "gender": "MALE",
          "infix": "string",
          "lastName": "string"
        },
        "personalData": {
          "dateOfBirth": "string",
          "documentData": [
            {
              "expirationDate": "string",
              "issuerCountry": "st",
              "issuerState": "string",
              "number": "string",
              "type": "DRIVINGLICENSE"
            }
          ],
          "nationality": "st"
        },
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shareholderCode": "string",
        "shareholderReference": "string",
        "shareholderType": "Controller",
        "webAddress": "string"
      }
    ],
    "signatories": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "email": "string",
        "fullPhoneNumber": "string",
        "jobTitle": "string",
        "name": {
          "firstName": "string",
          "gender": "MALE",
          "infix": "string",
          "lastName": "string"
        },
        "personalData": {
          "dateOfBirth": "string",
          "documentData": [
            {
              "expirationDate": "string",
              "issuerCountry": "st",
              "issuerState": "string",
              "number": "string",
              "type": "DRIVINGLICENSE"
            }
          ],
          "nationality": "st"
        },
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "signatoryCode": "string",
        "signatoryReference": "string",
        "webAddress": "string"
      }
    ],
    "stockExchange": "string",
    "stockNumber": "string",
    "stockTicker": "string",
    "taxId": "string"
  },
  "email": "string",
  "fullPhoneNumber": "string",
  "individualDetails": {
    "name": {
      "firstName": "string",
      "gender": "MALE",
      "infix": "string",
      "lastName": "string"
    },
    "personalData": {
      "dateOfBirth": "string",
      "documentData": [
        {
          "expirationDate": "string",
          "issuerCountry": "st",
          "issuerState": "string",
          "number": "string",
          "type": "DRIVINGLICENSE"
        }
      ],
      "nationality": "st"
    }
  },
  "legalArrangementEntityCode": "string",
  "legalArrangementEntityReference": "string",
  "legalArrangementMembers": [
    "Beneficiary"
  ],
  "legalEntityType": "Business",
  "phoneNumber": {
    "phoneCountryCode": "string",
    "phoneNumber": "string",
    "phoneType": "Fax"
  },
  "webAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[ViasAddress](#schemaviasaddress)|false|none|The address of the entity.|
|businessDetails|[BusinessDetails](#schemabusinessdetails)|false|none|Required when creating an entity with `legalEntityType` **Business**, **NonProfit**, **PublicCompany**, or **Partnership**.|
|email|string|false|none|The e-mail address of the entity.|
|fullPhoneNumber|string|false|none|The phone number of the contact provided as a single string.  It will be handled as a landline phone.<br>**Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"|
|individualDetails|[IndividualDetails](#schemaindividualdetails)|false|none|Required when creating an entity with `legalEntityType` **Individual**.|
|legalArrangementEntityCode|string|false|none|Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement entity.<br>Use only when updating an account holder. If you include this field when creating an account holder, the request will fail.|
|legalArrangementEntityReference|string|false|none|Your reference for the legal arrangement entity.|
|legalArrangementMembers|[string]|false|none|An array containing the roles of the entity in the legal arrangement.<br><br>The possible values depend on the legal arrangement `type`.<br><br>- For `type` **Association**: **ControllingPerson** and **Shareholder**.<br><br>- For `type` **Partnership**: **Partner** and **Shareholder**.<br><br>- For `type` **Trust**: **Trustee**, **Settlor**, **Protector**, **Beneficiary**,  and **Shareholder**.<br><br>|
|legalEntityType|string|false|none|The legal entity type.<br><br>Possible values: **Business**, **Individual**, **NonProfit**, **PublicCompany**, or **Partnership**. |
|phoneNumber|[ViasPhoneNumber](#schemaviasphonenumber)|false|none|The phone number of the entity.|
|webAddress|string|false|none|The URL of the website of the contact.|

#### Enumerated Values

|Property|Value|
|---|---|
|legalArrangementMembers|Beneficiary|
|legalArrangementMembers|ControllingPerson|
|legalArrangementMembers|Partner|
|legalArrangementMembers|Protector|
|legalArrangementMembers|Settlor|
|legalArrangementMembers|Shareholder|
|legalArrangementMembers|Trustee|
|legalEntityType|Business|
|legalEntityType|Individual|
|legalEntityType|NonProfit|
|legalEntityType|Partnership|
|legalEntityType|PublicCompany|

<h2 id="tocS_LegalArrangementRequest">LegalArrangementRequest</h2>
<!-- backwards compatibility -->
<a id="schemalegalarrangementrequest"></a>
<a id="schema_LegalArrangementRequest"></a>
<a id="tocSlegalarrangementrequest"></a>
<a id="tocslegalarrangementrequest"></a>

```json
{
  "legalArrangementCode": "string",
  "legalArrangementEntityCodes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legalArrangementCode|string|true|none|The code of the legal arrangement to be deleted. If you also send `legalArrangementEntityCodes`, only the entities listed will be deleted.|
|legalArrangementEntityCodes|[string]|false|none|List of legal arrangement entities to be deleted.|

<h2 id="tocS_MigratedAccounts">MigratedAccounts</h2>
<!-- backwards compatibility -->
<a id="schemamigratedaccounts"></a>
<a id="schema_MigratedAccounts"></a>
<a id="tocSmigratedaccounts"></a>
<a id="tocsmigratedaccounts"></a>

```json
{
  "accountCode": "string",
  "balanceAccountId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The unique identifier of the account of the migrated account holder in the classic integration.|
|balanceAccountId|string|false|none|The unique identifier of the account of the migrated account holder in the balance platform.|

<h2 id="tocS_MigratedShareholders">MigratedShareholders</h2>
<!-- backwards compatibility -->
<a id="schemamigratedshareholders"></a>
<a id="schema_MigratedShareholders"></a>
<a id="tocSmigratedshareholders"></a>
<a id="tocsmigratedshareholders"></a>

```json
{
  "legalEntityCode": "string",
  "shareholderCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legalEntityCode|string|false|none|The unique identifier of the legal entity of that shareholder in the balance platform.|
|shareholderCode|string|false|none|The unique identifier of the account of the migrated shareholder in the classic integration.|

<h2 id="tocS_MigratedStores">MigratedStores</h2>
<!-- backwards compatibility -->
<a id="schemamigratedstores"></a>
<a id="schema_MigratedStores"></a>
<a id="tocSmigratedstores"></a>
<a id="tocsmigratedstores"></a>

```json
{
  "businessLineId": "string",
  "storeCode": "string",
  "storeId": "string",
  "storeReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessLineId|string|false|none|The unique identifier of the business line associated with the migrated account holder in the balance platform.|
|storeCode|string|false|none|The unique identifier of the store associated with the migrated account holder in the classic integration.|
|storeId|string|false|none|The unique identifier of the store associated with the migrated account holder in the balance platform.|
|storeReference|string|false|none|Your reference for the store in the classic integration. The [Customer Area](https://ca-test.adyen.com/) uses this value for the store description.|

<h2 id="tocS_MigrationData">MigrationData</h2>
<!-- backwards compatibility -->
<a id="schemamigrationdata"></a>
<a id="schema_MigrationData"></a>
<a id="tocSmigrationdata"></a>
<a id="tocsmigrationdata"></a>

```json
{
  "accountHolderId": "string",
  "balancePlatform": "string",
  "migrated": true,
  "migratedAccounts": [
    {
      "accountCode": "string",
      "balanceAccountId": "string"
    }
  ],
  "migratedShareholders": [
    {
      "legalEntityCode": "string",
      "shareholderCode": "string"
    }
  ],
  "migratedStores": [
    {
      "businessLineId": "string",
      "storeCode": "string",
      "storeId": "string",
      "storeReference": "string"
    }
  ],
  "migrationDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderId|string|false|none|The unique identifier of the account holder in the balance platform.|
|balancePlatform|string|false|none|The unique identifier of the balance platfrom to which the account holder was migrated.|
|migrated|boolean|false|none|Set to **true** if the account holder has been migrated.|
|migratedAccounts|[[MigratedAccounts](#schemamigratedaccounts)]|false|none|Contains the mapping of virtual account codes (classic integration) to the balance account codes (balance platform) associated with the migrated account holder.|
|migratedShareholders|[[MigratedShareholders](#schemamigratedshareholders)]|false|none|Contains the mapping of shareholders associated with the migrated legal entities.|
|migratedStores|[[MigratedStores](#schemamigratedstores)]|false|none|Contains the mapping of business lines and stores associated with the migrated account holder.|
|migrationDate|string(date-time)|false|none|The date when account holder was migrated.|

<h2 id="tocS_PayoutMethod">PayoutMethod</h2>
<!-- backwards compatibility -->
<a id="schemapayoutmethod"></a>
<a id="schema_PayoutMethod"></a>
<a id="tocSpayoutmethod"></a>
<a id="tocspayoutmethod"></a>

```json
{
  "merchantAccount": "string",
  "payoutMethodCode": "string",
  "payoutMethodReference": "string",
  "recurringDetailReference": "string",
  "shopperReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantAccount|string|true|none|The [`merchantAccount`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_merchantAccount) you used in the `/payments` request when you [saved the account holder's card details](https://docs.adyen.com/classic-platforms/payouts/manual-payout/payout-to-cards#check-and-store).|
|payoutMethodCode|string|false|none|Adyen-generated unique alphanumeric identifier (UUID) for the payout method, returned in the response when you create a payout method. Required when updating an existing payout method in an `/updateAccountHolder` request.|
|payoutMethodReference|string|false|none|Your reference for the payout method.|
|recurringDetailReference|string|true|none|The [`recurringDetailReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_additionalData-ResponseAdditionalDataCommon-recurring-recurringDetailReference)  returned in the `/payments` response when you [saved the account holder's card details](https://docs.adyen.com/classic-platforms/payouts/manual-payout/payout-to-cards#check-and-store).|
|shopperReference|string|true|none|The [`shopperReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_shopperReference) you sent in the `/payments` request when you [saved the account holder's card details](https://docs.adyen.com/classic-platforms/payouts/manual-payout/payout-to-cards#check-and-store).|

<h2 id="tocS_PayoutScheduleResponse">PayoutScheduleResponse</h2>
<!-- backwards compatibility -->
<a id="schemapayoutscheduleresponse"></a>
<a id="schema_PayoutScheduleResponse"></a>
<a id="tocSpayoutscheduleresponse"></a>
<a id="tocspayoutscheduleresponse"></a>

```json
{
  "nextScheduledPayout": "1970-01-01T00:00:00Z",
  "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextScheduledPayout|string(date-time)|false|none|The date of the next scheduled payout.|
|schedule|string|false|none|The payout schedule for the account.<br><br>Possible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`.<br>> `HOLD` prevents scheduled payouts, but you can still initiate payouts manually.|

#### Enumerated Values

|Property|Value|
|---|---|
|schedule|BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT|
|schedule|DAILY|
|schedule|DAILY_AU|
|schedule|DAILY_EU|
|schedule|DAILY_SG|
|schedule|DAILY_US|
|schedule|HOLD|
|schedule|MONTHLY|
|schedule|WEEKLY|
|schedule|WEEKLY_MON_TO_FRI_AU|
|schedule|WEEKLY_MON_TO_FRI_EU|
|schedule|WEEKLY_MON_TO_FRI_US|
|schedule|WEEKLY_ON_TUE_FRI_MIDNIGHT|
|schedule|WEEKLY_SUN_TO_THU_AU|
|schedule|WEEKLY_SUN_TO_THU_US|

<h2 id="tocS_PerformVerificationRequest">PerformVerificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaperformverificationrequest"></a>
<a id="schema_PerformVerificationRequest"></a>
<a id="tocSperformverificationrequest"></a>
<a id="tocsperformverificationrequest"></a>

```json
{
  "accountHolderCode": "string",
  "accountStateType": "LimitedPayout",
  "tier": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the account holder to verify.|
|accountStateType|string|true|none|The state required for the account holder.<br>> Permitted values: `Processing`, `Payout`.|
|tier|integer(int32)|true|none|The tier required for the account holder.|

#### Enumerated Values

|Property|Value|
|---|---|
|accountStateType|LimitedPayout|
|accountStateType|LimitedProcessing|
|accountStateType|LimitlessPayout|
|accountStateType|LimitlessProcessing|
|accountStateType|Payout|
|accountStateType|Processing|

<h2 id="tocS_PersonalDocumentData">PersonalDocumentData</h2>
<!-- backwards compatibility -->
<a id="schemapersonaldocumentdata"></a>
<a id="schema_PersonalDocumentData"></a>
<a id="tocSpersonaldocumentdata"></a>
<a id="tocspersonaldocumentdata"></a>

```json
{
  "expirationDate": "string",
  "issuerCountry": "st",
  "issuerState": "string",
  "number": "string",
  "type": "DRIVINGLICENSE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expirationDate|string|false|none|The expiry date of the document, <br> in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.|
|issuerCountry|string|false|none|The country where the document was issued, in the two-character <br>[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.|
|issuerState|string|false|none|The state where the document was issued (if applicable).|
|number|string|false|none|The number in the document.|
|type|string|true|none|The type of the document. Possible values: **ID**, **DRIVINGLICENSE**, **PASSPORT**, **SOCIALSECURITY**, **VISA**.<br><br>To delete an existing entry for a document `type`, send only the `type` field in your request. |

#### Enumerated Values

|Property|Value|
|---|---|
|type|DRIVINGLICENSE|
|type|ID|
|type|PASSPORT|
|type|SOCIALSECURITY|
|type|VISA|

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

<h2 id="tocS_ShareholderContact">ShareholderContact</h2>
<!-- backwards compatibility -->
<a id="schemashareholdercontact"></a>
<a id="schema_ShareholderContact"></a>
<a id="tocSshareholdercontact"></a>
<a id="tocsshareholdercontact"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "email": "string",
  "fullPhoneNumber": "string",
  "jobTitle": "string",
  "name": {
    "firstName": "string",
    "gender": "MALE",
    "infix": "string",
    "lastName": "string"
  },
  "personalData": {
    "dateOfBirth": "string",
    "documentData": [
      {
        "expirationDate": "string",
        "issuerCountry": "st",
        "issuerState": "string",
        "number": "string",
        "type": "DRIVINGLICENSE"
      }
    ],
    "nationality": "st"
  },
  "phoneNumber": {
    "phoneCountryCode": "string",
    "phoneNumber": "string",
    "phoneType": "Fax"
  },
  "shareholderCode": "string",
  "shareholderReference": "string",
  "shareholderType": "Controller",
  "webAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[ViasAddress](#schemaviasaddress)|false|none|The address of the person.|
|email|string|false|none|The e-mail address of the person.|
|fullPhoneNumber|string|false|none|The phone number of the person provided as a single string.  It will be handled as a landline phone.<br>Examples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"|
|jobTitle|string|false|none|Job title of the person. Required when the `shareholderType` is **Controller**.<br><br>Example values: **Chief Executive Officer**, **Chief Financial Officer**, **Chief Operating Officer**, **President**, **Vice President**, **Executive President**, **Managing Member**, **Partner**, **Treasurer**, **Director**, or **Other**.|
|name|[ViasName](#schemaviasname)|false|none|The name of the person.|
|personalData|[ViasPersonalData](#schemaviaspersonaldata)|false|none|Contains information about the person.|
|phoneNumber|[ViasPhoneNumber](#schemaviasphonenumber)|false|none|The phone number of the person.|
|shareholderCode|string|false|none|The unique identifier (UUID) of the shareholder entry.<br>>**If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Shareholder will be created with a procedurally-generated UUID.**<br><br>>**If, during an Account Holder create request, a UUID is provided, the creation of Account Holder will fail with a validation Error..**<br><br>>**If, during an Account Holder update request, a UUID that is not correlated with an existing Shareholder is provided, the update of the Shareholder will fail.**<br><br>>**If, during an Account Holder update request, a UUID that is correlated with an existing Shareholder is provided, the existing Shareholder will be updated.**<br>|
|shareholderReference|string|false|none|Your reference for the shareholder entry.|
|shareholderType|string|false|none|Specifies how the person is associated with the account holder. <br><br>Possible values: <br><br>* **Owner**: Individuals who directly or indirectly own 25% or more of a company.<br><br>* **Controller**: Individuals who are members of senior management staff responsible for managing a company or organization.|
|webAddress|string|false|none|The URL of the person's website.|

#### Enumerated Values

|Property|Value|
|---|---|
|shareholderType|Controller|
|shareholderType|Owner|
|shareholderType|Signatory|

<h2 id="tocS_SignatoryContact">SignatoryContact</h2>
<!-- backwards compatibility -->
<a id="schemasignatorycontact"></a>
<a id="schema_SignatoryContact"></a>
<a id="tocSsignatorycontact"></a>
<a id="tocssignatorycontact"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "email": "string",
  "fullPhoneNumber": "string",
  "jobTitle": "string",
  "name": {
    "firstName": "string",
    "gender": "MALE",
    "infix": "string",
    "lastName": "string"
  },
  "personalData": {
    "dateOfBirth": "string",
    "documentData": [
      {
        "expirationDate": "string",
        "issuerCountry": "st",
        "issuerState": "string",
        "number": "string",
        "type": "DRIVINGLICENSE"
      }
    ],
    "nationality": "st"
  },
  "phoneNumber": {
    "phoneCountryCode": "string",
    "phoneNumber": "string",
    "phoneType": "Fax"
  },
  "signatoryCode": "string",
  "signatoryReference": "string",
  "webAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[ViasAddress](#schemaviasaddress)|false|none|The address of the person.|
|email|string|false|none|The e-mail address of the person.|
|fullPhoneNumber|string|false|none|The phone number of the person provided as a single string.  It will be handled as a landline phone.<br>Examples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"|
|jobTitle|string|false|none|Job title of the signatory.<br><br>Example values: **Chief Executive Officer**, **Chief Financial Officer**, **Chief Operating Officer**, **President**, **Vice President**, **Executive President**, **Managing Member**, **Partner**, **Treasurer**, **Director**, or **Other**.|
|name|[ViasName](#schemaviasname)|false|none|The name of the person.|
|personalData|[ViasPersonalData](#schemaviaspersonaldata)|false|none|Contains information about the person.|
|phoneNumber|[ViasPhoneNumber](#schemaviasphonenumber)|false|none|The phone number of the person.|
|signatoryCode|string|false|none|The unique identifier (UUID) of the signatory.<br>>**If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Signatory will be created with a procedurally-generated UUID.**<br><br>>**If, during an Account Holder create request, a UUID is provided, the creation of the Signatory will fail while the creation of the Account Holder will continue.**<br><br>>**If, during an Account Holder update request, a UUID that is not correlated with an existing Signatory is provided, the update of the Signatory will fail.**<br><br>>**If, during an Account Holder update request, a UUID that is correlated with an existing Signatory is provided, the existing Signatory will be updated.**<br>|
|signatoryReference|string|false|none|Your reference for the signatory.|
|webAddress|string|false|none|The URL of the person's website.|

<h2 id="tocS_StoreDetail">StoreDetail</h2>
<!-- backwards compatibility -->
<a id="schemastoredetail"></a>
<a id="schema_StoreDetail"></a>
<a id="tocSstoredetail"></a>
<a id="tocsstoredetail"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "fullPhoneNumber": "string",
  "logo": "string",
  "merchantAccount": "string",
  "merchantCategoryCode": "string",
  "merchantHouseNumber": "string",
  "phoneNumber": {
    "phoneCountryCode": "string",
    "phoneNumber": "string",
    "phoneType": "Fax"
  },
  "shopperInteraction": "Ecommerce",
  "splitConfigurationUUID": "string",
  "status": "Active",
  "store": "string",
  "storeName": "string",
  "storeReference": "string",
  "virtualAccount": "string",
  "webAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[ViasAddress](#schemaviasaddress)|true|none|The address of the physical store where the account holder will process payments from.|
|fullPhoneNumber|string|false|none|The phone number of the store provided as a single string.  It will be handled as a landline phone.<br><br>Examples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"|
|logo|string|false|none|Store logo for payment method setup.|
|merchantAccount|string|true|none|The merchant account to which the store belongs.|
|merchantCategoryCode|string|true|none|The merchant category code (MCC) that classifies the business of the account holder.|
|merchantHouseNumber|string|false|none|Merchant house number for payment method setup.|
|phoneNumber|[ViasPhoneNumber](#schemaviasphonenumber)|false|none|The phone number of the store.|
|shopperInteraction|string|false|none|The sales channel. Possible values: **Ecommerce**, **POS**.|
|splitConfigurationUUID|string|false|none|The unique reference for the split configuration, returned when you configure splits in your Customer Area. When this is provided, the `virtualAccount` is also required. Adyen uses the configuration and the `virtualAccount` to split funds between accounts in your platform.|
|status|string|false|none|The status of the store. Possible values: **Pending**, **Active**, **Inactive**, **InactiveWithModifications**, **Closed**.|
|store|string|false|none|Adyen-generated unique alphanumeric identifier (UUID) for the store, returned in the response when you create a store. Required when updating an existing store in an `/updateAccountHolder` request.|
|storeName|string|false|none|The name of the account holder's store. This value is shown in shopper statements.<br><br> * Length: Between 3 to 22 characters <br><br> * The following characters are *not* supported: **:;}{$#@!\|<>%^*+=\\**<br><br>**Note:** storeName does not appear in American Express shopper statements by default. Contact Adyen Support to enable this for American Express.|
|storeReference|string|false|none|Your unique identifier for the store. The Customer Area also uses this value for the store description.<br><br> * Length: Between 3 to 128 characters<br><br>* The following characters are *not* supported: **:;}{$#@!\|<>%^*+=\\**|
|virtualAccount|string|false|none|The account holder's `accountCode` where the split amount will be sent. Required when you provide the `splitConfigurationUUID`.|
|webAddress|string|false|none|URL of the ecommerce store.|

#### Enumerated Values

|Property|Value|
|---|---|
|shopperInteraction|Ecommerce|
|shopperInteraction|POS|
|status|Active|
|status|Closed|
|status|Inactive|
|status|InactiveWithModifications|
|status|Pending|

<h2 id="tocS_SuspendAccountHolderRequest">SuspendAccountHolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemasuspendaccountholderrequest"></a>
<a id="schema_SuspendAccountHolderRequest"></a>
<a id="tocSsuspendaccountholderrequest"></a>
<a id="tocssuspendaccountholderrequest"></a>

```json
{
  "accountHolderCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the account holder to be suspended.|

<h2 id="tocS_SuspendAccountHolderResponse">SuspendAccountHolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemasuspendaccountholderresponse"></a>
<a id="schema_SuspendAccountHolderResponse"></a>
<a id="tocSsuspendaccountholderresponse"></a>
<a id="tocssuspendaccountholderresponse"></a>

```json
{
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderStatus|[AccountHolderStatus](#schemaaccountholderstatus)|false|none|The new status of the Account Holder.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

<h2 id="tocS_UltimateParentCompany">UltimateParentCompany</h2>
<!-- backwards compatibility -->
<a id="schemaultimateparentcompany"></a>
<a id="schema_UltimateParentCompany"></a>
<a id="tocSultimateparentcompany"></a>
<a id="tocsultimateparentcompany"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "houseNumberOrName": "string",
    "postalCode": "string",
    "stateOrProvince": "string",
    "street": "string"
  },
  "businessDetails": {
    "legalBusinessName": "string",
    "registrationNumber": "string",
    "stockExchange": "string",
    "stockNumber": "string",
    "stockTicker": "string"
  },
  "ultimateParentCompanyCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[ViasAddress](#schemaviasaddress)|false|none|Address of the ultimate parent company.|
|businessDetails|[UltimateParentCompanyBusinessDetails](#schemaultimateparentcompanybusinessdetails)|false|none|Details about the ultimate parent company's business.|
|ultimateParentCompanyCode|string|false|none|Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create an ultimate parent company. Required when updating an existing entry in an `/updateAccountHolder` request.|

<h2 id="tocS_UltimateParentCompanyBusinessDetails">UltimateParentCompanyBusinessDetails</h2>
<!-- backwards compatibility -->
<a id="schemaultimateparentcompanybusinessdetails"></a>
<a id="schema_UltimateParentCompanyBusinessDetails"></a>
<a id="tocSultimateparentcompanybusinessdetails"></a>
<a id="tocsultimateparentcompanybusinessdetails"></a>

```json
{
  "legalBusinessName": "string",
  "registrationNumber": "string",
  "stockExchange": "string",
  "stockNumber": "string",
  "stockTicker": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legalBusinessName|string|false|none|The legal name of the company.|
|registrationNumber|string|false|none|The registration number of the company.|
|stockExchange|string|false|none|Market Identifier Code (MIC).|
|stockNumber|string|false|none|International Securities Identification Number (ISIN).|
|stockTicker|string|false|none|Stock Ticker symbol.|

<h2 id="tocS_UnSuspendAccountHolderRequest">UnSuspendAccountHolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaunsuspendaccountholderrequest"></a>
<a id="schema_UnSuspendAccountHolderRequest"></a>
<a id="tocSunsuspendaccountholderrequest"></a>
<a id="tocsunsuspendaccountholderrequest"></a>

```json
{
  "accountHolderCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the account holder to be reinstated.|

<h2 id="tocS_UnSuspendAccountHolderResponse">UnSuspendAccountHolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaunsuspendaccountholderresponse"></a>
<a id="schema_UnSuspendAccountHolderResponse"></a>
<a id="tocSunsuspendaccountholderresponse"></a>
<a id="tocsunsuspendaccountholderresponse"></a>

```json
{
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderStatus|[AccountHolderStatus](#schemaaccountholderstatus)|false|none|The new status of the Account Holder.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

<h2 id="tocS_UpdateAccountHolderRequest">UpdateAccountHolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountholderrequest"></a>
<a id="schema_UpdateAccountHolderRequest"></a>
<a id="tocSupdateaccountholderrequest"></a>
<a id="tocsupdateaccountholderrequest"></a>

```json
{
  "accountHolderCode": "string",
  "accountHolderDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "bankAccountDetails": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "bankAccountName": "string",
        "bankAccountReference": "string",
        "bankAccountUUID": "string",
        "bankBicSwift": "string",
        "bankCity": "string",
        "bankCode": "string",
        "bankName": "string",
        "branchCode": "string",
        "checkCode": "string",
        "countryCode": "string",
        "currencyCode": "string",
        "iban": "string",
        "ownerCity": "string",
        "ownerCountryCode": "string",
        "ownerDateOfBirth": "string",
        "ownerHouseNumberOrName": "string",
        "ownerName": "string",
        "ownerNationality": "string",
        "ownerPostalCode": "string",
        "ownerState": "string",
        "ownerStreet": "string",
        "primaryAccount": true,
        "taxId": "string",
        "urlForVerification": "string"
      }
    ],
    "bankAggregatorDataReference": "string",
    "businessDetails": {
      "doingBusinessAs": "string",
      "legalBusinessName": "string",
      "listedUltimateParentCompany": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "businessDetails": {
            "legalBusinessName": "string",
            "registrationNumber": "string",
            "stockExchange": "string",
            "stockNumber": "string",
            "stockTicker": "string"
          },
          "ultimateParentCompanyCode": "string"
        }
      ],
      "registrationNumber": "string",
      "shareholders": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "shareholderCode": "string",
          "shareholderReference": "string",
          "shareholderType": "Controller",
          "webAddress": "string"
        }
      ],
      "signatories": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "signatoryCode": "string",
          "signatoryReference": "string",
          "webAddress": "string"
        }
      ],
      "stockExchange": "string",
      "stockNumber": "string",
      "stockTicker": "string",
      "taxId": "string"
    },
    "email": "string",
    "fullPhoneNumber": "string",
    "individualDetails": {
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      }
    },
    "lastReviewDate": "string",
    "legalArrangements": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "legalArrangementCode": "string",
        "legalArrangementEntities": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "doingBusinessAs": "string",
              "legalBusinessName": "string",
              "listedUltimateParentCompany": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "businessDetails": {
                    "legalBusinessName": "string",
                    "registrationNumber": "string",
                    "stockExchange": "string",
                    "stockNumber": "string",
                    "stockTicker": "string"
                  },
                  "ultimateParentCompanyCode": "string"
                }
              ],
              "registrationNumber": "string",
              "shareholders": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "shareholderCode": "string",
                  "shareholderReference": "string",
                  "shareholderType": "Controller",
                  "webAddress": "string"
                }
              ],
              "signatories": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "signatoryCode": "string",
                  "signatoryReference": "string",
                  "webAddress": "string"
                }
              ],
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string",
              "taxId": "string"
            },
            "email": "string",
            "fullPhoneNumber": "string",
            "individualDetails": {
              "name": {
                "firstName": "string",
                "gender": "MALE",
                "infix": "string",
                "lastName": "string"
              },
              "personalData": {
                "dateOfBirth": "string",
                "documentData": [
                  {
                    "expirationDate": "string",
                    "issuerCountry": "st",
                    "issuerState": "string",
                    "number": "string",
                    "type": "DRIVINGLICENSE"
                  }
                ],
                "nationality": "st"
              }
            },
            "legalArrangementEntityCode": "string",
            "legalArrangementEntityReference": "string",
            "legalArrangementMembers": [
              "Beneficiary"
            ],
            "legalEntityType": "Business",
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "webAddress": "string"
          }
        ],
        "legalArrangementReference": "string",
        "legalForm": "CashManagementTrust",
        "name": "string",
        "registrationNumber": "string",
        "taxNumber": "string",
        "type": "Association"
      }
    ],
    "merchantCategoryCode": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "payoutMethods": [
      {
        "merchantAccount": "string",
        "payoutMethodCode": "string",
        "payoutMethodReference": "string",
        "recurringDetailReference": "string",
        "shopperReference": "string"
      }
    ],
    "phoneNumber": {
      "phoneCountryCode": "string",
      "phoneNumber": "string",
      "phoneType": "Fax"
    },
    "principalBusinessAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "storeDetails": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "fullPhoneNumber": "string",
        "logo": "string",
        "merchantAccount": "string",
        "merchantCategoryCode": "string",
        "merchantHouseNumber": "string",
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shopperInteraction": "Ecommerce",
        "splitConfigurationUUID": "string",
        "status": "Active",
        "store": "string",
        "storeName": "string",
        "storeReference": "string",
        "virtualAccount": "string",
        "webAddress": "string"
      }
    ],
    "webAddress": "string"
  },
  "description": "string",
  "legalEntity": "Business",
  "primaryCurrency": "string",
  "processingTier": 0,
  "verificationProfile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the Account Holder to be updated.|
|accountHolderDetails|[AccountHolderDetails](#schemaaccountholderdetails)|false|none|The details to which the Account Holder should be updated.<br><br>Required if a processingTier is not provided.|
|description|string|false|none|A description of the account holder, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.|
|legalEntity|string|false|none|The legal entity type of the account holder. This determines the information that should be provided in the request.<br><br>Possible values: **Business**, **Individual**, or **NonProfit**.<br><br>* If set to **Business** or **NonProfit**, then `accountHolderDetails.businessDetails` must be provided, with at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.<br><br>* If set to **Individual**, then `accountHolderDetails.individualDetails` must be provided.|
|primaryCurrency|string|false|none|**Deprecated.** The primary three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), to which the account holder should be updated.|
|processingTier|integer(int32)|false|none|The processing tier to which the Account Holder should be updated.<br>>The processing tier can not be lowered through this request.<br><br>>Required if accountHolderDetails are not provided.|
|verificationProfile|string|false|none|The identifier of the profile that applies to this entity.|

#### Enumerated Values

|Property|Value|
|---|---|
|legalEntity|Business|
|legalEntity|Individual|
|legalEntity|NonProfit|
|legalEntity|Partnership|
|legalEntity|PublicCompany|

<h2 id="tocS_UpdateAccountHolderResponse">UpdateAccountHolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountholderresponse"></a>
<a id="schema_UpdateAccountHolderResponse"></a>
<a id="tocSupdateaccountholderresponse"></a>
<a id="tocsupdateaccountholderresponse"></a>

```json
{
  "accountHolderCode": "string",
  "accountHolderDetails": {
    "address": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "bankAccountDetails": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "bankAccountName": "string",
        "bankAccountReference": "string",
        "bankAccountUUID": "string",
        "bankBicSwift": "string",
        "bankCity": "string",
        "bankCode": "string",
        "bankName": "string",
        "branchCode": "string",
        "checkCode": "string",
        "countryCode": "string",
        "currencyCode": "string",
        "iban": "string",
        "ownerCity": "string",
        "ownerCountryCode": "string",
        "ownerDateOfBirth": "string",
        "ownerHouseNumberOrName": "string",
        "ownerName": "string",
        "ownerNationality": "string",
        "ownerPostalCode": "string",
        "ownerState": "string",
        "ownerStreet": "string",
        "primaryAccount": true,
        "taxId": "string",
        "urlForVerification": "string"
      }
    ],
    "bankAggregatorDataReference": "string",
    "businessDetails": {
      "doingBusinessAs": "string",
      "legalBusinessName": "string",
      "listedUltimateParentCompany": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "businessDetails": {
            "legalBusinessName": "string",
            "registrationNumber": "string",
            "stockExchange": "string",
            "stockNumber": "string",
            "stockTicker": "string"
          },
          "ultimateParentCompanyCode": "string"
        }
      ],
      "registrationNumber": "string",
      "shareholders": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "shareholderCode": "string",
          "shareholderReference": "string",
          "shareholderType": "Controller",
          "webAddress": "string"
        }
      ],
      "signatories": [
        {
          "address": {
            "city": "string",
            "country": "string",
            "houseNumberOrName": "string",
            "postalCode": "string",
            "stateOrProvince": "string",
            "street": "string"
          },
          "email": "string",
          "fullPhoneNumber": "string",
          "jobTitle": "string",
          "name": {
            "firstName": "string",
            "gender": "MALE",
            "infix": "string",
            "lastName": "string"
          },
          "personalData": {
            "dateOfBirth": "string",
            "documentData": [
              {
                "expirationDate": "string",
                "issuerCountry": "st",
                "issuerState": "string",
                "number": "string",
                "type": "DRIVINGLICENSE"
              }
            ],
            "nationality": "st"
          },
          "phoneNumber": {
            "phoneCountryCode": "string",
            "phoneNumber": "string",
            "phoneType": "Fax"
          },
          "signatoryCode": "string",
          "signatoryReference": "string",
          "webAddress": "string"
        }
      ],
      "stockExchange": "string",
      "stockNumber": "string",
      "stockTicker": "string",
      "taxId": "string"
    },
    "email": "string",
    "fullPhoneNumber": "string",
    "individualDetails": {
      "name": {
        "firstName": "string",
        "gender": "MALE",
        "infix": "string",
        "lastName": "string"
      },
      "personalData": {
        "dateOfBirth": "string",
        "documentData": [
          {
            "expirationDate": "string",
            "issuerCountry": "st",
            "issuerState": "string",
            "number": "string",
            "type": "DRIVINGLICENSE"
          }
        ],
        "nationality": "st"
      }
    },
    "lastReviewDate": "string",
    "legalArrangements": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "legalArrangementCode": "string",
        "legalArrangementEntities": [
          {
            "address": {
              "city": "string",
              "country": "string",
              "houseNumberOrName": "string",
              "postalCode": "string",
              "stateOrProvince": "string",
              "street": "string"
            },
            "businessDetails": {
              "doingBusinessAs": "string",
              "legalBusinessName": "string",
              "listedUltimateParentCompany": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "businessDetails": {
                    "legalBusinessName": "string",
                    "registrationNumber": "string",
                    "stockExchange": "string",
                    "stockNumber": "string",
                    "stockTicker": "string"
                  },
                  "ultimateParentCompanyCode": "string"
                }
              ],
              "registrationNumber": "string",
              "shareholders": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "shareholderCode": "string",
                  "shareholderReference": "string",
                  "shareholderType": "Controller",
                  "webAddress": "string"
                }
              ],
              "signatories": [
                {
                  "address": {
                    "city": "string",
                    "country": "string",
                    "houseNumberOrName": "string",
                    "postalCode": "string",
                    "stateOrProvince": "string",
                    "street": "string"
                  },
                  "email": "string",
                  "fullPhoneNumber": "string",
                  "jobTitle": "string",
                  "name": {
                    "firstName": "string",
                    "gender": "MALE",
                    "infix": "string",
                    "lastName": "string"
                  },
                  "personalData": {
                    "dateOfBirth": "string",
                    "documentData": [
                      {
                        "expirationDate": "string",
                        "issuerCountry": "st",
                        "issuerState": "string",
                        "number": "string",
                        "type": "DRIVINGLICENSE"
                      }
                    ],
                    "nationality": "st"
                  },
                  "phoneNumber": {
                    "phoneCountryCode": "string",
                    "phoneNumber": "string",
                    "phoneType": "Fax"
                  },
                  "signatoryCode": "string",
                  "signatoryReference": "string",
                  "webAddress": "string"
                }
              ],
              "stockExchange": "string",
              "stockNumber": "string",
              "stockTicker": "string",
              "taxId": "string"
            },
            "email": "string",
            "fullPhoneNumber": "string",
            "individualDetails": {
              "name": {
                "firstName": "string",
                "gender": "MALE",
                "infix": "string",
                "lastName": "string"
              },
              "personalData": {
                "dateOfBirth": "string",
                "documentData": [
                  {
                    "expirationDate": "string",
                    "issuerCountry": "st",
                    "issuerState": "string",
                    "number": "string",
                    "type": "DRIVINGLICENSE"
                  }
                ],
                "nationality": "st"
              }
            },
            "legalArrangementEntityCode": "string",
            "legalArrangementEntityReference": "string",
            "legalArrangementMembers": [
              "Beneficiary"
            ],
            "legalEntityType": "Business",
            "phoneNumber": {
              "phoneCountryCode": "string",
              "phoneNumber": "string",
              "phoneType": "Fax"
            },
            "webAddress": "string"
          }
        ],
        "legalArrangementReference": "string",
        "legalForm": "CashManagementTrust",
        "name": "string",
        "registrationNumber": "string",
        "taxNumber": "string",
        "type": "Association"
      }
    ],
    "merchantCategoryCode": "string",
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "payoutMethods": [
      {
        "merchantAccount": "string",
        "payoutMethodCode": "string",
        "payoutMethodReference": "string",
        "recurringDetailReference": "string",
        "shopperReference": "string"
      }
    ],
    "phoneNumber": {
      "phoneCountryCode": "string",
      "phoneNumber": "string",
      "phoneType": "Fax"
    },
    "principalBusinessAddress": {
      "city": "string",
      "country": "string",
      "houseNumberOrName": "string",
      "postalCode": "string",
      "stateOrProvince": "string",
      "street": "string"
    },
    "storeDetails": [
      {
        "address": {
          "city": "string",
          "country": "string",
          "houseNumberOrName": "string",
          "postalCode": "string",
          "stateOrProvince": "string",
          "street": "string"
        },
        "fullPhoneNumber": "string",
        "logo": "string",
        "merchantAccount": "string",
        "merchantCategoryCode": "string",
        "merchantHouseNumber": "string",
        "phoneNumber": {
          "phoneCountryCode": "string",
          "phoneNumber": "string",
          "phoneType": "Fax"
        },
        "shopperInteraction": "Ecommerce",
        "splitConfigurationUUID": "string",
        "status": "Active",
        "store": "string",
        "storeName": "string",
        "storeReference": "string",
        "virtualAccount": "string",
        "webAddress": "string"
      }
    ],
    "webAddress": "string"
  },
  "accountHolderStatus": {
    "events": [
      {
        "event": "InactivateAccount",
        "executionDate": "1970-01-01T00:00:00Z",
        "reason": "string"
      }
    ],
    "payoutState": {
      "allowPayout": true,
      "disableReason": "string",
      "disabled": true,
      "notAllowedReason": "string",
      "payoutLimit": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "processingState": {
      "disableReason": "string",
      "disabled": true,
      "processedFrom": {
        "currency": "str",
        "value": 0
      },
      "processedTo": {
        "currency": "str",
        "value": 0
      },
      "tierNumber": 0
    },
    "status": "Active",
    "statusReason": "string"
  },
  "description": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "legalEntity": "Business",
  "primaryCurrency": "string",
  "pspReference": "string",
  "resultCode": "string",
  "verification": {
    "accountHolder": {
      "checks": [
        {
          "requiredFields": [
            "string"
          ],
          "status": "AWAITING_DATA",
          "summary": {
            "kycCheckCode": 0,
            "kycCheckDescription": "string"
          },
          "type": "BANK_ACCOUNT_VERIFICATION"
        }
      ]
    },
    "legalArrangements": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string"
      }
    ],
    "legalArrangementsEntities": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string"
      }
    ],
    "payoutMethods": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "payoutMethodCode": "string"
      }
    ],
    "shareholders": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "legalArrangementCode": "string",
        "legalArrangementEntityCode": "string",
        "shareholderCode": "string"
      }
    ],
    "signatories": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "signatoryCode": "string"
      }
    ],
    "ultimateParentCompany": [
      {
        "checks": [
          {
            "requiredFields": [
              "string"
            ],
            "status": "AWAITING_DATA",
            "summary": {
              "kycCheckCode": 0,
              "kycCheckDescription": "string"
            },
            "type": "BANK_ACCOUNT_VERIFICATION"
          }
        ],
        "ultimateParentCompanyCode": "string"
      }
    ]
  },
  "verificationProfile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|false|none|The code of the account holder.|
|accountHolderDetails|[AccountHolderDetails](#schemaaccountholderdetails)|false|none|Details of the account holder.|
|accountHolderStatus|[AccountHolderStatus](#schemaaccountholderstatus)|false|none|The new status of the account holder.|
|description|string|false|none|The description of the account holder.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|in case the account holder has not been updated, contains account holder fields, that did not pass the validation.|
|legalEntity|string|false|none|The legal entity of the account holder.|
|primaryCurrency|string|false|none|**Deprecated.** The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|
|verification|[KYCVerificationResult](#schemakycverificationresult)|false|none|The details of KYC Verification of the account holder.|
|verificationProfile|string|false|none|The identifier of the profile that applies to this entity.|

#### Enumerated Values

|Property|Value|
|---|---|
|legalEntity|Business|
|legalEntity|Individual|
|legalEntity|NonProfit|
|legalEntity|Partnership|
|legalEntity|PublicCompany|

<h2 id="tocS_UpdateAccountHolderStateRequest">UpdateAccountHolderStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountholderstaterequest"></a>
<a id="schema_UpdateAccountHolderStateRequest"></a>
<a id="tocSupdateaccountholderstaterequest"></a>
<a id="tocsupdateaccountholderstaterequest"></a>

```json
{
  "accountHolderCode": "string",
  "disable": true,
  "reason": "string",
  "stateType": "LimitedPayout"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the Account Holder on which to update the state.|
|disable|boolean|true|none|If true, disable the requested state.  If false, enable the requested state.|
|reason|string|false|none|The reason that the state is being updated.<br>>Required if the state is being disabled.|
|stateType|string|true|none|The state to be updated.<br>>Permitted values are: `Processing`, `Payout`|

#### Enumerated Values

|Property|Value|
|---|---|
|stateType|LimitedPayout|
|stateType|LimitedProcessing|
|stateType|LimitlessPayout|
|stateType|LimitlessProcessing|
|stateType|Payout|
|stateType|Processing|

<h2 id="tocS_UpdateAccountRequest">UpdateAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountrequest"></a>
<a id="schema_UpdateAccountRequest"></a>
<a id="tocSupdateaccountrequest"></a>
<a id="tocsupdateaccountrequest"></a>

```json
{
  "accountCode": "string",
  "bankAccountUUID": "string",
  "description": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "payoutMethodCode": "string",
  "payoutSchedule": {
    "action": "CLOSE",
    "reason": "string",
    "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
  },
  "payoutSpeed": "INSTANT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|true|none|The code of the account to update.|
|bankAccountUUID|string|false|none|The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.|
|description|string|false|none|A description of the account, maximum 256 characters.You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.|
|metadata|object|false|none|A set of key and value pairs for general use by the merchant.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.|
|payoutMethodCode|string|false|none|The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.|
|payoutSchedule|[UpdatePayoutScheduleRequest](#schemaupdatepayoutschedulerequest)|false|none|The details of the payout schedule to which the account must be updated.|
|payoutSpeed|string|false|none|Speed at which payouts for this account are processed.<br><br>Possible values: `STANDARD` (default), `SAME_DAY`.|

#### Enumerated Values

|Property|Value|
|---|---|
|payoutSpeed|INSTANT|
|payoutSpeed|SAME_DAY|
|payoutSpeed|STANDARD|

<h2 id="tocS_UpdateAccountResponse">UpdateAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountresponse"></a>
<a id="schema_UpdateAccountResponse"></a>
<a id="tocSupdateaccountresponse"></a>
<a id="tocsupdateaccountresponse"></a>

```json
{
  "accountCode": "string",
  "bankAccountUUID": "string",
  "description": "string",
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "payoutMethodCode": "string",
  "payoutSchedule": {
    "nextScheduledPayout": "1970-01-01T00:00:00Z",
    "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
  },
  "payoutSpeed": "INSTANT",
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|true|none|The code of the account.|
|bankAccountUUID|string|false|none|The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.|
|description|string|false|none|The description of the account.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|A list of fields that caused the `/updateAccount` request to fail.|
|metadata|object|false|none|A set of key and value pairs containing metadata.|
|payoutMethodCode|string|false|none|The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.|
|payoutSchedule|[PayoutScheduleResponse](#schemapayoutscheduleresponse)|false|none|The details of the payout schedule to which the account is updated.|
|payoutSpeed|string|false|none|Speed at which payouts for this account are processed.<br><br>Possible values: `STANDARD`, `SAME_DAY`.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

#### Enumerated Values

|Property|Value|
|---|---|
|payoutSpeed|INSTANT|
|payoutSpeed|SAME_DAY|
|payoutSpeed|STANDARD|

<h2 id="tocS_UpdatePayoutScheduleRequest">UpdatePayoutScheduleRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepayoutschedulerequest"></a>
<a id="schema_UpdatePayoutScheduleRequest"></a>
<a id="tocSupdatepayoutschedulerequest"></a>
<a id="tocsupdatepayoutschedulerequest"></a>

```json
{
  "action": "CLOSE",
  "reason": "string",
  "schedule": "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Direction on how to handle any payouts that have already been scheduled.<br><br>Possible values:<br>* `CLOSE`: close the existing batch of payouts.<br>* `UPDATE`: reschedule the existing batch to the new schedule.<br>* `NOTHING` (**default**): allow the payout to proceed.|
|reason|string|false|none|The reason for the payout schedule update.<br>> This field is required when the `schedule` parameter is set to `HOLD`.|
|schedule|string|true|none|The new payout schedule for the account.<br><br>Possible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`.<br>> `HOLD` prevents scheduled payouts, but you can still initiate payouts manually.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|CLOSE|
|action|NOTHING|
|action|UPDATE|
|schedule|BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT|
|schedule|DAILY|
|schedule|DAILY_AU|
|schedule|DAILY_EU|
|schedule|DAILY_SG|
|schedule|DAILY_US|
|schedule|HOLD|
|schedule|MONTHLY|
|schedule|WEEKLY|
|schedule|WEEKLY_MON_TO_FRI_AU|
|schedule|WEEKLY_MON_TO_FRI_EU|
|schedule|WEEKLY_MON_TO_FRI_US|
|schedule|WEEKLY_ON_TUE_FRI_MIDNIGHT|
|schedule|WEEKLY_SUN_TO_THU_AU|
|schedule|WEEKLY_SUN_TO_THU_US|

<h2 id="tocS_UploadDocumentRequest">UploadDocumentRequest</h2>
<!-- backwards compatibility -->
<a id="schemauploaddocumentrequest"></a>
<a id="schema_UploadDocumentRequest"></a>
<a id="tocSuploaddocumentrequest"></a>
<a id="tocsuploaddocumentrequest"></a>

```json
{
  "documentContent": "string",
  "documentDetail": {
    "accountHolderCode": "string",
    "bankAccountUUID": "string",
    "description": "string",
    "documentType": "BANK_STATEMENT",
    "filename": "string",
    "legalArrangementCode": "string",
    "legalArrangementEntityCode": "string",
    "shareholderCode": "string",
    "signatoryCode": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentContent|string(byte)|true|none|The content of the document, in Base64-encoded string format.<br><br>To learn about document requirements, refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks).|
|documentDetail|[DocumentDetail](#schemadocumentdetail)|true|none|Details of the document being submitted.|

<h2 id="tocS_ViasAddress">ViasAddress</h2>
<!-- backwards compatibility -->
<a id="schemaviasaddress"></a>
<a id="schema_ViasAddress"></a>
<a id="tocSviasaddress"></a>
<a id="tocsviasaddress"></a>

```json
{
  "city": "string",
  "country": "string",
  "houseNumberOrName": "string",
  "postalCode": "string",
  "stateOrProvince": "string",
  "street": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The name of the city. Required if the `houseNumberOrName`, `street`, `postalCode`, or `stateOrProvince` are provided.|
|country|string|true|none|The two-character country code of the address in ISO-3166-1 alpha-2 format. For example, **NL**.|
|houseNumberOrName|string|false|none|The number or name of the house.|
|postalCode|string|false|none|The postal code. Required if the `houseNumberOrName`, `street`, `city`, or `stateOrProvince` are provided.<br><br>Maximum length:<br><br>* 5 digits for addresses in the US.<br><br>* 10 characters for all other countries.|
|stateOrProvince|string|false|none|The abbreviation of the state or province. Required if the `houseNumberOrName`, `street`, `city`, or `postalCode` are provided. <br><br>Maximum length:<br><br>* 2 characters for addresses in the US or Canada.<br><br>* 3 characters for all other countries.<br>|
|street|string|false|none|The name of the street. Required if the `houseNumberOrName`, `city`, `postalCode`, or `stateOrProvince` are provided.|

<h2 id="tocS_ViasName">ViasName</h2>
<!-- backwards compatibility -->
<a id="schemaviasname"></a>
<a id="schema_ViasName"></a>
<a id="tocSviasname"></a>
<a id="tocsviasname"></a>

```json
{
  "firstName": "string",
  "gender": "MALE",
  "infix": "string",
  "lastName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|The first name.|
|gender|string|false|none|The gender.<br>>The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.|
|infix|string|false|none|The name's infix, if applicable.<br>>A maximum length of twenty (20) characters is imposed.|
|lastName|string|false|none|The last name.|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|MALE|
|gender|FEMALE|
|gender|UNKNOWN|

<h2 id="tocS_ViasPersonalData">ViasPersonalData</h2>
<!-- backwards compatibility -->
<a id="schemaviaspersonaldata"></a>
<a id="schema_ViasPersonalData"></a>
<a id="tocSviaspersonaldata"></a>
<a id="tocsviaspersonaldata"></a>

```json
{
  "dateOfBirth": "string",
  "documentData": [
    {
      "expirationDate": "string",
      "issuerCountry": "st",
      "issuerState": "string",
      "number": "string",
      "type": "DRIVINGLICENSE"
    }
  ],
  "nationality": "st"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateOfBirth|string|false|none|The person's date of birth, in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.|
|documentData|[[PersonalDocumentData](#schemapersonaldocumentdata)]|false|none|Array that contains information about the person's identification document. You can submit only one entry per document type.|
|nationality|string|false|none|The nationality of the person represented by a two-character country code,  in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.<br>|

<h2 id="tocS_ViasPhoneNumber">ViasPhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaviasphonenumber"></a>
<a id="schema_ViasPhoneNumber"></a>
<a id="tocSviasphonenumber"></a>
<a id="tocsviasphonenumber"></a>

```json
{
  "phoneCountryCode": "string",
  "phoneNumber": "string",
  "phoneType": "Fax"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneCountryCode|string|false|none|The two-character country code of the phone number.<br>>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').|
|phoneNumber|string|false|none|The phone number.<br>>The inclusion of the phone number country code is not necessary.|
|phoneType|string|false|none|The type of the phone number.<br>>The following values are permitted: `Landline`, `Mobile`, `SIP`, `Fax`.|

#### Enumerated Values

|Property|Value|
|---|---|
|phoneType|Fax|
|phoneType|Landline|
|phoneType|Mobile|
|phoneType|SIP|
