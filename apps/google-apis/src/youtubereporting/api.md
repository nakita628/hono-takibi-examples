<h1 id="youtube-reporting-api">YouTube Reporting API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Schedules reporting jobs containing your YouTube Analytics data and downloads the resulting bulk data reports in the form of CSV files.

Base URLs:

* <a href="https://youtubereporting.googleapis.com/">https://youtubereporting.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/youtube/reporting/v1/reports/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/yt-analytics-monetary.readonly|View monetary and non-monetary YouTube Analytics reports for your YouTube content|
|https://www.googleapis.com/auth/yt-analytics.readonly|View YouTube Analytics reports for your YouTube content|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/yt-analytics-monetary.readonly|View monetary and non-monetary YouTube Analytics reports for your YouTube content|
|https://www.googleapis.com/auth/yt-analytics.readonly|View YouTube Analytics reports for your YouTube content|

<h1 id="youtube-reporting-api-jobs">jobs</h1>

## youtubereporting.jobs.list

<a id="opIdyoutubereporting.jobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/jobs`

Lists jobs.

<h3 id="youtubereportingjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|includeSystemManaged|query|boolean|false|If set to true, also system-managed jobs will be returned; otherwise only user-created jobs will be returned. System-managed jobs can neither be modified nor deleted.|
|onBehalfOfContentOwner|query|string|false|The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).|
|pageSize|query|integer|false|Requested page size. Server may return fewer jobs than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListJobs` method.|
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
  "jobs": [
    {
      "createTime": "string",
      "expireTime": "string",
      "id": "string",
      "name": "string",
      "reportTypeId": "string",
      "systemManaged": true
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="youtubereportingjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListJobsResponse](#schemalistjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly )
</aside>

## youtubereporting.jobs.create

<a id="opIdyoutubereporting.jobs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createTime": "string",
    "expireTime": "string",
    "id": "string",
    "name": "string",
    "reportTypeId": "string",
    "systemManaged": true
  }'
```

`POST /v1/jobs`

Creates a job and returns it.

> Body parameter

```json
{
  "createTime": "string",
  "expireTime": "string",
  "id": "string",
  "name": "string",
  "reportTypeId": "string",
  "systemManaged": true
}
```

<h3 id="youtubereportingjobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|onBehalfOfContentOwner|query|string|false|The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).|
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
|body|body|[Job](#schemajob)|false|none|
|» createTime|body|string(google-datetime)|false|The creation date/time of the job.|
|» expireTime|body|string(google-datetime)|false|The date/time when this job will expire/expired. After a job expired, no new reports are generated.|
|» id|body|string|false|The server-generated ID of the job (max. 40 characters).|
|» name|body|string|false|The name of the job (max. 100 characters).|
|» reportTypeId|body|string|false|The type of reports this job creates. Corresponds to the ID of a ReportType.|
|» systemManaged|body|boolean|false|True if this a system-managed job that cannot be modified by the user; otherwise false.|

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
  "createTime": "string",
  "expireTime": "string",
  "id": "string",
  "name": "string",
  "reportTypeId": "string",
  "systemManaged": true
}
```

<h3 id="youtubereportingjobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly )
</aside>

## youtubereporting.jobs.get

<a id="opIdyoutubereporting.jobs.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/jobs/{jobId}`

Gets a job.

<h3 id="youtubereportingjobsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The ID of the job to retrieve.|
|onBehalfOfContentOwner|query|string|false|The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).|
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
  "createTime": "string",
  "expireTime": "string",
  "id": "string",
  "name": "string",
  "reportTypeId": "string",
  "systemManaged": true
}
```

<h3 id="youtubereportingjobsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly )
</aside>

## youtubereporting.jobs.delete

<a id="opIdyoutubereporting.jobs.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/jobs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/jobs/{jobId}`

Deletes a job.

