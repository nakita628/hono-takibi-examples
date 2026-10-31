<h1 id="assess-api">Assess API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Codat's financial insights API

Codat's Assess API enable you to make smarter credit decisions on your small business customers. Assess enriches your customer's accounting, commerce and banking data to surface actionable insights you didn't have before.

[Read more...](https://www.codat.io/assess/)

[See our OpenAPI spec](https://github.com/codatio/oas)

Base URLs:

* <a href="https://api.codat.io">https://api.codat.io</a> - Production

<a href="https://www.codat.io/legals/">Terms of service</a>
Email: <a href="mailto:support@codat.io">Codat</a> 
Web: <a href="https://www.codat.io/contact/">Codat</a> 

# Authentication

* API Key (auth_header)
    - Parameter Name: **Authorization**, in: header. The word "Basic" followed by a space and your API Key, base64 encoded, which can be found [here](https://app.codat.io/developers/api-keys)

<h1 id="assess-api-data-integrity">Data integrity</h1>

Data integrity is important

## Lists data integrity details for date type

<a id="opIdget-data-integrity-details"></a>

> Code samples

```bash
curl 'https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/assess/dataTypes/banking-accounts/dataIntegrity/details?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/details`

Gets record-by-record match results for a given company and datatype, optionally restricted by a Codat query string.

<h3 id="lists-data-integrity-details-for-date-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|orderBy|query|string|false|Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).|
|companyId|path|string(uuid)|true|none|
|dataType|path|string|true|A key for a Codat data type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|dataType|banking-accounts|
|dataType|banking-transactions|
|dataType|bankAccounts|
|dataType|accountTransactions|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "amount": 0,
      "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "currency": "GBP",
      "date": "2022-10-23T00:00:00Z",
      "description": "string",
      "id": "string",
      "matches": [
        {
          "amount": "string",
          "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "currency": "GBP",
          "date": "string",
          "description": "string",
          "id": "string",
          "type": "string"
        }
      ],
      "type": "string"
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

<h3 id="lists-data-integrity-details-for-date-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Details](#schemadetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get data integrity status

<a id="opIdget-data-integrity-status"></a>

> Code samples

```bash
curl https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/assess/dataTypes/banking-accounts/dataIntegrity/status \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/status`

Gets match status for a given company and datatype.

<h3 id="get-data-integrity-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|dataType|path|string|true|A key for a Codat data type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|dataType|banking-accounts|
|dataType|banking-transactions|
|dataType|bankAccounts|
|dataType|accountTransactions|

> Example responses

> 200 Response

```json
{
  "metadata": [
    {
      "amounts": {
        "currency": "GBP",
        "max": 2450,
        "min": 130
      },
      "connectionIds": {
        "source": [
          "d5a8d1b2-b38a-4e44-8641-548ad43be6bb",
          "da8c9f39-8af9-4a98-964b-f1e207942837"
        ],
        "target": [
          "3d7ce25a-c107-44bc-8e0c-36c10bdd14e0",
          "a5300eac-01fa-4a77-b5b0-ea0b86a3be69"
        ]
      },
      "dates": {
        "maxDate": "2021-12-16T12:12:53.441Z",
        "maxOverlappingDate": "2021-11-27T12:19:33.441Z",
        "minDate": "2021-09-17T12:09:33.441Z",
        "minOverlappingDate": "2021-09-30T12:09:13.441Z"
      },
      "statusInfo": {
        "currentStatus": "Unknown",
        "lastMatched": "2021-10-24T14:15:22Z",
        "statusMessage": "string"
      },
      "type": "string"
    }
  ]
}
```

<h3 id="get-data-integrity-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Status](#schemastatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get data integrity summary

<a id="opIdget-data-integrity-summaries"></a>

> Code samples

```bash
curl https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/assess/dataTypes/banking-accounts/dataIntegrity/summaries \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/summaries`

Gets match summary for a given company and datatype, optionally restricted by a Codat query string.

<h3 id="get-data-integrity-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|companyId|path|string(uuid)|true|none|
|dataType|path|string|true|A key for a Codat data type.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|dataType|banking-accounts|
|dataType|banking-transactions|
|dataType|bankAccounts|
|dataType|accountTransactions|

> Example responses

> 200 Response

```json
{
  "summaries": [
    {
      "type": "string",
      "byAmount": {
        "currency": "GBP",
        "matchPercentage": 0,
        "matched": 0,
        "total": 0,
        "unmatched": 0
      },
      "byCount": {
        "matchPercentage": 0,
        "matched": 0,
        "total": 0,
        "unmatched": 0
      }
    }
  ]
}
```

<h3 id="get-data-integrity-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Summaries](#schemasummaries)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="assess-api-reports">Reports</h1>

Data integrity is important

## Enhanced Balance Sheet Accounts

<a id="opIdget-accounts-for-enhanced-balance-sheet"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/reports/enhancedBalanceSheet/accounts?reportDate=29-09-2020&numberOfPeriods=0' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/reports/enhancedBalanceSheet/accounts`

The Enhanced Balance Sheet Accounts endpoint returns a list of categorized accounts that appear on a company’s Balance Sheet along with a balance per financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/docs/assess-categorizing-accounts-ecommerce-lending) to a more suitable one.

<h3 id="enhanced-balance-sheet-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportDate|query|string|true|The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.|
|numberOfPeriods|query|integer|true|The number of periods to return.  There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.|
|companyId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "reportInfo": {
    "companyName": "Biscuits",
    "currency": "GBP",
    "generatedDate": "2023-03-24T16:42:09.2973105Z",
    "reportName": "EnhancedBalanceSheetAccounts"
  },
  "reportItems": [
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Asset"
          },
          {
            "levelName": "Current"
          },
          {
            "levelName": "AccruedDeferredAssets"
          },
          {
            "levelName": "PrepaidExpenses"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "22de1660-d745-4809-a363-16b134607e66",
      "accountName": "Prepayments",
      "balance": 12973.03,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Asset"
          },
          {
            "levelName": "Current"
          },
          {
            "levelName": "Bank"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "dbcaf288-2b39-4b95-8ab3-42202ab15918",
      "accountName": "Business Current Account",
      "balance": 316065.92,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Asset"
          },
          {
            "levelName": "Current"
          },
          {
            "levelName": "Inventory"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "e5d7612c-1671-47b4-b733-5db48363fcd0",
      "accountName": "Inventory",
      "balance": 65945.07,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Asset"
          },
          {
            "levelName": "Current"
          },
          {
            "levelName": "Receivables"
          },
          {
            "levelName": "AccountsReceivables"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "1b6266d1-1e44-46c5-8eb5-a8f98e03124e",
      "accountName": "Accounts Receivable",
      "balance": 71937.95,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Asset"
          },
          {
            "levelName": "NonCurrent"
          },
          {
            "levelName": "AccumulatedDepreciationDepletionAmortization"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "724ca578-8b5d-4bdb-ad45-e3820eee9de9",
      "accountName": "Office Equipment",
      "balance": 2180148.56,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Asset"
          },
          {
            "levelName": "NonCurrent"
          },
          {
            "levelName": "AccumulatedDepreciationDepletionAmortization"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "be3eb911-034b-42de-95db-0d58ac978b7f",
      "accountName": "Computer Equipment",
      "balance": 1804674.9,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Equity"
          },
          {
            "levelName": "RetainedEarnings"
          },
          {
            "levelName": "CapitalIncomeReserve"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "39225d6f-3722-4508-ac3f-a2f6ec96ad31",
      "accountName": "Retained Earnings",
      "balance": 3417424.16,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Equity"
          },
          {
            "levelName": "ShareCapital"
          },
          {
            "levelName": "CommonStock"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "78828dd9-6008-4662-b43c-e9d87907fd2b",
      "accountName": "Current Year Earnings",
      "balance": 44252.52,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Liability"
          },
          {
            "levelName": "Current"
          },
          {
            "levelName": "AccountsPayable"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "53bf27a7-7497-4c61-9887-dfaad5c6d80a",
      "accountName": "Accounts Payable",
      "balance": 75835.64,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Liability"
          },
          {
            "levelName": "Current"
          },
          {
            "levelName": "AccruedLiabilities"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "e2530acd-91c8-48f8-a35f-935dbd7432e2",
      "accountName": "Accruals",
      "balance": 208264.65,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Liability"
          },
          {
            "levelName": "Current"
          },
          {
            "levelName": "Bank"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "d19852a2-e292-4eb9-a909-9dadb95c0e76",
      "accountName": "Rounding",
      "balance": 0,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Liability"
          },
          {
            "levelName": "Current"
          },
          {
            "levelName": "Debt"
          },
          {
            "levelName": "CreditCards"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "62060aae-e5a6-4db5-a3bb-6abec6d47959",
      "accountName": "Credit Card Control Account",
      "balance": 25184.57,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Liability"
          },
          {
            "levelName": "Current"
          },
          {
            "levelName": "Debt"
          },
          {
            "levelName": "LoansPayable"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "9be6382f-6b33-402d-b448-0db1dbf67a98",
      "accountName": "Historical Adjustment",
      "balance": 9650.58,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Liability"
          },
          {
            "levelName": "Current"
          },
          {
            "levelName": "Debt"
          },
          {
            "levelName": "LoansPayable"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "8636effc-50fb-45ba-8b2b-18336fa29b6b",
      "accountName": "John Smith",
      "balance": 2022.41,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Liability"
          },
          {
            "levelName": "Current"
          },
          {
            "levelName": "Personnel"
          },
          {
            "levelName": "PensionPayable"
          }
        ],
        "status": "Confirmed"
      },
      "accountId": "3a872b81-d1af-4d31-9bfa-a37280b8f68c",
      "accountName": "VAT",
      "balance": 29034.75,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Liability"
          },
          {
            "levelName": "Current"
          },
          {
            "levelName": "Personnel"
          },
          {
            "levelName": "PensionPayable"
          }
        ],
        "status": "Confirmed"
      },
      "accountId": "3b58f7ff-fa16-453a-9931-f020816d76e7",
      "accountName": "Interest Payables",
      "balance": 1076.55,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Liability"
          },
          {
            "levelName": "NonCurrent"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "8852a857-aa9d-4706-839f-638e9d6b5a66",
      "accountName": "Unpaid Expense Claims",
      "balance": 0,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Liability"
          },
          {
            "levelName": "NonCurrent"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "55008233-40e7-41ac-84af-2255fa028c2e",
      "accountName": "Loan",
      "balance": 638999.6,
      "date": "2022-08-31T00:00:00"
    }
  ]
}
```

<h3 id="enhanced-balance-sheet-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EnhancedReport](#schemaenhancedreport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get enhanced cash flow report

<a id="opIdget-enhanced-cash-flow-transactions"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/reports/enhancedCashFlow/transactions?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/reports/enhancedCashFlow/transactions`

The Enhanced Cash Flow Transactions endpoint provides a fully categorized list of banking transactions for a company. Accounts and transaction data are obtained from the company's banking data sources.

<h3 id="get-enhanced-cash-flow-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|companyId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "dataSources": [
    {
      "accounts": [
        {
          "accountName": "Business Savings Account",
          "accountProvider": "Lloyds Bank",
          "accountType": "Debit",
          "currency": "GBP",
          "currentBalance": 0,
          "platformName": "Banking Sandbox",
          "sourceRef": {
            "sourceType": "Banking"
          }
        },
        {
          "accountName": "Banking - Business Credit Card",
          "accountProvider": "Lloyds Bank",
          "accountType": "Credit",
          "currency": "GBP",
          "currentBalance": 0,
          "platformName": "Banking Sandbox",
          "sourceRef": {
            "sourceType": "Banking"
          }
        },
        {
          "accountName": "Business Undeposited Funds",
          "accountProvider": "Lloyds Bank",
          "accountType": "Debit",
          "currency": "GBP",
          "currentBalance": 0,
          "platformName": "Banking Sandbox",
          "sourceRef": {
            "sourceType": "Banking"
          }
        },
        {
          "accountName": "Business Current Account",
          "accountProvider": "Lloyds Bank",
          "accountType": "Debit",
          "currency": "GBP",
          "currentBalance": 0,
          "platformName": "Banking Sandbox",
          "sourceRef": {
            "sourceType": "Banking"
          }
        }
      ]
    }
  ],
  "reportInfo": {
    "companyName": "test",
    "generatedDate": "2023-03-24T16:44:17.5302732Z",
    "pageNumber": 1,
    "pageSize": 10,
    "reportName": "Cash flow transactions report",
    "totalResults": 2194
  },
  "reportItems": [
    {
      "transactions": [
        {
          "amount": -6905.44,
          "currency": "GBP",
          "date": "2022-11-08T00:00:00",
          "description": "Payment m86SDGpQr3",
          "id": "ab5e07a0-5578-4d91-8421-2dc72713b74f",
          "sourceRef": {
            "sourceType": "Banking"
          },
          "transactionCategory": {
            "levels": []
          }
        },
        {
          "amount": 4332.84,
          "currency": "GBP",
          "date": "2022-11-08T00:00:00",
          "description": "Payment from customer a5c68c7b-6825-46de-bf63-6ad23ef506a4",
          "id": "9846bbed-46d3-472c-a848-1ce8ebea7213",
          "sourceRef": {
            "sourceType": "Banking"
          },
          "transactionCategory": {
            "levels": []
          }
        },
        {
          "amount": 4034.3,
          "currency": "GBP",
          "date": "2022-11-08T00:00:00",
          "description": "Payment from customer a5c68c7b-6825-46de-bf63-6ad23ef506a4",
          "id": "94b213fb-d742-435e-90f1-bfe723a076d5",
          "sourceRef": {
            "sourceType": "Banking"
          },
          "transactionCategory": {
            "levels": []
          }
        },
        {
          "amount": -313.76,
          "currency": "GBP",
          "date": "2022-11-08T00:00:00",
          "description": "Payment to supplier 78792d13-90a0-4ea2-8e07-81c3c893997e",
          "id": "cfceb7ff-eaa2-45b6-aca7-fa0e0b439161",
          "sourceRef": {
            "sourceType": "Banking"
          },
          "transactionCategory": {
            "levels": []
          }
        },
        {
          "amount": -614.4,
          "currency": "GBP",
          "date": "2022-11-08T00:00:00",
          "description": "Payment to supplier 46d2e1fb-b4e9-469c-814a-21ff8105a26e",
          "id": "ba814f14-0fe3-41d0-9308-57f40642ac75",
          "sourceRef": {
            "sourceType": "Banking"
          },
          "transactionCategory": {
            "levels": []
          }
        },
        {
          "amount": 5199.62,
          "currency": "GBP",
          "date": "2022-11-08T00:00:00",
          "description": "Payment from customer a5c68c7b-6825-46de-bf63-6ad23ef506a4",
          "id": "e67cc30e-fd5c-4eea-8365-ec40dfdd3ef6",
          "sourceRef": {
            "sourceType": "Banking"
          },
          "transactionCategory": {
            "levels": []
          }
        },
        {
          "amount": -21420.94,
          "currency": "GBP",
          "date": "2022-11-08T00:00:00",
          "description": "Payment to supplier 18ac18dc-945b-4083-9013-e8a100b999fa",
          "id": "e0f08a0b-3575-4dde-98c4-3c854028d2d2",
          "sourceRef": {
            "sourceType": "Banking"
          },
          "transactionCategory": {
            "levels": []
          }
        },
        {
          "amount": -30924.22,
          "currency": "GBP",
          "date": "2022-11-08T00:00:00",
          "description": "Payment to supplier 630a3f16-5f01-4986-ae6b-82333ec49449",
          "id": "4b70d379-8284-4f44-bb37-c7935df950cc",
          "sourceRef": {
            "sourceType": "Banking"
          },
          "transactionCategory": {
            "levels": []
          }
        },
        {
          "amount": -568.78,
          "currency": "GBP",
          "date": "2022-11-08T00:00:00",
          "description": "Payment to supplier bQATU4eSb9",
          "id": "76b73373-9345-472e-8edf-5be849d797fe",
          "sourceRef": {
            "sourceType": "Banking"
          },
          "transactionCategory": {
            "levels": []
          }
        },
        {
          "amount": -13050.79,
          "currency": "GBP",
          "date": "2022-11-08T00:00:00",
          "description": "Payment to supplier 9c37eb21-579a-4886-8296-3a853076b7bd",
          "id": "ee92fd6f-e0f7-4391-85fd-4b50921b973f",
          "sourceRef": {
            "sourceType": "Banking"
          },
          "transactionCategory": {
            "levels": []
          }
        }
      ]
    }
  ]
}
```

<h3 id="get-enhanced-cash-flow-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EnhancedCashFlowTransactions](#schemaenhancedcashflowtransactions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Enhanced Invoices Report

<a id="opIdget-enhanced-invoices-report"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/reports/enhancedInvoices?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/reports/enhancedInvoices`

