<h1 id="search-console-api">Search Console API v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

View Google Search Console data for your verified sites.

Base URLs:

* <a href="https://www.googleapis.com/webmasters/v3">https://www.googleapis.com/webmasters/v3</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/webmaster-tools/">External documentation</a>

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

<h1 id="search-console-api-searchanalytics">searchanalytics</h1>

## webmasters.searchanalytics.query

<a id="opIdwebmasters.searchanalytics.query"></a>

> Code samples

```bash
curl https://www.googleapis.com/sites/string/searchAnalytics/query \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "aggregationType": "string",
    "dataState": "string",
    "dimensionFilterGroups": [
      {
        "filters": [
          {
            "dimension": "string",
            "expression": "string",
            "operator": "string"
          }
        ],
        "groupType": "string"
      }
    ],
    "dimensions": [
      "string"
    ],
    "endDate": "string",
    "rowLimit": 0,
    "searchType": "string",
    "startDate": "string",
    "startRow": 0
  }'
```

`POST /sites/{siteUrl}/searchAnalytics/query`

Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.

When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

> Body parameter

```json
{
  "aggregationType": "string",
  "dataState": "string",
  "dimensionFilterGroups": [
    {
      "filters": [
        {
          "dimension": "string",
          "expression": "string",
          "operator": "string"
        }
      ],
      "groupType": "string"
    }
  ],
  "dimensions": [
    "string"
  ],
  "endDate": "string",
  "rowLimit": 0,
  "searchType": "string",
  "startDate": "string",
  "startRow": 0
}
```