<h3 id="youtubereportingjobsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The ID of the job to delete.|
|onBehalfOfContentOwner|query|string|false|The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).|
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
{}
```

<h3 id="youtubereportingjobsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly )
</aside>

## youtubereporting.jobs.reports.list

<a id="opIdyoutubereporting.jobs.reports.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/jobs/string/reports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/jobs/{jobId}/reports`

Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.

<h3 id="youtubereportingjobsreportslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The ID of the job.|
|createdAfter|query|string|false|If set, only reports created after the specified date/time are returned.|
|onBehalfOfContentOwner|query|string|false|The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).|
|pageSize|query|integer|false|Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method.|
|startTimeAtOrAfter|query|string|false|If set, only reports whose start time is greater than or equal the specified date/time are returned.|
|startTimeBefore|query|string|false|If set, only reports whose start time is smaller than the specified date/time are returned.|
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
  "nextPageToken": "string",
  "reports": [
    {
      "createTime": "string",
      "downloadUrl": "string",
      "endTime": "string",
      "id": "string",
      "jobExpireTime": "string",
      "jobId": "string",
      "startTime": "string"
    }
  ]
}
```

<h3 id="youtubereportingjobsreportslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReportsResponse](#schemalistreportsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly )
</aside>

## youtubereporting.jobs.reports.get

<a id="opIdyoutubereporting.jobs.reports.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/jobs/string/reports/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/jobs/{jobId}/reports/{reportId}`

Gets the metadata of a specific report.

<h3 id="youtubereportingjobsreportsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|path|string|true|The ID of the job.|
|reportId|path|string|true|The ID of the report to retrieve.|
|onBehalfOfContentOwner|query|string|false|The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).|
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
  "createTime": "string",
  "downloadUrl": "string",
  "endTime": "string",
  "id": "string",
  "jobExpireTime": "string",
  "jobId": "string",
  "startTime": "string"
}
```

<h3 id="youtubereportingjobsreportsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Report](#schemareport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly )
</aside>

<h1 id="youtube-reporting-api-media">media</h1>

## youtubereporting.media.download

<a id="opIdyoutubereporting.media.download"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/media/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/media/{resourceName}`

Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.

<h3 id="youtubereportingmediadownload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resourceName|path|string|true|Name of the media that is being downloaded.|
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
  "algorithm": "string",
  "bigstoreObjectRef": "string",
  "blobRef": "string",
  "blobstore2Info": {
    "blobGeneration": "string",
    "blobId": "string",
    "downloadReadHandle": "string",
    "readToken": "string",
    "uploadMetadataContainer": "string"
  },
  "compositeMedia": [
    {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    }
  ],
  "contentType": "string",
  "contentTypeInfo": {
    "bestGuess": "string",
    "fromBytes": "string",
    "fromFileName": "string",
    "fromHeader": "string",
    "fromUrlPath": "string"
  },
  "cosmoBinaryReference": "string",
  "crc32cHash": 0,
  "diffChecksumsResponse": {
    "checksumsLocation": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "chunkSizeBytes": "string",
    "objectLocation": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "objectSizeBytes": "string",
    "objectVersion": "string"
  },
  "diffDownloadResponse": {
    "objectLocation": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    }
  },
  "diffUploadRequest": {
    "checksumsInfo": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "objectInfo": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "objectVersion": "string"
  },
  "diffUploadResponse": {
    "objectVersion": "string",
    "originalObject": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    }
  },
  "diffVersionResponse": {
    "objectSizeBytes": "string",
    "objectVersion": "string"
  },
  "downloadParameters": {
    "allowGzipCompression": true,
    "ignoreRange": true
  },
  "filename": "string",
  "hash": "string",
  "hashVerified": true,
  "inline": "string",
  "isPotentialRetry": true,
  "length": "string",
  "md5Hash": "string",
  "mediaId": "string",
  "objectId": {
    "bucketName": "string",
    "generation": "string",
    "objectName": "string"
  },
  "path": "string",
  "referenceType": "PATH",
  "sha1Hash": "string",
  "sha256Hash": "string",
  "timestamp": "string",
  "token": "string"
}
```

<h3 id="youtubereportingmediadownload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GdataMedia](#schemagdatamedia)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly )
</aside>

<h1 id="youtube-reporting-api-reporttypes">reportTypes</h1>

## youtubereporting.reportTypes.list

<a id="opIdyoutubereporting.reportTypes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/reportTypes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/reportTypes`

