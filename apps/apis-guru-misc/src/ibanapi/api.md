<h1 id="ibanapi-openapi-documentation">IBANAPI OpenApi Documentation v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

IBANAPI OpenApi documentation

Base URLs:

* <a href="https://api.ibanapi.com/v1">https://api.ibanapi.com/v1</a> - IBANAPI Server

Email: <a href="mailto:samy@ibanapi.com">samy@ibanapi.com</a> 

# Authentication

* API Key (api_key_security)
    - Parameter Name: **api_key**, in: query. Your API Key, you can get it from https://ibanapi.com

<h1 id="ibanapi-openapi-documentation-ibanapi">IBANAPI</h1>

API Endpoints of IBANAPI

## Get Account Balance

<a id="opIdgetBalance"></a>

> Code samples

```bash
curl "https://example.com/balance?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /balance`

Returns the account balance and expiry

> Example responses

> 200 Response

```json
{
  "data": {
    "bank_balance": 100,
    "basic_balance": 2000,
    "expiry_date": "2021-05-16"
  },
  "message": "SUCCESS",
  "result": "200"
}
```

> 400 Response

```json
{
  "data": "{}",
  "message": "Your balance is exhausted",
  "result": "400"
}
```

> 401 Response

```json
{
  "data": "{}",
  "message": "Your package has expired",
  "result": "401"
}
```

> 403 Response

```json
{
  "data": "{}",
  "message": "Invalid API Key",
  "result": "403"
}
```

> 422 Response

```json
{
  "data": "{}",
  "message": "API key is missing",
  "result": "422"
}
```

