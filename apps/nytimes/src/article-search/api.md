<h1 id="article-search-api">Article Search API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

With the Article Search API, you can search New York Times articles from Sept. 18, 1851 to today, retrieving headlines, abstracts, lead paragraphs, links to associated multimedia and other article metadata.  

 Note: In URI examples and field names, italics indicate placeholders for variables or values. Brackets [ ] indicate optional items. Parentheses ( ) are not a convention — when URIs include parentheses, interpret them literally.

Base URLs:

* <a href="http://api.nytimes.com/svc/search/v2">http://api.nytimes.com/svc/search/v2</a>

* <a href="https://api.nytimes.com/svc/search/v2">https://api.nytimes.com/svc/search/v2</a>

<a href="http://developer.nytimes.com/tou">Terms of service</a>

<a href="http://developer.nytimes.com/">External documentation</a>

# Authentication

* API Key (apikey)
    - Parameter Name: **api-key**, in: query.

<h1 id="article-search-api-stories">Stories</h1>

## Article Search

> Code samples

```bash
curl "https://api.nytimes.com/svc/articlesearch.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /articlesearch.json`

Article Search requests use the following URI structure:


<h3 id="article-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|Search query term. Search is performed on the article body, headline and byline.<br>|
|fq|query|string|false|"Filtered search query using standard Lucene syntax. <br><br>The filter query can be specified with or without a limiting field: label. <br><br>See Filtering Your Search for more information about filtering."<br>|
|begin_date|query|string|false|"Format: YYYYMMDD <br><br>Restricts responses to results with publication dates of the date specified or later."<br>|
|end_date|query|string|false|"Format: YYYYMMDD <br><br>Restricts responses to results with publication dates of the date specified or earlier."<br>|
|sort|query|string|false|"By default, search results are sorted by their relevance to the query term (q). Use the sort parameter to sort by pub_date."<br>|
|fl|query|string|false|"Comma-delimited list of fields (no limit)<br><br>  Limits the fields returned in your search results. By default (unless you include an fl list in your request), the following fields are returned: <br>  <br>  web_url<br>  <br>  snippet<br>  <br>  lead_paragraph<br>  <br>  abstract<br>  <br>  print_page<br>  <br>  blog<br>  <br>  source<br>  <br>  multimedia<br>  <br>  headline<br>  <br>  keywords<br>  <br>  pub_date<br>  <br>  document_type<br>  <br>  news_desk<br>  <br>  byline<br>  <br>  type_of_material<br>  <br>  _id<br>  <br>  word_count"<br>|
|hl|query|boolean|false|Enables highlighting in search results. When set to true, the query term (q) is highlighted in the headline and lead_paragraph fields.<br><br>Note: If highlighting is enabled, snippet will be returned even if it is not specified in your fl list."<br>|
|page|query|integer|false|"The value of page corresponds to a set of 10 results (it does not indicate the starting number of the result set). For example, page=0 corresponds to records 0-9. To return records 10-19, set page to 1, not 10."<br>|
|facet_field|query|string|false|Comma-delimited list of facets<br><br>Specifies the sets of facet values to include in the facets array at the end of response, which collects the facet values from all the search results. By default no facet fields will be returned. Below is the list of valid facets:<br><br>section_name<br><br>document_type<br><br>type_of_material<br><br>source<br><br>day_of_week<br><br>To learn more about using facets, see Using Facets.<br>|
|facet_filter|query|boolean|false|When set to true, facet counts will respect any applied filters (fq, date range, etc.) in addition to the main query term. To filter facet counts, specifying at least one facet_field is required. To learn more about using facets, see Using Facets.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|

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

<h3 id="article-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The docs requested by the article search.|Inline|

<h3 id="article-search-responseschema">Response Schema</h3>

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
