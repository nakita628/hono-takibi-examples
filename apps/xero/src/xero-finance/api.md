<h1 id="xero-finance-api">Xero Finance API v19.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Finance API is a collection of endpoints which customers can use in the course of a loan application, which may assist lenders to gain the confidence they need to provide capital.

Base URLs:

* <a href="https://api.xero.com/finance.xro/1.0">https://api.xero.com/finance.xro/1.0</a> - Xero API servers

<a href="https://developer.xero.com/xero-developer-platform-terms-conditions/">Terms of service</a>
Email: <a href="mailto:api@xero.com">Xero Platform Team</a> 
Web: <a href="https://developer.xero.com">Xero Platform Team</a> 
License: <a href="https://github.com/XeroAPI/Xero-OpenAPI/blob/master/LICENSE">MIT</a>

# Authentication

- oAuth2 authentication. For more information

    - Flow: authorizationCode
    - Authorization URL = [https://login.xero.com/identity/connect/authorize](https://login.xero.com/identity/connect/authorize)
    - Token URL = [https://identity.xero.com/connect/token](https://identity.xero.com/connect/token)

|Scope|Scope Description|
|---|---|
|email|Grant read-only access to your email|
|openid|Grant read-only access to your open id|
|profile|your profile information|
|finance.statements.read|Grant read-only access to finacial statements|
|finance.cashvalidation.read|Grant read-only access to bank statement and reconcilation data|
|finance.bankstatementsplus.read|Grant read-only access to bank statements accounting data|

<h1 id="xero-finance-api-finance">Finance</h1>

## Get cash validation

<a id="opIdgetCashValidation"></a>

> Code samples

```bash
curl https://api.xero.com/finance.xro/1.0/CashValidation \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /CashValidation`

Summarizes the total cash position for each account for an org

<h3 id="get-cash-validation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceDate|query|string|false|date, yyyy-MM-dd <br><br>If no parameter is provided, the current date will be used.<br><br>The ‘balance date’ will return transactions based on the accounting date entered by the user.  Transactions before the balanceDate will be included.<br>The user has discretion as to which accounting period the transaction relates to.<br><br>The ‘balance date’  will control the latest maximum date of transactions included in the aggregate numbers.  Balance date does not affect the CurrentStatement object, as this will always return the most recent statement before asAtSystemDate (if specified)|
|asAtSystemDate|query|string|false|date, yyyy-MM-dd <br><br>If no parameter is provided, the current date will be used.<br><br>The ‘as at’ date will return transactions based on the  creation date.  It reflects the date the transactions were entered into Xero, not the accounting date.<br>The ‘as at’ date can not be overridden by the user.  This can be used to estimate a ‘historical frequency of reconciliation’.<br><br>The ‘as at’ date will affect the current statement in the response, as any candidate statements created after this date will be filtered out.  Thus the current statement returned will be the most recent statement prior to the specified ‘as at’ date.  Be aware that neither the begin date, nor the balance date, will affect the current statement.<br><br>Note;  information is only presented when system architecture allows, meaning historical cash validation information will be an estimate. In addition, delete events are not aware of the ‘as at’ functionality in this endpoint, meaning that transactions deleted at the time the API is accessed will be considered to always have been deleted.|
|beginDate|query|string|false|date, yyyy-MM-dd <br><br>If no parameter is provided, the aggregate results will be drawn from the user’s total history.<br><br>The ‘begin date’ will return transactions based on the accounting date entered by the user. Transactions after the beginDate will be included.<br>The user has discretion as to which accounting period the transaction relates to.|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
[
  {
    "accountId": "73151de8-3676-4887-a021-edec960dd537",
    "statementBalance": {
      "value": 100,
      "type": "DEBIT"
    },
    "statementBalanceDate": "2021-03-01",
    "bankStatement": {
      "statementLines": {
        "unreconciledAmountPos": 4577,
        "unreconciledAmountNeg": -2367,
        "unreconciledLines": 8,
        "avgDaysUnreconciledPos": 112.265531,
        "avgDaysUnreconciledNeg": 149.298992,
        "earliestUnreconciledTransaction": "2019-03-01",
        "latestUnreconciledTransaction": "2021-03-01",
        "deletedAmount": 50,
        "totalAmount": 189,
        "dataSource": {
          "directBankFeed": 0,
          "fileUpload": 300,
          "manual": -188,
          "directBankFeedPos": 0,
          "fileUploadPos": 2223,
          "manualPos": 0,
          "directBankFeedNeg": 0,
          "fileUploadNeg": -1890,
          "manualNeg": -500,
          "otherPos": 0,
          "otherNeg": 0,
          "other": 100
        },
        "earliestReconciledTransaction": "2019-03-01",
        "latestReconciledTransaction": "2020-03-01",
        "reconciledAmountPos": 0,
        "reconciledAmountNeg": -288,
        "reconciledLines": 3,
        "totalAmountPos": 2245,
        "totalAmountNeg": -1995
      },
      "currentStatement": {
        "startDate": "2021-03-01",
        "endDate": "2021-03-01",
        "startBalance": 0,
        "endBalance": 0,
        "importedDateTimeUtc": "2021-03-09T05:22:14.3Z",
        "importSourceType": "Manual"
      }
    },
    "cashAccount": {
      "unreconciledAmountPos": 1440,
      "unreconciledAmountNeg": -1000,
      "startingBalance": 0,
      "accountBalance": 0,
      "balanceCurrency": "NZD"
    }
  }
]
```

> 400 Response

```json
{
  "type": "invalid-request",
  "title": "InvalidRequest",
  "status": 400,
  "detail": "Invalid BalanceDate: '2020-01'"
}
```

<h3 id="get-cash-validation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|BadRequest|[Problem](#schemaproblem)|

<h3 id="get-cash-validation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CashValidationResponse](#schemacashvalidationresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: finance.cashvalidation.read )
</aside>

## Get Balance Sheet report

<a id="opIdgetFinancialStatementBalanceSheet"></a>

> Code samples

```bash
curl https://api.xero.com/finance.xro/1.0/FinancialStatements/BalanceSheet \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /FinancialStatements/BalanceSheet`

The balance sheet report is a standard financial report which describes the financial position of an organisation at a point in time.

<h3 id="get-balance-sheet-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|balanceDate|query|string|false|Specifies the date for balance sheet report.<br><br>Format yyyy-MM-dd. If no parameter is provided, the current date will be used.|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "balanceDate": "2021-05-12",
  "asset": {
    "accountTypes": [
      {
        "accountType": "INVENTORY",
        "accounts": [
          {
            "code": "630",
            "accountID": "abcdeabc-80bb-47f5-9418-d1fc2241b838",
            "name": "Inventory",
            "reportingCode": "ASS.CUR.INY",
            "total": 3
          }
        ],
        "total": 3
      },
      {
        "accountType": "CURRENT",
        "accounts": [
          {
            "code": "610",
            "accountID": "abcdeabc-b4d1-45a5-82f7-19deda692a31",
            "name": "Accounts Receivable",
            "reportingCode": "ASS.CUR.REC.TRA",
            "total": 100
          }
        ],
        "total": 100
      },
      {
        "accountType": "BANK",
        "accounts": [
          {
            "accountID": "abcdeabc-3a6d-4c53-ba82-ea1c92d02ef4",
            "name": "Buz Acc",
            "reportingCode": "ASS",
            "total": -42.3
          }
        ],
        "total": -42.3
      }
    ],
    "total": 60.7
  },
  "liability": {
    "accountTypes": [
      {
        "accountType": "CURRLIAB",
        "accounts": [
          {
            "code": "820",
            "accountID": "abcdeabc-40f7-49f1-ad89-1930c1366e5b",
            "name": "GST",
            "reportingCode": "LIA.CUR.TAX.GST",
            "total": 1.59
          },
          {
            "code": "860",
            "accountID": "abcdeabc-2877-4c00-be7d-475b1ded30d7",
            "name": "Rounding",
            "reportingCode": "LIA.CUR",
            "total": -0.1
          },
          {
            "code": "800",
            "accountID": "abcdeabc-80ba-4b58-8d72-f8e9ca0f2f00",
            "name": "Accounts Payable",
            "reportingCode": "LIA.CUR.PAY.TRA",
            "total": 44.4
          }
        ],
        "total": 45.89
      }
    ],
    "total": 45.89
  },
  "equity": {
    "accountTypes": [
      {
        "accountType": "EQUITY",
        "accounts": [
          {
            "accountID": "00000000-0000-0000-0000-000000000000",
            "name": "Current Year Earnings",
            "total": 14.81
          }
        ],
        "total": 14.81
      }
    ],
    "total": 14.81
  }
}
```

> 400 Response

```json
{
  "type": "invalid-request",
  "title": "InvalidRequest",
  "status": 400,
  "detail": "Organisation xxx does not exist"
}
```

> 503 Response

```json
{
  "type": "service-unavailable",
  "title": "ServiceUnavailable",
  "status": 503,
  "detail": "Cannot process org xxx at this time. Apologies for inconvenience."
}
```

<h3 id="get-balance-sheet-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BalanceSheetResponse](#schemabalancesheetresponse)|
|400|Bad Request|Bad Request|[Problem](#schemaproblem)|
|503|Service Unavailable|Server Error|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: finance.statements.read )
</aside>

## Get Cash flow report

<a id="opIdgetFinancialStatementCashflow"></a>

> Code samples

```bash
curl https://api.xero.com/finance.xro/1.0/FinancialStatements/Cashflow \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /FinancialStatements/Cashflow`

The statement of cash flows - direct method, provides the year to date changes in operating, financing and investing cash flow activities for an organisation. Cashflow statement is not available in US region at this stage.

<h3 id="get-cash-flow-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startDate|query|string|false|Date e.g. yyyy-MM-dd<br><br>Specifies the start date for cash flow report.<br><br>If no parameter is provided, the date of 12 months before the end date will be used.|
|endDate|query|string|false|Date e.g. yyyy-MM-dd<br><br>Specifies the end date for cash flow report.<br><br>If no parameter is provided, the current date will be used.|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "startDate": "2018-07-01",
  "endDate": "2019-06-30",
  "cashBalance": {
    "openingCashBalance": 5000,
    "closingCashBalance": -50000,
    "netCashMovement": -55000
  },
  "cashflowActivities": [
    {
      "name": "Operating Activities",
      "total": -41000,
      "cashflowTypes": [
        {
          "name": "Receipts from customers",
          "total": 34000,
          "accounts": [
            {
              "accountId": "abcdefab-4d1e-4d1a-9e4c-68b2c2a278e2",
              "accountType": "REVENUE",
              "accountClass": "REVENUE",
              "code": "455",
              "name": "Cellar Door - Till Variance",
              "reportingCode": "EXP",
              "total": -1000
            },
            {
              "accountId": "abcdefab-4d1e-4d1a-9e4c-68b2c2a278e2",
              "accountType": "CURRENT",
              "accountClass": "ASSET",
              "code": "123",
              "name": "Loan - Darleen's",
              "reportingCode": "ASS",
              "total": 35000
            }
          ]
        },
        {
          "name": "Payments to suppliers and employees",
          "total": -75000,
          "accounts": [
            {
              "accountId": "abcdefab-4d1e-4d1a-9e4c-68b2c2a278e2",
              "accountType": "CURRENT",
              "accountClass": "ASSET",
              "code": "123",
              "name": "Loan - Darleen's",
              "reportingCode": "ASS",
              "total": -75000
            }
          ]
        }
      ]
    },
    {
      "name": "Investing Activities",
      "total": -35000,
      "cashflowTypes": [
        {
          "name": "Payment for property, plant and equipment",
          "total": -36000,
          "accounts": [
            {
              "accountId": "abcdefab-4d1e-4d1a-9e4c-68b2c2a278e2",
              "accountType": "FIXED",
              "accountClass": "ASSET",
              "code": "138",
              "name": "Motor Vehicles at Cost",
              "reportingCode": "ASS",
              "total": -1000
            },
            {
              "accountId": "abcdefab-5353-9d4b-7cad-51b2c2a2754a",
              "accountType": "FIXED",
              "accountClass": "ASSET",
              "code": "140",
              "name": "Equipment at cost",
              "reportingCode": "ASS",
              "total": -35000
            }
          ]
        },
        {
          "name": "Proceeds from sale of property, plant and equipment",
          "total": 1000,
          "accounts": [
            {
              "accountId": "abcdefab-4d1e-4d1a-9e4c-68b2c2a278e2",
              "accountType": "FIXED",
              "accountClass": "ASSET",
              "code": "138",
              "name": "Motor Vehicles at Cost",
              "reportingCode": "ASS",
              "total": 1000
            },
            {
              "accountId": "abcdefab-5353-9d4b-7cad-51b2c2a2754a",
              "accountType": "FIXED",
              "accountClass": "ASSET",
              "code": "140",
              "name": "Equipment at cost",
              "reportingCode": "ASS",
              "total": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Financing Activities",
      "total": -14000,
      "cashflowTypes": [
        {
          "name": "Proceeds from borrowings",
          "total": 1000.5,
          "accounts": [
            {
              "accountId": "abcdefab-4d1e-4d1a-9e4c-68b2c2a278e2",
              "accountType": "TERMLIAB",
              "accountClass": "LIABILITY",
              "code": "244",
              "name": "Loan - Shellcoll Distribution 2019",
              "reportingCode": "LIA.CUR.LOA",
              "total": 1000.5
            }
          ]
        },
        {
          "name": "Repayment of borrowings",
          "total": -15000.5,
          "accounts": [
            {
              "accountId": "abcdefab-4d1e-4d1a-9e4c-68b2c2a278e2",
              "accountType": "TERMLIAB",
              "accountClass": "LIABILITY",
              "code": "244",
              "name": "Loan - Shellcoll Distribution 2019",
              "reportingCode": "LIA.CUR.LOA",
              "total": -15000.5
            }
          ]
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "type": "invalid-request",
  "title": "InvalidRequest",
  "status": 400,
  "detail": "Organisation xxx does not exist"
}
```

> 503 Response

```json
{
  "type": "service-unavailable",
  "title": "ServiceUnavailable",
  "status": 503,
  "detail": "Cannot process org xxx at this time. Apologies for inconvenience."
}
```

<h3 id="get-cash-flow-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CashflowResponse](#schemacashflowresponse)|
|400|Bad Request|Bad Request|[Problem](#schemaproblem)|
|503|Service Unavailable|Server Error|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: finance.statements.read )
</aside>

## Get Profit &amp; Loss report

<a id="opIdgetFinancialStatementProfitAndLoss"></a>

> Code samples

```bash
curl https://api.xero.com/finance.xro/1.0/FinancialStatements/ProfitAndLoss \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /FinancialStatements/ProfitAndLoss`

The profit and loss statement is a standard financial report providing detailed year to date income and expense detail for an organisation.

<h3 id="get-profit-loss-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startDate|query|string|false|Date e.g. yyyy-MM-dd<br><br>Specifies the start date for profit and loss report<br><br>If no parameter is provided, the date of 12 months before the end date will be used.|
|endDate|query|string|false|Date e.g. yyyy-MM-dd<br><br>Specifies the end date for profit and loss report <br><br>If no parameter is provided, the current date will be used.|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "startDate": "2020-07-01",
  "endDate": "2021-06-30",
  "netProfitLoss": 123,
  "revenue": {
    "total": 20922.46,
    "accountTypes": [
      {
        "total": 20825.41,
        "title": "Trading Income",
        "accounts": [
          {
            "accountID": "abcdefab-2006-43c2-a5da-3c0e5f43b452",
            "accountType": "REVENUE",
            "code": "200",
            "name": "Sales",
            "reportingCode": "REV",
            "total": 20825.41
          }
        ]
      },
      {
        "total": 97.05,
        "title": "Other Income",
        "accounts": [
          {
            "accountID": "abcdefab-4d63-4af8-937f-04087ae2e36e",
            "accountType": "OTHERINCOME",
            "code": "270",
            "name": "Interest Income",
            "reportingCode": "REV.OTH",
            "total": 97.05
          }
        ]
      }
    ]
  },
  "expense": {
    "total": 1282.06,
    "accountTypes": [
      {
        "total": 1137.59,
        "title": "Direct Cost",
        "accounts": [
          {
            "accountID": "abcdefab-d381-4bd6-ba47-7af927d25825",
            "accountType": "DIRECTCOSTS",
            "code": "300",
            "name": "Purchases",
            "reportingCode": "EXP.DC",
            "total": 1137.59
          }
        ]
      },
      {
        "total": 144.47,
        "title": "Operating Expenses",
        "accounts": [
          {
            "accountID": "abcdefab-f897-4168-b5d1-2279bf74bb82",
            "accountType": "EXPENSE",
            "code": "453",
            "name": "Office Expenses",
            "reportingCode": "EXP",
            "total": 144.47
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
  "type": "invalid-request",
  "title": "InvalidRequest",
  "status": 400,
  "detail": "Organisation xxx does not exist"
}
```

<h3 id="get-profit-loss-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ProfitAndLossResponse](#schemaprofitandlossresponse)|
|400|Bad Request|Bad Request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: finance.statements.read )
</aside>

## Get Trial Balance report

<a id="opIdgetFinancialStatementTrialBalance"></a>

> Code samples

```bash
curl https://api.xero.com/finance.xro/1.0/FinancialStatements/TrialBalance \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /FinancialStatements/TrialBalance`

The trial balance provides a detailed list of all accounts of an organisation at a point in time, with revenue and expense items being year to date.

<h3 id="get-trial-balance-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endDate|query|string|false|Date e.g. yyyy-MM-dd <br><br>Specifies the end date for trial balance report <br><br>If no parameter is provided, the current date will be used.|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "startDate": "2020-07-01",
  "endDate": "2021-06-30",
  "accounts": [
    {
      "accountId": "abcdefab-3bbf-4f2a-9e4c-20ec7b8e6b41",
      "accountType": "ASSET",
      "accountCode": "ASS",
      "accountClass": "BANK",
      "status": "ACTIVE",
      "reportingCode": "ASS",
      "accountName": "Everyday transactions",
      "balance": {
        "value": 100,
        "entryType": "DEBIT"
      },
      "signedBalance": -23,
      "accountMovement": {
        "debits": 0,
        "credits": 0,
        "movement": {
          "value": 123,
          "entryType": "CREDIT"
        },
        "signedMovement": 0
      }
    }
  ]
}
```

> 400 Response

```json
{
  "type": "invalid-request",
  "title": "InvalidRequest",
  "status": 400,
  "detail": "Organisation xxx does not exist"
}
```

<h3 id="get-trial-balance-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TrialBalanceResponse](#schematrialbalanceresponse)|
|400|Bad Request|Bad Request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: finance.statements.read )
</aside>

## Get revenue by contacts report

<a id="opIdgetFinancialStatementContactsRevenue"></a>

> Code samples

```bash
curl https://api.xero.com/finance.xro/1.0/FinancialStatements/contacts/revenue \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /FinancialStatements/contacts/revenue`

The revenue by contact report provides a year to date profit and loss for customers and suppliers for a given organisation, including detailed contact information.

<h3 id="get-revenue-by-contacts-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contactIds|query|[string(uuid)]|false|Specifies the customer contacts to be included in the report.<br><br>If no parameter is provided, all customer contacts will be included|
|includeManualJournals|query|boolean|false|Specifies whether to include the manual journals in the report.<br>            <br>If no parameter is provided, manual journals will not be included.|
|startDate|query|string|false|Date yyyy-MM-dd<br><br>Specifies the start date for the report.<br>            <br>If no parameter is provided, the date of 12 months before the end date will be used.<br>            <br>It is recommended to always specify both a start date and end date; While the initial range may be set to 12 months, this may need to be reduced for high volume organisations in order to improve latency.|
|endDate|query|string|false|Date yyyy-MM-dd<br><br>Specifies the end date for the report.<br><br>If no parameter is provided, the current date will be used.<br>            <br>It is recommended to always specify both a start date and end date; While the initial range may be set to 12 months, this may need to be reduced for high volume organisations in order to improve latency.|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "startDate": "2019-10-17",
  "endDate": "2020-10-16",
  "total": 1200,
  "totalDetail": {
    "totalPaid": 400,
    "totalOutstanding": 1000,
    "totalCreditedUnApplied": 200
  },
  "totalOther": {
    "totalOutstandingAged": 1000,
    "totalVoided": 150,
    "totalCredited": 10
  },
  "contacts": [
    {
      "id": "1f580fe2-0659-31ee-eeb4-5c49d15d8bfa",
      "name": "FirstContact",
      "total": 1400,
      "totalDetail": {
        "totalPaid": 400,
        "totalOutstanding": 1000,
        "totalCreditedUnApplied": 0
      },
      "totalOther": {
        "totalOutstandingAged": 1000,
        "totalVoided": 150,
        "totalCredited": 0,
        "transactionCount": 3
      },
      "accountCodes": [
        "090",
        "200",
        "09-BANK"
      ]
    },
    {
      "id": "20e94281-4751-fb7e-ee5e-96b43ae93c8a",
      "name": "SecondContact",
      "total": -200,
      "totalDetail": {
        "totalPaid": 10,
        "totalOutstanding": 20,
        "totalCreditedUnApplied": 200
      },
      "totalOther": {
        "totalOutstandingAged": 2,
        "totalVoided": 3,
        "totalCredited": 4,
        "transactionCount": 1
      },
      "accountCodes": [
        "900"
      ]
    }
  ],
  "manualJournals": {
    "total": -100
  }
}
```

> 400 Response

```json
{
  "type": "invalid-request",
  "title": "InvalidRequest",
  "status": 400,
  "detail": "Organisation xxx does not exist"
}
```

<h3 id="get-revenue-by-contacts-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IncomeByContactResponse](#schemaincomebycontactresponse)|
|400|Bad Request|Bad Request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: finance.statements.read )
</aside>

## Get expense by contacts report

<a id="opIdgetFinancialStatementContactsExpense"></a>

> Code samples

```bash
curl https://api.xero.com/finance.xro/1.0/FinancialStatements/contacts/expense \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /FinancialStatements/contacts/expense`

The expense by contact report provides a year to date profit and loss for customers and suppliers for a given organisation, including detailed contact information.

<h3 id="get-expense-by-contacts-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contactIds|query|[string(uuid)]|false|Specifies the customer contacts to be included in the report.<br><br>If no parameter is provided, all customer contacts will be included|
|includeManualJournals|query|boolean|false|Specifies whether to include the manual journals in the report.<br>            <br>If no parameter is provided, manual journals will not be included.|
|startDate|query|string|false|Date yyyy-MM-dd<br><br>Specifies the start date for the report.<br>            <br>If no parameter is provided, the date of 12 months before the end date will be used.<br>            <br>It is recommended to always specify both a start date and end date; While the initial range may be set to 12 months, this may need to be reduced for high volume organisations in order to improve latency.|
|endDate|query|string|false|Date yyyy-MM-dd<br><br>Specifies the end date for the report.<br><br>If no parameter is provided, the current date will be used.<br>            <br>It is recommended to always specify both a start date and end date; While the initial range may be set to 12 months, this may need to be reduced for high volume organisations in order to improve latency.|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "startDate": "2019-10-17",
  "endDate": "2020-10-16",
  "total": 1200,
  "totalDetail": {
    "totalPaid": 400,
    "totalOutstanding": 1000,
    "totalCreditedUnApplied": 200
  },
  "totalOther": {
    "totalOutstandingAged": 1000,
    "totalVoided": 150,
    "totalCredited": 10
  },
  "contacts": [
    {
      "id": "1f580fe2-0659-31ee-eeb4-5c49d15d8bfa",
      "name": "FirstContact",
      "total": 1400,
      "totalDetail": {
        "totalPaid": 400,
        "totalOutstanding": 1000,
        "totalCreditedUnApplied": 0
      },
      "totalOther": {
        "totalOutstandingAged": 1000,
        "totalVoided": 150,
        "totalCredited": 0,
        "transactionCount": 3
      },
      "accountCodes": [
        "090",
        "200",
        "09-BANK"
      ]
    },
    {
      "id": "20e94281-4751-fb7e-ee5e-96b43ae93c8a",
      "name": "SecondContact",
      "total": -200,
      "totalDetail": {
        "totalPaid": 0,
        "totalOutstanding": 0,
        "totalCreditedUnApplied": 200
      },
      "totalOther": {
        "totalOutstandingAged": 2,
        "totalVoided": 3,
        "totalCredited": 4,
        "transactionCount": 1
      },
      "accountCodes": [
        "900"
      ]
    }
  ],
  "manualJournals": {
    "total": -100
  }
}
```

> 400 Response

```json
{
  "type": "invalid-request",
  "title": "InvalidRequest",
  "status": 400,
  "detail": "Organisation xxx does not exist"
}
```

<h3 id="get-expense-by-contacts-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[IncomeByContactResponse](#schemaincomebycontactresponse)|
|400|Bad Request|Bad Request|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: finance.statements.read )
</aside>

## Get Bank Statement Accounting

<a id="opIdgetBankStatementAccounting"></a>

> Code samples

```bash
curl 'https://api.xero.com/finance.xro/1.0/BankStatementsPlus/statements?BankAccountID=497f6eca-6276-4993-bfeb-53cbbbba6f08&FromDate=2020-07-01&ToDate=2021-06-30' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'xero-tenant-id: YOUR_XERO_TENANT_ID'
```

`GET /BankStatementsPlus/statements`

For lenders that prefer using bank statement data as the source of truth.  We provide a data point that will allow access to customer bank statements, plus for reconciled bank transactions the matching accounting, invoice and billing data as well.  As customers reconcile bank statements to invoices and bills, this transaction detail will provide valuable insight for lender's assessment measures. 

<h3 id="get-bank-statement-accounting-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|BankAccountID|query|string(uuid)|true|string, GUID<br><br>Bank account Id|
|FromDate|query|string|true|date, yyyy-MM-dd <br><br>Specifies the start date of the query period. <br>The maximum range of the query period is 12 months. If the specified query period is more than 12 months the request will be rejected.|
|ToDate|query|string|true|date, yyyy-MM-dd <br><br>Specifies the end date of the query period. <br>If the end date is a future date, the request will be rejected.|
|SummaryOnly|query|boolean|false|boolean, true/false<br><br>The default value is true if no parameter is provided.<br><br>In summary mode, the response will exclude the computation-heavy LineItems fields from bank transaction, invoice, credit note, prepayment and overpayment data, making the API calls quicker and more efficient.|
|xero-tenant-id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "bankAccountId": "1234eee9-47f0-4179-bd46-9adb4f21cc7f",
  "bankAccountName": "ANZ BANK",
  "bankAccountCurrencyCode": "NZD",
  "statements": [
    {
      "statementId": "7c29eee9-47f0-4179-bd46-9adb4f21cc7f",
      "startDate": "2021-01-01",
      "endDate": "2021-01-02",
      "importedDateTimeUtc": "2021-01-02T12:00:00Z",
      "importSource": "STMTIMPORTSRC/MANUAL",
      "startBalance": 10,
      "endBalance": 200,
      "indicativeStartBalance": 10,
      "indicativeEndBalance": 200,
      "statementLines": [
        {
          "statementLineId": "1234eee9-47f0-4179-bd46-9adb4f21cc7f",
          "postedDate": "2021-01-01",
          "payee": "ACME Thneeds ABC1234567890 SYDNEY",
          "reference": "Eft",
          "notes": "payment to bank",
          "chequeNo": "123",
          "amount": 100,
          "transactionDate": "2021-01-01",
          "type": "Debit",
          "isReconciled": true,
          "isDuplicate": false,
          "isDeleted": false,
          "payments": [
            {
              "paymentId": "47ec8431-23c2-4ef9-90e5-b440fe55d086",
              "batchPaymentId": "ecc83387-ffaa-4023-b111-b3fd9e3e4a8e",
              "date": "2021-01-01",
              "amount": 80,
              "bankAmount": 80,
              "currencyRate": 1,
              "invoice": {
                "invoiceId": "c01dd6ac-8835-4bf2-af8b-841db9534d7f",
                "contact": {
                  "contactId": "1234eee9-47f0-4179-bd46-9adb4f21cc7f",
                  "contactName": "Bob"
                },
                "total": 80,
                "lineItems": [
                  {
                    "accountId": "f7fe1049-d1cf-4d10-9df1-67a6e363015f",
                    "reportingCode": "REV.OTH",
                    "lineAmount": 80,
                    "accountType": "REVENUE"
                  }
                ]
              }
            },
            {
              "paymentId": "54e8eee0-91a7-4a4d-bb9b-957302a2760a",
              "batchPaymentId": "ecc83387-ffaa-4023-b111-b3fd9e3e4a8e",
              "date": "2021-01-01",
              "amount": 15,
              "bankAmount": 15,
              "currencyRate": 1,
              "creditNote": {
                "creditNoteId": "c346d6a5-f013-4207-bc70-f2dd80a5f37f",
                "contact": {
                  "contactId": "1234eee9-47f0-4179-bd46-9adb4f21cc7f",
                  "contactName": "Bob"
                },
                "total": 15,
                "lineItems": [
                  {
                    "accountId": "f7fe1049-d1cf-4d10-9df1-67a6e363015f",
                    "reportingCode": "REV.OTH",
                    "lineAmount": 15,
                    "accountType": "REVENUE"
                  }
                ]
              }
            },
            {
              "paymentId": "f94dad64-658c-491f-b901-05d38e9e8702",
              "date": "2021-01-01",
              "amount": 5,
              "bankAmount": 5,
              "currencyRate": 1,
              "prepayment": {
                "prepaymentId": "995f81ae-0afd-4c84-bbe1-90bc7dfa4372",
                "contact": {
                  "contactId": "1234eee9-47f0-4179-bd46-9adb4f21cc7f",
                  "contactName": "Bob"
                },
                "total": 5,
                "lineItems": [
                  {
                    "accountId": "f7fe1049-d1cf-4d10-9df1-67a6e363015f",
                    "reportingCode": "REV.OTH",
                    "lineAmount": 5,
                    "accountType": "REVENUE"
                  }
                ]
              }
            },
            {
              "paymentId": "6ffbe999-04c8-42d2-bf16-13947c5f1036",
              "date": "2021-01-01",
              "amount": 5,
              "bankAmount": 5,
              "currencyRate": 1,
              "overpayment": {
                "overpaymentId": "06575718-5100-4e02-8fbf-c2731a112836",
                "contact": {
                  "contactId": "1234eee9-47f0-4179-bd46-9adb4f21cc7f",
                  "contactName": "Bob"
                },
                "total": 5,
                "lineItems": [
                  {
                    "accountId": "f7fe1049-d1cf-4d10-9df1-67a6e363015f",
                    "reportingCode": "REV.OTH",
                    "lineAmount": 5,
                    "accountType": "REVENUE"
                  }
                ]
              }
            }
          ],
          "bankTransactions": [
            {
              "bankTransactionId": "55edf88c-6bf6-459a-bd9b-7f250df62eb2",
              "batchPaymentId": "2dce9b39-0427-41af-9739-9510e3b68211",
              "contact": {
                "contactId": "1234eee9-47f0-4179-bd46-9adb4f21cc7f",
                "contactName": "Bob"
              },
              "date": "2021-01-01",
              "amount": 20,
              "lineItems": [
                {
                  "accountId": "f7fe1049-d1cf-4d10-9df1-67a6e363015f",
                  "reportingCode": "REV.OTH",
                  "lineAmount": 20,
                  "accountType": "REVENUE"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "type": "invalid-request",
  "title": "InvalidRequest",
  "status": 400,
  "detail": "AccountId was not supplied"
}
```

<h3 id="get-bank-statement-accounting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BankStatementAccountingResponse](#schemabankstatementaccountingresponse)|
|400|Bad Request|BadRequest|[Problem](#schemaproblem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: finance.bankstatementsplus.read )
</aside>

# Schemas

<h2 id="tocS_Problem">Problem</h2>
<!-- backwards compatibility -->
<a id="schemaproblem"></a>
<a id="schema_Problem"></a>
<a id="tocSproblem"></a>
<a id="tocsproblem"></a>

```json
{
  "type": "NotSet",
  "title": "string",
  "status": 0,
  "detail": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[ProblemType](#schemaproblemtype)|false|none|none|
|title|string|false|none|none|
|status|integer(int32)|false|none|none|
|detail|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|NotSet|
|type|bank-account-not-found|
|type|internal-error|
|type|invalid-application|
|type|invalid-request|
|type|organisation-not-found|
|type|organisation-offline|
|type|request-timeout|
|type|service-unavailable|
|type|unauthorized|
|type|rate-limit-error|

<h2 id="tocS_ProblemType">ProblemType</h2>
<!-- backwards compatibility -->
<a id="schemaproblemtype"></a>
<a id="schema_ProblemType"></a>
<a id="tocSproblemtype"></a>
<a id="tocsproblemtype"></a>

```json
"NotSet"
```

<h2 id="tocS_BankStatementResponse">BankStatementResponse</h2>
<!-- backwards compatibility -->
<a id="schemabankstatementresponse"></a>
<a id="schema_BankStatementResponse"></a>
<a id="tocSbankstatementresponse"></a>
<a id="tocsbankstatementresponse"></a>

```json
{
  "statementLines": {
    "unreconciledAmountPos": 0,
    "unreconciledAmountNeg": 0,
    "unreconciledLines": 0,
    "avgDaysUnreconciledPos": 0,
    "avgDaysUnreconciledNeg": 0,
    "earliestUnreconciledTransaction": "1970-01-01",
    "latestUnreconciledTransaction": "1970-01-01",
    "deletedAmount": 0,
    "totalAmount": 0,
    "dataSource": {
      "directBankFeed": 0,
      "fileUpload": 0,
      "manual": 0,
      "directBankFeedPos": 0,
      "fileUploadPos": 0,
      "manualPos": 0,
      "directBankFeedNeg": 0,
      "fileUploadNeg": 0,
      "manualNeg": 0,
      "otherPos": 0,
      "otherNeg": 0,
      "other": 0
    },
    "earliestReconciledTransaction": "1970-01-01",
    "latestReconciledTransaction": "1970-01-01",
    "reconciledAmountPos": 0,
    "reconciledAmountNeg": 0,
    "reconciledLines": 0,
    "totalAmountPos": 0,
    "totalAmountNeg": 0
  },
  "currentStatement": {
    "startDate": "1970-01-01",
    "endDate": "1970-01-01",
    "startBalance": 0,
    "endBalance": 0,
    "importedDateTimeUtc": "1970-01-01T00:00:00Z",
    "importSourceType": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statementLines|[StatementLinesResponse](#schemastatementlinesresponse)|false|none|none|
|currentStatement|[CurrentStatementResponse](#schemacurrentstatementresponse)|false|none|none|

<h2 id="tocS_CashAccountResponse">CashAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemacashaccountresponse"></a>
<a id="schema_CashAccountResponse"></a>
<a id="tocScashaccountresponse"></a>
<a id="tocscashaccountresponse"></a>

```json
{
  "unreconciledAmountPos": 0,
  "unreconciledAmountNeg": 0,
  "startingBalance": 0,
  "accountBalance": 0,
  "balanceCurrency": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unreconciledAmountPos|number(double)|false|none|Total value of transactions in the journals which are not reconciled to bank statement lines, and have a positive (debit) value.|
|unreconciledAmountNeg|number(double)|false|none|Total value of transactions in the journals which are not reconciled to bank statement lines, and have a negative (credit) value.|
|startingBalance|number(double)|false|none|Starting (or historic) balance from the journals (manually keyed in by users on account creation - unverified).|
|accountBalance|number(double)|false|none|Current cash at bank accounting value from the journals.|
|balanceCurrency|string|false|none|Currency which the cashAccount transactions relate to.|

<h2 id="tocS_CashValidationResponse">CashValidationResponse</h2>
<!-- backwards compatibility -->
<a id="schemacashvalidationresponse"></a>
<a id="schema_CashValidationResponse"></a>
<a id="tocScashvalidationresponse"></a>
<a id="tocscashvalidationresponse"></a>

```json
{
  "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "statementBalance": {
    "value": 0,
    "type": "string"
  },
  "statementBalanceDate": "1970-01-01",
  "bankStatement": {
    "statementLines": {
      "unreconciledAmountPos": 0,
      "unreconciledAmountNeg": 0,
      "unreconciledLines": 0,
      "avgDaysUnreconciledPos": 0,
      "avgDaysUnreconciledNeg": 0,
      "earliestUnreconciledTransaction": "1970-01-01",
      "latestUnreconciledTransaction": "1970-01-01",
      "deletedAmount": 0,
      "totalAmount": 0,
      "dataSource": {
        "directBankFeed": 0,
        "fileUpload": 0,
        "manual": 0,
        "directBankFeedPos": 0,
        "fileUploadPos": 0,
        "manualPos": 0,
        "directBankFeedNeg": 0,
        "fileUploadNeg": 0,
        "manualNeg": 0,
        "otherPos": 0,
        "otherNeg": 0,
        "other": 0
      },
      "earliestReconciledTransaction": "1970-01-01",
      "latestReconciledTransaction": "1970-01-01",
      "reconciledAmountPos": 0,
      "reconciledAmountNeg": 0,
      "reconciledLines": 0,
      "totalAmountPos": 0,
      "totalAmountNeg": 0
    },
    "currentStatement": {
      "startDate": "1970-01-01",
      "endDate": "1970-01-01",
      "startBalance": 0,
      "endBalance": 0,
      "importedDateTimeUtc": "1970-01-01T00:00:00Z",
      "importSourceType": "string"
    }
  },
  "cashAccount": {
    "unreconciledAmountPos": 0,
    "unreconciledAmountNeg": 0,
    "startingBalance": 0,
    "accountBalance": 0,
    "balanceCurrency": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(uuid)|false|none|The Xero identifier for an account|
|statementBalance|[StatementBalanceResponse](#schemastatementbalanceresponse)|false|none|none|
|statementBalanceDate|string(date)|false|none|UTC Date when the last bank statement item was entered into Xero. This date is represented in ISO 8601 format.|
|bankStatement|[BankStatementResponse](#schemabankstatementresponse)|false|none|none|
|cashAccount|[CashAccountResponse](#schemacashaccountresponse)|false|none|none|

<h2 id="tocS_CurrentStatementResponse">CurrentStatementResponse</h2>
<!-- backwards compatibility -->
<a id="schemacurrentstatementresponse"></a>
<a id="schema_CurrentStatementResponse"></a>
<a id="tocScurrentstatementresponse"></a>
<a id="tocscurrentstatementresponse"></a>

```json
{
  "startDate": "1970-01-01",
  "endDate": "1970-01-01",
  "startBalance": 0,
  "endBalance": 0,
  "importedDateTimeUtc": "1970-01-01T00:00:00Z",
  "importSourceType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startDate|string(date)|false|none|Looking at the most recent bank statement, this field indicates the first date which transactions on this statement pertain to. This date is represented in ISO 8601 format.|
|endDate|string(date)|false|none|Looking at the most recent bank statement, this field indicates the last date which transactions on this statement pertain to. This date is represented in ISO 8601 format.|
|startBalance|number(double)|false|none|Looking at the most recent bank statement, this field indicates the balance before the transactions on the statement are applied (note, this is not always populated by the bank in every single instance (~10%)).|
|endBalance|number(double)|false|none|Looking at the most recent bank statement, this field indicates the balance after the transactions on the statement are applied (note, this is not always populated by the bank in every single instance (~10%)).|
|importedDateTimeUtc|string(date-time)|false|none|Looking at the most recent bank statement, this field indicates when the document was imported into Xero.  This date is represented in ISO 8601 format.|
|importSourceType|string|false|none|Looking at the most recent bank statement, this field indicates the source of the data (direct bank feed, file upload, or manual keying).|

<h2 id="tocS_DataSourceResponse">DataSourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceresponse"></a>
<a id="schema_DataSourceResponse"></a>
<a id="tocSdatasourceresponse"></a>
<a id="tocsdatasourceresponse"></a>

```json
{
  "directBankFeed": 0,
  "fileUpload": 0,
  "manual": 0,
  "directBankFeedPos": 0,
  "fileUploadPos": 0,
  "manualPos": 0,
  "directBankFeedNeg": 0,
  "fileUploadNeg": 0,
  "manualNeg": 0,
  "otherPos": 0,
  "otherNeg": 0,
  "other": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directBankFeed|number(double)|false|none|Sum of the amounts of all statement lines where the source of the data was a direct bank feed in to Xero via an API integration.   This could be from a bank or aggregator.   This gives an indication on the certainty of correctness of the data.|
|fileUpload|number(double)|false|none|Sum of the amounts of all statement lines where the source of the data was a file manually uploaded in to Xero.   This gives an indication on the certainty of correctness of the data.|
|manual|number(double)|false|none|Sum of the amounts of all statement lines where the source of the data was manually input in to Xero.   This gives an indication on the certainty of correctness of the data.|
|directBankFeedPos|number(double)|false|none|Sum of the amounts of all statement lines where the source of the data was a direct bank feed in to Xero via an API integration.   This could be from a bank or aggregator.  This gives an indication on the certainty of correctness of the data.  Only positive transactions are included.|
|fileUploadPos|number(double)|false|none|Sum of the amounts of all statement lines where the source of the data was a file manually uploaded in to Xero.   This gives an indication on the certainty of correctness of the data. Only positive transactions are included.|
|manualPos|number(double)|false|none|Sum of the amounts of all statement lines where the source of the data was manually input in to Xero.   This gives an indication on the certainty of correctness of the data. Only positive transactions are included.|
|directBankFeedNeg|number(double)|false|none|Sum of the amounts of all statement lines where the source of the data was a direct bank feed in to Xero via an API integration.   This could be from a bank or aggregator.   This gives an indication on the certainty of correctness of the data.  Only negative transactions are included.|
|fileUploadNeg|number(double)|false|none|Sum of the amounts of all statement lines where the source of the data was a file manually uploaded in to Xero.   This gives an indication on the certainty of correctness of the data.  Only negative transactions are included.|
|manualNeg|number(double)|false|none|Sum of the amounts of all statement lines where the source of the data was manually input in to Xero.   This gives an indication on the certainty of correctness of the data.  Only negative transactions are included.|
|otherPos|number(double)|false|none|Sum of the amounts of all statement lines where the source of the data was unknown.   This gives an indication on the certainty of correctness of the data.  Only positive transactions are included.|
|otherNeg|number(double)|false|none|Sum of the amounts of all statement lines where the source of the data was unknown.   This gives an indication on the certainty of correctness of the data.  Only negative transactions are included.|
|other|number(double)|false|none|Sum of the amounts of all statement lines where the source of the data was unknown.   This gives an indication on the certainty of correctness of the data.|

<h2 id="tocS_StatementBalanceResponse">StatementBalanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatementbalanceresponse"></a>
<a id="schema_StatementBalanceResponse"></a>
<a id="tocSstatementbalanceresponse"></a>
<a id="tocsstatementbalanceresponse"></a>

```json
{
  "value": 0,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|number(double)|false|none|Total closing balance of the account. This includes both reconciled and unreconciled bank statement lines. The closing balance will always be represented as a positive number, with it’s debit/credit status defined in the statementBalanceDebitCredit field.|
|type|string|false|none|The DEBIT or CREDIT status of the account. Cash accounts in credit have a negative balance.|

<h2 id="tocS_StatementLinesResponse">StatementLinesResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatementlinesresponse"></a>
<a id="schema_StatementLinesResponse"></a>
<a id="tocSstatementlinesresponse"></a>
<a id="tocsstatementlinesresponse"></a>

```json
{
  "unreconciledAmountPos": 0,
  "unreconciledAmountNeg": 0,
  "unreconciledLines": 0,
  "avgDaysUnreconciledPos": 0,
  "avgDaysUnreconciledNeg": 0,
  "earliestUnreconciledTransaction": "1970-01-01",
  "latestUnreconciledTransaction": "1970-01-01",
  "deletedAmount": 0,
  "totalAmount": 0,
  "dataSource": {
    "directBankFeed": 0,
    "fileUpload": 0,
    "manual": 0,
    "directBankFeedPos": 0,
    "fileUploadPos": 0,
    "manualPos": 0,
    "directBankFeedNeg": 0,
    "fileUploadNeg": 0,
    "manualNeg": 0,
    "otherPos": 0,
    "otherNeg": 0,
    "other": 0
  },
  "earliestReconciledTransaction": "1970-01-01",
  "latestReconciledTransaction": "1970-01-01",
  "reconciledAmountPos": 0,
  "reconciledAmountNeg": 0,
  "reconciledLines": 0,
  "totalAmountPos": 0,
  "totalAmountNeg": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unreconciledAmountPos|number(double)|false|none|Sum of the amounts of all statement lines where both the reconciled flag is set to FALSE, and the amount is positive.|
|unreconciledAmountNeg|number(double)|false|none|Sum of the amounts of all statement lines where both the reconciled flag is set to FALSE, and the amount is negative.|
|unreconciledLines|integer(int32)|false|none|Count of all statement lines where the reconciled flag is set to FALSE.|
|avgDaysUnreconciledPos|number(double)|false|none|Sum-product of age of statement line in days multiplied by transaction amount, divided by the sum of transaction amount - in for those statement lines in which the reconciled flag is set to FALSE, and the amount is positive. Provides an indication of the age of unreconciled transactions.|
|avgDaysUnreconciledNeg|number(double)|false|none|Sum-product of age of statement line in days multiplied by transaction amount, divided by the sum of transaction amount - in for those statement lines in which the reconciled flag is set to FALSE, and the amount is negative. Provides an indication of the age of unreconciled transactions.|
|earliestUnreconciledTransaction|string(date)|false|none|UTC Date which is the earliest transaction date of a statement line for which the reconciled flag is set to FALSE.  This date is represented in ISO 8601 format.|
|latestUnreconciledTransaction|string(date)|false|none|UTC Date which is the latest transaction date of a statement line for which the reconciled flag is set to FALSE.  This date is represented in ISO 8601 format.|
|deletedAmount|number(double)|false|none|Sum of the amounts of all deleted statement lines.  Transactions may be deleted due to duplication or otherwise.|
|totalAmount|number(double)|false|none|Sum of the amounts of all statement lines.  This is used as a metric of comparison to the unreconciled figures above.|
|dataSource|[DataSourceResponse](#schemadatasourceresponse)|false|none|none|
|earliestReconciledTransaction|string(date)|false|none|UTC Date which is the earliest transaction date of a statement line for which the reconciled flag is set to TRUE.  This date is represented in ISO 8601 format.|
|latestReconciledTransaction|string(date)|false|none|UTC Date which is the latest transaction date of a statement line for which the reconciled flag is set to TRUE.  This date is represented in ISO 8601 format.|
|reconciledAmountPos|number(double)|false|none|Sum of the amounts of all statement lines where both the reconciled flag is set to TRUE, and the amount is positive.|
|reconciledAmountNeg|number(double)|false|none|Sum of the amounts of all statement lines where both the reconciled flag is set to TRUE, and the amount is negative.|
|reconciledLines|integer(int32)|false|none|Count of all statement lines where the reconciled flag is set to TRUE|
|totalAmountPos|number(double)|false|none|Sum of the amounts of all statement lines where the amount is positive|
|totalAmountNeg|number(double)|false|none|Sum of the amounts of all statement lines where the amount is negative.|

<h2 id="tocS_BalanceSheetAccountDetail">BalanceSheetAccountDetail</h2>
<!-- backwards compatibility -->
<a id="schemabalancesheetaccountdetail"></a>
<a id="schema_BalanceSheetAccountDetail"></a>
<a id="tocSbalancesheetaccountdetail"></a>
<a id="tocsbalancesheetaccountdetail"></a>

```json
{
  "code": "string",
  "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "reportingCode": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Accounting code|
|accountID|string(uuid)|false|none|ID of the account|
|name|string|false|none|Account name|
|reportingCode|string|false|none|Reporting code|
|total|number(double)|false|none|Total movement on this account|

<h2 id="tocS_BalanceSheetAccountGroup">BalanceSheetAccountGroup</h2>
<!-- backwards compatibility -->
<a id="schemabalancesheetaccountgroup"></a>
<a id="schema_BalanceSheetAccountGroup"></a>
<a id="tocSbalancesheetaccountgroup"></a>
<a id="tocsbalancesheetaccountgroup"></a>

```json
{
  "accountTypes": [
    {
      "accountType": "string",
      "accounts": [
        {
          "code": "string",
          "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "reportingCode": "string",
          "total": 0
        }
      ],
      "total": 0
    }
  ],
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountTypes|[[BalanceSheetAccountType](#schemabalancesheetaccounttype)]|false|none|none|
|total|number(double)|false|none|Total value of all the accounts in this type|

<h2 id="tocS_BalanceSheetAccountType">BalanceSheetAccountType</h2>
<!-- backwards compatibility -->
<a id="schemabalancesheetaccounttype"></a>
<a id="schema_BalanceSheetAccountType"></a>
<a id="tocSbalancesheetaccounttype"></a>
<a id="tocsbalancesheetaccounttype"></a>

```json
{
  "accountType": "string",
  "accounts": [
    {
      "code": "string",
      "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "reportingCode": "string",
      "total": 0
    }
  ],
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountType|string|false|none|The type of the account. See <a href='https://developer.xero.com/documentation/api/types#AccountTypes'>Account Types</a>|
|accounts|[[BalanceSheetAccountDetail](#schemabalancesheetaccountdetail)]|false|none|A list of all accounts of this type. Refer to the Account section below for each account element detail.|
|total|number(double)|false|none|Total value of all the accounts in this type|

<h2 id="tocS_BalanceSheetResponse">BalanceSheetResponse</h2>
<!-- backwards compatibility -->
<a id="schemabalancesheetresponse"></a>
<a id="schema_BalanceSheetResponse"></a>
<a id="tocSbalancesheetresponse"></a>
<a id="tocsbalancesheetresponse"></a>

```json
{
  "balanceDate": "1970-01-01",
  "asset": {
    "accountTypes": [
      {
        "accountType": "string",
        "accounts": [
          {
            "code": "string",
            "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "string",
            "reportingCode": "string",
            "total": 0
          }
        ],
        "total": 0
      }
    ],
    "total": 0
  },
  "liability": {
    "accountTypes": [
      {
        "accountType": "string",
        "accounts": [
          {
            "code": "string",
            "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "string",
            "reportingCode": "string",
            "total": 0
          }
        ],
        "total": 0
      }
    ],
    "total": 0
  },
  "equity": {
    "accountTypes": [
      {
        "accountType": "string",
        "accounts": [
          {
            "code": "string",
            "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "string",
            "reportingCode": "string",
            "total": 0
          }
        ],
        "total": 0
      }
    ],
    "total": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balanceDate|string(date)|false|none|Balance date of the report|
|asset|[BalanceSheetAccountGroup](#schemabalancesheetaccountgroup)|false|none|none|
|liability|[BalanceSheetAccountGroup](#schemabalancesheetaccountgroup)|false|none|none|
|equity|[BalanceSheetAccountGroup](#schemabalancesheetaccountgroup)|false|none|none|

<h2 id="tocS_CashBalance">CashBalance</h2>
<!-- backwards compatibility -->
<a id="schemacashbalance"></a>
<a id="schema_CashBalance"></a>
<a id="tocScashbalance"></a>
<a id="tocscashbalance"></a>

```json
{
  "openingCashBalance": 0,
  "closingCashBalance": 0,
  "netCashMovement": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|openingCashBalance|number(double)|false|none|Opening balance of cash and cash equivalents|
|closingCashBalance|number(double)|false|none|Closing balance of cash and cash equivalents|
|netCashMovement|number(double)|false|read-only|Net movement of cash and cash equivalents for the period|

<h2 id="tocS_CashflowAccount">CashflowAccount</h2>
<!-- backwards compatibility -->
<a id="schemacashflowaccount"></a>
<a id="schema_CashflowAccount"></a>
<a id="tocScashflowaccount"></a>
<a id="tocscashflowaccount"></a>

```json
{
  "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "accountType": "string",
  "accountClass": "string",
  "code": "string",
  "name": "string",
  "reportingCode": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(uuid)|false|none|ID of the account|
|accountType|string|false|none|The type of the account. See <a href='https://developer.xero.com/documentation/api/types#AccountTypes'>Account Types</a>|
|accountClass|string|false|none|The class of the account. See <a href='https://developer.xero.com/documentation/api/types#AccountClassTypes'>Account Class Types</a>|
|code|string|false|none|Account code|
|name|string|false|none|Account name|
|reportingCode|string|false|none|Reporting code used for cash flow classification|
|total|number(double)|false|none|Total amount for the account|

<h2 id="tocS_CashflowActivity">CashflowActivity</h2>
<!-- backwards compatibility -->
<a id="schemacashflowactivity"></a>
<a id="schema_CashflowActivity"></a>
<a id="tocScashflowactivity"></a>
<a id="tocscashflowactivity"></a>

```json
{
  "name": "string",
  "total": 0,
  "cashflowTypes": [
    {
      "name": "string",
      "total": 0,
      "accounts": [
        {
          "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "accountType": "string",
          "accountClass": "string",
          "code": "string",
          "name": "string",
          "reportingCode": "string",
          "total": 0
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the cashflow activity type. It will be either Operating Activities, Investing Activities or Financing Activities|
|total|number(double)|false|none|Total value of the activity type|
|cashflowTypes|[[CashflowType](#schemacashflowtype)]|false|none|none|

<h2 id="tocS_CashflowResponse">CashflowResponse</h2>
<!-- backwards compatibility -->
<a id="schemacashflowresponse"></a>
<a id="schema_CashflowResponse"></a>
<a id="tocScashflowresponse"></a>
<a id="tocscashflowresponse"></a>

```json
{
  "startDate": "1970-01-01",
  "endDate": "1970-01-01",
  "cashBalance": {
    "openingCashBalance": 0,
    "closingCashBalance": 0,
    "netCashMovement": 0
  },
  "cashflowActivities": [
    {
      "name": "string",
      "total": 0,
      "cashflowTypes": [
        {
          "name": "string",
          "total": 0,
          "accounts": [
            {
              "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "accountType": "string",
              "accountClass": "string",
              "code": "string",
              "name": "string",
              "reportingCode": "string",
              "total": 0
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
|startDate|string(date)|false|none|Start date of the report|
|endDate|string(date)|false|none|End date of the report|
|cashBalance|[CashBalance](#schemacashbalance)|false|none|none|
|cashflowActivities|[[CashflowActivity](#schemacashflowactivity)]|false|none|Break down of cash and cash equivalents for the period|

<h2 id="tocS_CashflowType">CashflowType</h2>
<!-- backwards compatibility -->
<a id="schemacashflowtype"></a>
<a id="schema_CashflowType"></a>
<a id="tocScashflowtype"></a>
<a id="tocscashflowtype"></a>

```json
{
  "name": "string",
  "total": 0,
  "accounts": [
    {
      "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "accountType": "string",
      "accountClass": "string",
      "code": "string",
      "name": "string",
      "reportingCode": "string",
      "total": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the activity|
|total|number(double)|false|none|Total value of the activity|
|accounts|[[CashflowAccount](#schemacashflowaccount)]|false|none|List of the accounts in this activity|

<h2 id="tocS_PnlAccount">PnlAccount</h2>
<!-- backwards compatibility -->
<a id="schemapnlaccount"></a>
<a id="schema_PnlAccount"></a>
<a id="tocSpnlaccount"></a>
<a id="tocspnlaccount"></a>

```json
{
  "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "accountType": "string",
  "code": "string",
  "name": "string",
  "reportingCode": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountID|string(uuid)|false|none|ID of the account|
|accountType|string|false|none|The type of the account. See <a href='https://developer.xero.com/documentation/api/types#AccountTypes'>Account Types</a>|
|code|string|false|none|Account code|
|name|string|false|none|Account name|
|reportingCode|string|false|none|Reporting code (Shown if set)|
|total|number(double)|false|none|Total movement on this account|

<h2 id="tocS_PnlAccountClass">PnlAccountClass</h2>
<!-- backwards compatibility -->
<a id="schemapnlaccountclass"></a>
<a id="schema_PnlAccountClass"></a>
<a id="tocSpnlaccountclass"></a>
<a id="tocspnlaccountclass"></a>

```json
{
  "total": 0,
  "accountTypes": [
    {
      "total": 0,
      "title": "string",
      "accounts": [
        {
          "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "accountType": "string",
          "code": "string",
          "name": "string",
          "reportingCode": "string",
          "total": 0
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number(double)|false|none|Total revenue/expense value|
|accountTypes|[[PnlAccountType](#schemapnlaccounttype)]|false|none|Contains trading income and other income for revenue section / operating expenses and direct cost for expense section if the data is available for each section. Refer to the account type element below|

<h2 id="tocS_PnlAccountType">PnlAccountType</h2>
<!-- backwards compatibility -->
<a id="schemapnlaccounttype"></a>
<a id="schema_PnlAccountType"></a>
<a id="tocSpnlaccounttype"></a>
<a id="tocspnlaccounttype"></a>

```json
{
  "total": 0,
  "title": "string",
  "accounts": [
    {
      "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "accountType": "string",
      "code": "string",
      "name": "string",
      "reportingCode": "string",
      "total": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number(double)|false|none|Total movement on this account type|
|title|string|false|none|Name of this account type, it will be either Trading Income or Other Income for Revenue section / Direct Cost or Operating Expenses for Expense section|
|accounts|[[PnlAccount](#schemapnlaccount)]|false|none|A list of the movement on each account detail during the query period. Refer to the account detail element below|

<h2 id="tocS_ProfitAndLossResponse">ProfitAndLossResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprofitandlossresponse"></a>
<a id="schema_ProfitAndLossResponse"></a>
<a id="tocSprofitandlossresponse"></a>
<a id="tocsprofitandlossresponse"></a>

```json
{
  "startDate": "1970-01-01",
  "endDate": "1970-01-01",
  "netProfitLoss": 0,
  "revenue": {
    "total": 0,
    "accountTypes": [
      {
        "total": 0,
        "title": "string",
        "accounts": [
          {
            "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "accountType": "string",
            "code": "string",
            "name": "string",
            "reportingCode": "string",
            "total": 0
          }
        ]
      }
    ]
  },
  "expense": {
    "total": 0,
    "accountTypes": [
      {
        "total": 0,
        "title": "string",
        "accounts": [
          {
            "accountID": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "accountType": "string",
            "code": "string",
            "name": "string",
            "reportingCode": "string",
            "total": 0
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
|startDate|string(date)|false|none|Start date of the report|
|endDate|string(date)|false|none|End date of the report|
|netProfitLoss|number(double)|false|none|Net profit loss value|
|revenue|[PnlAccountClass](#schemapnlaccountclass)|false|none|none|
|expense|[PnlAccountClass](#schemapnlaccountclass)|false|none|none|

<h2 id="tocS_TrialBalanceAccount">TrialBalanceAccount</h2>
<!-- backwards compatibility -->
<a id="schematrialbalanceaccount"></a>
<a id="schema_TrialBalanceAccount"></a>
<a id="tocStrialbalanceaccount"></a>
<a id="tocstrialbalanceaccount"></a>

```json
{
  "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "accountType": "string",
  "accountCode": "string",
  "accountClass": "string",
  "status": "string",
  "reportingCode": "string",
  "accountName": "string",
  "balance": {
    "value": 0,
    "entryType": "string"
  },
  "signedBalance": 0,
  "accountMovement": {
    "debits": 0,
    "credits": 0,
    "movement": {
      "value": 0,
      "entryType": "string"
    },
    "signedMovement": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(uuid)|false|none|ID of the account|
|accountType|string|false|none|The type of the account. See <a href='https://developer.xero.com/documentation/api/types#AccountTypes'>Account Types</a>|
|accountCode|string|false|none|Customer defined alpha numeric account code e.g 200 or SALES|
|accountClass|string|false|none|The class of the account. See <a href='https://developer.xero.com/documentation/api/types#AccountClassTypes'>Account Class Types</a>|
|status|string|false|none|Accounts with a status of ACTIVE can be updated to ARCHIVED. See <a href='https://developer.xero.com/documentation/api/types#AccountStatusCodes'>Account Status Codes</a>|
|reportingCode|string|false|none|Reporting code (Shown if set)|
|accountName|string|false|none|Name of the account|
|balance|[TrialBalanceEntry](#schematrialbalanceentry)|false|none|none|
|signedBalance|number(double)|false|none|Value of balance. Expense and Asset accounts code debits as positive. Revenue, Liability, and Equity accounts code debits as negative|
|accountMovement|[TrialBalanceMovement](#schematrialbalancemovement)|false|none|none|

<h2 id="tocS_TrialBalanceEntry">TrialBalanceEntry</h2>
<!-- backwards compatibility -->
<a id="schematrialbalanceentry"></a>
<a id="schema_TrialBalanceEntry"></a>
<a id="tocStrialbalanceentry"></a>
<a id="tocstrialbalanceentry"></a>

```json
{
  "value": 0,
  "entryType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|number(double)|false|none|Net movement or net balance in the account|
|entryType|string|false|none|Sign (Debit/Credit) of the movement of balance in the account|

<h2 id="tocS_TrialBalanceMovement">TrialBalanceMovement</h2>
<!-- backwards compatibility -->
<a id="schematrialbalancemovement"></a>
<a id="schema_TrialBalanceMovement"></a>
<a id="tocStrialbalancemovement"></a>
<a id="tocstrialbalancemovement"></a>

```json
{
  "debits": 0,
  "credits": 0,
  "movement": {
    "value": 0,
    "entryType": "string"
  },
  "signedMovement": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debits|number(double)|false|none|Debit amount|
|credits|number(double)|false|none|Credit amount|
|movement|[TrialBalanceEntry](#schematrialbalanceentry)|false|none|none|
|signedMovement|number(double)|false|none|Value of movement. Expense and Asset accounts code debits as positive. Revenue, Liability, and Equity accounts code debits as negative|

<h2 id="tocS_TrialBalanceResponse">TrialBalanceResponse</h2>
<!-- backwards compatibility -->
<a id="schematrialbalanceresponse"></a>
<a id="schema_TrialBalanceResponse"></a>
<a id="tocStrialbalanceresponse"></a>
<a id="tocstrialbalanceresponse"></a>

```json
{
  "startDate": "1970-01-01",
  "endDate": "1970-01-01",
  "accounts": [
    {
      "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "accountType": "string",
      "accountCode": "string",
      "accountClass": "string",
      "status": "string",
      "reportingCode": "string",
      "accountName": "string",
      "balance": {
        "value": 0,
        "entryType": "string"
      },
      "signedBalance": 0,
      "accountMovement": {
        "debits": 0,
        "credits": 0,
        "movement": {
          "value": 0,
          "entryType": "string"
        },
        "signedMovement": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startDate|string(date)|false|none|Start date of the report|
|endDate|string(date)|false|none|End date of the report|
|accounts|[[TrialBalanceAccount](#schematrialbalanceaccount)]|false|none|Refer to the accounts section below|

<h2 id="tocS_IncomeByContactResponse">IncomeByContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemaincomebycontactresponse"></a>
<a id="schema_IncomeByContactResponse"></a>
<a id="tocSincomebycontactresponse"></a>
<a id="tocsincomebycontactresponse"></a>

```json
{
  "startDate": "1970-01-01",
  "endDate": "1970-01-01",
  "total": 0,
  "totalDetail": {
    "totalPaid": 0,
    "totalOutstanding": 0,
    "totalCreditedUnApplied": 0
  },
  "totalOther": {
    "totalOutstandingAged": 0,
    "totalVoided": 0,
    "totalCredited": 0
  },
  "contacts": [
    {
      "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "total": 0,
      "totalDetail": {
        "totalPaid": 0,
        "totalOutstanding": 0,
        "totalCreditedUnApplied": 0
      },
      "totalOther": {
        "totalOutstandingAged": 0,
        "totalVoided": 0,
        "totalCredited": 0,
        "transactionCount": 0
      },
      "accountCodes": [
        "string"
      ]
    }
  ],
  "manualJournals": {
    "total": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startDate|string(date)|false|none|Start date of the report|
|endDate|string(date)|false|none|End date of the report|
|total|number(double)|false|none|Total value|
|totalDetail|[TotalDetail](#schematotaldetail)|false|none|none|
|totalOther|[TotalOther](#schematotalother)|false|none|none|
|contacts|[[ContactDetail](#schemacontactdetail)]|false|none|none|
|manualJournals|[ManualJournalTotal](#schemamanualjournaltotal)|false|none|none|

<h2 id="tocS_ManualJournalTotal">ManualJournalTotal</h2>
<!-- backwards compatibility -->
<a id="schemamanualjournaltotal"></a>
<a id="schema_ManualJournalTotal"></a>
<a id="tocSmanualjournaltotal"></a>
<a id="tocsmanualjournaltotal"></a>

```json
{
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|number(double)|false|none|Total value of manual journals.|

<h2 id="tocS_TotalDetail">TotalDetail</h2>
<!-- backwards compatibility -->
<a id="schematotaldetail"></a>
<a id="schema_TotalDetail"></a>
<a id="tocStotaldetail"></a>
<a id="tocstotaldetail"></a>

```json
{
  "totalPaid": 0,
  "totalOutstanding": 0,
  "totalCreditedUnApplied": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalPaid|number(double)|false|none|Total paid invoice and cash value within the period.|
|totalOutstanding|number(double)|false|none|Total outstanding invoice value within the period.|
|totalCreditedUnApplied|number(double)|false|none|Total unapplied credited value within the period.|

<h2 id="tocS_TotalOther">TotalOther</h2>
<!-- backwards compatibility -->
<a id="schematotalother"></a>
<a id="schema_TotalOther"></a>
<a id="tocStotalother"></a>
<a id="tocstotalother"></a>

```json
{
  "totalOutstandingAged": 0,
  "totalVoided": 0,
  "totalCredited": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalOutstandingAged|number(double)|false|none|Total outstanding invoice value within the period where the invoices are more than 90 days old|
|totalVoided|number(double)|false|none|Total voided value.|
|totalCredited|number(double)|false|none|Total credited value.|

<h2 id="tocS_ContactDetail">ContactDetail</h2>
<!-- backwards compatibility -->
<a id="schemacontactdetail"></a>
<a id="schema_ContactDetail"></a>
<a id="tocScontactdetail"></a>
<a id="tocscontactdetail"></a>

```json
{
  "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "total": 0,
  "totalDetail": {
    "totalPaid": 0,
    "totalOutstanding": 0,
    "totalCreditedUnApplied": 0
  },
  "totalOther": {
    "totalOutstandingAged": 0,
    "totalVoided": 0,
    "totalCredited": 0,
    "transactionCount": 0
  },
  "accountCodes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactId|string(uuid)|false|none|ID of the contact associated with the transactions.<br><br>Transactions with no contact will be grouped under the special ID: 86793108-198C-46D8-90A3-43C1D12686CE.<br><br>Transactions that are receive or spend bank transfers will be grouped under the special ID: 207322B3-6A58-4BE7-80F1-430123914AD6|
|name|string|false|none|Name of the contact associated with the transactions.<br><br>If no contact is associated with the transactions this will appear as “None Provided”,<br><br>For receive or spend bank transfer transactions, this will appear as “Bank Transfer”.|
|total|number(double)|false|none|Total value for the contact|
|totalDetail|[ContactTotalDetail](#schemacontacttotaldetail)|false|none|none|
|totalOther|[ContactTotalOther](#schemacontacttotalother)|false|none|none|
|accountCodes|[string]|false|none|A list of account codes involved in transactions.|

<h2 id="tocS_ContactTotalDetail">ContactTotalDetail</h2>
<!-- backwards compatibility -->
<a id="schemacontacttotaldetail"></a>
<a id="schema_ContactTotalDetail"></a>
<a id="tocScontacttotaldetail"></a>
<a id="tocscontacttotaldetail"></a>

```json
{
  "totalPaid": 0,
  "totalOutstanding": 0,
  "totalCreditedUnApplied": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalPaid|number(double)|false|none|Total paid invoice and cash value for the contact within the period.|
|totalOutstanding|number(double)|false|none|Total outstanding invoice value for the contact within the period.|
|totalCreditedUnApplied|number(double)|false|none|Total unapplied credited value for the contact within the period.|

<h2 id="tocS_ContactTotalOther">ContactTotalOther</h2>
<!-- backwards compatibility -->
<a id="schemacontacttotalother"></a>
<a id="schema_ContactTotalOther"></a>
<a id="tocScontacttotalother"></a>
<a id="tocscontacttotalother"></a>

```json
{
  "totalOutstandingAged": 0,
  "totalVoided": 0,
  "totalCredited": 0,
  "transactionCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalOutstandingAged|number(double)|false|none|Total outstanding invoice value for the contact within the period where the invoices are more than 90 days old|
|totalVoided|number(double)|false|none|Total voided value for the contact.|
|totalCredited|number(double)|false|none|Total credited value for the contact.|
|transactionCount|integer(int32)|false|none|Number of transactions for the contact.|

<h2 id="tocS_BankStatementAccountingResponse">BankStatementAccountingResponse</h2>
<!-- backwards compatibility -->
<a id="schemabankstatementaccountingresponse"></a>
<a id="schema_BankStatementAccountingResponse"></a>
<a id="tocSbankstatementaccountingresponse"></a>
<a id="tocsbankstatementaccountingresponse"></a>

```json
{
  "bankAccountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "bankAccountName": "string",
  "bankAccountCurrencyCode": "string",
  "statements": [
    {
      "statementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "startDate": "1970-01-01",
      "endDate": "1970-01-01",
      "importedDateTimeUtc": "1970-01-01T00:00:00Z",
      "importSource": "string",
      "startBalance": 0,
      "endBalance": 0,
      "indicativeStartBalance": 0,
      "indicativeEndBalance": 0,
      "statementLines": [
        {
          "statementLineId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "postedDate": "1970-01-01",
          "payee": "string",
          "reference": "string",
          "notes": "string",
          "chequeNo": "string",
          "amount": 0,
          "transactionDate": "1970-01-01",
          "type": "string",
          "isReconciled": true,
          "isDuplicate": true,
          "isDeleted": true,
          "payments": [
            {
              "paymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "batchPaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "date": "1970-01-01",
              "amount": 0,
              "bankAmount": 0,
              "currencyRate": 0,
              "invoice": {
                "invoiceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "contact": {
                  "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "contactName": "string"
                },
                "total": 0,
                "lineItems": [
                  {
                    "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "reportingCode": "string",
                    "lineAmount": 0,
                    "accountType": "string"
                  }
                ]
              },
              "creditNote": {
                "creditNoteId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "contact": {
                  "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "contactName": "string"
                },
                "total": 0,
                "lineItems": [
                  {
                    "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "reportingCode": "string",
                    "lineAmount": 0,
                    "accountType": "string"
                  }
                ]
              },
              "prepayment": {
                "prepaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "contact": {
                  "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "contactName": "string"
                },
                "total": 0,
                "lineItems": [
                  {
                    "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "reportingCode": "string",
                    "lineAmount": 0,
                    "accountType": "string"
                  }
                ]
              },
              "overpayment": {
                "overpaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "contact": {
                  "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "contactName": "string"
                },
                "total": 0,
                "lineItems": [
                  {
                    "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "reportingCode": "string",
                    "lineAmount": 0,
                    "accountType": "string"
                  }
                ]
              }
            }
          ],
          "bankTransactions": [
            {
              "bankTransactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "batchPaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "contact": {
                "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "contactName": "string"
              },
              "date": "1970-01-01",
              "amount": 0,
              "lineItems": [
                {
                  "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                  "reportingCode": "string",
                  "lineAmount": 0,
                  "accountType": "string"
                }
              ]
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
|bankAccountId|string(uuid)|false|none|Xero Identifier of bank account|
|bankAccountName|string|false|none|Name of bank account|
|bankAccountCurrencyCode|string|false|none|Currency code of the bank account|
|statements|[[StatementResponse](#schemastatementresponse)]|false|none|List of bank statements and linked accounting data for the requested period|

<h2 id="tocS_BankTransactionResponse">BankTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemabanktransactionresponse"></a>
<a id="schema_BankTransactionResponse"></a>
<a id="tocSbanktransactionresponse"></a>
<a id="tocsbanktransactionresponse"></a>

```json
{
  "bankTransactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "batchPaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "contact": {
    "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "contactName": "string"
  },
  "date": "1970-01-01",
  "amount": 0,
  "lineItems": [
    {
      "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reportingCode": "string",
      "lineAmount": 0,
      "accountType": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankTransactionId|string(uuid)|false|none|Xero Identifier of transaction|
|batchPaymentId|string(uuid)|false|none|Xero Identifier of batch payment. Present if the transaction is part of a batch.|
|contact|[ContactResponse](#schemacontactresponse)|false|none|none|
|date|string(date)|false|none|Date of transaction - YYYY-MM-DD|
|amount|number(double)|false|none|Amount of transaction|
|lineItems|[[LineItemResponse](#schemalineitemresponse)]|false|none|The LineItems element can contain any number of individual LineItem sub-elements. Not included in summary mode|

<h2 id="tocS_ContactResponse">ContactResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontactresponse"></a>
<a id="schema_ContactResponse"></a>
<a id="tocScontactresponse"></a>
<a id="tocscontactresponse"></a>

```json
{
  "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "contactName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactId|string(uuid)|false|none|Xero Identifier of contact|
|contactName|string|false|none|Full name of contact/organisation|

<h2 id="tocS_CreditNoteResponse">CreditNoteResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreditnoteresponse"></a>
<a id="schema_CreditNoteResponse"></a>
<a id="tocScreditnoteresponse"></a>
<a id="tocscreditnoteresponse"></a>

```json
{
  "creditNoteId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "contact": {
    "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "contactName": "string"
  },
  "total": 0,
  "lineItems": [
    {
      "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reportingCode": "string",
      "lineAmount": 0,
      "accountType": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creditNoteId|string(uuid)|false|none|Xero Identifier of credit note|
|contact|[ContactResponse](#schemacontactresponse)|false|none|none|
|total|number(double)|false|none|Total of Invoice tax inclusive (i.e. SubTotal + TotalTax); Not included in summary mode|
|lineItems|[[LineItemResponse](#schemalineitemresponse)]|false|none|Not included in summary mode|

<h2 id="tocS_InvoiceResponse">InvoiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceresponse"></a>
<a id="schema_InvoiceResponse"></a>
<a id="tocSinvoiceresponse"></a>
<a id="tocsinvoiceresponse"></a>

```json
{
  "invoiceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "contact": {
    "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "contactName": "string"
  },
  "total": 0,
  "lineItems": [
    {
      "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reportingCode": "string",
      "lineAmount": 0,
      "accountType": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoiceId|string(uuid)|false|none|Xero Identifier of invoice|
|contact|[ContactResponse](#schemacontactresponse)|false|none|none|
|total|number(double)|false|none|Total of Invoice tax inclusive (i.e. SubTotal + TotalTax); Not included in summary mode|
|lineItems|[[LineItemResponse](#schemalineitemresponse)]|false|none|Not included in summary mode|

<h2 id="tocS_LineItemResponse">LineItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemalineitemresponse"></a>
<a id="schema_LineItemResponse"></a>
<a id="tocSlineitemresponse"></a>
<a id="tocslineitemresponse"></a>

```json
{
  "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "reportingCode": "string",
  "lineAmount": 0,
  "accountType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(uuid)|false|none|Xero Identifier of account|
|reportingCode|string|false|none|Shown if set|
|lineAmount|number(double)|false|none|Amount of line item|
|accountType|string|false|none|Account type|

<h2 id="tocS_OverpaymentResponse">OverpaymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoverpaymentresponse"></a>
<a id="schema_OverpaymentResponse"></a>
<a id="tocSoverpaymentresponse"></a>
<a id="tocsoverpaymentresponse"></a>

```json
{
  "overpaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "contact": {
    "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "contactName": "string"
  },
  "total": 0,
  "lineItems": [
    {
      "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reportingCode": "string",
      "lineAmount": 0,
      "accountType": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|overpaymentId|string(uuid)|false|none|Xero Identifier of overpayment|
|contact|[ContactResponse](#schemacontactresponse)|false|none|none|
|total|number(double)|false|none|Total of Invoice tax inclusive (i.e. SubTotal + TotalTax); Not included in summary mode|
|lineItems|[[LineItemResponse](#schemalineitemresponse)]|false|none|Not included in summary mode|

<h2 id="tocS_PaymentResponse">PaymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentresponse"></a>
<a id="schema_PaymentResponse"></a>
<a id="tocSpaymentresponse"></a>
<a id="tocspaymentresponse"></a>

```json
{
  "paymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "batchPaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "date": "1970-01-01",
  "amount": 0,
  "bankAmount": 0,
  "currencyRate": 0,
  "invoice": {
    "invoiceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "contact": {
      "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "contactName": "string"
    },
    "total": 0,
    "lineItems": [
      {
        "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "reportingCode": "string",
        "lineAmount": 0,
        "accountType": "string"
      }
    ]
  },
  "creditNote": {
    "creditNoteId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "contact": {
      "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "contactName": "string"
    },
    "total": 0,
    "lineItems": [
      {
        "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "reportingCode": "string",
        "lineAmount": 0,
        "accountType": "string"
      }
    ]
  },
  "prepayment": {
    "prepaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "contact": {
      "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "contactName": "string"
    },
    "total": 0,
    "lineItems": [
      {
        "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "reportingCode": "string",
        "lineAmount": 0,
        "accountType": "string"
      }
    ]
  },
  "overpayment": {
    "overpaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "contact": {
      "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "contactName": "string"
    },
    "total": 0,
    "lineItems": [
      {
        "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "reportingCode": "string",
        "lineAmount": 0,
        "accountType": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentId|string(uuid)|false|none|Xero Identifier of payment|
|batchPaymentId|string(uuid)|false|none|Xero Identifier of batch payment. Present if the payment was created as part of a batch.|
|date|string(date)|false|none|Date the payment is being made (YYYY-MM-DD) e.g. 2009-09-06|
|amount|number(double)|false|none|The amount of the payment|
|bankAmount|number(double)|false|none|The bank amount of the payment|
|currencyRate|number(double)|false|none|Exchange rate when payment is received. Only used for non base currency invoices and credit notes e.g. 0.7500|
|invoice|[InvoiceResponse](#schemainvoiceresponse)|false|none|none|
|creditNote|[CreditNoteResponse](#schemacreditnoteresponse)|false|none|none|
|prepayment|[PrepaymentResponse](#schemaprepaymentresponse)|false|none|none|
|overpayment|[OverpaymentResponse](#schemaoverpaymentresponse)|false|none|none|

<h2 id="tocS_PrepaymentResponse">PrepaymentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprepaymentresponse"></a>
<a id="schema_PrepaymentResponse"></a>
<a id="tocSprepaymentresponse"></a>
<a id="tocsprepaymentresponse"></a>

```json
{
  "prepaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "contact": {
    "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "contactName": "string"
  },
  "total": 0,
  "lineItems": [
    {
      "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "reportingCode": "string",
      "lineAmount": 0,
      "accountType": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prepaymentId|string(uuid)|false|none|Xero Identifier of prepayment|
|contact|[ContactResponse](#schemacontactresponse)|false|none|none|
|total|number(double)|false|none|Total of Invoice tax inclusive (i.e. SubTotal + TotalTax); Not included in summary mode|
|lineItems|[[LineItemResponse](#schemalineitemresponse)]|false|none|Not included in summary mode|

<h2 id="tocS_StatementLineResponse">StatementLineResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatementlineresponse"></a>
<a id="schema_StatementLineResponse"></a>
<a id="tocSstatementlineresponse"></a>
<a id="tocsstatementlineresponse"></a>

```json
{
  "statementLineId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "postedDate": "1970-01-01",
  "payee": "string",
  "reference": "string",
  "notes": "string",
  "chequeNo": "string",
  "amount": 0,
  "transactionDate": "1970-01-01",
  "type": "string",
  "isReconciled": true,
  "isDuplicate": true,
  "isDeleted": true,
  "payments": [
    {
      "paymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "batchPaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "date": "1970-01-01",
      "amount": 0,
      "bankAmount": 0,
      "currencyRate": 0,
      "invoice": {
        "invoiceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "contact": {
          "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "contactName": "string"
        },
        "total": 0,
        "lineItems": [
          {
            "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "reportingCode": "string",
            "lineAmount": 0,
            "accountType": "string"
          }
        ]
      },
      "creditNote": {
        "creditNoteId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "contact": {
          "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "contactName": "string"
        },
        "total": 0,
        "lineItems": [
          {
            "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "reportingCode": "string",
            "lineAmount": 0,
            "accountType": "string"
          }
        ]
      },
      "prepayment": {
        "prepaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "contact": {
          "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "contactName": "string"
        },
        "total": 0,
        "lineItems": [
          {
            "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "reportingCode": "string",
            "lineAmount": 0,
            "accountType": "string"
          }
        ]
      },
      "overpayment": {
        "overpaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "contact": {
          "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "contactName": "string"
        },
        "total": 0,
        "lineItems": [
          {
            "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "reportingCode": "string",
            "lineAmount": 0,
            "accountType": "string"
          }
        ]
      }
    }
  ],
  "bankTransactions": [
    {
      "bankTransactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "batchPaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "contact": {
        "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "contactName": "string"
      },
      "date": "1970-01-01",
      "amount": 0,
      "lineItems": [
        {
          "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "reportingCode": "string",
          "lineAmount": 0,
          "accountType": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statementLineId|string(uuid)|false|none|Xero Identifier of statement line|
|postedDate|string(date)|false|none|Date of when statement line was posted|
|payee|string|false|none|Payee description of statement line|
|reference|string|false|none|Reference description of statement line|
|notes|string|false|none|Notes description of statement line|
|chequeNo|string|false|none|Cheque number of statement line|
|amount|number(double)|false|none|Amount of statement line|
|transactionDate|string(date)|false|none|Transaction date of statement line|
|type|string|false|none|Type of statement line|
|isReconciled|boolean|false|none|Boolean to show if statement line is reconciled|
|isDuplicate|boolean|false|none|Boolean to show if statement line is duplicate|
|isDeleted|boolean|false|none|Boolean to show if statement line is deleted|
|payments|[[PaymentResponse](#schemapaymentresponse)]|false|none|List of payments associated with reconciled statement lines|
|bankTransactions|[[BankTransactionResponse](#schemabanktransactionresponse)]|false|none|List of bank transactions associated with reconciled statement lines|

<h2 id="tocS_StatementResponse">StatementResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatementresponse"></a>
<a id="schema_StatementResponse"></a>
<a id="tocSstatementresponse"></a>
<a id="tocsstatementresponse"></a>

```json
{
  "statementId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "startDate": "1970-01-01",
  "endDate": "1970-01-01",
  "importedDateTimeUtc": "1970-01-01T00:00:00Z",
  "importSource": "string",
  "startBalance": 0,
  "endBalance": 0,
  "indicativeStartBalance": 0,
  "indicativeEndBalance": 0,
  "statementLines": [
    {
      "statementLineId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "postedDate": "1970-01-01",
      "payee": "string",
      "reference": "string",
      "notes": "string",
      "chequeNo": "string",
      "amount": 0,
      "transactionDate": "1970-01-01",
      "type": "string",
      "isReconciled": true,
      "isDuplicate": true,
      "isDeleted": true,
      "payments": [
        {
          "paymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "batchPaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "date": "1970-01-01",
          "amount": 0,
          "bankAmount": 0,
          "currencyRate": 0,
          "invoice": {
            "invoiceId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "contact": {
              "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "contactName": "string"
            },
            "total": 0,
            "lineItems": [
              {
                "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "reportingCode": "string",
                "lineAmount": 0,
                "accountType": "string"
              }
            ]
          },
          "creditNote": {
            "creditNoteId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "contact": {
              "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "contactName": "string"
            },
            "total": 0,
            "lineItems": [
              {
                "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "reportingCode": "string",
                "lineAmount": 0,
                "accountType": "string"
              }
            ]
          },
          "prepayment": {
            "prepaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "contact": {
              "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "contactName": "string"
            },
            "total": 0,
            "lineItems": [
              {
                "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "reportingCode": "string",
                "lineAmount": 0,
                "accountType": "string"
              }
            ]
          },
          "overpayment": {
            "overpaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "contact": {
              "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "contactName": "string"
            },
            "total": 0,
            "lineItems": [
              {
                "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                "reportingCode": "string",
                "lineAmount": 0,
                "accountType": "string"
              }
            ]
          }
        }
      ],
      "bankTransactions": [
        {
          "bankTransactionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "batchPaymentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "contact": {
            "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "contactName": "string"
          },
          "date": "1970-01-01",
          "amount": 0,
          "lineItems": [
            {
              "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "reportingCode": "string",
              "lineAmount": 0,
              "accountType": "string"
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
|statementId|string(uuid)|false|none|Xero Identifier of statement|
|startDate|string(date)|false|none|Start date of statement|
|endDate|string(date)|false|none|End date of statement|
|importedDateTimeUtc|string(date-time)|false|none|Utc date time of when the statement was imported in Xero|
|importSource|string|false|none|Identifies where the statement data in Xero was sourced, 1) direct bank feed, automatically loaded from the bank (eg STMTIMPORTSRC/CBAFEED); 2) indirect bank feed, automatically loaded from a 3rd party provider (eg STMTIMPORTSRC/YODLEE); 3) manually uploaded bank feed (eg STMTIMPORTSRC/CSV) or 4) manually entered statement data (STMTIMPORTSRC/MANUAL).|
|startBalance|number(double)|false|none|Opening balance sourced from imported bank statements (if supplied). Note, for manually uploaded statements, this balance is also manual and usually not supplied. Where not supplied, the value will be 0.|
|endBalance|number(double)|false|none|Closing balance sourced from imported bank statements (if supplied). Note, for manually uploaded statements, this balance is also manual and usually not supplied. Where not supplied, the value will be 0.|
|indicativeStartBalance|number(double)|false|none|Opening statement balance calculated in Xero (= bank account conversion balance plus sum of imported bank statement lines). Note: If indicative statement balance doesn't match imported statement balance for the same date, either the conversion (opening at inception) balance in Xero is wrong or there's an error in the bank statement lines in Xero. Ref: https://central.xero.com/s/article/Compare-the-statement-balance-in-Xero-to-your-actual-bank-balance?userregion=true<br>|
|indicativeEndBalance|number(double)|false|none|Closing statement balance calculated in Xero (= bank account conversion balance plus sum of imported bank statement lines). Note: If indicative statement balance doesn't match imported statement balance for the same date, either the conversion (opening at inception) balance in Xero is wrong or there's an error in the bank statement lines in Xero. Ref: https://central.xero.com/s/article/Compare-the-statement-balance-in-Xero-to-your-actual-bank-balance?userregion=true <br>|
|statementLines|[[StatementLineResponse](#schemastatementlineresponse)]|false|none|List of statement lines|
