<h1 id="times-newswire-api">Times Newswire API v3.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

With the Times Newswire API, you can get links and metadata for Times articles and blog posts as soon as they are published on NYTimes.com. The Times Newswire API provides an up-to-the-minute stream of published items.

Base URLs:

* <a href="http://api.nytimes.com/svc/news/v3">http://api.nytimes.com/svc/news/v3</a>

* <a href="https://api.nytimes.com/svc/news/v3">https://api.nytimes.com/svc/news/v3</a>

<a href="http://developer.nytimes.com/tou">Terms of service</a>

<a href="http://developer.nytimes.com/">External documentation</a>

# Authentication

* API Key (apikey)
    - Parameter Name: **api-key**, in: query.

<h1 id="times-newswire-api-default">Default</h1>

## get/content.json

> Code samples

```bash
curl "https://api.nytimes.com/svc/content.json?url=string&api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /content.json`

<h3 id="getcontentjson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|The complete URL of a specific news item, URL-encoded or backslash-escaped|

> Example responses

> 200 Response

```json
{
  "copyright": "string",
  "num_results": 0,
  "results": [
    {
      "abstract": "string",
      "blog_name": "string",
      "byline": "string",
      "created_date": "string",
      "des_facet": [
        "string"
      ],
      "geo_facet": [
        "string"
      ],
      "headline": "string",
      "item_type": "string",
      "kicker": "string",
      "material_type_facet": "string",
      "multimedia": [
        {
          "caption": "string",
          "copyright": "string",
          "format": "string",
          "height": 0,
          "subtype": "string",
          "type": "string",
          "url": "string",
          "width": 0
        }
      ],
      "org_facet": "string",
      "per_facet": [
        "string"
      ],
      "published_date": "string",
      "related_urls": [
        {
          "suggested_link_text": "string",
          "url": "string"
        }
      ],
      "section": "string",
      "short_url": "string",
      "source": "string",
      "subsection": "string",
      "thumbnail_standard": "string",
      "title": "string",
      "updated_date": "string",
      "url": "string"
    }
  ],
  "status": "string"
}
```

<h3 id="getcontentjson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of Articles|Inline|

