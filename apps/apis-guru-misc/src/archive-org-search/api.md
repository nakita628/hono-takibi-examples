<h1 id="search-services">Search Services v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for Internet Archive's Search-related services

Base URLs:

* <a href="https://api.archive.org">https://api.archive.org</a>

<h1 id="search-services-default">Default</h1>

## get/search/v1/fields

> Code samples

```bash
curl https://example.com/search/v1/fields \
  -H 'Accept: application/json'
```

`GET /search/v1/fields`

Fields that can be requested

<h3 id="getsearchv1fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|callback|query|string|false|Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getsearchv1fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Fields that can be requested|Inline|

<h3 id="getsearchv1fields-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Field](#schemafield)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## get/search/v1/organic

> Code samples

```bash
curl https://example.com/search/v1/organic \
  -H 'Accept: application/json'
```

`GET /search/v1/organic`

Return relevance-based results from search queries


<h3 id="getsearchv1organic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|Lucene-type search query|
|field|query|string|false|Metadata field|
|size|query|integer|false|Number of query results to return|
|total_only|query|boolean|false|Request total only; do not return hits|
|callback|query|string|false|Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "items": [
    {}
  ],
  "total": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="getsearchv1organic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Organic Search API. Returns results in descending relevance order|[OrganicResult](#schemaorganicresult)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/search/v1/scrape

> Code samples

```bash
curl https://example.com/search/v1/scrape \
  -H 'Accept: application/json'
```

`GET /search/v1/scrape`

Scrape search results from Internet Archive, allowing a scrolling cursor


<h3 id="getsearchv1scrape-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|Lucene-type search query|
|field|query|string|false|Metadata field|
|sort|query|string|false|sort collations|
|size|query|integer|false|Number of query results to return|
|cursor|query|string|false|Cursor for scrolling (used for subsequent calls)|
|total_only|query|boolean|false|Request total only; do not return hits|
|callback|query|string|false|Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "cursor": "string",
  "items": [
    {}
  ],
  "previous": "string",
  "total": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="getsearchv1scrape-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scaping API|[ScrapeResult](#schemascraperesult)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Cursor">Cursor</h2>
<!-- backwards compatibility -->
<a id="schemacursor"></a>
<a id="schema_Cursor"></a>
<a id="tocScursor"></a>
<a id="tocscursor"></a>

```json
"string"
```

A scroll handle

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_Field">Field</h2>
<!-- backwards compatibility -->
<a id="schemafield"></a>
<a id="schema_Field"></a>
<a id="tocSfield"></a>
<a id="tocsfield"></a>

```json
"string"
```

The name of a field

<h2 id="tocS_Hit">Hit</h2>
<!-- backwards compatibility -->
<a id="schemahit"></a>
<a id="schema_Hit"></a>
<a id="tocShit"></a>
<a id="tocshit"></a>

```json
{}
```

One item returned (object of fields and values)

<h2 id="tocS_OrganicResult">OrganicResult</h2>
<!-- backwards compatibility -->
<a id="schemaorganicresult"></a>
<a id="schema_OrganicResult"></a>
<a id="tocSorganicresult"></a>
<a id="tocsorganicresult"></a>

```json
{
  "count": 0,
  "items": [
    {}
  ],
  "total": 0
}
```

The result of a organic search request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|Number of results returned|
|items|[[Hit](#schemahit)]|false|none|none|
|total|integer|false|none|Approximate number of results meeting query|

<h2 id="tocS_ScrapeResult">ScrapeResult</h2>
<!-- backwards compatibility -->
<a id="schemascraperesult"></a>
<a id="schema_ScrapeResult"></a>
<a id="tocSscraperesult"></a>
<a id="tocsscraperesult"></a>

```json
{
  "count": 0,
  "cursor": "string",
  "items": [
    {}
  ],
  "previous": "string",
  "total": 0
}
```

The result of a scrape request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|Number of results returned|
|cursor|[Cursor](#schemacursor)|false|none|A scroll handle|
|items|[[Hit](#schemahit)]|false|none|none|
|previous|[Cursor](#schemacursor)|false|none|A scroll handle|
|total|integer|false|none|Total number of results from this cursor point|
