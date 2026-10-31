<h1 id="cloud-scheduler-api">Cloud Scheduler API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Creates and manages jobs run on a regular recurring schedule.

Base URLs:

* <a href="https://cloudscheduler.googleapis.com/">https://cloudscheduler.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/scheduler/">External documentation</a>

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

<h1 id="cloud-scheduler-api-projects">projects</h1>

## cloudscheduler.projects.locations.jobs.get

<a id="opIdcloudscheduler.projects.locations.jobs.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets a job.

<h3 id="cloudschedulerprojectslocationsjobsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.|
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
  "appEngineHttpTarget": {
    "appEngineRouting": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    },
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "relativeUri": "string"
  },
  "attemptDeadline": "string",
  "description": "string",
  "httpTarget": {
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uri": "string"
  },
  "lastAttemptTime": "string",
  "legacyAppEngineCron": true,
  "name": "string",
  "pubsubTarget": {
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "data": "string",
    "topicName": "string"
  },
  "retryConfig": {
    "maxBackoffDuration": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoffDuration": "string",
    "retryCount": 0
  },
  "schedule": "string",
  "scheduleTime": "string",
  "state": "STATE_UNSPECIFIED",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "timeZone": "string",
  "userUpdateTime": "string"
}
```

<h3 id="cloudschedulerprojectslocationsjobsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudscheduler.projects.locations.jobs.delete

<a id="opIdcloudscheduler.projects.locations.jobs.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a job.

<h3 id="cloudschedulerprojectslocationsjobsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.|
|legacyAppEngineCron|query|boolean|false|This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the job in the __cron queue with the corresponding name will be deleted instead.|
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

<h3 id="cloudschedulerprojectslocationsjobsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudscheduler.projects.locations.jobs.patch

<a id="opIdcloudscheduler.projects.locations.jobs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appEngineHttpTarget": {
      "appEngineRouting": {
        "host": "string",
        "instance": "string",
        "service": "string",
        "version": "string"
      },
      "body": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "httpMethod": "HTTP_METHOD_UNSPECIFIED",
      "relativeUri": "string"
    },
    "attemptDeadline": "string",
    "description": "string",
    "httpTarget": {
      "body": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "httpMethod": "HTTP_METHOD_UNSPECIFIED",
      "oauthToken": {
        "scope": "string",
        "serviceAccountEmail": "string"
      },
      "oidcToken": {
        "audience": "string",
        "serviceAccountEmail": "string"
      },
      "uri": "string"
    },
    "legacyAppEngineCron": true,
    "name": "string",
    "pubsubTarget": {
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "data": "string",
      "topicName": "string"
    },
    "retryConfig": {
      "maxBackoffDuration": "string",
      "maxDoublings": 0,
      "maxRetryDuration": "string",
      "minBackoffDuration": "string",
      "retryCount": 0
    },
    "schedule": "string",
    "timeZone": "string"
  }'
```

`PATCH /v1beta1/{name}`

Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.

> Body parameter

```json
{
  "appEngineHttpTarget": {
    "appEngineRouting": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    },
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "relativeUri": "string"
  },
  "attemptDeadline": "string",
  "description": "string",
  "httpTarget": {
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uri": "string"
  },
  "legacyAppEngineCron": true,
  "name": "string",
  "pubsubTarget": {
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "data": "string",
    "topicName": "string"
  },
  "retryConfig": {
    "maxBackoffDuration": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoffDuration": "string",
    "retryCount": 0
  },
  "schedule": "string",
  "timeZone": "string"
}
```

