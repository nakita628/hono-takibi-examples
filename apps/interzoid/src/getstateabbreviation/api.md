<h1 id="interzoid-state-data-standardization-api">Interzoid State Data Standardization API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides the two-letter state abbreviation (or the province abbreviation for Canada) for the purposes of standardizing state name data, improving query results, analytics, and data merging.

Base URLs:

* <a href="https://api.interzoid.com">https://api.interzoid.com</a>

<a href="https://www.interzoid.com/terms">Terms of service</a>
Email: <a href="mailto:support@interzoid.com">API Support</a> 
Web: <a href="https://www.interzoid.com">API Support</a> 
License: <a href="https://www.interzoid.com/license">Interzoid license</a>

<a href="https://www.interzoid.com/services/getstateabbreviation">API home page and documentation</a>

<h1 id="interzoid-state-data-standardization-api-state-data-standardization">State Data Standardization</h1>

## Gets a two-letter abbreviation for a state or province name data

<a id="opIdgetstateabbreviation"></a>

> Code samples

```bash
curl 'https://example.com/getstateabbreviation?license=string&state=string' \
  -H 'Accept: application/json'
```

`GET /getstateabbreviation`

Gets a two-letter abbreviation for a state or province given a permutation of state or province data.

<h3 id="gets-a-two-letter-abbreviation-for-a-state-or-province-name-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license|query|string|true|Your Interzoid license API key. Register at www.interzoid.com/register|
|state|query|string|true|State (or province) name from which to retrieve the two letter abbreviation.|

> Example responses

> 200 Response

```json
{
  "Abbreviation": "string",
  "Code": "string",
  "Credits": "string",
  "State": "string"
}
```

<h3 id="gets-a-two-letter-abbreviation-for-a-state-or-province-name-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|State (or province) standardized two-letter abbreviation|Inline|
|400|Bad Request|bad request - insufficient parameters|None|
|402|Payment Required|credits exhausted|None|
|403|Forbidden|invalid license API key|None|
|405|Method Not Allowed|method not allowed|None|
|500|Internal Server Error|internal server error|None|

<h3 id="gets-a-two-letter-abbreviation-for-a-state-or-province-name-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Abbreviation|string|false|none|none|
|Code|string|false|none|none|
|Credits|string|false|none|none|
|State|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
