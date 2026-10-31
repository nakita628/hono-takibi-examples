<h1 id="abusive-experience-report-api">Abusive Experience Report API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Views Abusive Experience Report data, and gets a list of sites that have a significant number of abusive experiences.

Base URLs:

* <a href="https://abusiveexperiencereport.googleapis.com/">https://abusiveexperiencereport.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/abusive-experience-report/">External documentation</a>

<h1 id="abusive-experience-report-api-sites">sites</h1>

## abusiveexperiencereport.sites.get

<a id="opIdabusiveexperiencereport.sites.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json'
```

`GET /v1/{name}`

Gets a site's Abusive Experience Report summary.

<h3 id="abusiveexperiencereportsitesget-parameters">Parameters</h3>

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
  "abusiveStatus": "UNKNOWN",
  "enforcementTime": "string",
  "filterStatus": "UNKNOWN",
  "lastChangeTime": "string",
  "reportUrl": "string",
  "reviewedSite": "string",
  "underReview": true
}
```

<h3 id="abusiveexperiencereportsitesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SiteSummaryResponse](#schemasitesummaryresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="abusive-experience-report-api-violatingsites">violatingSites</h1>

## abusiveexperiencereport.violatingSites.list

<a id="opIdabusiveexperiencereport.violatingSites.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/violatingSites \
  -H 'Accept: application/json'
```

`GET /v1/violatingSites`

Lists sites that are failing in the Abusive Experience Report.

<h3 id="abusiveexperiencereportviolatingsiteslist-parameters">Parameters</h3>

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
      "abusiveStatus": "UNKNOWN",
      "enforcementTime": "string",
      "filterStatus": "UNKNOWN",
      "lastChangeTime": "string",
      "reportUrl": "string",
      "reviewedSite": "string",
      "underReview": true
    }
  ]
}
```

<h3 id="abusiveexperiencereportviolatingsiteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ViolatingSitesResponse](#schemaviolatingsitesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_SiteSummaryResponse">SiteSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemasitesummaryresponse"></a>
<a id="schema_SiteSummaryResponse"></a>
<a id="tocSsitesummaryresponse"></a>
<a id="tocssitesummaryresponse"></a>

```json
{
  "abusiveStatus": "UNKNOWN",
  "enforcementTime": "string",
  "filterStatus": "UNKNOWN",
  "lastChangeTime": "string",
  "reportUrl": "string",
  "reviewedSite": "string",
  "underReview": true
}
```

Response message for GetSiteSummary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abusiveStatus|string|false|none|The site's Abusive Experience Report status.|
|enforcementTime|string(google-datetime)|false|none|The time at which [enforcement](https://support.google.com/webtools/answer/7538608) against the site began or will begin. Not set when the filter_status is OFF.|
|filterStatus|string|false|none|The site's [enforcement status](https://support.google.com/webtools/answer/7538608).|
|lastChangeTime|string(google-datetime)|false|none|The time at which the site's status last changed.|
|reportUrl|string|false|none|A link to the full Abusive Experience Report for the site. Not set in ViolatingSitesResponse. Note that you must complete the [Search Console verification process](https://support.google.com/webmasters/answer/9008080) for the site before you can access the full report.|
|reviewedSite|string|false|none|The name of the reviewed site, e.g. `google.com`.|
|underReview|boolean|false|none|Whether the site is currently under review.|

#### Enumerated Values

|Property|Value|
|---|---|
|abusiveStatus|UNKNOWN|
|abusiveStatus|PASSING|
|abusiveStatus|FAILING|
|filterStatus|UNKNOWN|
|filterStatus|ON|
|filterStatus|OFF|
|filterStatus|PAUSED|
|filterStatus|PENDING|

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
      "abusiveStatus": "UNKNOWN",
      "enforcementTime": "string",
      "filterStatus": "UNKNOWN",
      "lastChangeTime": "string",
      "reportUrl": "string",
      "reviewedSite": "string",
      "underReview": true
    }
  ]
}
```

Response message for ListViolatingSites.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|violatingSites|[[SiteSummaryResponse](#schemasitesummaryresponse)]|false|none|The list of violating sites.|