Gets a list of invoices linked to the corresponding banking transaction

<h3 id="enhanced-invoices-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|companyId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "reportInfo": {
    "companyName": "Small Sandbox",
    "generatedDate": "2023-03-24T13:27:28.1156686Z",
    "pageNumber": 1,
    "pageSize": 10,
    "reportName": "Invoices report",
    "totalResults": 101
  },
  "reportItems": [
    {
      "amountDue": 0,
      "currency": "GBP",
      "customerRef": {
        "companyName": "Serena Keeling",
        "id": "ee4d0eee-063d-4c9f-8226-2c9a6a816249"
      },
      "dueDate": "2021-04-06T09:44:00",
      "id": "15221fa4-e91a-4f64-a2bb-caeab4db85a4",
      "invoiceNumber": "UDs5KlfE",
      "issueDate": "2021-04-06T09:44:00",
      "paidOnDate": "2021-04-06T09:44:00",
      "payments": [],
      "status": "Paid",
      "totalAmount": 7044.83
    },
    {
      "amountDue": 0,
      "currency": "GBP",
      "customerRef": {
        "companyName": "Quinton Kovacek",
        "id": "81e9c0df-3e5e-4180-b20c-c8e58100cdf3"
      },
      "dueDate": "2021-04-06T09:44:00",
      "id": "58aea1cb-5b31-4eed-ba16-489dfa67a831",
      "invoiceNumber": "1IU1PMoT",
      "issueDate": "2021-04-06T09:44:00",
      "paidOnDate": "2021-04-06T09:44:00",
      "payments": [],
      "status": "Paid",
      "totalAmount": 3567.59
    },
    {
      "amountDue": 0,
      "currency": "GBP",
      "customerRef": {
        "companyName": "Antwon Dach",
        "id": "c7326084-cd56-48e6-bcfa-be8919e024e1"
      },
      "dueDate": "2021-04-18T01:27:00",
      "id": "9ecd07bc-9cab-4516-bad0-a0cd565cdbaf",
      "invoiceNumber": "eEIWyPN4",
      "issueDate": "2021-04-08T01:27:00",
      "paidOnDate": "2021-04-10T12:31:00",
      "payments": [
        {
          "amount": 153233.36,
          "currency": "GBP",
          "currencyRate": 1,
          "date": "2021-04-10T12:31:00",
          "id": "271f2bd4-fab2-468c-9ea5-636b02c865b2",
          "paymentType": "payments"
        }
      ],
      "status": "Paid",
      "totalAmount": 153233.36
    },
    {
      "amountDue": 0,
      "currency": "GBP",
      "customerRef": {
        "companyName": "Dolores Rath",
        "id": "44e8516d-bcb0-459f-9e5d-7beaa56d57d0"
      },
      "dueDate": "2021-04-23T17:30:00",
      "id": "7cea078a-5c9a-4788-ae72-9bb60c5cc184",
      "invoiceNumber": "BXb8mYQW",
      "issueDate": "2021-04-16T17:30:00",
      "paidOnDate": "2021-04-23T17:30:00",
      "payments": [
        {
          "amount": 12657.69,
          "currency": "GBP",
          "currencyRate": 1,
          "date": "2021-04-23T17:30:00",
          "id": "701608b9-2c52-443a-a272-7acc820e7065",
          "paymentType": "payments"
        }
      ],
      "status": "Paid",
      "totalAmount": 12657.69
    },
    {
      "amountDue": 381.09,
      "currency": "GBP",
      "customerRef": {
        "companyName": "Bryana Douglas",
        "id": "5cbaf1af-4f02-4206-85ab-c525bd9b4f99"
      },
      "dueDate": "2021-04-27T06:46:00",
      "id": "aa4503d7-fe01-49fe-ba42-259b421ac640",
      "invoiceNumber": "wdjwiL5B",
      "issueDate": "2021-04-20T06:46:00",
      "paidOnDate": "0001-01-01T00:00:00",
      "payments": [
        {
          "amount": 12554.3,
          "currency": "GBP",
          "currencyRate": 1,
          "date": "2021-04-23T14:59:00",
          "id": "8c353289-0828-4991-983c-0285c7fc4fb3",
          "paymentType": "payments"
        }
      ],
      "status": "PartiallyPaid",
      "totalAmount": 12935.39
    },
    {
      "amountDue": 0,
      "currency": "GBP",
      "customerRef": {
        "companyName": "Brady Wilderman",
        "id": "6f5290e5-70aa-4d0c-816e-9d2312cf217f"
      },
      "dueDate": "2021-05-03T09:32:00",
      "id": "d8a0e26e-4ec8-4fb5-887d-8b7531e3bedf",
      "invoiceNumber": "cTjJcu8x",
      "issueDate": "2021-04-23T09:32:00",
      "paidOnDate": "2021-05-03T09:32:00",
      "payments": [
        {
          "amount": 21506.72,
          "currency": "GBP",
          "currencyRate": 1,
          "date": "2021-05-03T09:32:00",
          "id": "a91beee3-3b73-4194-8ded-837955d62900",
          "paymentType": "payments"
        }
      ],
      "status": "Paid",
      "totalAmount": 21526.72
    },
    {
      "amountDue": 1225.06,
      "currency": "GBP",
      "customerRef": {
        "companyName": "Dolores Rath",
        "id": "44e8516d-bcb0-459f-9e5d-7beaa56d57d0"
      },
      "dueDate": "2021-05-11T23:23:00",
      "id": "06890e67-35fb-4276-9857-95db40cfd15d",
      "invoiceNumber": "htXJuUDb",
      "issueDate": "2021-05-01T23:23:00",
      "paidOnDate": "0001-01-01T00:00:00",
      "payments": [
        {
          "amount": 5926.35,
          "currency": "GBP",
          "currencyRate": 1,
          "date": "2021-05-04T17:57:00",
          "id": "36c9294d-ed7b-4903-813d-e44f259cc4d6",
          "paymentType": "payments"
        }
      ],
      "status": "PartiallyPaid",
      "totalAmount": 7151.41
    },
    {
      "amountDue": 14408.54,
      "currency": "GBP",
      "customerRef": {
        "companyName": "Dolores Rath",
        "id": "44e8516d-bcb0-459f-9e5d-7beaa56d57d0"
      },
      "dueDate": "2021-05-25T08:53:00",
      "id": "160e8b51-1fa0-46b9-98fe-1ff5399ce99b",
      "invoiceNumber": "9wegEXpG",
      "issueDate": "2021-05-18T08:53:00",
      "paidOnDate": "0001-01-01T00:00:00",
      "payments": [
        {
          "amount": 8113.8,
          "currency": "GBP",
          "currencyRate": 1,
          "date": "2021-05-23T04:04:00",
          "id": "c913cd2e-9dac-4403-91cd-487892a7add0",
          "paymentType": "payments"
        }
      ],
      "status": "PartiallyPaid",
      "totalAmount": 22522.34
    },
    {
      "amountDue": 0,
      "currency": "GBP",
      "customerRef": {
        "companyName": "Ignacio Moore",
        "id": "cc96af36-e2f5-49f7-bf40-271503f45071"
      },
      "dueDate": "2021-06-04T19:51:00",
      "id": "5a934955-561d-436a-a564-fd624a79f54c",
      "invoiceNumber": "l7YwGxG7",
      "issueDate": "2021-05-25T19:51:00",
      "paidOnDate": "2021-05-28T07:31:00",
      "payments": [
        {
          "amount": 11047.08,
          "currency": "GBP",
          "currencyRate": 1,
          "date": "2021-05-28T07:31:00",
          "id": "d7b2371d-94bd-4c58-a585-a893567d4ccd",
          "paymentType": "payments"
        }
      ],
      "status": "Paid",
      "totalAmount": 11047.08
    },
    {
      "amountDue": 5036.83,
      "currency": "GBP",
      "customerRef": {
        "companyName": "Freida Ebert",
        "id": "e1ecc8f2-8a63-4fe9-97c9-c87fd90ca0a6"
      },
      "dueDate": "2021-06-03T19:07:00",
      "id": "17690788-2936-46b5-ba46-ba6a36a87483",
      "invoiceNumber": "ntH1cRYz",
      "issueDate": "2021-05-27T19:07:00",
      "paidOnDate": "0001-01-01T00:00:00",
      "payments": [
        {
          "amount": 2154.49,
          "currency": "GBP",
          "currencyRate": 1,
          "date": "2021-06-03T19:07:00",
          "id": "b152a8b3-0320-42a7-817e-9781ac6ca951",
          "paymentType": "payments"
        }
      ],
      "status": "PartiallyPaid",
      "totalAmount": 7191.32
    }
  ]
}
```

<h3 id="enhanced-invoices-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EnhancedInvoicesReport](#schemaenhancedinvoicesreport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Enhanced Profit and Loss Accounts

<a id="opIdget-accounts-for-enhanced-profit-and-loss"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/reports/enhancedProfitAndLoss/accounts?reportDate=29-09-2020&numberOfPeriods=0' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/reports/enhancedProfitAndLoss/accounts`

The Enhanced Profit and Loss Accounts endpoint returns a list of categorized accounts that appear on a company’s Profit and Loss. It also includes a balance per the financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/docs/assess-categorizing-accounts-ecommerce-lending) to a more suitable one.

