<h1 id="movie-reviews-api">Movie Reviews API v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

With the Movie Reviews API, you can search New York Times movie reviews by keyword and get lists of NYT Critics' Picks.

Base URLs:

* <a href="http://api.nytimes.com/svc/movies/v2">http://api.nytimes.com/svc/movies/v2</a>

* <a href="https://api.nytimes.com/svc/movies/v2">https://api.nytimes.com/svc/movies/v2</a>

<a href="http://developer.nytimes.com/tou">Terms of service</a>

<a href="http://developer.nytimes.com/">External documentation</a>

# Authentication

* API Key (apikey)
    - Parameter Name: **api-key**, in: query.

<h1 id="movie-reviews-api-default">Default</h1>

## get/critics/{resource-type}.json

> Code samples

```bash
curl "https://api.nytimes.com/svc/critics/string.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /critics/{resource-type}.json`

<h3 id="getcriticsresource-typejson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-type|path|string|true|all \| full-time \| part-time \| [reviewer-name]<br><br>Specify all to get all Times reviewers, or specify full-time or part-time to get that subset. Specify a reviewer's name to get details about a particular reviewer.<br>|

> Example responses

> 200 Response

```json
{
  "copyright": "string",
  "num_results": 0,
  "results": [
    {
      "bio": "string",
      "display_name": "string",
      "multimedia": {
        "resource": {
          "credit": "string",
          "height": 0,
          "src": "string",
          "type": "string",
          "width": 0
        }
      },
      "seo_name": "string",
      "sort_name": "string",
      "status": "string"
    }
  ],
  "status": "string"
}
```

<h3 id="getcriticsresource-typejson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of Movie Critics|Inline|

