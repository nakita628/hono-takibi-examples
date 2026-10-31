<h1 id="kyc-api-documentation">KYC API Documentation v2021.12</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API Interface to retrieve company data and products from business registers

Base URLs:

* <a href="https://api.kompany.com/">https://api.kompany.com/</a> - Main endpoint

Email: <a href="mailto:support@kompany.com">KYC API Support</a> 
Web: <a href="https://kycapi.kompany.com/">KYC API Support</a> 

# Authentication

* API Key (user_key)
    - Parameter Name: **user_key**, in: header.

<h1 id="kyc-api-documentation-v1-system">v1-system</h1>

System overview

## Returns a list of countries

<a id="opIdSystemCountries"></a>

> Code samples

```bash
curl https://example.com/api/v1/system/countries \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/system/countries`

Retrieve the list of all currently enabled countries

> Example responses

> 200 Response

```json
[
  {
    "country_code": "string",
    "country_name": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="returns-a-list-of-countries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of countries|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="returns-a-list-of-countries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» country_code|string|false|none|none|
|» country_name|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Returns the health information for the official business registers based on usage.

<a id="opIdHealthCheck"></a>

> Code samples

```bash
curl https://example.com/api/v1/system/health \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/system/health`

Returns the health information for the official business registers based on usage.

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "status": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="returns-the-health-information-for-the-official-business-registers-based-on-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of the commercial registers and their health data|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="returns-the-health-information-for-the-official-business-registers-based-on-usage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» name|string|false|none|none|
|» status|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Returns a list of products with prices

<a id="opIdSystemPricelist"></a>

> Code samples

```bash
curl https://example.com/api/v1/system/pricelist \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/system/pricelist`

Retrieve pricing rules for your subscription plan

> Example responses

> 200 Response

```json
[
  {
    "cost_per_unit": "string",
    "max": "string",
    "metric_id": "string",
    "min": "string",
    "sku": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="returns-a-list-of-products-with-prices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of pricing rules|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="returns-a-list-of-products-with-prices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» cost_per_unit|string|false|none|none|
|» max|string|false|none|none|
|» metric_id|string|false|none|none|
|» min|string|false|none|none|
|» sku|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

<h1 id="kyc-api-documentation-v1-company">v1-company</h1>

Company Search methods

## Retrieves announcement data

<a id="opIdCompanyAnnouncement"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/announcement/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/company/announcement/{id}`

Request full announcement data identified by announcement id

<h3 id="retrieves-announcement-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(string)|true|announcement hex ID|

> Example responses

> 200 Response

```json
[
  {
    "countryCode": "string",
    "id": "string",
    "registrationNumber": "string",
    "structured": "string",
    "text": "string",
    "time": "1970-01-01",
    "type": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-announcement-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of announcements|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-announcement-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» countryCode|string|false|none|none|
|» id|string|false|none|none|
|» registrationNumber|string|false|none|none|
|» structured|string|false|none|none|
|» text|string|false|none|none|
|» time|string(date)|false|none|none|
|» type|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Retrieves a list of stock exchange listings

<a id="opIdCompanyDeepsearchISIN"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/deepsearch/isin \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'isin=string'
```

`POST /api/v1/company/deepsearch/isin`

Lookup stock exchange listings identified by an ISIN (International Securities Identification Number) number. Search is forwarded to a provider.

> Body parameter

```yaml
isin: string
```

<h3 id="retrieves-a-list-of-stock-exchange-listings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|ISIN bulk deepsearch parameters|
|» isin|body|string|false|A list of ISIN numbers seperated by comma (maximum) is 100|

> Example responses

> 200 Response

```json
[
  {
    "isin": "string",
    "listings": [
      {
        "additionalSecurityType": "string",
        "exchCode": "string",
        "identifier": "string",
        "marketSector": "string",
        "name": "string",
        "securityDescription": "string",
        "securityType": "string",
        "shareClassId": "string",
        "stockId": "string",
        "symbol": "string"
      }
    ],
    "validIsin": true
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-a-list-of-stock-exchange-listings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result of a lookup by ISIN number|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-a-list-of-stock-exchange-listings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» isin|string|false|none|none|
|» listings|[object]|false|none|none|
|» » additionalSecurityType|string|false|none|none|
|» » exchCode|string|false|none|none|
|» » identifier|string|false|none|none|
|» » marketSector|string|false|none|none|
|» » name|string|false|none|none|
|» » securityDescription|string|false|none|none|
|» » securityType|string|false|none|none|
|» » shareClassId|string|false|none|none|
|» » stockId|string|false|none|none|
|» » symbol|string|false|none|none|
|» validIsin|boolean|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Retrieves a list of companies

<a id="opIdCompanyDeepsearchLEI"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/deepsearch/lei/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/company/deepsearch/lei/{number}`

Lookup companies identified by a LEI (Legal Entity Identifier) number. Search is forwarded to a provider.

<h3 id="retrieves-a-list-of-companies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|number|path|string(string)|true|lei number|
|page|query|integer(int32)|false|Pagination for the ISIN number results (1000 numbers per page)|

> Example responses

> 200 Response

```json
{
  "company": {
    "address": [
      "string"
    ],
    "country": "string",
    "dateOfIncorporation": "string",
    "extraData": {},
    "formattedAddress": [
      "string"
    ],
    "id": "string",
    "legalForm": "string",
    "managingDirectors": [
      "string"
    ],
    "name": "string",
    "registrationNumber": "string",
    "requestTime": 0,
    "secretaries": [
      "string"
    ],
    "sicNaceCodes": [
      "string"
    ],
    "status": "string"
  },
  "current_page": 0,
  "isins": [
    "string"
  ],
  "last_page": 0,
  "lei": "string",
  "next_page": "string",
  "total_num_isins": 0,
  "validLei": true
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-a-list-of-companies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result of a lookup by LEI number|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-a-list-of-companies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company|object|false|none|none|
|» address|[string]|false|none|none|
|» country|string|true|none|none|
|» dateOfIncorporation|string|false|none|none|
|» extraData|object|false|none|none|
|» formattedAddress|[string]|false|none|none|
|» id|string|true|none|none|
|» legalForm|string|false|none|none|
|» managingDirectors|[string]|false|none|none|
|» name|string|true|none|none|
|» registrationNumber|string|true|none|none|
|» requestTime|integer|false|none|none|
|» secretaries|[string]|false|none|none|
|» sicNaceCodes|[string]|false|none|none|
|» status|string|false|none|none|
|current_page|integer(int32)|false|none|none|
|isins|[string]|false|none|none|
|last_page|integer(int32)|false|none|none|
|lei|string|false|none|none|
|next_page|string|false|none|none|
|total_num_isins|integer(int32)|false|none|none|
|validLei|boolean|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Retrieves a list of companies from the official business register

<a id="opIdCompanyDeepsearchName"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/deepsearch/name/string/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/company/deepsearch/name/{country}/{name}`

Search for companies with a certain name. Search is forwarded to the respective business register of the country.

<h3 id="retrieves-a-list-of-companies-from-the-official-business-register-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string(string)|true|ISO_3166-1_alpha-2 representation of a country name - 2 chars|
|name|path|string(string)|true|company name|

> Example responses

> 200 Response

```json
[
  {
    "address": [
      "string"
    ],
    "country": "string",
    "dateOfIncorporation": "string",
    "extraData": {},
    "formattedAddress": [
      "string"
    ],
    "id": "string",
    "legalForm": "string",
    "managingDirectors": [
      "string"
    ],
    "name": "string",
    "registrationNumber": "string",
    "requestTime": 0,
    "secretaries": [
      "string"
    ],
    "sicNaceCodes": [
      "string"
    ],
    "status": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-a-list-of-companies-from-the-official-business-register-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of companies|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-a-list-of-companies-from-the-official-business-register-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» address|[string]|false|none|none|
|» country|string|false|none|none|
|» dateOfIncorporation|string|false|none|none|
|» extraData|object|false|none|none|
|» formattedAddress|[string]|false|none|none|
|» id|string|false|none|none|
|» legalForm|string|false|none|none|
|» managingDirectors|[string]|false|none|none|
|» name|string|false|none|none|
|» registrationNumber|string|false|none|none|
|» requestTime|integer|false|none|none|
|» secretaries|[string]|false|none|none|
|» sicNaceCodes|[string]|false|none|none|
|» status|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Retrieves a list of companies from the official business register

<a id="opIdCompanyDeepsearchNumber"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/deepsearch/number/string/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/company/deepsearch/number/{country}/{number}`

Search for companies with a certain register number. Search is forwarded to the respective business register of the country.

<h3 id="retrieves-a-list-of-companies-from-the-official-business-register-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string(string)|true|ISO_3166-1_alpha-2 representation of a country name - 2 chars|
|number|path|string(string)|true|company registration number|

> Example responses

> 200 Response

