<h1 id="error-reporting-api">Error Reporting API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Groups and counts similar errors from cloud services and applications, reports new errors, and provides access to error groups and their associated errors.

Base URLs:

* <a href="https://clouderrorreporting.googleapis.com/">https://clouderrorreporting.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/error-reporting/">External documentation</a>

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

<h1 id="error-reporting-api-projects">projects</h1>

## clouderrorreporting.projects.groups.get

<a id="opIdclouderrorreporting.projects.groups.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{groupName}`

Get the specified group.

<h3 id="clouderrorreportingprojectsgroupsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupName|path|string|true|Required. The group resource name. Written as `projects/{projectID}/groups/{group_name}`. Call groupStats.list to return a list of groups belonging to this project. Example: `projects/my-project-123/groups/my-group`|
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
  "groupId": "string",
  "name": "string",
  "resolutionStatus": "RESOLUTION_STATUS_UNSPECIFIED",
  "trackingIssues": [
    {
      "url": "string"
    }
  ]
}
```

<h3 id="clouderrorreportingprojectsgroupsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ErrorGroup](#schemaerrorgroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouderrorreporting.projects.groups.update

<a id="opIdclouderrorreporting.projects.groups.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "groupId": "string",
    "name": "string",
    "resolutionStatus": "RESOLUTION_STATUS_UNSPECIFIED",
    "trackingIssues": [
      {
        "url": "string"
      }
    ]
  }'
```

`PUT /v1beta1/{name}`

Replace the data for the specified group. Fails if the group does not exist.

> Body parameter

```json
{
  "groupId": "string",
  "name": "string",
  "resolutionStatus": "RESOLUTION_STATUS_UNSPECIFIED",
  "trackingIssues": [
    {
      "url": "string"
    }
  ]
}
```

