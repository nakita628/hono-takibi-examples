<h1 id="archive-api">Archive API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Archive API provides lists of NYT articles by month going back to 1851.  You can use it to build your own local database of NYT article metadata.

Base URLs:

* <a href="http://api.nytimes.com/svc/archive/v1">http://api.nytimes.com/svc/archive/v1</a>

* <a href="https://api.nytimes.com/svc/archive/v1">https://api.nytimes.com/svc/archive/v1</a>

<a href="http://developer.nytimes.com/tou">Terms of service</a>

<a href="http://developer.nytimes.com/">External documentation</a>

# Authentication

* API Key (apikey)
    - Parameter Name: **api-key**, in: query.

<h1 id="archive-api-archive">Archive</h1>

## Archive API

> Code samples

```bash
curl "https://api.nytimes.com/svc/2016/1.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /{year}/{month}.json`

The Archive API provides lists of NYT articles by month going back to 1851.  Simply pass in the year and month you want and it returns a JSON object with all articles for that month.


<h3 id="archive-api-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year|path|integer(int32)|true|The year (e.g. 2016).|
|month|path|integer(int32)|true|The month number (e.g. 1 for January).|

> Example responses

> 200 Response

```json
{
  "response": {
    "docs": [
      {
        "_id": "string",
        "abstract": "string",
        "blog": [
          null
        ],
        "byline": {
          "organization": "string",
          "original": "string",
          "person": [
            null
          ]
        },
        "document_type": "string",
        "headline": {
          "kicker": "string",
          "main": "string"
        },
        "keywords": {
          "name": "string",
          "rank": "string",
          "value": "string"
        },
        "lead_paragraph": "string",
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
        "news_desk": "string",
        "print_page": "string",
        "pub_date": "string",
        "section_name": "string",
        "slideshow_credits": "string",
        "snippet": "string",
        "source": "string",
        "subsection_name": "string",
        "type_of_material": "string",
        "web_url": "string",
        "word_count": "string"
      }
    ],
    "meta": {
      "hits": 0,
      "offset": 0,
      "time": 0
    }
  }
}
```

<h3 id="archive-api-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The docs requested.|Inline|

<h3 id="archive-api-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|object|false|none|none|
|» docs|[[Doc](#schemadoc)]|false|none|none|
|» meta|object|false|none|none|
|» » hits|integer|false|none|none|
|» » offset|integer|false|none|none|
|» » time|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

# Schemas

<h2 id="tocS_Doc">Doc</h2>
<!-- backwards compatibility -->
<a id="schemadoc"></a>
<a id="schema_Doc"></a>
<a id="tocSdoc"></a>
<a id="tocsdoc"></a>

```json
{
  "_id": "string",
  "abstract": "string",
  "blog": [
    null
  ],
  "byline": {
    "organization": "string",
    "original": "string",
    "person": [
      null
    ]
  },
  "document_type": "string",
  "headline": {
    "kicker": "string",
    "main": "string"
  },
  "keywords": {
    "name": "string",
    "rank": "string",
    "value": "string"
  },
  "lead_paragraph": "string",
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
  "news_desk": "string",
  "print_page": "string",
  "pub_date": "string",
  "section_name": "string",
  "slideshow_credits": "string",
  "snippet": "string",
  "source": "string",
  "subsection_name": "string",
  "type_of_material": "string",
  "web_url": "string",
  "word_count": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|abstract|string|false|none|none|
|blog|[object]|false|none|none|
|byline|object|false|none|none|
|document_type|string|false|none|none|
|headline|object|false|none|none|
|keywords|object|false|none|none|
|lead_paragraph|string|false|none|none|
|multimedia|[object]|false|none|none|
|news_desk|string|false|none|none|
|print_page|string|false|none|none|
|pub_date|string|false|none|none|
|section_name|string|false|none|none|
|slideshow_credits|string|false|none|none|
|snippet|string|false|none|none|
|source|string|false|none|none|
|subsection_name|string|false|none|none|
|type_of_material|string|false|none|none|
|web_url|string|false|none|none|
|word_count|string|false|none|none|
