<h1 id="accelerated-mobile-pages-amp-url-api">Accelerated Mobile Pages (AMP) URL API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given list of public URL(s).

Base URLs:

* <a href="https://acceleratedmobilepageurl.googleapis.com/">https://acceleratedmobilepageurl.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/amp/cache/">External documentation</a>

<h1 id="accelerated-mobile-pages-amp-url-api-ampurls">ampUrls</h1>

## acceleratedmobilepageurl.ampUrls.batchGet

<a id="opIdacceleratedmobilepageurl.ampUrls.batchGet"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/ampUrls:batchGet \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "lookupStrategy": "FETCH_LIVE_DOC",
    "urls": [
      "string"
    ]
  }'
```

`POST /v1/ampUrls:batchGet`

Returns AMP URL(s) and equivalent [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).

> Body parameter

```json
{
  "lookupStrategy": "FETCH_LIVE_DOC",
  "urls": [
    "string"
  ]
}
```

<h3 id="acceleratedmobilepageurlampurlsbatchget-parameters">Parameters</h3>

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
|body|body|[BatchGetAmpUrlsRequest](#schemabatchgetampurlsrequest)|false|none|
|» lookupStrategy|body|string|false|The lookup_strategy being requested.|
|» urls|body|[string]|false|List of URLs to look up for the paired AMP URLs. The URLs are case-sensitive. Up to 50 URLs per lookup (see [Usage Limits](/amp/cache/reference/limits)).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» lookupStrategy|FETCH_LIVE_DOC|
|» lookupStrategy|IN_INDEX_DOC|

> Example responses

> 200 Response

```json
{
  "ampUrls": [
    {
      "ampUrl": "string",
      "cdnAmpUrl": "string",
      "originalUrl": "string"
    }
  ],
  "urlErrors": [
    {
      "errorCode": "ERROR_CODE_UNSPECIFIED",
      "errorMessage": "string",
      "originalUrl": "string"
    }
  ]
}
```

<h3 id="acceleratedmobilepageurlampurlsbatchget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchGetAmpUrlsResponse](#schemabatchgetampurlsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AmpUrl">AmpUrl</h2>
<!-- backwards compatibility -->
<a id="schemaampurl"></a>
<a id="schema_AmpUrl"></a>
<a id="tocSampurl"></a>
<a id="tocsampurl"></a>

```json
{
  "ampUrl": "string",
  "cdnAmpUrl": "string",
  "originalUrl": "string"
}
```

AMP URL response for a requested URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ampUrl|string|false|none|The AMP URL pointing to the publisher's web server.|
|cdnAmpUrl|string|false|none|The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to the cached document in the Google AMP Cache.|
|originalUrl|string|false|none|The original non-AMP URL.|

<h2 id="tocS_AmpUrlError">AmpUrlError</h2>
<!-- backwards compatibility -->
<a id="schemaampurlerror"></a>
<a id="schema_AmpUrlError"></a>
<a id="tocSampurlerror"></a>
<a id="tocsampurlerror"></a>

```json
{
  "errorCode": "ERROR_CODE_UNSPECIFIED",
  "errorMessage": "string",
  "originalUrl": "string"
}
```

AMP URL Error resource for a requested URL that couldn't be found.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|The error code of an API call.|
|errorMessage|string|false|none|An optional descriptive error message.|
|originalUrl|string|false|none|The original non-AMP URL.|

#### Enumerated Values

|Property|Value|
|---|---|
|errorCode|ERROR_CODE_UNSPECIFIED|
|errorCode|INPUT_URL_NOT_FOUND|
|errorCode|NO_AMP_URL|
|errorCode|APPLICATION_ERROR|
|errorCode|URL_IS_VALID_AMP|
|errorCode|URL_IS_INVALID_AMP|

<h2 id="tocS_BatchGetAmpUrlsRequest">BatchGetAmpUrlsRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetampurlsrequest"></a>
<a id="schema_BatchGetAmpUrlsRequest"></a>
<a id="tocSbatchgetampurlsrequest"></a>
<a id="tocsbatchgetampurlsrequest"></a>

```json
{
  "lookupStrategy": "FETCH_LIVE_DOC",
  "urls": [
    "string"
  ]
}
```

AMP URL request for a batch of URLs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lookupStrategy|string|false|none|The lookup_strategy being requested.|
|urls|[string]|false|none|List of URLs to look up for the paired AMP URLs. The URLs are case-sensitive. Up to 50 URLs per lookup (see [Usage Limits](/amp/cache/reference/limits)).|

#### Enumerated Values

|Property|Value|
|---|---|
|lookupStrategy|FETCH_LIVE_DOC|
|lookupStrategy|IN_INDEX_DOC|

<h2 id="tocS_BatchGetAmpUrlsResponse">BatchGetAmpUrlsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetampurlsresponse"></a>
<a id="schema_BatchGetAmpUrlsResponse"></a>
<a id="tocSbatchgetampurlsresponse"></a>
<a id="tocsbatchgetampurlsresponse"></a>

```json
{
  "ampUrls": [
    {
      "ampUrl": "string",
      "cdnAmpUrl": "string",
      "originalUrl": "string"
    }
  ],
  "urlErrors": [
    {
      "errorCode": "ERROR_CODE_UNSPECIFIED",
      "errorMessage": "string",
      "originalUrl": "string"
    }
  ]
}
```

Batch AMP URL response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ampUrls|[[AmpUrl](#schemaampurl)]|false|none|For each URL in BatchAmpUrlsRequest, the URL response. The response might not be in the same order as URLs in the batch request. If BatchAmpUrlsRequest contains duplicate URLs, AmpUrl is generated only once.|
|urlErrors|[[AmpUrlError](#schemaampurlerror)]|false|none|The errors for requested URLs that have no AMP URL.|
