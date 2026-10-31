<h1 id="hhs-media-services-api">HHS Media Services API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<div class="swagger-ui-wrap extraFooter"><h3>Common Features / Behaviors</h3> <div class="features"> <ul> <li><strong>* "sort" param:</strong> supports multi column sorting through the use of commas as delimiters, and a hyphen to denote descending order. <br/> <strong><span>Examples:</span></strong> <ul> <li><span class="example">name</span><span class="description">sort results by name ascending</span></li> <li><span class="example">-name</span><span class="description">sort results by name descending</span></li> <li><span class="example">-name,id</span><span class="description">sort results by name descending and then by id ascending</span></li> <li><span class="example">id,-dateContentAuthored</span><span class="description">sort results by id ascending and then date descending</span></li> </ul> </li> <li><strong>Date formats:</strong> Date input format is expected to be based on <a href="http://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a>. <br/> <span><strong>Example:</strong></span> <ul><li>2013-11-18T18:43:01Z</li></ul> </li> </ul> </div> </div>

Base URLs:

* <a href="https://api.apis.guru/api/v2">https://api.apis.guru/api/v2</a>

<a href="http://www.hhs.gov/web/socialmedia/policies/tos.html#ready">Terms of service</a>
Email: <a href="mailto:syndicationadmin@hhs.gov">syndicationadmin@hhs.gov</a> 
License: <a href="http://www.gnu.org/licenses/gpl.html">GNU GENERAL PUBLIC LICENSE</a>

<h1 id="hhs-media-services-api-media">media</h1>

Information about media

## Get MediaItems

> Code samples

```bash
curl https://example.com/resources/media.json \
  -H 'Accept: application/json'
```

`GET /resources/media.json`

Media Items Listings

<h3 id="get-mediaitems-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max|query|integer(int32)|false|The maximum number of records to return|
|offset|query|integer(int32)|false|The offset of the records set to return for pagination.|
|sort|query|string|false|* Set of fields to sort the records by.|
|order|query|string|false|* The ascending or descending order.|
|mediaTypes|query|string|false|Find all media items belonging to the specified media type[s].|
|name|query|string|false|Find all media items containing the provided name, case insensitive.|
|collectionId|query|integer(int32)|false|Restrict filtering to media items in a specific collection.|
|nameContains|query|string|false|Find all media items containing the partial name, case insensitive.|
|descriptionContains|query|string|false|Find all media items containing the provided partial description, case insensitive.|
|sourceUrl|query|string|false|Find all media items which have the provided sourceUrl, case insensitive.|
|sourceUrlContains|query|string|false|Find all media items which contain the provided partial sourceUrl, case insensitive.|
|customThumbnailUrl|query|string|false|Find all media items which have the provided customThumbnailUrl, case insensitive.|
|customThumbnailUrlContains|query|string|false|Find all media items which contain the provided partial customThumbnailUrl, case insensitive.|
|dateContentAuthored|query|string(date)|false|Find all media items authored on the provided day (RFC 3339, time ignored).|
|dateContentUpdated|query|string(date)|false|Find all media items updated on the provided day (RFC 3339, time ignored).|
|dateContentPublished|query|string(date)|false|Find all media items published on the provided day (RFC 3339, time ignored).|
|dateContentReviewed|query|string(date)|false|Find all media items reviewed on the provided day (RFC 3339, time ignored).|
|dateSyndicationCaptured|query|string(date)|false|Find all media items syndicated on the provided day (RFC 3339, time ignored).|
|dateSyndicationUpdated|query|string(date)|false|Find all media items updated through the syndication system on the provided day, (RFC 3339, time ignored).|
|contentAuthoredSinceDate|query|string(date)|false|Find all media items authored since the provided day (RFC 3339, time ignored).|
|contentAuthoredBeforeDate|query|string(date)|false|Find all media items authored before the provided day (RFC 3339, time ignored).|
|contentAuthoredInRange|query|string|false|Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored).|
|contentUpdatedSinceDate|query|string(date)|false|Find all media items updated since the provided day (RFC 3339, time ignored).|
|contentUpdatedBeforeDate|query|string(date)|false|Find all media items updated before the provided day (RFC 3339, time ignored).|
|contentUpdatedInRange|query|string|false|Find all media items updated between the provided start and end days (RFC 3339, comma separated, time ignored).|
|contentPublishedSinceDate|query|string(date)|false|Find all media items updated since the provided day (RFC 3339, time ignored).|
|contentPublishedBeforeDate|query|string(date)|false|Find all media items published before the provided day (RFC 3339, time ignored).|
|contentPublishedInRange|query|string|false|Find all media items published between the provided start and end days (RFC 3339, comma separated, time ignored).|
|contentReviewedSinceDate|query|string(date)|false|Find all media items reviewed since the provided day (RFC 3339, time ignored).|
|contentReviewedBeforeDate|query|string(date)|false|Find all media items reviewed before the provided day (RFC 3339, time ignored).|
|contentReviewedInRange|query|string|false|Find all media items reviewed between the provided start and end days (RFC 3339, comma separated, time ignored).|
|syndicationCapturedSinceDate|query|string(date)|false|Find all media items authored since the provided day (RFC 3339, time ignored).|
|syndicationCapturedBeforeDate|query|string(date)|false|Find all media items authored before the provided day (RFC 3339, time ignored).|
|syndicationCapturedInRange|query|string|false|Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored).|
|syndicationUpdatedSinceDate|query|string(date)|false|Find all media items updated since the provided day, (RFC 3339, time ignored).|
|syndicationUpdatedBeforeDate|query|string(date)|false|Find all media items updated before the provided day, (RFC 3339, time ignored).|
|syndicationUpdatedInRange|query|string|false|Find all media items updated between the provided start and end days, (RFC 3339, comma separated, time ignored).|
|syndicationVisibleSinceDate|query|string(date)|false|Find all media items visible since the provided day, (RFC 3339, time ignored).|
|syndicationVisibleBeforeDate|query|string(date)|false|Find all media items visible before the provided day, (RFC 3339, time ignored).|
|syndicationVisibleInRange|query|string(date)|false|Find all media items visible between the provided start and end days, (RFC 3339, comma separated, time ignored).|
|languageId|query|integer(int64)|false|Find all media items written in the language specified by Id.|
|languageName|query|string|false|Find all media items written in the language specified by name, case insensitive.|
|languageIsoCode|query|string|false|Find all media items written in the language specified by 639-2 isoCode , case insensitive.|
|hash|query|string|false|Find all media items which match the provided hash, case insensitive.|
|hashContains|query|string|false|Find all media items which match the provided partial hash, case insensitive.|
|sourceId|query|integer(int64)|false|Find all media items that belong to the source specified by Id.|
|sourceName|query|string|false|Find all media items that belong to the source specified by name, case insensitive.|
|sourceNameContains|query|string|false|Find all media items that belong to the source specified by partial name, case insensitive.|
|sourceAcronym|query|string|false|Find all media items that belong to the source specified by acronym, case insensitive.|
|sourceAcronymContains|query|string|false|Find all media items that belong to the source specified by partial acronym, case insensitive.|
|tagIds|query|string|false|Find only media items tagged with the specified tag Ids.|
|restrictToSet|query|string|false|Find only media from within the supplied list of Ids.|
|createdBy|query|string|false|Find all media items containing the createdBy value.|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "campaigns": [
          {
            "contactEmail": "string",
            "description": "string",
            "endDate": "1970-01-01",
            "id": 0,
            "name": "string",
            "source": {
              "acronym": "string",
              "contactEmail": "string",
              "id": 0,
              "largeLogoUrl": "string",
              "name": "string",
              "smallLogoUrl": "string",
              "websiteUrl": "string"
            },
            "startDate": "1970-01-01"
          }
        ],
        "createdBy": "string",
        "customAttributionUrl": "string",
        "customPreviewUrl": "string",
        "customThumbnailUrl": "string",
        "dateContentAuthored": "1970-01-01",
        "dateContentPublished": "1970-01-01",
        "dateContentReviewed": "1970-01-01",
        "dateContentUpdated": "1970-01-01",
        "dateSyndicationCaptured": "1970-01-01",
        "dateSyndicationUpdated": "1970-01-01",
        "dateSyndicationVisible": "1970-01-01",
        "description": "string",
        "extendedAttributes": [
          {
            "id": 0,
            "name": "string",
            "value": "string"
          }
        ],
        "externalGuid": "string",
        "foreignSyndicationAPIUrl": "string",
        "hash": "string",
        "id": 0,
        "language": {
          "id": 0,
          "isActive": true,
          "isoCode": "string",
          "name": "string"
        },
        "mediaType": "string",
        "name": "string",
        "source": {
          "acronym": "string",
          "contactEmail": "string",
          "id": 0,
          "largeLogoUrl": "string",
          "name": "string",
          "smallLogoUrl": "string",
          "websiteUrl": "string"
        },
        "sourceUrl": "string",
        "targetUrl": "string"
      }
    ]
  }
]
```

<h3 id="get-mediaitems-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the list of MediaItems matching the specified query parameters.|Inline|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-mediaitems-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MediaItemWrapped](#schemamediaitemwrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the list of featured content in the syndication system

> Code samples

```bash
curl https://example.com/resources/media/featured.json \
  -H 'Accept: application/json'
```

`GET /resources/media/featured.json`

Get the list of featured content in the syndication system

<h3 id="get-the-list-of-featured-content-in-the-syndication-system-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|The name of the property to which sorting will be applied|
|max|query|integer(int32)|false|The maximum number of records to return|
|offset|query|integer(int32)|false|Return records starting at the offset index.|

> Example responses

> 200 Response

```json
[
  {
    "campaigns": [
      {
        "contactEmail": "string",
        "description": "string",
        "endDate": "1970-01-01",
        "id": 0,
        "name": "string",
        "source": {
          "acronym": "string",
          "contactEmail": "string",
          "id": 0,
          "largeLogoUrl": "string",
          "name": "string",
          "smallLogoUrl": "string",
          "websiteUrl": "string"
        },
        "startDate": "1970-01-01"
      }
    ],
    "createdBy": "string",
    "customAttributionUrl": "string",
    "customPreviewUrl": "string",
    "customThumbnailUrl": "string",
    "dateContentAuthored": "1970-01-01",
    "dateContentPublished": "1970-01-01",
    "dateContentReviewed": "1970-01-01",
    "dateContentUpdated": "1970-01-01",
    "dateSyndicationCaptured": "1970-01-01",
    "dateSyndicationUpdated": "1970-01-01",
    "dateSyndicationVisible": "1970-01-01",
    "description": "string",
    "extendedAttributes": [
      {
        "id": 0,
        "name": "string",
        "value": "string"
      }
    ],
    "externalGuid": "string",
    "foreignSyndicationAPIUrl": "string",
    "hash": "string",
    "id": 0,
    "language": {
      "id": 0,
      "isActive": true,
      "isoCode": "string",
      "name": "string"
    },
    "mediaType": "string",
    "name": "string",
    "source": {
      "acronym": "string",
      "contactEmail": "string",
      "id": 0,
      "largeLogoUrl": "string",
      "name": "string",
      "smallLogoUrl": "string",
      "websiteUrl": "string"
    },
    "sourceUrl": "string",
    "targetUrl": "string"
  }
]
```

<h3 id="get-the-list-of-featured-content-in-the-syndication-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get the list of featured content in the syndication system|Inline|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-the-list-of-featured-content-in-the-syndication-system-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MediaItem](#schemamediaitem)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get MediaItems by popularity

> Code samples

```bash
curl https://example.com/resources/media/mostPopularMedia.string \
  -H 'Accept: application/json'
