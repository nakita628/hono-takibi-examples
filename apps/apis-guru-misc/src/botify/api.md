<h1 id="botify-api">Botify API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Botify Saas API

Base URLs:

* <a href="https://api.botify.com/v1">https://api.botify.com/v1</a>

<a href="https://developers.botify.com/">External documentation</a>

# Authentication

* API Key (DjangoRestToken)
    - Parameter Name: **Authorization**, in: header.

<h1 id="botify-api-project">Project</h1>

## List all analyses for a project

<a id="opIdgetProjectAnalyses"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}`

List all analyses for a project

<h3 id="list-all-analyses-for-a-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page Number|
|size|query|integer|false|Page Size|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "string",
  "page": 0,
  "previous": "string",
  "results": [
    {
      "config": "string",
      "date_created": "1970-01-01T00:00:00Z",
      "date_finished": "1970-01-01T00:00:00Z",
      "date_last_modified": "1970-01-01T00:00:00Z",
      "date_launched": "1970-01-01T00:00:00Z",
      "features": "string",
      "id": 0,
      "name": "string",
      "slug": "string",
      "status": "string",
      "url": "string",
      "urls_done": "string",
      "urls_in_queue": "string",
      "user": {
        "company_name": "string",
        "date_joined": "1970-01-01T00:00:00Z",
        "email": "string",
        "first_name": "string",
        "is_organization": "string",
        "last_name": "string",
        "login": "string",
        "status": "string",
        "url": "string"
      }
    }
  ],
  "size": 0
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="list-all-analyses-for-a-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<h3 id="list-all-analyses-for-a-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|read-only|none|
|next|string|false|read-only|none|
|page|integer|false|read-only|none|
|previous|string|false|read-only|none|
|results|[[Analysis](#schemaanalysis)]|false|read-only|none|
|size|integer|false|read-only|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Match and replace parts of a URL based on rules passed in POST data

<a id="opIdtestUrlRewritingRules"></a>

> Code samples

```bash
curl https://example.com/projects/string/string/features/url_rewriting/rules_validator \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /projects/{username}/{project_slug}/features/url_rewriting/rules_validator`

Match and replace parts of a URL based on rules passed in POST data.

<h3 id="match-and-replace-parts-of-a-url-based-on-rules-passed-in-post-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|

> Example responses

> 201 Response

```json
{
  "rules": [
    {
      "ignore_case": true,
      "regex": "string",
      "replace": "string"
    }
  ],
  "urls": [
    "string"
  ]
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="match-and-replace-parts-of-a-url-based-on-rules-passed-in-post-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|[URLRewritingRulesSerializer](#schemaurlrewritingrulesserializer)|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## List all the project's saved filters (each filter's name, ID and filter value)

<a id="opIdgetSavedFilters"></a>

> Code samples

```bash
curl https://example.com/projects/string/string/filters \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects/{username}/{project_slug}/filters`

List all the project's saved filters (each filter's name, ID and filter value)