Lists report types.

<h3 id="youtubereportingreporttypeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|includeSystemManaged|query|boolean|false|If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned.|
|onBehalfOfContentOwner|query|string|false|The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).|
|pageSize|query|integer|false|Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method.|
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
  "nextPageToken": "string",
  "reportTypes": [
    {
      "deprecateTime": "string",
      "id": "string",
      "name": "string",
      "systemManaged": true
    }
  ]
}
```

<h3 id="youtubereportingreporttypeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReportTypesResponse](#schemalistreporttypesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics-monetary.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/yt-analytics.readonly )
</aside>

# Schemas

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GdataBlobstore2Info">GdataBlobstore2Info</h2>
<!-- backwards compatibility -->
<a id="schemagdatablobstore2info"></a>
<a id="schema_GdataBlobstore2Info"></a>
<a id="tocSgdatablobstore2info"></a>
<a id="tocsgdatablobstore2info"></a>

```json
{
  "blobGeneration": "string",
  "blobId": "string",
  "downloadReadHandle": "string",
  "readToken": "string",
  "uploadMetadataContainer": "string"
}
```

gdata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blobGeneration|string(int64)|false|none|gdata|
|blobId|string|false|none|gdata|
|downloadReadHandle|string(byte)|false|none|gdata|
|readToken|string|false|none|gdata|
|uploadMetadataContainer|string(byte)|false|none|gdata|

<h2 id="tocS_GdataCompositeMedia">GdataCompositeMedia</h2>
<!-- backwards compatibility -->
<a id="schemagdatacompositemedia"></a>
<a id="schema_GdataCompositeMedia"></a>
<a id="tocSgdatacompositemedia"></a>
<a id="tocsgdatacompositemedia"></a>

```json
{
  "blobRef": "string",
  "blobstore2Info": {
    "blobGeneration": "string",
    "blobId": "string",
    "downloadReadHandle": "string",
    "readToken": "string",
    "uploadMetadataContainer": "string"
  },
  "cosmoBinaryReference": "string",
  "crc32cHash": 0,
  "inline": "string",
  "length": "string",
  "md5Hash": "string",
  "objectId": {
    "bucketName": "string",
    "generation": "string",
    "objectName": "string"
  },
  "path": "string",
  "referenceType": "PATH",
  "sha1Hash": "string"
}
```

gdata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blobRef|string(byte)|false|none|gdata|
|blobstore2Info|[GdataBlobstore2Info](#schemagdatablobstore2info)|false|none|gdata|
|cosmoBinaryReference|string(byte)|false|none|gdata|
|crc32cHash|integer(uint32)|false|none|gdata|
|inline|string(byte)|false|none|gdata|
|length|string(int64)|false|none|gdata|
|md5Hash|string(byte)|false|none|gdata|
|objectId|[GdataObjectId](#schemagdataobjectid)|false|none|gdata|
|path|string|false|none|gdata|
|referenceType|string|false|none|gdata|
|sha1Hash|string(byte)|false|none|gdata|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|PATH|
|referenceType|BLOB_REF|
|referenceType|INLINE|
|referenceType|BIGSTORE_REF|
|referenceType|COSMO_BINARY_REFERENCE|

<h2 id="tocS_GdataContentTypeInfo">GdataContentTypeInfo</h2>
<!-- backwards compatibility -->
<a id="schemagdatacontenttypeinfo"></a>
<a id="schema_GdataContentTypeInfo"></a>
<a id="tocSgdatacontenttypeinfo"></a>
<a id="tocsgdatacontenttypeinfo"></a>

```json
{
  "bestGuess": "string",
  "fromBytes": "string",
  "fromFileName": "string",
  "fromHeader": "string",
  "fromUrlPath": "string"
}
```

gdata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bestGuess|string|false|none|gdata|
|fromBytes|string|false|none|gdata|
|fromFileName|string|false|none|gdata|
|fromHeader|string|false|none|gdata|
|fromUrlPath|string|false|none|gdata|

<h2 id="tocS_GdataDiffChecksumsResponse">GdataDiffChecksumsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagdatadiffchecksumsresponse"></a>
<a id="schema_GdataDiffChecksumsResponse"></a>
<a id="tocSgdatadiffchecksumsresponse"></a>
<a id="tocsgdatadiffchecksumsresponse"></a>

```json
{
  "checksumsLocation": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  },
  "chunkSizeBytes": "string",
  "objectLocation": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  },
  "objectSizeBytes": "string",
  "objectVersion": "string"
}
```

gdata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checksumsLocation|[GdataCompositeMedia](#schemagdatacompositemedia)|false|none|gdata|
|chunkSizeBytes|string(int64)|false|none|gdata|
|objectLocation|[GdataCompositeMedia](#schemagdatacompositemedia)|false|none|gdata|
|objectSizeBytes|string(int64)|false|none|gdata|
|objectVersion|string|false|none|gdata|

<h2 id="tocS_GdataDiffDownloadResponse">GdataDiffDownloadResponse</h2>
<!-- backwards compatibility -->
<a id="schemagdatadiffdownloadresponse"></a>
<a id="schema_GdataDiffDownloadResponse"></a>
<a id="tocSgdatadiffdownloadresponse"></a>
<a id="tocsgdatadiffdownloadresponse"></a>

```json
{
  "objectLocation": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  }
}
```

gdata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectLocation|[GdataCompositeMedia](#schemagdatacompositemedia)|false|none|gdata|

<h2 id="tocS_GdataDiffUploadRequest">GdataDiffUploadRequest</h2>
<!-- backwards compatibility -->
<a id="schemagdatadiffuploadrequest"></a>
<a id="schema_GdataDiffUploadRequest"></a>
<a id="tocSgdatadiffuploadrequest"></a>
<a id="tocsgdatadiffuploadrequest"></a>

```json
{
  "checksumsInfo": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  },
  "objectInfo": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  },
  "objectVersion": "string"
}
```

gdata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checksumsInfo|[GdataCompositeMedia](#schemagdatacompositemedia)|false|none|gdata|
|objectInfo|[GdataCompositeMedia](#schemagdatacompositemedia)|false|none|gdata|
|objectVersion|string|false|none|gdata|

<h2 id="tocS_GdataDiffUploadResponse">GdataDiffUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemagdatadiffuploadresponse"></a>
<a id="schema_GdataDiffUploadResponse"></a>
<a id="tocSgdatadiffuploadresponse"></a>
<a id="tocsgdatadiffuploadresponse"></a>

```json
{
  "objectVersion": "string",
  "originalObject": {
    "blobRef": "string",
    "blobstore2Info": {
      "blobGeneration": "string",
      "blobId": "string",
      "downloadReadHandle": "string",
      "readToken": "string",
      "uploadMetadataContainer": "string"
    },
    "cosmoBinaryReference": "string",
    "crc32cHash": 0,
    "inline": "string",
    "length": "string",
    "md5Hash": "string",
    "objectId": {
      "bucketName": "string",
      "generation": "string",
      "objectName": "string"
    },
    "path": "string",
    "referenceType": "PATH",
    "sha1Hash": "string"
  }
}
```

gdata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectVersion|string|false|none|gdata|
|originalObject|[GdataCompositeMedia](#schemagdatacompositemedia)|false|none|gdata|

<h2 id="tocS_GdataDiffVersionResponse">GdataDiffVersionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagdatadiffversionresponse"></a>
<a id="schema_GdataDiffVersionResponse"></a>
<a id="tocSgdatadiffversionresponse"></a>
<a id="tocsgdatadiffversionresponse"></a>

```json
{
  "objectSizeBytes": "string",
  "objectVersion": "string"
}
```

gdata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectSizeBytes|string(int64)|false|none|gdata|
|objectVersion|string|false|none|gdata|

<h2 id="tocS_GdataDownloadParameters">GdataDownloadParameters</h2>
<!-- backwards compatibility -->
<a id="schemagdatadownloadparameters"></a>
<a id="schema_GdataDownloadParameters"></a>
<a id="tocSgdatadownloadparameters"></a>
<a id="tocsgdatadownloadparameters"></a>

```json
{
  "allowGzipCompression": true,
  "ignoreRange": true
}
```

gdata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowGzipCompression|boolean|false|none|gdata|
|ignoreRange|boolean|false|none|gdata|

<h2 id="tocS_GdataMedia">GdataMedia</h2>
<!-- backwards compatibility -->
<a id="schemagdatamedia"></a>
<a id="schema_GdataMedia"></a>
<a id="tocSgdatamedia"></a>
<a id="tocsgdatamedia"></a>

```json
{
  "algorithm": "string",
  "bigstoreObjectRef": "string",
  "blobRef": "string",
  "blobstore2Info": {
    "blobGeneration": "string",
    "blobId": "string",
    "downloadReadHandle": "string",
    "readToken": "string",
    "uploadMetadataContainer": "string"
  },
  "compositeMedia": [
    {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    }
  ],
  "contentType": "string",
  "contentTypeInfo": {
    "bestGuess": "string",
    "fromBytes": "string",
    "fromFileName": "string",
    "fromHeader": "string",
    "fromUrlPath": "string"
  },
  "cosmoBinaryReference": "string",
  "crc32cHash": 0,
  "diffChecksumsResponse": {
    "checksumsLocation": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "chunkSizeBytes": "string",
    "objectLocation": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "objectSizeBytes": "string",
    "objectVersion": "string"
  },
  "diffDownloadResponse": {
    "objectLocation": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    }
  },
  "diffUploadRequest": {
    "checksumsInfo": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "objectInfo": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    },
    "objectVersion": "string"
  },
  "diffUploadResponse": {
    "objectVersion": "string",
    "originalObject": {
      "blobRef": "string",
      "blobstore2Info": {
        "blobGeneration": "string",
        "blobId": "string",
        "downloadReadHandle": "string",
        "readToken": "string",
        "uploadMetadataContainer": "string"
      },
      "cosmoBinaryReference": "string",
      "crc32cHash": 0,
      "inline": "string",
      "length": "string",
      "md5Hash": "string",
      "objectId": {
        "bucketName": "string",
        "generation": "string",
        "objectName": "string"
      },
      "path": "string",
      "referenceType": "PATH",
      "sha1Hash": "string"
    }
  },
  "diffVersionResponse": {
    "objectSizeBytes": "string",
    "objectVersion": "string"
  },
  "downloadParameters": {
    "allowGzipCompression": true,
    "ignoreRange": true
  },
  "filename": "string",
  "hash": "string",
  "hashVerified": true,
  "inline": "string",
  "isPotentialRetry": true,
  "length": "string",
  "md5Hash": "string",
  "mediaId": "string",
  "objectId": {
    "bucketName": "string",
    "generation": "string",
    "objectName": "string"
  },
  "path": "string",
  "referenceType": "PATH",
  "sha1Hash": "string",
  "sha256Hash": "string",
  "timestamp": "string",
  "token": "string"
}
```

gdata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|gdata|
|bigstoreObjectRef|string(byte)|false|none|gdata|
|blobRef|string(byte)|false|none|gdata|
|blobstore2Info|[GdataBlobstore2Info](#schemagdatablobstore2info)|false|none|gdata|
|compositeMedia|[[GdataCompositeMedia](#schemagdatacompositemedia)]|false|none|gdata|
|contentType|string|false|none|gdata|
|contentTypeInfo|[GdataContentTypeInfo](#schemagdatacontenttypeinfo)|false|none|gdata|
|cosmoBinaryReference|string(byte)|false|none|gdata|
|crc32cHash|integer(uint32)|false|none|gdata|
|diffChecksumsResponse|[GdataDiffChecksumsResponse](#schemagdatadiffchecksumsresponse)|false|none|gdata|
|diffDownloadResponse|[GdataDiffDownloadResponse](#schemagdatadiffdownloadresponse)|false|none|gdata|
|diffUploadRequest|[GdataDiffUploadRequest](#schemagdatadiffuploadrequest)|false|none|gdata|
|diffUploadResponse|[GdataDiffUploadResponse](#schemagdatadiffuploadresponse)|false|none|gdata|
|diffVersionResponse|[GdataDiffVersionResponse](#schemagdatadiffversionresponse)|false|none|gdata|
|downloadParameters|[GdataDownloadParameters](#schemagdatadownloadparameters)|false|none|gdata|
|filename|string|false|none|gdata|
|hash|string|false|none|gdata|
|hashVerified|boolean|false|none|gdata|
|inline|string(byte)|false|none|gdata|
|isPotentialRetry|boolean|false|none|gdata|
|length|string(int64)|false|none|gdata|
|md5Hash|string(byte)|false|none|gdata|
|mediaId|string(byte)|false|none|gdata|
|objectId|[GdataObjectId](#schemagdataobjectid)|false|none|gdata|
|path|string|false|none|gdata|
|referenceType|string|false|none|gdata|
|sha1Hash|string(byte)|false|none|gdata|
|sha256Hash|string(byte)|false|none|gdata|
|timestamp|string(uint64)|false|none|gdata|
|token|string|false|none|gdata|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|PATH|
|referenceType|BLOB_REF|
|referenceType|INLINE|
|referenceType|GET_MEDIA|
|referenceType|COMPOSITE_MEDIA|
|referenceType|BIGSTORE_REF|
|referenceType|DIFF_VERSION_RESPONSE|
|referenceType|DIFF_CHECKSUMS_RESPONSE|
|referenceType|DIFF_DOWNLOAD_RESPONSE|
|referenceType|DIFF_UPLOAD_REQUEST|
|referenceType|DIFF_UPLOAD_RESPONSE|
|referenceType|COSMO_BINARY_REFERENCE|
|referenceType|ARBITRARY_BYTES|

<h2 id="tocS_GdataObjectId">GdataObjectId</h2>
<!-- backwards compatibility -->
<a id="schemagdataobjectid"></a>
<a id="schema_GdataObjectId"></a>
<a id="tocSgdataobjectid"></a>
<a id="tocsgdataobjectid"></a>

```json
{
  "bucketName": "string",
  "generation": "string",
  "objectName": "string"
}
```

gdata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|string|false|none|gdata|
|generation|string(int64)|false|none|gdata|
|objectName|string|false|none|gdata|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "createTime": "string",
  "expireTime": "string",
  "id": "string",
  "name": "string",
  "reportTypeId": "string",
  "systemManaged": true
}
```