<h3 id="getcontentjson-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|num_results|integer|false|none|none|
|results|[[Article](#schemaarticle)]|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## get/content/{source}/{section}.json

> Code samples

```bash
curl "https://api.nytimes.com/svc/content/all/string.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /content/{source}/{section}.json`

<h3 id="getcontentsourcesectionjson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|path|string|true|Limits the set of items by originating source<br><br>all = items from both The New York Times and The International New York Times<br>nyt = New York Times items only<br>iht = International New York Times items only<br>|
|section|path|string|true|Limits the set of items by one or more sections<br>all \| One or more section names, separated by semicolons<br><br> To get all sections, specify all. To get a particular section or sections, use the section names returned by this request:<br> http://api.nytimes.com/svc/news/v3/content/section-list.json<br>|
|limit|query|integer|false|Limits the number of results, between 1 and 20|
|offset|query|integer|false|Sets the starting point of the result set|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source|all|
|source|nyt|
|source|iht|

> Example responses

> 200 Response

```json
{
  "copyright": "string",
  "num_results": 0,
  "results": [
    {
      "abstract": "string",
      "blog_name": "string",
      "byline": "string",
      "created_date": "string",
      "des_facet": [
        "string"
      ],
      "geo_facet": [
        "string"
      ],
      "headline": "string",
      "item_type": "string",
      "kicker": "string",
      "material_type_facet": "string",
      "multimedia": [
        {
          "caption": "string",
          "copyright": "string",
          "format": "string",
          "height": 0,
          "subtype": "string",
          "type": "string",
          "url": "string",
          "width": 0
        }
      ],
      "org_facet": "string",
      "per_facet": [
        "string"
      ],
      "published_date": "string",
      "related_urls": [
        {
          "suggested_link_text": "string",
          "url": "string"
        }
      ],
      "section": "string",
      "short_url": "string",
      "source": "string",
      "subsection": "string",
      "thumbnail_standard": "string",
      "title": "string",
      "updated_date": "string",
      "url": "string"
    }
  ],
  "status": "string"
}
```

<h3 id="getcontentsourcesectionjson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of Articles|Inline|

<h3 id="getcontentsourcesectionjson-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|num_results|integer|false|none|none|
|results|[[Article](#schemaarticle)]|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## get/content/{source}/{section}/{time-period}.json

> Code samples

```bash
curl "https://api.nytimes.com/svc/content/all/string/0.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /content/{source}/{section}/{time-period}.json`

<h3 id="getcontentsourcesectiontime-periodjson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|path|string|true|Limits the set of items by originating source<br><br>all = items from both The New York Times and The International New York Times<br>nyt = New York Times items only<br>iht = International New York Times items only<br>|
|section|path|string|true|Limits the set of items by one or more sections<br>all \| One or more section names, separated by semicolons<br><br> To get all sections, specify all. To get a particular section or sections, use the section names returned by this request:<br> http://api.nytimes.com/svc/news/v3/content/section-list.json<br>|
|time-period|path|integer|true|Limits the set of items by time published, integer in number of hours|
|limit|query|integer|false|Limits the number of results, between 1 and 20|
|offset|query|integer|false|Sets the starting point of the result set|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source|all|
|source|nyt|
|source|iht|

> Example responses

> 200 Response

```json
{
  "copyright": "string",
  "num_results": 0,
  "results": [
    {
      "abstract": "string",
      "blog_name": "string",
      "byline": "string",
      "created_date": "string",
      "des_facet": [
        "string"
      ],
      "geo_facet": [
        "string"
      ],
      "headline": "string",
      "item_type": "string",
      "kicker": "string",
      "material_type_facet": "string",
      "multimedia": [
        {
          "caption": "string",
          "copyright": "string",
          "format": "string",
          "height": 0,
          "subtype": "string",
          "type": "string",
          "url": "string",
          "width": 0
        }
      ],
      "org_facet": "string",
      "per_facet": [
        "string"
      ],
      "published_date": "string",
      "related_urls": [
        {
          "suggested_link_text": "string",
          "url": "string"
        }
      ],
      "section": "string",
      "short_url": "string",
      "source": "string",
      "subsection": "string",
      "thumbnail_standard": "string",
      "title": "string",
      "updated_date": "string",
      "url": "string"
    }
  ],
  "status": "string"
}
```

<h3 id="getcontentsourcesectiontime-periodjson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of Articles|Inline|

<h3 id="getcontentsourcesectiontime-periodjson-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|num_results|integer|false|none|none|
|results|[[Article](#schemaarticle)]|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

# Schemas

<h2 id="tocS_Article">Article</h2>
<!-- backwards compatibility -->
<a id="schemaarticle"></a>
<a id="schema_Article"></a>
<a id="tocSarticle"></a>
<a id="tocsarticle"></a>

```json
{
  "abstract": "string",
  "blog_name": "string",
  "byline": "string",
  "created_date": "string",
  "des_facet": [
    "string"
  ],
  "geo_facet": [
    "string"
  ],
  "headline": "string",
  "item_type": "string",
  "kicker": "string",
  "material_type_facet": "string",
  "multimedia": [
    {
      "caption": "string",
      "copyright": "string",
      "format": "string",
      "height": 0,
      "subtype": "string",
      "type": "string",
      "url": "string",
      "width": 0
    }
  ],
  "org_facet": "string",
  "per_facet": [
    "string"
  ],
  "published_date": "string",
  "related_urls": [
    {
      "suggested_link_text": "string",
      "url": "string"
    }
  ],
  "section": "string",
  "short_url": "string",
  "source": "string",
  "subsection": "string",
  "thumbnail_standard": "string",
  "title": "string",
  "updated_date": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abstract|string|false|none|none|
|blog_name|string|false|none|none|
|byline|string|false|none|none|
|created_date|string|false|none|none|
|des_facet|[string]|false|none|none|
|geo_facet|[string]|false|none|none|
|headline|string|false|none|none|
|item_type|string|false|none|none|
|kicker|string|false|none|none|
|material_type_facet|string|false|none|none|
|multimedia|[object]|false|none|none|
|org_facet|string|false|none|none|
|per_facet|[string]|false|none|none|
|published_date|string|false|none|none|
|related_urls|[object]|false|none|none|
|section|string|false|none|none|
|short_url|string|false|none|none|
|source|string|false|none|none|
|subsection|string|false|none|none|
|thumbnail_standard|string|false|none|none|
|title|string|false|none|none|
|updated_date|string|false|none|none|
|url|string|false|none|none|
