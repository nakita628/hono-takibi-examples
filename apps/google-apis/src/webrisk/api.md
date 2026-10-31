<h1 id="web-risk-api">Web Risk API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://webrisk.googleapis.com/">https://webrisk.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/web-risk/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="web-risk-api-hashes">hashes</h1>

## webrisk.hashes.search

<a id="opIdwebrisk.hashes.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/hashes:search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/hashes:search`

Gets the full hashes that match the requested hash prefix. This is used after a hash prefix is looked up in a threatList and there is a match. The client side threatList only holds partial hashes so the client must query this method to determine if there is a full hash match of a threat.

<h3 id="webriskhashessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hashPrefix|query|string|false|A hash prefix, consisting of the most significant 4-32 bytes of a SHA256 hash. For JSON requests, this field is base64-encoded. Note that if this parameter is provided by a URI, it must be encoded using the web safe base64 variant (RFC 4648).|
|threatTypes|query|[string]|false|Required. The ThreatLists to search in. Multiple ThreatLists may be specified.|
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
|threatTypes|THREAT_TYPE_UNSPECIFIED|
|threatTypes|MALWARE|
|threatTypes|SOCIAL_ENGINEERING|
|threatTypes|UNWANTED_SOFTWARE|
|threatTypes|SOCIAL_ENGINEERING_EXTENDED_COVERAGE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "negativeExpireTime": "string",
  "threats": [
    {
      "expireTime": "string",
      "hash": "string",
      "threatTypes": [
        "THREAT_TYPE_UNSPECIFIED"
      ]
    }
  ]
}
```

<h3 id="webriskhashessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudWebriskV1SearchHashesResponse](#schemagooglecloudwebriskv1searchhashesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="web-risk-api-projects">projects</h1>

## webrisk.projects.operations.get

<a id="opIdwebrisk.projects.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="webriskprojectsoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource.|
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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="webriskprojectsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## webrisk.projects.operations.delete

<a id="opIdwebrisk.projects.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="webriskprojectsoperationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be deleted.|
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

<h3 id="webriskprojectsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="success">
This operation does not require authentication
</aside>

## webrisk.projects.operations.list

<a id="opIdwebrisk.projects.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json'
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="webriskprojectsoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation's parent resource.|
|filter|query|string|false|The standard list filter.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
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
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="webriskprojectsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## webrisk.projects.operations.cancel

<a id="opIdwebrisk.projects.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /v1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="webriskprojectsoperationscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be cancelled.|
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
|body|body|[GoogleLongrunningCancelOperationRequest](#schemagooglelongrunningcanceloperationrequest)|false|none|

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

<h3 id="webriskprojectsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="success">
This operation does not require authentication
</aside>

## webrisk.projects.submissions.create

<a id="opIdwebrisk.projects.submissions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/submissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "uri": "string"
  }'
```

`POST /v1/{parent}/submissions`