<h3 id="webmasterssearchanalyticsquery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The site's URL, including protocol. For example: http://www.example.com/|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[SearchAnalyticsQueryRequest](#schemasearchanalyticsqueryrequest)|false|none|
|» aggregationType|body|string|false|[Optional; Default is "auto"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see  the help documentation to learn how data is calculated differently by site versus by page.<br><br>Note: If you group or filter by page, you cannot aggregate by property.<br><br>If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid.|
|» dataState|body|string|false|[Optional] If "all" (case-insensitive), data will include fresh data. If "final" (case-insensitive) or if this parameter is omitted, the returned data will include only finalized data.|
|» dimensionFilterGroups|body|[[ApiDimensionFilterGroup](#schemaapidimensionfiltergroup)]|false|[Optional] Zero or more filters to apply to the dimension grouping values; for example, 'query contains "buy"' to see only data where the query string contains the substring "buy" (not case-sensitive). You can filter by a dimension without grouping by it.|
|» dimensions|body|[string]|false|[Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search Analytics page. Dimensions are combined to create a unique row key for each row. Results are grouped in the order that you supply these dimensions.|
|» endDate|body|string|false|[Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value is included in the range.|
|» rowLimit|body|integer(int32)|false|[Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 5,000 (inclusive).|
|» searchType|body|string|false|[Optional; Default is "web"] The search type to filter for.|
|» startDate|body|string|false|[Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range.|
|» startRow|body|integer(int32)|false|[Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "responseAggregationType": "string",
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

<h1 id="search-console-api-sitemaps">sitemaps</h1>

## webmasters.sitemaps.list

<a id="opIdwebmasters.sitemaps.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/sites/string/sitemaps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{siteUrl}/sitemaps`

Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).

<h3 id="webmasterssitemapslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The site's URL, including protocol. For example: http://www.example.com/|
|sitemapIndex|query|string|false|A URL of a site's sitemap index. For example: http://www.example.com/sitemapindex.xml|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

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
          "type": "string"
        }
      ],
      "errors": "string",
      "isPending": true,
      "isSitemapsIndex": true,
      "lastDownloaded": "1970-01-01T00:00:00Z",
      "lastSubmitted": "1970-01-01T00:00:00Z",
      "path": "string",
      "type": "string",
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
curl https://www.googleapis.com/sites/string/sitemaps/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{siteUrl}/sitemaps/{feedpath}`

Retrieves information about a specific sitemap.

<h3 id="webmasterssitemapsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The site's URL, including protocol. For example: http://www.example.com/|
|feedpath|path|string|true|The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "contents": [
    {
      "indexed": "string",
      "submitted": "string",
      "type": "string"
    }
  ],
  "errors": "string",
  "isPending": true,
  "isSitemapsIndex": true,
  "lastDownloaded": "1970-01-01T00:00:00Z",
  "lastSubmitted": "1970-01-01T00:00:00Z",
  "path": "string",
  "type": "string",
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
curl https://www.googleapis.com/sites/string/sitemaps/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /sites/{siteUrl}/sitemaps/{feedpath}`

Submits a sitemap for a site.

<h3 id="webmasterssitemapssubmit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The site's URL, including protocol. For example: http://www.example.com/|
|feedpath|path|string|true|The URL of the sitemap to add. For example: http://www.example.com/sitemap.xml|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

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
curl https://www.googleapis.com/sites/string/sitemaps/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{siteUrl}/sitemaps/{feedpath}`

Deletes a sitemap from this site.

<h3 id="webmasterssitemapsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The site's URL, including protocol. For example: http://www.example.com/|
|feedpath|path|string|true|The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="webmasterssitemapsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters )
</aside>

<h1 id="search-console-api-sites">sites</h1>

## webmasters.sites.list

<a id="opIdwebmasters.sites.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/sites \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites`

Lists the user's Search Console sites.

<h3 id="webmasterssiteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "siteEntry": [
    {
      "permissionLevel": "string",
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
curl https://www.googleapis.com/sites/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{siteUrl}`

Retrieves information about specific site.

<h3 id="webmasterssitesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "permissionLevel": "string",
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
curl https://www.googleapis.com/sites/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /sites/{siteUrl}`

Adds a site to the set of the user's sites in Search Console.

<h3 id="webmasterssitesadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The URL of the site to add.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

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
curl https://www.googleapis.com/sites/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{siteUrl}`

Removes a site from the set of the user's Search Console sites.

<h3 id="webmasterssitesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|siteUrl|path|string|true|The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/ Note: for property-sets, use the URI that starts with sc-set: which is used in Search Console URLs.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="webmasterssitesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/webmasters ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/webmasters )
</aside>

# Schemas

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
  "dimension": "string",
  "expression": "string",
  "operator": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimension|string|false|none|none|
|expression|string|false|none|none|
|operator|string|false|none|none|

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
      "dimension": "string",
      "expression": "string",
      "operator": "string"
    }
  ],
  "groupType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[[ApiDimensionFilter](#schemaapidimensionfilter)]|false|none|none|
|groupType|string|false|none|none|

<h2 id="tocS_SearchAnalyticsQueryRequest">SearchAnalyticsQueryRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchanalyticsqueryrequest"></a>
<a id="schema_SearchAnalyticsQueryRequest"></a>
<a id="tocSsearchanalyticsqueryrequest"></a>
<a id="tocssearchanalyticsqueryrequest"></a>

```json
{
  "aggregationType": "string",
  "dataState": "string",
  "dimensionFilterGroups": [
    {
      "filters": [
        {
          "dimension": "string",
          "expression": "string",
          "operator": "string"
        }
      ],
      "groupType": "string"
    }
  ],
  "dimensions": [
    "string"
  ],
  "endDate": "string",
  "rowLimit": 0,
  "searchType": "string",
  "startDate": "string",
  "startRow": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregationType|string|false|none|[Optional; Default is "auto"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see  the help documentation to learn how data is calculated differently by site versus by page.<br><br>Note: If you group or filter by page, you cannot aggregate by property.<br><br>If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid.|
|dataState|string|false|none|[Optional] If "all" (case-insensitive), data will include fresh data. If "final" (case-insensitive) or if this parameter is omitted, the returned data will include only finalized data.|
|dimensionFilterGroups|[[ApiDimensionFilterGroup](#schemaapidimensionfiltergroup)]|false|none|[Optional] Zero or more filters to apply to the dimension grouping values; for example, 'query contains "buy"' to see only data where the query string contains the substring "buy" (not case-sensitive). You can filter by a dimension without grouping by it.|
|dimensions|[string]|false|none|[Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search Analytics page. Dimensions are combined to create a unique row key for each row. Results are grouped in the order that you supply these dimensions.|
|endDate|string|false|none|[Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value is included in the range.|
|rowLimit|integer(int32)|false|none|[Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 5,000 (inclusive).|
|searchType|string|false|none|[Optional; Default is "web"] The search type to filter for.|
|startDate|string|false|none|[Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range.|
|startRow|integer(int32)|false|none|[Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number.|

<h2 id="tocS_SearchAnalyticsQueryResponse">SearchAnalyticsQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchanalyticsqueryresponse"></a>
<a id="schema_SearchAnalyticsQueryResponse"></a>
<a id="tocSsearchanalyticsqueryresponse"></a>
<a id="tocssearchanalyticsqueryresponse"></a>

```json
{
  "responseAggregationType": "string",
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
          "type": "string"
        }
      ],
      "errors": "string",
      "isPending": true,
      "isSitemapsIndex": true,
      "lastDownloaded": "1970-01-01T00:00:00Z",
      "lastSubmitted": "1970-01-01T00:00:00Z",
      "path": "string",
      "type": "string",
      "warnings": "string"
    }
  ]
}
```

List of sitemaps.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sitemap|[[WmxSitemap](#schemawmxsitemap)]|false|none|Contains detailed information about a specific URL submitted as a sitemap.|

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
      "permissionLevel": "string",
      "siteUrl": "string"
    }
  ]
}
```

