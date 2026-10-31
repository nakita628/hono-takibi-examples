<h1 id="interzoid-country-data-standardization-api">Interzoid Country Data Standardization API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides a standard for country name for the purposes of standardizing country name data, improving query results, analytics, and data merging.

Base URLs:

* <a href="https://api.interzoid.com">https://api.interzoid.com</a>

<a href="https://www.interzoid.com/terms">Terms of service</a>
Email: <a href="mailto:support@interzoid.com">API Support</a> 
Web: <a href="https://www.interzoid.com">API Support</a> 
License: <a href="https://www.interzoid.com/license">Interzoid license</a>

<a href="https://www.interzoid.com/services/getcountrystandard">API home page and documentation</a>

<h1 id="interzoid-country-data-standardization-api-country-name-standardization">Country Name Standardization</h1>

## Gets country name standard

<a id="opIdgetcountrystandard"></a>

> Code samples

```bash
curl 'https://example.com/getcountrystandard?license=string&country=string' \
  -H 'Accept: application/json'
```

`GET /getcountrystandard`

Gets a pre-selected country name standard for various permutations of a given country name.

<h3 id="gets-country-name-standard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license|query|string|true|Your Interzoid license API key. Register at www.interzoid.com/register|
|country|query|string|true|Country name from which to retrieve the standardized version|

> Example responses

> 200 Response

```json
{
  "Code": "string",
  "CountryStandard": "string",
  "Credits": "string"
}
```

<h3 id="gets-country-name-standard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standardized country name data|Inline|
|400|Bad Request|bad request - insufficient parameters|None|
|402|Payment Required|credits exhausted|None|
|403|Forbidden|invalid license API key|None|
|405|Method Not Allowed|method not allowed|None|
|500|Internal Server Error|internal server error|None|

<h3 id="gets-country-name-standard-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|none|
|CountryStandard|string|false|none|none|
|Credits|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