Creates a Submission of a URI suspected of containing phishing content to be reviewed. If the result verifies the existence of malicious phishing content, the site will be added to the [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future. Only allowlisted projects can use this method during Early Access. Please reach out to Sales or your customer engineer to obtain access.

> Body parameter

```json
{
  "uri": "string"
}
```

<h3 id="webriskprojectssubmissionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project that is making the submission. This string is in the format "projects/{project_number}".|
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
|body|body|[GoogleCloudWebriskV1Submission](#schemagooglecloudwebriskv1submission)|false|none|
|» uri|body|string|false|Required. The URI that is being reported for malicious content to be analyzed.|

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
  "uri": "string"
}
```

<h3 id="webriskprojectssubmissionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudWebriskV1Submission](#schemagooglecloudwebriskv1submission)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="web-risk-api-threatlists">threatLists</h1>

## webrisk.threatLists.computeDiff

<a id="opIdwebrisk.threatLists.computeDiff"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/threatLists:computeDiff \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/threatLists:computeDiff`

Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.

<h3 id="webriskthreatlistscomputediff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|constraints.maxDatabaseEntries|query|integer|false|Sets the maximum number of entries that the client is willing to have in the local database. This should be a power of 2 between 2**10 and 2**20. If zero, no database size limit is set.|
|constraints.maxDiffEntries|query|integer|false|The maximum size in number of entries. The diff will not contain more entries than this value. This should be a power of 2 between 2**10 and 2**20. If zero, no diff size limit is set.|
|constraints.supportedCompressions|query|[string]|false|The compression types supported by the client.|
|threatType|query|string|false|Required. The threat list to update. Only a single ThreatType should be specified per request. If you want to handle multiple ThreatTypes, you must make one request per ThreatType.|
|versionToken|query|string|false|The current version token of the client for the requested list (the client version that was received from the last successful diff). If the client does not have a version token (this is the first time calling ComputeThreatListDiff), this may be left empty and a full database snapshot will be returned.|
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
|constraints.supportedCompressions|COMPRESSION_TYPE_UNSPECIFIED|
|constraints.supportedCompressions|RAW|
|constraints.supportedCompressions|RICE|
|threatType|THREAT_TYPE_UNSPECIFIED|
|threatType|MALWARE|
|threatType|SOCIAL_ENGINEERING|
|threatType|UNWANTED_SOFTWARE|
|threatType|SOCIAL_ENGINEERING_EXTENDED_COVERAGE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "additions": {
    "rawHashes": [
      {
        "prefixSize": 0,
        "rawHashes": "string"
      }
    ],
    "riceHashes": {
      "encodedData": "string",
      "entryCount": 0,
      "firstValue": "string",
      "riceParameter": 0
    }
  },
  "checksum": {
    "sha256": "string"
  },
  "newVersionToken": "string",
  "recommendedNextDiff": "string",
  "removals": {
    "rawIndices": {
      "indices": [
        0
      ]
    },
    "riceIndices": {
      "encodedData": "string",
      "entryCount": 0,
      "firstValue": "string",
      "riceParameter": 0
    }
  },
  "responseType": "RESPONSE_TYPE_UNSPECIFIED"
}
```

<h3 id="webriskthreatlistscomputediff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudWebriskV1ComputeThreatListDiffResponse](#schemagooglecloudwebriskv1computethreatlistdiffresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="web-risk-api-uris">uris</h1>

## webrisk.uris.search

<a id="opIdwebrisk.uris.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/uris:search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/uris:search`

This method is used to check whether a URI is on a given threatList. Multiple threatLists may be searched in a single query. The response will list all requested threatLists the URI was found to match. If the URI is not found on any of the requested ThreatList an empty response will be returned.

