<h1 id="bank-feeds-api">Bank Feeds API v2.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Bank Feeds API enables your SMB users to set up bank feeds from accounts in your application to supported accounting platforms.

A bank feed is a connection between a source bank account—in your application—and a target bank account in a supported accounting package.

[Read more...](https://docs.codat.io/bank-feeds-api/overview)

[See our OpenAPI spec](https://github.com/codatio/oas)

Base URLs:

* <a href="https://api.codat.io">https://api.codat.io</a> - Production

<a href="https://www.codat.io/legals/">Terms of service</a>
Email: <a href="mailto:support@codat.io">Codat</a> 

# Authentication

* API Key (auth_header)
    - Parameter Name: **Authorization**, in: header. The word "Basic" followed by a space and your API Key, base64 encoded, which can be found [here](https://app.codat.io/developers/api-keys)

<h1 id="bank-feeds-api-bank-feed-accounts">Bank feed accounts</h1>

Bank feed bank accounts

## List bank feed bank accounts

<a id="opIdget-bank-feeds"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/connectionInfo/bankFeedAccounts \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts`

Get BankFeed BankAccounts for a single data source connected to a single company.

<h3 id="list-bank-feed-bank-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "accountName": "account-081",
    "accountNumber": "12345670",
    "accountType": "Credit",
    "balance": 99.99,
    "currency": "GBP",
    "id": "acc-002",
    "modifiedDate": "2023-01-09T14:14:14.1057478Z",
    "sortCode": "123456",
    "status": "pending"
  }
]
```

<h3 id="list-bank-feed-bank-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BankFeedAccounts](#schemabankfeedaccounts)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Create bank feed bank accounts

<a id="opIdcreate-bank-feed"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/connectionInfo/bankFeedAccounts \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '[
    {
      "accountName": "account-081",
      "accountNumber": "12345670",
      "accountType": "Credit",
      "balance": 99.99,
      "currency": "GBP",
      "id": "acc-002",
      "modifiedDate": "2023-01-09T14:14:14.1057478Z",
      "sortCode": "123456",
      "status": "pending"
    }
  ]'
```

`PUT /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts`

Put BankFeed BankAccounts for a single data source connected to a single company.

> Body parameter

```json
[
  {
    "accountName": "account-081",
    "accountNumber": "12345670",
    "accountType": "Credit",
    "balance": 99.99,
    "currency": "GBP",
    "id": "acc-002",
    "modifiedDate": "2023-01-09T14:14:14.1057478Z",
    "sortCode": "123456",
    "status": "pending"
  }
]
```

<h3 id="create-bank-feed-bank-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|
|body|body|[BankFeedAccounts](#schemabankfeedaccounts)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "accountName": "account-081",
    "accountNumber": "12345670",
    "accountType": "Credit",
    "balance": 99.99,
    "currency": "GBP",
    "id": "acc-002",
    "modifiedDate": "2023-01-09T14:14:14.1057478Z",
    "sortCode": "123456",
    "status": "pending"
  }
]
```

<h3 id="create-bank-feed-bank-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BankFeedAccounts](#schemabankfeedaccounts)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Update bank feed bank account

<a id="opIdupdate-bank-feed"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/connectionInfo/bankFeedAccounts/8a210b68-6988-11ed-a1eb-0242ac120002 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountName": "account-081",
    "accountNumber": "12345670",
    "accountType": "Credit",
    "balance": 99.99,
    "currency": "GBP",
    "id": "acc-002",
    "modifiedDate": "2023-01-09T14:14:14.1057478Z",
    "sortCode": "123456",
    "status": "pending"
  }'
```

`PATCH /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts/{accountId}`

Update a single BankFeed BankAccount for a single data source connected to a single company.

> Body parameter

```json
{
  "accountName": "account-081",
  "accountNumber": "12345670",
  "accountType": "Credit",
  "balance": 99.99,
  "currency": "GBP",
  "id": "acc-002",
  "modifiedDate": "2023-01-09T14:14:14.1057478Z",
  "sortCode": "123456",
  "status": "pending"
}
```

<h3 id="update-bank-feed-bank-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|
|accountId|path|string(uuid)|true|Unique identifier for an account|
|body|body|[BankFeedAccount](#schemabankfeedaccount)|false|none|
|» accountName|body|string \| null|false|The bank account name|
|» accountNumber|body|string \| null|false|The account number|
|» accountType|body|string \| null|false|The type of bank account e.g. Credit|
|» balance|body|number \| null|false|The latest balance for the bank account|
|» currency|body|string \| null|false|The currency e.g. USD|
|» feedStartDate|body|[DateTime](#schemadatetime)|false|In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:<br><br>```<br>2020-10-08T22:40:50Z<br>2021-01-01T00:00:00<br>```<br><br><br><br>When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:<br><br>- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`<br>- Unqualified local time: `2021-11-15T01:00:00`<br>- UTC time offsets: `2021-11-15T01:00:00-05:00`<br><br>> Time zones<br>> <br>> Not all dates from Codat will contain information about time zones.  <br>> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.|
|» id|body|string|true|Unique ID for the bank feed account|
|» modifiedDate|body|[DateTime](#schemadatetime)|false|The last date the bank account was modified|
|» sortCode|body|string \| null|false|The sort code|
|» status|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "accountName": "account-081",
  "accountNumber": "12345670",
  "accountType": "Credit",
  "balance": 99.99,
  "currency": "GBP",
  "id": "acc-002",
  "modifiedDate": "2023-01-09T14:14:14.1057478Z",
  "sortCode": "123456",
  "status": "pending"
}
```

<h3 id="update-bank-feed-bank-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BankFeedAccount](#schemabankfeedaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="bank-feeds-api-bank-account-transactions">Bank account transactions</h1>

Bank feed bank accounts

## List bank transactions for bank account

<a id="opIdlist-bank-account-transactions"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/bankAccounts/8a210b68-6988-11ed-a1eb-0242ac120002/bankTransactions?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}/bankTransactions`

Gets bank transactions for a given bank account ID

<h3 id="list-bank-transactions-for-bank-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|
|accountId|path|string(uuid)|true|Unique identifier for an account|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|orderBy|query|string|false|Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "accountId": "string",
      "transactions": [
        {
          "amount": 0,
          "balance": 0,
          "clearedOnDate": "2022-10-23T00:00:00Z",
          "counterparty": "string",
          "description": "string",
          "id": "string",
          "reconciled": true,
          "reference": "string",
          "transactionType": "Unknown",
          "modifiedDate": "2022-10-23T00:00:00Z",
          "sourceModifiedDate": "2022-10-23T00:00:00Z"
        }
      ]
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

<h3 id="list-bank-transactions-for-bank-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BankTransactionsResponse](#schemabanktransactionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## List push options for bank account bank transactions

<a id="opIdget-create-bank-account-model"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/options/bankAccounts/8a210b68-6988-11ed-a1eb-0242ac120002/bankTransactions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/options/bankAccounts/{accountId}/bankTransactions`

Gets the options of pushing bank account transactions.

<h3 id="list-push-options-for-bank-account-bank-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|
|accountId|path|string(uuid)|true|Unique identifier for an account|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "displayName": "string",
  "options": [
    {
      "description": "string",
      "displayName": "string",
      "required": true,
      "type": "Array",
      "value": "string"
    }
  ],
  "properties": {
    "property1": {
      "description": "string",
      "displayName": "string",
      "options": [
        {
          "description": "string",
          "displayName": "string",
          "required": true,
          "type": "Array",
          "value": "string"
        }
      ],
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": true,
      "type": "Array",
      "validation": {
        "information": [
          {
            "details": "string",
            "field": "string",
            "ref": "http://example.com"
          }
        ],
        "warnings": [
          {
            "details": "string",
            "field": "string",
            "ref": "http://example.com"
          }
        ]
      }
    },
    "property2": {
      "description": "string",
      "displayName": "string",
      "options": [
        {
          "description": "string",
          "displayName": "string",
          "required": true,
          "type": "Array",
          "value": "string"
        }
      ],
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": true,
      "type": "Array",
      "validation": {
        "information": [
          {
            "details": "string",
            "field": "string",
            "ref": "http://example.com"
          }
        ],
        "warnings": [
          {
            "details": "string",
            "field": "string",
            "ref": "http://example.com"
          }
        ]
      }
    }
  },
  "required": true,
  "type": "Array",
  "validation": {
    "information": [
      {
        "details": "string",
        "field": "string",
        "ref": "http://example.com"
      }
    ],
    "warnings": [
      {
        "details": "string",
        "field": "string",
        "ref": "http://example.com"
      }
    ]
  }
}
```

<h3 id="list-push-options-for-bank-account-bank-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PushOption](#schemapushoption)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Create bank transactions

<a id="opIdcreate-bank-transactions"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/push/bankAccounts/8a210b68-6988-11ed-a1eb-0242ac120002/bankTransactions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "accountId": "string",
    "transactions": [
      {
        "amount": 0,
        "balance": 0,
        "clearedOnDate": "2022-10-23T00:00:00Z",
        "counterparty": "string",
        "description": "string",
        "id": "string",
        "reconciled": true,
        "reference": "string",
        "transactionType": "Unknown",
        "modifiedDate": "2022-10-23T00:00:00Z",
        "sourceModifiedDate": "2022-10-23T00:00:00Z"
      }
    ]
  }'