<h3 id="getcriticsresource-typejson-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|num_results|integer|false|none|none|
|results|[[Critic](#schemacritic)]|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## get/reviews/search.json

> Code samples

```bash
curl "https://api.nytimes.com/svc/reviews/search.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /reviews/search.json`

<h3 id="getreviewssearchjson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Search keywords; matches movie title and indexed terms<br><br>To limit your search to exact matches only, surround your search string with single quotation marks (e.g., query='28+days+later'). Otherwise, responses will include partial matches ("head words") as well as exact matches (e.g., president will match president, presidents and presidential).<br>  <br>  If you specify multiple terms without quotation marks, they will be combined in an OR search.<br>  <br>  If you omit the query parameter, your request will be equivalent to a reviews and NYT Critics' Picks request.<br>|
|critics-pick|query|string|false|Set this parameter to Y to limit the results to NYT Critics' Picks. To get only those movies that have not been highlighted by Times critics, specify critics-pick=N. (To get all reviews regardless of critics-pick status, simply omit this parameter.)<br>|
|reviewer|query|string|false|Include this parameter to limit your results to reviews by a specific critic. Reviewer names should be formatted like this: Manohla Dargis.<br>|
|publication-date|query|string|false|Single date: YYYY-MM-DD<br><br>Start and end date: YYYY-MM-DD;YYYY-MM-DD<br><br>The publication-date is the date the review was first published in The Times.<br>|
|opening-date|query|string|false|Single date: YYYY-MM-DD<br><br>Start and end date: YYYY-MM-DD;YYYY-MM-DD<br><br>The opening-date is the date the movie's opening date in the New York region.<br>|
|offset|query|integer|false|Positive integer, multiple of 20|
|order|query|string|false|Sets the sort order of the results.<br><br>Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.<br><br>If you do not specify a sort order, the results will be ordered by publication-date.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|critics-pick|Y|
|critics-pick|N|

> Example responses

> 200 Response

```json
{
  "copyright": "string",
  "num_results": 0,
  "results": [
    {
      "byline": "string",
      "critics_pick": 0,
      "date_updated": "string",
      "display_title": "string",
      "headline": "string",
      "link": {
        "suggested_link_text": "string",
        "type": "string",
        "url": "string"
      },
      "mpaa_rating": "string",
      "multimedia": {
        "resource": {
          "height": 0,
          "src": "string",
          "type": "string",
          "width": 0
        }
      },
      "opening_date": "string",
      "publication_date": "string",
      "summary_short": "string"
    }
  ],
  "status": "string"
}
```

<h3 id="getreviewssearchjson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of Movies|Inline|

<h3 id="getreviewssearchjson-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|num_results|integer|false|none|none|
|results|[[Movie](#schemamovie)]|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

## get/reviews/{resource-type}.json

> Code samples

```bash
curl "https://api.nytimes.com/svc/reviews/all.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /reviews/{resource-type}.json`

<h3 id="getreviewsresource-typejson-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource-type|path|string|true|Specify all to retrieve all reviews, including NYT Critics' Picks.<br><br>Specify picks to get NYT Critics' Picks currently in theaters.<br><br>|
|offset|query|integer|false|Positive integer, multiple of 20|
|order|query|string|false|Sets the sort order of the results.<br><br>Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.<br><br>If you do not specify a sort order, the results will be ordered by publication-date.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|resource-type|all|
|resource-type|picks|
|order|by-title|
|order|by-publication-date|
|order|by-opening-date|

> Example responses

> 200 Response

```json
{
  "copyright": "string",
  "num_results": 0,
  "results": [
    {
      "byline": "string",
      "critics_pick": 0,
      "date_updated": "string",
      "display_title": "string",
      "headline": "string",
      "link": {
        "suggested_link_text": "string",
        "type": "string",
        "url": "string"
      },
      "mpaa_rating": "string",
      "multimedia": {
        "resource": {
          "height": 0,
          "src": "string",
          "type": "string",
          "width": 0
        }
      },
      "opening_date": "string",
      "publication_date": "string",
      "summary_short": "string"
    }
  ],
  "status": "string"
}
```

<h3 id="getreviewsresource-typejson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of Movies|Inline|

<h3 id="getreviewsresource-typejson-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|num_results|integer|false|none|none|
|results|[[Movie](#schemamovie)]|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apikey
</aside>

# Schemas

<h2 id="tocS_Critic">Critic</h2>
<!-- backwards compatibility -->
<a id="schemacritic"></a>
<a id="schema_Critic"></a>
<a id="tocScritic"></a>
<a id="tocscritic"></a>

```json
{
  "bio": "string",
  "display_name": "string",
  "multimedia": {
    "resource": {
      "credit": "string",
      "height": 0,
      "src": "string",
      "type": "string",
      "width": 0
    }
  },
  "seo_name": "string",
  "sort_name": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bio|string|false|none|none|
|display_name|string|false|none|none|
|multimedia|object|false|none|none|
|seo_name|string|false|none|none|
|sort_name|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_Movie">Movie</h2>
<!-- backwards compatibility -->
<a id="schemamovie"></a>
<a id="schema_Movie"></a>
<a id="tocSmovie"></a>
<a id="tocsmovie"></a>

```json
{
  "byline": "string",
  "critics_pick": 0,
  "date_updated": "string",
  "display_title": "string",
  "headline": "string",
  "link": {
    "suggested_link_text": "string",
    "type": "string",
    "url": "string"
  },
  "mpaa_rating": "string",
  "multimedia": {
    "resource": {
      "height": 0,
      "src": "string",
      "type": "string",
      "width": 0
    }
  },
  "opening_date": "string",
  "publication_date": "string",
  "summary_short": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|byline|string|false|none|none|
|critics_pick|integer|false|none|none|
|date_updated|string|false|none|none|
|display_title|string|false|none|none|
|headline|string|false|none|none|
|link|object|false|none|none|
|mpaa_rating|string|false|none|none|
|multimedia|object|false|none|none|
|opening_date|string|false|none|none|
|publication_date|string|false|none|none|
|summary_short|string|false|none|none|
