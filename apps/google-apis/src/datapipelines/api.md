<h1 id="data-pipelines-api">Data pipelines API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Data Pipelines provides an interface for creating, updating, and managing recurring Data Analytics jobs.

Base URLs:

* <a href="https://datapipelines.googleapis.com/">https://datapipelines.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/dataflow/docs/guides/data-pipelines">External documentation</a>

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

<h1 id="data-pipelines-api-projects">projects</h1>

## datapipelines.projects.locations.pipelines.get

<a id="opIddatapipelines.projects.locations.pipelines.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.

<h3 id="datapipelinesprojectslocationspipelinesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.|
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
  "displayName": "string",
  "jobCount": 0,
  "lastUpdateTime": "string",
  "name": "string",
  "pipelineSources": {
    "property1": "string",
    "property2": "string"
  },
  "scheduleInfo": {
    "nextJobTime": "string",
    "schedule": "string",
    "timeZone": "string"
  },
  "schedulerServiceAccountEmail": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "PIPELINE_TYPE_UNSPECIFIED",
  "workload": {
    "dataflowFlexTemplateRequest": {
      "launchParameter": {
        "containerSpecGcsPath": "string",
        "environment": {
          "additionalExperiments": [
            "string"
          ],
          "additionalUserLabels": {
            "property1": "string",
            "property2": "string"
          },
          "enableStreamingEngine": true,
          "flexrsGoal": "FLEXRS_UNSPECIFIED",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kmsKeyName": "string",
          "machineType": "string",
          "maxWorkers": 0,
          "network": "string",
          "numWorkers": 0,
          "serviceAccountEmail": "string",
          "subnetwork": "string",
          "tempLocation": "string",
          "workerRegion": "string",
          "workerZone": "string",
          "zone": "string"
        },
        "jobName": "string",
        "launchOptions": {
          "property1": "string",
          "property2": "string"
        },
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "transformNameMappings": {
          "property1": "string",
          "property2": "string"
        },
        "update": true
      },
      "location": "string",
      "projectId": "string",
      "validateOnly": true
    },
    "dataflowLaunchTemplateRequest": {
      "gcsPath": "string",
      "launchParameters": {
        "environment": {
          "additionalExperiments": [
            "string"
          ],
          "additionalUserLabels": {
            "property1": "string",
            "property2": "string"
          },
          "bypassTempDirValidation": true,
          "enableStreamingEngine": true,
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kmsKeyName": "string",
          "machineType": "string",
          "maxWorkers": 0,
          "network": "string",
          "numWorkers": 0,
          "serviceAccountEmail": "string",
          "subnetwork": "string",
          "tempLocation": "string",
          "workerRegion": "string",
          "workerZone": "string",
          "zone": "string"
        },
        "jobName": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "transformNameMapping": {
          "property1": "string",
          "property2": "string"
        },
        "update": true
      },
      "location": "string",
      "projectId": "string",
      "validateOnly": true
    }
  }
}
```

<h3 id="datapipelinesprojectslocationspipelinesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatapipelinesV1Pipeline](#schemagoogleclouddatapipelinesv1pipeline)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datapipelines.projects.locations.pipelines.delete

<a id="opIddatapipelines.projects.locations.pipelines.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.

<h3 id="datapipelinesprojectslocationspipelinesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.|
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

<h3 id="datapipelinesprojectslocationspipelinesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datapipelines.projects.locations.pipelines.patch

<a id="opIddatapipelines.projects.locations.pipelines.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "name": "string",
    "pipelineSources": {
      "property1": "string",
      "property2": "string"
    },
    "scheduleInfo": {
      "schedule": "string",
      "timeZone": "string"
    },
    "schedulerServiceAccountEmail": "string",
    "state": "STATE_UNSPECIFIED",
    "type": "PIPELINE_TYPE_UNSPECIFIED",
    "workload": {
      "dataflowFlexTemplateRequest": {
        "launchParameter": {
          "containerSpecGcsPath": "string",
          "environment": {
            "additionalExperiments": [
              "string"
            ],
            "additionalUserLabels": {
              "property1": "string",
              "property2": "string"
            },
            "enableStreamingEngine": true,
            "flexrsGoal": "FLEXRS_UNSPECIFIED",
            "ipConfiguration": "WORKER_IP_UNSPECIFIED",
            "kmsKeyName": "string",
            "machineType": "string",
            "maxWorkers": 0,
            "network": "string",
            "numWorkers": 0,
            "serviceAccountEmail": "string",
            "subnetwork": "string",
            "tempLocation": "string",
            "workerRegion": "string",
            "workerZone": "string",
            "zone": "string"
          },
          "jobName": "string",
          "launchOptions": {
            "property1": "string",
            "property2": "string"
          },
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "transformNameMappings": {
            "property1": "string",
            "property2": "string"
          },
          "update": true
        },
        "location": "string",
        "projectId": "string",
        "validateOnly": true
      },
      "dataflowLaunchTemplateRequest": {
        "gcsPath": "string",
        "launchParameters": {
          "environment": {
            "additionalExperiments": [
              "string"
            ],
            "additionalUserLabels": {
              "property1": "string",
              "property2": "string"
            },
            "bypassTempDirValidation": true,
            "enableStreamingEngine": true,
            "ipConfiguration": "WORKER_IP_UNSPECIFIED",
            "kmsKeyName": "string",
            "machineType": "string",
            "maxWorkers": 0,
            "network": "string",
            "numWorkers": 0,
            "serviceAccountEmail": "string",
            "subnetwork": "string",
            "tempLocation": "string",
            "workerRegion": "string",
            "workerZone": "string",
            "zone": "string"
          },
          "jobName": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "transformNameMapping": {
            "property1": "string",
            "property2": "string"
          },
          "update": true
        },
        "location": "string",
        "projectId": "string",
        "validateOnly": true
      }
    }
  }'
```

`PATCH /v1/{name}`

Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.

> Body parameter

```json
{
  "displayName": "string",
  "name": "string",
  "pipelineSources": {
    "property1": "string",
    "property2": "string"
  },
  "scheduleInfo": {
    "schedule": "string",
    "timeZone": "string"
  },
  "schedulerServiceAccountEmail": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "PIPELINE_TYPE_UNSPECIFIED",
  "workload": {
    "dataflowFlexTemplateRequest": {
      "launchParameter": {
        "containerSpecGcsPath": "string",
        "environment": {
          "additionalExperiments": [
            "string"
          ],
          "additionalUserLabels": {
            "property1": "string",
            "property2": "string"
          },
          "enableStreamingEngine": true,
          "flexrsGoal": "FLEXRS_UNSPECIFIED",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kmsKeyName": "string",
          "machineType": "string",
          "maxWorkers": 0,
          "network": "string",
          "numWorkers": 0,
          "serviceAccountEmail": "string",
          "subnetwork": "string",
          "tempLocation": "string",
          "workerRegion": "string",
          "workerZone": "string",
          "zone": "string"
        },
        "jobName": "string",
        "launchOptions": {
          "property1": "string",
          "property2": "string"
        },
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "transformNameMappings": {
          "property1": "string",
          "property2": "string"
        },
        "update": true
      },
      "location": "string",
      "projectId": "string",
      "validateOnly": true
    },
    "dataflowLaunchTemplateRequest": {
      "gcsPath": "string",
      "launchParameters": {
        "environment": {
          "additionalExperiments": [
            "string"
          ],
          "additionalUserLabels": {
            "property1": "string",
            "property2": "string"
          },
          "bypassTempDirValidation": true,
          "enableStreamingEngine": true,
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kmsKeyName": "string",
          "machineType": "string",
          "maxWorkers": 0,
          "network": "string",
          "numWorkers": 0,
          "serviceAccountEmail": "string",
          "subnetwork": "string",
          "tempLocation": "string",
          "workerRegion": "string",
          "workerZone": "string",
          "zone": "string"
        },
        "jobName": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "transformNameMapping": {
          "property1": "string",
          "property2": "string"
        },
        "update": true
      },
      "location": "string",
      "projectId": "string",
      "validateOnly": true
    }
  }
}
```

