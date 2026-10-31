<h1 id="cloud-tasks-api">Cloud Tasks API v2beta3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages the execution of large numbers of distributed requests.

Base URLs:

* <a href="https://cloudtasks.googleapis.com/">https://cloudtasks.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/tasks/">External documentation</a>

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

<h1 id="cloud-tasks-api-projects">projects</h1>

## cloudtasks.projects.locations.queues.tasks.get

<a id="opIdcloudtasks.projects.locations.queues.tasks.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta3/{name}`

Gets a task.

<h3 id="cloudtasksprojectslocationsqueuestasksget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`|
|responseView|query|string|false|The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource.|
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
|responseView|VIEW_UNSPECIFIED|
|responseView|BASIC|
|responseView|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "appEngineHttpRequest": {
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
  "createTime": "string",
  "dispatchCount": 0,
  "dispatchDeadline": "string",
  "firstAttempt": {
    "dispatchTime": "string",
    "responseStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "responseTime": "string",
    "scheduleTime": "string"
  },
  "httpRequest": {
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
    "url": "string"
  },
  "lastAttempt": {
    "dispatchTime": "string",
    "responseStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "responseTime": "string",
    "scheduleTime": "string"
  },
  "name": "string",
  "pullMessage": {
    "payload": "string",
    "tag": "string"
  },
  "responseCount": 0,
  "scheduleTime": "string",
  "view": "VIEW_UNSPECIFIED"
}
```

<h3 id="cloudtasksprojectslocationsqueuestasksget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Task](#schematask)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudtasks.projects.locations.queues.tasks.delete

<a id="opIdcloudtasks.projects.locations.queues.tasks.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2beta3/{name}`

Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.

<h3 id="cloudtasksprojectslocationsqueuestasksdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`|
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

<h3 id="cloudtasksprojectslocationsqueuestasksdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudtasks.projects.locations.queues.patch

<a id="opIdcloudtasks.projects.locations.queues.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appEngineHttpQueue": {
      "appEngineRoutingOverride": {
        "host": "string",
        "instance": "string",
        "service": "string",
        "version": "string"
      }
    },
    "httpTarget": {
      "headerOverrides": [
        {
          "header": {
            "key": "string",
            "value": "string"
          }
        }
      ],
      "httpMethod": "HTTP_METHOD_UNSPECIFIED",
      "oauthToken": {
        "scope": "string",
        "serviceAccountEmail": "string"
      },
      "oidcToken": {
        "audience": "string",
        "serviceAccountEmail": "string"
      },
      "uriOverride": {
        "host": "string",
        "pathOverride": {
          "path": "string"
        },
        "port": "string",
        "queryOverride": {
          "queryParams": "string"
        },
        "scheme": "SCHEME_UNSPECIFIED",
        "uriOverrideEnforceMode": "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
      }
    },
    "name": "string",
    "purgeTime": "string",
    "rateLimits": {
      "maxBurstSize": 0,
      "maxConcurrentDispatches": 0,
      "maxDispatchesPerSecond": 0
    },
    "retryConfig": {
      "maxAttempts": 0,
      "maxBackoff": "string",
      "maxDoublings": 0,
      "maxRetryDuration": "string",
      "minBackoff": "string"
    },
    "stackdriverLoggingConfig": {
      "samplingRatio": 0
    },
    "state": "STATE_UNSPECIFIED",
    "taskTtl": "string",
    "tombstoneTtl": "string",
    "type": "TYPE_UNSPECIFIED"
  }'
```

`PATCH /v2beta3/{name}`

Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

> Body parameter

```json
{
  "appEngineHttpQueue": {
    "appEngineRoutingOverride": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    }
  },
  "httpTarget": {
    "headerOverrides": [
      {
        "header": {
          "key": "string",
          "value": "string"
        }
      }
    ],
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uriOverride": {
      "host": "string",
      "pathOverride": {
        "path": "string"
      },
      "port": "string",
      "queryOverride": {
        "queryParams": "string"
      },
      "scheme": "SCHEME_UNSPECIFIED",
      "uriOverrideEnforceMode": "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
    }
  },
  "name": "string",
  "purgeTime": "string",
  "rateLimits": {
    "maxBurstSize": 0,
    "maxConcurrentDispatches": 0,
    "maxDispatchesPerSecond": 0
  },
  "retryConfig": {
    "maxAttempts": 0,
    "maxBackoff": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoff": "string"
  },
  "stackdriverLoggingConfig": {
    "samplingRatio": 0
  },
  "state": "STATE_UNSPECIFIED",
  "taskTtl": "string",
  "tombstoneTtl": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="cloudtasksprojectslocationsqueuespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Caller-specified and required in CreateQueue, after which it becomes output only. The queue name. The queue name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID` * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the queue's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters.|
|updateMask|query|string|false|A mask used to specify which fields of the queue are being updated. If empty, then all fields will be updated.|
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
|body|body|[Queue](#schemaqueue)|false|none|
|» appEngineHttpQueue|body|[AppEngineHttpQueue](#schemaappenginehttpqueue)|false|AppEngineHttpQueue settings apply only to App Engine tasks in this queue. Http tasks are not affected by this proto.|
|» httpTarget|body|[HttpTarget](#schemahttptarget)|false|Modifies HTTP target for HTTP tasks.|
|» name|body|string|false|Caller-specified and required in CreateQueue, after which it becomes output only. The queue name. The queue name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID` * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the queue's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters.|
|» purgeTime|body|string(google-datetime)|false|Output only. The last time this queue was purged. All tasks that were created before this time were purged. A queue can be purged using PurgeQueue, the [App Engine Task Queue SDK, or the Cloud Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue). Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been purged.|
|» rateLimits|body|[RateLimits](#schemaratelimits)|false|Rate limits for task dispatches. rate_limits and retry_config are related because they both control task attempts. However they control task attempts in different ways: * rate_limits controls the total rate of dispatches from a queue (i.e. all traffic dispatched from the queue, regardless of whether the dispatch is from a first attempt or a retry). * retry_config controls what happens to particular a task after its first attempt fails. That is, retry_config controls task retries (the second attempt, third attempt, etc). The queue's actual dispatch rate is the result of: * Number of tasks in the queue * User-specified throttling: rate_limits, retry_config, and the queue's state. * System throttling due to `429` (Too Many Requests) or `503` (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic spikes.|
|» retryConfig|body|[RetryConfig](#schemaretryconfig)|false|Settings that determine the retry behavior. * For tasks created using Cloud Tasks: the queue-level retry settings apply to all tasks in the queue that were created using Cloud Tasks. Retry settings cannot be set on individual tasks. * For tasks created using the App Engine SDK: the queue-level retry settings apply to all tasks in the queue which do not have retry settings explicitly set on the task and were created by the App Engine SDK. See [App Engine documentation](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks).|
|» stackdriverLoggingConfig|body|[StackdriverLoggingConfig](#schemastackdriverloggingconfig)|false|Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/). If this field is unset, then no logs are written.|
|» state|body|string|false|Output only. The state of the queue. `state` can only be changed by called PauseQueue, ResumeQueue, or uploading [queue.yaml/xml](https://cloud.google.com/appengine/docs/python/config/queueref). UpdateQueue cannot be used to change `state`.|
|» taskTtl|body|string(google-duration)|false|The maximum amount of time that a task will be retained in this queue. After a task has lived for `task_ttl`, the task will be deleted regardless of whether it was dispatched or not. The minimum value is 10 days. The maximum value is 10 years. The value must be given as a string that indicates the length of time (in seconds) followed by `s` (for "seconds"). For more information on the format, see the documentation for [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration). Queues created by Cloud Tasks have a default `task_ttl` of 31 days. . Queues created by queue.yaml/xml have a fixed `task_ttl` of the maximum duration, because there is a [storage quota](https://cloud.google.com/appengine/quotas#Task_Queue) for these queues.|
|» tombstoneTtl|body|string(google-duration)|false|The task tombstone time to live (TTL). After a task is deleted or executed, the task's tombstone is retained for the length of time specified by `tombstone_ttl`. The tombstone is used by task de-duplication; another task with the same name can't be created until the tombstone has expired. For more information about task de-duplication, see the documentation for CreateTaskRequest. The minimum value is 1 hour. The maximum value is 9 days. The value must be given as a string that indicates the length of time (in seconds) followed by `s` (for "seconds"). For more information on the format, see the documentation for [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration). Queues created by Cloud Tasks have a default `tombstone_ttl` of 1 hour.|
|» type|body|string|false|Immutable. The type of a queue (push or pull). `Queue.type` is an immutable property of the queue that is set at the queue creation time. When left unspecified, the default value of `PUSH` is selected.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|RUNNING|
|» state|PAUSED|
|» state|DISABLED|
|» type|TYPE_UNSPECIFIED|
|» type|PULL|
|» type|PUSH|

> Example responses

> 200 Response

```json
{
  "appEngineHttpQueue": {
    "appEngineRoutingOverride": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    }
  },
  "httpTarget": {
    "headerOverrides": [
      {
        "header": {
          "key": "string",
          "value": "string"
        }
      }
    ],
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uriOverride": {
      "host": "string",
      "pathOverride": {
        "path": "string"
      },
      "port": "string",
      "queryOverride": {
        "queryParams": "string"
      },
      "scheme": "SCHEME_UNSPECIFIED",
      "uriOverrideEnforceMode": "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
    }
  },
  "name": "string",
  "purgeTime": "string",
  "rateLimits": {
    "maxBurstSize": 0,
    "maxConcurrentDispatches": 0,
    "maxDispatchesPerSecond": 0
  },
  "retryConfig": {
    "maxAttempts": 0,
    "maxBackoff": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoff": "string"
  },
  "stackdriverLoggingConfig": {
    "samplingRatio": 0
  },
  "state": "STATE_UNSPECIFIED",
  "stats": {
    "concurrentDispatchesCount": "string",
    "effectiveExecutionRate": 0,
    "executedLastMinuteCount": "string",
    "oldestEstimatedArrivalTime": "string",
    "tasksCount": "string"
  },
  "taskTtl": "string",
  "tombstoneTtl": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="cloudtasksprojectslocationsqueuespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Queue](#schemaqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudtasks.projects.locations.list

<a id="opIdcloudtasks.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta3/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="cloudtasksprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="cloudtasksprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudtasks.projects.locations.queues.pause

<a id="opIdcloudtasks.projects.locations.queues.pause"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string:pause \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2beta3/{name}:pause`

Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.

> Body parameter

```json
{}
```

<h3 id="cloudtasksprojectslocationsqueuespause-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`|
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
|body|body|[PauseQueueRequest](#schemapausequeuerequest)|false|none|

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
  "appEngineHttpQueue": {
    "appEngineRoutingOverride": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    }
  },
  "httpTarget": {
    "headerOverrides": [
      {
        "header": {
          "key": "string",
          "value": "string"
        }
      }
    ],
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uriOverride": {
      "host": "string",
      "pathOverride": {
        "path": "string"
      },
      "port": "string",
      "queryOverride": {
        "queryParams": "string"
      },
      "scheme": "SCHEME_UNSPECIFIED",
      "uriOverrideEnforceMode": "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
    }
  },
  "name": "string",
  "purgeTime": "string",
  "rateLimits": {
    "maxBurstSize": 0,
    "maxConcurrentDispatches": 0,
    "maxDispatchesPerSecond": 0
  },
  "retryConfig": {
    "maxAttempts": 0,
    "maxBackoff": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoff": "string"
  },
  "stackdriverLoggingConfig": {
    "samplingRatio": 0
  },
  "state": "STATE_UNSPECIFIED",
  "stats": {
    "concurrentDispatchesCount": "string",
    "effectiveExecutionRate": 0,
    "executedLastMinuteCount": "string",
    "oldestEstimatedArrivalTime": "string",
    "tasksCount": "string"
  },
  "taskTtl": "string",
  "tombstoneTtl": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="cloudtasksprojectslocationsqueuespause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Queue](#schemaqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudtasks.projects.locations.queues.purge

<a id="opIdcloudtasks.projects.locations.queues.purge"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string:purge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2beta3/{name}:purge`

Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.

> Body parameter

```json
{}
```

<h3 id="cloudtasksprojectslocationsqueuespurge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`|
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
|body|body|[PurgeQueueRequest](#schemapurgequeuerequest)|false|none|

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
  "appEngineHttpQueue": {
    "appEngineRoutingOverride": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    }
  },
  "httpTarget": {
    "headerOverrides": [
      {
        "header": {
          "key": "string",
          "value": "string"
        }
      }
    ],
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uriOverride": {
      "host": "string",
      "pathOverride": {
        "path": "string"
      },
      "port": "string",
      "queryOverride": {
        "queryParams": "string"
      },
      "scheme": "SCHEME_UNSPECIFIED",
      "uriOverrideEnforceMode": "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
    }
  },
  "name": "string",
  "purgeTime": "string",
  "rateLimits": {
    "maxBurstSize": 0,
    "maxConcurrentDispatches": 0,
    "maxDispatchesPerSecond": 0
  },
  "retryConfig": {
    "maxAttempts": 0,
    "maxBackoff": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoff": "string"
  },
  "stackdriverLoggingConfig": {
    "samplingRatio": 0
  },
  "state": "STATE_UNSPECIFIED",
  "stats": {
    "concurrentDispatchesCount": "string",
    "effectiveExecutionRate": 0,
    "executedLastMinuteCount": "string",
    "oldestEstimatedArrivalTime": "string",
    "tasksCount": "string"
  },
  "taskTtl": "string",
  "tombstoneTtl": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="cloudtasksprojectslocationsqueuespurge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Queue](#schemaqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudtasks.projects.locations.queues.resume

