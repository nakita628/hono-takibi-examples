<h1 id="cloud-logging-api">Cloud Logging API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Writes log entries and manages your Cloud Logging configuration.

Base URLs:

* <a href="https://logging.googleapis.com/">https://logging.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/logging/docs/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|
|https://www.googleapis.com/auth/logging.admin|Administrate log data for your projects|
|https://www.googleapis.com/auth/logging.read|View log data for your projects|
|https://www.googleapis.com/auth/logging.write|Submit log data for your projects|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|
|https://www.googleapis.com/auth/logging.admin|Administrate log data for your projects|
|https://www.googleapis.com/auth/logging.read|View log data for your projects|
|https://www.googleapis.com/auth/logging.write|Submit log data for your projects|

<h1 id="cloud-logging-api-entries">entries</h1>

## logging.entries.copy

<a id="opIdlogging.entries.copy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/entries:copy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "destination": "string",
    "filter": "string",
    "name": "string"
  }'
```

`POST /v2/entries:copy`

Copies a set of log entries from a log bucket to a Cloud Storage bucket.

> Body parameter

```json
{
  "destination": "string",
  "filter": "string",
  "name": "string"
}
```

<h3 id="loggingentriescopy-parameters">Parameters</h3>

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
|body|body|[CopyLogEntriesRequest](#schemacopylogentriesrequest)|false|none|
|» destination|body|string|false|Required. Destination to which to copy log entries.|
|» filter|body|string|false|Optional. A filter specifying which log entries to copy. The filter must be no more than 20k characters. An empty filter matches all log entries.|
|» name|body|string|false|Required. Log bucket from which to copy log entries.For example:"projects/my-project/locations/global/buckets/my-source-bucket"|

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

<h3 id="loggingentriescopy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.entries.list

<a id="opIdlogging.entries.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/entries:list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filter": "string",
    "orderBy": "string",
    "pageSize": 0,
    "pageToken": "string",
    "projectIds": [
      "string"
    ],
    "resourceNames": [
      "string"
    ]
  }'
```

`POST /v2/entries:list`

