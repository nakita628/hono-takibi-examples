<h1 id="globalwinescore-api-documentation">GlobalWineScore API Documentation v8234aab51481d37a30757d925b7f4221a659427e</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.



The GlobalWineScore API is designed as a RESTful API, providing several resources and methods depending on your usage plan.

For further information please refer to <a href="https://www.globalwinescore.com/plans" target="_blank">our plans</a>.

# Authentication
The API uses token-based authentication.
In order to authenticate your requests, you need to include a specific header in each of your requests:

```
Authorization: Token {YOUR-API-TOKEN}
```
The word <b>Token</b> must be written. Your requests must also use the <b>HTTPS</b> protocol.

If you don't have a token yet, you need to apply for one [here](https://www.globalwinescore.com/api/).

Your personal token can be found under the <a href="https://www.globalwinescore.com/account/api/" target="_blank">My account > API</a> section of the GlobalWineScore website

# Format
The API provides several rendering formats which you can control using the `Accept` header or `format` query parameter.

- JSON (default): no header or `Accept: application/json`
- XML: `Accept: application/xml`
# Rate limiting
For API requests, the rate limit allows for up to 10 requests per minute.

# Error handling

Whether a request succeeded is indicated by the HTTP status code. A 2xx status code indicates success, whereas a 4xx status code indicates failure.

When a request fails, the response body is still JSON, but always contains a `detail` field with a description of the error, which you can inspect for debugging.

For example, trying to access the API without proper authentication will return code 403 along with the message:

`{"detail": "Authentication credentials were not provided."}`

Found a bug ? send us an email at <a href="mailto:api@globalwinescore.com">api@globalwinescore.com</a>

# Ordering

At the moment, GlobalWineScores may be sorted by `date` and `score`. Use "-"
to sort in descending order.

# Continuous synchronization

If you need to synchronize your database with our API, you can query our API using `?ordering=-date` to get the newest scores first, which means you won't have to crawl the whole catalog every time :-)

# Quick search interface
If you need to search our catalog (e.g. to align it with yours), we're providing you with a handy interface accessible here: <a href="https://api.globalwinescore.com/search/" target="_blank">https://api.globalwinescore.com/search/</a>

You need to be logged in (email/password) to access this page, but other than that you can share it with anyone in your team and start searching right away !

# Resources

The details about available endpoints can be found below.
You can click on each endpoint to find information about their parameters.

Base URLs:

* <a href="https://api.globalwinescore.com">https://api.globalwinescore.com</a>

# Authentication

* API Key (TokenAuthentication)
    - Parameter Name: **Authorization**, in: header. See Authentication section above

<h1 id="globalwinescore-api-documentation-globalwinescore">GlobalWineScore</h1>

## List all historical GWS

<a id="opIdlistHistoricalGWS"></a>

> Code samples

```bash
curl https://example.com/globalwinescores/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /globalwinescores/`

Returns all available GWS

<h3 id="list-all-historical-gws-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|wine_id|query|[integer]|false|The exact `id` of the wine. Can be used multiple times (e.g `?wine_id=114959&wine_id=114952`) <br/> If you need to find the `wine_id` for your wines, use our <a href="https://api.globalwinescore.com/search/" target="_blank">search page</a><br>|
|vintage|query|string|false|The vintage you want to search against.|
|color|query|string|false|The lowercase color of the wine.|
|is_primeurs|query|boolean|false|Only show the <a href="See https://en.wikipedia.org/wiki/En_primeur">en primeur</a> GlobalWineScores<br>|
|lwin|query|string|false|L-WIN wine identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)<br>|
|lwin_11|query|string|false|L-WIN wine/vintage identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)<br>|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|ordering|query|string|false|Which field to use when ordering the results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|color|red|
|color|white|
|color|pink|
|ordering|date|
|ordering|-date|
|ordering|score|
|ordering|-score|

> Example responses

> 200 Response

```json
"{\n  \"count\": 1,\n  \"next\": null,\n  \"previous\": null,\n  \"results\": [\n    {\n      \"wine\": \"Petrus, Pomerol\",\n      \"wine_id\": 114959,\n      \"wine_slug\": \"petrus-pomerol\",\n      \"appellation\": \"Pomerol\",\n      \"appellation_slug\": \"pomerol\",\n      \"color\": \"Red\",\n      \"wine_type\": \"\",\n      \"regions\": [\n        \"Bordeaux\"\n      ],\n      \"country\": \"France\",\n      \"classification\": null,\n      \"vintage\": \"2000\",\n      \"date\": \"2016-05-12\",\n      \"is_primeurs\": false,\n      \"score\": 99.02,\n      \"confidence_index\": \"A+\",\n      \"journalist_count\": 6,\n      \"lwin\": 1014033,\n      \"lwin_11\": 10140332000\n    }\n  ]\n}\n"
```

<h3 id="list-all-historical-gws-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TokenAuthentication
</aside>

## List all latest GWS

> Code samples

```bash
curl https://example.com/globalwinescores/latest/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /globalwinescores/latest/`

Returns the latest GWS available per wine/vintage.

<h3 id="list-all-latest-gws-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|none|
|wine_id|query|[integer]|false|The exact `id` of the wine. Can be used multiple times (e.g `?wine_id=114959&wine_id=114952`) <br/> If you need to find the `wine_id` for your wines, use our <a href="https://api.globalwinescore.com/search/" target="_blank">search page</a><br>|
|vintage|query|string|false|The vintage you want to search against.|
|color|query|string|false|The lowercase color of the wine.|
|is_primeurs|query|boolean|false|Only show the <a href="See https://en.wikipedia.org/wiki/En_primeur">en primeur</a> GlobalWineScores<br>|
|lwin|query|string|false|L-WIN wine identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)<br>|
|lwin_11|query|string|false|L-WIN wine/vintage identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)<br>|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|
|ordering|query|string|false|Which field to use when ordering the results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|color|red|
|color|white|
|color|pink|
|ordering|date|
|ordering|-date|
|ordering|score|
|ordering|-score|

> Example responses

> 200 Response

```json
"{\n  \"count\": 1,\n  \"next\": null,\n  \"previous\": null,\n  \"results\": [\n    {\n      \"wine\": \"Petrus, Pomerol\",\n      \"wine_id\": 114959,\n      \"wine_slug\": \"petrus-pomerol\",\n      \"appellation\": \"Pomerol\",\n      \"appellation_slug\": \"pomerol\",\n      \"color\": \"Red\",\n      \"wine_type\": \"\",\n      \"regions\": [\n        \"Bordeaux\"\n      ],\n      \"country\": \"France\",\n      \"classification\": null,\n      \"vintage\": \"2000\",\n      \"date\": \"2016-05-12\",\n      \"is_primeurs\": false,\n      \"score\": 99.02,\n      \"confidence_index\": \"A+\",\n      \"journalist_count\": 6,\n      \"lwin\": 1014033,\n      \"lwin_11\": 10140332000\n    }\n  ]\n}\n"
```

<h3 id="list-all-latest-gws-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TokenAuthentication
</aside>