List of sites with access level information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|siteEntry|[[WmxSite](#schemawmxsite)]|false|none|Contains permission level information about a Search Console site. For more information, see Permissions in Search Console.|

<h2 id="tocS_WmxSite">WmxSite</h2>
<!-- backwards compatibility -->
<a id="schemawmxsite"></a>
<a id="schema_WmxSite"></a>
<a id="tocSwmxsite"></a>
<a id="tocswmxsite"></a>

```json
{
  "permissionLevel": "string",
  "siteUrl": "string"
}
```

Contains permission level information about a Search Console site. For more information, see  Permissions in Search Console.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionLevel|string|false|none|The user's permission level for the site.|
|siteUrl|string|false|none|The URL of the site.|

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
      "type": "string"
    }
  ],
  "errors": "string",
  "isPending": true,
  "isSitemapsIndex": true,
  "lastDownloaded": "1970-01-01T00:00:00Z",
  "lastSubmitted": "1970-01-01T00:00:00Z",
  "path": "string",
  "type": "string",
  "warnings": "string"
}
```

Contains detailed information about a specific URL submitted as a sitemap.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|[[WmxSitemapContent](#schemawmxsitemapcontent)]|false|none|The various content types in the sitemap.|
|errors|string(int64)|false|none|Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be processed correctly.|
|isPending|boolean|false|none|If true, the sitemap has not been processed.|
|isSitemapsIndex|boolean|false|none|If true, the sitemap is a collection of sitemaps.|
|lastDownloaded|string(date-time)|false|none|Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd).|
|lastSubmitted|string(date-time)|false|none|Date & time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd).|
|path|string|false|none|The url of the sitemap.|
|type|string|false|none|The type of the sitemap. For example: rssFeed.|
|warnings|string(int64)|false|none|Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps.|

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
  "type": "string"
}
```

Information about the various content types in the sitemap.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexed|string(int64)|false|none|The number of URLs from the sitemap that were indexed (of the content type).|
|submitted|string(int64)|false|none|The number of URLs in the sitemap (of the content type).|
|type|string|false|none|The specific type of content in this sitemap. For example: web.|