<a id="opIdcloudtasks.projects.locations.queues.resume"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string:resume \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2beta3/{name}:resume`

Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).

> Body parameter

```json
{}
```

<h3 id="cloudtasksprojectslocationsqueuesresume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`|
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
|body|body|[ResumeQueueRequest](#schemaresumequeuerequest)|false|none|

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
  "appEngineHttpQueue": {
    "appEngineRoutingOverride": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    }
  },
  "httpTarget": {
    "headerOverrides": [
      {
        "header": {
          "key": "string",
          "value": "string"
        }
      }
    ],
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uriOverride": {
      "host": "string",
      "pathOverride": {
        "path": "string"
      },
      "port": "string",
      "queryOverride": {
        "queryParams": "string"
      },
      "scheme": "SCHEME_UNSPECIFIED",
      "uriOverrideEnforceMode": "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
    }
  },
  "name": "string",
  "purgeTime": "string",
  "rateLimits": {
    "maxBurstSize": 0,
    "maxConcurrentDispatches": 0,
    "maxDispatchesPerSecond": 0
  },
  "retryConfig": {
    "maxAttempts": 0,
    "maxBackoff": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoff": "string"
  },
  "stackdriverLoggingConfig": {
    "samplingRatio": 0
  },
  "state": "STATE_UNSPECIFIED",
  "stats": {
    "concurrentDispatchesCount": "string",
    "effectiveExecutionRate": 0,
    "executedLastMinuteCount": "string",
    "oldestEstimatedArrivalTime": "string",
    "tasksCount": "string"
  },
  "taskTtl": "string",
  "tombstoneTtl": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="cloudtasksprojectslocationsqueuesresume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Queue](#schemaqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudtasks.projects.locations.queues.tasks.run

<a id="opIdcloudtasks.projects.locations.queues.tasks.run"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string:run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "responseView": "VIEW_UNSPECIFIED"
  }'
