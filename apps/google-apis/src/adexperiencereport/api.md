<h1 id="ad-experience-report-api">Ad Experience Report API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Views Ad Experience Report data, and gets a list of sites that have a significant number of annoying ads.

Base URLs:

* <a href="https://adexperiencereport.googleapis.com/">https://adexperiencereport.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/ad-experience-report/">External documentation</a>

<h1 id="ad-experience-report-api-sites">sites</h1>

## adexperiencereport.sites.get

<a id="opIdadexperiencereport.sites.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json'
```

`GET /v1/{name}`

Gets a site's Ad Experience Report summary.

<h3 id="adexperiencereportsitesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the site whose summary to get, e.g. `sites/http%3A%2F%2Fwww.google.com%2F`. Format: `sites/{site}`|
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
  "desktopSummary": {
    "betterAdsStatus": "UNKNOWN",
    "enforcementTime": "string",
    "filterStatus": "UNKNOWN",
    "lastChangeTime": "string",
    "region": [
      "REGION_UNKNOWN"
    ],
    "reportUrl": "string",
    "underReview": true
  },
  "mobileSummary": {
    "betterAdsStatus": "UNKNOWN",
    "enforcementTime": "string",
    "filterStatus": "UNKNOWN",
    "lastChangeTime": "string",
    "region": [
      "REGION_UNKNOWN"
    ],
    "reportUrl": "string",
    "underReview": true
  },
  "reviewedSite": "string"
}
```

<h3 id="adexperiencereportsitesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SiteSummaryResponse](#schemasitesummaryresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ad-experience-report-api-violatingsites">violatingSites</h1>

## adexperiencereport.violatingSites.list

<a id="opIdadexperiencereport.violatingSites.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/violatingSites \
  -H 'Accept: application/json'
```

`GET /v1/violatingSites`

Lists sites that are failing in the Ad Experience Report on at least one platform.

<h3 id="adexperiencereportviolatingsiteslist-parameters">Parameters</h3>

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
  "violatingSites": [
    {
      "desktopSummary": {
        "betterAdsStatus": "UNKNOWN",
        "enforcementTime": "string",
        "filterStatus": "UNKNOWN",
        "lastChangeTime": "string",
        "region": [
          "REGION_UNKNOWN"
        ],
        "reportUrl": "string",
        "underReview": true
      },
      "mobileSummary": {
        "betterAdsStatus": "UNKNOWN",
        "enforcementTime": "string",
        "filterStatus": "UNKNOWN",
        "lastChangeTime": "string",
        "region": [
          "REGION_UNKNOWN"
        ],
        "reportUrl": "string",
        "underReview": true
      },
      "reviewedSite": "string"
    }
  ]
}
```

<h3 id="adexperiencereportviolatingsiteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ViolatingSitesResponse](#schemaviolatingsitesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_PlatformSummary">PlatformSummary</h2>
<!-- backwards compatibility -->
<a id="schemaplatformsummary"></a>
<a id="schema_PlatformSummary"></a>
<a id="tocSplatformsummary"></a>
<a id="tocsplatformsummary"></a>

```json
{
  "betterAdsStatus": "UNKNOWN",
  "enforcementTime": "string",
  "filterStatus": "UNKNOWN",
  "lastChangeTime": "string",
  "region": [
    "REGION_UNKNOWN"
  ],
  "reportUrl": "string",
  "underReview": true
}
```

A site's Ad Experience Report summary on a single platform.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|betterAdsStatus|string|false|none|The site's Ad Experience Report status on this platform.|
|enforcementTime|string(google-datetime)|false|none|The time at which [enforcement](https://support.google.com/webtools/answer/7308033) against the site began or will begin on this platform. Not set when the filter_status is OFF.|
|filterStatus|string|false|none|The site's [enforcement status](https://support.google.com/webtools/answer/7308033) on this platform.|
|lastChangeTime|string(google-datetime)|false|none|The time at which the site's status last changed on this platform.|
|region|[string]|false|none|The site's regions on this platform. No longer populated, because there is no longer any semantic difference between sites in different regions.|
|reportUrl|string|false|none|A link to the full Ad Experience Report for the site on this platform.. Not set in ViolatingSitesResponse. Note that you must complete the [Search Console verification process](https://support.google.com/webmasters/answer/9008080) for the site before you can access the full report.|
|underReview|boolean|false|none|Whether the site is currently under review on this platform.|

#### Enumerated Values

|Property|Value|
|---|---|
|betterAdsStatus|UNKNOWN|
|betterAdsStatus|PASSING|
|betterAdsStatus|WARNING|
|betterAdsStatus|FAILING|
|filterStatus|UNKNOWN|
|filterStatus|ON|
|filterStatus|OFF|
|filterStatus|PAUSED|
|filterStatus|PENDING|
|region|REGION_UNKNOWN|
|region|REGION_A|
|region|REGION_B|
|region|REGION_C|

<h2 id="tocS_SiteSummaryResponse">SiteSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemasitesummaryresponse"></a>
<a id="schema_SiteSummaryResponse"></a>
<a id="tocSsitesummaryresponse"></a>
<a id="tocssitesummaryresponse"></a>

```json
{
  "desktopSummary": {
    "betterAdsStatus": "UNKNOWN",
    "enforcementTime": "string",
    "filterStatus": "UNKNOWN",
    "lastChangeTime": "string",
    "region": [
      "REGION_UNKNOWN"
    ],
    "reportUrl": "string",
    "underReview": true
  },
  "mobileSummary": {
    "betterAdsStatus": "UNKNOWN",
    "enforcementTime": "string",
    "filterStatus": "UNKNOWN",
    "lastChangeTime": "string",
    "region": [
      "REGION_UNKNOWN"
    ],
    "reportUrl": "string",
    "underReview": true
  },
  "reviewedSite": "string"
}
```

Response message for GetSiteSummary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desktopSummary|[PlatformSummary](#schemaplatformsummary)|false|none|The site's Ad Experience Report summary on desktop.|
|mobileSummary|[PlatformSummary](#schemaplatformsummary)|false|none|The site's Ad Experience Report summary on mobile.|
|reviewedSite|string|false|none|The name of the reviewed site, e.g. `google.com`.|

<h2 id="tocS_ViolatingSitesResponse">ViolatingSitesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaviolatingsitesresponse"></a>
<a id="schema_ViolatingSitesResponse"></a>
<a id="tocSviolatingsitesresponse"></a>
<a id="tocsviolatingsitesresponse"></a>

```json
{
  "violatingSites": [
    {
      "desktopSummary": {
        "betterAdsStatus": "UNKNOWN",
        "enforcementTime": "string",
        "filterStatus": "UNKNOWN",
        "lastChangeTime": "string",
        "region": [
          "REGION_UNKNOWN"
        ],
        "reportUrl": "string",
        "underReview": true
      },
      "mobileSummary": {
        "betterAdsStatus": "UNKNOWN",
        "enforcementTime": "string",
        "filterStatus": "UNKNOWN",
        "lastChangeTime": "string",
        "region": [
          "REGION_UNKNOWN"
        ],
        "reportUrl": "string",
        "underReview": true
      },
      "reviewedSite": "string"
    }
  ]
}
```

Response message for ListViolatingSites.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|violatingSites|[[SiteSummaryResponse](#schemasitesummaryresponse)]|false|none|The list of violating sites.|