<h3 id="webriskurissearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|threatTypes|query|[string]|false|Required. The ThreatLists to search in. Multiple ThreatLists may be specified.|
|uri|query|string|false|Required. The URI to be checked for matches.|
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
|threatTypes|THREAT_TYPE_UNSPECIFIED|
|threatTypes|MALWARE|
|threatTypes|SOCIAL_ENGINEERING|
|threatTypes|UNWANTED_SOFTWARE|
|threatTypes|SOCIAL_ENGINEERING_EXTENDED_COVERAGE|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "threat": {
    "expireTime": "string",
    "threatTypes": [
      "THREAT_TYPE_UNSPECIFIED"
    ]
  }
}
```

<h3 id="webriskurissearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudWebriskV1SearchUrisResponse](#schemagooglecloudwebriskv1searchurisresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudWebriskV1ComputeThreatListDiffResponse">GoogleCloudWebriskV1ComputeThreatListDiffResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudwebriskv1computethreatlistdiffresponse"></a>
<a id="schema_GoogleCloudWebriskV1ComputeThreatListDiffResponse"></a>
<a id="tocSgooglecloudwebriskv1computethreatlistdiffresponse"></a>
<a id="tocsgooglecloudwebriskv1computethreatlistdiffresponse"></a>

```json
{
  "additions": {
    "rawHashes": [
      {
        "prefixSize": 0,
        "rawHashes": "string"
      }
    ],
    "riceHashes": {
      "encodedData": "string",
      "entryCount": 0,
      "firstValue": "string",
      "riceParameter": 0
    }
  },
  "checksum": {
    "sha256": "string"
  },
  "newVersionToken": "string",
  "recommendedNextDiff": "string",
  "removals": {
    "rawIndices": {
      "indices": [
        0
      ]
    },
    "riceIndices": {
      "encodedData": "string",
      "entryCount": 0,
      "firstValue": "string",
      "riceParameter": 0
    }
  },
  "responseType": "RESPONSE_TYPE_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additions|[GoogleCloudWebriskV1ThreatEntryAdditions](#schemagooglecloudwebriskv1threatentryadditions)|false|none|A set of entries to add to a local threat type's list.|
|checksum|[GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum](#schemagooglecloudwebriskv1computethreatlistdiffresponsechecksum)|false|none|The expected SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database after applying the provided diff. If the client state doesn't match the expected state, the client must discard this diff and retry later.|
|newVersionToken|string(byte)|false|none|The new opaque client version token. This should be retained by the client and passed into the next call of ComputeThreatListDiff as 'version_token'. A separate version token should be stored and used for each threatList.|
|recommendedNextDiff|string(google-datetime)|false|none|The soonest the client should wait before issuing any diff request. Querying sooner is unlikely to produce a meaningful diff. Waiting longer is acceptable considering the use case. If this field is not set clients may update as soon as they want.|
|removals|[GoogleCloudWebriskV1ThreatEntryRemovals](#schemagooglecloudwebriskv1threatentryremovals)|false|none|A set of entries to remove from a local threat type's list. This field may be empty.|
|responseType|string|false|none|The type of response. This may indicate that an action must be taken by the client when the response is received.|

#### Enumerated Values

|Property|Value|
|---|---|
|responseType|RESPONSE_TYPE_UNSPECIFIED|
|responseType|DIFF|
|responseType|RESET|

<h2 id="tocS_GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum">GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudwebriskv1computethreatlistdiffresponsechecksum"></a>
<a id="schema_GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum"></a>
<a id="tocSgooglecloudwebriskv1computethreatlistdiffresponsechecksum"></a>
<a id="tocsgooglecloudwebriskv1computethreatlistdiffresponsechecksum"></a>

```json
{
  "sha256": "string"
}
```

The expected state of a client's local database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sha256|string(byte)|false|none|The SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database.|

<h2 id="tocS_GoogleCloudWebriskV1RawHashes">GoogleCloudWebriskV1RawHashes</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudwebriskv1rawhashes"></a>
<a id="schema_GoogleCloudWebriskV1RawHashes"></a>
<a id="tocSgooglecloudwebriskv1rawhashes"></a>
<a id="tocsgooglecloudwebriskv1rawhashes"></a>

```json
{
  "prefixSize": 0,
  "rawHashes": "string"
}
```

The uncompressed threat entries in hash format. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URI. Used for sending ThreatEntryAdditons to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prefixSize|integer(int32)|false|none|The number of bytes for each prefix encoded below. This field can be anywhere from 4 (shortest prefix) to 32 (full SHA256 hash). In practice this is almost always 4, except in exceptional circumstances.|
|rawHashes|string(byte)|false|none|The hashes, in binary format, concatenated into one long string. Hashes are sorted in lexicographic order. For JSON API users, hashes are base64-encoded.|

<h2 id="tocS_GoogleCloudWebriskV1RawIndices">GoogleCloudWebriskV1RawIndices</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudwebriskv1rawindices"></a>
<a id="schema_GoogleCloudWebriskV1RawIndices"></a>
<a id="tocSgooglecloudwebriskv1rawindices"></a>
<a id="tocsgooglecloudwebriskv1rawindices"></a>

```json
{
  "indices": [
    0
  ]
}
```

A set of raw indices to remove from a local list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indices|[integer(int32)]|false|none|The indices to remove from a lexicographically-sorted local list.|

<h2 id="tocS_GoogleCloudWebriskV1RiceDeltaEncoding">GoogleCloudWebriskV1RiceDeltaEncoding</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudwebriskv1ricedeltaencoding"></a>
<a id="schema_GoogleCloudWebriskV1RiceDeltaEncoding"></a>
<a id="tocSgooglecloudwebriskv1ricedeltaencoding"></a>
<a id="tocsgooglecloudwebriskv1ricedeltaencoding"></a>

```json
{
  "encodedData": "string",
  "entryCount": 0,
  "firstValue": "string",
  "riceParameter": 0
}
```

The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encodedData|string(byte)|false|none|The encoded deltas that are encoded using the Golomb-Rice coder.|
|entryCount|integer(int32)|false|none|The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`.|
|firstValue|string(int64)|false|none|The offset of the first entry in the encoded data, or, if only a single integer was encoded, that single integer's value. If the field is empty or missing, assume zero.|
|riceParameter|integer(int32)|false|none|The Golomb-Rice parameter, which is a number between 2 and 28. This field is missing (that is, zero) if `num_entries` is zero.|

<h2 id="tocS_GoogleCloudWebriskV1SearchHashesResponse">GoogleCloudWebriskV1SearchHashesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudwebriskv1searchhashesresponse"></a>
<a id="schema_GoogleCloudWebriskV1SearchHashesResponse"></a>
<a id="tocSgooglecloudwebriskv1searchhashesresponse"></a>
<a id="tocsgooglecloudwebriskv1searchhashesresponse"></a>

```json
{
  "negativeExpireTime": "string",
  "threats": [
    {
      "expireTime": "string",
      "hash": "string",
      "threatTypes": [
        "THREAT_TYPE_UNSPECIFIED"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|negativeExpireTime|string(google-datetime)|false|none|For requested entities that did not match the threat list, how long to cache the response until.|
|threats|[[GoogleCloudWebriskV1SearchHashesResponseThreatHash](#schemagooglecloudwebriskv1searchhashesresponsethreathash)]|false|none|The full hashes that matched the requested prefixes. The hash will be populated in the key.|

<h2 id="tocS_GoogleCloudWebriskV1SearchHashesResponseThreatHash">GoogleCloudWebriskV1SearchHashesResponseThreatHash</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudwebriskv1searchhashesresponsethreathash"></a>
<a id="schema_GoogleCloudWebriskV1SearchHashesResponseThreatHash"></a>
<a id="tocSgooglecloudwebriskv1searchhashesresponsethreathash"></a>
<a id="tocsgooglecloudwebriskv1searchhashesresponsethreathash"></a>

```json
{
  "expireTime": "string",
  "hash": "string",
  "threatTypes": [
    "THREAT_TYPE_UNSPECIFIED"
  ]
}
```

Contains threat information on a matching hash.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expireTime|string(google-datetime)|false|none|The cache lifetime for the returned match. Clients must not cache this response past this timestamp to avoid false positives.|
|hash|string(byte)|false|none|A 32 byte SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded.|
|threatTypes|[string]|false|none|The ThreatList this threat belongs to. This must contain at least one entry.|

#### Enumerated Values

|Property|Value|
|---|---|
|threatTypes|THREAT_TYPE_UNSPECIFIED|
|threatTypes|MALWARE|
|threatTypes|SOCIAL_ENGINEERING|
|threatTypes|UNWANTED_SOFTWARE|
|threatTypes|SOCIAL_ENGINEERING_EXTENDED_COVERAGE|

<h2 id="tocS_GoogleCloudWebriskV1SearchUrisResponse">GoogleCloudWebriskV1SearchUrisResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudwebriskv1searchurisresponse"></a>
<a id="schema_GoogleCloudWebriskV1SearchUrisResponse"></a>
<a id="tocSgooglecloudwebriskv1searchurisresponse"></a>
<a id="tocsgooglecloudwebriskv1searchurisresponse"></a>

```json
{
  "threat": {
    "expireTime": "string",
    "threatTypes": [
      "THREAT_TYPE_UNSPECIFIED"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|threat|[GoogleCloudWebriskV1SearchUrisResponseThreatUri](#schemagooglecloudwebriskv1searchurisresponsethreaturi)|false|none|The threat list matches. This might be empty if the URI is on no list.|

<h2 id="tocS_GoogleCloudWebriskV1SearchUrisResponseThreatUri">GoogleCloudWebriskV1SearchUrisResponseThreatUri</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudwebriskv1searchurisresponsethreaturi"></a>
<a id="schema_GoogleCloudWebriskV1SearchUrisResponseThreatUri"></a>
<a id="tocSgooglecloudwebriskv1searchurisresponsethreaturi"></a>
<a id="tocsgooglecloudwebriskv1searchurisresponsethreaturi"></a>

```json
{
  "expireTime": "string",
  "threatTypes": [
    "THREAT_TYPE_UNSPECIFIED"
  ]
}
```

Contains threat information on a matching uri.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expireTime|string(google-datetime)|false|none|The cache lifetime for the returned match. Clients must not cache this response past this timestamp to avoid false positives.|
|threatTypes|[string]|false|none|The ThreatList this threat belongs to.|

#### Enumerated Values

|Property|Value|
|---|---|
|threatTypes|THREAT_TYPE_UNSPECIFIED|
|threatTypes|MALWARE|
|threatTypes|SOCIAL_ENGINEERING|
|threatTypes|UNWANTED_SOFTWARE|
|threatTypes|SOCIAL_ENGINEERING_EXTENDED_COVERAGE|

<h2 id="tocS_GoogleCloudWebriskV1Submission">GoogleCloudWebriskV1Submission</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudwebriskv1submission"></a>
<a id="schema_GoogleCloudWebriskV1Submission"></a>
<a id="tocSgooglecloudwebriskv1submission"></a>
<a id="tocsgooglecloudwebriskv1submission"></a>

```json
{
  "uri": "string"
}
```

Wraps a URI that might be displaying malicious content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Required. The URI that is being reported for malicious content to be analyzed.|

<h2 id="tocS_GoogleCloudWebriskV1ThreatEntryAdditions">GoogleCloudWebriskV1ThreatEntryAdditions</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudwebriskv1threatentryadditions"></a>
<a id="schema_GoogleCloudWebriskV1ThreatEntryAdditions"></a>
<a id="tocSgooglecloudwebriskv1threatentryadditions"></a>
<a id="tocsgooglecloudwebriskv1threatentryadditions"></a>

```json
{
  "rawHashes": [
    {
      "prefixSize": 0,
      "rawHashes": "string"
    }
  ],
  "riceHashes": {
    "encodedData": "string",
    "entryCount": 0,
    "firstValue": "string",
    "riceParameter": 0
  }
}
```

Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rawHashes|[[GoogleCloudWebriskV1RawHashes](#schemagooglecloudwebriskv1rawhashes)]|false|none|The raw SHA256-formatted entries. Repeated to allow returning sets of hashes with different prefix sizes.|
|riceHashes|[GoogleCloudWebriskV1RiceDeltaEncoding](#schemagooglecloudwebriskv1ricedeltaencoding)|false|none|The encoded 4-byte prefixes of SHA256-formatted entries, using a Golomb-Rice encoding. The hashes are converted to uint32, sorted in ascending order, then delta encoded and stored as encoded_data.|

<h2 id="tocS_GoogleCloudWebriskV1ThreatEntryRemovals">GoogleCloudWebriskV1ThreatEntryRemovals</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudwebriskv1threatentryremovals"></a>
<a id="schema_GoogleCloudWebriskV1ThreatEntryRemovals"></a>
<a id="tocSgooglecloudwebriskv1threatentryremovals"></a>
<a id="tocsgooglecloudwebriskv1threatentryremovals"></a>

```json
{
  "rawIndices": {
    "indices": [
      0
    ]
  },
  "riceIndices": {
    "encodedData": "string",
    "entryCount": 0,
    "firstValue": "string",
    "riceParameter": 0
  }
}
```

Contains the set of entries to remove from a local database.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rawIndices|[GoogleCloudWebriskV1RawIndices](#schemagooglecloudwebriskv1rawindices)|false|none|The raw removal indices for a local list.|
|riceIndices|[GoogleCloudWebriskV1RiceDeltaEncoding](#schemagooglecloudwebriskv1ricedeltaencoding)|false|none|The encoded local, lexicographically-sorted list indices, using a Golomb-Rice encoding. Used for sending compressed removal indices. The removal indices (uint32) are sorted in ascending order, then delta encoded and stored as encoded_data.|

<h2 id="tocS_GoogleLongrunningCancelOperationRequest">GoogleLongrunningCancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningcanceloperationrequest"></a>
<a id="schema_GoogleLongrunningCancelOperationRequest"></a>
<a id="tocSgooglelongrunningcanceloperationrequest"></a>
<a id="tocsgooglelongrunningcanceloperationrequest"></a>

```json
{}
```

The request message for Operations.CancelOperation.

<h2 id="tocS_GoogleLongrunningListOperationsResponse">GoogleLongrunningListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunninglistoperationsresponse"></a>
<a id="schema_GoogleLongrunningListOperationsResponse"></a>
<a id="tocSgooglelongrunninglistoperationsresponse"></a>
<a id="tocsgooglelongrunninglistoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

The response message for Operations.ListOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The standard List next-page token.|
|operations|[[GoogleLongrunningOperation](#schemagooglelongrunningoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_GoogleLongrunningOperation">GoogleLongrunningOperation</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningoperation"></a>
<a id="schema_GoogleLongrunningOperation"></a>
<a id="tocSgooglelongrunningoperation"></a>
<a id="tocsgooglelongrunningoperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Contains a `SubmitUriMetadata` object.|
|name|string|false|none|Matches the `/v1/{project-name}/operations/{operation-id}` pattern.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_GoogleProtobufEmpty">GoogleProtobufEmpty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufempty"></a>
<a id="schema_GoogleProtobufEmpty"></a>
<a id="tocSgoogleprotobufempty"></a>
<a id="tocsgoogleprotobufempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GoogleRpcStatus">GoogleRpcStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpcstatus"></a>
<a id="schema_GoogleRpcStatus"></a>
<a id="tocSgooglerpcstatus"></a>
<a id="tocsgooglerpcstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|
