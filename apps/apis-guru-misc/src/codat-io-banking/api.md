<h1 id="banking-api">Banking API v2.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Codat's standardized API for accessing banking data.

Codat's Banking API allows you to access standardised data from over bank accounts via third party providers.

Standardize how you connect to your customers’ bank accounts. Retrieve bank account and bank transaction data in the same way via our partnerships with Plaid and TrueLayer.

[Read more...](https://docs.codat.io/banking-api/overview)

[See our OpenAPI spec](https://github.com/codatio/oas)

Base URLs:

* <a href="https://api.codat.io">https://api.codat.io</a> - Production

<a href="https://www.codat.io/legals/">Terms of service</a>
Email: <a href="mailto:support@codat.io">Codat</a> 

# Authentication

* API Key (auth_header)
    - Parameter Name: **Authorization**, in: header. The word "Basic" followed by a space and your API Key, base64 encoded, which can be found [here](https://app.codat.io/developers/api-keys)

<h1 id="banking-api-accounts">Accounts</h1>

Where payments are made or received, and bank transactions are recorded.

## List accounts

<a id="opIdlist-accounts"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/banking-accounts?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/banking-accounts`

Gets a list of all bank accounts of the SMB, with rich data like balances, account numbers and institutions holdingthe accounts.

<h3 id="list-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|
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
      "results": [
        {
          "balance": {
            "available": -459987.97,
            "current": -459964.9,
            "limit": 5000
          },
          "currency": "GBP",
          "holder": "Codat Ltd",
          "id": "1703194f-7805-4da8-bac0-2ba5da4a4216",
          "identifiers": {
            "bankCode": "009911",
            "bic": "LOYDGB21006",
            "iban": "GB29 LOYD 4773 2346 7626 29",
            "maskedAccountNumber": "LOYDGB21006",
            "number": "46762629",
            "subtype": "checking",
            "type": "Depository"
          },
          "informalName": "Codat",
          "institution": {
            "id": "lloyds-bank",
            "name": "Lloyds Bank"
          },
          "modifiedDate": "2022-05-23T16:32:50Z",
          "name": "Business Current Account",
          "sourceModifiedDate": "2021-08-14T05:04:12",
          "type": "Debit"
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

<h3 id="list-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Accounts](#schemaaccounts)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get account

<a id="opIdget-account"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/banking-accounts/8a210b68-6988-11ed-a1eb-0242ac120002 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/banking-accounts/{accountId}`

<aside class="warning">
This operation is deprecated
</aside>

Gets a specified bank account for a given company

<h3 id="get-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|
|accountId|path|string(uuid)|true|Unique identifier for an account|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "balance": {
        "available": -459987.97,
        "current": -459964.9,
        "limit": 5000
      },
      "currency": "GBP",
      "holder": "Codat Ltd",
      "id": "1703194f-7805-4da8-bac0-2ba5da4a4216",
      "identifiers": {
        "bankCode": "009911",
        "bic": "LOYDGB21006",
        "iban": "GB29 LOYD 4773 2346 7626 29",
        "maskedAccountNumber": "LOYDGB21006",
        "number": "46762629",
        "subtype": "checking",
        "type": "Depository"
      },
      "informalName": "Codat",
      "institution": {
        "id": "lloyds-bank",
        "name": "Lloyds Bank"
      },
      "modifiedDate": "2022-05-23T16:32:50Z",
      "name": "Business Current Account",
      "sourceModifiedDate": "2021-08-14T05:04:12",
      "type": "Debit"
    }
  ]
}
```

<h3 id="get-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Account](#schemaaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="banking-api-account-balances">Account balances</h1>

Balances for a bank account including end-of-day batch balance or running balances per transaction.

## List account balances

<a id="opIdlist-account-balances"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/banking-accountBalances?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/banking-accountBalances`

Gets a list of balances for a bank account including end-of-day batch balance or running balances per transaction.