<h3 id="datapipelinesprojectslocationspipelinespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location.|
|updateMask|query|string|false|The list of fields to be updated.|
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
|body|body|[GoogleCloudDatapipelinesV1Pipeline](#schemagoogleclouddatapipelinesv1pipeline)|false|none|
|» displayName|body|string|false|Required. The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).|
|» name|body|string|false|The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location.|
|» pipelineSources|body|object|false|Immutable. The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation.|
|» » **additionalProperties**|body|string|false|none|
|» scheduleInfo|body|[GoogleCloudDatapipelinesV1ScheduleSpec](#schemagoogleclouddatapipelinesv1schedulespec)|false|Internal scheduling information for a pipeline. If this information is provided, periodic jobs will be created per the schedule. If not, users are responsible for creating jobs externally.|
|» schedulerServiceAccountEmail|body|string|false|Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.|
|» state|body|string|false|Required. The state of the pipeline. When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through UpdatePipeline requests.|
|» type|body|string|false|Required. The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.|
|» workload|body|[GoogleCloudDatapipelinesV1Workload](#schemagoogleclouddatapipelinesv1workload)|false|Workload information for creating new jobs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|STATE_RESUMING|
|» state|STATE_ACTIVE|
|» state|STATE_STOPPING|
|» state|STATE_ARCHIVED|
|» state|STATE_PAUSED|
|» type|PIPELINE_TYPE_UNSPECIFIED|
|» type|PIPELINE_TYPE_BATCH|
|» type|PIPELINE_TYPE_STREAMING|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "displayName": "string",
  "jobCount": 0,
  "lastUpdateTime": "string",
  "name": "string",
  "pipelineSources": {
    "property1": "string",
    "property2": "string"
  },
  "scheduleInfo": {
    "nextJobTime": "string",
    "schedule": "string",
    "timeZone": "string"
  },
  "schedulerServiceAccountEmail": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "PIPELINE_TYPE_UNSPECIFIED",
  "workload": {
    "dataflowFlexTemplateRequest": {
      "launchParameter": {
        "containerSpecGcsPath": "string",
        "environment": {
          "additionalExperiments": [
            "string"
          ],
          "additionalUserLabels": {
            "property1": "string",
            "property2": "string"
          },
          "enableStreamingEngine": true,
          "flexrsGoal": "FLEXRS_UNSPECIFIED",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kmsKeyName": "string",
          "machineType": "string",
          "maxWorkers": 0,
          "network": "string",
          "numWorkers": 0,
          "serviceAccountEmail": "string",
          "subnetwork": "string",
          "tempLocation": "string",
          "workerRegion": "string",
          "workerZone": "string",
          "zone": "string"
        },
        "jobName": "string",
        "launchOptions": {
          "property1": "string",
          "property2": "string"
        },
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "transformNameMappings": {
          "property1": "string",
          "property2": "string"
        },
        "update": true
      },
      "location": "string",
      "projectId": "string",
      "validateOnly": true
    },
    "dataflowLaunchTemplateRequest": {
      "gcsPath": "string",
      "launchParameters": {
        "environment": {
          "additionalExperiments": [
            "string"
          ],
          "additionalUserLabels": {
            "property1": "string",
            "property2": "string"
          },
          "bypassTempDirValidation": true,
          "enableStreamingEngine": true,
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kmsKeyName": "string",
          "machineType": "string",
          "maxWorkers": 0,
          "network": "string",
          "numWorkers": 0,
          "serviceAccountEmail": "string",
          "subnetwork": "string",
          "tempLocation": "string",
          "workerRegion": "string",
          "workerZone": "string",
          "zone": "string"
        },
        "jobName": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "transformNameMapping": {
          "property1": "string",
          "property2": "string"
        },
        "update": true
      },
      "location": "string",
      "projectId": "string",
      "validateOnly": true
    }
  }
}
```

<h3 id="datapipelinesprojectslocationspipelinespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatapipelinesV1Pipeline](#schemagoogleclouddatapipelinesv1pipeline)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datapipelines.projects.locations.pipelines.run

<a id="opIddatapipelines.projects.locations.pipelines.run"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:run \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:run`

Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.

> Body parameter

```json
{}
```

<h3 id="datapipelinesprojectslocationspipelinesrun-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.|
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
|body|body|[GoogleCloudDatapipelinesV1RunPipelineRequest](#schemagoogleclouddatapipelinesv1runpipelinerequest)|false|none|

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
  "job": {
    "createTime": "string",
    "dataflowJobDetails": {
      "currentWorkers": 0,
      "resourceInfo": {
        "property1": 0,
        "property2": 0
      },
      "sdkVersion": {
        "sdkSupportStatus": "UNKNOWN",
        "version": "string",
        "versionDisplayName": "string"
      }
    },
    "endTime": "string",
    "id": "string",
    "name": "string",
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
    }
  }
}
```

<h3 id="datapipelinesprojectslocationspipelinesrun-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatapipelinesV1RunPipelineResponse](#schemagoogleclouddatapipelinesv1runpipelineresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datapipelines.projects.locations.pipelines.stop

<a id="opIddatapipelines.projects.locations.pipelines.stop"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:stop`

Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.

> Body parameter

```json
{}
```

<h3 id="datapipelinesprojectslocationspipelinesstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.|
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
|body|body|[GoogleCloudDatapipelinesV1StopPipelineRequest](#schemagoogleclouddatapipelinesv1stoppipelinerequest)|false|none|

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
  "displayName": "string",
  "jobCount": 0,
  "lastUpdateTime": "string",
  "name": "string",
  "pipelineSources": {
    "property1": "string",
    "property2": "string"
  },
  "scheduleInfo": {
    "nextJobTime": "string",
    "schedule": "string",
    "timeZone": "string"
  },
  "schedulerServiceAccountEmail": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "PIPELINE_TYPE_UNSPECIFIED",
  "workload": {
    "dataflowFlexTemplateRequest": {
      "launchParameter": {
        "containerSpecGcsPath": "string",
        "environment": {
          "additionalExperiments": [
            "string"
          ],
          "additionalUserLabels": {
            "property1": "string",
            "property2": "string"
          },
          "enableStreamingEngine": true,
          "flexrsGoal": "FLEXRS_UNSPECIFIED",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kmsKeyName": "string",
          "machineType": "string",
          "maxWorkers": 0,
          "network": "string",
          "numWorkers": 0,
          "serviceAccountEmail": "string",
          "subnetwork": "string",
          "tempLocation": "string",
          "workerRegion": "string",
          "workerZone": "string",
          "zone": "string"
        },
        "jobName": "string",
        "launchOptions": {
          "property1": "string",
          "property2": "string"
        },
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "transformNameMappings": {
          "property1": "string",
          "property2": "string"
        },
        "update": true
      },
      "location": "string",
      "projectId": "string",
      "validateOnly": true
    },
    "dataflowLaunchTemplateRequest": {
      "gcsPath": "string",
      "launchParameters": {
        "environment": {
          "additionalExperiments": [
            "string"
          ],
          "additionalUserLabels": {
            "property1": "string",
            "property2": "string"
          },
          "bypassTempDirValidation": true,
          "enableStreamingEngine": true,
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kmsKeyName": "string",
          "machineType": "string",
          "maxWorkers": 0,
          "network": "string",
          "numWorkers": 0,
          "serviceAccountEmail": "string",
          "subnetwork": "string",
          "tempLocation": "string",
          "workerRegion": "string",
          "workerZone": "string",
          "zone": "string"
        },
        "jobName": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "transformNameMapping": {
          "property1": "string",
          "property2": "string"
        },
        "update": true
      },
      "location": "string",
      "projectId": "string",
      "validateOnly": true
    }
  }
}
```

<h3 id="datapipelinesprojectslocationspipelinesstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatapipelinesV1Pipeline](#schemagoogleclouddatapipelinesv1pipeline)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datapipelines.projects.locations.pipelines.jobs.list

<a id="opIddatapipelines.projects.locations.pipelines.jobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/jobs`

Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.

