<h1 id="google-search-console-api">Google Search Console API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Search Console API provides access to both Search Console data (verified users only) and to public information on an URL basis (anyone)

Base URLs:

* <a href="https://searchconsole.googleapis.com/">https://searchconsole.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/webmaster-tools/search-console-api/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/webmasters|View and manage Search Console data for your verified sites|
|https://www.googleapis.com/auth/webmasters.readonly|View Search Console data for your verified sites|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/webmasters|View and manage Search Console data for your verified sites|
|https://www.googleapis.com/auth/webmasters.readonly|View Search Console data for your verified sites|

<h1 id="google-search-console-api-searchanalytics">searchanalytics</h1>

## webmasters.searchanalytics.query

<a id="opIdwebmasters.searchanalytics.query"></a>

> Code samples

```bash
curl https://www.googleapis.com/webmasters/v3/sites/string/searchAnalytics/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "aggregationType": "AUTO",
    "dataState": "DATA_STATE_UNSPECIFIED",
    "dimensionFilterGroups": [
      {
        "filters": [
          {
            "dimension": "QUERY",
            "expression": "string",
            "operator": "EQUALS"
          }
        ],
        "groupType": "AND"
      }
    ],
    "dimensions": [
      "DATE"
    ],
    "endDate": "string",
    "rowLimit": 0,
    "searchType": "WEB",
    "startDate": "string",
    "startRow": 0,
    "type": "WEB"
  }'
```

`POST /webmasters/v3/sites/{siteUrl}/searchAnalytics/query`

Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

> Body parameter

```json
{
  "aggregationType": "AUTO",
  "dataState": "DATA_STATE_UNSPECIFIED",
  "dimensionFilterGroups": [
    {
      "filters": [
        {
          "dimension": "QUERY",
          "expression": "string",
          "operator": "EQUALS"
        }
      ],
      "groupType": "AND"
    }
  ],
  "dimensions": [
    "DATE"
  ],
  "endDate": "string",
  "rowLimit": 0,
  "searchType": "WEB",
  "startDate": "string",
  "startRow": 0,
  "type": "WEB"
}
```

<h3 id="webmasterssearchanalyticsquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The site's URL, including protocol. For example: `http://www.example.com/`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[SearchAnalyticsQueryRequest](#schemasearchanalyticsqueryrequest)|false|none|
|» aggregationType|body|string|false|[Optional; Default is \"auto\"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see the help documentation to learn how data is calculated differently by site versus by page. **Note:** If you group or filter by page, you cannot aggregate by property. If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid.|
|» dataState|body|string|false|The data state to be fetched, can be full or all, the latter including full and partial data.|
|» dimensionFilterGroups|body|[[ApiDimensionFilterGroup](#schemaapidimensionfiltergroup)]|false|[Optional] Zero or more filters to apply to the dimension grouping values; for example, 'query contains \"buy\"' to see only data where the query string contains the substring \"buy\" (not case-sensitive). You can filter by a dimension without grouping by it.|
|» dimensions|body|[string]|false|[Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search Analytics page. Dimensions are combined to create a unique row key for each row. Results are grouped in the order that you supply these dimensions.|
|» endDate|body|string|false|[Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value is included in the range.|
|» rowLimit|body|integer(int32)|false|[Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 25,000 (inclusive).|
|» searchType|body|string|false|[Optional; Default is \"web\"] The search type to filter for.|
|» startDate|body|string|false| [Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range.|
|» startRow|body|integer(int32)|false|[Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number.|
|» type|body|string|false|Optional. [Optional; Default is \"web\"] Type of report: search type, or either Discover or Gnews.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» aggregationType|AUTO|
|» aggregationType|BY_PROPERTY|
|» aggregationType|BY_PAGE|
|» aggregationType|BY_NEWS_SHOWCASE_PANEL|
|» dataState|DATA_STATE_UNSPECIFIED|
|» dataState|FINAL|
|» dataState|ALL|
|» dimensions|DATE|
|» dimensions|QUERY|
|» dimensions|PAGE|
|» dimensions|COUNTRY|
|» dimensions|DEVICE|
|» dimensions|SEARCH_APPEARANCE|
|» searchType|WEB|
|» searchType|IMAGE|
|» searchType|VIDEO|
|» searchType|NEWS|
|» searchType|DISCOVER|
|» searchType|GOOGLE_NEWS|
|» type|WEB|
|» type|IMAGE|
|» type|VIDEO|
|» type|NEWS|
|» type|DISCOVER|
|» type|GOOGLE_NEWS|

> Example responses

> 200 Response

```json
{
  "responseAggregationType": "AUTO",
  "rows": [
    {
      "clicks": 0,
      "ctr": 0,
      "impressions": 0,
      "keys": [
        "string"
      ],
      "position": 0
    }
  ]
}
```

<h3 id="webmasterssearchanalyticsquery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchAnalyticsQueryResponse](#schemasearchanalyticsqueryresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters ), Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters.readonly )
</aside>

<h1 id="google-search-console-api-sitemaps">sitemaps</h1>

## webmasters.sitemaps.list

<a id="opIdwebmasters.sitemaps.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/webmasters/v3/sites/string/sitemaps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webmasters/v3/sites/{siteUrl}/sitemaps`

 Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).

<h3 id="webmasterssitemapslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The site's URL, including protocol. For example: `http://www.example.com/`.|
|sitemapIndex|query|string|false| A URL of a site's sitemap index. For example: `http://www.example.com/sitemapindex.xml`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "sitemap": [
    {
      "contents": [
        {
          "indexed": "string",
          "submitted": "string",
          "type": "WEB"
        }
      ],
      "errors": "string",
      "isPending": true,
      "isSitemapsIndex": true,
      "lastDownloaded": "string",
      "lastSubmitted": "string",
      "path": "string",
      "type": "NOT_SITEMAP",
      "warnings": "string"
    }
  ]
}
```

<h3 id="webmasterssitemapslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SitemapsListResponse](#schemasitemapslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters ), Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters.readonly )
</aside>

## webmasters.sitemaps.get

<a id="opIdwebmasters.sitemaps.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/webmasters/v3/sites/string/sitemaps/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}`

Retrieves information about a specific sitemap.

<h3 id="webmasterssitemapsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The site's URL, including protocol. For example: `http://www.example.com/`.|
|feedpath|path|string|true|The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "contents": [
    {
      "indexed": "string",
      "submitted": "string",
      "type": "WEB"
    }
  ],
  "errors": "string",
  "isPending": true,
  "isSitemapsIndex": true,
  "lastDownloaded": "string",
  "lastSubmitted": "string",
  "path": "string",
  "type": "NOT_SITEMAP",
  "warnings": "string"
}
```

<h3 id="webmasterssitemapsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WmxSitemap](#schemawmxsitemap)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters ), Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters.readonly )
</aside>

## webmasters.sitemaps.submit

<a id="opIdwebmasters.sitemaps.submit"></a>

> Code samples

```bash
curl https://www.googleapis.com/webmasters/v3/sites/string/sitemaps/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}`

Submits a sitemap for a site.

<h3 id="webmasterssitemapssubmit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The site's URL, including protocol. For example: `http://www.example.com/`.|
|feedpath|path|string|true|The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="webmasterssitemapssubmit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters )
</aside>

## webmasters.sitemaps.delete

<a id="opIdwebmasters.sitemaps.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/webmasters/v3/sites/string/sitemaps/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}`

Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.

<h3 id="webmasterssitemapsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The site's URL, including protocol. For example: `http://www.example.com/`.|
|feedpath|path|string|true|The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="webmasterssitemapsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters )
</aside>

<h1 id="google-search-console-api-sites">sites</h1>

## webmasters.sites.list

<a id="opIdwebmasters.sites.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/webmasters/v3/sites \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webmasters/v3/sites`

 Lists the user's Search Console sites.

<h3 id="webmasterssiteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "siteEntry": [
    {
      "permissionLevel": "SITE_PERMISSION_LEVEL_UNSPECIFIED",
      "siteUrl": "string"
    }
  ]
}
```

<h3 id="webmasterssiteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SitesListResponse](#schemasiteslistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters ), Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters.readonly )
</aside>

## webmasters.sites.get

<a id="opIdwebmasters.sites.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/webmasters/v3/sites/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webmasters/v3/sites/{siteUrl}`

 Retrieves information about specific site.

<h3 id="webmasterssitesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "permissionLevel": "SITE_PERMISSION_LEVEL_UNSPECIFIED",
  "siteUrl": "string"
}
```

<h3 id="webmasterssitesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WmxSite](#schemawmxsite)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters ), Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters.readonly )
</aside>

## webmasters.sites.add

<a id="opIdwebmasters.sites.add"></a>

> Code samples

```bash
curl https://www.googleapis.com/webmasters/v3/sites/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /webmasters/v3/sites/{siteUrl}`

 Adds a site to the set of the user's sites in Search Console.

<h3 id="webmasterssitesadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The URL of the site to add.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="webmasterssitesadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters )
</aside>

## webmasters.sites.delete

<a id="opIdwebmasters.sites.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/webmasters/v3/sites/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webmasters/v3/sites/{siteUrl}`

 Removes a site from the set of the user's Search Console sites.

<h3 id="webmasterssitesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="webmasterssitesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters )
</aside>

<h1 id="google-search-console-api-urlinspection">urlInspection</h1>

## searchconsole.urlInspection.index.inspect

<a id="opIdsearchconsole.urlInspection.index.inspect"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/urlInspection/index:inspect \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inspectionUrl": "string",
    "languageCode": "string",
    "siteUrl": "string"
  }'
