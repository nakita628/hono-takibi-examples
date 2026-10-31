<h1 id="api">API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.apis.guru//api.ote-godaddy.com">https://api.apis.guru//api.ote-godaddy.com</a>

<h1 id="api-v1">v1</h1>

## Retrieve a list of orders for the authenticated shopper. Only one filter may be used at a time

<a id="opIdlist"></a>

> Code samples

```bash
curl https://example.com/v1/orders \
  -H 'Accept: application/json'
```

`GET /v1/orders`

<strong>API Resellers</strong><ul><li>This endpoint does not support subaccounts and therefore API Resellers should not supply an X-Shopper-Id header</li></ul>

<h3 id="retrieve-a-list-of-orders-for-the-authenticated-shopper-only-one-filter-may-be-used-at-a-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|periodStart|query|string|false|Start of range indicating what time-frame should be returned. Inclusive|
|periodEnd|query|string|false|End of range indicating what time-frame should be returned. Inclusive|
|domain|query|string|false|Domain name to use as the filter of results|
|productGroupId|query|integer|false|Product group id to use as the filter of results|
|paymentProfileId|query|integer|false|Payment profile id to use as the filter of results|
|parentOrderId|query|string|false|Parent order id to use as the filter of results|
|offset|query|integer|false|Number of results to skip for pagination|
|limit|query|integer|false|Maximum number of items to return|
|sort|query|string|false|Property name that will be used to sort results. '-' indicates descending|
|X-Shopper-Id|header|string|false|Shopper ID to be operated on, if different from JWT<br/><b>Reseller subaccounts are not supported</b>|
|X-Market-Id|header|string|false|Unique identifier of the Market in which the request is happening|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|createdAt|
|sort|-createdAt|
|sort|orderId|
|sort|-orderId|
|sort|pricing.total|
|sort|-pricing.total|

> Example responses

> 200 Response

```json
{
  "orders": [
    {
      "createdAt": "string",
      "currency": "string",
      "items": [
        {
          "label": "string"
        }
      ],
      "orderId": "string",
      "parentOrderId": "string",
      "pricing": {
        "total": "string"
      }
    }
  ],
  "pagination": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string",
    "total": 0
  }
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 504 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-a-list-of-orders-for-the-authenticated-shopper-only-one-filter-may-be-used-at-a-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[OrderList](#schemaorderlist)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve details for specified order

<a id="opIdget"></a>

> Code samples

```bash
curl https://example.com/v1/orders/string \
  -H 'Accept: application/json'
