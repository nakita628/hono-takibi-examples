<h1 id="top-stories">Top Stories v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Top Stories API provides lists of articles and associated images by section.

Base URLs:

* <a href="http://api.nytimes.com/svc/topstories/v2">http://api.nytimes.com/svc/topstories/v2</a>

* <a href="https://api.nytimes.com/svc/topstories/v2">https://api.nytimes.com/svc/topstories/v2</a>

<a href="http://developer.nytimes.com/tou">Terms of service</a>

<a href="http://developer.nytimes.com/">External documentation</a>

# Authentication

* API Key (apikey)
    - Parameter Name: **api-key**, in: query.

<h1 id="top-stories-stories">Stories</h1>

## Top Stories

> Code samples

```bash
curl "https://api.nytimes.com/svc/home.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /{section}.{format}`

The Top Stories API returns a list of articles and associated images currently on the specified section.  Support JSON and JSONP.


<h3 id="top-stories-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|section|path|string|true|The section the story appears in.|
|format|path|string|true|if this is JSONP or JSON|
|callback|query|string|false|The name of the function the API call results will be passed to. Required when using JSONP. This parameter has only one valid value per section. The format is {section_name}TopStoriesCallback.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|section|home|
|section|opinion|
|section|world|
|section|national|
|section|politics|
|section|upshot|
|section|nyregion|
|section|business|
|section|technology|
|section|science|
|section|health|
|section|sports|
|section|arts|
|section|books|
|section|movies|
|section|theater|
|section|sundayreview|
|section|fashion|
|section|tmagazine|
|section|food|
|section|travel|
|section|magazine|
|section|realestate|
|section|automobiles|
|section|obituaries|
|section|insider|
|format|json|
|format|jsonp|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "abstract": "string",
      "byline": "string",
      "created_date": "string",
      "des_facet": [
        "string"
      ],
      "geo_facet": [
        "string"
      ],
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
      "org_facet": [
        "string"
      ],
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
      "subsection": "string",
      "thumbnail_standard": "string",
      "title": "string",
      "updated_date": "string",
      "url": "string"
    }
  ]
}
```

<h3 id="top-stories-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of articles|Inline|

<h3 id="top-stories-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Article](#schemaarticle)]|false|none|none|

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
  "byline": "string",
  "created_date": "string",
  "des_facet": [
    "string"
  ],
  "geo_facet": [
    "string"
  ],
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
  "org_facet": [
    "string"
  ],
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
|byline|string|false|none|none|
|created_date|string|false|none|none|
|des_facet|[string]|false|none|none|
|geo_facet|[string]|false|none|none|
|item_type|string|false|none|none|
|kicker|string|false|none|none|
|material_type_facet|string|false|none|none|
|multimedia|[object]|false|none|none|
|org_facet|[string]|false|none|none|
|per_facet|[string]|false|none|none|
|published_date|string|false|none|none|
|related_urls|[object]|false|none|none|
|section|string|false|none|none|
|short_url|string|false|none|none|
|subsection|string|false|none|none|
|thumbnail_standard|string|false|none|none|
|title|string|false|none|none|
|updated_date|string|false|none|none|
|url|string|false|none|none|