```

`POST /v1/urlInspection/index:inspect`

Index inspection.

> Body parameter

```json
{
  "inspectionUrl": "string",
  "languageCode": "string",
  "siteUrl": "string"
}
```

<h3 id="searchconsoleurlinspectionindexinspect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[InspectUrlIndexRequest](#schemainspecturlindexrequest)|false|none|
|» inspectionUrl|body|string|false|Required. URL to inspect. Must be under the property specified in "site_url".|
|» languageCode|body|string|false|Optional. An [IETF BCP-47](https://en.wikipedia.org/wiki/IETF_language_tag) language code representing the requested language for translated issue messages, e.g. "en-US", "or "de-CH". Default value is "en-US".|
|» siteUrl|body|string|false|Required. The URL of the property as defined in Search Console. **Examples:** `http://www.example.com/` for a URL-prefix property, or `sc-domain:example.com` for a Domain property.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "inspectionResult": {
    "ampResult": {
      "ampIndexStatusVerdict": "VERDICT_UNSPECIFIED",
      "ampUrl": "string",
      "indexingState": "AMP_INDEXING_STATE_UNSPECIFIED",
      "issues": [
        {
          "issueMessage": "string",
          "severity": "SEVERITY_UNSPECIFIED"
        }
      ],
      "lastCrawlTime": "string",
      "pageFetchState": "PAGE_FETCH_STATE_UNSPECIFIED",
      "robotsTxtState": "ROBOTS_TXT_STATE_UNSPECIFIED",
      "verdict": "VERDICT_UNSPECIFIED"
    },
    "indexStatusResult": {
      "coverageState": "string",
      "crawledAs": "CRAWLING_USER_AGENT_UNSPECIFIED",
      "googleCanonical": "string",
      "indexingState": "INDEXING_STATE_UNSPECIFIED",
      "lastCrawlTime": "string",
      "pageFetchState": "PAGE_FETCH_STATE_UNSPECIFIED",
      "referringUrls": [
        "string"
      ],
      "robotsTxtState": "ROBOTS_TXT_STATE_UNSPECIFIED",
      "sitemap": [
        "string"
      ],
      "userCanonical": "string",
      "verdict": "VERDICT_UNSPECIFIED"
    },
    "inspectionResultLink": "string",
    "mobileUsabilityResult": {
      "issues": [
        {
          "issueType": "MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED",
          "message": "string",
          "severity": "SEVERITY_UNSPECIFIED"
        }
      ],
      "verdict": "VERDICT_UNSPECIFIED"
    },
    "richResultsResult": {
      "detectedItems": [
        {
          "items": [
            {
              "issues": [
                {
                  "issueMessage": "string",
                  "severity": "SEVERITY_UNSPECIFIED"
                }
              ],
              "name": "string"
            }
          ],
          "richResultType": "string"
        }
      ],
      "verdict": "VERDICT_UNSPECIFIED"
    }
  }
}
```

<h3 id="searchconsoleurlinspectionindexinspect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[InspectUrlIndexResponse](#schemainspecturlindexresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters ), Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters.readonly )
</aside>

<h1 id="google-search-console-api-urltestingtools">urlTestingTools</h1>

## searchconsole.urlTestingTools.mobileFriendlyTest.run

<a id="opIdsearchconsole.urlTestingTools.mobileFriendlyTest.run"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/urlTestingTools/mobileFriendlyTest:run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "requestScreenshot": true,
    "url": "string"
  }'
```