```

`POST /companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions`

Posts bank transactions to the accounting package for a given company.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) for integrations that support POST methods.

> Body parameter

```json
{
  "accountId": "string",
  "transactions": [
    {
      "amount": 0,
      "balance": 0,
      "clearedOnDate": "2022-10-23T00:00:00Z",
      "counterparty": "string",
      "description": "string",
      "id": "string",
      "reconciled": true,
      "reference": "string",
      "transactionType": "Unknown",
      "modifiedDate": "2022-10-23T00:00:00Z",
      "sourceModifiedDate": "2022-10-23T00:00:00Z"
    }
  ]
}
```

<h3 id="create-bank-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|
|accountId|path|string(uuid)|true|Unique identifier for an account|
|allowSyncOnPushComplete|query|boolean|false|none|
|timeoutInMinutes|query|integer(int32)|false|none|
|body|body|[BankTransactions](#schemabanktransactions)|false|none|
|» accountId|body|string \| null|false|none|
|» transactions|body|[[BankTransactionsBankTransactionLine](#schemabanktransactionsbanktransactionline)]|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "accountId": "string",
    "transactions": [
      {
        "amount": 0,
        "balance": 0,
        "clearedOnDate": "2022-10-23T00:00:00Z",
        "counterparty": "string",
        "description": "string",
        "id": "string",
        "reconciled": true,
        "reference": "string",
        "transactionType": "Unknown",
        "modifiedDate": "2022-10-23T00:00:00Z",
        "sourceModifiedDate": "2022-10-23T00:00:00Z"
      }
    ]
  },
  "changes": [
    {
      "attachmentId": "string",
      "recordRef": {
        "dataType": "invoices",
        "id": "string"
      },
      "type": "Unknown"
    }
  ],
  "companyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "completedOnUtc": "2022-10-23T00:00:00Z",
  "dataConnectionKey": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "dataType": "invoices",
  "errorMessage": "string",
  "pushOperationKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "requestedOnUtc": "2022-10-23T00:00:00Z",
  "status": "Pending",
  "statusCode": 0,
  "timeoutInMinutes": 0,
  "timeoutInSeconds": 0,
  "validation": {
    "errors": [
      {
        "itemId": "string",
        "message": "string",
        "validatorName": "string"
      }
    ],
    "warnings": [
      {
        "itemId": "string",
        "message": "string",
        "validatorName": "string"
      }
    ]
  }
}
```