<h3 id="cloudschedulerprojectslocationsjobspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Optionally caller-specified in CreateJob, after which it becomes output only. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the job's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters.|
|updateMask|query|string|false|A mask used to specify which fields of the job are being updated.|
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
|» appEngineHttpTarget|body|[AppEngineHttpTarget](#schemaappenginehttptarget)|false|App Engine HTTP target.|
|» attemptDeadline|body|string(google-duration)|false|The deadline for job attempts. If the request handler does not respond by this deadline then the request is cancelled and the attempt is marked as a `DEADLINE_EXCEEDED` failure. The failed attempt can be viewed in execution logs. Cloud Scheduler will retry the job according to the RetryConfig. The default and the allowed values depend on the type of target: * For HTTP targets, the default is 3 minutes. The deadline must be in the interval [15 seconds, 30 minutes]. * For App Engine HTTP targets, 0 indicates that the request has the default deadline. The default deadline depends on the scaling type of the service: 10 minutes for standard apps with automatic scaling, 24 hours for standard apps with manual and basic scaling, and 60 minutes for flex apps. If the request deadline is set, it must be in the interval [15 seconds, 24 hours 15 seconds]. * For Pub/Sub targets, this field is ignored.|
|» description|body|string|false|Optionally caller-specified in CreateJob or UpdateJob. A human-readable description for the job. This string must not contain more than 500 characters.|
|» httpTarget|body|[HttpTarget](#schemahttptarget)|false|HTTP target.|
|» legacyAppEngineCron|body|boolean|false|Immutable. This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the job will be considered a legacy job. Note that App Engine Cron jobs have fewer features than Cloud Scheduler jobs, e.g., are only limited to App Engine targets.|
|» name|body|string|false|Optionally caller-specified in CreateJob, after which it becomes output only. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the job's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters.|
|» pubsubTarget|body|[PubsubTarget](#schemapubsubtarget)|false|Pub/Sub target.|
|» retryConfig|body|[RetryConfig](#schemaretryconfig)|false|Settings that determine the retry behavior.|
|» schedule|body|string|false|Required, except when used with UpdateJob. Describes the schedule on which the job will be executed. The schedule can be either of the following types: * [Crontab](https://en.wikipedia.org/wiki/Cron#Overview) * English-like [schedule](https://cloud.google.com/scheduler/docs/configuring/cron-job-schedules) As a general rule, execution `n + 1` of a job will not begin until execution `n` has finished. Cloud Scheduler will never allow two simultaneously outstanding executions. For example, this implies that if the `n+1`th execution is scheduled to run at 16:00 but the `n`th execution takes until 16:15, the `n+1`th execution will not start until `16:15`. A scheduled start time will be delayed if the previous execution has not ended when its scheduled time occurs. If retry_count > 0 and a job attempt fails, the job will be tried a total of retry_count times, with exponential backoff, until the next scheduled start time. If retry_count is 0, a job attempt will not be retried if it fails. Instead the Cloud Scheduler system will wait for the next scheduled execution time. Setting retry_count to 0 does not prevent failed jobs from running according to schedule after the failure.|
|» timeZone|body|string|false|Specifies the time zone to be used in interpreting schedule. The value of this field must be a time zone name from the [tz database](http://en.wikipedia.org/wiki/Tz_database). Note that some time zones include a provision for daylight savings time. The rules for daylight saving time are determined by the chosen tz. For UTC use the string "utc". If a time zone is not specified, the default will be in UTC (also known as GMT).|

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
  "appEngineHttpTarget": {
    "appEngineRouting": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    },
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "relativeUri": "string"
  },
  "attemptDeadline": "string",
  "description": "string",
  "httpTarget": {
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uri": "string"
  },
  "lastAttemptTime": "string",
  "legacyAppEngineCron": true,
  "name": "string",
  "pubsubTarget": {
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "data": "string",
    "topicName": "string"
  },
  "retryConfig": {
    "maxBackoffDuration": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoffDuration": "string",
    "retryCount": 0
  },
  "schedule": "string",
  "scheduleTime": "string",
  "state": "STATE_UNSPECIFIED",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "timeZone": "string",
  "userUpdateTime": "string"
}
```

<h3 id="cloudschedulerprojectslocationsjobspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudscheduler.projects.locations.list

<a id="opIdcloudscheduler.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="cloudschedulerprojectslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource that owns the locations collection, if applicable.|
|filter|query|string|false|A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).|
|pageSize|query|integer|false|The maximum number of results to return. If not set, the service selects a default.|
|pageToken|query|string|false|A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.|
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
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudschedulerprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudscheduler.projects.locations.jobs.pause

<a id="opIdcloudscheduler.projects.locations.jobs.pause"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:pause \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:pause`

Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.

> Body parameter

```json
{}
```

<h3 id="cloudschedulerprojectslocationsjobspause-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.|
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
|body|body|[PauseJobRequest](#schemapausejobrequest)|false|none|

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
  "appEngineHttpTarget": {
    "appEngineRouting": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    },
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "relativeUri": "string"
  },
  "attemptDeadline": "string",
  "description": "string",
  "httpTarget": {
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uri": "string"
  },
  "lastAttemptTime": "string",
  "legacyAppEngineCron": true,
  "name": "string",
  "pubsubTarget": {
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "data": "string",
    "topicName": "string"
  },
  "retryConfig": {
    "maxBackoffDuration": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoffDuration": "string",
    "retryCount": 0
  },
  "schedule": "string",
  "scheduleTime": "string",
  "state": "STATE_UNSPECIFIED",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "timeZone": "string",
  "userUpdateTime": "string"
}
```

<h3 id="cloudschedulerprojectslocationsjobspause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudscheduler.projects.locations.jobs.resume

<a id="opIdcloudscheduler.projects.locations.jobs.resume"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:resume \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:resume`

Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.

> Body parameter

```json
{}
```

<h3 id="cloudschedulerprojectslocationsjobsresume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.|
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
|body|body|[ResumeJobRequest](#schemaresumejobrequest)|false|none|

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
  "appEngineHttpTarget": {
    "appEngineRouting": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    },
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "relativeUri": "string"
  },
  "attemptDeadline": "string",
  "description": "string",
  "httpTarget": {
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uri": "string"
  },
  "lastAttemptTime": "string",
  "legacyAppEngineCron": true,
  "name": "string",
  "pubsubTarget": {
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "data": "string",
    "topicName": "string"
  },
  "retryConfig": {
    "maxBackoffDuration": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoffDuration": "string",
    "retryCount": 0
  },
  "schedule": "string",
  "scheduleTime": "string",
  "state": "STATE_UNSPECIFIED",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "timeZone": "string",
  "userUpdateTime": "string"
}
```

<h3 id="cloudschedulerprojectslocationsjobsresume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudscheduler.projects.locations.jobs.run

<a id="opIdcloudscheduler.projects.locations.jobs.run"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "legacyAppEngineCron": true
  }'
```

`POST /v1beta1/{name}:run`

Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.

> Body parameter

```json
{
  "legacyAppEngineCron": true
}
```

<h3 id="cloudschedulerprojectslocationsjobsrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.|
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
|body|body|[RunJobRequest](#schemarunjobrequest)|false|none|
|» legacyAppEngineCron|body|boolean|false|This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the job in the __cron queue with the corresponding name will be forced to run instead.|

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
  "appEngineHttpTarget": {
    "appEngineRouting": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    },
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "relativeUri": "string"
  },
  "attemptDeadline": "string",
  "description": "string",
  "httpTarget": {
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uri": "string"
  },
  "lastAttemptTime": "string",
  "legacyAppEngineCron": true,
  "name": "string",
  "pubsubTarget": {
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "data": "string",
    "topicName": "string"
  },
  "retryConfig": {
    "maxBackoffDuration": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoffDuration": "string",
    "retryCount": 0
  },
  "schedule": "string",
  "scheduleTime": "string",
  "state": "STATE_UNSPECIFIED",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "timeZone": "string",
  "userUpdateTime": "string"
}
```

<h3 id="cloudschedulerprojectslocationsjobsrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudscheduler.projects.locations.jobs.list

<a id="opIdcloudscheduler.projects.locations.jobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/jobs`

Lists jobs.

<h3 id="cloudschedulerprojectslocationsjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.|
|filter|query|string|false|`filter` can be used to specify a subset of jobs. If `filter` equals `target_config="HttpConfig"`, then the http target jobs are retrieved. If `filter` equals `target_config="PubSubConfig"`, then the Pub/Sub target jobs are retrieved. If `filter` equals `labels.foo=value1 labels.foo=value2` then only jobs which are labeled with foo=value1 AND foo=value2 will be returned.|
|legacyAppEngineCron|query|boolean|false|This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the jobs in the __cron queue will be listed instead.|
|pageSize|query|integer|false|Requested page size. The maximum page size is 500. If unspecified, the page size will be the maximum. Fewer jobs than requested might be returned, even if more jobs exist; use next_page_token to determine if more jobs exist.|
|pageToken|query|string|false|A token identifying a page of results the server will return. To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListJobs. It is an error to switch the value of filter or order_by while iterating through pages.|
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
      "appEngineHttpTarget": {
        "appEngineRouting": {
          "host": "string",
          "instance": "string",
          "service": "string",
          "version": "string"
        },
        "body": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "httpMethod": "HTTP_METHOD_UNSPECIFIED",
        "relativeUri": "string"
      },
      "attemptDeadline": "string",
      "description": "string",
      "httpTarget": {
        "body": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "httpMethod": "HTTP_METHOD_UNSPECIFIED",
        "oauthToken": {
          "scope": "string",
          "serviceAccountEmail": "string"
        },
        "oidcToken": {
          "audience": "string",
          "serviceAccountEmail": "string"
        },
        "uri": "string"
      },
      "lastAttemptTime": "string",
      "legacyAppEngineCron": true,
      "name": "string",
      "pubsubTarget": {
        "attributes": {
          "property1": "string",
          "property2": "string"
        },
        "data": "string",
        "topicName": "string"
      },
      "retryConfig": {
        "maxBackoffDuration": "string",
        "maxDoublings": 0,
        "maxRetryDuration": "string",
        "minBackoffDuration": "string",
        "retryCount": 0
      },
      "schedule": "string",
      "scheduleTime": "string",
      "state": "STATE_UNSPECIFIED",
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "timeZone": "string",
      "userUpdateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="cloudschedulerprojectslocationsjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListJobsResponse](#schemalistjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudscheduler.projects.locations.jobs.create

<a id="opIdcloudscheduler.projects.locations.jobs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appEngineHttpTarget": {
      "appEngineRouting": {
        "host": "string",
        "instance": "string",
        "service": "string",
        "version": "string"
      },
      "body": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "httpMethod": "HTTP_METHOD_UNSPECIFIED",
      "relativeUri": "string"
    },
    "attemptDeadline": "string",
    "description": "string",
    "httpTarget": {
      "body": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "httpMethod": "HTTP_METHOD_UNSPECIFIED",
      "oauthToken": {
        "scope": "string",
        "serviceAccountEmail": "string"
      },
      "oidcToken": {
        "audience": "string",
        "serviceAccountEmail": "string"
      },
      "uri": "string"
    },
    "legacyAppEngineCron": true,
    "name": "string",
    "pubsubTarget": {
      "attributes": {
        "property1": "string",
        "property2": "string"
      },
      "data": "string",
      "topicName": "string"
    },
    "retryConfig": {
      "maxBackoffDuration": "string",
      "maxDoublings": 0,
      "maxRetryDuration": "string",
      "minBackoffDuration": "string",
      "retryCount": 0
    },
    "schedule": "string",
    "timeZone": "string"
  }'