`POST /v1/urlTestingTools/mobileFriendlyTest:run`

Runs Mobile-Friendly Test for a given URL.

> Body parameter

```json
{
  "requestScreenshot": true,
  "url": "string"
}
```

<h3 id="searchconsoleurltestingtoolsmobilefriendlytestrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[RunMobileFriendlyTestRequest](#schemarunmobilefriendlytestrequest)|false|none|
|» requestScreenshot|body|boolean|false|Whether or not screenshot is requested. Default is false.|
|» url|body|string|false|URL for inspection.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "mobileFriendliness": "MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED",
  "mobileFriendlyIssues": [
    {
      "rule": "MOBILE_FRIENDLY_RULE_UNSPECIFIED"
    }
  ],
  "resourceIssues": [
    {
      "blockedResource": {
        "url": "string"
      }
    }
  ],
  "screenshot": {
    "data": "string",
    "mimeType": "string"
  },
  "testStatus": {
    "details": "string",
    "status": "TEST_STATUS_UNSPECIFIED"
  }
}
```

<h3 id="searchconsoleurltestingtoolsmobilefriendlytestrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[RunMobileFriendlyTestResponse](#schemarunmobilefriendlytestresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AmpInspectionResult">AmpInspectionResult</h2>
<!-- backwards compatibility -->
<a id="schemaampinspectionresult"></a>
<a id="schema_AmpInspectionResult"></a>
<a id="tocSampinspectionresult"></a>
<a id="tocsampinspectionresult"></a>

```json
{
  "ampIndexStatusVerdict": "VERDICT_UNSPECIFIED",
  "ampUrl": "string",
  "indexingState": "AMP_INDEXING_STATE_UNSPECIFIED",
  "issues": [
    {
      "issueMessage": "string",
      "severity": "SEVERITY_UNSPECIFIED"
    }
  ],
  "lastCrawlTime": "string",
  "pageFetchState": "PAGE_FETCH_STATE_UNSPECIFIED",
  "robotsTxtState": "ROBOTS_TXT_STATE_UNSPECIFIED",
  "verdict": "VERDICT_UNSPECIFIED"
}
```

AMP inspection result of the live page or the current information from Google's index, depending on whether you requested a live inspection or not.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ampIndexStatusVerdict|string|false|none|Index status of the AMP URL.|
|ampUrl|string|false|none|URL of the AMP that was inspected. If the submitted URL is a desktop page that refers to an AMP version, the AMP version will be inspected.|
|indexingState|string|false|none|Whether or not the page blocks indexing through a noindex rule.|
|issues|[[AmpIssue](#schemaampissue)]|false|none|A list of zero or more AMP issues found for the inspected URL.|
|lastCrawlTime|string(google-datetime)|false|none|Last time this AMP version was crawled by Google. Absent if the URL was never crawled successfully.|
|pageFetchState|string|false|none|Whether or not Google could fetch the AMP.|
|robotsTxtState|string|false|none|Whether or not the page is blocked to Google by a robots.txt rule.|
|verdict|string|false|none|The status of the most severe error on the page. If a page has both warnings and errors, the page status is error. Error status means the page cannot be shown in Search results.|

#### Enumerated Values

|Property|Value|
|---|---|
|ampIndexStatusVerdict|VERDICT_UNSPECIFIED|
|ampIndexStatusVerdict|PASS|
|ampIndexStatusVerdict|PARTIAL|
|ampIndexStatusVerdict|FAIL|
|ampIndexStatusVerdict|NEUTRAL|
|indexingState|AMP_INDEXING_STATE_UNSPECIFIED|
|indexingState|AMP_INDEXING_ALLOWED|
|indexingState|BLOCKED_DUE_TO_NOINDEX|
|indexingState|BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER|
|pageFetchState|PAGE_FETCH_STATE_UNSPECIFIED|
|pageFetchState|SUCCESSFUL|
|pageFetchState|SOFT_404|
|pageFetchState|BLOCKED_ROBOTS_TXT|
|pageFetchState|NOT_FOUND|
|pageFetchState|ACCESS_DENIED|
|pageFetchState|SERVER_ERROR|
|pageFetchState|REDIRECT_ERROR|
|pageFetchState|ACCESS_FORBIDDEN|
|pageFetchState|BLOCKED_4XX|
|pageFetchState|INTERNAL_CRAWL_ERROR|
|pageFetchState|INVALID_URL|
|robotsTxtState|ROBOTS_TXT_STATE_UNSPECIFIED|
|robotsTxtState|ALLOWED|
|robotsTxtState|DISALLOWED|
|verdict|VERDICT_UNSPECIFIED|
|verdict|PASS|
|verdict|PARTIAL|
|verdict|FAIL|
|verdict|NEUTRAL|

<h2 id="tocS_AmpIssue">AmpIssue</h2>
<!-- backwards compatibility -->
<a id="schemaampissue"></a>
<a id="schema_AmpIssue"></a>
<a id="tocSampissue"></a>
<a id="tocsampissue"></a>

```json
{
  "issueMessage": "string",
  "severity": "SEVERITY_UNSPECIFIED"
}
```

AMP issue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueMessage|string|false|none|Brief description of this issue.|
|severity|string|false|none|Severity of this issue: WARNING or ERROR.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|SEVERITY_UNSPECIFIED|
|severity|WARNING|
|severity|ERROR|

<h2 id="tocS_ApiDataRow">ApiDataRow</h2>
<!-- backwards compatibility -->
<a id="schemaapidatarow"></a>
<a id="schema_ApiDataRow"></a>
<a id="tocSapidatarow"></a>
<a id="tocsapidatarow"></a>

```json
{
  "clicks": 0,
  "ctr": 0,
  "impressions": 0,
  "keys": [
    "string"
  ],
  "position": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clicks|number(double)|false|none|none|
|ctr|number(double)|false|none|none|
|impressions|number(double)|false|none|none|
|keys|[string]|false|none|none|
|position|number(double)|false|none|none|

<h2 id="tocS_ApiDimensionFilter">ApiDimensionFilter</h2>
<!-- backwards compatibility -->
<a id="schemaapidimensionfilter"></a>
<a id="schema_ApiDimensionFilter"></a>
<a id="tocSapidimensionfilter"></a>
<a id="tocsapidimensionfilter"></a>

```json
{
  "dimension": "QUERY",
  "expression": "string",
  "operator": "EQUALS"
}
```

A filter test to be applied to each row in the data set, where a match can return the row. Filters are string comparisons, and values and dimension names are not case-sensitive. Individual filters are either AND'ed or OR'ed within their parent filter group, according to the group's group type. You do not need to group by a specified dimension to filter against it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimension|string|false|none|none|
|expression|string|false|none|none|
|operator|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|dimension|QUERY|
|dimension|PAGE|
|dimension|COUNTRY|
|dimension|DEVICE|
|dimension|SEARCH_APPEARANCE|
|operator|EQUALS|
|operator|NOT_EQUALS|
|operator|CONTAINS|
|operator|NOT_CONTAINS|
|operator|INCLUDING_REGEX|
|operator|EXCLUDING_REGEX|

<h2 id="tocS_ApiDimensionFilterGroup">ApiDimensionFilterGroup</h2>
<!-- backwards compatibility -->
<a id="schemaapidimensionfiltergroup"></a>
<a id="schema_ApiDimensionFilterGroup"></a>
<a id="tocSapidimensionfiltergroup"></a>
<a id="tocsapidimensionfiltergroup"></a>

```json
{
  "filters": [
    {
      "dimension": "QUERY",
      "expression": "string",
      "operator": "EQUALS"
    }
  ],
  "groupType": "AND"
}
```

A set of dimension value filters to test against each row. Only rows that pass all filter groups will be returned. All results within a filter group are either AND'ed or OR'ed together, depending on the group type selected. All filter groups are AND'ed together.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[[ApiDimensionFilter](#schemaapidimensionfilter)]|false|none|none|
|groupType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|groupType|AND|

<h2 id="tocS_BlockedResource">BlockedResource</h2>
<!-- backwards compatibility -->
<a id="schemablockedresource"></a>
<a id="schema_BlockedResource"></a>
<a id="tocSblockedresource"></a>
<a id="tocsblockedresource"></a>

```json
{
  "url": "string"
}
```

Blocked resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|URL of the blocked resource.|

<h2 id="tocS_DetectedItems">DetectedItems</h2>
<!-- backwards compatibility -->
<a id="schemadetecteditems"></a>
<a id="schema_DetectedItems"></a>
<a id="tocSdetecteditems"></a>
<a id="tocsdetecteditems"></a>

```json
{
  "items": [
    {
      "issues": [
        {
          "issueMessage": "string",
          "severity": "SEVERITY_UNSPECIFIED"
        }
      ],
      "name": "string"
    }
  ],
  "richResultType": "string"
}
```

Rich Results items grouped by type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Item](#schemaitem)]|false|none|List of Rich Results items.|
|richResultType|string|false|none|Rich Results type|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "data": "string",
  "mimeType": "string"
}
```

Describe image data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string(byte)|false|none|Image data in format determined by the mime type. Currently, the format will always be "image/png", but this might change in the future.|
|mimeType|string|false|none|The mime-type of the image data.|

<h2 id="tocS_IndexStatusInspectionResult">IndexStatusInspectionResult</h2>
<!-- backwards compatibility -->
<a id="schemaindexstatusinspectionresult"></a>
<a id="schema_IndexStatusInspectionResult"></a>
<a id="tocSindexstatusinspectionresult"></a>
<a id="tocsindexstatusinspectionresult"></a>

```json
{
  "coverageState": "string",
  "crawledAs": "CRAWLING_USER_AGENT_UNSPECIFIED",
  "googleCanonical": "string",
  "indexingState": "INDEXING_STATE_UNSPECIFIED",
  "lastCrawlTime": "string",
  "pageFetchState": "PAGE_FETCH_STATE_UNSPECIFIED",
  "referringUrls": [
    "string"
  ],
  "robotsTxtState": "ROBOTS_TXT_STATE_UNSPECIFIED",
  "sitemap": [
    "string"
  ],
  "userCanonical": "string",
  "verdict": "VERDICT_UNSPECIFIED"
}
```

Results of index status inspection for either the live page or the version in Google's index, depending on whether you requested a live inspection or not. For more information, see the [Index coverage report documentation](https://support.google.com/webmasters/answer/7440203).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coverageState|string|false|none|Could Google find and index the page. More details about page indexing appear in 'indexing_state'.|
|crawledAs|string|false|none|Primary crawler that was used by Google to crawl your site.|
|googleCanonical|string|false|none|The URL of the page that Google selected as canonical. If the page was not indexed, this field is absent.|
|indexingState|string|false|none|Whether or not the page blocks indexing through a noindex rule.|
|lastCrawlTime|string(google-datetime)|false|none|Last time this URL was crawled by Google using the [primary crawler](https://support.google.com/webmasters/answer/7440203#primary_crawler). Absent if the URL was never crawled successfully.|
|pageFetchState|string|false|none|Whether or not Google could retrieve the page from your server. Equivalent to ["page fetch"](https://support.google.com/webmasters/answer/9012289#index_coverage) in the URL inspection report.|
|referringUrls|[string]|false|none|URLs that link to the inspected URL, directly and indirectly.|
|robotsTxtState|string|false|none|Whether or not the page is blocked to Google by a robots.txt rule.|
|sitemap|[string]|false|none|Any sitemaps that this URL was listed in, as known by Google. Not guaranteed to be an exhaustive list, especially if Google did not discover this URL through a sitemap. Absent if no sitemaps were found.|
|userCanonical|string|false|none|The URL that your page or site [declares as canonical](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls?#define-canonical). If you did not declare a canonical URL, this field is absent.|
|verdict|string|false|none|High level verdict about whether the URL *is* indexed (indexed status), or *can be* indexed (live inspection).|

#### Enumerated Values

|Property|Value|
|---|---|
|crawledAs|CRAWLING_USER_AGENT_UNSPECIFIED|
|crawledAs|DESKTOP|
|crawledAs|MOBILE|
|indexingState|INDEXING_STATE_UNSPECIFIED|
|indexingState|INDEXING_ALLOWED|
|indexingState|BLOCKED_BY_META_TAG|
|indexingState|BLOCKED_BY_HTTP_HEADER|
|indexingState|BLOCKED_BY_ROBOTS_TXT|
|pageFetchState|PAGE_FETCH_STATE_UNSPECIFIED|
|pageFetchState|SUCCESSFUL|
|pageFetchState|SOFT_404|
|pageFetchState|BLOCKED_ROBOTS_TXT|
|pageFetchState|NOT_FOUND|
|pageFetchState|ACCESS_DENIED|
|pageFetchState|SERVER_ERROR|
|pageFetchState|REDIRECT_ERROR|
|pageFetchState|ACCESS_FORBIDDEN|
|pageFetchState|BLOCKED_4XX|
|pageFetchState|INTERNAL_CRAWL_ERROR|
|pageFetchState|INVALID_URL|
|robotsTxtState|ROBOTS_TXT_STATE_UNSPECIFIED|
|robotsTxtState|ALLOWED|
|robotsTxtState|DISALLOWED|
|verdict|VERDICT_UNSPECIFIED|
|verdict|PASS|
|verdict|PARTIAL|
|verdict|FAIL|
|verdict|NEUTRAL|

<h2 id="tocS_InspectUrlIndexRequest">InspectUrlIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemainspecturlindexrequest"></a>
<a id="schema_InspectUrlIndexRequest"></a>
<a id="tocSinspecturlindexrequest"></a>
<a id="tocsinspecturlindexrequest"></a>

```json
{
  "inspectionUrl": "string",
  "languageCode": "string",
  "siteUrl": "string"
}
```

Index inspection request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inspectionUrl|string|false|none|Required. URL to inspect. Must be under the property specified in "site_url".|
|languageCode|string|false|none|Optional. An [IETF BCP-47](https://en.wikipedia.org/wiki/IETF_language_tag) language code representing the requested language for translated issue messages, e.g. "en-US", "or "de-CH". Default value is "en-US".|
|siteUrl|string|false|none|Required. The URL of the property as defined in Search Console. **Examples:** `http://www.example.com/` for a URL-prefix property, or `sc-domain:example.com` for a Domain property.|