<h3 id="create-bank-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateBankTransactionsResponse](#schemacreatebanktransactionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

# Schemas

<h2 id="tocS_BankFeedAccount">BankFeedAccount</h2>
<!-- backwards compatibility -->
<a id="schemabankfeedaccount"></a>
<a id="schema_BankFeedAccount"></a>
<a id="tocSbankfeedaccount"></a>
<a id="tocsbankfeedaccount"></a>

```json
{
  "accountName": "account-081",
  "accountNumber": "12345670",
  "accountType": "Credit",
  "balance": 99.99,
  "currency": "GBP",
  "id": "acc-002",
  "modifiedDate": "2023-01-09T14:14:14.1057478Z",
  "sortCode": "123456",
  "status": "pending"
}
```

The target bank account in a supported accounting package for ingestion into a bank feed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string \| null|false|none|The bank account name|
|accountNumber|string \| null|false|none|The account number|
|accountType|string \| null|false|none|The type of bank account e.g. Credit|
|balance|number \| null|false|none|The latest balance for the bank account|
|currency|string \| null|false|none|The currency e.g. USD|
|feedStartDate|[DateTime](#schemadatetime)|false|none|In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:<br><br>```<br>2020-10-08T22:40:50Z<br>2021-01-01T00:00:00<br>```<br><br><br><br>When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:<br><br>- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`<br>- Unqualified local time: `2021-11-15T01:00:00`<br>- UTC time offsets: `2021-11-15T01:00:00-05:00`<br><br>> Time zones<br>> <br>> Not all dates from Codat will contain information about time zones.  <br>> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.|
|id|string|true|none|Unique ID for the bank feed account|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The last date the bank account was modified|
|sortCode|string \| null|false|none|The sort code|
|status|string \| null|false|none|none|

<h2 id="tocS_BankFeedAccounts">BankFeedAccounts</h2>
<!-- backwards compatibility -->
<a id="schemabankfeedaccounts"></a>
<a id="schema_BankFeedAccounts"></a>
<a id="tocSbankfeedaccounts"></a>
<a id="tocsbankfeedaccounts"></a>

```json
[
  {
    "accountName": "account-081",
    "accountNumber": "12345670",
    "accountType": "Credit",
    "balance": 99.99,
    "currency": "GBP",
    "id": "acc-002",
    "modifiedDate": "2023-01-09T14:14:14.1057478Z",
    "sortCode": "123456",
    "status": "pending"
  }
]
```

<h2 id="tocS_BankTransactions">BankTransactions</h2>
<!-- backwards compatibility -->
<a id="schemabanktransactions"></a>
<a id="schema_BankTransactions"></a>
<a id="tocSbanktransactions"></a>
<a id="tocsbanktransactions"></a>

```json
{
  "accountId": "string",
  "transactions": [
    {
      "amount": 0,
      "balance": 0,
      "clearedOnDate": "2022-10-23T00:00:00Z",
      "counterparty": "string",
      "description": "string",
      "id": "string",
      "reconciled": true,
      "reference": "string",
      "transactionType": "Unknown",
      "modifiedDate": "2022-10-23T00:00:00Z",
      "sourceModifiedDate": "2022-10-23T00:00:00Z"
    }
  ]
}
```

> **Accessing Bank Accounts through Banking API**
> 
> This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators. 
>
> To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/operations/list-all-banking-transactions)

