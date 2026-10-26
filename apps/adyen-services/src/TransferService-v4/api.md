<h1 id="transfers-api">Transfers API v4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

>Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your implementation, use the latest version.

The Transfers API provides endpoints that you can use to transfer funds, whether when paying out to a transfer instrument for [marketplaces](https://docs.adyen.com/marketplaces/payout-to-users/on-demand-payouts) or [platforms](https://docs.adyen.com/platforms/payout-to-users/on-demand-payouts), [sending funds to third parties](https://docs.adyen.com/platforms/business-accounts/send-receive-funds) for users with business bank accounts, or to [request a payout for a grant offer](https://docs.adyen.com/platforms/capital). The API also supports use cases for [getting transactions for business bank accounts](https://docs.adyen.com/platforms/business-accounts/transactions-api) and getting [outstanding balances](https://docs.adyen.com/platforms/capital#get-balances) for one or more grants on your platform. 

## Authentication
Each request to the Transfers API must be signed with an API key. Generate an API key in your Customer Area if you have a [platform setup](https://docs.adyen.com/platforms/manage-access/api-credentials-web-service/#generate-api-key) or [marketplace setup](https://docs.adyen.com/marketplaces/manage-access/api-credentials-web-service/#generate-api-key).

If you have an Adyen Issuing integration, [generate an API key](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service/#generate-api-key) in your Balance Platform Customer Area.

To connect to the API, add an `X-API-Key` header with the API key as the value, for example:

 ```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY" \
...
```

## Roles and permissions
To use the Transfers API, you need an additional role for your API credential. Transfers must also be enabled for the source balance account. Your Adyen contact will set up the roles and permissions for you.
## Versioning
The Transfers API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://balanceplatform-api-test.adyen.com/btl/v4/transfers
```
## Going live
When going live, generate an API key in your [live Customer Area](https://ca-live.adyen.com/ca/) if you have an Adyen for Platforms integration or [live Balance Platform Customer Area](https://balanceplatform-live.adyen.com/balanceplatform/) if you have an Adyen Issuing integration. You can then use the API key to send requests to `https://balanceplatform-api-live.adyen.com/btl/v4`.

Base URLs:

* <a href="https://balanceplatform-api-test.adyen.com/btl/v4">https://balanceplatform-api-test.adyen.com/btl/v4</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

* API Key (clientKey)
    - Parameter Name: **clientKey**, in: query.

<h1 id="transfers-api-transfers">Transfers</h1>

## Get all transfers

<a id="opIdget-transfers"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/btl/v4/transfers?createdSince=1970-01-01T00%3A00%3A00Z&createdUntil=1970-01-01T00%3A00%3A00Z&clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /transfers`

Returns all the transfers related to a balance account, account holder, or balance platform.

When making this request, you must include at least one of the following:
- `balanceAccountId`
- `accountHolderId`
- `balancePlatform`.

This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next and previous pages when applicable. You can use the links to page through the results.



<h3 id="get-all-transfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balancePlatform|query|string|false|The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).<br><br>Required if you don't provide a `balanceAccountId` or `accountHolderId`.|
|accountHolderId|query|string|false|The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).<br><br>Required if you don't provide a `balanceAccountId` or `balancePlatform`.<br><br>If you provide a `balanceAccountId`, the `accountHolderId` must be related to the `balanceAccountId`.|
|balanceAccountId|query|string|false|The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).<br><br>Required if you don't provide an `accountHolderId` or `balancePlatform`.<br><br>If you provide an `accountHolderId`, the `balanceAccountId` must be related to the `accountHolderId`.|
|paymentInstrumentId|query|string|false|The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).<br><br>To use this parameter, you must also provide a `balanceAccountId`, `accountHolderId`, or `balancePlatform`.<br><br>The `paymentInstrumentId` must be related to the `balanceAccountId` or `accountHolderId` that you provide.|
|reference|query|string|false|The reference you provided in the POST [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) request|
|category|query|string|false|The category of the transfer.<br><br>Possible values:<br><br> - **bank**: A transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) or a bank account.<br><br>- **card**: A transfer involving a third-party card.<br><br>- **internal**: A transfer between [balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id) within your platform.<br><br>- **issuedCard**: A transfer initiated by an Adyen-issued card.<br><br>- **platformPayment**: Funds movements related to payments that are acquired for your users.<br><br>- **topUp**: An incoming transfer initiated by your user to top up their balance account.|
|createdSince|query|string(date-time)|true|Only include transfers that have been created on or after this point in time. The value must be in ISO 8601 format and not earlier than 6 months before the `createdUntil` date. For example, **2021-05-30T15:07:40Z**.|
|createdUntil|query|string(date-time)|true|Only include transfers that have been created on or before this point in time. The value must be in ISO 8601 format and not later than 6 months after the `createdSince` date. For example, **2021-05-30T15:07:40Z**.|
|sortOrder|query|string|false|Determines the sort order of the returned transfers. The sort order is based on the creation date of the transfers.<br><br>Possible values:<br><br> - **asc**: Ascending order, from oldest to most recent.<br><br>- **desc**: Descending order, from most recent to oldest.<br><br>Default value: **asc**.|
|cursor|query|string|false|The `cursor` returned in the links of the previous response.|
|limit|query|integer(int32)|false|The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|category|bank|
|category|card|
|category|grants|
|category|interest|
|category|internal|
|category|issuedCard|
|category|migration|
|category|platformPayment|
|category|topUp|
|category|upgrade|
|sortOrder|asc|
|sortOrder|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "balancePlatform": "YOUR_BALANCE_PLATFORM",
      "creationDate": "2021-05-03T15:20:06+02:00",
      "id": "1W1UG35QQEBJLHZ8",
      "accountHolder": {
        "description": "S. Eller - Staff 123",
        "id": "AH32272223222B5CZW6QZ2V34"
      },
      "amount": {
        "currency": "EUR",
        "value": 5400
      },
      "balanceAccount": {
        "description": "My Balance Account",
        "id": "BA3227C223222B5B9SCR82TMV"
      },
      "category": "internal",
      "categoryData": {
        "type": "internal"
      },
      "counterparty": {
        "balanceAccountId": "BA00000000000000000000001"
      },
      "description": "Your description",
      "direction": "outgoing",
      "reason": "approved",
      "reference": "312M2060T6S4UOIF",
      "status": "booked",
      "balances": [
        {
          "balance": -5400,
          "currency": "EUR",
          "received": 0,
          "reserved": 0
        }
      ],
      "events": [
        {
          "bookingDate": "2021-05-03T14:53:39+01:00",
          "id": "EVJN4233Q22322375JQ72V55G92ZXF",
          "mutations": [
            {
              "currency": "EUR",
              "received": -5400
            }
          ],
          "status": "received",
          "type": "accounting",
          "valueDate": "2021-05-03T14:53:39+01:00"
        },
        {
          "bookingDate": "2021-05-03T14:53:39+01:00",
          "id": "EVJN4233Q22322375JQ72V55GB4TPV",
          "mutations": [
            {
              "currency": "EUR",
              "received": 5400,
              "reserved": -5400
            }
          ],
          "status": "authorised",
          "type": "accounting",
          "valueDate": "2021-05-03T14:53:39+01:00"
        },
        {
          "bookingDate": "2021-05-03T14:53:39+01:00",
          "id": "EVJN4233Q22322375JQ72V55GD53HZ",
          "mutations": [
            {
              "balance": -5400,
              "currency": "EUR",
              "received": 0,
              "reserved": 5400
            }
          ],
          "status": "booked",
          "transactionId": "EVJN4233Q22322375JQ72V55GD53HZEUR",
          "type": "accounting",
          "valueDate": "2021-05-03T14:53:39+01:00"
        }
      ],
      "sequenceNumber": 3,
      "type": "internalTransfer"
    },
    {
      "balancePlatform": "YOUR_BALANCE_PLATFORM",
      "creationDate": "2021-08-02T15:20:06+02:00",
      "id": "312M2060T5Z3YWYQ",
      "accountHolder": {
        "description": "S. Doe - Staff 124",
        "id": "AH443397232222B5CZW6QZ2V34"
      },
      "amount": {
        "currency": "EUR",
        "value": 15000
      },
      "balanceAccount": {
        "description": "My Balance Account",
        "id": "BA3227C2582222B5B9SCR82VHM"
      },
      "category": "internal",
      "categoryData": {
        "type": "internal"
      },
      "counterparty": {
        "balanceAccountId": "BA00000000000000000000001"
      },
      "description": "Your description",
      "direction": "outgoing",
      "reason": "approved",
      "reference": "312M2060T6S4UOIF",
      "status": "booked",
      "balances": [
        {
          "balance": -15000,
          "currency": "EUR",
          "received": 0,
          "reserved": 0
        }
      ],
      "events": [
        {
          "bookingDate": "2021-08-02T14:53:39+01:00",
          "id": "EVJN4233Q22322375JQ72V55G92ZXF",
          "mutations": [
            {
              "currency": "EUR",
              "received": -15000
            }
          ],
          "status": "received",
          "type": "accounting",
          "valueDate": "2021-08-02T14:53:39+01:00"
        },
        {
          "bookingDate": "2021-08-02T14:53:39+01:00",
          "id": "EVJN4233Q22322375JQ72V55GB4TPV",
          "mutations": [
            {
              "currency": "EUR",
              "received": 15000,
              "reserved": -15000
            }
          ],
          "status": "authorised",
          "type": "accounting",
          "valueDate": "2021-08-02T14:53:39+01:00"
        },
        {
          "bookingDate": "2021-08-02T14:53:39+01:00",
          "id": "EVASDFOUPASFDHSADFA6SN65FG6TD53HZ",
          "mutations": [
            {
              "balance": -15000,
              "currency": "EUR",
              "received": 0,
              "reserved": 15000
            }
          ],
          "status": "booked",
          "transactionId": "EVJN4233Q22322375JQ6SN65FG6TFTEUR",
          "type": "accounting",
          "valueDate": "2021-08-02T14:53:39+01:00"
        }
      ],
      "sequenceNumber": 3,
      "type": "internalTransfer"
    }
  ],
  "_links": {
    "next": {
      "href": "https://balanceplatform-api-test.adyen.com/btl/v4/transfers?balancePlatform=YOUR_BALANCE_PLATFORM&createdUntil=2021-12-21T00%3A00%3A00Z&createdSince=2021-03-21T00%3A00%3A00Z&limit=2&cursor=S2B-TSAjOkIrYlIlbjdqe0RreHRyM32lKRSxubXBHRkhHL2E32XitQQz5SfzpucD5HbHwpM1p6NDR1eXVQLFF6MmY33J32sobDxQYT90MHIud1hwLnd6JitcX32xJ"
    }
  }
}
```

> 401 Response

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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 500 Response

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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-all-transfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[FindTransfersResponse](#schemafindtransfersresponse)|
|401|Unauthorized|Unauthorized - authentication required.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Transfer funds

<a id="opIdpost-transfers"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/btl/v4/transfers?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "amount": {
      "value": 110000,
      "currency": "EUR"
    },
    "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
    "category": "bank",
    "counterparty": {
      "bankAccount": {
        "accountHolder": {
          "fullName": "A. Klaassen",
          "address": {
            "city": "San Francisco",
            "country": "US",
            "postalCode": "94678",
            "stateOrProvince": "CA",
            "line1": "274",
            "line2": "Brannan Street"
          }
        },
        "accountIdentification": {
          "type": "numberAndBic",
          "accountNumber": "123456789",
          "bic": "BOFAUS3NXXX"
        }
      }
    },
    "priority": "crossBorder",
    "referenceForBeneficiary": "Your-reference-sent-to-the-beneficiary",
    "reference": "Your internal reference for the transfer",
    "description": "Your description for the transfer"
  }'
```

`POST /transfers`

>Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your implementation, use the latest version.

Starts a request to transfer funds to:
- [Balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts)
- [Transfer instruments](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments)
- [Third-party bank accounts](https://docs.adyen.com/payouts/payout-service/pay-out-to-bank-accounts)
- [Third-party cards](https://docs.adyen.com/payouts/payout-service/pay-out-to-cards)

Adyen sends the outcome of the transfer request through webhooks.

To use this endpoint:
- Your API credential must have the **TransferService Webservice Initiate** [role](https://docs.adyen.com/platforms/manage-access/webservice-roles/?tab=transfers_3).
- The account holder must have the required [capabilities](https://docs.adyen.com/platforms/verification-overview/capabilities).

Reach out to your Adyen contact to set up these permissions.

> Body parameter

```json
{
  "amount": {
    "value": 110000,
    "currency": "EUR"
  },
  "balanceAccountId": "BAB8B2C3D4E5F6G7H8D9J6GD4",
  "category": "bank",
  "counterparty": {
    "bankAccount": {
      "accountHolder": {
        "fullName": "A. Klaassen",
        "address": {
          "city": "San Francisco",
          "country": "US",
          "postalCode": "94678",
          "stateOrProvince": "CA",
          "line1": "274",
          "line2": "Brannan Street"
        }
      },
      "accountIdentification": {
        "type": "numberAndBic",
        "accountNumber": "123456789",
        "bic": "BOFAUS3NXXX"
      }
    }
  },
  "priority": "crossBorder",
  "referenceForBeneficiary": "Your-reference-sent-to-the-beneficiary",
  "reference": "Your internal reference for the transfer",
  "description": "Your description for the transfer"
}
```

<h3 id="transfer-funds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|WWW-Authenticate|header|string|false|Header for authenticating through SCA|
|body|body|[TransferInfo](#schematransferinfo)|false|none|
|» amount|body|[Amount](#schemaamount)|true|The amount of the transfer.|
|» balanceAccountId|body|string|false|The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).<br><br>If you want to make a transfer using a **virtual** **bankAccount** assigned to the balance account, you must specify the [payment instrument ID](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-id) of the **virtual** **bankAccount**. If you only specify a balance account ID, Adyen uses the default **physical** **bankAccount** payment instrument assigned to the balance account.|
|» category|body|string|true|The category of the transfer.<br><br>Possible values:<br><br> - **bank**: A transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) or a bank account.<br><br>- **card**: A transfer involving a third-party card.<br><br>- **internal**: A transfer between [balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id) within your platform.<br><br>- **issuedCard**: A transfer initiated by an Adyen-issued card.<br><br>- **platformPayment**: Funds movements related to payments that are acquired for your users.<br><br>- **topUp**: An incoming transfer initiated by your user to top up their balance account.|
|» counterparty|body|[CounterpartyInfoV3](#schemacounterpartyinfov3)|true|The other party involved in the funds transfer. A bank account, a balance account, a card, or a transfer instrument is required.|
|» description|body|string|false|Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.<br><br>Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**<br><br>Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' " ! ?**|
|» executionDate|body|[ExecutionDate](#schemaexecutiondate)|false|The date when the transfer will be processed. This date must be within 30 days of the current date.<br><br>Until the `executionDate`:<br>- The `status` of the transfer remains as **received**.<br>- The `reason` of the transfer remains as **pending**.<br><br>|
|» paymentInstrumentId|body|string|false|The unique identifier of the source [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-id).<br><br>If you want to make a transfer using a **virtual** **bankAccount**, you must specify the payment instrument ID of the **virtual** **bankAccount**. If you only specify a balance account ID, Adyen uses the default **physical** **bankAccount** payment instrument assigned to the balance account.|
|» priorities|body|[string]|false| The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities. Adyen will try to pay out using the priority you list first. If that's not possible, it moves on to the next option in the order of your provided priorities. <br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).<br><br>Required for transfers with `category` **bank**. For more details, see [fallback priorities](https://docs.adyen.com/payouts/payout-service/payout-to-users/#fallback-priorities).|
|» priority|body|string|false|The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).|
|» reference|body|string|false|Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.|
|» referenceForBeneficiary|body|string|false| A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.<br><br> Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.<br><br>- **internal**: 80 characters<br><br>- **bank**: 35 characters when transferring to an IBAN, 15 characters for others.|
|» review|body|[TransferRequestReview](#schematransferrequestreview)|false|Contains information required for triggering transfer reviews. |
|» type|body|string|false|The type of transfer.<br><br>Possible values:<br><br> - **bankTransfer**: for push transfers to a transfer instrument or a bank account. The `category` must be **bank**.<br>- **internalTransfer**: for push transfers between balance accounts. The `category` must be **internal**.<br>- **internalDirectDebit**: for pull transfers (direct debits) between balance accounts. The `category` must be **internal**. <br><br>|
|» ultimateParty|body|[UltimatePartyIdentification](#schemaultimatepartyidentification)|false|The ultimate sender of the funds of the transfer (ultimate debtor).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» category|bank|
|» category|card|
|» category|internal|
|» category|issuedCard|
|» category|platformPayment|
|» category|topUp|
|» priorities|crossBorder|
|» priorities|fast|
|» priorities|instant|
|» priorities|internal|
|» priorities|regular|
|» priorities|wire|
|» priority|crossBorder|
|» priority|fast|
|» priority|instant|
|» priority|internal|
|» priority|regular|
|» priority|wire|
|» type|bankTransfer|
|» type|internalTransfer|
|» type|internalDirectDebit|

> Example responses

> 200 Response

```json
{
  "accountHolder": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "amount": {
    "currency": "string",
    "value": 0
  },
  "balanceAccount": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "category": "bank",
  "categoryData": {
    "priority": "crossBorder",
    "type": "bank"
  },
  "counterparty": {
    "balanceAccountId": "string",
    "bankAccount": {
      "accountHolder": {
        "address": {
          "city": "string",
          "country": "string",
          "line1": "string",
          "line2": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "dateOfBirth": "1970-01-01",
        "email": "string",
        "firstName": "string",
        "fullName": "string",
        "lastName": "string",
        "reference": "string",
        "type": "unknown",
        "url": "string"
      },
      "accountIdentification": {
        "accountNumber": "string",
        "bsbCode": "string",
        "type": "auLocal"
      },
      "storedPaymentMethodId": "string"
    },
    "card": {
      "cardHolder": {
        "address": {
          "city": "string",
          "country": "string",
          "line1": "string",
          "line2": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "dateOfBirth": "1970-01-01",
        "email": "string",
        "firstName": "string",
        "fullName": "string",
        "lastName": "string",
        "reference": "string",
        "type": "unknown",
        "url": "string"
      },
      "cardIdentification": {
        "expiryMonth": "st",
        "expiryYear": "stri",
        "issueNumber": "st",
        "number": "string",
        "startMonth": "st",
        "startYear": "stri",
        "storedPaymentMethodId": "string"
      }
    },
    "merchant": {
      "acquirerId": "string",
      "mcc": "string",
      "merchantId": "string",
      "nameLocation": {
        "city": "string",
        "country": "string",
        "countryOfOrigin": "string",
        "name": "string",
        "rawData": "string",
        "state": "string"
      },
      "postalCode": "string"
    },
    "transferInstrumentId": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "creationDate": "1970-01-01T00:00:00Z",
  "description": "string",
  "directDebitInformation": {
    "dateOfSignature": "1970-01-01T00:00:00Z",
    "dueDate": "1970-01-01T00:00:00Z",
    "mandateId": "string",
    "sequenceType": "string"
  },
  "direction": "incoming",
  "executionDate": {
    "date": "1970-01-01",
    "timezone": "string"
  },
  "id": "string",
  "paymentInstrument": {
    "description": "string",
    "id": "string",
    "reference": "string",
    "tokenType": "string"
  },
  "reason": "accountHierarchyNotActive",
  "reference": "string",
  "referenceForBeneficiary": "string",
  "review": {
    "numberOfApprovalsRequired": 0,
    "scaOnApproval": "completed"
  },
  "status": "approvalPending",
  "type": "payment",
  "ultimateParty": {
    "address": {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "dateOfBirth": "1970-01-01",
    "email": "string",
    "firstName": "string",
    "fullName": "string",
    "fundingInstrument": {
      "cardIdentification": {
        "expiryMonth": "st",
        "expiryYear": "stri",
        "issueNumber": "st",
        "number": "string",
        "startMonth": "st",
        "startYear": "stri",
        "storedPaymentMethodId": "string"
      },
      "networkPaymentReference": "string",
      "reference": "string",
      "sourceOfFunds": "DEBIT"
    },
    "lastName": "string",
    "reference": "string",
    "type": "unknown",
    "url": "string"
  }
}
```

> 202 Response

```json
{
  "id": "1W1UG35U8A9J5ZLG",
  "accountHolder": {
    "description": "Your account holder description",
    "id": "AH3227C223222C5GXQXF658WB",
    "reference": "Your account holder reference"
  },
  "amount": {
    "value": 110000,
    "currency": "EUR"
  },
  "balanceAccount": {
    "description": "Your balance account description",
    "id": "BAB8B2C3D4E5F6G7H8D9J6GD4",
    "reference": "Your balance account reference"
  },
  "category": "bank",
  "categoryData": {
    "priority": "crossBorder",
    "type": "bank"
  },
  "counterparty": {
    "bankAccount": {
      "accountHolder": {
        "fullName": "A. Klaassen",
        "address": {
          "city": "San Francisco",
          "country": "US",
          "postalCode": "94678",
          "stateOrProvince": "CA",
          "line1": "274",
          "line2": "Brannan Street"
        }
      },
      "accountIdentification": {
        "type": "numberAndBic",
        "accountNumber": "123456789",
        "bic": "BOFAUS3NXXX"
      }
    }
  },
  "paymentInstrument": {
    "description": "Your payment instrument description",
    "id": "PI3222G223222G59347DAA265",
    "reference": "Your payment instrument reference"
  },
  "referenceForBeneficiary": "Your-reference-sent-to-the-beneficiary",
  "reference": "Your internal reference for the transfer",
  "description": "Your description for the transfer",
  "direction": "outgoing",
  "reason": "pending",
  "status": "received"
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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 500 Response

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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="transfer-funds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has been accepted for processing, but has not been completed.|[Transfer](#schematransfer)|
|202|Accepted|Accepted - The request has been accepted for processing, but has not been completed.|[Transfer](#schematransfer)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|202|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|401|auth-param1|string||Base64-encoded blob of data. You will need auth-param1 when authenticating your user using the SDK.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Approve initiated transfers

<a id="opIdpost-transfers-approve"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/btl/v4/transfers/approve?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "transferIds": [
      "APUFHASUDF4AS",
      "407ASFPUAHSFA"
    ]
  }'
```

`POST /transfers/approve`

Initiates the approval of a list of transfers that triggered an additional [review](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers#request-review). Adyen sends the outcome of the approval request through webhooks.

To use this endpoint:
- Your API credential must have the **TransferService Approve** [role](https://docs.adyen.com/platforms/manage-access/webservice-roles/?tab=transfers_3).
- The account holder must have the required [capabilities](https://docs.adyen.com/platforms/verification-overview/capabilities).

Reach out to your Adyen contact to set up these permissions.

> Body parameter

```json
{
  "transferIds": [
    "APUFHASUDF4AS",
    "407ASFPUAHSFA"
  ]
}
```

<h3 id="approve-initiated-transfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|WWW-Authenticate|header|string|false|Header for authenticating through SCA|
|body|body|[ApproveTransfersRequest](#schemaapprovetransfersrequest)|false|none|
|» transferIds|body|[string]|false|Contains the unique identifiers of the transfers that you want to approve.|

> Example responses

> 200 Response

```json
{}
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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 500 Response

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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="approve-initiated-transfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - look at the actual response code for the status of the request. |None|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|401|auth-param1|string||Base64-encoded blob of data. You will need auth-param1 when authenticating your user using the SDK.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Cancel initiated transfers

<a id="opIdpost-transfers-cancel"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/btl/v4/transfers/cancel?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "transferIds": [
      "APUFHASUDF4AS",
      "407ASFPUAHSFA"
    ]
  }'
```

`POST /transfers/cancel`

Initiates the cancellation of a list of transfers that triggered an additional [review](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers#request-review). Adyen sends the outcome of the cancel request through webhooks.

To use this endpoint:
- Your API credential must have the **TransferService Approve** [role](https://docs.adyen.com/platforms/manage-access/webservice-roles/?tab=transfers_3).
- The account holder must have the required [capabilities](https://docs.adyen.com/platforms/verification-overview/capabilities).

Reach out to your Adyen contact to set up these permissions.

> Body parameter

```json
{
  "transferIds": [
    "APUFHASUDF4AS",
    "407ASFPUAHSFA"
  ]
}
```

<h3 id="cancel-initiated-transfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[CancelTransfersRequest](#schemacanceltransfersrequest)|false|none|
|» transferIds|body|[string]|false|Contains the unique identifiers of the transfers that you want to cancel.|

> Example responses

> 200 Response

```json
{}
```

> 401 Response

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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 500 Response

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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="cancel-initiated-transfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No Content - look at the actual response code for the status of the request. |None|
|401|Unauthorized|Unauthorized - authentication required.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get a transfer

<a id="opIdget-transfers-id"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/btl/v4/transfers/string?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /transfers/{id}`

Returns the details of a specified transfer.

<h3 id="get-a-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier of the transfer.|

> Example responses

> 200 Response

```json
{
  "balancePlatform": "YOUR_BALANCE_PLATFORM",
  "creationDate": "2021-05-03T15:20:06+02:00",
  "id": "1W1UG35QQEBJLHZ8",
  "accountHolder": {
    "description": "S. Eller - Staff 123",
    "id": "AH32272223222B5CZW6QZ2V34"
  },
  "amount": {
    "currency": "EUR",
    "value": 5400
  },
  "balanceAccount": {
    "description": "My Balance Account",
    "id": "BA3227C223222B5B9SCR82TMV"
  },
  "category": "internal",
  "categoryData": {
    "type": "internal"
  },
  "counterparty": {
    "balanceAccountId": "BA00000000000000000000001"
  },
  "description": "Your description",
  "direction": "outgoing",
  "reason": "approved",
  "reference": "312M2060T6S4UOIF",
  "status": "booked",
  "balances": [
    {
      "balance": -5400,
      "currency": "EUR",
      "received": 0,
      "reserved": 0
    }
  ],
  "events": [
    {
      "bookingDate": "2021-05-03T14:53:39+01:00",
      "id": "EVJN4233Q22322375JQ72V55G92ZXF",
      "mutations": [
        {
          "currency": "EUR",
          "received": -5400
        }
      ],
      "status": "received",
      "type": "accounting",
      "valueDate": "2021-05-03T14:53:39+01:00"
    },
    {
      "bookingDate": "2021-05-03T14:53:39+01:00",
      "id": "EVJN4233Q22322375JQ72V55GB4TPV",
      "mutations": [
        {
          "currency": "EUR",
          "received": 5400,
          "reserved": -5400
        }
      ],
      "status": "authorised",
      "type": "accounting",
      "valueDate": "2021-05-03T14:53:39+01:00"
    },
    {
      "bookingDate": "2021-05-03T14:53:39+01:00",
      "id": "EVJN4233Q22322375JQ72V55GD53HZ",
      "mutations": [
        {
          "balance": -5400,
          "currency": "EUR",
          "received": 0,
          "reserved": 5400
        }
      ],
      "status": "booked",
      "transactionId": "EVJN4233Q22322375JQ72V55GD53HZEUR",
      "type": "accounting",
      "valueDate": "2021-05-03T14:53:39+01:00"
    }
  ],
  "sequenceNumber": 3,
  "type": "internalTransfer"
}
```

> 401 Response

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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 500 Response

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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransferData](#schematransferdata)|
|401|Unauthorized|Unauthorized - authentication required.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Return a transfer

<a id="opIdpost-transfers-transferId-returns"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/btl/v4/transfers/string/returns?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "amount": {
      "value": 189,
      "currency": "EUR"
    },
    "reference": "Your internal reference for the return"
  }'
```

`POST /transfers/{transferId}/returns`

Initiates the return of previously transferred funds without creating a new `transferId`.

> Body parameter

```json
{
  "amount": {
    "value": 189,
    "currency": "EUR"
  },
  "reference": "Your internal reference for the return"
}
```

<h3 id="return-a-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transferId|path|string|true|The unique identifier of the transfer to be returned.|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[ReturnTransferRequest](#schemareturntransferrequest)|false|none|
|» amount|body|[Amount](#schemaamount)|true|Contains information about the amount to be returned.|
|» reference|body|string|false|Your internal reference for the return. If you don't provide this in the request, Adyen generates a unique reference. This reference is used in all communication with you about the instruction status.<br><br>We recommend using a unique value per instruction.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>|

> Example responses

> 200 Response

```json
{
  "id": "1W1UG35QQEBJLHZ8",
  "reference": "Your internal reference for the return",
  "status": "Authorised",
  "transferId": "1W1UG35U8A9J5ZLG"
}
```

> 401 Response

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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 500 Response

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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="return-a-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[ReturnTransferResponse](#schemareturntransferresponse)|
|401|Unauthorized|Unauthorized - authentication required.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[TransferServiceRestServiceError](#schematransferservicerestserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="transfers-api-transactions">Transactions</h1>

## Get all transactions

<a id="opIdget-transactions"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/btl/v4/transactions?createdSince=1970-01-01T00%3A00%3A00Z&createdUntil=1970-01-01T00%3A00%3A00Z&clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /transactions`

>Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your implementation, use the latest version.

Returns all the transactions related to a balance account, account holder, or balance platform.

When making this request, you must include at least one of the following:
- `balanceAccountId`
- `accountHolderId`
- `balancePlatform`.

This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next and previous pages when applicable. You can use the links to page through the results.



<h3 id="get-all-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balancePlatform|query|string|false|The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).<br><br>Required if you don't provide a `balanceAccountId` or `accountHolderId`.|
|paymentInstrumentId|query|string|false|The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).<br><br>To use this parameter, you must also provide a `balanceAccountId`, `accountHolderId`, or `balancePlatform`.<br><br>The `paymentInstrumentId` must be related to the `balanceAccountId` or `accountHolderId` that you provide.|
|accountHolderId|query|string|false|The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).<br><br>Required if you don't provide a `balanceAccountId` or `balancePlatform`.<br><br>If you provide a `balanceAccountId`, the `accountHolderId` must be related to the `balanceAccountId`.|
|balanceAccountId|query|string|false|The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).<br><br>Required if you don't provide an `accountHolderId` or `balancePlatform`.<br><br>If you provide an `accountHolderId`, the `balanceAccountId` must be related to the `accountHolderId`.|
|cursor|query|string|false|The `cursor` returned in the links of the previous response.|
|createdSince|query|string(date-time)|true|Only include transactions that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.|
|createdUntil|query|string(date-time)|true|Only include transactions that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.|
|sortOrder|query|string|false|Determines the sort order of the returned transactions. The sort order is based on the creation date of the transaction.<br><br>Possible values:<br><br> - **asc**: Ascending order, from oldest to most recent.<br><br>- **desc**: Descending order, from most recent to oldest.<br><br>Default value: **asc**.|
|limit|query|integer(int32)|false|The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortOrder|asc|
|sortOrder|desc|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "balancePlatform": "YOUR_BALANCE_PLATFORM",
      "creationDate": "2023-08-10T14:51:20+02:00",
      "id": "EVJN42272224222B5JB8BRC84N686ZEUR",
      "accountHolder": {
        "description": "Your description for the account holder",
        "id": "AH00000000000000000000001"
      },
      "amount": {
        "currency": "USD",
        "value": -1000
      },
      "balanceAccount": {
        "description": "Your description for the account holder",
        "id": "BA00000000000000000000001"
      },
      "bookingDate": "2023-08-10T14:51:33+02:00",
      "status": "booked",
      "transfer": {
        "id": "3JNC3O5ZVFLLGV4B",
        "reference": "Your internal reference for the transfer"
      },
      "valueDate": "2023-08-10T14:51:20+02:00"
    },
    {
      "balancePlatform": "YOUR_BALANCE_PLATFORM",
      "creationDate": "2023-08-10T15:34:31+02:00",
      "id": "EVJN4227C224222B5JB8G3Q89N2NB6EUR",
      "accountHolder": {
        "description": "Your description for the account holder",
        "id": "AH00000000000000000000001"
      },
      "amount": {
        "currency": "USD",
        "value": 123
      },
      "balanceAccount": {
        "description": "Your description for the account holder",
        "id": "BA00000000000000000000001"
      },
      "bookingDate": "2023-08-10T15:34:40+02:00",
      "status": "booked",
      "transfer": {
        "id": "48POO45ZVG11166J",
        "reference": "Your internal reference for the transfer"
      },
      "valueDate": "2023-08-10T15:34:31+02:00"
    },
    {
      "balancePlatform": "YOUR_BALANCE_PLATFORM",
      "creationDate": "2023-08-11T13:45:46+02:00",
      "id": "EVJN4227C224222B5JBD3XHF8P3L8GUSD",
      "accountHolder": {
        "description": "Your description for the account holder",
        "id": "AH00000000000000000000001"
      },
      "amount": {
        "currency": "USD",
        "value": -10000
      },
      "balanceAccount": {
        "description": "Your description for the account holder",
        "id": "BA00000000000000000000001"
      },
      "bookingDate": "2023-08-11T13:45:57+02:00",
      "status": "booked",
      "transfer": {
        "id": "48RTTW5ZVT8KU9DV",
        "reference": "my-reference"
      },
      "valueDate": "2023-08-11T13:45:46+02:00"
    },
    {
      "balancePlatform": "YOUR_BALANCE_PLATFORM",
      "creationDate": "2023-08-11T13:45:51+02:00",
      "id": "EVJN42272224222B5JBD3XJGHF4J26USD",
      "accountHolder": {
        "description": "Your description for the account holder",
        "id": "AH00000000000000000000001"
      },
      "amount": {
        "currency": "USD",
        "value": 1000
      },
      "balanceAccount": {
        "description": "Your description for the account holder",
        "id": "BA00000000000000000000001"
      },
      "bookingDate": "2023-08-11T13:45:58+02:00",
      "status": "booked",
      "transfer": {
        "id": "48TYZO5ZVT8M1K47",
        "reference": "my-reference"
      },
      "valueDate": "2023-08-11T13:45:51+02:00"
    }
  ],
  "_links": {
    "next": {
      "href": "https://balanceplatform-api-test.adyen.com/btl/v4/transactions?balancePlatform=TestBalancePlatform&createdUntil=2023-08-20T13%3A07%3A40Z&createdSince=2023-08-10T10%3A50%3A40Z&cursor=S2B-c0p1N0tdN0l6RGhYK1YpM0lgOTUyMDlLXElyKE9LMCtyaFEuMj1NMHgidCsrJi1ZNnhqXCtqVi5JPGpRK1F2fCFqWzU33JTojSVNJc1J1VXhncS10QDd6JX9FQFl5Zn0uNyUvSXJNQTo"
    }
  }
}
```

> 401 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

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
  "response": {},
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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 500 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-all-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransactionSearchResponse](#schematransactionsearchresponse)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get a transaction

<a id="opIdget-transactions-id"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/btl/v4/transactions/string?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /transactions/{id}`

>Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your implementation, use the latest version.

Returns a transaction.

<h3 id="get-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the transaction.|

> Example responses

> 200 Response

```json
{
  "id": "EVJN4227C224222B5JBDHPTD672M52EUR",
  "amount": {
    "value": -10000,
    "currency": "EUR"
  },
  "status": "booked",
  "transfer": {
    "id": "48TYZO5ZVURJ2FCW",
    "reference": "Your internal reference for the transfer"
  },
  "valueDate": "2023-08-11T16:19:35+02:00",
  "bookingDate": "2023-08-11T16:19:39+02:00",
  "creationDate": "2023-08-11T16:19:35+02:00",
  "accountHolder": {
    "id": "AH00000000000000000000001",
    "description": "Your description of the account holder"
  },
  "balanceAccount": {
    "id": "BA00000000000000000000001",
    "description": "Your description of the balance account"
  },
  "balancePlatform": "YOUR_BALANCE_PLATFORM"
}
```

> 401 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

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
  "response": {},
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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 500 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[Transaction](#schematransaction)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="transfers-api-capital">Capital</h1>

## Get a capital account

<a id="opIdget-grants"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/btl/v4/grants?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /grants`

<aside class="warning">
This operation is deprecated
</aside>

Returns a list of grants with status and outstanding balances.

<h3 id="get-a-capital-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|counterpartyAccountHolderId|query|string|false|The counterparty account holder id.|

> Example responses

> 200 Response

```json
{
  "grants": [
    {
      "amount": {
        "currency": "string",
        "value": 0
      },
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
      "fee": {
        "amount": {
          "currency": "string",
          "value": 0
        }
      },
      "grantAccountId": "string",
      "grantOfferId": "string",
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
      "status": "Pending"
    }
  ]
}
```

> 400 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
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
  "response": {},
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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 500 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-capital-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CapitalGrants](#schemacapitalgrants)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|404|Not Found|Not Found - the payment was not found|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Request a grant payout

<a id="opIdpost-grants"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/btl/v4/grants?clientKey=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "grantAccountId": "CG00000000000000000000001",
    "grantOfferId": "0000000000000001",
    "counterparty": {
      "balanceAccountId": "BA00000000000000000000001"
    }
  }'
```

`POST /grants`

<aside class="warning">
This operation is deprecated
</aside>

Requests the payout of the selected grant offer.

> Body parameter

```json
{
  "grantAccountId": "CG00000000000000000000001",
  "grantOfferId": "0000000000000001",
  "counterparty": {
    "balanceAccountId": "BA00000000000000000000001"
  }
}
```

<h3 id="request-a-grant-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).|
|body|body|[CapitalGrantInfo](#schemacapitalgrantinfo)|false|none|
|» counterparty|body|[GrantInfoCounterparty](#schemagrantinfocounterparty)|false|An object containing the details of the receiving party of the grant.|
|» grantAccountId|body|string|true|The identifier of the grant account used for the grant.|
|» grantOfferId|body|string|true|The identifier of the grant offer that has been selected and from which the grant details will be used.|

> Example responses

> 200 Response

```json
{
  "id": "GR00000000000000000000001",
  "grantAccountId": "CG00000000000000000000001",
  "grantOfferId": "0000000000000001",
  "counterparty": {
    "accountHolderId": "AH00000000000000000000001",
    "balanceAccountId": "BA00000000000000000000001"
  },
  "amount": {
    "currency": "EUR",
    "value": 1000000
  },
  "fee": {
    "amount": {
      "value": 120000,
      "currency": "EUR"
    }
  },
  "balances": {
    "currency": "EUR",
    "fee": 120000,
    "principal": 1000000,
    "total": 1120000
  },
  "repayment": {
    "basisPoints": 1400
  },
  "status": "Pending"
}
```

> 400 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
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
  "response": {},
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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 500 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="request-a-grant-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CapitalGrant](#schemacapitalgrant)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|404|Not Found|Not Found - the payment was not found|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|
|422|Idempotency-Key|string||The idempotency key used for processing the request. Present if the key was provided in the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

## Get grant reference details

<a id="opIdget-grants-id"></a>

> Code samples

```bash
curl "https://balanceplatform-api-test.adyen.com/btl/v4/grants/string?clientKey=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /grants/{id}`

<aside class="warning">
This operation is deprecated
</aside>

Returns the details of a capital account specified in the path.

<h3 id="get-grant-reference-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the grant.|

> Example responses

> 200 Response

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  },
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
  "fee": {
    "amount": {
      "currency": "string",
      "value": 0
    }
  },
  "grantAccountId": "string",
  "grantOfferId": "string",
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
  "status": "Pending"
}
```

> 400 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 401 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
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
  "response": {},
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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 500 Response

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-grant-reference-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CapitalGrant](#schemacapitalgrant)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[RestServiceError](#schemarestserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[RestServiceError](#schemarestserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[RestServiceError](#schemarestserviceerror)|
|404|Not Found|Not Found - the payment was not found|[RestServiceError](#schemarestserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[RestServiceError](#schemarestserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[RestServiceError](#schemarestserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
clientKey, BasicAuth, ApiKeyAuth
</aside>

<h1 id="transfers-api-cashout">CashOut</h1>

## Initiate a cashout

<a id="opIdpost-cashouts"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/btl/v4/cashouts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "instructingBalanceAccountId": "BA00000000000000000000001",
    "amount": {
      "currency": "EUR",
      "value": 50000
    },
    "counterparty": {
      "transferInstrumentId": "SE00000000000000000000001"
    },
    "description": "Cashout to bank account",
    "referenceForBeneficiary": "CASHOUT-REF-001",
    "fee": {
      "amount": {
        "currency": "EUR",
        "value": 500
      }
    }
  }'
```

`POST /cashouts`

Initiates a [cashout](https://docs.adyen.com/platforms/cash-out-instantly) request.

> Body parameter

```json
{
  "instructingBalanceAccountId": "BA00000000000000000000001",
  "amount": {
    "currency": "EUR",
    "value": 50000
  },
  "counterparty": {
    "transferInstrumentId": "SE00000000000000000000001"
  },
  "description": "Cashout to bank account",
  "referenceForBeneficiary": "CASHOUT-REF-001",
  "fee": {
    "amount": {
      "currency": "EUR",
      "value": 500
    }
  }
}
```

<h3 id="initiate-a-cashout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CashOutInfo](#schemacashoutinfo)|true|none|
|» amount|body|[Amount](#schemaamount)|true|Contains the amount of the cashout, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|
|» counterparty|body|[CashOutInfoCounterparty](#schemacashoutinfocounterparty)|false|Contains information about the counterparty of the cashout transfer.|
|» description|body|string|false|Allowed and returned only when you provide the `counterparty.transferInstrumentId` field.<br><br>Your description of the cashout transfer. This description is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.<br><br>If you do not provide a description, Adyen generates a description automatically. This generated description is not returned in the response.<br><br>Supported characters: **[a-z] [A-Z] [0-9] / - ? : ( ) . , ' + Space**.|
|» fee|body|[Fee](#schemafee)|false|Contains the currency and value of the cashout fee, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|
|» instructingBalanceAccountId|body|string|true|The unique identifier of the balance account that initiates the cashout request.|
|» referenceForBeneficiary|body|string|false|Allowed and returned only when you provide the `counterparty.transferInstrumentId` field.<br><br>The reference that is sent to the recipient of a cashout transfer. This reference is also sent in all webhooks related to the cashout transfer, so you can use it to track the status of the transfer.<br><br>If you do not provide a reference for the beneficiary, Adyen generates one automatically. This generated reference for the beneficiary is not returned in the response.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**.|
|» transferInstrumentId|body|string|false|**Deprecated.** **Use `counterparty.transferInstrumentId` instead.**<br><br>The unique identifier of the counterparty transfer instrument.|

> Example responses

> 200 Response

```json
{
  "id": "CO00000000000000000000001",
  "instructingBalanceAccountId": "BA00000000000000000000001",
  "amount": {
    "currency": "EUR",
    "value": 50000
  },
  "counterparty": {
    "transferInstrumentId": "SE00000000000000000000001"
  },
  "description": "Cashout to bank account",
  "referenceForBeneficiary": "CASHOUT-REF-001",
  "fee": {
    "amount": {
      "currency": "EUR",
      "value": 500
    }
  },
  "transfers": [
    {
      "id": "400F6060JMB1I0AB",
      "type": "cashoutRepayment",
      "amount": {
        "currency": "EUR",
        "value": 50500
      }
    },
    {
      "id": "400F6060JMB1I0AA",
      "type": "cashoutFee",
      "amount": {
        "currency": "EUR",
        "value": 500
      }
    }
  ]
}
```

> 400 Response

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

> 401 Response

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

> 403 Response

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

> 429 Response

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

> 500 Response

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

<h3 id="initiate-a-cashout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - The request has succeeded.|[CashOut](#schemacashout)|
|400|Bad Request|Bad Request - The request is malformed or is not in the expected format.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - The API credential used in the request is invalid.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - The API credential does not have the right permissions.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|404|Not Found|Not Found - The requested resource was not found.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|429|Too Many Requests|Too Many Requests - Request rate limit exceeded.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Service Error - An unrecoverable error occurred while trying to perform the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

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
  "line1": "string",
  "line2": "string",
  "postalCode": "string",
  "stateOrProvince": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The name of the city.<br><br>Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \ \|** and Space.<br><br>> Required when the `category` is **card**.<br>|
|country|string|true|none|The two-character ISO 3166-1 alpha-2 country code. For example, **US**, **NL**, or **GB**.|
|line1|string|false|none|The first line of the street address.<br><br>Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \ \|** and Space.<br><br>> Required when the `category` is **card**.<br>|
|line2|string|false|none|The second line of the street address.<br><br>Supported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \ \|** and Space.<br><br>> Required when the `category` is **card**.<br>|
|postalCode|string|false|none|The postal code.<br>Maximum length:<br>* 5 digits for an address in the US.<br>* 10 characters for an address in all other countries.<br><br>Supported characters: **[a-z] [A-Z] [0-9]** and Space.<br><br>> Required for addresses in the US.<br>|
|stateOrProvince|string|false|none|   The two-letter ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.<br><br>   > Required for the US and Canada.<br>|

<h2 id="tocS_Airline">Airline</h2>
<!-- backwards compatibility -->
<a id="schemaairline"></a>
<a id="schema_Airline"></a>
<a id="tocSairline"></a>
<a id="tocsairline"></a>

```json
{
  "legs": [
    {
      "arrivalAirportCode": "string",
      "basicFareCode": "string",
      "carrierCode": "string",
      "departureAirportCode": "string",
      "departureDate": "string",
      "flightNumber": "string"
    }
  ],
  "ticketNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legs|[[Leg](#schemaleg)]|false|none|Details about the flight legs for this ticket.|
|ticketNumber|string|false|none|The ticket's unique identifier|

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

<h2 id="tocS_AmountAdjustment">AmountAdjustment</h2>
<!-- backwards compatibility -->
<a id="schemaamountadjustment"></a>
<a id="schema_AmountAdjustment"></a>
<a id="tocSamountadjustment"></a>
<a id="tocsamountadjustment"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  },
  "amountAdjustmentType": "atmMarkup",
  "basepoints": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The adjustment amount.|
|amountAdjustmentType|string|false|none|The type of markup that is applied to an authorised payment.<br><br>Possible values: **exchange**, **forexMarkup**, **authHoldReserve**, **atmMarkup**.|
|basepoints|integer(int32)|false|none|The basepoints associated with the applied markup.|

#### Enumerated Values

|Property|Value|
|---|---|
|amountAdjustmentType|atmMarkup|
|amountAdjustmentType|authHoldReserve|
|amountAdjustmentType|exchange|
|amountAdjustmentType|forexMarkup|

<h2 id="tocS_ApproveTransfersRequest">ApproveTransfersRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapprovetransfersrequest"></a>
<a id="schema_ApproveTransfersRequest"></a>
<a id="tocSapprovetransfersrequest"></a>
<a id="tocsapprovetransfersrequest"></a>

```json
{
  "transferIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transferIds|[string]|false|none|Contains the unique identifiers of the transfers that you want to approve.|

<h2 id="tocS_BRLocalAccountIdentification">BRLocalAccountIdentification</h2>
<!-- backwards compatibility -->
<a id="schemabrlocalaccountidentification"></a>
<a id="schema_BRLocalAccountIdentification"></a>
<a id="tocSbrlocalaccountidentification"></a>
<a id="tocsbrlocalaccountidentification"></a>

```json
{
  "accountNumber": "string",
  "bankCode": "str",
  "branchNumber": "stri",
  "ispb": "stringst",
  "type": "brLocal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|true|none|The bank account number, without separators or whitespace.|
|bankCode|string|true|none|The 3-digit bank code, with leading zeros.|
|branchNumber|string|true|none|The bank account branch number, without separators or whitespace.|
|ispb|string|false|none|The 8-digit ISPB, with leading zeros.|
|type|string|true|none|**brLocal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|brLocal|

<h2 id="tocS_BalanceMutation">BalanceMutation</h2>
<!-- backwards compatibility -->
<a id="schemabalancemutation"></a>
<a id="schema_BalanceMutation"></a>
<a id="tocSbalancemutation"></a>
<a id="tocsbalancemutation"></a>

```json
{
  "balance": 0,
  "currency": "string",
  "received": 0,
  "reserved": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|integer(int64)|false|none|The amount in the payment's currency that is debited or credited on the balance accounting register.|
|currency|string|false|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).|
|received|integer(int64)|false|none|The amount in the payment's currency that is debited or credited on the received accounting register.|
|reserved|integer(int64)|false|none|The amount in the payment's currency that is debited or credited on the reserved accounting register.|

<h2 id="tocS_BankAccountV3">BankAccountV3</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountv3"></a>
<a id="schema_BankAccountV3"></a>
<a id="tocSbankaccountv3"></a>
<a id="tocsbankaccountv3"></a>

```json
{
  "accountHolder": {
    "address": {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "dateOfBirth": "1970-01-01",
    "email": "string",
    "firstName": "string",
    "fullName": "string",
    "lastName": "string",
    "reference": "string",
    "type": "unknown",
    "url": "string"
  },
  "accountIdentification": {
    "accountNumber": "string",
    "bsbCode": "string",
    "type": "auLocal"
  },
  "storedPaymentMethodId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[PartyIdentification](#schemapartyidentification)|true|none|Information about the owner of the bank account.|
|accountIdentification|[AULocalAccountIdentification](#schemaaulocalaccountidentification) \| [BRLocalAccountIdentification](#schemabrlocalaccountidentification) \| [CALocalAccountIdentification](#schemacalocalaccountidentification) \| [CZLocalAccountIdentification](#schemaczlocalaccountidentification) \| [DKLocalAccountIdentification](#schemadklocalaccountidentification) \| [HKLocalAccountIdentification](#schemahklocalaccountidentification) \| [HULocalAccountIdentification](#schemahulocalaccountidentification) \| [IbanAccountIdentification](#schemaibanaccountidentification) \| [NOLocalAccountIdentification](#schemanolocalaccountidentification) \| [NZLocalAccountIdentification](#schemanzlocalaccountidentification) \| [NumberAndBicAccountIdentification](#schemanumberandbicaccountidentification) \| [PLLocalAccountIdentification](#schemapllocalaccountidentification) \| [SELocalAccountIdentification](#schemaselocalaccountidentification) \| [SGLocalAccountIdentification](#schemasglocalaccountidentification) \| [UKLocalAccountIdentification](#schemauklocalaccountidentification) \| [USLocalAccountIdentification](#schemauslocalaccountidentification)|true|none|Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.|
|storedPaymentMethodId|string|false|none|The unique token that identifies the stored bank account details of the counterparty for a payout.|

<h2 id="tocS_BankCategoryData">BankCategoryData</h2>
<!-- backwards compatibility -->
<a id="schemabankcategorydata"></a>
<a id="schema_BankCategoryData"></a>
<a id="tocSbankcategorydata"></a>
<a id="tocsbankcategorydata"></a>

```json
{
  "priority": "crossBorder",
  "type": "bank"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|priority|string|false|none|The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).|
|type|string|false|none|**bank**|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|crossBorder|
|priority|fast|
|priority|instant|
|priority|internal|
|priority|regular|
|priority|wire|
|type|bank|

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

<h2 id="tocS_CancelTransfersRequest">CancelTransfersRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceltransfersrequest"></a>
<a id="schema_CancelTransfersRequest"></a>
<a id="tocScanceltransfersrequest"></a>
<a id="tocscanceltransfersrequest"></a>

```json
{
  "transferIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transferIds|[string]|false|none|Contains the unique identifiers of the transfers that you want to cancel.|

<h2 id="tocS_CapitalBalance">CapitalBalance</h2>
<!-- backwards compatibility -->
<a id="schemacapitalbalance"></a>
<a id="schema_CapitalBalance"></a>
<a id="tocScapitalbalance"></a>
<a id="tocscapitalbalance"></a>

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
|fee|integer(int64)|true|none|Fee amount.|
|principal|integer(int64)|true|none|Principal amount.|
|total|integer(int64)|true|none|Total amount. A sum of principal amount and fee amount.|

<h2 id="tocS_CapitalGrant">CapitalGrant</h2>
<!-- backwards compatibility -->
<a id="schemacapitalgrant"></a>
<a id="schema_CapitalGrant"></a>
<a id="tocScapitalgrant"></a>
<a id="tocscapitalgrant"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  },
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
  "fee": {
    "amount": {
      "currency": "string",
      "value": 0
    }
  },
  "grantAccountId": "string",
  "grantOfferId": "string",
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
  "status": "Pending"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|An object containing the amount of the grant, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|
|balances|[CapitalBalance](#schemacapitalbalance)|true|none|An object containing the details of the existing grant.|
|counterparty|[GrantCounterparty](#schemagrantcounterparty)|false|none|An object containing the details of the receiving party of the grant.|
|fee|[Fee](#schemafee)|false|none|An object containing the fee currency and value, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|
|grantAccountId|string|true|none|The identifier of the grant account used for the grant.|
|grantOfferId|string|true|none|The identifier of the grant offer that has been selected and from which the grant details will be used.|
|id|string|true|none|The identifier of the grant reference.|
|repayment|[Repayment](#schemarepayment)|false|none|An object containing the details of the 30-day repayment threshold.|
|status|string|true|none|The current status of the grant. Possible values: **Pending**, **Active**, **Repaid**, **WrittenOff**, **Failed**, **Revoked**.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Pending|
|status|Active|
|status|Repaid|
|status|Failed|
|status|WrittenOff|
|status|Revoked|

<h2 id="tocS_CapitalGrantInfo">CapitalGrantInfo</h2>
<!-- backwards compatibility -->
<a id="schemacapitalgrantinfo"></a>
<a id="schema_CapitalGrantInfo"></a>
<a id="tocScapitalgrantinfo"></a>
<a id="tocscapitalgrantinfo"></a>

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
|counterparty|[GrantInfoCounterparty](#schemagrantinfocounterparty)|false|none|An object containing the details of the receiving party of the grant.|
|grantAccountId|string|true|none|The identifier of the grant account used for the grant.|
|grantOfferId|string|true|none|The identifier of the grant offer that has been selected and from which the grant details will be used.|

<h2 id="tocS_CapitalGrants">CapitalGrants</h2>
<!-- backwards compatibility -->
<a id="schemacapitalgrants"></a>
<a id="schema_CapitalGrants"></a>
<a id="tocScapitalgrants"></a>
<a id="tocscapitalgrants"></a>

```json
{
  "grants": [
    {
      "amount": {
        "currency": "string",
        "value": 0
      },
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
      "fee": {
        "amount": {
          "currency": "string",
          "value": 0
        }
      },
      "grantAccountId": "string",
      "grantOfferId": "string",
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
      "status": "Pending"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grants|[[CapitalGrant](#schemacapitalgrant)]|true|none|The unique identifier of the grant.|

<h2 id="tocS_Card">Card</h2>
<!-- backwards compatibility -->
<a id="schemacard"></a>
<a id="schema_Card"></a>
<a id="tocScard"></a>
<a id="tocscard"></a>

```json
{
  "cardHolder": {
    "address": {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "dateOfBirth": "1970-01-01",
    "email": "string",
    "firstName": "string",
    "fullName": "string",
    "lastName": "string",
    "reference": "string",
    "type": "unknown",
    "url": "string"
  },
  "cardIdentification": {
    "expiryMonth": "st",
    "expiryYear": "stri",
    "issueNumber": "st",
    "number": "string",
    "startMonth": "st",
    "startYear": "stri",
    "storedPaymentMethodId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardHolder|[PartyIdentification](#schemapartyidentification)|true|none|Contains information about the cardholder.|
|cardIdentification|[CardIdentification](#schemacardidentification)|true|none|Contains the identification details of the card.|

<h2 id="tocS_CardIdentification">CardIdentification</h2>
<!-- backwards compatibility -->
<a id="schemacardidentification"></a>
<a id="schema_CardIdentification"></a>
<a id="tocScardidentification"></a>
<a id="tocscardidentification"></a>

```json
{
  "expiryMonth": "st",
  "expiryYear": "stri",
  "issueNumber": "st",
  "number": "string",
  "startMonth": "st",
  "startYear": "stri",
  "storedPaymentMethodId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiryMonth|string|false|none|The expiry month of the card.<br><br>Format: two digits. Add a leading zero for single-digit months. For example:<br>* 03 = March<br>* 11 = November|
|expiryYear|string|false|none|The expiry year of the card.<br><br>Format: four digits. For example: 2020|
|issueNumber|string|false|none|The issue number of the card. Applies only to some UK debit cards.|
|number|string|false|none|The card number without any separators.<br><br>For security, the response only includes the last four digits of the card number.|
|startMonth|string|false|none|The month when the card was issued. Applies only to some UK debit cards.<br><br>Format: two digits. Add a leading zero for single-digit months. For example:<br>* 03 = March<br>* 11 = November|
|startYear|string|false|none|The year when the card was issued. Applies only to some UK debit cards.<br><br>Format: four digits. For example: 2020|
|storedPaymentMethodId|string|false|none|The unique [token](/payouts/payout-service/pay-out-to-cards/manage-card-information#save-card-details) created to identify the counterparty.<br><br>|

<h2 id="tocS_ConfirmationTrackingData">ConfirmationTrackingData</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmationtrackingdata"></a>
<a id="schema_ConfirmationTrackingData"></a>
<a id="tocSconfirmationtrackingdata"></a>
<a id="tocsconfirmationtrackingdata"></a>

```json
{
  "status": "credited",
  "type": "confirmation"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status of the transfer.<br><br>Possible values:<br><br> - **credited**: the funds are credited to your user's transfer instrument or bank account.- **accepted**: the request is accepted by the integration.|
|type|string|true|none|The type of the tracking event.<br><br>Possible values:<br><br> - **confirmation**: the transfer passed Adyen's internal review.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|credited|
|status|accepted|
|type|confirmation|

<h2 id="tocS_CounterpartyInfoV3">CounterpartyInfoV3</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartyinfov3"></a>
<a id="schema_CounterpartyInfoV3"></a>
<a id="tocScounterpartyinfov3"></a>
<a id="tocscounterpartyinfov3"></a>

```json
{
  "balanceAccountId": "string",
  "bankAccount": {
    "accountHolder": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dateOfBirth": "1970-01-01",
      "email": "string",
      "firstName": "string",
      "fullName": "string",
      "lastName": "string",
      "reference": "string",
      "type": "unknown",
      "url": "string"
    },
    "accountIdentification": {
      "accountNumber": "string",
      "bsbCode": "string",
      "type": "auLocal"
    },
    "storedPaymentMethodId": "string"
  },
  "card": {
    "cardHolder": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dateOfBirth": "1970-01-01",
      "email": "string",
      "firstName": "string",
      "fullName": "string",
      "lastName": "string",
      "reference": "string",
      "type": "unknown",
      "url": "string"
    },
    "cardIdentification": {
      "expiryMonth": "st",
      "expiryYear": "stri",
      "issueNumber": "st",
      "number": "string",
      "startMonth": "st",
      "startYear": "stri",
      "storedPaymentMethodId": "string"
    }
  },
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the counterparty [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).|
|bankAccount|[BankAccountV3](#schemabankaccountv3)|false|none|Contains information about the counterparty bank account.|
|card|[Card](#schemacard)|false|none|Contains information about the counterparty card.|
|transferInstrumentId|string|false|none|The unique identifier of the counterparty [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).|

<h2 id="tocS_CounterpartyV3">CounterpartyV3</h2>
<!-- backwards compatibility -->
<a id="schemacounterpartyv3"></a>
<a id="schema_CounterpartyV3"></a>
<a id="tocScounterpartyv3"></a>
<a id="tocscounterpartyv3"></a>

```json
{
  "balanceAccountId": "string",
  "bankAccount": {
    "accountHolder": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dateOfBirth": "1970-01-01",
      "email": "string",
      "firstName": "string",
      "fullName": "string",
      "lastName": "string",
      "reference": "string",
      "type": "unknown",
      "url": "string"
    },
    "accountIdentification": {
      "accountNumber": "string",
      "bsbCode": "string",
      "type": "auLocal"
    },
    "storedPaymentMethodId": "string"
  },
  "card": {
    "cardHolder": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dateOfBirth": "1970-01-01",
      "email": "string",
      "firstName": "string",
      "fullName": "string",
      "lastName": "string",
      "reference": "string",
      "type": "unknown",
      "url": "string"
    },
    "cardIdentification": {
      "expiryMonth": "st",
      "expiryYear": "stri",
      "issueNumber": "st",
      "number": "string",
      "startMonth": "st",
      "startYear": "stri",
      "storedPaymentMethodId": "string"
    }
  },
  "merchant": {
    "acquirerId": "string",
    "mcc": "string",
    "merchantId": "string",
    "nameLocation": {
      "city": "string",
      "country": "string",
      "countryOfOrigin": "string",
      "name": "string",
      "rawData": "string",
      "state": "string"
    },
    "postalCode": "string"
  },
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the counterparty [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).|
|bankAccount|[BankAccountV3](#schemabankaccountv3)|false|none|Contains information about the counterparty bank account.|
|card|[Card](#schemacard)|false|none|Contains information about the counterparty card.|
|merchant|[MerchantData](#schemamerchantdata)|false|none|Contains information about the merchant.|
|transferInstrumentId|string|false|none|The unique identifier of the counterparty [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).|

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

<h2 id="tocS_DirectDebitInformation">DirectDebitInformation</h2>
<!-- backwards compatibility -->
<a id="schemadirectdebitinformation"></a>
<a id="schema_DirectDebitInformation"></a>
<a id="tocSdirectdebitinformation"></a>
<a id="tocsdirectdebitinformation"></a>

```json
{
  "dateOfSignature": "1970-01-01T00:00:00Z",
  "dueDate": "1970-01-01T00:00:00Z",
  "mandateId": "string",
  "sequenceType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateOfSignature|string(date-time)|false|none|The date when the direct debit mandate was accepted by your user, in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format.|
|dueDate|string(date-time)|false|none|The date when the funds are deducted from your user's balance account.|
|mandateId|string|false|none|Your unique identifier for the direct debit mandate.|
|sequenceType|string|false|none|Identifies the direct debit transfer's type.<br>Possible values: **OneOff**, **First**, **Recurring**, **Final**.|

<h2 id="tocS_EstimationTrackingData">EstimationTrackingData</h2>
<!-- backwards compatibility -->
<a id="schemaestimationtrackingdata"></a>
<a id="schema_EstimationTrackingData"></a>
<a id="tocSestimationtrackingdata"></a>
<a id="tocsestimationtrackingdata"></a>

```json
{
  "estimatedArrivalTime": "1970-01-01T00:00:00Z",
  "type": "estimation"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimatedArrivalTime|string(date-time)|true|none|The estimated time the beneficiary should have access to the funds.|
|type|string|true|none|The type of tracking event. <br><br>Possible values: <br><br>- **estimation**: the estimated date and time of when the funds will be credited has been determined.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|estimation|

<h2 id="tocS_ExecutionDate">ExecutionDate</h2>
<!-- backwards compatibility -->
<a id="schemaexecutiondate"></a>
<a id="schema_ExecutionDate"></a>
<a id="tocSexecutiondate"></a>
<a id="tocsexecutiondate"></a>

```json
{
  "date": "1970-01-01",
  "timezone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date)|false|none|The date when the transfer will be processed. This date must be:<br>* Within 30 days of the current date.<br>* In the [ISO 8601 format](https://www.iso.org/iso-8601-date-and-time-format.html) **YYYY-MM-DD**. For example: 2025-01-31|
|timezone|string|false|none|The timezone that applies to the execution date. Use a timezone identifier from the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).<br><br>Example: **America/Los_Angeles**.<br> Default value: **Europe/Amsterdam**.|

<h2 id="tocS_ExternalReason">ExternalReason</h2>
<!-- backwards compatibility -->
<a id="schemaexternalreason"></a>
<a id="schema_ExternalReason"></a>
<a id="tocSexternalreason"></a>
<a id="tocsexternalreason"></a>

```json
{
  "code": "string",
  "description": "string",
  "namespace": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The reason code.|
|description|string|false|none|The description of the reason code.|
|namespace|string|false|none|The namespace for the reason code.|

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
|amount|[Amount](#schemaamount)|true|none|Contains the fee amount.|

<h2 id="tocS_FindTransfersResponse">FindTransfersResponse</h2>
<!-- backwards compatibility -->
<a id="schemafindtransfersresponse"></a>
<a id="schema_FindTransfersResponse"></a>
<a id="tocSfindtransfersresponse"></a>
<a id="tocsfindtransfersresponse"></a>

```json
{
  "_links": {
    "next": {
      "href": "string"
    },
    "prev": {
      "href": "string"
    }
  },
  "data": [
    {
      "accountHolder": {
        "description": "string",
        "id": "string",
        "reference": "string"
      },
      "amount": {
        "currency": "string",
        "value": 0
      },
      "balanceAccount": {
        "description": "string",
        "id": "string",
        "reference": "string"
      },
      "balancePlatform": "string",
      "balances": [
        {
          "balance": 0,
          "currency": "string",
          "received": 0,
          "reserved": 0
        }
      ],
      "category": "bank",
      "categoryData": {
        "priority": "crossBorder",
        "type": "bank"
      },
      "counterparty": {
        "balanceAccountId": "string",
        "bankAccount": {
          "accountHolder": {
            "address": {
              "city": "string",
              "country": "string",
              "line1": "string",
              "line2": "string",
              "postalCode": "string",
              "stateOrProvince": "string"
            },
            "dateOfBirth": "1970-01-01",
            "email": "string",
            "firstName": "string",
            "fullName": "string",
            "lastName": "string",
            "reference": "string",
            "type": "unknown",
            "url": "string"
          },
          "accountIdentification": {
            "accountNumber": "string",
            "bsbCode": "string",
            "type": "auLocal"
          },
          "storedPaymentMethodId": "string"
        },
        "card": {
          "cardHolder": {
            "address": {
              "city": "string",
              "country": "string",
              "line1": "string",
              "line2": "string",
              "postalCode": "string",
              "stateOrProvince": "string"
            },
            "dateOfBirth": "1970-01-01",
            "email": "string",
            "firstName": "string",
            "fullName": "string",
            "lastName": "string",
            "reference": "string",
            "type": "unknown",
            "url": "string"
          },
          "cardIdentification": {
            "expiryMonth": "st",
            "expiryYear": "stri",
            "issueNumber": "st",
            "number": "string",
            "startMonth": "st",
            "startYear": "stri",
            "storedPaymentMethodId": "string"
          }
        },
        "merchant": {
          "acquirerId": "string",
          "city": "string",
          "country": "string",
          "countryCode": "string",
          "mcc": "string",
          "merchantId": "string",
          "name": "string",
          "postalCode": "string"
        },
        "transferInstrumentId": "string"
      },
      "createdAt": "1970-01-01T00:00:00Z",
      "creationDate": "1970-01-01T00:00:00Z",
      "description": "string",
      "directDebitInformation": {
        "dateOfSignature": "1970-01-01T00:00:00Z",
        "dueDate": "1970-01-01T00:00:00Z",
        "mandateId": "string",
        "sequenceType": "string"
      },
      "direction": "incoming",
      "eventId": "string",
      "events": [
        {
          "amount": {
            "currency": "string",
            "value": 0
          },
          "amountAdjustments": [
            {
              "amount": {
                "currency": "string",
                "value": 0
              },
              "amountAdjustmentType": "atmMarkup",
              "basepoints": 0
            }
          ],
          "arn": "string",
          "bookingDate": "1970-01-01T00:00:00Z",
          "estimatedArrivalTime": "1970-01-01T00:00:00Z",
          "eventsData": [
            {
              "interchangeAmount": {
                "currency": "string",
                "value": 0
              },
              "interchangeRateIndicator": "string",
              "type": "interchangeData"
            }
          ],
          "externalReason": {
            "code": "string",
            "description": "string",
            "namespace": "string"
          },
          "id": "string",
          "modification": {
            "direction": "string",
            "id": "string",
            "reference": "string",
            "status": "approvalPending",
            "type": "string"
          },
          "mutations": [
            {
              "balance": 0,
              "currency": "string",
              "received": 0,
              "reserved": 0
            }
          ],
          "originalAmount": {
            "currency": "string",
            "value": 0
          },
          "reason": "accountHierarchyNotActive",
          "status": "approvalPending",
          "tracingData": {
            "fpid": "string",
            "type": "ukFps"
          },
          "trackingData": {
            "status": "credited",
            "type": "confirmation"
          },
          "transactionId": "string",
          "type": "accounting",
          "updateDate": "1970-01-01T00:00:00Z",
          "valueDate": "1970-01-01T00:00:00Z"
        }
      ],
      "executionDate": {
        "date": "1970-01-01",
        "timezone": "string"
      },
      "externalReason": {
        "code": "string",
        "description": "string",
        "namespace": "string"
      },
      "id": "string",
      "networkReason": {
        "code": "string",
        "description": "string",
        "namespace": "iso8583ResponseCode"
      },
      "paymentInstrument": {
        "description": "string",
        "id": "string",
        "reference": "string",
        "tokenType": "string"
      },
      "reason": "accountHierarchyNotActive",
      "reference": "string",
      "referenceForBeneficiary": "string",
      "review": {
        "numberOfApprovalsRequired": 0,
        "scaOnApproval": "completed"
      },
      "sequenceNumber": 0,
      "status": "approvalPending",
      "tracing": {
        "fpid": "string",
        "type": "ukFps"
      },
      "tracking": {
        "status": "credited",
        "type": "confirmation"
      },
      "transactionRulesResult": {
        "advice": "string",
        "allHardBlockRulesPassed": true,
        "score": 0,
        "triggeredTransactionRules": [
          {
            "reason": "string",
            "transactionRule": {
              "description": "string",
              "id": "string",
              "outcomeType": "string",
              "reference": "string",
              "score": 0
            },
            "transactionRuleSource": {
              "id": "string",
              "type": "string"
            }
          }
        ]
      },
      "type": "payment",
      "ultimateParty": {
        "address": {
          "city": "string",
          "country": "string",
          "line1": "string",
          "line2": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "dateOfBirth": "1970-01-01",
        "email": "string",
        "firstName": "string",
        "fullName": "string",
        "fundingInstrument": {
          "cardIdentification": {
            "expiryMonth": "st",
            "expiryYear": "stri",
            "issueNumber": "st",
            "number": "string",
            "startMonth": "st",
            "startYear": "stri",
            "storedPaymentMethodId": "string"
          },
          "networkPaymentReference": "string",
          "reference": "string",
          "sourceOfFunds": "DEBIT"
        },
        "lastName": "string",
        "reference": "string",
        "type": "unknown",
        "url": "string"
      },
      "updatedAt": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[Links](#schemalinks)|false|none|Contains links to the next and previous page whenever applicable.|
|data|[[TransferData](#schematransferdata)]|false|none|Contains the transfers that match the query parameters.|

<h2 id="tocS_FundingInstrument">FundingInstrument</h2>
<!-- backwards compatibility -->
<a id="schemafundinginstrument"></a>
<a id="schema_FundingInstrument"></a>
<a id="tocSfundinginstrument"></a>
<a id="tocsfundinginstrument"></a>

```json
{
  "cardIdentification": {
    "expiryMonth": "st",
    "expiryYear": "stri",
    "issueNumber": "st",
    "number": "string",
    "startMonth": "st",
    "startYear": "stri",
    "storedPaymentMethodId": "string"
  },
  "networkPaymentReference": "string",
  "reference": "string",
  "sourceOfFunds": "DEBIT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardIdentification|[CardIdentification](#schemacardidentification)|false|none|Card details used for the transfer, such as the Primary Account Number (PAN) or stored payment method ID. Required if `sourceOfFunds` is **DEBIT**. Provide either:<br> - `storedPaymentMethodId` or <br> - `expiryMonth`, `expiryYear`, and `number`.|
|networkPaymentReference|string|false|none|The unique reference assigned by the card network for the pay-in transaction.|
|reference|string|false|none|Your internal reference that identifies this funding instrument. Required if `sourceOfFunds` is **DEPOSIT_ACCOUNT**.|
|sourceOfFunds|string|false|none|Indicates where the funds used for the transfer originated. Possible values are:<br>- **DEBIT** for card-to-card transfers.<br>- **DEPOSIT_ACCOUNT** for wallet-to-card transfers.|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceOfFunds|DEBIT|
|sourceOfFunds|DEPOSIT_ACCOUNT|

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
|accountHolderId|string|false|none|The identifier of the receiving account holder.|
|balanceAccountId|string|false|none|The identifier of the balance account that belongs to the receiving account holder.|
|transferInstrumentId|string|false|none|The identifier of the transfer instrument that belongs to the legal entity of the account holder.|

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
|balanceAccountId|string|false|none|The identifier of the balance account that belongs to the receiving account holder.|
|transferInstrumentId|string|false|none|The identifier of the transfer instrument that belongs to the legal entity of the account holder.|

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

<h2 id="tocS_InterchangeData">InterchangeData</h2>
<!-- backwards compatibility -->
<a id="schemainterchangedata"></a>
<a id="schema_InterchangeData"></a>
<a id="tocSinterchangedata"></a>
<a id="tocsinterchangedata"></a>

```json
{
  "interchangeAmount": {
    "currency": "string",
    "value": 0
  },
  "interchangeRateIndicator": "string",
  "type": "interchangeData"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interchangeAmount|[Amount](#schemaamount)|false|none|The currency and value of the adjusted interchange fee.|
|interchangeRateIndicator|string|false|none|A 3-character alphanumeric code assigned by Visa that identifies the specific interchange reimbursement program a transaction qualified for. The code is assigned based on the card type, entry mode, and security data provided.|
|type|string|true|none|The type of events data. <br><br>Possible values: <br><br> - **interchangeData**: information about the interchange fee applied to a transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|interchangeData|

<h2 id="tocS_InternalCategoryData">InternalCategoryData</h2>
<!-- backwards compatibility -->
<a id="schemainternalcategorydata"></a>
<a id="schema_InternalCategoryData"></a>
<a id="tocSinternalcategorydata"></a>
<a id="tocsinternalcategorydata"></a>

```json
{
  "modificationMerchantReference": "string",
  "modificationPspReference": "string",
  "type": "internal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modificationMerchantReference|string|false|none|The capture's merchant reference included in the transfer.|
|modificationPspReference|string|false|none|The capture reference included in the transfer.|
|type|string|false|none|**internal**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|internal|

<h2 id="tocS_InternalReviewTrackingData">InternalReviewTrackingData</h2>
<!-- backwards compatibility -->
<a id="schemainternalreviewtrackingdata"></a>
<a id="schema_InternalReviewTrackingData"></a>
<a id="tocSinternalreviewtrackingdata"></a>
<a id="tocsinternalreviewtrackingdata"></a>

```json
{
  "reason": "refusedForRegulatoryReasons",
  "status": "pending",
  "type": "internalReview"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason why the transfer failed Adyen's internal review. <br><br>Possible values:<br><br>- **refusedForRegulatoryReasons**: the transfer does not comply with Adyen's risk policy. For more information, [contact the Support Team](https://www.adyen.help/hc/en-us/requests/new). |
|status|string|true|none|The status of the transfer.<br><br>Possible values:<br><br> - **pending**: the transfer is under internal review by Adyen.<br><br>- **failed**: the transfer failed Adyen's internal review. For details, see `reason`.<br><br>|
|type|string|true|none|The type of tracking event. <br><br>Possible values: <br><br> - **internalReview**: the transfer was flagged because it does not comply with Adyen's risk policy.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|refusedForRegulatoryReasons|
|status|pending|
|status|failed|
|type|internalReview|

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

<h2 id="tocS_IssuedCard">IssuedCard</h2>
<!-- backwards compatibility -->
<a id="schemaissuedcard"></a>
<a id="schema_IssuedCard"></a>
<a id="tocSissuedcard"></a>
<a id="tocsissuedcard"></a>

```json
{
  "authorisationType": "string",
  "networkVariant": "maestro_us",
  "panEntryMode": "chip",
  "processingType": "atmWithdraw",
  "relayedAuthorisationData": {
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "reference": "string"
  },
  "schemeTraceId": "string",
  "schemeUniqueTransactionId": "string",
  "threeDSecure": {
    "acsTransactionId": "string"
  },
  "type": "issuedCard",
  "validationFacts": [
    {
      "result": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorisationType|string|false|none|The authorisation type. For example, **defaultAuthorisation**, **preAuthorisation**, **finalAuthorisation**|
|networkVariant|string|false|none|The card variant associated with the payment network used to route or process the transaction. For single-network cards, this matches the `brandVariant`. For US dual-network cards routed over an alternate network, this value reflects the specific tier or sub-type under that processing network.|
|panEntryMode|string|false|none|Indicates the method used for entering the PAN to initiate a transaction.<br><br>Possible values: **manual**, **chip**, **magstripe**, **contactless**, **cof**, **ecommerce**, **token**.|
|processingType|string|false|none|Contains information about how the payment was processed.<br><br>Possible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **purchaseWithCashback**, **recurring**, **token**.|
|relayedAuthorisationData|[RelayedAuthorisationData](#schemarelayedauthorisationdata)|false|none|If you are using relayed authorisation, this object contains information from the relayed authorisation response from your server.|
|schemeTraceId|string|false|none|The identifier of the original payment. This ID is provided by the scheme and can be alphanumeric or numeric, depending on the scheme. The `schemeTraceID` should refer to an original `schemeUniqueTransactionID` provided in an earlier payment (not necessarily processed by Adyen). A `schemeTraceId` is typically available for authorization adjustments or recurring payments.|
|schemeUniqueTransactionId|string|false|none|The unique identifier created by the scheme. This ID can be alphanumeric or numeric depending on the scheme.|
|threeDSecure|[ThreeDSecure](#schemathreedsecure)|false|none|The data of the result from the 3DS authentication.|
|type|string|false|none|**issuedCard**|
|validationFacts|[[TransferNotificationValidationFact](#schematransfernotificationvalidationfact)]|false|none|The evaluation of the validation facts. See [validation checks](https://docs.adyen.com/issuing/validation-checks) for more information.|

#### Enumerated Values

|Property|Value|
|---|---|
|networkVariant|maestro_us|
|networkVariant|mastercard|
|networkVariant|visa|
|panEntryMode|chip|
|panEntryMode|cof|
|panEntryMode|contactless|
|panEntryMode|ecommerce|
|panEntryMode|magstripe|
|panEntryMode|manual|
|panEntryMode|token|
|processingType|atmWithdraw|
|processingType|balanceInquiry|
|processingType|ecommerce|
|processingType|moto|
|processingType|pos|
|processingType|purchaseWithCashback|
|processingType|recurring|
|processingType|token|
|type|issuedCard|

<h2 id="tocS_IssuingTransactionData">IssuingTransactionData</h2>
<!-- backwards compatibility -->
<a id="schemaissuingtransactiondata"></a>
<a id="schema_IssuingTransactionData"></a>
<a id="tocSissuingtransactiondata"></a>
<a id="tocsissuingtransactiondata"></a>

```json
{
  "captureCycleId": "string",
  "type": "issuingTransactionData"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|captureCycleId|string|false|none|captureCycleId associated with transfer event.|
|type|string|true|none|The type of events data. <br><br>Possible values: <br><br> - **issuingTransactionData**: issuing transaction data|

#### Enumerated Values

|Property|Value|
|---|---|
|type|issuingTransactionData|

<h2 id="tocS_JSONObject">JSONObject</h2>
<!-- backwards compatibility -->
<a id="schemajsonobject"></a>
<a id="schema_JSONObject"></a>
<a id="tocSjsonobject"></a>
<a id="tocsjsonobject"></a>

```json
{}
```

<h2 id="tocS_Leg">Leg</h2>
<!-- backwards compatibility -->
<a id="schemaleg"></a>
<a id="schema_Leg"></a>
<a id="tocSleg"></a>
<a id="tocsleg"></a>

```json
{
  "arrivalAirportCode": "string",
  "basicFareCode": "string",
  "carrierCode": "string",
  "departureAirportCode": "string",
  "departureDate": "string",
  "flightNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arrivalAirportCode|string|false|none|The IATA 3-letter airport code of the destination airport. This field is required if the airline data includes leg details.|
|basicFareCode|string|false|none|The basic fare code for this leg.|
|carrierCode|string|false|none|IATA code of the carrier operating the flight.|
|departureAirportCode|string|false|none|The IATA three-letter airport code of the departure airport. This field is required if the airline data includes leg details|
|departureDate|string|false|none|The flight departure date.|
|flightNumber|string|false|none|The flight identifier.|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "href": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|The link to the resource.|

<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "next": {
    "href": "string"
  },
  "prev": {
    "href": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[Link](#schemalink)|false|none|Contains a link to the next page.|
|prev|[Link](#schemalink)|false|none|Contains a link to the previous page.|

<h2 id="tocS_Lodging">Lodging</h2>
<!-- backwards compatibility -->
<a id="schemalodging"></a>
<a id="schema_Lodging"></a>
<a id="tocSlodging"></a>
<a id="tocslodging"></a>

```json
{
  "checkInDate": "string",
  "numberOfNights": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkInDate|string|false|none|The check-in date.|
|numberOfNights|integer(int32)|false|none|The total number of nights the room is booked for.|

<h2 id="tocS_MerchantData">MerchantData</h2>
<!-- backwards compatibility -->
<a id="schemamerchantdata"></a>
<a id="schema_MerchantData"></a>
<a id="tocSmerchantdata"></a>
<a id="tocsmerchantdata"></a>

```json
{
  "acquirerId": "string",
  "mcc": "string",
  "merchantId": "string",
  "nameLocation": {
    "city": "string",
    "country": "string",
    "countryOfOrigin": "string",
    "name": "string",
    "rawData": "string",
    "state": "string"
  },
  "postalCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquirerId|string|false|none|The unique identifier of the merchant's acquirer.|
|mcc|string|false|none|The merchant category code.|
|merchantId|string|false|none|The unique identifier of the merchant.|
|nameLocation|[NameLocation](#schemanamelocation)|false|none|Contains the name and location of the merchant.|
|postalCode|string|false|none|The postal code of the merchant.|

<h2 id="tocS_MerchantPurchaseData">MerchantPurchaseData</h2>
<!-- backwards compatibility -->
<a id="schemamerchantpurchasedata"></a>
<a id="schema_MerchantPurchaseData"></a>
<a id="tocSmerchantpurchasedata"></a>
<a id="tocsmerchantpurchasedata"></a>

```json
{
  "airline": {
    "legs": [
      {
        "arrivalAirportCode": "string",
        "basicFareCode": "string",
        "carrierCode": "string",
        "departureAirportCode": "string",
        "departureDate": "string",
        "flightNumber": "string"
      }
    ],
    "ticketNumber": "string"
  },
  "lodging": [
    {
      "checkInDate": "string",
      "numberOfNights": 0
    }
  ],
  "type": "merchantPurchaseData"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|airline|[Airline](#schemaairline)|false|none|Airline information.|
|lodging|[[Lodging](#schemalodging)]|false|none|Lodging information.|
|type|string|true|none|The type of events data. <br><br>Possible values: <br><br> - **merchantPurchaseData**: merchant purchase data|

#### Enumerated Values

|Property|Value|
|---|---|
|type|merchantPurchaseData|

<h2 id="tocS_Modification">Modification</h2>
<!-- backwards compatibility -->
<a id="schemamodification"></a>
<a id="schema_Modification"></a>
<a id="tocSmodification"></a>
<a id="tocsmodification"></a>

```json
{
  "direction": "string",
  "id": "string",
  "reference": "string",
  "status": "approvalPending",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|direction|string|false|none|The direction of the money movement.|
|id|string|false|none|Our reference for the modification.|
|reference|string|false|none|Your reference for the modification, used internally within your platform.|
|status|string|false|none|The status of the transfer event.|
|type|string|false|none|The type of transfer modification.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|approvalPending|
|status|atmWithdrawal|
|status|atmWithdrawalReversalPending|
|status|atmWithdrawalReversed|
|status|authAdjustmentAuthorised|
|status|authAdjustmentError|
|status|authAdjustmentRefused|
|status|authorised|
|status|bankTransfer|
|status|bankTransferPending|
|status|booked|
|status|bookingPending|
|status|cancelled|
|status|capturePending|
|status|captureReversalPending|
|status|captureReversed|
|status|captured|
|status|capturedExternally|
|status|chargeback|
|status|chargebackExternally|
|status|chargebackPending|
|status|chargebackReversalPending|
|status|chargebackReversed|
|status|credited|
|status|depositCorrection|
|status|depositCorrectionPending|
|status|dispute|
|status|disputeClosed|
|status|disputeExpired|
|status|disputeNeedsReview|
|status|error|
|status|expired|
|status|failed|
|status|fee|
|status|feePending|
|status|interchangeAdjusted|
|status|internalTransfer|
|status|internalTransferPending|
|status|invoiceDeduction|
|status|invoiceDeductionPending|
|status|manualCorrectionPending|
|status|manuallyCorrected|
|status|matchedStatement|
|status|matchedStatementPending|
|status|merchantPayin|
|status|merchantPayinPending|
|status|merchantPayinReversed|
|status|merchantPayinReversedPending|
|status|miscCost|
|status|miscCostPending|
|status|paymentCost|
|status|paymentCostPending|
|status|pending|
|status|pendingApproval|
|status|pendingExecution|
|status|received|
|status|refundPending|
|status|refundReversalPending|
|status|refundReversed|
|status|refunded|
|status|refundedExternally|
|status|refused|
|status|rejected|
|status|reserveAdjustment|
|status|reserveAdjustmentPending|
|status|returned|
|status|reversalReceived|
|status|reversed|
|status|secondChargeback|
|status|secondChargebackPending|
|status|undefined|

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

<h2 id="tocS_NameLocation">NameLocation</h2>
<!-- backwards compatibility -->
<a id="schemanamelocation"></a>
<a id="schema_NameLocation"></a>
<a id="tocSnamelocation"></a>
<a id="tocsnamelocation"></a>

```json
{
  "city": "string",
  "country": "string",
  "countryOfOrigin": "string",
  "name": "string",
  "rawData": "string",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city where the merchant is located.|
|country|string|false|none|The country where the merchant is located in [three-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.|
|countryOfOrigin|string|false|none|The home country in [three-digit country code](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) format, used for government-controlled merchants such as embassies.|
|name|string|false|none|The name of the merchant's shop or service.|
|rawData|string|false|none|The raw data.|
|state|string|false|none|The state where the merchant is located.|

<h2 id="tocS_NetworkReason">NetworkReason</h2>
<!-- backwards compatibility -->
<a id="schemanetworkreason"></a>
<a id="schema_NetworkReason"></a>
<a id="tocSnetworkreason"></a>
<a id="tocsnetworkreason"></a>

```json
{
  "code": "string",
  "description": "string",
  "namespace": "iso8583ResponseCode"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The network-specific reason code. Use `namespace` to identify the code set.|
|description|string|false|none|A human-readable description of the reason code.|
|namespace|string|false|none|The category of codes that `code` belongs to. The `namespace` identifies the payment network and the type of reason<br><br>Possible values:<br>*  **ukFpsRejectionCode** : Reason code for a rejected Faster Payments transfer.<br>*  **ukFpsReturnReasonCode** : Reason code for a returned Faster Payments transfer.<br>*  **usAchReturnReasonCode** : Reason code for a returned ACH transfer.<br>*  **usAchCorrectionReasonCode** : Reason code for an ACH Notification of Change.<br>*  **iso8583ResponseCode** : ISO 8583 response code for a card transfer.<br><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|namespace|iso8583ResponseCode|
|namespace|ukFpsRejectionCode|
|namespace|ukFpsReturnReasonCode|
|namespace|usAchCorrectionReasonCode|
|namespace|usAchReturnReasonCode|

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

<h2 id="tocS_PartyIdentification">PartyIdentification</h2>
<!-- backwards compatibility -->
<a id="schemapartyidentification"></a>
<a id="schema_PartyIdentification"></a>
<a id="tocSpartyidentification"></a>
<a id="tocspartyidentification"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "line1": "string",
    "line2": "string",
    "postalCode": "string",
    "stateOrProvince": "string"
  },
  "dateOfBirth": "1970-01-01",
  "email": "string",
  "firstName": "string",
  "fullName": "string",
  "lastName": "string",
  "reference": "string",
  "type": "unknown",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|The address of the bank account or card owner.|
|dateOfBirth|string(date)|false|none|The date of birth of the individual in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. For example, **YYYY-MM-DD**.<br><br>Allowed only when `type` is **individual**.|
|email|string|false|none|The email address of the organization or individual. Maximum length: 254 characters.|
|firstName|string|false|none|The first name of the individual.<br><br>Supported characters: [a-z] [A-Z] - . / — and space.<br><br>This parameter is:<br>- Allowed only when `type` is **individual**.<br>- Required when `category` is **card**.|
|fullName|string|false|none|The full name of the entity that owns the bank account or card.<br><br>Supported characters: [a-z] [A-Z] [0-9] , . ; : - — / \ + & ! ? @ ( ) " ' and space.<br><br>Required when `category` is **bank**.|
|lastName|string|false|none|The last name of the individual.<br><br>Supported characters: [a-z] [A-Z] - . / — and space.<br><br>This parameter is:<br>- Allowed only when `type` is **individual**.<br>- Required when `category` is **card**.|
|reference|string|false|none|A unique reference to identify the party or counterparty involved in the transfer. For example, your client's unique wallet or payee ID.<br><br>Required when you include `cardIdentification.storedPaymentMethodId`.|
|type|string|false|none|The type of entity that owns the bank account or card.<br><br>Possible values: **individual**, **organization**, or **unknown**.<br><br>Required when `category` is **card**. In this case, the value must be **individual**.|
|url|string|false|none|The URL of the organization or individual. Maximum length: 255 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|individual|
|type|organization|
|type|unknown|

<h2 id="tocS_PaymentInstrument">PaymentInstrument</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstrument"></a>
<a id="schema_PaymentInstrument"></a>
<a id="tocSpaymentinstrument"></a>
<a id="tocspaymentinstrument"></a>

```json
{
  "description": "string",
  "id": "string",
  "reference": "string",
  "tokenType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the resource.|
|id|string|false|none|The unique identifier of the resource.|
|reference|string|false|none|The reference for the resource.|
|tokenType|string|false|none|The type of wallet that the network token is associated with.|

<h2 id="tocS_PlatformPayment">PlatformPayment</h2>
<!-- backwards compatibility -->
<a id="schemaplatformpayment"></a>
<a id="schema_PlatformPayment"></a>
<a id="tocSplatformpayment"></a>
<a id="tocsplatformpayment"></a>

```json
{
  "modificationMerchantReference": "string",
  "modificationPspReference": "string",
  "paymentMerchantReference": "string",
  "platformPaymentType": "AcquiringFees",
  "pspPaymentReference": "string",
  "type": "platformPayment"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modificationMerchantReference|string|false|none|The capture's merchant reference included in the transfer.|
|modificationPspReference|string|false|none|The capture reference included in the transfer.|
|paymentMerchantReference|string|false|none|The payment's merchant reference included in the transfer.|
|platformPaymentType|string|false|none|Specifies the nature of the transfer. This parameter helps categorize transfers so you can reconcile transactions at a later time, using the Balance Platform Accounting Report for [marketplaces](https://docs.adyen.com/marketplaces/reports-and-fees/balance-platform-accounting-report/) or [platforms](https://docs.adyen.com/platforms/reports-and-fees/balance-platform-accounting-report/).<br><br>Possible values:<br><br>* **AcquiringFees**: The acquiring fee (the aggregated amount of interchange and scheme fee) incurred on a transaction.<br><br>* **AdyenCommission**: The transaction fee due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/guides/payments-training-guide/get-the-best-from-your-card-processing).<br><br>* **AdyenFees**: All transaction fees due to Adyen. This is the aggregated amount of Adyen's commission and markup.<br><br>* **AdyenMarkup**: The transaction fee due to Adyen under [Interchange++ pricing](https://www.adyen.com/pricing).<br><br>* **BalanceAccount**: The amount booked to your user after the deduction of the relevant fees.<br><br>* **Commission**: Your platform's or marketplace's commission on a transaction.<br><br>* **DCCPlatformCommission**: **deprecated** The Dynamic Currency Conversion (DCC) fee on a transaction.<br><br>* **DCCMarkup**: The Dynamic Currency Conversion (DCC) fee on a transaction.<br><br>* **Interchange**: The interchange fee (fee paid to the issuer) incurred on a transaction.<br><br>* **PaymentFee**: The aggregated amount of all transaction fees.<br><br>* **Remainder**: The leftover amount after currency conversion.<br><br>* **SchemeFee**: The scheme fee incurred on a transaction.<br><br>* **Surcharge**: The surcharge paid by the customer on a transaction.<br><br>* **Tip**: The tip paid by the customer.<br><br>* **TopUp**: An incoming transfer to top up your user's balance account.<br><br>* **VAT**: The value-added tax charged on the payment.|
|pspPaymentReference|string|false|none|The payment reference included in the transfer.|
|type|string|false|none|**platformPayment**|

#### Enumerated Values

|Property|Value|
|---|---|
|platformPaymentType|AcquiringFees|
|platformPaymentType|AdyenCommission|
|platformPaymentType|AdyenFees|
|platformPaymentType|AdyenMarkup|
|platformPaymentType|BalanceAccount|
|platformPaymentType|ChargebackRemainder|
|platformPaymentType|Commission|
|platformPaymentType|DCCMarkup|
|platformPaymentType|DCCPlatformCommission|
|platformPaymentType|Default|
|platformPaymentType|Interchange|
|platformPaymentType|PaymentFee|
|platformPaymentType|Remainder|
|platformPaymentType|SchemeFee|
|platformPaymentType|Surcharge|
|platformPaymentType|Tip|
|platformPaymentType|TopUp|
|platformPaymentType|VAT|
|type|platformPayment|

<h2 id="tocS_RelayedAuthorisationData">RelayedAuthorisationData</h2>
<!-- backwards compatibility -->
<a id="schemarelayedauthorisationdata"></a>
<a id="schema_RelayedAuthorisationData"></a>
<a id="tocSrelayedauthorisationdata"></a>
<a id="tocsrelayedauthorisationdata"></a>

```json
{
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Contains key-value pairs of your references and descriptions, for example, `customId`:`your-own-custom-field-12345`.|
|reference|string|false|none|Your reference for the relayed authorisation data.|

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
|basisPoints|integer(int32)|true|none|The repayment that is deducted daily from incoming net volume, in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).|
|term|[RepaymentTerm](#schemarepaymentterm)|false|none|An object containing the details of the configuration for repayment term.|
|threshold|[ThresholdRepayment](#schemathresholdrepayment)|false|none|An object containing the details of the 30-day repayment threshold.|

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
|estimatedDays|integer(int32)|true|none|The estimated term for repaying the grant, in days.|
|maximumDays|integer(int32)|false|none|The maximum term for repaying the grant, in days. Only applies when `contractType` is **loan**.|

<h2 id="tocS_ResourceReference">ResourceReference</h2>
<!-- backwards compatibility -->
<a id="schemaresourcereference"></a>
<a id="schema_ResourceReference"></a>
<a id="tocSresourcereference"></a>
<a id="tocsresourcereference"></a>

```json
{
  "description": "string",
  "id": "string",
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the resource.|
|id|string|false|none|The unique identifier of the resource.|
|reference|string|false|none|The reference for the resource.|

<h2 id="tocS_RestServiceError">RestServiceError</h2>
<!-- backwards compatibility -->
<a id="schemarestserviceerror"></a>
<a id="schema_RestServiceError"></a>
<a id="tocSrestserviceerror"></a>
<a id="tocsrestserviceerror"></a>

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
  "response": {},
  "status": 0,
  "title": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|A human-readable explanation specific to this occurrence of the problem.|
|errorCode|string|true|none|A code that identifies the problem type.|
|instance|string|false|none|A unique URI that identifies the specific occurrence of the problem.|
|invalidFields|[[InvalidField](#schemainvalidfield)]|false|none|Detailed explanation of each validation error, when applicable.|
|requestId|string|false|none|A unique reference for the request, essentially the same as `pspReference`.|
|response|[JSONObject](#schemajsonobject)|false|none|JSON response payload.|
|status|integer(int32)|true|none|The HTTP status code.|
|title|string|true|none|A short, human-readable summary of the problem type.|
|type|string|true|none|A URI that identifies the problem type, pointing to human-readable documentation on this problem type.|

<h2 id="tocS_ReturnTransferRequest">ReturnTransferRequest</h2>
<!-- backwards compatibility -->
<a id="schemareturntransferrequest"></a>
<a id="schema_ReturnTransferRequest"></a>
<a id="tocSreturntransferrequest"></a>
<a id="tocsreturntransferrequest"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  },
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|Contains information about the amount to be returned.|
|reference|string|false|none|Your internal reference for the return. If you don't provide this in the request, Adyen generates a unique reference. This reference is used in all communication with you about the instruction status.<br><br>We recommend using a unique value per instruction.<br>If you need to provide multiple references for a transaction, separate them with hyphens ("-").<br>|

<h2 id="tocS_ReturnTransferResponse">ReturnTransferResponse</h2>
<!-- backwards compatibility -->
<a id="schemareturntransferresponse"></a>
<a id="schema_ReturnTransferResponse"></a>
<a id="tocSreturntransferresponse"></a>
<a id="tocsreturntransferresponse"></a>

```json
{
  "id": "string",
  "reference": "string",
  "status": "Authorised",
  "transferId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the return.|
|reference|string|false|none|Your internal reference for the return.|
|status|string|false|none|The resulting status of the return.<br><br>Possible values: **Authorised**, **Declined**.|
|transferId|string|false|none|The unique identifier of the original transfer.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Authorised|
|status|Declined|

<h2 id="tocS_RoutingDetails">RoutingDetails</h2>
<!-- backwards compatibility -->
<a id="schemaroutingdetails"></a>
<a id="schema_RoutingDetails"></a>
<a id="tocSroutingdetails"></a>
<a id="tocsroutingdetails"></a>

```json
{
  "detail": "string",
  "errorCode": "string",
  "priority": "crossBorder",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this occurrence of the problem.|
|errorCode|string|false|none|A code that identifies the problem type.|
|priority|string|false|none|The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).|
|title|string|false|none|A short, human-readable summary of the problem type.|

#### Enumerated Values

|Property|Value|
|---|---|
|priority|crossBorder|
|priority|fast|
|priority|instant|
|priority|internal|
|priority|regular|
|priority|wire|

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

<h2 id="tocS_ThreeDSecure">ThreeDSecure</h2>
<!-- backwards compatibility -->
<a id="schemathreedsecure"></a>
<a id="schema_ThreeDSecure"></a>
<a id="tocSthreedsecure"></a>
<a id="tocsthreedsecure"></a>

```json
{
  "acsTransactionId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acsTransactionId|string|false|none|The transaction identifier for the Access Control Server|

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
|amount|[Amount](#schemaamount)|true|none|The amount to be repaid on a 30-day basis.|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "accountHolder": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "amount": {
    "currency": "string",
    "value": 0
  },
  "balanceAccount": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "balancePlatform": "string",
  "bookingDate": "1970-01-01T00:00:00Z",
  "creationDate": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "paymentInstrument": {
    "description": "string",
    "id": "string",
    "reference": "string",
    "tokenType": "string"
  },
  "referenceForBeneficiary": "string",
  "status": "booked",
  "transfer": {
    "categoryData": {
      "priority": "crossBorder",
      "type": "bank"
    },
    "id": "string",
    "reference": "string"
  },
  "valueDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[ResourceReference](#schemaresourcereference)|true|none|Contains information about the account holder associated with the `balanceAccount`.|
|amount|[Amount](#schemaamount)|true|none|Contains information about the amount of the transaction.|
|balanceAccount|[ResourceReference](#schemaresourcereference)|true|none|Contains information about the balance account involved in the transaction.|
|balancePlatform|string|true|none|The unique identifier of the balance platform.|
|bookingDate|string(date-time)|true|none|The date the transaction was booked into the balance account.|
|creationDate|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.|
|description|string|false|none|The `description` from the `/transfers` request.|
|id|string|true|none|The unique identifier of the transaction.|
|paymentInstrument|[PaymentInstrument](#schemapaymentinstrument)|false|none|Contains information about the payment instrument that was used for the transaction.|
|referenceForBeneficiary|string|false|none|The reference sent to or received from the counterparty.<br><br>* For outgoing funds, this is the [`referenceForBeneficiary`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__resParam_referenceForBeneficiary) from the  [`/transfers`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_referenceForBeneficiary) request.<br><br> * For incoming funds, this is the reference from the sender.|
|status|string|true|none|The status of the transaction.<br><br> Possible values:<br><br>* **pending**: The transaction is still pending.<br><br>* **booked**: The transaction has been booked to the balance account.<br><br>|
|transfer|[TransferView](#schematransferview)|false|none|Contains information about the transfer related to the transaction.|
|valueDate|string(date-time)|true|none|The date the transfer amount becomes available in the balance account.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|booked|
|status|pending|

<h2 id="tocS_TransactionEventViolation">TransactionEventViolation</h2>
<!-- backwards compatibility -->
<a id="schematransactioneventviolation"></a>
<a id="schema_TransactionEventViolation"></a>
<a id="tocStransactioneventviolation"></a>
<a id="tocstransactioneventviolation"></a>

```json
{
  "reason": "string",
  "transactionRule": {
    "description": "string",
    "id": "string",
    "outcomeType": "string",
    "reference": "string",
    "score": 0
  },
  "transactionRuleSource": {
    "id": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|An explanation about why the transaction rule failed.|
|transactionRule|[TransactionRuleReference](#schematransactionrulereference)|false|none|Contains information about the transaction rule.|
|transactionRuleSource|[TransactionRuleSource](#schematransactionrulesource)|false|none|Contains information about the resource to which the transaction rule applies.|

<h2 id="tocS_TransactionRuleReference">TransactionRuleReference</h2>
<!-- backwards compatibility -->
<a id="schematransactionrulereference"></a>
<a id="schema_TransactionRuleReference"></a>
<a id="tocStransactionrulereference"></a>
<a id="tocstransactionrulereference"></a>

```json
{
  "description": "string",
  "id": "string",
  "outcomeType": "string",
  "reference": "string",
  "score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the resource.|
|id|string|false|none|The unique identifier of the resource.|
|outcomeType|string|false|none|The outcome type of the rule.|
|reference|string|false|none|The reference for the resource.|
|score|integer(int32)|false|none|The transaction score determined by the rule. Returned only when `outcomeType` is **scoreBased**.|

<h2 id="tocS_TransactionRuleSource">TransactionRuleSource</h2>
<!-- backwards compatibility -->
<a id="schematransactionrulesource"></a>
<a id="schema_TransactionRuleSource"></a>
<a id="tocStransactionrulesource"></a>
<a id="tocstransactionrulesource"></a>

```json
{
  "id": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of the resource, when applicable.|
|type|string|false|none|Indicates the type of resource for which the transaction rule is defined.<br><br>Possible values:<br><br> * **PaymentInstrumentGroup**<br><br>* **PaymentInstrument**<br><br>* **BalancePlatform**<br><br>* **EntityUsageConfiguration**<br><br>* **PlatformRule**: The transaction rule is a platform-wide rule imposed by Adyen.|

<h2 id="tocS_TransactionRulesResult">TransactionRulesResult</h2>
<!-- backwards compatibility -->
<a id="schematransactionrulesresult"></a>
<a id="schema_TransactionRulesResult"></a>
<a id="tocStransactionrulesresult"></a>
<a id="tocstransactionrulesresult"></a>

```json
{
  "advice": "string",
  "allHardBlockRulesPassed": true,
  "score": 0,
  "triggeredTransactionRules": [
    {
      "reason": "string",
      "transactionRule": {
        "description": "string",
        "id": "string",
        "outcomeType": "string",
        "reference": "string",
        "score": 0
      },
      "transactionRuleSource": {
        "id": "string",
        "type": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advice|string|false|none|The advice given by the Risk analysis.|
|allHardBlockRulesPassed|boolean|false|none|Indicates whether the transaction passed the evaluation for all hardblock rules|
|score|integer(int32)|false|none|The score of the Risk analysis.|
|triggeredTransactionRules|[[TransactionEventViolation](#schematransactioneventviolation)]|false|none|Array containing all the transaction rules that the transaction triggered.|

<h2 id="tocS_TransactionSearchResponse">TransactionSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schematransactionsearchresponse"></a>
<a id="schema_TransactionSearchResponse"></a>
<a id="tocStransactionsearchresponse"></a>
<a id="tocstransactionsearchresponse"></a>

```json
{
  "_links": {
    "next": {
      "href": "string"
    },
    "prev": {
      "href": "string"
    }
  },
  "data": [
    {
      "accountHolder": {
        "description": "string",
        "id": "string",
        "reference": "string"
      },
      "amount": {
        "currency": "string",
        "value": 0
      },
      "balanceAccount": {
        "description": "string",
        "id": "string",
        "reference": "string"
      },
      "balancePlatform": "string",
      "bookingDate": "1970-01-01T00:00:00Z",
      "creationDate": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "paymentInstrument": {
        "description": "string",
        "id": "string",
        "reference": "string",
        "tokenType": "string"
      },
      "referenceForBeneficiary": "string",
      "status": "booked",
      "transfer": {
        "categoryData": {
          "priority": "crossBorder",
          "type": "bank"
        },
        "id": "string",
        "reference": "string"
      },
      "valueDate": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[Links](#schemalinks)|false|none|Contains links to the next and previous page whenever applicable.|
|data|[[Transaction](#schematransaction)]|false|none|Contains the transactions that match the query parameters.|

<h2 id="tocS_Transfer">Transfer</h2>
<!-- backwards compatibility -->
<a id="schematransfer"></a>
<a id="schema_Transfer"></a>
<a id="tocStransfer"></a>
<a id="tocstransfer"></a>

```json
{
  "accountHolder": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "amount": {
    "currency": "string",
    "value": 0
  },
  "balanceAccount": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "category": "bank",
  "categoryData": {
    "priority": "crossBorder",
    "type": "bank"
  },
  "counterparty": {
    "balanceAccountId": "string",
    "bankAccount": {
      "accountHolder": {
        "address": {
          "city": "string",
          "country": "string",
          "line1": "string",
          "line2": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "dateOfBirth": "1970-01-01",
        "email": "string",
        "firstName": "string",
        "fullName": "string",
        "lastName": "string",
        "reference": "string",
        "type": "unknown",
        "url": "string"
      },
      "accountIdentification": {
        "accountNumber": "string",
        "bsbCode": "string",
        "type": "auLocal"
      },
      "storedPaymentMethodId": "string"
    },
    "card": {
      "cardHolder": {
        "address": {
          "city": "string",
          "country": "string",
          "line1": "string",
          "line2": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "dateOfBirth": "1970-01-01",
        "email": "string",
        "firstName": "string",
        "fullName": "string",
        "lastName": "string",
        "reference": "string",
        "type": "unknown",
        "url": "string"
      },
      "cardIdentification": {
        "expiryMonth": "st",
        "expiryYear": "stri",
        "issueNumber": "st",
        "number": "string",
        "startMonth": "st",
        "startYear": "stri",
        "storedPaymentMethodId": "string"
      }
    },
    "merchant": {
      "acquirerId": "string",
      "mcc": "string",
      "merchantId": "string",
      "nameLocation": {
        "city": "string",
        "country": "string",
        "countryOfOrigin": "string",
        "name": "string",
        "rawData": "string",
        "state": "string"
      },
      "postalCode": "string"
    },
    "transferInstrumentId": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "creationDate": "1970-01-01T00:00:00Z",
  "description": "string",
  "directDebitInformation": {
    "dateOfSignature": "1970-01-01T00:00:00Z",
    "dueDate": "1970-01-01T00:00:00Z",
    "mandateId": "string",
    "sequenceType": "string"
  },
  "direction": "incoming",
  "executionDate": {
    "date": "1970-01-01",
    "timezone": "string"
  },
  "id": "string",
  "paymentInstrument": {
    "description": "string",
    "id": "string",
    "reference": "string",
    "tokenType": "string"
  },
  "reason": "accountHierarchyNotActive",
  "reference": "string",
  "referenceForBeneficiary": "string",
  "review": {
    "numberOfApprovalsRequired": 0,
    "scaOnApproval": "completed"
  },
  "status": "approvalPending",
  "type": "payment",
  "ultimateParty": {
    "address": {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "dateOfBirth": "1970-01-01",
    "email": "string",
    "firstName": "string",
    "fullName": "string",
    "fundingInstrument": {
      "cardIdentification": {
        "expiryMonth": "st",
        "expiryYear": "stri",
        "issueNumber": "st",
        "number": "string",
        "startMonth": "st",
        "startYear": "stri",
        "storedPaymentMethodId": "string"
      },
      "networkPaymentReference": "string",
      "reference": "string",
      "sourceOfFunds": "DEBIT"
    },
    "lastName": "string",
    "reference": "string",
    "type": "unknown",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[ResourceReference](#schemaresourcereference)|false|none|The account holder associated with the balance account involved in the transfer.|
|amount|[Amount](#schemaamount)|true|none|The amount of the transfer.|
|balanceAccount|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the balance account involved in the transfer.|
|category|string|true|none|The category of the transfer.<br><br>Possible values:<br><br> - **bank**: A transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) or a bank account.<br><br>- **card**: A transfer involving a third-party card.<br><br>- **internal**: A transfer between [balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id) within your platform.<br><br>- **issuedCard**: A transfer initiated by an Adyen-issued card.<br><br>- **platformPayment**: Funds movements related to payments that are acquired for your users.<br><br>- **topUp**: An incoming transfer initiated by your user to top up their balance account.|
|categoryData|[BankCategoryData](#schemabankcategorydata) \| [InternalCategoryData](#schemainternalcategorydata) \| [IssuedCard](#schemaissuedcard) \| [PlatformPayment](#schemaplatformpayment)|false|none|The relevant data according to the transfer category.|
|counterparty|[CounterpartyV3](#schemacounterpartyv3)|true|none|The other party in the transfer.|
|createdAt|string(date-time)|false|none|The date and time when the transfer was created, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.|
|creationDate|string(date-time)|false|none|**Deprecated.** The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.|
|description|string|false|none|Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.<br><br>Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**<br><br>Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' " ! ?**|
|directDebitInformation|[DirectDebitInformation](#schemadirectdebitinformation)|false|none|The details of the direct debit.|
|direction|string|false|none|The direction of the transfer.<br><br>Possible values: **incoming**, **outgoing**.|
|executionDate|[ExecutionDate](#schemaexecutiondate)|false|none|Contains information about the date when the transfer will be processed. The execution date must be within 30 days of the current date.<br><br>Until the execution date:<br>- The `status` of the transfer remains as **received**.<br>- The `reason` of the transfer remains as **pending**.<br><br>|
|id|string|false|none|The ID of the resource.|
|paymentInstrument|[PaymentInstrument](#schemapaymentinstrument)|false|none|Contains information about the payment instrument used in the transfer.|
|reason|string|false|none|Additional information about the status of the transfer.|
|reference|string|false|none|Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.|
|referenceForBeneficiary|string|false|none| A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.<br><br> Supported characters: **a-z**, **A-Z**, **0-9**.The maximum length depends on the `category`.<br><br> - **internal**: 80 characters<br><br>- **bank**: 35 characters when transferring to an IBAN, 15 characters for others.|
|review|[TransferReview](#schematransferreview)|false|none|Contains status updates related to additional reviews.|
|status|string|true|none|The result of the transfer.<br><br>For example:<br><br>- **received**: an outgoing transfer request is created.<br>- **refused**: the transfer request is rejected by Adyen for one of the following reasons:<br>  - Transfer limit exceeded.<br>  - Transaction rule requirements violated.<br>- **authorised**: the transfer request is authorized and the funds are reserved.<br>- **booked**: the funds are deducted from your user's balance account.<br> - **failed**: the transfer is rejected by the counterparty's bank.<br>- **returned**: the transfer is returned by the counterparty's bank.|
|type|string|false|none|The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**, **bankTransfer**.|
|ultimateParty|[UltimatePartyIdentification](#schemaultimatepartyidentification)|false|none|The ultimate sender of the funds of the transfer (ultimate debtor).|

#### Enumerated Values

|Property|Value|
|---|---|
|category|bank|
|category|card|
|category|internal|
|category|issuedCard|
|category|platformPayment|
|category|topUp|
|direction|incoming|
|direction|outgoing|
|reason|accountHierarchyNotActive|
|reason|amountLimitExceeded|
|reason|approvalExpired|
|reason|approved|
|reason|avsDeclined|
|reason|balanceAccountTemporarilyBlockedByTransactionRule|
|reason|blockCard|
|reason|callReferral|
|reason|cancelled|
|reason|captureCard|
|reason|cardExpired|
|reason|cardholderAuthenticationRequired|
|reason|cashbackAmountExceedsLimit|
|reason|cavvDeclined|
|reason|contactlessFallback|
|reason|contactlessLimitReached|
|reason|counterpartyAccountBlocked|
|reason|counterpartyAccountClosed|
|reason|counterpartyAccountNotFound|
|reason|counterpartyAddressRequired|
|reason|counterpartyBankTimedOut|
|reason|counterpartyBankUnavailable|
|reason|cryptographicFailure|
|reason|cvcDeclined|
|reason|declined|
|reason|declinedByBapValidation|
|reason|declinedByTransactionRule|
|reason|declinedNonGeneric|
|reason|directDebitNotSupported|
|reason|doNotHonor|
|reason|domesticDebitTransactionNotAllowed|
|reason|duplicateTransmissionDetected|
|reason|error|
|reason|formatError|
|reason|fraud|
|reason|fraudCancelled|
|reason|honorWithId|
|reason|internalTimeout|
|reason|invalidAccount|
|reason|invalidAmount|
|reason|invalidAuthorizationLifeCycle|
|reason|invalidCard|
|reason|invalidExpiryDate|
|reason|invalidFromAccount|
|reason|invalidIssuer|
|reason|invalidMerchant|
|reason|invalidPin|
|reason|invalidToAccount|
|reason|invalidTransaction|
|reason|issuerSuspectedFraud|
|reason|lostCard|
|reason|mobilePinRequired|
|reason|noCheckingAccount|
|reason|noSavingsAccount|
|reason|not3dAuthenticated|
|reason|notEnoughBalance|
|reason|notSubmitted|
|reason|notSupported|
|reason|partiallyApproved|
|reason|pending|
|reason|pendingApproval|
|reason|pendingExecution|
|reason|pinNotChanged|
|reason|pinRequired|
|reason|pinTriesExceeded|
|reason|pinValidationNotPossible|
|reason|purchaseAmountOnlyNoCashBack|
|reason|refusedByCounterpartyBank|
|reason|refusedByCustomer|
|reason|restrictedCard|
|reason|revocationOfAuth|
|reason|routeNotFound|
|reason|scaAuthenticationRequired|
|reason|scaFailed|
|reason|schemeAdvice|
|reason|securityViolation|
|reason|shopperCancelled|
|reason|stolenCard|
|reason|threedsDynamicLinkingMismatch|
|reason|transactionNotPermitted|
|reason|transferInstrumentDoesNotExist|
|reason|unableToRouteTransaction|
|reason|unknown|
|reason|withdrawalAmountExceeded|
|reason|withdrawalCountExceeded|
|status|approvalPending|
|status|atmWithdrawal|
|status|atmWithdrawalReversalPending|
|status|atmWithdrawalReversed|
|status|authAdjustmentAuthorised|
|status|authAdjustmentError|
|status|authAdjustmentRefused|
|status|authorised|
|status|bankTransfer|
|status|bankTransferPending|
|status|booked|
|status|bookingPending|
|status|cancelled|
|status|capturePending|
|status|captureReversalPending|
|status|captureReversed|
|status|captured|
|status|capturedExternally|
|status|chargeback|
|status|chargebackExternally|
|status|chargebackPending|
|status|chargebackReversalPending|
|status|chargebackReversed|
|status|credited|
|status|depositCorrection|
|status|depositCorrectionPending|
|status|dispute|
|status|disputeClosed|
|status|disputeExpired|
|status|disputeNeedsReview|
|status|error|
|status|expired|
|status|failed|
|status|fee|
|status|feePending|
|status|interchangeAdjusted|
|status|internalTransfer|
|status|internalTransferPending|
|status|invoiceDeduction|
|status|invoiceDeductionPending|
|status|manualCorrectionPending|
|status|manuallyCorrected|
|status|matchedStatement|
|status|matchedStatementPending|
|status|merchantPayin|
|status|merchantPayinPending|
|status|merchantPayinReversed|
|status|merchantPayinReversedPending|
|status|miscCost|
|status|miscCostPending|
|status|paymentCost|
|status|paymentCostPending|
|status|pending|
|status|pendingApproval|
|status|pendingExecution|
|status|received|
|status|refundPending|
|status|refundReversalPending|
|status|refundReversed|
|status|refunded|
|status|refundedExternally|
|status|refused|
|status|rejected|
|status|reserveAdjustment|
|status|reserveAdjustmentPending|
|status|returned|
|status|reversalReceived|
|status|reversed|
|status|secondChargeback|
|status|secondChargebackPending|
|status|undefined|
|type|payment|
|type|capture|
|type|captureReversal|
|type|refund|
|type|refundReversal|
|type|chargeback|
|type|chargebackCorrection|
|type|chargebackReversal|
|type|chargebackReversalCorrection|
|type|secondChargeback|
|type|secondChargebackCorrection|
|type|atmWithdrawal|
|type|atmWithdrawalReversal|
|type|internalTransfer|
|type|internalDirectDebit|
|type|manualCorrection|
|type|invoiceDeduction|
|type|depositCorrection|
|type|reserveAdjustment|
|type|bankTransfer|
|type|bankDirectDebit|
|type|cardTransfer|
|type|miscCost|
|type|paymentCost|
|type|fee|
|type|leftover|
|type|grant|
|type|capitalFundsCollection|
|type|cashOutInstruction|
|type|cashoutFee|
|type|cashoutRepayment|
|type|cashoutFunding|
|type|repayment|
|type|installment|
|type|installmentReversal|
|type|balanceAdjustment|
|type|balanceRollover|
|type|balanceMigration|
|type|fxSell|
|type|fxBuy|

<h2 id="tocS_TransferData">TransferData</h2>
<!-- backwards compatibility -->
<a id="schematransferdata"></a>
<a id="schema_TransferData"></a>
<a id="tocStransferdata"></a>
<a id="tocstransferdata"></a>

```json
{
  "accountHolder": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "amount": {
    "currency": "string",
    "value": 0
  },
  "balanceAccount": {
    "description": "string",
    "id": "string",
    "reference": "string"
  },
  "balancePlatform": "string",
  "balances": [
    {
      "balance": 0,
      "currency": "string",
      "received": 0,
      "reserved": 0
    }
  ],
  "category": "bank",
  "categoryData": {
    "priority": "crossBorder",
    "type": "bank"
  },
  "counterparty": {
    "balanceAccountId": "string",
    "bankAccount": {
      "accountHolder": {
        "address": {
          "city": "string",
          "country": "string",
          "line1": "string",
          "line2": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "dateOfBirth": "1970-01-01",
        "email": "string",
        "firstName": "string",
        "fullName": "string",
        "lastName": "string",
        "reference": "string",
        "type": "unknown",
        "url": "string"
      },
      "accountIdentification": {
        "accountNumber": "string",
        "bsbCode": "string",
        "type": "auLocal"
      },
      "storedPaymentMethodId": "string"
    },
    "card": {
      "cardHolder": {
        "address": {
          "city": "string",
          "country": "string",
          "line1": "string",
          "line2": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "dateOfBirth": "1970-01-01",
        "email": "string",
        "firstName": "string",
        "fullName": "string",
        "lastName": "string",
        "reference": "string",
        "type": "unknown",
        "url": "string"
      },
      "cardIdentification": {
        "expiryMonth": "st",
        "expiryYear": "stri",
        "issueNumber": "st",
        "number": "string",
        "startMonth": "st",
        "startYear": "stri",
        "storedPaymentMethodId": "string"
      }
    },
    "merchant": {
      "acquirerId": "string",
      "city": "string",
      "country": "string",
      "countryCode": "string",
      "mcc": "string",
      "merchantId": "string",
      "name": "string",
      "postalCode": "string"
    },
    "transferInstrumentId": "string"
  },
  "createdAt": "1970-01-01T00:00:00Z",
  "creationDate": "1970-01-01T00:00:00Z",
  "description": "string",
  "directDebitInformation": {
    "dateOfSignature": "1970-01-01T00:00:00Z",
    "dueDate": "1970-01-01T00:00:00Z",
    "mandateId": "string",
    "sequenceType": "string"
  },
  "direction": "incoming",
  "eventId": "string",
  "events": [
    {
      "amount": {
        "currency": "string",
        "value": 0
      },
      "amountAdjustments": [
        {
          "amount": {
            "currency": "string",
            "value": 0
          },
          "amountAdjustmentType": "atmMarkup",
          "basepoints": 0
        }
      ],
      "arn": "string",
      "bookingDate": "1970-01-01T00:00:00Z",
      "estimatedArrivalTime": "1970-01-01T00:00:00Z",
      "eventsData": [
        {
          "interchangeAmount": {
            "currency": "string",
            "value": 0
          },
          "interchangeRateIndicator": "string",
          "type": "interchangeData"
        }
      ],
      "externalReason": {
        "code": "string",
        "description": "string",
        "namespace": "string"
      },
      "id": "string",
      "modification": {
        "direction": "string",
        "id": "string",
        "reference": "string",
        "status": "approvalPending",
        "type": "string"
      },
      "mutations": [
        {
          "balance": 0,
          "currency": "string",
          "received": 0,
          "reserved": 0
        }
      ],
      "originalAmount": {
        "currency": "string",
        "value": 0
      },
      "reason": "accountHierarchyNotActive",
      "status": "approvalPending",
      "tracingData": {
        "fpid": "string",
        "type": "ukFps"
      },
      "trackingData": {
        "status": "credited",
        "type": "confirmation"
      },
      "transactionId": "string",
      "type": "accounting",
      "updateDate": "1970-01-01T00:00:00Z",
      "valueDate": "1970-01-01T00:00:00Z"
    }
  ],
  "executionDate": {
    "date": "1970-01-01",
    "timezone": "string"
  },
  "externalReason": {
    "code": "string",
    "description": "string",
    "namespace": "string"
  },
  "id": "string",
  "networkReason": {
    "code": "string",
    "description": "string",
    "namespace": "iso8583ResponseCode"
  },
  "paymentInstrument": {
    "description": "string",
    "id": "string",
    "reference": "string",
    "tokenType": "string"
  },
  "reason": "accountHierarchyNotActive",
  "reference": "string",
  "referenceForBeneficiary": "string",
  "review": {
    "numberOfApprovalsRequired": 0,
    "scaOnApproval": "completed"
  },
  "sequenceNumber": 0,
  "status": "approvalPending",
  "tracing": {
    "fpid": "string",
    "type": "ukFps"
  },
  "tracking": {
    "status": "credited",
    "type": "confirmation"
  },
  "transactionRulesResult": {
    "advice": "string",
    "allHardBlockRulesPassed": true,
    "score": 0,
    "triggeredTransactionRules": [
      {
        "reason": "string",
        "transactionRule": {
          "description": "string",
          "id": "string",
          "outcomeType": "string",
          "reference": "string",
          "score": 0
        },
        "transactionRuleSource": {
          "id": "string",
          "type": "string"
        }
      }
    ]
  },
  "type": "payment",
  "ultimateParty": {
    "address": {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "dateOfBirth": "1970-01-01",
    "email": "string",
    "firstName": "string",
    "fullName": "string",
    "fundingInstrument": {
      "cardIdentification": {
        "expiryMonth": "st",
        "expiryYear": "stri",
        "issueNumber": "st",
        "number": "string",
        "startMonth": "st",
        "startYear": "stri",
        "storedPaymentMethodId": "string"
      },
      "networkPaymentReference": "string",
      "reference": "string",
      "sourceOfFunds": "DEBIT"
    },
    "lastName": "string",
    "reference": "string",
    "type": "unknown",
    "url": "string"
  },
  "updatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolder|[ResourceReference](#schemaresourcereference)|false|none|The account holder associated with the balance account involved in the transfer.|
|amount|[Amount](#schemaamount)|true|none|The amount of the transfer.|
|balanceAccount|[ResourceReference](#schemaresourcereference)|false|none|Contains information about the balance account involved in the transfer.|
|balancePlatform|string|false|none|The unique identifier of the balance platform.|
|balances|[[BalanceMutation](#schemabalancemutation)]|false|none|The list of the latest balance statuses in the transfer.|
|category|string|true|none|The category of the transfer.<br><br>Possible values:<br><br> - **bank**: A transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) or a bank account.<br><br>- **card**: A transfer involving a third-party card.<br><br>- **internal**: A transfer between [balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id) within your platform.<br><br>- **issuedCard**: A transfer initiated by an Adyen-issued card.<br><br>- **platformPayment**: Funds movements related to payments that are acquired for your users.<br><br>- **topUp**: An incoming transfer initiated by your user to top up their balance account.|
|categoryData|[BankCategoryData](#schemabankcategorydata) \| [InternalCategoryData](#schemainternalcategorydata) \| [IssuedCard](#schemaissuedcard) \| [PlatformPayment](#schemaplatformpayment)|false|none|The relevant data according to the transfer category.|
|counterparty|[TransferNotificationCounterParty](#schematransfernotificationcounterparty)|false|none|The other party in the transfer.|
|createdAt|string(date-time)|false|none|The date and time when the transfer was created, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.|
|creationDate|string(date-time)|false|none|**Deprecated.** The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.|
|description|string|false|none|Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.<br><br>Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**<br><br>Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' " ! ?**|
|directDebitInformation|[DirectDebitInformation](#schemadirectdebitinformation)|false|none|The details of the direct debit.|
|direction|string|false|none|The direction of the transfer.<br><br>Possible values: **incoming**, **outgoing**.|
|eventId|string|false|none|The unique identifier of the latest transfer event. Included only when the `category` is **issuedCard**.|
|events|[[TransferEvent](#schematransferevent)]|false|none|The list of events leading up to the current status of the transfer.|
|executionDate|[ExecutionDate](#schemaexecutiondate)|false|none|Contains information about the date when the transfer will be processed. The execution date must be within 30 days of the current date.<br><br>Until the execution date:<br>- The `status` of the transfer remains as **received**.<br>- The `reason` of the transfer remains as **pending**.<br><br>|
|externalReason|[ExternalReason](#schemaexternalreason)|false|none|The external reason of this transfer.|
|id|string|false|none|The ID of the resource.|
|networkReason|[NetworkReason](#schemanetworkreason)|false|none|Contains information that explains why the transfer was rejected or returned by the network.|
|paymentInstrument|[PaymentInstrument](#schemapaymentinstrument)|false|none|Contains information about the payment instrument used in the transfer.|
|reason|string|false|none|Additional information about the status of the transfer.|
|reference|string|false|none|Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.|
|referenceForBeneficiary|string|false|none| A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.<br><br> Supported characters: **a-z**, **A-Z**, **0-9**.The maximum length depends on the `category`.<br><br> - **internal**: 80 characters<br><br>- **bank**: 35 characters when transferring to an IBAN, 15 characters for others.|
|review|[TransferReview](#schematransferreview)|false|none|Contains status updates related to additional reviews.|
|sequenceNumber|integer(int32)|false|none|The sequence number of the transfer webhook. The numbers start from 1 and increase with each new webhook for a specific transfer.<br><br>The sequence number can help you restore the correct sequence of events even if they arrive out of order.|
|status|string|true|none|The result of the transfer.<br><br>For example:<br><br>- **received**: an outgoing transfer request is created.<br>- **refused**: the transfer request is rejected by Adyen for one of the following reasons:<br>  - Transfer limit exceeded.<br>  - Transaction rule requirements violated.<br>- **authorised**: the transfer request is authorized and the funds are reserved.<br>- **booked**: the funds are deducted from your user's balance account.<br> - **failed**: the transfer is rejected by the counterparty's bank.<br>- **returned**: the transfer is returned by the counterparty's bank.|
|tracing|[UKFpsTracingData](#schemaukfpstracingdata) \| [USAchTracingData](#schemausachtracingdata)|false|none|Contains information for tracing the transfer after Adyen forwards it to the network.|
|tracking|[ConfirmationTrackingData](#schemaconfirmationtrackingdata) \| [EstimationTrackingData](#schemaestimationtrackingdata) \| [InternalReviewTrackingData](#schemainternalreviewtrackingdata)|false|none|The latest tracking information of the transfer.|
|transactionRulesResult|[TransactionRulesResult](#schematransactionrulesresult)|false|none|Contains the results of the evaluation of the transaction rules.|
|type|string|false|none|The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**, **bankTransfer**.|
|ultimateParty|[UltimatePartyIdentification](#schemaultimatepartyidentification)|false|none|The ultimate sender of the funds of the transfer (ultimate debtor).|
|updatedAt|string(date-time)|false|none|The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|bank|
|category|card|
|category|internal|
|category|issuedCard|
|category|platformPayment|
|category|topUp|
|direction|incoming|
|direction|outgoing|
|reason|accountHierarchyNotActive|
|reason|amountLimitExceeded|
|reason|approvalExpired|
|reason|approved|
|reason|avsDeclined|
|reason|balanceAccountTemporarilyBlockedByTransactionRule|
|reason|blockCard|
|reason|callReferral|
|reason|cancelled|
|reason|captureCard|
|reason|cardExpired|
|reason|cardholderAuthenticationRequired|
|reason|cashbackAmountExceedsLimit|
|reason|cavvDeclined|
|reason|contactlessFallback|
|reason|contactlessLimitReached|
|reason|counterpartyAccountBlocked|
|reason|counterpartyAccountClosed|
|reason|counterpartyAccountNotFound|
|reason|counterpartyAddressRequired|
|reason|counterpartyBankTimedOut|
|reason|counterpartyBankUnavailable|
|reason|cryptographicFailure|
|reason|cvcDeclined|
|reason|declined|
|reason|declinedByBapValidation|
|reason|declinedByTransactionRule|
|reason|declinedNonGeneric|
|reason|directDebitNotSupported|
|reason|doNotHonor|
|reason|domesticDebitTransactionNotAllowed|
|reason|duplicateTransmissionDetected|
|reason|error|
|reason|formatError|
|reason|fraud|
|reason|fraudCancelled|
|reason|honorWithId|
|reason|internalTimeout|
|reason|invalidAccount|
|reason|invalidAmount|
|reason|invalidAuthorizationLifeCycle|
|reason|invalidCard|
|reason|invalidExpiryDate|
|reason|invalidFromAccount|
|reason|invalidIssuer|
|reason|invalidMerchant|
|reason|invalidPin|
|reason|invalidToAccount|
|reason|invalidTransaction|
|reason|issuerSuspectedFraud|
|reason|lostCard|
|reason|mobilePinRequired|
|reason|noCheckingAccount|
|reason|noSavingsAccount|
|reason|not3dAuthenticated|
|reason|notEnoughBalance|
|reason|notSubmitted|
|reason|notSupported|
|reason|partiallyApproved|
|reason|pending|
|reason|pendingApproval|
|reason|pendingExecution|
|reason|pinNotChanged|
|reason|pinRequired|
|reason|pinTriesExceeded|
|reason|pinValidationNotPossible|
|reason|purchaseAmountOnlyNoCashBack|
|reason|refusedByCounterpartyBank|
|reason|refusedByCustomer|
|reason|restrictedCard|
|reason|revocationOfAuth|
|reason|routeNotFound|
|reason|scaAuthenticationRequired|
|reason|scaFailed|
|reason|schemeAdvice|
|reason|securityViolation|
|reason|shopperCancelled|
|reason|stolenCard|
|reason|threedsDynamicLinkingMismatch|
|reason|transactionNotPermitted|
|reason|transferInstrumentDoesNotExist|
|reason|unableToRouteTransaction|
|reason|unknown|
|reason|withdrawalAmountExceeded|
|reason|withdrawalCountExceeded|
|status|approvalPending|
|status|atmWithdrawal|
|status|atmWithdrawalReversalPending|
|status|atmWithdrawalReversed|
|status|authAdjustmentAuthorised|
|status|authAdjustmentError|
|status|authAdjustmentRefused|
|status|authorised|
|status|bankTransfer|
|status|bankTransferPending|
|status|booked|
|status|bookingPending|
|status|cancelled|
|status|capturePending|
|status|captureReversalPending|
|status|captureReversed|
|status|captured|
|status|capturedExternally|
|status|chargeback|
|status|chargebackExternally|
|status|chargebackPending|
|status|chargebackReversalPending|
|status|chargebackReversed|
|status|credited|
|status|depositCorrection|
|status|depositCorrectionPending|
|status|dispute|
|status|disputeClosed|
|status|disputeExpired|
|status|disputeNeedsReview|
|status|error|
|status|expired|
|status|failed|
|status|fee|
|status|feePending|
|status|interchangeAdjusted|
|status|internalTransfer|
|status|internalTransferPending|
|status|invoiceDeduction|
|status|invoiceDeductionPending|
|status|manualCorrectionPending|
|status|manuallyCorrected|
|status|matchedStatement|
|status|matchedStatementPending|
|status|merchantPayin|
|status|merchantPayinPending|
|status|merchantPayinReversed|
|status|merchantPayinReversedPending|
|status|miscCost|
|status|miscCostPending|
|status|paymentCost|
|status|paymentCostPending|
|status|pending|
|status|pendingApproval|
|status|pendingExecution|
|status|received|
|status|refundPending|
|status|refundReversalPending|
|status|refundReversed|
|status|refunded|
|status|refundedExternally|
|status|refused|
|status|rejected|
|status|reserveAdjustment|
|status|reserveAdjustmentPending|
|status|returned|
|status|reversalReceived|
|status|reversed|
|status|secondChargeback|
|status|secondChargebackPending|
|status|undefined|
|type|payment|
|type|capture|
|type|captureReversal|
|type|refund|
|type|refundReversal|
|type|chargeback|
|type|chargebackCorrection|
|type|chargebackReversal|
|type|chargebackReversalCorrection|
|type|secondChargeback|
|type|secondChargebackCorrection|
|type|atmWithdrawal|
|type|atmWithdrawalReversal|
|type|internalTransfer|
|type|internalDirectDebit|
|type|manualCorrection|
|type|invoiceDeduction|
|type|depositCorrection|
|type|reserveAdjustment|
|type|bankTransfer|
|type|bankDirectDebit|
|type|cardTransfer|
|type|miscCost|
|type|paymentCost|
|type|fee|
|type|leftover|
|type|grant|
|type|capitalFundsCollection|
|type|cashOutInstruction|
|type|cashoutFee|
|type|cashoutRepayment|
|type|cashoutFunding|
|type|repayment|
|type|installment|
|type|installmentReversal|
|type|balanceAdjustment|
|type|balanceRollover|
|type|balanceMigration|
|type|fxSell|
|type|fxBuy|

<h2 id="tocS_TransferEvent">TransferEvent</h2>
<!-- backwards compatibility -->
<a id="schematransferevent"></a>
<a id="schema_TransferEvent"></a>
<a id="tocStransferevent"></a>
<a id="tocstransferevent"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  },
  "amountAdjustments": [
    {
      "amount": {
        "currency": "string",
        "value": 0
      },
      "amountAdjustmentType": "atmMarkup",
      "basepoints": 0
    }
  ],
  "arn": "string",
  "bookingDate": "1970-01-01T00:00:00Z",
  "estimatedArrivalTime": "1970-01-01T00:00:00Z",
  "eventsData": [
    {
      "interchangeAmount": {
        "currency": "string",
        "value": 0
      },
      "interchangeRateIndicator": "string",
      "type": "interchangeData"
    }
  ],
  "externalReason": {
    "code": "string",
    "description": "string",
    "namespace": "string"
  },
  "id": "string",
  "modification": {
    "direction": "string",
    "id": "string",
    "reference": "string",
    "status": "approvalPending",
    "type": "string"
  },
  "mutations": [
    {
      "balance": 0,
      "currency": "string",
      "received": 0,
      "reserved": 0
    }
  ],
  "originalAmount": {
    "currency": "string",
    "value": 0
  },
  "reason": "accountHierarchyNotActive",
  "status": "approvalPending",
  "tracingData": {
    "fpid": "string",
    "type": "ukFps"
  },
  "trackingData": {
    "status": "credited",
    "type": "confirmation"
  },
  "transactionId": "string",
  "type": "accounting",
  "updateDate": "1970-01-01T00:00:00Z",
  "valueDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The original journal amount. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations.|
|amountAdjustments|[[AmountAdjustment](#schemaamountadjustment)]|false|none|The amount adjustments in this transfer. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations.|
|arn|string|false|none|Scheme unique arn identifier useful for tracing captures, chargebacks, refunds, etc.|
|bookingDate|string(date-time)|false|none|The date when the transfer request was sent.|
|estimatedArrivalTime|string(date-time)|false|none|The estimated time when the beneficiary should have access to the funds.|
|eventsData|[[InterchangeData](#schemainterchangedata) \| [IssuingTransactionData](#schemaissuingtransactiondata) \| [MerchantPurchaseData](#schemamerchantpurchasedata)]|false|none|A list of event data.|
|externalReason|[ExternalReason](#schemaexternalreason)|false|none|The external reason for the transfer status.|
|id|string|false|none|The unique identifier of the transfer event.|
|modification|[Modification](#schemamodification)|false|none|The payment modification. Only applicable for [returned internal transfers](https://docs.adyen.com/platforms/internal-fund-transfers/internal-transfer-webhooks/#returned-internal-transfer).|
|mutations|[[BalanceMutation](#schemabalancemutation)]|false|none|The list of balance mutations per event.|
|originalAmount|[Amount](#schemaamount)|false|none|The amount in the original currency. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations. |
|reason|string|false|none|The reason for the transfer status.|
|status|string|false|none|The status of the transfer event.|
|tracingData|[UKFpsTracingData](#schemaukfpstracingdata) \| [USAchTracingData](#schemausachtracingdata)|false|none|Additional tracing information for the tracing event.|
|trackingData|[ConfirmationTrackingData](#schemaconfirmationtrackingdata) \| [EstimationTrackingData](#schemaestimationtrackingdata) \| [InternalReviewTrackingData](#schemainternalreviewtrackingdata)|false|none|Additional information for the tracking event.|
|transactionId|string|false|none|The id of the transaction that is related to this accounting event. Only sent for events of type **accounting** where the balance changes.|
|type|string|false|none|The type of the transfer event. Possible values: **accounting**, **tracing**, **tracking**.|
|updateDate|string(date-time)|false|none|The date when the tracking status was updated.|
|valueDate|string(date-time)|false|none|The date when the funds are expected to be deducted from or credited to the balance account. This date can be in either the past or future.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|accountHierarchyNotActive|
|reason|amountLimitExceeded|
|reason|approvalExpired|
|reason|approved|
|reason|avsDeclined|
|reason|balanceAccountTemporarilyBlockedByTransactionRule|
|reason|blockCard|
|reason|callReferral|
|reason|cancelled|
|reason|captureCard|
|reason|cardExpired|
|reason|cardholderAuthenticationRequired|
|reason|cashbackAmountExceedsLimit|
|reason|cavvDeclined|
|reason|contactlessFallback|
|reason|contactlessLimitReached|
|reason|counterpartyAccountBlocked|
|reason|counterpartyAccountClosed|
|reason|counterpartyAccountNotFound|
|reason|counterpartyAddressRequired|
|reason|counterpartyBankTimedOut|
|reason|counterpartyBankUnavailable|
|reason|cryptographicFailure|
|reason|cvcDeclined|
|reason|declined|
|reason|declinedByBapValidation|
|reason|declinedByTransactionRule|
|reason|declinedNonGeneric|
|reason|directDebitNotSupported|
|reason|doNotHonor|
|reason|domesticDebitTransactionNotAllowed|
|reason|duplicateTransmissionDetected|
|reason|error|
|reason|formatError|
|reason|fraud|
|reason|fraudCancelled|
|reason|honorWithId|
|reason|internalTimeout|
|reason|invalidAccount|
|reason|invalidAmount|
|reason|invalidAuthorizationLifeCycle|
|reason|invalidCard|
|reason|invalidExpiryDate|
|reason|invalidFromAccount|
|reason|invalidIssuer|
|reason|invalidMerchant|
|reason|invalidPin|
|reason|invalidToAccount|
|reason|invalidTransaction|
|reason|issuerSuspectedFraud|
|reason|lostCard|
|reason|mobilePinRequired|
|reason|noCheckingAccount|
|reason|noSavingsAccount|
|reason|not3dAuthenticated|
|reason|notEnoughBalance|
|reason|notSubmitted|
|reason|notSupported|
|reason|partiallyApproved|
|reason|pending|
|reason|pendingApproval|
|reason|pendingExecution|
|reason|pinNotChanged|
|reason|pinRequired|
|reason|pinTriesExceeded|
|reason|pinValidationNotPossible|
|reason|purchaseAmountOnlyNoCashBack|
|reason|refusedByCounterpartyBank|
|reason|refusedByCustomer|
|reason|restrictedCard|
|reason|revocationOfAuth|
|reason|routeNotFound|
|reason|scaAuthenticationRequired|
|reason|scaFailed|
|reason|schemeAdvice|
|reason|securityViolation|
|reason|shopperCancelled|
|reason|stolenCard|
|reason|threedsDynamicLinkingMismatch|
|reason|transactionNotPermitted|
|reason|transferInstrumentDoesNotExist|
|reason|unableToRouteTransaction|
|reason|unknown|
|reason|withdrawalAmountExceeded|
|reason|withdrawalCountExceeded|
|status|approvalPending|
|status|atmWithdrawal|
|status|atmWithdrawalReversalPending|
|status|atmWithdrawalReversed|
|status|authAdjustmentAuthorised|
|status|authAdjustmentError|
|status|authAdjustmentRefused|
|status|authorised|
|status|bankTransfer|
|status|bankTransferPending|
|status|booked|
|status|bookingPending|
|status|cancelled|
|status|capturePending|
|status|captureReversalPending|
|status|captureReversed|
|status|captured|
|status|capturedExternally|
|status|chargeback|
|status|chargebackExternally|
|status|chargebackPending|
|status|chargebackReversalPending|
|status|chargebackReversed|
|status|credited|
|status|depositCorrection|
|status|depositCorrectionPending|
|status|dispute|
|status|disputeClosed|
|status|disputeExpired|
|status|disputeNeedsReview|
|status|error|
|status|expired|
|status|failed|
|status|fee|
|status|feePending|
|status|interchangeAdjusted|
|status|internalTransfer|
|status|internalTransferPending|
|status|invoiceDeduction|
|status|invoiceDeductionPending|
|status|manualCorrectionPending|
|status|manuallyCorrected|
|status|matchedStatement|
|status|matchedStatementPending|
|status|merchantPayin|
|status|merchantPayinPending|
|status|merchantPayinReversed|
|status|merchantPayinReversedPending|
|status|miscCost|
|status|miscCostPending|
|status|paymentCost|
|status|paymentCostPending|
|status|pending|
|status|pendingApproval|
|status|pendingExecution|
|status|received|
|status|refundPending|
|status|refundReversalPending|
|status|refundReversed|
|status|refunded|
|status|refundedExternally|
|status|refused|
|status|rejected|
|status|reserveAdjustment|
|status|reserveAdjustmentPending|
|status|returned|
|status|reversalReceived|
|status|reversed|
|status|secondChargeback|
|status|secondChargebackPending|
|status|undefined|
|type|accounting|
|type|tracing|
|type|tracking|

<h2 id="tocS_TransferInfo">TransferInfo</h2>
<!-- backwards compatibility -->
<a id="schematransferinfo"></a>
<a id="schema_TransferInfo"></a>
<a id="tocStransferinfo"></a>
<a id="tocstransferinfo"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  },
  "balanceAccountId": "string",
  "category": "bank",
  "counterparty": {
    "balanceAccountId": "string",
    "bankAccount": {
      "accountHolder": {
        "address": {
          "city": "string",
          "country": "string",
          "line1": "string",
          "line2": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "dateOfBirth": "1970-01-01",
        "email": "string",
        "firstName": "string",
        "fullName": "string",
        "lastName": "string",
        "reference": "string",
        "type": "unknown",
        "url": "string"
      },
      "accountIdentification": {
        "accountNumber": "string",
        "bsbCode": "string",
        "type": "auLocal"
      },
      "storedPaymentMethodId": "string"
    },
    "card": {
      "cardHolder": {
        "address": {
          "city": "string",
          "country": "string",
          "line1": "string",
          "line2": "string",
          "postalCode": "string",
          "stateOrProvince": "string"
        },
        "dateOfBirth": "1970-01-01",
        "email": "string",
        "firstName": "string",
        "fullName": "string",
        "lastName": "string",
        "reference": "string",
        "type": "unknown",
        "url": "string"
      },
      "cardIdentification": {
        "expiryMonth": "st",
        "expiryYear": "stri",
        "issueNumber": "st",
        "number": "string",
        "startMonth": "st",
        "startYear": "stri",
        "storedPaymentMethodId": "string"
      }
    },
    "transferInstrumentId": "string"
  },
  "description": "string",
  "executionDate": {
    "date": "1970-01-01",
    "timezone": "string"
  },
  "paymentInstrumentId": "string",
  "priorities": [
    "crossBorder"
  ],
  "priority": "crossBorder",
  "reference": "string",
  "referenceForBeneficiary": "string",
  "review": {
    "numberOfApprovalsRequired": 0,
    "scaOnApproval": true
  },
  "type": "bankTransfer",
  "ultimateParty": {
    "address": {
      "city": "string",
      "country": "string",
      "line1": "string",
      "line2": "string",
      "postalCode": "string",
      "stateOrProvince": "string"
    },
    "dateOfBirth": "1970-01-01",
    "email": "string",
    "firstName": "string",
    "fullName": "string",
    "fundingInstrument": {
      "cardIdentification": {
        "expiryMonth": "st",
        "expiryYear": "stri",
        "issueNumber": "st",
        "number": "string",
        "startMonth": "st",
        "startYear": "stri",
        "storedPaymentMethodId": "string"
      },
      "networkPaymentReference": "string",
      "reference": "string",
      "sourceOfFunds": "DEBIT"
    },
    "lastName": "string",
    "reference": "string",
    "type": "unknown",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The amount of the transfer.|
|balanceAccountId|string|false|none|The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).<br><br>If you want to make a transfer using a **virtual** **bankAccount** assigned to the balance account, you must specify the [payment instrument ID](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-id) of the **virtual** **bankAccount**. If you only specify a balance account ID, Adyen uses the default **physical** **bankAccount** payment instrument assigned to the balance account.|
|category|string|true|none|The category of the transfer.<br><br>Possible values:<br><br> - **bank**: A transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) or a bank account.<br><br>- **card**: A transfer involving a third-party card.<br><br>- **internal**: A transfer between [balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id) within your platform.<br><br>- **issuedCard**: A transfer initiated by an Adyen-issued card.<br><br>- **platformPayment**: Funds movements related to payments that are acquired for your users.<br><br>- **topUp**: An incoming transfer initiated by your user to top up their balance account.|
|counterparty|[CounterpartyInfoV3](#schemacounterpartyinfov3)|true|none|The other party involved in the funds transfer. A bank account, a balance account, a card, or a transfer instrument is required.|
|description|string|false|none|Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.<br><br>Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**<br><br>Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' " ! ?**|
|executionDate|[ExecutionDate](#schemaexecutiondate)|false|none|The date when the transfer will be processed. This date must be within 30 days of the current date.<br><br>Until the `executionDate`:<br>- The `status` of the transfer remains as **received**.<br>- The `reason` of the transfer remains as **pending**.<br><br>|
|paymentInstrumentId|string|false|none|The unique identifier of the source [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-id).<br><br>If you want to make a transfer using a **virtual** **bankAccount**, you must specify the payment instrument ID of the **virtual** **bankAccount**. If you only specify a balance account ID, Adyen uses the default **physical** **bankAccount** payment instrument assigned to the balance account.|
|priorities|[string]|false|none| The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities. Adyen will try to pay out using the priority you list first. If that's not possible, it moves on to the next option in the order of your provided priorities. <br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).<br><br>Required for transfers with `category` **bank**. For more details, see [fallback priorities](https://docs.adyen.com/payouts/payout-service/payout-to-users/#fallback-priorities).|
|priority|string|false|none|The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.<br><br>Possible values:<br><br>* **regular**: For normal, low-value transactions.<br><br>* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.<br><br>* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.<br><br>* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).<br><br>* **crossBorder**: For high-value transfers to a recipient in a different country.<br><br>* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).|
|reference|string|false|none|Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.|
|referenceForBeneficiary|string|false|none| A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.<br><br> Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.<br><br>- **internal**: 80 characters<br><br>- **bank**: 35 characters when transferring to an IBAN, 15 characters for others.|
|review|[TransferRequestReview](#schematransferrequestreview)|false|none|Contains information required for triggering transfer reviews. |
|type|string|false|none|The type of transfer.<br><br>Possible values:<br><br> - **bankTransfer**: for push transfers to a transfer instrument or a bank account. The `category` must be **bank**.<br>- **internalTransfer**: for push transfers between balance accounts. The `category` must be **internal**.<br>- **internalDirectDebit**: for pull transfers (direct debits) between balance accounts. The `category` must be **internal**. <br><br>|
|ultimateParty|[UltimatePartyIdentification](#schemaultimatepartyidentification)|false|none|The ultimate sender of the funds of the transfer (ultimate debtor).|

#### Enumerated Values

|Property|Value|
|---|---|
|category|bank|
|category|card|
|category|internal|
|category|issuedCard|
|category|platformPayment|
|category|topUp|
|priorities|crossBorder|
|priorities|fast|
|priorities|instant|
|priorities|internal|
|priorities|regular|
|priorities|wire|
|priority|crossBorder|
|priority|fast|
|priority|instant|
|priority|internal|
|priority|regular|
|priority|wire|
|type|bankTransfer|
|type|internalTransfer|
|type|internalDirectDebit|

<h2 id="tocS_TransferNotificationCounterParty">TransferNotificationCounterParty</h2>
<!-- backwards compatibility -->
<a id="schematransfernotificationcounterparty"></a>
<a id="schema_TransferNotificationCounterParty"></a>
<a id="tocStransfernotificationcounterparty"></a>
<a id="tocstransfernotificationcounterparty"></a>

```json
{
  "balanceAccountId": "string",
  "bankAccount": {
    "accountHolder": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dateOfBirth": "1970-01-01",
      "email": "string",
      "firstName": "string",
      "fullName": "string",
      "lastName": "string",
      "reference": "string",
      "type": "unknown",
      "url": "string"
    },
    "accountIdentification": {
      "accountNumber": "string",
      "bsbCode": "string",
      "type": "auLocal"
    },
    "storedPaymentMethodId": "string"
  },
  "card": {
    "cardHolder": {
      "address": {
        "city": "string",
        "country": "string",
        "line1": "string",
        "line2": "string",
        "postalCode": "string",
        "stateOrProvince": "string"
      },
      "dateOfBirth": "1970-01-01",
      "email": "string",
      "firstName": "string",
      "fullName": "string",
      "lastName": "string",
      "reference": "string",
      "type": "unknown",
      "url": "string"
    },
    "cardIdentification": {
      "expiryMonth": "st",
      "expiryYear": "stri",
      "issueNumber": "st",
      "number": "string",
      "startMonth": "st",
      "startYear": "stri",
      "storedPaymentMethodId": "string"
    }
  },
  "merchant": {
    "acquirerId": "string",
    "city": "string",
    "country": "string",
    "countryCode": "string",
    "mcc": "string",
    "merchantId": "string",
    "name": "string",
    "postalCode": "string"
  },
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceAccountId|string|false|none|The unique identifier of the counterparty [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).|
|bankAccount|[BankAccountV3](#schemabankaccountv3)|false|none|Contains information about the counterparty bank account.|
|card|[Card](#schemacard)|false|none|Contains information about the counterparty card.|
|merchant|[TransferNotificationMerchantData](#schematransfernotificationmerchantdata)|false|none|Contains information about the merchant.|
|transferInstrumentId|string|false|none|The unique identifier of the counterparty [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).|

<h2 id="tocS_TransferNotificationMerchantData">TransferNotificationMerchantData</h2>
<!-- backwards compatibility -->
<a id="schematransfernotificationmerchantdata"></a>
<a id="schema_TransferNotificationMerchantData"></a>
<a id="tocStransfernotificationmerchantdata"></a>
<a id="tocstransfernotificationmerchantdata"></a>

```json
{
  "acquirerId": "string",
  "city": "string",
  "country": "string",
  "countryCode": "string",
  "mcc": "string",
  "merchantId": "string",
  "name": "string",
  "postalCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquirerId|string|false|none|The unique identifier of the merchant's acquirer.|
|city|string|false|none|The city where the merchant is located.|
|country|string|false|none|The country where the merchant is located.|
|countryCode|string|false|none|The two-character country code of the merchant's location, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.|
|mcc|string|false|none|The merchant category code.|
|merchantId|string|false|none|The unique identifier of the merchant.|
|name|string|false|none|The name of the merchant's shop or service.|
|postalCode|string|false|none|The postal code of the merchant.|

<h2 id="tocS_TransferNotificationValidationFact">TransferNotificationValidationFact</h2>
<!-- backwards compatibility -->
<a id="schematransfernotificationvalidationfact"></a>
<a id="schema_TransferNotificationValidationFact"></a>
<a id="tocStransfernotificationvalidationfact"></a>
<a id="tocstransfernotificationvalidationfact"></a>

```json
{
  "result": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|string|false|none|The evaluation result of the validation fact.|
|type|string|false|none|The type of the validation fact.|

<h2 id="tocS_TransferRequestReview">TransferRequestReview</h2>
<!-- backwards compatibility -->
<a id="schematransferrequestreview"></a>
<a id="schema_TransferRequestReview"></a>
<a id="tocStransferrequestreview"></a>
<a id="tocstransferrequestreview"></a>

```json
{
  "numberOfApprovalsRequired": 0,
  "scaOnApproval": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfApprovalsRequired|integer(int32)|false|none|Specifies the number of [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) required to process the transfer.|
|scaOnApproval|boolean|false|none|Specifies whether you will initiate Strong Customer Authentication (SCA) in thePOST [/transfers/approve](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) request.<br><br>Only applies to transfers made with an Adyen [business account](https://docs.adyen.com/platforms/business-accounts).|

<h2 id="tocS_TransferReview">TransferReview</h2>
<!-- backwards compatibility -->
<a id="schematransferreview"></a>
<a id="schema_TransferReview"></a>
<a id="tocStransferreview"></a>
<a id="tocstransferreview"></a>

```json
{
  "numberOfApprovalsRequired": 0,
  "scaOnApproval": "completed"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfApprovalsRequired|integer(int32)|false|none|Shows the number of [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) required to process the transfer.|
|scaOnApproval|string|false|none|Shows the status of the Strong Customer Authentication (SCA) process.<br><br>Possible values: **required**, **notApplicable**.|

#### Enumerated Values

|Property|Value|
|---|---|
|scaOnApproval|completed|
|scaOnApproval|notApplicable|
|scaOnApproval|required|

<h2 id="tocS_TransferServiceRestServiceError">TransferServiceRestServiceError</h2>
<!-- backwards compatibility -->
<a id="schematransferservicerestserviceerror"></a>
<a id="schema_TransferServiceRestServiceError"></a>
<a id="tocStransferservicerestserviceerror"></a>
<a id="tocstransferservicerestserviceerror"></a>

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
  "response": {},
  "routingDetails": [
    {
      "detail": "string",
      "errorCode": "string",
      "priority": "crossBorder",
      "title": "string"
    }
  ],
  "status": 0,
  "title": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|A human-readable explanation specific to this occurrence of the problem.|
|errorCode|string|true|none|A code that identifies the problem type.|
|instance|string|false|none|A unique URI that identifies the specific occurrence of the problem.|
|invalidFields|[[InvalidField](#schemainvalidfield)]|false|none|Detailed explanation of each validation error, when applicable.|
|requestId|string|false|none|A unique reference for the request, essentially the same as `pspReference`.|
|response|[JSONObject](#schemajsonobject)|false|none|JSON response payload.|
|routingDetails|[[RoutingDetails](#schemaroutingdetails)]|false|none|Detailed explanation of each attempt to route the transfer with the priorities from the request.|
|status|integer(int32)|true|none|The HTTP status code.|
|title|string|true|none|A short, human-readable summary of the problem type.|
|type|string|true|none|A URI that identifies the problem type, pointing to human-readable documentation on this problem type.|

<h2 id="tocS_TransferView">TransferView</h2>
<!-- backwards compatibility -->
<a id="schematransferview"></a>
<a id="schema_TransferView"></a>
<a id="tocStransferview"></a>
<a id="tocstransferview"></a>

```json
{
  "categoryData": {
    "priority": "crossBorder",
    "type": "bank"
  },
  "id": "string",
  "reference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryData|[BankCategoryData](#schemabankcategorydata) \| [InternalCategoryData](#schemainternalcategorydata) \| [IssuedCard](#schemaissuedcard) \| [PlatformPayment](#schemaplatformpayment)|false|none|The relevant data according to the transfer category.|
|id|string|false|none|The ID of the resource.|
|reference|string|true|none|The [`reference`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_reference) from the `/transfers` request. If you haven't provided any, Adyen generates a unique reference.|

<h2 id="tocS_UKFpsTracingData">UKFpsTracingData</h2>
<!-- backwards compatibility -->
<a id="schemaukfpstracingdata"></a>
<a id="schema_UKFpsTracingData"></a>
<a id="tocSukfpstracingdata"></a>
<a id="tocsukfpstracingdata"></a>

```json
{
  "fpid": "string",
  "type": "ukFps"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fpid|string|true|none|The FPS trace number. This is a unique identifier assigned to transfers processed by [FPS](https://www.bankofengland.co.uk/payment-systems/services/faster-payments-service).|
|type|string|true|none|**ukFps**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ukFps|

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

<h2 id="tocS_USAchTracingData">USAchTracingData</h2>
<!-- backwards compatibility -->
<a id="schemausachtracingdata"></a>
<a id="schema_USAchTracingData"></a>
<a id="tocSusachtracingdata"></a>
<a id="tocsusachtracingdata"></a>

```json
{
  "traceNumber": "string",
  "type": "usAch"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|traceNumber|string|true|none|The ACH trace number. This is a unique 15-digit identifier assigned to transfers processed by [ACH](https://fiscal.treasury.gov/payments-from-government/automated-clearing-house-ach).|
|type|string|true|none|**usAch**|

#### Enumerated Values

|Property|Value|
|---|---|
|type|usAch|

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

<h2 id="tocS_UltimatePartyIdentification">UltimatePartyIdentification</h2>
<!-- backwards compatibility -->
<a id="schemaultimatepartyidentification"></a>
<a id="schema_UltimatePartyIdentification"></a>
<a id="tocSultimatepartyidentification"></a>
<a id="tocsultimatepartyidentification"></a>

```json
{
  "address": {
    "city": "string",
    "country": "string",
    "line1": "string",
    "line2": "string",
    "postalCode": "string",
    "stateOrProvince": "string"
  },
  "dateOfBirth": "1970-01-01",
  "email": "string",
  "firstName": "string",
  "fullName": "string",
  "fundingInstrument": {
    "cardIdentification": {
      "expiryMonth": "st",
      "expiryYear": "stri",
      "issueNumber": "st",
      "number": "string",
      "startMonth": "st",
      "startYear": "stri",
      "storedPaymentMethodId": "string"
    },
    "networkPaymentReference": "string",
    "reference": "string",
    "sourceOfFunds": "DEBIT"
  },
  "lastName": "string",
  "reference": "string",
  "type": "unknown",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|The address of the bank account or card owner.|
|dateOfBirth|string(date)|false|none|The date of birth of the individual in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. For example, **YYYY-MM-DD**.<br><br>Allowed only when `type` is **individual**.|
|email|string|false|none|The email address of the organization or individual. Maximum length: 254 characters.|
|firstName|string|false|none|The first name of the individual.<br><br>Supported characters: [a-z] [A-Z] - . / — and space.<br><br>This parameter is:<br>- Allowed only when `type` is **individual**.<br>- Required when `category` is **card**.|
|fullName|string|false|none|The full name of the entity that owns the bank account or card.<br><br>Supported characters: [a-z] [A-Z] [0-9] , . ; : - — / \ + & ! ? @ ( ) " ' and space.<br><br>Required when `category` is **bank**.|
|fundingInstrument|[FundingInstrument](#schemafundinginstrument)|false|none|Details of the card or token used to fund the pay-in transaction.|
|lastName|string|false|none|The last name of the individual.<br><br>Supported characters: [a-z] [A-Z] - . / — and space.<br><br>This parameter is:<br>- Allowed only when `type` is **individual**.<br>- Required when `category` is **card**.|
|reference|string|false|none|A unique reference to identify the party or counterparty involved in the transfer. For example, your client's unique wallet or payee ID.<br><br>Required when you include `cardIdentification.storedPaymentMethodId`.|
|type|string|false|none|The type of entity that owns the bank account or card.<br><br>Possible values: **individual**, **organization**, or **unknown**.<br><br>Required when `category` is **card**. In this case, the value must be **individual**.|
|url|string|false|none|The URL of the organization or individual. Maximum length: 255 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|individual|
|type|organization|
|type|unknown|

<h2 id="tocS_CashOut">CashOut</h2>
<!-- backwards compatibility -->
<a id="schemacashout"></a>
<a id="schema_CashOut"></a>
<a id="tocScashout"></a>
<a id="tocscashout"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  },
  "counterparty": {
    "transferInstrumentId": "string"
  },
  "description": "string",
  "fee": {
    "amount": {
      "currency": "string",
      "value": 0
    }
  },
  "id": "string",
  "instructingBalanceAccountId": "string",
  "referenceForBeneficiary": "string",
  "transferInstrumentId": "string",
  "transfers": [
    {
      "amount": {
        "currency": "string",
        "value": 0
      },
      "id": "string",
      "type": "cashoutRepayment"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|Contains the amount of the cashout, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|
|counterparty|[CashOutInfoCounterparty](#schemacashoutinfocounterparty)|false|none|Contains information about the counterparty of the cashout transfer.|
|description|string|false|none|Allowed and returned only when you provide the `counterparty.transferInstrumentId` field.<br><br>Your description of the cashout transfer. This description is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.<br><br>If you do not provide a description, Adyen generates a description automatically. This generated description is not returned in the response.<br><br>Supported characters: **[a-z] [A-Z] [0-9] / - ? : ( ) . , ' + Space**.|
|fee|[Fee](#schemafee)|false|none|Contains the currency and value of the cashout fee, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|
|id|string|true|none|The unique identifier of the cashout reference.|
|instructingBalanceAccountId|string|true|none|The unique identifier of the balance account that initiates the cashout request.|
|referenceForBeneficiary|string|false|none|Allowed and returned only when you provide the `counterparty.transferInstrumentId` field.<br><br>The reference that is sent to the recipient of a cashout transfer. This reference is also sent in all webhooks related to the cashout transfer, so you can use it to track the status of the transfer.<br><br>If you do not provide a reference for the beneficiary, Adyen generates one automatically. This generated reference for the beneficiary is not returned in the response.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**.|
|transferInstrumentId|string|false|none|**Deprecated.** **Use `counterparty.transferInstrumentId` instead.**<br><br>The unique identifier of the counterparty transfer instrument.|
|transfers|[[CashOutTransfer](#schemacashouttransfer)]|true|none|The list of transfers related to cashout.|

<h2 id="tocS_CashOutInfo">CashOutInfo</h2>
<!-- backwards compatibility -->
<a id="schemacashoutinfo"></a>
<a id="schema_CashOutInfo"></a>
<a id="tocScashoutinfo"></a>
<a id="tocscashoutinfo"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  },
  "counterparty": {
    "transferInstrumentId": "string"
  },
  "description": "string",
  "fee": {
    "amount": {
      "currency": "string",
      "value": 0
    }
  },
  "id": "string",
  "instructingBalanceAccountId": "string",
  "referenceForBeneficiary": "string",
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|Contains the amount of the cashout, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|
|counterparty|[CashOutInfoCounterparty](#schemacashoutinfocounterparty)|false|none|Contains information about the counterparty of the cashout transfer.|
|description|string|false|none|Allowed and returned only when you provide the `counterparty.transferInstrumentId` field.<br><br>Your description of the cashout transfer. This description is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.<br><br>If you do not provide a description, Adyen generates a description automatically. This generated description is not returned in the response.<br><br>Supported characters: **[a-z] [A-Z] [0-9] / - ? : ( ) . , ' + Space**.|
|fee|[Fee](#schemafee)|false|none|Contains the currency and value of the cashout fee, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|
|id|string|false|read-only|The ID of the resource.|
|instructingBalanceAccountId|string|true|none|The unique identifier of the balance account that initiates the cashout request.|
|referenceForBeneficiary|string|false|none|Allowed and returned only when you provide the `counterparty.transferInstrumentId` field.<br><br>The reference that is sent to the recipient of a cashout transfer. This reference is also sent in all webhooks related to the cashout transfer, so you can use it to track the status of the transfer.<br><br>If you do not provide a reference for the beneficiary, Adyen generates one automatically. This generated reference for the beneficiary is not returned in the response.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**.|
|transferInstrumentId|string|false|none|**Deprecated.** **Use `counterparty.transferInstrumentId` instead.**<br><br>The unique identifier of the counterparty transfer instrument.|

<h2 id="tocS_CashOutInfoCounterparty">CashOutInfoCounterparty</h2>
<!-- backwards compatibility -->
<a id="schemacashoutinfocounterparty"></a>
<a id="schema_CashOutInfoCounterparty"></a>
<a id="tocScashoutinfocounterparty"></a>
<a id="tocscashoutinfocounterparty"></a>

```json
{
  "transferInstrumentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transferInstrumentId|string|false|none|The unique identifier of the counterparty transfer instrument.<br><br>If you do not provide this field, the cashout funds remain in the instructing balance account after the cashout transfer is settled.|

<h2 id="tocS_CashOutTransfer">CashOutTransfer</h2>
<!-- backwards compatibility -->
<a id="schemacashouttransfer"></a>
<a id="schema_CashOutTransfer"></a>
<a id="tocScashouttransfer"></a>
<a id="tocscashouttransfer"></a>

```json
{
  "amount": {
    "currency": "string",
    "value": 0
  },
  "id": "string",
  "type": "cashoutRepayment"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The amount of the cashout instruction transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|
|id|string|true|none|The reference of the cashout transfer.|
|type|string|true|none|The type of the cashout transfer.<br><br>Possible values: <br>- **cashoutRepayment**: Corresponds to the transfer created to deduct the cashout amount after settlement.<br>- **cashoutFee**: Corresponds to the transfer created to debit the cashout fee form the user's balance account.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|cashoutRepayment|
|type|cashoutFee|

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