```json
[
  {
    "address": [
      "string"
    ],
    "country": "string",
    "dateOfIncorporation": "string",
    "extraData": {},
    "formattedAddress": [
      "string"
    ],
    "id": "string",
    "legalForm": "string",
    "managingDirectors": [
      "string"
    ],
    "name": "string",
    "registrationNumber": "string",
    "requestTime": 0,
    "secretaries": [
      "string"
    ],
    "sicNaceCodes": [
      "string"
    ],
    "status": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-a-list-of-companies-from-the-official-business-register-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of companies|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-a-list-of-companies-from-the-official-business-register-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» address|[string]|false|none|none|
|» country|string|false|none|none|
|» dateOfIncorporation|string|false|none|none|
|» extraData|object|false|none|none|
|» formattedAddress|[string]|false|none|none|
|» id|string|false|none|none|
|» legalForm|string|false|none|none|
|» managingDirectors|[string]|false|none|none|
|» name|string|false|none|none|
|» registrationNumber|string|false|none|none|
|» requestTime|integer|false|none|none|
|» secretaries|[string]|false|none|none|
|» sicNaceCodes|[string]|false|none|none|
|» status|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Get available ChangeTypes

<a id="opIdCompanyMonitorChangeTypesList"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/monitoring/changeTypes \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/company/monitoring/changeTypes`

Get current list of available ChangeTypes to subscribe to

> Example responses

> 200 Response

```json
[
  "string"
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="get-available-changetypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of ChangeTypes|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="get-available-changetypes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Retrieves a list of registered monitors

<a id="opIdCompanyMonitorList"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/monitoring/list \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/company/monitoring/list`

Query list of all registered monitors for logged in user

> Example responses

> 200 Response

```json
[
  {
    "callbackCount": 0,
    "callbackUrl": "string",
    "created": "1970-01-01",
    "monitorStatus": "string",
    "notificationId": "string",
    "subjectId": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-a-list-of-registered-monitors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of monitor webhooks|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-a-list-of-registered-monitors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» callbackCount|integer(int32)|false|none|none|
|» callbackUrl|string|false|none|none|
|» created|string(date)|false|none|none|
|» monitorStatus|string|false|none|none|
|» notificationId|string|false|none|none|
|» subjectId|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Get monitor status for specific company id

<a id="opIdCompanyMonitorId"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/monitoring/list/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/company/monitoring/list/{id}`

Query status of registered monitors for a specific company identified by a company id

<h3 id="get-monitor-status-for-specific-company-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(string)|true|Company Hex ID|

> Example responses

> 200 Response

```json
[
  {
    "callbackCount": 0,
    "callbackUrl": "string",
    "created": "1970-01-01",
    "monitorStatus": "string",
    "notificationId": "string",
    "subjectId": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="get-monitor-status-for-specific-company-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of monitor webhooks|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="get-monitor-status-for-specific-company-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» callbackCount|integer(int32)|false|none|none|
|» callbackUrl|string|false|none|none|
|» created|string(date)|false|none|none|
|» monitorStatus|string|false|none|none|
|» notificationId|string|false|none|none|
|» subjectId|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Register a Company for monitoring

<a id="opIdCompanyMonitorRegister"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/monitoring/register/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'callbackUrl=string&changeType=string'
```

`POST /api/v1/company/monitoring/register/{id}`

Add a company to your perpetual monitoring list and register a callback URL to get monitoring alerts.

> Body parameter

```yaml
callbackUrl: string
changeType: string
```

<h3 id="register-a-company-for-monitoring-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(string)|true|Company Hex ID|
|body|body|object|false|Callback URL where the notifications will be sent to|
|» callbackUrl|body|string|true|Callback URL|
|» changeType|body|string|true|ChangeType to monitor|

> Example responses

> 200 Response

```json
{
  "monitorStatus": "string",
  "notificationId": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="register-a-company-for-monitoring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful webhook registration response|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="register-a-company-for-monitoring-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monitorStatus|string|true|none|none|
|notificationId|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Deactivates an active notification

<a id="opIdCompanyMonitorUnregister"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/monitoring/unregister/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`POST /api/v1/company/monitoring/unregister/{id}`

Deactivate a previously registered company monitor identified by the notifier id

<h3 id="deactivates-an-active-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(string)|true|Registration id of monitoring request record|

> Example responses

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="deactivates-an-active-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Empty response body|None|
|default|Default|Detailed information about the error|Inline|

<h3 id="deactivates-an-active-notification-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Retrieves a list of registered notifications

<a id="opIdCompanyNotificationList"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/notification/list \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/company/notification/list`

Query list of registered callback URLs for logged in user

> Example responses

> 200 Response

```json
[
  {
    "callbackCount": 0,
    "callbackUrl": "string",
    "created": "1970-01-01",
    "monitorStatus": "string",
    "notificationId": "string",
    "subjectId": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-a-list-of-registered-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of monitor webhooks|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-a-list-of-registered-notifications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» callbackCount|integer(int32)|false|none|none|
|» callbackUrl|string|false|none|none|
|» created|string(date)|false|none|none|
|» monitorStatus|string|false|none|none|
|» notificationId|string|false|none|none|
|» subjectId|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Retrieves a list of registered notifications

<a id="opIdCompanyNotificationId"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/notification/list/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/company/notification/list/{id}`

Query list of registered notifications for a specific company identified by a company id

<h3 id="retrieves-a-list-of-registered-notifications-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(string)|true|Company Hex ID|

> Example responses

> 200 Response

```json
[
  {
    "callbackCount": 0,
    "callbackUrl": "string",
    "created": "1970-01-01",
    "monitorStatus": "string",
    "notificationId": "string",
    "subjectId": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-a-list-of-registered-notifications-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of monitor webhooks|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-a-list-of-registered-notifications-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» callbackCount|integer(int32)|false|none|none|
|» callbackUrl|string|false|none|none|
|» created|string(date)|false|none|none|
|» monitorStatus|string|false|none|none|
|» notificationId|string|false|none|none|
|» subjectId|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Creates a new notification

<a id="opIdCompanyNotificationRegister"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/notification/register/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'callbackUrl=string'
```

`POST /api/v1/company/notification/register/{id}`

Register a new callback URL to get notifications about companies.

> Body parameter

```yaml
callbackUrl: string
```

<h3 id="creates-a-new-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(string)|true|Company Hex ID|
|body|body|object|false|Callback URL where the notifications will be sent to|
|» callbackUrl|body|string|true|Callback URL|

> Example responses

> 200 Response

```json
{
  "monitorStatus": "string",
  "notificationId": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="creates-a-new-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful webhook registration response|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="creates-a-new-notification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monitorStatus|string|true|none|none|
|notificationId|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Unregister a company from Monitoring

<a id="opIdCompanyNotificationUnregister"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/notification/unregister/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`POST /api/v1/company/notification/unregister/{id}`

Deactivate a previously registered company monitor identified by the notifier id

<h3 id="unregister-a-company-from-monitoring-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(string)|true|Registration id of monitoring request record|

> Example responses

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="unregister-a-company-from-monitoring-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Empty response body|None|
|default|Default|Detailed information about the error|Inline|

<h3 id="unregister-a-company-from-monitoring-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Retrieves a list of companies from the KYC API company index

<a id="opIdCompanySearchName"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/search/name/string/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/company/search/name/{country}/{name}`

KYC API company index lookup for companies with a certain name in a country.

<h3 id="retrieves-a-list-of-companies-from-the-kyc-api-company-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string(string)|true|ISO_3166-1_alpha-2 representation of a country name - 2 chars|
|name|path|string(string)|true|company name|
|limit|query|integer(int64)|false|number of search results|

> Example responses

> 200 Response

```json
[
  {
    "address": [
      "string"
    ],
    "country": "string",
    "dateOfIncorporation": "string",
    "extraData": {},
    "formattedAddress": [
      "string"
    ],
    "id": "string",
    "legalForm": "string",
    "managingDirectors": [
      "string"
    ],
    "name": "string",
    "registrationNumber": "string",
    "requestTime": 0,
    "secretaries": [
      "string"
    ],
    "sicNaceCodes": [
      "string"
    ],
    "status": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-a-list-of-companies-from-the-kyc-api-company-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of companies|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-a-list-of-companies-from-the-kyc-api-company-index-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» address|[string]|false|none|none|
|» country|string|false|none|none|
|» dateOfIncorporation|string|false|none|none|
|» extraData|object|false|none|none|
|» formattedAddress|[string]|false|none|none|
|» id|string|false|none|none|
|» legalForm|string|false|none|none|
|» managingDirectors|[string]|false|none|none|
|» name|string|false|none|none|
|» registrationNumber|string|false|none|none|
|» requestTime|integer|false|none|none|
|» secretaries|[string]|false|none|none|
|» sicNaceCodes|[string]|false|none|none|
|» status|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Retrieves a list of companies from the KYC API company index

<a id="opIdCompanySearchNumber"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/search/number/string/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/company/search/number/{country}/{number}`

KYC API company index lookup for companies with a certain register number in a country.

<h3 id="retrieves-a-list-of-companies-from-the-kyc-api-company-index-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string(string)|true|ISO_3166-1_alpha-2 representation of a country name - 2 chars|
|number|path|string(string)|true|company registration number|
|limit|query|integer(int64)|false|number of search results|

> Example responses

> 200 Response

