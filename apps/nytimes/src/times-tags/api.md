<h1 id="timestags-api">TimesTags API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

With the TimesTags API, you can mine the riches of the New York Times tag set. The TimesTags service matches your query to the controlled vocabularies that fuel NYTimes.com metadata. You supply a string of characters, and the service returns a ranked list of suggested terms.

Base URLs:

* <a href="http://api.nytimes.com/svc/suggest/v1">http://api.nytimes.com/svc/suggest/v1</a>

* <a href="https://api.nytimes.com/svc/suggest/v1">https://api.nytimes.com/svc/suggest/v1</a>

<a href="http://developer.nytimes.com/tou">Terms of service</a>

<a href="http://developer.nytimes.com/">External documentation</a>

# Authentication

* API Key (apikey)
    - Parameter Name: **api-key**, in: query.

<h1 id="timestags-api-default">Default</h1>

## get/timestags

> Code samples

```bash
curl "https://api.nytimes.com/svc/timestags?query=string&api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /timestags`

<h3 id="gettimestags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Your search query|
|filter|query|string|false|If you do not specify a value for filter (see the Optional Parameters), your query will be matched to tags in all four Times dictionaries: subject, geographic location, organization and person. To use more than one, separate with commas.<br>|
|max|query|integer|false|Sets the maximum number of results|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|Des|
|filter|Geo|
|filter|Org|
|filter|Per|

> Example responses

> 200 Response

```json
[
  [
    "string"
  ]
]
```

<h3 id="gettimestags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of tags|Inline|

<h3 id="gettimestags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[string]]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>
