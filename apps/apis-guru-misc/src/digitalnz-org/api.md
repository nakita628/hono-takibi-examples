<h1 id="digitalnz-api">DigitalNZ API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

OpenAPI specification of DigitalNZ's Record API.  
For more information about the API see [digitalnz.org/developers](https://digitalnz.org/developers).  
To learn more about the metadata/fields used in the API see the [Metadata Dictionary](https://docs.google.com/document/pub?id=1Z3I_ckQWjnQQ4SzpORbClcIXUheO-Jd4jt-oZFuMcoQ).  
To get a sense of what content is available via the API take a look at the search feature on the [DigitalNZ website](https://digitalnz.org/records?text=all%20sorts&tab=Images).  
The [terms of use](https://digitalnz.org/about/terms-of-use/developer-api-terms-of-use) specify how developers can use the DigitalNZ API.

Base URLs:

* <a href="https://api.digitalnz.org">https://api.digitalnz.org</a> - Production API

Email: <a href="mailto:develop@digitalnz.org">DigitalNZ</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **api_key**, in: query.

<h1 id="digitalnz-api-api-calls">API calls</h1>

## Run queries against DigitalNZ metadata search service.

> Code samples

```bash
curl "https://example.com/records.json?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /records.{format}`

This is the main search endpoint allowing queries against the records database.

<h3 id="run-queries-against-digitalnz-metadata-search-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Note - There is a small difference with some field names in the response between JSON and XML.  <br>When a field name has more than one word, JSON format will separate the words with an underscore, eg. "content_partner", whereas XML uses a hyphenated naming convention, eg. "content-partner".<br>|
|Authentication-Token|header|string|false|The DigitalNZ API no longer requires a key to access public content. However, if you plan on using the API regularly, expect to be a high volume consumer or are planning on creating an application, we encourage you to use an API key so that we can:<br>- provide targeted help and support<br>- increase your query throughput (by negotiation)<br>- notify you directly of changes to the API<br>- gather usage metrics to help improve the service  <br><br>API requests that do not pass a valid API key/token are treated as unauthenticated. A maximum rate limit applies across all unauthenticated requests. This rate limit is in place to protect the service from overuse, resulting in unsustainable costs, or potential attack.<br><br>**Getting an API key**  <br>[Create a DigitalNZ account](https://digitalnz.org/sign_up), log in and select "[my API key](https://digitalnz.org/api_keys/edit)" from your username drop-down menu (on the right hand side)'. The key is a long string of jumbled letters and numbers (hash) that is unique to you. You are required to keep the key secret. (Refer to the [Developer API Terms of Use](https://digitalnz.org/about/terms-of-use/developer-api-terms-of-use) for more information).<br><br>**Using an API key**  <br>When you make a call to the API you'll need to pass the key in a custom HTTP header: ‘Authentication-Token’.<br>For example, a query using the ‘curl’ command might look like the following (where ‘{YOUR_API_KEY}’ is replaced with a valid API key):<br><br>`curl -H "Authentication-Token:{YOUR_API_KEY}" http://api.digitalnz.org/v3/records.json?text=kiwi`<br>|
|text|query|string|false|This field enables queries based on one or more search terms and provides the functionality of the main search box on [digitalnz.org](https://digitalnz.org). Search terms can be combined with boolean operators (AND, OR).  <br>A minus sign excludes certain terms, eg. "-horse".  <br>An asterisk (\*) acts as a wildcard, eg. "ted*".  <br>Multiple search terms are combined with an AND by default.  <br>Examples: `"moustache"`, `"Wanganui OR Whanganui"`,  `"-paperspast"`, `"ted*"`<br>|
|and[category][]|query|string|false|These are the same categories that are used across the tabs in [digitalnz.org](https://digitalnz.org/records?text=&tab=Videos)|
|and[content_partner][]|query|string|false|Allows filtering for records from a particular Content Partner.  <br>Examples: `"Ministry for Culture and Heritage"` `"Trove"` `"V.C. Browne & Son"`<br>  <br>*Tip* - To see a list of Content Partners available for filtering use the *facets* parameter, eg. *"&facets=content_partner"*.  <br>|
|and[primary_collection][]|query|string|false|Allows filtering for records from a particular *primary_collection*.  <br>Examples: `"Puke Ariki"` `"NZHistory"` `"TAPUHI"`  <br>  <br>*Tip* - To see a list of Primary_Collections available for filtering use the *facets* parameter, eg. *"&facets=primary_collection"*.   <br>|
|and[collection][]|query|string|false|Allows filtering for records from a particular Collection. Collections can be thought of as sub-collections or groupings under Primary_Collections.  <br>Examples: `"Music 101"` `"Mollusks"` `"Wairarapa Daily Times"`<br>  <br>*Tip* - To see a list of Collections available for filtering use the *facets* parameter, eg. *"&facets=collection"*. <br>|
|and[usage][]|query|string|false|none|
|and[subject][]|query|string|false|Examples: `"Cats"` `"Weddings"` `"climb*"`<br>|
|and[dc_type][]|query|string|false|Examples: `"Conference item"` `"Magazines"`<br>|
|and[format][]|query|string|false|Examples: `"Photolithographs"` `"Glass*"`<br>|
|and[placename][]|query|string|false|This field can be used for text-based location search. For a more advanced coordinate-based search, see the "geo_bbox" field below.  <br>Examples: `"Scott Base"` `"Wainuiomata"` `"castle*"`<br>|
|and[creator][]|query|string|false|Examples: `"Revelle Jackson"` `"Nicholas Chevalier"` `"Rita Angus"`<br>|
|and[title][]|query|string|false|Examples: `"Pukeko"` `"Club"` `"Break*"`"<br>|
|and[date]|query|string|false|This field can be useful for querying and sorting (see the 'sort' param further down). But it should be noted that, as with some other fields, **not all records have date metadata associated**. There is good coverage of date metadata within certain collections, but there are plenty with no date information at all. So, if you query for records from a specific date you may get some matching results, but might also be missing other potentially relevant records that don't have date metadata available.  <br>Example: `"1970-12-25"`<br><br>*Tip* - There is a related (but not searchable) field that is returned on each record (where available), that often has a more human readable version of the date information, called 'display_date'.<br>|
|and[year]|query|string|false|This field allows searching specifically by year. The metadata is derived from the same date information that is searchable and returned in the date field. It is possible to search across a range using syntax the following syntax `[{start year} TO {end year}]`.  <br>Example: `"1893"` `"[1982 TO 1987]"`<br>|
|and[decade]|query|string|false|This field allows searching specifically by decade. The metadata is derived from the same date information that is searchable and returned in the date field.  <br>Example: `"1850"` `"1990"`<br>|
|and[century]|query|string|false|This field allows searching specifically by century. The metadata is derived from the same date information that is searchable and returned in the date field.  <br>Example: `"1900"` `"2000"`<br>|
|without[{filter_field}]|query|string|false|All of the above `and[___][]` filters in this document are also able to be used with this syntax to exclude specific matches. For example to exclude Papers Past content `&without[primary_collection]=Papers+Past`<br>|
|and[or][{filter_field}][]|query|string|false|All of the above `and[___][]` filters in this document are also able to be used with the `and[or][___][]` syntax to allow multi-select *OR* queries within one field.  <br>Basic example: <br>- To filter your results to only those with a category or Audio or Videos:   <br>`&and[or][category][]=Audio&and[or][category][]=Videos` <br>  <br>In order to combine *OR* filters across multiple fields the syntax needs to be nested as follows  <br>Nested examples: <br> - To search for *(year is 2014 OR 2015) AND (primary_collection is TAPUHI OR Public Address)*  <br> `&and[or][year][]=2015&and[or][year][]=2014&and[and][or][primary_collection][]=TAPUHI&and[and][or][primary_collection][]=Public+Address`  <br> - To search for *(category is Images OR Video) AND (subject is cat OR cats)*  <br> `&and[or][category][]=Images&and[or][category][]=Videos&and[and][or][subject][]=cat&and[and][or][subject][]=cats`  <br>|
|and[is_commercial_use]|query|boolean|false|Some DigitalNZ partners offer their metadata for use in commercial applications. This content can be identified through the *is_commercial_use* flag. Only API results where the *is_commercial_use* field set to True can be used for commercial purposes. Check out the [terms of use](https://digitalnz.org/about/terms-of-use/developer-api-terms-of-use#commercial_use_terms) for more information.<br>|
|and[has_large_thumbnail_url]|query|string|false|Filters results to only those records that have an image available in the *large_thumbnail_url* field.  <br>**Note:** There is an issue with this field where, in order to get results, it needs to be specified with "Y" or not specified at all.<br>|
|and[has_lat_lng]|query|boolean|false|Filters results to only those records that have latitude and longitude coordinates present in the metadata.<br>  <br>*Tip* - To see the location metadata you'll need to specifically request that field using the *fields* parameter - *"&fields=verbose,locations"*  as it is not part of the default, or verbose field sets.<br>|
|geo_bbox|query|string|false|A geographic bounding box scoping a search to a geographic region. Order of latitude-longitude coordinates is north, west, south, east.   For example, filtering the Wellington region would be *"&geo_bbox=-41,174,-42,175"*<br>|
|fields|query|string|false|Comma-separated whitelist of fields to be returned. The syntax *"&fields=verbose"* can be used to return the bulk of the fields, or you can customise which fields you are interested in, eg. *"&fields=id,title,subject,collection,landing_url,locations"*.<br>|
|sort|query|string|false|Used to control the order of the results in conjunction with the *direction* field.<br>  - *syndication_date* - is the creation date of the record within DigitalNZ, ie. when DigitalNZ first harvested the record.<br>  - *date* - is the date metadata (if present) associated with the record.  <br>    <br>To sort the search results with newest records at the top use: "&sort=syndication_date&direction=desc"<br>|
|direction|query|string|false|Used in conjunction with *sort* to order the results<br> - *asc* - Ascending, oldest first.<br> - *desc* - Descending, newest first.<br>|
|page|query|integer|false|Specify which page of results to return.|
|per_page|query|integer|false|The number of records to return per page of search results.|
|facets|query|[string]|false|Shows a breakdown of record counts for the specified facets based on the current result set. In the [DigitalNZ search interface](https://digitalnz.org/records) these facets are used to list the values filterable for each field. A comma-separated list will return multiple facets in one call.<br>|
|facets_page|query|integer|false|This value specifies which page of facet results to return. Allowing pagination through large lists of facet values.|
|facets_per_page|query|integer|false|The number of facets to return per page of facet results.|
|exclude_filters_from_facets|query|boolean|false|This field can be used when filtering into some facets, to maintain the context of the wider facet values. A common use case is to allow the results of a search to be filtered down into a specific category (eg Audio), while still showing the other possible filter options as facet counts (eg. Images, Audio, Video, etc). Setting this to 'true' will not effect the search results returned but will ignore all search filters (eg. "and[category]=Audio") when calculating the facet counts. <br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|and[category][]|Newspapers|
|and[category][]|Images|
|and[category][]|Books|
|and[category][]|Articles|
|and[category][]|Journals|
|and[category][]|Archives|
|and[category][]|Audio|
|and[category][]|Other|
|and[category][]|Manuscripts|
|and[category][]|Reference sources|
|and[category][]|Research papers|
|and[category][]|Videos|
|and[category][]|Music Score|
|and[category][]|Groups|
|and[category][]|Data|
|and[category][]|Websites|
|and[category][]|Sets|
|and[usage][]|Share|
|and[usage][]|Modify|
|and[usage][]|Use commercially|
|and[usage][]|All rights reserved|
|and[usage][]|Unknown|
|and[has_large_thumbnail_url]|Y|
|and[has_lat_lng]|true|
|and[has_lat_lng]|false|
|sort|syndication_date|
|sort|date|
|direction|asc|
|direction|desc|
|facets|category|
|facets|content_partner|
|facets|display_collection|
|facets|collection|
|facets|creator|
|facets|placename|
|facets|date|
|facets|year|
|facets|decade|
|facets|century|
|facets|language|
|facets|rights|
|facets|usage|
|facets|copyright|
|facets|subject|
|facets|format|
|facets|dc_type|

> Example responses

> 200 Response

```json
{
  "facets": {
    "display_collection": {
      "Canterbury Museum": 39109,
      "Figure.NZ": 40185,
      "Napier Public Libraries": 39343
    },
    "year": {
      "1997": 4,
      "1998": 10,
      "1999": 16
    }
  },
  "page": 3,
  "per_page": 20,
  "records": [
    {
      "category": [
        "Newspapers"
      ],
      "collection": [
        "string"
      ],
      "collection_title": [
        "string"
      ],
      "content_partner": [
        "string"
      ],
      "copyright": [
        "All rights reserved"
      ],
      "created_at": "2012-04-21T05:32:02.000+13:00",
      "creator": [
        "string"
      ],
      "date": "1996-01-01T00:00:00.000Z",
      "dc_identifier": [
        "string"
      ],
      "description": "string",
      "display_collection": "string",
      "display_content_partner": "string",
      "display_date": "Circa 1996",
      "id": 1788754,
      "landing_url": "string",
      "large_thumbnail_url": "string",
      "locations": [
        {
          "comment": "Location provided by the Alexander Turnbull Library",
          "lat": -37.508219086,
          "lng": 177.1802173,
          "placename": "White Island"
        }
      ],
      "primary_collection": [
        "string"
      ],
      "rights": "string",
      "rights_url": [
        "string"
      ],
      "source_url": "https://api.digitalnz.org/records/1788754/source",
      "subject": [
        "string"
      ],
      "thumbnail_url": "string",
      "title": "Election night crowd, Wellington, 1931",
      "updated_at": "2020-12-06T01:36:37.359+13:00",
      "usage": [
        "All rights reserved"
      ]
    }
  ],
  "request_url": "https://api.digitalnz.org/v3/records.json?per_page=10&facets_per_page=100&facets=category&text=Wainuiomata",
  "result_count": 8190
}
```

> 400 Response

```json
{
  "errors": [
    "No field configured for Record with name *field_name*"
  ]
}
```

> 403 Response

```json
{
  "errors": "Invalid API Key"
}
```

<h3 id="run-queries-against-digitalnz-metadata-search-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching criteria|Inline|
|400|Bad Request|Incorrect field specified in the request.|Inline|
|403|Forbidden|API Key (Authentication-Token) is invalid.|Inline|

<h3 id="run-queries-against-digitalnz-metadata-search-service-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facets|object|false|none|Each field you request from the list of facetable fields will be returned as separate elements. Each of those will contain a sorted list of elements that are made up of a value (eg collection name, subject, date) and the number of results associated with that value.  <br>|
|» **additionalProperties**|object|false|none|none|
|» » **additionalProperties**|integer|false|none|none|
|page|integer|false|none|Current page.|
|per_page|integer|false|none|Requested amount of records shown per page of results.|
|records|[[record](#schemarecord)]|false|none|none|
|request_url|string|false|none|The URL of current page of results.|
|result_count|integer|false|none|Total number of matching search results.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## View metadata associated with a single record.

> Code samples

```bash
curl "https://example.com/records/189089.json?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /records/{record_id}.{format}`

If you know its `record_id` you can use this endpoint to view all metadata associated with that specific record.


<h3 id="view-metadata-associated-with-a-single-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|record_id|path|integer|true|Every record has a unique, persistent *record_id*.|
|format|path|string|true|Note - There is a small difference with some field names in the response between JSON and XML.  <br>When a field name has more than one word, JSON format will separate the words with an underscore, eg. "content_partner", whereas XML uses a hyphenated naming convention, eg. "content-partner".<br>|
|Authentication-Token|header|string|false|The DigitalNZ API no longer requires a key to access public content. However, if you plan on using the API regularly, expect to be a high volume consumer or are planning on creating an application, we encourage you to use an API key so that we can:<br>- provide targeted help and support<br>- increase your query throughput (by negotiation)<br>- notify you directly of changes to the API<br>- gather usage metrics to help improve the service  <br><br>API requests that do not pass a valid API key/token are treated as unauthenticated. A maximum rate limit applies across all unauthenticated requests. This rate limit is in place to protect the service from overuse, resulting in unsustainable costs, or potential attack.<br><br>**Getting an API key**  <br>[Create a DigitalNZ account](https://digitalnz.org/sign_up), log in and select "[my API key](https://digitalnz.org/api_keys/edit)" from your username drop-down menu (on the right hand side)'. The key is a long string of jumbled letters and numbers (hash) that is unique to you. You are required to keep the key secret. (Refer to the [Developer API Terms of Use](https://digitalnz.org/about/terms-of-use/developer-api-terms-of-use) for more information).<br><br>**Using an API key**  <br>When you make a call to the API you'll need to pass the key in a custom HTTP header: ‘Authentication-Token’.<br>For example, a query using the ‘curl’ command might look like the following (where ‘{YOUR_API_KEY}’ is replaced with a valid API key):<br><br>`curl -H "Authentication-Token:{YOUR_API_KEY}" http://api.digitalnz.org/v3/records.json?text=kiwi`<br>|
|fields|query|string|false|Comma-separated whitelist of fields to be returned. The syntax *"&fields=verbose"* can be used to return the bulk of the fields, or you can customise which fields you are interested in, eg. *"&fields=id,title,subject,collection,landing_url,locations"*.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
{
  "category": [
    "Newspapers"
  ],
  "collection": [
    "string"
  ],
  "collection_title": [
    "string"
  ],
  "content_partner": [
    "string"
  ],
  "copyright": [
    "All rights reserved"
  ],
  "created_at": "2012-04-21T05:32:02.000+13:00",
  "creator": [
    "string"
  ],
  "date": "1996-01-01T00:00:00.000Z",
  "dc_identifier": [
    "string"
  ],
  "description": "string",
  "display_collection": "string",
  "display_content_partner": "string",
  "display_date": "Circa 1996",
  "id": 1788754,
  "landing_url": "string",
  "large_thumbnail_url": "string",
  "locations": [
    {
      "comment": "Location provided by the Alexander Turnbull Library",
      "lat": -37.508219086,
      "lng": 177.1802173,
      "placename": "White Island"
    }
  ],
  "primary_collection": [
    "string"
  ],
  "rights": "string",
  "rights_url": [
    "string"
  ],
  "source_url": "https://api.digitalnz.org/records/1788754/source",
  "subject": [
    "string"
  ],
  "thumbnail_url": "string",
  "title": "Election night crowd, Wellington, 1931",
  "updated_at": "2020-12-06T01:36:37.359+13:00",
  "usage": [
    "All rights reserved"
  ]
}
```

> 403 Response

```json
{
  "errors": "Invalid API Key"
}
```

> 404 Response

```json
{
  "errors": "Record with ID *record_id* was not found"
}
```

<h3 id="view-metadata-associated-with-a-single-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok|[record](#schemarecord)|
|403|Forbidden|API Key (Authentication-Token) is invalid.|Inline|
|404|Not Found|Resource not found|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## The &quot;More Like This&quot; call returns similar records to the specified ID.

> Code samples

```bash
curl "https://example.com/records/35806021/more_like_this.json?api_key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /records/{record_id}/more_like_this.{format}`

This feature returns a set of search results that are similar (ie have similar metadata) to a specific record.


<h3 id="the-more-like-this-call-returns-similar-records-to-the-specified-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|record_id|path|integer|true|Every record has a unique, persistent *record_id*.|
|format|path|string|true|Note - There is a small difference with some field names in the response between JSON and XML.  <br>When a field name has more than one word, JSON format will separate the words with an underscore, eg. "content_partner", whereas XML uses a hyphenated naming convention, eg. "content-partner".<br>|
|Authentication-Token|header|string|false|The DigitalNZ API no longer requires a key to access public content. However, if you plan on using the API regularly, expect to be a high volume consumer or are planning on creating an application, we encourage you to use an API key so that we can:<br>- provide targeted help and support<br>- increase your query throughput (by negotiation)<br>- notify you directly of changes to the API<br>- gather usage metrics to help improve the service  <br><br>API requests that do not pass a valid API key/token are treated as unauthenticated. A maximum rate limit applies across all unauthenticated requests. This rate limit is in place to protect the service from overuse, resulting in unsustainable costs, or potential attack.<br><br>**Getting an API key**  <br>[Create a DigitalNZ account](https://digitalnz.org/sign_up), log in and select "[my API key](https://digitalnz.org/api_keys/edit)" from your username drop-down menu (on the right hand side)'. The key is a long string of jumbled letters and numbers (hash) that is unique to you. You are required to keep the key secret. (Refer to the [Developer API Terms of Use](https://digitalnz.org/about/terms-of-use/developer-api-terms-of-use) for more information).<br><br>**Using an API key**  <br>When you make a call to the API you'll need to pass the key in a custom HTTP header: ‘Authentication-Token’.<br>For example, a query using the ‘curl’ command might look like the following (where ‘{YOUR_API_KEY}’ is replaced with a valid API key):<br><br>`curl -H "Authentication-Token:{YOUR_API_KEY}" http://api.digitalnz.org/v3/records.json?text=kiwi`<br>|
|fields|query|string|false|Comma-separated whitelist of fields to be returned. The syntax *"&fields=verbose"* can be used to return the bulk of the fields, or you can customise which fields you are interested in, eg. *"&fields=id,title,subject,collection,landing_url,locations"*.<br>|
|mlt_fields|query|string|false|Comma-separated list of fields used to evaluate relatedness. Available fields to compare are *title* and *subject*, eg *&mlt_fields=title,subject* or *&mlt_fields=title*.<br>|
|filtering|query|string|false|More Like This (MLT) queries can be filtered in the same ways as regular searches, using the same syntax outined in the GET /records call above. This enables things like scoping the related records to only return Images eg *&and[category]=Images*, or to only show related records from a specific content partner eg *&and[content_partner]=Puke+Ariki*.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|

> Example responses

> 200 Response

```json
{
  "page": 1,
  "per_page": 5,
  "records": [
    {
      "category": [
        "Newspapers"
      ],
      "collection": [
        "string"
      ],
      "collection_title": [
        "string"
      ],
      "content_partner": [
        "string"
      ],
      "copyright": [
        "All rights reserved"
      ],
      "created_at": "2012-04-21T05:32:02.000+13:00",
      "creator": [
        "string"
      ],
      "date": "1996-01-01T00:00:00.000Z",
      "dc_identifier": [
        "string"
      ],
      "description": "string",
      "display_collection": "string",
      "display_content_partner": "string",
      "display_date": "Circa 1996",
      "id": 1788754,
      "landing_url": "string",
      "large_thumbnail_url": "string",
      "locations": [
        {
          "comment": "Location provided by the Alexander Turnbull Library",
          "lat": -37.508219086,
          "lng": 177.1802173,
          "placename": "White Island"
        }
      ],
      "primary_collection": [
        "string"
      ],
      "rights": "string",
      "rights_url": [
        "string"
      ],
      "source_url": "https://api.digitalnz.org/records/1788754/source",
      "subject": [
        "string"
      ],
      "thumbnail_url": "string",
      "title": "Election night crowd, Wellington, 1931",
      "updated_at": "2020-12-06T01:36:37.359+13:00",
      "usage": [
        "All rights reserved"
      ]
    }
  ],
  "request_url": "https://api.digitalnz.org/records/35806021/more_like_this.json?mlt_fields=title,description&page=1&fields=title,description,subject,display_collection,category&and[category]=Images",
  "result_count": 1907
}
```

> 403 Response

```json
{
  "errors": "Invalid API Key"
}
```

> 404 Response

```json
{
  "errors": "Record with ID *record_id* was not found"
}
```

<h3 id="the-more-like-this-call-returns-similar-records-to-the-specified-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok|Inline|
|403|Forbidden|API Key (Authentication-Token) is invalid.|Inline|
|404|Not Found|Resource not found|Inline|

<h3 id="the-more-like-this-call-returns-similar-records-to-the-specified-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer|false|none|Current page.|
|per_page|integer|false|none|Requested amount of records shown per page of results.|
|records|[[record](#schemarecord)]|false|none|none|
|request_url|string|false|none|The URL of current page of results.|
|result_count|integer|false|none|Total number of matching search results.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_record">record</h2>
<!-- backwards compatibility -->
<a id="schemarecord"></a>
<a id="schema_record"></a>
<a id="tocSrecord"></a>
<a id="tocsrecord"></a>

```json
{
  "category": [
    "Newspapers"
  ],
  "collection": [
    "string"
  ],
  "collection_title": [
    "string"
  ],
  "content_partner": [
    "string"
  ],
  "copyright": [
    "All rights reserved"
  ],
  "created_at": "2012-04-21T05:32:02.000+13:00",
  "creator": [
    "string"
  ],
  "date": "1996-01-01T00:00:00.000Z",
  "dc_identifier": [
    "string"
  ],
  "description": "string",
  "display_collection": "string",
  "display_content_partner": "string",
  "display_date": "Circa 1996",
  "id": 1788754,
  "landing_url": "string",
  "large_thumbnail_url": "string",
  "locations": [
    {
      "comment": "Location provided by the Alexander Turnbull Library",
      "lat": -37.508219086,
      "lng": 177.1802173,
      "placename": "White Island"
    }
  ],
  "primary_collection": [
    "string"
  ],
  "rights": "string",
  "rights_url": [
    "string"
  ],
  "source_url": "https://api.digitalnz.org/records/1788754/source",
  "subject": [
    "string"
  ],
  "thumbnail_url": "string",
  "title": "Election night crowd, Wellington, 1931",
  "updated_at": "2020-12-06T01:36:37.359+13:00",
  "usage": [
    "All rights reserved"
  ]
}
```

*NOTE:* There are a lot of fields that are very rarely used in DigitalNZ. For instance there are custom built fields that are only relevant, and only found on specific collections. The schema below focuses on the most common / well populated fields and does not show every possible field available for a single record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[string]|false|none|There will always be at least 1 human-readable category label in this field.|
|collection|[string]|false|none|In addition to the top level *"display_collection"* above, this field can also contain sub-collections or groupings within the main collection. <br>|
|collection_title|[string]|false|none|For historic reasons this is a duplicate of the previous field ("collection").|
|content_partner|[string]|false|none|Name of the organisation(s), institution(s), or individual(s) making content available through DigitalNZ. This metadata will be present on all records and is usually the name of the organisation that has agreed to the DigitalNZ Metadata Contribution Terms.|
|copyright|[string]|false|none|A copyright statement applying to the object referenced by this record. This field may be empty.|
|created_at|string(date-time)|false|none|The date the record was initially harvested into DigitalNZ.|
|creator|[string]|false|none|The name's of the people, organisations, institutions, services etc. who created the content (eg. the photographer, artist, writer or author).|
|date|[string]|false|none|Date information associated with this record (e.g. 1996-01-01T00:00:00.000Z). This field may be empty.|
|dc_identifier|[string]|false|none|Identifiers relating to the content from the content partner's system.|
|description|string|false|none|Description of the record. Most records have a description.|
|display_collection|string|false|none|The single main collection or website that the item belongs to. This metadata will be present on all records.|
|display_content_partner|string|false|none|The main Content Partner, for cases when there are more than one. This metadata will be present on all records.|
|display_date|string|false|none|Where provided, this field contains a human readable version of the date information.|
|id|integer|false|none|All records have a unique identifier used within the DigitalNZ system.|
|landing_url|string|false|none|This field will always contain a URL of the item on the content partner's website.  <br>*Note:* Please use the source_url when providing HTML links.<br>|
|large_thumbnail_url|string|false|none|URL for a larger thumbnail image with a width of up to 800px. NOTE - the API Terms do not extend rights to the use of images accessable throught the *large_thumbnail_url* field.|
|locations|[object]|false|none|Geographical location information including latitude and longitude co-ordinates, text based location information, and details about where the location information comes from (eg. "Location provided by Museum of New Zealand Te Papa Tongarewa")<br>|
|primary_collection|[string]|false|none|In most cases this is the same as *display_collection*, but will occasionally a second value.|
|rights|string|false|none|Rights information. Can be a rights statement explaining the rights of the record or a link to a webpage with more detailed rights information.|
|rights_url|[string]|false|none|An array of HTTP URLs resolving to a rights statement or terms of use information for the resource.|
|source_url|string|false|none|This URL will always be present and provides a redirect to the landing_url. This link should be used as the main click-through to the content. Passing users through this link allows DNZ to count the number of click-throughs, as well as trigger link-checking activities that help clean up stale links in DigitalNZ.|
|subject|[string]|false|none|Keywords about the content.|
|thumbnail_url|string|false|none|URL for a thumbnail image of the content. The size varies depending on what is available but we aim for a width of 250px. This field is mostly populated on records with a 'category' of 'Images', but is also sometimes found on others (eg. "Videos").<br>|
|title|string|false|none|Title of the record. All records should have a title.|
|updated_at|string(date-time)|false|none|The date the record was last updated/re-harvested into DigitalNZ.|
|usage|[string]|false|none|This field is always present and contains human-understandable information about how the item may be used based on its copyright/license.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|Newspapers|
|category|Images|
|category|Books|
|category|Articles|
|category|Journals|
|category|Archives|
|category|Audio|
|category|Other|
|category|Manuscripts|
|category|Reference sources|
|category|Research papers|
|category|Videos|
|category|Music Score|
|category|Groups|
|category|Data|
|category|Websites|
|category|Sets|
|copyright|All rights reserved|
|copyright|Some rights reserved|
|copyright|No known copyright restrictions|
|copyright|Unknown|
|usage|All rights reserved|
|usage|Share|
|usage|Modify|
|usage|Use commercially|
|usage|Unknown|
