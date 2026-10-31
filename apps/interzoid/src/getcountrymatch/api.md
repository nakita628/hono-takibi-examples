<h1 id="interzoid-get-country-match-similarity-key-api">Interzoid Get Country Match Similarity Key API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides a similarity key used to match with other similar country name data, including for purposes of deduplication, fuzzy matching, or merging of datasets. A much higher match rate will be achieved by matching on the algorithmically generated similarity key rather than the data itself.

Base URLs:

* <a href="https://api.interzoid.com">https://api.interzoid.com</a>

<a href="https://www.interzoid.com/terms">Terms of service</a>
Email: <a href="mailto:support@interzoid.com">API Support</a> 
Web: <a href="https://www.interzoid.com">API Support</a> 
License: <a href="https://www.interzoid.com/license">Interzoid license</a>

<a href="https://www.interzoid.com/services/getcountrymatch">API home page and documentation</a>

<h1 id="interzoid-get-country-match-similarity-key-api-country-match-similarity-key">Country Match Similarity Key</h1>

## Gets a similarity key for matching purposes for country name data

<a id="opIdgetcountrymatch"></a>

> Code samples

```bash
curl 'https://example.com/getcountrymatch?license=string&country=string' \
  -H 'Accept: application/json'
```

`GET /getcountrymatch`

Gets a similarity key to use for matching purposes for country name data

<h3 id="gets-a-similarity-key-for-matching-purposes-for-country-name-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license|query|string|true|Your Interzoid license API key. Register at www.interzoid.com/register|
|country|query|string|true|Country name from which to generate similarity key|

> Example responses

> 200 Response

```json
{
  "Code": "string",
  "Credits": "string",
  "Simkey": "string"
}
```

<h3 id="gets-a-similarity-key-for-matching-purposes-for-country-name-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Generated similarity key for country name data|Inline|
|400|Bad Request|bad request - insufficient parameters|None|
|402|Payment Required|credits exhausted|None|
|403|Forbidden|invalid license API key|None|
|405|Method Not Allowed|method not allowed|None|
|500|Internal Server Error|internal server error|None|

<h3 id="gets-a-similarity-key-for-matching-purposes-for-country-name-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|none|
|Credits|string|false|none|none|
|Simkey|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