```

`POST /v2beta3/{name}:run`

Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed.

> Body parameter

```json
{
  "responseView": "VIEW_UNSPECIFIED"
}
```

<h3 id="cloudtasksprojectslocationsqueuestasksrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`|
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
|body|body|[RunTaskRequest](#schemaruntaskrequest)|false|none|
|» responseView|body|string|false|The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» responseView|VIEW_UNSPECIFIED|
|» responseView|BASIC|
|» responseView|FULL|

> Example responses

> 200 Response

```json
{
  "appEngineHttpRequest": {
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
  "createTime": "string",
  "dispatchCount": 0,
  "dispatchDeadline": "string",
  "firstAttempt": {
    "dispatchTime": "string",
    "responseStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "responseTime": "string",
    "scheduleTime": "string"
  },
  "httpRequest": {
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
    "url": "string"
  },
  "lastAttempt": {
    "dispatchTime": "string",
    "responseStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "responseTime": "string",
    "scheduleTime": "string"
  },
  "name": "string",
  "pullMessage": {
    "payload": "string",
    "tag": "string"
  },
  "responseCount": 0,
  "scheduleTime": "string",
  "view": "VIEW_UNSPECIFIED"
}
```

<h3 id="cloudtasksprojectslocationsqueuestasksrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Task](#schematask)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudtasks.projects.locations.queues.list

<a id="opIdcloudtasks.projects.locations.queues.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string/queues \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta3/{parent}/queues`

Lists queues. Queues are returned in lexicographical order.

<h3 id="cloudtasksprojectslocationsqueueslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`|
|filter|query|string|false|`filter` can be used to specify a subset of queues. Any Queue field can be used as a filter and several operators as supported. For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as described in [Stackdriver's Advanced Logs Filters](https://cloud.google.com/logging/docs/view/advanced_filters). Sample filter "state: PAUSED". Note that using filters might cause fewer queues than the requested page_size to be returned.|
|pageSize|query|integer|false|Requested page size. The maximum page size is 9800. If unspecified, the page size will be the maximum. Fewer queues than requested might be returned, even if more queues exist; use the next_page_token in the response to determine if more queues exist.|
|pageToken|query|string|false|A token identifying the page of results to return. To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListQueues method. It is an error to switch the value of the filter while iterating through pages.|
|readMask|query|string|false|Optional. Read mask is used for a more granular control over what the API returns. If the mask is not present all fields will be returned except [Queue.stats]. [Queue.stats] will be returned only if it was explicitly specified in the mask.|
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
  "queues": [
    {
      "appEngineHttpQueue": {
        "appEngineRoutingOverride": {
          "host": "string",
          "instance": "string",
          "service": "string",
          "version": "string"
        }
      },
      "httpTarget": {
        "headerOverrides": [
          {
            "header": {
              "key": "string",
              "value": "string"
            }
          }
        ],
        "httpMethod": "HTTP_METHOD_UNSPECIFIED",
        "oauthToken": {
          "scope": "string",
          "serviceAccountEmail": "string"
        },
        "oidcToken": {
          "audience": "string",
          "serviceAccountEmail": "string"
        },
        "uriOverride": {
          "host": "string",
          "pathOverride": {
            "path": "string"
          },
          "port": "string",
          "queryOverride": {
            "queryParams": "string"
          },
          "scheme": "SCHEME_UNSPECIFIED",
          "uriOverrideEnforceMode": "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
        }
      },
      "name": "string",
      "purgeTime": "string",
      "rateLimits": {
        "maxBurstSize": 0,
        "maxConcurrentDispatches": 0,
        "maxDispatchesPerSecond": 0
      },
      "retryConfig": {
        "maxAttempts": 0,
        "maxBackoff": "string",
        "maxDoublings": 0,
        "maxRetryDuration": "string",
        "minBackoff": "string"
      },
      "stackdriverLoggingConfig": {
        "samplingRatio": 0
      },
      "state": "STATE_UNSPECIFIED",
      "stats": {
        "concurrentDispatchesCount": "string",
        "effectiveExecutionRate": 0,
        "executedLastMinuteCount": "string",
        "oldestEstimatedArrivalTime": "string",
        "tasksCount": "string"
      },
      "taskTtl": "string",
      "tombstoneTtl": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="cloudtasksprojectslocationsqueueslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListQueuesResponse](#schemalistqueuesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudtasks.projects.locations.queues.create

<a id="opIdcloudtasks.projects.locations.queues.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string/queues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "appEngineHttpQueue": {
      "appEngineRoutingOverride": {
        "host": "string",
        "instance": "string",
        "service": "string",
        "version": "string"
      }
    },
    "httpTarget": {
      "headerOverrides": [
        {
          "header": {
            "key": "string",
            "value": "string"
          }
        }
      ],
      "httpMethod": "HTTP_METHOD_UNSPECIFIED",
      "oauthToken": {
        "scope": "string",
        "serviceAccountEmail": "string"
      },
      "oidcToken": {
        "audience": "string",
        "serviceAccountEmail": "string"
      },
      "uriOverride": {
        "host": "string",
        "pathOverride": {
          "path": "string"
        },
        "port": "string",
        "queryOverride": {
          "queryParams": "string"
        },
        "scheme": "SCHEME_UNSPECIFIED",
        "uriOverrideEnforceMode": "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
      }
    },
    "name": "string",
    "purgeTime": "string",
    "rateLimits": {
      "maxBurstSize": 0,
      "maxConcurrentDispatches": 0,
      "maxDispatchesPerSecond": 0
    },
    "retryConfig": {
      "maxAttempts": 0,
      "maxBackoff": "string",
      "maxDoublings": 0,
      "maxRetryDuration": "string",
      "minBackoff": "string"
    },
    "stackdriverLoggingConfig": {
      "samplingRatio": 0
    },
    "state": "STATE_UNSPECIFIED",
    "taskTtl": "string",
    "tombstoneTtl": "string",
    "type": "TYPE_UNSPECIFIED"
  }'
```

`POST /v2beta3/{parent}/queues`

Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.

> Body parameter

```json
{
  "appEngineHttpQueue": {
    "appEngineRoutingOverride": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    }
  },
  "httpTarget": {
    "headerOverrides": [
      {
        "header": {
          "key": "string",
          "value": "string"
        }
      }
    ],
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uriOverride": {
      "host": "string",
      "pathOverride": {
        "path": "string"
      },
      "port": "string",
      "queryOverride": {
        "queryParams": "string"
      },
      "scheme": "SCHEME_UNSPECIFIED",
      "uriOverrideEnforceMode": "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
    }
  },
  "name": "string",
  "purgeTime": "string",
  "rateLimits": {
    "maxBurstSize": 0,
    "maxConcurrentDispatches": 0,
    "maxDispatchesPerSecond": 0
  },
  "retryConfig": {
    "maxAttempts": 0,
    "maxBackoff": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoff": "string"
  },
  "stackdriverLoggingConfig": {
    "samplingRatio": 0
  },
  "state": "STATE_UNSPECIFIED",
  "taskTtl": "string",
  "tombstoneTtl": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="cloudtasksprojectslocationsqueuescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The location name in which the queue will be created. For example: `projects/PROJECT_ID/locations/LOCATION_ID` The list of allowed locations can be obtained by calling Cloud Tasks' implementation of ListLocations.|
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
|body|body|[Queue](#schemaqueue)|false|none|
|» appEngineHttpQueue|body|[AppEngineHttpQueue](#schemaappenginehttpqueue)|false|AppEngineHttpQueue settings apply only to App Engine tasks in this queue. Http tasks are not affected by this proto.|
|» httpTarget|body|[HttpTarget](#schemahttptarget)|false|Modifies HTTP target for HTTP tasks.|
|» name|body|string|false|Caller-specified and required in CreateQueue, after which it becomes output only. The queue name. The queue name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID` * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the queue's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters.|
|» purgeTime|body|string(google-datetime)|false|Output only. The last time this queue was purged. All tasks that were created before this time were purged. A queue can be purged using PurgeQueue, the [App Engine Task Queue SDK, or the Cloud Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue). Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been purged.|
|» rateLimits|body|[RateLimits](#schemaratelimits)|false|Rate limits for task dispatches. rate_limits and retry_config are related because they both control task attempts. However they control task attempts in different ways: * rate_limits controls the total rate of dispatches from a queue (i.e. all traffic dispatched from the queue, regardless of whether the dispatch is from a first attempt or a retry). * retry_config controls what happens to particular a task after its first attempt fails. That is, retry_config controls task retries (the second attempt, third attempt, etc). The queue's actual dispatch rate is the result of: * Number of tasks in the queue * User-specified throttling: rate_limits, retry_config, and the queue's state. * System throttling due to `429` (Too Many Requests) or `503` (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic spikes.|
|» retryConfig|body|[RetryConfig](#schemaretryconfig)|false|Settings that determine the retry behavior. * For tasks created using Cloud Tasks: the queue-level retry settings apply to all tasks in the queue that were created using Cloud Tasks. Retry settings cannot be set on individual tasks. * For tasks created using the App Engine SDK: the queue-level retry settings apply to all tasks in the queue which do not have retry settings explicitly set on the task and were created by the App Engine SDK. See [App Engine documentation](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks).|
|» stackdriverLoggingConfig|body|[StackdriverLoggingConfig](#schemastackdriverloggingconfig)|false|Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/). If this field is unset, then no logs are written.|
|» state|body|string|false|Output only. The state of the queue. `state` can only be changed by called PauseQueue, ResumeQueue, or uploading [queue.yaml/xml](https://cloud.google.com/appengine/docs/python/config/queueref). UpdateQueue cannot be used to change `state`.|
|» taskTtl|body|string(google-duration)|false|The maximum amount of time that a task will be retained in this queue. After a task has lived for `task_ttl`, the task will be deleted regardless of whether it was dispatched or not. The minimum value is 10 days. The maximum value is 10 years. The value must be given as a string that indicates the length of time (in seconds) followed by `s` (for "seconds"). For more information on the format, see the documentation for [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration). Queues created by Cloud Tasks have a default `task_ttl` of 31 days. . Queues created by queue.yaml/xml have a fixed `task_ttl` of the maximum duration, because there is a [storage quota](https://cloud.google.com/appengine/quotas#Task_Queue) for these queues.|
|» tombstoneTtl|body|string(google-duration)|false|The task tombstone time to live (TTL). After a task is deleted or executed, the task's tombstone is retained for the length of time specified by `tombstone_ttl`. The tombstone is used by task de-duplication; another task with the same name can't be created until the tombstone has expired. For more information about task de-duplication, see the documentation for CreateTaskRequest. The minimum value is 1 hour. The maximum value is 9 days. The value must be given as a string that indicates the length of time (in seconds) followed by `s` (for "seconds"). For more information on the format, see the documentation for [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration). Queues created by Cloud Tasks have a default `tombstone_ttl` of 1 hour.|
|» type|body|string|false|Immutable. The type of a queue (push or pull). `Queue.type` is an immutable property of the queue that is set at the queue creation time. When left unspecified, the default value of `PUSH` is selected.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|RUNNING|
|» state|PAUSED|
|» state|DISABLED|
|» type|TYPE_UNSPECIFIED|
|» type|PULL|
|» type|PUSH|

> Example responses

> 200 Response

```json
{
  "appEngineHttpQueue": {
    "appEngineRoutingOverride": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    }
  },
  "httpTarget": {
    "headerOverrides": [
      {
        "header": {
          "key": "string",
          "value": "string"
        }
      }
    ],
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uriOverride": {
      "host": "string",
      "pathOverride": {
        "path": "string"
      },
      "port": "string",
      "queryOverride": {
        "queryParams": "string"
      },
      "scheme": "SCHEME_UNSPECIFIED",
      "uriOverrideEnforceMode": "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
    }
  },
  "name": "string",
  "purgeTime": "string",
  "rateLimits": {
    "maxBurstSize": 0,
    "maxConcurrentDispatches": 0,
    "maxDispatchesPerSecond": 0
  },
  "retryConfig": {
    "maxAttempts": 0,
    "maxBackoff": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoff": "string"
  },
  "stackdriverLoggingConfig": {
    "samplingRatio": 0
  },
  "state": "STATE_UNSPECIFIED",
  "stats": {
    "concurrentDispatchesCount": "string",
    "effectiveExecutionRate": 0,
    "executedLastMinuteCount": "string",
    "oldestEstimatedArrivalTime": "string",
    "tasksCount": "string"
  },
  "taskTtl": "string",
  "tombstoneTtl": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

<h3 id="cloudtasksprojectslocationsqueuescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Queue](#schemaqueue)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudtasks.projects.locations.queues.tasks.list

<a id="opIdcloudtasks.projects.locations.queues.tasks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string/tasks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta3/{parent}/tasks`

Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.

<h3 id="cloudtasksprojectslocationsqueuestaskslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`|
|pageSize|query|integer|false|Maximum page size. Fewer tasks than requested might be returned, even if more tasks exist; use next_page_token in the response to determine if more tasks exist. The maximum page size is 1000. If unspecified, the page size will be the maximum.|
|pageToken|query|string|false|A token identifying the page of results to return. To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListTasks method. The page token is valid for only 2 hours.|
|responseView|query|string|false|The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource.|
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
|responseView|VIEW_UNSPECIFIED|
|responseView|BASIC|
|responseView|FULL|
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
  "tasks": [
    {
      "appEngineHttpRequest": {
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
      "createTime": "string",
      "dispatchCount": 0,
      "dispatchDeadline": "string",
      "firstAttempt": {
        "dispatchTime": "string",
        "responseStatus": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        },
        "responseTime": "string",
        "scheduleTime": "string"
      },
      "httpRequest": {
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
        "url": "string"
      },
      "lastAttempt": {
        "dispatchTime": "string",
        "responseStatus": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        },
        "responseTime": "string",
        "scheduleTime": "string"
      },
      "name": "string",
      "pullMessage": {
        "payload": "string",
        "tag": "string"
      },
      "responseCount": 0,
      "scheduleTime": "string",
      "view": "VIEW_UNSPECIFIED"
    }
  ]
}
```

<h3 id="cloudtasksprojectslocationsqueuestaskslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTasksResponse](#schemalisttasksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudtasks.projects.locations.queues.tasks.create

<a id="opIdcloudtasks.projects.locations.queues.tasks.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string/tasks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "responseView": "VIEW_UNSPECIFIED",
    "task": {
      "appEngineHttpRequest": {
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
      "createTime": "string",
      "dispatchCount": 0,
      "dispatchDeadline": "string",
      "firstAttempt": {
        "dispatchTime": "string",
        "responseStatus": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        },
        "responseTime": "string",
        "scheduleTime": "string"
      },
      "httpRequest": {
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
        "url": "string"
      },
      "lastAttempt": {
        "dispatchTime": "string",
        "responseStatus": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        },
        "responseTime": "string",
        "scheduleTime": "string"
      },
      "name": "string",
      "pullMessage": {
        "payload": "string",
        "tag": "string"
      },
      "responseCount": 0,
      "scheduleTime": "string",
      "view": "VIEW_UNSPECIFIED"
    }
  }'
```

`POST /v2beta3/{parent}/tasks`

Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * The maximum task size is 100KB.

> Body parameter

```json
{
  "responseView": "VIEW_UNSPECIFIED",
  "task": {
    "appEngineHttpRequest": {
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
    "createTime": "string",
    "dispatchCount": 0,
    "dispatchDeadline": "string",
    "firstAttempt": {
      "dispatchTime": "string",
      "responseStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "responseTime": "string",
      "scheduleTime": "string"
    },
    "httpRequest": {
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
      "url": "string"
    },
    "lastAttempt": {
      "dispatchTime": "string",
      "responseStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "responseTime": "string",
      "scheduleTime": "string"
    },
    "name": "string",
    "pullMessage": {
      "payload": "string",
      "tag": "string"
    },
    "responseCount": 0,
    "scheduleTime": "string",
    "view": "VIEW_UNSPECIFIED"
  }
}
```

<h3 id="cloudtasksprojectslocationsqueuestaskscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID` The queue must already exist.|
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
|body|body|[CreateTaskRequest](#schemacreatetaskrequest)|false|none|
|» responseView|body|string|false|The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource.|
|» task|body|[Task](#schematask)|false|Required. The task to add. Task names have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`. The user can optionally specify a task name. If a name is not specified then the system will generate a random unique task id, which will be set in the task returned in the response. If schedule_time is not set or is in the past then Cloud Tasks will set it to the current time. Task De-duplication: Explicitly specifying a task ID enables task de-duplication. If a task's ID is identical to that of an existing task or a task that was deleted or executed recently then the call will fail with ALREADY_EXISTS. The IDs of deleted tasks are not immediately available for reuse. It can take up to 4 hours (or 9 days if the task's queue was created using a queue.yaml or queue.xml) for the task ID to be released and made available again. Because there is an extra lookup cost to identify duplicate task names, these CreateTask calls have significantly increased latency. Using hashed strings for the task id or for the prefix of the task id is recommended. Choosing task ids that are sequential or have sequential prefixes, for example using a timestamp, causes an increase in latency and error rates in all task commands. The infrastructure relies on an approximately uniform distribution of task ids to store and serve tasks efficiently.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» responseView|VIEW_UNSPECIFIED|
|» responseView|BASIC|
|» responseView|FULL|

> Example responses

> 200 Response

```json
{
  "appEngineHttpRequest": {
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
  "createTime": "string",
  "dispatchCount": 0,
  "dispatchDeadline": "string",
  "firstAttempt": {
    "dispatchTime": "string",
    "responseStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "responseTime": "string",
    "scheduleTime": "string"
  },
  "httpRequest": {
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
    "url": "string"
  },
  "lastAttempt": {
    "dispatchTime": "string",
    "responseStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "responseTime": "string",
    "scheduleTime": "string"
  },
  "name": "string",
  "pullMessage": {
    "payload": "string",
    "tag": "string"
  },
  "responseCount": 0,
  "scheduleTime": "string",
  "view": "VIEW_UNSPECIFIED"
}
```

<h3 id="cloudtasksprojectslocationsqueuestaskscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Task](#schematask)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudtasks.projects.locations.queues.tasks.buffer

<a id="opIdcloudtasks.projects.locations.queues.tasks.buffer"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string/tasks/string:buffer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "body": {
      "contentType": "string",
      "data": "string",
      "extensions": [
        {
          "property1": null,
          "property2": null
        }
      ]
    }
  }'
```

`POST /v2beta3/{queue}/tasks/{taskId}:buffer`

Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer.

> Body parameter

```json
{
  "body": {
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }
}
```

<h3 id="cloudtasksprojectslocationsqueuestasksbuffer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queue|path|string|true|Required. The parent queue name. For example: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID` The queue must already exist.|
|taskId|path|string|true|Optional. Task ID for the task being created. If not provided, a random task ID is assigned to the task.|
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
|body|body|[BufferTaskRequest](#schemabuffertaskrequest)|false|none|
|» body|body|[HttpBody](#schemahttpbody)|false|Optional. Body of the HTTP request. The body can take any generic value. The value is written to the HttpRequest of the [Task].|

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
  "task": {
    "appEngineHttpRequest": {
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
    "createTime": "string",
    "dispatchCount": 0,
    "dispatchDeadline": "string",
    "firstAttempt": {
      "dispatchTime": "string",
      "responseStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "responseTime": "string",
      "scheduleTime": "string"
    },
    "httpRequest": {
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
      "url": "string"
    },
    "lastAttempt": {
      "dispatchTime": "string",
      "responseStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "responseTime": "string",
      "scheduleTime": "string"
    },
    "name": "string",
    "pullMessage": {
      "payload": "string",
      "tag": "string"
    },
    "responseCount": 0,
    "scheduleTime": "string",
    "view": "VIEW_UNSPECIFIED"
  }
}
```

<h3 id="cloudtasksprojectslocationsqueuestasksbuffer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BufferTaskResponse](#schemabuffertaskresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudtasks.projects.locations.queues.getIamPolicy

<a id="opIdcloudtasks.projects.locations.queues.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string:getIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "options": {
      "requestedPolicyVersion": 0
    }
  }'
```

`POST /v2beta3/{resource}:getIamPolicy`

Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.getIamPolicy`

> Body parameter

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

<h3 id="cloudtasksprojectslocationsqueuesgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[GetIamPolicyRequest](#schemagetiampolicyrequest)|false|none|
|» options|body|[GetPolicyOptions](#schemagetpolicyoptions)|false|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

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
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="cloudtasksprojectslocationsqueuesgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudtasks.projects.locations.queues.setIamPolicy

<a id="opIdcloudtasks.projects.locations.queues.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "bindings": [
        {
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "members": [
            "string"
          ],
          "role": "string"
        }
      ],
      "etag": "string",
      "version": 0
    }
  }'
```

`POST /v2beta3/{resource}:setIamPolicy`

Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.setIamPolicy`

> Body parameter

```json
{
  "policy": {
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  }
}
```

<h3 id="cloudtasksprojectslocationsqueuessetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[SetIamPolicyRequest](#schemasetiampolicyrequest)|false|none|
|» policy|body|[Policy](#schemapolicy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

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
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="cloudtasksprojectslocationsqueuessetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudtasks.projects.locations.queues.testIamPermissions

<a id="opIdcloudtasks.projects.locations.queues.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta3/string:testIamPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "permissions": [
      "string"
    ]
  }'
```

`POST /v2beta3/{resource}:testIamPermissions`

Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="cloudtasksprojectslocationsqueuestestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
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
|body|body|[TestIamPermissionsRequest](#schematestiampermissionsrequest)|false|none|
|» permissions|body|[string]|false|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

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
  "permissions": [
    "string"
  ]
}
```

<h3 id="cloudtasksprojectslocationsqueuestestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AppEngineHttpQueue">AppEngineHttpQueue</h2>
<!-- backwards compatibility -->
<a id="schemaappenginehttpqueue"></a>
<a id="schema_AppEngineHttpQueue"></a>
<a id="tocSappenginehttpqueue"></a>
<a id="tocsappenginehttpqueue"></a>

```json
{
  "appEngineRoutingOverride": {
    "host": "string",
    "instance": "string",
    "service": "string",
    "version": "string"
  }
}
```

App Engine HTTP queue. The task will be delivered to the App Engine application hostname specified by its AppEngineHttpQueue and AppEngineHttpRequest. The documentation for AppEngineHttpRequest explains how the task's host URL is constructed. Using AppEngineHttpQueue requires [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control) Google IAM permission for the project and the following scope: `https://www.googleapis.com/auth/cloud-platform`

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appEngineRoutingOverride|[AppEngineRouting](#schemaappenginerouting)|false|none|Overrides for the task-level app_engine_routing. If set, `app_engine_routing_override` is used for all tasks in the queue, no matter what the setting is for the task-level app_engine_routing.|

<h2 id="tocS_AppEngineHttpRequest">AppEngineHttpRequest</h2>
<!-- backwards compatibility -->
<a id="schemaappenginehttprequest"></a>
<a id="schema_AppEngineHttpRequest"></a>
<a id="tocSappenginehttprequest"></a>
<a id="tocsappenginehttprequest"></a>

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

App Engine HTTP request. The message defines the HTTP request that is sent to an App Engine app when the task is dispatched. Using AppEngineHttpRequest requires [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control) Google IAM permission for the project and the following scope: `https://www.googleapis.com/auth/cloud-platform` The task will be delivered to the App Engine app which belongs to the same project as the queue. For more information, see [How Requests are Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed) and how routing is affected by [dispatch files](https://cloud.google.com/appengine/docs/python/config/dispatchref). Traffic is encrypted during transport and never leaves Google datacenters. Because this traffic is carried over a communication mechanism internal to Google, you cannot explicitly set the protocol (for example, HTTP or HTTPS). The request to the handler, however, will appear to have used the HTTP protocol. The AppEngineRouting used to construct the URL that the task is delivered to can be set at the queue-level or task-level: * If set, app_engine_routing_override is used for all tasks in the queue, no matter what the setting is for the task-level app_engine_routing. The `url` that the task will be sent to is: * `url =` host `+` relative_uri Tasks can be dispatched to secure app handlers, unsecure app handlers, and URIs restricted with [`login: admin`](https://cloud.google.com/appengine/docs/standard/python/config/appref). Because tasks are not run as any user, they cannot be dispatched to URIs restricted with [`login: required`](https://cloud.google.com/appengine/docs/standard/python/config/appref) Task dispatches also do not follow redirects. The task attempt has succeeded if the app's request handler returns an HTTP response code in the range [`200` - `299`]. The task attempt has failed if the app's handler returns a non-2xx response code or Cloud Tasks does not receive response before the deadline. Failed tasks will be retried according to the retry configuration. `503` (Service Unavailable) is considered an App Engine system error instead of an application error and will cause Cloud Tasks' traffic congestion control to temporarily throttle the queue's dispatches. Unlike other types of task targets, a `429` (Too Many Requests) response from an app handler does not cause traffic congestion control to throttle the queue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appEngineRouting|[AppEngineRouting](#schemaappenginerouting)|false|none|Task-level setting for App Engine routing. If set, app_engine_routing_override is used for all tasks in the queue, no matter what the setting is for the task-level app_engine_routing.|
|body|string(byte)|false|none|HTTP request body. A request body is allowed only if the HTTP method is POST or PUT. It is an error to set a body on a task with an incompatible HttpMethod.|
|headers|object|false|none|HTTP request headers. This map contains the header field names and values. Headers can be set when the task is created. Repeated headers are not supported but a header value can contain commas. Cloud Tasks sets some headers to default values: * `User-Agent`: By default, this header is `"AppEngine-Google; (+http://code.google.com/appengine)"`. This header can be modified, but Cloud Tasks will append `"AppEngine-Google; (+http://code.google.com/appengine)"` to the modified `User-Agent`. If the task has a body, Cloud Tasks sets the following headers: * `Content-Type`: By default, the `Content-Type` header is set to `"application/octet-stream"`. The default can be overridden by explicitly setting `Content-Type` to a particular media type when the task is created. For example, `Content-Type` can be set to `"application/json"`. * `Content-Length`: This is computed by Cloud Tasks. This value is output only. It cannot be changed. The headers below cannot be set or overridden: * `Host` * `X-Google-*` * `X-AppEngine-*` In addition, Cloud Tasks sets some headers when the task is dispatched, such as headers containing information about the task; see [request headers](https://cloud.google.com/tasks/docs/creating-appengine-handlers#reading_request_headers). These headers are set only when the task is dispatched, so they are not visible when the task is returned in a Cloud Tasks response. Although there is no specific limit for the maximum number of headers or the size, there is a limit on the maximum size of the Task. For more information, see the CreateTask documentation.|
|httpMethod|string|false|none|The HTTP method to use for the request. The default is POST. The app's request handler for the task's target URL must be able to handle HTTP requests with this http_method, otherwise the task attempt fails with error code 405 (Method Not Allowed). See [Writing a push task request handler](https://cloud.google.com/appengine/docs/java/taskqueue/push/creating-handlers#writing_a_push_task_request_handler) and the App Engine documentation for your runtime on [How Requests are Handled](https://cloud.google.com/appengine/docs/standard/python3/how-requests-are-handled).|
|relativeUri|string|false|none|The relative URI. The relative URI must begin with "/" and must be a valid HTTP relative URI. It can contain a path and query string arguments. If the relative URI is empty, then the root path "/" will be used. No spaces are allowed, and the maximum length allowed is 2083 characters.|

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

App Engine Routing. Defines routing characteristics specific to App Engine - service, version, and instance. For more information about services, versions, and instances see [An Overview of App Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine), [Microservices Architecture on Google App Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine), [App Engine Standard request routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed), and [App Engine Flex request routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|false|none|Output only. The host that the task is sent to. The host is constructed from the domain name of the app associated with the queue's project ID (for example .appspot.com), and the service, version, and instance. Tasks which were created using the App Engine SDK might have a custom domain name. For more information, see [How Requests are Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed).|
|instance|string|false|none|App instance. By default, the task is sent to an instance which is available when the task is attempted. Requests can only be sent to a specific instance if [manual scaling is used in App Engine Standard](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine?hl=en_US#scaling_types_and_instance_classes). App Engine Flex does not support instances. For more information, see [App Engine Standard request routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed) and [App Engine Flex request routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).|
|service|string|false|none|App service. By default, the task is sent to the service which is the default service when the task is attempted. For some queues or tasks which were created using the App Engine Task Queue API, host is not parsable into service, version, and instance. For example, some tasks which were created using the App Engine SDK use a custom domain name; custom domains are not parsed by Cloud Tasks. If host is not parsable, then service, version, and instance are the empty string.|
|version|string|false|none|App version. By default, the task is sent to the version which is the default version when the task is attempted. For some queues or tasks which were created using the App Engine Task Queue API, host is not parsable into service, version, and instance. For example, some tasks which were created using the App Engine SDK use a custom domain name; custom domains are not parsed by Cloud Tasks. If host is not parsable, then service, version, and instance are the empty string.|

<h2 id="tocS_Attempt">Attempt</h2>
<!-- backwards compatibility -->
<a id="schemaattempt"></a>
<a id="schema_Attempt"></a>
<a id="tocSattempt"></a>
<a id="tocsattempt"></a>

```json
{
  "dispatchTime": "string",
  "responseStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "responseTime": "string",
  "scheduleTime": "string"
}
```

The status of a task attempt.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dispatchTime|string(google-datetime)|false|none|Output only. The time that this attempt was dispatched. `dispatch_time` will be truncated to the nearest microsecond.|
|responseStatus|[Status](#schemastatus)|false|none|Output only. The response from the worker for this attempt. If `response_time` is unset, then the task has not been attempted or is currently running and the `response_status` field is meaningless.|
|responseTime|string(google-datetime)|false|none|Output only. The time that this attempt response was received. `response_time` will be truncated to the nearest microsecond.|
|scheduleTime|string(google-datetime)|false|none|Output only. The time that this attempt was scheduled. `schedule_time` will be truncated to the nearest microsecond.|

<h2 id="tocS_Binding">Binding</h2>
<!-- backwards compatibility -->
<a id="schemabinding"></a>
<a id="schema_Binding"></a>
<a id="tocSbinding"></a>
<a id="tocsbinding"></a>

```json
{
  "condition": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "members": [
    "string"
  ],
  "role": "string"
}
```

Associates `members`, or principals, with a `role`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[Expr](#schemaexpr)|false|none|The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).|

<h2 id="tocS_BufferTaskRequest">BufferTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemabuffertaskrequest"></a>
<a id="schema_BufferTaskRequest"></a>
<a id="tocSbuffertaskrequest"></a>
<a id="tocsbuffertaskrequest"></a>

```json
{
  "body": {
    "contentType": "string",
    "data": "string",
    "extensions": [
      {
        "property1": null,
        "property2": null
      }
    ]
  }
}
```

Request message for BufferTask.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|[HttpBody](#schemahttpbody)|false|none|Optional. Body of the HTTP request. The body can take any generic value. The value is written to the HttpRequest of the [Task].|

<h2 id="tocS_BufferTaskResponse">BufferTaskResponse</h2>
<!-- backwards compatibility -->
<a id="schemabuffertaskresponse"></a>
<a id="schema_BufferTaskResponse"></a>
<a id="tocSbuffertaskresponse"></a>
<a id="tocsbuffertaskresponse"></a>

```json
{
  "task": {
    "appEngineHttpRequest": {
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
    "createTime": "string",
    "dispatchCount": 0,
    "dispatchDeadline": "string",
    "firstAttempt": {
      "dispatchTime": "string",
      "responseStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "responseTime": "string",
      "scheduleTime": "string"
    },
    "httpRequest": {
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
      "url": "string"
    },
    "lastAttempt": {
      "dispatchTime": "string",
      "responseStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "responseTime": "string",
      "scheduleTime": "string"
    },
    "name": "string",
    "pullMessage": {
      "payload": "string",
      "tag": "string"
    },
    "responseCount": 0,
    "scheduleTime": "string",
    "view": "VIEW_UNSPECIFIED"
  }
}
```

Response message for BufferTask.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|task|[Task](#schematask)|false|none|The created task.|

<h2 id="tocS_CmekConfig">CmekConfig</h2>
<!-- backwards compatibility -->
<a id="schemacmekconfig"></a>
<a id="schema_CmekConfig"></a>
<a id="tocScmekconfig"></a>
<a id="tocscmekconfig"></a>

```json
{
  "kmsKey": "string",
  "name": "string"
}
```

Describes the customer-managed encryption key (CMEK) configuration associated with a project and location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKey|string|false|none|Resource name of the Cloud KMS key, of the form `projects/PROJECT_ID/locations/LOCATION_ID/keyRings/KEY_RING_ID/cryptoKeys/KEY_ID`, that will be used to encrypt the Queues & Tasks in the region. Setting this as blank will turn off CMEK encryption.|
|name|string|false|read-only|Output only. The config resource name which includes the project and location and must end in 'cmekConfig', in the format projects/PROJECT_ID/locations/LOCATION_ID/cmekConfig`|

<h2 id="tocS_CreateTaskRequest">CreateTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetaskrequest"></a>
<a id="schema_CreateTaskRequest"></a>
<a id="tocScreatetaskrequest"></a>
<a id="tocscreatetaskrequest"></a>

```json
{
  "responseView": "VIEW_UNSPECIFIED",
  "task": {
    "appEngineHttpRequest": {
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
    "createTime": "string",
    "dispatchCount": 0,
    "dispatchDeadline": "string",
    "firstAttempt": {
      "dispatchTime": "string",
      "responseStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "responseTime": "string",
      "scheduleTime": "string"
    },
    "httpRequest": {
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
      "url": "string"
    },
    "lastAttempt": {
      "dispatchTime": "string",
      "responseStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "responseTime": "string",
      "scheduleTime": "string"
    },
    "name": "string",
    "pullMessage": {
      "payload": "string",
      "tag": "string"
    },
    "responseCount": 0,
    "scheduleTime": "string",
    "view": "VIEW_UNSPECIFIED"
  }
}
```

Request message for CreateTask.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responseView|string|false|none|The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource.|
|task|[Task](#schematask)|false|none|Required. The task to add. Task names have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`. The user can optionally specify a task name. If a name is not specified then the system will generate a random unique task id, which will be set in the task returned in the response. If schedule_time is not set or is in the past then Cloud Tasks will set it to the current time. Task De-duplication: Explicitly specifying a task ID enables task de-duplication. If a task's ID is identical to that of an existing task or a task that was deleted or executed recently then the call will fail with ALREADY_EXISTS. The IDs of deleted tasks are not immediately available for reuse. It can take up to 4 hours (or 9 days if the task's queue was created using a queue.yaml or queue.xml) for the task ID to be released and made available again. Because there is an extra lookup cost to identify duplicate task names, these CreateTask calls have significantly increased latency. Using hashed strings for the task id or for the prefix of the task id is recommended. Choosing task ids that are sequential or have sequential prefixes, for example using a timestamp, causes an increase in latency and error rates in all task commands. The infrastructure relies on an approximately uniform distribution of task ids to store and serve tasks efficiently.|

#### Enumerated Values

|Property|Value|
|---|---|
|responseView|VIEW_UNSPECIFIED|
|responseView|BASIC|
|responseView|FULL|

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

<h2 id="tocS_Expr">Expr</h2>
<!-- backwards compatibility -->
<a id="schemaexpr"></a>
<a id="schema_Expr"></a>
<a id="tocSexpr"></a>
<a id="tocsexpr"></a>

```json
{
  "description": "string",
  "expression": "string",
  "location": "string",
  "title": "string"
}
```

Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in Common Expression Language syntax.|
|location|string|false|none|Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.|
|title|string|false|none|Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.|

<h2 id="tocS_GetIamPolicyRequest">GetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetiampolicyrequest"></a>
<a id="schema_GetIamPolicyRequest"></a>
<a id="tocSgetiampolicyrequest"></a>
<a id="tocsgetiampolicyrequest"></a>

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

Request message for `GetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[GetPolicyOptions](#schemagetpolicyoptions)|false|none|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

<h2 id="tocS_GetPolicyOptions">GetPolicyOptions</h2>
<!-- backwards compatibility -->
<a id="schemagetpolicyoptions"></a>
<a id="schema_GetPolicyOptions"></a>
<a id="tocSgetpolicyoptions"></a>
<a id="tocsgetpolicyoptions"></a>

```json
{
  "requestedPolicyVersion": 0
}
```

Encapsulates settings provided to GetIamPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestedPolicyVersion|integer(int32)|false|none|Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_Header">Header</h2>
<!-- backwards compatibility -->
<a id="schemaheader"></a>
<a id="schema_Header"></a>
<a id="tocSheader"></a>
<a id="tocsheader"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

Defines a header message. A header can have a key and a value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The Key of the header.|
|value|string|false|none|The Value of the header.|

<h2 id="tocS_HeaderOverride">HeaderOverride</h2>
<!-- backwards compatibility -->
<a id="schemaheaderoverride"></a>
<a id="schema_HeaderOverride"></a>
<a id="tocSheaderoverride"></a>
<a id="tocsheaderoverride"></a>

```json
{
  "header": {
    "key": "string",
    "value": "string"
  }
}
```

Wraps the Header object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[Header](#schemaheader)|false|none|header embodying a key and a value.|

<h2 id="tocS_HttpBody">HttpBody</h2>
<!-- backwards compatibility -->
<a id="schemahttpbody"></a>
<a id="schema_HttpBody"></a>
<a id="tocShttpbody"></a>
<a id="tocshttpbody"></a>

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|The HTTP Content-Type header value specifying the content type of the body.|
|data|string(byte)|false|none|The HTTP request/response body as raw binary.|
|extensions|[object]|false|none|Application specific response metadata. Must be set in the first response for streaming APIs.|

<h2 id="tocS_HttpRequest">HttpRequest</h2>
<!-- backwards compatibility -->
<a id="schemahttprequest"></a>
<a id="schema_HttpRequest"></a>
<a id="tocShttprequest"></a>
<a id="tocshttprequest"></a>

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
  "url": "string"
}
```

HTTP request. The task will be pushed to the worker as an HTTP request. If the worker or the redirected worker acknowledges the task by returning a successful HTTP response code ([`200` - `299`]), the task will be removed from the queue. If any other HTTP response code is returned or no response is received, the task will be retried according to the following: * User-specified throttling: retry configuration, rate limits, and the queue's state. * System throttling: To prevent the worker from overloading, Cloud Tasks may temporarily reduce the queue's effective rate. User-specified settings will not be changed. System throttling happens because: * Cloud Tasks backs off on all errors. Normally the backoff specified in rate limits will be used. But if the worker returns `429` (Too Many Requests), `503` (Service Unavailable), or the rate of errors is high, Cloud Tasks will use a higher backoff rate. The retry specified in the `Retry-After` HTTP response header is considered. * To prevent traffic spikes and to smooth sudden increases in traffic, dispatches ramp up slowly when the queue is newly created or idle and if large numbers of tasks suddenly become available to dispatch (due to spikes in create task rates, the queue being unpaused, or many tasks that are scheduled at the same time).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string(byte)|false|none|HTTP request body. A request body is allowed only if the HTTP method is POST, PUT, or PATCH. It is an error to set body on a task with an incompatible HttpMethod.|
|headers|object|false|none|HTTP request headers. This map contains the header field names and values. Headers can be set when the task is created. These headers represent a subset of the headers that will accompany the task's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is: * Any header that is prefixed with "X-CloudTasks-" will be treated as service header. Service headers define properties of the task and are predefined in CloudTask. * Host: This will be computed by Cloud Tasks and derived from HttpRequest.url. * Content-Length: This will be computed by Cloud Tasks. * User-Agent: This will be set to `"Google-Cloud-Tasks"`. * `X-Google-*`: Google use only. * `X-AppEngine-*`: Google use only. `Content-Type` won't be set by Cloud Tasks. You can explicitly set `Content-Type` to a media type when the task is created. For example, `Content-Type` can be set to `"application/octet-stream"` or `"application/json"`. Headers which can have multiple values (according to RFC2616) can be specified using comma-separated values. The size of the headers must be less than 80KB.|
|httpMethod|string|false|none|The HTTP method to use for the request. The default is POST.|
|oauthToken|[OAuthToken](#schemaoauthtoken)|false|none|If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as an `Authorization` header in the HTTP request. This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.|
|oidcToken|[OidcToken](#schemaoidctoken)|false|none|If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request. This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.|
|url|string|false|none|Required. The full url path that the request will be sent to. This string must begin with either "http://" or "https://". Some examples are: `http://acme.com` and `https://acme.com/sales:8080`. Cloud Tasks will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding. The `Location` header response from a redirect response [`300` - `399`] may be followed. The redirect is not counted as a separate attempt.|

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

<h2 id="tocS_HttpTarget">HttpTarget</h2>
<!-- backwards compatibility -->
<a id="schemahttptarget"></a>
<a id="schema_HttpTarget"></a>
<a id="tocShttptarget"></a>
<a id="tocshttptarget"></a>

```json
{
  "headerOverrides": [
    {
      "header": {
        "key": "string",
        "value": "string"
      }
    }
  ],
  "httpMethod": "HTTP_METHOD_UNSPECIFIED",
  "oauthToken": {
    "scope": "string",
    "serviceAccountEmail": "string"
  },
  "oidcToken": {
    "audience": "string",
    "serviceAccountEmail": "string"
  },
  "uriOverride": {
    "host": "string",
    "pathOverride": {
      "path": "string"
    },
    "port": "string",
    "queryOverride": {
      "queryParams": "string"
    },
    "scheme": "SCHEME_UNSPECIFIED",
    "uriOverrideEnforceMode": "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
  }
}
```

HTTP target. When specified as a Queue, all the tasks with [HttpRequest] will be overridden according to the target.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|headerOverrides|[[HeaderOverride](#schemaheaderoverride)]|false|none|HTTP target headers. This map contains the header field names and values. Headers will be set when running the CreateTask and/or BufferTask. These headers represent a subset of the headers that will be configured for the task's HTTP request. Some HTTP request headers will be ignored or replaced. A partial list of headers that will be ignored or replaced is: * Several predefined headers, prefixed with "X-CloudTasks-", can be used to define properties of the task. * Host: This will be computed by Cloud Tasks and derived from HttpRequest.url. * Content-Length: This will be computed by Cloud Tasks. `Content-Type` won't be set by Cloud Tasks. You can explicitly set `Content-Type` to a media type when the task is created. For example,`Content-Type` can be set to `"application/octet-stream"` or `"application/json"`. The default value is set to `"application/json"`. * User-Agent: This will be set to `"Google-Cloud-Tasks"`. Headers which can have multiple values (according to RFC2616) can be specified using comma-separated values. The size of the headers must be less than 80KB. Queue-level headers to override headers of all the tasks in the queue.|
|httpMethod|string|false|none|The HTTP method to use for the request. When specified, it overrides HttpRequest for the task. Note that if the value is set to HttpMethod the HttpRequest of the task will be ignored at execution time.|
|oauthToken|[OAuthToken](#schemaoauthtoken)|false|none|If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be generated and attached as the `Authorization` header in the HTTP request. This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.|
|oidcToken|[OidcToken](#schemaoidctoken)|false|none|If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token will be generated and attached as an `Authorization` header in the HTTP request. This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.|
|uriOverride|[UriOverride](#schemaurioverride)|false|none|URI override. When specified, overrides the execution URI for all the tasks in the queue.|

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

<h2 id="tocS_ListQueuesResponse">ListQueuesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistqueuesresponse"></a>
<a id="schema_ListQueuesResponse"></a>
<a id="tocSlistqueuesresponse"></a>
<a id="tocslistqueuesresponse"></a>

```json
{
  "nextPageToken": "string",
  "queues": [
    {
      "appEngineHttpQueue": {
        "appEngineRoutingOverride": {
          "host": "string",
          "instance": "string",
          "service": "string",
          "version": "string"
        }
      },
      "httpTarget": {
        "headerOverrides": [
          {
            "header": {
              "key": "string",
              "value": "string"
            }
          }
        ],
        "httpMethod": "HTTP_METHOD_UNSPECIFIED",
        "oauthToken": {
          "scope": "string",
          "serviceAccountEmail": "string"
        },
        "oidcToken": {
          "audience": "string",
          "serviceAccountEmail": "string"
        },
        "uriOverride": {
          "host": "string",
          "pathOverride": {
            "path": "string"
          },
          "port": "string",
          "queryOverride": {
            "queryParams": "string"
          },
          "scheme": "SCHEME_UNSPECIFIED",
          "uriOverrideEnforceMode": "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
        }
      },
      "name": "string",
      "purgeTime": "string",
      "rateLimits": {
        "maxBurstSize": 0,
        "maxConcurrentDispatches": 0,
        "maxDispatchesPerSecond": 0
      },
      "retryConfig": {
        "maxAttempts": 0,
        "maxBackoff": "string",
        "maxDoublings": 0,
        "maxRetryDuration": "string",
        "minBackoff": "string"
      },
      "stackdriverLoggingConfig": {
        "samplingRatio": 0
      },
      "state": "STATE_UNSPECIFIED",
      "stats": {
        "concurrentDispatchesCount": "string",
        "effectiveExecutionRate": 0,
        "executedLastMinuteCount": "string",
        "oldestEstimatedArrivalTime": "string",
        "tasksCount": "string"
      },
      "taskTtl": "string",
      "tombstoneTtl": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ]
}
```

Response message for ListQueues.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve next page of results. To return the next page of results, call ListQueues with this value as the page_token. If the next_page_token is empty, there are no more results. The page token is valid for only 2 hours.|
|queues|[[Queue](#schemaqueue)]|false|none|The list of queues.|

<h2 id="tocS_ListTasksResponse">ListTasksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttasksresponse"></a>
<a id="schema_ListTasksResponse"></a>
<a id="tocSlisttasksresponse"></a>
<a id="tocslisttasksresponse"></a>

```json
{
  "nextPageToken": "string",
  "tasks": [
    {
      "appEngineHttpRequest": {
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
      "createTime": "string",
      "dispatchCount": 0,
      "dispatchDeadline": "string",
      "firstAttempt": {
        "dispatchTime": "string",
        "responseStatus": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        },
        "responseTime": "string",
        "scheduleTime": "string"
      },
      "httpRequest": {
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
        "url": "string"
      },
      "lastAttempt": {
        "dispatchTime": "string",
        "responseStatus": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        },
        "responseTime": "string",
        "scheduleTime": "string"
      },
      "name": "string",
      "pullMessage": {
        "payload": "string",
        "tag": "string"
      },
      "responseCount": 0,
      "scheduleTime": "string",
      "view": "VIEW_UNSPECIFIED"
    }
  ]
}
```

Response message for listing tasks using ListTasks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve next page of results. To return the next page of results, call ListTasks with this value as the page_token. If the next_page_token is empty, there are no more results.|
|tasks|[[Task](#schematask)]|false|none|The list of tasks.|

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
|serviceAccountEmail|string|false|none|[Service account email](https://cloud.google.com/iam/docs/service-accounts) to be used for generating OAuth token. The service account must be within the same project as the queue. The caller must have iam.serviceAccounts.actAs permission for the service account.|

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
|serviceAccountEmail|string|false|none|[Service account email](https://cloud.google.com/iam/docs/service-accounts) to be used for generating OIDC token. The service account must be within the same project as the queue. The caller must have iam.serviceAccounts.actAs permission for the service account.|

<h2 id="tocS_PathOverride">PathOverride</h2>
<!-- backwards compatibility -->
<a id="schemapathoverride"></a>
<a id="schema_PathOverride"></a>
<a id="tocSpathoverride"></a>
<a id="tocspathoverride"></a>

```json
{
  "path": "string"
}
```

PathOverride. Path message defines path override for HTTP targets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|path|string|false|none|The URI path (e.g., /users/1234). Default is an empty string.|

<h2 id="tocS_PauseQueueRequest">PauseQueueRequest</h2>
<!-- backwards compatibility -->
<a id="schemapausequeuerequest"></a>
<a id="schema_PauseQueueRequest"></a>
<a id="tocSpausequeuerequest"></a>
<a id="tocspausequeuerequest"></a>

```json
{}
```

Request message for PauseQueue.

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_PullMessage">PullMessage</h2>
<!-- backwards compatibility -->
<a id="schemapullmessage"></a>
<a id="schema_PullMessage"></a>
<a id="tocSpullmessage"></a>
<a id="tocspullmessage"></a>

```json
{
  "payload": "string",
  "tag": "string"
}
```

Pull Message. This proto can only be used for tasks in a queue which has PULL type. It currently exists for backwards compatibility with the App Engine Task Queue SDK. This message type maybe returned with methods list and get, when the response view is FULL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payload|string(byte)|false|none|A data payload consumed by the worker to execute the task.|
|tag|string|false|none|The tasks's tag. The tag is less than 500 characters. SDK compatibility: Although the SDK allows tags to be either string or [bytes](https://cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/taskqueue/TaskOptions.html#tag-byte:A-), only UTF-8 encoded tags can be used in Cloud Tasks. If a tag isn't UTF-8 encoded, the tag will be empty when the task is returned by Cloud Tasks.|

<h2 id="tocS_PurgeQueueRequest">PurgeQueueRequest</h2>
<!-- backwards compatibility -->
<a id="schemapurgequeuerequest"></a>
<a id="schema_PurgeQueueRequest"></a>
<a id="tocSpurgequeuerequest"></a>
<a id="tocspurgequeuerequest"></a>

```json
{}
```

Request message for PurgeQueue.

<h2 id="tocS_QueryOverride">QueryOverride</h2>
<!-- backwards compatibility -->
<a id="schemaqueryoverride"></a>
<a id="schema_QueryOverride"></a>
<a id="tocSqueryoverride"></a>
<a id="tocsqueryoverride"></a>

```json
{
  "queryParams": "string"
}
```

QueryOverride. Query message defines query override for HTTP targets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryParams|string|false|none|The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string.|

<h2 id="tocS_Queue">Queue</h2>
<!-- backwards compatibility -->
<a id="schemaqueue"></a>
<a id="schema_Queue"></a>
<a id="tocSqueue"></a>
<a id="tocsqueue"></a>

```json
{
  "appEngineHttpQueue": {
    "appEngineRoutingOverride": {
      "host": "string",
      "instance": "string",
      "service": "string",
      "version": "string"
    }
  },
  "httpTarget": {
    "headerOverrides": [
      {
        "header": {
          "key": "string",
          "value": "string"
        }
      }
    ],
    "httpMethod": "HTTP_METHOD_UNSPECIFIED",
    "oauthToken": {
      "scope": "string",
      "serviceAccountEmail": "string"
    },
    "oidcToken": {
      "audience": "string",
      "serviceAccountEmail": "string"
    },
    "uriOverride": {
      "host": "string",
      "pathOverride": {
        "path": "string"
      },
      "port": "string",
      "queryOverride": {
        "queryParams": "string"
      },
      "scheme": "SCHEME_UNSPECIFIED",
      "uriOverrideEnforceMode": "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
    }
  },
  "name": "string",
  "purgeTime": "string",
  "rateLimits": {
    "maxBurstSize": 0,
    "maxConcurrentDispatches": 0,
    "maxDispatchesPerSecond": 0
  },
  "retryConfig": {
    "maxAttempts": 0,
    "maxBackoff": "string",
    "maxDoublings": 0,
    "maxRetryDuration": "string",
    "minBackoff": "string"
  },
  "stackdriverLoggingConfig": {
    "samplingRatio": 0
  },
  "state": "STATE_UNSPECIFIED",
  "stats": {
    "concurrentDispatchesCount": "string",
    "effectiveExecutionRate": 0,
    "executedLastMinuteCount": "string",
    "oldestEstimatedArrivalTime": "string",
    "tasksCount": "string"
  },
  "taskTtl": "string",
  "tombstoneTtl": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appEngineHttpQueue|[AppEngineHttpQueue](#schemaappenginehttpqueue)|false|none|AppEngineHttpQueue settings apply only to App Engine tasks in this queue. Http tasks are not affected by this proto.|
|httpTarget|[HttpTarget](#schemahttptarget)|false|none|Modifies HTTP target for HTTP tasks.|
|name|string|false|none|Caller-specified and required in CreateQueue, after which it becomes output only. The queue name. The queue name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID` * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the queue's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters.|
|purgeTime|string(google-datetime)|false|none|Output only. The last time this queue was purged. All tasks that were created before this time were purged. A queue can be purged using PurgeQueue, the [App Engine Task Queue SDK, or the Cloud Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue). Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been purged.|
|rateLimits|[RateLimits](#schemaratelimits)|false|none|Rate limits for task dispatches. rate_limits and retry_config are related because they both control task attempts. However they control task attempts in different ways: * rate_limits controls the total rate of dispatches from a queue (i.e. all traffic dispatched from the queue, regardless of whether the dispatch is from a first attempt or a retry). * retry_config controls what happens to particular a task after its first attempt fails. That is, retry_config controls task retries (the second attempt, third attempt, etc). The queue's actual dispatch rate is the result of: * Number of tasks in the queue * User-specified throttling: rate_limits, retry_config, and the queue's state. * System throttling due to `429` (Too Many Requests) or `503` (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic spikes.|
|retryConfig|[RetryConfig](#schemaretryconfig)|false|none|Settings that determine the retry behavior. * For tasks created using Cloud Tasks: the queue-level retry settings apply to all tasks in the queue that were created using Cloud Tasks. Retry settings cannot be set on individual tasks. * For tasks created using the App Engine SDK: the queue-level retry settings apply to all tasks in the queue which do not have retry settings explicitly set on the task and were created by the App Engine SDK. See [App Engine documentation](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks).|
|stackdriverLoggingConfig|[StackdriverLoggingConfig](#schemastackdriverloggingconfig)|false|none|Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/). If this field is unset, then no logs are written.|
|state|string|false|none|Output only. The state of the queue. `state` can only be changed by called PauseQueue, ResumeQueue, or uploading [queue.yaml/xml](https://cloud.google.com/appengine/docs/python/config/queueref). UpdateQueue cannot be used to change `state`.|
|stats|[QueueStats](#schemaqueuestats)|false|none|Output only. The realtime, informational statistics for a queue. In order to receive the statistics the caller should include this field in the FieldMask.|
|taskTtl|string(google-duration)|false|none|The maximum amount of time that a task will be retained in this queue. After a task has lived for `task_ttl`, the task will be deleted regardless of whether it was dispatched or not. The minimum value is 10 days. The maximum value is 10 years. The value must be given as a string that indicates the length of time (in seconds) followed by `s` (for "seconds"). For more information on the format, see the documentation for [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration). Queues created by Cloud Tasks have a default `task_ttl` of 31 days. . Queues created by queue.yaml/xml have a fixed `task_ttl` of the maximum duration, because there is a [storage quota](https://cloud.google.com/appengine/quotas#Task_Queue) for these queues.|
|tombstoneTtl|string(google-duration)|false|none|The task tombstone time to live (TTL). After a task is deleted or executed, the task's tombstone is retained for the length of time specified by `tombstone_ttl`. The tombstone is used by task de-duplication; another task with the same name can't be created until the tombstone has expired. For more information about task de-duplication, see the documentation for CreateTaskRequest. The minimum value is 1 hour. The maximum value is 9 days. The value must be given as a string that indicates the length of time (in seconds) followed by `s` (for "seconds"). For more information on the format, see the documentation for [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration). Queues created by Cloud Tasks have a default `tombstone_ttl` of 1 hour.|
|type|string|false|none|Immutable. The type of a queue (push or pull). `Queue.type` is an immutable property of the queue that is set at the queue creation time. When left unspecified, the default value of `PUSH` is selected.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|RUNNING|
|state|PAUSED|
|state|DISABLED|
|type|TYPE_UNSPECIFIED|
|type|PULL|
|type|PUSH|

<h2 id="tocS_QueueStats">QueueStats</h2>
<!-- backwards compatibility -->
<a id="schemaqueuestats"></a>
<a id="schema_QueueStats"></a>
<a id="tocSqueuestats"></a>
<a id="tocsqueuestats"></a>

```json
{
  "concurrentDispatchesCount": "string",
  "effectiveExecutionRate": 0,
  "executedLastMinuteCount": "string",
  "oldestEstimatedArrivalTime": "string",
  "tasksCount": "string"
}
```

Statistics for a queue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|concurrentDispatchesCount|string(int64)|false|read-only|Output only. The number of requests that the queue has dispatched but has not received a reply for yet.|
|effectiveExecutionRate|number(double)|false|read-only|Output only. The current maximum number of tasks per second executed by the queue. The maximum value of this variable is controlled by the RateLimits of the Queue. However, this value could be less to avoid overloading the endpoints tasks in the queue are targeting.|
|executedLastMinuteCount|string(int64)|false|read-only|Output only. The number of tasks that the queue has dispatched and received a reply for during the last minute. This variable counts both successful and non-successful executions.|
|oldestEstimatedArrivalTime|string(google-datetime)|false|read-only|Output only. An estimation of the nearest time in the future where a task in the queue is scheduled to be executed.|
|tasksCount|string(int64)|false|read-only|Output only. An estimation of the number of tasks in the queue, that is, the tasks in the queue that haven't been executed, the tasks in the queue which the queue has dispatched but has not yet received a reply for, and the failed tasks that the queue is retrying.|

<h2 id="tocS_RateLimits">RateLimits</h2>
<!-- backwards compatibility -->
<a id="schemaratelimits"></a>
<a id="schema_RateLimits"></a>
<a id="tocSratelimits"></a>
<a id="tocsratelimits"></a>

```json
{
  "maxBurstSize": 0,
  "maxConcurrentDispatches": 0,
  "maxDispatchesPerSecond": 0
}
```

Rate limits. This message determines the maximum rate that tasks can be dispatched by a queue, regardless of whether the dispatch is a first task attempt or a retry. Note: The debugging command, RunTask, will run a task even if the queue has reached its RateLimits.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxBurstSize|integer(int32)|false|none|The max burst size. Max burst size limits how fast tasks in queue are processed when many tasks are in the queue and the rate is high. This field allows the queue to have a high rate so processing starts shortly after a task is enqueued, but still limits resource usage when many tasks are enqueued in a short period of time. The [token bucket](https://wikipedia.org/wiki/Token_Bucket) algorithm is used to control the rate of task dispatches. Each queue has a token bucket that holds tokens, up to the maximum specified by `max_burst_size`. Each time a task is dispatched, a token is removed from the bucket. Tasks will be dispatched until the queue's bucket runs out of tokens. The bucket will be continuously refilled with new tokens based on max_dispatches_per_second. The default value of `max_burst_size` is picked by Cloud Tasks based on the value of max_dispatches_per_second. The maximum value of `max_burst_size` is 500. For App Engine queues that were created or updated using `queue.yaml/xml`, `max_burst_size` is equal to [bucket_size](https://cloud.google.com/appengine/docs/standard/python/config/queueref#bucket_size). If UpdateQueue is called on a queue without explicitly setting a value for `max_burst_size`, `max_burst_size` value will get updated if UpdateQueue is updating max_dispatches_per_second. |
|maxConcurrentDispatches|integer(int32)|false|none|The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue. After this threshold has been reached, Cloud Tasks stops dispatching tasks until the number of concurrent requests decreases. If unspecified when the queue is created, Cloud Tasks will pick the default. The maximum allowed value is 5,000. This field has the same meaning as [max_concurrent_requests in queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#max_concurrent_requests).|
|maxDispatchesPerSecond|number(double)|false|none|The maximum rate at which tasks are dispatched from this queue. If unspecified when the queue is created, Cloud Tasks will pick the default. * For App Engine queues, the maximum allowed value is 500. This field has the same meaning as [rate in queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#rate).|

<h2 id="tocS_ResumeQueueRequest">ResumeQueueRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresumequeuerequest"></a>
<a id="schema_ResumeQueueRequest"></a>
<a id="tocSresumequeuerequest"></a>
<a id="tocsresumequeuerequest"></a>

```json
{}
```

Request message for ResumeQueue.

<h2 id="tocS_RetryConfig">RetryConfig</h2>
<!-- backwards compatibility -->
<a id="schemaretryconfig"></a>
<a id="schema_RetryConfig"></a>
<a id="tocSretryconfig"></a>
<a id="tocsretryconfig"></a>

```json
{
  "maxAttempts": 0,
  "maxBackoff": "string",
  "maxDoublings": 0,
  "maxRetryDuration": "string",
  "minBackoff": "string"
}
```

Retry config. These settings determine when a failed task attempt is retried.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxAttempts|integer(int32)|false|none|Number of attempts per task. Cloud Tasks will attempt the task `max_attempts` times (that is, if the first attempt fails, then there will be `max_attempts - 1` retries). Must be >= -1. If unspecified when the queue is created, Cloud Tasks will pick the default. -1 indicates unlimited attempts. This field has the same meaning as [task_retry_limit in queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).|
|maxBackoff|string(google-duration)|false|none|A task will be scheduled for retry between min_backoff and max_backoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. If unspecified when the queue is created, Cloud Tasks will pick the default. The value must be given as a string that indicates the length of time (in seconds) followed by `s` (for "seconds"). For more information on the format, see the documentation for [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration). `max_backoff` will be truncated to the nearest second. This field has the same meaning as [max_backoff_seconds in queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).|
|maxDoublings|integer(int32)|false|none|The time between retries will double `max_doublings` times. A task's retry interval starts at min_backoff, then doubles `max_doublings` times, then increases linearly, and finally retries at intervals of max_backoff up to max_attempts times. For example, if min_backoff is 10s, max_backoff is 300s, and `max_doublings` is 3, then the a task will first be retried in 10s. The retry interval will double three times, and then increase linearly by 2^3 * 10s. Finally, the task will retry at intervals of max_backoff until the task has been attempted max_attempts times. Thus, the requests will retry at 10s, 20s, 40s, 80s, 160s, 240s, 300s, 300s, .... If unspecified when the queue is created, Cloud Tasks will pick the default. This field has the same meaning as [max_doublings in queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).|
|maxRetryDuration|string(google-duration)|false|none|If positive, `max_retry_duration` specifies the time limit for retrying a failed task, measured from when the task was first attempted. Once `max_retry_duration` time has passed *and* the task has been attempted max_attempts times, no further attempts will be made and the task will be deleted. If zero, then the task age is unlimited. If unspecified when the queue is created, Cloud Tasks will pick the default. The value must be given as a string that indicates the length of time (in seconds) followed by `s` (for "seconds"). For the maximum possible value or the format, see the documentation for [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration). `max_retry_duration` will be truncated to the nearest second. This field has the same meaning as [task_age_limit in queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).|
|minBackoff|string(google-duration)|false|none|A task will be scheduled for retry between min_backoff and max_backoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. If unspecified when the queue is created, Cloud Tasks will pick the default. The value must be given as a string that indicates the length of time (in seconds) followed by `s` (for "seconds"). For more information on the format, see the documentation for [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration). `min_backoff` will be truncated to the nearest second. This field has the same meaning as [min_backoff_seconds in queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).|

<h2 id="tocS_RunTaskRequest">RunTaskRequest</h2>
<!-- backwards compatibility -->
<a id="schemaruntaskrequest"></a>
<a id="schema_RunTaskRequest"></a>
<a id="tocSruntaskrequest"></a>
<a id="tocsruntaskrequest"></a>

```json
{
  "responseView": "VIEW_UNSPECIFIED"
}
```

Request message for forcing a task to run now using RunTask.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responseView|string|false|none|The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|responseView|VIEW_UNSPECIFIED|
|responseView|BASIC|
|responseView|FULL|

<h2 id="tocS_SetIamPolicyRequest">SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetiampolicyrequest"></a>
<a id="schema_SetIamPolicyRequest"></a>
<a id="tocSsetiampolicyrequest"></a>
<a id="tocssetiampolicyrequest"></a>

```json
{
  "policy": {
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  }
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

<h2 id="tocS_StackdriverLoggingConfig">StackdriverLoggingConfig</h2>
<!-- backwards compatibility -->
<a id="schemastackdriverloggingconfig"></a>
<a id="schema_StackdriverLoggingConfig"></a>
<a id="tocSstackdriverloggingconfig"></a>
<a id="tocsstackdriverloggingconfig"></a>

```json
{
  "samplingRatio": 0
}
```

Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|samplingRatio|number(double)|false|none|Specifies the fraction of operations to write to [Stackdriver Logging](https://cloud.google.com/logging/docs/). This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the default and means that no operations are logged.|

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

<h2 id="tocS_Task">Task</h2>
<!-- backwards compatibility -->
<a id="schematask"></a>
<a id="schema_Task"></a>
<a id="tocStask"></a>
<a id="tocstask"></a>

```json
{
  "appEngineHttpRequest": {
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
  "createTime": "string",
  "dispatchCount": 0,
  "dispatchDeadline": "string",
  "firstAttempt": {
    "dispatchTime": "string",
    "responseStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "responseTime": "string",
    "scheduleTime": "string"
  },
  "httpRequest": {
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
    "url": "string"
  },
  "lastAttempt": {
    "dispatchTime": "string",
    "responseStatus": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "responseTime": "string",
    "scheduleTime": "string"
  },
  "name": "string",
  "pullMessage": {
    "payload": "string",
    "tag": "string"
  },
  "responseCount": 0,
  "scheduleTime": "string",
  "view": "VIEW_UNSPECIFIED"
}
```

A unit of scheduled work.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appEngineHttpRequest|[AppEngineHttpRequest](#schemaappenginehttprequest)|false|none|HTTP request that is sent to the App Engine app handler. An App Engine task is a task that has AppEngineHttpRequest set.|
|createTime|string(google-datetime)|false|none|Output only. The time that the task was created. `create_time` will be truncated to the nearest second.|
|dispatchCount|integer(int32)|false|none|Output only. The number of attempts dispatched. This count includes attempts which have been dispatched but haven't received a response.|
|dispatchDeadline|string(google-duration)|false|none|The deadline for requests sent to the worker. If the worker does not respond by this deadline then the request is cancelled and the attempt is marked as a `DEADLINE_EXCEEDED` failure. Cloud Tasks will retry the task according to the RetryConfig. Note that when the request is cancelled, Cloud Tasks will stop listening for the response, but whether the worker stops processing depends on the worker. For example, if the worker is stuck, it may not react to cancelled requests. The default and maximum values depend on the type of request: * For HTTP tasks, the default is 10 minutes. The deadline must be in the interval [15 seconds, 30 minutes]. * For App Engine tasks, 0 indicates that the request has the default deadline. The default deadline depends on the [scaling type](https://cloud.google.com/appengine/docs/standard/go/how-instances-are-managed#instance_scaling) of the service: 10 minutes for standard apps with automatic scaling, 24 hours for standard apps with manual and basic scaling, and 60 minutes for flex apps. If the request deadline is set, it must be in the interval [15 seconds, 24 hours 15 seconds]. Regardless of the task's `dispatch_deadline`, the app handler will not run for longer than than the service's timeout. We recommend setting the `dispatch_deadline` to at most a few seconds more than the app handler's timeout. For more information see [Timeouts](https://cloud.google.com/tasks/docs/creating-appengine-handlers#timeouts). The value must be given as a string that indicates the length of time (in seconds) followed by `s` (for "seconds"). For more information on the format, see the documentation for [Duration](https://protobuf.dev/reference/protobuf/google.protobuf/#duration). `dispatch_deadline` will be truncated to the nearest millisecond. The deadline is an approximate deadline.|
|firstAttempt|[Attempt](#schemaattempt)|false|none|Output only. The status of the task's first attempt. Only dispatch_time will be set. The other Attempt information is not retained by Cloud Tasks.|
|httpRequest|[HttpRequest](#schemahttprequest)|false|none|HTTP request that is sent to the task's target. An HTTP task is a task that has HttpRequest set.|
|lastAttempt|[Attempt](#schemaattempt)|false|none|Output only. The status of the task's last attempt.|
|name|string|false|none|Optionally caller-specified in CreateTask. The task name. The task name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID` * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the task's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters. * `TASK_ID` can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters.|
|pullMessage|[PullMessage](#schemapullmessage)|false|none|Pull Message contained in a task in a PULL queue type. This payload type cannot be explicitly set through Cloud Tasks API. Its purpose, currently is to provide backward compatibility with App Engine Task Queue [pull](https://cloud.google.com/appengine/docs/standard/java/taskqueue/pull/) queues to provide a way to inspect contents of pull tasks through the CloudTasks.GetTask.|
|responseCount|integer(int32)|false|none|Output only. The number of attempts which have received a response.|
|scheduleTime|string(google-datetime)|false|none|The time when the task is scheduled to be attempted. For App Engine queues, this is when the task will be attempted or retried. `schedule_time` will be truncated to the nearest microsecond.|
|view|string|false|none|Output only. The view specifies which subset of the Task has been returned.|

#### Enumerated Values

|Property|Value|
|---|---|
|view|VIEW_UNSPECIFIED|
|view|BASIC|
|view|FULL|

<h2 id="tocS_TestIamPermissionsRequest">TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsrequest"></a>
<a id="schema_TestIamPermissionsRequest"></a>
<a id="tocStestiampermissionsrequest"></a>
<a id="tocstestiampermissionsrequest"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Request message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

<h2 id="tocS_TestIamPermissionsResponse">TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsresponse"></a>
<a id="schema_TestIamPermissionsResponse"></a>
<a id="tocStestiampermissionsresponse"></a>
<a id="tocstestiampermissionsresponse"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Response message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|A subset of `TestPermissionsRequest.permissions` that the caller is allowed.|

<h2 id="tocS_UriOverride">UriOverride</h2>
<!-- backwards compatibility -->
<a id="schemaurioverride"></a>
<a id="schema_UriOverride"></a>
<a id="tocSurioverride"></a>
<a id="tocsurioverride"></a>

```json
{
  "host": "string",
  "pathOverride": {
    "path": "string"
  },
  "port": "string",
  "queryOverride": {
    "queryParams": "string"
  },
  "scheme": "SCHEME_UNSPECIFIED",
  "uriOverrideEnforceMode": "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
}
```

URI Override. When specified, all the HTTP tasks inside the queue will be partially or fully overridden depending on the configured values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|string|false|none|Host override. When specified, replaces the host part of the task URL. For example, if the task URL is "https://www.google.com," and host value is set to "example.net", the overridden URI will be changed to "https://example.net." Host value cannot be an empty string (INVALID_ARGUMENT).|
|pathOverride|[PathOverride](#schemapathoverride)|false|none|URI path. When specified, replaces the existing path of the task URL. Setting the path value to an empty string clears the URI path segment.|
|port|string(int64)|false|none|Port override. When specified, replaces the port part of the task URI. For instance, for a URI http://www.google.com/foo and port=123, the overridden URI becomes http://www.google.com:123/foo. Note that the port value must be a positive integer. Setting the port to 0 (Zero) clears the URI port.|
|queryOverride|[QueryOverride](#schemaqueryoverride)|false|none|URI Query. When specified, replaces the query part of the task URI. Setting the query value to an empty string clears the URI query segment.|
|scheme|string|false|none|Scheme override. When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS).|
|uriOverrideEnforceMode|string|false|none|URI Override Enforce Mode When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS.|

#### Enumerated Values

|Property|Value|
|---|---|
|scheme|SCHEME_UNSPECIFIED|
|scheme|HTTP|
|scheme|HTTPS|
|uriOverrideEnforceMode|URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED|
|uriOverrideEnforceMode|IF_NOT_EXISTS|
|uriOverrideEnforceMode|ALWAYS|
