<h1 id="interzoid-get-full-name-parsed-match-similarity-key-api">Interzoid Get Full Name Parsed Match Similarity Key API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides a similarity key used to match with other similar full name data when data fields are parsed into first name and last name components, including for purposes of deduplication, fuzzy matching, or merging of datasets. A much higher match rate will be achieved by matching on the similarity key rather than the data itself. This API is for full name data where first and last name are in separate fields. Use the Full Name Similarity Key API for first and last name data that are in the same field.

Base URLs:

* <a href="https://api.interzoid.com">https://api.interzoid.com</a>

<a href="https://www.interzoid.com/terms">Terms of service</a>
Email: <a href="mailto:support@interzoid.com">API Support</a> 
Web: <a href="https://www.interzoid.com">API Support</a> 
License: <a href="https://www.interzoid.com/license">Interzoid license</a>

<a href="https://www.interzoid.com/services/getfullnameparsedmatch">API home page and documentation</a>

<h1 id="interzoid-get-full-name-parsed-match-similarity-key-api-full-name-parsed-similarity-key">Full Name Parsed Similarity Key</h1>

## Gets a similarity key for matching purposes for parsed full name data

<a id="opIdgetfullnameparsedmatch"></a>

> Code samples

```bash
curl 'https://example.com/getfullnameparsedmatch?license=string&firstname=string&lastname=string' \
  -H 'Accept: application/json'
```

`GET /getfullnameparsedmatch`

Gets a similarity key for matching purposes for parsed full name data, where the first name and last name are split into separate fields in the source data rather than combined.

<h3 id="gets-a-similarity-key-for-matching-purposes-for-parsed-full-name-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license|query|string|true|Your Interzoid license API key. Register at www.interzoid.com/register|
|firstname|query|string|true|First name from which to generate similarity key|
|lastname|query|string|true|Last name from which to generate similarity key|

> Example responses

> 200 Response

```json
{
  "Code": "string",
  "Credits": "string",
  "Simkey": "string"
}
```

<h3 id="gets-a-similarity-key-for-matching-purposes-for-parsed-full-name-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Generated similarity key for parsed full name data|Inline|
|400|Bad Request|bad request - insufficient parameters|None|
|402|Payment Required|credits exhausted|None|
|403|Forbidden|invalid license API key|None|
|405|Method Not Allowed|method not allowed|None|
|500|Internal Server Error|internal server error|None|

<h3 id="gets-a-similarity-key-for-matching-purposes-for-parsed-full-name-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|none|
|Credits|string|false|none|none|
|Simkey|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>