```json
[
  {
    "address": [
      "string"
    ],
    "country": "string",
    "dateOfIncorporation": "string",
    "extraData": {},
    "formattedAddress": [
      "string"
    ],
    "id": "string",
    "legalForm": "string",
    "managingDirectors": [
      "string"
    ],
    "name": "string",
    "registrationNumber": "string",
    "requestTime": 0,
    "secretaries": [
      "string"
    ],
    "sicNaceCodes": [
      "string"
    ],
    "status": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-a-list-of-companies-from-the-kyc-api-company-index-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of companies|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-a-list-of-companies-from-the-kyc-api-company-index-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» address|[string]|false|none|none|
|» country|string|false|none|none|
|» dateOfIncorporation|string|false|none|none|
|» extraData|object|false|none|none|
|» formattedAddress|[string]|false|none|none|
|» id|string|false|none|none|
|» legalForm|string|false|none|none|
|» managingDirectors|[string]|false|none|none|
|» name|string|false|none|none|
|» registrationNumber|string|false|none|none|
|» requestTime|integer|false|none|none|
|» secretaries|[string]|false|none|none|
|» sicNaceCodes|[string]|false|none|none|
|» status|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Retrieves a list of companies from the KYC API company index

<a id="opIdCompanyAlternativeSearch"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/search/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'address=string&name=string&number=string&phone=string&url=string&vat=string'
```

`POST /api/v1/company/search/{country}`

KYC API company index lookup by country and mixed parameters. This function requires a country code then a mixture of name

> Body parameter

```yaml
address: string
name: string
number: string
phone: string
url: string
vat: string
```

<h3 id="retrieves-a-list-of-companies-from-the-kyc-api-company-index-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string(string)|true|ISO_3166-1_alpha-2 representation of a country name - 2 chars|
|body|body|object|false|VAT number and the company details|
|» address|body|string|false|Company address (or address partial)|
|» name|body|string|false|Company name|
|» number|body|string|false|Company registration number|
|» phone|body|string|false|Company contact phone number|
|» url|body|string|false|Company url|
|» vat|body|string|false|Company VAT number|

> Example responses

> 200 Response

```json
[
  {
    "address": [
      "string"
    ],
    "country": "string",
    "dateOfIncorporation": "string",
    "extraData": {},
    "formattedAddress": [
      "string"
    ],
    "id": "string",
    "legalForm": "string",
    "managingDirectors": [
      "string"
    ],
    "name": "string",
    "registrationNumber": "string",
    "requestTime": 0,
    "secretaries": [
      "string"
    ],
    "sicNaceCodes": [
      "string"
    ],
    "status": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-a-list-of-companies-from-the-kyc-api-company-index-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of companies|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-a-list-of-companies-from-the-kyc-api-company-index-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» address|[string]|false|none|none|
|» country|string|false|none|none|
|» dateOfIncorporation|string|false|none|none|
|» extraData|object|false|none|none|
|» formattedAddress|[string]|false|none|none|
|» id|string|false|none|none|
|» legalForm|string|false|none|none|
|» managingDirectors|[string]|false|none|none|
|» name|string|false|none|none|
|» registrationNumber|string|false|none|none|
|» requestTime|integer|false|none|none|
|» secretaries|[string]|false|none|none|
|» sicNaceCodes|[string]|false|none|none|
|» status|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Retrieves company announcements

<a id="opIdCompanyIdAnnouncements"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/string/announcements \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/company/{id}/announcements`

Search announcements filed to the business register from a company identified by an id

<h3 id="retrieves-company-announcements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(string)|true|company hex ID|
|limit|query|integer(int32)|false|limit of announcements in response (default 10)|
|offset|query|integer(int32)|false|to paginate through results (default 0)|
|data|query|boolean|false|If this parameter is set to false, you will only receive ids, and no additional data about announcements and no hits to the metric will be counted. (and potentially minimizing your costs)|

> Example responses

> 200 Response

```json
[
  {
    "countryCode": "string",
    "id": "string",
    "registrationNumber": "string",
    "structured": "string",
    "text": "string",
    "time": "1970-01-01",
    "type": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-company-announcements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of announcements|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-company-announcements-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» countryCode|string|false|none|none|
|» id|string|false|none|none|
|» registrationNumber|string|false|none|none|
|» structured|string|false|none|none|
|» text|string|false|none|none|
|» time|string(date)|false|none|none|
|» type|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Retrieves structured data extracted from a company document

<a id="opIdCompanyIdSuper"></a>

> Code samples

```bash
curl https://example.com/api/v1/company/string/super/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/company/{id}/super/{country}`

Request company superdata identified by company id

<h3 id="retrieves-structured-data-extracted-from-a-company-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(string)|true|company superdata by id|
|country|path|string(string)|true|ISO_3166-1_alpha-2 representation of a country name - 2 chars|
|lang|query|string(string)|false|Optional data translation (only available in limited jurisdictions)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|lang|""|
|lang|OG|
|lang|EN|

> Example responses

> 200 Response

```json
[
  {
    "address": [
      "string"
    ],
    "country": "string",
    "dateOfIncorporation": "string",
    "extraData": {},
    "formattedAddress": [
      "string"
    ],
    "id": "string",
    "legalForm": "string",
    "managingDirectors": [
      "string"
    ],
    "name": "string",
    "registrationNumber": "string",
    "requestTime": 0,
    "secretaries": [
      "string"
    ],
    "sicNaceCodes": [
      "string"
    ],
    "status": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-structured-data-extracted-from-a-company-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of companies|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-structured-data-extracted-from-a-company-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» address|[string]|false|none|none|
|» country|string|false|none|none|
|» dateOfIncorporation|string|false|none|none|
|» extraData|object|false|none|none|
|» formattedAddress|[string]|false|none|none|
|» id|string|false|none|none|
|» legalForm|string|false|none|none|
|» managingDirectors|[string]|false|none|none|
|» name|string|false|none|none|
|» registrationNumber|string|false|none|none|
|» requestTime|integer|false|none|none|
|» secretaries|[string]|false|none|none|
|» sicNaceCodes|[string]|false|none|none|
|» status|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Retrieves company details

<a id="opIdCompanyIdDataset"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/company/string/{dataset}' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/company/{id}/{dataset}`

Get company details by id. The level of details is defined by the dataset parameter

<h3 id="retrieves-company-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(string)|true|company master data by id|
|check_stock_listing|query|boolean|false|Try to retrieve additional stock information for this company. (Only available on refresh)|
|dataset|path|string(string)|true|company master data by id|
|lang|query|string(string)|false|Optional data translation (only available in limited jurisdictions)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|dataset|""|
|dataset|mini|
|dataset|master|
|dataset|full|
|dataset|refresh|
|lang|""|
|lang|EN|
|lang|ES|
|lang|FR|

> Example responses

> 200 Response

```json
{
  "address": [
    "string"
  ],
  "country": "string",
  "dateOfIncorporation": "string",
  "extraData": {},
  "formattedAddress": [
    "string"
  ],
  "id": "string",
  "legalForm": "string",
  "managingDirectors": [
    "string"
  ],
  "name": "string",
  "registrationNumber": "string",
  "requestTime": 0,
  "secretaries": [
    "string"
  ],
  "sicNaceCodes": [
    "string"
  ],
  "status": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-company-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-company-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[string]|false|none|none|
|country|string|true|none|none|
|dateOfIncorporation|string|false|none|none|
|extraData|object|false|none|none|
|formattedAddress|[string]|false|none|none|
|id|string|true|none|none|
|legalForm|string|false|none|none|
|managingDirectors|[string]|false|none|none|
|name|string|true|none|none|
|registrationNumber|string|true|none|none|
|requestTime|integer|false|none|none|
|secretaries|[string]|false|none|none|
|sicNaceCodes|[string]|false|none|none|
|status|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

<h1 id="kyc-api-documentation-v1-product">v1-product</h1>

Product Search, Order and Retrieve methods

## Retrieves a document availability result

<a id="opIdProductAvailability"></a>

> Code samples

```bash
curl https://example.com/api/v1/product/availability/string/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/product/availability/{sku}/{subjectId}`

Check availability and valid options for a particular product for a particular company identfied by its id

<h3 id="retrieves-a-document-availability-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sku|path|string(string)|true|SKU - 9 character value from a Product object|
|subjectId|path|string(string)|true|Subject (e.g. Company) ID - 32 character hex value|

> Example responses

> 200 Response

```json
{
  "availability": "string",
  "category": "string",
  "countryCode": "string",
  "description": "string",
  "hasOptions": true,
  "options": [
    "string"
  ],
  "price": 0,
  "provider": "string",
  "sku": "string",
  "type": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-a-document-availability-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Product details|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-a-document-availability-result-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|string|true|none|none|
|category|string|true|none|none|
|countryCode|string|true|none|none|
|description|string|true|none|none|
|hasOptions|boolean|true|none|none|
|options|[string]|true|none|none|
|price|number(float)|true|none|none|
|provider|string|true|none|none|
|sku|string|true|none|none|
|type|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Returns a catalog of products

<a id="opIdProductCatalog"></a>

> Code samples

```bash
curl https://example.com/api/v1/product/catalog/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/product/catalog/{country}`

Returns a catalog of purchasable products available with some metadata for a particular country

<h3 id="returns-a-catalog-of-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string(string)|true|two letter country code in upper case|

> Example responses

> 200 Response

```json
{
  "countryCode": "string",
  "description": "string",
  "form": "string",
  "method": "string",
  "name": "string",
  "price": 0,
  "sku": "string",
  "url": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="returns-a-catalog-of-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Product with details like URI to purchase it|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="returns-a-catalog-of-products-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|false|none|none|
|description|string|false|none|none|
|form|string|false|none|none|
|method|string|false|none|none|
|name|string|false|none|none|
|price|number(float)|false|none|none|
|sku|string|false|none|none|
|url|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Returns metadata for a notifier

<a id="opIdProductNotifier"></a>

> Code samples

```bash
curl https://example.com/api/v1/product/notifier/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/product/notifier/{notifierId}`

