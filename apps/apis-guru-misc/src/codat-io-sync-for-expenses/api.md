<h1 id="codat-expense-api">Codat Expense API vprealpha</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The API for Sync for Expenses.
Sync for Expenses is an API and a set of supporting tools. It has been built to enable corporate card and expense management platforms to provide high-quality integrations with multiple accounting platforms through a standardized API.

[Read more...](https://docs.codat.io/sync-for-expenses/overview)

[See our OpenAPI spec](https://github.com/codatio/oas)

Base URLs:

* <a href="https://api.codat.io">https://api.codat.io</a>

<a href="https://www.codat.io/legals/">Terms of service</a>
Email: <a href="mailto:expenses@codat.io">Codat</a> 
Web: <a href="https://www.codat.io/">Codat</a> 

# Authentication

* API Key (auth_header)
    - Parameter Name: **Authorization**, in: header. The word "Basic" followed by a space and your API Key, base64 encoded, which can be found [here](https://app.codat.io/developers/api-keys)

<h1 id="codat-expense-api-connections">Connections</h1>

Create and manage partner expense connection.

## Create Partner Expense connection

<a id="opIdcreate-partner-expense-connection"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/expenses/connections/partnerExpense \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /companies/{companyId}/sync/expenses/connections/partnerExpense`

Creates a Partner Expense data connection

<h3 id="create-partner-expense-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "created": "2022-10-27T09:53:29Z",
  "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
  "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
  "integrationKey": "dfxm",
  "lastSync": "2022-10-27T10:22:43.6464237Z",
  "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
  "platformName": "Basiq",
  "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
  "sourceType": "Banking",
  "status": "Linked"
}
```

<h3 id="create-partner-expense-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DataConnection](#schemadataconnection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="codat-expense-api-configuration">Configuration</h1>

Companies sync configuration.

## Get company configuration

<a id="opIdget-company-configuration"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/expenses/config \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/sync/expenses/config`

Gets a companies expense sync configuration

<h3 id="get-company-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "bankAccount": {
    "id": "32"
  },
  "customer": {
    "id": "142"
  },
  "supplier": {
    "id": "124"
  }
}
```

<h3 id="get-company-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompanyConfiguration](#schemacompanyconfiguration)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Set company configuration

<a id="opIdsave-company-configuration"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/expenses/config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "bankAccount": {
      "id": "32"
    },
    "customer": {
      "id": "142"
    },
    "supplier": {
      "id": "124"
    }
  }'
```

`POST /companies/{companyId}/sync/expenses/config`

Sets a companies expense sync configuration

> Body parameter

```json
{
  "bankAccount": {
    "id": "32"
  },
  "customer": {
    "id": "142"
  },
  "supplier": {
    "id": "124"
  }
}
```

<h3 id="set-company-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|body|body|[CompanyConfiguration](#schemacompanyconfiguration)|false|none|
|» bankAccount|body|[BankAccount](#schemabankaccount)|false|none|
|» customer|body|[Customer](#schemacustomer)|false|none|
|» supplier|body|[Supplier](#schemasupplier)|false|none|

> Example responses

> 200 Response

```json
{
  "bankAccount": {
    "id": "32"
  },
  "customer": {
    "id": "142"
  },
  "supplier": {
    "id": "124"
  }
}
```

> 400 Response

```json
{
  "canBeRetried": "string",
  "correlationId": "string",
  "detailedErrorCode": 0,
  "error": "string",
  "inner": "string",
  "service": "string",
  "statusCode": 0,
  "validation": {
    "errors": [
      {
        "itemId": "string",
        "message": "string",
        "ruleId": "string",
        "validatorName": "string"
      }
    ],
    "hasErrors": true,
    "hasInternals": true,
    "hasWarnings": true,
    "internals": [
      {
        "itemId": "string",
        "message": "string",
        "ruleId": "string",
        "validatorName": "string"
      }
    ],
    "warnings": [
      {
        "itemId": "string",
        "message": "string",
        "ruleId": "string",
        "validatorName": "string"
      }
    ]
  }
}
```

<h3 id="set-company-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompanyConfiguration](#schemacompanyconfiguration)|
|400|Bad Request|Bad Request|[CodatErrorMessage](#schemacodaterrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="codat-expense-api-mapping-options">Mapping options</h1>

Mapping options for a companies expenses.

## Mapping options

<a id="opIdget-mapping-options"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/expenses/mappingOptions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/sync/expenses/mappingOptions`

Gets the expense mapping options for a companies accounting software

<h3 id="mapping-options-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "accounts": [
    {
      "accountType": "Expense",
      "currency": "GBP",
      "id": "6",
      "name": "Purchases",
      "validTransactionTypes": [
        "Payment"
      ]
    }
  ],
  "expenseProvider": "Partner Expense",
  "taxRates": [
    {
      "code": "UK Standard Rate (Bills)",
      "effectiveTaxRate": 20,
      "id": "59_Bills",
      "name": "UK Standard Rate (Bills) Bills",
      "totalTaxRate": 20,
      "validTransactionTypes": [
        "Payment"
      ]
    }
  ],
  "trackingCategories": [
    {
      "hasChildren": true,
      "id": "DEPARTMENT_2",
      "modifiedDate": "2022-10-23T00:00:00Z",
      "name": "New York",
      "parentId": "DEPARTMENTS"
    }
  ]
}
```

<h3 id="mapping-options-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MappingOptions](#schemamappingoptions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="codat-expense-api-sync">Sync</h1>

Triggering a new sync of expenses to accounting software.

## Initiate sync

<a id="opIdintiate-sync"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/expenses/syncs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "datasetIds": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
  }'
```