Lists log entries. Use this method to retrieve log entries that originated from a project/folder/organization/billing account. For ways to export log entries, see Exporting Logs (https://cloud.google.com/logging/docs/export).

> Body parameter

```json
{
  "filter": "string",
  "orderBy": "string",
  "pageSize": 0,
  "pageToken": "string",
  "projectIds": [
    "string"
  ],
  "resourceNames": [
    "string"
  ]
}
```

<h3 id="loggingentrieslist-parameters">Parameters</h3>

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
|body|body|[ListLogEntriesRequest](#schemalistlogentriesrequest)|false|none|
|» filter|body|string|false|Optional. A filter that chooses which log entries to return. For more information, see Logging query language (https://cloud.google.com/logging/docs/view/logging-query-language).Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause the filter to return no results. The maximum length of a filter is 20,000 characters.|
|» orderBy|body|string|false|Optional. How the results should be sorted. Presently, the only permitted values are "timestamp asc" (default) and "timestamp desc". The first option returns entries in order of increasing values of LogEntry.timestamp (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their insert_id values.|
|» pageSize|body|integer(int32)|false|Optional. The maximum number of results to return from this request. Default is 50. If the value is negative, the request is rejected.The presence of next_page_token in the response indicates that more results might be available.|
|» pageToken|body|string|false|Optional. If present, then retrieve the next batch of results from the preceding call to this method. page_token must be the value of next_page_token from the previous response. The values of other method parameters should be identical to those in the previous call.|
|» projectIds|body|[string]|false|**Deprecated.** Optional. Deprecated. Use resource_names instead. One or more project identifiers or project numbers from which to retrieve log entries. Example: "my-project-1A".|
|» resourceNames|body|[string]|false|Required. Names of one or more parent resources from which to retrieve log entries: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]May alternatively be one or more views: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]Projects listed in the project_ids field are added to this list. A maximum of 100 resources may be specified in a single request.|

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
  "entries": [
    {
      "errorGroups": [
        {
          "id": "string"
        }
      ],
      "httpRequest": {
        "cacheFillBytes": "string",
        "cacheHit": true,
        "cacheLookup": true,
        "cacheValidatedWithOriginServer": true,
        "latency": "string",
        "protocol": "string",
        "referer": "string",
        "remoteIp": "string",
        "requestMethod": "string",
        "requestSize": "string",
        "requestUrl": "string",
        "responseSize": "string",
        "serverIp": "string",
        "status": 0,
        "userAgent": "string"
      },
      "insertId": "string",
      "jsonPayload": {
        "property1": null,
        "property2": null
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "logName": "string",
      "metadata": {
        "systemLabels": {
          "property1": null,
          "property2": null
        },
        "userLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "operation": {
        "first": true,
        "id": "string",
        "last": true,
        "producer": "string"
      },
      "protoPayload": {
        "property1": null,
        "property2": null
      },
      "receiveTimestamp": "string",
      "resource": {
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "type": "string"
      },
      "severity": "DEFAULT",
      "sourceLocation": {
        "file": "string",
        "function": "string",
        "line": "string"
      },
      "spanId": "string",
      "split": {
        "index": 0,
        "totalSplits": 0,
        "uid": "string"
      },
      "textPayload": "string",
      "timestamp": "string",
      "trace": "string",
      "traceSampled": true
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="loggingentrieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLogEntriesResponse](#schemalistlogentriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.entries.tail

<a id="opIdlogging.entries.tail"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/entries:tail \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bufferWindow": "string",
    "filter": "string",
    "resourceNames": [
      "string"
    ]
  }'
```

`POST /v2/entries:tail`

Streaming read of log entries as they are received. Until the stream is terminated, it will continue reading logs.

> Body parameter

```json
{
  "bufferWindow": "string",
  "filter": "string",
  "resourceNames": [
    "string"
  ]
}
```

<h3 id="loggingentriestail-parameters">Parameters</h3>

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
|body|body|[TailLogEntriesRequest](#schemataillogentriesrequest)|false|none|
|» bufferWindow|body|string(google-duration)|false|Optional. The amount of time to buffer log entries at the server before being returned to prevent out of order results due to late arriving log entries. Valid values are between 0-60000 milliseconds. Defaults to 2000 milliseconds.|
|» filter|body|string|false|Optional. Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause the filter to return no results. The maximum length of a filter is 20,000 characters.|
|» resourceNames|body|[string]|false|Required. Name of a parent resource from which to retrieve log entries: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]May alternatively be one or more views: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]|

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
  "entries": [
    {
      "errorGroups": [
        {
          "id": "string"
        }
      ],
      "httpRequest": {
        "cacheFillBytes": "string",
        "cacheHit": true,
        "cacheLookup": true,
        "cacheValidatedWithOriginServer": true,
        "latency": "string",
        "protocol": "string",
        "referer": "string",
        "remoteIp": "string",
        "requestMethod": "string",
        "requestSize": "string",
        "requestUrl": "string",
        "responseSize": "string",
        "serverIp": "string",
        "status": 0,
        "userAgent": "string"
      },
      "insertId": "string",
      "jsonPayload": {
        "property1": null,
        "property2": null
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "logName": "string",
      "metadata": {
        "systemLabels": {
          "property1": null,
          "property2": null
        },
        "userLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "operation": {
        "first": true,
        "id": "string",
        "last": true,
        "producer": "string"
      },
      "protoPayload": {
        "property1": null,
        "property2": null
      },
      "receiveTimestamp": "string",
      "resource": {
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "type": "string"
      },
      "severity": "DEFAULT",
      "sourceLocation": {
        "file": "string",
        "function": "string",
        "line": "string"
      },
      "spanId": "string",
      "split": {
        "index": 0,
        "totalSplits": 0,
        "uid": "string"
      },
      "textPayload": "string",
      "timestamp": "string",
      "trace": "string",
      "traceSampled": true
    }
  ],
  "suppressionInfo": [
    {
      "reason": "REASON_UNSPECIFIED",
      "suppressedCount": 0
    }
  ]
}
```

<h3 id="loggingentriestail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TailLogEntriesResponse](#schemataillogentriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.entries.write

<a id="opIdlogging.entries.write"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/entries:write \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dryRun": true,
    "entries": [
      {
        "httpRequest": {
          "cacheFillBytes": "string",
          "cacheHit": true,
          "cacheLookup": true,
          "cacheValidatedWithOriginServer": true,
          "latency": "string",
          "protocol": "string",
          "referer": "string",
          "remoteIp": "string",
          "requestMethod": "string",
          "requestSize": "string",
          "requestUrl": "string",
          "responseSize": "string",
          "serverIp": "string",
          "status": 0,
          "userAgent": "string"
        },
        "insertId": "string",
        "jsonPayload": {
          "property1": null,
          "property2": null
        },
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "logName": "string",
        "operation": {
          "first": true,
          "id": "string",
          "last": true,
          "producer": "string"
        },
        "protoPayload": {
          "property1": null,
          "property2": null
        },
        "resource": {
          "labels": {
            "property1": "string",
            "property2": "string"
          },
          "type": "string"
        },
        "severity": "DEFAULT",
        "sourceLocation": {
          "file": "string",
          "function": "string",
          "line": "string"
        },
        "spanId": "string",
        "split": {
          "index": 0,
          "totalSplits": 0,
          "uid": "string"
        },
        "textPayload": "string",
        "timestamp": "string",
        "trace": "string",
        "traceSampled": true
      }
    ],
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "logName": "string",
    "partialSuccess": true,
    "resource": {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "type": "string"
    }
  }'
```

`POST /v2/entries:write`

Writes log entries to Logging. This API method is the only way to send log entries to Logging. This method is used, directly or indirectly, by the Logging agent (fluentd) and all logging libraries configured to use Logging. A single request may contain log entries for a maximum of 1000 different resource names (projects, organizations, billing accounts or folders), where the resource name for a log entry is determined from its logName field.

> Body parameter

```json
{
  "dryRun": true,
  "entries": [
    {
      "httpRequest": {
        "cacheFillBytes": "string",
        "cacheHit": true,
        "cacheLookup": true,
        "cacheValidatedWithOriginServer": true,
        "latency": "string",
        "protocol": "string",
        "referer": "string",
        "remoteIp": "string",
        "requestMethod": "string",
        "requestSize": "string",
        "requestUrl": "string",
        "responseSize": "string",
        "serverIp": "string",
        "status": 0,
        "userAgent": "string"
      },
      "insertId": "string",
      "jsonPayload": {
        "property1": null,
        "property2": null
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "logName": "string",
      "operation": {
        "first": true,
        "id": "string",
        "last": true,
        "producer": "string"
      },
      "protoPayload": {
        "property1": null,
        "property2": null
      },
      "resource": {
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "type": "string"
      },
      "severity": "DEFAULT",
      "sourceLocation": {
        "file": "string",
        "function": "string",
        "line": "string"
      },
      "spanId": "string",
      "split": {
        "index": 0,
        "totalSplits": 0,
        "uid": "string"
      },
      "textPayload": "string",
      "timestamp": "string",
      "trace": "string",
      "traceSampled": true
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "logName": "string",
  "partialSuccess": true,
  "resource": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }
}
```

<h3 id="loggingentrieswrite-parameters">Parameters</h3>

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
|body|body|[WriteLogEntriesRequest](#schemawritelogentriesrequest)|false|none|
|» dryRun|body|boolean|false|Optional. If true, the request should expect normal response, but the entries won't be persisted nor exported. Useful for checking whether the logging API endpoints are working properly before sending valuable data.|
|» entries|body|[[LogEntry](#schemalogentry)]|false|Required. The log entries to send to Logging. The order of log entries in this list does not matter. Values supplied in this method's log_name, resource, and labels fields are copied into those log entries in this list that do not include values for their corresponding fields. For more information, see the LogEntry type.If the timestamp or insert_id fields are missing in log entries, then this method supplies the current time or a unique identifier, respectively. The supplied values are chosen so that, among the log entries that did not supply their own values, the entries earlier in the list will sort before the entries later in the list. See the entries.list method.Log entries with timestamps that are more than the logs retention period (https://cloud.google.com/logging/quotas) in the past or more than 24 hours in the future will not be available when calling entries.list. However, those log entries can still be exported with LogSinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).To improve throughput and to avoid exceeding the quota limit (https://cloud.google.com/logging/quotas) for calls to entries.write, you should try to include several log entries in this list, rather than calling this method for each individual log entry.|
|» labels|body|object|false|Optional. Default labels that are added to the labels field of all log entries in entries. If a log entry already has a label with the same key as a label in this parameter, then the log entry's label is not changed. See LogEntry.|
|» » **additionalProperties**|body|string|false|none|
|» logName|body|string|false|Optional. A default log resource name that is assigned to all log entries in entries that do not specify a value for log_name: projects/[PROJECT_ID]/logs/[LOG_ID] organizations/[ORGANIZATION_ID]/logs/[LOG_ID] billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID] folders/[FOLDER_ID]/logs/[LOG_ID][LOG_ID] must be URL-encoded. For example: "projects/my-project-id/logs/syslog" "organizations/123/logs/cloudaudit.googleapis.com%2Factivity" The permission logging.logEntries.create is needed on each project, organization, billing account, or folder that is receiving new log entries, whether the resource is specified in logName or in an individual log entry.|
|» partialSuccess|body|boolean|false|Optional. Whether a batch's valid entries should be written even if some other entry failed due to a permanent error such as INVALID_ARGUMENT or PERMISSION_DENIED. If any entry failed, then the response status is the response status of one of the failed entries. The response will include error details in WriteLogEntriesPartialErrors.log_entry_errors keyed by the entries' zero-based index in the entries. Failed requests for which no entries are written will not include per-entry errors.|
|» resource|body|[MonitoredResource](#schemamonitoredresource)|false|Optional. A default monitored resource object that is assigned to all log entries in entries that do not specify a value for resource. Example: { "type": "gce_instance", "labels": { "zone": "us-central1-a", "instance_id": "00000000000000000000" }} See LogEntry.|

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

<h3 id="loggingentrieswrite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[WriteLogEntriesResponse](#schemawritelogentriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.write )
</aside>

<h1 id="cloud-logging-api-monitoredresourcedescriptors">monitoredResourceDescriptors</h1>

## logging.monitoredResourceDescriptors.list

<a id="opIdlogging.monitoredResourceDescriptors.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/monitoredResourceDescriptors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/monitoredResourceDescriptors`

Lists the descriptors for monitored resource types used by Logging.

<h3 id="loggingmonitoredresourcedescriptorslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.|
|pageToken|query|string|false|Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.|
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
  "resourceDescriptors": [
    {
      "description": "string",
      "displayName": "string",
      "labels": [
        {
          "description": "string",
          "key": "string",
          "valueType": "STRING"
        }
      ],
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "name": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="loggingmonitoredresourcedescriptorslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListMonitoredResourceDescriptorsResponse](#schemalistmonitoredresourcedescriptorsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

<h1 id="cloud-logging-api-projects">projects</h1>

## logging.projects.logs.delete

<a id="opIdlogging.projects.logs.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/{logName}`

Deletes all the log entries in a log for the _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.

<h3 id="loggingprojectslogsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logName|path|string|true|Required. The resource name of the log to delete: projects/[PROJECT_ID]/logs/[LOG_ID] organizations/[ORGANIZATION_ID]/logs/[LOG_ID] billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID] folders/[FOLDER_ID]/logs/[LOG_ID][LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog", "organizations/123/logs/cloudaudit.googleapis.com%2Factivity".For more information about log names, see LogEntry.|
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

<h3 id="loggingprojectslogsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.projects.metrics.get

<a id="opIdlogging.projects.metrics.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{metricName}`

Gets a logs-based metric.

<h3 id="loggingprojectsmetricsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|metricName|path|string|true|Required. The resource name of the desired metric: "projects/[PROJECT_ID]/metrics/[METRIC_ID]" |
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
  "bucketName": "string",
  "bucketOptions": {
    "explicitBuckets": {
      "bounds": [
        0
      ]
    },
    "exponentialBuckets": {
      "growthFactor": 0,
      "numFiniteBuckets": 0,
      "scale": 0
    },
    "linearBuckets": {
      "numFiniteBuckets": 0,
      "offset": 0,
      "width": 0
    }
  },
  "createTime": "string",
  "description": "string",
  "disabled": true,
  "filter": "string",
  "labelExtractors": {
    "property1": "string",
    "property2": "string"
  },
  "metricDescriptor": {
    "description": "string",
    "displayName": "string",
    "labels": [
      {
        "description": "string",
        "key": "string",
        "valueType": "STRING"
      }
    ],
    "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
    "metadata": {
      "ingestDelay": "string",
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "samplePeriod": "string"
    },
    "metricKind": "METRIC_KIND_UNSPECIFIED",
    "monitoredResourceTypes": [
      "string"
    ],
    "name": "string",
    "type": "string",
    "unit": "string",
    "valueType": "VALUE_TYPE_UNSPECIFIED"
  },
  "name": "string",
  "updateTime": "string",
  "valueExtractor": "string",
  "version": "V2"
}
```

<h3 id="loggingprojectsmetricsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LogMetric](#schemalogmetric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.projects.metrics.update

<a id="opIdlogging.projects.metrics.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bucketName": "string",
    "bucketOptions": {
      "explicitBuckets": {
        "bounds": [
          0
        ]
      },
      "exponentialBuckets": {
        "growthFactor": 0,
        "numFiniteBuckets": 0,
        "scale": 0
      },
      "linearBuckets": {
        "numFiniteBuckets": 0,
        "offset": 0,
        "width": 0
      }
    },
    "description": "string",
    "disabled": true,
    "filter": "string",
    "labelExtractors": {
      "property1": "string",
      "property2": "string"
    },
    "metricDescriptor": {
      "description": "string",
      "displayName": "string",
      "labels": [
        {
          "description": "string",
          "key": "string",
          "valueType": "STRING"
        }
      ],
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "metadata": {
        "ingestDelay": "string",
        "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
        "samplePeriod": "string"
      },
      "metricKind": "METRIC_KIND_UNSPECIFIED",
      "monitoredResourceTypes": [
        "string"
      ],
      "name": "string",
      "type": "string",
      "unit": "string",
      "valueType": "VALUE_TYPE_UNSPECIFIED"
    },
    "name": "string",
    "valueExtractor": "string",
    "version": "V2"
  }'
```

`PUT /v2/{metricName}`

Creates or updates a logs-based metric.

> Body parameter

```json
{
  "bucketName": "string",
  "bucketOptions": {
    "explicitBuckets": {
      "bounds": [
        0
      ]
    },
    "exponentialBuckets": {
      "growthFactor": 0,
      "numFiniteBuckets": 0,
      "scale": 0
    },
    "linearBuckets": {
      "numFiniteBuckets": 0,
      "offset": 0,
      "width": 0
    }
  },
  "description": "string",
  "disabled": true,
  "filter": "string",
  "labelExtractors": {
    "property1": "string",
    "property2": "string"
  },
  "metricDescriptor": {
    "description": "string",
    "displayName": "string",
    "labels": [
      {
        "description": "string",
        "key": "string",
        "valueType": "STRING"
      }
    ],
    "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
    "metadata": {
      "ingestDelay": "string",
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "samplePeriod": "string"
    },
    "metricKind": "METRIC_KIND_UNSPECIFIED",
    "monitoredResourceTypes": [
      "string"
    ],
    "name": "string",
    "type": "string",
    "unit": "string",
    "valueType": "VALUE_TYPE_UNSPECIFIED"
  },
  "name": "string",
  "valueExtractor": "string",
  "version": "V2"
}
```

<h3 id="loggingprojectsmetricsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|metricName|path|string|true|Required. The resource name of the metric to update: "projects/[PROJECT_ID]/metrics/[METRIC_ID]" The updated metric must be provided in the request and it's name field must be the same as [METRIC_ID] If the metric does not exist in [PROJECT_ID], then a new metric is created.|
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
|body|body|[LogMetric](#schemalogmetric)|false|none|
|» bucketName|body|string|false|Optional. The resource name of the Log Bucket that owns the Log Metric. Only Log Buckets in projects are supported. The bucket has to be in the same project as the metric.For example:projects/my-project/locations/global/buckets/my-bucketIf empty, then the Log Metric is considered a non-Bucket Log Metric.|
|» bucketOptions|body|[BucketOptions](#schemabucketoptions)|false|Optional. The bucket_options are required when the logs-based metric is using a DISTRIBUTION value type and it describes the bucket boundaries used to create a histogram of the extracted values.|
|» description|body|string|false|Optional. A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.|
|» disabled|body|boolean|false|Optional. If set to True, then this metric is disabled and it does not generate any points.|
|» filter|body|string|false|Required. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced_filters) which is used to match log entries. Example: "resource.type=gae_app AND severity>=ERROR" The maximum length of the filter is 20000 characters.|
|» labelExtractors|body|object|false|Optional. A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. Each label key specified in the LabelDescriptor must have an associated extractor expression in this map. The syntax of the extractor expression is the same as for the value_extractor field.The extracted value is converted to the type defined in the label descriptor. If either the extraction or the type conversion fails, the label will have a default value. The default value for a string label is an empty string, for an integer label its 0, and for a boolean label its false.Note that there are upper bounds on the maximum number of labels and the number of active time series that are allowed in a project.|
|» » **additionalProperties**|body|string|false|none|
|» metricDescriptor|body|[MetricDescriptor](#schemametricdescriptor)|false|Optional. The metric descriptor associated with the logs-based metric. If unspecified, it uses a default metric descriptor with a DELTA metric kind, INT64 value type, with no labels and a unit of "1". Such a metric counts the number of log entries matching the filter expression.The name, type, and description fields in the metric_descriptor are output only, and is constructed using the name and description field in the LogMetric.To create a logs-based metric that records a distribution of log values, a DELTA metric kind with a DISTRIBUTION value type must be used along with a value_extractor expression in the LogMetric.Each label in the metric descriptor must have a matching label name as the key and an extractor expression as the value in the label_extractors map.The metric_kind and value_type fields in the metric_descriptor cannot be updated once initially configured. New labels can be added in the metric_descriptor, but existing labels cannot be modified except for their description.|
|» name|body|string|false|Required. The client-assigned metric identifier. Examples: "error_count", "nginx/requests".Metric identifiers are limited to 100 characters and can include only the following characters: A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash character (/) denotes a hierarchy of name pieces, and it cannot be the first character of the name.This field is the [METRIC_ID] part of a metric resource name in the format "projects/PROJECT_ID/metrics/METRIC_ID". Example: If the resource name of a metric is "projects/my-project/metrics/nginx%2Frequests", this field's value is "nginx/requests".|
|» valueExtractor|body|string|false|Optional. A value_extractor is required when using a distribution logs-based metric to extract the values to record from a log entry. Two functions are supported for value extraction: EXTRACT(field) or REGEXP_EXTRACT(field, regex). The arguments are: field: The name of the log entry field from which the value is to be extracted. regex: A regular expression using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified log entry field. The value of the field is converted to a string before applying the regex. It is an error to specify a regex that does not include exactly one capture group.The result of the extraction must be convertible to a double type, as the distribution always records double values. If either the extraction or the conversion to double fails, then those values are not recorded in the distribution.Example: REGEXP_EXTRACT(jsonPayload.request, ".*quantity=(\d+).*")|
|» version|body|string|false|**Deprecated.** Deprecated. The API version that created or updated this metric. The v2 format is used by default and cannot be changed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» version|V2|
|» version|V1|

> Example responses

> 200 Response

```json
{
  "bucketName": "string",
  "bucketOptions": {
    "explicitBuckets": {
      "bounds": [
        0
      ]
    },
    "exponentialBuckets": {
      "growthFactor": 0,
      "numFiniteBuckets": 0,
      "scale": 0
    },
    "linearBuckets": {
      "numFiniteBuckets": 0,
      "offset": 0,
      "width": 0
    }
  },
  "createTime": "string",
  "description": "string",
  "disabled": true,
  "filter": "string",
  "labelExtractors": {
    "property1": "string",
    "property2": "string"
  },
  "metricDescriptor": {
    "description": "string",
    "displayName": "string",
    "labels": [
      {
        "description": "string",
        "key": "string",
        "valueType": "STRING"
      }
    ],
    "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
    "metadata": {
      "ingestDelay": "string",
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "samplePeriod": "string"
    },
    "metricKind": "METRIC_KIND_UNSPECIFIED",
    "monitoredResourceTypes": [
      "string"
    ],
    "name": "string",
    "type": "string",
    "unit": "string",
    "valueType": "VALUE_TYPE_UNSPECIFIED"
  },
  "name": "string",
  "updateTime": "string",
  "valueExtractor": "string",
  "version": "V2"
}
```

<h3 id="loggingprojectsmetricsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LogMetric](#schemalogmetric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.write )
</aside>

## logging.projects.metrics.delete

<a id="opIdlogging.projects.metrics.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/{metricName}`

Deletes a logs-based metric.

<h3 id="loggingprojectsmetricsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|metricName|path|string|true|Required. The resource name of the metric to delete: "projects/[PROJECT_ID]/metrics/[METRIC_ID]" |
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

<h3 id="loggingprojectsmetricsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.write )
</aside>

## logging.projects.locations.operations.get

<a id="opIdlogging.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="loggingprojectslocationsoperationsget-parameters">Parameters</h3>

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

<h3 id="loggingprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.projects.locations.savedQueries.delete

<a id="opIdlogging.projects.locations.savedQueries.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/{name}`

Deletes an existing SavedQuery that was created by the user making the request.

<h3 id="loggingprojectslocationssavedqueriesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The full resource name of the saved query to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For example: "projects/my-project/locations/global/savedQueries/my-saved-query" |
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

<h3 id="loggingprojectslocationssavedqueriesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.projects.locations.buckets.views.patch

<a id="opIdlogging.projects.locations.buckets.views.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "filter": "string"
  }'
```

`PATCH /v2/{name}`

Updates a view on a log bucket. This method replaces the value of the filter field from the existing view with the corresponding value from the new view. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.

> Body parameter

```json
{
  "description": "string",
  "filter": "string"
}
```

<h3 id="loggingprojectslocationsbucketsviewspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The full resource name of the view to update "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket/views/my-view"|
|updateMask|query|string|false|Optional. Field mask that specifies the fields in view that need an update. A field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter|
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
|body|body|[LogView](#schemalogview)|false|none|
|» description|body|string|false|Optional. Describes this view.|
|» filter|body|string|false|Optional. Filter that restricts which log entries in a bucket are visible in this view.Filters must be logical conjunctions that use the AND operator, and they can use any of the following qualifiers: SOURCE(), which specifies a project, folder, organization, or billing account of origin. resource.type, which specifies the resource type. LOG_ID(), which identifies the log.They can also use the negations of these qualifiers with the NOT operator.For example:SOURCE("projects/myproject") AND resource.type = "gce_instance" AND NOT LOG_ID("stdout")|

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
  "description": "string",
  "filter": "string",
  "name": "string",
  "updateTime": "string"
}
```

<h3 id="loggingprojectslocationsbucketsviewspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LogView](#schemalogview)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.projects.locations.list

<a id="opIdlogging.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="loggingprojectslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource that owns the locations collection, if applicable.|
|filter|query|string|false|A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).|
|pageSize|query|integer|false|The maximum number of results to return. If not set, the service selects a default.|
|pageToken|query|string|false|A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.|
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

<h3 id="loggingprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.projects.locations.operations.list

<a id="opIdlogging.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

<h3 id="loggingprojectslocationsoperationslist-parameters">Parameters</h3>

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

<h3 id="loggingprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.projects.locations.operations.cancel

<a id="opIdlogging.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

> Body parameter

```json
{}
```

<h3 id="loggingprojectslocationsoperationscancel-parameters">Parameters</h3>

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
|body|body|[CancelOperationRequest](#schemacanceloperationrequest)|false|none|

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

<h3 id="loggingprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.projects.locations.buckets.undelete

<a id="opIdlogging.projects.locations.buckets.undelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:undelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2/{name}:undelete`

Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.

> Body parameter

```json
{}
```

<h3 id="loggingprojectslocationsbucketsundelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The full resource name of the bucket to undelete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"|
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
|body|body|[UndeleteBucketRequest](#schemaundeletebucketrequest)|false|none|

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

<h3 id="loggingprojectslocationsbucketsundelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.projects.locations.buckets.updateAsync

<a id="opIdlogging.projects.locations.buckets.updateAsync"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string:updateAsync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "analyticsEnabled": true,
    "cmekSettings": {
      "kmsKeyName": "string"
    },
    "description": "string",
    "indexConfigs": [
      {
        "fieldPath": "string",
        "type": "INDEX_TYPE_UNSPECIFIED"
      }
    ],
    "locked": true,
    "restrictedFields": [
      "string"
    ],
    "retentionDays": 0
  }'
```

`POST /v2/{name}:updateAsync`

Updates a log bucket asynchronously.If the bucket has a lifecycle_state of DELETE_REQUESTED, then FAILED_PRECONDITION will be returned.After a bucket has been created, the bucket's location cannot be changed.

> Body parameter

```json
{
  "analyticsEnabled": true,
  "cmekSettings": {
    "kmsKeyName": "string"
  },
  "description": "string",
  "indexConfigs": [
    {
      "fieldPath": "string",
      "type": "INDEX_TYPE_UNSPECIFIED"
    }
  ],
  "locked": true,
  "restrictedFields": [
    "string"
  ],
  "retentionDays": 0
}
```

<h3 id="loggingprojectslocationsbucketsupdateasync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The full resource name of the bucket to update. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"|
|updateMask|query|string|false|Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=retention_days|
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
|body|body|[LogBucket](#schemalogbucket)|false|none|
|» analyticsEnabled|body|boolean|false|Optional. Whether log analytics is enabled for this bucket.Once enabled, log analytics features cannot be disabled.|
|» cmekSettings|body|[CmekSettings](#schemacmeksettings)|false|Optional. The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed.|
|» description|body|string|false|Optional. Describes this bucket.|
|» indexConfigs|body|[[IndexConfig](#schemaindexconfig)]|false|Optional. A list of indexed fields and related configuration data.|
|» locked|body|boolean|false|Optional. Whether the bucket is locked.The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.|
|» restrictedFields|body|[string]|false|Optional. Log entry field paths that are denied access in this bucket.The following fields and their children are eligible: textPayload, jsonPayload, protoPayload, httpRequest, labels, sourceLocation.Restricting a repeated field will restrict all values. Adding a parent will block all child fields. (e.g. foo.bar will block foo.bar.baz)|
|» retentionDays|body|integer(int32)|false|Optional. Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.|

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

<h3 id="loggingprojectslocationsbucketsupdateasync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.projects.locations.buckets.list

<a id="opIdlogging.projects.locations.buckets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/buckets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/buckets`

Lists log buckets.

<h3 id="loggingprojectslocationsbucketslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource whose buckets are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" Note: The locations portion of the resource must be specified, but supplying the character - in place of LOCATION_ID will return all buckets.|
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.|
|pageToken|query|string|false|Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.|
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
  "buckets": [
    {
      "analyticsEnabled": true,
      "cmekSettings": {
        "kmsKeyName": "string",
        "kmsKeyVersionName": "string",
        "name": "string",
        "serviceAccountId": "string"
      },
      "createTime": "string",
      "description": "string",
      "indexConfigs": [
        {
          "createTime": "string",
          "fieldPath": "string",
          "type": "INDEX_TYPE_UNSPECIFIED"
        }
      ],
      "lifecycleState": "LIFECYCLE_STATE_UNSPECIFIED",
      "locked": true,
      "name": "string",
      "restrictedFields": [
        "string"
      ],
      "retentionDays": 0,
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="loggingprojectslocationsbucketslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBucketsResponse](#schemalistbucketsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.projects.locations.buckets.create

<a id="opIdlogging.projects.locations.buckets.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/buckets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "analyticsEnabled": true,
    "cmekSettings": {
      "kmsKeyName": "string"
    },
    "description": "string",
    "indexConfigs": [
      {
        "fieldPath": "string",
        "type": "INDEX_TYPE_UNSPECIFIED"
      }
    ],
    "locked": true,
    "restrictedFields": [
      "string"
    ],
    "retentionDays": 0
  }'
```

`POST /v2/{parent}/buckets`

Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.

> Body parameter

```json
{
  "analyticsEnabled": true,
  "cmekSettings": {
    "kmsKeyName": "string"
  },
  "description": "string",
  "indexConfigs": [
    {
      "fieldPath": "string",
      "type": "INDEX_TYPE_UNSPECIFIED"
    }
  ],
  "locked": true,
  "restrictedFields": [
    "string"
  ],
  "retentionDays": 0
}
```

<h3 id="loggingprojectslocationsbucketscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"|
|bucketId|query|string|false|Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods.|
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
|body|body|[LogBucket](#schemalogbucket)|false|none|
|» analyticsEnabled|body|boolean|false|Optional. Whether log analytics is enabled for this bucket.Once enabled, log analytics features cannot be disabled.|
|» cmekSettings|body|[CmekSettings](#schemacmeksettings)|false|Optional. The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed.|
|» description|body|string|false|Optional. Describes this bucket.|
|» indexConfigs|body|[[IndexConfig](#schemaindexconfig)]|false|Optional. A list of indexed fields and related configuration data.|
|» locked|body|boolean|false|Optional. Whether the bucket is locked.The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.|
|» restrictedFields|body|[string]|false|Optional. Log entry field paths that are denied access in this bucket.The following fields and their children are eligible: textPayload, jsonPayload, protoPayload, httpRequest, labels, sourceLocation.Restricting a repeated field will restrict all values. Adding a parent will block all child fields. (e.g. foo.bar will block foo.bar.baz)|
|» retentionDays|body|integer(int32)|false|Optional. Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.|

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
  "analyticsEnabled": true,
  "cmekSettings": {
    "kmsKeyName": "string",
    "kmsKeyVersionName": "string",
    "name": "string",
    "serviceAccountId": "string"
  },
  "createTime": "string",
  "description": "string",
  "indexConfigs": [
    {
      "createTime": "string",
      "fieldPath": "string",
      "type": "INDEX_TYPE_UNSPECIFIED"
    }
  ],
  "lifecycleState": "LIFECYCLE_STATE_UNSPECIFIED",
  "locked": true,
  "name": "string",
  "restrictedFields": [
    "string"
  ],
  "retentionDays": 0,
  "updateTime": "string"
}
```

<h3 id="loggingprojectslocationsbucketscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LogBucket](#schemalogbucket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.projects.locations.buckets.createAsync

<a id="opIdlogging.projects.locations.buckets.createAsync"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/buckets:createAsync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "analyticsEnabled": true,
    "cmekSettings": {
      "kmsKeyName": "string"
    },
    "description": "string",
    "indexConfigs": [
      {
        "fieldPath": "string",
        "type": "INDEX_TYPE_UNSPECIFIED"
      }
    ],
    "locked": true,
    "restrictedFields": [
      "string"
    ],
    "retentionDays": 0
  }'
```

`POST /v2/{parent}/buckets:createAsync`

Creates a log bucket asynchronously that can be used to store log entries.After a bucket has been created, the bucket's location cannot be changed.

> Body parameter

```json
{
  "analyticsEnabled": true,
  "cmekSettings": {
    "kmsKeyName": "string"
  },
  "description": "string",
  "indexConfigs": [
    {
      "fieldPath": "string",
      "type": "INDEX_TYPE_UNSPECIFIED"
    }
  ],
  "locked": true,
  "restrictedFields": [
    "string"
  ],
  "retentionDays": 0
}
```

<h3 id="loggingprojectslocationsbucketscreateasync-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"|
|bucketId|query|string|false|Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods.|
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
|body|body|[LogBucket](#schemalogbucket)|false|none|
|» analyticsEnabled|body|boolean|false|Optional. Whether log analytics is enabled for this bucket.Once enabled, log analytics features cannot be disabled.|
|» cmekSettings|body|[CmekSettings](#schemacmeksettings)|false|Optional. The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed.|
|» description|body|string|false|Optional. Describes this bucket.|
|» indexConfigs|body|[[IndexConfig](#schemaindexconfig)]|false|Optional. A list of indexed fields and related configuration data.|
|» locked|body|boolean|false|Optional. Whether the bucket is locked.The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.|
|» restrictedFields|body|[string]|false|Optional. Log entry field paths that are denied access in this bucket.The following fields and their children are eligible: textPayload, jsonPayload, protoPayload, httpRequest, labels, sourceLocation.Restricting a repeated field will restrict all values. Adding a parent will block all child fields. (e.g. foo.bar will block foo.bar.baz)|
|» retentionDays|body|integer(int32)|false|Optional. Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.|

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

<h3 id="loggingprojectslocationsbucketscreateasync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.projects.exclusions.list

<a id="opIdlogging.projects.exclusions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/exclusions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/exclusions`

Lists all the exclusions on the _Default sink in a parent resource.

<h3 id="loggingprojectsexclusionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource whose exclusions are to be listed. "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" |
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.|
|pageToken|query|string|false|Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.|
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
  "exclusions": [
    {
      "createTime": "string",
      "description": "string",
      "disabled": true,
      "filter": "string",
      "name": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="loggingprojectsexclusionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListExclusionsResponse](#schemalistexclusionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.projects.exclusions.create

<a id="opIdlogging.projects.exclusions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/exclusions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "disabled": true,
    "filter": "string"
  }'
```

`POST /v2/{parent}/exclusions`

Creates a new exclusion in the _Default sink in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.

> Body parameter

```json
{
  "description": "string",
  "disabled": true,
  "filter": "string"
}
```

<h3 id="loggingprojectsexclusionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource in which to create the exclusion: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" For examples:"projects/my-logging-project" "organizations/123456789"|
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
|body|body|[LogExclusion](#schemalogexclusion)|false|none|
|» description|body|string|false|Optional. A description of this exclusion.|
|» disabled|body|boolean|false|Optional. If set to True, then this exclusion is disabled and it does not exclude any log entries. You can update an exclusion to change the value of this field.|
|» filter|body|string|false|Required. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries) that matches the log entries to be excluded. By using the sample function (https://cloud.google.com/logging/docs/view/advanced-queries#sample), you can exclude less than 100% of the matching log entries.For example, the following query matches 99% of low-severity log entries from Google Cloud Storage buckets:resource.type=gcs_bucket severity<ERROR sample(insertId, 0.99)|

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
  "description": "string",
  "disabled": true,
  "filter": "string",
  "name": "string",
  "updateTime": "string"
}
```

<h3 id="loggingprojectsexclusionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LogExclusion](#schemalogexclusion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.projects.locations.buckets.links.list

<a id="opIdlogging.projects.locations.buckets.links.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/links \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/links`

Lists links.

<h3 id="loggingprojectslocationsbucketslinkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource whose links are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" |
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request.|
|pageToken|query|string|false|Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response.|
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
  "links": [
    {
      "bigqueryDataset": {
        "datasetId": "string"
      },
      "createTime": "string",
      "description": "string",
      "lifecycleState": "LIFECYCLE_STATE_UNSPECIFIED",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="loggingprojectslocationsbucketslinkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLinksResponse](#schemalistlinksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.projects.locations.buckets.links.create

<a id="opIdlogging.projects.locations.buckets.links.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/links \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bigqueryDataset": {},
    "description": "string"
  }'
```

`POST /v2/{parent}/links`

Asynchronously creates a linked dataset in BigQuery which makes it possible to use BigQuery to read the logs stored in the log bucket. A log bucket may currently only contain one link.

> Body parameter

```json
{
  "bigqueryDataset": {},
  "description": "string"
}
```

<h3 id="loggingprojectslocationsbucketslinkscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The full resource name of the bucket to create a link for. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" |
|linkId|query|string|false|Required. The ID to use for the link. The link_id can have up to 100 characters. A valid link_id must only have alphanumeric characters and underscores within it.|
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
|body|body|[Link](#schemalink)|false|none|
|» bigqueryDataset|body|[BigQueryDataset](#schemabigquerydataset)|false|Optional. The information of a BigQuery Dataset. When a link is created, a BigQuery dataset is created along with it, in the same project as the LogBucket it's linked to. This dataset will also have BigQuery Views corresponding to the LogViews in the bucket.|
|» description|body|string|false|Optional. Describes this link.The maximum length of the description is 8000 characters.|

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

<h3 id="loggingprojectslocationsbucketslinkscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.projects.logs.list

<a id="opIdlogging.projects.logs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/logs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/logs`

Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.

<h3 id="loggingprojectslogslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name to list logs for: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]|
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.|
|pageToken|query|string|false|Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.|
|resourceNames|query|[string]|false|Optional. List of resource names to list logs for: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]To support legacy queries, it could also be: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]The resource name in the parent field is added to this list.|
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
  "logNames": [
    "string"
  ],
  "nextPageToken": "string"
}
```

<h3 id="loggingprojectslogslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLogsResponse](#schemalistlogsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.projects.metrics.list

<a id="opIdlogging.projects.metrics.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/metrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/metrics`

Lists logs-based metrics.

<h3 id="loggingprojectsmetricslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project containing the metrics: "projects/[PROJECT_ID]" |
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.|
|pageToken|query|string|false|Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.|
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
  "metrics": [
    {
      "bucketName": "string",
      "bucketOptions": {
        "explicitBuckets": {
          "bounds": [
            0
          ]
        },
        "exponentialBuckets": {
          "growthFactor": 0,
          "numFiniteBuckets": 0,
          "scale": 0
        },
        "linearBuckets": {
          "numFiniteBuckets": 0,
          "offset": 0,
          "width": 0
        }
      },
      "createTime": "string",
      "description": "string",
      "disabled": true,
      "filter": "string",
      "labelExtractors": {
        "property1": "string",
        "property2": "string"
      },
      "metricDescriptor": {
        "description": "string",
        "displayName": "string",
        "labels": [
          {
            "description": "string",
            "key": "string",
            "valueType": "STRING"
          }
        ],
        "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
        "metadata": {
          "ingestDelay": "string",
          "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
          "samplePeriod": "string"
        },
        "metricKind": "METRIC_KIND_UNSPECIFIED",
        "monitoredResourceTypes": [
          "string"
        ],
        "name": "string",
        "type": "string",
        "unit": "string",
        "valueType": "VALUE_TYPE_UNSPECIFIED"
      },
      "name": "string",
      "updateTime": "string",
      "valueExtractor": "string",
      "version": "V2"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="loggingprojectsmetricslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLogMetricsResponse](#schemalistlogmetricsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.projects.metrics.create

<a id="opIdlogging.projects.metrics.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/metrics \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bucketName": "string",
    "bucketOptions": {
      "explicitBuckets": {
        "bounds": [
          0
        ]
      },
      "exponentialBuckets": {
        "growthFactor": 0,
        "numFiniteBuckets": 0,
        "scale": 0
      },
      "linearBuckets": {
        "numFiniteBuckets": 0,
        "offset": 0,
        "width": 0
      }
    },
    "description": "string",
    "disabled": true,
    "filter": "string",
    "labelExtractors": {
      "property1": "string",
      "property2": "string"
    },
    "metricDescriptor": {
      "description": "string",
      "displayName": "string",
      "labels": [
        {
          "description": "string",
          "key": "string",
          "valueType": "STRING"
        }
      ],
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "metadata": {
        "ingestDelay": "string",
        "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
        "samplePeriod": "string"
      },
      "metricKind": "METRIC_KIND_UNSPECIFIED",
      "monitoredResourceTypes": [
        "string"
      ],
      "name": "string",
      "type": "string",
      "unit": "string",
      "valueType": "VALUE_TYPE_UNSPECIFIED"
    },
    "name": "string",
    "valueExtractor": "string",
    "version": "V2"
  }'
```

`POST /v2/{parent}/metrics`

Creates a logs-based metric.

> Body parameter

```json
{
  "bucketName": "string",
  "bucketOptions": {
    "explicitBuckets": {
      "bounds": [
        0
      ]
    },
    "exponentialBuckets": {
      "growthFactor": 0,
      "numFiniteBuckets": 0,
      "scale": 0
    },
    "linearBuckets": {
      "numFiniteBuckets": 0,
      "offset": 0,
      "width": 0
    }
  },
  "description": "string",
  "disabled": true,
  "filter": "string",
  "labelExtractors": {
    "property1": "string",
    "property2": "string"
  },
  "metricDescriptor": {
    "description": "string",
    "displayName": "string",
    "labels": [
      {
        "description": "string",
        "key": "string",
        "valueType": "STRING"
      }
    ],
    "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
    "metadata": {
      "ingestDelay": "string",
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "samplePeriod": "string"
    },
    "metricKind": "METRIC_KIND_UNSPECIFIED",
    "monitoredResourceTypes": [
      "string"
    ],
    "name": "string",
    "type": "string",
    "unit": "string",
    "valueType": "VALUE_TYPE_UNSPECIFIED"
  },
  "name": "string",
  "valueExtractor": "string",
  "version": "V2"
}
```

<h3 id="loggingprojectsmetricscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the project in which to create the metric: "projects/[PROJECT_ID]" The new metric must be provided in the request.|
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
|body|body|[LogMetric](#schemalogmetric)|false|none|
|» bucketName|body|string|false|Optional. The resource name of the Log Bucket that owns the Log Metric. Only Log Buckets in projects are supported. The bucket has to be in the same project as the metric.For example:projects/my-project/locations/global/buckets/my-bucketIf empty, then the Log Metric is considered a non-Bucket Log Metric.|
|» bucketOptions|body|[BucketOptions](#schemabucketoptions)|false|Optional. The bucket_options are required when the logs-based metric is using a DISTRIBUTION value type and it describes the bucket boundaries used to create a histogram of the extracted values.|
|» description|body|string|false|Optional. A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.|
|» disabled|body|boolean|false|Optional. If set to True, then this metric is disabled and it does not generate any points.|
|» filter|body|string|false|Required. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced_filters) which is used to match log entries. Example: "resource.type=gae_app AND severity>=ERROR" The maximum length of the filter is 20000 characters.|
|» labelExtractors|body|object|false|Optional. A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. Each label key specified in the LabelDescriptor must have an associated extractor expression in this map. The syntax of the extractor expression is the same as for the value_extractor field.The extracted value is converted to the type defined in the label descriptor. If either the extraction or the type conversion fails, the label will have a default value. The default value for a string label is an empty string, for an integer label its 0, and for a boolean label its false.Note that there are upper bounds on the maximum number of labels and the number of active time series that are allowed in a project.|
|» » **additionalProperties**|body|string|false|none|
|» metricDescriptor|body|[MetricDescriptor](#schemametricdescriptor)|false|Optional. The metric descriptor associated with the logs-based metric. If unspecified, it uses a default metric descriptor with a DELTA metric kind, INT64 value type, with no labels and a unit of "1". Such a metric counts the number of log entries matching the filter expression.The name, type, and description fields in the metric_descriptor are output only, and is constructed using the name and description field in the LogMetric.To create a logs-based metric that records a distribution of log values, a DELTA metric kind with a DISTRIBUTION value type must be used along with a value_extractor expression in the LogMetric.Each label in the metric descriptor must have a matching label name as the key and an extractor expression as the value in the label_extractors map.The metric_kind and value_type fields in the metric_descriptor cannot be updated once initially configured. New labels can be added in the metric_descriptor, but existing labels cannot be modified except for their description.|
|» name|body|string|false|Required. The client-assigned metric identifier. Examples: "error_count", "nginx/requests".Metric identifiers are limited to 100 characters and can include only the following characters: A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash character (/) denotes a hierarchy of name pieces, and it cannot be the first character of the name.This field is the [METRIC_ID] part of a metric resource name in the format "projects/PROJECT_ID/metrics/METRIC_ID". Example: If the resource name of a metric is "projects/my-project/metrics/nginx%2Frequests", this field's value is "nginx/requests".|
|» valueExtractor|body|string|false|Optional. A value_extractor is required when using a distribution logs-based metric to extract the values to record from a log entry. Two functions are supported for value extraction: EXTRACT(field) or REGEXP_EXTRACT(field, regex). The arguments are: field: The name of the log entry field from which the value is to be extracted. regex: A regular expression using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified log entry field. The value of the field is converted to a string before applying the regex. It is an error to specify a regex that does not include exactly one capture group.The result of the extraction must be convertible to a double type, as the distribution always records double values. If either the extraction or the conversion to double fails, then those values are not recorded in the distribution.Example: REGEXP_EXTRACT(jsonPayload.request, ".*quantity=(\d+).*")|
|» version|body|string|false|**Deprecated.** Deprecated. The API version that created or updated this metric. The v2 format is used by default and cannot be changed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» version|V2|
|» version|V1|

> Example responses

> 200 Response

```json
{
  "bucketName": "string",
  "bucketOptions": {
    "explicitBuckets": {
      "bounds": [
        0
      ]
    },
    "exponentialBuckets": {
      "growthFactor": 0,
      "numFiniteBuckets": 0,
      "scale": 0
    },
    "linearBuckets": {
      "numFiniteBuckets": 0,
      "offset": 0,
      "width": 0
    }
  },
  "createTime": "string",
  "description": "string",
  "disabled": true,
  "filter": "string",
  "labelExtractors": {
    "property1": "string",
    "property2": "string"
  },
  "metricDescriptor": {
    "description": "string",
    "displayName": "string",
    "labels": [
      {
        "description": "string",
        "key": "string",
        "valueType": "STRING"
      }
    ],
    "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
    "metadata": {
      "ingestDelay": "string",
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "samplePeriod": "string"
    },
    "metricKind": "METRIC_KIND_UNSPECIFIED",
    "monitoredResourceTypes": [
      "string"
    ],
    "name": "string",
    "type": "string",
    "unit": "string",
    "valueType": "VALUE_TYPE_UNSPECIFIED"
  },
  "name": "string",
  "updateTime": "string",
  "valueExtractor": "string",
  "version": "V2"
}
```

<h3 id="loggingprojectsmetricscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LogMetric](#schemalogmetric)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.write )
</aside>

## logging.projects.locations.recentQueries.list

<a id="opIdlogging.projects.locations.recentQueries.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/recentQueries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/recentQueries`

Lists the RecentQueries that were created by the user making the request.

<h3 id="loggingprojectslocationsrecentquerieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource to which the listed queries belong. "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example:projects/my-project/locations/us-central1Note: The location portion of the resource must be specified, but supplying the character - in place of LOCATION_ID will return all recent queries.|
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.|
|pageToken|query|string|false|Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.|
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
  "recentQueries": [
    {
      "lastRunTime": "string",
      "loggingQuery": {
        "filter": "string",
        "summaryFieldEnd": 0,
        "summaryFieldStart": 0,
        "summaryFields": [
          {
            "field": "string"
          }
        ]
      },
      "name": "string",
      "opsAnalyticsQuery": {
        "sqlQueryText": "string"
      }
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="loggingprojectslocationsrecentquerieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListRecentQueriesResponse](#schemalistrecentqueriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.projects.locations.savedQueries.list

<a id="opIdlogging.projects.locations.savedQueries.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/savedQueries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/savedQueries`

Lists the SavedQueries that were created by the user making the request.

<h3 id="loggingprojectslocationssavedquerieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource to which the listed queries belong. "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/us-central1" Note: The locations portion of the resource must be specified. To get a list of all saved queries, a wildcard character - can be used for LOCATION_ID, for example: "projects/my-project/locations/-" |
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.|
|pageToken|query|string|false|Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.|
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
  "savedQueries": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "loggingQuery": {
        "filter": "string",
        "summaryFieldEnd": 0,
        "summaryFieldStart": 0,
        "summaryFields": [
          {
            "field": "string"
          }
        ]
      },
      "name": "string",
      "opsAnalyticsQuery": {
        "sqlQueryText": "string"
      },
      "updateTime": "string",
      "visibility": "VISIBILITY_UNSPECIFIED"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

<h3 id="loggingprojectslocationssavedquerieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSavedQueriesResponse](#schemalistsavedqueriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.projects.locations.savedQueries.create

<a id="opIdlogging.projects.locations.savedQueries.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/savedQueries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "loggingQuery": {
      "filter": "string",
      "summaryFieldEnd": 0,
      "summaryFieldStart": 0,
      "summaryFields": [
        {
          "field": "string"
        }
      ]
    },
    "opsAnalyticsQuery": {
      "sqlQueryText": "string"
    },
    "visibility": "VISIBILITY_UNSPECIFIED"
  }'
```

`POST /v2/{parent}/savedQueries`

Creates a new SavedQuery for the user making the request.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "loggingQuery": {
    "filter": "string",
    "summaryFieldEnd": 0,
    "summaryFieldStart": 0,
    "summaryFields": [
      {
        "field": "string"
      }
    ]
  },
  "opsAnalyticsQuery": {
    "sqlQueryText": "string"
  },
  "visibility": "VISIBILITY_UNSPECIFIED"
}
```

<h3 id="loggingprojectslocationssavedqueriescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource in which to create the saved query: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/global" "organizations/123456789/locations/us-central1" |
|savedQueryId|query|string|false|Optional. The ID to use for the saved query, which will become the final component of the saved query's resource name.If the saved_query_id is not provided, the system will generate an alphanumeric ID.The saved_query_id is limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.|
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
|body|body|[SavedQuery](#schemasavedquery)|false|none|
|» description|body|string|false|Optional. A human readable description of the saved query.|
|» displayName|body|string|false|Optional. The user specified title for the SavedQuery.|
|» loggingQuery|body|[LoggingQuery](#schemaloggingquery)|false|Logging query that can be executed in Logs Explorer or via Logging API.|
|» opsAnalyticsQuery|body|[OpsAnalyticsQuery](#schemaopsanalyticsquery)|false|Analytics query that can be executed in Log Analytics.|
|» visibility|body|string|false|Required. The visibility status of this query, which determines its ownership.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» visibility|VISIBILITY_UNSPECIFIED|
|» visibility|PRIVATE|
|» visibility|SHARED|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "loggingQuery": {
    "filter": "string",
    "summaryFieldEnd": 0,
    "summaryFieldStart": 0,
    "summaryFields": [
      {
        "field": "string"
      }
    ]
  },
  "name": "string",
  "opsAnalyticsQuery": {
    "sqlQueryText": "string"
  },
  "updateTime": "string",
  "visibility": "VISIBILITY_UNSPECIFIED"
}
```

<h3 id="loggingprojectslocationssavedqueriescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SavedQuery](#schemasavedquery)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.projects.locations.buckets.views.list

<a id="opIdlogging.projects.locations.buckets.views.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/views \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/views`

Lists views on a log bucket.

<h3 id="loggingprojectslocationsbucketsviewslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The bucket whose views are to be listed: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" |
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request.Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.|
|pageToken|query|string|false|Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.|
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
  "views": [
    {
      "createTime": "string",
      "description": "string",
      "filter": "string",
      "name": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="loggingprojectslocationsbucketsviewslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListViewsResponse](#schemalistviewsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.projects.locations.buckets.views.create

<a id="opIdlogging.projects.locations.buckets.views.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/views \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "filter": "string"
  }'
```

`POST /v2/{parent}/views`

Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.

> Body parameter

```json
{
  "description": "string",
  "filter": "string"
}
```

<h3 id="loggingprojectslocationsbucketsviewscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The bucket in which to create the view `"projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]"` For example:"projects/my-project/locations/global/buckets/my-bucket"|
|viewId|query|string|false|Required. A client-assigned identifier such as "my-view". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods.|
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
|body|body|[LogView](#schemalogview)|false|none|
|» description|body|string|false|Optional. Describes this view.|
|» filter|body|string|false|Optional. Filter that restricts which log entries in a bucket are visible in this view.Filters must be logical conjunctions that use the AND operator, and they can use any of the following qualifiers: SOURCE(), which specifies a project, folder, organization, or billing account of origin. resource.type, which specifies the resource type. LOG_ID(), which identifies the log.They can also use the negations of these qualifiers with the NOT operator.For example:SOURCE("projects/myproject") AND resource.type = "gce_instance" AND NOT LOG_ID("stdout")|

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
  "description": "string",
  "filter": "string",
  "name": "string",
  "updateTime": "string"
}
```

<h3 id="loggingprojectslocationsbucketsviewscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LogView](#schemalogview)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.projects.sinks.patch

<a id="opIdlogging.projects.sinks.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bigqueryOptions": {
      "usePartitionedTables": true
    },
    "description": "string",
    "destination": "string",
    "disabled": true,
    "exclusions": [
      {
        "description": "string",
        "disabled": true,
        "filter": "string"
      }
    ],
    "filter": "string",
    "includeChildren": true,
    "outputVersionFormat": "VERSION_FORMAT_UNSPECIFIED"
  }'
```

`PATCH /v2/{sinkName}`

Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

> Body parameter

```json
{
  "bigqueryOptions": {
    "usePartitionedTables": true
  },
  "description": "string",
  "destination": "string",
  "disabled": true,
  "exclusions": [
    {
      "description": "string",
      "disabled": true,
      "filter": "string"
    }
  ],
  "filter": "string",
  "includeChildren": true,
  "outputVersionFormat": "VERSION_FORMAT_UNSPECIFIED"
}
```

<h3 id="loggingprojectssinkspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sinkName|path|string|true|Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"|
|customWriterIdentity|query|string|false|Optional. A service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified if you are routing logs to a destination outside this sink's project. If not specified, a Logging service account will automatically be generated.|
|uniqueWriterIdentity|query|boolean|false|Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) owned by Cloud Logging. It is an error if the old value is true and the new value is set to false or defaulted to false.|
|updateMask|query|string|false|Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:destination,filter,includeChildrenAt some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter|
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
|body|body|[LogSink](#schemalogsink)|false|none|
|» bigqueryOptions|body|[BigQueryOptions](#schemabigqueryoptions)|false|Optional. Options that affect sinks exporting data to BigQuery.|
|» description|body|string|false|Optional. A description of this sink.The maximum length of the description is 8000 characters.|
|» destination|body|string|false|Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).|
|» disabled|body|boolean|false|Optional. If set to true, then this sink is disabled and it does not export any log entries.|
|» exclusions|body|[[LogExclusion](#schemalogexclusion)]|false|Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusion_filters it will not be exported.|
|» filter|body|string|false|Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR|
|» includeChildren|body|boolean|false|Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance|
|» outputVersionFormat|body|string|false|**Deprecated.** Deprecated. This field is unused.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» outputVersionFormat|VERSION_FORMAT_UNSPECIFIED|
|» outputVersionFormat|V2|
|» outputVersionFormat|V1|

> Example responses

> 200 Response

```json
{
  "bigqueryOptions": {
    "usePartitionedTables": true,
    "usesTimestampColumnPartitioning": true
  },
  "createTime": "string",
  "description": "string",
  "destination": "string",
  "disabled": true,
  "exclusions": [
    {
      "createTime": "string",
      "description": "string",
      "disabled": true,
      "filter": "string",
      "name": "string",
      "updateTime": "string"
    }
  ],
  "filter": "string",
  "includeChildren": true,
  "name": "string",
  "outputVersionFormat": "VERSION_FORMAT_UNSPECIFIED",
  "updateTime": "string",
  "writerIdentity": "string"
}
```

<h3 id="loggingprojectssinkspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LogSink](#schemalogsink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

<h1 id="cloud-logging-api-sinks">sinks</h1>

## logging.sinks.list

<a id="opIdlogging.sinks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/sinks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{parent}/sinks`

Lists sinks.

<h3 id="loggingsinkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource whose sinks are to be listed: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" |
|pageSize|query|integer|false|Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response indicates that more results might be available.|
|pageToken|query|string|false|Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from the previous response. The values of other method parameters should be identical to those in the previous call.|
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
  "sinks": [
    {
      "bigqueryOptions": {
        "usePartitionedTables": true,
        "usesTimestampColumnPartitioning": true
      },
      "createTime": "string",
      "description": "string",
      "destination": "string",
      "disabled": true,
      "exclusions": [
        {
          "createTime": "string",
          "description": "string",
          "disabled": true,
          "filter": "string",
          "name": "string",
          "updateTime": "string"
        }
      ],
      "filter": "string",
      "includeChildren": true,
      "name": "string",
      "outputVersionFormat": "VERSION_FORMAT_UNSPECIFIED",
      "updateTime": "string",
      "writerIdentity": "string"
    }
  ]
}
```

<h3 id="loggingsinkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSinksResponse](#schemalistsinksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.sinks.create

<a id="opIdlogging.sinks.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/sinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bigqueryOptions": {
      "usePartitionedTables": true
    },
    "description": "string",
    "destination": "string",
    "disabled": true,
    "exclusions": [
      {
        "description": "string",
        "disabled": true,
        "filter": "string"
      }
    ],
    "filter": "string",
    "includeChildren": true,
    "outputVersionFormat": "VERSION_FORMAT_UNSPECIFIED"
  }'
```

`POST /v2/{parent}/sinks`

Creates a sink that exports specified log entries to a destination. The export begins upon ingress, unless the sink's writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.

> Body parameter

```json
{
  "bigqueryOptions": {
    "usePartitionedTables": true
  },
  "description": "string",
  "destination": "string",
  "disabled": true,
  "exclusions": [
    {
      "description": "string",
      "disabled": true,
      "filter": "string"
    }
  ],
  "filter": "string",
  "includeChildren": true,
  "outputVersionFormat": "VERSION_FORMAT_UNSPECIFIED"
}
```

<h3 id="loggingsinkscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource in which to create the sink: "projects/[PROJECT_ID]" "organizations/[ORGANIZATION_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]" "folders/[FOLDER_ID]" For examples:"projects/my-project" "organizations/123456789"|
|customWriterIdentity|query|string|false|Optional. A service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified if you are routing logs to a destination outside this sink's project. If not specified, a Logging service account will automatically be generated.|
|uniqueWriterIdentity|query|boolean|false|Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's parent is a project, then the value returned as writer_identity is the same group or service account used by Cloud Logging before the addition of writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is owned by a non-project resource such as an organization, then the value of writer_identity will be a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) used by the sinks with the same parent. For more information, see writer_identity in LogSink.|
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
|body|body|[LogSink](#schemalogsink)|false|none|
|» bigqueryOptions|body|[BigQueryOptions](#schemabigqueryoptions)|false|Optional. Options that affect sinks exporting data to BigQuery.|
|» description|body|string|false|Optional. A description of this sink.The maximum length of the description is 8000 characters.|
|» destination|body|string|false|Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).|
|» disabled|body|boolean|false|Optional. If set to true, then this sink is disabled and it does not export any log entries.|
|» exclusions|body|[[LogExclusion](#schemalogexclusion)]|false|Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusion_filters it will not be exported.|
|» filter|body|string|false|Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR|
|» includeChildren|body|boolean|false|Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance|
|» outputVersionFormat|body|string|false|**Deprecated.** Deprecated. This field is unused.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» outputVersionFormat|VERSION_FORMAT_UNSPECIFIED|
|» outputVersionFormat|V2|
|» outputVersionFormat|V1|

> Example responses

> 200 Response

```json
{
  "bigqueryOptions": {
    "usePartitionedTables": true,
    "usesTimestampColumnPartitioning": true
  },
  "createTime": "string",
  "description": "string",
  "destination": "string",
  "disabled": true,
  "exclusions": [
    {
      "createTime": "string",
      "description": "string",
      "disabled": true,
      "filter": "string",
      "name": "string",
      "updateTime": "string"
    }
  ],
  "filter": "string",
  "includeChildren": true,
  "name": "string",
  "outputVersionFormat": "VERSION_FORMAT_UNSPECIFIED",
  "updateTime": "string",
  "writerIdentity": "string"
}
```

<h3 id="loggingsinkscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LogSink](#schemalogsink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.sinks.get

<a id="opIdlogging.sinks.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{sinkName}`

Gets a sink.

<h3 id="loggingsinksget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sinkName|path|string|true|Required. The resource name of the sink: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"|
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
  "bigqueryOptions": {
    "usePartitionedTables": true,
    "usesTimestampColumnPartitioning": true
  },
  "createTime": "string",
  "description": "string",
  "destination": "string",
  "disabled": true,
  "exclusions": [
    {
      "createTime": "string",
      "description": "string",
      "disabled": true,
      "filter": "string",
      "name": "string",
      "updateTime": "string"
    }
  ],
  "filter": "string",
  "includeChildren": true,
  "name": "string",
  "outputVersionFormat": "VERSION_FORMAT_UNSPECIFIED",
  "updateTime": "string",
  "writerIdentity": "string"
}
```

<h3 id="loggingsinksget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LogSink](#schemalogsink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.sinks.update

<a id="opIdlogging.sinks.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bigqueryOptions": {
      "usePartitionedTables": true
    },
    "description": "string",
    "destination": "string",
    "disabled": true,
    "exclusions": [
      {
        "description": "string",
        "disabled": true,
        "filter": "string"
      }
    ],
    "filter": "string",
    "includeChildren": true,
    "outputVersionFormat": "VERSION_FORMAT_UNSPECIFIED"
  }'
```

`PUT /v2/{sinkName}`

Updates a sink. This method replaces the values of the destination and filter fields of the existing sink with the corresponding values from the new sink.The updated sink might also have a new writer_identity; see the unique_writer_identity field.

> Body parameter

```json
{
  "bigqueryOptions": {
    "usePartitionedTables": true
  },
  "description": "string",
  "destination": "string",
  "disabled": true,
  "exclusions": [
    {
      "description": "string",
      "disabled": true,
      "filter": "string"
    }
  ],
  "filter": "string",
  "includeChildren": true,
  "outputVersionFormat": "VERSION_FORMAT_UNSPECIFIED"
}
```

<h3 id="loggingsinksupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sinkName|path|string|true|Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"|
|customWriterIdentity|query|string|false|Optional. A service account provided by the caller that will be used to write the log entries. The format must be serviceAccount:some@email. This field can only be specified if you are routing logs to a destination outside this sink's project. If not specified, a Logging service account will automatically be generated.|
|uniqueWriterIdentity|query|boolean|false|Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the updated sink depends on both the old and new values of this field: If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity. If the old value is false and the new value is true, then writer_identity is changed to a service agent (https://cloud.google.com/iam/docs/service-account-types#service-agents) owned by Cloud Logging. It is an error if the old value is true and the new value is set to false or defaulted to false.|
|updateMask|query|string|false|Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility purposes:destination,filter,includeChildrenAt some point in the future, behavior will be removed and specifying an empty updateMask will be an error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=filter|
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
|body|body|[LogSink](#schemalogsink)|false|none|
|» bigqueryOptions|body|[BigQueryOptions](#schemabigqueryoptions)|false|Optional. Options that affect sinks exporting data to BigQuery.|
|» description|body|string|false|Optional. A description of this sink.The maximum length of the description is 8000 characters.|
|» destination|body|string|false|Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).|
|» disabled|body|boolean|false|Optional. If set to true, then this sink is disabled and it does not export any log entries.|
|» exclusions|body|[[LogExclusion](#schemalogexclusion)]|false|Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusion_filters it will not be exported.|
|» filter|body|string|false|Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR|
|» includeChildren|body|boolean|false|Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance|
|» outputVersionFormat|body|string|false|**Deprecated.** Deprecated. This field is unused.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» outputVersionFormat|VERSION_FORMAT_UNSPECIFIED|
|» outputVersionFormat|V2|
|» outputVersionFormat|V1|

> Example responses

> 200 Response

```json
{
  "bigqueryOptions": {
    "usePartitionedTables": true,
    "usesTimestampColumnPartitioning": true
  },
  "createTime": "string",
  "description": "string",
  "destination": "string",
  "disabled": true,
  "exclusions": [
    {
      "createTime": "string",
      "description": "string",
      "disabled": true,
      "filter": "string",
      "name": "string",
      "updateTime": "string"
    }
  ],
  "filter": "string",
  "includeChildren": true,
  "name": "string",
  "outputVersionFormat": "VERSION_FORMAT_UNSPECIFIED",
  "updateTime": "string",
  "writerIdentity": "string"
}
```

<h3 id="loggingsinksupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LogSink](#schemalogsink)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.sinks.delete

<a id="opIdlogging.sinks.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/{sinkName}`

Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.

<h3 id="loggingsinksdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sinkName|path|string|true|Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_ID]/sinks/[SINK_ID]" "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]" "folders/[FOLDER_ID]/sinks/[SINK_ID]" For example:"projects/my-project/sinks/my-sink"|
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

<h3 id="loggingsinksdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

<h1 id="cloud-logging-api-v2">v2</h1>

## logging.getCmekSettings

<a id="opIdlogging.getCmekSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/cmekSettings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}/cmekSettings`

Gets the Logging CMEK settings for the given resource.Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations, and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.

<h3 id="logginggetcmeksettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource for which to retrieve CMEK settings. "projects/[PROJECT_ID]/cmekSettings" "organizations/[ORGANIZATION_ID]/cmekSettings" "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings" "folders/[FOLDER_ID]/cmekSettings" For example:"organizations/12345/cmekSettings"Note: CMEK for the Log Router can be configured for Google Cloud projects, folders, organizations, and billing accounts. Once configured for an organization, it applies to all projects and folders in the Google Cloud organization.|
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
  "kmsKeyName": "string",
  "kmsKeyVersionName": "string",
  "name": "string",
  "serviceAccountId": "string"
}
```

<h3 id="logginggetcmeksettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CmekSettings](#schemacmeksettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.updateCmekSettings

<a id="opIdlogging.updateCmekSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/cmekSettings \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "kmsKeyName": "string"
  }'
```

`PATCH /v2/{name}/cmekSettings`

Updates the Log Router CMEK settings for the given resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.UpdateCmekSettings fails when any of the following are true: The value of kms_key_name is invalid. The associated service account doesn't have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key. Access to the key is disabled.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.

> Body parameter

```json
{
  "kmsKeyName": "string"
}
```

<h3 id="loggingupdatecmeksettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name for the CMEK settings to update. "projects/[PROJECT_ID]/cmekSettings" "organizations/[ORGANIZATION_ID]/cmekSettings" "billingAccounts/[BILLING_ACCOUNT_ID]/cmekSettings" "folders/[FOLDER_ID]/cmekSettings" For example:"organizations/12345/cmekSettings"Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.|
|updateMask|query|string|false|Optional. Field mask identifying which fields from cmek_settings should be updated. A field will be overwritten if and only if it is in the update mask. Output only fields cannot be updated.See FieldMask for more information.For example: "updateMask=kmsKeyName"|
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
|body|body|[CmekSettings](#schemacmeksettings)|false|none|
|» kmsKeyName|body|string|false|Optional. The resource name for the configured Cloud KMS key.KMS key name format: "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]" For example:"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"To enable CMEK for the Log Router, set this field to a valid kms_key_name for which the associated service account has the needed cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.The Cloud KMS key used by the Log Router can be updated by changing the kms_key_name to a new valid key name or disabled by setting the key name to an empty string. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.To disable CMEK for the Log Router, set this field to an empty string.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.|

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
  "kmsKeyName": "string",
  "kmsKeyVersionName": "string",
  "name": "string",
  "serviceAccountId": "string"
}
```

<h3 id="loggingupdatecmeksettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CmekSettings](#schemacmeksettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

## logging.getSettings

<a id="opIdlogging.getSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/{name}/settings`

Gets the settings for the given resource.Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.See View default resource settings for Logging (https://cloud.google.com/logging/docs/default-settings#view-org-settings) for more information.

<h3 id="logginggetsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource for which to retrieve settings. "projects/[PROJECT_ID]/settings" "organizations/[ORGANIZATION_ID]/settings" "billingAccounts/[BILLING_ACCOUNT_ID]/settings" "folders/[FOLDER_ID]/settings" For example:"organizations/12345/settings"Note: Settings can be retrieved for Google Cloud projects, folders, organizations, and billing accounts.|
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
  "defaultSinkConfig": {
    "exclusions": [
      {
        "createTime": "string",
        "description": "string",
        "disabled": true,
        "filter": "string",
        "name": "string",
        "updateTime": "string"
      }
    ],
    "filter": "string",
    "mode": "FILTER_WRITE_MODE_UNSPECIFIED"
  },
  "disableDefaultSink": true,
  "kmsKeyName": "string",
  "kmsServiceAccountId": "string",
  "loggingServiceAccountId": "string",
  "name": "string",
  "storageLocation": "string"
}
```

<h3 id="logginggetsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Settings](#schemasettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.read )
</aside>

## logging.updateSettings

<a id="opIdlogging.updateSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2/string/settings \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "defaultSinkConfig": {
      "exclusions": [
        {
          "description": "string",
          "disabled": true,
          "filter": "string"
        }
      ],
      "filter": "string",
      "mode": "FILTER_WRITE_MODE_UNSPECIFIED"
    },
    "disableDefaultSink": true,
    "kmsKeyName": "string",
    "storageLocation": "string"
  }'
```

`PATCH /v2/{name}/settings`

Updates the settings for the given resource. This method applies to all feature configurations for organization and folders.UpdateSettings fails when any of the following are true: The value of storage_location either isn't supported by Logging or violates the location OrgPolicy. The default_sink_config field is set, but it has an unspecified filter write mode. The value of kms_key_name is invalid. The associated service account doesn't have the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key. Access to the key is disabled.See Configure default settings for organizations and folders (https://cloud.google.com/logging/docs/default-settings) for more information.

> Body parameter

```json
{
  "defaultSinkConfig": {
    "exclusions": [
      {
        "description": "string",
        "disabled": true,
        "filter": "string"
      }
    ],
    "filter": "string",
    "mode": "FILTER_WRITE_MODE_UNSPECIFIED"
  },
  "disableDefaultSink": true,
  "kmsKeyName": "string",
  "storageLocation": "string"
}
```

<h3 id="loggingupdatesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name for the settings to update. "organizations/[ORGANIZATION_ID]/settings" For example:"organizations/12345/settings"|
|updateMask|query|string|false|Optional. Field mask identifying which fields from settings should be updated. A field will be overwritten if and only if it is in the update mask. Output only fields cannot be updated.See FieldMask for more information.For example: "updateMask=kmsKeyName"|
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
|body|body|[Settings](#schemasettings)|false|none|
|» defaultSinkConfig|body|[DefaultSinkConfig](#schemadefaultsinkconfig)|false|Optional. Overrides the built-in configuration for _Default sink.|
|» disableDefaultSink|body|boolean|false|Optional. If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.|
|» kmsKeyName|body|string|false|Optional. The resource name for the configured Cloud KMS key.KMS key name format: "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]" For example:"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"To enable CMEK, set this field to a valid kms_key_name for which the associated service account has the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key.The Cloud KMS key used by the Log Router can be updated by changing the kms_key_name to a new valid key name.To disable CMEK for the Log Router, set this field to an empty string.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.|
|» storageLocation|body|string|false|Optional. The storage location for the _Default and _Required log buckets of newly created projects and folders, unless the storage location is explicitly provided.Example value: europe-west1.Note: this setting does not affect the location of resources where a location is explicitly provided when created, such as custom log buckets.|

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
  "defaultSinkConfig": {
    "exclusions": [
      {
        "createTime": "string",
        "description": "string",
        "disabled": true,
        "filter": "string",
        "name": "string",
        "updateTime": "string"
      }
    ],
    "filter": "string",
    "mode": "FILTER_WRITE_MODE_UNSPECIFIED"
  },
  "disableDefaultSink": true,
  "kmsKeyName": "string",
  "kmsServiceAccountId": "string",
  "loggingServiceAccountId": "string",
  "name": "string",
  "storageLocation": "string"
}
```

<h3 id="loggingupdatesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Settings](#schemasettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/logging.admin ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/logging.admin )
</aside>

# Schemas

<h2 id="tocS_BigQueryDataset">BigQueryDataset</h2>
<!-- backwards compatibility -->
<a id="schemabigquerydataset"></a>
<a id="schema_BigQueryDataset"></a>
<a id="tocSbigquerydataset"></a>
<a id="tocsbigquerydataset"></a>

```json
{
  "datasetId": "string"
}
```

Describes a BigQuery dataset that was created by a link.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|string|false|read-only|Output only. The full resource name of the BigQuery dataset. The DATASET_ID will match the ID of the link, so the link must match the naming restrictions of BigQuery datasets (alphanumeric characters and underscores only).The dataset will have a resource path of "bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID"|

<h2 id="tocS_BigQueryOptions">BigQueryOptions</h2>
<!-- backwards compatibility -->
<a id="schemabigqueryoptions"></a>
<a id="schema_BigQueryOptions"></a>
<a id="tocSbigqueryoptions"></a>
<a id="tocsbigqueryoptions"></a>

```json
{
  "usePartitionedTables": true,
  "usesTimestampColumnPartitioning": true
}
```

Options that change functionality of a sink exporting data to BigQuery.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usePartitionedTables|boolean|false|none|Optional. Whether to use BigQuery's partition tables (https://cloud.google.com/bigquery/docs/partitioned-tables). By default, Cloud Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax (https://cloud.google.com/bigquery/docs/querying-partitioned-tables) has to be used instead. In both cases, tables are sharded based on UTC timezone.|
|usesTimestampColumnPartitioning|boolean|false|read-only|Output only. True if new timestamp column based partitioning is in use, false if legacy ingress-time partitioning is in use.All new sinks will have this field set true and will use timestamp column based partitioning. If use_partitioned_tables is false, this value has no meaning and will be false. Legacy sinks using partitioned tables will have this field set to false.|

<h2 id="tocS_BucketMetadata">BucketMetadata</h2>
<!-- backwards compatibility -->
<a id="schemabucketmetadata"></a>
<a id="schema_BucketMetadata"></a>
<a id="tocSbucketmetadata"></a>
<a id="tocsbucketmetadata"></a>

```json
{
  "createBucketRequest": {
    "bucket": {
      "analyticsEnabled": true,
      "cmekSettings": {
        "kmsKeyName": "string",
        "kmsKeyVersionName": "string",
        "name": "string",
        "serviceAccountId": "string"
      },
      "createTime": "string",
      "description": "string",
      "indexConfigs": [
        {
          "createTime": "string",
          "fieldPath": "string",
          "type": "INDEX_TYPE_UNSPECIFIED"
        }
      ],
      "lifecycleState": "LIFECYCLE_STATE_UNSPECIFIED",
      "locked": true,
      "name": "string",
      "restrictedFields": [
        "string"
      ],
      "retentionDays": 0,
      "updateTime": "string"
    },
    "bucketId": "string",
    "parent": "string"
  },
  "endTime": "string",
  "startTime": "string",
  "state": "OPERATION_STATE_UNSPECIFIED",
  "updateBucketRequest": {
    "bucket": {
      "analyticsEnabled": true,
      "cmekSettings": {
        "kmsKeyName": "string",
        "kmsKeyVersionName": "string",
        "name": "string",
        "serviceAccountId": "string"
      },
      "createTime": "string",
      "description": "string",
      "indexConfigs": [
        {
          "createTime": "string",
          "fieldPath": "string",
          "type": "INDEX_TYPE_UNSPECIFIED"
        }
      ],
      "lifecycleState": "LIFECYCLE_STATE_UNSPECIFIED",
      "locked": true,
      "name": "string",
      "restrictedFields": [
        "string"
      ],
      "retentionDays": 0,
      "updateTime": "string"
    },
    "name": "string",
    "updateMask": "string"
  }
}
```

Metadata for LongRunningUpdateBucket Operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createBucketRequest|[CreateBucketRequest](#schemacreatebucketrequest)|false|none|LongRunningCreateBucket RPC request.|
|endTime|string(google-datetime)|false|none|The end time of an operation.|
|startTime|string(google-datetime)|false|none|The create time of an operation.|
|state|string|false|read-only|Output only. State of an operation.|
|updateBucketRequest|[UpdateBucketRequest](#schemaupdatebucketrequest)|false|none|LongRunningUpdateBucket RPC request.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|OPERATION_STATE_UNSPECIFIED|
|state|OPERATION_STATE_SCHEDULED|
|state|OPERATION_STATE_WAITING_FOR_PERMISSIONS|
|state|OPERATION_STATE_RUNNING|
|state|OPERATION_STATE_SUCCEEDED|
|state|OPERATION_STATE_FAILED|
|state|OPERATION_STATE_CANCELLED|
|state|OPERATION_STATE_PENDING|

<h2 id="tocS_BucketOptions">BucketOptions</h2>
<!-- backwards compatibility -->
<a id="schemabucketoptions"></a>
<a id="schema_BucketOptions"></a>
<a id="tocSbucketoptions"></a>
<a id="tocsbucketoptions"></a>

```json
{
  "explicitBuckets": {
    "bounds": [
      0
    ]
  },
  "exponentialBuckets": {
    "growthFactor": 0,
    "numFiniteBuckets": 0,
    "scale": 0
  },
  "linearBuckets": {
    "numFiniteBuckets": 0,
    "offset": 0,
    "width": 0
  }
}
```

BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|explicitBuckets|[Explicit](#schemaexplicit)|false|none|The explicit buckets.|
|exponentialBuckets|[Exponential](#schemaexponential)|false|none|The exponential buckets.|
|linearBuckets|[Linear](#schemalinear)|false|none|The linear bucket.|

<h2 id="tocS_CancelOperationRequest">CancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceloperationrequest"></a>
<a id="schema_CancelOperationRequest"></a>
<a id="tocScanceloperationrequest"></a>
<a id="tocscanceloperationrequest"></a>

```json
{}
```

The request message for Operations.CancelOperation.

<h2 id="tocS_CmekSettings">CmekSettings</h2>
<!-- backwards compatibility -->
<a id="schemacmeksettings"></a>
<a id="schema_CmekSettings"></a>
<a id="tocScmeksettings"></a>
<a id="tocscmeksettings"></a>

```json
{
  "kmsKeyName": "string",
  "kmsKeyVersionName": "string",
  "name": "string",
  "serviceAccountId": "string"
}
```

Describes the customer-managed encryption key (CMEK) settings associated with a project, folder, organization, billing account, or flexible resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKeyName|string|false|none|Optional. The resource name for the configured Cloud KMS key.KMS key name format: "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]" For example:"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"To enable CMEK for the Log Router, set this field to a valid kms_key_name for which the associated service account has the needed cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.The Cloud KMS key used by the Log Router can be updated by changing the kms_key_name to a new valid key name or disabled by setting the key name to an empty string. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.To disable CMEK for the Log Router, set this field to an empty string.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.|
|kmsKeyVersionName|string|false|read-only|Output only. The CryptoKeyVersion resource name for the configured Cloud KMS key.KMS key name format: "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]/cryptoKeyVersions/[VERSION]" For example:"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key/cryptoKeyVersions/1"This is a read-only field used to convey the specific configured CryptoKeyVersion of kms_key that has been configured. It will be populated in cases where the CMEK settings are bound to a single key version.If this field is populated, the kms_key is tied to a specific CryptoKeyVersion.|
|name|string|false|read-only|Output only. The resource name of the CMEK settings.|
|serviceAccountId|string|false|read-only|Output only. The service account that will be used by the Log Router to access your Cloud KMS key.Before enabling CMEK for Log Router, you must first assign the cloudkms.cryptoKeyEncrypterDecrypter role to the service account that the Log Router will use to access your Cloud KMS key. Use GetCmekSettings to obtain the service account ID.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.|

<h2 id="tocS_CopyLogEntriesMetadata">CopyLogEntriesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacopylogentriesmetadata"></a>
<a id="schema_CopyLogEntriesMetadata"></a>
<a id="tocScopylogentriesmetadata"></a>
<a id="tocscopylogentriesmetadata"></a>

```json
{
  "cancellationRequested": true,
  "destination": "string",
  "endTime": "string",
  "progress": 0,
  "request": {
    "destination": "string",
    "filter": "string",
    "name": "string"
  },
  "source": "string",
  "startTime": "string",
  "state": "OPERATION_STATE_UNSPECIFIED",
  "verb": "string",
  "writerIdentity": "string"
}
```

Metadata for CopyLogEntries long running operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellationRequested|boolean|false|none|Identifies whether the user has requested cancellation of the operation.|
|destination|string|false|none|Destination to which to copy log entries.For example, a Cloud Storage bucket:"storage.googleapis.com/my-cloud-storage-bucket"|
|endTime|string(google-datetime)|false|none|The end time of an operation.|
|progress|integer(int32)|false|none|Estimated progress of the operation (0 - 100%).|
|request|[CopyLogEntriesRequest](#schemacopylogentriesrequest)|false|none|**Deprecated.** CopyLogEntries RPC request. This field is deprecated and not used.|
|source|string|false|none|Source from which to copy log entries.For example, a log bucket:"projects/my-project/locations/global/buckets/my-source-bucket"|
|startTime|string(google-datetime)|false|none|The create time of an operation.|
|state|string|false|read-only|Output only. State of an operation.|
|verb|string|false|none|Name of the verb executed by the operation.For example,"copy"|
|writerIdentity|string|false|none|The IAM identity of a service account that must be granted access to the destination.If the service account is not granted permission to the destination within an hour, the operation will be cancelled.For example: "serviceAccount:foo@bar.com"|

#### Enumerated Values

|Property|Value|
|---|---|
|state|OPERATION_STATE_UNSPECIFIED|
|state|OPERATION_STATE_SCHEDULED|
|state|OPERATION_STATE_WAITING_FOR_PERMISSIONS|
|state|OPERATION_STATE_RUNNING|
|state|OPERATION_STATE_SUCCEEDED|
|state|OPERATION_STATE_FAILED|
|state|OPERATION_STATE_CANCELLED|
|state|OPERATION_STATE_PENDING|

<h2 id="tocS_CopyLogEntriesRequest">CopyLogEntriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemacopylogentriesrequest"></a>
<a id="schema_CopyLogEntriesRequest"></a>
<a id="tocScopylogentriesrequest"></a>
<a id="tocscopylogentriesrequest"></a>

```json
{
  "destination": "string",
  "filter": "string",
  "name": "string"
}
```

The parameters to CopyLogEntries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destination|string|false|none|Required. Destination to which to copy log entries.|
|filter|string|false|none|Optional. A filter specifying which log entries to copy. The filter must be no more than 20k characters. An empty filter matches all log entries.|
|name|string|false|none|Required. Log bucket from which to copy log entries.For example:"projects/my-project/locations/global/buckets/my-source-bucket"|

<h2 id="tocS_CopyLogEntriesResponse">CopyLogEntriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacopylogentriesresponse"></a>
<a id="schema_CopyLogEntriesResponse"></a>
<a id="tocScopylogentriesresponse"></a>
<a id="tocscopylogentriesresponse"></a>

```json
{
  "logEntriesCopiedCount": "string"
}
```

Response type for CopyLogEntries long running operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logEntriesCopiedCount|string(int64)|false|none|Number of log entries copied.|

<h2 id="tocS_CreateBucketRequest">CreateBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatebucketrequest"></a>
<a id="schema_CreateBucketRequest"></a>
<a id="tocScreatebucketrequest"></a>
<a id="tocscreatebucketrequest"></a>

```json
{
  "bucket": {
    "analyticsEnabled": true,
    "cmekSettings": {
      "kmsKeyName": "string",
      "kmsKeyVersionName": "string",
      "name": "string",
      "serviceAccountId": "string"
    },
    "createTime": "string",
    "description": "string",
    "indexConfigs": [
      {
        "createTime": "string",
        "fieldPath": "string",
        "type": "INDEX_TYPE_UNSPECIFIED"
      }
    ],
    "lifecycleState": "LIFECYCLE_STATE_UNSPECIFIED",
    "locked": true,
    "name": "string",
    "restrictedFields": [
      "string"
    ],
    "retentionDays": 0,
    "updateTime": "string"
  },
  "bucketId": "string",
  "parent": "string"
}
```

The parameters to CreateBucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|[LogBucket](#schemalogbucket)|false|none|Required. The new bucket. The region specified in the new bucket must be compliant with any Location Restriction Org Policy. The name field in the bucket is ignored.|
|bucketId|string|false|none|Required. A client-assigned identifier such as "my-bucket". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods.|
|parent|string|false|none|Required. The resource in which to create the log bucket: "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global"|

<h2 id="tocS_CreateLinkRequest">CreateLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatelinkrequest"></a>
<a id="schema_CreateLinkRequest"></a>
<a id="tocScreatelinkrequest"></a>
<a id="tocscreatelinkrequest"></a>

```json
{
  "link": {
    "bigqueryDataset": {
      "datasetId": "string"
    },
    "createTime": "string",
    "description": "string",
    "lifecycleState": "LIFECYCLE_STATE_UNSPECIFIED",
    "name": "string"
  },
  "linkId": "string",
  "parent": "string"
}
```

The parameters to CreateLink.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|link|[Link](#schemalink)|false|none|Required. The new link.|
|linkId|string|false|none|Required. The ID to use for the link. The link_id can have up to 100 characters. A valid link_id must only have alphanumeric characters and underscores within it.|
|parent|string|false|none|Required. The full resource name of the bucket to create a link for. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" |

<h2 id="tocS_DefaultSinkConfig">DefaultSinkConfig</h2>
<!-- backwards compatibility -->
<a id="schemadefaultsinkconfig"></a>
<a id="schema_DefaultSinkConfig"></a>
<a id="tocSdefaultsinkconfig"></a>
<a id="tocsdefaultsinkconfig"></a>

```json
{
  "exclusions": [
    {
      "createTime": "string",
      "description": "string",
      "disabled": true,
      "filter": "string",
      "name": "string",
      "updateTime": "string"
    }
  ],
  "filter": "string",
  "mode": "FILTER_WRITE_MODE_UNSPECIFIED"
}
```

Describes the custom _Default sink configuration that is used to override the built-in _Default sink configuration in newly created resource containers, such as projects or folders.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exclusions|[[LogExclusion](#schemalogexclusion)]|false|none|Optional. Specifies the set of exclusions to be added to the _Default sink in newly created resource containers.|
|filter|string|false|none|Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERRORTo match all logs, don't add exclusions and use the following line as the value of filter:logName:*Cannot be empty or unset when the value of mode is OVERWRITE.|
|mode|string|false|none|Required. Determines the behavior to apply to the built-in _Default sink inclusion filter.Exclusions are always appended, as built-in _Default sinks have no exclusions.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|FILTER_WRITE_MODE_UNSPECIFIED|
|mode|APPEND|
|mode|OVERWRITE|

<h2 id="tocS_DeleteLinkRequest">DeleteLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletelinkrequest"></a>
<a id="schema_DeleteLinkRequest"></a>
<a id="tocSdeletelinkrequest"></a>
<a id="tocsdeletelinkrequest"></a>

```json
{
  "name": "string"
}
```

The parameters to DeleteLink.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The full resource name of the link to delete. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" |

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

<h2 id="tocS_Explicit">Explicit</h2>
<!-- backwards compatibility -->
<a id="schemaexplicit"></a>
<a id="schema_Explicit"></a>
<a id="tocSexplicit"></a>
<a id="tocsexplicit"></a>

```json
{
  "bounds": [
    0
  ]
}
```

Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): boundsi Lower bound (1 <= i < N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bounds|[number(double)]|false|none|The values must be monotonically increasing.|

<h2 id="tocS_Exponential">Exponential</h2>
<!-- backwards compatibility -->
<a id="schemaexponential"></a>
<a id="schema_Exponential"></a>
<a id="tocSexponential"></a>
<a id="tocsexponential"></a>

```json
{
  "growthFactor": 0,
  "numFiniteBuckets": 0,
  "scale": 0
}
```

Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i).Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|growthFactor|number(double)|false|none|Must be greater than 1.|
|numFiniteBuckets|integer(int32)|false|none|Must be greater than 0.|
|scale|number(double)|false|none|Must be greater than 0.|

<h2 id="tocS_HttpRequest">HttpRequest</h2>
<!-- backwards compatibility -->
<a id="schemahttprequest"></a>
<a id="schema_HttpRequest"></a>
<a id="tocShttprequest"></a>
<a id="tocshttprequest"></a>

```json
{
  "cacheFillBytes": "string",
  "cacheHit": true,
  "cacheLookup": true,
  "cacheValidatedWithOriginServer": true,
  "latency": "string",
  "protocol": "string",
  "referer": "string",
  "remoteIp": "string",
  "requestMethod": "string",
  "requestSize": "string",
  "requestUrl": "string",
  "responseSize": "string",
  "serverIp": "string",
  "status": 0,
  "userAgent": "string"
}
```

A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cacheFillBytes|string(int64)|false|none|The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted.|
|cacheHit|boolean|false|none|Whether or not an entity was served from cache (with or without validation).|
|cacheLookup|boolean|false|none|Whether or not a cache lookup was attempted.|
|cacheValidatedWithOriginServer|boolean|false|none|Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if cache_hit is True.|
|latency|string(google-duration)|false|none|The request processing latency on the server, from the time the request was received until the response was sent.|
|protocol|string|false|none|Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket"|
|referer|string|false|none|The referer URL of the request, as defined in HTTP/1.1 Header Field Definitions (https://datatracker.ietf.org/doc/html/rfc2616#section-14.36).|
|remoteIp|string|false|none|The IP address (IPv4 or IPv6) of the client that issued the HTTP request. This field can include port information. Examples: "192.168.1.1", "10.0.0.1:80", "FE80::0202:B3FF:FE1E:8329".|
|requestMethod|string|false|none|The request method. Examples: "GET", "HEAD", "PUT", "POST".|
|requestSize|string(int64)|false|none|The size of the HTTP request message in bytes, including the request headers and the request body.|
|requestUrl|string|false|none|The scheme (http, https), the host name, the path and the query portion of the URL that was requested. Example: "http://example.com/some/info?color=red".|
|responseSize|string(int64)|false|none|The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body.|
|serverIp|string|false|none|The IP address (IPv4 or IPv6) of the origin server that the request was sent to. This field can include port information. Examples: "192.168.1.1", "10.0.0.1:80", "FE80::0202:B3FF:FE1E:8329".|
|status|integer(int32)|false|none|The response code indicating the status of response. Examples: 200, 404.|
|userAgent|string|false|none|The user agent sent by the client. Example: "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)".|

<h2 id="tocS_IndexConfig">IndexConfig</h2>
<!-- backwards compatibility -->
<a id="schemaindexconfig"></a>
<a id="schema_IndexConfig"></a>
<a id="tocSindexconfig"></a>
<a id="tocsindexconfig"></a>

```json
{
  "createTime": "string",
  "fieldPath": "string",
  "type": "INDEX_TYPE_UNSPECIFIED"
}
```

Configuration for an indexed field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the index was last modified.This is used to return the timestamp, and will be ignored if supplied during update.|
|fieldPath|string|false|none|Required. The LogEntry field path to index.Note that some paths are automatically indexed, and other paths are not eligible for indexing. See indexing documentation( https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.For example: jsonPayload.request.status|
|type|string|false|none|Required. The type of data in this index.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|INDEX_TYPE_UNSPECIFIED|
|type|INDEX_TYPE_STRING|
|type|INDEX_TYPE_INTEGER|

<h2 id="tocS_LabelDescriptor">LabelDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemalabeldescriptor"></a>
<a id="schema_LabelDescriptor"></a>
<a id="tocSlabeldescriptor"></a>
<a id="tocslabeldescriptor"></a>

```json
{
  "description": "string",
  "key": "string",
  "valueType": "STRING"
}
```

A description of a label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A human-readable description for the label.|
|key|string|false|none|The label key.|
|valueType|string|false|none|The type of data that can be assigned to the label.|

#### Enumerated Values

|Property|Value|
|---|---|
|valueType|STRING|
|valueType|BOOL|
|valueType|INT64|

<h2 id="tocS_Linear">Linear</h2>
<!-- backwards compatibility -->
<a id="schemalinear"></a>
<a id="schema_Linear"></a>
<a id="tocSlinear"></a>
<a id="tocslinear"></a>

```json
{
  "numFiniteBuckets": 0,
  "offset": 0,
  "width": 0
}
```

Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i).Lower bound (1 <= i < N): offset + (width * (i - 1)).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numFiniteBuckets|integer(int32)|false|none|Must be greater than 0.|
|offset|number(double)|false|none|Lower bound of the first bucket.|
|width|number(double)|false|none|Must be greater than 0.|

<h2 id="tocS_Link">Link</h2>
<!-- backwards compatibility -->
<a id="schemalink"></a>
<a id="schema_Link"></a>
<a id="tocSlink"></a>
<a id="tocslink"></a>

```json
{
  "bigqueryDataset": {
    "datasetId": "string"
  },
  "createTime": "string",
  "description": "string",
  "lifecycleState": "LIFECYCLE_STATE_UNSPECIFIED",
  "name": "string"
}
```

Describes a link connected to an analytics enabled bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryDataset|[BigQueryDataset](#schemabigquerydataset)|false|none|Optional. The information of a BigQuery Dataset. When a link is created, a BigQuery dataset is created along with it, in the same project as the LogBucket it's linked to. This dataset will also have BigQuery Views corresponding to the LogViews in the bucket.|
|createTime|string(google-datetime)|false|read-only|Output only. The creation timestamp of the link.|
|description|string|false|none|Optional. Describes this link.The maximum length of the description is 8000 characters.|
|lifecycleState|string|false|read-only|Output only. The resource lifecycle state.|
|name|string|false|read-only|Output only. The resource name of the link. The name can have up to 100 characters. A valid link id (at the end of the link name) must only have alphanumeric characters and underscores within it. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]" For example:`projects/my-project/locations/global/buckets/my-bucket/links/my_link|

#### Enumerated Values

|Property|Value|
|---|---|
|lifecycleState|LIFECYCLE_STATE_UNSPECIFIED|
|lifecycleState|ACTIVE|
|lifecycleState|DELETE_REQUESTED|
|lifecycleState|UPDATING|
|lifecycleState|CREATING|
|lifecycleState|FAILED|

<h2 id="tocS_LinkMetadata">LinkMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalinkmetadata"></a>
<a id="schema_LinkMetadata"></a>
<a id="tocSlinkmetadata"></a>
<a id="tocslinkmetadata"></a>

```json
{
  "createLinkRequest": {
    "link": {
      "bigqueryDataset": {
        "datasetId": "string"
      },
      "createTime": "string",
      "description": "string",
      "lifecycleState": "LIFECYCLE_STATE_UNSPECIFIED",
      "name": "string"
    },
    "linkId": "string",
    "parent": "string"
  },
  "deleteLinkRequest": {
    "name": "string"
  },
  "endTime": "string",
  "startTime": "string",
  "state": "OPERATION_STATE_UNSPECIFIED"
}
```

Metadata for long running Link operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createLinkRequest|[CreateLinkRequest](#schemacreatelinkrequest)|false|none|CreateLink RPC request.|
|deleteLinkRequest|[DeleteLinkRequest](#schemadeletelinkrequest)|false|none|DeleteLink RPC request.|
|endTime|string(google-datetime)|false|none|The end time of an operation.|
|startTime|string(google-datetime)|false|none|The start time of an operation.|
|state|string|false|read-only|Output only. State of an operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|OPERATION_STATE_UNSPECIFIED|
|state|OPERATION_STATE_SCHEDULED|
|state|OPERATION_STATE_WAITING_FOR_PERMISSIONS|
|state|OPERATION_STATE_RUNNING|
|state|OPERATION_STATE_SUCCEEDED|
|state|OPERATION_STATE_FAILED|
|state|OPERATION_STATE_CANCELLED|
|state|OPERATION_STATE_PENDING|

<h2 id="tocS_ListBucketsResponse">ListBucketsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbucketsresponse"></a>
<a id="schema_ListBucketsResponse"></a>
<a id="tocSlistbucketsresponse"></a>
<a id="tocslistbucketsresponse"></a>

```json
{
  "buckets": [
    {
      "analyticsEnabled": true,
      "cmekSettings": {
        "kmsKeyName": "string",
        "kmsKeyVersionName": "string",
        "name": "string",
        "serviceAccountId": "string"
      },
      "createTime": "string",
      "description": "string",
      "indexConfigs": [
        {
          "createTime": "string",
          "fieldPath": "string",
          "type": "INDEX_TYPE_UNSPECIFIED"
        }
      ],
      "lifecycleState": "LIFECYCLE_STATE_UNSPECIFIED",
      "locked": true,
      "name": "string",
      "restrictedFields": [
        "string"
      ],
      "retentionDays": 0,
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response from ListBuckets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buckets|[[LogBucket](#schemalogbucket)]|false|none|A list of buckets.|
|nextPageToken|string|false|none|If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.|

<h2 id="tocS_ListExclusionsResponse">ListExclusionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistexclusionsresponse"></a>
<a id="schema_ListExclusionsResponse"></a>
<a id="tocSlistexclusionsresponse"></a>
<a id="tocslistexclusionsresponse"></a>

```json
{
  "exclusions": [
    {
      "createTime": "string",
      "description": "string",
      "disabled": true,
      "filter": "string",
      "name": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Result returned from ListExclusions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exclusions|[[LogExclusion](#schemalogexclusion)]|false|none|A list of exclusions.|
|nextPageToken|string|false|none|If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.|

<h2 id="tocS_ListLinksResponse">ListLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlinksresponse"></a>
<a id="schema_ListLinksResponse"></a>
<a id="tocSlistlinksresponse"></a>
<a id="tocslistlinksresponse"></a>

```json
{
  "links": [
    {
      "bigqueryDataset": {
        "datasetId": "string"
      },
      "createTime": "string",
      "description": "string",
      "lifecycleState": "LIFECYCLE_STATE_UNSPECIFIED",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response from ListLinks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[Link](#schemalink)]|false|none|A list of links.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.|

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

<h2 id="tocS_ListLogEntriesRequest">ListLogEntriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistlogentriesrequest"></a>
<a id="schema_ListLogEntriesRequest"></a>
<a id="tocSlistlogentriesrequest"></a>
<a id="tocslistlogentriesrequest"></a>

```json
{
  "filter": "string",
  "orderBy": "string",
  "pageSize": 0,
  "pageToken": "string",
  "projectIds": [
    "string"
  ],
  "resourceNames": [
    "string"
  ]
}
```

The parameters to ListLogEntries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|Optional. A filter that chooses which log entries to return. For more information, see Logging query language (https://cloud.google.com/logging/docs/view/logging-query-language).Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause the filter to return no results. The maximum length of a filter is 20,000 characters.|
|orderBy|string|false|none|Optional. How the results should be sorted. Presently, the only permitted values are "timestamp asc" (default) and "timestamp desc". The first option returns entries in order of increasing values of LogEntry.timestamp (oldest first), and the second option returns entries in order of decreasing timestamps (newest first). Entries with equal timestamps are returned in order of their insert_id values.|
|pageSize|integer(int32)|false|none|Optional. The maximum number of results to return from this request. Default is 50. If the value is negative, the request is rejected.The presence of next_page_token in the response indicates that more results might be available.|
|pageToken|string|false|none|Optional. If present, then retrieve the next batch of results from the preceding call to this method. page_token must be the value of next_page_token from the previous response. The values of other method parameters should be identical to those in the previous call.|
|projectIds|[string]|false|none|**Deprecated.** Optional. Deprecated. Use resource_names instead. One or more project identifiers or project numbers from which to retrieve log entries. Example: "my-project-1A".|
|resourceNames|[string]|false|none|Required. Names of one or more parent resources from which to retrieve log entries: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]May alternatively be one or more views: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]Projects listed in the project_ids field are added to this list. A maximum of 100 resources may be specified in a single request.|

<h2 id="tocS_ListLogEntriesResponse">ListLogEntriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlogentriesresponse"></a>
<a id="schema_ListLogEntriesResponse"></a>
<a id="tocSlistlogentriesresponse"></a>
<a id="tocslistlogentriesresponse"></a>

```json
{
  "entries": [
    {
      "errorGroups": [
        {
          "id": "string"
        }
      ],
      "httpRequest": {
        "cacheFillBytes": "string",
        "cacheHit": true,
        "cacheLookup": true,
        "cacheValidatedWithOriginServer": true,
        "latency": "string",
        "protocol": "string",
        "referer": "string",
        "remoteIp": "string",
        "requestMethod": "string",
        "requestSize": "string",
        "requestUrl": "string",
        "responseSize": "string",
        "serverIp": "string",
        "status": 0,
        "userAgent": "string"
      },
      "insertId": "string",
      "jsonPayload": {
        "property1": null,
        "property2": null
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "logName": "string",
      "metadata": {
        "systemLabels": {
          "property1": null,
          "property2": null
        },
        "userLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "operation": {
        "first": true,
        "id": "string",
        "last": true,
        "producer": "string"
      },
      "protoPayload": {
        "property1": null,
        "property2": null
      },
      "receiveTimestamp": "string",
      "resource": {
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "type": "string"
      },
      "severity": "DEFAULT",
      "sourceLocation": {
        "file": "string",
        "function": "string",
        "line": "string"
      },
      "spanId": "string",
      "split": {
        "index": 0,
        "totalSplits": 0,
        "uid": "string"
      },
      "textPayload": "string",
      "timestamp": "string",
      "trace": "string",
      "traceSampled": true
    }
  ],
  "nextPageToken": "string"
}
```

Result returned from ListLogEntries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[LogEntry](#schemalogentry)]|false|none|A list of log entries. If entries is empty, nextPageToken may still be returned, indicating that more entries may exist. See nextPageToken for more information.|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.If a value for next_page_token appears and the entries field is empty, it means that the search found no log entries so far but it did not have time to search all the possible log entries. Retry the method with this value for page_token to continue the search. Alternatively, consider speeding up the search by changing your filter to specify a single log name or resource type, or to narrow the time range of the search.|

<h2 id="tocS_ListLogMetricsResponse">ListLogMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlogmetricsresponse"></a>
<a id="schema_ListLogMetricsResponse"></a>
<a id="tocSlistlogmetricsresponse"></a>
<a id="tocslistlogmetricsresponse"></a>

```json
{
  "metrics": [
    {
      "bucketName": "string",
      "bucketOptions": {
        "explicitBuckets": {
          "bounds": [
            0
          ]
        },
        "exponentialBuckets": {
          "growthFactor": 0,
          "numFiniteBuckets": 0,
          "scale": 0
        },
        "linearBuckets": {
          "numFiniteBuckets": 0,
          "offset": 0,
          "width": 0
        }
      },
      "createTime": "string",
      "description": "string",
      "disabled": true,
      "filter": "string",
      "labelExtractors": {
        "property1": "string",
        "property2": "string"
      },
      "metricDescriptor": {
        "description": "string",
        "displayName": "string",
        "labels": [
          {
            "description": "string",
            "key": "string",
            "valueType": "STRING"
          }
        ],
        "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
        "metadata": {
          "ingestDelay": "string",
          "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
          "samplePeriod": "string"
        },
        "metricKind": "METRIC_KIND_UNSPECIFIED",
        "monitoredResourceTypes": [
          "string"
        ],
        "name": "string",
        "type": "string",
        "unit": "string",
        "valueType": "VALUE_TYPE_UNSPECIFIED"
      },
      "name": "string",
      "updateTime": "string",
      "valueExtractor": "string",
      "version": "V2"
    }
  ],
  "nextPageToken": "string"
}
```

Result returned from ListLogMetrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|[[LogMetric](#schemalogmetric)]|false|none|A list of logs-based metrics.|
|nextPageToken|string|false|none|If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.|

<h2 id="tocS_ListLogsResponse">ListLogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlogsresponse"></a>
<a id="schema_ListLogsResponse"></a>
<a id="tocSlistlogsresponse"></a>
<a id="tocslistlogsresponse"></a>

```json
{
  "logNames": [
    "string"
  ],
  "nextPageToken": "string"
}
```

Result returned from ListLogs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logNames|[string]|false|none|A list of log names. For example, "projects/my-project/logs/syslog" or "organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity".|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.|

<h2 id="tocS_ListMonitoredResourceDescriptorsResponse">ListMonitoredResourceDescriptorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmonitoredresourcedescriptorsresponse"></a>
<a id="schema_ListMonitoredResourceDescriptorsResponse"></a>
<a id="tocSlistmonitoredresourcedescriptorsresponse"></a>
<a id="tocslistmonitoredresourcedescriptorsresponse"></a>

```json
{
  "nextPageToken": "string",
  "resourceDescriptors": [
    {
      "description": "string",
      "displayName": "string",
      "labels": [
        {
          "description": "string",
          "key": "string",
          "valueType": "STRING"
        }
      ],
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "name": "string",
      "type": "string"
    }
  ]
}
```

Result returned from ListMonitoredResourceDescriptors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken.|
|resourceDescriptors|[[MonitoredResourceDescriptor](#schemamonitoredresourcedescriptor)]|false|none|A list of resource descriptors.|

<h2 id="tocS_ListOperationsResponse">ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistoperationsresponse"></a>
<a id="schema_ListOperationsResponse"></a>
<a id="tocSlistoperationsresponse"></a>
<a id="tocslistoperationsresponse"></a>

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
|operations|[[Operation](#schemaoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_ListRecentQueriesResponse">ListRecentQueriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistrecentqueriesresponse"></a>
<a id="schema_ListRecentQueriesResponse"></a>
<a id="tocSlistrecentqueriesresponse"></a>
<a id="tocslistrecentqueriesresponse"></a>

```json
{
  "nextPageToken": "string",
  "recentQueries": [
    {
      "lastRunTime": "string",
      "loggingQuery": {
        "filter": "string",
        "summaryFieldEnd": 0,
        "summaryFieldStart": 0,
        "summaryFields": [
          {
            "field": "string"
          }
        ]
      },
      "name": "string",
      "opsAnalyticsQuery": {
        "sqlQueryText": "string"
      }
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

The response from ListRecentQueries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.|
|recentQueries|[[RecentQuery](#schemarecentquery)]|false|none|A list of recent queries.|
|unreachable|[string]|false|none|The unreachable resources. Each resource can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachable. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/recentQueries/[QUERY_ID]" "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example:"projects/my-project/locations/global/recentQueries/12345678" "projects/my-project/locations/global"If there are unreachable resources, the response will first return pages that contain recent queries, and then return pages that contain the unreachable resources.|

<h2 id="tocS_ListSavedQueriesResponse">ListSavedQueriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsavedqueriesresponse"></a>
<a id="schema_ListSavedQueriesResponse"></a>
<a id="tocSlistsavedqueriesresponse"></a>
<a id="tocslistsavedqueriesresponse"></a>

```json
{
  "nextPageToken": "string",
  "savedQueries": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "loggingQuery": {
        "filter": "string",
        "summaryFieldEnd": 0,
        "summaryFieldStart": 0,
        "summaryFields": [
          {
            "field": "string"
          }
        ]
      },
      "name": "string",
      "opsAnalyticsQuery": {
        "sqlQueryText": "string"
      },
      "updateTime": "string",
      "visibility": "VISIBILITY_UNSPECIFIED"
    }
  ],
  "unreachable": [
    "string"
  ]
}
```

The response from ListSavedQueries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.|
|savedQueries|[[SavedQuery](#schemasavedquery)]|false|none|A list of saved queries.|
|unreachable|[string]|false|none|The unreachable resources. It can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachabe. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" "projects/[PROJECT_ID]/locations/[LOCATION_ID]" For example: "projects/my-project/locations/global/savedQueries/12345678" "projects/my-project/locations/global" If there are unreachable resources, the response will first return pages that contain saved queries, and then return pages that contain the unreachable resources.|

<h2 id="tocS_ListSinksResponse">ListSinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsinksresponse"></a>
<a id="schema_ListSinksResponse"></a>
<a id="tocSlistsinksresponse"></a>
<a id="tocslistsinksresponse"></a>

```json
{
  "nextPageToken": "string",
  "sinks": [
    {
      "bigqueryOptions": {
        "usePartitionedTables": true,
        "usesTimestampColumnPartitioning": true
      },
      "createTime": "string",
      "description": "string",
      "destination": "string",
      "disabled": true,
      "exclusions": [
        {
          "createTime": "string",
          "description": "string",
          "disabled": true,
          "filter": "string",
          "name": "string",
          "updateTime": "string"
        }
      ],
      "filter": "string",
      "includeChildren": true,
      "name": "string",
      "outputVersionFormat": "VERSION_FORMAT_UNSPECIFIED",
      "updateTime": "string",
      "writerIdentity": "string"
    }
  ]
}
```

Result returned from ListSinks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.|
|sinks|[[LogSink](#schemalogsink)]|false|none|A list of sinks.|

<h2 id="tocS_ListViewsResponse">ListViewsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistviewsresponse"></a>
<a id="schema_ListViewsResponse"></a>
<a id="tocSlistviewsresponse"></a>
<a id="tocslistviewsresponse"></a>

```json
{
  "nextPageToken": "string",
  "views": [
    {
      "createTime": "string",
      "description": "string",
      "filter": "string",
      "name": "string",
      "updateTime": "string"
    }
  ]
}
```

The response from ListViews.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken.|
|views|[[LogView](#schemalogview)]|false|none|A list of views.|

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
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} |
|locationId|string|false|none|The canonical id for this location. For example: "us-east1".|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"|

<h2 id="tocS_LocationMetadata">LocationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalocationmetadata"></a>
<a id="schema_LocationMetadata"></a>
<a id="tocSlocationmetadata"></a>
<a id="tocslocationmetadata"></a>

```json
{
  "logAnalyticsEnabled": true
}
```

Cloud Logging specific location metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logAnalyticsEnabled|boolean|false|none|Indicates whether or not Log Analytics features are supported in the given location.|

<h2 id="tocS_LogBucket">LogBucket</h2>
<!-- backwards compatibility -->
<a id="schemalogbucket"></a>
<a id="schema_LogBucket"></a>
<a id="tocSlogbucket"></a>
<a id="tocslogbucket"></a>

```json
{
  "analyticsEnabled": true,
  "cmekSettings": {
    "kmsKeyName": "string",
    "kmsKeyVersionName": "string",
    "name": "string",
    "serviceAccountId": "string"
  },
  "createTime": "string",
  "description": "string",
  "indexConfigs": [
    {
      "createTime": "string",
      "fieldPath": "string",
      "type": "INDEX_TYPE_UNSPECIFIED"
    }
  ],
  "lifecycleState": "LIFECYCLE_STATE_UNSPECIFIED",
  "locked": true,
  "name": "string",
  "restrictedFields": [
    "string"
  ],
  "retentionDays": 0,
  "updateTime": "string"
}
```

Describes a repository in which log entries are stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyticsEnabled|boolean|false|none|Optional. Whether log analytics is enabled for this bucket.Once enabled, log analytics features cannot be disabled.|
|cmekSettings|[CmekSettings](#schemacmeksettings)|false|none|Optional. The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed.|
|createTime|string(google-datetime)|false|read-only|Output only. The creation timestamp of the bucket. This is not set for any of the default buckets.|
|description|string|false|none|Optional. Describes this bucket.|
|indexConfigs|[[IndexConfig](#schemaindexconfig)]|false|none|Optional. A list of indexed fields and related configuration data.|
|lifecycleState|string|false|read-only|Output only. The bucket lifecycle state.|
|locked|boolean|false|none|Optional. Whether the bucket is locked.The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.|
|name|string|false|read-only|Output only. The resource name of the bucket.For example:projects/my-project/locations/global/buckets/my-bucketFor a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)For the location of global it is unspecified where log entries are actually stored.After a bucket has been created, the location cannot be changed.|
|restrictedFields|[string]|false|none|Optional. Log entry field paths that are denied access in this bucket.The following fields and their children are eligible: textPayload, jsonPayload, protoPayload, httpRequest, labels, sourceLocation.Restricting a repeated field will restrict all values. Adding a parent will block all child fields. (e.g. foo.bar will block foo.bar.baz)|
|retentionDays|integer(int32)|false|none|Optional. Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last update timestamp of the bucket.|

#### Enumerated Values

|Property|Value|
|---|---|
|lifecycleState|LIFECYCLE_STATE_UNSPECIFIED|
|lifecycleState|ACTIVE|
|lifecycleState|DELETE_REQUESTED|
|lifecycleState|UPDATING|
|lifecycleState|CREATING|
|lifecycleState|FAILED|

<h2 id="tocS_LogEntry">LogEntry</h2>
<!-- backwards compatibility -->
<a id="schemalogentry"></a>
<a id="schema_LogEntry"></a>
<a id="tocSlogentry"></a>
<a id="tocslogentry"></a>

```json
{
  "errorGroups": [
    {
      "id": "string"
    }
  ],
  "httpRequest": {
    "cacheFillBytes": "string",
    "cacheHit": true,
    "cacheLookup": true,
    "cacheValidatedWithOriginServer": true,
    "latency": "string",
    "protocol": "string",
    "referer": "string",
    "remoteIp": "string",
    "requestMethod": "string",
    "requestSize": "string",
    "requestUrl": "string",
    "responseSize": "string",
    "serverIp": "string",
    "status": 0,
    "userAgent": "string"
  },
  "insertId": "string",
  "jsonPayload": {
    "property1": null,
    "property2": null
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "logName": "string",
  "metadata": {
    "systemLabels": {
      "property1": null,
      "property2": null
    },
    "userLabels": {
      "property1": "string",
      "property2": "string"
    }
  },
  "operation": {
    "first": true,
    "id": "string",
    "last": true,
    "producer": "string"
  },
  "protoPayload": {
    "property1": null,
    "property2": null
  },
  "receiveTimestamp": "string",
  "resource": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  },
  "severity": "DEFAULT",
  "sourceLocation": {
    "file": "string",
    "function": "string",
    "line": "string"
  },
  "spanId": "string",
  "split": {
    "index": 0,
    "totalSplits": 0,
    "uid": "string"
  },
  "textPayload": "string",
  "timestamp": "string",
  "trace": "string",
  "traceSampled": true
}
```

An individual entry in a log.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorGroups|[[LogErrorGroup](#schemalogerrorgroup)]|false|read-only|Output only. The Error Reporting (https://cloud.google.com/error-reporting) error groups associated with this LogEntry. Error Reporting sets the values for this field during error group creation.For more information, see View error details( https://cloud.google.com/error-reporting/docs/viewing-errors#view_error_details)This field isn't available during log routing (https://cloud.google.com/logging/docs/routing/overview)|
|httpRequest|[HttpRequest](#schemahttprequest)|false|none|Optional. Information about the HTTP request associated with this log entry, if applicable.|
|insertId|string|false|none|Optional. A unique identifier for the log entry. If you provide a value, then Logging considers other log entries in the same project, with the same timestamp, and with the same insert_id to be duplicates which are removed in a single query result. However, there are no guarantees of de-duplication in the export of logs.If the insert_id is omitted when writing a log entry, the Logging API assigns its own unique identifier in this field.In queries, the insert_id is also used to order log entries that have the same log_name and timestamp values.|
|jsonPayload|object|false|none|The log entry payload, represented as a structure that is expressed as a JSON object.|
|labels|object|false|none|Optional. A map of key, value pairs that provides additional information about the log entry. The labels can be user-defined or system-defined.User-defined labels are arbitrary key, value pairs that you can use to classify logs.System-defined labels are defined by GCP services for platform logs. They have two components - a service namespace component and the attribute name. For example: compute.googleapis.com/resource_name.Cloud Logging truncates label keys that exceed 512 B and label values that exceed 64 KB upon their associated log entry being written. The truncation is indicated by an ellipsis at the end of the character string.|
|logName|string|false|none|Required. The resource name of the log to which this log entry belongs: "projects/[PROJECT_ID]/logs/[LOG_ID]" "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]" "folders/[FOLDER_ID]/logs/[LOG_ID]" A project number may be used in place of PROJECT_ID. The project number is translated to its corresponding PROJECT_ID internally and the log_name field will contain PROJECT_ID in queries and exports.[LOG_ID] must be URL-encoded within log_name. Example: "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity".[LOG_ID] must be less than 512 characters long and can only include the following characters: upper and lower case alphanumeric characters, forward-slash, underscore, hyphen, and period.For backward compatibility, if log_name begins with a forward-slash, such as /projects/..., then the log entry is processed as usual, but the forward-slash is removed. Listing the log entry will not show the leading slash and filtering for a log name with a leading slash will never return any results.|
|metadata|[MonitoredResourceMetadata](#schemamonitoredresourcemetadata)|false|none|**Deprecated.** Output only. Deprecated. This field is not used by Logging. Any value written to it is cleared.|
|operation|[LogEntryOperation](#schemalogentryoperation)|false|none|Optional. Information about an operation associated with the log entry, if applicable.|
|protoPayload|object|false|none|The log entry payload, represented as a protocol buffer. Some Google Cloud Platform services use this field for their log entry payloads.The following protocol buffer types are supported; user-defined types are not supported:"type.googleapis.com/google.cloud.audit.AuditLog" "type.googleapis.com/google.appengine.logging.v1.RequestLog"|
|receiveTimestamp|string(google-datetime)|false|read-only|Output only. The time the log entry was received by Logging.|
|resource|[MonitoredResource](#schemamonitoredresource)|false|none|Required. The monitored resource that produced this log entry.Example: a log entry that reports a database error would be associated with the monitored resource designating the particular database that reported the error.|
|severity|string|false|none|Optional. The severity of the log entry. The default value is LogSeverity.DEFAULT.|
|sourceLocation|[LogEntrySourceLocation](#schemalogentrysourcelocation)|false|none|Optional. Source code location information associated with the log entry, if any.|
|spanId|string|false|none|Optional. The ID of the Cloud Trace (https://cloud.google.com/trace) span associated with the current operation in which the log is being written. For example, if a span has the REST resource name of "projects/some-project/traces/some-trace/spans/some-span-id", then the span_id field is "some-span-id".A Span (https://cloud.google.com/trace/docs/reference/v2/rest/v2/projects.traces/batchWrite#Span) represents a single operation within a trace. Whereas a trace may involve multiple different microservices running on multiple different machines, a span generally corresponds to a single logical operation being performed in a single instance of a microservice on one specific machine. Spans are the nodes within the tree that is a trace.Applications that are instrumented for tracing (https://cloud.google.com/trace/docs/setup) will generally assign a new, unique span ID on each incoming request. It is also common to create and record additional spans corresponding to internal processing elements as well as issuing requests to dependencies.The span ID is expected to be a 16-character, hexadecimal encoding of an 8-byte array and should not be zero. It should be unique within the trace and should, ideally, be generated in a manner that is uniformly random.Example values: 000000000000004a 7a2190356c3fc94b 0000f00300090021 d39223e101960076|
|split|[LogSplit](#schemalogsplit)|false|none|Optional. Information indicating this LogEntry is part of a sequence of multiple log entries split from a single LogEntry.|
|textPayload|string|false|none|The log entry payload, represented as a Unicode string (UTF-8).|
|timestamp|string(google-datetime)|false|none|Optional. The time the event described by the log entry occurred. This time is used to compute the log entry's age and to enforce the logs retention period. If this field is omitted in a new log entry, then Logging assigns it the current time. Timestamps have nanosecond accuracy, but trailing zeros in the fractional seconds might be omitted when the timestamp is displayed.Incoming log entries must have timestamps that don't exceed the logs retention period (https://cloud.google.com/logging/quotas#logs_retention_periods) in the past, and that don't exceed 24 hours in the future. Log entries outside those time boundaries are rejected by Logging.|
|trace|string|false|none|Optional. The REST resource name of the trace being written to Cloud Trace (https://cloud.google.com/trace) in association with this log entry. For example, if your trace data is stored in the Cloud project "my-trace-project" and if the service that is creating the log entry receives a trace header that includes the trace ID "12345", then the service should use "projects/my-trace-project/traces/12345".The trace field provides the link between logs and traces. By using this field, you can navigate from a log entry to a trace.|
|traceSampled|boolean|false|none|Optional. The sampling decision of the span associated with the log entry at the time the log entry was created. This field corresponds to the sampled flag in the W3C trace-context specification (https://www.w3.org/TR/trace-context/#sampled-flag). A non-sampled trace value is still useful as a request correlation identifier. The default is False.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|DEFAULT|
|severity|DEBUG|
|severity|INFO|
|severity|NOTICE|
|severity|WARNING|
|severity|ERROR|
|severity|CRITICAL|
|severity|ALERT|
|severity|EMERGENCY|

<h2 id="tocS_LogEntryOperation">LogEntryOperation</h2>
<!-- backwards compatibility -->
<a id="schemalogentryoperation"></a>
<a id="schema_LogEntryOperation"></a>
<a id="tocSlogentryoperation"></a>
<a id="tocslogentryoperation"></a>

```json
{
  "first": true,
  "id": "string",
  "last": true,
  "producer": "string"
}
```

Additional information about a potentially long-running operation with which a log entry is associated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first|boolean|false|none|Optional. Set this to True if this is the first log entry in the operation.|
|id|string|false|none|Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation.|
|last|boolean|false|none|Optional. Set this to True if this is the last log entry in the operation.|
|producer|string|false|none|Optional. An arbitrary producer identifier. The combination of id and producer must be globally unique. Examples for producer: "MyDivision.MyBigCompany.com", "github.com/MyProject/MyApplication".|

<h2 id="tocS_LogEntrySourceLocation">LogEntrySourceLocation</h2>
<!-- backwards compatibility -->
<a id="schemalogentrysourcelocation"></a>
<a id="schema_LogEntrySourceLocation"></a>
<a id="tocSlogentrysourcelocation"></a>
<a id="tocslogentrysourcelocation"></a>

```json
{
  "file": "string",
  "function": "string",
  "line": "string"
}
```

Additional information about the source code location that produced the log entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|false|none|Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.|
|function|string|false|none|Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python).|
|line|string(int64)|false|none|Optional. Line within the source file. 1-based; 0 indicates no line number available.|

<h2 id="tocS_LogErrorGroup">LogErrorGroup</h2>
<!-- backwards compatibility -->
<a id="schemalogerrorgroup"></a>
<a id="schema_LogErrorGroup"></a>
<a id="tocSlogerrorgroup"></a>
<a id="tocslogerrorgroup"></a>

```json
{
  "id": "string"
}
```

Contains metadata that associates the LogEntry to Error Reporting error groups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The id is a unique identifier for a particular error group; it is the last part of the error group resource name: /project/[PROJECT_ID]/errors/[ERROR_GROUP_ID]. Example: COShysOX0r_51QE. The id is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see Google Cloud Privacy Notice (https://cloud.google.com/terms/cloud-privacy-notice).|

<h2 id="tocS_LogExclusion">LogExclusion</h2>
<!-- backwards compatibility -->
<a id="schemalogexclusion"></a>
<a id="schema_LogExclusion"></a>
<a id="tocSlogexclusion"></a>
<a id="tocslogexclusion"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "disabled": true,
  "filter": "string",
  "name": "string",
  "updateTime": "string"
}
```

Specifies a set of log entries that are filtered out by a sink. If your Google Cloud resource receives a large volume of log entries, you can use exclusions to reduce your chargeable logs. Note that exclusions on organization-level and folder-level sinks don't apply to child resources. Note also that you cannot modify the _Required sink or exclude logs from it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The creation timestamp of the exclusion.This field may not be present for older exclusions.|
|description|string|false|none|Optional. A description of this exclusion.|
|disabled|boolean|false|none|Optional. If set to True, then this exclusion is disabled and it does not exclude any log entries. You can update an exclusion to change the value of this field.|
|filter|string|false|none|Required. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries) that matches the log entries to be excluded. By using the sample function (https://cloud.google.com/logging/docs/view/advanced-queries#sample), you can exclude less than 100% of the matching log entries.For example, the following query matches 99% of low-severity log entries from Google Cloud Storage buckets:resource.type=gcs_bucket severity<ERROR sample(insertId, 0.99)|
|name|string|false|read-only|Output only. A client-assigned identifier, such as "load-balancer-exclusion". Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last update timestamp of the exclusion.This field may not be present for older exclusions.|

<h2 id="tocS_LogLine">LogLine</h2>
<!-- backwards compatibility -->
<a id="schemalogline"></a>
<a id="schema_LogLine"></a>
<a id="tocSlogline"></a>
<a id="tocslogline"></a>

```json
{
  "logMessage": "string",
  "severity": "DEFAULT",
  "sourceLocation": {
    "file": "string",
    "functionName": "string",
    "line": "string"
  },
  "time": "string"
}
```

Application log line emitted while processing a request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logMessage|string|false|none|App-provided log message.|
|severity|string|false|none|Severity of this log entry.|
|sourceLocation|[SourceLocation](#schemasourcelocation)|false|none|Where in the source code this log message was written.|
|time|string(google-datetime)|false|none|Approximate time when this log entry was made.|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|DEFAULT|
|severity|DEBUG|
|severity|INFO|
|severity|NOTICE|
|severity|WARNING|
|severity|ERROR|
|severity|CRITICAL|
|severity|ALERT|
|severity|EMERGENCY|

<h2 id="tocS_LogMetric">LogMetric</h2>
<!-- backwards compatibility -->
<a id="schemalogmetric"></a>
<a id="schema_LogMetric"></a>
<a id="tocSlogmetric"></a>
<a id="tocslogmetric"></a>

```json
{
  "bucketName": "string",
  "bucketOptions": {
    "explicitBuckets": {
      "bounds": [
        0
      ]
    },
    "exponentialBuckets": {
      "growthFactor": 0,
      "numFiniteBuckets": 0,
      "scale": 0
    },
    "linearBuckets": {
      "numFiniteBuckets": 0,
      "offset": 0,
      "width": 0
    }
  },
  "createTime": "string",
  "description": "string",
  "disabled": true,
  "filter": "string",
  "labelExtractors": {
    "property1": "string",
    "property2": "string"
  },
  "metricDescriptor": {
    "description": "string",
    "displayName": "string",
    "labels": [
      {
        "description": "string",
        "key": "string",
        "valueType": "STRING"
      }
    ],
    "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
    "metadata": {
      "ingestDelay": "string",
      "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
      "samplePeriod": "string"
    },
    "metricKind": "METRIC_KIND_UNSPECIFIED",
    "monitoredResourceTypes": [
      "string"
    ],
    "name": "string",
    "type": "string",
    "unit": "string",
    "valueType": "VALUE_TYPE_UNSPECIFIED"
  },
  "name": "string",
  "updateTime": "string",
  "valueExtractor": "string",
  "version": "V2"
}
```

Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metrics can also be used to extract values from logs and create a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketName|string|false|none|Optional. The resource name of the Log Bucket that owns the Log Metric. Only Log Buckets in projects are supported. The bucket has to be in the same project as the metric.For example:projects/my-project/locations/global/buckets/my-bucketIf empty, then the Log Metric is considered a non-Bucket Log Metric.|
|bucketOptions|[BucketOptions](#schemabucketoptions)|false|none|Optional. The bucket_options are required when the logs-based metric is using a DISTRIBUTION value type and it describes the bucket boundaries used to create a histogram of the extracted values.|
|createTime|string(google-datetime)|false|read-only|Output only. The creation timestamp of the metric.This field may not be present for older metrics.|
|description|string|false|none|Optional. A description of this metric, which is used in documentation. The maximum length of the description is 8000 characters.|
|disabled|boolean|false|none|Optional. If set to True, then this metric is disabled and it does not generate any points.|
|filter|string|false|none|Required. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced_filters) which is used to match log entries. Example: "resource.type=gae_app AND severity>=ERROR" The maximum length of the filter is 20000 characters.|
|labelExtractors|object|false|none|Optional. A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value. Each label key specified in the LabelDescriptor must have an associated extractor expression in this map. The syntax of the extractor expression is the same as for the value_extractor field.The extracted value is converted to the type defined in the label descriptor. If either the extraction or the type conversion fails, the label will have a default value. The default value for a string label is an empty string, for an integer label its 0, and for a boolean label its false.Note that there are upper bounds on the maximum number of labels and the number of active time series that are allowed in a project.|
|metricDescriptor|[MetricDescriptor](#schemametricdescriptor)|false|none|Optional. The metric descriptor associated with the logs-based metric. If unspecified, it uses a default metric descriptor with a DELTA metric kind, INT64 value type, with no labels and a unit of "1". Such a metric counts the number of log entries matching the filter expression.The name, type, and description fields in the metric_descriptor are output only, and is constructed using the name and description field in the LogMetric.To create a logs-based metric that records a distribution of log values, a DELTA metric kind with a DISTRIBUTION value type must be used along with a value_extractor expression in the LogMetric.Each label in the metric descriptor must have a matching label name as the key and an extractor expression as the value in the label_extractors map.The metric_kind and value_type fields in the metric_descriptor cannot be updated once initially configured. New labels can be added in the metric_descriptor, but existing labels cannot be modified except for their description.|
|name|string|false|none|Required. The client-assigned metric identifier. Examples: "error_count", "nginx/requests".Metric identifiers are limited to 100 characters and can include only the following characters: A-Z, a-z, 0-9, and the special characters _-.,+!*',()%/. The forward-slash character (/) denotes a hierarchy of name pieces, and it cannot be the first character of the name.This field is the [METRIC_ID] part of a metric resource name in the format "projects/PROJECT_ID/metrics/METRIC_ID". Example: If the resource name of a metric is "projects/my-project/metrics/nginx%2Frequests", this field's value is "nginx/requests".|
|updateTime|string(google-datetime)|false|read-only|Output only. The last update timestamp of the metric.This field may not be present for older metrics.|
|valueExtractor|string|false|none|Optional. A value_extractor is required when using a distribution logs-based metric to extract the values to record from a log entry. Two functions are supported for value extraction: EXTRACT(field) or REGEXP_EXTRACT(field, regex). The arguments are: field: The name of the log entry field from which the value is to be extracted. regex: A regular expression using the Google RE2 syntax (https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified log entry field. The value of the field is converted to a string before applying the regex. It is an error to specify a regex that does not include exactly one capture group.The result of the extraction must be convertible to a double type, as the distribution always records double values. If either the extraction or the conversion to double fails, then those values are not recorded in the distribution.Example: REGEXP_EXTRACT(jsonPayload.request, ".*quantity=(\d+).*")|
|version|string|false|none|**Deprecated.** Deprecated. The API version that created or updated this metric. The v2 format is used by default and cannot be changed.|

#### Enumerated Values

|Property|Value|
|---|---|
|version|V2|
|version|V1|

<h2 id="tocS_LogSink">LogSink</h2>
<!-- backwards compatibility -->
<a id="schemalogsink"></a>
<a id="schema_LogSink"></a>
<a id="tocSlogsink"></a>
<a id="tocslogsink"></a>

```json
{
  "bigqueryOptions": {
    "usePartitionedTables": true,
    "usesTimestampColumnPartitioning": true
  },
  "createTime": "string",
  "description": "string",
  "destination": "string",
  "disabled": true,
  "exclusions": [
    {
      "createTime": "string",
      "description": "string",
      "disabled": true,
      "filter": "string",
      "name": "string",
      "updateTime": "string"
    }
  ],
  "filter": "string",
  "includeChildren": true,
  "name": "string",
  "outputVersionFormat": "VERSION_FORMAT_UNSPECIFIED",
  "updateTime": "string",
  "writerIdentity": "string"
}
```

Describes a sink used to export log entries to one of the following destinations: a Cloud Logging log bucket, a Cloud Storage bucket, a BigQuery dataset, a Pub/Sub topic, a Cloud project.A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryOptions|[BigQueryOptions](#schemabigqueryoptions)|false|none|Optional. Options that affect sinks exporting data to BigQuery.|
|createTime|string(google-datetime)|false|read-only|Output only. The creation timestamp of the sink.This field may not be present for older sinks.|
|description|string|false|none|Optional. A description of this sink.The maximum length of the description is 8000 characters.|
|destination|string|false|none|Required. The export destination: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" "logging.googleapis.com/projects/[PROJECT_ID]" "logging.googleapis.com/projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported. For more information, see Exporting Logs with Sinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).|
|disabled|boolean|false|none|Optional. If set to true, then this sink is disabled and it does not export any log entries.|
|exclusions|[[LogExclusion](#schemalogexclusion)]|false|none|Optional. Log entries that match any of these exclusion filters will not be exported.If a log entry is matched by both filter and one of exclusion_filters it will not be exported.|
|filter|string|false|none|Optional. An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-queries). The only exported log entries are those that are in the resource owning the sink and that match the filter.For example:logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR|
|includeChildren|boolean|false|none|Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's parent resource are available for export. If the field is true, then log entries from all the projects, folders, and billing accounts contained in the sink's parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all projects in the sink's parent.To only export entries from certain child projects, filter on the project part of the log name:logName:("projects/test-project1/" OR "projects/test-project2/") AND resource.type=gce_instance|
|name|string|false|read-only|Output only. The client-assigned sink identifier, unique within the project.For example: "my-syslog-errors-to-pubsub".Sink identifiers are limited to 100 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, periods.First character has to be alphanumeric.|
|outputVersionFormat|string|false|none|**Deprecated.** Deprecated. This field is unused.|
|updateTime|string(google-datetime)|false|read-only|Output only. The last update timestamp of the sink.This field may not be present for older sinks.|
|writerIdentity|string|false|read-only|Output only. An IAM identity—a service account or group—under which Cloud Logging writes the exported log entries to the sink's destination. This field is either set by specifying custom_writer_identity or set automatically by sinks.create and sinks.update based on the value of unique_writer_identity in those methods.Until you grant this identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting Access for a Resource (https://cloud.google.com/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). Consult the destination service's documentation to determine the appropriate IAM roles to assign to the identity.Sinks that have a destination that is a log bucket in the same project as the sink cannot have a writer_identity and no additional permissions are required.|

#### Enumerated Values

|Property|Value|
|---|---|
|outputVersionFormat|VERSION_FORMAT_UNSPECIFIED|
|outputVersionFormat|V2|
|outputVersionFormat|V1|

<h2 id="tocS_LogSplit">LogSplit</h2>
<!-- backwards compatibility -->
<a id="schemalogsplit"></a>
<a id="schema_LogSplit"></a>
<a id="tocSlogsplit"></a>
<a id="tocslogsplit"></a>

```json
{
  "index": 0,
  "totalSplits": 0,
  "uid": "string"
}
```

Additional information used to correlate multiple log entries. Used when a single LogEntry would exceed the Google Cloud Logging size limit and is split across multiple log entries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|The index of this LogEntry in the sequence of split log entries. Log entries are given \|index\| values 0, 1, ..., n-1 for a sequence of n log entries.|
|totalSplits|integer(int32)|false|none|The total number of log entries that the original LogEntry was split into.|
|uid|string|false|none|A globally unique identifier for all log entries in a sequence of split log entries. All log entries with the same \|LogSplit.uid\| are assumed to be part of the same sequence of split log entries.|

<h2 id="tocS_LogView">LogView</h2>
<!-- backwards compatibility -->
<a id="schemalogview"></a>
<a id="schema_LogView"></a>
<a id="tocSlogview"></a>
<a id="tocslogview"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "filter": "string",
  "name": "string",
  "updateTime": "string"
}
```

Describes a view over log entries in a bucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The creation timestamp of the view.|
|description|string|false|none|Optional. Describes this view.|
|filter|string|false|none|Optional. Filter that restricts which log entries in a bucket are visible in this view.Filters must be logical conjunctions that use the AND operator, and they can use any of the following qualifiers: SOURCE(), which specifies a project, folder, organization, or billing account of origin. resource.type, which specifies the resource type. LOG_ID(), which identifies the log.They can also use the negations of these qualifiers with the NOT operator.For example:SOURCE("projects/myproject") AND resource.type = "gce_instance" AND NOT LOG_ID("stdout")|
|name|string|false|read-only|Output only. The resource name of the view.For example:projects/my-project/locations/global/buckets/my-bucket/views/my-view|
|updateTime|string(google-datetime)|false|read-only|Output only. The last update timestamp of the view.|

<h2 id="tocS_LoggingQuery">LoggingQuery</h2>
<!-- backwards compatibility -->
<a id="schemaloggingquery"></a>
<a id="schema_LoggingQuery"></a>
<a id="tocSloggingquery"></a>
<a id="tocsloggingquery"></a>

```json
{
  "filter": "string",
  "summaryFieldEnd": 0,
  "summaryFieldStart": 0,
  "summaryFields": [
    {
      "field": "string"
    }
  ]
}
```

Describes a Cloud Logging query that can be run in Logs Explorer UI or via the logging API.In addition to the query itself, additional information may be stored to capture the display configuration and other UI state used in association with analysis of query results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|Required. An advanced query using the Logging Query Language (https://cloud.google.com/logging/docs/view/logging-query-language). The maximum length of the filter is 20000 characters.|
|summaryFieldEnd|integer(int32)|false|none|Characters will be counted from the end of the string.|
|summaryFieldStart|integer(int32)|false|none|Characters will be counted from the start of the string.|
|summaryFields|[[SummaryField](#schemasummaryfield)]|false|none|Optional. The set of summary fields to display for this saved query.|

<h2 id="tocS_MetricDescriptor">MetricDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemametricdescriptor"></a>
<a id="schema_MetricDescriptor"></a>
<a id="tocSmetricdescriptor"></a>
<a id="tocsmetricdescriptor"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "labels": [
    {
      "description": "string",
      "key": "string",
      "valueType": "STRING"
    }
  ],
  "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
  "metadata": {
    "ingestDelay": "string",
    "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
    "samplePeriod": "string"
  },
  "metricKind": "METRIC_KIND_UNSPECIFIED",
  "monitoredResourceTypes": [
    "string"
  ],
  "name": "string",
  "type": "string",
  "unit": "string",
  "valueType": "VALUE_TYPE_UNSPECIFIED"
}
```

Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A detailed description of the metric, which can be used in documentation.|
|displayName|string|false|none|A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota.|
|labels|[[LabelDescriptor](#schemalabeldescriptor)]|false|none|The set of labels that can be used to describe a specific instance of this metric type. For example, the appengine.googleapis.com/http/server/response_latencies metric type has a label for the HTTP response code, response_code, so you can look at latencies for successful responses or just for responses that failed.|
|launchStage|string|false|none|Optional. The launch stage of the metric definition.|
|metadata|[MetricDescriptorMetadata](#schemametricdescriptormetadata)|false|none|Optional. Metadata which can be used to guide usage of the metric.|
|metricKind|string|false|none|Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metric_kind and value_type might not be supported.|
|monitoredResourceTypes|[string]|false|none|Read-only. If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here.|
|name|string|false|none|The resource name of the metric descriptor.|
|type|string|false|none|The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name custom.googleapis.com or external.googleapis.com. Metric types should use a natural hierarchical grouping. For example: "custom.googleapis.com/invoice/paid/amount" "external.googleapis.com/prometheus/up" "appengine.googleapis.com/http/server/response_latencies" |
|unit|string|false|none|The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values.Different systems might scale the values to be more easily displayed (so a value of 0.02kBy might be displayed as 20By, and a value of 3523kBy might be displayed as 3.5MBy). However, if the unit is kBy, then the value of the metric is always in thousands of bytes, no matter how it might be displayed.If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently 1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as 12005.Alternatively, if you want a custom metric to record data in a more granular way, you can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value 12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).The supported units are a subset of The Unified Code for Units of Measure (https://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT) bit bit By byte s second min minute h hour d day 1 dimensionlessPrefixes (PREFIX) k kilo (10^3) M mega (10^6) G giga (10^9) T tera (10^12) P peta (10^15) E exa (10^18) Z zetta (10^21) Y yotta (10^24) m milli (10^-3) u micro (10^-6) n nano (10^-9) p pico (10^-12) f femto (10^-15) a atto (10^-18) z zepto (10^-21) y yocto (10^-24) Ki kibi (2^10) Mi mebi (2^20) Gi gibi (2^30) Ti tebi (2^40) Pi pebi (2^50)GrammarThe grammar also includes these connectors: / division or ratio (as an infix operator). For examples, kBy/{email} or MiBy/10ms (although you should almost never have /s in a metric unit; rates should always be computed at query time from the underlying cumulative or delta value). . multiplication or composition (as an infix operator). For examples, GBy.d or k{watt}.h.The grammar for a unit is as follows: Expression = Component { "." Component } { "/" Component } ; Component = ( [ PREFIX ] UNIT \| "%" ) [ Annotation ] \| Annotation \| "1" ; Annotation = "{" NAME "}" ; Notes: Annotation is just a comment if it follows a UNIT. If the annotation is used alone, then the unit is equivalent to 1. For examples, {request}/s == 1/s, By{transmitted}/s == By/s. NAME is a sequence of non-blank printable ASCII characters not containing { or }. 1 represents a unitary dimensionless unit (https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such as in 1/s. It is typically used when none of the basic units are appropriate. For example, "new users per day" can be represented as 1/d or {new-users}/d (and a metric value 5 would mean "5 new users). Alternatively, "thousands of page views per day" would be represented as 1000/d or k1/d or k{page_views}/d (and a metric value of 5.3 would mean "5300 page views per day"). % represents dimensionless value of 1/100, and annotates values giving a percentage (so the metric values are typically in the range of 0..100, and a metric value 3 means "3 percent"). 10^2.% indicates a metric contains a ratio, typically in the range 0..1, that will be multiplied by 100 and displayed as a percentage (so a metric value 0.03 means "3 percent").|
|valueType|string|false|none|Whether the measurement is an integer, a floating-point number, etc. Some combinations of metric_kind and value_type might not be supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|launchStage|LAUNCH_STAGE_UNSPECIFIED|
|launchStage|UNIMPLEMENTED|
|launchStage|PRELAUNCH|
|launchStage|EARLY_ACCESS|
|launchStage|ALPHA|
|launchStage|BETA|
|launchStage|GA|
|launchStage|DEPRECATED|
|metricKind|METRIC_KIND_UNSPECIFIED|
|metricKind|GAUGE|
|metricKind|DELTA|
|metricKind|CUMULATIVE|
|valueType|VALUE_TYPE_UNSPECIFIED|
|valueType|BOOL|
|valueType|INT64|
|valueType|DOUBLE|
|valueType|STRING|
|valueType|DISTRIBUTION|
|valueType|MONEY|

<h2 id="tocS_MetricDescriptorMetadata">MetricDescriptorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemametricdescriptormetadata"></a>
<a id="schema_MetricDescriptorMetadata"></a>
<a id="tocSmetricdescriptormetadata"></a>
<a id="tocsmetricdescriptormetadata"></a>

```json
{
  "ingestDelay": "string",
  "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
  "samplePeriod": "string"
}
```

Additional annotations that can be used to guide the usage of a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingestDelay|string(google-duration)|false|none|The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors.|
|launchStage|string|false|none|**Deprecated.** Deprecated. Must use the MetricDescriptor.launch_stage instead.|
|samplePeriod|string(google-duration)|false|none|The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period.|

#### Enumerated Values

|Property|Value|
|---|---|
|launchStage|LAUNCH_STAGE_UNSPECIFIED|
|launchStage|UNIMPLEMENTED|
|launchStage|PRELAUNCH|
|launchStage|EARLY_ACCESS|
|launchStage|ALPHA|
|launchStage|BETA|
|launchStage|GA|
|launchStage|DEPRECATED|

<h2 id="tocS_MonitoredResource">MonitoredResource</h2>
<!-- backwards compatibility -->
<a id="schemamonitoredresource"></a>
<a id="schema_MonitoredResource"></a>
<a id="tocSmonitoredresource"></a>
<a id="tocsmonitoredresource"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "type": "string"
}
```

An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": { "type": "gce_instance", "labels": { "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" }}

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone".|
|type|string|false|none|Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance. Some descriptors include the service name in the type; for example, the type of a Datastream stream is datastream.googleapis.com/Stream.|

<h2 id="tocS_MonitoredResourceDescriptor">MonitoredResourceDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemamonitoredresourcedescriptor"></a>
<a id="schema_MonitoredResourceDescriptor"></a>
<a id="tocSmonitoredresourcedescriptor"></a>
<a id="tocsmonitoredresourcedescriptor"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "labels": [
    {
      "description": "string",
      "key": "string",
      "valueType": "STRING"
    }
  ],
  "launchStage": "LAUNCH_STAGE_UNSPECIFIED",
  "name": "string",
  "type": "string"
}
```

An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of "gce_instance" and specifies the use of the labels "instance_id" and "zone" to identify particular VM instances.Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. A detailed description of the monitored resource type that might be used in documentation.|
|displayName|string|false|none|Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, "Google Cloud SQL Database".|
|labels|[[LabelDescriptor](#schemalabeldescriptor)]|false|none|Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels "database_id" and "zone".|
|launchStage|string|false|none|Optional. The launch stage of the monitored resource definition.|
|name|string|false|none|Optional. The resource name of the monitored resource descriptor: "projects/{project_id}/monitoredResourceDescriptors/{type}" where {type} is the value of the type field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format "monitoredResourceDescriptors/{type}".|
|type|string|false|none|Required. The monitored resource type. For example, the type "cloudsql_database" represents databases in Google Cloud SQL. For a list of types, see Monitored resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list).|

#### Enumerated Values

|Property|Value|
|---|---|
|launchStage|LAUNCH_STAGE_UNSPECIFIED|
|launchStage|UNIMPLEMENTED|
|launchStage|PRELAUNCH|
|launchStage|EARLY_ACCESS|
|launchStage|ALPHA|
|launchStage|BETA|
|launchStage|GA|
|launchStage|DEPRECATED|

<h2 id="tocS_MonitoredResourceMetadata">MonitoredResourceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemamonitoredresourcemetadata"></a>
<a id="schema_MonitoredResourceMetadata"></a>
<a id="tocSmonitoredresourcemetadata"></a>
<a id="tocsmonitoredresourcemetadata"></a>

```json
{
  "systemLabels": {
    "property1": null,
    "property2": null
  },
  "userLabels": {
    "property1": "string",
    "property2": "string"
  }
}
```

Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|systemLabels|object|false|none|Output only. Values for predefined system metadata labels. System labels are a kind of metadata extracted by Google, including "machine_image", "vpc", "subnet_id", "security_group", "name", etc. System label values can be only strings, Boolean values, or a list of strings. For example: { "name": "my-test-instance", "security_group": ["a", "b", "c"], "spot_instance": false } |
|userLabels|object|false|none|Output only. A map of user-defined metadata labels.|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

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
|done|boolean|false|none|If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}.|
|response|object|false|none|The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.|

<h2 id="tocS_OpsAnalyticsQuery">OpsAnalyticsQuery</h2>
<!-- backwards compatibility -->
<a id="schemaopsanalyticsquery"></a>
<a id="schema_OpsAnalyticsQuery"></a>
<a id="tocSopsanalyticsquery"></a>
<a id="tocsopsanalyticsquery"></a>

```json
{
  "sqlQueryText": "string"
}
```

Describes an analytics query that can be run in the Log Analytics page of Google Cloud console.Preview: This is a preview feature and may be subject to change before final release.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sqlQueryText|string|false|none|Required. A logs analytics SQL query, which generally follows BigQuery format.This is the SQL query that appears in the Log Analytics UI's query editor.|

<h2 id="tocS_RecentQuery">RecentQuery</h2>
<!-- backwards compatibility -->
<a id="schemarecentquery"></a>
<a id="schema_RecentQuery"></a>
<a id="tocSrecentquery"></a>
<a id="tocsrecentquery"></a>

```json
{
  "lastRunTime": "string",
  "loggingQuery": {
    "filter": "string",
    "summaryFieldEnd": 0,
    "summaryFieldStart": 0,
    "summaryFields": [
      {
        "field": "string"
      }
    ]
  },
  "name": "string",
  "opsAnalyticsQuery": {
    "sqlQueryText": "string"
  }
}
```

Describes a recent query executed on the Logs Explorer or Log Analytics page within the last ~ 30 days.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastRunTime|string(google-datetime)|false|read-only|Output only. The timestamp when this query was last run.|
|loggingQuery|[LoggingQuery](#schemaloggingquery)|false|none|Logging query that can be executed in Logs Explorer or via Logging API.|
|name|string|false|read-only|Output only. Resource name of the recent query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/recentQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support)The QUERY_ID is a system generated alphanumeric ID.|
|opsAnalyticsQuery|[OpsAnalyticsQuery](#schemaopsanalyticsquery)|false|none|Analytics query that can be executed in Log Analytics.|

<h2 id="tocS_RequestLog">RequestLog</h2>
<!-- backwards compatibility -->
<a id="schemarequestlog"></a>
<a id="schema_RequestLog"></a>
<a id="tocSrequestlog"></a>
<a id="tocsrequestlog"></a>

```json
{
  "appEngineRelease": "string",
  "appId": "string",
  "cost": 0,
  "endTime": "string",
  "finished": true,
  "first": true,
  "host": "string",
  "httpVersion": "string",
  "instanceId": "string",
  "instanceIndex": 0,
  "ip": "string",
  "latency": "string",
  "line": [
    {
      "logMessage": "string",
      "severity": "DEFAULT",
      "sourceLocation": {
        "file": "string",
        "functionName": "string",
        "line": "string"
      },
      "time": "string"
    }
  ],
  "megaCycles": "string",
  "method": "string",
  "moduleId": "string",
  "nickname": "string",
  "pendingTime": "string",
  "referrer": "string",
  "requestId": "string",
  "resource": "string",
  "responseSize": "string",
  "sourceReference": [
    {
      "repository": "string",
      "revisionId": "string"
    }
  ],
  "spanId": "string",
  "startTime": "string",
  "status": 0,
  "taskName": "string",
  "taskQueueName": "string",
  "traceId": "string",
  "traceSampled": true,
  "urlMapEntry": "string",
  "userAgent": "string",
  "versionId": "string",
  "wasLoadingRequest": true
}
```

Complete log information about a single HTTP request to an App Engine application.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appEngineRelease|string|false|none|App Engine release version.|
|appId|string|false|none|Application that handled this request.|
|cost|number(double)|false|none|An indication of the relative cost of serving this request.|
|endTime|string(google-datetime)|false|none|Time when the request finished.|
|finished|boolean|false|none|Whether this request is finished or active.|
|first|boolean|false|none|Whether this is the first RequestLog entry for this request. If an active request has several RequestLog entries written to Stackdriver Logging, then this field will be set for one of them.|
|host|string|false|none|Internet host and port number of the resource being requested.|
|httpVersion|string|false|none|HTTP version of request. Example: "HTTP/1.1".|
|instanceId|string|false|none|An identifier for the instance that handled the request.|
|instanceIndex|integer(int32)|false|none|If the instance processing this request belongs to a manually scaled module, then this is the 0-based index of the instance. Otherwise, this value is -1.|
|ip|string|false|none|Origin IP address.|
|latency|string(google-duration)|false|none|Latency of the request.|
|line|[[LogLine](#schemalogline)]|false|none|A list of log lines emitted by the application while serving this request.|
|megaCycles|string(int64)|false|none|Number of CPU megacycles used to process request.|
|method|string|false|none|Request method. Example: "GET", "HEAD", "PUT", "POST", "DELETE".|
|moduleId|string|false|none|Module of the application that handled this request.|
|nickname|string|false|none|The logged-in user who made the request.Most likely, this is the part of the user's email before the @ sign. The field value is the same for different requests from the same user, but different users can have similar names. This information is also available to the application via the App Engine Users API.This field will be populated starting with App Engine 1.9.21.|
|pendingTime|string(google-duration)|false|none|Time this request spent in the pending request queue.|
|referrer|string|false|none|Referrer URL of request.|
|requestId|string|false|none|Globally unique identifier for a request, which is based on the request start time. Request IDs for requests which started later will compare greater as strings than those for requests which started earlier.|
|resource|string|false|none|Contains the path and query portion of the URL that was requested. For example, if the URL was "http://example.com/app?name=val", the resource would be "/app?name=val". The fragment identifier, which is identified by the # character, is not included.|
|responseSize|string(int64)|false|none|Size in bytes sent back to client by request.|
|sourceReference|[[SourceReference](#schemasourcereference)]|false|none|Source code for the application that handled this request. There can be more than one source reference per deployed application if source code is distributed among multiple repositories.|
|spanId|string|false|none|Stackdriver Trace span identifier for this request.|
|startTime|string(google-datetime)|false|none|Time when the request started.|
|status|integer(int32)|false|none|HTTP response status code. Example: 200, 404.|
|taskName|string|false|none|Task name of the request, in the case of an offline request.|
|taskQueueName|string|false|none|Queue name of the request, in the case of an offline request.|
|traceId|string|false|none|Stackdriver Trace identifier for this request.|
|traceSampled|boolean|false|none|If true, the value in the 'trace_id' field was sampled for storage in a trace backend.|
|urlMapEntry|string|false|none|File or class that handled the request.|
|userAgent|string|false|none|User agent that made the request.|
|versionId|string|false|none|Version of the application that handled this request.|
|wasLoadingRequest|boolean|false|none|Whether this was a loading request for the instance.|

<h2 id="tocS_SavedQuery">SavedQuery</h2>
<!-- backwards compatibility -->
<a id="schemasavedquery"></a>
<a id="schema_SavedQuery"></a>
<a id="tocSsavedquery"></a>
<a id="tocssavedquery"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "loggingQuery": {
    "filter": "string",
    "summaryFieldEnd": 0,
    "summaryFieldStart": 0,
    "summaryFields": [
      {
        "field": "string"
      }
    ]
  },
  "name": "string",
  "opsAnalyticsQuery": {
    "sqlQueryText": "string"
  },
  "updateTime": "string",
  "visibility": "VISIBILITY_UNSPECIFIED"
}
```

Describes a query that has been saved by a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp when the saved query was created.|
|description|string|false|none|Optional. A human readable description of the saved query.|
|displayName|string|false|none|Optional. The user specified title for the SavedQuery.|
|loggingQuery|[LoggingQuery](#schemaloggingquery)|false|none|Logging query that can be executed in Logs Explorer or via Logging API.|
|name|string|false|read-only|Output only. Resource name of the saved query.In the format: "projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]" For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support#bucket-regions)After the saved query is created, the location cannot be changed.If the user doesn't provide a QUERY_ID, the system will generate an alphanumeric ID.|
|opsAnalyticsQuery|[OpsAnalyticsQuery](#schemaopsanalyticsquery)|false|none|Analytics query that can be executed in Log Analytics.|
|updateTime|string(google-datetime)|false|read-only|Output only. The timestamp when the saved query was last updated.|
|visibility|string|false|none|Required. The visibility status of this query, which determines its ownership.|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|VISIBILITY_UNSPECIFIED|
|visibility|PRIVATE|
|visibility|SHARED|

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
{
  "defaultSinkConfig": {
    "exclusions": [
      {
        "createTime": "string",
        "description": "string",
        "disabled": true,
        "filter": "string",
        "name": "string",
        "updateTime": "string"
      }
    ],
    "filter": "string",
    "mode": "FILTER_WRITE_MODE_UNSPECIFIED"
  },
  "disableDefaultSink": true,
  "kmsKeyName": "string",
  "kmsServiceAccountId": "string",
  "loggingServiceAccountId": "string",
  "name": "string",
  "storageLocation": "string"
}
```

Describes the settings associated with a project, folder, organization, or billing account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultSinkConfig|[DefaultSinkConfig](#schemadefaultsinkconfig)|false|none|Optional. Overrides the built-in configuration for _Default sink.|
|disableDefaultSink|boolean|false|none|Optional. If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.|
|kmsKeyName|string|false|none|Optional. The resource name for the configured Cloud KMS key.KMS key name format: "projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]" For example:"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"To enable CMEK, set this field to a valid kms_key_name for which the associated service account has the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key.The Cloud KMS key used by the Log Router can be updated by changing the kms_key_name to a new valid key name.To disable CMEK for the Log Router, set this field to an empty string.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.|
|kmsServiceAccountId|string|false|read-only|Output only. The service account that will be used by the Log Router to access your Cloud KMS key.Before enabling CMEK, you must first assign the role roles/cloudkms.cryptoKeyEncrypterDecrypter to the service account that will be used to access your Cloud KMS key. Use GetSettings to obtain the service account ID.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.|
|loggingServiceAccountId|string|false|read-only|Output only. The service account for the given resource container, such as project or folder. Log sinks use this service account as their writer_identity if no custom service account is provided in the request when calling the create sink method.|
|name|string|false|read-only|Output only. The resource name of the settings.|
|storageLocation|string|false|none|Optional. The storage location for the _Default and _Required log buckets of newly created projects and folders, unless the storage location is explicitly provided.Example value: europe-west1.Note: this setting does not affect the location of resources where a location is explicitly provided when created, such as custom log buckets.|

<h2 id="tocS_SourceLocation">SourceLocation</h2>
<!-- backwards compatibility -->
<a id="schemasourcelocation"></a>
<a id="schema_SourceLocation"></a>
<a id="tocSsourcelocation"></a>
<a id="tocssourcelocation"></a>

```json
{
  "file": "string",
  "functionName": "string",
  "line": "string"
}
```

Specifies a location in a source code file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|false|none|Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.|
|functionName|string|false|none|Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information is used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python).|
|line|string(int64)|false|none|Line within the source file.|

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

The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_SummaryField">SummaryField</h2>
<!-- backwards compatibility -->
<a id="schemasummaryfield"></a>
<a id="schema_SummaryField"></a>
<a id="tocSsummaryfield"></a>
<a id="tocssummaryfield"></a>

```json
{
  "field": "string"
}
```

A field from the LogEntry that is added to the summary line (https://cloud.google.com/logging/docs/view/logs-explorer-interface#add-summary-fields) for a query in the Logs Explorer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|Optional. The field from the LogEntry to include in the summary line, for example resource.type or jsonPayload.name.|

<h2 id="tocS_SuppressionInfo">SuppressionInfo</h2>
<!-- backwards compatibility -->
<a id="schemasuppressioninfo"></a>
<a id="schema_SuppressionInfo"></a>
<a id="tocSsuppressioninfo"></a>
<a id="tocssuppressioninfo"></a>

```json
{
  "reason": "REASON_UNSPECIFIED",
  "suppressedCount": 0
}
```

Information about entries that were omitted from the session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason that entries were omitted from the session.|
|suppressedCount|integer(int32)|false|none|A lower bound on the count of entries omitted due to reason.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|REASON_UNSPECIFIED|
|reason|RATE_LIMIT|
|reason|NOT_CONSUMED|

<h2 id="tocS_TailLogEntriesRequest">TailLogEntriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemataillogentriesrequest"></a>
<a id="schema_TailLogEntriesRequest"></a>
<a id="tocStaillogentriesrequest"></a>
<a id="tocstaillogentriesrequest"></a>

```json
{
  "bufferWindow": "string",
  "filter": "string",
  "resourceNames": [
    "string"
  ]
}
```

The parameters to TailLogEntries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bufferWindow|string(google-duration)|false|none|Optional. The amount of time to buffer log entries at the server before being returned to prevent out of order results due to late arriving log entries. Valid values are between 0-60000 milliseconds. Defaults to 2000 milliseconds.|
|filter|string|false|none|Optional. Only log entries that match the filter are returned. An empty filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause the filter to return no results. The maximum length of a filter is 20,000 characters.|
|resourceNames|[string]|false|none|Required. Name of a parent resource from which to retrieve log entries: projects/[PROJECT_ID] organizations/[ORGANIZATION_ID] billingAccounts/[BILLING_ACCOUNT_ID] folders/[FOLDER_ID]May alternatively be one or more views: projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID] folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]|

<h2 id="tocS_TailLogEntriesResponse">TailLogEntriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemataillogentriesresponse"></a>
<a id="schema_TailLogEntriesResponse"></a>
<a id="tocStaillogentriesresponse"></a>
<a id="tocstaillogentriesresponse"></a>

```json
{
  "entries": [
    {
      "errorGroups": [
        {
          "id": "string"
        }
      ],
      "httpRequest": {
        "cacheFillBytes": "string",
        "cacheHit": true,
        "cacheLookup": true,
        "cacheValidatedWithOriginServer": true,
        "latency": "string",
        "protocol": "string",
        "referer": "string",
        "remoteIp": "string",
        "requestMethod": "string",
        "requestSize": "string",
        "requestUrl": "string",
        "responseSize": "string",
        "serverIp": "string",
        "status": 0,
        "userAgent": "string"
      },
      "insertId": "string",
      "jsonPayload": {
        "property1": null,
        "property2": null
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "logName": "string",
      "metadata": {
        "systemLabels": {
          "property1": null,
          "property2": null
        },
        "userLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "operation": {
        "first": true,
        "id": "string",
        "last": true,
        "producer": "string"
      },
      "protoPayload": {
        "property1": null,
        "property2": null
      },
      "receiveTimestamp": "string",
      "resource": {
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "type": "string"
      },
      "severity": "DEFAULT",
      "sourceLocation": {
        "file": "string",
        "function": "string",
        "line": "string"
      },
      "spanId": "string",
      "split": {
        "index": 0,
        "totalSplits": 0,
        "uid": "string"
      },
      "textPayload": "string",
      "timestamp": "string",
      "trace": "string",
      "traceSampled": true
    }
  ],
  "suppressionInfo": [
    {
      "reason": "REASON_UNSPECIFIED",
      "suppressedCount": 0
    }
  ]
}
```

Result returned from TailLogEntries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[LogEntry](#schemalogentry)]|false|none|A list of log entries. Each response in the stream will order entries with increasing values of LogEntry.timestamp. Ordering is not guaranteed between separate responses.|
|suppressionInfo|[[SuppressionInfo](#schemasuppressioninfo)]|false|none|If entries that otherwise would have been included in the session were not sent back to the client, counts of relevant entries omitted from the session with the reason that they were not included. There will be at most one of each reason per response. The counts represent the number of suppressed entries since the last streamed response.|

<h2 id="tocS_UndeleteBucketRequest">UndeleteBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemaundeletebucketrequest"></a>
<a id="schema_UndeleteBucketRequest"></a>
<a id="tocSundeletebucketrequest"></a>
<a id="tocsundeletebucketrequest"></a>

```json
{}
```

The parameters to UndeleteBucket.

<h2 id="tocS_UpdateBucketRequest">UpdateBucketRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatebucketrequest"></a>
<a id="schema_UpdateBucketRequest"></a>
<a id="tocSupdatebucketrequest"></a>
<a id="tocsupdatebucketrequest"></a>

```json
{
  "bucket": {
    "analyticsEnabled": true,
    "cmekSettings": {
      "kmsKeyName": "string",
      "kmsKeyVersionName": "string",
      "name": "string",
      "serviceAccountId": "string"
    },
    "createTime": "string",
    "description": "string",
    "indexConfigs": [
      {
        "createTime": "string",
        "fieldPath": "string",
        "type": "INDEX_TYPE_UNSPECIFIED"
      }
    ],
    "lifecycleState": "LIFECYCLE_STATE_UNSPECIFIED",
    "locked": true,
    "name": "string",
    "restrictedFields": [
      "string"
    ],
    "retentionDays": 0,
    "updateTime": "string"
  },
  "name": "string",
  "updateMask": "string"
}
```

The parameters to UpdateBucket.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|[LogBucket](#schemalogbucket)|false|none|Required. The updated bucket.|
|name|string|false|none|Required. The full resource name of the bucket to update. "projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" "folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]" For example:"projects/my-project/locations/global/buckets/my-bucket"|
|updateMask|string(google-fieldmask)|false|none|Required. Field mask that specifies the fields in bucket that need an update. A bucket field will be overwritten if, and only if, it is in the update mask. name and output only fields cannot be updated.For a detailed FieldMask definition, see: https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.FieldMaskFor example: updateMask=retention_days|

<h2 id="tocS_WriteLogEntriesRequest">WriteLogEntriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemawritelogentriesrequest"></a>
<a id="schema_WriteLogEntriesRequest"></a>
<a id="tocSwritelogentriesrequest"></a>
<a id="tocswritelogentriesrequest"></a>

```json
{
  "dryRun": true,
  "entries": [
    {
      "errorGroups": [
        {
          "id": "string"
        }
      ],
      "httpRequest": {
        "cacheFillBytes": "string",
        "cacheHit": true,
        "cacheLookup": true,
        "cacheValidatedWithOriginServer": true,
        "latency": "string",
        "protocol": "string",
        "referer": "string",
        "remoteIp": "string",
        "requestMethod": "string",
        "requestSize": "string",
        "requestUrl": "string",
        "responseSize": "string",
        "serverIp": "string",
        "status": 0,
        "userAgent": "string"
      },
      "insertId": "string",
      "jsonPayload": {
        "property1": null,
        "property2": null
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "logName": "string",
      "metadata": {
        "systemLabels": {
          "property1": null,
          "property2": null
        },
        "userLabels": {
          "property1": "string",
          "property2": "string"
        }
      },
      "operation": {
        "first": true,
        "id": "string",
        "last": true,
        "producer": "string"
      },
      "protoPayload": {
        "property1": null,
        "property2": null
      },
      "receiveTimestamp": "string",
      "resource": {
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "type": "string"
      },
      "severity": "DEFAULT",
      "sourceLocation": {
        "file": "string",
        "function": "string",
        "line": "string"
      },
      "spanId": "string",
      "split": {
        "index": 0,
        "totalSplits": 0,
        "uid": "string"
      },
      "textPayload": "string",
      "timestamp": "string",
      "trace": "string",
      "traceSampled": true
    }
  ],
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "logName": "string",
  "partialSuccess": true,
  "resource": {
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "type": "string"
  }
}
```

The parameters to WriteLogEntries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dryRun|boolean|false|none|Optional. If true, the request should expect normal response, but the entries won't be persisted nor exported. Useful for checking whether the logging API endpoints are working properly before sending valuable data.|
|entries|[[LogEntry](#schemalogentry)]|false|none|Required. The log entries to send to Logging. The order of log entries in this list does not matter. Values supplied in this method's log_name, resource, and labels fields are copied into those log entries in this list that do not include values for their corresponding fields. For more information, see the LogEntry type.If the timestamp or insert_id fields are missing in log entries, then this method supplies the current time or a unique identifier, respectively. The supplied values are chosen so that, among the log entries that did not supply their own values, the entries earlier in the list will sort before the entries later in the list. See the entries.list method.Log entries with timestamps that are more than the logs retention period (https://cloud.google.com/logging/quotas) in the past or more than 24 hours in the future will not be available when calling entries.list. However, those log entries can still be exported with LogSinks (https://cloud.google.com/logging/docs/api/tasks/exporting-logs).To improve throughput and to avoid exceeding the quota limit (https://cloud.google.com/logging/quotas) for calls to entries.write, you should try to include several log entries in this list, rather than calling this method for each individual log entry.|
|labels|object|false|none|Optional. Default labels that are added to the labels field of all log entries in entries. If a log entry already has a label with the same key as a label in this parameter, then the log entry's label is not changed. See LogEntry.|
|logName|string|false|none|Optional. A default log resource name that is assigned to all log entries in entries that do not specify a value for log_name: projects/[PROJECT_ID]/logs/[LOG_ID] organizations/[ORGANIZATION_ID]/logs/[LOG_ID] billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID] folders/[FOLDER_ID]/logs/[LOG_ID][LOG_ID] must be URL-encoded. For example: "projects/my-project-id/logs/syslog" "organizations/123/logs/cloudaudit.googleapis.com%2Factivity" The permission logging.logEntries.create is needed on each project, organization, billing account, or folder that is receiving new log entries, whether the resource is specified in logName or in an individual log entry.|
|partialSuccess|boolean|false|none|Optional. Whether a batch's valid entries should be written even if some other entry failed due to a permanent error such as INVALID_ARGUMENT or PERMISSION_DENIED. If any entry failed, then the response status is the response status of one of the failed entries. The response will include error details in WriteLogEntriesPartialErrors.log_entry_errors keyed by the entries' zero-based index in the entries. Failed requests for which no entries are written will not include per-entry errors.|
|resource|[MonitoredResource](#schemamonitoredresource)|false|none|Optional. A default monitored resource object that is assigned to all log entries in entries that do not specify a value for resource. Example: { "type": "gce_instance", "labels": { "zone": "us-central1-a", "instance_id": "00000000000000000000" }} See LogEntry.|

<h2 id="tocS_WriteLogEntriesResponse">WriteLogEntriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemawritelogentriesresponse"></a>
<a id="schema_WriteLogEntriesResponse"></a>
<a id="tocSwritelogentriesresponse"></a>
<a id="tocswritelogentriesresponse"></a>

```json
{}
```

Result returned from WriteLogEntries.