Queries and returns all metadata associated with a notifier identified by its notifer id

<h3 id="returns-metadata-for-a-notifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|notifierId|path|string(string)|true|ID of the ProductOrderNotifier as returned from a /notifier POST call - 32 character hex value|

> Example responses

> 200 Response

```json
{
  "callback": "string",
  "identity": "string",
  "lastCallTime": "1970-01-01",
  "lastResponseCode": 0,
  "notifierType": "string",
  "productOrderIdentity": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="returns-metadata-for-a-notifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details of configured product order notification|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="returns-metadata-for-a-notifier-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|true|none|none|
|identity|string|false|none|none|
|lastCallTime|string(date)|true|none|none|
|lastResponseCode|integer|true|none|none|
|notifierType|string|true|none|none|
|productOrderIdentity|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Creates a notifier for an order

<a id="opIdProductNotifierCreate"></a>

> Code samples

```bash
curl https://example.com/api/v1/product/notifier/string/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`POST /api/v1/product/notifier/{orderId}/{type}/{uri}`

Create a notifier for a particular order. Parameters can be supplied in the path

<h3 id="creates-a-notifier-for-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|path|string(string)|true|ID of the ProductOrder as returned from a /product/buy call - 32 character hex value|
|type|path|string(string)|true|Type of the notifier - indicates the action the notifier will perform. Currently GET and POST are supported which performs an http(s) GET/POST to the supplied uri with appended notifierId= and orderId= parameters when the order processing is completed. Upon the POST request the order object is sent as a JSON body|
|uri|path|string(string)|true|URI of the notifier for the 'complete' action. Currently only a GET method HTTP(s) URL is supported. 1 to 250 characters long. Every slash in the URI must be replaced by a ~|

> Example responses

> 200 Response