`POST /companies/{companyId}/sync/expenses/syncs`

Initiate sync of pending transactions.

> Body parameter

```json
{
  "datasetIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

<h3 id="initiate-sync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|body|body|[PostSync](#schemapostsync)|false|none|
|» datasetIds|body|[string(uuid)]|false|none|

> Example responses

> 202 Response

```json
{
  "syncId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 400 Response

```json
{
  "canBeRetried": "string",
  "correlationId": "string",
  "detailedErrorCode": 0,
  "error": "string",
  "inner": "string",
  "service": "string",
  "statusCode": 0,
  "validation": {
    "errors": [
      {
        "itemId": "string",
        "message": "string",
        "ruleId": "string",
        "validatorName": "string"
      }
    ],
    "hasErrors": true,
    "hasInternals": true,
    "hasWarnings": true,
    "internals": [
      {
        "itemId": "string",
        "message": "string",
        "ruleId": "string",
        "validatorName": "string"
      }
    ],
    "warnings": [
      {
        "itemId": "string",
        "message": "string",
        "ruleId": "string",
        "validatorName": "string"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "canBeRetried": "string",
  "correlationId": "string",
  "detailedErrorCode": 0,
  "error": "string",
  "inner": "string",
  "service": "string",
  "statusCode": 0,
  "validation": {
    "errors": [
      {
        "itemId": "string",
        "message": "string",
        "ruleId": "string",
        "validatorName": "string"
      }
    ],
    "hasErrors": true,
    "hasInternals": true,
    "hasWarnings": true,
    "internals": [
      {
        "itemId": "string",
        "message": "string",
        "ruleId": "string",
        "validatorName": "string"
      }
    ],
    "warnings": [
      {
        "itemId": "string",
        "message": "string",
        "ruleId": "string",
        "validatorName": "string"
      }
    ]
  }
}
```

> 422 Response

```json
{
  "canBeRetried": "string",
  "correlationId": "string",
  "detailedErrorCode": 0,
  "error": "string",
  "inner": "string",
  "service": "string",
  "statusCode": 0,
  "validation": {
    "errors": [
      {
        "itemId": "string",
        "message": "string",
        "ruleId": "string",
        "validatorName": "string"
      }
    ],
    "hasErrors": true,
    "hasInternals": true,
    "hasWarnings": true,
    "internals": [
      {
        "itemId": "string",
        "message": "string",
        "ruleId": "string",
        "validatorName": "string"
      }
    ],
    "warnings": [
      {
        "itemId": "string",
        "message": "string",
        "ruleId": "string",
        "validatorName": "string"
      }
    ]
  }
}
```

<h3 id="initiate-sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Returns the newly created SyncId|[SyncInitiated](#schemasyncinitiated)|
|400|Bad Request|If model is incorrect|[CodatErrorMessage](#schemacodaterrormessage)|
|404|Not Found|If company not found|[CodatErrorMessage](#schemacodaterrormessage)|
|422|Unprocessable Entity|If the specified company does not have a valid set of DataConnections setup|[CodatErrorMessage](#schemacodaterrormessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="codat-expense-api-sync-status">Sync status</h1>

Check the status of ongoing or previous expense syncs.

## Last successful sync

<a id="opIdget-last-successful-sync"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/expenses/syncs/lastSuccessful/status \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/sync/expenses/syncs/lastSuccessful/status`

Gets the status of the last successfull sync

<h3 id="last-successful-sync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "companyId": "d4d73051-ed31-42b6-99f6-d288cd940992",
  "dataPushed": true,
  "errorMessage": "string",
  "syncExceptionMessage": "string",
  "syncId": "a6a22aff-a43a-411d-a910-2dae73217cce",
  "syncStatus": "Completed",
  "syncStatusCode": 2000,
  "syncUtc": "2022-10-23T00:00:00Z"
}
```

<h3 id="last-successful-sync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompanySyncStatus](#schemacompanysyncstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Latest sync status

<a id="opIdget-latest-sync"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/expenses/syncs/latest/status \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/sync/expenses/syncs/latest/status`

Gets the latest sync status

<h3 id="latest-sync-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "companyId": "d4d73051-ed31-42b6-99f6-d288cd940992",
  "dataPushed": true,
  "errorMessage": "string",
  "syncExceptionMessage": "string",
  "syncId": "a6a22aff-a43a-411d-a910-2dae73217cce",
  "syncStatus": "Completed",
  "syncStatusCode": 2000,
  "syncUtc": "2022-10-23T00:00:00Z"
}
```

<h3 id="latest-sync-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompanySyncStatus](#schemacompanysyncstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## List sync statuses

<a id="opIdlist-syncs"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/expenses/syncs/list/status \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/sync/expenses/syncs/list/status`

Gets a list of sync statuses

<h3 id="list-sync-statuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "companyId": "d4d73051-ed31-42b6-99f6-d288cd940992",
    "dataPushed": true,
    "errorMessage": "string",
    "syncExceptionMessage": "string",
    "syncId": "a6a22aff-a43a-411d-a910-2dae73217cce",
    "syncStatus": "Completed",
    "syncStatusCode": 2000,
    "syncUtc": "2022-10-23T00:00:00Z"
  }
]
```

<h3 id="list-sync-statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="list-sync-statuses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CompanySyncStatus](#schemacompanysyncstatus)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get Sync status

<a id="opIdget-sync-by-id"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/expenses/syncs/6fb40d5e-b13e-11ed-afa1-0242ac120002/status \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/sync/expenses/syncs/{syncId}/status`

Get the sync status for a specified sync

<h3 id="get-sync-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|syncId|path|string(uuid)|true|Unique identifier for a sync.|

> Example responses

> 200 Response

```json
{
  "companyId": "d4d73051-ed31-42b6-99f6-d288cd940992",
  "dataPushed": true,
  "errorMessage": "string",
  "syncExceptionMessage": "string",
  "syncId": "a6a22aff-a43a-411d-a910-2dae73217cce",
  "syncStatus": "Completed",
  "syncStatusCode": 2000,
  "syncUtc": "2022-10-23T00:00:00Z"
}
```

<h3 id="get-sync-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CompanySyncStatus](#schemacompanysyncstatus)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="codat-expense-api-expenses">Expenses</h1>

Create expense datasets and upload receipts.

## Create expense-transactions

<a id="opIdcreate-expense-dataset"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/expenses/data/expense-transactions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "items": [
      {
        "currency": "GBP",
        "currencyRate": 1.18,
        "id": "4d7c6929-7770-412b-91bb-44d3bc71d111",
        "issueDate": "2021-05-21T00:00:00+00:00",
        "lines": [
          {
            "accountRef": {
              "id": "9aa5b894-1be9-4f97-96cd-ffde90766b3e"
            },
            "netAmount": 110.42,
            "taxAmount": 14.43,
            "taxRateRef": {
              "id": "77a32ee2-60c7-4ab9-917a-bd82e2e43a26"
            },
            "trackingRefs": [
              {
                "id": "dde5b35f-5d33-40bd-a34f-ee529f4c785c"
              }
            ]
          }
        ],
        "merchantName": "Amazon UK",
        "notes": "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
        "type": "Payment"
      }
    ]
  }'
```

`POST /companies/{companyId}/sync/expenses/data/expense-transactions`

Create an expense transaction

> Body parameter

```json
{
  "items": [
    {
      "currency": "GBP",
      "currencyRate": 1.18,
      "id": "4d7c6929-7770-412b-91bb-44d3bc71d111",
      "issueDate": "2021-05-21T00:00:00+00:00",
      "lines": [
        {
          "accountRef": {
            "id": "9aa5b894-1be9-4f97-96cd-ffde90766b3e"
          },
          "netAmount": 110.42,
          "taxAmount": 14.43,
          "taxRateRef": {
            "id": "77a32ee2-60c7-4ab9-917a-bd82e2e43a26"
          },
          "trackingRefs": [
            {
              "id": "dde5b35f-5d33-40bd-a34f-ee529f4c785c"
            }
          ]
        }
      ],
      "merchantName": "Amazon UK",
      "notes": "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
      "type": "Payment"
    }
  ]
}
```

<h3 id="create-expense-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|body|body|[CreateExpenseRequest](#schemacreateexpenserequest)|false|none|
|» items|body|[[ExpenseTransaction](#schemaexpensetransaction)]|false|none|

> Example responses

> 200 Response

```json
{
  "datasetId": "cd937d46-8e41-43a9-9477-a79158ffd98a"
}
```

<h3 id="create-expense-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreateExpenseResponse](#schemacreateexpenseresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Upload attachment

<a id="opIdupload-attachment"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/expenses/syncs/6fb40d5e-b13e-11ed-afa1-0242ac120002/transactions/336694d8-2dca-4cb5-a28d-3ccb83e55eee/attachments \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /companies/{companyId}/sync/expenses/syncs/{syncId}/transactions/{transactionId}/attachments`

Creates an attachment in the accounting software against the given transactionId

<h3 id="upload-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|transactionId|path|string(uuid)|true|The unique identifier for your SMB's transaction.|
|syncId|path|string(uuid)|true|Unique identifier for a sync.|
|body|body|string(binary)|false|none|

> Example responses

> 200 Response

```json
{
  "companyId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "string",
  "transactionId": "string"
}
```

<h3 id="upload-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Attachment](#schemaattachment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

<h1 id="codat-expense-api-transaction-status">Transaction status</h1>

Retrieve the status of transactions within a sync.

## Get Sync transactions

<a id="opIdlist-sync-transactions"></a>

> Code samples

```bash
curl 'https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/expenses/syncs/6fb40d5e-b13e-11ed-afa1-0242ac120002/transactions?page=1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/sync/expenses/syncs/{syncId}/transactions`

Get's the transactions and status for a sync

<h3 id="get-sync-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|syncId|path|string(uuid)|true|Unique identifier for a sync.|
|page|query|integer(int32)|true|Page number. [Read more](https://docs.codat.io/using-the-api/paging).|
|pageSize|query|integer(int32)|false|Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "integrationType": "expenses",
      "message": "string",
      "status": "Completed",
      "transactionId": "aa02271d-ed5f-47f5-be76-778d5905225a"
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

<h3 id="get-sync-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TransactionMetadataList](#schematransactionmetadatalist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

## Get Sync Transaction

<a id="opIdget-sync-transaction"></a>

> Code samples

```bash
curl https://example.com/companies/8a210b68-6988-11ed-a1eb-0242ac120002/sync/expenses/syncs/6fb40d5e-b13e-11ed-afa1-0242ac120002/transactions/336694d8-2dca-4cb5-a28d-3ccb83e55eee \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /companies/{companyId}/sync/expenses/syncs/{syncId}/transactions/{transactionId}`

Gets the status of a transaction for a sync

<h3 id="get-sync-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string(uuid)|true|none|
|syncId|path|string(uuid)|true|Unique identifier for a sync.|
|transactionId|path|string(uuid)|true|The unique identifier for your SMB's transaction.|

> Example responses

> 200 Response

```json
[
  {
    "integrationType": "expenses",
    "message": "string",
    "status": "Completed",
    "transactionId": "aa02271d-ed5f-47f5-be76-778d5905225a"
  }
]
```

<h3 id="get-sync-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-sync-transaction-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TransactionMetadata](#schematransactionmetadata)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
auth_header
</aside>

# Schemas

<h2 id="tocS_AccountMappingInfo">AccountMappingInfo</h2>
<!-- backwards compatibility -->
<a id="schemaaccountmappinginfo"></a>
<a id="schema_AccountMappingInfo"></a>
<a id="tocSaccountmappinginfo"></a>
<a id="tocsaccountmappinginfo"></a>

```json
{
  "accountType": "Expense",
  "currency": "GBP",
  "id": "6",
  "name": "Purchases",
  "validTransactionTypes": [
    "Payment"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountType|string \| null|false|none|Type of the account.|
|currency|string \| null|false|none|Currency of the account.|
|id|string \| null|false|none|Unique identifier of account.|
|name|string \| null|false|none|Name of the account as it appears in the companies accounting software.|
|validTransactionTypes|[string]|false|none|Supported transaction types for the account.|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|Asset|
|accountType|Liability|
|accountType|Income|
|accountType|Expense|
|accountType|Equity|
|validTransactionTypes|Payment|
|validTransactionTypes|Refund|
|validTransactionTypes|Reward|
|validTransactionTypes|Chargeback|
|validTransactionTypes|TransferIn|
|validTransactionTypes|TransferOut|
|validTransactionTypes|AdjustmentIn|
|validTransactionTypes|AdjustmentOut|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "companyId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "id": "string",
  "transactionId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyId|string(uuid)|false|none|Unique ID of company in Codat|
|id|string|false|none|Unique identifier of attachment|
|transactionId|string|false|none|Unique identifier of transaction|

<h2 id="tocS_BankAccount">BankAccount</h2>
<!-- backwards compatibility -->
<a id="schemabankaccount"></a>
<a id="schema_BankAccount"></a>
<a id="tocSbankaccount"></a>
<a id="tocsbankaccount"></a>

```json
{
  "id": "32"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The id of the account from which purchases are made|

<h2 id="tocS_CodatErrorMessage">CodatErrorMessage</h2>
<!-- backwards compatibility -->
<a id="schemacodaterrormessage"></a>
<a id="schema_CodatErrorMessage"></a>
<a id="tocScodaterrormessage"></a>
<a id="tocscodaterrormessage"></a>

```json
{
  "canBeRetried": "string",
  "correlationId": "string",
  "detailedErrorCode": 0,
  "error": "string",
  "inner": "string",
  "service": "string",
  "statusCode": 0,
  "validation": {
    "errors": [
      {
        "itemId": "string",
        "message": "string",
        "ruleId": "string",
        "validatorName": "string"
      }
    ],
    "hasErrors": true,
    "hasInternals": true,
    "hasWarnings": true,
    "internals": [
      {
        "itemId": "string",
        "message": "string",
        "ruleId": "string",
        "validatorName": "string"
      }
    ],
    "warnings": [
      {
        "itemId": "string",
        "message": "string",
        "ruleId": "string",
        "validatorName": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canBeRetried|string|false|none|none|
|correlationId|string|false|none|none|
|detailedErrorCode|integer|false|none|none|
|error|string|false|none|none|
|inner|string|false|none|none|
|service|string|false|none|none|
|statusCode|integer|false|none|none|
|validation|object|false|none|none|

<h2 id="tocS_CompanyConfiguration">CompanyConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemacompanyconfiguration"></a>
<a id="schema_CompanyConfiguration"></a>
<a id="tocScompanyconfiguration"></a>
<a id="tocscompanyconfiguration"></a>

```json
{
  "bankAccount": {
    "id": "32"
  },
  "customer": {
    "id": "142"
  },
  "supplier": {
    "id": "124"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankAccount|[BankAccount](#schemabankaccount)|false|none|none|
|customer|[Customer](#schemacustomer)|false|none|none|
|supplier|[Supplier](#schemasupplier)|false|none|none|

<h2 id="tocS_CompanySyncStatus">CompanySyncStatus</h2>
<!-- backwards compatibility -->
<a id="schemacompanysyncstatus"></a>
<a id="schema_CompanySyncStatus"></a>
<a id="tocScompanysyncstatus"></a>
<a id="tocscompanysyncstatus"></a>

```json
{
  "companyId": "d4d73051-ed31-42b6-99f6-d288cd940992",
  "dataPushed": true,
  "errorMessage": "string",
  "syncExceptionMessage": "string",
  "syncId": "a6a22aff-a43a-411d-a910-2dae73217cce",
  "syncStatus": "Completed",
  "syncStatusCode": 2000,
  "syncUtc": "2022-10-23T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyId|string \| null|false|none|Unique identifier for your SMB in Codat.|
|dataPushed|boolean|false|none|Boolean of whether the sync resulted in data being pushed.|
|errorMessage|string \| null|false|none|Error message of the sync.|
|syncExceptionMessage|string \| null|false|none|Exception message of the sync.|
|syncId|string \| null|false|none|Unique identifier of the sync.|
|syncStatus|string \| null|false|none|Text status of the sync.|
|syncStatusCode|integer(int32)|false|none|Status code of the sync.|
|syncUtc|string|false|none|Datetime of the sync.|

<h2 id="tocS_CreateExpenseRequest">CreateExpenseRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateexpenserequest"></a>
<a id="schema_CreateExpenseRequest"></a>
<a id="tocScreateexpenserequest"></a>
<a id="tocscreateexpenserequest"></a>

```json
{
  "items": [
    {
      "currency": "GBP",
      "currencyRate": 0,
      "id": "4d7c6929-7770-412b-91bb-44d3bc71d111",
      "issueDate": "2022-10-23T00:00:00Z",
      "lines": [
        {
          "accountRef": {
            "id": "40e3e57c-2322-4898-966c-ca41adfd23fd"
          },
          "netAmount": 110.42,
          "taxAmount": 14.43,
          "taxRateRef": {
            "id": "40e3e57c-2322-4898-966c-ca41adfd23fd"
          },
          "trackingRefs": [
            {
              "id": "40e3e57c-2322-4898-966c-ca41adfd23fd"
            }
          ]
        }
      ],
      "merchantName": "Amazon UK",
      "notes": "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
      "type": "Payment"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[ExpenseTransaction](#schemaexpensetransaction)]|false|none|none|

<h2 id="tocS_CreateExpenseResponse">CreateExpenseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateexpenseresponse"></a>
<a id="schema_CreateExpenseResponse"></a>
<a id="tocScreateexpenseresponse"></a>
<a id="tocscreateexpenseresponse"></a>

```json
{
  "datasetId": "cd937d46-8e41-43a9-9477-a79158ffd98a"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|string(uuid)|false|none|Unique id of dataset created|

<h2 id="tocS_Customer">Customer</h2>
<!-- backwards compatibility -->
<a id="schemacustomer"></a>
<a id="schema_Customer"></a>
<a id="tocScustomer"></a>
<a id="tocscustomer"></a>

```json
{
  "id": "142"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|id of the customer for all income related activities to be associated to.|

<h2 id="tocS_DataConnection">DataConnection</h2>
<!-- backwards compatibility -->
<a id="schemadataconnection"></a>
<a id="schema_DataConnection"></a>
<a id="tocSdataconnection"></a>
<a id="tocsdataconnection"></a>

```json
{
  "created": "2022-10-27T09:53:29Z",
  "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
  "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
  "integrationKey": "dfxm",
  "lastSync": "2022-10-27T10:22:43.6464237Z",
  "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
  "platformName": "Basiq",
  "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
  "sourceType": "Banking",
  "status": "Linked"
}
```

A connection represents the link between a `company` and a source of data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionInfo|object|false|none|none|
|created|string|true|none|In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:<br><br>```<br>2020-10-08T22:40:50Z<br>2021-01-01T00:00:00<br>```<br><br><br><br>When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:<br><br>- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`<br>- Unqualified local time: `2021-11-15T01:00:00`<br>- UTC time offsets: `2021-11-15T01:00:00-05:00`<br><br>> Time zones<br>> <br>> Not all dates from Codat will contain information about time zones.  <br>> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.|
|dataConnectionErrors|[object]|false|none|none|
|id|string(uuid)|true|none|Unique identifier for a company's data connection.|
|integrationId|string(uuid)|true|none|A Codat ID representing the integration.|
|integrationKey|string|true|none|A unique four-character ID that identifies the platform of the company's data connection. This ensures continuity if the platform changes its name in the future.|
|lastSync|string|false|none|In Codat's data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:<br><br>```<br>2020-10-08T22:40:50Z<br>2021-01-01T00:00:00<br>```<br><br><br><br>When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:<br><br>- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`<br>- Unqualified local time: `2021-11-15T01:00:00`<br>- UTC time offsets: `2021-11-15T01:00:00-05:00`<br><br>> Time zones<br>> <br>> Not all dates from Codat will contain information about time zones.  <br>> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.|
|linkUrl|string(uri)|true|none|none|
|platformName|string|true|none|none|
|sourceId|string(uuid)|true|none|A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, `sourceId` is associated with a specific bank and has a many-to-one relationship with the `integrationId`.|
|sourceType|string|true|none|The type of platform of the connection.|
|status|string|true|none|The current authorization status of the data connection.|

#### Enumerated Values

|Property|Value|
|---|---|
|sourceType|Accounting|
|sourceType|Banking|
|sourceType|Commerce|
|sourceType|Other|
|sourceType|Unknown|
|status|PendingAuth|
|status|Linked|
|status|Unlinked|
|status|Deauthorized|

<h2 id="tocS_ExpenseTransaction">ExpenseTransaction</h2>
<!-- backwards compatibility -->
<a id="schemaexpensetransaction"></a>
<a id="schema_ExpenseTransaction"></a>
<a id="tocSexpensetransaction"></a>
<a id="tocsexpensetransaction"></a>

```json
{
  "currency": "GBP",
  "currencyRate": 0,
  "id": "4d7c6929-7770-412b-91bb-44d3bc71d111",
  "issueDate": "2022-10-23T00:00:00Z",
  "lines": [
    {
      "accountRef": {
        "id": "40e3e57c-2322-4898-966c-ca41adfd23fd"
      },
      "netAmount": 110.42,
      "taxAmount": 14.43,
      "taxRateRef": {
        "id": "40e3e57c-2322-4898-966c-ca41adfd23fd"
      },
      "trackingRefs": [
        {
          "id": "40e3e57c-2322-4898-966c-ca41adfd23fd"
        }
      ]
    }
  ],
  "merchantName": "Amazon UK",
  "notes": "APPLE.COM/BILL - 09001077498 - Card Ending: 4590",
  "type": "Payment"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|Currency the transaction was recorded in.|
|currencyRate|number \| null|false|none|Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.<br><br>Currency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.  <br><br>Where the currency rate is provided by the underlying accounting platform, it will be available from Codat with the same precision (up to a maximum of 9 decimal places). <br><br>For accounting platforms which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.<br><br>## Examples with base currency of GBP<br><br>\| Foreign Currency \| Foreign Amount \| Currency Rate \| Base Currency Amount (GBP) \|<br>\| :--------------- \| :------------- \| :------------ \| :------------------------- \|<br>\| **USD**          \| $20            \| 0.781         \| £15.62                     \|<br>\| **EUR**          \| €20            \| 0.885         \| £17.70                     \|<br>\| **RUB**          \| ₽20            \| 0.011         \| £0.22                      \|<br><br>## Examples with base currency of USD<br><br>\| Foreign Currency \| Foreign Amount \| Currency Rate \| Base Currency Amount (USD) \|<br>\| :--------------- \| :------------- \| :------------ \| :------------------------- \|<br>\| **GBP**          \| £20            \| 1.277         \| $25.54                     \|<br>\| **EUR**          \| €20            \| 1.134         \| $22.68                     \|<br>\| **RUB**          \| ₽20            \| 0.015         \| $0.30                      \||
|id|string(uuid)|true|none|Your unique idenfier for the transaction.|
|issueDate|string|true|none|Date of the transaction was recorded.|
|lines|[[ExpenseTransactionLine](#schemaexpensetransactionline)]|false|none|Array of transaction lines.|
|merchantName|string|false|none|Name of the merchant where the purchase took place|
|notes|string|false|none|Any private, company notes about the transaction.|
|type|string|true|none|The type of transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Payment|
|type|Refund|
|type|Reward|
|type|Chargeback|
|type|TransferIn|
|type|TransferOut|
|type|AdjustmentIn|
|type|AdjustmentOut|

<h2 id="tocS_ExpenseTransactionLine">ExpenseTransactionLine</h2>
<!-- backwards compatibility -->
<a id="schemaexpensetransactionline"></a>
<a id="schema_ExpenseTransactionLine"></a>
<a id="tocSexpensetransactionline"></a>
<a id="tocsexpensetransactionline"></a>

```json
{
  "accountRef": {
    "id": "40e3e57c-2322-4898-966c-ca41adfd23fd"
  },
  "netAmount": 110.42,
  "taxAmount": 14.43,
  "taxRateRef": {
    "id": "40e3e57c-2322-4898-966c-ca41adfd23fd"
  },
  "trackingRefs": [
    {
      "id": "40e3e57c-2322-4898-966c-ca41adfd23fd"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountRef|[RecordRef](#schemarecordref)|true|none|none|
|netAmount|number|true|none|Amount of the line, exclusive of tax.|
|taxAmount|number|true|none|Amount of tax for the line.|
|taxRateRef|[RecordRef](#schemarecordref)|false|none|none|
|trackingRefs|[[RecordRef](#schemarecordref)]|false|none|none|

<h2 id="tocS_HalLink">HalLink</h2>
<!-- backwards compatibility -->
<a id="schemahallink"></a>
<a id="schema_HalLink"></a>
<a id="tocShallink"></a>
<a id="tocshallink"></a>

```json
{
  "href": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string(uri-reference)|false|none|none|

<h2 id="tocS_IntegrationType">IntegrationType</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationtype"></a>
<a id="schema_IntegrationType"></a>
<a id="tocSintegrationtype"></a>
<a id="tocsintegrationtype"></a>

```json
"expenses"
```

Type of transaction that has been processed e.g. Expense or Bank Feed.

<h2 id="tocS_MappingOptions">MappingOptions</h2>
<!-- backwards compatibility -->
<a id="schemamappingoptions"></a>
<a id="schema_MappingOptions"></a>
<a id="tocSmappingoptions"></a>
<a id="tocsmappingoptions"></a>

```json
{
  "accounts": [
    {
      "accountType": "Expense",
      "currency": "GBP",
      "id": "6",
      "name": "Purchases",
      "validTransactionTypes": [
        "Payment"
      ]
    }
  ],
  "expenseProvider": "Partner Expense",
  "taxRates": [
    {
      "code": "UK Standard Rate (Bills)",
      "effectiveTaxRate": 20,
      "id": "59_Bills",
      "name": "UK Standard Rate (Bills) Bills",
      "totalTaxRate": 20,
      "validTransactionTypes": [
        "Payment"
      ]
    }
  ],
  "trackingCategories": [
    {
      "hasChildren": true,
      "id": "DEPARTMENT_2",
      "modifiedDate": "2022-10-23T00:00:00Z",
      "name": "New York",
      "parentId": "DEPARTMENTS"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[AccountMappingInfo](#schemaaccountmappinginfo)]|false|none|Array of available accounts for mapping.|
|expenseProvider|string \| null|false|none|Name of the expense integration.|
|taxRates|[[TaxRateMappingInfo](#schemataxratemappinginfo)]|false|none|Array of available tax rates for mapping.|
|trackingCategories|[[TrackingCategoryMappingInfo](#schematrackingcategorymappinginfo)]|false|none|Array of available tracking categories for mapping.|

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
|_links|object|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_PostSync">PostSync</h2>
<!-- backwards compatibility -->
<a id="schemapostsync"></a>
<a id="schema_PostSync"></a>
<a id="tocSpostsync"></a>
<a id="tocspostsync"></a>

```json
{
  "datasetIds": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetIds|[string(uuid)]|false|none|none|

<h2 id="tocS_RecordRef">RecordRef</h2>
<!-- backwards compatibility -->
<a id="schemarecordref"></a>
<a id="schema_RecordRef"></a>
<a id="tocSrecordref"></a>
<a id="tocsrecordref"></a>

```json
{
  "id": "40e3e57c-2322-4898-966c-ca41adfd23fd"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|identifier of linked reference from mapping options.|

<h2 id="tocS_Supplier">Supplier</h2>
<!-- backwards compatibility -->
<a id="schemasupplier"></a>
<a id="schema_Supplier"></a>
<a id="tocSsupplier"></a>
<a id="tocssupplier"></a>

```json
{
  "id": "124"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|id of the supplier for all purchases to be associated to|

<h2 id="tocS_SyncInitiated">SyncInitiated</h2>
<!-- backwards compatibility -->
<a id="schemasyncinitiated"></a>
<a id="schema_SyncInitiated"></a>
<a id="tocSsyncinitiated"></a>
<a id="tocssyncinitiated"></a>

```json
{
  "syncId": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|syncId|string(uuid)|false|none|none|

<h2 id="tocS_TaxRateMappingInfo">TaxRateMappingInfo</h2>
<!-- backwards compatibility -->
<a id="schemataxratemappinginfo"></a>
<a id="schema_TaxRateMappingInfo"></a>
<a id="tocStaxratemappinginfo"></a>
<a id="tocstaxratemappinginfo"></a>

```json
{
  "code": "UK Standard Rate (Bills)",
  "effectiveTaxRate": 20,
  "id": "59_Bills",
  "name": "UK Standard Rate (Bills) Bills",
  "totalTaxRate": 20,
  "validTransactionTypes": [
    "Payment"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|Code for the tax rate from the accounting platform.|
|effectiveTaxRate|number|false|none|Effective tax rate.|
|id|string \| null|false|none|Unique identifier of tax rate.|
|name|string \| null|false|none|Name of the tax rate in the accounting platform.|
|totalTaxRate|number|false|none|Total (not compounded) sum of the components of a tax rate.|
|validTransactionTypes|[string]|false|none|Supported transaction types for the account.|

#### Enumerated Values

|Property|Value|
|---|---|
|validTransactionTypes|Payment|
|validTransactionTypes|Refund|
|validTransactionTypes|Reward|
|validTransactionTypes|Chargeback|
|validTransactionTypes|TransferIn|
|validTransactionTypes|TransferOut|
|validTransactionTypes|AdjustmentIn|
|validTransactionTypes|AdjustmentOut|

<h2 id="tocS_TrackingCategoryMappingInfo">TrackingCategoryMappingInfo</h2>
<!-- backwards compatibility -->
<a id="schematrackingcategorymappinginfo"></a>
<a id="schema_TrackingCategoryMappingInfo"></a>
<a id="tocStrackingcategorymappinginfo"></a>
<a id="tocstrackingcategorymappinginfo"></a>

```json
{
  "hasChildren": true,
  "id": "DEPARTMENT_2",
  "modifiedDate": "2022-10-23T00:00:00Z",
  "name": "New York",
  "parentId": "DEPARTMENTS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasChildren|boolean|false|none|Boolean of whether the tracking category has child categories.|
|id|string \| null|false|none|Unique identifier of the tracking category.|
|modifiedDate|string|false|none|Datetime when the tracking category was last modified.|
|name|string \| null|false|none|Name of the tracking category as it appears in the accounting software.|
|parentId|string \| null|false|none|ID of the parent tracking category|

<h2 id="tocS_TransactionMetadata">TransactionMetadata</h2>
<!-- backwards compatibility -->
<a id="schematransactionmetadata"></a>
<a id="schema_TransactionMetadata"></a>
<a id="tocStransactionmetadata"></a>
<a id="tocstransactionmetadata"></a>

```json
{
  "integrationType": "expenses",
  "message": "string",
  "status": "Completed",
  "transactionId": "aa02271d-ed5f-47f5-be76-778d5905225a"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integrationType|[IntegrationType](#schemaintegrationtype)|false|none|Type of transaction that has been processed e.g. Expense or Bank Feed.|
|message|string \| null|false|none|Metadata such as validation errors or the resulting record created in the accounting software.|
|status|[TransactionStatus](#schematransactionstatus)|false|none|Status of the transaction.|
|transactionId|string \| null|false|none|Your unique idenfier of the transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|integrationType|expenses|
|integrationType|bankfeeds|
|status|Unknown|
|status|Pending|
|status|ValidationError|
|status|Completed|
|status|PushError|

<h2 id="tocS_TransactionMetadataList">TransactionMetadataList</h2>
<!-- backwards compatibility -->
<a id="schematransactionmetadatalist"></a>
<a id="schema_TransactionMetadataList"></a>
<a id="tocStransactionmetadatalist"></a>
<a id="tocstransactionmetadatalist"></a>

```json
{
  "results": [
    {
      "integrationType": "expenses",
      "message": "string",
      "status": "Completed",
      "transactionId": "aa02271d-ed5f-47f5-be76-778d5905225a"
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
|results|[[TransactionMetadata](#schematransactionmetadata)]|false|none|none|
|_links|object|true|none|none|
|pageNumber|integer|true|none|none|
|pageSize|integer|true|none|none|
|totalResults|integer|true|none|none|

<h2 id="tocS_TransactionStatus">TransactionStatus</h2>
<!-- backwards compatibility -->
<a id="schematransactionstatus"></a>
<a id="schema_TransactionStatus"></a>
<a id="tocStransactionstatus"></a>
<a id="tocstransactionstatus"></a>

```json
"Completed"
```

Status of the transaction.