<h3 id="enhanced-profit-and-loss-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportDate|query|string|true|The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.|
|numberOfPeriods|query|integer|true|The number of periods to return.  There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.|
|companyId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "reportInfo": {
    "companyName": "Biscuits",
    "currency": "GBP",
    "generatedDate": "2023-03-24T16:40:59.0847354Z",
    "reportName": "EnhancedProfitAndLossAccounts"
  },
  "reportItems": [
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "04f7111b-55d4-4efc-b329-1bd5c791933a",
      "accountName": "Repairs & Maintenance",
      "balance": 830.93,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "CostOfSales"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "7f6a0e92-65be-4333-9a0a-d981b03bedd1",
      "accountName": "Wages",
      "balance": 12000,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "CostOfSales"
          },
          {
            "levelName": "Inventory"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "7403e960-5b72-42ff-abf4-c870ad8910bd",
      "accountName": "Purchases",
      "balance": 28937.71,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "CostOfSales"
          },
          {
            "levelName": "Inventory"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "e8a0a24e-2dab-46b1-bfe1-6e92551c04e8",
      "accountName": "Purchase Discounts",
      "balance": 582.4,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "NonOperating"
          },
          {
            "levelName": "Donations"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "cbf82e0d-87a7-464d-b567-9274ea94a1c0",
      "accountName": "Charitable and Political Donations",
      "balance": 350.44,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "NonOperating"
          },
          {
            "levelName": "Interest"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "78785fd7-f197-4c34-aa17-6e76b9255d34",
      "accountName": "Interest Paid (operating)",
      "balance": 535.81,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "NonOperating"
          },
          {
            "levelName": "Taxes"
          },
          {
            "levelName": "CorporationTaxes"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "fb3210ef-edeb-48af-bb49-b85d40c1e6bb",
      "accountName": "Corporation Tax",
      "balance": 633.05,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "BankCharges"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "f3aa84fe-5c31-4107-b207-7e0419f636d7",
      "accountName": "Bank Fees",
      "balance": 782.61,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "Leases"
          },
          {
            "levelName": "BuildingRentLease"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "9cbe5fe4-ca60-4792-8bf1-de01fb7010aa",
      "accountName": "Rent",
      "balance": 8000,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "Leases"
          },
          {
            "levelName": "EquipmentRentLease"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "138a8eb3-5c08-4e59-a3bc-892119694447",
      "accountName": "Motor Vehicle Expenses",
      "balance": 1090.68,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "Marketing"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "868591ad-f9c2-4956-a5ec-c32c1d48c6f3",
      "accountName": "Advertising & Marketing",
      "balance": 26307.02,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "Marketing"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "1734ff00-2a17-45b4-8db6-2dc2e832c460",
      "accountName": "Postage, Freight & Courier",
      "balance": 1128.85,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "Marketing"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "7d8d0322-f452-47de-a8e8-54b0130e6f38",
      "accountName": "Subscriptions",
      "balance": 40,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "NonCash"
          },
          {
            "levelName": "Amortization"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "4378ddba-36b4-4b35-9970-bd972b20d137",
      "accountName": "Amortization",
      "balance": 5.72,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "NonCash"
          },
          {
            "levelName": "Depreciation"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "940c8a59-3348-4a0b-a1b1-781d9f29cc8b",
      "accountName": "Depreciation Expense",
      "balance": 1539.18,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "Personnel"
          },
          {
            "levelName": "EmployeeBenefits"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "e7ac3baa-cfbe-40c1-a172-83d22e84435b",
      "accountName": "Entertainment-100% business",
      "balance": 1416.05,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "SalesGeneralAdministrative"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "b5e801e8-8dbc-4390-ac99-3b0fff54a89f",
      "accountName": "General Expenses",
      "balance": 1465.61,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "SalesGeneralAdministrative"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "5360066d-1474-49f6-a7a5-c66d5f6032ba",
      "accountName": "Light, Power, Heating",
      "balance": 7347.35,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "SalesGeneralAdministrative"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "7aa7988a-ff61-4cb8-bef3-15395355d108",
      "accountName": "Printing & Stationery",
      "balance": 1027.25,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "SalesGeneralAdministrative"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "043b6bcb-dfe6-4c97-9b4c-f9b300fe3f03",
      "accountName": "Telephone & Internet",
      "balance": 45,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "SalesGeneralAdministrative"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "eef78ed1-dfed-447c-bdba-3a49fb2c044b",
      "accountName": "Audit & Accountancy fees",
      "balance": 0,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "SalesGeneralAdministrative"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "c16f5c35-8283-47da-9d09-5fecb183b0cb",
      "accountName": "Cleaning",
      "balance": 130,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Expense"
          },
          {
            "levelName": "Operating"
          },
          {
            "levelName": "Travel"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "df62060b-41cc-4bf2-9de7-c7e537b5663a",
      "accountName": "Travel - National",
      "balance": 860.02,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Income"
          },
          {
            "levelName": "Revenue"
          },
          {
            "levelName": "Online"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "68794a8f-b22d-4520-b97b-025b7cb10f94",
      "accountName": "Other Revenue",
      "balance": 850.22,
      "date": "2022-08-31T00:00:00"
    },
    {
      "accountCategory": {
        "levels": [
          {
            "levelName": "Income"
          },
          {
            "levelName": "Revenue"
          },
          {
            "levelName": "Wholesale"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "72df89d2-512b-4455-af51-a6b563733842",
      "accountName": "Sales",
      "balance": 138457.98,
      "date": "2022-08-31T00:00:00"
    }
  ]
}
```

<h3 id="enhanced-profit-and-loss-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EnhancedReport](#schemaenhancedreport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get the customer retention metrics for a specific company.

<a id="opIdget-commerce-customer-retention-metrics"></a>

> Code samples

```bash
curl 'https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/assess/commerceMetrics/customerRetention?reportDate=29-09-2020&periodLength=0&numberOfPeriods=0&periodUnit=Day' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/customerRetention`

Gets the customer retention metrics for a specific company connection, over one or more periods of time.

<h3 id="get-the-customer-retention-metrics-for-a-specific-company-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportDate|query|string|true|The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.|
|periodLength|query|integer|true|The number of months per period. E.g. 2 = 2 months per period.|
|numberOfPeriods|query|integer|true|The number of periods to return.  There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.|
|periodUnit|query|string|true|The period unit of time returned.|
|includeDisplayNames|query|boolean|false|Shows the dimensionDisplayName and itemDisplayName in measures to make the report data human-readable.|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|periodUnit|Day|
|periodUnit|Week|
|periodUnit|Month|
|periodUnit|Year|

> Example responses

> 200 Response

```json
[
  {
    "dimensions": [
      {
        "displayName": "Period",
        "index": 0,
        "items": [
          {
            "displayName": "Period 0",
            "end": "2022-12-31",
            "index": 0,
            "start": "2022-01-01"
          }
        ],
        "type": "datespan"
      },
      {
        "displayName": "Customer retention metrics",
        "index": 1,
        "items": [
          {
            "index": 0,
            "value": "Existing customers"
          },
          {
            "index": 1,
            "value": "New customers"
          },
          {
            "index": 2,
            "value": "Total customers"
          },
          {
            "index": 3,
            "value": "Retention rate"
          },
          {
            "index": 4,
            "value": "Repeat rate"
          }
        ],
        "type": "string"
      }
    ],
    "measures": [
      {
        "displayName": "Count",
        "index": 0,
        "type": "int"
      },
      {
        "displayName": "Percentage",
        "index": 1,
        "type": "percentage"
      }
    ],
    "reportData": [
      {
        "components": [
          {
            "dimension": 1,
            "dimensionDisplayName": "Customer retention metrics",
            "item": 0,
            "itemDisplayName": "Existing customers",
            "measures": [
              {
                "index": 0,
                "measureDisplayName": "Count",
                "value": 13
              }
            ]
          },
          {
            "dimension": 1,
            "dimensionDisplayName": "Customer retention metrics",
            "item": 1,
            "itemDisplayName": "New customers",
            "measures": [
              {
                "index": 0,
                "measureDisplayName": "Count",
                "value": 47
              }
            ]
          },
          {
            "dimension": 1,
            "dimensionDisplayName": "Customer retention metrics",
            "item": 2,
            "itemDisplayName": "Total customers",
            "measures": [
              {
                "index": 0,
                "measureDisplayName": "Count",
                "value": 60
              }
            ]
          },
          {
            "dimension": 1,
            "dimensionDisplayName": "Customer retention metrics",
            "item": 3,
            "itemDisplayName": "Retention rate",
            "measures": [
              {
                "index": 1,
                "measureDisplayName": "Percentage",
                "value": 0
              }
            ]
          },
          {
            "dimension": 1,
            "dimensionDisplayName": "Customer retention metrics",
            "item": 4,
            "itemDisplayName": "Repeat rate",
            "measures": [
              {
                "index": 1,
                "measureDisplayName": "Percentage",
                "value": 21.67
              }
            ]
          }
        ],
        "dimension": 0,
        "dimensionDisplayName": "Period",
        "item": 0,
        "itemDisplayName": "Period 0"
      }
    ],
    "reportInfo": {
      "displayName": "Customer Retention",
      "name": "customer_retention"
    }
  }
]
```

<h3 id="get-the-customer-retention-metrics-for-a-specific-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get the lifetime value metric for a specific company.

<a id="opIdget-commerce-lifetime-value-metrics"></a>

> Code samples

```bash
curl 'https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/assess/commerceMetrics/lifetimeValue?reportDate=29-09-2020&periodLength=0&numberOfPeriods=0&periodUnit=Day' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/lifetimeValue`

Gets the lifetime value metric for a specific company connection, over one or more periods of time.

<h3 id="get-the-lifetime-value-metric-for-a-specific-company-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportDate|query|string|true|The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.|
|periodLength|query|integer|true|The number of months per period. E.g. 2 = 2 months per period.|
|numberOfPeriods|query|integer|true|The number of periods to return.  There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.|
|periodUnit|query|string|true|The period unit of time returned.|
|includeDisplayNames|query|boolean|false|Shows the dimensionDisplayName and itemDisplayName in measures to make the report data human-readable.|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|periodUnit|Day|
|periodUnit|Week|
|periodUnit|Month|
|periodUnit|Year|

> Example responses

> 200 Response

```json
[
  {
    "dimensions": [
      {
        "displayName": "Period",
        "index": 0,
        "items": [
          {
            "displayName": "Period 0",
            "end": "2022-12-31",
            "index": 0,
            "start": "2022-01-01"
          }
        ],
        "type": "datespan"
      },
      {
        "displayName": "Lifetime value metrics",
        "index": 1,
        "items": [
          {
            "index": 0,
            "value": "Lifetime value"
          }
        ],
        "type": "string"
      }
    ],
    "measures": [
      {
        "displayName": "Value",
        "index": 0,
        "type": "currency",
        "units": "GBP"
      }
    ],
    "reportData": [
      {
        "components": [
          {
            "dimension": 1,
            "dimensionDisplayName": "Lifetime value metrics",
            "item": 0,
            "itemDisplayName": "Lifetime value",
            "measures": [
              {
                "index": 0,
                "measureDisplayName": "Value",
                "value": 3782.07
              }
            ]
          }
        ],
        "dimension": 0,
        "dimensionDisplayName": "Period",
        "item": 0,
        "itemDisplayName": "Period 0"
      }
    ],
    "reportInfo": {
      "displayName": "Lifetime Value",
      "name": "lifetime_value"
    }
  }
]
```

<h3 id="get-the-lifetime-value-metric-for-a-specific-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get order information for a specific company

<a id="opIdget-commerce-orders-metrics"></a>

> Code samples

```bash
curl 'https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/assess/commerceMetrics/orders?reportDate=29-09-2020&periodLength=0&numberOfPeriods=0&periodUnit=Day' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/orders`

Gets the order information for a specific company connection, over one or more periods of time.

<h3 id="get-order-information-for-a-specific-company-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportDate|query|string|true|The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.|
|periodLength|query|integer|true|The number of months per period. E.g. 2 = 2 months per period.|
|numberOfPeriods|query|integer|true|The number of periods to return.  There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.|
|periodUnit|query|string|true|The period unit of time returned.|
|includeDisplayNames|query|boolean|false|Shows the dimensionDisplayName and itemDisplayName in measures to make the report data human-readable.|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|periodUnit|Day|
|periodUnit|Week|
|periodUnit|Month|
|periodUnit|Year|

> Example responses

> 200 Response

```json
[
  {
    "dimensions": [
      {
        "displayName": "Period",
        "index": 0,
        "items": [
          {
            "displayName": "Period 0",
            "end": "2022-12-31",
            "index": 0,
            "start": "2022-01-01"
          }
        ],
        "type": "datespan"
      },
      {
        "displayName": "Order metrics",
        "index": 1,
        "items": [
          {
            "index": 0,
            "value": "Number of orders"
          },
          {
            "index": 1,
            "value": "Total value"
          },
          {
            "index": 2,
            "value": "Average order value"
          }
        ],
        "type": "string"
      }
    ],
    "measures": [
      {
        "displayName": "Count",
        "index": 0,
        "type": "int"
      },
      {
        "displayName": "Value",
        "index": 1,
        "type": "currency",
        "units": "GBP"
      }
    ],
    "reportData": [
      {
        "components": [
          {
            "dimension": 1,
            "dimensionDisplayName": "Order metrics",
            "item": 0,
            "itemDisplayName": "Number of orders",
            "measures": [
              {
                "index": 0,
                "measureDisplayName": "Count",
                "value": 94
              }
            ]
          },
          {
            "dimension": 1,
            "dimensionDisplayName": "Order metrics",
            "item": 1,
            "itemDisplayName": "Total value",
            "measures": [
              {
                "index": 1,
                "measureDisplayName": "Value",
                "value": 3315.18
              }
            ]
          },
          {
            "dimension": 1,
            "dimensionDisplayName": "Order metrics",
            "item": 2,
            "itemDisplayName": "Average order value",
            "measures": [
              {
                "index": 1,
                "measureDisplayName": "Value",
                "value": 35.27
              }
            ]
          }
        ],
        "dimension": 0,
        "dimensionDisplayName": "Period",
        "item": 0,
        "itemDisplayName": "Period 0"
      }
    ],
    "reportInfo": {
      "displayName": "Orders",
      "name": "orders"
    }
  }
]
```

<h3 id="get-order-information-for-a-specific-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get the refunds information for a specific company

<a id="opIdget-commerce-refunds-metrics"></a>

> Code samples

```bash
curl 'https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/assess/commerceMetrics/refunds?reportDate=29-09-2020&periodLength=0&numberOfPeriods=0&periodUnit=Day' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/refunds`

Gets the refunds information for a specific company connection, over one or more periods of time.

<h3 id="get-the-refunds-information-for-a-specific-company-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportDate|query|string|true|The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.|
|periodLength|query|integer|true|The number of months per period. E.g. 2 = 2 months per period.|
|numberOfPeriods|query|integer|true|The number of periods to return.  There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.|
|periodUnit|query|string|true|The period unit of time returned.|
|includeDisplayNames|query|boolean|false|Shows the dimensionDisplayName and itemDisplayName in measures to make the report data human-readable.|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|periodUnit|Day|
|periodUnit|Week|
|periodUnit|Month|
|periodUnit|Year|

> Example responses

> 200 Response

```json
[
  {
    "dimensions": [
      {
        "displayName": "Period",
        "index": 0,
        "items": [
          {
            "displayName": "Period 0",
            "end": "2022-12-31",
            "index": 0,
            "start": "2022-01-01"
          }
        ],
        "type": "datespan"
      },
      {
        "displayName": "Refund metrics",
        "index": 1,
        "items": [
          {
            "index": 0,
            "value": "Number of refunds"
          },
          {
            "index": 1,
            "value": "Value of refunds"
          },
          {
            "index": 2,
            "value": "Refund rate"
          }
        ],
        "type": "string"
      }
    ],
    "measures": [
      {
        "displayName": "Count",
        "index": 0,
        "type": "int"
      },
      {
        "displayName": "Value",
        "index": 1,
        "type": "currency",
        "units": "GBP"
      },
      {
        "displayName": "Percentage",
        "index": 2,
        "type": "percentage",
        "units": "%"
      }
    ],
    "reportData": [
      {
        "components": [
          {
            "dimension": 1,
            "dimensionDisplayName": "Refund metrics",
            "item": 0,
            "itemDisplayName": "Number of refunds",
            "measures": [
              {
                "index": 0,
                "measureDisplayName": "Count",
                "value": 39
              }
            ]
          },
          {
            "dimension": 1,
            "dimensionDisplayName": "Refund metrics",
            "item": 1,
            "itemDisplayName": "Value of refunds",
            "measures": [
              {
                "index": 1,
                "measureDisplayName": "Value",
                "value": 642.82
              }
            ]
          },
          {
            "dimension": 1,
            "dimensionDisplayName": "Refund metrics",
            "item": 2,
            "itemDisplayName": "Refund rate",
            "measures": [
              {
                "index": 2,
                "measureDisplayName": "Percentage",
                "value": 0.41
              }
            ]
          }
        ],
        "dimension": 0,
        "dimensionDisplayName": "Period",
        "item": 0,
        "itemDisplayName": "Period 0"
      }
    ],
    "reportInfo": {
      "displayName": "Refunds",
      "name": "refunds"
    }
  }
]
```

<h3 id="get-the-refunds-information-for-a-specific-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Commerce Revenue Metrics

<a id="opIdget-commerce-revenue-metrics"></a>

> Code samples

```bash
curl 'https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/assess/commerceMetrics/revenue?reportDate=29-09-2020&periodLength=0&numberOfPeriods=0&periodUnit=Day' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/revenue`

Get the revenue and revenue growth for a specific company connection, over one or more periods of time.

<h3 id="commerce-revenue-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportDate|query|string|true|The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.|
|periodLength|query|integer|true|The number of months per period. E.g. 2 = 2 months per period.|
|numberOfPeriods|query|integer|true|The number of periods to return.  There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.|
|periodUnit|query|string|true|The period unit of time returned.|
|includeDisplayNames|query|boolean|false|Shows the dimensionDisplayName and itemDisplayName in measures to make the report data human-readable.|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|periodUnit|Day|
|periodUnit|Week|
|periodUnit|Month|
|periodUnit|Year|

> Example responses

> 200 Response

```json
[
  {
    "dimensions": [
      {
        "displayName": "Period",
        "index": 0,
        "items": [
          {
            "displayName": "Period 0",
            "end": "2022-12-31",
            "index": 0,
            "start": "2022-01-01"
          }
        ],
        "type": "datespan"
      },
      {
        "displayName": "Revenue metrics",
        "index": 1,
        "items": [
          {
            "index": 0,
            "value": "Revenue"
          },
          {
            "index": 1,
            "value": "Revenue growth"
          }
        ],
        "type": "string"
      }
    ],
    "measures": [
      {
        "displayName": "Value",
        "index": 0,
        "type": "currency",
        "units": "GBP"
      },
      {
        "displayName": "Percentage change vs. previous period",
        "index": 1,
        "type": "percentage",
        "units": "%"
      }
    ],
    "reportData": [
      {
        "components": [
          {
            "dimension": 1,
            "dimensionDisplayName": "Revenue metrics",
            "item": 0,
            "itemDisplayName": "Revenue",
            "measures": [
              {
                "index": 0,
                "measureDisplayName": "Value",
                "value": 2392.48
              }
            ]
          },
          {
            "dimension": 1,
            "dimensionDisplayName": "Revenue metrics",
            "item": 1,
            "itemDisplayName": "Revenue growth",
            "measures": [
              {
                "index": 1,
                "measureDisplayName": "Percentage change vs. previous period",
                "value": 276.65
              }
            ]
          }
        ],
        "dimension": 0,
        "dimensionDisplayName": "Period",
        "item": 0,
        "itemDisplayName": "Period 0"
      }
    ],
    "reportInfo": {
      "displayName": "Revenue",
      "name": "revenue"
    }
  }
]
```

<h3 id="commerce-revenue-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Enhanced Balance Sheet

<a id="opIdget-enhanced-balance-sheet"></a>

> Code samples

```bash
curl 'https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/assess/enhancedBalanceSheet?reportDate=29-09-2020&periodLength=0&numberOfPeriods=0' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/connections/{connectionId}/assess/enhancedBalanceSheet`

<aside class="warning">
This operation is deprecated
</aside>

Gets a fully categorized balance sheet statement for a given company, over one or more period(s).

<h3 id="enhanced-balance-sheet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportDate|query|string|true|The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.|
|periodLength|query|integer|true|The number of months per period. E.g. 2 = 2 months per period.|
|numberOfPeriods|query|integer|true|The number of periods to return.  There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.|
|includeDisplayNames|query|boolean|false|Shows the dimensionDisplayName and itemDisplayName in measures to make the report data human-readable.|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "dimensions": [
    {
      "displayName": "Period",
      "index": 0,
      "items": [
        {
          "displayName": "Period 0",
          "end": "2022-12-31",
          "index": 0,
          "start": "2022-01-01"
        }
      ],
      "type": "datespan"
    },
    {
      "displayName": "Category",
      "index": 1,
      "items": [
        {
          "index": 0,
          "value": "Asset"
        },
        {
          "index": 1,
          "value": "Liability"
        },
        {
          "index": 2,
          "value": "Equity"
        },
        {
          "index": 3,
          "value": "Net Assets"
        }
      ],
      "type": "string"
    },
    {
      "displayName": "Sub Type",
      "index": 2,
      "items": [
        {
          "index": 0,
          "value": "Non-current assets"
        },
        {
          "index": 1,
          "value": "Current assets"
        },
        {
          "index": 2,
          "value": "Current liabilities"
        },
        {
          "index": 3,
          "value": "Non-current liabilities"
        },
        {
          "index": 4,
          "value": "Equity"
        }
      ],
      "type": "string"
    },
    {
      "displayName": "Detail Type",
      "index": 3,
      "items": [
        {
          "index": 0,
          "value": "Fixtures and fittings"
        },
        {
          "index": 1,
          "value": "Equipment and machinery"
        },
        {
          "index": 2,
          "value": "Accounts receivable"
        },
        {
          "index": 3,
          "value": "Prepaid expenses"
        },
        {
          "index": 4,
          "value": "Inventory - merchandise"
        },
        {
          "index": 5,
          "value": "Cash"
        },
        {
          "index": 6,
          "value": "Taxes payable"
        },
        {
          "index": 7,
          "value": "Other current liabilities"
        },
        {
          "index": 8,
          "value": "Accounts payable"
        },
        {
          "index": 9,
          "value": "Due to employees"
        },
        {
          "index": 10,
          "value": "Interest payable"
        },
        {
          "index": 11,
          "value": "Notes payable"
        },
        {
          "index": 12,
          "value": "Accrued liabilities"
        },
        {
          "index": 13,
          "value": "Credit cards"
        },
        {
          "index": 14,
          "value": "Loans payable"
        },
        {
          "index": 15,
          "value": "Retained earnings"
        }
      ],
      "type": "string"
    },
    {
      "displayName": "Accounts",
      "index": 4,
      "items": [
        {
          "dataType": "account",
          "displayName": "Office Equipment",
          "id": "724ca578-8b5d-4bdb-ad45-e3820eee9de9",
          "index": 0
        },
        {
          "dataType": "account",
          "displayName": "Computer Equipment",
          "id": "be3eb911-034b-42de-95db-0d58ac978b7f",
          "index": 1
        },
        {
          "dataType": "account",
          "displayName": "Accounts Receivable",
          "id": "1b6266d1-1e44-46c5-8eb5-a8f98e03124e",
          "index": 2
        },
        {
          "dataType": "account",
          "displayName": "Prepayments",
          "id": "22de1660-d745-4809-a363-16b134607e66",
          "index": 3
        },
        {
          "dataType": "account",
          "displayName": "Inventory",
          "id": "e5d7612c-1671-47b4-b733-5db48363fcd0",
          "index": 4
        },
        {
          "dataType": "account",
          "displayName": "Business Current Account",
          "id": "dbcaf288-2b39-4b95-8ab3-42202ab15918",
          "index": 5
        },
        {
          "dataType": "account",
          "displayName": "VAT",
          "id": "3a872b81-d1af-4d31-9bfa-a37280b8f68c",
          "index": 6
        },
        {
          "dataType": "account",
          "displayName": "Rounding",
          "id": "d19852a2-e292-4eb9-a909-9dadb95c0e76",
          "index": 7
        },
        {
          "dataType": "account",
          "displayName": "Historical Adjustment",
          "id": "9be6382f-6b33-402d-b448-0db1dbf67a98",
          "index": 8
        },
        {
          "dataType": "account",
          "displayName": "Accounts Payable",
          "id": "53bf27a7-7497-4c61-9887-dfaad5c6d80a",
          "index": 9
        },
        {
          "dataType": "account",
          "displayName": "Unpaid Expense Claims",
          "id": "8852a857-aa9d-4706-839f-638e9d6b5a66",
          "index": 10
        },
        {
          "dataType": "account",
          "displayName": "Interest Payables",
          "id": "3b58f7ff-fa16-453a-9931-f020816d76e7",
          "index": 11
        },
        {
          "dataType": "account",
          "displayName": "John Smith",
          "id": "8636effc-50fb-45ba-8b2b-18336fa29b6b",
          "index": 12
        },
        {
          "dataType": "account",
          "displayName": "Accruals",
          "id": "e2530acd-91c8-48f8-a35f-935dbd7432e2",
          "index": 13
        },
        {
          "dataType": "account",
          "displayName": "Credit Card Control Account",
          "id": "62060aae-e5a6-4db5-a3bb-6abec6d47959",
          "index": 14
        },
        {
          "dataType": "account",
          "displayName": "Loan",
          "id": "55008233-40e7-41ac-84af-2255fa028c2e",
          "index": 15
        },
        {
          "dataType": "account",
          "displayName": "Retained Earnings",
          "id": "39225d6f-3722-4508-ac3f-a2f6ec96ad31",
          "index": 16
        },
        {
          "dataType": "account",
          "displayName": "Current Year Earnings",
          "id": "78828dd9-6008-4662-b43c-e9d87907fd2b",
          "index": 17
        }
      ],
      "type": "recordRef"
    }
  ],
  "measures": [
    {
      "displayName": "Value",
      "index": 0,
      "type": "currency",
      "units": "GBP"
    },
    {
      "displayName": "Percentage change vs previous period",
      "index": 1,
      "type": "percentage",
      "units": "%"
    }
  ],
  "reportData": [
    {
      "components": [
        {
          "components": [
            {
              "components": [
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 0,
                      "itemDisplayName": "Office Equipment",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 2116634.16
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 0,
                  "itemDisplayName": "FixturesFittings",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 2116634.16
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 1,
                      "itemDisplayName": "Computer Equipment",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 2095078.83
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 1,
                  "itemDisplayName": "EquipmentMachinery",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 2095078.83
                    }
                  ]
                }
              ],
              "dimension": 2,
              "dimensionDisplayName": "Sub Type",
              "item": 0,
              "itemDisplayName": "NonCurrent",
              "measures": [
                {
                  "index": 0,
                  "measureDisplayName": "Value",
                  "value": 4211712.99
                }
              ]
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 2,
                      "itemDisplayName": "Accounts Receivable",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 59801.56
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 2,
                  "itemDisplayName": "AccountsReceivable",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 59801.56
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 3,
                      "itemDisplayName": "Prepayments",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 17370.58
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 3,
                  "itemDisplayName": "PrepaidExpenses",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 17370.58
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 4,
                      "itemDisplayName": "Inventory",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 76076.15
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 4,
                  "itemDisplayName": "InventoryMerchandise",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 76076.15
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 5,
                      "itemDisplayName": "Business Current Account",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 250411.79
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 5,
                  "itemDisplayName": "Cash",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 250411.79
                    }
                  ]
                }
              ],
              "dimension": 2,
              "dimensionDisplayName": "Sub Type",
              "item": 1,
              "itemDisplayName": "Current",
              "measures": [
                {
                  "index": 0,
                  "measureDisplayName": "Value",
                  "value": 403660.08
                }
              ]
            }
          ],
          "dimension": 1,
          "dimensionDisplayName": "Category",
          "item": 0,
          "itemDisplayName": "Asset",
          "measures": [
            {
              "index": 0,
              "measureDisplayName": "Value",
              "value": 4615373.07
            }
          ]
        },
        {
          "components": [
            {
              "components": [
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 6,
                      "itemDisplayName": "VAT",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 22517.58
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 6,
                  "itemDisplayName": "TaxesPayable",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 22517.58
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 7,
                      "itemDisplayName": "Rounding",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 8,
                      "itemDisplayName": "Historical Adjustment",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 7315.78
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 7,
                  "itemDisplayName": "Other",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 7315.78
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 9,
                      "itemDisplayName": "Accounts Payable",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 39512.94
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 8,
                  "itemDisplayName": "AccountsPayable",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 39512.94
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 11,
                      "itemDisplayName": "Interest Payables",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 1232.43
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 10,
                  "itemDisplayName": "InterestPayable",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 1232.43
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 12,
                      "itemDisplayName": "John Smith",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 1575.93
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 11,
                  "itemDisplayName": "NotesPayable",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 1575.93
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 13,
                      "itemDisplayName": "Accruals",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 235869.49
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 12,
                  "itemDisplayName": "AccruedLiabilities",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 235869.49
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 14,
                      "itemDisplayName": "Credit Card Control Account",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 22844.77
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 13,
                  "itemDisplayName": "CreditCards",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 22844.77
                    }
                  ]
                }
              ],
              "dimension": 2,
              "dimensionDisplayName": "Sub Type",
              "item": 2,
              "itemDisplayName": "Current",
              "measures": [
                {
                  "index": 0,
                  "measureDisplayName": "Value",
                  "value": 330868.92
                }
              ]
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 10,
                      "itemDisplayName": "Unpaid Expense Claims",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 0
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 9,
                  "itemDisplayName": "DueToEmployees",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 0
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 15,
                      "itemDisplayName": "Loan",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 638999.6
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 14,
                  "itemDisplayName": "LoansPayable",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 638999.6
                    }
                  ]
                }
              ],
              "dimension": 2,
              "dimensionDisplayName": "Sub Type",
              "item": 3,
              "itemDisplayName": "NonCurrent",
              "measures": [
                {
                  "index": 0,
                  "measureDisplayName": "Value",
                  "value": 638999.6
                }
              ]
            }
          ],
          "dimension": 1,
          "dimensionDisplayName": "Category",
          "item": 1,
          "itemDisplayName": "Liability",
          "measures": [
            {
              "index": 0,
              "measureDisplayName": "Value",
              "value": 969868.52
            }
          ]
        },
        {
          "components": [
            {
              "components": [
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 16,
                      "itemDisplayName": "Retained Earnings",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 3599540.05
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 17,
                      "itemDisplayName": "Current Year Earnings",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 45964.5
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 15,
                  "itemDisplayName": "RetainedEarnings",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 3645504.55
                    }
                  ]
                }
              ],
              "dimension": 2,
              "dimensionDisplayName": "Sub Type",
              "item": 4,
              "itemDisplayName": "Equity",
              "measures": [
                {
                  "index": 0,
                  "measureDisplayName": "Value",
                  "value": 3645504.55
                }
              ]
            }
          ],
          "dimension": 1,
          "dimensionDisplayName": "Category",
          "item": 2,
          "itemDisplayName": "Equity",
          "measures": [
            {
              "index": 0,
              "measureDisplayName": "Value",
              "value": 3645504.55
            }
          ]
        },
        {
          "dimension": 1,
          "dimensionDisplayName": "Category",
          "item": 3,
          "itemDisplayName": "Net Assets",
          "measures": [
            {
              "index": 0,
              "measureDisplayName": "Value",
              "value": 3645504.55
            }
          ]
        }
      ],
      "dimension": 0,
      "dimensionDisplayName": "Period",
      "item": 0,
      "itemDisplayName": "Period 0"
    }
  ],
  "reportInfo": {
    "displayName": "Enhanced Balance Sheet",
    "name": "enhanced_balance_sheet"
  }
}
```

<h3 id="enhanced-balance-sheet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Enhanced Profit and Loss

<a id="opIdget-enhanced-profit-and-loss"></a>

> Code samples

```bash
curl 'https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/assess/enhancedProfitAndLoss?reportDate=29-09-2020&periodLength=0&numberOfPeriods=0' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/connections/{connectionId}/assess/enhancedProfitAndLoss`

<aside class="warning">
This operation is deprecated
</aside>

Gets a fully categorized profit and loss statement for a given company, over one or more period(s).

<h3 id="enhanced-profit-and-loss-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportDate|query|string|true|The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.|
|periodLength|query|integer|true|The number of months per period. E.g. 2 = 2 months per period.|
|numberOfPeriods|query|integer|true|The number of periods to return.  There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.|
|includeDisplayNames|query|boolean|false|Shows the dimensionDisplayName and itemDisplayName in measures to make the report data human-readable.|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "dimensions": [
    {
      "displayName": "Period",
      "index": 0,
      "items": [
        {
          "displayName": "Period 0",
          "end": "2022-01-31",
          "index": 0,
          "start": "2021-02-01"
        }
      ],
      "type": "datespan"
    },
    {
      "displayName": "Category",
      "index": 1,
      "items": [
        {
          "index": 0,
          "value": "Income"
        },
        {
          "index": 1,
          "value": "Expense"
        },
        {
          "index": 2,
          "value": "Gross Profit"
        },
        {
          "index": 3,
          "value": "Net Operating Profit"
        },
        {
          "index": 4,
          "value": "Net Profit"
        }
      ],
      "type": "string"
    },
    {
      "displayName": "Sub Type",
      "index": 2,
      "items": [
        {
          "index": 0,
          "value": "Operating"
        },
        {
          "index": 1,
          "value": "Cost of sales"
        },
        {
          "index": 2,
          "value": "Non-operating"
        }
      ],
      "type": "string"
    },
    {
      "displayName": "Detail Type",
      "index": 3,
      "items": [
        {
          "index": 0,
          "value": "Other operating income"
        },
        {
          "index": 1,
          "value": "Materials"
        },
        {
          "index": 2,
          "value": "Marketing"
        },
        {
          "index": 3,
          "value": "Depreciation and depletion"
        },
        {
          "index": 4,
          "value": "Entertainment"
        },
        {
          "index": 5,
          "value": "General and Administrative"
        },
        {
          "index": 6,
          "value": "Repairs and maintenance"
        },
        {
          "index": 7,
          "value": "Distribution"
        },
        {
          "index": 8,
          "value": "Buildings rent and lease"
        },
        {
          "index": 9,
          "value": "Subscription fees"
        },
        {
          "index": 10,
          "value": "Travel"
        },
        {
          "index": 11,
          "value": "Bank charges"
        },
        {
          "index": 12,
          "value": "Taxes"
        },
        {
          "index": 13,
          "value": "Labour"
        },
        {
          "index": 14,
          "value": "Amortization"
        },
        {
          "index": 15,
          "value": "Interest"
        },
        {
          "index": 16,
          "value": "Other non-operating expenses"
        }
      ],
      "type": "string"
    },
    {
      "displayName": "Accounts",
      "index": 4,
      "items": [
        {
          "dataType": "account",
          "displayName": "Sales",
          "id": "72df89d2-512b-4455-af51-a6b563733842",
          "index": 0
        },
        {
          "dataType": "account",
          "displayName": "Other Revenue",
          "id": "68794a8f-b22d-4520-b97b-025b7cb10f94",
          "index": 1
        },
        {
          "dataType": "account",
          "displayName": "Purchases",
          "id": "7403e960-5b72-42ff-abf4-c870ad8910bd",
          "index": 2
        },
        {
          "dataType": "account",
          "displayName": "Advertising & Marketing",
          "id": "868591ad-f9c2-4956-a5ec-c32c1d48c6f3",
          "index": 3
        },
        {
          "dataType": "account",
          "displayName": "Depreciation Expense",
          "id": "940c8a59-3348-4a0b-a1b1-781d9f29cc8b",
          "index": 4
        },
        {
          "dataType": "account",
          "displayName": "Entertainment-100% business",
          "id": "e7ac3baa-cfbe-40c1-a172-83d22e84435b",
          "index": 5
        },
        {
          "dataType": "account",
          "displayName": "General Expenses",
          "id": "b5e801e8-8dbc-4390-ac99-3b0fff54a89f",
          "index": 6
        },
        {
          "dataType": "account",
          "displayName": "Light, Power, Heating",
          "id": "5360066d-1474-49f6-a7a5-c66d5f6032ba",
          "index": 7
        },
        {
          "dataType": "account",
          "displayName": "Motor Vehicle Expenses",
          "id": "138a8eb3-5c08-4e59-a3bc-892119694447",
          "index": 8
        },
        {
          "dataType": "account",
          "displayName": "Postage, Freight & Courier",
          "id": "1734ff00-2a17-45b4-8db6-2dc2e832c460",
          "index": 9
        },
        {
          "dataType": "account",
          "displayName": "Printing & Stationery",
          "id": "7aa7988a-ff61-4cb8-bef3-15395355d108",
          "index": 10
        },
        {
          "dataType": "account",
          "displayName": "Rent",
          "id": "9cbe5fe4-ca60-4792-8bf1-de01fb7010aa",
          "index": 11
        },
        {
          "dataType": "account",
          "displayName": "Repairs & Maintenance",
          "id": "04f7111b-55d4-4efc-b329-1bd5c791933a",
          "index": 12
        },
        {
          "dataType": "account",
          "displayName": "Subscriptions",
          "id": "7d8d0322-f452-47de-a8e8-54b0130e6f38",
          "index": 13
        },
        {
          "dataType": "account",
          "displayName": "Telephone & Internet",
          "id": "043b6bcb-dfe6-4c97-9b4c-f9b300fe3f03",
          "index": 14
        },
        {
          "dataType": "account",
          "displayName": "Travel - National",
          "id": "df62060b-41cc-4bf2-9de7-c7e537b5663a",
          "index": 15
        },
        {
          "dataType": "account",
          "displayName": "Audit & Accountancy fees",
          "id": "eef78ed1-dfed-447c-bdba-3a49fb2c044b",
          "index": 16
        },
        {
          "dataType": "account",
          "displayName": "Bank Fees",
          "id": "f3aa84fe-5c31-4107-b207-7e0419f636d7",
          "index": 17
        },
        {
          "dataType": "account",
          "displayName": "Cleaning",
          "id": "c16f5c35-8283-47da-9d09-5fecb183b0cb",
          "index": 18
        },
        {
          "dataType": "account",
          "displayName": "Corporation Tax",
          "id": "fb3210ef-edeb-48af-bb49-b85d40c1e6bb",
          "index": 19
        },
        {
          "dataType": "account",
          "displayName": "Wages",
          "id": "7f6a0e92-65be-4333-9a0a-d981b03bedd1",
          "index": 20
        },
        {
          "dataType": "account",
          "displayName": "Purchase Discounts",
          "id": "e8a0a24e-2dab-46b1-bfe1-6e92551c04e8",
          "index": 21
        },
        {
          "dataType": "account",
          "displayName": "Amortization",
          "id": "4378ddba-36b4-4b35-9970-bd972b20d137",
          "index": 22
        },
        {
          "dataType": "account",
          "displayName": "Interest Paid (operating)",
          "id": "78785fd7-f197-4c34-aa17-6e76b9255d34",
          "index": 23
        },
        {
          "dataType": "account",
          "displayName": "Charitable and Political Donations",
          "id": "cbf82e0d-87a7-464d-b567-9274ea94a1c0",
          "index": 24
        }
      ],
      "type": "recordRef"
    }
  ],
  "measures": [
    {
      "displayName": "Value",
      "index": 0,
      "type": "currency",
      "units": "GBP"
    },
    {
      "displayName": "Percentage change vs previous period",
      "index": 1,
      "type": "percentage",
      "units": "%"
    }
  ],
  "reportData": [
    {
      "components": [
        {
          "components": [
            {
              "components": [
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 0,
                      "itemDisplayName": "Sales",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 1412199.76
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 1,
                      "itemDisplayName": "Other Revenue",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 10202.64
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 0,
                  "itemDisplayName": "OtherOperatingIncome",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 1422402.4
                    }
                  ]
                }
              ],
              "dimension": 2,
              "dimensionDisplayName": "Sub Type",
              "item": 0,
              "itemDisplayName": "Operating",
              "measures": [
                {
                  "index": 0,
                  "measureDisplayName": "Value",
                  "value": 1422402.4
                }
              ]
            }
          ],
          "dimension": 1,
          "dimensionDisplayName": "Category",
          "item": 0,
          "itemDisplayName": "Income",
          "measures": [
            {
              "index": 0,
              "measureDisplayName": "Value",
              "value": 1422402.4
            }
          ]
        },
        {
          "components": [
            {
              "components": [
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 2,
                      "itemDisplayName": "Purchases",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 301322.16
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 21,
                      "itemDisplayName": "Purchase Discounts",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 5367.29
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 1,
                  "itemDisplayName": "Materials",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 306689.45
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 20,
                      "itemDisplayName": "Wages",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 144000
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 13,
                  "itemDisplayName": "Labour",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 144000
                    }
                  ]
                }
              ],
              "dimension": 2,
              "dimensionDisplayName": "Sub Type",
              "item": 1,
              "itemDisplayName": "CostOfSales",
              "measures": [
                {
                  "index": 0,
                  "measureDisplayName": "Value",
                  "value": 450689.45
                }
              ]
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 3,
                      "itemDisplayName": "Advertising & Marketing",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 269531.7
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 2,
                  "itemDisplayName": "Marketing",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 269531.7
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 4,
                      "itemDisplayName": "Depreciation Expense",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 13256.93
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 3,
                  "itemDisplayName": "DepreciationDepletion",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 13256.93
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 5,
                      "itemDisplayName": "Entertainment-100% business",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 15526.09
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 4,
                  "itemDisplayName": "Entertainment",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 15526.09
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 6,
                      "itemDisplayName": "General Expenses",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 16654.32
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 7,
                      "itemDisplayName": "Light, Power, Heating",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 14859.1
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 10,
                      "itemDisplayName": "Printing & Stationery",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 15404.82
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 14,
                      "itemDisplayName": "Telephone & Internet",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 540
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 16,
                      "itemDisplayName": "Audit & Accountancy fees",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 46.96
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 18,
                      "itemDisplayName": "Cleaning",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 1560
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 5,
                  "itemDisplayName": "GeneralAdministrative",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 49065.2
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 8,
                      "itemDisplayName": "Motor Vehicle Expenses",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 13531.13
                        }
                      ]
                    },
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 12,
                      "itemDisplayName": "Repairs & Maintenance",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 8890.04
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 6,
                  "itemDisplayName": "RepairsMaintenance",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 22421.17
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 9,
                      "itemDisplayName": "Postage, Freight & Courier",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 12593.28
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 7,
                  "itemDisplayName": "Distribution",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 12593.28
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 11,
                      "itemDisplayName": "Rent",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 96000
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 8,
                  "itemDisplayName": "BuildingRentLease",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 96000
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 13,
                      "itemDisplayName": "Subscriptions",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 480
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 9,
                  "itemDisplayName": "SubscriptionFees",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 480
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 15,
                      "itemDisplayName": "Travel - National",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 15505.18
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 10,
                  "itemDisplayName": "Travel",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 15505.18
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 17,
                      "itemDisplayName": "Bank Fees",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 14529.79
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 11,
                  "itemDisplayName": "BankCharges",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 14529.79
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 22,
                      "itemDisplayName": "Amortization",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 68.64
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 14,
                  "itemDisplayName": "Amortization",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 68.64
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 23,
                      "itemDisplayName": "Interest Paid (operating)",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 4729.93
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 15,
                  "itemDisplayName": "Interest",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 4729.93
                    }
                  ]
                }
              ],
              "dimension": 2,
              "dimensionDisplayName": "Sub Type",
              "item": 0,
              "itemDisplayName": "Operating",
              "measures": [
                {
                  "index": 0,
                  "measureDisplayName": "Value",
                  "value": 513707.91
                }
              ]
            },
            {
              "components": [
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 19,
                      "itemDisplayName": "Corporation Tax",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 10801.01
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 12,
                  "itemDisplayName": "Taxes",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 10801.01
                    }
                  ]
                },
                {
                  "components": [
                    {
                      "dimension": 4,
                      "dimensionDisplayName": "Accounts",
                      "item": 24,
                      "itemDisplayName": "Charitable and Political Donations",
                      "measures": [
                        {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 4205.28
                        }
                      ]
                    }
                  ],
                  "dimension": 3,
                  "dimensionDisplayName": "Detail Type",
                  "item": 16,
                  "itemDisplayName": "OtherNonOperatingExpenses",
                  "measures": [
                    {
                      "index": 0,
                      "measureDisplayName": "Value",
                      "value": 4205.28
                    }
                  ]
                }
              ],
              "dimension": 2,
              "dimensionDisplayName": "Sub Type",
              "item": 2,
              "itemDisplayName": "NonOperating",
              "measures": [
                {
                  "index": 0,
                  "measureDisplayName": "Value",
                  "value": 15006.29
                }
              ]
            }
          ],
          "dimension": 1,
          "dimensionDisplayName": "Category",
          "item": 1,
          "itemDisplayName": "Expense",
          "measures": [
            {
              "index": 0,
              "measureDisplayName": "Value",
              "value": 979403.65
            }
          ]
        },
        {
          "dimension": 1,
          "dimensionDisplayName": "Category",
          "item": 2,
          "itemDisplayName": "Gross Profit",
          "measures": [
            {
              "index": 0,
              "measureDisplayName": "Value",
              "value": 971712.95
            }
          ]
        },
        {
          "dimension": 1,
          "dimensionDisplayName": "Category",
          "item": 3,
          "itemDisplayName": "Net Operating Profit",
          "measures": [
            {
              "index": 0,
              "measureDisplayName": "Value",
              "value": 458005.04
            }
          ]
        },
        {
          "dimension": 1,
          "dimensionDisplayName": "Category",
          "item": 4,
          "itemDisplayName": "Net Profit",
          "measures": [
            {
              "index": 0,
              "measureDisplayName": "Value",
              "value": 442998.75
            }
          ]
        }
      ],
      "dimension": 0,
      "dimensionDisplayName": "Period",
      "item": 0,
      "itemDisplayName": "Period 0"
    }
  ],
  "reportInfo": {
    "displayName": "Enhanced Profit and Loss",
    "name": "enhanced_profit_and_loss"
  }
}
```

<h3 id="enhanced-profit-and-loss-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## List financial metrics

<a id="opIdget-enhanced-financial-metrics"></a>

> Code samples

```bash
curl 'https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/assess/financialMetrics?reportDate=29-09-2020&periodLength=0&numberOfPeriods=0' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/connections/{connectionId}/assess/financialMetrics`

<aside class="warning">
This operation is deprecated
</aside>

Gets all the available financial metrics for a given company, over one or more periods.

<h3 id="list-financial-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportDate|query|string|true|The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.|
|periodLength|query|integer|true|The number of months per period. E.g. 2 = 2 months per period.|
|numberOfPeriods|query|integer|true|The number of periods to return.  There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.|
|showMetricInputs|query|boolean|false|If set to true, then the system includes the input values within the response.|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "currency": "GBP",
  "errors": [
    {
      "message": "Account categories data has not been synced",
      "type": "DataNotSynced"
    }
  ],
  "metrics": [
    {
      "errors": [
        {
          "details": {
            "accountIds": [
              "123",
              "456",
              "789"
            ]
          },
          "message": "There are uncategorized accounts, see details.",
          "type": "UncategorizedAccounts"
        }
      ],
      "key": "EBITDA",
      "metricUnit": "Money",
      "name": "string",
      "periods": [
        {
          "errors": [
            {
              "details": {
                "missingData": [
                  "Expense.Operating.Interest",
                  "Expense.NonOperating.Interest"
                ]
              },
              "massage": "Missing account data",
              "type": "MissingAccountData"
            }
          ],
          "fromDate": "2022-02-12",
          "inputs": [
            {
              "name": "string",
              "value": 0
            }
          ],
          "toDate": "2022-12-31",
          "value": 0
        }
      ]
    }
  ],
  "periodUnit": "Month"
}
```