```

`POST /v1beta1/{parent}/jobs`

Creates a job.

> Body parameter

```json
{
  "appEngineHttpTarget": {
    "appEngineRouting": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    },
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "relativeUri": "string"
  },
  "attemptDeadline": "string",
  "description": "string",
  "httpTarget": {
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uri": "string"
  },
  "legacyAppEngineCron": true,
  "name": "string",
  "pubsubTarget": {
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "data": "string",
    "topicName": "string"
  },
  "retryConfig": {
    "maxBackoffDuration": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoffDuration": "string",
    "retryCount": 0
  },
  "schedule": "string",
  "timeZone": "string"
}
```

<h3 id="cloudschedulerprojectslocationsjobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.|
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
|» appEngineHttpTarget|body|[AppEngineHttpTarget](#schemaappenginehttptarget)|false|App Engine HTTP target.|
|» attemptDeadline|body|string(google-duration)|false|The deadline for job attempts. If the request handler does not respond by this deadline then the request is cancelled and the attempt is marked as a `DEADLINE_EXCEEDED` failure. The failed attempt can be viewed in execution logs. Cloud Scheduler will retry the job according to the RetryConfig. The default and the allowed values depend on the type of target: * For HTTP targets, the default is 3 minutes. The deadline must be in the interval [15 seconds, 30 minutes]. * For App Engine HTTP targets, 0 indicates that the request has the default deadline. The default deadline depends on the scaling type of the service: 10 minutes for standard apps with automatic scaling, 24 hours for standard apps with manual and basic scaling, and 60 minutes for flex apps. If the request deadline is set, it must be in the interval [15 seconds, 24 hours 15 seconds]. * For Pub/Sub targets, this field is ignored.|
|» description|body|string|false|Optionally caller-specified in CreateJob or UpdateJob. A human-readable description for the job. This string must not contain more than 500 characters.|
|» httpTarget|body|[HttpTarget](#schemahttptarget)|false|HTTP target.|
|» legacyAppEngineCron|body|boolean|false|Immutable. This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the job will be considered a legacy job. Note that App Engine Cron jobs have fewer features than Cloud Scheduler jobs, e.g., are only limited to App Engine targets.|
|» name|body|string|false|Optionally caller-specified in CreateJob, after which it becomes output only. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the job's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters.|
|» pubsubTarget|body|[PubsubTarget](#schemapubsubtarget)|false|Pub/Sub target.|
|» retryConfig|body|[RetryConfig](#schemaretryconfig)|false|Settings that determine the retry behavior.|
|» schedule|body|string|false|Required, except when used with UpdateJob. Describes the schedule on which the job will be executed. The schedule can be either of the following types: * [Crontab](https://en.wikipedia.org/wiki/Cron#Overview) * English-like [schedule](https://cloud.google.com/scheduler/docs/configuring/cron-job-schedules) As a general rule, execution `n + 1` of a job will not begin until execution `n` has finished. Cloud Scheduler will never allow two simultaneously outstanding executions. For example, this implies that if the `n+1`th execution is scheduled to run at 16:00 but the `n`th execution takes until 16:15, the `n+1`th execution will not start until `16:15`. A scheduled start time will be delayed if the previous execution has not ended when its scheduled time occurs. If retry_count > 0 and a job attempt fails, the job will be tried a total of retry_count times, with exponential backoff, until the next scheduled start time. If retry_count is 0, a job attempt will not be retried if it fails. Instead the Cloud Scheduler system will wait for the next scheduled execution time. Setting retry_count to 0 does not prevent failed jobs from running according to schedule after the failure.|
|» timeZone|body|string|false|Specifies the time zone to be used in interpreting schedule. The value of this field must be a time zone name from the [tz database](http://en.wikipedia.org/wiki/Tz_database). Note that some time zones include a provision for daylight savings time. The rules for daylight saving time are determined by the chosen tz. For UTC use the string "utc". If a time zone is not specified, the default will be in UTC (also known as GMT).|

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
  "appEngineHttpTarget": {
    "appEngineRouting": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    },
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "relativeUri": "string"
  },
  "attemptDeadline": "string",
  "description": "string",
  "httpTarget": {
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uri": "string"
  },
  "lastAttemptTime": "string",
  "legacyAppEngineCron": true,
  "name": "string",
  "pubsubTarget": {
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "data": "string",
    "topicName": "string"
  },
  "retryConfig": {
    "maxBackoffDuration": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoffDuration": "string",
    "retryCount": 0
  },
  "schedule": "string",
  "scheduleTime": "string",
  "state": "STATE_UNSPECIFIED",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "timeZone": "string",
  "userUpdateTime": "string"
}
```

