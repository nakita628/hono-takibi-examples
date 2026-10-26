<h1 id="fund-api">Fund API v6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API is used for the classic integration. If you are just starting your implementation, refer to our [new integration guide](https://docs.adyen.com/adyen-for-platforms-model) instead.

The Fund API provides endpoints for managing the funds in the accounts on your platform. These management operations include, for example, the transfer of funds from one account to another, the payout of funds to an account holder, and the retrieval of balances in an account.

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
The Fund API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://cal-test.adyen.com/cal/services/Fund/v6/accountHolderBalance
```

Base URLs:

* <a href="https://cal-test.adyen.com/cal/services/Fund/v6">https://cal-test.adyen.com/cal/services/Fund/v6</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="fund-api-general">General</h1>

## Get the balances of an account holder

<a id="opIdpost-accountHolderBalance"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Fund/v6/accountHolderBalance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER"
  }'
```

`POST /accountHolderBalance`

Returns the account balances of an account holder. An account's balances are organized according by currencies. This mean that an account may have multiple balances: one for each currency.

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER"
}
```

<h3 id="get-the-balances-of-an-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountHolderBalanceRequest](#schemaaccountholderbalancerequest)|false|none|
|» accountHolderCode|body|string|true|The code of the Account Holder of which to retrieve the balance.|

> Example responses

> 200 Response

```json
{
  "balancePerAccount": [
    {
      "accountCode": "string",
      "detailBalance": {
        "balance": [
          {
            "currency": "str",
            "value": 0
          }
        ],
        "onHoldBalance": [
          {
            "currency": "str",
            "value": 0
          }
        ],
        "pendingBalance": [
          {
            "currency": "str",
            "value": 0
          }
        ]
      }
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
  "resultCode": "string",
  "totalBalance": {
    "balance": [
      {
        "currency": "str",
        "value": 0
      }
    ],
    "onHoldBalance": [
      {
        "currency": "str",
        "value": 0
      }
    ],
    "pendingBalance": [
      {
        "currency": "str",
        "value": 0
      }
    ]
  }
}
```

> 202 Response

```json
{
  "balancePerAccount": [
    {
      "accountCode": "string",
      "detailBalance": {
        "balance": [
          {
            "currency": "str",
            "value": 0
          }
        ],
        "onHoldBalance": [
          {
            "currency": "str",
            "value": 0
          }
        ],
        "pendingBalance": [
          {
            "currency": "str",
            "value": 0
          }
        ]
      }
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
  "resultCode": "string",
  "totalBalance": {
    "balance": [
      {
        "currency": "str",
        "value": 0
      }
    ],
    "onHoldBalance": [
      {
        "currency": "str",
        "value": 0
      }
    ],
    "pendingBalance": [
      {
        "currency": "str",
        "value": 0
      }
    ]
  }
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

<h3 id="get-the-balances-of-an-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[AccountHolderBalanceResponse](#schemaaccountholderbalanceresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[AccountHolderBalanceResponse](#schemaaccountholderbalanceresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Get a list of transactions

<a id="opIdpost-accountHolderTransactionList"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Fund/v6/accountHolderTransactionList \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
    "transactionListsPerAccount": [
      {
        "accountCode": "195752115",
        "page": 1
      }
    ]
  }'
```

`POST /accountHolderTransactionList`

Returns a list of transactions for an account holder's accounts. You can specify the accounts and transaction statuses to be included on the list. The call returns a maximum of 50 transactions for each account. To retrieve all transactions, you must make another call with the 'page' value incremented. Transactions are listed in chronological order, with the most recent transaction first.

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
  "transactionListsPerAccount": [
    {
      "accountCode": "195752115",
      "page": 1
    }
  ]
}
```

<h3 id="get-a-list-of-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountHolderTransactionListRequest](#schemaaccountholdertransactionlistrequest)|false|none|
|» accountHolderCode|body|string|true|The code of the account holder that owns the account(s) of which retrieve the transaction list.|
|» transactionListsPerAccount|body|[[TransactionListForAccount](#schematransactionlistforaccount)]|false|A list of accounts to include in the transaction list. If left blank, the last fifty (50) transactions for all accounts of the account holder will be included.|
|» transactionStatuses|body|[string]|false|A list of statuses to include in the transaction list. If left blank, all transactions will be included.<br>>Permitted values:<br>>* `PendingCredit` - a pending balance credit.<br>>* `CreditFailed` - a pending credit failure; the balance will not be credited.<br>>* `Credited` - a credited balance.<br>>* `PendingDebit` - a pending balance debit (e.g., a refund).<br>>* `CreditClosed` - a pending credit closed; the balance will not be credited.<br>>* `CreditSuspended` - a pending credit closed; the balance will not be credited.<br>>* `DebitFailed` - a pending debit failure; the balance will not be debited.<br>>* `Debited` - a debited balance (e.g., a refund).<br>>* `DebitReversedReceived` - a pending refund reversal.<br>>* `DebitedReversed` - a reversed refund.<br>>* `ChargebackReceived` - a received chargeback request.<br>>* `Chargeback` - a processed chargeback.<br>>* `ChargebackReversedReceived` - a pending chargeback reversal.<br>>* `ChargebackReversed` - a reversed chargeback.<br>>* `Converted` - converted.<br>>* `ManualCorrected` - manual booking/adjustment by Adyen.<br>>* `Payout` - a payout.<br>>* `PayoutReversed` - a reversed payout.<br>>* `PendingFundTransfer` - a pending transfer of funds from one account to another.<br>>* `FundTransfer` - a transfer of funds from one account to another.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» transactionStatuses|BalanceNotPaidOutTransfer|
|» transactionStatuses|BalancePlatformFundTransfer|
|» transactionStatuses|BalancePlatformSweep|
|» transactionStatuses|BalancePlatformSweepReturned|
|» transactionStatuses|Chargeback|
|» transactionStatuses|ChargebackCorrection|
|» transactionStatuses|ChargebackCorrectionReceived|
|» transactionStatuses|ChargebackReceived|
|» transactionStatuses|ChargebackReversed|
|» transactionStatuses|ChargebackReversedCorrection|
|» transactionStatuses|ChargebackReversedCorrectionReceived|
|» transactionStatuses|ChargebackReversedReceived|
|» transactionStatuses|Converted|
|» transactionStatuses|CreditClosed|
|» transactionStatuses|CreditFailed|
|» transactionStatuses|CreditReversed|
|» transactionStatuses|CreditReversedReceived|
|» transactionStatuses|CreditSuspended|
|» transactionStatuses|Credited|
|» transactionStatuses|DebitFailed|
|» transactionStatuses|DebitReversedReceived|
|» transactionStatuses|Debited|
|» transactionStatuses|DebitedReversed|
|» transactionStatuses|DepositCorrectionCredited|
|» transactionStatuses|DepositCorrectionDebited|
|» transactionStatuses|DepositCorrectionReceived|
|» transactionStatuses|Fee|
|» transactionStatuses|FeeReceived|
|» transactionStatuses|FundTransfer|
|» transactionStatuses|FundTransferReversed|
|» transactionStatuses|InvoiceDeductionCredited|
|» transactionStatuses|InvoiceDeductionDebited|
|» transactionStatuses|InvoiceDeductionReceived|
|» transactionStatuses|ManualCorrected|
|» transactionStatuses|ManualCorrectionCredited|
|» transactionStatuses|ManualCorrectionDebited|
|» transactionStatuses|MerchantPayin|
|» transactionStatuses|MerchantPayinReceived|
|» transactionStatuses|MerchantPayinReversed|
|» transactionStatuses|Payout|
|» transactionStatuses|PayoutReversed|
|» transactionStatuses|PendingCredit|
|» transactionStatuses|PendingDebit|
|» transactionStatuses|PendingFundTransfer|
|» transactionStatuses|ReCredited|
|» transactionStatuses|ReCreditedReceived|
|» transactionStatuses|SecondChargeback|
|» transactionStatuses|SecondChargebackCorrection|
|» transactionStatuses|SecondChargebackCorrectionReceived|
|» transactionStatuses|SecondChargebackReceived|

> Example responses

> 200 Response

```json
{
  "accountTransactionLists": [
    {
      "accountCode": "string",
      "hasNextPage": true,
      "transactions": [
        {
          "amount": {
            "currency": "str",
            "value": 0
          },
          "bankAccountDetail": {
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
          },
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "creationDate": "1970-01-01T00:00:00Z",
          "description": "string",
          "destinationAccountCode": "string",
          "disputePspReference": "string",
          "disputeReasonCode": "string",
          "merchantReference": "string",
          "paymentPspReference": "string",
          "payoutPspReference": "string",
          "pspReference": "string",
          "sourceAccountCode": "string",
          "transactionStatus": "BalanceNotPaidOutTransfer",
          "transferCode": "string"
        }
      ]
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

> 202 Response

```json
{
  "accountTransactionLists": [
    {
      "accountCode": "string",
      "hasNextPage": true,
      "transactions": [
        {
          "amount": {
            "currency": "str",
            "value": 0
          },
          "bankAccountDetail": {
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
          },
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "creationDate": "1970-01-01T00:00:00Z",
          "description": "string",
          "destinationAccountCode": "string",
          "disputePspReference": "string",
          "disputeReasonCode": "string",
          "merchantReference": "string",
          "paymentPspReference": "string",
          "payoutPspReference": "string",
          "pspReference": "string",
          "sourceAccountCode": "string",
          "transactionStatus": "BalanceNotPaidOutTransfer",
          "transferCode": "string"
        }
      ]
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

<h3 id="get-a-list-of-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[AccountHolderTransactionListResponse](#schemaaccountholdertransactionlistresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[AccountHolderTransactionListResponse](#schemaaccountholdertransactionlistresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Send a direct debit request

<a id="opIdpost-debitAccountHolder"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Fund/v6/debitAccountHolder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "ACCOUNT_HOLDER_CODE",
    "description": "YOUR_DESCRIPTION",
    "bankAccountUUID": "000b81aa-ae7e-4492-aa7e-72b2129dce0c",
    "amount": {
      "value": 6200,
      "currency": "USD"
    },
    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
    "splits": [
      {
        "amount": {
          "value": 6000
        },
        "type": "MarketPlace",
        "account": "8535516988037431",
        "reference": "YOUR_SPLIT_REFERENCE_1"
      },
      {
        "amount": {
          "value": 200
        },
        "type": "Commission",
        "reference": "YOUR_SPLIT_REFERENCE_2"
      }
    ]
  }'
```

`POST /debitAccountHolder`

Sends a direct debit request to an account holder's bank account. If the direct debit is successful, the funds are settled in the accounts specified in the split instructions. Adyen sends the result of the direct debit in a [`DIRECT_DEBIT_INITIATED`](https://docs.adyen.com/api-explorer/#/NotificationService/latest/post/DIRECT_DEBIT_INITIATED) notification webhook.

 To learn more about direct debits, see [Top up accounts](https://docs.adyen.com/classic-platforms/top-up-accounts).

> Body parameter

```json
{
  "accountHolderCode": "ACCOUNT_HOLDER_CODE",
  "description": "YOUR_DESCRIPTION",
  "bankAccountUUID": "000b81aa-ae7e-4492-aa7e-72b2129dce0c",
  "amount": {
    "value": 6200,
    "currency": "USD"
  },
  "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
  "splits": [
    {
      "amount": {
        "value": 6000
      },
      "type": "MarketPlace",
      "account": "8535516988037431",
      "reference": "YOUR_SPLIT_REFERENCE_1"
    },
    {
      "amount": {
        "value": 200
      },
      "type": "Commission",
      "reference": "YOUR_SPLIT_REFERENCE_2"
    }
  ]
}
```

<h3 id="send-a-direct-debit-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DebitAccountHolderRequest](#schemadebitaccountholderrequest)|false|none|
|» accountHolderCode|body|string|true|The code of the account holder.|
|» amount|body|[Amount](#schemaamount)|true|The amount to be debited from the account holder's bank account.|
|» bankAccountUUID|body|string|true|The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account.|
|» description|body|string|false|A description of the direct debit. Maximum length: 35 characters.<br><br>Allowed characters: **a-z**, **A-Z**, **0-9**, and special characters **/?:().,'+ ";**.|
|» merchantAccount|body|string|true|Your merchant account.|
|» splits|body|[[Split](#schemasplit)]|true|Contains instructions on how to split the funds between the accounts in your platform. The request must have at least one split item.|

> Example responses

> 200 Response

```json
{
  "pspReference": "8816480354727275",
  "submittedAsync": "false"
}
```

> 202 Response

```json
{
  "accountHolderCode": "string",
  "bankAccountUUID": "string",
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
  "merchantReferences": [
    "string"
  ],
  "pspReference": "string",
  "resultCode": "string"
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

<h3 id="send-a-direct-debit-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[DebitAccountHolderResponse](#schemadebitaccountholderresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[DebitAccountHolderResponse](#schemadebitaccountholderresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Pay out from an account to the account holder

<a id="opIdpost-payoutAccountHolder"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Fund/v6/payoutAccountHolder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountCode": "118731451",
    "amount": {
      "currency": "EUR",
      "value": 99792
    },
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
    "description": "12345 – Test",
    "bankAccountUUID": "000b81aa-ae7e-4492-aa7e-72b2129dce0c"
  }'
```

`POST /payoutAccountHolder`

Pays out a specified amount from an account to the bank account of account holder.

> Body parameter

```json
{
  "accountCode": "118731451",
  "amount": {
    "currency": "EUR",
    "value": 99792
  },
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
  "description": "12345 – Test",
  "bankAccountUUID": "000b81aa-ae7e-4492-aa7e-72b2129dce0c"
}
```

<h3 id="pay-out-from-an-account-to-the-account-holder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PayoutAccountHolderRequest](#schemapayoutaccountholderrequest)|false|none|
|» accountCode|body|string|true|The code of the account from which the payout is to be made.|
|» accountHolderCode|body|string|true|The code of the Account Holder who owns the account from which the payout is to be made.<br>The Account Holder is the party to which the payout will be made.|
|» amount|body|[Amount](#schemaamount)|false|An object containing the currency and value of the payout.<br>If the account has multiple currencies, specify the currency to be used.<br>If the `bankAccountUUID` is provided in the request, the currency supported by the bank is used.<br>If the `payoutMethodCode` is provided in the request, the specified payout method is selected.|
|» bankAccountUUID|body|string|false|The unique ID of the Bank Account held by the Account Holder to which the payout is to be made.<br>If left blank, a bank account is automatically selected.|
|» description|body|string|false|A description of the payout. Maximum 200 characters.<br>Allowed: **abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/?:().,'+ ";**|
|» merchantReference|body|string|false|A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.|
|» payoutMethodCode|body|string|false|The unique ID of the payout method held by the Account Holder to which the payout is to be made.<br>If left blank, a payout instrument is automatically selected.|
|» payoutSpeed|body|string|false|Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.|

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
  "bankAccountUUID": "string",
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
  "merchantReference": "string",
  "payoutSpeed": "STANDARD",
  "pspReference": "string",
  "resultCode": "string"
}
```

> 202 Response

```json
{
  "bankAccountUUID": "string",
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
  "merchantReference": "string",
  "payoutSpeed": "STANDARD",
  "pspReference": "string",
  "resultCode": "string"
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

<h3 id="pay-out-from-an-account-to-the-account-holder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PayoutAccountHolderResponse](#schemapayoutaccountholderresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[PayoutAccountHolderResponse](#schemapayoutaccountholderresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Refund a funds transfer

<a id="opIdpost-refundFundsTransfer"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Fund/v6/refundFundsTransfer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "originalReference": "PSP_REFERENCE_OF_TRANSFER_TO_REFUND",
    "amount": {
      "currency": "EUR",
      "value": 1000
    },
    "merchantReference": "YOUR_REFERENCE_ID"
  }'
```

`POST /refundFundsTransfer`

Refunds funds transferred from one account to another. Both accounts must be in the same platform, but can have different account holders. 

> Body parameter

```json
{
  "originalReference": "PSP_REFERENCE_OF_TRANSFER_TO_REFUND",
  "amount": {
    "currency": "EUR",
    "value": 1000
  },
  "merchantReference": "YOUR_REFERENCE_ID"
}
```

<h3 id="refund-a-funds-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RefundFundsTransferRequest](#schemarefundfundstransferrequest)|false|none|
|» amount|body|[Amount](#schemaamount)|true|The amount to be transferred.|
|» merchantReference|body|string|false|A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.|
|» originalReference|body|string|true|A PSP reference of the original fund transfer.|

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
  "merchantReference": "string",
  "message": "string",
  "originalReference": "string",
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
  "merchantReference": "string",
  "message": "string",
  "originalReference": "string",
  "pspReference": "string",
  "resultCode": "string"
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

<h3 id="refund-a-funds-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[RefundFundsTransferResponse](#schemarefundfundstransferresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[RefundFundsTransferResponse](#schemarefundfundstransferresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Refund all transactions of an account since the most recent payout

<a id="opIdpost-refundNotPaidOutTransfers"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Fund/v6/refundNotPaidOutTransfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
    "accountCode": "189184578"
  }'
```

`POST /refundNotPaidOutTransfers`

Refunds all the transactions of an account that have taken place since the most recent payout. This request is on a account basis (as opposed to a payment basis), so only the portion of the payment that was made to the specified account is refunded. The commissions, fees, and payments to other accounts remain in the accounts to which they were sent as designated by the original payment's split details.

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
  "accountCode": "189184578"
}
```

<h3 id="refund-all-transactions-of-an-account-since-the-most-recent-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RefundNotPaidOutTransfersRequest](#schemarefundnotpaidouttransfersrequest)|false|none|
|» accountCode|body|string|true|The code of the account from which to perform the refund(s).|
|» accountHolderCode|body|string|true|The code of the Account Holder which owns the account from which to perform the refund(s).|

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

<h3 id="refund-all-transactions-of-an-account-since-the-most-recent-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[RefundNotPaidOutTransfersResponse](#schemarefundnotpaidouttransfersresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[RefundNotPaidOutTransfersResponse](#schemarefundnotpaidouttransfersresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Designate a beneficiary account and transfer the benefactor's current balance

<a id="opIdpost-setupBeneficiary"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Fund/v6/setupBeneficiary \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "destinationAccountCode": "128952522",
    "merchantReference": "YOUR_REFERENCE_ID",
    "sourceAccountCode": "134498192"
  }'
```

`POST /setupBeneficiary`

Defines a benefactor and a beneficiary relationship between two accounts. At the time of benefactor/beneficiary setup, the funds in the benefactor account are transferred to the beneficiary account, and any further payments to the benefactor account are automatically sent to the beneficiary account. A series of benefactor/beneficiaries may not exceed four beneficiaries and may not have a cycle in it.

> Body parameter

```json
{
  "destinationAccountCode": "128952522",
  "merchantReference": "YOUR_REFERENCE_ID",
  "sourceAccountCode": "134498192"
}
```

<h3 id="designate-a-beneficiary-account-and-transfer-the-benefactors-current-balance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SetupBeneficiaryRequest](#schemasetupbeneficiaryrequest)|false|none|
|» destinationAccountCode|body|string|true|The destination account code.|
|» merchantReference|body|string|false|A value that can be supplied at the discretion of the executing user.|
|» sourceAccountCode|body|string|true|The benefactor account.|

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

<h3 id="designate-a-beneficiary-account-and-transfer-the-benefactors-current-balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[SetupBeneficiaryResponse](#schemasetupbeneficiaryresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[SetupBeneficiaryResponse](#schemasetupbeneficiaryresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

## Transfer funds between platform accounts

<a id="opIdpost-transferFunds"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Fund/v6/transferFunds \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "sourceAccountCode": "100000000",
    "destinationAccountCode": "190324759",
    "amount": {
      "currency": "EUR",
      "value": 2000
    },
    "transferCode": "TransferCode_1"
  }'
```

`POST /transferFunds`

Transfers funds from one account to another account. Both accounts must be in the same platform, but can have different account holders. The transfer must include a transfer code, which should be determined by the platform, in compliance with local regulations.

> Body parameter

```json
{
  "sourceAccountCode": "100000000",
  "destinationAccountCode": "190324759",
  "amount": {
    "currency": "EUR",
    "value": 2000
  },
  "transferCode": "TransferCode_1"
}
```

<h3 id="transfer-funds-between-platform-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransferFundsRequest](#schematransferfundsrequest)|false|none|
|» amount|body|[Amount](#schemaamount)|true|The amount to be transferred.|
|» destinationAccountCode|body|string|true|The code of the account to which the funds are to be credited.<br>>The state of the Account Holder of this account must be Active.|
|» merchantReference|body|string|false|A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.|
|» sourceAccountCode|body|string|true|The code of the account from which the funds are to be debited.<br>>The state of the Account Holder of this account must be Active and allow payouts.|
|» transferCode|body|string|true|The code related to the type of transfer being performed.<br>>The permitted codes differ for each platform account and are defined in their service level agreement.|

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
  "merchantReference": "string",
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
  "merchantReference": "string",
  "pspReference": "string",
  "resultCode": "string"
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

<h3 id="transfer-funds-between-platform-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[TransferFundsResponse](#schematransferfundsresponse)|
|202|Accepted|Accepted - the request has been accepted for processing, but the processing has not been completed.|[TransferFundsResponse](#schematransferfundsresponse)|
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

<h2 id="tocS_AccountDetailBalance">AccountDetailBalance</h2>
<!-- backwards compatibility -->
<a id="schemaaccountdetailbalance"></a>
<a id="schema_AccountDetailBalance"></a>
<a id="tocSaccountdetailbalance"></a>
<a id="tocsaccountdetailbalance"></a>

```json
{
  "accountCode": "string",
  "detailBalance": {
    "balance": [
      {
        "currency": "str",
        "value": 0
      }
    ],
    "onHoldBalance": [
      {
        "currency": "str",
        "value": 0
      }
    ],
    "pendingBalance": [
      {
        "currency": "str",
        "value": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The code of the account that holds the balance.|
|detailBalance|[DetailBalance](#schemadetailbalance)|false|none|Details of the balance held by the account.|

<h2 id="tocS_AccountHolderBalanceRequest">AccountHolderBalanceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderbalancerequest"></a>
<a id="schema_AccountHolderBalanceRequest"></a>
<a id="tocSaccountholderbalancerequest"></a>
<a id="tocsaccountholderbalancerequest"></a>

```json
{
  "accountHolderCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the Account Holder of which to retrieve the balance.|

<h2 id="tocS_AccountHolderBalanceResponse">AccountHolderBalanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholderbalanceresponse"></a>
<a id="schema_AccountHolderBalanceResponse"></a>
<a id="tocSaccountholderbalanceresponse"></a>
<a id="tocsaccountholderbalanceresponse"></a>

```json
{
  "balancePerAccount": [
    {
      "accountCode": "string",
      "detailBalance": {
        "balance": [
          {
            "currency": "str",
            "value": 0
          }
        ],
        "onHoldBalance": [
          {
            "currency": "str",
            "value": 0
          }
        ],
        "pendingBalance": [
          {
            "currency": "str",
            "value": 0
          }
        ]
      }
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
  "resultCode": "string",
  "totalBalance": {
    "balance": [
      {
        "currency": "str",
        "value": 0
      }
    ],
    "onHoldBalance": [
      {
        "currency": "str",
        "value": 0
      }
    ],
    "pendingBalance": [
      {
        "currency": "str",
        "value": 0
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balancePerAccount|[[AccountDetailBalance](#schemaaccountdetailbalance)]|false|none|A list of each account and their balances.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|
|totalBalance|[DetailBalance](#schemadetailbalance)|false|none|The total balance of the account holder.|

<h2 id="tocS_AccountHolderTransactionListRequest">AccountHolderTransactionListRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholdertransactionlistrequest"></a>
<a id="schema_AccountHolderTransactionListRequest"></a>
<a id="tocSaccountholdertransactionlistrequest"></a>
<a id="tocsaccountholdertransactionlistrequest"></a>

```json
{
  "accountHolderCode": "string",
  "transactionListsPerAccount": [
    {
      "accountCode": "string",
      "page": 0
    }
  ],
  "transactionStatuses": [
    "BalanceNotPaidOutTransfer"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the account holder that owns the account(s) of which retrieve the transaction list.|
|transactionListsPerAccount|[[TransactionListForAccount](#schematransactionlistforaccount)]|false|none|A list of accounts to include in the transaction list. If left blank, the last fifty (50) transactions for all accounts of the account holder will be included.|
|transactionStatuses|[string]|false|none|A list of statuses to include in the transaction list. If left blank, all transactions will be included.<br>>Permitted values:<br>>* `PendingCredit` - a pending balance credit.<br>>* `CreditFailed` - a pending credit failure; the balance will not be credited.<br>>* `Credited` - a credited balance.<br>>* `PendingDebit` - a pending balance debit (e.g., a refund).<br>>* `CreditClosed` - a pending credit closed; the balance will not be credited.<br>>* `CreditSuspended` - a pending credit closed; the balance will not be credited.<br>>* `DebitFailed` - a pending debit failure; the balance will not be debited.<br>>* `Debited` - a debited balance (e.g., a refund).<br>>* `DebitReversedReceived` - a pending refund reversal.<br>>* `DebitedReversed` - a reversed refund.<br>>* `ChargebackReceived` - a received chargeback request.<br>>* `Chargeback` - a processed chargeback.<br>>* `ChargebackReversedReceived` - a pending chargeback reversal.<br>>* `ChargebackReversed` - a reversed chargeback.<br>>* `Converted` - converted.<br>>* `ManualCorrected` - manual booking/adjustment by Adyen.<br>>* `Payout` - a payout.<br>>* `PayoutReversed` - a reversed payout.<br>>* `PendingFundTransfer` - a pending transfer of funds from one account to another.<br>>* `FundTransfer` - a transfer of funds from one account to another.|

#### Enumerated Values

|Property|Value|
|---|---|
|transactionStatuses|BalanceNotPaidOutTransfer|
|transactionStatuses|BalancePlatformFundTransfer|
|transactionStatuses|BalancePlatformSweep|
|transactionStatuses|BalancePlatformSweepReturned|
|transactionStatuses|Chargeback|
|transactionStatuses|ChargebackCorrection|
|transactionStatuses|ChargebackCorrectionReceived|
|transactionStatuses|ChargebackReceived|
|transactionStatuses|ChargebackReversed|
|transactionStatuses|ChargebackReversedCorrection|
|transactionStatuses|ChargebackReversedCorrectionReceived|
|transactionStatuses|ChargebackReversedReceived|
|transactionStatuses|Converted|
|transactionStatuses|CreditClosed|
|transactionStatuses|CreditFailed|
|transactionStatuses|CreditReversed|
|transactionStatuses|CreditReversedReceived|
|transactionStatuses|CreditSuspended|
|transactionStatuses|Credited|
|transactionStatuses|DebitFailed|
|transactionStatuses|DebitReversedReceived|
|transactionStatuses|Debited|
|transactionStatuses|DebitedReversed|
|transactionStatuses|DepositCorrectionCredited|
|transactionStatuses|DepositCorrectionDebited|
|transactionStatuses|DepositCorrectionReceived|
|transactionStatuses|Fee|
|transactionStatuses|FeeReceived|
|transactionStatuses|FundTransfer|
|transactionStatuses|FundTransferReversed|
|transactionStatuses|InvoiceDeductionCredited|
|transactionStatuses|InvoiceDeductionDebited|
|transactionStatuses|InvoiceDeductionReceived|
|transactionStatuses|ManualCorrected|
|transactionStatuses|ManualCorrectionCredited|
|transactionStatuses|ManualCorrectionDebited|
|transactionStatuses|MerchantPayin|
|transactionStatuses|MerchantPayinReceived|
|transactionStatuses|MerchantPayinReversed|
|transactionStatuses|Payout|
|transactionStatuses|PayoutReversed|
|transactionStatuses|PendingCredit|
|transactionStatuses|PendingDebit|
|transactionStatuses|PendingFundTransfer|
|transactionStatuses|ReCredited|
|transactionStatuses|ReCreditedReceived|
|transactionStatuses|SecondChargeback|
|transactionStatuses|SecondChargebackCorrection|
|transactionStatuses|SecondChargebackCorrectionReceived|
|transactionStatuses|SecondChargebackReceived|

<h2 id="tocS_AccountHolderTransactionListResponse">AccountHolderTransactionListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholdertransactionlistresponse"></a>
<a id="schema_AccountHolderTransactionListResponse"></a>
<a id="tocSaccountholdertransactionlistresponse"></a>
<a id="tocsaccountholdertransactionlistresponse"></a>

```json
{
  "accountTransactionLists": [
    {
      "accountCode": "string",
      "hasNextPage": true,
      "transactions": [
        {
          "amount": {
            "currency": "str",
            "value": 0
          },
          "bankAccountDetail": {
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
          },
          "captureMerchantReference": "string",
          "capturePspReference": "string",
          "creationDate": "1970-01-01T00:00:00Z",
          "description": "string",
          "destinationAccountCode": "string",
          "disputePspReference": "string",
          "disputeReasonCode": "string",
          "merchantReference": "string",
          "paymentPspReference": "string",
          "payoutPspReference": "string",
          "pspReference": "string",
          "sourceAccountCode": "string",
          "transactionStatus": "BalanceNotPaidOutTransfer",
          "transferCode": "string"
        }
      ]
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
|accountTransactionLists|[[AccountTransactionList](#schemaaccounttransactionlist)]|false|none|A list of the transactions.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

<h2 id="tocS_AccountTransactionList">AccountTransactionList</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttransactionlist"></a>
<a id="schema_AccountTransactionList"></a>
<a id="tocSaccounttransactionlist"></a>
<a id="tocsaccounttransactionlist"></a>

```json
{
  "accountCode": "string",
  "hasNextPage": true,
  "transactions": [
    {
      "amount": {
        "currency": "str",
        "value": 0
      },
      "bankAccountDetail": {
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
      },
      "captureMerchantReference": "string",
      "capturePspReference": "string",
      "creationDate": "1970-01-01T00:00:00Z",
      "description": "string",
      "destinationAccountCode": "string",
      "disputePspReference": "string",
      "disputeReasonCode": "string",
      "merchantReference": "string",
      "paymentPspReference": "string",
      "payoutPspReference": "string",
      "pspReference": "string",
      "sourceAccountCode": "string",
      "transactionStatus": "BalanceNotPaidOutTransfer",
      "transferCode": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|The code of the account.|
|hasNextPage|boolean|false|none|Indicates whether there is a next page of transactions available.|
|transactions|[[Transaction](#schematransaction)]|false|none|The list of transactions.|

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

<h2 id="tocS_DebitAccountHolderRequest">DebitAccountHolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemadebitaccountholderrequest"></a>
<a id="schema_DebitAccountHolderRequest"></a>
<a id="tocSdebitaccountholderrequest"></a>
<a id="tocsdebitaccountholderrequest"></a>

```json
{
  "accountHolderCode": "string",
  "amount": {
    "currency": "str",
    "value": 0
  },
  "bankAccountUUID": "string",
  "description": "string",
  "merchantAccount": "string",
  "splits": [
    {
      "account": "string",
      "amount": {
        "currency": "str",
        "value": 0
      },
      "description": "string",
      "reference": "string",
      "type": "AcquiringFees"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The code of the account holder.|
|amount|[Amount](#schemaamount)|true|none|The amount to be debited from the account holder's bank account.|
|bankAccountUUID|string|true|none|The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account.|
|description|string|false|none|A description of the direct debit. Maximum length: 35 characters.<br><br>Allowed characters: **a-z**, **A-Z**, **0-9**, and special characters **/?:().,'+ ";**.|
|merchantAccount|string|true|none|Your merchant account.|
|splits|[[Split](#schemasplit)]|true|none|Contains instructions on how to split the funds between the accounts in your platform. The request must have at least one split item.|

<h2 id="tocS_DebitAccountHolderResponse">DebitAccountHolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemadebitaccountholderresponse"></a>
<a id="schema_DebitAccountHolderResponse"></a>
<a id="tocSdebitaccountholderresponse"></a>
<a id="tocsdebitaccountholderresponse"></a>

```json
{
  "accountHolderCode": "string",
  "bankAccountUUID": "string",
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
  "merchantReferences": [
    "string"
  ],
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|false|none|The code of the account holder.|
|bankAccountUUID|string|false|none|The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|merchantReferences|[string]|false|none|List of the `reference` values from the `split` array in the request.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

<h2 id="tocS_DetailBalance">DetailBalance</h2>
<!-- backwards compatibility -->
<a id="schemadetailbalance"></a>
<a id="schema_DetailBalance"></a>
<a id="tocSdetailbalance"></a>
<a id="tocsdetailbalance"></a>

```json
{
  "balance": [
    {
      "currency": "str",
      "value": 0
    }
  ],
  "onHoldBalance": [
    {
      "currency": "str",
      "value": 0
    }
  ],
  "pendingBalance": [
    {
      "currency": "str",
      "value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|[[Amount](#schemaamount)]|false|none|The list of balances held by the account.|
|onHoldBalance|[[Amount](#schemaamount)]|false|none|The list of on hold balances held by the account.|
|pendingBalance|[[Amount](#schemaamount)]|false|none|The list of pending balances held by the account.|

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

<h2 id="tocS_PayoutAccountHolderRequest">PayoutAccountHolderRequest</h2>
<!-- backwards compatibility -->
<a id="schemapayoutaccountholderrequest"></a>
<a id="schema_PayoutAccountHolderRequest"></a>
<a id="tocSpayoutaccountholderrequest"></a>
<a id="tocspayoutaccountholderrequest"></a>

```json
{
  "accountCode": "string",
  "accountHolderCode": "string",
  "amount": {
    "currency": "str",
    "value": 0
  },
  "bankAccountUUID": "string",
  "description": "string",
  "merchantReference": "string",
  "payoutMethodCode": "string",
  "payoutSpeed": "STANDARD"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|true|none|The code of the account from which the payout is to be made.|
|accountHolderCode|string|true|none|The code of the Account Holder who owns the account from which the payout is to be made.<br>The Account Holder is the party to which the payout will be made.|
|amount|[Amount](#schemaamount)|false|none|An object containing the currency and value of the payout.<br>If the account has multiple currencies, specify the currency to be used.<br>If the `bankAccountUUID` is provided in the request, the currency supported by the bank is used.<br>If the `payoutMethodCode` is provided in the request, the specified payout method is selected.|
|bankAccountUUID|string|false|none|The unique ID of the Bank Account held by the Account Holder to which the payout is to be made.<br>If left blank, a bank account is automatically selected.|
|description|string|false|none|A description of the payout. Maximum 200 characters.<br>Allowed: **abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/?:().,'+ ";**|
|merchantReference|string|false|none|A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.|
|payoutMethodCode|string|false|none|The unique ID of the payout method held by the Account Holder to which the payout is to be made.<br>If left blank, a payout instrument is automatically selected.|
|payoutSpeed|string|false|none|Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.|

#### Enumerated Values

|Property|Value|
|---|---|
|payoutSpeed|INSTANT|
|payoutSpeed|SAME_DAY|
|payoutSpeed|STANDARD|

<h2 id="tocS_PayoutAccountHolderResponse">PayoutAccountHolderResponse</h2>
<!-- backwards compatibility -->
<a id="schemapayoutaccountholderresponse"></a>
<a id="schema_PayoutAccountHolderResponse"></a>
<a id="tocSpayoutaccountholderresponse"></a>
<a id="tocspayoutaccountholderresponse"></a>

```json
{
  "bankAccountUUID": "string",
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
  "merchantReference": "string",
  "payoutSpeed": "STANDARD",
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankAccountUUID|string|false|none|The unique ID of the Bank Account to which the payout was made.|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|merchantReference|string|false|none|The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions.|
|payoutSpeed|string|false|none|Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

#### Enumerated Values

|Property|Value|
|---|---|
|payoutSpeed|INSTANT|
|payoutSpeed|SAME_DAY|
|payoutSpeed|STANDARD|

<h2 id="tocS_RefundFundsTransferRequest">RefundFundsTransferRequest</h2>
<!-- backwards compatibility -->
<a id="schemarefundfundstransferrequest"></a>
<a id="schema_RefundFundsTransferRequest"></a>
<a id="tocSrefundfundstransferrequest"></a>
<a id="tocsrefundfundstransferrequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "merchantReference": "string",
  "originalReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The amount to be transferred.|
|merchantReference|string|false|none|A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.|
|originalReference|string|true|none|A PSP reference of the original fund transfer.|

<h2 id="tocS_RefundFundsTransferResponse">RefundFundsTransferResponse</h2>
<!-- backwards compatibility -->
<a id="schemarefundfundstransferresponse"></a>
<a id="schema_RefundFundsTransferResponse"></a>
<a id="tocSrefundfundstransferresponse"></a>
<a id="tocsrefundfundstransferresponse"></a>

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
  "merchantReference": "string",
  "message": "string",
  "originalReference": "string",
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|merchantReference|string|false|none|The value supplied by the executing user when initiating the transfer refund; may be used to link multiple transactions.|
|message|string|false|none|The message of the response.|
|originalReference|string|false|none|A PSP reference of the original fund transfer.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|

<h2 id="tocS_RefundNotPaidOutTransfersRequest">RefundNotPaidOutTransfersRequest</h2>
<!-- backwards compatibility -->
<a id="schemarefundnotpaidouttransfersrequest"></a>
<a id="schema_RefundNotPaidOutTransfersRequest"></a>
<a id="tocSrefundnotpaidouttransfersrequest"></a>
<a id="tocsrefundnotpaidouttransfersrequest"></a>

```json
{
  "accountCode": "string",
  "accountHolderCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|true|none|The code of the account from which to perform the refund(s).|
|accountHolderCode|string|true|none|The code of the Account Holder which owns the account from which to perform the refund(s).|

<h2 id="tocS_RefundNotPaidOutTransfersResponse">RefundNotPaidOutTransfersResponse</h2>
<!-- backwards compatibility -->
<a id="schemarefundnotpaidouttransfersresponse"></a>
<a id="schema_RefundNotPaidOutTransfersResponse"></a>
<a id="tocSrefundnotpaidouttransfersresponse"></a>
<a id="tocsrefundnotpaidouttransfersresponse"></a>

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

<h2 id="tocS_SetupBeneficiaryRequest">SetupBeneficiaryRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetupbeneficiaryrequest"></a>
<a id="schema_SetupBeneficiaryRequest"></a>
<a id="tocSsetupbeneficiaryrequest"></a>
<a id="tocssetupbeneficiaryrequest"></a>

```json
{
  "destinationAccountCode": "string",
  "merchantReference": "string",
  "sourceAccountCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationAccountCode|string|true|none|The destination account code.|
|merchantReference|string|false|none|A value that can be supplied at the discretion of the executing user.|
|sourceAccountCode|string|true|none|The benefactor account.|

<h2 id="tocS_SetupBeneficiaryResponse">SetupBeneficiaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemasetupbeneficiaryresponse"></a>
<a id="schema_SetupBeneficiaryResponse"></a>
<a id="tocSsetupbeneficiaryresponse"></a>
<a id="tocssetupbeneficiaryresponse"></a>

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

<h2 id="tocS_Split">Split</h2>
<!-- backwards compatibility -->
<a id="schemasplit"></a>
<a id="schema_Split"></a>
<a id="tocSsplit"></a>
<a id="tocssplit"></a>

```json
{
  "account": "string",
  "amount": {
    "currency": "str",
    "value": 0
  },
  "description": "string",
  "reference": "string",
  "type": "AcquiringFees"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|The unique identifier of the account to which the split amount is booked. Required if `type` is **MarketPlace** or **BalanceAccount**.<br><br>* [Classic Platforms integration](https://docs.adyen.com/classic-platforms): The [`accountCode`](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccount#request-accountCode) of the account to which the split amount is booked.<br>* [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model): The [`balanceAccountId`](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/balanceAccounts/_id_#path-id) of the account to which the split amount is booked.|
|amount|[SplitAmount](#schemasplitamount)|false|none|The amount of the split item.<br><br>* Required for all split types in the [Classic Platforms integration](https://docs.adyen.com/classic-platforms).<br>* Required if `type` is **BalanceAccount**, **Commission**, **Default**, or **VAT** in your [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model) integration.|
|description|string|false|none|Your description for the split item.|
|reference|string|false|none|Your unique reference for the part of the payment booked to the specified `account`.<br><br>This is required if `type` is **MarketPlace** ([Classic Platforms integration](https://docs.adyen.com/classic-platforms)) or **BalanceAccount** ([Balance Platform](https://docs.adyen.com/adyen-for-platforms-model)).<br><br>For the other types, we also recommend providing a **unique** reference so you can reconcile the split and the associated payment in the transaction overview and in the reports.|
|type|string|true|none|The part of the payment you want to book to the specified `account`.<br><br>Possible values for the [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model):<br>* **BalanceAccount**: books part of the payment (specified in `amount`) to the specified `account`.<br>* Transaction fees types that you can book to the specified `account`:<br>   * **AcquiringFees**: the aggregated amount of the interchange and scheme fees.<br>   * **PaymentFee**: the aggregated amount of all transaction fees.<br>   * **AdyenFees**: the aggregated amount of Adyen's commission and markup fees.<br>   * **AdyenCommission**: the transaction fees due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/interchange-fees-explained).<br>   * **AdyenMarkup**: the transaction fees due to Adyen under [Interchange ++ pricing](https://www.adyen.com/knowledge-hub/interchange-fees-explained).<br>   * **Interchange**: the fees paid to the issuer for each payment made with the card network.<br>   * **SchemeFee**: the fees paid to the card scheme for using their network. <br>* **Commission**: your platform's commission on the payment (specified in `amount`), booked to your liable balance account.<br>* **Remainder**: the amount left over after a currency conversion, booked to the specified `account`.<br>* **TopUp**: allows you and your users to top up balance accounts using direct debit, card payments, or other payment methods.<br>* **VAT**: the value-added tax charged on the payment, booked to your platforms liable balance account.<br>* **Commission**: your platform's commission (specified in `amount`) on the payment, booked to your liable balance account.<br>* **Default**: in very specific use cases, allows you to book the specified `amount` to the specified `account`. For more information, contact Adyen support.<br><br>Possible values for the [Classic Platforms integration](https://docs.adyen.com/classic-platforms): **Commission**, **Default**, **Marketplace**, **PaymentFee**, **VAT**.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|AcquiringFees|
|type|AdyenCommission|
|type|AdyenFees|
|type|AdyenMarkup|
|type|BalanceAccount|
|type|Commission|
|type|Default|
|type|Interchange|
|type|MarketPlace|
|type|PaymentFee|
|type|Remainder|
|type|SchemeFee|
|type|Surcharge|
|type|Tip|
|type|VAT|

<h2 id="tocS_SplitAmount">SplitAmount</h2>
<!-- backwards compatibility -->
<a id="schemasplitamount"></a>
<a id="schema_SplitAmount"></a>
<a id="tocSsplitamount"></a>
<a id="tocssplitamount"></a>

```json
{
  "currency": "str",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). By default, this is the original payment currency.|
|value|integer(int64)|true|none|The value of the split amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "bankAccountDetail": {
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
  },
  "captureMerchantReference": "string",
  "capturePspReference": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "description": "string",
  "destinationAccountCode": "string",
  "disputePspReference": "string",
  "disputeReasonCode": "string",
  "merchantReference": "string",
  "paymentPspReference": "string",
  "payoutPspReference": "string",
  "pspReference": "string",
  "sourceAccountCode": "string",
  "transactionStatus": "BalanceNotPaidOutTransfer",
  "transferCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|false|none|The amount of the transaction.|
|bankAccountDetail|[BankAccountDetail](#schemabankaccountdetail)|false|none|The details of the bank account to where a payout was made.|
|captureMerchantReference|string|false|none|The merchant reference of a related capture.|
|capturePspReference|string|false|none|The psp reference of a related capture.|
|creationDate|string(date-time)|false|none|The date on which the transaction was performed.|
|description|string|false|none|A description of the transaction.|
|destinationAccountCode|string|false|none|The code of the account to which funds were credited during an outgoing fund transfer.|
|disputePspReference|string|false|none|The psp reference of the related dispute.|
|disputeReasonCode|string|false|none|The reason code of a dispute.|
|merchantReference|string|false|none|The merchant reference of a transaction.|
|paymentPspReference|string|false|none|The psp reference of the related authorisation or transfer.|
|payoutPspReference|string|false|none|The psp reference of the related payout.|
|pspReference|string|false|none|The psp reference of a transaction.|
|sourceAccountCode|string|false|none|The code of the account from which funds were debited during an incoming fund transfer.|
|transactionStatus|string|false|none|The status of the transaction.<br>>Permitted values: `PendingCredit`, `CreditFailed`, `CreditClosed`, `CreditSuspended`, `Credited`, `Converted`, `PendingDebit`, `DebitFailed`, `Debited`, `DebitReversedReceived`, `DebitedReversed`, `ChargebackReceived`, `Chargeback`, `ChargebackReversedReceived`, `ChargebackReversed`, `Payout`, `PayoutReversed`, `FundTransfer`, `PendingFundTransfer`, `ManualCorrected`.|
|transferCode|string|false|none|The transfer code of the transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|transactionStatus|BalanceNotPaidOutTransfer|
|transactionStatus|BalancePlatformFundTransfer|
|transactionStatus|BalancePlatformSweep|
|transactionStatus|BalancePlatformSweepReturned|
|transactionStatus|Chargeback|
|transactionStatus|ChargebackCorrection|
|transactionStatus|ChargebackCorrectionReceived|
|transactionStatus|ChargebackReceived|
|transactionStatus|ChargebackReversed|
|transactionStatus|ChargebackReversedCorrection|
|transactionStatus|ChargebackReversedCorrectionReceived|
|transactionStatus|ChargebackReversedReceived|
|transactionStatus|Converted|
|transactionStatus|CreditClosed|
|transactionStatus|CreditFailed|
|transactionStatus|CreditReversed|
|transactionStatus|CreditReversedReceived|
|transactionStatus|CreditSuspended|
|transactionStatus|Credited|
|transactionStatus|DebitFailed|
|transactionStatus|DebitReversedReceived|
|transactionStatus|Debited|
|transactionStatus|DebitedReversed|
|transactionStatus|DepositCorrectionCredited|
|transactionStatus|DepositCorrectionDebited|
|transactionStatus|DepositCorrectionReceived|
|transactionStatus|Fee|
|transactionStatus|FeeReceived|
|transactionStatus|FundTransfer|
|transactionStatus|FundTransferReversed|
|transactionStatus|InvoiceDeductionCredited|
|transactionStatus|InvoiceDeductionDebited|
|transactionStatus|InvoiceDeductionReceived|
|transactionStatus|ManualCorrected|
|transactionStatus|ManualCorrectionCredited|
|transactionStatus|ManualCorrectionDebited|
|transactionStatus|MerchantPayin|
|transactionStatus|MerchantPayinReceived|
|transactionStatus|MerchantPayinReversed|
|transactionStatus|Payout|
|transactionStatus|PayoutReversed|
|transactionStatus|PendingCredit|
|transactionStatus|PendingDebit|
|transactionStatus|PendingFundTransfer|
|transactionStatus|ReCredited|
|transactionStatus|ReCreditedReceived|
|transactionStatus|SecondChargeback|
|transactionStatus|SecondChargebackCorrection|
|transactionStatus|SecondChargebackCorrectionReceived|
|transactionStatus|SecondChargebackReceived|

<h2 id="tocS_TransactionListForAccount">TransactionListForAccount</h2>
<!-- backwards compatibility -->
<a id="schematransactionlistforaccount"></a>
<a id="schema_TransactionListForAccount"></a>
<a id="tocStransactionlistforaccount"></a>
<a id="tocstransactionlistforaccount"></a>

```json
{
  "accountCode": "string",
  "page": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|true|none|The account for which to retrieve the transactions.|
|page|integer(int32)|true|none|The page of transactions to retrieve.<br>Each page lists fifty (50) transactions.  The most recent transactions are included on page 1.|

<h2 id="tocS_TransferFundsRequest">TransferFundsRequest</h2>
<!-- backwards compatibility -->
<a id="schematransferfundsrequest"></a>
<a id="schema_TransferFundsRequest"></a>
<a id="tocStransferfundsrequest"></a>
<a id="tocstransferfundsrequest"></a>

```json
{
  "amount": {
    "currency": "str",
    "value": 0
  },
  "destinationAccountCode": "string",
  "merchantReference": "string",
  "sourceAccountCode": "string",
  "transferCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Amount](#schemaamount)|true|none|The amount to be transferred.|
|destinationAccountCode|string|true|none|The code of the account to which the funds are to be credited.<br>>The state of the Account Holder of this account must be Active.|
|merchantReference|string|false|none|A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.|
|sourceAccountCode|string|true|none|The code of the account from which the funds are to be debited.<br>>The state of the Account Holder of this account must be Active and allow payouts.|
|transferCode|string|true|none|The code related to the type of transfer being performed.<br>>The permitted codes differ for each platform account and are defined in their service level agreement.|

<h2 id="tocS_TransferFundsResponse">TransferFundsResponse</h2>
<!-- backwards compatibility -->
<a id="schematransferfundsresponse"></a>
<a id="schema_TransferFundsResponse"></a>
<a id="tocStransferfundsresponse"></a>
<a id="tocstransferfundsresponse"></a>

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
  "merchantReference": "string",
  "pspReference": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Contains field validation errors that would prevent requests from being processed.|
|merchantReference|string|false|none|The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|resultCode|string|false|none|The result code.|