<h3 id="list-financial-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FinancialMetrics](#schemafinancialmetrics)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get key metrics for subscription revenue

<a id="opIdget-recurring-revenue-metrics"></a>

> Code samples

```bash
curl https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/assess/subscriptions/mrr \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/connections/{connectionId}/assess/subscriptions/mrr`

Gets key metrics for subscription revenue.

<h3 id="get-key-metrics-for-subscription-revenue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "dimensions": [
    {
      "displayName": "string",
      "index": 0,
      "items": [
        {
          "index": 0
        }
      ],
      "type": "string"
    }
  ],
  "errors": [
    {
      "details": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "message": "string",
      "type": "string"
    }
  ],
  "measures": [
    {
      "displayName": "string",
      "index": 0,
      "type": "string",
      "units": "string"
    }
  ],
  "reportData": [
    {
      "components": [
        {}
      ],
      "dimension": 0,
      "dimensionDisplayName": "string",
      "item": 0,
      "itemDisplayName": "string",
      "measures": [
        {
          "index": 0,
          "measureDisplayName": "string",
          "value": 0
        }
      ]
    }
  ],
  "reportInfo": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="get-key-metrics-for-subscription-revenue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Request production of key subscription revenue metrics

<a id="opIdrequest-recurring-revenue-metrics"></a>

