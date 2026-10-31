<h1 id="interzoid-zip-code-detailed-info-api">Interzoid Zip Code Detailed Info API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides detailed information for a given zip code, including city, state, latitude, longitude, area size, and various population demographics.

Base URLs:

* <a href="https://api.interzoid.com">https://api.interzoid.com</a>

<a href="https://www.interzoid.com/terms">Terms of service</a>
Email: <a href="mailto:support@interzoid.com">API Support</a> 
Web: <a href="https://www.interzoid.com">API Support</a> 
License: <a href="https://www.interzoid.com/license">Interzoid license</a>

<a href="https://www.interzoid.com/services/getzipcodeinfo">API home page and documentation</a>

<h1 id="interzoid-zip-code-detailed-info-api-detailed-zip-code-information">Detailed Zip Code Information</h1>

## Gets detailed zip code information

<a id="opIdgetzipcodeinfo"></a>

> Code samples

```bash
curl 'https://example.com/getzipcodeinfo?license=string&zip=string' \
  -H 'Accept: application/json'
```

`GET /getzipcodeinfo`

For a given zip code, detailed information is returned, including city, state, latitude, longitude, area size, and various population demographics, including income, age, and presence of farming data.

<h3 id="gets-detailed-zip-code-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license|query|string|true|Your Interzoid license API key. Register at www.interzoid.com/register|
|zip|query|string|true|Zip code to retrieve detailed information|

> Example responses

> 200 Response

```json
{
  "AreaSquareMiles": "string",
  "City": "string",
  "Code": "string",
  "Credits": "string",
  "ElderlyHouseholdPercent": "string",
  "FarmerHouseholdPercent": "string",
  "IncomePercent100k": "string",
  "IncomePercent200k": "string",
  "IncomePercent50k": "string",
  "Latitude": "string",
  "Longitude": "string",
  "MarriedHouseholdPercent": "string",
  "Population": "string",
  "State": "string",
  "ZipCode": "string"
}
```

<h3 id="gets-detailed-zip-code-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Zip code detailed code information|Inline|
|400|Bad Request|bad request - insufficient parameters|None|
|402|Payment Required|credits exhausted|None|
|403|Forbidden|invalid license API key|None|
|404|Not Found|zip code not found|None|
|405|Method Not Allowed|method not allowed|None|
|500|Internal Server Error|internal server error|None|

<h3 id="gets-detailed-zip-code-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AreaSquareMiles|string|false|none|none|
|City|string|false|none|none|
|Code|string|false|none|none|
|Credits|string|false|none|none|
|ElderlyHouseholdPercent|string|false|none|none|
|FarmerHouseholdPercent|string|false|none|none|
|IncomePercent100k|string|false|none|none|
|IncomePercent200k|string|false|none|none|
|IncomePercent50k|string|false|none|none|
|Latitude|string|false|none|none|
|Longitude|string|false|none|none|
|MarriedHouseholdPercent|string|false|none|none|
|Population|string|false|none|none|
|State|string|false|none|none|
|ZipCode|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