<h3 id="cloudschedulerprojectslocationsjobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AppEngineHttpTarget">AppEngineHttpTarget</h2>
<!-- backwards compatibility -->
<a id="schemaappenginehttptarget"></a>
<a id="schema_AppEngineHttpTarget"></a>
<a id="tocSappenginehttptarget"></a>
<a id="tocsappenginehttptarget"></a>

```json
{
  "appEngineRouting": {
    "host": "string",
    "instance": "string",
    "service": "string",
    "version": "string"
  },
  "body": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "httpMethod": "HTTP_METHOD_UNSPECIFIED",
  "relativeUri": "string"
}
```

App Engine target. The job will be pushed to a job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. Error 503 is considered an App Engine system error instead of an application error. Requests returning error 503 will be retried regardless of retry configuration and not counted against retry counts. Any other response code, or a failure to receive a response before the deadline, constitutes a failed attempt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appEngineRouting|[AppEngineRouting](#schemaappenginerouting)|false|none|App Engine Routing setting for the job.|
|body|string(byte)|false|none|Body. HTTP request body. A request body is allowed only if the HTTP method is POST or PUT. It will result in invalid argument error to set a body on a job with an incompatible HttpMethod.|
|headers|object|false|none|HTTP request headers. This map contains the header field names and values. Headers can be set when the job is created. Cloud Scheduler sets some headers to default values: * `User-Agent`: By default, this header is `"AppEngine-Google; (+http://code.google.com/appengine)"`. This header can be modified, but Cloud Scheduler will append `"AppEngine-Google; (+http://code.google.com/appengine)"` to the modified `User-Agent`. * `X-CloudScheduler`: This header will be set to true. * `X-CloudScheduler-JobName`: This header will contain the job name. * `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339. If the job has a body and the following headers are not set by the user, Cloud Scheduler sets default values: * `Content-Type`: This will be set to `"application/octet-stream"`. You can override this default by explicitly setting `Content-Type` to a particular media type when creating the job. For example, you can set `Content-Type` to `"application/json"`. The headers below are output only. They cannot be set or overridden: * `Content-Length`: This is computed by Cloud Scheduler. * `X-Google-*`: For Google internal use only. * `X-AppEngine-*`: For Google internal use only. In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler.|
|httpMethod|string|false|none|The HTTP method to use for the request. PATCH and OPTIONS are not permitted.|
|relativeUri|string|false|none|The relative URI. The relative URL must begin with "/" and must be a valid HTTP relative URL. It can contain a path, query string arguments, and `#` fragments. If the relative URL is empty, then the root path "/" will be used. No spaces are allowed, and the maximum length allowed is 2083 characters.|

#### Enumerated Values

|Property|Value|
|---|---|
|httpMethod|HTTP_METHOD_UNSPECIFIED|
|httpMethod|POST|
|httpMethod|GET|
|httpMethod|HEAD|
|httpMethod|PUT|
|httpMethod|DELETE|
|httpMethod|PATCH|
|httpMethod|OPTIONS|

<h2 id="tocS_AppEngineRouting">AppEngineRouting</h2>
<!-- backwards compatibility -->
<a id="schemaappenginerouting"></a>
<a id="schema_AppEngineRouting"></a>
<a id="tocSappenginerouting"></a>
<a id="tocsappenginerouting"></a>

```json
{
  "host": "string",
  "instance": "string",
  "service": "string",
  "version": "string"
}
```

App Engine Routing. For more information about services, versions, and instances see [An Overview of App Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine), [Microservices Architecture on Google App Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine), [App Engine Standard request routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed), and [App Engine Flex request routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|false|none|Output only. The host that the job is sent to. For more information about how App Engine requests are routed, see [here](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed). The host is constructed as: * `host = [application_domain_name]` `\| [service] + '.' + [application_domain_name]` `\| [version] + '.' + [application_domain_name]` `\| [version_dot_service]+ '.' + [application_domain_name]` `\| [instance] + '.' + [application_domain_name]` `\| [instance_dot_service] + '.' + [application_domain_name]` `\| [instance_dot_version] + '.' + [application_domain_name]` `\| [instance_dot_version_dot_service] + '.' + [application_domain_name]` * `application_domain_name` = The domain name of the app, for example .appspot.com, which is associated with the job's project ID. * `service =` service * `version =` version * `version_dot_service =` version `+ '.' +` service * `instance =` instance * `instance_dot_service =` instance `+ '.' +` service * `instance_dot_version =` instance `+ '.' +` version * `instance_dot_version_dot_service =` instance `+ '.' +` version `+ '.' +` service If service is empty, then the job will be sent to the service which is the default service when the job is attempted. If version is empty, then the job will be sent to the version which is the default version when the job is attempted. If instance is empty, then the job will be sent to an instance which is available when the job is attempted. If service, version, or instance is invalid, then the job will be sent to the default version of the default service when the job is attempted.|
|instance|string|false|none|App instance. By default, the job is sent to an instance which is available when the job is attempted. Requests can only be sent to a specific instance if [manual scaling is used in App Engine Standard](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine?#scaling_types_and_instance_classes). App Engine Flex does not support instances. For more information, see [App Engine Standard request routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed) and [App Engine Flex request routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).|
|service|string|false|none|App service. By default, the job is sent to the service which is the default service when the job is attempted.|
|version|string|false|none|App version. By default, the job is sent to the version which is the default version when the job is attempted.|

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

<h2 id="tocS_HttpTarget">HttpTarget</h2>
<!-- backwards compatibility -->
<a id="schemahttptarget"></a>
<a id="schema_HttpTarget"></a>
<a id="tocShttptarget"></a>
<a id="tocshttptarget"></a>

```json
{
  "body": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "httpMethod": "HTTP_METHOD_UNSPECIFIED",
  "oauthToken": {
    "scope": "string",
    "serviceAccountEmail": "string"
  },
  "oidcToken": {
    "audience": "string",
    "serviceAccountEmail": "string"
  },
  "uri": "string"
}
```

Http target. The job will be pushed to the job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. A failure to receive a response constitutes a failed execution. For a redirected request, the response returned by the redirected request is considered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string(byte)|false|none|HTTP request body. A request body is allowed only if the HTTP method is POST, PUT, or PATCH. It is an error to set body on a job with an incompatible HttpMethod.|
|headers|object|false|none|HTTP request headers. This map contains the header field names and values. The user can specify HTTP request headers to send with the job's HTTP request. Repeated headers are not supported, but a header value can contain commas. The following headers represent a subset of the headers that accompany the job's HTTP request. Some HTTP request headers are ignored or replaced. A partial list of headers that are ignored or replaced is below: * Host: This will be computed by Cloud Scheduler and derived from uri. * `Content-Length`: This will be computed by Cloud Scheduler. * `User-Agent`: This will be set to `"Google-Cloud-Scheduler"`. * `X-Google-*`: Google internal use only. * `X-AppEngine-*`: Google internal use only. * `X-CloudScheduler`: This header will be set to true. * `X-CloudScheduler-JobName`: This header will contain the job name. * `X-CloudScheduler-ScheduleTime`: For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339. If the job has a body and the following headers are not set by the user, Cloud Scheduler sets default values: * `Content-Type`: This will be set to `"application/octet-stream"`. You can override this default by explicitly setting `Content-Type` to a particular media type when creating the job. For example, you can set `Content-Type` to `"application/json"`. The total size of headers must be less than 80KB.|
|httpMethod|string|false|none|Which HTTP method to use for the request.|
|oauthToken|[OAuthToken](#schemaoauthtoken)|false|none|If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request. This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.|
|oidcToken|[OidcToken](#schemaoidctoken)|false|none|If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request. This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.|
|uri|string|false|none|Required. The full URI path that the request will be sent to. This string must begin with either "http://" or "https://". Some examples of valid values for uri are: `http://acme.com` and `https://acme.com/sales:8080`. Cloud Scheduler will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding.|

#### Enumerated Values

|Property|Value|
|---|---|
|httpMethod|HTTP_METHOD_UNSPECIFIED|
|httpMethod|POST|
|httpMethod|GET|
|httpMethod|HEAD|
|httpMethod|PUT|
|httpMethod|DELETE|
|httpMethod|PATCH|
|httpMethod|OPTIONS|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "appEngineHttpTarget": {
    "appEngineRouting": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    },
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "relativeUri": "string"
  },
  "attemptDeadline": "string",
  "description": "string",
  "httpTarget": {
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uri": "string"
  },
  "lastAttemptTime": "string",
  "legacyAppEngineCron": true,
  "name": "string",
  "pubsubTarget": {
    "attributes": {
      "property1": "string",
      "property2": "string"
    },
    "data": "string",
    "topicName": "string"
  },
  "retryConfig": {
    "maxBackoffDuration": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoffDuration": "string",
    "retryCount": 0
  },
  "schedule": "string",
  "scheduleTime": "string",
  "state": "STATE_UNSPECIFIED",
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "timeZone": "string",
  "userUpdateTime": "string"
}
```

Configuration for a job. The maximum allowed size for a job is 1MB.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appEngineHttpTarget|[AppEngineHttpTarget](#schemaappenginehttptarget)|false|none|App Engine HTTP target.|
|attemptDeadline|string(google-duration)|false|none|The deadline for job attempts. If the request handler does not respond by this deadline then the request is cancelled and the attempt is marked as a `DEADLINE_EXCEEDED` failure. The failed attempt can be viewed in execution logs. Cloud Scheduler will retry the job according to the RetryConfig. The default and the allowed values depend on the type of target: * For HTTP targets, the default is 3 minutes. The deadline must be in the interval [15 seconds, 30 minutes]. * For App Engine HTTP targets, 0 indicates that the request has the default deadline. The default deadline depends on the scaling type of the service: 10 minutes for standard apps with automatic scaling, 24 hours for standard apps with manual and basic scaling, and 60 minutes for flex apps. If the request deadline is set, it must be in the interval [15 seconds, 24 hours 15 seconds]. * For Pub/Sub targets, this field is ignored.|
|description|string|false|none|Optionally caller-specified in CreateJob or UpdateJob. A human-readable description for the job. This string must not contain more than 500 characters.|
|httpTarget|[HttpTarget](#schemahttptarget)|false|none|HTTP target.|
|lastAttemptTime|string(google-datetime)|false|read-only|Output only. The time the last job attempt started.|
|legacyAppEngineCron|boolean|false|none|Immutable. This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the job will be considered a legacy job. Note that App Engine Cron jobs have fewer features than Cloud Scheduler jobs, e.g., are only limited to App Engine targets.|
|name|string|false|none|Optionally caller-specified in CreateJob, after which it becomes output only. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the job's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters.|
|pubsubTarget|[PubsubTarget](#schemapubsubtarget)|false|none|Pub/Sub target.|
|retryConfig|[RetryConfig](#schemaretryconfig)|false|none|Settings that determine the retry behavior.|
|schedule|string|false|none|Required, except when used with UpdateJob. Describes the schedule on which the job will be executed. The schedule can be either of the following types: * [Crontab](https://en.wikipedia.org/wiki/Cron#Overview) * English-like [schedule](https://cloud.google.com/scheduler/docs/configuring/cron-job-schedules) As a general rule, execution `n + 1` of a job will not begin until execution `n` has finished. Cloud Scheduler will never allow two simultaneously outstanding executions. For example, this implies that if the `n+1`th execution is scheduled to run at 16:00 but the `n`th execution takes until 16:15, the `n+1`th execution will not start until `16:15`. A scheduled start time will be delayed if the previous execution has not ended when its scheduled time occurs. If retry_count > 0 and a job attempt fails, the job will be tried a total of retry_count times, with exponential backoff, until the next scheduled start time. If retry_count is 0, a job attempt will not be retried if it fails. Instead the Cloud Scheduler system will wait for the next scheduled execution time. Setting retry_count to 0 does not prevent failed jobs from running according to schedule after the failure.|
|scheduleTime|string(google-datetime)|false|read-only|Output only. The next time the job is scheduled. Note that this may be a retry of a previously failed attempt or the next execution time according to the schedule.|
|state|string|false|read-only|Output only. State of the job.|
|status|[Status](#schemastatus)|false|none|Output only. The response from the target for the last attempted execution.|
|timeZone|string|false|none|Specifies the time zone to be used in interpreting schedule. The value of this field must be a time zone name from the [tz database](http://en.wikipedia.org/wiki/Tz_database). Note that some time zones include a provision for daylight savings time. The rules for daylight saving time are determined by the chosen tz. For UTC use the string "utc". If a time zone is not specified, the default will be in UTC (also known as GMT).|
|userUpdateTime|string(google-datetime)|false|read-only|Output only. The creation time of the job.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ENABLED|
|state|PAUSED|
|state|DISABLED|
|state|UPDATE_FAILED|

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
      "appEngineHttpTarget": {
        "appEngineRouting": {
          "host": "string",
          "instance": "string",
          "service": "string",
          "version": "string"
        },
        "body": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "httpMethod": "HTTP_METHOD_UNSPECIFIED",
        "relativeUri": "string"
      },
      "attemptDeadline": "string",
      "description": "string",
      "httpTarget": {
        "body": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "httpMethod": "HTTP_METHOD_UNSPECIFIED",
        "oauthToken": {
          "scope": "string",
          "serviceAccountEmail": "string"
        },
        "oidcToken": {
          "audience": "string",
          "serviceAccountEmail": "string"
        },
        "uri": "string"
      },
      "lastAttemptTime": "string",
      "legacyAppEngineCron": true,
      "name": "string",
      "pubsubTarget": {
        "attributes": {
          "property1": "string",
          "property2": "string"
        },
        "data": "string",
        "topicName": "string"
      },
      "retryConfig": {
        "maxBackoffDuration": "string",
        "maxDoublings": 0,
        "maxRetryDuration": "string",
        "minBackoffDuration": "string",
        "retryCount": 0
      },
      "schedule": "string",
      "scheduleTime": "string",
      "state": "STATE_UNSPECIFIED",
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "timeZone": "string",
      "userUpdateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for listing jobs using ListJobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[[Job](#schemajob)]|false|none|The list of jobs.|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass this value in the page_token field in the subsequent call to ListJobs to retrieve the next page of results. If this is empty it indicates that there are no more results through which to paginate. The page token is valid for only 2 hours.|

<h2 id="tocS_ListLocationsResponse">ListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationsresponse"></a>
<a id="schema_ListLocationsResponse"></a>
<a id="tocSlistlocationsresponse"></a>
<a id="tocslistlocationsresponse"></a>

```json
{
  "locations": [
    {
      "displayName": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "locationId": "string",
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response message for Locations.ListLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[Location](#schemalocation)]|false|none|A list of locations that matches the specified filter in the request.|
|nextPageToken|string|false|none|The standard List next-page token.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "displayName": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "locationId": "string",
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string"
}
```

A resource that represents a Google Cloud location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The friendly name for this location, typically a nearby city name. For example, "Tokyo".|
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}|
|locationId|string|false|none|The canonical id for this location. For example: `"us-east1"`.|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`|

<h2 id="tocS_OAuthToken">OAuthToken</h2>
<!-- backwards compatibility -->
<a id="schemaoauthtoken"></a>
<a id="schema_OAuthToken"></a>
<a id="tocSoauthtoken"></a>
<a id="tocsoauthtoken"></a>

```json
{
  "scope": "string",
  "serviceAccountEmail": "string"
}
```

Contains information needed for generating an [OAuth token](https://developers.google.com/identity/protocols/OAuth2). This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scope|string|false|none|OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.|
|serviceAccountEmail|string|false|none|[Service account email](https://cloud.google.com/iam/docs/service-accounts) to be used for generating OAuth token. The service account must be within the same project as the job. The caller must have iam.serviceAccounts.actAs permission for the service account.|

<h2 id="tocS_OidcToken">OidcToken</h2>
<!-- backwards compatibility -->
<a id="schemaoidctoken"></a>
<a id="schema_OidcToken"></a>
<a id="tocSoidctoken"></a>
<a id="tocsoidctoken"></a>

```json
{
  "audience": "string",
  "serviceAccountEmail": "string"
}
```

Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect). This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience|string|false|none|Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.|
|serviceAccountEmail|string|false|none|[Service account email](https://cloud.google.com/iam/docs/service-accounts) to be used for generating OIDC token. The service account must be within the same project as the job. The caller must have iam.serviceAccounts.actAs permission for the service account.|

<h2 id="tocS_PauseJobRequest">PauseJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemapausejobrequest"></a>
<a id="schema_PauseJobRequest"></a>
<a id="tocSpausejobrequest"></a>
<a id="tocspausejobrequest"></a>

```json
{}
```

Request message for PauseJob.

<h2 id="tocS_PubsubMessage">PubsubMessage</h2>
<!-- backwards compatibility -->
<a id="schemapubsubmessage"></a>
<a id="schema_PubsubMessage"></a>
<a id="tocSpubsubmessage"></a>
<a id="tocspubsubmessage"></a>

```json
{
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "data": "string",
  "messageId": "string",
  "orderingKey": "string",
  "publishTime": "string"
}
```

A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Optional. Attributes for this message. If this field is empty, the message must contain non-empty data. This can be used to filter messages on the subscription.|
|data|string(byte)|false|none|Optional. The message data field. If this field is empty, the message must contain at least one attribute.|
|messageId|string|false|none|ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a `PubsubMessage` via a `Pull` call or a push delivery. It must not be populated by the publisher in a `Publish` call.|
|orderingKey|string|false|none|Optional. If non-empty, identifies related messages for which publish order should be respected. If a `Subscription` has `enable_message_ordering` set to `true`, messages published with the same non-empty `ordering_key` value will be delivered to subscribers in the order in which they are received by the Pub/Sub system. All `PubsubMessage`s published in a given `PublishRequest` must specify the same `ordering_key` value. For more information, see [ordering messages](https://cloud.google.com/pubsub/docs/ordering).|
|publishTime|string(google-datetime)|false|none|The time at which the message was published, populated by the server when it receives the `Publish` call. It must not be populated by the publisher in a `Publish` call.|

<h2 id="tocS_PubsubTarget">PubsubTarget</h2>
<!-- backwards compatibility -->
<a id="schemapubsubtarget"></a>
<a id="schema_PubsubTarget"></a>
<a id="tocSpubsubtarget"></a>
<a id="tocspubsubtarget"></a>

```json
{
  "attributes": {
    "property1": "string",
    "property2": "string"
  },
  "data": "string",
  "topicName": "string"
}
```

Pub/Sub target. The job will be delivered by publishing a message to the given Pub/Sub topic.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Attributes for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.|
|data|string(byte)|false|none|The message payload for PubsubMessage. Pubsub message must contain either non-empty data, or at least one attribute.|
|topicName|string|false|none|Required. The name of the Cloud Pub/Sub topic to which messages will be published when a job is delivered. The topic name must be in the same format as required by Pub/Sub's [PublishRequest.name](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#publishrequest), for example `projects/PROJECT_ID/topics/TOPIC_ID`. The topic must be in the same project as the Cloud Scheduler job.|

<h2 id="tocS_ResumeJobRequest">ResumeJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresumejobrequest"></a>
<a id="schema_ResumeJobRequest"></a>
<a id="tocSresumejobrequest"></a>
<a id="tocsresumejobrequest"></a>

```json
{}
```

Request message for ResumeJob.

<h2 id="tocS_RetryConfig">RetryConfig</h2>
<!-- backwards compatibility -->
<a id="schemaretryconfig"></a>
<a id="schema_RetryConfig"></a>
<a id="tocSretryconfig"></a>
<a id="tocsretryconfig"></a>

```json
{
  "maxBackoffDuration": "string",
  "maxDoublings": 0,
  "maxRetryDuration": "string",
  "minBackoffDuration": "string",
  "retryCount": 0
}
```

Settings that determine the retry behavior. By default, if a job does not complete successfully (meaning that an acknowledgement is not received from the handler, then it will be retried with exponential backoff according to the settings in RetryConfig.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxBackoffDuration|string(google-duration)|false|none|The maximum amount of time to wait before retrying a job after it fails. The default value of this field is 1 hour.|
|maxDoublings|integer(int32)|false|none|The time between retries will double `max_doublings` times. A job's retry interval starts at min_backoff_duration, then doubles `max_doublings` times, then increases linearly, and finally retries at intervals of max_backoff_duration up to retry_count times. For example, if min_backoff_duration is 10s, max_backoff_duration is 300s, and `max_doublings` is 3, then the job will first be retried in 10s. The retry interval will double three times, and then increase linearly by 2^3 * 10s. Finally, the job will retry at intervals of max_backoff_duration until the job has been attempted retry_count times. Thus, the requests will retry at 10s, 20s, 40s, 80s, 160s, 240s, 300s, 300s, .... The default value of this field is 5.|
|maxRetryDuration|string(google-duration)|false|none|The time limit for retrying a failed job, measured from time when an execution was first attempted. If specified with retry_count, the job will be retried until both limits are reached. The default value for max_retry_duration is zero, which means retry duration is unlimited.|
|minBackoffDuration|string(google-duration)|false|none|The minimum amount of time to wait before retrying a job after it fails. The default value of this field is 5 seconds.|
|retryCount|integer(int32)|false|none|The number of attempts that the system will make to run a job using the exponential backoff procedure described by max_doublings. The default value of retry_count is zero. If retry_count is 0, a job attempt will not be retried if it fails. Instead the Cloud Scheduler system will wait for the next scheduled execution time. Setting retry_count to 0 does not prevent failed jobs from running according to schedule after the failure. If retry_count is set to a non-zero number then Cloud Scheduler will retry failed attempts, using exponential backoff, retry_count times, or until the next scheduled execution time, whichever comes first. Values greater than 5 and negative values are not allowed.|

<h2 id="tocS_RunJobRequest">RunJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemarunjobrequest"></a>
<a id="schema_RunJobRequest"></a>
<a id="tocSrunjobrequest"></a>
<a id="tocsrunjobrequest"></a>

```json
{
  "legacyAppEngineCron": true
}
```

Request message for forcing a job to run now using RunJob.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legacyAppEngineCron|boolean|false|none|This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the job in the __cron queue with the corresponding name will be forced to run instead.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

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