> Code samples

```bash
curl https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/assess/subscriptions/process \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/connections/{connectionId}/assess/subscriptions/process`

Request production of key subscription revenue metrics.

<h3 id="request-production-of-key-subscription-revenue-metrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "dimensions": [
    {
      "displayName": "string",
      "index": 0,
      "items": [
        {
          "index": 0
        }
      ],
      "type": "string"
    }
  ],
  "errors": [
    {
      "details": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "message": "string",
      "type": "string"
    }
  ],
  "measures": [
    {
      "displayName": "string",
      "index": 0,
      "type": "string",
      "units": "string"
    }
  ],
  "reportData": [
    {
      "components": [
        {}
      ],
      "dimension": 0,
      "dimensionDisplayName": "string",
      "item": 0,
      "itemDisplayName": "string",
      "measures": [
        {
          "index": 0,
          "measureDisplayName": "string",
          "value": 0
        }
      ]
    }
  ],
  "reportInfo": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="request-production-of-key-subscription-revenue-metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="assess-api-excel-reports">Excel reports</h1>

Downloadable reports

## Get status of Excel report

<a id="opIdget-excel-report-generation-status"></a>

> Code samples

```bash
curl 'https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/assess/excel?reportType=audit' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/assess/excel`

Returns the status of the latest report requested.

