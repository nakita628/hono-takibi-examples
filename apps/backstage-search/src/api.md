<h1 id="search">search v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Backstage backend plugin that provides search functionality.

Base URLs:

* <a href="https://raw.githubusercontent.com/">https://raw.githubusercontent.com/</a>

License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache-2.0</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="search-search">Search</h1>

## Query

<a id="opIdQuery"></a>

> Code samples

```bash
curl http://localhost:7007/api/search/query \
  -H 'Accept: application/json'
```

`GET /query`

Query documents with a given filter.

<h3 id="query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|term|query|string|false|none|
|filters|query|[JsonObject](#schemajsonobject)|false|none|
|types|query|[string]|false|none|
|pageCursor|query|string|false|none|
|pageLimit|query|integer|false|none|
|unknown|query|object|false|none|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "type": "string",
      "document": {
        "title": "string",
        "text": "string",
        "location": "string"
      },
      "highlight": {},
      "rank": 0
    }
  ],
  "nextPageCursor": "string",
  "previousPageCursor": "string",
  "numberOfResults": 0
}
```

> default Response

```json
{
  "error": {
    "name": "string",
    "message": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  }
}
```

<h3 id="query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ok|Inline|
|default|Default|An error response from the backend.|[Error](#schemaerror)|

<h3 id="query-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[object]|true|none|none|
|» type|string|true|none|The "type" of the given document.|
|» document|object|true|none|The raw value of the document, as indexed.|
|» » title|string|false|none|The primary name of the document (e.g. name, title, identifier, etc).|
|» » text|string|false|none|Free-form text of the document (e.g. description, content, etc).|
|» » location|string|false|none|The relative or absolute URL of the document (target when a search result is clicked).|
|» highlight|object|false|none|Optional result highlight. Useful for improving the search result<br>display/experience.|
|» rank|integer|false|none|Optional result rank, where 1 is the first/top result returned. <br>Useful for understanding search effectiveness in analytics.|
|nextPageCursor|string|false|none|none|
|previousPageCursor|string|false|none|none|
|numberOfResults|integer|false|none|none|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
JWT
</aside>

# Schemas

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error": {
    "name": "string",
    "message": "string"
  },
  "request": {
    "method": "string",
    "url": "string"
  },
  "response": {
    "statusCode": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|true|none|none|
|request|object|true|none|none|
|response|object|true|none|none|

<h2 id="tocS_JsonObject">JsonObject</h2>
<!-- backwards compatibility -->
<a id="schemajsonobject"></a>
<a id="schema_JsonObject"></a>
<a id="tocSjsonobject"></a>
<a id="tocsjsonobject"></a>

```json
{
  "property1": null,
  "property2": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|