<h2 id="tocS_InspectUrlIndexResponse">InspectUrlIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemainspecturlindexresponse"></a>
<a id="schema_InspectUrlIndexResponse"></a>
<a id="tocSinspecturlindexresponse"></a>
<a id="tocsinspecturlindexresponse"></a>

```json
{
  "inspectionResult": {
    "ampResult": {
      "ampIndexStatusVerdict": "VERDICT_UNSPECIFIED",
      "ampUrl": "string",
      "indexingState": "AMP_INDEXING_STATE_UNSPECIFIED",
      "issues": [
        {
          "issueMessage": "string",
          "severity": "SEVERITY_UNSPECIFIED"
        }
      ],
      "lastCrawlTime": "string",
      "pageFetchState": "PAGE_FETCH_STATE_UNSPECIFIED",
      "robotsTxtState": "ROBOTS_TXT_STATE_UNSPECIFIED",
      "verdict": "VERDICT_UNSPECIFIED"
    },
    "indexStatusResult": {
      "coverageState": "string",
      "crawledAs": "CRAWLING_USER_AGENT_UNSPECIFIED",
      "googleCanonical": "string",
      "indexingState": "INDEXING_STATE_UNSPECIFIED",
      "lastCrawlTime": "string",
      "pageFetchState": "PAGE_FETCH_STATE_UNSPECIFIED",
      "referringUrls": [
        "string"
      ],
      "robotsTxtState": "ROBOTS_TXT_STATE_UNSPECIFIED",
      "sitemap": [
        "string"
      ],
      "userCanonical": "string",
      "verdict": "VERDICT_UNSPECIFIED"
    },
    "inspectionResultLink": "string",
    "mobileUsabilityResult": {
      "issues": [
        {
          "issueType": "MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED",
          "message": "string",
          "severity": "SEVERITY_UNSPECIFIED"
        }
      ],
      "verdict": "VERDICT_UNSPECIFIED"
    },
    "richResultsResult": {
      "detectedItems": [
        {
          "items": [
            {
              "issues": [
                {
                  "issueMessage": "string",
                  "severity": "SEVERITY_UNSPECIFIED"
                }
              ],
              "name": "string"
            }
          ],
          "richResultType": "string"
        }
      ],
      "verdict": "VERDICT_UNSPECIFIED"
    }
  }
}
```