<h3 id="get-status-of-excel-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportType|query|string|true|The type of report you want to generate and download.|
|companyId|path|string(uuid)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|reportType|audit|
|reportType|enhancedFinancials|

> Example responses

> 200 Response

```json
{
  "errorMessage": "string",
  "fileSize": 0,
  "inProgress": true,
  "lastGenerated": "2023-01-25T22:36:05.125Z",
  "lastInvocationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "queued": "2023-01-25T22:36:05.125Z",
  "reportType": "string",
  "success": true
}
```

<h3 id="get-status-of-excel-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ExcelStatus](#schemaexcelstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Generate an Excel report

<a id="opIdgenerate-excel-report"></a>

> Code samples

```bash
curl 'https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/assess/excel?reportType=audit' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /data/companies/{companyId}/assess/excel`

Generate an Excel report which can subsequently be downloaded.

<h3 id="generate-an-excel-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportType|query|string|true|The type of report you want to generate and download.|
|companyId|path|string(uuid)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|reportType|audit|
|reportType|enhancedFinancials|

> Example responses

> 200 Response

```json
{
  "errorMessage": "string",
  "fileSize": 0,
  "inProgress": true,
  "lastGenerated": "2023-01-25T22:36:05.125Z",
  "lastInvocationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "queued": "2023-01-25T22:36:05.125Z",
  "reportType": "string",
  "success": true
}
```

<h3 id="generate-an-excel-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ExcelStatus](#schemaexcelstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Download generated excel report

<a id="opIdget-excel-report"></a>

> Code samples

```bash
curl 'https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/assess/excel/download?reportType=audit' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/assess/excel/download`

Download the previously generated Excel report to a local drive.

<h3 id="download-generated-excel-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportType|query|string|true|The type of report you want to generate and download.|
|companyId|path|string(uuid)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|reportType|audit|
|reportType|enhancedFinancials|

<h3 id="download-generated-excel-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Download generated excel report

<a id="opIddownload-excel-report"></a>

> Code samples

```bash
curl 'https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/assess/excel/download?reportType=audit' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /data/companies/{companyId}/assess/excel/download`

<aside class="warning">
This operation is deprecated
</aside>

Download the previously generated Excel report to a local drive.

<h3 id="download-generated-excel-report-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportType|query|string|true|The type of report you want to generate and download.|
|companyId|path|string(uuid)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|reportType|audit|
|reportType|enhancedFinancials|

<h3 id="download-generated-excel-report-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get the marketing metrics from an accounting source for a given company.

<a id="opIdget-accounting-marketing-metrics"></a>

> Code samples

```bash
curl 'https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/assess/accountingMetrics/marketing?reportDate=29-09-2020&periodLength=0&numberOfPeriods=0&periodUnit=Day' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/connections/{connectionId}/assess/accountingMetrics/marketing`

Request an Excel report for download.

<h3 id="get-the-marketing-metrics-from-an-accounting-source-for-a-given-company-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reportDate|query|string|true|The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.|
|periodLength|query|integer|true|The number of months per period. E.g. 2 = 2 months per period.|
|numberOfPeriods|query|integer|true|The number of periods to return.  There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.|
|periodUnit|query|string|true|The period unit of time returned.|
|includeDisplayNames|query|boolean|false|Shows the dimensionDisplayName and itemDisplayName in measures to make the report data human-readable.|
|showInputValues|query|boolean|false|If set to true, then the system includes the input values within the response.|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|periodUnit|Day|
|periodUnit|Week|
|periodUnit|Month|
|periodUnit|Year|

> Example responses

> 200 Response

```json
[
  {
    "dimensions": [
      {
        "displayName": "Period",
        "index": 0,
        "items": [
          {
            "displayName": "Period 0",
            "end": "2022-12-31",
            "index": 0,
            "start": "2022-01-01"
          }
        ],
        "type": "datespan"
      },
      {
        "displayName": "Marketing metrics",
        "index": 1,
        "items": [
          {
            "index": 0,
            "value": "Marketing to revenue"
          },
          {
            "index": 1,
            "value": "Marketing to expense"
          }
        ],
        "type": "string"
      }
    ],
    "measures": [
      {
        "displayName": "Percentage",
        "index": 0,
        "type": "percentage",
        "units": "%"
      },
      {
        "displayName": "Percentage change vs previous period",
        "index": 1,
        "type": "percentage",
        "units": "%"
      }
    ],
    "reportData": [
      {
        "components": [
          {
            "dimension": 1,
            "dimensionDisplayName": "Marketing metrics",
            "item": 0,
            "itemDisplayName": "Marketing to revenue",
            "measures": [
              {
                "index": 0,
                "measureDisplayName": "Percentage",
                "value": 564.17
              },
              {
                "index": 1,
                "measureDisplayName": "Percentage change vs previous period",
                "value": 8.33
              }
            ]
          },
          {
            "dimension": 1,
            "dimensionDisplayName": "Marketing metrics",
            "item": 1,
            "itemDisplayName": "Marketing to expense",
            "measures": [
              {
                "index": 0,
                "measureDisplayName": "Percentage",
                "value": 27.63
              },
              {
                "index": 1,
                "measureDisplayName": "Percentage change vs previous period",
                "value": 0.12
              }
            ]
          }
        ],
        "dimension": 0,
        "dimensionDisplayName": "Period",
        "item": 0,
        "itemDisplayName": "Period 0"
      }
    ],
    "reportInfo": {
      "displayName": "Marketing metrics",
      "name": "marketing_metrics"
    }
  }
]
```

<h3 id="get-the-marketing-metrics-from-an-accounting-source-for-a-given-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="assess-api-categories">Categories</h1>

Categorisation

## List account categories

<a id="opIdlist-available-account-categories"></a>

> Code samples

```bash
curl https://example.com/data/assess/accounts/categories \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/assess/accounts/categories`

<aside class="warning">
This operation is deprecated
</aside>

Lists available account categories Codat's categorisation engine can provide. 

> Example responses

> 200 Response

```json
[
  {
    "detailType": "Cash",
    "detailTypeDescription": "Use 'Cash' for cash in the bank or held on premise. This should include overdrawn accounts.",
    "detailTypeDisplayName": "Cash",
    "subtype": "Current",
    "subtypeDisplayName": "Current assets",
    "type": "Asset"
  }
]
```

<h3 id="list-account-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Categories](#schemacategories)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## List suggested and confirmed account categories

<a id="opIdlist-accounts-categories"></a>

> Code samples

```bash
curl 'https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/assess/accounts/categories?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories`

<aside class="warning">
This operation is deprecated
</aside>

Lists suggested and confirmed chart of account categories for the given company and data connection.

<h3 id="list-suggested-and-confirmed-account-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|orderBy|query|string|false|Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "_links": {
    "current": {
      "href": "/data/companies/companyId/connections/connectionId/assess/accounts/categories?page=1&pageSize=10"
    },
    "self": {
      "href": "/data/companies/companyId/connections/connectionId/assess/accounts/categories"
    }
  },
  "pageNumber": 1,
  "pageSize": 10,
  "results": [
    {
      "accountRef": {
        "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
        "name": "string"
      },
      "confirmed": {
        "detailType": "Cash",
        "modifiedDate": "2019-08-24T14:15:22Z",
        "subtype": "Current",
        "type": "Asset"
      },
      "suggested": {
        "detailType": "Cash",
        "modifiedDate": "2019-08-24T14:15:22Z",
        "subtype": "Current",
        "type": "Asset"
      }
    }
  ],
  "totalResults": 1
}
```

<h3 id="list-suggested-and-confirmed-account-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CategorisedAccounts](#schemacategorisedaccounts)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Confirm categories for accounts

<a id="opIdupdate-accounts-categories"></a>

> Code samples

```bash
curl https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/assess/accounts/categories \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "categories": [
      {
        "accountRef": {
          "id": "13d946f0-c5d5-42bc-b092-97ece17923ab"
        },
        "confirmed": {
          "detailType": "Cash",
          "subtype": "Current",
          "type": "Asset"
        }
      }
    ]
  }'
```

`PATCH /data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories`

<aside class="warning">
This operation is deprecated
</aside>

Comfirms the categories for all or a batch of accounts for a specific connection.

> Body parameter

```json
{
  "categories": [
    {
      "accountRef": {
        "id": "13d946f0-c5d5-42bc-b092-97ece17923ab"
      },
      "confirmed": {
        "detailType": "Cash",
        "subtype": "Current",
        "type": "Asset"
      }
    }
  ]
}
```

<h3 id="confirm-categories-for-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|
|body|body|[ConfirmCategories](#schemaconfirmcategories)|false|none|
|» categories|body|[object]|false|List of confirmed account categories set manually by the user. |
|» » accountRef|body|object|false|none|
|» » » id|body|string|true|A unique, persistent identifier for this record|
|» » confirmed|body|[AccountCategory](#schemaaccountcategory)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "accountRef": {
      "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
      "name": "string"
    },
    "confirmed": {
      "detailType": "Cash",
      "modifiedDate": "2019-08-24T14:15:22Z",
      "subtype": "Current",
      "type": "Asset"
    },
    "suggested": {
      "detailType": "Cash",
      "modifiedDate": "2019-08-24T14:15:22Z",
      "subtype": "Current",
      "type": "Asset"
    }
  }
]
```