<h3 id="list-account-balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|
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
      "accountBalances": [
        {
          "accountId": "cce404db-27f7-4286-95db-622b53596cf4",
          "balance": {
            "available": 714374.48,
            "current": 714374.57,
            "limit": 5000
          },
          "date": "2021-03-18T00:00:00"
        },
        {
          "accountId": "cce404db-27f7-4286-95db-622b53596cf4",
          "balance": {
            "available": 714374.48,
            "current": 714374.57,
            "limit": 5000
          },
          "date": "2021-03-19T00:00:00"
        },
        {
          "accountId": "cce404db-27f7-4286-95db-622b53596cf4",
          "balance": {
            "available": 714195.66,
            "current": 714204.39,
            "limit": 5000
          },
          "date": "2021-03-22T00:00:00"
        },
        {
          "accountId": "2f593774-1075-4805-a552-84eecc7eb264",
          "balance": {
            "available": -644945.42,
            "current": -644925.84,
            "limit": 0
          },
          "date": "2022-03-09T00:00:00"
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

<h3 id="list-account-balances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AccountBalances](#schemaaccountbalances)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="banking-api-transactions">Transactions</h1>

An immutable source of up-to-date information on income and expenditure.

## List transactions

<a id="opIdlist-transactions"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/banking-transactions?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/banking-transactions`

Gets a list of transactions incurred by a bank account.

<h3 id="list-transactions-parameters">Parameters</h3>

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
  "results": [
    {
      "accountId": "1703194f-7805-4da8-bac0-2ba5da4a4216",
      "amount": 5062.39,
      "authorizedDate": "2021-07-06T00:00:00",
      "currency": "GBP",
      "description": "Payments for direct income ce149943-c157-43fc-aac7-42a716b655b6",
      "id": "0130b5bb-1419-40f6-8a27-7362d0381229",
      "merchantName": "New Look",
      "modifiedDate": "2022-05-23T16:32:50Z",
      "postedDate": "2021-07-06T00:00:00",
      "sourceModifiedDate": "2021-06-28T10:48:12",
      "transactionCategoryRef": {
        "id": "health-and-fitness-sports"
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

<h3 id="list-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Transactions](#schematransactions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get bank transaction

<a id="opIdget-transaction"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/banking-transactions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/banking-transactions/{transactionId}`

<aside class="warning">
This operation is deprecated
</aside>

Gets a specified bank transaction for a given company

<h3 id="get-bank-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|transactionId|path|string|true|The unique identifier for a transaction|
|connectionId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "accountId": "1703194f-7805-4da8-bac0-2ba5da4a4216",
  "amount": 5062.39,
  "authorizedDate": "2021-07-06T00:00:00",
  "currency": "GBP",
  "description": "Payments for direct income ce149943-c157-43fc-aac7-42a716b655b6",
  "id": "0130b5bb-1419-40f6-8a27-7362d0381229",
  "merchantName": "New Look",
  "modifiedDate": "2022-05-23T16:32:50Z",
  "postedDate": "2021-07-06T00:00:00",
  "sourceModifiedDate": "2021-06-28T10:48:12",
  "transactionCategoryRef": {
    "id": "health-and-fitness-sports"
  }
}
```

<h3 id="get-bank-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Transaction](#schematransaction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## List banking transactions

<a id="opIdlist-bank-transactions"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/data/banking-transactions?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/data/banking-transactions`

Gets a list of transactions incurred by a company across all bank accounts.

<h3 id="list-banking-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|
|query|query|string|false|Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).|
|orderBy|query|string|false|Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).|
|companyId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "accountId": "1703194f-7805-4da8-bac0-2ba5da4a4216",
      "amount": 5062.39,
      "authorizedDate": "2021-07-06T00:00:00",
      "currency": "GBP",
      "description": "Payments for direct income ce149943-c157-43fc-aac7-42a716b655b6",
      "id": "0130b5bb-1419-40f6-8a27-7362d0381229",
      "merchantName": "New Look",
      "modifiedDate": "2022-05-23T16:32:50Z",
      "postedDate": "2021-07-06T00:00:00",
      "sourceModifiedDate": "2021-06-28T10:48:12",
      "transactionCategoryRef": {
        "id": "health-and-fitness-sports"
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

<h3 id="list-banking-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Transactions](#schematransactions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="banking-api-transaction-categories">Transaction categories</h1>

Hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.

## List all transaction categories

<a id="opIdlist-transaction-categories"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/banking-transactionCategories?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/banking-transactionCategories`

Gets a list of hierarchical categories associated with a transaction for greater contextual meaning to transactionactivity.

<h3 id="list-all-transaction-categories-parameters">Parameters</h3>

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
  "results": [
    {
      "hasChildren": true,
      "id": "auto-and-transport",
      "modifiedDate": "2022-05-23T16:32:50",
      "name": "Auto & Transport",
      "sourceModifiedDate": "2021-04-24T07:59:10",
      "status": "Active"
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

<h3 id="list-all-transaction-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TransactionCategories](#schematransactioncategories)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get transaction category

<a id="opIdget-transaction-category"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/data/banking-transactionCategories/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/connections/{connectionId}/data/banking-transactionCategories/{transactionCategoryId}`

<aside class="warning">
This operation is deprecated
</aside>

Gets a specified bank transaction category for a given company

<h3 id="get-transaction-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|connectionId|path|string(uuid)|true|none|
|transactionCategoryId|path|string|true|The unique identifier for a banking transaction category|

> Example responses

> 200 Response

```json
{
  "hasChildren": true,
  "id": "auto-and-transport",
  "modifiedDate": "2022-05-23T16:32:50",
  "name": "Auto & Transport",
  "sourceModifiedDate": "2021-04-24T07:59:10",
  "status": "Active"
}
```

<h3 id="get-transaction-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TransactionCategory](#schematransactioncategory)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
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
  "results": [
    {
      "balance": {
        "available": -459987.97,
        "current": -459964.9,
        "limit": 5000
      },
      "currency": "GBP",
      "holder": "Codat Ltd",
      "id": "1703194f-7805-4da8-bac0-2ba5da4a4216",
      "identifiers": {
        "bankCode": "009911",
        "bic": "LOYDGB21006",
        "iban": "GB29 LOYD 4773 2346 7626 29",
        "maskedAccountNumber": "LOYDGB21006",
        "number": "46762629",
        "subtype": "checking",
        "type": "Depository"
      },
      "informalName": "Codat",
      "institution": {
        "id": "lloyds-bank",
        "name": "Lloyds Bank"
      },
      "modifiedDate": "2022-05-23T16:32:50Z",
      "name": "Business Current Account",
      "sourceModifiedDate": "2021-08-14T05:04:12",
      "type": "Debit"
    }
  ]
}
```

This data type provides a list of all the SMB's bank accounts, with rich data like balances, account numbers, and institutions holding the accounts.

Explore our [data coverage](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-accounts).

Responses are paged, so you should provide `page` and `pageSize` query parameters in your request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|object|true|none|An object containing bank balance data.|
|currency|string|true|none|The currency code for the account.|
|holder|string \| null|false|none|The name of the person or company who holds the account.|
|id|string|true|none|The ID of the account from the provider.|
|identifiers|object|true|none|An object containing bank account identification information.|
|informalName|string \| null|false|none|The friendly name of the account, chosen by the holder. This may not have been set by the account holder and therefore is not always available.|
|institution|object|true|none|The bank or other financial institution providing the account.|
|name|string|true|none|The name of the account according to the provider.|
|type|[AccountType](#schemaaccounttype)|true|none|The type of transactions and balances on the account.  <br>For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.  <br>For Debit accounts, positive balances are assets, and positive transactions **increase** assets.|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Unknown|
|type|Credit|
|type|Debit|

<h2 id="tocS_AccountBalance">AccountBalance</h2>
<!-- backwards compatibility -->
<a id="schemaaccountbalance"></a>
<a id="schema_AccountBalance"></a>
<a id="tocSaccountbalance"></a>
<a id="tocsaccountbalance"></a>

```json
{
  "accountBalances": [
    {
      "accountId": "cce404db-27f7-4286-95db-622b53596cf4",
      "balance": {
        "available": 714374.48,
        "current": 714374.57,
        "limit": 5000
      },
      "date": "2021-03-18T00:00:00"
    },
    {
      "accountId": "cce404db-27f7-4286-95db-622b53596cf4",
      "balance": {
        "available": 714374.48,
        "current": 714374.57,
        "limit": 5000
      },
      "date": "2021-03-19T00:00:00"
    },
    {
      "accountId": "cce404db-27f7-4286-95db-622b53596cf4",
      "balance": {
        "available": 714195.66,
        "current": 714204.39,
        "limit": 5000
      },
      "date": "2021-03-22T00:00:00"
    },
    {
      "accountId": "2f593774-1075-4805-a552-84eecc7eb264",
      "balance": {
        "available": -644945.42,
        "current": -644925.84,
        "limit": 0
      },
      "date": "2022-03-09T00:00:00"
    }
  ]
}
```

The Banking Account Balances data type provides a list of balances for a bank account including end-of-day batch balance or running balances per transaction.

Responses are paged, so you should provide `page` and `pageSize` query parameters in your request.

> **How often should I pull Account Balances?**
>
> Because these balances are closing balances, we recommend you pull Account Balance no more frequently than daily. If you require a live intraday balance, this can be found for each account on the [Account](https://docs.codat.io/banking-api#/schemas/Account) data type.
> 
> Whilst you can choose to sync hourly, this may incur usage charges from Plaid or TrueLayer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|The unique identifier of the account.|
|balance|object|true|none|Depending on the data provided by the underlying bank, not all balances are always available.|
|date|[DateTime](#schemadatetime)|true|none|Date of the balance.|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

<h2 id="tocS_AccountBalances">AccountBalances</h2>
<!-- backwards compatibility -->
<a id="schemaaccountbalances"></a>
<a id="schema_AccountBalances"></a>
<a id="tocSaccountbalances"></a>
<a id="tocsaccountbalances"></a>

```json
{
  "results": [
    {
      "accountBalances": [
        {
          "accountId": "cce404db-27f7-4286-95db-622b53596cf4",
          "balance": {
            "available": 714374.48,
            "current": 714374.57,
            "limit": 5000
          },
          "date": "2021-03-18T00:00:00"
        },
        {
          "accountId": "cce404db-27f7-4286-95db-622b53596cf4",
          "balance": {
            "available": 714374.48,
            "current": 714374.57,
            "limit": 5000
          },
          "date": "2021-03-19T00:00:00"
        },
        {
          "accountId": "cce404db-27f7-4286-95db-622b53596cf4",
          "balance": {
            "available": 714195.66,
            "current": 714204.39,
            "limit": 5000
          },
          "date": "2021-03-22T00:00:00"
        },
        {
          "accountId": "2f593774-1075-4805-a552-84eecc7eb264",
          "balance": {
            "available": -644945.42,
            "current": -644925.84,
            "limit": 0
          },
          "date": "2022-03-09T00:00:00"
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
|results|[[AccountBalance](#schemaaccountbalance)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_AccountType">AccountType</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttype"></a>
<a id="schema_AccountType"></a>
<a id="tocSaccounttype"></a>
<a id="tocsaccounttype"></a>

```json
"Unknown"
```

The type of transactions and balances on the account.  
For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.  
For Debit accounts, positive balances are assets, and positive transactions **increase** assets.

<h2 id="tocS_Accounts">Accounts</h2>
<!-- backwards compatibility -->
<a id="schemaaccounts"></a>
<a id="schema_Accounts"></a>
<a id="tocSaccounts"></a>
<a id="tocsaccounts"></a>

```json
{
  "results": [
    {
      "results": [
        {
          "balance": {
            "available": -459987.97,
            "current": -459964.9,
            "limit": 5000
          },
          "currency": "GBP",
          "holder": "Codat Ltd",
          "id": "1703194f-7805-4da8-bac0-2ba5da4a4216",
          "identifiers": {
            "bankCode": "009911",
            "bic": "LOYDGB21006",
            "iban": "GB29 LOYD 4773 2346 7626 29",
            "maskedAccountNumber": "LOYDGB21006",
            "number": "46762629",
            "subtype": "checking",
            "type": "Depository"
          },
          "informalName": "Codat",
          "institution": {
            "id": "lloyds-bank",
            "name": "Lloyds Bank"
          },
          "modifiedDate": "2022-05-23T16:32:50Z",
          "name": "Business Current Account",
          "sourceModifiedDate": "2021-08-14T05:04:12",
          "type": "Debit"
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
|results|[[Account](#schemaaccount)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

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

<h2 id="tocS_ModifiedDate">ModifiedDate</h2>
<!-- backwards compatibility -->
<a id="schemamodifieddate"></a>
<a id="schema_ModifiedDate"></a>
<a id="tocSmodifieddate"></a>
<a id="tocsmodifieddate"></a>

```json
{
  "modifiedDate": "2022-10-23T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|

<h2 id="tocS_ModifiedDates">ModifiedDates</h2>
<!-- backwards compatibility -->
<a id="schemamodifieddates"></a>
<a id="schema_ModifiedDates"></a>
<a id="tocSmodifieddates"></a>
<a id="tocsmodifieddates"></a>

```json
{
  "modifiedDate": "2022-10-23T00:00:00Z",
  "sourceModifiedDate": "2022-10-23T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

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

<h2 id="tocS_SourceModifiedDate">SourceModifiedDate</h2>
<!-- backwards compatibility -->
<a id="schemasourcemodifieddate"></a>
<a id="schema_SourceModifiedDate"></a>
<a id="tocSsourcemodifieddate"></a>
<a id="tocssourcemodifieddate"></a>

```json
{
  "sourceModifiedDate": "2022-10-23T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "accountId": "1703194f-7805-4da8-bac0-2ba5da4a4216",
  "amount": 5062.39,
  "authorizedDate": "2021-07-06T00:00:00",
  "currency": "GBP",
  "description": "Payments for direct income ce149943-c157-43fc-aac7-42a716b655b6",
  "id": "0130b5bb-1419-40f6-8a27-7362d0381229",
  "merchantName": "New Look",
  "modifiedDate": "2022-05-23T16:32:50Z",
  "postedDate": "2021-07-06T00:00:00",
  "sourceModifiedDate": "2021-06-28T10:48:12",
  "transactionCategoryRef": {
    "id": "health-and-fitness-sports"
  }
}
```

The Banking Transactions data type provides an immutable source of up-to-date information on income and expenditure.

Responses are paged, so you should provide `page` and `pageSize` query parameters in your request.

View the coverage for banking transactions in the [Data Coverage Explorer](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactions).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|true|none|The unique identifier of the bank account.|
|amount|number|false|none|The amount of the bank transaction.|
|authorizedDate|[DateTime](#schemadatetime)|false|none|The date the bank transaction was authorized.|
|code|string|false|none|Code to identify the underlying transaction.|
|currency|string|true|none|The currency of the bank transaction.|
|description|string \| null|false|none|The description of the bank transaction.|
|id|string|true|none|The unique identifier of the bank transaction.|
|merchantName|string \| null|false|none|The name of the merchant.|
|postedDate|[DateTime](#schemadatetime)|false|none|The date the bank transaction was cleared.|
|transactionCategoryRef|object|false|none|An object of bank transaction category reference data.|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

#### Enumerated Values

|Property|Value|
|---|---|
|code|Unknown|
|code|Fee|
|code|Payment|
|code|Cash|
|code|Transfer|
|code|Interest|
|code|Cashback|
|code|Cheque|
|code|DirectDebit|
|code|Purchase|
|code|StandingOrder|
|code|Adjustment|
|code|Credit|
|code|Other|
|code|NotSupported|

<h2 id="tocS_TransactionCategories">TransactionCategories</h2>
<!-- backwards compatibility -->
<a id="schematransactioncategories"></a>
<a id="schema_TransactionCategories"></a>
<a id="tocStransactioncategories"></a>
<a id="tocstransactioncategories"></a>

```json
{
  "results": [
    {
      "hasChildren": true,
      "id": "auto-and-transport",
      "modifiedDate": "2022-05-23T16:32:50",
      "name": "Auto & Transport",
      "sourceModifiedDate": "2021-04-24T07:59:10",
      "status": "Active"
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
|results|[[TransactionCategory](#schematransactioncategory)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_TransactionCategory">TransactionCategory</h2>
<!-- backwards compatibility -->
<a id="schematransactioncategory"></a>
<a id="schema_TransactionCategory"></a>
<a id="tocStransactioncategory"></a>
<a id="tocstransactioncategory"></a>

```json
{
  "hasChildren": true,
  "id": "auto-and-transport",
  "modifiedDate": "2022-05-23T16:32:50",
  "name": "Auto & Transport",
  "sourceModifiedDate": "2021-04-24T07:59:10",
  "status": "Active"
}
```

The Banking Transaction Categories data type provides a list of hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.

Responses are paged, so you should provide `page` and `pageSize` query parameters in your request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasChildren|boolean|false|none|A Boolean indicating whether there are other bank transaction categories beneath this one in the hierarchy.|
|id|string|true|none|The unique identifier of the bank transaction category.|
|name|string|true|none|The name of the bank transaction category.|
|parentId|string \| null|false|none|The unique identifier of the parent bank transaction category.|
|status|string|false|none|none|
|modifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in Codat.|
|sourceModifiedDate|[DateTime](#schemadatetime)|false|none|The date on which this record was last modified in the originating system|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Unknown|
|status|Active|
|status|Archived|

<h2 id="tocS_Transactions">Transactions</h2>
<!-- backwards compatibility -->
<a id="schematransactions"></a>
<a id="schema_Transactions"></a>
<a id="tocStransactions"></a>
<a id="tocstransactions"></a>

```json
{
  "results": [
    {
      "accountId": "1703194f-7805-4da8-bac0-2ba5da4a4216",
      "amount": 5062.39,
      "authorizedDate": "2021-07-06T00:00:00",
      "currency": "GBP",
      "description": "Payments for direct income ce149943-c157-43fc-aac7-42a716b655b6",
      "id": "0130b5bb-1419-40f6-8a27-7362d0381229",
      "merchantName": "New Look",
      "modifiedDate": "2022-05-23T16:32:50Z",
      "postedDate": "2021-07-06T00:00:00",
      "sourceModifiedDate": "2021-06-28T10:48:12",
      "transactionCategoryRef": {
        "id": "health-and-fitness-sports"
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
|results|[[Transaction](#schematransaction)]|false|none|none|
|_links|[Links](#schemalinks)|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|