<h3 id="clouderrorreportingprojectsgroupsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The group resource name. Example: projects/my-project-123/groups/CNSgkpnppqKCUw|
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
|body|body|[ErrorGroup](#schemaerrorgroup)|false|none|
|» groupId|body|string|false|Group IDs are unique for a given project. If the same kind of error occurs in different service contexts, it will receive the same group ID.|
|» name|body|string|false|The group resource name. Example: projects/my-project-123/groups/CNSgkpnppqKCUw|
|» resolutionStatus|body|string|false|Error group's resolution status. An unspecified resolution status will be interpreted as OPEN|
|» trackingIssues|body|[[TrackingIssue](#schematrackingissue)]|false|Associated tracking issues.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» resolutionStatus|RESOLUTION_STATUS_UNSPECIFIED|
|» resolutionStatus|OPEN|
|» resolutionStatus|ACKNOWLEDGED|
|» resolutionStatus|RESOLVED|
|» resolutionStatus|MUTED|

> Example responses

> 200 Response

```json
{
  "groupId": "string",
  "name": "string",
  "resolutionStatus": "RESOLUTION_STATUS_UNSPECIFIED",
  "trackingIssues": [
    {
      "url": "string"
    }
  ]
}
```

<h3 id="clouderrorreportingprojectsgroupsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ErrorGroup](#schemaerrorgroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouderrorreporting.projects.events.list

<a id="opIdclouderrorreporting.projects.events.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{projectName}/events`

Lists the specified events.

<h3 id="clouderrorreportingprojectseventslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: `projects/my-project-123`.|
|groupId|query|string|false|Required. The group for which events shall be returned.|
|pageSize|query|integer|false|Optional. The maximum number of results to return per response.|
|pageToken|query|string|false|Optional. A `next_page_token` provided by a previous response.|
|serviceFilter.resourceType|query|string|false|Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type).|
|serviceFilter.service|query|string|false|Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).|
|serviceFilter.version|query|string|false|Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).|
|timeRange.period|query|string|false|Restricts the query to the specified time range.|
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
|timeRange.period|PERIOD_UNSPECIFIED|
|timeRange.period|PERIOD_1_HOUR|
|timeRange.period|PERIOD_6_HOURS|
|timeRange.period|PERIOD_1_DAY|
|timeRange.period|PERIOD_1_WEEK|
|timeRange.period|PERIOD_30_DAYS|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "errorEvents": [
    {
      "context": {
        "httpRequest": {
          "method": "string",
          "referrer": "string",
          "remoteIp": "string",
          "responseStatusCode": 0,
          "url": "string",
          "userAgent": "string"
        },
        "reportLocation": {
          "filePath": "string",
          "functionName": "string",
          "lineNumber": 0
        },
        "sourceReferences": [
          {
            "repository": "string",
            "revisionId": "string"
          }
        ],
        "user": "string"
      },
      "eventTime": "string",
      "message": "string",
      "serviceContext": {
        "resourceType": "string",
        "service": "string",
        "version": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "timeRangeBegin": "string"
}
```

<h3 id="clouderrorreportingprojectseventslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListEventsResponse](#schemalisteventsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouderrorreporting.projects.deleteEvents

<a id="opIdclouderrorreporting.projects.deleteEvents"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/events \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{projectName}/events`

Deletes all error events of a given project.

<h3 id="clouderrorreportingprojectsdeleteevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: `projects/my-project-123`.|
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

<h3 id="clouderrorreportingprojectsdeleteevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeleteEventsResponse](#schemadeleteeventsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouderrorreporting.projects.events.report

<a id="opIdclouderrorreporting.projects.events.report"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/events:report \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "context": {
      "httpRequest": {
        "method": "string",
        "referrer": "string",
        "remoteIp": "string",
        "responseStatusCode": 0,
        "url": "string",
        "userAgent": "string"
      },
      "reportLocation": {
        "filePath": "string",
        "functionName": "string",
        "lineNumber": 0
      },
      "sourceReferences": [
        {
          "repository": "string",
          "revisionId": "string"
        }
      ],
      "user": "string"
    },
    "eventTime": "string",
    "message": "string",
    "serviceContext": {
      "resourceType": "string",
      "service": "string",
      "version": "string"
    }
  }'
```

`POST /v1beta1/{projectName}/events:report`

Report an individual error event and record the event to a log. This endpoint accepts **either** an OAuth token, **or** an [API key](https://support.google.com/cloud/answer/6158862) for authentication. To use an API key, append it to the URL as the value of a `key` parameter. For example: `POST https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/events:report?key=123ABC456` **Note:** [Error Reporting] (https://cloud.google.com/error-reporting) is a global service built on Cloud Logging and doesn't analyze logs stored in regional log buckets or logs routed to other Google Cloud projects.

> Body parameter

```json
{
  "context": {
    "httpRequest": {
      "method": "string",
      "referrer": "string",
      "remoteIp": "string",
      "responseStatusCode": 0,
      "url": "string",
      "userAgent": "string"
    },
    "reportLocation": {
      "filePath": "string",
      "functionName": "string",
      "lineNumber": 0
    },
    "sourceReferences": [
      {
        "repository": "string",
        "revisionId": "string"
      }
    ],
    "user": "string"
  },
  "eventTime": "string",
  "message": "string",
  "serviceContext": {
    "resourceType": "string",
    "service": "string",
    "version": "string"
  }
}
```

<h3 id="clouderrorreportingprojectseventsreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectId}`, where `{projectId}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: // `projects/my-project-123`.|
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
|body|body|[ReportedErrorEvent](#schemareportederrorevent)|false|none|
|» context|body|[ErrorContext](#schemaerrorcontext)|false|Optional. A description of the context in which the error occurred.|
|» eventTime|body|string(google-datetime)|false|Optional. Time when the event occurred. If not provided, the time when the event was received by the Error Reporting system is used. If provided, the time must not exceed the [logs retention period](https://cloud.google.com/logging/quotas#logs_retention_periods) in the past, or be more than 24 hours in the future. If an invalid time is provided, then an error is returned.|
|» message|body|string|false|Required. The error message. If no `context.reportLocation` is provided, the message must contain a header (typically consisting of the exception type name and an error message) and an exception stack trace in one of the supported programming languages and formats. Supported languages are Java, Python, JavaScript, Ruby, C#, PHP, and Go. Supported stack trace formats are: * **Java**: Must be the return value of [`Throwable.printStackTrace()`](https://docs.oracle.com/javase/7/docs/api/java/lang/Throwable.html#printStackTrace%28%29). * **Python**: Must be the return value of [`traceback.format_exc()`](https://docs.python.org/2/library/traceback.html#traceback.format_exc). * **JavaScript**: Must be the value of [`error.stack`](https://github.com/v8/v8/wiki/Stack-Trace-API) as returned by V8. * **Ruby**: Must contain frames returned by [`Exception.backtrace`](https://ruby-doc.org/core-2.2.0/Exception.html#method-i-backtrace). * **C#**: Must be the return value of [`Exception.ToString()`](https://msdn.microsoft.com/en-us/library/system.exception.tostring.aspx). * **PHP**: Must be prefixed with `"PHP (Notice\|Parse error\|Fatal error\|Warning): "` and contain the result of [`(string)$exception`](https://php.net/manual/en/exception.tostring.php). * **Go**: Must be the return value of [`runtime.Stack()`](https://golang.org/pkg/runtime/debug/#Stack).|
|» serviceContext|body|[ServiceContext](#schemaservicecontext)|false|Required. The service context in which this error has occurred.|

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

<h3 id="clouderrorreportingprojectseventsreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReportErrorEventResponse](#schemareporterroreventresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## clouderrorreporting.projects.groupStats.list

<a id="opIdclouderrorreporting.projects.groupStats.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/groupStats \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{projectName}/groupStats`

Lists the specified groups.

<h3 id="clouderrorreportingprojectsgroupstatslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectName|path|string|true|Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}` or `projects/{projectNumber}`, where `{projectID}` and `{projectNumber}` can be found in the [Google Cloud console](https://support.google.com/cloud/answer/6158840). Examples: `projects/my-project-123`, `projects/5551234`.|
|alignment|query|string|false|Optional. The alignment of the timed counts to be returned. Default is `ALIGNMENT_EQUAL_AT_END`.|
|alignmentTime|query|string|false|Optional. Time where the timed counts shall be aligned if rounded alignment is chosen. Default is 00:00 UTC.|
|groupId|query|[string]|false|Optional. List all ErrorGroupStats with these IDs.|
|order|query|string|false|Optional. The sort order in which the results are returned. Default is `COUNT_DESC`.|
|pageSize|query|integer|false|Optional. The maximum number of results to return per response. Default is 20.|
|pageToken|query|string|false|Optional. A next_page_token provided by a previous response. To view additional results, pass this token along with the identical query parameters as the first request.|
|serviceFilter.resourceType|query|string|false|Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type).|
|serviceFilter.service|query|string|false|Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).|
|serviceFilter.version|query|string|false|Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).|
|timeRange.period|query|string|false|Restricts the query to the specified time range.|
|timedCountDuration|query|string|false|Optional. The preferred duration for a single returned TimedCount. If not set, no timed counts are returned.|
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
|alignment|ERROR_COUNT_ALIGNMENT_UNSPECIFIED|
|alignment|ALIGNMENT_EQUAL_ROUNDED|
|alignment|ALIGNMENT_EQUAL_AT_END|
|order|GROUP_ORDER_UNSPECIFIED|
|order|COUNT_DESC|
|order|LAST_SEEN_DESC|
|order|CREATED_DESC|
|order|AFFECTED_USERS_DESC|
|timeRange.period|PERIOD_UNSPECIFIED|
|timeRange.period|PERIOD_1_HOUR|
|timeRange.period|PERIOD_6_HOURS|
|timeRange.period|PERIOD_1_DAY|
|timeRange.period|PERIOD_1_WEEK|
|timeRange.period|PERIOD_30_DAYS|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "errorGroupStats": [
    {
      "affectedServices": [
        {
          "resourceType": "string",
          "service": "string",
          "version": "string"
        }
      ],
      "affectedUsersCount": "string",
      "count": "string",
      "firstSeenTime": "string",
      "group": {
        "groupId": "string",
        "name": "string",
        "resolutionStatus": "RESOLUTION_STATUS_UNSPECIFIED",
        "trackingIssues": [
          {
            "url": "string"
          }
        ]
      },
      "lastSeenTime": "string",
      "numAffectedServices": 0,
      "representative": {
        "context": {
          "httpRequest": {
            "method": "string",
            "referrer": "string",
            "remoteIp": "string",
            "responseStatusCode": 0,
            "url": "string",
            "userAgent": "string"
          },
          "reportLocation": {
            "filePath": "string",
            "functionName": "string",
            "lineNumber": 0
          },
          "sourceReferences": [
            {
              "repository": "string",
              "revisionId": "string"
            }
          ],
          "user": "string"
        },
        "eventTime": "string",
        "message": "string",
        "serviceContext": {
          "resourceType": "string",
          "service": "string",
          "version": "string"
        }
      },
      "timedCounts": [
        {
          "count": "string",
          "endTime": "string",
          "startTime": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string",
  "timeRangeBegin": "string"
}
```

<h3 id="clouderrorreportingprojectsgroupstatslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListGroupStatsResponse](#schemalistgroupstatsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_DeleteEventsResponse">DeleteEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteeventsresponse"></a>
<a id="schema_DeleteEventsResponse"></a>
<a id="tocSdeleteeventsresponse"></a>
<a id="tocsdeleteeventsresponse"></a>

```json
{}
```

Response message for deleting error events.

<h2 id="tocS_ErrorContext">ErrorContext</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcontext"></a>
<a id="schema_ErrorContext"></a>
<a id="tocSerrorcontext"></a>
<a id="tocserrorcontext"></a>

```json
{
  "httpRequest": {
    "method": "string",
    "referrer": "string",
    "remoteIp": "string",
    "responseStatusCode": 0,
    "url": "string",
    "userAgent": "string"
  },
  "reportLocation": {
    "filePath": "string",
    "functionName": "string",
    "lineNumber": 0
  },
  "sourceReferences": [
    {
      "repository": "string",
      "revisionId": "string"
    }
  ],
  "user": "string"
}
```

A description of the context in which an error occurred. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpRequest|[HttpRequestContext](#schemahttprequestcontext)|false|none|The HTTP request which was processed when the error was triggered.|
|reportLocation|[SourceLocation](#schemasourcelocation)|false|none|The location in the source code where the decision was made to report the error, usually the place where it was logged. For a logged exception this would be the source line where the exception is logged, usually close to the place where it was caught.|
|sourceReferences|[[SourceReference](#schemasourcereference)]|false|none|Source code that was used to build the executable which has caused the given error message.|
|user|string|false|none|The user who caused or was affected by the crash. This can be a user ID, an email address, or an arbitrary token that uniquely identifies the user. When sending an error report, leave this field empty if the user was not logged in. In this case the Error Reporting system will use other data, such as remote IP address, to distinguish affected users. See `affected_users_count` in `ErrorGroupStats`.|

<h2 id="tocS_ErrorEvent">ErrorEvent</h2>
<!-- backwards compatibility -->
<a id="schemaerrorevent"></a>
<a id="schema_ErrorEvent"></a>
<a id="tocSerrorevent"></a>
<a id="tocserrorevent"></a>

```json
{
  "context": {
    "httpRequest": {
      "method": "string",
      "referrer": "string",
      "remoteIp": "string",
      "responseStatusCode": 0,
      "url": "string",
      "userAgent": "string"
    },
    "reportLocation": {
      "filePath": "string",
      "functionName": "string",
      "lineNumber": 0
    },
    "sourceReferences": [
      {
        "repository": "string",
        "revisionId": "string"
      }
    ],
    "user": "string"
  },
  "eventTime": "string",
  "message": "string",
  "serviceContext": {
    "resourceType": "string",
    "service": "string",
    "version": "string"
  }
}
```

An error event which is returned by the Error Reporting system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[ErrorContext](#schemaerrorcontext)|false|none|Data about the context in which the error occurred.|
|eventTime|string(google-datetime)|false|none|Time when the event occurred as provided in the error report. If the report did not contain a timestamp, the time the error was received by the Error Reporting system is used.|
|message|string|false|none|The stack trace that was reported or logged by the service.|
|serviceContext|[ServiceContext](#schemaservicecontext)|false|none|The `ServiceContext` for which this error was reported.|

<h2 id="tocS_ErrorGroup">ErrorGroup</h2>
<!-- backwards compatibility -->
<a id="schemaerrorgroup"></a>
<a id="schema_ErrorGroup"></a>
<a id="tocSerrorgroup"></a>
<a id="tocserrorgroup"></a>

```json
{
  "groupId": "string",
  "name": "string",
  "resolutionStatus": "RESOLUTION_STATUS_UNSPECIFIED",
  "trackingIssues": [
    {
      "url": "string"
    }
  ]
}
```

Description of a group of similar error events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupId|string|false|none|Group IDs are unique for a given project. If the same kind of error occurs in different service contexts, it will receive the same group ID.|
|name|string|false|none|The group resource name. Example: projects/my-project-123/groups/CNSgkpnppqKCUw|
|resolutionStatus|string|false|none|Error group's resolution status. An unspecified resolution status will be interpreted as OPEN|
|trackingIssues|[[TrackingIssue](#schematrackingissue)]|false|none|Associated tracking issues.|

#### Enumerated Values

|Property|Value|
|---|---|
|resolutionStatus|RESOLUTION_STATUS_UNSPECIFIED|
|resolutionStatus|OPEN|
|resolutionStatus|ACKNOWLEDGED|
|resolutionStatus|RESOLVED|
|resolutionStatus|MUTED|

<h2 id="tocS_ErrorGroupStats">ErrorGroupStats</h2>
<!-- backwards compatibility -->
<a id="schemaerrorgroupstats"></a>
<a id="schema_ErrorGroupStats"></a>
<a id="tocSerrorgroupstats"></a>
<a id="tocserrorgroupstats"></a>

```json
{
  "affectedServices": [
    {
      "resourceType": "string",
      "service": "string",
      "version": "string"
    }
  ],
  "affectedUsersCount": "string",
  "count": "string",
  "firstSeenTime": "string",
  "group": {
    "groupId": "string",
    "name": "string",
    "resolutionStatus": "RESOLUTION_STATUS_UNSPECIFIED",
    "trackingIssues": [
      {
        "url": "string"
      }
    ]
  },
  "lastSeenTime": "string",
  "numAffectedServices": 0,
  "representative": {
    "context": {
      "httpRequest": {
        "method": "string",
        "referrer": "string",
        "remoteIp": "string",
        "responseStatusCode": 0,
        "url": "string",
        "userAgent": "string"
      },
      "reportLocation": {
        "filePath": "string",
        "functionName": "string",
        "lineNumber": 0
      },
      "sourceReferences": [
        {
          "repository": "string",
          "revisionId": "string"
        }
      ],
      "user": "string"
    },
    "eventTime": "string",
    "message": "string",
    "serviceContext": {
      "resourceType": "string",
      "service": "string",
      "version": "string"
    }
  },
  "timedCounts": [
    {
      "count": "string",
      "endTime": "string",
      "startTime": "string"
    }
  ]
}
```

Data extracted for a specific group based on certain filter criteria, such as a given time period and/or service filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affectedServices|[[ServiceContext](#schemaservicecontext)]|false|none|Service contexts with a non-zero error count for the given filter criteria. This list can be truncated if multiple services are affected. Refer to `num_affected_services` for the total count.|
|affectedUsersCount|string(int64)|false|none|Approximate number of affected users in the given group that match the filter criteria. Users are distinguished by data in the ErrorContext of the individual error events, such as their login name or their remote IP address in case of HTTP requests. The number of affected users can be zero even if the number of errors is non-zero if no data was provided from which the affected user could be deduced. Users are counted based on data in the request context that was provided in the error report. If more users are implicitly affected, such as due to a crash of the whole service, this is not reflected here.|
|count|string(int64)|false|none|Approximate total number of events in the given group that match the filter criteria.|
|firstSeenTime|string(google-datetime)|false|none|Approximate first occurrence that was ever seen for this group and which matches the given filter criteria, ignoring the time_range that was specified in the request.|
|group|[ErrorGroup](#schemaerrorgroup)|false|none|Group data that is independent of the filter criteria.|
|lastSeenTime|string(google-datetime)|false|none|Approximate last occurrence that was ever seen for this group and which matches the given filter criteria, ignoring the time_range that was specified in the request.|
|numAffectedServices|integer(int32)|false|none|The total number of services with a non-zero error count for the given filter criteria.|
|representative|[ErrorEvent](#schemaerrorevent)|false|none|An arbitrary event that is chosen as representative for the whole group. The representative event is intended to be used as a quick preview for the whole group. Events in the group are usually sufficiently similar to each other such that showing an arbitrary representative provides insight into the characteristics of the group as a whole.|
|timedCounts|[[TimedCount](#schematimedcount)]|false|none|Approximate number of occurrences over time. Timed counts returned by ListGroups are guaranteed to be: - Inside the requested time interval - Non-overlapping, and - Ordered by ascending time.|

<h2 id="tocS_HttpRequestContext">HttpRequestContext</h2>
<!-- backwards compatibility -->
<a id="schemahttprequestcontext"></a>
<a id="schema_HttpRequestContext"></a>
<a id="tocShttprequestcontext"></a>
<a id="tocshttprequestcontext"></a>

```json
{
  "method": "string",
  "referrer": "string",
  "remoteIp": "string",
  "responseStatusCode": 0,
  "url": "string",
  "userAgent": "string"
}
```

HTTP request data that is related to a reported error. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|false|none|The type of HTTP request, such as `GET`, `POST`, etc.|
|referrer|string|false|none|The referrer information that is provided with the request.|
|remoteIp|string|false|none|The IP address from which the request originated. This can be IPv4, IPv6, or a token which is derived from the IP address, depending on the data that has been provided in the error report.|
|responseStatusCode|integer(int32)|false|none|The HTTP response status code for the request.|
|url|string|false|none|The URL of the request.|
|userAgent|string|false|none|The user agent information that is provided with the request.|

<h2 id="tocS_ListEventsResponse">ListEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisteventsresponse"></a>
<a id="schema_ListEventsResponse"></a>
<a id="tocSlisteventsresponse"></a>
<a id="tocslisteventsresponse"></a>

```json
{
  "errorEvents": [
    {
      "context": {
        "httpRequest": {
          "method": "string",
          "referrer": "string",
          "remoteIp": "string",
          "responseStatusCode": 0,
          "url": "string",
          "userAgent": "string"
        },
        "reportLocation": {
          "filePath": "string",
          "functionName": "string",
          "lineNumber": 0
        },
        "sourceReferences": [
          {
            "repository": "string",
            "revisionId": "string"
          }
        ],
        "user": "string"
      },
      "eventTime": "string",
      "message": "string",
      "serviceContext": {
        "resourceType": "string",
        "service": "string",
        "version": "string"
      }
    }
  ],
  "nextPageToken": "string",
  "timeRangeBegin": "string"
}
```

Contains a set of requested error events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorEvents|[[ErrorEvent](#schemaerrorevent)]|false|none|The error events which match the given request.|
|nextPageToken|string|false|none|If non-empty, more results are available. Pass this token, along with the same query parameters as the first request, to view the next page of results.|
|timeRangeBegin|string(google-datetime)|false|none|The timestamp specifies the start time to which the request was restricted.|

<h2 id="tocS_ListGroupStatsResponse">ListGroupStatsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgroupstatsresponse"></a>
<a id="schema_ListGroupStatsResponse"></a>
<a id="tocSlistgroupstatsresponse"></a>
<a id="tocslistgroupstatsresponse"></a>

```json
{
  "errorGroupStats": [
    {
      "affectedServices": [
        {
          "resourceType": "string",
          "service": "string",
          "version": "string"
        }
      ],
      "affectedUsersCount": "string",
      "count": "string",
      "firstSeenTime": "string",
      "group": {
        "groupId": "string",
        "name": "string",
        "resolutionStatus": "RESOLUTION_STATUS_UNSPECIFIED",
        "trackingIssues": [
          {
            "url": "string"
          }
        ]
      },
      "lastSeenTime": "string",
      "numAffectedServices": 0,
      "representative": {
        "context": {
          "httpRequest": {
            "method": "string",
            "referrer": "string",
            "remoteIp": "string",
            "responseStatusCode": 0,
            "url": "string",
            "userAgent": "string"
          },
          "reportLocation": {
            "filePath": "string",
            "functionName": "string",
            "lineNumber": 0
          },
          "sourceReferences": [
            {
              "repository": "string",
              "revisionId": "string"
            }
          ],
          "user": "string"
        },
        "eventTime": "string",
        "message": "string",
        "serviceContext": {
          "resourceType": "string",
          "service": "string",
          "version": "string"
        }
      },
      "timedCounts": [
        {
          "count": "string",
          "endTime": "string",
          "startTime": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string",
  "timeRangeBegin": "string"
}
```

Contains a set of requested error group stats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorGroupStats|[[ErrorGroupStats](#schemaerrorgroupstats)]|false|none|The error group stats which match the given request.|
|nextPageToken|string|false|none|If non-empty, more results are available. Pass this token, along with the same query parameters as the first request, to view the next page of results.|
|timeRangeBegin|string(google-datetime)|false|none|The timestamp specifies the start time to which the request was restricted. The start time is set based on the requested time range. It may be adjusted to a later time if a project has exceeded the storage quota and older data has been deleted.|

<h2 id="tocS_ReportErrorEventResponse">ReportErrorEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemareporterroreventresponse"></a>
<a id="schema_ReportErrorEventResponse"></a>
<a id="tocSreporterroreventresponse"></a>
<a id="tocsreporterroreventresponse"></a>

```json
{}
```

Response for reporting an individual error event. Data may be added to this message in the future.

<h2 id="tocS_ReportedErrorEvent">ReportedErrorEvent</h2>
<!-- backwards compatibility -->
<a id="schemareportederrorevent"></a>
<a id="schema_ReportedErrorEvent"></a>
<a id="tocSreportederrorevent"></a>
<a id="tocsreportederrorevent"></a>

```json
{
  "context": {
    "httpRequest": {
      "method": "string",
      "referrer": "string",
      "remoteIp": "string",
      "responseStatusCode": 0,
      "url": "string",
      "userAgent": "string"
    },
    "reportLocation": {
      "filePath": "string",
      "functionName": "string",
      "lineNumber": 0
    },
    "sourceReferences": [
      {
        "repository": "string",
        "revisionId": "string"
      }
    ],
    "user": "string"
  },
  "eventTime": "string",
  "message": "string",
  "serviceContext": {
    "resourceType": "string",
    "service": "string",
    "version": "string"
  }
}
```

An error event which is reported to the Error Reporting system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[ErrorContext](#schemaerrorcontext)|false|none|Optional. A description of the context in which the error occurred.|
|eventTime|string(google-datetime)|false|none|Optional. Time when the event occurred. If not provided, the time when the event was received by the Error Reporting system is used. If provided, the time must not exceed the [logs retention period](https://cloud.google.com/logging/quotas#logs_retention_periods) in the past, or be more than 24 hours in the future. If an invalid time is provided, then an error is returned.|
|message|string|false|none|Required. The error message. If no `context.reportLocation` is provided, the message must contain a header (typically consisting of the exception type name and an error message) and an exception stack trace in one of the supported programming languages and formats. Supported languages are Java, Python, JavaScript, Ruby, C#, PHP, and Go. Supported stack trace formats are: * **Java**: Must be the return value of [`Throwable.printStackTrace()`](https://docs.oracle.com/javase/7/docs/api/java/lang/Throwable.html#printStackTrace%28%29). * **Python**: Must be the return value of [`traceback.format_exc()`](https://docs.python.org/2/library/traceback.html#traceback.format_exc). * **JavaScript**: Must be the value of [`error.stack`](https://github.com/v8/v8/wiki/Stack-Trace-API) as returned by V8. * **Ruby**: Must contain frames returned by [`Exception.backtrace`](https://ruby-doc.org/core-2.2.0/Exception.html#method-i-backtrace). * **C#**: Must be the return value of [`Exception.ToString()`](https://msdn.microsoft.com/en-us/library/system.exception.tostring.aspx). * **PHP**: Must be prefixed with `"PHP (Notice\|Parse error\|Fatal error\|Warning): "` and contain the result of [`(string)$exception`](https://php.net/manual/en/exception.tostring.php). * **Go**: Must be the return value of [`runtime.Stack()`](https://golang.org/pkg/runtime/debug/#Stack).|
|serviceContext|[ServiceContext](#schemaservicecontext)|false|none|Required. The service context in which this error has occurred.|

<h2 id="tocS_ServiceContext">ServiceContext</h2>
<!-- backwards compatibility -->
<a id="schemaservicecontext"></a>
<a id="schema_ServiceContext"></a>
<a id="tocSservicecontext"></a>
<a id="tocsservicecontext"></a>

```json
{
  "resourceType": "string",
  "service": "string",
  "version": "string"
}
```

Describes a running service that sends errors. Its version changes over time and multiple versions can run in parallel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceType|string|false|none|Type of the MonitoredResource. List of possible values: https://cloud.google.com/monitoring/api/resources Value is set automatically for incoming errors and must not be set when reporting errors.|
|service|string|false|none|An identifier of the service, such as the name of the executable, job, or Google App Engine service name. This field is expected to have a low number of values that are relatively stable over time, as opposed to `version`, which can be changed whenever new code is deployed. Contains the service name for error reports extracted from Google App Engine logs or `default` if the App Engine default service is used.|
|version|string|false|none|Represents the source code version that the developer provided, which could represent a version label or a Git SHA-1 hash, for example. For App Engine standard environment, the version is set to the version of the app.|

<h2 id="tocS_SourceLocation">SourceLocation</h2>
<!-- backwards compatibility -->
<a id="schemasourcelocation"></a>
<a id="schema_SourceLocation"></a>
<a id="tocSsourcelocation"></a>
<a id="tocssourcelocation"></a>

```json
{
  "filePath": "string",
  "functionName": "string",
  "lineNumber": 0
}
```

Indicates a location in the source code of the service for which errors are reported. `functionName` must be provided by the application when reporting an error, unless the error report contains a `message` with a supported exception stack trace. All fields are optional for the later case.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|string|false|none|The source code filename, which can include a truncated relative path, or a full path from a production machine.|
|functionName|string|false|none|Human-readable name of a function or method. The value can include optional context like the class or package name. For example, `my.package.MyClass.method` in case of Java.|
|lineNumber|integer(int32)|false|none|1-based. 0 indicates that the line number is unknown.|

<h2 id="tocS_SourceReference">SourceReference</h2>
<!-- backwards compatibility -->
<a id="schemasourcereference"></a>
<a id="schema_SourceReference"></a>
<a id="tocSsourcereference"></a>
<a id="tocssourcereference"></a>

```json
{
  "repository": "string",
  "revisionId": "string"
}
```

A reference to a particular snapshot of the source tree used to build and deploy an application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|string|false|none|Optional. A URI string identifying the repository. Example: "https://github.com/GoogleCloudPlatform/kubernetes.git"|
|revisionId|string|false|none|The canonical and persistent identifier of the deployed revision. Example (git): "0035781c50ec7aa23385dc841529ce8a4b70db1b"|

<h2 id="tocS_TimedCount">TimedCount</h2>
<!-- backwards compatibility -->
<a id="schematimedcount"></a>
<a id="schema_TimedCount"></a>
<a id="tocStimedcount"></a>
<a id="tocstimedcount"></a>

```json
{
  "count": "string",
  "endTime": "string",
  "startTime": "string"
}
```

The number of errors in a given time period. All numbers are approximate since the error events are sampled before counting them.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string(int64)|false|none|Approximate number of occurrences in the given time period.|
|endTime|string(google-datetime)|false|none|End of the time period to which `count` refers (excluded).|
|startTime|string(google-datetime)|false|none|Start of the time period to which `count` refers (included).|

<h2 id="tocS_TrackingIssue">TrackingIssue</h2>
<!-- backwards compatibility -->
<a id="schematrackingissue"></a>
<a id="schema_TrackingIssue"></a>
<a id="tocStrackingissue"></a>
<a id="tocstrackingissue"></a>

```json
{
  "url": "string"
}
```

Information related to tracking the progress on resolving the error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|A URL pointing to a related entry in an issue tracking system. Example: `https://github.com/user/project/issues/4`|
