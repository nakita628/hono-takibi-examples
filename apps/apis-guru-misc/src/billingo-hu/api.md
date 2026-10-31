<h1 id="billingo-api-v3">Billingo API v3 v3.0.7</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is a Billingo API v3 documentation. Our API based on REST software architectural style. API has resource-oriented URLs, accepts JSON-encoded request bodies and returns JSON-encoded responses. To use this API you have to generate a new API key on our [site](https://app.billingo.hu/api-key). After that, you can test your API key on this page.

Base URLs:

* <a href="https://api.billingo.hu/v3">https://api.billingo.hu/v3</a> - Billingo API

<a href="https://www.billingo.hu/felhasznalasi-feltetelek">Terms of service</a>
Email: <a href="mailto:hello@billingo.hu">Billingo Support</a> 
Web: <a href="https://www.billingo.hu/kapcsolat">Billingo Support</a> 

<a href="https://support.billingo.hu/content/446136358">Find out more information about Billingo API v3 usage.</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **X-API-KEY**, in: header.

<h1 id="billingo-api-v3-document">Document</h1>

Document object represents your invoice.

## List all documents

<a id="opIdListDocument"></a>

> Code samples

```bash
curl https://example.com/documents \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /documents`

Returns a list of your documents. The documents are returned sorted by creation date, with the most recent documents appearing first.

<h3 id="list-all-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|per_page|query|integer|false|none|
|block_id|query|integer|false|Filter documents by the identifier of your DocumentBlock.|
|partner_id|query|integer|false|Filter documents by the identifier of your Partner.|
|payment_method|query|[PaymentMethod](#schemapaymentmethod)|false|Filter documents by PaymentMethod value.|
|payment_status|query|[PaymentStatus](#schemapaymentstatus)|false|Filter documents by PaymentStatus value.|
|start_date|query|string(date)|false|Filter documents by date.|
|end_date|query|string(date)|false|Filter documents by date.|
|start_number|query|integer|false|Starting number of the document, should not contain year or any other formatting. Required if `start_year` given|
|end_number|query|integer|false|Ending number of the document, should not contain year or any other formatting. Required if `end_year` given|
|start_year|query|integer|false|Year for `start_number` parameter. Required if `start_number` given.|
|end_year|query|integer|false|Year for `end_number` parameter. Required if `end_number` given.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|payment_method|aruhitel|
|payment_method|bankcard|
|payment_method|barion|
|payment_method|barter|
|payment_method|cash|
|payment_method|cash_on_delivery|
|payment_method|coupon|
|payment_method|elore_utalas|
|payment_method|ep_kartya|
|payment_method|kompenzacio|
|payment_method|levonas|
|payment_method|online_bankcard|
|payment_method|payoneer|
|payment_method|paypal|
|payment_method|paypal_utolag|
|payment_method|payu|
|payment_method|pick_pack_pont|
|payment_method|postai_csekk|
|payment_method|postautalvany|
|payment_method|skrill|
|payment_method|szep_card|
|payment_method|transferwise|
|payment_method|upwork|
|payment_method|utalvany|
|payment_method|valto|
|payment_method|wire_transfer|
|payment_status|expired|
|payment_status|none|
|payment_status|outstanding|
|payment_status|paid|
|payment_status|partially_paid|

> Example responses

> 200 Response

```json
{
  "current_page": 0,
  "data": [
    {
      "block_id": 0,
      "cancelled": true,
      "comment": "string",
      "conversion_rate": 0,
      "currency": "AUD",
      "due_date": "1970-01-01",
      "electronic": true,
      "fulfillment_date": "1970-01-01",
      "gross_total": 0,
      "id": 0,
      "invoice_date": "1970-01-01",
      "invoice_number": "PREFIX / 2020-000001",
      "items": [
        {
          "gross_amount": 0,
          "name": "string",
          "net_amount": 0,
          "net_unit_amount": 0,
          "product_id": 0,
          "quantity": 0,
          "vat": "0%",
          "vat_amount": 0
        }
      ],
      "language": "de",
      "notification_status": "closed",
      "organization": {
        "address": {
          "address": "string",
          "city": "string",
          "country_code": "",
          "post_code": "string"
        },
        "bank_account": {
          "account_number": "string",
          "account_number_iban": "string",
          "id": 0,
          "name": "string",
          "swift": "string"
        },
        "cash_settled": true,
        "eu_tax_number": "string",
        "ev_number": "string",
        "name": "string",
        "small_taxpayer": true,
        "tax_number": "string"
      },
      "paid_date": "1970-01-01",
      "partner": {
        "account_number": "string",
        "address": {
          "address": "string",
          "city": "string",
          "country_code": "",
          "post_code": "string"
        },
        "emails": [
          "string"
        ],
        "general_ledger_number": "string",
        "iban": "string",
        "name": "string",
        "phone": "string",
        "swift": "string",
        "taxcode": "string",
        "id": 0
      },
      "payment_method": "aruhitel",
      "payment_status": "expired",
      "settings": {
        "mediated_service": false,
        "online_payment": "",
        "place_id": 0,
        "round": "five",
        "without_financial_fulfillment": false
      },
      "summary": {
        "gross_amount_local": 0,
        "net_amount": 0,
        "net_amount_local": 0,
        "vat_amount": 0,
        "vat_amount_local": 0,
        "vat_rate_summary": [
          {
            "vat_name": "string",
            "vat_percentage": 0,
            "vat_rate_gross_amount": 0,
            "vat_rate_net_amount": 0,
            "vat_rate_vat_amount": 0,
            "vat_rate_vat_amount_local": 0
          }
        ]
      },
      "tags": [
        "string"
      ],
      "type": "advance"
    }
  ],
  "last_page": 0,
  "next_page_url": "string",
  "per_page": 0,
  "prev_page_url": "string",
  "total": 0
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="list-all-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[DocumentList](#schemadocumentlist)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a document

<a id="opIdCreateDocument"></a>

> Code samples

```bash
curl https://example.com/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "bank_account_id": 0,
    "block_id": 0,
    "comment": "string",
    "conversion_rate": "1",
    "currency": "AUD",
    "due_date": "1970-01-01",
    "electronic": false,
    "fulfillment_date": "1970-01-01",
    "items": [
      {
        "product_id": 0,
        "quantity": 0
      }
    ],
    "language": "de",
    "paid": false,
    "partner_id": 0,
    "payment_method": "aruhitel",
    "settings": {
      "mediated_service": false,
      "online_payment": "",
      "place_id": 0,
      "round": "five",
      "without_financial_fulfillment": false
    },
    "type": "advance",
    "vendor_id": "string"
  }'
```

`POST /documents`

Create a new document. Returns a document object if the create is succeded.

> Body parameter

```json
{
  "bank_account_id": 0,
  "block_id": 0,
  "comment": "string",
  "conversion_rate": "1",
  "currency": "AUD",
  "due_date": "1970-01-01",
  "electronic": false,
  "fulfillment_date": "1970-01-01",
  "items": [
    {
      "product_id": 0,
      "quantity": 0
    }
  ],
  "language": "de",
  "paid": false,
  "partner_id": 0,
  "payment_method": "aruhitel",
  "settings": {
    "mediated_service": false,
    "online_payment": "",
    "place_id": 0,
    "round": "five",
    "without_financial_fulfillment": false
  },
  "type": "advance",
  "vendor_id": "string"
}
```

<h3 id="create-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DocumentInsert](#schemadocumentinsert)|true|DocumentInsert object that you would like to store.|
|» bank_account_id|body|integer|false|none|
|» block_id|body|integer|true|none|
|» comment|body|string|false|none|
|» conversion_rate|body|number(float)|false|none|
|» currency|body|[Currency](#schemacurrency)|true|none|
|» due_date|body|string(date)|true|none|
|» electronic|body|boolean|false|none|
|» fulfillment_date|body|string(date)|true|none|
|» items|body|[[DocumentItemData](#schemadocumentitemdata) \| [DocumentProductData](#schemadocumentproductdata)]|false|none|
|» » *oneOf*|body|[DocumentItemData](#schemadocumentitemdata)|false|none|
|» » *oneOf*|body|[DocumentProductData](#schemadocumentproductdata)|false|none|
|» language|body|[DocumentLanguage](#schemadocumentlanguage)|true|none|
|» paid|body|boolean|false|none|
|» partner_id|body|integer|true|none|
|» payment_method|body|[PaymentMethod](#schemapaymentmethod)|true|none|
|» settings|body|[DocumentSettings](#schemadocumentsettings)|false|none|
|» type|body|[DocumentInsertType](#schemadocumentinserttype)|true|none|
|» vendor_id|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|AUD|
|» currency|BGN|
|» currency|BRL|
|» currency|CAD|
|» currency|CHF|
|» currency|CNY|
|» currency|CZK|
|» currency|DKK|
|» currency|EUR|
|» currency|GBP|
|» currency|HKD|
|» currency|HRK|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|ISK|
|» currency|JPY|
|» currency|KRW|
|» currency|LTL|
|» currency|LVL|
|» currency|MXN|
|» currency|MYR|
|» currency|NOK|
|» currency|NZD|
|» currency|PHP|
|» currency|PLN|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|SEK|
|» currency|SGD|
|» currency|THB|
|» currency|TRY|
|» currency|UAH|
|» currency|USD|
|» currency|ZAR|
|» language|de|
|» language|en|
|» language|fr|
|» language|hr|
|» language|hu|
|» language|it|
|» language|ro|
|» language|sk|
|» payment_method|aruhitel|
|» payment_method|bankcard|
|» payment_method|barion|
|» payment_method|barter|
|» payment_method|cash|
|» payment_method|cash_on_delivery|
|» payment_method|coupon|
|» payment_method|elore_utalas|
|» payment_method|ep_kartya|
|» payment_method|kompenzacio|
|» payment_method|levonas|
|» payment_method|online_bankcard|
|» payment_method|payoneer|
|» payment_method|paypal|
|» payment_method|paypal_utolag|
|» payment_method|payu|
|» payment_method|pick_pack_pont|
|» payment_method|postai_csekk|
|» payment_method|postautalvany|
|» payment_method|skrill|
|» payment_method|szep_card|
|» payment_method|transferwise|
|» payment_method|upwork|
|» payment_method|utalvany|
|» payment_method|valto|
|» payment_method|wire_transfer|
|» type|advance|
|» type|draft|
|» type|invoice|
|» type|proforma|

> Example responses

> 201 Response

```json
{
  "block_id": 0,
  "cancelled": true,
  "comment": "string",
  "conversion_rate": 0,
  "currency": "AUD",
  "due_date": "1970-01-01",
  "electronic": true,
  "fulfillment_date": "1970-01-01",
  "gross_total": 0,
  "id": 0,
  "invoice_date": "1970-01-01",
  "invoice_number": "PREFIX / 2020-000001",
  "items": [
    {
      "gross_amount": 0,
      "name": "string",
      "net_amount": 0,
      "net_unit_amount": 0,
      "product_id": 0,
      "quantity": 0,
      "vat": "0%",
      "vat_amount": 0
    }
  ],
  "language": "de",
  "notification_status": "closed",
  "organization": {
    "address": {
      "address": "string",
      "city": "string",
      "country_code": "",
      "post_code": "string"
    },
    "bank_account": {
      "account_number": "string",
      "account_number_iban": "string",
      "id": 0,
      "name": "string",
      "swift": "string"
    },
    "cash_settled": true,
    "eu_tax_number": "string",
    "ev_number": "string",
    "name": "string",
    "small_taxpayer": true,
    "tax_number": "string"
  },
  "paid_date": "1970-01-01",
  "partner": {
    "account_number": "string",
    "address": {
      "address": "string",
      "city": "string",
      "country_code": "",
      "post_code": "string"
    },
    "emails": [
      "string"
    ],
    "general_ledger_number": "string",
    "iban": "string",
    "name": "string",
    "phone": "string",
    "swift": "string",
    "taxcode": "string",
    "id": 0
  },
  "payment_method": "aruhitel",
  "payment_status": "expired",
  "settings": {
    "mediated_service": false,
    "online_payment": "",
    "place_id": 0,
    "round": "five",
    "without_financial_fulfillment": false
  },
  "summary": {
    "gross_amount_local": 0,
    "net_amount": 0,
    "net_amount_local": 0,
    "vat_amount": 0,
    "vat_amount_local": 0,
    "vat_rate_summary": [
      {
        "vat_name": "string",
        "vat_percentage": 0,
        "vat_rate_gross_amount": 0,
        "vat_rate_net_amount": 0,
        "vat_rate_vat_amount": 0,
        "vat_rate_vat_amount_local": 0
      }
    ]
  },
  "tags": [
    "string"
  ],
  "type": "advance"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="create-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Document created successfully.|[Document](#schemadocument)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|403|Forbidden|Authenticated user doesn't have access to the resource.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|201|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|201|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|201|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|403|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|403|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|403|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|403|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve a document

<a id="opIdGetDocument"></a>

> Code samples

```bash
curl https://example.com/documents/0 \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /documents/{id}`

Retrieves the details of an existing document.

<h3 id="retrieve-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "block_id": 0,
  "cancelled": true,
  "comment": "string",
  "conversion_rate": 0,
  "currency": "AUD",
  "due_date": "1970-01-01",
  "electronic": true,
  "fulfillment_date": "1970-01-01",
  "gross_total": 0,
  "id": 0,
  "invoice_date": "1970-01-01",
  "invoice_number": "PREFIX / 2020-000001",
  "items": [
    {
      "gross_amount": 0,
      "name": "string",
      "net_amount": 0,
      "net_unit_amount": 0,
      "product_id": 0,
      "quantity": 0,
      "vat": "0%",
      "vat_amount": 0
    }
  ],
  "language": "de",
  "notification_status": "closed",
  "organization": {
    "address": {
      "address": "string",
      "city": "string",
      "country_code": "",
      "post_code": "string"
    },
    "bank_account": {
      "account_number": "string",
      "account_number_iban": "string",
      "id": 0,
      "name": "string",
      "swift": "string"
    },
    "cash_settled": true,
    "eu_tax_number": "string",
    "ev_number": "string",
    "name": "string",
    "small_taxpayer": true,
    "tax_number": "string"
  },
  "paid_date": "1970-01-01",
  "partner": {
    "account_number": "string",
    "address": {
      "address": "string",
      "city": "string",
      "country_code": "",
      "post_code": "string"
    },
    "emails": [
      "string"
    ],
    "general_ledger_number": "string",
    "iban": "string",
    "name": "string",
    "phone": "string",
    "swift": "string",
    "taxcode": "string",
    "id": 0
  },
  "payment_method": "aruhitel",
  "payment_status": "expired",
  "settings": {
    "mediated_service": false,
    "online_payment": "",
    "place_id": 0,
    "round": "five",
    "without_financial_fulfillment": false
  },
  "summary": {
    "gross_amount_local": 0,
    "net_amount": 0,
    "net_amount_local": 0,
    "vat_amount": 0,
    "vat_amount_local": 0,
    "vat_rate_summary": [
      {
        "vat_name": "string",
        "vat_percentage": 0,
        "vat_rate_gross_amount": 0,
        "vat_rate_net_amount": 0,
        "vat_rate_vat_amount": 0,
        "vat_rate_vat_amount_local": 0
      }
    ]
  },
  "tags": [
    "string"
  ],
  "type": "advance"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="retrieve-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[Document](#schemadocument)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Cancel a document

<a id="opIdCancelDocument"></a>

> Code samples

```bash
curl https://example.com/documents/0/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`POST /documents/{id}/cancel`

Cancel a document. Returns a cancellation document object if the cancellation is succeded.

<h3 id="cancel-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "block_id": 0,
  "cancelled": true,
  "comment": "string",
  "conversion_rate": 0,
  "currency": "AUD",
  "due_date": "1970-01-01",
  "electronic": true,
  "fulfillment_date": "1970-01-01",
  "gross_total": 0,
  "id": 0,
  "invoice_date": "1970-01-01",
  "invoice_number": "PREFIX / 2020-000001",
  "items": [
    {
      "gross_amount": 0,
      "name": "string",
      "net_amount": 0,
      "net_unit_amount": 0,
      "product_id": 0,
      "quantity": 0,
      "vat": "0%",
      "vat_amount": 0
    }
  ],
  "language": "de",
  "notification_status": "closed",
  "organization": {
    "address": {
      "address": "string",
      "city": "string",
      "country_code": "",
      "post_code": "string"
    },
    "bank_account": {
      "account_number": "string",
      "account_number_iban": "string",
      "id": 0,
      "name": "string",
      "swift": "string"
    },
    "cash_settled": true,
    "eu_tax_number": "string",
    "ev_number": "string",
    "name": "string",
    "small_taxpayer": true,
    "tax_number": "string"
  },
  "paid_date": "1970-01-01",
  "partner": {
    "account_number": "string",
    "address": {
      "address": "string",
      "city": "string",
      "country_code": "",
      "post_code": "string"
    },
    "emails": [
      "string"
    ],
    "general_ledger_number": "string",
    "iban": "string",
    "name": "string",
    "phone": "string",
    "swift": "string",
    "taxcode": "string",
    "id": 0
  },
  "payment_method": "aruhitel",
  "payment_status": "expired",
  "settings": {
    "mediated_service": false,
    "online_payment": "",
    "place_id": 0,
    "round": "five",
    "without_financial_fulfillment": false
  },
  "summary": {
    "gross_amount_local": 0,
    "net_amount": 0,
    "net_amount_local": 0,
    "vat_amount": 0,
    "vat_amount_local": 0,
    "vat_rate_summary": [
      {
        "vat_name": "string",
        "vat_percentage": 0,
        "vat_rate_gross_amount": 0,
        "vat_rate_net_amount": 0,
        "vat_rate_vat_amount": 0,
        "vat_rate_vat_amount_local": 0
      }
    ]
  },
  "tags": [
    "string"
  ],
  "type": "advance"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="cancel-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document cancellation successfully. Cancel document returned.|[Document](#schemadocument)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|403|Forbidden|Authenticated user doesn't have access to the resource.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|403|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|403|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|403|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|403|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a document from proforma.

<a id="opIdCreateDocumentFromProforma"></a>

> Code samples

```bash
curl https://example.com/documents/0/create-from-proforma \
  -X POST \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`POST /documents/{id}/create-from-proforma`

Create a new document from proforma. Returns a document object if the create is succeded.

<h3 id="create-a-document-from-proforma-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 201 Response

```json
{
  "block_id": 0,
  "cancelled": true,
  "comment": "string",
  "conversion_rate": 0,
  "currency": "AUD",
  "due_date": "1970-01-01",
  "electronic": true,
  "fulfillment_date": "1970-01-01",
  "gross_total": 0,
  "id": 0,
  "invoice_date": "1970-01-01",
  "invoice_number": "PREFIX / 2020-000001",
  "items": [
    {
      "gross_amount": 0,
      "name": "string",
      "net_amount": 0,
      "net_unit_amount": 0,
      "product_id": 0,
      "quantity": 0,
      "vat": "0%",
      "vat_amount": 0
    }
  ],
  "language": "de",
  "notification_status": "closed",
  "organization": {
    "address": {
      "address": "string",
      "city": "string",
      "country_code": "",
      "post_code": "string"
    },
    "bank_account": {
      "account_number": "string",
      "account_number_iban": "string",
      "id": 0,
      "name": "string",
      "swift": "string"
    },
    "cash_settled": true,
    "eu_tax_number": "string",
    "ev_number": "string",
    "name": "string",
    "small_taxpayer": true,
    "tax_number": "string"
  },
  "paid_date": "1970-01-01",
  "partner": {
    "account_number": "string",
    "address": {
      "address": "string",
      "city": "string",
      "country_code": "",
      "post_code": "string"
    },
    "emails": [
      "string"
    ],
    "general_ledger_number": "string",
    "iban": "string",
    "name": "string",
    "phone": "string",
    "swift": "string",
    "taxcode": "string",
    "id": 0
  },
  "payment_method": "aruhitel",
  "payment_status": "expired",
  "settings": {
    "mediated_service": false,
    "online_payment": "",
    "place_id": 0,
    "round": "five",
    "without_financial_fulfillment": false
  },
  "summary": {
    "gross_amount_local": 0,
    "net_amount": 0,
    "net_amount_local": 0,
    "vat_amount": 0,
    "vat_amount_local": 0,
    "vat_rate_summary": [
      {
        "vat_name": "string",
        "vat_percentage": 0,
        "vat_rate_gross_amount": 0,
        "vat_rate_net_amount": 0,
        "vat_rate_vat_amount": 0,
        "vat_rate_vat_amount_local": 0
      }
    ]
  },
  "tags": [
    "string"
  ],
  "type": "advance"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="create-a-document-from-proforma-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Document created successfully.|[Document](#schemadocument)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|403|Forbidden|Authenticated user doesn't have access to the resource.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|201|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|201|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|201|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|403|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|403|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|403|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|403|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Download a document in PDF format.

<a id="opIdDownloadDocument"></a>

> Code samples

```bash
curl https://example.com/documents/0/download \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /documents/{id}/download`

Download a document. Returns a document in PDF format.

<h3 id="download-a-document-in-pdf-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 202 Response

```json
{
  "message": "string"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="download-a-document-in-pdf-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document PDF file.|Inline|
|202|Accepted|Document PDF has not generated yet. You should try to download again later.|[ClientError](#schemaclienterror)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|202|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|202|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|202|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|202|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve a document Online Számla status

<a id="opIdGetOnlineSzamlaStatus"></a>

> Code samples

```bash
curl https://example.com/documents/0/online-szamla \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /documents/{id}/online-szamla`

Retrieves the details of an existing document status.

<h3 id="retrieve-a-document-online-számla-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "human_readable_message": "string",
      "validation_error_code": "string",
      "validation_result_code": "string"
    }
  ],
  "status": "string",
  "transaction_id": "string"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="retrieve-a-document-online-számla-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[OnlineSzamlaStatus](#schemaonlineszamlastatus)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve a payment histroy

<a id="opIdGetPayment"></a>

> Code samples

```bash
curl https://example.com/documents/0/payments \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /documents/{id}/payments`

Retrieves the details of payment history an existing document.

<h3 id="retrieve-a-payment-histroy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
[
  {
    "conversion_rate": 0,
    "date": "1970-01-01",
    "payment_method": "aruhitel",
    "price": 0,
    "voucher_number": "string"
  }
]
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="retrieve-a-payment-histroy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|Inline|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

<h3 id="retrieve-a-payment-histroy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PaymentHistory](#schemapaymenthistory)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update payment history

<a id="opIdUpdatePayment"></a>

> Code samples

```bash
curl https://example.com/documents/0/payments \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '[
    {
      "conversion_rate": 0,
      "date": "1970-01-01",
      "payment_method": "aruhitel",
      "price": 0,
      "voucher_number": "string"
    }
  ]'
```

`PUT /documents/{id}/payments`

Update payment history an existing document. Returns a payment history object if the update is succeded.

> Body parameter

```json
[
  {
    "conversion_rate": 0,
    "date": "1970-01-01",
    "payment_method": "aruhitel",
    "price": 0,
    "voucher_number": "string"
  }
]
```

<h3 id="update-payment-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[[PaymentHistory](#schemapaymenthistory)]|true|Payment history object that you would like to update.|

> Example responses

> 200 Response

```json
[
  {
    "conversion_rate": 0,
    "date": "1970-01-01",
    "payment_method": "aruhitel",
    "price": 0,
    "voucher_number": "string"
  }
]
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="update-payment-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment history updated successfully.|Inline|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|403|Forbidden|Authenticated user doesn't have access to the resource.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

<h3 id="update-payment-history-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PaymentHistory](#schemapaymenthistory)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|403|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|403|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|403|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|403|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete all payment history on document

<a id="opIdDeletePayment"></a>

> Code samples

```bash
curl https://example.com/documents/0/payments \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`DELETE /documents/{id}/payments`

Delete all exist payment history on document.

<h3 id="delete-all-payment-history-on-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
[
  {
    "conversion_rate": 0,
    "date": "1970-01-01",
    "payment_method": "aruhitel",
    "price": 0,
    "voucher_number": "string"
  }
]
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="delete-all-payment-history-on-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment history deleted successfully.|Inline|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|403|Forbidden|Authenticated user doesn't have access to the resource.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

<h3 id="delete-all-payment-history-on-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PaymentHistory](#schemapaymenthistory)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|403|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|403|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|403|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|403|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve a document download public url.

<a id="opIdGetPublicUrl"></a>

> Code samples

```bash
curl https://example.com/documents/0/public-url \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /documents/{id}/public-url`

Retrieves public url to download an existing document.

<h3 id="retrieve-a-document-download-public-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "public_url": "string"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="retrieve-a-document-download-public-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[DocumentPublicUrl](#schemadocumentpublicurl)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Send invoice to given email adresses.

<a id="opIdSendDocument"></a>

> Code samples

```bash
curl https://example.com/documents/0/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "emails": [
      "string"
    ]
  }'
```

`POST /documents/{id}/send`

Returns a list of emails, where the invoice is sent.

> Body parameter

```json
{
  "emails": [
    "string"
  ]
}
```

<h3 id="send-invoice-to-given-email-adresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[SendDocument](#schemasenddocument)|false|List of email-s where you want to send the invoice.|
|» emails|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "emails": [
    "string"
  ]
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="send-invoice-to-given-email-adresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of email adresses where the invoice sent.|[SendDocument](#schemasenddocument)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|403|Forbidden|Authenticated user doesn't have access to the resource.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|403|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|403|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|403|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|403|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="billingo-api-v3-documentblock">DocumentBlock</h1>

DocumentBlock object represents your invoice pad.

## List all document blocks

<a id="opIdListDocumentBlock"></a>

> Code samples

```bash
curl https://example.com/document-blocks \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /document-blocks`

Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.

<h3 id="list-all-document-blocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|per_page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "current_page": 0,
  "data": [
    {
      "custom_field1": "string",
      "custom_field2": "string",
      "id": 0,
      "name": "string",
      "prefix": "string"
    }
  ],
  "last_page": 0,
  "next_page_url": "string",
  "per_page": 0,
  "prev_page_url": "string",
  "total": 0
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="list-all-document-blocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[DocumentBlockList](#schemadocumentblocklist)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="billingo-api-v3-partner">Partner</h1>

Partner object represents your client.

## List all partners

<a id="opIdListPartner"></a>

> Code samples

```bash
curl https://example.com/partners \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /partners`

Returns a list of your partners. The partners are returned sorted by creation date, with the most recent partners appearing first.

<h3 id="list-all-partners-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|per_page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "current_page": 0,
  "data": [
    {
      "account_number": "string",
      "address": {
        "address": "string",
        "city": "string",
        "country_code": "",
        "post_code": "string"
      },
      "emails": [
        "string"
      ],
      "general_ledger_number": "string",
      "iban": "string",
      "name": "string",
      "phone": "string",
      "swift": "string",
      "taxcode": "string",
      "id": 0
    }
  ],
  "last_page": 0,
  "next_page_url": "string",
  "per_page": 0,
  "prev_page_url": "string",
  "total": 0
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="list-all-partners-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[PartnerList](#schemapartnerlist)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a partner

<a id="opIdCreatePartner"></a>

> Code samples

```bash
curl https://example.com/partners \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "account_number": "string",
    "address": {
      "address": "string",
      "city": "string",
      "country_code": "",
      "post_code": "string"
    },
    "emails": [
      "string"
    ],
    "general_ledger_number": "string",
    "iban": "string",
    "name": "string",
    "phone": "string",
    "swift": "string",
    "taxcode": "string"
  }'
```

`POST /partners`

Create a new partner. Returns a partner object if the create is succeded.

> Body parameter

```json
{
  "account_number": "string",
  "address": {
    "address": "string",
    "city": "string",
    "country_code": "",
    "post_code": "string"
  },
  "emails": [
    "string"
  ],
  "general_ledger_number": "string",
  "iban": "string",
  "name": "string",
  "phone": "string",
  "swift": "string",
  "taxcode": "string"
}
```

<h3 id="create-a-partner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PartnerUpsert](#schemapartnerupsert)|true|PartnerUpsert object that you would like to store.|
|» account_number|body|string|false|none|
|» address|body|[Address](#schemaaddress)|true|none|
|» emails|body|[string]|false|none|
|» general_ledger_number|body|string|false|none|
|» iban|body|string|false|none|
|» name|body|string|true|none|
|» phone|body|string|false|none|
|» swift|body|string|false|none|
|» taxcode|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "account_number": "string",
  "address": {
    "address": "string",
    "city": "string",
    "country_code": "",
    "post_code": "string"
  },
  "emails": [
    "string"
  ],
  "general_ledger_number": "string",
  "iban": "string",
  "name": "string",
  "phone": "string",
  "swift": "string",
  "taxcode": "string",
  "id": 0
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="create-a-partner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Partner created successfully.|[Partner](#schemapartner)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|403|Forbidden|Authenticated user doesn't have access to the resource.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|201|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|201|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|201|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|403|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|403|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|403|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|403|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve a partner

<a id="opIdGetPartner"></a>

> Code samples

```bash
curl https://example.com/partners/0 \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /partners/{id}`

Retrieves the details of an existing partner.

<h3 id="retrieve-a-partner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "account_number": "string",
  "address": {
    "address": "string",
    "city": "string",
    "country_code": "",
    "post_code": "string"
  },
  "emails": [
    "string"
  ],
  "general_ledger_number": "string",
  "iban": "string",
  "name": "string",
  "phone": "string",
  "swift": "string",
  "taxcode": "string",
  "id": 0
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="retrieve-a-partner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[Partner](#schemapartner)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update a partner

<a id="opIdUpdatePartner"></a>

> Code samples

```bash
curl https://example.com/partners/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "account_number": "string",
    "address": {
      "address": "string",
      "city": "string",
      "country_code": "",
      "post_code": "string"
    },
    "emails": [
      "string"
    ],
    "general_ledger_number": "string",
    "iban": "string",
    "name": "string",
    "phone": "string",
    "swift": "string",
    "taxcode": "string"
  }'
```

`PUT /partners/{id}`

Update an existing partner. Returns a partner object if the update is succeded.

> Body parameter

```json
{
  "account_number": "string",
  "address": {
    "address": "string",
    "city": "string",
    "country_code": "",
    "post_code": "string"
  },
  "emails": [
    "string"
  ],
  "general_ledger_number": "string",
  "iban": "string",
  "name": "string",
  "phone": "string",
  "swift": "string",
  "taxcode": "string"
}
```

<h3 id="update-a-partner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[PartnerUpsert](#schemapartnerupsert)|true|Partner object that you would like to update.|
|» account_number|body|string|false|none|
|» address|body|[Address](#schemaaddress)|true|none|
|» emails|body|[string]|false|none|
|» general_ledger_number|body|string|false|none|
|» iban|body|string|false|none|
|» name|body|string|true|none|
|» phone|body|string|false|none|
|» swift|body|string|false|none|
|» taxcode|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "account_number": "string",
  "address": {
    "address": "string",
    "city": "string",
    "country_code": "",
    "post_code": "string"
  },
  "emails": [
    "string"
  ],
  "general_ledger_number": "string",
  "iban": "string",
  "name": "string",
  "phone": "string",
  "swift": "string",
  "taxcode": "string",
  "id": 0
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="update-a-partner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Partner updated successfully.|[Partner](#schemapartner)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|403|Forbidden|Authenticated user doesn't have access to the resource.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|403|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|403|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|403|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|403|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete a partner

<a id="opIdDeletePartner"></a>

> Code samples

```bash
curl https://example.com/partners/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`DELETE /partners/{id}`

Delete an existing partner.

<h3 id="delete-a-partner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="delete-a-partner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Partner deleted successfully.|None|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|403|Forbidden|Authenticated user doesn't have access to the resource.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|204|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|204|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|204|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|403|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|403|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|403|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|403|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="billingo-api-v3-product">Product</h1>

Product object represents your document's product.

## List all product

<a id="opIdListProduct"></a>

> Code samples

```bash
curl https://example.com/products \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /products`

Returns a list of your products. The partners are returned sorted by creation date, with the most recent partners appearing first.

<h3 id="list-all-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|per_page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "current_page": 0,
  "data": [
    {
      "comment": "string",
      "currency": "AUD",
      "general_ledger_number": "string",
      "general_ledger_taxcode": "string",
      "id": 0,
      "name": "string",
      "net_unit_price": 0,
      "unit": "string",
      "vat": "0%"
    }
  ],
  "last_page": 0,
  "next_page_url": "string",
  "per_page": 0,
  "prev_page_url": "string",
  "total": 0
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="list-all-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[ProductList](#schemaproductlist)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a product

<a id="opIdCreateProduct"></a>

> Code samples

```bash
curl https://example.com/products \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "comment": "string",
    "currency": "AUD",
    "general_ledger_number": "string",
    "general_ledger_taxcode": "string",
    "name": "string",
    "net_unit_price": 0,
    "unit": "string",
    "vat": "0%"
  }'
```

`POST /products`

Create a new product. Returns a product object if the create is succeded.

> Body parameter

```json
{
  "comment": "string",
  "currency": "AUD",
  "general_ledger_number": "string",
  "general_ledger_taxcode": "string",
  "name": "string",
  "net_unit_price": 0,
  "unit": "string",
  "vat": "0%"
}
```

<h3 id="create-a-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Product](#schemaproduct)|true|Product object that you would like to store.|
|» comment|body|string|false|none|
|» currency|body|[Currency](#schemacurrency)|true|none|
|» general_ledger_number|body|string|false|none|
|» general_ledger_taxcode|body|string|false|none|
|» name|body|string|true|none|
|» net_unit_price|body|number(float)|false|none|
|» unit|body|string|true|none|
|» vat|body|[Vat](#schemavat)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|AUD|
|» currency|BGN|
|» currency|BRL|
|» currency|CAD|
|» currency|CHF|
|» currency|CNY|
|» currency|CZK|
|» currency|DKK|
|» currency|EUR|
|» currency|GBP|
|» currency|HKD|
|» currency|HRK|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|ISK|
|» currency|JPY|
|» currency|KRW|
|» currency|LTL|
|» currency|LVL|
|» currency|MXN|
|» currency|MYR|
|» currency|NOK|
|» currency|NZD|
|» currency|PHP|
|» currency|PLN|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|SEK|
|» currency|SGD|
|» currency|THB|
|» currency|TRY|
|» currency|UAH|
|» currency|USD|
|» currency|ZAR|
|» vat|0%|
|» vat|1%|
|» vat|10%|
|» vat|11%|
|» vat|12%|
|» vat|13%|
|» vat|14%|
|» vat|15%|
|» vat|16%|
|» vat|17%|
|» vat|18%|
|» vat|19%|
|» vat|2%|
|» vat|20%|
|» vat|21%|
|» vat|22%|
|» vat|23%|
|» vat|24%|
|» vat|25%|
|» vat|26%|
|» vat|27%|
|» vat|3%|
|» vat|4%|
|» vat|5%|
|» vat|6%|
|» vat|7%|
|» vat|8%|
|» vat|9%|
|» vat|AAM|
|» vat|AM|
|» vat|EU|
|» vat|EUK|
|» vat|F.AFA|
|» vat|FAD|
|» vat|K.AFA|
|» vat|MAA|
|» vat|TAM|
|» vat|ÁKK|
|» vat|ÁTHK|

> Example responses

> 201 Response

```json
{
  "comment": "string",
  "currency": "AUD",
  "general_ledger_number": "string",
  "general_ledger_taxcode": "string",
  "id": 0,
  "name": "string",
  "net_unit_price": 0,
  "unit": "string",
  "vat": "0%"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="create-a-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Product created successfully.|[Product](#schemaproduct)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|403|Forbidden|Authenticated user doesn't have access to the resource.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|201|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|201|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|201|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|403|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|403|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|403|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|403|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve a product

<a id="opIdGetProduct"></a>

> Code samples

```bash
curl https://example.com/products/0 \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /products/{id}`

Retrieves the details of an existing product.

<h3 id="retrieve-a-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "comment": "string",
  "currency": "AUD",
  "general_ledger_number": "string",
  "general_ledger_taxcode": "string",
  "id": 0,
  "name": "string",
  "net_unit_price": 0,
  "unit": "string",
  "vat": "0%"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="retrieve-a-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[Product](#schemaproduct)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update a product

<a id="opIdUpdateProduct"></a>

> Code samples

```bash
curl https://example.com/products/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "comment": "string",
    "currency": "AUD",
    "general_ledger_number": "string",
    "general_ledger_taxcode": "string",
    "name": "string",
    "net_unit_price": 0,
    "unit": "string",
    "vat": "0%"
  }'
```

`PUT /products/{id}`

Update an existing product. Returns a product object if the update is succeded.

> Body parameter

```json
{
  "comment": "string",
  "currency": "AUD",
  "general_ledger_number": "string",
  "general_ledger_taxcode": "string",
  "name": "string",
  "net_unit_price": 0,
  "unit": "string",
  "vat": "0%"
}
```

<h3 id="update-a-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[Product](#schemaproduct)|true|Product object that you would like to update.|
|» comment|body|string|false|none|
|» currency|body|[Currency](#schemacurrency)|true|none|
|» general_ledger_number|body|string|false|none|
|» general_ledger_taxcode|body|string|false|none|
|» name|body|string|true|none|
|» net_unit_price|body|number(float)|false|none|
|» unit|body|string|true|none|
|» vat|body|[Vat](#schemavat)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|AUD|
|» currency|BGN|
|» currency|BRL|
|» currency|CAD|
|» currency|CHF|
|» currency|CNY|
|» currency|CZK|
|» currency|DKK|
|» currency|EUR|
|» currency|GBP|
|» currency|HKD|
|» currency|HRK|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|ISK|
|» currency|JPY|
|» currency|KRW|
|» currency|LTL|
|» currency|LVL|
|» currency|MXN|
|» currency|MYR|
|» currency|NOK|
|» currency|NZD|
|» currency|PHP|
|» currency|PLN|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|SEK|
|» currency|SGD|
|» currency|THB|
|» currency|TRY|
|» currency|UAH|
|» currency|USD|
|» currency|ZAR|
|» vat|0%|
|» vat|1%|
|» vat|10%|
|» vat|11%|
|» vat|12%|
|» vat|13%|
|» vat|14%|
|» vat|15%|
|» vat|16%|
|» vat|17%|
|» vat|18%|
|» vat|19%|
|» vat|2%|
|» vat|20%|
|» vat|21%|
|» vat|22%|
|» vat|23%|
|» vat|24%|
|» vat|25%|
|» vat|26%|
|» vat|27%|
|» vat|3%|
|» vat|4%|
|» vat|5%|
|» vat|6%|
|» vat|7%|
|» vat|8%|
|» vat|9%|
|» vat|AAM|
|» vat|AM|
|» vat|EU|
|» vat|EUK|
|» vat|F.AFA|
|» vat|FAD|
|» vat|K.AFA|
|» vat|MAA|
|» vat|TAM|
|» vat|ÁKK|
|» vat|ÁTHK|

> Example responses

> 200 Response

```json
{
  "comment": "string",
  "currency": "AUD",
  "general_ledger_number": "string",
  "general_ledger_taxcode": "string",
  "id": 0,
  "name": "string",
  "net_unit_price": 0,
  "unit": "string",
  "vat": "0%"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="update-a-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Product updated successfully.|[Product](#schemaproduct)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|403|Forbidden|Authenticated user doesn't have access to the resource.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|403|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|403|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|403|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|403|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete a product

<a id="opIdDeleteProduct"></a>

> Code samples

```bash
curl https://example.com/products/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`DELETE /products/{id}`

Delete an existing product.

<h3 id="delete-a-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="delete-a-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Product deleted successfully.|None|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|403|Forbidden|Authenticated user doesn't have access to the resource.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|204|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|204|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|204|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|403|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|403|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|403|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|403|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="billingo-api-v3-bankaccount">BankAccount</h1>

BankAccount object represents your bank account information.

## List all bank account

<a id="opIdListBankAccount"></a>

> Code samples

```bash
curl https://example.com/bank-accounts \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /bank-accounts`

Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.

<h3 id="list-all-bank-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|none|
|per_page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "current_page": 0,
  "data": [
    {
      "account_number": "string",
      "account_number_iban": "string",
      "currency": "AUD",
      "id": 0,
      "name": "string",
      "need_qr": "false",
      "swift": "string"
    }
  ],
  "last_page": 0,
  "next_page_url": "string",
  "per_page": 0,
  "prev_page_url": "string",
  "total": 0
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="list-all-bank-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[BankAccountList](#schemabankaccountlist)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a bank account

<a id="opIdCreateBankAccount"></a>

> Code samples

```bash
curl https://example.com/bank-accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "account_number": "string",
    "account_number_iban": "string",
    "currency": "AUD",
    "name": "string",
    "need_qr": "false",
    "swift": "string"
  }'
```

`POST /bank-accounts`

Create a new bank account. Returns a bank account object if the create is succeded.

> Body parameter

```json
{
  "account_number": "string",
  "account_number_iban": "string",
  "currency": "AUD",
  "name": "string",
  "need_qr": "false",
  "swift": "string"
}
```

<h3 id="create-a-bank-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BankAccount](#schemabankaccount)|true|BankAccount object that you would like to store.|
|» account_number|body|string|true|none|
|» account_number_iban|body|string|false|none|
|» currency|body|[Currency](#schemacurrency)|true|none|
|» name|body|string|true|none|
|» need_qr|body|boolean|false|none|
|» swift|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|AUD|
|» currency|BGN|
|» currency|BRL|
|» currency|CAD|
|» currency|CHF|
|» currency|CNY|
|» currency|CZK|
|» currency|DKK|
|» currency|EUR|
|» currency|GBP|
|» currency|HKD|
|» currency|HRK|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|ISK|
|» currency|JPY|
|» currency|KRW|
|» currency|LTL|
|» currency|LVL|
|» currency|MXN|
|» currency|MYR|
|» currency|NOK|
|» currency|NZD|
|» currency|PHP|
|» currency|PLN|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|SEK|
|» currency|SGD|
|» currency|THB|
|» currency|TRY|
|» currency|UAH|
|» currency|USD|
|» currency|ZAR|

> Example responses

> 201 Response

```json
{
  "account_number": "string",
  "account_number_iban": "string",
  "currency": "AUD",
  "id": 0,
  "name": "string",
  "need_qr": "false",
  "swift": "string"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="create-a-bank-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|BankAccount created successfully.|[BankAccount](#schemabankaccount)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|403|Forbidden|Authenticated user doesn't have access to the resource.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|201|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|201|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|201|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|403|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|403|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|403|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|403|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Retrieve a bank account

<a id="opIdGetBankAccount"></a>

> Code samples

```bash
curl https://example.com/bank-accounts/0 \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /bank-accounts/{id}`

Retrieves the details of an existing bank account.

<h3 id="retrieve-a-bank-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "account_number": "string",
  "account_number_iban": "string",
  "currency": "AUD",
  "id": 0,
  "name": "string",
  "need_qr": "false",
  "swift": "string"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="retrieve-a-bank-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[BankAccount](#schemabankaccount)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update a bank account

<a id="opIdUpdateBankAccount"></a>

> Code samples

```bash
curl https://example.com/bank-accounts/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}" \
  -d '{
    "account_number": "string",
    "account_number_iban": "string",
    "currency": "AUD",
    "name": "string",
    "need_qr": "false",
    "swift": "string"
  }'
```

`PUT /bank-accounts/{id}`

Update an existing bank accounts. Returns a bank account object if the update is succeded.

> Body parameter

```json
{
  "account_number": "string",
  "account_number_iban": "string",
  "currency": "AUD",
  "name": "string",
  "need_qr": "false",
  "swift": "string"
}
```

<h3 id="update-a-bank-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|body|body|[BankAccount](#schemabankaccount)|true|Bank account object that you would like to update.|
|» account_number|body|string|true|none|
|» account_number_iban|body|string|false|none|
|» currency|body|[Currency](#schemacurrency)|true|none|
|» name|body|string|true|none|
|» need_qr|body|boolean|false|none|
|» swift|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currency|AUD|
|» currency|BGN|
|» currency|BRL|
|» currency|CAD|
|» currency|CHF|
|» currency|CNY|
|» currency|CZK|
|» currency|DKK|
|» currency|EUR|
|» currency|GBP|
|» currency|HKD|
|» currency|HRK|
|» currency|HUF|
|» currency|IDR|
|» currency|ILS|
|» currency|INR|
|» currency|ISK|
|» currency|JPY|
|» currency|KRW|
|» currency|LTL|
|» currency|LVL|
|» currency|MXN|
|» currency|MYR|
|» currency|NOK|
|» currency|NZD|
|» currency|PHP|
|» currency|PLN|
|» currency|RON|
|» currency|RSD|
|» currency|RUB|
|» currency|SEK|
|» currency|SGD|
|» currency|THB|
|» currency|TRY|
|» currency|UAH|
|» currency|USD|
|» currency|ZAR|

> Example responses

> 200 Response

```json
{
  "account_number": "string",
  "account_number_iban": "string",
  "currency": "AUD",
  "id": 0,
  "name": "string",
  "need_qr": "false",
  "swift": "string"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="update-a-bank-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bank account updated successfully.|[BankAccount](#schemabankaccount)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|403|Forbidden|Authenticated user doesn't have access to the resource.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|403|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|403|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|403|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|403|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete a bank account

<a id="opIdDeleteBankAccount"></a>

> Code samples

```bash
curl https://example.com/bank-accounts/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`DELETE /bank-accounts/{id}`

Delete an existing bank account.

<h3 id="delete-a-bank-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 403 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="delete-a-bank-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Bank account deleted successfully.|None|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|403|Forbidden|Authenticated user doesn't have access to the resource.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|204|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|204|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|204|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|403|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|403|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|403|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|403|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="billingo-api-v3-currency">Currency</h1>

## Get currencies exchange rate.

<a id="opIdGetConversionRate"></a>

> Code samples

```bash
curl 'https://example.com/currencies?from=AUD&to=AUD' \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /currencies`

Return with the exchange value of given currencies.

<h3 id="get-currencies-exchange-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|[Currency](#schemacurrency)|true|none|
|to|query|[Currency](#schemacurrency)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|from|AUD|
|from|BGN|
|from|BRL|
|from|CAD|
|from|CHF|
|from|CNY|
|from|CZK|
|from|DKK|
|from|EUR|
|from|GBP|
|from|HKD|
|from|HRK|
|from|HUF|
|from|IDR|
|from|ILS|
|from|INR|
|from|ISK|
|from|JPY|
|from|KRW|
|from|LTL|
|from|LVL|
|from|MXN|
|from|MYR|
|from|NOK|
|from|NZD|
|from|PHP|
|from|PLN|
|from|RON|
|from|RSD|
|from|RUB|
|from|SEK|
|from|SGD|
|from|THB|
|from|TRY|
|from|UAH|
|from|USD|
|from|ZAR|
|to|AUD|
|to|BGN|
|to|BRL|
|to|CAD|
|to|CHF|
|to|CNY|
|to|CZK|
|to|DKK|
|to|EUR|
|to|GBP|
|to|HKD|
|to|HRK|
|to|HUF|
|to|IDR|
|to|ILS|
|to|INR|
|to|ISK|
|to|JPY|
|to|KRW|
|to|LTL|
|to|LVL|
|to|MXN|
|to|MYR|
|to|NOK|
|to|NZD|
|to|PHP|
|to|PLN|
|to|RON|
|to|RSD|
|to|RUB|
|to|SEK|
|to|SGD|
|to|THB|
|to|TRY|
|to|UAH|
|to|USD|
|to|ZAR|

> Example responses

> 200 Response

```json
{
  "conversation_rate": 0,
  "from_currency": "AUD",
  "to_currency": "AUD"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="get-currencies-exchange-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Currencies exchange rate returned.|[ConversationRate](#schemaconversationrate)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="billingo-api-v3-organization">Organization</h1>

## Retrieve a organization data.

<a id="opIdGetOrganizationData"></a>

> Code samples

```bash
curl https://example.com/organization \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /organization`

Retrieves the data of organization.

> Example responses

> 200 Response

```json
{
  "tax_code": "string"
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="retrieve-a-organization-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[OrganizationData](#schemaorganizationdata)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="billingo-api-v3-util">Util</h1>

## Convert legacy ID to v3 ID.

<a id="opIdGetId"></a>

> Code samples

```bash
curl https://example.com/utils/convert-legacy-id/0 \
  -H 'Accept: application/json' \
  -H "X-API-KEY: ${API_KEY}"
```

`GET /utils/convert-legacy-id/{id}`

Retrieves the API v3 ID.

<h3 id="convert-legacy-id-to-v3-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "legacy_id": 0
}
```

> 400 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 401 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 404 Response

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

> 422 Response

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

> 500 Response

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

<h3 id="convert-legacy-id-to-v3-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response|[Id](#schemaid)|
|400|Bad Request|The request is malformed.|[ClientErrorResponse](#schemaclienterrorresponse)|
|401|Unauthorized|Authorization information is missing or invalid.|[ClientErrorResponse](#schemaclienterrorresponse)|
|404|Not Found|Non-existent resource is requested.|[ClientErrorResponse](#schemaclienterrorresponse)|
|422|Unprocessable Entity|Validation errors occured.|[ValidationErrorResponse](#schemavalidationerrorresponse)|
|500|Internal Server Error|Internal server error.|[ServerErrorResponse](#schemaservererrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|200|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|200|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|200|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|400|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|400|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|400|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|400|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|401|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|401|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|401|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|401|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|404|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|404|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|404|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|404|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|422|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|422|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|422|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|422|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|
|500|Retry-After|integer|int32|How many seconds you have to wait before making new request.|
|500|X-RateLimit-Limit|integer|int32|Request limit per minute.|
|500|X-RateLimit-Remaining|integer|int32|The number of requests left for the time window.|
|500|X-RateLimit-Reset|integer|int32|The timestamp at which the current rate limit window resets.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

# Schemas

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "address": "string",
  "city": "string",
  "country_code": "",
  "post_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|true|none|none|
|city|string|true|none|none|
|country_code|[Country](#schemacountry)|true|none|none|
|post_code|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|country_code|""|
|country_code|AC|
|country_code|AD|
|country_code|AE|
|country_code|AF|
|country_code|AG|
|country_code|AI|
|country_code|AL|
|country_code|AM|
|country_code|AO|
|country_code|AQ|
|country_code|AR|
|country_code|AS|
|country_code|AT|
|country_code|AU|
|country_code|AW|
|country_code|AX|
|country_code|AZ|
|country_code|BA|
|country_code|BB|
|country_code|BD|
|country_code|BE|
|country_code|BF|
|country_code|BG|
|country_code|BH|
|country_code|BI|
|country_code|BJ|
|country_code|BL|
|country_code|BM|
|country_code|BN|
|country_code|BO|
|country_code|BQ|
|country_code|BR|
|country_code|BS|
|country_code|BT|
|country_code|BW|
|country_code|BY|
|country_code|BZ|
|country_code|CA|
|country_code|CC|
|country_code|CD|
|country_code|CF|
|country_code|CG|
|country_code|CH|
|country_code|CI|
|country_code|CK|
|country_code|CL|
|country_code|CM|
|country_code|CN|
|country_code|CO|
|country_code|CR|
|country_code|CU|
|country_code|CV|
|country_code|CW|
|country_code|CX|
|country_code|CY|
|country_code|CZ|
|country_code|DE|
|country_code|DG|
|country_code|DJ|
|country_code|DK|
|country_code|DM|
|country_code|DO|
|country_code|DZ|
|country_code|EA|
|country_code|EC|
|country_code|EE|
|country_code|EG|
|country_code|EH|
|country_code|ER|
|country_code|ES|
|country_code|ET|
|country_code|FI|
|country_code|FJ|
|country_code|FK|
|country_code|FM|
|country_code|FO|
|country_code|FR|
|country_code|GA|
|country_code|GB|
|country_code|GD|
|country_code|GE|
|country_code|GF|
|country_code|GG|
|country_code|GH|
|country_code|GI|
|country_code|GL|
|country_code|GM|
|country_code|GN|
|country_code|GP|
|country_code|GQ|
|country_code|GR|
|country_code|GS|
|country_code|GT|
|country_code|GU|
|country_code|GW|
|country_code|GY|
|country_code|HK|
|country_code|HN|
|country_code|HR|
|country_code|HT|
|country_code|HU|
|country_code|IC|
|country_code|ID|
|country_code|IE|
|country_code|IL|
|country_code|IM|
|country_code|IN|
|country_code|IO|
|country_code|IQ|
|country_code|IR|
|country_code|IS|
|country_code|IT|
|country_code|JE|
|country_code|JM|
|country_code|JO|
|country_code|JP|
|country_code|KE|
|country_code|KG|
|country_code|KH|
|country_code|KI|
|country_code|KM|
|country_code|KN|
|country_code|KP|
|country_code|KR|
|country_code|KW|
|country_code|KY|
|country_code|KZ|
|country_code|LA|
|country_code|LB|
|country_code|LC|
|country_code|LI|
|country_code|LK|
|country_code|LR|
|country_code|LS|
|country_code|LT|
|country_code|LU|
|country_code|LV|
|country_code|LY|
|country_code|MA|
|country_code|MC|
|country_code|MD|
|country_code|ME|
|country_code|MF|
|country_code|MG|
|country_code|MH|
|country_code|MK|
|country_code|ML|
|country_code|MM|
|country_code|MN|
|country_code|MO|
|country_code|MP|
|country_code|MQ|
|country_code|MR|
|country_code|MS|
|country_code|MT|
|country_code|MU|
|country_code|MV|
|country_code|MW|
|country_code|MX|
|country_code|MY|
|country_code|MZ|
|country_code|NA|
|country_code|NC|
|country_code|NE|
|country_code|NF|
|country_code|NG|
|country_code|NI|
|country_code|NL|
|country_code|NO|
|country_code|NP|
|country_code|NR|
|country_code|NU|
|country_code|NZ|
|country_code|OM|
|country_code|PA|
|country_code|PE|
|country_code|PF|
|country_code|PG|
|country_code|PH|
|country_code|PK|
|country_code|PL|
|country_code|PM|
|country_code|PN|
|country_code|PR|
|country_code|PS|
|country_code|PT|
|country_code|PW|
|country_code|PY|
|country_code|QA|
|country_code|RE|
|country_code|RO|
|country_code|RS|
|country_code|RU|
|country_code|RW|
|country_code|SA|
|country_code|SB|
|country_code|SC|
|country_code|SD|
|country_code|SE|
|country_code|SG|
|country_code|SH|
|country_code|SI|
|country_code|SJ|
|country_code|SK|
|country_code|SL|
|country_code|SM|
|country_code|SN|
|country_code|SO|
|country_code|SR|
|country_code|SS|
|country_code|ST|
|country_code|SV|
|country_code|SX|
|country_code|SY|
|country_code|SZ|
|country_code|TA|
|country_code|TC|
|country_code|TD|
|country_code|TF|
|country_code|TG|
|country_code|TH|
|country_code|TJ|
|country_code|TK|
|country_code|TL|
|country_code|TM|
|country_code|TN|
|country_code|TO|
|country_code|TR|
|country_code|TT|
|country_code|TV|
|country_code|TW|
|country_code|TZ|
|country_code|UA|
|country_code|UG|
|country_code|UM|
|country_code|US|
|country_code|UY|
|country_code|UZ|
|country_code|VA|
|country_code|VC|
|country_code|VE|
|country_code|VG|
|country_code|VI|
|country_code|VN|
|country_code|VU|
|country_code|WF|
|country_code|WS|
|country_code|XA|
|country_code|XB|
|country_code|XK|
|country_code|YE|
|country_code|YT|
|country_code|ZA|
|country_code|ZM|
|country_code|ZW|

<h2 id="tocS_BankAccount">BankAccount</h2>
<!-- backwards compatibility -->
<a id="schemabankaccount"></a>
<a id="schema_BankAccount"></a>
<a id="tocSbankaccount"></a>
<a id="tocsbankaccount"></a>

```json
{
  "account_number": "string",
  "account_number_iban": "string",
  "currency": "AUD",
  "id": 0,
  "name": "string",
  "need_qr": "false",
  "swift": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|none|
|account_number_iban|string|false|none|none|
|currency|[Currency](#schemacurrency)|true|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|need_qr|boolean|false|none|none|
|swift|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|AUD|
|currency|BGN|
|currency|BRL|
|currency|CAD|
|currency|CHF|
|currency|CNY|
|currency|CZK|
|currency|DKK|
|currency|EUR|
|currency|GBP|
|currency|HKD|
|currency|HRK|
|currency|HUF|
|currency|IDR|
|currency|ILS|
|currency|INR|
|currency|ISK|
|currency|JPY|
|currency|KRW|
|currency|LTL|
|currency|LVL|
|currency|MXN|
|currency|MYR|
|currency|NOK|
|currency|NZD|
|currency|PHP|
|currency|PLN|
|currency|RON|
|currency|RSD|
|currency|RUB|
|currency|SEK|
|currency|SGD|
|currency|THB|
|currency|TRY|
|currency|UAH|
|currency|USD|
|currency|ZAR|

<h2 id="tocS_BankAccountList">BankAccountList</h2>
<!-- backwards compatibility -->
<a id="schemabankaccountlist"></a>
<a id="schema_BankAccountList"></a>
<a id="tocSbankaccountlist"></a>
<a id="tocsbankaccountlist"></a>

```json
{
  "current_page": 0,
  "data": [
    {
      "account_number": "string",
      "account_number_iban": "string",
      "currency": "AUD",
      "id": 0,
      "name": "string",
      "need_qr": "false",
      "swift": "string"
    }
  ],
  "last_page": 0,
  "next_page_url": "string",
  "per_page": 0,
  "prev_page_url": "string",
  "total": 0
}
```

A object with a data property that contains an array of up to limit bank accounts. Each entry in the array is a separate bank account object. If no more bank accounts are available, the resulting array will be empty.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_page|integer|false|none|none|
|data|[[BankAccount](#schemabankaccount)]|false|none|none|
|last_page|integer|false|none|none|
|next_page_url|string|false|none|none|
|per_page|integer|false|none|none|
|prev_page_url|string|false|none|none|
|total|integer|false|none|none|

<h2 id="tocS_ClientError">ClientError</h2>
<!-- backwards compatibility -->
<a id="schemaclienterror"></a>
<a id="schema_ClientError"></a>
<a id="tocSclienterror"></a>
<a id="tocsclienterror"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_ClientErrorResponse">ClientErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclienterrorresponse"></a>
<a id="schema_ClientErrorResponse"></a>
<a id="tocSclienterrorresponse"></a>
<a id="tocsclienterrorresponse"></a>

```json
{
  "error": {
    "message": "Authorization information (Header: %s) is missing or invalid."
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ClientError](#schemaclienterror)|false|none|none|

<h2 id="tocS_ConversationRate">ConversationRate</h2>
<!-- backwards compatibility -->
<a id="schemaconversationrate"></a>
<a id="schema_ConversationRate"></a>
<a id="tocSconversationrate"></a>
<a id="tocsconversationrate"></a>

```json
{
  "conversation_rate": 0,
  "from_currency": "AUD",
  "to_currency": "AUD"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversation_rate|number(float)|false|none|none|
|from_currency|[Currency](#schemacurrency)|false|none|none|
|to_currency|[Currency](#schemacurrency)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|from_currency|AUD|
|from_currency|BGN|
|from_currency|BRL|
|from_currency|CAD|
|from_currency|CHF|
|from_currency|CNY|
|from_currency|CZK|
|from_currency|DKK|
|from_currency|EUR|
|from_currency|GBP|
|from_currency|HKD|
|from_currency|HRK|
|from_currency|HUF|
|from_currency|IDR|
|from_currency|ILS|
|from_currency|INR|
|from_currency|ISK|
|from_currency|JPY|
|from_currency|KRW|
|from_currency|LTL|
|from_currency|LVL|
|from_currency|MXN|
|from_currency|MYR|
|from_currency|NOK|
|from_currency|NZD|
|from_currency|PHP|
|from_currency|PLN|
|from_currency|RON|
|from_currency|RSD|
|from_currency|RUB|
|from_currency|SEK|
|from_currency|SGD|
|from_currency|THB|
|from_currency|TRY|
|from_currency|UAH|
|from_currency|USD|
|from_currency|ZAR|
|to_currency|AUD|
|to_currency|BGN|
|to_currency|BRL|
|to_currency|CAD|
|to_currency|CHF|
|to_currency|CNY|
|to_currency|CZK|
|to_currency|DKK|
|to_currency|EUR|
|to_currency|GBP|
|to_currency|HKD|
|to_currency|HRK|
|to_currency|HUF|
|to_currency|IDR|
|to_currency|ILS|
|to_currency|INR|
|to_currency|ISK|
|to_currency|JPY|
|to_currency|KRW|
|to_currency|LTL|
|to_currency|LVL|
|to_currency|MXN|
|to_currency|MYR|
|to_currency|NOK|
|to_currency|NZD|
|to_currency|PHP|
|to_currency|PLN|
|to_currency|RON|
|to_currency|RSD|
|to_currency|RUB|
|to_currency|SEK|
|to_currency|SGD|
|to_currency|THB|
|to_currency|TRY|
|to_currency|UAH|
|to_currency|USD|
|to_currency|ZAR|

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
""
```

<h2 id="tocS_Currency">Currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
"AUD"
```

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "block_id": 0,
  "cancelled": true,
  "comment": "string",
  "conversion_rate": 0,
  "currency": "AUD",
  "due_date": "1970-01-01",
  "electronic": true,
  "fulfillment_date": "1970-01-01",
  "gross_total": 0,
  "id": 0,
  "invoice_date": "1970-01-01",
  "invoice_number": "PREFIX / 2020-000001",
  "items": [
    {
      "gross_amount": 0,
      "name": "string",
      "net_amount": 0,
      "net_unit_amount": 0,
      "product_id": 0,
      "quantity": 0,
      "vat": "0%",
      "vat_amount": 0
    }
  ],
  "language": "de",
  "notification_status": "closed",
  "organization": {
    "address": {
      "address": "string",
      "city": "string",
      "country_code": "",
      "post_code": "string"
    },
    "bank_account": {
      "account_number": "string",
      "account_number_iban": "string",
      "id": 0,
      "name": "string",
      "swift": "string"
    },
    "cash_settled": true,
    "eu_tax_number": "string",
    "ev_number": "string",
    "name": "string",
    "small_taxpayer": true,
    "tax_number": "string"
  },
  "paid_date": "1970-01-01",
  "partner": {
    "account_number": "string",
    "address": {
      "address": "string",
      "city": "string",
      "country_code": "",
      "post_code": "string"
    },
    "emails": [
      "string"
    ],
    "general_ledger_number": "string",
    "iban": "string",
    "name": "string",
    "phone": "string",
    "swift": "string",
    "taxcode": "string",
    "id": 0
  },
  "payment_method": "aruhitel",
  "payment_status": "expired",
  "settings": {
    "mediated_service": false,
    "online_payment": "",
    "place_id": 0,
    "round": "five",
    "without_financial_fulfillment": false
  },
  "summary": {
    "gross_amount_local": 0,
    "net_amount": 0,
    "net_amount_local": 0,
    "vat_amount": 0,
    "vat_amount_local": 0,
    "vat_rate_summary": [
      {
        "vat_name": "string",
        "vat_percentage": 0,
        "vat_rate_gross_amount": 0,
        "vat_rate_net_amount": 0,
        "vat_rate_vat_amount": 0,
        "vat_rate_vat_amount_local": 0
      }
    ]
  },
  "tags": [
    "string"
  ],
  "type": "advance"
}
```

Document object representing your invoice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|block_id|integer|false|none|DocumentBlock's identifier.|
|cancelled|boolean|false|none|none|
|comment|string|false|none|none|
|conversion_rate|number(float)|false|none|none|
|currency|[Currency](#schemacurrency)|false|none|none|
|due_date|string(date)|false|none|none|
|electronic|boolean|false|none|none|
|fulfillment_date|string(date)|false|none|none|
|gross_total|number(float)|false|none|The document's gross total price.|
|id|integer|false|none|The document's unique identifier.|
|invoice_date|string(date)|false|none|none|
|invoice_number|string|false|none|The document's invoice number.|
|items|[[DocumentItem](#schemadocumentitem)]|false|none|none|
|language|[DocumentLanguage](#schemadocumentlanguage)|false|none|none|
|notification_status|[DocumentNotificationStatus](#schemadocumentnotificationstatus)|false|none|none|
|organization|[DocumentOrganization](#schemadocumentorganization)|false|none|none|
|paid_date|string(date)|false|none|none|
|partner|[Partner](#schemapartner)|false|none|none|
|payment_method|[PaymentMethod](#schemapaymentmethod)|false|none|none|
|payment_status|[PaymentStatus](#schemapaymentstatus)|false|none|none|
|settings|[DocumentSettings](#schemadocumentsettings)|false|none|none|
|summary|[DocumentSummary](#schemadocumentsummary)|false|none|none|
|tags|[string]|false|none|none|
|type|[DocumentType](#schemadocumenttype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|AUD|
|currency|BGN|
|currency|BRL|
|currency|CAD|
|currency|CHF|
|currency|CNY|
|currency|CZK|
|currency|DKK|
|currency|EUR|
|currency|GBP|
|currency|HKD|
|currency|HRK|
|currency|HUF|
|currency|IDR|
|currency|ILS|
|currency|INR|
|currency|ISK|
|currency|JPY|
|currency|KRW|
|currency|LTL|
|currency|LVL|
|currency|MXN|
|currency|MYR|
|currency|NOK|
|currency|NZD|
|currency|PHP|
|currency|PLN|
|currency|RON|
|currency|RSD|
|currency|RUB|
|currency|SEK|
|currency|SGD|
|currency|THB|
|currency|TRY|
|currency|UAH|
|currency|USD|
|currency|ZAR|
|language|de|
|language|en|
|language|fr|
|language|hr|
|language|hu|
|language|it|
|language|ro|
|language|sk|
|notification_status|closed|
|notification_status|downloaded|
|notification_status|failed|
|notification_status|none|
|notification_status|opened|
|notification_status|readed|
|payment_method|aruhitel|
|payment_method|bankcard|
|payment_method|barion|
|payment_method|barter|
|payment_method|cash|
|payment_method|cash_on_delivery|
|payment_method|coupon|
|payment_method|elore_utalas|
|payment_method|ep_kartya|
|payment_method|kompenzacio|
|payment_method|levonas|
|payment_method|online_bankcard|
|payment_method|payoneer|
|payment_method|paypal|
|payment_method|paypal_utolag|
|payment_method|payu|
|payment_method|pick_pack_pont|
|payment_method|postai_csekk|
|payment_method|postautalvany|
|payment_method|skrill|
|payment_method|szep_card|
|payment_method|transferwise|
|payment_method|upwork|
|payment_method|utalvany|
|payment_method|valto|
|payment_method|wire_transfer|
|payment_status|expired|
|payment_status|none|
|payment_status|outstanding|
|payment_status|paid|
|payment_status|partially_paid|
|type|advance|
|type|canceled|
|type|cancellation|
|type|draft|
|type|invoice|
|type|proforma|

<h2 id="tocS_DocumentBankAccount">DocumentBankAccount</h2>
<!-- backwards compatibility -->
<a id="schemadocumentbankaccount"></a>
<a id="schema_DocumentBankAccount"></a>
<a id="tocSdocumentbankaccount"></a>
<a id="tocsdocumentbankaccount"></a>

```json
{
  "account_number": "string",
  "account_number_iban": "string",
  "id": 0,
  "name": "string",
  "swift": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|none|
|account_number_iban|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|swift|string|false|none|none|

<h2 id="tocS_DocumentBlock">DocumentBlock</h2>
<!-- backwards compatibility -->
<a id="schemadocumentblock"></a>
<a id="schema_DocumentBlock"></a>
<a id="tocSdocumentblock"></a>
<a id="tocsdocumentblock"></a>

```json
{
  "custom_field1": "string",
  "custom_field2": "string",
  "id": 0,
  "name": "string",
  "prefix": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|custom_field1|string|false|none|none|
|custom_field2|string|false|none|none|
|id|integer|false|none|none|
|name|string|false|none|none|
|prefix|string|false|none|none|

<h2 id="tocS_DocumentBlockList">DocumentBlockList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentblocklist"></a>
<a id="schema_DocumentBlockList"></a>
<a id="tocSdocumentblocklist"></a>
<a id="tocsdocumentblocklist"></a>

```json
{
  "current_page": 0,
  "data": [
    {
      "custom_field1": "string",
      "custom_field2": "string",
      "id": 0,
      "name": "string",
      "prefix": "string"
    }
  ],
  "last_page": 0,
  "next_page_url": "string",
  "per_page": 0,
  "prev_page_url": "string",
  "total": 0
}
```

A object with a data property that contains an array of up to limit document blocks. Each entry in the array is a separate document block object. If no more document block are available, the resulting array will be empty.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_page|integer|false|none|none|
|data|[[DocumentBlock](#schemadocumentblock)]|false|none|none|
|last_page|integer|false|none|none|
|next_page_url|string|false|none|none|
|per_page|integer|false|none|none|
|prev_page_url|string|false|none|none|
|total|integer|false|none|none|

<h2 id="tocS_DocumentInsert">DocumentInsert</h2>
<!-- backwards compatibility -->
<a id="schemadocumentinsert"></a>
<a id="schema_DocumentInsert"></a>
<a id="tocSdocumentinsert"></a>
<a id="tocsdocumentinsert"></a>

```json
{
  "bank_account_id": 0,
  "block_id": 0,
  "comment": "string",
  "conversion_rate": "1",
  "currency": "AUD",
  "due_date": "1970-01-01",
  "electronic": false,
  "fulfillment_date": "1970-01-01",
  "items": [
    {
      "product_id": 0,
      "quantity": 0
    }
  ],
  "language": "de",
  "paid": false,
  "partner_id": 0,
  "payment_method": "aruhitel",
  "settings": {
    "mediated_service": false,
    "online_payment": "",
    "place_id": 0,
    "round": "five",
    "without_financial_fulfillment": false
  },
  "type": "advance",
  "vendor_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bank_account_id|integer|false|none|none|
|block_id|integer|true|none|none|
|comment|string|false|none|none|
|conversion_rate|number(float)|false|none|none|
|currency|[Currency](#schemacurrency)|true|none|none|
|due_date|string(date)|true|none|none|
|electronic|boolean|false|none|none|
|fulfillment_date|string(date)|true|none|none|
|items|[[DocumentItemData](#schemadocumentitemdata) \| [DocumentProductData](#schemadocumentproductdata)]|false|none|none|
|language|[DocumentLanguage](#schemadocumentlanguage)|true|none|none|
|paid|boolean|false|none|none|
|partner_id|integer|true|none|none|
|payment_method|[PaymentMethod](#schemapaymentmethod)|true|none|none|
|settings|[DocumentSettings](#schemadocumentsettings)|false|none|none|
|type|[DocumentInsertType](#schemadocumentinserttype)|true|none|none|
|vendor_id|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|AUD|
|currency|BGN|
|currency|BRL|
|currency|CAD|
|currency|CHF|
|currency|CNY|
|currency|CZK|
|currency|DKK|
|currency|EUR|
|currency|GBP|
|currency|HKD|
|currency|HRK|
|currency|HUF|
|currency|IDR|
|currency|ILS|
|currency|INR|
|currency|ISK|
|currency|JPY|
|currency|KRW|
|currency|LTL|
|currency|LVL|
|currency|MXN|
|currency|MYR|
|currency|NOK|
|currency|NZD|
|currency|PHP|
|currency|PLN|
|currency|RON|
|currency|RSD|
|currency|RUB|
|currency|SEK|
|currency|SGD|
|currency|THB|
|currency|TRY|
|currency|UAH|
|currency|USD|
|currency|ZAR|
|language|de|
|language|en|
|language|fr|
|language|hr|
|language|hu|
|language|it|
|language|ro|
|language|sk|
|payment_method|aruhitel|
|payment_method|bankcard|
|payment_method|barion|
|payment_method|barter|
|payment_method|cash|
|payment_method|cash_on_delivery|
|payment_method|coupon|
|payment_method|elore_utalas|
|payment_method|ep_kartya|
|payment_method|kompenzacio|
|payment_method|levonas|
|payment_method|online_bankcard|
|payment_method|payoneer|
|payment_method|paypal|
|payment_method|paypal_utolag|
|payment_method|payu|
|payment_method|pick_pack_pont|
|payment_method|postai_csekk|
|payment_method|postautalvany|
|payment_method|skrill|
|payment_method|szep_card|
|payment_method|transferwise|
|payment_method|upwork|
|payment_method|utalvany|
|payment_method|valto|
|payment_method|wire_transfer|
|type|advance|
|type|draft|
|type|invoice|
|type|proforma|

<h2 id="tocS_DocumentInsertType">DocumentInsertType</h2>
<!-- backwards compatibility -->
<a id="schemadocumentinserttype"></a>
<a id="schema_DocumentInsertType"></a>
<a id="tocSdocumentinserttype"></a>
<a id="tocsdocumentinserttype"></a>

```json
"advance"
```

<h2 id="tocS_DocumentItem">DocumentItem</h2>
<!-- backwards compatibility -->
<a id="schemadocumentitem"></a>
<a id="schema_DocumentItem"></a>
<a id="tocSdocumentitem"></a>
<a id="tocsdocumentitem"></a>

```json
{
  "gross_amount": 0,
  "name": "string",
  "net_amount": 0,
  "net_unit_amount": 0,
  "product_id": 0,
  "quantity": 0,
  "vat": "0%",
  "vat_amount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gross_amount|number(float)|false|none|none|
|name|string|false|none|none|
|net_amount|number(float)|false|none|none|
|net_unit_amount|number(float)|false|none|none|
|product_id|integer|false|none|none|
|quantity|number(float)|false|none|none|
|vat|[Vat](#schemavat)|false|none|none|
|vat_amount|number(float)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|vat|0%|
|vat|1%|
|vat|10%|
|vat|11%|
|vat|12%|
|vat|13%|
|vat|14%|
|vat|15%|
|vat|16%|
|vat|17%|
|vat|18%|
|vat|19%|
|vat|2%|
|vat|20%|
|vat|21%|
|vat|22%|
|vat|23%|
|vat|24%|
|vat|25%|
|vat|26%|
|vat|27%|
|vat|3%|
|vat|4%|
|vat|5%|
|vat|6%|
|vat|7%|
|vat|8%|
|vat|9%|
|vat|AAM|
|vat|AM|
|vat|EU|
|vat|EUK|
|vat|F.AFA|
|vat|FAD|
|vat|K.AFA|
|vat|MAA|
|vat|TAM|
|vat|ÁKK|
|vat|ÁTHK|

<h2 id="tocS_DocumentItemData">DocumentItemData</h2>
<!-- backwards compatibility -->
<a id="schemadocumentitemdata"></a>
<a id="schema_DocumentItemData"></a>
<a id="tocSdocumentitemdata"></a>
<a id="tocsdocumentitemdata"></a>

```json
{
  "product_id": 0,
  "quantity": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product_id|integer|true|none|none|
|quantity|number(float)|true|none|none|

<h2 id="tocS_DocumentLanguage">DocumentLanguage</h2>
<!-- backwards compatibility -->
<a id="schemadocumentlanguage"></a>
<a id="schema_DocumentLanguage"></a>
<a id="tocSdocumentlanguage"></a>
<a id="tocsdocumentlanguage"></a>

```json
"de"
```

<h2 id="tocS_DocumentList">DocumentList</h2>
<!-- backwards compatibility -->
<a id="schemadocumentlist"></a>
<a id="schema_DocumentList"></a>
<a id="tocSdocumentlist"></a>
<a id="tocsdocumentlist"></a>

```json
{
  "current_page": 0,
  "data": [
    {
      "block_id": 0,
      "cancelled": true,
      "comment": "string",
      "conversion_rate": 0,
      "currency": "AUD",
      "due_date": "1970-01-01",
      "electronic": true,
      "fulfillment_date": "1970-01-01",
      "gross_total": 0,
      "id": 0,
      "invoice_date": "1970-01-01",
      "invoice_number": "PREFIX / 2020-000001",
      "items": [
        {
          "gross_amount": 0,
          "name": "string",
          "net_amount": 0,
          "net_unit_amount": 0,
          "product_id": 0,
          "quantity": 0,
          "vat": "0%",
          "vat_amount": 0
        }
      ],
      "language": "de",
      "notification_status": "closed",
      "organization": {
        "address": {
          "address": "string",
          "city": "string",
          "country_code": "",
          "post_code": "string"
        },
        "bank_account": {
          "account_number": "string",
          "account_number_iban": "string",
          "id": 0,
          "name": "string",
          "swift": "string"
        },
        "cash_settled": true,
        "eu_tax_number": "string",
        "ev_number": "string",
        "name": "string",
        "small_taxpayer": true,
        "tax_number": "string"
      },
      "paid_date": "1970-01-01",
      "partner": {
        "account_number": "string",
        "address": {
          "address": "string",
          "city": "string",
          "country_code": "",
          "post_code": "string"
        },
        "emails": [
          "string"
        ],
        "general_ledger_number": "string",
        "iban": "string",
        "name": "string",
        "phone": "string",
        "swift": "string",
        "taxcode": "string",
        "id": 0
      },
      "payment_method": "aruhitel",
      "payment_status": "expired",
      "settings": {
        "mediated_service": false,
        "online_payment": "",
        "place_id": 0,
        "round": "five",
        "without_financial_fulfillment": false
      },
      "summary": {
        "gross_amount_local": 0,
        "net_amount": 0,
        "net_amount_local": 0,
        "vat_amount": 0,
        "vat_amount_local": 0,
        "vat_rate_summary": [
          {
            "vat_name": "string",
            "vat_percentage": 0,
            "vat_rate_gross_amount": 0,
            "vat_rate_net_amount": 0,
            "vat_rate_vat_amount": 0,
            "vat_rate_vat_amount_local": 0
          }
        ]
      },
      "tags": [
        "string"
      ],
      "type": "advance"
    }
  ],
  "last_page": 0,
  "next_page_url": "string",
  "per_page": 0,
  "prev_page_url": "string",
  "total": 0
}
```

A object with a data property that contains an array of up to limit documents. Each entry in the array is a separate document object. If no more documents are available, the resulting array will be empty.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_page|integer|false|none|none|
|data|[[Document](#schemadocument)]|false|none|none|
|last_page|integer|false|none|none|
|next_page_url|string|false|none|none|
|per_page|integer|false|none|none|
|prev_page_url|string|false|none|none|
|total|integer|false|none|none|

<h2 id="tocS_DocumentNotificationStatus">DocumentNotificationStatus</h2>
<!-- backwards compatibility -->
<a id="schemadocumentnotificationstatus"></a>
<a id="schema_DocumentNotificationStatus"></a>
<a id="tocSdocumentnotificationstatus"></a>
<a id="tocsdocumentnotificationstatus"></a>

```json
"closed"
```

<h2 id="tocS_DocumentOrganization">DocumentOrganization</h2>
<!-- backwards compatibility -->
<a id="schemadocumentorganization"></a>
<a id="schema_DocumentOrganization"></a>
<a id="tocSdocumentorganization"></a>
<a id="tocsdocumentorganization"></a>

```json
{
  "address": {
    "address": "string",
    "city": "string",
    "country_code": "",
    "post_code": "string"
  },
  "bank_account": {
    "account_number": "string",
    "account_number_iban": "string",
    "id": 0,
    "name": "string",
    "swift": "string"
  },
  "cash_settled": true,
  "eu_tax_number": "string",
  "ev_number": "string",
  "name": "string",
  "small_taxpayer": true,
  "tax_number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|none|
|bank_account|[DocumentBankAccount](#schemadocumentbankaccount)|false|none|none|
|cash_settled|boolean|false|none|none|
|eu_tax_number|string|false|none|none|
|ev_number|string|false|none|none|
|name|string|false|none|none|
|small_taxpayer|boolean|false|none|none|
|tax_number|string|false|none|none|

<h2 id="tocS_DocumentProductData">DocumentProductData</h2>
<!-- backwards compatibility -->
<a id="schemadocumentproductdata"></a>
<a id="schema_DocumentProductData"></a>
<a id="tocSdocumentproductdata"></a>
<a id="tocsdocumentproductdata"></a>

```json
{
  "comment": "string",
  "name": "string",
  "quantity": 0,
  "unit": "string",
  "unit_price": 0,
  "unit_price_type": "gross",
  "vat": "0%"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|none|
|name|string|true|none|none|
|quantity|number(float)|true|none|none|
|unit|string|true|none|none|
|unit_price|number(float)|true|none|none|
|unit_price_type|[UnitPriceType](#schemaunitpricetype)|true|none|none|
|vat|[Vat](#schemavat)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|unit_price_type|gross|
|unit_price_type|net|
|vat|0%|
|vat|1%|
|vat|10%|
|vat|11%|
|vat|12%|
|vat|13%|
|vat|14%|
|vat|15%|
|vat|16%|
|vat|17%|
|vat|18%|
|vat|19%|
|vat|2%|
|vat|20%|
|vat|21%|
|vat|22%|
|vat|23%|
|vat|24%|
|vat|25%|
|vat|26%|
|vat|27%|
|vat|3%|
|vat|4%|
|vat|5%|
|vat|6%|
|vat|7%|
|vat|8%|
|vat|9%|
|vat|AAM|
|vat|AM|
|vat|EU|
|vat|EUK|
|vat|F.AFA|
|vat|FAD|
|vat|K.AFA|
|vat|MAA|
|vat|TAM|
|vat|ÁKK|
|vat|ÁTHK|

<h2 id="tocS_DocumentPublicUrl">DocumentPublicUrl</h2>
<!-- backwards compatibility -->
<a id="schemadocumentpublicurl"></a>
<a id="schema_DocumentPublicUrl"></a>
<a id="tocSdocumentpublicurl"></a>
<a id="tocsdocumentpublicurl"></a>

```json
{
  "public_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public_url|string|false|none|none|

<h2 id="tocS_DocumentSettings">DocumentSettings</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsettings"></a>
<a id="schema_DocumentSettings"></a>
<a id="tocSdocumentsettings"></a>
<a id="tocsdocumentsettings"></a>

```json
{
  "mediated_service": false,
  "online_payment": "",
  "place_id": 0,
  "round": "five",
  "without_financial_fulfillment": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mediated_service|boolean|false|none|none|
|online_payment|[OnlinePayment](#schemaonlinepayment)|false|none|none|
|place_id|integer|false|none|none|
|round|[Round](#schemaround)|false|none|none|
|without_financial_fulfillment|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|online_payment|""|
|online_payment|Barion|
|online_payment|SimplePay|
|online_payment|no|
|round|five|
|round|none|
|round|one|
|round|ten|

<h2 id="tocS_DocumentSummary">DocumentSummary</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsummary"></a>
<a id="schema_DocumentSummary"></a>
<a id="tocSdocumentsummary"></a>
<a id="tocsdocumentsummary"></a>

```json
{
  "gross_amount_local": 0,
  "net_amount": 0,
  "net_amount_local": 0,
  "vat_amount": 0,
  "vat_amount_local": 0,
  "vat_rate_summary": [
    {
      "vat_name": "string",
      "vat_percentage": 0,
      "vat_rate_gross_amount": 0,
      "vat_rate_net_amount": 0,
      "vat_rate_vat_amount": 0,
      "vat_rate_vat_amount_local": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gross_amount_local|number(float)|false|none|none|
|net_amount|number(float)|false|none|none|
|net_amount_local|number(float)|false|none|none|
|vat_amount|number(float)|false|none|none|
|vat_amount_local|number(float)|false|none|none|
|vat_rate_summary|[[DocumentVatRateSummary](#schemadocumentvatratesummary)]|false|none|none|

<h2 id="tocS_DocumentType">DocumentType</h2>
<!-- backwards compatibility -->
<a id="schemadocumenttype"></a>
<a id="schema_DocumentType"></a>
<a id="tocSdocumenttype"></a>
<a id="tocsdocumenttype"></a>

```json
"advance"
```

<h2 id="tocS_DocumentVatRateSummary">DocumentVatRateSummary</h2>
<!-- backwards compatibility -->
<a id="schemadocumentvatratesummary"></a>
<a id="schema_DocumentVatRateSummary"></a>
<a id="tocSdocumentvatratesummary"></a>
<a id="tocsdocumentvatratesummary"></a>

```json
{
  "vat_name": "string",
  "vat_percentage": 0,
  "vat_rate_gross_amount": 0,
  "vat_rate_net_amount": 0,
  "vat_rate_vat_amount": 0,
  "vat_rate_vat_amount_local": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vat_name|string|false|none|none|
|vat_percentage|number(float)|false|none|none|
|vat_rate_gross_amount|number(float)|false|none|none|
|vat_rate_net_amount|number(float)|false|none|none|
|vat_rate_vat_amount|number(float)|false|none|none|
|vat_rate_vat_amount_local|number(float)|false|none|none|

<h2 id="tocS_Id">Id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_Id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
{
  "id": 0,
  "legacy_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|legacy_id|integer|false|none|none|

<h2 id="tocS_OnlinePayment">OnlinePayment</h2>
<!-- backwards compatibility -->
<a id="schemaonlinepayment"></a>
<a id="schema_OnlinePayment"></a>
<a id="tocSonlinepayment"></a>
<a id="tocsonlinepayment"></a>

```json
""
```

<h2 id="tocS_OnlineSzamlaStatus">OnlineSzamlaStatus</h2>
<!-- backwards compatibility -->
<a id="schemaonlineszamlastatus"></a>
<a id="schema_OnlineSzamlaStatus"></a>
<a id="tocSonlineszamlastatus"></a>
<a id="tocsonlineszamlastatus"></a>

```json
{
  "messages": [
    {
      "human_readable_message": "string",
      "validation_error_code": "string",
      "validation_result_code": "string"
    }
  ],
  "status": "string",
  "transaction_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[OnlineSzamlaStatusMessage](#schemaonlineszamlastatusmessage)]|false|none|none|
|status|string|false|none|none|
|transaction_id|string|false|none|none|

<h2 id="tocS_OnlineSzamlaStatusMessage">OnlineSzamlaStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemaonlineszamlastatusmessage"></a>
<a id="schema_OnlineSzamlaStatusMessage"></a>
<a id="tocSonlineszamlastatusmessage"></a>
<a id="tocsonlineszamlastatusmessage"></a>

```json
{
  "human_readable_message": "string",
  "validation_error_code": "string",
  "validation_result_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|human_readable_message|string|false|none|none|
|validation_error_code|string|false|none|none|
|validation_result_code|string|false|none|none|

<h2 id="tocS_OrganizationData">OrganizationData</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationdata"></a>
<a id="schema_OrganizationData"></a>
<a id="tocSorganizationdata"></a>
<a id="tocsorganizationdata"></a>

```json
{
  "tax_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tax_code|string|false|none|none|

<h2 id="tocS_Partner">Partner</h2>
<!-- backwards compatibility -->
<a id="schemapartner"></a>
<a id="schema_Partner"></a>
<a id="tocSpartner"></a>
<a id="tocspartner"></a>

```json
{
  "account_number": "string",
  "address": {
    "address": "string",
    "city": "string",
    "country_code": "",
    "post_code": "string"
  },
  "emails": [
    "string"
  ],
  "general_ledger_number": "string",
  "iban": "string",
  "name": "string",
  "phone": "string",
  "swift": "string",
  "taxcode": "string",
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|false|none|none|
|address|[Address](#schemaaddress)|true|none|none|
|emails|[string]|false|none|none|
|general_ledger_number|string|false|none|none|
|iban|string|false|none|none|
|name|string|true|none|none|
|phone|string|false|none|none|
|swift|string|false|none|none|
|taxcode|string|false|none|none|
|id|integer|false|none|none|

<h2 id="tocS_PartnerList">PartnerList</h2>
<!-- backwards compatibility -->
<a id="schemapartnerlist"></a>
<a id="schema_PartnerList"></a>
<a id="tocSpartnerlist"></a>
<a id="tocspartnerlist"></a>

```json
{
  "current_page": 0,
  "data": [
    {
      "account_number": "string",
      "address": {
        "address": "string",
        "city": "string",
        "country_code": "",
        "post_code": "string"
      },
      "emails": [
        "string"
      ],
      "general_ledger_number": "string",
      "iban": "string",
      "name": "string",
      "phone": "string",
      "swift": "string",
      "taxcode": "string",
      "id": 0
    }
  ],
  "last_page": 0,
  "next_page_url": "string",
  "per_page": 0,
  "prev_page_url": "string",
  "total": 0
}
```

A object with a data property that contains an array of up to limit partners. Each entry in the array is a separate partner object. If no more partners are available, the resulting array will be empty.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_page|integer|false|none|none|
|data|[[Partner](#schemapartner)]|false|none|none|
|last_page|integer|false|none|none|
|next_page_url|string|false|none|none|
|per_page|integer|false|none|none|
|prev_page_url|string|false|none|none|
|total|integer|false|none|none|

<h2 id="tocS_PartnerUpsert">PartnerUpsert</h2>
<!-- backwards compatibility -->
<a id="schemapartnerupsert"></a>
<a id="schema_PartnerUpsert"></a>
<a id="tocSpartnerupsert"></a>
<a id="tocspartnerupsert"></a>

```json
{
  "account_number": "string",
  "address": {
    "address": "string",
    "city": "string",
    "country_code": "",
    "post_code": "string"
  },
  "emails": [
    "string"
  ],
  "general_ledger_number": "string",
  "iban": "string",
  "name": "string",
  "phone": "string",
  "swift": "string",
  "taxcode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|false|none|none|
|address|[Address](#schemaaddress)|true|none|none|
|emails|[string]|false|none|none|
|general_ledger_number|string|false|none|none|
|iban|string|false|none|none|
|name|string|true|none|none|
|phone|string|false|none|none|
|swift|string|false|none|none|
|taxcode|string|false|none|none|

<h2 id="tocS_PaymentHistory">PaymentHistory</h2>
<!-- backwards compatibility -->
<a id="schemapaymenthistory"></a>
<a id="schema_PaymentHistory"></a>
<a id="tocSpaymenthistory"></a>
<a id="tocspaymenthistory"></a>

```json
{
  "conversion_rate": 0,
  "date": "1970-01-01",
  "payment_method": "aruhitel",
  "price": 0,
  "voucher_number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversion_rate|number(float)|false|none|none|
|date|string(date)|true|none|none|
|payment_method|[PaymentMethod](#schemapaymentmethod)|true|none|none|
|price|number(float)|true|none|none|
|voucher_number|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_method|aruhitel|
|payment_method|bankcard|
|payment_method|barion|
|payment_method|barter|
|payment_method|cash|
|payment_method|cash_on_delivery|
|payment_method|coupon|
|payment_method|elore_utalas|
|payment_method|ep_kartya|
|payment_method|kompenzacio|
|payment_method|levonas|
|payment_method|online_bankcard|
|payment_method|payoneer|
|payment_method|paypal|
|payment_method|paypal_utolag|
|payment_method|payu|
|payment_method|pick_pack_pont|
|payment_method|postai_csekk|
|payment_method|postautalvany|
|payment_method|skrill|
|payment_method|szep_card|
|payment_method|transferwise|
|payment_method|upwork|
|payment_method|utalvany|
|payment_method|valto|
|payment_method|wire_transfer|

<h2 id="tocS_PaymentMethod">PaymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethod"></a>
<a id="schema_PaymentMethod"></a>
<a id="tocSpaymentmethod"></a>
<a id="tocspaymentmethod"></a>

```json
"aruhitel"
```

<h2 id="tocS_PaymentStatus">PaymentStatus</h2>
<!-- backwards compatibility -->
<a id="schemapaymentstatus"></a>
<a id="schema_PaymentStatus"></a>
<a id="tocSpaymentstatus"></a>
<a id="tocspaymentstatus"></a>

```json
"expired"
```

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "comment": "string",
  "currency": "AUD",
  "general_ledger_number": "string",
  "general_ledger_taxcode": "string",
  "id": 0,
  "name": "string",
  "net_unit_price": 0,
  "unit": "string",
  "vat": "0%"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|none|
|currency|[Currency](#schemacurrency)|true|none|none|
|general_ledger_number|string|false|none|none|
|general_ledger_taxcode|string|false|none|none|
|id|integer|false|read-only|none|
|name|string|true|none|none|
|net_unit_price|number(float)|false|none|none|
|unit|string|true|none|none|
|vat|[Vat](#schemavat)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|AUD|
|currency|BGN|
|currency|BRL|
|currency|CAD|
|currency|CHF|
|currency|CNY|
|currency|CZK|
|currency|DKK|
|currency|EUR|
|currency|GBP|
|currency|HKD|
|currency|HRK|
|currency|HUF|
|currency|IDR|
|currency|ILS|
|currency|INR|
|currency|ISK|
|currency|JPY|
|currency|KRW|
|currency|LTL|
|currency|LVL|
|currency|MXN|
|currency|MYR|
|currency|NOK|
|currency|NZD|
|currency|PHP|
|currency|PLN|
|currency|RON|
|currency|RSD|
|currency|RUB|
|currency|SEK|
|currency|SGD|
|currency|THB|
|currency|TRY|
|currency|UAH|
|currency|USD|
|currency|ZAR|
|vat|0%|
|vat|1%|
|vat|10%|
|vat|11%|
|vat|12%|
|vat|13%|
|vat|14%|
|vat|15%|
|vat|16%|
|vat|17%|
|vat|18%|
|vat|19%|
|vat|2%|
|vat|20%|
|vat|21%|
|vat|22%|
|vat|23%|
|vat|24%|
|vat|25%|
|vat|26%|
|vat|27%|
|vat|3%|
|vat|4%|
|vat|5%|
|vat|6%|
|vat|7%|
|vat|8%|
|vat|9%|
|vat|AAM|
|vat|AM|
|vat|EU|
|vat|EUK|
|vat|F.AFA|
|vat|FAD|
|vat|K.AFA|
|vat|MAA|
|vat|TAM|
|vat|ÁKK|
|vat|ÁTHK|

<h2 id="tocS_ProductList">ProductList</h2>
<!-- backwards compatibility -->
<a id="schemaproductlist"></a>
<a id="schema_ProductList"></a>
<a id="tocSproductlist"></a>
<a id="tocsproductlist"></a>

```json
{
  "current_page": 0,
  "data": [
    {
      "comment": "string",
      "currency": "AUD",
      "general_ledger_number": "string",
      "general_ledger_taxcode": "string",
      "id": 0,
      "name": "string",
      "net_unit_price": 0,
      "unit": "string",
      "vat": "0%"
    }
  ],
  "last_page": 0,
  "next_page_url": "string",
  "per_page": 0,
  "prev_page_url": "string",
  "total": 0
}
```

A object with a data property that contains an array of up to limit products. Each entry in the array is a separate product object. If no more products are available, the resulting array will be empty.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_page|integer|false|none|none|
|data|[[Product](#schemaproduct)]|false|none|none|
|last_page|integer|false|none|none|
|next_page_url|string|false|none|none|
|per_page|integer|false|none|none|
|prev_page_url|string|false|none|none|
|total|integer|false|none|none|

<h2 id="tocS_Round">Round</h2>
<!-- backwards compatibility -->
<a id="schemaround"></a>
<a id="schema_Round"></a>
<a id="tocSround"></a>
<a id="tocsround"></a>

```json
"five"
```

<h2 id="tocS_SendDocument">SendDocument</h2>
<!-- backwards compatibility -->
<a id="schemasenddocument"></a>
<a id="schema_SendDocument"></a>
<a id="tocSsenddocument"></a>
<a id="tocssenddocument"></a>

```json
{
  "emails": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emails|[string]|false|none|none|

<h2 id="tocS_ServerError">ServerError</h2>
<!-- backwards compatibility -->
<a id="schemaservererror"></a>
<a id="schema_ServerError"></a>
<a id="tocSservererror"></a>
<a id="tocsservererror"></a>

```json
{
  "message": "string",
  "trace_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|trace_id|string|false|none|You should send us this ID to investigate the issue.|

<h2 id="tocS_ServerErrorResponse">ServerErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaservererrorresponse"></a>
<a id="schema_ServerErrorResponse"></a>
<a id="tocSservererrorresponse"></a>
<a id="tocsservererrorresponse"></a>

```json
{
  "error": {
    "message": "Internal Server Error.",
    "trace_id": "664b218f93954a3480cb0ddb8f919c3f"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ServerError](#schemaservererror)|false|none|none|

<h2 id="tocS_UnitPriceType">UnitPriceType</h2>
<!-- backwards compatibility -->
<a id="schemaunitpricetype"></a>
<a id="schema_UnitPriceType"></a>
<a id="tocSunitpricetype"></a>
<a id="tocsunitpricetype"></a>

```json
"gross"
```

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "field": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_ValidationErrorResponse">ValidationErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerrorresponse"></a>
<a id="schema_ValidationErrorResponse"></a>
<a id="tocSvalidationerrorresponse"></a>
<a id="tocsvalidationerrorresponse"></a>

```json
{
  "errors": [
    {
      "field": "string",
      "message": "string"
    }
  ],
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[ValidationError](#schemavalidationerror)]|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_Vat">Vat</h2>
<!-- backwards compatibility -->
<a id="schemavat"></a>
<a id="schema_Vat"></a>
<a id="tocSvat"></a>
<a id="tocsvat"></a>

```json
"0%"
```