<h3 id="datapipelinesprojectslocationspipelinesjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.|
|pageSize|query|integer|false|The maximum number of entities to return. The service may return fewer than this value, even if there are additional pages. If unspecified, the max limit will be determined by the backend implementation.|
|pageToken|query|string|false|A page token, received from a previous `ListJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListJobs` must match the call that provided the page token.|
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
      "dataflowJobDetails": {
        "currentWorkers": 0,
        "resourceInfo": {
          "property1": 0,
          "property2": 0
        },
        "sdkVersion": {
          "sdkSupportStatus": "UNKNOWN",
          "version": "string",
          "versionDisplayName": "string"
        }
      },
      "endTime": "string",
      "id": "string",
      "name": "string",
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
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datapipelinesprojectslocationspipelinesjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatapipelinesV1ListJobsResponse](#schemagoogleclouddatapipelinesv1listjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datapipelines.projects.locations.pipelines.list

<a id="opIddatapipelines.projects.locations.pipelines.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/pipelines \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/pipelines`

Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.

<h3 id="datapipelinesprojectslocationspipelineslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.|
|filter|query|string|false|An expression for filtering the results of the request. If unspecified, all pipelines will be returned. Multiple filters can be applied and must be comma separated. Fields eligible for filtering are: + `type`: The type of the pipeline (streaming or batch). Allowed values are `ALL`, `BATCH`, and `STREAMING`. + `status`: The activity status of the pipeline. Allowed values are `ALL`, `ACTIVE`, `ARCHIVED`, and `PAUSED`. For example, to limit results to active batch processing pipelines: type:BATCH,status:ACTIVE|
|pageSize|query|integer|false|The maximum number of entities to return. The service may return fewer than this value, even if there are additional pages. If unspecified, the max limit is yet to be determined by the backend implementation.|
|pageToken|query|string|false|A page token, received from a previous `ListPipelines` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPipelines` must match the call that provided the page token.|
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
  "pipelines": [
    {
      "createTime": "string",
      "displayName": "string",
      "jobCount": 0,
      "lastUpdateTime": "string",
      "name": "string",
      "pipelineSources": {
        "property1": "string",
        "property2": "string"
      },
      "scheduleInfo": {
        "nextJobTime": "string",
        "schedule": "string",
        "timeZone": "string"
      },
      "schedulerServiceAccountEmail": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "PIPELINE_TYPE_UNSPECIFIED",
      "workload": {
        "dataflowFlexTemplateRequest": {
          "launchParameter": {
            "containerSpecGcsPath": "string",
            "environment": {
              "additionalExperiments": [
                "string"
              ],
              "additionalUserLabels": {
                "property1": "string",
                "property2": "string"
              },
              "enableStreamingEngine": true,
              "flexrsGoal": "FLEXRS_UNSPECIFIED",
              "ipConfiguration": "WORKER_IP_UNSPECIFIED",
              "kmsKeyName": "string",
              "machineType": "string",
              "maxWorkers": 0,
              "network": "string",
              "numWorkers": 0,
              "serviceAccountEmail": "string",
              "subnetwork": "string",
              "tempLocation": "string",
              "workerRegion": "string",
              "workerZone": "string",
              "zone": "string"
            },
            "jobName": "string",
            "launchOptions": {
              "property1": "string",
              "property2": "string"
            },
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "transformNameMappings": {
              "property1": "string",
              "property2": "string"
            },
            "update": true
          },
          "location": "string",
          "projectId": "string",
          "validateOnly": true
        },
        "dataflowLaunchTemplateRequest": {
          "gcsPath": "string",
          "launchParameters": {
            "environment": {
              "additionalExperiments": [
                "string"
              ],
              "additionalUserLabels": {
                "property1": "string",
                "property2": "string"
              },
              "bypassTempDirValidation": true,
              "enableStreamingEngine": true,
              "ipConfiguration": "WORKER_IP_UNSPECIFIED",
              "kmsKeyName": "string",
              "machineType": "string",
              "maxWorkers": 0,
              "network": "string",
              "numWorkers": 0,
              "serviceAccountEmail": "string",
              "subnetwork": "string",
              "tempLocation": "string",
              "workerRegion": "string",
              "workerZone": "string",
              "zone": "string"
            },
            "jobName": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "transformNameMapping": {
              "property1": "string",
              "property2": "string"
            },
            "update": true
          },
          "location": "string",
          "projectId": "string",
          "validateOnly": true
        }
      }
    }
  ]
}
```

<h3 id="datapipelinesprojectslocationspipelineslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatapipelinesV1ListPipelinesResponse](#schemagoogleclouddatapipelinesv1listpipelinesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datapipelines.projects.locations.pipelines.create

<a id="opIddatapipelines.projects.locations.pipelines.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/pipelines \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "name": "string",
    "pipelineSources": {
      "property1": "string",
      "property2": "string"
    },
    "scheduleInfo": {
      "schedule": "string",
      "timeZone": "string"
    },
    "schedulerServiceAccountEmail": "string",
    "state": "STATE_UNSPECIFIED",
    "type": "PIPELINE_TYPE_UNSPECIFIED",
    "workload": {
      "dataflowFlexTemplateRequest": {
        "launchParameter": {
          "containerSpecGcsPath": "string",
          "environment": {
            "additionalExperiments": [
              "string"
            ],
            "additionalUserLabels": {
              "property1": "string",
              "property2": "string"
            },
            "enableStreamingEngine": true,
            "flexrsGoal": "FLEXRS_UNSPECIFIED",
            "ipConfiguration": "WORKER_IP_UNSPECIFIED",
            "kmsKeyName": "string",
            "machineType": "string",
            "maxWorkers": 0,
            "network": "string",
            "numWorkers": 0,
            "serviceAccountEmail": "string",
            "subnetwork": "string",
            "tempLocation": "string",
            "workerRegion": "string",
            "workerZone": "string",
            "zone": "string"
          },
          "jobName": "string",
          "launchOptions": {
            "property1": "string",
            "property2": "string"
          },
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "transformNameMappings": {
            "property1": "string",
            "property2": "string"
          },
          "update": true
        },
        "location": "string",
        "projectId": "string",
        "validateOnly": true
      },
      "dataflowLaunchTemplateRequest": {
        "gcsPath": "string",
        "launchParameters": {
          "environment": {
            "additionalExperiments": [
              "string"
            ],
            "additionalUserLabels": {
              "property1": "string",
              "property2": "string"
            },
            "bypassTempDirValidation": true,
            "enableStreamingEngine": true,
            "ipConfiguration": "WORKER_IP_UNSPECIFIED",
            "kmsKeyName": "string",
            "machineType": "string",
            "maxWorkers": 0,
            "network": "string",
            "numWorkers": 0,
            "serviceAccountEmail": "string",
            "subnetwork": "string",
            "tempLocation": "string",
            "workerRegion": "string",
            "workerZone": "string",
            "zone": "string"
          },
          "jobName": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "transformNameMapping": {
            "property1": "string",
            "property2": "string"
          },
          "update": true
        },
        "location": "string",
        "projectId": "string",
        "validateOnly": true
      }
    }
  }'