```

`GET /resources/media/mostPopularMedia.{format}`

Get the media with the highest ratings.

<h3 id="get-mediaitems-by-popularity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max|query|integer(int32)|false|The maximum number of records to return|
|offset|query|integer(int32)|false|The offset of the records set to return for pagination.|
|format|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "campaigns": [
          {
            "contactEmail": "string",
            "description": "string",
            "endDate": "1970-01-01",
            "id": 0,
            "name": "string",
            "source": {
              "acronym": "string",
              "contactEmail": "string",
              "id": 0,
              "largeLogoUrl": "string",
              "name": "string",
              "smallLogoUrl": "string",
              "websiteUrl": "string"
            },
            "startDate": "1970-01-01"
          }
        ],
        "createdBy": "string",
        "customAttributionUrl": "string",
        "customPreviewUrl": "string",
        "customThumbnailUrl": "string",
        "dateContentAuthored": "1970-01-01",
        "dateContentPublished": "1970-01-01",
        "dateContentReviewed": "1970-01-01",
        "dateContentUpdated": "1970-01-01",
        "dateSyndicationCaptured": "1970-01-01",
        "dateSyndicationUpdated": "1970-01-01",
        "dateSyndicationVisible": "1970-01-01",
        "description": "string",
        "extendedAttributes": [
          {
            "id": 0,
            "name": "string",
            "value": "string"
          }
        ],
        "externalGuid": "string",
        "foreignSyndicationAPIUrl": "string",
        "hash": "string",
        "id": 0,
        "language": {
          "id": 0,
          "isActive": true,
          "isoCode": "string",
          "name": "string"
        },
        "mediaType": "string",
        "name": "string",
        "source": {
          "acronym": "string",
          "contactEmail": "string",
          "id": 0,
          "largeLogoUrl": "string",
          "name": "string",
          "smallLogoUrl": "string",
          "websiteUrl": "string"
        },
        "sourceUrl": "string",
        "targetUrl": "string"
      }
    ]
  }
]
```

<h3 id="get-mediaitems-by-popularity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the list of MediaItems with the highest ratings.|Inline|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-mediaitems-by-popularity-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MediaItemWrapped](#schemamediaitemwrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get MediaItems by search query

> Code samples

```bash
curl 'https://example.com/resources/media/searchResults.json?q=string' \
  -H 'Accept: application/json'
```

`GET /resources/media/searchResults.json`

Full search

<h3 id="get-mediaitems-by-search-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|The search query supplied by the user|
|max|query|integer(int32)|false|The maximum number of records to return|
|offset|query|integer(int32)|false|The offset of the records set to return for pagination.|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "campaigns": [
          {
            "contactEmail": "string",
            "description": "string",
            "endDate": "1970-01-01",
            "id": 0,
            "name": "string",
            "source": {
              "acronym": "string",
              "contactEmail": "string",
              "id": 0,
              "largeLogoUrl": "string",
              "name": "string",
              "smallLogoUrl": "string",
              "websiteUrl": "string"
            },
            "startDate": "1970-01-01"
          }
        ],
        "createdBy": "string",
        "customAttributionUrl": "string",
        "customPreviewUrl": "string",
        "customThumbnailUrl": "string",
        "dateContentAuthored": "1970-01-01",
        "dateContentPublished": "1970-01-01",
        "dateContentReviewed": "1970-01-01",
        "dateContentUpdated": "1970-01-01",
        "dateSyndicationCaptured": "1970-01-01",
        "dateSyndicationUpdated": "1970-01-01",
        "dateSyndicationVisible": "1970-01-01",
        "description": "string",
        "extendedAttributes": [
          {
            "id": 0,
            "name": "string",
            "value": "string"
          }
        ],
        "externalGuid": "string",
        "foreignSyndicationAPIUrl": "string",
        "hash": "string",
        "id": 0,
        "language": {
          "id": 0,
          "isActive": true,
          "isoCode": "string",
          "name": "string"
        },
        "mediaType": "string",
        "name": "string",
        "source": {
          "acronym": "string",
          "contactEmail": "string",
          "id": 0,
          "largeLogoUrl": "string",
          "name": "string",
          "smallLogoUrl": "string",
          "websiteUrl": "string"
        },
        "sourceUrl": "string",
        "targetUrl": "string"
      }
    ]
  }
]
```

<h3 id="get-mediaitems-by-search-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the list of MediaItems matching the search query 'q'.<p>Please enter keyword or URL in search query 'q'.|Inline|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-mediaitems-by-search-query-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MediaItemWrapped](#schemamediaitemwrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get MediaItem by ID

> Code samples

```bash
curl https://example.com/resources/media/0.json \
  -H 'Accept: application/json'
```

`GET /resources/media/{id}.json`

Information about a specific media item

<h3 id="get-mediaitem-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the record to look up|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "campaigns": [
          {
            "contactEmail": "string",
            "description": "string",
            "endDate": "1970-01-01",
            "id": 0,
            "name": "string",
            "source": {
              "acronym": "string",
              "contactEmail": "string",
              "id": 0,
              "largeLogoUrl": "string",
              "name": "string",
              "smallLogoUrl": "string",
              "websiteUrl": "string"
            },
            "startDate": "1970-01-01"
          }
        ],
        "createdBy": "string",
        "customAttributionUrl": "string",
        "customPreviewUrl": "string",
        "customThumbnailUrl": "string",
        "dateContentAuthored": "1970-01-01",
        "dateContentPublished": "1970-01-01",
        "dateContentReviewed": "1970-01-01",
        "dateContentUpdated": "1970-01-01",
        "dateSyndicationCaptured": "1970-01-01",
        "dateSyndicationUpdated": "1970-01-01",
        "dateSyndicationVisible": "1970-01-01",
        "description": "string",
        "extendedAttributes": [
          {
            "id": 0,
            "name": "string",
            "value": "string"
          }
        ],
        "externalGuid": "string",
        "foreignSyndicationAPIUrl": "string",
        "hash": "string",
        "id": 0,
        "language": {
          "id": 0,
          "isActive": true,
          "isoCode": "string",
          "name": "string"
        },
        "mediaType": "string",
        "name": "string",
        "source": {
          "acronym": "string",
          "contactEmail": "string",
          "id": 0,
          "largeLogoUrl": "string",
          "name": "string",
          "smallLogoUrl": "string",
          "websiteUrl": "string"
        },
        "sourceUrl": "string",
        "targetUrl": "string"
      }
    ]
  }
]
```

<h3 id="get-mediaitem-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the MediaItem identified by the 'id'.|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-mediaitem-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MediaItemWrapped](#schemamediaitemwrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get content for MediaItem

> Code samples

```bash
curl https://example.com/resources/media/0/content \
  -H 'Accept: application/json'
```

`GET /resources/media/{id}/content`

The actual media content (html, image, etc...)

<h3 id="get-content-for-mediaitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the media to show content for.|
|calledByBuild|query|boolean|false|The method that called this method|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-content-for-mediaitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the raw content (html, image, etc...) for the MediaItem identified by the 'id'.|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get embed code for MediaItem

> Code samples

```bash
curl https://example.com/resources/media/0/embed.json \
  -H 'Accept: application/json'
```

`GET /resources/media/{id}/embed.json`

Get the javascript or iframe embed code for this item (to embed it on a web page).

<h3 id="get-embed-code-for-mediaitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the media to get embed code for.|
|flavor|query|string|false|Currently supports 'iframe', defaults to 'javascript'.|
|width|query|integer(int32)|false|The width of the generated iframe.|
|height|query|integer(int32)|false|The height of the generated iframe.|
|iframeName|query|string|false|The name of the iframe element|
|excludeJquery|query|boolean|false|Should a reference to the JQuery Library be omitted?|
|excludeDiv|query|boolean|false|Should the div to insert content into be omitted?|
|divId|query|string|false|Should the div to insert content into have a specific name?|
|displayMethod|query|string|false|Method used to render an html request. Accepts one: [mv, list, feed]|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-embed-code-for-mediaitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the javascript or iframe embed code for the MediaItem identified by 'id'.|Inline|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Tag by ID

> Code samples

```bash
curl https://example.com/resources/media/0/preview.jpg \
  -H 'Accept: application/json'
```

`GET /resources/media/{id}/preview.jpg`

Get the jpg preview of the content item where applicable.

<h3 id="get-tag-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the media to get a preview for.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-tag-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the JPG preview, where applicable, for the MediaItem identified by the 'id'.|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get related MediaItems by ID

> Code samples

```bash
curl https://example.com/resources/media/0/relatedMedia.string \
  -H 'Accept: application/json'
```

`GET /resources/media/{id}/relatedMedia.{format}`

Get the media related to the current media item.

<h3 id="get-related-mediaitems-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the media item to get related media for|
|max|query|integer(int32)|false|The maximum number of records to return|
|offset|query|integer(int32)|false|Return records starting at the offset index.|
|sort|query|string|false|The name of the property to which sorting will be applied|
|format|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "campaigns": [
          {
            "contactEmail": "string",
            "description": "string",
            "endDate": "1970-01-01",
            "id": 0,
            "name": "string",
            "source": {
              "acronym": "string",
              "contactEmail": "string",
              "id": 0,
              "largeLogoUrl": "string",
              "name": "string",
              "smallLogoUrl": "string",
              "websiteUrl": "string"
            },
            "startDate": "1970-01-01"
          }
        ],
        "createdBy": "string",
        "customAttributionUrl": "string",
        "customPreviewUrl": "string",
        "customThumbnailUrl": "string",
        "dateContentAuthored": "1970-01-01",
        "dateContentPublished": "1970-01-01",
        "dateContentReviewed": "1970-01-01",
        "dateContentUpdated": "1970-01-01",
        "dateSyndicationCaptured": "1970-01-01",
        "dateSyndicationUpdated": "1970-01-01",
        "dateSyndicationVisible": "1970-01-01",
        "description": "string",
        "extendedAttributes": [
          {
            "id": 0,
            "name": "string",
            "value": "string"
          }
        ],
        "externalGuid": "string",
        "foreignSyndicationAPIUrl": "string",
        "hash": "string",
        "id": 0,
        "language": {
          "id": 0,
          "isActive": true,
          "isoCode": "string",
          "name": "string"
        },
        "mediaType": "string",
        "name": "string",
        "source": {
          "acronym": "string",
          "contactEmail": "string",
          "id": 0,
          "largeLogoUrl": "string",
          "name": "string",
          "smallLogoUrl": "string",
          "websiteUrl": "string"
        },
        "sourceUrl": "string",
        "targetUrl": "string"
      }
    ]
  }
]
```

<h3 id="get-related-mediaitems-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the list of MediaItems related to the MediaItem identified by the 'id'.|Inline|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-related-mediaitems-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MediaItemWrapped](#schemamediaitemwrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get syndicated content for MediaItem

> Code samples

```bash
curl https://example.com/resources/media/0/syndicate.string \
  -H 'Accept: application/json'
```

`GET /resources/media/{id}/syndicate.{format}`

Get syndicated content.

<h3 id="get-syndicated-content-for-mediaitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the media to show embed code for.|
|cssClass|query|string|false|The css class to target for extraction.|
|stripStyles|query|boolean|false|Remove in-line styles from content.|
|stripScripts|query|boolean|false|Remove script tags from content.|
|stripImages|query|boolean|false|Remove image tags from content.|
|stripBreaks|query|boolean|false|Remove break tags from content.|
|stripClasses|query|boolean|false|Remove class attributes from content (except 'syndicate').|
|font-size|query|integer(int32)|false|Set font size (in points) of p, div, and span tags.|
|imageFloat|query|string|false|Accepts valid CSS float options, such as 'left' or 'right'. Will inject a style into the content before rendering.|
|imageMargin|query|string|false|Accepts 4 CSV values representing pixel sizes of margin similar to CSS. Default format is 'north,east,south,west' - for example '0,10,10,0' would put a 10 pixel margin on the right and bottom sides of an image. Will inject a style into the content before rendering.|
|autoplay|query|boolean|false|If content is a video, the embeded video will auto play when loaded.|
|rel|query|boolean|false|If content is a video, related items will be shown at the end of playback.|
|format|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "content": "string",
      "description": "string",
      "id": 0,
      "mediaType": "string",
      "name": "string",
      "sourceUrl": "string"
    }
  ]
}
```

