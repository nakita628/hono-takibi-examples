<h1 id="big-red-cloud-api">Big Red Cloud API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


<div style='line-height: 30px;'>
    <strong>Welcome to the Big Red Cloud API</strong><br/>
    This API enables programmatic access to Big Red Cloud data.<br/>
    We have used Swagger to auto generate the API documentation on this page, and it also enables direct interaction with the API in this page. <br/>
    To get started, you will require an API Key - check out our guide at <a target='_blank' href='https://www.bigredcloud.com/support/generating-api-key-guide/'>https://www.bigredcloud.com/support/generating-api-key-guide/</a> for information on how to get one. <br/>
    Use the  'Enter API Key' button below to enter your API key and start interacting with your Big Red Cloud data right on this page. <br/>
    The API key will be stored in your browsers local storage for convenience, but you will be able to delete it at any time if you wish. <br/>
    For additional information on the API, check out our support article at <a target='_blank' href='https://www.bigredcloud.com/support/api/'>https://www.bigredcloud.com/support/api/</a><br/>
</div>

Base URLs:

* <a href="https://app.bigredcloud.com/api">https://app.bigredcloud.com/api</a>

<h1 id="big-red-cloud-api-accounts">Accounts</h1>

## Returns a list of company's Accounts. Supports OData querying protocol. Filtering is forbidden. Ordering is allowed by &quot;id&quot; and &quot;code&quot; fields.

<a id="opIdAccounts_Get"></a>

> Code samples

```bash
curl https://example.com/v1/accounts \
  -H 'Accept: application/json'
```

`GET /v1/accounts`

> Example responses

> 200 Response

```json
{
  "Count": 3,
  "Items": [
    {
      "accountGroup": "Sales",
      "accountType": "Profit and Loss",
      "code": "000",
      "description": "SALES",
      "id": 355
    },
    {
      "accountGroup": "Sales",
      "accountType": "Profit and Loss",
      "code": "008",
      "description": "SALES STOCK",
      "id": 428
    },
    {
      "accountGroup": "Other Income",
      "accountType": "Profit and Loss",
      "code": "050",
      "description": "DISCOUNT RECEIVED",
      "id": 349
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-accounts-supports-odata-querying-protocol-filtering-is-forbidden-ordering-is-allowed-by-id-and-code-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_AccountDto_](#schemapageresult_accountdto_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-analysiscategories">AnalysisCategories</h1>

## Returns a list of company's Analysis Categories. Supports OData querying protocol. Filtering is allowed by &quot;categoryTypeId&quot; field. Ordering is allowed by &quot;id&quot; and &quot;orderIndex&quot; fields.

<a id="opIdAnalysisCategories_Get"></a>

> Code samples

```bash
curl https://example.com/v1/analysisCategories \
  -H 'Accept: application/json'
```

`GET /v1/analysisCategories`

> Example responses

> 200 Response

```json
{
  "Count": 3,
  "Items": [
    {
      "accountCode": "000",
      "accountId": 355,
      "categoryTypeId": 19,
      "description": "AnCat1",
      "id": 1,
      "orderIndex": 1
    },
    {
      "accountCode": "000",
      "accountId": 355,
      "categoryTypeId": 19,
      "description": "AnCat2",
      "id": 2,
      "orderIndex": 2
    },
    {
      "accountCode": "000",
      "accountId": 355,
      "categoryTypeId": 19,
      "description": "AnCat3",
      "id": 3,
      "orderIndex": 3
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-analysis-categories-supports-odata-querying-protocol-filtering-is-allowed-by-categorytypeid-field-ordering-is-allowed-by-id-and-orderindex-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_AnalysisCategoryDto_](#schemapageresult_analysiscategorydto_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-bankaccounts">BankAccounts</h1>

## Returns a list of company's Bank Account. Supports OData querying protocol. Filtering is forbidden. Ordering is allowed by &quot;id&quot; and &quot;acCode&quot; fields.

<a id="opIdBankAccounts_Get"></a>

> Code samples

```bash
curl https://example.com/v1/bankAccounts \
  -H 'Accept: application/json'
```

`GET /v1/bankAccounts`

> Example responses

> 200 Response

```json
{
  "Count": 1,
  "Items": [
    {
      "acCode": "B1",
      "accountName": "",
      "accountNumber": "83700896",
      "address": [
        "Address Line 1",
        "Address Line 2"
      ],
      "bankFeedSource": 0,
      "businessIdentifierCodes": "AIBKIE2D",
      "categoryId": 41704,
      "creditorScheme": "XXXX",
      "details": "Bank_111111111111111111",
      "id": 1,
      "internationalBankAccountNumber": "IE67 BOFI 9027 0925 7277 59",
      "isDefaultBank": false,
      "lastChq": "000005",
      "nominalAcCode": "B101",
      "oBalance": 0,
      "sortCode": "900284",
      "timestamp": "QUFBQUFBQUFDcXc9"
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-bank-account-supports-odata-querying-protocol-filtering-is-forbidden-ordering-is-allowed-by-id-and-accode-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_BankAccountQueryDto_](#schemapageresult_bankaccountquerydto_)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new Bank Account.

<a id="opIdBankAccounts_Post"></a>

> Code samples

```bash
curl https://example.com/v1/bankAccounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acCode": "B1",
    "accountName": "",
    "accountNumber": "83700896",
    "address": [
      "Address Line 1",
      "Address Line 2"
    ],
    "bankFeedSource": 0,
    "businessIdentifierCodes": "AIBKIE2D",
    "categoryId": 41704,
    "creditorScheme": "XXXX",
    "details": "Bank_1",
    "id": 1,
    "internationalBankAccountNumber": "IE67 BOFI 9027 0925 7277 59",
    "isDefaultBank": false,
    "lastChq": "000005",
    "nominalAcCode": "B101",
    "oBalance": 0,
    "sortCode": "900284",
    "timestamp": "QUFBQUFBQUFDcXc9"
  }'
```

`POST /v1/bankAccounts`

> Body parameter

```json
{
  "acCode": "B1",
  "accountName": "",
  "accountNumber": "83700896",
  "address": [
    "Address Line 1",
    "Address Line 2"
  ],
  "bankFeedSource": 0,
  "businessIdentifierCodes": "AIBKIE2D",
  "categoryId": 41704,
  "creditorScheme": "XXXX",
  "details": "Bank_1",
  "id": 1,
  "internationalBankAccountNumber": "IE67 BOFI 9027 0925 7277 59",
  "isDefaultBank": false,
  "lastChq": "000005",
  "nominalAcCode": "B101",
  "oBalance": 0,
  "sortCode": "900284",
  "timestamp": "QUFBQUFBQUFDcXc9"
}
```

<h3 id="creates-a-new-bank-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BankAccountDto](#schemabankaccountdto)|true|Information of Bank Account to create.|
|» acCode|body|string|false|none|
|» accountName|body|string|false|none|
|» accountNumber|body|string|false|none|
|» address|body|[string]|false|none|
|» bankFeedSource|body|integer(int32)|false|none|
|» businessIdentifierCodes|body|string|false|none|
|» categoryId|body|integer(int64)|false|none|
|» creditorScheme|body|string|false|none|
|» details|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» internationalBankAccountNumber|body|string|false|none|
|» isDefaultBank|body|boolean|false|none|
|» lastChq|body|string|false|none|
|» nominalAcCode|body|string|false|none|
|» oBalance|body|number(double)|false|none|
|» sortCode|body|string|false|none|
|» timestamp|body|string(byte)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="creates-a-new-bank-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Processes a batch of Bank Accounts.

<a id="opIdBankAccounts_ProcessBatch"></a>

> Code samples

```bash
curl https://example.com/v1/bankAccounts/batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": {
        "acCode": "B1",
        "accountName": "",
        "accountNumber": "83700896",
        "address": [
          "Address Line 1",
          "Address Line 2"
        ],
        "bankFeedSource": 0,
        "businessIdentifierCodes": "AIBKIE2D",
        "categoryId": 41704,
        "creditorScheme": "XXXX",
        "details": "Bank_111111111111111111",
        "id": 1,
        "internationalBankAccountNumber": "IE67 BOFI 9027 0925 7277 59",
        "isDefaultBank": false,
        "lastChq": "000005",
        "nominalAcCode": "B101",
        "oBalance": 0,
        "sortCode": "900284",
        "timestamp": "QUFBQUFBQUFDcXc9"
      },
      "opCode": 1
    }
  ]'
```

`PUT /v1/bankAccounts/batch`

> Body parameter

```json
[
  {
    "item": {
      "acCode": "B1",
      "accountName": "",
      "accountNumber": "83700896",
      "address": [
        "Address Line 1",
        "Address Line 2"
      ],
      "bankFeedSource": 0,
      "businessIdentifierCodes": "AIBKIE2D",
      "categoryId": 41704,
      "creditorScheme": "XXXX",
      "details": "Bank_111111111111111111",
      "id": 1,
      "internationalBankAccountNumber": "IE67 BOFI 9027 0925 7277 59",
      "isDefaultBank": false,
      "lastChq": "000005",
      "nominalAcCode": "B101",
      "oBalance": 0,
      "sortCode": "900284",
      "timestamp": "QUFBQUFBQUFDcXc9"
    },
    "opCode": 1
  }
]
```

<h3 id="processes-a-batch-of-bank-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[BatchItem_BankAccountDto_](#schemabatchitem_bankaccountdto_)]|true|Batch of Bank Accounts to process.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="processes-a-batch-of-bank-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns information about a single Bank Account.

> Code samples

```bash
curl https://example.com/v1/bankAccounts/0 \
  -H 'Accept: application/json'
```

`GET /v1/bankAccounts/{id}`

<h3 id="returns-information-about-a-single-bank-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Bank Account to return.|

> Example responses

> 200 Response

```json
{
  "acCode": "B1",
  "accountName": "",
  "accountNumber": "83700896",
  "address": [
    "Address Line 1",
    "Address Line 2"
  ],
  "bankFeedSource": 0,
  "businessIdentifierCodes": "AIBKIE2D",
  "categoryId": 41704,
  "creditorScheme": "XXXX",
  "details": "Bank_1",
  "id": 1,
  "internationalBankAccountNumber": "IE67 BOFI 9027 0925 7277 59",
  "isDefaultBank": false,
  "lastChq": "000005",
  "nominalAcCode": "B101",
  "oBalance": 0,
  "sortCode": "900284",
  "timestamp": "QUFBQUFBQUFDcXc9"
}
```

<h3 id="returns-information-about-a-single-bank-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BankAccountDto](#schemabankaccountdto)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates an existing Bank Account.

<a id="opIdBankAccounts_Put"></a>

> Code samples

```bash
curl https://example.com/v1/bankAccounts/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acCode": "B1",
    "accountName": "",
    "accountNumber": "83700896",
    "address": [
      "Address Line 1",
      "Address Line 2"
    ],
    "bankFeedSource": 0,
    "businessIdentifierCodes": "AIBKIE2D",
    "categoryId": 41704,
    "creditorScheme": "XXXX",
    "details": "Bank_1",
    "id": 1,
    "internationalBankAccountNumber": "IE67 BOFI 9027 0925 7277 59",
    "isDefaultBank": false,
    "lastChq": "000005",
    "nominalAcCode": "B101",
    "oBalance": 0,
    "sortCode": "900284",
    "timestamp": "QUFBQUFBQUFDcXc9"
  }'
```

`PUT /v1/bankAccounts/{id}`

> Body parameter

```json
{
  "acCode": "B1",
  "accountName": "",
  "accountNumber": "83700896",
  "address": [
    "Address Line 1",
    "Address Line 2"
  ],
  "bankFeedSource": 0,
  "businessIdentifierCodes": "AIBKIE2D",
  "categoryId": 41704,
  "creditorScheme": "XXXX",
  "details": "Bank_1",
  "id": 1,
  "internationalBankAccountNumber": "IE67 BOFI 9027 0925 7277 59",
  "isDefaultBank": false,
  "lastChq": "000005",
  "nominalAcCode": "B101",
  "oBalance": 0,
  "sortCode": "900284",
  "timestamp": "QUFBQUFBQUFDcXc9"
}
```

<h3 id="updates-an-existing-bank-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Bank Account to update.|
|body|body|[BankAccountDto](#schemabankaccountdto)|true|Information of Bank Account to update.|
|» acCode|body|string|false|none|
|» accountName|body|string|false|none|
|» accountNumber|body|string|false|none|
|» address|body|[string]|false|none|
|» bankFeedSource|body|integer(int32)|false|none|
|» businessIdentifierCodes|body|string|false|none|
|» categoryId|body|integer(int64)|false|none|
|» creditorScheme|body|string|false|none|
|» details|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» internationalBankAccountNumber|body|string|false|none|
|» isDefaultBank|body|boolean|false|none|
|» lastChq|body|string|false|none|
|» nominalAcCode|body|string|false|none|
|» oBalance|body|number(double)|false|none|
|» sortCode|body|string|false|none|
|» timestamp|body|string(byte)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="updates-an-existing-bank-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Removes an existing Bank Account.

<a id="opIdBankAccounts_Delete"></a>

> Code samples

```bash
curl 'https://example.com/v1/bankAccounts/0?timestamp=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/bankAccounts/{id}`

<h3 id="removes-an-existing-bank-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Bank Account to remove.|
|timestamp|query|string|true|Timestamp of Bank Account to remove. Should be encoded in Base64.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removes-an-existing-bank-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-booktrantypes">BookTranTypes</h1>

## Returns a list of global Book Transactions' Types. Supports OData querying protocol. Filtering is forbidden. Ordering is allowed by &quot;id&quot; field.

<a id="opIdBookTranTypes_Get"></a>

> Code samples

```bash
curl https://example.com/v1/bookTranTypes \
  -H 'Accept: application/json'
```

`GET /v1/bookTranTypes`

> Example responses

> 200 Response

```json
{
  "Count": 5,
  "Items": [
    {
      "code": "",
      "description": "Cash Receipt",
      "id": 1
    },
    {
      "code": "",
      "description": "Cash Payment",
      "id": 2
    },
    {
      "code": "",
      "description": "Cheques Entry",
      "id": 3
    },
    {
      "code": "",
      "description": "Purchases Book Entry",
      "id": 4
    },
    {
      "code": "",
      "description": "Sales Entry",
      "id": 5
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-global-book-transactions-types-supports-odata-querying-protocol-filtering-is-forbidden-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_BookTranTypeDto_](#schemapageresult_booktrantypedto_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-cashpayments">CashPayments</h1>

## Returns a list of company's Cash Payments. Supports OData querying protocol. Filtering is allowed by &quot;entryDate&quot; field. Ordering is allowed by &quot;id&quot; field.

<a id="opIdCashPayments_Get"></a>

> Code samples

```bash
curl https://example.com/v1/cashPayments \
  -H 'Accept: application/json'
```

`GET /v1/cashPayments`

> Example responses

> 200 Response

```json
{
  "Count": 1,
  "Items": [
    {
      "acCode": null,
      "acEntries": [
        {
          "accountCode": "CP01",
          "analysisCategoryId": 10433,
          "description": "Cash Pay 01",
          "id": 62741,
          "value": 200
        }
      ],
      "bankAccountCode": "BAK2",
      "bankAccountId": 11111,
      "bookTranTypeId": 2,
      "customFields": [],
      "detailCollection": [
        "test"
      ],
      "discount": 0,
      "entryDate": "2017-07-01T00:00:00",
      "id": 12345,
      "ledger": 100,
      "lodgement": 0,
      "note": "Supplier 1",
      "plaidTransactionId": null,
      "procDate": "2017-07-26T00:00:00",
      "supplierId": 70599,
      "timestamp": "4NYAcBIe2wg=",
      "total": 100
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-cash-payments-supports-odata-querying-protocol-filtering-is-allowed-by-entrydate-field-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_CashPaymentQueryDto_](#schemapageresult_cashpaymentquerydto_)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new Cash Payment.

<a id="opIdCashPayments_Post"></a>

> Code samples

```bash
curl https://example.com/v1/cashPayments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acEntries": [
      {
        "accountCode": "CP01",
        "analysisCategoryId": 10433,
        "description": "Cash Pay 01",
        "id": 62741,
        "value": 200
      }
    ],
    "bankAccountCode": "BAK2",
    "bankAccountId": 11111,
    "bookTranTypeId": 2,
    "customFields": [],
    "detailCollection": [
      "test"
    ],
    "discount": 0,
    "entryDate": "2017-07-01T00:00:00",
    "id": 12345,
    "ledger": 100,
    "lodgement": 0,
    "note": "Supplier 1",
    "procDate": "2017-07-26T00:00:00",
    "supplierId": 70599,
    "timestamp": "+/0HcBIe2wg=",
    "total": 100
  }'
```

`POST /v1/cashPayments`

> Body parameter

```json
{
  "acEntries": [
    {
      "accountCode": "CP01",
      "analysisCategoryId": 10433,
      "description": "Cash Pay 01",
      "id": 62741,
      "value": 200
    }
  ],
  "bankAccountCode": "BAK2",
  "bankAccountId": 11111,
  "bookTranTypeId": 2,
  "customFields": [],
  "detailCollection": [
    "test"
  ],
  "discount": 0,
  "entryDate": "2017-07-01T00:00:00",
  "id": 12345,
  "ledger": 100,
  "lodgement": 0,
  "note": "Supplier 1",
  "procDate": "2017-07-26T00:00:00",
  "supplierId": 70599,
  "timestamp": "+/0HcBIe2wg=",
  "total": 100
}
```

<h3 id="creates-a-new-cash-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CashPaymentDto](#schemacashpaymentdto)|true|Information of Cash Receipt to create.|
|» acCode|body|string|false|none|
|» acEntries|body|[[AcEntryDto](#schemaacentrydto)]|false|none|
|» bankAccountCode|body|string|false|none|
|» bankAccountId|body|integer(int64)|false|none|
|» bookTranTypeId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» detailCollection|body|[string]|false|none|
|» discount|body|number(double)|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» ledger|body|number(double)|false|none|
|» lodgement|body|number(double)|false|none|
|» note|body|string|false|none|
|» plaidTransactionId|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» supplierId|body|integer(int64)|false|none|
|» timestamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="creates-a-new-cash-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Processes a batch of Cash Payments.

<a id="opIdCashPayments_ProcessBatch"></a>

> Code samples

```bash
curl https://example.com/v1/cashPayments/batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": {
        "acEntries": [
          {
            "accountCode": "CP01",
            "analysisCategoryId": 10433,
            "description": "Cash Pay 01",
            "id": 62741,
            "value": 200
          }
        ],
        "bankAccountCode": "BAK2",
        "bankAccountId": 11111,
        "bookTranTypeId": 2,
        "customFields": [],
        "detailCollection": [
          "test"
        ],
        "discount": 0,
        "entryDate": "2017-07-01T00:00:00",
        "id": 12345,
        "ledger": 100,
        "lodgement": 0,
        "note": "Supplier 1",
        "procDate": "2017-07-26T00:00:00",
        "supplierId": 70599,
        "timestamp": "XmAKcBIe2wg=",
        "total": 100
      },
      "opCode": 1
    }
  ]'
```

`PUT /v1/cashPayments/batch`

> Body parameter

```json
[
  {
    "item": {
      "acEntries": [
        {
          "accountCode": "CP01",
          "analysisCategoryId": 10433,
          "description": "Cash Pay 01",
          "id": 62741,
          "value": 200
        }
      ],
      "bankAccountCode": "BAK2",
      "bankAccountId": 11111,
      "bookTranTypeId": 2,
      "customFields": [],
      "detailCollection": [
        "test"
      ],
      "discount": 0,
      "entryDate": "2017-07-01T00:00:00",
      "id": 12345,
      "ledger": 100,
      "lodgement": 0,
      "note": "Supplier 1",
      "procDate": "2017-07-26T00:00:00",
      "supplierId": 70599,
      "timestamp": "XmAKcBIe2wg=",
      "total": 100
    },
    "opCode": 1
  }
]
```

<h3 id="processes-a-batch-of-cash-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[BatchItem_CashPaymentDto_](#schemabatchitem_cashpaymentdto_)]|true|Batch of Cash Receipts to process.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="processes-a-batch-of-cash-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns information about a single Cash Payment.

> Code samples

```bash
curl https://example.com/v1/cashPayments/0 \
  -H 'Accept: application/json'
```

`GET /v1/cashPayments/{id}`

<h3 id="returns-information-about-a-single-cash-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Cash Receipt to return.|

> Example responses

> 200 Response

```json
{
  "acCode": null,
  "acEntries": [
    {
      "accountCode": "CP01",
      "analysisCategoryId": 10433,
      "description": "Cash Pay 01",
      "id": 62741,
      "value": 200
    }
  ],
  "bankAccountCode": "BAK2",
  "bankAccountId": 11111,
  "bookTranTypeId": 2,
  "customFields": [],
  "detailCollection": [
    "test"
  ],
  "discount": 0,
  "entryDate": "2017-07-01T00:00:00",
  "id": 12345,
  "ledger": 100,
  "lodgement": 0,
  "note": "Supplier 1",
  "plaidTransactionId": null,
  "procDate": "2017-07-26T00:00:00",
  "supplierId": 70599,
  "timestamp": "+/0HcBIe2wg=",
  "total": 100
}
```

<h3 id="returns-information-about-a-single-cash-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CashPaymentDto](#schemacashpaymentdto)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates an existing Cash Payment.

<a id="opIdCashPayments_Put"></a>

> Code samples

```bash
curl https://example.com/v1/cashPayments/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acEntries": [
      {
        "accountCode": "CP01",
        "analysisCategoryId": 10433,
        "description": "Cash Pay 01",
        "id": 62741,
        "value": 200
      }
    ],
    "bankAccountCode": "BAK2",
    "bankAccountId": 11111,
    "bookTranTypeId": 2,
    "customFields": [],
    "detailCollection": [
      "test"
    ],
    "discount": 0,
    "entryDate": "2017-07-01T00:00:00",
    "id": 12345,
    "ledger": 100,
    "lodgement": 0,
    "note": "Supplier 1",
    "procDate": "2017-07-26T00:00:00",
    "supplierId": 70599,
    "timestamp": "+/0HcBIe2wg=",
    "total": 100
  }'
```

`PUT /v1/cashPayments/{id}`

> Body parameter

```json
{
  "acEntries": [
    {
      "accountCode": "CP01",
      "analysisCategoryId": 10433,
      "description": "Cash Pay 01",
      "id": 62741,
      "value": 200
    }
  ],
  "bankAccountCode": "BAK2",
  "bankAccountId": 11111,
  "bookTranTypeId": 2,
  "customFields": [],
  "detailCollection": [
    "test"
  ],
  "discount": 0,
  "entryDate": "2017-07-01T00:00:00",
  "id": 12345,
  "ledger": 100,
  "lodgement": 0,
  "note": "Supplier 1",
  "procDate": "2017-07-26T00:00:00",
  "supplierId": 70599,
  "timestamp": "+/0HcBIe2wg=",
  "total": 100
}
```

<h3 id="updates-an-existing-cash-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Cash Receipt to update.|
|body|body|[CashPaymentDto](#schemacashpaymentdto)|true|Information of Cash Receipt to update.|
|» acCode|body|string|false|none|
|» acEntries|body|[[AcEntryDto](#schemaacentrydto)]|false|none|
|» bankAccountCode|body|string|false|none|
|» bankAccountId|body|integer(int64)|false|none|
|» bookTranTypeId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» detailCollection|body|[string]|false|none|
|» discount|body|number(double)|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» ledger|body|number(double)|false|none|
|» lodgement|body|number(double)|false|none|
|» note|body|string|false|none|
|» plaidTransactionId|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» supplierId|body|integer(int64)|false|none|
|» timestamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="updates-an-existing-cash-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Removes an existing Cash Payment.

<a id="opIdCashPayments_Delete"></a>

> Code samples

```bash
curl 'https://example.com/v1/cashPayments/0?timestamp=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/cashPayments/{id}`

<h3 id="removes-an-existing-cash-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Cash Receipt to remove.|
|timestamp|query|string|true|Timestamp of Cash Receipt to remove. Should be encoded in Base64.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removes-an-existing-cash-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-cashreceipts">CashReceipts</h1>

## Returns a list of company's Cash Receipts. Supports OData querying protocol. Filtering is allowed by &quot;entryDate&quot; field. Ordering is allowed by &quot;id&quot; field.

<a id="opIdCashReceipts_Get"></a>

> Code samples

```bash
curl https://example.com/v1/cashReceipts \
  -H 'Accept: application/json'
```

`GET /v1/cashReceipts`

> Example responses

> 200 Response

```json
{
  "Count": 1,
  "Items": [
    {
      "acCode": null,
      "acEntries": [
        {
          "accountCode": "000",
          "analysisCategoryId": 1,
          "description": "AnCat1",
          "id": 1,
          "value": 30
        }
      ],
      "bookTranTypeId": 1,
      "customFields": [
        {
          "description": "acudf_1",
          "id": 1,
          "userDefinedFieldId": 1,
          "value": "acudfv_1"
        }
      ],
      "customerId": null,
      "detailCollection": [
        "det_1",
        "det_2",
        "det_3"
      ],
      "discount": 0,
      "entryDate": "2011-01-01T00:00:00",
      "id": 1,
      "ledger": 0,
      "note": "note1",
      "plaidTransactionId": null,
      "procDate": "2011-01-05T00:00:00",
      "timestamp": "EiUPcBIe2wg=",
      "total": 50,
      "unallocated": 0,
      "vatEntries": [
        {
          "amount": 50,
          "id": 1,
          "percentage": 15,
          "vatRateId": 1
        }
      ],
      "vatTypeId": null
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-cash-receipts-supports-odata-querying-protocol-filtering-is-allowed-by-entrydate-field-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_CashReceiptQueryDto_](#schemapageresult_cashreceiptquerydto_)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new Cash Receipt.

<a id="opIdCashReceipts_Post"></a>

> Code samples

```bash
curl https://example.com/v1/cashReceipts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acEntries": [
      {
        "accountCode": "000",
        "analysisCategoryId": 1,
        "description": "AnCat1",
        "id": 1,
        "value": 30
      }
    ],
    "bookTranTypeId": 1,
    "customFields": [
      {
        "description": "acudf_1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "acudfv_1"
      }
    ],
    "detailCollection": [
      "det_1",
      "det_2",
      "det_3"
    ],
    "discount": 0,
    "entryDate": "2011-01-01T00:00:00",
    "id": 1,
    "ledger": 0,
    "note": "note1",
    "procDate": "2011-01-05T00:00:00",
    "timestamp": "0OkTcBIe2wg=",
    "total": 50,
    "unallocated": 0,
    "vatEntries": [
      {
        "amount": 50,
        "id": 1,
        "percentage": 15,
        "vatRateId": 1
      }
    ]
  }'
```

`POST /v1/cashReceipts`

> Body parameter

```json
{
  "acEntries": [
    {
      "accountCode": "000",
      "analysisCategoryId": 1,
      "description": "AnCat1",
      "id": 1,
      "value": 30
    }
  ],
  "bookTranTypeId": 1,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    }
  ],
  "detailCollection": [
    "det_1",
    "det_2",
    "det_3"
  ],
  "discount": 0,
  "entryDate": "2011-01-01T00:00:00",
  "id": 1,
  "ledger": 0,
  "note": "note1",
  "procDate": "2011-01-05T00:00:00",
  "timestamp": "0OkTcBIe2wg=",
  "total": 50,
  "unallocated": 0,
  "vatEntries": [
    {
      "amount": 50,
      "id": 1,
      "percentage": 15,
      "vatRateId": 1
    }
  ]
}
```

<h3 id="creates-a-new-cash-receipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CashReceiptDto](#schemacashreceiptdto)|true|Information of Cash Receipt to create.|
|» acCode|body|string|false|none|
|» acEntries|body|[[AcEntryDto](#schemaacentrydto)]|false|none|
|» bookTranTypeId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» customerId|body|integer(int64)|false|none|
|» detailCollection|body|[string]|false|none|
|» discount|body|number(double)|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» ledger|body|number(double)|false|none|
|» note|body|string|false|none|
|» plaidTransactionId|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» timestamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» unallocated|body|number(double)|false|none|
|» vatEntries|body|[[VatEntryDto](#schemavatentrydto)]|false|none|
|» vatTypeId|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="creates-a-new-cash-receipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Processes a batch of Cash Receipts.

<a id="opIdCashReceipts_ProcessBatch"></a>

> Code samples

```bash
curl https://example.com/v1/cashReceipts/batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": {
        "acEntries": [
          {
            "accountCode": "000",
            "analysisCategoryId": 1,
            "description": "AnCat1",
            "id": 1,
            "value": 30
          }
        ],
        "bookTranTypeId": 1,
        "customFields": [
          {
            "description": "acudf_1",
            "id": 1,
            "userDefinedFieldId": 1,
            "value": "acudfv_1"
          }
        ],
        "detailCollection": [
          "det_1",
          "det_2",
          "det_3"
        ],
        "discount": 0,
        "entryDate": "2011-01-01T00:00:00",
        "id": 1,
        "ledger": 0,
        "note": "note1",
        "procDate": "2011-01-05T00:00:00",
        "timestamp": "I0wWcBIe2wg=",
        "total": 50,
        "unallocated": 0,
        "vatEntries": [
          {
            "amount": 50,
            "id": 1,
            "percentage": 15,
            "vatRateId": 1
          }
        ]
      },
      "opCode": 1
    }
  ]'
```

`PUT /v1/cashReceipts/batch`

> Body parameter

```json
[
  {
    "item": {
      "acEntries": [
        {
          "accountCode": "000",
          "analysisCategoryId": 1,
          "description": "AnCat1",
          "id": 1,
          "value": 30
        }
      ],
      "bookTranTypeId": 1,
      "customFields": [
        {
          "description": "acudf_1",
          "id": 1,
          "userDefinedFieldId": 1,
          "value": "acudfv_1"
        }
      ],
      "detailCollection": [
        "det_1",
        "det_2",
        "det_3"
      ],
      "discount": 0,
      "entryDate": "2011-01-01T00:00:00",
      "id": 1,
      "ledger": 0,
      "note": "note1",
      "procDate": "2011-01-05T00:00:00",
      "timestamp": "I0wWcBIe2wg=",
      "total": 50,
      "unallocated": 0,
      "vatEntries": [
        {
          "amount": 50,
          "id": 1,
          "percentage": 15,
          "vatRateId": 1
        }
      ]
    },
    "opCode": 1
  }
]
```

<h3 id="processes-a-batch-of-cash-receipts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[BatchItem_CashReceiptDto_](#schemabatchitem_cashreceiptdto_)]|true|Batch of Cash Receipts to process.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="processes-a-batch-of-cash-receipts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns information about a single Cash Receipt.

> Code samples

```bash
curl https://example.com/v1/cashReceipts/0 \
  -H 'Accept: application/json'
```

`GET /v1/cashReceipts/{id}`

<h3 id="returns-information-about-a-single-cash-receipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Cash Receipt to return.|

> Example responses

> 200 Response

```json
{
  "acCode": null,
  "acEntries": [
    {
      "accountCode": "000",
      "analysisCategoryId": 1,
      "description": "AnCat1",
      "id": 1,
      "value": 30
    }
  ],
  "bookTranTypeId": 1,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    }
  ],
  "customerId": null,
  "detailCollection": [
    "det_1",
    "det_2",
    "det_3"
  ],
  "discount": 0,
  "entryDate": "2011-01-01T00:00:00",
  "id": 1,
  "ledger": 0,
  "note": "note1",
  "plaidTransactionId": null,
  "procDate": "2011-01-05T00:00:00",
  "timestamp": "0OkTcBIe2wg=",
  "total": 50,
  "unallocated": 0,
  "vatEntries": [
    {
      "amount": 50,
      "id": 1,
      "percentage": 15,
      "vatRateId": 1
    }
  ],
  "vatTypeId": null
}
```

<h3 id="returns-information-about-a-single-cash-receipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CashReceiptDto](#schemacashreceiptdto)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates an existing Cash Receipt.

<a id="opIdCashReceipts_Put"></a>

> Code samples

```bash
curl https://example.com/v1/cashReceipts/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acEntries": [
      {
        "accountCode": "000",
        "analysisCategoryId": 1,
        "description": "AnCat1",
        "id": 1,
        "value": 30
      }
    ],
    "bookTranTypeId": 1,
    "customFields": [
      {
        "description": "acudf_1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "acudfv_1"
      }
    ],
    "detailCollection": [
      "det_1",
      "det_2",
      "det_3"
    ],
    "discount": 0,
    "entryDate": "2011-01-01T00:00:00",
    "id": 1,
    "ledger": 0,
    "note": "note1",
    "procDate": "2011-01-05T00:00:00",
    "timestamp": "0OkTcBIe2wg=",
    "total": 50,
    "unallocated": 0,
    "vatEntries": [
      {
        "amount": 50,
        "id": 1,
        "percentage": 15,
        "vatRateId": 1
      }
    ]
  }'
```

`PUT /v1/cashReceipts/{id}`

> Body parameter

```json
{
  "acEntries": [
    {
      "accountCode": "000",
      "analysisCategoryId": 1,
      "description": "AnCat1",
      "id": 1,
      "value": 30
    }
  ],
  "bookTranTypeId": 1,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    }
  ],
  "detailCollection": [
    "det_1",
    "det_2",
    "det_3"
  ],
  "discount": 0,
  "entryDate": "2011-01-01T00:00:00",
  "id": 1,
  "ledger": 0,
  "note": "note1",
  "procDate": "2011-01-05T00:00:00",
  "timestamp": "0OkTcBIe2wg=",
  "total": 50,
  "unallocated": 0,
  "vatEntries": [
    {
      "amount": 50,
      "id": 1,
      "percentage": 15,
      "vatRateId": 1
    }
  ]
}
```

<h3 id="updates-an-existing-cash-receipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Cash Receipt to update.|
|body|body|[CashReceiptDto](#schemacashreceiptdto)|true|Information of Cash Receipt to update.|
|» acCode|body|string|false|none|
|» acEntries|body|[[AcEntryDto](#schemaacentrydto)]|false|none|
|» bookTranTypeId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» customerId|body|integer(int64)|false|none|
|» detailCollection|body|[string]|false|none|
|» discount|body|number(double)|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» ledger|body|number(double)|false|none|
|» note|body|string|false|none|
|» plaidTransactionId|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» timestamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» unallocated|body|number(double)|false|none|
|» vatEntries|body|[[VatEntryDto](#schemavatentrydto)]|false|none|
|» vatTypeId|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="updates-an-existing-cash-receipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Removes an existing Cash Receipt.

<a id="opIdCashReceipts_Delete"></a>

> Code samples

```bash
curl 'https://example.com/v1/cashReceipts/0?timestamp=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/cashReceipts/{id}`

<h3 id="removes-an-existing-cash-receipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Cash Receipt to remove.|
|timestamp|query|string|true|Timestamp of Cash Receipt to remove. Should be encoded in Base64.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removes-an-existing-cash-receipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-categorytypes">CategoryTypes</h1>

## Returns a list of company's Category Types. Supports OData querying protocol. Filtering is forbidden. Ordering is allowed by &quot;id&quot; field.

<a id="opIdCategoryTypes_Get"></a>

> Code samples

```bash
curl https://example.com/v1/categoryTypes \
  -H 'Accept: application/json'
```

`GET /v1/categoryTypes`

> Example responses

> 200 Response

```json
{
  "Count": 1,
  "Items": [
    {
      "description": "Cash Receipts",
      "id": 17
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-category-types-supports-odata-querying-protocol-filtering-is-forbidden-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_CategoryTypeDto_](#schemapageresult_categorytypedto_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-companysettings">CompanySettings</h1>

## Returns a list of company settings. Supports OData querying protocol. Filtering is forbidden.

<a id="opIdCompanySettings_Get"></a>

> Code samples

```bash
curl https://example.com/v1/companySettings \
  -H 'Accept: application/json'
```

`GET /v1/companySettings`

> Example responses

> 200 Response

```json
{
  "enableVOCRReporting": true,
  "id": 20164,
  "useAllocations": true,
  "value": "",
  "vocrSettingValue": false
}
```

<h3 id="returns-a-list-of-company-settings-supports-odata-querying-protocol-filtering-is-forbidden-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_CompanySettingDto_](#schemapageresult_companysettingdto_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-companysetupconfig">CompanySetupConfig</h1>

## Returns the company configuration settings.

<a id="opIdCompanySetupConfig_Get"></a>

> Code samples

```bash
curl https://example.com/v1/companySetupConfig \
  -H 'Accept: application/json'
```

`GET /v1/companySetupConfig`

> Example responses

> 200 Response

```json
{
  "financialYear": {
    "firstMonth": 0,
    "startMonth": 0,
    "startYear": 0
  },
  "generalDetails": {
    "companyAddresses": [
      "string"
    ],
    "companyName": "string",
    "currencyCode": "string",
    "currencyDescription": "string",
    "currencyId": 0,
    "currentcySymbol": "string",
    "emails": [
      "string"
    ],
    "faxes": [
      "string"
    ],
    "phones": [
      "string"
    ],
    "regionDescription": "string",
    "regionId": 0,
    "vatReg": "string"
  },
  "options": {
    "allowEntryOfGrossPriceInInvoicing": true,
    "creditInputForReverseChargeVAT": true,
    "creditNoteJournalAgeingName": "string",
    "creditNoteJournalAgeingValue": 0,
    "discrepancyAllowed": 0,
    "enableVOCRReporting": true,
    "marginVatScheme": true,
    "printOSItemsOnly": true,
    "purchasesVatAnalysisType": 0,
    "salesVatAnalysisType": 0,
    "useAllocations": true,
    "useNominal": true,
    "useNominalCode": true,
    "vocrSettingValue": true
  },
  "referenceSettings": {
    "creditorsJournal": true,
    "debtorsJournal": true,
    "purchases": true,
    "sales": true
  }
}
```

<h3 id="returns-the-company-configuration-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CompanySetupConfigViewModel](#schemacompanysetupconfigviewmodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns the company option setting.

<a id="opIdCompanySetupConfig_GetCompanyOptions"></a>

> Code samples

```bash
curl https://example.com/v1/companySetupConfig/getCompanyOptions \
  -H 'Accept: application/json'
```

`GET /v1/companySetupConfig/getCompanyOptions`

> Example responses

> 200 Response

```json
{
  "allowEntryOfGrossPriceInInvoicing": true,
  "creditInputForReverseChargeVAT": true,
  "creditNoteJournalAgeingName": "string",
  "creditNoteJournalAgeingValue": 0,
  "discrepancyAllowed": 0,
  "enableVOCRReporting": true,
  "marginVatScheme": true,
  "printOSItemsOnly": true,
  "purchasesVatAnalysisType": 0,
  "salesVatAnalysisType": 0,
  "useAllocations": true,
  "useNominal": true,
  "useNominalCode": true,
  "vocrSettingValue": true
}
```

<h3 id="returns-the-company-option-setting-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CompanyOptionDto](#schemacompanyoptiondto)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns the financial year.

<a id="opIdCompanySetupConfig_GetFinancialYear"></a>

> Code samples

```bash
curl https://example.com/v1/companySetupConfig/getFinancialYear \
  -H 'Accept: application/json'
```

`GET /v1/companySetupConfig/getFinancialYear`

> Example responses

> 200 Response

```json
{
  "firstMonth": 0,
  "startMonth": 0,
  "startYear": 0
}
```

<h3 id="returns-the-financial-year-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FinancialYearDto](#schemafinancialyeardto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-customers">Customers</h1>

## Returns a list of company's Customers. Supports OData querying protocol. Filtering is forbidden. Ordering is allowed by &quot;id&quot; and &quot;code&quot; fields.

<a id="opIdCustomers_Get"></a>

> Code samples

```bash
curl https://example.com/v1/customers \
  -H 'Accept: application/json'
```

`GET /v1/customers`

> Example responses

> 200 Response

```json
{
  "Count": 1,
  "Items": [
    {
      "accountName": "",
      "accountNumber": "12345678",
      "additionalEmails": [
        "email2@example.com",
        "email2@example.com"
      ],
      "address": [
        "Address Line 1",
        "Address Line 2"
      ],
      "authCode": "VATEXCODE222",
      "bank": {
        "branch": "Bank",
        "id": 1,
        "name": "bank Name",
        "sortCode": "B01"
      },
      "businessIdentifierCode": "AIBI02",
      "code": "12345678",
      "contact": "John Smith",
      "delivery": [
        "Delivery 1",
        "Delivery 2"
      ],
      "eFTReference": "Reference",
      "email": "customer@email.com",
      "fax": "1234567890",
      "id": 10589,
      "internationalBankAccountNumber": "1233432532",
      "mobile": "1234567890",
      "name": "Customer Name 1",
      "ourCode": "OURCODE111",
      "ownerTypeId": 1,
      "phone": "1234596970",
      "timestamp": "r9UfcBIe2wg=",
      "vatAnalysisTypeId": 1,
      "vatReg": "VATCODE0001",
      "vatType": 2
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-customers-supports-odata-querying-protocol-filtering-is-forbidden-ordering-is-allowed-by-id-and-code-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_CustomerQueryDto_](#schemapageresult_customerquerydto_)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new Customer.

<a id="opIdCustomers_Post"></a>

> Code samples

```bash
curl https://example.com/v1/customers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accountName": "",
    "accountNumber": "12345678",
    "additionalEmails": [
      "email2@example.com",
      "email3@example.com"
    ],
    "address": [
      "Address Line 1",
      "Address Line 2"
    ],
    "authCode": "VATEXCODE222",
    "bank": {
      "branch": "Bank",
      "id": 1,
      "name": "bank Name",
      "sortCode": "B01"
    },
    "businessIdentifierCode": "AIBI02",
    "code": "12345678",
    "contact": "John Smith",
    "delivery": [
      "Delivery 1",
      "Delivery 2"
    ],
    "eFTReference": "Reference",
    "email": "customer@email.com",
    "fax": "1234567890",
    "id": 10589,
    "internationalBankAccountNumber": "1233432532",
    "mobile": "1234567890",
    "name": "Customer Name 1",
    "ourCode": "OURCODE111",
    "ownerTypeId": 1,
    "phone": "1234596970",
    "timestamp": "GF8pcBIe2wg=",
    "vatAnalysisTypeId": 1,
    "vatReg": "VATCODE0001",
    "vatType": 2
  }'
```

`POST /v1/customers`

> Body parameter

```json
{
  "accountName": "",
  "accountNumber": "12345678",
  "additionalEmails": [
    "email2@example.com",
    "email3@example.com"
  ],
  "address": [
    "Address Line 1",
    "Address Line 2"
  ],
  "authCode": "VATEXCODE222",
  "bank": {
    "branch": "Bank",
    "id": 1,
    "name": "bank Name",
    "sortCode": "B01"
  },
  "businessIdentifierCode": "AIBI02",
  "code": "12345678",
  "contact": "John Smith",
  "delivery": [
    "Delivery 1",
    "Delivery 2"
  ],
  "eFTReference": "Reference",
  "email": "customer@email.com",
  "fax": "1234567890",
  "id": 10589,
  "internationalBankAccountNumber": "1233432532",
  "mobile": "1234567890",
  "name": "Customer Name 1",
  "ourCode": "OURCODE111",
  "ownerTypeId": 1,
  "phone": "1234596970",
  "timestamp": "GF8pcBIe2wg=",
  "vatAnalysisTypeId": 1,
  "vatReg": "VATCODE0001",
  "vatType": 2
}
```

<h3 id="creates-a-new-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomerDto](#schemacustomerdto)|true|Information of Customer to create.|
|» accountName|body|string|false|none|
|» accountNumber|body|string|false|none|
|» additionalEmails|body|[string]|false|none|
|» address|body|[string]|false|none|
|» authCode|body|string|false|none|
|» bank|body|[EFTBankDto](#schemaeftbankdto)|false|none|
|» businessIdentifierCode|body|string|false|none|
|» code|body|string|false|none|
|» contact|body|string|false|none|
|» delivery|body|[string]|false|none|
|» eFTReference|body|string|false|none|
|» email|body|string|false|none|
|» fax|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» internationalBankAccountNumber|body|string|false|none|
|» ledgerBalance|body|number(double)|false|none|
|» mobile|body|string|false|none|
|» name|body|string|false|none|
|» openingBalance|body|[OwnerOpeningBalanceInPeriodsDto](#schemaowneropeningbalanceinperiodsdto)|false|none|
|» openingBalances|body|[[OwnerOpeningBalanceDto](#schemaowneropeningbalancedto)]|false|none|
|» ourCode|body|string|false|none|
|» ownerTypeId|body|integer(int64)|false|none|
|» phone|body|string|false|none|
|» timestamp|body|string(byte)|false|none|
|» vatAnalysisTypeId|body|integer(int64)|false|none|
|» vatReg|body|string|false|none|
|» vatType|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="creates-a-new-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Processes a batch of Customers.

<a id="opIdCustomers_ProcessBatch"></a>

> Code samples

```bash
curl https://example.com/v1/customers/batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": {
        "accountName": "",
        "accountNumber": "12345678",
        "additionalEmails": [
          "email2@example.com",
          "email3@example.com"
        ],
        "address": [
          "Address Line 1",
          "Address Line 2"
        ],
        "authCode": "VATEXCODE222",
        "bank": {
          "branch": "Bank",
          "id": 1,
          "name": "bank Name",
          "sortCode": "B01"
        },
        "businessIdentifierCode": "AIBI02",
        "code": "12345678",
        "contact": "John Smith",
        "delivery": [
          "Delivery 1",
          "Delivery 2"
        ],
        "eFTReference": "Reference",
        "email": "customer@email.com",
        "fax": "1234567890",
        "id": 10589,
        "internationalBankAccountNumber": "1233432532",
        "mobile": "1234567890",
        "name": "Customer Name 1",
        "ourCode": "OURCODE111",
        "ownerTypeId": 1,
        "phone": "1234596970",
        "timestamp": "b8ErcBIe2wg=",
        "vatAnalysisTypeId": 1,
        "vatReg": "VATCODE0001",
        "vatType": 2
      },
      "opCode": 1
    }
  ]'
```

`PUT /v1/customers/batch`

> Body parameter

```json
[
  {
    "item": {
      "accountName": "",
      "accountNumber": "12345678",
      "additionalEmails": [
        "email2@example.com",
        "email3@example.com"
      ],
      "address": [
        "Address Line 1",
        "Address Line 2"
      ],
      "authCode": "VATEXCODE222",
      "bank": {
        "branch": "Bank",
        "id": 1,
        "name": "bank Name",
        "sortCode": "B01"
      },
      "businessIdentifierCode": "AIBI02",
      "code": "12345678",
      "contact": "John Smith",
      "delivery": [
        "Delivery 1",
        "Delivery 2"
      ],
      "eFTReference": "Reference",
      "email": "customer@email.com",
      "fax": "1234567890",
      "id": 10589,
      "internationalBankAccountNumber": "1233432532",
      "mobile": "1234567890",
      "name": "Customer Name 1",
      "ourCode": "OURCODE111",
      "ownerTypeId": 1,
      "phone": "1234596970",
      "timestamp": "b8ErcBIe2wg=",
      "vatAnalysisTypeId": 1,
      "vatReg": "VATCODE0001",
      "vatType": 2
    },
    "opCode": 1
  }
]
```

<h3 id="processes-a-batch-of-customers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[BatchItem_CustomerDto_](#schemabatchitem_customerdto_)]|true|Batch of Customers to process.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="processes-a-batch-of-customers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.

> Code samples

```bash
curl https://example.com/v1/customers/0 \
  -H 'Accept: application/json'
```

`GET /v1/customers/{id}`

<h3 id="returns-information-about-a-single-customer-you-may-specify-that-customers-ledger-balance-should-be-calculated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Customer to return.|
|needBalance|query|boolean|false|If "true" then Customer's ledger balance will be calculated; otherwise balance will be returned as 0.|

> Example responses

> 200 Response

```json
{
  "accountName": "",
  "accountNumber": "12345678",
  "additionalEmails": [
    "email2@example.com",
    "email3@example.com"
  ],
  "address": [
    "Address Line 1",
    "Address Line 2"
  ],
  "authCode": "VATEXCODE222",
  "bank": {
    "branch": "Bank",
    "id": 1,
    "name": "bank Name",
    "sortCode": "B01"
  },
  "businessIdentifierCode": "AIBI02",
  "code": "12345678",
  "contact": "John Smith",
  "delivery": [
    "Delivery 1",
    "Delivery 2"
  ],
  "eFTReference": "Reference",
  "email": "customer@email.com",
  "fax": "1234567890",
  "id": 10589,
  "internationalBankAccountNumber": "1233432532",
  "mobile": "1234567890",
  "name": "Customer Name 1",
  "ourCode": "OURCODE111",
  "ownerTypeId": 1,
  "phone": "1234596970",
  "timestamp": "GF8pcBIe2wg=",
  "vatAnalysisTypeId": 1,
  "vatReg": "VATCODE0001",
  "vatType": 2
}
```

<h3 id="returns-information-about-a-single-customer-you-may-specify-that-customers-ledger-balance-should-be-calculated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomerDto](#schemacustomerdto)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates an existing Customer.

<a id="opIdCustomers_Put"></a>

> Code samples

```bash
curl https://example.com/v1/customers/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accountName": "",
    "accountNumber": "12345678",
    "additionalEmails": [
      "email2@example.com",
      "email3@example.com"
    ],
    "address": [
      "Address Line 1",
      "Address Line 2"
    ],
    "authCode": "VATEXCODE222",
    "bank": {
      "branch": "Bank",
      "id": 1,
      "name": "bank Name",
      "sortCode": "B01"
    },
    "businessIdentifierCode": "AIBI02",
    "code": "12345678",
    "contact": "John Smith",
    "delivery": [
      "Delivery 1",
      "Delivery 2"
    ],
    "eFTReference": "Reference",
    "email": "customer@email.com",
    "fax": "1234567890",
    "id": 10589,
    "internationalBankAccountNumber": "1233432532",
    "mobile": "1234567890",
    "name": "Customer Name 1",
    "ourCode": "OURCODE111",
    "ownerTypeId": 1,
    "phone": "1234596970",
    "timestamp": "GF8pcBIe2wg=",
    "vatAnalysisTypeId": 1,
    "vatReg": "VATCODE0001",
    "vatType": 2
  }'
```

`PUT /v1/customers/{id}`

> Body parameter

```json
{
  "accountName": "",
  "accountNumber": "12345678",
  "additionalEmails": [
    "email2@example.com",
    "email3@example.com"
  ],
  "address": [
    "Address Line 1",
    "Address Line 2"
  ],
  "authCode": "VATEXCODE222",
  "bank": {
    "branch": "Bank",
    "id": 1,
    "name": "bank Name",
    "sortCode": "B01"
  },
  "businessIdentifierCode": "AIBI02",
  "code": "12345678",
  "contact": "John Smith",
  "delivery": [
    "Delivery 1",
    "Delivery 2"
  ],
  "eFTReference": "Reference",
  "email": "customer@email.com",
  "fax": "1234567890",
  "id": 10589,
  "internationalBankAccountNumber": "1233432532",
  "mobile": "1234567890",
  "name": "Customer Name 1",
  "ourCode": "OURCODE111",
  "ownerTypeId": 1,
  "phone": "1234596970",
  "timestamp": "GF8pcBIe2wg=",
  "vatAnalysisTypeId": 1,
  "vatReg": "VATCODE0001",
  "vatType": 2
}
```

<h3 id="updates-an-existing-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Customer to update.|
|body|body|[CustomerDto](#schemacustomerdto)|true|Information of Customer to update.|
|» accountName|body|string|false|none|
|» accountNumber|body|string|false|none|
|» additionalEmails|body|[string]|false|none|
|» address|body|[string]|false|none|
|» authCode|body|string|false|none|
|» bank|body|[EFTBankDto](#schemaeftbankdto)|false|none|
|» businessIdentifierCode|body|string|false|none|
|» code|body|string|false|none|
|» contact|body|string|false|none|
|» delivery|body|[string]|false|none|
|» eFTReference|body|string|false|none|
|» email|body|string|false|none|
|» fax|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» internationalBankAccountNumber|body|string|false|none|
|» ledgerBalance|body|number(double)|false|none|
|» mobile|body|string|false|none|
|» name|body|string|false|none|
|» openingBalance|body|[OwnerOpeningBalanceInPeriodsDto](#schemaowneropeningbalanceinperiodsdto)|false|none|
|» openingBalances|body|[[OwnerOpeningBalanceDto](#schemaowneropeningbalancedto)]|false|none|
|» ourCode|body|string|false|none|
|» ownerTypeId|body|integer(int64)|false|none|
|» phone|body|string|false|none|
|» timestamp|body|string(byte)|false|none|
|» vatAnalysisTypeId|body|integer(int64)|false|none|
|» vatReg|body|string|false|none|
|» vatType|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="updates-an-existing-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Removes an existing Customer.

<a id="opIdCustomers_Delete"></a>

> Code samples

```bash
curl 'https://example.com/v1/customers/0?timestamp=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/customers/{id}`

<h3 id="removes-an-existing-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Customer to remove.|
|timestamp|query|string|true|Timestamp of Customer to remove. Should be encoded in Base64.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removes-an-existing-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of Customer's account transactions.

<a id="opIdCustomers_GetAccountTrans"></a>

> Code samples

```bash
curl https://example.com/v1/customers/0/accountTrans \
  -H 'Accept: application/json'
```

`GET /v1/customers/{itemId}/accountTrans`

<h3 id="returns-a-list-of-customers-account-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|integer(int64)|true|Id of Customer to return account transaction.|

> Example responses

> 200 Response

```json
[
  {
    "bookTranId": 0,
    "bookTranTypeId": 0,
    "bookTransactionReference": "O/Bal",
    "bookTypeDesc": "Opening Balance",
    "credit": 0,
    "debit": 30,
    "id": 2,
    "procDate": "2012-12-31T00:00:00"
  },
  {
    "bookTranId": 0,
    "bookTranTypeId": 0,
    "bookTransactionReference": "0000001",
    "bookTypeDesc": "Bank Payment",
    "credit": 0,
    "debit": 10,
    "id": 9,
    "procDate": "2012-12-31T00:00:00"
  }
]
```

<h3 id="returns-a-list-of-customers-account-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="returns-a-list-of-customers-account-transactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AccountTranDto](#schemaaccounttrandto)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.

<a id="opIdCustomers_GetOpeningBalance"></a>

> Code samples

```bash
curl https://example.com/v1/customers/0/openingBalance \
  -H 'Accept: application/json'
```

`GET /v1/customers/{itemId}/openingBalance`

<h3 id="returns-a-customers-opening-balances-calculated-for-the-next-periods-current-month-one-month-old-two-months-old-three-and-more-months-old-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|integer(int64)|true|Id of Customer to return opening balances.|

> Example responses

> 200 Response

```json
{
  "currentMonth": 10,
  "oneMonthOld": 20,
  "threeMonthsOld": 40,
  "twoMonthsOld": 30
}
```

<h3 id="returns-a-customers-opening-balances-calculated-for-the-next-periods-current-month-one-month-old-two-months-old-three-and-more-months-old-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OwnerOpeningBalanceInPeriodsDto](#schemaowneropeningbalanceinperiodsdto)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of Customer's opening balance transactions.

<a id="opIdCustomers_GetOpeningBalanceList"></a>

> Code samples

```bash
curl https://example.com/v1/customers/0/openingBalanceList \
  -H 'Accept: application/json'
```

`GET /v1/customers/{itemId}/openingBalanceList`

<h3 id="returns-a-list-of-customers-opening-balance-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|integer(int64)|true|Id of Customer to return opening balances transaction.|

> Example responses

> 200 Response

```json
[
  {
    "entryDate": "2011-01-01T00:00:00",
    "id": 1,
    "procDate": "2011-02-01T00:00:00",
    "reference": "O/Bal",
    "timestamp": "IIYwcBIe2wg=",
    "total": 10,
    "totalVAT": 1.3,
    "unpaid": 0,
    "vatEntries": [
      {
        "amount": 8.7,
        "vatRateId": 1
      }
    ]
  },
  {
    "entryDate": "2011-01-01T00:00:00",
    "id": 2,
    "procDate": "2011-02-01T00:00:00",
    "reference": "O/Bal",
    "timestamp": "IIYwcBIe2wg=",
    "total": 20,
    "totalVAT": 3.33,
    "unpaid": 0,
    "vatEntries": [
      {
        "amount": 16.77,
        "vatRateId": 2
      }
    ]
  }
]
```

<h3 id="returns-a-list-of-customers-opening-balance-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="returns-a-list-of-customers-opening-balance-transactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OwnerOpeningBalanceDto](#schemaowneropeningbalancedto)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of Customer's quotes.

<a id="opIdCustomers_GetQuotes"></a>

> Code samples

```bash
curl https://example.com/v1/customers/0/quotes \
  -H 'Accept: application/json'
```

`GET /v1/customers/{itemId}/quotes`

<h3 id="returns-a-list-of-customers-quotes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|integer(int64)|true|Id of Customer to return quotes.|

> Example responses

> 200 Response

```json
[
  {
    "comments": "Sample",
    "companyId": 40449,
    "customerOwnerId": 70583,
    "customerOwnerName": "Customer 1",
    "ddNumber": "Sample",
    "entryDate": "2017-01-01T00:00:00",
    "id": 1,
    "layoutType": 1,
    "poNumber": "Sample",
    "procDate": "2017-01-05T00:00:00",
    "productTrans": [
      {
        "acEntries": [
          {
            "accountCode": "sample",
            "analysisCategoryId": 40888,
            "companyId": 40449,
            "id": 1,
            "quoteProductTranId": 40277,
            "value": 100
          }
        ],
        "amount": 10,
        "companyId": 40449,
        "id": 40277,
        "percentage": 0,
        "productCode": "PRO1",
        "productId": 20107,
        "quantity": 1,
        "tranNotes": [
          "Product"
        ],
        "unitPrice": 100,
        "vatAmount": 10,
        "vatAnalysisTypeId": 0,
        "vatRateId": 30657
      }
    ],
    "saleInvoiceId": 30044,
    "saleRepId": 75783,
    "timeStamp": "4OVwcBIe2wg=",
    "total": 110,
    "totalNet": 100,
    "totalVat": 10,
    "vatTypeId": 1
  }
]
```

<h3 id="returns-a-list-of-customers-quotes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="returns-a-list-of-customers-quotes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[QuoteDto](#schemaquotedto)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-email">Email</h1>

## Sends a Statement email. If &quot;toAddress&quot; is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.

<a id="opIdEmail_SendEmailStatement"></a>

> Code samples

```bash
curl https://example.com/v1/email/sendEmailStatement \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "bccAddresses": [
      "bcc1@email.com",
      "bcc2@email.com",
      "bcc3@email.com"
    ],
    "customerId": 1,
    "fromPeriod": "2016-04-07T00:00:00",
    "messageBody": "Email message",
    "minimumBalance": 4,
    "toAddress": "to@email.com",
    "toPeriod": "2016-06-07T00:00:00"
  }'
```

`POST /v1/email/sendEmailStatement`

> Body parameter

```json
{
  "bccAddresses": [
    "bcc1@email.com",
    "bcc2@email.com",
    "bcc3@email.com"
  ],
  "customerId": 1,
  "fromPeriod": "2016-04-07T00:00:00",
  "messageBody": "Email message",
  "minimumBalance": 4,
  "toAddress": "to@email.com",
  "toPeriod": "2016-06-07T00:00:00"
}
```

<h3 id="sends-a-statement-email-if-toaddress-is-not-empty-then-email-will-be-sent-to-this-address-otherwise-email-will-be-sent-to-statement-customers-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmailStatementDto](#schemaemailstatementdto)|true|none|
|» bccAddresses|body|[string]|false|none|
|» customerId|body|integer(int64)|false|none|
|» fromPeriod|body|string(date-time)|false|none|
|» messageBody|body|string|false|none|
|» minimumBalance|body|number(double)|false|none|
|» toAddress|body|string|false|none|
|» toPeriod|body|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="sends-a-statement-email-if-toaddress-is-not-empty-then-email-will-be-sent-to-this-address-otherwise-email-will-be-sent-to-statement-customers-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Sends a Quote email. If &quot;toAddress&quot; is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.

<a id="opIdEmail_SendQuote"></a>

> Code samples

```bash
curl https://example.com/v1/email/sendQuote \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "bccAddresses": [
      "bcc1@email.com",
      "bcc2@email.com",
      "bcc3@email.com"
    ],
    "messageBody": "Email message",
    "quoteId": 1,
    "toAddress": "to@email.com"
  }'
```

`POST /v1/email/sendQuote`

> Body parameter

```json
{
  "bccAddresses": [
    "bcc1@email.com",
    "bcc2@email.com",
    "bcc3@email.com"
  ],
  "messageBody": "Email message",
  "quoteId": 1,
  "toAddress": "to@email.com"
}
```

<h3 id="sends-a-quote-email-if-toaddress-is-not-empty-then-email-will-be-sent-to-this-address-otherwise-email-will-be-sent-to-statement-customers-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EmailQuoteDto](#schemaemailquotedto)|true|none|
|» bccAddresses|body|[string]|false|none|
|» messageBody|body|string|false|none|
|» quoteId|body|integer(int64)|false|none|
|» toAddress|body|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="sends-a-quote-email-if-toaddress-is-not-empty-then-email-will-be-sent-to-this-address-otherwise-email-will-be-sent-to-statement-customers-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Sends a Sales Invoice email. If &quot;toAddress&quot; is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.

<a id="opIdEmail_SendSalesInvoice"></a>

> Code samples

```bash
curl https://example.com/v1/email/sendSalesInvoice \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "bccAddresses": [
      "bcc1@email.com",
      "bcc2@email.com",
      "bcc3@email.com"
    ],
    "messageBody": "Email message",
    "salesInvoiceId": 1,
    "toAddress": "to@email.com"
  }'
```

`POST /v1/email/sendSalesInvoice`

> Body parameter

```json
{
  "bccAddresses": [
    "bcc1@email.com",
    "bcc2@email.com",
    "bcc3@email.com"
  ],
  "messageBody": "Email message",
  "salesInvoiceId": 1,
  "toAddress": "to@email.com"
}
```

<h3 id="sends-a-sales-invoice-email-if-toaddress-is-not-empty-then-email-will-be-sent-to-this-address-otherwise-email-will-be-sent-to-sales-invoice-customers-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SalesInvoiceEmailInfoDto](#schemasalesinvoiceemailinfodto)|true|none|
|» bccAddresses|body|[string]|false|none|
|» messageBody|body|string|false|none|
|» salesInvoiceId|body|integer(int64)|false|none|
|» toAddress|body|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="sends-a-sales-invoice-email-if-toaddress-is-not-empty-then-email-will-be-sent-to-this-address-otherwise-email-will-be-sent-to-sales-invoice-customers-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-ownertypegroups">OwnerTypeGroups</h1>

## Returns a list of global Owner Type Groups. Supports OData querying protocol. Filtering is forbidden. Ordering is allowed by &quot;id&quot; field.

<a id="opIdOwnerTypeGroups_Get"></a>

> Code samples

```bash
curl https://example.com/v1/ownerTypeGroups \
  -H 'Accept: application/json'
```

`GET /v1/ownerTypeGroups`

> Example responses

> 200 Response

```json
{
  "Count": 2,
  "Items": [
    {
      "description": "Customer",
      "id": 1
    },
    {
      "description": "Supplier",
      "id": 2
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-global-owner-type-groups-supports-odata-querying-protocol-filtering-is-forbidden-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_OwnerTypeGroupDto_](#schemapageresult_ownertypegroupdto_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-ownertypes">OwnerTypes</h1>

## Returns a list of global Owner Types. Supports OData querying protocol. Filtering is forbidden. Ordering is allowed by &quot;id&quot; field.

<a id="opIdOwnerTypes_Get"></a>

> Code samples

```bash
curl https://example.com/v1/ownerTypes \
  -H 'Accept: application/json'
```

`GET /v1/ownerTypes`

> Example responses

> 200 Response

```json
{
  "Count": 3,
  "Items": [
    {
      "description": "Prospect",
      "id": 1,
      "recordTypeGroupId": 1
    },
    {
      "description": "Customer",
      "id": 2,
      "recordTypeGroupId": 1
    },
    {
      "description": "Supplier",
      "id": 3,
      "recordTypeGroupId": 2
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-global-owner-types-supports-odata-querying-protocol-filtering-is-forbidden-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_OwnerTypeDto_](#schemapageresult_ownertypedto_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-payments">Payments</h1>

## Returns a list of company's Payments. Supports OData querying protocol. Filtering is allowed by &quot;entryDate&quot; field. Ordering is allowed by &quot;id&quot; field.

<a id="opIdPayments_Get"></a>

> Code samples

```bash
curl https://example.com/v1/payments \
  -H 'Accept: application/json'
```

`GET /v1/payments`

> Example responses

> 200 Response

```json
{
  "Count": 1,
  "Items": [
    {
      "acCode": "C1",
      "acEntries": [],
      "bankAccountCode": "B1",
      "bankAccountId": 1,
      "bookTranTypeId": 3,
      "customFields": [
        {
          "description": "F1",
          "id": 1,
          "userDefinedFieldId": 1,
          "value": "f1"
        },
        {
          "description": "F2",
          "id": 2,
          "userDefinedFieldId": 2,
          "value": "f2"
        }
      ],
      "detailCollection": [
        "d1",
        "d2"
      ],
      "discount": 2,
      "entryDate": "2011-07-01T00:00:00",
      "id": 2,
      "note": "123",
      "plaidTransactionId": null,
      "procDate": "2011-08-08T00:00:00",
      "reference": "000002",
      "supplierId": 2,
      "timestamp": "AJlDcBIe2wg=",
      "total": 155,
      "transferBankCode": "",
      "transferBankId": 1,
      "unallocated": 155
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-payments-supports-odata-querying-protocol-filtering-is-allowed-by-entrydate-field-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_PaymentQueryDto_](#schemapageresult_paymentquerydto_)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new Payment.

<a id="opIdPayments_Post"></a>

> Code samples

```bash
curl https://example.com/v1/payments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acCode": "C1",
    "acEntries": [],
    "bankAccountCode": "B1",
    "bankAccountId": 1,
    "bookTranTypeId": 3,
    "customFields": [
      {
        "description": "F1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "f1"
      },
      {
        "description": "F2",
        "id": 2,
        "userDefinedFieldId": 2,
        "value": "f2"
      }
    ],
    "detailCollection": [
      "d1",
      "d2"
    ],
    "discount": 2,
    "entryDate": "2011-07-01T00:00:00",
    "id": 2,
    "note": "123",
    "procDate": "2011-08-08T00:00:00",
    "reference": "000002",
    "supplierId": 2,
    "timestamp": "CcBKcBIe2wg=",
    "total": 155,
    "transferBankCode": "",
    "transferBankId": 1,
    "unallocated": 155
  }'
```

`POST /v1/payments`

> Body parameter

```json
{
  "acCode": "C1",
  "acEntries": [],
  "bankAccountCode": "B1",
  "bankAccountId": 1,
  "bookTranTypeId": 3,
  "customFields": [
    {
      "description": "F1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "f1"
    },
    {
      "description": "F2",
      "id": 2,
      "userDefinedFieldId": 2,
      "value": "f2"
    }
  ],
  "detailCollection": [
    "d1",
    "d2"
  ],
  "discount": 2,
  "entryDate": "2011-07-01T00:00:00",
  "id": 2,
  "note": "123",
  "procDate": "2011-08-08T00:00:00",
  "reference": "000002",
  "supplierId": 2,
  "timestamp": "CcBKcBIe2wg=",
  "total": 155,
  "transferBankCode": "",
  "transferBankId": 1,
  "unallocated": 155
}
```

<h3 id="creates-a-new-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentDto](#schemapaymentdto)|true|Information of Payment to create.|
|» acCode|body|string|false|none|
|» acEntries|body|[[AcEntryDto](#schemaacentrydto)]|false|none|
|» bankAccountCode|body|string|false|none|
|» bankAccountId|body|integer(int64)|false|none|
|» bookTranTypeId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» detailCollection|body|[string]|false|none|
|» discount|body|number(double)|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» note|body|string|false|none|
|» plaidTransactionId|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» reference|body|string|false|none|
|» supplierId|body|integer(int64)|false|none|
|» timestamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» transferBankCode|body|string|false|none|
|» transferBankId|body|integer(int64)|false|none|
|» unallocated|body|number(double)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="creates-a-new-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Processes a batch of Payments.

<a id="opIdPayments_ProcessBatch"></a>

> Code samples

```bash
curl https://example.com/v1/payments/batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": {
        "acCode": "C1",
        "acEntries": [],
        "bankAccountCode": "B1",
        "bankAccountId": 1,
        "bookTranTypeId": 3,
        "customFields": [
          {
            "description": "F1",
            "id": 1,
            "userDefinedFieldId": 1,
            "value": "f1"
          },
          {
            "description": "F2",
            "id": 2,
            "userDefinedFieldId": 2,
            "value": "f2"
          }
        ],
        "detailCollection": [
          "d1",
          "d2"
        ],
        "discount": 2,
        "entryDate": "2011-07-01T00:00:00",
        "id": 2,
        "note": "123",
        "procDate": "2011-08-08T00:00:00",
        "reference": "000002",
        "supplierId": 2,
        "timestamp": "CcBKcBIe2wg=",
        "total": 155,
        "transferBankCode": "",
        "transferBankId": 1,
        "unallocated": 155
      },
      "opCode": 1
    }
  ]'
```

`PUT /v1/payments/batch`

> Body parameter

```json
[
  {
    "item": {
      "acCode": "C1",
      "acEntries": [],
      "bankAccountCode": "B1",
      "bankAccountId": 1,
      "bookTranTypeId": 3,
      "customFields": [
        {
          "description": "F1",
          "id": 1,
          "userDefinedFieldId": 1,
          "value": "f1"
        },
        {
          "description": "F2",
          "id": 2,
          "userDefinedFieldId": 2,
          "value": "f2"
        }
      ],
      "detailCollection": [
        "d1",
        "d2"
      ],
      "discount": 2,
      "entryDate": "2011-07-01T00:00:00",
      "id": 2,
      "note": "123",
      "procDate": "2011-08-08T00:00:00",
      "reference": "000002",
      "supplierId": 2,
      "timestamp": "CcBKcBIe2wg=",
      "total": 155,
      "transferBankCode": "",
      "transferBankId": 1,
      "unallocated": 155
    },
    "opCode": 1
  }
]
```

<h3 id="processes-a-batch-of-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[BatchItem_PaymentDto_](#schemabatchitem_paymentdto_)]|true|Batch of Payments to process.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="processes-a-batch-of-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns information about a single Payments.

> Code samples

```bash
curl https://example.com/v1/payments/0 \
  -H 'Accept: application/json'
```

`GET /v1/payments/{id}`

<h3 id="returns-information-about-a-single-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Payment to return.|

> Example responses

> 200 Response

```json
{
  "acCode": "C1",
  "acEntries": [],
  "bankAccountCode": "B1",
  "bankAccountId": 1,
  "bookTranTypeId": 3,
  "customFields": [
    {
      "description": "F1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "f1"
    },
    {
      "description": "F2",
      "id": 2,
      "userDefinedFieldId": 2,
      "value": "f2"
    }
  ],
  "detailCollection": [
    "d1",
    "d2"
  ],
  "discount": 2,
  "entryDate": "2011-07-01T00:00:00",
  "id": 2,
  "note": "123",
  "plaidTransactionId": null,
  "procDate": "2011-08-08T00:00:00",
  "reference": "000002",
  "supplierId": 2,
  "timestamp": "CcBKcBIe2wg=",
  "total": 155,
  "transferBankCode": "",
  "transferBankId": 1,
  "unallocated": 155
}
```

<h3 id="returns-information-about-a-single-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaymentDto](#schemapaymentdto)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates an existing Payment.

<a id="opIdPayments_Put"></a>

> Code samples

```bash
curl https://example.com/v1/payments/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acCode": "C1",
    "acEntries": [],
    "bankAccountCode": "B1",
    "bankAccountId": 1,
    "bookTranTypeId": 3,
    "customFields": [
      {
        "description": "F1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "f1"
      },
      {
        "description": "F2",
        "id": 2,
        "userDefinedFieldId": 2,
        "value": "f2"
      }
    ],
    "detailCollection": [
      "d1",
      "d2"
    ],
    "discount": 2,
    "entryDate": "2011-07-01T00:00:00",
    "id": 2,
    "note": "123",
    "procDate": "2011-08-08T00:00:00",
    "reference": "000002",
    "supplierId": 2,
    "timestamp": "CcBKcBIe2wg=",
    "total": 155,
    "transferBankCode": "",
    "transferBankId": 1,
    "unallocated": 155
  }'
```

`PUT /v1/payments/{id}`

> Body parameter

```json
{
  "acCode": "C1",
  "acEntries": [],
  "bankAccountCode": "B1",
  "bankAccountId": 1,
  "bookTranTypeId": 3,
  "customFields": [
    {
      "description": "F1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "f1"
    },
    {
      "description": "F2",
      "id": 2,
      "userDefinedFieldId": 2,
      "value": "f2"
    }
  ],
  "detailCollection": [
    "d1",
    "d2"
  ],
  "discount": 2,
  "entryDate": "2011-07-01T00:00:00",
  "id": 2,
  "note": "123",
  "procDate": "2011-08-08T00:00:00",
  "reference": "000002",
  "supplierId": 2,
  "timestamp": "CcBKcBIe2wg=",
  "total": 155,
  "transferBankCode": "",
  "transferBankId": 1,
  "unallocated": 155
}
```

<h3 id="updates-an-existing-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Payment to update.|
|body|body|[PaymentDto](#schemapaymentdto)|true|Information of Payment to update.|
|» acCode|body|string|false|none|
|» acEntries|body|[[AcEntryDto](#schemaacentrydto)]|false|none|
|» bankAccountCode|body|string|false|none|
|» bankAccountId|body|integer(int64)|false|none|
|» bookTranTypeId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» detailCollection|body|[string]|false|none|
|» discount|body|number(double)|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» note|body|string|false|none|
|» plaidTransactionId|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» reference|body|string|false|none|
|» supplierId|body|integer(int64)|false|none|
|» timestamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» transferBankCode|body|string|false|none|
|» transferBankId|body|integer(int64)|false|none|
|» unallocated|body|number(double)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="updates-an-existing-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Removes an existing Payment.

<a id="opIdPayments_Delete"></a>

> Code samples

```bash
curl 'https://example.com/v1/payments/0?timestamp=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/payments/{id}`

<h3 id="removes-an-existing-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Payment to remove.|
|timestamp|query|string|true|Timestamp of Payment to remove. Should be encoded in Base64.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removes-an-existing-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-producttypes">ProductTypes</h1>

## Returns a list of global Product Types. Supports OData querying protocol. Filtering is forbidden. Ordering is allowed by &quot;id&quot; field.

<a id="opIdProductTypes_Get"></a>

> Code samples

```bash
curl https://example.com/v1/productTypes \
  -H 'Accept: application/json'
```

`GET /v1/productTypes`

> Example responses

> 200 Response

```json
{
  "Count": 3,
  "Items": [
    {
      "description": "Prospect",
      "id": 1,
      "recordTypeGroupId": 1
    },
    {
      "description": "Customer",
      "id": 2,
      "recordTypeGroupId": 1
    },
    {
      "description": "Supplier",
      "id": 3,
      "recordTypeGroupId": 2
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-global-product-types-supports-odata-querying-protocol-filtering-is-forbidden-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_OwnerTypeDto_](#schemapageresult_ownertypedto_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-products">Products</h1>

## Returns a list of company's Products. Supports OData querying protocol. Filtering is forbidden. Ordering is allowed by &quot;id&quot; and &quot;stockCode&quot; fields.

<a id="opIdProducts_Get"></a>

> Code samples

```bash
curl https://example.com/v1/products \
  -H 'Accept: application/json'
```

`GET /v1/products`

> Example responses

> 200 Response

```json
{
  "Count": 1,
  "Items": [
    {
      "details": [
        "det1",
        "det2",
        "det3"
      ],
      "grossUnitPrice": false,
      "hasDefaultVatRate": false,
      "id": 9,
      "productTypeId": 0,
      "stockCode": "PRO1",
      "timestamp": "eiJNcBIe2wg=",
      "unitPrice": 100,
      "vatAnalysisTypeId": 1,
      "vatRateId": null
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-products-supports-odata-querying-protocol-filtering-is-forbidden-ordering-is-allowed-by-id-and-stockcode-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_ProductDto_](#schemapageresult_productdto_)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new Product.

<a id="opIdProducts_Post"></a>

> Code samples

```bash
curl https://example.com/v1/products \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "details": [
      "det1",
      "det2",
      "det3"
    ],
    "grossUnitPrice": false,
    "hasDefaultVatRate": false,
    "id": 9,
    "productTypeId": 0,
    "stockCode": "PRO1",
    "timestamp": "6IRPcBIe2wg=",
    "unitPrice": 100,
    "vatAnalysisTypeId": 1
  }'
```

`POST /v1/products`

> Body parameter

```json
{
  "details": [
    "det1",
    "det2",
    "det3"
  ],
  "grossUnitPrice": false,
  "hasDefaultVatRate": false,
  "id": 9,
  "productTypeId": 0,
  "stockCode": "PRO1",
  "timestamp": "6IRPcBIe2wg=",
  "unitPrice": 100,
  "vatAnalysisTypeId": 1
}
```

<h3 id="creates-a-new-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductDto](#schemaproductdto)|true|Information of Product to create.|
|» details|body|[string]|false|none|
|» grossUnitPrice|body|boolean|false|none|
|» hasDefaultVatRate|body|boolean|false|none|
|» id|body|integer(int64)|false|none|
|» productTypeId|body|integer(int64)|false|none|
|» stockCode|body|string|false|none|
|» timestamp|body|string(byte)|false|none|
|» unitPrice|body|number(double)|false|none|
|» vatAnalysisTypeId|body|integer(int64)|false|none|
|» vatRateId|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="creates-a-new-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Processes a batch of Products.

<a id="opIdProducts_ProcessBatch"></a>

> Code samples

```bash
curl https://example.com/v1/products/batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": {
        "details": [
          "det1",
          "det2",
          "det3"
        ],
        "grossUnitPrice": false,
        "hasDefaultVatRate": false,
        "id": 9,
        "productTypeId": 0,
        "stockCode": "PRO1",
        "timestamp": "TudRcBIe2wg=",
        "unitPrice": 100,
        "vatAnalysisTypeId": 1
      },
      "opCode": 1
    }
  ]'
```

`PUT /v1/products/batch`

> Body parameter

```json
[
  {
    "item": {
      "details": [
        "det1",
        "det2",
        "det3"
      ],
      "grossUnitPrice": false,
      "hasDefaultVatRate": false,
      "id": 9,
      "productTypeId": 0,
      "stockCode": "PRO1",
      "timestamp": "TudRcBIe2wg=",
      "unitPrice": 100,
      "vatAnalysisTypeId": 1
    },
    "opCode": 1
  }
]
```

<h3 id="processes-a-batch-of-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[BatchItem_ProductDto_](#schemabatchitem_productdto_)]|true|Batch of Products to process.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="processes-a-batch-of-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns information about a single Product.

> Code samples

```bash
curl https://example.com/v1/products/0 \
  -H 'Accept: application/json'
```

`GET /v1/products/{id}`

<h3 id="returns-information-about-a-single-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Product to return.|

> Example responses

> 200 Response

```json
{
  "details": [
    "det1",
    "det2",
    "det3"
  ],
  "grossUnitPrice": false,
  "hasDefaultVatRate": false,
  "id": 9,
  "productTypeId": 0,
  "stockCode": "PRO1",
  "timestamp": "6IRPcBIe2wg=",
  "unitPrice": 100,
  "vatAnalysisTypeId": 1,
  "vatRateId": null
}
```

<h3 id="returns-information-about-a-single-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ProductDto](#schemaproductdto)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates an existing Product.

<a id="opIdProducts_Put"></a>

> Code samples

```bash
curl https://example.com/v1/products/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "details": [
      "det1",
      "det2",
      "det3"
    ],
    "grossUnitPrice": false,
    "hasDefaultVatRate": false,
    "id": 9,
    "productTypeId": 0,
    "stockCode": "PRO1",
    "timestamp": "6IRPcBIe2wg=",
    "unitPrice": 100,
    "vatAnalysisTypeId": 1
  }'
```

`PUT /v1/products/{id}`

> Body parameter

```json
{
  "details": [
    "det1",
    "det2",
    "det3"
  ],
  "grossUnitPrice": false,
  "hasDefaultVatRate": false,
  "id": 9,
  "productTypeId": 0,
  "stockCode": "PRO1",
  "timestamp": "6IRPcBIe2wg=",
  "unitPrice": 100,
  "vatAnalysisTypeId": 1
}
```

<h3 id="updates-an-existing-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Product to update.|
|body|body|[ProductDto](#schemaproductdto)|true|Information of Product to update.|
|» details|body|[string]|false|none|
|» grossUnitPrice|body|boolean|false|none|
|» hasDefaultVatRate|body|boolean|false|none|
|» id|body|integer(int64)|false|none|
|» productTypeId|body|integer(int64)|false|none|
|» stockCode|body|string|false|none|
|» timestamp|body|string(byte)|false|none|
|» unitPrice|body|number(double)|false|none|
|» vatAnalysisTypeId|body|integer(int64)|false|none|
|» vatRateId|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="updates-an-existing-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Removes an existing Product.

<a id="opIdProducts_Delete"></a>

> Code samples

```bash
curl 'https://example.com/v1/products/0?timestamp=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/products/{id}`

<h3 id="removes-an-existing-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Product to remove.|
|timestamp|query|string|true|Timestamp of Product to remove. Should be encoded in Base64.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removes-an-existing-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-purchases">Purchases</h1>

## Returns a list of company's Purchases. Supports OData querying protocol. Filtering is allowed by &quot;entryDate&quot; field. Ordering is allowed by &quot;id&quot; field.

<a id="opIdPurchases_Get"></a>

> Code samples

```bash
curl https://example.com/v1/purchases \
  -H 'Accept: application/json'
```

`GET /v1/purchases`

> Example responses

> 200 Response

```json
{
  "Count": 1,
  "Items": [
    {
      "acCode": "SUP3",
      "acEntries": [
        {
          "accountCode": "PU03",
          "analysisCategoryId": 10441,
          "description": "PUR 3",
          "id": 12518,
          "value": 90.91
        }
      ],
      "bookTranTypeId": 4,
      "customFields": [],
      "detailCollection": [],
      "entryDate": "2016-06-01T00:00:00",
      "id": 13380,
      "isDiscrepancyAccepted": null,
      "netGoods": 0,
      "netServices": 0,
      "note": "Supplier 3",
      "postponedAccounting": false,
      "procDate": "2016-06-24T00:00:00",
      "reference": "000001",
      "supplierId": 10173,
      "timestamp": "tHBbcBIe2wg=",
      "total": 100,
      "totalNet": 90.91,
      "totalVAT": 9.09,
      "unallocated": 100,
      "unpaid": 100,
      "vatEntries": [
        {
          "amount": 90.91,
          "id": 12267,
          "percentage": 10,
          "vatRateId": 10317
        }
      ],
      "vatTypeId": 1
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-purchases-supports-odata-querying-protocol-filtering-is-allowed-by-entrydate-field-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_PurchaseQueryDto_](#schemapageresult_purchasequerydto_)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new Purchase.

<a id="opIdPurchases_Post"></a>

> Code samples

```bash
curl https://example.com/v1/purchases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acCode": "SUP3",
    "acEntries": [
      {
        "accountCode": "PU03",
        "analysisCategoryId": 10441,
        "description": "PUR 3",
        "id": 12518,
        "value": 90.91
      }
    ],
    "bookTranTypeId": 4,
    "customFields": [],
    "detailCollection": [],
    "entryDate": "2016-06-01T00:00:00",
    "id": 13380,
    "isDiscrepancyAccepted": false,
    "netGoods": 0,
    "netServices": 0,
    "note": "Supplier 3",
    "postponedAccounting": false,
    "procDate": "2016-06-24T00:00:00",
    "reference": "000001",
    "supplierId": 10173,
    "timestamp": "eDVgcBIe2wg=",
    "total": 100,
    "totalNet": 90.91,
    "totalVAT": 9.09,
    "unallocated": 100,
    "unpaid": 100,
    "vatEntries": [
      {
        "amount": 90.91,
        "id": 12267,
        "percentage": 10,
        "vatRateId": 10317
      }
    ],
    "vatTypeId": 1
  }'
```

`POST /v1/purchases`

> Body parameter

```json
{
  "acCode": "SUP3",
  "acEntries": [
    {
      "accountCode": "PU03",
      "analysisCategoryId": 10441,
      "description": "PUR 3",
      "id": 12518,
      "value": 90.91
    }
  ],
  "bookTranTypeId": 4,
  "customFields": [],
  "detailCollection": [],
  "entryDate": "2016-06-01T00:00:00",
  "id": 13380,
  "isDiscrepancyAccepted": false,
  "netGoods": 0,
  "netServices": 0,
  "note": "Supplier 3",
  "postponedAccounting": false,
  "procDate": "2016-06-24T00:00:00",
  "reference": "000001",
  "supplierId": 10173,
  "timestamp": "eDVgcBIe2wg=",
  "total": 100,
  "totalNet": 90.91,
  "totalVAT": 9.09,
  "unallocated": 100,
  "unpaid": 100,
  "vatEntries": [
    {
      "amount": 90.91,
      "id": 12267,
      "percentage": 10,
      "vatRateId": 10317
    }
  ],
  "vatTypeId": 1
}
```

<h3 id="creates-a-new-purchase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PurchaseDto](#schemapurchasedto)|true|Information of Purchase to create.|
|» acCode|body|string|false|none|
|» acEntries|body|[[AcEntryDto](#schemaacentrydto)]|false|none|
|» bookTranTypeId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» detailCollection|body|[string]|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» isDiscrepancyAccepted|body|boolean|false|none|
|» netGoods|body|number(double)|false|none|
|» netServices|body|number(double)|false|none|
|» note|body|string|false|none|
|» postponedAccounting|body|boolean|false|none|
|» procDate|body|string(date-time)|false|none|
|» reference|body|string|false|none|
|» supplierId|body|integer(int64)|false|none|
|» timestamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» totalNet|body|number(double)|false|none|
|» totalVAT|body|number(double)|false|none|
|» unallocated|body|number(double)|false|none|
|» unpaid|body|number(double)|false|none|
|» vatEntries|body|[[VatEntryDto](#schemavatentrydto)]|false|none|
|» vatTypeId|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="creates-a-new-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Processes a batch of Purchases.

<a id="opIdPurchases_ProcessBatch"></a>

> Code samples

```bash
curl https://example.com/v1/purchases/batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": {
        "acCode": "SUP3",
        "acEntries": [
          {
            "accountCode": "PU03",
            "analysisCategoryId": 10441,
            "description": "PUR 3",
            "id": 12518,
            "value": 90.91
          }
        ],
        "bookTranTypeId": 4,
        "customFields": [],
        "detailCollection": [],
        "entryDate": "2016-06-01T00:00:00",
        "id": 13380,
        "netGoods": 0,
        "netServices": 0,
        "note": "Supplier 3",
        "procDate": "2016-06-24T00:00:00",
        "reference": "000001",
        "supplierId": 10173,
        "timestamp": "eDVgcBIe2wg=",
        "total": 100,
        "totalNet": 90.91,
        "totalVAT": 9.09,
        "unallocated": 100,
        "unpaid": 100,
        "vatEntries": [
          {
            "amount": 90.91,
            "id": 12267,
            "percentage": 10,
            "vatRateId": 10317
          }
        ],
        "vatTypeId": 1
      },
      "opCode": 1
    }
  ]'
```

`PUT /v1/purchases/batch`

> Body parameter

```json
[
  {
    "item": {
      "acCode": "SUP3",
      "acEntries": [
        {
          "accountCode": "PU03",
          "analysisCategoryId": 10441,
          "description": "PUR 3",
          "id": 12518,
          "value": 90.91
        }
      ],
      "bookTranTypeId": 4,
      "customFields": [],
      "detailCollection": [],
      "entryDate": "2016-06-01T00:00:00",
      "id": 13380,
      "netGoods": 0,
      "netServices": 0,
      "note": "Supplier 3",
      "procDate": "2016-06-24T00:00:00",
      "reference": "000001",
      "supplierId": 10173,
      "timestamp": "eDVgcBIe2wg=",
      "total": 100,
      "totalNet": 90.91,
      "totalVAT": 9.09,
      "unallocated": 100,
      "unpaid": 100,
      "vatEntries": [
        {
          "amount": 90.91,
          "id": 12267,
          "percentage": 10,
          "vatRateId": 10317
        }
      ],
      "vatTypeId": 1
    },
    "opCode": 1
  }
]
```

<h3 id="processes-a-batch-of-purchases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[BatchItem_PurchaseDto_](#schemabatchitem_purchasedto_)]|true|Batch of Purchases to process.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="processes-a-batch-of-purchases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns information about a single Purchases.

> Code samples

```bash
curl https://example.com/v1/purchases/0 \
  -H 'Accept: application/json'
```

`GET /v1/purchases/{id}`

<h3 id="returns-information-about-a-single-purchases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Purchase to return.|

> Example responses

> 200 Response

```json
{
  "acCode": "SUP3",
  "acEntries": [
    {
      "accountCode": "PU03",
      "analysisCategoryId": 10441,
      "description": "PUR 3",
      "id": 12518,
      "value": 90.91
    }
  ],
  "bookTranTypeId": 4,
  "customFields": [],
  "detailCollection": [],
  "entryDate": "2016-06-01T00:00:00",
  "id": 13380,
  "isDiscrepancyAccepted": false,
  "netGoods": 0,
  "netServices": 0,
  "note": "Supplier 3",
  "postponedAccounting": false,
  "procDate": "2016-06-24T00:00:00",
  "reference": "000001",
  "supplierId": 10173,
  "timestamp": "eDVgcBIe2wg=",
  "total": 100,
  "totalNet": 90.91,
  "totalVAT": 9.09,
  "unallocated": 100,
  "unpaid": 100,
  "vatEntries": [
    {
      "amount": 90.91,
      "id": 12267,
      "percentage": 10,
      "vatRateId": 10317
    }
  ],
  "vatTypeId": 1
}
```

<h3 id="returns-information-about-a-single-purchases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PurchaseDto](#schemapurchasedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates an existing Purchase.

<a id="opIdPurchases_Put"></a>

> Code samples

```bash
curl https://example.com/v1/purchases/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acCode": "SUP3",
    "acEntries": [
      {
        "accountCode": "PU03",
        "analysisCategoryId": 10441,
        "description": "PUR 3",
        "id": 12518,
        "value": 90.91
      }
    ],
    "bookTranTypeId": 4,
    "customFields": [],
    "detailCollection": [],
    "entryDate": "2016-06-01T00:00:00",
    "id": 13380,
    "isDiscrepancyAccepted": false,
    "netGoods": 0,
    "netServices": 0,
    "note": "Supplier 3",
    "postponedAccounting": false,
    "procDate": "2016-06-24T00:00:00",
    "reference": "000001",
    "supplierId": 10173,
    "timestamp": "eDVgcBIe2wg=",
    "total": 100,
    "totalNet": 90.91,
    "totalVAT": 9.09,
    "unallocated": 100,
    "unpaid": 100,
    "vatEntries": [
      {
        "amount": 90.91,
        "id": 12267,
        "percentage": 10,
        "vatRateId": 10317
      }
    ],
    "vatTypeId": 1
  }'
```

`PUT /v1/purchases/{id}`

> Body parameter

```json
{
  "acCode": "SUP3",
  "acEntries": [
    {
      "accountCode": "PU03",
      "analysisCategoryId": 10441,
      "description": "PUR 3",
      "id": 12518,
      "value": 90.91
    }
  ],
  "bookTranTypeId": 4,
  "customFields": [],
  "detailCollection": [],
  "entryDate": "2016-06-01T00:00:00",
  "id": 13380,
  "isDiscrepancyAccepted": false,
  "netGoods": 0,
  "netServices": 0,
  "note": "Supplier 3",
  "postponedAccounting": false,
  "procDate": "2016-06-24T00:00:00",
  "reference": "000001",
  "supplierId": 10173,
  "timestamp": "eDVgcBIe2wg=",
  "total": 100,
  "totalNet": 90.91,
  "totalVAT": 9.09,
  "unallocated": 100,
  "unpaid": 100,
  "vatEntries": [
    {
      "amount": 90.91,
      "id": 12267,
      "percentage": 10,
      "vatRateId": 10317
    }
  ],
  "vatTypeId": 1
}
```

<h3 id="updates-an-existing-purchase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Purchase to update.|
|body|body|[PurchaseDto](#schemapurchasedto)|true|Information of Purchase to update.|
|» acCode|body|string|false|none|
|» acEntries|body|[[AcEntryDto](#schemaacentrydto)]|false|none|
|» bookTranTypeId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» detailCollection|body|[string]|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» isDiscrepancyAccepted|body|boolean|false|none|
|» netGoods|body|number(double)|false|none|
|» netServices|body|number(double)|false|none|
|» note|body|string|false|none|
|» postponedAccounting|body|boolean|false|none|
|» procDate|body|string(date-time)|false|none|
|» reference|body|string|false|none|
|» supplierId|body|integer(int64)|false|none|
|» timestamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» totalNet|body|number(double)|false|none|
|» totalVAT|body|number(double)|false|none|
|» unallocated|body|number(double)|false|none|
|» unpaid|body|number(double)|false|none|
|» vatEntries|body|[[VatEntryDto](#schemavatentrydto)]|false|none|
|» vatTypeId|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="updates-an-existing-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Removes an existing Purchase.

<a id="opIdPurchases_Delete"></a>

> Code samples

```bash
curl 'https://example.com/v1/purchases/0?timestamp=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/purchases/{id}`

<h3 id="removes-an-existing-purchase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Purchase to remove.|
|timestamp|query|string|true|Timestamp of Purchase to remove. Should be encoded in Base64.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removes-an-existing-purchase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-quote">Quote</h1>

## Returns a list of company's Quotes. Filtering is forbidden. Ordering is allowed by &quot;id&quot;.

<a id="opIdQuote_Get"></a>

> Code samples

```bash
curl https://example.com/v1/quotes \
  -H 'Accept: application/json'
```

`GET /v1/quotes`

> Example responses

> 200 Response

```json
{
  "Count": 1,
  "Items": [
    {
      "acCode": null,
      "closedDate": null,
      "comments": "Sample",
      "companyId": 40449,
      "customFields": null,
      "customerOwnerId": 70583,
      "customerOwnerName": "Customer 1",
      "ddNumber": "Sample",
      "deliveryList": null,
      "deliveryTo": null,
      "entryDate": "2017-01-01T00:00:00",
      "id": 1,
      "layoutType": 1,
      "note": null,
      "poNumber": "Sample",
      "procDate": "2017-01-05T00:00:00",
      "productTrans": [
        {
          "acEntries": [
            {
              "accountCode": "sample",
              "analysisCategoryId": 40888,
              "companyId": 40449,
              "id": 1,
              "quoteProductTranId": 40277,
              "value": 100
            }
          ],
          "amount": 10,
          "companyId": 40449,
          "id": 40277,
          "percentage": 0,
          "productCode": "PRO1",
          "productId": 20107,
          "quantity": 1,
          "tranNotes": [
            "Product"
          ],
          "unitPrice": 100,
          "vatAmount": 10,
          "vatAnalysisTypeId": 0,
          "vatRateId": 30657
        }
      ],
      "reference": "000032",
      "saleInvoiceId": 30044,
      "saleRepCode": null,
      "saleRepId": 75783,
      "timeStamp": "QvpkcBIe2wg=",
      "total": 110,
      "totalNet": 100,
      "totalVat": 10,
      "vatTypeId": 1
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-quotes-filtering-is-forbidden-ordering-is-allowed-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_QuoteDto_](#schemapageresult_quotedto_)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new Quote.

<a id="opIdQuote_Post"></a>

> Code samples

```bash
curl https://example.com/v1/quotes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "comments": "Sample",
    "companyId": 40449,
    "customerOwnerId": 70583,
    "customerOwnerName": "Customer 1",
    "ddNumber": "Sample",
    "entryDate": "2017-01-01T00:00:00",
    "id": 1,
    "layoutType": 1,
    "poNumber": "Sample",
    "procDate": "2017-01-05T00:00:00",
    "productTrans": [
      {
        "acEntries": [
          {
            "accountCode": "sample",
            "analysisCategoryId": 40888,
            "companyId": 40449,
            "id": 1,
            "quoteProductTranId": 40277,
            "value": 100
          }
        ],
        "amount": 10,
        "companyId": 40449,
        "id": 40277,
        "percentage": 0,
        "productCode": "PRO1",
        "productId": 20107,
        "quantity": 1,
        "tranNotes": [
          "Product"
        ],
        "unitPrice": 100,
        "vatAmount": 10,
        "vatAnalysisTypeId": 0,
        "vatRateId": 30657
      }
    ],
    "saleInvoiceId": 30044,
    "saleRepId": 75783,
    "timeStamp": "4OVwcBIe2wg=",
    "total": 110,
    "totalNet": 100,
    "totalVat": 10,
    "vatTypeId": 1
  }'
```

`POST /v1/quotes`

> Body parameter

```json
{
  "comments": "Sample",
  "companyId": 40449,
  "customerOwnerId": 70583,
  "customerOwnerName": "Customer 1",
  "ddNumber": "Sample",
  "entryDate": "2017-01-01T00:00:00",
  "id": 1,
  "layoutType": 1,
  "poNumber": "Sample",
  "procDate": "2017-01-05T00:00:00",
  "productTrans": [
    {
      "acEntries": [
        {
          "accountCode": "sample",
          "analysisCategoryId": 40888,
          "companyId": 40449,
          "id": 1,
          "quoteProductTranId": 40277,
          "value": 100
        }
      ],
      "amount": 10,
      "companyId": 40449,
      "id": 40277,
      "percentage": 0,
      "productCode": "PRO1",
      "productId": 20107,
      "quantity": 1,
      "tranNotes": [
        "Product"
      ],
      "unitPrice": 100,
      "vatAmount": 10,
      "vatAnalysisTypeId": 0,
      "vatRateId": 30657
    }
  ],
  "saleInvoiceId": 30044,
  "saleRepId": 75783,
  "timeStamp": "4OVwcBIe2wg=",
  "total": 110,
  "totalNet": 100,
  "totalVat": 10,
  "vatTypeId": 1
}
```

<h3 id="creates-a-new-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QuoteDto](#schemaquotedto)|true|Information of Quote to create.|
|» acCode|body|string|false|none|
|» closedDate|body|string(date-time)|false|none|
|» comments|body|string|false|none|
|» companyId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» customerOwnerId|body|integer(int64)|false|none|
|» customerOwnerName|body|string|false|none|
|» ddNumber|body|string|false|none|
|» deliveryList|body|string|false|none|
|» deliveryTo|body|[string]|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» layoutType|body|integer(int32)|false|none|
|» note|body|string|false|none|
|» poNumber|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» productTrans|body|[[QuoteProductTransDto](#schemaquoteproducttransdto)]|false|none|
|» reference|body|string|false|none|
|» saleInvoiceId|body|integer(int64)|false|none|
|» saleRepCode|body|string|false|none|
|» saleRepId|body|integer(int64)|false|none|
|» timeStamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» totalNet|body|number(double)|false|none|
|» totalVat|body|number(double)|false|none|
|» vatTypeId|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="creates-a-new-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Processes a batch of Quote.

<a id="opIdQuote_ProcessBatch"></a>

> Code samples

```bash
curl https://example.com/v1/quotes/batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": {
        "comments": "Sample",
        "companyId": 40449,
        "customerOwnerId": 70583,
        "customerOwnerName": "Customer 1",
        "ddNumber": "Sample",
        "entryDate": "2017-01-01T00:00:00",
        "id": 1,
        "layoutType": 1,
        "poNumber": "Sample",
        "procDate": "2017-01-05T00:00:00",
        "productTrans": [
          {
            "acEntries": [
              {
                "accountCode": "sample",
                "analysisCategoryId": 40888,
                "companyId": 40449,
                "id": 1,
                "quoteProductTranId": 40277,
                "value": 100
              }
            ],
            "amount": 10,
            "companyId": 40449,
            "id": 40277,
            "percentage": 0,
            "productCode": "PRO1",
            "productId": 20107,
            "quantity": 1,
            "tranNotes": [
              "Product"
            ],
            "unitPrice": 100,
            "vatAmount": 10,
            "vatAnalysisTypeId": 0,
            "vatRateId": 30657
          }
        ],
        "reference": "000032",
        "saleInvoiceId": 30044,
        "saleRepId": 75783,
        "timeStamp": "koNucBIe2wg=",
        "total": 110,
        "totalNet": 100,
        "totalVat": 10,
        "vatTypeId": 1
      },
      "opCode": 1
    }
  ]'
```

`PUT /v1/quotes/batch`

> Body parameter

```json
[
  {
    "item": {
      "comments": "Sample",
      "companyId": 40449,
      "customerOwnerId": 70583,
      "customerOwnerName": "Customer 1",
      "ddNumber": "Sample",
      "entryDate": "2017-01-01T00:00:00",
      "id": 1,
      "layoutType": 1,
      "poNumber": "Sample",
      "procDate": "2017-01-05T00:00:00",
      "productTrans": [
        {
          "acEntries": [
            {
              "accountCode": "sample",
              "analysisCategoryId": 40888,
              "companyId": 40449,
              "id": 1,
              "quoteProductTranId": 40277,
              "value": 100
            }
          ],
          "amount": 10,
          "companyId": 40449,
          "id": 40277,
          "percentage": 0,
          "productCode": "PRO1",
          "productId": 20107,
          "quantity": 1,
          "tranNotes": [
            "Product"
          ],
          "unitPrice": 100,
          "vatAmount": 10,
          "vatAnalysisTypeId": 0,
          "vatRateId": 30657
        }
      ],
      "reference": "000032",
      "saleInvoiceId": 30044,
      "saleRepId": 75783,
      "timeStamp": "koNucBIe2wg=",
      "total": 110,
      "totalNet": 100,
      "totalVat": 10,
      "vatTypeId": 1
    },
    "opCode": 1
  }
]
```

<h3 id="processes-a-batch-of-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[BatchItem_QuoteDto_](#schemabatchitem_quotedto_)]|true|Batch of Quote to process.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="processes-a-batch-of-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Close a Quote.

<a id="opIdQuote_Close"></a>

> Code samples

```bash
curl https://example.com/v1/quotes/close/0 \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /v1/quotes/close/{id}`

<h3 id="close-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Quote to close|

> Example responses

> 200 Response

```json
{}
```

<h3 id="close-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new Quote with auto generating reference.

<a id="opIdQuote_Post_CreateQuoteWithGeneratingReference"></a>

> Code samples

```bash
curl https://example.com/v1/quotes/createQuoteWithGeneratingReference \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "comments": "Sample",
    "companyId": 40449,
    "customerOwnerId": 70583,
    "customerOwnerName": "Customer 1",
    "ddNumber": "Sample",
    "entryDate": "2017-01-01T00:00:00",
    "id": 1,
    "layoutType": 1,
    "poNumber": "Sample",
    "procDate": "2017-01-05T00:00:00",
    "productTrans": [
      {
        "acEntries": [
          {
            "accountCode": "sample",
            "analysisCategoryId": 40888,
            "companyId": 40449,
            "id": 1,
            "quoteProductTranId": 40277,
            "value": 100
          }
        ],
        "amount": 10,
        "companyId": 40449,
        "id": 40277,
        "percentage": 0,
        "productCode": "PRO1",
        "productId": 20107,
        "quantity": 1,
        "tranNotes": [
          "Product"
        ],
        "unitPrice": 100,
        "vatAmount": 10,
        "vatAnalysisTypeId": 0,
        "vatRateId": 30657
      }
    ],
    "saleInvoiceId": 30044,
    "saleRepId": 75783,
    "timeStamp": "4OVwcBIe2wg=",
    "total": 110,
    "totalNet": 100,
    "totalVat": 10,
    "vatTypeId": 1
  }'
```

`POST /v1/quotes/createQuoteWithGeneratingReference`

> Body parameter

```json
{
  "comments": "Sample",
  "companyId": 40449,
  "customerOwnerId": 70583,
  "customerOwnerName": "Customer 1",
  "ddNumber": "Sample",
  "entryDate": "2017-01-01T00:00:00",
  "id": 1,
  "layoutType": 1,
  "poNumber": "Sample",
  "procDate": "2017-01-05T00:00:00",
  "productTrans": [
    {
      "acEntries": [
        {
          "accountCode": "sample",
          "analysisCategoryId": 40888,
          "companyId": 40449,
          "id": 1,
          "quoteProductTranId": 40277,
          "value": 100
        }
      ],
      "amount": 10,
      "companyId": 40449,
      "id": 40277,
      "percentage": 0,
      "productCode": "PRO1",
      "productId": 20107,
      "quantity": 1,
      "tranNotes": [
        "Product"
      ],
      "unitPrice": 100,
      "vatAmount": 10,
      "vatAnalysisTypeId": 0,
      "vatRateId": 30657
    }
  ],
  "saleInvoiceId": 30044,
  "saleRepId": 75783,
  "timeStamp": "4OVwcBIe2wg=",
  "total": 110,
  "totalNet": 100,
  "totalVat": 10,
  "vatTypeId": 1
}
```

<h3 id="creates-a-new-quote-with-auto-generating-reference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QuoteDto](#schemaquotedto)|true|Information of Quote to create.|
|» acCode|body|string|false|none|
|» closedDate|body|string(date-time)|false|none|
|» comments|body|string|false|none|
|» companyId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» customerOwnerId|body|integer(int64)|false|none|
|» customerOwnerName|body|string|false|none|
|» ddNumber|body|string|false|none|
|» deliveryList|body|string|false|none|
|» deliveryTo|body|[string]|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» layoutType|body|integer(int32)|false|none|
|» note|body|string|false|none|
|» poNumber|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» productTrans|body|[[QuoteProductTransDto](#schemaquoteproducttransdto)]|false|none|
|» reference|body|string|false|none|
|» saleInvoiceId|body|integer(int64)|false|none|
|» saleRepCode|body|string|false|none|
|» saleRepId|body|integer(int64)|false|none|
|» timeStamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» totalNet|body|number(double)|false|none|
|» totalVat|body|number(double)|false|none|
|» vatTypeId|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="creates-a-new-quote-with-auto-generating-reference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a sale invoice from a Quote. When sale invoice is empty, new sale invoice will be generated from Quote.

<a id="opIdQuote_Post_GenerateSaleInvoice"></a>

> Code samples

```bash
curl https://example.com/v1/quotes/generateSaleInvoice \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "quoteId": 0,
    "saleInvoice": {
      "acCode": "CUS3",
      "bookTranTypeId": 7,
      "customFields": [
        {
          "description": "acudf_1",
          "id": 1,
          "userDefinedFieldId": 1,
          "value": "acudfv_1"
        },
        {
          "description": "acudf_2",
          "id": 2,
          "userDefinedFieldId": 1,
          "value": "acudfv_2"
        }
      ],
      "customerId": 70585,
      "deliveryTo": [
        "dt_1",
        "dt_2"
      ],
      "details": "detail_1",
      "entryDate": "2016-06-01T00:00:00",
      "id": 75813,
      "loType": "1",
      "note": "Customer 3",
      "ourReference": "ddNumber_1",
      "procDate": "2016-06-24T00:00:00",
      "productTrans": [
        {
          "acEntries": [
            {
              "accountCode": "SA02",
              "analysisCategoryId": 40889,
              "description": "AnCat1",
              "id": 73455,
              "value": -200
            }
          ],
          "amount": -220,
          "amountNet": -200,
          "id": 51820,
          "percentage": 10,
          "productCode": "PRO2",
          "productId": 20108,
          "quantity": -1,
          "tranNotes": [
            "tn_1",
            "tn_2"
          ],
          "unitPrice": 200,
          "vat": -20,
          "vatAnalysisTypeId": 0,
          "vatRateId": 30657
        }
      ],
      "saleRepId": 33110,
      "timestamp": "oq6NcBIe2wg=",
      "total": -220,
      "totalNet": -200,
      "totalVAT": -20,
      "unpaid": -220,
      "vatTypeId": 1,
      "yourReference": "poNumber_1"
    }
  }'
```

`POST /v1/quotes/generateSaleInvoice`

> Body parameter

```json
{
  "quoteId": 0,
  "saleInvoice": {
    "acCode": "CUS3",
    "bookTranTypeId": 7,
    "customFields": [
      {
        "description": "acudf_1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "acudfv_1"
      },
      {
        "description": "acudf_2",
        "id": 2,
        "userDefinedFieldId": 1,
        "value": "acudfv_2"
      }
    ],
    "customerId": 70585,
    "deliveryTo": [
      "dt_1",
      "dt_2"
    ],
    "details": "detail_1",
    "entryDate": "2016-06-01T00:00:00",
    "id": 75813,
    "loType": "1",
    "note": "Customer 3",
    "ourReference": "ddNumber_1",
    "procDate": "2016-06-24T00:00:00",
    "productTrans": [
      {
        "acEntries": [
          {
            "accountCode": "SA02",
            "analysisCategoryId": 40889,
            "description": "AnCat1",
            "id": 73455,
            "value": -200
          }
        ],
        "amount": -220,
        "amountNet": -200,
        "id": 51820,
        "percentage": 10,
        "productCode": "PRO2",
        "productId": 20108,
        "quantity": -1,
        "tranNotes": [
          "tn_1",
          "tn_2"
        ],
        "unitPrice": 200,
        "vat": -20,
        "vatAnalysisTypeId": 0,
        "vatRateId": 30657
      }
    ],
    "saleRepId": 33110,
    "timestamp": "oq6NcBIe2wg=",
    "total": -220,
    "totalNet": -200,
    "totalVAT": -20,
    "unpaid": -220,
    "vatTypeId": 1,
    "yourReference": "poNumber_1"
  }
}
```

<h3 id="generate-a-sale-invoice-from-a-quote-when-sale-invoice-is-empty-new-sale-invoice-will-be-generated-from-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[QuoteGeneratingInvoiceDto](#schemaquotegeneratinginvoicedto)|true|Id of Quote to generate|
|» quoteId|body|integer(int64)|false|none|
|» saleInvoice|body|[SalesInvoiceCreditNoteDto](#schemasalesinvoicecreditnotedto)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="generate-a-sale-invoice-from-a-quote-when-sale-invoice-is-empty-new-sale-invoice-will-be-generated-from-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Reopen a Quote.

<a id="opIdQuote_Reopen"></a>

> Code samples

```bash
curl https://example.com/v1/quotes/reopen/0 \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /v1/quotes/reopen/{id}`

<h3 id="reopen-a-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Quote to reopen|

> Example responses

> 200 Response

```json
{}
```

<h3 id="reopen-a-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns information about a single Quote.

> Code samples

```bash
curl https://example.com/v1/quotes/0 \
  -H 'Accept: application/json'
```

`GET /v1/quotes/{id}`

<h3 id="returns-information-about-a-single-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Sale Rep to return.|

> Example responses

> 200 Response

```json
{
  "acCode": null,
  "closedDate": null,
  "comments": "Sample",
  "companyId": 40449,
  "customFields": null,
  "customerOwnerId": 70583,
  "customerOwnerName": "Customer 1",
  "ddNumber": "Sample",
  "deliveryList": null,
  "deliveryTo": null,
  "entryDate": "2017-01-01T00:00:00",
  "id": 1,
  "layoutType": 1,
  "note": null,
  "poNumber": "Sample",
  "procDate": "2017-01-05T00:00:00",
  "productTrans": [
    {
      "acEntries": [
        {
          "accountCode": "sample",
          "analysisCategoryId": 40888,
          "companyId": 40449,
          "id": 1,
          "quoteProductTranId": 40277,
          "value": 100
        }
      ],
      "amount": 10,
      "companyId": 40449,
      "id": 40277,
      "percentage": 0,
      "productCode": "PRO1",
      "productId": 20107,
      "quantity": 1,
      "tranNotes": [
        "Product"
      ],
      "unitPrice": 100,
      "vatAmount": 10,
      "vatAnalysisTypeId": 0,
      "vatRateId": 30657
    }
  ],
  "reference": "000032",
  "saleInvoiceId": 30044,
  "saleRepCode": null,
  "saleRepId": 75783,
  "timeStamp": "FSFscBIe2wg=",
  "total": 110,
  "totalNet": 100,
  "totalVat": 10,
  "vatTypeId": 1
}
```

<h3 id="returns-information-about-a-single-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[QuoteDto](#schemaquotedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates an existing Quote.

<a id="opIdQuote_Put"></a>

> Code samples

```bash
curl https://example.com/v1/quotes/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "comments": "Sample",
    "companyId": 40449,
    "customerOwnerId": 70583,
    "customerOwnerName": "Customer 1",
    "ddNumber": "Sample",
    "entryDate": "2017-01-01T00:00:00",
    "id": 1,
    "layoutType": 1,
    "poNumber": "Sample",
    "procDate": "2017-01-05T00:00:00",
    "productTrans": [
      {
        "acEntries": [
          {
            "accountCode": "sample",
            "analysisCategoryId": 40888,
            "companyId": 40449,
            "id": 1,
            "quoteProductTranId": 40277,
            "value": 100
          }
        ],
        "amount": 10,
        "companyId": 40449,
        "id": 40277,
        "percentage": 0,
        "productCode": "PRO1",
        "productId": 20107,
        "quantity": 1,
        "tranNotes": [
          "Product"
        ],
        "unitPrice": 100,
        "vatAmount": 10,
        "vatAnalysisTypeId": 0,
        "vatRateId": 30657
      }
    ],
    "saleInvoiceId": 30044,
    "saleRepId": 75783,
    "timeStamp": "4OVwcBIe2wg=",
    "total": 110,
    "totalNet": 100,
    "totalVat": 10,
    "vatTypeId": 1
  }'
```

`PUT /v1/quotes/{id}`

> Body parameter

```json
{
  "comments": "Sample",
  "companyId": 40449,
  "customerOwnerId": 70583,
  "customerOwnerName": "Customer 1",
  "ddNumber": "Sample",
  "entryDate": "2017-01-01T00:00:00",
  "id": 1,
  "layoutType": 1,
  "poNumber": "Sample",
  "procDate": "2017-01-05T00:00:00",
  "productTrans": [
    {
      "acEntries": [
        {
          "accountCode": "sample",
          "analysisCategoryId": 40888,
          "companyId": 40449,
          "id": 1,
          "quoteProductTranId": 40277,
          "value": 100
        }
      ],
      "amount": 10,
      "companyId": 40449,
      "id": 40277,
      "percentage": 0,
      "productCode": "PRO1",
      "productId": 20107,
      "quantity": 1,
      "tranNotes": [
        "Product"
      ],
      "unitPrice": 100,
      "vatAmount": 10,
      "vatAnalysisTypeId": 0,
      "vatRateId": 30657
    }
  ],
  "saleInvoiceId": 30044,
  "saleRepId": 75783,
  "timeStamp": "4OVwcBIe2wg=",
  "total": 110,
  "totalNet": 100,
  "totalVat": 10,
  "vatTypeId": 1
}
```

<h3 id="updates-an-existing-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Quote to update.|
|body|body|[QuoteDto](#schemaquotedto)|true|Information of Quote to update.|
|» acCode|body|string|false|none|
|» closedDate|body|string(date-time)|false|none|
|» comments|body|string|false|none|
|» companyId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» customerOwnerId|body|integer(int64)|false|none|
|» customerOwnerName|body|string|false|none|
|» ddNumber|body|string|false|none|
|» deliveryList|body|string|false|none|
|» deliveryTo|body|[string]|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» layoutType|body|integer(int32)|false|none|
|» note|body|string|false|none|
|» poNumber|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» productTrans|body|[[QuoteProductTransDto](#schemaquoteproducttransdto)]|false|none|
|» reference|body|string|false|none|
|» saleInvoiceId|body|integer(int64)|false|none|
|» saleRepCode|body|string|false|none|
|» saleRepId|body|integer(int64)|false|none|
|» timeStamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» totalNet|body|number(double)|false|none|
|» totalVat|body|number(double)|false|none|
|» vatTypeId|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="updates-an-existing-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Removes an existing Quote.

<a id="opIdQuote_Delete"></a>

> Code samples

```bash
curl 'https://example.com/v1/quotes/0?timestamp=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/quotes/{id}`

<h3 id="removes-an-existing-quote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Quote to remove.|
|timestamp|query|string|true|Timestamp of Quote to remove. Should be encoded in Base64.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removes-an-existing-quote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-sales">Sales</h1>

## Returns a list of company's Sales Entries, Sales Invoices and Sales Credit Notes. Supports OData querying protocol. Filtering is allowed by &quot;entryDate&quot; field. Ordering is allowed by &quot;id&quot; field.

<a id="opIdSales_Get"></a>

> Code samples

```bash
curl https://example.com/v1/sales \
  -H 'Accept: application/json'
```

`GET /v1/sales`

> Example responses

> 200 Response

```json
{
  "Count": 1,
  "Items": [
    {
      "acCode": "code",
      "acEntries": [
        {
          "accountCode": "000",
          "analysisCategoryId": 1,
          "description": "AnCat 1",
          "id": 1,
          "value": 20
        },
        {
          "accountCode": "000",
          "analysisCategoryId": 1,
          "description": "AnCat 2",
          "id": 2,
          "value": 10
        }
      ],
      "bookTranTypeId": 6,
      "customFields": [
        {
          "description": "acudf_1",
          "id": 1,
          "userDefinedFieldId": 1,
          "value": "acudfv_1"
        }
      ],
      "customerId": 1,
      "details": "detail_1",
      "entryDate": "2011-01-01T00:00:00",
      "id": 1,
      "loType": "1",
      "note": "note_1",
      "procDate": "2011-01-01T00:00:00",
      "reference": "000001",
      "timestamp": "kqp1cBIe2wg=",
      "total": 82.5,
      "totalNet": 70,
      "totalVAT": 12.5,
      "unpaid": 12.5,
      "vatEntries": [
        {
          "amount": 30,
          "id": 1,
          "percentage": 15,
          "vatRateId": 1
        },
        {
          "amount": 40,
          "id": 2,
          "percentage": 20,
          "vatRateId": 2
        }
      ],
      "vatTypeId": 1
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-sales-entries-sales-invoices-and-sales-credit-notes-supports-odata-querying-protocol-filtering-is-allowed-by-entrydate-field-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_SalesQueryDto_](#schemapageresult_salesquerydto_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-salescreditnotes">SalesCreditNotes</h1>

## Returns a list of company's Sales Credit Notes. Supports OData querying protocol. Filtering is allowed by &quot;entryDate&quot; field. Ordering is allowed by &quot;id&quot; field.

<a id="opIdSalesCreditNotes_Get"></a>

> Code samples

```bash
curl https://example.com/v1/salesCreditNotes \
  -H 'Accept: application/json'
```

`GET /v1/salesCreditNotes`

> Example responses

> 200 Response

```json
{
  "Count": 1,
  "Items": [
    {
      "acCode": "CUS3",
      "bookTranTypeId": 7,
      "customFields": [
        {
          "description": "acudf_1",
          "id": 1,
          "userDefinedFieldId": 1,
          "value": "acudfv_1"
        },
        {
          "description": "acudf_2",
          "id": 2,
          "userDefinedFieldId": 1,
          "value": "acudfv_2"
        }
      ],
      "customerId": 70585,
      "deliveryTo": [
        "dt_1",
        "dt_2"
      ],
      "details": "detail_1",
      "entryDate": "2016-06-01T00:00:00",
      "id": 75813,
      "loType": "1",
      "netGoods": null,
      "netServices": null,
      "note": "Customer 3",
      "ourReference": "ddNumber_1",
      "procDate": "2016-06-24T00:00:00",
      "productTrans": [
        {
          "acEntries": [
            {
              "accountCode": "SA02",
              "analysisCategoryId": 40889,
              "description": "AnCat1",
              "id": 73455,
              "value": -200
            }
          ],
          "amount": -220,
          "amountNet": -200,
          "id": 51820,
          "percentage": 10,
          "productCode": "PRO2",
          "productId": 20108,
          "quantity": -1,
          "tranNotes": [
            "tn_1",
            "tn_2"
          ],
          "unitPrice": 200,
          "vat": -20,
          "vatAnalysisTypeId": 0,
          "vatRateId": 30657
        }
      ],
      "quoteId": null,
      "reference": "000001",
      "saleRepCode": null,
      "saleRepId": 33110,
      "timestamp": "7l9/cBIe2wg=",
      "total": -220,
      "totalNet": -200,
      "totalVAT": -20,
      "unpaid": -220,
      "vatTypeId": 1,
      "yourReference": "poNumber_1"
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-sales-credit-notes-supports-odata-querying-protocol-filtering-is-allowed-by-entrydate-field-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_SalesCreditNoteQueryDto_](#schemapageresult_salescreditnotequerydto_)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new Sales Credit Note.

<a id="opIdSalesCreditNotes_Post"></a>

> Code samples

```bash
curl https://example.com/v1/salesCreditNotes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acCode": "CUS3",
    "bookTranTypeId": 7,
    "customFields": [
      {
        "description": "acudf_1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "acudfv_1"
      },
      {
        "description": "acudf_2",
        "id": 2,
        "userDefinedFieldId": 1,
        "value": "acudfv_2"
      }
    ],
    "customerId": 70585,
    "deliveryTo": [
      "dt_1",
      "dt_2"
    ],
    "details": "detail_1",
    "entryDate": "2016-06-01T00:00:00",
    "id": 75813,
    "loType": "1",
    "note": "Customer 3",
    "ourReference": "ddNumber_1",
    "procDate": "2016-06-24T00:00:00",
    "productTrans": [
      {
        "acEntries": [
          {
            "accountCode": "SA02",
            "analysisCategoryId": 40889,
            "description": "AnCat1",
            "id": 73455,
            "value": -200
          }
        ],
        "amount": -220,
        "amountNet": -200,
        "id": 51820,
        "percentage": 10,
        "productCode": "PRO2",
        "productId": 20108,
        "quantity": -1,
        "tranNotes": [
          "tn_1",
          "tn_2"
        ],
        "unitPrice": 200,
        "vat": -20,
        "vatAnalysisTypeId": 0,
        "vatRateId": 30657
      }
    ],
    "saleRepId": 33110,
    "timestamp": "oq6NcBIe2wg=",
    "total": -220,
    "totalNet": -200,
    "totalVAT": -20,
    "unpaid": -220,
    "vatTypeId": 1,
    "yourReference": "poNumber_1"
  }'
```

`POST /v1/salesCreditNotes`

> Body parameter

```json
{
  "acCode": "CUS3",
  "bookTranTypeId": 7,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    },
    {
      "description": "acudf_2",
      "id": 2,
      "userDefinedFieldId": 1,
      "value": "acudfv_2"
    }
  ],
  "customerId": 70585,
  "deliveryTo": [
    "dt_1",
    "dt_2"
  ],
  "details": "detail_1",
  "entryDate": "2016-06-01T00:00:00",
  "id": 75813,
  "loType": "1",
  "note": "Customer 3",
  "ourReference": "ddNumber_1",
  "procDate": "2016-06-24T00:00:00",
  "productTrans": [
    {
      "acEntries": [
        {
          "accountCode": "SA02",
          "analysisCategoryId": 40889,
          "description": "AnCat1",
          "id": 73455,
          "value": -200
        }
      ],
      "amount": -220,
      "amountNet": -200,
      "id": 51820,
      "percentage": 10,
      "productCode": "PRO2",
      "productId": 20108,
      "quantity": -1,
      "tranNotes": [
        "tn_1",
        "tn_2"
      ],
      "unitPrice": 200,
      "vat": -20,
      "vatAnalysisTypeId": 0,
      "vatRateId": 30657
    }
  ],
  "saleRepId": 33110,
  "timestamp": "oq6NcBIe2wg=",
  "total": -220,
  "totalNet": -200,
  "totalVAT": -20,
  "unpaid": -220,
  "vatTypeId": 1,
  "yourReference": "poNumber_1"
}
```

<h3 id="creates-a-new-sales-credit-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SalesInvoiceCreditNoteDto](#schemasalesinvoicecreditnotedto)|true|Information of Sales Credit Note to create.|
|» acCode|body|string|false|none|
|» bookTranTypeId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» customerId|body|integer(int64)|false|none|
|» deliveryTo|body|[string]|false|none|
|» details|body|string|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» loType|body|string|false|none|
|» netGoods|body|number(double)|false|none|
|» netServices|body|number(double)|false|none|
|» note|body|string|false|none|
|» ourReference|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» productTrans|body|[[ProductTranDto](#schemaproducttrandto)]|false|none|
|» quoteId|body|integer(int64)|false|none|
|» reference|body|string|false|none|
|» saleRepCode|body|string|false|none|
|» saleRepId|body|integer(int64)|false|none|
|» timestamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» totalNet|body|number(double)|false|none|
|» totalVAT|body|number(double)|false|none|
|» unpaid|body|number(double)|false|none|
|» vatTypeId|body|integer(int64)|false|none|
|» yourReference|body|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="creates-a-new-sales-credit-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Processes a batch of Sales Credit Notes.

<a id="opIdSalesCreditNotes_ProcessBatch"></a>

> Code samples

```bash
curl https://example.com/v1/salesCreditNotes/batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": {
        "acCode": "CUS3",
        "bookTranTypeId": 7,
        "customFields": [
          {
            "description": "acudf_1",
            "id": 1,
            "userDefinedFieldId": 1,
            "value": "acudfv_1"
          },
          {
            "description": "acudf_2",
            "id": 2,
            "userDefinedFieldId": 1,
            "value": "acudfv_2"
          }
        ],
        "customerId": 70585,
        "deliveryTo": [
          "dt_1",
          "dt_2"
        ],
        "details": "detail_1",
        "entryDate": "2016-06-01T00:00:00",
        "id": 75813,
        "loType": "1",
        "note": "Customer 3",
        "ourReference": "ddNumber_1",
        "procDate": "2016-06-24T00:00:00",
        "productTrans": [
          {
            "acEntries": [
              {
                "accountCode": "SA02",
                "analysisCategoryId": 40889,
                "description": "AnCat1",
                "id": 73455,
                "value": -200
              }
            ],
            "amount": -220,
            "amountNet": -200,
            "id": 51820,
            "percentage": 10,
            "productCode": "PRO2",
            "productId": 20108,
            "quantity": -1,
            "tranNotes": [
              "tn_1",
              "tn_2"
            ],
            "unitPrice": 200,
            "vat": -20,
            "vatAnalysisTypeId": 0,
            "vatRateId": 30657
          }
        ],
        "reference": "000001",
        "saleRepId": 33110,
        "timestamp": "oq6NcBIe2wg=",
        "total": -220,
        "totalNet": -200,
        "totalVAT": -20,
        "unpaid": -220,
        "vatTypeId": 1,
        "yourReference": "poNumber_1"
      },
      "opCode": 1
    }
  ]'
```

`PUT /v1/salesCreditNotes/batch`

> Body parameter

```json
[
  {
    "item": {
      "acCode": "CUS3",
      "bookTranTypeId": 7,
      "customFields": [
        {
          "description": "acudf_1",
          "id": 1,
          "userDefinedFieldId": 1,
          "value": "acudfv_1"
        },
        {
          "description": "acudf_2",
          "id": 2,
          "userDefinedFieldId": 1,
          "value": "acudfv_2"
        }
      ],
      "customerId": 70585,
      "deliveryTo": [
        "dt_1",
        "dt_2"
      ],
      "details": "detail_1",
      "entryDate": "2016-06-01T00:00:00",
      "id": 75813,
      "loType": "1",
      "note": "Customer 3",
      "ourReference": "ddNumber_1",
      "procDate": "2016-06-24T00:00:00",
      "productTrans": [
        {
          "acEntries": [
            {
              "accountCode": "SA02",
              "analysisCategoryId": 40889,
              "description": "AnCat1",
              "id": 73455,
              "value": -200
            }
          ],
          "amount": -220,
          "amountNet": -200,
          "id": 51820,
          "percentage": 10,
          "productCode": "PRO2",
          "productId": 20108,
          "quantity": -1,
          "tranNotes": [
            "tn_1",
            "tn_2"
          ],
          "unitPrice": 200,
          "vat": -20,
          "vatAnalysisTypeId": 0,
          "vatRateId": 30657
        }
      ],
      "reference": "000001",
      "saleRepId": 33110,
      "timestamp": "oq6NcBIe2wg=",
      "total": -220,
      "totalNet": -200,
      "totalVAT": -20,
      "unpaid": -220,
      "vatTypeId": 1,
      "yourReference": "poNumber_1"
    },
    "opCode": 1
  }
]
```

<h3 id="processes-a-batch-of-sales-credit-notes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[BatchItem_SalesInvoiceCreditNoteDto_](#schemabatchitem_salesinvoicecreditnotedto_)]|true|Batch of Sales Credit Notes to process.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="processes-a-batch-of-sales-credit-notes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns information about a single Sales Credit Note.

> Code samples

```bash
curl https://example.com/v1/salesCreditNotes/0 \
  -H 'Accept: application/json'
```

`GET /v1/salesCreditNotes/{id}`

<h3 id="returns-information-about-a-single-sales-credit-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Sales Credit Note to return.|

> Example responses

> 200 Response

```json
{
  "acCode": "CUS3",
  "bookTranTypeId": 7,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    },
    {
      "description": "acudf_2",
      "id": 2,
      "userDefinedFieldId": 1,
      "value": "acudfv_2"
    }
  ],
  "customerId": 70585,
  "deliveryTo": [
    "dt_1",
    "dt_2"
  ],
  "details": "detail_1",
  "entryDate": "2016-06-01T00:00:00",
  "id": 75813,
  "loType": "1",
  "netGoods": null,
  "netServices": null,
  "note": "Customer 3",
  "ourReference": "ddNumber_1",
  "procDate": "2016-06-24T00:00:00",
  "productTrans": [
    {
      "acEntries": [
        {
          "accountCode": "SA02",
          "analysisCategoryId": 40889,
          "description": "AnCat1",
          "id": 73455,
          "value": -200
        }
      ],
      "amount": -220,
      "amountNet": -200,
      "id": 51820,
      "percentage": 10,
      "productCode": "PRO2",
      "productId": 20108,
      "quantity": -1,
      "tranNotes": [
        "tn_1",
        "tn_2"
      ],
      "unitPrice": 200,
      "vat": -20,
      "vatAnalysisTypeId": 0,
      "vatRateId": 30657
    }
  ],
  "quoteId": null,
  "reference": "000001",
  "saleRepCode": null,
  "saleRepId": 33110,
  "timestamp": "ksKBcBIe2wg=",
  "total": -220,
  "totalNet": -200,
  "totalVAT": -20,
  "unpaid": -220,
  "vatTypeId": 1,
  "yourReference": "poNumber_1"
}
```

<h3 id="returns-information-about-a-single-sales-credit-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SalesInvoiceCreditNoteDto](#schemasalesinvoicecreditnotedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates an existing Sales Credit Note.

<a id="opIdSalesCreditNotes_Put"></a>

> Code samples

```bash
curl https://example.com/v1/salesCreditNotes/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acCode": "CUS3",
    "bookTranTypeId": 7,
    "customFields": [
      {
        "description": "acudf_1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "acudfv_1"
      },
      {
        "description": "acudf_2",
        "id": 2,
        "userDefinedFieldId": 1,
        "value": "acudfv_2"
      }
    ],
    "customerId": 70585,
    "deliveryTo": [
      "dt_1",
      "dt_2"
    ],
    "details": "detail_1",
    "entryDate": "2016-06-01T00:00:00",
    "id": 75813,
    "loType": "1",
    "note": "Customer 3",
    "ourReference": "ddNumber_1",
    "procDate": "2016-06-24T00:00:00",
    "productTrans": [
      {
        "acEntries": [
          {
            "accountCode": "SA02",
            "analysisCategoryId": 40889,
            "description": "AnCat1",
            "id": 73455,
            "value": -200
          }
        ],
        "amount": -220,
        "amountNet": -200,
        "id": 51820,
        "percentage": 10,
        "productCode": "PRO2",
        "productId": 20108,
        "quantity": -1,
        "tranNotes": [
          "tn_1",
          "tn_2"
        ],
        "unitPrice": 200,
        "vat": -20,
        "vatAnalysisTypeId": 0,
        "vatRateId": 30657
      }
    ],
    "saleRepId": 33110,
    "timestamp": "oq6NcBIe2wg=",
    "total": -220,
    "totalNet": -200,
    "totalVAT": -20,
    "unpaid": -220,
    "vatTypeId": 1,
    "yourReference": "poNumber_1"
  }'
```

`PUT /v1/salesCreditNotes/{id}`

> Body parameter

```json
{
  "acCode": "CUS3",
  "bookTranTypeId": 7,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    },
    {
      "description": "acudf_2",
      "id": 2,
      "userDefinedFieldId": 1,
      "value": "acudfv_2"
    }
  ],
  "customerId": 70585,
  "deliveryTo": [
    "dt_1",
    "dt_2"
  ],
  "details": "detail_1",
  "entryDate": "2016-06-01T00:00:00",
  "id": 75813,
  "loType": "1",
  "note": "Customer 3",
  "ourReference": "ddNumber_1",
  "procDate": "2016-06-24T00:00:00",
  "productTrans": [
    {
      "acEntries": [
        {
          "accountCode": "SA02",
          "analysisCategoryId": 40889,
          "description": "AnCat1",
          "id": 73455,
          "value": -200
        }
      ],
      "amount": -220,
      "amountNet": -200,
      "id": 51820,
      "percentage": 10,
      "productCode": "PRO2",
      "productId": 20108,
      "quantity": -1,
      "tranNotes": [
        "tn_1",
        "tn_2"
      ],
      "unitPrice": 200,
      "vat": -20,
      "vatAnalysisTypeId": 0,
      "vatRateId": 30657
    }
  ],
  "saleRepId": 33110,
  "timestamp": "oq6NcBIe2wg=",
  "total": -220,
  "totalNet": -200,
  "totalVAT": -20,
  "unpaid": -220,
  "vatTypeId": 1,
  "yourReference": "poNumber_1"
}
```

<h3 id="updates-an-existing-sales-credit-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Sales Credit Note to update.|
|body|body|[SalesInvoiceCreditNoteDto](#schemasalesinvoicecreditnotedto)|true|Information of Sales Credit Note to update.|
|» acCode|body|string|false|none|
|» bookTranTypeId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» customerId|body|integer(int64)|false|none|
|» deliveryTo|body|[string]|false|none|
|» details|body|string|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» loType|body|string|false|none|
|» netGoods|body|number(double)|false|none|
|» netServices|body|number(double)|false|none|
|» note|body|string|false|none|
|» ourReference|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» productTrans|body|[[ProductTranDto](#schemaproducttrandto)]|false|none|
|» quoteId|body|integer(int64)|false|none|
|» reference|body|string|false|none|
|» saleRepCode|body|string|false|none|
|» saleRepId|body|integer(int64)|false|none|
|» timestamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» totalNet|body|number(double)|false|none|
|» totalVAT|body|number(double)|false|none|
|» unpaid|body|number(double)|false|none|
|» vatTypeId|body|integer(int64)|false|none|
|» yourReference|body|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="updates-an-existing-sales-credit-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Removes an existing Sales Credit Note.

<a id="opIdSalesCreditNotes_Delete"></a>

> Code samples

```bash
curl 'https://example.com/v1/salesCreditNotes/0?timestamp=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/salesCreditNotes/{id}`

<h3 id="removes-an-existing-sales-credit-note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Sales Credit Note to remove.|
|timestamp|query|string|true|Timestamp of Sales Credit Note to remove. Should be encoded in Base64.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removes-an-existing-sales-credit-note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-salesentries">SalesEntries</h1>

## Returns a list of company's Sales Entries. Supports OData querying protocol. Filtering is allowed by &quot;entryDate&quot; field. Ordering is allowed by &quot;id&quot; field.

<a id="opIdSalesEntries_Get"></a>

> Code samples

```bash
curl https://example.com/v1/salesEntries \
  -H 'Accept: application/json'
```

`GET /v1/salesEntries`

> Example responses

> 200 Response

```json
{
  "Count": 1,
  "Items": [
    {
      "acCode": "code",
      "acEntries": [
        {
          "accountCode": "SA01",
          "analysisCategoryId": 40888,
          "description": "SAL 1",
          "id": 73450,
          "value": 636.36
        }
      ],
      "bookTranTypeId": 5,
      "customFields": [
        {
          "description": "acudf_1",
          "id": 1,
          "userDefinedFieldId": 1,
          "value": "acudfv_1"
        },
        {
          "description": "acudf_2",
          "id": 2,
          "userDefinedFieldId": 1,
          "value": "acudfv_2"
        }
      ],
      "customerId": 70583,
      "detailCollection": [],
      "details": "detail_1",
      "entryDate": "2011-01-01T00:00:00",
      "id": 1,
      "netGoods": 0,
      "netServices": 0,
      "note": "Customer 1",
      "procDate": "2011-01-01T00:00:00",
      "reference": "000001",
      "timestamp": "9ySEcBIe2wg=",
      "total": 700,
      "totalNet": 636.36,
      "totalVAT": 63.64,
      "unpaid": 0,
      "vatEntries": [
        {
          "amount": 636.36,
          "id": 63649,
          "percentage": 10,
          "vatRateId": 30657
        }
      ],
      "vatTypeId": 1
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-sales-entries-supports-odata-querying-protocol-filtering-is-allowed-by-entrydate-field-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_SalesEntryQueryDto_](#schemapageresult_salesentryquerydto_)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new Sales Entry.

<a id="opIdSalesEntries_Post"></a>

> Code samples

```bash
curl https://example.com/v1/salesEntries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acCode": "code",
    "acEntries": [
      {
        "accountCode": "SA01",
        "analysisCategoryId": 40888,
        "description": "SAL 1",
        "id": 73450,
        "value": 636.36
      }
    ],
    "bookTranTypeId": 5,
    "customFields": [
      {
        "description": "acudf_1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "acudfv_1"
      },
      {
        "description": "acudf_2",
        "id": 2,
        "userDefinedFieldId": 1,
        "value": "acudfv_2"
      }
    ],
    "customerId": 70583,
    "detailCollection": [],
    "details": "detail_1",
    "entryDate": "2011-01-01T00:00:00",
    "id": 1,
    "netGoods": 0,
    "netServices": 0,
    "note": "Customer 1",
    "procDate": "2011-01-01T00:00:00",
    "reference": "000001",
    "timestamp": "wumIcBIe2wg=",
    "total": 700,
    "totalNet": 636.36,
    "totalVAT": 63.64,
    "unpaid": 0,
    "vatEntries": [
      {
        "amount": 636.36,
        "id": 63649,
        "percentage": 10,
        "vatRateId": 30657
      }
    ],
    "vatTypeId": 1
  }'
```

`POST /v1/salesEntries`

> Body parameter

```json
{
  "acCode": "code",
  "acEntries": [
    {
      "accountCode": "SA01",
      "analysisCategoryId": 40888,
      "description": "SAL 1",
      "id": 73450,
      "value": 636.36
    }
  ],
  "bookTranTypeId": 5,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    },
    {
      "description": "acudf_2",
      "id": 2,
      "userDefinedFieldId": 1,
      "value": "acudfv_2"
    }
  ],
  "customerId": 70583,
  "detailCollection": [],
  "details": "detail_1",
  "entryDate": "2011-01-01T00:00:00",
  "id": 1,
  "netGoods": 0,
  "netServices": 0,
  "note": "Customer 1",
  "procDate": "2011-01-01T00:00:00",
  "reference": "000001",
  "timestamp": "wumIcBIe2wg=",
  "total": 700,
  "totalNet": 636.36,
  "totalVAT": 63.64,
  "unpaid": 0,
  "vatEntries": [
    {
      "amount": 636.36,
      "id": 63649,
      "percentage": 10,
      "vatRateId": 30657
    }
  ],
  "vatTypeId": 1
}
```

<h3 id="creates-a-new-sales-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SalesEntryDto](#schemasalesentrydto)|true|Information of Sales Entry to create.|
|» acCode|body|string|false|none|
|» acEntries|body|[[AcEntryDto](#schemaacentrydto)]|false|none|
|» bookTranTypeId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» customerId|body|integer(int64)|false|none|
|» detailCollection|body|[string]|false|none|
|» details|body|string|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» netGoods|body|number(double)|false|none|
|» netServices|body|number(double)|false|none|
|» note|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» reference|body|string|false|none|
|» timestamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» totalNet|body|number(double)|false|none|
|» totalVAT|body|number(double)|false|none|
|» unpaid|body|number(double)|false|none|
|» vatEntries|body|[[VatEntryDto](#schemavatentrydto)]|false|none|
|» vatTypeId|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="creates-a-new-sales-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Processes a batch of Sales Entries.

<a id="opIdSalesEntries_ProcessBatch"></a>

> Code samples

```bash
curl https://example.com/v1/salesEntries/batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": {
        "acCode": "code",
        "acEntries": [
          {
            "accountCode": "SA01",
            "analysisCategoryId": 40888,
            "description": "SAL 1",
            "id": 73450,
            "value": 636.36
          }
        ],
        "bookTranTypeId": 5,
        "customFields": [
          {
            "description": "acudf_1",
            "id": 1,
            "userDefinedFieldId": 1,
            "value": "acudfv_1"
          },
          {
            "description": "acudf_2",
            "id": 2,
            "userDefinedFieldId": 1,
            "value": "acudfv_2"
          }
        ],
        "customerId": 70583,
        "detailCollection": [],
        "details": "detail_1",
        "entryDate": "2011-01-01T00:00:00",
        "id": 1,
        "netGoods": 0,
        "netServices": 0,
        "note": "Customer 1",
        "procDate": "2011-01-01T00:00:00",
        "reference": "000001",
        "timestamp": "XUyLcBIe2wg=",
        "total": 700,
        "totalNet": 636.36,
        "totalVAT": 63.64,
        "unpaid": 0,
        "vatEntries": [
          {
            "amount": 636.36,
            "id": 63649,
            "percentage": 10,
            "vatRateId": 30657
          }
        ],
        "vatTypeId": 1
      },
      "opCode": 1
    }
  ]'
```

`PUT /v1/salesEntries/batch`

> Body parameter

```json
[
  {
    "item": {
      "acCode": "code",
      "acEntries": [
        {
          "accountCode": "SA01",
          "analysisCategoryId": 40888,
          "description": "SAL 1",
          "id": 73450,
          "value": 636.36
        }
      ],
      "bookTranTypeId": 5,
      "customFields": [
        {
          "description": "acudf_1",
          "id": 1,
          "userDefinedFieldId": 1,
          "value": "acudfv_1"
        },
        {
          "description": "acudf_2",
          "id": 2,
          "userDefinedFieldId": 1,
          "value": "acudfv_2"
        }
      ],
      "customerId": 70583,
      "detailCollection": [],
      "details": "detail_1",
      "entryDate": "2011-01-01T00:00:00",
      "id": 1,
      "netGoods": 0,
      "netServices": 0,
      "note": "Customer 1",
      "procDate": "2011-01-01T00:00:00",
      "reference": "000001",
      "timestamp": "XUyLcBIe2wg=",
      "total": 700,
      "totalNet": 636.36,
      "totalVAT": 63.64,
      "unpaid": 0,
      "vatEntries": [
        {
          "amount": 636.36,
          "id": 63649,
          "percentage": 10,
          "vatRateId": 30657
        }
      ],
      "vatTypeId": 1
    },
    "opCode": 1
  }
]
```

<h3 id="processes-a-batch-of-sales-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[BatchItem_SalesEntryDto_](#schemabatchitem_salesentrydto_)]|true|Batch of Sales Entries to process.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="processes-a-batch-of-sales-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns information about a single Sales Entry.

> Code samples

```bash
curl https://example.com/v1/salesEntries/0 \
  -H 'Accept: application/json'
```

`GET /v1/salesEntries/{id}`

<h3 id="returns-information-about-a-single-sales-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Sales Entry to return.|

> Example responses

> 200 Response

```json
{
  "acCode": "code",
  "acEntries": [
    {
      "accountCode": "SA01",
      "analysisCategoryId": 40888,
      "description": "SAL 1",
      "id": 73450,
      "value": 636.36
    }
  ],
  "bookTranTypeId": 5,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    },
    {
      "description": "acudf_2",
      "id": 2,
      "userDefinedFieldId": 1,
      "value": "acudfv_2"
    }
  ],
  "customerId": 70583,
  "detailCollection": [],
  "details": "detail_1",
  "entryDate": "2011-01-01T00:00:00",
  "id": 1,
  "netGoods": 0,
  "netServices": 0,
  "note": "Customer 1",
  "procDate": "2011-01-01T00:00:00",
  "reference": "000001",
  "timestamp": "wumIcBIe2wg=",
  "total": 700,
  "totalNet": 636.36,
  "totalVAT": 63.64,
  "unpaid": 0,
  "vatEntries": [
    {
      "amount": 636.36,
      "id": 63649,
      "percentage": 10,
      "vatRateId": 30657
    }
  ],
  "vatTypeId": 1
}
```

<h3 id="returns-information-about-a-single-sales-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SalesEntryDto](#schemasalesentrydto)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates an existing Sales Entry.

<a id="opIdSalesEntries_Put"></a>

> Code samples

```bash
curl https://example.com/v1/salesEntries/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acCode": "code",
    "acEntries": [
      {
        "accountCode": "SA01",
        "analysisCategoryId": 40888,
        "description": "SAL 1",
        "id": 73450,
        "value": 636.36
      }
    ],
    "bookTranTypeId": 5,
    "customFields": [
      {
        "description": "acudf_1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "acudfv_1"
      },
      {
        "description": "acudf_2",
        "id": 2,
        "userDefinedFieldId": 1,
        "value": "acudfv_2"
      }
    ],
    "customerId": 70583,
    "detailCollection": [],
    "details": "detail_1",
    "entryDate": "2011-01-01T00:00:00",
    "id": 1,
    "netGoods": 0,
    "netServices": 0,
    "note": "Customer 1",
    "procDate": "2011-01-01T00:00:00",
    "reference": "000001",
    "timestamp": "wumIcBIe2wg=",
    "total": 700,
    "totalNet": 636.36,
    "totalVAT": 63.64,
    "unpaid": 0,
    "vatEntries": [
      {
        "amount": 636.36,
        "id": 63649,
        "percentage": 10,
        "vatRateId": 30657
      }
    ],
    "vatTypeId": 1
  }'
```

`PUT /v1/salesEntries/{id}`

> Body parameter

```json
{
  "acCode": "code",
  "acEntries": [
    {
      "accountCode": "SA01",
      "analysisCategoryId": 40888,
      "description": "SAL 1",
      "id": 73450,
      "value": 636.36
    }
  ],
  "bookTranTypeId": 5,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    },
    {
      "description": "acudf_2",
      "id": 2,
      "userDefinedFieldId": 1,
      "value": "acudfv_2"
    }
  ],
  "customerId": 70583,
  "detailCollection": [],
  "details": "detail_1",
  "entryDate": "2011-01-01T00:00:00",
  "id": 1,
  "netGoods": 0,
  "netServices": 0,
  "note": "Customer 1",
  "procDate": "2011-01-01T00:00:00",
  "reference": "000001",
  "timestamp": "wumIcBIe2wg=",
  "total": 700,
  "totalNet": 636.36,
  "totalVAT": 63.64,
  "unpaid": 0,
  "vatEntries": [
    {
      "amount": 636.36,
      "id": 63649,
      "percentage": 10,
      "vatRateId": 30657
    }
  ],
  "vatTypeId": 1
}
```

<h3 id="updates-an-existing-sales-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Sales Entry to update.|
|body|body|[SalesEntryDto](#schemasalesentrydto)|true|Information of Sales Entry to update.|
|» acCode|body|string|false|none|
|» acEntries|body|[[AcEntryDto](#schemaacentrydto)]|false|none|
|» bookTranTypeId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» customerId|body|integer(int64)|false|none|
|» detailCollection|body|[string]|false|none|
|» details|body|string|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» netGoods|body|number(double)|false|none|
|» netServices|body|number(double)|false|none|
|» note|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» reference|body|string|false|none|
|» timestamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» totalNet|body|number(double)|false|none|
|» totalVAT|body|number(double)|false|none|
|» unpaid|body|number(double)|false|none|
|» vatEntries|body|[[VatEntryDto](#schemavatentrydto)]|false|none|
|» vatTypeId|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="updates-an-existing-sales-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Removes an existing Sales Entry.

<a id="opIdSalesEntries_Delete"></a>

> Code samples

```bash
curl 'https://example.com/v1/salesEntries/0?timestamp=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/salesEntries/{id}`

<h3 id="removes-an-existing-sales-entry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Sales Entry to remove.|
|timestamp|query|string|true|Timestamp of Sales Entry to remove. Should be encoded in Base64.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removes-an-existing-sales-entry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-salesinvoices">SalesInvoices</h1>

## Returns a list of company's Sales Invoices. Supports OData querying protocol. Filtering is allowed by &quot;entryDate&quot; field. Ordering is allowed by &quot;id&quot; field.

<a id="opIdSalesInvoices_Get"></a>

> Code samples

```bash
curl https://example.com/v1/salesInvoices \
  -H 'Accept: application/json'
```

`GET /v1/salesInvoices`

> Example responses

> 200 Response

```json
{
  "Count": 1,
  "Items": [
    {
      "acCode": "CUS3",
      "bookTranTypeId": 7,
      "customFields": [
        {
          "description": "acudf_1",
          "id": 1,
          "userDefinedFieldId": 1,
          "value": "acudfv_1"
        },
        {
          "description": "acudf_2",
          "id": 2,
          "userDefinedFieldId": 1,
          "value": "acudfv_2"
        }
      ],
      "customerId": 70585,
      "deliveryTo": [
        "dt_1",
        "dt_2"
      ],
      "details": "detail_1",
      "entryDate": "2016-06-01T00:00:00",
      "id": 75813,
      "loType": "1",
      "netGoods": null,
      "netServices": null,
      "note": "Customer 3",
      "ourReference": "ddNumber_1",
      "procDate": "2016-06-24T00:00:00",
      "productTrans": [
        {
          "acEntries": [
            {
              "accountCode": "SA02",
              "analysisCategoryId": 40889,
              "description": "AnCat1",
              "id": 73455,
              "value": -200
            }
          ],
          "amount": -220,
          "amountNet": -200,
          "id": 51820,
          "percentage": 10,
          "productCode": "PRO2",
          "productId": 20108,
          "quantity": -1,
          "tranNotes": [
            "tn_1",
            "tn_2"
          ],
          "unitPrice": 200,
          "vat": -20,
          "vatAnalysisTypeId": 0,
          "vatRateId": 30657
        }
      ],
      "quoteId": null,
      "reference": "000001",
      "saleRepCode": null,
      "saleRepId": 33110,
      "timestamp": "XUyLcBIe2wg=",
      "total": -220,
      "totalNet": -200,
      "totalVAT": -20,
      "unpaid": -220,
      "vatTypeId": 1,
      "yourReference": "poNumber_1"
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-sales-invoices-supports-odata-querying-protocol-filtering-is-allowed-by-entrydate-field-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_SalesInvoiceQueryDto_](#schemapageresult_salesinvoicequerydto_)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new Sales Invoice.

<a id="opIdSalesInvoices_Post"></a>

> Code samples

```bash
curl https://example.com/v1/salesInvoices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acCode": "CUS3",
    "bookTranTypeId": 7,
    "customFields": [
      {
        "description": "acudf_1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "acudfv_1"
      },
      {
        "description": "acudf_2",
        "id": 2,
        "userDefinedFieldId": 1,
        "value": "acudfv_2"
      }
    ],
    "customerId": 70585,
    "deliveryTo": [
      "dt_1",
      "dt_2"
    ],
    "details": "detail_1",
    "entryDate": "2016-06-01T00:00:00",
    "id": 75813,
    "loType": "1",
    "note": "Customer 3",
    "ourReference": "ddNumber_1",
    "procDate": "2016-06-24T00:00:00",
    "productTrans": [
      {
        "acEntries": [
          {
            "accountCode": "SA02",
            "analysisCategoryId": 40889,
            "description": "AnCat1",
            "id": 73455,
            "value": -200
          }
        ],
        "amount": -220,
        "amountNet": -200,
        "id": 51820,
        "percentage": 10,
        "productCode": "PRO2",
        "productId": 20108,
        "quantity": -1,
        "tranNotes": [
          "tn_1",
          "tn_2"
        ],
        "unitPrice": 200,
        "vat": -20,
        "vatAnalysisTypeId": 0,
        "vatRateId": 30657
      }
    ],
    "saleRepId": 33110,
    "timestamp": "oq6NcBIe2wg=",
    "total": -220,
    "totalNet": -200,
    "totalVAT": -20,
    "unpaid": -220,
    "vatTypeId": 1,
    "yourReference": "poNumber_1"
  }'
```

`POST /v1/salesInvoices`

> Body parameter

```json
{
  "acCode": "CUS3",
  "bookTranTypeId": 7,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    },
    {
      "description": "acudf_2",
      "id": 2,
      "userDefinedFieldId": 1,
      "value": "acudfv_2"
    }
  ],
  "customerId": 70585,
  "deliveryTo": [
    "dt_1",
    "dt_2"
  ],
  "details": "detail_1",
  "entryDate": "2016-06-01T00:00:00",
  "id": 75813,
  "loType": "1",
  "note": "Customer 3",
  "ourReference": "ddNumber_1",
  "procDate": "2016-06-24T00:00:00",
  "productTrans": [
    {
      "acEntries": [
        {
          "accountCode": "SA02",
          "analysisCategoryId": 40889,
          "description": "AnCat1",
          "id": 73455,
          "value": -200
        }
      ],
      "amount": -220,
      "amountNet": -200,
      "id": 51820,
      "percentage": 10,
      "productCode": "PRO2",
      "productId": 20108,
      "quantity": -1,
      "tranNotes": [
        "tn_1",
        "tn_2"
      ],
      "unitPrice": 200,
      "vat": -20,
      "vatAnalysisTypeId": 0,
      "vatRateId": 30657
    }
  ],
  "saleRepId": 33110,
  "timestamp": "oq6NcBIe2wg=",
  "total": -220,
  "totalNet": -200,
  "totalVAT": -20,
  "unpaid": -220,
  "vatTypeId": 1,
  "yourReference": "poNumber_1"
}
```

<h3 id="creates-a-new-sales-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SalesInvoiceCreditNoteDto](#schemasalesinvoicecreditnotedto)|true|Information of Sales Invoice to create.|
|» acCode|body|string|false|none|
|» bookTranTypeId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» customerId|body|integer(int64)|false|none|
|» deliveryTo|body|[string]|false|none|
|» details|body|string|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» loType|body|string|false|none|
|» netGoods|body|number(double)|false|none|
|» netServices|body|number(double)|false|none|
|» note|body|string|false|none|
|» ourReference|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» productTrans|body|[[ProductTranDto](#schemaproducttrandto)]|false|none|
|» quoteId|body|integer(int64)|false|none|
|» reference|body|string|false|none|
|» saleRepCode|body|string|false|none|
|» saleRepId|body|integer(int64)|false|none|
|» timestamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» totalNet|body|number(double)|false|none|
|» totalVAT|body|number(double)|false|none|
|» unpaid|body|number(double)|false|none|
|» vatTypeId|body|integer(int64)|false|none|
|» yourReference|body|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="creates-a-new-sales-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Processes a batch of Sales Invoices.

<a id="opIdSalesInvoices_ProcessBatch"></a>

> Code samples

```bash
curl https://example.com/v1/salesInvoices/batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": {
        "acCode": "CUS3",
        "bookTranTypeId": 7,
        "customFields": [
          {
            "description": "acudf_1",
            "id": 1,
            "userDefinedFieldId": 1,
            "value": "acudfv_1"
          },
          {
            "description": "acudf_2",
            "id": 2,
            "userDefinedFieldId": 1,
            "value": "acudfv_2"
          }
        ],
        "customerId": 70585,
        "deliveryTo": [
          "dt_1",
          "dt_2"
        ],
        "details": "detail_1",
        "entryDate": "2016-06-01T00:00:00",
        "id": 75813,
        "loType": "1",
        "note": "Customer 3",
        "ourReference": "ddNumber_1",
        "procDate": "2016-06-24T00:00:00",
        "productTrans": [
          {
            "acEntries": [
              {
                "accountCode": "SA02",
                "analysisCategoryId": 40889,
                "description": "AnCat1",
                "id": 73455,
                "value": -200
              }
            ],
            "amount": -220,
            "amountNet": -200,
            "id": 51820,
            "percentage": 10,
            "productCode": "PRO2",
            "productId": 20108,
            "quantity": -1,
            "tranNotes": [
              "tn_1",
              "tn_2"
            ],
            "unitPrice": 200,
            "vat": -20,
            "vatAnalysisTypeId": 0,
            "vatRateId": 30657
          }
        ],
        "reference": "000001",
        "saleRepId": 33110,
        "timestamp": "oq6NcBIe2wg=",
        "total": -220,
        "totalNet": -200,
        "totalVAT": -20,
        "unpaid": -220,
        "vatTypeId": 1,
        "yourReference": "poNumber_1"
      },
      "opCode": 1
    }
  ]'
```

`PUT /v1/salesInvoices/batch`

> Body parameter

```json
[
  {
    "item": {
      "acCode": "CUS3",
      "bookTranTypeId": 7,
      "customFields": [
        {
          "description": "acudf_1",
          "id": 1,
          "userDefinedFieldId": 1,
          "value": "acudfv_1"
        },
        {
          "description": "acudf_2",
          "id": 2,
          "userDefinedFieldId": 1,
          "value": "acudfv_2"
        }
      ],
      "customerId": 70585,
      "deliveryTo": [
        "dt_1",
        "dt_2"
      ],
      "details": "detail_1",
      "entryDate": "2016-06-01T00:00:00",
      "id": 75813,
      "loType": "1",
      "note": "Customer 3",
      "ourReference": "ddNumber_1",
      "procDate": "2016-06-24T00:00:00",
      "productTrans": [
        {
          "acEntries": [
            {
              "accountCode": "SA02",
              "analysisCategoryId": 40889,
              "description": "AnCat1",
              "id": 73455,
              "value": -200
            }
          ],
          "amount": -220,
          "amountNet": -200,
          "id": 51820,
          "percentage": 10,
          "productCode": "PRO2",
          "productId": 20108,
          "quantity": -1,
          "tranNotes": [
            "tn_1",
            "tn_2"
          ],
          "unitPrice": 200,
          "vat": -20,
          "vatAnalysisTypeId": 0,
          "vatRateId": 30657
        }
      ],
      "reference": "000001",
      "saleRepId": 33110,
      "timestamp": "oq6NcBIe2wg=",
      "total": -220,
      "totalNet": -200,
      "totalVAT": -20,
      "unpaid": -220,
      "vatTypeId": 1,
      "yourReference": "poNumber_1"
    },
    "opCode": 1
  }
]
```

<h3 id="processes-a-batch-of-sales-invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[BatchItem_SalesInvoiceCreditNoteDto_](#schemabatchitem_salesinvoicecreditnotedto_)]|true|Batch of Sales Invoices to process.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="processes-a-batch-of-sales-invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new Sale Invoice with auto generating reference.

<a id="opIdSalesInvoices_Post_CreateSaleInvoiceWithGeneratingReference"></a>

> Code samples

```bash
curl https://example.com/v1/salesInvoices/createSaleInvoiceWithGeneratingReference \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acCode": "CUS3",
    "bookTranTypeId": 7,
    "customFields": [
      {
        "description": "acudf_1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "acudfv_1"
      },
      {
        "description": "acudf_2",
        "id": 2,
        "userDefinedFieldId": 1,
        "value": "acudfv_2"
      }
    ],
    "customerId": 70585,
    "deliveryTo": [
      "dt_1",
      "dt_2"
    ],
    "details": "detail_1",
    "entryDate": "2016-06-01T00:00:00",
    "id": 75813,
    "loType": "1",
    "note": "Customer 3",
    "ourReference": "ddNumber_1",
    "procDate": "2016-06-24T00:00:00",
    "productTrans": [
      {
        "acEntries": [
          {
            "accountCode": "SA02",
            "analysisCategoryId": 40889,
            "description": "AnCat1",
            "id": 73455,
            "value": -200
          }
        ],
        "amount": -220,
        "amountNet": -200,
        "id": 51820,
        "percentage": 10,
        "productCode": "PRO2",
        "productId": 20108,
        "quantity": -1,
        "tranNotes": [
          "tn_1",
          "tn_2"
        ],
        "unitPrice": 200,
        "vat": -20,
        "vatAnalysisTypeId": 0,
        "vatRateId": 30657
      }
    ],
    "saleRepId": 33110,
    "timestamp": "oq6NcBIe2wg=",
    "total": -220,
    "totalNet": -200,
    "totalVAT": -20,
    "unpaid": -220,
    "vatTypeId": 1,
    "yourReference": "poNumber_1"
  }'
```

`POST /v1/salesInvoices/createSaleInvoiceWithGeneratingReference`

> Body parameter

```json
{
  "acCode": "CUS3",
  "bookTranTypeId": 7,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    },
    {
      "description": "acudf_2",
      "id": 2,
      "userDefinedFieldId": 1,
      "value": "acudfv_2"
    }
  ],
  "customerId": 70585,
  "deliveryTo": [
    "dt_1",
    "dt_2"
  ],
  "details": "detail_1",
  "entryDate": "2016-06-01T00:00:00",
  "id": 75813,
  "loType": "1",
  "note": "Customer 3",
  "ourReference": "ddNumber_1",
  "procDate": "2016-06-24T00:00:00",
  "productTrans": [
    {
      "acEntries": [
        {
          "accountCode": "SA02",
          "analysisCategoryId": 40889,
          "description": "AnCat1",
          "id": 73455,
          "value": -200
        }
      ],
      "amount": -220,
      "amountNet": -200,
      "id": 51820,
      "percentage": 10,
      "productCode": "PRO2",
      "productId": 20108,
      "quantity": -1,
      "tranNotes": [
        "tn_1",
        "tn_2"
      ],
      "unitPrice": 200,
      "vat": -20,
      "vatAnalysisTypeId": 0,
      "vatRateId": 30657
    }
  ],
  "saleRepId": 33110,
  "timestamp": "oq6NcBIe2wg=",
  "total": -220,
  "totalNet": -200,
  "totalVAT": -20,
  "unpaid": -220,
  "vatTypeId": 1,
  "yourReference": "poNumber_1"
}
```

<h3 id="creates-a-new-sale-invoice-with-auto-generating-reference-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SalesInvoiceCreditNoteDto](#schemasalesinvoicecreditnotedto)|true|Information of Sale Invoice to create.|
|» acCode|body|string|false|none|
|» bookTranTypeId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» customerId|body|integer(int64)|false|none|
|» deliveryTo|body|[string]|false|none|
|» details|body|string|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» loType|body|string|false|none|
|» netGoods|body|number(double)|false|none|
|» netServices|body|number(double)|false|none|
|» note|body|string|false|none|
|» ourReference|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» productTrans|body|[[ProductTranDto](#schemaproducttrandto)]|false|none|
|» quoteId|body|integer(int64)|false|none|
|» reference|body|string|false|none|
|» saleRepCode|body|string|false|none|
|» saleRepId|body|integer(int64)|false|none|
|» timestamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» totalNet|body|number(double)|false|none|
|» totalVAT|body|number(double)|false|none|
|» unpaid|body|number(double)|false|none|
|» vatTypeId|body|integer(int64)|false|none|
|» yourReference|body|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="creates-a-new-sale-invoice-with-auto-generating-reference-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns information about a single Sales Invoice.

> Code samples

```bash
curl https://example.com/v1/salesInvoices/0 \
  -H 'Accept: application/json'
```

`GET /v1/salesInvoices/{id}`

<h3 id="returns-information-about-a-single-sales-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Sales Invoice to return.|

> Example responses

> 200 Response

```json
{
  "acCode": "CUS3",
  "bookTranTypeId": 7,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    },
    {
      "description": "acudf_2",
      "id": 2,
      "userDefinedFieldId": 1,
      "value": "acudfv_2"
    }
  ],
  "customerId": 70585,
  "deliveryTo": [
    "dt_1",
    "dt_2"
  ],
  "details": "detail_1",
  "entryDate": "2016-06-01T00:00:00",
  "id": 75813,
  "loType": "1",
  "netGoods": null,
  "netServices": null,
  "note": "Customer 3",
  "ourReference": "ddNumber_1",
  "procDate": "2016-06-24T00:00:00",
  "productTrans": [
    {
      "acEntries": [
        {
          "accountCode": "SA02",
          "analysisCategoryId": 40889,
          "description": "AnCat1",
          "id": 73455,
          "value": -200
        }
      ],
      "amount": -220,
      "amountNet": -200,
      "id": 51820,
      "percentage": 10,
      "productCode": "PRO2",
      "productId": 20108,
      "quantity": -1,
      "tranNotes": [
        "tn_1",
        "tn_2"
      ],
      "unitPrice": 200,
      "vat": -20,
      "vatAnalysisTypeId": 0,
      "vatRateId": 30657
    }
  ],
  "quoteId": null,
  "reference": "000001",
  "saleRepCode": null,
  "saleRepId": 33110,
  "timestamp": "XUyLcBIe2wg=",
  "total": -220,
  "totalNet": -200,
  "totalVAT": -20,
  "unpaid": -220,
  "vatTypeId": 1,
  "yourReference": "poNumber_1"
}
```

<h3 id="returns-information-about-a-single-sales-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SalesInvoiceCreditNoteDto](#schemasalesinvoicecreditnotedto)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates an existing Sales Invoice.

<a id="opIdSalesInvoices_Put"></a>

> Code samples

```bash
curl https://example.com/v1/salesInvoices/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "acCode": "CUS3",
    "bookTranTypeId": 7,
    "customFields": [
      {
        "description": "acudf_1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "acudfv_1"
      },
      {
        "description": "acudf_2",
        "id": 2,
        "userDefinedFieldId": 1,
        "value": "acudfv_2"
      }
    ],
    "customerId": 70585,
    "deliveryTo": [
      "dt_1",
      "dt_2"
    ],
    "details": "detail_1",
    "entryDate": "2016-06-01T00:00:00",
    "id": 75813,
    "loType": "1",
    "note": "Customer 3",
    "ourReference": "ddNumber_1",
    "procDate": "2016-06-24T00:00:00",
    "productTrans": [
      {
        "acEntries": [
          {
            "accountCode": "SA02",
            "analysisCategoryId": 40889,
            "description": "AnCat1",
            "id": 73455,
            "value": -200
          }
        ],
        "amount": -220,
        "amountNet": -200,
        "id": 51820,
        "percentage": 10,
        "productCode": "PRO2",
        "productId": 20108,
        "quantity": -1,
        "tranNotes": [
          "tn_1",
          "tn_2"
        ],
        "unitPrice": 200,
        "vat": -20,
        "vatAnalysisTypeId": 0,
        "vatRateId": 30657
      }
    ],
    "saleRepId": 33110,
    "timestamp": "oq6NcBIe2wg=",
    "total": -220,
    "totalNet": -200,
    "totalVAT": -20,
    "unpaid": -220,
    "vatTypeId": 1,
    "yourReference": "poNumber_1"
  }'
```

`PUT /v1/salesInvoices/{id}`

> Body parameter

```json
{
  "acCode": "CUS3",
  "bookTranTypeId": 7,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    },
    {
      "description": "acudf_2",
      "id": 2,
      "userDefinedFieldId": 1,
      "value": "acudfv_2"
    }
  ],
  "customerId": 70585,
  "deliveryTo": [
    "dt_1",
    "dt_2"
  ],
  "details": "detail_1",
  "entryDate": "2016-06-01T00:00:00",
  "id": 75813,
  "loType": "1",
  "note": "Customer 3",
  "ourReference": "ddNumber_1",
  "procDate": "2016-06-24T00:00:00",
  "productTrans": [
    {
      "acEntries": [
        {
          "accountCode": "SA02",
          "analysisCategoryId": 40889,
          "description": "AnCat1",
          "id": 73455,
          "value": -200
        }
      ],
      "amount": -220,
      "amountNet": -200,
      "id": 51820,
      "percentage": 10,
      "productCode": "PRO2",
      "productId": 20108,
      "quantity": -1,
      "tranNotes": [
        "tn_1",
        "tn_2"
      ],
      "unitPrice": 200,
      "vat": -20,
      "vatAnalysisTypeId": 0,
      "vatRateId": 30657
    }
  ],
  "saleRepId": 33110,
  "timestamp": "oq6NcBIe2wg=",
  "total": -220,
  "totalNet": -200,
  "totalVAT": -20,
  "unpaid": -220,
  "vatTypeId": 1,
  "yourReference": "poNumber_1"
}
```

<h3 id="updates-an-existing-sales-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Sales Invoice to update.|
|body|body|[SalesInvoiceCreditNoteDto](#schemasalesinvoicecreditnotedto)|true|Information of Sales Invoice to update.|
|» acCode|body|string|false|none|
|» bookTranTypeId|body|integer(int64)|false|none|
|» customFields|body|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|
|» customerId|body|integer(int64)|false|none|
|» deliveryTo|body|[string]|false|none|
|» details|body|string|false|none|
|» entryDate|body|string(date-time)|false|none|
|» id|body|integer(int64)|false|none|
|» loType|body|string|false|none|
|» netGoods|body|number(double)|false|none|
|» netServices|body|number(double)|false|none|
|» note|body|string|false|none|
|» ourReference|body|string|false|none|
|» procDate|body|string(date-time)|false|none|
|» productTrans|body|[[ProductTranDto](#schemaproducttrandto)]|false|none|
|» quoteId|body|integer(int64)|false|none|
|» reference|body|string|false|none|
|» saleRepCode|body|string|false|none|
|» saleRepId|body|integer(int64)|false|none|
|» timestamp|body|string(byte)|false|none|
|» total|body|number(double)|false|none|
|» totalNet|body|number(double)|false|none|
|» totalVAT|body|number(double)|false|none|
|» unpaid|body|number(double)|false|none|
|» vatTypeId|body|integer(int64)|false|none|
|» yourReference|body|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="updates-an-existing-sales-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Removes an existing Sales Invoice.

<a id="opIdSalesInvoices_Delete"></a>

> Code samples

```bash
curl 'https://example.com/v1/salesInvoices/0?timestamp=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/salesInvoices/{id}`

<h3 id="removes-an-existing-sales-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Sales Invoice to remove.|
|timestamp|query|string|true|Timestamp of Sales Invoice to remove. Should be encoded in Base64.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removes-an-existing-sales-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-salesrep">SalesRep</h1>

## Returns a list of company's SaleRep. Filtering is forbidden. Ordering is allowed by &quot;id&quot;.

<a id="opIdSalesRep_Get"></a>

> Code samples

```bash
curl https://example.com/v1/salesReps \
  -H 'Accept: application/json'
```

`GET /v1/salesReps`

> Example responses

> 200 Response

```json
{
  "Count": 1,
  "Items": [
    {
      "code": "SR0001",
      "companyId": 123456,
      "email": "example@gmail.com",
      "id": 1,
      "name": "Sales Rep 1",
      "phone": "1234567890",
      "timeStamp": "6RCQcBIe2wg="
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-salerep-filtering-is-forbidden-ordering-is-allowed-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_SaleRepsDto_](#schemapageresult_salerepsdto_)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new SaleRep.

<a id="opIdSalesRep_Post"></a>

> Code samples

```bash
curl https://example.com/v1/salesReps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "code": "SR0001",
    "companyId": 123456,
    "email": "example@gmail.com",
    "id": 1,
    "name": "Sales Rep 1",
    "phone": "1234567890",
    "timeStamp": "6RCQcBIe2wg="
  }'
```

`POST /v1/salesReps`

> Body parameter

```json
{
  "code": "SR0001",
  "companyId": 123456,
  "email": "example@gmail.com",
  "id": 1,
  "name": "Sales Rep 1",
  "phone": "1234567890",
  "timeStamp": "6RCQcBIe2wg="
}
```

<h3 id="creates-a-new-salerep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SaleRepsDto](#schemasalerepsdto)|true|Information of Sale Rep to create.|
|» code|body|string|false|none|
|» companyId|body|integer(int64)|false|none|
|» email|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» name|body|string|false|none|
|» phone|body|string|false|none|
|» timeStamp|body|string(byte)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="creates-a-new-salerep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Processes a batch of Sale Rep.

<a id="opIdSalesRep_ProcessBatch"></a>

> Code samples

```bash
curl https://example.com/v1/salesReps/batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": {
        "code": "SR0001",
        "companyId": 123456,
        "email": "example@gmail.com",
        "id": 1,
        "name": "Sales Rep 1",
        "phone": "1234567890",
        "timeStamp": "6RCQcBIe2wg="
      },
      "opCode": 1
    }
  ]'
```

`PUT /v1/salesReps/batch`

> Body parameter

```json
[
  {
    "item": {
      "code": "SR0001",
      "companyId": 123456,
      "email": "example@gmail.com",
      "id": 1,
      "name": "Sales Rep 1",
      "phone": "1234567890",
      "timeStamp": "6RCQcBIe2wg="
    },
    "opCode": 1
  }
]
```

<h3 id="processes-a-batch-of-sale-rep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[BatchItem_SaleRepsDto_](#schemabatchitem_salerepsdto_)]|true|Batch of Sale Rep to process.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="processes-a-batch-of-sale-rep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns information about a single SaleRep.

> Code samples

```bash
curl https://example.com/v1/salesReps/0 \
  -H 'Accept: application/json'
```

`GET /v1/salesReps/{id}`

<h3 id="returns-information-about-a-single-salerep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Sale Rep to return.|

> Example responses

> 200 Response

```json
{
  "code": "SR0001",
  "companyId": 123456,
  "email": "example@gmail.com",
  "id": 1,
  "name": "Sales Rep 1",
  "phone": "1234567890",
  "timeStamp": "6RCQcBIe2wg="
}
```

<h3 id="returns-information-about-a-single-salerep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SaleRepsDto](#schemasalerepsdto)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates an existing Sale Rep.

<a id="opIdSalesRep_Put"></a>

> Code samples

```bash
curl https://example.com/v1/salesReps/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "code": "SR0001",
    "companyId": 123456,
    "email": "example@gmail.com",
    "id": 1,
    "name": "Sales Rep 1",
    "phone": "1234567890",
    "timeStamp": "6RCQcBIe2wg="
  }'
```

`PUT /v1/salesReps/{id}`

> Body parameter

```json
{
  "code": "SR0001",
  "companyId": 123456,
  "email": "example@gmail.com",
  "id": 1,
  "name": "Sales Rep 1",
  "phone": "1234567890",
  "timeStamp": "6RCQcBIe2wg="
}
```

<h3 id="updates-an-existing-sale-rep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Sale Rep to update.|
|body|body|[SaleRepsDto](#schemasalerepsdto)|true|Information of Sale Rep to update.|
|» code|body|string|false|none|
|» companyId|body|integer(int64)|false|none|
|» email|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» name|body|string|false|none|
|» phone|body|string|false|none|
|» timeStamp|body|string(byte)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="updates-an-existing-sale-rep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Removes an existing Sale Rep.

<a id="opIdSalesRep_Delete"></a>

> Code samples

```bash
curl 'https://example.com/v1/salesReps/0?timestamp=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/salesReps/{id}`

<h3 id="removes-an-existing-sale-rep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Sale Rep to remove.|
|timestamp|query|string|true|Timestamp of Sale Rep to remove. Should be encoded in Base64.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removes-an-existing-sale-rep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-suppliers">Suppliers</h1>

## Returns a list of company's Suppliers. Supports OData querying protocol. Filtering is forbidden. Ordering is allowed by &quot;id&quot; and &quot;code&quot; fields.

<a id="opIdSuppliers_Get"></a>

> Code samples

```bash
curl https://example.com/v1/suppliers \
  -H 'Accept: application/json'
```

`GET /v1/suppliers`

> Example responses

> 200 Response

```json
{
  "Count": 1,
  "Items": [
    {
      "accountName": "Supplier Bank Acc",
      "accountNumber": "12345678",
      "additionalEmails": [
        "email2@example.com",
        "email3@example.com"
      ],
      "address": [
        "Address Line 1",
        "Address Line 2"
      ],
      "authCode": "VATEXCODE222",
      "bank": {
        "branch": "Bank",
        "id": 1,
        "name": "bank Name",
        "sortCode": "B01"
      },
      "businessIdentifierCode": null,
      "code": "S001",
      "contact": "John Smith",
      "eFTReference": "Reference",
      "email": "supplier@email.com",
      "fax": "1234567890",
      "id": 10589,
      "internationalBankAccountNumber": null,
      "mobile": "1234567890",
      "name": "Supplier Name",
      "ourCode": "OURCODE111",
      "ownerTypeId": 3,
      "phone": "1234596970",
      "postponedAccounting": false,
      "timestamp": "aHOScBIe2wg=",
      "vatAnalysisTypeId": 1,
      "vatReg": "VATCODE0001",
      "vatType": 2
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-suppliers-supports-odata-querying-protocol-filtering-is-forbidden-ordering-is-allowed-by-id-and-code-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_SupplierQueryDto_](#schemapageresult_supplierquerydto_)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new Supplier.

<a id="opIdSuppliers_Post"></a>

> Code samples

```bash
curl https://example.com/v1/suppliers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accountName": "Supplier Bank Acc",
    "accountNumber": "12345678",
    "additionalEmails": [
      "email2@example.com",
      "email3@example.com"
    ],
    "address": [
      "Address Line 1",
      "Address Line 2"
    ],
    "authCode": "VATEXCODE222",
    "bank": {
      "branch": "Bank",
      "id": 1,
      "name": "bank Name",
      "sortCode": "B01"
    },
    "code": "S001",
    "contact": "John Smith",
    "eFTReference": "Reference",
    "email": "supplier@email.com",
    "fax": "1234567890",
    "id": 10589,
    "mobile": "1234567890",
    "name": "Supplier Name",
    "ourCode": "OURCODE111",
    "ownerTypeId": 3,
    "phone": "1234596970",
    "postponedAccounting": false,
    "timestamp": "4jeXcBIe2wg=",
    "vatAnalysisTypeId": 1,
    "vatReg": "VATCODE0001",
    "vatType": 2
  }'
```

`POST /v1/suppliers`

> Body parameter

```json
{
  "accountName": "Supplier Bank Acc",
  "accountNumber": "12345678",
  "additionalEmails": [
    "email2@example.com",
    "email3@example.com"
  ],
  "address": [
    "Address Line 1",
    "Address Line 2"
  ],
  "authCode": "VATEXCODE222",
  "bank": {
    "branch": "Bank",
    "id": 1,
    "name": "bank Name",
    "sortCode": "B01"
  },
  "code": "S001",
  "contact": "John Smith",
  "eFTReference": "Reference",
  "email": "supplier@email.com",
  "fax": "1234567890",
  "id": 10589,
  "mobile": "1234567890",
  "name": "Supplier Name",
  "ourCode": "OURCODE111",
  "ownerTypeId": 3,
  "phone": "1234596970",
  "postponedAccounting": false,
  "timestamp": "4jeXcBIe2wg=",
  "vatAnalysisTypeId": 1,
  "vatReg": "VATCODE0001",
  "vatType": 2
}
```

<h3 id="creates-a-new-supplier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SupplierDto](#schemasupplierdto)|true|Information of Supplier to create.|
|» accountName|body|string|false|none|
|» accountNumber|body|string|false|none|
|» additionalEmails|body|[string]|false|none|
|» address|body|[string]|false|none|
|» authCode|body|string|false|none|
|» bank|body|[EFTBankDto](#schemaeftbankdto)|false|none|
|» businessIdentifierCode|body|string|false|none|
|» code|body|string|false|none|
|» contact|body|string|false|none|
|» eFTReference|body|string|false|none|
|» email|body|string|false|none|
|» fax|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» internationalBankAccountNumber|body|string|false|none|
|» ledgerBalance|body|number(double)|false|none|
|» mobile|body|string|false|none|
|» name|body|string|false|none|
|» openingBalance|body|[OwnerOpeningBalanceInPeriodsDto](#schemaowneropeningbalanceinperiodsdto)|false|none|
|» openingBalances|body|[[OwnerOpeningBalanceDto](#schemaowneropeningbalancedto)]|false|none|
|» ourCode|body|string|false|none|
|» ownerTypeId|body|integer(int64)|false|none|
|» phone|body|string|false|none|
|» postponedAccounting|body|boolean|false|none|
|» timestamp|body|string(byte)|false|none|
|» vatAnalysisTypeId|body|integer(int64)|false|none|
|» vatReg|body|string|false|none|
|» vatType|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="creates-a-new-supplier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Processes a batch of Suppliers.

<a id="opIdSuppliers_ProcessBatch"></a>

> Code samples

```bash
curl https://example.com/v1/suppliers/batch \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": {
        "accountName": "Supplier Bank Acc",
        "accountNumber": "12345678",
        "additionalEmails": [
          "email2@example.com",
          "email3@example.com"
        ],
        "address": [
          "Address Line 1",
          "Address Line 2"
        ],
        "authCode": "VATEXCODE222",
        "bank": {
          "branch": "Bank",
          "id": 1,
          "name": "bank Name",
          "sortCode": "B01"
        },
        "code": "S001",
        "contact": "John Smith",
        "eFTReference": "Reference",
        "email": "supplier@email.com",
        "fax": "1234567890",
        "id": 10589,
        "mobile": "1234567890",
        "name": "Supplier Name",
        "ourCode": "OURCODE111",
        "ownerTypeId": 3,
        "phone": "1234596970",
        "postponedAccounting": false,
        "timestamp": "4jeXcBIe2wg=",
        "vatAnalysisTypeId": 1,
        "vatReg": "VATCODE0001",
        "vatType": 2
      },
      "opCode": 1
    }
  ]'
```

`PUT /v1/suppliers/batch`

> Body parameter

```json
[
  {
    "item": {
      "accountName": "Supplier Bank Acc",
      "accountNumber": "12345678",
      "additionalEmails": [
        "email2@example.com",
        "email3@example.com"
      ],
      "address": [
        "Address Line 1",
        "Address Line 2"
      ],
      "authCode": "VATEXCODE222",
      "bank": {
        "branch": "Bank",
        "id": 1,
        "name": "bank Name",
        "sortCode": "B01"
      },
      "code": "S001",
      "contact": "John Smith",
      "eFTReference": "Reference",
      "email": "supplier@email.com",
      "fax": "1234567890",
      "id": 10589,
      "mobile": "1234567890",
      "name": "Supplier Name",
      "ourCode": "OURCODE111",
      "ownerTypeId": 3,
      "phone": "1234596970",
      "postponedAccounting": false,
      "timestamp": "4jeXcBIe2wg=",
      "vatAnalysisTypeId": 1,
      "vatReg": "VATCODE0001",
      "vatType": 2
    },
    "opCode": 1
  }
]
```

<h3 id="processes-a-batch-of-suppliers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[BatchItem_SupplierDto_](#schemabatchitem_supplierdto_)]|true|Batch of Suppliers to process.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="processes-a-batch-of-suppliers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.

> Code samples

```bash
curl https://example.com/v1/suppliers/0 \
  -H 'Accept: application/json'
```

`GET /v1/suppliers/{id}`

<h3 id="returns-information-about-a-single-supplier-you-may-specify-that-suppliers-ledger-balance-should-be-calculated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Supplier to return.|
|needBalance|query|boolean|false|If "true" then Supplier's ledger balance will be calculated; otherwise balance will be returned as 0.|

> Example responses

> 200 Response

```json
{
  "accountName": "Supplier Bank Acc",
  "accountNumber": "12345678",
  "additionalEmails": [
    "email2@example.com",
    "email3@example.com"
  ],
  "address": [
    "Address Line 1",
    "Address Line 2"
  ],
  "authCode": "VATEXCODE222",
  "bank": {
    "branch": "Bank",
    "id": 1,
    "name": "bank Name",
    "sortCode": "B01"
  },
  "businessIdentifierCode": null,
  "code": "S001",
  "contact": "John Smith",
  "eFTReference": "Reference",
  "email": "supplier@email.com",
  "fax": "1234567890",
  "id": 10589,
  "internationalBankAccountNumber": null,
  "mobile": "1234567890",
  "name": "Supplier Name",
  "ourCode": "OURCODE111",
  "ownerTypeId": 3,
  "phone": "1234596970",
  "postponedAccounting": false,
  "timestamp": "4jeXcBIe2wg=",
  "vatAnalysisTypeId": 1,
  "vatReg": "VATCODE0001",
  "vatType": 2
}
```

<h3 id="returns-information-about-a-single-supplier-you-may-specify-that-suppliers-ledger-balance-should-be-calculated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SupplierDto](#schemasupplierdto)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates an existing Supplier.

<a id="opIdSuppliers_Put"></a>

> Code samples

```bash
curl https://example.com/v1/suppliers/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accountName": "Supplier Bank Acc",
    "accountNumber": "12345678",
    "additionalEmails": [
      "email2@example.com",
      "email3@example.com"
    ],
    "address": [
      "Address Line 1",
      "Address Line 2"
    ],
    "authCode": "VATEXCODE222",
    "bank": {
      "branch": "Bank",
      "id": 1,
      "name": "bank Name",
      "sortCode": "B01"
    },
    "code": "S001",
    "contact": "John Smith",
    "eFTReference": "Reference",
    "email": "supplier@email.com",
    "fax": "1234567890",
    "id": 10589,
    "mobile": "1234567890",
    "name": "Supplier Name",
    "ourCode": "OURCODE111",
    "ownerTypeId": 3,
    "phone": "1234596970",
    "postponedAccounting": false,
    "timestamp": "4jeXcBIe2wg=",
    "vatAnalysisTypeId": 1,
    "vatReg": "VATCODE0001",
    "vatType": 2
  }'
```

`PUT /v1/suppliers/{id}`

> Body parameter

```json
{
  "accountName": "Supplier Bank Acc",
  "accountNumber": "12345678",
  "additionalEmails": [
    "email2@example.com",
    "email3@example.com"
  ],
  "address": [
    "Address Line 1",
    "Address Line 2"
  ],
  "authCode": "VATEXCODE222",
  "bank": {
    "branch": "Bank",
    "id": 1,
    "name": "bank Name",
    "sortCode": "B01"
  },
  "code": "S001",
  "contact": "John Smith",
  "eFTReference": "Reference",
  "email": "supplier@email.com",
  "fax": "1234567890",
  "id": 10589,
  "mobile": "1234567890",
  "name": "Supplier Name",
  "ourCode": "OURCODE111",
  "ownerTypeId": 3,
  "phone": "1234596970",
  "postponedAccounting": false,
  "timestamp": "4jeXcBIe2wg=",
  "vatAnalysisTypeId": 1,
  "vatReg": "VATCODE0001",
  "vatType": 2
}
```

<h3 id="updates-an-existing-supplier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Supplier to update.|
|body|body|[SupplierDto](#schemasupplierdto)|true|Information of Supplier to update.|
|» accountName|body|string|false|none|
|» accountNumber|body|string|false|none|
|» additionalEmails|body|[string]|false|none|
|» address|body|[string]|false|none|
|» authCode|body|string|false|none|
|» bank|body|[EFTBankDto](#schemaeftbankdto)|false|none|
|» businessIdentifierCode|body|string|false|none|
|» code|body|string|false|none|
|» contact|body|string|false|none|
|» eFTReference|body|string|false|none|
|» email|body|string|false|none|
|» fax|body|string|false|none|
|» id|body|integer(int64)|false|none|
|» internationalBankAccountNumber|body|string|false|none|
|» ledgerBalance|body|number(double)|false|none|
|» mobile|body|string|false|none|
|» name|body|string|false|none|
|» openingBalance|body|[OwnerOpeningBalanceInPeriodsDto](#schemaowneropeningbalanceinperiodsdto)|false|none|
|» openingBalances|body|[[OwnerOpeningBalanceDto](#schemaowneropeningbalancedto)]|false|none|
|» ourCode|body|string|false|none|
|» ownerTypeId|body|integer(int64)|false|none|
|» phone|body|string|false|none|
|» postponedAccounting|body|boolean|false|none|
|» timestamp|body|string(byte)|false|none|
|» vatAnalysisTypeId|body|integer(int64)|false|none|
|» vatReg|body|string|false|none|
|» vatType|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="updates-an-existing-supplier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Removes an existing Supplier.

<a id="opIdSuppliers_Delete"></a>

> Code samples

```bash
curl 'https://example.com/v1/suppliers/0?timestamp=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/suppliers/{id}`

<h3 id="removes-an-existing-supplier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Id of Supplier to remove.|
|timestamp|query|string|true|Timestamp of Supplier to remove. Should be encoded in Base64.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="removes-an-existing-supplier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of Supplier's account transactions.

<a id="opIdSuppliers_GetAccountTrans"></a>

> Code samples

```bash
curl https://example.com/v1/suppliers/0/accountTrans \
  -H 'Accept: application/json'
```

`GET /v1/suppliers/{itemId}/accountTrans`

<h3 id="returns-a-list-of-suppliers-account-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|integer(int64)|true|Id of Supplier to return account transaction.|

> Example responses

> 200 Response

```json
[
  {
    "bookTranId": 0,
    "bookTranTypeId": 0,
    "bookTransactionReference": "O/Bal",
    "bookTypeDesc": "Opening Balance",
    "credit": 0,
    "debit": 30,
    "id": 2,
    "procDate": "2012-12-31T00:00:00"
  },
  {
    "bookTranId": 0,
    "bookTranTypeId": 0,
    "bookTransactionReference": "0000001",
    "bookTypeDesc": "Bank Payment",
    "credit": 0,
    "debit": 10,
    "id": 9,
    "procDate": "2012-12-31T00:00:00"
  }
]
```

<h3 id="returns-a-list-of-suppliers-account-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="returns-a-list-of-suppliers-account-transactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AccountTranDto](#schemaaccounttrandto)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.

<a id="opIdSuppliers_GetOpeningBalance"></a>

> Code samples

```bash
curl https://example.com/v1/suppliers/0/openingBalance \
  -H 'Accept: application/json'
```

`GET /v1/suppliers/{itemId}/openingBalance`

<h3 id="returns-a-suppliers-opening-balances-calculated-for-the-next-periods-current-month-one-month-old-two-months-old-three-and-more-months-old-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|integer(int64)|true|Id of Supplier to return opening balances.|

> Example responses

> 200 Response

```json
{
  "currentMonth": 10,
  "oneMonthOld": 20,
  "threeMonthsOld": 40,
  "twoMonthsOld": 30
}
```

<h3 id="returns-a-suppliers-opening-balances-calculated-for-the-next-periods-current-month-one-month-old-two-months-old-three-and-more-months-old-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OwnerOpeningBalanceInPeriodsDto](#schemaowneropeningbalanceinperiodsdto)|

<aside class="success">
This operation does not require authentication
</aside>

## Returns a list of Supplier's opening balance transactions.

<a id="opIdSuppliers_GetOpeningBalanceList"></a>

> Code samples

```bash
curl https://example.com/v1/suppliers/0/openingBalanceList \
  -H 'Accept: application/json'
```

`GET /v1/suppliers/{itemId}/openingBalanceList`

<h3 id="returns-a-list-of-suppliers-opening-balance-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|itemId|path|integer(int64)|true|Id of Supplier to return opening balances transaction.|

> Example responses

> 200 Response

```json
[
  {
    "entryDate": "2011-01-01T00:00:00",
    "id": 1,
    "procDate": "2011-02-01T00:00:00",
    "reference": "O/Bal",
    "timestamp": "OJqZcBIe2wg=",
    "total": 10,
    "totalVAT": 1.3,
    "unpaid": 0,
    "vatEntries": [
      {
        "amount": 8.7,
        "vatRateId": 1
      }
    ]
  },
  {
    "entryDate": "2011-01-01T00:00:00",
    "id": 2,
    "procDate": "2011-02-01T00:00:00",
    "reference": "O/Bal",
    "timestamp": "OJqZcBIe2wg=",
    "total": 20,
    "totalVAT": 3.33,
    "unpaid": 0,
    "vatEntries": [
      {
        "amount": 16.77,
        "vatRateId": 2
      }
    ]
  }
]
```

<h3 id="returns-a-list-of-suppliers-opening-balance-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="returns-a-list-of-suppliers-opening-balance-transactions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OwnerOpeningBalanceDto](#schemaowneropeningbalancedto)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-userdefinedfields">UserDefinedFields</h1>

## Returns a list of company's User Defined Fields. Supports OData querying protocol. Filtering is allowed by &quot;categoryTypeId&quot; field. Ordering is allowed by &quot;id&quot; and &quot;orderIndex&quot; fields.

<a id="opIdUserDefinedFields_Get"></a>

> Code samples

```bash
curl https://example.com/v1/userDefinedFields \
  -H 'Accept: application/json'
```

`GET /v1/userDefinedFields`

> Example responses

> 200 Response

```json
{
  "Count": 5,
  "Items": [
    {
      "categoryTypeId": 19,
      "description": "acudf_1_1",
      "id": 1,
      "orderIndex": 1
    },
    {
      "categoryTypeId": 19,
      "description": "acudf_1_2",
      "id": 2,
      "orderIndex": 2
    },
    {
      "categoryTypeId": 19,
      "description": "acudf_1_3",
      "id": 3,
      "orderIndex": 3
    },
    {
      "categoryTypeId": 17,
      "description": "acudf_3",
      "id": 5,
      "orderIndex": 1
    },
    {
      "categoryTypeId": 20,
      "description": "acudf_2",
      "id": 4,
      "orderIndex": 1
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-user-defined-fields-supports-odata-querying-protocol-filtering-is-allowed-by-categorytypeid-field-ordering-is-allowed-by-id-and-orderindex-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_UserDefinedFieldDto_](#schemapageresult_userdefinedfielddto_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-vatanalysistypes">VatAnalysisTypes</h1>

## Returns a list of global Vat Analysis Types. Supports OData querying protocol. Filtering is forbidden. Ordering is allowed by &quot;id&quot; field.

<a id="opIdVatAnalysisTypes_Get"></a>

> Code samples

```bash
curl https://example.com/v1/vatAnalysisTypes \
  -H 'Accept: application/json'
```

`GET /v1/vatAnalysisTypes`

> Example responses

> 200 Response

```json
{
  "Count": 3,
  "Items": [
    {
      "description": "None",
      "id": 0
    },
    {
      "description": "Goods",
      "id": 1
    },
    {
      "description": "Services",
      "id": 2
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-global-vat-analysis-types-supports-odata-querying-protocol-filtering-is-forbidden-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_VatAnalysisTypeDto_](#schemapageresult_vatanalysistypedto_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-vatcategories">VatCategories</h1>

## Returns a list of global Vat Categories. Supports OData querying protocol. Filtering is forbidden. Ordering is allowed by &quot;id&quot; field.

<a id="opIdVatCategories_Get"></a>

> Code samples

```bash
curl https://example.com/v1/vatCategories \
  -H 'Accept: application/json'
```

`GET /v1/vatCategories`

> Example responses

> 200 Response

```json
{
  "Count": 3,
  "Items": [
    {
      "description": "Purchases For Resale",
      "id": 1
    },
    {
      "description": "Purchases Not For Resale",
      "id": 2
    },
    {
      "description": "Sales",
      "id": 3
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-global-vat-categories-supports-odata-querying-protocol-filtering-is-forbidden-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_VatCategoryDto_](#schemapageresult_vatcategorydto_)|

<aside class="success">
This operation does not require authentication
</aside>

## Process Vat Rates

<a id="opIdVatCategories_ProcessVatRates"></a>

> Code samples

```bash
curl https://example.com/v1/vatCategories/vatRates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "vatCategoryId": 1,
      "vatRates": [
        {
          "id": 0,
          "isActive": true,
          "isDefault": false,
          "orderIndex": 0,
          "percentage": 30,
          "vatCategoryId": 1
        }
      ]
    }
  ]'
```

`POST /v1/vatCategories/vatRates`

> Body parameter

```json
[
  {
    "vatCategoryId": 1,
    "vatRates": [
      {
        "id": 0,
        "isActive": true,
        "isDefault": false,
        "orderIndex": 0,
        "percentage": 30,
        "vatCategoryId": 1
      }
    ]
  }
]
```

<h3 id="process-vat-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[VatRatesByVatCategoryDto](#schemavatratesbyvatcategorydto)]|true|Array of Vat Rates.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="process-vat-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-vatrates">VatRates</h1>

## Returns a list of company's Vat Rates. Supports OData querying protocol. Filtering is allowed by &quot;vatCategoryId&quot; field. Ordering is allowed by &quot;id&quot; and &quot;orderIndex&quot; fields.

<a id="opIdVatRates_Get"></a>

> Code samples

```bash
curl https://example.com/v1/vatRates \
  -H 'Accept: application/json'
```

`GET /v1/vatRates`

> Example responses

> 200 Response

```json
{
  "Count": 4,
  "Items": [
    {
      "id": 2,
      "isActive": true,
      "isDefault": false,
      "orderIndex": 2,
      "percentage": 20,
      "timestamp": null,
      "vatCategoryId": 3
    },
    {
      "id": 3,
      "isActive": true,
      "isDefault": false,
      "orderIndex": 1,
      "percentage": 25,
      "timestamp": null,
      "vatCategoryId": 1
    },
    {
      "id": 1,
      "isActive": true,
      "isDefault": true,
      "orderIndex": 1,
      "percentage": 15,
      "timestamp": null,
      "vatCategoryId": 3
    },
    {
      "id": 4,
      "isActive": true,
      "isDefault": false,
      "orderIndex": 4,
      "percentage": 30,
      "timestamp": null,
      "vatCategoryId": 4
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-companys-vat-rates-supports-odata-querying-protocol-filtering-is-allowed-by-vatcategoryid-field-ordering-is-allowed-by-id-and-orderindex-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_VatRateDto_](#schemapageresult_vatratedto_)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="big-red-cloud-api-vattypes">VatTypes</h1>

## Returns a list of global Vat Types. Supports OData querying protocol. Filtering is forbidden. Ordering is allowed by &quot;id&quot; field.

<a id="opIdVatTypes_Get"></a>

> Code samples

```bash
curl https://example.com/v1/vatTypes \
  -H 'Accept: application/json'
```

`GET /v1/vatTypes`

> Example responses

> 200 Response

```json
{
  "Count": 6,
  "Items": [
    {
      "code": "",
      "description": "Domestic",
      "id": 1,
      "isNotApplicable": false,
      "isOnlyZero": false
    },
    {
      "code": "E",
      "description": "Other EU",
      "id": 2,
      "isNotApplicable": false,
      "isOnlyZero": false
    },
    {
      "code": "F",
      "description": "Foreign - Non EU",
      "id": 3,
      "isNotApplicable": false,
      "isOnlyZero": false
    },
    {
      "code": "X",
      "description": "VAT Exempt",
      "id": 4,
      "isNotApplicable": false,
      "isOnlyZero": true
    },
    {
      "code": "N",
      "description": "Not Applicable",
      "id": 5,
      "isNotApplicable": true,
      "isOnlyZero": false
    },
    {
      "code": "R",
      "description": "Reverse Charge",
      "id": 6,
      "isNotApplicable": false,
      "isOnlyZero": false
    }
  ],
  "NextPageLink": ""
}
```

<h3 id="returns-a-list-of-global-vat-types-supports-odata-querying-protocol-filtering-is-forbidden-ordering-is-allowed-by-id-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PageResult_VatTypeDto_](#schemapageresult_vattypedto_)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AcEntryDto">AcEntryDto</h2>
<!-- backwards compatibility -->
<a id="schemaacentrydto"></a>
<a id="schema_AcEntryDto"></a>
<a id="tocSacentrydto"></a>
<a id="tocsacentrydto"></a>

```json
{
  "accountCode": "string",
  "analysisCategoryId": 0,
  "description": "string",
  "id": 0,
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|none|
|analysisCategoryId|integer(int64)|false|none|none|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|value|number(double)|false|none|none|

<h2 id="tocS_AccountDto">AccountDto</h2>
<!-- backwards compatibility -->
<a id="schemaaccountdto"></a>
<a id="schema_AccountDto"></a>
<a id="tocSaccountdto"></a>
<a id="tocsaccountdto"></a>

```json
{
  "accountGroup": "string",
  "accountType": "string",
  "code": "string",
  "description": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountGroup|string|false|none|none|
|accountType|string|false|none|none|
|code|string|false|none|none|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|

<h2 id="tocS_AccountTranDto">AccountTranDto</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttrandto"></a>
<a id="schema_AccountTranDto"></a>
<a id="tocSaccounttrandto"></a>
<a id="tocsaccounttrandto"></a>

```json
{
  "bookTranId": 0,
  "bookTranTypeId": 0,
  "bookTransactionReference": "string",
  "bookTypeDesc": "string",
  "credit": 0,
  "debit": 0,
  "id": 0,
  "procDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookTranId|integer(int64)|false|none|none|
|bookTranTypeId|integer(int64)|false|none|none|
|bookTransactionReference|string|false|none|none|
|bookTypeDesc|string|false|none|none|
|credit|number(double)|false|none|none|
|debit|number(double)|false|none|none|
|id|integer(int64)|false|none|none|
|procDate|string(date-time)|false|none|none|

<h2 id="tocS_AcudfValueDto">AcudfValueDto</h2>
<!-- backwards compatibility -->
<a id="schemaacudfvaluedto"></a>
<a id="schema_AcudfValueDto"></a>
<a id="tocSacudfvaluedto"></a>
<a id="tocsacudfvaluedto"></a>

```json
{
  "description": "string",
  "id": 0,
  "userDefinedFieldId": 0,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|userDefinedFieldId|integer(int64)|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_AnalysisCategoryDto">AnalysisCategoryDto</h2>
<!-- backwards compatibility -->
<a id="schemaanalysiscategorydto"></a>
<a id="schema_AnalysisCategoryDto"></a>
<a id="tocSanalysiscategorydto"></a>
<a id="tocsanalysiscategorydto"></a>

```json
{
  "accountCode": "string",
  "accountId": 0,
  "categoryTypeId": 0,
  "description": "string",
  "id": 0,
  "orderIndex": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|none|
|accountId|integer(int64)|false|none|none|
|categoryTypeId|integer(int64)|false|none|none|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|orderIndex|integer(int32)|false|none|none|

<h2 id="tocS_BankAccountDto">BankAccountDto</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountdto"></a>
<a id="schema_BankAccountDto"></a>
<a id="tocSbankaccountdto"></a>
<a id="tocsbankaccountdto"></a>

```json
{
  "acCode": "B1",
  "accountName": "",
  "accountNumber": "83700896",
  "address": [
    "Address Line 1",
    "Address Line 2"
  ],
  "bankFeedSource": 0,
  "businessIdentifierCodes": "AIBKIE2D",
  "categoryId": 41704,
  "creditorScheme": "XXXX",
  "details": "Bank_1",
  "id": 1,
  "internationalBankAccountNumber": "IE67 BOFI 9027 0925 7277 59",
  "isDefaultBank": false,
  "lastChq": "000005",
  "nominalAcCode": "B101",
  "oBalance": 0,
  "sortCode": "900284",
  "timestamp": "QUFBQUFBQUFDcXc9"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|accountName|string|false|none|none|
|accountNumber|string|false|none|none|
|address|[string]|false|none|none|
|bankFeedSource|integer(int32)|false|none|none|
|businessIdentifierCodes|string|false|none|none|
|categoryId|integer(int64)|false|none|none|
|creditorScheme|string|false|none|none|
|details|string|false|none|none|
|id|integer(int64)|false|none|none|
|internationalBankAccountNumber|string|false|none|none|
|isDefaultBank|boolean|false|none|none|
|lastChq|string|false|none|none|
|nominalAcCode|string|false|none|none|
|oBalance|number(double)|false|none|none|
|sortCode|string|false|none|none|
|timestamp|string(byte)|false|none|none|

<h2 id="tocS_BankAccountQueryDto">BankAccountQueryDto</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountquerydto"></a>
<a id="schema_BankAccountQueryDto"></a>
<a id="tocSbankaccountquerydto"></a>
<a id="tocsbankaccountquerydto"></a>

```json
{
  "acCode": "string",
  "accountName": "string",
  "accountNumber": "string",
  "address": [
    "string"
  ],
  "bankFeedSource": 0,
  "businessIdentifierCodes": "string",
  "categoryId": 0,
  "creditorScheme": "string",
  "details": "string",
  "id": 0,
  "internationalBankAccountNumber": "string",
  "isDefaultBank": true,
  "lastChq": "string",
  "nominalAcCode": "string",
  "sortCode": "string",
  "timestamp": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|accountName|string|false|none|none|
|accountNumber|string|false|none|none|
|address|[string]|false|none|none|
|bankFeedSource|integer(int32)|false|none|none|
|businessIdentifierCodes|string|false|none|none|
|categoryId|integer(int64)|false|none|none|
|creditorScheme|string|false|none|none|
|details|string|false|none|none|
|id|integer(int64)|false|none|none|
|internationalBankAccountNumber|string|false|none|none|
|isDefaultBank|boolean|false|none|none|
|lastChq|string|false|none|none|
|nominalAcCode|string|false|none|none|
|sortCode|string|false|none|none|
|timestamp|string(byte)|false|none|none|

<h2 id="tocS_BatchItem_BankAccountDto_">BatchItem_BankAccountDto_</h2>
<!-- backwards compatibility -->
<a id="schemabatchitem_bankaccountdto_"></a>
<a id="schema_BatchItem_BankAccountDto_"></a>
<a id="tocSbatchitem_bankaccountdto_"></a>
<a id="tocsbatchitem_bankaccountdto_"></a>

```json
{
  "item": {
    "acCode": "B1",
    "accountName": "",
    "accountNumber": "83700896",
    "address": [
      "Address Line 1",
      "Address Line 2"
    ],
    "bankFeedSource": 0,
    "businessIdentifierCodes": "AIBKIE2D",
    "categoryId": 41704,
    "creditorScheme": "XXXX",
    "details": "Bank_111111111111111111",
    "id": 1,
    "internationalBankAccountNumber": "IE67 BOFI 9027 0925 7277 59",
    "isDefaultBank": false,
    "lastChq": "000005",
    "nominalAcCode": "B101",
    "oBalance": 0,
    "sortCode": "900284",
    "timestamp": "QUFBQUFBQUFDcXc9"
  },
  "opCode": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[BankAccountDto](#schemabankaccountdto)|false|none|none|
|opCode|integer(int32)|false|none|1 - Create<br>2 - Update<br>3 - Delete|

#### Enumerated Values

|Property|Value|
|---|---|
|opCode|1|
|opCode|2|
|opCode|3|

<h2 id="tocS_BatchItem_CashPaymentDto_">BatchItem_CashPaymentDto_</h2>
<!-- backwards compatibility -->
<a id="schemabatchitem_cashpaymentdto_"></a>
<a id="schema_BatchItem_CashPaymentDto_"></a>
<a id="tocSbatchitem_cashpaymentdto_"></a>
<a id="tocsbatchitem_cashpaymentdto_"></a>

```json
{
  "item": {
    "acEntries": [
      {
        "accountCode": "CP01",
        "analysisCategoryId": 10433,
        "description": "Cash Pay 01",
        "id": 62741,
        "value": 200
      }
    ],
    "bankAccountCode": "BAK2",
    "bankAccountId": 11111,
    "bookTranTypeId": 2,
    "customFields": [],
    "detailCollection": [
      "test"
    ],
    "discount": 0,
    "entryDate": "2017-07-01T00:00:00",
    "id": 12345,
    "ledger": 100,
    "lodgement": 0,
    "note": "Supplier 1",
    "procDate": "2017-07-26T00:00:00",
    "supplierId": 70599,
    "timestamp": "XmAKcBIe2wg=",
    "total": 100
  },
  "opCode": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[CashPaymentDto](#schemacashpaymentdto)|false|none|none|
|opCode|integer(int32)|false|none|1 - Create<br>2 - Update<br>3 - Delete|

#### Enumerated Values

|Property|Value|
|---|---|
|opCode|1|
|opCode|2|
|opCode|3|

<h2 id="tocS_BatchItem_CashReceiptDto_">BatchItem_CashReceiptDto_</h2>
<!-- backwards compatibility -->
<a id="schemabatchitem_cashreceiptdto_"></a>
<a id="schema_BatchItem_CashReceiptDto_"></a>
<a id="tocSbatchitem_cashreceiptdto_"></a>
<a id="tocsbatchitem_cashreceiptdto_"></a>

```json
{
  "item": {
    "acEntries": [
      {
        "accountCode": "000",
        "analysisCategoryId": 1,
        "description": "AnCat1",
        "id": 1,
        "value": 30
      }
    ],
    "bookTranTypeId": 1,
    "customFields": [
      {
        "description": "acudf_1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "acudfv_1"
      }
    ],
    "detailCollection": [
      "det_1",
      "det_2",
      "det_3"
    ],
    "discount": 0,
    "entryDate": "2011-01-01T00:00:00",
    "id": 1,
    "ledger": 0,
    "note": "note1",
    "procDate": "2011-01-05T00:00:00",
    "timestamp": "I0wWcBIe2wg=",
    "total": 50,
    "unallocated": 0,
    "vatEntries": [
      {
        "amount": 50,
        "id": 1,
        "percentage": 15,
        "vatRateId": 1
      }
    ]
  },
  "opCode": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[CashReceiptDto](#schemacashreceiptdto)|false|none|none|
|opCode|integer(int32)|false|none|1 - Create<br>2 - Update<br>3 - Delete|

#### Enumerated Values

|Property|Value|
|---|---|
|opCode|1|
|opCode|2|
|opCode|3|

<h2 id="tocS_BatchItem_CustomerDto_">BatchItem_CustomerDto_</h2>
<!-- backwards compatibility -->
<a id="schemabatchitem_customerdto_"></a>
<a id="schema_BatchItem_CustomerDto_"></a>
<a id="tocSbatchitem_customerdto_"></a>
<a id="tocsbatchitem_customerdto_"></a>

```json
{
  "item": {
    "accountName": "",
    "accountNumber": "12345678",
    "additionalEmails": [
      "email2@example.com",
      "email3@example.com"
    ],
    "address": [
      "Address Line 1",
      "Address Line 2"
    ],
    "authCode": "VATEXCODE222",
    "bank": {
      "branch": "Bank",
      "id": 1,
      "name": "bank Name",
      "sortCode": "B01"
    },
    "businessIdentifierCode": "AIBI02",
    "code": "12345678",
    "contact": "John Smith",
    "delivery": [
      "Delivery 1",
      "Delivery 2"
    ],
    "eFTReference": "Reference",
    "email": "customer@email.com",
    "fax": "1234567890",
    "id": 10589,
    "internationalBankAccountNumber": "1233432532",
    "mobile": "1234567890",
    "name": "Customer Name 1",
    "ourCode": "OURCODE111",
    "ownerTypeId": 1,
    "phone": "1234596970",
    "timestamp": "b8ErcBIe2wg=",
    "vatAnalysisTypeId": 1,
    "vatReg": "VATCODE0001",
    "vatType": 2
  },
  "opCode": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[CustomerDto](#schemacustomerdto)|false|none|none|
|opCode|integer(int32)|false|none|1 - Create<br>2 - Update<br>3 - Delete|

#### Enumerated Values

|Property|Value|
|---|---|
|opCode|1|
|opCode|2|
|opCode|3|

<h2 id="tocS_BatchItem_PaymentDto_">BatchItem_PaymentDto_</h2>
<!-- backwards compatibility -->
<a id="schemabatchitem_paymentdto_"></a>
<a id="schema_BatchItem_PaymentDto_"></a>
<a id="tocSbatchitem_paymentdto_"></a>
<a id="tocsbatchitem_paymentdto_"></a>

```json
{
  "item": {
    "acCode": "C1",
    "acEntries": [],
    "bankAccountCode": "B1",
    "bankAccountId": 1,
    "bookTranTypeId": 3,
    "customFields": [
      {
        "description": "F1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "f1"
      },
      {
        "description": "F2",
        "id": 2,
        "userDefinedFieldId": 2,
        "value": "f2"
      }
    ],
    "detailCollection": [
      "d1",
      "d2"
    ],
    "discount": 2,
    "entryDate": "2011-07-01T00:00:00",
    "id": 2,
    "note": "123",
    "procDate": "2011-08-08T00:00:00",
    "reference": "000002",
    "supplierId": 2,
    "timestamp": "CcBKcBIe2wg=",
    "total": 155,
    "transferBankCode": "",
    "transferBankId": 1,
    "unallocated": 155
  },
  "opCode": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[PaymentDto](#schemapaymentdto)|false|none|none|
|opCode|integer(int32)|false|none|1 - Create<br>2 - Update<br>3 - Delete|

#### Enumerated Values

|Property|Value|
|---|---|
|opCode|1|
|opCode|2|
|opCode|3|

<h2 id="tocS_BatchItem_ProductDto_">BatchItem_ProductDto_</h2>
<!-- backwards compatibility -->
<a id="schemabatchitem_productdto_"></a>
<a id="schema_BatchItem_ProductDto_"></a>
<a id="tocSbatchitem_productdto_"></a>
<a id="tocsbatchitem_productdto_"></a>

```json
{
  "item": {
    "details": [
      "det1",
      "det2",
      "det3"
    ],
    "grossUnitPrice": false,
    "hasDefaultVatRate": false,
    "id": 9,
    "productTypeId": 0,
    "stockCode": "PRO1",
    "timestamp": "TudRcBIe2wg=",
    "unitPrice": 100,
    "vatAnalysisTypeId": 1
  },
  "opCode": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[ProductDto](#schemaproductdto)|false|none|none|
|opCode|integer(int32)|false|none|1 - Create<br>2 - Update<br>3 - Delete|

#### Enumerated Values

|Property|Value|
|---|---|
|opCode|1|
|opCode|2|
|opCode|3|

<h2 id="tocS_BatchItem_PurchaseDto_">BatchItem_PurchaseDto_</h2>
<!-- backwards compatibility -->
<a id="schemabatchitem_purchasedto_"></a>
<a id="schema_BatchItem_PurchaseDto_"></a>
<a id="tocSbatchitem_purchasedto_"></a>
<a id="tocsbatchitem_purchasedto_"></a>

```json
{
  "item": {
    "acCode": "SUP3",
    "acEntries": [
      {
        "accountCode": "PU03",
        "analysisCategoryId": 10441,
        "description": "PUR 3",
        "id": 12518,
        "value": 90.91
      }
    ],
    "bookTranTypeId": 4,
    "customFields": [],
    "detailCollection": [],
    "entryDate": "2016-06-01T00:00:00",
    "id": 13380,
    "netGoods": 0,
    "netServices": 0,
    "note": "Supplier 3",
    "procDate": "2016-06-24T00:00:00",
    "reference": "000001",
    "supplierId": 10173,
    "timestamp": "eDVgcBIe2wg=",
    "total": 100,
    "totalNet": 90.91,
    "totalVAT": 9.09,
    "unallocated": 100,
    "unpaid": 100,
    "vatEntries": [
      {
        "amount": 90.91,
        "id": 12267,
        "percentage": 10,
        "vatRateId": 10317
      }
    ],
    "vatTypeId": 1
  },
  "opCode": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[PurchaseDto](#schemapurchasedto)|false|none|none|
|opCode|integer(int32)|false|none|1 - Create<br>2 - Update<br>3 - Delete|

#### Enumerated Values

|Property|Value|
|---|---|
|opCode|1|
|opCode|2|
|opCode|3|

<h2 id="tocS_BatchItem_QuoteDto_">BatchItem_QuoteDto_</h2>
<!-- backwards compatibility -->
<a id="schemabatchitem_quotedto_"></a>
<a id="schema_BatchItem_QuoteDto_"></a>
<a id="tocSbatchitem_quotedto_"></a>
<a id="tocsbatchitem_quotedto_"></a>

```json
{
  "item": {
    "comments": "Sample",
    "companyId": 40449,
    "customerOwnerId": 70583,
    "customerOwnerName": "Customer 1",
    "ddNumber": "Sample",
    "entryDate": "2017-01-01T00:00:00",
    "id": 1,
    "layoutType": 1,
    "poNumber": "Sample",
    "procDate": "2017-01-05T00:00:00",
    "productTrans": [
      {
        "acEntries": [
          {
            "accountCode": "sample",
            "analysisCategoryId": 40888,
            "companyId": 40449,
            "id": 1,
            "quoteProductTranId": 40277,
            "value": 100
          }
        ],
        "amount": 10,
        "companyId": 40449,
        "id": 40277,
        "percentage": 0,
        "productCode": "PRO1",
        "productId": 20107,
        "quantity": 1,
        "tranNotes": [
          "Product"
        ],
        "unitPrice": 100,
        "vatAmount": 10,
        "vatAnalysisTypeId": 0,
        "vatRateId": 30657
      }
    ],
    "reference": "000032",
    "saleInvoiceId": 30044,
    "saleRepId": 75783,
    "timeStamp": "koNucBIe2wg=",
    "total": 110,
    "totalNet": 100,
    "totalVat": 10,
    "vatTypeId": 1
  },
  "opCode": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[QuoteDto](#schemaquotedto)|false|none|none|
|opCode|integer(int32)|false|none|1 - Create<br>2 - Update<br>3 - Delete|

#### Enumerated Values

|Property|Value|
|---|---|
|opCode|1|
|opCode|2|
|opCode|3|

<h2 id="tocS_BatchItem_SaleRepsDto_">BatchItem_SaleRepsDto_</h2>
<!-- backwards compatibility -->
<a id="schemabatchitem_salerepsdto_"></a>
<a id="schema_BatchItem_SaleRepsDto_"></a>
<a id="tocSbatchitem_salerepsdto_"></a>
<a id="tocsbatchitem_salerepsdto_"></a>

```json
{
  "item": {
    "code": "SR0001",
    "companyId": 123456,
    "email": "example@gmail.com",
    "id": 1,
    "name": "Sales Rep 1",
    "phone": "1234567890",
    "timeStamp": "6RCQcBIe2wg="
  },
  "opCode": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[SaleRepsDto](#schemasalerepsdto)|false|none|none|
|opCode|integer(int32)|false|none|1 - Create<br>2 - Update<br>3 - Delete|

#### Enumerated Values

|Property|Value|
|---|---|
|opCode|1|
|opCode|2|
|opCode|3|

<h2 id="tocS_BatchItem_SalesEntryDto_">BatchItem_SalesEntryDto_</h2>
<!-- backwards compatibility -->
<a id="schemabatchitem_salesentrydto_"></a>
<a id="schema_BatchItem_SalesEntryDto_"></a>
<a id="tocSbatchitem_salesentrydto_"></a>
<a id="tocsbatchitem_salesentrydto_"></a>

```json
{
  "item": {
    "acCode": "code",
    "acEntries": [
      {
        "accountCode": "SA01",
        "analysisCategoryId": 40888,
        "description": "SAL 1",
        "id": 73450,
        "value": 636.36
      }
    ],
    "bookTranTypeId": 5,
    "customFields": [
      {
        "description": "acudf_1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "acudfv_1"
      },
      {
        "description": "acudf_2",
        "id": 2,
        "userDefinedFieldId": 1,
        "value": "acudfv_2"
      }
    ],
    "customerId": 70583,
    "detailCollection": [],
    "details": "detail_1",
    "entryDate": "2011-01-01T00:00:00",
    "id": 1,
    "netGoods": 0,
    "netServices": 0,
    "note": "Customer 1",
    "procDate": "2011-01-01T00:00:00",
    "reference": "000001",
    "timestamp": "XUyLcBIe2wg=",
    "total": 700,
    "totalNet": 636.36,
    "totalVAT": 63.64,
    "unpaid": 0,
    "vatEntries": [
      {
        "amount": 636.36,
        "id": 63649,
        "percentage": 10,
        "vatRateId": 30657
      }
    ],
    "vatTypeId": 1
  },
  "opCode": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[SalesEntryDto](#schemasalesentrydto)|false|none|none|
|opCode|integer(int32)|false|none|1 - Create<br>2 - Update<br>3 - Delete|

#### Enumerated Values

|Property|Value|
|---|---|
|opCode|1|
|opCode|2|
|opCode|3|

<h2 id="tocS_BatchItem_SalesInvoiceCreditNoteDto_">BatchItem_SalesInvoiceCreditNoteDto_</h2>
<!-- backwards compatibility -->
<a id="schemabatchitem_salesinvoicecreditnotedto_"></a>
<a id="schema_BatchItem_SalesInvoiceCreditNoteDto_"></a>
<a id="tocSbatchitem_salesinvoicecreditnotedto_"></a>
<a id="tocsbatchitem_salesinvoicecreditnotedto_"></a>

```json
{
  "item": {
    "acCode": "CUS3",
    "bookTranTypeId": 7,
    "customFields": [
      {
        "description": "acudf_1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "acudfv_1"
      },
      {
        "description": "acudf_2",
        "id": 2,
        "userDefinedFieldId": 1,
        "value": "acudfv_2"
      }
    ],
    "customerId": 70585,
    "deliveryTo": [
      "dt_1",
      "dt_2"
    ],
    "details": "detail_1",
    "entryDate": "2016-06-01T00:00:00",
    "id": 75813,
    "loType": "1",
    "note": "Customer 3",
    "ourReference": "ddNumber_1",
    "procDate": "2016-06-24T00:00:00",
    "productTrans": [
      {
        "acEntries": [
          {
            "accountCode": "SA02",
            "analysisCategoryId": 40889,
            "description": "AnCat1",
            "id": 73455,
            "value": -200
          }
        ],
        "amount": -220,
        "amountNet": -200,
        "id": 51820,
        "percentage": 10,
        "productCode": "PRO2",
        "productId": 20108,
        "quantity": -1,
        "tranNotes": [
          "tn_1",
          "tn_2"
        ],
        "unitPrice": 200,
        "vat": -20,
        "vatAnalysisTypeId": 0,
        "vatRateId": 30657
      }
    ],
    "reference": "000001",
    "saleRepId": 33110,
    "timestamp": "oq6NcBIe2wg=",
    "total": -220,
    "totalNet": -200,
    "totalVAT": -20,
    "unpaid": -220,
    "vatTypeId": 1,
    "yourReference": "poNumber_1"
  },
  "opCode": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[SalesInvoiceCreditNoteDto](#schemasalesinvoicecreditnotedto)|false|none|none|
|opCode|integer(int32)|false|none|1 - Create<br>2 - Update<br>3 - Delete|

#### Enumerated Values

|Property|Value|
|---|---|
|opCode|1|
|opCode|2|
|opCode|3|

<h2 id="tocS_BatchItem_SupplierDto_">BatchItem_SupplierDto_</h2>
<!-- backwards compatibility -->
<a id="schemabatchitem_supplierdto_"></a>
<a id="schema_BatchItem_SupplierDto_"></a>
<a id="tocSbatchitem_supplierdto_"></a>
<a id="tocsbatchitem_supplierdto_"></a>

```json
{
  "item": {
    "accountName": "Supplier Bank Acc",
    "accountNumber": "12345678",
    "additionalEmails": [
      "email2@example.com",
      "email3@example.com"
    ],
    "address": [
      "Address Line 1",
      "Address Line 2"
    ],
    "authCode": "VATEXCODE222",
    "bank": {
      "branch": "Bank",
      "id": 1,
      "name": "bank Name",
      "sortCode": "B01"
    },
    "code": "S001",
    "contact": "John Smith",
    "eFTReference": "Reference",
    "email": "supplier@email.com",
    "fax": "1234567890",
    "id": 10589,
    "mobile": "1234567890",
    "name": "Supplier Name",
    "ourCode": "OURCODE111",
    "ownerTypeId": 3,
    "phone": "1234596970",
    "postponedAccounting": false,
    "timestamp": "4jeXcBIe2wg=",
    "vatAnalysisTypeId": 1,
    "vatReg": "VATCODE0001",
    "vatType": 2
  },
  "opCode": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item|[SupplierDto](#schemasupplierdto)|false|none|none|
|opCode|integer(int32)|false|none|1 - Create<br>2 - Update<br>3 - Delete|

#### Enumerated Values

|Property|Value|
|---|---|
|opCode|1|
|opCode|2|
|opCode|3|

<h2 id="tocS_BookTranTypeDto">BookTranTypeDto</h2>
<!-- backwards compatibility -->
<a id="schemabooktrantypedto"></a>
<a id="schema_BookTranTypeDto"></a>
<a id="tocSbooktrantypedto"></a>
<a id="tocsbooktrantypedto"></a>

```json
{
  "code": "string",
  "description": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|

<h2 id="tocS_CashPaymentDto">CashPaymentDto</h2>
<!-- backwards compatibility -->
<a id="schemacashpaymentdto"></a>
<a id="schema_CashPaymentDto"></a>
<a id="tocScashpaymentdto"></a>
<a id="tocscashpaymentdto"></a>

```json
{
  "acEntries": [
    {
      "accountCode": "CP01",
      "analysisCategoryId": 10433,
      "description": "Cash Pay 01",
      "id": 62741,
      "value": 200
    }
  ],
  "bankAccountCode": "BAK2",
  "bankAccountId": 11111,
  "bookTranTypeId": 2,
  "customFields": [],
  "detailCollection": [
    "test"
  ],
  "discount": 0,
  "entryDate": "2017-07-01T00:00:00",
  "id": 12345,
  "ledger": 100,
  "lodgement": 0,
  "note": "Supplier 1",
  "procDate": "2017-07-26T00:00:00",
  "supplierId": 70599,
  "timestamp": "+/0HcBIe2wg=",
  "total": 100
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|acEntries|[[AcEntryDto](#schemaacentrydto)]|false|none|none|
|bankAccountCode|string|false|none|none|
|bankAccountId|integer(int64)|false|none|none|
|bookTranTypeId|integer(int64)|false|none|none|
|customFields|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|none|
|detailCollection|[string]|false|none|none|
|discount|number(double)|false|none|none|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|ledger|number(double)|false|none|none|
|lodgement|number(double)|false|none|none|
|note|string|false|none|none|
|plaidTransactionId|string|false|none|none|
|procDate|string(date-time)|false|none|none|
|supplierId|integer(int64)|false|none|none|
|timestamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|

<h2 id="tocS_CashPaymentQueryDto">CashPaymentQueryDto</h2>
<!-- backwards compatibility -->
<a id="schemacashpaymentquerydto"></a>
<a id="schema_CashPaymentQueryDto"></a>
<a id="tocScashpaymentquerydto"></a>
<a id="tocscashpaymentquerydto"></a>

```json
{
  "acCode": "string",
  "acEntries": [
    {
      "accountCode": "string",
      "analysisCategoryId": 0,
      "description": "string",
      "id": 0,
      "value": 0
    }
  ],
  "bankAccountCode": "string",
  "bankAccountId": 0,
  "bookTranTypeId": 0,
  "customFields": [
    {
      "description": "string",
      "id": 0,
      "userDefinedFieldId": 0,
      "value": "string"
    }
  ],
  "detailCollection": [
    "string"
  ],
  "discount": 0,
  "entryDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "ledger": 0,
  "lodgement": 0,
  "note": "string",
  "plaidTransactionId": "string",
  "procDate": "1970-01-01T00:00:00Z",
  "supplierId": 0,
  "timestamp": "string",
  "total": 0,
  "unallocated": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|acEntries|[[AcEntryDto](#schemaacentrydto)]|false|none|none|
|bankAccountCode|string|false|none|none|
|bankAccountId|integer(int64)|false|none|none|
|bookTranTypeId|integer(int64)|false|none|none|
|customFields|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|none|
|detailCollection|[string]|false|none|none|
|discount|number(double)|false|none|none|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|ledger|number(double)|false|none|none|
|lodgement|number(double)|false|none|none|
|note|string|false|none|none|
|plaidTransactionId|string|false|none|none|
|procDate|string(date-time)|false|none|none|
|supplierId|integer(int64)|false|none|none|
|timestamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|
|unallocated|number(double)|false|none|none|

<h2 id="tocS_CashReceiptDto">CashReceiptDto</h2>
<!-- backwards compatibility -->
<a id="schemacashreceiptdto"></a>
<a id="schema_CashReceiptDto"></a>
<a id="tocScashreceiptdto"></a>
<a id="tocscashreceiptdto"></a>

```json
{
  "acEntries": [
    {
      "accountCode": "000",
      "analysisCategoryId": 1,
      "description": "AnCat1",
      "id": 1,
      "value": 30
    }
  ],
  "bookTranTypeId": 1,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    }
  ],
  "detailCollection": [
    "det_1",
    "det_2",
    "det_3"
  ],
  "discount": 0,
  "entryDate": "2011-01-01T00:00:00",
  "id": 1,
  "ledger": 0,
  "note": "note1",
  "procDate": "2011-01-05T00:00:00",
  "timestamp": "0OkTcBIe2wg=",
  "total": 50,
  "unallocated": 0,
  "vatEntries": [
    {
      "amount": 50,
      "id": 1,
      "percentage": 15,
      "vatRateId": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|acEntries|[[AcEntryDto](#schemaacentrydto)]|false|none|none|
|bookTranTypeId|integer(int64)|false|none|none|
|customFields|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|none|
|customerId|integer(int64)|false|none|none|
|detailCollection|[string]|false|none|none|
|discount|number(double)|false|none|none|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|ledger|number(double)|false|none|none|
|note|string|false|none|none|
|plaidTransactionId|string|false|none|none|
|procDate|string(date-time)|false|none|none|
|timestamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|
|unallocated|number(double)|false|none|none|
|vatEntries|[[VatEntryDto](#schemavatentrydto)]|false|none|none|
|vatTypeId|integer(int64)|false|none|none|

<h2 id="tocS_CashReceiptQueryDto">CashReceiptQueryDto</h2>
<!-- backwards compatibility -->
<a id="schemacashreceiptquerydto"></a>
<a id="schema_CashReceiptQueryDto"></a>
<a id="tocScashreceiptquerydto"></a>
<a id="tocscashreceiptquerydto"></a>

```json
{
  "acCode": "string",
  "acEntries": [
    {
      "accountCode": "string",
      "analysisCategoryId": 0,
      "description": "string",
      "id": 0,
      "value": 0
    }
  ],
  "bookTranTypeId": 0,
  "customFields": [
    {
      "description": "string",
      "id": 0,
      "userDefinedFieldId": 0,
      "value": "string"
    }
  ],
  "customerId": 0,
  "detailCollection": [
    "string"
  ],
  "discount": 0,
  "entryDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "ledger": 0,
  "note": "string",
  "plaidTransactionId": "string",
  "procDate": "1970-01-01T00:00:00Z",
  "timestamp": "string",
  "total": 0,
  "unallocated": 0,
  "vatEntries": [
    {
      "amount": 0,
      "id": 0,
      "percentage": 0,
      "vatRateId": 0
    }
  ],
  "vatTypeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|acEntries|[[AcEntryDto](#schemaacentrydto)]|false|none|none|
|bookTranTypeId|integer(int64)|false|none|none|
|customFields|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|none|
|customerId|integer(int64)|false|none|none|
|detailCollection|[string]|false|none|none|
|discount|number(double)|false|none|none|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|ledger|number(double)|false|none|none|
|note|string|false|none|none|
|plaidTransactionId|string|false|none|none|
|procDate|string(date-time)|false|none|none|
|timestamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|
|unallocated|number(double)|false|none|none|
|vatEntries|[[VatEntryDto](#schemavatentrydto)]|false|none|none|
|vatTypeId|integer(int64)|false|none|none|

<h2 id="tocS_CategoryTypeDto">CategoryTypeDto</h2>
<!-- backwards compatibility -->
<a id="schemacategorytypedto"></a>
<a id="schema_CategoryTypeDto"></a>
<a id="tocScategorytypedto"></a>
<a id="tocscategorytypedto"></a>

```json
{
  "description": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|

<h2 id="tocS_CompanyFinancialYearViewModel">CompanyFinancialYearViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacompanyfinancialyearviewmodel"></a>
<a id="schema_CompanyFinancialYearViewModel"></a>
<a id="tocScompanyfinancialyearviewmodel"></a>
<a id="tocscompanyfinancialyearviewmodel"></a>

```json
{
  "firstMonth": 0,
  "startMonth": 0,
  "startYear": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstMonth|integer(int32)|false|none|none|
|startMonth|integer(int32)|false|none|none|
|startYear|integer(int32)|false|none|none|

<h2 id="tocS_CompanyGeneralDetaisViewModel">CompanyGeneralDetaisViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacompanygeneraldetaisviewmodel"></a>
<a id="schema_CompanyGeneralDetaisViewModel"></a>
<a id="tocScompanygeneraldetaisviewmodel"></a>
<a id="tocscompanygeneraldetaisviewmodel"></a>

```json
{
  "companyAddresses": [
    "string"
  ],
  "companyName": "string",
  "currencyCode": "string",
  "currencyDescription": "string",
  "currencyId": 0,
  "currentcySymbol": "string",
  "emails": [
    "string"
  ],
  "faxes": [
    "string"
  ],
  "phones": [
    "string"
  ],
  "regionDescription": "string",
  "regionId": 0,
  "vatReg": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyAddresses|[string]|false|none|none|
|companyName|string|false|none|none|
|currencyCode|string|false|none|none|
|currencyDescription|string|false|none|none|
|currencyId|integer(int64)|false|none|none|
|currentcySymbol|string|false|none|none|
|emails|[string]|false|none|none|
|faxes|[string]|false|none|none|
|phones|[string]|false|none|none|
|regionDescription|string|false|none|none|
|regionId|integer(int64)|false|none|none|
|vatReg|string|false|none|none|

<h2 id="tocS_CompanyOptionDto">CompanyOptionDto</h2>
<!-- backwards compatibility -->
<a id="schemacompanyoptiondto"></a>
<a id="schema_CompanyOptionDto"></a>
<a id="tocScompanyoptiondto"></a>
<a id="tocscompanyoptiondto"></a>

```json
{
  "allowEntryOfGrossPriceInInvoicing": true,
  "creditInputForReverseChargeVAT": true,
  "creditNoteJournalAgeingName": "string",
  "creditNoteJournalAgeingValue": 0,
  "discrepancyAllowed": 0,
  "enableVOCRReporting": true,
  "marginVatScheme": true,
  "printOSItemsOnly": true,
  "purchasesVatAnalysisType": 0,
  "salesVatAnalysisType": 0,
  "useAllocations": true,
  "useNominal": true,
  "useNominalCode": true,
  "vocrSettingValue": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowEntryOfGrossPriceInInvoicing|boolean|false|none|none|
|creditInputForReverseChargeVAT|boolean|false|none|none|
|creditNoteJournalAgeingName|string|false|none|none|
|creditNoteJournalAgeingValue|integer(int32)|false|none|none|
|discrepancyAllowed|number(double)|false|none|none|
|enableVOCRReporting|boolean|false|none|none|
|marginVatScheme|boolean|false|none|none|
|printOSItemsOnly|boolean|false|none|none|
|purchasesVatAnalysisType|integer(int64)|false|none|none|
|salesVatAnalysisType|integer(int64)|false|none|none|
|useAllocations|boolean|false|none|none|
|useNominal|boolean|false|none|none|
|useNominalCode|boolean|false|none|none|
|vocrSettingValue|boolean|false|none|none|

<h2 id="tocS_CompanyOptionViewModel">CompanyOptionViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacompanyoptionviewmodel"></a>
<a id="schema_CompanyOptionViewModel"></a>
<a id="tocScompanyoptionviewmodel"></a>
<a id="tocscompanyoptionviewmodel"></a>

```json
{
  "allowEntryOfGrossPriceInInvoicing": true,
  "creditInputForReverseChargeVAT": true,
  "creditNoteJournalAgeingName": "string",
  "creditNoteJournalAgeingValue": 0,
  "discrepancyAllowed": 0,
  "enableVOCRReporting": true,
  "marginVatScheme": true,
  "printOSItemsOnly": true,
  "purchasesVatAnalysisType": 0,
  "salesVatAnalysisType": 0,
  "useAllocations": true,
  "useNominal": true,
  "useNominalCode": true,
  "vocrSettingValue": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowEntryOfGrossPriceInInvoicing|boolean|false|none|none|
|creditInputForReverseChargeVAT|boolean|false|none|none|
|creditNoteJournalAgeingName|string|false|none|none|
|creditNoteJournalAgeingValue|integer(int32)|false|none|none|
|discrepancyAllowed|number(double)|false|none|none|
|enableVOCRReporting|boolean|false|none|none|
|marginVatScheme|boolean|false|none|none|
|printOSItemsOnly|boolean|false|none|none|
|purchasesVatAnalysisType|integer(int64)|false|none|none|
|salesVatAnalysisType|integer(int64)|false|none|none|
|useAllocations|boolean|false|none|none|
|useNominal|boolean|false|none|none|
|useNominalCode|boolean|false|none|none|
|vocrSettingValue|boolean|false|none|none|

<h2 id="tocS_CompanyReferenceSettingViewModel">CompanyReferenceSettingViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacompanyreferencesettingviewmodel"></a>
<a id="schema_CompanyReferenceSettingViewModel"></a>
<a id="tocScompanyreferencesettingviewmodel"></a>
<a id="tocscompanyreferencesettingviewmodel"></a>

```json
{
  "creditorsJournal": true,
  "debtorsJournal": true,
  "purchases": true,
  "sales": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creditorsJournal|boolean|false|none|none|
|debtorsJournal|boolean|false|none|none|
|purchases|boolean|false|none|none|
|sales|boolean|false|none|none|

<h2 id="tocS_CompanySettingDto">CompanySettingDto</h2>
<!-- backwards compatibility -->
<a id="schemacompanysettingdto"></a>
<a id="schema_CompanySettingDto"></a>
<a id="tocScompanysettingdto"></a>
<a id="tocscompanysettingdto"></a>

```json
{
  "enableVOCRReporting": true,
  "id": 0,
  "useAllocations": true,
  "value": "string",
  "vocrSettingValue": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableVOCRReporting|boolean|false|none|none|
|id|integer(int64)|false|none|none|
|useAllocations|boolean|false|none|none|
|value|string|false|none|none|
|vocrSettingValue|boolean|false|none|none|

<h2 id="tocS_CompanySetupConfigViewModel">CompanySetupConfigViewModel</h2>
<!-- backwards compatibility -->
<a id="schemacompanysetupconfigviewmodel"></a>
<a id="schema_CompanySetupConfigViewModel"></a>
<a id="tocScompanysetupconfigviewmodel"></a>
<a id="tocscompanysetupconfigviewmodel"></a>

```json
{
  "financialYear": {
    "firstMonth": 0,
    "startMonth": 0,
    "startYear": 0
  },
  "generalDetails": {
    "companyAddresses": [
      "string"
    ],
    "companyName": "string",
    "currencyCode": "string",
    "currencyDescription": "string",
    "currencyId": 0,
    "currentcySymbol": "string",
    "emails": [
      "string"
    ],
    "faxes": [
      "string"
    ],
    "phones": [
      "string"
    ],
    "regionDescription": "string",
    "regionId": 0,
    "vatReg": "string"
  },
  "options": {
    "allowEntryOfGrossPriceInInvoicing": true,
    "creditInputForReverseChargeVAT": true,
    "creditNoteJournalAgeingName": "string",
    "creditNoteJournalAgeingValue": 0,
    "discrepancyAllowed": 0,
    "enableVOCRReporting": true,
    "marginVatScheme": true,
    "printOSItemsOnly": true,
    "purchasesVatAnalysisType": 0,
    "salesVatAnalysisType": 0,
    "useAllocations": true,
    "useNominal": true,
    "useNominalCode": true,
    "vocrSettingValue": true
  },
  "referenceSettings": {
    "creditorsJournal": true,
    "debtorsJournal": true,
    "purchases": true,
    "sales": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|financialYear|[CompanyFinancialYearViewModel](#schemacompanyfinancialyearviewmodel)|false|none|none|
|generalDetails|[CompanyGeneralDetaisViewModel](#schemacompanygeneraldetaisviewmodel)|false|none|none|
|options|[CompanyOptionViewModel](#schemacompanyoptionviewmodel)|false|none|none|
|referenceSettings|[CompanyReferenceSettingViewModel](#schemacompanyreferencesettingviewmodel)|false|none|none|

<h2 id="tocS_CustomerDto">CustomerDto</h2>
<!-- backwards compatibility -->
<a id="schemacustomerdto"></a>
<a id="schema_CustomerDto"></a>
<a id="tocScustomerdto"></a>
<a id="tocscustomerdto"></a>

```json
{
  "accountName": "",
  "accountNumber": "12345678",
  "additionalEmails": [
    "email2@example.com",
    "email3@example.com"
  ],
  "address": [
    "Address Line 1",
    "Address Line 2"
  ],
  "authCode": "VATEXCODE222",
  "bank": {
    "branch": "Bank",
    "id": 1,
    "name": "bank Name",
    "sortCode": "B01"
  },
  "businessIdentifierCode": "AIBI02",
  "code": "12345678",
  "contact": "John Smith",
  "delivery": [
    "Delivery 1",
    "Delivery 2"
  ],
  "eFTReference": "Reference",
  "email": "customer@email.com",
  "fax": "1234567890",
  "id": 10589,
  "internationalBankAccountNumber": "1233432532",
  "mobile": "1234567890",
  "name": "Customer Name 1",
  "ourCode": "OURCODE111",
  "ownerTypeId": 1,
  "phone": "1234596970",
  "timestamp": "GF8pcBIe2wg=",
  "vatAnalysisTypeId": 1,
  "vatReg": "VATCODE0001",
  "vatType": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|none|
|accountNumber|string|false|none|none|
|additionalEmails|[string]|false|none|none|
|address|[string]|false|none|none|
|authCode|string|false|none|none|
|bank|[EFTBankDto](#schemaeftbankdto)|false|none|none|
|businessIdentifierCode|string|false|none|none|
|code|string|false|none|none|
|contact|string|false|none|none|
|delivery|[string]|false|none|none|
|eFTReference|string|false|none|none|
|email|string|false|none|none|
|fax|string|false|none|none|
|id|integer(int64)|false|none|none|
|internationalBankAccountNumber|string|false|none|none|
|ledgerBalance|number(double)|false|none|none|
|mobile|string|false|none|none|
|name|string|false|none|none|
|openingBalance|[OwnerOpeningBalanceInPeriodsDto](#schemaowneropeningbalanceinperiodsdto)|false|none|none|
|openingBalances|[[OwnerOpeningBalanceDto](#schemaowneropeningbalancedto)]|false|none|none|
|ourCode|string|false|none|none|
|ownerTypeId|integer(int64)|false|none|none|
|phone|string|false|none|none|
|timestamp|string(byte)|false|none|none|
|vatAnalysisTypeId|integer(int64)|false|none|none|
|vatReg|string|false|none|none|
|vatType|integer(int64)|false|none|none|

<h2 id="tocS_CustomerQueryDto">CustomerQueryDto</h2>
<!-- backwards compatibility -->
<a id="schemacustomerquerydto"></a>
<a id="schema_CustomerQueryDto"></a>
<a id="tocScustomerquerydto"></a>
<a id="tocscustomerquerydto"></a>

```json
{
  "accountName": "string",
  "accountNumber": "string",
  "additionalEmails": [
    "string"
  ],
  "address": [
    "string"
  ],
  "authCode": "string",
  "bank": {
    "branch": "string",
    "id": 0,
    "name": "string",
    "sortCode": "string"
  },
  "businessIdentifierCode": "string",
  "code": "string",
  "contact": "string",
  "delivery": [
    "string"
  ],
  "eFTReference": "string",
  "email": "string",
  "fax": "string",
  "id": 0,
  "internationalBankAccountNumber": "string",
  "mobile": "string",
  "name": "string",
  "ourCode": "string",
  "ownerTypeId": 0,
  "phone": "string",
  "timestamp": "string",
  "vatAnalysisTypeId": 0,
  "vatReg": "string",
  "vatType": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|none|
|accountNumber|string|false|none|none|
|additionalEmails|[string]|false|none|none|
|address|[string]|false|none|none|
|authCode|string|false|none|none|
|bank|[EFTBankDto](#schemaeftbankdto)|false|none|none|
|businessIdentifierCode|string|false|none|none|
|code|string|false|none|none|
|contact|string|false|none|none|
|delivery|[string]|false|none|none|
|eFTReference|string|false|none|none|
|email|string|false|none|none|
|fax|string|false|none|none|
|id|integer(int64)|false|none|none|
|internationalBankAccountNumber|string|false|none|none|
|mobile|string|false|none|none|
|name|string|false|none|none|
|ourCode|string|false|none|none|
|ownerTypeId|integer(int64)|false|none|none|
|phone|string|false|none|none|
|timestamp|string(byte)|false|none|none|
|vatAnalysisTypeId|integer(int64)|false|none|none|
|vatReg|string|false|none|none|
|vatType|integer(int64)|false|none|none|

<h2 id="tocS_EFTBankDto">EFTBankDto</h2>
<!-- backwards compatibility -->
<a id="schemaeftbankdto"></a>
<a id="schema_EFTBankDto"></a>
<a id="tocSeftbankdto"></a>
<a id="tocseftbankdto"></a>

```json
{
  "branch": "string",
  "id": 0,
  "name": "string",
  "sortCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|string|false|none|none|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|sortCode|string|false|none|none|

<h2 id="tocS_EmailQuoteDto">EmailQuoteDto</h2>
<!-- backwards compatibility -->
<a id="schemaemailquotedto"></a>
<a id="schema_EmailQuoteDto"></a>
<a id="tocSemailquotedto"></a>
<a id="tocsemailquotedto"></a>

```json
{
  "bccAddresses": [
    "bcc1@email.com",
    "bcc2@email.com",
    "bcc3@email.com"
  ],
  "messageBody": "Email message",
  "quoteId": 1,
  "toAddress": "to@email.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bccAddresses|[string]|false|none|none|
|messageBody|string|false|none|none|
|quoteId|integer(int64)|false|none|none|
|toAddress|string|false|none|none|

<h2 id="tocS_EmailStatementDto">EmailStatementDto</h2>
<!-- backwards compatibility -->
<a id="schemaemailstatementdto"></a>
<a id="schema_EmailStatementDto"></a>
<a id="tocSemailstatementdto"></a>
<a id="tocsemailstatementdto"></a>

```json
{
  "bccAddresses": [
    "bcc1@email.com",
    "bcc2@email.com",
    "bcc3@email.com"
  ],
  "customerId": 1,
  "fromPeriod": "2016-04-07T00:00:00",
  "messageBody": "Email message",
  "minimumBalance": 4,
  "toAddress": "to@email.com",
  "toPeriod": "2016-06-07T00:00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bccAddresses|[string]|false|none|none|
|customerId|integer(int64)|false|none|none|
|fromPeriod|string(date-time)|false|none|none|
|messageBody|string|false|none|none|
|minimumBalance|number(double)|false|none|none|
|toAddress|string|false|none|none|
|toPeriod|string(date-time)|false|none|none|

<h2 id="tocS_FilterClause">FilterClause</h2>
<!-- backwards compatibility -->
<a id="schemafilterclause"></a>
<a id="schema_FilterClause"></a>
<a id="tocSfilterclause"></a>
<a id="tocsfilterclause"></a>

```json
{
  "Expression": {
    "Kind": 0,
    "TypeReference": {
      "Definition": {
        "TypeKind": 0
      },
      "IsNullable": true
    }
  },
  "ItemType": {
    "Definition": {
      "TypeKind": 0
    },
    "IsNullable": true
  },
  "RangeVariable": {
    "Kind": 0,
    "Name": "string",
    "TypeReference": {
      "Definition": {
        "TypeKind": 0
      },
      "IsNullable": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expression|[SingleValueNode](#schemasinglevaluenode)|false|none|none|
|ItemType|[IEdmTypeReference](#schemaiedmtypereference)|false|none|none|
|RangeVariable|[RangeVariable](#schemarangevariable)|false|none|none|

<h2 id="tocS_FilterQueryOption">FilterQueryOption</h2>
<!-- backwards compatibility -->
<a id="schemafilterqueryoption"></a>
<a id="schema_FilterQueryOption"></a>
<a id="tocSfilterqueryoption"></a>
<a id="tocsfilterqueryoption"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "FilterClause": {
    "Expression": {
      "Kind": 0,
      "TypeReference": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      }
    },
    "ItemType": {
      "Definition": {
        "TypeKind": 0
      },
      "IsNullable": true
    },
    "RangeVariable": {
      "Kind": 0,
      "Name": "string",
      "TypeReference": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      }
    }
  },
  "RawValue": "string",
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|FilterClause|[FilterClause](#schemafilterclause)|false|none|none|
|RawValue|string|false|read-only|none|
|Validator|[FilterQueryValidator](#schemafilterqueryvalidator)|false|none|none|

<h2 id="tocS_FilterQueryValidator">FilterQueryValidator</h2>
<!-- backwards compatibility -->
<a id="schemafilterqueryvalidator"></a>
<a id="schema_FilterQueryValidator"></a>
<a id="tocSfilterqueryvalidator"></a>
<a id="tocsfilterqueryvalidator"></a>

```json
{}
```

<h2 id="tocS_FinancialYearDto">FinancialYearDto</h2>
<!-- backwards compatibility -->
<a id="schemafinancialyeardto"></a>
<a id="schema_FinancialYearDto"></a>
<a id="tocSfinancialyeardto"></a>
<a id="tocsfinancialyeardto"></a>

```json
{
  "firstMonth": 0,
  "startMonth": 0,
  "startYear": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstMonth|integer(int32)|false|none|none|
|startMonth|integer(int32)|false|none|none|
|startYear|integer(int32)|false|none|none|

<h2 id="tocS_IEdmDirectValueAnnotationsManager">IEdmDirectValueAnnotationsManager</h2>
<!-- backwards compatibility -->
<a id="schemaiedmdirectvalueannotationsmanager"></a>
<a id="schema_IEdmDirectValueAnnotationsManager"></a>
<a id="tocSiedmdirectvalueannotationsmanager"></a>
<a id="tocsiedmdirectvalueannotationsmanager"></a>

```json
{}
```

<h2 id="tocS_IEdmModel">IEdmModel</h2>
<!-- backwards compatibility -->
<a id="schemaiedmmodel"></a>
<a id="schema_IEdmModel"></a>
<a id="tocSiedmmodel"></a>
<a id="tocsiedmmodel"></a>

```json
{
  "DirectValueAnnotationsManager": {},
  "ReferencedModels": [
    {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  ],
  "SchemaElements": [
    {
      "Name": "string",
      "Namespace": "string",
      "SchemaElementKind": 0
    }
  ],
  "VocabularyAnnotations": [
    {
      "Qualifier": "string",
      "Target": {},
      "Term": {
        "Name": "string",
        "Namespace": "string",
        "SchemaElementKind": 0,
        "TermKind": 0
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectValueAnnotationsManager|[IEdmDirectValueAnnotationsManager](#schemaiedmdirectvalueannotationsmanager)|false|none|none|
|ReferencedModels|[[IEdmModel](#schemaiedmmodel)]|false|read-only|none|
|SchemaElements|[[IEdmSchemaElement](#schemaiedmschemaelement)]|false|read-only|none|
|VocabularyAnnotations|[[IEdmVocabularyAnnotation](#schemaiedmvocabularyannotation)]|false|read-only|none|

<h2 id="tocS_IEdmSchemaElement">IEdmSchemaElement</h2>
<!-- backwards compatibility -->
<a id="schemaiedmschemaelement"></a>
<a id="schema_IEdmSchemaElement"></a>
<a id="tocSiedmschemaelement"></a>
<a id="tocsiedmschemaelement"></a>

```json
{
  "Name": "string",
  "Namespace": "string",
  "SchemaElementKind": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|read-only|none|
|Namespace|string|false|read-only|none|
|SchemaElementKind|integer(int32)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|SchemaElementKind|0|
|SchemaElementKind|1|
|SchemaElementKind|2|
|SchemaElementKind|3|
|SchemaElementKind|4|

<h2 id="tocS_IEdmTerm">IEdmTerm</h2>
<!-- backwards compatibility -->
<a id="schemaiedmterm"></a>
<a id="schema_IEdmTerm"></a>
<a id="tocSiedmterm"></a>
<a id="tocsiedmterm"></a>

```json
{
  "Name": "string",
  "Namespace": "string",
  "SchemaElementKind": 0,
  "TermKind": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|read-only|none|
|Namespace|string|false|read-only|none|
|SchemaElementKind|integer(int32)|false|read-only|none|
|TermKind|integer(int32)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|SchemaElementKind|0|
|SchemaElementKind|1|
|SchemaElementKind|2|
|SchemaElementKind|3|
|SchemaElementKind|4|
|TermKind|0|
|TermKind|1|
|TermKind|2|

<h2 id="tocS_IEdmType">IEdmType</h2>
<!-- backwards compatibility -->
<a id="schemaiedmtype"></a>
<a id="schema_IEdmType"></a>
<a id="tocSiedmtype"></a>
<a id="tocsiedmtype"></a>

```json
{
  "TypeKind": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TypeKind|integer(int32)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|TypeKind|0|
|TypeKind|1|
|TypeKind|2|
|TypeKind|3|
|TypeKind|4|
|TypeKind|5|
|TypeKind|6|
|TypeKind|7|

<h2 id="tocS_IEdmTypeReference">IEdmTypeReference</h2>
<!-- backwards compatibility -->
<a id="schemaiedmtypereference"></a>
<a id="schema_IEdmTypeReference"></a>
<a id="tocSiedmtypereference"></a>
<a id="tocsiedmtypereference"></a>

```json
{
  "Definition": {
    "TypeKind": 0
  },
  "IsNullable": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Definition|[IEdmType](#schemaiedmtype)|false|none|none|
|IsNullable|boolean|false|read-only|none|

<h2 id="tocS_IEdmVocabularyAnnotatable">IEdmVocabularyAnnotatable</h2>
<!-- backwards compatibility -->
<a id="schemaiedmvocabularyannotatable"></a>
<a id="schema_IEdmVocabularyAnnotatable"></a>
<a id="tocSiedmvocabularyannotatable"></a>
<a id="tocsiedmvocabularyannotatable"></a>

```json
{}
```

<h2 id="tocS_IEdmVocabularyAnnotation">IEdmVocabularyAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemaiedmvocabularyannotation"></a>
<a id="schema_IEdmVocabularyAnnotation"></a>
<a id="tocSiedmvocabularyannotation"></a>
<a id="tocsiedmvocabularyannotation"></a>

```json
{
  "Qualifier": "string",
  "Target": {},
  "Term": {
    "Name": "string",
    "Namespace": "string",
    "SchemaElementKind": 0,
    "TermKind": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Qualifier|string|false|read-only|none|
|Target|[IEdmVocabularyAnnotatable](#schemaiedmvocabularyannotatable)|false|none|none|
|Term|[IEdmTerm](#schemaiedmterm)|false|none|none|

<h2 id="tocS_InlineCountQueryOption">InlineCountQueryOption</h2>
<!-- backwards compatibility -->
<a id="schemainlinecountqueryoption"></a>
<a id="schema_InlineCountQueryOption"></a>
<a id="tocSinlinecountqueryoption"></a>
<a id="tocsinlinecountqueryoption"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "RawValue": "string",
  "Value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|RawValue|string|false|read-only|none|
|Value|integer(int32)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Value|0|
|Value|1|

<h2 id="tocS_ODataQueryContext">ODataQueryContext</h2>
<!-- backwards compatibility -->
<a id="schemaodataquerycontext"></a>
<a id="schema_ODataQueryContext"></a>
<a id="tocSodataquerycontext"></a>
<a id="tocsodataquerycontext"></a>

```json
{
  "ElementClrType": "string",
  "ElementType": {
    "TypeKind": 0
  },
  "Model": {
    "DirectValueAnnotationsManager": {},
    "ReferencedModels": [
      {}
    ],
    "SchemaElements": [
      {
        "Name": "string",
        "Namespace": "string",
        "SchemaElementKind": 0
      }
    ],
    "VocabularyAnnotations": [
      {
        "Qualifier": "string",
        "Target": {},
        "Term": {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0,
          "TermKind": 0
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElementClrType|string|false|read-only|none|
|ElementType|[IEdmType](#schemaiedmtype)|false|none|none|
|Model|[IEdmModel](#schemaiedmmodel)|false|none|none|

<h2 id="tocS_ODataQueryOptions_AccountDto_">ODataQueryOptions_AccountDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_accountdto_"></a>
<a id="schema_ODataQueryOptions_AccountDto_"></a>
<a id="tocSodataqueryoptions_accountdto_"></a>
<a id="tocsodataqueryoptions_accountdto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_AnalysisCategoryDto_">ODataQueryOptions_AnalysisCategoryDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_analysiscategorydto_"></a>
<a id="schema_ODataQueryOptions_AnalysisCategoryDto_"></a>
<a id="tocSodataqueryoptions_analysiscategorydto_"></a>
<a id="tocsodataqueryoptions_analysiscategorydto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_BankAccountQueryDto_">ODataQueryOptions_BankAccountQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_bankaccountquerydto_"></a>
<a id="schema_ODataQueryOptions_BankAccountQueryDto_"></a>
<a id="tocSodataqueryoptions_bankaccountquerydto_"></a>
<a id="tocsodataqueryoptions_bankaccountquerydto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_BookTranTypeDto_">ODataQueryOptions_BookTranTypeDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_booktrantypedto_"></a>
<a id="schema_ODataQueryOptions_BookTranTypeDto_"></a>
<a id="tocSodataqueryoptions_booktrantypedto_"></a>
<a id="tocsodataqueryoptions_booktrantypedto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_CashPaymentQueryDto_">ODataQueryOptions_CashPaymentQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_cashpaymentquerydto_"></a>
<a id="schema_ODataQueryOptions_CashPaymentQueryDto_"></a>
<a id="tocSodataqueryoptions_cashpaymentquerydto_"></a>
<a id="tocsodataqueryoptions_cashpaymentquerydto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_CashReceiptQueryDto_">ODataQueryOptions_CashReceiptQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_cashreceiptquerydto_"></a>
<a id="schema_ODataQueryOptions_CashReceiptQueryDto_"></a>
<a id="tocSodataqueryoptions_cashreceiptquerydto_"></a>
<a id="tocsodataqueryoptions_cashreceiptquerydto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_CategoryTypeDto_">ODataQueryOptions_CategoryTypeDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_categorytypedto_"></a>
<a id="schema_ODataQueryOptions_CategoryTypeDto_"></a>
<a id="tocSodataqueryoptions_categorytypedto_"></a>
<a id="tocsodataqueryoptions_categorytypedto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_CompanySettingDto_">ODataQueryOptions_CompanySettingDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_companysettingdto_"></a>
<a id="schema_ODataQueryOptions_CompanySettingDto_"></a>
<a id="tocSodataqueryoptions_companysettingdto_"></a>
<a id="tocsodataqueryoptions_companysettingdto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_CustomerQueryDto_">ODataQueryOptions_CustomerQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_customerquerydto_"></a>
<a id="schema_ODataQueryOptions_CustomerQueryDto_"></a>
<a id="tocSodataqueryoptions_customerquerydto_"></a>
<a id="tocsodataqueryoptions_customerquerydto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_OwnerTypeDto_">ODataQueryOptions_OwnerTypeDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_ownertypedto_"></a>
<a id="schema_ODataQueryOptions_OwnerTypeDto_"></a>
<a id="tocSodataqueryoptions_ownertypedto_"></a>
<a id="tocsodataqueryoptions_ownertypedto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_OwnerTypeGroupDto_">ODataQueryOptions_OwnerTypeGroupDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_ownertypegroupdto_"></a>
<a id="schema_ODataQueryOptions_OwnerTypeGroupDto_"></a>
<a id="tocSodataqueryoptions_ownertypegroupdto_"></a>
<a id="tocsodataqueryoptions_ownertypegroupdto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_PaymentQueryDto_">ODataQueryOptions_PaymentQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_paymentquerydto_"></a>
<a id="schema_ODataQueryOptions_PaymentQueryDto_"></a>
<a id="tocSodataqueryoptions_paymentquerydto_"></a>
<a id="tocsodataqueryoptions_paymentquerydto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_ProductDto_">ODataQueryOptions_ProductDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_productdto_"></a>
<a id="schema_ODataQueryOptions_ProductDto_"></a>
<a id="tocSodataqueryoptions_productdto_"></a>
<a id="tocsodataqueryoptions_productdto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_PurchaseQueryDto_">ODataQueryOptions_PurchaseQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_purchasequerydto_"></a>
<a id="schema_ODataQueryOptions_PurchaseQueryDto_"></a>
<a id="tocSodataqueryoptions_purchasequerydto_"></a>
<a id="tocsodataqueryoptions_purchasequerydto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_QuoteDto_">ODataQueryOptions_QuoteDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_quotedto_"></a>
<a id="schema_ODataQueryOptions_QuoteDto_"></a>
<a id="tocSodataqueryoptions_quotedto_"></a>
<a id="tocsodataqueryoptions_quotedto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_SaleRepsDto_">ODataQueryOptions_SaleRepsDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_salerepsdto_"></a>
<a id="schema_ODataQueryOptions_SaleRepsDto_"></a>
<a id="tocSodataqueryoptions_salerepsdto_"></a>
<a id="tocsodataqueryoptions_salerepsdto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_SalesCreditNoteQueryDto_">ODataQueryOptions_SalesCreditNoteQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_salescreditnotequerydto_"></a>
<a id="schema_ODataQueryOptions_SalesCreditNoteQueryDto_"></a>
<a id="tocSodataqueryoptions_salescreditnotequerydto_"></a>
<a id="tocsodataqueryoptions_salescreditnotequerydto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_SalesEntryQueryDto_">ODataQueryOptions_SalesEntryQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_salesentryquerydto_"></a>
<a id="schema_ODataQueryOptions_SalesEntryQueryDto_"></a>
<a id="tocSodataqueryoptions_salesentryquerydto_"></a>
<a id="tocsodataqueryoptions_salesentryquerydto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_SalesInvoiceQueryDto_">ODataQueryOptions_SalesInvoiceQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_salesinvoicequerydto_"></a>
<a id="schema_ODataQueryOptions_SalesInvoiceQueryDto_"></a>
<a id="tocSodataqueryoptions_salesinvoicequerydto_"></a>
<a id="tocsodataqueryoptions_salesinvoicequerydto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_SalesQueryDto_">ODataQueryOptions_SalesQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_salesquerydto_"></a>
<a id="schema_ODataQueryOptions_SalesQueryDto_"></a>
<a id="tocSodataqueryoptions_salesquerydto_"></a>
<a id="tocsodataqueryoptions_salesquerydto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_SupplierQueryDto_">ODataQueryOptions_SupplierQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_supplierquerydto_"></a>
<a id="schema_ODataQueryOptions_SupplierQueryDto_"></a>
<a id="tocSodataqueryoptions_supplierquerydto_"></a>
<a id="tocsodataqueryoptions_supplierquerydto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_UserDefinedFieldDto_">ODataQueryOptions_UserDefinedFieldDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_userdefinedfielddto_"></a>
<a id="schema_ODataQueryOptions_UserDefinedFieldDto_"></a>
<a id="tocSodataqueryoptions_userdefinedfielddto_"></a>
<a id="tocsodataqueryoptions_userdefinedfielddto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_VatAnalysisTypeDto_">ODataQueryOptions_VatAnalysisTypeDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_vatanalysistypedto_"></a>
<a id="schema_ODataQueryOptions_VatAnalysisTypeDto_"></a>
<a id="tocSodataqueryoptions_vatanalysistypedto_"></a>
<a id="tocsodataqueryoptions_vatanalysistypedto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_VatCategoryDto_">ODataQueryOptions_VatCategoryDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_vatcategorydto_"></a>
<a id="schema_ODataQueryOptions_VatCategoryDto_"></a>
<a id="tocSodataqueryoptions_vatcategorydto_"></a>
<a id="tocsodataqueryoptions_vatcategorydto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_VatRateDto_">ODataQueryOptions_VatRateDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_vatratedto_"></a>
<a id="schema_ODataQueryOptions_VatRateDto_"></a>
<a id="tocSodataqueryoptions_vatratedto_"></a>
<a id="tocsodataqueryoptions_vatratedto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryOptions_VatTypeDto_">ODataQueryOptions_VatTypeDto_</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryoptions_vattypedto_"></a>
<a id="schema_ODataQueryOptions_VatTypeDto_"></a>
<a id="tocSodataqueryoptions_vattypedto_"></a>
<a id="tocsodataqueryoptions_vattypedto_"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "Filter": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "FilterClause": {
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      }
    },
    "RawValue": "string",
    "Validator": {}
  },
  "IfMatch": {},
  "IfNoneMatch": {},
  "InlineCount": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Value": 0
  },
  "OrderBy": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "OrderByClause": {
      "Direction": 0,
      "Expression": {
        "Kind": 0,
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ItemType": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      },
      "RangeVariable": {
        "Kind": 0,
        "Name": "string",
        "TypeReference": {
          "Definition": {
            "TypeKind": 0
          },
          "IsNullable": true
        }
      },
      "ThenBy": {}
    },
    "OrderByNodes": [
      {
        "Direction": 0
      }
    ],
    "RawValue": "string",
    "Validator": {}
  },
  "RawValues": {
    "Expand": "string",
    "Filter": "string",
    "Format": "string",
    "InlineCount": "string",
    "OrderBy": "string",
    "Select": "string",
    "Skip": "string",
    "SkipToken": "string",
    "Top": "string"
  },
  "Request": {},
  "SelectExpand": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawExpand": "string",
    "RawSelect": "string",
    "SelectExpandClause": {
      "AllSelected": true,
      "SelectedItems": [
        {}
      ]
    },
    "Validator": {}
  },
  "Skip": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Top": {
    "Context": {
      "ElementClrType": "string",
      "ElementType": {
        "TypeKind": 0
      },
      "Model": {
        "DirectValueAnnotationsManager": {},
        "ReferencedModels": [
          {}
        ],
        "SchemaElements": [
          {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0
          }
        ],
        "VocabularyAnnotations": [
          {
            "Qualifier": "string",
            "Target": {},
            "Term": {
              "Name": "string",
              "Namespace": "string",
              "SchemaElementKind": 0,
              "TermKind": 0
            }
          }
        ]
      }
    },
    "RawValue": "string",
    "Validator": {},
    "Value": 0
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|Filter|[FilterQueryOption](#schemafilterqueryoption)|false|none|none|
|IfMatch|object|false|read-only|none|
|IfNoneMatch|object|false|read-only|none|
|InlineCount|[InlineCountQueryOption](#schemainlinecountqueryoption)|false|none|none|
|OrderBy|[OrderByQueryOption](#schemaorderbyqueryoption)|false|none|none|
|RawValues|[ODataRawQueryOptions](#schemaodatarawqueryoptions)|false|none|none|
|Request|object|false|read-only|none|
|SelectExpand|[SelectExpandQueryOption](#schemaselectexpandqueryoption)|false|none|none|
|Skip|[SkipQueryOption](#schemaskipqueryoption)|false|none|none|
|Top|[TopQueryOption](#schematopqueryoption)|false|none|none|
|Validator|[ODataQueryValidator](#schemaodataqueryvalidator)|false|none|none|

<h2 id="tocS_ODataQueryValidator">ODataQueryValidator</h2>
<!-- backwards compatibility -->
<a id="schemaodataqueryvalidator"></a>
<a id="schema_ODataQueryValidator"></a>
<a id="tocSodataqueryvalidator"></a>
<a id="tocsodataqueryvalidator"></a>

```json
{}
```

<h2 id="tocS_ODataRawQueryOptions">ODataRawQueryOptions</h2>
<!-- backwards compatibility -->
<a id="schemaodatarawqueryoptions"></a>
<a id="schema_ODataRawQueryOptions"></a>
<a id="tocSodatarawqueryoptions"></a>
<a id="tocsodatarawqueryoptions"></a>

```json
{
  "Expand": "string",
  "Filter": "string",
  "Format": "string",
  "InlineCount": "string",
  "OrderBy": "string",
  "Select": "string",
  "Skip": "string",
  "SkipToken": "string",
  "Top": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Expand|string|false|read-only|none|
|Filter|string|false|read-only|none|
|Format|string|false|read-only|none|
|InlineCount|string|false|read-only|none|
|OrderBy|string|false|read-only|none|
|Select|string|false|read-only|none|
|Skip|string|false|read-only|none|
|SkipToken|string|false|read-only|none|
|Top|string|false|read-only|none|

<h2 id="tocS_OrderByClause">OrderByClause</h2>
<!-- backwards compatibility -->
<a id="schemaorderbyclause"></a>
<a id="schema_OrderByClause"></a>
<a id="tocSorderbyclause"></a>
<a id="tocsorderbyclause"></a>

```json
{
  "Direction": 0,
  "Expression": {
    "Kind": 0,
    "TypeReference": {
      "Definition": {
        "TypeKind": 0
      },
      "IsNullable": true
    }
  },
  "ItemType": {
    "Definition": {
      "TypeKind": 0
    },
    "IsNullable": true
  },
  "RangeVariable": {
    "Kind": 0,
    "Name": "string",
    "TypeReference": {
      "Definition": {
        "TypeKind": 0
      },
      "IsNullable": true
    }
  },
  "ThenBy": {
    "Direction": 0,
    "Expression": {
      "Kind": 0,
      "TypeReference": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      }
    },
    "ItemType": {
      "Definition": {
        "TypeKind": 0
      },
      "IsNullable": true
    },
    "RangeVariable": {
      "Kind": 0,
      "Name": "string",
      "TypeReference": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      }
    },
    "ThenBy": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Direction|integer(int32)|false|read-only|none|
|Expression|[SingleValueNode](#schemasinglevaluenode)|false|none|none|
|ItemType|[IEdmTypeReference](#schemaiedmtypereference)|false|none|none|
|RangeVariable|[RangeVariable](#schemarangevariable)|false|none|none|
|ThenBy|[OrderByClause](#schemaorderbyclause)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Direction|0|
|Direction|1|

<h2 id="tocS_OrderByNode">OrderByNode</h2>
<!-- backwards compatibility -->
<a id="schemaorderbynode"></a>
<a id="schema_OrderByNode"></a>
<a id="tocSorderbynode"></a>
<a id="tocsorderbynode"></a>

```json
{
  "Direction": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Direction|integer(int32)|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Direction|0|
|Direction|1|

<h2 id="tocS_OrderByQueryOption">OrderByQueryOption</h2>
<!-- backwards compatibility -->
<a id="schemaorderbyqueryoption"></a>
<a id="schema_OrderByQueryOption"></a>
<a id="tocSorderbyqueryoption"></a>
<a id="tocsorderbyqueryoption"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "OrderByClause": {
    "Direction": 0,
    "Expression": {
      "Kind": 0,
      "TypeReference": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      }
    },
    "ItemType": {
      "Definition": {
        "TypeKind": 0
      },
      "IsNullable": true
    },
    "RangeVariable": {
      "Kind": 0,
      "Name": "string",
      "TypeReference": {
        "Definition": {
          "TypeKind": 0
        },
        "IsNullable": true
      }
    },
    "ThenBy": {}
  },
  "OrderByNodes": [
    {
      "Direction": 0
    }
  ],
  "RawValue": "string",
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|OrderByClause|[OrderByClause](#schemaorderbyclause)|false|none|none|
|OrderByNodes|[[OrderByNode](#schemaorderbynode)]|false|read-only|none|
|RawValue|string|false|read-only|none|
|Validator|[OrderByQueryValidator](#schemaorderbyqueryvalidator)|false|none|none|

<h2 id="tocS_OrderByQueryValidator">OrderByQueryValidator</h2>
<!-- backwards compatibility -->
<a id="schemaorderbyqueryvalidator"></a>
<a id="schema_OrderByQueryValidator"></a>
<a id="tocSorderbyqueryvalidator"></a>
<a id="tocsorderbyqueryvalidator"></a>

```json
{}
```

<h2 id="tocS_OwnerOpeningBalanceDto">OwnerOpeningBalanceDto</h2>
<!-- backwards compatibility -->
<a id="schemaowneropeningbalancedto"></a>
<a id="schema_OwnerOpeningBalanceDto"></a>
<a id="tocSowneropeningbalancedto"></a>
<a id="tocsowneropeningbalancedto"></a>

```json
{
  "entryDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "isChanged": true,
  "procDate": "1970-01-01T00:00:00Z",
  "reference": "string",
  "timestamp": "string",
  "total": 0,
  "totalVAT": 0,
  "unpaid": 0,
  "vatEntries": [
    {
      "amount": 0,
      "vatRateId": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|isChanged|boolean|false|none|none|
|procDate|string(date-time)|false|none|none|
|reference|string|false|none|none|
|timestamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|
|totalVAT|number(double)|false|none|none|
|unpaid|number(double)|false|none|none|
|vatEntries|[[OwnerOpeningBalanceVatEntryDto](#schemaowneropeningbalancevatentrydto)]|false|none|none|

<h2 id="tocS_OwnerOpeningBalanceInPeriodsDto">OwnerOpeningBalanceInPeriodsDto</h2>
<!-- backwards compatibility -->
<a id="schemaowneropeningbalanceinperiodsdto"></a>
<a id="schema_OwnerOpeningBalanceInPeriodsDto"></a>
<a id="tocSowneropeningbalanceinperiodsdto"></a>
<a id="tocsowneropeningbalanceinperiodsdto"></a>

```json
{
  "currentMonth": 0,
  "oneMonthOld": 0,
  "threeMonthsOld": 0,
  "twoMonthsOld": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentMonth|number(double)|false|none|none|
|oneMonthOld|number(double)|false|none|none|
|threeMonthsOld|number(double)|false|none|none|
|twoMonthsOld|number(double)|false|none|none|

<h2 id="tocS_OwnerOpeningBalanceVatEntryDto">OwnerOpeningBalanceVatEntryDto</h2>
<!-- backwards compatibility -->
<a id="schemaowneropeningbalancevatentrydto"></a>
<a id="schema_OwnerOpeningBalanceVatEntryDto"></a>
<a id="tocSowneropeningbalancevatentrydto"></a>
<a id="tocsowneropeningbalancevatentrydto"></a>

```json
{
  "amount": 0,
  "vatRateId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|false|none|none|
|vatRateId|integer(int64)|false|none|none|

<h2 id="tocS_OwnerTypeDto">OwnerTypeDto</h2>
<!-- backwards compatibility -->
<a id="schemaownertypedto"></a>
<a id="schema_OwnerTypeDto"></a>
<a id="tocSownertypedto"></a>
<a id="tocsownertypedto"></a>

```json
{
  "description": "string",
  "id": 0,
  "recordTypeGroupId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|recordTypeGroupId|integer(int64)|false|none|none|

<h2 id="tocS_OwnerTypeGroupDto">OwnerTypeGroupDto</h2>
<!-- backwards compatibility -->
<a id="schemaownertypegroupdto"></a>
<a id="schema_OwnerTypeGroupDto"></a>
<a id="tocSownertypegroupdto"></a>
<a id="tocsownertypegroupdto"></a>

```json
{
  "description": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|

<h2 id="tocS_PageResult_AccountDto_">PageResult_AccountDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_accountdto_"></a>
<a id="schema_PageResult_AccountDto_"></a>
<a id="tocSpageresult_accountdto_"></a>
<a id="tocspageresult_accountdto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "accountGroup": "string",
      "accountType": "string",
      "code": "string",
      "description": "string",
      "id": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[AccountDto](#schemaaccountdto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_AnalysisCategoryDto_">PageResult_AnalysisCategoryDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_analysiscategorydto_"></a>
<a id="schema_PageResult_AnalysisCategoryDto_"></a>
<a id="tocSpageresult_analysiscategorydto_"></a>
<a id="tocspageresult_analysiscategorydto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "accountCode": "string",
      "accountId": 0,
      "categoryTypeId": 0,
      "description": "string",
      "id": 0,
      "orderIndex": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[AnalysisCategoryDto](#schemaanalysiscategorydto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_BankAccountQueryDto_">PageResult_BankAccountQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_bankaccountquerydto_"></a>
<a id="schema_PageResult_BankAccountQueryDto_"></a>
<a id="tocSpageresult_bankaccountquerydto_"></a>
<a id="tocspageresult_bankaccountquerydto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "acCode": "string",
      "accountName": "string",
      "accountNumber": "string",
      "address": [
        "string"
      ],
      "bankFeedSource": 0,
      "businessIdentifierCodes": "string",
      "categoryId": 0,
      "creditorScheme": "string",
      "details": "string",
      "id": 0,
      "internationalBankAccountNumber": "string",
      "isDefaultBank": true,
      "lastChq": "string",
      "nominalAcCode": "string",
      "sortCode": "string",
      "timestamp": "string"
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[BankAccountQueryDto](#schemabankaccountquerydto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_BookTranTypeDto_">PageResult_BookTranTypeDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_booktrantypedto_"></a>
<a id="schema_PageResult_BookTranTypeDto_"></a>
<a id="tocSpageresult_booktrantypedto_"></a>
<a id="tocspageresult_booktrantypedto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "code": "string",
      "description": "string",
      "id": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[BookTranTypeDto](#schemabooktrantypedto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_CashPaymentQueryDto_">PageResult_CashPaymentQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_cashpaymentquerydto_"></a>
<a id="schema_PageResult_CashPaymentQueryDto_"></a>
<a id="tocSpageresult_cashpaymentquerydto_"></a>
<a id="tocspageresult_cashpaymentquerydto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "acCode": "string",
      "acEntries": [
        {
          "accountCode": "string",
          "analysisCategoryId": 0,
          "description": "string",
          "id": 0,
          "value": 0
        }
      ],
      "bankAccountCode": "string",
      "bankAccountId": 0,
      "bookTranTypeId": 0,
      "customFields": [
        {
          "description": "string",
          "id": 0,
          "userDefinedFieldId": 0,
          "value": "string"
        }
      ],
      "detailCollection": [
        "string"
      ],
      "discount": 0,
      "entryDate": "1970-01-01T00:00:00Z",
      "id": 0,
      "ledger": 0,
      "lodgement": 0,
      "note": "string",
      "plaidTransactionId": "string",
      "procDate": "1970-01-01T00:00:00Z",
      "supplierId": 0,
      "timestamp": "string",
      "total": 0,
      "unallocated": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[CashPaymentQueryDto](#schemacashpaymentquerydto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_CashReceiptQueryDto_">PageResult_CashReceiptQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_cashreceiptquerydto_"></a>
<a id="schema_PageResult_CashReceiptQueryDto_"></a>
<a id="tocSpageresult_cashreceiptquerydto_"></a>
<a id="tocspageresult_cashreceiptquerydto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "acCode": "string",
      "acEntries": [
        {
          "accountCode": "string",
          "analysisCategoryId": 0,
          "description": "string",
          "id": 0,
          "value": 0
        }
      ],
      "bookTranTypeId": 0,
      "customFields": [
        {
          "description": "string",
          "id": 0,
          "userDefinedFieldId": 0,
          "value": "string"
        }
      ],
      "customerId": 0,
      "detailCollection": [
        "string"
      ],
      "discount": 0,
      "entryDate": "1970-01-01T00:00:00Z",
      "id": 0,
      "ledger": 0,
      "note": "string",
      "plaidTransactionId": "string",
      "procDate": "1970-01-01T00:00:00Z",
      "timestamp": "string",
      "total": 0,
      "unallocated": 0,
      "vatEntries": [
        {
          "amount": 0,
          "id": 0,
          "percentage": 0,
          "vatRateId": 0
        }
      ],
      "vatTypeId": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[CashReceiptQueryDto](#schemacashreceiptquerydto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_CategoryTypeDto_">PageResult_CategoryTypeDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_categorytypedto_"></a>
<a id="schema_PageResult_CategoryTypeDto_"></a>
<a id="tocSpageresult_categorytypedto_"></a>
<a id="tocspageresult_categorytypedto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "description": "string",
      "id": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[CategoryTypeDto](#schemacategorytypedto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_CompanySettingDto_">PageResult_CompanySettingDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_companysettingdto_"></a>
<a id="schema_PageResult_CompanySettingDto_"></a>
<a id="tocSpageresult_companysettingdto_"></a>
<a id="tocspageresult_companysettingdto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "enableVOCRReporting": true,
      "id": 0,
      "useAllocations": true,
      "value": "string",
      "vocrSettingValue": true
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[CompanySettingDto](#schemacompanysettingdto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_CustomerQueryDto_">PageResult_CustomerQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_customerquerydto_"></a>
<a id="schema_PageResult_CustomerQueryDto_"></a>
<a id="tocSpageresult_customerquerydto_"></a>
<a id="tocspageresult_customerquerydto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "accountName": "string",
      "accountNumber": "string",
      "additionalEmails": [
        "string"
      ],
      "address": [
        "string"
      ],
      "authCode": "string",
      "bank": {
        "branch": "string",
        "id": 0,
        "name": "string",
        "sortCode": "string"
      },
      "businessIdentifierCode": "string",
      "code": "string",
      "contact": "string",
      "delivery": [
        "string"
      ],
      "eFTReference": "string",
      "email": "string",
      "fax": "string",
      "id": 0,
      "internationalBankAccountNumber": "string",
      "mobile": "string",
      "name": "string",
      "ourCode": "string",
      "ownerTypeId": 0,
      "phone": "string",
      "timestamp": "string",
      "vatAnalysisTypeId": 0,
      "vatReg": "string",
      "vatType": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[CustomerQueryDto](#schemacustomerquerydto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_OwnerTypeDto_">PageResult_OwnerTypeDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_ownertypedto_"></a>
<a id="schema_PageResult_OwnerTypeDto_"></a>
<a id="tocSpageresult_ownertypedto_"></a>
<a id="tocspageresult_ownertypedto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "description": "string",
      "id": 0,
      "recordTypeGroupId": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[OwnerTypeDto](#schemaownertypedto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_OwnerTypeGroupDto_">PageResult_OwnerTypeGroupDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_ownertypegroupdto_"></a>
<a id="schema_PageResult_OwnerTypeGroupDto_"></a>
<a id="tocSpageresult_ownertypegroupdto_"></a>
<a id="tocspageresult_ownertypegroupdto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "description": "string",
      "id": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[OwnerTypeGroupDto](#schemaownertypegroupdto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_PaymentQueryDto_">PageResult_PaymentQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_paymentquerydto_"></a>
<a id="schema_PageResult_PaymentQueryDto_"></a>
<a id="tocSpageresult_paymentquerydto_"></a>
<a id="tocspageresult_paymentquerydto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "acCode": "string",
      "acEntries": [
        {
          "accountCode": "string",
          "analysisCategoryId": 0,
          "description": "string",
          "id": 0,
          "value": 0
        }
      ],
      "bankAccountCode": "string",
      "bankAccountId": 0,
      "bookTranTypeId": 0,
      "customFields": [
        {
          "description": "string",
          "id": 0,
          "userDefinedFieldId": 0,
          "value": "string"
        }
      ],
      "detailCollection": [
        "string"
      ],
      "discount": 0,
      "entryDate": "1970-01-01T00:00:00Z",
      "id": 0,
      "note": "string",
      "plaidTransactionId": "string",
      "procDate": "1970-01-01T00:00:00Z",
      "reference": "string",
      "supplierId": 0,
      "timestamp": "string",
      "total": 0,
      "transferBankCode": "string",
      "transferBankId": 0,
      "unallocated": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[PaymentQueryDto](#schemapaymentquerydto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_ProductDto_">PageResult_ProductDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_productdto_"></a>
<a id="schema_PageResult_ProductDto_"></a>
<a id="tocSpageresult_productdto_"></a>
<a id="tocspageresult_productdto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "details": [
        "det1",
        "det2",
        "det3"
      ],
      "grossUnitPrice": false,
      "hasDefaultVatRate": false,
      "id": 9,
      "productTypeId": 0,
      "stockCode": "PRO1",
      "timestamp": "6IRPcBIe2wg=",
      "unitPrice": 100,
      "vatAnalysisTypeId": 1
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[ProductDto](#schemaproductdto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_PurchaseQueryDto_">PageResult_PurchaseQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_purchasequerydto_"></a>
<a id="schema_PageResult_PurchaseQueryDto_"></a>
<a id="tocSpageresult_purchasequerydto_"></a>
<a id="tocspageresult_purchasequerydto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "acCode": "string",
      "acEntries": [
        {
          "accountCode": "string",
          "analysisCategoryId": 0,
          "description": "string",
          "id": 0,
          "value": 0
        }
      ],
      "bookTranTypeId": 0,
      "customFields": [
        {
          "description": "string",
          "id": 0,
          "userDefinedFieldId": 0,
          "value": "string"
        }
      ],
      "detailCollection": [
        "string"
      ],
      "entryDate": "1970-01-01T00:00:00Z",
      "id": 0,
      "netGoods": 0,
      "netServices": 0,
      "note": "string",
      "postponedAccounting": true,
      "procDate": "1970-01-01T00:00:00Z",
      "reference": "string",
      "supplierId": 0,
      "timestamp": "string",
      "total": 0,
      "totalNet": 0,
      "totalVAT": 0,
      "unallocated": 0,
      "unpaid": 0,
      "vatEntries": [
        {
          "amount": 0,
          "id": 0,
          "percentage": 0,
          "vatRateId": 0
        }
      ],
      "vatTypeId": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[PurchaseQueryDto](#schemapurchasequerydto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_QuoteDto_">PageResult_QuoteDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_quotedto_"></a>
<a id="schema_PageResult_QuoteDto_"></a>
<a id="tocSpageresult_quotedto_"></a>
<a id="tocspageresult_quotedto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "comments": "Sample",
      "companyId": 40449,
      "customerOwnerId": 70583,
      "customerOwnerName": "Customer 1",
      "ddNumber": "Sample",
      "entryDate": "2017-01-01T00:00:00",
      "id": 1,
      "layoutType": 1,
      "poNumber": "Sample",
      "procDate": "2017-01-05T00:00:00",
      "productTrans": [
        {
          "acEntries": [
            {
              "accountCode": "sample",
              "analysisCategoryId": 40888,
              "companyId": 40449,
              "id": 1,
              "quoteProductTranId": 40277,
              "value": 100
            }
          ],
          "amount": 10,
          "companyId": 40449,
          "id": 40277,
          "percentage": 0,
          "productCode": "PRO1",
          "productId": 20107,
          "quantity": 1,
          "tranNotes": [
            "Product"
          ],
          "unitPrice": 100,
          "vatAmount": 10,
          "vatAnalysisTypeId": 0,
          "vatRateId": 30657
        }
      ],
      "saleInvoiceId": 30044,
      "saleRepId": 75783,
      "timeStamp": "4OVwcBIe2wg=",
      "total": 110,
      "totalNet": 100,
      "totalVat": 10,
      "vatTypeId": 1
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[QuoteDto](#schemaquotedto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_SaleRepsDto_">PageResult_SaleRepsDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_salerepsdto_"></a>
<a id="schema_PageResult_SaleRepsDto_"></a>
<a id="tocSpageresult_salerepsdto_"></a>
<a id="tocspageresult_salerepsdto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "code": "SR0001",
      "companyId": 123456,
      "email": "example@gmail.com",
      "id": 1,
      "name": "Sales Rep 1",
      "phone": "1234567890",
      "timeStamp": "6RCQcBIe2wg="
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[SaleRepsDto](#schemasalerepsdto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_SalesCreditNoteQueryDto_">PageResult_SalesCreditNoteQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_salescreditnotequerydto_"></a>
<a id="schema_PageResult_SalesCreditNoteQueryDto_"></a>
<a id="tocSpageresult_salescreditnotequerydto_"></a>
<a id="tocspageresult_salescreditnotequerydto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "acCode": "string",
      "bookTranTypeId": 0,
      "customFields": [
        {
          "description": "string",
          "id": 0,
          "userDefinedFieldId": 0,
          "value": "string"
        }
      ],
      "customerId": 0,
      "deliveryTo": [
        "string"
      ],
      "details": "string",
      "entryDate": "1970-01-01T00:00:00Z",
      "id": 0,
      "loType": "string",
      "netGoods": 0,
      "netServices": 0,
      "note": "string",
      "ourReference": "string",
      "procDate": "1970-01-01T00:00:00Z",
      "productTrans": [
        {
          "acEntries": [
            {
              "accountCode": "string",
              "analysisCategoryId": 0,
              "description": "string",
              "id": 0,
              "value": 0
            }
          ],
          "amount": 0,
          "amountNet": 0,
          "id": 0,
          "percentage": 0,
          "productCode": "string",
          "productId": 0,
          "quantity": 0,
          "tranNotes": [
            "string"
          ],
          "unitPrice": 0,
          "vat": 0,
          "vatAnalysisTypeId": 0,
          "vatRateId": 0
        }
      ],
      "quoteId": 0,
      "reference": "string",
      "saleRepCode": "string",
      "saleRepId": 0,
      "timestamp": "string",
      "total": 0,
      "totalNet": 0,
      "totalVAT": 0,
      "unpaid": 0,
      "vatTypeId": 0,
      "yourReference": "string"
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[SalesCreditNoteQueryDto](#schemasalescreditnotequerydto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_SalesEntryQueryDto_">PageResult_SalesEntryQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_salesentryquerydto_"></a>
<a id="schema_PageResult_SalesEntryQueryDto_"></a>
<a id="tocSpageresult_salesentryquerydto_"></a>
<a id="tocspageresult_salesentryquerydto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "acCode": "string",
      "acEntries": [
        {
          "accountCode": "string",
          "analysisCategoryId": 0,
          "description": "string",
          "id": 0,
          "value": 0
        }
      ],
      "bookTranTypeId": 0,
      "customFields": [
        {
          "description": "string",
          "id": 0,
          "userDefinedFieldId": 0,
          "value": "string"
        }
      ],
      "customerId": 0,
      "detailCollection": [
        "string"
      ],
      "details": "string",
      "entryDate": "1970-01-01T00:00:00Z",
      "id": 0,
      "netGoods": 0,
      "netServices": 0,
      "note": "string",
      "procDate": "1970-01-01T00:00:00Z",
      "reference": "string",
      "timestamp": "string",
      "total": 0,
      "totalNet": 0,
      "totalVAT": 0,
      "unpaid": 0,
      "vatEntries": [
        {
          "amount": 0,
          "id": 0,
          "percentage": 0,
          "vatRateId": 0
        }
      ],
      "vatTypeId": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[SalesEntryQueryDto](#schemasalesentryquerydto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_SalesInvoiceQueryDto_">PageResult_SalesInvoiceQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_salesinvoicequerydto_"></a>
<a id="schema_PageResult_SalesInvoiceQueryDto_"></a>
<a id="tocSpageresult_salesinvoicequerydto_"></a>
<a id="tocspageresult_salesinvoicequerydto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "acCode": "string",
      "bookTranTypeId": 0,
      "customFields": [
        {
          "description": "string",
          "id": 0,
          "userDefinedFieldId": 0,
          "value": "string"
        }
      ],
      "customerId": 0,
      "deliveryTo": [
        "string"
      ],
      "details": "string",
      "entryDate": "1970-01-01T00:00:00Z",
      "id": 0,
      "loType": "string",
      "netGoods": 0,
      "netServices": 0,
      "note": "string",
      "ourReference": "string",
      "procDate": "1970-01-01T00:00:00Z",
      "productTrans": [
        {
          "acEntries": [
            {
              "accountCode": "string",
              "analysisCategoryId": 0,
              "description": "string",
              "id": 0,
              "value": 0
            }
          ],
          "amount": 0,
          "amountNet": 0,
          "id": 0,
          "percentage": 0,
          "productCode": "string",
          "productId": 0,
          "quantity": 0,
          "tranNotes": [
            "string"
          ],
          "unitPrice": 0,
          "vat": 0,
          "vatAnalysisTypeId": 0,
          "vatRateId": 0
        }
      ],
      "quoteId": 0,
      "reference": "string",
      "saleRepCode": "string",
      "saleRepId": 0,
      "timestamp": "string",
      "total": 0,
      "totalNet": 0,
      "totalVAT": 0,
      "unpaid": 0,
      "vatTypeId": 0,
      "yourReference": "string"
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[SalesInvoiceQueryDto](#schemasalesinvoicequerydto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_SalesQueryDto_">PageResult_SalesQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_salesquerydto_"></a>
<a id="schema_PageResult_SalesQueryDto_"></a>
<a id="tocSpageresult_salesquerydto_"></a>
<a id="tocspageresult_salesquerydto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "acCode": "string",
      "acEntries": [
        {
          "accountCode": "string",
          "analysisCategoryId": 0,
          "description": "string",
          "id": 0,
          "value": 0
        }
      ],
      "bookTranTypeId": 0,
      "customFields": [
        {
          "description": "string",
          "id": 0,
          "userDefinedFieldId": 0,
          "value": "string"
        }
      ],
      "customerId": 0,
      "details": "string",
      "entryDate": "1970-01-01T00:00:00Z",
      "id": 0,
      "loType": "string",
      "note": "string",
      "procDate": "1970-01-01T00:00:00Z",
      "reference": "string",
      "timestamp": "string",
      "total": 0,
      "totalNet": 0,
      "totalVAT": 0,
      "unpaid": 0,
      "vatEntries": [
        {
          "amount": 0,
          "id": 0,
          "percentage": 0,
          "vatRateId": 0
        }
      ],
      "vatTypeId": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[SalesQueryDto](#schemasalesquerydto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_SupplierQueryDto_">PageResult_SupplierQueryDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_supplierquerydto_"></a>
<a id="schema_PageResult_SupplierQueryDto_"></a>
<a id="tocSpageresult_supplierquerydto_"></a>
<a id="tocspageresult_supplierquerydto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "accountName": "string",
      "accountNumber": "string",
      "additionalEmails": [
        "string"
      ],
      "address": [
        "string"
      ],
      "authCode": "string",
      "bank": {
        "branch": "string",
        "id": 0,
        "name": "string",
        "sortCode": "string"
      },
      "businessIdentifierCode": "string",
      "code": "string",
      "contact": "string",
      "eFTReference": "string",
      "email": "string",
      "fax": "string",
      "id": 0,
      "internationalBankAccountNumber": "string",
      "mobile": "string",
      "name": "string",
      "ourCode": "string",
      "ownerTypeId": 0,
      "phone": "string",
      "postponedAccounting": true,
      "timestamp": "string",
      "vatAnalysisTypeId": 0,
      "vatReg": "string",
      "vatType": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[SupplierQueryDto](#schemasupplierquerydto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_UserDefinedFieldDto_">PageResult_UserDefinedFieldDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_userdefinedfielddto_"></a>
<a id="schema_PageResult_UserDefinedFieldDto_"></a>
<a id="tocSpageresult_userdefinedfielddto_"></a>
<a id="tocspageresult_userdefinedfielddto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "categoryTypeId": 0,
      "description": "string",
      "id": 0,
      "orderIndex": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[UserDefinedFieldDto](#schemauserdefinedfielddto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_VatAnalysisTypeDto_">PageResult_VatAnalysisTypeDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_vatanalysistypedto_"></a>
<a id="schema_PageResult_VatAnalysisTypeDto_"></a>
<a id="tocSpageresult_vatanalysistypedto_"></a>
<a id="tocspageresult_vatanalysistypedto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "description": "string",
      "id": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[VatAnalysisTypeDto](#schemavatanalysistypedto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_VatCategoryDto_">PageResult_VatCategoryDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_vatcategorydto_"></a>
<a id="schema_PageResult_VatCategoryDto_"></a>
<a id="tocSpageresult_vatcategorydto_"></a>
<a id="tocspageresult_vatcategorydto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "description": "string",
      "id": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[VatCategoryDto](#schemavatcategorydto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_VatRateDto_">PageResult_VatRateDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_vatratedto_"></a>
<a id="schema_PageResult_VatRateDto_"></a>
<a id="tocSpageresult_vatratedto_"></a>
<a id="tocspageresult_vatratedto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "id": 0,
      "isActive": true,
      "isDefault": true,
      "orderIndex": 0,
      "percentage": 0,
      "timestamp": "string",
      "vatCategoryId": 0
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[VatRateDto](#schemavatratedto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PageResult_VatTypeDto_">PageResult_VatTypeDto_</h2>
<!-- backwards compatibility -->
<a id="schemapageresult_vattypedto_"></a>
<a id="schema_PageResult_VatTypeDto_"></a>
<a id="tocSpageresult_vattypedto_"></a>
<a id="tocspageresult_vattypedto_"></a>

```json
{
  "Count": 0,
  "Items": [
    {
      "code": "string",
      "description": "string",
      "id": 0,
      "isNotApplicable": true,
      "isOnlyZero": true
    }
  ],
  "NextPageLink": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int64)|false|none|none|
|Items|[[VatTypeDto](#schemavattypedto)]|false|none|none|
|NextPageLink|string|false|none|none|

<h2 id="tocS_PaymentDto">PaymentDto</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdto"></a>
<a id="schema_PaymentDto"></a>
<a id="tocSpaymentdto"></a>
<a id="tocspaymentdto"></a>

```json
{
  "acCode": "C1",
  "acEntries": [],
  "bankAccountCode": "B1",
  "bankAccountId": 1,
  "bookTranTypeId": 3,
  "customFields": [
    {
      "description": "F1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "f1"
    },
    {
      "description": "F2",
      "id": 2,
      "userDefinedFieldId": 2,
      "value": "f2"
    }
  ],
  "detailCollection": [
    "d1",
    "d2"
  ],
  "discount": 2,
  "entryDate": "2011-07-01T00:00:00",
  "id": 2,
  "note": "123",
  "procDate": "2011-08-08T00:00:00",
  "reference": "000002",
  "supplierId": 2,
  "timestamp": "CcBKcBIe2wg=",
  "total": 155,
  "transferBankCode": "",
  "transferBankId": 1,
  "unallocated": 155
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|acEntries|[[AcEntryDto](#schemaacentrydto)]|false|none|none|
|bankAccountCode|string|false|none|none|
|bankAccountId|integer(int64)|false|none|none|
|bookTranTypeId|integer(int64)|false|none|none|
|customFields|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|none|
|detailCollection|[string]|false|none|none|
|discount|number(double)|false|none|none|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|note|string|false|none|none|
|plaidTransactionId|string|false|none|none|
|procDate|string(date-time)|false|none|none|
|reference|string|false|none|none|
|supplierId|integer(int64)|false|none|none|
|timestamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|
|transferBankCode|string|false|none|none|
|transferBankId|integer(int64)|false|none|none|
|unallocated|number(double)|false|none|none|

<h2 id="tocS_PaymentQueryDto">PaymentQueryDto</h2>
<!-- backwards compatibility -->
<a id="schemapaymentquerydto"></a>
<a id="schema_PaymentQueryDto"></a>
<a id="tocSpaymentquerydto"></a>
<a id="tocspaymentquerydto"></a>

```json
{
  "acCode": "string",
  "acEntries": [
    {
      "accountCode": "string",
      "analysisCategoryId": 0,
      "description": "string",
      "id": 0,
      "value": 0
    }
  ],
  "bankAccountCode": "string",
  "bankAccountId": 0,
  "bookTranTypeId": 0,
  "customFields": [
    {
      "description": "string",
      "id": 0,
      "userDefinedFieldId": 0,
      "value": "string"
    }
  ],
  "detailCollection": [
    "string"
  ],
  "discount": 0,
  "entryDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "note": "string",
  "plaidTransactionId": "string",
  "procDate": "1970-01-01T00:00:00Z",
  "reference": "string",
  "supplierId": 0,
  "timestamp": "string",
  "total": 0,
  "transferBankCode": "string",
  "transferBankId": 0,
  "unallocated": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|acEntries|[[AcEntryDto](#schemaacentrydto)]|false|none|none|
|bankAccountCode|string|false|none|none|
|bankAccountId|integer(int64)|false|none|none|
|bookTranTypeId|integer(int64)|false|none|none|
|customFields|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|none|
|detailCollection|[string]|false|none|none|
|discount|number(double)|false|none|none|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|note|string|false|none|none|
|plaidTransactionId|string|false|none|none|
|procDate|string(date-time)|false|none|none|
|reference|string|false|none|none|
|supplierId|integer(int64)|false|none|none|
|timestamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|
|transferBankCode|string|false|none|none|
|transferBankId|integer(int64)|false|none|none|
|unallocated|number(double)|false|none|none|

<h2 id="tocS_ProductDto">ProductDto</h2>
<!-- backwards compatibility -->
<a id="schemaproductdto"></a>
<a id="schema_ProductDto"></a>
<a id="tocSproductdto"></a>
<a id="tocsproductdto"></a>

```json
{
  "details": [
    "det1",
    "det2",
    "det3"
  ],
  "grossUnitPrice": false,
  "hasDefaultVatRate": false,
  "id": 9,
  "productTypeId": 0,
  "stockCode": "PRO1",
  "timestamp": "6IRPcBIe2wg=",
  "unitPrice": 100,
  "vatAnalysisTypeId": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[string]|false|none|none|
|grossUnitPrice|boolean|false|none|none|
|hasDefaultVatRate|boolean|false|none|none|
|id|integer(int64)|false|none|none|
|productTypeId|integer(int64)|false|none|none|
|stockCode|string|false|none|none|
|timestamp|string(byte)|false|none|none|
|unitPrice|number(double)|false|none|none|
|vatAnalysisTypeId|integer(int64)|false|none|none|
|vatRateId|integer(int64)|false|none|none|

<h2 id="tocS_ProductTranDto">ProductTranDto</h2>
<!-- backwards compatibility -->
<a id="schemaproducttrandto"></a>
<a id="schema_ProductTranDto"></a>
<a id="tocSproducttrandto"></a>
<a id="tocsproducttrandto"></a>

```json
{
  "acEntries": [
    {
      "accountCode": "string",
      "analysisCategoryId": 0,
      "description": "string",
      "id": 0,
      "value": 0
    }
  ],
  "amount": 0,
  "amountNet": 0,
  "id": 0,
  "percentage": 0,
  "productCode": "string",
  "productId": 0,
  "quantity": 0,
  "tranNotes": [
    "string"
  ],
  "unitPrice": 0,
  "vat": 0,
  "vatAnalysisTypeId": 0,
  "vatRateId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acEntries|[[AcEntryDto](#schemaacentrydto)]|false|none|none|
|amount|number(double)|false|none|none|
|amountNet|number(double)|true|none|none|
|id|integer(int64)|false|none|none|
|percentage|number(double)|false|none|none|
|productCode|string|false|none|none|
|productId|integer(int64)|false|none|none|
|quantity|number(double)|false|none|none|
|tranNotes|[string]|false|none|none|
|unitPrice|number(double)|false|none|none|
|vat|number(double)|false|none|none|
|vatAnalysisTypeId|integer(int64)|false|none|none|
|vatRateId|integer(int64)|false|none|none|

<h2 id="tocS_ProductTranQueryDto">ProductTranQueryDto</h2>
<!-- backwards compatibility -->
<a id="schemaproducttranquerydto"></a>
<a id="schema_ProductTranQueryDto"></a>
<a id="tocSproducttranquerydto"></a>
<a id="tocsproducttranquerydto"></a>

```json
{
  "acEntries": [
    {
      "accountCode": "string",
      "analysisCategoryId": 0,
      "description": "string",
      "id": 0,
      "value": 0
    }
  ],
  "amount": 0,
  "amountNet": 0,
  "id": 0,
  "percentage": 0,
  "productCode": "string",
  "productId": 0,
  "quantity": 0,
  "tranNotes": [
    "string"
  ],
  "unitPrice": 0,
  "vat": 0,
  "vatAnalysisTypeId": 0,
  "vatRateId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acEntries|[[AcEntryDto](#schemaacentrydto)]|false|none|none|
|amount|number(double)|false|read-only|none|
|amountNet|number(double)|false|read-only|none|
|id|integer(int64)|false|none|none|
|percentage|number(double)|false|none|none|
|productCode|string|false|none|none|
|productId|integer(int64)|false|none|none|
|quantity|number(double)|false|none|none|
|tranNotes|[string]|false|none|none|
|unitPrice|number(double)|false|none|none|
|vat|number(double)|false|read-only|none|
|vatAnalysisTypeId|integer(int64)|false|none|none|
|vatRateId|integer(int64)|false|none|none|

<h2 id="tocS_PurchaseDto">PurchaseDto</h2>
<!-- backwards compatibility -->
<a id="schemapurchasedto"></a>
<a id="schema_PurchaseDto"></a>
<a id="tocSpurchasedto"></a>
<a id="tocspurchasedto"></a>

```json
{
  "acCode": "SUP3",
  "acEntries": [
    {
      "accountCode": "PU03",
      "analysisCategoryId": 10441,
      "description": "PUR 3",
      "id": 12518,
      "value": 90.91
    }
  ],
  "bookTranTypeId": 4,
  "customFields": [],
  "detailCollection": [],
  "entryDate": "2016-06-01T00:00:00",
  "id": 13380,
  "isDiscrepancyAccepted": false,
  "netGoods": 0,
  "netServices": 0,
  "note": "Supplier 3",
  "postponedAccounting": false,
  "procDate": "2016-06-24T00:00:00",
  "reference": "000001",
  "supplierId": 10173,
  "timestamp": "eDVgcBIe2wg=",
  "total": 100,
  "totalNet": 90.91,
  "totalVAT": 9.09,
  "unallocated": 100,
  "unpaid": 100,
  "vatEntries": [
    {
      "amount": 90.91,
      "id": 12267,
      "percentage": 10,
      "vatRateId": 10317
    }
  ],
  "vatTypeId": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|acEntries|[[AcEntryDto](#schemaacentrydto)]|false|none|none|
|bookTranTypeId|integer(int64)|false|none|none|
|customFields|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|none|
|detailCollection|[string]|false|none|none|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|isDiscrepancyAccepted|boolean|false|none|none|
|netGoods|number(double)|false|none|none|
|netServices|number(double)|false|none|none|
|note|string|false|none|none|
|postponedAccounting|boolean|false|none|none|
|procDate|string(date-time)|false|none|none|
|reference|string|false|none|none|
|supplierId|integer(int64)|false|none|none|
|timestamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|
|totalNet|number(double)|false|none|none|
|totalVAT|number(double)|false|none|none|
|unallocated|number(double)|false|none|none|
|unpaid|number(double)|false|none|none|
|vatEntries|[[VatEntryDto](#schemavatentrydto)]|false|none|none|
|vatTypeId|integer(int64)|false|none|none|

<h2 id="tocS_PurchaseQueryDto">PurchaseQueryDto</h2>
<!-- backwards compatibility -->
<a id="schemapurchasequerydto"></a>
<a id="schema_PurchaseQueryDto"></a>
<a id="tocSpurchasequerydto"></a>
<a id="tocspurchasequerydto"></a>

```json
{
  "acCode": "string",
  "acEntries": [
    {
      "accountCode": "string",
      "analysisCategoryId": 0,
      "description": "string",
      "id": 0,
      "value": 0
    }
  ],
  "bookTranTypeId": 0,
  "customFields": [
    {
      "description": "string",
      "id": 0,
      "userDefinedFieldId": 0,
      "value": "string"
    }
  ],
  "detailCollection": [
    "string"
  ],
  "entryDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "netGoods": 0,
  "netServices": 0,
  "note": "string",
  "postponedAccounting": true,
  "procDate": "1970-01-01T00:00:00Z",
  "reference": "string",
  "supplierId": 0,
  "timestamp": "string",
  "total": 0,
  "totalNet": 0,
  "totalVAT": 0,
  "unallocated": 0,
  "unpaid": 0,
  "vatEntries": [
    {
      "amount": 0,
      "id": 0,
      "percentage": 0,
      "vatRateId": 0
    }
  ],
  "vatTypeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|acEntries|[[AcEntryDto](#schemaacentrydto)]|false|none|none|
|bookTranTypeId|integer(int64)|false|none|none|
|customFields|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|none|
|detailCollection|[string]|false|none|none|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|netGoods|number(double)|false|none|none|
|netServices|number(double)|false|none|none|
|note|string|false|none|none|
|postponedAccounting|boolean|false|none|none|
|procDate|string(date-time)|false|none|none|
|reference|string|false|none|none|
|supplierId|integer(int64)|false|none|none|
|timestamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|
|totalNet|number(double)|false|none|none|
|totalVAT|number(double)|false|none|none|
|unallocated|number(double)|false|none|none|
|unpaid|number(double)|false|none|none|
|vatEntries|[[VatEntryDto](#schemavatentrydto)]|false|none|none|
|vatTypeId|integer(int64)|false|none|none|

<h2 id="tocS_QuoteAcEntriesDto">QuoteAcEntriesDto</h2>
<!-- backwards compatibility -->
<a id="schemaquoteacentriesdto"></a>
<a id="schema_QuoteAcEntriesDto"></a>
<a id="tocSquoteacentriesdto"></a>
<a id="tocsquoteacentriesdto"></a>

```json
{
  "accountCode": "string",
  "analysisCategoryId": 0,
  "companyId": 0,
  "id": 0,
  "quoteProductTranId": 0,
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|false|none|none|
|analysisCategoryId|integer(int64)|false|none|none|
|companyId|integer(int64)|false|none|none|
|id|integer(int64)|false|none|none|
|quoteProductTranId|integer(int64)|false|none|none|
|value|number(double)|false|none|none|

<h2 id="tocS_QuoteDto">QuoteDto</h2>
<!-- backwards compatibility -->
<a id="schemaquotedto"></a>
<a id="schema_QuoteDto"></a>
<a id="tocSquotedto"></a>
<a id="tocsquotedto"></a>

```json
{
  "comments": "Sample",
  "companyId": 40449,
  "customerOwnerId": 70583,
  "customerOwnerName": "Customer 1",
  "ddNumber": "Sample",
  "entryDate": "2017-01-01T00:00:00",
  "id": 1,
  "layoutType": 1,
  "poNumber": "Sample",
  "procDate": "2017-01-05T00:00:00",
  "productTrans": [
    {
      "acEntries": [
        {
          "accountCode": "sample",
          "analysisCategoryId": 40888,
          "companyId": 40449,
          "id": 1,
          "quoteProductTranId": 40277,
          "value": 100
        }
      ],
      "amount": 10,
      "companyId": 40449,
      "id": 40277,
      "percentage": 0,
      "productCode": "PRO1",
      "productId": 20107,
      "quantity": 1,
      "tranNotes": [
        "Product"
      ],
      "unitPrice": 100,
      "vatAmount": 10,
      "vatAnalysisTypeId": 0,
      "vatRateId": 30657
    }
  ],
  "saleInvoiceId": 30044,
  "saleRepId": 75783,
  "timeStamp": "4OVwcBIe2wg=",
  "total": 110,
  "totalNet": 100,
  "totalVat": 10,
  "vatTypeId": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|closedDate|string(date-time)|false|none|none|
|comments|string|false|none|none|
|companyId|integer(int64)|false|none|none|
|customFields|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|none|
|customerOwnerId|integer(int64)|false|none|none|
|customerOwnerName|string|false|none|none|
|ddNumber|string|false|none|none|
|deliveryList|string|false|none|none|
|deliveryTo|[string]|false|none|none|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|layoutType|integer(int32)|false|none|none|
|note|string|false|none|none|
|poNumber|string|false|none|none|
|procDate|string(date-time)|false|none|none|
|productTrans|[[QuoteProductTransDto](#schemaquoteproducttransdto)]|false|none|none|
|reference|string|false|none|none|
|saleInvoiceId|integer(int64)|false|none|none|
|saleRepCode|string|false|none|none|
|saleRepId|integer(int64)|false|none|none|
|timeStamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|
|totalNet|number(double)|false|none|none|
|totalVat|number(double)|false|none|none|
|vatTypeId|integer(int64)|false|none|none|

<h2 id="tocS_QuoteGeneratingInvoiceDto">QuoteGeneratingInvoiceDto</h2>
<!-- backwards compatibility -->
<a id="schemaquotegeneratinginvoicedto"></a>
<a id="schema_QuoteGeneratingInvoiceDto"></a>
<a id="tocSquotegeneratinginvoicedto"></a>
<a id="tocsquotegeneratinginvoicedto"></a>

```json
{
  "quoteId": 0,
  "saleInvoice": {
    "acCode": "CUS3",
    "bookTranTypeId": 7,
    "customFields": [
      {
        "description": "acudf_1",
        "id": 1,
        "userDefinedFieldId": 1,
        "value": "acudfv_1"
      },
      {
        "description": "acudf_2",
        "id": 2,
        "userDefinedFieldId": 1,
        "value": "acudfv_2"
      }
    ],
    "customerId": 70585,
    "deliveryTo": [
      "dt_1",
      "dt_2"
    ],
    "details": "detail_1",
    "entryDate": "2016-06-01T00:00:00",
    "id": 75813,
    "loType": "1",
    "note": "Customer 3",
    "ourReference": "ddNumber_1",
    "procDate": "2016-06-24T00:00:00",
    "productTrans": [
      {
        "acEntries": [
          {
            "accountCode": "SA02",
            "analysisCategoryId": 40889,
            "description": "AnCat1",
            "id": 73455,
            "value": -200
          }
        ],
        "amount": -220,
        "amountNet": -200,
        "id": 51820,
        "percentage": 10,
        "productCode": "PRO2",
        "productId": 20108,
        "quantity": -1,
        "tranNotes": [
          "tn_1",
          "tn_2"
        ],
        "unitPrice": 200,
        "vat": -20,
        "vatAnalysisTypeId": 0,
        "vatRateId": 30657
      }
    ],
    "saleRepId": 33110,
    "timestamp": "oq6NcBIe2wg=",
    "total": -220,
    "totalNet": -200,
    "totalVAT": -20,
    "unpaid": -220,
    "vatTypeId": 1,
    "yourReference": "poNumber_1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quoteId|integer(int64)|false|none|none|
|saleInvoice|[SalesInvoiceCreditNoteDto](#schemasalesinvoicecreditnotedto)|false|none|none|

<h2 id="tocS_QuoteProductTransDto">QuoteProductTransDto</h2>
<!-- backwards compatibility -->
<a id="schemaquoteproducttransdto"></a>
<a id="schema_QuoteProductTransDto"></a>
<a id="tocSquoteproducttransdto"></a>
<a id="tocsquoteproducttransdto"></a>

```json
{
  "acEntries": [
    {
      "accountCode": "string",
      "analysisCategoryId": 0,
      "companyId": 0,
      "id": 0,
      "quoteProductTranId": 0,
      "value": 0
    }
  ],
  "amount": 0,
  "companyId": 0,
  "id": 0,
  "percentage": 0,
  "productCode": "string",
  "productId": 0,
  "quantity": 0,
  "tranNotes": [
    "string"
  ],
  "unitPrice": 0,
  "vatAmount": 0,
  "vatAnalysisTypeId": 0,
  "vatRateId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acEntries|[[QuoteAcEntriesDto](#schemaquoteacentriesdto)]|false|none|none|
|amount|number(double)|false|none|none|
|companyId|integer(int64)|false|none|none|
|id|integer(int64)|false|none|none|
|percentage|number(double)|false|none|none|
|productCode|string|false|none|none|
|productId|integer(int64)|false|none|none|
|quantity|number(double)|false|none|none|
|tranNotes|[string]|false|none|none|
|unitPrice|number(double)|false|none|none|
|vatAmount|number(double)|false|none|none|
|vatAnalysisTypeId|integer(int64)|false|none|none|
|vatRateId|integer(int64)|false|none|none|

<h2 id="tocS_RangeVariable">RangeVariable</h2>
<!-- backwards compatibility -->
<a id="schemarangevariable"></a>
<a id="schema_RangeVariable"></a>
<a id="tocSrangevariable"></a>
<a id="tocsrangevariable"></a>

```json
{
  "Kind": 0,
  "Name": "string",
  "TypeReference": {
    "Definition": {
      "TypeKind": 0
    },
    "IsNullable": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Kind|integer(int32)|false|read-only|none|
|Name|string|false|read-only|none|
|TypeReference|[IEdmTypeReference](#schemaiedmtypereference)|false|none|none|

<h2 id="tocS_SaleRepsDto">SaleRepsDto</h2>
<!-- backwards compatibility -->
<a id="schemasalerepsdto"></a>
<a id="schema_SaleRepsDto"></a>
<a id="tocSsalerepsdto"></a>
<a id="tocssalerepsdto"></a>

```json
{
  "code": "SR0001",
  "companyId": 123456,
  "email": "example@gmail.com",
  "id": 1,
  "name": "Sales Rep 1",
  "phone": "1234567890",
  "timeStamp": "6RCQcBIe2wg="
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|companyId|integer(int64)|false|none|none|
|email|string|false|none|none|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|phone|string|false|none|none|
|timeStamp|string(byte)|false|none|none|

<h2 id="tocS_SalesCreditNoteQueryDto">SalesCreditNoteQueryDto</h2>
<!-- backwards compatibility -->
<a id="schemasalescreditnotequerydto"></a>
<a id="schema_SalesCreditNoteQueryDto"></a>
<a id="tocSsalescreditnotequerydto"></a>
<a id="tocssalescreditnotequerydto"></a>

```json
{
  "acCode": "string",
  "bookTranTypeId": 0,
  "customFields": [
    {
      "description": "string",
      "id": 0,
      "userDefinedFieldId": 0,
      "value": "string"
    }
  ],
  "customerId": 0,
  "deliveryTo": [
    "string"
  ],
  "details": "string",
  "entryDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "loType": "string",
  "netGoods": 0,
  "netServices": 0,
  "note": "string",
  "ourReference": "string",
  "procDate": "1970-01-01T00:00:00Z",
  "productTrans": [
    {
      "acEntries": [
        {
          "accountCode": "string",
          "analysisCategoryId": 0,
          "description": "string",
          "id": 0,
          "value": 0
        }
      ],
      "amount": 0,
      "amountNet": 0,
      "id": 0,
      "percentage": 0,
      "productCode": "string",
      "productId": 0,
      "quantity": 0,
      "tranNotes": [
        "string"
      ],
      "unitPrice": 0,
      "vat": 0,
      "vatAnalysisTypeId": 0,
      "vatRateId": 0
    }
  ],
  "quoteId": 0,
  "reference": "string",
  "saleRepCode": "string",
  "saleRepId": 0,
  "timestamp": "string",
  "total": 0,
  "totalNet": 0,
  "totalVAT": 0,
  "unpaid": 0,
  "vatTypeId": 0,
  "yourReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|bookTranTypeId|integer(int64)|false|none|none|
|customFields|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|none|
|customerId|integer(int64)|false|none|none|
|deliveryTo|[string]|false|none|none|
|details|string|false|none|none|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|loType|string|false|none|none|
|netGoods|number(double)|false|none|none|
|netServices|number(double)|false|none|none|
|note|string|false|none|none|
|ourReference|string|false|none|none|
|procDate|string(date-time)|false|none|none|
|productTrans|[[ProductTranQueryDto](#schemaproducttranquerydto)]|false|none|none|
|quoteId|integer(int64)|false|none|none|
|reference|string|false|none|none|
|saleRepCode|string|false|none|none|
|saleRepId|integer(int64)|false|none|none|
|timestamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|
|totalNet|number(double)|false|none|none|
|totalVAT|number(double)|false|none|none|
|unpaid|number(double)|false|none|none|
|vatTypeId|integer(int64)|false|none|none|
|yourReference|string|false|none|none|

<h2 id="tocS_SalesEntryDto">SalesEntryDto</h2>
<!-- backwards compatibility -->
<a id="schemasalesentrydto"></a>
<a id="schema_SalesEntryDto"></a>
<a id="tocSsalesentrydto"></a>
<a id="tocssalesentrydto"></a>

```json
{
  "acCode": "code",
  "acEntries": [
    {
      "accountCode": "SA01",
      "analysisCategoryId": 40888,
      "description": "SAL 1",
      "id": 73450,
      "value": 636.36
    }
  ],
  "bookTranTypeId": 5,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    },
    {
      "description": "acudf_2",
      "id": 2,
      "userDefinedFieldId": 1,
      "value": "acudfv_2"
    }
  ],
  "customerId": 70583,
  "detailCollection": [],
  "details": "detail_1",
  "entryDate": "2011-01-01T00:00:00",
  "id": 1,
  "netGoods": 0,
  "netServices": 0,
  "note": "Customer 1",
  "procDate": "2011-01-01T00:00:00",
  "reference": "000001",
  "timestamp": "wumIcBIe2wg=",
  "total": 700,
  "totalNet": 636.36,
  "totalVAT": 63.64,
  "unpaid": 0,
  "vatEntries": [
    {
      "amount": 636.36,
      "id": 63649,
      "percentage": 10,
      "vatRateId": 30657
    }
  ],
  "vatTypeId": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|acEntries|[[AcEntryDto](#schemaacentrydto)]|false|none|none|
|bookTranTypeId|integer(int64)|false|none|none|
|customFields|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|none|
|customerId|integer(int64)|false|none|none|
|detailCollection|[string]|false|none|none|
|details|string|false|none|none|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|netGoods|number(double)|false|none|none|
|netServices|number(double)|false|none|none|
|note|string|false|none|none|
|procDate|string(date-time)|false|none|none|
|reference|string|false|none|none|
|timestamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|
|totalNet|number(double)|false|none|none|
|totalVAT|number(double)|false|none|none|
|unpaid|number(double)|false|none|none|
|vatEntries|[[VatEntryDto](#schemavatentrydto)]|false|none|none|
|vatTypeId|integer(int64)|false|none|none|

<h2 id="tocS_SalesEntryQueryDto">SalesEntryQueryDto</h2>
<!-- backwards compatibility -->
<a id="schemasalesentryquerydto"></a>
<a id="schema_SalesEntryQueryDto"></a>
<a id="tocSsalesentryquerydto"></a>
<a id="tocssalesentryquerydto"></a>

```json
{
  "acCode": "string",
  "acEntries": [
    {
      "accountCode": "string",
      "analysisCategoryId": 0,
      "description": "string",
      "id": 0,
      "value": 0
    }
  ],
  "bookTranTypeId": 0,
  "customFields": [
    {
      "description": "string",
      "id": 0,
      "userDefinedFieldId": 0,
      "value": "string"
    }
  ],
  "customerId": 0,
  "detailCollection": [
    "string"
  ],
  "details": "string",
  "entryDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "netGoods": 0,
  "netServices": 0,
  "note": "string",
  "procDate": "1970-01-01T00:00:00Z",
  "reference": "string",
  "timestamp": "string",
  "total": 0,
  "totalNet": 0,
  "totalVAT": 0,
  "unpaid": 0,
  "vatEntries": [
    {
      "amount": 0,
      "id": 0,
      "percentage": 0,
      "vatRateId": 0
    }
  ],
  "vatTypeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|acEntries|[[AcEntryDto](#schemaacentrydto)]|false|none|none|
|bookTranTypeId|integer(int64)|false|none|none|
|customFields|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|none|
|customerId|integer(int64)|false|none|none|
|detailCollection|[string]|false|none|none|
|details|string|false|none|none|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|netGoods|number(double)|false|none|none|
|netServices|number(double)|false|none|none|
|note|string|false|none|none|
|procDate|string(date-time)|false|none|none|
|reference|string|false|none|none|
|timestamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|
|totalNet|number(double)|false|none|none|
|totalVAT|number(double)|false|none|none|
|unpaid|number(double)|false|none|none|
|vatEntries|[[VatEntryDto](#schemavatentrydto)]|false|none|none|
|vatTypeId|integer(int64)|false|none|none|

<h2 id="tocS_SalesInvoiceCreditNoteDto">SalesInvoiceCreditNoteDto</h2>
<!-- backwards compatibility -->
<a id="schemasalesinvoicecreditnotedto"></a>
<a id="schema_SalesInvoiceCreditNoteDto"></a>
<a id="tocSsalesinvoicecreditnotedto"></a>
<a id="tocssalesinvoicecreditnotedto"></a>

```json
{
  "acCode": "CUS3",
  "bookTranTypeId": 7,
  "customFields": [
    {
      "description": "acudf_1",
      "id": 1,
      "userDefinedFieldId": 1,
      "value": "acudfv_1"
    },
    {
      "description": "acudf_2",
      "id": 2,
      "userDefinedFieldId": 1,
      "value": "acudfv_2"
    }
  ],
  "customerId": 70585,
  "deliveryTo": [
    "dt_1",
    "dt_2"
  ],
  "details": "detail_1",
  "entryDate": "2016-06-01T00:00:00",
  "id": 75813,
  "loType": "1",
  "note": "Customer 3",
  "ourReference": "ddNumber_1",
  "procDate": "2016-06-24T00:00:00",
  "productTrans": [
    {
      "acEntries": [
        {
          "accountCode": "SA02",
          "analysisCategoryId": 40889,
          "description": "AnCat1",
          "id": 73455,
          "value": -200
        }
      ],
      "amount": -220,
      "amountNet": -200,
      "id": 51820,
      "percentage": 10,
      "productCode": "PRO2",
      "productId": 20108,
      "quantity": -1,
      "tranNotes": [
        "tn_1",
        "tn_2"
      ],
      "unitPrice": 200,
      "vat": -20,
      "vatAnalysisTypeId": 0,
      "vatRateId": 30657
    }
  ],
  "saleRepId": 33110,
  "timestamp": "oq6NcBIe2wg=",
  "total": -220,
  "totalNet": -200,
  "totalVAT": -20,
  "unpaid": -220,
  "vatTypeId": 1,
  "yourReference": "poNumber_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|bookTranTypeId|integer(int64)|false|none|none|
|customFields|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|none|
|customerId|integer(int64)|false|none|none|
|deliveryTo|[string]|false|none|none|
|details|string|false|none|none|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|loType|string|false|none|none|
|netGoods|number(double)|false|none|none|
|netServices|number(double)|false|none|none|
|note|string|false|none|none|
|ourReference|string|false|none|none|
|procDate|string(date-time)|false|none|none|
|productTrans|[[ProductTranDto](#schemaproducttrandto)]|false|none|none|
|quoteId|integer(int64)|false|none|none|
|reference|string|false|none|none|
|saleRepCode|string|false|none|none|
|saleRepId|integer(int64)|false|none|none|
|timestamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|
|totalNet|number(double)|false|none|none|
|totalVAT|number(double)|false|none|none|
|unpaid|number(double)|false|none|none|
|vatTypeId|integer(int64)|false|none|none|
|yourReference|string|false|none|none|

<h2 id="tocS_SalesInvoiceEmailInfoDto">SalesInvoiceEmailInfoDto</h2>
<!-- backwards compatibility -->
<a id="schemasalesinvoiceemailinfodto"></a>
<a id="schema_SalesInvoiceEmailInfoDto"></a>
<a id="tocSsalesinvoiceemailinfodto"></a>
<a id="tocssalesinvoiceemailinfodto"></a>

```json
{
  "bccAddresses": [
    "bcc1@email.com",
    "bcc2@email.com",
    "bcc3@email.com"
  ],
  "messageBody": "Email message",
  "salesInvoiceId": 1,
  "toAddress": "to@email.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bccAddresses|[string]|false|none|none|
|messageBody|string|false|none|none|
|salesInvoiceId|integer(int64)|false|none|none|
|toAddress|string|false|none|none|

<h2 id="tocS_SalesInvoiceQueryDto">SalesInvoiceQueryDto</h2>
<!-- backwards compatibility -->
<a id="schemasalesinvoicequerydto"></a>
<a id="schema_SalesInvoiceQueryDto"></a>
<a id="tocSsalesinvoicequerydto"></a>
<a id="tocssalesinvoicequerydto"></a>

```json
{
  "acCode": "string",
  "bookTranTypeId": 0,
  "customFields": [
    {
      "description": "string",
      "id": 0,
      "userDefinedFieldId": 0,
      "value": "string"
    }
  ],
  "customerId": 0,
  "deliveryTo": [
    "string"
  ],
  "details": "string",
  "entryDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "loType": "string",
  "netGoods": 0,
  "netServices": 0,
  "note": "string",
  "ourReference": "string",
  "procDate": "1970-01-01T00:00:00Z",
  "productTrans": [
    {
      "acEntries": [
        {
          "accountCode": "string",
          "analysisCategoryId": 0,
          "description": "string",
          "id": 0,
          "value": 0
        }
      ],
      "amount": 0,
      "amountNet": 0,
      "id": 0,
      "percentage": 0,
      "productCode": "string",
      "productId": 0,
      "quantity": 0,
      "tranNotes": [
        "string"
      ],
      "unitPrice": 0,
      "vat": 0,
      "vatAnalysisTypeId": 0,
      "vatRateId": 0
    }
  ],
  "quoteId": 0,
  "reference": "string",
  "saleRepCode": "string",
  "saleRepId": 0,
  "timestamp": "string",
  "total": 0,
  "totalNet": 0,
  "totalVAT": 0,
  "unpaid": 0,
  "vatTypeId": 0,
  "yourReference": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|bookTranTypeId|integer(int64)|false|none|none|
|customFields|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|none|
|customerId|integer(int64)|false|none|none|
|deliveryTo|[string]|false|none|none|
|details|string|false|none|none|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|loType|string|false|none|none|
|netGoods|number(double)|false|none|none|
|netServices|number(double)|false|none|none|
|note|string|false|none|none|
|ourReference|string|false|none|none|
|procDate|string(date-time)|false|none|none|
|productTrans|[[ProductTranQueryDto](#schemaproducttranquerydto)]|false|none|none|
|quoteId|integer(int64)|false|none|none|
|reference|string|false|none|none|
|saleRepCode|string|false|none|none|
|saleRepId|integer(int64)|false|none|none|
|timestamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|
|totalNet|number(double)|false|none|none|
|totalVAT|number(double)|false|none|none|
|unpaid|number(double)|false|none|none|
|vatTypeId|integer(int64)|false|none|none|
|yourReference|string|false|none|none|

<h2 id="tocS_SalesQueryDto">SalesQueryDto</h2>
<!-- backwards compatibility -->
<a id="schemasalesquerydto"></a>
<a id="schema_SalesQueryDto"></a>
<a id="tocSsalesquerydto"></a>
<a id="tocssalesquerydto"></a>

```json
{
  "acCode": "string",
  "acEntries": [
    {
      "accountCode": "string",
      "analysisCategoryId": 0,
      "description": "string",
      "id": 0,
      "value": 0
    }
  ],
  "bookTranTypeId": 0,
  "customFields": [
    {
      "description": "string",
      "id": 0,
      "userDefinedFieldId": 0,
      "value": "string"
    }
  ],
  "customerId": 0,
  "details": "string",
  "entryDate": "1970-01-01T00:00:00Z",
  "id": 0,
  "loType": "string",
  "note": "string",
  "procDate": "1970-01-01T00:00:00Z",
  "reference": "string",
  "timestamp": "string",
  "total": 0,
  "totalNet": 0,
  "totalVAT": 0,
  "unpaid": 0,
  "vatEntries": [
    {
      "amount": 0,
      "id": 0,
      "percentage": 0,
      "vatRateId": 0
    }
  ],
  "vatTypeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acCode|string|false|none|none|
|acEntries|[[AcEntryDto](#schemaacentrydto)]|false|none|none|
|bookTranTypeId|integer(int64)|false|none|none|
|customFields|[[AcudfValueDto](#schemaacudfvaluedto)]|false|none|none|
|customerId|integer(int64)|false|none|none|
|details|string|false|none|none|
|entryDate|string(date-time)|false|none|none|
|id|integer(int64)|false|none|none|
|loType|string|false|none|none|
|note|string|false|none|none|
|procDate|string(date-time)|false|none|none|
|reference|string|false|none|none|
|timestamp|string(byte)|false|none|none|
|total|number(double)|false|none|none|
|totalNet|number(double)|false|none|none|
|totalVAT|number(double)|false|none|none|
|unpaid|number(double)|false|none|none|
|vatEntries|[[VatEntryDto](#schemavatentrydto)]|false|none|none|
|vatTypeId|integer(int64)|false|none|none|

<h2 id="tocS_SelectExpandClause">SelectExpandClause</h2>
<!-- backwards compatibility -->
<a id="schemaselectexpandclause"></a>
<a id="schema_SelectExpandClause"></a>
<a id="tocSselectexpandclause"></a>
<a id="tocsselectexpandclause"></a>

```json
{
  "AllSelected": true,
  "SelectedItems": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllSelected|boolean|false|read-only|none|
|SelectedItems|[[SelectItem](#schemaselectitem)]|false|read-only|none|

<h2 id="tocS_SelectExpandQueryOption">SelectExpandQueryOption</h2>
<!-- backwards compatibility -->
<a id="schemaselectexpandqueryoption"></a>
<a id="schema_SelectExpandQueryOption"></a>
<a id="tocSselectexpandqueryoption"></a>
<a id="tocsselectexpandqueryoption"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "RawExpand": "string",
  "RawSelect": "string",
  "SelectExpandClause": {
    "AllSelected": true,
    "SelectedItems": [
      {}
    ]
  },
  "Validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|RawExpand|string|false|read-only|none|
|RawSelect|string|false|read-only|none|
|SelectExpandClause|[SelectExpandClause](#schemaselectexpandclause)|false|none|none|
|Validator|[SelectExpandQueryValidator](#schemaselectexpandqueryvalidator)|false|none|none|

<h2 id="tocS_SelectExpandQueryValidator">SelectExpandQueryValidator</h2>
<!-- backwards compatibility -->
<a id="schemaselectexpandqueryvalidator"></a>
<a id="schema_SelectExpandQueryValidator"></a>
<a id="tocSselectexpandqueryvalidator"></a>
<a id="tocsselectexpandqueryvalidator"></a>

```json
{}
```

<h2 id="tocS_SelectItem">SelectItem</h2>
<!-- backwards compatibility -->
<a id="schemaselectitem"></a>
<a id="schema_SelectItem"></a>
<a id="tocSselectitem"></a>
<a id="tocsselectitem"></a>

```json
{}
```

<h2 id="tocS_SingleValueNode">SingleValueNode</h2>
<!-- backwards compatibility -->
<a id="schemasinglevaluenode"></a>
<a id="schema_SingleValueNode"></a>
<a id="tocSsinglevaluenode"></a>
<a id="tocssinglevaluenode"></a>

```json
{
  "Kind": 0,
  "TypeReference": {
    "Definition": {
      "TypeKind": 0
    },
    "IsNullable": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Kind|integer(int32)|false|read-only|none|
|TypeReference|[IEdmTypeReference](#schemaiedmtypereference)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Kind|0|
|Kind|1|
|Kind|2|
|Kind|3|
|Kind|4|
|Kind|5|
|Kind|6|
|Kind|7|
|Kind|8|
|Kind|9|
|Kind|10|
|Kind|11|
|Kind|12|
|Kind|13|
|Kind|14|
|Kind|15|
|Kind|16|
|Kind|17|
|Kind|18|
|Kind|19|
|Kind|20|

<h2 id="tocS_SkipQueryOption">SkipQueryOption</h2>
<!-- backwards compatibility -->
<a id="schemaskipqueryoption"></a>
<a id="schema_SkipQueryOption"></a>
<a id="tocSskipqueryoption"></a>
<a id="tocsskipqueryoption"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "RawValue": "string",
  "Validator": {},
  "Value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|RawValue|string|false|read-only|none|
|Validator|[SkipQueryValidator](#schemaskipqueryvalidator)|false|none|none|
|Value|integer(int32)|false|read-only|none|

<h2 id="tocS_SkipQueryValidator">SkipQueryValidator</h2>
<!-- backwards compatibility -->
<a id="schemaskipqueryvalidator"></a>
<a id="schema_SkipQueryValidator"></a>
<a id="tocSskipqueryvalidator"></a>
<a id="tocsskipqueryvalidator"></a>

```json
{}
```

<h2 id="tocS_SupplierDto">SupplierDto</h2>
<!-- backwards compatibility -->
<a id="schemasupplierdto"></a>
<a id="schema_SupplierDto"></a>
<a id="tocSsupplierdto"></a>
<a id="tocssupplierdto"></a>

```json
{
  "accountName": "Supplier Bank Acc",
  "accountNumber": "12345678",
  "additionalEmails": [
    "email2@example.com",
    "email3@example.com"
  ],
  "address": [
    "Address Line 1",
    "Address Line 2"
  ],
  "authCode": "VATEXCODE222",
  "bank": {
    "branch": "Bank",
    "id": 1,
    "name": "bank Name",
    "sortCode": "B01"
  },
  "code": "S001",
  "contact": "John Smith",
  "eFTReference": "Reference",
  "email": "supplier@email.com",
  "fax": "1234567890",
  "id": 10589,
  "mobile": "1234567890",
  "name": "Supplier Name",
  "ourCode": "OURCODE111",
  "ownerTypeId": 3,
  "phone": "1234596970",
  "postponedAccounting": false,
  "timestamp": "4jeXcBIe2wg=",
  "vatAnalysisTypeId": 1,
  "vatReg": "VATCODE0001",
  "vatType": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|none|
|accountNumber|string|false|none|none|
|additionalEmails|[string]|false|none|none|
|address|[string]|false|none|none|
|authCode|string|false|none|none|
|bank|[EFTBankDto](#schemaeftbankdto)|false|none|none|
|businessIdentifierCode|string|false|none|none|
|code|string|false|none|none|
|contact|string|false|none|none|
|eFTReference|string|false|none|none|
|email|string|false|none|none|
|fax|string|false|none|none|
|id|integer(int64)|false|none|none|
|internationalBankAccountNumber|string|false|none|none|
|ledgerBalance|number(double)|false|none|none|
|mobile|string|false|none|none|
|name|string|false|none|none|
|openingBalance|[OwnerOpeningBalanceInPeriodsDto](#schemaowneropeningbalanceinperiodsdto)|false|none|none|
|openingBalances|[[OwnerOpeningBalanceDto](#schemaowneropeningbalancedto)]|false|none|none|
|ourCode|string|false|none|none|
|ownerTypeId|integer(int64)|false|none|none|
|phone|string|false|none|none|
|postponedAccounting|boolean|false|none|none|
|timestamp|string(byte)|false|none|none|
|vatAnalysisTypeId|integer(int64)|false|none|none|
|vatReg|string|false|none|none|
|vatType|integer(int64)|false|none|none|

<h2 id="tocS_SupplierQueryDto">SupplierQueryDto</h2>
<!-- backwards compatibility -->
<a id="schemasupplierquerydto"></a>
<a id="schema_SupplierQueryDto"></a>
<a id="tocSsupplierquerydto"></a>
<a id="tocssupplierquerydto"></a>

```json
{
  "accountName": "string",
  "accountNumber": "string",
  "additionalEmails": [
    "string"
  ],
  "address": [
    "string"
  ],
  "authCode": "string",
  "bank": {
    "branch": "string",
    "id": 0,
    "name": "string",
    "sortCode": "string"
  },
  "businessIdentifierCode": "string",
  "code": "string",
  "contact": "string",
  "eFTReference": "string",
  "email": "string",
  "fax": "string",
  "id": 0,
  "internationalBankAccountNumber": "string",
  "mobile": "string",
  "name": "string",
  "ourCode": "string",
  "ownerTypeId": 0,
  "phone": "string",
  "postponedAccounting": true,
  "timestamp": "string",
  "vatAnalysisTypeId": 0,
  "vatReg": "string",
  "vatType": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|none|
|accountNumber|string|false|none|none|
|additionalEmails|[string]|false|none|none|
|address|[string]|false|none|none|
|authCode|string|false|none|none|
|bank|[EFTBankDto](#schemaeftbankdto)|false|none|none|
|businessIdentifierCode|string|false|none|none|
|code|string|false|none|none|
|contact|string|false|none|none|
|eFTReference|string|false|none|none|
|email|string|false|none|none|
|fax|string|false|none|none|
|id|integer(int64)|false|none|none|
|internationalBankAccountNumber|string|false|none|none|
|mobile|string|false|none|none|
|name|string|false|none|none|
|ourCode|string|false|none|none|
|ownerTypeId|integer(int64)|false|none|none|
|phone|string|false|none|none|
|postponedAccounting|boolean|false|none|none|
|timestamp|string(byte)|false|none|none|
|vatAnalysisTypeId|integer(int64)|false|none|none|
|vatReg|string|false|none|none|
|vatType|integer(int64)|false|none|none|

<h2 id="tocS_TopQueryOption">TopQueryOption</h2>
<!-- backwards compatibility -->
<a id="schematopqueryoption"></a>
<a id="schema_TopQueryOption"></a>
<a id="tocStopqueryoption"></a>
<a id="tocstopqueryoption"></a>

```json
{
  "Context": {
    "ElementClrType": "string",
    "ElementType": {
      "TypeKind": 0
    },
    "Model": {
      "DirectValueAnnotationsManager": {},
      "ReferencedModels": [
        {}
      ],
      "SchemaElements": [
        {
          "Name": "string",
          "Namespace": "string",
          "SchemaElementKind": 0
        }
      ],
      "VocabularyAnnotations": [
        {
          "Qualifier": "string",
          "Target": {},
          "Term": {
            "Name": "string",
            "Namespace": "string",
            "SchemaElementKind": 0,
            "TermKind": 0
          }
        }
      ]
    }
  },
  "RawValue": "string",
  "Validator": {},
  "Value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Context|[ODataQueryContext](#schemaodataquerycontext)|false|none|none|
|RawValue|string|false|read-only|none|
|Validator|[TopQueryValidator](#schematopqueryvalidator)|false|none|none|
|Value|integer(int32)|false|read-only|none|

<h2 id="tocS_TopQueryValidator">TopQueryValidator</h2>
<!-- backwards compatibility -->
<a id="schematopqueryvalidator"></a>
<a id="schema_TopQueryValidator"></a>
<a id="tocStopqueryvalidator"></a>
<a id="tocstopqueryvalidator"></a>

```json
{}
```

<h2 id="tocS_UserDefinedFieldDto">UserDefinedFieldDto</h2>
<!-- backwards compatibility -->
<a id="schemauserdefinedfielddto"></a>
<a id="schema_UserDefinedFieldDto"></a>
<a id="tocSuserdefinedfielddto"></a>
<a id="tocsuserdefinedfielddto"></a>

```json
{
  "categoryTypeId": 0,
  "description": "string",
  "id": 0,
  "orderIndex": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryTypeId|integer(int64)|false|none|none|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|orderIndex|integer(int32)|false|none|none|

<h2 id="tocS_VatAnalysisTypeDto">VatAnalysisTypeDto</h2>
<!-- backwards compatibility -->
<a id="schemavatanalysistypedto"></a>
<a id="schema_VatAnalysisTypeDto"></a>
<a id="tocSvatanalysistypedto"></a>
<a id="tocsvatanalysistypedto"></a>

```json
{
  "description": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|

<h2 id="tocS_VatCategoryDto">VatCategoryDto</h2>
<!-- backwards compatibility -->
<a id="schemavatcategorydto"></a>
<a id="schema_VatCategoryDto"></a>
<a id="tocSvatcategorydto"></a>
<a id="tocsvatcategorydto"></a>

```json
{
  "description": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|

<h2 id="tocS_VatEntryDto">VatEntryDto</h2>
<!-- backwards compatibility -->
<a id="schemavatentrydto"></a>
<a id="schema_VatEntryDto"></a>
<a id="tocSvatentrydto"></a>
<a id="tocsvatentrydto"></a>

```json
{
  "amount": 0,
  "id": 0,
  "percentage": 0,
  "vatRateId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|false|none|none|
|id|integer(int64)|false|none|none|
|percentage|number(double)|false|none|none|
|vatRateId|integer(int64)|false|none|none|

<h2 id="tocS_VatRateDto">VatRateDto</h2>
<!-- backwards compatibility -->
<a id="schemavatratedto"></a>
<a id="schema_VatRateDto"></a>
<a id="tocSvatratedto"></a>
<a id="tocsvatratedto"></a>

```json
{
  "id": 0,
  "isActive": true,
  "isDefault": true,
  "orderIndex": 0,
  "percentage": 0,
  "timestamp": "string",
  "vatCategoryId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|isActive|boolean|false|none|none|
|isDefault|boolean|false|none|none|
|orderIndex|integer(int32)|false|none|none|
|percentage|number(double)|false|none|none|
|timestamp|string(byte)|false|none|none|
|vatCategoryId|integer(int64)|false|none|none|

<h2 id="tocS_VatRatesByVatCategoryDto">VatRatesByVatCategoryDto</h2>
<!-- backwards compatibility -->
<a id="schemavatratesbyvatcategorydto"></a>
<a id="schema_VatRatesByVatCategoryDto"></a>
<a id="tocSvatratesbyvatcategorydto"></a>
<a id="tocsvatratesbyvatcategorydto"></a>

```json
{
  "vatCategoryId": 1,
  "vatRates": [
    {
      "id": 0,
      "isActive": true,
      "isDefault": false,
      "orderIndex": 0,
      "percentage": 30,
      "vatCategoryId": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vatCategoryId|integer(int64)|false|none|none|
|vatRates|[[VatRateDto](#schemavatratedto)]|false|none|none|

<h2 id="tocS_VatTypeDto">VatTypeDto</h2>
<!-- backwards compatibility -->
<a id="schemavattypedto"></a>
<a id="schema_VatTypeDto"></a>
<a id="tocSvattypedto"></a>
<a id="tocsvattypedto"></a>

```json
{
  "code": "string",
  "description": "string",
  "id": 0,
  "isNotApplicable": true,
  "isOnlyZero": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|description|string|false|none|none|
|id|integer(int64)|false|none|none|
|isNotApplicable|boolean|false|none|none|
|isOnlyZero|boolean|false|none|none|
