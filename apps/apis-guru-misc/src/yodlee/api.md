<h1 id="yodlee-core-apis">Yodlee Core APIs v1.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This file describes the Yodlee Platform APIs using the swagger notation. You can use this swagger file to generate client side SDKs to the Yodlee Platform APIs for many different programming languages. Yodlee supports the Java SDK and it is available <a href="https://developer.yodlee.com/java-sdk-overview ">here</a>. You can generate a client SDK for Python, Java, JavaScript, PHP or other languages according to your development needs. For more details about the APIs, refer to <a href="https://developer.yodlee.com/docs/api/1.1/Overview">Yodlee API v1.1 - Overview</a>.

Base URLs:

* <a href="https://api.apis.guru/">https://api.apis.guru/</a>

<a href="https://developer.yodlee.com/terms/condition">Terms of service</a>
Email: <a href="mailto:developer@yodlee.com">developer@yodlee.com</a> 
License: <a href="https://developer.yodlee.com/terms/condition#_Services_1">Yodlee Developer License</a>

<h1 id="yodlee-core-apis-accounts">Accounts</h1>

Accounts API

## Get Accounts

<a id="opIdgetAllAccounts"></a>

> Code samples

```bash
curl https://example.com/accounts \
  -H 'Accept: application/json'
```

`GET /accounts`

The get accounts service provides information about accounts added by the user.<br>By default, this service returns information for active and to be closed accounts.<br>If requestId is provided, the accounts that are updated in the context of the requestId will be provided in the response.<br><br><b>Note:</b><br><li>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.</li><li>fullAccountNumberList, PII (Personal Identifiable Information) and holder details are not available by default, as it is a premium feature that needs security approval. This will not be available for testing in Sandbox environment.</li>

<h3 id="get-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|query|string|false|Comma separated accountIds.|
|container|query|string|false|bank/creditCard/investment/insurance/loan/reward/realEstate/otherAssets/otherLiabilities|
|include|query|string|false|profile, holder, fullAccountNumber, fullAccountNumberList, paymentProfile, autoRefresh<br><b>Note:</b>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.|
|providerAccountId|query|string|false|Comma separated providerAccountIds.|
|requestId|query|string|false|The unique identifier that returns contextual data|
|status|query|string|false|ACTIVE,INACTIVE,TO_BE_CLOSED,CLOSED|

> Example responses

> 200 Response

```json
{
  "account": [
    {
      "401kLoan": {
        "amount": 0,
        "currency": "AUD"
      },
      "CONTAINER": "bank",
      "accountName": "string",
      "accountNumber": "string",
      "accountStatus": "ACTIVE",
      "accountType": "string",
      "address": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "city": "string",
        "country": "string",
        "sourceType": "string",
        "state": "string",
        "street": "string",
        "type": "HOME",
        "zip": "string"
      },
      "aggregationSource": "SYSTEM",
      "amountDue": {
        "amount": 0,
        "currency": "AUD"
      },
      "annualPercentageYield": 0,
      "annuityBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "apr": 0,
      "associatedProviderAccountId": [
        0
      ],
      "autoRefresh": {
        "additionalStatus": "SCHEDULED",
        "asOfDate": "string",
        "status": "ENABLED"
      },
      "availableBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "availableCash": {
        "amount": 0,
        "currency": "AUD"
      },
      "availableCredit": {
        "amount": 0,
        "currency": "AUD"
      },
      "balance": {
        "amount": 0,
        "currency": "AUD"
      },
      "bankTransferCode": [
        {
          "id": "string",
          "type": "BSB"
        }
      ],
      "cash": {
        "amount": 0,
        "currency": "AUD"
      },
      "cashApr": 0,
      "cashValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "classification": "OTHER",
      "collateral": "string",
      "coverage": [
        {
          "amount": [
            {
              "cover": {
                "amount": 0,
                "currency": "AUD"
              },
              "limitType": "IN_NETWORK",
              "met": {
                "amount": 0,
                "currency": "AUD"
              },
              "type": "DEDUCTIBLE",
              "unitType": "PER_FAMILY"
            }
          ],
          "endDate": "string",
          "planType": "PPO",
          "startDate": "string",
          "type": "VISION"
        }
      ],
      "createdDate": "string",
      "currentBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "currentLevel": "string",
      "dataset": [
        {
          "additionalStatus": "LOGIN_IN_PROGRESS",
          "lastUpdateAttempt": "string",
          "lastUpdated": "string",
          "name": "BASIC_AGG_DATA",
          "nextUpdateScheduled": "string",
          "updateEligibility": "ALLOW_UPDATE"
        }
      ],
      "deathBenefit": {
        "amount": 0,
        "currency": "AUD"
      },
      "derivedApr": 0,
      "displayedName": "string",
      "dueDate": "string",
      "enrollmentDate": "string",
      "escrowBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "estimatedDate": "string",
      "expirationDate": "string",
      "faceAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "frequency": "DAILY",
      "fullAccountNumber": "string",
      "fullAccountNumberList": {
        "paymentAccountNumber": "string",
        "unmaskedAccountNumber": "string"
      },
      "guarantor": "string",
      "holder": [
        {
          "gender": "string",
          "identifier": [
            {
              "type": "NIE",
              "value": "string"
            }
          ],
          "name": {
            "first": "string",
            "fullName": "string",
            "last": "string",
            "middle": "string"
          },
          "ownership": "PRIMARY"
        }
      ],
      "homeInsuranceType": "HOME_OWNER",
      "homeValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "id": 0,
      "includeInNetWorth": true,
      "interestPaidLastYear": {
        "amount": 0,
        "currency": "AUD"
      },
      "interestPaidYTD": {
        "amount": 0,
        "currency": "AUD"
      },
      "interestRate": 0,
      "interestRateType": "FIXED",
      "isAsset": true,
      "isManual": true,
      "lastEmployeeContributionAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "lastEmployeeContributionDate": "string",
      "lastPayment": {
        "amount": 0,
        "currency": "AUD"
      },
      "lastPaymentAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "lastPaymentDate": "string",
      "lastUpdated": "string",
      "lender": "string",
      "lifeInsuranceType": "OTHER",
      "loanPayByDate": "string",
      "loanPayoffAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "loanPayoffDetails": {
        "outstandingBalance": {
          "amount": 0,
          "currency": "AUD"
        },
        "payByDate": "string",
        "payoffAmount": {
          "amount": 0,
          "currency": "AUD"
        }
      },
      "marginBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "maturityAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "maturityDate": "string",
      "memo": "string",
      "minimumAmountDue": {
        "amount": 0,
        "currency": "AUD"
      },
      "moneyMarketBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "nextLevel": "string",
      "nickname": "string",
      "oauthMigrationStatus": "IN_PROGRESS",
      "originalLoanAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "originationDate": "string",
      "overDraftLimit": {
        "amount": 0,
        "currency": "AUD"
      },
      "paymentProfile": {
        "address": [
          {
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "city": "string",
            "country": "string",
            "sourceType": "string",
            "state": "string",
            "street": "string",
            "type": "HOME",
            "zip": "string"
          }
        ],
        "identifier": {
          "type": "REFERENCE_NUMBER",
          "value": "string"
        },
        "paymentBankTransferCode": {
          "id": "string",
          "type": "ROUTING_NUMBER"
        }
      },
      "policyEffectiveDate": "string",
      "policyFromDate": "string",
      "policyStatus": "ACTIVE",
      "policyTerm": "string",
      "policyToDate": "string",
      "premium": {
        "amount": 0,
        "currency": "AUD"
      },
      "premiumPaymentTerm": "string",
      "primaryRewardUnit": "string",
      "principalBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "profile": {
        "address": [
          {
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "city": "string",
            "country": "string",
            "sourceType": "string",
            "state": "string",
            "street": "string",
            "type": "HOME",
            "zip": "string"
          }
        ],
        "email": [
          {
            "type": "PRIMARY",
            "value": "string"
          }
        ],
        "identifier": [
          {
            "type": "NIE",
            "value": "string"
          }
        ],
        "phoneNumber": [
          {
            "type": "HOME",
            "value": "string"
          }
        ]
      },
      "providerAccountId": 0,
      "providerId": "string",
      "providerName": "string",
      "recurringPayment": {
        "amount": 0,
        "currency": "AUD"
      },
      "remainingBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "repaymentPlanType": "STANDARD",
      "rewardBalance": [
        {
          "balance": 0,
          "balanceToLevel": "string",
          "balanceToReward": "string",
          "balanceType": "EXPIRING_BALANCE",
          "description": "string",
          "expiryDate": "string",
          "units": "string"
        }
      ],
      "runningBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "shortBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "sourceAccountStatus": "IN_REPAYMENT",
      "sourceId": "string",
      "term": "string",
      "totalCashLimit": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalCreditLimit": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalCreditLine": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalUnvestedBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalVestedBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "userClassification": "BUSINESS",
      "valuationType": "SYSTEM"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AccountResponse](#schemaaccountresponse)|
|400|Bad Request|Y800 : Invalid value for status<br>Y800 : Invalid value for container<br>Y800 : Invalid value for providerAccountId<br>Y824 : The maximum number of accountIds permitted is 100|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Add Manual Account

<a id="opIdcreateManualAccount"></a>

> Code samples

```bash
curl https://example.com/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account": {
      "accountName": "string",
      "accountNumber": "string",
      "accountType": "string",
      "address": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "city": "string",
        "country": "string",
        "sourceType": "string",
        "state": "string",
        "street": "string",
        "type": "HOME",
        "zip": "string"
      },
      "amountDue": {
        "amount": 0,
        "currency": "AUD"
      },
      "balance": {
        "amount": 0,
        "currency": "AUD"
      },
      "dueDate": "string",
      "frequency": "DAILY",
      "homeValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "includeInNetWorth": "string",
      "memo": "string",
      "nickname": "string",
      "valuationType": "SYSTEM"
    }
  }'
```

`POST /accounts`

The add account service is used to add manual accounts.<br>The response of add account service includes the account name , account number and Yodlee generated account id.<br>All manual accounts added will be included as part of networth calculation by default.<br>Add manual account support is available for bank, card, investment, insurance and loan container only.<br><br><b>Note:</b> <li>A real estate account addition is only supported for SYSTEM and MANUAL valuation type.</li>

> Body parameter

```json
{
  "account": {
    "accountName": "string",
    "accountNumber": "string",
    "accountType": "string",
    "address": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "sourceType": "string",
      "state": "string",
      "street": "string",
      "type": "HOME",
      "zip": "string"
    },
    "amountDue": {
      "amount": 0,
      "currency": "AUD"
    },
    "balance": {
      "amount": 0,
      "currency": "AUD"
    },
    "dueDate": "string",
    "frequency": "DAILY",
    "homeValue": {
      "amount": 0,
      "currency": "AUD"
    },
    "includeInNetWorth": "string",
    "memo": "string",
    "nickname": "string",
    "valuationType": "SYSTEM"
  }
}
```

<h3 id="add-manual-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAccountRequest](#schemacreateaccountrequest)|true|accountParam|
|» account|body|[CreateAccountInfo](#schemacreateaccountinfo)|true|none|

> Example responses

> 200 Response

```json
{
  "account": [
    {
      "accountName": "string",
      "accountNumber": "string",
      "id": 0
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="add-manual-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreatedAccountResponse](#schemacreatedaccountresponse)|
|400|Bad Request|Y800 : Invalid value for accountParam<br>Y811 : Real Estate Property value already exists<br>Y862 : The provided address is invalid, or the valuation is not available<br>Y869 : Multiple matches found. Provide the complete address or call the POST /accounts/evaluateAddress API to retrieve the list of matched addresses<br>|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Evaluate Address

<a id="opIdevaluateAddress"></a>

> Code samples

```bash
curl https://example.com/accounts/evaluateAddress \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "address": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "sourceType": "string",
      "state": "string",
      "street": "string",
      "type": "HOME",
      "zip": "string"
    }
  }'
```

`POST /accounts/evaluateAddress`

Use this service to validate the address before adding the real estate account.<br>If the address is valid, the service will return the complete address information.<br>The response will contain multiple addresses if the user-provided input matches with multiple entries in the vendor database.<br>In the case of multiple matches, the user can select the appropriate address from the list and then invoke the add account service with the complete address.<br><br><b>Note:</b> <li>Yodlee recommends to use this service before adding the real estate account to avoid failures.</li>

> Body parameter

```json
{
  "address": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "city": "string",
    "country": "string",
    "sourceType": "string",
    "state": "string",
    "street": "string",
    "type": "HOME",
    "zip": "string"
  }
}
```

<h3 id="evaluate-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EvaluateAddressRequest](#schemaevaluateaddressrequest)|true|addressParam|
|» address|body|[EvaluateAccountAddress](#schemaevaluateaccountaddress)|true|none|

> Example responses

> 200 Response

```json
{
  "address": [
    {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "sourceType": "string",
      "state": "string",
      "street": "string",
      "type": "HOME",
      "zip": "string"
    }
  ],
  "isValidAddress": true
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="evaluate-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EvaluateAddressResponse](#schemaevaluateaddressresponse)|
|400|Bad Request|Y806 : Invalid input<br>Y800 : Invalid value for zip<br>Y812 : Required field/value - address missing in the request<br>Y812 : Required field/value - street missing in the request<br>Y812 : Required field/value - state & city / zip missing in the request|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Historical Balances

<a id="opIdgetHistoricalBalances"></a>

> Code samples

```bash
curl https://example.com/accounts/historicalBalances \
  -H 'Accept: application/json'
```

`GET /accounts/historicalBalances`

The historical balances service is used to retrieve the historical balances for an account or a user.<br>Historical balances are daily (D), weekly (W), and monthly (M). <br>The interval input should be passed as D, W, and M to retrieve the desired historical balances. The default interval is daily (D). <br>When no account id is provided, historical balances of the accounts that are active, to be closed, and closed are provided in the response. <br>If the fromDate and toDate are not passed, the last 90 days of data will be provided. <br>The fromDate and toDate should be passed in the YYYY-MM-DD format. <br>The date field in the response denotes the date for which the balance is requested.<br>includeCF needs to be sent as true if the customer wants to return carried forward balances for a date when the data is not available. <br>asofDate field in the response denotes the date as of which the balance was updated for that account.<br>When there is no balance available for a requested date and if includeCF is sent as true, the previous date for which the balance is available is provided in the response. <br>When there is no previous balance available, no data will be sent.

<h3 id="get-historical-balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|query|string|false|accountId|
|fromDate|query|string|false|from date for balance retrieval (YYYY-MM-DD)|
|includeCF|query|boolean|false|Consider carry forward logic for missing balances|
|interval|query|string|false|D-daily, W-weekly or M-monthly|
|skip|query|integer(int32)|false|skip (Min 0)|
|toDate|query|string|false|toDate for balance retrieval (YYYY-MM-DD)|
|top|query|integer(int32)|false|top (Max 500)|

> Example responses

> 200 Response

```json
{
  "account": [
    {
      "historicalBalances": [
        {
          "asOfDate": "string",
          "balance": {
            "amount": 0,
            "currency": "AUD"
          },
          "dataSourceType": "S",
          "date": "string",
          "isAsset": true
        }
      ],
      "id": 0
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-historical-balances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AccountHistoricalBalancesResponse](#schemaaccounthistoricalbalancesresponse)|
|400|Bad Request|Y800 : Invalid value for accountId<br>Y800 : Invalid value for fromDate<br>Y800 : Invalid value for toDate<br>Y809 : Invalid date range<br>Y800 : Invalid value for interval<br>Y802 : Future date not allowed|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Account Details

<a id="opIdgetAccount"></a>

> Code samples

```bash
curl https://example.com/accounts/0 \
  -H 'Accept: application/json'
```

`GET /accounts/{accountId}`

The get account details service provides detailed information of an account.<br><br><b>Note:</b><li>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.</li>

<h3 id="get-account-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|integer(int64)|true|accountId|
|include|query|string|false|profile, holder, fullAccountNumber, fullAccountNumberList, paymentProfile, autoRefresh<br><b>Note:</b>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.|

> Example responses

> 200 Response

```json
{
  "account": [
    {
      "401kLoan": {
        "amount": 0,
        "currency": "AUD"
      },
      "CONTAINER": "bank",
      "accountName": "string",
      "accountNumber": "string",
      "accountStatus": "ACTIVE",
      "accountType": "string",
      "address": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "city": "string",
        "country": "string",
        "sourceType": "string",
        "state": "string",
        "street": "string",
        "type": "HOME",
        "zip": "string"
      },
      "aggregationSource": "SYSTEM",
      "amountDue": {
        "amount": 0,
        "currency": "AUD"
      },
      "annualPercentageYield": 0,
      "annuityBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "apr": 0,
      "associatedProviderAccountId": [
        0
      ],
      "autoRefresh": {
        "additionalStatus": "SCHEDULED",
        "asOfDate": "string",
        "status": "ENABLED"
      },
      "availableBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "availableCash": {
        "amount": 0,
        "currency": "AUD"
      },
      "availableCredit": {
        "amount": 0,
        "currency": "AUD"
      },
      "balance": {
        "amount": 0,
        "currency": "AUD"
      },
      "bankTransferCode": [
        {
          "id": "string",
          "type": "BSB"
        }
      ],
      "cash": {
        "amount": 0,
        "currency": "AUD"
      },
      "cashApr": 0,
      "cashValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "classification": "OTHER",
      "collateral": "string",
      "coverage": [
        {
          "amount": [
            {
              "cover": {
                "amount": 0,
                "currency": "AUD"
              },
              "limitType": "IN_NETWORK",
              "met": {
                "amount": 0,
                "currency": "AUD"
              },
              "type": "DEDUCTIBLE",
              "unitType": "PER_FAMILY"
            }
          ],
          "endDate": "string",
          "planType": "PPO",
          "startDate": "string",
          "type": "VISION"
        }
      ],
      "createdDate": "string",
      "currentBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "currentLevel": "string",
      "dataset": [
        {
          "additionalStatus": "LOGIN_IN_PROGRESS",
          "lastUpdateAttempt": "string",
          "lastUpdated": "string",
          "name": "BASIC_AGG_DATA",
          "nextUpdateScheduled": "string",
          "updateEligibility": "ALLOW_UPDATE"
        }
      ],
      "deathBenefit": {
        "amount": 0,
        "currency": "AUD"
      },
      "derivedApr": 0,
      "displayedName": "string",
      "dueDate": "string",
      "enrollmentDate": "string",
      "escrowBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "estimatedDate": "string",
      "expirationDate": "string",
      "faceAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "frequency": "DAILY",
      "fullAccountNumber": "string",
      "fullAccountNumberList": {
        "paymentAccountNumber": "string",
        "unmaskedAccountNumber": "string"
      },
      "guarantor": "string",
      "holder": [
        {
          "gender": "string",
          "identifier": [
            {
              "type": "NIE",
              "value": "string"
            }
          ],
          "name": {
            "first": "string",
            "fullName": "string",
            "last": "string",
            "middle": "string"
          },
          "ownership": "PRIMARY"
        }
      ],
      "homeInsuranceType": "HOME_OWNER",
      "homeValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "id": 0,
      "includeInNetWorth": true,
      "interestPaidLastYear": {
        "amount": 0,
        "currency": "AUD"
      },
      "interestPaidYTD": {
        "amount": 0,
        "currency": "AUD"
      },
      "interestRate": 0,
      "interestRateType": "FIXED",
      "isAsset": true,
      "isManual": true,
      "lastEmployeeContributionAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "lastEmployeeContributionDate": "string",
      "lastPayment": {
        "amount": 0,
        "currency": "AUD"
      },
      "lastPaymentAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "lastPaymentDate": "string",
      "lastUpdated": "string",
      "lender": "string",
      "lifeInsuranceType": "OTHER",
      "loanPayByDate": "string",
      "loanPayoffAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "loanPayoffDetails": {
        "outstandingBalance": {
          "amount": 0,
          "currency": "AUD"
        },
        "payByDate": "string",
        "payoffAmount": {
          "amount": 0,
          "currency": "AUD"
        }
      },
      "marginBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "maturityAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "maturityDate": "string",
      "memo": "string",
      "minimumAmountDue": {
        "amount": 0,
        "currency": "AUD"
      },
      "moneyMarketBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "nextLevel": "string",
      "nickname": "string",
      "oauthMigrationStatus": "IN_PROGRESS",
      "originalLoanAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "originationDate": "string",
      "overDraftLimit": {
        "amount": 0,
        "currency": "AUD"
      },
      "paymentProfile": {
        "address": [
          {
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "city": "string",
            "country": "string",
            "sourceType": "string",
            "state": "string",
            "street": "string",
            "type": "HOME",
            "zip": "string"
          }
        ],
        "identifier": {
          "type": "REFERENCE_NUMBER",
          "value": "string"
        },
        "paymentBankTransferCode": {
          "id": "string",
          "type": "ROUTING_NUMBER"
        }
      },
      "policyEffectiveDate": "string",
      "policyFromDate": "string",
      "policyStatus": "ACTIVE",
      "policyTerm": "string",
      "policyToDate": "string",
      "premium": {
        "amount": 0,
        "currency": "AUD"
      },
      "premiumPaymentTerm": "string",
      "primaryRewardUnit": "string",
      "principalBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "profile": {
        "address": [
          {
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "city": "string",
            "country": "string",
            "sourceType": "string",
            "state": "string",
            "street": "string",
            "type": "HOME",
            "zip": "string"
          }
        ],
        "email": [
          {
            "type": "PRIMARY",
            "value": "string"
          }
        ],
        "identifier": [
          {
            "type": "NIE",
            "value": "string"
          }
        ],
        "phoneNumber": [
          {
            "type": "HOME",
            "value": "string"
          }
        ]
      },
      "providerAccountId": 0,
      "providerId": "string",
      "providerName": "string",
      "recurringPayment": {
        "amount": 0,
        "currency": "AUD"
      },
      "remainingBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "repaymentPlanType": "STANDARD",
      "rewardBalance": [
        {
          "balance": 0,
          "balanceToLevel": "string",
          "balanceToReward": "string",
          "balanceType": "EXPIRING_BALANCE",
          "description": "string",
          "expiryDate": "string",
          "units": "string"
        }
      ],
      "runningBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "shortBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "sourceAccountStatus": "IN_REPAYMENT",
      "sourceId": "string",
      "term": "string",
      "totalCashLimit": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalCreditLimit": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalCreditLine": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalUnvestedBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalVestedBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "userClassification": "BUSINESS",
      "valuationType": "SYSTEM"
    }
  ]
}
```

<h3 id="get-account-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AccountResponse](#schemaaccountresponse)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Account

<a id="opIdupdateAccount"></a>

> Code samples

```bash
curl https://example.com/accounts/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account": {
      "accountName": "string",
      "accountNumber": "string",
      "accountStatus": "ACTIVE",
      "address": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "city": "string",
        "country": "string",
        "sourceType": "string",
        "state": "string",
        "street": "string",
        "type": "HOME",
        "zip": "string"
      },
      "amountDue": {
        "amount": 0,
        "currency": "AUD"
      },
      "balance": {
        "amount": 0,
        "currency": "AUD"
      },
      "container": "bank",
      "dueDate": "string",
      "frequency": "DAILY",
      "homeValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "includeInNetWorth": "string",
      "isEbillEnrolled": "string",
      "memo": "string",
      "nickname": "string"
    }
  }'
```

`PUT /accounts/{accountId}`

The update account service is used to update manual and aggregated accounts.<br>The HTTP response code is 204 (Success without content).<br>Update manual account support is available for bank, card, investment, insurance, loan, otherAssets, otherLiabilities and realEstate containers only.<br><br><b>Note:</b><li> A real estate account update is only supported for SYSTEM and MANUAL valuation type.</li><li> Attribute <b>isEbillEnrolled</b> is deprecated as it is applicable for bill accounts only.</li>

> Body parameter

```json
{
  "account": {
    "accountName": "string",
    "accountNumber": "string",
    "accountStatus": "ACTIVE",
    "address": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "sourceType": "string",
      "state": "string",
      "street": "string",
      "type": "HOME",
      "zip": "string"
    },
    "amountDue": {
      "amount": 0,
      "currency": "AUD"
    },
    "balance": {
      "amount": 0,
      "currency": "AUD"
    },
    "container": "bank",
    "dueDate": "string",
    "frequency": "DAILY",
    "homeValue": {
      "amount": 0,
      "currency": "AUD"
    },
    "includeInNetWorth": "string",
    "isEbillEnrolled": "string",
    "memo": "string",
    "nickname": "string"
  }
}
```

<h3 id="update-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|integer(int64)|true|accountId|
|body|body|[UpdateAccountRequest](#schemaupdateaccountrequest)|true|accountRequest|
|» account|body|[UpdateAccountInfo](#schemaupdateaccountinfo)|true|none|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="update-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|400|Bad Request|Y800 : Invalid value for accountId<br>Y800 : Invalid value for updateParam<br>Y862 : The provided address is invalid, or the valuation is not available<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>Y869 : Multiple matches found. Provide the complete address or call the POST /accounts/evaluateAddress API to retrieve the list of matched addresses<br>|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Account

<a id="opIddeleteAccount"></a>

> Code samples

```bash
curl https://example.com/accounts/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /accounts/{accountId}`

The delete account service allows an account to be deleted.<br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br>

<h3 id="delete-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|integer(int64)|true|accountId|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="delete-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|400|Bad Request|Y800 : Invalid value for accountId<br>Y807 : Resource not found<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="yodlee-core-apis-auth">Auth</h1>

Auth API

## Get API Keys

<a id="opIdgetApiKeys"></a>

> Code samples

```bash
curl https://example.com/auth/apiKey \
  -H 'Accept: application/json'
```

`GET /auth/apiKey`

This endpoint provides the list of API keys that exist for a customer.<br>You can use one of the following authorization methods to access this API:<br><ol><li>cobsession</li><li>JWT token</li></ol><b>Notes:</b><li>This service is not available in developer sandbox environment and will be made available for testing in your dedicated environment. 

> Example responses

> 200 Response

```json
{
  "apiKey": [
    {
      "createdDate": "string",
      "expiresIn": 0,
      "key": "string",
      "publicKey": "string"
    }
  ]
}
```

<h3 id="get-api-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiKeyResponse](#schemaapikeyresponse)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Generate API Key

<a id="opIdgenerateApiKey"></a>

> Code samples

```bash
curl https://example.com/auth/apiKey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "publicKey": "string"
  }'
```

`POST /auth/apiKey`

This endpoint is used to generate an API key. The RSA public key you provide should be in 2048 bit PKCS#8 encoded format. <br>A public key is a mandatory input for generating the API key.<br/>The public key should be a unique key. The apiKeyId you get in the response is what you should use to generate the JWT token.<br> You can use one of the following authorization methods to access<br/>this API:<br><ol><li>cobsession</li><li>JWT token</li></ol> Alternatively, you can use base 64 encoded cobrandLogin and cobrandPassword in the Authorization header (Format: Authorization: Basic <encoded value of cobrandLogin: cobrandPassword>)<br><br><b>Note:</b><br><li>This service is not available in developer sandbox environment and will be made available for testing in your dedicated environment. The content type has to be passed as application/json for the body parameter.</li>

> Body parameter

```json
{
  "publicKey": "string"
}
```

<h3 id="generate-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiKeyRequest](#schemaapikeyrequest)|true|apiKeyRequest|
|» publicKey|body|string|false|Public key uploaded by the customer while generating ApiKey.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>|

> Example responses

> 201 Response

```json
{
  "apiKey": [
    {
      "createdDate": "string",
      "expiresIn": 0,
      "key": "string",
      "publicKey": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="generate-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[ApiKeyResponse](#schemaapikeyresponse)|
|400|Bad Request|Y800 : Invalid value for RS512 publicKey<br>Y806 : Invalid input<br>Y824 : The maximum number of apiKey permitted is 5<br>Y811 : publicKey value already exists|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete API Key

<a id="opIddeleteApiKey"></a>

> Code samples

```bash
curl https://example.com/auth/apiKey/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /auth/apiKey/{key}`

This endpoint allows an existing API key to be deleted.<br>You can use one of the following authorization methods to access this API:<br><ol><li>cobsession</li><li>JWT token</li></ol> <b>Notes:</b> <li>This service is not available in developer sandbox environment and will be made availablefor testing in your dedicated environment. 

<h3 id="delete-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|key|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="delete-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|None|
|204|No Content|No Content|None|
|400|Bad Request|Y807 : Resource not found<br>Y806 : Invalid input|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Generate Access Token

<a id="opIdgenerateAccessToken"></a>

> Code samples

```bash
curl https://example.com/auth/token \
  -X POST \
  -H 'Accept: application/json'
```

`POST /auth/token`

<b>Generate Access Token using client credential authentication.</b><br>This service returns access tokens required to access Yodlee 1.1 APIs. These tokens are the simplest and easiest of several alternatives for authenticating with Yodlee servers.<br>The most commonly used services obtain data specific to an end user (your customer). For these services, you need a <b>user access token</b>. These are simply tokens created with the user name parameter (<b>loginName</b>) set to the id of your end user.  <i><br><br><b>Note:</b> You determine this id and you must ensure it's unique among all your customers.</i> <br><br>Each token issued has an associated user. The token passed in the http headers explicitly names the user referenced in that API call.<br><br>Some of the APIs do administrative work, and don't reference an end user. <br/>One example of administrative work is key management. Another example is registering a new user explicitly, with <b>POST /user/register</b> call or subscribe to webhook, with <b>POST /config/notifications/events/{eventName}</b>. <br/>To invoke these, you need an <b>admin access token</b>. Create this by passing in your admin user login name in place of a regular user name.<br><br>This service also allows for simplified registration of new users. Any time you pass in a user name not already in use, the system will automatically implicitly create a new user for you. <br>This user will naturally have very few associated details. You can later provide additional user information by calling the <b>PUT user/register service</b>.<br><br><b>Notes:</b><li>The content type has to be passed as application/x-www-form-urlencoded.<li>Upgrading to client credential authentication requires infrastructure reconfiguration. <li>Customers wishing to switch from another authentication scheme to client credential authentication, please contact Yodlee Client Services.</li>

> Example responses

> 201 Response

```json
{
  "token": {
    "accessToken": "string",
    "expiresIn": 0,
    "issuedAt": "string"
  }
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="generate-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[ClientCredentialTokenResponse](#schemaclientcredentialtokenresponse)|
|400|Bad Request|Y800 : Invalid value for loginName<br>Y806 : Invalid input<br>Y801 : Invalid length for loginName<br>Y303 : clientId or secret is missing<br>Y301 : Invalid clientId or secret<br>Y305 : Access token can be issued only for pre-registered users<br>Y004 : Inactive user<br>Y901 : Service not supported<br>|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Y016 : loginName header missing<br>Y015 : Unauthorized User<br>Y016 : Api-Version header missing<br>Y020 : Invalid token in authorization header<br>Y027 : Unsupported authentication type|[YodleeError](#schemayodleeerror)|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Token

<a id="opIddeleteToken"></a>

> Code samples

```bash
curl https://example.com/auth/token \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /auth/token`

This endpoint revokes the token passed in the Authorization header. This service is applicable for JWT-based (and all API key-based) authentication and also client credential (clientId and secret) based authentication. This service does not return a response body. The HTTP response code is 204 (success with no content). <br>Tokens generally have limited lifetime of up to 30 minutes. You will call this service when you finish working with one user, and you want to delete the valid token rather than simply letting it expire.<br><br><b>Note:</b> <li>Revoking an access token (either type, admin or a user token) can take up to 2 minutes, as the tokens are stored on a distributed system.<br/>

> Example responses

> 401 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="delete-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|401|Unauthorized|Y020 : Invalid token in authorization header<br>Y023 : Token has expired<br>Y016 : Api-Version header missing<br>Y015 : Unauthorized User<br>Y027 : Unsupported authentication type<br>Y007 : Authorization header missing<br>Y020 : Invalid token in authorization header|[YodleeError](#schemayodleeerror)|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="yodlee-core-apis-cobrand">Cobrand</h1>

Cobrand API

## Get Subscribed Events

<a id="opIdgetSubscribedEvents"></a>

> Code samples

```bash
curl https://example.com/cobrand/config/notifications/events \
  -H 'Accept: application/json'
```

`GET /cobrand/config/notifications/events`

<aside class="warning">
This operation is deprecated
</aside>

<b>Refer GET /configs/notifications/events.</b><br>The get events service provides the list of events for which consumers subscribed <br>to receive notifications. <br>

<h3 id="get-subscribed-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventName|query|string|false|eventName|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventName|REFRESH|
|eventName|DATA_UPDATES|
|eventName|AUTO_REFRESH_UPDATES|

> Example responses

> 200 Response

```json
{
  "event": [
    {
      "callbackUrl": "string",
      "name": "REFRESH"
    }
  ]
}
```

<h3 id="get-subscribed-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CobrandNotificationResponse](#schemacobrandnotificationresponse)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Subscription

<a id="opIdupdateSubscribedEvent"></a>

> Code samples

```bash
curl https://example.com/cobrand/config/notifications/events/REFRESH \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "event": {
      "callbackUrl": "string"
    }
  }'
```

`PUT /cobrand/config/notifications/events/{eventName}`

<aside class="warning">
This operation is deprecated
</aside>

<b>Refer PUT /configs/notifications/events/{eventName}.</b><br>The update events service is used to update the callback URL.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br><b>Note:</b> The content type has to be passed as application/json for the body parameter. <br>

> Body parameter

```json
{
  "event": {
    "callbackUrl": "string"
  }
}
```

<h3 id="update-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventName|path|string|true|eventName|
|body|body|[UpdateCobrandNotificationEventRequest](#schemaupdatecobrandnotificationeventrequest)|true|eventRequest|
|» event|body|[UpdateCobrandNotificationEvent](#schemaupdatecobrandnotificationevent)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventName|REFRESH|
|eventName|DATA_UPDATES|
|eventName|AUTO_REFRESH_UPDATES|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="update-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|400|Bad Request|Y803 : eventName required<br>Y803 : callbackUrl required<br>Y800 : Invalid value for callbackUrl|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Subscribe Event

<a id="opIdcreateSubscriptionEvent"></a>

> Code samples

```bash
curl https://example.com/cobrand/config/notifications/events/REFRESH \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "event": {
      "callbackUrl": "string"
    }
  }'
```

`POST /cobrand/config/notifications/events/{eventName}`

<aside class="warning">
This operation is deprecated
</aside>

<b>Refer POST /configs/notifications/events/{eventName}.</b><br>The subscribe events service is used to subscribe to an event for receiving notifications.<br>The callback URL, where the notification will be posted should be provided to this service.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br>Customers can subscribe to REFRESH,DATA_UPDATES and AUTO_REFRESH_UPDATES event.<br><br><b>Notes</b>:<br>This service is not available in developer sandbox/test environment and will be made available for testing in your dedicated environment, once the contract is signed.<br>The content type has to be passed as application/json for the body parameter.<br>

> Body parameter

```json
{
  "event": {
    "callbackUrl": "string"
  }
}
```

<h3 id="subscribe-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventName|path|string|true|eventName|
|body|body|[CreateCobrandNotificationEventRequest](#schemacreatecobrandnotificationeventrequest)|true|eventRequest|
|» event|body|[CreateCobrandNotificationEvent](#schemacreatecobrandnotificationevent)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventName|REFRESH|
|eventName|DATA_UPDATES|
|eventName|AUTO_REFRESH_UPDATES|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="subscribe-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|None|
|400|Bad Request|Y803 : eventName required<br>Y803 : callbackUrl required<br>Y800 : Invalid value for callbackUrl|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Subscription

<a id="opIddeleteSubscribedEvent"></a>

> Code samples

```bash
curl https://example.com/cobrand/config/notifications/events/REFRESH \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /cobrand/config/notifications/events/{eventName}`

<aside class="warning">
This operation is deprecated
</aside>

<b>Refer DELETE /configs/notifications/events/{eventName}.</b><br>The delete events service is used to unsubscribe from an events service.<br>

<h3 id="delete-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventName|path|string|true|eventName|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventName|REFRESH|
|eventName|DATA_UPDATES|
|eventName|AUTO_REFRESH_UPDATES|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="delete-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|400|Bad Request|Y803 : eventName required|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Cobrand Login

<a id="opIdcobrandLogin"></a>

> Code samples

```bash
curl https://example.com/cobrand/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cobrand": {
      "cobrandLogin": "string",
      "cobrandPassword": "string",
      "locale": "string"
    }
  }'
```

`POST /cobrand/login`

The cobrand login service authenticates a cobrand.<br>Cobrand session in the response includes the cobrand session token (cobSession) <br>which is used in subsequent API calls like registering or signing in the user. <br>The idle timeout for a cobrand session is 2 hours and the absolute timeout is 24 hours. This service can be <br>invoked to create a new cobrand session token. <br><b>Note:</b> This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>The content type has to be passed as application/json for the body parameter. <br>

> Body parameter

```json
{
  "cobrand": {
    "cobrandLogin": "string",
    "cobrandPassword": "string",
    "locale": "string"
  }
}
```

<h3 id="cobrand-login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CobrandLoginRequest](#schemacobrandloginrequest)|true|cobrandLoginRequest|
|» cobrand|body|[Cobrand](#schemacobrand)|true|none|

> Example responses

> 200 Response

```json
{
  "applicationId": "string",
  "cobrandId": 0,
  "locale": "string",
  "session": {
    "cobSession": "string"
  }
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="cobrand-login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CobrandLoginResponse](#schemacobrandloginresponse)|
|400|Bad Request|Y800 : Invalid value for cobrandParam|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Y003 : Account is locked, contact Yodlee customer care<br>Y001 : User name and password required|[YodleeError](#schemayodleeerror)|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Cobrand Logout

<a id="opIdcobrandLogout"></a>

> Code samples

```bash
curl https://example.com/cobrand/logout \
  -X POST
```

`POST /cobrand/logout`

The cobrand logout service is used to log out the cobrand.<br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br><b>Note:</b> This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>

<h3 id="cobrand-logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Logout successful|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Public Key

<a id="opIdgetPublicKey"></a>

> Code samples

```bash
curl https://example.com/cobrand/publicKey \
  -H 'Accept: application/json'
```

`GET /cobrand/publicKey`

<aside class="warning">
This operation is deprecated
</aside>

<b>Refer GET /configs/publicKey.</b><br>The get public key service provides the customer the public key that should be used to encrypt the user credentials before sending it to Yodlee.<br>This endpoint is useful only for PKI enabled.<br>

> Example responses

> 200 Response

```json
{
  "keyAlias": "string",
  "keyAsPemString": "string"
}
```

<h3 id="get-public-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CobrandPublicKeyResponse](#schemacobrandpublickeyresponse)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="yodlee-core-apis-configs">Configs</h1>

Configs API

## Get Subscribed Notification Events

<a id="opIdgetSubscribedNotificationEvents"></a>

> Code samples

```bash
curl https://example.com/configs/notifications/events \
  -H 'Accept: application/json'
```

`GET /configs/notifications/events`

The get events service provides the list of events for which consumers subscribed to receive notifications. <br>

<h3 id="get-subscribed-notification-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventName|query|string|false|eventName|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventName|REFRESH|
|eventName|DATA_UPDATES|
|eventName|AUTO_REFRESH_UPDATES|

> Example responses

> 200 Response

```json
{
  "event": [
    {
      "callbackUrl": "string",
      "name": "REFRESH"
    }
  ]
}
```

<h3 id="get-subscribed-notification-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ConfigsNotificationResponse](#schemaconfigsnotificationresponse)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Notification Subscription

<a id="opIdupdateSubscribedNotificationEvent"></a>

> Code samples

```bash
curl https://example.com/configs/notifications/events/REFRESH \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "event": {
      "callbackUrl": "string"
    }
  }'
```

`PUT /configs/notifications/events/{eventName}`

The update events service is used to update the callback URL.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br><br><b>Note:</b> <li>The content type has to be passed as application/json for the body parameter. <br>

> Body parameter

```json
{
  "event": {
    "callbackUrl": "string"
  }
}
```

<h3 id="update-notification-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventName|path|string|true|eventName|
|body|body|[UpdateConfigsNotificationEventRequest](#schemaupdateconfigsnotificationeventrequest)|true|eventRequest|
|» event|body|[UpdateConfigsNotificationEvent](#schemaupdateconfigsnotificationevent)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventName|REFRESH|
|eventName|DATA_UPDATES|
|eventName|AUTO_REFRESH_UPDATES|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="update-notification-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|400|Bad Request|Y803 : eventName required<br>Y803 : callbackUrl required<br>Y800 : Invalid value for callbackUrl|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Subscribe For Notification Event

<a id="opIdcreateSubscriptionNotificationEvent"></a>

> Code samples

```bash
curl https://example.com/configs/notifications/events/REFRESH \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "event": {
      "callbackUrl": "string"
    }
  }'
```

`POST /configs/notifications/events/{eventName}`

The subscribe events service is used to subscribe to an event for receiving notifications.<br>The callback URL, where the notification will be posted should be provided to this service.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br>Customers can subscribe to REFRESH,DATA_UPDATES and AUTO_REFRESH_UPDATES event.<br><br><b>Notes:</b><li>This service is not available in developer sandbox/test environment and will be made available for testing in your dedicated environment, once the contract is signed.<li>The content type has to be passed as application/json for the body parameter.</li>

> Body parameter

```json
{
  "event": {
    "callbackUrl": "string"
  }
}
```

<h3 id="subscribe-for-notification-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventName|path|string|true|eventName|
|body|body|[CreateConfigsNotificationEventRequest](#schemacreateconfigsnotificationeventrequest)|true|eventRequest|
|» event|body|[CreateConfigsNotificationEvent](#schemacreateconfigsnotificationevent)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventName|REFRESH|
|eventName|DATA_UPDATES|
|eventName|AUTO_REFRESH_UPDATES|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="subscribe-for-notification-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|None|
|400|Bad Request|Y803 : eventName required<br>Y803 : callbackUrl required<br>Y800 : Invalid value for callbackUrl|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Notification Subscription

<a id="opIddeleteSubscribedNotificationEvent"></a>

> Code samples

```bash
curl https://example.com/configs/notifications/events/REFRESH \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /configs/notifications/events/{eventName}`

The delete events service is used to unsubscribe from an events service.<br>

<h3 id="delete-notification-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventName|path|string|true|eventName|

#### Enumerated Values

|Parameter|Value|
|---|---|
|eventName|REFRESH|
|eventName|DATA_UPDATES|
|eventName|AUTO_REFRESH_UPDATES|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="delete-notification-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|400|Bad Request|Y803 : eventName required|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Public Key

<a id="opIdgetPublicEncryptionKey"></a>

> Code samples

```bash
curl https://example.com/configs/publicKey \
  -H 'Accept: application/json'
```

`GET /configs/publicKey`

The get public key service provides the public key that should be used to encrypt user credentials while invoking POST /providerAccounts and PUT /providerAccounts endpoints.<br>This service will only work if the PKI (public key infrastructure) feature is enabled for the customer.<br><br><b>Note:</b><li> The key in the response is a string in PEM format.</li><li>This endpoint is not available in the Sandbox environment and it is useful only if the PKI feature is enabled.</li>

> Example responses

> 200 Response

```json
{
  "publicKey": {
    "alias": "string",
    "key": "string"
  }
}
```

<h3 id="get-public-key-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ConfigsPublicKeyResponse](#schemaconfigspublickeyresponse)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="yodlee-core-apis-dataextracts">DataExtracts</h1>

DataExtracts API

## Get Events

<a id="opIdgetDataExtractsEvents"></a>

> Code samples

```bash
curl 'https://example.com/dataExtracts/events?eventName=string&fromDate=string&toDate=string' \
  -H 'Accept: application/json'
```

`GET /dataExtracts/events`

The get extracts events service is used to learn about occurrences of data extract related events. This service currently supports only the DATA_UPDATES event.<br>Passing the event name as DATA_UPDATES provides information about users for whom data has been modified in the system for the specified time range. To learn more, please refer to the <a href="https://developer.yodlee.com/docs/api/1.1/DataExtracts">dataExtracts</a> page.<br>You can retrieve data in increments of no more than 60 minutes over the period of the last 7 days from today's date.<br>This service is only invoked with either admin access token or a cobrand session.<br>

<h3 id="get-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventName|query|string|true|Event Name|
|fromDate|query|string|true|From DateTime (YYYY-MM-DDThh:mm:ssZ)|
|toDate|query|string|true|To DateTime (YYYY-MM-DDThh:mm:ssZ)|

> Example responses

> 200 Response

```json
{
  "event": {
    "data": {
      "fromDate": "string",
      "toDate": "string",
      "userCount": 0,
      "userData": [
        {
          "links": [
            {
              "href": "string",
              "methodType": "string",
              "rel": "string"
            }
          ],
          "user": {
            "loginName": "string"
          }
        }
      ]
    },
    "info": "string"
  }
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DataExtractsEventResponse](#schemadataextractseventresponse)|
|400|Bad Request|Y800 : Invalid value for fromDate.fromDate cannot be greater than current time<br>Y800 : Invalid value for toDate.toDate cannot be greater than current time<br>Y800 : Invalid value for fromDate or toDate.fromDate and toDate cannot be older than 7 days<br>Y800 : Invalid value for fromDate.fromDate cannot be greater than toDate.|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get userData

<a id="opIdgetDataExtractsUserData"></a>

> Code samples

```bash
curl 'https://example.com/dataExtracts/userData?fromDate=string&loginName=string&toDate=string' \
  -H 'Accept: application/json'
```

`GET /dataExtracts/userData`

The get user data service is used to get a user's modified data for a particular period of time for accounts, transactions, holdings, and provider account information.<br>The time difference between fromDate and toDate fields cannot be more than 60 minutes.<br>By default, pagination is available for the transaction entity in this API. In the first response, the API will retrieve 500 transactions along with other data. The response header will provide a link to retrieve the next set of transactions.<br>In the response body of the first API response, totalTransactionsCount indicates the total number of transactions the API will retrieve for the user.<br>This service is only invoked with either admin access token or a cobrand session.<br/>Refer to <a href="https://developer.yodlee.com/docs/api/1.1/DataExtracts">dataExtracts</a> page for more information.<br><br><b>Note:</b><li>This service supports the localization feature and accepts locale as a header parameter.</li>

<h3 id="get-userdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromDate|query|string|true|From DateTime (YYYY-MM-DDThh:mm:ssZ)|
|loginName|query|string|true|Login Name|
|toDate|query|string|true|To DateTime (YYYY-MM-DDThh:mm:ssZ)|

> Example responses

> 200 Response

```json
{
  "userData": [
    {
      "account": [
        {
          "401kLoan": {
            "amount": 0,
            "currency": "AUD"
          },
          "CONTAINER": "bank",
          "accountName": "string",
          "accountNumber": "string",
          "accountStatus": "ACTIVE",
          "accountType": "string",
          "address": {
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "city": "string",
            "country": "string",
            "sourceType": "string",
            "state": "string",
            "street": "string",
            "type": "HOME",
            "zip": "string"
          },
          "aggregationSource": "SYSTEM",
          "amountDue": {
            "amount": 0,
            "currency": "AUD"
          },
          "annualPercentageYield": 0,
          "annuityBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "apr": 0,
          "associatedProviderAccountId": [
            0
          ],
          "availableBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "availableCash": {
            "amount": 0,
            "currency": "AUD"
          },
          "availableCredit": {
            "amount": 0,
            "currency": "AUD"
          },
          "balance": {
            "amount": 0,
            "currency": "AUD"
          },
          "bankTransferCode": [
            {
              "id": "string",
              "type": "BSB"
            }
          ],
          "cash": {
            "amount": 0,
            "currency": "AUD"
          },
          "cashApr": 0,
          "cashValue": {
            "amount": 0,
            "currency": "AUD"
          },
          "classification": "OTHER",
          "collateral": "string",
          "coverage": [
            {
              "amount": [
                {
                  "cover": {
                    "amount": 0,
                    "currency": "AUD"
                  },
                  "limitType": "IN_NETWORK",
                  "met": {
                    "amount": 0,
                    "currency": "AUD"
                  },
                  "type": "DEDUCTIBLE",
                  "unitType": "PER_FAMILY"
                }
              ],
              "endDate": "string",
              "planType": "PPO",
              "startDate": "string",
              "type": "VISION"
            }
          ],
          "createdDate": "string",
          "currentBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "currentLevel": "string",
          "dataset": [
            {
              "additionalStatus": "LOGIN_IN_PROGRESS",
              "lastUpdateAttempt": "string",
              "lastUpdated": "string",
              "name": "BASIC_AGG_DATA",
              "nextUpdateScheduled": "string",
              "updateEligibility": "ALLOW_UPDATE"
            }
          ],
          "deathBenefit": {
            "amount": 0,
            "currency": "AUD"
          },
          "derivedApr": 0,
          "displayedName": "string",
          "dueDate": "string",
          "enrollmentDate": "string",
          "escrowBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "estimatedDate": "string",
          "expirationDate": "string",
          "faceAmount": {
            "amount": 0,
            "currency": "AUD"
          },
          "frequency": "DAILY",
          "guarantor": "string",
          "homeInsuranceType": "HOME_OWNER",
          "homeValue": {
            "amount": 0,
            "currency": "AUD"
          },
          "id": 0,
          "includeInNetWorth": true,
          "interestPaidLastYear": {
            "amount": 0,
            "currency": "AUD"
          },
          "interestPaidYTD": {
            "amount": 0,
            "currency": "AUD"
          },
          "interestRate": 0,
          "interestRateType": "FIXED",
          "isAsset": true,
          "isDeleted": true,
          "isManual": true,
          "lastEmployeeContributionAmount": {
            "amount": 0,
            "currency": "AUD"
          },
          "lastEmployeeContributionDate": "string",
          "lastPayment": {
            "amount": 0,
            "currency": "AUD"
          },
          "lastPaymentAmount": {
            "amount": 0,
            "currency": "AUD"
          },
          "lastPaymentDate": "string",
          "lastUpdated": "string",
          "lender": "string",
          "lifeInsuranceType": "OTHER",
          "loanPayByDate": "string",
          "loanPayoffAmount": {
            "amount": 0,
            "currency": "AUD"
          },
          "loanPayoffDetails": {
            "outstandingBalance": {
              "amount": 0,
              "currency": "AUD"
            },
            "payByDate": "string",
            "payoffAmount": {
              "amount": 0,
              "currency": "AUD"
            }
          },
          "marginBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "maturityAmount": {
            "amount": 0,
            "currency": "AUD"
          },
          "maturityDate": "string",
          "memo": "string",
          "minimumAmountDue": {
            "amount": 0,
            "currency": "AUD"
          },
          "moneyMarketBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "nextLevel": "string",
          "nickname": "string",
          "oauthMigrationStatus": "IN_PROGRESS",
          "originalLoanAmount": {
            "amount": 0,
            "currency": "AUD"
          },
          "originationDate": "string",
          "overDraftLimit": {
            "amount": 0,
            "currency": "AUD"
          },
          "policyEffectiveDate": "string",
          "policyFromDate": "string",
          "policyStatus": "ACTIVE",
          "policyTerm": "string",
          "policyToDate": "string",
          "premium": {
            "amount": 0,
            "currency": "AUD"
          },
          "premiumPaymentTerm": "string",
          "primaryRewardUnit": "string",
          "principalBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "providerAccountId": 0,
          "providerId": "string",
          "providerName": "string",
          "recurringPayment": {
            "amount": 0,
            "currency": "AUD"
          },
          "remainingBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "repaymentPlanType": "STANDARD",
          "rewardBalance": [
            {
              "balance": 0,
              "balanceToLevel": "string",
              "balanceToReward": "string",
              "balanceType": "EXPIRING_BALANCE",
              "description": "string",
              "expiryDate": "string",
              "units": "string"
            }
          ],
          "runningBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "shortBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "sourceAccountStatus": "IN_REPAYMENT",
          "sourceId": "string",
          "term": "string",
          "totalCashLimit": {
            "amount": 0,
            "currency": "AUD"
          },
          "totalCreditLimit": {
            "amount": 0,
            "currency": "AUD"
          },
          "totalCreditLine": {
            "amount": 0,
            "currency": "AUD"
          },
          "totalUnvestedBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "totalVestedBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "userClassification": "BUSINESS",
          "valuationType": "SYSTEM"
        }
      ],
      "holding": [
        {
          "accountId": 0,
          "accruedIncome": {
            "amount": 0,
            "currency": "AUD"
          },
          "accruedInterest": {
            "amount": 0,
            "currency": "AUD"
          },
          "contractQuantity": 0,
          "costBasis": {
            "amount": 0,
            "currency": "AUD"
          },
          "couponRate": 0,
          "createdDate": "string",
          "cusipNumber": "string",
          "description": "string",
          "enrichedDescription": "string",
          "exercisedQuantity": 0,
          "expirationDate": "string",
          "grantDate": "string",
          "holdingType": "stock",
          "id": 0,
          "interestRate": 0,
          "isShort": true,
          "isin": "string",
          "lastUpdated": "string",
          "matchStatus": "string",
          "maturityDate": "string",
          "optionType": "put",
          "price": {
            "amount": 0,
            "currency": "AUD"
          },
          "providerAccountId": 0,
          "quantity": 0,
          "securityStyle": "string",
          "securityType": "string",
          "sedol": "string",
          "spread": {
            "amount": 0,
            "currency": "AUD"
          },
          "strikePrice": {
            "amount": 0,
            "currency": "AUD"
          },
          "symbol": "string",
          "term": "string",
          "unvestedQuantity": 0,
          "unvestedValue": {
            "amount": 0,
            "currency": "AUD"
          },
          "value": {
            "amount": 0,
            "currency": "AUD"
          },
          "vestedQuantity": 0,
          "vestedSharesExercisable": 0,
          "vestedValue": {
            "amount": 0,
            "currency": "AUD"
          },
          "vestingDate": "string"
        }
      ],
      "providerAccount": [
        {
          "aggregationSource": "SYSTEM",
          "createdDate": "string",
          "dataset": [
            {
              "additionalStatus": "LOGIN_IN_PROGRESS",
              "lastUpdateAttempt": "string",
              "lastUpdated": "string",
              "name": "BASIC_AGG_DATA",
              "nextUpdateScheduled": "string",
              "updateEligibility": "ALLOW_UPDATE"
            }
          ],
          "id": 0,
          "isDeleted": true,
          "isManual": true,
          "lastUpdated": "string",
          "oauthMigrationStatus": "IN_PROGRESS",
          "providerId": 0,
          "requestId": "string",
          "status": "LOGIN_IN_PROGRESS"
        }
      ],
      "totalTransactionsCount": 0,
      "transaction": [
        {
          "CONTAINER": "bank",
          "accountId": 0,
          "amount": {
            "amount": 0,
            "currency": "AUD"
          },
          "baseType": "CREDIT",
          "category": "string",
          "categoryId": 0,
          "categorySource": "SYSTEM",
          "categoryType": "TRANSFER",
          "checkNumber": "string",
          "commission": {
            "amount": 0,
            "currency": "AUD"
          },
          "createdDate": "string",
          "cusipNumber": "string",
          "date": "string",
          "description": {
            "consumer": "string",
            "original": "string",
            "security": "string",
            "simple": "string"
          },
          "detailCategoryId": 0,
          "highLevelCategoryId": 0,
          "holdingDescription": "string",
          "id": 0,
          "interest": {
            "amount": 0,
            "currency": "AUD"
          },
          "isDeleted": true,
          "isManual": true,
          "isin": "string",
          "lastUpdated": "string",
          "memo": "string",
          "merchant": {
            "address": {
              "address1": "string",
              "address2": "string",
              "address3": "string",
              "city": "string",
              "country": "string",
              "sourceType": "string",
              "state": "string",
              "street": "string",
              "type": "HOME",
              "zip": "string"
            },
            "categoryLabel": [
              "string"
            ],
            "contact": {
              "email": "string",
              "phone": "string"
            },
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            },
            "id": "string",
            "name": "string",
            "source": "YODLEE",
            "website": "string"
          },
          "parentCategoryId": 0,
          "postDate": "string",
          "price": {
            "amount": 0,
            "currency": "AUD"
          },
          "principal": {
            "amount": 0,
            "currency": "AUD"
          },
          "quantity": 0,
          "runningBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "sedol": "string",
          "settleDate": "string",
          "sourceId": "string",
          "sourceType": "AGGREGATED",
          "status": "POSTED",
          "subType": "AUTH_HOLD",
          "symbol": "string",
          "transactionDate": "string",
          "type": "string",
          "valoren": "string"
        }
      ],
      "user": {
        "loginName": "string"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-userdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DataExtractsUserDataResponse](#schemadataextractsuserdataresponse)|
|400|Bad Request|Y800 : Invalid value for eventName<br>Y821 : Data update event not supported<br>Y800 : Invalid value for fromDate.fromDate cannot be greater than current time<br>Y800 : Invalid value for toDate.toDate cannot be greater than current time<br>.Y800 : Invalid value for fromDate or toDate.fromDate and toDate cannot be older than 7 days<br>Y800 : Invalid value for fromDate.fromDate can not be greater than toDate<br>Y800 : Invalid value for loginName|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="yodlee-core-apis-derived">Derived</h1>

Derived API

## Get Holding Summary

<a id="opIdgetHoldingSummary"></a>

> Code samples

```bash
curl https://example.com/derived/holdingSummary \
  -H 'Accept: application/json'
```

`GET /derived/holdingSummary`

The get holding summary service is used to get the summary of asset classifications for the user.<br>By default, accounts with status as ACTIVE and TO BE CLOSED will be considered.<br>If the include parameter value is passed as details then a summary with holdings and account information is returned.<br>

<h3 id="get-holding-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountIds|query|string|false|Comma separated accountIds|
|classificationType|query|string|false|e.g. Country, Sector, etc.|
|include|query|string|false|details|

> Example responses

> 200 Response

```json
{
  "holdingSummary": [
    {
      "account": [
        {
          "id": 0,
          "value": {
            "amount": 0,
            "currency": "AUD"
          }
        }
      ],
      "classificationType": "string",
      "classificationValue": "string",
      "holding": [
        {
          "accountId": 0,
          "accruedIncome": {
            "amount": 0,
            "currency": "AUD"
          },
          "accruedInterest": {
            "amount": 0,
            "currency": "AUD"
          },
          "assetClassification": {
            "allocation": 0,
            "classificationType": "string",
            "classificationValue": "string"
          },
          "contractQuantity": 0,
          "costBasis": {
            "amount": 0,
            "currency": "AUD"
          },
          "couponRate": 0,
          "createdDate": "string",
          "cusipNumber": "string",
          "description": "string",
          "enrichedDescription": "string",
          "exercisedQuantity": 0,
          "expirationDate": "string",
          "grantDate": "string",
          "holdingType": "stock",
          "id": 0,
          "interestRate": 0,
          "isShort": true,
          "isin": "string",
          "lastUpdated": "string",
          "matchStatus": "string",
          "maturityDate": "string",
          "optionType": "put",
          "price": {
            "amount": 0,
            "currency": "AUD"
          },
          "providerAccountId": 0,
          "quantity": 0,
          "securityStyle": "string",
          "securityType": "string",
          "sedol": "string",
          "spread": {
            "amount": 0,
            "currency": "AUD"
          },
          "strikePrice": {
            "amount": 0,
            "currency": "AUD"
          },
          "symbol": "string",
          "term": "string",
          "unvestedQuantity": 0,
          "unvestedValue": {
            "amount": 0,
            "currency": "AUD"
          },
          "value": {
            "amount": 0,
            "currency": "AUD"
          },
          "vestedQuantity": 0,
          "vestedSharesExercisable": 0,
          "vestedValue": {
            "amount": 0,
            "currency": "AUD"
          },
          "vestingDate": "string"
        }
      ],
      "value": {
        "amount": 0,
        "currency": "AUD"
      }
    }
  ],
  "link": {
    "holdings": "string"
  }
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-holding-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DerivedHoldingSummaryResponse](#schemaderivedholdingsummaryresponse)|
|400|Bad Request|Y800 : Invalid value for classificationType<br>Y814 : Exchange rate not available for currency<br>Y824 : The maximum number of accountIds permitted is 100<br>|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Networth Summary

<a id="opIdgetNetworth"></a>

> Code samples

```bash
curl https://example.com/derived/networth \
  -H 'Accept: application/json'
```

`GET /derived/networth`

The get networth service is used to get the networth for the user.<br>If the include parameter value is passed as details then networth with historical balances is returned. <br>

<h3 id="get-networth-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountIds|query|string|false|comma separated accountIds|
|container|query|string|false|bank/creditCard/investment/insurance/loan/realEstate/otherAssets/otherLiabilities|
|fromDate|query|string|false|from date for balance retrieval (YYYY-MM-DD)|
|include|query|string|false|details|
|interval|query|string|false|D-daily, W-weekly or M-monthly|
|skip|query|integer(int32)|false|skip (Min 0)|
|toDate|query|string|false|toDate for balance retrieval (YYYY-MM-DD)|
|top|query|integer(int32)|false|top (Max 500)|

> Example responses

> 200 Response

```json
{
  "networth": [
    {
      "asset": {
        "amount": 0,
        "currency": "AUD"
      },
      "date": "string",
      "historicalBalances": [
        {
          "accountId": 0,
          "asOfDate": "string",
          "balance": {
            "amount": 0,
            "currency": "AUD"
          },
          "dataSourceType": "S",
          "date": "string",
          "isAsset": true
        }
      ],
      "liability": {
        "amount": 0,
        "currency": "AUD"
      },
      "networth": {
        "amount": 0,
        "currency": "AUD"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-networth-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DerivedNetworthResponse](#schemaderivednetworthresponse)|
|400|Bad Request|Y800 : Invalid value for accountIds<br>Y800 : Invalid value for fromDate<br>Y800 : Invalid value for toDate<br>Y809 : Invalid date range<br>Y800 : Invalid value for interval<br>Y802 : Future date not allowed<br>Y814 : Exchange rate not available for currency<br>Y800 : Invalid value for container|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Transaction Summary

<a id="opIdgetTransactionSummary"></a>

> Code samples

```bash
curl 'https://example.com/derived/transactionSummary?groupBy=string' \
  -H 'Accept: application/json'
```

`GET /derived/transactionSummary`

The transaction summary service provides the summary values of transactions for the given date range by category type, high-level categories, or system-defined categories.<br><br>Yodlee has the transaction data stored for a day, month, year and week per category as per the availability of user's data. If the include parameter value is passed as details, then summary details will be returned depending on the interval passed-monthly is the default.<br><br><b>Notes:</b><ol> <li> Details can be requested for only one system-defined category<li>Passing categoryType is mandatory except when the groupBy value is CATEGORY_TYPE<li>Dates will not be respected for monthly, yearly, and weekly details<li>When monthly details are requested, only the fromDate and toDate month will be respected<li>When yearly details are requested, only the fromDate and toDate year will be respected<li>For weekly data points, details will be provided for every Sunday date available within the fromDate and toDate<li>This service supports the localization feature and accepts locale as a header parameter</li></ol>

<h3 id="get-transaction-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|query|string|false|comma separated account Ids|
|categoryId|query|string|false|comma separated categoryIds|
|categoryType|query|string|false|INCOME, EXPENSE, TRANSFER, UNCATEGORIZE or DEFERRED_COMPENSATION|
|fromDate|query|string|false|YYYY-MM-DD format|
|groupBy|query|string|true|CATEGORY_TYPE, HIGH_LEVEL_CATEGORY or CATEGORY|
|include|query|string|false|details|
|includeUserCategory|query|boolean|false|TRUE/FALSE|
|interval|query|string|false|D-daily, W-weekly, M-mothly or Y-yearly|
|toDate|query|string|false|YYYY-MM-DD format|

> Example responses

> 200 Response

```json
{
  "links": {
    "transactions": "string"
  },
  "transactionSummary": [
    {
      "categorySummary": [
        {
          "categoryId": 0,
          "categoryName": "string",
          "creditTotal": {
            "amount": 0,
            "currency": "AUD"
          },
          "debitTotal": {
            "amount": 0,
            "currency": "AUD"
          },
          "details": [
            {
              "creditTotal": {
                "amount": 0,
                "currency": "AUD"
              },
              "date": "string",
              "debitTotal": {
                "amount": 0,
                "currency": "AUD"
              }
            }
          ],
          "links": {
            "transactions": "string"
          }
        }
      ],
      "categoryType": "TRANSFER",
      "creditTotal": {
        "amount": 0,
        "currency": "AUD"
      },
      "debitTotal": {
        "amount": 0,
        "currency": "AUD"
      },
      "links": {
        "transactions": "string"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-transaction-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DerivedTransactionSummaryResponse](#schemaderivedtransactionsummaryresponse)|
|400|Bad Request|Y010 : Invalid session<br>Y800 : Invalid value for accountId<br>Y800 : Invalid value for groupBy<br>Y803 : groupBy required<br>Y803 : categoryType required<br>Y800 : Invalid value for categoryId<br>Y800 : Invalid value for fromDate<br>Y800 : Invalid value for toDate<br>Y800 : Invalid value for fromDate or toDate<br>Y814 : Exchange rate not available for currency<br>Y815 : Cannot apply filter on categoryId if groupBy value is CATEGORY_TYPE<br>Y816 : User-defined category details can only be requested for one system categoryId with groupBy='CATEGORY'<br>Y824 : The maximum number of accountIds permitted is 100<br>Y824 : The maximum number of categoryIds permitted is 100<br>Y824 : The maximum number of categoryTypes permitted is 100|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="yodlee-core-apis-documents">Documents</h1>

Documents API

## Get Documents

<a id="opIdgetDocuments"></a>

> Code samples

```bash
curl https://example.com/documents \
  -H 'Accept: application/json'
```

`GET /documents`

The get documents service allows customers to search or retrieve metadata related to documents. <br>The API returns the document as per the input parameters passed. If no date range is provided then all downloaded documents will be retrieved. Details of deleted documents or documents associated to closed providerAccount will not be returned. <br>This API is a premium service which requires subscription in advance to use.  Please contact Yodlee Client Services for more information. <br>

<h3 id="get-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Keyword|query|string|false|The string used to search a document by its name.|
|accountId|query|string|false|The unique identifier of an account. Retrieve documents for a given accountId.|
|docType|query|string|false|Accepts only one of the following valid document types: STMT, TAX, and EBILL.|
|fromDate|query|string|false|The date from which documents have to be retrieved.|
|toDate|query|string|false|The date to which documents have to be retrieved.|

> Example responses

> 200 Response

```json
{
  "document": [
    {
      "accountID": 0,
      "docType": "STMT",
      "formType": "string",
      "id": "string",
      "lastUpdated": "string",
      "name": "string",
      "source": "string",
      "status": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DocumentResponse](#schemadocumentresponse)|
|400|Bad Request|Y800 : Invalid value for accountId<br>Y800 : Invalid value for fromDate<br>Y800 : Invalid value for toDate<br>Y800 : Invalid value for docType|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download a Document

<a id="opIddownloadDocument"></a>

> Code samples

```bash
curl https://example.com/documents/string \
  -H 'Accept: application/json'
```

`GET /documents/{documentId}`

The get document details service allows consumers to download a document. The document is provided in base64.<br>This API is a premium service which requires subscription in advance to use.  Please contact Yodlee Client Services for more information. <br>

<h3 id="download-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|string|true|documentId|

> Example responses

> 200 Response

```json
{
  "document": [
    {
      "docContent": "string",
      "id": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="download-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DocumentDownloadResponse](#schemadocumentdownloadresponse)|
|400|Bad Request|Y800 : Invalid value for documentId|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Document

<a id="opIddeleteDocument"></a>

> Code samples

```bash
curl https://example.com/documents/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /documents/{documentId}`

The delete document service allows the consumer to delete a document. The deleted document will not be returned in the get documents API. The HTTP response code is 204 (success without content).<br>Documents can be deleted only if the document related dataset attributes are subscribed.<br>

<h3 id="delete-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|string|true|documentId|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="delete-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|400|Bad Request|Y800 : Invalid value for documentId<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="yodlee-core-apis-holdings">Holdings</h1>

Holdings API

## Get Holdings

<a id="opIdgetHoldings"></a>

> Code samples

```bash
curl https://example.com/holdings \
  -H 'Accept: application/json'
```

`GET /holdings`

The get holdings service is used to get the list of holdings of a user.<br>Supported holding types can be employeeStockOption, moneyMarketFund, bond, etc. and is obtained using get holding type list service. <br>Asset classifications for the holdings need to be requested through the "include" parameter.<br>Asset classification information for holdings are not available by default, as it is a premium feature.<br>

<h3 id="get-holdings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|query|string|false|Comma separated accountId|
|assetClassification.classificationType|query|string|false|e.g. Country, Sector, etc.|
|classificationValue|query|string|false|e.g. US|
|include|query|string|false|assetClassification|
|providerAccountId|query|string|false|providerAccountId|

> Example responses

> 200 Response

```json
{
  "holding": [
    {
      "accountId": 0,
      "accruedIncome": {
        "amount": 0,
        "currency": "AUD"
      },
      "accruedInterest": {
        "amount": 0,
        "currency": "AUD"
      },
      "assetClassification": [
        {
          "allocation": 0,
          "classificationType": "string",
          "classificationValue": "string"
        }
      ],
      "contractQuantity": 0,
      "costBasis": {
        "amount": 0,
        "currency": "AUD"
      },
      "couponRate": 0,
      "createdDate": "string",
      "cusipNumber": "string",
      "description": "string",
      "enrichedDescription": "string",
      "exercisedQuantity": 0,
      "expirationDate": "string",
      "grantDate": "string",
      "holdingType": "stock",
      "id": 0,
      "interestRate": 0,
      "isShort": true,
      "isin": "string",
      "lastUpdated": "string",
      "matchStatus": "string",
      "maturityDate": "string",
      "optionType": "put",
      "price": {
        "amount": 0,
        "currency": "AUD"
      },
      "providerAccountId": 0,
      "quantity": 0,
      "securityStyle": "string",
      "securityType": "string",
      "sedol": "string",
      "spread": {
        "amount": 0,
        "currency": "AUD"
      },
      "strikePrice": {
        "amount": 0,
        "currency": "AUD"
      },
      "symbol": "string",
      "term": "string",
      "unvestedQuantity": 0,
      "unvestedValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "value": {
        "amount": 0,
        "currency": "AUD"
      },
      "vestedQuantity": 0,
      "vestedSharesExercisable": 0,
      "vestedValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "vestingDate": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-holdings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HoldingResponse](#schemaholdingresponse)|
|400|Bad Request|Y800 : Invalid value for accountId<br>Y800 : Invalid value for providerAccountId<br>Y800 : Invalid value for include<br>Y800 : Invalid value for classificationType<br>Y800 : Invalid value for classificationValue<br>Y800 : Invalid value for include<br>Y400 : classificationType mismatch<br>Y400 : classificationValue mismatch<br>Y824 : The maximum number of accountIds permitted is 100|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Asset Classification List

<a id="opIdgetAssetClassificationList"></a>

> Code samples

```bash
curl https://example.com/holdings/assetClassificationList \
  -H 'Accept: application/json'
```

`GET /holdings/assetClassificationList`

The get asset classifications list service is used to get the supported asset classifications. <br>The response includes different classification types like assetClass, country, sector, style, etc. and the values corresponding to each type.<br>

> Example responses

> 200 Response

```json
{
  "assetClassificationList": [
    {
      "classificationType": "string",
      "classificationValue": [
        "string"
      ]
    }
  ]
}
```

<h3 id="get-asset-classification-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HoldingAssetClassificationListResponse](#schemaholdingassetclassificationlistresponse)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Holding Type List

<a id="opIdgetHoldingTypeList"></a>

> Code samples

```bash
curl https://example.com/holdings/holdingTypeList \
  -H 'Accept: application/json'
```

`GET /holdings/holdingTypeList`

The get holding types list service is used to get the supported holding types.<br>The response includes different holding types such as future, moneyMarketFund, stock, etc. and it returns the supported holding types <br>

> Example responses

> 200 Response

```json
{
  "holdingType": [
    "stock"
  ]
}
```

<h3 id="get-holding-type-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HoldingTypeListResponse](#schemaholdingtypelistresponse)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Security Details

<a id="opIdgetSecurities"></a>

> Code samples

```bash
curl https://example.com/holdings/securities \
  -H 'Accept: application/json'
```

`GET /holdings/securities`

The get security details service is used to get all the security information for the holdings<br>

<h3 id="get-security-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|holdingId|query|string|false|Comma separated holdingId|

> Example responses

> 200 Response

```json
{
  "holding": [
    {
      "id": "string",
      "security": {
        "accrualMethod": "string",
        "agencyFactor": 0,
        "callDate": "string",
        "callPrice": 0,
        "cdscFundFlag": true,
        "closedFlag": true,
        "cusip": "string",
        "description": "string",
        "federalTaxable": true,
        "firmEligible": "string",
        "firstCouponDate": "string",
        "frequency": 0,
        "fundFamily": "string",
        "gicsSector": "string",
        "id": 0,
        "incomeCurrency": "string",
        "interestRate": 0,
        "isDummySecurity": true,
        "isEnvestnetDummySecurity": true,
        "isSyntheticSecurity": true,
        "isin": "string",
        "issueDate": "string",
        "issueTypeMultiplier": 0,
        "lastCouponDate": "string",
        "lastModifiedDate": "string",
        "maturityDate": "string",
        "minimumPurchase": 0,
        "moodyRating": "string",
        "sAndPRating": "string",
        "sector": "string",
        "sedol": "string",
        "shareClass": "string",
        "stateTaxable": true,
        "stockExchangeDetails": [
          {
            "countryCode": "string",
            "currencyCode": "string",
            "exchangeCode": "string",
            "symbol": "string"
          }
        ],
        "style": "string",
        "subSector": "string",
        "tradeCurrencyCode": "string",
        "type": "string"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-security-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[HoldingSecuritiesResponse](#schemaholdingsecuritiesresponse)|
|400|Bad Request|Y800 : Invalid value for holdingId<br>Y824 : The maximum number of holdingIds permitted is 100|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="yodlee-core-apis-provideraccounts">ProviderAccounts</h1>

Provider Accounts API

## Get Provider Accounts

<a id="opIdgetAllProviderAccounts"></a>

> Code samples

```bash
curl https://example.com/providerAccounts \
  -H 'Accept: application/json'
```

`GET /providerAccounts`

The get provider accounts service is used to return all the provider accounts added by the user. <br>This includes the failed and successfully added provider accounts.<br>

<h3 id="get-provider-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include|query|string|false|include|
|providerIds|query|string|false|Comma separated providerIds.|

> Example responses

> 200 Response

```json
{
  "providerAccount": [
    {
      "aggregationSource": "SYSTEM",
      "consentId": 0,
      "createdDate": "string",
      "dataset": [
        {
          "additionalStatus": "LOGIN_IN_PROGRESS",
          "lastUpdateAttempt": "string",
          "lastUpdated": "string",
          "name": "BASIC_AGG_DATA",
          "nextUpdateScheduled": "string",
          "updateEligibility": "ALLOW_UPDATE"
        }
      ],
      "id": 0,
      "isManual": true,
      "lastUpdated": "string",
      "oauthMigrationStatus": "IN_PROGRESS",
      "preferences": {
        "isAutoRefreshEnabled": true,
        "isDataExtractsEnabled": true,
        "linkedProviderAccountId": 0
      },
      "providerId": 0,
      "requestId": "string",
      "status": "LOGIN_IN_PROGRESS"
    }
  ]
}
```

<h3 id="get-provider-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ProviderAccountResponse](#schemaprovideraccountresponse)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Account

<a id="opIdeditCredentialsOrRefreshProviderAccount"></a>

> Code samples

```bash
curl 'https://example.com/providerAccounts?providerAccountIds=string' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "aggregationSource": "SYSTEM",
    "consentId": 0,
    "dataset": [
      {
        "attribute": [
          {
            "container": [
              "bank"
            ],
            "containerAttributes": {
              "BANK": {
                "fullAccountNumberFields": [
                  "paymentAccountNumber"
                ],
                "numberOfTransactionDays": 0
              },
              "CREDITCARD": {
                "fullAccountNumberFields": [
                  "paymentAccountNumber"
                ],
                "numberOfTransactionDays": 0
              },
              "INSURANCE": {
                "fullAccountNumberFields": [
                  "paymentAccountNumber"
                ],
                "numberOfTransactionDays": 0
              },
              "INVESTMENT": {
                "fullAccountNumberFields": [
                  "paymentAccountNumber"
                ],
                "numberOfTransactionDays": 0
              },
              "LOAN": {
                "fullAccountNumberFields": [
                  "paymentAccountNumber"
                ],
                "numberOfTransactionDays": 0
              }
            },
            "name": "BASIC_ACCOUNT_INFO"
          }
        ],
        "name": "BASIC_AGG_DATA"
      }
    ],
    "datasetName": [
      "BASIC_AGG_DATA"
    ],
    "field": [
      {
        "id": "string",
        "image": "string",
        "value": "string"
      }
    ],
    "preferences": {
      "isAutoRefreshEnabled": true,
      "isDataExtractsEnabled": true,
      "linkedProviderAccountId": 0
    }
  }'
```

`PUT /providerAccounts`

The update account API is used to:<br> <ul><li>Retrieve the latest information for accounts that belong to one providerAccount from the provider site. You must allow at least 15 min between requests.<li>Retrieve the latest information of all the eligible accounts that belong to the user.<li>Data to be retrieved from the provider site can be overridden using datasetName or dataset. If you do pass datasetName, all the datasets that are implicitly configured for the dataset will be retrieved. This action is allowed for single provider account refresh flows only.<li>Check the status of the providerAccount before invoking this API. Do not call this API to trigger any action on a providerAccount when an action is already in progress for the providerAccount.<li>If the customer has subscribed to the REFRESH event notification and invoked this API, relevant notifications will be sent to the customer.<li>A dataset may depend on another dataset for retrieval, so the response will include the requested and dependent datasets.<li>Check all the dataset additional statuses returned in the response because the provider account status is drawn from the dataset additional statuses.<li>Updating preferences using this API will trigger refreshes.<li> The content type has to be passed as application/json for the body parameter.</ul><br>-----------------------------------------------------------------------------------------------------------------------------------------<br><br><b>Update All Eligible Accounts - Notes:</b><br><ul><li>This API will trigger a refresh for all the eligible provider accounts(both OB and credential-based accounts).<li>This API will not refresh closed, inactive, or UAR accounts, or accounts with refreshes in-progress or recently refreshed non-OB accounts.<li>No parameters should be passed to this API to trigger this action.<li>Do not call this API often. Our recommendation is to call this only at the time the user logs in to your app because it can hamper other API calls performance.<li>The response only contains information for accounts that were refreshed. If no accounts are eligible for refresh, no response is returned.</ul>

> Body parameter

```json
{
  "aggregationSource": "SYSTEM",
  "consentId": 0,
  "dataset": [
    {
      "attribute": [
        {
          "container": [
            "bank"
          ],
          "containerAttributes": {
            "BANK": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "CREDITCARD": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "INSURANCE": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "INVESTMENT": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "LOAN": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            }
          },
          "name": "BASIC_ACCOUNT_INFO"
        }
      ],
      "name": "BASIC_AGG_DATA"
    }
  ],
  "datasetName": [
    "BASIC_AGG_DATA"
  ],
  "field": [
    {
      "id": "string",
      "image": "string",
      "value": "string"
    }
  ],
  "preferences": {
    "isAutoRefreshEnabled": true,
    "isDataExtractsEnabled": true,
    "linkedProviderAccountId": 0
  }
}
```

<h3 id="update-account-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerAccountIds|query|string|true|comma separated providerAccountIds|
|body|body|[ProviderAccountRequest](#schemaprovideraccountrequest)|false|loginForm or field entity|
|» aggregationSource|body|string|false|none|
|» consentId|body|integer(int64)|false|Consent Id generated for the request through POST Consent.<br><br><b>Endpoints</b>:<ul><li>POST Provider Account</li><li>PUT Provider Account</li></ul>|
|» dataset|body|[[ProvidersDataset](#schemaprovidersdataset)]|false|none|
|» datasetName|body|[string]|false|none|
|» field|body|[[Field](#schemafield)]|true|none|
|» preferences|body|[ProviderAccountPreferences](#schemaprovideraccountpreferences)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» aggregationSource|SYSTEM|
|» aggregationSource|USER|
|» datasetName|BASIC_AGG_DATA|
|» datasetName|ADVANCE_AGG_DATA|
|» datasetName|ACCT_PROFILE|
|» datasetName|DOCUMENT|

> Example responses

> 200 Response

```json
{
  "providerAccount": [
    {
      "aggregationSource": "SYSTEM",
      "createdDate": "string",
      "dataset": [
        {
          "additionalStatus": "LOGIN_IN_PROGRESS",
          "lastUpdateAttempt": "string",
          "lastUpdated": "string",
          "name": "BASIC_AGG_DATA",
          "nextUpdateScheduled": "string",
          "updateEligibility": "ALLOW_UPDATE"
        }
      ],
      "id": 0,
      "isManual": true,
      "lastUpdated": "string",
      "loginForm": [
        {
          "forgetPasswordURL": "string",
          "formType": "login",
          "help": "string",
          "id": 0,
          "loginHelp": "string",
          "mfaInfoText": "string",
          "mfaInfoTitle": "string",
          "mfaTimeout": 0,
          "row": [
            {
              "field": [
                {
                  "id": "string",
                  "image": "string",
                  "isOptional": true,
                  "isValueProvided": true,
                  "maxLength": 0,
                  "minLength": 0,
                  "name": "string",
                  "option": [
                    {
                      "displayText": "string",
                      "isSelected": true,
                      "optionValue": "string"
                    }
                  ],
                  "prefix": "string",
                  "suffix": "string",
                  "type": "text",
                  "value": "string",
                  "valueEditable": "string"
                }
              ],
              "fieldRowChoice": "string",
              "form": "string",
              "id": "string",
              "label": "string"
            }
          ]
        }
      ],
      "oauthMigrationStatus": "IN_PROGRESS",
      "providerId": 0,
      "requestId": "string",
      "status": "LOGIN_IN_PROGRESS"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="update-account-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdatedProviderAccountResponse](#schemaupdatedprovideraccountresponse)|
|400|Bad Request|Y805 : Multiple providerAccountId not supported for updating credentials<br>Y800 : Invalid value for credentialsParam<br>Y400 : id and value in credentialsParam are mandatory<br>Y806 : Invalid input<br>Y823 : Credentials are not applicable for real estate aggregated / manual accounts<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get User Profile Details

<a id="opIdgetProviderAccountProfiles"></a>

> Code samples

```bash
curl https://example.com/providerAccounts/profile \
  -H 'Accept: application/json'
```

`GET /providerAccounts/profile`

The get provider accounts profile service is used to return the user profile details that are associated to the provider account. <br>

<h3 id="get-user-profile-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerAccountId|query|string|false|Comma separated providerAccountIds.|

> Example responses

> 200 Response

```json
{
  "providerAccount": [
    {
      "id": 0,
      "profile": [
        {
          "address": [
            {
              "address1": "string",
              "address2": "string",
              "address3": "string",
              "city": "string",
              "country": "string",
              "sourceType": "string",
              "state": "string",
              "street": "string",
              "type": "HOME",
              "zip": "string"
            }
          ],
          "email": [
            {
              "type": "PRIMARY",
              "value": "string"
            }
          ],
          "gender": "string",
          "identifier": [
            {
              "type": "NIE",
              "value": "string"
            }
          ],
          "name": {
            "first": "string",
            "fullName": "string",
            "last": "string",
            "middle": "string"
          },
          "phoneNumber": [
            {
              "type": "HOME",
              "value": "string"
            }
          ]
        }
      ]
    }
  ]
}
```

<h3 id="get-user-profile-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ProviderAccountUserProfileResponse](#schemaprovideraccountuserprofileresponse)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Provider Account Details

<a id="opIdgetProviderAccount"></a>

> Code samples

```bash
curl https://example.com/providerAccounts/0 \
  -H 'Accept: application/json'
```

`GET /providerAccounts/{providerAccountId}`

The get provider account details service is used to learn the status of adding accounts and updating accounts.<br>This service has to be called continuously to know the progress level of the triggered process. This service also provides the MFA information requested by the provider site.<br>When <i>include = credentials</i>, questions is passed as input, the service returns the credentials (non-password values) and questions stored in the Yodlee system for that provider account. <br><br><b>Note:</b> <li>The password and answer fields are not returned in the response.</li>

<h3 id="get-provider-account-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include|query|string|false|include credentials,questions|
|providerAccountId|path|integer(int64)|true|providerAccountId|
|requestId|query|string|false|The unique identifier for the request that returns contextual data|

> Example responses

> 200 Response

```json
{
  "providerAccount": [
    {
      "aggregationSource": "SYSTEM",
      "consentId": 0,
      "createdDate": "string",
      "dataset": [
        {
          "additionalStatus": "LOGIN_IN_PROGRESS",
          "lastUpdateAttempt": "string",
          "lastUpdated": "string",
          "name": "BASIC_AGG_DATA",
          "nextUpdateScheduled": "string",
          "updateEligibility": "ALLOW_UPDATE"
        }
      ],
      "id": 0,
      "isManual": true,
      "lastUpdated": "string",
      "loginForm": [
        {
          "forgetPasswordURL": "string",
          "formType": "login",
          "help": "string",
          "id": 0,
          "loginHelp": "string",
          "mfaInfoText": "string",
          "mfaInfoTitle": "string",
          "mfaTimeout": 0,
          "row": [
            {
              "field": [
                {
                  "id": "string",
                  "image": "string",
                  "isOptional": true,
                  "isValueProvided": true,
                  "maxLength": 0,
                  "minLength": 0,
                  "name": "string",
                  "option": [
                    {
                      "displayText": "string",
                      "isSelected": true,
                      "optionValue": "string"
                    }
                  ],
                  "prefix": "string",
                  "suffix": "string",
                  "type": "text",
                  "value": "string",
                  "valueEditable": "string"
                }
              ],
              "fieldRowChoice": "string",
              "form": "string",
              "id": "string",
              "label": "string"
            }
          ]
        }
      ],
      "oauthMigrationStatus": "IN_PROGRESS",
      "preferences": {
        "isAutoRefreshEnabled": true,
        "isDataExtractsEnabled": true,
        "linkedProviderAccountId": 0
      },
      "providerId": 0,
      "requestId": "string",
      "status": "LOGIN_IN_PROGRESS"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-provider-account-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ProviderAccountDetailResponse](#schemaprovideraccountdetailresponse)|
|400|Bad Request|Y800 : Invalid value for providerAccountId<br>Y816 : questions can only be requested for questionAndAnswer Supported Sites|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Provider Account

<a id="opIddeleteProviderAccount"></a>

> Code samples

```bash
curl https://example.com/providerAccounts/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /providerAccounts/{providerAccountId}`

The delete provider account service is used to delete a provider account from the Yodlee system. This service also deletes the accounts that are created in the Yodlee system for that provider account. <br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br>

<h3 id="delete-provider-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerAccountId|path|integer(int64)|true|providerAccountId|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="delete-provider-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|Y800 : Invalid value for providerAccountId<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Preferences

<a id="opIdupdatePreferences"></a>

> Code samples

```bash
curl https://example.com/providerAccounts/0/preferences \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "preferences": {
      "isAutoRefreshEnabled": true,
      "isDataExtractsEnabled": true,
      "linkedProviderAccountId": 0
    }
  }'
```

`PUT /providerAccounts/{providerAccountId}/preferences`

This endpoint is used to update preferences like data extracts and auto refreshes without triggering refresh for the providerAccount.<br>Setting isDataExtractsEnabled to false will not trigger data extracts notification and dataExtracts/events will not reflect any data change that is happening for the providerAccount.<br>Modified data will not be provided in the dataExtracts/userData endpoint.<br>Setting isAutoRefreshEnabled to false will not trigger auto refreshes for the provider account.<br>

> Body parameter

```json
{
  "preferences": {
    "isAutoRefreshEnabled": true,
    "isDataExtractsEnabled": true,
    "linkedProviderAccountId": 0
  }
}
```

<h3 id="update-preferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerAccountId|path|integer(int64)|true|providerAccountId|
|body|body|[ProviderAccountPreferencesRequest](#schemaprovideraccountpreferencesrequest)|true|preferences|
|» preferences|body|[ProviderAccountPreferences](#schemaprovideraccountpreferences)|false|none|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="update-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|400|Bad Request|Y800 : Invalid value for preferences<br>Y800 : Invalid value for preferences.isDataExtractsEnabled<br>Y800 : Invalid value for preferences.isAutoRefreshEnabled<br>Y807 : Resource not found<br>Y830 : Data extracts feature has to be enabled to set preferences.isDataExtractsEnabled as true<br>Y830 : Auto refresh feature has to be enabled to set preferences.isAutoRefreshEnabled as true<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="yodlee-core-apis-providers">Providers</h1>

Providers API

## Get Providers

<a id="opIdgetAllProviders"></a>

> Code samples

```bash
curl https://example.com/providers \
  -H 'Accept: application/json'
```

`GET /providers`

The get provider service is used to get all the providers that are enabled, search a provider service by name or routing number and get popular sites of a region. <br>Searching for a provider using a routing number is applicable only to the USA and Canada regions.<br>The valid values for priority are: <br>   1. cobrand: Returns providers enabled for the cobrand (Default priority)<br>   2. popular: Returns providers popular among users of the customer<br><br>Only the datasets, attributes, and containers that are enabled for the customer will be returned in the response.<br>Input for the dataset$filter should adhere to the following expression:<br><dataset.name>[<attribute.name>.container[<container> OR <container>] OR <attribute.name>.container[<container>]] <br>OR <dataset.name>[<attribute.name> OR <attribute.name>]<br><b>dataset$filter value examples:</b><br>ACCT_PROFILE[FULL_ACCT_NUMBER.container[bank OR investment OR creditCard]]<br>ACCT_PROFILE[FULL_ACCT_NUMBER.container[bank]]<br>BASIC_AGG_DATA[ACCOUNT_DETAILS.container[bank OR investment] OR HOLDINGS.container[bank]] OR ACCT_PROFILE[FULL_ACCT_NUMBER.container[bank]]<br>BASIC_AGG_DATA<br>BASIC_AGG_DATA OR ACCT_PROFILE<br>BASIC_AGG_DATA [ ACCOUNT_DETAILS OR HOLDINGS ]<br>BASIC_AGG_DATA [ ACCOUNT_DETAILS] OR DOCUMENT <br>BASIC_AGG_DATA [ BASIC_ACCOUNT_INFO OR ACCOUNT_DETAILS ] <br><br>The fullAcountNumberFields is specified to filter the providers that have paymentAccountNumber or unmaskedAccountNumber support in the FULL_ACCT_NUMBER dataset attribute.<br><b>Examples for usage of fullAccountNumberFields </b><br>dataset$filter=ACCT_PROFILE[ FULL_ACCT_NUMBER.container [ bank ]] &amp; fullAccountNumberFields=paymentAccountNumber<br>dataset$filter=ACCT_PROFILE[ FULL_ACCT_NUMBER.container [ bank ]] &amp; fullAccountNumberFields=unmaskedAccountNumber<br>dataset$filter=ACCT_PROFILE[ FULL_ACCT_NUMBER.container [ bank ]] &amp; fullAccountNumberFields=unmaskedAccountNumber,paymentAccountNumber<br><br>The skip and top parameters are used for pagination. In the skip and top parameters, pass the number of records to be skipped and retrieved, respectively.<br>The response header provides the links to retrieve the next and previous set of transactions.<br><br><b>Note:</b> <ol><li>In a product flow involving user interaction, Yodlee recommends invoking this service with filters.<li>Without filters, the service may perform slowly as it takes a few minutes to return data in the response.<li>The AuthParameter appears in the response only in case of token-based aggregation sites.<li>The pagination feature only applies when the priority parameter is set as cobrand. If no values are provided in the skip and top parameters, the API will only return the first 500 records.<li>This service supports the localization feature and accepts locale as a header parameter.<li>The capability has been deprecated in query parameter and response.</li></ol>

<h3 id="get-providers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|capability|query|string|false|CHALLENGE_DEPOSIT_VERIFICATION - capability search is deprecated|
|dataset$filter|query|string|false|Expression to filter the providers by dataset(s) or dataset attribute(s). The default value will be the dataset or dataset attributes configured as default for the customer.|
|fullAccountNumberFields|query|string|false|Specify to filter the providers with values paymentAccountNumber,unmaskedAccountNumber.|
|institutionId|query|integer(int64)|false|Institution Id for Single site selection|
|name|query|string|false|Name in minimum 1 character or routing number.|
|priority|query|string|false|Search priority|
|providerId|query|string|false|Max 5 Comma seperated Provider Ids|
|skip|query|integer(int32)|false|skip (Min 0) - This is not applicable along with 'name' parameter.|
|top|query|integer(int32)|false|top (Max 500) - This is not applicable along with 'name' parameter.|

> Example responses

> 200 Response

```json
{
  "provider": [
    {
      "PRIORITY": "POPULAR",
      "accountType": [
        "CURRENT"
      ],
      "associatedProviderIds": [
        0
      ],
      "authParameter": [
        "authorizationCode"
      ],
      "authType": "OAUTH",
      "baseUrl": "string",
      "capability": [
        {
          "container": [
            "bank"
          ],
          "name": "string"
        }
      ],
      "countryISOCode": "string",
      "dataset": [
        {
          "attribute": [
            {
              "container": [
                "bank"
              ],
              "containerAttributes": {
                "BANK": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "CREDITCARD": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "INSURANCE": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "INVESTMENT": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "LOAN": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                }
              },
              "fromDate": "string",
              "fromFinYear": "string",
              "name": "BASIC_ACCOUNT_INFO",
              "toDate": "string",
              "toFinYear": "string"
            }
          ],
          "name": "BASIC_AGG_DATA"
        }
      ],
      "favicon": "string",
      "forgetPasswordUrl": "string",
      "help": "string",
      "id": 0,
      "isAddedByUser": "string",
      "isAutoRefreshEnabled": true,
      "isConsentRequired": true,
      "languageISOCode": "string",
      "lastModified": "string",
      "loginHelp": "string",
      "loginUrl": "string",
      "logo": "string",
      "name": "string",
      "primaryLanguageISOCode": "string",
      "status": "Supported"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-providers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ProviderResponse](#schemaproviderresponse)|
|400|Bad Request|Y800 : Invalid value for priority<br>Y800 : Invalid value for providerName<br>Y801 : Invalid length for a site search. The search string must have atleast 1 character<br>Y800 : Invalid value for skip<br>Y804 : Permitted values of top between 1 - 500<br>Y821 : Dataset not supported<br>Y820 : The additionalDataSet is not supported for Get provider API|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Providers Count

<a id="opIdgetProvidersCount"></a>

> Code samples

```bash
curl https://example.com/providers/count \
  -H 'Accept: application/json'
```

`GET /providers/count`

The count service provides the total number of providers that get returned in the GET /providers depending on the input parameters passed.<br>If you are implementing pagination for providers, call this endpoint before calling GET /providers to know the number of providers that are returned for the input parameters passed.<br>The functionality of the input parameters remains the same as that of the GET /providers endpoint<br><br><b>Note:</b> <li>The capability has been deprecated in the query parameter.</li>

<h3 id="get-providers-count-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|capability|query|string|false|CHALLENGE_DEPOSIT_VERIFICATION - capability search is deprecated|
|dataset$filter|query|string|false|Expression to filter the providers by dataset(s) or dataset attribute(s). The default value will be the dataset or dataset attributes configured as default for the customer.|
|fullAccountNumberFields|query|string|false|Specify to filter the providers with values paymentAccountNumber,unmaskedAccountNumber.|
|name|query|string|false|Name in minimum 1 character or routing number.|
|priority|query|string|false|Search priority|

> Example responses

> 200 Response

```json
{
  "provider": {
    "TOTAL": {
      "count": 0
    }
  }
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-providers-count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ProvidersCountResponse](#schemaproviderscountresponse)|
|400|Bad Request|Y800 : Invalid value for priority<br>Y800 : Invalid value for providerName<br>Y801 : Invalid length for a site search. The search string must have at least 1 character<br>Y800 : Invalid value for skip<br>Y804 : Permitted values of top between 1 - 500<br>Y821 : Dataset not supported<br>Y820 : The additionalDataSet is not supported for Get provider API|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Provider Details

<a id="opIdgetProvider"></a>

> Code samples

```bash
curl https://example.com/providers/0 \
  -H 'Accept: application/json'
```

`GET /providers/{providerId}`

The get provider detail service is used to get detailed information including the login form for a provider.<br>The response is a provider object that includes information such as name of the provider, <br>provider's base URL, a list of containers supported by the provider, the login form details of the provider, etc.<br>Only enabled datasets, attributes and containers gets returned in the response.<br><br><b>Note:</b><li>This service supports the localization feature and accepts locale as a header parameter.<li>The capability has been deprecated in the response.

<h3 id="get-provider-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|integer(int64)|true|providerId|

> Example responses

> 200 Response

```json
{
  "provider": [
    {
      "PRIORITY": "POPULAR",
      "accountType": [
        "CURRENT"
      ],
      "associatedProviderIds": [
        0
      ],
      "authParameter": [
        "authorizationCode"
      ],
      "authType": "OAUTH",
      "baseUrl": "string",
      "capability": [
        {
          "container": [
            "bank"
          ],
          "name": "string"
        }
      ],
      "countryISOCode": "string",
      "dataset": [
        {
          "attribute": [
            {
              "container": [
                "bank"
              ],
              "containerAttributes": {
                "BANK": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "CREDITCARD": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "INSURANCE": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "INVESTMENT": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "LOAN": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                }
              },
              "fromDate": "string",
              "fromFinYear": "string",
              "name": "BASIC_ACCOUNT_INFO",
              "toDate": "string",
              "toFinYear": "string"
            }
          ],
          "name": "BASIC_AGG_DATA"
        }
      ],
      "favicon": "string",
      "help": "string",
      "id": 0,
      "isAddedByUser": "string",
      "isAutoRefreshEnabled": true,
      "isConsentRequired": true,
      "languageISOCode": "string",
      "lastModified": "string",
      "loginForm": [
        {
          "forgetPasswordURL": "string",
          "formType": "login",
          "help": "string",
          "id": 0,
          "loginHelp": "string",
          "mfaInfoText": "string",
          "mfaInfoTitle": "string",
          "mfaTimeout": 0,
          "row": [
            {
              "field": [
                {
                  "id": "string",
                  "image": "string",
                  "isOptional": true,
                  "isValueProvided": true,
                  "maxLength": 0,
                  "minLength": 0,
                  "name": "string",
                  "option": [
                    {
                      "displayText": "string",
                      "isSelected": true,
                      "optionValue": "string"
                    }
                  ],
                  "prefix": "string",
                  "suffix": "string",
                  "type": "text",
                  "value": "string",
                  "valueEditable": "string"
                }
              ],
              "fieldRowChoice": "string",
              "form": "string",
              "id": "string",
              "label": "string"
            }
          ]
        }
      ],
      "loginUrl": "string",
      "logo": "string",
      "name": "string",
      "primaryLanguageISOCode": "string",
      "status": "Supported"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-provider-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ProviderDetailResponse](#schemaproviderdetailresponse)|
|400|Bad Request|Y800 : Invalid value for providerId|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="yodlee-core-apis-statements">Statements</h1>

Statements API

## Get Statements

<a id="opIdgetStatements"></a>

> Code samples

```bash
curl https://example.com/statements \
  -H 'Accept: application/json'
```

`GET /statements`

The statements service is used to get the list of statement related information. <br>By default, all the latest statements of active and to be closed accounts are retrieved for the user. <br>Certain sites do not have both a statement date and a due date. When a fromDate is passed as an input, all the statements that have the due date on or after the passed date are retrieved. <br>For sites that do not have the due date, statements that have the statement date on or after the passed date are retrieved. <br>The default value of "isLatest" is true. To retrieve historical statements isLatest needs to be set to false.<br>

<h3 id="get-statements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|query|string|false|accountId|
|container|query|string|false|creditCard/loan/insurance|
|fromDate|query|string|false|from date for statement retrieval (YYYY-MM-DD)|
|isLatest|query|string|false|isLatest (true/false)|
|status|query|string|false|ACTIVE,TO_BE_CLOSED,CLOSED|

> Example responses

> 200 Response

```json
{
  "statement": [
    {
      "accountId": 0,
      "amountDue": {
        "amount": 0,
        "currency": "AUD"
      },
      "apr": 0,
      "billingPeriodEnd": "string",
      "billingPeriodStart": "string",
      "cashAdvance": {
        "amount": 0,
        "currency": "AUD"
      },
      "cashApr": 0,
      "dueDate": "string",
      "id": 0,
      "interestAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "isLatest": true,
      "lastPaymentAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "lastPaymentDate": "string",
      "lastUpdated": "string",
      "loanBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "minimumPayment": {
        "amount": 0,
        "currency": "AUD"
      },
      "newCharges": {
        "amount": 0,
        "currency": "AUD"
      },
      "principalAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "statementDate": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-statements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StatementResponse](#schemastatementresponse)|
|400|Bad Request|Y800 : Invalid value for accountId<br>Y800 : Invalid value for status<br>Y805 : Multiple containers not supported<br>Y800 : Invalid value for container<br>Y800 : Invalid value for isLatest<br>Y800 : Invalid value for fromDate<br>|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="yodlee-core-apis-transactions">Transactions</h1>

Transactions API

## Get Transactions

<a id="opIdgetTransactions"></a>

> Code samples

```bash
curl https://example.com/transactions \
  -H 'Accept: application/json'
```

`GET /transactions`

The Transaction service is used to get a list of transactions for a user.<br>By default, this service returns the last 30 days of transactions from today's date.<br>The keyword parameter performs a contains search on the original, consumer, and simple description attributes, replace the special characters #, &, and + with percent-encoding values %23, %26, and %2B respectively. Eg: for -Debit# , pass the input as -Debit%23.<br>Values for categoryId parameter can be fetched from get transaction category list service.<br> The categoryId is used to filter transactions based on system-defined category as well as user-defined category.<br>User-defined categoryIds should be provided in the filter with the prefix ''U''. E.g. U10002<br>The skip and top parameters are used for pagination. In the skip and top parameters pass the number of records to be skipped and retrieved, respectively. The response header provides the links to retrieve the next and previous set of transactions.<br>Double quotes in the merchant name will be prefixed by backslashes (&#92;) in the response, e.g. Toys "R" Us. <br>sourceId is a unique ID that the provider site has assigned to the transaction. The source ID is only available for the pre-populated accounts. Pre-populated accounts are the accounts that the FI customers shares with Yodlee, so that the user does not have to add or aggregate those accounts.<br><br><b>Note</b><li> <a href="https://developer.yodlee.com/docs/api/1.1/Transaction_Data_Enrichment">TDE</a> is made available for bank and card accounts and for the US market only.The address field in the response is available only when the TDE key is turned on.<li>The pagination feature is available by default. If no values are passed in the skip and top parameters, the API will only return the first 500 transactions.<li>This service supports the localization feature and accepts locale as a header parameter.<br>

<h3 id="get-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|query|string|false|Comma separated accountIds|
|baseType|query|string|false|DEBIT/CREDIT|
|categoryId|query|string|false|Comma separated categoryIds|
|categoryType|query|string|false|Transaction Category Type(UNCATEGORIZE, INCOME, TRANSFER, EXPENSE or DEFERRED_COMPENSATION)|
|container|query|string|false|bank/creditCard/investment/insurance/loan|
|detailCategoryId|query|string|false|Comma separated detailCategoryIds|
|fromDate|query|string|false|Transaction from date(YYYY-MM-DD)|
|highLevelCategoryId|query|string|false|Comma separated highLevelCategoryIds|
|keyword|query|string|false|Transaction search text|
|skip|query|integer(int32)|false|skip (Min 0)|
|toDate|query|string|false|Transaction end date (YYYY-MM-DD)|
|top|query|integer(int32)|false|top (Max 500)|
|type|query|string|false|Transaction Type(SELL,SWEEP, etc.) for bank/creditCard/investment|

> Example responses

> 200 Response

```json
{
  "transaction": [
    {
      "CONTAINER": "bank",
      "accountId": 0,
      "amount": {
        "amount": 0,
        "currency": "AUD"
      },
      "baseType": "CREDIT",
      "category": "string",
      "categoryId": 0,
      "categorySource": "SYSTEM",
      "categoryType": "TRANSFER",
      "checkNumber": "string",
      "commission": {
        "amount": 0,
        "currency": "AUD"
      },
      "createdDate": "string",
      "cusipNumber": "string",
      "date": "string",
      "description": {
        "consumer": "string",
        "original": "string",
        "security": "string",
        "simple": "string"
      },
      "detailCategoryId": 0,
      "highLevelCategoryId": 0,
      "holdingDescription": "string",
      "id": 0,
      "interest": {
        "amount": 0,
        "currency": "AUD"
      },
      "isManual": true,
      "isin": "string",
      "lastUpdated": "string",
      "memo": "string",
      "merchant": {
        "address": {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "city": "string",
          "country": "string",
          "sourceType": "string",
          "state": "string",
          "street": "string",
          "type": "HOME",
          "zip": "string"
        },
        "categoryLabel": [
          "string"
        ],
        "contact": {
          "email": "string",
          "phone": "string"
        },
        "coordinates": {
          "latitude": 0,
          "longitude": 0
        },
        "id": "string",
        "name": "string",
        "source": "YODLEE",
        "website": "string"
      },
      "parentCategoryId": 0,
      "postDate": "string",
      "price": {
        "amount": 0,
        "currency": "AUD"
      },
      "principal": {
        "amount": 0,
        "currency": "AUD"
      },
      "quantity": 0,
      "runningBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "sedol": "string",
      "settleDate": "string",
      "sourceId": "string",
      "sourceType": "AGGREGATED",
      "status": "POSTED",
      "subType": "AUTH_HOLD",
      "symbol": "string",
      "transactionDate": "string",
      "type": "string",
      "valoren": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TransactionResponse](#schematransactionresponse)|
|400|Bad Request|Y800 : Invalid value for baseType<br>Y800 : Invalid value for fromDate<br>Y800 : Invalid value for category<br>Y800 : Invalid value for toDate<br>Y800 : Invalid value for container<br>Y809 : Invalid date range<br>Y804 : Permitted values of top between 1 - 500<br>Y805 : Multiple containers not supported<br>Y800 : Invalid value for transaction type<br>Y824 : The maximum number of accountIds permitted is 100<br>Y824 : The maximum number of categoryIds permitted is 100<br>Y824 : The maximum number of highLevelCategoryIds permitted is 100<br>Y848 : detailCategoryId cannot be provided as input, as the detailedCategory feature is not enabled<br>Y823 : detailCategoryId is not for applicable containers other than bank and card<br>Y824 : The maximum number of detailCategoryIds permitted is 100<br>Y800 : Invalid value for detailCategoryId|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Transaction Category List

<a id="opIdgetTransactionCategories"></a>

> Code samples

```bash
curl https://example.com/transactions/categories \
  -H 'Accept: application/json'
```

`GET /transactions/categories`

The categories service returns the list of available transaction categories.<br>High level category is returned in the response only if it is opted by the customer.<br>When invoked by passing the cobrand session or admin access token, this service returns the supported transaction categories at the cobrand level. <br>When invoked by passing the cobrand session and the user session or user access token, this service returns the transaction categories <br>along with user-defined categories.<br>Double quotes in the user-defined category name will be prefixed by backslashes (&#92;) in the response, <br>e.g. Toys "R" Us.<br/>Source and id are the primary attributes of the category entity.<br><br><b>Note:</b><li>This service supports the localization feature and accepts locale as a header parameter.</li>

> Example responses

> 200 Response

```json
{
  "transactionCategory": [
    {
      "category": "string",
      "classification": "PERSONAL",
      "defaultCategoryName": "string",
      "defaultHighLevelCategoryName": "string",
      "detailCategory": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "highLevelCategoryId": 0,
      "highLevelCategoryName": "string",
      "id": 0,
      "source": "SYSTEM",
      "type": "TRANSFER"
    }
  ]
}
```

<h3 id="get-transaction-category-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TransactionCategoryResponse](#schematransactioncategoryresponse)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Category

<a id="opIdupdateTransactionCategory"></a>

> Code samples

```bash
curl https://example.com/transactions/categories \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "categoryName": "string",
    "highLevelCategoryName": "string",
    "id": 1,
    "source": "SYSTEM"
  }'
```

`PUT /transactions/categories`

The update transaction categories service is used to update the transaction category name<br>for a high level category, a system-defined category and a user-defined category.<br>The renamed category can be set back to the original name by passing an empty string for categoryName.<br>The categoryName can accept minimum of 1, maximum of 50 alphanumeric or special characters.<br>The HTTP response code is 204 (Success without content).<br>

> Body parameter

```json
{
  "categoryName": "string",
  "highLevelCategoryName": "string",
  "id": 1,
  "source": "SYSTEM"
}
```

<h3 id="update-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateCategoryRequest](#schemaupdatecategoryrequest)|true|updateCategoryRequest|
|» categoryName|body|string|false|none|
|» highLevelCategoryName|body|string|false|none|
|» id|body|integer(int64)|true|none|
|» source|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|SYSTEM|
|» source|USER|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="update-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Updated Successfully|None|
|400|Bad Request|Y800 : Invalid value for categoryParam<br>Y800 : Invalid value for source<br>Y801 : Invalid length for categoryName. Min 1 and max 50 is required<br>Y803 : id required<br>Y811 : categoryName value already exists|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create Category

<a id="opIdcreateTransactionCategory"></a>

> Code samples

```bash
curl https://example.com/transactions/categories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "categoryName": "string",
    "parentCategoryId": 1
  }'
```

`POST /transactions/categories`

The create transaction categories service is used to create user-defined categories for a system-defined category.<br>The parentCategoryId is the system-defined category id.This can be retrieved using get transaction categories service.<br>The categoryName can accept minimum of 1, maximum of 50 alphanumeric or special characters.<br>The HTTP response code is 201 (Created successfully).<br>

> Body parameter

```json
{
  "categoryName": "string",
  "parentCategoryId": 1
}
```

<h3 id="create-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TransactionCategoryRequest](#schematransactioncategoryrequest)|true|User Transaction Category in JSON format|
|» categoryName|body|string|false|none|
|» parentCategoryId|body|integer(int32)|true|none|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="create-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created Successfully|None|
|400|Bad Request|Y800 : Invalid value for categoryParam<br>Y800 : Invalid value for source<br>Y801 : Invalid length for categoryName. Min 1 and max 50 is required<br>Y803 : parentCategoryId required<br>Y811 : categoryName value already exists|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Transaction Categorization Rules

<a id="opIdgetTransactionCategorizationRulesDeprecated"></a>

> Code samples

```bash
curl https://example.com/transactions/categories/rules \
  -H 'Accept: application/json'
```

`GET /transactions/categories/rules`

<aside class="warning">
This operation is deprecated
</aside>

The get transaction categorization rule service is used to get all the categorization rules.<br>

> Example responses

> 200 Response

```json
[
  {
    "categoryLevelId": 0,
    "memId": 0,
    "ruleClauses": [
      {
        "field": "amount",
        "fieldValue": "string",
        "operation": "numberEquals",
        "ruleClauseId": 0,
        "userDefinedRuleId": 0
      }
    ],
    "rulePriority": 0,
    "transactionCategorisationId": 0,
    "userDefinedRuleId": 0
  }
]
```

<h3 id="get-transaction-categorization-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<h3 id="get-transaction-categorization-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TransactionCategorizationRule](#schematransactioncategorizationrule)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create or Run Transaction Categorization Rule

<a id="opIdcreateOrRunTransactionCategorizationRules"></a>

> Code samples

```bash
curl https://example.com/transactions/categories/rules \
  -X POST \
  -H 'Accept: application/json'
```

`POST /transactions/categories/rules`

The Create or Run Transaction Categorization Rule endpoint is used to: <br>Create transaction categorization rules for both system and user-defined categories.<br>Run all the transaction categorization rules to categorize transactions by calling the endpoint with action=run as the query parameter. <br><br>The input body parameters to create transaction categorization rules follow:<br>     categoryId - This field is mandatory and numeric<br>     priority - This field is optional and numeric. Priority decides the order in which the rule gets applied on transactions.<br>     ruleClause - This field is mandatory and should contain at least one rule<br>     field - The value can be description or amount<br><br>       If the field value is description then,<br>         1. operation - value can be stringEquals or stringContains<br>         2. value - value should be min of 3 and max of 50 characters<br><br>       If the field value is amount then, <br>         1. operation - value can be numberEquals, numberLessThan, numberLessThanEquals, numberGreaterThan or numberGreaterThanEquals<br>         2. value - min value 0 and a max value of 99999999999.99 is allowed<br>The HTTP response code is 201 (Created Successfully).

<h3 id="create-or-run-transaction-categorization-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|false|To run rules, pass action=run. Only value run is supported|
|ruleParam|query|string|false|rules(JSON format) to categorize the transactions|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="create-or-run-transaction-categorization-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created Successfully|None|
|204|No Content|No Content|None|
|400|Bad Request|Y806 : Invalid input<br>Y400 : Rule already exists. Rule should be unique in terms of combination of description and amount|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Transaction Categorization Rule

<a id="opIdupdateTransactionCategorizationRule"></a>

> Code samples

```bash
curl https://example.com/transactions/categories/rules/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "rule": {
      "categoryId": 0,
      "priority": 0,
      "ruleClause": [
        {
          "field": "amount",
          "operation": "numberEquals",
          "value": {}
        }
      ],
      "source": "SYSTEM"
    }
  }'
```

`PUT /transactions/categories/rules/{ruleId}`

The update transaction categorization rule service is used to update a categorization rule for both system-defined category as well as user-defined category.<br>ruleParam JSON input should be as explained in the create transaction categorization rule service.<br>The HTTP response code is 204 (Success without content).<br>

> Body parameter

```json
{
  "rule": {
    "categoryId": 0,
    "priority": 0,
    "ruleClause": [
      {
        "field": "amount",
        "operation": "numberEquals",
        "value": {}
      }
    ],
    "source": "SYSTEM"
  }
}
```

<h3 id="update-transaction-categorization-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ruleId|path|integer(int64)|true|ruleId|
|body|body|[TransactionCategorizationRuleRequest](#schematransactioncategorizationrulerequest)|true|transactionCategoriesRuleRequest|
|» rule|body|[TransactionCategorizationRuleInfo](#schematransactioncategorizationruleinfo)|true|none|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="update-transaction-categorization-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Updated Successfully|None|
|400|Bad Request|Y800 : Invalid value for ruleId<br>Y806 : Invalid input|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Run Transaction Categorization Rule

<a id="opIdrunTransactionCategorizationRule"></a>

> Code samples

```bash
curl 'https://example.com/transactions/categories/rules/0?action=run' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /transactions/categories/rules/{ruleId}`

The run transaction categorization rule service is used to run a rule on transactions, to categorize the transactions.<br>The HTTP response code is 204 (Success with no content).<br>

<h3 id="run-transaction-categorization-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|query|string|true|none|
|ruleId|path|integer(int64)|true|Unique id of the categorization rule|

#### Enumerated Values

|Parameter|Value|
|---|---|
|action|run|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="run-transaction-categorization-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Run Successfully|None|
|400|Bad Request|Y800 : Invalid value for ruleId<br>Y400 : Categorization already in progress|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Transaction Categorization Rule

<a id="opIddeleteTransactionCategorizationRule"></a>

> Code samples

```bash
curl https://example.com/transactions/categories/rules/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /transactions/categories/rules/{ruleId}`

The delete transaction categorization rule service is used to delete the given user-defined transaction categorization rule for both system-defined category as well as user-defined category.<br>This will delete all the corresponding rule clauses associated with the rule.<br>The HTTP response code is 204 (Success without content).<br>

<h3 id="delete-transaction-categorization-rule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ruleId|path|integer(int64)|true|ruleId|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="delete-transaction-categorization-rule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted Successfully|None|
|400|Bad Request|Y800 : Invalid value for ruleId|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Transaction Categorization Rules

<a id="opIdgetTransactionCategorizationRules"></a>

> Code samples

```bash
curl https://example.com/transactions/categories/txnRules \
  -H 'Accept: application/json'
```

`GET /transactions/categories/txnRules`

The get transaction categorization rule service is used to get all the categorization rules.<br>

> Example responses

> 200 Response

```json
{
  "txnRules": [
    {
      "categoryLevelId": 0,
      "memId": 0,
      "ruleClauses": [
        {
          "field": "amount",
          "fieldValue": "string",
          "operation": "numberEquals",
          "ruleClauseId": 0,
          "userDefinedRuleId": 0
        }
      ],
      "rulePriority": 0,
      "transactionCategorisationId": 0,
      "userDefinedRuleId": 0
    }
  ]
}
```

<h3 id="get-transaction-categorization-rules-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TransactionCategorizationRuleResponse](#schematransactioncategorizationruleresponse)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Category

<a id="opIddeleteTransactionCategory"></a>

> Code samples

```bash
curl https://example.com/transactions/categories/0 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /transactions/categories/{categoryId}`

The delete transaction categories service is used to delete the given user-defined category.<br>The HTTP response code is 204 (Success without content).<br>

<h3 id="delete-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|categoryId|path|integer(int64)|true|categoryId|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="delete-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted Successfully|None|
|400|Bad Request|Y800 : Invalid value for categoryId|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Transactions Count

<a id="opIdgetTransactionsCount"></a>

> Code samples

```bash
curl https://example.com/transactions/count \
  -H 'Accept: application/json'
```

`GET /transactions/count`

The count service provides the total number of transactions for a specific user depending on the input parameters passed.<br>If you are implementing pagination for transactions, call this endpoint before calling GET /transactions to know the number of transactions that are returned for the input parameters passed.<br>The functionality of the input parameters remains the same as that of the GET /transactions endpoint.<br>

<h3 id="get-transactions-count-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|query|string|false|Comma separated accountIds	|
|baseType|query|string|false|DEBIT/CREDIT|
|categoryId|query|string|false|Comma separated categoryIds|
|categoryType|query|string|false|Transaction Category Type(UNCATEGORIZE, INCOME, TRANSFER, EXPENSE or DEFERRED_COMPENSATION)|
|container|query|string|false|bank/creditCard/investment/insurance/loan|
|detailCategoryId|query|string|false|Comma separated detailCategoryIds|
|fromDate|query|string|false|Transaction from date(YYYY-MM-DD)|
|highLevelCategoryId|query|string|false|Comma separated highLevelCategoryIds|
|keyword|query|string|false|Transaction search text	|
|toDate|query|string|false|Transaction end date (YYYY-MM-DD)|
|type|query|string|false|Transaction Type(SELL,SWEEP, etc.)|

> Example responses

> 200 Response

```json
{
  "transaction": {
    "TOTAL": {
      "count": 0
    }
  }
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-transactions-count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TransactionCountResponse](#schematransactioncountresponse)|
|400|Bad Request|Y800 : Invalid value for detailCategoryId<br>Y848 : detailCategoryId cannot be provided as input, as the detailedCategory feature is not enabled<br>Y823 : detailCategoryId is not applicable for containers other than bank and card<br>Y824 : The maximum number of detailCategoryIds permitted is 100<br>|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update Transaction

<a id="opIdupdateTransaction"></a>

> Code samples

```bash
curl https://example.com/transactions/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "transaction": {
      "categoryId": 0,
      "categorySource": "SYSTEM",
      "container": "bank",
      "description": {
        "consumer": "string"
      },
      "memo": "string"
    }
  }'
```

`PUT /transactions/{transactionId}`

The update transaction service is used to update the category,consumer description, memo for a transaction.<br>The HTTP response code is 204 (Success without content).<br>

> Body parameter

```json
{
  "transaction": {
    "categoryId": 0,
    "categorySource": "SYSTEM",
    "container": "bank",
    "description": {
      "consumer": "string"
    },
    "memo": "string"
  }
}
```

<h3 id="update-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionId|path|integer(int64)|true|transactionId|
|body|body|[TransactionRequest](#schematransactionrequest)|true|transactionRequest|
|» transaction|body|[UpdateTransaction](#schemaupdatetransaction)|true|none|

> Example responses

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="update-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Updated Successfully|None|
|400|Bad Request|Y812 : Required field -container missing in the transactionParam parameter input<br>Y800 : Invalid value for transactionId<br>Y800 : Invalid value for categoryId<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="yodlee-core-apis-user">User</h1>

Users API

## Get User Details

<a id="opIdgetUser"></a>

> Code samples

```bash
curl https://example.com/user \
  -H 'Accept: application/json'
```

`GET /user`

The get user details service is used to get the user profile information and the application preferences set at the time of user registration.<br>

> Example responses

> 200 Response

```json
{
  "user": {
    "address": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "state": "string",
      "zip": "string"
    },
    "email": "string",
    "id": 0,
    "loginName": "string",
    "name": {
      "first": "string",
      "fullName": "string",
      "last": "string",
      "middle": "string"
    },
    "preferences": {
      "currency": "AUD",
      "dateFormat": "string",
      "locale": "en_US",
      "timeZone": "string"
    },
    "roleType": "INDIVIDUAL",
    "segmentName": "string"
  }
}
```

<h3 id="get-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserDetailResponse](#schemauserdetailresponse)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update User Details

<a id="opIdupdateUser"></a>

> Code samples

```bash
curl https://example.com/user \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "user": {
      "address": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "city": "string",
        "country": "string",
        "state": "string",
        "zip": "string"
      },
      "email": "string",
      "name": {
        "first": "string",
        "fullName": "string",
        "last": "string",
        "middle": "string"
      },
      "preferences": {
        "currency": "AUD",
        "dateFormat": "string",
        "locale": "en_US",
        "timeZone": "string"
      },
      "segmentName": "string"
    }
  }'
```

`PUT /user`

The update user details service is used to update user details like name, address, currency preference, etc.<br>Currency provided in the input will be respected in the <a href="https://developer.yodlee.com/api-reference#tag/Derived">derived</a> services and the amount fields in the response will be provided in the preferred currency.<br>The HTTP response code is 204 (Success without content). <br>

> Body parameter

```json
{
  "user": {
    "address": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "state": "string",
      "zip": "string"
    },
    "email": "string",
    "name": {
      "first": "string",
      "fullName": "string",
      "last": "string",
      "middle": "string"
    },
    "preferences": {
      "currency": "AUD",
      "dateFormat": "string",
      "locale": "en_US",
      "timeZone": "string"
    },
    "segmentName": "string"
  }
}
```

<h3 id="update-user-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateUserRequest](#schemaupdateuserrequest)|true|userRequest|
|» user|body|[UpdateUserRegistration](#schemaupdateuserregistration)|true|none|

<h3 id="update-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Access Tokens

<a id="opIdgetAccessTokens"></a>

> Code samples

```bash
curl 'https://example.com/user/accessTokens?appIds=string' \
  -H 'Accept: application/json'
```

`GET /user/accessTokens`

The Get Access Tokens service is used to retrieve the access tokens for the application id(s) provided.<br>URL in the response can be used to launch the application for which token is requested.<br><br><b>Note:</b> <li>This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>

<h3 id="get-access-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appIds|query|string|true|appIds|

> Example responses

> 200 Response

```json
{
  "user": {
    "accessTokens": [
      {
        "appId": "string",
        "url": "string",
        "value": "string"
      }
    ]
  }
}
```

<h3 id="get-access-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserAccessTokensResponse](#schemauseraccesstokensresponse)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## User Logout

<a id="opIduserLogout"></a>

> Code samples

```bash
curl https://example.com/user/logout \
  -X POST
```

`POST /user/logout`

<b>Deprecated</b>: This endpoint is deprecated for API Key-based authentication. The user logout service allows the user to log out of the application.<br>The service does not return a response body. The HTTP response code is 204 (Success with no content).<br>

<h3 id="user-logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Logout successful|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Register User

<a id="opIdregisterUser"></a>

> Code samples

```bash
curl https://example.com/user/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "user": {
      "address": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "city": "string",
        "country": "string",
        "state": "string",
        "zip": "string"
      },
      "email": "string",
      "loginName": "string",
      "name": {
        "first": "string",
        "fullName": "string",
        "last": "string",
        "middle": "string"
      },
      "preferences": {
        "currency": "AUD",
        "dateFormat": "string",
        "locale": "en_US",
        "timeZone": "string"
      },
      "segmentName": "string"
    }
  }'
```

`POST /user/register`

The register user service is used to register a user in Yodlee.<br>The loginName cannot include spaces and must be between 3 and 150 characters.<br>locale passed must be one of the supported locales for the customer. <br>Currency provided in the input will be respected in the derived services and the amount fields in the response will be provided in the preferred currency.<br>userParam is accepted as a body parameter. <br><br><b>Note:</b> <li>The content type has to be passed as application/json for the body parameter.</li>

> Body parameter

```json
{
  "user": {
    "address": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "state": "string",
      "zip": "string"
    },
    "email": "string",
    "loginName": "string",
    "name": {
      "first": "string",
      "fullName": "string",
      "last": "string",
      "middle": "string"
    },
    "preferences": {
      "currency": "AUD",
      "dateFormat": "string",
      "locale": "en_US",
      "timeZone": "string"
    },
    "segmentName": "string"
  }
}
```

<h3 id="register-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserRequest](#schemauserrequest)|true|userRequest|
|» user|body|[UserRegistration](#schemauserregistration)|true|none|

> Example responses

> 200 Response

```json
{
  "user": {
    "id": 0,
    "loginName": "string",
    "name": {
      "first": "string",
      "fullName": "string",
      "last": "string",
      "middle": "string"
    },
    "preferences": {
      "currency": "AUD",
      "dateFormat": "string",
      "locale": "en_US",
      "timeZone": "string"
    },
    "roleType": "INDIVIDUAL",
    "session": {
      "userSession": "string"
    }
  }
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="register-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Login Successful|[UserResponse](#schemauserresponse)|
|400|Bad Request|Y800 : Invalid value for loginName<br>Y800 : Invalid value for email<br>Y801 : Invalid length for loginName<br>|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Saml Login

<a id="opIdsamlLogin"></a>

> Code samples

```bash
curl 'https://example.com/user/samlLogin?issuer=string&samlResponse=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /user/samlLogin`

The SAML login service is used to authenticate system users with a SAML response.<br>A new user will be created with the input provided if that user isn't already in the system.<br>For existing users, the system will make updates based on changes or new information.<br>When authentication is successful, a user session token is returned.<br><br><b>Note:</b> <li>The content type has to be passed as application/x-www-form-urlencoded. <li>issuer, source and samlResponse should be passed as body parameters.</li>

<h3 id="saml-login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|issuer|query|string|true|issuer|
|samlResponse|query|string|true|samlResponse|
|source|query|string|false|source|

> Example responses

> 200 Response

```json
{
  "user": {
    "id": 0,
    "loginName": "string",
    "name": {
      "first": "string",
      "fullName": "string",
      "last": "string",
      "middle": "string"
    },
    "preferences": {
      "currency": "AUD",
      "dateFormat": "string",
      "locale": "en_US",
      "timeZone": "string"
    },
    "roleType": "INDIVIDUAL",
    "session": {
      "userSession": "string"
    }
  }
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="saml-login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserResponse](#schemauserresponse)|
|400|Bad Request|Y013 : Invalid value for samlResponse<br>Y013 : Invalid value for issuer|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete User

<a id="opIdunregister"></a>

> Code samples

```bash
curl https://example.com/user/unregister \
  -X DELETE
```

`DELETE /user/unregister`

The delete user service is used to delete or unregister a user from Yodlee. <br>Once deleted, the information related to the users cannot be retrieved. <br>The HTTP response code is 204 (Success without content)<br>

<h3 id="delete-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="yodlee-core-apis-verification">Verification</h1>

Verification API

## Get Verification Status

<a id="opIdgetVerificationStatus"></a>

> Code samples

```bash
curl https://example.com/verification \
  -H 'Accept: application/json'
```

`GET /verification`

The get verification status service is used to retrieve the verification status of all accounts for which the MS or CDV process has been initiated.<br>For the MS process, the account details object returns the aggregated information of the verified accounts. For the CDV process, the account details object returns the user provided account information.<br>

<h3 id="get-verification-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|query|string|false|Comma separated accountId|
|providerAccountId|query|string|false|Comma separated providerAccountId|
|verificationType|query|string|false|verificationType|

> Example responses

> 200 Response

```json
{
  "verification": [
    {
      "account": {
        "accountName": "string",
        "accountNumber": "string",
        "accountType": "SAVINGS",
        "bankTransferCode": {
          "id": "string",
          "type": "BSB"
        }
      },
      "accountId": 0,
      "providerAccountId": 0,
      "reason": "DATA_NOT_AVAILABLE",
      "remainingAttempts": 0,
      "verificationDate": "string",
      "verificationId": 0,
      "verificationStatus": "INITIATED",
      "verificationType": "MATCHING"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="get-verification-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VerificationStatusResponse](#schemaverificationstatusresponse)|
|400|Bad Request|Y901 : Service not supported<br>Y813 : Either of accountId or providerAccountId should be provided<br>Y800 : Invalid value for accountId<br>Y800 : Invalid value for verification.verificationType<br>Y800 : Invalid value for providerAccountId<br>Y835 : Account(s) not eligible for Matching verification<br>Y836 : No verification initiated|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Verify Challenge Deposit

<a id="opIdverifyChallengeDeposit"></a>

> Code samples

```bash
curl https://example.com/verification \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "verification": {
      "account": {
        "accountName": "string",
        "accountNumber": "string",
        "accountType": "SAVINGS",
        "bankTransferCode": {
          "id": "string",
          "type": "BSB"
        }
      },
      "accountId": 0,
      "providerAccountId": 0,
      "transaction": [
        {
          "amount": {
            "amount": 0,
            "currency": "AUD"
          },
          "baseType": "CREDIT"
        }
      ],
      "verificationType": "MATCHING"
    }
  }'
```

`PUT /verification`

The put verification service is used to complete the challenge deposit verification (CDV) process.<br>This service is used only by the customer of CDV flow.<br>In the CDV process, the user-provided microtransaction details (i.e., credit and debit) is matched against the microtransactions posted by Yodlee. For a successful verification of the account's ownership both the microtransaction details should match.<br>The CDV process is currently supported only in the United States.<br><br><b>Notes:</b><ul><li>This endpoint cannot be used to test the CDV functionality in the developer sandbox or test environment. You will need a money transmitter license to implement the CDV functionality and also require the Yodlee Professional Services team's assistance to set up a dedicated environment.</li></ul>

> Body parameter

```json
{
  "verification": {
    "account": {
      "accountName": "string",
      "accountNumber": "string",
      "accountType": "SAVINGS",
      "bankTransferCode": {
        "id": "string",
        "type": "BSB"
      }
    },
    "accountId": 0,
    "providerAccountId": 0,
    "transaction": [
      {
        "amount": {
          "amount": 0,
          "currency": "AUD"
        },
        "baseType": "CREDIT"
      }
    ],
    "verificationType": "MATCHING"
  }
}
```

<h3 id="verify-challenge-deposit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateVerificationRequest](#schemaupdateverificationrequest)|true|verification information|
|» verification|body|[UpdateVerification](#schemaupdateverification)|false|none|

> Example responses

> 200 Response

```json
{
  "verification": [
    {
      "account": {
        "accountName": "string",
        "accountNumber": "string",
        "accountType": "SAVINGS",
        "bankTransferCode": {
          "id": "string",
          "type": "BSB"
        }
      },
      "accountId": 0,
      "providerAccountId": 0,
      "reason": "DATA_NOT_AVAILABLE",
      "verificationDate": "string",
      "verificationId": 0,
      "verificationStatus": "INITIATED",
      "verificationType": "MATCHING"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="verify-challenge-deposit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VerificationResponse](#schemaverificationresponse)|
|400|Bad Request|Y901 : Service not supported<br>Y812 : Required field/value - verification.verificationType missing in the verificationParam<br>Y812 : Required field/value - amount.amount missing in the verificationParam<br>Y812 : Required field/value - baseType missing in the verificationParam<br>Y812 : Required field/value - currency missing in the verificationParam<br>Y812 : Required field/value - providerAccountId missing in the verificationParam<br>Y812 : Required field/value - accountId missing in the verificationParam<br>Y800 : Invalid value for verificationParam<br>Y800 : Invalid value for verification.verificationType<br>Y800 : Invalid value for baseType<br>Y800 : Invalid value for providerAccountId<br>Y800 : Invalid value for accountId<br>Y813 : Transaction should be provided<br>Y801 : Invalid length for accountNumber<br>Y801 : Invalid length for amount<br>Y835 : Account(s) not eligible for Challenge Deposit verification<br>Y806 : Invalid Input<br>Y840 : Verification has been initiated already<br>Y837 : Account has been verified already<br>Y838 : The currency code provided does not match with the currency of the transaction executed on the target account<br>Y846 : The number of financial transactions made on the target account does not match with the number of transactions entered by the user.<br>Y842 : Number of retries exceeded the maximum Challenge Deposit verification limit<br>Y844 : Financial Instructions were not executed successfully on the target account<br>Y845 : Verification time expired. Please try initiating challenge deposit again<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Initiaite Matching Service and Challenge Deposit

<a id="opIdinitiateMatchingOrChallengeDepositeVerification"></a>

> Code samples

```bash
curl https://example.com/verification \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "verification": {
      "account": {
        "accountName": "string",
        "accountNumber": "string",
        "accountType": "SAVINGS",
        "bankTransferCode": {
          "id": "string",
          "type": "BSB"
        }
      },
      "accountId": 0,
      "providerAccountId": 0,
      "verificationType": "MATCHING"
    }
  }'
```

`POST /verification`

The post verification service is used to initiate the matching service (MS) and the challenge deposit account verification (CDV) process to verify account ownership.<br>The MS and CDV process can verify ownership of only bank accounts (i.e., checking and savings).<br>The MS verification can be initiated only for an already aggregated account or a providerAccount.<br>The prerequisite for the MS verification process is to request the ACCT_PROFILE dataset with the HOLDER_NAME attribute.<br>In the MS verification process, a string-match of the account holder name with the registered user name is performed instantaneously. You can contact the Yodlee CustomerCare to configure the full name or only the last name match.<br>Once the CDV process is initiated Yodlee will post the microtransaction (i.e., credit and debit) in the user's account. The CDV process takes 2 to 3 days to complete as it requires the user to provide the microtransaction details.<br>The CDV process is currently supported only in the United States.<br>The verificationId in the response can be used to track the verification request.<br><br><b>Notes:</b><li>This endpoint cannot be used to test the CDV functionality in the developer sandbox or test environment. You will need a money transmitter license to implement the CDV functionality and also require the Yodlee Professional Services team's assistance to set up a dedicated environment.

> Body parameter

```json
{
  "verification": {
    "account": {
      "accountName": "string",
      "accountNumber": "string",
      "accountType": "SAVINGS",
      "bankTransferCode": {
        "id": "string",
        "type": "BSB"
      }
    },
    "accountId": 0,
    "providerAccountId": 0,
    "verificationType": "MATCHING"
  }
}
```

<h3 id="initiaite-matching-service-and-challenge-deposit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VerificationRequest](#schemaverificationrequest)|true|verification information|
|» verification|body|[Verification](#schemaverification)|true|none|

> Example responses

> 200 Response

```json
{
  "verification": [
    {
      "account": {
        "accountName": "string",
        "accountNumber": "string",
        "accountType": "SAVINGS",
        "bankTransferCode": {
          "id": "string",
          "type": "BSB"
        }
      },
      "accountId": 0,
      "providerAccountId": 0,
      "reason": "DATA_NOT_AVAILABLE",
      "verificationDate": "string",
      "verificationId": 0,
      "verificationStatus": "INITIATED",
      "verificationType": "MATCHING"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="initiaite-matching-service-and-challenge-deposit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VerificationResponse](#schemaverificationresponse)|
|400|Bad Request|Y901 : Service not supported<br>Y812 : Required field/value - verification.verificationType missing in the verificationParam<br>Y812 : Required field/value - accountNumber missing in the verificationParam<br>Y812 : Required field/value - accountType missing in the verificationParam<br>Y812 : Required field/value - bankTransferCode missing in the verificationParam<br>Y812 : Required field/value - bankTransferCode.id missing in the verificationParam<br>Y812 : Required field/value - bankTransferCode.type missing in the verificationParam<br>Y800 : Invalid value for verification.verificationType<br>Y800 : Invalid value for verificationParam<br>Y800 : Invalid value for bankTransferCode.type<br>Y800 : Invalid value for bankTransferCode.id<br>Y800 : Invalid value for accountType<br>Y800 : Invalid value for accountId<br>Y813 : Account details should be provided<br>Y801 : Invalid length for accountNumber<br>Y835 : Account(s) not eligible for Challenge Deposit verification<br>Y806 : Invalid Input<br>Y840 : Verification has been initiated already<br>Y837 : Account has been verified already|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="yodlee-core-apis-verify-account">Verify Account</h1>

Verify Account API

## Verify Accounts Using Transactions

<a id="opIdinitiateAccountVerification"></a>

> Code samples

```bash
curl https://example.com/verifyAccount/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accountId": 0,
    "container": "bank",
    "transactionCriteria": [
      {
        "amount": 0,
        "baseType": "CREDIT",
        "date": "string",
        "dateVariance": "string",
        "keyword": "string"
      }
    ]
  }'
```

`POST /verifyAccount/{providerAccountId}`

The verify account service is used to verify the account's ownership by  matching the transaction details with the accounts aggregated for the user.<br><ul><li>If a match is identified, the service returns details of all the accounts along with the matched transaction's details.<li>If no transaction match is found, an empty response will be returned.<li>A maximum of 5 transactionCriteria can be passed in a request.<li>The baseType, date, and amount parameters should mandatorily be passed.<li>The optional dateVariance parameter cannot be more than 7 days. For example, +7, -4, or +/-2.<li>Pass the container or accountId parameters for better performance.<li>This service supports the localization feature and accepts locale as a header parameter.</li></ul>

> Body parameter

```json
{
  "accountId": 0,
  "container": "bank",
  "transactionCriteria": [
    {
      "amount": 0,
      "baseType": "CREDIT",
      "date": "string",
      "dateVariance": "string",
      "keyword": "string"
    }
  ]
}
```

<h3 id="verify-accounts-using-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerAccountId|path|string|true|providerAccountId|
|body|body|[VerifyAccountRequest](#schemaverifyaccountrequest)|true|verificationParam|
|» accountId|body|integer(int64)|false|none|
|» container|body|string|false|none|
|» transactionCriteria|body|[[VerifyTransactionCriteria](#schemaverifytransactioncriteria)]|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» container|bank|
|» container|creditCard|
|» container|investment|
|» container|insurance|
|» container|loan|
|» container|reward|
|» container|realEstate|
|» container|otherAssets|
|» container|otherLiabilities|

> Example responses

> 200 Response

```json
{
  "verifyAccount": {
    "account": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "bankTransferCode": [
          {
            "id": "string",
            "type": "BSB"
          }
        ],
        "fullAccountNumber": "string",
        "holder": [
          {
            "gender": "string",
            "identifier": [
              {
                "type": "NIE",
                "value": "string"
              }
            ],
            "name": {
              "first": "string",
              "fullName": "string",
              "last": "string",
              "middle": "string"
            },
            "ownership": "PRIMARY"
          }
        ],
        "id": 0,
        "providerAccountId": 0,
        "providerName": "string"
      }
    ],
    "transactionCriteria": [
      {
        "amount": 0,
        "baseType": "CREDIT",
        "date": "string",
        "dateVariance": "string",
        "keyword": "string",
        "matched": "COMPLETE",
        "verifiedTransaction": [
          {
            "CONTAINER": "bank",
            "accountId": 0,
            "amount": {
              "amount": 0,
              "currency": "AUD"
            },
            "baseType": "CREDIT",
            "category": "string",
            "categoryId": 0,
            "categorySource": "SYSTEM",
            "categoryType": "TRANSFER",
            "checkNumber": "string",
            "commission": {
              "amount": 0,
              "currency": "AUD"
            },
            "createdDate": "string",
            "cusipNumber": "string",
            "date": "string",
            "description": {
              "consumer": "string",
              "original": "string",
              "security": "string",
              "simple": "string"
            },
            "detailCategoryId": 0,
            "highLevelCategoryId": 0,
            "holdingDescription": "string",
            "id": 0,
            "interest": {
              "amount": 0,
              "currency": "AUD"
            },
            "isManual": true,
            "isin": "string",
            "lastUpdated": "string",
            "memo": "string",
            "merchant": {
              "address": {
                "address1": "string",
                "address2": "string",
                "address3": "string",
                "city": "string",
                "country": "string",
                "sourceType": "string",
                "state": "string",
                "street": "string",
                "type": "HOME",
                "zip": "string"
              },
              "categoryLabel": [
                "string"
              ],
              "contact": {
                "email": "string",
                "phone": "string"
              },
              "coordinates": {
                "latitude": 0,
                "longitude": 0
              },
              "id": "string",
              "name": "string",
              "source": "YODLEE",
              "website": "string"
            },
            "parentCategoryId": 0,
            "postDate": "string",
            "price": {
              "amount": 0,
              "currency": "AUD"
            },
            "principal": {
              "amount": 0,
              "currency": "AUD"
            },
            "quantity": 0,
            "runningBalance": {
              "amount": 0,
              "currency": "AUD"
            },
            "sedol": "string",
            "settleDate": "string",
            "sourceId": "string",
            "sourceType": "AGGREGATED",
            "status": "POSTED",
            "subType": "AUTH_HOLD",
            "symbol": "string",
            "transactionDate": "string",
            "type": "string",
            "valoren": "string"
          }
        ]
      }
    ]
  }
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

<h3 id="verify-accounts-using-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VerifyAccountResponse](#schemaverifyaccountresponse)|
|400|Bad Request|Y800 : Invalid value for container<br>Y800 : Invalid value for accountId<br>Y800 : Invalid value for amount<br>Y800 : Invalid value for dateVariance<br>Y801 : Invalid length for keyword<br>Y804 : Permitted values of dateVariance between 1 - 7<br>Y806 : Invalid input<br>Y807 : Resource not found<br>Y809 : Invalid date range<br>Y812 : Required field/value - transactionCriteria missing in the input<br>Y812 : Required field/value - amount missing in the transactionCriteria<br>Y812 : Required field/value - amount date in the transactionCriteria<br>Y812 : Required field/value - baseType missing in the transactionCriteria<br>Y823 : Transaction not applicable for container <br>Y824 : The maximum number of transactionCriteria permitted is 5<br>Y857 : Transactions are not refreshed in the past 24 hours<br>Y858 : Only active accounts can be verified<br>Y901 : Service not supported<br>|[YodleeError](#schemayodleeerror)|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AccessTokens">AccessTokens</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstokens"></a>
<a id="schema_AccessTokens"></a>
<a id="tocSaccesstokens"></a>
<a id="tocsaccesstokens"></a>

```json
{
  "appId": "string",
  "url": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|false|none|The identifier of the application for which the access token is generated.<br><br><b>Endpoints</b>:<ul><li>GET user/accessTokens</li></ul>|
|url|string|false|none|Base URL using which the application is accessed.<br><br><b>Endpoints</b>:<ul><li>GET user/accessTokens</li></ul>|
|value|string|false|none|Access token value used to invoke the widgets/apps.<br><br><b>Endpoints</b>:<ul><li>GET user/accessTokens</li></ul>|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "401kLoan": {
    "amount": 0,
    "currency": "AUD"
  },
  "CONTAINER": "bank",
  "accountName": "string",
  "accountNumber": "string",
  "accountStatus": "ACTIVE",
  "accountType": "string",
  "address": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "city": "string",
    "country": "string",
    "sourceType": "string",
    "state": "string",
    "street": "string",
    "type": "HOME",
    "zip": "string"
  },
  "aggregationSource": "SYSTEM",
  "amountDue": {
    "amount": 0,
    "currency": "AUD"
  },
  "annualPercentageYield": 0,
  "annuityBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "apr": 0,
  "associatedProviderAccountId": [
    0
  ],
  "autoRefresh": {
    "additionalStatus": "SCHEDULED",
    "asOfDate": "string",
    "status": "ENABLED"
  },
  "availableBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "availableCash": {
    "amount": 0,
    "currency": "AUD"
  },
  "availableCredit": {
    "amount": 0,
    "currency": "AUD"
  },
  "balance": {
    "amount": 0,
    "currency": "AUD"
  },
  "bankTransferCode": [
    {
      "id": "string",
      "type": "BSB"
    }
  ],
  "cash": {
    "amount": 0,
    "currency": "AUD"
  },
  "cashApr": 0,
  "cashValue": {
    "amount": 0,
    "currency": "AUD"
  },
  "classification": "OTHER",
  "collateral": "string",
  "coverage": [
    {
      "amount": [
        {
          "cover": {
            "amount": 0,
            "currency": "AUD"
          },
          "limitType": "IN_NETWORK",
          "met": {
            "amount": 0,
            "currency": "AUD"
          },
          "type": "DEDUCTIBLE",
          "unitType": "PER_FAMILY"
        }
      ],
      "endDate": "string",
      "planType": "PPO",
      "startDate": "string",
      "type": "VISION"
    }
  ],
  "createdDate": "string",
  "currentBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "currentLevel": "string",
  "dataset": [
    {
      "additionalStatus": "LOGIN_IN_PROGRESS",
      "lastUpdateAttempt": "string",
      "lastUpdated": "string",
      "name": "BASIC_AGG_DATA",
      "nextUpdateScheduled": "string",
      "updateEligibility": "ALLOW_UPDATE"
    }
  ],
  "deathBenefit": {
    "amount": 0,
    "currency": "AUD"
  },
  "derivedApr": 0,
  "displayedName": "string",
  "dueDate": "string",
  "enrollmentDate": "string",
  "escrowBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "estimatedDate": "string",
  "expirationDate": "string",
  "faceAmount": {
    "amount": 0,
    "currency": "AUD"
  },
  "frequency": "DAILY",
  "fullAccountNumber": "string",
  "fullAccountNumberList": {
    "paymentAccountNumber": "string",
    "unmaskedAccountNumber": "string"
  },
  "guarantor": "string",
  "holder": [
    {
      "gender": "string",
      "identifier": [
        {
          "type": "NIE",
          "value": "string"
        }
      ],
      "name": {
        "first": "string",
        "fullName": "string",
        "last": "string",
        "middle": "string"
      },
      "ownership": "PRIMARY"
    }
  ],
  "homeInsuranceType": "HOME_OWNER",
  "homeValue": {
    "amount": 0,
    "currency": "AUD"
  },
  "id": 0,
  "includeInNetWorth": true,
  "interestPaidLastYear": {
    "amount": 0,
    "currency": "AUD"
  },
  "interestPaidYTD": {
    "amount": 0,
    "currency": "AUD"
  },
  "interestRate": 0,
  "interestRateType": "FIXED",
  "isAsset": true,
  "isManual": true,
  "lastEmployeeContributionAmount": {
    "amount": 0,
    "currency": "AUD"
  },
  "lastEmployeeContributionDate": "string",
  "lastPayment": {
    "amount": 0,
    "currency": "AUD"
  },
  "lastPaymentAmount": {
    "amount": 0,
    "currency": "AUD"
  },
  "lastPaymentDate": "string",
  "lastUpdated": "string",
  "lender": "string",
  "lifeInsuranceType": "OTHER",
  "loanPayByDate": "string",
  "loanPayoffAmount": {
    "amount": 0,
    "currency": "AUD"
  },
  "loanPayoffDetails": {
    "outstandingBalance": {
      "amount": 0,
      "currency": "AUD"
    },
    "payByDate": "string",
    "payoffAmount": {
      "amount": 0,
      "currency": "AUD"
    }
  },
  "marginBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "maturityAmount": {
    "amount": 0,
    "currency": "AUD"
  },
  "maturityDate": "string",
  "memo": "string",
  "minimumAmountDue": {
    "amount": 0,
    "currency": "AUD"
  },
  "moneyMarketBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "nextLevel": "string",
  "nickname": "string",
  "oauthMigrationStatus": "IN_PROGRESS",
  "originalLoanAmount": {
    "amount": 0,
    "currency": "AUD"
  },
  "originationDate": "string",
  "overDraftLimit": {
    "amount": 0,
    "currency": "AUD"
  },
  "paymentProfile": {
    "address": [
      {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "city": "string",
        "country": "string",
        "sourceType": "string",
        "state": "string",
        "street": "string",
        "type": "HOME",
        "zip": "string"
      }
    ],
    "identifier": {
      "type": "REFERENCE_NUMBER",
      "value": "string"
    },
    "paymentBankTransferCode": {
      "id": "string",
      "type": "ROUTING_NUMBER"
    }
  },
  "policyEffectiveDate": "string",
  "policyFromDate": "string",
  "policyStatus": "ACTIVE",
  "policyTerm": "string",
  "policyToDate": "string",
  "premium": {
    "amount": 0,
    "currency": "AUD"
  },
  "premiumPaymentTerm": "string",
  "primaryRewardUnit": "string",
  "principalBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "profile": {
    "address": [
      {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "city": "string",
        "country": "string",
        "sourceType": "string",
        "state": "string",
        "street": "string",
        "type": "HOME",
        "zip": "string"
      }
    ],
    "email": [
      {
        "type": "PRIMARY",
        "value": "string"
      }
    ],
    "identifier": [
      {
        "type": "NIE",
        "value": "string"
      }
    ],
    "phoneNumber": [
      {
        "type": "HOME",
        "value": "string"
      }
    ]
  },
  "providerAccountId": 0,
  "providerId": "string",
  "providerName": "string",
  "recurringPayment": {
    "amount": 0,
    "currency": "AUD"
  },
  "remainingBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "repaymentPlanType": "STANDARD",
  "rewardBalance": [
    {
      "balance": 0,
      "balanceToLevel": "string",
      "balanceToReward": "string",
      "balanceType": "EXPIRING_BALANCE",
      "description": "string",
      "expiryDate": "string",
      "units": "string"
    }
  ],
  "runningBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "shortBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "sourceAccountStatus": "IN_REPAYMENT",
  "sourceId": "string",
  "term": "string",
  "totalCashLimit": {
    "amount": 0,
    "currency": "AUD"
  },
  "totalCreditLimit": {
    "amount": 0,
    "currency": "AUD"
  },
  "totalCreditLine": {
    "amount": 0,
    "currency": "AUD"
  },
  "totalUnvestedBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "totalVestedBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "userClassification": "BUSINESS",
  "valuationType": "SYSTEM"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|401kLoan|[Money](#schemamoney)|false|none|none|
|CONTAINER|string|false|read-only|The type of service. E.g., Bank, Credit Card, Investment, Insurance, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|accountName|string|false|read-only|The account name as it appears at the site.<br>(The POST accounts service response return this field as name)<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|accountNumber|string|false|read-only|The account number as it appears on the site. (The POST accounts service response return this field as number)<br><b>Additional Details</b>:<b> Bank/ Loan/ Insurance/ Investment</b>:<br> The account number for the bank account as it appears at the site.<br><b>Credit Card</b>: The account number of the card account as it appears at the site,<br>i.e., the card number.The account number can be full or partial based on how it is displayed in the account summary page of the site.In most cases, the site does not display the full account number in the account summary page and additional navigation is required to aggregate it.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul>|
|accountStatus|string|false|read-only|The status of the account that is updated by the consumer through an application or an API. Valid Values: AccountStatus<br><b>Additional Details:</b><br><b>ACTIVE:</b> All the added manual and aggregated accounts status will be made "ACTIVE" by default. <br><b>TO_BE_CLOSED:</b> If the aggregated accounts are not found or closed in the data provider site, Yodlee system marks the status as TO_BE_CLOSED<br><b>INACTIVE:</b> Users can update the status as INACTIVE to stop updating and to stop considering the account in other services<br><b>CLOSED:</b> Users can update the status as CLOSED, if the account is closed with the provider. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|accountType|string|false|read-only|The type of account that is aggregated, i.e., savings, checking, credit card, charge, HELOC, etc. The account type is derived based on the attributes of the account. <br><b>Valid Values:</b><br><b>Aggregated Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PPF</li><li>RECURRING_DEPOSIT</li><li>FSA</li><li>MONEY_MARKET</li><li>IRA</li><li>PREPAID</li></ul><b>creditCard</b><ul><li>OTHER</li><li>CREDIT</li><li>STORE</li><li>CHARGE</li><li>OTHER</li></ul><b>investment (SN 1.0)</b><ul><li>BROKERAGE_MARGIN</li><li>HSA</li><li>IRA</li><li>BROKERAGE_CASH</li><li>401K</li><li>403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE</li><li>CUSTODIAL</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE</li><li>JTTIC</li><li>JTWROS</li><li>COMMUNITY_PROPERTY</li><li>JOINT_BY_ENTIRETY</li><li>CONSERVATORSHIP</li><li>ROTH</li><li>ROTH_CONVERSION</li><li>ROLLOVER</li><li>EDUCATIONAL</li><li>529_PLAN</li><li>457_DEFERRED_COMPENSATION</li><li>401A</li><li>PSP</li><li>MPP</li><li>STOCK_BASKET</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER</li><li>CHARITABLE_LEAD</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP</li><li>UTMA</li><li>UGMA</li><li>ESOPP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>SOLE_PROPRIETORSHIP</li><li>CHURCH</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CMA</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET</li><li>SUPER_ANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN</li><li>DEFERRED_PROFIT_SHARING_PLAN</li><li>NON_REGISTERED_SAVINGS_PLAN</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN</li><li>GROUP_RETIREMENT_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_ACCOUNT</li><li>REGISTERED_PENSION_PLAN</li><li>TAX_FREE_SAVINGS_ACCOUNT</li><li>LIFE_INCOME_FUND</li><li>REGISTERED_RETIREMENT_INCOME_FUND</li><li>SPOUSAL_RETIREMENT_INCOME_FUND</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND</li><li>GUARANTEED_INVESTMENT_CERTIFICATES</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN</li><li>OTHER</li></ul><b>investment (SN 2.0)</b><ul><li>BROKERAGE_CASH</li><li>BROKERAGE_MARGIN</li><li>INDIVIDUAL_RETIREMENT_ACCOUNT_IRA</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_401K</li><li>EMPLOYEE_RETIREMENT_SAVINGS_PLAN_403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE_IRA</li><li>CUSTODIAL_ACCOUNT</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE_INVESTMENT_ACCOUNT</li><li>JOINT_TENANTS_TENANCY_IN_COMMON_JTIC</li><li>JOINT_TENANTS_WITH_RIGHTS_OF_SURVIVORSHIP_JTWROS</li><li>JOINT_TENANTS_COMMUNITY_PROPERTY</li><li>JOINT_TENANTS_TENANTS_BY_ENTIRETY</li><li>CONSERVATOR</li><li>ROTH_IRA</li><li>ROTH_CONVERSION</li><li>ROLLOVER_IRA</li><li>EDUCATIONAL</li><li>EDUCATIONAL_SAVINGS_PLAN_529</li><li>DEFERRED_COMPENSATION_PLAN_457</li><li>MONEY_PURCHASE_RETIREMENT_PLAN_401A</li><li>PROFIT_SHARING_PLAN</li><li>MONEY_PURCHASE_PLAN</li><li>STOCK_BASKET_ACCOUNT</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER_TRUST</li><li>CHARITABLE_LEAD_TRUST</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP_IRA</li><li>UNIFORM_TRANSFER_TO_MINORS_ACT_UTMA</li><li>UNIFORM_GIFT_TO_MINORS_ACT_UGMA</li><li>EMPLOYEE_STOCK_OWNERSHIP_PLAN_ESOP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>PROPRIETORSHIP</li><li>CHURCH_ACCOUNT</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CASH_MANAGEMENT_ACCOUNT</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN_ESPP</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET_ACCOUNT</li><li>SUPERANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN_RRSP</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN_SRSP</li><li>DEFERRED_PROFIT_SHARING_PLAN_DPSP</li><li>NON_REGISTERED_SAVINGS_PLAN_NRSP</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN_RESP</li><li>GROUP_RETIREMENT_SAVINGS_PLAN_GRSP</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN_LRSP</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN_RLSP</li><li>LOCKED_IN_RETIREMENT_ACCOUNT_LIRA</li><li>REGISTERED_PENSION_PLAN_RPP</li><li>TAX_FREE_SAVINGS_ACCOUNT_TFSA</li><li>LIFE_INCOME_FUND_LIF</li><li>REGISTERED_RETIREMENT_INCOME_FUND_RIF</li><li>SPOUSAL_RETIREMENT_INCOME_FUND_SRIF</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND_LRIF</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND_PRIF</li><li>GUARANTEED_INVESTMENT_CERTIFICATES_GIC</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN_RDSP</li><li>DEFINED_CONTRIBUTION_PLAN</li><li>DEFINED_BENEFIT_PLAN</li><li>EMPLOYEE_STOCK_OPTION_PLAN</li><li>NONQUALIFIED_DEFERRED_COMPENSATION_PLAN_409A</li><li>KEOGH_PLAN</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_ROTH_401K</li><li>DEFERRED_CONTINGENT_CAPITAL_PLAN_DCCP</li><li>EMPLOYEE_BENEFIT_PLAN</li><li>EMPLOYEE_SAVINGS_PLAN</li><li>HEALTH_SAVINGS_ACCOUNT_HSA</li><li>COVERDELL_EDUCATION_SAVINGS_ACCOUNT_ESA</li><li>TESTAMENTARY_TRUST</li><li>ESTATE</li><li>GRANTOR_RETAINED_ANNUITY_TRUST_GRAT</li><li>ADVISORY_ACCOUNT</li><li>NON_PROFIT_ORGANIZATION_501C</li><li>HEALTH_REIMBURSEMENT_ARRANGEMENT_HRA</li><li>INDIVIDUAL_SAVINGS_ACCOUNT_ISA</li><li>CASH_ISA</li><li>STOCKS_AND_SHARES_ISA</li><li>INNOVATIVE_FINANCE_ISA</li><li>JUNIOR_ISA</li><li>EMPLOYEES_PROVIDENT_FUND_ORGANIZATION_EPFO</li><li>PUBLIC_PROVIDENT_FUND_PPF</li><li>EMPLOYEES_PENSION_SCHEME_EPS</li><li>NATIONAL_PENSION_SYSTEM_NPS</li><li>INDEXED_ANNUITY</li><li>ANNUITIZED_ANNUITY</li><li>VARIABLE_ANNUITY</li><li>ROTH_403B</li><li>SPOUSAL_IRA</li><li>SPOUSAL_ROTH_IRA</li><li>SARSEP_IRA</li><li>SUBSTANTIALLY_EQUAL_PERIODIC_PAYMENTS_SEPP</li><li>OFFSHORE_TRUST</li><li>IRREVOCABLE_LIFE_INSURANCE_TRUST</li><li>INTERNATIONAL_TRUST</li><li>LIFE_INTEREST_TRUST</li><li>EMPLOYEE_BENEFIT_TRUST</li><li>PRECIOUS_METAL_ACCOUNT</li><li>INVESTMENT_LOAN_ACCOUNT</li><li>GRANTOR_RETAINED_INCOME_TRUST</li><li>PENSION_PLAN</li><li>OTHER</li></ul><b>loan</b><ul><li>MORTGAGE</li><li>INSTALLMENT_LOAN</li><li>PERSONAL_LOAN</li><li>HOME_EQUITY_LINE_OF_CREDIT</li><li>LINE_OF_CREDIT</li><li>AUTO_LOAN</li><li>STUDENT_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>AUTO_INSURANCE</li><li>HEALTH_INSURANCE</li><li>HOME_INSURANCE</li><li>LIFE_INSURANCE</li><li>ANNUITY</li><li>TRAVEL_INSURANCE</li><li>INSURANCE</li></ul><b>realEstate</b><ul> <li>REAL_ESTATE</li></ul><b>reward</b><ul><li>REWARD_POINTS</li></ul><b>Manual Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PREPAID</li></ul><b>credit</b><ul>  <li>CREDIT</li></ul><b>loan</b><ul>  <li>PERSONAL_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>INSURANCE</li><li>ANNUITY</li></ul><b>investment</b><ul><li>BROKERAGE_CASH</li></ul><br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|address|[AccountAddress](#schemaaccountaddress)|false|none|none|
|aggregationSource|string|false|read-only|The source through which the account(s) are added in the system.<br><b>Valid Values</b>: SYSTEM, USER<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|amountDue|[Money](#schemamoney)|false|none|none|
|annualPercentageYield|number(double)|false|read-only|Annual percentage yield (APY) is a normalized representation of an interest rate, based on a compounding period of one year. APY generally refers to the rate paid to a depositor by a financial institution on an account.<br><b>Applicable containers</b>: bank<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|annuityBalance|[Money](#schemamoney)|false|none|none|
|apr|number(double)|false|read-only|The annual percentage rate (APR) is the yearly rate of interest on the credit card account.<br><b>Additional Details:</b> The yearly percentage rate charged when a balance is held on a credit card. This rate of interest is applied every month on the outstanding credit card balance.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|associatedProviderAccountId|[integer(int64)]|false|read-only|The providerAccountIds that share the account with the primary providerAccountId that was created when the user had added the account for the first time.<br><b>Additional Details</b>: This attribute is returned in the response only if the account deduplication feature is enabled and the same account is mapped to more than one provider account IDs indicating the account is owned by more than one user, for example, joint accounts.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All Containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|autoRefresh|[AutoRefresh](#schemaautorefresh)|false|none|none|
|availableBalance|[Money](#schemamoney)|false|none|none|
|availableCash|[Money](#schemamoney)|false|none|none|
|availableCredit|[Money](#schemamoney)|false|none|none|
|balance|[Money](#schemamoney)|false|none|none|
|bankTransferCode|[[BankTransferCode](#schemabanktransfercode)]|false|read-only|Bank and branch identification information.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, investment, loan<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|cash|[Money](#schemamoney)|false|none|none|
|cashApr|number(double)|false|none|Annual percentage rate applied to cash withdrawals on the card.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|cashValue|[Money](#schemamoney)|false|none|none|
|classification|string|false|read-only|The classification of the account such as personal, corporate, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, reward, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|collateral|string|false|read-only|Property or possession offered to support a loan that can be seized on a default.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|coverage|[[Coverage](#schemacoverage)]|false|read-only|The coverage-related details of the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|createdDate|string|false|read-only|The date on which the account is created in the Yodlee system.<br><b>Additional Details:</b> It is the date when the user links or aggregates the account(s) that are held with the provider to the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|currentBalance|[Money](#schemamoney)|false|none|none|
|currentLevel|string|false|read-only|Current level of the reward program the user is associated with. E.g. Silver, Jade etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|dataset|[[AccountDataset](#schemaaccountdataset)]|false|read-only|Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|deathBenefit|[Money](#schemamoney)|false|none|none|
|derivedApr|number(double)|false|read-only|Derived APR will be an estimated purchase APR based on consumers credit card transactions and credit card purchase.<br><b>Aggregated / Manual / Derived</b>: Derived<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|displayedName|string|false|read-only|The name or identification of the account owner, as it appears at the FI site. <br><b>Note:</b> The account holder name can be full or partial based on how it is displayed in the account summary page of the FI site. In most cases, the FI site does not display the full account holder name in the account summary page.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|dueDate|string|false|read-only|The date on which the due amount has to be paid. <br><b>Additional Details:</b><br><b>Credit Card:</b> The monthly date by when the minimum payment is due to be paid on the credit card account. <br><b>Loan:</b> The date on or before which the due amount should be paid.<br><b>Note:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|enrollmentDate|string|false|read-only|Date on which the user is enrolled on the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|escrowBalance|[Money](#schemamoney)|false|none|none|
|estimatedDate|string|false|read-only|The date on which the home value was estimated.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|expirationDate|string|false|read-only|The date on which the insurance policy expires or matures.<br><b>Additional Details:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|faceAmount|[Money](#schemamoney)|false|none|none|
|frequency|string|false|read-only|The frequency of the billing cycle of the account in case of card. The frequency in which premiums are paid in an insurance policy such as monthly, quarterly, and annually. The frequency in which due amounts are paid in a loan  account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>:  creditCard, insurance, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|fullAccountNumber|string|false|read-only|Full account number of the account that is included only when include = fullAccountNumber is provided in the request. For student loan account the account number that will be used for ACH or fund transfer<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan, reward,  otherAssets, otherLiabilities <br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><b> Note : </b> fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.</ul>|
|fullAccountNumberList|[FullAccountNumberList](#schemafullaccountnumberlist)|false|none|none|
|guarantor|string|false|read-only|A nonprofit or state organization that works with lender, servicer, school, and the Department of Education to help successfully repay Federal Family Education Loan Program (FFELP) loans. If FFELP student loans default, the guarantor takes ownership of them.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|holder|[[AccountHolder](#schemaaccountholder)]|false|read-only|Holder details of the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|homeInsuranceType|string|false|read-only|Type of home insurance, like -<ul><li>HOME_OWNER</li><li>RENTAL</li><li>RENTER</li><li>etc..</li></ul><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|homeValue|[Money](#schemamoney)|false|none|none|
|id|integer(int64)|false|read-only|The primary key of the account resource and the unique identifier for the account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>GET investmentOptions</li><li>GET accounts/historicalBalances</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul>|
|includeInNetWorth|boolean|false|read-only|Used to determine  whether an account to be considered in the networth calculation.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank,creditCard,loan,investment,insurance,realEstate,otherAssets,otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|interestPaidLastYear|[Money](#schemamoney)|false|none|none|
|interestPaidYTD|[Money](#schemamoney)|false|none|none|
|interestRate|number(double)|false|read-only|<br><b>Bank:</b> The interest rate offered by a FI to its depositors on a bank account.<br><b>Loan:</b> Interest rate applied on the loan.<br><b>Additional Details:</b><br><b>Note:</b> The Interest Rate field is only applicable for the following account types: savings, checking, money market, and certificate of deposit.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|interestRateType|string|false|read-only|The type of the interest rate, for example, fixed or variable.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|isAsset|boolean|false|read-only|The account to be considered as an asset or liability.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|isManual|boolean|false|read-only|Indicates if an account is aggregated from a site or it is a manual account i.e. account information manually provided by the user.<br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|lastEmployeeContributionAmount|[Money](#schemamoney)|false|none|none|
|lastEmployeeContributionDate|string|false|read-only|The date on which the last employee contribution was made to the 401k account.<br><b>Note:</b> The last employee contribution date field is derived from the transaction data and not aggregated from the FI site. The field is only applicable to the 401k account type.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|lastPayment|[Money](#schemamoney)|false|none|none|
|lastPaymentAmount|[Money](#schemamoney)|false|none|none|
|lastPaymentDate|string|false|read-only|The date on which the payment for the previous or current billing cycle is done.<br><b>Additional Details:</b> If the payment is already done for the current billing cycle, then the field indicates the payment date of the current billing cycle. If payment is yet to be done for the current billing cycle, then the field indicates the date on which the payment was made for any of the previous billing cycles. The last payment date at the account-level can differ from the last payment date at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|lastUpdated|string|false|read-only|The date time the account information was last retrieved from the provider site and updated in the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|lender|string|false|read-only|The financial institution that provides the loan.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|lifeInsuranceType|string|false|read-only|Type of life insurance.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|loanPayByDate|string|false|read-only|The date by which the payoff amount should be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|loanPayoffAmount|[Money](#schemamoney)|false|none|none|
|loanPayoffDetails|[LoanPayoffDetails](#schemaloanpayoffdetails)|false|none|none|
|marginBalance|[Money](#schemamoney)|false|none|none|
|maturityAmount|[Money](#schemamoney)|false|none|none|
|maturityDate|string|false|read-only|The date when a certificate of deposit (CD/FD) matures or the final payment date of a loan at which point the principal amount (including pending interest) is due to be paid.<br><b>Additional Details:</b> The date when a certificate of deposit (CD) matures, i.e., the money in the CD can be withdrawn without paying an early withdrawal penalty.The final payment date of a loan, i.e., the principal amount (including pending interest) is due to be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|memo|string|false|read-only|The additional description or notes given by the user.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|minimumAmountDue|[Money](#schemamoney)|false|none|none|
|moneyMarketBalance|[Money](#schemamoney)|false|none|none|
|nextLevel|string|false|read-only|The eligible next level of the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|nickname|string|false|read-only|The nickname of the account as provided by the consumer to identify an account. The account nickname can be used instead of the account name.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|oauthMigrationStatus|string|false|read-only|Indicates the migration status of the account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|originalLoanAmount|[Money](#schemamoney)|false|none|none|
|originationDate|string|false|read-only|The date on which the loan is disbursed.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|overDraftLimit|[Money](#schemamoney)|false|none|none|
|paymentProfile|[PaymentProfile](#schemapaymentprofile)|false|none|none|
|policyEffectiveDate|string|false|read-only|The date on which the insurance policy coverage commences.<br><b>Applicable containers</b>: insurance<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|policyFromDate|string|false|read-only|The date the insurance policy began.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|policyStatus|string|false|read-only|The status of the policy.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|policyTerm|string|false|read-only|The duration for which the policy is valid or in effect. For example, one year, five years, etc.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|policyToDate|string|false|read-only|The date to which the policy exists.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|premium|[Money](#schemamoney)|false|none|none|
|premiumPaymentTerm|string|false|read-only|The number of years for which premium payments have to be made in a policy.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|primaryRewardUnit|string|false|read-only|Primary reward unit for this reward program. E.g. miles, points, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|principalBalance|[Money](#schemamoney)|false|none|none|
|profile|[AccountProfile](#schemaaccountprofile)|false|none|none|
|providerAccountId|integer(int64)|false|read-only|The primary key of the provider account resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|providerId|string|false|read-only|Identifier of the provider site. The primary key of provider resource. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|providerName|string|false|read-only|Service provider or institution name where the account originates. This belongs to the provider resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|recurringPayment|[Money](#schemamoney)|false|none|none|
|remainingBalance|[Money](#schemamoney)|false|none|none|
|repaymentPlanType|string|false|read-only|The type of repayment plan that the borrower prefers to repay the loan. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br>|
|rewardBalance|[[RewardBalance](#schemarewardbalance)]|false|read-only|Information of different reward balances associated with the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|runningBalance|[Money](#schemamoney)|false|none|none|
|shortBalance|[Money](#schemamoney)|false|none|none|
|sourceAccountStatus|string|false|read-only|Indicates the status of the loan account. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br>|
|sourceId|string|false|read-only|A unique ID that the provider site has assigned to the account. The source ID is only available for the HELD accounts.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|term|string|false|read-only|The tenure for which the CD account is valid  or in case of loan, the number of years/months over which the loan amount  has to be repaid. <br><b>Additional Details:</b><br>  Bank: The Term field is only applicable for the account type CD.Loan: The period for which the loan agreement is in force. The period, before or at the end of which, the loan should either be repaid or renegotiated for another term.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|totalCashLimit|[Money](#schemamoney)|false|none|none|
|totalCreditLimit|[Money](#schemamoney)|false|none|none|
|totalCreditLine|[Money](#schemamoney)|false|none|none|
|totalUnvestedBalance|[Money](#schemamoney)|false|none|none|
|totalVestedBalance|[Money](#schemamoney)|false|none|none|
|userClassification|string|false|read-only|<b>Applicable containers</b>: reward, bank, creditCard, investment, loan, insurance, realEstate,  otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>POST accounts</ul><li>GET dataExtracts/userData</li><b>Applicable Values</b><br>|
|valuationType|string|false|read-only|The valuation type indicates whether the home value is calculated either manually or by Yodlee Partners.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|CONTAINER|bank|
|CONTAINER|creditCard|
|CONTAINER|investment|
|CONTAINER|insurance|
|CONTAINER|loan|
|CONTAINER|reward|
|CONTAINER|realEstate|
|CONTAINER|otherAssets|
|CONTAINER|otherLiabilities|
|accountStatus|ACTIVE|
|accountStatus|INACTIVE|
|accountStatus|TO_BE_CLOSED|
|accountStatus|CLOSED|
|accountStatus|DELETED|
|aggregationSource|SYSTEM|
|aggregationSource|USER|
|classification|OTHER|
|classification|PERSONAL|
|classification|CORPORATE|
|classification|SMALL_BUSINESS|
|classification|TRUST|
|classification|ADD_ON_CARD|
|classification|VIRTUAL_CARD|
|frequency|DAILY|
|frequency|ONE_TIME|
|frequency|WEEKLY|
|frequency|EVERY_2_WEEKS|
|frequency|SEMI_MONTHLY|
|frequency|MONTHLY|
|frequency|QUARTERLY|
|frequency|SEMI_ANNUALLY|
|frequency|ANNUALLY|
|frequency|EVERY_2_MONTHS|
|frequency|EBILL|
|frequency|FIRST_DAY_MONTHLY|
|frequency|LAST_DAY_MONTHLY|
|frequency|EVERY_4_WEEKS|
|frequency|UNKNOWN|
|frequency|OTHER|
|homeInsuranceType|HOME_OWNER|
|homeInsuranceType|RENTAL|
|homeInsuranceType|RENTER|
|homeInsuranceType|UNKNOWN|
|homeInsuranceType|OTHER|
|interestRateType|FIXED|
|interestRateType|VARIABLE|
|interestRateType|UNKNOWN|
|interestRateType|OTHER|
|lifeInsuranceType|OTHER|
|lifeInsuranceType|TERM_LIFE_INSURANCE|
|lifeInsuranceType|UNIVERSAL_LIFE_INSURANCE|
|lifeInsuranceType|WHOLE_LIFE_INSURANCE|
|lifeInsuranceType|VARIABLE_LIFE_INSURANCE|
|lifeInsuranceType|ULIP|
|lifeInsuranceType|ENDOWMENT|
|oauthMigrationStatus|IN_PROGRESS|
|oauthMigrationStatus|TO_BE_MIGRATED|
|oauthMigrationStatus|COMPLETED|
|policyStatus|ACTIVE|
|policyStatus|INACTIVE|
|policyStatus|OTHER|
|repaymentPlanType|STANDARD|
|repaymentPlanType|GRADUATED|
|repaymentPlanType|EXTENDED|
|repaymentPlanType|INCOME_BASED|
|repaymentPlanType|INCOME_CONTINGENT|
|repaymentPlanType|INCOME_SENSITIVE|
|repaymentPlanType|PAY_AS_YOU_EARN|
|repaymentPlanType|REVISED_PAY_AS_YOU_EARN|
|sourceAccountStatus|IN_REPAYMENT|
|sourceAccountStatus|DEFAULTED|
|sourceAccountStatus|IN_SCHOOL|
|sourceAccountStatus|IN_GRACE_PERIOD|
|sourceAccountStatus|DELINQUENCY|
|sourceAccountStatus|DEFERMENT|
|sourceAccountStatus|FORBEARANCE|
|userClassification|BUSINESS|
|userClassification|PERSONAL|
|valuationType|SYSTEM|
|valuationType|MANUAL|

<h2 id="tocS_AccountAddress">AccountAddress</h2>
<!-- backwards compatibility -->
<a id="schemaaccountaddress"></a>
<a id="schema_AccountAddress"></a>
<a id="tocSaccountaddress"></a>
<a id="tocsaccountaddress"></a>

```json
{
  "address1": "string",
  "address2": "string",
  "address3": "string",
  "city": "string",
  "country": "string",
  "sourceType": "string",
  "state": "string",
  "street": "string",
  "type": "HOME",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address1|string|false|none|none|
|address2|string|false|none|none|
|address3|string|false|none|none|
|city|string|false|none|none|
|country|string|false|none|none|
|sourceType|string|false|none|none|
|state|string|false|none|none|
|street|string|false|none|none|
|type|string|false|none|none|
|zip|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HOME|
|type|BUSINESS|
|type|POBOX|
|type|RETAIL|
|type|OFFICE|
|type|SMALL_BUSINESS|
|type|COMMUNICATION|
|type|PERMANENT|
|type|STATEMENT_ADDRESS|
|type|PAYMENT|
|type|PAYOFF|
|type|UNKNOWN|

<h2 id="tocS_AccountDataset">AccountDataset</h2>
<!-- backwards compatibility -->
<a id="schemaaccountdataset"></a>
<a id="schema_AccountDataset"></a>
<a id="tocSaccountdataset"></a>
<a id="tocsaccountdataset"></a>

```json
{
  "additionalStatus": "LOGIN_IN_PROGRESS",
  "lastUpdateAttempt": "string",
  "lastUpdated": "string",
  "name": "BASIC_AGG_DATA",
  "nextUpdateScheduled": "string",
  "updateEligibility": "ALLOW_UPDATE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalStatus|string|false|read-only|The status of last update attempted for the dataset. <br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul><b>Applicable Values</b><br>|
|lastUpdateAttempt|string|false|read-only|Indicate when the last attempt was performed to update the dataset for the given provider account<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>|
|lastUpdated|string|false|read-only|Indicate when the dataset is last updated successfully for the given provider account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>|
|name|string|false|none|The name of the dataset requested from the provider site<br><br><b>Account Type</b>: Manual<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br>|
|nextUpdateScheduled|string|false|read-only|Indicates when the next attempt to update the dataset is scheduled.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>|
|updateEligibility|string|false|read-only|Indicate whether the dataset is eligible for update or not.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul><b>Applicable Values</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|additionalStatus|LOGIN_IN_PROGRESS|
|additionalStatus|DATA_RETRIEVAL_IN_PROGRESS|
|additionalStatus|ACCT_SUMMARY_RECEIVED|
|additionalStatus|AVAILABLE_DATA_RETRIEVED|
|additionalStatus|PARTIAL_DATA_RETRIEVED|
|additionalStatus|DATA_RETRIEVAL_FAILED|
|additionalStatus|DATA_NOT_AVAILABLE|
|additionalStatus|ACCOUNT_LOCKED|
|additionalStatus|ADDL_AUTHENTICATION_REQUIRED|
|additionalStatus|BETA_SITE_DEV_IN_PROGRESS|
|additionalStatus|CREDENTIALS_UPDATE_NEEDED|
|additionalStatus|INCORRECT_CREDENTIALS|
|additionalStatus|PROPERTY_VALUE_NOT_AVAILABLE|
|additionalStatus|INVALID_ADDL_INFO_PROVIDED|
|additionalStatus|REQUEST_TIME_OUT|
|additionalStatus|SITE_BLOCKING_ERROR|
|additionalStatus|UNEXPECTED_SITE_ERROR|
|additionalStatus|SITE_NOT_SUPPORTED|
|additionalStatus|SITE_UNAVAILABLE|
|additionalStatus|TECH_ERROR|
|additionalStatus|USER_ACTION_NEEDED_AT_SITE|
|additionalStatus|SITE_SESSION_INVALIDATED|
|additionalStatus|NEW_AUTHENTICATION_REQUIRED|
|additionalStatus|DATASET_NOT_SUPPORTED|
|additionalStatus|ENROLLMENT_REQUIRED_FOR_DATASET|
|additionalStatus|CONSENT_REQUIRED|
|additionalStatus|CONSENT_EXPIRED|
|additionalStatus|CONSENT_REVOKED|
|additionalStatus|INCORRECT_OAUTH_TOKEN|
|additionalStatus|MIGRATION_IN_PROGRESS|
|name|BASIC_AGG_DATA|
|name|ADVANCE_AGG_DATA|
|name|ACCT_PROFILE|
|name|DOCUMENT|
|updateEligibility|ALLOW_UPDATE|
|updateEligibility|ALLOW_UPDATE_WITH_CREDENTIALS|
|updateEligibility|DISALLOW_UPDATE|

<h2 id="tocS_AccountHistoricalBalancesResponse">AccountHistoricalBalancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccounthistoricalbalancesresponse"></a>
<a id="schema_AccountHistoricalBalancesResponse"></a>
<a id="tocSaccounthistoricalbalancesresponse"></a>
<a id="tocsaccounthistoricalbalancesresponse"></a>

```json
{
  "account": [
    {
      "historicalBalances": [
        {
          "asOfDate": "string",
          "balance": {
            "amount": 0,
            "currency": "AUD"
          },
          "dataSourceType": "S",
          "date": "string",
          "isAsset": true
        }
      ],
      "id": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[[AccountHistory](#schemaaccounthistory)]|false|read-only|none|

<h2 id="tocS_AccountHistory">AccountHistory</h2>
<!-- backwards compatibility -->
<a id="schemaaccounthistory"></a>
<a id="schema_AccountHistory"></a>
<a id="tocSaccounthistory"></a>
<a id="tocsaccounthistory"></a>

```json
{
  "historicalBalances": [
    {
      "asOfDate": "string",
      "balance": {
        "amount": 0,
        "currency": "AUD"
      },
      "dataSourceType": "S",
      "date": "string",
      "isAsset": true
    }
  ],
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|historicalBalances|[[HistoricalBalance](#schemahistoricalbalance)]|false|read-only|none|
|id|integer(int64)|false|read-only|none|

<h2 id="tocS_AccountHolder">AccountHolder</h2>
<!-- backwards compatibility -->
<a id="schemaaccountholder"></a>
<a id="schema_AccountHolder"></a>
<a id="tocSaccountholder"></a>
<a id="tocsaccountholder"></a>

```json
{
  "gender": "string",
  "identifier": [
    {
      "type": "NIE",
      "value": "string"
    }
  ],
  "name": {
    "first": "string",
    "fullName": "string",
    "last": "string",
    "middle": "string"
  },
  "ownership": "PRIMARY"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gender|string|false|read-only|Identifiers of the account holder.<br><br><b>Aggregated / Manual</b>: Aggregated <br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|identifier|[[Identifier](#schemaidentifier)]|false|read-only|Identifiers of the account holder.<br><br><b>Aggregated / Manual</b>: Aggregated <br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|name|[Name](#schemaname)|false|none|none|
|ownership|string|false|read-only|Indicates the ownership of the account.<br><br><b>Aggregated / Manual</b>: Aggregated <br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|ownership|PRIMARY|
|ownership|SECONDARY|
|ownership|CUSTODIAN|
|ownership|OTHERS|
|ownership|POWER_OF_ATTORNEY|
|ownership|TRUSTEE|
|ownership|JOINT_OWNER|
|ownership|BENEFICIARY|
|ownership|AAS|
|ownership|BUSINESS|
|ownership|DBA|
|ownership|TRUST|

<h2 id="tocS_AccountProfile">AccountProfile</h2>
<!-- backwards compatibility -->
<a id="schemaaccountprofile"></a>
<a id="schema_AccountProfile"></a>
<a id="tocSaccountprofile"></a>
<a id="tocsaccountprofile"></a>

```json
{
  "address": [
    {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "sourceType": "string",
      "state": "string",
      "street": "string",
      "type": "HOME",
      "zip": "string"
    }
  ],
  "email": [
    {
      "type": "PRIMARY",
      "value": "string"
    }
  ],
  "identifier": [
    {
      "type": "NIE",
      "value": "string"
    }
  ],
  "phoneNumber": [
    {
      "type": "HOME",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[[AccountAddress](#schemaaccountaddress)]|false|read-only|Address available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|email|[[Email](#schemaemail)]|false|read-only|Email Id available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|identifier|[[Identifier](#schemaidentifier)]|false|read-only|Identifiers available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|phoneNumber|[[PhoneNumber](#schemaphonenumber)]|false|read-only|Phone number available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|

<h2 id="tocS_AccountResponse">AccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountresponse"></a>
<a id="schema_AccountResponse"></a>
<a id="tocSaccountresponse"></a>
<a id="tocsaccountresponse"></a>

```json
{
  "account": [
    {
      "401kLoan": {
        "amount": 0,
        "currency": "AUD"
      },
      "CONTAINER": "bank",
      "accountName": "string",
      "accountNumber": "string",
      "accountStatus": "ACTIVE",
      "accountType": "string",
      "address": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "city": "string",
        "country": "string",
        "sourceType": "string",
        "state": "string",
        "street": "string",
        "type": "HOME",
        "zip": "string"
      },
      "aggregationSource": "SYSTEM",
      "amountDue": {
        "amount": 0,
        "currency": "AUD"
      },
      "annualPercentageYield": 0,
      "annuityBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "apr": 0,
      "associatedProviderAccountId": [
        0
      ],
      "autoRefresh": {
        "additionalStatus": "SCHEDULED",
        "asOfDate": "string",
        "status": "ENABLED"
      },
      "availableBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "availableCash": {
        "amount": 0,
        "currency": "AUD"
      },
      "availableCredit": {
        "amount": 0,
        "currency": "AUD"
      },
      "balance": {
        "amount": 0,
        "currency": "AUD"
      },
      "bankTransferCode": [
        {
          "id": "string",
          "type": "BSB"
        }
      ],
      "cash": {
        "amount": 0,
        "currency": "AUD"
      },
      "cashApr": 0,
      "cashValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "classification": "OTHER",
      "collateral": "string",
      "coverage": [
        {
          "amount": [
            {
              "cover": {
                "amount": 0,
                "currency": "AUD"
              },
              "limitType": "IN_NETWORK",
              "met": {
                "amount": 0,
                "currency": "AUD"
              },
              "type": "DEDUCTIBLE",
              "unitType": "PER_FAMILY"
            }
          ],
          "endDate": "string",
          "planType": "PPO",
          "startDate": "string",
          "type": "VISION"
        }
      ],
      "createdDate": "string",
      "currentBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "currentLevel": "string",
      "dataset": [
        {
          "additionalStatus": "LOGIN_IN_PROGRESS",
          "lastUpdateAttempt": "string",
          "lastUpdated": "string",
          "name": "BASIC_AGG_DATA",
          "nextUpdateScheduled": "string",
          "updateEligibility": "ALLOW_UPDATE"
        }
      ],
      "deathBenefit": {
        "amount": 0,
        "currency": "AUD"
      },
      "derivedApr": 0,
      "displayedName": "string",
      "dueDate": "string",
      "enrollmentDate": "string",
      "escrowBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "estimatedDate": "string",
      "expirationDate": "string",
      "faceAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "frequency": "DAILY",
      "fullAccountNumber": "string",
      "fullAccountNumberList": {
        "paymentAccountNumber": "string",
        "unmaskedAccountNumber": "string"
      },
      "guarantor": "string",
      "holder": [
        {
          "gender": "string",
          "identifier": [
            {
              "type": "NIE",
              "value": "string"
            }
          ],
          "name": {
            "first": "string",
            "fullName": "string",
            "last": "string",
            "middle": "string"
          },
          "ownership": "PRIMARY"
        }
      ],
      "homeInsuranceType": "HOME_OWNER",
      "homeValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "id": 0,
      "includeInNetWorth": true,
      "interestPaidLastYear": {
        "amount": 0,
        "currency": "AUD"
      },
      "interestPaidYTD": {
        "amount": 0,
        "currency": "AUD"
      },
      "interestRate": 0,
      "interestRateType": "FIXED",
      "isAsset": true,
      "isManual": true,
      "lastEmployeeContributionAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "lastEmployeeContributionDate": "string",
      "lastPayment": {
        "amount": 0,
        "currency": "AUD"
      },
      "lastPaymentAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "lastPaymentDate": "string",
      "lastUpdated": "string",
      "lender": "string",
      "lifeInsuranceType": "OTHER",
      "loanPayByDate": "string",
      "loanPayoffAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "loanPayoffDetails": {
        "outstandingBalance": {
          "amount": 0,
          "currency": "AUD"
        },
        "payByDate": "string",
        "payoffAmount": {
          "amount": 0,
          "currency": "AUD"
        }
      },
      "marginBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "maturityAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "maturityDate": "string",
      "memo": "string",
      "minimumAmountDue": {
        "amount": 0,
        "currency": "AUD"
      },
      "moneyMarketBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "nextLevel": "string",
      "nickname": "string",
      "oauthMigrationStatus": "IN_PROGRESS",
      "originalLoanAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "originationDate": "string",
      "overDraftLimit": {
        "amount": 0,
        "currency": "AUD"
      },
      "paymentProfile": {
        "address": [
          {
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "city": "string",
            "country": "string",
            "sourceType": "string",
            "state": "string",
            "street": "string",
            "type": "HOME",
            "zip": "string"
          }
        ],
        "identifier": {
          "type": "REFERENCE_NUMBER",
          "value": "string"
        },
        "paymentBankTransferCode": {
          "id": "string",
          "type": "ROUTING_NUMBER"
        }
      },
      "policyEffectiveDate": "string",
      "policyFromDate": "string",
      "policyStatus": "ACTIVE",
      "policyTerm": "string",
      "policyToDate": "string",
      "premium": {
        "amount": 0,
        "currency": "AUD"
      },
      "premiumPaymentTerm": "string",
      "primaryRewardUnit": "string",
      "principalBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "profile": {
        "address": [
          {
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "city": "string",
            "country": "string",
            "sourceType": "string",
            "state": "string",
            "street": "string",
            "type": "HOME",
            "zip": "string"
          }
        ],
        "email": [
          {
            "type": "PRIMARY",
            "value": "string"
          }
        ],
        "identifier": [
          {
            "type": "NIE",
            "value": "string"
          }
        ],
        "phoneNumber": [
          {
            "type": "HOME",
            "value": "string"
          }
        ]
      },
      "providerAccountId": 0,
      "providerId": "string",
      "providerName": "string",
      "recurringPayment": {
        "amount": 0,
        "currency": "AUD"
      },
      "remainingBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "repaymentPlanType": "STANDARD",
      "rewardBalance": [
        {
          "balance": 0,
          "balanceToLevel": "string",
          "balanceToReward": "string",
          "balanceType": "EXPIRING_BALANCE",
          "description": "string",
          "expiryDate": "string",
          "units": "string"
        }
      ],
      "runningBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "shortBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "sourceAccountStatus": "IN_REPAYMENT",
      "sourceId": "string",
      "term": "string",
      "totalCashLimit": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalCreditLimit": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalCreditLine": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalUnvestedBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalVestedBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "userClassification": "BUSINESS",
      "valuationType": "SYSTEM"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[[Account](#schemaaccount)]|false|read-only|none|

<h2 id="tocS_ApiKeyOutput">ApiKeyOutput</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyoutput"></a>
<a id="schema_ApiKeyOutput"></a>
<a id="tocSapikeyoutput"></a>
<a id="tocsapikeyoutput"></a>

```json
{
  "createdDate": "string",
  "expiresIn": 0,
  "key": "string",
  "publicKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdDate|string|false|none|The date on which the apiKey was created for the customer.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>|
|expiresIn|integer(int64)|false|none|Time in seconds after which the JWT token created for users expires.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>|
|key|string|false|none|ApiKey or the issuer key used to generate the JWT token for authentication.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>|
|publicKey|string|false|none|Public key uploaded by the customer while generating ApiKey.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>|

<h2 id="tocS_ApiKeyRequest">ApiKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyrequest"></a>
<a id="schema_ApiKeyRequest"></a>
<a id="tocSapikeyrequest"></a>
<a id="tocsapikeyrequest"></a>

```json
{
  "publicKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publicKey|string|false|none|Public key uploaded by the customer while generating ApiKey.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>|

<h2 id="tocS_ApiKeyResponse">ApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyresponse"></a>
<a id="schema_ApiKeyResponse"></a>
<a id="tocSapikeyresponse"></a>
<a id="tocsapikeyresponse"></a>

```json
{
  "apiKey": [
    {
      "createdDate": "string",
      "expiresIn": 0,
      "key": "string",
      "publicKey": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|[[ApiKeyOutput](#schemaapikeyoutput)]|false|none|ApiKey customer details.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>|

<h2 id="tocS_AssetClassification">AssetClassification</h2>
<!-- backwards compatibility -->
<a id="schemaassetclassification"></a>
<a id="schema_AssetClassification"></a>
<a id="tocSassetclassification"></a>
<a id="tocsassetclassification"></a>

```json
{
  "allocation": 0,
  "classificationType": "string",
  "classificationValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocation|number(double)|false|read-only|The allocation percentage of the holding.<br><br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br>|
|classificationType|string|false|read-only|The type of classification to which the investment belongs (assetClass, country, sector, and style).<br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br>|
|classificationValue|string|false|read-only|The value for each classificationType.<br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br>|

<h2 id="tocS_AssetClassificationList">AssetClassificationList</h2>
<!-- backwards compatibility -->
<a id="schemaassetclassificationlist"></a>
<a id="schema_AssetClassificationList"></a>
<a id="tocSassetclassificationlist"></a>
<a id="tocsassetclassificationlist"></a>

```json
{
  "classificationType": "string",
  "classificationValue": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classificationType|string|false|read-only|The type of classification to which the investment belongs (assetClass, country, sector, and style).<br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br>|
|classificationValue|[string]|false|read-only|The value for each classificationType.<br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br>|

<h2 id="tocS_Attribute">Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaattribute"></a>
<a id="schema_Attribute"></a>
<a id="tocSattribute"></a>
<a id="tocsattribute"></a>

```json
{
  "container": [
    "bank"
  ],
  "containerAttributes": {
    "BANK": {
      "fullAccountNumberFields": [
        "paymentAccountNumber"
      ],
      "numberOfTransactionDays": 0
    },
    "CREDITCARD": {
      "fullAccountNumberFields": [
        "paymentAccountNumber"
      ],
      "numberOfTransactionDays": 0
    },
    "INSURANCE": {
      "fullAccountNumberFields": [
        "paymentAccountNumber"
      ],
      "numberOfTransactionDays": 0
    },
    "INVESTMENT": {
      "fullAccountNumberFields": [
        "paymentAccountNumber"
      ],
      "numberOfTransactionDays": 0
    },
    "LOAN": {
      "fullAccountNumberFields": [
        "paymentAccountNumber"
      ],
      "numberOfTransactionDays": 0
    }
  },
  "fromDate": "string",
  "fromFinYear": "string",
  "name": "BASIC_ACCOUNT_INFO",
  "toDate": "string",
  "toFinYear": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|container|[string]|false|none|Containers for which the attributes are supported.<br><br><b>Endpoints</b>:<ul><li>GET providers</li><li>GET providers/{providerId}</li></ul>|
|containerAttributes|[ContainerAttributes](#schemacontainerattributes)|false|none|none|
|fromDate|string|false|read-only|Applicable only to EBILLS and STATEMENTS attributes of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul>|
|fromFinYear|string|false|read-only|Applicable only to TAX attribute of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul>|
|name|string|false|none|Attributes that are supported for a dataset.<br><br><b>Endpoints</b>:<ul><li>GET providers</li><li>GET providers/{providerId}</li></ul>|
|toDate|string|false|read-only|Applicable only to EBILLS and STATEMENTS attributes of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul>|
|toFinYear|string|false|read-only|Applicable only to TAX attribute of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|container|bank|
|container|creditCard|
|container|investment|
|container|insurance|
|container|loan|
|container|reward|
|container|realEstate|
|container|otherAssets|
|container|otherLiabilities|
|name|BASIC_ACCOUNT_INFO|
|name|TRANSACTIONS|
|name|STATEMENTS|
|name|HOLDINGS|
|name|ACCOUNT_DETAILS|
|name|TAX|
|name|EBILLS|
|name|FULL_ACCT_NUMBER|
|name|BANK_TRANSFER_CODE|
|name|HOLDER_NAME|
|name|HOLDER_DETAILS|
|name|PAYMENT_PROFILE|
|name|PAYMENT_DETAILS|
|name|INTEREST_DETAILS|
|name|COVERAGE|

<h2 id="tocS_AutoRefresh">AutoRefresh</h2>
<!-- backwards compatibility -->
<a id="schemaautorefresh"></a>
<a id="schema_AutoRefresh"></a>
<a id="tocSautorefresh"></a>
<a id="tocsautorefresh"></a>

```json
{
  "additionalStatus": "SCHEDULED",
  "asOfDate": "string",
  "status": "ENABLED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalStatus|string|false|read-only|Indicates the reason for the status.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values</b><br>|
|asOfDate|string|false|read-only|Date on which the auto refresh status is determined.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|status|string|false|read-only|Indicates whether auto refresh is enabled or disabled.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|additionalStatus|SCHEDULED|
|additionalStatus|TEMP_ERROR|
|additionalStatus|SITE_BLOCKING|
|additionalStatus|SITE_NOT_SUPPORTED|
|additionalStatus|REAL_TIME_MFA_REQUIRED|
|additionalStatus|USER_ACTION_REQUIRED|
|additionalStatus|UNSUBSCRIBED|
|additionalStatus|MANUAL_ACCOUNT|
|status|ENABLED|
|status|DISABLED|

<h2 id="tocS_BankTransferCode">BankTransferCode</h2>
<!-- backwards compatibility -->
<a id="schemabanktransfercode"></a>
<a id="schema_BankTransferCode"></a>
<a id="tocSbanktransfercode"></a>
<a id="tocsbanktransfercode"></a>

```json
{
  "id": "string",
  "type": "BSB"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The FI's branch identification number.Additional Details: The routing number of the bank account in the United States. For non-United States accounts, it is the IFSC code (India), BSB number (Australia), and sort code (United Kingdom). <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul>|
|type|string|false|none|The bank transfer code type varies depending on the region of the account origination. <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul><b>Applicable Values</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BSB|
|type|IFSC|
|type|ROUTING_NUMBER|
|type|SORT_CODE|

<h2 id="tocS_Capability">Capability</h2>
<!-- backwards compatibility -->
<a id="schemacapability"></a>
<a id="schema_Capability"></a>
<a id="tocScapability"></a>
<a id="tocscapability"></a>

```json
{
  "container": [
    "bank"
  ],
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|container|[string]|false|read-only|none|
|name|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|container|bank|
|container|creditCard|
|container|investment|
|container|insurance|
|container|loan|
|container|reward|
|container|realEstate|
|container|otherAssets|
|container|otherLiabilities|

<h2 id="tocS_ClientCredentialToken">ClientCredentialToken</h2>
<!-- backwards compatibility -->
<a id="schemaclientcredentialtoken"></a>
<a id="schema_ClientCredentialToken"></a>
<a id="tocSclientcredentialtoken"></a>
<a id="tocsclientcredentialtoken"></a>

```json
{
  "accessToken": "string",
  "expiresIn": 0,
  "issuedAt": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string|false|read-only|Access Token to access YSL 1.1 services.<br><br><b>Endpoints</b>:<ul><li>POST /auth/token</li></ul>|
|expiresIn|integer(int32)|false|read-only|Time in seconds after which the issued accessToken expires.<br><br><b>Endpoints</b>:<ul><li>POST /auth/token</li></ul>|
|issuedAt|string|false|read-only|The date and time on which accessToken was created for the customer.<br><br><b>Endpoints</b>:<ul><li>POST /auth/token</li></ul>|

<h2 id="tocS_ClientCredentialTokenResponse">ClientCredentialTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclientcredentialtokenresponse"></a>
<a id="schema_ClientCredentialTokenResponse"></a>
<a id="tocSclientcredentialtokenresponse"></a>
<a id="tocsclientcredentialtokenresponse"></a>

```json
{
  "token": {
    "accessToken": "string",
    "expiresIn": 0,
    "issuedAt": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|[ClientCredentialToken](#schemaclientcredentialtoken)|false|none|none|

<h2 id="tocS_Cobrand">Cobrand</h2>
<!-- backwards compatibility -->
<a id="schemacobrand"></a>
<a id="schema_Cobrand"></a>
<a id="tocScobrand"></a>
<a id="tocscobrand"></a>

```json
{
  "cobrandLogin": "string",
  "cobrandPassword": "string",
  "locale": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cobrandLogin|string|true|none|none|
|cobrandPassword|string|true|none|none|
|locale|string|false|none|The customer's locale that will be considered for the localization functionality.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul>|

<h2 id="tocS_CobrandLoginRequest">CobrandLoginRequest</h2>
<!-- backwards compatibility -->
<a id="schemacobrandloginrequest"></a>
<a id="schema_CobrandLoginRequest"></a>
<a id="tocScobrandloginrequest"></a>
<a id="tocscobrandloginrequest"></a>

```json
{
  "cobrand": {
    "cobrandLogin": "string",
    "cobrandPassword": "string",
    "locale": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cobrand|[Cobrand](#schemacobrand)|true|none|none|

<h2 id="tocS_CobrandLoginResponse">CobrandLoginResponse</h2>
<!-- backwards compatibility -->
<a id="schemacobrandloginresponse"></a>
<a id="schema_CobrandLoginResponse"></a>
<a id="tocScobrandloginresponse"></a>
<a id="tocscobrandloginresponse"></a>

```json
{
  "applicationId": "string",
  "cobrandId": 0,
  "locale": "string",
  "session": {
    "cobSession": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationId|string|false|read-only|The application identifier.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul>|
|cobrandId|integer(int64)|false|read-only|Unique identifier of the cobrand (customer) in the system.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul>|
|locale|string|false|read-only|The customer's locale that will be considered for the localization functionality.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul>|
|session|[CobrandSession](#schemacobrandsession)|false|none|none|

<h2 id="tocS_CobrandNotificationEvent">CobrandNotificationEvent</h2>
<!-- backwards compatibility -->
<a id="schemacobrandnotificationevent"></a>
<a id="schema_CobrandNotificationEvent"></a>
<a id="tocScobrandnotificationevent"></a>
<a id="tocscobrandnotificationevent"></a>

```json
{
  "callbackUrl": "string",
  "name": "REFRESH"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackUrl|string|false|none|URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul>|
|name|string|false|none|Name of the event for which the customers must subscribe to receive notifications.<br><b>Valid Value:</b> Notification Events Name<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul><b>Applicable Values</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|name|REFRESH|
|name|DATA_UPDATES|
|name|AUTO_REFRESH_UPDATES|

<h2 id="tocS_CobrandNotificationResponse">CobrandNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacobrandnotificationresponse"></a>
<a id="schema_CobrandNotificationResponse"></a>
<a id="tocScobrandnotificationresponse"></a>
<a id="tocscobrandnotificationresponse"></a>

```json
{
  "event": [
    {
      "callbackUrl": "string",
      "name": "REFRESH"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|[[CobrandNotificationEvent](#schemacobrandnotificationevent)]|false|read-only|none|

<h2 id="tocS_CobrandPublicKeyResponse">CobrandPublicKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacobrandpublickeyresponse"></a>
<a id="schema_CobrandPublicKeyResponse"></a>
<a id="tocScobrandpublickeyresponse"></a>
<a id="tocscobrandpublickeyresponse"></a>

```json
{
  "keyAlias": "string",
  "keyAsPemString": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keyAlias|string|false|read-only|The key name used for encryption.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/publicKey</li></ul>|
|keyAsPemString|string|false|read-only|Public key that the customer should be using to encrypt the credentials and answers before sending to the add & update providerAccounts APIs.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/publicKey</li></ul>|

<h2 id="tocS_CobrandSession">CobrandSession</h2>
<!-- backwards compatibility -->
<a id="schemacobrandsession"></a>
<a id="schema_CobrandSession"></a>
<a id="tocScobrandsession"></a>
<a id="tocscobrandsession"></a>

```json
{
  "cobSession": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cobSession|string|false|none|none|

<h2 id="tocS_ConfigsNotificationEvent">ConfigsNotificationEvent</h2>
<!-- backwards compatibility -->
<a id="schemaconfigsnotificationevent"></a>
<a id="schema_ConfigsNotificationEvent"></a>
<a id="tocSconfigsnotificationevent"></a>
<a id="tocsconfigsnotificationevent"></a>

```json
{
  "callbackUrl": "string",
  "name": "REFRESH"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackUrl|string|false|none|URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul>|
|name|string|false|none|Name of the event for which the customers must subscribe to receive notifications.<br><b>Valid Value:</b> Notification Events Name<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul><b>Applicable Values</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|name|REFRESH|
|name|DATA_UPDATES|
|name|AUTO_REFRESH_UPDATES|

<h2 id="tocS_ConfigsNotificationResponse">ConfigsNotificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfigsnotificationresponse"></a>
<a id="schema_ConfigsNotificationResponse"></a>
<a id="tocSconfigsnotificationresponse"></a>
<a id="tocsconfigsnotificationresponse"></a>

```json
{
  "event": [
    {
      "callbackUrl": "string",
      "name": "REFRESH"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|[[ConfigsNotificationEvent](#schemaconfigsnotificationevent)]|false|read-only|none|

<h2 id="tocS_ConfigsPublicKey">ConfigsPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemaconfigspublickey"></a>
<a id="schema_ConfigsPublicKey"></a>
<a id="tocSconfigspublickey"></a>
<a id="tocsconfigspublickey"></a>

```json
{
  "alias": "string",
  "key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alias|string|false|read-only|The key name used for encryption.<br><br><b>Endpoints</b>:<ul><li>GET configs/publicKey</li></ul>|
|key|string|false|read-only|Public key that the customer should be using to encrypt the credentials and answers before sending to the add and update providerAccounts APIs.<br><br><b>Endpoints</b>:<ul><li>GET configs/publicKey</li></ul>|

<h2 id="tocS_ConfigsPublicKeyResponse">ConfigsPublicKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconfigspublickeyresponse"></a>
<a id="schema_ConfigsPublicKeyResponse"></a>
<a id="tocSconfigspublickeyresponse"></a>
<a id="tocsconfigspublickeyresponse"></a>

```json
{
  "publicKey": {
    "alias": "string",
    "key": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publicKey|[ConfigsPublicKey](#schemaconfigspublickey)|false|none|none|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "email": "string",
  "phone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email Id of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,investment,loan<br>|
|phone|string|false|none|Phone number of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,investment,loan<br>|

<h2 id="tocS_ContainerAttributes">ContainerAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacontainerattributes"></a>
<a id="schema_ContainerAttributes"></a>
<a id="tocScontainerattributes"></a>
<a id="tocscontainerattributes"></a>

```json
{
  "BANK": {
    "fullAccountNumberFields": [
      "paymentAccountNumber"
    ],
    "numberOfTransactionDays": 0
  },
  "CREDITCARD": {
    "fullAccountNumberFields": [
      "paymentAccountNumber"
    ],
    "numberOfTransactionDays": 0
  },
  "INSURANCE": {
    "fullAccountNumberFields": [
      "paymentAccountNumber"
    ],
    "numberOfTransactionDays": 0
  },
  "INVESTMENT": {
    "fullAccountNumberFields": [
      "paymentAccountNumber"
    ],
    "numberOfTransactionDays": 0
  },
  "LOAN": {
    "fullAccountNumberFields": [
      "paymentAccountNumber"
    ],
    "numberOfTransactionDays": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BANK|[TransactionDays](#schematransactiondays)|false|none|none|
|CREDITCARD|[TransactionDays](#schematransactiondays)|false|none|none|
|INSURANCE|[TransactionDays](#schematransactiondays)|false|none|none|
|INVESTMENT|[TransactionDays](#schematransactiondays)|false|none|none|
|LOAN|[TransactionDays](#schematransactiondays)|false|none|none|

<h2 id="tocS_Coordinates">Coordinates</h2>
<!-- backwards compatibility -->
<a id="schemacoordinates"></a>
<a id="schema_Coordinates"></a>
<a id="tocScoordinates"></a>
<a id="tocscoordinates"></a>

```json
{
  "latitude": 0,
  "longitude": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number(double)|false|none|Latitude of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,loan<br>|
|longitude|number(double)|false|none|Longitude of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,loan<br>|

<h2 id="tocS_Coverage">Coverage</h2>
<!-- backwards compatibility -->
<a id="schemacoverage"></a>
<a id="schema_Coverage"></a>
<a id="tocScoverage"></a>
<a id="tocscoverage"></a>

```json
{
  "amount": [
    {
      "cover": {
        "amount": 0,
        "currency": "AUD"
      },
      "limitType": "IN_NETWORK",
      "met": {
        "amount": 0,
        "currency": "AUD"
      },
      "type": "DEDUCTIBLE",
      "unitType": "PER_FAMILY"
    }
  ],
  "endDate": "string",
  "planType": "PPO",
  "startDate": "string",
  "type": "VISION"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[[CoverageAmount](#schemacoverageamount)]|false|read-only|The coverage amount-related details.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|endDate|string|false|read-only|The date on which the coverage for the account ends or expires.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|planType|string|false|read-only|The plan type for an insurance provided to an individual or an entity.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br>|
|startDate|string|false|read-only|The date on which the coverage for the account starts.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|type|string|false|read-only|The type of coverage provided to an individual or an entity.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|planType|PPO|
|planType|HMO|
|planType|UNKNOWN|
|type|VISION|
|type|DENTAL|
|type|MEDICAL|
|type|HEALTH|
|type|DEATH_COVER|
|type|TOTAL_PERMANENT_DISABILITY|
|type|ACCIDENTAL_DEATH_COVER|
|type|INCOME_PROTECTION|
|type|DEATH_TOTAL_PERMANENT_DISABILITY|
|type|OTHER|

<h2 id="tocS_CoverageAmount">CoverageAmount</h2>
<!-- backwards compatibility -->
<a id="schemacoverageamount"></a>
<a id="schema_CoverageAmount"></a>
<a id="tocScoverageamount"></a>
<a id="tocscoverageamount"></a>

```json
{
  "cover": {
    "amount": 0,
    "currency": "AUD"
  },
  "limitType": "IN_NETWORK",
  "met": {
    "amount": 0,
    "currency": "AUD"
  },
  "type": "DEDUCTIBLE",
  "unitType": "PER_FAMILY"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cover|[Money](#schemamoney)|false|none|none|
|limitType|string|false|read-only|The type of coverage limit indicates if the coverage is in-network or out-of-network.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br>|
|met|[Money](#schemamoney)|false|none|none|
|type|string|false|read-only|The type of coverage provided to an individual or an entity.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br>|
|unitType|string|false|read-only|The type of coverage unit indicates if the coverage is for an individual or a family.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|limitType|IN_NETWORK|
|limitType|OUT_NETWORK|
|type|DEDUCTIBLE|
|type|OUT_OF_POCKET|
|type|ANNUAL_BENEFIT|
|type|MAX_BENEFIT|
|type|COVERAGE_AMOUNT|
|type|MONTHLY_BENEFIT|
|type|OTHER|
|unitType|PER_FAMILY|
|unitType|PER_MEMBER|

<h2 id="tocS_CreateAccountInfo">CreateAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountinfo"></a>
<a id="schema_CreateAccountInfo"></a>
<a id="tocScreateaccountinfo"></a>
<a id="tocscreateaccountinfo"></a>

```json
{
  "accountName": "string",
  "accountNumber": "string",
  "accountType": "string",
  "address": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "city": "string",
    "country": "string",
    "sourceType": "string",
    "state": "string",
    "street": "string",
    "type": "HOME",
    "zip": "string"
  },
  "amountDue": {
    "amount": 0,
    "currency": "AUD"
  },
  "balance": {
    "amount": 0,
    "currency": "AUD"
  },
  "dueDate": "string",
  "frequency": "DAILY",
  "homeValue": {
    "amount": 0,
    "currency": "AUD"
  },
  "includeInNetWorth": "string",
  "memo": "string",
  "nickname": "string",
  "valuationType": "SYSTEM"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|true|none|none|
|accountNumber|string|false|none|none|
|accountType|string|true|none|none|
|address|[AccountAddress](#schemaaccountaddress)|false|none|none|
|amountDue|[Money](#schemamoney)|false|none|none|
|balance|[Money](#schemamoney)|false|none|none|
|dueDate|string|false|none|none|
|frequency|string|false|none|none|
|homeValue|[Money](#schemamoney)|false|none|none|
|includeInNetWorth|string|false|none|none|
|memo|string|false|none|none|
|nickname|string|false|none|none|
|valuationType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|frequency|DAILY|
|frequency|ONE_TIME|
|frequency|WEEKLY|
|frequency|EVERY_2_WEEKS|
|frequency|SEMI_MONTHLY|
|frequency|MONTHLY|
|frequency|QUARTERLY|
|frequency|SEMI_ANNUALLY|
|frequency|ANNUALLY|
|frequency|EVERY_2_MONTHS|
|frequency|EBILL|
|frequency|FIRST_DAY_MONTHLY|
|frequency|LAST_DAY_MONTHLY|
|frequency|EVERY_4_WEEKS|
|frequency|UNKNOWN|
|frequency|OTHER|
|valuationType|SYSTEM|
|valuationType|MANUAL|

<h2 id="tocS_CreateAccountRequest">CreateAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaccountrequest"></a>
<a id="schema_CreateAccountRequest"></a>
<a id="tocScreateaccountrequest"></a>
<a id="tocscreateaccountrequest"></a>

```json
{
  "account": {
    "accountName": "string",
    "accountNumber": "string",
    "accountType": "string",
    "address": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "sourceType": "string",
      "state": "string",
      "street": "string",
      "type": "HOME",
      "zip": "string"
    },
    "amountDue": {
      "amount": 0,
      "currency": "AUD"
    },
    "balance": {
      "amount": 0,
      "currency": "AUD"
    },
    "dueDate": "string",
    "frequency": "DAILY",
    "homeValue": {
      "amount": 0,
      "currency": "AUD"
    },
    "includeInNetWorth": "string",
    "memo": "string",
    "nickname": "string",
    "valuationType": "SYSTEM"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[CreateAccountInfo](#schemacreateaccountinfo)|true|none|none|

<h2 id="tocS_CreateCobrandNotificationEvent">CreateCobrandNotificationEvent</h2>
<!-- backwards compatibility -->
<a id="schemacreatecobrandnotificationevent"></a>
<a id="schema_CreateCobrandNotificationEvent"></a>
<a id="tocScreatecobrandnotificationevent"></a>
<a id="tocscreatecobrandnotificationevent"></a>

```json
{
  "callbackUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackUrl|string|false|none|URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul>|

<h2 id="tocS_CreateCobrandNotificationEventRequest">CreateCobrandNotificationEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecobrandnotificationeventrequest"></a>
<a id="schema_CreateCobrandNotificationEventRequest"></a>
<a id="tocScreatecobrandnotificationeventrequest"></a>
<a id="tocscreatecobrandnotificationeventrequest"></a>

```json
{
  "event": {
    "callbackUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|[CreateCobrandNotificationEvent](#schemacreatecobrandnotificationevent)|true|none|none|

<h2 id="tocS_CreateConfigsNotificationEvent">CreateConfigsNotificationEvent</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigsnotificationevent"></a>
<a id="schema_CreateConfigsNotificationEvent"></a>
<a id="tocScreateconfigsnotificationevent"></a>
<a id="tocscreateconfigsnotificationevent"></a>

```json
{
  "callbackUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackUrl|string|false|none|URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul>|

<h2 id="tocS_CreateConfigsNotificationEventRequest">CreateConfigsNotificationEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateconfigsnotificationeventrequest"></a>
<a id="schema_CreateConfigsNotificationEventRequest"></a>
<a id="tocScreateconfigsnotificationeventrequest"></a>
<a id="tocscreateconfigsnotificationeventrequest"></a>

```json
{
  "event": {
    "callbackUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|[CreateConfigsNotificationEvent](#schemacreateconfigsnotificationevent)|true|none|none|

<h2 id="tocS_CreatedAccountInfo">CreatedAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemacreatedaccountinfo"></a>
<a id="schema_CreatedAccountInfo"></a>
<a id="tocScreatedaccountinfo"></a>
<a id="tocscreatedaccountinfo"></a>

```json
{
  "accountName": "string",
  "accountNumber": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|read-only|none|
|accountNumber|string|false|read-only|none|
|id|integer(int64)|false|read-only|none|

<h2 id="tocS_CreatedAccountResponse">CreatedAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedaccountresponse"></a>
<a id="schema_CreatedAccountResponse"></a>
<a id="tocScreatedaccountresponse"></a>
<a id="tocscreatedaccountresponse"></a>

```json
{
  "account": [
    {
      "accountName": "string",
      "accountNumber": "string",
      "id": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[[CreatedAccountInfo](#schemacreatedaccountinfo)]|false|read-only|none|

<h2 id="tocS_DataExtractsAccount">DataExtractsAccount</h2>
<!-- backwards compatibility -->
<a id="schemadataextractsaccount"></a>
<a id="schema_DataExtractsAccount"></a>
<a id="tocSdataextractsaccount"></a>
<a id="tocsdataextractsaccount"></a>

```json
{
  "401kLoan": {
    "amount": 0,
    "currency": "AUD"
  },
  "CONTAINER": "bank",
  "accountName": "string",
  "accountNumber": "string",
  "accountStatus": "ACTIVE",
  "accountType": "string",
  "address": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "city": "string",
    "country": "string",
    "sourceType": "string",
    "state": "string",
    "street": "string",
    "type": "HOME",
    "zip": "string"
  },
  "aggregationSource": "SYSTEM",
  "amountDue": {
    "amount": 0,
    "currency": "AUD"
  },
  "annualPercentageYield": 0,
  "annuityBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "apr": 0,
  "associatedProviderAccountId": [
    0
  ],
  "availableBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "availableCash": {
    "amount": 0,
    "currency": "AUD"
  },
  "availableCredit": {
    "amount": 0,
    "currency": "AUD"
  },
  "balance": {
    "amount": 0,
    "currency": "AUD"
  },
  "bankTransferCode": [
    {
      "id": "string",
      "type": "BSB"
    }
  ],
  "cash": {
    "amount": 0,
    "currency": "AUD"
  },
  "cashApr": 0,
  "cashValue": {
    "amount": 0,
    "currency": "AUD"
  },
  "classification": "OTHER",
  "collateral": "string",
  "coverage": [
    {
      "amount": [
        {
          "cover": {
            "amount": 0,
            "currency": "AUD"
          },
          "limitType": "IN_NETWORK",
          "met": {
            "amount": 0,
            "currency": "AUD"
          },
          "type": "DEDUCTIBLE",
          "unitType": "PER_FAMILY"
        }
      ],
      "endDate": "string",
      "planType": "PPO",
      "startDate": "string",
      "type": "VISION"
    }
  ],
  "createdDate": "string",
  "currentBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "currentLevel": "string",
  "dataset": [
    {
      "additionalStatus": "LOGIN_IN_PROGRESS",
      "lastUpdateAttempt": "string",
      "lastUpdated": "string",
      "name": "BASIC_AGG_DATA",
      "nextUpdateScheduled": "string",
      "updateEligibility": "ALLOW_UPDATE"
    }
  ],
  "deathBenefit": {
    "amount": 0,
    "currency": "AUD"
  },
  "derivedApr": 0,
  "displayedName": "string",
  "dueDate": "string",
  "enrollmentDate": "string",
  "escrowBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "estimatedDate": "string",
  "expirationDate": "string",
  "faceAmount": {
    "amount": 0,
    "currency": "AUD"
  },
  "frequency": "DAILY",
  "guarantor": "string",
  "homeInsuranceType": "HOME_OWNER",
  "homeValue": {
    "amount": 0,
    "currency": "AUD"
  },
  "id": 0,
  "includeInNetWorth": true,
  "interestPaidLastYear": {
    "amount": 0,
    "currency": "AUD"
  },
  "interestPaidYTD": {
    "amount": 0,
    "currency": "AUD"
  },
  "interestRate": 0,
  "interestRateType": "FIXED",
  "isAsset": true,
  "isDeleted": true,
  "isManual": true,
  "lastEmployeeContributionAmount": {
    "amount": 0,
    "currency": "AUD"
  },
  "lastEmployeeContributionDate": "string",
  "lastPayment": {
    "amount": 0,
    "currency": "AUD"
  },
  "lastPaymentAmount": {
    "amount": 0,
    "currency": "AUD"
  },
  "lastPaymentDate": "string",
  "lastUpdated": "string",
  "lender": "string",
  "lifeInsuranceType": "OTHER",
  "loanPayByDate": "string",
  "loanPayoffAmount": {
    "amount": 0,
    "currency": "AUD"
  },
  "loanPayoffDetails": {
    "outstandingBalance": {
      "amount": 0,
      "currency": "AUD"
    },
    "payByDate": "string",
    "payoffAmount": {
      "amount": 0,
      "currency": "AUD"
    }
  },
  "marginBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "maturityAmount": {
    "amount": 0,
    "currency": "AUD"
  },
  "maturityDate": "string",
  "memo": "string",
  "minimumAmountDue": {
    "amount": 0,
    "currency": "AUD"
  },
  "moneyMarketBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "nextLevel": "string",
  "nickname": "string",
  "oauthMigrationStatus": "IN_PROGRESS",
  "originalLoanAmount": {
    "amount": 0,
    "currency": "AUD"
  },
  "originationDate": "string",
  "overDraftLimit": {
    "amount": 0,
    "currency": "AUD"
  },
  "policyEffectiveDate": "string",
  "policyFromDate": "string",
  "policyStatus": "ACTIVE",
  "policyTerm": "string",
  "policyToDate": "string",
  "premium": {
    "amount": 0,
    "currency": "AUD"
  },
  "premiumPaymentTerm": "string",
  "primaryRewardUnit": "string",
  "principalBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "providerAccountId": 0,
  "providerId": "string",
  "providerName": "string",
  "recurringPayment": {
    "amount": 0,
    "currency": "AUD"
  },
  "remainingBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "repaymentPlanType": "STANDARD",
  "rewardBalance": [
    {
      "balance": 0,
      "balanceToLevel": "string",
      "balanceToReward": "string",
      "balanceType": "EXPIRING_BALANCE",
      "description": "string",
      "expiryDate": "string",
      "units": "string"
    }
  ],
  "runningBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "shortBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "sourceAccountStatus": "IN_REPAYMENT",
  "sourceId": "string",
  "term": "string",
  "totalCashLimit": {
    "amount": 0,
    "currency": "AUD"
  },
  "totalCreditLimit": {
    "amount": 0,
    "currency": "AUD"
  },
  "totalCreditLine": {
    "amount": 0,
    "currency": "AUD"
  },
  "totalUnvestedBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "totalVestedBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "userClassification": "BUSINESS",
  "valuationType": "SYSTEM"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|401kLoan|[Money](#schemamoney)|false|none|none|
|CONTAINER|string|false|read-only|The type of service. E.g., Bank, Credit Card, Investment, Insurance, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|accountName|string|false|read-only|The account name as it appears at the site.<br>(The POST accounts service response return this field as name)<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|accountNumber|string|false|read-only|The account number as it appears on the site. (The POST accounts service response return this field as number)<br><b>Additional Details</b>:<b> Bank/ Loan/ Insurance/ Investment</b>:<br> The account number for the bank account as it appears at the site.<br><b>Credit Card</b>: The account number of the card account as it appears at the site,<br>i.e., the card number.The account number can be full or partial based on how it is displayed in the account summary page of the site.In most cases, the site does not display the full account number in the account summary page and additional navigation is required to aggregate it.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul>|
|accountStatus|string|false|read-only|The status of the account that is updated by the consumer through an application or an API. Valid Values: AccountStatus<br><b>Additional Details:</b><br><b>ACTIVE:</b> All the added manual and aggregated accounts status will be made "ACTIVE" by default. <br><b>TO_BE_CLOSED:</b> If the aggregated accounts are not found or closed in the data provider site, Yodlee system marks the status as TO_BE_CLOSED<br><b>INACTIVE:</b> Users can update the status as INACTIVE to stop updating and to stop considering the account in other services<br><b>CLOSED:</b> Users can update the status as CLOSED, if the account is closed with the provider. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|accountType|string|false|read-only|The type of account that is aggregated, i.e., savings, checking, credit card, charge, HELOC, etc. The account type is derived based on the attributes of the account. <br><b>Valid Values:</b><br><b>Aggregated Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PPF</li><li>RECURRING_DEPOSIT</li><li>FSA</li><li>MONEY_MARKET</li><li>IRA</li><li>PREPAID</li></ul><b>creditCard</b><ul><li>OTHER</li><li>CREDIT</li><li>STORE</li><li>CHARGE</li><li>OTHER</li></ul><b>investment (SN 1.0)</b><ul><li>BROKERAGE_MARGIN</li><li>HSA</li><li>IRA</li><li>BROKERAGE_CASH</li><li>401K</li><li>403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE</li><li>CUSTODIAL</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE</li><li>JTTIC</li><li>JTWROS</li><li>COMMUNITY_PROPERTY</li><li>JOINT_BY_ENTIRETY</li><li>CONSERVATORSHIP</li><li>ROTH</li><li>ROTH_CONVERSION</li><li>ROLLOVER</li><li>EDUCATIONAL</li><li>529_PLAN</li><li>457_DEFERRED_COMPENSATION</li><li>401A</li><li>PSP</li><li>MPP</li><li>STOCK_BASKET</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER</li><li>CHARITABLE_LEAD</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP</li><li>UTMA</li><li>UGMA</li><li>ESOPP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>SOLE_PROPRIETORSHIP</li><li>CHURCH</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CMA</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET</li><li>SUPER_ANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN</li><li>DEFERRED_PROFIT_SHARING_PLAN</li><li>NON_REGISTERED_SAVINGS_PLAN</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN</li><li>GROUP_RETIREMENT_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_ACCOUNT</li><li>REGISTERED_PENSION_PLAN</li><li>TAX_FREE_SAVINGS_ACCOUNT</li><li>LIFE_INCOME_FUND</li><li>REGISTERED_RETIREMENT_INCOME_FUND</li><li>SPOUSAL_RETIREMENT_INCOME_FUND</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND</li><li>GUARANTEED_INVESTMENT_CERTIFICATES</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN</li><li>OTHER</li></ul><b>investment (SN 2.0)</b><ul><li>BROKERAGE_CASH</li><li>BROKERAGE_MARGIN</li><li>INDIVIDUAL_RETIREMENT_ACCOUNT_IRA</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_401K</li><li>EMPLOYEE_RETIREMENT_SAVINGS_PLAN_403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE_IRA</li><li>CUSTODIAL_ACCOUNT</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE_INVESTMENT_ACCOUNT</li><li>JOINT_TENANTS_TENANCY_IN_COMMON_JTIC</li><li>JOINT_TENANTS_WITH_RIGHTS_OF_SURVIVORSHIP_JTWROS</li><li>JOINT_TENANTS_COMMUNITY_PROPERTY</li><li>JOINT_TENANTS_TENANTS_BY_ENTIRETY</li><li>CONSERVATOR</li><li>ROTH_IRA</li><li>ROTH_CONVERSION</li><li>ROLLOVER_IRA</li><li>EDUCATIONAL</li><li>EDUCATIONAL_SAVINGS_PLAN_529</li><li>DEFERRED_COMPENSATION_PLAN_457</li><li>MONEY_PURCHASE_RETIREMENT_PLAN_401A</li><li>PROFIT_SHARING_PLAN</li><li>MONEY_PURCHASE_PLAN</li><li>STOCK_BASKET_ACCOUNT</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER_TRUST</li><li>CHARITABLE_LEAD_TRUST</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP_IRA</li><li>UNIFORM_TRANSFER_TO_MINORS_ACT_UTMA</li><li>UNIFORM_GIFT_TO_MINORS_ACT_UGMA</li><li>EMPLOYEE_STOCK_OWNERSHIP_PLAN_ESOP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>PROPRIETORSHIP</li><li>CHURCH_ACCOUNT</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CASH_MANAGEMENT_ACCOUNT</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN_ESPP</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET_ACCOUNT</li><li>SUPERANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN_RRSP</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN_SRSP</li><li>DEFERRED_PROFIT_SHARING_PLAN_DPSP</li><li>NON_REGISTERED_SAVINGS_PLAN_NRSP</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN_RESP</li><li>GROUP_RETIREMENT_SAVINGS_PLAN_GRSP</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN_LRSP</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN_RLSP</li><li>LOCKED_IN_RETIREMENT_ACCOUNT_LIRA</li><li>REGISTERED_PENSION_PLAN_RPP</li><li>TAX_FREE_SAVINGS_ACCOUNT_TFSA</li><li>LIFE_INCOME_FUND_LIF</li><li>REGISTERED_RETIREMENT_INCOME_FUND_RIF</li><li>SPOUSAL_RETIREMENT_INCOME_FUND_SRIF</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND_LRIF</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND_PRIF</li><li>GUARANTEED_INVESTMENT_CERTIFICATES_GIC</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN_RDSP</li><li>DEFINED_CONTRIBUTION_PLAN</li><li>DEFINED_BENEFIT_PLAN</li><li>EMPLOYEE_STOCK_OPTION_PLAN</li><li>NONQUALIFIED_DEFERRED_COMPENSATION_PLAN_409A</li><li>KEOGH_PLAN</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_ROTH_401K</li><li>DEFERRED_CONTINGENT_CAPITAL_PLAN_DCCP</li><li>EMPLOYEE_BENEFIT_PLAN</li><li>EMPLOYEE_SAVINGS_PLAN</li><li>HEALTH_SAVINGS_ACCOUNT_HSA</li><li>COVERDELL_EDUCATION_SAVINGS_ACCOUNT_ESA</li><li>TESTAMENTARY_TRUST</li><li>ESTATE</li><li>GRANTOR_RETAINED_ANNUITY_TRUST_GRAT</li><li>ADVISORY_ACCOUNT</li><li>NON_PROFIT_ORGANIZATION_501C</li><li>HEALTH_REIMBURSEMENT_ARRANGEMENT_HRA</li><li>INDIVIDUAL_SAVINGS_ACCOUNT_ISA</li><li>CASH_ISA</li><li>STOCKS_AND_SHARES_ISA</li><li>INNOVATIVE_FINANCE_ISA</li><li>JUNIOR_ISA</li><li>EMPLOYEES_PROVIDENT_FUND_ORGANIZATION_EPFO</li><li>PUBLIC_PROVIDENT_FUND_PPF</li><li>EMPLOYEES_PENSION_SCHEME_EPS</li><li>NATIONAL_PENSION_SYSTEM_NPS</li><li>INDEXED_ANNUITY</li><li>ANNUITIZED_ANNUITY</li><li>VARIABLE_ANNUITY</li><li>ROTH_403B</li><li>SPOUSAL_IRA</li><li>SPOUSAL_ROTH_IRA</li><li>SARSEP_IRA</li><li>SUBSTANTIALLY_EQUAL_PERIODIC_PAYMENTS_SEPP</li><li>OFFSHORE_TRUST</li><li>IRREVOCABLE_LIFE_INSURANCE_TRUST</li><li>INTERNATIONAL_TRUST</li><li>LIFE_INTEREST_TRUST</li><li>EMPLOYEE_BENEFIT_TRUST</li><li>PRECIOUS_METAL_ACCOUNT</li><li>INVESTMENT_LOAN_ACCOUNT</li><li>GRANTOR_RETAINED_INCOME_TRUST</li><li>PENSION_PLAN</li><li>OTHER</li></ul><b>loan</b><ul><li>MORTGAGE</li><li>INSTALLMENT_LOAN</li><li>PERSONAL_LOAN</li><li>HOME_EQUITY_LINE_OF_CREDIT</li><li>LINE_OF_CREDIT</li><li>AUTO_LOAN</li><li>STUDENT_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>AUTO_INSURANCE</li><li>HEALTH_INSURANCE</li><li>HOME_INSURANCE</li><li>LIFE_INSURANCE</li><li>ANNUITY</li><li>TRAVEL_INSURANCE</li><li>INSURANCE</li></ul><b>realEstate</b><ul> <li>REAL_ESTATE</li></ul><b>reward</b><ul><li>REWARD_POINTS</li></ul><b>Manual Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PREPAID</li></ul><b>credit</b><ul>  <li>CREDIT</li></ul><b>loan</b><ul>  <li>PERSONAL_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>INSURANCE</li><li>ANNUITY</li></ul><b>investment</b><ul><li>BROKERAGE_CASH</li></ul><br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|address|[AccountAddress](#schemaaccountaddress)|false|none|none|
|aggregationSource|string|false|read-only|The source through which the account(s) are added in the system.<br><b>Valid Values</b>: SYSTEM, USER<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|amountDue|[Money](#schemamoney)|false|none|none|
|annualPercentageYield|number(double)|false|read-only|Annual percentage yield (APY) is a normalized representation of an interest rate, based on a compounding period of one year. APY generally refers to the rate paid to a depositor by a financial institution on an account.<br><b>Applicable containers</b>: bank<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|annuityBalance|[Money](#schemamoney)|false|none|none|
|apr|number(double)|false|read-only|The annual percentage rate (APR) is the yearly rate of interest on the credit card account.<br><b>Additional Details:</b> The yearly percentage rate charged when a balance is held on a credit card. This rate of interest is applied every month on the outstanding credit card balance.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|associatedProviderAccountId|[integer(int64)]|false|read-only|The providerAccountIds that share the account with the primary providerAccountId that was created when the user had added the account for the first time.<br><b>Additional Details</b>: This attribute is returned in the response only if the account deduplication feature is enabled and the same account is mapped to more than one provider account IDs indicating the account is owned by more than one user, for example, joint accounts.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All Containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|availableBalance|[Money](#schemamoney)|false|none|none|
|availableCash|[Money](#schemamoney)|false|none|none|
|availableCredit|[Money](#schemamoney)|false|none|none|
|balance|[Money](#schemamoney)|false|none|none|
|bankTransferCode|[[BankTransferCode](#schemabanktransfercode)]|false|read-only|Bank and branch identification information.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, investment, loan<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|cash|[Money](#schemamoney)|false|none|none|
|cashApr|number(double)|false|none|Annual percentage rate applied to cash withdrawals on the card.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|cashValue|[Money](#schemamoney)|false|none|none|
|classification|string|false|read-only|The classification of the account such as personal, corporate, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, reward, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|collateral|string|false|read-only|Property or possession offered to support a loan that can be seized on a default.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|coverage|[[Coverage](#schemacoverage)]|false|read-only|The coverage-related details of the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|createdDate|string|false|read-only|The date on which the account is created in the Yodlee system.<br><b>Additional Details:</b> It is the date when the user links or aggregates the account(s) that are held with the provider to the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|currentBalance|[Money](#schemamoney)|false|none|none|
|currentLevel|string|false|read-only|Current level of the reward program the user is associated with. E.g. Silver, Jade etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|dataset|[[AccountDataset](#schemaaccountdataset)]|false|read-only|Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|deathBenefit|[Money](#schemamoney)|false|none|none|
|derivedApr|number(double)|false|read-only|Derived APR will be an estimated purchase APR based on consumers credit card transactions and credit card purchase.<br><b>Aggregated / Manual / Derived</b>: Derived<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|displayedName|string|false|read-only|The name or identification of the account owner, as it appears at the FI site. <br><b>Note:</b> The account holder name can be full or partial based on how it is displayed in the account summary page of the FI site. In most cases, the FI site does not display the full account holder name in the account summary page.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|dueDate|string|false|read-only|The date on which the due amount has to be paid. <br><b>Additional Details:</b><br><b>Credit Card:</b> The monthly date by when the minimum payment is due to be paid on the credit card account. <br><b>Loan:</b> The date on or before which the due amount should be paid.<br><b>Note:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|enrollmentDate|string|false|read-only|Date on which the user is enrolled on the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|escrowBalance|[Money](#schemamoney)|false|none|none|
|estimatedDate|string|false|read-only|The date on which the home value was estimated.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|expirationDate|string|false|read-only|The date on which the insurance policy expires or matures.<br><b>Additional Details:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|faceAmount|[Money](#schemamoney)|false|none|none|
|frequency|string|false|read-only|The frequency of the billing cycle of the account in case of card. The frequency in which premiums are paid in an insurance policy such as monthly, quarterly, and annually. The frequency in which due amounts are paid in a loan  account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>:  creditCard, insurance, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|guarantor|string|false|read-only|A nonprofit or state organization that works with lender, servicer, school, and the Department of Education to help successfully repay Federal Family Education Loan Program (FFELP) loans. If FFELP student loans default, the guarantor takes ownership of them.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|homeInsuranceType|string|false|read-only|Type of home insurance, like -<ul><li>HOME_OWNER</li><li>RENTAL</li><li>RENTER</li><li>etc..</li></ul><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|homeValue|[Money](#schemamoney)|false|none|none|
|id|integer(int64)|false|read-only|The primary key of the account resource and the unique identifier for the account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>GET investmentOptions</li><li>GET accounts/historicalBalances</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul>|
|includeInNetWorth|boolean|false|read-only|Used to determine  whether an account to be considered in the networth calculation.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank,creditCard,loan,investment,insurance,realEstate,otherAssets,otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|interestPaidLastYear|[Money](#schemamoney)|false|none|none|
|interestPaidYTD|[Money](#schemamoney)|false|none|none|
|interestRate|number(double)|false|read-only|<br><b>Bank:</b> The interest rate offered by a FI to its depositors on a bank account.<br><b>Loan:</b> Interest rate applied on the loan.<br><b>Additional Details:</b><br><b>Note:</b> The Interest Rate field is only applicable for the following account types: savings, checking, money market, and certificate of deposit.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|interestRateType|string|false|read-only|The type of the interest rate, for example, fixed or variable.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|isAsset|boolean|false|read-only|The account to be considered as an asset or liability.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|isDeleted|boolean|false|read-only|Indicates if the account is marked as deleted.<b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET dataExtracts/userData</li></ul>|
|isManual|boolean|false|read-only|Indicates if an account is aggregated from a site or it is a manual account i.e. account information manually provided by the user.<br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|lastEmployeeContributionAmount|[Money](#schemamoney)|false|none|none|
|lastEmployeeContributionDate|string|false|read-only|The date on which the last employee contribution was made to the 401k account.<br><b>Note:</b> The last employee contribution date field is derived from the transaction data and not aggregated from the FI site. The field is only applicable to the 401k account type.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|lastPayment|[Money](#schemamoney)|false|none|none|
|lastPaymentAmount|[Money](#schemamoney)|false|none|none|
|lastPaymentDate|string|false|read-only|The date on which the payment for the previous or current billing cycle is done.<br><b>Additional Details:</b> If the payment is already done for the current billing cycle, then the field indicates the payment date of the current billing cycle. If payment is yet to be done for the current billing cycle, then the field indicates the date on which the payment was made for any of the previous billing cycles. The last payment date at the account-level can differ from the last payment date at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|lastUpdated|string|false|read-only|The date time the account information was last retrieved from the provider site and updated in the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|lender|string|false|read-only|The financial institution that provides the loan.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|lifeInsuranceType|string|false|read-only|Type of life insurance.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|loanPayByDate|string|false|read-only|The date by which the payoff amount should be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|loanPayoffAmount|[Money](#schemamoney)|false|none|none|
|loanPayoffDetails|[LoanPayoffDetails](#schemaloanpayoffdetails)|false|none|none|
|marginBalance|[Money](#schemamoney)|false|none|none|
|maturityAmount|[Money](#schemamoney)|false|none|none|
|maturityDate|string|false|read-only|The date when a certificate of deposit (CD/FD) matures or the final payment date of a loan at which point the principal amount (including pending interest) is due to be paid.<br><b>Additional Details:</b> The date when a certificate of deposit (CD) matures, i.e., the money in the CD can be withdrawn without paying an early withdrawal penalty.The final payment date of a loan, i.e., the principal amount (including pending interest) is due to be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|memo|string|false|read-only|The additional description or notes given by the user.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|minimumAmountDue|[Money](#schemamoney)|false|none|none|
|moneyMarketBalance|[Money](#schemamoney)|false|none|none|
|nextLevel|string|false|read-only|The eligible next level of the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|nickname|string|false|read-only|The nickname of the account as provided by the consumer to identify an account. The account nickname can be used instead of the account name.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|oauthMigrationStatus|string|false|read-only|Indicates the migration status of the account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|originalLoanAmount|[Money](#schemamoney)|false|none|none|
|originationDate|string|false|read-only|The date on which the loan is disbursed.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|overDraftLimit|[Money](#schemamoney)|false|none|none|
|policyEffectiveDate|string|false|read-only|The date on which the insurance policy coverage commences.<br><b>Applicable containers</b>: insurance<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|policyFromDate|string|false|read-only|The date the insurance policy began.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|policyStatus|string|false|read-only|The status of the policy.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|policyTerm|string|false|read-only|The duration for which the policy is valid or in effect. For example, one year, five years, etc.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|policyToDate|string|false|read-only|The date to which the policy exists.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|premium|[Money](#schemamoney)|false|none|none|
|premiumPaymentTerm|string|false|read-only|The number of years for which premium payments have to be made in a policy.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|primaryRewardUnit|string|false|read-only|Primary reward unit for this reward program. E.g. miles, points, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|principalBalance|[Money](#schemamoney)|false|none|none|
|providerAccountId|integer(int64)|false|read-only|The primary key of the provider account resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|providerId|string|false|read-only|Identifier of the provider site. The primary key of provider resource. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|providerName|string|false|read-only|Service provider or institution name where the account originates. This belongs to the provider resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|recurringPayment|[Money](#schemamoney)|false|none|none|
|remainingBalance|[Money](#schemamoney)|false|none|none|
|repaymentPlanType|string|false|read-only|The type of repayment plan that the borrower prefers to repay the loan. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br>|
|rewardBalance|[[RewardBalance](#schemarewardbalance)]|false|read-only|Information of different reward balances associated with the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|runningBalance|[Money](#schemamoney)|false|none|none|
|shortBalance|[Money](#schemamoney)|false|none|none|
|sourceAccountStatus|string|false|read-only|Indicates the status of the loan account. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br>|
|sourceId|string|false|read-only|A unique ID that the provider site has assigned to the account. The source ID is only available for the HELD accounts.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|term|string|false|read-only|The tenure for which the CD account is valid  or in case of loan, the number of years/months over which the loan amount  has to be repaid. <br><b>Additional Details:</b><br>  Bank: The Term field is only applicable for the account type CD.Loan: The period for which the loan agreement is in force. The period, before or at the end of which, the loan should either be repaid or renegotiated for another term.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|totalCashLimit|[Money](#schemamoney)|false|none|none|
|totalCreditLimit|[Money](#schemamoney)|false|none|none|
|totalCreditLine|[Money](#schemamoney)|false|none|none|
|totalUnvestedBalance|[Money](#schemamoney)|false|none|none|
|totalVestedBalance|[Money](#schemamoney)|false|none|none|
|userClassification|string|false|read-only|<b>Applicable containers</b>: reward, bank, creditCard, investment, loan, insurance, realEstate,  otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>POST accounts</ul><li>GET dataExtracts/userData</li><b>Applicable Values</b><br>|
|valuationType|string|false|read-only|The valuation type indicates whether the home value is calculated either manually or by Yodlee Partners.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|CONTAINER|bank|
|CONTAINER|creditCard|
|CONTAINER|investment|
|CONTAINER|insurance|
|CONTAINER|loan|
|CONTAINER|reward|
|CONTAINER|realEstate|
|CONTAINER|otherAssets|
|CONTAINER|otherLiabilities|
|accountStatus|ACTIVE|
|accountStatus|INACTIVE|
|accountStatus|TO_BE_CLOSED|
|accountStatus|CLOSED|
|accountStatus|DELETED|
|aggregationSource|SYSTEM|
|aggregationSource|USER|
|classification|OTHER|
|classification|PERSONAL|
|classification|CORPORATE|
|classification|SMALL_BUSINESS|
|classification|TRUST|
|classification|ADD_ON_CARD|
|classification|VIRTUAL_CARD|
|frequency|DAILY|
|frequency|ONE_TIME|
|frequency|WEEKLY|
|frequency|EVERY_2_WEEKS|
|frequency|SEMI_MONTHLY|
|frequency|MONTHLY|
|frequency|QUARTERLY|
|frequency|SEMI_ANNUALLY|
|frequency|ANNUALLY|
|frequency|EVERY_2_MONTHS|
|frequency|EBILL|
|frequency|FIRST_DAY_MONTHLY|
|frequency|LAST_DAY_MONTHLY|
|frequency|EVERY_4_WEEKS|
|frequency|UNKNOWN|
|frequency|OTHER|
|homeInsuranceType|HOME_OWNER|
|homeInsuranceType|RENTAL|
|homeInsuranceType|RENTER|
|homeInsuranceType|UNKNOWN|
|homeInsuranceType|OTHER|
|interestRateType|FIXED|
|interestRateType|VARIABLE|
|interestRateType|UNKNOWN|
|interestRateType|OTHER|
|lifeInsuranceType|OTHER|
|lifeInsuranceType|TERM_LIFE_INSURANCE|
|lifeInsuranceType|UNIVERSAL_LIFE_INSURANCE|
|lifeInsuranceType|WHOLE_LIFE_INSURANCE|
|lifeInsuranceType|VARIABLE_LIFE_INSURANCE|
|lifeInsuranceType|ULIP|
|lifeInsuranceType|ENDOWMENT|
|oauthMigrationStatus|IN_PROGRESS|
|oauthMigrationStatus|TO_BE_MIGRATED|
|oauthMigrationStatus|COMPLETED|
|policyStatus|ACTIVE|
|policyStatus|INACTIVE|
|policyStatus|OTHER|
|repaymentPlanType|STANDARD|
|repaymentPlanType|GRADUATED|
|repaymentPlanType|EXTENDED|
|repaymentPlanType|INCOME_BASED|
|repaymentPlanType|INCOME_CONTINGENT|
|repaymentPlanType|INCOME_SENSITIVE|
|repaymentPlanType|PAY_AS_YOU_EARN|
|repaymentPlanType|REVISED_PAY_AS_YOU_EARN|
|sourceAccountStatus|IN_REPAYMENT|
|sourceAccountStatus|DEFAULTED|
|sourceAccountStatus|IN_SCHOOL|
|sourceAccountStatus|IN_GRACE_PERIOD|
|sourceAccountStatus|DELINQUENCY|
|sourceAccountStatus|DEFERMENT|
|sourceAccountStatus|FORBEARANCE|
|userClassification|BUSINESS|
|userClassification|PERSONAL|
|valuationType|SYSTEM|
|valuationType|MANUAL|

<h2 id="tocS_DataExtractsEvent">DataExtractsEvent</h2>
<!-- backwards compatibility -->
<a id="schemadataextractsevent"></a>
<a id="schema_DataExtractsEvent"></a>
<a id="tocSdataextractsevent"></a>
<a id="tocsdataextractsevent"></a>

```json
{
  "data": {
    "fromDate": "string",
    "toDate": "string",
    "userCount": 0,
    "userData": [
      {
        "links": [
          {
            "href": "string",
            "methodType": "string",
            "rel": "string"
          }
        ],
        "user": {
          "loginName": "string"
        }
      }
    ]
  },
  "info": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[DataExtractsEventData](#schemadataextractseventdata)|false|none|none|
|info|string|false|read-only|none|

<h2 id="tocS_DataExtractsEventData">DataExtractsEventData</h2>
<!-- backwards compatibility -->
<a id="schemadataextractseventdata"></a>
<a id="schema_DataExtractsEventData"></a>
<a id="tocSdataextractseventdata"></a>
<a id="tocsdataextractseventdata"></a>

```json
{
  "fromDate": "string",
  "toDate": "string",
  "userCount": 0,
  "userData": [
    {
      "links": [
        {
          "href": "string",
          "methodType": "string",
          "rel": "string"
        }
      ],
      "user": {
        "loginName": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromDate|string|false|read-only|none|
|toDate|string|false|read-only|none|
|userCount|integer(int32)|false|read-only|none|
|userData|[[DataExtractsEventUserData](#schemadataextractseventuserdata)]|false|read-only|none|

<h2 id="tocS_DataExtractsEventLinks">DataExtractsEventLinks</h2>
<!-- backwards compatibility -->
<a id="schemadataextractseventlinks"></a>
<a id="schema_DataExtractsEventLinks"></a>
<a id="tocSdataextractseventlinks"></a>
<a id="tocsdataextractseventlinks"></a>

```json
{
  "href": "string",
  "methodType": "string",
  "rel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|read-only|none|
|methodType|string|false|read-only|none|
|rel|string|false|read-only|none|

<h2 id="tocS_DataExtractsEventResponse">DataExtractsEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemadataextractseventresponse"></a>
<a id="schema_DataExtractsEventResponse"></a>
<a id="tocSdataextractseventresponse"></a>
<a id="tocsdataextractseventresponse"></a>

```json
{
  "event": {
    "data": {
      "fromDate": "string",
      "toDate": "string",
      "userCount": 0,
      "userData": [
        {
          "links": [
            {
              "href": "string",
              "methodType": "string",
              "rel": "string"
            }
          ],
          "user": {
            "loginName": "string"
          }
        }
      ]
    },
    "info": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|[DataExtractsEvent](#schemadataextractsevent)|false|none|none|

<h2 id="tocS_DataExtractsEventUserData">DataExtractsEventUserData</h2>
<!-- backwards compatibility -->
<a id="schemadataextractseventuserdata"></a>
<a id="schema_DataExtractsEventUserData"></a>
<a id="tocSdataextractseventuserdata"></a>
<a id="tocsdataextractseventuserdata"></a>

```json
{
  "links": [
    {
      "href": "string",
      "methodType": "string",
      "rel": "string"
    }
  ],
  "user": {
    "loginName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[DataExtractsEventLinks](#schemadataextractseventlinks)]|false|read-only|none|
|user|[DataExtractsUser](#schemadataextractsuser)|false|none|none|

<h2 id="tocS_DataExtractsHolding">DataExtractsHolding</h2>
<!-- backwards compatibility -->
<a id="schemadataextractsholding"></a>
<a id="schema_DataExtractsHolding"></a>
<a id="tocSdataextractsholding"></a>
<a id="tocsdataextractsholding"></a>

```json
{
  "accountId": 0,
  "accruedIncome": {
    "amount": 0,
    "currency": "AUD"
  },
  "accruedInterest": {
    "amount": 0,
    "currency": "AUD"
  },
  "contractQuantity": 0,
  "costBasis": {
    "amount": 0,
    "currency": "AUD"
  },
  "couponRate": 0,
  "createdDate": "string",
  "cusipNumber": "string",
  "description": "string",
  "enrichedDescription": "string",
  "exercisedQuantity": 0,
  "expirationDate": "string",
  "grantDate": "string",
  "holdingType": "stock",
  "id": 0,
  "interestRate": 0,
  "isShort": true,
  "isin": "string",
  "lastUpdated": "string",
  "matchStatus": "string",
  "maturityDate": "string",
  "optionType": "put",
  "price": {
    "amount": 0,
    "currency": "AUD"
  },
  "providerAccountId": 0,
  "quantity": 0,
  "securityStyle": "string",
  "securityType": "string",
  "sedol": "string",
  "spread": {
    "amount": 0,
    "currency": "AUD"
  },
  "strikePrice": {
    "amount": 0,
    "currency": "AUD"
  },
  "symbol": "string",
  "term": "string",
  "unvestedQuantity": 0,
  "unvestedValue": {
    "amount": 0,
    "currency": "AUD"
  },
  "value": {
    "amount": 0,
    "currency": "AUD"
  },
  "vestedQuantity": 0,
  "vestedSharesExercisable": 0,
  "vestedValue": {
    "amount": 0,
    "currency": "AUD"
  },
  "vestingDate": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int64)|false|read-only|Unique identifier of the account to which the security is linked.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|accruedIncome|[Money](#schemamoney)|false|none|none|
|accruedInterest|[Money](#schemamoney)|false|none|none|
|contractQuantity|number(double)|false|read-only|The quantity of tradeable units in a contract.<br><b>Note</b>: The contract quantity field is only applicable to commodity and currency.<br><br><b>Applicable containers</b>: investment<br>|
|costBasis|[Money](#schemamoney)|false|none|none|
|couponRate|number(double)|false|read-only|The stated interest rate for a bond.<br><br><b>Applicable containers</b>: investment<br>|
|createdDate|string|false|read-only|The date on which the holding is created in the Yodlee system.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|cusipNumber|string|false|read-only|The CUSIP (Committee on Uniform Securities Identification Procedures) identifies most the financial instruments in the United States and Canada.<br><br><b>Applicable containers</b>: investment<br>|
|description|string|false|read-only|The description (name) for the holding (E.g., Cisco Systems)<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types. <br><br><b>Applicable containers</b>: investment, insurance<br>|
|enrichedDescription|string|false|read-only|The enrichedDescription is the security description of the normalized holding<br><br><b>Applicable containers</b>: investment, insurance<br>|
|exercisedQuantity|number(double)|false|read-only|The quantity of the employee stock options that are already exercised or bought by the employee.<br><b>Note</b>: Once the employee stock options is exercised, they are either converted to cash value or equity positions depending on the FI. The exercised quantity field is only applicable to employee stock options.<br><br><b>Applicable containers</b>: investment<br>|
|expirationDate|string|false|read-only|The date on which an option, right or warrant expires.<br><b>Note</b>: The expiration date field is only applicable to options and employee stock options.<br><br><b>Applicable containers</b>: investment<br>|
|grantDate|string|false|read-only|The date on which equity awards like ESOP, RSU, etc., are issued or granted.<br><b>Note</b>: The grant date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>|
|holdingType|string|false|read-only|Type of holding<br><br><b>Applicable containers</b>: investment, insurance<br>|
|id|integer(int64)|false|read-only|Unique identifier for the security added in the system. This is the primary key of the holding resource.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|interestRate|number(double)|false|read-only|The interest rate on a CD.<br><b>Note</b>: The interest rate field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>|
|isShort|boolean|false|read-only|Indicates that the holding is a short trading.<br><br><b>Applicable containers</b>: investment<br>|
|isin|string|false|read-only|The ISIN (International Securities Identification Number) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Note</b>: The ISIN field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br>|
|lastUpdated|string|false|read-only|The date when the information was last updated in the system.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|matchStatus|string|false|read-only|Indicates the security match status id of the investment option identified during security normalization.<br><br><b>Applicable containers</b>: investment<br>|
|maturityDate|string|false|read-only|The stated maturity date of a bond or CD.<br><br><b>Applicable containers</b>: investment<br>|
|optionType|string|false|read-only|The type of the option position (i.e., put or call).<br><b>Note</b>: The option type field is only applicable to options.<br><br><b>Applicable containers</b>: investment<br><b>Applicable Values</b><br>|
|price|[Money](#schemamoney)|false|none|none|
|providerAccountId|integer(int64)|false|read-only|Unique identifier for the user's association with the provider.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|quantity|number(double)|false|read-only|The quantity held for the holding.<br><b>Note</b>: Only for bonds the quantity field indicates the normalized quantity and not the quantity aggregated from the site. The quantity field is only applicable to restricted stock units/awards, performance units, currency, and commodity.<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|securityStyle|string|false|read-only|Indicates the security style of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|securityType|string|false|read-only|Indicates the security type of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|sedol|string|false|read-only|The SEDOL (Stock Exchange Daily Official List) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br>|
|spread|[Money](#schemamoney)|false|none|none|
|strikePrice|[Money](#schemamoney)|false|none|none|
|symbol|string|false|read-only|The symbol of the security.<br><br><b>Applicable containers</b>: investment<br>|
|term|string|false|read-only|The fixed duration for which the bond or CD is issued.<br><b>Note</b>: The term field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>|
|unvestedQuantity|number(double)|false|read-only|Indicates the number of unvested quantity or units.<br><b>Note</b>: The unvested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>|
|unvestedValue|[Money](#schemamoney)|false|none|none|
|value|[Money](#schemamoney)|false|none|none|
|vestedQuantity|number(double)|false|read-only|The quantity of units or shares that are already vested on a vest date.<br><b>Note</b>: The vested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>|
|vestedSharesExercisable|number(double)|false|read-only|The number of vested shares that can be exercised by the employee. It is usually equal to the vested quantity.<br><b>Note</b>: The vested shares exercisable field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>|
|vestedValue|[Money](#schemamoney)|false|none|none|
|vestingDate|string|false|read-only|The date on which a RSU, RSA, or an employee stock options become vested.<br><b>Note</b>: The vesting date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|holdingType|stock|
|holdingType|mutualFund|
|holdingType|bond|
|holdingType|CD|
|holdingType|option|
|holdingType|moneyMarketFund|
|holdingType|other|
|holdingType|remic|
|holdingType|future|
|holdingType|commodity|
|holdingType|currency|
|holdingType|unitInvestmentTrust|
|holdingType|employeeStockOption|
|holdingType|insuranceAnnuity|
|holdingType|unknown|
|holdingType|preferredStock|
|holdingType|ETF|
|holdingType|warrants|
|holdingType|ETN|
|optionType|put|
|optionType|call|
|optionType|unknown|
|optionType|other|

<h2 id="tocS_DataExtractsProviderAccount">DataExtractsProviderAccount</h2>
<!-- backwards compatibility -->
<a id="schemadataextractsprovideraccount"></a>
<a id="schema_DataExtractsProviderAccount"></a>
<a id="tocSdataextractsprovideraccount"></a>
<a id="tocsdataextractsprovideraccount"></a>

```json
{
  "aggregationSource": "SYSTEM",
  "createdDate": "string",
  "dataset": [
    {
      "additionalStatus": "LOGIN_IN_PROGRESS",
      "lastUpdateAttempt": "string",
      "lastUpdated": "string",
      "name": "BASIC_AGG_DATA",
      "nextUpdateScheduled": "string",
      "updateEligibility": "ALLOW_UPDATE"
    }
  ],
  "id": 0,
  "isDeleted": true,
  "isManual": true,
  "lastUpdated": "string",
  "oauthMigrationStatus": "IN_PROGRESS",
  "providerId": 0,
  "requestId": "string",
  "status": "LOGIN_IN_PROGRESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregationSource|string|false|read-only|The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|createdDate|string|false|read-only|The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>|
|dataset|[[AccountDataset](#schemaaccountdataset)]|false|read-only|Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|id|integer(int64)|false|read-only|Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|isDeleted|boolean|false|read-only|Indicates if the provider account is deleted from the system.<b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET dataExtracts/userData</li></ul>|
|isManual|boolean|false|read-only|Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|lastUpdated|string|false|read-only|Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul>|
|oauthMigrationStatus|string|false|read-only|Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|providerId|integer(int64)|false|read-only|Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|requestId|string|false|read-only|Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>|
|status|string|false|read-only|The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|aggregationSource|SYSTEM|
|aggregationSource|USER|
|oauthMigrationStatus|IN_PROGRESS|
|oauthMigrationStatus|TO_BE_MIGRATED|
|oauthMigrationStatus|COMPLETED|
|status|LOGIN_IN_PROGRESS|
|status|USER_INPUT_REQUIRED|
|status|IN_PROGRESS|
|status|PARTIAL_SUCCESS|
|status|SUCCESS|
|status|FAILED|
|status|MIGRATION_IN_PROGRESS|

<h2 id="tocS_DataExtractsTransaction">DataExtractsTransaction</h2>
<!-- backwards compatibility -->
<a id="schemadataextractstransaction"></a>
<a id="schema_DataExtractsTransaction"></a>
<a id="tocSdataextractstransaction"></a>
<a id="tocsdataextractstransaction"></a>

```json
{
  "CONTAINER": "bank",
  "accountId": 0,
  "amount": {
    "amount": 0,
    "currency": "AUD"
  },
  "baseType": "CREDIT",
  "category": "string",
  "categoryId": 0,
  "categorySource": "SYSTEM",
  "categoryType": "TRANSFER",
  "checkNumber": "string",
  "commission": {
    "amount": 0,
    "currency": "AUD"
  },
  "createdDate": "string",
  "cusipNumber": "string",
  "date": "string",
  "description": {
    "consumer": "string",
    "original": "string",
    "security": "string",
    "simple": "string"
  },
  "detailCategoryId": 0,
  "highLevelCategoryId": 0,
  "holdingDescription": "string",
  "id": 0,
  "interest": {
    "amount": 0,
    "currency": "AUD"
  },
  "isDeleted": true,
  "isManual": true,
  "isin": "string",
  "lastUpdated": "string",
  "memo": "string",
  "merchant": {
    "address": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "sourceType": "string",
      "state": "string",
      "street": "string",
      "type": "HOME",
      "zip": "string"
    },
    "categoryLabel": [
      "string"
    ],
    "contact": {
      "email": "string",
      "phone": "string"
    },
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    },
    "id": "string",
    "name": "string",
    "source": "YODLEE",
    "website": "string"
  },
  "parentCategoryId": 0,
  "postDate": "string",
  "price": {
    "amount": 0,
    "currency": "AUD"
  },
  "principal": {
    "amount": 0,
    "currency": "AUD"
  },
  "quantity": 0,
  "runningBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "sedol": "string",
  "settleDate": "string",
  "sourceId": "string",
  "sourceType": "AGGREGATED",
  "status": "POSTED",
  "subType": "AUTH_HOLD",
  "symbol": "string",
  "transactionDate": "string",
  "type": "string",
  "valoren": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CONTAINER|string|false|read-only|The account's container.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>|
|accountId|integer(int64)|false|read-only|The account from which the transaction was made. This is basically the primary key of the account resource. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|amount|[Money](#schemamoney)|false|none|none|
|baseType|string|false|read-only|Indicates if the transaction appears as a debit or a credit transaction in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>|
|category|string|false|read-only|The name of the category assigned to the transaction. This is the category field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|categoryId|integer(int64)|false|read-only|The id of the category assigned to the transaction. This is the id field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|categorySource|string|false|read-only|Indicates the source of the category, i.e., categories derived by the system or assigned/provided by the consumer. This is the source field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>|
|categoryType|string|false|read-only|The categoryType of the category assigned to the transaction. This is the type field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|checkNumber|string|false|read-only|The checkNumber of the transaction.<br><br><b>Applicable containers</b>: bank<br>|
|commission|[Money](#schemamoney)|false|none|none|
|createdDate|string|false|read-only|none|
|cusipNumber|string|false|read-only|The CUSIP (Committee on Uniform Securities Identification Procedures) identifies the financial instruments in the United States and Canada.<br><b><br><b>Note</b></b>: The CUSIP number field applies only to trade related transactions.<br><br><b>Applicable containers</b>: investment<br>|
|date|string|false|read-only|The value provided will be either postDate or transactionDate. postDate takes higher priority than transactionDate, except for the investment container as only transactionDate is available. The availability of postDate or transactionDate depends on the provider site.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|description|[Description](#schemadescription)|false|none|none|
|detailCategoryId|integer(int64)|false|read-only|The id of the detail category that is assigned to the transaction. The supported values are provided by GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard<br>|
|highLevelCategoryId|integer(int64)|false|read-only|The high level category assigned to the transaction. The supported values are provided by the GET transactions/categories. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|holdingDescription|string|false|read-only|For transactions involving securities, this captures the securities description.<br><br><b>Applicable containers</b>: investment<br>|
|id|integer(int64)|false|read-only|An unique identifier for the transaction. The combination of the id and account container are unique in the system. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|interest|[Money](#schemamoney)|false|none|none|
|isDeleted|boolean|false|read-only|Indicates if the transaction is marked as deleted.<b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET dataExtracts/userData</li></ul>|
|isManual|boolean|false|read-only|Indicates if the transaction is aggregated from the FI site or the consumer has manually created the transaction using the application or an API. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|isin|string|false|read-only|International Securities Identification Number (ISIN) standard is used worldwide to identify specific securities.<br><br><b>Applicable containers</b>: investment<br>|
|lastUpdated|string|false|read-only|none|
|memo|string|false|read-only|Additional notes provided by the user for a particular  transaction through application or API services. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|merchant|[Merchant](#schemamerchant)|false|none|none|
|parentCategoryId|integer(int64)|false|read-only|The parentCategoryId of the category assigned to the transaction.<br><b>Note</b>: This field will be provided in the response if the transaction is assigned to a user-created category. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|postDate|string|false|read-only|The date on which the transaction is posted to the account.<br><br><b>Applicable containers</b>: bank,creditCard,insurance,loan<br>|
|price|[Money](#schemamoney)|false|none|none|
|principal|[Money](#schemamoney)|false|none|none|
|quantity|number(double)|false|read-only|The quantity associated with the transaction.<br><b>Note</b>: The quantity field applies only to trade-related transactions.<br><br><b>Applicable containers</b>: investment<br>|
|runningBalance|[Money](#schemamoney)|false|none|none|
|sedol|string|false|read-only|SEDOL stands for Stock Exchange Daily Official List, a list of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><br><b>Applicable containers</b>: investment<br>|
|settleDate|string|false|read-only|It is the date on which the transaction is finalized, that is, the date the ownership of the security is transferred to the buyer. The settlement date is usually few days after the transaction date.<br><br><b>Applicable containers</b>: investment<br>|
|sourceId|string|false|read-only|A unique ID that the provider site has assigned to the transaction. The source ID is only available for the pre-populated accounts.<br>Pre-populated accounts are the accounts that the FI customers shares with Yodlee, so that the user does not have to add or aggregate those accounts.|
|sourceType|string|false|read-only|The source through which the transaction is added to the Yodlee system.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loann<br><b>Applicable Values:</b><br>|
|status|string|false|read-only|The status of the transaction: pending or posted.<br><b>Note</b>: Most FI sites only display posted transactions. If the FI site displays transaction status, same will be aggregated.  <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>|
|subType|string|false|read-only|The transaction subtype field provides a detailed transaction type. For example, purchase is a transaction type and the transaction subtype field indicates if the purchase was made using a debit or credit card.<br><b>Note</b>: The transaction subtype field is available only in the United States, Canada, United Kingdom, and India.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|symbol|string|false|read-only|The symbol of the security being traded.<br><b>Note</b>: The settle date field applies only to trade-related transactions. <br><br><b>Applicable containers</b>: investment<br>|
|transactionDate|string|false|read-only|The date the transaction happens in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|type|string|false|read-only|The nature of the transaction, i.e., deposit, refund, payment, etc.<br><b>Note</b>: The transaction type field is available only for the United States, Canada, United Kingdom, and India based provider sites. <br><br><b>Applicable containers</b>: bank,creditCard,investment<br>|
|valoren|string|false|read-only|It is an identification number that is assigned to financial instruments such as stocks and bonds trading in Switzerland.<br><br><b>Applicable containers</b>: investment<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|CONTAINER|bank|
|CONTAINER|creditCard|
|CONTAINER|investment|
|CONTAINER|insurance|
|CONTAINER|loan|
|CONTAINER|reward|
|CONTAINER|realEstate|
|CONTAINER|otherAssets|
|CONTAINER|otherLiabilities|
|baseType|CREDIT|
|baseType|DEBIT|
|categorySource|SYSTEM|
|categorySource|USER|
|categoryType|TRANSFER|
|categoryType|DEFERRED_COMPENSATION|
|categoryType|UNCATEGORIZE|
|categoryType|INCOME|
|categoryType|EXPENSE|
|sourceType|AGGREGATED|
|sourceType|MANUAL|
|status|POSTED|
|status|PENDING|
|status|SCHEDULED|
|status|FAILED|
|status|CLEARED|
|subType|AUTH_HOLD|
|subType|AUTH_REQUEST|
|subType|OVERDRAFT_CHARGE|
|subType|CREDIT_ADJUSTMENT|
|subType|PIN_DEBIT|
|subType|BANK_DIRECT_DEPOSIT|
|subType|DIVIDEND_DEPOSIT|
|subType|INTEREST_SAVINGS|
|subType|INTEREST_ADJUSTMENT|
|subType|ONLINE_PURCHASE|
|subType|PURCHASED_WITH_CHECK|
|subType|RECURRING_BILLING|
|subType|TAX_PAYMENT|
|subType|PAYMENT_BY_CHECK|
|subType|PAYMENT_PLAN|
|subType|FEE_REFUND|
|subType|WIRE_TRANSFER_CHARGE|
|subType|ACCOUNT_TO_ACCOUNT_TRANSFER|
|subType|BANK_TO_BANK_TRANSACTION|
|subType|BANK_TO_NON_BANK_ACCOUNT_TRANSFER|
|subType|CASH_WITHDRAWAL_AT_FI|
|subType|ATM_CASH_WITHDRAWAL|
|subType|AUTH_PROCESSING|
|subType|AUTH_RELEASE|
|subType|PRE_AUTH|
|subType|AUTH_COMPLETE|
|subType|AUTH_VOID|
|subType|BALANCE_ENQUIRY|
|subType|ACCOUNT_VERIFICATION|
|subType|PRE_AUTH_COMPLETION|
|subType|SERVICE_CHARGE|
|subType|SERVICE_CHARGE_FEE_REFUND|
|subType|RETURNED_CHECK_CHARGE|
|subType|RETURNED_CHECK_REIMBURSEMENT|
|subType|CASH_ADVANCE|
|subType|BILL_PAY_CHARGE|
|subType|CHECK_IMAGE_SERVICE_CHARGE|
|subType|OVERDRAFT_PROTECTION_CHARGE|
|subType|STOP_PAYMENT_CHARGE|
|subType|CHECKS_ORDERING_CHARGE|
|subType|MONTHLY_MAINTENANCE_CHARGE|
|subType|DEBIT_CARD_FEE|
|subType|CONVENIENCE_FEE|
|subType|PERSONAL_LOAN_CREDIT|
|subType|CREDIT_CARD_CREDIT|
|subType|AUTO_LOAN|
|subType|HOME_LOAN_MORTGAGE|
|subType|SHORT_TERM_CREDIT|
|subType|SIGNATURE_DEBIT|
|subType|CONTACT_LESS_DEBIT|
|subType|DEFERRED_DEPOSIT|
|subType|DEFERRED_BILL_PAY|
|subType|INSTALLMENT_PAYMENT|
|subType|RECURRING_SUBSCRIPTION_PAYMENT|
|subType|HOLD_CHECK_PAYMENT|
|subType|CAPITAL_GAINS_DISTIBUTION|
|subType|CG_LONG_TERM_DEPOSIT|
|subType|OPEN_SALE_DEPOSIT|
|subType|INTEREST__CHECK|
|subType|PURCHASE_VOID|
|subType|PURCHASE_WITH_CREDIT_CARD|
|subType|PURCHASE_WITH_DEBIT_CARD|
|subType|CHARGE_A_REPEAT_CUSTOMER|
|subType|DOWN_PAYMENT_OR_ANNUITY_PAYMENT_OR_DIRECT_PAYMENT|
|subType|FEE_PAYMENT|
|subType|FINANCE_CHARGE_REFUND|
|subType|TRANSACTION_VOID|
|subType|FEE_VOID|
|subType|DEBIT_CARD_WITHDRAWAL_AT_STORE|
|subType|ELECTRONIC_PAYMENT|
|subType|ACH_DEBIT|
|subType|ATM_TELLER_DEPOSIT|
|subType|POS_DEBIT|
|subType|BANK_ADJUSTMENT|
|subType|CHARGES_FEES|
|subType|INTEREST|
|subType|DEPOSITS_CREDITS|
|subType|PAYMENT|
|subType|PURCHASE|
|subType|REFUND|
|subType|TRANSFER|
|subType|WITHDRAWAL|
|subType|OTHER_DEPOSITS|
|subType|OTHER_WITHDRAWALS|
|subType|ADJUSTMENT|
|subType|FINANCE_CHARGE|
|subType|OTHER_CHARGES_FEES|
|subType|ANNUAL_FEE|
|subType|DEPOSIT|
|subType|DIRECT_DEPOSIT_SALARY|
|subType|INVESTMENT_INCOME_CASH|
|subType|SSA|
|subType|REWARDS|
|subType|CHECK_DEPOSIT|
|subType|MOBILE_REMOTE_DEPOSIT|
|subType|TELLER_DEPOSIT|
|subType|TAX_REFUND|
|subType|CREDIT_CARD_PAYMENT|
|subType|INSURANCE_PAYMENT|
|subType|UTILITIES_PAYMENT|
|subType|CHILD_SUPPORT|
|subType|LOAN|
|subType|PERSONAL_LOAN|
|subType|STUDENT_LOAN|
|subType|SALES_TAX|
|subType|REIMBURSEMENT|
|subType|BALANCE_TRANSFER|
|subType|WIRE_TRANSFER|
|subType|OVERDRAFT_PROTECTION|
|subType|DEBIT|
|subType|CREDIT|
|subType|NSF_FEES|

<h2 id="tocS_DataExtractsUser">DataExtractsUser</h2>
<!-- backwards compatibility -->
<a id="schemadataextractsuser"></a>
<a id="schema_DataExtractsUser"></a>
<a id="tocSdataextractsuser"></a>
<a id="tocsdataextractsuser"></a>

```json
{
  "loginName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loginName|string|false|read-only|none|

<h2 id="tocS_DataExtractsUserData">DataExtractsUserData</h2>
<!-- backwards compatibility -->
<a id="schemadataextractsuserdata"></a>
<a id="schema_DataExtractsUserData"></a>
<a id="tocSdataextractsuserdata"></a>
<a id="tocsdataextractsuserdata"></a>

```json
{
  "account": [
    {
      "401kLoan": {
        "amount": 0,
        "currency": "AUD"
      },
      "CONTAINER": "bank",
      "accountName": "string",
      "accountNumber": "string",
      "accountStatus": "ACTIVE",
      "accountType": "string",
      "address": {
        "address1": "string",
        "address2": "string",
        "address3": "string",
        "city": "string",
        "country": "string",
        "sourceType": "string",
        "state": "string",
        "street": "string",
        "type": "HOME",
        "zip": "string"
      },
      "aggregationSource": "SYSTEM",
      "amountDue": {
        "amount": 0,
        "currency": "AUD"
      },
      "annualPercentageYield": 0,
      "annuityBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "apr": 0,
      "associatedProviderAccountId": [
        0
      ],
      "availableBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "availableCash": {
        "amount": 0,
        "currency": "AUD"
      },
      "availableCredit": {
        "amount": 0,
        "currency": "AUD"
      },
      "balance": {
        "amount": 0,
        "currency": "AUD"
      },
      "bankTransferCode": [
        {
          "id": "string",
          "type": "BSB"
        }
      ],
      "cash": {
        "amount": 0,
        "currency": "AUD"
      },
      "cashApr": 0,
      "cashValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "classification": "OTHER",
      "collateral": "string",
      "coverage": [
        {
          "amount": [
            {
              "cover": {
                "amount": 0,
                "currency": "AUD"
              },
              "limitType": "IN_NETWORK",
              "met": {
                "amount": 0,
                "currency": "AUD"
              },
              "type": "DEDUCTIBLE",
              "unitType": "PER_FAMILY"
            }
          ],
          "endDate": "string",
          "planType": "PPO",
          "startDate": "string",
          "type": "VISION"
        }
      ],
      "createdDate": "string",
      "currentBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "currentLevel": "string",
      "dataset": [
        {
          "additionalStatus": "LOGIN_IN_PROGRESS",
          "lastUpdateAttempt": "string",
          "lastUpdated": "string",
          "name": "BASIC_AGG_DATA",
          "nextUpdateScheduled": "string",
          "updateEligibility": "ALLOW_UPDATE"
        }
      ],
      "deathBenefit": {
        "amount": 0,
        "currency": "AUD"
      },
      "derivedApr": 0,
      "displayedName": "string",
      "dueDate": "string",
      "enrollmentDate": "string",
      "escrowBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "estimatedDate": "string",
      "expirationDate": "string",
      "faceAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "frequency": "DAILY",
      "guarantor": "string",
      "homeInsuranceType": "HOME_OWNER",
      "homeValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "id": 0,
      "includeInNetWorth": true,
      "interestPaidLastYear": {
        "amount": 0,
        "currency": "AUD"
      },
      "interestPaidYTD": {
        "amount": 0,
        "currency": "AUD"
      },
      "interestRate": 0,
      "interestRateType": "FIXED",
      "isAsset": true,
      "isDeleted": true,
      "isManual": true,
      "lastEmployeeContributionAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "lastEmployeeContributionDate": "string",
      "lastPayment": {
        "amount": 0,
        "currency": "AUD"
      },
      "lastPaymentAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "lastPaymentDate": "string",
      "lastUpdated": "string",
      "lender": "string",
      "lifeInsuranceType": "OTHER",
      "loanPayByDate": "string",
      "loanPayoffAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "loanPayoffDetails": {
        "outstandingBalance": {
          "amount": 0,
          "currency": "AUD"
        },
        "payByDate": "string",
        "payoffAmount": {
          "amount": 0,
          "currency": "AUD"
        }
      },
      "marginBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "maturityAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "maturityDate": "string",
      "memo": "string",
      "minimumAmountDue": {
        "amount": 0,
        "currency": "AUD"
      },
      "moneyMarketBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "nextLevel": "string",
      "nickname": "string",
      "oauthMigrationStatus": "IN_PROGRESS",
      "originalLoanAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "originationDate": "string",
      "overDraftLimit": {
        "amount": 0,
        "currency": "AUD"
      },
      "policyEffectiveDate": "string",
      "policyFromDate": "string",
      "policyStatus": "ACTIVE",
      "policyTerm": "string",
      "policyToDate": "string",
      "premium": {
        "amount": 0,
        "currency": "AUD"
      },
      "premiumPaymentTerm": "string",
      "primaryRewardUnit": "string",
      "principalBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "providerAccountId": 0,
      "providerId": "string",
      "providerName": "string",
      "recurringPayment": {
        "amount": 0,
        "currency": "AUD"
      },
      "remainingBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "repaymentPlanType": "STANDARD",
      "rewardBalance": [
        {
          "balance": 0,
          "balanceToLevel": "string",
          "balanceToReward": "string",
          "balanceType": "EXPIRING_BALANCE",
          "description": "string",
          "expiryDate": "string",
          "units": "string"
        }
      ],
      "runningBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "shortBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "sourceAccountStatus": "IN_REPAYMENT",
      "sourceId": "string",
      "term": "string",
      "totalCashLimit": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalCreditLimit": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalCreditLine": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalUnvestedBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "totalVestedBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "userClassification": "BUSINESS",
      "valuationType": "SYSTEM"
    }
  ],
  "holding": [
    {
      "accountId": 0,
      "accruedIncome": {
        "amount": 0,
        "currency": "AUD"
      },
      "accruedInterest": {
        "amount": 0,
        "currency": "AUD"
      },
      "contractQuantity": 0,
      "costBasis": {
        "amount": 0,
        "currency": "AUD"
      },
      "couponRate": 0,
      "createdDate": "string",
      "cusipNumber": "string",
      "description": "string",
      "enrichedDescription": "string",
      "exercisedQuantity": 0,
      "expirationDate": "string",
      "grantDate": "string",
      "holdingType": "stock",
      "id": 0,
      "interestRate": 0,
      "isShort": true,
      "isin": "string",
      "lastUpdated": "string",
      "matchStatus": "string",
      "maturityDate": "string",
      "optionType": "put",
      "price": {
        "amount": 0,
        "currency": "AUD"
      },
      "providerAccountId": 0,
      "quantity": 0,
      "securityStyle": "string",
      "securityType": "string",
      "sedol": "string",
      "spread": {
        "amount": 0,
        "currency": "AUD"
      },
      "strikePrice": {
        "amount": 0,
        "currency": "AUD"
      },
      "symbol": "string",
      "term": "string",
      "unvestedQuantity": 0,
      "unvestedValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "value": {
        "amount": 0,
        "currency": "AUD"
      },
      "vestedQuantity": 0,
      "vestedSharesExercisable": 0,
      "vestedValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "vestingDate": "string"
    }
  ],
  "providerAccount": [
    {
      "aggregationSource": "SYSTEM",
      "createdDate": "string",
      "dataset": [
        {
          "additionalStatus": "LOGIN_IN_PROGRESS",
          "lastUpdateAttempt": "string",
          "lastUpdated": "string",
          "name": "BASIC_AGG_DATA",
          "nextUpdateScheduled": "string",
          "updateEligibility": "ALLOW_UPDATE"
        }
      ],
      "id": 0,
      "isDeleted": true,
      "isManual": true,
      "lastUpdated": "string",
      "oauthMigrationStatus": "IN_PROGRESS",
      "providerId": 0,
      "requestId": "string",
      "status": "LOGIN_IN_PROGRESS"
    }
  ],
  "totalTransactionsCount": 0,
  "transaction": [
    {
      "CONTAINER": "bank",
      "accountId": 0,
      "amount": {
        "amount": 0,
        "currency": "AUD"
      },
      "baseType": "CREDIT",
      "category": "string",
      "categoryId": 0,
      "categorySource": "SYSTEM",
      "categoryType": "TRANSFER",
      "checkNumber": "string",
      "commission": {
        "amount": 0,
        "currency": "AUD"
      },
      "createdDate": "string",
      "cusipNumber": "string",
      "date": "string",
      "description": {
        "consumer": "string",
        "original": "string",
        "security": "string",
        "simple": "string"
      },
      "detailCategoryId": 0,
      "highLevelCategoryId": 0,
      "holdingDescription": "string",
      "id": 0,
      "interest": {
        "amount": 0,
        "currency": "AUD"
      },
      "isDeleted": true,
      "isManual": true,
      "isin": "string",
      "lastUpdated": "string",
      "memo": "string",
      "merchant": {
        "address": {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "city": "string",
          "country": "string",
          "sourceType": "string",
          "state": "string",
          "street": "string",
          "type": "HOME",
          "zip": "string"
        },
        "categoryLabel": [
          "string"
        ],
        "contact": {
          "email": "string",
          "phone": "string"
        },
        "coordinates": {
          "latitude": 0,
          "longitude": 0
        },
        "id": "string",
        "name": "string",
        "source": "YODLEE",
        "website": "string"
      },
      "parentCategoryId": 0,
      "postDate": "string",
      "price": {
        "amount": 0,
        "currency": "AUD"
      },
      "principal": {
        "amount": 0,
        "currency": "AUD"
      },
      "quantity": 0,
      "runningBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "sedol": "string",
      "settleDate": "string",
      "sourceId": "string",
      "sourceType": "AGGREGATED",
      "status": "POSTED",
      "subType": "AUTH_HOLD",
      "symbol": "string",
      "transactionDate": "string",
      "type": "string",
      "valoren": "string"
    }
  ],
  "user": {
    "loginName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[[DataExtractsAccount](#schemadataextractsaccount)]|false|read-only|none|
|holding|[[DataExtractsHolding](#schemadataextractsholding)]|false|read-only|none|
|providerAccount|[[DataExtractsProviderAccount](#schemadataextractsprovideraccount)]|false|read-only|none|
|totalTransactionsCount|integer(int64)|false|read-only|none|
|transaction|[[DataExtractsTransaction](#schemadataextractstransaction)]|false|read-only|none|
|user|[DataExtractsUser](#schemadataextractsuser)|false|none|none|

<h2 id="tocS_DataExtractsUserDataResponse">DataExtractsUserDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemadataextractsuserdataresponse"></a>
<a id="schema_DataExtractsUserDataResponse"></a>
<a id="tocSdataextractsuserdataresponse"></a>
<a id="tocsdataextractsuserdataresponse"></a>

```json
{
  "userData": [
    {
      "account": [
        {
          "401kLoan": {
            "amount": 0,
            "currency": "AUD"
          },
          "CONTAINER": "bank",
          "accountName": "string",
          "accountNumber": "string",
          "accountStatus": "ACTIVE",
          "accountType": "string",
          "address": {
            "address1": "string",
            "address2": "string",
            "address3": "string",
            "city": "string",
            "country": "string",
            "sourceType": "string",
            "state": "string",
            "street": "string",
            "type": "HOME",
            "zip": "string"
          },
          "aggregationSource": "SYSTEM",
          "amountDue": {
            "amount": 0,
            "currency": "AUD"
          },
          "annualPercentageYield": 0,
          "annuityBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "apr": 0,
          "associatedProviderAccountId": [
            0
          ],
          "availableBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "availableCash": {
            "amount": 0,
            "currency": "AUD"
          },
          "availableCredit": {
            "amount": 0,
            "currency": "AUD"
          },
          "balance": {
            "amount": 0,
            "currency": "AUD"
          },
          "bankTransferCode": [
            {
              "id": "string",
              "type": "BSB"
            }
          ],
          "cash": {
            "amount": 0,
            "currency": "AUD"
          },
          "cashApr": 0,
          "cashValue": {
            "amount": 0,
            "currency": "AUD"
          },
          "classification": "OTHER",
          "collateral": "string",
          "coverage": [
            {
              "amount": [
                {
                  "cover": {
                    "amount": 0,
                    "currency": "AUD"
                  },
                  "limitType": "IN_NETWORK",
                  "met": {
                    "amount": 0,
                    "currency": "AUD"
                  },
                  "type": "DEDUCTIBLE",
                  "unitType": "PER_FAMILY"
                }
              ],
              "endDate": "string",
              "planType": "PPO",
              "startDate": "string",
              "type": "VISION"
            }
          ],
          "createdDate": "string",
          "currentBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "currentLevel": "string",
          "dataset": [
            {
              "additionalStatus": "LOGIN_IN_PROGRESS",
              "lastUpdateAttempt": "string",
              "lastUpdated": "string",
              "name": "BASIC_AGG_DATA",
              "nextUpdateScheduled": "string",
              "updateEligibility": "ALLOW_UPDATE"
            }
          ],
          "deathBenefit": {
            "amount": 0,
            "currency": "AUD"
          },
          "derivedApr": 0,
          "displayedName": "string",
          "dueDate": "string",
          "enrollmentDate": "string",
          "escrowBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "estimatedDate": "string",
          "expirationDate": "string",
          "faceAmount": {
            "amount": 0,
            "currency": "AUD"
          },
          "frequency": "DAILY",
          "guarantor": "string",
          "homeInsuranceType": "HOME_OWNER",
          "homeValue": {
            "amount": 0,
            "currency": "AUD"
          },
          "id": 0,
          "includeInNetWorth": true,
          "interestPaidLastYear": {
            "amount": 0,
            "currency": "AUD"
          },
          "interestPaidYTD": {
            "amount": 0,
            "currency": "AUD"
          },
          "interestRate": 0,
          "interestRateType": "FIXED",
          "isAsset": true,
          "isDeleted": true,
          "isManual": true,
          "lastEmployeeContributionAmount": {
            "amount": 0,
            "currency": "AUD"
          },
          "lastEmployeeContributionDate": "string",
          "lastPayment": {
            "amount": 0,
            "currency": "AUD"
          },
          "lastPaymentAmount": {
            "amount": 0,
            "currency": "AUD"
          },
          "lastPaymentDate": "string",
          "lastUpdated": "string",
          "lender": "string",
          "lifeInsuranceType": "OTHER",
          "loanPayByDate": "string",
          "loanPayoffAmount": {
            "amount": 0,
            "currency": "AUD"
          },
          "loanPayoffDetails": {
            "outstandingBalance": {
              "amount": 0,
              "currency": "AUD"
            },
            "payByDate": "string",
            "payoffAmount": {
              "amount": 0,
              "currency": "AUD"
            }
          },
          "marginBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "maturityAmount": {
            "amount": 0,
            "currency": "AUD"
          },
          "maturityDate": "string",
          "memo": "string",
          "minimumAmountDue": {
            "amount": 0,
            "currency": "AUD"
          },
          "moneyMarketBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "nextLevel": "string",
          "nickname": "string",
          "oauthMigrationStatus": "IN_PROGRESS",
          "originalLoanAmount": {
            "amount": 0,
            "currency": "AUD"
          },
          "originationDate": "string",
          "overDraftLimit": {
            "amount": 0,
            "currency": "AUD"
          },
          "policyEffectiveDate": "string",
          "policyFromDate": "string",
          "policyStatus": "ACTIVE",
          "policyTerm": "string",
          "policyToDate": "string",
          "premium": {
            "amount": 0,
            "currency": "AUD"
          },
          "premiumPaymentTerm": "string",
          "primaryRewardUnit": "string",
          "principalBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "providerAccountId": 0,
          "providerId": "string",
          "providerName": "string",
          "recurringPayment": {
            "amount": 0,
            "currency": "AUD"
          },
          "remainingBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "repaymentPlanType": "STANDARD",
          "rewardBalance": [
            {
              "balance": 0,
              "balanceToLevel": "string",
              "balanceToReward": "string",
              "balanceType": "EXPIRING_BALANCE",
              "description": "string",
              "expiryDate": "string",
              "units": "string"
            }
          ],
          "runningBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "shortBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "sourceAccountStatus": "IN_REPAYMENT",
          "sourceId": "string",
          "term": "string",
          "totalCashLimit": {
            "amount": 0,
            "currency": "AUD"
          },
          "totalCreditLimit": {
            "amount": 0,
            "currency": "AUD"
          },
          "totalCreditLine": {
            "amount": 0,
            "currency": "AUD"
          },
          "totalUnvestedBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "totalVestedBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "userClassification": "BUSINESS",
          "valuationType": "SYSTEM"
        }
      ],
      "holding": [
        {
          "accountId": 0,
          "accruedIncome": {
            "amount": 0,
            "currency": "AUD"
          },
          "accruedInterest": {
            "amount": 0,
            "currency": "AUD"
          },
          "contractQuantity": 0,
          "costBasis": {
            "amount": 0,
            "currency": "AUD"
          },
          "couponRate": 0,
          "createdDate": "string",
          "cusipNumber": "string",
          "description": "string",
          "enrichedDescription": "string",
          "exercisedQuantity": 0,
          "expirationDate": "string",
          "grantDate": "string",
          "holdingType": "stock",
          "id": 0,
          "interestRate": 0,
          "isShort": true,
          "isin": "string",
          "lastUpdated": "string",
          "matchStatus": "string",
          "maturityDate": "string",
          "optionType": "put",
          "price": {
            "amount": 0,
            "currency": "AUD"
          },
          "providerAccountId": 0,
          "quantity": 0,
          "securityStyle": "string",
          "securityType": "string",
          "sedol": "string",
          "spread": {
            "amount": 0,
            "currency": "AUD"
          },
          "strikePrice": {
            "amount": 0,
            "currency": "AUD"
          },
          "symbol": "string",
          "term": "string",
          "unvestedQuantity": 0,
          "unvestedValue": {
            "amount": 0,
            "currency": "AUD"
          },
          "value": {
            "amount": 0,
            "currency": "AUD"
          },
          "vestedQuantity": 0,
          "vestedSharesExercisable": 0,
          "vestedValue": {
            "amount": 0,
            "currency": "AUD"
          },
          "vestingDate": "string"
        }
      ],
      "providerAccount": [
        {
          "aggregationSource": "SYSTEM",
          "createdDate": "string",
          "dataset": [
            {
              "additionalStatus": "LOGIN_IN_PROGRESS",
              "lastUpdateAttempt": "string",
              "lastUpdated": "string",
              "name": "BASIC_AGG_DATA",
              "nextUpdateScheduled": "string",
              "updateEligibility": "ALLOW_UPDATE"
            }
          ],
          "id": 0,
          "isDeleted": true,
          "isManual": true,
          "lastUpdated": "string",
          "oauthMigrationStatus": "IN_PROGRESS",
          "providerId": 0,
          "requestId": "string",
          "status": "LOGIN_IN_PROGRESS"
        }
      ],
      "totalTransactionsCount": 0,
      "transaction": [
        {
          "CONTAINER": "bank",
          "accountId": 0,
          "amount": {
            "amount": 0,
            "currency": "AUD"
          },
          "baseType": "CREDIT",
          "category": "string",
          "categoryId": 0,
          "categorySource": "SYSTEM",
          "categoryType": "TRANSFER",
          "checkNumber": "string",
          "commission": {
            "amount": 0,
            "currency": "AUD"
          },
          "createdDate": "string",
          "cusipNumber": "string",
          "date": "string",
          "description": {
            "consumer": "string",
            "original": "string",
            "security": "string",
            "simple": "string"
          },
          "detailCategoryId": 0,
          "highLevelCategoryId": 0,
          "holdingDescription": "string",
          "id": 0,
          "interest": {
            "amount": 0,
            "currency": "AUD"
          },
          "isDeleted": true,
          "isManual": true,
          "isin": "string",
          "lastUpdated": "string",
          "memo": "string",
          "merchant": {
            "address": {
              "address1": "string",
              "address2": "string",
              "address3": "string",
              "city": "string",
              "country": "string",
              "sourceType": "string",
              "state": "string",
              "street": "string",
              "type": "HOME",
              "zip": "string"
            },
            "categoryLabel": [
              "string"
            ],
            "contact": {
              "email": "string",
              "phone": "string"
            },
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            },
            "id": "string",
            "name": "string",
            "source": "YODLEE",
            "website": "string"
          },
          "parentCategoryId": 0,
          "postDate": "string",
          "price": {
            "amount": 0,
            "currency": "AUD"
          },
          "principal": {
            "amount": 0,
            "currency": "AUD"
          },
          "quantity": 0,
          "runningBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "sedol": "string",
          "settleDate": "string",
          "sourceId": "string",
          "sourceType": "AGGREGATED",
          "status": "POSTED",
          "subType": "AUTH_HOLD",
          "symbol": "string",
          "transactionDate": "string",
          "type": "string",
          "valoren": "string"
        }
      ],
      "user": {
        "loginName": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userData|[[DataExtractsUserData](#schemadataextractsuserdata)]|false|read-only|none|

<h2 id="tocS_DerivedCategorySummary">DerivedCategorySummary</h2>
<!-- backwards compatibility -->
<a id="schemaderivedcategorysummary"></a>
<a id="schema_DerivedCategorySummary"></a>
<a id="tocSderivedcategorysummary"></a>
<a id="tocsderivedcategorysummary"></a>

```json
{
  "categoryId": 0,
  "categoryName": "string",
  "creditTotal": {
    "amount": 0,
    "currency": "AUD"
  },
  "debitTotal": {
    "amount": 0,
    "currency": "AUD"
  },
  "details": [
    {
      "creditTotal": {
        "amount": 0,
        "currency": "AUD"
      },
      "date": "string",
      "debitTotal": {
        "amount": 0,
        "currency": "AUD"
      }
    }
  ],
  "links": {
    "transactions": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|integer(int64)|false|read-only|Id of the category. This information is provided by transactions/categories service.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br>|
|categoryName|string|false|read-only|The name of the category.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br>|
|creditTotal|[Money](#schemamoney)|false|none|none|
|debitTotal|[Money](#schemamoney)|false|none|none|
|details|[[DerivedCategorySummaryDetails](#schemaderivedcategorysummarydetails)]|false|read-only|Credit and debit summary per date.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br>|
|links|[DerivedTransactionsLinks](#schemaderivedtransactionslinks)|false|none|none|

<h2 id="tocS_DerivedCategorySummaryDetails">DerivedCategorySummaryDetails</h2>
<!-- backwards compatibility -->
<a id="schemaderivedcategorysummarydetails"></a>
<a id="schema_DerivedCategorySummaryDetails"></a>
<a id="tocSderivedcategorysummarydetails"></a>
<a id="tocsderivedcategorysummarydetails"></a>

```json
{
  "creditTotal": {
    "amount": 0,
    "currency": "AUD"
  },
  "date": "string",
  "debitTotal": {
    "amount": 0,
    "currency": "AUD"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creditTotal|[Money](#schemamoney)|false|none|none|
|date|string|false|read-only|Date on which the credit and debit transactions had occured.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br>|
|debitTotal|[Money](#schemamoney)|false|none|none|

<h2 id="tocS_DerivedHolding">DerivedHolding</h2>
<!-- backwards compatibility -->
<a id="schemaderivedholding"></a>
<a id="schema_DerivedHolding"></a>
<a id="tocSderivedholding"></a>
<a id="tocsderivedholding"></a>

```json
{
  "accountId": 0,
  "accruedIncome": {
    "amount": 0,
    "currency": "AUD"
  },
  "accruedInterest": {
    "amount": 0,
    "currency": "AUD"
  },
  "assetClassification": {
    "allocation": 0,
    "classificationType": "string",
    "classificationValue": "string"
  },
  "contractQuantity": 0,
  "costBasis": {
    "amount": 0,
    "currency": "AUD"
  },
  "couponRate": 0,
  "createdDate": "string",
  "cusipNumber": "string",
  "description": "string",
  "enrichedDescription": "string",
  "exercisedQuantity": 0,
  "expirationDate": "string",
  "grantDate": "string",
  "holdingType": "stock",
  "id": 0,
  "interestRate": 0,
  "isShort": true,
  "isin": "string",
  "lastUpdated": "string",
  "matchStatus": "string",
  "maturityDate": "string",
  "optionType": "put",
  "price": {
    "amount": 0,
    "currency": "AUD"
  },
  "providerAccountId": 0,
  "quantity": 0,
  "securityStyle": "string",
  "securityType": "string",
  "sedol": "string",
  "spread": {
    "amount": 0,
    "currency": "AUD"
  },
  "strikePrice": {
    "amount": 0,
    "currency": "AUD"
  },
  "symbol": "string",
  "term": "string",
  "unvestedQuantity": 0,
  "unvestedValue": {
    "amount": 0,
    "currency": "AUD"
  },
  "value": {
    "amount": 0,
    "currency": "AUD"
  },
  "vestedQuantity": 0,
  "vestedSharesExercisable": 0,
  "vestedValue": {
    "amount": 0,
    "currency": "AUD"
  },
  "vestingDate": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int64)|false|read-only|Unique identifier of the account to which the security is linked.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|accruedIncome|[Money](#schemamoney)|false|none|none|
|accruedInterest|[Money](#schemamoney)|false|none|none|
|assetClassification|[AssetClassification](#schemaassetclassification)|false|none|none|
|contractQuantity|number(double)|false|read-only|The quantity of tradeable units in a contract.<br><b>Note</b>: The contract quantity field is only applicable to commodity and currency.<br><br><b>Applicable containers</b>: investment<br>|
|costBasis|[Money](#schemamoney)|false|none|none|
|couponRate|number(double)|false|read-only|The stated interest rate for a bond.<br><br><b>Applicable containers</b>: investment<br>|
|createdDate|string|false|read-only|The date on which the holding is created in the Yodlee system.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|cusipNumber|string|false|read-only|The CUSIP (Committee on Uniform Securities Identification Procedures) identifies most the financial instruments in the United States and Canada.<br><br><b>Applicable containers</b>: investment<br>|
|description|string|false|read-only|The description (name) for the holding (E.g., Cisco Systems)<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types. <br><br><b>Applicable containers</b>: investment, insurance<br>|
|enrichedDescription|string|false|read-only|The enrichedDescription is the security description of the normalized holding<br><br><b>Applicable containers</b>: investment, insurance<br>|
|exercisedQuantity|number(double)|false|read-only|The quantity of the employee stock options that are already exercised or bought by the employee.<br><b>Note</b>: Once the employee stock options is exercised, they are either converted to cash value or equity positions depending on the FI. The exercised quantity field is only applicable to employee stock options.<br><br><b>Applicable containers</b>: investment<br>|
|expirationDate|string|false|read-only|The date on which an option, right or warrant expires.<br><b>Note</b>: The expiration date field is only applicable to options and employee stock options.<br><br><b>Applicable containers</b>: investment<br>|
|grantDate|string|false|read-only|The date on which equity awards like ESOP, RSU, etc., are issued or granted.<br><b>Note</b>: The grant date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>|
|holdingType|string|false|read-only|Type of holding<br><br><b>Applicable containers</b>: investment, insurance<br>|
|id|integer(int64)|false|read-only|Unique identifier for the security added in the system. This is the primary key of the holding resource.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|interestRate|number(double)|false|read-only|The interest rate on a CD.<br><b>Note</b>: The interest rate field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>|
|isShort|boolean|false|read-only|Indicates that the holding is a short trading.<br><br><b>Applicable containers</b>: investment<br>|
|isin|string|false|read-only|The ISIN (International Securities Identification Number) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Note</b>: The ISIN field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br>|
|lastUpdated|string|false|read-only|The date when the information was last updated in the system.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|matchStatus|string|false|read-only|Indicates the security match status id of the investment option identified during security normalization.<br><br><b>Applicable containers</b>: investment<br>|
|maturityDate|string|false|read-only|The stated maturity date of a bond or CD.<br><br><b>Applicable containers</b>: investment<br>|
|optionType|string|false|read-only|The type of the option position (i.e., put or call).<br><b>Note</b>: The option type field is only applicable to options.<br><br><b>Applicable containers</b>: investment<br><b>Applicable Values</b><br>|
|price|[Money](#schemamoney)|false|none|none|
|providerAccountId|integer(int64)|false|read-only|Unique identifier for the user's association with the provider.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|quantity|number(double)|false|read-only|The quantity held for the holding.<br><b>Note</b>: Only for bonds the quantity field indicates the normalized quantity and not the quantity aggregated from the site. The quantity field is only applicable to restricted stock units/awards, performance units, currency, and commodity.<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|securityStyle|string|false|read-only|Indicates the security style of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|securityType|string|false|read-only|Indicates the security type of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|sedol|string|false|read-only|The SEDOL (Stock Exchange Daily Official List) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br>|
|spread|[Money](#schemamoney)|false|none|none|
|strikePrice|[Money](#schemamoney)|false|none|none|
|symbol|string|false|read-only|The symbol of the security.<br><br><b>Applicable containers</b>: investment<br>|
|term|string|false|read-only|The fixed duration for which the bond or CD is issued.<br><b>Note</b>: The term field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>|
|unvestedQuantity|number(double)|false|read-only|Indicates the number of unvested quantity or units.<br><b>Note</b>: The unvested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>|
|unvestedValue|[Money](#schemamoney)|false|none|none|
|value|[Money](#schemamoney)|false|none|none|
|vestedQuantity|number(double)|false|read-only|The quantity of units or shares that are already vested on a vest date.<br><b>Note</b>: The vested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>|
|vestedSharesExercisable|number(double)|false|read-only|The number of vested shares that can be exercised by the employee. It is usually equal to the vested quantity.<br><b>Note</b>: The vested shares exercisable field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>|
|vestedValue|[Money](#schemamoney)|false|none|none|
|vestingDate|string|false|read-only|The date on which a RSU, RSA, or an employee stock options become vested.<br><b>Note</b>: The vesting date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|holdingType|stock|
|holdingType|mutualFund|
|holdingType|bond|
|holdingType|CD|
|holdingType|option|
|holdingType|moneyMarketFund|
|holdingType|other|
|holdingType|remic|
|holdingType|future|
|holdingType|commodity|
|holdingType|currency|
|holdingType|unitInvestmentTrust|
|holdingType|employeeStockOption|
|holdingType|insuranceAnnuity|
|holdingType|unknown|
|holdingType|preferredStock|
|holdingType|ETF|
|holdingType|warrants|
|holdingType|ETN|
|optionType|put|
|optionType|call|
|optionType|unknown|
|optionType|other|

<h2 id="tocS_DerivedHoldingSummaryResponse">DerivedHoldingSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderivedholdingsummaryresponse"></a>
<a id="schema_DerivedHoldingSummaryResponse"></a>
<a id="tocSderivedholdingsummaryresponse"></a>
<a id="tocsderivedholdingsummaryresponse"></a>

```json
{
  "holdingSummary": [
    {
      "account": [
        {
          "id": 0,
          "value": {
            "amount": 0,
            "currency": "AUD"
          }
        }
      ],
      "classificationType": "string",
      "classificationValue": "string",
      "holding": [
        {
          "accountId": 0,
          "accruedIncome": {
            "amount": 0,
            "currency": "AUD"
          },
          "accruedInterest": {
            "amount": 0,
            "currency": "AUD"
          },
          "assetClassification": {
            "allocation": 0,
            "classificationType": "string",
            "classificationValue": "string"
          },
          "contractQuantity": 0,
          "costBasis": {
            "amount": 0,
            "currency": "AUD"
          },
          "couponRate": 0,
          "createdDate": "string",
          "cusipNumber": "string",
          "description": "string",
          "enrichedDescription": "string",
          "exercisedQuantity": 0,
          "expirationDate": "string",
          "grantDate": "string",
          "holdingType": "stock",
          "id": 0,
          "interestRate": 0,
          "isShort": true,
          "isin": "string",
          "lastUpdated": "string",
          "matchStatus": "string",
          "maturityDate": "string",
          "optionType": "put",
          "price": {
            "amount": 0,
            "currency": "AUD"
          },
          "providerAccountId": 0,
          "quantity": 0,
          "securityStyle": "string",
          "securityType": "string",
          "sedol": "string",
          "spread": {
            "amount": 0,
            "currency": "AUD"
          },
          "strikePrice": {
            "amount": 0,
            "currency": "AUD"
          },
          "symbol": "string",
          "term": "string",
          "unvestedQuantity": 0,
          "unvestedValue": {
            "amount": 0,
            "currency": "AUD"
          },
          "value": {
            "amount": 0,
            "currency": "AUD"
          },
          "vestedQuantity": 0,
          "vestedSharesExercisable": 0,
          "vestedValue": {
            "amount": 0,
            "currency": "AUD"
          },
          "vestingDate": "string"
        }
      ],
      "value": {
        "amount": 0,
        "currency": "AUD"
      }
    }
  ],
  "link": {
    "holdings": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holdingSummary|[[DerivedHoldingsSummary](#schemaderivedholdingssummary)]|false|read-only|none|
|link|[DerivedHoldingsLinks](#schemaderivedholdingslinks)|false|none|none|

<h2 id="tocS_DerivedHoldingsAccount">DerivedHoldingsAccount</h2>
<!-- backwards compatibility -->
<a id="schemaderivedholdingsaccount"></a>
<a id="schema_DerivedHoldingsAccount"></a>
<a id="tocSderivedholdingsaccount"></a>
<a id="tocsderivedholdingsaccount"></a>

```json
{
  "id": 0,
  "value": {
    "amount": 0,
    "currency": "AUD"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|read-only|The primary key of the account resource and the unique identifier for the account.<br>Required Feature Enablement: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|value|[Money](#schemamoney)|false|none|none|

<h2 id="tocS_DerivedHoldingsLinks">DerivedHoldingsLinks</h2>
<!-- backwards compatibility -->
<a id="schemaderivedholdingslinks"></a>
<a id="schema_DerivedHoldingsLinks"></a>
<a id="tocSderivedholdingslinks"></a>
<a id="tocsderivedholdingslinks"></a>

```json
{
  "holdings": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holdings|string|false|read-only|none|

<h2 id="tocS_DerivedHoldingsSummary">DerivedHoldingsSummary</h2>
<!-- backwards compatibility -->
<a id="schemaderivedholdingssummary"></a>
<a id="schema_DerivedHoldingsSummary"></a>
<a id="tocSderivedholdingssummary"></a>
<a id="tocsderivedholdingssummary"></a>

```json
{
  "account": [
    {
      "id": 0,
      "value": {
        "amount": 0,
        "currency": "AUD"
      }
    }
  ],
  "classificationType": "string",
  "classificationValue": "string",
  "holding": [
    {
      "accountId": 0,
      "accruedIncome": {
        "amount": 0,
        "currency": "AUD"
      },
      "accruedInterest": {
        "amount": 0,
        "currency": "AUD"
      },
      "assetClassification": {
        "allocation": 0,
        "classificationType": "string",
        "classificationValue": "string"
      },
      "contractQuantity": 0,
      "costBasis": {
        "amount": 0,
        "currency": "AUD"
      },
      "couponRate": 0,
      "createdDate": "string",
      "cusipNumber": "string",
      "description": "string",
      "enrichedDescription": "string",
      "exercisedQuantity": 0,
      "expirationDate": "string",
      "grantDate": "string",
      "holdingType": "stock",
      "id": 0,
      "interestRate": 0,
      "isShort": true,
      "isin": "string",
      "lastUpdated": "string",
      "matchStatus": "string",
      "maturityDate": "string",
      "optionType": "put",
      "price": {
        "amount": 0,
        "currency": "AUD"
      },
      "providerAccountId": 0,
      "quantity": 0,
      "securityStyle": "string",
      "securityType": "string",
      "sedol": "string",
      "spread": {
        "amount": 0,
        "currency": "AUD"
      },
      "strikePrice": {
        "amount": 0,
        "currency": "AUD"
      },
      "symbol": "string",
      "term": "string",
      "unvestedQuantity": 0,
      "unvestedValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "value": {
        "amount": 0,
        "currency": "AUD"
      },
      "vestedQuantity": 0,
      "vestedSharesExercisable": 0,
      "vestedValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "vestingDate": "string"
    }
  ],
  "value": {
    "amount": 0,
    "currency": "AUD"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[[DerivedHoldingsAccount](#schemaderivedholdingsaccount)]|false|read-only|Accounts that contribute to the classification. <br><b>Required Feature Enablement</b>: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|classificationType|string|false|read-only|The classification type of the security. The supported asset classification type and the values are provided in the /holdings/assetClassificationList.<br><b>Required Feature Enablement</b>: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|classificationValue|string|false|read-only|The classification value that corresponds to the classification type of the holding. The supported asset classification type and the values are provided in the /holdings/assetClassificationList.<br><b>Required Feature Enablement</b>: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|holding|[[DerivedHolding](#schemaderivedholding)]|false|read-only|Securities that belong to the asset classification type and contributed to the summary value.<br><b>Required Feature Enablement</b>: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|value|[Money](#schemamoney)|false|none|none|

<h2 id="tocS_DerivedNetworth">DerivedNetworth</h2>
<!-- backwards compatibility -->
<a id="schemaderivednetworth"></a>
<a id="schema_DerivedNetworth"></a>
<a id="tocSderivednetworth"></a>
<a id="tocsderivednetworth"></a>

```json
{
  "asset": {
    "amount": 0,
    "currency": "AUD"
  },
  "date": "string",
  "historicalBalances": [
    {
      "accountId": 0,
      "asOfDate": "string",
      "balance": {
        "amount": 0,
        "currency": "AUD"
      },
      "dataSourceType": "S",
      "date": "string",
      "isAsset": true
    }
  ],
  "liability": {
    "amount": 0,
    "currency": "AUD"
  },
  "networth": {
    "amount": 0,
    "currency": "AUD"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|[Money](#schemamoney)|false|none|none|
|date|string|false|read-only|The date as of when the networth information is provided.<br><br><b>Applicable containers</b>: bank, creditcard, investment, insurance, realEstate, loan<br>|
|historicalBalances|[[DerivedNetworthHistoricalBalance](#schemaderivednetworthhistoricalbalance)]|false|read-only|Balances of the accounts over the period of time.<br><br><b>Applicable containers</b>: bank, creditcard, investment, insurance, realEstate, loan<br>|
|liability|[Money](#schemamoney)|false|none|none|
|networth|[Money](#schemamoney)|false|none|none|

<h2 id="tocS_DerivedNetworthHistoricalBalance">DerivedNetworthHistoricalBalance</h2>
<!-- backwards compatibility -->
<a id="schemaderivednetworthhistoricalbalance"></a>
<a id="schema_DerivedNetworthHistoricalBalance"></a>
<a id="tocSderivednetworthhistoricalbalance"></a>
<a id="tocsderivednetworthhistoricalbalance"></a>

```json
{
  "accountId": 0,
  "asOfDate": "string",
  "balance": {
    "amount": 0,
    "currency": "AUD"
  },
  "dataSourceType": "S",
  "date": "string",
  "isAsset": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int64)|false|read-only|none|
|asOfDate|string|false|read-only|Date as of when the balance is last  updated due to the auto account updates or user triggered updates. This balance will be carry forward for the days where there is no balance available in the system. <br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul>|
|balance|[Money](#schemamoney)|false|none|none|
|dataSourceType|string|false|read-only|The source of balance information.<br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul><b>Applicable Values</b><br>|
|date|string|false|read-only|Date for which the account balance was provided.  This balance could be a carryforward, calculated or a scraped balance. AdditIonal Details: scraped: Balance shown in the provider site. This balance gets stored in Yodlee system during system/user account updates. carryForward : Balance carried forward from the scraped balance to the days for which the balance was not available in the system. Balance may not be available for all the days in the system due to MFA information required, error in the site, credential changes, etc. calculated: Balances that gets calculated for the days that are prior to the account added date.<br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li><li>GET derived/networth</li></ul>|
|isAsset|boolean|false|read-only|Indicates whether the balance is an asset or liability.<br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|dataSourceType|S|
|dataSourceType|C|
|dataSourceType|CF|

<h2 id="tocS_DerivedNetworthResponse">DerivedNetworthResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderivednetworthresponse"></a>
<a id="schema_DerivedNetworthResponse"></a>
<a id="tocSderivednetworthresponse"></a>
<a id="tocsderivednetworthresponse"></a>

```json
{
  "networth": [
    {
      "asset": {
        "amount": 0,
        "currency": "AUD"
      },
      "date": "string",
      "historicalBalances": [
        {
          "accountId": 0,
          "asOfDate": "string",
          "balance": {
            "amount": 0,
            "currency": "AUD"
          },
          "dataSourceType": "S",
          "date": "string",
          "isAsset": true
        }
      ],
      "liability": {
        "amount": 0,
        "currency": "AUD"
      },
      "networth": {
        "amount": 0,
        "currency": "AUD"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|networth|[[DerivedNetworth](#schemaderivednetworth)]|false|read-only|none|

<h2 id="tocS_DerivedTransactionSummaryResponse">DerivedTransactionSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemaderivedtransactionsummaryresponse"></a>
<a id="schema_DerivedTransactionSummaryResponse"></a>
<a id="tocSderivedtransactionsummaryresponse"></a>
<a id="tocsderivedtransactionsummaryresponse"></a>

```json
{
  "links": {
    "transactions": "string"
  },
  "transactionSummary": [
    {
      "categorySummary": [
        {
          "categoryId": 0,
          "categoryName": "string",
          "creditTotal": {
            "amount": 0,
            "currency": "AUD"
          },
          "debitTotal": {
            "amount": 0,
            "currency": "AUD"
          },
          "details": [
            {
              "creditTotal": {
                "amount": 0,
                "currency": "AUD"
              },
              "date": "string",
              "debitTotal": {
                "amount": 0,
                "currency": "AUD"
              }
            }
          ],
          "links": {
            "transactions": "string"
          }
        }
      ],
      "categoryType": "TRANSFER",
      "creditTotal": {
        "amount": 0,
        "currency": "AUD"
      },
      "debitTotal": {
        "amount": 0,
        "currency": "AUD"
      },
      "links": {
        "transactions": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[DerivedTransactionsLinks](#schemaderivedtransactionslinks)|false|none|none|
|transactionSummary|[[DerivedTransactionsSummary](#schemaderivedtransactionssummary)]|false|read-only|none|

<h2 id="tocS_DerivedTransactionsLinks">DerivedTransactionsLinks</h2>
<!-- backwards compatibility -->
<a id="schemaderivedtransactionslinks"></a>
<a id="schema_DerivedTransactionsLinks"></a>
<a id="tocSderivedtransactionslinks"></a>
<a id="tocsderivedtransactionslinks"></a>

```json
{
  "transactions": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactions|string|false|read-only|Link of the transaction API service that corresponds to the value derivation.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br>|

<h2 id="tocS_DerivedTransactionsSummary">DerivedTransactionsSummary</h2>
<!-- backwards compatibility -->
<a id="schemaderivedtransactionssummary"></a>
<a id="schema_DerivedTransactionsSummary"></a>
<a id="tocSderivedtransactionssummary"></a>
<a id="tocsderivedtransactionssummary"></a>

```json
{
  "categorySummary": [
    {
      "categoryId": 0,
      "categoryName": "string",
      "creditTotal": {
        "amount": 0,
        "currency": "AUD"
      },
      "debitTotal": {
        "amount": 0,
        "currency": "AUD"
      },
      "details": [
        {
          "creditTotal": {
            "amount": 0,
            "currency": "AUD"
          },
          "date": "string",
          "debitTotal": {
            "amount": 0,
            "currency": "AUD"
          }
        }
      ],
      "links": {
        "transactions": "string"
      }
    }
  ],
  "categoryType": "TRANSFER",
  "creditTotal": {
    "amount": 0,
    "currency": "AUD"
  },
  "debitTotal": {
    "amount": 0,
    "currency": "AUD"
  },
  "links": {
    "transactions": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categorySummary|[[DerivedCategorySummary](#schemaderivedcategorysummary)]|false|read-only|Summary of transaction amouts at category level.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br>|
|categoryType|string|false|read-only|Type of categories provided by transactions/categories service.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br><b>Applicable Values</b><br>|
|creditTotal|[Money](#schemamoney)|false|none|none|
|debitTotal|[Money](#schemamoney)|false|none|none|
|links|[DerivedTransactionsLinks](#schemaderivedtransactionslinks)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|categoryType|TRANSFER|
|categoryType|DEFERRED_COMPENSATION|
|categoryType|UNCATEGORIZE|
|categoryType|INCOME|
|categoryType|EXPENSE|

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
{
  "consumer": "string",
  "original": "string",
  "security": "string",
  "simple": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumer|string|false|none|The description of the transaction as defined by the consumer. The consumer can define or provide more details of the transaction in this field.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br>|
|original|string|false|read-only|Original transaction description as it appears at the FI site.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br>|
|security|string|false|read-only|The description will provide the actual name of the security.<br><br><b>Applicable containers</b>: investment<br>|
|simple|string|false|read-only|The transaction description that appears at the FI site may not be self-explanatory, i.e., the source, purpose of the transaction may not be evident. Yodlee attempts to simplify and make the transaction meaningful to the consumer, and this simplified transaction description is provided in the simple description field.Note: The simple description field is available only in the United States, Canada, United Kingdom, and India.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br>|

<h2 id="tocS_DetailCategory">DetailCategory</h2>
<!-- backwards compatibility -->
<a id="schemadetailcategory"></a>
<a id="schema_DetailCategory"></a>
<a id="tocSdetailcategory"></a>
<a id="tocsdetailcategory"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|read-only|The unique identifier of the detail category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|
|name|string|false|read-only|The name of the detail category<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "accountID": 0,
  "docType": "STMT",
  "formType": "string",
  "id": "string",
  "lastUpdated": "string",
  "name": "string",
  "source": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountID|integer(int64)|false|read-only|The unique identifier for the account. The account ID to which the document is linked.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>|
|docType|string|false|read-only|Indicates the type of the document.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>|
|formType|string|false|read-only|Indicates the type of the tax form.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>|
|id|string|false|read-only|The document's primary key and unique identifier.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>|
|lastUpdated|string|false|read-only|Indicates the date and time the document was last updated.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>|
|name|string|false|read-only|Indicates the name of the document.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>|
|source|string|false|read-only|Indicates the source of the document download.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>|
|status|string|false|read-only|Indicates the status of the document download.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|docType|STMT|
|docType|TAX|
|docType|EBILL|

<h2 id="tocS_DocumentDownload">DocumentDownload</h2>
<!-- backwards compatibility -->
<a id="schemadocumentdownload"></a>
<a id="schema_DocumentDownload"></a>
<a id="tocSdocumentdownload"></a>
<a id="tocsdocumentdownload"></a>

```json
{
  "docContent": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|docContent|string|false|read-only|Contents of the document in Base64 format.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>|
|id|string|false|read-only|The document's primary key and unique identifier.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>|

<h2 id="tocS_DocumentDownloadResponse">DocumentDownloadResponse</h2>
<!-- backwards compatibility -->
<a id="schemadocumentdownloadresponse"></a>
<a id="schema_DocumentDownloadResponse"></a>
<a id="tocSdocumentdownloadresponse"></a>
<a id="tocsdocumentdownloadresponse"></a>

```json
{
  "document": [
    {
      "docContent": "string",
      "id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|[[DocumentDownload](#schemadocumentdownload)]|false|read-only|none|

<h2 id="tocS_DocumentResponse">DocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemadocumentresponse"></a>
<a id="schema_DocumentResponse"></a>
<a id="tocSdocumentresponse"></a>
<a id="tocsdocumentresponse"></a>

```json
{
  "document": [
    {
      "accountID": 0,
      "docType": "STMT",
      "formType": "string",
      "id": "string",
      "lastUpdated": "string",
      "name": "string",
      "source": "string",
      "status": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|[[Document](#schemadocument)]|false|read-only|none|

<h2 id="tocS_Email">Email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_Email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
{
  "type": "PRIMARY",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|read-only|none|
|value|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PRIMARY|
|type|SECONDARY|
|type|PERSONAL|
|type|WORK|
|type|OTHERS|

<h2 id="tocS_EvaluateAccountAddress">EvaluateAccountAddress</h2>
<!-- backwards compatibility -->
<a id="schemaevaluateaccountaddress"></a>
<a id="schema_EvaluateAccountAddress"></a>
<a id="tocSevaluateaccountaddress"></a>
<a id="tocsevaluateaccountaddress"></a>

```json
{
  "address1": "string",
  "address2": "string",
  "address3": "string",
  "city": "string",
  "country": "string",
  "sourceType": "string",
  "state": "string",
  "street": "string",
  "type": "HOME",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address1|string|false|none|none|
|address2|string|false|none|none|
|address3|string|false|none|none|
|city|string|false|none|none|
|country|string|false|none|none|
|sourceType|string|false|none|none|
|state|string|false|none|none|
|street|string|true|none|none|
|type|string|false|none|none|
|zip|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HOME|
|type|BUSINESS|
|type|POBOX|
|type|RETAIL|
|type|OFFICE|
|type|SMALL_BUSINESS|
|type|COMMUNICATION|
|type|PERMANENT|
|type|STATEMENT_ADDRESS|
|type|PAYMENT|
|type|PAYOFF|
|type|UNKNOWN|

<h2 id="tocS_EvaluateAddressRequest">EvaluateAddressRequest</h2>
<!-- backwards compatibility -->
<a id="schemaevaluateaddressrequest"></a>
<a id="schema_EvaluateAddressRequest"></a>
<a id="tocSevaluateaddressrequest"></a>
<a id="tocsevaluateaddressrequest"></a>

```json
{
  "address": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "city": "string",
    "country": "string",
    "sourceType": "string",
    "state": "string",
    "street": "string",
    "type": "HOME",
    "zip": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[EvaluateAccountAddress](#schemaevaluateaccountaddress)|true|none|none|

<h2 id="tocS_EvaluateAddressResponse">EvaluateAddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemaevaluateaddressresponse"></a>
<a id="schema_EvaluateAddressResponse"></a>
<a id="tocSevaluateaddressresponse"></a>
<a id="tocsevaluateaddressresponse"></a>

```json
{
  "address": [
    {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "sourceType": "string",
      "state": "string",
      "street": "string",
      "type": "HOME",
      "zip": "string"
    }
  ],
  "isValidAddress": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[[AccountAddress](#schemaaccountaddress)]|false|read-only|none|
|isValidAddress|boolean|false|none|none|

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
{
  "id": "string",
  "image": "string",
  "isOptional": true,
  "isValueProvided": true,
  "maxLength": 0,
  "minLength": 0,
  "name": "string",
  "option": [
    {
      "displayText": "string",
      "isSelected": true,
      "optionValue": "string"
    }
  ],
  "prefix": "string",
  "suffix": "string",
  "type": "text",
  "value": "string",
  "valueEditable": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Identifier for the field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|image|string|false|none|Image displayed at the endsite.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li></ul>|
|isOptional|boolean|false|read-only|Indicates if a field is an optional field or a mandatory field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|isValueProvided|boolean|false|read-only|Indicates that the answer to the security question already exists in the Yodlee system.Persuading the user to provide the answer to the security question again during the edit-credential flow can be avoided.<br><br><br><b>Endpoints</b>:<ul><li>GET providerAccounts?include=questions</li><li>GET providerAccounts/{providerAccountId}? include=questions</li></ul>|
|maxLength|integer(int64)|false|read-only|The maximum length of the login form field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|minLength|integer(int64)|false|read-only|The minimum length of the login form field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|name|string|false|read-only|Name of the field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|option|[[Option](#schemaoption)]|false|read-only|Provides the different values that are available for the user to choose. This field is applicable for drop-down or radio field types.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|prefix|string|false|read-only|The prefix string that has to be displayed before the field value.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|suffix|string|false|read-only|The suffix string that has to be displayed next to the field value.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|type|string|false|read-only|This indicates the display type of the field. For example, text box, image, etc. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul><b>Applicable Values</b><br>|
|value|string|false|none|Value expected from the user for the field. This will be blank and is expected to be filled and sent back when submitting the login or MFA information.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|valueEditable|string|false|read-only|Indicates whether the field is editable or not.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|password|
|type|option|
|type|checkbox|
|type|radio|
|type|image|

<h2 id="tocS_FieldOperation">FieldOperation</h2>
<!-- backwards compatibility -->
<a id="schemafieldoperation"></a>
<a id="schema_FieldOperation"></a>
<a id="tocSfieldoperation"></a>
<a id="tocsfieldoperation"></a>

```json
{
  "field": "amount",
  "operation": "numberEquals",
  "value": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|Field for which the clause is created.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan<br><b>Applicable Values</b>:<ul><li>amount</li><li>description</li></ul><b>Applicable Values</b><br>|
|operation|string|false|none|Operation for which the clause is created.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan<br><b>Applicable values (depends on the value of field)</b>:<ul><li>field is <b>description</b> -> operation can be<ol><li>stringEquals</li><li>stringContains</li></ol></li><li>field is <b>amount</b> -> operation can be<ol><li>numberEquals</li><li>numberLessThan</li><li>numberLessThanEquals</li><li>numberGreaterThan</li><li>numberGreaterThanEquals</li></ol></li></ul><b>Applicable Values</b><br>|
|value|object|false|none|The value would be the amount value in case of amount based rule clause or the string value in case of description based rule clause.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan<br><b>Applicable Values</b>:<ul><li>field is <b>description</b> -> value should be <b>min of 3 and max of 50 characters</b></li><li>field is <b>amount</b> -> value should be <b> min value of 0 and a max value of 99999999999.99</b></li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|field|amount|
|field|description|
|operation|numberEquals|
|operation|numberLessThan|
|operation|numberLessThanEquals|
|operation|numberGreaterThan|
|operation|numberGreaterThanEquals|
|operation|stringEquals|
|operation|stringContains|

<h2 id="tocS_FullAccountNumberList">FullAccountNumberList</h2>
<!-- backwards compatibility -->
<a id="schemafullaccountnumberlist"></a>
<a id="schema_FullAccountNumberList"></a>
<a id="tocSfullaccountnumberlist"></a>
<a id="tocsfullaccountnumberlist"></a>

```json
{
  "paymentAccountNumber": "string",
  "unmaskedAccountNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentAccountNumber|string|false|read-only|Payment Account Number of given account.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|unmaskedAccountNumber|string|false|read-only|Unmasked account number of given account.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|

<h2 id="tocS_HistoricalBalance">HistoricalBalance</h2>
<!-- backwards compatibility -->
<a id="schemahistoricalbalance"></a>
<a id="schema_HistoricalBalance"></a>
<a id="tocShistoricalbalance"></a>
<a id="tocshistoricalbalance"></a>

```json
{
  "asOfDate": "string",
  "balance": {
    "amount": 0,
    "currency": "AUD"
  },
  "dataSourceType": "S",
  "date": "string",
  "isAsset": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asOfDate|string|false|read-only|Date as of when the balance is last updated due to the auto account updates or user triggered updates. This balance will be carry forward for the days where there is no balance available in the system. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul>|
|balance|[Money](#schemamoney)|false|none|none|
|dataSourceType|string|false|read-only|The source of balance information.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul><b>Applicable Values</b><br>|
|date|string|false|read-only|Date for which the account balance was provided.  This balance could be a carryforward, calculated or a scraped balance.<br><b>Additional Details</b>:<br><b>Scraped</b>: Balance shown in the provider site. This balance gets stored in Yodlee system during system/user account updates.<br><b>CarryForward</b>: Balance carried forward from the scraped balance to the days for which the balance was not available in the system. Balance may not be available for all the days in the system due to MFA information required, error in the site, credential changes, etc.<br><b>calculated</b>: Balances that gets calculated for the days that are prior to the account added date.  <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li><li>GET derived/networth</li></ul>|
|isAsset|boolean|false|read-only|Indicates whether the balance is an asset or liability.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|dataSourceType|S|
|dataSourceType|C|
|dataSourceType|CF|

<h2 id="tocS_Holding">Holding</h2>
<!-- backwards compatibility -->
<a id="schemaholding"></a>
<a id="schema_Holding"></a>
<a id="tocSholding"></a>
<a id="tocsholding"></a>

```json
{
  "accountId": 0,
  "accruedIncome": {
    "amount": 0,
    "currency": "AUD"
  },
  "accruedInterest": {
    "amount": 0,
    "currency": "AUD"
  },
  "assetClassification": [
    {
      "allocation": 0,
      "classificationType": "string",
      "classificationValue": "string"
    }
  ],
  "contractQuantity": 0,
  "costBasis": {
    "amount": 0,
    "currency": "AUD"
  },
  "couponRate": 0,
  "createdDate": "string",
  "cusipNumber": "string",
  "description": "string",
  "enrichedDescription": "string",
  "exercisedQuantity": 0,
  "expirationDate": "string",
  "grantDate": "string",
  "holdingType": "stock",
  "id": 0,
  "interestRate": 0,
  "isShort": true,
  "isin": "string",
  "lastUpdated": "string",
  "matchStatus": "string",
  "maturityDate": "string",
  "optionType": "put",
  "price": {
    "amount": 0,
    "currency": "AUD"
  },
  "providerAccountId": 0,
  "quantity": 0,
  "securityStyle": "string",
  "securityType": "string",
  "sedol": "string",
  "spread": {
    "amount": 0,
    "currency": "AUD"
  },
  "strikePrice": {
    "amount": 0,
    "currency": "AUD"
  },
  "symbol": "string",
  "term": "string",
  "unvestedQuantity": 0,
  "unvestedValue": {
    "amount": 0,
    "currency": "AUD"
  },
  "value": {
    "amount": 0,
    "currency": "AUD"
  },
  "vestedQuantity": 0,
  "vestedSharesExercisable": 0,
  "vestedValue": {
    "amount": 0,
    "currency": "AUD"
  },
  "vestingDate": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int64)|false|read-only|Unique identifier of the account to which the security is linked.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|accruedIncome|[Money](#schemamoney)|false|none|none|
|accruedInterest|[Money](#schemamoney)|false|none|none|
|assetClassification|[[AssetClassification](#schemaassetclassification)]|false|read-only|Asset classification applied to the holding. <br><br><b>Applicable containers</b>: investment<br>|
|contractQuantity|number(double)|false|read-only|The quantity of tradeable units in a contract.<br><b>Note</b>: The contract quantity field is only applicable to commodity and currency.<br><br><b>Applicable containers</b>: investment<br>|
|costBasis|[Money](#schemamoney)|false|none|none|
|couponRate|number(double)|false|read-only|The stated interest rate for a bond.<br><br><b>Applicable containers</b>: investment<br>|
|createdDate|string|false|read-only|The date on which the holding is created in the Yodlee system.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|cusipNumber|string|false|read-only|The CUSIP (Committee on Uniform Securities Identification Procedures) identifies most the financial instruments in the United States and Canada.<br><br><b>Applicable containers</b>: investment<br>|
|description|string|false|read-only|The description (name) for the holding (E.g., Cisco Systems)<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types. <br><br><b>Applicable containers</b>: investment, insurance<br>|
|enrichedDescription|string|false|read-only|The enrichedDescription is the security description of the normalized holding<br><br><b>Applicable containers</b>: investment, insurance<br>|
|exercisedQuantity|number(double)|false|read-only|The quantity of the employee stock options that are already exercised or bought by the employee.<br><b>Note</b>: Once the employee stock options is exercised, they are either converted to cash value or equity positions depending on the FI. The exercised quantity field is only applicable to employee stock options.<br><br><b>Applicable containers</b>: investment<br>|
|expirationDate|string|false|read-only|The date on which an option, right or warrant expires.<br><b>Note</b>: The expiration date field is only applicable to options and employee stock options.<br><br><b>Applicable containers</b>: investment<br>|
|grantDate|string|false|read-only|The date on which equity awards like ESOP, RSU, etc., are issued or granted.<br><b>Note</b>: The grant date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>|
|holdingType|string|false|read-only|Type of holding<br><br><b>Applicable containers</b>: investment, insurance<br>|
|id|integer(int64)|false|read-only|Unique identifier for the security added in the system. This is the primary key of the holding resource.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|interestRate|number(double)|false|read-only|The interest rate on a CD.<br><b>Note</b>: The interest rate field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>|
|isShort|boolean|false|read-only|Indicates that the holding is a short trading.<br><br><b>Applicable containers</b>: investment<br>|
|isin|string|false|read-only|The ISIN (International Securities Identification Number) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Note</b>: The ISIN field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br>|
|lastUpdated|string|false|read-only|The date when the information was last updated in the system.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|matchStatus|string|false|read-only|Indicates the security match status id of the investment option identified during security normalization.<br><br><b>Applicable containers</b>: investment<br>|
|maturityDate|string|false|read-only|The stated maturity date of a bond or CD.<br><br><b>Applicable containers</b>: investment<br>|
|optionType|string|false|read-only|The type of the option position (i.e., put or call).<br><b>Note</b>: The option type field is only applicable to options.<br><br><b>Applicable containers</b>: investment<br><b>Applicable Values</b><br>|
|price|[Money](#schemamoney)|false|none|none|
|providerAccountId|integer(int64)|false|read-only|Unique identifier for the user's association with the provider.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|quantity|number(double)|false|read-only|The quantity held for the holding.<br><b>Note</b>: Only for bonds the quantity field indicates the normalized quantity and not the quantity aggregated from the site. The quantity field is only applicable to restricted stock units/awards, performance units, currency, and commodity.<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|securityStyle|string|false|read-only|Indicates the security style of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|securityType|string|false|read-only|Indicates the security type of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|sedol|string|false|read-only|The SEDOL (Stock Exchange Daily Official List) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br>|
|spread|[Money](#schemamoney)|false|none|none|
|strikePrice|[Money](#schemamoney)|false|none|none|
|symbol|string|false|read-only|The symbol of the security.<br><br><b>Applicable containers</b>: investment<br>|
|term|string|false|read-only|The fixed duration for which the bond or CD is issued.<br><b>Note</b>: The term field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>|
|unvestedQuantity|number(double)|false|read-only|Indicates the number of unvested quantity or units.<br><b>Note</b>: The unvested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>|
|unvestedValue|[Money](#schemamoney)|false|none|none|
|value|[Money](#schemamoney)|false|none|none|
|vestedQuantity|number(double)|false|read-only|The quantity of units or shares that are already vested on a vest date.<br><b>Note</b>: The vested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>|
|vestedSharesExercisable|number(double)|false|read-only|The number of vested shares that can be exercised by the employee. It is usually equal to the vested quantity.<br><b>Note</b>: The vested shares exercisable field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>|
|vestedValue|[Money](#schemamoney)|false|none|none|
|vestingDate|string|false|read-only|The date on which a RSU, RSA, or an employee stock options become vested.<br><b>Note</b>: The vesting date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|holdingType|stock|
|holdingType|mutualFund|
|holdingType|bond|
|holdingType|CD|
|holdingType|option|
|holdingType|moneyMarketFund|
|holdingType|other|
|holdingType|remic|
|holdingType|future|
|holdingType|commodity|
|holdingType|currency|
|holdingType|unitInvestmentTrust|
|holdingType|employeeStockOption|
|holdingType|insuranceAnnuity|
|holdingType|unknown|
|holdingType|preferredStock|
|holdingType|ETF|
|holdingType|warrants|
|holdingType|ETN|
|optionType|put|
|optionType|call|
|optionType|unknown|
|optionType|other|

<h2 id="tocS_HoldingAssetClassificationListResponse">HoldingAssetClassificationListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaholdingassetclassificationlistresponse"></a>
<a id="schema_HoldingAssetClassificationListResponse"></a>
<a id="tocSholdingassetclassificationlistresponse"></a>
<a id="tocsholdingassetclassificationlistresponse"></a>

```json
{
  "assetClassificationList": [
    {
      "classificationType": "string",
      "classificationValue": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetClassificationList|[[AssetClassificationList](#schemaassetclassificationlist)]|false|read-only|none|

<h2 id="tocS_HoldingResponse">HoldingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaholdingresponse"></a>
<a id="schema_HoldingResponse"></a>
<a id="tocSholdingresponse"></a>
<a id="tocsholdingresponse"></a>

```json
{
  "holding": [
    {
      "accountId": 0,
      "accruedIncome": {
        "amount": 0,
        "currency": "AUD"
      },
      "accruedInterest": {
        "amount": 0,
        "currency": "AUD"
      },
      "assetClassification": [
        {
          "allocation": 0,
          "classificationType": "string",
          "classificationValue": "string"
        }
      ],
      "contractQuantity": 0,
      "costBasis": {
        "amount": 0,
        "currency": "AUD"
      },
      "couponRate": 0,
      "createdDate": "string",
      "cusipNumber": "string",
      "description": "string",
      "enrichedDescription": "string",
      "exercisedQuantity": 0,
      "expirationDate": "string",
      "grantDate": "string",
      "holdingType": "stock",
      "id": 0,
      "interestRate": 0,
      "isShort": true,
      "isin": "string",
      "lastUpdated": "string",
      "matchStatus": "string",
      "maturityDate": "string",
      "optionType": "put",
      "price": {
        "amount": 0,
        "currency": "AUD"
      },
      "providerAccountId": 0,
      "quantity": 0,
      "securityStyle": "string",
      "securityType": "string",
      "sedol": "string",
      "spread": {
        "amount": 0,
        "currency": "AUD"
      },
      "strikePrice": {
        "amount": 0,
        "currency": "AUD"
      },
      "symbol": "string",
      "term": "string",
      "unvestedQuantity": 0,
      "unvestedValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "value": {
        "amount": 0,
        "currency": "AUD"
      },
      "vestedQuantity": 0,
      "vestedSharesExercisable": 0,
      "vestedValue": {
        "amount": 0,
        "currency": "AUD"
      },
      "vestingDate": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holding|[[Holding](#schemaholding)]|false|read-only|none|

<h2 id="tocS_HoldingSecuritiesResponse">HoldingSecuritiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaholdingsecuritiesresponse"></a>
<a id="schema_HoldingSecuritiesResponse"></a>
<a id="tocSholdingsecuritiesresponse"></a>
<a id="tocsholdingsecuritiesresponse"></a>

```json
{
  "holding": [
    {
      "id": "string",
      "security": {
        "accrualMethod": "string",
        "agencyFactor": 0,
        "callDate": "string",
        "callPrice": 0,
        "cdscFundFlag": true,
        "closedFlag": true,
        "cusip": "string",
        "description": "string",
        "federalTaxable": true,
        "firmEligible": "string",
        "firstCouponDate": "string",
        "frequency": 0,
        "fundFamily": "string",
        "gicsSector": "string",
        "id": 0,
        "incomeCurrency": "string",
        "interestRate": 0,
        "isDummySecurity": true,
        "isEnvestnetDummySecurity": true,
        "isSyntheticSecurity": true,
        "isin": "string",
        "issueDate": "string",
        "issueTypeMultiplier": 0,
        "lastCouponDate": "string",
        "lastModifiedDate": "string",
        "maturityDate": "string",
        "minimumPurchase": 0,
        "moodyRating": "string",
        "sAndPRating": "string",
        "sector": "string",
        "sedol": "string",
        "shareClass": "string",
        "stateTaxable": true,
        "stockExchangeDetails": [
          {
            "countryCode": "string",
            "currencyCode": "string",
            "exchangeCode": "string",
            "symbol": "string"
          }
        ],
        "style": "string",
        "subSector": "string",
        "tradeCurrencyCode": "string",
        "type": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holding|[[SecurityHolding](#schemasecurityholding)]|false|read-only|none|

<h2 id="tocS_HoldingTypeListResponse">HoldingTypeListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaholdingtypelistresponse"></a>
<a id="schema_HoldingTypeListResponse"></a>
<a id="tocSholdingtypelistresponse"></a>
<a id="tocsholdingtypelistresponse"></a>

```json
{
  "holdingType": [
    "stock"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|holdingType|[string]|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|holdingType|stock|
|holdingType|mutualFund|
|holdingType|bond|
|holdingType|CD|
|holdingType|option|
|holdingType|moneyMarketFund|
|holdingType|other|
|holdingType|remic|
|holdingType|future|
|holdingType|commodity|
|holdingType|currency|
|holdingType|unitInvestmentTrust|
|holdingType|employeeStockOption|
|holdingType|insuranceAnnuity|
|holdingType|unknown|
|holdingType|preferredStock|
|holdingType|ETF|
|holdingType|warrants|
|holdingType|ETN|

<h2 id="tocS_Identifier">Identifier</h2>
<!-- backwards compatibility -->
<a id="schemaidentifier"></a>
<a id="schema_Identifier"></a>
<a id="tocSidentifier"></a>
<a id="tocsidentifier"></a>

```json
{
  "type": "NIE",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|read-only|Type of Identifier|
|value|string|false|read-only|Value of the identifier|

#### Enumerated Values

|Property|Value|
|---|---|
|type|NIE|
|type|DNI|
|type|EIN|
|type|BN|
|type|AADHAR|
|type|NIN|
|type|NRIC|

<h2 id="tocS_LoanPayoffDetails">LoanPayoffDetails</h2>
<!-- backwards compatibility -->
<a id="schemaloanpayoffdetails"></a>
<a id="schema_LoanPayoffDetails"></a>
<a id="tocSloanpayoffdetails"></a>
<a id="tocsloanpayoffdetails"></a>

```json
{
  "outstandingBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "payByDate": "string",
  "payoffAmount": {
    "amount": 0,
    "currency": "AUD"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outstandingBalance|[Money](#schemamoney)|false|none|none|
|payByDate|string|false|read-only|The date by which the payoff amount should be paid.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|payoffAmount|[Money](#schemamoney)|false|none|none|

<h2 id="tocS_LoginForm">LoginForm</h2>
<!-- backwards compatibility -->
<a id="schemaloginform"></a>
<a id="schema_LoginForm"></a>
<a id="tocSloginform"></a>
<a id="tocsloginform"></a>

```json
{
  "forgetPasswordURL": "string",
  "formType": "login",
  "help": "string",
  "id": 0,
  "loginHelp": "string",
  "mfaInfoText": "string",
  "mfaInfoTitle": "string",
  "mfaTimeout": 0,
  "row": [
    {
      "field": [
        {
          "id": "string",
          "image": "string",
          "isOptional": true,
          "isValueProvided": true,
          "maxLength": 0,
          "minLength": 0,
          "name": "string",
          "option": [
            {
              "displayText": "string",
              "isSelected": true,
              "optionValue": "string"
            }
          ],
          "prefix": "string",
          "suffix": "string",
          "type": "text",
          "value": "string",
          "valueEditable": "string"
        }
      ],
      "fieldRowChoice": "string",
      "form": "string",
      "id": "string",
      "label": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forgetPasswordURL|string|false|none|The forget password URL of the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|formType|string|false|none|The type of the forms for which the user information is required.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul><b>Applicable Values</b><br>|
|help|string|false|read-only|The help that can be displayed to the customer in the login form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|id|integer(int64)|false|none|The identifier of the login form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|loginHelp|string|false|read-only|The help that can be displayed to the customer in the login form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|mfaInfoText|string|false|read-only|The text displayed in the provider site while requesting the user's MFA information. This field is applicable for MFA form types only. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li></ul>|
|mfaInfoTitle|string|false|read-only|The title for the MFA information demanded from the user.This is the title displayed in the provider site.This field is applicable for MFA form types only. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li></ul>|
|mfaTimeout|integer(int64)|false|read-only|The amount of time before which the user is expected to provide MFA information. This field is applicable for MFA form types only. This would be an useful information that could be displayed to the users. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|row|[[Row](#schemarow)]|false|none|This indicates one row in the form. The row will have one label. But it may have single or multiple fields.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|formType|login|
|formType|questionAndAnswer|
|formType|token|
|formType|image|

<h2 id="tocS_Merchant">Merchant</h2>
<!-- backwards compatibility -->
<a id="schemamerchant"></a>
<a id="schema_Merchant"></a>
<a id="tocSmerchant"></a>
<a id="tocsmerchant"></a>

```json
{
  "address": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "city": "string",
    "country": "string",
    "sourceType": "string",
    "state": "string",
    "street": "string",
    "type": "HOME",
    "zip": "string"
  },
  "categoryLabel": [
    "string"
  ],
  "contact": {
    "email": "string",
    "phone": "string"
  },
  "coordinates": {
    "latitude": 0,
    "longitude": 0
  },
  "id": "string",
  "name": "string",
  "source": "YODLEE",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[AccountAddress](#schemaaccountaddress)|false|none|none|
|categoryLabel|[string]|false|read-only|The business categories of the merchant.<br><br><b>Applicable containers</b>: bank,creditCard<br><b>Applicable Values</b><br>|
|contact|[Contact](#schemacontact)|false|none|none|
|coordinates|[Coordinates](#schemacoordinates)|false|none|none|
|id|string|false|read-only|Identifier of the merchant.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|name|string|false|read-only|The name of the merchant.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|source|string|false|read-only|The source through which merchant information is retrieved.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>|
|website|string|false|read-only|The website of the merchant.<br><br><b>Applicable containers</b>: bank,creditCard,investment,loan<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|source|YODLEE|
|source|FACTUAL|

<h2 id="tocS_Money">Money</h2>
<!-- backwards compatibility -->
<a id="schemamoney"></a>
<a id="schema_Money"></a>
<a id="tocSmoney"></a>
<a id="tocsmoney"></a>

```json
{
  "amount": 0,
  "currency": "AUD"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|true|none|none|
|currency|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|AUD|
|currency|BRL|
|currency|CAD|
|currency|EUR|
|currency|GBP|
|currency|HKD|
|currency|IDR|
|currency|INR|
|currency|JPY|
|currency|NZD|
|currency|SGD|
|currency|USD|
|currency|ZAR|
|currency|CNY|
|currency|VND|
|currency|MYR|
|currency|CHF|

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "first": "string",
  "fullName": "string",
  "last": "string",
  "middle": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|string|false|none|none|
|fullName|string|false|none|none|
|last|string|false|none|none|
|middle|string|false|none|none|

<h2 id="tocS_Option">Option</h2>
<!-- backwards compatibility -->
<a id="schemaoption"></a>
<a id="schema_Option"></a>
<a id="tocSoption"></a>
<a id="tocsoption"></a>

```json
{
  "displayText": "string",
  "isSelected": true,
  "optionValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayText|string|false|none|The text that is displayed to the user for that option in the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|isSelected|boolean|false|none|The option that is selected by default in the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|optionValue|string|false|none|The value that is associated with the option.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|

<h2 id="tocS_PaymentBankTransferCode">PaymentBankTransferCode</h2>
<!-- backwards compatibility -->
<a id="schemapaymentbanktransfercode"></a>
<a id="schema_PaymentBankTransferCode"></a>
<a id="tocSpaymentbanktransfercode"></a>
<a id="tocspaymentbanktransfercode"></a>

```json
{
  "id": "string",
  "type": "ROUTING_NUMBER"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|Value of the identifier|
|type|string|false|read-only|Type of BankTransferCode|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ROUTING_NUMBER|
|type|BSB|
|type|IFSC|
|type|SORT_CODE|

<h2 id="tocS_PaymentIdentifier">PaymentIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemapaymentidentifier"></a>
<a id="schema_PaymentIdentifier"></a>
<a id="tocSpaymentidentifier"></a>
<a id="tocspaymentidentifier"></a>

```json
{
  "type": "REFERENCE_NUMBER",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|read-only|Type of Identifier|
|value|string|false|read-only|Value of the identifier|

#### Enumerated Values

|Property|Value|
|---|---|
|type|REFERENCE_NUMBER|
|type|PLATFORM_CODE|

<h2 id="tocS_PaymentProfile">PaymentProfile</h2>
<!-- backwards compatibility -->
<a id="schemapaymentprofile"></a>
<a id="schema_PaymentProfile"></a>
<a id="tocSpaymentprofile"></a>
<a id="tocspaymentprofile"></a>

```json
{
  "address": [
    {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "sourceType": "string",
      "state": "string",
      "street": "string",
      "type": "HOME",
      "zip": "string"
    }
  ],
  "identifier": {
    "type": "REFERENCE_NUMBER",
    "value": "string"
  },
  "paymentBankTransferCode": {
    "id": "string",
    "type": "ROUTING_NUMBER"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[[AccountAddress](#schemaaccountaddress)]|false|none|The address of the lender to which the monthly payments or the loan payoff amount should be paid. <br><b>Additional Details:</b>The address field applies only to the student loan account type.<br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|identifier|[PaymentIdentifier](#schemapaymentidentifier)|false|none|none|
|paymentBankTransferCode|[PaymentBankTransferCode](#schemapaymentbanktransfercode)|false|none|none|

<h2 id="tocS_PhoneNumber">PhoneNumber</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber"></a>
<a id="schema_PhoneNumber"></a>
<a id="tocSphonenumber"></a>
<a id="tocsphonenumber"></a>

```json
{
  "type": "HOME",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|read-only|type of phone number|
|value|string|false|read-only|Phone Number|

#### Enumerated Values

|Property|Value|
|---|---|
|type|HOME|
|type|WORK|
|type|LANDLINE|
|type|MOBILE|

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
{
  "address": [
    {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "sourceType": "string",
      "state": "string",
      "street": "string",
      "type": "HOME",
      "zip": "string"
    }
  ],
  "email": [
    {
      "type": "PRIMARY",
      "value": "string"
    }
  ],
  "gender": "string",
  "identifier": [
    {
      "type": "NIE",
      "value": "string"
    }
  ],
  "name": {
    "first": "string",
    "fullName": "string",
    "last": "string",
    "middle": "string"
  },
  "phoneNumber": [
    {
      "type": "HOME",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[[AccountAddress](#schemaaccountaddress)]|false|read-only|Address available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|email|[[Email](#schemaemail)]|false|read-only|Email Id available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|gender|string|false|read-only|Gender of the provider account holder.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET providerAccounts/profile</li></ul>|
|identifier|[[Identifier](#schemaidentifier)]|false|read-only|Identifiers available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|
|name|[Name](#schemaname)|false|none|none|
|phoneNumber|[[PhoneNumber](#schemaphonenumber)]|false|read-only|Phone number available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>|

<h2 id="tocS_ProviderAccount">ProviderAccount</h2>
<!-- backwards compatibility -->
<a id="schemaprovideraccount"></a>
<a id="schema_ProviderAccount"></a>
<a id="tocSprovideraccount"></a>
<a id="tocsprovideraccount"></a>

```json
{
  "aggregationSource": "SYSTEM",
  "consentId": 0,
  "createdDate": "string",
  "dataset": [
    {
      "additionalStatus": "LOGIN_IN_PROGRESS",
      "lastUpdateAttempt": "string",
      "lastUpdated": "string",
      "name": "BASIC_AGG_DATA",
      "nextUpdateScheduled": "string",
      "updateEligibility": "ALLOW_UPDATE"
    }
  ],
  "id": 0,
  "isManual": true,
  "lastUpdated": "string",
  "oauthMigrationStatus": "IN_PROGRESS",
  "preferences": {
    "isAutoRefreshEnabled": true,
    "isDataExtractsEnabled": true,
    "linkedProviderAccountId": 0
  },
  "providerId": 0,
  "requestId": "string",
  "status": "LOGIN_IN_PROGRESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregationSource|string|false|read-only|The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|consentId|integer(int64)|false|none|Consent Id generated through POST Consent.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>|
|createdDate|string|false|read-only|The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>|
|dataset|[[AccountDataset](#schemaaccountdataset)]|false|read-only|Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|id|integer(int64)|false|read-only|Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|isManual|boolean|false|read-only|Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|lastUpdated|string|false|read-only|Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul>|
|oauthMigrationStatus|string|false|read-only|Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|preferences|[ProviderAccountPreferences](#schemaprovideraccountpreferences)|false|none|none|
|providerId|integer(int64)|false|read-only|Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|requestId|string|false|read-only|Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>|
|status|string|false|read-only|The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|aggregationSource|SYSTEM|
|aggregationSource|USER|
|oauthMigrationStatus|IN_PROGRESS|
|oauthMigrationStatus|TO_BE_MIGRATED|
|oauthMigrationStatus|COMPLETED|
|status|LOGIN_IN_PROGRESS|
|status|USER_INPUT_REQUIRED|
|status|IN_PROGRESS|
|status|PARTIAL_SUCCESS|
|status|SUCCESS|
|status|FAILED|
|status|MIGRATION_IN_PROGRESS|

<h2 id="tocS_ProviderAccountDetail">ProviderAccountDetail</h2>
<!-- backwards compatibility -->
<a id="schemaprovideraccountdetail"></a>
<a id="schema_ProviderAccountDetail"></a>
<a id="tocSprovideraccountdetail"></a>
<a id="tocsprovideraccountdetail"></a>

```json
{
  "aggregationSource": "SYSTEM",
  "consentId": 0,
  "createdDate": "string",
  "dataset": [
    {
      "additionalStatus": "LOGIN_IN_PROGRESS",
      "lastUpdateAttempt": "string",
      "lastUpdated": "string",
      "name": "BASIC_AGG_DATA",
      "nextUpdateScheduled": "string",
      "updateEligibility": "ALLOW_UPDATE"
    }
  ],
  "id": 0,
  "isManual": true,
  "lastUpdated": "string",
  "loginForm": [
    {
      "forgetPasswordURL": "string",
      "formType": "login",
      "help": "string",
      "id": 0,
      "loginHelp": "string",
      "mfaInfoText": "string",
      "mfaInfoTitle": "string",
      "mfaTimeout": 0,
      "row": [
        {
          "field": [
            {
              "id": "string",
              "image": "string",
              "isOptional": true,
              "isValueProvided": true,
              "maxLength": 0,
              "minLength": 0,
              "name": "string",
              "option": [
                {
                  "displayText": "string",
                  "isSelected": true,
                  "optionValue": "string"
                }
              ],
              "prefix": "string",
              "suffix": "string",
              "type": "text",
              "value": "string",
              "valueEditable": "string"
            }
          ],
          "fieldRowChoice": "string",
          "form": "string",
          "id": "string",
          "label": "string"
        }
      ]
    }
  ],
  "oauthMigrationStatus": "IN_PROGRESS",
  "preferences": {
    "isAutoRefreshEnabled": true,
    "isDataExtractsEnabled": true,
    "linkedProviderAccountId": 0
  },
  "providerId": 0,
  "requestId": "string",
  "status": "LOGIN_IN_PROGRESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregationSource|string|false|read-only|The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|consentId|integer(int64)|true|none|Consent Id generated through POST Consent.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>|
|createdDate|string|false|read-only|The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>|
|dataset|[[AccountDataset](#schemaaccountdataset)]|false|read-only|Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|id|integer(int64)|false|read-only|Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|isManual|boolean|false|read-only|Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|lastUpdated|string|false|read-only|Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul>|
|loginForm|[[LoginForm](#schemaloginform)]|false|read-only|This entity gets returned in the response for only MFA based provider accounts during the add/update account polling process. This indicates that the MFA information is expected from the user to complete the process. This represents the structure of MFA form that is displayed to the user in the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>|
|oauthMigrationStatus|string|false|read-only|Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|preferences|[ProviderAccountPreferences](#schemaprovideraccountpreferences)|false|none|none|
|providerId|integer(int64)|false|read-only|Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|requestId|string|false|read-only|Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>|
|status|string|false|read-only|The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|aggregationSource|SYSTEM|
|aggregationSource|USER|
|oauthMigrationStatus|IN_PROGRESS|
|oauthMigrationStatus|TO_BE_MIGRATED|
|oauthMigrationStatus|COMPLETED|
|status|LOGIN_IN_PROGRESS|
|status|USER_INPUT_REQUIRED|
|status|IN_PROGRESS|
|status|PARTIAL_SUCCESS|
|status|SUCCESS|
|status|FAILED|
|status|MIGRATION_IN_PROGRESS|

<h2 id="tocS_ProviderAccountDetailResponse">ProviderAccountDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprovideraccountdetailresponse"></a>
<a id="schema_ProviderAccountDetailResponse"></a>
<a id="tocSprovideraccountdetailresponse"></a>
<a id="tocsprovideraccountdetailresponse"></a>

```json
{
  "providerAccount": [
    {
      "aggregationSource": "SYSTEM",
      "consentId": 0,
      "createdDate": "string",
      "dataset": [
        {
          "additionalStatus": "LOGIN_IN_PROGRESS",
          "lastUpdateAttempt": "string",
          "lastUpdated": "string",
          "name": "BASIC_AGG_DATA",
          "nextUpdateScheduled": "string",
          "updateEligibility": "ALLOW_UPDATE"
        }
      ],
      "id": 0,
      "isManual": true,
      "lastUpdated": "string",
      "loginForm": [
        {
          "forgetPasswordURL": "string",
          "formType": "login",
          "help": "string",
          "id": 0,
          "loginHelp": "string",
          "mfaInfoText": "string",
          "mfaInfoTitle": "string",
          "mfaTimeout": 0,
          "row": [
            {
              "field": [
                {
                  "id": "string",
                  "image": "string",
                  "isOptional": true,
                  "isValueProvided": true,
                  "maxLength": 0,
                  "minLength": 0,
                  "name": "string",
                  "option": [
                    {
                      "displayText": "string",
                      "isSelected": true,
                      "optionValue": "string"
                    }
                  ],
                  "prefix": "string",
                  "suffix": "string",
                  "type": "text",
                  "value": "string",
                  "valueEditable": "string"
                }
              ],
              "fieldRowChoice": "string",
              "form": "string",
              "id": "string",
              "label": "string"
            }
          ]
        }
      ],
      "oauthMigrationStatus": "IN_PROGRESS",
      "preferences": {
        "isAutoRefreshEnabled": true,
        "isDataExtractsEnabled": true,
        "linkedProviderAccountId": 0
      },
      "providerId": 0,
      "requestId": "string",
      "status": "LOGIN_IN_PROGRESS"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providerAccount|[[ProviderAccountDetail](#schemaprovideraccountdetail)]|false|read-only|none|

<h2 id="tocS_ProviderAccountPreferences">ProviderAccountPreferences</h2>
<!-- backwards compatibility -->
<a id="schemaprovideraccountpreferences"></a>
<a id="schema_ProviderAccountPreferences"></a>
<a id="tocSprovideraccountpreferences"></a>
<a id="tocsprovideraccountpreferences"></a>

```json
{
  "isAutoRefreshEnabled": true,
  "isDataExtractsEnabled": true,
  "linkedProviderAccountId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isAutoRefreshEnabled|boolean|false|none|Indicates if auto-refreshes have to be triggered for the provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts?include=preferences</li><li>GET providerAccounts/{providerAccountId}?include=preferences</li></ul>|
|isDataExtractsEnabled|boolean|false|none|Indicates if the updates to the provider account should be part of the data extracts event notification or the data extract data retrieval service.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts?include=preferences</li><li>GET providerAccounts/{providerAccountId}?include=preferences</li></ul>|
|linkedProviderAccountId|integer(int64)|false|none|LinkedproviderAccountd is a providerAccountId linked by the user to the primary provider account. <br>LinkedProviderAccountId and the providerAccountId belongs to the same institution.<br><br><b>Endpoints</b>:<ul><li>POST Provider Account</li><li>PUT Provider Account</li><li>GET Provider Accounts</li></ul>|

<h2 id="tocS_ProviderAccountPreferencesRequest">ProviderAccountPreferencesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprovideraccountpreferencesrequest"></a>
<a id="schema_ProviderAccountPreferencesRequest"></a>
<a id="tocSprovideraccountpreferencesrequest"></a>
<a id="tocsprovideraccountpreferencesrequest"></a>

```json
{
  "preferences": {
    "isAutoRefreshEnabled": true,
    "isDataExtractsEnabled": true,
    "linkedProviderAccountId": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preferences|[ProviderAccountPreferences](#schemaprovideraccountpreferences)|false|none|none|

<h2 id="tocS_ProviderAccountProfile">ProviderAccountProfile</h2>
<!-- backwards compatibility -->
<a id="schemaprovideraccountprofile"></a>
<a id="schema_ProviderAccountProfile"></a>
<a id="tocSprovideraccountprofile"></a>
<a id="tocsprovideraccountprofile"></a>

```json
{
  "id": 0,
  "profile": [
    {
      "address": [
        {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "city": "string",
          "country": "string",
          "sourceType": "string",
          "state": "string",
          "street": "string",
          "type": "HOME",
          "zip": "string"
        }
      ],
      "email": [
        {
          "type": "PRIMARY",
          "value": "string"
        }
      ],
      "gender": "string",
      "identifier": [
        {
          "type": "NIE",
          "value": "string"
        }
      ],
      "name": {
        "first": "string",
        "fullName": "string",
        "last": "string",
        "middle": "string"
      },
      "phoneNumber": [
        {
          "type": "HOME",
          "value": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|read-only|Unique identifier for profile<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/profile</li></ul>|
|profile|[[Profile](#schemaprofile)]|false|read-only|PII related data like address, name, phoneNumber, identifier and email.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/profile</li></ul>|

<h2 id="tocS_ProviderAccountRequest">ProviderAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaprovideraccountrequest"></a>
<a id="schema_ProviderAccountRequest"></a>
<a id="tocSprovideraccountrequest"></a>
<a id="tocsprovideraccountrequest"></a>

```json
{
  "aggregationSource": "SYSTEM",
  "consentId": 0,
  "dataset": [
    {
      "attribute": [
        {
          "container": [
            "bank"
          ],
          "containerAttributes": {
            "BANK": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "CREDITCARD": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "INSURANCE": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "INVESTMENT": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "LOAN": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            }
          },
          "fromDate": "string",
          "fromFinYear": "string",
          "name": "BASIC_ACCOUNT_INFO",
          "toDate": "string",
          "toFinYear": "string"
        }
      ],
      "name": "BASIC_AGG_DATA"
    }
  ],
  "datasetName": [
    "BASIC_AGG_DATA"
  ],
  "field": [
    {
      "id": "string",
      "image": "string",
      "isOptional": true,
      "isValueProvided": true,
      "maxLength": 0,
      "minLength": 0,
      "name": "string",
      "option": [
        {
          "displayText": "string",
          "isSelected": true,
          "optionValue": "string"
        }
      ],
      "prefix": "string",
      "suffix": "string",
      "type": "text",
      "value": "string",
      "valueEditable": "string"
    }
  ],
  "preferences": {
    "isAutoRefreshEnabled": true,
    "isDataExtractsEnabled": true,
    "linkedProviderAccountId": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregationSource|string|false|none|none|
|consentId|integer(int64)|false|none|Consent Id generated for the request through POST Consent.<br><br><b>Endpoints</b>:<ul><li>POST Provider Account</li><li>PUT Provider Account</li></ul>|
|dataset|[[ProvidersDataset](#schemaprovidersdataset)]|false|none|none|
|datasetName|[string]|false|none|none|
|field|[[Field](#schemafield)]|true|none|none|
|preferences|[ProviderAccountPreferences](#schemaprovideraccountpreferences)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|aggregationSource|SYSTEM|
|aggregationSource|USER|
|datasetName|BASIC_AGG_DATA|
|datasetName|ADVANCE_AGG_DATA|
|datasetName|ACCT_PROFILE|
|datasetName|DOCUMENT|

<h2 id="tocS_ProviderAccountResponse">ProviderAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprovideraccountresponse"></a>
<a id="schema_ProviderAccountResponse"></a>
<a id="tocSprovideraccountresponse"></a>
<a id="tocsprovideraccountresponse"></a>

```json
{
  "providerAccount": [
    {
      "aggregationSource": "SYSTEM",
      "consentId": 0,
      "createdDate": "string",
      "dataset": [
        {
          "additionalStatus": "LOGIN_IN_PROGRESS",
          "lastUpdateAttempt": "string",
          "lastUpdated": "string",
          "name": "BASIC_AGG_DATA",
          "nextUpdateScheduled": "string",
          "updateEligibility": "ALLOW_UPDATE"
        }
      ],
      "id": 0,
      "isManual": true,
      "lastUpdated": "string",
      "oauthMigrationStatus": "IN_PROGRESS",
      "preferences": {
        "isAutoRefreshEnabled": true,
        "isDataExtractsEnabled": true,
        "linkedProviderAccountId": 0
      },
      "providerId": 0,
      "requestId": "string",
      "status": "LOGIN_IN_PROGRESS"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providerAccount|[[ProviderAccount](#schemaprovideraccount)]|false|read-only|none|

<h2 id="tocS_ProviderAccountUserProfileResponse">ProviderAccountUserProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprovideraccountuserprofileresponse"></a>
<a id="schema_ProviderAccountUserProfileResponse"></a>
<a id="tocSprovideraccountuserprofileresponse"></a>
<a id="tocsprovideraccountuserprofileresponse"></a>

```json
{
  "providerAccount": [
    {
      "id": 0,
      "profile": [
        {
          "address": [
            {
              "address1": "string",
              "address2": "string",
              "address3": "string",
              "city": "string",
              "country": "string",
              "sourceType": "string",
              "state": "string",
              "street": "string",
              "type": "HOME",
              "zip": "string"
            }
          ],
          "email": [
            {
              "type": "PRIMARY",
              "value": "string"
            }
          ],
          "gender": "string",
          "identifier": [
            {
              "type": "NIE",
              "value": "string"
            }
          ],
          "name": {
            "first": "string",
            "fullName": "string",
            "last": "string",
            "middle": "string"
          },
          "phoneNumber": [
            {
              "type": "HOME",
              "value": "string"
            }
          ]
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providerAccount|[[ProviderAccountProfile](#schemaprovideraccountprofile)]|false|read-only|none|

<h2 id="tocS_ProviderDetail">ProviderDetail</h2>
<!-- backwards compatibility -->
<a id="schemaproviderdetail"></a>
<a id="schema_ProviderDetail"></a>
<a id="tocSproviderdetail"></a>
<a id="tocsproviderdetail"></a>

```json
{
  "PRIORITY": "POPULAR",
  "accountType": [
    "CURRENT"
  ],
  "associatedProviderIds": [
    0
  ],
  "authParameter": [
    "authorizationCode"
  ],
  "authType": "OAUTH",
  "baseUrl": "string",
  "capability": [
    {
      "container": [
        "bank"
      ],
      "name": "string"
    }
  ],
  "countryISOCode": "string",
  "dataset": [
    {
      "attribute": [
        {
          "container": [
            "bank"
          ],
          "containerAttributes": {
            "BANK": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "CREDITCARD": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "INSURANCE": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "INVESTMENT": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "LOAN": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            }
          },
          "fromDate": "string",
          "fromFinYear": "string",
          "name": "BASIC_ACCOUNT_INFO",
          "toDate": "string",
          "toFinYear": "string"
        }
      ],
      "name": "BASIC_AGG_DATA"
    }
  ],
  "favicon": "string",
  "help": "string",
  "id": 0,
  "isAddedByUser": "string",
  "isAutoRefreshEnabled": true,
  "isConsentRequired": true,
  "languageISOCode": "string",
  "lastModified": "string",
  "loginForm": [
    {
      "forgetPasswordURL": "string",
      "formType": "login",
      "help": "string",
      "id": 0,
      "loginHelp": "string",
      "mfaInfoText": "string",
      "mfaInfoTitle": "string",
      "mfaTimeout": 0,
      "row": [
        {
          "field": [
            {
              "id": "string",
              "image": "string",
              "isOptional": true,
              "isValueProvided": true,
              "maxLength": 0,
              "minLength": 0,
              "name": "string",
              "option": [
                {
                  "displayText": "string",
                  "isSelected": true,
                  "optionValue": "string"
                }
              ],
              "prefix": "string",
              "suffix": "string",
              "type": "text",
              "value": "string",
              "valueEditable": "string"
            }
          ],
          "fieldRowChoice": "string",
          "form": "string",
          "id": "string",
          "label": "string"
        }
      ]
    }
  ],
  "loginUrl": "string",
  "logo": "string",
  "name": "string",
  "primaryLanguageISOCode": "string",
  "status": "Supported"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PRIORITY|string|false|read-only|Indicates the priority for which the service is invoked.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br>|
|accountType|[string]|false|read-only|AccountType supported by the provider, eg: Brokerage Cash, Current<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|associatedProviderIds|[integer(int64)]|false|read-only|The screen-scraping providers that are associated to the Open Banking provider ID.<br><br><b>Applicable containers</b>: All Containers<br><b>Endpoints</b>:<ul><li>GET providers</li><li>GET providers/{providerId}</li></ul>|
|authParameter|[string]|false|read-only|AuthParameter appears in the response only in case of token-based aggregation sites.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|authType|string|false|read-only|The authentication type enabled at the provider site. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br>|
|baseUrl|string|false|read-only|The base URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|capability|[[Capability](#schemacapability)]|false|read-only|Capability of the site<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><br><b>Note : </b> capability has been deprecated|
|countryISOCode|string|false|read-only|Country to which the provider belongs.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|dataset|[[ProvidersDataset](#schemaprovidersdataset)]|false|read-only|Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|favicon|string|false|read-only|Favicon link of the provider.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|help|string|false|read-only|Text to guide user through linking an account that belongs to the site<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|id|integer(int64)|false|read-only|Unique identifier for the provider site(e.g., financial institution sites, biller sites, lender sites, etc.).<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|isAddedByUser|string|false|read-only|Indicates that the site has been added by the user at least once.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|isAutoRefreshEnabled|boolean|false|read-only|Indicates if a provider site is auto-refreshed.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|isConsentRequired|boolean|false|read-only|Indicates if a provider site requires consent.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|languageISOCode|string|false|read-only|The language in which the provider details are provided. For example, a site supports two languages English and French. English being the primary language, the provider response will be provided in French depending on the user's locale. The language follows the two letter ISO code.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|lastModified|string|false|read-only|Determines when the provider information was updated by Yodlee. If the customer caches the data, the cache is recommended to be refreshed based on this field.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|loginForm|[[LoginForm](#schemaloginform)]|false|read-only|This entity represents the structure of the login or MFA form that is displayed to the user at the provider site. For performance reasons, this field is returned only when a single provider is requested in the request.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li></ul>|
|loginUrl|string|false|read-only|The login URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|logo|string|false|read-only|The logo link of the provider institution. The link will return the logo in the PNG format.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|name|string|false|read-only|The name of a provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|primaryLanguageISOCode|string|false|read-only|The primary language of the site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|status|string|false|read-only|Determines if the provider is supported for the cobrand (customer), is in the beta stage, etc. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|PRIORITY|POPULAR|
|PRIORITY|SUGGESTED|
|PRIORITY|COBRAND|
|PRIORITY|SEARCH|
|PRIORITY|ALL|
|accountType|CURRENT|
|accountType|BROKERAGE_CASH|
|authParameter|authorizationCode|
|authParameter|idToken|
|authParameter|authResponse|
|authType|OAUTH|
|authType|CREDENTIALS|
|authType|MFA_CREDENTIALS|
|status|Supported|
|status|Beta|
|status|Unsupported|

<h2 id="tocS_ProviderDetailResponse">ProviderDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproviderdetailresponse"></a>
<a id="schema_ProviderDetailResponse"></a>
<a id="tocSproviderdetailresponse"></a>
<a id="tocsproviderdetailresponse"></a>

```json
{
  "provider": [
    {
      "PRIORITY": "POPULAR",
      "accountType": [
        "CURRENT"
      ],
      "associatedProviderIds": [
        0
      ],
      "authParameter": [
        "authorizationCode"
      ],
      "authType": "OAUTH",
      "baseUrl": "string",
      "capability": [
        {
          "container": [
            "bank"
          ],
          "name": "string"
        }
      ],
      "countryISOCode": "string",
      "dataset": [
        {
          "attribute": [
            {
              "container": [
                "bank"
              ],
              "containerAttributes": {
                "BANK": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "CREDITCARD": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "INSURANCE": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "INVESTMENT": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "LOAN": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                }
              },
              "fromDate": "string",
              "fromFinYear": "string",
              "name": "BASIC_ACCOUNT_INFO",
              "toDate": "string",
              "toFinYear": "string"
            }
          ],
          "name": "BASIC_AGG_DATA"
        }
      ],
      "favicon": "string",
      "help": "string",
      "id": 0,
      "isAddedByUser": "string",
      "isAutoRefreshEnabled": true,
      "isConsentRequired": true,
      "languageISOCode": "string",
      "lastModified": "string",
      "loginForm": [
        {
          "forgetPasswordURL": "string",
          "formType": "login",
          "help": "string",
          "id": 0,
          "loginHelp": "string",
          "mfaInfoText": "string",
          "mfaInfoTitle": "string",
          "mfaTimeout": 0,
          "row": [
            {
              "field": [
                {
                  "id": "string",
                  "image": "string",
                  "isOptional": true,
                  "isValueProvided": true,
                  "maxLength": 0,
                  "minLength": 0,
                  "name": "string",
                  "option": [
                    {
                      "displayText": "string",
                      "isSelected": true,
                      "optionValue": "string"
                    }
                  ],
                  "prefix": "string",
                  "suffix": "string",
                  "type": "text",
                  "value": "string",
                  "valueEditable": "string"
                }
              ],
              "fieldRowChoice": "string",
              "form": "string",
              "id": "string",
              "label": "string"
            }
          ]
        }
      ],
      "loginUrl": "string",
      "logo": "string",
      "name": "string",
      "primaryLanguageISOCode": "string",
      "status": "Supported"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|[[ProviderDetail](#schemaproviderdetail)]|false|read-only|none|

<h2 id="tocS_ProviderResponse">ProviderResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproviderresponse"></a>
<a id="schema_ProviderResponse"></a>
<a id="tocSproviderresponse"></a>
<a id="tocsproviderresponse"></a>

```json
{
  "provider": [
    {
      "PRIORITY": "POPULAR",
      "accountType": [
        "CURRENT"
      ],
      "associatedProviderIds": [
        0
      ],
      "authParameter": [
        "authorizationCode"
      ],
      "authType": "OAUTH",
      "baseUrl": "string",
      "capability": [
        {
          "container": [
            "bank"
          ],
          "name": "string"
        }
      ],
      "countryISOCode": "string",
      "dataset": [
        {
          "attribute": [
            {
              "container": [
                "bank"
              ],
              "containerAttributes": {
                "BANK": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "CREDITCARD": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "INSURANCE": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "INVESTMENT": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                },
                "LOAN": {
                  "fullAccountNumberFields": [
                    "paymentAccountNumber"
                  ],
                  "numberOfTransactionDays": 0
                }
              },
              "fromDate": "string",
              "fromFinYear": "string",
              "name": "BASIC_ACCOUNT_INFO",
              "toDate": "string",
              "toFinYear": "string"
            }
          ],
          "name": "BASIC_AGG_DATA"
        }
      ],
      "favicon": "string",
      "forgetPasswordUrl": "string",
      "help": "string",
      "id": 0,
      "isAddedByUser": "string",
      "isAutoRefreshEnabled": true,
      "isConsentRequired": true,
      "languageISOCode": "string",
      "lastModified": "string",
      "loginHelp": "string",
      "loginUrl": "string",
      "logo": "string",
      "name": "string",
      "primaryLanguageISOCode": "string",
      "status": "Supported"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|[[Providers](#schemaproviders)]|false|read-only|none|

<h2 id="tocS_Providers">Providers</h2>
<!-- backwards compatibility -->
<a id="schemaproviders"></a>
<a id="schema_Providers"></a>
<a id="tocSproviders"></a>
<a id="tocsproviders"></a>

```json
{
  "PRIORITY": "POPULAR",
  "accountType": [
    "CURRENT"
  ],
  "associatedProviderIds": [
    0
  ],
  "authParameter": [
    "authorizationCode"
  ],
  "authType": "OAUTH",
  "baseUrl": "string",
  "capability": [
    {
      "container": [
        "bank"
      ],
      "name": "string"
    }
  ],
  "countryISOCode": "string",
  "dataset": [
    {
      "attribute": [
        {
          "container": [
            "bank"
          ],
          "containerAttributes": {
            "BANK": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "CREDITCARD": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "INSURANCE": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "INVESTMENT": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            },
            "LOAN": {
              "fullAccountNumberFields": [
                "paymentAccountNumber"
              ],
              "numberOfTransactionDays": 0
            }
          },
          "fromDate": "string",
          "fromFinYear": "string",
          "name": "BASIC_ACCOUNT_INFO",
          "toDate": "string",
          "toFinYear": "string"
        }
      ],
      "name": "BASIC_AGG_DATA"
    }
  ],
  "favicon": "string",
  "forgetPasswordUrl": "string",
  "help": "string",
  "id": 0,
  "isAddedByUser": "string",
  "isAutoRefreshEnabled": true,
  "isConsentRequired": true,
  "languageISOCode": "string",
  "lastModified": "string",
  "loginHelp": "string",
  "loginUrl": "string",
  "logo": "string",
  "name": "string",
  "primaryLanguageISOCode": "string",
  "status": "Supported"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PRIORITY|string|false|read-only|Indicates the priority for which the service is invoked.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br>|
|accountType|[string]|false|read-only|AccountType supported by the provider, eg: Brokerage Cash, Current<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|associatedProviderIds|[integer(int64)]|false|read-only|The screen-scraping providers that are associated to the Open Banking provider ID.<br><br><b>Applicable containers</b>: All Containers<br><b>Endpoints</b>:<ul><li>GET providers</li><li>GET providers/{providerId}</li></ul>|
|authParameter|[string]|false|read-only|AuthParameter appears in the response only in case of token-based aggregation sites.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|authType|string|false|read-only|The authentication type enabled at the provider site. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br>|
|baseUrl|string|false|read-only|The base URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|capability|[[Capability](#schemacapability)]|false|read-only|Capability of the site<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><br><b>Note : </b> capability has been deprecated|
|countryISOCode|string|false|read-only|Country to which the provider belongs.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|dataset|[[ProvidersDataset](#schemaprovidersdataset)]|false|read-only|Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|favicon|string|false|read-only|Favicon link of the provider.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|forgetPasswordUrl|string|false|read-only|The forget password URL of the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers</li></ul>|
|help|string|false|read-only|Text to guide user through linking an account that belongs to the site<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|id|integer(int64)|false|read-only|Unique identifier for the provider site(e.g., financial institution sites, biller sites, lender sites, etc.).<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|isAddedByUser|string|false|read-only|Indicates that the site has been added by the user at least once.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|isAutoRefreshEnabled|boolean|false|read-only|Indicates if a provider site is auto-refreshed.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|isConsentRequired|boolean|false|read-only|Indicates if a provider site requires consent.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|languageISOCode|string|false|read-only|The language in which the provider details are provided. For example, a site supports two languages English and French. English being the primary language, the provider response will be provided in French depending on the user's locale. The language follows the two letter ISO code.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|lastModified|string|false|read-only|Determines when the provider information was updated by Yodlee. If the customer caches the data, the cache is recommended to be refreshed based on this field.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|loginHelp|string|false|read-only|Help text to guide the user to choose the correct provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers</li></ul>|
|loginUrl|string|false|read-only|The login URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|logo|string|false|read-only|The logo link of the provider institution. The link will return the logo in the PNG format.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|name|string|false|read-only|The name of a provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|primaryLanguageISOCode|string|false|read-only|The primary language of the site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|status|string|false|read-only|Determines if the provider is supported for the cobrand (customer), is in the beta stage, etc. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|PRIORITY|POPULAR|
|PRIORITY|SUGGESTED|
|PRIORITY|COBRAND|
|PRIORITY|SEARCH|
|PRIORITY|ALL|
|accountType|CURRENT|
|accountType|BROKERAGE_CASH|
|authParameter|authorizationCode|
|authParameter|idToken|
|authParameter|authResponse|
|authType|OAUTH|
|authType|CREDENTIALS|
|authType|MFA_CREDENTIALS|
|status|Supported|
|status|Beta|
|status|Unsupported|

<h2 id="tocS_ProvidersCount">ProvidersCount</h2>
<!-- backwards compatibility -->
<a id="schemaproviderscount"></a>
<a id="schema_ProvidersCount"></a>
<a id="tocSproviderscount"></a>
<a id="tocsproviderscount"></a>

```json
{
  "TOTAL": {
    "count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TOTAL|[TotalCount](#schematotalcount)|false|none|none|

<h2 id="tocS_ProvidersCountResponse">ProvidersCountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproviderscountresponse"></a>
<a id="schema_ProvidersCountResponse"></a>
<a id="tocSproviderscountresponse"></a>
<a id="tocsproviderscountresponse"></a>

```json
{
  "provider": {
    "TOTAL": {
      "count": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|[ProvidersCount](#schemaproviderscount)|false|none|none|

<h2 id="tocS_ProvidersDataset">ProvidersDataset</h2>
<!-- backwards compatibility -->
<a id="schemaprovidersdataset"></a>
<a id="schema_ProvidersDataset"></a>
<a id="tocSprovidersdataset"></a>
<a id="tocsprovidersdataset"></a>

```json
{
  "attribute": [
    {
      "container": [
        "bank"
      ],
      "containerAttributes": {
        "BANK": {
          "fullAccountNumberFields": [
            "paymentAccountNumber"
          ],
          "numberOfTransactionDays": 0
        },
        "CREDITCARD": {
          "fullAccountNumberFields": [
            "paymentAccountNumber"
          ],
          "numberOfTransactionDays": 0
        },
        "INSURANCE": {
          "fullAccountNumberFields": [
            "paymentAccountNumber"
          ],
          "numberOfTransactionDays": 0
        },
        "INVESTMENT": {
          "fullAccountNumberFields": [
            "paymentAccountNumber"
          ],
          "numberOfTransactionDays": 0
        },
        "LOAN": {
          "fullAccountNumberFields": [
            "paymentAccountNumber"
          ],
          "numberOfTransactionDays": 0
        }
      },
      "fromDate": "string",
      "fromFinYear": "string",
      "name": "BASIC_ACCOUNT_INFO",
      "toDate": "string",
      "toFinYear": "string"
    }
  ],
  "name": "BASIC_AGG_DATA"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribute|[[Attribute](#schemaattribute)]|false|none|The name of the dataset attribute suported by the provider.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>|
|name|string|false|none|The name of the dataset requested from the provider site<br><br><b>Account Type</b>: Manual<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|name|BASIC_AGG_DATA|
|name|ADVANCE_AGG_DATA|
|name|ACCT_PROFILE|
|name|DOCUMENT|

<h2 id="tocS_RewardBalance">RewardBalance</h2>
<!-- backwards compatibility -->
<a id="schemarewardbalance"></a>
<a id="schema_RewardBalance"></a>
<a id="tocSrewardbalance"></a>
<a id="tocsrewardbalance"></a>

```json
{
  "balance": 0,
  "balanceToLevel": "string",
  "balanceToReward": "string",
  "balanceType": "EXPIRING_BALANCE",
  "description": "string",
  "expiryDate": "string",
  "units": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|number(double)|false|read-only|The actual reward balance.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|balanceToLevel|string|false|read-only|The balance required to reach a reward level.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|balanceToReward|string|false|read-only|The balance required to qualify for a reward such as retaining membership, business reward, etc.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|balanceType|string|false|read-only|The type of reward balance.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|description|string|false|read-only|The description for the reward balance as available at provider source.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|expiryDate|string|false|read-only|The date on which the balance expires.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|
|units|string|false|read-only|Unit of reward balance - miles, points, segments, dollars, credits.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>|

#### Enumerated Values

|Property|Value|
|---|---|
|balanceType|EXPIRING_BALANCE|
|balanceType|BALANCE_TO_LEVEL|
|balanceType|BALANCE_TO_REWARD|
|balanceType|BALANCE|
|balanceType|TOTAL_BALANCE|

<h2 id="tocS_Row">Row</h2>
<!-- backwards compatibility -->
<a id="schemarow"></a>
<a id="schema_Row"></a>
<a id="tocSrow"></a>
<a id="tocsrow"></a>

```json
{
  "field": [
    {
      "id": "string",
      "image": "string",
      "isOptional": true,
      "isValueProvided": true,
      "maxLength": 0,
      "minLength": 0,
      "name": "string",
      "option": [
        {
          "displayText": "string",
          "isSelected": true,
          "optionValue": "string"
        }
      ],
      "prefix": "string",
      "suffix": "string",
      "type": "text",
      "value": "string",
      "valueEditable": "string"
    }
  ],
  "fieldRowChoice": "string",
  "form": "string",
  "id": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|[[Field](#schemafield)]|false|none|Details of fields that belong to the row.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|fieldRowChoice|string|false|none|Fields that belong to a particular choice are collected together using this field.<br><b>Recommendations</b>: All the field row choices label to be grouped and displayed as options to the customer. On choosing a particular choice field, we recommend displaying the fields relevant to them. First field choice could be selected by default.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|form|string|false|none|Form denotes the set of the fields that are related. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|id|string|false|none|Unique identifier of the row.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|
|label|string|false|none|The label text displayed for a row in the form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>|

<h2 id="tocS_RuleClause">RuleClause</h2>
<!-- backwards compatibility -->
<a id="schemaruleclause"></a>
<a id="schema_RuleClause"></a>
<a id="tocSruleclause"></a>
<a id="tocsruleclause"></a>

```json
{
  "field": "amount",
  "fieldValue": "string",
  "operation": "numberEquals",
  "ruleClauseId": 0,
  "userDefinedRuleId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|read-only|Field for which the clause is created.<br><br><br><b>Valid Values</b>:amount,description<b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|
|fieldValue|string|false|read-only|The value would be the amount value in case of amount based rule clause or the string value in case of description based rule clause.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|
|operation|string|false|read-only|Operation for which the clause is created.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|
|ruleClauseId|integer(int64)|false|read-only|Unique identifier generated for the rule clause.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|
|userDefinedRuleId|integer(int64)|false|read-only|Unique identifier generated for every rule the user creates.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|field|amount|
|field|description|
|operation|numberEquals|
|operation|numberLessThan|
|operation|numberLessThanEquals|
|operation|numberGreaterThan|
|operation|numberGreaterThanEquals|
|operation|stringEquals|
|operation|stringContains|

<h2 id="tocS_Security">Security</h2>
<!-- backwards compatibility -->
<a id="schemasecurity"></a>
<a id="schema_Security"></a>
<a id="tocSsecurity"></a>
<a id="tocssecurity"></a>

```json
{
  "accrualMethod": "string",
  "agencyFactor": 0,
  "callDate": "string",
  "callPrice": 0,
  "cdscFundFlag": true,
  "closedFlag": true,
  "cusip": "string",
  "description": "string",
  "federalTaxable": true,
  "firmEligible": "string",
  "firstCouponDate": "string",
  "frequency": 0,
  "fundFamily": "string",
  "gicsSector": "string",
  "id": 0,
  "incomeCurrency": "string",
  "interestRate": 0,
  "isDummySecurity": true,
  "isEnvestnetDummySecurity": true,
  "isSyntheticSecurity": true,
  "isin": "string",
  "issueDate": "string",
  "issueTypeMultiplier": 0,
  "lastCouponDate": "string",
  "lastModifiedDate": "string",
  "maturityDate": "string",
  "minimumPurchase": 0,
  "moodyRating": "string",
  "sAndPRating": "string",
  "sector": "string",
  "sedol": "string",
  "shareClass": "string",
  "stateTaxable": true,
  "stockExchangeDetails": [
    {
      "countryCode": "string",
      "currencyCode": "string",
      "exchangeCode": "string",
      "symbol": "string"
    }
  ],
  "style": "string",
  "subSector": "string",
  "tradeCurrencyCode": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accrualMethod|string|false|read-only|The method in which interest is accrued or earned.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|agencyFactor|number(double)|false|read-only|Agency factor of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|callDate|string|false|read-only|Next call date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|callPrice|number(double)|false|read-only|Next call price of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|cdscFundFlag|boolean|false|read-only|cdsc fund flag of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|closedFlag|boolean|false|read-only|<b>true</b>:Closed for all investors , <b>false</b>: Open to all investors.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|cusip|string|false|read-only|A CUSIP is a nine-character alphanumeric code that identifies a North American financial security for the purposes of facilitating clearing and settlement of trades.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|description|string|false|read-only|The description (name) of the security. For example, Cisco Systems.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|federalTaxable|boolean|false|read-only|Flag indicating federal taxable.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|firmEligible|string|false|read-only|<b>1</b>- indicates Eligible,<b>0</b>- indicates firm is not eligible.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|firstCouponDate|string|false|read-only|First coupon date of security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|frequency|integer(int32)|false|read-only|Coupon Frequency.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|fundFamily|string|false|read-only|Mutual Fund Family Name.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|gicsSector|string|false|read-only|GICS Sector is a categorization the S&P assigns to all publically traded companies. <br><br><b>Applicable containers</b>: investment, insurance<br>|
|id|integer(int64)|false|read-only|The unique identifier of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|incomeCurrency|string|false|read-only|ISO 4217 currency code indicating income currency of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|interestRate|number(double)|false|read-only|The rate of interest paid annually, expressed as a percentage of the bond's par or face value.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|isDummySecurity|boolean|false|read-only|Indicates whether the security is a dummy security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|isEnvestnetDummySecurity|boolean|false|read-only|Flag indicating a dummy security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|isSyntheticSecurity|boolean|false|read-only|Indicates whether the security is a simulated security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|isin|string|false|read-only|The International Securities Identification Number (ISIN) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|issueDate|string|false|read-only|Issue date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|issueTypeMultiplier|number(double)|false|read-only|Price units corresponding to the security style. This is used to derive actual price of the security from market value.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|lastCouponDate|string|false|read-only|Last coupon date of security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|lastModifiedDate|string|false|read-only|The last updated date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|maturityDate|string|false|read-only|Maturity date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|minimumPurchase|integer(int32)|false|read-only|Minimum purchase of security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|moodyRating|string|false|read-only|Unique identifier for Moody rating on Envestnet platform.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|sAndPRating|string|false|read-only|Unique identifier for S&P rating on Envestnet platform.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|sector|string|false|read-only|Identifier of the sector to which the security belongs to.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|sedol|string|false|read-only|The Stock Exchange Daily Official List (SEDOL) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|shareClass|string|false|read-only|Share class of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|stateTaxable|boolean|false|read-only|The state in which the security is taxed.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|stockExchangeDetails|[[StockExchangeDetail](#schemastockexchangedetail)]|false|read-only|Securities exchange provide the securities information at the corresponding exchanges. <br><br><b>Applicable containers</b>: investment, insurance<br>|
|style|string|false|read-only|Classification of the style for the security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|subSector|string|false|read-only|GICS sector ID to which the security belongs to.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|tradeCurrencyCode|string|false|read-only|ISO 4217 currency code indicating trading currency of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|type|string|false|read-only|Indicates the type of security like stocks, mutual fund, etc. <br><br><b>Applicable containers</b>: investment, insurance<br>|

<h2 id="tocS_SecurityHolding">SecurityHolding</h2>
<!-- backwards compatibility -->
<a id="schemasecurityholding"></a>
<a id="schema_SecurityHolding"></a>
<a id="tocSsecurityholding"></a>
<a id="tocssecurityholding"></a>

```json
{
  "id": "string",
  "security": {
    "accrualMethod": "string",
    "agencyFactor": 0,
    "callDate": "string",
    "callPrice": 0,
    "cdscFundFlag": true,
    "closedFlag": true,
    "cusip": "string",
    "description": "string",
    "federalTaxable": true,
    "firmEligible": "string",
    "firstCouponDate": "string",
    "frequency": 0,
    "fundFamily": "string",
    "gicsSector": "string",
    "id": 0,
    "incomeCurrency": "string",
    "interestRate": 0,
    "isDummySecurity": true,
    "isEnvestnetDummySecurity": true,
    "isSyntheticSecurity": true,
    "isin": "string",
    "issueDate": "string",
    "issueTypeMultiplier": 0,
    "lastCouponDate": "string",
    "lastModifiedDate": "string",
    "maturityDate": "string",
    "minimumPurchase": 0,
    "moodyRating": "string",
    "sAndPRating": "string",
    "sector": "string",
    "sedol": "string",
    "shareClass": "string",
    "stateTaxable": true,
    "stockExchangeDetails": [
      {
        "countryCode": "string",
        "currencyCode": "string",
        "exchangeCode": "string",
        "symbol": "string"
      }
    ],
    "style": "string",
    "subSector": "string",
    "tradeCurrencyCode": "string",
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|none|
|security|[Security](#schemasecurity)|false|none|none|

<h2 id="tocS_Statement">Statement</h2>
<!-- backwards compatibility -->
<a id="schemastatement"></a>
<a id="schema_Statement"></a>
<a id="tocSstatement"></a>
<a id="tocsstatement"></a>

```json
{
  "accountId": 0,
  "amountDue": {
    "amount": 0,
    "currency": "AUD"
  },
  "apr": 0,
  "billingPeriodEnd": "string",
  "billingPeriodStart": "string",
  "cashAdvance": {
    "amount": 0,
    "currency": "AUD"
  },
  "cashApr": 0,
  "dueDate": "string",
  "id": 0,
  "interestAmount": {
    "amount": 0,
    "currency": "AUD"
  },
  "isLatest": true,
  "lastPaymentAmount": {
    "amount": 0,
    "currency": "AUD"
  },
  "lastPaymentDate": "string",
  "lastUpdated": "string",
  "loanBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "minimumPayment": {
    "amount": 0,
    "currency": "AUD"
  },
  "newCharges": {
    "amount": 0,
    "currency": "AUD"
  },
  "principalAmount": {
    "amount": 0,
    "currency": "AUD"
  },
  "statementDate": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int64)|false|read-only|Account to which the statement belongs to.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>|
|amountDue|[Money](#schemamoney)|false|none|none|
|apr|number(double)|false|read-only|The APR applied to the balance on the credit card account, as available in the statement.<br><b>Note:</b> In case of variable APR, the APR available on the statement might differ from the APR available at the account-level.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>|
|billingPeriodEnd|string|false|read-only|The end date of the statement period.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>|
|billingPeriodStart|string|false|read-only|The start date of the statement period.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>|
|cashAdvance|[Money](#schemamoney)|false|none|none|
|cashApr|number(double)|false|read-only|The APR applicable to cash withdrawals on the credit card account.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>|
|dueDate|string|false|read-only|The date by when the minimum payment is due to be paid.<br><b>Note:</b> The due date that appears in the statement may differ from the due date at the account-level.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>|
|id|integer(int64)|false|read-only|Unique identifier for the statement.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>|
|interestAmount|[Money](#schemamoney)|false|none|none|
|isLatest|boolean|false|read-only|The field is set to true if the statement is the latest generated statement.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>|
|lastPaymentAmount|[Money](#schemamoney)|false|none|none|
|lastPaymentDate|string|false|read-only|The date on which the last payment was done during the billing cycle.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>|
|lastUpdated|string|false|read-only|The date when the account was last updated by Yodlee.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>|
|loanBalance|[Money](#schemamoney)|false|none|none|
|minimumPayment|[Money](#schemamoney)|false|none|none|
|newCharges|[Money](#schemamoney)|false|none|none|
|principalAmount|[Money](#schemamoney)|false|none|none|
|statementDate|string|false|read-only|The date on which the statement is generated.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>|

<h2 id="tocS_StatementResponse">StatementResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatementresponse"></a>
<a id="schema_StatementResponse"></a>
<a id="tocSstatementresponse"></a>
<a id="tocsstatementresponse"></a>

```json
{
  "statement": [
    {
      "accountId": 0,
      "amountDue": {
        "amount": 0,
        "currency": "AUD"
      },
      "apr": 0,
      "billingPeriodEnd": "string",
      "billingPeriodStart": "string",
      "cashAdvance": {
        "amount": 0,
        "currency": "AUD"
      },
      "cashApr": 0,
      "dueDate": "string",
      "id": 0,
      "interestAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "isLatest": true,
      "lastPaymentAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "lastPaymentDate": "string",
      "lastUpdated": "string",
      "loanBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "minimumPayment": {
        "amount": 0,
        "currency": "AUD"
      },
      "newCharges": {
        "amount": 0,
        "currency": "AUD"
      },
      "principalAmount": {
        "amount": 0,
        "currency": "AUD"
      },
      "statementDate": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statement|[[Statement](#schemastatement)]|false|read-only|none|

<h2 id="tocS_StockExchangeDetail">StockExchangeDetail</h2>
<!-- backwards compatibility -->
<a id="schemastockexchangedetail"></a>
<a id="schema_StockExchangeDetail"></a>
<a id="tocSstockexchangedetail"></a>
<a id="tocsstockexchangedetail"></a>

```json
{
  "countryCode": "string",
  "currencyCode": "string",
  "exchangeCode": "string",
  "symbol": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|false|read-only|Country codes are geocodes developed to represent countries and dependent areas.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|currencyCode|string|false|read-only|ISO codes of currency.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|exchangeCode|string|false|read-only|An Exchange code is a four-character code used to identify stock markets and other trading exchanges within global trading.<br><br><b>Applicable containers</b>: investment, insurance<br>|
|symbol|string|false|read-only|Ticker symbol representing particular securities listed on an exchange.<br><br><b>Applicable containers</b>: investment, insurance<br>|

<h2 id="tocS_TotalCount">TotalCount</h2>
<!-- backwards compatibility -->
<a id="schematotalcount"></a>
<a id="schema_TotalCount"></a>
<a id="tocStotalcount"></a>
<a id="tocstotalcount"></a>

```json
{
  "count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|read-only|none|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "CONTAINER": "bank",
  "accountId": 0,
  "amount": {
    "amount": 0,
    "currency": "AUD"
  },
  "baseType": "CREDIT",
  "category": "string",
  "categoryId": 0,
  "categorySource": "SYSTEM",
  "categoryType": "TRANSFER",
  "checkNumber": "string",
  "commission": {
    "amount": 0,
    "currency": "AUD"
  },
  "createdDate": "string",
  "cusipNumber": "string",
  "date": "string",
  "description": {
    "consumer": "string",
    "original": "string",
    "security": "string",
    "simple": "string"
  },
  "detailCategoryId": 0,
  "highLevelCategoryId": 0,
  "holdingDescription": "string",
  "id": 0,
  "interest": {
    "amount": 0,
    "currency": "AUD"
  },
  "isManual": true,
  "isin": "string",
  "lastUpdated": "string",
  "memo": "string",
  "merchant": {
    "address": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "sourceType": "string",
      "state": "string",
      "street": "string",
      "type": "HOME",
      "zip": "string"
    },
    "categoryLabel": [
      "string"
    ],
    "contact": {
      "email": "string",
      "phone": "string"
    },
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    },
    "id": "string",
    "name": "string",
    "source": "YODLEE",
    "website": "string"
  },
  "parentCategoryId": 0,
  "postDate": "string",
  "price": {
    "amount": 0,
    "currency": "AUD"
  },
  "principal": {
    "amount": 0,
    "currency": "AUD"
  },
  "quantity": 0,
  "runningBalance": {
    "amount": 0,
    "currency": "AUD"
  },
  "sedol": "string",
  "settleDate": "string",
  "sourceId": "string",
  "sourceType": "AGGREGATED",
  "status": "POSTED",
  "subType": "AUTH_HOLD",
  "symbol": "string",
  "transactionDate": "string",
  "type": "string",
  "valoren": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CONTAINER|string|false|read-only|The account's container.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>|
|accountId|integer(int64)|false|read-only|The account from which the transaction was made. This is basically the primary key of the account resource. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|amount|[Money](#schemamoney)|false|none|none|
|baseType|string|false|read-only|Indicates if the transaction appears as a debit or a credit transaction in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>|
|category|string|false|read-only|The name of the category assigned to the transaction. This is the category field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|categoryId|integer(int64)|false|read-only|The id of the category assigned to the transaction. This is the id field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|categorySource|string|false|read-only|Indicates the source of the category, i.e., categories derived by the system or assigned/provided by the consumer. This is the source field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>|
|categoryType|string|false|read-only|The categoryType of the category assigned to the transaction. This is the type field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|checkNumber|string|false|read-only|The checkNumber of the transaction.<br><br><b>Applicable containers</b>: bank<br>|
|commission|[Money](#schemamoney)|false|none|none|
|createdDate|string|false|read-only|none|
|cusipNumber|string|false|read-only|The CUSIP (Committee on Uniform Securities Identification Procedures) identifies the financial instruments in the United States and Canada.<br><b><br><b>Note</b></b>: The CUSIP number field applies only to trade related transactions.<br><br><b>Applicable containers</b>: investment<br>|
|date|string|false|read-only|The value provided will be either postDate or transactionDate. postDate takes higher priority than transactionDate, except for the investment container as only transactionDate is available. The availability of postDate or transactionDate depends on the provider site.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|description|[Description](#schemadescription)|false|none|none|
|detailCategoryId|integer(int64)|false|read-only|The id of the detail category that is assigned to the transaction. The supported values are provided by GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard<br>|
|highLevelCategoryId|integer(int64)|false|read-only|The high level category assigned to the transaction. The supported values are provided by the GET transactions/categories. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|holdingDescription|string|false|read-only|For transactions involving securities, this captures the securities description.<br><br><b>Applicable containers</b>: investment<br>|
|id|integer(int64)|false|read-only|An unique identifier for the transaction. The combination of the id and account container are unique in the system. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|interest|[Money](#schemamoney)|false|none|none|
|isManual|boolean|false|read-only|Indicates if the transaction is aggregated from the FI site or the consumer has manually created the transaction using the application or an API. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|isin|string|false|read-only|International Securities Identification Number (ISIN) standard is used worldwide to identify specific securities.<br><br><b>Applicable containers</b>: investment<br>|
|lastUpdated|string|false|read-only|none|
|memo|string|false|read-only|Additional notes provided by the user for a particular  transaction through application or API services. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|merchant|[Merchant](#schemamerchant)|false|none|none|
|parentCategoryId|integer(int64)|false|read-only|The parentCategoryId of the category assigned to the transaction.<br><b>Note</b>: This field will be provided in the response if the transaction is assigned to a user-created category. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|postDate|string|false|read-only|The date on which the transaction is posted to the account.<br><br><b>Applicable containers</b>: bank,creditCard,insurance,loan<br>|
|price|[Money](#schemamoney)|false|none|none|
|principal|[Money](#schemamoney)|false|none|none|
|quantity|number(double)|false|read-only|The quantity associated with the transaction.<br><b>Note</b>: The quantity field applies only to trade-related transactions.<br><br><b>Applicable containers</b>: investment<br>|
|runningBalance|[Money](#schemamoney)|false|none|none|
|sedol|string|false|read-only|SEDOL stands for Stock Exchange Daily Official List, a list of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><br><b>Applicable containers</b>: investment<br>|
|settleDate|string|false|read-only|It is the date on which the transaction is finalized, that is, the date the ownership of the security is transferred to the buyer. The settlement date is usually few days after the transaction date.<br><br><b>Applicable containers</b>: investment<br>|
|sourceId|string|false|read-only|A unique ID that the provider site has assigned to the transaction. The source ID is only available for the pre-populated accounts.<br>Pre-populated accounts are the accounts that the FI customers shares with Yodlee, so that the user does not have to add or aggregate those accounts.|
|sourceType|string|false|read-only|The source through which the transaction is added to the Yodlee system.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loann<br><b>Applicable Values:</b><br>|
|status|string|false|read-only|The status of the transaction: pending or posted.<br><b>Note</b>: Most FI sites only display posted transactions. If the FI site displays transaction status, same will be aggregated.  <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>|
|subType|string|false|read-only|The transaction subtype field provides a detailed transaction type. For example, purchase is a transaction type and the transaction subtype field indicates if the purchase was made using a debit or credit card.<br><b>Note</b>: The transaction subtype field is available only in the United States, Canada, United Kingdom, and India.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|symbol|string|false|read-only|The symbol of the security being traded.<br><b>Note</b>: The settle date field applies only to trade-related transactions. <br><br><b>Applicable containers</b>: investment<br>|
|transactionDate|string|false|read-only|The date the transaction happens in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>|
|type|string|false|read-only|The nature of the transaction, i.e., deposit, refund, payment, etc.<br><b>Note</b>: The transaction type field is available only for the United States, Canada, United Kingdom, and India based provider sites. <br><br><b>Applicable containers</b>: bank,creditCard,investment<br>|
|valoren|string|false|read-only|It is an identification number that is assigned to financial instruments such as stocks and bonds trading in Switzerland.<br><br><b>Applicable containers</b>: investment<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|CONTAINER|bank|
|CONTAINER|creditCard|
|CONTAINER|investment|
|CONTAINER|insurance|
|CONTAINER|loan|
|CONTAINER|reward|
|CONTAINER|realEstate|
|CONTAINER|otherAssets|
|CONTAINER|otherLiabilities|
|baseType|CREDIT|
|baseType|DEBIT|
|categorySource|SYSTEM|
|categorySource|USER|
|categoryType|TRANSFER|
|categoryType|DEFERRED_COMPENSATION|
|categoryType|UNCATEGORIZE|
|categoryType|INCOME|
|categoryType|EXPENSE|
|sourceType|AGGREGATED|
|sourceType|MANUAL|
|status|POSTED|
|status|PENDING|
|status|SCHEDULED|
|status|FAILED|
|status|CLEARED|
|subType|AUTH_HOLD|
|subType|AUTH_REQUEST|
|subType|OVERDRAFT_CHARGE|
|subType|CREDIT_ADJUSTMENT|
|subType|PIN_DEBIT|
|subType|BANK_DIRECT_DEPOSIT|
|subType|DIVIDEND_DEPOSIT|
|subType|INTEREST_SAVINGS|
|subType|INTEREST_ADJUSTMENT|
|subType|ONLINE_PURCHASE|
|subType|PURCHASED_WITH_CHECK|
|subType|RECURRING_BILLING|
|subType|TAX_PAYMENT|
|subType|PAYMENT_BY_CHECK|
|subType|PAYMENT_PLAN|
|subType|FEE_REFUND|
|subType|WIRE_TRANSFER_CHARGE|
|subType|ACCOUNT_TO_ACCOUNT_TRANSFER|
|subType|BANK_TO_BANK_TRANSACTION|
|subType|BANK_TO_NON_BANK_ACCOUNT_TRANSFER|
|subType|CASH_WITHDRAWAL_AT_FI|
|subType|ATM_CASH_WITHDRAWAL|
|subType|AUTH_PROCESSING|
|subType|AUTH_RELEASE|
|subType|PRE_AUTH|
|subType|AUTH_COMPLETE|
|subType|AUTH_VOID|
|subType|BALANCE_ENQUIRY|
|subType|ACCOUNT_VERIFICATION|
|subType|PRE_AUTH_COMPLETION|
|subType|SERVICE_CHARGE|
|subType|SERVICE_CHARGE_FEE_REFUND|
|subType|RETURNED_CHECK_CHARGE|
|subType|RETURNED_CHECK_REIMBURSEMENT|
|subType|CASH_ADVANCE|
|subType|BILL_PAY_CHARGE|
|subType|CHECK_IMAGE_SERVICE_CHARGE|
|subType|OVERDRAFT_PROTECTION_CHARGE|
|subType|STOP_PAYMENT_CHARGE|
|subType|CHECKS_ORDERING_CHARGE|
|subType|MONTHLY_MAINTENANCE_CHARGE|
|subType|DEBIT_CARD_FEE|
|subType|CONVENIENCE_FEE|
|subType|PERSONAL_LOAN_CREDIT|
|subType|CREDIT_CARD_CREDIT|
|subType|AUTO_LOAN|
|subType|HOME_LOAN_MORTGAGE|
|subType|SHORT_TERM_CREDIT|
|subType|SIGNATURE_DEBIT|
|subType|CONTACT_LESS_DEBIT|
|subType|DEFERRED_DEPOSIT|
|subType|DEFERRED_BILL_PAY|
|subType|INSTALLMENT_PAYMENT|
|subType|RECURRING_SUBSCRIPTION_PAYMENT|
|subType|HOLD_CHECK_PAYMENT|
|subType|CAPITAL_GAINS_DISTIBUTION|
|subType|CG_LONG_TERM_DEPOSIT|
|subType|OPEN_SALE_DEPOSIT|
|subType|INTEREST__CHECK|
|subType|PURCHASE_VOID|
|subType|PURCHASE_WITH_CREDIT_CARD|
|subType|PURCHASE_WITH_DEBIT_CARD|
|subType|CHARGE_A_REPEAT_CUSTOMER|
|subType|DOWN_PAYMENT_OR_ANNUITY_PAYMENT_OR_DIRECT_PAYMENT|
|subType|FEE_PAYMENT|
|subType|FINANCE_CHARGE_REFUND|
|subType|TRANSACTION_VOID|
|subType|FEE_VOID|
|subType|DEBIT_CARD_WITHDRAWAL_AT_STORE|
|subType|ELECTRONIC_PAYMENT|
|subType|ACH_DEBIT|
|subType|ATM_TELLER_DEPOSIT|
|subType|POS_DEBIT|
|subType|BANK_ADJUSTMENT|
|subType|CHARGES_FEES|
|subType|INTEREST|
|subType|DEPOSITS_CREDITS|
|subType|PAYMENT|
|subType|PURCHASE|
|subType|REFUND|
|subType|TRANSFER|
|subType|WITHDRAWAL|
|subType|OTHER_DEPOSITS|
|subType|OTHER_WITHDRAWALS|
|subType|ADJUSTMENT|
|subType|FINANCE_CHARGE|
|subType|OTHER_CHARGES_FEES|
|subType|ANNUAL_FEE|
|subType|DEPOSIT|
|subType|DIRECT_DEPOSIT_SALARY|
|subType|INVESTMENT_INCOME_CASH|
|subType|SSA|
|subType|REWARDS|
|subType|CHECK_DEPOSIT|
|subType|MOBILE_REMOTE_DEPOSIT|
|subType|TELLER_DEPOSIT|
|subType|TAX_REFUND|
|subType|CREDIT_CARD_PAYMENT|
|subType|INSURANCE_PAYMENT|
|subType|UTILITIES_PAYMENT|
|subType|CHILD_SUPPORT|
|subType|LOAN|
|subType|PERSONAL_LOAN|
|subType|STUDENT_LOAN|
|subType|SALES_TAX|
|subType|REIMBURSEMENT|
|subType|BALANCE_TRANSFER|
|subType|WIRE_TRANSFER|
|subType|OVERDRAFT_PROTECTION|
|subType|DEBIT|
|subType|CREDIT|
|subType|NSF_FEES|

<h2 id="tocS_TransactionCategorizationRule">TransactionCategorizationRule</h2>
<!-- backwards compatibility -->
<a id="schematransactioncategorizationrule"></a>
<a id="schema_TransactionCategorizationRule"></a>
<a id="tocStransactioncategorizationrule"></a>
<a id="tocstransactioncategorizationrule"></a>

```json
{
  "categoryLevelId": 0,
  "memId": 0,
  "ruleClauses": [
    {
      "field": "amount",
      "fieldValue": "string",
      "operation": "numberEquals",
      "ruleClauseId": 0,
      "userDefinedRuleId": 0
    }
  ],
  "rulePriority": 0,
  "transactionCategorisationId": 0,
  "userDefinedRuleId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryLevelId|integer(int32)|false|read-only|The level of the category for which the rule is created.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br>|
|memId|integer(int64)|false|read-only|Unique identifier of the user.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|
|ruleClauses|[[RuleClause](#schemaruleclause)]|false|read-only|Details of rules. <br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|
|rulePriority|integer(int32)|false|read-only|The order in which the rules get executed on transactions.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|
|transactionCategorisationId|integer(int64)|false|read-only|Category id that is assigned to the transaction when the transaction matches the rule clause. This is the id field of the transaction category resource.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|
|userDefinedRuleId|integer(int64)|false|read-only|Unique identifier generated for every rule the user creates.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|

<h2 id="tocS_TransactionCategorizationRuleInfo">TransactionCategorizationRuleInfo</h2>
<!-- backwards compatibility -->
<a id="schematransactioncategorizationruleinfo"></a>
<a id="schema_TransactionCategorizationRuleInfo"></a>
<a id="tocStransactioncategorizationruleinfo"></a>
<a id="tocstransactioncategorizationruleinfo"></a>

```json
{
  "categoryId": 0,
  "priority": 0,
  "ruleClause": [
    {
      "field": "amount",
      "operation": "numberEquals",
      "value": {}
    }
  ],
  "source": "SYSTEM"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|integer(int32)|true|none|none|
|priority|integer(int32)|false|none|none|
|ruleClause|[[FieldOperation](#schemafieldoperation)]|true|none|none|
|source|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|SYSTEM|
|source|USER|

<h2 id="tocS_TransactionCategorizationRuleRequest">TransactionCategorizationRuleRequest</h2>
<!-- backwards compatibility -->
<a id="schematransactioncategorizationrulerequest"></a>
<a id="schema_TransactionCategorizationRuleRequest"></a>
<a id="tocStransactioncategorizationrulerequest"></a>
<a id="tocstransactioncategorizationrulerequest"></a>

```json
{
  "rule": {
    "categoryId": 0,
    "priority": 0,
    "ruleClause": [
      {
        "field": "amount",
        "operation": "numberEquals",
        "value": {}
      }
    ],
    "source": "SYSTEM"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule|[TransactionCategorizationRuleInfo](#schematransactioncategorizationruleinfo)|true|none|none|

<h2 id="tocS_TransactionCategorizationRuleResponse">TransactionCategorizationRuleResponse</h2>
<!-- backwards compatibility -->
<a id="schematransactioncategorizationruleresponse"></a>
<a id="schema_TransactionCategorizationRuleResponse"></a>
<a id="tocStransactioncategorizationruleresponse"></a>
<a id="tocstransactioncategorizationruleresponse"></a>

```json
{
  "txnRules": [
    {
      "categoryLevelId": 0,
      "memId": 0,
      "ruleClauses": [
        {
          "field": "amount",
          "fieldValue": "string",
          "operation": "numberEquals",
          "ruleClauseId": 0,
          "userDefinedRuleId": 0
        }
      ],
      "rulePriority": 0,
      "transactionCategorisationId": 0,
      "userDefinedRuleId": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|txnRules|[[TransactionCategorizationRule](#schematransactioncategorizationrule)]|false|read-only|none|

<h2 id="tocS_TransactionCategory">TransactionCategory</h2>
<!-- backwards compatibility -->
<a id="schematransactioncategory"></a>
<a id="schema_TransactionCategory"></a>
<a id="tocStransactioncategory"></a>
<a id="tocstransactioncategory"></a>

```json
{
  "category": "string",
  "classification": "PERSONAL",
  "defaultCategoryName": "string",
  "defaultHighLevelCategoryName": "string",
  "detailCategory": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "highLevelCategoryId": 0,
  "highLevelCategoryName": "string",
  "id": 0,
  "source": "SYSTEM",
  "type": "TRANSFER"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|read-only|The name of the category.<br><b>Note</b>: Transaction categorization is one of the core features offered by Yodlee and the categories are assigned to the transactions by the system. Transactions can be clubbed together by the category that is assigned to them.  <br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|
|classification|string|false|read-only|Category Classification.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br><b>Applicable Values</b><br>|
|defaultCategoryName|string|false|read-only|A attribute which will always hold the first value(initial name) of Yodlee defined category attribute.<br><br><b>Applicable containers</b>: creditCard, investment, insurance, loan<br>|
|defaultHighLevelCategoryName|string|false|read-only|A attribute which will always hold the first value(initial name) of Yodlee defined highLevelCategoryName attribute.<br><br><b>Applicable containers</b>: creditCard, investment, insurance, loan<br>|
|detailCategory|[[DetailCategory](#schemadetailcategory)]|false|read-only|Entity that provides detail category attributes<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|
|highLevelCategoryId|integer(int64)|false|read-only|The unique identifier of the high level category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|
|highLevelCategoryName|string|false|read-only|The name of the high level category. A group of similar transaction categories are clubbed together to form a high-level category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|
|id|integer(int64)|false|read-only|Unique identifier of the category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>|
|source|string|false|read-only|Source used to identify whether the transaction category is user defined category or system created category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br><b>Applicable Values</b><br>|
|type|string|false|read-only|Transaction categories and high-level categories are further mapped to five transaction category types. Customers, based on their needs can either use the transaction categories, the high-level categories, or the transaction category types. <br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br><b>Applicable Values</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|classification|PERSONAL|
|classification|BUSINESS|
|source|SYSTEM|
|source|USER|
|type|TRANSFER|
|type|DEFERRED_COMPENSATION|
|type|UNCATEGORIZE|
|type|INCOME|
|type|EXPENSE|

<h2 id="tocS_TransactionCategoryRequest">TransactionCategoryRequest</h2>
<!-- backwards compatibility -->
<a id="schematransactioncategoryrequest"></a>
<a id="schema_TransactionCategoryRequest"></a>
<a id="tocStransactioncategoryrequest"></a>
<a id="tocstransactioncategoryrequest"></a>

```json
{
  "categoryName": "string",
  "parentCategoryId": 1,
  "source": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryName|string|false|none|none|
|parentCategoryId|integer(int32)|true|none|none|
|source|string|false|read-only|none|

<h2 id="tocS_TransactionCategoryResponse">TransactionCategoryResponse</h2>
<!-- backwards compatibility -->
<a id="schematransactioncategoryresponse"></a>
<a id="schema_TransactionCategoryResponse"></a>
<a id="tocStransactioncategoryresponse"></a>
<a id="tocstransactioncategoryresponse"></a>

```json
{
  "transactionCategory": [
    {
      "category": "string",
      "classification": "PERSONAL",
      "defaultCategoryName": "string",
      "defaultHighLevelCategoryName": "string",
      "detailCategory": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "highLevelCategoryId": 0,
      "highLevelCategoryName": "string",
      "id": 0,
      "source": "SYSTEM",
      "type": "TRANSFER"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactionCategory|[[TransactionCategory](#schematransactioncategory)]|false|read-only|none|

<h2 id="tocS_TransactionCount">TransactionCount</h2>
<!-- backwards compatibility -->
<a id="schematransactioncount"></a>
<a id="schema_TransactionCount"></a>
<a id="tocStransactioncount"></a>
<a id="tocstransactioncount"></a>

```json
{
  "TOTAL": {
    "count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TOTAL|[TransactionTotal](#schematransactiontotal)|false|none|none|

<h2 id="tocS_TransactionCountResponse">TransactionCountResponse</h2>
<!-- backwards compatibility -->
<a id="schematransactioncountresponse"></a>
<a id="schema_TransactionCountResponse"></a>
<a id="tocStransactioncountresponse"></a>
<a id="tocstransactioncountresponse"></a>

```json
{
  "transaction": {
    "TOTAL": {
      "count": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction|[TransactionCount](#schematransactioncount)|false|none|none|

<h2 id="tocS_TransactionDays">TransactionDays</h2>
<!-- backwards compatibility -->
<a id="schematransactiondays"></a>
<a id="schema_TransactionDays"></a>
<a id="tocStransactiondays"></a>
<a id="tocstransactiondays"></a>

```json
{
  "fullAccountNumberFields": [
    "paymentAccountNumber"
  ],
  "numberOfTransactionDays": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullAccountNumberFields|[string]|false|none|none|
|numberOfTransactionDays|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|fullAccountNumberFields|paymentAccountNumber|
|fullAccountNumberFields|unmaskedAccountNumber|

<h2 id="tocS_TransactionRequest">TransactionRequest</h2>
<!-- backwards compatibility -->
<a id="schematransactionrequest"></a>
<a id="schema_TransactionRequest"></a>
<a id="tocStransactionrequest"></a>
<a id="tocstransactionrequest"></a>

```json
{
  "transaction": {
    "categoryId": 0,
    "categorySource": "SYSTEM",
    "container": "bank",
    "description": {
      "consumer": "string",
      "original": "string",
      "security": "string",
      "simple": "string"
    },
    "memo": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction|[UpdateTransaction](#schemaupdatetransaction)|true|none|none|

<h2 id="tocS_TransactionResponse">TransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schematransactionresponse"></a>
<a id="schema_TransactionResponse"></a>
<a id="tocStransactionresponse"></a>
<a id="tocstransactionresponse"></a>

```json
{
  "transaction": [
    {
      "CONTAINER": "bank",
      "accountId": 0,
      "amount": {
        "amount": 0,
        "currency": "AUD"
      },
      "baseType": "CREDIT",
      "category": "string",
      "categoryId": 0,
      "categorySource": "SYSTEM",
      "categoryType": "TRANSFER",
      "checkNumber": "string",
      "commission": {
        "amount": 0,
        "currency": "AUD"
      },
      "createdDate": "string",
      "cusipNumber": "string",
      "date": "string",
      "description": {
        "consumer": "string",
        "original": "string",
        "security": "string",
        "simple": "string"
      },
      "detailCategoryId": 0,
      "highLevelCategoryId": 0,
      "holdingDescription": "string",
      "id": 0,
      "interest": {
        "amount": 0,
        "currency": "AUD"
      },
      "isManual": true,
      "isin": "string",
      "lastUpdated": "string",
      "memo": "string",
      "merchant": {
        "address": {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "city": "string",
          "country": "string",
          "sourceType": "string",
          "state": "string",
          "street": "string",
          "type": "HOME",
          "zip": "string"
        },
        "categoryLabel": [
          "string"
        ],
        "contact": {
          "email": "string",
          "phone": "string"
        },
        "coordinates": {
          "latitude": 0,
          "longitude": 0
        },
        "id": "string",
        "name": "string",
        "source": "YODLEE",
        "website": "string"
      },
      "parentCategoryId": 0,
      "postDate": "string",
      "price": {
        "amount": 0,
        "currency": "AUD"
      },
      "principal": {
        "amount": 0,
        "currency": "AUD"
      },
      "quantity": 0,
      "runningBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "sedol": "string",
      "settleDate": "string",
      "sourceId": "string",
      "sourceType": "AGGREGATED",
      "status": "POSTED",
      "subType": "AUTH_HOLD",
      "symbol": "string",
      "transactionDate": "string",
      "type": "string",
      "valoren": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction|[[Transaction](#schematransaction)]|false|read-only|none|

<h2 id="tocS_TransactionTotal">TransactionTotal</h2>
<!-- backwards compatibility -->
<a id="schematransactiontotal"></a>
<a id="schema_TransactionTotal"></a>
<a id="tocStransactiontotal"></a>
<a id="tocstransactiontotal"></a>

```json
{
  "count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|false|none|none|

<h2 id="tocS_UpdateAccountInfo">UpdateAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountinfo"></a>
<a id="schema_UpdateAccountInfo"></a>
<a id="tocSupdateaccountinfo"></a>
<a id="tocsupdateaccountinfo"></a>

```json
{
  "accountName": "string",
  "accountNumber": "string",
  "accountStatus": "ACTIVE",
  "address": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "city": "string",
    "country": "string",
    "sourceType": "string",
    "state": "string",
    "street": "string",
    "type": "HOME",
    "zip": "string"
  },
  "amountDue": {
    "amount": 0,
    "currency": "AUD"
  },
  "balance": {
    "amount": 0,
    "currency": "AUD"
  },
  "container": "bank",
  "dueDate": "string",
  "frequency": "DAILY",
  "homeValue": {
    "amount": 0,
    "currency": "AUD"
  },
  "includeInNetWorth": "string",
  "isEbillEnrolled": "string",
  "memo": "string",
  "nickname": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|none|
|accountNumber|string|false|none|none|
|accountStatus|string|false|none|none|
|address|[AccountAddress](#schemaaccountaddress)|false|none|none|
|amountDue|[Money](#schemamoney)|false|none|none|
|balance|[Money](#schemamoney)|false|none|none|
|container|string|false|none|none|
|dueDate|string|false|none|none|
|frequency|string|false|none|none|
|homeValue|[Money](#schemamoney)|false|none|none|
|includeInNetWorth|string|false|none|none|
|isEbillEnrolled|string|false|none|none|
|memo|string|false|none|none|
|nickname|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accountStatus|ACTIVE|
|accountStatus|INACTIVE|
|accountStatus|TO_BE_CLOSED|
|accountStatus|CLOSED|
|accountStatus|DELETED|
|container|bank|
|container|creditCard|
|container|investment|
|container|insurance|
|container|loan|
|container|reward|
|container|realEstate|
|container|otherAssets|
|container|otherLiabilities|
|frequency|DAILY|
|frequency|ONE_TIME|
|frequency|WEEKLY|
|frequency|EVERY_2_WEEKS|
|frequency|SEMI_MONTHLY|
|frequency|MONTHLY|
|frequency|QUARTERLY|
|frequency|SEMI_ANNUALLY|
|frequency|ANNUALLY|
|frequency|EVERY_2_MONTHS|
|frequency|EBILL|
|frequency|FIRST_DAY_MONTHLY|
|frequency|LAST_DAY_MONTHLY|
|frequency|EVERY_4_WEEKS|
|frequency|UNKNOWN|
|frequency|OTHER|

<h2 id="tocS_UpdateAccountRequest">UpdateAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateaccountrequest"></a>
<a id="schema_UpdateAccountRequest"></a>
<a id="tocSupdateaccountrequest"></a>
<a id="tocsupdateaccountrequest"></a>

```json
{
  "account": {
    "accountName": "string",
    "accountNumber": "string",
    "accountStatus": "ACTIVE",
    "address": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "sourceType": "string",
      "state": "string",
      "street": "string",
      "type": "HOME",
      "zip": "string"
    },
    "amountDue": {
      "amount": 0,
      "currency": "AUD"
    },
    "balance": {
      "amount": 0,
      "currency": "AUD"
    },
    "container": "bank",
    "dueDate": "string",
    "frequency": "DAILY",
    "homeValue": {
      "amount": 0,
      "currency": "AUD"
    },
    "includeInNetWorth": "string",
    "isEbillEnrolled": "string",
    "memo": "string",
    "nickname": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[UpdateAccountInfo](#schemaupdateaccountinfo)|true|none|none|

<h2 id="tocS_UpdateCategoryRequest">UpdateCategoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecategoryrequest"></a>
<a id="schema_UpdateCategoryRequest"></a>
<a id="tocSupdatecategoryrequest"></a>
<a id="tocsupdatecategoryrequest"></a>

```json
{
  "categoryName": "string",
  "highLevelCategoryName": "string",
  "id": 1,
  "source": "SYSTEM"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryName|string|false|none|none|
|highLevelCategoryName|string|false|none|none|
|id|integer(int64)|true|none|none|
|source|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|source|SYSTEM|
|source|USER|

<h2 id="tocS_UpdateCobrandNotificationEvent">UpdateCobrandNotificationEvent</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecobrandnotificationevent"></a>
<a id="schema_UpdateCobrandNotificationEvent"></a>
<a id="tocSupdatecobrandnotificationevent"></a>
<a id="tocsupdatecobrandnotificationevent"></a>

```json
{
  "callbackUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackUrl|string|false|none|URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul>|

<h2 id="tocS_UpdateCobrandNotificationEventRequest">UpdateCobrandNotificationEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecobrandnotificationeventrequest"></a>
<a id="schema_UpdateCobrandNotificationEventRequest"></a>
<a id="tocSupdatecobrandnotificationeventrequest"></a>
<a id="tocsupdatecobrandnotificationeventrequest"></a>

```json
{
  "event": {
    "callbackUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|[UpdateCobrandNotificationEvent](#schemaupdatecobrandnotificationevent)|true|none|none|

<h2 id="tocS_UpdateConfigsNotificationEvent">UpdateConfigsNotificationEvent</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigsnotificationevent"></a>
<a id="schema_UpdateConfigsNotificationEvent"></a>
<a id="tocSupdateconfigsnotificationevent"></a>
<a id="tocsupdateconfigsnotificationevent"></a>

```json
{
  "callbackUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackUrl|string|false|none|URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul>|

<h2 id="tocS_UpdateConfigsNotificationEventRequest">UpdateConfigsNotificationEventRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateconfigsnotificationeventrequest"></a>
<a id="schema_UpdateConfigsNotificationEventRequest"></a>
<a id="tocSupdateconfigsnotificationeventrequest"></a>
<a id="tocsupdateconfigsnotificationeventrequest"></a>

```json
{
  "event": {
    "callbackUrl": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event|[UpdateConfigsNotificationEvent](#schemaupdateconfigsnotificationevent)|true|none|none|

<h2 id="tocS_UpdateTransaction">UpdateTransaction</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetransaction"></a>
<a id="schema_UpdateTransaction"></a>
<a id="tocSupdatetransaction"></a>
<a id="tocsupdatetransaction"></a>

```json
{
  "categoryId": 0,
  "categorySource": "SYSTEM",
  "container": "bank",
  "description": {
    "consumer": "string",
    "original": "string",
    "security": "string",
    "simple": "string"
  },
  "memo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryId|integer(int64)|true|none|none|
|categorySource|string|true|none|none|
|container|string|true|none|none|
|description|[Description](#schemadescription)|false|none|none|
|memo|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|categorySource|SYSTEM|
|categorySource|USER|
|container|bank|
|container|creditCard|
|container|investment|
|container|insurance|
|container|loan|
|container|reward|
|container|realEstate|
|container|otherAssets|
|container|otherLiabilities|

<h2 id="tocS_UpdateUserRegistration">UpdateUserRegistration</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserregistration"></a>
<a id="schema_UpdateUserRegistration"></a>
<a id="tocSupdateuserregistration"></a>
<a id="tocsupdateuserregistration"></a>

```json
{
  "address": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "city": "string",
    "country": "string",
    "state": "string",
    "zip": "string"
  },
  "email": "string",
  "name": {
    "first": "string",
    "fullName": "string",
    "last": "string",
    "middle": "string"
  },
  "preferences": {
    "currency": "AUD",
    "dateFormat": "string",
    "locale": "en_US",
    "timeZone": "string"
  },
  "segmentName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[UserAddress](#schemauseraddress)|false|none|none|
|email|string|false|none|none|
|name|[Name](#schemaname)|false|none|none|
|preferences|[UserRequestPreferences](#schemauserrequestpreferences)|false|none|none|
|segmentName|string|false|none|none|

<h2 id="tocS_UpdateUserRequest">UpdateUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserrequest"></a>
<a id="schema_UpdateUserRequest"></a>
<a id="tocSupdateuserrequest"></a>
<a id="tocsupdateuserrequest"></a>

```json
{
  "user": {
    "address": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "state": "string",
      "zip": "string"
    },
    "email": "string",
    "name": {
      "first": "string",
      "fullName": "string",
      "last": "string",
      "middle": "string"
    },
    "preferences": {
      "currency": "AUD",
      "dateFormat": "string",
      "locale": "en_US",
      "timeZone": "string"
    },
    "segmentName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[UpdateUserRegistration](#schemaupdateuserregistration)|true|none|none|

<h2 id="tocS_UpdateVerification">UpdateVerification</h2>
<!-- backwards compatibility -->
<a id="schemaupdateverification"></a>
<a id="schema_UpdateVerification"></a>
<a id="tocSupdateverification"></a>
<a id="tocsupdateverification"></a>

```json
{
  "account": {
    "accountName": "string",
    "accountNumber": "string",
    "accountType": "SAVINGS",
    "bankTransferCode": {
      "id": "string",
      "type": "BSB"
    }
  },
  "accountId": 0,
  "providerAccountId": 0,
  "reason": "DATA_NOT_AVAILABLE",
  "transaction": [
    {
      "amount": {
        "amount": 0,
        "currency": "AUD"
      },
      "baseType": "CREDIT"
    }
  ],
  "verificationDate": "string",
  "verificationId": 0,
  "verificationStatus": "INITIATED",
  "verificationType": "MATCHING"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[VerificationAccount](#schemaverificationaccount)|false|none|none|
|accountId|integer(int64)|false|none|Unique identifier for the account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>|
|providerAccountId|integer(int64)|false|none|Unique identifier for the provider account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>|
|reason|string|false|read-only|The reason the account verification failed.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>|
|transaction|[[VerificationTransaction](#schemaverificationtransaction)]|true|none|none|
|verificationDate|string|false|read-only|The date of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>|
|verificationId|integer(int64)|false|read-only|Unique identifier for the verification request.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>|
|verificationStatus|string|false|read-only|The status of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b>|
|verificationType|string|false|none|The account verification type.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b>|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|DATA_NOT_AVAILABLE|
|reason|ACCOUNT_HOLDER_MISMATCH|
|reason|FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE|
|reason|FULL_ACCOUNT_NUMBER_NOT_AVAILABLE|
|reason|BANK_TRANSFER_CODE_NOT_AVAILABLE|
|reason|EXPIRED|
|reason|DATA_MISMATCH|
|reason|INSTRUCTION_GENERATION_ERROR|
|verificationStatus|INITIATED|
|verificationStatus|DEPOSITED|
|verificationStatus|SUCCESS|
|verificationStatus|FAILED|
|verificationType|MATCHING|
|verificationType|CHALLENGE_DEPOSIT|

<h2 id="tocS_UpdateVerificationRequest">UpdateVerificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateverificationrequest"></a>
<a id="schema_UpdateVerificationRequest"></a>
<a id="tocSupdateverificationrequest"></a>
<a id="tocsupdateverificationrequest"></a>

```json
{
  "verification": {
    "account": {
      "accountName": "string",
      "accountNumber": "string",
      "accountType": "SAVINGS",
      "bankTransferCode": {
        "id": "string",
        "type": "BSB"
      }
    },
    "accountId": 0,
    "providerAccountId": 0,
    "reason": "DATA_NOT_AVAILABLE",
    "transaction": [
      {
        "amount": {
          "amount": 0,
          "currency": "AUD"
        },
        "baseType": "CREDIT"
      }
    ],
    "verificationDate": "string",
    "verificationId": 0,
    "verificationStatus": "INITIATED",
    "verificationType": "MATCHING"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verification|[UpdateVerification](#schemaupdateverification)|false|none|none|

<h2 id="tocS_UpdatedProviderAccount">UpdatedProviderAccount</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedprovideraccount"></a>
<a id="schema_UpdatedProviderAccount"></a>
<a id="tocSupdatedprovideraccount"></a>
<a id="tocsupdatedprovideraccount"></a>

```json
{
  "aggregationSource": "SYSTEM",
  "createdDate": "string",
  "dataset": [
    {
      "additionalStatus": "LOGIN_IN_PROGRESS",
      "lastUpdateAttempt": "string",
      "lastUpdated": "string",
      "name": "BASIC_AGG_DATA",
      "nextUpdateScheduled": "string",
      "updateEligibility": "ALLOW_UPDATE"
    }
  ],
  "id": 0,
  "isManual": true,
  "lastUpdated": "string",
  "loginForm": [
    {
      "forgetPasswordURL": "string",
      "formType": "login",
      "help": "string",
      "id": 0,
      "loginHelp": "string",
      "mfaInfoText": "string",
      "mfaInfoTitle": "string",
      "mfaTimeout": 0,
      "row": [
        {
          "field": [
            {
              "id": "string",
              "image": "string",
              "isOptional": true,
              "isValueProvided": true,
              "maxLength": 0,
              "minLength": 0,
              "name": "string",
              "option": [
                {
                  "displayText": "string",
                  "isSelected": true,
                  "optionValue": "string"
                }
              ],
              "prefix": "string",
              "suffix": "string",
              "type": "text",
              "value": "string",
              "valueEditable": "string"
            }
          ],
          "fieldRowChoice": "string",
          "form": "string",
          "id": "string",
          "label": "string"
        }
      ]
    }
  ],
  "oauthMigrationStatus": "IN_PROGRESS",
  "providerId": 0,
  "requestId": "string",
  "status": "LOGIN_IN_PROGRESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregationSource|string|false|read-only|The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|
|createdDate|string|false|read-only|The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|dataset|[[AccountDataset](#schemaaccountdataset)]|false|read-only|Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|id|integer(int64)|false|read-only|Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|isManual|boolean|false|read-only|Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|lastUpdated|string|false|read-only|Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul>|
|loginForm|[[LoginForm](#schemaloginform)]|false|read-only|This entity gets returned in the response for only MFA based provider accounts during the add/update account polling process. This indicates that the MFA information is expected from the user to complete the process. This represents the structure of MFA form that is displayed to the user in the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>|
|oauthMigrationStatus|string|false|read-only|Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|providerId|integer(int64)|false|read-only|Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>|
|requestId|string|false|read-only|Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>|
|status|string|false|read-only|The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|aggregationSource|SYSTEM|
|aggregationSource|USER|
|oauthMigrationStatus|IN_PROGRESS|
|oauthMigrationStatus|TO_BE_MIGRATED|
|oauthMigrationStatus|COMPLETED|
|status|LOGIN_IN_PROGRESS|
|status|USER_INPUT_REQUIRED|
|status|IN_PROGRESS|
|status|PARTIAL_SUCCESS|
|status|SUCCESS|
|status|FAILED|
|status|MIGRATION_IN_PROGRESS|

<h2 id="tocS_UpdatedProviderAccountResponse">UpdatedProviderAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedprovideraccountresponse"></a>
<a id="schema_UpdatedProviderAccountResponse"></a>
<a id="tocSupdatedprovideraccountresponse"></a>
<a id="tocsupdatedprovideraccountresponse"></a>

```json
{
  "providerAccount": [
    {
      "aggregationSource": "SYSTEM",
      "createdDate": "string",
      "dataset": [
        {
          "additionalStatus": "LOGIN_IN_PROGRESS",
          "lastUpdateAttempt": "string",
          "lastUpdated": "string",
          "name": "BASIC_AGG_DATA",
          "nextUpdateScheduled": "string",
          "updateEligibility": "ALLOW_UPDATE"
        }
      ],
      "id": 0,
      "isManual": true,
      "lastUpdated": "string",
      "loginForm": [
        {
          "forgetPasswordURL": "string",
          "formType": "login",
          "help": "string",
          "id": 0,
          "loginHelp": "string",
          "mfaInfoText": "string",
          "mfaInfoTitle": "string",
          "mfaTimeout": 0,
          "row": [
            {
              "field": [
                {
                  "id": "string",
                  "image": "string",
                  "isOptional": true,
                  "isValueProvided": true,
                  "maxLength": 0,
                  "minLength": 0,
                  "name": "string",
                  "option": [
                    {
                      "displayText": "string",
                      "isSelected": true,
                      "optionValue": "string"
                    }
                  ],
                  "prefix": "string",
                  "suffix": "string",
                  "type": "text",
                  "value": "string",
                  "valueEditable": "string"
                }
              ],
              "fieldRowChoice": "string",
              "form": "string",
              "id": "string",
              "label": "string"
            }
          ]
        }
      ],
      "oauthMigrationStatus": "IN_PROGRESS",
      "providerId": 0,
      "requestId": "string",
      "status": "LOGIN_IN_PROGRESS"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providerAccount|[[UpdatedProviderAccount](#schemaupdatedprovideraccount)]|false|read-only|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": 0,
  "loginName": "string",
  "name": {
    "first": "string",
    "fullName": "string",
    "last": "string",
    "middle": "string"
  },
  "preferences": {
    "currency": "AUD",
    "dateFormat": "string",
    "locale": "en_US",
    "timeZone": "string"
  },
  "roleType": "INDIVIDUAL",
  "session": {
    "userSession": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|read-only|The unique identifier of a consumer/user in Yodlee system for whom the API services would be accessed for.<br><br><b>Endpoints</b>:<ul><li>POST user/samlLogin</li><li>POST user/register</li><li>GET user</li></ul>|
|loginName|string|false|read-only|The login name of the user used for authentication.<br><br><b>Endpoints</b>:<ul><li>POST user/register</li><li>GET user</li></ul>|
|name|[Name](#schemaname)|false|none|none|
|preferences|[UserResponsePreferences](#schemauserresponsepreferences)|false|none|none|
|roleType|string|false|none|none|
|session|[UserSession](#schemausersession)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|roleType|INDIVIDUAL|

<h2 id="tocS_UserAccessToken">UserAccessToken</h2>
<!-- backwards compatibility -->
<a id="schemauseraccesstoken"></a>
<a id="schema_UserAccessToken"></a>
<a id="tocSuseraccesstoken"></a>
<a id="tocsuseraccesstoken"></a>

```json
{
  "accessTokens": [
    {
      "appId": "string",
      "url": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessTokens|[[AccessTokens](#schemaaccesstokens)]|false|none|none|

<h2 id="tocS_UserAccessTokensResponse">UserAccessTokensResponse</h2>
<!-- backwards compatibility -->
<a id="schemauseraccesstokensresponse"></a>
<a id="schema_UserAccessTokensResponse"></a>
<a id="tocSuseraccesstokensresponse"></a>
<a id="tocsuseraccesstokensresponse"></a>

```json
{
  "user": {
    "accessTokens": [
      {
        "appId": "string",
        "url": "string",
        "value": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[UserAccessToken](#schemauseraccesstoken)|false|none|none|

<h2 id="tocS_UserAddress">UserAddress</h2>
<!-- backwards compatibility -->
<a id="schemauseraddress"></a>
<a id="schema_UserAddress"></a>
<a id="tocSuseraddress"></a>
<a id="tocsuseraddress"></a>

```json
{
  "address1": "string",
  "address2": "string",
  "address3": "string",
  "city": "string",
  "country": "string",
  "state": "string",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address1|string|false|none|none|
|address2|string|false|none|none|
|address3|string|false|none|none|
|city|string|false|none|none|
|country|string|false|none|none|
|state|string|false|none|none|
|zip|string|false|none|none|

<h2 id="tocS_UserDetail">UserDetail</h2>
<!-- backwards compatibility -->
<a id="schemauserdetail"></a>
<a id="schema_UserDetail"></a>
<a id="tocSuserdetail"></a>
<a id="tocsuserdetail"></a>

```json
{
  "address": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "city": "string",
    "country": "string",
    "state": "string",
    "zip": "string"
  },
  "email": "string",
  "id": 0,
  "loginName": "string",
  "name": {
    "first": "string",
    "fullName": "string",
    "last": "string",
    "middle": "string"
  },
  "preferences": {
    "currency": "AUD",
    "dateFormat": "string",
    "locale": "en_US",
    "timeZone": "string"
  },
  "roleType": "INDIVIDUAL",
  "segmentName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[UserAddress](#schemauseraddress)|false|none|none|
|email|string|false|read-only|The email address of the user.<br><br><b>Endpoints</b>:<ul><li>GET user</li></ul>|
|id|integer(int64)|false|read-only|The unique identifier of a consumer/user in Yodlee system for whom the API services would be accessed for.<br><br><b>Endpoints</b>:<ul><li>POST user/samlLogin</li><li>POST user/register</li><li>GET user</li></ul>|
|loginName|string|false|read-only|The login name of the user used for authentication.<br><br><b>Endpoints</b>:<ul><li>POST user/register</li><li>GET user</li></ul>|
|name|[Name](#schemaname)|false|none|none|
|preferences|[UserResponsePreferences](#schemauserresponsepreferences)|false|none|none|
|roleType|string|false|none|none|
|segmentName|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|roleType|INDIVIDUAL|

<h2 id="tocS_UserDetailResponse">UserDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserdetailresponse"></a>
<a id="schema_UserDetailResponse"></a>
<a id="tocSuserdetailresponse"></a>
<a id="tocsuserdetailresponse"></a>

```json
{
  "user": {
    "address": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "state": "string",
      "zip": "string"
    },
    "email": "string",
    "id": 0,
    "loginName": "string",
    "name": {
      "first": "string",
      "fullName": "string",
      "last": "string",
      "middle": "string"
    },
    "preferences": {
      "currency": "AUD",
      "dateFormat": "string",
      "locale": "en_US",
      "timeZone": "string"
    },
    "roleType": "INDIVIDUAL",
    "segmentName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[UserDetail](#schemauserdetail)|false|none|none|

<h2 id="tocS_UserRegistration">UserRegistration</h2>
<!-- backwards compatibility -->
<a id="schemauserregistration"></a>
<a id="schema_UserRegistration"></a>
<a id="tocSuserregistration"></a>
<a id="tocsuserregistration"></a>

```json
{
  "address": {
    "address1": "string",
    "address2": "string",
    "address3": "string",
    "city": "string",
    "country": "string",
    "state": "string",
    "zip": "string"
  },
  "email": "string",
  "loginName": "string",
  "name": {
    "first": "string",
    "fullName": "string",
    "last": "string",
    "middle": "string"
  },
  "preferences": {
    "currency": "AUD",
    "dateFormat": "string",
    "locale": "en_US",
    "timeZone": "string"
  },
  "segmentName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[UserAddress](#schemauseraddress)|false|none|none|
|email|string|false|none|none|
|loginName|string|true|none|none|
|name|[Name](#schemaname)|false|none|none|
|preferences|[UserRequestPreferences](#schemauserrequestpreferences)|false|none|none|
|segmentName|string|false|none|none|

<h2 id="tocS_UserRequest">UserRequest</h2>
<!-- backwards compatibility -->
<a id="schemauserrequest"></a>
<a id="schema_UserRequest"></a>
<a id="tocSuserrequest"></a>
<a id="tocsuserrequest"></a>

```json
{
  "user": {
    "address": {
      "address1": "string",
      "address2": "string",
      "address3": "string",
      "city": "string",
      "country": "string",
      "state": "string",
      "zip": "string"
    },
    "email": "string",
    "loginName": "string",
    "name": {
      "first": "string",
      "fullName": "string",
      "last": "string",
      "middle": "string"
    },
    "preferences": {
      "currency": "AUD",
      "dateFormat": "string",
      "locale": "en_US",
      "timeZone": "string"
    },
    "segmentName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[UserRegistration](#schemauserregistration)|true|none|none|

<h2 id="tocS_UserRequestPreferences">UserRequestPreferences</h2>
<!-- backwards compatibility -->
<a id="schemauserrequestpreferences"></a>
<a id="schema_UserRequestPreferences"></a>
<a id="tocSuserrequestpreferences"></a>
<a id="tocsuserrequestpreferences"></a>

```json
{
  "currency": "AUD",
  "dateFormat": "string",
  "locale": "en_US",
  "timeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The currency of the user. This currency will be respected while providing the response for derived API services.<br><b>Applicable Values</b><br>|
|dateFormat|string|false|none|The dateformat of the user.This attribute is just a place holder and has no impact on any other API services.|
|locale|string|false|none|The locale of the user. This locale will be considered for localization features like providing the provider information in the supported locale or providing category names in the transaction related services.<br><b>Applicable Values</b><br>|
|timeZone|string|false|none|The timezone of the user. This attribute is just a place holder and has no impact on any other API services.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|AUD|
|currency|BRL|
|currency|CAD|
|currency|EUR|
|currency|GBP|
|currency|HKD|
|currency|IDR|
|currency|INR|
|currency|JPY|
|currency|NZD|
|currency|SGD|
|currency|USD|
|currency|ZAR|
|currency|CNY|
|currency|VND|
|currency|MYR|
|currency|CHF|
|locale|en_US|
|locale|en_ES|
|locale|fr_CA|
|locale|zh_CN|

<h2 id="tocS_UserResponse">UserResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserresponse"></a>
<a id="schema_UserResponse"></a>
<a id="tocSuserresponse"></a>
<a id="tocsuserresponse"></a>

```json
{
  "user": {
    "id": 0,
    "loginName": "string",
    "name": {
      "first": "string",
      "fullName": "string",
      "last": "string",
      "middle": "string"
    },
    "preferences": {
      "currency": "AUD",
      "dateFormat": "string",
      "locale": "en_US",
      "timeZone": "string"
    },
    "roleType": "INDIVIDUAL",
    "session": {
      "userSession": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[User](#schemauser)|false|none|none|

<h2 id="tocS_UserResponsePreferences">UserResponsePreferences</h2>
<!-- backwards compatibility -->
<a id="schemauserresponsepreferences"></a>
<a id="schema_UserResponsePreferences"></a>
<a id="tocSuserresponsepreferences"></a>
<a id="tocsuserresponsepreferences"></a>

```json
{
  "currency": "AUD",
  "dateFormat": "string",
  "locale": "en_US",
  "timeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|The currency of the user. This currency will be respected while providing the response for derived API services.<br><b>Applicable Values</b><br>|
|dateFormat|string|false|none|The dateformat of the user.This attribute is just a place holder and has no impact on any other API services.|
|locale|string|false|none|The locale of the user. This locale will be considered for localization features like providing the provider information in the supported locale or providing category names in the transaction related services.<br><b>Applicable Values</b><br>|
|timeZone|string|false|none|The timezone of the user. This attribute is just a place holder and has no impact on any other API services.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|AUD|
|currency|BRL|
|currency|CAD|
|currency|EUR|
|currency|GBP|
|currency|HKD|
|currency|IDR|
|currency|INR|
|currency|JPY|
|currency|NZD|
|currency|SGD|
|currency|USD|
|currency|ZAR|
|currency|CNY|
|currency|VND|
|currency|MYR|
|currency|CHF|
|locale|en_US|
|locale|en_ES|
|locale|fr_CA|
|locale|zh_CN|

<h2 id="tocS_UserSession">UserSession</h2>
<!-- backwards compatibility -->
<a id="schemausersession"></a>
<a id="schema_UserSession"></a>
<a id="tocSusersession"></a>
<a id="tocsusersession"></a>

```json
{
  "userSession": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userSession|string|false|read-only|Session provided for a valid user to access API services upon successful authentication.<br><br><b>Endpoints</b>:<ul><li>POST user/samlLogin</li><li>POST user/register</li></ul>|

<h2 id="tocS_Verification">Verification</h2>
<!-- backwards compatibility -->
<a id="schemaverification"></a>
<a id="schema_Verification"></a>
<a id="tocSverification"></a>
<a id="tocsverification"></a>

```json
{
  "account": {
    "accountName": "string",
    "accountNumber": "string",
    "accountType": "SAVINGS",
    "bankTransferCode": {
      "id": "string",
      "type": "BSB"
    }
  },
  "accountId": 0,
  "providerAccountId": 0,
  "reason": "DATA_NOT_AVAILABLE",
  "verificationDate": "string",
  "verificationId": 0,
  "verificationStatus": "INITIATED",
  "verificationType": "MATCHING"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[VerificationAccount](#schemaverificationaccount)|false|none|none|
|accountId|integer(int64)|false|none|Unique identifier for the account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>|
|providerAccountId|integer(int64)|false|none|Unique identifier for the provider account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>|
|reason|string|false|read-only|The reason the account verification failed.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>|
|verificationDate|string|false|read-only|The date of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>|
|verificationId|integer(int64)|false|read-only|Unique identifier for the verification request.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>|
|verificationStatus|string|false|read-only|The status of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b>|
|verificationType|string|false|none|The account verification type.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b>|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|DATA_NOT_AVAILABLE|
|reason|ACCOUNT_HOLDER_MISMATCH|
|reason|FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE|
|reason|FULL_ACCOUNT_NUMBER_NOT_AVAILABLE|
|reason|BANK_TRANSFER_CODE_NOT_AVAILABLE|
|reason|EXPIRED|
|reason|DATA_MISMATCH|
|reason|INSTRUCTION_GENERATION_ERROR|
|verificationStatus|INITIATED|
|verificationStatus|DEPOSITED|
|verificationStatus|SUCCESS|
|verificationStatus|FAILED|
|verificationType|MATCHING|
|verificationType|CHALLENGE_DEPOSIT|

<h2 id="tocS_VerificationAccount">VerificationAccount</h2>
<!-- backwards compatibility -->
<a id="schemaverificationaccount"></a>
<a id="schema_VerificationAccount"></a>
<a id="tocSverificationaccount"></a>
<a id="tocsverificationaccount"></a>

```json
{
  "accountName": "string",
  "accountNumber": "string",
  "accountType": "SAVINGS",
  "bankTransferCode": {
    "id": "string",
    "type": "BSB"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|none|
|accountNumber|string|true|none|none|
|accountType|string|true|none|none|
|bankTransferCode|[VerificationBankTransferCode](#schemaverificationbanktransfercode)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|SAVINGS|
|accountType|CHECKING|

<h2 id="tocS_VerificationBankTransferCode">VerificationBankTransferCode</h2>
<!-- backwards compatibility -->
<a id="schemaverificationbanktransfercode"></a>
<a id="schema_VerificationBankTransferCode"></a>
<a id="tocSverificationbanktransfercode"></a>
<a id="tocsverificationbanktransfercode"></a>

```json
{
  "id": "string",
  "type": "BSB"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The FI's branch identification number.Additional Details: The routing number of the bank account in the United States. For non-United States accounts, it is the IFSC code (India), BSB number (Australia), and sort code (United Kingdom). <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul>|
|type|string|false|none|The bank transfer code type varies depending on the region of the account origination. <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul><b>Applicable Values</b><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BSB|
|type|IFSC|
|type|ROUTING_NUMBER|
|type|SORT_CODE|

<h2 id="tocS_VerificationRequest">VerificationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverificationrequest"></a>
<a id="schema_VerificationRequest"></a>
<a id="tocSverificationrequest"></a>
<a id="tocsverificationrequest"></a>

```json
{
  "verification": {
    "account": {
      "accountName": "string",
      "accountNumber": "string",
      "accountType": "SAVINGS",
      "bankTransferCode": {
        "id": "string",
        "type": "BSB"
      }
    },
    "accountId": 0,
    "providerAccountId": 0,
    "reason": "DATA_NOT_AVAILABLE",
    "verificationDate": "string",
    "verificationId": 0,
    "verificationStatus": "INITIATED",
    "verificationType": "MATCHING"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verification|[Verification](#schemaverification)|true|none|none|

<h2 id="tocS_VerificationResponse">VerificationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverificationresponse"></a>
<a id="schema_VerificationResponse"></a>
<a id="tocSverificationresponse"></a>
<a id="tocsverificationresponse"></a>

```json
{
  "verification": [
    {
      "account": {
        "accountName": "string",
        "accountNumber": "string",
        "accountType": "SAVINGS",
        "bankTransferCode": {
          "id": "string",
          "type": "BSB"
        }
      },
      "accountId": 0,
      "providerAccountId": 0,
      "reason": "DATA_NOT_AVAILABLE",
      "verificationDate": "string",
      "verificationId": 0,
      "verificationStatus": "INITIATED",
      "verificationType": "MATCHING"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verification|[[Verification](#schemaverification)]|false|read-only|none|

<h2 id="tocS_VerificationStatus">VerificationStatus</h2>
<!-- backwards compatibility -->
<a id="schemaverificationstatus"></a>
<a id="schema_VerificationStatus"></a>
<a id="tocSverificationstatus"></a>
<a id="tocsverificationstatus"></a>

```json
{
  "account": {
    "accountName": "string",
    "accountNumber": "string",
    "accountType": "SAVINGS",
    "bankTransferCode": {
      "id": "string",
      "type": "BSB"
    }
  },
  "accountId": 0,
  "providerAccountId": 0,
  "reason": "DATA_NOT_AVAILABLE",
  "remainingAttempts": 0,
  "verificationDate": "string",
  "verificationId": 0,
  "verificationStatus": "INITIATED",
  "verificationType": "MATCHING"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[VerificationAccount](#schemaverificationaccount)|false|none|none|
|accountId|integer(int64)|false|none|Unique identifier for the account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>|
|providerAccountId|integer(int64)|false|none|Unique identifier for the provider account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>|
|reason|string|false|read-only|The reason the account verification failed.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>|
|remainingAttempts|integer(int64)|false|read-only|none|
|verificationDate|string|false|read-only|The date of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>|
|verificationId|integer(int64)|false|read-only|Unique identifier for the verification request.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>|
|verificationStatus|string|false|read-only|The status of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b>|
|verificationType|string|false|none|The account verification type.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b>|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|DATA_NOT_AVAILABLE|
|reason|ACCOUNT_HOLDER_MISMATCH|
|reason|FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE|
|reason|FULL_ACCOUNT_NUMBER_NOT_AVAILABLE|
|reason|BANK_TRANSFER_CODE_NOT_AVAILABLE|
|reason|EXPIRED|
|reason|DATA_MISMATCH|
|reason|INSTRUCTION_GENERATION_ERROR|
|verificationStatus|INITIATED|
|verificationStatus|DEPOSITED|
|verificationStatus|SUCCESS|
|verificationStatus|FAILED|
|verificationType|MATCHING|
|verificationType|CHALLENGE_DEPOSIT|

<h2 id="tocS_VerificationStatusResponse">VerificationStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverificationstatusresponse"></a>
<a id="schema_VerificationStatusResponse"></a>
<a id="tocSverificationstatusresponse"></a>
<a id="tocsverificationstatusresponse"></a>

```json
{
  "verification": [
    {
      "account": {
        "accountName": "string",
        "accountNumber": "string",
        "accountType": "SAVINGS",
        "bankTransferCode": {
          "id": "string",
          "type": "BSB"
        }
      },
      "accountId": 0,
      "providerAccountId": 0,
      "reason": "DATA_NOT_AVAILABLE",
      "remainingAttempts": 0,
      "verificationDate": "string",
      "verificationId": 0,
      "verificationStatus": "INITIATED",
      "verificationType": "MATCHING"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verification|[[VerificationStatus](#schemaverificationstatus)]|false|read-only|none|

<h2 id="tocS_VerificationTransaction">VerificationTransaction</h2>
<!-- backwards compatibility -->
<a id="schemaverificationtransaction"></a>
<a id="schema_VerificationTransaction"></a>
<a id="tocSverificationtransaction"></a>
<a id="tocsverificationtransaction"></a>

```json
{
  "amount": {
    "amount": 0,
    "currency": "AUD"
  },
  "baseType": "CREDIT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Money](#schemamoney)|true|none|none|
|baseType|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|baseType|CREDIT|
|baseType|DEBIT|

<h2 id="tocS_VerifiedAccount">VerifiedAccount</h2>
<!-- backwards compatibility -->
<a id="schemaverifiedaccount"></a>
<a id="schema_VerifiedAccount"></a>
<a id="tocSverifiedaccount"></a>
<a id="tocsverifiedaccount"></a>

```json
{
  "accountNumber": "string",
  "accountType": "string",
  "bankTransferCode": [
    {
      "id": "string",
      "type": "BSB"
    }
  ],
  "fullAccountNumber": "string",
  "holder": [
    {
      "gender": "string",
      "identifier": [
        {
          "type": "NIE",
          "value": "string"
        }
      ],
      "name": {
        "first": "string",
        "fullName": "string",
        "last": "string",
        "middle": "string"
      },
      "ownership": "PRIMARY"
    }
  ],
  "id": 0,
  "providerAccountId": 0,
  "providerName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountNumber|string|false|read-only|The account number as it appears on the site. (The POST accounts service response return this field as number)<br><b>Additional Details</b>:<b> Bank/ Loan/ Insurance/ Investment</b>:<br> The account number for the bank account as it appears at the site.<br><b>Credit Card</b>: The account number of the card account as it appears at the site,<br>i.e., the card number.The account number can be full or partial based on how it is displayed in the account summary page of the site.In most cases, the site does not display the full account number in the account summary page and additional navigation is required to aggregate it.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST accounts</li></ul>|
|accountType|string|false|read-only|The type of account that is aggregated, i.e., savings, checking, credit card, charge, HELOC, etc. The account type is derived based on the attributes of the account. <br><b>Valid Values:</b><br><b>Aggregated Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PPF</li><li>RECURRING_DEPOSIT</li><li>FSA</li><li>MONEY_MARKET</li><li>IRA</li><li>PREPAID</li></ul><b>creditCard</b><ul><li>OTHER</li><li>CREDIT</li><li>STORE</li><li>CHARGE</li><li>OTHER</li></ul><b>investment (SN 1.0)</b><ul><li>BROKERAGE_MARGIN</li><li>HSA</li><li>IRA</li><li>BROKERAGE_CASH</li><li>401K</li><li>403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE</li><li>CUSTODIAL</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE</li><li>JTTIC</li><li>JTWROS</li><li>COMMUNITY_PROPERTY</li><li>JOINT_BY_ENTIRETY</li><li>CONSERVATORSHIP</li><li>ROTH</li><li>ROTH_CONVERSION</li><li>ROLLOVER</li><li>EDUCATIONAL</li><li>529_PLAN</li><li>457_DEFERRED_COMPENSATION</li><li>401A</li><li>PSP</li><li>MPP</li><li>STOCK_BASKET</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER</li><li>CHARITABLE_LEAD</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP</li><li>UTMA</li><li>UGMA</li><li>ESOPP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>SOLE_PROPRIETORSHIP</li><li>CHURCH</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CMA</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET</li><li>SUPER_ANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN</li><li>DEFERRED_PROFIT_SHARING_PLAN</li><li>NON_REGISTERED_SAVINGS_PLAN</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN</li><li>GROUP_RETIREMENT_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_ACCOUNT</li><li>REGISTERED_PENSION_PLAN</li><li>TAX_FREE_SAVINGS_ACCOUNT</li><li>LIFE_INCOME_FUND</li><li>REGISTERED_RETIREMENT_INCOME_FUND</li><li>SPOUSAL_RETIREMENT_INCOME_FUND</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND</li><li>GUARANTEED_INVESTMENT_CERTIFICATES</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN</li><li>OTHER</li></ul><b>investment (SN 2.0)</b><ul><li>BROKERAGE_CASH</li><li>BROKERAGE_MARGIN</li><li>INDIVIDUAL_RETIREMENT_ACCOUNT_IRA</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_401K</li><li>EMPLOYEE_RETIREMENT_SAVINGS_PLAN_403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE_IRA</li><li>CUSTODIAL_ACCOUNT</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE_INVESTMENT_ACCOUNT</li><li>JOINT_TENANTS_TENANCY_IN_COMMON_JTIC</li><li>JOINT_TENANTS_WITH_RIGHTS_OF_SURVIVORSHIP_JTWROS</li><li>JOINT_TENANTS_COMMUNITY_PROPERTY</li><li>JOINT_TENANTS_TENANTS_BY_ENTIRETY</li><li>CONSERVATOR</li><li>ROTH_IRA</li><li>ROTH_CONVERSION</li><li>ROLLOVER_IRA</li><li>EDUCATIONAL</li><li>EDUCATIONAL_SAVINGS_PLAN_529</li><li>DEFERRED_COMPENSATION_PLAN_457</li><li>MONEY_PURCHASE_RETIREMENT_PLAN_401A</li><li>PROFIT_SHARING_PLAN</li><li>MONEY_PURCHASE_PLAN</li><li>STOCK_BASKET_ACCOUNT</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER_TRUST</li><li>CHARITABLE_LEAD_TRUST</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP_IRA</li><li>UNIFORM_TRANSFER_TO_MINORS_ACT_UTMA</li><li>UNIFORM_GIFT_TO_MINORS_ACT_UGMA</li><li>EMPLOYEE_STOCK_OWNERSHIP_PLAN_ESOP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>PROPRIETORSHIP</li><li>CHURCH_ACCOUNT</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CASH_MANAGEMENT_ACCOUNT</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN_ESPP</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET_ACCOUNT</li><li>SUPERANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN_RRSP</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN_SRSP</li><li>DEFERRED_PROFIT_SHARING_PLAN_DPSP</li><li>NON_REGISTERED_SAVINGS_PLAN_NRSP</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN_RESP</li><li>GROUP_RETIREMENT_SAVINGS_PLAN_GRSP</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN_LRSP</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN_RLSP</li><li>LOCKED_IN_RETIREMENT_ACCOUNT_LIRA</li><li>REGISTERED_PENSION_PLAN_RPP</li><li>TAX_FREE_SAVINGS_ACCOUNT_TFSA</li><li>LIFE_INCOME_FUND_LIF</li><li>REGISTERED_RETIREMENT_INCOME_FUND_RIF</li><li>SPOUSAL_RETIREMENT_INCOME_FUND_SRIF</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND_LRIF</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND_PRIF</li><li>GUARANTEED_INVESTMENT_CERTIFICATES_GIC</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN_RDSP</li><li>DEFINED_CONTRIBUTION_PLAN</li><li>DEFINED_BENEFIT_PLAN</li><li>EMPLOYEE_STOCK_OPTION_PLAN</li><li>NONQUALIFIED_DEFERRED_COMPENSATION_PLAN_409A</li><li>KEOGH_PLAN</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_ROTH_401K</li><li>DEFERRED_CONTINGENT_CAPITAL_PLAN_DCCP</li><li>EMPLOYEE_BENEFIT_PLAN</li><li>EMPLOYEE_SAVINGS_PLAN</li><li>HEALTH_SAVINGS_ACCOUNT_HSA</li><li>COVERDELL_EDUCATION_SAVINGS_ACCOUNT_ESA</li><li>TESTAMENTARY_TRUST</li><li>ESTATE</li><li>GRANTOR_RETAINED_ANNUITY_TRUST_GRAT</li><li>ADVISORY_ACCOUNT</li><li>NON_PROFIT_ORGANIZATION_501C</li><li>HEALTH_REIMBURSEMENT_ARRANGEMENT_HRA</li><li>INDIVIDUAL_SAVINGS_ACCOUNT_ISA</li><li>CASH_ISA</li><li>STOCKS_AND_SHARES_ISA</li><li>INNOVATIVE_FINANCE_ISA</li><li>JUNIOR_ISA</li><li>EMPLOYEES_PROVIDENT_FUND_ORGANIZATION_EPFO</li><li>PUBLIC_PROVIDENT_FUND_PPF</li><li>EMPLOYEES_PENSION_SCHEME_EPS</li><li>NATIONAL_PENSION_SYSTEM_NPS</li><li>INDEXED_ANNUITY</li><li>ANNUITIZED_ANNUITY</li><li>VARIABLE_ANNUITY</li><li>ROTH_403B</li><li>SPOUSAL_IRA</li><li>SPOUSAL_ROTH_IRA</li><li>SARSEP_IRA</li><li>SUBSTANTIALLY_EQUAL_PERIODIC_PAYMENTS_SEPP</li><li>OFFSHORE_TRUST</li><li>IRREVOCABLE_LIFE_INSURANCE_TRUST</li><li>INTERNATIONAL_TRUST</li><li>LIFE_INTEREST_TRUST</li><li>EMPLOYEE_BENEFIT_TRUST</li><li>PRECIOUS_METAL_ACCOUNT</li><li>INVESTMENT_LOAN_ACCOUNT</li><li>GRANTOR_RETAINED_INCOME_TRUST</li><li>PENSION_PLAN</li><li>OTHER</li></ul><b>loan</b><ul><li>MORTGAGE</li><li>INSTALLMENT_LOAN</li><li>PERSONAL_LOAN</li><li>HOME_EQUITY_LINE_OF_CREDIT</li><li>LINE_OF_CREDIT</li><li>AUTO_LOAN</li><li>STUDENT_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>AUTO_INSURANCE</li><li>HEALTH_INSURANCE</li><li>HOME_INSURANCE</li><li>LIFE_INSURANCE</li><li>ANNUITY</li><li>TRAVEL_INSURANCE</li><li>INSURANCE</li></ul><b>realEstate</b><ul> <li>REAL_ESTATE</li></ul><b>reward</b><ul><li>REWARD_POINTS</li></ul><b>Manual Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PREPAID</li></ul><b>credit</b><ul>  <li>CREDIT</li></ul><b>loan</b><ul>  <li>PERSONAL_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>INSURANCE</li><li>ANNUITY</li></ul><b>investment</b><ul><li>BROKERAGE_CASH</li></ul><br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br></ul>|
|bankTransferCode|[[BankTransferCode](#schemabanktransfercode)]|false|read-only|Bank and branch identification information.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, investment, loan<br><b>Endpoints</b>:<br><ul></ul>|
|fullAccountNumber|string|false|none|none|
|holder|[[AccountHolder](#schemaaccountholder)]|false|none|none|
|id|integer(int64)|false|none|none|
|providerAccountId|integer(int64)|false|read-only|The primary key of the provider account resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br>|
|providerName|string|false|read-only|<b>Applicable containers</b>: reward, bank, creditCard, investment, loan, insurance, realEstate,  otherLiabilities<br>|

<h2 id="tocS_VerifyAccount">VerifyAccount</h2>
<!-- backwards compatibility -->
<a id="schemaverifyaccount"></a>
<a id="schema_VerifyAccount"></a>
<a id="tocSverifyaccount"></a>
<a id="tocsverifyaccount"></a>

```json
{
  "account": [
    {
      "accountNumber": "string",
      "accountType": "string",
      "bankTransferCode": [
        {
          "id": "string",
          "type": "BSB"
        }
      ],
      "fullAccountNumber": "string",
      "holder": [
        {
          "gender": "string",
          "identifier": [
            {
              "type": "NIE",
              "value": "string"
            }
          ],
          "name": {
            "first": "string",
            "fullName": "string",
            "last": "string",
            "middle": "string"
          },
          "ownership": "PRIMARY"
        }
      ],
      "id": 0,
      "providerAccountId": 0,
      "providerName": "string"
    }
  ],
  "transactionCriteria": [
    {
      "amount": 0,
      "baseType": "CREDIT",
      "date": "string",
      "dateVariance": "string",
      "keyword": "string",
      "matched": "COMPLETE",
      "verifiedTransaction": [
        {
          "CONTAINER": "bank",
          "accountId": 0,
          "amount": {
            "amount": 0,
            "currency": "AUD"
          },
          "baseType": "CREDIT",
          "category": "string",
          "categoryId": 0,
          "categorySource": "SYSTEM",
          "categoryType": "TRANSFER",
          "checkNumber": "string",
          "commission": {
            "amount": 0,
            "currency": "AUD"
          },
          "createdDate": "string",
          "cusipNumber": "string",
          "date": "string",
          "description": {
            "consumer": "string",
            "original": "string",
            "security": "string",
            "simple": "string"
          },
          "detailCategoryId": 0,
          "highLevelCategoryId": 0,
          "holdingDescription": "string",
          "id": 0,
          "interest": {
            "amount": 0,
            "currency": "AUD"
          },
          "isManual": true,
          "isin": "string",
          "lastUpdated": "string",
          "memo": "string",
          "merchant": {
            "address": {
              "address1": "string",
              "address2": "string",
              "address3": "string",
              "city": "string",
              "country": "string",
              "sourceType": "string",
              "state": "string",
              "street": "string",
              "type": "HOME",
              "zip": "string"
            },
            "categoryLabel": [
              "string"
            ],
            "contact": {
              "email": "string",
              "phone": "string"
            },
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            },
            "id": "string",
            "name": "string",
            "source": "YODLEE",
            "website": "string"
          },
          "parentCategoryId": 0,
          "postDate": "string",
          "price": {
            "amount": 0,
            "currency": "AUD"
          },
          "principal": {
            "amount": 0,
            "currency": "AUD"
          },
          "quantity": 0,
          "runningBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "sedol": "string",
          "settleDate": "string",
          "sourceId": "string",
          "sourceType": "AGGREGATED",
          "status": "POSTED",
          "subType": "AUTH_HOLD",
          "symbol": "string",
          "transactionDate": "string",
          "type": "string",
          "valoren": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[[VerifiedAccount](#schemaverifiedaccount)]|false|none|none|
|transactionCriteria|[[VerifyTransactionCriteria](#schemaverifytransactioncriteria)]|false|none|none|

<h2 id="tocS_VerifyAccountRequest">VerifyAccountRequest</h2>
<!-- backwards compatibility -->
<a id="schemaverifyaccountrequest"></a>
<a id="schema_VerifyAccountRequest"></a>
<a id="tocSverifyaccountrequest"></a>
<a id="tocsverifyaccountrequest"></a>

```json
{
  "accountId": 0,
  "container": "bank",
  "transactionCriteria": [
    {
      "amount": 0,
      "baseType": "CREDIT",
      "date": "string",
      "dateVariance": "string",
      "keyword": "string",
      "matched": "COMPLETE",
      "verifiedTransaction": [
        {
          "CONTAINER": "bank",
          "accountId": 0,
          "amount": {
            "amount": 0,
            "currency": "AUD"
          },
          "baseType": "CREDIT",
          "category": "string",
          "categoryId": 0,
          "categorySource": "SYSTEM",
          "categoryType": "TRANSFER",
          "checkNumber": "string",
          "commission": {
            "amount": 0,
            "currency": "AUD"
          },
          "createdDate": "string",
          "cusipNumber": "string",
          "date": "string",
          "description": {
            "consumer": "string",
            "original": "string",
            "security": "string",
            "simple": "string"
          },
          "detailCategoryId": 0,
          "highLevelCategoryId": 0,
          "holdingDescription": "string",
          "id": 0,
          "interest": {
            "amount": 0,
            "currency": "AUD"
          },
          "isManual": true,
          "isin": "string",
          "lastUpdated": "string",
          "memo": "string",
          "merchant": {
            "address": {
              "address1": "string",
              "address2": "string",
              "address3": "string",
              "city": "string",
              "country": "string",
              "sourceType": "string",
              "state": "string",
              "street": "string",
              "type": "HOME",
              "zip": "string"
            },
            "categoryLabel": [
              "string"
            ],
            "contact": {
              "email": "string",
              "phone": "string"
            },
            "coordinates": {
              "latitude": 0,
              "longitude": 0
            },
            "id": "string",
            "name": "string",
            "source": "YODLEE",
            "website": "string"
          },
          "parentCategoryId": 0,
          "postDate": "string",
          "price": {
            "amount": 0,
            "currency": "AUD"
          },
          "principal": {
            "amount": 0,
            "currency": "AUD"
          },
          "quantity": 0,
          "runningBalance": {
            "amount": 0,
            "currency": "AUD"
          },
          "sedol": "string",
          "settleDate": "string",
          "sourceId": "string",
          "sourceType": "AGGREGATED",
          "status": "POSTED",
          "subType": "AUTH_HOLD",
          "symbol": "string",
          "transactionDate": "string",
          "type": "string",
          "valoren": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int64)|false|none|none|
|container|string|false|none|none|
|transactionCriteria|[[VerifyTransactionCriteria](#schemaverifytransactioncriteria)]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|container|bank|
|container|creditCard|
|container|investment|
|container|insurance|
|container|loan|
|container|reward|
|container|realEstate|
|container|otherAssets|
|container|otherLiabilities|

<h2 id="tocS_VerifyAccountResponse">VerifyAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifyaccountresponse"></a>
<a id="schema_VerifyAccountResponse"></a>
<a id="tocSverifyaccountresponse"></a>
<a id="tocsverifyaccountresponse"></a>

```json
{
  "verifyAccount": {
    "account": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "bankTransferCode": [
          {
            "id": "string",
            "type": "BSB"
          }
        ],
        "fullAccountNumber": "string",
        "holder": [
          {
            "gender": "string",
            "identifier": [
              {
                "type": "NIE",
                "value": "string"
              }
            ],
            "name": {
              "first": "string",
              "fullName": "string",
              "last": "string",
              "middle": "string"
            },
            "ownership": "PRIMARY"
          }
        ],
        "id": 0,
        "providerAccountId": 0,
        "providerName": "string"
      }
    ],
    "transactionCriteria": [
      {
        "amount": 0,
        "baseType": "CREDIT",
        "date": "string",
        "dateVariance": "string",
        "keyword": "string",
        "matched": "COMPLETE",
        "verifiedTransaction": [
          {
            "CONTAINER": "bank",
            "accountId": 0,
            "amount": {
              "amount": 0,
              "currency": "AUD"
            },
            "baseType": "CREDIT",
            "category": "string",
            "categoryId": 0,
            "categorySource": "SYSTEM",
            "categoryType": "TRANSFER",
            "checkNumber": "string",
            "commission": {
              "amount": 0,
              "currency": "AUD"
            },
            "createdDate": "string",
            "cusipNumber": "string",
            "date": "string",
            "description": {
              "consumer": "string",
              "original": "string",
              "security": "string",
              "simple": "string"
            },
            "detailCategoryId": 0,
            "highLevelCategoryId": 0,
            "holdingDescription": "string",
            "id": 0,
            "interest": {
              "amount": 0,
              "currency": "AUD"
            },
            "isManual": true,
            "isin": "string",
            "lastUpdated": "string",
            "memo": "string",
            "merchant": {
              "address": {
                "address1": "string",
                "address2": "string",
                "address3": "string",
                "city": "string",
                "country": "string",
                "sourceType": "string",
                "state": "string",
                "street": "string",
                "type": "HOME",
                "zip": "string"
              },
              "categoryLabel": [
                "string"
              ],
              "contact": {
                "email": "string",
                "phone": "string"
              },
              "coordinates": {
                "latitude": 0,
                "longitude": 0
              },
              "id": "string",
              "name": "string",
              "source": "YODLEE",
              "website": "string"
            },
            "parentCategoryId": 0,
            "postDate": "string",
            "price": {
              "amount": 0,
              "currency": "AUD"
            },
            "principal": {
              "amount": 0,
              "currency": "AUD"
            },
            "quantity": 0,
            "runningBalance": {
              "amount": 0,
              "currency": "AUD"
            },
            "sedol": "string",
            "settleDate": "string",
            "sourceId": "string",
            "sourceType": "AGGREGATED",
            "status": "POSTED",
            "subType": "AUTH_HOLD",
            "symbol": "string",
            "transactionDate": "string",
            "type": "string",
            "valoren": "string"
          }
        ]
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|verifyAccount|[VerifyAccount](#schemaverifyaccount)|false|none|none|

<h2 id="tocS_VerifyTransactionCriteria">VerifyTransactionCriteria</h2>
<!-- backwards compatibility -->
<a id="schemaverifytransactioncriteria"></a>
<a id="schema_VerifyTransactionCriteria"></a>
<a id="tocSverifytransactioncriteria"></a>
<a id="tocsverifytransactioncriteria"></a>

```json
{
  "amount": 0,
  "baseType": "CREDIT",
  "date": "string",
  "dateVariance": "string",
  "keyword": "string",
  "matched": "COMPLETE",
  "verifiedTransaction": [
    {
      "CONTAINER": "bank",
      "accountId": 0,
      "amount": {
        "amount": 0,
        "currency": "AUD"
      },
      "baseType": "CREDIT",
      "category": "string",
      "categoryId": 0,
      "categorySource": "SYSTEM",
      "categoryType": "TRANSFER",
      "checkNumber": "string",
      "commission": {
        "amount": 0,
        "currency": "AUD"
      },
      "createdDate": "string",
      "cusipNumber": "string",
      "date": "string",
      "description": {
        "consumer": "string",
        "original": "string",
        "security": "string",
        "simple": "string"
      },
      "detailCategoryId": 0,
      "highLevelCategoryId": 0,
      "holdingDescription": "string",
      "id": 0,
      "interest": {
        "amount": 0,
        "currency": "AUD"
      },
      "isManual": true,
      "isin": "string",
      "lastUpdated": "string",
      "memo": "string",
      "merchant": {
        "address": {
          "address1": "string",
          "address2": "string",
          "address3": "string",
          "city": "string",
          "country": "string",
          "sourceType": "string",
          "state": "string",
          "street": "string",
          "type": "HOME",
          "zip": "string"
        },
        "categoryLabel": [
          "string"
        ],
        "contact": {
          "email": "string",
          "phone": "string"
        },
        "coordinates": {
          "latitude": 0,
          "longitude": 0
        },
        "id": "string",
        "name": "string",
        "source": "YODLEE",
        "website": "string"
      },
      "parentCategoryId": 0,
      "postDate": "string",
      "price": {
        "amount": 0,
        "currency": "AUD"
      },
      "principal": {
        "amount": 0,
        "currency": "AUD"
      },
      "quantity": 0,
      "runningBalance": {
        "amount": 0,
        "currency": "AUD"
      },
      "sedol": "string",
      "settleDate": "string",
      "sourceId": "string",
      "sourceType": "AGGREGATED",
      "status": "POSTED",
      "subType": "AUTH_HOLD",
      "symbol": "string",
      "transactionDate": "string",
      "type": "string",
      "valoren": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|true|none|none|
|baseType|string|false|none|Indicates if the transaction appears as a debit or a credit transaction in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>|
|date|string|true|none|none|
|dateVariance|string|false|none|none|
|keyword|string|false|none|none|
|matched|string|false|read-only|Indicates if the criteria is matched or not. <br><b>Applicable Values</b><br>|
|verifiedTransaction|[[Transaction](#schematransaction)]|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|baseType|CREDIT|
|baseType|DEBIT|
|matched|COMPLETE|
|matched|NONE|

<h2 id="tocS_YodleeError">YodleeError</h2>
<!-- backwards compatibility -->
<a id="schemayodleeerror"></a>
<a id="schema_YodleeError"></a>
<a id="tocSyodleeerror"></a>
<a id="tocsyodleeerror"></a>

```json
{
  "errorCode": "string",
  "errorMessage": "string",
  "referenceCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|none|
|errorMessage|string|false|none|none|
|referenceCode|string|false|none|none|