A job creating reports of a specific type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The creation date/time of the job.|
|expireTime|string(google-datetime)|false|none|The date/time when this job will expire/expired. After a job expired, no new reports are generated.|
|id|string|false|none|The server-generated ID of the job (max. 40 characters).|
|name|string|false|none|The name of the job (max. 100 characters).|
|reportTypeId|string|false|none|The type of reports this job creates. Corresponds to the ID of a ReportType.|
|systemManaged|boolean|false|none|True if this a system-managed job that cannot be modified by the user; otherwise false.|

<h2 id="tocS_ListJobsResponse">ListJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsresponse"></a>
<a id="schema_ListJobsResponse"></a>
<a id="tocSlistjobsresponse"></a>
<a id="tocslistjobsresponse"></a>

```json
{
  "jobs": [
    {
      "createTime": "string",
      "expireTime": "string",
      "id": "string",
      "name": "string",
      "reportTypeId": "string",
      "systemManaged": true
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ReportingService.ListJobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[[Job](#schemajob)]|false|none|The list of jobs.|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass this value in the ListJobsRequest.page_token field in the subsequent call to `ListJobs` method to retrieve the next page of results.|

<h2 id="tocS_ListReportTypesResponse">ListReportTypesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreporttypesresponse"></a>
<a id="schema_ListReportTypesResponse"></a>
<a id="tocSlistreporttypesresponse"></a>
<a id="tocslistreporttypesresponse"></a>

```json
{
  "nextPageToken": "string",
  "reportTypes": [
    {
      "deprecateTime": "string",
      "id": "string",
      "name": "string",
      "systemManaged": true
    }
  ]
}
```

Response message for ReportingService.ListReportTypes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass this value in the ListReportTypesRequest.page_token field in the subsequent call to `ListReportTypes` method to retrieve the next page of results.|
|reportTypes|[[ReportType](#schemareporttype)]|false|none|The list of report types.|

<h2 id="tocS_ListReportsResponse">ListReportsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreportsresponse"></a>
<a id="schema_ListReportsResponse"></a>
<a id="tocSlistreportsresponse"></a>
<a id="tocslistreportsresponse"></a>

```json
{
  "nextPageToken": "string",
  "reports": [
    {
      "createTime": "string",
      "downloadUrl": "string",
      "endTime": "string",
      "id": "string",
      "jobExpireTime": "string",
      "jobId": "string",
      "startTime": "string"
    }
  ]
}
```

Response message for ReportingService.ListReports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass this value in the ListReportsRequest.page_token field in the subsequent call to `ListReports` method to retrieve the next page of results.|
|reports|[[Report](#schemareport)]|false|none|The list of report types.|

<h2 id="tocS_Report">Report</h2>
<!-- backwards compatibility -->
<a id="schemareport"></a>
<a id="schema_Report"></a>
<a id="tocSreport"></a>
<a id="tocsreport"></a>

```json
{
  "createTime": "string",
  "downloadUrl": "string",
  "endTime": "string",
  "id": "string",
  "jobExpireTime": "string",
  "jobId": "string",
  "startTime": "string"
}
```

A report's metadata including the URL from which the report itself can be downloaded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The date/time when this report was created.|
|downloadUrl|string|false|none|The URL from which the report can be downloaded (max. 1000 characters).|
|endTime|string(google-datetime)|false|none|The end of the time period that the report instance covers. The value is exclusive.|
|id|string|false|none|The server-generated ID of the report.|
|jobExpireTime|string(google-datetime)|false|none|The date/time when the job this report belongs to will expire/expired.|
|jobId|string|false|none|The ID of the job that created this report.|
|startTime|string(google-datetime)|false|none|The start of the time period that the report instance covers. The value is inclusive.|

<h2 id="tocS_ReportType">ReportType</h2>
<!-- backwards compatibility -->
<a id="schemareporttype"></a>
<a id="schema_ReportType"></a>
<a id="tocSreporttype"></a>
<a id="tocsreporttype"></a>

```json
{
  "deprecateTime": "string",
  "id": "string",
  "name": "string",
  "systemManaged": true
}
```

A report type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deprecateTime|string(google-datetime)|false|none|The date/time when this report type was/will be deprecated.|
|id|string|false|none|The ID of the report type (max. 100 characters).|
|name|string|false|none|The name of the report type (max. 100 characters).|
|systemManaged|boolean|false|none|True if this a system-managed report type; otherwise false. Reporting jobs for system-managed report types are created automatically and can thus not be used in the `CreateJob` method.|