<h3 id="list-all-the-projects-saved-filters-each-filters-name-id-and-filter-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page Number|
|size|query|integer|false|Page Size|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "string",
  "page": 0,
  "previous": "string",
  "results": [
    {
      "filters": {},
      "identifier": "string",
      "name": "string"
    }
  ],
  "size": 0
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="list-all-the-projects-saved-filters-each-filters-name-id-and-filter-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<h3 id="list-all-the-projects-saved-filters-each-filters-name-id-and-filter-value-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|read-only|none|
|next|string|false|read-only|none|
|page|integer|false|read-only|none|
|previous|string|false|read-only|none|
|results|[[ProjectSavedFilter](#schemaprojectsavedfilter)]|false|read-only|none|
|size|integer|false|read-only|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Retrieves a specific saved filter's name, ID and filter value

<a id="opIdgetSavedFilter"></a>

> Code samples

```bash
curl https://example.com/projects/string/string/filters/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects/{username}/{project_slug}/filters/{identifier}`

Retrieves a specific saved filter's name, ID and filter value

<h3 id="retrieves-a-specific-saved-filters-name-id-and-filter-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|identifier|path|string|true|Saved Filter's identifier|

> Example responses

> 200 Response

```json
{
  "filters": {},
  "identifier": "string",
  "name": "string"
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="retrieves-a-specific-saved-filters-name-id-and-filter-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ProjectSavedFilter](#schemaprojectsavedfilter)|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Project Query aggregator

<a id="opIdgetProjectUrlsAggs"></a>

> Code samples

```bash
curl https://example.com/projects/string/string/urls/aggs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '[
    {
      "aggs": [
        {}
      ],
      "filters": {}
    }
  ]'
```

`POST /projects/{username}/{project_slug}/urls/aggs`

Project Query aggregator. It accepts multiple queries that will be executed on all completed analyses in the project

> Body parameter

```json
[
  {
    "aggs": [
      {}
    ],
    "filters": {}
  }
]
```

<h3 id="project-query-aggregator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area|query|string|false|Analysis context to execute the queries|
|last_analysis_slug|query|string|false|Last analysis on the trend|
|nb_analyses|query|integer(int32)|false|Max number of analysis to return|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|body|body|[UrlsAggsQueries](#schemaurlsaggsqueries)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|area|current|
|area|disappeared|
|area|new|

> Example responses

> 201 Response

```json
{}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="project-query-aggregator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|[Default](#schemadefault)|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

<h1 id="botify-api-analysis">Analysis</h1>

## Get an Analysis detail

<a id="opIdgetAnalysisSummary"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}`

Get an Analysis detail

<h3 id="get-an-analysis-detail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|

> Example responses

> 200 Response

```json
{
  "config": "string",
  "date_finished": "1970-01-01T00:00:00Z",
  "date_last_modified": "1970-01-01T00:00:00Z",
  "date_launched": "1970-01-01T00:00:00Z",
  "failures": "string",
  "features": "string",
  "id": 0,
  "name": "string",
  "red_button_domain": "string",
  "slug": "string",
  "url": "string",
  "urls_done": "string",
  "urls_in_queue": "string",
  "user": {
    "company_name": "string",
    "date_joined": "1970-01-01T00:00:00Z",
    "email": "string",
    "first_name": "string",
    "is_organization": "string",
    "last_name": "string",
    "login": "string",
    "status": "string",
    "url": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="get-an-analysis-detail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[AnalysisDetail](#schemaanalysisdetail)|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Return global statistics for an analysis

<a id="opIdgetCrawlStatistics"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/crawl_statistics \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics`

Return global statistics for an analysis

<h3 id="return-global-statistics-for-an-analysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|

> Example responses

> 200 Response

```json
{
  "depth_current": 0,
  "last_upd_dt": "1970-01-01T00:00:00Z",
  "pages_dones": 0,
  "pages_dones_2xx": 0,
  "pages_dones_3xx": 0,
  "pages_dones_4xx": 0,
  "pages_dones_5xx": 0,
  "pages_dones_networkerror": 0,
  "pages_dones_xxx": 0,
  "pages_known": 0
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="return-global-statistics-for-an-analysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CrawlStatistics](#schemacrawlstatistics)|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)

<a id="opIdgetCrawlStatisticsByFrequency"></a>

> Code samples

```bash
curl 'https://example.com/analyses/string/string/string/crawl_statistics/time?frequency=1mn' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/time`

Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min) for an analysis

<h3 id="return-crawl-statistics-grouped-by-time-frequency-1-min-5-mins-or-60-min-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|max number of elements to retrieve|
|frequency|query|string|true|Aggregation frequency|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|

#### Enumerated Values

|Parameter|Value|
|---|---|
|frequency|1mn|
|frequency|5mn|
|frequency|60mn|

> Example responses

> 200 Response

```json
{
  "avg_delay": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ],
  "avg_size": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ],
  "frequency": "string",
  "http_code_2xx": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ],
  "http_code_3xx": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ],
  "http_code_4xx": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ],
  "http_code_5xx": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ],
  "http_code_xxx": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ],
  "last_update_date": "1970-01-01T00:00:00Z",
  "new_urls": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="return-crawl-statistics-grouped-by-time-frequency-1-min-5-mins-or-60-min-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CrawlStatisticsTime](#schemacrawlstatisticstime)|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)

<a id="opIdgetCrawlStatisticsUrls"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/crawl_statistics/urls/crawled \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/urls/{list_type}`

Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)

<h3 id="return-a-list-of-1000-latest-urls-crawled-all-crawled-urls-or-only-urls-with-http-errors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|
|list_type|path|string|true|URLs list type (crawled URLs or error URLs)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|list_type|crawled|
|list_type|errors|

> Example responses

> 200 Response

```json
[
  null
]
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="return-a-list-of-1000-latest-urls-crawled-all-crawled-urls-or-only-urls-with-http-errors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<h3 id="return-a-list-of-1000-latest-urls-crawled-all-crawled-urls-or-only-urls-with-http-errors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## List of Orphan URLs

<a id="opIdgetGanalyticsOrphanURLs"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/features/ganalytics/orphan_urls/organic/all \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}/features/ganalytics/orphan_urls/{medium}/{source}`

List of Orphan URLs. URLs which generated visits from the selected source according to Google Analytics data, but were not crawled with by the Botify crawler (either because no links to them were found on the website, or because the crawler was not allowed to follow these links according to the project settings).   For a search engine (medium: origanic; sources: all, aol, ask, baidu, bing, google, naver, yahoo, yandex) or a social network (medium: social; sources: all, facebook, google+, linkedin, pinterest, reddit, tumblr, twitter)

<h3 id="list-of-orphan-urls-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page Number|
|size|query|integer|false|Page Size|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|
|medium|path|string|true|Type of traffic, value: 'organic' (from search engine)or 'social' (from a social network)|
|source|path|string|true|Traffic source, value: name of the search engine or social network|

#### Enumerated Values

|Parameter|Value|
|---|---|
|medium|organic|
|medium|social|
|source|all|
|source|aol|
|source|ask|
|source|baidu|
|source|bing|
|source|facebook|
|source|google|
|source|google+|
|source|linkedin|
|source|naver|
|source|pinterest|
|source|reddit|
|source|tumblr|
|source|twitter|
|source|yahoo|
|source|yandex|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "string",
  "page": 0,
  "previous": "string",
  "results": [
    {
      "url": "string",
      "visits": 0
    }
  ],
  "size": 0
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="list-of-orphan-urls-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<h3 id="list-of-orphan-urls-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|read-only|none|
|next|string|false|read-only|none|
|page|integer|false|read-only|none|
|previous|string|false|read-only|none|
|results|[[CrawlOrphanURLs](#schemacrawlorphanurls)]|false|read-only|none|
|size|integer|false|read-only|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Get inlinks percentiles

<a id="opIdgetLinksPercentiles"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/features/links/percentiles \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}/features/links/percentiles`

Get inlinks percentiles

<h3 id="get-inlinks-percentiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|

> Example responses

> 200 Response

```json
{
  "domain": "string",
  "percentiles": [
    {
      "avg": 0,
      "id": 0,
      "max": 0,
      "metric_total": 0,
      "min": 0,
      "url_total": 0
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="get-inlinks-percentiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[LinksPercentiles](#schemalinkspercentiles)|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Lost pagerank

<a id="opIdgetPageRankLost"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/features/pagerank/lost \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}/features/pagerank/lost`

Lost pagerank

<h3 id="lost-pagerank-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|

> Example responses

> 200 Response

```json
{
  "external": 0,
  "non_crawled": 0,
  "robots_txt": 0
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="lost-pagerank-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[PageRankLost](#schemapageranklost)|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc

<a id="opIdgetSitemapsReport"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/features/sitemaps/report \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/report`

Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc.)

<h3 id="get-global-information-of-the-sitemaps-found-sitemaps-indexes-invalid-sitemaps-urls-etc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "errors": [
    {
      "error": {
        "message": "string",
        "type": "string"
      },
      "file_type": "string",
      "invalid_urls": 0,
      "sitemap_indexes": [
        "string"
      ],
      "url": "string",
      "valid_urls": 0
    }
  ],
  "sitemap_indexes": [
    {
      "error": {
        "message": "string",
        "type": "string"
      },
      "file_type": "string",
      "invalid_urls": 0,
      "sitemap_indexes": [
        "string"
      ],
      "url": "string",
      "valid_urls": 0
    }
  ],
  "sitemap_only": {
    "in_configuration": 0,
    "out_of_configuration": 0
  },
  "sitemaps": [
    {
      "error": {
        "message": "string",
        "type": "string"
      },
      "file_type": "string",
      "invalid_urls": 0,
      "sitemap_indexes": [
        "string"
      ],
      "url": "string",
      "valid_urls": 0
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="get-global-information-of-the-sitemaps-found-sitemaps-indexes-invalid-sitemaps-urls-etc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[SitemapsReport](#schemasitemapsreport)|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Sample list of URLs which were found in your sitemaps but outside of the

<a id="opIdgetSitemapsSamplesOutOfConfig"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/features/sitemaps/samples/out_of_config \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/out_of_config`

Sample list of URLs which were found in your sitemaps but outside of the crawl perimeter defined for the project, for instance domain/subdomain or protocol (HTTP/HTTPS) not allowed in the crawl settings.

<h3 id="sample-list-of-urls-which-were-found-in-your-sitemaps-but-outside-of-the-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page Number|
|size|query|integer|false|Page Size|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "string",
  "page": 0,
  "previous": "string",
  "results": [
    "string"
  ],
  "size": 0
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="sample-list-of-urls-which-were-found-in-your-sitemaps-but-outside-of-the-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<h3 id="sample-list-of-urls-which-were-found-in-your-sitemaps-but-outside-of-the-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|read-only|none|
|next|string|false|read-only|none|
|page|integer|false|read-only|none|
|previous|string|false|read-only|none|
|results|[string]|false|read-only|none|
|size|integer|false|read-only|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Sample list of URLs which were found in your sitemaps, within the project

<a id="opIdgetSitemapsSamplesSitemapsOnly"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/features/sitemaps/samples/sitemap_only \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/sitemap_only`

Sample list of URLs which were found in your sitemaps, within the project allowed scope (allowed domains/subdomains/protocols), but not found by the Botify crawler.

<h3 id="sample-list-of-urls-which-were-found-in-your-sitemaps-within-the-project-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page Number|
|size|query|integer|false|Page Size|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "string",
  "page": 0,
  "previous": "string",
  "results": [
    "string"
  ],
  "size": 0
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="sample-list-of-urls-which-were-found-in-your-sitemaps-within-the-project-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<h3 id="sample-list-of-urls-which-were-found-in-your-sitemaps-within-the-project-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|read-only|none|
|next|string|false|read-only|none|
|page|integer|false|read-only|none|
|previous|string|false|read-only|none|
|results|[string]|false|read-only|none|
|size|integer|false|read-only|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Top domains

<a id="opIdgetLinksTopDomains"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/features/top_domains/domains \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/domains`

Top domains

<h3 id="top-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page Number|
|size|query|integer|false|Page Size|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "string",
  "page": 0,
  "previous": "string",
  "results": [
    {
      "domain": "string",
      "follow_links": 0,
      "follow_samples": [
        {
          "sources": [
            "string"
          ],
          "unique_links": 0,
          "url": "string"
        }
      ],
      "nofollow_links": 0,
      "nofollow_samples": [
        {
          "sources": [
            "string"
          ],
          "unique_links": 0,
          "url": "string"
        }
      ],
      "unique_follow_links": 0,
      "unique_nofollow_links": 0
    }
  ],
  "size": 0
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="top-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<h3 id="top-domains-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|read-only|none|
|next|string|false|read-only|none|
|page|integer|false|read-only|none|
|previous|string|false|read-only|none|
|results|[[LinksTopDomains](#schemalinkstopdomains)]|false|read-only|none|
|size|integer|false|read-only|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Top subddomains

<a id="opIdgetLinksTopSubdomains"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/features/top_domains/subdomains \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/subdomains`

Top subddomains

<h3 id="top-subddomains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page Number|
|size|query|integer|false|Page Size|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "string",
  "page": 0,
  "previous": "string",
  "results": [
    {
      "domain": "string",
      "follow_links": 0,
      "follow_samples": [
        {
          "sources": [
            "string"
          ],
          "unique_links": 0,
          "url": "string"
        }
      ],
      "nofollow_links": 0,
      "nofollow_samples": [
        {
          "sources": [
            "string"
          ],
          "unique_links": 0,
          "url": "string"
        }
      ],
      "unique_follow_links": 0,
      "unique_nofollow_links": 0
    }
  ],
  "size": 0
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="top-subddomains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<h3 id="top-subddomains-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|read-only|none|
|next|string|false|read-only|none|
|page|integer|false|read-only|none|
|previous|string|false|read-only|none|
|results|[[LinksTopDomains](#schemalinkstopdomains)]|false|read-only|none|
|size|integer|false|read-only|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Executes a query and returns a paginated response

<a id="opIdgetUrls"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/urls \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fields": [
      "string"
    ],
    "filters": {},
    "sort": [
      {}
    ]
  }'
```

`POST /analyses/{username}/{project_slug}/{analysis_slug}/urls`

Executes a query and returns a paginated response

> Body parameter

```json
{
  "fields": [
    "string"
  ],
  "filters": {},
  "sort": [
    {}
  ]
}
```

<h3 id="executes-a-query-and-returns-a-paginated-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area|query|string|false|Analysis context to execute the query|
|page|query|integer(int32)|false|Page Number|
|size|query|integer(int32)|false|Page Size|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|
|body|body|[UrlsQuery](#schemaurlsquery)|false|none|
|» fields|body|[string]|false|none|
|» filters|body|object|false|none|
|» sort|body|[object]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|area|current|
|area|disappeared|
|area|new|
|area|search_engines_orphans|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "string",
  "page": 0,
  "previous": "string",
  "results": [
    {}
  ],
  "size": 0
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="executes-a-query-and-returns-a-paginated-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<h3 id="executes-a-query-and-returns-a-paginated-response-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|read-only|none|
|next|string|false|read-only|none|
|page|integer|false|read-only|none|
|previous|string|false|read-only|none|
|results|[[UrlDetail](#schemaurldetail)]|false|read-only|none|
|size|integer|false|read-only|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Query aggregator

<a id="opIdgetUrlsAggs"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/urls/aggs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '[
    {
      "aggs": [
        {}
      ],
      "filters": {}
    }
  ]'
```

`POST /analyses/{username}/{project_slug}/{analysis_slug}/urls/aggs`

Query aggregator. It accepts multiple queries

> Body parameter

```json
[
  {
    "aggs": [
      {}
    ],
    "filters": {}
  }
]
```

<h3 id="query-aggregator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area|query|string|false|none|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|
|body|body|[UrlsAggsQueries](#schemaurlsaggsqueries)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|area|current|
|area|disappeared|
|area|new|
|area|search_engines_orphans|

> Example responses

> 200 Response

```json
[
  null
]
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="query-aggregator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<h3 id="query-aggregator-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Gets an Analysis datamodel

<a id="opIdgetUrlsDatamodel"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/urls/datamodel \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}/urls/datamodel`

Gets an Analysis datamodel

<h3 id="gets-an-analysis-datamodel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area|query|string|false|none|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|

#### Enumerated Values

|Parameter|Value|
|---|---|
|area|current|
|area|disappeared|
|area|new|
|area|search_engines_orphans|

> Example responses

> 200 Response

```json
{
  "fields": [
    {
      "group": "string",
      "id": "string",
      "multiple": true,
      "name": "string",
      "permissions": [
        "string"
      ],
      "subtype": "string",
      "type": "string"
    }
  ],
  "groups": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="gets-an-analysis-datamodel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CrawlDatamodel](#schemacrawldatamodel)|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## A list of the CSV Exports requests and their current status

<a id="opIdgetUrlsExports"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/urls/export \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}/urls/export`

A list of the CSV Exports requests and their current status

<h3 id="a-list-of-the-csv-exports-requests-and-their-current-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page Number|
|size|query|integer|false|Page Size|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "string",
  "page": 0,
  "previous": "string",
  "results": [
    {
      "area": "current",
      "date_created": "1970-01-01T00:00:00Z",
      "job_id": "string",
      "job_status": "string",
      "job_url": "string",
      "nb_results": 0,
      "query": {
        "fields": [
          "string"
        ],
        "filters": {},
        "sort": [
          {}
        ]
      },
      "results": "string"
    }
  ],
  "size": 0
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="a-list-of-the-csv-exports-requests-and-their-current-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<h3 id="a-list-of-the-csv-exports-requests-and-their-current-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|read-only|none|
|next|string|false|read-only|none|
|page|integer|false|read-only|none|
|previous|string|false|read-only|none|
|results|[[CsvExportStatus](#schemacsvexportstatus)]|false|read-only|none|
|size|integer|false|read-only|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Creates a new UrlExport object and starts a task that will export the results into a csv

<a id="opIdcreateUrlsExport"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/urls/export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "fields": [
      "string"
    ],
    "filters": {},
    "sort": [
      {}
    ]
  }'
```

`POST /analyses/{username}/{project_slug}/{analysis_slug}/urls/export`

Creates a new UrlExport object and starts a task that will export the results into a csv. Returns the model id that manages the task

> Body parameter

```json
{
  "fields": [
    "string"
  ],
  "filters": {},
  "sort": [
    {}
  ]
}
```

<h3 id="creates-a-new-urlexport-object-and-starts-a-task-that-will-export-the-results-into-a-csv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area|query|string|false|none|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|
|body|body|[UrlsQuery](#schemaurlsquery)|false|none|
|» fields|body|[string]|false|none|
|» filters|body|object|false|none|
|» sort|body|[object]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|area|current|
|area|disappeared|
|area|new|
|area|search_engines_orphans|

> Example responses

> 201 Response

```json
{
  "area": "current",
  "date_created": "1970-01-01T00:00:00Z",
  "job_id": "string",
  "job_status": "string",
  "job_url": "string",
  "nb_results": 0,
  "query": {
    "fields": [
      "string"
    ],
    "filters": {},
    "sort": [
      {}
    ]
  },
  "results": "string"
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="creates-a-new-urlexport-object-and-starts-a-task-that-will-export-the-results-into-a-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|[CsvExportStatus](#schemacsvexportstatus)|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Checks the status of an CSVUrlExportJob object

<a id="opIdgetUrlsExportStatus"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/urls/export/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}/urls/export/{url_export_id}`

Checks the status of an CSVUrlExportJob object. Returns json object with the status.

<h3 id="checks-the-status-of-an-csvurlexportjob-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|
|url_export_id|path|string|true|Url Export ID|

> Example responses

> 200 Response

```json
{
  "area": "current",
  "date_created": "1970-01-01T00:00:00Z",
  "job_id": "string",
  "job_status": "string",
  "job_url": "string",
  "nb_results": 0,
  "query": {
    "fields": [
      "string"
    ],
    "filters": {},
    "sort": [
      {}
    ]
  },
  "results": "string"
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="checks-the-status-of-an-csvurlexportjob-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[CsvExportStatus](#schemacsvexportstatus)|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Return most frequent segments (= suggested patterns in the previous version)

<a id="opIdgetUrlsSuggestedFilters"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/urls/suggested_filters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "aggs": [
      {}
    ],
    "filters": {}
  }'
```

`POST /analyses/{username}/{project_slug}/{analysis_slug}/urls/suggested_filters`

Return most frequent segments (= suggested patterns in the previous version) for a Botify Query.

> Body parameter

```json
{
  "aggs": [
    {}
  ],
  "filters": {}
}
```

<h3 id="return-most-frequent-segments-suggested-patterns-in-the-previous-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|area|query|string|false|none|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|
|body|body|[UrlsAggsQuery](#schemaurlsaggsquery)|false|none|
|» aggs|body|[object]|false|none|
|» filters|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|area|current|
|area|new|

> Example responses

> 201 Response

```json
{
  "aggs": [
    {}
  ],
  "filters": {}
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="return-most-frequent-segments-suggested-patterns-in-the-previous-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successful operation|[UrlsAggsQuery](#schemaurlsaggsquery)|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

## Gets the detail of an URL for an analysis

<a id="opIdgetUrlDetail"></a>

> Code samples

```bash
curl https://example.com/analyses/string/string/string/urls/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /analyses/{username}/{project_slug}/{analysis_slug}/urls/{url}`

Gets the detail of an URL for an analysis

<h3 id="gets-the-detail-of-an-url-for-an-analysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[string]|false|comma separated list of fields to return (c.f. URLs Datamodel)|
|username|path|string|true|User's identifier|
|project_slug|path|string|true|Project's identifier|
|analysis_slug|path|string|true|Analysis' identifier|
|url|path|string|true|(Urlencoded) Searched URL|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="gets-the-detail-of-an-url-for-an-analysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[UrlDetail](#schemaurldetail)|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

<h1 id="botify-api-user">User</h1>

## List all active projects for the user

<a id="opIdgetUserProjects"></a>

> Code samples

```bash
curl https://example.com/projects/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /projects/{username}`

List all active projects for the user

<h3 id="list-all-active-projects-for-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page Number|
|size|query|integer|false|Page Size|
|username|path|string|true|User's identifier|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": "string",
  "page": 0,
  "previous": "string",
  "results": [
    {
      "active": true,
      "current_settings": {
        "allowed_domains": [
          "string"
        ],
        "blacklisted_domains": [
          "string"
        ],
        "compare_crawl": true,
        "crawl_gzip": true,
        "extra_headers": "string",
        "google_analytics_account_email": "string",
        "google_analytics_nb_days": 1,
        "google_analytics_site_id": -2147483648,
        "google_social_auth_id": -2147483648,
        "has_robots_txt": "string",
        "header_settings": [
          "string"
        ],
        "max_depth": 0,
        "max_nb_pages": 1,
        "max_pages_per_sec": 1,
        "respect_nofollow": true,
        "sitemaps": [
          "string"
        ],
        "start_urls": [
          "string"
        ],
        "user_agent": "string"
      },
      "date_created": "string",
      "name": "string",
      "slug": "string",
      "user": {
        "company_name": "string",
        "date_joined": "1970-01-01T00:00:00Z",
        "email": "string",
        "first_name": "string",
        "is_organization": "string",
        "last_name": "string",
        "login": "string",
        "status": "string",
        "url": "string"
      }
    }
  ],
  "size": 0
}
```

> default Response

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

<h3 id="list-all-active-projects-for-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|Inline|
|default|Default|error payload|[DefaultPayload](#schemadefaultpayload)|

<h3 id="list-all-active-projects-for-the-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|read-only|none|
|next|string|false|read-only|none|
|page|integer|false|read-only|none|
|previous|string|false|read-only|none|
|results|[[Project](#schemaproject)]|false|read-only|none|
|size|integer|false|read-only|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
DjangoRestToken
</aside>

# Schemas

<h2 id="tocS_Analysis">Analysis</h2>
<!-- backwards compatibility -->
<a id="schemaanalysis"></a>
<a id="schema_Analysis"></a>
<a id="tocSanalysis"></a>
<a id="tocsanalysis"></a>

```json
{
  "config": "string",
  "date_created": "1970-01-01T00:00:00Z",
  "date_finished": "1970-01-01T00:00:00Z",
  "date_last_modified": "1970-01-01T00:00:00Z",
  "date_launched": "1970-01-01T00:00:00Z",
  "features": "string",
  "id": 0,
  "name": "string",
  "slug": "string",
  "status": "string",
  "url": "string",
  "urls_done": "string",
  "urls_in_queue": "string",
  "user": {
    "company_name": "string",
    "date_joined": "1970-01-01T00:00:00Z",
    "email": "string",
    "first_name": "string",
    "is_organization": "string",
    "last_name": "string",
    "login": "string",
    "status": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|string|false|read-only|none|
|date_created|string(date-time)|false|none|none|
|date_finished|string(date-time)|false|none|none|
|date_last_modified|string(date-time)|false|none|Date of last modified analysis|
|date_launched|string(date-time)|false|none|none|
|features|string|false|read-only|none|
|id|integer(int64)|false|read-only|none|
|name|string|false|read-only|none|
|slug|string|false|read-only|none|
|status|string|false|read-only|none|
|url|string|false|read-only|none|
|urls_done|string|false|read-only|none|
|urls_in_queue|string|false|read-only|none|
|user|[User](#schemauser)|true|none|none|

<h2 id="tocS_AnalysisDetail">AnalysisDetail</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisdetail"></a>
<a id="schema_AnalysisDetail"></a>
<a id="tocSanalysisdetail"></a>
<a id="tocsanalysisdetail"></a>

```json
{
  "config": "string",
  "date_finished": "1970-01-01T00:00:00Z",
  "date_last_modified": "1970-01-01T00:00:00Z",
  "date_launched": "1970-01-01T00:00:00Z",
  "failures": "string",
  "features": "string",
  "id": 0,
  "name": "string",
  "red_button_domain": "string",
  "slug": "string",
  "url": "string",
  "urls_done": "string",
  "urls_in_queue": "string",
  "user": {
    "company_name": "string",
    "date_joined": "1970-01-01T00:00:00Z",
    "email": "string",
    "first_name": "string",
    "is_organization": "string",
    "last_name": "string",
    "login": "string",
    "status": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|string|false|read-only|none|
|date_finished|string(date-time)|false|none|none|
|date_last_modified|string(date-time)|false|none|Date of last modified analysis|
|date_launched|string(date-time)|false|none|none|
|failures|string|false|read-only|none|
|features|string|false|read-only|none|
|id|integer(int64)|false|read-only|none|
|name|string|false|read-only|none|
|red_button_domain|string|false|none|none|
|slug|string|false|read-only|none|
|url|string|false|read-only|none|
|urls_done|string|false|read-only|none|
|urls_in_queue|string|false|read-only|none|
|user|[User](#schemauser)|true|none|none|

<h2 id="tocS_CrawlDatamodel">CrawlDatamodel</h2>
<!-- backwards compatibility -->
<a id="schemacrawldatamodel"></a>
<a id="schema_CrawlDatamodel"></a>
<a id="tocScrawldatamodel"></a>
<a id="tocscrawldatamodel"></a>

```json
{
  "fields": [
    {
      "group": "string",
      "id": "string",
      "multiple": true,
      "name": "string",
      "permissions": [
        "string"
      ],
      "subtype": "string",
      "type": "string"
    }
  ],
  "groups": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[[CrawlDatamodelField](#schemacrawldatamodelfield)]|true|none|none|
|groups|[[CrawlDatamodelGroup](#schemacrawldatamodelgroup)]|true|none|none|

<h2 id="tocS_CrawlDatamodelField">CrawlDatamodelField</h2>
<!-- backwards compatibility -->
<a id="schemacrawldatamodelfield"></a>
<a id="schema_CrawlDatamodelField"></a>
<a id="tocScrawldatamodelfield"></a>
<a id="tocscrawldatamodelfield"></a>

```json
{
  "group": "string",
  "id": "string",
  "multiple": true,
  "name": "string",
  "permissions": [
    "string"
  ],
  "subtype": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|string|true|none|none|
|id|string|true|none|none|
|multiple|boolean|true|none|none|
|name|string|true|none|none|
|permissions|[string]|true|none|none|
|subtype|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_CrawlDatamodelGroup">CrawlDatamodelGroup</h2>
<!-- backwards compatibility -->
<a id="schemacrawldatamodelgroup"></a>
<a id="schema_CrawlDatamodelGroup"></a>
<a id="tocScrawldatamodelgroup"></a>
<a id="tocscrawldatamodelgroup"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_CrawlOrphanURLs">CrawlOrphanURLs</h2>
<!-- backwards compatibility -->
<a id="schemacrawlorphanurls"></a>
<a id="schema_CrawlOrphanURLs"></a>
<a id="tocScrawlorphanurls"></a>
<a id="tocscrawlorphanurls"></a>

```json
{
  "url": "string",
  "visits": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|
|visits|integer(int64)|true|none|none|

<h2 id="tocS_CrawlStatistics">CrawlStatistics</h2>
<!-- backwards compatibility -->
<a id="schemacrawlstatistics"></a>
<a id="schema_CrawlStatistics"></a>
<a id="tocScrawlstatistics"></a>
<a id="tocscrawlstatistics"></a>

```json
{
  "depth_current": 0,
  "last_upd_dt": "1970-01-01T00:00:00Z",
  "pages_dones": 0,
  "pages_dones_2xx": 0,
  "pages_dones_3xx": 0,
  "pages_dones_4xx": 0,
  "pages_dones_5xx": 0,
  "pages_dones_networkerror": 0,
  "pages_dones_xxx": 0,
  "pages_known": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|depth_current|integer(int64)|true|none|none|
|last_upd_dt|string(date-time)|true|none|none|
|pages_dones|integer(int64)|true|none|none|
|pages_dones_2xx|integer(int64)|true|none|none|
|pages_dones_3xx|integer(int64)|true|none|none|
|pages_dones_4xx|integer(int64)|true|none|none|
|pages_dones_5xx|integer(int64)|true|none|none|
|pages_dones_networkerror|integer(int64)|true|none|none|
|pages_dones_xxx|integer(int64)|true|none|none|
|pages_known|integer(int64)|true|none|none|

<h2 id="tocS_CrawlStatisticsTime">CrawlStatisticsTime</h2>
<!-- backwards compatibility -->
<a id="schemacrawlstatisticstime"></a>
<a id="schema_CrawlStatisticsTime"></a>
<a id="tocScrawlstatisticstime"></a>
<a id="tocscrawlstatisticstime"></a>

```json
{
  "avg_delay": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ],
  "avg_size": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ],
  "frequency": "string",
  "http_code_2xx": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ],
  "http_code_3xx": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ],
  "http_code_4xx": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ],
  "http_code_5xx": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ],
  "http_code_xxx": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ],
  "last_update_date": "1970-01-01T00:00:00Z",
  "new_urls": [
    {
      "count": 0,
      "datetime": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_delay|[[CrawlStatisticsTimePoint](#schemacrawlstatisticstimepoint)]|true|none|none|
|avg_size|[[CrawlStatisticsTimePoint](#schemacrawlstatisticstimepoint)]|true|none|none|
|frequency|string|true|none|none|
|http_code_2xx|[[CrawlStatisticsTimePoint](#schemacrawlstatisticstimepoint)]|true|none|none|
|http_code_3xx|[[CrawlStatisticsTimePoint](#schemacrawlstatisticstimepoint)]|true|none|none|
|http_code_4xx|[[CrawlStatisticsTimePoint](#schemacrawlstatisticstimepoint)]|true|none|none|
|http_code_5xx|[[CrawlStatisticsTimePoint](#schemacrawlstatisticstimepoint)]|true|none|none|
|http_code_xxx|[[CrawlStatisticsTimePoint](#schemacrawlstatisticstimepoint)]|true|none|none|
|last_update_date|string(date-time)|true|none|none|
|new_urls|[[CrawlStatisticsTimePoint](#schemacrawlstatisticstimepoint)]|true|none|none|

<h2 id="tocS_CrawlStatisticsTimePoint">CrawlStatisticsTimePoint</h2>
<!-- backwards compatibility -->
<a id="schemacrawlstatisticstimepoint"></a>
<a id="schema_CrawlStatisticsTimePoint"></a>
<a id="tocScrawlstatisticstimepoint"></a>
<a id="tocscrawlstatisticstimepoint"></a>

```json
{
  "count": 0,
  "datetime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|true|none|none|
|datetime|string(date-time)|true|none|none|

<h2 id="tocS_CrawlStatisticsUrls">CrawlStatisticsUrls</h2>
<!-- backwards compatibility -->
<a id="schemacrawlstatisticsurls"></a>
<a id="schema_CrawlStatisticsUrls"></a>
<a id="tocScrawlstatisticsurls"></a>
<a id="tocscrawlstatisticsurls"></a>

```json
{
  "content_type": "string",
  "date": "string",
  "delay_first_byte": 0,
  "delay_last_byte": 0,
  "gzip": true,
  "http": 0,
  "length": 0,
  "redirects_to": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_type|string|true|none|none|
|date|string|true|none|none|
|delay_first_byte|integer(int64)|true|none|none|
|delay_last_byte|integer(int64)|true|none|none|
|gzip|boolean|true|none|none|
|http|integer(int64)|true|none|none|
|length|integer(int64)|true|none|none|
|redirects_to|string|false|none|none|
|url|string|true|none|none|

<h2 id="tocS_CsvExportStatus">CsvExportStatus</h2>
<!-- backwards compatibility -->
<a id="schemacsvexportstatus"></a>
<a id="schema_CsvExportStatus"></a>
<a id="tocScsvexportstatus"></a>
<a id="tocscsvexportstatus"></a>

```json
{
  "area": "current",
  "date_created": "1970-01-01T00:00:00Z",
  "job_id": "string",
  "job_status": "string",
  "job_url": "string",
  "nb_results": 0,
  "query": {
    "fields": [
      "string"
    ],
    "filters": {},
    "sort": [
      {}
    ]
  },
  "results": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|area|integer(int64)|false|none|none|
|date_created|string(date-time)|false|read-only|none|
|job_id|string|false|read-only|none|
|job_status|string|false|read-only|none|
|job_url|string|false|read-only|none|
|nb_results|integer(int64)|false|none|none|
|query|[UrlsQuery](#schemaurlsquery)|true|none|none|
|results|string|false|read-only|none|

<h2 id="tocS_Default">Default</h2>
<!-- backwards compatibility -->
<a id="schemadefault"></a>
<a id="schema_Default"></a>
<a id="tocSdefault"></a>
<a id="tocsdefault"></a>

```json
{}
```

<h2 id="tocS_DefaultPayload">DefaultPayload</h2>
<!-- backwards compatibility -->
<a id="schemadefaultpayload"></a>
<a id="schema_DefaultPayload"></a>
<a id="tocSdefaultpayload"></a>
<a id="tocsdefaultpayload"></a>

```json
{
  "error": {
    "error_code": "string",
    "error_detail": {},
    "message": "string"
  }
}
```

default payload for object for all HTTP codes that are not covered individually

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|

<h2 id="tocS_FieldValues">FieldValues</h2>
<!-- backwards compatibility -->
<a id="schemafieldvalues"></a>
<a id="schema_FieldValues"></a>
<a id="tocSfieldvalues"></a>
<a id="tocsfieldvalues"></a>

```json
{
  "count": 0,
  "results": [
    {
      "nb_urls": 0,
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|true|none|none|
|results|[[FieldValuesResult](#schemafieldvaluesresult)]|true|none|none|

<h2 id="tocS_FieldValuesResult">FieldValuesResult</h2>
<!-- backwards compatibility -->
<a id="schemafieldvaluesresult"></a>
<a id="schema_FieldValuesResult"></a>
<a id="tocSfieldvaluesresult"></a>
<a id="tocsfieldvaluesresult"></a>

```json
{
  "nb_urls": 0,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nb_urls|integer(int64)|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_LinksPercentiles">LinksPercentiles</h2>
<!-- backwards compatibility -->
<a id="schemalinkspercentiles"></a>
<a id="schema_LinksPercentiles"></a>
<a id="tocSlinkspercentiles"></a>
<a id="tocslinkspercentiles"></a>

```json
{
  "domain": "string",
  "percentiles": [
    {
      "avg": 0,
      "id": 0,
      "max": 0,
      "metric_total": 0,
      "min": 0,
      "url_total": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|true|none|none|
|percentiles|[[LinksPercentilesItem](#schemalinkspercentilesitem)]|true|none|none|

<h2 id="tocS_LinksPercentilesItem">LinksPercentilesItem</h2>
<!-- backwards compatibility -->
<a id="schemalinkspercentilesitem"></a>
<a id="schema_LinksPercentilesItem"></a>
<a id="tocSlinkspercentilesitem"></a>
<a id="tocslinkspercentilesitem"></a>

```json
{
  "avg": 0,
  "id": 0,
  "max": 0,
  "metric_total": 0,
  "min": 0,
  "url_total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg|integer(int64)|true|none|none|
|id|integer(int64)|true|none|none|
|max|integer(int64)|true|none|none|
|metric_total|integer(int64)|true|none|none|
|min|integer(int64)|true|none|none|
|url_total|integer(int64)|true|none|none|

<h2 id="tocS_LinksTopDomains">LinksTopDomains</h2>
<!-- backwards compatibility -->
<a id="schemalinkstopdomains"></a>
<a id="schema_LinksTopDomains"></a>
<a id="tocSlinkstopdomains"></a>
<a id="tocslinkstopdomains"></a>

```json
{
  "domain": "string",
  "follow_links": 0,
  "follow_samples": [
    {
      "sources": [
        "string"
      ],
      "unique_links": 0,
      "url": "string"
    }
  ],
  "nofollow_links": 0,
  "nofollow_samples": [
    {
      "sources": [
        "string"
      ],
      "unique_links": 0,
      "url": "string"
    }
  ],
  "unique_follow_links": 0,
  "unique_nofollow_links": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|true|none|none|
|follow_links|integer(int64)|true|none|none|
|follow_samples|[[LinksTopDomainsSamples](#schemalinkstopdomainssamples)]|true|none|none|
|nofollow_links|integer(int64)|true|none|none|
|nofollow_samples|[[LinksTopDomainsSamples](#schemalinkstopdomainssamples)]|true|none|none|
|unique_follow_links|integer(int64)|true|none|none|
|unique_nofollow_links|integer(int64)|true|none|none|

<h2 id="tocS_LinksTopDomainsSamples">LinksTopDomainsSamples</h2>
<!-- backwards compatibility -->
<a id="schemalinkstopdomainssamples"></a>
<a id="schema_LinksTopDomainsSamples"></a>
<a id="tocSlinkstopdomainssamples"></a>
<a id="tocslinkstopdomainssamples"></a>

```json
{
  "sources": [
    "string"
  ],
  "unique_links": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sources|[string]|true|none|none|
|unique_links|integer(int64)|true|none|none|
|url|string|true|none|none|

<h2 id="tocS_PageRankLost">PageRankLost</h2>
<!-- backwards compatibility -->
<a id="schemapageranklost"></a>
<a id="schema_PageRankLost"></a>
<a id="tocSpageranklost"></a>
<a id="tocspageranklost"></a>

```json
{
  "external": 0,
  "non_crawled": 0,
  "robots_txt": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external|number(float)|true|none|none|
|non_crawled|number(float)|true|none|none|
|robots_txt|number(float)|true|none|none|

<h2 id="tocS_Project">Project</h2>
<!-- backwards compatibility -->
<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "active": true,
  "current_settings": {
    "allowed_domains": [
      "string"
    ],
    "blacklisted_domains": [
      "string"
    ],
    "compare_crawl": true,
    "crawl_gzip": true,
    "extra_headers": "string",
    "google_analytics_account_email": "string",
    "google_analytics_nb_days": 1,
    "google_analytics_site_id": -2147483648,
    "google_social_auth_id": -2147483648,
    "has_robots_txt": "string",
    "header_settings": [
      "string"
    ],
    "max_depth": 0,
    "max_nb_pages": 1,
    "max_pages_per_sec": 1,
    "respect_nofollow": true,
    "sitemaps": [
      "string"
    ],
    "start_urls": [
      "string"
    ],
    "user_agent": "string"
  },
  "date_created": "string",
  "name": "string",
  "slug": "string",
  "user": {
    "company_name": "string",
    "date_joined": "1970-01-01T00:00:00Z",
    "email": "string",
    "first_name": "string",
    "is_organization": "string",
    "last_name": "string",
    "login": "string",
    "status": "string",
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|current_settings|[ProjectSettingsSerializer](#schemaprojectsettingsserializer)|true|none|none|
|date_created|string|false|read-only|none|
|name|string|true|none|none|
|slug|string|true|none|none|
|user|[User](#schemauser)|true|none|none|

<h2 id="tocS_ProjectSavedFilter">ProjectSavedFilter</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsavedfilter"></a>
<a id="schema_ProjectSavedFilter"></a>
<a id="tocSprojectsavedfilter"></a>
<a id="tocsprojectsavedfilter"></a>

```json
{
  "filters": {},
  "identifier": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|object|true|none|none|
|identifier|string|false|read-only|none|
|name|string|true|none|none|

<h2 id="tocS_ProjectSettingsSerializer">ProjectSettingsSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaprojectsettingsserializer"></a>
<a id="schema_ProjectSettingsSerializer"></a>
<a id="tocSprojectsettingsserializer"></a>
<a id="tocsprojectsettingsserializer"></a>

```json
{
  "allowed_domains": [
    "string"
  ],
  "blacklisted_domains": [
    "string"
  ],
  "compare_crawl": true,
  "crawl_gzip": true,
  "extra_headers": "string",
  "google_analytics_account_email": "string",
  "google_analytics_nb_days": 1,
  "google_analytics_site_id": -2147483648,
  "google_social_auth_id": -2147483648,
  "has_robots_txt": "string",
  "header_settings": [
    "string"
  ],
  "max_depth": 0,
  "max_nb_pages": 1,
  "max_pages_per_sec": 1,
  "respect_nofollow": true,
  "sitemaps": [
    "string"
  ],
  "start_urls": [
    "string"
  ],
  "user_agent": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_domains|[string]|true|none|none|
|blacklisted_domains|[string]|true|none|none|
|compare_crawl|boolean|false|none|none|
|crawl_gzip|boolean|false|none|none|
|extra_headers|string|false|none|none|
|google_analytics_account_email|string|false|none|Keep email in case user delete his social auth connection|
|google_analytics_nb_days|integer(int64)|false|none|none|
|google_analytics_site_id|integer(int64)|false|none|none|
|google_social_auth_id|integer(int64)|false|none|none|
|has_robots_txt|string|false|read-only|none|
|header_settings|[string]|true|none|none|
|max_depth|integer(int64)|false|none|none|
|max_nb_pages|integer(int64)|true|none|none|
|max_pages_per_sec|integer(int64)|false|none|none|
|respect_nofollow|boolean|false|none|none|
|sitemaps|[string]|true|none|none|
|start_urls|[string]|true|none|none|
|user_agent|string|false|none|none|

<h2 id="tocS_RewritingRuleSerializer">RewritingRuleSerializer</h2>
<!-- backwards compatibility -->
<a id="schemarewritingruleserializer"></a>
<a id="schema_RewritingRuleSerializer"></a>
<a id="tocSrewritingruleserializer"></a>
<a id="tocsrewritingruleserializer"></a>

```json
{
  "ignore_case": true,
  "regex": "string",
  "replace": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ignore_case|boolean|true|none|none|
|regex|string|true|none|none|
|replace|string|true|none|none|

<h2 id="tocS_SitemapsReport">SitemapsReport</h2>
<!-- backwards compatibility -->
<a id="schemasitemapsreport"></a>
<a id="schema_SitemapsReport"></a>
<a id="tocSsitemapsreport"></a>
<a id="tocssitemapsreport"></a>

```json
{
  "count": 0,
  "errors": [
    {
      "error": {
        "message": "string",
        "type": "string"
      },
      "file_type": "string",
      "invalid_urls": 0,
      "sitemap_indexes": [
        "string"
      ],
      "url": "string",
      "valid_urls": 0
    }
  ],
  "sitemap_indexes": [
    {
      "error": {
        "message": "string",
        "type": "string"
      },
      "file_type": "string",
      "invalid_urls": 0,
      "sitemap_indexes": [
        "string"
      ],
      "url": "string",
      "valid_urls": 0
    }
  ],
  "sitemap_only": {
    "in_configuration": 0,
    "out_of_configuration": 0
  },
  "sitemaps": [
    {
      "error": {
        "message": "string",
        "type": "string"
      },
      "file_type": "string",
      "invalid_urls": 0,
      "sitemap_indexes": [
        "string"
      ],
      "url": "string",
      "valid_urls": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int64)|true|none|none|
|errors|[[SitemapsReportSitemap](#schemasitemapsreportsitemap)]|true|none|none|
|sitemap_indexes|[[SitemapsReportSitemap](#schemasitemapsreportsitemap)]|true|none|none|
|sitemap_only|[SitemapsReportOnly](#schemasitemapsreportonly)|true|none|none|
|sitemaps|[[SitemapsReportSitemap](#schemasitemapsreportsitemap)]|true|none|none|

<h2 id="tocS_SitemapsReportOnly">SitemapsReportOnly</h2>
<!-- backwards compatibility -->
<a id="schemasitemapsreportonly"></a>
<a id="schema_SitemapsReportOnly"></a>
<a id="tocSsitemapsreportonly"></a>
<a id="tocssitemapsreportonly"></a>

```json
{
  "in_configuration": 0,
  "out_of_configuration": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|in_configuration|integer(int64)|true|none|none|
|out_of_configuration|integer(int64)|true|none|none|

<h2 id="tocS_SitemapsReportSitemap">SitemapsReportSitemap</h2>
<!-- backwards compatibility -->
<a id="schemasitemapsreportsitemap"></a>
<a id="schema_SitemapsReportSitemap"></a>
<a id="tocSsitemapsreportsitemap"></a>
<a id="tocssitemapsreportsitemap"></a>

```json
{
  "error": {
    "message": "string",
    "type": "string"
  },
  "file_type": "string",
  "invalid_urls": 0,
  "sitemap_indexes": [
    "string"
  ],
  "url": "string",
  "valid_urls": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[SitemapsReportSitemapError](#schemasitemapsreportsitemaperror)|false|none|none|
|file_type|string|false|none|none|
|invalid_urls|integer(int64)|false|none|none|
|sitemap_indexes|[string]|false|none|none|
|url|string|true|none|none|
|valid_urls|integer(int64)|false|none|none|

<h2 id="tocS_SitemapsReportSitemapError">SitemapsReportSitemapError</h2>
<!-- backwards compatibility -->
<a id="schemasitemapsreportsitemaperror"></a>
<a id="schema_SitemapsReportSitemapError"></a>
<a id="tocSsitemapsreportsitemaperror"></a>
<a id="tocssitemapsreportsitemaperror"></a>

```json
{
  "message": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_URLRewritingRulesSerializer">URLRewritingRulesSerializer</h2>
<!-- backwards compatibility -->
<a id="schemaurlrewritingrulesserializer"></a>
<a id="schema_URLRewritingRulesSerializer"></a>
<a id="tocSurlrewritingrulesserializer"></a>
<a id="tocsurlrewritingrulesserializer"></a>

```json
{
  "rules": [
    {
      "ignore_case": true,
      "regex": "string",
      "replace": "string"
    }
  ],
  "urls": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rules|[[RewritingRuleSerializer](#schemarewritingruleserializer)]|true|none|none|
|urls|[string]|true|none|none|

<h2 id="tocS_UrlDetail">UrlDetail</h2>
<!-- backwards compatibility -->
<a id="schemaurldetail"></a>
<a id="schema_UrlDetail"></a>
<a id="tocSurldetail"></a>
<a id="tocsurldetail"></a>

```json
{}
```

<h2 id="tocS_UrlsAgg">UrlsAgg</h2>
<!-- backwards compatibility -->
<a id="schemaurlsagg"></a>
<a id="schema_UrlsAgg"></a>
<a id="tocSurlsagg"></a>
<a id="tocsurlsagg"></a>

```json
{
  "aggs": [
    {}
  ],
  "count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggs|[object]|false|none|none|
|count|integer(int64)|true|none|none|

<h2 id="tocS_UrlsAggs">UrlsAggs</h2>
<!-- backwards compatibility -->
<a id="schemaurlsaggs"></a>
<a id="schema_UrlsAggs"></a>
<a id="tocSurlsaggs"></a>
<a id="tocsurlsaggs"></a>

```json
{
  "data": {
    "aggs": [
      {}
    ],
    "count": 0
  },
  "error": {
    "error_code": "string",
    "message": "string"
  },
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[UrlsAgg](#schemaurlsagg)|false|none|none|
|error|[UrlsErrorAgg](#schemaurlserroragg)|false|none|none|
|status|integer(int64)|true|none|none|

<h2 id="tocS_UrlsAggsQueries">UrlsAggsQueries</h2>
<!-- backwards compatibility -->
<a id="schemaurlsaggsqueries"></a>
<a id="schema_UrlsAggsQueries"></a>
<a id="tocSurlsaggsqueries"></a>
<a id="tocsurlsaggsqueries"></a>

```json
[
  {
    "aggs": [
      {}
    ],
    "filters": {}
  }
]
```

<h2 id="tocS_UrlsAggsQuery">UrlsAggsQuery</h2>
<!-- backwards compatibility -->
<a id="schemaurlsaggsquery"></a>
<a id="schema_UrlsAggsQuery"></a>
<a id="tocSurlsaggsquery"></a>
<a id="tocsurlsaggsquery"></a>

```json
{
  "aggs": [
    {}
  ],
  "filters": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggs|[object]|false|none|none|
|filters|object|false|none|none|

<h2 id="tocS_UrlsErrorAgg">UrlsErrorAgg</h2>
<!-- backwards compatibility -->
<a id="schemaurlserroragg"></a>
<a id="schema_UrlsErrorAgg"></a>
<a id="tocSurlserroragg"></a>
<a id="tocsurlserroragg"></a>

```json
{
  "error_code": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_code|string|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_UrlsQuery">UrlsQuery</h2>
<!-- backwards compatibility -->
<a id="schemaurlsquery"></a>
<a id="schema_UrlsQuery"></a>
<a id="tocSurlsquery"></a>
<a id="tocsurlsquery"></a>

```json
{
  "fields": [
    "string"
  ],
  "filters": {},
  "sort": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[string]|false|none|none|
|filters|object|false|none|none|
|sort|[object]|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "company_name": "string",
  "date_joined": "1970-01-01T00:00:00Z",
  "email": "string",
  "first_name": "string",
  "is_organization": "string",
  "last_name": "string",
  "login": "string",
  "status": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company_name|string|false|none|none|
|date_joined|string(date-time)|false|none|none|
|email|string|false|none|none|
|first_name|string|false|none|none|
|is_organization|string|false|read-only|none|
|last_name|string|false|none|none|
|login|string|false|read-only|none|
|status|string|false|none|none|
|url|string|false|read-only|none|

<h2 id="tocS_string">string</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_string"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
{}
```
