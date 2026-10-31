<h1 id="interzoid-convert-currency-rate-api">Interzoid Convert Currency Rate API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API enables you to convert an amount of one currency into another currency using current foreign exchange rates.

Base URLs:

* <a href="https://api.interzoid.com">https://api.interzoid.com</a>

<a href="https://www.interzoid.com/terms">Terms of service</a>
Email: <a href="mailto:support@interzoid.com">API Support</a> 
Web: <a href="https://www.interzoid.com">API Support</a> 
License: <a href="https://www.interzoid.com/license">Interzoid license</a>

<a href="https://www.interzoid.com/services/convertcurrency">API home page and documentation</a>

<h1 id="interzoid-convert-currency-rate-api-live-currency-rate-conversion">Live Currency Rate Conversion</h1>

## Converts amount in one currency to that of another

<a id="opIdconvertcurrency"></a>

> Code samples

```bash
curl 'https://example.com/convertcurrency?license=string&from=string&to=string&amount=string' \
  -H 'Accept: application/json'
```

`GET /convertcurrency`

Provide an amount in one currency (EUR, GBP, CNY, JPY, AUD, etc.), and also a second currency to convert it to. The API will return the result using current foreign exchange rates. See the API home page for a list of all supported currencies.

<h3 id="converts-amount-in-one-currency-to-that-of-another-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license|query|string|true|Your Interzoid license API key. Register at www.interzoid.com/register|
|from|query|string|true|Currency symbol for the converted from amount|
|to|query|string|true|Currency symbol for the converted to amount|
|amount|query|string|true|The amount of currency to be converted|

> Example responses

> 200 Response

```json
{
  "Code": "string",
  "Converted": "string",
  "Credits": "string",
  "Currency": "string"
}
```

<h3 id="converts-amount-in-one-currency-to-that-of-another-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Currency rate data to one US DOllar|Inline|
|400|Bad Request|bad request - insufficient parameters|None|
|402|Payment Required|credits exhausted|None|
|403|Forbidden|invalid license API key|None|
|404|Not Found|currency symbol not found|None|
|405|Method Not Allowed|method not allowed|None|
|500|Internal Server Error|internal server error|None|

<h3 id="converts-amount-in-one-currency-to-that-of-another-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|none|
|Converted|string|false|none|none|
|Credits|string|false|none|none|
|Currency|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
