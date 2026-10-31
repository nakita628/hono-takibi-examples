<h1 id="exchangerate-api">ExchangeRate-API v4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Fetch the latest currency exchange rates via API. ExchangeRate-API is free and unlimited.

Base URLs:

* <a href="https://api.exchangerate-api.com/v4">https://api.exchangerate-api.com/v4</a> - No authentication endpoint. Returns latest exchange rates and some metadata.

<a href="https://www.exchangerate-api.com/terms">Terms of service</a>

<a href="https://www.exchangerate-api.com/docs/documentation">API Documentation</a>

<h1 id="exchangerate-api-default">Default</h1>

## Returns latest exchange rates in parameter-supplied base currency.

> Code samples

```bash
curl https://example.com/latest/string \
  -H 'Accept: application/json'
```

`GET /latest/{base_currency}`

<h3 id="returns-latest-exchange-rates-in-parameter-supplied-base-currency-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|base_currency|path|string|true|**Base Currency**. *Example: USD*. You an use any of the ISO 4217 currency codes we support. See https://www.exchangerate-api.com/docs/supported-currencies|

> Example responses

> 200 Response

```json
{
  "base": "USD",
  "date": "string",
  "rates": {
    "property1": 0,
    "property2": 0
  },
  "time_last_updated": 1556293443
}
```

> 404 Response

```json
{
  "error_type": "string",
  "result": "string"
}
```

<h3 id="returns-latest-exchange-rates-in-parameter-supplied-base-currency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|Inline|
|404|Not Found|Currency code not supported|Inline|

<h3 id="returns-latest-exchange-rates-in-parameter-supplied-base-currency-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base|string|false|none|The currency code you supplied as base in your request|
|date|string|false|none|The date these exchange rates are for|
|rates|object|false|none|Each supported currency code in terms of the base currency|
|» **additionalProperties**|number(double)|false|none|none|
|time_last_updated|integer|false|none|The epoch time this set of exchange rates was generated|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_type|string|false|none|none|
|result|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
