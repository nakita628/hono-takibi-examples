<h1 id="interzoid-get-currency-rate-api">Interzoid Get Currency Rate API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API retrieves the latest currency exchange rate, against the US Dollar, for the given three-letter international currency code. These currency rates are compiled from many global sources and are updated several times per day.

Base URLs:

* <a href="https://api.interzoid.com">https://api.interzoid.com</a>

<a href="https://www.interzoid.com/terms">Terms of service</a>
Email: <a href="mailto:support@interzoid.com">API Support</a> 
Web: <a href="https://www.interzoid.com">API Support</a> 
License: <a href="https://www.interzoid.com/license">Interzoid license</a>

<a href="https://www.interzoid.com/services/getcurrencyrate">API home page and documentation</a>

<h1 id="interzoid-get-currency-rate-api-currency-rates">Currency Rates</h1>

## Gets a foreign currency rate for one US Dollar

<a id="opIdgetcurrencyrate"></a>

> Code samples

```bash
curl 'https://example.com/getcurrencyrate?license=string&symbol=string' \
  -H 'Accept: application/json'
```

`GET /getcurrencyrate`

Use a currency symbol (EUR, GBP, CNY, JPY, AUD, etc.) to obtain a live currency foreign exchange rate for one US Dollar. See the API home page for list of all supported currencies.

<h3 id="gets-a-foreign-currency-rate-for-one-us-dollar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license|query|string|true|Your Interzoid license API key. Register at www.interzoid.com/register|
|symbol|query|string|true|Currency symbol to retrieve current rate for|

> Example responses

> 200 Response

```json
{
  "Code": "string",
  "Country": "string",
  "Credits": "string",
  "Name": "string",
  "Rate": "string",
  "Symbol": "string"
}
```

<h3 id="gets-a-foreign-currency-rate-for-one-us-dollar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Currency rate data to one US Dollar|Inline|
|400|Bad Request|bad request - insufficient parameters|None|
|402|Payment Required|credits exhausted|None|
|403|Forbidden|invalid license API key|None|
|404|Not Found|currency symbol not found|None|
|405|Method Not Allowed|method not allowed|None|
|500|Internal Server Error|internal server error|None|

<h3 id="gets-a-foreign-currency-rate-for-one-us-dollar-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|none|
|Country|string|false|none|none|
|Credits|string|false|none|none|
|Name|string|false|none|none|
|Rate|string|false|none|none|
|Symbol|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