```

`POST /v1/{parent}/pipelines`

Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.

> Body parameter

```json
{
  "displayName": "string",
  "name": "string",
  "pipelineSources": {
    "property1": "string",
    "property2": "string"
  },
  "scheduleInfo": {
    "schedule": "string",
    "timeZone": "string"
  },
  "schedulerServiceAccountEmail": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "PIPELINE_TYPE_UNSPECIFIED",
  "workload": {
    "dataflowFlexTemplateRequest": {
      "launchParameter": {
        "containerSpecGcsPath": "string",
        "environment": {
          "additionalExperiments": [
            "string"
          ],
          "additionalUserLabels": {
            "property1": "string",
            "property2": "string"
          },
          "enableStreamingEngine": true,
          "flexrsGoal": "FLEXRS_UNSPECIFIED",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kmsKeyName": "string",
          "machineType": "string",
          "maxWorkers": 0,
          "network": "string",
          "numWorkers": 0,
          "serviceAccountEmail": "string",
          "subnetwork": "string",
          "tempLocation": "string",
          "workerRegion": "string",
          "workerZone": "string",
          "zone": "string"
        },
        "jobName": "string",
        "launchOptions": {
          "property1": "string",
          "property2": "string"
        },
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "transformNameMappings": {
          "property1": "string",
          "property2": "string"
        },
        "update": true
      },
      "location": "string",
      "projectId": "string",
      "validateOnly": true
    },
    "dataflowLaunchTemplateRequest": {
      "gcsPath": "string",
      "launchParameters": {
        "environment": {
          "additionalExperiments": [
            "string"
          ],
          "additionalUserLabels": {
            "property1": "string",
            "property2": "string"
          },
          "bypassTempDirValidation": true,
          "enableStreamingEngine": true,
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kmsKeyName": "string",
          "machineType": "string",
          "maxWorkers": 0,
          "network": "string",
          "numWorkers": 0,
          "serviceAccountEmail": "string",
          "subnetwork": "string",
          "tempLocation": "string",
          "workerRegion": "string",
          "workerZone": "string",
          "zone": "string"
        },
        "jobName": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "transformNameMapping": {
          "property1": "string",
          "property2": "string"
        },
        "update": true
      },
      "location": "string",
      "projectId": "string",
      "validateOnly": true
    }
  }
}
```

<h3 id="datapipelinesprojectslocationspipelinescreate-parameters">Parameters</h3>

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
|body|body|[GoogleCloudDatapipelinesV1Pipeline](#schemagoogleclouddatapipelinesv1pipeline)|false|none|
|» displayName|body|string|false|Required. The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).|
|» name|body|string|false|The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location.|
|» pipelineSources|body|object|false|Immutable. The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation.|
|» » **additionalProperties**|body|string|false|none|
|» scheduleInfo|body|[GoogleCloudDatapipelinesV1ScheduleSpec](#schemagoogleclouddatapipelinesv1schedulespec)|false|Internal scheduling information for a pipeline. If this information is provided, periodic jobs will be created per the schedule. If not, users are responsible for creating jobs externally.|
|» schedulerServiceAccountEmail|body|string|false|Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.|
|» state|body|string|false|Required. The state of the pipeline. When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through UpdatePipeline requests.|
|» type|body|string|false|Required. The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.|
|» workload|body|[GoogleCloudDatapipelinesV1Workload](#schemagoogleclouddatapipelinesv1workload)|false|Workload information for creating new jobs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|STATE_RESUMING|
|» state|STATE_ACTIVE|
|» state|STATE_STOPPING|
|» state|STATE_ARCHIVED|
|» state|STATE_PAUSED|
|» type|PIPELINE_TYPE_UNSPECIFIED|
|» type|PIPELINE_TYPE_BATCH|
|» type|PIPELINE_TYPE_STREAMING|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "displayName": "string",
  "jobCount": 0,
  "lastUpdateTime": "string",
  "name": "string",
  "pipelineSources": {
    "property1": "string",
    "property2": "string"
  },
  "scheduleInfo": {
    "nextJobTime": "string",
    "schedule": "string",
    "timeZone": "string"
  },
  "schedulerServiceAccountEmail": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "PIPELINE_TYPE_UNSPECIFIED",
  "workload": {
    "dataflowFlexTemplateRequest": {
      "launchParameter": {
        "containerSpecGcsPath": "string",
        "environment": {
          "additionalExperiments": [
            "string"
          ],
          "additionalUserLabels": {
            "property1": "string",
            "property2": "string"
          },
          "enableStreamingEngine": true,
          "flexrsGoal": "FLEXRS_UNSPECIFIED",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kmsKeyName": "string",
          "machineType": "string",
          "maxWorkers": 0,
          "network": "string",
          "numWorkers": 0,
          "serviceAccountEmail": "string",
          "subnetwork": "string",
          "tempLocation": "string",
          "workerRegion": "string",
          "workerZone": "string",
          "zone": "string"
        },
        "jobName": "string",
        "launchOptions": {
          "property1": "string",
          "property2": "string"
        },
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "transformNameMappings": {
          "property1": "string",
          "property2": "string"
        },
        "update": true
      },
      "location": "string",
      "projectId": "string",
      "validateOnly": true
    },
    "dataflowLaunchTemplateRequest": {
      "gcsPath": "string",
      "launchParameters": {
        "environment": {
          "additionalExperiments": [
            "string"
          ],
          "additionalUserLabels": {
            "property1": "string",
            "property2": "string"
          },
          "bypassTempDirValidation": true,
          "enableStreamingEngine": true,
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kmsKeyName": "string",
          "machineType": "string",
          "maxWorkers": 0,
          "network": "string",
          "numWorkers": 0,
          "serviceAccountEmail": "string",
          "subnetwork": "string",
          "tempLocation": "string",
          "workerRegion": "string",
          "workerZone": "string",
          "zone": "string"
        },
        "jobName": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "transformNameMapping": {
          "property1": "string",
          "property2": "string"
        },
        "update": true
      },
      "location": "string",
      "projectId": "string",
      "validateOnly": true
    }
  }
}
```

<h3 id="datapipelinesprojectslocationspipelinescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatapipelinesV1Pipeline](#schemagoogleclouddatapipelinesv1pipeline)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudDatapipelinesV1DataflowJobDetails">GoogleCloudDatapipelinesV1DataflowJobDetails</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1dataflowjobdetails"></a>
<a id="schema_GoogleCloudDatapipelinesV1DataflowJobDetails"></a>
<a id="tocSgoogleclouddatapipelinesv1dataflowjobdetails"></a>
<a id="tocsgoogleclouddatapipelinesv1dataflowjobdetails"></a>

```json
{
  "currentWorkers": 0,
  "resourceInfo": {
    "property1": 0,
    "property2": 0
  },
  "sdkVersion": {
    "sdkSupportStatus": "UNKNOWN",
    "version": "string",
    "versionDisplayName": "string"
  }
}
```