Index-Status inspection response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inspectionResult|[UrlInspectionResult](#schemaurlinspectionresult)|false|none|URL inspection results.|

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "issues": [
    {
      "issueMessage": "string",
      "severity": "SEVERITY_UNSPECIFIED"
    }
  ],
  "name": "string"
}
```

A specific rich result found on the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issues|[[RichResultsIssue](#schemarichresultsissue)]|false|none|A list of zero or more rich result issues found for this instance.|
|name|string|false|none|The user-provided name of this item.|

<h2 id="tocS_MobileFriendlyIssue">MobileFriendlyIssue</h2>
<!-- backwards compatibility -->
<a id="schemamobilefriendlyissue"></a>
<a id="schema_MobileFriendlyIssue"></a>
<a id="tocSmobilefriendlyissue"></a>
<a id="tocsmobilefriendlyissue"></a>

```json
{
  "rule": "MOBILE_FRIENDLY_RULE_UNSPECIFIED"
}
```

Mobile-friendly issue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rule|string|false|none|Rule violated.|

#### Enumerated Values

|Property|Value|
|---|---|
|rule|MOBILE_FRIENDLY_RULE_UNSPECIFIED|
|rule|USES_INCOMPATIBLE_PLUGINS|
|rule|CONFIGURE_VIEWPORT|
|rule|FIXED_WIDTH_VIEWPORT|
|rule|SIZE_CONTENT_TO_VIEWPORT|
|rule|USE_LEGIBLE_FONT_SIZES|
|rule|TAP_TARGETS_TOO_CLOSE|

<h2 id="tocS_MobileUsabilityInspectionResult">MobileUsabilityInspectionResult</h2>
<!-- backwards compatibility -->
<a id="schemamobileusabilityinspectionresult"></a>
<a id="schema_MobileUsabilityInspectionResult"></a>
<a id="tocSmobileusabilityinspectionresult"></a>
<a id="tocsmobileusabilityinspectionresult"></a>

```json
{
  "issues": [
    {
      "issueType": "MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED",
      "message": "string",
      "severity": "SEVERITY_UNSPECIFIED"
    }
  ],
  "verdict": "VERDICT_UNSPECIFIED"
}
```

Mobile-usability inspection results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issues|[[MobileUsabilityIssue](#schemamobileusabilityissue)]|false|none|A list of zero or more mobile-usability issues detected for this URL.|
|verdict|string|false|none|High-level mobile-usability inspection result for this URL.|

#### Enumerated Values

|Property|Value|
|---|---|
|verdict|VERDICT_UNSPECIFIED|
|verdict|PASS|
|verdict|PARTIAL|
|verdict|FAIL|
|verdict|NEUTRAL|

<h2 id="tocS_MobileUsabilityIssue">MobileUsabilityIssue</h2>
<!-- backwards compatibility -->
<a id="schemamobileusabilityissue"></a>
<a id="schema_MobileUsabilityIssue"></a>
<a id="tocSmobileusabilityissue"></a>
<a id="tocsmobileusabilityissue"></a>

```json
{
  "issueType": "MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED",
  "message": "string",
  "severity": "SEVERITY_UNSPECIFIED"
}
```

Mobile-usability issue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueType|string|false|none|Mobile-usability issue type.|
|message|string|false|none|Additional information regarding the issue.|
|severity|string|false|none|Not returned; reserved for future use.|

#### Enumerated Values

|Property|Value|
|---|---|
|issueType|MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED|
|issueType|USES_INCOMPATIBLE_PLUGINS|
|issueType|CONFIGURE_VIEWPORT|
|issueType|FIXED_WIDTH_VIEWPORT|
|issueType|SIZE_CONTENT_TO_VIEWPORT|
|issueType|USE_LEGIBLE_FONT_SIZES|
|issueType|TAP_TARGETS_TOO_CLOSE|
|severity|SEVERITY_UNSPECIFIED|
|severity|WARNING|
|severity|ERROR|

<h2 id="tocS_ResourceIssue">ResourceIssue</h2>
<!-- backwards compatibility -->
<a id="schemaresourceissue"></a>
<a id="schema_ResourceIssue"></a>
<a id="tocSresourceissue"></a>
<a id="tocsresourceissue"></a>

```json
{
  "blockedResource": {
    "url": "string"
  }
}
```

Information about a resource with issue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockedResource|[BlockedResource](#schemablockedresource)|false|none|Describes a blocked resource issue.|

<h2 id="tocS_RichResultsInspectionResult">RichResultsInspectionResult</h2>
<!-- backwards compatibility -->
<a id="schemarichresultsinspectionresult"></a>
<a id="schema_RichResultsInspectionResult"></a>
<a id="tocSrichresultsinspectionresult"></a>
<a id="tocsrichresultsinspectionresult"></a>

```json
{
  "detectedItems": [
    {
      "items": [
        {
          "issues": [
            {
              "issueMessage": "string",
              "severity": "SEVERITY_UNSPECIFIED"
            }
          ],
          "name": "string"
        }
      ],
      "richResultType": "string"
    }
  ],
  "verdict": "VERDICT_UNSPECIFIED"
}
```

Rich-Results inspection result, including any rich results found at this URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedItems|[[DetectedItems](#schemadetecteditems)]|false|none|A list of zero or more rich results detected on this page. Rich results that cannot even be parsed due to syntactic issues will not be listed here.|
|verdict|string|false|none|High-level rich results inspection result for this URL.|

#### Enumerated Values

|Property|Value|
|---|---|
|verdict|VERDICT_UNSPECIFIED|
|verdict|PASS|
|verdict|PARTIAL|
|verdict|FAIL|
|verdict|NEUTRAL|

<h2 id="tocS_RichResultsIssue">RichResultsIssue</h2>
<!-- backwards compatibility -->
<a id="schemarichresultsissue"></a>
<a id="schema_RichResultsIssue"></a>
<a id="tocSrichresultsissue"></a>
<a id="tocsrichresultsissue"></a>

```json
{
  "issueMessage": "string",
  "severity": "SEVERITY_UNSPECIFIED"
}
```

Severity and status of a single issue affecting a single rich result instance on a page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issueMessage|string|false|none|Rich Results issue type.|
|severity|string|false|none|Severity of this issue: WARNING, or ERROR. Items with an issue of status ERROR cannot appear with rich result features in Google Search results.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|SEVERITY_UNSPECIFIED|
|severity|WARNING|
|severity|ERROR|

<h2 id="tocS_RunMobileFriendlyTestRequest">RunMobileFriendlyTestRequest</h2>
<!-- backwards compatibility -->
<a id="schemarunmobilefriendlytestrequest"></a>
<a id="schema_RunMobileFriendlyTestRequest"></a>
<a id="tocSrunmobilefriendlytestrequest"></a>
<a id="tocsrunmobilefriendlytestrequest"></a>

```json
{
  "requestScreenshot": true,
  "url": "string"
}
```

Mobile-friendly test request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestScreenshot|boolean|false|none|Whether or not screenshot is requested. Default is false.|
|url|string|false|none|URL for inspection.|

<h2 id="tocS_RunMobileFriendlyTestResponse">RunMobileFriendlyTestResponse</h2>
<!-- backwards compatibility -->
<a id="schemarunmobilefriendlytestresponse"></a>
<a id="schema_RunMobileFriendlyTestResponse"></a>
<a id="tocSrunmobilefriendlytestresponse"></a>
<a id="tocsrunmobilefriendlytestresponse"></a>

```json
{
  "mobileFriendliness": "MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED",
  "mobileFriendlyIssues": [
    {
      "rule": "MOBILE_FRIENDLY_RULE_UNSPECIFIED"
    }
  ],
  "resourceIssues": [
    {
      "blockedResource": {
        "url": "string"
      }
    }
  ],
  "screenshot": {
    "data": "string",
    "mimeType": "string"
  },
  "testStatus": {
    "details": "string",
    "status": "TEST_STATUS_UNSPECIFIED"
  }
}
```

Mobile-friendly test response, including mobile-friendly issues and resource issues.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mobileFriendliness|string|false|none|Test verdict, whether the page is mobile friendly or not.|
|mobileFriendlyIssues|[[MobileFriendlyIssue](#schemamobilefriendlyissue)]|false|none|List of mobile-usability issues.|
|resourceIssues|[[ResourceIssue](#schemaresourceissue)]|false|none|Information about embedded resources issues.|
|screenshot|[Image](#schemaimage)|false|none|Screenshot of the requested URL.|
|testStatus|[TestStatus](#schemateststatus)|false|none|Final state of the test, can be either complete or an error.|

#### Enumerated Values

|Property|Value|
|---|---|
|mobileFriendliness|MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED|
|mobileFriendliness|MOBILE_FRIENDLY|
|mobileFriendliness|NOT_MOBILE_FRIENDLY|

<h2 id="tocS_SearchAnalyticsQueryRequest">SearchAnalyticsQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchanalyticsqueryrequest"></a>
<a id="schema_SearchAnalyticsQueryRequest"></a>
<a id="tocSsearchanalyticsqueryrequest"></a>
<a id="tocssearchanalyticsqueryrequest"></a>

```json
{
  "aggregationType": "AUTO",
  "dataState": "DATA_STATE_UNSPECIFIED",
  "dimensionFilterGroups": [
    {
      "filters": [
        {
          "dimension": "QUERY",
          "expression": "string",
          "operator": "EQUALS"
        }
      ],
      "groupType": "AND"
    }
  ],
  "dimensions": [
    "DATE"
  ],
  "endDate": "string",
  "rowLimit": 0,
  "searchType": "WEB",
  "startDate": "string",
  "startRow": 0,
  "type": "WEB"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregationType|string|false|none|[Optional; Default is \"auto\"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see the help documentation to learn how data is calculated differently by site versus by page. **Note:** If you group or filter by page, you cannot aggregate by property. If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid.|
|dataState|string|false|none|The data state to be fetched, can be full or all, the latter including full and partial data.|
|dimensionFilterGroups|[[ApiDimensionFilterGroup](#schemaapidimensionfiltergroup)]|false|none|[Optional] Zero or more filters to apply to the dimension grouping values; for example, 'query contains \"buy\"' to see only data where the query string contains the substring \"buy\" (not case-sensitive). You can filter by a dimension without grouping by it.|
|dimensions|[string]|false|none|[Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search Analytics page. Dimensions are combined to create a unique row key for each row. Results are grouped in the order that you supply these dimensions.|
|endDate|string|false|none|[Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value is included in the range.|
|rowLimit|integer(int32)|false|none|[Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 25,000 (inclusive).|
|searchType|string|false|none|[Optional; Default is \"web\"] The search type to filter for.|
|startDate|string|false|none| [Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range.|
|startRow|integer(int32)|false|none|[Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number.|
|type|string|false|none|Optional. [Optional; Default is \"web\"] Type of report: search type, or either Discover or Gnews.|

#### Enumerated Values

|Property|Value|
|---|---|
|aggregationType|AUTO|
|aggregationType|BY_PROPERTY|
|aggregationType|BY_PAGE|
|aggregationType|BY_NEWS_SHOWCASE_PANEL|
|dataState|DATA_STATE_UNSPECIFIED|
|dataState|FINAL|
|dataState|ALL|
|dimensions|DATE|
|dimensions|QUERY|
|dimensions|PAGE|
|dimensions|COUNTRY|
|dimensions|DEVICE|
|dimensions|SEARCH_APPEARANCE|
|searchType|WEB|
|searchType|IMAGE|
|searchType|VIDEO|
|searchType|NEWS|
|searchType|DISCOVER|
|searchType|GOOGLE_NEWS|
|type|WEB|
|type|IMAGE|
|type|VIDEO|
|type|NEWS|
|type|DISCOVER|
|type|GOOGLE_NEWS|

<h2 id="tocS_SearchAnalyticsQueryResponse">SearchAnalyticsQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchanalyticsqueryresponse"></a>
<a id="schema_SearchAnalyticsQueryResponse"></a>
<a id="tocSsearchanalyticsqueryresponse"></a>
<a id="tocssearchanalyticsqueryresponse"></a>

```json
{
  "responseAggregationType": "AUTO",
  "rows": [
    {
      "clicks": 0,
      "ctr": 0,
      "impressions": 0,
      "keys": [
        "string"
      ],
      "position": 0
    }
  ]
}
```

A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responseAggregationType|string|false|none|How the results were aggregated.|
|rows|[[ApiDataRow](#schemaapidatarow)]|false|none|A list of rows grouped by the key values in the order given in the query.|

#### Enumerated Values

|Property|Value|
|---|---|
|responseAggregationType|AUTO|
|responseAggregationType|BY_PROPERTY|
|responseAggregationType|BY_PAGE|
|responseAggregationType|BY_NEWS_SHOWCASE_PANEL|

<h2 id="tocS_SitemapsListResponse">SitemapsListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasitemapslistresponse"></a>
<a id="schema_SitemapsListResponse"></a>
<a id="tocSsitemapslistresponse"></a>
<a id="tocssitemapslistresponse"></a>

```json
{
  "sitemap": [
    {
      "contents": [
        {
          "indexed": "string",
          "submitted": "string",
          "type": "WEB"
        }
      ],
      "errors": "string",
      "isPending": true,
      "isSitemapsIndex": true,
      "lastDownloaded": "string",
      "lastSubmitted": "string",
      "path": "string",
      "type": "NOT_SITEMAP",
      "warnings": "string"
    }
  ]
}
```

List of sitemaps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sitemap|[[WmxSitemap](#schemawmxsitemap)]|false|none|Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184).|

<h2 id="tocS_SitesListResponse">SitesListResponse</h2>
<!-- backwards compatibility -->
<a id="schemasiteslistresponse"></a>
<a id="schema_SitesListResponse"></a>
<a id="tocSsiteslistresponse"></a>
<a id="tocssiteslistresponse"></a>

```json
{
  "siteEntry": [
    {
      "permissionLevel": "SITE_PERMISSION_LEVEL_UNSPECIFIED",
      "siteUrl": "string"
    }
  ]
}
```

List of sites with access level information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|siteEntry|[[WmxSite](#schemawmxsite)]|false|none|Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999).|

<h2 id="tocS_TestStatus">TestStatus</h2>
<!-- backwards compatibility -->
<a id="schemateststatus"></a>
<a id="schema_TestStatus"></a>
<a id="tocSteststatus"></a>
<a id="tocsteststatus"></a>

```json
{
  "details": "string",
  "status": "TEST_STATUS_UNSPECIFIED"
}
```

Final state of the test, including error details if necessary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|Error details if applicable.|
|status|string|false|none|Status of the test.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|TEST_STATUS_UNSPECIFIED|
|status|COMPLETE|
|status|INTERNAL_ERROR|
|status|PAGE_UNREACHABLE|

<h2 id="tocS_UrlInspectionResult">UrlInspectionResult</h2>
<!-- backwards compatibility -->
<a id="schemaurlinspectionresult"></a>
<a id="schema_UrlInspectionResult"></a>
<a id="tocSurlinspectionresult"></a>
<a id="tocsurlinspectionresult"></a>

```json
{
  "ampResult": {
    "ampIndexStatusVerdict": "VERDICT_UNSPECIFIED",
    "ampUrl": "string",
    "indexingState": "AMP_INDEXING_STATE_UNSPECIFIED",
    "issues": [
      {
        "issueMessage": "string",
        "severity": "SEVERITY_UNSPECIFIED"
      }
    ],
    "lastCrawlTime": "string",
    "pageFetchState": "PAGE_FETCH_STATE_UNSPECIFIED",
    "robotsTxtState": "ROBOTS_TXT_STATE_UNSPECIFIED",
    "verdict": "VERDICT_UNSPECIFIED"
  },
  "indexStatusResult": {
    "coverageState": "string",
    "crawledAs": "CRAWLING_USER_AGENT_UNSPECIFIED",
    "googleCanonical": "string",
    "indexingState": "INDEXING_STATE_UNSPECIFIED",
    "lastCrawlTime": "string",
    "pageFetchState": "PAGE_FETCH_STATE_UNSPECIFIED",
    "referringUrls": [
      "string"
    ],
    "robotsTxtState": "ROBOTS_TXT_STATE_UNSPECIFIED",
    "sitemap": [
      "string"
    ],
    "userCanonical": "string",
    "verdict": "VERDICT_UNSPECIFIED"
  },
  "inspectionResultLink": "string",
  "mobileUsabilityResult": {
    "issues": [
      {
        "issueType": "MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED",
        "message": "string",
        "severity": "SEVERITY_UNSPECIFIED"
      }
    ],
    "verdict": "VERDICT_UNSPECIFIED"
  },
  "richResultsResult": {
    "detectedItems": [
      {
        "items": [
          {
            "issues": [
              {
                "issueMessage": "string",
                "severity": "SEVERITY_UNSPECIFIED"
              }
            ],
            "name": "string"
          }
        ],
        "richResultType": "string"
      }
    ],
    "verdict": "VERDICT_UNSPECIFIED"
  }
}
```

URL inspection result, including all inspection results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ampResult|[AmpInspectionResult](#schemaampinspectionresult)|false|none|Result of the AMP analysis. Absent if the page is not an AMP page.|
|indexStatusResult|[IndexStatusInspectionResult](#schemaindexstatusinspectionresult)|false|none|Result of the index status analysis.|
|inspectionResultLink|string|false|none|Link to Search Console URL inspection.|
|mobileUsabilityResult|[MobileUsabilityInspectionResult](#schemamobileusabilityinspectionresult)|false|none|Result of the Mobile usability analysis.|
|richResultsResult|[RichResultsInspectionResult](#schemarichresultsinspectionresult)|false|none|Result of the Rich Results analysis. Absent if there are no rich results found.|

<h2 id="tocS_WmxSite">WmxSite</h2>
<!-- backwards compatibility -->
<a id="schemawmxsite"></a>
<a id="schema_WmxSite"></a>
<a id="tocSwmxsite"></a>
<a id="tocswmxsite"></a>

```json
{
  "permissionLevel": "SITE_PERMISSION_LEVEL_UNSPECIFIED",
  "siteUrl": "string"
}
```

Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionLevel|string|false|none|The user's permission level for the site.|
|siteUrl|string|false|none|The URL of the site.|

#### Enumerated Values

|Property|Value|
|---|---|
|permissionLevel|SITE_PERMISSION_LEVEL_UNSPECIFIED|
|permissionLevel|SITE_OWNER|
|permissionLevel|SITE_FULL_USER|
|permissionLevel|SITE_RESTRICTED_USER|
|permissionLevel|SITE_UNVERIFIED_USER|

<h2 id="tocS_WmxSitemap">WmxSitemap</h2>
<!-- backwards compatibility -->
<a id="schemawmxsitemap"></a>
<a id="schema_WmxSitemap"></a>
<a id="tocSwmxsitemap"></a>
<a id="tocswmxsitemap"></a>

```json
{
  "contents": [
    {
      "indexed": "string",
      "submitted": "string",
      "type": "WEB"
    }
  ],
  "errors": "string",
  "isPending": true,
  "isSitemapsIndex": true,
  "lastDownloaded": "string",
  "lastSubmitted": "string",
  "path": "string",
  "type": "NOT_SITEMAP",
  "warnings": "string"
}
```

Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|[[WmxSitemapContent](#schemawmxsitemapcontent)]|false|none|The various content types in the sitemap.|
|errors|string(int64)|false|none|Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be processed correctly.|
|isPending|boolean|false|none|If true, the sitemap has not been processed.|
|isSitemapsIndex|boolean|false|none|If true, the sitemap is a collection of sitemaps.|
|lastDownloaded|string(google-datetime)|false|none|Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd).|
|lastSubmitted|string(google-datetime)|false|none|Date & time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd).|
|path|string|false|none|The url of the sitemap.|
|type|string|false|none|The type of the sitemap. For example: `rssFeed`.|
|warnings|string(int64)|false|none|Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|NOT_SITEMAP|
|type|URL_LIST|
|type|SITEMAP|
|type|RSS_FEED|
|type|ATOM_FEED|
|type|PATTERN_SITEMAP|
|type|OCEANFRONT|

<h2 id="tocS_WmxSitemapContent">WmxSitemapContent</h2>
<!-- backwards compatibility -->
<a id="schemawmxsitemapcontent"></a>
<a id="schema_WmxSitemapContent"></a>
<a id="tocSwmxsitemapcontent"></a>
<a id="tocswmxsitemapcontent"></a>

```json
{
  "indexed": "string",
  "submitted": "string",
  "type": "WEB"
}
```

Information about the various content types in the sitemap.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexed|string(int64)|false|none|**Deprecated.** *Deprecated; do not use.*|
|submitted|string(int64)|false|none|The number of URLs in the sitemap (of the content type).|
|type|string|false|none|The specific type of content in this sitemap. For example: `web`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|WEB|
|type|IMAGE|
|type|VIDEO|
|type|NEWS|
|type|MOBILE|
|type|ANDROID_APP|
|type|PATTERN|
|type|IOS_APP|
|type|DATA_FEED_ELEMENT|