<h3 id="get-account-balance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|SUCCESS|[BalanceResponse](#schemabalanceresponse)|
|400|Bad Request|Your balance is exhausted or bad request|[400](#schema400)|
|401|Unauthorized|Package expired or account was blocked|[401](#schema401)|
|403|Forbidden|Invalid API Key|[403](#schema403)|
|422|Unprocessable Entity|API key is missing|[422](#schema422)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_security
</aside>

## Validate IBAN

<a id="opIdvalidateIBAN"></a>

> Code samples

```bash
curl "https://example.com/validate?iban=string&api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /validate`

Returns the validation results

<h3 id="validate-iban-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|iban|query|string|true|The IBAN|

> Example responses

> 200 Response

```json
{
  "data": {
    "bank": {
      "address": "TORNIMAE 2 FLOOR 10",
      "bank_name": "AS SEB PANK",
      "bic": "EEUHEE2X",
      "city": "TALLINN",
      "phone": "",
      "state": "",
      "zip": "15010"
    },
    "bank_account": "00102014568",
    "bban": "1000001020145685",
    "country_code": "EE",
    "country_name": "Estonia",
    "currency_code": "EUR",
    "iso_alpha3": "EST",
    "sepa": {
      "sepa_b2b": "No",
      "sepa_card_clearing": "No",
      "sepa_credit_transfer": "Yes",
      "sepa_direct_debit": "No",
      "sepa_sdd_core": "No"
    },
    "sepa_member": "Yes"
  },
  "expremental": "0",
  "message": "Valid IBAN Number",
  "result": "200",
  "validations": [
    {
      "message": "Valid IBAN length",
      "result": 200
    },
    {
      "message": "Valid IBAN Checksum",
      "result": 200
    }
  ]
}
```

> 400 Response

```json
{
  "data": "{}",
  "message": "Your balance is exhausted",
  "result": "400"
}
```

> 401 Response

```json
{
  "data": "{}",
  "message": "Your package has expired",
  "result": "401"
}
```

> 403 Response

```json
{
  "data": "{}",
  "message": "Invalid API Key",
  "result": "403"
}
```

> 422 Response

```json
{
  "data": "{}",
  "message": "API key is missing",
  "result": "422"
}
```

<h3 id="validate-iban-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid IBAN response|[IBANResult](#schemaibanresult)|
|400|Bad Request|Your balance is exhausted or bad request|[400](#schema400)|
|401|Unauthorized|Package expired or account was blocked|[401](#schema401)|
|403|Forbidden|Invalid API Key|[403](#schema403)|
|422|Unprocessable Entity|API key is missing|[422](#schema422)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_security
</aside>

## Validate IBAN Basic

<a id="opIdvalidateIBANBasic"></a>

> Code samples

```bash
curl "https://example.com/validate-basic?iban=string&api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /validate-basic`

Returns the basic validation results

<h3 id="validate-iban-basic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|iban|query|string|true|The IBAN|

> Example responses

> 200 Response

```json
{
  "data": {
    "bban": "1000001020145685",
    "country_code": "EE",
    "country_name": "Estonia",
    "currency_code": "EUR",
    "iso_alpha3": "EST",
    "sepa": [],
    "sepa_member": "Yes"
  },
  "expremental": "0",
  "message": "Valid IBAN Number",
  "result": "200",
  "validations": [
    {
      "message": "Valid IBAN length",
      "result": 200
    },
    {
      "message": "Valid IBAN Checksum",
      "result": 200
    }
  ]
}
```

> 400 Response

```json
{
  "data": "{}",
  "message": "Your balance is exhausted",
  "result": "400"
}
```

> 401 Response

```json
{
  "data": "{}",
  "message": "Your package has expired",
  "result": "401"
}
```

> 403 Response

```json
{
  "data": "{}",
  "message": "Invalid API Key",
  "result": "403"
}
```

> 422 Response

```json
{
  "data": "{}",
  "message": "API key is missing",
  "result": "422"
}
```

<h3 id="validate-iban-basic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid IBAN response|[IBANResultBasic](#schemaibanresultbasic)|
|400|Bad Request|Your balance is exhausted or bad request|[400](#schema400)|
|401|Unauthorized|Package expired or account was blocked|[401](#schema401)|
|403|Forbidden|Invalid API Key|[403](#schema403)|
|422|Unprocessable Entity|API key is missing|[422](#schema422)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key_security
</aside>

# Schemas

<h2 id="tocS_400">400</h2>
<!-- backwards compatibility -->
<a id="schema400"></a>
<a id="schema_400"></a>
<a id="tocS400"></a>
<a id="tocs400"></a>

```json
{
  "data": "{}",
  "message": "Your balance is exhausted",
  "result": "400"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|message|string|false|none|none|
|result|integer|false|none|none|

<h2 id="tocS_401">401</h2>
<!-- backwards compatibility -->
<a id="schema401"></a>
<a id="schema_401"></a>
<a id="tocS401"></a>
<a id="tocs401"></a>

```json
{
  "data": "{}",
  "message": "Your package has expired",
  "result": "401"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|message|string|false|none|none|
|result|integer|false|none|none|

<h2 id="tocS_403">403</h2>
<!-- backwards compatibility -->
<a id="schema403"></a>
<a id="schema_403"></a>
<a id="tocS403"></a>
<a id="tocs403"></a>

```json
{
  "data": "{}",
  "message": "Invalid API Key",
  "result": "403"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|message|string|false|none|none|
|result|integer|false|none|none|

<h2 id="tocS_422">422</h2>
<!-- backwards compatibility -->
<a id="schema422"></a>
<a id="schema_422"></a>
<a id="tocS422"></a>
<a id="tocs422"></a>

```json
{
  "data": "{}",
  "message": "API key is missing",
  "result": "422"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|message|string|false|none|none|
|result|integer|false|none|none|

<h2 id="tocS_BalanceResponse">BalanceResponse</h2>
<!-- backwards compatibility -->
<a id="schemabalanceresponse"></a>
<a id="schema_BalanceResponse"></a>
<a id="tocSbalanceresponse"></a>
<a id="tocsbalanceresponse"></a>

```json
{
  "data": {
    "bank_balance": 100,
    "basic_balance": 2000,
    "expiry_date": "2021-05-16"
  },
  "message": "SUCCESS",
  "result": "200"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|message|string|false|none|none|
|result|integer|false|none|none|

<h2 id="tocS_IBANResult">IBANResult</h2>
<!-- backwards compatibility -->
<a id="schemaibanresult"></a>
<a id="schema_IBANResult"></a>
<a id="tocSibanresult"></a>
<a id="tocsibanresult"></a>

```json
{
  "data": {
    "bank": {
      "address": "TORNIMAE 2 FLOOR 10",
      "bank_name": "AS SEB PANK",
      "bic": "EEUHEE2X",
      "city": "TALLINN",
      "phone": "",
      "state": "",
      "zip": "15010"
    },
    "bank_account": "00102014568",
    "bban": "1000001020145685",
    "country_code": "EE",
    "country_name": "Estonia",
    "currency_code": "EUR",
    "iso_alpha3": "EST",
    "sepa": {
      "sepa_b2b": "No",
      "sepa_card_clearing": "No",
      "sepa_credit_transfer": "Yes",
      "sepa_direct_debit": "No",
      "sepa_sdd_core": "No"
    },
    "sepa_member": "Yes"
  },
  "expremental": "0",
  "message": "Valid IBAN Number",
  "result": "200",
  "validations": [
    {
      "message": "Valid IBAN length",
      "result": 200
    },
    {
      "message": "Valid IBAN Checksum",
      "result": 200
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|expremental|integer|false|none|none|
|message|string|false|none|none|
|result|integer|false|none|none|
|validations|[object]|false|none|none|

<h2 id="tocS_IBANResultBasic">IBANResultBasic</h2>
<!-- backwards compatibility -->
<a id="schemaibanresultbasic"></a>
<a id="schema_IBANResultBasic"></a>
<a id="tocSibanresultbasic"></a>
<a id="tocsibanresultbasic"></a>

```json
{
  "data": {
    "bban": "1000001020145685",
    "country_code": "EE",
    "country_name": "Estonia",
    "currency_code": "EUR",
    "iso_alpha3": "EST",
    "sepa": [],
    "sepa_member": "Yes"
  },
  "expremental": "0",
  "message": "Valid IBAN Number",
  "result": "200",
  "validations": [
    {
      "message": "Valid IBAN length",
      "result": 200
    },
    {
      "message": "Valid IBAN Checksum",
      "result": 200
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|expremental|integer|false|none|none|
|message|string|false|none|none|
|result|integer|false|none|none|
|validations|[object]|false|none|none|
