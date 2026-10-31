<h1 id="apod">APOD v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery

Base URLs:

* <a href="https://api.nasa.gov/planetary">https://api.nasa.gov/planetary</a>

* <a href="http://api.nasa.gov/planetary">http://api.nasa.gov/planetary</a>

Email: <a href="mailto:evan.t.yates@nasa.gov">evan.t.yates@nasa.gov</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **api_key**, in: query.

<h1 id="apod-request-tag">request tag</h1>

An example tag

<a href="https://example.com">Here's a link</a>

## Returns images

> Code samples

```bash
curl "https://example.com/apod?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /apod`

Returns the picture of the day

<h3 id="returns-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|The date of the APOD image to retrieve|
|hd|query|boolean|false|Retrieve the URL for the high resolution image|

> Example responses

> 200 Response

```json
[
  null
]
```

<h3 id="returns-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Date must be between Jun 16, 1995 and Mar 28, 2019.|None|

<h3 id="returns-images-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>
