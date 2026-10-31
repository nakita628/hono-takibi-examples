<h1 id="most-popular-api">Most Popular API v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Get lists of NYT Articles based on shares, emails, and views.

Base URLs:

* <a href="http://api.nytimes.com/svc/mostpopular/v2">http://api.nytimes.com/svc/mostpopular/v2</a>

* <a href="https://api.nytimes.com/svc/mostpopular/v2">https://api.nytimes.com/svc/mostpopular/v2</a>

<a href="http://developer.nytimes.com/tou">Terms of service</a>

<a href="http://developer.nytimes.com/">External documentation</a>

# Authentication

* API Key (api-key)
    - Parameter Name: **api-key**, in: query.

<h1 id="most-popular-api-default">Default</h1>

## Most Emailed by Section &amp; Time Period

<a id="opIdGET_mostemailed-section-time-period-json"></a>

> Code samples

```bash
curl "https://api.nytimes.com/svc/mostemailed/Arts/1.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /mostemailed/{section}/{time-period}.json`

<h3 id="most-emailed-by-section-time-period-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|section|path|string|true|Limits the results by one or more sections. You can use<br>`all-sections` or one or more section names seperated by semicolons. See `viewed/sections.json` call to get a list of sections. <br>|
|time-period|path|string|true|Number of days `1 \| 7 \| 30 ` corresponds to a day, a week, or a month of content.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|section|Arts|
|section|Automobiles|
|section|Blogs|
|section|Books|
|section|Business Day|
|section|Education|
|section|Fashion & Style|
|section|Food|
|section|Health|
|section|Job Market|
|section|Magazine|
|section|membercenter|
|section|Movies|
|section|Multimedia|
|section|N.Y.%20%2F%20Region|
|section|NYT Now|
|section|Obituaries|
|section|Open|
|section|Opinion|
|section|Public Editor|
|section|Real Estate|
|section|Science|
|section|Sports|
|section|Style|
|section|Sunday Review|
|section|T Magazine|
|section|Technology|
|section|The Upshot|
|section|Theater|
|section|Times Insider|
|section|Today’s Paper|
|section|Travel|
|section|U.S.|
|section|World|
|section|Your Money|
|section|all-sections|
|time-period|1|
|time-period|7|
|time-period|30|

> Example responses

> 200 Response

```json
{
  "copyright": "string",
  "num_results": 0,
  "results": [
    {
      "abstract": "string",
      "byline": "string",
      "column": "string",
      "count_type": "string",
      "des_facet": [
        null
      ],
      "geo_facet": "",
      "media": [
        {
          "caption": "string",
          "copyright": "string",
          "media-metadata": {
            "format": "string",
            "height": 0,
            "url": "string",
            "width": 0
          },
          "subtype": "string",
          "type": "string"
        }
      ],
      "org_facet": [
        null
      ],
      "per_facet": [
        null
      ],
      "published_date": "string",
      "section": "string",
      "source": "string",
      "title": "string",
      "url": "string"
    }
  ],
  "status": "string"
}
```

> 400 Response

```json
{
  "copyright": "Copyright (c) 2016 The New York Times Company.  All Rights Reserved.",
  "errors": [
    "Param 'period' is invalid."
  ],
  "results": [],
  "status": "ERROR"
}
```

> 403 Response

```json
{}
```

<h3 id="most-emailed-by-section-time-period-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of Articles|Inline|
|400|Bad Request||Inline|
|403|Forbidden||Inline|