> View the coverage for bank transactions in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions" target="_blank">Data coverage explorer</a>.

## Overview

Transactional banking data for a specific company and account.

Bank transactions include the:
* Amount of the transaction.
* Current account balance.
* Transaction type, for example, credit, debit, or transfer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string \| null|false|none|none|
|transactions|[[BankTransactionsBankTransactionLine](#schemabanktransactionsbanktransactionline)]|false|none|none|

<h2 id="tocS_BankTransactionsResponse">BankTransactionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabanktransactionsresponse"></a>
<a id="schema_BankTransactionsResponse"></a>
<a id="tocSbanktransactionsresponse"></a>
<a id="tocsbanktransactionsresponse"></a>

```json
{
  "results": [
    {
      "accountId": "string",
      "transactions": [
        {
          "amount": 0,
          "balance": 0,
          "clearedOnDate": "2022-10-23T00:00:00Z",
          "counterparty": "string",
          "description": "string",
          "id": "string",
          "reconciled": true,
          "reference": "string",
          "transactionType": "Unknown",
          "modifiedDate": "2022-10-23T00:00:00Z",
          "sourceModifiedDate": "2022-10-23T00:00:00Z"
        }
      ]
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
|results|[[BankTransactions](#schemabanktransactions)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_CreateBankTransactionsResponse">CreateBankTransactionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatebanktransactionsresponse"></a>
<a id="schema_CreateBankTransactionsResponse"></a>
<a id="tocScreatebanktransactionsresponse"></a>
<a id="tocscreatebanktransactionsresponse"></a>

```json
{
  "data": {
    "accountId": "string",
    "transactions": [
      {
        "amount": 0,
        "balance": 0,
        "clearedOnDate": "2022-10-23T00:00:00Z",
        "counterparty": "string",
        "description": "string",
        "id": "string",
        "reconciled": true,
        "reference": "string",
        "transactionType": "Unknown",
        "modifiedDate": "2022-10-23T00:00:00Z",
        "sourceModifiedDate": "2022-10-23T00:00:00Z"
      }
    ]
  },
  "changes": [
    {
      "attachmentId": "string",
      "recordRef": {
        "dataType": "invoices",
        "id": "string"
      },
      "type": "Unknown"
    }
  ],
  "companyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "completedOnUtc": "2022-10-23T00:00:00Z",
  "dataConnectionKey": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "dataType": "invoices",
  "errorMessage": "string",
  "pushOperationKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "requestedOnUtc": "2022-10-23T00:00:00Z",
  "status": "Pending",
  "statusCode": 0,
  "timeoutInMinutes": 0,
  "timeoutInSeconds": 0,
  "validation": {
    "errors": [
      {
        "itemId": "string",
        "message": "string",
        "validatorName": "string"
      }
    ],
    "warnings": [
      {
        "itemId": "string",
        "message": "string",
        "validatorName": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[BankTransactions](#schemabanktransactions)|false|none|> **Accessing Bank Accounts through Banking API**<br>> <br>> This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators. <br>><br>> To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/operations/list-all-banking-transactions)<br><br>> View the coverage for bank transactions in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions" target="_blank">Data coverage explorer</a>.<br><br>## Overview<br><br>Transactional banking data for a specific company and account.<br><br>Bank transactions include the:<br>* Amount of the transaction.<br>* Current account balance.<br>* Transaction type, for example, credit, debit, or transfer.|
|changes|[[PushOperationPushOperationChange](#schemapushoperationpushoperationchange)]|false|none|none|
|companyId|string(uuid)|true|none|Unique identifier for your SMB in Codat.|
|completedOnUtc|[DateTime](#schemadatetime)|false|none|The datetime when the push was completed, null if Pending.|
|dataConnectionKey|string(uuid)|true|none|Unique identifier for a company's data connection.|
|dataType|[DataType](#schemadatatype)|false|none|The type of data being pushed, eg invoices, customers.|
|errorMessage|string \| null|false|none|none|
|pushOperationKey|string(uuid)|true|none|A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.|
|requestedOnUtc|[DateTime](#schemadatetime)|true|none|The datetime when the push was requested.|
|status|[PushOperationPushOperationStatus](#schemapushoperationpushoperationstatus)|true|none|The status of the push operation.|
|statusCode|integer|true|none|none|
|timeoutInMinutes|integer(int32) \| null|false|none|none|
|timeoutInSeconds|integer(int32) \| null|false|none|**Deprecated.**|
|validation|[PushOperationValidation](#schemapushoperationvalidation)|false|none|A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|accountTransactions|
|dataType|balanceSheet|
|dataType|bankAccounts|
|dataType|bankTransactions|
|dataType|billCreditNotes|
|dataType|billPayments|
|dataType|bills|
|dataType|cashFlowStatement|
|dataType|chartOfAccounts|
|dataType|company|
|dataType|creditNotes|
|dataType|customers|
|dataType|directCosts|
|dataType|directIncomes|
|dataType|invoices|
|dataType|items|
|dataType|journalEntries|
|dataType|journals|
|dataType|paymentMethods|
|dataType|payments|
|dataType|profitAndLoss|
|dataType|purchaseOrders|
|dataType|salesOrders|
|dataType|suppliers|
|dataType|taxRates|
|dataType|trackingCategories|
|dataType|transfers|
|dataType|banking-accountBalances|
|dataType|banking-accounts|
|dataType|banking-transactionCategories|
|dataType|banking-transactions|
|dataType|commerce-companyInfo|
|dataType|commerce-customers|
|dataType|commerce-disputes|
|dataType|commerce-locations|
|dataType|commerce-orders|
|dataType|commerce-paymentMethods|
|dataType|commerce-payments|
|dataType|commerce-productCategories|
|dataType|commerce-products|
|dataType|commerce-taxComponents|
|dataType|commerce-transactions|
|status|Pending|
|status|Failed|
|status|Success|
|status|TimedOut|

<h2 id="tocS_DataType">DataType</h2>
<!-- backwards compatibility -->
<a id="schemadatatype"></a>
<a id="schema_DataType"></a>
<a id="tocSdatatype"></a>
<a id="tocsdatatype"></a>

```json
"invoices"
```

Available Data types

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"2022-10-23T00:00:00Z"
```

In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:

```
2020-10-08T22:40:50Z
2021-01-01T00:00:00
```



When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:

- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
- Unqualified local time: `2021-11-15T01:00:00`
- UTC time offsets: `2021-11-15T01:00:00-05:00`

> Time zones
> 
> Not all dates from Codat will contain information about time zones.  
> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.

<h2 id="tocS_HRef">HRef</h2>
<!-- backwards compatibility -->
<a id="schemahref"></a>
<a id="schema_HRef"></a>
<a id="tocShref"></a>
<a id="tocshref"></a>

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
|current|[HRef](#schemahref)|true|none|none|
|next|[HRef](#schemahref)|false|none|none|
|previous|[HRef](#schemahref)|false|none|none|
|self|[HRef](#schemahref)|true|none|none|

<h2 id="tocS_PushOperation">PushOperation</h2>
<!-- backwards compatibility -->
<a id="schemapushoperation"></a>
<a id="schema_PushOperation"></a>
<a id="tocSpushoperation"></a>
<a id="tocspushoperation"></a>

```json
{
  "changes": [
    {
      "attachmentId": "string",
      "recordRef": {
        "dataType": "invoices",
        "id": "string"
      },
      "type": "Unknown"
    }
  ],
  "companyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "completedOnUtc": "2022-10-23T00:00:00Z",
  "dataConnectionKey": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "dataType": "invoices",
  "errorMessage": "string",
  "pushOperationKey": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "requestedOnUtc": "2022-10-23T00:00:00Z",
  "status": "Pending",
  "statusCode": 0,
  "timeoutInMinutes": 0,
  "timeoutInSeconds": 0,
  "validation": {
    "errors": [
      {
        "itemId": "string",
        "message": "string",
        "validatorName": "string"
      }
    ],
    "warnings": [
      {
        "itemId": "string",
        "message": "string",
        "validatorName": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changes|[[PushOperationPushOperationChange](#schemapushoperationpushoperationchange)]|false|none|none|
|companyId|string(uuid)|true|none|Unique identifier for your SMB in Codat.|
|completedOnUtc|[DateTime](#schemadatetime)|false|none|The datetime when the push was completed, null if Pending.|
|dataConnectionKey|string(uuid)|true|none|Unique identifier for a company's data connection.|
|dataType|[DataType](#schemadatatype)|false|none|The type of data being pushed, eg invoices, customers.|
|errorMessage|string \| null|false|none|none|
|pushOperationKey|string(uuid)|true|none|A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.|
|requestedOnUtc|[DateTime](#schemadatetime)|true|none|The datetime when the push was requested.|
|status|[PushOperationPushOperationStatus](#schemapushoperationpushoperationstatus)|true|none|The status of the push operation.|
|statusCode|integer|true|none|none|
|timeoutInMinutes|integer(int32) \| null|false|none|none|
|timeoutInSeconds|integer(int32) \| null|false|none|**Deprecated.**|
|validation|[PushOperationValidation](#schemapushoperationvalidation)|false|none|A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|accountTransactions|
|dataType|balanceSheet|
|dataType|bankAccounts|
|dataType|bankTransactions|
|dataType|billCreditNotes|
|dataType|billPayments|
|dataType|bills|
|dataType|cashFlowStatement|
|dataType|chartOfAccounts|
|dataType|company|
|dataType|creditNotes|
|dataType|customers|
|dataType|directCosts|
|dataType|directIncomes|
|dataType|invoices|
|dataType|items|
|dataType|journalEntries|
|dataType|journals|
|dataType|paymentMethods|
|dataType|payments|
|dataType|profitAndLoss|
|dataType|purchaseOrders|
|dataType|salesOrders|
|dataType|suppliers|
|dataType|taxRates|
|dataType|trackingCategories|
|dataType|transfers|
|dataType|banking-accountBalances|
|dataType|banking-accounts|
|dataType|banking-transactionCategories|
|dataType|banking-transactions|
|dataType|commerce-companyInfo|
|dataType|commerce-customers|
|dataType|commerce-disputes|
|dataType|commerce-locations|
|dataType|commerce-orders|
|dataType|commerce-paymentMethods|
|dataType|commerce-payments|
|dataType|commerce-productCategories|
|dataType|commerce-products|
|dataType|commerce-taxComponents|
|dataType|commerce-transactions|
|status|Pending|
|status|Failed|
|status|Success|
|status|TimedOut|

<h2 id="tocS_PushOption">PushOption</h2>
<!-- backwards compatibility -->
<a id="schemapushoption"></a>
<a id="schema_PushOption"></a>
<a id="tocSpushoption"></a>
<a id="tocspushoption"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "options": [
    {
      "description": "string",
      "displayName": "string",
      "required": true,
      "type": "Array",
      "value": "string"
    }
  ],
  "properties": {
    "property1": {
      "description": "string",
      "displayName": "string",
      "options": [
        {
          "description": "string",
          "displayName": "string",
          "required": true,
          "type": "Array",
          "value": "string"
        }
      ],
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": true,
      "type": "Array",
      "validation": {
        "information": [
          {
            "details": "string",
            "field": "string",
            "ref": "http://example.com"
          }
        ],
        "warnings": [
          {
            "details": "string",
            "field": "string",
            "ref": "http://example.com"
          }
        ]
      }
    },
    "property2": {
      "description": "string",
      "displayName": "string",
      "options": [
        {
          "description": "string",
          "displayName": "string",
          "required": true,
          "type": "Array",
          "value": "string"
        }
      ],
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": true,
      "type": "Array",
      "validation": {
        "information": [
          {
            "details": "string",
            "field": "string",
            "ref": "http://example.com"
          }
        ],
        "warnings": [
          {
            "details": "string",
            "field": "string",
            "ref": "http://example.com"
          }
        ]
      }
    }
  },
  "required": true,
  "type": "Array",
  "validation": {
    "information": [
      {
        "details": "string",
        "field": "string",
        "ref": "http://example.com"
      }
    ],
    "warnings": [
      {
        "details": "string",
        "field": "string",
        "ref": "http://example.com"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|displayName|string|true|none|none|
|options|[[PushOptionPushOptionChoice](#schemapushoptionpushoptionchoice)]|false|none|none|
|properties|object \| null|false|none|none|
|required|boolean|true|none|none|
|type|[PushOptionPushOptionType](#schemapushoptionpushoptiontype)|true|none|none|
|validation|[PushOptionPushValidationInfo](#schemapushoptionpushvalidationinfo)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Array|
|type|Object|
|type|String|
|type|Number|
|type|Boolean|
|type|DateTime|
|type|File|
|type|MultiPart|

<h2 id="tocS_BankTransactionsBankTransactionType">BankTransactionsBankTransactionType</h2>
<!-- backwards compatibility -->
<a id="schemabanktransactionsbanktransactiontype"></a>
<a id="schema_BankTransactionsBankTransactionType"></a>
<a id="tocSbanktransactionsbanktransactiontype"></a>
<a id="tocsbanktransactionsbanktransactiontype"></a>

```json
"Unknown"
```

Type of transaction for the bank statement line

<h2 id="tocS_BankTransactionsBankTransactionLine">BankTransactionsBankTransactionLine</h2>
<!-- backwards compatibility -->
<a id="schemabanktransactionsbanktransactionline"></a>
<a id="schema_BankTransactionsBankTransactionLine"></a>
<a id="tocSbanktransactionsbanktransactionline"></a>
<a id="tocsbanktransactionsbanktransactionline"></a>

```json
{
  "amount": 0,
  "balance": 0,
  "clearedOnDate": "2022-10-23T00:00:00Z",
  "counterparty": "string",
  "description": "string",
  "id": "string",
  "reconciled": true,
  "reference": "string",
  "transactionType": "Unknown",
  "modifiedDate": "2022-10-23T00:00:00Z",
  "sourceModifiedDate": "2022-10-23T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|true|none|none|
|balance|number|true|none|none|
|clearedOnDate|[DateTime](#schemadatetime)|false|none|In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:<br><br>```<br>2020-10-08T22:40:50Z<br>2021-01-01T00:00:00<br>```<br><br><br><br>When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:<br><br>- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`<br>- Unqualified local time: `2021-11-15T01:00:00`<br>- UTC time offsets: `2021-11-15T01:00:00-05:00`<br><br>> Time zones<br>> <br>> Not all dates from Codat will contain information about time zones.  <br>> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.|
|counterparty|string \| null|false|none|none|
|description|string \| null|false|none|none|
|id|string|false|none|none|
|reconciled|boolean|true|none|none|
|reference|string \| null|false|none|none|
|transactionType|[BankTransactionsBankTransactionType](#schemabanktransactionsbanktransactiontype)|true|none|Type of transaction for the bank statement line|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

#### Enumerated Values

|Property|Value|
|---|---|
|transactionType|Unknown|
|transactionType|Credit|
|transactionType|Debit|
|transactionType|Int|
|transactionType|Div|
|transactionType|Fee|
|transactionType|SerChg|
|transactionType|Dep|
|transactionType|Atm|
|transactionType|Pos|
|transactionType|Xfer|
|transactionType|Check|
|transactionType|Payment|
|transactionType|Cash|
|transactionType|DirectDep|
|transactionType|DirectDebit|
|transactionType|RepeatPmt|
|transactionType|Other|

<h2 id="tocS_PushOperationPushOperationRef">PushOperationPushOperationRef</h2>
<!-- backwards compatibility -->
<a id="schemapushoperationpushoperationref"></a>
<a id="schema_PushOperationPushOperationRef"></a>
<a id="tocSpushoperationpushoperationref"></a>
<a id="tocspushoperationpushoperationref"></a>

```json
{
  "dataType": "invoices",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataType|[DataType](#schemadatatype)|false|none|Available Data types|
|id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|accountTransactions|
|dataType|balanceSheet|
|dataType|bankAccounts|
|dataType|bankTransactions|
|dataType|billCreditNotes|
|dataType|billPayments|
|dataType|bills|
|dataType|cashFlowStatement|
|dataType|chartOfAccounts|
|dataType|company|
|dataType|creditNotes|
|dataType|customers|
|dataType|directCosts|
|dataType|directIncomes|
|dataType|invoices|
|dataType|items|
|dataType|journalEntries|
|dataType|journals|
|dataType|paymentMethods|
|dataType|payments|
|dataType|profitAndLoss|
|dataType|purchaseOrders|
|dataType|salesOrders|
|dataType|suppliers|
|dataType|taxRates|
|dataType|trackingCategories|
|dataType|transfers|
|dataType|banking-accountBalances|
|dataType|banking-accounts|
|dataType|banking-transactionCategories|
|dataType|banking-transactions|
|dataType|commerce-companyInfo|
|dataType|commerce-customers|
|dataType|commerce-disputes|
|dataType|commerce-locations|
|dataType|commerce-orders|
|dataType|commerce-paymentMethods|
|dataType|commerce-payments|
|dataType|commerce-productCategories|
|dataType|commerce-products|
|dataType|commerce-taxComponents|
|dataType|commerce-transactions|

<h2 id="tocS_PushOperationPushChangeType">PushOperationPushChangeType</h2>
<!-- backwards compatibility -->
<a id="schemapushoperationpushchangetype"></a>
<a id="schema_PushOperationPushChangeType"></a>
<a id="tocSpushoperationpushchangetype"></a>
<a id="tocspushoperationpushchangetype"></a>

```json
"Unknown"
```

<h2 id="tocS_PushOperationValidationItem">PushOperationValidationItem</h2>
<!-- backwards compatibility -->
<a id="schemapushoperationvalidationitem"></a>
<a id="schema_PushOperationValidationItem"></a>
<a id="tocSpushoperationvalidationitem"></a>
<a id="tocspushoperationvalidationitem"></a>

```json
{
  "itemId": "string",
  "message": "string",
  "validatorName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemId|string \| null|false|none|none|
|message|string \| null|false|none|none|
|validatorName|string \| null|false|none|none|

<h2 id="tocS_PushOperationPushOperationChange">PushOperationPushOperationChange</h2>
<!-- backwards compatibility -->
<a id="schemapushoperationpushoperationchange"></a>
<a id="schema_PushOperationPushOperationChange"></a>
<a id="tocSpushoperationpushoperationchange"></a>
<a id="tocspushoperationpushoperationchange"></a>

```json
{
  "attachmentId": "string",
  "recordRef": {
    "dataType": "invoices",
    "id": "string"
  },
  "type": "Unknown"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentId|string \| null|false|none|none|
|recordRef|[PushOperationPushOperationRef](#schemapushoperationpushoperationref)|false|none|none|
|type|[PushOperationPushChangeType](#schemapushoperationpushchangetype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Unknown|
|type|Created|
|type|Modified|
|type|Deleted|
|type|AttachmentUploaded|

<h2 id="tocS_PushOperationPushOperationStatus">PushOperationPushOperationStatus</h2>
<!-- backwards compatibility -->
<a id="schemapushoperationpushoperationstatus"></a>
<a id="schema_PushOperationPushOperationStatus"></a>
<a id="tocSpushoperationpushoperationstatus"></a>
<a id="tocspushoperationpushoperationstatus"></a>

```json
"Pending"
```

The status of the push operation.

<h2 id="tocS_PushOperationValidation">PushOperationValidation</h2>
<!-- backwards compatibility -->
<a id="schemapushoperationvalidation"></a>
<a id="schema_PushOperationValidation"></a>
<a id="tocSpushoperationvalidation"></a>
<a id="tocspushoperationvalidation"></a>

```json
{
  "errors": [
    {
      "itemId": "string",
      "message": "string",
      "validatorName": "string"
    }
  ],
  "warnings": [
    {
      "itemId": "string",
      "message": "string",
      "validatorName": "string"
    }
  ]
}
```

A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[PushOperationValidationItem](#schemapushoperationvalidationitem)]|false|none|none|
|warnings|[[PushOperationValidationItem](#schemapushoperationvalidationitem)]|false|none|none|

<h2 id="tocS_PushOptionPushOptionType">PushOptionPushOptionType</h2>
<!-- backwards compatibility -->
<a id="schemapushoptionpushoptiontype"></a>
<a id="schema_PushOptionPushOptionType"></a>
<a id="tocSpushoptionpushoptiontype"></a>
<a id="tocspushoptionpushoptiontype"></a>

```json
"Array"
```

<h2 id="tocS_PushOptionPushOptionChoice">PushOptionPushOptionChoice</h2>
<!-- backwards compatibility -->
<a id="schemapushoptionpushoptionchoice"></a>
<a id="schema_PushOptionPushOptionChoice"></a>
<a id="tocSpushoptionpushoptionchoice"></a>
<a id="tocspushoptionpushoptionchoice"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "required": true,
  "type": "Array",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|displayName|string|false|none|none|
|required|boolean|false|none|none|
|type|[PushOptionPushOptionType](#schemapushoptionpushoptiontype)|false|none|none|
|value|string|false|none|Allowed value for field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Array|
|type|Object|
|type|String|
|type|Number|
|type|Boolean|
|type|DateTime|
|type|File|
|type|MultiPart|

<h2 id="tocS_PushOptionPushOptionProperty">PushOptionPushOptionProperty</h2>
<!-- backwards compatibility -->
<a id="schemapushoptionpushoptionproperty"></a>
<a id="schema_PushOptionPushOptionProperty"></a>
<a id="tocSpushoptionpushoptionproperty"></a>
<a id="tocspushoptionpushoptionproperty"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "options": [
    {
      "description": "string",
      "displayName": "string",
      "required": true,
      "type": "Array",
      "value": "string"
    }
  ],
  "properties": {
    "property1": {
      "description": "string",
      "displayName": "string",
      "options": [
        {
          "description": "string",
          "displayName": "string",
          "required": true,
          "type": "Array",
          "value": "string"
        }
      ],
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": true,
      "type": "Array",
      "validation": {
        "information": [
          {
            "details": "string",
            "field": "string",
            "ref": "http://example.com"
          }
        ],
        "warnings": [
          {
            "details": "string",
            "field": "string",
            "ref": "http://example.com"
          }
        ]
      }
    },
    "property2": {
      "description": "string",
      "displayName": "string",
      "options": [
        {
          "description": "string",
          "displayName": "string",
          "required": true,
          "type": "Array",
          "value": "string"
        }
      ],
      "properties": {
        "property1": {},
        "property2": {}
      },
      "required": true,
      "type": "Array",
      "validation": {
        "information": [
          {
            "details": "string",
            "field": "string",
            "ref": "http://example.com"
          }
        ],
        "warnings": [
          {
            "details": "string",
            "field": "string",
            "ref": "http://example.com"
          }
        ]
      }
    }
  },
  "required": true,
  "type": "Array",
  "validation": {
    "information": [
      {
        "details": "string",
        "field": "string",
        "ref": "http://example.com"
      }
    ],
    "warnings": [
      {
        "details": "string",
        "field": "string",
        "ref": "http://example.com"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|displayName|string|true|none|none|
|options|[[PushOptionPushOptionChoice](#schemapushoptionpushoptionchoice)]|false|none|none|
|properties|object \| null|false|none|none|
|required|boolean|true|none|none|
|type|[PushOptionPushOptionType](#schemapushoptionpushoptiontype)|true|none|none|
|validation|[PushOptionPushValidationInfo](#schemapushoptionpushvalidationinfo)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Array|
|type|Object|
|type|String|
|type|Number|
|type|Boolean|
|type|DateTime|
|type|File|
|type|MultiPart|

<h2 id="tocS_PushOptionPushValidationInfo">PushOptionPushValidationInfo</h2>
<!-- backwards compatibility -->
<a id="schemapushoptionpushvalidationinfo"></a>
<a id="schema_PushOptionPushValidationInfo"></a>
<a id="tocSpushoptionpushvalidationinfo"></a>
<a id="tocspushoptionpushvalidationinfo"></a>

```json
{
  "information": [
    {
      "details": "string",
      "field": "string",
      "ref": "http://example.com"
    }
  ],
  "warnings": [
    {
      "details": "string",
      "field": "string",
      "ref": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|information|[[PushOptionPushFieldValidation](#schemapushoptionpushfieldvalidation)]|false|none|none|
|warnings|[[PushOptionPushFieldValidation](#schemapushoptionpushfieldvalidation)]|false|none|none|

<h2 id="tocS_PushOptionPushFieldValidation">PushOptionPushFieldValidation</h2>
<!-- backwards compatibility -->
<a id="schemapushoptionpushfieldvalidation"></a>
<a id="schema_PushOptionPushFieldValidation"></a>
<a id="tocSpushoptionpushfieldvalidation"></a>
<a id="tocspushoptionpushfieldvalidation"></a>

```json
{
  "details": "string",
  "field": "string",
  "ref": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|true|none|none|
|field|string|false|none|none|
|ref|string(uri) \| null|false|none|none|