```

`GET /v1/orders/{orderId}`

<strong>API Resellers</strong><ul><li>This endpoint does not support subaccounts and therefore API Resellers should not supply an X-Shopper-Id header</li></ul>

<h3 id="retrieve-details-for-specified-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|path|string|true|Order id whose details are to be retrieved|
|X-Shopper-Id|header|string|false|Shopper ID to be operated on, if different from JWT<br/><b>Reseller subaccounts are not supported</b>|
|X-Market-Id|header|string|false|Unique identifier of the Market in which the request is happening|

> Example responses

> 200 Response

```json
{
  "billTo": {
    "contact": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "taxId": "string"
  },
  "createdAt": "string",
  "currency": "string",
  "items": [
    {
      "domains": [
        "string"
      ],
      "label": "string",
      "period": 1,
      "periodUnit": "MONTH",
      "pfid": 0,
      "pricing": {
        "discount": 0,
        "fees": {
          "icann": 0,
          "total": 0
        },
        "list": 0,
        "sale": 0,
        "savings": 0,
        "subtotal": 0,
        "taxes": 0,
        "unit": {}
      },
      "quantity": 0,
      "taxCollector": {
        "taxCollectorId": 0
      }
    }
  ],
  "orderId": "string",
  "parentOrderId": "string",
  "payments": [
    {
      "amount": 0,
      "category": "CREDIT_CARD",
      "paymentProfileId": "string",
      "subcategory": "CHECKING_PERSONAL"
    }
  ],
  "pricing": {
    "discount": 0,
    "fees": {
      "icann": 0,
      "total": 0
    },
    "id": 0,
    "list": 0,
    "savings": 0,
    "subtotal": 0,
    "taxDetails": [
      {
        "amount": 0,
        "rate": 0
      }
    ],
    "taxes": 0,
    "total": 0
  }
}
```

> 400 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 401 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 403 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 429 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

> 500 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

> 504 Response

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

<h3 id="retrieve-details-for-specified-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Request was successful|[Order](#schemaorder)|
|400|Bad Request|Request was malformed|[Error](#schemaerror)|
|401|Unauthorized|Authentication info not sent or invalid|[Error](#schemaerror)|
|403|Forbidden|Authenticated user is not allowed access|[Error](#schemaerror)|
|404|Not Found|Resource not found|[Error](#schemaerror)|
|429|Too Many Requests|Too many requests received within interval|[ErrorLimit](#schemaerrorlimit)|
|500|Internal Server Error|Internal server error|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
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
  "address1": "string",
  "address2": "string",
  "city": "string",
  "country": "US",
  "postalCode": "string",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address1|string(street-address)|true|none|none|
|address2|string(street-address2)|false|none|none|
|city|string(city-name)|true|none|none|
|country|string(iso-country-code)|true|none|Two-letter ISO country code to be used as a hint for target region<br/><br/><br>NOTE: These are sample values, there are many<br><a href='http://www.iso.org/iso/country_codes.htm'>more</a>|
|postalCode|string(postal-code)|true|none|Postal or zip code|
|state|string(state-province-territory)|true|none|State or province or territory|

#### Enumerated Values

|Property|Value|
|---|---|
|country|AC|
|country|AD|
|country|AE|
|country|AF|
|country|AG|
|country|AI|
|country|AL|
|country|AM|
|country|AO|
|country|AQ|
|country|AR|
|country|AS|
|country|AT|
|country|AU|
|country|AW|
|country|AX|
|country|AZ|
|country|BA|
|country|BB|
|country|BD|
|country|BE|
|country|BF|
|country|BG|
|country|BH|
|country|BI|
|country|BJ|
|country|BM|
|country|BN|
|country|BO|
|country|BQ|
|country|BR|
|country|BS|
|country|BT|
|country|BV|
|country|BW|
|country|BY|
|country|BZ|
|country|CA|
|country|CC|
|country|CD|
|country|CF|
|country|CG|
|country|CH|
|country|CI|
|country|CK|
|country|CL|
|country|CM|
|country|CN|
|country|CO|
|country|CR|
|country|CV|
|country|CW|
|country|CX|
|country|CY|
|country|CZ|
|country|DE|
|country|DJ|
|country|DK|
|country|DM|
|country|DO|
|country|DZ|
|country|EC|
|country|EE|
|country|EG|
|country|EH|
|country|ER|
|country|ES|
|country|ET|
|country|FI|
|country|FJ|
|country|FK|
|country|FM|
|country|FO|
|country|FR|
|country|GA|
|country|GB|
|country|GD|
|country|GE|
|country|GF|
|country|GG|
|country|GH|
|country|GI|
|country|GL|
|country|GM|
|country|GN|
|country|GP|
|country|GQ|
|country|GR|
|country|GS|
|country|GT|
|country|GU|
|country|GW|
|country|GY|
|country|HK|
|country|HM|
|country|HN|
|country|HR|
|country|HT|
|country|HU|
|country|ID|
|country|IE|
|country|IL|
|country|IM|
|country|IN|
|country|IO|
|country|IQ|
|country|IS|
|country|IT|
|country|JE|
|country|JM|
|country|JO|
|country|JP|
|country|KE|
|country|KG|
|country|KH|
|country|KI|
|country|KM|
|country|KN|
|country|KR|
|country|KV|
|country|KW|
|country|KY|
|country|KZ|
|country|LA|
|country|LB|
|country|LC|
|country|LI|
|country|LK|
|country|LR|
|country|LS|
|country|LT|
|country|LU|
|country|LV|
|country|LY|
|country|MA|
|country|MC|
|country|MD|
|country|ME|
|country|MG|
|country|MH|
|country|MK|
|country|ML|
|country|MM|
|country|MN|
|country|MO|
|country|MP|
|country|MQ|
|country|MR|
|country|MS|
|country|MT|
|country|MU|
|country|MV|
|country|MW|
|country|MX|
|country|MY|
|country|MZ|
|country|NA|
|country|NC|
|country|NE|
|country|NF|
|country|NG|
|country|NI|
|country|NL|
|country|NO|
|country|NP|
|country|NR|
|country|NU|
|country|NZ|
|country|OM|
|country|PA|
|country|PE|
|country|PF|
|country|PG|
|country|PH|
|country|PK|
|country|PL|
|country|PM|
|country|PN|
|country|PR|
|country|PS|
|country|PT|
|country|PW|
|country|PY|
|country|QA|
|country|RE|
|country|RO|
|country|RS|
|country|RU|
|country|RW|
|country|SA|
|country|SB|
|country|SC|
|country|SE|
|country|SG|
|country|SH|
|country|SI|
|country|SJ|
|country|SK|
|country|SL|
|country|SM|
|country|SN|
|country|SO|
|country|SR|
|country|ST|
|country|SV|
|country|SX|
|country|SZ|
|country|TC|
|country|TD|
|country|TF|
|country|TG|
|country|TH|
|country|TJ|
|country|TK|
|country|TL|
|country|TM|
|country|TN|
|country|TO|
|country|TP|
|country|TR|
|country|TT|
|country|TV|
|country|TW|
|country|TZ|
|country|UA|
|country|UG|
|country|UM|
|country|US|
|country|UY|
|country|UZ|
|country|VA|
|country|VC|
|country|VE|
|country|VG|
|country|VI|
|country|VN|
|country|VU|
|country|WF|
|country|WS|
|country|YE|
|country|YT|
|country|ZA|
|country|ZM|
|country|ZW|

<h2 id="tocS_BillTo">BillTo</h2>
<!-- backwards compatibility -->
<a id="schemabillto"></a>
<a id="schema_BillTo"></a>
<a id="tocSbillto"></a>
<a id="tocsbillto"></a>

```json
{
  "contact": {
    "addressMailing": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "US",
      "postalCode": "string",
      "state": "string"
    },
    "email": "user@example.com",
    "fax": "string",
    "jobTitle": "string",
    "nameFirst": "string",
    "nameLast": "string",
    "nameMiddle": "string",
    "organization": "string",
    "phone": "string"
  },
  "taxId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|[Contact](#schemacontact)|true|none|none|