<h3 id="most-emailed-by-section-time-period-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|num_results|integer|false|none|none|
|results|[[ArticleWithCountType](#schemaarticlewithcounttype)]|false|none|none|
|status|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|errors|[string]|false|none|none|
|results|[object]|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Most Shared by Section &amp; Time Period

<a id="opIdGET_mostshared-section-time-period-json"></a>

> Code samples

```bash
curl "https://api.nytimes.com/svc/mostshared/Arts/1.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /mostshared/{section}/{time-period}.json`

<h3 id="most-shared-by-section-time-period-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|section|path|string|true|Limits the results by one or more sections. You can use<br>`all-sections` or one or more section names seperated by semicolons. See `viewed/sections.json` call to get a list of sections. <br>|
|time-period|path|string|true|Number of days `1 \| 7 \| 30 ` corresponds to a day, a week, or a month of content.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|section|Arts|
|section|Automobiles|
|section|Blogs|
|section|Books|
|section|Business Day|
|section|Education|
|section|Fashion & Style|
|section|Food|
|section|Health|
|section|Job Market|
|section|Magazine|
|section|membercenter|
|section|Movies|
|section|Multimedia|
|section|N.Y.%20%2F%20Region|
|section|NYT Now|
|section|Obituaries|
|section|Open|
|section|Opinion|
|section|Public Editor|
|section|Real Estate|
|section|Science|
|section|Sports|
|section|Style|
|section|Sunday Review|
|section|T Magazine|
|section|Technology|
|section|The Upshot|
|section|Theater|
|section|Times Insider|
|section|Today’s Paper|
|section|Travel|
|section|U.S.|
|section|World|
|section|Your Money|
|section|all-sections|
|time-period|1|
|time-period|7|
|time-period|30|

> Example responses

> 200 Response

```json
{
  "copyright": "Copyright (c) 2016 The New York Times Company.  All Rights Reserved.",
  "num_results": 24,
  "results": [
    {
      "abstract": "Timothy D. Cook, Apple’s chief, said the government’s request to bypass security on the phone used by Syed Rizwan Farook had “chilling” implications.",
      "asset_id": 100000004214575,
      "byline": "By ERIC LICHTBLAU and KATIE BENNER",
      "column": "",
      "des_facet": [
        "IPHONE"
      ],
      "geo_facet": "",
      "media": [
        {
          "caption": "Timothy D. Cook, the chief executive of Apple, released a letter to customers several hours after a California judge ordered the company to unlock an iPhone used by one of the shooters in a recent attack that killed 14 people in San Bernardino.",
          "copyright": "Jeff Chiu/Associated Press",
          "media-metadata": [
            {
              "format": "Standard Thumbnail",
              "height": 75,
              "url": "http://static01.nyt.com/images/2016/02/18/world/18Appleletter-web/18Appleletter-web-thumbStandard.jpg",
              "width": 75
            }
          ],
          "subtype": "photo",
          "type": "image"
        }
      ],
      "org_facet": [
        "APPLE INC"
      ],
      "per_facet": [
        "COOK, TIMOTHY D"
      ],
      "published_date": "2016-02-18",
      "section": "Technology",
      "source": "The New York Times",
      "title": "Apple Fights Order to Unlock San Bernardino Gunman’s iPhone",
      "total_shares": 1,
      "url": "http://www.nytimes.com/2016/02/18/technology/apple-timothy-cook-fbi-san-bernardino.html"
    }
  ],
  "status": "OK"
}
```

> 400 Response

```json
{
  "copyright": "Copyright (c) 2016 The New York Times Company.  All Rights Reserved.",
  "errors": [
    "Please specify a supported period, options are: 1,7,30"
  ],
  "results": [],
  "status": "ERROR"
}
```

<h3 id="most-shared-by-section-time-period-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of Articles|Inline|
|400|Bad Request||Inline|

<h3 id="most-shared-by-section-time-period-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|num_results|integer|false|none|none|
|results|[[Article](#schemaarticle)]|false|none|none|
|status|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|errors|[string]|false|none|none|
|results|[object]|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Most Viewed by Section &amp; Time Period

<a id="opIdGET_mostviewed-section-time-period-json"></a>

> Code samples

```bash
curl "https://api.nytimes.com/svc/mostviewed/Arts/1.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /mostviewed/{section}/{time-period}.json`

<h3 id="most-viewed-by-section-time-period-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|section|path|string|true|Limits the results by one or more sections. You can use<br>`all-sections` or one or more section names seperated by semicolons. See `viewed/sections.json` call to get a list of sections. <br>|
|time-period|path|string|true|Number of days `1 \| 7 \| 30 ` corresponds to a day, a week, or a month of content.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|section|Arts|
|section|Automobiles|
|section|Blogs|
|section|Books|
|section|Business Day|
|section|Education|
|section|Fashion & Style|
|section|Food|
|section|Health|
|section|Job Market|
|section|Magazine|
|section|membercenter|
|section|Movies|
|section|Multimedia|
|section|N.Y.%20%2F%20Region|
|section|NYT Now|
|section|Obituaries|
|section|Open|
|section|Opinion|
|section|Public Editor|
|section|Real Estate|
|section|Science|
|section|Sports|
|section|Style|
|section|Sunday Review|
|section|T Magazine|
|section|Technology|
|section|The Upshot|
|section|Theater|
|section|Times Insider|
|section|Today’s Paper|
|section|Travel|
|section|U.S.|
|section|World|
|section|Your Money|
|section|all-sections|
|time-period|1|
|time-period|7|
|time-period|30|

> Example responses

> 200 Response

```json
{
  "copyright": "Copyright (c) 2016 The New York Times Company.  All Rights Reserved.",
  "num_results": 121,
  "results": [
    {
      "abstract": "Republicans have parked themselves so far to the right for so many years that it’s not clear if they can hear how deranged they sound.",
      "adx_keywords": "Supreme Court (US);McConnell, Mitch;Scalia, Antonin;Obama, Barack;Kirk, Mark Steven;Republican Party;Senate;Cornyn, John;Collins, Susan M",
      "asset_id": 100000004229487,
      "byline": "By THE EDITORIAL BOARD",
      "column": "Editorial",
      "des_facet": "",
      "geo_facet": "",
      "id": 100000004229487,
      "media": "",
      "org_facet": [
        "SUPREME COURT (US)"
      ],
      "per_facet": [
        "MCCONNELL, MITCH"
      ],
      "published_date": "2016-02-25",
      "section": "Opinion",
      "source": "The New York Times",
      "title": "Senate Republicans Lose Their Minds on a Supreme Court Seat",
      "type": "Article",
      "url": "http://www.nytimes.com/2016/02/25/opinion/senate-republicans-lose-their-minds-on-a-supreme-court-seat.html",
      "views": 1
    }
  ],
  "status": "OK"
}
```

<h3 id="most-viewed-by-section-time-period-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|An array of Articles|Inline|

<h3 id="most-viewed-by-section-time-period-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|num_results|integer|false|none|none|
|results|[[Article](#schemaarticle)]|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
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
  "column": "string",
  "des_facet": [
    null
  ],
  "geo_facet": "",
  "media": [
    null
  ],
  "org_facet": [
    null
  ],
  "per_facet": [
    null
  ],
  "published_date": "string",
  "section": "string",
  "source": "string",
  "title": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abstract|string|false|none|none|
|byline|string|false|none|none|
|column|string|false|none|none|
|des_facet|[DesFacet](#schemadesfacet)|false|none|none|
|geo_facet|[GeoFacet](#schemageofacet)|false|none|none|
|media|[object]|false|none|none|
|org_facet|[OrgFacet](#schemaorgfacet)|false|none|none|
|per_facet|[PerFacet](#schemaperfacet)|false|none|none|
|published_date|string|false|none|none|
|section|string|false|none|none|
|source|string|false|none|none|
|title|string|false|none|none|
|url|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|geo_facet|""|

<h2 id="tocS_ArticleWithCountType">ArticleWithCountType</h2>
<!-- backwards compatibility -->
<a id="schemaarticlewithcounttype"></a>
<a id="schema_ArticleWithCountType"></a>
<a id="tocSarticlewithcounttype"></a>
<a id="tocsarticlewithcounttype"></a>

```json
{
  "abstract": "string",
  "byline": "string",
  "column": "string",
  "count_type": "string",
  "des_facet": [
    null
  ],
  "geo_facet": "",
  "media": [
    {
      "caption": "string",
      "copyright": "string",
      "media-metadata": {
        "format": "string",
        "height": 0,
        "url": "string",
        "width": 0
      },
      "subtype": "string",
      "type": "string"
    }
  ],
  "org_facet": [
    null
  ],
  "per_facet": [
    null
  ],
  "published_date": "string",
  "section": "string",
  "source": "string",
  "title": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abstract|string|false|none|none|
|byline|string|false|none|none|
|column|string|false|none|none|
|count_type|string|false|none|none|
|des_facet|[DesFacet](#schemadesfacet)|false|none|none|
|geo_facet|[GeoFacet](#schemageofacet)|false|none|none|
|media|[object]|false|none|none|
|org_facet|[OrgFacet](#schemaorgfacet)|false|none|none|
|per_facet|[PerFacet](#schemaperfacet)|false|none|none|
|published_date|string|false|none|none|
|section|string|false|none|none|
|source|string|false|none|none|
|title|string|false|none|none|
|url|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|geo_facet|""|

<h2 id="tocS_DesFacet">DesFacet</h2>
<!-- backwards compatibility -->
<a id="schemadesfacet"></a>
<a id="schema_DesFacet"></a>
<a id="tocSdesfacet"></a>
<a id="tocsdesfacet"></a>

```json
[
  null
]
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[object]|false|none|none|
|*oneOf*|string|false|none|none|

<h2 id="tocS_GeoFacet">GeoFacet</h2>
<!-- backwards compatibility -->
<a id="schemageofacet"></a>
<a id="schema_GeoFacet"></a>
<a id="tocSgeofacet"></a>
<a id="tocsgeofacet"></a>

```json
""
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[object]|false|none|none|
|*oneOf*|string|false|none|none|

<h2 id="tocS_OrgFacet">OrgFacet</h2>
<!-- backwards compatibility -->
<a id="schemaorgfacet"></a>
<a id="schema_OrgFacet"></a>
<a id="tocSorgfacet"></a>
<a id="tocsorgfacet"></a>

```json
[
  null
]
```

<h2 id="tocS_PerFacet">PerFacet</h2>
<!-- backwards compatibility -->
<a id="schemaperfacet"></a>
<a id="schema_PerFacet"></a>
<a id="tocSperfacet"></a>
<a id="tocsperfacet"></a>

```json
[
  null
]
```