```json
{
  "callback": "string",
  "identity": "string",
  "lastCallTime": "1970-01-01",
  "lastResponseCode": 0,
  "notifierType": "string",
  "productOrderIdentity": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="creates-a-notifier-for-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details of configured product order notification|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="creates-a-notifier-for-an-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|true|none|none|
|identity|string|false|none|none|
|lastCallTime|string(date)|true|none|none|
|lastResponseCode|integer|true|none|none|
|notifierType|string|true|none|none|
|productOrderIdentity|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Places a concierge order

<a id="opIdProductOrderConcierge"></a>

> Code samples

```bash
curl https://example.com/api/v1/product/order/concierge \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'companyName=null&contactEmail=null&contactPhone=null&costConfirmation=false&country=null&financialData=false&historicInformation=false&informationRequirements=null&locationInvestigation=false&priority=standard&registerData=false&registerNumber=null&subjectId=null'
```

`POST /api/v1/product/order/concierge`

Place an order for a concierge product

> Body parameter

```yaml
companyName: "null"
contactEmail: "null"
contactPhone: "null"
costConfirmation: false
country: "null"
financialData: false
historicInformation: false
informationRequirements: "null"
locationInvestigation: false
priority: standard
registerData: false
registerNumber: "null"
subjectId: "null"
```

<h3 id="places-a-concierge-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Parameters for the concierge order|
|» companyName|body|string|false|Name of the company for which a document should be ordered. (Not required if subjectId is given)|
|» contactEmail|body|string|false|Contact E-Mail, will be contacted if concierge costs are exceeding the threshhold configured on your plan|
|» contactPhone|body|string|false|Contact phone, will be contacted if concierge costs are exceeding the threshhold configured on your plan|
|» costConfirmation|body|boolean|false|If the concierge cost should require additional confirmation if a threshold is reached (configured on your plan)|
|» country|body|string|false|Two letter ISO code of the country of the company|
|» financialData|body|boolean|false|If you want financial data of the company to be retrieved|
|» historicInformation|body|boolean|false|If you want historical data of the company to be retrieved|
|» informationRequirements|body|string|false|Requirements on what document or information should be provided. Please be very precise|
|» locationInvestigation|body|boolean|false|If the companies residency should be investigated|
|» priority|body|string|false|Priority of order: standard/express are allowed|
|» registerData|body|boolean|false|If you want register data of the company to be retrieved|
|» registerNumber|body|string|false|Registration number of the company for which a document should be ordered. (Not required if subjectId is given)|
|» subjectId|body|string|false|Kompanyid of the company you want to place the order for|

> Example responses

> 200 Response

```json
{
  "identity": "string",
  "option": "string",
  "ordered": "1970-01-01",
  "owner": "string",
  "price": 0,
  "sku": "string",
  "status": "string",
  "subjectId": "string",
  "subjectValue": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="places-a-concierge-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Product order details|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="places-a-concierge-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identity|string|true|none|none|
|option|string|true|none|none|
|ordered|string(date)|true|none|none|
|owner|string|true|none|none|
|price|number(float)|true|none|none|
|sku|string|true|none|none|
|status|string|true|none|none|
|subjectId|string|true|none|none|
|subjectValue|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Places a UBO order

<a id="opIdProductOrderUbo"></a>

> Code samples

```bash
curl https://example.com/api/v1/product/order/ubo \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'callbackUrl=null&credits=-1&includeDocs=false&levels=25%2C50&strategy=FULL&subjectId=null'
```

`POST /api/v1/product/order/ubo`

Place an order for a UBO (ultimate beneficial owner) discovery report

> Body parameter

```yaml
callbackUrl: "null"
credits: -1
includeDocs: false
levels: "25,50"
strategy: FULL
subjectId: "null"
```

<h3 id="places-a-ubo-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Parameters for the UBO order|
|» callbackUrl|body|string|false|An optional callback URL to which updates about the order will be sent (for instance if credits are exceeded)|
|» credits|body|number|false|Specify a maximum amount of credits which should be used. To disable use -1|
|» includeDocs|body|boolean|false|Include purchase of register document to ubo report|
|» levels|body|string|false|Define a threshold for different levels of crawling|
|» strategy|body|string|false|Choose a matching strategy. Available options (FULL,LEVELS)|
|» subjectId|body|string|true|KYC API Id (32 byte hexid) of the company you want to place the order for|

> Example responses

> 200 Response

```json
{
  "identity": "string",
  "option": "string",
  "ordered": "1970-01-01",
  "owner": "string",
  "price": 0,
  "sku": "string",
  "status": "string",
  "subjectId": "string",
  "subjectValue": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="places-a-ubo-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Product order details|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="places-a-ubo-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identity|string|true|none|none|
|option|string|true|none|none|
|ordered|string(date)|true|none|none|
|owner|string|true|none|none|
|price|number(float)|true|none|none|
|sku|string|true|none|none|
|status|string|true|none|none|
|subjectId|string|true|none|none|
|subjectValue|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Places a product order

<a id="opIdProductOrderWithOption"></a>

> Code samples

```bash
curl https://example.com/api/v1/product/order/string/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`POST /api/v1/product/order/{sku}/{option}/{subjectId}`

Place an order for a particular product identified by its SKU with a particular option for a particular company identified by its id

<h3 id="places-a-product-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sku|path|string(string)|true|SKU - 9 character value from a Product object|
|option|path|string(string)|true|Product option (e.g. Accounts year) from a previous Availability call|
|subjectId|path|string(string)|true|Subject (e.g. Company) ID - 32 character hex value|

> Example responses

> 200 Response

```json
{
  "identity": "string",
  "option": "string",
  "ordered": "1970-01-01",
  "owner": "string",
  "price": 0,
  "sku": "string",
  "status": "string",
  "subjectId": "string",
  "subjectValue": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="places-a-product-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Product order details|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="places-a-product-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identity|string|true|none|none|
|option|string|true|none|none|
|ordered|string(date)|true|none|none|
|owner|string|true|none|none|
|price|number(float)|true|none|none|
|sku|string|true|none|none|
|status|string|true|none|none|
|subjectId|string|true|none|none|
|subjectValue|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Places a product order

<a id="opIdProductOrder"></a>

> Code samples

```bash
curl https://example.com/api/v1/product/order/string/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`POST /api/v1/product/order/{sku}/{subjectId}`

Place an order for a particular product identified by its SKU for a particular company identified by its id

<h3 id="places-a-product-order-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sku|path|string(string)|true|SKU - 9 character value from a Product object|
|subjectId|path|string(string)|true|Subject (e.g. Company) ID - 32 character hex value|

> Example responses

> 200 Response

```json
{
  "identity": "string",
  "option": "string",
  "ordered": "1970-01-01",
  "owner": "string",
  "price": 0,
  "sku": "string",
  "status": "string",
  "subjectId": "string",
  "subjectValue": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="places-a-product-order-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Product order details|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="places-a-product-order-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identity|string|true|none|none|
|option|string|true|none|none|
|ordered|string(date)|true|none|none|
|owner|string|true|none|none|
|price|number(float)|true|none|none|
|sku|string|true|none|none|
|status|string|true|none|none|
|subjectId|string|true|none|none|
|subjectValue|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Returns a list of products

<a id="opIdProductSearch"></a>

> Code samples

```bash
curl https://example.com/api/v1/product/search/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/product/search/{subjectId}`

Search for possible products for a particular company identified by its id

<h3 id="returns-a-list-of-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subjectId|path|string(string)|true|Subject (e.g. Company) ID - 32 character hex value|

> Example responses

> 200 Response

```json
[
  {
    "availability": "string",
    "category": "string",
    "countryCode": "string",
    "description": "string",
    "hasOptions": true,
    "options": [
      "string"
    ],
    "price": 0,
    "provider": "string",
    "sku": "string",
    "type": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="returns-a-list-of-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of products|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="returns-a-list-of-products-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» availability|string|false|none|none|
|» category|string|false|none|none|
|» countryCode|string|false|none|none|
|» description|string|false|none|none|
|» hasOptions|boolean|false|none|none|
|» options|[string]|false|none|none|
|» price|number(float)|false|none|none|
|» provider|string|false|none|none|
|» sku|string|false|none|none|
|» type|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Returns metadata for a order

<a id="opIdProductStatus"></a>

> Code samples

```bash
curl https://example.com/api/v1/product/status/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/product/status/{orderId}`

Retrieve the current status of an order identified by its order id

<h3 id="returns-metadata-for-a-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|path|string(string)|true|ID of the ProductOrder as returned from a /product/buy call - 32 character hex value|

> Example responses

> 200 Response

```json
{
  "identity": "string",
  "option": "string",
  "ordered": "1970-01-01",
  "owner": "string",
  "price": 0,
  "sku": "string",
  "status": "string",
  "subjectId": "string",
  "subjectValue": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="returns-metadata-for-a-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Product order details|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="returns-metadata-for-a-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identity|string|true|none|none|
|option|string|true|none|none|
|ordered|string(date)|true|none|none|
|owner|string|true|none|none|
|price|number(float)|true|none|none|
|sku|string|true|none|none|
|status|string|true|none|none|
|subjectId|string|true|none|none|
|subjectValue|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Updates metadata of an order

<a id="opIdProductUpdateAction"></a>

> Code samples

```bash
curl https://example.com/api/v1/product/update/string/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'credits=100'
```

`POST /api/v1/product/update/{action}/{orderId}`

Update an existing order identified by its order id

> Body parameter

```yaml
credits: 100
```

<h3 id="updates-metadata-of-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|path|string(string)|true|The action you want to perform for the order|
|orderId|path|string(string)|true|ID of the ProductOrder as returned from a /product/buy call - 32 character hex value|
|body|body|object|false|Parameters for the update order endpoint|
|» credits|body|number|false|Specify an amount of credits which should be added to the order|

> Example responses

> 200 Response

```json
{
  "identity": "string",
  "option": "string",
  "ordered": "1970-01-01",
  "owner": "string",
  "price": 0,
  "sku": "string",
  "status": "string",
  "subjectId": "string",
  "subjectValue": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="updates-metadata-of-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Product order details|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="updates-metadata-of-an-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identity|string|true|none|none|
|option|string|true|none|none|
|ordered|string(date)|true|none|none|
|owner|string|true|none|none|
|price|number(float)|true|none|none|
|sku|string|true|none|none|
|status|string|true|none|none|
|subjectId|string|true|none|none|
|subjectValue|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Retrieves the result of an order

<a id="opIdProductRetrieve"></a>

> Code samples

```bash
curl https://example.com/api/v1/product/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/product/{orderId}`

Retrieves the document or structured data associated with a completed order identified with its order id

<h3 id="retrieves-the-result-of-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|path|string(string)|true|ID of the ProductOrder as returned from a /product/buy call - 32 character hex value|

> Example responses

> 200 Response

```json
{
  "childOrders": [
    "string"
  ],
  "data": "string",
  "mimeType": "string",
  "productOrderId": "string",
  "uri": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-the-result-of-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details for retrieval of a delivered product|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-the-result-of-an-order-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|childOrders|[string]|false|none|none|
|data|string|false|none|none|
|mimeType|string|true|none|none|
|productOrderId|string|true|none|none|
|uri|string|true|none|none|
|*oneOf*|object|false|none|none|
|data|object|true|none|none|
|mimeType|string|true|none|none|
|productOrderId|string|true|none|none|
|uri|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

<h1 id="kyc-api-documentation-v1-pepsanction">v1-pepsanction</h1>

Pep Sanction Check methods

## Retrieves a list of monitor entries

<a id="opIdPepMonitorList"></a>

> Code samples

```bash
curl https://example.com/api/v1/pepsanction/monitor/list \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/pepsanction/monitor/list`

Retrieve a list of all active Pep Sanction Report monitors for this account

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "caseId": "string",
    "created": "1970-01-01",
    "identifier": "string",
    "structured": "string",
    "updated": "string",
    "webhook": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-a-list-of-monitor-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|View Pep Sanction Report monitors|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-a-list-of-monitor-entries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» active|boolean|false|none|none|
|» caseId|string|false|none|none|
|» created|string(date)|false|none|none|
|» identifier|string|false|none|none|
|» structured|string|false|none|none|
|» updated|string|false|none|none|
|» webhook|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Deactive a pep sanction monitor

<a id="opIdPepMonitorUnregister"></a>

> Code samples

```bash
curl https://example.com/api/v1/pepsanction/monitor/unregister/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`POST /api/v1/pepsanction/monitor/unregister/{id}`

Unregister a previously created Pep Sanction Report Monitor

<h3 id="deactive-a-pep-sanction-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(string)|true|The identifier of the Monitor|

> Example responses

> 200 Response

```json
{
  "active": true,
  "caseId": "string",
  "created": "1970-01-01",
  "identifier": "string",
  "structured": "string",
  "updated": "string",
  "webhook": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="deactive-a-pep-sanction-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|View a monitor for a Pep Sanction Report|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="deactive-a-pep-sanction-monitor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|caseId|string|false|none|none|
|created|string(date)|false|none|none|
|identifier|string|false|none|none|
|structured|string|false|none|none|
|updated|string|false|none|none|
|webhook|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Update details of active Pep Sanction monitor

<a id="opIdPepMonitorUpdate"></a>

> Code samples

```bash
curl https://example.com/api/v1/pepsanction/monitor/update/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'Webhook=null'
```

`POST /api/v1/pepsanction/monitor/update/{id}`

Update the webhook URL of an active Pep Sanction Report Monitor

> Body parameter

```yaml
Webhook: "null"
```

<h3 id="update-details-of-active-pep-sanction-monitor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(string)|true|The identifier of the Monitor|
|body|body|object|false|Pass new Webhook as post parameter|
|» Webhook|body|string|false|If Monitoring is enabled this parameter is required. This is where updates will be sent to|

> Example responses

> 200 Response

```json
{
  "active": true,
  "caseId": "string",
  "created": "1970-01-01",
  "identifier": "string",
  "structured": "string",
  "updated": "string",
  "webhook": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="update-details-of-active-pep-sanction-monitor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|View a monitor for a Pep Sanction Report|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="update-details-of-active-pep-sanction-monitor-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|caseId|string|false|none|none|
|created|string(date)|false|none|none|
|identifier|string|false|none|none|
|structured|string|false|none|none|
|updated|string|false|none|none|
|webhook|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Orders a new Pep Sanction Check Report

<a id="opIdPepOrder"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/pepsanction/order/{type}/string' \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'Aliases=null&Country=null&DOB=null&FamilyName=null&Filters=null&GivenName=null&LEI=null&Locale=null&Medialists=NMEDIA&MiddleName=null&Monitoring=false&Peplists=GOV%2CPEPD%2CSOE&Region=null&SmartMatch=false&Watchlists=SANCTIONS%2CFINANCE%2CTERRORISM%2CCRIME%2CSMAGOV%2COFAC%2CMEDICAL&Webhook=null'
```

`POST /api/v1/pepsanction/order/{type}/{search}`

Order a new Pep Sanction Check by providing either a business or person name with some additional optional parameters.

> Body parameter

```yaml
Aliases: "null"
Country: "null"
DOB: "null"
FamilyName: "null"
Filters: "null"
GivenName: "null"
LEI: "null"
Locale: "null"
Medialists: NMEDIA
MiddleName: "null"
Monitoring: false
Peplists: "GOV,PEPD,SOE"
Region: "null"
SmartMatch: false
Watchlists: "SANCTIONS,FINANCE,TERRORISM,CRIME,SMAGOV,OFAC,MEDICAL"
Webhook: "null"
```

<h3 id="orders-a-new-pep-sanction-check-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string(string)|true|Type (Business or Person) of the requested Pep Sanction Check|
|search|path|string(string)|true|Search string for the Pep Sanction Check|
|body|body|object|false|Optional parameters to enhance search|
|» Aliases|body|string|false|Optional parameter for declaring alias names when doing a person search (seperated by commas)|
|» Country|body|string|false|Optional name of Country to assist in identifying matches based upon location/geography.|
|» DOB|body|string|false|Optional parameter for date of birth name when doing a person search|
|» FamilyName|body|string|false|Optional parameter for last name when doing a person search|
|» Filters|body|string|false|Optional parameter for restricting search when doing a person search (seperated by commas)|
|» GivenName|body|string|false|Optional parameter for first name when doing a person search|
|» LEI|body|string|false|Optional Legal Entity Identifier for additional business identifier verification.|
|» Locale|body|string|false|Optional name of City or Locale to assist in identifying matches based upon location/geography.|
|» Medialists|body|string|false|Optional parameter for selecting only specific media lists. By default all lists are queried|
|» MiddleName|body|string|false|Optional parameter for middle name when doing a person search|
|» Monitoring|body|boolean|false|If this Pep Sanction Check should be continuesly monitored.|
|» Peplists|body|string|false|Optional parameter for selecting only specific pep lists. By default all lists are queried|
|» Region|body|string|false|Optional name of Region or State to assist in identifying matches based upon location/geography.|
|» SmartMatch|body|boolean|false|Optional parameter for enabling SmartMatch to retrieve more results|
|» Watchlists|body|string|false|Optional parameter for selecting only specific watch lists. By default all lists are queried|
|» Webhook|body|string|false|If Monitoring is enabled this parameter is required. This is where updates will be sent to|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|""|
|type|B|
|type|P|

> Example responses

> 200 Response

```json
{
  "availability": "string",
  "category": "string",
  "countryCode": "string",
  "description": "string",
  "hasOptions": true,
  "options": [
    "string"
  ],
  "price": 0,
  "provider": "string",
  "sku": "string",
  "type": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="orders-a-new-pep-sanction-check-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Product details|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="orders-a-new-pep-sanction-check-report-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availability|string|true|none|none|
|category|string|true|none|none|
|countryCode|string|true|none|none|
|description|string|true|none|none|
|hasOptions|boolean|true|none|none|
|options|[string]|true|none|none|
|price|number(float)|true|none|none|
|provider|string|true|none|none|
|sku|string|true|none|none|
|type|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Returns a json or pdf report

<a id="opIdPepRetrieve"></a>

> Code samples

```bash
curl https://example.com/api/v1/pepsanction/retrieve/string \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/pepsanction/retrieve/{id}`

Retrieve a completed Pep Sanction check structured or in pdf depending on given accept header

<h3 id="returns-a-json-or-pdf-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accept|header|string(string)|false|The type (pdf or json) in which the check should be returned|
|id|path|string(string)|true|The id of the ordered Pep Sanction Check (id as returned by orderPepSanction call)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|accept|application/json|
|accept|application/pdf|

> Example responses

> 200 Response

```json
{
  "listsChecked": "string",
  "results": {
    "Excerpts": "string",
    "ResultsURL": "string",
    "SearchType": "string",
    "SourceAgency": "string",
    "SourceEntity": "string",
    "SourceID": 0,
    "SourceName": "string",
    "SourceType": "string"
  },
  "search": "string",
  "status": "string",
  "timestamp": "1970-01-01",
  "type": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="returns-a-json-or-pdf-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result of a PEP and sanctions list check|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="returns-a-json-or-pdf-report-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listsChecked|string|true|none|none|
|results|object|false|none|none|
|» Excerpts|string|false|none|none|
|» ResultsURL|string|false|none|none|
|» SearchType|string|false|none|none|
|» SourceAgency|string|false|none|none|
|» SourceEntity|string|false|none|none|
|» SourceID|integer(int64)|false|none|none|
|» SourceName|string|false|none|none|
|» SourceType|string|false|none|none|
|search|string|true|none|none|
|status|string|true|none|none|
|timestamp|string(date)|true|none|none|
|type|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

<h1 id="kyc-api-documentation-v1-vat-verification">v1-vat-verification</h1>

VAT Verification methods

## Returns a verification result

<a id="opIdVatBasic"></a>

> Code samples

```bash
curl https://example.com/api/v1/vat-verification/basic-check/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'companyAddress=string&companyName=string&companyNumber=string&vatNumber=string'
```

`POST /api/v1/vat-verification/basic-check/{country}`

Basic verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.

> Body parameter

```yaml
companyAddress: string
companyName: string
companyNumber: string
vatNumber: string
```

<h3 id="returns-a-verification-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string(string)|true|ISO_3166-1_alpha-2 representation of a country name - 2 chars|
|body|body|object|true|VAT number and the company details|
|» companyAddress|body|string|false|company address lines|
|» companyName|body|string|false|Company name|
|» companyNumber|body|string|false|official company number|
|» vatNumber|body|string|true|VAT number to validate|

> Example responses

> 200 Response

```json
{
  "candidate": [
    {
      "address": [
        "string"
      ],
      "country": "string",
      "dateOfIncorporation": "string",
      "extraData": {},
      "formattedAddress": [
        "string"
      ],
      "id": "string",
      "legalForm": "string",
      "managingDirectors": [
        "string"
      ],
      "name": "string",
      "registrationNumber": "string",
      "requestTime": 0,
      "secretaries": [
        "string"
      ],
      "sicNaceCodes": [
        "string"
      ],
      "status": "string"
    }
  ],
  "company": {
    "address": [
      "string"
    ],
    "country": "string",
    "dateOfIncorporation": "string",
    "extraData": {},
    "formattedAddress": [
      "string"
    ],
    "id": "string",
    "legalForm": "string",
    "managingDirectors": [
      "string"
    ],
    "name": "string",
    "registrationNumber": "string",
    "requestTime": 0,
    "secretaries": [
      "string"
    ],
    "sicNaceCodes": [
      "string"
    ],
    "status": "string"
  },
  "confidenceScore": 0,
  "validationStatus": true
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="returns-a-verification-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Denotes validity of checked VAT|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="returns-a-verification-result-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|candidate|[object]|false|none|none|
|» address|[string]|false|none|none|
|» country|string|true|none|none|
|» dateOfIncorporation|string|false|none|none|
|» extraData|object|false|none|none|
|» formattedAddress|[string]|false|none|none|
|» id|string|true|none|none|
|» legalForm|string|false|none|none|
|» managingDirectors|[string]|false|none|none|
|» name|string|true|none|none|
|» registrationNumber|string|true|none|none|
|» requestTime|integer|false|none|none|
|» secretaries|[string]|false|none|none|
|» sicNaceCodes|[string]|false|none|none|
|» status|string|false|none|none|
|company|object|false|none|none|
|» address|[string]|false|none|none|
|» country|string|true|none|none|
|» dateOfIncorporation|string|false|none|none|
|» extraData|object|false|none|none|
|» formattedAddress|[string]|false|none|none|
|» id|string|true|none|none|
|» legalForm|string|false|none|none|
|» managingDirectors|[string]|false|none|none|
|» name|string|true|none|none|
|» registrationNumber|string|true|none|none|
|» requestTime|integer|false|none|none|
|» secretaries|[string]|false|none|none|
|» sicNaceCodes|[string]|false|none|none|
|» status|string|false|none|none|
|confidenceScore|number|true|none|none|
|validationStatus|boolean|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Returns a verification result and company data

<a id="opIdVatComprehensive"></a>

> Code samples

```bash
curl https://example.com/api/v1/vat-verification/comprehensive-check/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'companyAddress=string&companyName=string&companyNumber=string&vatNumber=string'
```

`POST /api/v1/vat-verification/comprehensive-check/{country}`

Extended verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.

> Body parameter

```yaml
companyAddress: string
companyName: string
companyNumber: string
vatNumber: string
```

<h3 id="returns-a-verification-result-and-company-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string(string)|true|ISO_3166-1_alpha-2 representation of a country name - 2 chars|
|body|body|object|true|VAT number and the company details|
|» companyAddress|body|string|false|company address lines|
|» companyName|body|string|false|Company name|
|» companyNumber|body|string|false|official company number|
|» vatNumber|body|string|true|VAT number to validate|

> Example responses

> 200 Response

```json
{
  "candidate": [
    {
      "address": [
        "string"
      ],
      "country": "string",
      "dateOfIncorporation": "string",
      "extraData": {},
      "formattedAddress": [
        "string"
      ],
      "id": "string",
      "legalForm": "string",
      "managingDirectors": [
        "string"
      ],
      "name": "string",
      "registrationNumber": "string",
      "requestTime": 0,
      "secretaries": [
        "string"
      ],
      "sicNaceCodes": [
        "string"
      ],
      "status": "string"
    }
  ],
  "company": {
    "address": [
      "string"
    ],
    "country": "string",
    "dateOfIncorporation": "string",
    "extraData": {},
    "formattedAddress": [
      "string"
    ],
    "id": "string",
    "legalForm": "string",
    "managingDirectors": [
      "string"
    ],
    "name": "string",
    "registrationNumber": "string",
    "requestTime": 0,
    "secretaries": [
      "string"
    ],
    "sicNaceCodes": [
      "string"
    ],
    "status": "string"
  },
  "confidenceScore": 0,
  "validationStatus": true
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="returns-a-verification-result-and-company-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Denotes validity of checked VAT|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="returns-a-verification-result-and-company-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|candidate|[object]|false|none|none|
|» address|[string]|false|none|none|
|» country|string|true|none|none|
|» dateOfIncorporation|string|false|none|none|
|» extraData|object|false|none|none|
|» formattedAddress|[string]|false|none|none|
|» id|string|true|none|none|
|» legalForm|string|false|none|none|
|» managingDirectors|[string]|false|none|none|
|» name|string|true|none|none|
|» registrationNumber|string|true|none|none|
|» requestTime|integer|false|none|none|
|» secretaries|[string]|false|none|none|
|» sicNaceCodes|[string]|false|none|none|
|» status|string|false|none|none|
|company|object|false|none|none|
|» address|[string]|false|none|none|
|» country|string|true|none|none|
|» dateOfIncorporation|string|false|none|none|
|» extraData|object|false|none|none|
|» formattedAddress|[string]|false|none|none|
|» id|string|true|none|none|
|» legalForm|string|false|none|none|
|» managingDirectors|[string]|false|none|none|
|» name|string|true|none|none|
|» registrationNumber|string|true|none|none|
|» requestTime|integer|false|none|none|
|» secretaries|[string]|false|none|none|
|» sicNaceCodes|[string]|false|none|none|
|» status|string|false|none|none|
|confidenceScore|number|true|none|none|
|validationStatus|boolean|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Returns a level two verification result

<a id="opIdVatLevelTwo"></a>

> Code samples

```bash
curl https://example.com/api/v1/vat-verification/leveltwo-check/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'confirmation=true&vatNumber=string'
```

`POST /api/v1/vat-verification/leveltwo-check/{country}`

Second Level Verification of VAT number against BMF Austria. Optional confirmation parameter can be provided to order a Confirmation Report.

> Body parameter

```yaml
confirmation: true
vatNumber: string
```

<h3 id="returns-a-level-two-verification-result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string(string)|true|ISO_3166-1_alpha-2 representation of a country name - 2 chars|
|body|body|object|true|VAT number and confirmation request|
|» confirmation|body|boolean|false|If a confirmation document should be ordered|
|» vatNumber|body|string|true|VAT number to validate|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "confirmation": "string",
  "level": "string",
  "name": "string",
  "validationStatus": true
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="returns-a-level-two-verification-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Denotes second level validity result of checked VAT|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="returns-a-level-two-verification-result-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|confirmation|string|false|none|none|
|level|string|true|none|none|
|name|string|false|none|none|
|validationStatus|boolean|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Returns a list of vat numbers with additional data

<a id="opIdVatLookup"></a>

> Code samples

```bash
curl https://example.com/api/v1/vat-verification/lookup/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'address=null&name=null'
```

`POST /api/v1/vat-verification/lookup/{country}`

Reverse VAT Lookup: Search for companies and their VAT numbers by company name. Search is forwarded to a provider.

> Body parameter

```yaml
address: "null"
name: "null"
```

<h3 id="returns-a-list-of-vat-numbers-with-additional-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string(string)|true|ISO_3166-1_alpha-2 representation of a country name - 2 chars|
|body|body|object|true|Company name|
|» address|body|string|false|Company address|
|» name|body|string|true|Company name|

> Example responses

> 200 Response

```json
{
  "matches": [
    {
      "company": {
        "address": [
          "string"
        ],
        "country": "string",
        "dateOfIncorporation": "string",
        "extraData": {},
        "formattedAddress": [
          "string"
        ],
        "id": "string",
        "legalForm": "string",
        "managingDirectors": [
          "string"
        ],
        "name": "string",
        "registrationNumber": "string",
        "requestTime": 0,
        "secretaries": [
          "string"
        ],
        "sicNaceCodes": [
          "string"
        ],
        "status": "string"
      },
      "vat": "string"
    }
  ],
  "searchterm_address": "string",
  "searchterm_country": "string",
  "searchterm_name": "string",
  "timestamp": 0
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="returns-a-list-of-vat-numbers-with-additional-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result of a VAT number reverse Lookup|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="returns-a-list-of-vat-numbers-with-additional-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matches|[object]|false|none|none|
|» company|object|false|none|none|
|» » address|[string]|false|none|none|
|» » country|string|true|none|none|
|» » dateOfIncorporation|string|false|none|none|
|» » extraData|object|false|none|none|
|» » formattedAddress|[string]|false|none|none|
|» » id|string|true|none|none|
|» » legalForm|string|false|none|none|
|» » managingDirectors|[string]|false|none|none|
|» » name|string|true|none|none|
|» » registrationNumber|string|true|none|none|
|» » requestTime|integer|false|none|none|
|» » secretaries|[string]|false|none|none|
|» » sicNaceCodes|[string]|false|none|none|
|» » status|string|false|none|none|
|» vat|string|false|none|none|
|searchterm_address|string|false|none|none|
|searchterm_country|string|false|none|none|
|searchterm_name|string|false|none|none|
|timestamp|integer(int32)|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

<h1 id="kyc-api-documentation-v1-ein-verification">v1-ein-verification</h1>

US EIN tax number methods

## Verifies an EIN number

<a id="opIdEinVerificationBasic"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/ein-verification/basic-check?ein=string' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/ein-verification/basic-check`

Performs a basic verification check of a given EIN tax number.

<h3 id="verifies-an-ein-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ein|query|string(string)|true|Nine letter EIN number with or without hyphens|

> Example responses

> 200 Response

```json
{
  "confidence_score": "string",
  "confidence_score_explanation": "string",
  "dba_score": "string",
  "dba_score_explanation": "string",
  "ein": "string",
  "irs_score": "string",
  "irs_score_explanation": "string",
  "timestamp": 0,
  "validationStatus": true
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="verifies-an-ein-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result of a basic EIN number verification|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="verifies-an-ein-number-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence_score|string|true|none|none|
|confidence_score_explanation|string|true|none|none|
|dba_score|string|true|none|none|
|dba_score_explanation|string|true|none|none|
|ein|string|true|none|none|
|irs_score|string|true|none|none|
|irs_score_explanation|string|true|none|none|
|timestamp|number|true|none|none|
|validationStatus|boolean|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Verifies EIN number and retrieves company data

<a id="opIdEinVerificationComprehensive"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/ein-verification/comprehensive-check?ein=string' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/ein-verification/comprehensive-check`

Comprehensive verification of a given EIN number. Additionally to the basic verification it will lookup company details

<h3 id="verifies-ein-number-and-retrieves-company-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ein|query|string(string)|true|Nine letter EIN number with or without hyphens|

> Example responses

> 200 Response

```json
{
  "ein": "string",
  "matched_ein_companies": [
    {
      "address": [
        "string"
      ],
      "company_score": 0,
      "company_score_explanation": "string",
      "confidence_score": 0,
      "confidence_score_explanation": "string",
      "dba_score": "string",
      "dba_score_explanation": "string",
      "ein": "string",
      "formattedAddress": [
        "string"
      ],
      "irs_score": "string",
      "irs_score_explanation": "string",
      "name": "string",
      "provided_status": "string",
      "provided_status_explanation": "string"
    }
  ],
  "timestamp": 0,
  "validationStatus": true
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="verifies-ein-number-and-retrieves-company-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result of a comprehensive EIN number verification|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="verifies-ein-number-and-retrieves-company-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ein|string|true|none|none|
|matched_ein_companies|[object]|true|none|none|
|» address|[string]|false|none|none|
|» company_score|number|false|none|none|
|» company_score_explanation|string|false|none|none|
|» confidence_score|number|false|none|none|
|» confidence_score_explanation|string|false|none|none|
|» dba_score|string|false|none|none|
|» dba_score_explanation|string|false|none|none|
|» ein|string|false|none|none|
|» formattedAddress|[string]|false|none|none|
|» irs_score|string|false|none|none|
|» irs_score_explanation|string|false|none|none|
|» name|string|false|none|none|
|» provided_status|string|false|none|none|
|» provided_status_explanation|string|false|none|none|
|timestamp|number|true|none|none|
|validationStatus|boolean|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Retrieves a list of EIN numbers

<a id="opIdEinVerificationLookup"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/ein-verification/lookup?name=string' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/ein-verification/lookup`

Lookup EIN number for a company by its company name

<h3 id="retrieves-a-list-of-ein-numbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string(string)|true|Business name of the company|
|state|query|string(string)|false|Optional state parameter to improve results. (Two letter code for example CA or US-CA for California)|
|zip|query|string(string)|false|Optional zip code parameter to improve results. (Zip is preferred over state)|
|tight|query|boolean|false|Optional parameter to do tight matching. (Only the best match will be returned rather then the top 5)|

> Example responses

> 200 Response

```json
{
  "matched_ein_companies": [
    {
      "address": [
        "string"
      ],
      "company_score": 0,
      "company_score_explanation": "string",
      "confidence_score": 0,
      "confidence_score_explanation": "string",
      "dba_score": "string",
      "dba_score_explanation": "string",
      "ein": "string",
      "formattedAddress": [
        "string"
      ],
      "irs_score": "string",
      "irs_score_explanation": "string",
      "name": "string",
      "provided_status": "string",
      "provided_status_explanation": "string"
    }
  ],
  "searchterm_name": "string",
  "searchterm_state": "string",
  "searchterm_zip": "string",
  "tight_search": true,
  "timestamp": 0
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="retrieves-a-list-of-ein-numbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result of a EIN reverse lookup|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="retrieves-a-list-of-ein-numbers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matched_ein_companies|[object]|false|none|none|
|» address|[string]|false|none|none|
|» company_score|number|false|none|none|
|» company_score_explanation|string|false|none|none|
|» confidence_score|number|false|none|none|
|» confidence_score_explanation|string|false|none|none|
|» dba_score|string|false|none|none|
|» dba_score_explanation|string|false|none|none|
|» ein|string|false|none|none|
|» formattedAddress|[string]|false|none|none|
|» irs_score|string|false|none|none|
|» irs_score_explanation|string|false|none|none|
|» name|string|false|none|none|
|» provided_status|string|false|none|none|
|» provided_status_explanation|string|false|none|none|
|searchterm_name|string|true|none|none|
|searchterm_state|string|true|none|none|
|searchterm_zip|string|true|none|none|
|tight_search|boolean|true|none|none|
|timestamp|number|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

<h1 id="kyc-api-documentation-v1-nif-verification">v1-nif-verification</h1>

NIF Verification methods

## Verifies a NIF number

<a id="opIdNifBasic"></a>

> Code samples

```bash
curl https://example.com/api/v1/nif-verification/basic-check/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'companyAddress=string&companyName=string&nifNumber=string'
```

`POST /api/v1/nif-verification/basic-check/{country}`

Performs a basic verification check of a given NIF tax number against NIF.com. Optional parameters may be added to improve calculation of confidence score.

> Body parameter

```yaml
companyAddress: string
companyName: string
nifNumber: string
```

<h3 id="verifies-a-nif-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string(string)|true|ISO_3166-1_alpha-2 representation of a country name - 2 chars|
|body|body|object|true|Company details|
|» companyAddress|body|string|false|company address lines|
|» companyName|body|string|false|Company name|
|» nifNumber|body|string|true|NIF number to validate|

> Example responses

> 200 Response

```json
{
  "companyName": "string",
  "confidenceScore": 0,
  "nifNumber": 0,
  "validationStatus": true
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="verifies-a-nif-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result of a basic NIF verification|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="verifies-a-nif-number-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyName|string|false|none|none|
|confidenceScore|number|true|none|none|
|nifNumber|number|true|none|none|
|validationStatus|boolean|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Verifies a NIF number and retrieves company data

<a id="opIdNifComprehensive"></a>

> Code samples

```bash
curl https://example.com/api/v1/nif-verification/comprehensive-check/string \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'companyAddress=string&companyName=string&nifNumber=string'
```

`POST /api/v1/nif-verification/comprehensive-check/{country}`

Comprehensive verification of given portuguese NIF number against NIF.com. Optional parameters may help to build a better confidence score. Additional company data will be provided.

> Body parameter

```yaml
companyAddress: string
companyName: string
nifNumber: string
```

<h3 id="verifies-a-nif-number-and-retrieves-company-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|path|string(string)|true|ISO_3166-1_alpha-2 representation of a country name - 2 chars|
|body|body|object|true|Company details|
|» companyAddress|body|string|false|company address lines|
|» companyName|body|string|false|Company name|
|» nifNumber|body|string|true|NIF number to validate|

> Example responses

> 200 Response

```json
{
  "activity": {},
  "address": "string",
  "capital": 0,
  "companyName": "string",
  "confidenceScore": 0,
  "currency": "string",
  "email": "string",
  "fax": "string",
  "geo": "string",
  "legalType": "string",
  "nifNumber": 0,
  "phone": "string",
  "status": {},
  "validationStatus": true,
  "website": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="verifies-a-nif-number-and-retrieves-company-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result of a comprehensive NIF verification|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="verifies-a-nif-number-and-retrieves-company-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity|object|false|none|none|
|address|string|false|none|none|
|capital|number|false|none|none|
|companyName|string|false|none|none|
|confidenceScore|number|true|none|none|
|currency|string|false|none|none|
|email|string|false|none|none|
|fax|string|false|none|none|
|geo|string|false|none|none|
|legalType|string|false|none|none|
|nifNumber|number|true|none|none|
|phone|string|false|none|none|
|status|object|false|none|none|
|validationStatus|boolean|true|none|none|
|website|string|false|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

<h1 id="kyc-api-documentation-v1-iban-verification">v1-iban-verification</h1>

IBAN Verification methods

## Checks validity of an IBAN number

<a id="opIdIbanBasic"></a>

> Code samples

```bash
curl https://example.com/api/v1/iban-verification/check-iban \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'ibanNumber=AT483200000012345864'
```

`POST /api/v1/iban-verification/check-iban`

Basic verification of an IBAN number validating its structure

> Body parameter

```yaml
ibanNumber: AT483200000012345864
```

<h3 id="checks-validity-of-an-iban-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|IBAN number|
|» ibanNumber|body|string|true|IBAN number to validate|

> Example responses

> 200 Response

```json
{
  "valid": true
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="checks-validity-of-an-iban-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Denotes validity of checked IBAN|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="checks-validity-of-an-iban-number-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|valid|boolean|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## Checks validity of an IBAN number

<a id="opIdIbanComprehensive"></a>

> Code samples

```bash
curl https://example.com/api/v1/iban-verification/comprehensive-check-iban \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}" \
  -d 'ibanNumber=AT483200000012345864'
```

`POST /api/v1/iban-verification/comprehensive-check-iban`

Comprehensive verification of IBAN number using a service provider for verification

> Body parameter

```yaml
ibanNumber: AT483200000012345864
```

<h3 id="checks-validity-of-an-iban-number-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|IBAN number|
|» ibanNumber|body|string|true|IBAN number to validate|

> Example responses

> 200 Response

```json
{
  "valid": true
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="checks-validity-of-an-iban-number-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Denotes validity of checked IBAN and provides comprehensive information|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="checks-validity-of-an-iban-number-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|valid|boolean|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

<h1 id="kyc-api-documentation-v1-tin-verification">v1-tin-verification</h1>

TIN Verification methods

## Verifies a TIN number

<a id="opIdTinVerificationBasicCheck"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/tin-verification/basic-check?tin=string&name=string' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/tin-verification/basic-check`

Performs a basic verification check of a given TIN number and name.

<h3 id="verifies-a-tin-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tin|query|string(string)|true|Nine letter TIN number with or without hyphens|
|name|query|string(string)|true|Company Name|

> Example responses

> 200 Response

```json
{
  "matchStatus": "string",
  "name": "string",
  "possibleMatch": "string",
  "tin": "string",
  "validationStatus": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="verifies-a-tin-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result of a basic TIN number check with company name|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="verifies-a-tin-number-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchStatus|string|true|none|none|
|name|string|true|none|none|
|possibleMatch|string|true|none|none|
|tin|string|true|none|none|
|validationStatus|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## EIN Name Lookup with TIN number and retrieves company data

<a id="opIdTinVerificationComprehensiveCheck"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/tin-verification/comprehensive-check?tin=string&name=string' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/tin-verification/comprehensive-check`

Performs an EIN name match using provided TIN Number. Additionally to the name lookup it will lookup company details

<h3 id="ein-name-lookup-with-tin-number-and-retrieves-company-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tin|query|string(string)|true|Nine letter TIN number with or without hyphens|
|name|query|string(string)|true|Company Name|
|threshold|query|integer(int64)|false|The percentage of minimum similarity threshold for company matching (optional, default: 70%)|

> Example responses

> 200 Response

```json
{
  "einResult": "string",
  "matchedCompanies": [
    {
      "address": [
        "string"
      ],
      "country": "string",
      "dateOfIncorporation": "string",
      "extraData": {},
      "formattedAddress": [
        "string"
      ],
      "id": "string",
      "legalForm": "string",
      "managingDirectors": [
        "string"
      ],
      "name": "string",
      "registrationNumber": "string",
      "requestTime": 0,
      "secretaries": [
        "string"
      ],
      "sicNaceCodes": [
        "string"
      ],
      "status": "string"
    }
  ],
  "tinResult": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="ein-name-lookup-with-tin-number-and-retrieves-company-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result of a basic TIN number check with company name and the list of matched companies|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="ein-name-lookup-with-tin-number-and-retrieves-company-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|einResult|string|true|none|none|
|matchedCompanies|[object]|true|none|none|
|» address|[string]|false|none|none|
|» country|string|false|none|none|
|» dateOfIncorporation|string|false|none|none|
|» extraData|object|false|none|none|
|» formattedAddress|[string]|false|none|none|
|» id|string|false|none|none|
|» legalForm|string|false|none|none|
|» managingDirectors|[string]|false|none|none|
|» name|string|false|none|none|
|» registrationNumber|string|false|none|none|
|» requestTime|integer|false|none|none|
|» secretaries|[string]|false|none|none|
|» sicNaceCodes|[string]|false|none|none|
|» status|string|false|none|none|
|tinResult|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>

## EIN Name Lookup with TIN number

<a id="opIdTinVerificationNameLookup"></a>

> Code samples

```bash
curl 'https://example.com/api/v1/tin-verification/name-lookup?tin=string' \
  -H 'Accept: application/json' \
  -H "user_key: ${API_KEY}"
```

`GET /api/v1/tin-verification/name-lookup`

Performs an EIN name match using provided TIN Number

<h3 id="ein-name-lookup-with-tin-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tin|query|string(string)|true|Nine letter TIN number with or without hyphens|

> Example responses

> 200 Response

```json
{
  "matchStatus": "string",
  "possibleMatch": "string",
  "tin": "string"
}
```

> default Response

```json
{
  "code": 0,
  "fault": "string",
  "message": "string",
  "tag": "string"
}
```

<h3 id="ein-name-lookup-with-tin-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Result of a EIN name lookup with TIN number|Inline|
|default|Default|Detailed information about the error|Inline|

<h3 id="ein-name-lookup-with-tin-number-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchStatus|string|true|none|none|
|possibleMatch|string|true|none|none|
|tin|string|true|none|none|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|fault|string|false|none|none|
|message|string|true|none|none|
|tag|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
user_key
</aside>