|taxId|string|false|none|Tax id used for calculating the tax the customer is required to pay|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "addressMailing": {
    "address1": "string",
    "address2": "string",
    "city": "string",
    "country": "US",
    "postalCode": "string",
    "state": "string"
  },
  "email": "user@example.com",
  "fax": "string",
  "jobTitle": "string",
  "nameFirst": "string",
  "nameLast": "string",
  "nameMiddle": "string",
  "organization": "string",
  "phone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressMailing|[Address](#schemaaddress)|true|none|none|
|email|string(email)|true|none|none|
|fax|string(phone)|false|none|none|
|jobTitle|string|false|none|none|
|nameFirst|string(person-name)|true|none|none|
|nameLast|string(person-name)|true|none|none|
|nameMiddle|string|false|none|none|
|organization|string(organization-name)|false|none|none|
|phone|string(phone)|true|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|fields|[[ErrorField](#schemaerrorfield)]|false|none|List of the specific fields, and the errors found with their contents|
|message|string|false|none|Human-readable, English description of the error|

<h2 id="tocS_ErrorField">ErrorField</h2>
<!-- backwards compatibility -->
<a id="schemaerrorfield"></a>
<a id="schema_ErrorField"></a>
<a id="tocSerrorfield"></a>
<a id="tocserrorfield"></a>

```json
{
  "code": "string",
  "message": "string",
  "path": "string",
  "pathRelated": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|message|string|false|none|Human-readable, English description of the problem with the contents of the field|
|path|string(json-path)|true|none|<ul><br><li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li><br><strong style='margin-left: 12px;'>OR</strong><br><li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li><br></ul>|
|pathRelated|string(json-path)|false|none|JSONPath referring to a field containing an error, which is referenced by `path`|

<h2 id="tocS_ErrorLimit">ErrorLimit</h2>
<!-- backwards compatibility -->
<a id="schemaerrorlimit"></a>
<a id="schema_ErrorLimit"></a>
<a id="tocSerrorlimit"></a>
<a id="tocserrorlimit"></a>

```json
{
  "code": "string",
  "fields": [
    {
      "code": "string",
      "message": "string",
      "path": "string",
      "pathRelated": "string"
    }
  ],
  "message": "string",
  "retryAfterSec": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string(constant)|true|none|Short identifier for the error, suitable for indicating the specific error within client code|
|fields|[[ErrorField](#schemaerrorfield)]|false|none|List of the specific fields, and the errors found with their contents|
|message|string|false|none|Human-readable, English description of the error|
|retryAfterSec|integer(integer-positive)|true|none|Number of seconds to wait before attempting a similar request|

<h2 id="tocS_LineItem">LineItem</h2>
<!-- backwards compatibility -->
<a id="schemalineitem"></a>
<a id="schema_LineItem"></a>
<a id="tocSlineitem"></a>
<a id="tocslineitem"></a>

```json
{
  "domains": [
    "string"
  ],
  "label": "string",
  "period": 1,
  "periodUnit": "MONTH",
  "pfid": 0,
  "pricing": {
    "discount": 0,
    "fees": {
      "icann": 0,
      "total": 0
    },
    "list": 0,
    "sale": 0,
    "savings": 0,
    "subtotal": 0,
    "taxes": 0,
    "unit": {}
  },
  "quantity": 0,
  "taxCollector": {
    "taxCollectorId": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[string]|false|none|A collection of domain names purchased if the current product is domain|
|label|string|true|none|Human readable description of the current product|
|period|number(double)|false|none|none|
|periodUnit|string|false|none|The unit of time that periodCount is measured in|
|pfid|integer|false|none|Unique identifier of the current product|
|pricing|[LineItemPricing](#schemalineitempricing)|true|none|none|
|quantity|integer(integer-positive)|true|none|Number of the current product included in the specified order|
|taxCollector|[LineItemTaxCollector](#schemalineitemtaxcollector)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|periodUnit|MONTH|
|periodUnit|QUARTER|
|periodUnit|SEMI_ANNUAL|
|periodUnit|YEAR|
|periodUnit|ONE_TIME|

<h2 id="tocS_LineItemPricing">LineItemPricing</h2>
<!-- backwards compatibility -->
<a id="schemalineitempricing"></a>
<a id="schema_LineItemPricing"></a>
<a id="tocSlineitempricing"></a>
<a id="tocslineitempricing"></a>

```json
{
  "discount": 0,
  "fees": {
    "icann": 0,
    "total": 0
  },
  "list": 0,
  "sale": 0,
  "savings": 0,
  "subtotal": 0,
  "taxes": 0,
  "unit": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discount|integer(currency-micro-unit)|true|none|Discount off of sale price for given `quantity` and `period` <pre>`discount` = `sale` - `subtotal`</pre>|
|fees|[OrderFee](#schemaorderfee)|true|none|none|
|list|integer(currency-micro-unit)|true|none|List price for given `quantity` and `period`|
|sale|integer(currency-micro-unit)|true|none|Actual price for the current product|
|savings|integer(currency-micro-unit)|true|none|Savings off of list price for given `quantity` and `period` <pre>`savings` = `list` - `subtotal`</pre>|
|subtotal|integer(currency-micro-unit)|true|none|Price with any discounts and without taxes or fees for given `quantity` and `period`|
|taxes|integer(currency-micro-unit)|true|none|Taxes for given `quantity` and `period`|
|unit|object|true|none|Pricing for a single unit of the given item|

<h2 id="tocS_LineItemPricingTaxDetail">LineItemPricingTaxDetail</h2>
<!-- backwards compatibility -->
<a id="schemalineitempricingtaxdetail"></a>
<a id="schema_LineItemPricingTaxDetail"></a>
<a id="tocSlineitempricingtaxdetail"></a>
<a id="tocslineitempricingtaxdetail"></a>

```json
{
  "amount": 0,
  "rate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(currency-micro-unit)|false|none|Tax amount|
|rate|number(double)|false|none|none|

<h2 id="tocS_LineItemSummary">LineItemSummary</h2>
<!-- backwards compatibility -->
<a id="schemalineitemsummary"></a>
<a id="schema_LineItemSummary"></a>
<a id="tocSlineitemsummary"></a>
<a id="tocslineitemsummary"></a>

```json
{
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|Product label of the current line item|

<h2 id="tocS_LineItemTaxCollector">LineItemTaxCollector</h2>
<!-- backwards compatibility -->
<a id="schemalineitemtaxcollector"></a>
<a id="schema_LineItemTaxCollector"></a>
<a id="tocSlineitemtaxcollector"></a>
<a id="tocslineitemtaxcollector"></a>

```json
{
  "taxCollectorId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taxCollectorId|integer(integer-positive)|true|none|Unique identifier for the company|

<h2 id="tocS_LineItemUnitPricing">LineItemUnitPricing</h2>
<!-- backwards compatibility -->
<a id="schemalineitemunitpricing"></a>
<a id="schema_LineItemUnitPricing"></a>
<a id="tocSlineitemunitpricing"></a>
<a id="tocslineitemunitpricing"></a>

```json
{
  "discount": 0,
  "fees": {
    "icann": 0,
    "total": 0
  },
  "list": 0,
  "sale": 0,
  "savings": 0,
  "taxes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discount|integer(currency-micro-unit)|true|none|Discount without consideration of `quantity` and `period`|
|fees|[OrderFee](#schemaorderfee)|true|none|none|
|list|integer(currency-micro-unit)|true|none|List price without consideration of `quantity` and `period`|
|sale|integer(currency-micro-unit)|true|none|Sale price without consideration of `quantity` and `period`|
|savings|integer(currency-micro-unit)|true|none|Savings without consideration of `quantity` and `period`|
|taxes|integer(currency-micro-unit)|true|none|Taxes without consideration of `quantity` and `period`|

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "billTo": {
    "contact": {
      "addressMailing": {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "US",
        "postalCode": "string",
        "state": "string"
      },
      "email": "user@example.com",
      "fax": "string",
      "jobTitle": "string",
      "nameFirst": "string",
      "nameLast": "string",
      "nameMiddle": "string",
      "organization": "string",
      "phone": "string"
    },
    "taxId": "string"
  },
  "createdAt": "string",
  "currency": "string",
  "items": [
    {
      "domains": [
        "string"
      ],
      "label": "string",
      "period": 1,
      "periodUnit": "MONTH",
      "pfid": 0,
      "pricing": {
        "discount": 0,
        "fees": {
          "icann": 0,
          "total": 0
        },
        "list": 0,
        "sale": 0,
        "savings": 0,
        "subtotal": 0,
        "taxes": 0,
        "unit": {}
      },
      "quantity": 0,
      "taxCollector": {
        "taxCollectorId": 0
      }
    }
  ],
  "orderId": "string",
  "parentOrderId": "string",
  "payments": [
    {
      "amount": 0,
      "category": "CREDIT_CARD",
      "paymentProfileId": "string",
      "subcategory": "CHECKING_PERSONAL"
    }
  ],
  "pricing": {
    "discount": 0,
    "fees": {
      "icann": 0,
      "total": 0
    },
    "id": 0,
    "list": 0,
    "savings": 0,
    "subtotal": 0,
    "taxDetails": [
      {
        "amount": 0,
        "rate": 0
      }
    ],
    "taxes": 0,
    "total": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billTo|[BillTo](#schemabillto)|true|none|none|
|createdAt|string(iso-datetime)|true|none|Date and time when the current order is created on|
|currency|string(iso-currency-code)|true|none|Currency in which the order has been placed|
|items|[[LineItem](#schemalineitem)]|true|none|none|
|orderId|string|true|none|Unique identifier of current order|
|parentOrderId|string|false|none|Unique identifier of the parent order. All refund/chargeback orders are tied to the original order.<br>The orginal order's `orderId` is the `parentOrderId` of refund/chargeback orders|
|payments|[[Payment](#schemapayment)]|true|none|none|
|pricing|[OrderPricing](#schemaorderpricing)|true|none|none|

<h2 id="tocS_OrderFee">OrderFee</h2>
<!-- backwards compatibility -->
<a id="schemaorderfee"></a>
<a id="schema_OrderFee"></a>
<a id="tocSorderfee"></a>
<a id="tocsorderfee"></a>

```json
{
  "icann": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|icann|integer(currency-micro-unit)|false|none|Domain registration transaction fee charged by ICANN|
|total|integer(currency-micro-unit)|true|none|Sum of all fees|

<h2 id="tocS_OrderList">OrderList</h2>
<!-- backwards compatibility -->
<a id="schemaorderlist"></a>
<a id="schema_OrderList"></a>
<a id="tocSorderlist"></a>
<a id="tocsorderlist"></a>

```json
{
  "orders": [
    {
      "createdAt": "string",
      "currency": "string",
      "items": [
        {
          "label": "string"
        }
      ],
      "orderId": "string",
      "parentOrderId": "string",
      "pricing": {
        "total": "string"
      }
    }
  ],
  "pagination": {
    "first": "string",
    "last": "string",
    "next": "string",
    "previous": "string",
    "total": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orders|[[OrderSummary](#schemaordersummary)]|true|none|A collection of orders|
|pagination|[Pagination](#schemapagination)|true|none|none|

<h2 id="tocS_OrderPricing">OrderPricing</h2>
<!-- backwards compatibility -->
<a id="schemaorderpricing"></a>
<a id="schema_OrderPricing"></a>
<a id="tocSorderpricing"></a>
<a id="tocsorderpricing"></a>

```json
{
  "discount": 0,
  "fees": {
    "icann": 0,
    "total": 0
  },
  "id": 0,
  "list": 0,
  "savings": 0,
  "subtotal": 0,
  "taxDetails": [
    {
      "amount": 0,
      "rate": 0
    }
  ],
  "taxes": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|discount|integer(currency-micro-unit)|true|none|Discount from promotional pricing|
|fees|[OrderFee](#schemaorderfee)|true|none|none|
|id|number(double)|false|none|none|
|list|integer(currency-micro-unit)|true|none|Sum of list prices for the entire cart|
|savings|integer(currency-micro-unit)|true|none|Savings off of list price <pre>`savings` = `list` - `subtotal`</pre>|
|subtotal|integer(currency-micro-unit)|true|none|Price with `discount` and without taxes or fees|
|taxDetails|[[LineItemPricingTaxDetail](#schemalineitempricingtaxdetail)]|false|none|A collection of line item tax details|
|taxes|integer(currency-micro-unit)|true|none|Taxes for the entire cart|
|total|integer(currency-micro-unit)|true|none|Price the customer pays <pre>`total` = `subtotal` + `taxes` + `fees.total`</pre>|

<h2 id="tocS_OrderSummary">OrderSummary</h2>
<!-- backwards compatibility -->
<a id="schemaordersummary"></a>
<a id="schema_OrderSummary"></a>
<a id="tocSordersummary"></a>
<a id="tocsordersummary"></a>

```json
{
  "createdAt": "string",
  "currency": "string",
  "items": [
    {
      "label": "string"
    }
  ],
  "orderId": "string",
  "parentOrderId": "string",
  "pricing": {
    "total": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(iso-datetime)|true|none|Date and time when the current order was created|
|currency|string(iso-currency-code)|true|none|Currency in which the order was placed|
|items|[[LineItemSummary](#schemalineitemsummary)]|true|none|Sets of two or more line items in current order|
|orderId|string|true|none|Unique identifier of the current order|
|parentOrderId|string|false|none|Unique identifier of the parent order. All refund/chargeback orders are tied to the original order.<br>The orginal order's `orderId` is the `parentOrderId` of refund/chargeback orders|
|pricing|[OrderSummaryPricing](#schemaordersummarypricing)|true|none|none|

<h2 id="tocS_OrderSummaryPricing">OrderSummaryPricing</h2>
<!-- backwards compatibility -->
<a id="schemaordersummarypricing"></a>
<a id="schema_OrderSummaryPricing"></a>
<a id="tocSordersummarypricing"></a>
<a id="tocsordersummarypricing"></a>

```json
{
  "total": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|string(currency-micro-unit)|true|none|Total amount charged for the current order. Negative for Refund and Chargeback|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "first": "string",
  "last": "string",
  "next": "string",
  "previous": "string",
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|string|false|none|URI to access the first page|
|last|string|false|none|URI to access the last page|
|next|string|false|none|URI to access the next page|
|previous|string|false|none|URI to access the previous page|
|total|integer|false|none|Number of records available|

<h2 id="tocS_Payment">Payment</h2>
<!-- backwards compatibility -->
<a id="schemapayment"></a>
<a id="schema_Payment"></a>
<a id="tocSpayment"></a>
<a id="tocspayment"></a>

```json
{
  "amount": 0,
  "category": "CREDIT_CARD",
  "paymentProfileId": "string",
  "subcategory": "CHECKING_PERSONAL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(currency-micro-unit)|true|none|Amount paid by the current payment|
|category|string|true|none|The category of payment method used at the time of purchase.<br>Most common values are listed in the enum.|
|paymentProfileId|string|true|none|Unique identifier of the payment profile used by current payment|
|subcategory|string|false|none|The subcategory of payment method used at the time of purchase.<br> This field is only set for certain payment categories, such as ACH and CREDIT_CARD.<br>Most common values are listed in the enum.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|CREDIT_CARD|
|category|PAYPAL|
|category|ACH|
|category|GIFT_CARD|
|category|IN_STORE_CREDIT|
|category|PREPAID|
|subcategory|CHECKING_PERSONAL|
|subcategory|CHECKING_BUSINESS|
|subcategory|VISA|
|subcategory|MASTER_CARD|
|subcategory|AMEX|
|subcategory|JCB|
|subcategory|UNIONPAY|