Pipeline job details specific to the Dataflow API. This is encapsulated here to allow for more executors to store their specific details separately.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentWorkers|integer(int32)|false|read-only|Output only. The current number of workers used to run the jobs. Only set to a value if the job is still running.|
|resourceInfo|object|false|none|Cached version of all the metrics of interest for the job. This value gets stored here when the job is terminated. As long as the job is running, this field is populated from the Dataflow API.|
|sdkVersion|[GoogleCloudDatapipelinesV1SdkVersion](#schemagoogleclouddatapipelinesv1sdkversion)|false|none|Output only. The SDK version used to run the job.|

<h2 id="tocS_GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment">GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1flextemplateruntimeenvironment"></a>
<a id="schema_GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment"></a>
<a id="tocSgoogleclouddatapipelinesv1flextemplateruntimeenvironment"></a>
<a id="tocsgoogleclouddatapipelinesv1flextemplateruntimeenvironment"></a>

```json
{
  "additionalExperiments": [
    "string"
  ],
  "additionalUserLabels": {
    "property1": "string",
    "property2": "string"
  },
  "enableStreamingEngine": true,
  "flexrsGoal": "FLEXRS_UNSPECIFIED",
  "ipConfiguration": "WORKER_IP_UNSPECIFIED",
  "kmsKeyName": "string",
  "machineType": "string",
  "maxWorkers": 0,
  "network": "string",
  "numWorkers": 0,
  "serviceAccountEmail": "string",
  "subnetwork": "string",
  "tempLocation": "string",
  "workerRegion": "string",
  "workerZone": "string",
  "zone": "string"
}
```

The environment values to be set at runtime for a Flex Template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalExperiments|[string]|false|none|Additional experiment flags for the job.|
|additionalUserLabels|object|false|none|Additional user labels to be specified for the job. Keys and values must follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions). An object containing a list of key/value pairs. Example: `{ "name": "wrench", "mass": "1kg", "count": "3" }`.|
|enableStreamingEngine|boolean|false|none|Whether to enable Streaming Engine for the job.|
|flexrsGoal|string|false|none|Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs|
|ipConfiguration|string|false|none|Configuration for VM IPs.|
|kmsKeyName|string|false|none|Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/|
|machineType|string|false|none|The machine type to use for the job. Defaults to the value from the template if not specified.|
|maxWorkers|integer(int32)|false|none|The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.|
|network|string|false|none|Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".|
|numWorkers|integer(int32)|false|none|The initial number of Compute Engine instances for the job.|
|serviceAccountEmail|string|false|none|The email address of the service account to run the job as.|
|subnetwork|string|false|none|Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.|
|tempLocation|string|false|none|The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`.|
|workerRegion|string|false|none|The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, defaults to the control plane region.|
|workerZone|string|false|none|The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence.|
|zone|string|false|none|The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence.|

#### Enumerated Values

|Property|Value|
|---|---|
|flexrsGoal|FLEXRS_UNSPECIFIED|
|flexrsGoal|FLEXRS_SPEED_OPTIMIZED|
|flexrsGoal|FLEXRS_COST_OPTIMIZED|
|ipConfiguration|WORKER_IP_UNSPECIFIED|
|ipConfiguration|WORKER_IP_PUBLIC|
|ipConfiguration|WORKER_IP_PRIVATE|

<h2 id="tocS_GoogleCloudDatapipelinesV1Job">GoogleCloudDatapipelinesV1Job</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1job"></a>
<a id="schema_GoogleCloudDatapipelinesV1Job"></a>
<a id="tocSgoogleclouddatapipelinesv1job"></a>
<a id="tocsgoogleclouddatapipelinesv1job"></a>

```json
{
  "createTime": "string",
  "dataflowJobDetails": {
    "currentWorkers": 0,
    "resourceInfo": {
      "property1": 0,
      "property2": 0
    },
    "sdkVersion": {
      "sdkSupportStatus": "UNKNOWN",
      "version": "string",
      "versionDisplayName": "string"
    }
  },
  "endTime": "string",
  "id": "string",
  "name": "string",
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
  }
}
```

Definition of the job information maintained by the pipeline. Fields in this entity are retrieved from the executor API (e.g. Dataflow API).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time of job creation.|
|dataflowJobDetails|[GoogleCloudDatapipelinesV1DataflowJobDetails](#schemagoogleclouddatapipelinesv1dataflowjobdetails)|false|none|All the details that are specific to a Dataflow job.|
|endTime|string(google-datetime)|false|read-only|Output only. The time of job termination. This is absent if the job is still running.|
|id|string|false|read-only|Output only. The internal ID for the job.|
|name|string|false|none|Required. The fully qualified resource name for the job.|
|state|string|false|none|The current state of the job.|
|status|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|Status capturing any error code or message related to job creation or execution.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|STATE_PENDING|
|state|STATE_RUNNING|
|state|STATE_DONE|
|state|STATE_FAILED|
|state|STATE_CANCELLED|

<h2 id="tocS_GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter">GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1launchflextemplateparameter"></a>
<a id="schema_GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter"></a>
<a id="tocSgoogleclouddatapipelinesv1launchflextemplateparameter"></a>
<a id="tocsgoogleclouddatapipelinesv1launchflextemplateparameter"></a>

```json
{
  "containerSpecGcsPath": "string",
  "environment": {
    "additionalExperiments": [
      "string"
    ],
    "additionalUserLabels": {
      "property1": "string",
      "property2": "string"
    },
    "enableStreamingEngine": true,
    "flexrsGoal": "FLEXRS_UNSPECIFIED",
    "ipConfiguration": "WORKER_IP_UNSPECIFIED",
    "kmsKeyName": "string",
    "machineType": "string",
    "maxWorkers": 0,
    "network": "string",
    "numWorkers": 0,
    "serviceAccountEmail": "string",
    "subnetwork": "string",
    "tempLocation": "string",
    "workerRegion": "string",
    "workerZone": "string",
    "zone": "string"
  },
  "jobName": "string",
  "launchOptions": {
    "property1": "string",
    "property2": "string"
  },
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "transformNameMappings": {
    "property1": "string",
    "property2": "string"
  },
  "update": true
}
```

Launch Flex Template parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerSpecGcsPath|string|false|none|Cloud Storage path to a file with a JSON-serialized ContainerSpec as content.|
|environment|[GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment](#schemagoogleclouddatapipelinesv1flextemplateruntimeenvironment)|false|none|The runtime environment for the Flex Template job.|
|jobName|string|false|none|Required. The job name to use for the created job. For an update job request, the job name should be the same as the existing running job.|
|launchOptions|object|false|none|Launch options for this Flex Template job. This is a common set of options across languages and templates. This should not be used to pass job parameters.|
|parameters|object|false|none|The parameters for the Flex Template. Example: `{"num_workers":"5"}`|
|transformNameMappings|object|false|none|Use this to pass transform name mappings for streaming update jobs. Example: `{"oldTransformName":"newTransformName",...}`|
|update|boolean|false|none|Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job.|

<h2 id="tocS_GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest">GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1launchflextemplaterequest"></a>
<a id="schema_GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest"></a>
<a id="tocSgoogleclouddatapipelinesv1launchflextemplaterequest"></a>
<a id="tocsgoogleclouddatapipelinesv1launchflextemplaterequest"></a>

```json
{
  "launchParameter": {
    "containerSpecGcsPath": "string",
    "environment": {
      "additionalExperiments": [
        "string"
      ],
      "additionalUserLabels": {
        "property1": "string",
        "property2": "string"
      },
      "enableStreamingEngine": true,
      "flexrsGoal": "FLEXRS_UNSPECIFIED",
      "ipConfiguration": "WORKER_IP_UNSPECIFIED",
      "kmsKeyName": "string",
      "machineType": "string",
      "maxWorkers": 0,
      "network": "string",
      "numWorkers": 0,
      "serviceAccountEmail": "string",
      "subnetwork": "string",
      "tempLocation": "string",
      "workerRegion": "string",
      "workerZone": "string",
      "zone": "string"
    },
    "jobName": "string",
    "launchOptions": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "transformNameMappings": {
      "property1": "string",
      "property2": "string"
    },
    "update": true
  },
  "location": "string",
  "projectId": "string",
  "validateOnly": true
}
```

A request to launch a Dataflow job from a Flex Template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchParameter|[GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter](#schemagoogleclouddatapipelinesv1launchflextemplateparameter)|false|none|Required. Parameter to launch a job from a Flex Template.|
|location|string|false|none|Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. For example, `us-central1`, `us-west1`.|
|projectId|string|false|none|Required. The ID of the Cloud Platform project that the job belongs to.|
|validateOnly|boolean|false|none|If true, the request is validated but not actually executed. Defaults to false.|

<h2 id="tocS_GoogleCloudDatapipelinesV1LaunchTemplateParameters">GoogleCloudDatapipelinesV1LaunchTemplateParameters</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1launchtemplateparameters"></a>
<a id="schema_GoogleCloudDatapipelinesV1LaunchTemplateParameters"></a>
<a id="tocSgoogleclouddatapipelinesv1launchtemplateparameters"></a>
<a id="tocsgoogleclouddatapipelinesv1launchtemplateparameters"></a>

```json
{
  "environment": {
    "additionalExperiments": [
      "string"
    ],
    "additionalUserLabels": {
      "property1": "string",
      "property2": "string"
    },
    "bypassTempDirValidation": true,
    "enableStreamingEngine": true,
    "ipConfiguration": "WORKER_IP_UNSPECIFIED",
    "kmsKeyName": "string",
    "machineType": "string",
    "maxWorkers": 0,
    "network": "string",
    "numWorkers": 0,
    "serviceAccountEmail": "string",
    "subnetwork": "string",
    "tempLocation": "string",
    "workerRegion": "string",
    "workerZone": "string",
    "zone": "string"
  },
  "jobName": "string",
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "transformNameMapping": {
    "property1": "string",
    "property2": "string"
  },
  "update": true
}
```

Parameters to provide to the template being launched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|[GoogleCloudDatapipelinesV1RuntimeEnvironment](#schemagoogleclouddatapipelinesv1runtimeenvironment)|false|none|The runtime environment for the job.|
|jobName|string|false|none|Required. The job name to use for the created job.|
|parameters|object|false|none|The runtime parameters to pass to the job.|
|transformNameMapping|object|false|none|Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. Only applicable when updating a pipeline.|
|update|boolean|false|none|If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.|

<h2 id="tocS_GoogleCloudDatapipelinesV1LaunchTemplateRequest">GoogleCloudDatapipelinesV1LaunchTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1launchtemplaterequest"></a>
<a id="schema_GoogleCloudDatapipelinesV1LaunchTemplateRequest"></a>
<a id="tocSgoogleclouddatapipelinesv1launchtemplaterequest"></a>
<a id="tocsgoogleclouddatapipelinesv1launchtemplaterequest"></a>

```json
{
  "gcsPath": "string",
  "launchParameters": {
    "environment": {
      "additionalExperiments": [
        "string"
      ],
      "additionalUserLabels": {
        "property1": "string",
        "property2": "string"
      },
      "bypassTempDirValidation": true,
      "enableStreamingEngine": true,
      "ipConfiguration": "WORKER_IP_UNSPECIFIED",
      "kmsKeyName": "string",
      "machineType": "string",
      "maxWorkers": 0,
      "network": "string",
      "numWorkers": 0,
      "serviceAccountEmail": "string",
      "subnetwork": "string",
      "tempLocation": "string",
      "workerRegion": "string",
      "workerZone": "string",
      "zone": "string"
    },
    "jobName": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "transformNameMapping": {
      "property1": "string",
      "property2": "string"
    },
    "update": true
  },
  "location": "string",
  "projectId": "string",
  "validateOnly": true
}
```

A request to launch a template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsPath|string|false|none|A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with 'gs://'.|
|launchParameters|[GoogleCloudDatapipelinesV1LaunchTemplateParameters](#schemagoogleclouddatapipelinesv1launchtemplateparameters)|false|none|The parameters of the template to launch. This should be part of the body of the POST request.|
|location|string|false|none|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.|
|projectId|string|false|none|Required. The ID of the Cloud Platform project that the job belongs to.|
|validateOnly|boolean|false|none|If true, the request is validated but not actually executed. Defaults to false.|

<h2 id="tocS_GoogleCloudDatapipelinesV1ListJobsResponse">GoogleCloudDatapipelinesV1ListJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1listjobsresponse"></a>
<a id="schema_GoogleCloudDatapipelinesV1ListJobsResponse"></a>
<a id="tocSgoogleclouddatapipelinesv1listjobsresponse"></a>
<a id="tocsgoogleclouddatapipelinesv1listjobsresponse"></a>

```json
{
  "jobs": [
    {
      "createTime": "string",
      "dataflowJobDetails": {
        "currentWorkers": 0,
        "resourceInfo": {
          "property1": 0,
          "property2": 0
        },
        "sdkVersion": {
          "sdkSupportStatus": "UNKNOWN",
          "version": "string",
          "versionDisplayName": "string"
        }
      },
      "endTime": "string",
      "id": "string",
      "name": "string",
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
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListJobs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[[GoogleCloudDatapipelinesV1Job](#schemagoogleclouddatapipelinesv1job)]|false|none|Results that were accessible to the caller. Results are always in descending order of job creation date.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleCloudDatapipelinesV1ListPipelinesResponse">GoogleCloudDatapipelinesV1ListPipelinesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1listpipelinesresponse"></a>
<a id="schema_GoogleCloudDatapipelinesV1ListPipelinesResponse"></a>
<a id="tocSgoogleclouddatapipelinesv1listpipelinesresponse"></a>
<a id="tocsgoogleclouddatapipelinesv1listpipelinesresponse"></a>

```json
{
  "nextPageToken": "string",
  "pipelines": [
    {
      "createTime": "string",
      "displayName": "string",
      "jobCount": 0,
      "lastUpdateTime": "string",
      "name": "string",
      "pipelineSources": {
        "property1": "string",
        "property2": "string"
      },
      "scheduleInfo": {
        "nextJobTime": "string",
        "schedule": "string",
        "timeZone": "string"
      },
      "schedulerServiceAccountEmail": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "PIPELINE_TYPE_UNSPECIFIED",
      "workload": {
        "dataflowFlexTemplateRequest": {
          "launchParameter": {
            "containerSpecGcsPath": "string",
            "environment": {
              "additionalExperiments": [
                "string"
              ],
              "additionalUserLabels": {
                "property1": "string",
                "property2": "string"
              },
              "enableStreamingEngine": true,
              "flexrsGoal": "FLEXRS_UNSPECIFIED",
              "ipConfiguration": "WORKER_IP_UNSPECIFIED",
              "kmsKeyName": "string",
              "machineType": "string",
              "maxWorkers": 0,
              "network": "string",
              "numWorkers": 0,
              "serviceAccountEmail": "string",
              "subnetwork": "string",
              "tempLocation": "string",
              "workerRegion": "string",
              "workerZone": "string",
              "zone": "string"
            },
            "jobName": "string",
            "launchOptions": {
              "property1": "string",
              "property2": "string"
            },
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "transformNameMappings": {
              "property1": "string",
              "property2": "string"
            },
            "update": true
          },
          "location": "string",
          "projectId": "string",
          "validateOnly": true
        },
        "dataflowLaunchTemplateRequest": {
          "gcsPath": "string",
          "launchParameters": {
            "environment": {
              "additionalExperiments": [
                "string"
              ],
              "additionalUserLabels": {
                "property1": "string",
                "property2": "string"
              },
              "bypassTempDirValidation": true,
              "enableStreamingEngine": true,
              "ipConfiguration": "WORKER_IP_UNSPECIFIED",
              "kmsKeyName": "string",
              "machineType": "string",
              "maxWorkers": 0,
              "network": "string",
              "numWorkers": 0,
              "serviceAccountEmail": "string",
              "subnetwork": "string",
              "tempLocation": "string",
              "workerRegion": "string",
              "workerZone": "string",
              "zone": "string"
            },
            "jobName": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "transformNameMapping": {
              "property1": "string",
              "property2": "string"
            },
            "update": true
          },
          "location": "string",
          "projectId": "string",
          "validateOnly": true
        }
      }
    }
  ]
}
```

Response message for ListPipelines.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|pipelines|[[GoogleCloudDatapipelinesV1Pipeline](#schemagoogleclouddatapipelinesv1pipeline)]|false|none|Results that matched the filter criteria and were accessible to the caller. Results are always in descending order of pipeline creation date.|

<h2 id="tocS_GoogleCloudDatapipelinesV1Pipeline">GoogleCloudDatapipelinesV1Pipeline</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1pipeline"></a>
<a id="schema_GoogleCloudDatapipelinesV1Pipeline"></a>
<a id="tocSgoogleclouddatapipelinesv1pipeline"></a>
<a id="tocsgoogleclouddatapipelinesv1pipeline"></a>

```json
{
  "createTime": "string",
  "displayName": "string",
  "jobCount": 0,
  "lastUpdateTime": "string",
  "name": "string",
  "pipelineSources": {
    "property1": "string",
    "property2": "string"
  },
  "scheduleInfo": {
    "nextJobTime": "string",
    "schedule": "string",
    "timeZone": "string"
  },
  "schedulerServiceAccountEmail": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "PIPELINE_TYPE_UNSPECIFIED",
  "workload": {
    "dataflowFlexTemplateRequest": {
      "launchParameter": {
        "containerSpecGcsPath": "string",
        "environment": {
          "additionalExperiments": [
            "string"
          ],
          "additionalUserLabels": {
            "property1": "string",
            "property2": "string"
          },
          "enableStreamingEngine": true,
          "flexrsGoal": "FLEXRS_UNSPECIFIED",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kmsKeyName": "string",
          "machineType": "string",
          "maxWorkers": 0,
          "network": "string",
          "numWorkers": 0,
          "serviceAccountEmail": "string",
          "subnetwork": "string",
          "tempLocation": "string",
          "workerRegion": "string",
          "workerZone": "string",
          "zone": "string"
        },
        "jobName": "string",
        "launchOptions": {
          "property1": "string",
          "property2": "string"
        },
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "transformNameMappings": {
          "property1": "string",
          "property2": "string"
        },
        "update": true
      },
      "location": "string",
      "projectId": "string",
      "validateOnly": true
    },
    "dataflowLaunchTemplateRequest": {
      "gcsPath": "string",
      "launchParameters": {
        "environment": {
          "additionalExperiments": [
            "string"
          ],
          "additionalUserLabels": {
            "property1": "string",
            "property2": "string"
          },
          "bypassTempDirValidation": true,
          "enableStreamingEngine": true,
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kmsKeyName": "string",
          "machineType": "string",
          "maxWorkers": 0,
          "network": "string",
          "numWorkers": 0,
          "serviceAccountEmail": "string",
          "subnetwork": "string",
          "tempLocation": "string",
          "workerRegion": "string",
          "workerZone": "string",
          "zone": "string"
        },
        "jobName": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "transformNameMapping": {
          "property1": "string",
          "property2": "string"
        },
        "update": true
      },
      "location": "string",
      "projectId": "string",
      "validateOnly": true
    }
  }
}
```

The main pipeline entity and all the necessary metadata for launching and managing linked jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Immutable. The timestamp when the pipeline was initially created. Set by the Data Pipelines service.|
|displayName|string|false|none|Required. The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_).|
|jobCount|integer(int32)|false|read-only|Output only. Number of jobs.|
|lastUpdateTime|string(google-datetime)|false|read-only|Output only. Immutable. The timestamp when the pipeline was last modified. Set by the Data Pipelines service.|
|name|string|false|none|The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location.|
|pipelineSources|object|false|none|Immutable. The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation.|
|scheduleInfo|[GoogleCloudDatapipelinesV1ScheduleSpec](#schemagoogleclouddatapipelinesv1schedulespec)|false|none|Internal scheduling information for a pipeline. If this information is provided, periodic jobs will be created per the schedule. If not, users are responsible for creating jobs externally.|
|schedulerServiceAccountEmail|string|false|none|Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used.|
|state|string|false|none|Required. The state of the pipeline. When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through UpdatePipeline requests.|
|type|string|false|none|Required. The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline.|
|workload|[GoogleCloudDatapipelinesV1Workload](#schemagoogleclouddatapipelinesv1workload)|false|none|Workload information for creating new jobs.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|STATE_RESUMING|
|state|STATE_ACTIVE|
|state|STATE_STOPPING|
|state|STATE_ARCHIVED|
|state|STATE_PAUSED|
|type|PIPELINE_TYPE_UNSPECIFIED|
|type|PIPELINE_TYPE_BATCH|
|type|PIPELINE_TYPE_STREAMING|

<h2 id="tocS_GoogleCloudDatapipelinesV1RunPipelineRequest">GoogleCloudDatapipelinesV1RunPipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1runpipelinerequest"></a>
<a id="schema_GoogleCloudDatapipelinesV1RunPipelineRequest"></a>
<a id="tocSgoogleclouddatapipelinesv1runpipelinerequest"></a>
<a id="tocsgoogleclouddatapipelinesv1runpipelinerequest"></a>

```json
{}
```

Request message for RunPipeline

<h2 id="tocS_GoogleCloudDatapipelinesV1RunPipelineResponse">GoogleCloudDatapipelinesV1RunPipelineResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1runpipelineresponse"></a>
<a id="schema_GoogleCloudDatapipelinesV1RunPipelineResponse"></a>
<a id="tocSgoogleclouddatapipelinesv1runpipelineresponse"></a>
<a id="tocsgoogleclouddatapipelinesv1runpipelineresponse"></a>

```json
{
  "job": {
    "createTime": "string",
    "dataflowJobDetails": {
      "currentWorkers": 0,
      "resourceInfo": {
        "property1": 0,
        "property2": 0
      },
      "sdkVersion": {
        "sdkSupportStatus": "UNKNOWN",
        "version": "string",
        "versionDisplayName": "string"
      }
    },
    "endTime": "string",
    "id": "string",
    "name": "string",
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
    }
  }
}
```

Response message for RunPipeline

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[GoogleCloudDatapipelinesV1Job](#schemagoogleclouddatapipelinesv1job)|false|none|Job that was created as part of RunPipeline operation.|

<h2 id="tocS_GoogleCloudDatapipelinesV1RuntimeEnvironment">GoogleCloudDatapipelinesV1RuntimeEnvironment</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1runtimeenvironment"></a>
<a id="schema_GoogleCloudDatapipelinesV1RuntimeEnvironment"></a>
<a id="tocSgoogleclouddatapipelinesv1runtimeenvironment"></a>
<a id="tocsgoogleclouddatapipelinesv1runtimeenvironment"></a>

```json
{
  "additionalExperiments": [
    "string"
  ],
  "additionalUserLabels": {
    "property1": "string",
    "property2": "string"
  },
  "bypassTempDirValidation": true,
  "enableStreamingEngine": true,
  "ipConfiguration": "WORKER_IP_UNSPECIFIED",
  "kmsKeyName": "string",
  "machineType": "string",
  "maxWorkers": 0,
  "network": "string",
  "numWorkers": 0,
  "serviceAccountEmail": "string",
  "subnetwork": "string",
  "tempLocation": "string",
  "workerRegion": "string",
  "workerZone": "string",
  "zone": "string"
}
```

The environment values to set at runtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalExperiments|[string]|false|none|Additional experiment flags for the job.|
|additionalUserLabels|object|false|none|Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of key/value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }.|
|bypassTempDirValidation|boolean|false|none|Whether to bypass the safety checks for the job's temporary directory. Use with caution.|
|enableStreamingEngine|boolean|false|none|Whether to enable Streaming Engine for the job.|
|ipConfiguration|string|false|none|Configuration for VM IPs.|
|kmsKeyName|string|false|none|Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/|
|machineType|string|false|none|The machine type to use for the job. Defaults to the value from the template if not specified.|
|maxWorkers|integer(int32)|false|none|The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.|
|network|string|false|none|Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".|
|numWorkers|integer(int32)|false|none|The initial number of Compute Engine instances for the job.|
|serviceAccountEmail|string|false|none|The email address of the service account to run the job as.|
|subnetwork|string|false|none|Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.|
|tempLocation|string|false|none|The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`.|
|workerRegion|string|false|none|The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region.|
|workerZone|string|false|none|The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence.|
|zone|string|false|none|The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence.|

#### Enumerated Values

|Property|Value|
|---|---|
|ipConfiguration|WORKER_IP_UNSPECIFIED|
|ipConfiguration|WORKER_IP_PUBLIC|
|ipConfiguration|WORKER_IP_PRIVATE|

<h2 id="tocS_GoogleCloudDatapipelinesV1ScheduleSpec">GoogleCloudDatapipelinesV1ScheduleSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1schedulespec"></a>
<a id="schema_GoogleCloudDatapipelinesV1ScheduleSpec"></a>
<a id="tocSgoogleclouddatapipelinesv1schedulespec"></a>
<a id="tocsgoogleclouddatapipelinesv1schedulespec"></a>

```json
{
  "nextJobTime": "string",
  "schedule": "string",
  "timeZone": "string"
}
```

Details of the schedule the pipeline runs on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextJobTime|string(google-datetime)|false|read-only|Output only. When the next Scheduler job is going to run.|
|schedule|string|false|none|Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler.|
|timeZone|string|false|none|Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed.|

<h2 id="tocS_GoogleCloudDatapipelinesV1SdkVersion">GoogleCloudDatapipelinesV1SdkVersion</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1sdkversion"></a>
<a id="schema_GoogleCloudDatapipelinesV1SdkVersion"></a>
<a id="tocSgoogleclouddatapipelinesv1sdkversion"></a>
<a id="tocsgoogleclouddatapipelinesv1sdkversion"></a>

```json
{
  "sdkSupportStatus": "UNKNOWN",
  "version": "string",
  "versionDisplayName": "string"
}
```

The version of the SDK used to run the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sdkSupportStatus|string|false|none|The support status for this SDK version.|
|version|string|false|none|The version of the SDK used to run the job.|
|versionDisplayName|string|false|none|A readable string describing the version of the SDK.|

#### Enumerated Values

|Property|Value|
|---|---|
|sdkSupportStatus|UNKNOWN|
|sdkSupportStatus|SUPPORTED|
|sdkSupportStatus|STALE|
|sdkSupportStatus|DEPRECATED|
|sdkSupportStatus|UNSUPPORTED|

<h2 id="tocS_GoogleCloudDatapipelinesV1StopPipelineRequest">GoogleCloudDatapipelinesV1StopPipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1stoppipelinerequest"></a>
<a id="schema_GoogleCloudDatapipelinesV1StopPipelineRequest"></a>
<a id="tocSgoogleclouddatapipelinesv1stoppipelinerequest"></a>
<a id="tocsgoogleclouddatapipelinesv1stoppipelinerequest"></a>

```json
{}
```

Request message for StopPipeline.

<h2 id="tocS_GoogleCloudDatapipelinesV1Workload">GoogleCloudDatapipelinesV1Workload</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatapipelinesv1workload"></a>
<a id="schema_GoogleCloudDatapipelinesV1Workload"></a>
<a id="tocSgoogleclouddatapipelinesv1workload"></a>
<a id="tocsgoogleclouddatapipelinesv1workload"></a>

```json
{
  "dataflowFlexTemplateRequest": {
    "launchParameter": {
      "containerSpecGcsPath": "string",
      "environment": {
        "additionalExperiments": [
          "string"
        ],
        "additionalUserLabels": {
          "property1": "string",
          "property2": "string"
        },
        "enableStreamingEngine": true,
        "flexrsGoal": "FLEXRS_UNSPECIFIED",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kmsKeyName": "string",
        "machineType": "string",
        "maxWorkers": 0,
        "network": "string",
        "numWorkers": 0,
        "serviceAccountEmail": "string",
        "subnetwork": "string",
        "tempLocation": "string",
        "workerRegion": "string",
        "workerZone": "string",
        "zone": "string"
      },
      "jobName": "string",
      "launchOptions": {
        "property1": "string",
        "property2": "string"
      },
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "transformNameMappings": {
        "property1": "string",
        "property2": "string"
      },
      "update": true
    },
    "location": "string",
    "projectId": "string",
    "validateOnly": true
  },
  "dataflowLaunchTemplateRequest": {
    "gcsPath": "string",
    "launchParameters": {
      "environment": {
        "additionalExperiments": [
          "string"
        ],
        "additionalUserLabels": {
          "property1": "string",
          "property2": "string"
        },
        "bypassTempDirValidation": true,
        "enableStreamingEngine": true,
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kmsKeyName": "string",
        "machineType": "string",
        "maxWorkers": 0,
        "network": "string",
        "numWorkers": 0,
        "serviceAccountEmail": "string",
        "subnetwork": "string",
        "tempLocation": "string",
        "workerRegion": "string",
        "workerZone": "string",
        "zone": "string"
      },
      "jobName": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "transformNameMapping": {
        "property1": "string",
        "property2": "string"
      },
      "update": true
    },
    "location": "string",
    "projectId": "string",
    "validateOnly": true
  }
}
```

Workload details for creating the pipeline jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataflowFlexTemplateRequest|[GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest](#schemagoogleclouddatapipelinesv1launchflextemplaterequest)|false|none|Template information and additional parameters needed to launch a Dataflow job using the flex launch API.|
|dataflowLaunchTemplateRequest|[GoogleCloudDatapipelinesV1LaunchTemplateRequest](#schemagoogleclouddatapipelinesv1launchtemplaterequest)|false|none|Template information and additional parameters needed to launch a Dataflow job using the standard launch API.|

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
