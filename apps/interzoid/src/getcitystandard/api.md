<h1 id="interzoid-city-data-standardization-api">Interzoid City Data Standardization API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides a standard for US and international cities for the purposes of standardizing city name data, improving query results, analytics, and data merging.

Base URLs:

* <a href="https://api.interzoid.com">https://api.interzoid.com</a>

<a href="https://www.interzoid.com/terms">Terms of service</a>
Email: <a href="mailto:support@interzoid.com">API Support</a> 
Web: <a href="https://www.interzoid.com">API Support</a> 
License: <a href="https://www.interzoid.com/license">Interzoid license</a>

<a href="https://www.interzoid.com/services/getcitystandard">API home page and documentation</a>

<h1 id="interzoid-city-data-standardization-api-city-data-standardization">City Data Standardization</h1>

## Gets a city name standard for US and international cities

<a id="opIdgetcitystandard"></a>

> Code samples

```bash
curl 'https://example.com/getcitystandard?license=string&city=string' \
  -H 'Accept: application/json'
```

`GET /getcitystandard`

Gets a pre-selected city name standard for US and international cities for various permutations of a given city name.

<h3 id="gets-a-city-name-standard-for-us-and-international-cities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license|query|string|true|Your Interzoid license API key. Register at www.interzoid.com/register|
|city|query|string|true|City name from which to retrieve the standardized version|

> Example responses

> 200 Response

```json
{
  "CityStandard": "string",
  "Code": "string",
  "Credits": "string"
}
```

<h3 id="gets-a-city-name-standard-for-us-and-international-cities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standardized city name data|Inline|
|400|Bad Request|bad request - insufficient parameters|None|
|402|Payment Required|credits exhausted|None|
|403|Forbidden|invalid license API key|None|
|405|Method Not Allowed|method not allowed|None|
|500|Internal Server Error|internal server error|None|

<h3 id="gets-a-city-name-standard-for-us-and-international-cities-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CityStandard|string|false|none|none|
|Code|string|false|none|none|
|Credits|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