<h3 id="get-syndicated-content-for-mediaitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the syndicated content for a given MediaItem in the specified 'format' (HTML or JSON).|[SyndicateMarshallerWrapped](#schemasyndicatemarshallerwrapped)|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get JPG thumbnail for MediaItem

> Code samples

```bash
curl https://example.com/resources/media/0/thumbnail.jpg \
  -H 'Accept: application/json'
```

`GET /resources/media/{id}/thumbnail.jpg`

Get the jpg thumbnail of the content item where applicable.

<h3 id="get-jpg-thumbnail-for-mediaitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the media to get a thumbnail for.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-jpg-thumbnail-for-mediaitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the JPG thumbnail, where applicable, for the MediaItem identified by the 'id'.|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Youtube metadata for MediaItem

> Code samples

```bash
curl https://example.com/resources/media/0/youtubeMetaData.json \
  -H 'Accept: application/json'
```

`GET /resources/media/{id}/youtubeMetaData.json`

Youtube meta-data for a video item.

<h3 id="get-youtube-metadata-for-mediaitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the video to show meta data for.|

> Example responses

> 200 Response

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {}
  ]
}
```

<h3 id="get-youtube-metadata-for-mediaitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the Youtube metadata, where applicable, for the MediaItem identified by the 'id'.|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-youtube-metadata-for-mediaitem-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[YoutubeMetadata](#schemayoutubemetadata)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hhs-media-services-api-languages">languages</h1>

Information about languages

## Get Languages

> Code samples

```bash
curl https://example.com/resources/languages.json \
  -H 'Accept: application/json'
```

`GET /resources/languages.json`

Language Listings

<h3 id="get-languages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max|query|integer(int32)|false|The maximum number of records to return|
|offset|query|integer(int32)|false|Return records starting at the offset index.|
|sort|query|string|false|The name of the property to which sorting will be applied|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "id": 0,
        "isActive": true,
        "isoCode": "string",
        "name": "string"
      }
    ]
  }
]
```

<h3 id="get-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the list Languages.|Inline|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-languages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LanguageWrapped](#schemalanguagewrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Language by ID

> Code samples

```bash
curl https://example.com/resources/languages/0.json \
  -H 'Accept: application/json'
```

`GET /resources/languages/{id}.json`

Information about a specific language

<h3 id="get-language-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the language to look up|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "id": 0,
        "isActive": true,
        "isoCode": "string",
        "name": "string"
      }
    ]
  }
]
```

<h3 id="get-language-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the Language identified by the 'id'.|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-language-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LanguageWrapped](#schemalanguagewrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hhs-media-services-api-mediatypes">mediaTypes</h1>

Information about media types

## Get MediaTypes

> Code samples

```bash
curl https://example.com/resources/mediaTypes.string \
  -H 'Accept: application/json'
```

`GET /resources/mediaTypes.{format}`

Information about media types

<h3 id="get-mediatypes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "description": "string",
        "name": "string"
      }
    ]
  }
]
```

<h3 id="get-mediatypes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the list of available MediaTypes.|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-mediatypes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MediaTypeHolderWrapped](#schemamediatypeholderwrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hhs-media-services-api-tags">tags</h1>

Information about tags

## Get Tags

> Code samples

```bash
curl https://example.com/resources/tags.string \
  -H 'Accept: application/json'
```

`GET /resources/tags.{format}`

List of Tags

<h3 id="get-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|The name of the property to which sorting will be applied|
|max|query|integer(int32)|false|The maximum number of records to return|
|offset|query|integer(int32)|false|Return records starting at the offset index.|
|name|query|string|false|Return tags[s] matching the supplied name|
|nameContains|query|string|false|Return tags which contain the supplied partial name.|
|mediaId|query|integer(int64)|false|Return tags associated with the supplied media id.|
|typeId|query|integer(int64)|false|Return tags belonging to the supplied tag type id.|
|typeName|query|string|false|Return tags belonging to the supplied tag type name.|
|format|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "id": 0,
        "language": {
          "id": 0,
          "isActive": true,
          "isoCode": "string",
          "name": "string"
        },
        "name": "string",
        "type": {
          "id": 0,
          "name": "string"
        }
      }
    ]
  }
]
```

<h3 id="get-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the list of Tags matching the specified query parameters in the specified 'format'.|Inline|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagMarshallerWrapped](#schematagmarshallerwrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get TagLanguages

> Code samples

```bash
curl https://example.com/resources/tags/tagLanguages.string \
  -H 'Accept: application/json'
```

`GET /resources/tags/tagLanguages.{format}`

List of Tag Languages

<h3 id="get-taglanguages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "id": 0,
        "isActive": true,
        "isoCode": "string",
        "name": "string"
      }
    ]
  }
]
```

<h3 id="get-taglanguages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the list of TagLanguages|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-taglanguages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagLanguageMarshallerWrapped](#schemataglanguagemarshallerwrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get MediaItems for Tag

> Code samples

```bash
curl https://example.com/resources/tags/tagTypes.string \
  -H 'Accept: application/json'
```

`GET /resources/tags/tagTypes.{format}`

List of Types

<h3 id="get-mediaitems-for-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "id": 0,
        "name": "string"
      }
    ]
  }
]
```

<h3 id="get-mediaitems-for-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Renders the list of MediaItems associated with the Tag identified by the 'id'.|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-mediaitems-for-tag-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagTypeMarshallerWrapped](#schematagtypemarshallerwrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Tag by ID

> Code samples

```bash
curl https://example.com/resources/tags/0.string \
  -H 'Accept: application/json'
```

`GET /resources/tags/{id}.{format}`

Information about a specific tag

<h3 id="get-tag-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the record to look up|
|format|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "id": 0,
        "language": {
          "id": 0,
          "isActive": true,
          "isoCode": "string",
          "name": "string"
        },
        "name": "string",
        "type": {
          "id": 0,
          "name": "string"
        }
      }
    ]
  }
]
```

<h3 id="get-tag-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the Tag identified by the 'id' in the specified 'format'.|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-tag-by-id-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagMarshallerWrapped](#schematagmarshallerwrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get MediaItems for Tag

> Code samples

```bash
curl https://example.com/resources/tags/0/media.string \
  -H 'Accept: application/json'
```

`GET /resources/tags/{id}/media.{format}`

MediaItem

<h3 id="get-mediaitems-for-tag-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the tag to look up|
|sort|query|string|false|The name of the property to which sorting will be applied|
|max|query|integer(int32)|false|The maximum number of records to return|
|offset|query|integer(int32)|false|Return records starting at the offset index.|
|format|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "campaigns": [
          {
            "contactEmail": "string",
            "description": "string",
            "endDate": "1970-01-01",
            "id": 0,
            "name": "string",
            "source": {
              "acronym": "string",
              "contactEmail": "string",
              "id": 0,
              "largeLogoUrl": "string",
              "name": "string",
              "smallLogoUrl": "string",
              "websiteUrl": "string"
            },
            "startDate": "1970-01-01"
          }
        ],
        "createdBy": "string",
        "customAttributionUrl": "string",
        "customPreviewUrl": "string",
        "customThumbnailUrl": "string",
        "dateContentAuthored": "1970-01-01",
        "dateContentPublished": "1970-01-01",
        "dateContentReviewed": "1970-01-01",
        "dateContentUpdated": "1970-01-01",
        "dateSyndicationCaptured": "1970-01-01",
        "dateSyndicationUpdated": "1970-01-01",
        "dateSyndicationVisible": "1970-01-01",
        "description": "string",
        "extendedAttributes": [
          {
            "id": 0,
            "name": "string",
            "value": "string"
          }
        ],
        "externalGuid": "string",
        "foreignSyndicationAPIUrl": "string",
        "hash": "string",
        "id": 0,
        "language": {
          "id": 0,
          "isActive": true,
          "isoCode": "string",
          "name": "string"
        },
        "mediaType": "string",
        "name": "string",
        "source": {
          "acronym": "string",
          "contactEmail": "string",
          "id": 0,
          "largeLogoUrl": "string",
          "name": "string",
          "smallLogoUrl": "string",
          "websiteUrl": "string"
        },
        "sourceUrl": "string",
        "targetUrl": "string"
      }
    ]
  }
]
```

<h3 id="get-mediaitems-for-tag-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the list of MediaItems associated with the Tag identified by the 'id'.|Inline|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-mediaitems-for-tag-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MediaItemWrapped](#schemamediaitemwrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get related Tags by ID

> Code samples

```bash
curl https://example.com/resources/tags/0/related.string \
  -H 'Accept: application/json'
```

`GET /resources/tags/{id}/related.{format}`

Information about related tags to a specific tag

<h3 id="get-related-tags-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the tag to look up|
|sort|query|string|false|The name of the property to which sorting will be applied|
|max|query|integer(int32)|false|The maximum number of records to return|
|offset|query|integer(int32)|false|Return records starting at the offset index.|
|format|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "id": 0,
        "language": {
          "id": 0,
          "isActive": true,
          "isoCode": "string",
          "name": "string"
        },
        "name": "string",
        "type": {
          "id": 0,
          "name": "string"
        }
      }
    ]
  }
]
```

<h3 id="get-related-tags-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the list of Tags related to the Tag identified by the 'id' in the specified format.|Inline|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-related-tags-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagMarshallerWrapped](#schematagmarshallerwrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get MediaItems for Tag

> Code samples

```bash
curl https://example.com/resources/tags/0/syndicate.string \
  -H 'Accept: application/json'
```

`GET /resources/tags/{id}/syndicate.{format}`

MediaItem

<h3 id="get-mediaitems-for-tag-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the record to look up|
|displayMethod|query|string|false|Method used to render an html request. Accepts one: [mv, list, feed]|
|format|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="get-mediaitems-for-tag-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Renders the list of MediaItems associated with the Tag identified by the 'id'.|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hhs-media-services-api-campaigns">campaigns</h1>

Information about campaigns

## Get Campaigns

> Code samples

```bash
curl https://example.com/resources/campaigns.json \
  -H 'Accept: application/json'
```

`GET /resources/campaigns.json`

Media Listings for a specific campaign

<h3 id="get-campaigns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max|query|integer(int32)|false|The maximum number of records to return|
|offset|query|integer(int32)|false|The offset of the records set to return for pagination|
|sort|query|string|false|* Set of fields to sort the records by.|

> Example responses

> 200 Response

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "contactEmail": "string",
      "description": "string",
      "endDate": "1970-01-01",
      "id": 0,
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "startDate": "1970-01-01"
    }
  ]
}
```

<h3 id="get-campaigns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the list of Campaigns.|[CampaignWrapped](#schemacampaignwrapped)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Campaign by ID

> Code samples

```bash
curl https://example.com/resources/campaigns/0.json \
  -H 'Accept: application/json'
```

`GET /resources/campaigns/{id}.json`

Information about a specific campaign

<h3 id="get-campaign-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the record to look up|

> Example responses

> 200 Response

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "contactEmail": "string",
      "description": "string",
      "endDate": "1970-01-01",
      "id": 0,
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "startDate": "1970-01-01"
    }
  ]
}
```

<h3 id="get-campaign-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the Campaign identified by the 'id'.|[CampaignWrapped](#schemacampaignwrapped)|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get MediaItems by Campaign ID

> Code samples

```bash
curl https://example.com/resources/campaigns/0/media.json \
  -H 'Accept: application/json'
```

`GET /resources/campaigns/{id}/media.json`

Campaign Listings

<h3 id="get-mediaitems-by-campaign-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the campaign to find media items for|
|sort|query|string|false|The name of the property to which sorting will be applied|
|max|query|integer(int32)|false|The maximum number of records to return|
|offset|query|integer(int32)|false|The offset of the records set to return for pagination|

> Example responses