<h3 id="confirm-categories-for-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="confirm-categories-for-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CategorisedAccount](#schemacategorisedaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get suggested and/or confirmed category for a specific account

<a id="opIdget-account-category"></a>

> Code samples

```bash
curl https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/assess/accounts/string/categories \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories`

<aside class="warning">
This operation is deprecated
</aside>

Get category for specific nominal account.

<h3 id="get-suggested-andor-confirmed-category-for-a-specific-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|
|accountId|path|string|true|Nominal account id|

> Example responses

> 200 Response

```json
{
  "accountRef": {
    "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
    "name": "string"
  },
  "confirmed": {
    "detailType": "Cash",
    "modifiedDate": "2019-08-24T14:15:22Z",
    "subtype": "Current",
    "type": "Asset"
  },
  "suggested": {
    "detailType": "Cash",
    "modifiedDate": "2019-08-24T14:15:22Z",
    "subtype": "Current",
    "type": "Asset"
  }
}
```

<h3 id="get-suggested-andor-confirmed-category-for-a-specific-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CategorisedAccount](#schemacategorisedaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Patch account categories

<a id="opIdupdate-account-category"></a>

> Code samples

```bash
curl https://example.com/data/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/assess/accounts/string/categories \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "confirmed": {
      "detailType": "Cash",
      "subtype": "Current",
      "type": "Asset"
    }
  }'
```

`PATCH /data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories`

<aside class="warning">
This operation is deprecated
</aside>

Update category for a specific nominal account

> Body parameter

```json
{
  "confirmed": {
    "detailType": "Cash",
    "subtype": "Current",
    "type": "Asset"
  }
}
```

<h3 id="patch-account-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|
|accountId|path|string|true|Nominal account id|
|body|body|[ConfirmCategory](#schemaconfirmcategory)|false|none|
|» confirmed|body|[AccountCategory](#schemaaccountcategory)|true|none|

> Example responses

> 200 Response

```json
{
  "accountRef": {
    "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
    "name": "string"
  },
  "confirmed": {
    "detailType": "Cash",
    "modifiedDate": "2019-08-24T14:15:22Z",
    "subtype": "Current",
    "type": "Asset"
  },
  "suggested": {
    "detailType": "Cash",
    "modifiedDate": "2019-08-24T14:15:22Z",
    "subtype": "Current",
    "type": "Asset"
  }
}
```

<h3 id="patch-account-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CategorisedAccount](#schemacategorisedaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="assess-api-webhooks">Webhooks</h1>

## postAccount categories updated

`POST Account categories updated`

> Body parameter

```json
{
  "alertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "clientId": "5e505642-9024-474d-9434-e5a44f505cc5",
  "clientName": "Peach Inc.",
  "companyId": "f1c35bdc-1546-41b9-baf4-3f31135af968",
  "data": {
    "modifiedDate": "2019-08-24T14:15:22Z"
  },
  "dataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "message": "Account categories updated for company f1c35bdc-1546-41b9-baf4-3f31135af968.",
  "ruleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ruleType": "Account Categories Updated"
}
```

<h3 id="postaccount-categories-updated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountCategoriesUpdatedWebhook](#schemaaccountcategoriesupdatedwebhook)|false|Triggered anytime that Codat updates the suggested fields or a user updates the confirmed fields.|
|» alertId|body|string(uuid)|false|Unique identifier of the alert.|
|» clientId|body|string(uuid)|false|Unique identifier for your client in Codat.|
|» clientName|body|string|false|Name of your client in Codat.|
|» companyId|body|string(uuid)|false|Unique identifier for your SMB in Codat.|
|» data|body|object|false|none|
|» » modifiedDate|body|string|false|The date on which this account categories were last modified in Codat.|
|» dataConnectionId|body|string(uuid)|false|Unique identifier for a company's data connection.|
|» message|body|string|false|A human readable message about the webhook.|
|» ruleId|body|string(uuid)|false|Unique identifier for the rule.|
|» ruleType|body|string|false|The type of rule.|

<h3 id="postaccount-categories-updated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return a 200 status to indicate that the webhook was received successfully.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

# Schemas

<h2 id="tocS_AccountCategoriesUpdatedWebhook">AccountCategoriesUpdatedWebhook</h2>
<!-- backwards compatibility -->
<a id="schemaaccountcategoriesupdatedwebhook"></a>
<a id="schema_AccountCategoriesUpdatedWebhook"></a>
<a id="tocSaccountcategoriesupdatedwebhook"></a>
<a id="tocsaccountcategoriesupdatedwebhook"></a>

```json
{
  "alertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "clientId": "5e505642-9024-474d-9434-e5a44f505cc5",
  "clientName": "Peach Inc.",
  "companyId": "f1c35bdc-1546-41b9-baf4-3f31135af968",
  "data": {
    "modifiedDate": "2019-08-24T14:15:22Z"
  },
  "dataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "message": "Account categories updated for company f1c35bdc-1546-41b9-baf4-3f31135af968.",
  "ruleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ruleType": "Account Categories Updated"
}
```

Webhook request body for account categories updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertId|string(uuid)|false|none|Unique identifier of the alert.|
|clientId|string(uuid)|false|none|Unique identifier for your client in Codat.|
|clientName|string|false|none|Name of your client in Codat.|
|companyId|string(uuid)|false|none|Unique identifier for your SMB in Codat.|
|data|object|false|none|none|
|dataConnectionId|string(uuid)|false|none|Unique identifier for a company's data connection.|
|message|string|false|none|A human readable message about the webhook.|
|ruleId|string(uuid)|false|none|Unique identifier for the rule.|
|ruleType|string|false|none|The type of rule.|

<h2 id="tocS_AccountCategory">AccountCategory</h2>
<!-- backwards compatibility -->
<a id="schemaaccountcategory"></a>
<a id="schema_AccountCategory"></a>
<a id="tocSaccountcategory"></a>
<a id="tocsaccountcategory"></a>

```json
{
  "detailType": "Cash",
  "subtype": "Current",
  "type": "Asset"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detailType|string|false|none|Most granular chart of account type.|
|subtype|string|false|none|The account subtype.|
|type|string|false|none|The top level account type.|

<h2 id="tocS_Categories">Categories</h2>
<!-- backwards compatibility -->
<a id="schemacategories"></a>
<a id="schema_Categories"></a>
<a id="tocScategories"></a>
<a id="tocscategories"></a>

```json
[
  {
    "detailType": "Cash",
    "detailTypeDescription": "Use 'Cash' for cash in the bank or held on premise. This should include overdrawn accounts.",
    "detailTypeDisplayName": "Cash",
    "subtype": "Current",
    "subtypeDisplayName": "Current assets",
    "type": "Asset"
  }
]
```

<h2 id="tocS_CategorisedAccount">CategorisedAccount</h2>
<!-- backwards compatibility -->
<a id="schemacategorisedaccount"></a>
<a id="schema_CategorisedAccount"></a>
<a id="tocScategorisedaccount"></a>
<a id="tocscategorisedaccount"></a>

```json
{
  "accountRef": {
    "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
    "name": "string"
  },
  "confirmed": {
    "detailType": "Cash",
    "modifiedDate": "2019-08-24T14:15:22Z",
    "subtype": "Current",
    "type": "Asset"
  },
  "suggested": {
    "detailType": "Cash",
    "modifiedDate": "2019-08-24T14:15:22Z",
    "subtype": "Current",
    "type": "Asset"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountRef|object|false|none|An object containing account reference data.|
|confirmed|object|false|none|none|
|suggested|object|false|none|none|

<h2 id="tocS_CategorisedAccounts">CategorisedAccounts</h2>
<!-- backwards compatibility -->
<a id="schemacategorisedaccounts"></a>
<a id="schema_CategorisedAccounts"></a>
<a id="tocScategorisedaccounts"></a>
<a id="tocscategorisedaccounts"></a>

```json
{
  "results": [
    {
      "accountRef": {
        "id": "13d946f0-c5d5-42bc-b092-97ece17923ab",
        "name": "string"
      },
      "confirmed": {
        "detailType": "Cash",
        "modifiedDate": "2019-08-24T14:15:22Z",
        "subtype": "Current",
        "type": "Asset"
      },
      "suggested": {
        "detailType": "Cash",
        "modifiedDate": "2019-08-24T14:15:22Z",
        "subtype": "Current",
        "type": "Asset"
      }
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[CategorisedAccount](#schemacategorisedaccount)]|false|none|A list confirmed and suggested account categories.|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_ConfirmCategories">ConfirmCategories</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmcategories"></a>
<a id="schema_ConfirmCategories"></a>
<a id="tocSconfirmcategories"></a>
<a id="tocsconfirmcategories"></a>

```json
{
  "categories": [
    {
      "accountRef": {
        "id": "13d946f0-c5d5-42bc-b092-97ece17923ab"
      },
      "confirmed": {
        "detailType": "Cash",
        "subtype": "Current",
        "type": "Asset"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[object]|false|none|List of confirmed account categories set manually by the user. |

<h2 id="tocS_ConfirmCategory">ConfirmCategory</h2>
<!-- backwards compatibility -->
<a id="schemaconfirmcategory"></a>
<a id="schema_ConfirmCategory"></a>
<a id="tocSconfirmcategory"></a>
<a id="tocsconfirmcategory"></a>

```json
{
  "confirmed": {
    "detailType": "Cash",
    "subtype": "Current",
    "type": "Asset"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confirmed|[AccountCategory](#schemaaccountcategory)|true|none|none|

<h2 id="tocS_Currency">Currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
"GBP"
```

The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.

## Unknown currencies

In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction. 

There are only a very small number of edge cases where this currency code is returned by the Codat system.

<h2 id="tocS_CurrencyRate">CurrencyRate</h2>
<!-- backwards compatibility -->
<a id="schemacurrencyrate"></a>
<a id="schema_CurrencyRate"></a>
<a id="tocScurrencyrate"></a>
<a id="tocscurrencyrate"></a>

```json
0
```

Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.

Currency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.  

Where the currency rate is provided by the underlying accounting platform, it will be available from Codat with the same precision (up to a maximum of 9 decimal places). 

For accounting platforms which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.

## Examples with base currency of GBP

| Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (GBP) |
| :--------------- | :------------- | :------------ | :------------------------- |
| **USD**          | $20            | 0.781         | £15.62                     |
| **EUR**          | €20            | 0.885         | £17.70                     |
| **RUB**          | ₽20            | 0.011         | £0.22                      |

## Examples with base currency of USD

| Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (USD) |
| :--------------- | :------------- | :------------ | :------------------------- |
| **GBP**          | £20            | 1.277         | $25.54                     |
| **EUR**          | €20            | 1.134         | $22.68                     |
| **RUB**          | ₽20            | 0.015         | $0.30                      |

<h2 id="tocS_DataIntegrityDetails">DataIntegrityDetails</h2>
<!-- backwards compatibility -->
<a id="schemadataintegritydetails"></a>
<a id="schema_DataIntegrityDetails"></a>
<a id="tocSdataintegritydetails"></a>
<a id="tocsdataintegritydetails"></a>

```json
{
  "amount": 0,
  "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "currency": "GBP",
  "date": "2022-10-23T00:00:00Z",
  "description": "string",
  "id": "string",
  "matches": [
    {
      "amount": "string",
      "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "currency": "GBP",
      "date": "string",
      "description": "string",
      "id": "string",
      "type": "string"
    }
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|The transaction value.|
|connectionId|string(uuid)|false|read-only|ID GUID representing the connection of the accounting or banking platform.|
|currency|[Currency](#schemacurrency)|false|none|The currency of the transaction.|
|date|string|false|none|The date of the transaction.|
|description|string|false|none|The transaction description.|
|id|string|false|none|ID GUID of the transaction.|
|matches|[object]|false|none|none|
|type|string|false|none|The data type of the record.|

<h2 id="tocS_DataIntegrityStatus">DataIntegrityStatus</h2>
<!-- backwards compatibility -->
<a id="schemadataintegritystatus"></a>
<a id="schema_DataIntegrityStatus"></a>
<a id="tocSdataintegritystatus"></a>
<a id="tocsdataintegritystatus"></a>

```json
{
  "amounts": {
    "currency": "GBP",
    "max": 2450,
    "min": 130
  },
  "connectionIds": {
    "source": [
      "d5a8d1b2-b38a-4e44-8641-548ad43be6bb",
      "da8c9f39-8af9-4a98-964b-f1e207942837"
    ],
    "target": [
      "3d7ce25a-c107-44bc-8e0c-36c10bdd14e0",
      "a5300eac-01fa-4a77-b5b0-ea0b86a3be69"
    ]
  },
  "dates": {
    "maxDate": "2021-12-16T12:12:53.441Z",
    "maxOverlappingDate": "2021-11-27T12:19:33.441Z",
    "minDate": "2021-09-17T12:09:33.441Z",
    "minOverlappingDate": "2021-09-30T12:09:13.441Z"
  },
  "statusInfo": {
    "currentStatus": "Unknown",
    "lastMatched": "2021-10-24T14:15:22Z",
    "statusMessage": "string"
  },
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The data type which the data type in the URL has been matched against. For example, if you've matched accountTransactions and banking-transactions, and you call this endpoint with accountTransactions in the URL, this property would be banking-transactions.|
|amounts|object|false|none|Only returned for transactions. For accounts, there is nothing returned.|
|connectionIds|object|false|none|none|
|dates|object|false|none|Only returned for transactions. For accounts, there is nothing returned.|
|statusInfo|object|false|none|none|

<h2 id="tocS_DataIntegritySummary">DataIntegritySummary</h2>
<!-- backwards compatibility -->
<a id="schemadataintegritysummary"></a>
<a id="schema_DataIntegritySummary"></a>
<a id="tocSdataintegritysummary"></a>
<a id="tocsdataintegritysummary"></a>

```json
{
  "type": "string",
  "byAmount": {
    "currency": "GBP",
    "matchPercentage": 0,
    "matched": 0,
    "total": 0,
    "unmatched": 0
  },
  "byCount": {
    "matchPercentage": 0,
    "matched": 0,
    "total": 0,
    "unmatched": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The data type which the data type in the URL has been matched against. For example, if you've matched accountTransactions and banking-transactions, and you call this endpoint with accountTransactions in the URL, this property would be banking-transactions.|
|byAmount|object|false|none|none|
|byCount|object|false|none|none|

<h2 id="tocS_Details">Details</h2>
<!-- backwards compatibility -->
<a id="schemadetails"></a>
<a id="schema_Details"></a>
<a id="tocSdetails"></a>
<a id="tocsdetails"></a>

```json
{
  "results": [
    {
      "amount": 0,
      "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "currency": "GBP",
      "date": "2022-10-23T00:00:00Z",
      "description": "string",
      "id": "string",
      "matches": [
        {
          "amount": "string",
          "connectionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "currency": "GBP",
          "date": "string",
          "description": "string",
          "id": "string",
          "type": "string"
        }
      ],
      "type": "string"
    }
  ],
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[DataIntegrityDetails](#schemadataintegritydetails)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_EnhancedCashFlowTransactions">EnhancedCashFlowTransactions</h2>
<!-- backwards compatibility -->
<a id="schemaenhancedcashflowtransactions"></a>
<a id="schema_EnhancedCashFlowTransactions"></a>
<a id="tocSenhancedcashflowtransactions"></a>
<a id="tocsenhancedcashflowtransactions"></a>

```json
{
  "dataSources": [
    {
      "accounts": [
        {
          "accountName": "string",
          "accountProvider": "string",
          "accountType": "string",
          "currency": "GBP",
          "currentBalance": 0,
          "platformName": "string",
          "sourceRef": {
            "Example": {
              "value": {
                "sourceRef": {
                  "sourceType": "Banking"
                }
              }
            }
          }
        }
      ]
    }
  ],
  "reportInfo": {
    "Example 1": {
      "value": {
        "companyName": "string",
        "generatedDate": "2023-01-26T07:36:40.487Z",
        "pageNumber": 0,
        "pageSize": 0,
        "reportName": "string",
        "totalResults": 0
      }
    }
  },
  "reportItems": [
    {
      "transactions": [
        {
          "amount": 0,
          "currency": "string",
          "date": "2022-10-23T00:00:00Z",
          "description": "string",
          "id": "string",
          "sourceRef": {
            "Example": {
              "value": {
                "sourceRef": {
                  "sourceType": "Banking"
                }
              }
            }
          },
          "transactionCategory": {
            "confidence": 0,
            "levels": [
              "string"
            ]
          }
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSources|[object]|false|none|none|
|reportInfo|object|false|none|Report additional information, which is specific to Assess reports|
|reportItems|[object]|false|none|none|

<h2 id="tocS_EnhancedInvoicesReport">EnhancedInvoicesReport</h2>
<!-- backwards compatibility -->
<a id="schemaenhancedinvoicesreport"></a>
<a id="schema_EnhancedInvoicesReport"></a>
<a id="tocSenhancedinvoicesreport"></a>
<a id="tocsenhancedinvoicesreport"></a>

```json
{
  "reportInfo": {
    "Example 1": {
      "value": {
        "companyName": "string",
        "generatedDate": "2023-01-26T07:36:40.487Z",
        "pageNumber": 0,
        "pageSize": 0,
        "reportName": "string",
        "totalResults": 0
      }
    }
  },
  "reportItems": [
    {
      "invoices": [
        {
          "amountDue": 0,
          "currency": "GBP",
          "customerRef": {
            "companyName": "string",
            "id": "string"
          },
          "dueDate": "2022-10-23T00:00:00Z",
          "id": "string",
          "invoiceNumber": "string",
          "issueDate": "2022-10-23T00:00:00Z",
          "paidOnDate": "2022-10-23T00:00:00Z",
          "payments": [
            {
              "accountRef": {
                "id": "string",
                "name": "string"
              },
              "currency": "GBP",
              "currencyRate": 0,
              "customerRef": {
                "companyName": "string",
                "id": "string"
              },
              "date": "2022-10-23T00:00:00Z",
              "id": "string",
              "lines": [
                {
                  "allocatedOnDate": "2022-10-23T00:00:00Z",
                  "amount": 0,
                  "links": [
                    {
                      "amount": 0,
                      "currencyRate": 0,
                      "id": "string",
                      "type": "Unknown"
                    }
                  ]
                }
              ],
              "metadata": {
                "isDeleted": true
              },
              "note": "string",
              "paymentMethodRef": {
                "id": "string",
                "name": "string"
              },
              "reference": "string",
              "supplementalData": {
                "content": {
                  "property1": {
                    "property1": null,
                    "property2": null
                  },
                  "property2": {
                    "property1": null,
                    "property2": null
                  }
                }
              },
              "totalAmount": 0,
              "modifiedDate": "2022-10-23T00:00:00Z",
              "sourceModifiedDate": "2022-10-23T00:00:00Z"
            }
          ],
          "status": "Unknown",
          "totalAmount": 0
        }
      ]
    }
  ]
}
```

The enhanced invoices report takes the key elements of the Invoices report verifying those marked as paid in the accounting platform have actually been paid by matching with the bank statement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportInfo|object|false|none|Report additional information, which is specific to Assess reports|
|reportItems|[object]|false|none|none|

<h2 id="tocS_EnhancedReport">EnhancedReport</h2>
<!-- backwards compatibility -->
<a id="schemaenhancedreport"></a>
<a id="schema_EnhancedReport"></a>
<a id="tocSenhancedreport"></a>
<a id="tocsenhancedreport"></a>

```json
{
  "reportInfo": {
    "companyName": "ABC LTD",
    "generatedDate": "2022-01-01",
    "reportName": "EnhancedProfitAndLossAccounts"
  },
  "reportItems": [
    {
      "accountCategory": {
        "levels": [
          {
            "confidence": 0.95,
            "levelName": "Income"
          },
          {
            "confidence": 0.9,
            "levelName": "Revenue"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "13931cbf-ea06-4d6e-9538-a8457fa66011",
      "accountName": "Sales UK",
      "balance": 70,
      "date": "2022-01-01"
    },
    {
      "accountCategory": {
        "lastUpdated": "2022-01-02",
        "levels": [
          {
            "confidence": 0.95,
            "levelName": "Income"
          },
          {
            "confidence": 0.9,
            "levelName": "Revenue"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "13931cbf-ea06-4d6e-9538-a8457fa66011",
      "accountName": "Sales US",
      "balance": 30,
      "date": "2022-01-01"
    },
    {
      "accountCategory": {
        "lastUpdated": "2022-01-02",
        "levels": [
          {
            "confidence": 0.95,
            "levelName": "Income"
          },
          {
            "confidence": 0.95,
            "levelName": "Revenue"
          },
          {
            "confidence": 0.8,
            "levelName": "Online"
          }
        ],
        "status": "Suggested"
      },
      "accountId": "13931cbf-ea06-4d6e-9538-a8457fa66011",
      "accountName": "Amazon",
      "balance": 70,
      "date": "2022-01-01"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportInfo|object|false|none|none|
|reportItems|[object]|false|none|An array of report items.|

<h2 id="tocS_ExcelStatus">ExcelStatus</h2>
<!-- backwards compatibility -->
<a id="schemaexcelstatus"></a>
<a id="schema_ExcelStatus"></a>
<a id="tocSexcelstatus"></a>
<a id="tocsexcelstatus"></a>

```json
{
  "errorMessage": "string",
  "fileSize": 0,
  "inProgress": true,
  "lastGenerated": "2023-01-25T22:36:05.125Z",
  "lastInvocationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "queued": "2023-01-25T22:36:05.125Z",
  "reportType": "string",
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string|false|none|none|
|fileSize|integer|false|none|none|
|inProgress|boolean|false|none|none|
|lastGenerated|string|false|none|In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:<br><br>```<br>2020-10-08T22:40:50Z<br>2021-01-01T00:00:00<br>```<br><br><br><br>When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:<br><br>- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`<br>- Unqualified local time: `2021-11-15T01:00:00`<br>- UTC time offsets: `2021-11-15T01:00:00-05:00`<br><br>> Time zones<br>> <br>> Not all dates from Codat will contain information about time zones.  <br>> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.|
|lastInvocationId|string|false|none|none|
|queued|string|false|none|none|
|reportType|string|false|none|none|
|success|boolean|false|none|none|

<h2 id="tocS_FinancialMetrics">FinancialMetrics</h2>
<!-- backwards compatibility -->
<a id="schemafinancialmetrics"></a>
<a id="schema_FinancialMetrics"></a>
<a id="tocSfinancialmetrics"></a>
<a id="tocsfinancialmetrics"></a>

```json
{
  "currency": "GBP",
  "errors": [
    {
      "message": "Account categories data has not been synced",
      "type": "DataNotSynced"
    }
  ],
  "metrics": [
    {
      "errors": [
        {
          "details": {
            "missingData": [
              "Expense.Operating.Interest",
              "Expense.NonOperating.Interest"
            ]
          },
          "message": "There are uncategorized accounts IDs, see details.",
          "type": "UncategorizedAccounts"
        }
      ],
      "key": "Unknown",
      "metricUnit": "Ratio",
      "name": "string",
      "periods": [
        {
          "errors": [
            {
              "details": {
                "missingData": [
                  "Expense.Operating.Interest",
                  "Expense.NonOperating.Interest"
                ]
              },
              "massage": "Missing account data",
              "type": "MissingAccountData"
            }
          ],
          "fromDate": "1970-01-01",
          "inputs": [
            {
              "name": "string",
              "value": 0
            }
          ],
          "toDate": "1970-01-01",
          "value": 0
        }
      ]
    }
  ],
  "periodUnit": "Month"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[Currency](#schemacurrency)|false|none|The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, e.g. _GBP_.<br><br>## Unknown currencies<br><br>In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction. <br><br>There are only a very small number of edge cases where this currency code is returned by the Codat system.|
|errors|[object]|false|none|If there are no errors, an empty array is returned.|
|metrics|[object]|false|none|none|
|periodUnit|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|periodUnit|Month|
|periodUnit|Week|
|periodUnit|Day|

<h2 id="tocS_HalRef">HalRef</h2>
<!-- backwards compatibility -->
<a id="schemahalref"></a>
<a id="schema_HalRef"></a>
<a id="tocShalref"></a>
<a id="tocshalref"></a>

```json
{
  "href": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string(uri-reference)|false|none|none|

<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "current": {
    "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
  },
  "self": {
    "href": "/companies/{id}/data/{dataType}"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current|[HalRef](#schemahalref)|true|none|none|
|next|[HalRef](#schemahalref)|false|none|none|
|previous|[HalRef](#schemahalref)|false|none|none|
|self|[HalRef](#schemahalref)|true|none|none|

<h2 id="tocS_PagingInfo">PagingInfo</h2>
<!-- backwards compatibility -->
<a id="schemapaginginfo"></a>
<a id="schema_PagingInfo"></a>
<a id="tocSpaginginfo"></a>
<a id="tocspaginginfo"></a>

```json
{
  "_links": {
    "current": {
      "href": "/companies/{id}/data/{dataType}?page=1&pageSize=10"
    },
    "pageNumber": 1,
    "pageSize": 10,
    "self": {
      "href": "/companies/{id}/data/{dataType}"
    },
    "totalResults": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_Report">Report</h2>
<!-- backwards compatibility -->
<a id="schemareport"></a>
<a id="schema_Report"></a>
<a id="tocSreport"></a>
<a id="tocsreport"></a>

```json
{
  "dimensions": [
    {
      "displayName": "string",
      "index": 0,
      "items": [
        {
          "index": 0
        }
      ],
      "type": "string"
    }
  ],
  "errors": [
    {
      "details": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "message": "string",
      "type": "string"
    }
  ],
  "measures": [
    {
      "displayName": "string",
      "index": 0,
      "type": "string",
      "units": "string"
    }
  ],
  "reportData": [
    {
      "components": [
        {}
      ],
      "dimension": 0,
      "dimensionDisplayName": "string",
      "item": 0,
      "itemDisplayName": "string",
      "measures": [
        {
          "index": 0,
          "measureDisplayName": "string",
          "value": 0
        }
      ]
    }
  ],
  "reportInfo": {
    "property1": "string",
    "property2": "string"
  }
}
```

Assess reports follow a consistent structure. Reports contain four sections of information:

1. Report definition information such as:
  a. The report info (e.g. enhanced_profit_and_loss).
  b. The display name of the report (e.g. Enhanced Profit and Loss).
2. Information about the dimension contained in the reports such as:
  a. The type of dimension (e.g. datetime, recordRef).
  b. The display name of the dimension (e.g. Period, Category type, Category sub type).
  c. The details about each item within the dimension (e.g. displayName:"Jan 2022", start:"...", end:"...", id:"...", name:"...").
3. Information about the measures contained in the report such as:
  a. The display name of the measure (e.g. value of account, percentage change).
  b. The type of the measure (e.g. currency, percentage).
  c. The unit of the measure (e.g. %, GBP).
4. The data for the report. When the *includeDisplayName* parameter is set to *true*, it shows the *dimensionDisplayName* and *itemDisplayName* to make the data human-readable. The default setting for *includeDisplayName* is *false*.

Reports can be rendered as follows (ordering is implicit rather than explicit):

![A table showing an example of how a report can be rendered](https://files.readme.io/1fa20ca-Report1.png)

# Data model

## Dimensions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|[object]|false|none|none|
|errors|[object]|false|none|none|
|measures|[object]|false|none|none|
|reportData|[object]|false|none|none|
|reportInfo|object|false|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "metadata": [
    {
      "amounts": {
        "currency": "GBP",
        "max": 2450,
        "min": 130
      },
      "connectionIds": {
        "source": [
          "d5a8d1b2-b38a-4e44-8641-548ad43be6bb",
          "da8c9f39-8af9-4a98-964b-f1e207942837"
        ],
        "target": [
          "3d7ce25a-c107-44bc-8e0c-36c10bdd14e0",
          "a5300eac-01fa-4a77-b5b0-ea0b86a3be69"
        ]
      },
      "dates": {
        "maxDate": "2021-12-16T12:12:53.441Z",
        "maxOverlappingDate": "2021-11-27T12:19:33.441Z",
        "minDate": "2021-09-17T12:09:33.441Z",
        "minOverlappingDate": "2021-09-30T12:09:13.441Z"
      },
      "statusInfo": {
        "currentStatus": "Unknown",
        "lastMatched": "2021-10-24T14:15:22Z",
        "statusMessage": "string"
      },
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[[DataIntegrityStatus](#schemadataintegritystatus)]|false|none|none|

<h2 id="tocS_Summaries">Summaries</h2>
<!-- backwards compatibility -->
<a id="schemasummaries"></a>
<a id="schema_Summaries"></a>
<a id="tocSsummaries"></a>
<a id="tocssummaries"></a>

```json
{
  "summaries": [
    {
      "type": "string",
      "byAmount": {
        "currency": "GBP",
        "matchPercentage": 0,
        "matched": 0,
        "total": 0,
        "unmatched": 0
      },
      "byCount": {
        "matchPercentage": 0,
        "matched": 0,
        "total": 0,
        "unmatched": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summaries|[[DataIntegritySummary](#schemadataintegritysummary)]|false|none|none|