> 200 Response

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "campaigns": [
        {
          "contactEmail": "string",
          "description": "string",
          "endDate": "1970-01-01",
          "id": 0,
          "name": "string",
          "source": {
            "acronym": "string",
            "contactEmail": "string",
            "id": 0,
            "largeLogoUrl": "string",
            "name": "string",
            "smallLogoUrl": "string",
            "websiteUrl": "string"
          },
          "startDate": "1970-01-01"
        }
      ],
      "createdBy": "string",
      "customAttributionUrl": "string",
      "customPreviewUrl": "string",
      "customThumbnailUrl": "string",
      "dateContentAuthored": "1970-01-01",
      "dateContentPublished": "1970-01-01",
      "dateContentReviewed": "1970-01-01",
      "dateContentUpdated": "1970-01-01",
      "dateSyndicationCaptured": "1970-01-01",
      "dateSyndicationUpdated": "1970-01-01",
      "dateSyndicationVisible": "1970-01-01",
      "description": "string",
      "extendedAttributes": [
        {
          "id": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "externalGuid": "string",
      "foreignSyndicationAPIUrl": "string",
      "hash": "string",
      "id": 0,
      "language": {
        "id": 0,
        "isActive": true,
        "isoCode": "string",
        "name": "string"
      },
      "mediaType": "string",
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "sourceUrl": "string",
      "targetUrl": "string"
    }
  ]
}
```

<h3 id="get-mediaitems-by-campaign-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the list of MediaItems for the Campaign identified by the 'id'.|[MediaItemWrapped](#schemamediaitemwrapped)|
|400|Bad Request|Bad Request|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get MediaItems for Campaign

> Code samples

```bash
curl https://example.com/resources/campaigns/0/syndicate.string \
  -H 'Accept: application/json'
```

`GET /resources/campaigns/{id}/syndicate.{format}`

MediaItem

<h3 id="get-mediaitems-for-campaign-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the record to look up|
|displayMethod|query|string|false|Method used to render an html request. Accepts one: [mv, list, feed]|
|format|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "content": "string",
      "description": "string",
      "id": 0,
      "mediaType": "string",
      "name": "string",
      "sourceUrl": "string"
    }
  ]
}
```

<h3 id="get-mediaitems-for-campaign-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Renders the list of MediaItems associated with the Tag identified by the 'id'.|[SyndicateMarshallerWrapped](#schemasyndicatemarshallerwrapped)|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hhs-media-services-api-sources">sources</h1>

Information about tags

## Get Sources

> Code samples

```bash
curl https://example.com/resources/sources.json \
  -H 'Accept: application/json'
```

`GET /resources/sources.json`

Source Listings

<h3 id="get-sources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max|query|integer(int32)|false|The maximum number of records to return|
|offset|query|integer(int32)|false|Return records starting at the offset index.|
|sort|query|string|false|The name of the property to which sorting will be applied|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      }
    ]
  }
]
```

<h3 id="get-sources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the list of Sources.|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-sources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SourceWrapped](#schemasourcewrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Source by ID

> Code samples

```bash
curl https://example.com/resources/sources/0.json \
  -H 'Accept: application/json'
```

`GET /resources/sources/{id}.json`

Information about a specific source.

<h3 id="get-source-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the source to look up|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      }
    ]
  }
]
```

<h3 id="get-source-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the Source identified by the 'id'.|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-source-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SourceWrapped](#schemasourcewrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get MediaItems for Source

> Code samples

```bash
curl https://example.com/resources/sources/0/syndicate.string \
  -H 'Accept: application/json'
```

`GET /resources/sources/{id}/syndicate.{format}`

MediaItem

<h3 id="get-mediaitems-for-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the record to look up|
|displayMethod|query|string|false|Method used to render an html request. Accepts one: [mv, list, feed]|
|format|path|string|true|Automatically added|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "campaigns": [
          {
            "contactEmail": "string",
            "description": "string",
            "endDate": "1970-01-01",
            "id": 0,
            "name": "string",
            "source": {
              "acronym": "string",
              "contactEmail": "string",
              "id": 0,
              "largeLogoUrl": "string",
              "name": "string",
              "smallLogoUrl": "string",
              "websiteUrl": "string"
            },
            "startDate": "1970-01-01"
          }
        ],
        "createdBy": "string",
        "customAttributionUrl": "string",
        "customPreviewUrl": "string",
        "customThumbnailUrl": "string",
        "dateContentAuthored": "1970-01-01",
        "dateContentPublished": "1970-01-01",
        "dateContentReviewed": "1970-01-01",
        "dateContentUpdated": "1970-01-01",
        "dateSyndicationCaptured": "1970-01-01",
        "dateSyndicationUpdated": "1970-01-01",
        "dateSyndicationVisible": "1970-01-01",
        "description": "string",
        "extendedAttributes": [
          {
            "id": 0,
            "name": "string",
            "value": "string"
          }
        ],
        "externalGuid": "string",
        "foreignSyndicationAPIUrl": "string",
        "hash": "string",
        "id": 0,
        "language": {
          "id": 0,
          "isActive": true,
          "isoCode": "string",
          "name": "string"
        },
        "mediaType": "string",
        "name": "string",
        "source": {
          "acronym": "string",
          "contactEmail": "string",
          "id": 0,
          "largeLogoUrl": "string",
          "name": "string",
          "smallLogoUrl": "string",
          "websiteUrl": "string"
        },
        "sourceUrl": "string",
        "targetUrl": "string"
      }
    ]
  }
]
```

<h3 id="get-mediaitems-for-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Renders the list of MediaItems associated with the Source identified by the 'id'.|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-mediaitems-for-source-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MediaItemWrapped](#schemamediaitemwrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hhs-media-services-api-resources">resources</h1>

Global Search

## Get Resources by search query

> Code samples

```bash
curl 'https://example.com/resources.json?q=string' \
  -H 'Accept: application/json'
```

`GET /resources.json`

Global search

<h3 id="get-resources-by-search-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|The search query supplied by the user|

> Example responses

> 200 Response

```json
[
  null
]
```

<h3 id="get-resources-by-search-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|"Returns the list of Resources matching the search query 'q'.<p>The search query 'q' is a Lucene query.<br>The syntax for a Lucene query can be found <a href="http://lucene.apache.org/core/2_9_4/queryparsersyntax.html">here</a>."|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-resources-by-search-query-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ResourceWrapped](#schemaresourcewrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hhs-media-services-api-usermedialists">userMediaLists</h1>

Get media from user generated lists.

## Get UserMediaList by ID

> Code samples

```bash
curl https://example.com/resources/userMediaLists/0.json \
  -H 'Accept: application/json'
```

`GET /resources/userMediaLists/{id}.json`

Get a specific user media list.

<h3 id="get-usermedialist-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|The id of the record to look up|
|displayMethod|query|string(int64)|false|Method used to render an html request. Accepts one: [mv, list, feed]|

> Example responses

> 200 Response

```json
[
  {
    "callback": "string",
    "meta": {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    },
    "results": [
      {
        "campaigns": [
          {
            "contactEmail": "string",
            "description": "string",
            "endDate": "1970-01-01",
            "id": 0,
            "name": "string",
            "source": {
              "acronym": "string",
              "contactEmail": "string",
              "id": 0,
              "largeLogoUrl": "string",
              "name": "string",
              "smallLogoUrl": "string",
              "websiteUrl": "string"
            },
            "startDate": "1970-01-01"
          }
        ],
        "createdBy": "string",
        "customAttributionUrl": "string",
        "customPreviewUrl": "string",
        "customThumbnailUrl": "string",
        "dateContentAuthored": "1970-01-01",
        "dateContentPublished": "1970-01-01",
        "dateContentReviewed": "1970-01-01",
        "dateContentUpdated": "1970-01-01",
        "dateSyndicationCaptured": "1970-01-01",
        "dateSyndicationUpdated": "1970-01-01",
        "dateSyndicationVisible": "1970-01-01",
        "description": "string",
        "extendedAttributes": [
          {
            "id": 0,
            "name": "string",
            "value": "string"
          }
        ],
        "externalGuid": "string",
        "foreignSyndicationAPIUrl": "string",
        "hash": "string",
        "id": 0,
        "language": {
          "id": 0,
          "isActive": true,
          "isoCode": "string",
          "name": "string"
        },
        "mediaType": "string",
        "name": "string",
        "source": {
          "acronym": "string",
          "contactEmail": "string",
          "id": 0,
          "largeLogoUrl": "string",
          "name": "string",
          "smallLogoUrl": "string",
          "websiteUrl": "string"
        },
        "sourceUrl": "string",
        "targetUrl": "string"
      }
    ]
  }
]
```

<h3 id="get-usermedialist-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get a specific user media list by 'id'.|Inline|
|400|Bad Request|Invalid ID|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-usermedialist-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MediaItemWrapped](#schemamediaitemwrapped)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AlternateImage">AlternateImage</h2>
<!-- backwards compatibility -->
<a id="schemaalternateimage"></a>
<a id="schema_AlternateImage"></a>
<a id="tocSalternateimage"></a>
<a id="tocsalternateimage"></a>

```json
{
  "height": 0,
  "id": 0,
  "name": "string",
  "url": "string",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|false|none|none|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|url|string|false|none|none|
|width|integer(int32)|false|none|none|

<h2 id="tocS_AlternateImageWrapped">AlternateImageWrapped</h2>
<!-- backwards compatibility -->
<a id="schemaalternateimagewrapped"></a>
<a id="schema_AlternateImageWrapped"></a>
<a id="tocSalternateimagewrapped"></a>
<a id="tocsalternateimagewrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "height": 0,
      "id": 0,
      "name": "string",
      "url": "string",
      "width": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[AlternateImage](#schemaalternateimage)]|false|none|none|

<h2 id="tocS_Campaign">Campaign</h2>
<!-- backwards compatibility -->
<a id="schemacampaign"></a>
<a id="schema_Campaign"></a>
<a id="tocScampaign"></a>
<a id="tocscampaign"></a>

```json
{
  "contactEmail": "string",
  "description": "string",
  "endDate": "1970-01-01",
  "id": 0,
  "name": "string",
  "source": {
    "acronym": "string",
    "contactEmail": "string",
    "id": 0,
    "largeLogoUrl": "string",
    "name": "string",
    "smallLogoUrl": "string",
    "websiteUrl": "string"
  },
  "startDate": "1970-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactEmail|string|false|none|none|
|description|string|false|none|none|
|endDate|string(date)|false|none|none|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|source|[Source](#schemasource)|false|none|none|
|startDate|string(date)|false|none|none|

<h2 id="tocS_CampaignWrapped">CampaignWrapped</h2>
<!-- backwards compatibility -->
<a id="schemacampaignwrapped"></a>
<a id="schema_CampaignWrapped"></a>
<a id="tocScampaignwrapped"></a>
<a id="tocscampaignwrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "contactEmail": "string",
      "description": "string",
      "endDate": "1970-01-01",
      "id": 0,
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "startDate": "1970-01-01"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[Campaign](#schemacampaign)]|false|none|none|

<h2 id="tocS_Collection">Collection</h2>
<!-- backwards compatibility -->
<a id="schemacollection"></a>
<a id="schema_Collection"></a>
<a id="tocScollection"></a>
<a id="tocscollection"></a>

```json
{
  "campaigns": [
    {
      "contactEmail": "string",
      "description": "string",
      "endDate": "1970-01-01",
      "id": 0,
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "startDate": "1970-01-01"
    }
  ],
  "createdBy": "string",
  "customAttributionUrl": "string",
  "customPreviewUrl": "string",
  "customThumbnailUrl": "string",
  "dateContentAuthored": "1970-01-01",
  "dateContentPublished": "1970-01-01",
  "dateContentReviewed": "1970-01-01",
  "dateContentUpdated": "1970-01-01",
  "dateSyndicationCaptured": "1970-01-01",
  "dateSyndicationUpdated": "1970-01-01",
  "dateSyndicationVisible": "1970-01-01",
  "description": "string",
  "extendedAttributes": [
    {
      "id": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "externalGuid": "string",
  "foreignSyndicationAPIUrl": "string",
  "hash": "string",
  "id": 0,
  "language": {
    "id": 0,
    "isActive": true,
    "isoCode": "string",
    "name": "string"
  },
  "mediaType": "string",
  "name": "string",
  "source": {
    "acronym": "string",
    "contactEmail": "string",
    "id": 0,
    "largeLogoUrl": "string",
    "name": "string",
    "smallLogoUrl": "string",
    "websiteUrl": "string"
  },
  "sourceUrl": "string",
  "targetUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaigns|[[Campaign](#schemacampaign)]|false|none|none|
|createdBy|string|false|none|none|
|customAttributionUrl|string|false|none|none|
|customPreviewUrl|string|false|none|none|
|customThumbnailUrl|string|false|none|none|
|dateContentAuthored|string(date)|false|none|none|
|dateContentPublished|string(date)|false|none|none|
|dateContentReviewed|string(date)|false|none|none|
|dateContentUpdated|string(date)|false|none|none|
|dateSyndicationCaptured|string(date)|false|none|none|
|dateSyndicationUpdated|string(date)|false|none|none|
|dateSyndicationVisible|string(date)|false|none|none|
|description|string|false|none|none|
|extendedAttributes|[[ExtendedAttribute](#schemaextendedattribute)]|false|none|none|
|externalGuid|string|false|none|none|
|foreignSyndicationAPIUrl|string|false|none|none|
|hash|string|false|none|none|
|id|integer(int64)|false|none|none|
|language|[Language](#schemalanguage)|false|none|none|
|mediaType|string|false|none|none|
|name|string|false|none|none|
|source|[Source](#schemasource)|false|none|none|
|sourceUrl|string|false|none|none|
|targetUrl|string|false|none|none|

<h2 id="tocS_CollectionWrapped">CollectionWrapped</h2>
<!-- backwards compatibility -->
<a id="schemacollectionwrapped"></a>
<a id="schema_CollectionWrapped"></a>
<a id="tocScollectionwrapped"></a>
<a id="tocscollectionwrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "campaigns": [
        {
          "contactEmail": "string",
          "description": "string",
          "endDate": "1970-01-01",
          "id": 0,
          "name": "string",
          "source": {
            "acronym": "string",
            "contactEmail": "string",
            "id": 0,
            "largeLogoUrl": "string",
            "name": "string",
            "smallLogoUrl": "string",
            "websiteUrl": "string"
          },
          "startDate": "1970-01-01"
        }
      ],
      "createdBy": "string",
      "customAttributionUrl": "string",
      "customPreviewUrl": "string",
      "customThumbnailUrl": "string",
      "dateContentAuthored": "1970-01-01",
      "dateContentPublished": "1970-01-01",
      "dateContentReviewed": "1970-01-01",
      "dateContentUpdated": "1970-01-01",
      "dateSyndicationCaptured": "1970-01-01",
      "dateSyndicationUpdated": "1970-01-01",
      "dateSyndicationVisible": "1970-01-01",
      "description": "string",
      "extendedAttributes": [
        {
          "id": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "externalGuid": "string",
      "foreignSyndicationAPIUrl": "string",
      "hash": "string",
      "id": 0,
      "language": {
        "id": 0,
        "isActive": true,
        "isoCode": "string",
        "name": "string"
      },
      "mediaType": "string",
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "sourceUrl": "string",
      "targetUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[Collection](#schemacollection)]|false|none|none|

<h2 id="tocS_ExtendedAttribute">ExtendedAttribute</h2>
<!-- backwards compatibility -->
<a id="schemaextendedattribute"></a>
<a id="schema_ExtendedAttribute"></a>
<a id="tocSextendedattribute"></a>
<a id="tocsextendedattribute"></a>

```json
{
  "id": 0,
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_ExtendedAttributeWrapped">ExtendedAttributeWrapped</h2>
<!-- backwards compatibility -->
<a id="schemaextendedattributewrapped"></a>
<a id="schema_ExtendedAttributeWrapped"></a>
<a id="tocSextendedattributewrapped"></a>
<a id="tocsextendedattributewrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "id": 0,
      "name": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[ExtendedAttribute](#schemaextendedattribute)]|false|none|none|

<h2 id="tocS_Html">Html</h2>
<!-- backwards compatibility -->
<a id="schemahtml"></a>
<a id="schema_Html"></a>
<a id="tocShtml"></a>
<a id="tocshtml"></a>

```json
{
  "campaigns": [
    {
      "contactEmail": "string",
      "description": "string",
      "endDate": "1970-01-01",
      "id": 0,
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "startDate": "1970-01-01"
    }
  ],
  "createdBy": "string",
  "customAttributionUrl": "string",
  "customPreviewUrl": "string",
  "customThumbnailUrl": "string",
  "dateContentAuthored": "1970-01-01",
  "dateContentPublished": "1970-01-01",
  "dateContentReviewed": "1970-01-01",
  "dateContentUpdated": "1970-01-01",
  "dateSyndicationCaptured": "1970-01-01",
  "dateSyndicationUpdated": "1970-01-01",
  "dateSyndicationVisible": "1970-01-01",
  "description": "string",
  "extendedAttributes": [
    {
      "id": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "externalGuid": "string",
  "foreignSyndicationAPIUrl": "string",
  "hash": "string",
  "id": 0,
  "language": {
    "id": 0,
    "isActive": true,
    "isoCode": "string",
    "name": "string"
  },
  "mediaType": "string",
  "name": "string",
  "source": {
    "acronym": "string",
    "contactEmail": "string",
    "id": 0,
    "largeLogoUrl": "string",
    "name": "string",
    "smallLogoUrl": "string",
    "websiteUrl": "string"
  },
  "sourceUrl": "string",
  "targetUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaigns|[[Campaign](#schemacampaign)]|false|none|none|
|createdBy|string|false|none|none|
|customAttributionUrl|string|false|none|none|
|customPreviewUrl|string|false|none|none|
|customThumbnailUrl|string|false|none|none|
|dateContentAuthored|string(date)|false|none|none|
|dateContentPublished|string(date)|false|none|none|
|dateContentReviewed|string(date)|false|none|none|
|dateContentUpdated|string(date)|false|none|none|
|dateSyndicationCaptured|string(date)|false|none|none|
|dateSyndicationUpdated|string(date)|false|none|none|
|dateSyndicationVisible|string(date)|false|none|none|
|description|string|false|none|none|
|extendedAttributes|[[ExtendedAttribute](#schemaextendedattribute)]|false|none|none|
|externalGuid|string|false|none|none|
|foreignSyndicationAPIUrl|string|false|none|none|
|hash|string|false|none|none|
|id|integer(int64)|false|none|none|
|language|[Language](#schemalanguage)|false|none|none|
|mediaType|string|false|none|none|
|name|string|false|none|none|
|source|[Source](#schemasource)|false|none|none|
|sourceUrl|string|false|none|none|
|targetUrl|string|false|none|none|

<h2 id="tocS_HtmlWrapped">HtmlWrapped</h2>
<!-- backwards compatibility -->
<a id="schemahtmlwrapped"></a>
<a id="schema_HtmlWrapped"></a>
<a id="tocShtmlwrapped"></a>
<a id="tocshtmlwrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "campaigns": [
        {
          "contactEmail": "string",
          "description": "string",
          "endDate": "1970-01-01",
          "id": 0,
          "name": "string",
          "source": {
            "acronym": "string",
            "contactEmail": "string",
            "id": 0,
            "largeLogoUrl": "string",
            "name": "string",
            "smallLogoUrl": "string",
            "websiteUrl": "string"
          },
          "startDate": "1970-01-01"
        }
      ],
      "createdBy": "string",
      "customAttributionUrl": "string",
      "customPreviewUrl": "string",
      "customThumbnailUrl": "string",
      "dateContentAuthored": "1970-01-01",
      "dateContentPublished": "1970-01-01",
      "dateContentReviewed": "1970-01-01",
      "dateContentUpdated": "1970-01-01",
      "dateSyndicationCaptured": "1970-01-01",
      "dateSyndicationUpdated": "1970-01-01",
      "dateSyndicationVisible": "1970-01-01",
      "description": "string",
      "extendedAttributes": [
        {
          "id": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "externalGuid": "string",
      "foreignSyndicationAPIUrl": "string",
      "hash": "string",
      "id": 0,
      "language": {
        "id": 0,
        "isActive": true,
        "isoCode": "string",
        "name": "string"
      },
      "mediaType": "string",
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "sourceUrl": "string",
      "targetUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[Html](#schemahtml)]|false|none|none|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "campaigns": [
    {
      "contactEmail": "string",
      "description": "string",
      "endDate": "1970-01-01",
      "id": 0,
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "startDate": "1970-01-01"
    }
  ],
  "createdBy": "string",
  "customAttributionUrl": "string",
  "customPreviewUrl": "string",
  "customThumbnailUrl": "string",
  "dateContentAuthored": "1970-01-01",
  "dateContentPublished": "1970-01-01",
  "dateContentReviewed": "1970-01-01",
  "dateContentUpdated": "1970-01-01",
  "dateSyndicationCaptured": "1970-01-01",
  "dateSyndicationUpdated": "1970-01-01",
  "dateSyndicationVisible": "1970-01-01",
  "description": "string",
  "extendedAttributes": [
    {
      "id": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "externalGuid": "string",
  "foreignSyndicationAPIUrl": "string",
  "hash": "string",
  "height": 0,
  "id": 0,
  "language": {
    "id": 0,
    "isActive": true,
    "isoCode": "string",
    "name": "string"
  },
  "mediaType": "string",
  "name": "string",
  "source": {
    "acronym": "string",
    "contactEmail": "string",
    "id": 0,
    "largeLogoUrl": "string",
    "name": "string",
    "smallLogoUrl": "string",
    "websiteUrl": "string"
  },
  "sourceUrl": "string",
  "targetUrl": "string",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaigns|[[Campaign](#schemacampaign)]|false|none|none|
|createdBy|string|false|none|none|
|customAttributionUrl|string|false|none|none|
|customPreviewUrl|string|false|none|none|
|customThumbnailUrl|string|false|none|none|
|dateContentAuthored|string(date)|false|none|none|
|dateContentPublished|string(date)|false|none|none|
|dateContentReviewed|string(date)|false|none|none|
|dateContentUpdated|string(date)|false|none|none|
|dateSyndicationCaptured|string(date)|false|none|none|
|dateSyndicationUpdated|string(date)|false|none|none|
|dateSyndicationVisible|string(date)|false|none|none|
|description|string|false|none|none|
|extendedAttributes|[[ExtendedAttribute](#schemaextendedattribute)]|false|none|none|
|externalGuid|string|false|none|none|
|foreignSyndicationAPIUrl|string|false|none|none|
|hash|string|false|none|none|
|height|integer(int32)|false|none|none|
|id|integer(int64)|false|none|none|
|language|[Language](#schemalanguage)|false|none|none|
|mediaType|string|false|none|none|
|name|string|false|none|none|
|source|[Source](#schemasource)|false|none|none|
|sourceUrl|string|false|none|none|
|targetUrl|string|false|none|none|
|width|integer(int32)|false|none|none|

<h2 id="tocS_ImageWrapped">ImageWrapped</h2>
<!-- backwards compatibility -->
<a id="schemaimagewrapped"></a>
<a id="schema_ImageWrapped"></a>
<a id="tocSimagewrapped"></a>
<a id="tocsimagewrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "campaigns": [
        {
          "contactEmail": "string",
          "description": "string",
          "endDate": "1970-01-01",
          "id": 0,
          "name": "string",
          "source": {
            "acronym": "string",
            "contactEmail": "string",
            "id": 0,
            "largeLogoUrl": "string",
            "name": "string",
            "smallLogoUrl": "string",
            "websiteUrl": "string"
          },
          "startDate": "1970-01-01"
        }
      ],
      "createdBy": "string",
      "customAttributionUrl": "string",
      "customPreviewUrl": "string",
      "customThumbnailUrl": "string",
      "dateContentAuthored": "1970-01-01",
      "dateContentPublished": "1970-01-01",
      "dateContentReviewed": "1970-01-01",
      "dateContentUpdated": "1970-01-01",
      "dateSyndicationCaptured": "1970-01-01",
      "dateSyndicationUpdated": "1970-01-01",
      "dateSyndicationVisible": "1970-01-01",
      "description": "string",
      "extendedAttributes": [
        {
          "id": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "externalGuid": "string",
      "foreignSyndicationAPIUrl": "string",
      "hash": "string",
      "height": 0,
      "id": 0,
      "language": {
        "id": 0,
        "isActive": true,
        "isoCode": "string",
        "name": "string"
      },
      "mediaType": "string",
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "sourceUrl": "string",
      "targetUrl": "string",
      "width": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[Image](#schemaimage)]|false|none|none|

<h2 id="tocS_Infographic">Infographic</h2>
<!-- backwards compatibility -->
<a id="schemainfographic"></a>
<a id="schema_Infographic"></a>
<a id="tocSinfographic"></a>
<a id="tocsinfographic"></a>

```json
{
  "campaigns": [
    {
      "contactEmail": "string",
      "description": "string",
      "endDate": "1970-01-01",
      "id": 0,
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "startDate": "1970-01-01"
    }
  ],
  "createdBy": "string",
  "customAttributionUrl": "string",
  "customPreviewUrl": "string",
  "customThumbnailUrl": "string",
  "dateContentAuthored": "1970-01-01",
  "dateContentPublished": "1970-01-01",
  "dateContentReviewed": "1970-01-01",
  "dateContentUpdated": "1970-01-01",
  "dateSyndicationCaptured": "1970-01-01",
  "dateSyndicationUpdated": "1970-01-01",
  "dateSyndicationVisible": "1970-01-01",
  "description": "string",
  "extendedAttributes": [
    {
      "id": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "externalGuid": "string",
  "foreignSyndicationAPIUrl": "string",
  "hash": "string",
  "height": 0,
  "id": 0,
  "language": {
    "id": 0,
    "isActive": true,
    "isoCode": "string",
    "name": "string"
  },
  "mediaType": "string",
  "name": "string",
  "source": {
    "acronym": "string",
    "contactEmail": "string",
    "id": 0,
    "largeLogoUrl": "string",
    "name": "string",
    "smallLogoUrl": "string",
    "websiteUrl": "string"
  },
  "sourceUrl": "string",
  "targetUrl": "string",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaigns|[[Campaign](#schemacampaign)]|false|none|none|
|createdBy|string|false|none|none|
|customAttributionUrl|string|false|none|none|
|customPreviewUrl|string|false|none|none|
|customThumbnailUrl|string|false|none|none|
|dateContentAuthored|string(date)|false|none|none|
|dateContentPublished|string(date)|false|none|none|
|dateContentReviewed|string(date)|false|none|none|
|dateContentUpdated|string(date)|false|none|none|
|dateSyndicationCaptured|string(date)|false|none|none|
|dateSyndicationUpdated|string(date)|false|none|none|
|dateSyndicationVisible|string(date)|false|none|none|
|description|string|false|none|none|
|extendedAttributes|[[ExtendedAttribute](#schemaextendedattribute)]|false|none|none|
|externalGuid|string|false|none|none|
|foreignSyndicationAPIUrl|string|false|none|none|
|hash|string|false|none|none|
|height|integer(int32)|false|none|none|
|id|integer(int64)|false|none|none|
|language|[Language](#schemalanguage)|false|none|none|
|mediaType|string|false|none|none|
|name|string|false|none|none|
|source|[Source](#schemasource)|false|none|none|
|sourceUrl|string|false|none|none|
|targetUrl|string|false|none|none|
|width|integer(int32)|false|none|none|

<h2 id="tocS_InfographicWrapped">InfographicWrapped</h2>
<!-- backwards compatibility -->
<a id="schemainfographicwrapped"></a>
<a id="schema_InfographicWrapped"></a>
<a id="tocSinfographicwrapped"></a>
<a id="tocsinfographicwrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "campaigns": [
        {
          "contactEmail": "string",
          "description": "string",
          "endDate": "1970-01-01",
          "id": 0,
          "name": "string",
          "source": {
            "acronym": "string",
            "contactEmail": "string",
            "id": 0,
            "largeLogoUrl": "string",
            "name": "string",
            "smallLogoUrl": "string",
            "websiteUrl": "string"
          },
          "startDate": "1970-01-01"
        }
      ],
      "createdBy": "string",
      "customAttributionUrl": "string",
      "customPreviewUrl": "string",
      "customThumbnailUrl": "string",
      "dateContentAuthored": "1970-01-01",
      "dateContentPublished": "1970-01-01",
      "dateContentReviewed": "1970-01-01",
      "dateContentUpdated": "1970-01-01",
      "dateSyndicationCaptured": "1970-01-01",
      "dateSyndicationUpdated": "1970-01-01",
      "dateSyndicationVisible": "1970-01-01",
      "description": "string",
      "extendedAttributes": [
        {
          "id": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "externalGuid": "string",
      "foreignSyndicationAPIUrl": "string",
      "hash": "string",
      "height": 0,
      "id": 0,
      "language": {
        "id": 0,
        "isActive": true,
        "isoCode": "string",
        "name": "string"
      },
      "mediaType": "string",
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "sourceUrl": "string",
      "targetUrl": "string",
      "width": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[Infographic](#schemainfographic)]|false|none|none|

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
{
  "id": 0,
  "isActive": true,
  "isoCode": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
|isActive|boolean|false|none|none|
|isoCode|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_LanguageWrapped">LanguageWrapped</h2>
<!-- backwards compatibility -->
<a id="schemalanguagewrapped"></a>
<a id="schema_LanguageWrapped"></a>
<a id="tocSlanguagewrapped"></a>
<a id="tocslanguagewrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "id": 0,
      "isActive": true,
      "isoCode": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[Language](#schemalanguage)]|false|none|none|

<h2 id="tocS_MediaItem">MediaItem</h2>
<!-- backwards compatibility -->
<a id="schemamediaitem"></a>
<a id="schema_MediaItem"></a>
<a id="tocSmediaitem"></a>
<a id="tocsmediaitem"></a>

```json
{
  "campaigns": [
    {
      "contactEmail": "string",
      "description": "string",
      "endDate": "1970-01-01",
      "id": 0,
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "startDate": "1970-01-01"
    }
  ],
  "createdBy": "string",
  "customAttributionUrl": "string",
  "customPreviewUrl": "string",
  "customThumbnailUrl": "string",
  "dateContentAuthored": "1970-01-01",
  "dateContentPublished": "1970-01-01",
  "dateContentReviewed": "1970-01-01",
  "dateContentUpdated": "1970-01-01",
  "dateSyndicationCaptured": "1970-01-01",
  "dateSyndicationUpdated": "1970-01-01",
  "dateSyndicationVisible": "1970-01-01",
  "description": "string",
  "extendedAttributes": [
    {
      "id": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "externalGuid": "string",
  "foreignSyndicationAPIUrl": "string",
  "hash": "string",
  "id": 0,
  "language": {
    "id": 0,
    "isActive": true,
    "isoCode": "string",
    "name": "string"
  },
  "mediaType": "string",
  "name": "string",
  "source": {
    "acronym": "string",
    "contactEmail": "string",
    "id": 0,
    "largeLogoUrl": "string",
    "name": "string",
    "smallLogoUrl": "string",
    "websiteUrl": "string"
  },
  "sourceUrl": "string",
  "targetUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaigns|[[Campaign](#schemacampaign)]|false|none|none|
|createdBy|string|false|none|none|
|customAttributionUrl|string|false|none|none|
|customPreviewUrl|string|false|none|none|
|customThumbnailUrl|string|false|none|none|
|dateContentAuthored|string(date)|false|none|none|
|dateContentPublished|string(date)|false|none|none|
|dateContentReviewed|string(date)|false|none|none|
|dateContentUpdated|string(date)|false|none|none|
|dateSyndicationCaptured|string(date)|false|none|none|
|dateSyndicationUpdated|string(date)|false|none|none|
|dateSyndicationVisible|string(date)|false|none|none|
|description|string|false|none|none|
|extendedAttributes|[[ExtendedAttribute](#schemaextendedattribute)]|false|none|none|
|externalGuid|string|false|none|none|
|foreignSyndicationAPIUrl|string|false|none|none|
|hash|string|false|none|none|
|id|integer(int64)|false|none|none|
|language|[Language](#schemalanguage)|false|none|none|
|mediaType|string|false|none|none|
|name|string|false|none|none|
|source|[Source](#schemasource)|false|none|none|
|sourceUrl|string|false|none|none|
|targetUrl|string|false|none|none|

<h2 id="tocS_MediaItemWrapped">MediaItemWrapped</h2>
<!-- backwards compatibility -->
<a id="schemamediaitemwrapped"></a>
<a id="schema_MediaItemWrapped"></a>
<a id="tocSmediaitemwrapped"></a>
<a id="tocsmediaitemwrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "campaigns": [
        {
          "contactEmail": "string",
          "description": "string",
          "endDate": "1970-01-01",
          "id": 0,
          "name": "string",
          "source": {
            "acronym": "string",
            "contactEmail": "string",
            "id": 0,
            "largeLogoUrl": "string",
            "name": "string",
            "smallLogoUrl": "string",
            "websiteUrl": "string"
          },
          "startDate": "1970-01-01"
        }
      ],
      "createdBy": "string",
      "customAttributionUrl": "string",
      "customPreviewUrl": "string",
      "customThumbnailUrl": "string",
      "dateContentAuthored": "1970-01-01",
      "dateContentPublished": "1970-01-01",
      "dateContentReviewed": "1970-01-01",
      "dateContentUpdated": "1970-01-01",
      "dateSyndicationCaptured": "1970-01-01",
      "dateSyndicationUpdated": "1970-01-01",
      "dateSyndicationVisible": "1970-01-01",
      "description": "string",
      "extendedAttributes": [
        {
          "id": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "externalGuid": "string",
      "foreignSyndicationAPIUrl": "string",
      "hash": "string",
      "id": 0,
      "language": {
        "id": 0,
        "isActive": true,
        "isoCode": "string",
        "name": "string"
      },
      "mediaType": "string",
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "sourceUrl": "string",
      "targetUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[MediaItem](#schemamediaitem)]|false|none|none|

<h2 id="tocS_MediaTypeHolder">MediaTypeHolder</h2>
<!-- backwards compatibility -->
<a id="schemamediatypeholder"></a>
<a id="schema_MediaTypeHolder"></a>
<a id="tocSmediatypeholder"></a>
<a id="tocsmediatypeholder"></a>

```json
{
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_MediaTypeHolderWrapped">MediaTypeHolderWrapped</h2>
<!-- backwards compatibility -->
<a id="schemamediatypeholderwrapped"></a>
<a id="schema_MediaTypeHolderWrapped"></a>
<a id="tocSmediatypeholderwrapped"></a>
<a id="tocsmediatypeholderwrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "description": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[MediaTypeHolder](#schemamediatypeholder)]|false|none|none|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "errorCode": "string",
  "errorDetail": "string",
  "errorMessage": "string",
  "userMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|none|
|errorDetail|string|false|none|none|
|errorMessage|string|false|none|none|
|userMessage|string|false|none|none|

<h2 id="tocS_MessageWrapped">MessageWrapped</h2>
<!-- backwards compatibility -->
<a id="schemamessagewrapped"></a>
<a id="schema_MessageWrapped"></a>
<a id="tocSmessagewrapped"></a>
<a id="tocsmessagewrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "errorCode": "string",
      "errorDetail": "string",
      "errorMessage": "string",
      "userMessage": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[Message](#schemamessage)]|false|none|none|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "messages": [
    {
      "errorCode": "string",
      "errorDetail": "string",
      "errorMessage": "string",
      "userMessage": "string"
    }
  ],
  "pagination": {
    "count": 0,
    "currentUrl": "string",
    "max": 0,
    "nextUrl": "string",
    "offset": 0,
    "pageNum": 0,
    "previousUrl": "string",
    "sort": "string",
    "total": 0,
    "totalPages": 0
  },
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[Message](#schemamessage)]|false|none|none|
|pagination|[Pagination](#schemapagination)|false|none|none|
|status|integer|false|none|none|

<h2 id="tocS_MetaWrapped">MetaWrapped</h2>
<!-- backwards compatibility -->
<a id="schemametawrapped"></a>
<a id="schema_MetaWrapped"></a>
<a id="tocSmetawrapped"></a>
<a id="tocsmetawrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "messages": [
        {
          "errorCode": "string",
          "errorDetail": "string",
          "errorMessage": "string",
          "userMessage": "string"
        }
      ],
      "pagination": {
        "count": 0,
        "currentUrl": "string",
        "max": 0,
        "nextUrl": "string",
        "offset": 0,
        "pageNum": 0,
        "previousUrl": "string",
        "sort": "string",
        "total": 0,
        "totalPages": 0
      },
      "status": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[Meta](#schemameta)]|false|none|none|

<h2 id="tocS_PDF">PDF</h2>
<!-- backwards compatibility -->
<a id="schemapdf"></a>
<a id="schema_PDF"></a>
<a id="tocSpdf"></a>
<a id="tocspdf"></a>

```json
{
  "campaigns": [
    {
      "contactEmail": "string",
      "description": "string",
      "endDate": "1970-01-01",
      "id": 0,
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "startDate": "1970-01-01"
    }
  ],
  "createdBy": "string",
  "customAttributionUrl": "string",
  "customPreviewUrl": "string",
  "customThumbnailUrl": "string",
  "dateContentAuthored": "1970-01-01",
  "dateContentPublished": "1970-01-01",
  "dateContentReviewed": "1970-01-01",
  "dateContentUpdated": "1970-01-01",
  "dateSyndicationCaptured": "1970-01-01",
  "dateSyndicationUpdated": "1970-01-01",
  "dateSyndicationVisible": "1970-01-01",
  "description": "string",
  "extendedAttributes": [
    {
      "id": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "externalGuid": "string",
  "foreignSyndicationAPIUrl": "string",
  "hash": "string",
  "id": 0,
  "language": {
    "id": 0,
    "isActive": true,
    "isoCode": "string",
    "name": "string"
  },
  "mediaType": "string",
  "name": "string",
  "source": {
    "acronym": "string",
    "contactEmail": "string",
    "id": 0,
    "largeLogoUrl": "string",
    "name": "string",
    "smallLogoUrl": "string",
    "websiteUrl": "string"
  },
  "sourceUrl": "string",
  "targetUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaigns|[[Campaign](#schemacampaign)]|false|none|none|
|createdBy|string|false|none|none|
|customAttributionUrl|string|false|none|none|
|customPreviewUrl|string|false|none|none|
|customThumbnailUrl|string|false|none|none|
|dateContentAuthored|string(date)|false|none|none|
|dateContentPublished|string(date)|false|none|none|
|dateContentReviewed|string(date)|false|none|none|
|dateContentUpdated|string(date)|false|none|none|
|dateSyndicationCaptured|string(date)|false|none|none|
|dateSyndicationUpdated|string(date)|false|none|none|
|dateSyndicationVisible|string(date)|false|none|none|
|description|string|false|none|none|
|extendedAttributes|[[ExtendedAttribute](#schemaextendedattribute)]|false|none|none|
|externalGuid|string|false|none|none|
|foreignSyndicationAPIUrl|string|false|none|none|
|hash|string|false|none|none|
|id|integer(int64)|false|none|none|
|language|[Language](#schemalanguage)|false|none|none|
|mediaType|string|false|none|none|
|name|string|false|none|none|
|source|[Source](#schemasource)|false|none|none|
|sourceUrl|string|false|none|none|
|targetUrl|string|false|none|none|

<h2 id="tocS_PDFWrapped">PDFWrapped</h2>
<!-- backwards compatibility -->
<a id="schemapdfwrapped"></a>
<a id="schema_PDFWrapped"></a>
<a id="tocSpdfwrapped"></a>
<a id="tocspdfwrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "campaigns": [
        {
          "contactEmail": "string",
          "description": "string",
          "endDate": "1970-01-01",
          "id": 0,
          "name": "string",
          "source": {
            "acronym": "string",
            "contactEmail": "string",
            "id": 0,
            "largeLogoUrl": "string",
            "name": "string",
            "smallLogoUrl": "string",
            "websiteUrl": "string"
          },
          "startDate": "1970-01-01"
        }
      ],
      "createdBy": "string",
      "customAttributionUrl": "string",
      "customPreviewUrl": "string",
      "customThumbnailUrl": "string",
      "dateContentAuthored": "1970-01-01",
      "dateContentPublished": "1970-01-01",
      "dateContentReviewed": "1970-01-01",
      "dateContentUpdated": "1970-01-01",
      "dateSyndicationCaptured": "1970-01-01",
      "dateSyndicationUpdated": "1970-01-01",
      "dateSyndicationVisible": "1970-01-01",
      "description": "string",
      "extendedAttributes": [
        {
          "id": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "externalGuid": "string",
      "foreignSyndicationAPIUrl": "string",
      "hash": "string",
      "id": 0,
      "language": {
        "id": 0,
        "isActive": true,
        "isoCode": "string",
        "name": "string"
      },
      "mediaType": "string",
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "sourceUrl": "string",
      "targetUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[PDF](#schemapdf)]|false|none|none|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "count": 0,
  "currentUrl": "string",
  "max": 0,
  "nextUrl": "string",
  "offset": 0,
  "pageNum": 0,
  "previousUrl": "string",
  "sort": "string",
  "total": 0,
  "totalPages": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|currentUrl|string|false|none|none|
|max|integer|false|none|none|
|nextUrl|string|false|none|none|
|offset|integer|false|none|none|
|pageNum|integer|false|none|none|
|previousUrl|string|false|none|none|
|sort|string|false|none|none|
|total|integer|false|none|none|
|totalPages|integer|false|none|none|

<h2 id="tocS_PaginationWrapped">PaginationWrapped</h2>
<!-- backwards compatibility -->
<a id="schemapaginationwrapped"></a>
<a id="schema_PaginationWrapped"></a>
<a id="tocSpaginationwrapped"></a>
<a id="tocspaginationwrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[Pagination](#schemapagination)]|false|none|none|

<h2 id="tocS_ResourceWrapped">ResourceWrapped</h2>
<!-- backwards compatibility -->
<a id="schemaresourcewrapped"></a>
<a id="schema_ResourceWrapped"></a>
<a id="tocSresourcewrapped"></a>
<a id="tocsresourcewrapped"></a>

```json
null
```

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "acronym": "string",
  "contactEmail": "string",
  "id": 0,
  "largeLogoUrl": "string",
  "name": "string",
  "smallLogoUrl": "string",
  "websiteUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acronym|string|false|none|none|
|contactEmail|string|false|none|none|
|id|integer(int64)|false|none|none|
|largeLogoUrl|string|false|none|none|
|name|string|false|none|none|
|smallLogoUrl|string|false|none|none|
|websiteUrl|string|false|none|none|

<h2 id="tocS_SourceWrapped">SourceWrapped</h2>
<!-- backwards compatibility -->
<a id="schemasourcewrapped"></a>
<a id="schema_SourceWrapped"></a>
<a id="tocSsourcewrapped"></a>
<a id="tocssourcewrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "acronym": "string",
      "contactEmail": "string",
      "id": 0,
      "largeLogoUrl": "string",
      "name": "string",
      "smallLogoUrl": "string",
      "websiteUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[Source](#schemasource)]|false|none|none|

<h2 id="tocS_SyndicateMarshaller">SyndicateMarshaller</h2>
<!-- backwards compatibility -->
<a id="schemasyndicatemarshaller"></a>
<a id="schema_SyndicateMarshaller"></a>
<a id="tocSsyndicatemarshaller"></a>
<a id="tocssyndicatemarshaller"></a>

```json
{
  "content": "string",
  "description": "string",
  "id": 0,
  "mediaType": "string",
  "name": "string",
  "sourceUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|description|string|false|none|none|
|id|integer|false|none|none|
|mediaType|string|false|none|none|
|name|string|false|none|none|
|sourceUrl|string|false|none|none|

<h2 id="tocS_SyndicateMarshallerWrapped">SyndicateMarshallerWrapped</h2>
<!-- backwards compatibility -->
<a id="schemasyndicatemarshallerwrapped"></a>
<a id="schema_SyndicateMarshallerWrapped"></a>
<a id="tocSsyndicatemarshallerwrapped"></a>
<a id="tocssyndicatemarshallerwrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "content": "string",
      "description": "string",
      "id": 0,
      "mediaType": "string",
      "name": "string",
      "sourceUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[SyndicateMarshaller](#schemasyndicatemarshaller)]|false|none|none|

<h2 id="tocS_TagLanguageMarshaller">TagLanguageMarshaller</h2>
<!-- backwards compatibility -->
<a id="schemataglanguagemarshaller"></a>
<a id="schema_TagLanguageMarshaller"></a>
<a id="tocStaglanguagemarshaller"></a>
<a id="tocstaglanguagemarshaller"></a>

```json
{
  "id": 0,
  "isActive": true,
  "isoCode": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|isActive|boolean|false|none|none|
|isoCode|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_TagLanguageMarshallerWrapped">TagLanguageMarshallerWrapped</h2>
<!-- backwards compatibility -->
<a id="schemataglanguagemarshallerwrapped"></a>
<a id="schema_TagLanguageMarshallerWrapped"></a>
<a id="tocStaglanguagemarshallerwrapped"></a>
<a id="tocstaglanguagemarshallerwrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "id": 0,
      "isActive": true,
      "isoCode": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[TagLanguageMarshaller](#schemataglanguagemarshaller)]|false|none|none|

<h2 id="tocS_TagMarshaller">TagMarshaller</h2>
<!-- backwards compatibility -->
<a id="schematagmarshaller"></a>
<a id="schema_TagMarshaller"></a>
<a id="tocStagmarshaller"></a>
<a id="tocstagmarshaller"></a>

```json
{
  "id": 0,
  "language": {
    "id": 0,
    "isActive": true,
    "isoCode": "string",
    "name": "string"
  },
  "name": "string",
  "type": {
    "id": 0,
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|language|[TagLanguageMarshaller](#schemataglanguagemarshaller)|false|none|none|
|name|string|false|none|none|
|type|[TagTypeMarshaller](#schematagtypemarshaller)|false|none|none|

<h2 id="tocS_TagMarshallerWrapped">TagMarshallerWrapped</h2>
<!-- backwards compatibility -->
<a id="schematagmarshallerwrapped"></a>
<a id="schema_TagMarshallerWrapped"></a>
<a id="tocStagmarshallerwrapped"></a>
<a id="tocstagmarshallerwrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "id": 0,
      "language": {
        "id": 0,
        "isActive": true,
        "isoCode": "string",
        "name": "string"
      },
      "name": "string",
      "type": {
        "id": 0,
        "name": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[TagMarshaller](#schematagmarshaller)]|false|none|none|

<h2 id="tocS_TagTypeMarshaller">TagTypeMarshaller</h2>
<!-- backwards compatibility -->
<a id="schematagtypemarshaller"></a>
<a id="schema_TagTypeMarshaller"></a>
<a id="tocStagtypemarshaller"></a>
<a id="tocstagtypemarshaller"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_TagTypeMarshallerWrapped">TagTypeMarshallerWrapped</h2>
<!-- backwards compatibility -->
<a id="schematagtypemarshallerwrapped"></a>
<a id="schema_TagTypeMarshallerWrapped"></a>
<a id="tocStagtypemarshallerwrapped"></a>
<a id="tocstagtypemarshallerwrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "id": 0,
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[TagTypeMarshaller](#schematagtypemarshaller)]|false|none|none|

<h2 id="tocS_Tweet">Tweet</h2>
<!-- backwards compatibility -->
<a id="schematweet"></a>
<a id="schema_Tweet"></a>
<a id="tocStweet"></a>
<a id="tocstweet"></a>

```json
{
  "account": null,
  "campaigns": [
    {
      "contactEmail": "string",
      "description": "string",
      "endDate": "1970-01-01",
      "id": 0,
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "startDate": "1970-01-01"
    }
  ],
  "createdBy": "string",
  "customAttributionUrl": "string",
  "customPreviewUrl": "string",
  "customThumbnailUrl": "string",
  "dateContentAuthored": "1970-01-01",
  "dateContentPublished": "1970-01-01",
  "dateContentReviewed": "1970-01-01",
  "dateContentUpdated": "1970-01-01",
  "dateSyndicationCaptured": "1970-01-01",
  "dateSyndicationUpdated": "1970-01-01",
  "dateSyndicationVisible": "1970-01-01",
  "description": "string",
  "extendedAttributes": [
    {
      "id": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "externalGuid": "string",
  "foreignSyndicationAPIUrl": "string",
  "hash": "string",
  "id": 0,
  "language": {
    "id": 0,
    "isActive": true,
    "isoCode": "string",
    "name": "string"
  },
  "mediaType": "string",
  "mediaUrl": "string",
  "messageText": "string",
  "name": "string",
  "source": {
    "acronym": "string",
    "contactEmail": "string",
    "id": 0,
    "largeLogoUrl": "string",
    "name": "string",
    "smallLogoUrl": "string",
    "websiteUrl": "string"
  },
  "sourceUrl": "string",
  "targetUrl": "string",
  "tweetDate": "1970-01-01",
  "tweetId": 0,
  "videoVariantUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[TwitterAccount](#schematwitteraccount)|false|none|none|
|campaigns|[[Campaign](#schemacampaign)]|false|none|none|
|createdBy|string|false|none|none|
|customAttributionUrl|string|false|none|none|
|customPreviewUrl|string|false|none|none|
|customThumbnailUrl|string|false|none|none|
|dateContentAuthored|string(date)|false|none|none|
|dateContentPublished|string(date)|false|none|none|
|dateContentReviewed|string(date)|false|none|none|
|dateContentUpdated|string(date)|false|none|none|
|dateSyndicationCaptured|string(date)|false|none|none|
|dateSyndicationUpdated|string(date)|false|none|none|
|dateSyndicationVisible|string(date)|false|none|none|
|description|string|false|none|none|
|extendedAttributes|[[ExtendedAttribute](#schemaextendedattribute)]|false|none|none|
|externalGuid|string|false|none|none|
|foreignSyndicationAPIUrl|string|false|none|none|
|hash|string|false|none|none|
|id|integer(int64)|false|none|none|
|language|[Language](#schemalanguage)|false|none|none|
|mediaType|string|false|none|none|
|mediaUrl|string|false|none|none|
|messageText|string|false|none|none|
|name|string|false|none|none|
|source|[Source](#schemasource)|false|none|none|
|sourceUrl|string|false|none|none|
|targetUrl|string|false|none|none|
|tweetDate|string(date)|false|none|none|
|tweetId|integer(int32)|false|none|none|
|videoVariantUrl|string|false|none|none|

<h2 id="tocS_TweetWrapped">TweetWrapped</h2>
<!-- backwards compatibility -->
<a id="schematweetwrapped"></a>
<a id="schema_TweetWrapped"></a>
<a id="tocStweetwrapped"></a>
<a id="tocstweetwrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "account": null,
      "campaigns": [
        {
          "contactEmail": "string",
          "description": "string",
          "endDate": "1970-01-01",
          "id": 0,
          "name": "string",
          "source": {
            "acronym": "string",
            "contactEmail": "string",
            "id": 0,
            "largeLogoUrl": "string",
            "name": "string",
            "smallLogoUrl": "string",
            "websiteUrl": "string"
          },
          "startDate": "1970-01-01"
        }
      ],
      "createdBy": "string",
      "customAttributionUrl": "string",
      "customPreviewUrl": "string",
      "customThumbnailUrl": "string",
      "dateContentAuthored": "1970-01-01",
      "dateContentPublished": "1970-01-01",
      "dateContentReviewed": "1970-01-01",
      "dateContentUpdated": "1970-01-01",
      "dateSyndicationCaptured": "1970-01-01",
      "dateSyndicationUpdated": "1970-01-01",
      "dateSyndicationVisible": "1970-01-01",
      "description": "string",
      "extendedAttributes": [
        {
          "id": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "externalGuid": "string",
      "foreignSyndicationAPIUrl": "string",
      "hash": "string",
      "id": 0,
      "language": {
        "id": 0,
        "isActive": true,
        "isoCode": "string",
        "name": "string"
      },
      "mediaType": "string",
      "mediaUrl": "string",
      "messageText": "string",
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "sourceUrl": "string",
      "targetUrl": "string",
      "tweetDate": "1970-01-01",
      "tweetId": 0,
      "videoVariantUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[Tweet](#schematweet)]|false|none|none|

<h2 id="tocS_TwitterAccount">TwitterAccount</h2>
<!-- backwards compatibility -->
<a id="schematwitteraccount"></a>
<a id="schema_TwitterAccount"></a>
<a id="tocStwitteraccount"></a>
<a id="tocstwitteraccount"></a>

```json
null
```

<h2 id="tocS_Video">Video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_Video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "campaigns": [
    {
      "contactEmail": "string",
      "description": "string",
      "endDate": "1970-01-01",
      "id": 0,
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "startDate": "1970-01-01"
    }
  ],
  "createdBy": "string",
  "customAttributionUrl": "string",
  "customPreviewUrl": "string",
  "customThumbnailUrl": "string",
  "dateContentAuthored": "1970-01-01",
  "dateContentPublished": "1970-01-01",
  "dateContentReviewed": "1970-01-01",
  "dateContentUpdated": "1970-01-01",
  "dateSyndicationCaptured": "1970-01-01",
  "dateSyndicationUpdated": "1970-01-01",
  "dateSyndicationVisible": "1970-01-01",
  "description": "string",
  "extendedAttributes": [
    {
      "id": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "externalGuid": "string",
  "foreignSyndicationAPIUrl": "string",
  "hash": "string",
  "id": 0,
  "language": {
    "id": 0,
    "isActive": true,
    "isoCode": "string",
    "name": "string"
  },
  "mediaType": "string",
  "name": "string",
  "source": {
    "acronym": "string",
    "contactEmail": "string",
    "id": 0,
    "largeLogoUrl": "string",
    "name": "string",
    "smallLogoUrl": "string",
    "websiteUrl": "string"
  },
  "sourceUrl": "string",
  "targetUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|campaigns|[[Campaign](#schemacampaign)]|false|none|none|
|createdBy|string|false|none|none|
|customAttributionUrl|string|false|none|none|
|customPreviewUrl|string|false|none|none|
|customThumbnailUrl|string|false|none|none|
|dateContentAuthored|string(date)|false|none|none|
|dateContentPublished|string(date)|false|none|none|
|dateContentReviewed|string(date)|false|none|none|
|dateContentUpdated|string(date)|false|none|none|
|dateSyndicationCaptured|string(date)|false|none|none|
|dateSyndicationUpdated|string(date)|false|none|none|
|dateSyndicationVisible|string(date)|false|none|none|
|description|string|false|none|none|
|extendedAttributes|[[ExtendedAttribute](#schemaextendedattribute)]|false|none|none|
|externalGuid|string|false|none|none|
|foreignSyndicationAPIUrl|string|false|none|none|
|hash|string|false|none|none|
|id|integer(int64)|false|none|none|
|language|[Language](#schemalanguage)|false|none|none|
|mediaType|string|false|none|none|
|name|string|false|none|none|
|source|[Source](#schemasource)|false|none|none|
|sourceUrl|string|false|none|none|
|targetUrl|string|false|none|none|

<h2 id="tocS_VideoWrapped">VideoWrapped</h2>
<!-- backwards compatibility -->
<a id="schemavideowrapped"></a>
<a id="schema_VideoWrapped"></a>
<a id="tocSvideowrapped"></a>
<a id="tocsvideowrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {
      "campaigns": [
        {
          "contactEmail": "string",
          "description": "string",
          "endDate": "1970-01-01",
          "id": 0,
          "name": "string",
          "source": {
            "acronym": "string",
            "contactEmail": "string",
            "id": 0,
            "largeLogoUrl": "string",
            "name": "string",
            "smallLogoUrl": "string",
            "websiteUrl": "string"
          },
          "startDate": "1970-01-01"
        }
      ],
      "createdBy": "string",
      "customAttributionUrl": "string",
      "customPreviewUrl": "string",
      "customThumbnailUrl": "string",
      "dateContentAuthored": "1970-01-01",
      "dateContentPublished": "1970-01-01",
      "dateContentReviewed": "1970-01-01",
      "dateContentUpdated": "1970-01-01",
      "dateSyndicationCaptured": "1970-01-01",
      "dateSyndicationUpdated": "1970-01-01",
      "dateSyndicationVisible": "1970-01-01",
      "description": "string",
      "extendedAttributes": [
        {
          "id": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "externalGuid": "string",
      "foreignSyndicationAPIUrl": "string",
      "hash": "string",
      "id": 0,
      "language": {
        "id": 0,
        "isActive": true,
        "isoCode": "string",
        "name": "string"
      },
      "mediaType": "string",
      "name": "string",
      "source": {
        "acronym": "string",
        "contactEmail": "string",
        "id": 0,
        "largeLogoUrl": "string",
        "name": "string",
        "smallLogoUrl": "string",
        "websiteUrl": "string"
      },
      "sourceUrl": "string",
      "targetUrl": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[Video](#schemavideo)]|false|none|none|

<h2 id="tocS_YoutubeMetadata">YoutubeMetadata</h2>
<!-- backwards compatibility -->
<a id="schemayoutubemetadata"></a>
<a id="schema_YoutubeMetadata"></a>
<a id="tocSyoutubemetadata"></a>
<a id="tocsyoutubemetadata"></a>

```json
{}
```

<h2 id="tocS_YoutubeMetadataWrapped">YoutubeMetadataWrapped</h2>
<!-- backwards compatibility -->
<a id="schemayoutubemetadatawrapped"></a>
<a id="schema_YoutubeMetadataWrapped"></a>
<a id="tocSyoutubemetadatawrapped"></a>
<a id="tocsyoutubemetadatawrapped"></a>

```json
{
  "callback": "string",
  "meta": {
    "messages": [
      {
        "errorCode": "string",
        "errorDetail": "string",
        "errorMessage": "string",
        "userMessage": "string"
      }
    ],
    "pagination": {
      "count": 0,
      "currentUrl": "string",
      "max": 0,
      "nextUrl": "string",
      "offset": 0,
      "pageNum": 0,
      "previousUrl": "string",
      "sort": "string",
      "total": 0,
      "totalPages": 0
    },
    "status": 0
  },
  "results": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback|string|false|none|none|
|meta|[Meta](#schemameta)|false|none|none|
|results|[[YoutubeMetadata](#schemayoutubemetadata)]|false|none|none|

<h2 id="tocS_test">test</h2>
<!-- backwards compatibility -->
<a id="schematest"></a>
<a id="schema_test"></a>
<a id="tocStest"></a>
<a id="tocstest"></a>

```json
null
```
