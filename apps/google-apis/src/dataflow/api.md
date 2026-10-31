<h1 id="dataflow-api">Dataflow API v1b3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Manages Google Cloud Dataflow projects on Google Cloud Platform.

Base URLs:

* <a href="https://dataflow.googleapis.com/">https://dataflow.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/dataflow">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/compute|View and manage your Google Compute Engine resources|
|https://www.googleapis.com/auth/compute.readonly|View your Google Compute Engine resources|
|https://www.googleapis.com/auth/userinfo.email|See your primary Google Account email address|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/compute|View and manage your Google Compute Engine resources|
|https://www.googleapis.com/auth/compute.readonly|View your Google Compute Engine resources|
|https://www.googleapis.com/auth/userinfo.email|See your primary Google Account email address|

<h1 id="dataflow-api-projects">projects</h1>

## dataflow.projects.workerMessages

<a id="opIddataflow.projects.workerMessages"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/WorkerMessages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "location": "string",
    "workerMessages": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "time": "string",
        "workerHealthReport": {
          "msg": "string",
          "pods": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "reportInterval": "string",
          "vmBrokenCode": "string",
          "vmIsBroken": true,
          "vmIsHealthy": true,
          "vmStartupTime": "string"
        },
        "workerLifecycleEvent": {
          "containerStartTime": "string",
          "event": "UNKNOWN_EVENT",
          "metadata": {
            "property1": "string",
            "property2": "string"
          }
        },
        "workerMessageCode": {
          "code": "string",
          "parameters": {
            "property1": null,
            "property2": null
          }
        },
        "workerMetrics": {
          "containers": {
            "property1": {},
            "property2": {}
          },
          "cpuTime": [
            {
              "rate": 0,
              "timestamp": "string",
              "totalMs": "string"
            }
          ],
          "memoryInfo": [
            {
              "currentLimitBytes": "string",
              "currentOoms": "string",
              "currentRssBytes": "string",
              "timestamp": "string",
              "totalGbMs": "string"
            }
          ]
        },
        "workerShutdownNotice": {
          "reason": "string"
        },
        "workerThreadScalingReport": {
          "currentThreadCount": 0
        }
      }
    ]
  }'
```

`POST /v1b3/projects/{projectId}/WorkerMessages`

Send a worker_message to the service.

> Body parameter

```json
{
  "location": "string",
  "workerMessages": [
    {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "time": "string",
      "workerHealthReport": {
        "msg": "string",
        "pods": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "reportInterval": "string",
        "vmBrokenCode": "string",
        "vmIsBroken": true,
        "vmIsHealthy": true,
        "vmStartupTime": "string"
      },
      "workerLifecycleEvent": {
        "containerStartTime": "string",
        "event": "UNKNOWN_EVENT",
        "metadata": {
          "property1": "string",
          "property2": "string"
        }
      },
      "workerMessageCode": {
        "code": "string",
        "parameters": {
          "property1": null,
          "property2": null
        }
      },
      "workerMetrics": {
        "containers": {
          "property1": {},
          "property2": {}
        },
        "cpuTime": [
          {
            "rate": 0,
            "timestamp": "string",
            "totalMs": "string"
          }
        ],
        "memoryInfo": [
          {
            "currentLimitBytes": "string",
            "currentOoms": "string",
            "currentRssBytes": "string",
            "timestamp": "string",
            "totalGbMs": "string"
          }
        ]
      },
      "workerShutdownNotice": {
        "reason": "string"
      },
      "workerThreadScalingReport": {
        "currentThreadCount": 0
      }
    }
  ]
}
```

<h3 id="dataflowprojectsworkermessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project to send the WorkerMessages to.|
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
|body|body|[SendWorkerMessagesRequest](#schemasendworkermessagesrequest)|false|none|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job.|
|» workerMessages|body|[[WorkerMessage](#schemaworkermessage)]|false|The WorkerMessages to send.|

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
  "workerMessageResponses": [
    {
      "workerHealthReportResponse": {
        "reportInterval": "string"
      },
      "workerMetricsResponse": {},
      "workerShutdownNoticeResponse": {},
      "workerThreadScalingReportResponse": {
        "recommendedThreadCount": 0
      }
    }
  ]
}
```

<h3 id="dataflowprojectsworkermessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SendWorkerMessagesResponse](#schemasendworkermessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.jobs.list

<a id="opIddataflow.projects.jobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/jobs`

List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.

<h3 id="dataflowprojectsjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project which owns the jobs.|
|filter|query|string|false|The kind of filter to use.|
|location|query|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.|
|name|query|string|false|Optional. The job name. Optional.|
|pageSize|query|integer|false|If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.|
|pageToken|query|string|false|Set this to the 'next_page_token' field of a previous response to request additional results in a long list.|
|view|query|string|false|Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.|
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
|filter|UNKNOWN|
|filter|ALL|
|filter|TERMINATED|
|filter|ACTIVE|
|view|JOB_VIEW_UNKNOWN|
|view|JOB_VIEW_SUMMARY|
|view|JOB_VIEW_ALL|
|view|JOB_VIEW_DESCRIPTION|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "failedLocation": [
    {
      "name": "string"
    }
  ],
  "jobs": [
    {
      "clientRequestId": "string",
      "createTime": "string",
      "createdFromSnapshotId": "string",
      "currentState": "JOB_STATE_UNKNOWN",
      "currentStateTime": "string",
      "environment": {
        "clusterManagerApiService": "string",
        "dataset": "string",
        "debugOptions": {
          "enableHotKeyLogging": true
        },
        "experiments": [
          "string"
        ],
        "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
        "internalExperiments": {
          "property1": null,
          "property2": null
        },
        "sdkPipelineOptions": {
          "property1": null,
          "property2": null
        },
        "serviceAccountEmail": "string",
        "serviceKmsKeyName": "string",
        "serviceOptions": [
          "string"
        ],
        "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
        "tempStoragePrefix": "string",
        "userAgent": {
          "property1": null,
          "property2": null
        },
        "version": {
          "property1": null,
          "property2": null
        },
        "workerPools": [
          {
            "autoscalingSettings": {
              "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
              "maxNumWorkers": 0
            },
            "dataDisks": [
              {
                "diskType": "string",
                "mountPoint": "string",
                "sizeGb": 0
              }
            ],
            "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
            "diskSizeGb": 0,
            "diskSourceImage": "string",
            "diskType": "string",
            "ipConfiguration": "WORKER_IP_UNSPECIFIED",
            "kind": "string",
            "machineType": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "network": "string",
            "numThreadsPerWorker": 0,
            "numWorkers": 0,
            "onHostMaintenance": "string",
            "packages": [
              {
                "location": "string",
                "name": "string"
              }
            ],
            "poolArgs": {
              "property1": null,
              "property2": null
            },
            "sdkHarnessContainerImages": [
              {
                "capabilities": [
                  "string"
                ],
                "containerImage": "string",
                "environmentId": "string",
                "useSingleCorePerContainer": true
              }
            ],
            "subnetwork": "string",
            "taskrunnerSettings": {
              "alsologtostderr": true,
              "baseTaskDir": "string",
              "baseUrl": "string",
              "commandlinesFileName": "string",
              "continueOnException": true,
              "dataflowApiVersion": "string",
              "harnessCommand": "string",
              "languageHint": "string",
              "logDir": "string",
              "logToSerialconsole": true,
              "logUploadLocation": "string",
              "oauthScopes": [
                "string"
              ],
              "parallelWorkerSettings": {
                "baseUrl": "string",
                "reportingEnabled": true,
                "servicePath": "string",
                "shuffleServicePath": "string",
                "tempStoragePrefix": "string",
                "workerId": "string"
              },
              "streamingWorkerMainClass": "string",
              "taskGroup": "string",
              "taskUser": "string",
              "tempStoragePrefix": "string",
              "vmId": "string",
              "workflowFileName": "string"
            },
            "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
            "workerHarnessContainerImage": "string",
            "zone": "string"
          }
        ],
        "workerRegion": "string",
        "workerZone": "string"
      },
      "executionInfo": {
        "stages": {
          "property1": {
            "stepName": [
              "string"
            ]
          },
          "property2": {
            "stepName": [
              "string"
            ]
          }
        }
      },
      "id": "string",
      "jobMetadata": {
        "bigTableDetails": [
          {
            "instanceId": "string",
            "projectId": "string",
            "tableId": "string"
          }
        ],
        "bigqueryDetails": [
          {
            "dataset": "string",
            "projectId": "string",
            "query": "string",
            "table": "string"
          }
        ],
        "datastoreDetails": [
          {
            "namespace": "string",
            "projectId": "string"
          }
        ],
        "fileDetails": [
          {
            "filePattern": "string"
          }
        ],
        "pubsubDetails": [
          {
            "subscription": "string",
            "topic": "string"
          }
        ],
        "sdkVersion": {
          "sdkSupportStatus": "UNKNOWN",
          "version": "string",
          "versionDisplayName": "string"
        },
        "spannerDetails": [
          {
            "databaseId": "string",
            "instanceId": "string",
            "projectId": "string"
          }
        ],
        "userDisplayProperties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "location": "string",
      "name": "string",
      "pipelineDescription": {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "executionPipelineStage": [
          {
            "componentSource": [
              {
                "name": "string",
                "originalTransformOrCollection": "string",
                "userName": "string"
              }
            ],
            "componentTransform": [
              {
                "name": "string",
                "originalTransform": "string",
                "userName": "string"
              }
            ],
            "id": "string",
            "inputSource": [
              {
                "name": "string",
                "originalTransformOrCollection": "string",
                "sizeBytes": "string",
                "userName": "string"
              }
            ],
            "kind": "UNKNOWN_KIND",
            "name": "string",
            "outputSource": [
              {
                "name": "string",
                "originalTransformOrCollection": "string",
                "sizeBytes": "string",
                "userName": "string"
              }
            ],
            "prerequisiteStage": [
              "string"
            ]
          }
        ],
        "originalPipelineTransform": [
          {
            "displayData": [
              {
                "boolValue": true,
                "durationValue": "string",
                "floatValue": 0,
                "int64Value": "string",
                "javaClassValue": "string",
                "key": "string",
                "label": "string",
                "namespace": "string",
                "shortStrValue": "string",
                "strValue": "string",
                "timestampValue": "string",
                "url": "string"
              }
            ],
            "id": "string",
            "inputCollectionName": [
              "string"
            ],
            "kind": "UNKNOWN_KIND",
            "name": "string",
            "outputCollectionName": [
              "string"
            ]
          }
        ],
        "stepNamesHash": "string"
      },
      "projectId": "string",
      "replaceJobId": "string",
      "replacedByJobId": "string",
      "requestedState": "JOB_STATE_UNKNOWN",
      "satisfiesPzs": true,
      "stageStates": [
        {
          "currentStateTime": "string",
          "executionStageName": "string",
          "executionStageState": "JOB_STATE_UNKNOWN"
        }
      ],
      "startTime": "string",
      "steps": [
        {
          "kind": "string",
          "name": "string",
          "properties": {
            "property1": null,
            "property2": null
          }
        }
      ],
      "stepsLocation": "string",
      "tempFiles": [
        "string"
      ],
      "transformNameMapping": {
        "property1": "string",
        "property2": "string"
      },
      "type": "JOB_TYPE_UNKNOWN"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataflowprojectsjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListJobsResponse](#schemalistjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.jobs.create

<a id="opIddataflow.projects.jobs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientRequestId": "string",
    "createTime": "string",
    "createdFromSnapshotId": "string",
    "currentState": "JOB_STATE_UNKNOWN",
    "currentStateTime": "string",
    "environment": {
      "clusterManagerApiService": "string",
      "dataset": "string",
      "debugOptions": {
        "enableHotKeyLogging": true
      },
      "experiments": [
        "string"
      ],
      "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
      "internalExperiments": {
        "property1": null,
        "property2": null
      },
      "sdkPipelineOptions": {
        "property1": null,
        "property2": null
      },
      "serviceAccountEmail": "string",
      "serviceKmsKeyName": "string",
      "serviceOptions": [
        "string"
      ],
      "tempStoragePrefix": "string",
      "userAgent": {
        "property1": null,
        "property2": null
      },
      "version": {
        "property1": null,
        "property2": null
      },
      "workerPools": [
        {
          "autoscalingSettings": {
            "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
            "maxNumWorkers": 0
          },
          "dataDisks": [
            {
              "diskType": "string",
              "mountPoint": "string",
              "sizeGb": 0
            }
          ],
          "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
          "diskSizeGb": 0,
          "diskSourceImage": "string",
          "diskType": "string",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kind": "string",
          "machineType": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "network": "string",
          "numThreadsPerWorker": 0,
          "numWorkers": 0,
          "onHostMaintenance": "string",
          "packages": [
            {
              "location": "string",
              "name": "string"
            }
          ],
          "poolArgs": {
            "property1": null,
            "property2": null
          },
          "sdkHarnessContainerImages": [
            {
              "capabilities": [
                "string"
              ],
              "containerImage": "string",
              "environmentId": "string",
              "useSingleCorePerContainer": true
            }
          ],
          "subnetwork": "string",
          "taskrunnerSettings": {
            "alsologtostderr": true,
            "baseTaskDir": "string",
            "baseUrl": "string",
            "commandlinesFileName": "string",
            "continueOnException": true,
            "dataflowApiVersion": "string",
            "harnessCommand": "string",
            "languageHint": "string",
            "logDir": "string",
            "logToSerialconsole": true,
            "logUploadLocation": "string",
            "oauthScopes": [
              "string"
            ],
            "parallelWorkerSettings": {
              "baseUrl": "string",
              "reportingEnabled": true,
              "servicePath": "string",
              "shuffleServicePath": "string",
              "tempStoragePrefix": "string",
              "workerId": "string"
            },
            "streamingWorkerMainClass": "string",
            "taskGroup": "string",
            "taskUser": "string",
            "tempStoragePrefix": "string",
            "vmId": "string",
            "workflowFileName": "string"
          },
          "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
          "workerHarnessContainerImage": "string",
          "zone": "string"
        }
      ],
      "workerRegion": "string",
      "workerZone": "string"
    },
    "executionInfo": {
      "stages": {
        "property1": {
          "stepName": [
            "string"
          ]
        },
        "property2": {
          "stepName": [
            "string"
          ]
        }
      }
    },
    "id": "string",
    "jobMetadata": {
      "bigTableDetails": [
        {
          "instanceId": "string",
          "projectId": "string",
          "tableId": "string"
        }
      ],
      "bigqueryDetails": [
        {
          "dataset": "string",
          "projectId": "string",
          "query": "string",
          "table": "string"
        }
      ],
      "datastoreDetails": [
        {
          "namespace": "string",
          "projectId": "string"
        }
      ],
      "fileDetails": [
        {
          "filePattern": "string"
        }
      ],
      "pubsubDetails": [
        {
          "subscription": "string",
          "topic": "string"
        }
      ],
      "sdkVersion": {
        "sdkSupportStatus": "UNKNOWN",
        "version": "string",
        "versionDisplayName": "string"
      },
      "spannerDetails": [
        {
          "databaseId": "string",
          "instanceId": "string",
          "projectId": "string"
        }
      ],
      "userDisplayProperties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": "string",
    "name": "string",
    "pipelineDescription": {
      "displayData": [
        {
          "boolValue": true,
          "durationValue": "string",
          "floatValue": 0,
          "int64Value": "string",
          "javaClassValue": "string",
          "key": "string",
          "label": "string",
          "namespace": "string",
          "shortStrValue": "string",
          "strValue": "string",
          "timestampValue": "string",
          "url": "string"
        }
      ],
      "executionPipelineStage": [
        {
          "componentSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "userName": "string"
            }
          ],
          "componentTransform": [
            {
              "name": "string",
              "originalTransform": "string",
              "userName": "string"
            }
          ],
          "id": "string",
          "inputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "prerequisiteStage": [
            "string"
          ]
        }
      ],
      "originalPipelineTransform": [
        {
          "displayData": [
            {
              "boolValue": true,
              "durationValue": "string",
              "floatValue": 0,
              "int64Value": "string",
              "javaClassValue": "string",
              "key": "string",
              "label": "string",
              "namespace": "string",
              "shortStrValue": "string",
              "strValue": "string",
              "timestampValue": "string",
              "url": "string"
            }
          ],
          "id": "string",
          "inputCollectionName": [
            "string"
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputCollectionName": [
            "string"
          ]
        }
      ],
      "stepNamesHash": "string"
    },
    "projectId": "string",
    "replaceJobId": "string",
    "replacedByJobId": "string",
    "requestedState": "JOB_STATE_UNKNOWN",
    "satisfiesPzs": true,
    "stageStates": [
      {
        "currentStateTime": "string",
        "executionStageName": "string",
        "executionStageState": "JOB_STATE_UNKNOWN"
      }
    ],
    "startTime": "string",
    "steps": [
      {
        "kind": "string",
        "name": "string",
        "properties": {
          "property1": null,
          "property2": null
        }
      }
    ],
    "stepsLocation": "string",
    "tempFiles": [
      "string"
    ],
    "transformNameMapping": {
      "property1": "string",
      "property2": "string"
    },
    "type": "JOB_TYPE_UNKNOWN"
  }'
```

`POST /v1b3/projects/{projectId}/jobs`

Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.

> Body parameter

```json
{
  "clientRequestId": "string",
  "createTime": "string",
  "createdFromSnapshotId": "string",
  "currentState": "JOB_STATE_UNKNOWN",
  "currentStateTime": "string",
  "environment": {
    "clusterManagerApiService": "string",
    "dataset": "string",
    "debugOptions": {
      "enableHotKeyLogging": true
    },
    "experiments": [
      "string"
    ],
    "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
    "internalExperiments": {
      "property1": null,
      "property2": null
    },
    "sdkPipelineOptions": {
      "property1": null,
      "property2": null
    },
    "serviceAccountEmail": "string",
    "serviceKmsKeyName": "string",
    "serviceOptions": [
      "string"
    ],
    "tempStoragePrefix": "string",
    "userAgent": {
      "property1": null,
      "property2": null
    },
    "version": {
      "property1": null,
      "property2": null
    },
    "workerPools": [
      {
        "autoscalingSettings": {
          "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
          "maxNumWorkers": 0
        },
        "dataDisks": [
          {
            "diskType": "string",
            "mountPoint": "string",
            "sizeGb": 0
          }
        ],
        "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
        "diskSizeGb": 0,
        "diskSourceImage": "string",
        "diskType": "string",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kind": "string",
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "network": "string",
        "numThreadsPerWorker": 0,
        "numWorkers": 0,
        "onHostMaintenance": "string",
        "packages": [
          {
            "location": "string",
            "name": "string"
          }
        ],
        "poolArgs": {
          "property1": null,
          "property2": null
        },
        "sdkHarnessContainerImages": [
          {
            "capabilities": [
              "string"
            ],
            "containerImage": "string",
            "environmentId": "string",
            "useSingleCorePerContainer": true
          }
        ],
        "subnetwork": "string",
        "taskrunnerSettings": {
          "alsologtostderr": true,
          "baseTaskDir": "string",
          "baseUrl": "string",
          "commandlinesFileName": "string",
          "continueOnException": true,
          "dataflowApiVersion": "string",
          "harnessCommand": "string",
          "languageHint": "string",
          "logDir": "string",
          "logToSerialconsole": true,
          "logUploadLocation": "string",
          "oauthScopes": [
            "string"
          ],
          "parallelWorkerSettings": {
            "baseUrl": "string",
            "reportingEnabled": true,
            "servicePath": "string",
            "shuffleServicePath": "string",
            "tempStoragePrefix": "string",
            "workerId": "string"
          },
          "streamingWorkerMainClass": "string",
          "taskGroup": "string",
          "taskUser": "string",
          "tempStoragePrefix": "string",
          "vmId": "string",
          "workflowFileName": "string"
        },
        "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
        "workerHarnessContainerImage": "string",
        "zone": "string"
      }
    ],
    "workerRegion": "string",
    "workerZone": "string"
  },
  "executionInfo": {
    "stages": {
      "property1": {
        "stepName": [
          "string"
        ]
      },
      "property2": {
        "stepName": [
          "string"
        ]
      }
    }
  },
  "id": "string",
  "jobMetadata": {
    "bigTableDetails": [
      {
        "instanceId": "string",
        "projectId": "string",
        "tableId": "string"
      }
    ],
    "bigqueryDetails": [
      {
        "dataset": "string",
        "projectId": "string",
        "query": "string",
        "table": "string"
      }
    ],
    "datastoreDetails": [
      {
        "namespace": "string",
        "projectId": "string"
      }
    ],
    "fileDetails": [
      {
        "filePattern": "string"
      }
    ],
    "pubsubDetails": [
      {
        "subscription": "string",
        "topic": "string"
      }
    ],
    "sdkVersion": {
      "sdkSupportStatus": "UNKNOWN",
      "version": "string",
      "versionDisplayName": "string"
    },
    "spannerDetails": [
      {
        "databaseId": "string",
        "instanceId": "string",
        "projectId": "string"
      }
    ],
    "userDisplayProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "pipelineDescription": {
    "displayData": [
      {
        "boolValue": true,
        "durationValue": "string",
        "floatValue": 0,
        "int64Value": "string",
        "javaClassValue": "string",
        "key": "string",
        "label": "string",
        "namespace": "string",
        "shortStrValue": "string",
        "strValue": "string",
        "timestampValue": "string",
        "url": "string"
      }
    ],
    "executionPipelineStage": [
      {
        "componentSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "userName": "string"
          }
        ],
        "componentTransform": [
          {
            "name": "string",
            "originalTransform": "string",
            "userName": "string"
          }
        ],
        "id": "string",
        "inputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "prerequisiteStage": [
          "string"
        ]
      }
    ],
    "originalPipelineTransform": [
      {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "id": "string",
        "inputCollectionName": [
          "string"
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputCollectionName": [
          "string"
        ]
      }
    ],
    "stepNamesHash": "string"
  },
  "projectId": "string",
  "replaceJobId": "string",
  "replacedByJobId": "string",
  "requestedState": "JOB_STATE_UNKNOWN",
  "satisfiesPzs": true,
  "stageStates": [
    {
      "currentStateTime": "string",
      "executionStageName": "string",
      "executionStageState": "JOB_STATE_UNKNOWN"
    }
  ],
  "startTime": "string",
  "steps": [
    {
      "kind": "string",
      "name": "string",
      "properties": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "stepsLocation": "string",
  "tempFiles": [
    "string"
  ],
  "transformNameMapping": {
    "property1": "string",
    "property2": "string"
  },
  "type": "JOB_TYPE_UNKNOWN"
}
```

<h3 id="dataflowprojectsjobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the Cloud Platform project that the job belongs to.|
|location|query|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.|
|replaceJobId|query|string|false|Deprecated. This field is now in the Job message.|
|view|query|string|false|The level of information requested in response.|
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
|» clientRequestId|body|string|false|The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it.|
|» createTime|body|string(google-datetime)|false|The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service.|
|» createdFromSnapshotId|body|string|false|If this is specified, the job's initial state is populated from the given snapshot.|
|» currentState|body|string|false|The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.|
|» currentStateTime|body|string(google-datetime)|false|The timestamp associated with the current state.|
|» environment|body|[Environment](#schemaenvironment)|false|The environment for the job.|
|» executionInfo|body|[JobExecutionInfo](#schemajobexecutioninfo)|false|Deprecated.|
|» id|body|string|false|The unique ID of this job. This field is set by the Cloud Dataflow service when the Job is created, and is immutable for the life of the job.|
|» jobMetadata|body|[JobMetadata](#schemajobmetadata)|false|This field is populated by the Dataflow service to support filtering jobs by the metadata values provided here. Populated for ListJobs and all GetJob views SUMMARY and higher.|
|» labels|body|object|false|User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.|
|» » **additionalProperties**|body|string|false|none|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.|
|» name|body|string|false|The user-specified Cloud Dataflow job name. Only one Job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a Job with the same name as an already-existing Job, the attempt returns the existing Job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?`|
|» pipelineDescription|body|[PipelineDescription](#schemapipelinedescription)|false|Preliminary field: The format of this data may change at any time. A description of the user pipeline and stages through which it is executed. Created by Cloud Dataflow service. Only retrieved with JOB_VIEW_DESCRIPTION or JOB_VIEW_ALL.|
|» projectId|body|string|false|The ID of the Cloud Platform project that the job belongs to.|
|» replaceJobId|body|string|false|If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job.|
|» replacedByJobId|body|string|false|If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job.|
|» requestedState|body|string|false|The job's requested state. `UpdateJob` may be used to switch between the `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING` states, by setting requested_state. `UpdateJob` may also be used to directly set a job's requested state to `JOB_STATE_CANCELLED` or `JOB_STATE_DONE`, irrevocably terminating the job if it has not already reached a terminal state.|
|» satisfiesPzs|body|boolean|false|Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.|
|» stageStates|body|[[ExecutionStageState](#schemaexecutionstagestate)]|false|This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.|
|» startTime|body|string(google-datetime)|false|The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service.|
|» steps|body|[[Step](#schemastep)]|false|Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL.|
|» stepsLocation|body|string|false|The Cloud Storage location where the steps are stored.|
|» tempFiles|body|[string]|false|A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}|
|» transformNameMapping|body|object|false|The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string|false|The type of Cloud Dataflow job.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|JOB_VIEW_UNKNOWN|
|view|JOB_VIEW_SUMMARY|
|view|JOB_VIEW_ALL|
|view|JOB_VIEW_DESCRIPTION|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» currentState|JOB_STATE_UNKNOWN|
|» currentState|JOB_STATE_STOPPED|
|» currentState|JOB_STATE_RUNNING|
|» currentState|JOB_STATE_DONE|
|» currentState|JOB_STATE_FAILED|
|» currentState|JOB_STATE_CANCELLED|
|» currentState|JOB_STATE_UPDATED|
|» currentState|JOB_STATE_DRAINING|
|» currentState|JOB_STATE_DRAINED|
|» currentState|JOB_STATE_PENDING|
|» currentState|JOB_STATE_CANCELLING|
|» currentState|JOB_STATE_QUEUED|
|» currentState|JOB_STATE_RESOURCE_CLEANING_UP|
|» requestedState|JOB_STATE_UNKNOWN|
|» requestedState|JOB_STATE_STOPPED|
|» requestedState|JOB_STATE_RUNNING|
|» requestedState|JOB_STATE_DONE|
|» requestedState|JOB_STATE_FAILED|
|» requestedState|JOB_STATE_CANCELLED|
|» requestedState|JOB_STATE_UPDATED|
|» requestedState|JOB_STATE_DRAINING|
|» requestedState|JOB_STATE_DRAINED|
|» requestedState|JOB_STATE_PENDING|
|» requestedState|JOB_STATE_CANCELLING|
|» requestedState|JOB_STATE_QUEUED|
|» requestedState|JOB_STATE_RESOURCE_CLEANING_UP|
|» type|JOB_TYPE_UNKNOWN|
|» type|JOB_TYPE_BATCH|
|» type|JOB_TYPE_STREAMING|

> Example responses

> 200 Response

```json
{
  "clientRequestId": "string",
  "createTime": "string",
  "createdFromSnapshotId": "string",
  "currentState": "JOB_STATE_UNKNOWN",
  "currentStateTime": "string",
  "environment": {
    "clusterManagerApiService": "string",
    "dataset": "string",
    "debugOptions": {
      "enableHotKeyLogging": true
    },
    "experiments": [
      "string"
    ],
    "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
    "internalExperiments": {
      "property1": null,
      "property2": null
    },
    "sdkPipelineOptions": {
      "property1": null,
      "property2": null
    },
    "serviceAccountEmail": "string",
    "serviceKmsKeyName": "string",
    "serviceOptions": [
      "string"
    ],
    "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
    "tempStoragePrefix": "string",
    "userAgent": {
      "property1": null,
      "property2": null
    },
    "version": {
      "property1": null,
      "property2": null
    },
    "workerPools": [
      {
        "autoscalingSettings": {
          "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
          "maxNumWorkers": 0
        },
        "dataDisks": [
          {
            "diskType": "string",
            "mountPoint": "string",
            "sizeGb": 0
          }
        ],
        "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
        "diskSizeGb": 0,
        "diskSourceImage": "string",
        "diskType": "string",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kind": "string",
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "network": "string",
        "numThreadsPerWorker": 0,
        "numWorkers": 0,
        "onHostMaintenance": "string",
        "packages": [
          {
            "location": "string",
            "name": "string"
          }
        ],
        "poolArgs": {
          "property1": null,
          "property2": null
        },
        "sdkHarnessContainerImages": [
          {
            "capabilities": [
              "string"
            ],
            "containerImage": "string",
            "environmentId": "string",
            "useSingleCorePerContainer": true
          }
        ],
        "subnetwork": "string",
        "taskrunnerSettings": {
          "alsologtostderr": true,
          "baseTaskDir": "string",
          "baseUrl": "string",
          "commandlinesFileName": "string",
          "continueOnException": true,
          "dataflowApiVersion": "string",
          "harnessCommand": "string",
          "languageHint": "string",
          "logDir": "string",
          "logToSerialconsole": true,
          "logUploadLocation": "string",
          "oauthScopes": [
            "string"
          ],
          "parallelWorkerSettings": {
            "baseUrl": "string",
            "reportingEnabled": true,
            "servicePath": "string",
            "shuffleServicePath": "string",
            "tempStoragePrefix": "string",
            "workerId": "string"
          },
          "streamingWorkerMainClass": "string",
          "taskGroup": "string",
          "taskUser": "string",
          "tempStoragePrefix": "string",
          "vmId": "string",
          "workflowFileName": "string"
        },
        "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
        "workerHarnessContainerImage": "string",
        "zone": "string"
      }
    ],
    "workerRegion": "string",
    "workerZone": "string"
  },
  "executionInfo": {
    "stages": {
      "property1": {
        "stepName": [
          "string"
        ]
      },
      "property2": {
        "stepName": [
          "string"
        ]
      }
    }
  },
  "id": "string",
  "jobMetadata": {
    "bigTableDetails": [
      {
        "instanceId": "string",
        "projectId": "string",
        "tableId": "string"
      }
    ],
    "bigqueryDetails": [
      {
        "dataset": "string",
        "projectId": "string",
        "query": "string",
        "table": "string"
      }
    ],
    "datastoreDetails": [
      {
        "namespace": "string",
        "projectId": "string"
      }
    ],
    "fileDetails": [
      {
        "filePattern": "string"
      }
    ],
    "pubsubDetails": [
      {
        "subscription": "string",
        "topic": "string"
      }
    ],
    "sdkVersion": {
      "sdkSupportStatus": "UNKNOWN",
      "version": "string",
      "versionDisplayName": "string"
    },
    "spannerDetails": [
      {
        "databaseId": "string",
        "instanceId": "string",
        "projectId": "string"
      }
    ],
    "userDisplayProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "pipelineDescription": {
    "displayData": [
      {
        "boolValue": true,
        "durationValue": "string",
        "floatValue": 0,
        "int64Value": "string",
        "javaClassValue": "string",
        "key": "string",
        "label": "string",
        "namespace": "string",
        "shortStrValue": "string",
        "strValue": "string",
        "timestampValue": "string",
        "url": "string"
      }
    ],
    "executionPipelineStage": [
      {
        "componentSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "userName": "string"
          }
        ],
        "componentTransform": [
          {
            "name": "string",
            "originalTransform": "string",
            "userName": "string"
          }
        ],
        "id": "string",
        "inputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "prerequisiteStage": [
          "string"
        ]
      }
    ],
    "originalPipelineTransform": [
      {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "id": "string",
        "inputCollectionName": [
          "string"
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputCollectionName": [
          "string"
        ]
      }
    ],
    "stepNamesHash": "string"
  },
  "projectId": "string",
  "replaceJobId": "string",
  "replacedByJobId": "string",
  "requestedState": "JOB_STATE_UNKNOWN",
  "satisfiesPzs": true,
  "stageStates": [
    {
      "currentStateTime": "string",
      "executionStageName": "string",
      "executionStageState": "JOB_STATE_UNKNOWN"
    }
  ],
  "startTime": "string",
  "steps": [
    {
      "kind": "string",
      "name": "string",
      "properties": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "stepsLocation": "string",
  "tempFiles": [
    "string"
  ],
  "transformNameMapping": {
    "property1": "string",
    "property2": "string"
  },
  "type": "JOB_TYPE_UNKNOWN"
}
```

<h3 id="dataflowprojectsjobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.jobs.get

<a id="opIddataflow.projects.jobs.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/jobs/{jobId}`

Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.

<h3 id="dataflowprojectsjobsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the Cloud Platform project that the job belongs to.|
|jobId|path|string|true|The job ID.|
|location|query|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.|
|view|query|string|false|The level of information requested in response.|
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
|view|JOB_VIEW_UNKNOWN|
|view|JOB_VIEW_SUMMARY|
|view|JOB_VIEW_ALL|
|view|JOB_VIEW_DESCRIPTION|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "clientRequestId": "string",
  "createTime": "string",
  "createdFromSnapshotId": "string",
  "currentState": "JOB_STATE_UNKNOWN",
  "currentStateTime": "string",
  "environment": {
    "clusterManagerApiService": "string",
    "dataset": "string",
    "debugOptions": {
      "enableHotKeyLogging": true
    },
    "experiments": [
      "string"
    ],
    "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
    "internalExperiments": {
      "property1": null,
      "property2": null
    },
    "sdkPipelineOptions": {
      "property1": null,
      "property2": null
    },
    "serviceAccountEmail": "string",
    "serviceKmsKeyName": "string",
    "serviceOptions": [
      "string"
    ],
    "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
    "tempStoragePrefix": "string",
    "userAgent": {
      "property1": null,
      "property2": null
    },
    "version": {
      "property1": null,
      "property2": null
    },
    "workerPools": [
      {
        "autoscalingSettings": {
          "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
          "maxNumWorkers": 0
        },
        "dataDisks": [
          {
            "diskType": "string",
            "mountPoint": "string",
            "sizeGb": 0
          }
        ],
        "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
        "diskSizeGb": 0,
        "diskSourceImage": "string",
        "diskType": "string",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kind": "string",
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "network": "string",
        "numThreadsPerWorker": 0,
        "numWorkers": 0,
        "onHostMaintenance": "string",
        "packages": [
          {
            "location": "string",
            "name": "string"
          }
        ],
        "poolArgs": {
          "property1": null,
          "property2": null
        },
        "sdkHarnessContainerImages": [
          {
            "capabilities": [
              "string"
            ],
            "containerImage": "string",
            "environmentId": "string",
            "useSingleCorePerContainer": true
          }
        ],
        "subnetwork": "string",
        "taskrunnerSettings": {
          "alsologtostderr": true,
          "baseTaskDir": "string",
          "baseUrl": "string",
          "commandlinesFileName": "string",
          "continueOnException": true,
          "dataflowApiVersion": "string",
          "harnessCommand": "string",
          "languageHint": "string",
          "logDir": "string",
          "logToSerialconsole": true,
          "logUploadLocation": "string",
          "oauthScopes": [
            "string"
          ],
          "parallelWorkerSettings": {
            "baseUrl": "string",
            "reportingEnabled": true,
            "servicePath": "string",
            "shuffleServicePath": "string",
            "tempStoragePrefix": "string",
            "workerId": "string"
          },
          "streamingWorkerMainClass": "string",
          "taskGroup": "string",
          "taskUser": "string",
          "tempStoragePrefix": "string",
          "vmId": "string",
          "workflowFileName": "string"
        },
        "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
        "workerHarnessContainerImage": "string",
        "zone": "string"
      }
    ],
    "workerRegion": "string",
    "workerZone": "string"
  },
  "executionInfo": {
    "stages": {
      "property1": {
        "stepName": [
          "string"
        ]
      },
      "property2": {
        "stepName": [
          "string"
        ]
      }
    }
  },
  "id": "string",
  "jobMetadata": {
    "bigTableDetails": [
      {
        "instanceId": "string",
        "projectId": "string",
        "tableId": "string"
      }
    ],
    "bigqueryDetails": [
      {
        "dataset": "string",
        "projectId": "string",
        "query": "string",
        "table": "string"
      }
    ],
    "datastoreDetails": [
      {
        "namespace": "string",
        "projectId": "string"
      }
    ],
    "fileDetails": [
      {
        "filePattern": "string"
      }
    ],
    "pubsubDetails": [
      {
        "subscription": "string",
        "topic": "string"
      }
    ],
    "sdkVersion": {
      "sdkSupportStatus": "UNKNOWN",
      "version": "string",
      "versionDisplayName": "string"
    },
    "spannerDetails": [
      {
        "databaseId": "string",
        "instanceId": "string",
        "projectId": "string"
      }
    ],
    "userDisplayProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "pipelineDescription": {
    "displayData": [
      {
        "boolValue": true,
        "durationValue": "string",
        "floatValue": 0,
        "int64Value": "string",
        "javaClassValue": "string",
        "key": "string",
        "label": "string",
        "namespace": "string",
        "shortStrValue": "string",
        "strValue": "string",
        "timestampValue": "string",
        "url": "string"
      }
    ],
    "executionPipelineStage": [
      {
        "componentSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "userName": "string"
          }
        ],
        "componentTransform": [
          {
            "name": "string",
            "originalTransform": "string",
            "userName": "string"
          }
        ],
        "id": "string",
        "inputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "prerequisiteStage": [
          "string"
        ]
      }
    ],
    "originalPipelineTransform": [
      {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "id": "string",
        "inputCollectionName": [
          "string"
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputCollectionName": [
          "string"
        ]
      }
    ],
    "stepNamesHash": "string"
  },
  "projectId": "string",
  "replaceJobId": "string",
  "replacedByJobId": "string",
  "requestedState": "JOB_STATE_UNKNOWN",
  "satisfiesPzs": true,
  "stageStates": [
    {
      "currentStateTime": "string",
      "executionStageName": "string",
      "executionStageState": "JOB_STATE_UNKNOWN"
    }
  ],
  "startTime": "string",
  "steps": [
    {
      "kind": "string",
      "name": "string",
      "properties": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "stepsLocation": "string",
  "tempFiles": [
    "string"
  ],
  "transformNameMapping": {
    "property1": "string",
    "property2": "string"
  },
  "type": "JOB_TYPE_UNKNOWN"
}
```

<h3 id="dataflowprojectsjobsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.jobs.update

<a id="opIddataflow.projects.jobs.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/jobs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientRequestId": "string",
    "createTime": "string",
    "createdFromSnapshotId": "string",
    "currentState": "JOB_STATE_UNKNOWN",
    "currentStateTime": "string",
    "environment": {
      "clusterManagerApiService": "string",
      "dataset": "string",
      "debugOptions": {
        "enableHotKeyLogging": true
      },
      "experiments": [
        "string"
      ],
      "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
      "internalExperiments": {
        "property1": null,
        "property2": null
      },
      "sdkPipelineOptions": {
        "property1": null,
        "property2": null
      },
      "serviceAccountEmail": "string",
      "serviceKmsKeyName": "string",
      "serviceOptions": [
        "string"
      ],
      "tempStoragePrefix": "string",
      "userAgent": {
        "property1": null,
        "property2": null
      },
      "version": {
        "property1": null,
        "property2": null
      },
      "workerPools": [
        {
          "autoscalingSettings": {
            "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
            "maxNumWorkers": 0
          },
          "dataDisks": [
            {
              "diskType": "string",
              "mountPoint": "string",
              "sizeGb": 0
            }
          ],
          "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
          "diskSizeGb": 0,
          "diskSourceImage": "string",
          "diskType": "string",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kind": "string",
          "machineType": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "network": "string",
          "numThreadsPerWorker": 0,
          "numWorkers": 0,
          "onHostMaintenance": "string",
          "packages": [
            {
              "location": "string",
              "name": "string"
            }
          ],
          "poolArgs": {
            "property1": null,
            "property2": null
          },
          "sdkHarnessContainerImages": [
            {
              "capabilities": [
                "string"
              ],
              "containerImage": "string",
              "environmentId": "string",
              "useSingleCorePerContainer": true
            }
          ],
          "subnetwork": "string",
          "taskrunnerSettings": {
            "alsologtostderr": true,
            "baseTaskDir": "string",
            "baseUrl": "string",
            "commandlinesFileName": "string",
            "continueOnException": true,
            "dataflowApiVersion": "string",
            "harnessCommand": "string",
            "languageHint": "string",
            "logDir": "string",
            "logToSerialconsole": true,
            "logUploadLocation": "string",
            "oauthScopes": [
              "string"
            ],
            "parallelWorkerSettings": {
              "baseUrl": "string",
              "reportingEnabled": true,
              "servicePath": "string",
              "shuffleServicePath": "string",
              "tempStoragePrefix": "string",
              "workerId": "string"
            },
            "streamingWorkerMainClass": "string",
            "taskGroup": "string",
            "taskUser": "string",
            "tempStoragePrefix": "string",
            "vmId": "string",
            "workflowFileName": "string"
          },
          "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
          "workerHarnessContainerImage": "string",
          "zone": "string"
        }
      ],
      "workerRegion": "string",
      "workerZone": "string"
    },
    "executionInfo": {
      "stages": {
        "property1": {
          "stepName": [
            "string"
          ]
        },
        "property2": {
          "stepName": [
            "string"
          ]
        }
      }
    },
    "id": "string",
    "jobMetadata": {
      "bigTableDetails": [
        {
          "instanceId": "string",
          "projectId": "string",
          "tableId": "string"
        }
      ],
      "bigqueryDetails": [
        {
          "dataset": "string",
          "projectId": "string",
          "query": "string",
          "table": "string"
        }
      ],
      "datastoreDetails": [
        {
          "namespace": "string",
          "projectId": "string"
        }
      ],
      "fileDetails": [
        {
          "filePattern": "string"
        }
      ],
      "pubsubDetails": [
        {
          "subscription": "string",
          "topic": "string"
        }
      ],
      "sdkVersion": {
        "sdkSupportStatus": "UNKNOWN",
        "version": "string",
        "versionDisplayName": "string"
      },
      "spannerDetails": [
        {
          "databaseId": "string",
          "instanceId": "string",
          "projectId": "string"
        }
      ],
      "userDisplayProperties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": "string",
    "name": "string",
    "pipelineDescription": {
      "displayData": [
        {
          "boolValue": true,
          "durationValue": "string",
          "floatValue": 0,
          "int64Value": "string",
          "javaClassValue": "string",
          "key": "string",
          "label": "string",
          "namespace": "string",
          "shortStrValue": "string",
          "strValue": "string",
          "timestampValue": "string",
          "url": "string"
        }
      ],
      "executionPipelineStage": [
        {
          "componentSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "userName": "string"
            }
          ],
          "componentTransform": [
            {
              "name": "string",
              "originalTransform": "string",
              "userName": "string"
            }
          ],
          "id": "string",
          "inputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "prerequisiteStage": [
            "string"
          ]
        }
      ],
      "originalPipelineTransform": [
        {
          "displayData": [
            {
              "boolValue": true,
              "durationValue": "string",
              "floatValue": 0,
              "int64Value": "string",
              "javaClassValue": "string",
              "key": "string",
              "label": "string",
              "namespace": "string",
              "shortStrValue": "string",
              "strValue": "string",
              "timestampValue": "string",
              "url": "string"
            }
          ],
          "id": "string",
          "inputCollectionName": [
            "string"
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputCollectionName": [
            "string"
          ]
        }
      ],
      "stepNamesHash": "string"
    },
    "projectId": "string",
    "replaceJobId": "string",
    "replacedByJobId": "string",
    "requestedState": "JOB_STATE_UNKNOWN",
    "satisfiesPzs": true,
    "stageStates": [
      {
        "currentStateTime": "string",
        "executionStageName": "string",
        "executionStageState": "JOB_STATE_UNKNOWN"
      }
    ],
    "startTime": "string",
    "steps": [
      {
        "kind": "string",
        "name": "string",
        "properties": {
          "property1": null,
          "property2": null
        }
      }
    ],
    "stepsLocation": "string",
    "tempFiles": [
      "string"
    ],
    "transformNameMapping": {
      "property1": "string",
      "property2": "string"
    },
    "type": "JOB_TYPE_UNKNOWN"
  }'
```

`PUT /v1b3/projects/{projectId}/jobs/{jobId}`

Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.

> Body parameter

```json
{
  "clientRequestId": "string",
  "createTime": "string",
  "createdFromSnapshotId": "string",
  "currentState": "JOB_STATE_UNKNOWN",
  "currentStateTime": "string",
  "environment": {
    "clusterManagerApiService": "string",
    "dataset": "string",
    "debugOptions": {
      "enableHotKeyLogging": true
    },
    "experiments": [
      "string"
    ],
    "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
    "internalExperiments": {
      "property1": null,
      "property2": null
    },
    "sdkPipelineOptions": {
      "property1": null,
      "property2": null
    },
    "serviceAccountEmail": "string",
    "serviceKmsKeyName": "string",
    "serviceOptions": [
      "string"
    ],
    "tempStoragePrefix": "string",
    "userAgent": {
      "property1": null,
      "property2": null
    },
    "version": {
      "property1": null,
      "property2": null
    },
    "workerPools": [
      {
        "autoscalingSettings": {
          "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
          "maxNumWorkers": 0
        },
        "dataDisks": [
          {
            "diskType": "string",
            "mountPoint": "string",
            "sizeGb": 0
          }
        ],
        "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
        "diskSizeGb": 0,
        "diskSourceImage": "string",
        "diskType": "string",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kind": "string",
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "network": "string",
        "numThreadsPerWorker": 0,
        "numWorkers": 0,
        "onHostMaintenance": "string",
        "packages": [
          {
            "location": "string",
            "name": "string"
          }
        ],
        "poolArgs": {
          "property1": null,
          "property2": null
        },
        "sdkHarnessContainerImages": [
          {
            "capabilities": [
              "string"
            ],
            "containerImage": "string",
            "environmentId": "string",
            "useSingleCorePerContainer": true
          }
        ],
        "subnetwork": "string",
        "taskrunnerSettings": {
          "alsologtostderr": true,
          "baseTaskDir": "string",
          "baseUrl": "string",
          "commandlinesFileName": "string",
          "continueOnException": true,
          "dataflowApiVersion": "string",
          "harnessCommand": "string",
          "languageHint": "string",
          "logDir": "string",
          "logToSerialconsole": true,
          "logUploadLocation": "string",
          "oauthScopes": [
            "string"
          ],
          "parallelWorkerSettings": {
            "baseUrl": "string",
            "reportingEnabled": true,
            "servicePath": "string",
            "shuffleServicePath": "string",
            "tempStoragePrefix": "string",
            "workerId": "string"
          },
          "streamingWorkerMainClass": "string",
          "taskGroup": "string",
          "taskUser": "string",
          "tempStoragePrefix": "string",
          "vmId": "string",
          "workflowFileName": "string"
        },
        "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
        "workerHarnessContainerImage": "string",
        "zone": "string"
      }
    ],
    "workerRegion": "string",
    "workerZone": "string"
  },
  "executionInfo": {
    "stages": {
      "property1": {
        "stepName": [
          "string"
        ]
      },
      "property2": {
        "stepName": [
          "string"
        ]
      }
    }
  },
  "id": "string",
  "jobMetadata": {
    "bigTableDetails": [
      {
        "instanceId": "string",
        "projectId": "string",
        "tableId": "string"
      }
    ],
    "bigqueryDetails": [
      {
        "dataset": "string",
        "projectId": "string",
        "query": "string",
        "table": "string"
      }
    ],
    "datastoreDetails": [
      {
        "namespace": "string",
        "projectId": "string"
      }
    ],
    "fileDetails": [
      {
        "filePattern": "string"
      }
    ],
    "pubsubDetails": [
      {
        "subscription": "string",
        "topic": "string"
      }
    ],
    "sdkVersion": {
      "sdkSupportStatus": "UNKNOWN",
      "version": "string",
      "versionDisplayName": "string"
    },
    "spannerDetails": [
      {
        "databaseId": "string",
        "instanceId": "string",
        "projectId": "string"
      }
    ],
    "userDisplayProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "pipelineDescription": {
    "displayData": [
      {
        "boolValue": true,
        "durationValue": "string",
        "floatValue": 0,
        "int64Value": "string",
        "javaClassValue": "string",
        "key": "string",
        "label": "string",
        "namespace": "string",
        "shortStrValue": "string",
        "strValue": "string",
        "timestampValue": "string",
        "url": "string"
      }
    ],
    "executionPipelineStage": [
      {
        "componentSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "userName": "string"
          }
        ],
        "componentTransform": [
          {
            "name": "string",
            "originalTransform": "string",
            "userName": "string"
          }
        ],
        "id": "string",
        "inputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "prerequisiteStage": [
          "string"
        ]
      }
    ],
    "originalPipelineTransform": [
      {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "id": "string",
        "inputCollectionName": [
          "string"
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputCollectionName": [
          "string"
        ]
      }
    ],
    "stepNamesHash": "string"
  },
  "projectId": "string",
  "replaceJobId": "string",
  "replacedByJobId": "string",
  "requestedState": "JOB_STATE_UNKNOWN",
  "satisfiesPzs": true,
  "stageStates": [
    {
      "currentStateTime": "string",
      "executionStageName": "string",
      "executionStageState": "JOB_STATE_UNKNOWN"
    }
  ],
  "startTime": "string",
  "steps": [
    {
      "kind": "string",
      "name": "string",
      "properties": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "stepsLocation": "string",
  "tempFiles": [
    "string"
  ],
  "transformNameMapping": {
    "property1": "string",
    "property2": "string"
  },
  "type": "JOB_TYPE_UNKNOWN"
}
```

<h3 id="dataflowprojectsjobsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the Cloud Platform project that the job belongs to.|
|jobId|path|string|true|The job ID.|
|location|query|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.|
|updateMask|query|string|false|The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, we will first handle RequestedJobState and then the update_mask fields.|
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
|» clientRequestId|body|string|false|The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it.|
|» createTime|body|string(google-datetime)|false|The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service.|
|» createdFromSnapshotId|body|string|false|If this is specified, the job's initial state is populated from the given snapshot.|
|» currentState|body|string|false|The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.|
|» currentStateTime|body|string(google-datetime)|false|The timestamp associated with the current state.|
|» environment|body|[Environment](#schemaenvironment)|false|The environment for the job.|
|» executionInfo|body|[JobExecutionInfo](#schemajobexecutioninfo)|false|Deprecated.|
|» id|body|string|false|The unique ID of this job. This field is set by the Cloud Dataflow service when the Job is created, and is immutable for the life of the job.|
|» jobMetadata|body|[JobMetadata](#schemajobmetadata)|false|This field is populated by the Dataflow service to support filtering jobs by the metadata values provided here. Populated for ListJobs and all GetJob views SUMMARY and higher.|
|» labels|body|object|false|User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.|
|» » **additionalProperties**|body|string|false|none|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.|
|» name|body|string|false|The user-specified Cloud Dataflow job name. Only one Job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a Job with the same name as an already-existing Job, the attempt returns the existing Job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?`|
|» pipelineDescription|body|[PipelineDescription](#schemapipelinedescription)|false|Preliminary field: The format of this data may change at any time. A description of the user pipeline and stages through which it is executed. Created by Cloud Dataflow service. Only retrieved with JOB_VIEW_DESCRIPTION or JOB_VIEW_ALL.|
|» projectId|body|string|false|The ID of the Cloud Platform project that the job belongs to.|
|» replaceJobId|body|string|false|If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job.|
|» replacedByJobId|body|string|false|If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job.|
|» requestedState|body|string|false|The job's requested state. `UpdateJob` may be used to switch between the `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING` states, by setting requested_state. `UpdateJob` may also be used to directly set a job's requested state to `JOB_STATE_CANCELLED` or `JOB_STATE_DONE`, irrevocably terminating the job if it has not already reached a terminal state.|
|» satisfiesPzs|body|boolean|false|Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.|
|» stageStates|body|[[ExecutionStageState](#schemaexecutionstagestate)]|false|This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.|
|» startTime|body|string(google-datetime)|false|The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service.|
|» steps|body|[[Step](#schemastep)]|false|Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL.|
|» stepsLocation|body|string|false|The Cloud Storage location where the steps are stored.|
|» tempFiles|body|[string]|false|A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}|
|» transformNameMapping|body|object|false|The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string|false|The type of Cloud Dataflow job.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» currentState|JOB_STATE_UNKNOWN|
|» currentState|JOB_STATE_STOPPED|
|» currentState|JOB_STATE_RUNNING|
|» currentState|JOB_STATE_DONE|
|» currentState|JOB_STATE_FAILED|
|» currentState|JOB_STATE_CANCELLED|
|» currentState|JOB_STATE_UPDATED|
|» currentState|JOB_STATE_DRAINING|
|» currentState|JOB_STATE_DRAINED|
|» currentState|JOB_STATE_PENDING|
|» currentState|JOB_STATE_CANCELLING|
|» currentState|JOB_STATE_QUEUED|
|» currentState|JOB_STATE_RESOURCE_CLEANING_UP|
|» requestedState|JOB_STATE_UNKNOWN|
|» requestedState|JOB_STATE_STOPPED|
|» requestedState|JOB_STATE_RUNNING|
|» requestedState|JOB_STATE_DONE|
|» requestedState|JOB_STATE_FAILED|
|» requestedState|JOB_STATE_CANCELLED|
|» requestedState|JOB_STATE_UPDATED|
|» requestedState|JOB_STATE_DRAINING|
|» requestedState|JOB_STATE_DRAINED|
|» requestedState|JOB_STATE_PENDING|
|» requestedState|JOB_STATE_CANCELLING|
|» requestedState|JOB_STATE_QUEUED|
|» requestedState|JOB_STATE_RESOURCE_CLEANING_UP|
|» type|JOB_TYPE_UNKNOWN|
|» type|JOB_TYPE_BATCH|
|» type|JOB_TYPE_STREAMING|

> Example responses

> 200 Response

```json
{
  "clientRequestId": "string",
  "createTime": "string",
  "createdFromSnapshotId": "string",
  "currentState": "JOB_STATE_UNKNOWN",
  "currentStateTime": "string",
  "environment": {
    "clusterManagerApiService": "string",
    "dataset": "string",
    "debugOptions": {
      "enableHotKeyLogging": true
    },
    "experiments": [
      "string"
    ],
    "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
    "internalExperiments": {
      "property1": null,
      "property2": null
    },
    "sdkPipelineOptions": {
      "property1": null,
      "property2": null
    },
    "serviceAccountEmail": "string",
    "serviceKmsKeyName": "string",
    "serviceOptions": [
      "string"
    ],
    "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
    "tempStoragePrefix": "string",
    "userAgent": {
      "property1": null,
      "property2": null
    },
    "version": {
      "property1": null,
      "property2": null
    },
    "workerPools": [
      {
        "autoscalingSettings": {
          "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
          "maxNumWorkers": 0
        },
        "dataDisks": [
          {
            "diskType": "string",
            "mountPoint": "string",
            "sizeGb": 0
          }
        ],
        "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
        "diskSizeGb": 0,
        "diskSourceImage": "string",
        "diskType": "string",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kind": "string",
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "network": "string",
        "numThreadsPerWorker": 0,
        "numWorkers": 0,
        "onHostMaintenance": "string",
        "packages": [
          {
            "location": "string",
            "name": "string"
          }
        ],
        "poolArgs": {
          "property1": null,
          "property2": null
        },
        "sdkHarnessContainerImages": [
          {
            "capabilities": [
              "string"
            ],
            "containerImage": "string",
            "environmentId": "string",
            "useSingleCorePerContainer": true
          }
        ],
        "subnetwork": "string",
        "taskrunnerSettings": {
          "alsologtostderr": true,
          "baseTaskDir": "string",
          "baseUrl": "string",
          "commandlinesFileName": "string",
          "continueOnException": true,
          "dataflowApiVersion": "string",
          "harnessCommand": "string",
          "languageHint": "string",
          "logDir": "string",
          "logToSerialconsole": true,
          "logUploadLocation": "string",
          "oauthScopes": [
            "string"
          ],
          "parallelWorkerSettings": {
            "baseUrl": "string",
            "reportingEnabled": true,
            "servicePath": "string",
            "shuffleServicePath": "string",
            "tempStoragePrefix": "string",
            "workerId": "string"
          },
          "streamingWorkerMainClass": "string",
          "taskGroup": "string",
          "taskUser": "string",
          "tempStoragePrefix": "string",
          "vmId": "string",
          "workflowFileName": "string"
        },
        "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
        "workerHarnessContainerImage": "string",
        "zone": "string"
      }
    ],
    "workerRegion": "string",
    "workerZone": "string"
  },
  "executionInfo": {
    "stages": {
      "property1": {
        "stepName": [
          "string"
        ]
      },
      "property2": {
        "stepName": [
          "string"
        ]
      }
    }
  },
  "id": "string",
  "jobMetadata": {
    "bigTableDetails": [
      {
        "instanceId": "string",
        "projectId": "string",
        "tableId": "string"
      }
    ],
    "bigqueryDetails": [
      {
        "dataset": "string",
        "projectId": "string",
        "query": "string",
        "table": "string"
      }
    ],
    "datastoreDetails": [
      {
        "namespace": "string",
        "projectId": "string"
      }
    ],
    "fileDetails": [
      {
        "filePattern": "string"
      }
    ],
    "pubsubDetails": [
      {
        "subscription": "string",
        "topic": "string"
      }
    ],
    "sdkVersion": {
      "sdkSupportStatus": "UNKNOWN",
      "version": "string",
      "versionDisplayName": "string"
    },
    "spannerDetails": [
      {
        "databaseId": "string",
        "instanceId": "string",
        "projectId": "string"
      }
    ],
    "userDisplayProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "pipelineDescription": {
    "displayData": [
      {
        "boolValue": true,
        "durationValue": "string",
        "floatValue": 0,
        "int64Value": "string",
        "javaClassValue": "string",
        "key": "string",
        "label": "string",
        "namespace": "string",
        "shortStrValue": "string",
        "strValue": "string",
        "timestampValue": "string",
        "url": "string"
      }
    ],
    "executionPipelineStage": [
      {
        "componentSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "userName": "string"
          }
        ],
        "componentTransform": [
          {
            "name": "string",
            "originalTransform": "string",
            "userName": "string"
          }
        ],
        "id": "string",
        "inputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "prerequisiteStage": [
          "string"
        ]
      }
    ],
    "originalPipelineTransform": [
      {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "id": "string",
        "inputCollectionName": [
          "string"
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputCollectionName": [
          "string"
        ]
      }
    ],
    "stepNamesHash": "string"
  },
  "projectId": "string",
  "replaceJobId": "string",
  "replacedByJobId": "string",
  "requestedState": "JOB_STATE_UNKNOWN",
  "satisfiesPzs": true,
  "stageStates": [
    {
      "currentStateTime": "string",
      "executionStageName": "string",
      "executionStageState": "JOB_STATE_UNKNOWN"
    }
  ],
  "startTime": "string",
  "steps": [
    {
      "kind": "string",
      "name": "string",
      "properties": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "stepsLocation": "string",
  "tempFiles": [
    "string"
  ],
  "transformNameMapping": {
    "property1": "string",
    "property2": "string"
  },
  "type": "JOB_TYPE_UNKNOWN"
}
```

<h3 id="dataflowprojectsjobsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.jobs.debug.getConfig

<a id="opIddataflow.projects.jobs.debug.getConfig"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/jobs/string/debug/getConfig \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "componentId": "string",
    "location": "string",
    "workerId": "string"
  }'
```

`POST /v1b3/projects/{projectId}/jobs/{jobId}/debug/getConfig`

Get encoded debug configuration for component. Not cacheable.

> Body parameter

```json
{
  "componentId": "string",
  "location": "string",
  "workerId": "string"
}
```

<h3 id="dataflowprojectsjobsdebuggetconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project id.|
|jobId|path|string|true|The job id.|
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
|body|body|[GetDebugConfigRequest](#schemagetdebugconfigrequest)|false|none|
|» componentId|body|string|false|The internal component id for which debug configuration is requested.|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.|
|» workerId|body|string|false|The worker id, i.e., VM hostname.|

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
  "config": "string"
}
```

<h3 id="dataflowprojectsjobsdebuggetconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetDebugConfigResponse](#schemagetdebugconfigresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.jobs.debug.sendCapture

<a id="opIddataflow.projects.jobs.debug.sendCapture"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/jobs/string/debug/sendCapture \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "componentId": "string",
    "data": "string",
    "dataFormat": "DATA_FORMAT_UNSPECIFIED",
    "location": "string",
    "workerId": "string"
  }'
```

`POST /v1b3/projects/{projectId}/jobs/{jobId}/debug/sendCapture`

Send encoded debug capture data for component.

> Body parameter

```json
{
  "componentId": "string",
  "data": "string",
  "dataFormat": "DATA_FORMAT_UNSPECIFIED",
  "location": "string",
  "workerId": "string"
}
```

<h3 id="dataflowprojectsjobsdebugsendcapture-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project id.|
|jobId|path|string|true|The job id.|
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
|body|body|[SendDebugCaptureRequest](#schemasenddebugcapturerequest)|false|none|
|» componentId|body|string|false|The internal component id for which debug information is sent.|
|» data|body|string|false|The encoded debug information.|
|» dataFormat|body|string|false|Format for the data field above (id=5).|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.|
|» workerId|body|string|false|The worker id, i.e., VM hostname.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» dataFormat|DATA_FORMAT_UNSPECIFIED|
|» dataFormat|RAW|
|» dataFormat|JSON|
|» dataFormat|ZLIB|
|» dataFormat|BROTLI|

> Example responses

> 200 Response

```json
{}
```

<h3 id="dataflowprojectsjobsdebugsendcapture-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SendDebugCaptureResponse](#schemasenddebugcaptureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.jobs.messages.list

<a id="opIddataflow.projects.jobs.messages.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/jobs/string/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/jobs/{jobId}/messages`

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

<h3 id="dataflowprojectsjobsmessageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A project id.|
|jobId|path|string|true|The job to get messages about.|
|endTime|query|string|false|Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).|
|location|query|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.|
|minimumImportance|query|string|false|Filter to only get messages with importance >= level|
|pageSize|query|integer|false|If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.|
|pageToken|query|string|false|If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.|
|startTime|query|string|false|If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).|
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
|minimumImportance|JOB_MESSAGE_IMPORTANCE_UNKNOWN|
|minimumImportance|JOB_MESSAGE_DEBUG|
|minimumImportance|JOB_MESSAGE_DETAILED|
|minimumImportance|JOB_MESSAGE_BASIC|
|minimumImportance|JOB_MESSAGE_WARNING|
|minimumImportance|JOB_MESSAGE_ERROR|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "autoscalingEvents": [
    {
      "currentNumWorkers": "string",
      "description": {
        "messageKey": "string",
        "messageText": "string",
        "parameters": [
          {
            "key": "string",
            "value": null
          }
        ]
      },
      "eventType": "TYPE_UNKNOWN",
      "targetNumWorkers": "string",
      "time": "string",
      "workerPool": "string"
    }
  ],
  "jobMessages": [
    {
      "id": "string",
      "messageImportance": "JOB_MESSAGE_IMPORTANCE_UNKNOWN",
      "messageText": "string",
      "time": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataflowprojectsjobsmessageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListJobMessagesResponse](#schemalistjobmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.jobs.getMetrics

<a id="opIddataflow.projects.jobs.getMetrics"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/jobs/string/metrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/jobs/{jobId}/metrics`

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

<h3 id="dataflowprojectsjobsgetmetrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A project id.|
|jobId|path|string|true|The job to get metrics for.|
|location|query|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.|
|startTime|query|string|false|Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.|
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
  "metricTime": "string",
  "metrics": [
    {
      "cumulative": true,
      "distribution": null,
      "gauge": null,
      "internal": null,
      "kind": "string",
      "meanCount": null,
      "meanSum": null,
      "name": {
        "context": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "origin": "string"
      },
      "scalar": null,
      "set": null,
      "updateTime": "string"
    }
  ]
}
```

<h3 id="dataflowprojectsjobsgetmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[JobMetrics](#schemajobmetrics)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.jobs.workItems.lease

<a id="opIddataflow.projects.jobs.workItems.lease"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/jobs/string/workItems:lease \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "currentWorkerTime": "string",
    "location": "string",
    "requestedLeaseDuration": "string",
    "unifiedWorkerRequest": {
      "property1": null,
      "property2": null
    },
    "workItemTypes": [
      "string"
    ],
    "workerCapabilities": [
      "string"
    ],
    "workerId": "string"
  }'
```

`POST /v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease`

Leases a dataflow WorkItem to run.

> Body parameter

```json
{
  "currentWorkerTime": "string",
  "location": "string",
  "requestedLeaseDuration": "string",
  "unifiedWorkerRequest": {
    "property1": null,
    "property2": null
  },
  "workItemTypes": [
    "string"
  ],
  "workerCapabilities": [
    "string"
  ],
  "workerId": "string"
}
```

<h3 id="dataflowprojectsjobsworkitemslease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Identifies the project this worker belongs to.|
|jobId|path|string|true|Identifies the workflow job this worker belongs to.|
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
|body|body|[LeaseWorkItemRequest](#schemaleaseworkitemrequest)|false|none|
|» currentWorkerTime|body|string(google-datetime)|false|The current timestamp at the worker.|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.|
|» requestedLeaseDuration|body|string(google-duration)|false|The initial lease period.|
|» unifiedWorkerRequest|body|object|false|Untranslated bag-of-bytes WorkRequest from UnifiedWorker.|
|» » **additionalProperties**|body|object|false|Properties of the object. Contains field @type with type URL.|
|» workItemTypes|body|[string]|false|Filter for WorkItem type.|
|» workerCapabilities|body|[string]|false|Worker capabilities. WorkItems might be limited to workers with specific capabilities.|
|» workerId|body|string|false|Identifies the worker leasing work -- typically the ID of the virtual machine running the worker.|

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
  "unifiedWorkerResponse": {
    "property1": null,
    "property2": null
  },
  "workItems": [
    {
      "configuration": "string",
      "id": "string",
      "initialReportIndex": "string",
      "jobId": "string",
      "leaseExpireTime": "string",
      "mapTask": {
        "counterPrefix": "string",
        "instructions": [
          {
            "flatten": {
              "inputs": [
                {
                  "outputNum": 0,
                  "producerInstructionIndex": 0
                }
              ]
            },
            "name": "string",
            "originalName": "string",
            "outputs": [
              {
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "name": "string",
                "onlyCountKeyBytes": true,
                "onlyCountValueBytes": true,
                "originalName": "string",
                "systemName": "string"
              }
            ],
            "parDo": {
              "input": {
                "outputNum": 0,
                "producerInstructionIndex": 0
              },
              "multiOutputInfos": [
                {
                  "tag": "string"
                }
              ],
              "numOutputs": 0,
              "sideInputs": [
                {
                  "kind": {
                    "property1": null,
                    "property2": null
                  },
                  "sources": [
                    {
                      "baseSpecs": [
                        {
                          "property1": null,
                          "property2": null
                        }
                      ],
                      "codec": {
                        "property1": null,
                        "property2": null
                      },
                      "doesNotNeedSplitting": true,
                      "metadata": {
                        "estimatedSizeBytes": "string",
                        "infinite": true,
                        "producesSortedKeys": true
                      },
                      "spec": {
                        "property1": null,
                        "property2": null
                      }
                    }
                  ],
                  "tag": "string"
                }
              ],
              "userFn": {
                "property1": null,
                "property2": null
              }
            },
            "partialGroupByKey": {
              "input": {
                "outputNum": 0,
                "producerInstructionIndex": 0
              },
              "inputElementCodec": {
                "property1": null,
                "property2": null
              },
              "originalCombineValuesInputStoreName": "string",
              "originalCombineValuesStepName": "string",
              "sideInputs": [
                {
                  "kind": {
                    "property1": null,
                    "property2": null
                  },
                  "sources": [
                    {
                      "baseSpecs": [
                        {
                          "property1": null,
                          "property2": null
                        }
                      ],
                      "codec": {
                        "property1": null,
                        "property2": null
                      },
                      "doesNotNeedSplitting": true,
                      "metadata": {
                        "estimatedSizeBytes": "string",
                        "infinite": true,
                        "producesSortedKeys": true
                      },
                      "spec": {
                        "property1": null,
                        "property2": null
                      }
                    }
                  ],
                  "tag": "string"
                }
              ],
              "valueCombiningFn": {
                "property1": null,
                "property2": null
              }
            },
            "read": {
              "source": {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            },
            "systemName": "string",
            "write": {
              "input": {
                "outputNum": 0,
                "producerInstructionIndex": 0
              },
              "sink": {
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            }
          }
        ],
        "stageName": "string",
        "systemName": "string"
      },
      "packages": [
        {
          "location": "string",
          "name": "string"
        }
      ],
      "projectId": "string",
      "reportStatusInterval": "string",
      "seqMapTask": {
        "inputs": [
          {
            "kind": {
              "property1": null,
              "property2": null
            },
            "sources": [
              {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            ],
            "tag": "string"
          }
        ],
        "name": "string",
        "outputInfos": [
          {
            "sink": {
              "codec": {
                "property1": null,
                "property2": null
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            },
            "tag": "string"
          }
        ],
        "stageName": "string",
        "systemName": "string",
        "userFn": {
          "property1": null,
          "property2": null
        }
      },
      "shellTask": {
        "command": "string",
        "exitCode": 0
      },
      "sourceOperationTask": {
        "getMetadata": {
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "name": "string",
        "originalName": "string",
        "split": {
          "options": {
            "desiredBundleSizeBytes": "string",
            "desiredShardSizeBytes": "string"
          },
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "stageName": "string",
        "systemName": "string"
      },
      "streamingComputationTask": {
        "computationRanges": [
          {
            "computationId": "string",
            "rangeAssignments": [
              {
                "dataDisk": "string",
                "end": "string",
                "start": "string"
              }
            ]
          }
        ],
        "dataDisks": [
          {
            "dataDisk": "string"
          }
        ],
        "taskType": "STREAMING_COMPUTATION_TASK_UNKNOWN"
      },
      "streamingConfigTask": {
        "commitStreamChunkSizeBytes": "string",
        "getDataStreamChunkSizeBytes": "string",
        "maxWorkItemCommitBytes": "string",
        "streamingComputationConfigs": [
          {
            "computationId": "string",
            "instructions": [
              {
                "flatten": {
                  "inputs": [
                    {
                      "outputNum": 0,
                      "producerInstructionIndex": 0
                    }
                  ]
                },
                "name": "string",
                "originalName": "string",
                "outputs": [
                  {
                    "codec": {
                      "property1": null,
                      "property2": null
                    },
                    "name": "string",
                    "onlyCountKeyBytes": true,
                    "onlyCountValueBytes": true,
                    "originalName": "string",
                    "systemName": "string"
                  }
                ],
                "parDo": {
                  "input": {
                    "outputNum": 0,
                    "producerInstructionIndex": 0
                  },
                  "multiOutputInfos": [
                    {
                      "tag": "string"
                    }
                  ],
                  "numOutputs": 0,
                  "sideInputs": [
                    {
                      "kind": {
                        "property1": null,
                        "property2": null
                      },
                      "sources": [
                        {
                          "baseSpecs": [
                            {
                              "property1": null,
                              "property2": null
                            }
                          ],
                          "codec": {
                            "property1": null,
                            "property2": null
                          },
                          "doesNotNeedSplitting": true,
                          "metadata": {
                            "estimatedSizeBytes": "string",
                            "infinite": true,
                            "producesSortedKeys": true
                          },
                          "spec": {
                            "property1": null,
                            "property2": null
                          }
                        }
                      ],
                      "tag": "string"
                    }
                  ],
                  "userFn": {
                    "property1": null,
                    "property2": null
                  }
                },
                "partialGroupByKey": {
                  "input": {
                    "outputNum": 0,
                    "producerInstructionIndex": 0
                  },
                  "inputElementCodec": {
                    "property1": null,
                    "property2": null
                  },
                  "originalCombineValuesInputStoreName": "string",
                  "originalCombineValuesStepName": "string",
                  "sideInputs": [
                    {
                      "kind": {
                        "property1": null,
                        "property2": null
                      },
                      "sources": [
                        {
                          "baseSpecs": [
                            {
                              "property1": null,
                              "property2": null
                            }
                          ],
                          "codec": {
                            "property1": null,
                            "property2": null
                          },
                          "doesNotNeedSplitting": true,
                          "metadata": {
                            "estimatedSizeBytes": "string",
                            "infinite": true,
                            "producesSortedKeys": true
                          },
                          "spec": {
                            "property1": null,
                            "property2": null
                          }
                        }
                      ],
                      "tag": "string"
                    }
                  ],
                  "valueCombiningFn": {
                    "property1": null,
                    "property2": null
                  }
                },
                "read": {
                  "source": {
                    "baseSpecs": [
                      {
                        "property1": null,
                        "property2": null
                      }
                    ],
                    "codec": {
                      "property1": null,
                      "property2": null
                    },
                    "doesNotNeedSplitting": true,
                    "metadata": {
                      "estimatedSizeBytes": "string",
                      "infinite": true,
                      "producesSortedKeys": true
                    },
                    "spec": {
                      "property1": null,
                      "property2": null
                    }
                  }
                },
                "systemName": "string",
                "write": {
                  "input": {
                    "outputNum": 0,
                    "producerInstructionIndex": 0
                  },
                  "sink": {
                    "codec": {
                      "property1": null,
                      "property2": null
                    },
                    "spec": {
                      "property1": null,
                      "property2": null
                    }
                  }
                }
              }
            ],
            "stageName": "string",
            "systemName": "string",
            "transformUserNameToStateFamily": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "userStepToStateFamilyNameMap": {
          "property1": "string",
          "property2": "string"
        },
        "windmillServiceEndpoint": "string",
        "windmillServicePort": "string"
      },
      "streamingSetupTask": {
        "drain": true,
        "receiveWorkPort": 0,
        "snapshotConfig": {
          "importStateEndpoint": "string",
          "snapshotId": "string"
        },
        "streamingComputationTopology": {
          "computations": [
            {
              "computationId": "string",
              "inputs": [
                {
                  "customSourceLocation": {
                    "stateful": true
                  },
                  "pubsubLocation": {
                    "dropLateData": true,
                    "idLabel": "string",
                    "subscription": "string",
                    "timestampLabel": "string",
                    "topic": "string",
                    "trackingSubscription": "string",
                    "withAttributes": true
                  },
                  "sideInputLocation": {
                    "stateFamily": "string",
                    "tag": "string"
                  },
                  "streamingStageLocation": {
                    "streamId": "string"
                  }
                }
              ],
              "keyRanges": [
                {
                  "dataDisk": "string",
                  "deliveryEndpoint": "string",
                  "deprecatedPersistentDirectory": "string",
                  "end": "string",
                  "start": "string"
                }
              ],
              "outputs": [
                {
                  "customSourceLocation": {
                    "stateful": true
                  },
                  "pubsubLocation": {
                    "dropLateData": true,
                    "idLabel": "string",
                    "subscription": "string",
                    "timestampLabel": "string",
                    "topic": "string",
                    "trackingSubscription": "string",
                    "withAttributes": true
                  },
                  "sideInputLocation": {
                    "stateFamily": "string",
                    "tag": "string"
                  },
                  "streamingStageLocation": {
                    "streamId": "string"
                  }
                }
              ],
              "stateFamilies": [
                {
                  "isRead": true,
                  "stateFamily": "string"
                }
              ],
              "systemStageName": "string"
            }
          ],
          "dataDiskAssignments": [
            {
              "dataDisks": [
                "string"
              ],
              "vmInstance": "string"
            }
          ],
          "forwardingKeyBits": 0,
          "persistentStateVersion": 0,
          "userStageToComputationNameMap": {
            "property1": "string",
            "property2": "string"
          }
        },
        "workerHarnessPort": 0
      }
    }
  ]
}
```

<h3 id="dataflowprojectsjobsworkitemslease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LeaseWorkItemResponse](#schemaleaseworkitemresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.jobs.workItems.reportStatus

<a id="opIddataflow.projects.jobs.workItems.reportStatus"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/jobs/string/workItems:reportStatus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "currentWorkerTime": "string",
    "location": "string",
    "unifiedWorkerRequest": {
      "property1": null,
      "property2": null
    },
    "workItemStatuses": [
      {
        "completed": true,
        "counterUpdates": [
          {
            "boolean": true,
            "cumulative": true,
            "distribution": {
              "count": {
                "highBits": 0,
                "lowBits": 0
              },
              "histogram": {
                "bucketCounts": [
                  "string"
                ],
                "firstBucketOffset": 0
              },
              "max": {
                "highBits": 0,
                "lowBits": 0
              },
              "min": {
                "highBits": 0,
                "lowBits": 0
              },
              "sum": {
                "highBits": 0,
                "lowBits": 0
              },
              "sumOfSquares": 0
            },
            "floatingPoint": 0,
            "floatingPointList": {
              "elements": [
                0
              ]
            },
            "floatingPointMean": {
              "count": {
                "highBits": 0,
                "lowBits": 0
              },
              "sum": 0
            },
            "integer": {
              "highBits": 0,
              "lowBits": 0
            },
            "integerGauge": {
              "timestamp": "string",
              "value": {
                "highBits": 0,
                "lowBits": 0
              }
            },
            "integerList": {
              "elements": [
                {
                  "highBits": 0,
                  "lowBits": 0
                }
              ]
            },
            "integerMean": {
              "count": {
                "highBits": 0,
                "lowBits": 0
              },
              "sum": {
                "highBits": 0,
                "lowBits": 0
              }
            },
            "internal": null,
            "nameAndKind": {
              "kind": "INVALID",
              "name": "string"
            },
            "shortId": "string",
            "stringList": {
              "elements": [
                "string"
              ]
            },
            "structuredNameAndMetadata": {
              "metadata": {
                "description": "string",
                "kind": "INVALID",
                "otherUnits": "string",
                "standardUnits": "BYTES"
              },
              "name": {
                "componentStepName": "string",
                "executionStepName": "string",
                "inputIndex": 0,
                "name": "string",
                "origin": "SYSTEM",
                "originNamespace": "string",
                "originalRequestingStepName": "string",
                "originalStepName": "string",
                "portion": "ALL",
                "workerId": "string"
              }
            }
          }
        ],
        "dynamicSourceSplit": {
          "primary": {
            "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
            "source": {
              "baseSpecs": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "codec": {
                "property1": null,
                "property2": null
              },
              "doesNotNeedSplitting": true,
              "metadata": {
                "estimatedSizeBytes": "string",
                "infinite": true,
                "producesSortedKeys": true
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            }
          },
          "residual": {
            "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
            "source": {
              "baseSpecs": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "codec": {
                "property1": null,
                "property2": null
              },
              "doesNotNeedSplitting": true,
              "metadata": {
                "estimatedSizeBytes": "string",
                "infinite": true,
                "producesSortedKeys": true
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            }
          }
        },
        "errors": [
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
        ],
        "metricUpdates": [
          {
            "cumulative": true,
            "distribution": null,
            "gauge": null,
            "internal": null,
            "kind": "string",
            "meanCount": null,
            "meanSum": null,
            "name": {
              "context": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "origin": "string"
            },
            "scalar": null,
            "set": null,
            "updateTime": "string"
          }
        ],
        "progress": {
          "percentComplete": 0,
          "position": {
            "byteOffset": "string",
            "concatPosition": {},
            "end": true,
            "key": "string",
            "recordIndex": "string",
            "shufflePosition": "string"
          },
          "remainingTime": "string"
        },
        "reportIndex": "string",
        "reportedProgress": {
          "consumedParallelism": {
            "isInfinite": true,
            "value": 0
          },
          "fractionConsumed": 0,
          "position": {
            "byteOffset": "string",
            "concatPosition": {},
            "end": true,
            "key": "string",
            "recordIndex": "string",
            "shufflePosition": "string"
          },
          "remainingParallelism": {
            "isInfinite": true,
            "value": 0
          }
        },
        "requestedLeaseDuration": "string",
        "sourceFork": {
          "primary": {
            "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
            "source": {
              "baseSpecs": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "codec": {
                "property1": null,
                "property2": null
              },
              "doesNotNeedSplitting": true,
              "metadata": {
                "estimatedSizeBytes": "string",
                "infinite": true,
                "producesSortedKeys": true
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            }
          },
          "primarySource": {
            "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
            "source": {
              "baseSpecs": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "codec": {
                "property1": null,
                "property2": null
              },
              "doesNotNeedSplitting": true,
              "metadata": {
                "estimatedSizeBytes": "string",
                "infinite": true,
                "producesSortedKeys": true
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            }
          },
          "residual": {
            "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
            "source": {
              "baseSpecs": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "codec": {
                "property1": null,
                "property2": null
              },
              "doesNotNeedSplitting": true,
              "metadata": {
                "estimatedSizeBytes": "string",
                "infinite": true,
                "producesSortedKeys": true
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            }
          },
          "residualSource": {
            "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
            "source": {
              "baseSpecs": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "codec": {
                "property1": null,
                "property2": null
              },
              "doesNotNeedSplitting": true,
              "metadata": {
                "estimatedSizeBytes": "string",
                "infinite": true,
                "producesSortedKeys": true
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            }
          }
        },
        "sourceOperationResponse": {
          "getMetadata": {
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            }
          },
          "split": {
            "bundles": [
              {
                "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
                "source": {
                  "baseSpecs": [
                    {
                      "property1": null,
                      "property2": null
                    }
                  ],
                  "codec": {
                    "property1": null,
                    "property2": null
                  },
                  "doesNotNeedSplitting": true,
                  "metadata": {
                    "estimatedSizeBytes": "string",
                    "infinite": true,
                    "producesSortedKeys": true
                  },
                  "spec": {
                    "property1": null,
                    "property2": null
                  }
                }
              }
            ],
            "outcome": "SOURCE_SPLIT_OUTCOME_UNKNOWN",
            "shards": [
              {
                "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
                "source": {
                  "baseSpecs": [
                    {
                      "property1": null,
                      "property2": null
                    }
                  ],
                  "codec": {
                    "property1": null,
                    "property2": null
                  },
                  "doesNotNeedSplitting": true,
                  "metadata": {
                    "estimatedSizeBytes": "string",
                    "infinite": true,
                    "producesSortedKeys": true
                  },
                  "spec": {
                    "property1": null,
                    "property2": null
                  }
                }
              }
            ]
          }
        },
        "stopPosition": {
          "byteOffset": "string",
          "concatPosition": {},
          "end": true,
          "key": "string",
          "recordIndex": "string",
          "shufflePosition": "string"
        },
        "totalThrottlerWaitTimeSeconds": 0,
        "workItemId": "string"
      }
    ],
    "workerId": "string"
  }'
```

`POST /v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus`

Reports the status of dataflow WorkItems leased by a worker.

> Body parameter

```json
{
  "currentWorkerTime": "string",
  "location": "string",
  "unifiedWorkerRequest": {
    "property1": null,
    "property2": null
  },
  "workItemStatuses": [
    {
      "completed": true,
      "counterUpdates": [
        {
          "boolean": true,
          "cumulative": true,
          "distribution": {
            "count": {
              "highBits": 0,
              "lowBits": 0
            },
            "histogram": {
              "bucketCounts": [
                "string"
              ],
              "firstBucketOffset": 0
            },
            "max": {
              "highBits": 0,
              "lowBits": 0
            },
            "min": {
              "highBits": 0,
              "lowBits": 0
            },
            "sum": {
              "highBits": 0,
              "lowBits": 0
            },
            "sumOfSquares": 0
          },
          "floatingPoint": 0,
          "floatingPointList": {
            "elements": [
              0
            ]
          },
          "floatingPointMean": {
            "count": {
              "highBits": 0,
              "lowBits": 0
            },
            "sum": 0
          },
          "integer": {
            "highBits": 0,
            "lowBits": 0
          },
          "integerGauge": {
            "timestamp": "string",
            "value": {
              "highBits": 0,
              "lowBits": 0
            }
          },
          "integerList": {
            "elements": [
              {
                "highBits": 0,
                "lowBits": 0
              }
            ]
          },
          "integerMean": {
            "count": {
              "highBits": 0,
              "lowBits": 0
            },
            "sum": {
              "highBits": 0,
              "lowBits": 0
            }
          },
          "internal": null,
          "nameAndKind": {
            "kind": "INVALID",
            "name": "string"
          },
          "shortId": "string",
          "stringList": {
            "elements": [
              "string"
            ]
          },
          "structuredNameAndMetadata": {
            "metadata": {
              "description": "string",
              "kind": "INVALID",
              "otherUnits": "string",
              "standardUnits": "BYTES"
            },
            "name": {
              "componentStepName": "string",
              "executionStepName": "string",
              "inputIndex": 0,
              "name": "string",
              "origin": "SYSTEM",
              "originNamespace": "string",
              "originalRequestingStepName": "string",
              "originalStepName": "string",
              "portion": "ALL",
              "workerId": "string"
            }
          }
        }
      ],
      "dynamicSourceSplit": {
        "primary": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "residual": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        }
      },
      "errors": [
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
      ],
      "metricUpdates": [
        {
          "cumulative": true,
          "distribution": null,
          "gauge": null,
          "internal": null,
          "kind": "string",
          "meanCount": null,
          "meanSum": null,
          "name": {
            "context": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "origin": "string"
          },
          "scalar": null,
          "set": null,
          "updateTime": "string"
        }
      ],
      "progress": {
        "percentComplete": 0,
        "position": {
          "byteOffset": "string",
          "concatPosition": {},
          "end": true,
          "key": "string",
          "recordIndex": "string",
          "shufflePosition": "string"
        },
        "remainingTime": "string"
      },
      "reportIndex": "string",
      "reportedProgress": {
        "consumedParallelism": {
          "isInfinite": true,
          "value": 0
        },
        "fractionConsumed": 0,
        "position": {
          "byteOffset": "string",
          "concatPosition": {},
          "end": true,
          "key": "string",
          "recordIndex": "string",
          "shufflePosition": "string"
        },
        "remainingParallelism": {
          "isInfinite": true,
          "value": 0
        }
      },
      "requestedLeaseDuration": "string",
      "sourceFork": {
        "primary": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "primarySource": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "residual": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "residualSource": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        }
      },
      "sourceOperationResponse": {
        "getMetadata": {
          "metadata": {
            "estimatedSizeBytes": "string",
            "infinite": true,
            "producesSortedKeys": true
          }
        },
        "split": {
          "bundles": [
            {
              "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
              "source": {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            }
          ],
          "outcome": "SOURCE_SPLIT_OUTCOME_UNKNOWN",
          "shards": [
            {
              "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
              "source": {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            }
          ]
        }
      },
      "stopPosition": {
        "byteOffset": "string",
        "concatPosition": {},
        "end": true,
        "key": "string",
        "recordIndex": "string",
        "shufflePosition": "string"
      },
      "totalThrottlerWaitTimeSeconds": 0,
      "workItemId": "string"
    }
  ],
  "workerId": "string"
}
```

<h3 id="dataflowprojectsjobsworkitemsreportstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project which owns the WorkItem's job.|
|jobId|path|string|true|The job which the WorkItem is part of.|
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
|body|body|[ReportWorkItemStatusRequest](#schemareportworkitemstatusrequest)|false|none|
|» currentWorkerTime|body|string(google-datetime)|false|The current timestamp at the worker.|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.|
|» unifiedWorkerRequest|body|object|false|Untranslated bag-of-bytes WorkProgressUpdateRequest from UnifiedWorker.|
|» » **additionalProperties**|body|object|false|Properties of the object. Contains field @type with type URL.|
|» workItemStatuses|body|[[WorkItemStatus](#schemaworkitemstatus)]|false|The order is unimportant, except that the order of the WorkItemServiceState messages in the ReportWorkItemStatusResponse corresponds to the order of WorkItemStatus messages here.|
|» workerId|body|string|false|The ID of the worker reporting the WorkItem status. If this does not match the ID of the worker which the Dataflow service believes currently has the lease on the WorkItem, the report will be dropped (with an error response).|

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
  "unifiedWorkerResponse": {
    "property1": null,
    "property2": null
  },
  "workItemServiceStates": [
    {
      "completeWorkStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "harnessData": {
        "property1": null,
        "property2": null
      },
      "hotKeyDetection": {
        "hotKeyAge": "string",
        "systemName": "string",
        "userStepName": "string"
      },
      "leaseExpireTime": "string",
      "metricShortId": [
        {
          "metricIndex": 0,
          "shortId": "string"
        }
      ],
      "nextReportIndex": "string",
      "reportStatusInterval": "string",
      "splitRequest": {
        "fractionConsumed": 0,
        "fractionOfRemainder": 0,
        "position": {
          "byteOffset": "string",
          "concatPosition": {},
          "end": true,
          "key": "string",
          "recordIndex": "string",
          "shufflePosition": "string"
        }
      },
      "suggestedStopPoint": {
        "percentComplete": 0,
        "position": {
          "byteOffset": "string",
          "concatPosition": {},
          "end": true,
          "key": "string",
          "recordIndex": "string",
          "shufflePosition": "string"
        },
        "remainingTime": "string"
      },
      "suggestedStopPosition": {
        "byteOffset": "string",
        "concatPosition": {},
        "end": true,
        "key": "string",
        "recordIndex": "string",
        "shufflePosition": "string"
      }
    }
  ]
}
```

<h3 id="dataflowprojectsjobsworkitemsreportstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReportWorkItemStatusResponse](#schemareportworkitemstatusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.jobs.snapshot

<a id="opIddataflow.projects.jobs.snapshot"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/jobs/string:snapshot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "location": "string",
    "snapshotSources": true,
    "ttl": "string"
  }'
```

`POST /v1b3/projects/{projectId}/jobs/{jobId}:snapshot`

Snapshot the state of a streaming job.

> Body parameter

```json
{
  "description": "string",
  "location": "string",
  "snapshotSources": true,
  "ttl": "string"
}
```

<h3 id="dataflowprojectsjobssnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project which owns the job to be snapshotted.|
|jobId|path|string|true|The job to be snapshotted.|
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
|body|body|[SnapshotJobRequest](#schemasnapshotjobrequest)|false|none|
|» description|body|string|false|User specified description of the snapshot. Maybe empty.|
|» location|body|string|false|The location that contains this job.|
|» snapshotSources|body|boolean|false|If true, perform snapshots for sources which support this.|
|» ttl|body|string(google-duration)|false|TTL for the snapshot.|

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
  "creationTime": "string",
  "description": "string",
  "diskSizeBytes": "string",
  "id": "string",
  "projectId": "string",
  "pubsubMetadata": [
    {
      "expireTime": "string",
      "snapshotName": "string",
      "topicName": "string"
    }
  ],
  "region": "string",
  "sourceJobId": "string",
  "state": "UNKNOWN_SNAPSHOT_STATE",
  "ttl": "string"
}
```

<h3 id="dataflowprojectsjobssnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Snapshot](#schemasnapshot)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.jobs.aggregated

<a id="opIddataflow.projects.jobs.aggregated"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/jobs:aggregated \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/jobs:aggregated`

List the jobs of a project across all regions.

<h3 id="dataflowprojectsjobsaggregated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project which owns the jobs.|
|filter|query|string|false|The kind of filter to use.|
|location|query|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.|
|name|query|string|false|Optional. The job name. Optional.|
|pageSize|query|integer|false|If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.|
|pageToken|query|string|false|Set this to the 'next_page_token' field of a previous response to request additional results in a long list.|
|view|query|string|false|Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.|
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
|filter|UNKNOWN|
|filter|ALL|
|filter|TERMINATED|
|filter|ACTIVE|
|view|JOB_VIEW_UNKNOWN|
|view|JOB_VIEW_SUMMARY|
|view|JOB_VIEW_ALL|
|view|JOB_VIEW_DESCRIPTION|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "failedLocation": [
    {
      "name": "string"
    }
  ],
  "jobs": [
    {
      "clientRequestId": "string",
      "createTime": "string",
      "createdFromSnapshotId": "string",
      "currentState": "JOB_STATE_UNKNOWN",
      "currentStateTime": "string",
      "environment": {
        "clusterManagerApiService": "string",
        "dataset": "string",
        "debugOptions": {
          "enableHotKeyLogging": true
        },
        "experiments": [
          "string"
        ],
        "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
        "internalExperiments": {
          "property1": null,
          "property2": null
        },
        "sdkPipelineOptions": {
          "property1": null,
          "property2": null
        },
        "serviceAccountEmail": "string",
        "serviceKmsKeyName": "string",
        "serviceOptions": [
          "string"
        ],
        "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
        "tempStoragePrefix": "string",
        "userAgent": {
          "property1": null,
          "property2": null
        },
        "version": {
          "property1": null,
          "property2": null
        },
        "workerPools": [
          {
            "autoscalingSettings": {
              "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
              "maxNumWorkers": 0
            },
            "dataDisks": [
              {
                "diskType": "string",
                "mountPoint": "string",
                "sizeGb": 0
              }
            ],
            "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
            "diskSizeGb": 0,
            "diskSourceImage": "string",
            "diskType": "string",
            "ipConfiguration": "WORKER_IP_UNSPECIFIED",
            "kind": "string",
            "machineType": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "network": "string",
            "numThreadsPerWorker": 0,
            "numWorkers": 0,
            "onHostMaintenance": "string",
            "packages": [
              {
                "location": "string",
                "name": "string"
              }
            ],
            "poolArgs": {
              "property1": null,
              "property2": null
            },
            "sdkHarnessContainerImages": [
              {
                "capabilities": [
                  "string"
                ],
                "containerImage": "string",
                "environmentId": "string",
                "useSingleCorePerContainer": true
              }
            ],
            "subnetwork": "string",
            "taskrunnerSettings": {
              "alsologtostderr": true,
              "baseTaskDir": "string",
              "baseUrl": "string",
              "commandlinesFileName": "string",
              "continueOnException": true,
              "dataflowApiVersion": "string",
              "harnessCommand": "string",
              "languageHint": "string",
              "logDir": "string",
              "logToSerialconsole": true,
              "logUploadLocation": "string",
              "oauthScopes": [
                "string"
              ],
              "parallelWorkerSettings": {
                "baseUrl": "string",
                "reportingEnabled": true,
                "servicePath": "string",
                "shuffleServicePath": "string",
                "tempStoragePrefix": "string",
                "workerId": "string"
              },
              "streamingWorkerMainClass": "string",
              "taskGroup": "string",
              "taskUser": "string",
              "tempStoragePrefix": "string",
              "vmId": "string",
              "workflowFileName": "string"
            },
            "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
            "workerHarnessContainerImage": "string",
            "zone": "string"
          }
        ],
        "workerRegion": "string",
        "workerZone": "string"
      },
      "executionInfo": {
        "stages": {
          "property1": {
            "stepName": [
              "string"
            ]
          },
          "property2": {
            "stepName": [
              "string"
            ]
          }
        }
      },
      "id": "string",
      "jobMetadata": {
        "bigTableDetails": [
          {
            "instanceId": "string",
            "projectId": "string",
            "tableId": "string"
          }
        ],
        "bigqueryDetails": [
          {
            "dataset": "string",
            "projectId": "string",
            "query": "string",
            "table": "string"
          }
        ],
        "datastoreDetails": [
          {
            "namespace": "string",
            "projectId": "string"
          }
        ],
        "fileDetails": [
          {
            "filePattern": "string"
          }
        ],
        "pubsubDetails": [
          {
            "subscription": "string",
            "topic": "string"
          }
        ],
        "sdkVersion": {
          "sdkSupportStatus": "UNKNOWN",
          "version": "string",
          "versionDisplayName": "string"
        },
        "spannerDetails": [
          {
            "databaseId": "string",
            "instanceId": "string",
            "projectId": "string"
          }
        ],
        "userDisplayProperties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "location": "string",
      "name": "string",
      "pipelineDescription": {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "executionPipelineStage": [
          {
            "componentSource": [
              {
                "name": "string",
                "originalTransformOrCollection": "string",
                "userName": "string"
              }
            ],
            "componentTransform": [
              {
                "name": "string",
                "originalTransform": "string",
                "userName": "string"
              }
            ],
            "id": "string",
            "inputSource": [
              {
                "name": "string",
                "originalTransformOrCollection": "string",
                "sizeBytes": "string",
                "userName": "string"
              }
            ],
            "kind": "UNKNOWN_KIND",
            "name": "string",
            "outputSource": [
              {
                "name": "string",
                "originalTransformOrCollection": "string",
                "sizeBytes": "string",
                "userName": "string"
              }
            ],
            "prerequisiteStage": [
              "string"
            ]
          }
        ],
        "originalPipelineTransform": [
          {
            "displayData": [
              {
                "boolValue": true,
                "durationValue": "string",
                "floatValue": 0,
                "int64Value": "string",
                "javaClassValue": "string",
                "key": "string",
                "label": "string",
                "namespace": "string",
                "shortStrValue": "string",
                "strValue": "string",
                "timestampValue": "string",
                "url": "string"
              }
            ],
            "id": "string",
            "inputCollectionName": [
              "string"
            ],
            "kind": "UNKNOWN_KIND",
            "name": "string",
            "outputCollectionName": [
              "string"
            ]
          }
        ],
        "stepNamesHash": "string"
      },
      "projectId": "string",
      "replaceJobId": "string",
      "replacedByJobId": "string",
      "requestedState": "JOB_STATE_UNKNOWN",
      "satisfiesPzs": true,
      "stageStates": [
        {
          "currentStateTime": "string",
          "executionStageName": "string",
          "executionStageState": "JOB_STATE_UNKNOWN"
        }
      ],
      "startTime": "string",
      "steps": [
        {
          "kind": "string",
          "name": "string",
          "properties": {
            "property1": null,
            "property2": null
          }
        }
      ],
      "stepsLocation": "string",
      "tempFiles": [
        "string"
      ],
      "transformNameMapping": {
        "property1": "string",
        "property2": "string"
      },
      "type": "JOB_TYPE_UNKNOWN"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataflowprojectsjobsaggregated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListJobsResponse](#schemalistjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.workerMessages

<a id="opIddataflow.projects.locations.workerMessages"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/WorkerMessages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "location": "string",
    "workerMessages": [
      {
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "time": "string",
        "workerHealthReport": {
          "msg": "string",
          "pods": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "reportInterval": "string",
          "vmBrokenCode": "string",
          "vmIsBroken": true,
          "vmIsHealthy": true,
          "vmStartupTime": "string"
        },
        "workerLifecycleEvent": {
          "containerStartTime": "string",
          "event": "UNKNOWN_EVENT",
          "metadata": {
            "property1": "string",
            "property2": "string"
          }
        },
        "workerMessageCode": {
          "code": "string",
          "parameters": {
            "property1": null,
            "property2": null
          }
        },
        "workerMetrics": {
          "containers": {
            "property1": {},
            "property2": {}
          },
          "cpuTime": [
            {
              "rate": 0,
              "timestamp": "string",
              "totalMs": "string"
            }
          ],
          "memoryInfo": [
            {
              "currentLimitBytes": "string",
              "currentOoms": "string",
              "currentRssBytes": "string",
              "timestamp": "string",
              "totalGbMs": "string"
            }
          ]
        },
        "workerShutdownNotice": {
          "reason": "string"
        },
        "workerThreadScalingReport": {
          "currentThreadCount": 0
        }
      }
    ]
  }'
```

`POST /v1b3/projects/{projectId}/locations/{location}/WorkerMessages`

Send a worker_message to the service.

> Body parameter

```json
{
  "location": "string",
  "workerMessages": [
    {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "time": "string",
      "workerHealthReport": {
        "msg": "string",
        "pods": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "reportInterval": "string",
        "vmBrokenCode": "string",
        "vmIsBroken": true,
        "vmIsHealthy": true,
        "vmStartupTime": "string"
      },
      "workerLifecycleEvent": {
        "containerStartTime": "string",
        "event": "UNKNOWN_EVENT",
        "metadata": {
          "property1": "string",
          "property2": "string"
        }
      },
      "workerMessageCode": {
        "code": "string",
        "parameters": {
          "property1": null,
          "property2": null
        }
      },
      "workerMetrics": {
        "containers": {
          "property1": {},
          "property2": {}
        },
        "cpuTime": [
          {
            "rate": 0,
            "timestamp": "string",
            "totalMs": "string"
          }
        ],
        "memoryInfo": [
          {
            "currentLimitBytes": "string",
            "currentOoms": "string",
            "currentRssBytes": "string",
            "timestamp": "string",
            "totalGbMs": "string"
          }
        ]
      },
      "workerShutdownNotice": {
        "reason": "string"
      },
      "workerThreadScalingReport": {
        "currentThreadCount": 0
      }
    }
  ]
}
```

<h3 id="dataflowprojectslocationsworkermessages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project to send the WorkerMessages to.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job.|
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
|body|body|[SendWorkerMessagesRequest](#schemasendworkermessagesrequest)|false|none|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job.|
|» workerMessages|body|[[WorkerMessage](#schemaworkermessage)]|false|The WorkerMessages to send.|

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
  "workerMessageResponses": [
    {
      "workerHealthReportResponse": {
        "reportInterval": "string"
      },
      "workerMetricsResponse": {},
      "workerShutdownNoticeResponse": {},
      "workerThreadScalingReportResponse": {
        "recommendedThreadCount": 0
      }
    }
  ]
}
```

<h3 id="dataflowprojectslocationsworkermessages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SendWorkerMessagesResponse](#schemasendworkermessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.flexTemplates.launch

<a id="opIddataflow.projects.locations.flexTemplates.launch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/flexTemplates:launch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "launchParameter": {
      "containerSpec": {
        "defaultEnvironment": {
          "additionalExperiments": [
            "string"
          ],
          "additionalUserLabels": {
            "property1": "string",
            "property2": "string"
          },
          "autoscalingAlgorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
          "diskSizeGb": 0,
          "dumpHeapOnOom": true,
          "enableLauncherVmSerialPortLogging": true,
          "enableStreamingEngine": true,
          "flexrsGoal": "FLEXRS_UNSPECIFIED",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kmsKeyName": "string",
          "launcherMachineType": "string",
          "machineType": "string",
          "maxWorkers": 0,
          "network": "string",
          "numWorkers": 0,
          "saveHeapDumpsToGcsPath": "string",
          "sdkContainerImage": "string",
          "serviceAccountEmail": "string",
          "stagingLocation": "string",
          "subnetwork": "string",
          "tempLocation": "string",
          "workerRegion": "string",
          "workerZone": "string",
          "zone": "string"
        },
        "image": "string",
        "imageRepositoryCertPath": "string",
        "imageRepositoryPasswordSecretId": "string",
        "imageRepositoryUsernameSecretId": "string",
        "metadata": {
          "description": "string",
          "name": "string",
          "parameters": [
            {
              "customMetadata": {
                "property1": "string",
                "property2": "string"
              },
              "groupName": "string",
              "helpText": "string",
              "isOptional": true,
              "label": "string",
              "name": "string",
              "paramType": "DEFAULT",
              "parentName": "string",
              "parentTriggerValues": [
                "string"
              ],
              "regexes": [
                "string"
              ]
            }
          ]
        },
        "sdkInfo": {
          "language": "UNKNOWN",
          "version": "string"
        }
      },
      "containerSpecGcsPath": "string",
      "environment": {
        "additionalExperiments": [
          "string"
        ],
        "additionalUserLabels": {
          "property1": "string",
          "property2": "string"
        },
        "autoscalingAlgorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
        "diskSizeGb": 0,
        "dumpHeapOnOom": true,
        "enableLauncherVmSerialPortLogging": true,
        "enableStreamingEngine": true,
        "flexrsGoal": "FLEXRS_UNSPECIFIED",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kmsKeyName": "string",
        "launcherMachineType": "string",
        "machineType": "string",
        "maxWorkers": 0,
        "network": "string",
        "numWorkers": 0,
        "saveHeapDumpsToGcsPath": "string",
        "sdkContainerImage": "string",
        "serviceAccountEmail": "string",
        "stagingLocation": "string",
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
    "validateOnly": true
  }'
```

`POST /v1b3/projects/{projectId}/locations/{location}/flexTemplates:launch`

Launch a job with a FlexTemplate.

> Body parameter

```json
{
  "launchParameter": {
    "containerSpec": {
      "defaultEnvironment": {
        "additionalExperiments": [
          "string"
        ],
        "additionalUserLabels": {
          "property1": "string",
          "property2": "string"
        },
        "autoscalingAlgorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
        "diskSizeGb": 0,
        "dumpHeapOnOom": true,
        "enableLauncherVmSerialPortLogging": true,
        "enableStreamingEngine": true,
        "flexrsGoal": "FLEXRS_UNSPECIFIED",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kmsKeyName": "string",
        "launcherMachineType": "string",
        "machineType": "string",
        "maxWorkers": 0,
        "network": "string",
        "numWorkers": 0,
        "saveHeapDumpsToGcsPath": "string",
        "sdkContainerImage": "string",
        "serviceAccountEmail": "string",
        "stagingLocation": "string",
        "subnetwork": "string",
        "tempLocation": "string",
        "workerRegion": "string",
        "workerZone": "string",
        "zone": "string"
      },
      "image": "string",
      "imageRepositoryCertPath": "string",
      "imageRepositoryPasswordSecretId": "string",
      "imageRepositoryUsernameSecretId": "string",
      "metadata": {
        "description": "string",
        "name": "string",
        "parameters": [
          {
            "customMetadata": {
              "property1": "string",
              "property2": "string"
            },
            "groupName": "string",
            "helpText": "string",
            "isOptional": true,
            "label": "string",
            "name": "string",
            "paramType": "DEFAULT",
            "parentName": "string",
            "parentTriggerValues": [
              "string"
            ],
            "regexes": [
              "string"
            ]
          }
        ]
      },
      "sdkInfo": {
        "language": "UNKNOWN",
        "version": "string"
      }
    },
    "containerSpecGcsPath": "string",
    "environment": {
      "additionalExperiments": [
        "string"
      ],
      "additionalUserLabels": {
        "property1": "string",
        "property2": "string"
      },
      "autoscalingAlgorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
      "diskSizeGb": 0,
      "dumpHeapOnOom": true,
      "enableLauncherVmSerialPortLogging": true,
      "enableStreamingEngine": true,
      "flexrsGoal": "FLEXRS_UNSPECIFIED",
      "ipConfiguration": "WORKER_IP_UNSPECIFIED",
      "kmsKeyName": "string",
      "launcherMachineType": "string",
      "machineType": "string",
      "maxWorkers": 0,
      "network": "string",
      "numWorkers": 0,
      "saveHeapDumpsToGcsPath": "string",
      "sdkContainerImage": "string",
      "serviceAccountEmail": "string",
      "stagingLocation": "string",
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
  "validateOnly": true
}
```

<h3 id="dataflowprojectslocationsflextemplateslaunch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Cloud Platform project that the job belongs to.|
|location|path|string|true|Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. E.g., us-central1, us-west1.|
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
|body|body|[LaunchFlexTemplateRequest](#schemalaunchflextemplaterequest)|false|none|
|» launchParameter|body|[LaunchFlexTemplateParameter](#schemalaunchflextemplateparameter)|false|Required. Parameter to launch a job form Flex Template.|
|» validateOnly|body|boolean|false|If true, the request is validated but not actually executed. Defaults to false.|

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
    "clientRequestId": "string",
    "createTime": "string",
    "createdFromSnapshotId": "string",
    "currentState": "JOB_STATE_UNKNOWN",
    "currentStateTime": "string",
    "environment": {
      "clusterManagerApiService": "string",
      "dataset": "string",
      "debugOptions": {
        "enableHotKeyLogging": true
      },
      "experiments": [
        "string"
      ],
      "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
      "internalExperiments": {
        "property1": null,
        "property2": null
      },
      "sdkPipelineOptions": {
        "property1": null,
        "property2": null
      },
      "serviceAccountEmail": "string",
      "serviceKmsKeyName": "string",
      "serviceOptions": [
        "string"
      ],
      "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
      "tempStoragePrefix": "string",
      "userAgent": {
        "property1": null,
        "property2": null
      },
      "version": {
        "property1": null,
        "property2": null
      },
      "workerPools": [
        {
          "autoscalingSettings": {
            "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
            "maxNumWorkers": 0
          },
          "dataDisks": [
            {
              "diskType": "string",
              "mountPoint": "string",
              "sizeGb": 0
            }
          ],
          "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
          "diskSizeGb": 0,
          "diskSourceImage": "string",
          "diskType": "string",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kind": "string",
          "machineType": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "network": "string",
          "numThreadsPerWorker": 0,
          "numWorkers": 0,
          "onHostMaintenance": "string",
          "packages": [
            {
              "location": "string",
              "name": "string"
            }
          ],
          "poolArgs": {
            "property1": null,
            "property2": null
          },
          "sdkHarnessContainerImages": [
            {
              "capabilities": [
                "string"
              ],
              "containerImage": "string",
              "environmentId": "string",
              "useSingleCorePerContainer": true
            }
          ],
          "subnetwork": "string",
          "taskrunnerSettings": {
            "alsologtostderr": true,
            "baseTaskDir": "string",
            "baseUrl": "string",
            "commandlinesFileName": "string",
            "continueOnException": true,
            "dataflowApiVersion": "string",
            "harnessCommand": "string",
            "languageHint": "string",
            "logDir": "string",
            "logToSerialconsole": true,
            "logUploadLocation": "string",
            "oauthScopes": [
              "string"
            ],
            "parallelWorkerSettings": {
              "baseUrl": "string",
              "reportingEnabled": true,
              "servicePath": "string",
              "shuffleServicePath": "string",
              "tempStoragePrefix": "string",
              "workerId": "string"
            },
            "streamingWorkerMainClass": "string",
            "taskGroup": "string",
            "taskUser": "string",
            "tempStoragePrefix": "string",
            "vmId": "string",
            "workflowFileName": "string"
          },
          "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
          "workerHarnessContainerImage": "string",
          "zone": "string"
        }
      ],
      "workerRegion": "string",
      "workerZone": "string"
    },
    "executionInfo": {
      "stages": {
        "property1": {
          "stepName": [
            "string"
          ]
        },
        "property2": {
          "stepName": [
            "string"
          ]
        }
      }
    },
    "id": "string",
    "jobMetadata": {
      "bigTableDetails": [
        {
          "instanceId": "string",
          "projectId": "string",
          "tableId": "string"
        }
      ],
      "bigqueryDetails": [
        {
          "dataset": "string",
          "projectId": "string",
          "query": "string",
          "table": "string"
        }
      ],
      "datastoreDetails": [
        {
          "namespace": "string",
          "projectId": "string"
        }
      ],
      "fileDetails": [
        {
          "filePattern": "string"
        }
      ],
      "pubsubDetails": [
        {
          "subscription": "string",
          "topic": "string"
        }
      ],
      "sdkVersion": {
        "sdkSupportStatus": "UNKNOWN",
        "version": "string",
        "versionDisplayName": "string"
      },
      "spannerDetails": [
        {
          "databaseId": "string",
          "instanceId": "string",
          "projectId": "string"
        }
      ],
      "userDisplayProperties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": "string",
    "name": "string",
    "pipelineDescription": {
      "displayData": [
        {
          "boolValue": true,
          "durationValue": "string",
          "floatValue": 0,
          "int64Value": "string",
          "javaClassValue": "string",
          "key": "string",
          "label": "string",
          "namespace": "string",
          "shortStrValue": "string",
          "strValue": "string",
          "timestampValue": "string",
          "url": "string"
        }
      ],
      "executionPipelineStage": [
        {
          "componentSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "userName": "string"
            }
          ],
          "componentTransform": [
            {
              "name": "string",
              "originalTransform": "string",
              "userName": "string"
            }
          ],
          "id": "string",
          "inputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "prerequisiteStage": [
            "string"
          ]
        }
      ],
      "originalPipelineTransform": [
        {
          "displayData": [
            {
              "boolValue": true,
              "durationValue": "string",
              "floatValue": 0,
              "int64Value": "string",
              "javaClassValue": "string",
              "key": "string",
              "label": "string",
              "namespace": "string",
              "shortStrValue": "string",
              "strValue": "string",
              "timestampValue": "string",
              "url": "string"
            }
          ],
          "id": "string",
          "inputCollectionName": [
            "string"
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputCollectionName": [
            "string"
          ]
        }
      ],
      "stepNamesHash": "string"
    },
    "projectId": "string",
    "replaceJobId": "string",
    "replacedByJobId": "string",
    "requestedState": "JOB_STATE_UNKNOWN",
    "satisfiesPzs": true,
    "stageStates": [
      {
        "currentStateTime": "string",
        "executionStageName": "string",
        "executionStageState": "JOB_STATE_UNKNOWN"
      }
    ],
    "startTime": "string",
    "steps": [
      {
        "kind": "string",
        "name": "string",
        "properties": {
          "property1": null,
          "property2": null
        }
      }
    ],
    "stepsLocation": "string",
    "tempFiles": [
      "string"
    ],
    "transformNameMapping": {
      "property1": "string",
      "property2": "string"
    },
    "type": "JOB_TYPE_UNKNOWN"
  }
}
```

<h3 id="dataflowprojectslocationsflextemplateslaunch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LaunchFlexTemplateResponse](#schemalaunchflextemplateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.jobs.list

<a id="opIddataflow.projects.locations.jobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/locations/{location}/jobs`

List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.

<h3 id="dataflowprojectslocationsjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project which owns the jobs.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.|
|filter|query|string|false|The kind of filter to use.|
|name|query|string|false|Optional. The job name. Optional.|
|pageSize|query|integer|false|If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.|
|pageToken|query|string|false|Set this to the 'next_page_token' field of a previous response to request additional results in a long list.|
|view|query|string|false|Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.|
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
|filter|UNKNOWN|
|filter|ALL|
|filter|TERMINATED|
|filter|ACTIVE|
|view|JOB_VIEW_UNKNOWN|
|view|JOB_VIEW_SUMMARY|
|view|JOB_VIEW_ALL|
|view|JOB_VIEW_DESCRIPTION|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "failedLocation": [
    {
      "name": "string"
    }
  ],
  "jobs": [
    {
      "clientRequestId": "string",
      "createTime": "string",
      "createdFromSnapshotId": "string",
      "currentState": "JOB_STATE_UNKNOWN",
      "currentStateTime": "string",
      "environment": {
        "clusterManagerApiService": "string",
        "dataset": "string",
        "debugOptions": {
          "enableHotKeyLogging": true
        },
        "experiments": [
          "string"
        ],
        "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
        "internalExperiments": {
          "property1": null,
          "property2": null
        },
        "sdkPipelineOptions": {
          "property1": null,
          "property2": null
        },
        "serviceAccountEmail": "string",
        "serviceKmsKeyName": "string",
        "serviceOptions": [
          "string"
        ],
        "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
        "tempStoragePrefix": "string",
        "userAgent": {
          "property1": null,
          "property2": null
        },
        "version": {
          "property1": null,
          "property2": null
        },
        "workerPools": [
          {
            "autoscalingSettings": {
              "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
              "maxNumWorkers": 0
            },
            "dataDisks": [
              {
                "diskType": "string",
                "mountPoint": "string",
                "sizeGb": 0
              }
            ],
            "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
            "diskSizeGb": 0,
            "diskSourceImage": "string",
            "diskType": "string",
            "ipConfiguration": "WORKER_IP_UNSPECIFIED",
            "kind": "string",
            "machineType": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "network": "string",
            "numThreadsPerWorker": 0,
            "numWorkers": 0,
            "onHostMaintenance": "string",
            "packages": [
              {
                "location": "string",
                "name": "string"
              }
            ],
            "poolArgs": {
              "property1": null,
              "property2": null
            },
            "sdkHarnessContainerImages": [
              {
                "capabilities": [
                  "string"
                ],
                "containerImage": "string",
                "environmentId": "string",
                "useSingleCorePerContainer": true
              }
            ],
            "subnetwork": "string",
            "taskrunnerSettings": {
              "alsologtostderr": true,
              "baseTaskDir": "string",
              "baseUrl": "string",
              "commandlinesFileName": "string",
              "continueOnException": true,
              "dataflowApiVersion": "string",
              "harnessCommand": "string",
              "languageHint": "string",
              "logDir": "string",
              "logToSerialconsole": true,
              "logUploadLocation": "string",
              "oauthScopes": [
                "string"
              ],
              "parallelWorkerSettings": {
                "baseUrl": "string",
                "reportingEnabled": true,
                "servicePath": "string",
                "shuffleServicePath": "string",
                "tempStoragePrefix": "string",
                "workerId": "string"
              },
              "streamingWorkerMainClass": "string",
              "taskGroup": "string",
              "taskUser": "string",
              "tempStoragePrefix": "string",
              "vmId": "string",
              "workflowFileName": "string"
            },
            "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
            "workerHarnessContainerImage": "string",
            "zone": "string"
          }
        ],
        "workerRegion": "string",
        "workerZone": "string"
      },
      "executionInfo": {
        "stages": {
          "property1": {
            "stepName": [
              "string"
            ]
          },
          "property2": {
            "stepName": [
              "string"
            ]
          }
        }
      },
      "id": "string",
      "jobMetadata": {
        "bigTableDetails": [
          {
            "instanceId": "string",
            "projectId": "string",
            "tableId": "string"
          }
        ],
        "bigqueryDetails": [
          {
            "dataset": "string",
            "projectId": "string",
            "query": "string",
            "table": "string"
          }
        ],
        "datastoreDetails": [
          {
            "namespace": "string",
            "projectId": "string"
          }
        ],
        "fileDetails": [
          {
            "filePattern": "string"
          }
        ],
        "pubsubDetails": [
          {
            "subscription": "string",
            "topic": "string"
          }
        ],
        "sdkVersion": {
          "sdkSupportStatus": "UNKNOWN",
          "version": "string",
          "versionDisplayName": "string"
        },
        "spannerDetails": [
          {
            "databaseId": "string",
            "instanceId": "string",
            "projectId": "string"
          }
        ],
        "userDisplayProperties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "location": "string",
      "name": "string",
      "pipelineDescription": {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "executionPipelineStage": [
          {
            "componentSource": [
              {
                "name": "string",
                "originalTransformOrCollection": "string",
                "userName": "string"
              }
            ],
            "componentTransform": [
              {
                "name": "string",
                "originalTransform": "string",
                "userName": "string"
              }
            ],
            "id": "string",
            "inputSource": [
              {
                "name": "string",
                "originalTransformOrCollection": "string",
                "sizeBytes": "string",
                "userName": "string"
              }
            ],
            "kind": "UNKNOWN_KIND",
            "name": "string",
            "outputSource": [
              {
                "name": "string",
                "originalTransformOrCollection": "string",
                "sizeBytes": "string",
                "userName": "string"
              }
            ],
            "prerequisiteStage": [
              "string"
            ]
          }
        ],
        "originalPipelineTransform": [
          {
            "displayData": [
              {
                "boolValue": true,
                "durationValue": "string",
                "floatValue": 0,
                "int64Value": "string",
                "javaClassValue": "string",
                "key": "string",
                "label": "string",
                "namespace": "string",
                "shortStrValue": "string",
                "strValue": "string",
                "timestampValue": "string",
                "url": "string"
              }
            ],
            "id": "string",
            "inputCollectionName": [
              "string"
            ],
            "kind": "UNKNOWN_KIND",
            "name": "string",
            "outputCollectionName": [
              "string"
            ]
          }
        ],
        "stepNamesHash": "string"
      },
      "projectId": "string",
      "replaceJobId": "string",
      "replacedByJobId": "string",
      "requestedState": "JOB_STATE_UNKNOWN",
      "satisfiesPzs": true,
      "stageStates": [
        {
          "currentStateTime": "string",
          "executionStageName": "string",
          "executionStageState": "JOB_STATE_UNKNOWN"
        }
      ],
      "startTime": "string",
      "steps": [
        {
          "kind": "string",
          "name": "string",
          "properties": {
            "property1": null,
            "property2": null
          }
        }
      ],
      "stepsLocation": "string",
      "tempFiles": [
        "string"
      ],
      "transformNameMapping": {
        "property1": "string",
        "property2": "string"
      },
      "type": "JOB_TYPE_UNKNOWN"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataflowprojectslocationsjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListJobsResponse](#schemalistjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.jobs.create

<a id="opIddataflow.projects.locations.jobs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientRequestId": "string",
    "createTime": "string",
    "createdFromSnapshotId": "string",
    "currentState": "JOB_STATE_UNKNOWN",
    "currentStateTime": "string",
    "environment": {
      "clusterManagerApiService": "string",
      "dataset": "string",
      "debugOptions": {
        "enableHotKeyLogging": true
      },
      "experiments": [
        "string"
      ],
      "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
      "internalExperiments": {
        "property1": null,
        "property2": null
      },
      "sdkPipelineOptions": {
        "property1": null,
        "property2": null
      },
      "serviceAccountEmail": "string",
      "serviceKmsKeyName": "string",
      "serviceOptions": [
        "string"
      ],
      "tempStoragePrefix": "string",
      "userAgent": {
        "property1": null,
        "property2": null
      },
      "version": {
        "property1": null,
        "property2": null
      },
      "workerPools": [
        {
          "autoscalingSettings": {
            "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
            "maxNumWorkers": 0
          },
          "dataDisks": [
            {
              "diskType": "string",
              "mountPoint": "string",
              "sizeGb": 0
            }
          ],
          "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
          "diskSizeGb": 0,
          "diskSourceImage": "string",
          "diskType": "string",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kind": "string",
          "machineType": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "network": "string",
          "numThreadsPerWorker": 0,
          "numWorkers": 0,
          "onHostMaintenance": "string",
          "packages": [
            {
              "location": "string",
              "name": "string"
            }
          ],
          "poolArgs": {
            "property1": null,
            "property2": null
          },
          "sdkHarnessContainerImages": [
            {
              "capabilities": [
                "string"
              ],
              "containerImage": "string",
              "environmentId": "string",
              "useSingleCorePerContainer": true
            }
          ],
          "subnetwork": "string",
          "taskrunnerSettings": {
            "alsologtostderr": true,
            "baseTaskDir": "string",
            "baseUrl": "string",
            "commandlinesFileName": "string",
            "continueOnException": true,
            "dataflowApiVersion": "string",
            "harnessCommand": "string",
            "languageHint": "string",
            "logDir": "string",
            "logToSerialconsole": true,
            "logUploadLocation": "string",
            "oauthScopes": [
              "string"
            ],
            "parallelWorkerSettings": {
              "baseUrl": "string",
              "reportingEnabled": true,
              "servicePath": "string",
              "shuffleServicePath": "string",
              "tempStoragePrefix": "string",
              "workerId": "string"
            },
            "streamingWorkerMainClass": "string",
            "taskGroup": "string",
            "taskUser": "string",
            "tempStoragePrefix": "string",
            "vmId": "string",
            "workflowFileName": "string"
          },
          "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
          "workerHarnessContainerImage": "string",
          "zone": "string"
        }
      ],
      "workerRegion": "string",
      "workerZone": "string"
    },
    "executionInfo": {
      "stages": {
        "property1": {
          "stepName": [
            "string"
          ]
        },
        "property2": {
          "stepName": [
            "string"
          ]
        }
      }
    },
    "id": "string",
    "jobMetadata": {
      "bigTableDetails": [
        {
          "instanceId": "string",
          "projectId": "string",
          "tableId": "string"
        }
      ],
      "bigqueryDetails": [
        {
          "dataset": "string",
          "projectId": "string",
          "query": "string",
          "table": "string"
        }
      ],
      "datastoreDetails": [
        {
          "namespace": "string",
          "projectId": "string"
        }
      ],
      "fileDetails": [
        {
          "filePattern": "string"
        }
      ],
      "pubsubDetails": [
        {
          "subscription": "string",
          "topic": "string"
        }
      ],
      "sdkVersion": {
        "sdkSupportStatus": "UNKNOWN",
        "version": "string",
        "versionDisplayName": "string"
      },
      "spannerDetails": [
        {
          "databaseId": "string",
          "instanceId": "string",
          "projectId": "string"
        }
      ],
      "userDisplayProperties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": "string",
    "name": "string",
    "pipelineDescription": {
      "displayData": [
        {
          "boolValue": true,
          "durationValue": "string",
          "floatValue": 0,
          "int64Value": "string",
          "javaClassValue": "string",
          "key": "string",
          "label": "string",
          "namespace": "string",
          "shortStrValue": "string",
          "strValue": "string",
          "timestampValue": "string",
          "url": "string"
        }
      ],
      "executionPipelineStage": [
        {
          "componentSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "userName": "string"
            }
          ],
          "componentTransform": [
            {
              "name": "string",
              "originalTransform": "string",
              "userName": "string"
            }
          ],
          "id": "string",
          "inputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "prerequisiteStage": [
            "string"
          ]
        }
      ],
      "originalPipelineTransform": [
        {
          "displayData": [
            {
              "boolValue": true,
              "durationValue": "string",
              "floatValue": 0,
              "int64Value": "string",
              "javaClassValue": "string",
              "key": "string",
              "label": "string",
              "namespace": "string",
              "shortStrValue": "string",
              "strValue": "string",
              "timestampValue": "string",
              "url": "string"
            }
          ],
          "id": "string",
          "inputCollectionName": [
            "string"
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputCollectionName": [
            "string"
          ]
        }
      ],
      "stepNamesHash": "string"
    },
    "projectId": "string",
    "replaceJobId": "string",
    "replacedByJobId": "string",
    "requestedState": "JOB_STATE_UNKNOWN",
    "satisfiesPzs": true,
    "stageStates": [
      {
        "currentStateTime": "string",
        "executionStageName": "string",
        "executionStageState": "JOB_STATE_UNKNOWN"
      }
    ],
    "startTime": "string",
    "steps": [
      {
        "kind": "string",
        "name": "string",
        "properties": {
          "property1": null,
          "property2": null
        }
      }
    ],
    "stepsLocation": "string",
    "tempFiles": [
      "string"
    ],
    "transformNameMapping": {
      "property1": "string",
      "property2": "string"
    },
    "type": "JOB_TYPE_UNKNOWN"
  }'
```

`POST /v1b3/projects/{projectId}/locations/{location}/jobs`

Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.

> Body parameter

```json
{
  "clientRequestId": "string",
  "createTime": "string",
  "createdFromSnapshotId": "string",
  "currentState": "JOB_STATE_UNKNOWN",
  "currentStateTime": "string",
  "environment": {
    "clusterManagerApiService": "string",
    "dataset": "string",
    "debugOptions": {
      "enableHotKeyLogging": true
    },
    "experiments": [
      "string"
    ],
    "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
    "internalExperiments": {
      "property1": null,
      "property2": null
    },
    "sdkPipelineOptions": {
      "property1": null,
      "property2": null
    },
    "serviceAccountEmail": "string",
    "serviceKmsKeyName": "string",
    "serviceOptions": [
      "string"
    ],
    "tempStoragePrefix": "string",
    "userAgent": {
      "property1": null,
      "property2": null
    },
    "version": {
      "property1": null,
      "property2": null
    },
    "workerPools": [
      {
        "autoscalingSettings": {
          "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
          "maxNumWorkers": 0
        },
        "dataDisks": [
          {
            "diskType": "string",
            "mountPoint": "string",
            "sizeGb": 0
          }
        ],
        "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
        "diskSizeGb": 0,
        "diskSourceImage": "string",
        "diskType": "string",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kind": "string",
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "network": "string",
        "numThreadsPerWorker": 0,
        "numWorkers": 0,
        "onHostMaintenance": "string",
        "packages": [
          {
            "location": "string",
            "name": "string"
          }
        ],
        "poolArgs": {
          "property1": null,
          "property2": null
        },
        "sdkHarnessContainerImages": [
          {
            "capabilities": [
              "string"
            ],
            "containerImage": "string",
            "environmentId": "string",
            "useSingleCorePerContainer": true
          }
        ],
        "subnetwork": "string",
        "taskrunnerSettings": {
          "alsologtostderr": true,
          "baseTaskDir": "string",
          "baseUrl": "string",
          "commandlinesFileName": "string",
          "continueOnException": true,
          "dataflowApiVersion": "string",
          "harnessCommand": "string",
          "languageHint": "string",
          "logDir": "string",
          "logToSerialconsole": true,
          "logUploadLocation": "string",
          "oauthScopes": [
            "string"
          ],
          "parallelWorkerSettings": {
            "baseUrl": "string",
            "reportingEnabled": true,
            "servicePath": "string",
            "shuffleServicePath": "string",
            "tempStoragePrefix": "string",
            "workerId": "string"
          },
          "streamingWorkerMainClass": "string",
          "taskGroup": "string",
          "taskUser": "string",
          "tempStoragePrefix": "string",
          "vmId": "string",
          "workflowFileName": "string"
        },
        "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
        "workerHarnessContainerImage": "string",
        "zone": "string"
      }
    ],
    "workerRegion": "string",
    "workerZone": "string"
  },
  "executionInfo": {
    "stages": {
      "property1": {
        "stepName": [
          "string"
        ]
      },
      "property2": {
        "stepName": [
          "string"
        ]
      }
    }
  },
  "id": "string",
  "jobMetadata": {
    "bigTableDetails": [
      {
        "instanceId": "string",
        "projectId": "string",
        "tableId": "string"
      }
    ],
    "bigqueryDetails": [
      {
        "dataset": "string",
        "projectId": "string",
        "query": "string",
        "table": "string"
      }
    ],
    "datastoreDetails": [
      {
        "namespace": "string",
        "projectId": "string"
      }
    ],
    "fileDetails": [
      {
        "filePattern": "string"
      }
    ],
    "pubsubDetails": [
      {
        "subscription": "string",
        "topic": "string"
      }
    ],
    "sdkVersion": {
      "sdkSupportStatus": "UNKNOWN",
      "version": "string",
      "versionDisplayName": "string"
    },
    "spannerDetails": [
      {
        "databaseId": "string",
        "instanceId": "string",
        "projectId": "string"
      }
    ],
    "userDisplayProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "pipelineDescription": {
    "displayData": [
      {
        "boolValue": true,
        "durationValue": "string",
        "floatValue": 0,
        "int64Value": "string",
        "javaClassValue": "string",
        "key": "string",
        "label": "string",
        "namespace": "string",
        "shortStrValue": "string",
        "strValue": "string",
        "timestampValue": "string",
        "url": "string"
      }
    ],
    "executionPipelineStage": [
      {
        "componentSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "userName": "string"
          }
        ],
        "componentTransform": [
          {
            "name": "string",
            "originalTransform": "string",
            "userName": "string"
          }
        ],
        "id": "string",
        "inputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "prerequisiteStage": [
          "string"
        ]
      }
    ],
    "originalPipelineTransform": [
      {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "id": "string",
        "inputCollectionName": [
          "string"
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputCollectionName": [
          "string"
        ]
      }
    ],
    "stepNamesHash": "string"
  },
  "projectId": "string",
  "replaceJobId": "string",
  "replacedByJobId": "string",
  "requestedState": "JOB_STATE_UNKNOWN",
  "satisfiesPzs": true,
  "stageStates": [
    {
      "currentStateTime": "string",
      "executionStageName": "string",
      "executionStageState": "JOB_STATE_UNKNOWN"
    }
  ],
  "startTime": "string",
  "steps": [
    {
      "kind": "string",
      "name": "string",
      "properties": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "stepsLocation": "string",
  "tempFiles": [
    "string"
  ],
  "transformNameMapping": {
    "property1": "string",
    "property2": "string"
  },
  "type": "JOB_TYPE_UNKNOWN"
}
```

<h3 id="dataflowprojectslocationsjobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the Cloud Platform project that the job belongs to.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.|
|replaceJobId|query|string|false|Deprecated. This field is now in the Job message.|
|view|query|string|false|The level of information requested in response.|
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
|» clientRequestId|body|string|false|The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it.|
|» createTime|body|string(google-datetime)|false|The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service.|
|» createdFromSnapshotId|body|string|false|If this is specified, the job's initial state is populated from the given snapshot.|
|» currentState|body|string|false|The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.|
|» currentStateTime|body|string(google-datetime)|false|The timestamp associated with the current state.|
|» environment|body|[Environment](#schemaenvironment)|false|The environment for the job.|
|» executionInfo|body|[JobExecutionInfo](#schemajobexecutioninfo)|false|Deprecated.|
|» id|body|string|false|The unique ID of this job. This field is set by the Cloud Dataflow service when the Job is created, and is immutable for the life of the job.|
|» jobMetadata|body|[JobMetadata](#schemajobmetadata)|false|This field is populated by the Dataflow service to support filtering jobs by the metadata values provided here. Populated for ListJobs and all GetJob views SUMMARY and higher.|
|» labels|body|object|false|User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.|
|» » **additionalProperties**|body|string|false|none|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.|
|» name|body|string|false|The user-specified Cloud Dataflow job name. Only one Job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a Job with the same name as an already-existing Job, the attempt returns the existing Job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?`|
|» pipelineDescription|body|[PipelineDescription](#schemapipelinedescription)|false|Preliminary field: The format of this data may change at any time. A description of the user pipeline and stages through which it is executed. Created by Cloud Dataflow service. Only retrieved with JOB_VIEW_DESCRIPTION or JOB_VIEW_ALL.|
|» projectId|body|string|false|The ID of the Cloud Platform project that the job belongs to.|
|» replaceJobId|body|string|false|If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job.|
|» replacedByJobId|body|string|false|If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job.|
|» requestedState|body|string|false|The job's requested state. `UpdateJob` may be used to switch between the `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING` states, by setting requested_state. `UpdateJob` may also be used to directly set a job's requested state to `JOB_STATE_CANCELLED` or `JOB_STATE_DONE`, irrevocably terminating the job if it has not already reached a terminal state.|
|» satisfiesPzs|body|boolean|false|Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.|
|» stageStates|body|[[ExecutionStageState](#schemaexecutionstagestate)]|false|This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.|
|» startTime|body|string(google-datetime)|false|The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service.|
|» steps|body|[[Step](#schemastep)]|false|Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL.|
|» stepsLocation|body|string|false|The Cloud Storage location where the steps are stored.|
|» tempFiles|body|[string]|false|A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}|
|» transformNameMapping|body|object|false|The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string|false|The type of Cloud Dataflow job.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|JOB_VIEW_UNKNOWN|
|view|JOB_VIEW_SUMMARY|
|view|JOB_VIEW_ALL|
|view|JOB_VIEW_DESCRIPTION|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» currentState|JOB_STATE_UNKNOWN|
|» currentState|JOB_STATE_STOPPED|
|» currentState|JOB_STATE_RUNNING|
|» currentState|JOB_STATE_DONE|
|» currentState|JOB_STATE_FAILED|
|» currentState|JOB_STATE_CANCELLED|
|» currentState|JOB_STATE_UPDATED|
|» currentState|JOB_STATE_DRAINING|
|» currentState|JOB_STATE_DRAINED|
|» currentState|JOB_STATE_PENDING|
|» currentState|JOB_STATE_CANCELLING|
|» currentState|JOB_STATE_QUEUED|
|» currentState|JOB_STATE_RESOURCE_CLEANING_UP|
|» requestedState|JOB_STATE_UNKNOWN|
|» requestedState|JOB_STATE_STOPPED|
|» requestedState|JOB_STATE_RUNNING|
|» requestedState|JOB_STATE_DONE|
|» requestedState|JOB_STATE_FAILED|
|» requestedState|JOB_STATE_CANCELLED|
|» requestedState|JOB_STATE_UPDATED|
|» requestedState|JOB_STATE_DRAINING|
|» requestedState|JOB_STATE_DRAINED|
|» requestedState|JOB_STATE_PENDING|
|» requestedState|JOB_STATE_CANCELLING|
|» requestedState|JOB_STATE_QUEUED|
|» requestedState|JOB_STATE_RESOURCE_CLEANING_UP|
|» type|JOB_TYPE_UNKNOWN|
|» type|JOB_TYPE_BATCH|
|» type|JOB_TYPE_STREAMING|

> Example responses

> 200 Response

```json
{
  "clientRequestId": "string",
  "createTime": "string",
  "createdFromSnapshotId": "string",
  "currentState": "JOB_STATE_UNKNOWN",
  "currentStateTime": "string",
  "environment": {
    "clusterManagerApiService": "string",
    "dataset": "string",
    "debugOptions": {
      "enableHotKeyLogging": true
    },
    "experiments": [
      "string"
    ],
    "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
    "internalExperiments": {
      "property1": null,
      "property2": null
    },
    "sdkPipelineOptions": {
      "property1": null,
      "property2": null
    },
    "serviceAccountEmail": "string",
    "serviceKmsKeyName": "string",
    "serviceOptions": [
      "string"
    ],
    "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
    "tempStoragePrefix": "string",
    "userAgent": {
      "property1": null,
      "property2": null
    },
    "version": {
      "property1": null,
      "property2": null
    },
    "workerPools": [
      {
        "autoscalingSettings": {
          "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
          "maxNumWorkers": 0
        },
        "dataDisks": [
          {
            "diskType": "string",
            "mountPoint": "string",
            "sizeGb": 0
          }
        ],
        "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
        "diskSizeGb": 0,
        "diskSourceImage": "string",
        "diskType": "string",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kind": "string",
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "network": "string",
        "numThreadsPerWorker": 0,
        "numWorkers": 0,
        "onHostMaintenance": "string",
        "packages": [
          {
            "location": "string",
            "name": "string"
          }
        ],
        "poolArgs": {
          "property1": null,
          "property2": null
        },
        "sdkHarnessContainerImages": [
          {
            "capabilities": [
              "string"
            ],
            "containerImage": "string",
            "environmentId": "string",
            "useSingleCorePerContainer": true
          }
        ],
        "subnetwork": "string",
        "taskrunnerSettings": {
          "alsologtostderr": true,
          "baseTaskDir": "string",
          "baseUrl": "string",
          "commandlinesFileName": "string",
          "continueOnException": true,
          "dataflowApiVersion": "string",
          "harnessCommand": "string",
          "languageHint": "string",
          "logDir": "string",
          "logToSerialconsole": true,
          "logUploadLocation": "string",
          "oauthScopes": [
            "string"
          ],
          "parallelWorkerSettings": {
            "baseUrl": "string",
            "reportingEnabled": true,
            "servicePath": "string",
            "shuffleServicePath": "string",
            "tempStoragePrefix": "string",
            "workerId": "string"
          },
          "streamingWorkerMainClass": "string",
          "taskGroup": "string",
          "taskUser": "string",
          "tempStoragePrefix": "string",
          "vmId": "string",
          "workflowFileName": "string"
        },
        "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
        "workerHarnessContainerImage": "string",
        "zone": "string"
      }
    ],
    "workerRegion": "string",
    "workerZone": "string"
  },
  "executionInfo": {
    "stages": {
      "property1": {
        "stepName": [
          "string"
        ]
      },
      "property2": {
        "stepName": [
          "string"
        ]
      }
    }
  },
  "id": "string",
  "jobMetadata": {
    "bigTableDetails": [
      {
        "instanceId": "string",
        "projectId": "string",
        "tableId": "string"
      }
    ],
    "bigqueryDetails": [
      {
        "dataset": "string",
        "projectId": "string",
        "query": "string",
        "table": "string"
      }
    ],
    "datastoreDetails": [
      {
        "namespace": "string",
        "projectId": "string"
      }
    ],
    "fileDetails": [
      {
        "filePattern": "string"
      }
    ],
    "pubsubDetails": [
      {
        "subscription": "string",
        "topic": "string"
      }
    ],
    "sdkVersion": {
      "sdkSupportStatus": "UNKNOWN",
      "version": "string",
      "versionDisplayName": "string"
    },
    "spannerDetails": [
      {
        "databaseId": "string",
        "instanceId": "string",
        "projectId": "string"
      }
    ],
    "userDisplayProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "pipelineDescription": {
    "displayData": [
      {
        "boolValue": true,
        "durationValue": "string",
        "floatValue": 0,
        "int64Value": "string",
        "javaClassValue": "string",
        "key": "string",
        "label": "string",
        "namespace": "string",
        "shortStrValue": "string",
        "strValue": "string",
        "timestampValue": "string",
        "url": "string"
      }
    ],
    "executionPipelineStage": [
      {
        "componentSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "userName": "string"
          }
        ],
        "componentTransform": [
          {
            "name": "string",
            "originalTransform": "string",
            "userName": "string"
          }
        ],
        "id": "string",
        "inputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "prerequisiteStage": [
          "string"
        ]
      }
    ],
    "originalPipelineTransform": [
      {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "id": "string",
        "inputCollectionName": [
          "string"
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputCollectionName": [
          "string"
        ]
      }
    ],
    "stepNamesHash": "string"
  },
  "projectId": "string",
  "replaceJobId": "string",
  "replacedByJobId": "string",
  "requestedState": "JOB_STATE_UNKNOWN",
  "satisfiesPzs": true,
  "stageStates": [
    {
      "currentStateTime": "string",
      "executionStageName": "string",
      "executionStageState": "JOB_STATE_UNKNOWN"
    }
  ],
  "startTime": "string",
  "steps": [
    {
      "kind": "string",
      "name": "string",
      "properties": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "stepsLocation": "string",
  "tempFiles": [
    "string"
  ],
  "transformNameMapping": {
    "property1": "string",
    "property2": "string"
  },
  "type": "JOB_TYPE_UNKNOWN"
}
```

<h3 id="dataflowprojectslocationsjobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.jobs.get

<a id="opIddataflow.projects.locations.jobs.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}`

Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.

<h3 id="dataflowprojectslocationsjobsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the Cloud Platform project that the job belongs to.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.|
|jobId|path|string|true|The job ID.|
|view|query|string|false|The level of information requested in response.|
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
|view|JOB_VIEW_UNKNOWN|
|view|JOB_VIEW_SUMMARY|
|view|JOB_VIEW_ALL|
|view|JOB_VIEW_DESCRIPTION|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "clientRequestId": "string",
  "createTime": "string",
  "createdFromSnapshotId": "string",
  "currentState": "JOB_STATE_UNKNOWN",
  "currentStateTime": "string",
  "environment": {
    "clusterManagerApiService": "string",
    "dataset": "string",
    "debugOptions": {
      "enableHotKeyLogging": true
    },
    "experiments": [
      "string"
    ],
    "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
    "internalExperiments": {
      "property1": null,
      "property2": null
    },
    "sdkPipelineOptions": {
      "property1": null,
      "property2": null
    },
    "serviceAccountEmail": "string",
    "serviceKmsKeyName": "string",
    "serviceOptions": [
      "string"
    ],
    "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
    "tempStoragePrefix": "string",
    "userAgent": {
      "property1": null,
      "property2": null
    },
    "version": {
      "property1": null,
      "property2": null
    },
    "workerPools": [
      {
        "autoscalingSettings": {
          "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
          "maxNumWorkers": 0
        },
        "dataDisks": [
          {
            "diskType": "string",
            "mountPoint": "string",
            "sizeGb": 0
          }
        ],
        "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
        "diskSizeGb": 0,
        "diskSourceImage": "string",
        "diskType": "string",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kind": "string",
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "network": "string",
        "numThreadsPerWorker": 0,
        "numWorkers": 0,
        "onHostMaintenance": "string",
        "packages": [
          {
            "location": "string",
            "name": "string"
          }
        ],
        "poolArgs": {
          "property1": null,
          "property2": null
        },
        "sdkHarnessContainerImages": [
          {
            "capabilities": [
              "string"
            ],
            "containerImage": "string",
            "environmentId": "string",
            "useSingleCorePerContainer": true
          }
        ],
        "subnetwork": "string",
        "taskrunnerSettings": {
          "alsologtostderr": true,
          "baseTaskDir": "string",
          "baseUrl": "string",
          "commandlinesFileName": "string",
          "continueOnException": true,
          "dataflowApiVersion": "string",
          "harnessCommand": "string",
          "languageHint": "string",
          "logDir": "string",
          "logToSerialconsole": true,
          "logUploadLocation": "string",
          "oauthScopes": [
            "string"
          ],
          "parallelWorkerSettings": {
            "baseUrl": "string",
            "reportingEnabled": true,
            "servicePath": "string",
            "shuffleServicePath": "string",
            "tempStoragePrefix": "string",
            "workerId": "string"
          },
          "streamingWorkerMainClass": "string",
          "taskGroup": "string",
          "taskUser": "string",
          "tempStoragePrefix": "string",
          "vmId": "string",
          "workflowFileName": "string"
        },
        "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
        "workerHarnessContainerImage": "string",
        "zone": "string"
      }
    ],
    "workerRegion": "string",
    "workerZone": "string"
  },
  "executionInfo": {
    "stages": {
      "property1": {
        "stepName": [
          "string"
        ]
      },
      "property2": {
        "stepName": [
          "string"
        ]
      }
    }
  },
  "id": "string",
  "jobMetadata": {
    "bigTableDetails": [
      {
        "instanceId": "string",
        "projectId": "string",
        "tableId": "string"
      }
    ],
    "bigqueryDetails": [
      {
        "dataset": "string",
        "projectId": "string",
        "query": "string",
        "table": "string"
      }
    ],
    "datastoreDetails": [
      {
        "namespace": "string",
        "projectId": "string"
      }
    ],
    "fileDetails": [
      {
        "filePattern": "string"
      }
    ],
    "pubsubDetails": [
      {
        "subscription": "string",
        "topic": "string"
      }
    ],
    "sdkVersion": {
      "sdkSupportStatus": "UNKNOWN",
      "version": "string",
      "versionDisplayName": "string"
    },
    "spannerDetails": [
      {
        "databaseId": "string",
        "instanceId": "string",
        "projectId": "string"
      }
    ],
    "userDisplayProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "pipelineDescription": {
    "displayData": [
      {
        "boolValue": true,
        "durationValue": "string",
        "floatValue": 0,
        "int64Value": "string",
        "javaClassValue": "string",
        "key": "string",
        "label": "string",
        "namespace": "string",
        "shortStrValue": "string",
        "strValue": "string",
        "timestampValue": "string",
        "url": "string"
      }
    ],
    "executionPipelineStage": [
      {
        "componentSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "userName": "string"
          }
        ],
        "componentTransform": [
          {
            "name": "string",
            "originalTransform": "string",
            "userName": "string"
          }
        ],
        "id": "string",
        "inputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "prerequisiteStage": [
          "string"
        ]
      }
    ],
    "originalPipelineTransform": [
      {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "id": "string",
        "inputCollectionName": [
          "string"
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputCollectionName": [
          "string"
        ]
      }
    ],
    "stepNamesHash": "string"
  },
  "projectId": "string",
  "replaceJobId": "string",
  "replacedByJobId": "string",
  "requestedState": "JOB_STATE_UNKNOWN",
  "satisfiesPzs": true,
  "stageStates": [
    {
      "currentStateTime": "string",
      "executionStageName": "string",
      "executionStageState": "JOB_STATE_UNKNOWN"
    }
  ],
  "startTime": "string",
  "steps": [
    {
      "kind": "string",
      "name": "string",
      "properties": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "stepsLocation": "string",
  "tempFiles": [
    "string"
  ],
  "transformNameMapping": {
    "property1": "string",
    "property2": "string"
  },
  "type": "JOB_TYPE_UNKNOWN"
}
```

<h3 id="dataflowprojectslocationsjobsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.jobs.update

<a id="opIddataflow.projects.locations.jobs.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/jobs/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientRequestId": "string",
    "createTime": "string",
    "createdFromSnapshotId": "string",
    "currentState": "JOB_STATE_UNKNOWN",
    "currentStateTime": "string",
    "environment": {
      "clusterManagerApiService": "string",
      "dataset": "string",
      "debugOptions": {
        "enableHotKeyLogging": true
      },
      "experiments": [
        "string"
      ],
      "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
      "internalExperiments": {
        "property1": null,
        "property2": null
      },
      "sdkPipelineOptions": {
        "property1": null,
        "property2": null
      },
      "serviceAccountEmail": "string",
      "serviceKmsKeyName": "string",
      "serviceOptions": [
        "string"
      ],
      "tempStoragePrefix": "string",
      "userAgent": {
        "property1": null,
        "property2": null
      },
      "version": {
        "property1": null,
        "property2": null
      },
      "workerPools": [
        {
          "autoscalingSettings": {
            "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
            "maxNumWorkers": 0
          },
          "dataDisks": [
            {
              "diskType": "string",
              "mountPoint": "string",
              "sizeGb": 0
            }
          ],
          "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
          "diskSizeGb": 0,
          "diskSourceImage": "string",
          "diskType": "string",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kind": "string",
          "machineType": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "network": "string",
          "numThreadsPerWorker": 0,
          "numWorkers": 0,
          "onHostMaintenance": "string",
          "packages": [
            {
              "location": "string",
              "name": "string"
            }
          ],
          "poolArgs": {
            "property1": null,
            "property2": null
          },
          "sdkHarnessContainerImages": [
            {
              "capabilities": [
                "string"
              ],
              "containerImage": "string",
              "environmentId": "string",
              "useSingleCorePerContainer": true
            }
          ],
          "subnetwork": "string",
          "taskrunnerSettings": {
            "alsologtostderr": true,
            "baseTaskDir": "string",
            "baseUrl": "string",
            "commandlinesFileName": "string",
            "continueOnException": true,
            "dataflowApiVersion": "string",
            "harnessCommand": "string",
            "languageHint": "string",
            "logDir": "string",
            "logToSerialconsole": true,
            "logUploadLocation": "string",
            "oauthScopes": [
              "string"
            ],
            "parallelWorkerSettings": {
              "baseUrl": "string",
              "reportingEnabled": true,
              "servicePath": "string",
              "shuffleServicePath": "string",
              "tempStoragePrefix": "string",
              "workerId": "string"
            },
            "streamingWorkerMainClass": "string",
            "taskGroup": "string",
            "taskUser": "string",
            "tempStoragePrefix": "string",
            "vmId": "string",
            "workflowFileName": "string"
          },
          "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
          "workerHarnessContainerImage": "string",
          "zone": "string"
        }
      ],
      "workerRegion": "string",
      "workerZone": "string"
    },
    "executionInfo": {
      "stages": {
        "property1": {
          "stepName": [
            "string"
          ]
        },
        "property2": {
          "stepName": [
            "string"
          ]
        }
      }
    },
    "id": "string",
    "jobMetadata": {
      "bigTableDetails": [
        {
          "instanceId": "string",
          "projectId": "string",
          "tableId": "string"
        }
      ],
      "bigqueryDetails": [
        {
          "dataset": "string",
          "projectId": "string",
          "query": "string",
          "table": "string"
        }
      ],
      "datastoreDetails": [
        {
          "namespace": "string",
          "projectId": "string"
        }
      ],
      "fileDetails": [
        {
          "filePattern": "string"
        }
      ],
      "pubsubDetails": [
        {
          "subscription": "string",
          "topic": "string"
        }
      ],
      "sdkVersion": {
        "sdkSupportStatus": "UNKNOWN",
        "version": "string",
        "versionDisplayName": "string"
      },
      "spannerDetails": [
        {
          "databaseId": "string",
          "instanceId": "string",
          "projectId": "string"
        }
      ],
      "userDisplayProperties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": "string",
    "name": "string",
    "pipelineDescription": {
      "displayData": [
        {
          "boolValue": true,
          "durationValue": "string",
          "floatValue": 0,
          "int64Value": "string",
          "javaClassValue": "string",
          "key": "string",
          "label": "string",
          "namespace": "string",
          "shortStrValue": "string",
          "strValue": "string",
          "timestampValue": "string",
          "url": "string"
        }
      ],
      "executionPipelineStage": [
        {
          "componentSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "userName": "string"
            }
          ],
          "componentTransform": [
            {
              "name": "string",
              "originalTransform": "string",
              "userName": "string"
            }
          ],
          "id": "string",
          "inputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "prerequisiteStage": [
            "string"
          ]
        }
      ],
      "originalPipelineTransform": [
        {
          "displayData": [
            {
              "boolValue": true,
              "durationValue": "string",
              "floatValue": 0,
              "int64Value": "string",
              "javaClassValue": "string",
              "key": "string",
              "label": "string",
              "namespace": "string",
              "shortStrValue": "string",
              "strValue": "string",
              "timestampValue": "string",
              "url": "string"
            }
          ],
          "id": "string",
          "inputCollectionName": [
            "string"
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputCollectionName": [
            "string"
          ]
        }
      ],
      "stepNamesHash": "string"
    },
    "projectId": "string",
    "replaceJobId": "string",
    "replacedByJobId": "string",
    "requestedState": "JOB_STATE_UNKNOWN",
    "satisfiesPzs": true,
    "stageStates": [
      {
        "currentStateTime": "string",
        "executionStageName": "string",
        "executionStageState": "JOB_STATE_UNKNOWN"
      }
    ],
    "startTime": "string",
    "steps": [
      {
        "kind": "string",
        "name": "string",
        "properties": {
          "property1": null,
          "property2": null
        }
      }
    ],
    "stepsLocation": "string",
    "tempFiles": [
      "string"
    ],
    "transformNameMapping": {
      "property1": "string",
      "property2": "string"
    },
    "type": "JOB_TYPE_UNKNOWN"
  }'
```

`PUT /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}`

Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.

> Body parameter

```json
{
  "clientRequestId": "string",
  "createTime": "string",
  "createdFromSnapshotId": "string",
  "currentState": "JOB_STATE_UNKNOWN",
  "currentStateTime": "string",
  "environment": {
    "clusterManagerApiService": "string",
    "dataset": "string",
    "debugOptions": {
      "enableHotKeyLogging": true
    },
    "experiments": [
      "string"
    ],
    "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
    "internalExperiments": {
      "property1": null,
      "property2": null
    },
    "sdkPipelineOptions": {
      "property1": null,
      "property2": null
    },
    "serviceAccountEmail": "string",
    "serviceKmsKeyName": "string",
    "serviceOptions": [
      "string"
    ],
    "tempStoragePrefix": "string",
    "userAgent": {
      "property1": null,
      "property2": null
    },
    "version": {
      "property1": null,
      "property2": null
    },
    "workerPools": [
      {
        "autoscalingSettings": {
          "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
          "maxNumWorkers": 0
        },
        "dataDisks": [
          {
            "diskType": "string",
            "mountPoint": "string",
            "sizeGb": 0
          }
        ],
        "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
        "diskSizeGb": 0,
        "diskSourceImage": "string",
        "diskType": "string",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kind": "string",
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "network": "string",
        "numThreadsPerWorker": 0,
        "numWorkers": 0,
        "onHostMaintenance": "string",
        "packages": [
          {
            "location": "string",
            "name": "string"
          }
        ],
        "poolArgs": {
          "property1": null,
          "property2": null
        },
        "sdkHarnessContainerImages": [
          {
            "capabilities": [
              "string"
            ],
            "containerImage": "string",
            "environmentId": "string",
            "useSingleCorePerContainer": true
          }
        ],
        "subnetwork": "string",
        "taskrunnerSettings": {
          "alsologtostderr": true,
          "baseTaskDir": "string",
          "baseUrl": "string",
          "commandlinesFileName": "string",
          "continueOnException": true,
          "dataflowApiVersion": "string",
          "harnessCommand": "string",
          "languageHint": "string",
          "logDir": "string",
          "logToSerialconsole": true,
          "logUploadLocation": "string",
          "oauthScopes": [
            "string"
          ],
          "parallelWorkerSettings": {
            "baseUrl": "string",
            "reportingEnabled": true,
            "servicePath": "string",
            "shuffleServicePath": "string",
            "tempStoragePrefix": "string",
            "workerId": "string"
          },
          "streamingWorkerMainClass": "string",
          "taskGroup": "string",
          "taskUser": "string",
          "tempStoragePrefix": "string",
          "vmId": "string",
          "workflowFileName": "string"
        },
        "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
        "workerHarnessContainerImage": "string",
        "zone": "string"
      }
    ],
    "workerRegion": "string",
    "workerZone": "string"
  },
  "executionInfo": {
    "stages": {
      "property1": {
        "stepName": [
          "string"
        ]
      },
      "property2": {
        "stepName": [
          "string"
        ]
      }
    }
  },
  "id": "string",
  "jobMetadata": {
    "bigTableDetails": [
      {
        "instanceId": "string",
        "projectId": "string",
        "tableId": "string"
      }
    ],
    "bigqueryDetails": [
      {
        "dataset": "string",
        "projectId": "string",
        "query": "string",
        "table": "string"
      }
    ],
    "datastoreDetails": [
      {
        "namespace": "string",
        "projectId": "string"
      }
    ],
    "fileDetails": [
      {
        "filePattern": "string"
      }
    ],
    "pubsubDetails": [
      {
        "subscription": "string",
        "topic": "string"
      }
    ],
    "sdkVersion": {
      "sdkSupportStatus": "UNKNOWN",
      "version": "string",
      "versionDisplayName": "string"
    },
    "spannerDetails": [
      {
        "databaseId": "string",
        "instanceId": "string",
        "projectId": "string"
      }
    ],
    "userDisplayProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "pipelineDescription": {
    "displayData": [
      {
        "boolValue": true,
        "durationValue": "string",
        "floatValue": 0,
        "int64Value": "string",
        "javaClassValue": "string",
        "key": "string",
        "label": "string",
        "namespace": "string",
        "shortStrValue": "string",
        "strValue": "string",
        "timestampValue": "string",
        "url": "string"
      }
    ],
    "executionPipelineStage": [
      {
        "componentSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "userName": "string"
          }
        ],
        "componentTransform": [
          {
            "name": "string",
            "originalTransform": "string",
            "userName": "string"
          }
        ],
        "id": "string",
        "inputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "prerequisiteStage": [
          "string"
        ]
      }
    ],
    "originalPipelineTransform": [
      {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "id": "string",
        "inputCollectionName": [
          "string"
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputCollectionName": [
          "string"
        ]
      }
    ],
    "stepNamesHash": "string"
  },
  "projectId": "string",
  "replaceJobId": "string",
  "replacedByJobId": "string",
  "requestedState": "JOB_STATE_UNKNOWN",
  "satisfiesPzs": true,
  "stageStates": [
    {
      "currentStateTime": "string",
      "executionStageName": "string",
      "executionStageState": "JOB_STATE_UNKNOWN"
    }
  ],
  "startTime": "string",
  "steps": [
    {
      "kind": "string",
      "name": "string",
      "properties": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "stepsLocation": "string",
  "tempFiles": [
    "string"
  ],
  "transformNameMapping": {
    "property1": "string",
    "property2": "string"
  },
  "type": "JOB_TYPE_UNKNOWN"
}
```

<h3 id="dataflowprojectslocationsjobsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the Cloud Platform project that the job belongs to.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.|
|jobId|path|string|true|The job ID.|
|updateMask|query|string|false|The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, we will first handle RequestedJobState and then the update_mask fields.|
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
|» clientRequestId|body|string|false|The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it.|
|» createTime|body|string(google-datetime)|false|The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service.|
|» createdFromSnapshotId|body|string|false|If this is specified, the job's initial state is populated from the given snapshot.|
|» currentState|body|string|false|The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.|
|» currentStateTime|body|string(google-datetime)|false|The timestamp associated with the current state.|
|» environment|body|[Environment](#schemaenvironment)|false|The environment for the job.|
|» executionInfo|body|[JobExecutionInfo](#schemajobexecutioninfo)|false|Deprecated.|
|» id|body|string|false|The unique ID of this job. This field is set by the Cloud Dataflow service when the Job is created, and is immutable for the life of the job.|
|» jobMetadata|body|[JobMetadata](#schemajobmetadata)|false|This field is populated by the Dataflow service to support filtering jobs by the metadata values provided here. Populated for ListJobs and all GetJob views SUMMARY and higher.|
|» labels|body|object|false|User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.|
|» » **additionalProperties**|body|string|false|none|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.|
|» name|body|string|false|The user-specified Cloud Dataflow job name. Only one Job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a Job with the same name as an already-existing Job, the attempt returns the existing Job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?`|
|» pipelineDescription|body|[PipelineDescription](#schemapipelinedescription)|false|Preliminary field: The format of this data may change at any time. A description of the user pipeline and stages through which it is executed. Created by Cloud Dataflow service. Only retrieved with JOB_VIEW_DESCRIPTION or JOB_VIEW_ALL.|
|» projectId|body|string|false|The ID of the Cloud Platform project that the job belongs to.|
|» replaceJobId|body|string|false|If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job.|
|» replacedByJobId|body|string|false|If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job.|
|» requestedState|body|string|false|The job's requested state. `UpdateJob` may be used to switch between the `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING` states, by setting requested_state. `UpdateJob` may also be used to directly set a job's requested state to `JOB_STATE_CANCELLED` or `JOB_STATE_DONE`, irrevocably terminating the job if it has not already reached a terminal state.|
|» satisfiesPzs|body|boolean|false|Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.|
|» stageStates|body|[[ExecutionStageState](#schemaexecutionstagestate)]|false|This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.|
|» startTime|body|string(google-datetime)|false|The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service.|
|» steps|body|[[Step](#schemastep)]|false|Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL.|
|» stepsLocation|body|string|false|The Cloud Storage location where the steps are stored.|
|» tempFiles|body|[string]|false|A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}|
|» transformNameMapping|body|object|false|The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.|
|» » **additionalProperties**|body|string|false|none|
|» type|body|string|false|The type of Cloud Dataflow job.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» currentState|JOB_STATE_UNKNOWN|
|» currentState|JOB_STATE_STOPPED|
|» currentState|JOB_STATE_RUNNING|
|» currentState|JOB_STATE_DONE|
|» currentState|JOB_STATE_FAILED|
|» currentState|JOB_STATE_CANCELLED|
|» currentState|JOB_STATE_UPDATED|
|» currentState|JOB_STATE_DRAINING|
|» currentState|JOB_STATE_DRAINED|
|» currentState|JOB_STATE_PENDING|
|» currentState|JOB_STATE_CANCELLING|
|» currentState|JOB_STATE_QUEUED|
|» currentState|JOB_STATE_RESOURCE_CLEANING_UP|
|» requestedState|JOB_STATE_UNKNOWN|
|» requestedState|JOB_STATE_STOPPED|
|» requestedState|JOB_STATE_RUNNING|
|» requestedState|JOB_STATE_DONE|
|» requestedState|JOB_STATE_FAILED|
|» requestedState|JOB_STATE_CANCELLED|
|» requestedState|JOB_STATE_UPDATED|
|» requestedState|JOB_STATE_DRAINING|
|» requestedState|JOB_STATE_DRAINED|
|» requestedState|JOB_STATE_PENDING|
|» requestedState|JOB_STATE_CANCELLING|
|» requestedState|JOB_STATE_QUEUED|
|» requestedState|JOB_STATE_RESOURCE_CLEANING_UP|
|» type|JOB_TYPE_UNKNOWN|
|» type|JOB_TYPE_BATCH|
|» type|JOB_TYPE_STREAMING|

> Example responses

> 200 Response

```json
{
  "clientRequestId": "string",
  "createTime": "string",
  "createdFromSnapshotId": "string",
  "currentState": "JOB_STATE_UNKNOWN",
  "currentStateTime": "string",
  "environment": {
    "clusterManagerApiService": "string",
    "dataset": "string",
    "debugOptions": {
      "enableHotKeyLogging": true
    },
    "experiments": [
      "string"
    ],
    "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
    "internalExperiments": {
      "property1": null,
      "property2": null
    },
    "sdkPipelineOptions": {
      "property1": null,
      "property2": null
    },
    "serviceAccountEmail": "string",
    "serviceKmsKeyName": "string",
    "serviceOptions": [
      "string"
    ],
    "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
    "tempStoragePrefix": "string",
    "userAgent": {
      "property1": null,
      "property2": null
    },
    "version": {
      "property1": null,
      "property2": null
    },
    "workerPools": [
      {
        "autoscalingSettings": {
          "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
          "maxNumWorkers": 0
        },
        "dataDisks": [
          {
            "diskType": "string",
            "mountPoint": "string",
            "sizeGb": 0
          }
        ],
        "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
        "diskSizeGb": 0,
        "diskSourceImage": "string",
        "diskType": "string",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kind": "string",
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "network": "string",
        "numThreadsPerWorker": 0,
        "numWorkers": 0,
        "onHostMaintenance": "string",
        "packages": [
          {
            "location": "string",
            "name": "string"
          }
        ],
        "poolArgs": {
          "property1": null,
          "property2": null
        },
        "sdkHarnessContainerImages": [
          {
            "capabilities": [
              "string"
            ],
            "containerImage": "string",
            "environmentId": "string",
            "useSingleCorePerContainer": true
          }
        ],
        "subnetwork": "string",
        "taskrunnerSettings": {
          "alsologtostderr": true,
          "baseTaskDir": "string",
          "baseUrl": "string",
          "commandlinesFileName": "string",
          "continueOnException": true,
          "dataflowApiVersion": "string",
          "harnessCommand": "string",
          "languageHint": "string",
          "logDir": "string",
          "logToSerialconsole": true,
          "logUploadLocation": "string",
          "oauthScopes": [
            "string"
          ],
          "parallelWorkerSettings": {
            "baseUrl": "string",
            "reportingEnabled": true,
            "servicePath": "string",
            "shuffleServicePath": "string",
            "tempStoragePrefix": "string",
            "workerId": "string"
          },
          "streamingWorkerMainClass": "string",
          "taskGroup": "string",
          "taskUser": "string",
          "tempStoragePrefix": "string",
          "vmId": "string",
          "workflowFileName": "string"
        },
        "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
        "workerHarnessContainerImage": "string",
        "zone": "string"
      }
    ],
    "workerRegion": "string",
    "workerZone": "string"
  },
  "executionInfo": {
    "stages": {
      "property1": {
        "stepName": [
          "string"
        ]
      },
      "property2": {
        "stepName": [
          "string"
        ]
      }
    }
  },
  "id": "string",
  "jobMetadata": {
    "bigTableDetails": [
      {
        "instanceId": "string",
        "projectId": "string",
        "tableId": "string"
      }
    ],
    "bigqueryDetails": [
      {
        "dataset": "string",
        "projectId": "string",
        "query": "string",
        "table": "string"
      }
    ],
    "datastoreDetails": [
      {
        "namespace": "string",
        "projectId": "string"
      }
    ],
    "fileDetails": [
      {
        "filePattern": "string"
      }
    ],
    "pubsubDetails": [
      {
        "subscription": "string",
        "topic": "string"
      }
    ],
    "sdkVersion": {
      "sdkSupportStatus": "UNKNOWN",
      "version": "string",
      "versionDisplayName": "string"
    },
    "spannerDetails": [
      {
        "databaseId": "string",
        "instanceId": "string",
        "projectId": "string"
      }
    ],
    "userDisplayProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "pipelineDescription": {
    "displayData": [
      {
        "boolValue": true,
        "durationValue": "string",
        "floatValue": 0,
        "int64Value": "string",
        "javaClassValue": "string",
        "key": "string",
        "label": "string",
        "namespace": "string",
        "shortStrValue": "string",
        "strValue": "string",
        "timestampValue": "string",
        "url": "string"
      }
    ],
    "executionPipelineStage": [
      {
        "componentSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "userName": "string"
          }
        ],
        "componentTransform": [
          {
            "name": "string",
            "originalTransform": "string",
            "userName": "string"
          }
        ],
        "id": "string",
        "inputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "prerequisiteStage": [
          "string"
        ]
      }
    ],
    "originalPipelineTransform": [
      {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "id": "string",
        "inputCollectionName": [
          "string"
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputCollectionName": [
          "string"
        ]
      }
    ],
    "stepNamesHash": "string"
  },
  "projectId": "string",
  "replaceJobId": "string",
  "replacedByJobId": "string",
  "requestedState": "JOB_STATE_UNKNOWN",
  "satisfiesPzs": true,
  "stageStates": [
    {
      "currentStateTime": "string",
      "executionStageName": "string",
      "executionStageState": "JOB_STATE_UNKNOWN"
    }
  ],
  "startTime": "string",
  "steps": [
    {
      "kind": "string",
      "name": "string",
      "properties": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "stepsLocation": "string",
  "tempFiles": [
    "string"
  ],
  "transformNameMapping": {
    "property1": "string",
    "property2": "string"
  },
  "type": "JOB_TYPE_UNKNOWN"
}
```

<h3 id="dataflowprojectslocationsjobsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.jobs.debug.getConfig

<a id="opIddataflow.projects.locations.jobs.debug.getConfig"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/jobs/string/debug/getConfig \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "componentId": "string",
    "location": "string",
    "workerId": "string"
  }'
```

`POST /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getConfig`

Get encoded debug configuration for component. Not cacheable.

> Body parameter

```json
{
  "componentId": "string",
  "location": "string",
  "workerId": "string"
}
```

<h3 id="dataflowprojectslocationsjobsdebuggetconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project id.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.|
|jobId|path|string|true|The job id.|
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
|body|body|[GetDebugConfigRequest](#schemagetdebugconfigrequest)|false|none|
|» componentId|body|string|false|The internal component id for which debug configuration is requested.|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.|
|» workerId|body|string|false|The worker id, i.e., VM hostname.|

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
  "config": "string"
}
```

<h3 id="dataflowprojectslocationsjobsdebuggetconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetDebugConfigResponse](#schemagetdebugconfigresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.jobs.debug.sendCapture

<a id="opIddataflow.projects.locations.jobs.debug.sendCapture"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/jobs/string/debug/sendCapture \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "componentId": "string",
    "data": "string",
    "dataFormat": "DATA_FORMAT_UNSPECIFIED",
    "location": "string",
    "workerId": "string"
  }'
```

`POST /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/sendCapture`

Send encoded debug capture data for component.

> Body parameter

```json
{
  "componentId": "string",
  "data": "string",
  "dataFormat": "DATA_FORMAT_UNSPECIFIED",
  "location": "string",
  "workerId": "string"
}
```

<h3 id="dataflowprojectslocationsjobsdebugsendcapture-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project id.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.|
|jobId|path|string|true|The job id.|
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
|body|body|[SendDebugCaptureRequest](#schemasenddebugcapturerequest)|false|none|
|» componentId|body|string|false|The internal component id for which debug information is sent.|
|» data|body|string|false|The encoded debug information.|
|» dataFormat|body|string|false|Format for the data field above (id=5).|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.|
|» workerId|body|string|false|The worker id, i.e., VM hostname.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» dataFormat|DATA_FORMAT_UNSPECIFIED|
|» dataFormat|RAW|
|» dataFormat|JSON|
|» dataFormat|ZLIB|
|» dataFormat|BROTLI|

> Example responses

> 200 Response

```json
{}
```

<h3 id="dataflowprojectslocationsjobsdebugsendcapture-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SendDebugCaptureResponse](#schemasenddebugcaptureresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.jobs.getExecutionDetails

<a id="opIddataflow.projects.locations.jobs.getExecutionDetails"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/jobs/string/executionDetails \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/executionDetails`

Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.

<h3 id="dataflowprojectslocationsjobsgetexecutiondetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A project id.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.|
|jobId|path|string|true|The job to get execution details for.|
|pageSize|query|integer|false|If specified, determines the maximum number of stages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.|
|pageToken|query|string|false|If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.|
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
  "stages": [
    {
      "endTime": "string",
      "metrics": [
        {
          "cumulative": true,
          "distribution": null,
          "gauge": null,
          "internal": null,
          "kind": "string",
          "meanCount": null,
          "meanSum": null,
          "name": {
            "context": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "origin": "string"
          },
          "scalar": null,
          "set": null,
          "updateTime": "string"
        }
      ],
      "progress": {
        "currentProgress": 0,
        "dataPoints": [
          {
            "time": "string",
            "value": 0
          }
        ]
      },
      "stageId": "string",
      "startTime": "string",
      "state": "EXECUTION_STATE_UNKNOWN",
      "stragglerSummary": {
        "recentStragglers": [
          {
            "batchStraggler": {
              "causes": {
                "property1": {
                  "hotKey": {
                    "detectedHotKeys": {
                      "property1": {
                        "hotKeyAge": "string",
                        "key": "string",
                        "keyTruncated": true
                      },
                      "property2": {
                        "hotKeyAge": "string",
                        "key": "string",
                        "keyTruncated": true
                      }
                    }
                  }
                },
                "property2": {
                  "hotKey": {
                    "detectedHotKeys": {
                      "property1": {
                        "hotKeyAge": "string",
                        "key": "string",
                        "keyTruncated": true
                      },
                      "property2": {
                        "hotKeyAge": "string",
                        "key": "string",
                        "keyTruncated": true
                      }
                    }
                  }
                }
              },
              "startTime": "string"
            },
            "streamingStraggler": {
              "dataWatermarkLag": "string",
              "endTime": "string",
              "startTime": "string",
              "systemWatermarkLag": "string",
              "workerName": "string"
            }
          }
        ],
        "stragglerCauseCount": {
          "property1": "string",
          "property2": "string"
        },
        "totalStragglerCount": "string"
      }
    }
  ]
}
```

<h3 id="dataflowprojectslocationsjobsgetexecutiondetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[JobExecutionDetails](#schemajobexecutiondetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.jobs.messages.list

<a id="opIddataflow.projects.locations.jobs.messages.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/jobs/string/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/messages`

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

<h3 id="dataflowprojectslocationsjobsmessageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A project id.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.|
|jobId|path|string|true|The job to get messages about.|
|endTime|query|string|false|Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).|
|minimumImportance|query|string|false|Filter to only get messages with importance >= level|
|pageSize|query|integer|false|If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.|
|pageToken|query|string|false|If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.|
|startTime|query|string|false|If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).|
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
|minimumImportance|JOB_MESSAGE_IMPORTANCE_UNKNOWN|
|minimumImportance|JOB_MESSAGE_DEBUG|
|minimumImportance|JOB_MESSAGE_DETAILED|
|minimumImportance|JOB_MESSAGE_BASIC|
|minimumImportance|JOB_MESSAGE_WARNING|
|minimumImportance|JOB_MESSAGE_ERROR|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "autoscalingEvents": [
    {
      "currentNumWorkers": "string",
      "description": {
        "messageKey": "string",
        "messageText": "string",
        "parameters": [
          {
            "key": "string",
            "value": null
          }
        ]
      },
      "eventType": "TYPE_UNKNOWN",
      "targetNumWorkers": "string",
      "time": "string",
      "workerPool": "string"
    }
  ],
  "jobMessages": [
    {
      "id": "string",
      "messageImportance": "JOB_MESSAGE_IMPORTANCE_UNKNOWN",
      "messageText": "string",
      "time": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="dataflowprojectslocationsjobsmessageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListJobMessagesResponse](#schemalistjobmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.jobs.getMetrics

<a id="opIddataflow.projects.locations.jobs.getMetrics"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/jobs/string/metrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/metrics`

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

<h3 id="dataflowprojectslocationsjobsgetmetrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A project id.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.|
|jobId|path|string|true|The job to get metrics for.|
|startTime|query|string|false|Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.|
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
  "metricTime": "string",
  "metrics": [
    {
      "cumulative": true,
      "distribution": null,
      "gauge": null,
      "internal": null,
      "kind": "string",
      "meanCount": null,
      "meanSum": null,
      "name": {
        "context": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "origin": "string"
      },
      "scalar": null,
      "set": null,
      "updateTime": "string"
    }
  ]
}
```

<h3 id="dataflowprojectslocationsjobsgetmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[JobMetrics](#schemajobmetrics)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.jobs.snapshots.list

<a id="opIddataflow.projects.locations.jobs.snapshots.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/jobs/string/snapshots \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/snapshots`

Lists snapshots.

<h3 id="dataflowprojectslocationsjobssnapshotslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project ID to list snapshots for.|
|location|path|string|true|The location to list snapshots in.|
|jobId|path|string|true|If specified, list snapshots created from this job.|
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
  "snapshots": [
    {
      "creationTime": "string",
      "description": "string",
      "diskSizeBytes": "string",
      "id": "string",
      "projectId": "string",
      "pubsubMetadata": [
        {
          "expireTime": "string",
          "snapshotName": "string",
          "topicName": "string"
        }
      ],
      "region": "string",
      "sourceJobId": "string",
      "state": "UNKNOWN_SNAPSHOT_STATE",
      "ttl": "string"
    }
  ]
}
```

<h3 id="dataflowprojectslocationsjobssnapshotslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSnapshotsResponse](#schemalistsnapshotsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.jobs.stages.getExecutionDetails

<a id="opIddataflow.projects.locations.jobs.stages.getExecutionDetails"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/jobs/string/stages/string/executionDetails \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/stages/{stageId}/executionDetails`

Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.

<h3 id="dataflowprojectslocationsjobsstagesgetexecutiondetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|A project id.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.|
|jobId|path|string|true|The job to get execution details for.|
|stageId|path|string|true|The stage for which to fetch information.|
|endTime|query|string|false|Upper time bound of work items to include, by start time.|
|pageSize|query|integer|false|If specified, determines the maximum number of work items to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.|
|pageToken|query|string|false|If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.|
|startTime|query|string|false|Lower time bound of work items to include, by start time.|
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
  "workers": [
    {
      "workItems": [
        {
          "attemptId": "string",
          "endTime": "string",
          "metrics": [
            {
              "cumulative": true,
              "distribution": null,
              "gauge": null,
              "internal": null,
              "kind": "string",
              "meanCount": null,
              "meanSum": null,
              "name": {
                "context": {
                  "property1": "string",
                  "property2": "string"
                },
                "name": "string",
                "origin": "string"
              },
              "scalar": null,
              "set": null,
              "updateTime": "string"
            }
          ],
          "progress": {
            "currentProgress": 0,
            "dataPoints": [
              {
                "time": "string",
                "value": 0
              }
            ]
          },
          "startTime": "string",
          "state": "EXECUTION_STATE_UNKNOWN",
          "stragglerInfo": {
            "causes": {
              "property1": {
                "hotKey": {
                  "detectedHotKeys": {
                    "property1": {
                      "hotKeyAge": "string",
                      "key": "string",
                      "keyTruncated": true
                    },
                    "property2": {
                      "hotKeyAge": "string",
                      "key": "string",
                      "keyTruncated": true
                    }
                  }
                }
              },
              "property2": {
                "hotKey": {
                  "detectedHotKeys": {
                    "property1": {
                      "hotKeyAge": "string",
                      "key": "string",
                      "keyTruncated": true
                    },
                    "property2": {
                      "hotKeyAge": "string",
                      "key": "string",
                      "keyTruncated": true
                    }
                  }
                }
              }
            },
            "startTime": "string"
          },
          "taskId": "string"
        }
      ],
      "workerName": "string"
    }
  ]
}
```

<h3 id="dataflowprojectslocationsjobsstagesgetexecutiondetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[StageExecutionDetails](#schemastageexecutiondetails)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.jobs.workItems.lease

<a id="opIddataflow.projects.locations.jobs.workItems.lease"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/jobs/string/workItems:lease \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "currentWorkerTime": "string",
    "location": "string",
    "requestedLeaseDuration": "string",
    "unifiedWorkerRequest": {
      "property1": null,
      "property2": null
    },
    "workItemTypes": [
      "string"
    ],
    "workerCapabilities": [
      "string"
    ],
    "workerId": "string"
  }'
```

`POST /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:lease`

Leases a dataflow WorkItem to run.

> Body parameter

```json
{
  "currentWorkerTime": "string",
  "location": "string",
  "requestedLeaseDuration": "string",
  "unifiedWorkerRequest": {
    "property1": null,
    "property2": null
  },
  "workItemTypes": [
    "string"
  ],
  "workerCapabilities": [
    "string"
  ],
  "workerId": "string"
}
```

<h3 id="dataflowprojectslocationsjobsworkitemslease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Identifies the project this worker belongs to.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.|
|jobId|path|string|true|Identifies the workflow job this worker belongs to.|
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
|body|body|[LeaseWorkItemRequest](#schemaleaseworkitemrequest)|false|none|
|» currentWorkerTime|body|string(google-datetime)|false|The current timestamp at the worker.|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.|
|» requestedLeaseDuration|body|string(google-duration)|false|The initial lease period.|
|» unifiedWorkerRequest|body|object|false|Untranslated bag-of-bytes WorkRequest from UnifiedWorker.|
|» » **additionalProperties**|body|object|false|Properties of the object. Contains field @type with type URL.|
|» workItemTypes|body|[string]|false|Filter for WorkItem type.|
|» workerCapabilities|body|[string]|false|Worker capabilities. WorkItems might be limited to workers with specific capabilities.|
|» workerId|body|string|false|Identifies the worker leasing work -- typically the ID of the virtual machine running the worker.|

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
  "unifiedWorkerResponse": {
    "property1": null,
    "property2": null
  },
  "workItems": [
    {
      "configuration": "string",
      "id": "string",
      "initialReportIndex": "string",
      "jobId": "string",
      "leaseExpireTime": "string",
      "mapTask": {
        "counterPrefix": "string",
        "instructions": [
          {
            "flatten": {
              "inputs": [
                {
                  "outputNum": 0,
                  "producerInstructionIndex": 0
                }
              ]
            },
            "name": "string",
            "originalName": "string",
            "outputs": [
              {
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "name": "string",
                "onlyCountKeyBytes": true,
                "onlyCountValueBytes": true,
                "originalName": "string",
                "systemName": "string"
              }
            ],
            "parDo": {
              "input": {
                "outputNum": 0,
                "producerInstructionIndex": 0
              },
              "multiOutputInfos": [
                {
                  "tag": "string"
                }
              ],
              "numOutputs": 0,
              "sideInputs": [
                {
                  "kind": {
                    "property1": null,
                    "property2": null
                  },
                  "sources": [
                    {
                      "baseSpecs": [
                        {
                          "property1": null,
                          "property2": null
                        }
                      ],
                      "codec": {
                        "property1": null,
                        "property2": null
                      },
                      "doesNotNeedSplitting": true,
                      "metadata": {
                        "estimatedSizeBytes": "string",
                        "infinite": true,
                        "producesSortedKeys": true
                      },
                      "spec": {
                        "property1": null,
                        "property2": null
                      }
                    }
                  ],
                  "tag": "string"
                }
              ],
              "userFn": {
                "property1": null,
                "property2": null
              }
            },
            "partialGroupByKey": {
              "input": {
                "outputNum": 0,
                "producerInstructionIndex": 0
              },
              "inputElementCodec": {
                "property1": null,
                "property2": null
              },
              "originalCombineValuesInputStoreName": "string",
              "originalCombineValuesStepName": "string",
              "sideInputs": [
                {
                  "kind": {
                    "property1": null,
                    "property2": null
                  },
                  "sources": [
                    {
                      "baseSpecs": [
                        {
                          "property1": null,
                          "property2": null
                        }
                      ],
                      "codec": {
                        "property1": null,
                        "property2": null
                      },
                      "doesNotNeedSplitting": true,
                      "metadata": {
                        "estimatedSizeBytes": "string",
                        "infinite": true,
                        "producesSortedKeys": true
                      },
                      "spec": {
                        "property1": null,
                        "property2": null
                      }
                    }
                  ],
                  "tag": "string"
                }
              ],
              "valueCombiningFn": {
                "property1": null,
                "property2": null
              }
            },
            "read": {
              "source": {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            },
            "systemName": "string",
            "write": {
              "input": {
                "outputNum": 0,
                "producerInstructionIndex": 0
              },
              "sink": {
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            }
          }
        ],
        "stageName": "string",
        "systemName": "string"
      },
      "packages": [
        {
          "location": "string",
          "name": "string"
        }
      ],
      "projectId": "string",
      "reportStatusInterval": "string",
      "seqMapTask": {
        "inputs": [
          {
            "kind": {
              "property1": null,
              "property2": null
            },
            "sources": [
              {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            ],
            "tag": "string"
          }
        ],
        "name": "string",
        "outputInfos": [
          {
            "sink": {
              "codec": {
                "property1": null,
                "property2": null
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            },
            "tag": "string"
          }
        ],
        "stageName": "string",
        "systemName": "string",
        "userFn": {
          "property1": null,
          "property2": null
        }
      },
      "shellTask": {
        "command": "string",
        "exitCode": 0
      },
      "sourceOperationTask": {
        "getMetadata": {
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "name": "string",
        "originalName": "string",
        "split": {
          "options": {
            "desiredBundleSizeBytes": "string",
            "desiredShardSizeBytes": "string"
          },
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "stageName": "string",
        "systemName": "string"
      },
      "streamingComputationTask": {
        "computationRanges": [
          {
            "computationId": "string",
            "rangeAssignments": [
              {
                "dataDisk": "string",
                "end": "string",
                "start": "string"
              }
            ]
          }
        ],
        "dataDisks": [
          {
            "dataDisk": "string"
          }
        ],
        "taskType": "STREAMING_COMPUTATION_TASK_UNKNOWN"
      },
      "streamingConfigTask": {
        "commitStreamChunkSizeBytes": "string",
        "getDataStreamChunkSizeBytes": "string",
        "maxWorkItemCommitBytes": "string",
        "streamingComputationConfigs": [
          {
            "computationId": "string",
            "instructions": [
              {
                "flatten": {
                  "inputs": [
                    {
                      "outputNum": 0,
                      "producerInstructionIndex": 0
                    }
                  ]
                },
                "name": "string",
                "originalName": "string",
                "outputs": [
                  {
                    "codec": {
                      "property1": null,
                      "property2": null
                    },
                    "name": "string",
                    "onlyCountKeyBytes": true,
                    "onlyCountValueBytes": true,
                    "originalName": "string",
                    "systemName": "string"
                  }
                ],
                "parDo": {
                  "input": {
                    "outputNum": 0,
                    "producerInstructionIndex": 0
                  },
                  "multiOutputInfos": [
                    {
                      "tag": "string"
                    }
                  ],
                  "numOutputs": 0,
                  "sideInputs": [
                    {
                      "kind": {
                        "property1": null,
                        "property2": null
                      },
                      "sources": [
                        {
                          "baseSpecs": [
                            {
                              "property1": null,
                              "property2": null
                            }
                          ],
                          "codec": {
                            "property1": null,
                            "property2": null
                          },
                          "doesNotNeedSplitting": true,
                          "metadata": {
                            "estimatedSizeBytes": "string",
                            "infinite": true,
                            "producesSortedKeys": true
                          },
                          "spec": {
                            "property1": null,
                            "property2": null
                          }
                        }
                      ],
                      "tag": "string"
                    }
                  ],
                  "userFn": {
                    "property1": null,
                    "property2": null
                  }
                },
                "partialGroupByKey": {
                  "input": {
                    "outputNum": 0,
                    "producerInstructionIndex": 0
                  },
                  "inputElementCodec": {
                    "property1": null,
                    "property2": null
                  },
                  "originalCombineValuesInputStoreName": "string",
                  "originalCombineValuesStepName": "string",
                  "sideInputs": [
                    {
                      "kind": {
                        "property1": null,
                        "property2": null
                      },
                      "sources": [
                        {
                          "baseSpecs": [
                            {
                              "property1": null,
                              "property2": null
                            }
                          ],
                          "codec": {
                            "property1": null,
                            "property2": null
                          },
                          "doesNotNeedSplitting": true,
                          "metadata": {
                            "estimatedSizeBytes": "string",
                            "infinite": true,
                            "producesSortedKeys": true
                          },
                          "spec": {
                            "property1": null,
                            "property2": null
                          }
                        }
                      ],
                      "tag": "string"
                    }
                  ],
                  "valueCombiningFn": {
                    "property1": null,
                    "property2": null
                  }
                },
                "read": {
                  "source": {
                    "baseSpecs": [
                      {
                        "property1": null,
                        "property2": null
                      }
                    ],
                    "codec": {
                      "property1": null,
                      "property2": null
                    },
                    "doesNotNeedSplitting": true,
                    "metadata": {
                      "estimatedSizeBytes": "string",
                      "infinite": true,
                      "producesSortedKeys": true
                    },
                    "spec": {
                      "property1": null,
                      "property2": null
                    }
                  }
                },
                "systemName": "string",
                "write": {
                  "input": {
                    "outputNum": 0,
                    "producerInstructionIndex": 0
                  },
                  "sink": {
                    "codec": {
                      "property1": null,
                      "property2": null
                    },
                    "spec": {
                      "property1": null,
                      "property2": null
                    }
                  }
                }
              }
            ],
            "stageName": "string",
            "systemName": "string",
            "transformUserNameToStateFamily": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "userStepToStateFamilyNameMap": {
          "property1": "string",
          "property2": "string"
        },
        "windmillServiceEndpoint": "string",
        "windmillServicePort": "string"
      },
      "streamingSetupTask": {
        "drain": true,
        "receiveWorkPort": 0,
        "snapshotConfig": {
          "importStateEndpoint": "string",
          "snapshotId": "string"
        },
        "streamingComputationTopology": {
          "computations": [
            {
              "computationId": "string",
              "inputs": [
                {
                  "customSourceLocation": {
                    "stateful": true
                  },
                  "pubsubLocation": {
                    "dropLateData": true,
                    "idLabel": "string",
                    "subscription": "string",
                    "timestampLabel": "string",
                    "topic": "string",
                    "trackingSubscription": "string",
                    "withAttributes": true
                  },
                  "sideInputLocation": {
                    "stateFamily": "string",
                    "tag": "string"
                  },
                  "streamingStageLocation": {
                    "streamId": "string"
                  }
                }
              ],
              "keyRanges": [
                {
                  "dataDisk": "string",
                  "deliveryEndpoint": "string",
                  "deprecatedPersistentDirectory": "string",
                  "end": "string",
                  "start": "string"
                }
              ],
              "outputs": [
                {
                  "customSourceLocation": {
                    "stateful": true
                  },
                  "pubsubLocation": {
                    "dropLateData": true,
                    "idLabel": "string",
                    "subscription": "string",
                    "timestampLabel": "string",
                    "topic": "string",
                    "trackingSubscription": "string",
                    "withAttributes": true
                  },
                  "sideInputLocation": {
                    "stateFamily": "string",
                    "tag": "string"
                  },
                  "streamingStageLocation": {
                    "streamId": "string"
                  }
                }
              ],
              "stateFamilies": [
                {
                  "isRead": true,
                  "stateFamily": "string"
                }
              ],
              "systemStageName": "string"
            }
          ],
          "dataDiskAssignments": [
            {
              "dataDisks": [
                "string"
              ],
              "vmInstance": "string"
            }
          ],
          "forwardingKeyBits": 0,
          "persistentStateVersion": 0,
          "userStageToComputationNameMap": {
            "property1": "string",
            "property2": "string"
          }
        },
        "workerHarnessPort": 0
      }
    }
  ]
}
```

<h3 id="dataflowprojectslocationsjobsworkitemslease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LeaseWorkItemResponse](#schemaleaseworkitemresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.jobs.workItems.reportStatus

<a id="opIddataflow.projects.locations.jobs.workItems.reportStatus"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/jobs/string/workItems:reportStatus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "currentWorkerTime": "string",
    "location": "string",
    "unifiedWorkerRequest": {
      "property1": null,
      "property2": null
    },
    "workItemStatuses": [
      {
        "completed": true,
        "counterUpdates": [
          {
            "boolean": true,
            "cumulative": true,
            "distribution": {
              "count": {
                "highBits": 0,
                "lowBits": 0
              },
              "histogram": {
                "bucketCounts": [
                  "string"
                ],
                "firstBucketOffset": 0
              },
              "max": {
                "highBits": 0,
                "lowBits": 0
              },
              "min": {
                "highBits": 0,
                "lowBits": 0
              },
              "sum": {
                "highBits": 0,
                "lowBits": 0
              },
              "sumOfSquares": 0
            },
            "floatingPoint": 0,
            "floatingPointList": {
              "elements": [
                0
              ]
            },
            "floatingPointMean": {
              "count": {
                "highBits": 0,
                "lowBits": 0
              },
              "sum": 0
            },
            "integer": {
              "highBits": 0,
              "lowBits": 0
            },
            "integerGauge": {
              "timestamp": "string",
              "value": {
                "highBits": 0,
                "lowBits": 0
              }
            },
            "integerList": {
              "elements": [
                {
                  "highBits": 0,
                  "lowBits": 0
                }
              ]
            },
            "integerMean": {
              "count": {
                "highBits": 0,
                "lowBits": 0
              },
              "sum": {
                "highBits": 0,
                "lowBits": 0
              }
            },
            "internal": null,
            "nameAndKind": {
              "kind": "INVALID",
              "name": "string"
            },
            "shortId": "string",
            "stringList": {
              "elements": [
                "string"
              ]
            },
            "structuredNameAndMetadata": {
              "metadata": {
                "description": "string",
                "kind": "INVALID",
                "otherUnits": "string",
                "standardUnits": "BYTES"
              },
              "name": {
                "componentStepName": "string",
                "executionStepName": "string",
                "inputIndex": 0,
                "name": "string",
                "origin": "SYSTEM",
                "originNamespace": "string",
                "originalRequestingStepName": "string",
                "originalStepName": "string",
                "portion": "ALL",
                "workerId": "string"
              }
            }
          }
        ],
        "dynamicSourceSplit": {
          "primary": {
            "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
            "source": {
              "baseSpecs": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "codec": {
                "property1": null,
                "property2": null
              },
              "doesNotNeedSplitting": true,
              "metadata": {
                "estimatedSizeBytes": "string",
                "infinite": true,
                "producesSortedKeys": true
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            }
          },
          "residual": {
            "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
            "source": {
              "baseSpecs": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "codec": {
                "property1": null,
                "property2": null
              },
              "doesNotNeedSplitting": true,
              "metadata": {
                "estimatedSizeBytes": "string",
                "infinite": true,
                "producesSortedKeys": true
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            }
          }
        },
        "errors": [
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
        ],
        "metricUpdates": [
          {
            "cumulative": true,
            "distribution": null,
            "gauge": null,
            "internal": null,
            "kind": "string",
            "meanCount": null,
            "meanSum": null,
            "name": {
              "context": {
                "property1": "string",
                "property2": "string"
              },
              "name": "string",
              "origin": "string"
            },
            "scalar": null,
            "set": null,
            "updateTime": "string"
          }
        ],
        "progress": {
          "percentComplete": 0,
          "position": {
            "byteOffset": "string",
            "concatPosition": {},
            "end": true,
            "key": "string",
            "recordIndex": "string",
            "shufflePosition": "string"
          },
          "remainingTime": "string"
        },
        "reportIndex": "string",
        "reportedProgress": {
          "consumedParallelism": {
            "isInfinite": true,
            "value": 0
          },
          "fractionConsumed": 0,
          "position": {
            "byteOffset": "string",
            "concatPosition": {},
            "end": true,
            "key": "string",
            "recordIndex": "string",
            "shufflePosition": "string"
          },
          "remainingParallelism": {
            "isInfinite": true,
            "value": 0
          }
        },
        "requestedLeaseDuration": "string",
        "sourceFork": {
          "primary": {
            "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
            "source": {
              "baseSpecs": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "codec": {
                "property1": null,
                "property2": null
              },
              "doesNotNeedSplitting": true,
              "metadata": {
                "estimatedSizeBytes": "string",
                "infinite": true,
                "producesSortedKeys": true
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            }
          },
          "primarySource": {
            "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
            "source": {
              "baseSpecs": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "codec": {
                "property1": null,
                "property2": null
              },
              "doesNotNeedSplitting": true,
              "metadata": {
                "estimatedSizeBytes": "string",
                "infinite": true,
                "producesSortedKeys": true
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            }
          },
          "residual": {
            "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
            "source": {
              "baseSpecs": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "codec": {
                "property1": null,
                "property2": null
              },
              "doesNotNeedSplitting": true,
              "metadata": {
                "estimatedSizeBytes": "string",
                "infinite": true,
                "producesSortedKeys": true
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            }
          },
          "residualSource": {
            "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
            "source": {
              "baseSpecs": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "codec": {
                "property1": null,
                "property2": null
              },
              "doesNotNeedSplitting": true,
              "metadata": {
                "estimatedSizeBytes": "string",
                "infinite": true,
                "producesSortedKeys": true
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            }
          }
        },
        "sourceOperationResponse": {
          "getMetadata": {
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            }
          },
          "split": {
            "bundles": [
              {
                "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
                "source": {
                  "baseSpecs": [
                    {
                      "property1": null,
                      "property2": null
                    }
                  ],
                  "codec": {
                    "property1": null,
                    "property2": null
                  },
                  "doesNotNeedSplitting": true,
                  "metadata": {
                    "estimatedSizeBytes": "string",
                    "infinite": true,
                    "producesSortedKeys": true
                  },
                  "spec": {
                    "property1": null,
                    "property2": null
                  }
                }
              }
            ],
            "outcome": "SOURCE_SPLIT_OUTCOME_UNKNOWN",
            "shards": [
              {
                "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
                "source": {
                  "baseSpecs": [
                    {
                      "property1": null,
                      "property2": null
                    }
                  ],
                  "codec": {
                    "property1": null,
                    "property2": null
                  },
                  "doesNotNeedSplitting": true,
                  "metadata": {
                    "estimatedSizeBytes": "string",
                    "infinite": true,
                    "producesSortedKeys": true
                  },
                  "spec": {
                    "property1": null,
                    "property2": null
                  }
                }
              }
            ]
          }
        },
        "stopPosition": {
          "byteOffset": "string",
          "concatPosition": {},
          "end": true,
          "key": "string",
          "recordIndex": "string",
          "shufflePosition": "string"
        },
        "totalThrottlerWaitTimeSeconds": 0,
        "workItemId": "string"
      }
    ],
    "workerId": "string"
  }'
```

`POST /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:reportStatus`

Reports the status of dataflow WorkItems leased by a worker.

> Body parameter

```json
{
  "currentWorkerTime": "string",
  "location": "string",
  "unifiedWorkerRequest": {
    "property1": null,
    "property2": null
  },
  "workItemStatuses": [
    {
      "completed": true,
      "counterUpdates": [
        {
          "boolean": true,
          "cumulative": true,
          "distribution": {
            "count": {
              "highBits": 0,
              "lowBits": 0
            },
            "histogram": {
              "bucketCounts": [
                "string"
              ],
              "firstBucketOffset": 0
            },
            "max": {
              "highBits": 0,
              "lowBits": 0
            },
            "min": {
              "highBits": 0,
              "lowBits": 0
            },
            "sum": {
              "highBits": 0,
              "lowBits": 0
            },
            "sumOfSquares": 0
          },
          "floatingPoint": 0,
          "floatingPointList": {
            "elements": [
              0
            ]
          },
          "floatingPointMean": {
            "count": {
              "highBits": 0,
              "lowBits": 0
            },
            "sum": 0
          },
          "integer": {
            "highBits": 0,
            "lowBits": 0
          },
          "integerGauge": {
            "timestamp": "string",
            "value": {
              "highBits": 0,
              "lowBits": 0
            }
          },
          "integerList": {
            "elements": [
              {
                "highBits": 0,
                "lowBits": 0
              }
            ]
          },
          "integerMean": {
            "count": {
              "highBits": 0,
              "lowBits": 0
            },
            "sum": {
              "highBits": 0,
              "lowBits": 0
            }
          },
          "internal": null,
          "nameAndKind": {
            "kind": "INVALID",
            "name": "string"
          },
          "shortId": "string",
          "stringList": {
            "elements": [
              "string"
            ]
          },
          "structuredNameAndMetadata": {
            "metadata": {
              "description": "string",
              "kind": "INVALID",
              "otherUnits": "string",
              "standardUnits": "BYTES"
            },
            "name": {
              "componentStepName": "string",
              "executionStepName": "string",
              "inputIndex": 0,
              "name": "string",
              "origin": "SYSTEM",
              "originNamespace": "string",
              "originalRequestingStepName": "string",
              "originalStepName": "string",
              "portion": "ALL",
              "workerId": "string"
            }
          }
        }
      ],
      "dynamicSourceSplit": {
        "primary": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "residual": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        }
      },
      "errors": [
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
      ],
      "metricUpdates": [
        {
          "cumulative": true,
          "distribution": null,
          "gauge": null,
          "internal": null,
          "kind": "string",
          "meanCount": null,
          "meanSum": null,
          "name": {
            "context": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "origin": "string"
          },
          "scalar": null,
          "set": null,
          "updateTime": "string"
        }
      ],
      "progress": {
        "percentComplete": 0,
        "position": {
          "byteOffset": "string",
          "concatPosition": {},
          "end": true,
          "key": "string",
          "recordIndex": "string",
          "shufflePosition": "string"
        },
        "remainingTime": "string"
      },
      "reportIndex": "string",
      "reportedProgress": {
        "consumedParallelism": {
          "isInfinite": true,
          "value": 0
        },
        "fractionConsumed": 0,
        "position": {
          "byteOffset": "string",
          "concatPosition": {},
          "end": true,
          "key": "string",
          "recordIndex": "string",
          "shufflePosition": "string"
        },
        "remainingParallelism": {
          "isInfinite": true,
          "value": 0
        }
      },
      "requestedLeaseDuration": "string",
      "sourceFork": {
        "primary": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "primarySource": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "residual": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "residualSource": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        }
      },
      "sourceOperationResponse": {
        "getMetadata": {
          "metadata": {
            "estimatedSizeBytes": "string",
            "infinite": true,
            "producesSortedKeys": true
          }
        },
        "split": {
          "bundles": [
            {
              "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
              "source": {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            }
          ],
          "outcome": "SOURCE_SPLIT_OUTCOME_UNKNOWN",
          "shards": [
            {
              "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
              "source": {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            }
          ]
        }
      },
      "stopPosition": {
        "byteOffset": "string",
        "concatPosition": {},
        "end": true,
        "key": "string",
        "recordIndex": "string",
        "shufflePosition": "string"
      },
      "totalThrottlerWaitTimeSeconds": 0,
      "workItemId": "string"
    }
  ],
  "workerId": "string"
}
```

<h3 id="dataflowprojectslocationsjobsworkitemsreportstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project which owns the WorkItem's job.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.|
|jobId|path|string|true|The job which the WorkItem is part of.|
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
|body|body|[ReportWorkItemStatusRequest](#schemareportworkitemstatusrequest)|false|none|
|» currentWorkerTime|body|string(google-datetime)|false|The current timestamp at the worker.|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.|
|» unifiedWorkerRequest|body|object|false|Untranslated bag-of-bytes WorkProgressUpdateRequest from UnifiedWorker.|
|» » **additionalProperties**|body|object|false|Properties of the object. Contains field @type with type URL.|
|» workItemStatuses|body|[[WorkItemStatus](#schemaworkitemstatus)]|false|The order is unimportant, except that the order of the WorkItemServiceState messages in the ReportWorkItemStatusResponse corresponds to the order of WorkItemStatus messages here.|
|» workerId|body|string|false|The ID of the worker reporting the WorkItem status. If this does not match the ID of the worker which the Dataflow service believes currently has the lease on the WorkItem, the report will be dropped (with an error response).|

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
  "unifiedWorkerResponse": {
    "property1": null,
    "property2": null
  },
  "workItemServiceStates": [
    {
      "completeWorkStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "harnessData": {
        "property1": null,
        "property2": null
      },
      "hotKeyDetection": {
        "hotKeyAge": "string",
        "systemName": "string",
        "userStepName": "string"
      },
      "leaseExpireTime": "string",
      "metricShortId": [
        {
          "metricIndex": 0,
          "shortId": "string"
        }
      ],
      "nextReportIndex": "string",
      "reportStatusInterval": "string",
      "splitRequest": {
        "fractionConsumed": 0,
        "fractionOfRemainder": 0,
        "position": {
          "byteOffset": "string",
          "concatPosition": {},
          "end": true,
          "key": "string",
          "recordIndex": "string",
          "shufflePosition": "string"
        }
      },
      "suggestedStopPoint": {
        "percentComplete": 0,
        "position": {
          "byteOffset": "string",
          "concatPosition": {},
          "end": true,
          "key": "string",
          "recordIndex": "string",
          "shufflePosition": "string"
        },
        "remainingTime": "string"
      },
      "suggestedStopPosition": {
        "byteOffset": "string",
        "concatPosition": {},
        "end": true,
        "key": "string",
        "recordIndex": "string",
        "shufflePosition": "string"
      }
    }
  ]
}
```

<h3 id="dataflowprojectslocationsjobsworkitemsreportstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ReportWorkItemStatusResponse](#schemareportworkitemstatusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.jobs.snapshot

<a id="opIddataflow.projects.locations.jobs.snapshot"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/jobs/string:snapshot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "location": "string",
    "snapshotSources": true,
    "ttl": "string"
  }'
```

`POST /v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}:snapshot`

Snapshot the state of a streaming job.

> Body parameter

```json
{
  "description": "string",
  "location": "string",
  "snapshotSources": true,
  "ttl": "string"
}
```

<h3 id="dataflowprojectslocationsjobssnapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project which owns the job to be snapshotted.|
|location|path|string|true|The location that contains this job.|
|jobId|path|string|true|The job to be snapshotted.|
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
|body|body|[SnapshotJobRequest](#schemasnapshotjobrequest)|false|none|
|» description|body|string|false|User specified description of the snapshot. Maybe empty.|
|» location|body|string|false|The location that contains this job.|
|» snapshotSources|body|boolean|false|If true, perform snapshots for sources which support this.|
|» ttl|body|string(google-duration)|false|TTL for the snapshot.|

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
  "creationTime": "string",
  "description": "string",
  "diskSizeBytes": "string",
  "id": "string",
  "projectId": "string",
  "pubsubMetadata": [
    {
      "expireTime": "string",
      "snapshotName": "string",
      "topicName": "string"
    }
  ],
  "region": "string",
  "sourceJobId": "string",
  "state": "UNKNOWN_SNAPSHOT_STATE",
  "ttl": "string"
}
```

<h3 id="dataflowprojectslocationsjobssnapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Snapshot](#schemasnapshot)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.snapshots.list

<a id="opIddataflow.projects.locations.snapshots.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/snapshots \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/locations/{location}/snapshots`

Lists snapshots.

<h3 id="dataflowprojectslocationssnapshotslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project ID to list snapshots for.|
|location|path|string|true|The location to list snapshots in.|
|jobId|query|string|false|If specified, list snapshots created from this job.|
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
  "snapshots": [
    {
      "creationTime": "string",
      "description": "string",
      "diskSizeBytes": "string",
      "id": "string",
      "projectId": "string",
      "pubsubMetadata": [
        {
          "expireTime": "string",
          "snapshotName": "string",
          "topicName": "string"
        }
      ],
      "region": "string",
      "sourceJobId": "string",
      "state": "UNKNOWN_SNAPSHOT_STATE",
      "ttl": "string"
    }
  ]
}
```

<h3 id="dataflowprojectslocationssnapshotslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSnapshotsResponse](#schemalistsnapshotsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.snapshots.get

<a id="opIddataflow.projects.locations.snapshots.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/snapshots/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}`

Gets information about a snapshot.

<h3 id="dataflowprojectslocationssnapshotsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the Cloud Platform project that the snapshot belongs to.|
|location|path|string|true|The location that contains this snapshot.|
|snapshotId|path|string|true|The ID of the snapshot.|
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
  "creationTime": "string",
  "description": "string",
  "diskSizeBytes": "string",
  "id": "string",
  "projectId": "string",
  "pubsubMetadata": [
    {
      "expireTime": "string",
      "snapshotName": "string",
      "topicName": "string"
    }
  ],
  "region": "string",
  "sourceJobId": "string",
  "state": "UNKNOWN_SNAPSHOT_STATE",
  "ttl": "string"
}
```

<h3 id="dataflowprojectslocationssnapshotsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Snapshot](#schemasnapshot)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.snapshots.delete

<a id="opIddataflow.projects.locations.snapshots.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/snapshots/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}`

Deletes a snapshot.

<h3 id="dataflowprojectslocationssnapshotsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the Cloud Platform project that the snapshot belongs to.|
|location|path|string|true|The location that contains this snapshot.|
|snapshotId|path|string|true|The ID of the snapshot.|
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

<h3 id="dataflowprojectslocationssnapshotsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeleteSnapshotResponse](#schemadeletesnapshotresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.templates.create

<a id="opIddataflow.projects.locations.templates.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
    "gcsPath": "string",
    "jobName": "string",
    "location": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1b3/projects/{projectId}/locations/{location}/templates`

Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.

> Body parameter

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
  "gcsPath": "string",
  "jobName": "string",
  "location": "string",
  "parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="dataflowprojectslocationstemplatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Cloud Platform project that the job belongs to.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.|
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
|body|body|[CreateJobFromTemplateRequest](#schemacreatejobfromtemplaterequest)|false|none|
|» environment|body|[RuntimeEnvironment](#schemaruntimeenvironment)|false|The runtime environment for the job.|
|» gcsPath|body|string|false|Required. A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with `gs://`.|
|» jobName|body|string|false|Required. The job name to use for the created job.|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.|
|» parameters|body|object|false|The runtime parameters to pass to the job.|
|» » **additionalProperties**|body|string|false|none|

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
  "clientRequestId": "string",
  "createTime": "string",
  "createdFromSnapshotId": "string",
  "currentState": "JOB_STATE_UNKNOWN",
  "currentStateTime": "string",
  "environment": {
    "clusterManagerApiService": "string",
    "dataset": "string",
    "debugOptions": {
      "enableHotKeyLogging": true
    },
    "experiments": [
      "string"
    ],
    "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
    "internalExperiments": {
      "property1": null,
      "property2": null
    },
    "sdkPipelineOptions": {
      "property1": null,
      "property2": null
    },
    "serviceAccountEmail": "string",
    "serviceKmsKeyName": "string",
    "serviceOptions": [
      "string"
    ],
    "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
    "tempStoragePrefix": "string",
    "userAgent": {
      "property1": null,
      "property2": null
    },
    "version": {
      "property1": null,
      "property2": null
    },
    "workerPools": [
      {
        "autoscalingSettings": {
          "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
          "maxNumWorkers": 0
        },
        "dataDisks": [
          {
            "diskType": "string",
            "mountPoint": "string",
            "sizeGb": 0
          }
        ],
        "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
        "diskSizeGb": 0,
        "diskSourceImage": "string",
        "diskType": "string",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kind": "string",
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "network": "string",
        "numThreadsPerWorker": 0,
        "numWorkers": 0,
        "onHostMaintenance": "string",
        "packages": [
          {
            "location": "string",
            "name": "string"
          }
        ],
        "poolArgs": {
          "property1": null,
          "property2": null
        },
        "sdkHarnessContainerImages": [
          {
            "capabilities": [
              "string"
            ],
            "containerImage": "string",
            "environmentId": "string",
            "useSingleCorePerContainer": true
          }
        ],
        "subnetwork": "string",
        "taskrunnerSettings": {
          "alsologtostderr": true,
          "baseTaskDir": "string",
          "baseUrl": "string",
          "commandlinesFileName": "string",
          "continueOnException": true,
          "dataflowApiVersion": "string",
          "harnessCommand": "string",
          "languageHint": "string",
          "logDir": "string",
          "logToSerialconsole": true,
          "logUploadLocation": "string",
          "oauthScopes": [
            "string"
          ],
          "parallelWorkerSettings": {
            "baseUrl": "string",
            "reportingEnabled": true,
            "servicePath": "string",
            "shuffleServicePath": "string",
            "tempStoragePrefix": "string",
            "workerId": "string"
          },
          "streamingWorkerMainClass": "string",
          "taskGroup": "string",
          "taskUser": "string",
          "tempStoragePrefix": "string",
          "vmId": "string",
          "workflowFileName": "string"
        },
        "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
        "workerHarnessContainerImage": "string",
        "zone": "string"
      }
    ],
    "workerRegion": "string",
    "workerZone": "string"
  },
  "executionInfo": {
    "stages": {
      "property1": {
        "stepName": [
          "string"
        ]
      },
      "property2": {
        "stepName": [
          "string"
        ]
      }
    }
  },
  "id": "string",
  "jobMetadata": {
    "bigTableDetails": [
      {
        "instanceId": "string",
        "projectId": "string",
        "tableId": "string"
      }
    ],
    "bigqueryDetails": [
      {
        "dataset": "string",
        "projectId": "string",
        "query": "string",
        "table": "string"
      }
    ],
    "datastoreDetails": [
      {
        "namespace": "string",
        "projectId": "string"
      }
    ],
    "fileDetails": [
      {
        "filePattern": "string"
      }
    ],
    "pubsubDetails": [
      {
        "subscription": "string",
        "topic": "string"
      }
    ],
    "sdkVersion": {
      "sdkSupportStatus": "UNKNOWN",
      "version": "string",
      "versionDisplayName": "string"
    },
    "spannerDetails": [
      {
        "databaseId": "string",
        "instanceId": "string",
        "projectId": "string"
      }
    ],
    "userDisplayProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "pipelineDescription": {
    "displayData": [
      {
        "boolValue": true,
        "durationValue": "string",
        "floatValue": 0,
        "int64Value": "string",
        "javaClassValue": "string",
        "key": "string",
        "label": "string",
        "namespace": "string",
        "shortStrValue": "string",
        "strValue": "string",
        "timestampValue": "string",
        "url": "string"
      }
    ],
    "executionPipelineStage": [
      {
        "componentSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "userName": "string"
          }
        ],
        "componentTransform": [
          {
            "name": "string",
            "originalTransform": "string",
            "userName": "string"
          }
        ],
        "id": "string",
        "inputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "prerequisiteStage": [
          "string"
        ]
      }
    ],
    "originalPipelineTransform": [
      {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "id": "string",
        "inputCollectionName": [
          "string"
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputCollectionName": [
          "string"
        ]
      }
    ],
    "stepNamesHash": "string"
  },
  "projectId": "string",
  "replaceJobId": "string",
  "replacedByJobId": "string",
  "requestedState": "JOB_STATE_UNKNOWN",
  "satisfiesPzs": true,
  "stageStates": [
    {
      "currentStateTime": "string",
      "executionStageName": "string",
      "executionStageState": "JOB_STATE_UNKNOWN"
    }
  ],
  "startTime": "string",
  "steps": [
    {
      "kind": "string",
      "name": "string",
      "properties": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "stepsLocation": "string",
  "tempFiles": [
    "string"
  ],
  "transformNameMapping": {
    "property1": "string",
    "property2": "string"
  },
  "type": "JOB_TYPE_UNKNOWN"
}
```

<h3 id="dataflowprojectslocationstemplatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.templates.get

<a id="opIddataflow.projects.locations.templates.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/templates:get \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/locations/{location}/templates:get`

Get the template associated with a template.

<h3 id="dataflowprojectslocationstemplatesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Cloud Platform project that the job belongs to.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.|
|gcsPath|query|string|false|Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.|
|view|query|string|false|The view to retrieve. Defaults to METADATA_ONLY.|
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
|view|METADATA_ONLY|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "description": "string",
    "name": "string",
    "parameters": [
      {
        "customMetadata": {
          "property1": "string",
          "property2": "string"
        },
        "groupName": "string",
        "helpText": "string",
        "isOptional": true,
        "label": "string",
        "name": "string",
        "paramType": "DEFAULT",
        "parentName": "string",
        "parentTriggerValues": [
          "string"
        ],
        "regexes": [
          "string"
        ]
      }
    ]
  },
  "runtimeMetadata": {
    "parameters": [
      {
        "customMetadata": {
          "property1": "string",
          "property2": "string"
        },
        "groupName": "string",
        "helpText": "string",
        "isOptional": true,
        "label": "string",
        "name": "string",
        "paramType": "DEFAULT",
        "parentName": "string",
        "parentTriggerValues": [
          "string"
        ],
        "regexes": [
          "string"
        ]
      }
    ],
    "sdkInfo": {
      "language": "UNKNOWN",
      "version": "string"
    }
  },
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
  "templateType": "UNKNOWN"
}
```

<h3 id="dataflowprojectslocationstemplatesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetTemplateResponse](#schemagettemplateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.locations.templates.launch

<a id="opIddataflow.projects.locations.templates.launch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/locations/string/templates:launch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
  }'
```

`POST /v1b3/projects/{projectId}/locations/{location}/templates:launch`

Launch a template.

> Body parameter

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

<h3 id="dataflowprojectslocationstemplateslaunch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Cloud Platform project that the job belongs to.|
|location|path|string|true|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.|
|dynamicTemplate.gcsPath|query|string|false|Path to dynamic template spec file on Cloud Storage. The file must be a Json serialized DynamicTemplateFieSpec object.|
|dynamicTemplate.stagingLocation|query|string|false|Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`.|
|gcsPath|query|string|false|A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.|
|validateOnly|query|boolean|false|If true, the request is validated but not actually executed. Defaults to false.|
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
|body|body|[LaunchTemplateParameters](#schemalaunchtemplateparameters)|false|none|
|» environment|body|[RuntimeEnvironment](#schemaruntimeenvironment)|false|The runtime environment for the job.|
|» jobName|body|string|false|Required. The job name to use for the created job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?`|
|» parameters|body|object|false|The runtime parameters to pass to the job.|
|» » **additionalProperties**|body|string|false|none|
|» transformNameMapping|body|object|false|Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.|
|» » **additionalProperties**|body|string|false|none|
|» update|body|boolean|false|If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.|

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
    "clientRequestId": "string",
    "createTime": "string",
    "createdFromSnapshotId": "string",
    "currentState": "JOB_STATE_UNKNOWN",
    "currentStateTime": "string",
    "environment": {
      "clusterManagerApiService": "string",
      "dataset": "string",
      "debugOptions": {
        "enableHotKeyLogging": true
      },
      "experiments": [
        "string"
      ],
      "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
      "internalExperiments": {
        "property1": null,
        "property2": null
      },
      "sdkPipelineOptions": {
        "property1": null,
        "property2": null
      },
      "serviceAccountEmail": "string",
      "serviceKmsKeyName": "string",
      "serviceOptions": [
        "string"
      ],
      "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
      "tempStoragePrefix": "string",
      "userAgent": {
        "property1": null,
        "property2": null
      },
      "version": {
        "property1": null,
        "property2": null
      },
      "workerPools": [
        {
          "autoscalingSettings": {
            "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
            "maxNumWorkers": 0
          },
          "dataDisks": [
            {
              "diskType": "string",
              "mountPoint": "string",
              "sizeGb": 0
            }
          ],
          "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
          "diskSizeGb": 0,
          "diskSourceImage": "string",
          "diskType": "string",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kind": "string",
          "machineType": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "network": "string",
          "numThreadsPerWorker": 0,
          "numWorkers": 0,
          "onHostMaintenance": "string",
          "packages": [
            {
              "location": "string",
              "name": "string"
            }
          ],
          "poolArgs": {
            "property1": null,
            "property2": null
          },
          "sdkHarnessContainerImages": [
            {
              "capabilities": [
                "string"
              ],
              "containerImage": "string",
              "environmentId": "string",
              "useSingleCorePerContainer": true
            }
          ],
          "subnetwork": "string",
          "taskrunnerSettings": {
            "alsologtostderr": true,
            "baseTaskDir": "string",
            "baseUrl": "string",
            "commandlinesFileName": "string",
            "continueOnException": true,
            "dataflowApiVersion": "string",
            "harnessCommand": "string",
            "languageHint": "string",
            "logDir": "string",
            "logToSerialconsole": true,
            "logUploadLocation": "string",
            "oauthScopes": [
              "string"
            ],
            "parallelWorkerSettings": {
              "baseUrl": "string",
              "reportingEnabled": true,
              "servicePath": "string",
              "shuffleServicePath": "string",
              "tempStoragePrefix": "string",
              "workerId": "string"
            },
            "streamingWorkerMainClass": "string",
            "taskGroup": "string",
            "taskUser": "string",
            "tempStoragePrefix": "string",
            "vmId": "string",
            "workflowFileName": "string"
          },
          "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
          "workerHarnessContainerImage": "string",
          "zone": "string"
        }
      ],
      "workerRegion": "string",
      "workerZone": "string"
    },
    "executionInfo": {
      "stages": {
        "property1": {
          "stepName": [
            "string"
          ]
        },
        "property2": {
          "stepName": [
            "string"
          ]
        }
      }
    },
    "id": "string",
    "jobMetadata": {
      "bigTableDetails": [
        {
          "instanceId": "string",
          "projectId": "string",
          "tableId": "string"
        }
      ],
      "bigqueryDetails": [
        {
          "dataset": "string",
          "projectId": "string",
          "query": "string",
          "table": "string"
        }
      ],
      "datastoreDetails": [
        {
          "namespace": "string",
          "projectId": "string"
        }
      ],
      "fileDetails": [
        {
          "filePattern": "string"
        }
      ],
      "pubsubDetails": [
        {
          "subscription": "string",
          "topic": "string"
        }
      ],
      "sdkVersion": {
        "sdkSupportStatus": "UNKNOWN",
        "version": "string",
        "versionDisplayName": "string"
      },
      "spannerDetails": [
        {
          "databaseId": "string",
          "instanceId": "string",
          "projectId": "string"
        }
      ],
      "userDisplayProperties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": "string",
    "name": "string",
    "pipelineDescription": {
      "displayData": [
        {
          "boolValue": true,
          "durationValue": "string",
          "floatValue": 0,
          "int64Value": "string",
          "javaClassValue": "string",
          "key": "string",
          "label": "string",
          "namespace": "string",
          "shortStrValue": "string",
          "strValue": "string",
          "timestampValue": "string",
          "url": "string"
        }
      ],
      "executionPipelineStage": [
        {
          "componentSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "userName": "string"
            }
          ],
          "componentTransform": [
            {
              "name": "string",
              "originalTransform": "string",
              "userName": "string"
            }
          ],
          "id": "string",
          "inputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "prerequisiteStage": [
            "string"
          ]
        }
      ],
      "originalPipelineTransform": [
        {
          "displayData": [
            {
              "boolValue": true,
              "durationValue": "string",
              "floatValue": 0,
              "int64Value": "string",
              "javaClassValue": "string",
              "key": "string",
              "label": "string",
              "namespace": "string",
              "shortStrValue": "string",
              "strValue": "string",
              "timestampValue": "string",
              "url": "string"
            }
          ],
          "id": "string",
          "inputCollectionName": [
            "string"
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputCollectionName": [
            "string"
          ]
        }
      ],
      "stepNamesHash": "string"
    },
    "projectId": "string",
    "replaceJobId": "string",
    "replacedByJobId": "string",
    "requestedState": "JOB_STATE_UNKNOWN",
    "satisfiesPzs": true,
    "stageStates": [
      {
        "currentStateTime": "string",
        "executionStageName": "string",
        "executionStageState": "JOB_STATE_UNKNOWN"
      }
    ],
    "startTime": "string",
    "steps": [
      {
        "kind": "string",
        "name": "string",
        "properties": {
          "property1": null,
          "property2": null
        }
      }
    ],
    "stepsLocation": "string",
    "tempFiles": [
      "string"
    ],
    "transformNameMapping": {
      "property1": "string",
      "property2": "string"
    },
    "type": "JOB_TYPE_UNKNOWN"
  }
}
```

<h3 id="dataflowprojectslocationstemplateslaunch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LaunchTemplateResponse](#schemalaunchtemplateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.snapshots.list

<a id="opIddataflow.projects.snapshots.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/snapshots \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/snapshots`

Lists snapshots.

<h3 id="dataflowprojectssnapshotslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The project ID to list snapshots for.|
|jobId|query|string|false|If specified, list snapshots created from this job.|
|location|query|string|false|The location to list snapshots in.|
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
  "snapshots": [
    {
      "creationTime": "string",
      "description": "string",
      "diskSizeBytes": "string",
      "id": "string",
      "projectId": "string",
      "pubsubMetadata": [
        {
          "expireTime": "string",
          "snapshotName": "string",
          "topicName": "string"
        }
      ],
      "region": "string",
      "sourceJobId": "string",
      "state": "UNKNOWN_SNAPSHOT_STATE",
      "ttl": "string"
    }
  ]
}
```

<h3 id="dataflowprojectssnapshotslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSnapshotsResponse](#schemalistsnapshotsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.deleteSnapshots

<a id="opIddataflow.projects.deleteSnapshots"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/snapshots \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1b3/projects/{projectId}/snapshots`

Deletes a snapshot.

<h3 id="dataflowprojectsdeletesnapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the Cloud Platform project that the snapshot belongs to.|
|location|query|string|false|The location that contains this snapshot.|
|snapshotId|query|string|false|The ID of the snapshot.|
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

<h3 id="dataflowprojectsdeletesnapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeleteSnapshotResponse](#schemadeletesnapshotresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.snapshots.get

<a id="opIddataflow.projects.snapshots.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/snapshots/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/snapshots/{snapshotId}`

Gets information about a snapshot.

<h3 id="dataflowprojectssnapshotsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|The ID of the Cloud Platform project that the snapshot belongs to.|
|snapshotId|path|string|true|The ID of the snapshot.|
|location|query|string|false|The location that contains this snapshot.|
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
  "creationTime": "string",
  "description": "string",
  "diskSizeBytes": "string",
  "id": "string",
  "projectId": "string",
  "pubsubMetadata": [
    {
      "expireTime": "string",
      "snapshotName": "string",
      "topicName": "string"
    }
  ],
  "region": "string",
  "sourceJobId": "string",
  "state": "UNKNOWN_SNAPSHOT_STATE",
  "ttl": "string"
}
```

<h3 id="dataflowprojectssnapshotsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Snapshot](#schemasnapshot)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.templates.create

<a id="opIddataflow.projects.templates.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
    "gcsPath": "string",
    "jobName": "string",
    "location": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1b3/projects/{projectId}/templates`

Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.

> Body parameter

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
  "gcsPath": "string",
  "jobName": "string",
  "location": "string",
  "parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="dataflowprojectstemplatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Cloud Platform project that the job belongs to.|
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
|body|body|[CreateJobFromTemplateRequest](#schemacreatejobfromtemplaterequest)|false|none|
|» environment|body|[RuntimeEnvironment](#schemaruntimeenvironment)|false|The runtime environment for the job.|
|» gcsPath|body|string|false|Required. A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with `gs://`.|
|» jobName|body|string|false|Required. The job name to use for the created job.|
|» location|body|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.|
|» parameters|body|object|false|The runtime parameters to pass to the job.|
|» » **additionalProperties**|body|string|false|none|

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
  "clientRequestId": "string",
  "createTime": "string",
  "createdFromSnapshotId": "string",
  "currentState": "JOB_STATE_UNKNOWN",
  "currentStateTime": "string",
  "environment": {
    "clusterManagerApiService": "string",
    "dataset": "string",
    "debugOptions": {
      "enableHotKeyLogging": true
    },
    "experiments": [
      "string"
    ],
    "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
    "internalExperiments": {
      "property1": null,
      "property2": null
    },
    "sdkPipelineOptions": {
      "property1": null,
      "property2": null
    },
    "serviceAccountEmail": "string",
    "serviceKmsKeyName": "string",
    "serviceOptions": [
      "string"
    ],
    "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
    "tempStoragePrefix": "string",
    "userAgent": {
      "property1": null,
      "property2": null
    },
    "version": {
      "property1": null,
      "property2": null
    },
    "workerPools": [
      {
        "autoscalingSettings": {
          "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
          "maxNumWorkers": 0
        },
        "dataDisks": [
          {
            "diskType": "string",
            "mountPoint": "string",
            "sizeGb": 0
          }
        ],
        "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
        "diskSizeGb": 0,
        "diskSourceImage": "string",
        "diskType": "string",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kind": "string",
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "network": "string",
        "numThreadsPerWorker": 0,
        "numWorkers": 0,
        "onHostMaintenance": "string",
        "packages": [
          {
            "location": "string",
            "name": "string"
          }
        ],
        "poolArgs": {
          "property1": null,
          "property2": null
        },
        "sdkHarnessContainerImages": [
          {
            "capabilities": [
              "string"
            ],
            "containerImage": "string",
            "environmentId": "string",
            "useSingleCorePerContainer": true
          }
        ],
        "subnetwork": "string",
        "taskrunnerSettings": {
          "alsologtostderr": true,
          "baseTaskDir": "string",
          "baseUrl": "string",
          "commandlinesFileName": "string",
          "continueOnException": true,
          "dataflowApiVersion": "string",
          "harnessCommand": "string",
          "languageHint": "string",
          "logDir": "string",
          "logToSerialconsole": true,
          "logUploadLocation": "string",
          "oauthScopes": [
            "string"
          ],
          "parallelWorkerSettings": {
            "baseUrl": "string",
            "reportingEnabled": true,
            "servicePath": "string",
            "shuffleServicePath": "string",
            "tempStoragePrefix": "string",
            "workerId": "string"
          },
          "streamingWorkerMainClass": "string",
          "taskGroup": "string",
          "taskUser": "string",
          "tempStoragePrefix": "string",
          "vmId": "string",
          "workflowFileName": "string"
        },
        "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
        "workerHarnessContainerImage": "string",
        "zone": "string"
      }
    ],
    "workerRegion": "string",
    "workerZone": "string"
  },
  "executionInfo": {
    "stages": {
      "property1": {
        "stepName": [
          "string"
        ]
      },
      "property2": {
        "stepName": [
          "string"
        ]
      }
    }
  },
  "id": "string",
  "jobMetadata": {
    "bigTableDetails": [
      {
        "instanceId": "string",
        "projectId": "string",
        "tableId": "string"
      }
    ],
    "bigqueryDetails": [
      {
        "dataset": "string",
        "projectId": "string",
        "query": "string",
        "table": "string"
      }
    ],
    "datastoreDetails": [
      {
        "namespace": "string",
        "projectId": "string"
      }
    ],
    "fileDetails": [
      {
        "filePattern": "string"
      }
    ],
    "pubsubDetails": [
      {
        "subscription": "string",
        "topic": "string"
      }
    ],
    "sdkVersion": {
      "sdkSupportStatus": "UNKNOWN",
      "version": "string",
      "versionDisplayName": "string"
    },
    "spannerDetails": [
      {
        "databaseId": "string",
        "instanceId": "string",
        "projectId": "string"
      }
    ],
    "userDisplayProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "pipelineDescription": {
    "displayData": [
      {
        "boolValue": true,
        "durationValue": "string",
        "floatValue": 0,
        "int64Value": "string",
        "javaClassValue": "string",
        "key": "string",
        "label": "string",
        "namespace": "string",
        "shortStrValue": "string",
        "strValue": "string",
        "timestampValue": "string",
        "url": "string"
      }
    ],
    "executionPipelineStage": [
      {
        "componentSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "userName": "string"
          }
        ],
        "componentTransform": [
          {
            "name": "string",
            "originalTransform": "string",
            "userName": "string"
          }
        ],
        "id": "string",
        "inputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "prerequisiteStage": [
          "string"
        ]
      }
    ],
    "originalPipelineTransform": [
      {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "id": "string",
        "inputCollectionName": [
          "string"
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputCollectionName": [
          "string"
        ]
      }
    ],
    "stepNamesHash": "string"
  },
  "projectId": "string",
  "replaceJobId": "string",
  "replacedByJobId": "string",
  "requestedState": "JOB_STATE_UNKNOWN",
  "satisfiesPzs": true,
  "stageStates": [
    {
      "currentStateTime": "string",
      "executionStageName": "string",
      "executionStageState": "JOB_STATE_UNKNOWN"
    }
  ],
  "startTime": "string",
  "steps": [
    {
      "kind": "string",
      "name": "string",
      "properties": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "stepsLocation": "string",
  "tempFiles": [
    "string"
  ],
  "transformNameMapping": {
    "property1": "string",
    "property2": "string"
  },
  "type": "JOB_TYPE_UNKNOWN"
}
```

<h3 id="dataflowprojectstemplatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Job](#schemajob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.templates.get

<a id="opIddataflow.projects.templates.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/templates:get \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1b3/projects/{projectId}/templates:get`

Get the template associated with a template.

<h3 id="dataflowprojectstemplatesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Cloud Platform project that the job belongs to.|
|gcsPath|query|string|false|Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.|
|location|query|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.|
|view|query|string|false|The view to retrieve. Defaults to METADATA_ONLY.|
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
|view|METADATA_ONLY|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "metadata": {
    "description": "string",
    "name": "string",
    "parameters": [
      {
        "customMetadata": {
          "property1": "string",
          "property2": "string"
        },
        "groupName": "string",
        "helpText": "string",
        "isOptional": true,
        "label": "string",
        "name": "string",
        "paramType": "DEFAULT",
        "parentName": "string",
        "parentTriggerValues": [
          "string"
        ],
        "regexes": [
          "string"
        ]
      }
    ]
  },
  "runtimeMetadata": {
    "parameters": [
      {
        "customMetadata": {
          "property1": "string",
          "property2": "string"
        },
        "groupName": "string",
        "helpText": "string",
        "isOptional": true,
        "label": "string",
        "name": "string",
        "paramType": "DEFAULT",
        "parentName": "string",
        "parentTriggerValues": [
          "string"
        ],
        "regexes": [
          "string"
        ]
      }
    ],
    "sdkInfo": {
      "language": "UNKNOWN",
      "version": "string"
    }
  },
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
  "templateType": "UNKNOWN"
}
```

<h3 id="dataflowprojectstemplatesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetTemplateResponse](#schemagettemplateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

## dataflow.projects.templates.launch

<a id="opIddataflow.projects.templates.launch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1b3/projects/string/templates:launch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
  }'
```

`POST /v1b3/projects/{projectId}/templates:launch`

Launch a template.

> Body parameter

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

<h3 id="dataflowprojectstemplateslaunch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|Required. The ID of the Cloud Platform project that the job belongs to.|
|dynamicTemplate.gcsPath|query|string|false|Path to dynamic template spec file on Cloud Storage. The file must be a Json serialized DynamicTemplateFieSpec object.|
|dynamicTemplate.stagingLocation|query|string|false|Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`.|
|gcsPath|query|string|false|A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.|
|location|query|string|false|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.|
|validateOnly|query|boolean|false|If true, the request is validated but not actually executed. Defaults to false.|
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
|body|body|[LaunchTemplateParameters](#schemalaunchtemplateparameters)|false|none|
|» environment|body|[RuntimeEnvironment](#schemaruntimeenvironment)|false|The runtime environment for the job.|
|» jobName|body|string|false|Required. The job name to use for the created job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?`|
|» parameters|body|object|false|The runtime parameters to pass to the job.|
|» » **additionalProperties**|body|string|false|none|
|» transformNameMapping|body|object|false|Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.|
|» » **additionalProperties**|body|string|false|none|
|» update|body|boolean|false|If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.|

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
    "clientRequestId": "string",
    "createTime": "string",
    "createdFromSnapshotId": "string",
    "currentState": "JOB_STATE_UNKNOWN",
    "currentStateTime": "string",
    "environment": {
      "clusterManagerApiService": "string",
      "dataset": "string",
      "debugOptions": {
        "enableHotKeyLogging": true
      },
      "experiments": [
        "string"
      ],
      "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
      "internalExperiments": {
        "property1": null,
        "property2": null
      },
      "sdkPipelineOptions": {
        "property1": null,
        "property2": null
      },
      "serviceAccountEmail": "string",
      "serviceKmsKeyName": "string",
      "serviceOptions": [
        "string"
      ],
      "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
      "tempStoragePrefix": "string",
      "userAgent": {
        "property1": null,
        "property2": null
      },
      "version": {
        "property1": null,
        "property2": null
      },
      "workerPools": [
        {
          "autoscalingSettings": {
            "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
            "maxNumWorkers": 0
          },
          "dataDisks": [
            {
              "diskType": "string",
              "mountPoint": "string",
              "sizeGb": 0
            }
          ],
          "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
          "diskSizeGb": 0,
          "diskSourceImage": "string",
          "diskType": "string",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kind": "string",
          "machineType": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "network": "string",
          "numThreadsPerWorker": 0,
          "numWorkers": 0,
          "onHostMaintenance": "string",
          "packages": [
            {
              "location": "string",
              "name": "string"
            }
          ],
          "poolArgs": {
            "property1": null,
            "property2": null
          },
          "sdkHarnessContainerImages": [
            {
              "capabilities": [
                "string"
              ],
              "containerImage": "string",
              "environmentId": "string",
              "useSingleCorePerContainer": true
            }
          ],
          "subnetwork": "string",
          "taskrunnerSettings": {
            "alsologtostderr": true,
            "baseTaskDir": "string",
            "baseUrl": "string",
            "commandlinesFileName": "string",
            "continueOnException": true,
            "dataflowApiVersion": "string",
            "harnessCommand": "string",
            "languageHint": "string",
            "logDir": "string",
            "logToSerialconsole": true,
            "logUploadLocation": "string",
            "oauthScopes": [
              "string"
            ],
            "parallelWorkerSettings": {
              "baseUrl": "string",
              "reportingEnabled": true,
              "servicePath": "string",
              "shuffleServicePath": "string",
              "tempStoragePrefix": "string",
              "workerId": "string"
            },
            "streamingWorkerMainClass": "string",
            "taskGroup": "string",
            "taskUser": "string",
            "tempStoragePrefix": "string",
            "vmId": "string",
            "workflowFileName": "string"
          },
          "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
          "workerHarnessContainerImage": "string",
          "zone": "string"
        }
      ],
      "workerRegion": "string",
      "workerZone": "string"
    },
    "executionInfo": {
      "stages": {
        "property1": {
          "stepName": [
            "string"
          ]
        },
        "property2": {
          "stepName": [
            "string"
          ]
        }
      }
    },
    "id": "string",
    "jobMetadata": {
      "bigTableDetails": [
        {
          "instanceId": "string",
          "projectId": "string",
          "tableId": "string"
        }
      ],
      "bigqueryDetails": [
        {
          "dataset": "string",
          "projectId": "string",
          "query": "string",
          "table": "string"
        }
      ],
      "datastoreDetails": [
        {
          "namespace": "string",
          "projectId": "string"
        }
      ],
      "fileDetails": [
        {
          "filePattern": "string"
        }
      ],
      "pubsubDetails": [
        {
          "subscription": "string",
          "topic": "string"
        }
      ],
      "sdkVersion": {
        "sdkSupportStatus": "UNKNOWN",
        "version": "string",
        "versionDisplayName": "string"
      },
      "spannerDetails": [
        {
          "databaseId": "string",
          "instanceId": "string",
          "projectId": "string"
        }
      ],
      "userDisplayProperties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": "string",
    "name": "string",
    "pipelineDescription": {
      "displayData": [
        {
          "boolValue": true,
          "durationValue": "string",
          "floatValue": 0,
          "int64Value": "string",
          "javaClassValue": "string",
          "key": "string",
          "label": "string",
          "namespace": "string",
          "shortStrValue": "string",
          "strValue": "string",
          "timestampValue": "string",
          "url": "string"
        }
      ],
      "executionPipelineStage": [
        {
          "componentSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "userName": "string"
            }
          ],
          "componentTransform": [
            {
              "name": "string",
              "originalTransform": "string",
              "userName": "string"
            }
          ],
          "id": "string",
          "inputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "prerequisiteStage": [
            "string"
          ]
        }
      ],
      "originalPipelineTransform": [
        {
          "displayData": [
            {
              "boolValue": true,
              "durationValue": "string",
              "floatValue": 0,
              "int64Value": "string",
              "javaClassValue": "string",
              "key": "string",
              "label": "string",
              "namespace": "string",
              "shortStrValue": "string",
              "strValue": "string",
              "timestampValue": "string",
              "url": "string"
            }
          ],
          "id": "string",
          "inputCollectionName": [
            "string"
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputCollectionName": [
            "string"
          ]
        }
      ],
      "stepNamesHash": "string"
    },
    "projectId": "string",
    "replaceJobId": "string",
    "replacedByJobId": "string",
    "requestedState": "JOB_STATE_UNKNOWN",
    "satisfiesPzs": true,
    "stageStates": [
      {
        "currentStateTime": "string",
        "executionStageName": "string",
        "executionStageState": "JOB_STATE_UNKNOWN"
      }
    ],
    "startTime": "string",
    "steps": [
      {
        "kind": "string",
        "name": "string",
        "properties": {
          "property1": null,
          "property2": null
        }
      }
    ],
    "stepsLocation": "string",
    "tempFiles": [
      "string"
    ],
    "transformNameMapping": {
      "property1": "string",
      "property2": "string"
    },
    "type": "JOB_TYPE_UNKNOWN"
  }
}
```

<h3 id="dataflowprojectstemplateslaunch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[LaunchTemplateResponse](#schemalaunchtemplateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute ), Oauth2 ( Scopes: https://www.googleapis.com/auth/compute.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/compute.readonly ), Oauth2 ( Scopes: https://www.googleapis.com/auth/userinfo.email ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userinfo.email )
</aside>

# Schemas

<h2 id="tocS_ApproximateProgress">ApproximateProgress</h2>
<!-- backwards compatibility -->
<a id="schemaapproximateprogress"></a>
<a id="schema_ApproximateProgress"></a>
<a id="tocSapproximateprogress"></a>
<a id="tocsapproximateprogress"></a>

```json
{
  "percentComplete": 0,
  "position": {
    "byteOffset": "string",
    "concatPosition": {},
    "end": true,
    "key": "string",
    "recordIndex": "string",
    "shufflePosition": "string"
  },
  "remainingTime": "string"
}
```

Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentComplete|number(float)|false|none|Obsolete.|
|position|[Position](#schemaposition)|false|none|Obsolete.|
|remainingTime|string(google-duration)|false|none|Obsolete.|

<h2 id="tocS_ApproximateReportedProgress">ApproximateReportedProgress</h2>
<!-- backwards compatibility -->
<a id="schemaapproximatereportedprogress"></a>
<a id="schema_ApproximateReportedProgress"></a>
<a id="tocSapproximatereportedprogress"></a>
<a id="tocsapproximatereportedprogress"></a>

```json
{
  "consumedParallelism": {
    "isInfinite": true,
    "value": 0
  },
  "fractionConsumed": 0,
  "position": {
    "byteOffset": "string",
    "concatPosition": {},
    "end": true,
    "key": "string",
    "recordIndex": "string",
    "shufflePosition": "string"
  },
  "remainingParallelism": {
    "isInfinite": true,
    "value": 0
  }
}
```

A progress measurement of a WorkItem by a worker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumedParallelism|[ReportedParallelism](#schemareportedparallelism)|false|none|Total amount of parallelism in the portion of input of this task that has already been consumed and is no longer active. In the first two examples above (see remaining_parallelism), the value should be 29 or 2 respectively. The sum of remaining_parallelism and consumed_parallelism should equal the total amount of parallelism in this work item. If specified, must be finite.|
|fractionConsumed|number(double)|false|none|Completion as fraction of the input consumed, from 0.0 (beginning, nothing consumed), to 1.0 (end of the input, entire input consumed).|
|position|[Position](#schemaposition)|false|none|A Position within the work to represent a progress.|
|remainingParallelism|[ReportedParallelism](#schemareportedparallelism)|false|none|Total amount of parallelism in the input of this task that remains, (i.e. can be delegated to this task and any new tasks via dynamic splitting). Always at least 1 for non-finished work items and 0 for finished. "Amount of parallelism" refers to how many non-empty parts of the input can be read in parallel. This does not necessarily equal number of records. An input that can be read in parallel down to the individual records is called "perfectly splittable". An example of non-perfectly parallelizable input is a block-compressed file format where a block of records has to be read as a whole, but different blocks can be read in parallel. Examples: * If we are processing record #30 (starting at 1) out of 50 in a perfectly splittable 50-record input, this value should be 21 (20 remaining + 1 current). * If we are reading through block 3 in a block-compressed file consisting of 5 blocks, this value should be 3 (since blocks 4 and 5 can be processed in parallel by new tasks via dynamic splitting and the current task remains processing block 3). * If we are reading through the last block in a block-compressed file, or reading or processing the last record in a perfectly splittable input, this value should be 1, because apart from the current task, no additional remainder can be split off.|

<h2 id="tocS_ApproximateSplitRequest">ApproximateSplitRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapproximatesplitrequest"></a>
<a id="schema_ApproximateSplitRequest"></a>
<a id="tocSapproximatesplitrequest"></a>
<a id="tocsapproximatesplitrequest"></a>

```json
{
  "fractionConsumed": 0,
  "fractionOfRemainder": 0,
  "position": {
    "byteOffset": "string",
    "concatPosition": {},
    "end": true,
    "key": "string",
    "recordIndex": "string",
    "shufflePosition": "string"
  }
}
```

A suggestion by the service to the worker to dynamically split the WorkItem.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fractionConsumed|number(double)|false|none|A fraction at which to split the work item, from 0.0 (beginning of the input) to 1.0 (end of the input).|
|fractionOfRemainder|number(double)|false|none|The fraction of the remainder of work to split the work item at, from 0.0 (split at the current position) to 1.0 (end of the input).|
|position|[Position](#schemaposition)|false|none|A Position at which to split the work item.|

<h2 id="tocS_AutoscalingEvent">AutoscalingEvent</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingevent"></a>
<a id="schema_AutoscalingEvent"></a>
<a id="tocSautoscalingevent"></a>
<a id="tocsautoscalingevent"></a>

```json
{
  "currentNumWorkers": "string",
  "description": {
    "messageKey": "string",
    "messageText": "string",
    "parameters": [
      {
        "key": "string",
        "value": null
      }
    ]
  },
  "eventType": "TYPE_UNKNOWN",
  "targetNumWorkers": "string",
  "time": "string",
  "workerPool": "string"
}
```

A structured message reporting an autoscaling decision made by the Dataflow service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentNumWorkers|string(int64)|false|none|The current number of workers the job has.|
|description|[StructuredMessage](#schemastructuredmessage)|false|none|A message describing why the system decided to adjust the current number of workers, why it failed, or why the system decided to not make any changes to the number of workers.|
|eventType|string|false|none|The type of autoscaling event to report.|
|targetNumWorkers|string(int64)|false|none|The target number of workers the worker pool wants to resize to use.|
|time|string(google-datetime)|false|none|The time this event was emitted to indicate a new target or current num_workers value.|
|workerPool|string|false|none|A short and friendly name for the worker pool this event refers to.|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|TYPE_UNKNOWN|
|eventType|TARGET_NUM_WORKERS_CHANGED|
|eventType|CURRENT_NUM_WORKERS_CHANGED|
|eventType|ACTUATION_FAILURE|
|eventType|NO_CHANGE|

<h2 id="tocS_AutoscalingSettings">AutoscalingSettings</h2>
<!-- backwards compatibility -->
<a id="schemaautoscalingsettings"></a>
<a id="schema_AutoscalingSettings"></a>
<a id="tocSautoscalingsettings"></a>
<a id="tocsautoscalingsettings"></a>

```json
{
  "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
  "maxNumWorkers": 0
}
```

Settings for WorkerPool autoscaling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|The algorithm to use for autoscaling.|
|maxNumWorkers|integer(int32)|false|none|The maximum number of workers to cap scaling at.|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|AUTOSCALING_ALGORITHM_UNKNOWN|
|algorithm|AUTOSCALING_ALGORITHM_NONE|
|algorithm|AUTOSCALING_ALGORITHM_BASIC|

<h2 id="tocS_BigQueryIODetails">BigQueryIODetails</h2>
<!-- backwards compatibility -->
<a id="schemabigqueryiodetails"></a>
<a id="schema_BigQueryIODetails"></a>
<a id="tocSbigqueryiodetails"></a>
<a id="tocsbigqueryiodetails"></a>

```json
{
  "dataset": "string",
  "projectId": "string",
  "query": "string",
  "table": "string"
}
```

Metadata for a BigQuery connector used by the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|string|false|none|Dataset accessed in the connection.|
|projectId|string|false|none|Project accessed in the connection.|
|query|string|false|none|Query used to access data in the connection.|
|table|string|false|none|Table accessed in the connection.|

<h2 id="tocS_BigTableIODetails">BigTableIODetails</h2>
<!-- backwards compatibility -->
<a id="schemabigtableiodetails"></a>
<a id="schema_BigTableIODetails"></a>
<a id="tocSbigtableiodetails"></a>
<a id="tocsbigtableiodetails"></a>

```json
{
  "instanceId": "string",
  "projectId": "string",
  "tableId": "string"
}
```

Metadata for a Cloud Bigtable connector used by the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceId|string|false|none|InstanceId accessed in the connection.|
|projectId|string|false|none|ProjectId accessed in the connection.|
|tableId|string|false|none|TableId accessed in the connection.|

<h2 id="tocS_CPUTime">CPUTime</h2>
<!-- backwards compatibility -->
<a id="schemacputime"></a>
<a id="schema_CPUTime"></a>
<a id="tocScputime"></a>
<a id="tocscputime"></a>

```json
{
  "rate": 0,
  "timestamp": "string",
  "totalMs": "string"
}
```

Modeled after information exposed by /proc/stat.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rate|number(double)|false|none|Average CPU utilization rate (% non-idle cpu / second) since previous sample.|
|timestamp|string(google-datetime)|false|none|Timestamp of the measurement.|
|totalMs|string(uint64)|false|none|Total active CPU time across all cores (ie., non-idle) in milliseconds since start-up.|

<h2 id="tocS_ComponentSource">ComponentSource</h2>
<!-- backwards compatibility -->
<a id="schemacomponentsource"></a>
<a id="schema_ComponentSource"></a>
<a id="tocScomponentsource"></a>
<a id="tocscomponentsource"></a>

```json
{
  "name": "string",
  "originalTransformOrCollection": "string",
  "userName": "string"
}
```

Description of an interstitial value between transforms in an execution stage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Dataflow service generated name for this source.|
|originalTransformOrCollection|string|false|none|User name for the original user transform or collection with which this source is most closely associated.|
|userName|string|false|none|Human-readable name for this transform; may be user or system generated.|

<h2 id="tocS_ComponentTransform">ComponentTransform</h2>
<!-- backwards compatibility -->
<a id="schemacomponenttransform"></a>
<a id="schema_ComponentTransform"></a>
<a id="tocScomponenttransform"></a>
<a id="tocscomponenttransform"></a>

```json
{
  "name": "string",
  "originalTransform": "string",
  "userName": "string"
}
```

Description of a transform executed as part of an execution stage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Dataflow service generated name for this source.|
|originalTransform|string|false|none|User name for the original user transform with which this transform is most closely associated.|
|userName|string|false|none|Human-readable name for this transform; may be user or system generated.|

<h2 id="tocS_ComputationTopology">ComputationTopology</h2>
<!-- backwards compatibility -->
<a id="schemacomputationtopology"></a>
<a id="schema_ComputationTopology"></a>
<a id="tocScomputationtopology"></a>
<a id="tocscomputationtopology"></a>

```json
{
  "computationId": "string",
  "inputs": [
    {
      "customSourceLocation": {
        "stateful": true
      },
      "pubsubLocation": {
        "dropLateData": true,
        "idLabel": "string",
        "subscription": "string",
        "timestampLabel": "string",
        "topic": "string",
        "trackingSubscription": "string",
        "withAttributes": true
      },
      "sideInputLocation": {
        "stateFamily": "string",
        "tag": "string"
      },
      "streamingStageLocation": {
        "streamId": "string"
      }
    }
  ],
  "keyRanges": [
    {
      "dataDisk": "string",
      "deliveryEndpoint": "string",
      "deprecatedPersistentDirectory": "string",
      "end": "string",
      "start": "string"
    }
  ],
  "outputs": [
    {
      "customSourceLocation": {
        "stateful": true
      },
      "pubsubLocation": {
        "dropLateData": true,
        "idLabel": "string",
        "subscription": "string",
        "timestampLabel": "string",
        "topic": "string",
        "trackingSubscription": "string",
        "withAttributes": true
      },
      "sideInputLocation": {
        "stateFamily": "string",
        "tag": "string"
      },
      "streamingStageLocation": {
        "streamId": "string"
      }
    }
  ],
  "stateFamilies": [
    {
      "isRead": true,
      "stateFamily": "string"
    }
  ],
  "systemStageName": "string"
}
```

All configuration data for a particular Computation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computationId|string|false|none|The ID of the computation.|
|inputs|[[StreamLocation](#schemastreamlocation)]|false|none|The inputs to the computation.|
|keyRanges|[[KeyRangeLocation](#schemakeyrangelocation)]|false|none|The key ranges processed by the computation.|
|outputs|[[StreamLocation](#schemastreamlocation)]|false|none|The outputs from the computation.|
|stateFamilies|[[StateFamilyConfig](#schemastatefamilyconfig)]|false|none|The state family values.|
|systemStageName|string|false|none|The system stage name.|

<h2 id="tocS_ConcatPosition">ConcatPosition</h2>
<!-- backwards compatibility -->
<a id="schemaconcatposition"></a>
<a id="schema_ConcatPosition"></a>
<a id="tocSconcatposition"></a>
<a id="tocsconcatposition"></a>

```json
{
  "index": 0,
  "position": {
    "byteOffset": "string",
    "concatPosition": {},
    "end": true,
    "key": "string",
    "recordIndex": "string",
    "shufflePosition": "string"
  }
}
```

A position that encapsulates an inner position and an index for the inner position. A ConcatPosition can be used by a reader of a source that encapsulates a set of other sources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|Index of the inner source.|
|position|[Position](#schemaposition)|false|none|Position within the inner source.|

<h2 id="tocS_ContainerSpec">ContainerSpec</h2>
<!-- backwards compatibility -->
<a id="schemacontainerspec"></a>
<a id="schema_ContainerSpec"></a>
<a id="tocScontainerspec"></a>
<a id="tocscontainerspec"></a>

```json
{
  "defaultEnvironment": {
    "additionalExperiments": [
      "string"
    ],
    "additionalUserLabels": {
      "property1": "string",
      "property2": "string"
    },
    "autoscalingAlgorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
    "diskSizeGb": 0,
    "dumpHeapOnOom": true,
    "enableLauncherVmSerialPortLogging": true,
    "enableStreamingEngine": true,
    "flexrsGoal": "FLEXRS_UNSPECIFIED",
    "ipConfiguration": "WORKER_IP_UNSPECIFIED",
    "kmsKeyName": "string",
    "launcherMachineType": "string",
    "machineType": "string",
    "maxWorkers": 0,
    "network": "string",
    "numWorkers": 0,
    "saveHeapDumpsToGcsPath": "string",
    "sdkContainerImage": "string",
    "serviceAccountEmail": "string",
    "stagingLocation": "string",
    "subnetwork": "string",
    "tempLocation": "string",
    "workerRegion": "string",
    "workerZone": "string",
    "zone": "string"
  },
  "image": "string",
  "imageRepositoryCertPath": "string",
  "imageRepositoryPasswordSecretId": "string",
  "imageRepositoryUsernameSecretId": "string",
  "metadata": {
    "description": "string",
    "name": "string",
    "parameters": [
      {
        "customMetadata": {
          "property1": "string",
          "property2": "string"
        },
        "groupName": "string",
        "helpText": "string",
        "isOptional": true,
        "label": "string",
        "name": "string",
        "paramType": "DEFAULT",
        "parentName": "string",
        "parentTriggerValues": [
          "string"
        ],
        "regexes": [
          "string"
        ]
      }
    ]
  },
  "sdkInfo": {
    "language": "UNKNOWN",
    "version": "string"
  }
}
```

Container Spec.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultEnvironment|[FlexTemplateRuntimeEnvironment](#schemaflextemplateruntimeenvironment)|false|none|Default runtime environment for the job.|
|image|string|false|none|Name of the docker container image. E.g., gcr.io/project/some-image|
|imageRepositoryCertPath|string|false|none|Cloud Storage path to self-signed certificate of private registry.|
|imageRepositoryPasswordSecretId|string|false|none|Secret Manager secret id for password to authenticate to private registry.|
|imageRepositoryUsernameSecretId|string|false|none|Secret Manager secret id for username to authenticate to private registry.|
|metadata|[TemplateMetadata](#schematemplatemetadata)|false|none|Metadata describing a template including description and validation rules.|
|sdkInfo|[SDKInfo](#schemasdkinfo)|false|none|Required. SDK info of the Flex Template.|

<h2 id="tocS_CounterMetadata">CounterMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacountermetadata"></a>
<a id="schema_CounterMetadata"></a>
<a id="tocScountermetadata"></a>
<a id="tocscountermetadata"></a>

```json
{
  "description": "string",
  "kind": "INVALID",
  "otherUnits": "string",
  "standardUnits": "BYTES"
}
```

CounterMetadata includes all static non-name non-value counter attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Human-readable description of the counter semantics.|
|kind|string|false|none|Counter aggregation kind.|
|otherUnits|string|false|none|A string referring to the unit type.|
|standardUnits|string|false|none|System defined Units, see above enum.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|INVALID|
|kind|SUM|
|kind|MAX|
|kind|MIN|
|kind|MEAN|
|kind|OR|
|kind|AND|
|kind|SET|
|kind|DISTRIBUTION|
|kind|LATEST_VALUE|
|standardUnits|BYTES|
|standardUnits|BYTES_PER_SEC|
|standardUnits|MILLISECONDS|
|standardUnits|MICROSECONDS|
|standardUnits|NANOSECONDS|
|standardUnits|TIMESTAMP_MSEC|
|standardUnits|TIMESTAMP_USEC|
|standardUnits|TIMESTAMP_NSEC|

<h2 id="tocS_CounterStructuredName">CounterStructuredName</h2>
<!-- backwards compatibility -->
<a id="schemacounterstructuredname"></a>
<a id="schema_CounterStructuredName"></a>
<a id="tocScounterstructuredname"></a>
<a id="tocscounterstructuredname"></a>

```json
{
  "componentStepName": "string",
  "executionStepName": "string",
  "inputIndex": 0,
  "name": "string",
  "origin": "SYSTEM",
  "originNamespace": "string",
  "originalRequestingStepName": "string",
  "originalStepName": "string",
  "portion": "ALL",
  "workerId": "string"
}
```

Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentStepName|string|false|none|Name of the optimized step being executed by the workers.|
|executionStepName|string|false|none|Name of the stage. An execution step contains multiple component steps.|
|inputIndex|integer(int32)|false|none|Index of an input collection that's being read from/written to as a side input. The index identifies a step's side inputs starting by 1 (e.g. the first side input has input_index 1, the third has input_index 3). Side inputs are identified by a pair of (original_step_name, input_index). This field helps uniquely identify them.|
|name|string|false|none|Counter name. Not necessarily globally-unique, but unique within the context of the other fields. Required.|
|origin|string|false|none|One of the standard Origins defined above.|
|originNamespace|string|false|none|A string containing a more specific namespace of the counter's origin.|
|originalRequestingStepName|string|false|none|The step name requesting an operation, such as GBK. I.e. the ParDo causing a read/write from shuffle to occur, or a read from side inputs.|
|originalStepName|string|false|none|System generated name of the original step in the user's graph, before optimization.|
|portion|string|false|none|Portion of this counter, either key or value.|
|workerId|string|false|none|ID of a particular worker.|

#### Enumerated Values

|Property|Value|
|---|---|
|origin|SYSTEM|
|origin|USER|
|portion|ALL|
|portion|KEY|
|portion|VALUE|

<h2 id="tocS_CounterStructuredNameAndMetadata">CounterStructuredNameAndMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacounterstructurednameandmetadata"></a>
<a id="schema_CounterStructuredNameAndMetadata"></a>
<a id="tocScounterstructurednameandmetadata"></a>
<a id="tocscounterstructurednameandmetadata"></a>

```json
{
  "metadata": {
    "description": "string",
    "kind": "INVALID",
    "otherUnits": "string",
    "standardUnits": "BYTES"
  },
  "name": {
    "componentStepName": "string",
    "executionStepName": "string",
    "inputIndex": 0,
    "name": "string",
    "origin": "SYSTEM",
    "originNamespace": "string",
    "originalRequestingStepName": "string",
    "originalStepName": "string",
    "portion": "ALL",
    "workerId": "string"
  }
}
```

A single message which encapsulates structured name and metadata for a given counter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[CounterMetadata](#schemacountermetadata)|false|none|Metadata associated with a counter|
|name|[CounterStructuredName](#schemacounterstructuredname)|false|none|Structured name of the counter.|

<h2 id="tocS_CounterUpdate">CounterUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacounterupdate"></a>
<a id="schema_CounterUpdate"></a>
<a id="tocScounterupdate"></a>
<a id="tocscounterupdate"></a>

```json
{
  "boolean": true,
  "cumulative": true,
  "distribution": {
    "count": {
      "highBits": 0,
      "lowBits": 0
    },
    "histogram": {
      "bucketCounts": [
        "string"
      ],
      "firstBucketOffset": 0
    },
    "max": {
      "highBits": 0,
      "lowBits": 0
    },
    "min": {
      "highBits": 0,
      "lowBits": 0
    },
    "sum": {
      "highBits": 0,
      "lowBits": 0
    },
    "sumOfSquares": 0
  },
  "floatingPoint": 0,
  "floatingPointList": {
    "elements": [
      0
    ]
  },
  "floatingPointMean": {
    "count": {
      "highBits": 0,
      "lowBits": 0
    },
    "sum": 0
  },
  "integer": {
    "highBits": 0,
    "lowBits": 0
  },
  "integerGauge": {
    "timestamp": "string",
    "value": {
      "highBits": 0,
      "lowBits": 0
    }
  },
  "integerList": {
    "elements": [
      {
        "highBits": 0,
        "lowBits": 0
      }
    ]
  },
  "integerMean": {
    "count": {
      "highBits": 0,
      "lowBits": 0
    },
    "sum": {
      "highBits": 0,
      "lowBits": 0
    }
  },
  "internal": null,
  "nameAndKind": {
    "kind": "INVALID",
    "name": "string"
  },
  "shortId": "string",
  "stringList": {
    "elements": [
      "string"
    ]
  },
  "structuredNameAndMetadata": {
    "metadata": {
      "description": "string",
      "kind": "INVALID",
      "otherUnits": "string",
      "standardUnits": "BYTES"
    },
    "name": {
      "componentStepName": "string",
      "executionStepName": "string",
      "inputIndex": 0,
      "name": "string",
      "origin": "SYSTEM",
      "originNamespace": "string",
      "originalRequestingStepName": "string",
      "originalStepName": "string",
      "portion": "ALL",
      "workerId": "string"
    }
  }
}
```

An update to a Counter sent from a worker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boolean|boolean|false|none|Boolean value for And, Or.|
|cumulative|boolean|false|none|True if this counter is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this counter is reported as a delta.|
|distribution|[DistributionUpdate](#schemadistributionupdate)|false|none|Distribution data|
|floatingPoint|number(double)|false|none|Floating point value for Sum, Max, Min.|
|floatingPointList|[FloatingPointList](#schemafloatingpointlist)|false|none|List of floating point numbers, for Set.|
|floatingPointMean|[FloatingPointMean](#schemafloatingpointmean)|false|none|Floating point mean aggregation value for Mean.|
|integer|[SplitInt64](#schemasplitint64)|false|none|Integer value for Sum, Max, Min.|
|integerGauge|[IntegerGauge](#schemaintegergauge)|false|none|Gauge data|
|integerList|[IntegerList](#schemaintegerlist)|false|none|List of integers, for Set.|
|integerMean|[IntegerMean](#schemaintegermean)|false|none|Integer mean aggregation value for Mean.|
|internal|object|false|none|Value for internally-defined counters used by the Dataflow service.|
|nameAndKind|[NameAndKind](#schemanameandkind)|false|none|Counter name and aggregation type.|
|shortId|string(int64)|false|none|The service-generated short identifier for this counter. The short_id -> (name, metadata) mapping is constant for the lifetime of a job.|
|stringList|[StringList](#schemastringlist)|false|none|List of strings, for Set.|
|structuredNameAndMetadata|[CounterStructuredNameAndMetadata](#schemacounterstructurednameandmetadata)|false|none|Counter structured name and metadata.|

<h2 id="tocS_CreateJobFromTemplateRequest">CreateJobFromTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobfromtemplaterequest"></a>
<a id="schema_CreateJobFromTemplateRequest"></a>
<a id="tocScreatejobfromtemplaterequest"></a>
<a id="tocscreatejobfromtemplaterequest"></a>

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
  "gcsPath": "string",
  "jobName": "string",
  "location": "string",
  "parameters": {
    "property1": "string",
    "property2": "string"
  }
}
```

A request to create a Cloud Dataflow job from a template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|[RuntimeEnvironment](#schemaruntimeenvironment)|false|none|The runtime environment for the job.|
|gcsPath|string|false|none|Required. A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with `gs://`.|
|jobName|string|false|none|Required. The job name to use for the created job.|
|location|string|false|none|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.|
|parameters|object|false|none|The runtime parameters to pass to the job.|

<h2 id="tocS_CustomSourceLocation">CustomSourceLocation</h2>
<!-- backwards compatibility -->
<a id="schemacustomsourcelocation"></a>
<a id="schema_CustomSourceLocation"></a>
<a id="tocScustomsourcelocation"></a>
<a id="tocscustomsourcelocation"></a>

```json
{
  "stateful": true
}
```

Identifies the location of a custom souce.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateful|boolean|false|none|Whether this source is stateful.|

<h2 id="tocS_DataDiskAssignment">DataDiskAssignment</h2>
<!-- backwards compatibility -->
<a id="schemadatadiskassignment"></a>
<a id="schema_DataDiskAssignment"></a>
<a id="tocSdatadiskassignment"></a>
<a id="tocsdatadiskassignment"></a>

```json
{
  "dataDisks": [
    "string"
  ],
  "vmInstance": "string"
}
```

Data disk assignment for a given VM instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataDisks|[string]|false|none|Mounted data disks. The order is important a data disk's 0-based index in this list defines which persistent directory the disk is mounted to, for example the list of { "myproject-1014-104817-4c2-harness-0-disk-0" }, { "myproject-1014-104817-4c2-harness-0-disk-1" }.|
|vmInstance|string|false|none|VM instance name the data disks mounted to, for example "myproject-1014-104817-4c2-harness-0".|

<h2 id="tocS_DatastoreIODetails">DatastoreIODetails</h2>
<!-- backwards compatibility -->
<a id="schemadatastoreiodetails"></a>
<a id="schema_DatastoreIODetails"></a>
<a id="tocSdatastoreiodetails"></a>
<a id="tocsdatastoreiodetails"></a>

```json
{
  "namespace": "string",
  "projectId": "string"
}
```

Metadata for a Datastore connector used by the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespace|string|false|none|Namespace used in the connection.|
|projectId|string|false|none|ProjectId accessed in the connection.|

<h2 id="tocS_DebugOptions">DebugOptions</h2>
<!-- backwards compatibility -->
<a id="schemadebugoptions"></a>
<a id="schema_DebugOptions"></a>
<a id="tocSdebugoptions"></a>
<a id="tocsdebugoptions"></a>

```json
{
  "enableHotKeyLogging": true
}
```

Describes any options that have an effect on the debugging of pipelines.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableHotKeyLogging|boolean|false|none|When true, enables the logging of the literal hot key to the user's Cloud Logging.|

<h2 id="tocS_DeleteSnapshotResponse">DeleteSnapshotResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletesnapshotresponse"></a>
<a id="schema_DeleteSnapshotResponse"></a>
<a id="tocSdeletesnapshotresponse"></a>
<a id="tocsdeletesnapshotresponse"></a>

```json
{}
```

Response from deleting a snapshot.

<h2 id="tocS_DerivedSource">DerivedSource</h2>
<!-- backwards compatibility -->
<a id="schemaderivedsource"></a>
<a id="schema_DerivedSource"></a>
<a id="tocSderivedsource"></a>
<a id="tocsderivedsource"></a>

```json
{
  "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
  "source": {
    "baseSpecs": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "codec": {
      "property1": null,
      "property2": null
    },
    "doesNotNeedSplitting": true,
    "metadata": {
      "estimatedSizeBytes": "string",
      "infinite": true,
      "producesSortedKeys": true
    },
    "spec": {
      "property1": null,
      "property2": null
    }
  }
}
```

Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|derivationMode|string|false|none|What source to base the produced source on (if any).|
|source|[Source](#schemasource)|false|none|Specification of the source.|

#### Enumerated Values

|Property|Value|
|---|---|
|derivationMode|SOURCE_DERIVATION_MODE_UNKNOWN|
|derivationMode|SOURCE_DERIVATION_MODE_INDEPENDENT|
|derivationMode|SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT|
|derivationMode|SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT|

<h2 id="tocS_Disk">Disk</h2>
<!-- backwards compatibility -->
<a id="schemadisk"></a>
<a id="schema_Disk"></a>
<a id="tocSdisk"></a>
<a id="tocsdisk"></a>

```json
{
  "diskType": "string",
  "mountPoint": "string",
  "sizeGb": 0
}
```

Describes the data disk used by a workflow job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diskType|string|false|none|Disk storage type, as defined by Google Compute Engine. This must be a disk type appropriate to the project and zone in which the workers will run. If unknown or unspecified, the service will attempt to choose a reasonable default. For example, the standard persistent disk type is a resource name typically ending in "pd-standard". If SSD persistent disks are available, the resource name typically ends with "pd-ssd". The actual valid values are defined the Google Compute Engine API, not by the Cloud Dataflow API; consult the Google Compute Engine documentation for more information about determining the set of available disk types for a particular project and zone. Google Compute Engine Disk types are local to a particular project in a particular zone, and so the resource name will typically look something like this: compute.googleapis.com/projects/project-id/zones/zone/diskTypes/pd-standard|
|mountPoint|string|false|none|Directory in a VM where disk is mounted.|
|sizeGb|integer(int32)|false|none|Size of disk in GB. If zero or unspecified, the service will attempt to choose a reasonable default.|

<h2 id="tocS_DisplayData">DisplayData</h2>
<!-- backwards compatibility -->
<a id="schemadisplaydata"></a>
<a id="schema_DisplayData"></a>
<a id="tocSdisplaydata"></a>
<a id="tocsdisplaydata"></a>

```json
{
  "boolValue": true,
  "durationValue": "string",
  "floatValue": 0,
  "int64Value": "string",
  "javaClassValue": "string",
  "key": "string",
  "label": "string",
  "namespace": "string",
  "shortStrValue": "string",
  "strValue": "string",
  "timestampValue": "string",
  "url": "string"
}
```

Data provided with a pipeline or transform to provide descriptive info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boolValue|boolean|false|none|Contains value if the data is of a boolean type.|
|durationValue|string(google-duration)|false|none|Contains value if the data is of duration type.|
|floatValue|number(float)|false|none|Contains value if the data is of float type.|
|int64Value|string(int64)|false|none|Contains value if the data is of int64 type.|
|javaClassValue|string|false|none|Contains value if the data is of java class type.|
|key|string|false|none|The key identifying the display data. This is intended to be used as a label for the display data when viewed in a dax monitoring system.|
|label|string|false|none|An optional label to display in a dax UI for the element.|
|namespace|string|false|none|The namespace for the key. This is usually a class name or programming language namespace (i.e. python module) which defines the display data. This allows a dax monitoring system to specially handle the data and perform custom rendering.|
|shortStrValue|string|false|none|A possible additional shorter value to display. For example a java_class_name_value of com.mypackage.MyDoFn will be stored with MyDoFn as the short_str_value and com.mypackage.MyDoFn as the java_class_name value. short_str_value can be displayed and java_class_name_value will be displayed as a tooltip.|
|strValue|string|false|none|Contains value if the data is of string type.|
|timestampValue|string(google-datetime)|false|none|Contains value if the data is of timestamp type.|
|url|string|false|none|An optional full URL.|

<h2 id="tocS_DistributionUpdate">DistributionUpdate</h2>
<!-- backwards compatibility -->
<a id="schemadistributionupdate"></a>
<a id="schema_DistributionUpdate"></a>
<a id="tocSdistributionupdate"></a>
<a id="tocsdistributionupdate"></a>

```json
{
  "count": {
    "highBits": 0,
    "lowBits": 0
  },
  "histogram": {
    "bucketCounts": [
      "string"
    ],
    "firstBucketOffset": 0
  },
  "max": {
    "highBits": 0,
    "lowBits": 0
  },
  "min": {
    "highBits": 0,
    "lowBits": 0
  },
  "sum": {
    "highBits": 0,
    "lowBits": 0
  },
  "sumOfSquares": 0
}
```

A metric value representing a distribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[SplitInt64](#schemasplitint64)|false|none|The count of the number of elements present in the distribution.|
|histogram|[Histogram](#schemahistogram)|false|none|(Optional) Histogram of value counts for the distribution.|
|max|[SplitInt64](#schemasplitint64)|false|none|The maximum value present in the distribution.|
|min|[SplitInt64](#schemasplitint64)|false|none|The minimum value present in the distribution.|
|sum|[SplitInt64](#schemasplitint64)|false|none|Use an int64 since we'd prefer the added precision. If overflow is a common problem we can detect it and use an additional int64 or a double.|
|sumOfSquares|number(double)|false|none|Use a double since the sum of squares is likely to overflow int64.|

<h2 id="tocS_DynamicSourceSplit">DynamicSourceSplit</h2>
<!-- backwards compatibility -->
<a id="schemadynamicsourcesplit"></a>
<a id="schema_DynamicSourceSplit"></a>
<a id="tocSdynamicsourcesplit"></a>
<a id="tocsdynamicsourcesplit"></a>

```json
{
  "primary": {
    "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
    "source": {
      "baseSpecs": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "codec": {
        "property1": null,
        "property2": null
      },
      "doesNotNeedSplitting": true,
      "metadata": {
        "estimatedSizeBytes": "string",
        "infinite": true,
        "producesSortedKeys": true
      },
      "spec": {
        "property1": null,
        "property2": null
      }
    }
  },
  "residual": {
    "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
    "source": {
      "baseSpecs": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "codec": {
        "property1": null,
        "property2": null
      },
      "doesNotNeedSplitting": true,
      "metadata": {
        "estimatedSizeBytes": "string",
        "infinite": true,
        "producesSortedKeys": true
      },
      "spec": {
        "property1": null,
        "property2": null
      }
    }
  }
}
```

When a task splits using WorkItemStatus.dynamic_source_split, this message describes the two parts of the split relative to the description of the current task's input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primary|[DerivedSource](#schemaderivedsource)|false|none|Primary part (continued to be processed by worker). Specified relative to the previously-current source. Becomes current.|
|residual|[DerivedSource](#schemaderivedsource)|false|none|Residual part (returned to the pool of work). Specified relative to the previously-current source.|

<h2 id="tocS_Environment">Environment</h2>
<!-- backwards compatibility -->
<a id="schemaenvironment"></a>
<a id="schema_Environment"></a>
<a id="tocSenvironment"></a>
<a id="tocsenvironment"></a>

```json
{
  "clusterManagerApiService": "string",
  "dataset": "string",
  "debugOptions": {
    "enableHotKeyLogging": true
  },
  "experiments": [
    "string"
  ],
  "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
  "internalExperiments": {
    "property1": null,
    "property2": null
  },
  "sdkPipelineOptions": {
    "property1": null,
    "property2": null
  },
  "serviceAccountEmail": "string",
  "serviceKmsKeyName": "string",
  "serviceOptions": [
    "string"
  ],
  "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
  "tempStoragePrefix": "string",
  "userAgent": {
    "property1": null,
    "property2": null
  },
  "version": {
    "property1": null,
    "property2": null
  },
  "workerPools": [
    {
      "autoscalingSettings": {
        "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
        "maxNumWorkers": 0
      },
      "dataDisks": [
        {
          "diskType": "string",
          "mountPoint": "string",
          "sizeGb": 0
        }
      ],
      "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
      "diskSizeGb": 0,
      "diskSourceImage": "string",
      "diskType": "string",
      "ipConfiguration": "WORKER_IP_UNSPECIFIED",
      "kind": "string",
      "machineType": "string",
      "metadata": {
        "property1": "string",
        "property2": "string"
      },
      "network": "string",
      "numThreadsPerWorker": 0,
      "numWorkers": 0,
      "onHostMaintenance": "string",
      "packages": [
        {
          "location": "string",
          "name": "string"
        }
      ],
      "poolArgs": {
        "property1": null,
        "property2": null
      },
      "sdkHarnessContainerImages": [
        {
          "capabilities": [
            "string"
          ],
          "containerImage": "string",
          "environmentId": "string",
          "useSingleCorePerContainer": true
        }
      ],
      "subnetwork": "string",
      "taskrunnerSettings": {
        "alsologtostderr": true,
        "baseTaskDir": "string",
        "baseUrl": "string",
        "commandlinesFileName": "string",
        "continueOnException": true,
        "dataflowApiVersion": "string",
        "harnessCommand": "string",
        "languageHint": "string",
        "logDir": "string",
        "logToSerialconsole": true,
        "logUploadLocation": "string",
        "oauthScopes": [
          "string"
        ],
        "parallelWorkerSettings": {
          "baseUrl": "string",
          "reportingEnabled": true,
          "servicePath": "string",
          "shuffleServicePath": "string",
          "tempStoragePrefix": "string",
          "workerId": "string"
        },
        "streamingWorkerMainClass": "string",
        "taskGroup": "string",
        "taskUser": "string",
        "tempStoragePrefix": "string",
        "vmId": "string",
        "workflowFileName": "string"
      },
      "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
      "workerHarnessContainerImage": "string",
      "zone": "string"
    }
  ],
  "workerRegion": "string",
  "workerZone": "string"
}
```

Describes the environment in which a Dataflow Job runs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clusterManagerApiService|string|false|none|The type of cluster manager API to use. If unknown or unspecified, the service will attempt to choose a reasonable default. This should be in the form of the API service name, e.g. "compute.googleapis.com".|
|dataset|string|false|none|The dataset for the current project where various workflow related tables are stored. The supported resource type is: Google BigQuery: bigquery.googleapis.com/{dataset}|
|debugOptions|[DebugOptions](#schemadebugoptions)|false|none|Any debugging options to be supplied to the job.|
|experiments|[string]|false|none|The list of experiments to enable. This field should be used for SDK related experiments and not for service related experiments. The proper field for service related experiments is service_options.|
|flexResourceSchedulingGoal|string|false|none|Which Flexible Resource Scheduling mode to run in.|
|internalExperiments|object|false|none|Experimental settings.|
|sdkPipelineOptions|object|false|none|The Cloud Dataflow SDK pipeline options specified by the user. These options are passed through the service and are used to recreate the SDK pipeline options on the worker in a language agnostic and platform independent way.|
|serviceAccountEmail|string|false|none|Identity to run virtual machines as. Defaults to the default account.|
|serviceKmsKeyName|string|false|none|If set, contains the Cloud KMS key identifier used to encrypt data at rest, AKA a Customer Managed Encryption Key (CMEK). Format: projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY|
|serviceOptions|[string]|false|none|The list of service options to enable. This field should be used for service related experiments only. These experiments, when graduating to GA, should be replaced by dedicated fields or become default (i.e. always on).|
|shuffleMode|string|false|read-only|Output only. The shuffle mode used for the job.|
|tempStoragePrefix|string|false|none|The prefix of the resources the system should use for temporary storage. The system will append the suffix "/temp-{JOBNAME} to this resource prefix, where {JOBNAME} is the value of the job_name field. The resulting bucket and object prefix is used as the prefix of the resources used to store temporary data needed during the job execution. NOTE: This will override the value in taskrunner_settings. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}|
|userAgent|object|false|none|A description of the process that generated the request.|
|version|object|false|none|A structure describing which components and their versions of the service are required in order to run the job.|
|workerPools|[[WorkerPool](#schemaworkerpool)]|false|none|The worker pools. At least one "harness" worker pool must be specified in order for the job to have workers.|
|workerRegion|string|false|none|The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region.|
|workerZone|string|false|none|The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity.|

#### Enumerated Values

|Property|Value|
|---|---|
|flexResourceSchedulingGoal|FLEXRS_UNSPECIFIED|
|flexResourceSchedulingGoal|FLEXRS_SPEED_OPTIMIZED|
|flexResourceSchedulingGoal|FLEXRS_COST_OPTIMIZED|
|shuffleMode|SHUFFLE_MODE_UNSPECIFIED|
|shuffleMode|VM_BASED|
|shuffleMode|SERVICE_BASED|

<h2 id="tocS_ExecutionStageState">ExecutionStageState</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionstagestate"></a>
<a id="schema_ExecutionStageState"></a>
<a id="tocSexecutionstagestate"></a>
<a id="tocsexecutionstagestate"></a>

```json
{
  "currentStateTime": "string",
  "executionStageName": "string",
  "executionStageState": "JOB_STATE_UNKNOWN"
}
```

A message describing the state of a particular execution stage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentStateTime|string(google-datetime)|false|none|The time at which the stage transitioned to this state.|
|executionStageName|string|false|none|The name of the execution stage.|
|executionStageState|string|false|none|Executions stage states allow the same set of values as JobState.|

#### Enumerated Values

|Property|Value|
|---|---|
|executionStageState|JOB_STATE_UNKNOWN|
|executionStageState|JOB_STATE_STOPPED|
|executionStageState|JOB_STATE_RUNNING|
|executionStageState|JOB_STATE_DONE|
|executionStageState|JOB_STATE_FAILED|
|executionStageState|JOB_STATE_CANCELLED|
|executionStageState|JOB_STATE_UPDATED|
|executionStageState|JOB_STATE_DRAINING|
|executionStageState|JOB_STATE_DRAINED|
|executionStageState|JOB_STATE_PENDING|
|executionStageState|JOB_STATE_CANCELLING|
|executionStageState|JOB_STATE_QUEUED|
|executionStageState|JOB_STATE_RESOURCE_CLEANING_UP|

<h2 id="tocS_ExecutionStageSummary">ExecutionStageSummary</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionstagesummary"></a>
<a id="schema_ExecutionStageSummary"></a>
<a id="tocSexecutionstagesummary"></a>
<a id="tocsexecutionstagesummary"></a>

```json
{
  "componentSource": [
    {
      "name": "string",
      "originalTransformOrCollection": "string",
      "userName": "string"
    }
  ],
  "componentTransform": [
    {
      "name": "string",
      "originalTransform": "string",
      "userName": "string"
    }
  ],
  "id": "string",
  "inputSource": [
    {
      "name": "string",
      "originalTransformOrCollection": "string",
      "sizeBytes": "string",
      "userName": "string"
    }
  ],
  "kind": "UNKNOWN_KIND",
  "name": "string",
  "outputSource": [
    {
      "name": "string",
      "originalTransformOrCollection": "string",
      "sizeBytes": "string",
      "userName": "string"
    }
  ],
  "prerequisiteStage": [
    "string"
  ]
}
```

Description of the composing transforms, names/ids, and input/outputs of a stage of execution. Some composing transforms and sources may have been generated by the Dataflow service during execution planning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentSource|[[ComponentSource](#schemacomponentsource)]|false|none|Collections produced and consumed by component transforms of this stage.|
|componentTransform|[[ComponentTransform](#schemacomponenttransform)]|false|none|Transforms that comprise this execution stage.|
|id|string|false|none|Dataflow service generated id for this stage.|
|inputSource|[[StageSource](#schemastagesource)]|false|none|Input sources for this stage.|
|kind|string|false|none|Type of transform this stage is executing.|
|name|string|false|none|Dataflow service generated name for this stage.|
|outputSource|[[StageSource](#schemastagesource)]|false|none|Output sources for this stage.|
|prerequisiteStage|[string]|false|none|Other stages that must complete before this stage can run.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|UNKNOWN_KIND|
|kind|PAR_DO_KIND|
|kind|GROUP_BY_KEY_KIND|
|kind|FLATTEN_KIND|
|kind|READ_KIND|
|kind|WRITE_KIND|
|kind|CONSTANT_KIND|
|kind|SINGLETON_KIND|
|kind|SHUFFLE_KIND|

<h2 id="tocS_FailedLocation">FailedLocation</h2>
<!-- backwards compatibility -->
<a id="schemafailedlocation"></a>
<a id="schema_FailedLocation"></a>
<a id="tocSfailedlocation"></a>
<a id="tocsfailedlocation"></a>

```json
{
  "name": "string"
}
```

Indicates which [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) failed to respond to a request for data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that failed to respond.|

<h2 id="tocS_FileIODetails">FileIODetails</h2>
<!-- backwards compatibility -->
<a id="schemafileiodetails"></a>
<a id="schema_FileIODetails"></a>
<a id="tocSfileiodetails"></a>
<a id="tocsfileiodetails"></a>

```json
{
  "filePattern": "string"
}
```

Metadata for a File connector used by the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePattern|string|false|none|File Pattern used to access files by the connector.|

<h2 id="tocS_FlattenInstruction">FlattenInstruction</h2>
<!-- backwards compatibility -->
<a id="schemaflatteninstruction"></a>
<a id="schema_FlattenInstruction"></a>
<a id="tocSflatteninstruction"></a>
<a id="tocsflatteninstruction"></a>

```json
{
  "inputs": [
    {
      "outputNum": 0,
      "producerInstructionIndex": 0
    }
  ]
}
```

An instruction that copies its inputs (zero or more) to its (single) output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[InstructionInput](#schemainstructioninput)]|false|none|Describes the inputs to the flatten instruction.|

<h2 id="tocS_FlexTemplateRuntimeEnvironment">FlexTemplateRuntimeEnvironment</h2>
<!-- backwards compatibility -->
<a id="schemaflextemplateruntimeenvironment"></a>
<a id="schema_FlexTemplateRuntimeEnvironment"></a>
<a id="tocSflextemplateruntimeenvironment"></a>
<a id="tocsflextemplateruntimeenvironment"></a>

```json
{
  "additionalExperiments": [
    "string"
  ],
  "additionalUserLabels": {
    "property1": "string",
    "property2": "string"
  },
  "autoscalingAlgorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
  "diskSizeGb": 0,
  "dumpHeapOnOom": true,
  "enableLauncherVmSerialPortLogging": true,
  "enableStreamingEngine": true,
  "flexrsGoal": "FLEXRS_UNSPECIFIED",
  "ipConfiguration": "WORKER_IP_UNSPECIFIED",
  "kmsKeyName": "string",
  "launcherMachineType": "string",
  "machineType": "string",
  "maxWorkers": 0,
  "network": "string",
  "numWorkers": 0,
  "saveHeapDumpsToGcsPath": "string",
  "sdkContainerImage": "string",
  "serviceAccountEmail": "string",
  "stagingLocation": "string",
  "subnetwork": "string",
  "tempLocation": "string",
  "workerRegion": "string",
  "workerZone": "string",
  "zone": "string"
}
```

The environment values to be set at runtime for flex template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalExperiments|[string]|false|none|Additional experiment flags for the job.|
|additionalUserLabels|object|false|none|Additional user labels to be specified for the job. Keys and values must follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }.|
|autoscalingAlgorithm|string|false|none|The algorithm to use for autoscaling|
|diskSizeGb|integer(int32)|false|none|Worker disk size, in gigabytes.|
|dumpHeapOnOom|boolean|false|none|If true, when processing time is spent almost entirely on garbage collection (GC), saves a heap dump before ending the thread or process. If false, ends the thread or process without saving a heap dump. Does not save a heap dump when the Java Virtual Machine (JVM) has an out of memory error during processing. The location of the heap file is either echoed back to the user, or the user is given the opportunity to download the heap file.|
|enableLauncherVmSerialPortLogging|boolean|false|none|If true serial port logging will be enabled for the launcher VM.|
|enableStreamingEngine|boolean|false|none|Whether to enable Streaming Engine for the job.|
|flexrsGoal|string|false|none|Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs|
|ipConfiguration|string|false|none|Configuration for VM IPs.|
|kmsKeyName|string|false|none|Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/|
|launcherMachineType|string|false|none|The machine type to use for launching the job. The default is n1-standard-1.|
|machineType|string|false|none|The machine type to use for the job. Defaults to the value from the template if not specified.|
|maxWorkers|integer(int32)|false|none|The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.|
|network|string|false|none|Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".|
|numWorkers|integer(int32)|false|none|The initial number of Google Compute Engine instances for the job.|
|saveHeapDumpsToGcsPath|string|false|none|Cloud Storage bucket (directory) to upload heap dumps to. Enabling this field implies that `dump_heap_on_oom` is set to true.|
|sdkContainerImage|string|false|none|Docker registry location of container image to use for the 'worker harness. Default is the container for the version of the SDK. Note this field is only valid for portable pipelines.|
|serviceAccountEmail|string|false|none|The email address of the service account to run the job as.|
|stagingLocation|string|false|none|The Cloud Storage path for staging local files. Must be a valid Cloud Storage URL, beginning with `gs://`.|
|subnetwork|string|false|none|Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.|
|tempLocation|string|false|none|The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`.|
|workerRegion|string|false|none|The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region.|
|workerZone|string|false|none|The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence.|
|zone|string|false|none|The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence.|

#### Enumerated Values

|Property|Value|
|---|---|
|autoscalingAlgorithm|AUTOSCALING_ALGORITHM_UNKNOWN|
|autoscalingAlgorithm|AUTOSCALING_ALGORITHM_NONE|
|autoscalingAlgorithm|AUTOSCALING_ALGORITHM_BASIC|
|flexrsGoal|FLEXRS_UNSPECIFIED|
|flexrsGoal|FLEXRS_SPEED_OPTIMIZED|
|flexrsGoal|FLEXRS_COST_OPTIMIZED|
|ipConfiguration|WORKER_IP_UNSPECIFIED|
|ipConfiguration|WORKER_IP_PUBLIC|
|ipConfiguration|WORKER_IP_PRIVATE|

<h2 id="tocS_FloatingPointList">FloatingPointList</h2>
<!-- backwards compatibility -->
<a id="schemafloatingpointlist"></a>
<a id="schema_FloatingPointList"></a>
<a id="tocSfloatingpointlist"></a>
<a id="tocsfloatingpointlist"></a>

```json
{
  "elements": [
    0
  ]
}
```

A metric value representing a list of floating point numbers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[number(double)]|false|none|Elements of the list.|

<h2 id="tocS_FloatingPointMean">FloatingPointMean</h2>
<!-- backwards compatibility -->
<a id="schemafloatingpointmean"></a>
<a id="schema_FloatingPointMean"></a>
<a id="tocSfloatingpointmean"></a>
<a id="tocsfloatingpointmean"></a>

```json
{
  "count": {
    "highBits": 0,
    "lowBits": 0
  },
  "sum": 0
}
```

A representation of a floating point mean metric contribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[SplitInt64](#schemasplitint64)|false|none|The number of values being aggregated.|
|sum|number(double)|false|none|The sum of all values being aggregated.|

<h2 id="tocS_GetDebugConfigRequest">GetDebugConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdebugconfigrequest"></a>
<a id="schema_GetDebugConfigRequest"></a>
<a id="tocSgetdebugconfigrequest"></a>
<a id="tocsgetdebugconfigrequest"></a>

```json
{
  "componentId": "string",
  "location": "string",
  "workerId": "string"
}
```

Request to get updated debug configuration for component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentId|string|false|none|The internal component id for which debug configuration is requested.|
|location|string|false|none|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.|
|workerId|string|false|none|The worker id, i.e., VM hostname.|

<h2 id="tocS_GetDebugConfigResponse">GetDebugConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdebugconfigresponse"></a>
<a id="schema_GetDebugConfigResponse"></a>
<a id="tocSgetdebugconfigresponse"></a>
<a id="tocsgetdebugconfigresponse"></a>

```json
{
  "config": "string"
}
```

Response to a get debug configuration request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|string|false|none|The encoded debug configuration for the requested component.|

<h2 id="tocS_GetTemplateResponse">GetTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagettemplateresponse"></a>
<a id="schema_GetTemplateResponse"></a>
<a id="tocSgettemplateresponse"></a>
<a id="tocsgettemplateresponse"></a>

```json
{
  "metadata": {
    "description": "string",
    "name": "string",
    "parameters": [
      {
        "customMetadata": {
          "property1": "string",
          "property2": "string"
        },
        "groupName": "string",
        "helpText": "string",
        "isOptional": true,
        "label": "string",
        "name": "string",
        "paramType": "DEFAULT",
        "parentName": "string",
        "parentTriggerValues": [
          "string"
        ],
        "regexes": [
          "string"
        ]
      }
    ]
  },
  "runtimeMetadata": {
    "parameters": [
      {
        "customMetadata": {
          "property1": "string",
          "property2": "string"
        },
        "groupName": "string",
        "helpText": "string",
        "isOptional": true,
        "label": "string",
        "name": "string",
        "paramType": "DEFAULT",
        "parentName": "string",
        "parentTriggerValues": [
          "string"
        ],
        "regexes": [
          "string"
        ]
      }
    ],
    "sdkInfo": {
      "language": "UNKNOWN",
      "version": "string"
    }
  },
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
  "templateType": "UNKNOWN"
}
```

The response to a GetTemplate request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[TemplateMetadata](#schematemplatemetadata)|false|none|The template metadata describing the template name, available parameters, etc.|
|runtimeMetadata|[RuntimeMetadata](#schemaruntimemetadata)|false|none|Describes the runtime metadata with SDKInfo and available parameters.|
|status|[Status](#schemastatus)|false|none|The status of the get template request. Any problems with the request will be indicated in the error_details.|
|templateType|string|false|none|Template Type.|

#### Enumerated Values

|Property|Value|
|---|---|
|templateType|UNKNOWN|
|templateType|LEGACY|
|templateType|FLEX|

<h2 id="tocS_Histogram">Histogram</h2>
<!-- backwards compatibility -->
<a id="schemahistogram"></a>
<a id="schema_Histogram"></a>
<a id="tocShistogram"></a>
<a id="tocshistogram"></a>

```json
{
  "bucketCounts": [
    "string"
  ],
  "firstBucketOffset": 0
}
```

Histogram of value counts for a distribution. Buckets have an inclusive lower bound and exclusive upper bound and use "1,2,5 bucketing": The first bucket range is from [0,1) and all subsequent bucket boundaries are powers of ten multiplied by 1, 2, or 5. Thus, bucket boundaries are 0, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, ... Negative values are not supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucketCounts|[string(int64)]|false|none|Counts of values in each bucket. For efficiency, prefix and trailing buckets with count = 0 are elided. Buckets can store the full range of values of an unsigned long, with ULLONG_MAX falling into the 59th bucket with range [1e19, 2e19).|
|firstBucketOffset|integer(int32)|false|none|Starting index of first stored bucket. The non-inclusive upper-bound of the ith bucket is given by: pow(10,(i-first_bucket_offset)/3) * (1,2,5)[(i-first_bucket_offset)%3]|

<h2 id="tocS_HotKeyDebuggingInfo">HotKeyDebuggingInfo</h2>
<!-- backwards compatibility -->
<a id="schemahotkeydebugginginfo"></a>
<a id="schema_HotKeyDebuggingInfo"></a>
<a id="tocShotkeydebugginginfo"></a>
<a id="tocshotkeydebugginginfo"></a>

```json
{
  "detectedHotKeys": {
    "property1": {
      "hotKeyAge": "string",
      "key": "string",
      "keyTruncated": true
    },
    "property2": {
      "hotKeyAge": "string",
      "key": "string",
      "keyTruncated": true
    }
  }
}
```

Information useful for debugging a hot key detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedHotKeys|object|false|none|Debugging information for each detected hot key. Keyed by a hash of the key.|

<h2 id="tocS_HotKeyDetection">HotKeyDetection</h2>
<!-- backwards compatibility -->
<a id="schemahotkeydetection"></a>
<a id="schema_HotKeyDetection"></a>
<a id="tocShotkeydetection"></a>
<a id="tocshotkeydetection"></a>

```json
{
  "hotKeyAge": "string",
  "systemName": "string",
  "userStepName": "string"
}
```

Proto describing a hot key detected on a given WorkItem.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hotKeyAge|string(google-duration)|false|none|The age of the hot key measured from when it was first detected.|
|systemName|string|false|none|System-defined name of the step containing this hot key. Unique across the workflow.|
|userStepName|string|false|none|User-provided name of the step that contains this hot key.|

<h2 id="tocS_HotKeyInfo">HotKeyInfo</h2>
<!-- backwards compatibility -->
<a id="schemahotkeyinfo"></a>
<a id="schema_HotKeyInfo"></a>
<a id="tocShotkeyinfo"></a>
<a id="tocshotkeyinfo"></a>

```json
{
  "hotKeyAge": "string",
  "key": "string",
  "keyTruncated": true
}
```

Information about a hot key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hotKeyAge|string(google-duration)|false|none|The age of the hot key measured from when it was first detected.|
|key|string|false|none|A detected hot key that is causing limited parallelism. This field will be populated only if the following flag is set to true: "--enable_hot_key_logging".|
|keyTruncated|boolean|false|none|If true, then the above key is truncated and cannot be deserialized. This occurs if the key above is populated and the key size is >5MB.|

<h2 id="tocS_InstructionInput">InstructionInput</h2>
<!-- backwards compatibility -->
<a id="schemainstructioninput"></a>
<a id="schema_InstructionInput"></a>
<a id="tocSinstructioninput"></a>
<a id="tocsinstructioninput"></a>

```json
{
  "outputNum": 0,
  "producerInstructionIndex": 0
}
```

An input of an instruction, as a reference to an output of a producer instruction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputNum|integer(int32)|false|none|The output index (origin zero) within the producer.|
|producerInstructionIndex|integer(int32)|false|none|The index (origin zero) of the parallel instruction that produces the output to be consumed by this input. This index is relative to the list of instructions in this input's instruction's containing MapTask.|

<h2 id="tocS_InstructionOutput">InstructionOutput</h2>
<!-- backwards compatibility -->
<a id="schemainstructionoutput"></a>
<a id="schema_InstructionOutput"></a>
<a id="tocSinstructionoutput"></a>
<a id="tocsinstructionoutput"></a>

```json
{
  "codec": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "onlyCountKeyBytes": true,
  "onlyCountValueBytes": true,
  "originalName": "string",
  "systemName": "string"
}
```

An output of an instruction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codec|object|false|none|The codec to use to encode data being written via this output.|
|name|string|false|none|The user-provided name of this output.|
|onlyCountKeyBytes|boolean|false|none|For system-generated byte and mean byte metrics, certain instructions should only report the key size.|
|onlyCountValueBytes|boolean|false|none|For system-generated byte and mean byte metrics, certain instructions should only report the value size.|
|originalName|string|false|none|System-defined name for this output in the original workflow graph. Outputs that do not contribute to an original instruction do not set this.|
|systemName|string|false|none|System-defined name of this output. Unique across the workflow.|

<h2 id="tocS_IntegerGauge">IntegerGauge</h2>
<!-- backwards compatibility -->
<a id="schemaintegergauge"></a>
<a id="schema_IntegerGauge"></a>
<a id="tocSintegergauge"></a>
<a id="tocsintegergauge"></a>

```json
{
  "timestamp": "string",
  "value": {
    "highBits": 0,
    "lowBits": 0
  }
}
```

A metric value representing temporal values of a variable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string(google-datetime)|false|none|The time at which this value was measured. Measured as msecs from epoch.|
|value|[SplitInt64](#schemasplitint64)|false|none|The value of the variable represented by this gauge.|

<h2 id="tocS_IntegerList">IntegerList</h2>
<!-- backwards compatibility -->
<a id="schemaintegerlist"></a>
<a id="schema_IntegerList"></a>
<a id="tocSintegerlist"></a>
<a id="tocsintegerlist"></a>

```json
{
  "elements": [
    {
      "highBits": 0,
      "lowBits": 0
    }
  ]
}
```

A metric value representing a list of integers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[[SplitInt64](#schemasplitint64)]|false|none|Elements of the list.|

<h2 id="tocS_IntegerMean">IntegerMean</h2>
<!-- backwards compatibility -->
<a id="schemaintegermean"></a>
<a id="schema_IntegerMean"></a>
<a id="tocSintegermean"></a>
<a id="tocsintegermean"></a>

```json
{
  "count": {
    "highBits": 0,
    "lowBits": 0
  },
  "sum": {
    "highBits": 0,
    "lowBits": 0
  }
}
```

A representation of an integer mean metric contribution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|[SplitInt64](#schemasplitint64)|false|none|The number of values being aggregated.|
|sum|[SplitInt64](#schemasplitint64)|false|none|The sum of all values being aggregated.|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "clientRequestId": "string",
  "createTime": "string",
  "createdFromSnapshotId": "string",
  "currentState": "JOB_STATE_UNKNOWN",
  "currentStateTime": "string",
  "environment": {
    "clusterManagerApiService": "string",
    "dataset": "string",
    "debugOptions": {
      "enableHotKeyLogging": true
    },
    "experiments": [
      "string"
    ],
    "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
    "internalExperiments": {
      "property1": null,
      "property2": null
    },
    "sdkPipelineOptions": {
      "property1": null,
      "property2": null
    },
    "serviceAccountEmail": "string",
    "serviceKmsKeyName": "string",
    "serviceOptions": [
      "string"
    ],
    "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
    "tempStoragePrefix": "string",
    "userAgent": {
      "property1": null,
      "property2": null
    },
    "version": {
      "property1": null,
      "property2": null
    },
    "workerPools": [
      {
        "autoscalingSettings": {
          "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
          "maxNumWorkers": 0
        },
        "dataDisks": [
          {
            "diskType": "string",
            "mountPoint": "string",
            "sizeGb": 0
          }
        ],
        "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
        "diskSizeGb": 0,
        "diskSourceImage": "string",
        "diskType": "string",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kind": "string",
        "machineType": "string",
        "metadata": {
          "property1": "string",
          "property2": "string"
        },
        "network": "string",
        "numThreadsPerWorker": 0,
        "numWorkers": 0,
        "onHostMaintenance": "string",
        "packages": [
          {
            "location": "string",
            "name": "string"
          }
        ],
        "poolArgs": {
          "property1": null,
          "property2": null
        },
        "sdkHarnessContainerImages": [
          {
            "capabilities": [
              "string"
            ],
            "containerImage": "string",
            "environmentId": "string",
            "useSingleCorePerContainer": true
          }
        ],
        "subnetwork": "string",
        "taskrunnerSettings": {
          "alsologtostderr": true,
          "baseTaskDir": "string",
          "baseUrl": "string",
          "commandlinesFileName": "string",
          "continueOnException": true,
          "dataflowApiVersion": "string",
          "harnessCommand": "string",
          "languageHint": "string",
          "logDir": "string",
          "logToSerialconsole": true,
          "logUploadLocation": "string",
          "oauthScopes": [
            "string"
          ],
          "parallelWorkerSettings": {
            "baseUrl": "string",
            "reportingEnabled": true,
            "servicePath": "string",
            "shuffleServicePath": "string",
            "tempStoragePrefix": "string",
            "workerId": "string"
          },
          "streamingWorkerMainClass": "string",
          "taskGroup": "string",
          "taskUser": "string",
          "tempStoragePrefix": "string",
          "vmId": "string",
          "workflowFileName": "string"
        },
        "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
        "workerHarnessContainerImage": "string",
        "zone": "string"
      }
    ],
    "workerRegion": "string",
    "workerZone": "string"
  },
  "executionInfo": {
    "stages": {
      "property1": {
        "stepName": [
          "string"
        ]
      },
      "property2": {
        "stepName": [
          "string"
        ]
      }
    }
  },
  "id": "string",
  "jobMetadata": {
    "bigTableDetails": [
      {
        "instanceId": "string",
        "projectId": "string",
        "tableId": "string"
      }
    ],
    "bigqueryDetails": [
      {
        "dataset": "string",
        "projectId": "string",
        "query": "string",
        "table": "string"
      }
    ],
    "datastoreDetails": [
      {
        "namespace": "string",
        "projectId": "string"
      }
    ],
    "fileDetails": [
      {
        "filePattern": "string"
      }
    ],
    "pubsubDetails": [
      {
        "subscription": "string",
        "topic": "string"
      }
    ],
    "sdkVersion": {
      "sdkSupportStatus": "UNKNOWN",
      "version": "string",
      "versionDisplayName": "string"
    },
    "spannerDetails": [
      {
        "databaseId": "string",
        "instanceId": "string",
        "projectId": "string"
      }
    ],
    "userDisplayProperties": {
      "property1": "string",
      "property2": "string"
    }
  },
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "location": "string",
  "name": "string",
  "pipelineDescription": {
    "displayData": [
      {
        "boolValue": true,
        "durationValue": "string",
        "floatValue": 0,
        "int64Value": "string",
        "javaClassValue": "string",
        "key": "string",
        "label": "string",
        "namespace": "string",
        "shortStrValue": "string",
        "strValue": "string",
        "timestampValue": "string",
        "url": "string"
      }
    ],
    "executionPipelineStage": [
      {
        "componentSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "userName": "string"
          }
        ],
        "componentTransform": [
          {
            "name": "string",
            "originalTransform": "string",
            "userName": "string"
          }
        ],
        "id": "string",
        "inputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputSource": [
          {
            "name": "string",
            "originalTransformOrCollection": "string",
            "sizeBytes": "string",
            "userName": "string"
          }
        ],
        "prerequisiteStage": [
          "string"
        ]
      }
    ],
    "originalPipelineTransform": [
      {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "id": "string",
        "inputCollectionName": [
          "string"
        ],
        "kind": "UNKNOWN_KIND",
        "name": "string",
        "outputCollectionName": [
          "string"
        ]
      }
    ],
    "stepNamesHash": "string"
  },
  "projectId": "string",
  "replaceJobId": "string",
  "replacedByJobId": "string",
  "requestedState": "JOB_STATE_UNKNOWN",
  "satisfiesPzs": true,
  "stageStates": [
    {
      "currentStateTime": "string",
      "executionStageName": "string",
      "executionStageState": "JOB_STATE_UNKNOWN"
    }
  ],
  "startTime": "string",
  "steps": [
    {
      "kind": "string",
      "name": "string",
      "properties": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "stepsLocation": "string",
  "tempFiles": [
    "string"
  ],
  "transformNameMapping": {
    "property1": "string",
    "property2": "string"
  },
  "type": "JOB_TYPE_UNKNOWN"
}
```

Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientRequestId|string|false|none|The client's unique identifier of the job, re-used across retried attempts. If this field is set, the service will ensure its uniqueness. The request to create a job will fail if the service has knowledge of a previously submitted job with the same client's ID and job name. The caller may use this field to ensure idempotence of job creation across retried attempts to create a job. By default, the field is empty and, in that case, the service ignores it.|
|createTime|string(google-datetime)|false|none|The timestamp when the job was initially created. Immutable and set by the Cloud Dataflow service.|
|createdFromSnapshotId|string|false|none|If this is specified, the job's initial state is populated from the given snapshot.|
|currentState|string|false|none|The current state of the job. Jobs are created in the `JOB_STATE_STOPPED` state unless otherwise specified. A job in the `JOB_STATE_RUNNING` state may asynchronously enter a terminal state. After a job has reached a terminal state, no further state updates may be made. This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.|
|currentStateTime|string(google-datetime)|false|none|The timestamp associated with the current state.|
|environment|[Environment](#schemaenvironment)|false|none|The environment for the job.|
|executionInfo|[JobExecutionInfo](#schemajobexecutioninfo)|false|none|Deprecated.|
|id|string|false|none|The unique ID of this job. This field is set by the Cloud Dataflow service when the Job is created, and is immutable for the life of the job.|
|jobMetadata|[JobMetadata](#schemajobmetadata)|false|none|This field is populated by the Dataflow service to support filtering jobs by the metadata values provided here. Populated for ListJobs and all GetJob views SUMMARY and higher.|
|labels|object|false|none|User-defined labels for this job. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: * Keys must conform to regexp: \p{Ll}\p{Lo}{0,62} * Values must conform to regexp: [\p{Ll}\p{Lo}\p{N}_-]{0,63} * Both keys and values are additionally constrained to be <= 128 bytes in size.|
|location|string|false|none|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.|
|name|string|false|none|The user-specified Cloud Dataflow job name. Only one Job with a given name can exist in a project within one region at any given time. Jobs in different regions can have the same name. If a caller attempts to create a Job with the same name as an already-existing Job, the attempt returns the existing Job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?`|
|pipelineDescription|[PipelineDescription](#schemapipelinedescription)|false|none|Preliminary field: The format of this data may change at any time. A description of the user pipeline and stages through which it is executed. Created by Cloud Dataflow service. Only retrieved with JOB_VIEW_DESCRIPTION or JOB_VIEW_ALL.|
|projectId|string|false|none|The ID of the Cloud Platform project that the job belongs to.|
|replaceJobId|string|false|none|If this job is an update of an existing job, this field is the job ID of the job it replaced. When sending a `CreateJobRequest`, you can update a job by specifying it here. The job named here is stopped, and its intermediate state is transferred to this job.|
|replacedByJobId|string|false|none|If another job is an update of this job (and thus, this job is in `JOB_STATE_UPDATED`), this field contains the ID of that job.|
|requestedState|string|false|none|The job's requested state. `UpdateJob` may be used to switch between the `JOB_STATE_STOPPED` and `JOB_STATE_RUNNING` states, by setting requested_state. `UpdateJob` may also be used to directly set a job's requested state to `JOB_STATE_CANCELLED` or `JOB_STATE_DONE`, irrevocably terminating the job if it has not already reached a terminal state.|
|satisfiesPzs|boolean|false|none|Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.|
|stageStates|[[ExecutionStageState](#schemaexecutionstagestate)]|false|none|This field may be mutated by the Cloud Dataflow service; callers cannot mutate it.|
|startTime|string(google-datetime)|false|none|The timestamp when the job was started (transitioned to JOB_STATE_PENDING). Flexible resource scheduling jobs are started with some delay after job creation, so start_time is unset before start and is updated when the job is started by the Cloud Dataflow service. For other jobs, start_time always equals to create_time and is immutable and set by the Cloud Dataflow service.|
|steps|[[Step](#schemastep)]|false|none|Exactly one of step or steps_location should be specified. The top-level steps that constitute the entire job. Only retrieved with JOB_VIEW_ALL.|
|stepsLocation|string|false|none|The Cloud Storage location where the steps are stored.|
|tempFiles|[string]|false|none|A set of files the system should be aware of that are used for temporary storage. These temporary files will be removed on job completion. No duplicates are allowed. No file patterns are supported. The supported files are: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}|
|transformNameMapping|object|false|none|The map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.|
|type|string|false|none|The type of Cloud Dataflow job.|

#### Enumerated Values

|Property|Value|
|---|---|
|currentState|JOB_STATE_UNKNOWN|
|currentState|JOB_STATE_STOPPED|
|currentState|JOB_STATE_RUNNING|
|currentState|JOB_STATE_DONE|
|currentState|JOB_STATE_FAILED|
|currentState|JOB_STATE_CANCELLED|
|currentState|JOB_STATE_UPDATED|
|currentState|JOB_STATE_DRAINING|
|currentState|JOB_STATE_DRAINED|
|currentState|JOB_STATE_PENDING|
|currentState|JOB_STATE_CANCELLING|
|currentState|JOB_STATE_QUEUED|
|currentState|JOB_STATE_RESOURCE_CLEANING_UP|
|requestedState|JOB_STATE_UNKNOWN|
|requestedState|JOB_STATE_STOPPED|
|requestedState|JOB_STATE_RUNNING|
|requestedState|JOB_STATE_DONE|
|requestedState|JOB_STATE_FAILED|
|requestedState|JOB_STATE_CANCELLED|
|requestedState|JOB_STATE_UPDATED|
|requestedState|JOB_STATE_DRAINING|
|requestedState|JOB_STATE_DRAINED|
|requestedState|JOB_STATE_PENDING|
|requestedState|JOB_STATE_CANCELLING|
|requestedState|JOB_STATE_QUEUED|
|requestedState|JOB_STATE_RESOURCE_CLEANING_UP|
|type|JOB_TYPE_UNKNOWN|
|type|JOB_TYPE_BATCH|
|type|JOB_TYPE_STREAMING|

<h2 id="tocS_JobExecutionDetails">JobExecutionDetails</h2>
<!-- backwards compatibility -->
<a id="schemajobexecutiondetails"></a>
<a id="schema_JobExecutionDetails"></a>
<a id="tocSjobexecutiondetails"></a>
<a id="tocsjobexecutiondetails"></a>

```json
{
  "nextPageToken": "string",
  "stages": [
    {
      "endTime": "string",
      "metrics": [
        {
          "cumulative": true,
          "distribution": null,
          "gauge": null,
          "internal": null,
          "kind": "string",
          "meanCount": null,
          "meanSum": null,
          "name": {
            "context": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "origin": "string"
          },
          "scalar": null,
          "set": null,
          "updateTime": "string"
        }
      ],
      "progress": {
        "currentProgress": 0,
        "dataPoints": [
          {
            "time": "string",
            "value": 0
          }
        ]
      },
      "stageId": "string",
      "startTime": "string",
      "state": "EXECUTION_STATE_UNKNOWN",
      "stragglerSummary": {
        "recentStragglers": [
          {
            "batchStraggler": {
              "causes": {
                "property1": {
                  "hotKey": {
                    "detectedHotKeys": {
                      "property1": {
                        "hotKeyAge": "string",
                        "key": "string",
                        "keyTruncated": true
                      },
                      "property2": {
                        "hotKeyAge": "string",
                        "key": "string",
                        "keyTruncated": true
                      }
                    }
                  }
                },
                "property2": {
                  "hotKey": {
                    "detectedHotKeys": {
                      "property1": {
                        "hotKeyAge": "string",
                        "key": "string",
                        "keyTruncated": true
                      },
                      "property2": {
                        "hotKeyAge": "string",
                        "key": "string",
                        "keyTruncated": true
                      }
                    }
                  }
                }
              },
              "startTime": "string"
            },
            "streamingStraggler": {
              "dataWatermarkLag": "string",
              "endTime": "string",
              "startTime": "string",
              "systemWatermarkLag": "string",
              "workerName": "string"
            }
          }
        ],
        "stragglerCauseCount": {
          "property1": "string",
          "property2": "string"
        },
        "totalStragglerCount": "string"
      }
    }
  ]
}
```

Information about the execution of a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value.|
|stages|[[StageSummary](#schemastagesummary)]|false|none|The stages of the job execution.|

<h2 id="tocS_JobExecutionInfo">JobExecutionInfo</h2>
<!-- backwards compatibility -->
<a id="schemajobexecutioninfo"></a>
<a id="schema_JobExecutionInfo"></a>
<a id="tocSjobexecutioninfo"></a>
<a id="tocsjobexecutioninfo"></a>

```json
{
  "stages": {
    "property1": {
      "stepName": [
        "string"
      ]
    },
    "property2": {
      "stepName": [
        "string"
      ]
    }
  }
}
```

Additional information about how a Cloud Dataflow job will be executed that isn't contained in the submitted job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stages|object|false|none|A mapping from each stage to the information about that stage.|

<h2 id="tocS_JobExecutionStageInfo">JobExecutionStageInfo</h2>
<!-- backwards compatibility -->
<a id="schemajobexecutionstageinfo"></a>
<a id="schema_JobExecutionStageInfo"></a>
<a id="tocSjobexecutionstageinfo"></a>
<a id="tocsjobexecutionstageinfo"></a>

```json
{
  "stepName": [
    "string"
  ]
}
```

Contains information about how a particular google.dataflow.v1beta3.Step will be executed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stepName|[string]|false|none|The steps associated with the execution stage. Note that stages may have several steps, and that a given step might be run by more than one stage.|

<h2 id="tocS_JobMessage">JobMessage</h2>
<!-- backwards compatibility -->
<a id="schemajobmessage"></a>
<a id="schema_JobMessage"></a>
<a id="tocSjobmessage"></a>
<a id="tocsjobmessage"></a>

```json
{
  "id": "string",
  "messageImportance": "JOB_MESSAGE_IMPORTANCE_UNKNOWN",
  "messageText": "string",
  "time": "string"
}
```

A particular message pertaining to a Dataflow job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Deprecated.|
|messageImportance|string|false|none|Importance level of the message.|
|messageText|string|false|none|The text of the message.|
|time|string(google-datetime)|false|none|The timestamp of the message.|

#### Enumerated Values

|Property|Value|
|---|---|
|messageImportance|JOB_MESSAGE_IMPORTANCE_UNKNOWN|
|messageImportance|JOB_MESSAGE_DEBUG|
|messageImportance|JOB_MESSAGE_DETAILED|
|messageImportance|JOB_MESSAGE_BASIC|
|messageImportance|JOB_MESSAGE_WARNING|
|messageImportance|JOB_MESSAGE_ERROR|

<h2 id="tocS_JobMetadata">JobMetadata</h2>
<!-- backwards compatibility -->
<a id="schemajobmetadata"></a>
<a id="schema_JobMetadata"></a>
<a id="tocSjobmetadata"></a>
<a id="tocsjobmetadata"></a>

```json
{
  "bigTableDetails": [
    {
      "instanceId": "string",
      "projectId": "string",
      "tableId": "string"
    }
  ],
  "bigqueryDetails": [
    {
      "dataset": "string",
      "projectId": "string",
      "query": "string",
      "table": "string"
    }
  ],
  "datastoreDetails": [
    {
      "namespace": "string",
      "projectId": "string"
    }
  ],
  "fileDetails": [
    {
      "filePattern": "string"
    }
  ],
  "pubsubDetails": [
    {
      "subscription": "string",
      "topic": "string"
    }
  ],
  "sdkVersion": {
    "sdkSupportStatus": "UNKNOWN",
    "version": "string",
    "versionDisplayName": "string"
  },
  "spannerDetails": [
    {
      "databaseId": "string",
      "instanceId": "string",
      "projectId": "string"
    }
  ],
  "userDisplayProperties": {
    "property1": "string",
    "property2": "string"
  }
}
```

Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigTableDetails|[[BigTableIODetails](#schemabigtableiodetails)]|false|none|Identification of a Cloud Bigtable source used in the Dataflow job.|
|bigqueryDetails|[[BigQueryIODetails](#schemabigqueryiodetails)]|false|none|Identification of a BigQuery source used in the Dataflow job.|
|datastoreDetails|[[DatastoreIODetails](#schemadatastoreiodetails)]|false|none|Identification of a Datastore source used in the Dataflow job.|
|fileDetails|[[FileIODetails](#schemafileiodetails)]|false|none|Identification of a File source used in the Dataflow job.|
|pubsubDetails|[[PubSubIODetails](#schemapubsubiodetails)]|false|none|Identification of a Pub/Sub source used in the Dataflow job.|
|sdkVersion|[SdkVersion](#schemasdkversion)|false|none|The SDK version used to run the job.|
|spannerDetails|[[SpannerIODetails](#schemaspanneriodetails)]|false|none|Identification of a Spanner source used in the Dataflow job.|
|userDisplayProperties|object|false|none|List of display properties to help UI filter jobs.|

<h2 id="tocS_JobMetrics">JobMetrics</h2>
<!-- backwards compatibility -->
<a id="schemajobmetrics"></a>
<a id="schema_JobMetrics"></a>
<a id="tocSjobmetrics"></a>
<a id="tocsjobmetrics"></a>

```json
{
  "metricTime": "string",
  "metrics": [
    {
      "cumulative": true,
      "distribution": null,
      "gauge": null,
      "internal": null,
      "kind": "string",
      "meanCount": null,
      "meanSum": null,
      "name": {
        "context": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "origin": "string"
      },
      "scalar": null,
      "set": null,
      "updateTime": "string"
    }
  ]
}
```

JobMetrics contains a collection of metrics describing the detailed progress of a Dataflow job. Metrics correspond to user-defined and system-defined metrics in the job. For more information, see [Dataflow job metrics] (https://cloud.google.com/dataflow/docs/guides/using-monitoring-intf). This resource captures only the most recent values of each metric; time-series data can be queried for them (under the same metric names) from Cloud Monitoring.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricTime|string(google-datetime)|false|none|Timestamp as of which metric values are current.|
|metrics|[[MetricUpdate](#schemametricupdate)]|false|none|All metrics for this job.|

<h2 id="tocS_KeyRangeDataDiskAssignment">KeyRangeDataDiskAssignment</h2>
<!-- backwards compatibility -->
<a id="schemakeyrangedatadiskassignment"></a>
<a id="schema_KeyRangeDataDiskAssignment"></a>
<a id="tocSkeyrangedatadiskassignment"></a>
<a id="tocskeyrangedatadiskassignment"></a>

```json
{
  "dataDisk": "string",
  "end": "string",
  "start": "string"
}
```

Data disk assignment information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataDisk|string|false|none|The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1".|
|end|string|false|none|The end (exclusive) of the key range.|
|start|string|false|none|The start (inclusive) of the key range.|

<h2 id="tocS_KeyRangeLocation">KeyRangeLocation</h2>
<!-- backwards compatibility -->
<a id="schemakeyrangelocation"></a>
<a id="schema_KeyRangeLocation"></a>
<a id="tocSkeyrangelocation"></a>
<a id="tocskeyrangelocation"></a>

```json
{
  "dataDisk": "string",
  "deliveryEndpoint": "string",
  "deprecatedPersistentDirectory": "string",
  "end": "string",
  "start": "string"
}
```

Location information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataDisk|string|false|none|The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1".|
|deliveryEndpoint|string|false|none|The physical location of this range assignment to be used for streaming computation cross-worker message delivery.|
|deprecatedPersistentDirectory|string|false|none|DEPRECATED. The location of the persistent state for this range, as a persistent directory in the worker local filesystem.|
|end|string|false|none|The end (exclusive) of the key range.|
|start|string|false|none|The start (inclusive) of the key range.|

<h2 id="tocS_LaunchFlexTemplateParameter">LaunchFlexTemplateParameter</h2>
<!-- backwards compatibility -->
<a id="schemalaunchflextemplateparameter"></a>
<a id="schema_LaunchFlexTemplateParameter"></a>
<a id="tocSlaunchflextemplateparameter"></a>
<a id="tocslaunchflextemplateparameter"></a>

```json
{
  "containerSpec": {
    "defaultEnvironment": {
      "additionalExperiments": [
        "string"
      ],
      "additionalUserLabels": {
        "property1": "string",
        "property2": "string"
      },
      "autoscalingAlgorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
      "diskSizeGb": 0,
      "dumpHeapOnOom": true,
      "enableLauncherVmSerialPortLogging": true,
      "enableStreamingEngine": true,
      "flexrsGoal": "FLEXRS_UNSPECIFIED",
      "ipConfiguration": "WORKER_IP_UNSPECIFIED",
      "kmsKeyName": "string",
      "launcherMachineType": "string",
      "machineType": "string",
      "maxWorkers": 0,
      "network": "string",
      "numWorkers": 0,
      "saveHeapDumpsToGcsPath": "string",
      "sdkContainerImage": "string",
      "serviceAccountEmail": "string",
      "stagingLocation": "string",
      "subnetwork": "string",
      "tempLocation": "string",
      "workerRegion": "string",
      "workerZone": "string",
      "zone": "string"
    },
    "image": "string",
    "imageRepositoryCertPath": "string",
    "imageRepositoryPasswordSecretId": "string",
    "imageRepositoryUsernameSecretId": "string",
    "metadata": {
      "description": "string",
      "name": "string",
      "parameters": [
        {
          "customMetadata": {
            "property1": "string",
            "property2": "string"
          },
          "groupName": "string",
          "helpText": "string",
          "isOptional": true,
          "label": "string",
          "name": "string",
          "paramType": "DEFAULT",
          "parentName": "string",
          "parentTriggerValues": [
            "string"
          ],
          "regexes": [
            "string"
          ]
        }
      ]
    },
    "sdkInfo": {
      "language": "UNKNOWN",
      "version": "string"
    }
  },
  "containerSpecGcsPath": "string",
  "environment": {
    "additionalExperiments": [
      "string"
    ],
    "additionalUserLabels": {
      "property1": "string",
      "property2": "string"
    },
    "autoscalingAlgorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
    "diskSizeGb": 0,
    "dumpHeapOnOom": true,
    "enableLauncherVmSerialPortLogging": true,
    "enableStreamingEngine": true,
    "flexrsGoal": "FLEXRS_UNSPECIFIED",
    "ipConfiguration": "WORKER_IP_UNSPECIFIED",
    "kmsKeyName": "string",
    "launcherMachineType": "string",
    "machineType": "string",
    "maxWorkers": 0,
    "network": "string",
    "numWorkers": 0,
    "saveHeapDumpsToGcsPath": "string",
    "sdkContainerImage": "string",
    "serviceAccountEmail": "string",
    "stagingLocation": "string",
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

Launch FlexTemplate Parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerSpec|[ContainerSpec](#schemacontainerspec)|false|none|Spec about the container image to launch.|
|containerSpecGcsPath|string|false|none|Cloud Storage path to a file with json serialized ContainerSpec as content.|
|environment|[FlexTemplateRuntimeEnvironment](#schemaflextemplateruntimeenvironment)|false|none|The runtime environment for the FlexTemplate job|
|jobName|string|false|none|Required. The job name to use for the created job. For update job request, job name should be same as the existing running job.|
|launchOptions|object|false|none|Launch options for this flex template job. This is a common set of options across languages and templates. This should not be used to pass job parameters.|
|parameters|object|false|none|The parameters for FlexTemplate. Ex. {"num_workers":"5"}|
|transformNameMappings|object|false|none|Use this to pass transform_name_mappings for streaming update jobs. Ex:{"oldTransformName":"newTransformName",...}'|
|update|boolean|false|none|Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job.|

<h2 id="tocS_LaunchFlexTemplateRequest">LaunchFlexTemplateRequest</h2>
<!-- backwards compatibility -->
<a id="schemalaunchflextemplaterequest"></a>
<a id="schema_LaunchFlexTemplateRequest"></a>
<a id="tocSlaunchflextemplaterequest"></a>
<a id="tocslaunchflextemplaterequest"></a>

```json
{
  "launchParameter": {
    "containerSpec": {
      "defaultEnvironment": {
        "additionalExperiments": [
          "string"
        ],
        "additionalUserLabels": {
          "property1": "string",
          "property2": "string"
        },
        "autoscalingAlgorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
        "diskSizeGb": 0,
        "dumpHeapOnOom": true,
        "enableLauncherVmSerialPortLogging": true,
        "enableStreamingEngine": true,
        "flexrsGoal": "FLEXRS_UNSPECIFIED",
        "ipConfiguration": "WORKER_IP_UNSPECIFIED",
        "kmsKeyName": "string",
        "launcherMachineType": "string",
        "machineType": "string",
        "maxWorkers": 0,
        "network": "string",
        "numWorkers": 0,
        "saveHeapDumpsToGcsPath": "string",
        "sdkContainerImage": "string",
        "serviceAccountEmail": "string",
        "stagingLocation": "string",
        "subnetwork": "string",
        "tempLocation": "string",
        "workerRegion": "string",
        "workerZone": "string",
        "zone": "string"
      },
      "image": "string",
      "imageRepositoryCertPath": "string",
      "imageRepositoryPasswordSecretId": "string",
      "imageRepositoryUsernameSecretId": "string",
      "metadata": {
        "description": "string",
        "name": "string",
        "parameters": [
          {
            "customMetadata": {
              "property1": "string",
              "property2": "string"
            },
            "groupName": "string",
            "helpText": "string",
            "isOptional": true,
            "label": "string",
            "name": "string",
            "paramType": "DEFAULT",
            "parentName": "string",
            "parentTriggerValues": [
              "string"
            ],
            "regexes": [
              "string"
            ]
          }
        ]
      },
      "sdkInfo": {
        "language": "UNKNOWN",
        "version": "string"
      }
    },
    "containerSpecGcsPath": "string",
    "environment": {
      "additionalExperiments": [
        "string"
      ],
      "additionalUserLabels": {
        "property1": "string",
        "property2": "string"
      },
      "autoscalingAlgorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
      "diskSizeGb": 0,
      "dumpHeapOnOom": true,
      "enableLauncherVmSerialPortLogging": true,
      "enableStreamingEngine": true,
      "flexrsGoal": "FLEXRS_UNSPECIFIED",
      "ipConfiguration": "WORKER_IP_UNSPECIFIED",
      "kmsKeyName": "string",
      "launcherMachineType": "string",
      "machineType": "string",
      "maxWorkers": 0,
      "network": "string",
      "numWorkers": 0,
      "saveHeapDumpsToGcsPath": "string",
      "sdkContainerImage": "string",
      "serviceAccountEmail": "string",
      "stagingLocation": "string",
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
  "validateOnly": true
}
```

A request to launch a Cloud Dataflow job from a FlexTemplate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|launchParameter|[LaunchFlexTemplateParameter](#schemalaunchflextemplateparameter)|false|none|Required. Parameter to launch a job form Flex Template.|
|validateOnly|boolean|false|none|If true, the request is validated but not actually executed. Defaults to false.|

<h2 id="tocS_LaunchFlexTemplateResponse">LaunchFlexTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemalaunchflextemplateresponse"></a>
<a id="schema_LaunchFlexTemplateResponse"></a>
<a id="tocSlaunchflextemplateresponse"></a>
<a id="tocslaunchflextemplateresponse"></a>

```json
{
  "job": {
    "clientRequestId": "string",
    "createTime": "string",
    "createdFromSnapshotId": "string",
    "currentState": "JOB_STATE_UNKNOWN",
    "currentStateTime": "string",
    "environment": {
      "clusterManagerApiService": "string",
      "dataset": "string",
      "debugOptions": {
        "enableHotKeyLogging": true
      },
      "experiments": [
        "string"
      ],
      "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
      "internalExperiments": {
        "property1": null,
        "property2": null
      },
      "sdkPipelineOptions": {
        "property1": null,
        "property2": null
      },
      "serviceAccountEmail": "string",
      "serviceKmsKeyName": "string",
      "serviceOptions": [
        "string"
      ],
      "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
      "tempStoragePrefix": "string",
      "userAgent": {
        "property1": null,
        "property2": null
      },
      "version": {
        "property1": null,
        "property2": null
      },
      "workerPools": [
        {
          "autoscalingSettings": {
            "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
            "maxNumWorkers": 0
          },
          "dataDisks": [
            {
              "diskType": "string",
              "mountPoint": "string",
              "sizeGb": 0
            }
          ],
          "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
          "diskSizeGb": 0,
          "diskSourceImage": "string",
          "diskType": "string",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kind": "string",
          "machineType": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "network": "string",
          "numThreadsPerWorker": 0,
          "numWorkers": 0,
          "onHostMaintenance": "string",
          "packages": [
            {
              "location": "string",
              "name": "string"
            }
          ],
          "poolArgs": {
            "property1": null,
            "property2": null
          },
          "sdkHarnessContainerImages": [
            {
              "capabilities": [
                "string"
              ],
              "containerImage": "string",
              "environmentId": "string",
              "useSingleCorePerContainer": true
            }
          ],
          "subnetwork": "string",
          "taskrunnerSettings": {
            "alsologtostderr": true,
            "baseTaskDir": "string",
            "baseUrl": "string",
            "commandlinesFileName": "string",
            "continueOnException": true,
            "dataflowApiVersion": "string",
            "harnessCommand": "string",
            "languageHint": "string",
            "logDir": "string",
            "logToSerialconsole": true,
            "logUploadLocation": "string",
            "oauthScopes": [
              "string"
            ],
            "parallelWorkerSettings": {
              "baseUrl": "string",
              "reportingEnabled": true,
              "servicePath": "string",
              "shuffleServicePath": "string",
              "tempStoragePrefix": "string",
              "workerId": "string"
            },
            "streamingWorkerMainClass": "string",
            "taskGroup": "string",
            "taskUser": "string",
            "tempStoragePrefix": "string",
            "vmId": "string",
            "workflowFileName": "string"
          },
          "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
          "workerHarnessContainerImage": "string",
          "zone": "string"
        }
      ],
      "workerRegion": "string",
      "workerZone": "string"
    },
    "executionInfo": {
      "stages": {
        "property1": {
          "stepName": [
            "string"
          ]
        },
        "property2": {
          "stepName": [
            "string"
          ]
        }
      }
    },
    "id": "string",
    "jobMetadata": {
      "bigTableDetails": [
        {
          "instanceId": "string",
          "projectId": "string",
          "tableId": "string"
        }
      ],
      "bigqueryDetails": [
        {
          "dataset": "string",
          "projectId": "string",
          "query": "string",
          "table": "string"
        }
      ],
      "datastoreDetails": [
        {
          "namespace": "string",
          "projectId": "string"
        }
      ],
      "fileDetails": [
        {
          "filePattern": "string"
        }
      ],
      "pubsubDetails": [
        {
          "subscription": "string",
          "topic": "string"
        }
      ],
      "sdkVersion": {
        "sdkSupportStatus": "UNKNOWN",
        "version": "string",
        "versionDisplayName": "string"
      },
      "spannerDetails": [
        {
          "databaseId": "string",
          "instanceId": "string",
          "projectId": "string"
        }
      ],
      "userDisplayProperties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": "string",
    "name": "string",
    "pipelineDescription": {
      "displayData": [
        {
          "boolValue": true,
          "durationValue": "string",
          "floatValue": 0,
          "int64Value": "string",
          "javaClassValue": "string",
          "key": "string",
          "label": "string",
          "namespace": "string",
          "shortStrValue": "string",
          "strValue": "string",
          "timestampValue": "string",
          "url": "string"
        }
      ],
      "executionPipelineStage": [
        {
          "componentSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "userName": "string"
            }
          ],
          "componentTransform": [
            {
              "name": "string",
              "originalTransform": "string",
              "userName": "string"
            }
          ],
          "id": "string",
          "inputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "prerequisiteStage": [
            "string"
          ]
        }
      ],
      "originalPipelineTransform": [
        {
          "displayData": [
            {
              "boolValue": true,
              "durationValue": "string",
              "floatValue": 0,
              "int64Value": "string",
              "javaClassValue": "string",
              "key": "string",
              "label": "string",
              "namespace": "string",
              "shortStrValue": "string",
              "strValue": "string",
              "timestampValue": "string",
              "url": "string"
            }
          ],
          "id": "string",
          "inputCollectionName": [
            "string"
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputCollectionName": [
            "string"
          ]
        }
      ],
      "stepNamesHash": "string"
    },
    "projectId": "string",
    "replaceJobId": "string",
    "replacedByJobId": "string",
    "requestedState": "JOB_STATE_UNKNOWN",
    "satisfiesPzs": true,
    "stageStates": [
      {
        "currentStateTime": "string",
        "executionStageName": "string",
        "executionStageState": "JOB_STATE_UNKNOWN"
      }
    ],
    "startTime": "string",
    "steps": [
      {
        "kind": "string",
        "name": "string",
        "properties": {
          "property1": null,
          "property2": null
        }
      }
    ],
    "stepsLocation": "string",
    "tempFiles": [
      "string"
    ],
    "transformNameMapping": {
      "property1": "string",
      "property2": "string"
    },
    "type": "JOB_TYPE_UNKNOWN"
  }
}
```

Response to the request to launch a job from Flex Template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[Job](#schemajob)|false|none|The job that was launched, if the request was not a dry run and the job was successfully launched.|

<h2 id="tocS_LaunchTemplateParameters">LaunchTemplateParameters</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplateparameters"></a>
<a id="schema_LaunchTemplateParameters"></a>
<a id="tocSlaunchtemplateparameters"></a>
<a id="tocslaunchtemplateparameters"></a>

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

Parameters to provide to the template being launched. Note that the [metadata in the pipeline code] (https://cloud.google.com/dataflow/docs/guides/templates/creating-templates#metadata) determines which runtime parameters are valid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|environment|[RuntimeEnvironment](#schemaruntimeenvironment)|false|none|The runtime environment for the job.|
|jobName|string|false|none|Required. The job name to use for the created job. The name must match the regular expression `[a-z]([-a-z0-9]{0,1022}[a-z0-9])?`|
|parameters|object|false|none|The runtime parameters to pass to the job.|
|transformNameMapping|object|false|none|Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job.|
|update|boolean|false|none|If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.|

<h2 id="tocS_LaunchTemplateResponse">LaunchTemplateResponse</h2>
<!-- backwards compatibility -->
<a id="schemalaunchtemplateresponse"></a>
<a id="schema_LaunchTemplateResponse"></a>
<a id="tocSlaunchtemplateresponse"></a>
<a id="tocslaunchtemplateresponse"></a>

```json
{
  "job": {
    "clientRequestId": "string",
    "createTime": "string",
    "createdFromSnapshotId": "string",
    "currentState": "JOB_STATE_UNKNOWN",
    "currentStateTime": "string",
    "environment": {
      "clusterManagerApiService": "string",
      "dataset": "string",
      "debugOptions": {
        "enableHotKeyLogging": true
      },
      "experiments": [
        "string"
      ],
      "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
      "internalExperiments": {
        "property1": null,
        "property2": null
      },
      "sdkPipelineOptions": {
        "property1": null,
        "property2": null
      },
      "serviceAccountEmail": "string",
      "serviceKmsKeyName": "string",
      "serviceOptions": [
        "string"
      ],
      "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
      "tempStoragePrefix": "string",
      "userAgent": {
        "property1": null,
        "property2": null
      },
      "version": {
        "property1": null,
        "property2": null
      },
      "workerPools": [
        {
          "autoscalingSettings": {
            "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
            "maxNumWorkers": 0
          },
          "dataDisks": [
            {
              "diskType": "string",
              "mountPoint": "string",
              "sizeGb": 0
            }
          ],
          "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
          "diskSizeGb": 0,
          "diskSourceImage": "string",
          "diskType": "string",
          "ipConfiguration": "WORKER_IP_UNSPECIFIED",
          "kind": "string",
          "machineType": "string",
          "metadata": {
            "property1": "string",
            "property2": "string"
          },
          "network": "string",
          "numThreadsPerWorker": 0,
          "numWorkers": 0,
          "onHostMaintenance": "string",
          "packages": [
            {
              "location": "string",
              "name": "string"
            }
          ],
          "poolArgs": {
            "property1": null,
            "property2": null
          },
          "sdkHarnessContainerImages": [
            {
              "capabilities": [
                "string"
              ],
              "containerImage": "string",
              "environmentId": "string",
              "useSingleCorePerContainer": true
            }
          ],
          "subnetwork": "string",
          "taskrunnerSettings": {
            "alsologtostderr": true,
            "baseTaskDir": "string",
            "baseUrl": "string",
            "commandlinesFileName": "string",
            "continueOnException": true,
            "dataflowApiVersion": "string",
            "harnessCommand": "string",
            "languageHint": "string",
            "logDir": "string",
            "logToSerialconsole": true,
            "logUploadLocation": "string",
            "oauthScopes": [
              "string"
            ],
            "parallelWorkerSettings": {
              "baseUrl": "string",
              "reportingEnabled": true,
              "servicePath": "string",
              "shuffleServicePath": "string",
              "tempStoragePrefix": "string",
              "workerId": "string"
            },
            "streamingWorkerMainClass": "string",
            "taskGroup": "string",
            "taskUser": "string",
            "tempStoragePrefix": "string",
            "vmId": "string",
            "workflowFileName": "string"
          },
          "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
          "workerHarnessContainerImage": "string",
          "zone": "string"
        }
      ],
      "workerRegion": "string",
      "workerZone": "string"
    },
    "executionInfo": {
      "stages": {
        "property1": {
          "stepName": [
            "string"
          ]
        },
        "property2": {
          "stepName": [
            "string"
          ]
        }
      }
    },
    "id": "string",
    "jobMetadata": {
      "bigTableDetails": [
        {
          "instanceId": "string",
          "projectId": "string",
          "tableId": "string"
        }
      ],
      "bigqueryDetails": [
        {
          "dataset": "string",
          "projectId": "string",
          "query": "string",
          "table": "string"
        }
      ],
      "datastoreDetails": [
        {
          "namespace": "string",
          "projectId": "string"
        }
      ],
      "fileDetails": [
        {
          "filePattern": "string"
        }
      ],
      "pubsubDetails": [
        {
          "subscription": "string",
          "topic": "string"
        }
      ],
      "sdkVersion": {
        "sdkSupportStatus": "UNKNOWN",
        "version": "string",
        "versionDisplayName": "string"
      },
      "spannerDetails": [
        {
          "databaseId": "string",
          "instanceId": "string",
          "projectId": "string"
        }
      ],
      "userDisplayProperties": {
        "property1": "string",
        "property2": "string"
      }
    },
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "location": "string",
    "name": "string",
    "pipelineDescription": {
      "displayData": [
        {
          "boolValue": true,
          "durationValue": "string",
          "floatValue": 0,
          "int64Value": "string",
          "javaClassValue": "string",
          "key": "string",
          "label": "string",
          "namespace": "string",
          "shortStrValue": "string",
          "strValue": "string",
          "timestampValue": "string",
          "url": "string"
        }
      ],
      "executionPipelineStage": [
        {
          "componentSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "userName": "string"
            }
          ],
          "componentTransform": [
            {
              "name": "string",
              "originalTransform": "string",
              "userName": "string"
            }
          ],
          "id": "string",
          "inputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputSource": [
            {
              "name": "string",
              "originalTransformOrCollection": "string",
              "sizeBytes": "string",
              "userName": "string"
            }
          ],
          "prerequisiteStage": [
            "string"
          ]
        }
      ],
      "originalPipelineTransform": [
        {
          "displayData": [
            {
              "boolValue": true,
              "durationValue": "string",
              "floatValue": 0,
              "int64Value": "string",
              "javaClassValue": "string",
              "key": "string",
              "label": "string",
              "namespace": "string",
              "shortStrValue": "string",
              "strValue": "string",
              "timestampValue": "string",
              "url": "string"
            }
          ],
          "id": "string",
          "inputCollectionName": [
            "string"
          ],
          "kind": "UNKNOWN_KIND",
          "name": "string",
          "outputCollectionName": [
            "string"
          ]
        }
      ],
      "stepNamesHash": "string"
    },
    "projectId": "string",
    "replaceJobId": "string",
    "replacedByJobId": "string",
    "requestedState": "JOB_STATE_UNKNOWN",
    "satisfiesPzs": true,
    "stageStates": [
      {
        "currentStateTime": "string",
        "executionStageName": "string",
        "executionStageState": "JOB_STATE_UNKNOWN"
      }
    ],
    "startTime": "string",
    "steps": [
      {
        "kind": "string",
        "name": "string",
        "properties": {
          "property1": null,
          "property2": null
        }
      }
    ],
    "stepsLocation": "string",
    "tempFiles": [
      "string"
    ],
    "transformNameMapping": {
      "property1": "string",
      "property2": "string"
    },
    "type": "JOB_TYPE_UNKNOWN"
  }
}
```

Response to the request to launch a template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[Job](#schemajob)|false|none|The job that was launched, if the request was not a dry run and the job was successfully launched.|

<h2 id="tocS_LeaseWorkItemRequest">LeaseWorkItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemaleaseworkitemrequest"></a>
<a id="schema_LeaseWorkItemRequest"></a>
<a id="tocSleaseworkitemrequest"></a>
<a id="tocsleaseworkitemrequest"></a>

```json
{
  "currentWorkerTime": "string",
  "location": "string",
  "requestedLeaseDuration": "string",
  "unifiedWorkerRequest": {
    "property1": null,
    "property2": null
  },
  "workItemTypes": [
    "string"
  ],
  "workerCapabilities": [
    "string"
  ],
  "workerId": "string"
}
```

Request to lease WorkItems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentWorkerTime|string(google-datetime)|false|none|The current timestamp at the worker.|
|location|string|false|none|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.|
|requestedLeaseDuration|string(google-duration)|false|none|The initial lease period.|
|unifiedWorkerRequest|object|false|none|Untranslated bag-of-bytes WorkRequest from UnifiedWorker.|
|workItemTypes|[string]|false|none|Filter for WorkItem type.|
|workerCapabilities|[string]|false|none|Worker capabilities. WorkItems might be limited to workers with specific capabilities.|
|workerId|string|false|none|Identifies the worker leasing work -- typically the ID of the virtual machine running the worker.|

<h2 id="tocS_LeaseWorkItemResponse">LeaseWorkItemResponse</h2>
<!-- backwards compatibility -->
<a id="schemaleaseworkitemresponse"></a>
<a id="schema_LeaseWorkItemResponse"></a>
<a id="tocSleaseworkitemresponse"></a>
<a id="tocsleaseworkitemresponse"></a>

```json
{
  "unifiedWorkerResponse": {
    "property1": null,
    "property2": null
  },
  "workItems": [
    {
      "configuration": "string",
      "id": "string",
      "initialReportIndex": "string",
      "jobId": "string",
      "leaseExpireTime": "string",
      "mapTask": {
        "counterPrefix": "string",
        "instructions": [
          {
            "flatten": {
              "inputs": [
                {
                  "outputNum": 0,
                  "producerInstructionIndex": 0
                }
              ]
            },
            "name": "string",
            "originalName": "string",
            "outputs": [
              {
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "name": "string",
                "onlyCountKeyBytes": true,
                "onlyCountValueBytes": true,
                "originalName": "string",
                "systemName": "string"
              }
            ],
            "parDo": {
              "input": {
                "outputNum": 0,
                "producerInstructionIndex": 0
              },
              "multiOutputInfos": [
                {
                  "tag": "string"
                }
              ],
              "numOutputs": 0,
              "sideInputs": [
                {
                  "kind": {
                    "property1": null,
                    "property2": null
                  },
                  "sources": [
                    {
                      "baseSpecs": [
                        {
                          "property1": null,
                          "property2": null
                        }
                      ],
                      "codec": {
                        "property1": null,
                        "property2": null
                      },
                      "doesNotNeedSplitting": true,
                      "metadata": {
                        "estimatedSizeBytes": "string",
                        "infinite": true,
                        "producesSortedKeys": true
                      },
                      "spec": {
                        "property1": null,
                        "property2": null
                      }
                    }
                  ],
                  "tag": "string"
                }
              ],
              "userFn": {
                "property1": null,
                "property2": null
              }
            },
            "partialGroupByKey": {
              "input": {
                "outputNum": 0,
                "producerInstructionIndex": 0
              },
              "inputElementCodec": {
                "property1": null,
                "property2": null
              },
              "originalCombineValuesInputStoreName": "string",
              "originalCombineValuesStepName": "string",
              "sideInputs": [
                {
                  "kind": {
                    "property1": null,
                    "property2": null
                  },
                  "sources": [
                    {
                      "baseSpecs": [
                        {
                          "property1": null,
                          "property2": null
                        }
                      ],
                      "codec": {
                        "property1": null,
                        "property2": null
                      },
                      "doesNotNeedSplitting": true,
                      "metadata": {
                        "estimatedSizeBytes": "string",
                        "infinite": true,
                        "producesSortedKeys": true
                      },
                      "spec": {
                        "property1": null,
                        "property2": null
                      }
                    }
                  ],
                  "tag": "string"
                }
              ],
              "valueCombiningFn": {
                "property1": null,
                "property2": null
              }
            },
            "read": {
              "source": {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            },
            "systemName": "string",
            "write": {
              "input": {
                "outputNum": 0,
                "producerInstructionIndex": 0
              },
              "sink": {
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            }
          }
        ],
        "stageName": "string",
        "systemName": "string"
      },
      "packages": [
        {
          "location": "string",
          "name": "string"
        }
      ],
      "projectId": "string",
      "reportStatusInterval": "string",
      "seqMapTask": {
        "inputs": [
          {
            "kind": {
              "property1": null,
              "property2": null
            },
            "sources": [
              {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            ],
            "tag": "string"
          }
        ],
        "name": "string",
        "outputInfos": [
          {
            "sink": {
              "codec": {
                "property1": null,
                "property2": null
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            },
            "tag": "string"
          }
        ],
        "stageName": "string",
        "systemName": "string",
        "userFn": {
          "property1": null,
          "property2": null
        }
      },
      "shellTask": {
        "command": "string",
        "exitCode": 0
      },
      "sourceOperationTask": {
        "getMetadata": {
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "name": "string",
        "originalName": "string",
        "split": {
          "options": {
            "desiredBundleSizeBytes": "string",
            "desiredShardSizeBytes": "string"
          },
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "stageName": "string",
        "systemName": "string"
      },
      "streamingComputationTask": {
        "computationRanges": [
          {
            "computationId": "string",
            "rangeAssignments": [
              {
                "dataDisk": "string",
                "end": "string",
                "start": "string"
              }
            ]
          }
        ],
        "dataDisks": [
          {
            "dataDisk": "string"
          }
        ],
        "taskType": "STREAMING_COMPUTATION_TASK_UNKNOWN"
      },
      "streamingConfigTask": {
        "commitStreamChunkSizeBytes": "string",
        "getDataStreamChunkSizeBytes": "string",
        "maxWorkItemCommitBytes": "string",
        "streamingComputationConfigs": [
          {
            "computationId": "string",
            "instructions": [
              {
                "flatten": {
                  "inputs": [
                    {
                      "outputNum": 0,
                      "producerInstructionIndex": 0
                    }
                  ]
                },
                "name": "string",
                "originalName": "string",
                "outputs": [
                  {
                    "codec": {
                      "property1": null,
                      "property2": null
                    },
                    "name": "string",
                    "onlyCountKeyBytes": true,
                    "onlyCountValueBytes": true,
                    "originalName": "string",
                    "systemName": "string"
                  }
                ],
                "parDo": {
                  "input": {
                    "outputNum": 0,
                    "producerInstructionIndex": 0
                  },
                  "multiOutputInfos": [
                    {
                      "tag": "string"
                    }
                  ],
                  "numOutputs": 0,
                  "sideInputs": [
                    {
                      "kind": {
                        "property1": null,
                        "property2": null
                      },
                      "sources": [
                        {
                          "baseSpecs": [
                            {
                              "property1": null,
                              "property2": null
                            }
                          ],
                          "codec": {
                            "property1": null,
                            "property2": null
                          },
                          "doesNotNeedSplitting": true,
                          "metadata": {
                            "estimatedSizeBytes": "string",
                            "infinite": true,
                            "producesSortedKeys": true
                          },
                          "spec": {
                            "property1": null,
                            "property2": null
                          }
                        }
                      ],
                      "tag": "string"
                    }
                  ],
                  "userFn": {
                    "property1": null,
                    "property2": null
                  }
                },
                "partialGroupByKey": {
                  "input": {
                    "outputNum": 0,
                    "producerInstructionIndex": 0
                  },
                  "inputElementCodec": {
                    "property1": null,
                    "property2": null
                  },
                  "originalCombineValuesInputStoreName": "string",
                  "originalCombineValuesStepName": "string",
                  "sideInputs": [
                    {
                      "kind": {
                        "property1": null,
                        "property2": null
                      },
                      "sources": [
                        {
                          "baseSpecs": [
                            {
                              "property1": null,
                              "property2": null
                            }
                          ],
                          "codec": {
                            "property1": null,
                            "property2": null
                          },
                          "doesNotNeedSplitting": true,
                          "metadata": {
                            "estimatedSizeBytes": "string",
                            "infinite": true,
                            "producesSortedKeys": true
                          },
                          "spec": {
                            "property1": null,
                            "property2": null
                          }
                        }
                      ],
                      "tag": "string"
                    }
                  ],
                  "valueCombiningFn": {
                    "property1": null,
                    "property2": null
                  }
                },
                "read": {
                  "source": {
                    "baseSpecs": [
                      {
                        "property1": null,
                        "property2": null
                      }
                    ],
                    "codec": {
                      "property1": null,
                      "property2": null
                    },
                    "doesNotNeedSplitting": true,
                    "metadata": {
                      "estimatedSizeBytes": "string",
                      "infinite": true,
                      "producesSortedKeys": true
                    },
                    "spec": {
                      "property1": null,
                      "property2": null
                    }
                  }
                },
                "systemName": "string",
                "write": {
                  "input": {
                    "outputNum": 0,
                    "producerInstructionIndex": 0
                  },
                  "sink": {
                    "codec": {
                      "property1": null,
                      "property2": null
                    },
                    "spec": {
                      "property1": null,
                      "property2": null
                    }
                  }
                }
              }
            ],
            "stageName": "string",
            "systemName": "string",
            "transformUserNameToStateFamily": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "userStepToStateFamilyNameMap": {
          "property1": "string",
          "property2": "string"
        },
        "windmillServiceEndpoint": "string",
        "windmillServicePort": "string"
      },
      "streamingSetupTask": {
        "drain": true,
        "receiveWorkPort": 0,
        "snapshotConfig": {
          "importStateEndpoint": "string",
          "snapshotId": "string"
        },
        "streamingComputationTopology": {
          "computations": [
            {
              "computationId": "string",
              "inputs": [
                {
                  "customSourceLocation": {
                    "stateful": true
                  },
                  "pubsubLocation": {
                    "dropLateData": true,
                    "idLabel": "string",
                    "subscription": "string",
                    "timestampLabel": "string",
                    "topic": "string",
                    "trackingSubscription": "string",
                    "withAttributes": true
                  },
                  "sideInputLocation": {
                    "stateFamily": "string",
                    "tag": "string"
                  },
                  "streamingStageLocation": {
                    "streamId": "string"
                  }
                }
              ],
              "keyRanges": [
                {
                  "dataDisk": "string",
                  "deliveryEndpoint": "string",
                  "deprecatedPersistentDirectory": "string",
                  "end": "string",
                  "start": "string"
                }
              ],
              "outputs": [
                {
                  "customSourceLocation": {
                    "stateful": true
                  },
                  "pubsubLocation": {
                    "dropLateData": true,
                    "idLabel": "string",
                    "subscription": "string",
                    "timestampLabel": "string",
                    "topic": "string",
                    "trackingSubscription": "string",
                    "withAttributes": true
                  },
                  "sideInputLocation": {
                    "stateFamily": "string",
                    "tag": "string"
                  },
                  "streamingStageLocation": {
                    "streamId": "string"
                  }
                }
              ],
              "stateFamilies": [
                {
                  "isRead": true,
                  "stateFamily": "string"
                }
              ],
              "systemStageName": "string"
            }
          ],
          "dataDiskAssignments": [
            {
              "dataDisks": [
                "string"
              ],
              "vmInstance": "string"
            }
          ],
          "forwardingKeyBits": 0,
          "persistentStateVersion": 0,
          "userStageToComputationNameMap": {
            "property1": "string",
            "property2": "string"
          }
        },
        "workerHarnessPort": 0
      }
    }
  ]
}
```

Response to a request to lease WorkItems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unifiedWorkerResponse|object|false|none|Untranslated bag-of-bytes WorkResponse for UnifiedWorker.|
|workItems|[[WorkItem](#schemaworkitem)]|false|none|A list of the leased WorkItems.|

<h2 id="tocS_ListJobMessagesResponse">ListJobMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobmessagesresponse"></a>
<a id="schema_ListJobMessagesResponse"></a>
<a id="tocSlistjobmessagesresponse"></a>
<a id="tocslistjobmessagesresponse"></a>

```json
{
  "autoscalingEvents": [
    {
      "currentNumWorkers": "string",
      "description": {
        "messageKey": "string",
        "messageText": "string",
        "parameters": [
          {
            "key": "string",
            "value": null
          }
        ]
      },
      "eventType": "TYPE_UNKNOWN",
      "targetNumWorkers": "string",
      "time": "string",
      "workerPool": "string"
    }
  ],
  "jobMessages": [
    {
      "id": "string",
      "messageImportance": "JOB_MESSAGE_IMPORTANCE_UNKNOWN",
      "messageText": "string",
      "time": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response to a request to list job messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoscalingEvents|[[AutoscalingEvent](#schemaautoscalingevent)]|false|none|Autoscaling events in ascending timestamp order.|
|jobMessages|[[JobMessage](#schemajobmessage)]|false|none|Messages in ascending timestamp order.|
|nextPageToken|string|false|none|The token to obtain the next page of results if there are more.|

<h2 id="tocS_ListJobsResponse">ListJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsresponse"></a>
<a id="schema_ListJobsResponse"></a>
<a id="tocSlistjobsresponse"></a>
<a id="tocslistjobsresponse"></a>

```json
{
  "failedLocation": [
    {
      "name": "string"
    }
  ],
  "jobs": [
    {
      "clientRequestId": "string",
      "createTime": "string",
      "createdFromSnapshotId": "string",
      "currentState": "JOB_STATE_UNKNOWN",
      "currentStateTime": "string",
      "environment": {
        "clusterManagerApiService": "string",
        "dataset": "string",
        "debugOptions": {
          "enableHotKeyLogging": true
        },
        "experiments": [
          "string"
        ],
        "flexResourceSchedulingGoal": "FLEXRS_UNSPECIFIED",
        "internalExperiments": {
          "property1": null,
          "property2": null
        },
        "sdkPipelineOptions": {
          "property1": null,
          "property2": null
        },
        "serviceAccountEmail": "string",
        "serviceKmsKeyName": "string",
        "serviceOptions": [
          "string"
        ],
        "shuffleMode": "SHUFFLE_MODE_UNSPECIFIED",
        "tempStoragePrefix": "string",
        "userAgent": {
          "property1": null,
          "property2": null
        },
        "version": {
          "property1": null,
          "property2": null
        },
        "workerPools": [
          {
            "autoscalingSettings": {
              "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
              "maxNumWorkers": 0
            },
            "dataDisks": [
              {
                "diskType": "string",
                "mountPoint": "string",
                "sizeGb": 0
              }
            ],
            "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
            "diskSizeGb": 0,
            "diskSourceImage": "string",
            "diskType": "string",
            "ipConfiguration": "WORKER_IP_UNSPECIFIED",
            "kind": "string",
            "machineType": "string",
            "metadata": {
              "property1": "string",
              "property2": "string"
            },
            "network": "string",
            "numThreadsPerWorker": 0,
            "numWorkers": 0,
            "onHostMaintenance": "string",
            "packages": [
              {
                "location": "string",
                "name": "string"
              }
            ],
            "poolArgs": {
              "property1": null,
              "property2": null
            },
            "sdkHarnessContainerImages": [
              {
                "capabilities": [
                  "string"
                ],
                "containerImage": "string",
                "environmentId": "string",
                "useSingleCorePerContainer": true
              }
            ],
            "subnetwork": "string",
            "taskrunnerSettings": {
              "alsologtostderr": true,
              "baseTaskDir": "string",
              "baseUrl": "string",
              "commandlinesFileName": "string",
              "continueOnException": true,
              "dataflowApiVersion": "string",
              "harnessCommand": "string",
              "languageHint": "string",
              "logDir": "string",
              "logToSerialconsole": true,
              "logUploadLocation": "string",
              "oauthScopes": [
                "string"
              ],
              "parallelWorkerSettings": {
                "baseUrl": "string",
                "reportingEnabled": true,
                "servicePath": "string",
                "shuffleServicePath": "string",
                "tempStoragePrefix": "string",
                "workerId": "string"
              },
              "streamingWorkerMainClass": "string",
              "taskGroup": "string",
              "taskUser": "string",
              "tempStoragePrefix": "string",
              "vmId": "string",
              "workflowFileName": "string"
            },
            "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
            "workerHarnessContainerImage": "string",
            "zone": "string"
          }
        ],
        "workerRegion": "string",
        "workerZone": "string"
      },
      "executionInfo": {
        "stages": {
          "property1": {
            "stepName": [
              "string"
            ]
          },
          "property2": {
            "stepName": [
              "string"
            ]
          }
        }
      },
      "id": "string",
      "jobMetadata": {
        "bigTableDetails": [
          {
            "instanceId": "string",
            "projectId": "string",
            "tableId": "string"
          }
        ],
        "bigqueryDetails": [
          {
            "dataset": "string",
            "projectId": "string",
            "query": "string",
            "table": "string"
          }
        ],
        "datastoreDetails": [
          {
            "namespace": "string",
            "projectId": "string"
          }
        ],
        "fileDetails": [
          {
            "filePattern": "string"
          }
        ],
        "pubsubDetails": [
          {
            "subscription": "string",
            "topic": "string"
          }
        ],
        "sdkVersion": {
          "sdkSupportStatus": "UNKNOWN",
          "version": "string",
          "versionDisplayName": "string"
        },
        "spannerDetails": [
          {
            "databaseId": "string",
            "instanceId": "string",
            "projectId": "string"
          }
        ],
        "userDisplayProperties": {
          "property1": "string",
          "property2": "string"
        }
      },
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "location": "string",
      "name": "string",
      "pipelineDescription": {
        "displayData": [
          {
            "boolValue": true,
            "durationValue": "string",
            "floatValue": 0,
            "int64Value": "string",
            "javaClassValue": "string",
            "key": "string",
            "label": "string",
            "namespace": "string",
            "shortStrValue": "string",
            "strValue": "string",
            "timestampValue": "string",
            "url": "string"
          }
        ],
        "executionPipelineStage": [
          {
            "componentSource": [
              {
                "name": "string",
                "originalTransformOrCollection": "string",
                "userName": "string"
              }
            ],
            "componentTransform": [
              {
                "name": "string",
                "originalTransform": "string",
                "userName": "string"
              }
            ],
            "id": "string",
            "inputSource": [
              {
                "name": "string",
                "originalTransformOrCollection": "string",
                "sizeBytes": "string",
                "userName": "string"
              }
            ],
            "kind": "UNKNOWN_KIND",
            "name": "string",
            "outputSource": [
              {
                "name": "string",
                "originalTransformOrCollection": "string",
                "sizeBytes": "string",
                "userName": "string"
              }
            ],
            "prerequisiteStage": [
              "string"
            ]
          }
        ],
        "originalPipelineTransform": [
          {
            "displayData": [
              {
                "boolValue": true,
                "durationValue": "string",
                "floatValue": 0,
                "int64Value": "string",
                "javaClassValue": "string",
                "key": "string",
                "label": "string",
                "namespace": "string",
                "shortStrValue": "string",
                "strValue": "string",
                "timestampValue": "string",
                "url": "string"
              }
            ],
            "id": "string",
            "inputCollectionName": [
              "string"
            ],
            "kind": "UNKNOWN_KIND",
            "name": "string",
            "outputCollectionName": [
              "string"
            ]
          }
        ],
        "stepNamesHash": "string"
      },
      "projectId": "string",
      "replaceJobId": "string",
      "replacedByJobId": "string",
      "requestedState": "JOB_STATE_UNKNOWN",
      "satisfiesPzs": true,
      "stageStates": [
        {
          "currentStateTime": "string",
          "executionStageName": "string",
          "executionStageState": "JOB_STATE_UNKNOWN"
        }
      ],
      "startTime": "string",
      "steps": [
        {
          "kind": "string",
          "name": "string",
          "properties": {
            "property1": null,
            "property2": null
          }
        }
      ],
      "stepsLocation": "string",
      "tempFiles": [
        "string"
      ],
      "transformNameMapping": {
        "property1": "string",
        "property2": "string"
      },
      "type": "JOB_TYPE_UNKNOWN"
    }
  ],
  "nextPageToken": "string"
}
```

Response to a request to list Cloud Dataflow jobs in a project. This might be a partial response, depending on the page size in the ListJobsRequest. However, if the project does not have any jobs, an instance of ListJobsResponse is not returned and the requests's response body is empty {}.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedLocation|[[FailedLocation](#schemafailedlocation)]|false|none|Zero or more messages describing the [regional endpoints] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that failed to respond.|
|jobs|[[Job](#schemajob)]|false|none|A subset of the requested job information.|
|nextPageToken|string|false|none|Set if there may be more results than fit in this response.|

<h2 id="tocS_ListSnapshotsResponse">ListSnapshotsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsnapshotsresponse"></a>
<a id="schema_ListSnapshotsResponse"></a>
<a id="tocSlistsnapshotsresponse"></a>
<a id="tocslistsnapshotsresponse"></a>

```json
{
  "snapshots": [
    {
      "creationTime": "string",
      "description": "string",
      "diskSizeBytes": "string",
      "id": "string",
      "projectId": "string",
      "pubsubMetadata": [
        {
          "expireTime": "string",
          "snapshotName": "string",
          "topicName": "string"
        }
      ],
      "region": "string",
      "sourceJobId": "string",
      "state": "UNKNOWN_SNAPSHOT_STATE",
      "ttl": "string"
    }
  ]
}
```

List of snapshots.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshots|[[Snapshot](#schemasnapshot)]|false|none|Returned snapshots.|

<h2 id="tocS_MapTask">MapTask</h2>
<!-- backwards compatibility -->
<a id="schemamaptask"></a>
<a id="schema_MapTask"></a>
<a id="tocSmaptask"></a>
<a id="tocsmaptask"></a>

```json
{
  "counterPrefix": "string",
  "instructions": [
    {
      "flatten": {
        "inputs": [
          {
            "outputNum": 0,
            "producerInstructionIndex": 0
          }
        ]
      },
      "name": "string",
      "originalName": "string",
      "outputs": [
        {
          "codec": {
            "property1": null,
            "property2": null
          },
          "name": "string",
          "onlyCountKeyBytes": true,
          "onlyCountValueBytes": true,
          "originalName": "string",
          "systemName": "string"
        }
      ],
      "parDo": {
        "input": {
          "outputNum": 0,
          "producerInstructionIndex": 0
        },
        "multiOutputInfos": [
          {
            "tag": "string"
          }
        ],
        "numOutputs": 0,
        "sideInputs": [
          {
            "kind": {
              "property1": null,
              "property2": null
            },
            "sources": [
              {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            ],
            "tag": "string"
          }
        ],
        "userFn": {
          "property1": null,
          "property2": null
        }
      },
      "partialGroupByKey": {
        "input": {
          "outputNum": 0,
          "producerInstructionIndex": 0
        },
        "inputElementCodec": {
          "property1": null,
          "property2": null
        },
        "originalCombineValuesInputStoreName": "string",
        "originalCombineValuesStepName": "string",
        "sideInputs": [
          {
            "kind": {
              "property1": null,
              "property2": null
            },
            "sources": [
              {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            ],
            "tag": "string"
          }
        ],
        "valueCombiningFn": {
          "property1": null,
          "property2": null
        }
      },
      "read": {
        "source": {
          "baseSpecs": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "codec": {
            "property1": null,
            "property2": null
          },
          "doesNotNeedSplitting": true,
          "metadata": {
            "estimatedSizeBytes": "string",
            "infinite": true,
            "producesSortedKeys": true
          },
          "spec": {
            "property1": null,
            "property2": null
          }
        }
      },
      "systemName": "string",
      "write": {
        "input": {
          "outputNum": 0,
          "producerInstructionIndex": 0
        },
        "sink": {
          "codec": {
            "property1": null,
            "property2": null
          },
          "spec": {
            "property1": null,
            "property2": null
          }
        }
      }
    }
  ],
  "stageName": "string",
  "systemName": "string"
}
```

MapTask consists of an ordered set of instructions, each of which describes one particular low-level operation for the worker to perform in order to accomplish the MapTask's WorkItem. Each instruction must appear in the list before any instructions which depends on its output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counterPrefix|string|false|none|Counter prefix that can be used to prefix counters. Not currently used in Dataflow.|
|instructions|[[ParallelInstruction](#schemaparallelinstruction)]|false|none|The instructions in the MapTask.|
|stageName|string|false|none|System-defined name of the stage containing this MapTask. Unique across the workflow.|
|systemName|string|false|none|System-defined name of this MapTask. Unique across the workflow.|

<h2 id="tocS_MemInfo">MemInfo</h2>
<!-- backwards compatibility -->
<a id="schemameminfo"></a>
<a id="schema_MemInfo"></a>
<a id="tocSmeminfo"></a>
<a id="tocsmeminfo"></a>

```json
{
  "currentLimitBytes": "string",
  "currentOoms": "string",
  "currentRssBytes": "string",
  "timestamp": "string",
  "totalGbMs": "string"
}
```

Information about the memory usage of a worker or a container within a worker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentLimitBytes|string(uint64)|false|none|Instantenous memory limit in bytes.|
|currentOoms|string(int64)|false|none|Number of Out of Memory (OOM) events recorded since the previous measurement.|
|currentRssBytes|string(uint64)|false|none|Instantenous memory (RSS) size in bytes.|
|timestamp|string(google-datetime)|false|none|Timestamp of the measurement.|
|totalGbMs|string(uint64)|false|none|Total memory (RSS) usage since start up in GB * ms.|

<h2 id="tocS_MetricShortId">MetricShortId</h2>
<!-- backwards compatibility -->
<a id="schemametricshortid"></a>
<a id="schema_MetricShortId"></a>
<a id="tocSmetricshortid"></a>
<a id="tocsmetricshortid"></a>

```json
{
  "metricIndex": 0,
  "shortId": "string"
}
```

The metric short id is returned to the user alongside an offset into ReportWorkItemStatusRequest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metricIndex|integer(int32)|false|none|The index of the corresponding metric in the ReportWorkItemStatusRequest. Required.|
|shortId|string(int64)|false|none|The service-generated short identifier for the metric.|

<h2 id="tocS_MetricStructuredName">MetricStructuredName</h2>
<!-- backwards compatibility -->
<a id="schemametricstructuredname"></a>
<a id="schema_MetricStructuredName"></a>
<a id="tocSmetricstructuredname"></a>
<a id="tocsmetricstructuredname"></a>

```json
{
  "context": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "origin": "string"
}
```

Identifies a metric, by describing the source which generated the metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|object|false|none|Zero or more labeled fields which identify the part of the job this metric is associated with, such as the name of a step or collection. For example, built-in counters associated with steps will have context['step'] = . Counters associated with PCollections in the SDK will have context['pcollection'] = .|
|name|string|false|none|Worker-defined metric name.|
|origin|string|false|none|Origin (namespace) of metric name. May be blank for user-define metrics; will be "dataflow" for metrics defined by the Dataflow service or SDK.|

<h2 id="tocS_MetricUpdate">MetricUpdate</h2>
<!-- backwards compatibility -->
<a id="schemametricupdate"></a>
<a id="schema_MetricUpdate"></a>
<a id="tocSmetricupdate"></a>
<a id="tocsmetricupdate"></a>

```json
{
  "cumulative": true,
  "distribution": null,
  "gauge": null,
  "internal": null,
  "kind": "string",
  "meanCount": null,
  "meanSum": null,
  "name": {
    "context": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "origin": "string"
  },
  "scalar": null,
  "set": null,
  "updateTime": "string"
}
```

Describes the state of a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cumulative|boolean|false|none|True if this metric is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this metric is reported as a delta that is not associated with any WorkItem.|
|distribution|object|false|none|A struct value describing properties of a distribution of numeric values.|
|gauge|object|false|none|A struct value describing properties of a Gauge. Metrics of gauge type show the value of a metric across time, and is aggregated based on the newest value.|
|internal|object|false|none|Worker-computed aggregate value for internal use by the Dataflow service.|
|kind|string|false|none|Metric aggregation kind. The possible metric aggregation kinds are "Sum", "Max", "Min", "Mean", "Set", "And", "Or", and "Distribution". The specified aggregation kind is case-insensitive. If omitted, this is not an aggregated value but instead a single metric sample value.|
|meanCount|object|false|none|Worker-computed aggregate value for the "Mean" aggregation kind. This holds the count of the aggregated values and is used in combination with mean_sum above to obtain the actual mean aggregate value. The only possible value type is Long.|
|meanSum|object|false|none|Worker-computed aggregate value for the "Mean" aggregation kind. This holds the sum of the aggregated values and is used in combination with mean_count below to obtain the actual mean aggregate value. The only possible value types are Long and Double.|
|name|[MetricStructuredName](#schemametricstructuredname)|false|none|Name of the metric.|
|scalar|object|false|none|Worker-computed aggregate value for aggregation kinds "Sum", "Max", "Min", "And", and "Or". The possible value types are Long, Double, and Boolean.|
|set|object|false|none|Worker-computed aggregate value for the "Set" aggregation kind. The only possible value type is a list of Values whose type can be Long, Double, or String, according to the metric's type. All Values in the list must be of the same type.|
|updateTime|string(google-datetime)|false|none|Timestamp associated with the metric value. Optional when workers are reporting work progress; it will be filled in responses from the metrics API.|

<h2 id="tocS_MountedDataDisk">MountedDataDisk</h2>
<!-- backwards compatibility -->
<a id="schemamounteddatadisk"></a>
<a id="schema_MountedDataDisk"></a>
<a id="tocSmounteddatadisk"></a>
<a id="tocsmounteddatadisk"></a>

```json
{
  "dataDisk": "string"
}
```

Describes mounted data disk.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataDisk|string|false|none|The name of the data disk. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1".|

<h2 id="tocS_MultiOutputInfo">MultiOutputInfo</h2>
<!-- backwards compatibility -->
<a id="schemamultioutputinfo"></a>
<a id="schema_MultiOutputInfo"></a>
<a id="tocSmultioutputinfo"></a>
<a id="tocsmultioutputinfo"></a>

```json
{
  "tag": "string"
}
```

Information about an output of a multi-output DoFn.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|false|none|The id of the tag the user code will emit to this output by; this should correspond to the tag of some SideInputInfo.|

<h2 id="tocS_NameAndKind">NameAndKind</h2>
<!-- backwards compatibility -->
<a id="schemanameandkind"></a>
<a id="schema_NameAndKind"></a>
<a id="tocSnameandkind"></a>
<a id="tocsnameandkind"></a>

```json
{
  "kind": "INVALID",
  "name": "string"
}
```

Basic metadata about a counter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Counter aggregation kind.|
|name|string|false|none|Name of the counter.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|INVALID|
|kind|SUM|
|kind|MAX|
|kind|MIN|
|kind|MEAN|
|kind|OR|
|kind|AND|
|kind|SET|
|kind|DISTRIBUTION|
|kind|LATEST_VALUE|

<h2 id="tocS_Package">Package</h2>
<!-- backwards compatibility -->
<a id="schemapackage"></a>
<a id="schema_Package"></a>
<a id="tocSpackage"></a>
<a id="tocspackage"></a>

```json
{
  "location": "string",
  "name": "string"
}
```

The packages that must be installed in order for a worker to run the steps of the Cloud Dataflow job that will be assigned to its worker pool. This is the mechanism by which the Cloud Dataflow SDK causes code to be loaded onto the workers. For example, the Cloud Dataflow Java SDK might use this to install jars containing the user's code and all of the various dependencies (libraries, data files, etc.) required in order for that code to run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|The resource to read the package from. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket} bucket.storage.googleapis.com/|
|name|string|false|none|The name of the package.|

<h2 id="tocS_ParDoInstruction">ParDoInstruction</h2>
<!-- backwards compatibility -->
<a id="schemapardoinstruction"></a>
<a id="schema_ParDoInstruction"></a>
<a id="tocSpardoinstruction"></a>
<a id="tocspardoinstruction"></a>

```json
{
  "input": {
    "outputNum": 0,
    "producerInstructionIndex": 0
  },
  "multiOutputInfos": [
    {
      "tag": "string"
    }
  ],
  "numOutputs": 0,
  "sideInputs": [
    {
      "kind": {
        "property1": null,
        "property2": null
      },
      "sources": [
        {
          "baseSpecs": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "codec": {
            "property1": null,
            "property2": null
          },
          "doesNotNeedSplitting": true,
          "metadata": {
            "estimatedSizeBytes": "string",
            "infinite": true,
            "producesSortedKeys": true
          },
          "spec": {
            "property1": null,
            "property2": null
          }
        }
      ],
      "tag": "string"
    }
  ],
  "userFn": {
    "property1": null,
    "property2": null
  }
}
```

An instruction that does a ParDo operation. Takes one main input and zero or more side inputs, and produces zero or more outputs. Runs user code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|[InstructionInput](#schemainstructioninput)|false|none|The input.|
|multiOutputInfos|[[MultiOutputInfo](#schemamultioutputinfo)]|false|none|Information about each of the outputs, if user_fn is a MultiDoFn.|
|numOutputs|integer(int32)|false|none|The number of outputs.|
|sideInputs|[[SideInputInfo](#schemasideinputinfo)]|false|none|Zero or more side inputs.|
|userFn|object|false|none|The user function to invoke.|

<h2 id="tocS_ParallelInstruction">ParallelInstruction</h2>
<!-- backwards compatibility -->
<a id="schemaparallelinstruction"></a>
<a id="schema_ParallelInstruction"></a>
<a id="tocSparallelinstruction"></a>
<a id="tocsparallelinstruction"></a>

```json
{
  "flatten": {
    "inputs": [
      {
        "outputNum": 0,
        "producerInstructionIndex": 0
      }
    ]
  },
  "name": "string",
  "originalName": "string",
  "outputs": [
    {
      "codec": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "onlyCountKeyBytes": true,
      "onlyCountValueBytes": true,
      "originalName": "string",
      "systemName": "string"
    }
  ],
  "parDo": {
    "input": {
      "outputNum": 0,
      "producerInstructionIndex": 0
    },
    "multiOutputInfos": [
      {
        "tag": "string"
      }
    ],
    "numOutputs": 0,
    "sideInputs": [
      {
        "kind": {
          "property1": null,
          "property2": null
        },
        "sources": [
          {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        ],
        "tag": "string"
      }
    ],
    "userFn": {
      "property1": null,
      "property2": null
    }
  },
  "partialGroupByKey": {
    "input": {
      "outputNum": 0,
      "producerInstructionIndex": 0
    },
    "inputElementCodec": {
      "property1": null,
      "property2": null
    },
    "originalCombineValuesInputStoreName": "string",
    "originalCombineValuesStepName": "string",
    "sideInputs": [
      {
        "kind": {
          "property1": null,
          "property2": null
        },
        "sources": [
          {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        ],
        "tag": "string"
      }
    ],
    "valueCombiningFn": {
      "property1": null,
      "property2": null
    }
  },
  "read": {
    "source": {
      "baseSpecs": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "codec": {
        "property1": null,
        "property2": null
      },
      "doesNotNeedSplitting": true,
      "metadata": {
        "estimatedSizeBytes": "string",
        "infinite": true,
        "producesSortedKeys": true
      },
      "spec": {
        "property1": null,
        "property2": null
      }
    }
  },
  "systemName": "string",
  "write": {
    "input": {
      "outputNum": 0,
      "producerInstructionIndex": 0
    },
    "sink": {
      "codec": {
        "property1": null,
        "property2": null
      },
      "spec": {
        "property1": null,
        "property2": null
      }
    }
  }
}
```

Describes a particular operation comprising a MapTask.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|flatten|[FlattenInstruction](#schemaflatteninstruction)|false|none|Additional information for Flatten instructions.|
|name|string|false|none|User-provided name of this operation.|
|originalName|string|false|none|System-defined name for the operation in the original workflow graph.|
|outputs|[[InstructionOutput](#schemainstructionoutput)]|false|none|Describes the outputs of the instruction.|
|parDo|[ParDoInstruction](#schemapardoinstruction)|false|none|Additional information for ParDo instructions.|
|partialGroupByKey|[PartialGroupByKeyInstruction](#schemapartialgroupbykeyinstruction)|false|none|Additional information for PartialGroupByKey instructions.|
|read|[ReadInstruction](#schemareadinstruction)|false|none|Additional information for Read instructions.|
|systemName|string|false|none|System-defined name of this operation. Unique across the workflow.|
|write|[WriteInstruction](#schemawriteinstruction)|false|none|Additional information for Write instructions.|

<h2 id="tocS_Parameter">Parameter</h2>
<!-- backwards compatibility -->
<a id="schemaparameter"></a>
<a id="schema_Parameter"></a>
<a id="tocSparameter"></a>
<a id="tocsparameter"></a>

```json
{
  "key": "string",
  "value": null
}
```

Structured data associated with this message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Key or name for this parameter.|
|value|object|false|none|Value for this parameter.|

<h2 id="tocS_ParameterMetadata">ParameterMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaparametermetadata"></a>
<a id="schema_ParameterMetadata"></a>
<a id="tocSparametermetadata"></a>
<a id="tocsparametermetadata"></a>

```json
{
  "customMetadata": {
    "property1": "string",
    "property2": "string"
  },
  "groupName": "string",
  "helpText": "string",
  "isOptional": true,
  "label": "string",
  "name": "string",
  "paramType": "DEFAULT",
  "parentName": "string",
  "parentTriggerValues": [
    "string"
  ],
  "regexes": [
    "string"
  ]
}
```

Metadata for a specific parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customMetadata|object|false|none|Optional. Additional metadata for describing this parameter.|
|groupName|string|false|none|Optional. Specifies a group name for this parameter to be rendered under. Group header text will be rendered exactly as specified in this field. Only considered when parent_name is NOT provided.|
|helpText|string|false|none|Required. The help text to display for the parameter.|
|isOptional|boolean|false|none|Optional. Whether the parameter is optional. Defaults to false.|
|label|string|false|none|Required. The label to display for the parameter.|
|name|string|false|none|Required. The name of the parameter.|
|paramType|string|false|none|Optional. The type of the parameter. Used for selecting input picker.|
|parentName|string|false|none|Optional. Specifies the name of the parent parameter. Used in conjunction with 'parent_trigger_values' to make this parameter conditional (will only be rendered conditionally). Should be mappable to a ParameterMetadata.name field.|
|parentTriggerValues|[string]|false|none|Optional. The value(s) of the 'parent_name' parameter which will trigger this parameter to be shown. If left empty, ANY non-empty value in parent_name will trigger this parameter to be shown. Only considered when this parameter is conditional (when 'parent_name' has been provided).|
|regexes|[string]|false|none|Optional. Regexes that the parameter must match.|

#### Enumerated Values

|Property|Value|
|---|---|
|paramType|DEFAULT|
|paramType|TEXT|
|paramType|GCS_READ_BUCKET|
|paramType|GCS_WRITE_BUCKET|
|paramType|GCS_READ_FILE|
|paramType|GCS_WRITE_FILE|
|paramType|GCS_READ_FOLDER|
|paramType|GCS_WRITE_FOLDER|
|paramType|PUBSUB_TOPIC|
|paramType|PUBSUB_SUBSCRIPTION|
|paramType|BIGQUERY_TABLE|
|paramType|JAVASCRIPT_UDF_FILE|

<h2 id="tocS_PartialGroupByKeyInstruction">PartialGroupByKeyInstruction</h2>
<!-- backwards compatibility -->
<a id="schemapartialgroupbykeyinstruction"></a>
<a id="schema_PartialGroupByKeyInstruction"></a>
<a id="tocSpartialgroupbykeyinstruction"></a>
<a id="tocspartialgroupbykeyinstruction"></a>

```json
{
  "input": {
    "outputNum": 0,
    "producerInstructionIndex": 0
  },
  "inputElementCodec": {
    "property1": null,
    "property2": null
  },
  "originalCombineValuesInputStoreName": "string",
  "originalCombineValuesStepName": "string",
  "sideInputs": [
    {
      "kind": {
        "property1": null,
        "property2": null
      },
      "sources": [
        {
          "baseSpecs": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "codec": {
            "property1": null,
            "property2": null
          },
          "doesNotNeedSplitting": true,
          "metadata": {
            "estimatedSizeBytes": "string",
            "infinite": true,
            "producesSortedKeys": true
          },
          "spec": {
            "property1": null,
            "property2": null
          }
        }
      ],
      "tag": "string"
    }
  ],
  "valueCombiningFn": {
    "property1": null,
    "property2": null
  }
}
```

An instruction that does a partial group-by-key. One input and one output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|[InstructionInput](#schemainstructioninput)|false|none|Describes the input to the partial group-by-key instruction.|
|inputElementCodec|object|false|none|The codec to use for interpreting an element in the input PTable.|
|originalCombineValuesInputStoreName|string|false|none|If this instruction includes a combining function this is the name of the intermediate store between the GBK and the CombineValues.|
|originalCombineValuesStepName|string|false|none|If this instruction includes a combining function, this is the name of the CombineValues instruction lifted into this instruction.|
|sideInputs|[[SideInputInfo](#schemasideinputinfo)]|false|none|Zero or more side inputs.|
|valueCombiningFn|object|false|none|The value combining function to invoke.|

<h2 id="tocS_PipelineDescription">PipelineDescription</h2>
<!-- backwards compatibility -->
<a id="schemapipelinedescription"></a>
<a id="schema_PipelineDescription"></a>
<a id="tocSpipelinedescription"></a>
<a id="tocspipelinedescription"></a>

```json
{
  "displayData": [
    {
      "boolValue": true,
      "durationValue": "string",
      "floatValue": 0,
      "int64Value": "string",
      "javaClassValue": "string",
      "key": "string",
      "label": "string",
      "namespace": "string",
      "shortStrValue": "string",
      "strValue": "string",
      "timestampValue": "string",
      "url": "string"
    }
  ],
  "executionPipelineStage": [
    {
      "componentSource": [
        {
          "name": "string",
          "originalTransformOrCollection": "string",
          "userName": "string"
        }
      ],
      "componentTransform": [
        {
          "name": "string",
          "originalTransform": "string",
          "userName": "string"
        }
      ],
      "id": "string",
      "inputSource": [
        {
          "name": "string",
          "originalTransformOrCollection": "string",
          "sizeBytes": "string",
          "userName": "string"
        }
      ],
      "kind": "UNKNOWN_KIND",
      "name": "string",
      "outputSource": [
        {
          "name": "string",
          "originalTransformOrCollection": "string",
          "sizeBytes": "string",
          "userName": "string"
        }
      ],
      "prerequisiteStage": [
        "string"
      ]
    }
  ],
  "originalPipelineTransform": [
    {
      "displayData": [
        {
          "boolValue": true,
          "durationValue": "string",
          "floatValue": 0,
          "int64Value": "string",
          "javaClassValue": "string",
          "key": "string",
          "label": "string",
          "namespace": "string",
          "shortStrValue": "string",
          "strValue": "string",
          "timestampValue": "string",
          "url": "string"
        }
      ],
      "id": "string",
      "inputCollectionName": [
        "string"
      ],
      "kind": "UNKNOWN_KIND",
      "name": "string",
      "outputCollectionName": [
        "string"
      ]
    }
  ],
  "stepNamesHash": "string"
}
```

A descriptive representation of submitted pipeline as well as the executed form. This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayData|[[DisplayData](#schemadisplaydata)]|false|none|Pipeline level display data.|
|executionPipelineStage|[[ExecutionStageSummary](#schemaexecutionstagesummary)]|false|none|Description of each stage of execution of the pipeline.|
|originalPipelineTransform|[[TransformSummary](#schematransformsummary)]|false|none|Description of each transform in the pipeline and collections between them.|
|stepNamesHash|string|false|none|A hash value of the submitted pipeline portable graph step names if exists.|

<h2 id="tocS_Point">Point</h2>
<!-- backwards compatibility -->
<a id="schemapoint"></a>
<a id="schema_Point"></a>
<a id="tocSpoint"></a>
<a id="tocspoint"></a>

```json
{
  "time": "string",
  "value": 0
}
```

A point in the timeseries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|string(google-datetime)|false|none|The timestamp of the point.|
|value|number(double)|false|none|The value of the point.|

<h2 id="tocS_Position">Position</h2>
<!-- backwards compatibility -->
<a id="schemaposition"></a>
<a id="schema_Position"></a>
<a id="tocSposition"></a>
<a id="tocsposition"></a>

```json
{
  "byteOffset": "string",
  "concatPosition": {
    "index": 0,
    "position": {}
  },
  "end": true,
  "key": "string",
  "recordIndex": "string",
  "shufflePosition": "string"
}
```

Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|byteOffset|string(int64)|false|none|Position is a byte offset.|
|concatPosition|[ConcatPosition](#schemaconcatposition)|false|none|CloudPosition is a concat position.|
|end|boolean|false|none|Position is past all other positions. Also useful for the end position of an unbounded range.|
|key|string|false|none|Position is a string key, ordered lexicographically.|
|recordIndex|string(int64)|false|none|Position is a record index.|
|shufflePosition|string|false|none|CloudPosition is a base64 encoded BatchShufflePosition (with FIXED sharding).|

<h2 id="tocS_ProgressTimeseries">ProgressTimeseries</h2>
<!-- backwards compatibility -->
<a id="schemaprogresstimeseries"></a>
<a id="schema_ProgressTimeseries"></a>
<a id="tocSprogresstimeseries"></a>
<a id="tocsprogresstimeseries"></a>

```json
{
  "currentProgress": 0,
  "dataPoints": [
    {
      "time": "string",
      "value": 0
    }
  ]
}
```

Information about the progress of some component of job execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentProgress|number(double)|false|none|The current progress of the component, in the range [0,1].|
|dataPoints|[[Point](#schemapoint)]|false|none|History of progress for the component. Points are sorted by time.|

<h2 id="tocS_PubSubIODetails">PubSubIODetails</h2>
<!-- backwards compatibility -->
<a id="schemapubsubiodetails"></a>
<a id="schema_PubSubIODetails"></a>
<a id="tocSpubsubiodetails"></a>
<a id="tocspubsubiodetails"></a>

```json
{
  "subscription": "string",
  "topic": "string"
}
```

Metadata for a Pub/Sub connector used by the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscription|string|false|none|Subscription used in the connection.|
|topic|string|false|none|Topic accessed in the connection.|

<h2 id="tocS_PubsubLocation">PubsubLocation</h2>
<!-- backwards compatibility -->
<a id="schemapubsublocation"></a>
<a id="schema_PubsubLocation"></a>
<a id="tocSpubsublocation"></a>
<a id="tocspubsublocation"></a>

```json
{
  "dropLateData": true,
  "idLabel": "string",
  "subscription": "string",
  "timestampLabel": "string",
  "topic": "string",
  "trackingSubscription": "string",
  "withAttributes": true
}
```

Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dropLateData|boolean|false|none|Indicates whether the pipeline allows late-arriving data.|
|idLabel|string|false|none|If set, contains a pubsub label from which to extract record ids. If left empty, record deduplication will be strictly best effort.|
|subscription|string|false|none|A pubsub subscription, in the form of "pubsub.googleapis.com/subscriptions//"|
|timestampLabel|string|false|none|If set, contains a pubsub label from which to extract record timestamps. If left empty, record timestamps will be generated upon arrival.|
|topic|string|false|none|A pubsub topic, in the form of "pubsub.googleapis.com/topics//"|
|trackingSubscription|string|false|none|If set, specifies the pubsub subscription that will be used for tracking custom time timestamps for watermark estimation.|
|withAttributes|boolean|false|none|If true, then the client has requested to get pubsub attributes.|

<h2 id="tocS_PubsubSnapshotMetadata">PubsubSnapshotMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapubsubsnapshotmetadata"></a>
<a id="schema_PubsubSnapshotMetadata"></a>
<a id="tocSpubsubsnapshotmetadata"></a>
<a id="tocspubsubsnapshotmetadata"></a>

```json
{
  "expireTime": "string",
  "snapshotName": "string",
  "topicName": "string"
}
```

Represents a Pubsub snapshot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expireTime|string(google-datetime)|false|none|The expire time of the Pubsub snapshot.|
|snapshotName|string|false|none|The name of the Pubsub snapshot.|
|topicName|string|false|none|The name of the Pubsub topic.|

<h2 id="tocS_ReadInstruction">ReadInstruction</h2>
<!-- backwards compatibility -->
<a id="schemareadinstruction"></a>
<a id="schema_ReadInstruction"></a>
<a id="tocSreadinstruction"></a>
<a id="tocsreadinstruction"></a>

```json
{
  "source": {
    "baseSpecs": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "codec": {
      "property1": null,
      "property2": null
    },
    "doesNotNeedSplitting": true,
    "metadata": {
      "estimatedSizeBytes": "string",
      "infinite": true,
      "producesSortedKeys": true
    },
    "spec": {
      "property1": null,
      "property2": null
    }
  }
}
```

An instruction that reads records. Takes no inputs, produces one output.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|[Source](#schemasource)|false|none|The source to read from.|

<h2 id="tocS_ReportWorkItemStatusRequest">ReportWorkItemStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemareportworkitemstatusrequest"></a>
<a id="schema_ReportWorkItemStatusRequest"></a>
<a id="tocSreportworkitemstatusrequest"></a>
<a id="tocsreportworkitemstatusrequest"></a>

```json
{
  "currentWorkerTime": "string",
  "location": "string",
  "unifiedWorkerRequest": {
    "property1": null,
    "property2": null
  },
  "workItemStatuses": [
    {
      "completed": true,
      "counterUpdates": [
        {
          "boolean": true,
          "cumulative": true,
          "distribution": {
            "count": {
              "highBits": 0,
              "lowBits": 0
            },
            "histogram": {
              "bucketCounts": [
                "string"
              ],
              "firstBucketOffset": 0
            },
            "max": {
              "highBits": 0,
              "lowBits": 0
            },
            "min": {
              "highBits": 0,
              "lowBits": 0
            },
            "sum": {
              "highBits": 0,
              "lowBits": 0
            },
            "sumOfSquares": 0
          },
          "floatingPoint": 0,
          "floatingPointList": {
            "elements": [
              0
            ]
          },
          "floatingPointMean": {
            "count": {
              "highBits": 0,
              "lowBits": 0
            },
            "sum": 0
          },
          "integer": {
            "highBits": 0,
            "lowBits": 0
          },
          "integerGauge": {
            "timestamp": "string",
            "value": {
              "highBits": 0,
              "lowBits": 0
            }
          },
          "integerList": {
            "elements": [
              {
                "highBits": 0,
                "lowBits": 0
              }
            ]
          },
          "integerMean": {
            "count": {
              "highBits": 0,
              "lowBits": 0
            },
            "sum": {
              "highBits": 0,
              "lowBits": 0
            }
          },
          "internal": null,
          "nameAndKind": {
            "kind": "INVALID",
            "name": "string"
          },
          "shortId": "string",
          "stringList": {
            "elements": [
              "string"
            ]
          },
          "structuredNameAndMetadata": {
            "metadata": {
              "description": "string",
              "kind": "INVALID",
              "otherUnits": "string",
              "standardUnits": "BYTES"
            },
            "name": {
              "componentStepName": "string",
              "executionStepName": "string",
              "inputIndex": 0,
              "name": "string",
              "origin": "SYSTEM",
              "originNamespace": "string",
              "originalRequestingStepName": "string",
              "originalStepName": "string",
              "portion": "ALL",
              "workerId": "string"
            }
          }
        }
      ],
      "dynamicSourceSplit": {
        "primary": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "residual": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        }
      },
      "errors": [
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
      ],
      "metricUpdates": [
        {
          "cumulative": true,
          "distribution": null,
          "gauge": null,
          "internal": null,
          "kind": "string",
          "meanCount": null,
          "meanSum": null,
          "name": {
            "context": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "origin": "string"
          },
          "scalar": null,
          "set": null,
          "updateTime": "string"
        }
      ],
      "progress": {
        "percentComplete": 0,
        "position": {
          "byteOffset": "string",
          "concatPosition": {},
          "end": true,
          "key": "string",
          "recordIndex": "string",
          "shufflePosition": "string"
        },
        "remainingTime": "string"
      },
      "reportIndex": "string",
      "reportedProgress": {
        "consumedParallelism": {
          "isInfinite": true,
          "value": 0
        },
        "fractionConsumed": 0,
        "position": {
          "byteOffset": "string",
          "concatPosition": {},
          "end": true,
          "key": "string",
          "recordIndex": "string",
          "shufflePosition": "string"
        },
        "remainingParallelism": {
          "isInfinite": true,
          "value": 0
        }
      },
      "requestedLeaseDuration": "string",
      "sourceFork": {
        "primary": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "primarySource": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "residual": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "residualSource": {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        }
      },
      "sourceOperationResponse": {
        "getMetadata": {
          "metadata": {
            "estimatedSizeBytes": "string",
            "infinite": true,
            "producesSortedKeys": true
          }
        },
        "split": {
          "bundles": [
            {
              "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
              "source": {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            }
          ],
          "outcome": "SOURCE_SPLIT_OUTCOME_UNKNOWN",
          "shards": [
            {
              "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
              "source": {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            }
          ]
        }
      },
      "stopPosition": {
        "byteOffset": "string",
        "concatPosition": {},
        "end": true,
        "key": "string",
        "recordIndex": "string",
        "shufflePosition": "string"
      },
      "totalThrottlerWaitTimeSeconds": 0,
      "workItemId": "string"
    }
  ],
  "workerId": "string"
}
```

Request to report the status of WorkItems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentWorkerTime|string(google-datetime)|false|none|The current timestamp at the worker.|
|location|string|false|none|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.|
|unifiedWorkerRequest|object|false|none|Untranslated bag-of-bytes WorkProgressUpdateRequest from UnifiedWorker.|
|workItemStatuses|[[WorkItemStatus](#schemaworkitemstatus)]|false|none|The order is unimportant, except that the order of the WorkItemServiceState messages in the ReportWorkItemStatusResponse corresponds to the order of WorkItemStatus messages here.|
|workerId|string|false|none|The ID of the worker reporting the WorkItem status. If this does not match the ID of the worker which the Dataflow service believes currently has the lease on the WorkItem, the report will be dropped (with an error response).|

<h2 id="tocS_ReportWorkItemStatusResponse">ReportWorkItemStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemareportworkitemstatusresponse"></a>
<a id="schema_ReportWorkItemStatusResponse"></a>
<a id="tocSreportworkitemstatusresponse"></a>
<a id="tocsreportworkitemstatusresponse"></a>

```json
{
  "unifiedWorkerResponse": {
    "property1": null,
    "property2": null
  },
  "workItemServiceStates": [
    {
      "completeWorkStatus": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "harnessData": {
        "property1": null,
        "property2": null
      },
      "hotKeyDetection": {
        "hotKeyAge": "string",
        "systemName": "string",
        "userStepName": "string"
      },
      "leaseExpireTime": "string",
      "metricShortId": [
        {
          "metricIndex": 0,
          "shortId": "string"
        }
      ],
      "nextReportIndex": "string",
      "reportStatusInterval": "string",
      "splitRequest": {
        "fractionConsumed": 0,
        "fractionOfRemainder": 0,
        "position": {
          "byteOffset": "string",
          "concatPosition": {},
          "end": true,
          "key": "string",
          "recordIndex": "string",
          "shufflePosition": "string"
        }
      },
      "suggestedStopPoint": {
        "percentComplete": 0,
        "position": {
          "byteOffset": "string",
          "concatPosition": {},
          "end": true,
          "key": "string",
          "recordIndex": "string",
          "shufflePosition": "string"
        },
        "remainingTime": "string"
      },
      "suggestedStopPosition": {
        "byteOffset": "string",
        "concatPosition": {},
        "end": true,
        "key": "string",
        "recordIndex": "string",
        "shufflePosition": "string"
      }
    }
  ]
}
```

Response from a request to report the status of WorkItems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unifiedWorkerResponse|object|false|none|Untranslated bag-of-bytes WorkProgressUpdateResponse for UnifiedWorker.|
|workItemServiceStates|[[WorkItemServiceState](#schemaworkitemservicestate)]|false|none|A set of messages indicating the service-side state for each WorkItem whose status was reported, in the same order as the WorkItemStatus messages in the ReportWorkItemStatusRequest which resulting in this response.|

<h2 id="tocS_ReportedParallelism">ReportedParallelism</h2>
<!-- backwards compatibility -->
<a id="schemareportedparallelism"></a>
<a id="schema_ReportedParallelism"></a>
<a id="tocSreportedparallelism"></a>
<a id="tocsreportedparallelism"></a>

```json
{
  "isInfinite": true,
  "value": 0
}
```

Represents the level of parallelism in a WorkItem's input, reported by the worker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isInfinite|boolean|false|none|Specifies whether the parallelism is infinite. If true, "value" is ignored. Infinite parallelism means the service will assume that the work item can always be split into more non-empty work items by dynamic splitting. This is a work-around for lack of support for infinity by the current JSON-based Java RPC stack.|
|value|number(double)|false|none|Specifies the level of parallelism in case it is finite.|

<h2 id="tocS_ResourceUtilizationReport">ResourceUtilizationReport</h2>
<!-- backwards compatibility -->
<a id="schemaresourceutilizationreport"></a>
<a id="schema_ResourceUtilizationReport"></a>
<a id="tocSresourceutilizationreport"></a>
<a id="tocsresourceutilizationreport"></a>

```json
{
  "containers": {
    "property1": {
      "containers": {
        "property1": {},
        "property2": {}
      },
      "cpuTime": [
        {
          "rate": 0,
          "timestamp": "string",
          "totalMs": "string"
        }
      ],
      "memoryInfo": [
        {
          "currentLimitBytes": "string",
          "currentOoms": "string",
          "currentRssBytes": "string",
          "timestamp": "string",
          "totalGbMs": "string"
        }
      ]
    },
    "property2": {
      "containers": {
        "property1": {},
        "property2": {}
      },
      "cpuTime": [
        {
          "rate": 0,
          "timestamp": "string",
          "totalMs": "string"
        }
      ],
      "memoryInfo": [
        {
          "currentLimitBytes": "string",
          "currentOoms": "string",
          "currentRssBytes": "string",
          "timestamp": "string",
          "totalGbMs": "string"
        }
      ]
    }
  },
  "cpuTime": [
    {
      "rate": 0,
      "timestamp": "string",
      "totalMs": "string"
    }
  ],
  "memoryInfo": [
    {
      "currentLimitBytes": "string",
      "currentOoms": "string",
      "currentRssBytes": "string",
      "timestamp": "string",
      "totalGbMs": "string"
    }
  ]
}
```

Worker metrics exported from workers. This contains resource utilization metrics accumulated from a variety of sources. For more information, see go/df-resource-signals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containers|object|false|none|Per container information. Key: container name.|
|cpuTime|[[CPUTime](#schemacputime)]|false|none|CPU utilization samples.|
|memoryInfo|[[MemInfo](#schemameminfo)]|false|none|Memory utilization samples.|

<h2 id="tocS_ResourceUtilizationReportResponse">ResourceUtilizationReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresourceutilizationreportresponse"></a>
<a id="schema_ResourceUtilizationReportResponse"></a>
<a id="tocSresourceutilizationreportresponse"></a>
<a id="tocsresourceutilizationreportresponse"></a>

```json
{}
```

Service-side response to WorkerMessage reporting resource utilization.

<h2 id="tocS_RuntimeEnvironment">RuntimeEnvironment</h2>
<!-- backwards compatibility -->
<a id="schemaruntimeenvironment"></a>
<a id="schema_RuntimeEnvironment"></a>
<a id="tocSruntimeenvironment"></a>
<a id="tocsruntimeenvironment"></a>

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
|additionalExperiments|[string]|false|none|Optional. Additional experiment flags for the job, specified with the `--experiments` option.|
|additionalUserLabels|object|false|none|Optional. Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }.|
|bypassTempDirValidation|boolean|false|none|Optional. Whether to bypass the safety checks for the job's temporary directory. Use with caution.|
|enableStreamingEngine|boolean|false|none|Optional. Whether to enable Streaming Engine for the job.|
|ipConfiguration|string|false|none|Optional. Configuration for VM IPs.|
|kmsKeyName|string|false|none|Optional. Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/|
|machineType|string|false|none|Optional. The machine type to use for the job. Defaults to the value from the template if not specified.|
|maxWorkers|integer(int32)|false|none|Optional. The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. The default value is 1.|
|network|string|false|none|Optional. Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".|
|numWorkers|integer(int32)|false|none|Optional. The initial number of Google Compute Engine instances for the job. The default value is 11.|
|serviceAccountEmail|string|false|none|Optional. The email address of the service account to run the job as.|
|subnetwork|string|false|none|Optional. Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.|
|tempLocation|string|false|none|Required. The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`.|
|workerRegion|string|false|none|Required. The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region.|
|workerZone|string|false|none|Optional. The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence.|
|zone|string|false|none|Optional. The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence.|

#### Enumerated Values

|Property|Value|
|---|---|
|ipConfiguration|WORKER_IP_UNSPECIFIED|
|ipConfiguration|WORKER_IP_PUBLIC|
|ipConfiguration|WORKER_IP_PRIVATE|

<h2 id="tocS_RuntimeMetadata">RuntimeMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaruntimemetadata"></a>
<a id="schema_RuntimeMetadata"></a>
<a id="tocSruntimemetadata"></a>
<a id="tocsruntimemetadata"></a>

```json
{
  "parameters": [
    {
      "customMetadata": {
        "property1": "string",
        "property2": "string"
      },
      "groupName": "string",
      "helpText": "string",
      "isOptional": true,
      "label": "string",
      "name": "string",
      "paramType": "DEFAULT",
      "parentName": "string",
      "parentTriggerValues": [
        "string"
      ],
      "regexes": [
        "string"
      ]
    }
  ],
  "sdkInfo": {
    "language": "UNKNOWN",
    "version": "string"
  }
}
```

RuntimeMetadata describing a runtime environment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|[[ParameterMetadata](#schemaparametermetadata)]|false|none|The parameters for the template.|
|sdkInfo|[SDKInfo](#schemasdkinfo)|false|none|SDK Info for the template.|

<h2 id="tocS_SDKInfo">SDKInfo</h2>
<!-- backwards compatibility -->
<a id="schemasdkinfo"></a>
<a id="schema_SDKInfo"></a>
<a id="tocSsdkinfo"></a>
<a id="tocssdkinfo"></a>

```json
{
  "language": "UNKNOWN",
  "version": "string"
}
```

SDK Information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|language|string|false|none|Required. The SDK Language.|
|version|string|false|none|Optional. The SDK version.|

#### Enumerated Values

|Property|Value|
|---|---|
|language|UNKNOWN|
|language|JAVA|
|language|PYTHON|
|language|GO|

<h2 id="tocS_SdkHarnessContainerImage">SdkHarnessContainerImage</h2>
<!-- backwards compatibility -->
<a id="schemasdkharnesscontainerimage"></a>
<a id="schema_SdkHarnessContainerImage"></a>
<a id="tocSsdkharnesscontainerimage"></a>
<a id="tocssdkharnesscontainerimage"></a>

```json
{
  "capabilities": [
    "string"
  ],
  "containerImage": "string",
  "environmentId": "string",
  "useSingleCorePerContainer": true
}
```

Defines an SDK harness container for executing Dataflow pipelines.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[string]|false|none|The set of capabilities enumerated in the above Environment proto. See also [beam_runner_api.proto](https://github.com/apache/beam/blob/master/model/pipeline/src/main/proto/org/apache/beam/model/pipeline/v1/beam_runner_api.proto)|
|containerImage|string|false|none|A docker container image that resides in Google Container Registry.|
|environmentId|string|false|none|Environment ID for the Beam runner API proto Environment that corresponds to the current SDK Harness.|
|useSingleCorePerContainer|boolean|false|none|If true, recommends the Dataflow service to use only one core per SDK container instance with this image. If false (or unset) recommends using more than one core per SDK container instance with this image for efficiency. Note that Dataflow service may choose to override this property if needed.|

<h2 id="tocS_SdkVersion">SdkVersion</h2>
<!-- backwards compatibility -->
<a id="schemasdkversion"></a>
<a id="schema_SdkVersion"></a>
<a id="tocSsdkversion"></a>
<a id="tocssdkversion"></a>

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

<h2 id="tocS_SendDebugCaptureRequest">SendDebugCaptureRequest</h2>
<!-- backwards compatibility -->
<a id="schemasenddebugcapturerequest"></a>
<a id="schema_SendDebugCaptureRequest"></a>
<a id="tocSsenddebugcapturerequest"></a>
<a id="tocssenddebugcapturerequest"></a>

```json
{
  "componentId": "string",
  "data": "string",
  "dataFormat": "DATA_FORMAT_UNSPECIFIED",
  "location": "string",
  "workerId": "string"
}
```

Request to send encoded debug information. Next ID: 8

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentId|string|false|none|The internal component id for which debug information is sent.|
|data|string|false|none|The encoded debug information.|
|dataFormat|string|false|none|Format for the data field above (id=5).|
|location|string|false|none|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.|
|workerId|string|false|none|The worker id, i.e., VM hostname.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataFormat|DATA_FORMAT_UNSPECIFIED|
|dataFormat|RAW|
|dataFormat|JSON|
|dataFormat|ZLIB|
|dataFormat|BROTLI|

<h2 id="tocS_SendDebugCaptureResponse">SendDebugCaptureResponse</h2>
<!-- backwards compatibility -->
<a id="schemasenddebugcaptureresponse"></a>
<a id="schema_SendDebugCaptureResponse"></a>
<a id="tocSsenddebugcaptureresponse"></a>
<a id="tocssenddebugcaptureresponse"></a>

```json
{}
```

Response to a send capture request. nothing

<h2 id="tocS_SendWorkerMessagesRequest">SendWorkerMessagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasendworkermessagesrequest"></a>
<a id="schema_SendWorkerMessagesRequest"></a>
<a id="tocSsendworkermessagesrequest"></a>
<a id="tocssendworkermessagesrequest"></a>

```json
{
  "location": "string",
  "workerMessages": [
    {
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "time": "string",
      "workerHealthReport": {
        "msg": "string",
        "pods": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "reportInterval": "string",
        "vmBrokenCode": "string",
        "vmIsBroken": true,
        "vmIsHealthy": true,
        "vmStartupTime": "string"
      },
      "workerLifecycleEvent": {
        "containerStartTime": "string",
        "event": "UNKNOWN_EVENT",
        "metadata": {
          "property1": "string",
          "property2": "string"
        }
      },
      "workerMessageCode": {
        "code": "string",
        "parameters": {
          "property1": null,
          "property2": null
        }
      },
      "workerMetrics": {
        "containers": {
          "property1": {},
          "property2": {}
        },
        "cpuTime": [
          {
            "rate": 0,
            "timestamp": "string",
            "totalMs": "string"
          }
        ],
        "memoryInfo": [
          {
            "currentLimitBytes": "string",
            "currentOoms": "string",
            "currentRssBytes": "string",
            "timestamp": "string",
            "totalGbMs": "string"
          }
        ]
      },
      "workerShutdownNotice": {
        "reason": "string"
      },
      "workerThreadScalingReport": {
        "currentThreadCount": 0
      }
    }
  ]
}
```

A request for sending worker messages to the service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|string|false|none|The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job.|
|workerMessages|[[WorkerMessage](#schemaworkermessage)]|false|none|The WorkerMessages to send.|

<h2 id="tocS_SendWorkerMessagesResponse">SendWorkerMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasendworkermessagesresponse"></a>
<a id="schema_SendWorkerMessagesResponse"></a>
<a id="tocSsendworkermessagesresponse"></a>
<a id="tocssendworkermessagesresponse"></a>

```json
{
  "workerMessageResponses": [
    {
      "workerHealthReportResponse": {
        "reportInterval": "string"
      },
      "workerMetricsResponse": {},
      "workerShutdownNoticeResponse": {},
      "workerThreadScalingReportResponse": {
        "recommendedThreadCount": 0
      }
    }
  ]
}
```

The response to the worker messages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workerMessageResponses|[[WorkerMessageResponse](#schemaworkermessageresponse)]|false|none|The servers response to the worker messages.|

<h2 id="tocS_SeqMapTask">SeqMapTask</h2>
<!-- backwards compatibility -->
<a id="schemaseqmaptask"></a>
<a id="schema_SeqMapTask"></a>
<a id="tocSseqmaptask"></a>
<a id="tocsseqmaptask"></a>

```json
{
  "inputs": [
    {
      "kind": {
        "property1": null,
        "property2": null
      },
      "sources": [
        {
          "baseSpecs": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "codec": {
            "property1": null,
            "property2": null
          },
          "doesNotNeedSplitting": true,
          "metadata": {
            "estimatedSizeBytes": "string",
            "infinite": true,
            "producesSortedKeys": true
          },
          "spec": {
            "property1": null,
            "property2": null
          }
        }
      ],
      "tag": "string"
    }
  ],
  "name": "string",
  "outputInfos": [
    {
      "sink": {
        "codec": {
          "property1": null,
          "property2": null
        },
        "spec": {
          "property1": null,
          "property2": null
        }
      },
      "tag": "string"
    }
  ],
  "stageName": "string",
  "systemName": "string",
  "userFn": {
    "property1": null,
    "property2": null
  }
}
```

Describes a particular function to invoke.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[SideInputInfo](#schemasideinputinfo)]|false|none|Information about each of the inputs.|
|name|string|false|none|The user-provided name of the SeqDo operation.|
|outputInfos|[[SeqMapTaskOutputInfo](#schemaseqmaptaskoutputinfo)]|false|none|Information about each of the outputs.|
|stageName|string|false|none|System-defined name of the stage containing the SeqDo operation. Unique across the workflow.|
|systemName|string|false|none|System-defined name of the SeqDo operation. Unique across the workflow.|
|userFn|object|false|none|The user function to invoke.|

<h2 id="tocS_SeqMapTaskOutputInfo">SeqMapTaskOutputInfo</h2>
<!-- backwards compatibility -->
<a id="schemaseqmaptaskoutputinfo"></a>
<a id="schema_SeqMapTaskOutputInfo"></a>
<a id="tocSseqmaptaskoutputinfo"></a>
<a id="tocsseqmaptaskoutputinfo"></a>

```json
{
  "sink": {
    "codec": {
      "property1": null,
      "property2": null
    },
    "spec": {
      "property1": null,
      "property2": null
    }
  },
  "tag": "string"
}
```

Information about an output of a SeqMapTask.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sink|[Sink](#schemasink)|false|none|The sink to write the output value to.|
|tag|string|false|none|The id of the TupleTag the user code will tag the output value by.|

<h2 id="tocS_ShellTask">ShellTask</h2>
<!-- backwards compatibility -->
<a id="schemashelltask"></a>
<a id="schema_ShellTask"></a>
<a id="tocSshelltask"></a>
<a id="tocsshelltask"></a>

```json
{
  "command": "string",
  "exitCode": 0
}
```

A task which consists of a shell command for the worker to execute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|command|string|false|none|The shell command to run.|
|exitCode|integer(int32)|false|none|Exit code for the task.|

<h2 id="tocS_SideInputInfo">SideInputInfo</h2>
<!-- backwards compatibility -->
<a id="schemasideinputinfo"></a>
<a id="schema_SideInputInfo"></a>
<a id="tocSsideinputinfo"></a>
<a id="tocssideinputinfo"></a>

```json
{
  "kind": {
    "property1": null,
    "property2": null
  },
  "sources": [
    {
      "baseSpecs": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "codec": {
        "property1": null,
        "property2": null
      },
      "doesNotNeedSplitting": true,
      "metadata": {
        "estimatedSizeBytes": "string",
        "infinite": true,
        "producesSortedKeys": true
      },
      "spec": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "tag": "string"
}
```

Information about a side input of a DoFn or an input of a SeqDoFn.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|object|false|none|How to interpret the source element(s) as a side input value.|
|sources|[[Source](#schemasource)]|false|none|The source(s) to read element(s) from to get the value of this side input. If more than one source, then the elements are taken from the sources, in the specified order if order matters. At least one source is required.|
|tag|string|false|none|The id of the tag the user code will access this side input by; this should correspond to the tag of some MultiOutputInfo.|

<h2 id="tocS_Sink">Sink</h2>
<!-- backwards compatibility -->
<a id="schemasink"></a>
<a id="schema_Sink"></a>
<a id="tocSsink"></a>
<a id="tocssink"></a>

```json
{
  "codec": {
    "property1": null,
    "property2": null
  },
  "spec": {
    "property1": null,
    "property2": null
  }
}
```

A sink that records can be encoded and written to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|codec|object|false|none|The codec to use to encode data written to the sink.|
|spec|object|false|none|The sink to write to, plus its parameters.|

<h2 id="tocS_Snapshot">Snapshot</h2>
<!-- backwards compatibility -->
<a id="schemasnapshot"></a>
<a id="schema_Snapshot"></a>
<a id="tocSsnapshot"></a>
<a id="tocssnapshot"></a>

```json
{
  "creationTime": "string",
  "description": "string",
  "diskSizeBytes": "string",
  "id": "string",
  "projectId": "string",
  "pubsubMetadata": [
    {
      "expireTime": "string",
      "snapshotName": "string",
      "topicName": "string"
    }
  ],
  "region": "string",
  "sourceJobId": "string",
  "state": "UNKNOWN_SNAPSHOT_STATE",
  "ttl": "string"
}
```

Represents a snapshot of a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|string(google-datetime)|false|none|The time this snapshot was created.|
|description|string|false|none|User specified description of the snapshot. Maybe empty.|
|diskSizeBytes|string(int64)|false|none|The disk byte size of the snapshot. Only available for snapshots in READY state.|
|id|string|false|none|The unique ID of this snapshot.|
|projectId|string|false|none|The project this snapshot belongs to.|
|pubsubMetadata|[[PubsubSnapshotMetadata](#schemapubsubsnapshotmetadata)]|false|none|Pub/Sub snapshot metadata.|
|region|string|false|none|Cloud region where this snapshot lives in, e.g., "us-central1".|
|sourceJobId|string|false|none|The job this snapshot was created from.|
|state|string|false|none|State of the snapshot.|
|ttl|string(google-duration)|false|none|The time after which this snapshot will be automatically deleted.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|UNKNOWN_SNAPSHOT_STATE|
|state|PENDING|
|state|RUNNING|
|state|READY|
|state|FAILED|
|state|DELETED|

<h2 id="tocS_SnapshotJobRequest">SnapshotJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemasnapshotjobrequest"></a>
<a id="schema_SnapshotJobRequest"></a>
<a id="tocSsnapshotjobrequest"></a>
<a id="tocssnapshotjobrequest"></a>

```json
{
  "description": "string",
  "location": "string",
  "snapshotSources": true,
  "ttl": "string"
}
```

Request to create a snapshot of a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|User specified description of the snapshot. Maybe empty.|
|location|string|false|none|The location that contains this job.|
|snapshotSources|boolean|false|none|If true, perform snapshots for sources which support this.|
|ttl|string(google-duration)|false|none|TTL for the snapshot.|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "baseSpecs": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "codec": {
    "property1": null,
    "property2": null
  },
  "doesNotNeedSplitting": true,
  "metadata": {
    "estimatedSizeBytes": "string",
    "infinite": true,
    "producesSortedKeys": true
  },
  "spec": {
    "property1": null,
    "property2": null
  }
}
```

A source that records can be read and decoded from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseSpecs|[object]|false|none|While splitting, sources may specify the produced bundles as differences against another source, in order to save backend-side memory and allow bigger jobs. For details, see SourceSplitRequest. To support this use case, the full set of parameters of the source is logically obtained by taking the latest explicitly specified value of each parameter in the order: base_specs (later items win), spec (overrides anything in base_specs).|
|codec|object|false|none|The codec to use to decode data read from the source.|
|doesNotNeedSplitting|boolean|false|none|Setting this value to true hints to the framework that the source doesn't need splitting, and using SourceSplitRequest on it would yield SOURCE_SPLIT_OUTCOME_USE_CURRENT. E.g. a file splitter may set this to true when splitting a single file into a set of byte ranges of appropriate size, and set this to false when splitting a filepattern into individual files. However, for efficiency, a file splitter may decide to produce file subranges directly from the filepattern to avoid a splitting round-trip. See SourceSplitRequest for an overview of the splitting process. This field is meaningful only in the Source objects populated by the user (e.g. when filling in a DerivedSource). Source objects supplied by the framework to the user don't have this field populated.|
|metadata|[SourceMetadata](#schemasourcemetadata)|false|none|Optionally, metadata for this source can be supplied right away, avoiding a SourceGetMetadataOperation roundtrip (see SourceOperationRequest). This field is meaningful only in the Source objects populated by the user (e.g. when filling in a DerivedSource). Source objects supplied by the framework to the user don't have this field populated.|
|spec|object|false|none|The source to read from, plus its parameters.|

<h2 id="tocS_SourceFork">SourceFork</h2>
<!-- backwards compatibility -->
<a id="schemasourcefork"></a>
<a id="schema_SourceFork"></a>
<a id="tocSsourcefork"></a>
<a id="tocssourcefork"></a>

```json
{
  "primary": {
    "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
    "source": {
      "baseSpecs": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "codec": {
        "property1": null,
        "property2": null
      },
      "doesNotNeedSplitting": true,
      "metadata": {
        "estimatedSizeBytes": "string",
        "infinite": true,
        "producesSortedKeys": true
      },
      "spec": {
        "property1": null,
        "property2": null
      }
    }
  },
  "primarySource": {
    "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
    "source": {
      "baseSpecs": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "codec": {
        "property1": null,
        "property2": null
      },
      "doesNotNeedSplitting": true,
      "metadata": {
        "estimatedSizeBytes": "string",
        "infinite": true,
        "producesSortedKeys": true
      },
      "spec": {
        "property1": null,
        "property2": null
      }
    }
  },
  "residual": {
    "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
    "source": {
      "baseSpecs": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "codec": {
        "property1": null,
        "property2": null
      },
      "doesNotNeedSplitting": true,
      "metadata": {
        "estimatedSizeBytes": "string",
        "infinite": true,
        "producesSortedKeys": true
      },
      "spec": {
        "property1": null,
        "property2": null
      }
    }
  },
  "residualSource": {
    "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
    "source": {
      "baseSpecs": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "codec": {
        "property1": null,
        "property2": null
      },
      "doesNotNeedSplitting": true,
      "metadata": {
        "estimatedSizeBytes": "string",
        "infinite": true,
        "producesSortedKeys": true
      },
      "spec": {
        "property1": null,
        "property2": null
      }
    }
  }
}
```

DEPRECATED in favor of DynamicSourceSplit.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primary|[SourceSplitShard](#schemasourcesplitshard)|false|none|DEPRECATED|
|primarySource|[DerivedSource](#schemaderivedsource)|false|none|DEPRECATED|
|residual|[SourceSplitShard](#schemasourcesplitshard)|false|none|DEPRECATED|
|residualSource|[DerivedSource](#schemaderivedsource)|false|none|DEPRECATED|

<h2 id="tocS_SourceGetMetadataRequest">SourceGetMetadataRequest</h2>
<!-- backwards compatibility -->
<a id="schemasourcegetmetadatarequest"></a>
<a id="schema_SourceGetMetadataRequest"></a>
<a id="tocSsourcegetmetadatarequest"></a>
<a id="tocssourcegetmetadatarequest"></a>

```json
{
  "source": {
    "baseSpecs": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "codec": {
      "property1": null,
      "property2": null
    },
    "doesNotNeedSplitting": true,
    "metadata": {
      "estimatedSizeBytes": "string",
      "infinite": true,
      "producesSortedKeys": true
    },
    "spec": {
      "property1": null,
      "property2": null
    }
  }
}
```

A request to compute the SourceMetadata of a Source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|[Source](#schemasource)|false|none|Specification of the source whose metadata should be computed.|

<h2 id="tocS_SourceGetMetadataResponse">SourceGetMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemasourcegetmetadataresponse"></a>
<a id="schema_SourceGetMetadataResponse"></a>
<a id="tocSsourcegetmetadataresponse"></a>
<a id="tocssourcegetmetadataresponse"></a>

```json
{
  "metadata": {
    "estimatedSizeBytes": "string",
    "infinite": true,
    "producesSortedKeys": true
  }
}
```

The result of a SourceGetMetadataOperation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|[SourceMetadata](#schemasourcemetadata)|false|none|The computed metadata.|

<h2 id="tocS_SourceMetadata">SourceMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasourcemetadata"></a>
<a id="schema_SourceMetadata"></a>
<a id="tocSsourcemetadata"></a>
<a id="tocssourcemetadata"></a>

```json
{
  "estimatedSizeBytes": "string",
  "infinite": true,
  "producesSortedKeys": true
}
```

Metadata about a Source useful for automatically optimizing and tuning the pipeline, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|estimatedSizeBytes|string(int64)|false|none|An estimate of the total size (in bytes) of the data that would be read from this source. This estimate is in terms of external storage size, before any decompression or other processing done by the reader.|
|infinite|boolean|false|none|Specifies that the size of this source is known to be infinite (this is a streaming source).|
|producesSortedKeys|boolean|false|none|Whether this source is known to produce key/value pairs with the (encoded) keys in lexicographically sorted order.|

<h2 id="tocS_SourceOperationRequest">SourceOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemasourceoperationrequest"></a>
<a id="schema_SourceOperationRequest"></a>
<a id="tocSsourceoperationrequest"></a>
<a id="tocssourceoperationrequest"></a>

```json
{
  "getMetadata": {
    "source": {
      "baseSpecs": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "codec": {
        "property1": null,
        "property2": null
      },
      "doesNotNeedSplitting": true,
      "metadata": {
        "estimatedSizeBytes": "string",
        "infinite": true,
        "producesSortedKeys": true
      },
      "spec": {
        "property1": null,
        "property2": null
      }
    }
  },
  "name": "string",
  "originalName": "string",
  "split": {
    "options": {
      "desiredBundleSizeBytes": "string",
      "desiredShardSizeBytes": "string"
    },
    "source": {
      "baseSpecs": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "codec": {
        "property1": null,
        "property2": null
      },
      "doesNotNeedSplitting": true,
      "metadata": {
        "estimatedSizeBytes": "string",
        "infinite": true,
        "producesSortedKeys": true
      },
      "spec": {
        "property1": null,
        "property2": null
      }
    }
  },
  "stageName": "string",
  "systemName": "string"
}
```

A work item that represents the different operations that can be performed on a user-defined Source specification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|getMetadata|[SourceGetMetadataRequest](#schemasourcegetmetadatarequest)|false|none|Information about a request to get metadata about a source.|
|name|string|false|none|User-provided name of the Read instruction for this source.|
|originalName|string|false|none|System-defined name for the Read instruction for this source in the original workflow graph.|
|split|[SourceSplitRequest](#schemasourcesplitrequest)|false|none|Information about a request to split a source.|
|stageName|string|false|none|System-defined name of the stage containing the source operation. Unique across the workflow.|
|systemName|string|false|none|System-defined name of the Read instruction for this source. Unique across the workflow.|

<h2 id="tocS_SourceOperationResponse">SourceOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemasourceoperationresponse"></a>
<a id="schema_SourceOperationResponse"></a>
<a id="tocSsourceoperationresponse"></a>
<a id="tocssourceoperationresponse"></a>

```json
{
  "getMetadata": {
    "metadata": {
      "estimatedSizeBytes": "string",
      "infinite": true,
      "producesSortedKeys": true
    }
  },
  "split": {
    "bundles": [
      {
        "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
        "source": {
          "baseSpecs": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "codec": {
            "property1": null,
            "property2": null
          },
          "doesNotNeedSplitting": true,
          "metadata": {
            "estimatedSizeBytes": "string",
            "infinite": true,
            "producesSortedKeys": true
          },
          "spec": {
            "property1": null,
            "property2": null
          }
        }
      }
    ],
    "outcome": "SOURCE_SPLIT_OUTCOME_UNKNOWN",
    "shards": [
      {
        "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
        "source": {
          "baseSpecs": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "codec": {
            "property1": null,
            "property2": null
          },
          "doesNotNeedSplitting": true,
          "metadata": {
            "estimatedSizeBytes": "string",
            "infinite": true,
            "producesSortedKeys": true
          },
          "spec": {
            "property1": null,
            "property2": null
          }
        }
      }
    ]
  }
}
```

The result of a SourceOperationRequest, specified in ReportWorkItemStatusRequest.source_operation when the work item is completed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|getMetadata|[SourceGetMetadataResponse](#schemasourcegetmetadataresponse)|false|none|A response to a request to get metadata about a source.|
|split|[SourceSplitResponse](#schemasourcesplitresponse)|false|none|A response to a request to split a source.|

<h2 id="tocS_SourceSplitOptions">SourceSplitOptions</h2>
<!-- backwards compatibility -->
<a id="schemasourcesplitoptions"></a>
<a id="schema_SourceSplitOptions"></a>
<a id="tocSsourcesplitoptions"></a>
<a id="tocssourcesplitoptions"></a>

```json
{
  "desiredBundleSizeBytes": "string",
  "desiredShardSizeBytes": "string"
}
```

Hints for splitting a Source into bundles (parts for parallel processing) using SourceSplitRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desiredBundleSizeBytes|string(int64)|false|none|The source should be split into a set of bundles where the estimated size of each is approximately this many bytes.|
|desiredShardSizeBytes|string(int64)|false|none|DEPRECATED in favor of desired_bundle_size_bytes.|

<h2 id="tocS_SourceSplitRequest">SourceSplitRequest</h2>
<!-- backwards compatibility -->
<a id="schemasourcesplitrequest"></a>
<a id="schema_SourceSplitRequest"></a>
<a id="tocSsourcesplitrequest"></a>
<a id="tocssourcesplitrequest"></a>

```json
{
  "options": {
    "desiredBundleSizeBytes": "string",
    "desiredShardSizeBytes": "string"
  },
  "source": {
    "baseSpecs": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "codec": {
      "property1": null,
      "property2": null
    },
    "doesNotNeedSplitting": true,
    "metadata": {
      "estimatedSizeBytes": "string",
      "infinite": true,
      "producesSortedKeys": true
    },
    "spec": {
      "property1": null,
      "property2": null
    }
  }
}
```

Represents the operation to split a high-level Source specification into bundles (parts for parallel processing). At a high level, splitting of a source into bundles happens as follows: SourceSplitRequest is applied to the source. If it returns SOURCE_SPLIT_OUTCOME_USE_CURRENT, no further splitting happens and the source is used "as is". Otherwise, splitting is applied recursively to each produced DerivedSource. As an optimization, for any Source, if its does_not_need_splitting is true, the framework assumes that splitting this source would return SOURCE_SPLIT_OUTCOME_USE_CURRENT, and doesn't initiate a SourceSplitRequest. This applies both to the initial source being split and to bundles produced from it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[SourceSplitOptions](#schemasourcesplitoptions)|false|none|Hints for tuning the splitting process.|
|source|[Source](#schemasource)|false|none|Specification of the source to be split.|

<h2 id="tocS_SourceSplitResponse">SourceSplitResponse</h2>
<!-- backwards compatibility -->
<a id="schemasourcesplitresponse"></a>
<a id="schema_SourceSplitResponse"></a>
<a id="tocSsourcesplitresponse"></a>
<a id="tocssourcesplitresponse"></a>

```json
{
  "bundles": [
    {
      "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
      "source": {
        "baseSpecs": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "codec": {
          "property1": null,
          "property2": null
        },
        "doesNotNeedSplitting": true,
        "metadata": {
          "estimatedSizeBytes": "string",
          "infinite": true,
          "producesSortedKeys": true
        },
        "spec": {
          "property1": null,
          "property2": null
        }
      }
    }
  ],
  "outcome": "SOURCE_SPLIT_OUTCOME_UNKNOWN",
  "shards": [
    {
      "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
      "source": {
        "baseSpecs": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "codec": {
          "property1": null,
          "property2": null
        },
        "doesNotNeedSplitting": true,
        "metadata": {
          "estimatedSizeBytes": "string",
          "infinite": true,
          "producesSortedKeys": true
        },
        "spec": {
          "property1": null,
          "property2": null
        }
      }
    }
  ]
}
```

The response to a SourceSplitRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundles|[[DerivedSource](#schemaderivedsource)]|false|none|If outcome is SPLITTING_HAPPENED, then this is a list of bundles into which the source was split. Otherwise this field is ignored. This list can be empty, which means the source represents an empty input.|
|outcome|string|false|none|Indicates whether splitting happened and produced a list of bundles. If this is USE_CURRENT_SOURCE_AS_IS, the current source should be processed "as is" without splitting. "bundles" is ignored in this case. If this is SPLITTING_HAPPENED, then "bundles" contains a list of bundles into which the source was split.|
|shards|[[SourceSplitShard](#schemasourcesplitshard)]|false|none|DEPRECATED in favor of bundles.|

#### Enumerated Values

|Property|Value|
|---|---|
|outcome|SOURCE_SPLIT_OUTCOME_UNKNOWN|
|outcome|SOURCE_SPLIT_OUTCOME_USE_CURRENT|
|outcome|SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED|

<h2 id="tocS_SourceSplitShard">SourceSplitShard</h2>
<!-- backwards compatibility -->
<a id="schemasourcesplitshard"></a>
<a id="schema_SourceSplitShard"></a>
<a id="tocSsourcesplitshard"></a>
<a id="tocssourcesplitshard"></a>

```json
{
  "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
  "source": {
    "baseSpecs": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "codec": {
      "property1": null,
      "property2": null
    },
    "doesNotNeedSplitting": true,
    "metadata": {
      "estimatedSizeBytes": "string",
      "infinite": true,
      "producesSortedKeys": true
    },
    "spec": {
      "property1": null,
      "property2": null
    }
  }
}
```

DEPRECATED in favor of DerivedSource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|derivationMode|string|false|none|DEPRECATED|
|source|[Source](#schemasource)|false|none|DEPRECATED|

#### Enumerated Values

|Property|Value|
|---|---|
|derivationMode|SOURCE_DERIVATION_MODE_UNKNOWN|
|derivationMode|SOURCE_DERIVATION_MODE_INDEPENDENT|
|derivationMode|SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT|
|derivationMode|SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT|

<h2 id="tocS_SpannerIODetails">SpannerIODetails</h2>
<!-- backwards compatibility -->
<a id="schemaspanneriodetails"></a>
<a id="schema_SpannerIODetails"></a>
<a id="tocSspanneriodetails"></a>
<a id="tocsspanneriodetails"></a>

```json
{
  "databaseId": "string",
  "instanceId": "string",
  "projectId": "string"
}
```

Metadata for a Spanner connector used by the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databaseId|string|false|none|DatabaseId accessed in the connection.|
|instanceId|string|false|none|InstanceId accessed in the connection.|
|projectId|string|false|none|ProjectId accessed in the connection.|

<h2 id="tocS_SplitInt64">SplitInt64</h2>
<!-- backwards compatibility -->
<a id="schemasplitint64"></a>
<a id="schema_SplitInt64"></a>
<a id="tocSsplitint64"></a>
<a id="tocssplitint64"></a>

```json
{
  "highBits": 0,
  "lowBits": 0
}
```

A representation of an int64, n, that is immune to precision loss when encoded in JSON.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|highBits|integer(int32)|false|none|The high order bits, including the sign: n >> 32.|
|lowBits|integer(uint32)|false|none|The low order bits: n & 0xffffffff.|

<h2 id="tocS_StageExecutionDetails">StageExecutionDetails</h2>
<!-- backwards compatibility -->
<a id="schemastageexecutiondetails"></a>
<a id="schema_StageExecutionDetails"></a>
<a id="tocSstageexecutiondetails"></a>
<a id="tocsstageexecutiondetails"></a>

```json
{
  "nextPageToken": "string",
  "workers": [
    {
      "workItems": [
        {
          "attemptId": "string",
          "endTime": "string",
          "metrics": [
            {
              "cumulative": true,
              "distribution": null,
              "gauge": null,
              "internal": null,
              "kind": "string",
              "meanCount": null,
              "meanSum": null,
              "name": {
                "context": {
                  "property1": "string",
                  "property2": "string"
                },
                "name": "string",
                "origin": "string"
              },
              "scalar": null,
              "set": null,
              "updateTime": "string"
            }
          ],
          "progress": {
            "currentProgress": 0,
            "dataPoints": [
              {
                "time": "string",
                "value": 0
              }
            ]
          },
          "startTime": "string",
          "state": "EXECUTION_STATE_UNKNOWN",
          "stragglerInfo": {
            "causes": {
              "property1": {
                "hotKey": {
                  "detectedHotKeys": {
                    "property1": {
                      "hotKeyAge": "string",
                      "key": "string",
                      "keyTruncated": true
                    },
                    "property2": {
                      "hotKeyAge": "string",
                      "key": "string",
                      "keyTruncated": true
                    }
                  }
                }
              },
              "property2": {
                "hotKey": {
                  "detectedHotKeys": {
                    "property1": {
                      "hotKeyAge": "string",
                      "key": "string",
                      "keyTruncated": true
                    },
                    "property2": {
                      "hotKeyAge": "string",
                      "key": "string",
                      "keyTruncated": true
                    }
                  }
                }
              }
            },
            "startTime": "string"
          },
          "taskId": "string"
        }
      ],
      "workerName": "string"
    }
  ]
}
```

Information about the workers and work items within a stage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If present, this response does not contain all requested tasks. To obtain the next page of results, repeat the request with page_token set to this value.|
|workers|[[WorkerDetails](#schemaworkerdetails)]|false|none|Workers that have done work on the stage.|

<h2 id="tocS_StageSource">StageSource</h2>
<!-- backwards compatibility -->
<a id="schemastagesource"></a>
<a id="schema_StageSource"></a>
<a id="tocSstagesource"></a>
<a id="tocsstagesource"></a>

```json
{
  "name": "string",
  "originalTransformOrCollection": "string",
  "sizeBytes": "string",
  "userName": "string"
}
```

Description of an input or output of an execution stage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Dataflow service generated name for this source.|
|originalTransformOrCollection|string|false|none|User name for the original user transform or collection with which this source is most closely associated.|
|sizeBytes|string(int64)|false|none|Size of the source, if measurable.|
|userName|string|false|none|Human-readable name for this source; may be user or system generated.|

<h2 id="tocS_StageSummary">StageSummary</h2>
<!-- backwards compatibility -->
<a id="schemastagesummary"></a>
<a id="schema_StageSummary"></a>
<a id="tocSstagesummary"></a>
<a id="tocsstagesummary"></a>

```json
{
  "endTime": "string",
  "metrics": [
    {
      "cumulative": true,
      "distribution": null,
      "gauge": null,
      "internal": null,
      "kind": "string",
      "meanCount": null,
      "meanSum": null,
      "name": {
        "context": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "origin": "string"
      },
      "scalar": null,
      "set": null,
      "updateTime": "string"
    }
  ],
  "progress": {
    "currentProgress": 0,
    "dataPoints": [
      {
        "time": "string",
        "value": 0
      }
    ]
  },
  "stageId": "string",
  "startTime": "string",
  "state": "EXECUTION_STATE_UNKNOWN",
  "stragglerSummary": {
    "recentStragglers": [
      {
        "batchStraggler": {
          "causes": {
            "property1": {
              "hotKey": {
                "detectedHotKeys": {
                  "property1": {
                    "hotKeyAge": "string",
                    "key": "string",
                    "keyTruncated": true
                  },
                  "property2": {
                    "hotKeyAge": "string",
                    "key": "string",
                    "keyTruncated": true
                  }
                }
              }
            },
            "property2": {
              "hotKey": {
                "detectedHotKeys": {
                  "property1": {
                    "hotKeyAge": "string",
                    "key": "string",
                    "keyTruncated": true
                  },
                  "property2": {
                    "hotKeyAge": "string",
                    "key": "string",
                    "keyTruncated": true
                  }
                }
              }
            }
          },
          "startTime": "string"
        },
        "streamingStraggler": {
          "dataWatermarkLag": "string",
          "endTime": "string",
          "startTime": "string",
          "systemWatermarkLag": "string",
          "workerName": "string"
        }
      }
    ],
    "stragglerCauseCount": {
      "property1": "string",
      "property2": "string"
    },
    "totalStragglerCount": "string"
  }
}
```

Information about a particular execution stage of a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|End time of this stage. If the work item is completed, this is the actual end time of the stage. Otherwise, it is the predicted end time.|
|metrics|[[MetricUpdate](#schemametricupdate)]|false|none|Metrics for this stage.|
|progress|[ProgressTimeseries](#schemaprogresstimeseries)|false|none|Progress for this stage. Only applicable to Batch jobs.|
|stageId|string|false|none|ID of this stage|
|startTime|string(google-datetime)|false|none|Start time of this stage.|
|state|string|false|none|State of this stage.|
|stragglerSummary|[StragglerSummary](#schemastragglersummary)|false|none|Straggler summary for this stage.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|EXECUTION_STATE_UNKNOWN|
|state|EXECUTION_STATE_NOT_STARTED|
|state|EXECUTION_STATE_RUNNING|
|state|EXECUTION_STATE_SUCCEEDED|
|state|EXECUTION_STATE_FAILED|
|state|EXECUTION_STATE_CANCELLED|

<h2 id="tocS_StateFamilyConfig">StateFamilyConfig</h2>
<!-- backwards compatibility -->
<a id="schemastatefamilyconfig"></a>
<a id="schema_StateFamilyConfig"></a>
<a id="tocSstatefamilyconfig"></a>
<a id="tocsstatefamilyconfig"></a>

```json
{
  "isRead": true,
  "stateFamily": "string"
}
```

State family configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isRead|boolean|false|none|If true, this family corresponds to a read operation.|
|stateFamily|string|false|none|The state family value.|

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

<h2 id="tocS_Step">Step</h2>
<!-- backwards compatibility -->
<a id="schemastep"></a>
<a id="schema_Step"></a>
<a id="tocSstep"></a>
<a id="tocsstep"></a>

```json
{
  "kind": "string",
  "name": "string",
  "properties": {
    "property1": null,
    "property2": null
  }
}
```

Defines a particular step within a Cloud Dataflow job. A job consists of multiple steps, each of which performs some specific operation as part of the overall job. Data is typically passed from one step to another as part of the job. **Note:** The properties of this object are not stable and might change. Here's an example of a sequence of steps which together implement a Map-Reduce job: * Read a collection of data from some source, parsing the collection's elements. * Validate the elements. * Apply a user-defined function to map each element to some value and extract an element-specific key value. * Group elements with the same key into a single element with that key, transforming a multiply-keyed collection into a uniquely-keyed collection. * Write the elements out to some data sink. Note that the Cloud Dataflow service may be used to run many different types of jobs, not just Map-Reduce.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|The kind of step in the Cloud Dataflow job.|
|name|string|false|none|The name that identifies the step. This must be unique for each step with respect to all other steps in the Cloud Dataflow job.|
|properties|object|false|none|Named properties associated with the step. Each kind of predefined step has its own required set of properties. Must be provided on Create. Only retrieved with JOB_VIEW_ALL.|

<h2 id="tocS_Straggler">Straggler</h2>
<!-- backwards compatibility -->
<a id="schemastraggler"></a>
<a id="schema_Straggler"></a>
<a id="tocSstraggler"></a>
<a id="tocsstraggler"></a>

```json
{
  "batchStraggler": {
    "causes": {
      "property1": {
        "hotKey": {
          "detectedHotKeys": {
            "property1": {
              "hotKeyAge": "string",
              "key": "string",
              "keyTruncated": true
            },
            "property2": {
              "hotKeyAge": "string",
              "key": "string",
              "keyTruncated": true
            }
          }
        }
      },
      "property2": {
        "hotKey": {
          "detectedHotKeys": {
            "property1": {
              "hotKeyAge": "string",
              "key": "string",
              "keyTruncated": true
            },
            "property2": {
              "hotKeyAge": "string",
              "key": "string",
              "keyTruncated": true
            }
          }
        }
      }
    },
    "startTime": "string"
  },
  "streamingStraggler": {
    "dataWatermarkLag": "string",
    "endTime": "string",
    "startTime": "string",
    "systemWatermarkLag": "string",
    "workerName": "string"
  }
}
```

Information for a straggler.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchStraggler|[StragglerInfo](#schemastragglerinfo)|false|none|Batch straggler identification and debugging information.|
|streamingStraggler|[StreamingStragglerInfo](#schemastreamingstragglerinfo)|false|none|Streaming straggler identification and debugging information.|

<h2 id="tocS_StragglerDebuggingInfo">StragglerDebuggingInfo</h2>
<!-- backwards compatibility -->
<a id="schemastragglerdebugginginfo"></a>
<a id="schema_StragglerDebuggingInfo"></a>
<a id="tocSstragglerdebugginginfo"></a>
<a id="tocsstragglerdebugginginfo"></a>

```json
{
  "hotKey": {
    "detectedHotKeys": {
      "property1": {
        "hotKeyAge": "string",
        "key": "string",
        "keyTruncated": true
      },
      "property2": {
        "hotKeyAge": "string",
        "key": "string",
        "keyTruncated": true
      }
    }
  }
}
```

Information useful for debugging a straggler. Each type will provide specialized debugging information relevant for a particular cause. The StragglerDebuggingInfo will be 1:1 mapping to the StragglerCause enum.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hotKey|[HotKeyDebuggingInfo](#schemahotkeydebugginginfo)|false|none|Hot key debugging details.|

<h2 id="tocS_StragglerInfo">StragglerInfo</h2>
<!-- backwards compatibility -->
<a id="schemastragglerinfo"></a>
<a id="schema_StragglerInfo"></a>
<a id="tocSstragglerinfo"></a>
<a id="tocsstragglerinfo"></a>

```json
{
  "causes": {
    "property1": {
      "hotKey": {
        "detectedHotKeys": {
          "property1": {
            "hotKeyAge": "string",
            "key": "string",
            "keyTruncated": true
          },
          "property2": {
            "hotKeyAge": "string",
            "key": "string",
            "keyTruncated": true
          }
        }
      }
    },
    "property2": {
      "hotKey": {
        "detectedHotKeys": {
          "property1": {
            "hotKeyAge": "string",
            "key": "string",
            "keyTruncated": true
          },
          "property2": {
            "hotKeyAge": "string",
            "key": "string",
            "keyTruncated": true
          }
        }
      }
    }
  },
  "startTime": "string"
}
```

Information useful for straggler identification and debugging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|causes|object|false|none|The straggler causes, keyed by the string representation of the StragglerCause enum and contains specialized debugging information for each straggler cause.|
|startTime|string(google-datetime)|false|none|The time when the work item attempt became a straggler.|

<h2 id="tocS_StragglerSummary">StragglerSummary</h2>
<!-- backwards compatibility -->
<a id="schemastragglersummary"></a>
<a id="schema_StragglerSummary"></a>
<a id="tocSstragglersummary"></a>
<a id="tocsstragglersummary"></a>

```json
{
  "recentStragglers": [
    {
      "batchStraggler": {
        "causes": {
          "property1": {
            "hotKey": {
              "detectedHotKeys": {
                "property1": {
                  "hotKeyAge": "string",
                  "key": "string",
                  "keyTruncated": true
                },
                "property2": {
                  "hotKeyAge": "string",
                  "key": "string",
                  "keyTruncated": true
                }
              }
            }
          },
          "property2": {
            "hotKey": {
              "detectedHotKeys": {
                "property1": {
                  "hotKeyAge": "string",
                  "key": "string",
                  "keyTruncated": true
                },
                "property2": {
                  "hotKeyAge": "string",
                  "key": "string",
                  "keyTruncated": true
                }
              }
            }
          }
        },
        "startTime": "string"
      },
      "streamingStraggler": {
        "dataWatermarkLag": "string",
        "endTime": "string",
        "startTime": "string",
        "systemWatermarkLag": "string",
        "workerName": "string"
      }
    }
  ],
  "stragglerCauseCount": {
    "property1": "string",
    "property2": "string"
  },
  "totalStragglerCount": "string"
}
```

Summarized straggler identification details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recentStragglers|[[Straggler](#schemastraggler)]|false|none|The most recent stragglers.|
|stragglerCauseCount|object|false|none|Aggregated counts of straggler causes, keyed by the string representation of the StragglerCause enum.|
|totalStragglerCount|string(int64)|false|none|The total count of stragglers.|

<h2 id="tocS_StreamLocation">StreamLocation</h2>
<!-- backwards compatibility -->
<a id="schemastreamlocation"></a>
<a id="schema_StreamLocation"></a>
<a id="tocSstreamlocation"></a>
<a id="tocsstreamlocation"></a>

```json
{
  "customSourceLocation": {
    "stateful": true
  },
  "pubsubLocation": {
    "dropLateData": true,
    "idLabel": "string",
    "subscription": "string",
    "timestampLabel": "string",
    "topic": "string",
    "trackingSubscription": "string",
    "withAttributes": true
  },
  "sideInputLocation": {
    "stateFamily": "string",
    "tag": "string"
  },
  "streamingStageLocation": {
    "streamId": "string"
  }
}
```

Describes a stream of data, either as input to be processed or as output of a streaming Dataflow job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customSourceLocation|[CustomSourceLocation](#schemacustomsourcelocation)|false|none|The stream is a custom source.|
|pubsubLocation|[PubsubLocation](#schemapubsublocation)|false|none|The stream is a pubsub stream.|
|sideInputLocation|[StreamingSideInputLocation](#schemastreamingsideinputlocation)|false|none|The stream is a streaming side input.|
|streamingStageLocation|[StreamingStageLocation](#schemastreamingstagelocation)|false|none|The stream is part of another computation within the current streaming Dataflow job.|

<h2 id="tocS_StreamingApplianceSnapshotConfig">StreamingApplianceSnapshotConfig</h2>
<!-- backwards compatibility -->
<a id="schemastreamingappliancesnapshotconfig"></a>
<a id="schema_StreamingApplianceSnapshotConfig"></a>
<a id="tocSstreamingappliancesnapshotconfig"></a>
<a id="tocsstreamingappliancesnapshotconfig"></a>

```json
{
  "importStateEndpoint": "string",
  "snapshotId": "string"
}
```

Streaming appliance snapshot configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|importStateEndpoint|string|false|none|Indicates which endpoint is used to import appliance state.|
|snapshotId|string|false|none|If set, indicates the snapshot id for the snapshot being performed.|

<h2 id="tocS_StreamingComputationConfig">StreamingComputationConfig</h2>
<!-- backwards compatibility -->
<a id="schemastreamingcomputationconfig"></a>
<a id="schema_StreamingComputationConfig"></a>
<a id="tocSstreamingcomputationconfig"></a>
<a id="tocsstreamingcomputationconfig"></a>

```json
{
  "computationId": "string",
  "instructions": [
    {
      "flatten": {
        "inputs": [
          {
            "outputNum": 0,
            "producerInstructionIndex": 0
          }
        ]
      },
      "name": "string",
      "originalName": "string",
      "outputs": [
        {
          "codec": {
            "property1": null,
            "property2": null
          },
          "name": "string",
          "onlyCountKeyBytes": true,
          "onlyCountValueBytes": true,
          "originalName": "string",
          "systemName": "string"
        }
      ],
      "parDo": {
        "input": {
          "outputNum": 0,
          "producerInstructionIndex": 0
        },
        "multiOutputInfos": [
          {
            "tag": "string"
          }
        ],
        "numOutputs": 0,
        "sideInputs": [
          {
            "kind": {
              "property1": null,
              "property2": null
            },
            "sources": [
              {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            ],
            "tag": "string"
          }
        ],
        "userFn": {
          "property1": null,
          "property2": null
        }
      },
      "partialGroupByKey": {
        "input": {
          "outputNum": 0,
          "producerInstructionIndex": 0
        },
        "inputElementCodec": {
          "property1": null,
          "property2": null
        },
        "originalCombineValuesInputStoreName": "string",
        "originalCombineValuesStepName": "string",
        "sideInputs": [
          {
            "kind": {
              "property1": null,
              "property2": null
            },
            "sources": [
              {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            ],
            "tag": "string"
          }
        ],
        "valueCombiningFn": {
          "property1": null,
          "property2": null
        }
      },
      "read": {
        "source": {
          "baseSpecs": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "codec": {
            "property1": null,
            "property2": null
          },
          "doesNotNeedSplitting": true,
          "metadata": {
            "estimatedSizeBytes": "string",
            "infinite": true,
            "producesSortedKeys": true
          },
          "spec": {
            "property1": null,
            "property2": null
          }
        }
      },
      "systemName": "string",
      "write": {
        "input": {
          "outputNum": 0,
          "producerInstructionIndex": 0
        },
        "sink": {
          "codec": {
            "property1": null,
            "property2": null
          },
          "spec": {
            "property1": null,
            "property2": null
          }
        }
      }
    }
  ],
  "stageName": "string",
  "systemName": "string",
  "transformUserNameToStateFamily": {
    "property1": "string",
    "property2": "string"
  }
}
```

Configuration information for a single streaming computation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computationId|string|false|none|Unique identifier for this computation.|
|instructions|[[ParallelInstruction](#schemaparallelinstruction)]|false|none|Instructions that comprise the computation.|
|stageName|string|false|none|Stage name of this computation.|
|systemName|string|false|none|System defined name for this computation.|
|transformUserNameToStateFamily|object|false|none|Map from user name of stateful transforms in this stage to their state family.|

<h2 id="tocS_StreamingComputationRanges">StreamingComputationRanges</h2>
<!-- backwards compatibility -->
<a id="schemastreamingcomputationranges"></a>
<a id="schema_StreamingComputationRanges"></a>
<a id="tocSstreamingcomputationranges"></a>
<a id="tocsstreamingcomputationranges"></a>

```json
{
  "computationId": "string",
  "rangeAssignments": [
    {
      "dataDisk": "string",
      "end": "string",
      "start": "string"
    }
  ]
}
```

Describes full or partial data disk assignment information of the computation ranges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computationId|string|false|none|The ID of the computation.|
|rangeAssignments|[[KeyRangeDataDiskAssignment](#schemakeyrangedatadiskassignment)]|false|none|Data disk assignments for ranges from this computation.|

<h2 id="tocS_StreamingComputationTask">StreamingComputationTask</h2>
<!-- backwards compatibility -->
<a id="schemastreamingcomputationtask"></a>
<a id="schema_StreamingComputationTask"></a>
<a id="tocSstreamingcomputationtask"></a>
<a id="tocsstreamingcomputationtask"></a>

```json
{
  "computationRanges": [
    {
      "computationId": "string",
      "rangeAssignments": [
        {
          "dataDisk": "string",
          "end": "string",
          "start": "string"
        }
      ]
    }
  ],
  "dataDisks": [
    {
      "dataDisk": "string"
    }
  ],
  "taskType": "STREAMING_COMPUTATION_TASK_UNKNOWN"
}
```

A task which describes what action should be performed for the specified streaming computation ranges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computationRanges|[[StreamingComputationRanges](#schemastreamingcomputationranges)]|false|none|Contains ranges of a streaming computation this task should apply to.|
|dataDisks|[[MountedDataDisk](#schemamounteddatadisk)]|false|none|Describes the set of data disks this task should apply to.|
|taskType|string|false|none|A type of streaming computation task.|

#### Enumerated Values

|Property|Value|
|---|---|
|taskType|STREAMING_COMPUTATION_TASK_UNKNOWN|
|taskType|STREAMING_COMPUTATION_TASK_STOP|
|taskType|STREAMING_COMPUTATION_TASK_START|

<h2 id="tocS_StreamingConfigTask">StreamingConfigTask</h2>
<!-- backwards compatibility -->
<a id="schemastreamingconfigtask"></a>
<a id="schema_StreamingConfigTask"></a>
<a id="tocSstreamingconfigtask"></a>
<a id="tocsstreamingconfigtask"></a>

```json
{
  "commitStreamChunkSizeBytes": "string",
  "getDataStreamChunkSizeBytes": "string",
  "maxWorkItemCommitBytes": "string",
  "streamingComputationConfigs": [
    {
      "computationId": "string",
      "instructions": [
        {
          "flatten": {
            "inputs": [
              {
                "outputNum": 0,
                "producerInstructionIndex": 0
              }
            ]
          },
          "name": "string",
          "originalName": "string",
          "outputs": [
            {
              "codec": {
                "property1": null,
                "property2": null
              },
              "name": "string",
              "onlyCountKeyBytes": true,
              "onlyCountValueBytes": true,
              "originalName": "string",
              "systemName": "string"
            }
          ],
          "parDo": {
            "input": {
              "outputNum": 0,
              "producerInstructionIndex": 0
            },
            "multiOutputInfos": [
              {
                "tag": "string"
              }
            ],
            "numOutputs": 0,
            "sideInputs": [
              {
                "kind": {
                  "property1": null,
                  "property2": null
                },
                "sources": [
                  {
                    "baseSpecs": [
                      {
                        "property1": null,
                        "property2": null
                      }
                    ],
                    "codec": {
                      "property1": null,
                      "property2": null
                    },
                    "doesNotNeedSplitting": true,
                    "metadata": {
                      "estimatedSizeBytes": "string",
                      "infinite": true,
                      "producesSortedKeys": true
                    },
                    "spec": {
                      "property1": null,
                      "property2": null
                    }
                  }
                ],
                "tag": "string"
              }
            ],
            "userFn": {
              "property1": null,
              "property2": null
            }
          },
          "partialGroupByKey": {
            "input": {
              "outputNum": 0,
              "producerInstructionIndex": 0
            },
            "inputElementCodec": {
              "property1": null,
              "property2": null
            },
            "originalCombineValuesInputStoreName": "string",
            "originalCombineValuesStepName": "string",
            "sideInputs": [
              {
                "kind": {
                  "property1": null,
                  "property2": null
                },
                "sources": [
                  {
                    "baseSpecs": [
                      {
                        "property1": null,
                        "property2": null
                      }
                    ],
                    "codec": {
                      "property1": null,
                      "property2": null
                    },
                    "doesNotNeedSplitting": true,
                    "metadata": {
                      "estimatedSizeBytes": "string",
                      "infinite": true,
                      "producesSortedKeys": true
                    },
                    "spec": {
                      "property1": null,
                      "property2": null
                    }
                  }
                ],
                "tag": "string"
              }
            ],
            "valueCombiningFn": {
              "property1": null,
              "property2": null
            }
          },
          "read": {
            "source": {
              "baseSpecs": [
                {
                  "property1": null,
                  "property2": null
                }
              ],
              "codec": {
                "property1": null,
                "property2": null
              },
              "doesNotNeedSplitting": true,
              "metadata": {
                "estimatedSizeBytes": "string",
                "infinite": true,
                "producesSortedKeys": true
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            }
          },
          "systemName": "string",
          "write": {
            "input": {
              "outputNum": 0,
              "producerInstructionIndex": 0
            },
            "sink": {
              "codec": {
                "property1": null,
                "property2": null
              },
              "spec": {
                "property1": null,
                "property2": null
              }
            }
          }
        }
      ],
      "stageName": "string",
      "systemName": "string",
      "transformUserNameToStateFamily": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "userStepToStateFamilyNameMap": {
    "property1": "string",
    "property2": "string"
  },
  "windmillServiceEndpoint": "string",
  "windmillServicePort": "string"
}
```

A task that carries configuration information for streaming computations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitStreamChunkSizeBytes|string(int64)|false|none|Chunk size for commit streams from the harness to windmill.|
|getDataStreamChunkSizeBytes|string(int64)|false|none|Chunk size for get data streams from the harness to windmill.|
|maxWorkItemCommitBytes|string(int64)|false|none|Maximum size for work item commit supported windmill storage layer.|
|streamingComputationConfigs|[[StreamingComputationConfig](#schemastreamingcomputationconfig)]|false|none|Set of computation configuration information.|
|userStepToStateFamilyNameMap|object|false|none|Map from user step names to state families.|
|windmillServiceEndpoint|string|false|none|If present, the worker must use this endpoint to communicate with Windmill Service dispatchers, otherwise the worker must continue to use whatever endpoint it had been using.|
|windmillServicePort|string(int64)|false|none|If present, the worker must use this port to communicate with Windmill Service dispatchers. Only applicable when windmill_service_endpoint is specified.|

<h2 id="tocS_StreamingSetupTask">StreamingSetupTask</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsetuptask"></a>
<a id="schema_StreamingSetupTask"></a>
<a id="tocSstreamingsetuptask"></a>
<a id="tocsstreamingsetuptask"></a>

```json
{
  "drain": true,
  "receiveWorkPort": 0,
  "snapshotConfig": {
    "importStateEndpoint": "string",
    "snapshotId": "string"
  },
  "streamingComputationTopology": {
    "computations": [
      {
        "computationId": "string",
        "inputs": [
          {
            "customSourceLocation": {
              "stateful": true
            },
            "pubsubLocation": {
              "dropLateData": true,
              "idLabel": "string",
              "subscription": "string",
              "timestampLabel": "string",
              "topic": "string",
              "trackingSubscription": "string",
              "withAttributes": true
            },
            "sideInputLocation": {
              "stateFamily": "string",
              "tag": "string"
            },
            "streamingStageLocation": {
              "streamId": "string"
            }
          }
        ],
        "keyRanges": [
          {
            "dataDisk": "string",
            "deliveryEndpoint": "string",
            "deprecatedPersistentDirectory": "string",
            "end": "string",
            "start": "string"
          }
        ],
        "outputs": [
          {
            "customSourceLocation": {
              "stateful": true
            },
            "pubsubLocation": {
              "dropLateData": true,
              "idLabel": "string",
              "subscription": "string",
              "timestampLabel": "string",
              "topic": "string",
              "trackingSubscription": "string",
              "withAttributes": true
            },
            "sideInputLocation": {
              "stateFamily": "string",
              "tag": "string"
            },
            "streamingStageLocation": {
              "streamId": "string"
            }
          }
        ],
        "stateFamilies": [
          {
            "isRead": true,
            "stateFamily": "string"
          }
        ],
        "systemStageName": "string"
      }
    ],
    "dataDiskAssignments": [
      {
        "dataDisks": [
          "string"
        ],
        "vmInstance": "string"
      }
    ],
    "forwardingKeyBits": 0,
    "persistentStateVersion": 0,
    "userStageToComputationNameMap": {
      "property1": "string",
      "property2": "string"
    }
  },
  "workerHarnessPort": 0
}
```

A task which initializes part of a streaming Dataflow job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|drain|boolean|false|none|The user has requested drain.|
|receiveWorkPort|integer(int32)|false|none|The TCP port on which the worker should listen for messages from other streaming computation workers.|
|snapshotConfig|[StreamingApplianceSnapshotConfig](#schemastreamingappliancesnapshotconfig)|false|none|Configures streaming appliance snapshot.|
|streamingComputationTopology|[TopologyConfig](#schematopologyconfig)|false|none|The global topology of the streaming Dataflow job.|
|workerHarnessPort|integer(int32)|false|none|The TCP port used by the worker to communicate with the Dataflow worker harness.|

<h2 id="tocS_StreamingSideInputLocation">StreamingSideInputLocation</h2>
<!-- backwards compatibility -->
<a id="schemastreamingsideinputlocation"></a>
<a id="schema_StreamingSideInputLocation"></a>
<a id="tocSstreamingsideinputlocation"></a>
<a id="tocsstreamingsideinputlocation"></a>

```json
{
  "stateFamily": "string",
  "tag": "string"
}
```

Identifies the location of a streaming side input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stateFamily|string|false|none|Identifies the state family where this side input is stored.|
|tag|string|false|none|Identifies the particular side input within the streaming Dataflow job.|

<h2 id="tocS_StreamingStageLocation">StreamingStageLocation</h2>
<!-- backwards compatibility -->
<a id="schemastreamingstagelocation"></a>
<a id="schema_StreamingStageLocation"></a>
<a id="tocSstreamingstagelocation"></a>
<a id="tocsstreamingstagelocation"></a>

```json
{
  "streamId": "string"
}
```

Identifies the location of a streaming computation stage, for stage-to-stage communication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|streamId|string|false|none|Identifies the particular stream within the streaming Dataflow job.|

<h2 id="tocS_StreamingStragglerInfo">StreamingStragglerInfo</h2>
<!-- backwards compatibility -->
<a id="schemastreamingstragglerinfo"></a>
<a id="schema_StreamingStragglerInfo"></a>
<a id="tocSstreamingstragglerinfo"></a>
<a id="tocsstreamingstragglerinfo"></a>

```json
{
  "dataWatermarkLag": "string",
  "endTime": "string",
  "startTime": "string",
  "systemWatermarkLag": "string",
  "workerName": "string"
}
```

Information useful for streaming straggler identification and debugging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataWatermarkLag|string(google-duration)|false|none|The event-time watermark lag at the time of the straggler detection.|
|endTime|string(google-datetime)|false|none|End time of this straggler.|
|startTime|string(google-datetime)|false|none|Start time of this straggler.|
|systemWatermarkLag|string(google-duration)|false|none|The system watermark lag at the time of the straggler detection.|
|workerName|string|false|none|Name of the worker where the straggler was detected.|

<h2 id="tocS_StringList">StringList</h2>
<!-- backwards compatibility -->
<a id="schemastringlist"></a>
<a id="schema_StringList"></a>
<a id="tocSstringlist"></a>
<a id="tocsstringlist"></a>

```json
{
  "elements": [
    "string"
  ]
}
```

A metric value representing a list of strings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elements|[string]|false|none|Elements of the list.|

<h2 id="tocS_StructuredMessage">StructuredMessage</h2>
<!-- backwards compatibility -->
<a id="schemastructuredmessage"></a>
<a id="schema_StructuredMessage"></a>
<a id="tocSstructuredmessage"></a>
<a id="tocsstructuredmessage"></a>

```json
{
  "messageKey": "string",
  "messageText": "string",
  "parameters": [
    {
      "key": "string",
      "value": null
    }
  ]
}
```

A rich message format, including a human readable string, a key for identifying the message, and structured data associated with the message for programmatic consumption.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messageKey|string|false|none|Identifier for this message type. Used by external systems to internationalize or personalize message.|
|messageText|string|false|none|Human-readable version of message.|
|parameters|[[Parameter](#schemaparameter)]|false|none|The structured data associated with this message.|

<h2 id="tocS_TaskRunnerSettings">TaskRunnerSettings</h2>
<!-- backwards compatibility -->
<a id="schemataskrunnersettings"></a>
<a id="schema_TaskRunnerSettings"></a>
<a id="tocStaskrunnersettings"></a>
<a id="tocstaskrunnersettings"></a>

```json
{
  "alsologtostderr": true,
  "baseTaskDir": "string",
  "baseUrl": "string",
  "commandlinesFileName": "string",
  "continueOnException": true,
  "dataflowApiVersion": "string",
  "harnessCommand": "string",
  "languageHint": "string",
  "logDir": "string",
  "logToSerialconsole": true,
  "logUploadLocation": "string",
  "oauthScopes": [
    "string"
  ],
  "parallelWorkerSettings": {
    "baseUrl": "string",
    "reportingEnabled": true,
    "servicePath": "string",
    "shuffleServicePath": "string",
    "tempStoragePrefix": "string",
    "workerId": "string"
  },
  "streamingWorkerMainClass": "string",
  "taskGroup": "string",
  "taskUser": "string",
  "tempStoragePrefix": "string",
  "vmId": "string",
  "workflowFileName": "string"
}
```

Taskrunner configuration settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alsologtostderr|boolean|false|none|Whether to also send taskrunner log info to stderr.|
|baseTaskDir|string|false|none|The location on the worker for task-specific subdirectories.|
|baseUrl|string|false|none|The base URL for the taskrunner to use when accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/"|
|commandlinesFileName|string|false|none|The file to store preprocessing commands in.|
|continueOnException|boolean|false|none|Whether to continue taskrunner if an exception is hit.|
|dataflowApiVersion|string|false|none|The API version of endpoint, e.g. "v1b3"|
|harnessCommand|string|false|none|The command to launch the worker harness.|
|languageHint|string|false|none|The suggested backend language.|
|logDir|string|false|none|The directory on the VM to store logs.|
|logToSerialconsole|boolean|false|none|Whether to send taskrunner log info to Google Compute Engine VM serial console.|
|logUploadLocation|string|false|none|Indicates where to put logs. If this is not specified, the logs will not be uploaded. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}|
|oauthScopes|[string]|false|none|The OAuth2 scopes to be requested by the taskrunner in order to access the Cloud Dataflow API.|
|parallelWorkerSettings|[WorkerSettings](#schemaworkersettings)|false|none|The settings to pass to the parallel worker harness.|
|streamingWorkerMainClass|string|false|none|The streaming worker main class name.|
|taskGroup|string|false|none|The UNIX group ID on the worker VM to use for tasks launched by taskrunner; e.g. "wheel".|
|taskUser|string|false|none|The UNIX user ID on the worker VM to use for tasks launched by taskrunner; e.g. "root".|
|tempStoragePrefix|string|false|none|The prefix of the resources the taskrunner should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}|
|vmId|string|false|none|The ID string of the VM.|
|workflowFileName|string|false|none|The file to store the workflow in.|

<h2 id="tocS_TemplateMetadata">TemplateMetadata</h2>
<!-- backwards compatibility -->
<a id="schematemplatemetadata"></a>
<a id="schema_TemplateMetadata"></a>
<a id="tocStemplatemetadata"></a>
<a id="tocstemplatemetadata"></a>

```json
{
  "description": "string",
  "name": "string",
  "parameters": [
    {
      "customMetadata": {
        "property1": "string",
        "property2": "string"
      },
      "groupName": "string",
      "helpText": "string",
      "isOptional": true,
      "label": "string",
      "name": "string",
      "paramType": "DEFAULT",
      "parentName": "string",
      "parentTriggerValues": [
        "string"
      ],
      "regexes": [
        "string"
      ]
    }
  ]
}
```

Metadata describing a template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. A description of the template.|
|name|string|false|none|Required. The name of the template.|
|parameters|[[ParameterMetadata](#schemaparametermetadata)]|false|none|The parameters for the template.|

<h2 id="tocS_TopologyConfig">TopologyConfig</h2>
<!-- backwards compatibility -->
<a id="schematopologyconfig"></a>
<a id="schema_TopologyConfig"></a>
<a id="tocStopologyconfig"></a>
<a id="tocstopologyconfig"></a>

```json
{
  "computations": [
    {
      "computationId": "string",
      "inputs": [
        {
          "customSourceLocation": {
            "stateful": true
          },
          "pubsubLocation": {
            "dropLateData": true,
            "idLabel": "string",
            "subscription": "string",
            "timestampLabel": "string",
            "topic": "string",
            "trackingSubscription": "string",
            "withAttributes": true
          },
          "sideInputLocation": {
            "stateFamily": "string",
            "tag": "string"
          },
          "streamingStageLocation": {
            "streamId": "string"
          }
        }
      ],
      "keyRanges": [
        {
          "dataDisk": "string",
          "deliveryEndpoint": "string",
          "deprecatedPersistentDirectory": "string",
          "end": "string",
          "start": "string"
        }
      ],
      "outputs": [
        {
          "customSourceLocation": {
            "stateful": true
          },
          "pubsubLocation": {
            "dropLateData": true,
            "idLabel": "string",
            "subscription": "string",
            "timestampLabel": "string",
            "topic": "string",
            "trackingSubscription": "string",
            "withAttributes": true
          },
          "sideInputLocation": {
            "stateFamily": "string",
            "tag": "string"
          },
          "streamingStageLocation": {
            "streamId": "string"
          }
        }
      ],
      "stateFamilies": [
        {
          "isRead": true,
          "stateFamily": "string"
        }
      ],
      "systemStageName": "string"
    }
  ],
  "dataDiskAssignments": [
    {
      "dataDisks": [
        "string"
      ],
      "vmInstance": "string"
    }
  ],
  "forwardingKeyBits": 0,
  "persistentStateVersion": 0,
  "userStageToComputationNameMap": {
    "property1": "string",
    "property2": "string"
  }
}
```

Global topology of the streaming Dataflow job, including all computations and their sharded locations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computations|[[ComputationTopology](#schemacomputationtopology)]|false|none|The computations associated with a streaming Dataflow job.|
|dataDiskAssignments|[[DataDiskAssignment](#schemadatadiskassignment)]|false|none|The disks assigned to a streaming Dataflow job.|
|forwardingKeyBits|integer(int32)|false|none|The size (in bits) of keys that will be assigned to source messages.|
|persistentStateVersion|integer(int32)|false|none|Version number for persistent state.|
|userStageToComputationNameMap|object|false|none|Maps user stage names to stable computation names.|

<h2 id="tocS_TransformSummary">TransformSummary</h2>
<!-- backwards compatibility -->
<a id="schematransformsummary"></a>
<a id="schema_TransformSummary"></a>
<a id="tocStransformsummary"></a>
<a id="tocstransformsummary"></a>

```json
{
  "displayData": [
    {
      "boolValue": true,
      "durationValue": "string",
      "floatValue": 0,
      "int64Value": "string",
      "javaClassValue": "string",
      "key": "string",
      "label": "string",
      "namespace": "string",
      "shortStrValue": "string",
      "strValue": "string",
      "timestampValue": "string",
      "url": "string"
    }
  ],
  "id": "string",
  "inputCollectionName": [
    "string"
  ],
  "kind": "UNKNOWN_KIND",
  "name": "string",
  "outputCollectionName": [
    "string"
  ]
}
```

Description of the type, names/ids, and input/outputs for a transform.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayData|[[DisplayData](#schemadisplaydata)]|false|none|Transform-specific display data.|
|id|string|false|none|SDK generated id of this transform instance.|
|inputCollectionName|[string]|false|none|User names for all collection inputs to this transform.|
|kind|string|false|none|Type of transform.|
|name|string|false|none|User provided name for this transform instance.|
|outputCollectionName|[string]|false|none|User names for all collection outputs to this transform.|

#### Enumerated Values

|Property|Value|
|---|---|
|kind|UNKNOWN_KIND|
|kind|PAR_DO_KIND|
|kind|GROUP_BY_KEY_KIND|
|kind|FLATTEN_KIND|
|kind|READ_KIND|
|kind|WRITE_KIND|
|kind|CONSTANT_KIND|
|kind|SINGLETON_KIND|
|kind|SHUFFLE_KIND|

<h2 id="tocS_WorkItem">WorkItem</h2>
<!-- backwards compatibility -->
<a id="schemaworkitem"></a>
<a id="schema_WorkItem"></a>
<a id="tocSworkitem"></a>
<a id="tocsworkitem"></a>

```json
{
  "configuration": "string",
  "id": "string",
  "initialReportIndex": "string",
  "jobId": "string",
  "leaseExpireTime": "string",
  "mapTask": {
    "counterPrefix": "string",
    "instructions": [
      {
        "flatten": {
          "inputs": [
            {
              "outputNum": 0,
              "producerInstructionIndex": 0
            }
          ]
        },
        "name": "string",
        "originalName": "string",
        "outputs": [
          {
            "codec": {
              "property1": null,
              "property2": null
            },
            "name": "string",
            "onlyCountKeyBytes": true,
            "onlyCountValueBytes": true,
            "originalName": "string",
            "systemName": "string"
          }
        ],
        "parDo": {
          "input": {
            "outputNum": 0,
            "producerInstructionIndex": 0
          },
          "multiOutputInfos": [
            {
              "tag": "string"
            }
          ],
          "numOutputs": 0,
          "sideInputs": [
            {
              "kind": {
                "property1": null,
                "property2": null
              },
              "sources": [
                {
                  "baseSpecs": [
                    {
                      "property1": null,
                      "property2": null
                    }
                  ],
                  "codec": {
                    "property1": null,
                    "property2": null
                  },
                  "doesNotNeedSplitting": true,
                  "metadata": {
                    "estimatedSizeBytes": "string",
                    "infinite": true,
                    "producesSortedKeys": true
                  },
                  "spec": {
                    "property1": null,
                    "property2": null
                  }
                }
              ],
              "tag": "string"
            }
          ],
          "userFn": {
            "property1": null,
            "property2": null
          }
        },
        "partialGroupByKey": {
          "input": {
            "outputNum": 0,
            "producerInstructionIndex": 0
          },
          "inputElementCodec": {
            "property1": null,
            "property2": null
          },
          "originalCombineValuesInputStoreName": "string",
          "originalCombineValuesStepName": "string",
          "sideInputs": [
            {
              "kind": {
                "property1": null,
                "property2": null
              },
              "sources": [
                {
                  "baseSpecs": [
                    {
                      "property1": null,
                      "property2": null
                    }
                  ],
                  "codec": {
                    "property1": null,
                    "property2": null
                  },
                  "doesNotNeedSplitting": true,
                  "metadata": {
                    "estimatedSizeBytes": "string",
                    "infinite": true,
                    "producesSortedKeys": true
                  },
                  "spec": {
                    "property1": null,
                    "property2": null
                  }
                }
              ],
              "tag": "string"
            }
          ],
          "valueCombiningFn": {
            "property1": null,
            "property2": null
          }
        },
        "read": {
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        },
        "systemName": "string",
        "write": {
          "input": {
            "outputNum": 0,
            "producerInstructionIndex": 0
          },
          "sink": {
            "codec": {
              "property1": null,
              "property2": null
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        }
      }
    ],
    "stageName": "string",
    "systemName": "string"
  },
  "packages": [
    {
      "location": "string",
      "name": "string"
    }
  ],
  "projectId": "string",
  "reportStatusInterval": "string",
  "seqMapTask": {
    "inputs": [
      {
        "kind": {
          "property1": null,
          "property2": null
        },
        "sources": [
          {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        ],
        "tag": "string"
      }
    ],
    "name": "string",
    "outputInfos": [
      {
        "sink": {
          "codec": {
            "property1": null,
            "property2": null
          },
          "spec": {
            "property1": null,
            "property2": null
          }
        },
        "tag": "string"
      }
    ],
    "stageName": "string",
    "systemName": "string",
    "userFn": {
      "property1": null,
      "property2": null
    }
  },
  "shellTask": {
    "command": "string",
    "exitCode": 0
  },
  "sourceOperationTask": {
    "getMetadata": {
      "source": {
        "baseSpecs": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "codec": {
          "property1": null,
          "property2": null
        },
        "doesNotNeedSplitting": true,
        "metadata": {
          "estimatedSizeBytes": "string",
          "infinite": true,
          "producesSortedKeys": true
        },
        "spec": {
          "property1": null,
          "property2": null
        }
      }
    },
    "name": "string",
    "originalName": "string",
    "split": {
      "options": {
        "desiredBundleSizeBytes": "string",
        "desiredShardSizeBytes": "string"
      },
      "source": {
        "baseSpecs": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "codec": {
          "property1": null,
          "property2": null
        },
        "doesNotNeedSplitting": true,
        "metadata": {
          "estimatedSizeBytes": "string",
          "infinite": true,
          "producesSortedKeys": true
        },
        "spec": {
          "property1": null,
          "property2": null
        }
      }
    },
    "stageName": "string",
    "systemName": "string"
  },
  "streamingComputationTask": {
    "computationRanges": [
      {
        "computationId": "string",
        "rangeAssignments": [
          {
            "dataDisk": "string",
            "end": "string",
            "start": "string"
          }
        ]
      }
    ],
    "dataDisks": [
      {
        "dataDisk": "string"
      }
    ],
    "taskType": "STREAMING_COMPUTATION_TASK_UNKNOWN"
  },
  "streamingConfigTask": {
    "commitStreamChunkSizeBytes": "string",
    "getDataStreamChunkSizeBytes": "string",
    "maxWorkItemCommitBytes": "string",
    "streamingComputationConfigs": [
      {
        "computationId": "string",
        "instructions": [
          {
            "flatten": {
              "inputs": [
                {
                  "outputNum": 0,
                  "producerInstructionIndex": 0
                }
              ]
            },
            "name": "string",
            "originalName": "string",
            "outputs": [
              {
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "name": "string",
                "onlyCountKeyBytes": true,
                "onlyCountValueBytes": true,
                "originalName": "string",
                "systemName": "string"
              }
            ],
            "parDo": {
              "input": {
                "outputNum": 0,
                "producerInstructionIndex": 0
              },
              "multiOutputInfos": [
                {
                  "tag": "string"
                }
              ],
              "numOutputs": 0,
              "sideInputs": [
                {
                  "kind": {
                    "property1": null,
                    "property2": null
                  },
                  "sources": [
                    {
                      "baseSpecs": [
                        {
                          "property1": null,
                          "property2": null
                        }
                      ],
                      "codec": {
                        "property1": null,
                        "property2": null
                      },
                      "doesNotNeedSplitting": true,
                      "metadata": {
                        "estimatedSizeBytes": "string",
                        "infinite": true,
                        "producesSortedKeys": true
                      },
                      "spec": {
                        "property1": null,
                        "property2": null
                      }
                    }
                  ],
                  "tag": "string"
                }
              ],
              "userFn": {
                "property1": null,
                "property2": null
              }
            },
            "partialGroupByKey": {
              "input": {
                "outputNum": 0,
                "producerInstructionIndex": 0
              },
              "inputElementCodec": {
                "property1": null,
                "property2": null
              },
              "originalCombineValuesInputStoreName": "string",
              "originalCombineValuesStepName": "string",
              "sideInputs": [
                {
                  "kind": {
                    "property1": null,
                    "property2": null
                  },
                  "sources": [
                    {
                      "baseSpecs": [
                        {
                          "property1": null,
                          "property2": null
                        }
                      ],
                      "codec": {
                        "property1": null,
                        "property2": null
                      },
                      "doesNotNeedSplitting": true,
                      "metadata": {
                        "estimatedSizeBytes": "string",
                        "infinite": true,
                        "producesSortedKeys": true
                      },
                      "spec": {
                        "property1": null,
                        "property2": null
                      }
                    }
                  ],
                  "tag": "string"
                }
              ],
              "valueCombiningFn": {
                "property1": null,
                "property2": null
              }
            },
            "read": {
              "source": {
                "baseSpecs": [
                  {
                    "property1": null,
                    "property2": null
                  }
                ],
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "doesNotNeedSplitting": true,
                "metadata": {
                  "estimatedSizeBytes": "string",
                  "infinite": true,
                  "producesSortedKeys": true
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            },
            "systemName": "string",
            "write": {
              "input": {
                "outputNum": 0,
                "producerInstructionIndex": 0
              },
              "sink": {
                "codec": {
                  "property1": null,
                  "property2": null
                },
                "spec": {
                  "property1": null,
                  "property2": null
                }
              }
            }
          }
        ],
        "stageName": "string",
        "systemName": "string",
        "transformUserNameToStateFamily": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "userStepToStateFamilyNameMap": {
      "property1": "string",
      "property2": "string"
    },
    "windmillServiceEndpoint": "string",
    "windmillServicePort": "string"
  },
  "streamingSetupTask": {
    "drain": true,
    "receiveWorkPort": 0,
    "snapshotConfig": {
      "importStateEndpoint": "string",
      "snapshotId": "string"
    },
    "streamingComputationTopology": {
      "computations": [
        {
          "computationId": "string",
          "inputs": [
            {
              "customSourceLocation": {
                "stateful": true
              },
              "pubsubLocation": {
                "dropLateData": true,
                "idLabel": "string",
                "subscription": "string",
                "timestampLabel": "string",
                "topic": "string",
                "trackingSubscription": "string",
                "withAttributes": true
              },
              "sideInputLocation": {
                "stateFamily": "string",
                "tag": "string"
              },
              "streamingStageLocation": {
                "streamId": "string"
              }
            }
          ],
          "keyRanges": [
            {
              "dataDisk": "string",
              "deliveryEndpoint": "string",
              "deprecatedPersistentDirectory": "string",
              "end": "string",
              "start": "string"
            }
          ],
          "outputs": [
            {
              "customSourceLocation": {
                "stateful": true
              },
              "pubsubLocation": {
                "dropLateData": true,
                "idLabel": "string",
                "subscription": "string",
                "timestampLabel": "string",
                "topic": "string",
                "trackingSubscription": "string",
                "withAttributes": true
              },
              "sideInputLocation": {
                "stateFamily": "string",
                "tag": "string"
              },
              "streamingStageLocation": {
                "streamId": "string"
              }
            }
          ],
          "stateFamilies": [
            {
              "isRead": true,
              "stateFamily": "string"
            }
          ],
          "systemStageName": "string"
        }
      ],
      "dataDiskAssignments": [
        {
          "dataDisks": [
            "string"
          ],
          "vmInstance": "string"
        }
      ],
      "forwardingKeyBits": 0,
      "persistentStateVersion": 0,
      "userStageToComputationNameMap": {
        "property1": "string",
        "property2": "string"
      }
    },
    "workerHarnessPort": 0
  }
}
```

WorkItem represents basic information about a WorkItem to be executed in the cloud.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configuration|string|false|none|Work item-specific configuration as an opaque blob.|
|id|string(int64)|false|none|Identifies this WorkItem.|
|initialReportIndex|string(int64)|false|none|The initial index to use when reporting the status of the WorkItem.|
|jobId|string|false|none|Identifies the workflow job this WorkItem belongs to.|
|leaseExpireTime|string(google-datetime)|false|none|Time when the lease on this Work will expire.|
|mapTask|[MapTask](#schemamaptask)|false|none|Additional information for MapTask WorkItems.|
|packages|[[Package](#schemapackage)]|false|none|Any required packages that need to be fetched in order to execute this WorkItem.|
|projectId|string|false|none|Identifies the cloud project this WorkItem belongs to.|
|reportStatusInterval|string(google-duration)|false|none|Recommended reporting interval.|
|seqMapTask|[SeqMapTask](#schemaseqmaptask)|false|none|Additional information for SeqMapTask WorkItems.|
|shellTask|[ShellTask](#schemashelltask)|false|none|Additional information for ShellTask WorkItems.|
|sourceOperationTask|[SourceOperationRequest](#schemasourceoperationrequest)|false|none|Additional information for source operation WorkItems.|
|streamingComputationTask|[StreamingComputationTask](#schemastreamingcomputationtask)|false|none|Additional information for StreamingComputationTask WorkItems.|
|streamingConfigTask|[StreamingConfigTask](#schemastreamingconfigtask)|false|none|Additional information for StreamingConfigTask WorkItems.|
|streamingSetupTask|[StreamingSetupTask](#schemastreamingsetuptask)|false|none|Additional information for StreamingSetupTask WorkItems.|

<h2 id="tocS_WorkItemDetails">WorkItemDetails</h2>
<!-- backwards compatibility -->
<a id="schemaworkitemdetails"></a>
<a id="schema_WorkItemDetails"></a>
<a id="tocSworkitemdetails"></a>
<a id="tocsworkitemdetails"></a>

```json
{
  "attemptId": "string",
  "endTime": "string",
  "metrics": [
    {
      "cumulative": true,
      "distribution": null,
      "gauge": null,
      "internal": null,
      "kind": "string",
      "meanCount": null,
      "meanSum": null,
      "name": {
        "context": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "origin": "string"
      },
      "scalar": null,
      "set": null,
      "updateTime": "string"
    }
  ],
  "progress": {
    "currentProgress": 0,
    "dataPoints": [
      {
        "time": "string",
        "value": 0
      }
    ]
  },
  "startTime": "string",
  "state": "EXECUTION_STATE_UNKNOWN",
  "stragglerInfo": {
    "causes": {
      "property1": {
        "hotKey": {
          "detectedHotKeys": {
            "property1": {
              "hotKeyAge": "string",
              "key": "string",
              "keyTruncated": true
            },
            "property2": {
              "hotKeyAge": "string",
              "key": "string",
              "keyTruncated": true
            }
          }
        }
      },
      "property2": {
        "hotKey": {
          "detectedHotKeys": {
            "property1": {
              "hotKeyAge": "string",
              "key": "string",
              "keyTruncated": true
            },
            "property2": {
              "hotKeyAge": "string",
              "key": "string",
              "keyTruncated": true
            }
          }
        }
      }
    },
    "startTime": "string"
  },
  "taskId": "string"
}
```

Information about an individual work item execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attemptId|string|false|none|Attempt ID of this work item|
|endTime|string(google-datetime)|false|none|End time of this work item attempt. If the work item is completed, this is the actual end time of the work item. Otherwise, it is the predicted end time.|
|metrics|[[MetricUpdate](#schemametricupdate)]|false|none|Metrics for this work item.|
|progress|[ProgressTimeseries](#schemaprogresstimeseries)|false|none|Progress of this work item.|
|startTime|string(google-datetime)|false|none|Start time of this work item attempt.|
|state|string|false|none|State of this work item.|
|stragglerInfo|[StragglerInfo](#schemastragglerinfo)|false|none|Information about straggler detections for this work item.|
|taskId|string|false|none|Name of this work item.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|EXECUTION_STATE_UNKNOWN|
|state|EXECUTION_STATE_NOT_STARTED|
|state|EXECUTION_STATE_RUNNING|
|state|EXECUTION_STATE_SUCCEEDED|
|state|EXECUTION_STATE_FAILED|
|state|EXECUTION_STATE_CANCELLED|

<h2 id="tocS_WorkItemServiceState">WorkItemServiceState</h2>
<!-- backwards compatibility -->
<a id="schemaworkitemservicestate"></a>
<a id="schema_WorkItemServiceState"></a>
<a id="tocSworkitemservicestate"></a>
<a id="tocsworkitemservicestate"></a>

```json
{
  "completeWorkStatus": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "harnessData": {
    "property1": null,
    "property2": null
  },
  "hotKeyDetection": {
    "hotKeyAge": "string",
    "systemName": "string",
    "userStepName": "string"
  },
  "leaseExpireTime": "string",
  "metricShortId": [
    {
      "metricIndex": 0,
      "shortId": "string"
    }
  ],
  "nextReportIndex": "string",
  "reportStatusInterval": "string",
  "splitRequest": {
    "fractionConsumed": 0,
    "fractionOfRemainder": 0,
    "position": {
      "byteOffset": "string",
      "concatPosition": {},
      "end": true,
      "key": "string",
      "recordIndex": "string",
      "shufflePosition": "string"
    }
  },
  "suggestedStopPoint": {
    "percentComplete": 0,
    "position": {
      "byteOffset": "string",
      "concatPosition": {},
      "end": true,
      "key": "string",
      "recordIndex": "string",
      "shufflePosition": "string"
    },
    "remainingTime": "string"
  },
  "suggestedStopPosition": {
    "byteOffset": "string",
    "concatPosition": {},
    "end": true,
    "key": "string",
    "recordIndex": "string",
    "shufflePosition": "string"
  }
}
```

The Dataflow service's idea of the current state of a WorkItem being processed by a worker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completeWorkStatus|[Status](#schemastatus)|false|none|If set, a request to complete the work item with the given status. This will not be set to OK, unless supported by the specific kind of WorkItem. It can be used for the backend to indicate a WorkItem must terminate, e.g., for aborting work.|
|harnessData|object|false|none|Other data returned by the service, specific to the particular worker harness.|
|hotKeyDetection|[HotKeyDetection](#schemahotkeydetection)|false|none|A hot key is a symptom of poor data distribution in which there are enough elements mapped to a single key to impact pipeline performance. When present, this field includes metadata associated with any hot key.|
|leaseExpireTime|string(google-datetime)|false|none|Time at which the current lease will expire.|
|metricShortId|[[MetricShortId](#schemametricshortid)]|false|none|The short ids that workers should use in subsequent metric updates. Workers should strive to use short ids whenever possible, but it is ok to request the short_id again if a worker lost track of it (e.g. if the worker is recovering from a crash). NOTE: it is possible that the response may have short ids for a subset of the metrics.|
|nextReportIndex|string(int64)|false|none|The index value to use for the next report sent by the worker. Note: If the report call fails for whatever reason, the worker should reuse this index for subsequent report attempts.|
|reportStatusInterval|string(google-duration)|false|none|New recommended reporting interval.|
|splitRequest|[ApproximateSplitRequest](#schemaapproximatesplitrequest)|false|none|The progress point in the WorkItem where the Dataflow service suggests that the worker truncate the task.|
|suggestedStopPoint|[ApproximateProgress](#schemaapproximateprogress)|false|none|DEPRECATED in favor of split_request.|
|suggestedStopPosition|[Position](#schemaposition)|false|none|Obsolete, always empty.|

<h2 id="tocS_WorkItemStatus">WorkItemStatus</h2>
<!-- backwards compatibility -->
<a id="schemaworkitemstatus"></a>
<a id="schema_WorkItemStatus"></a>
<a id="tocSworkitemstatus"></a>
<a id="tocsworkitemstatus"></a>

```json
{
  "completed": true,
  "counterUpdates": [
    {
      "boolean": true,
      "cumulative": true,
      "distribution": {
        "count": {
          "highBits": 0,
          "lowBits": 0
        },
        "histogram": {
          "bucketCounts": [
            "string"
          ],
          "firstBucketOffset": 0
        },
        "max": {
          "highBits": 0,
          "lowBits": 0
        },
        "min": {
          "highBits": 0,
          "lowBits": 0
        },
        "sum": {
          "highBits": 0,
          "lowBits": 0
        },
        "sumOfSquares": 0
      },
      "floatingPoint": 0,
      "floatingPointList": {
        "elements": [
          0
        ]
      },
      "floatingPointMean": {
        "count": {
          "highBits": 0,
          "lowBits": 0
        },
        "sum": 0
      },
      "integer": {
        "highBits": 0,
        "lowBits": 0
      },
      "integerGauge": {
        "timestamp": "string",
        "value": {
          "highBits": 0,
          "lowBits": 0
        }
      },
      "integerList": {
        "elements": [
          {
            "highBits": 0,
            "lowBits": 0
          }
        ]
      },
      "integerMean": {
        "count": {
          "highBits": 0,
          "lowBits": 0
        },
        "sum": {
          "highBits": 0,
          "lowBits": 0
        }
      },
      "internal": null,
      "nameAndKind": {
        "kind": "INVALID",
        "name": "string"
      },
      "shortId": "string",
      "stringList": {
        "elements": [
          "string"
        ]
      },
      "structuredNameAndMetadata": {
        "metadata": {
          "description": "string",
          "kind": "INVALID",
          "otherUnits": "string",
          "standardUnits": "BYTES"
        },
        "name": {
          "componentStepName": "string",
          "executionStepName": "string",
          "inputIndex": 0,
          "name": "string",
          "origin": "SYSTEM",
          "originNamespace": "string",
          "originalRequestingStepName": "string",
          "originalStepName": "string",
          "portion": "ALL",
          "workerId": "string"
        }
      }
    }
  ],
  "dynamicSourceSplit": {
    "primary": {
      "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
      "source": {
        "baseSpecs": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "codec": {
          "property1": null,
          "property2": null
        },
        "doesNotNeedSplitting": true,
        "metadata": {
          "estimatedSizeBytes": "string",
          "infinite": true,
          "producesSortedKeys": true
        },
        "spec": {
          "property1": null,
          "property2": null
        }
      }
    },
    "residual": {
      "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
      "source": {
        "baseSpecs": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "codec": {
          "property1": null,
          "property2": null
        },
        "doesNotNeedSplitting": true,
        "metadata": {
          "estimatedSizeBytes": "string",
          "infinite": true,
          "producesSortedKeys": true
        },
        "spec": {
          "property1": null,
          "property2": null
        }
      }
    }
  },
  "errors": [
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
  ],
  "metricUpdates": [
    {
      "cumulative": true,
      "distribution": null,
      "gauge": null,
      "internal": null,
      "kind": "string",
      "meanCount": null,
      "meanSum": null,
      "name": {
        "context": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "origin": "string"
      },
      "scalar": null,
      "set": null,
      "updateTime": "string"
    }
  ],
  "progress": {
    "percentComplete": 0,
    "position": {
      "byteOffset": "string",
      "concatPosition": {},
      "end": true,
      "key": "string",
      "recordIndex": "string",
      "shufflePosition": "string"
    },
    "remainingTime": "string"
  },
  "reportIndex": "string",
  "reportedProgress": {
    "consumedParallelism": {
      "isInfinite": true,
      "value": 0
    },
    "fractionConsumed": 0,
    "position": {
      "byteOffset": "string",
      "concatPosition": {},
      "end": true,
      "key": "string",
      "recordIndex": "string",
      "shufflePosition": "string"
    },
    "remainingParallelism": {
      "isInfinite": true,
      "value": 0
    }
  },
  "requestedLeaseDuration": "string",
  "sourceFork": {
    "primary": {
      "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
      "source": {
        "baseSpecs": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "codec": {
          "property1": null,
          "property2": null
        },
        "doesNotNeedSplitting": true,
        "metadata": {
          "estimatedSizeBytes": "string",
          "infinite": true,
          "producesSortedKeys": true
        },
        "spec": {
          "property1": null,
          "property2": null
        }
      }
    },
    "primarySource": {
      "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
      "source": {
        "baseSpecs": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "codec": {
          "property1": null,
          "property2": null
        },
        "doesNotNeedSplitting": true,
        "metadata": {
          "estimatedSizeBytes": "string",
          "infinite": true,
          "producesSortedKeys": true
        },
        "spec": {
          "property1": null,
          "property2": null
        }
      }
    },
    "residual": {
      "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
      "source": {
        "baseSpecs": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "codec": {
          "property1": null,
          "property2": null
        },
        "doesNotNeedSplitting": true,
        "metadata": {
          "estimatedSizeBytes": "string",
          "infinite": true,
          "producesSortedKeys": true
        },
        "spec": {
          "property1": null,
          "property2": null
        }
      }
    },
    "residualSource": {
      "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
      "source": {
        "baseSpecs": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "codec": {
          "property1": null,
          "property2": null
        },
        "doesNotNeedSplitting": true,
        "metadata": {
          "estimatedSizeBytes": "string",
          "infinite": true,
          "producesSortedKeys": true
        },
        "spec": {
          "property1": null,
          "property2": null
        }
      }
    }
  },
  "sourceOperationResponse": {
    "getMetadata": {
      "metadata": {
        "estimatedSizeBytes": "string",
        "infinite": true,
        "producesSortedKeys": true
      }
    },
    "split": {
      "bundles": [
        {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        }
      ],
      "outcome": "SOURCE_SPLIT_OUTCOME_UNKNOWN",
      "shards": [
        {
          "derivationMode": "SOURCE_DERIVATION_MODE_UNKNOWN",
          "source": {
            "baseSpecs": [
              {
                "property1": null,
                "property2": null
              }
            ],
            "codec": {
              "property1": null,
              "property2": null
            },
            "doesNotNeedSplitting": true,
            "metadata": {
              "estimatedSizeBytes": "string",
              "infinite": true,
              "producesSortedKeys": true
            },
            "spec": {
              "property1": null,
              "property2": null
            }
          }
        }
      ]
    }
  },
  "stopPosition": {
    "byteOffset": "string",
    "concatPosition": {},
    "end": true,
    "key": "string",
    "recordIndex": "string",
    "shufflePosition": "string"
  },
  "totalThrottlerWaitTimeSeconds": 0,
  "workItemId": "string"
}
```

Conveys a worker's progress through the work described by a WorkItem.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completed|boolean|false|none|True if the WorkItem was completed (successfully or unsuccessfully).|
|counterUpdates|[[CounterUpdate](#schemacounterupdate)]|false|none|Worker output counters for this WorkItem.|
|dynamicSourceSplit|[DynamicSourceSplit](#schemadynamicsourcesplit)|false|none|See documentation of stop_position.|
|errors|[[Status](#schemastatus)]|false|none|Specifies errors which occurred during processing. If errors are provided, and completed = true, then the WorkItem is considered to have failed.|
|metricUpdates|[[MetricUpdate](#schemametricupdate)]|false|none|DEPRECATED in favor of counter_updates.|
|progress|[ApproximateProgress](#schemaapproximateprogress)|false|none|DEPRECATED in favor of reported_progress.|
|reportIndex|string(int64)|false|none|The report index. When a WorkItem is leased, the lease will contain an initial report index. When a WorkItem's status is reported to the system, the report should be sent with that report index, and the response will contain the index the worker should use for the next report. Reports received with unexpected index values will be rejected by the service. In order to preserve idempotency, the worker should not alter the contents of a report, even if the worker must submit the same report multiple times before getting back a response. The worker should not submit a subsequent report until the response for the previous report had been received from the service.|
|reportedProgress|[ApproximateReportedProgress](#schemaapproximatereportedprogress)|false|none|The worker's progress through this WorkItem.|
|requestedLeaseDuration|string(google-duration)|false|none|Amount of time the worker requests for its lease.|
|sourceFork|[SourceFork](#schemasourcefork)|false|none|DEPRECATED in favor of dynamic_source_split.|
|sourceOperationResponse|[SourceOperationResponse](#schemasourceoperationresponse)|false|none|If the work item represented a SourceOperationRequest, and the work is completed, contains the result of the operation.|
|stopPosition|[Position](#schemaposition)|false|none|A worker may split an active map task in two parts, "primary" and "residual", continuing to process the primary part and returning the residual part into the pool of available work. This event is called a "dynamic split" and is critical to the dynamic work rebalancing feature. The two obtained sub-tasks are called "parts" of the split. The parts, if concatenated, must represent the same input as would be read by the current task if the split did not happen. The exact way in which the original task is decomposed into the two parts is specified either as a position demarcating them (stop_position), or explicitly as two DerivedSources, if this task consumes a user-defined source type (dynamic_source_split). The "current" task is adjusted as a result of the split: after a task with range [A, B) sends a stop_position update at C, its range is considered to be [A, C), e.g.: * Progress should be interpreted relative to the new range, e.g. "75% completed" means "75% of [A, C) completed" * The worker should interpret proposed_stop_position relative to the new range, e.g. "split at 68%" should be interpreted as "split at 68% of [A, C)". * If the worker chooses to split again using stop_position, only stop_positions in [A, C) will be accepted. * Etc. dynamic_source_split has similar semantics: e.g., if a task with source S splits using dynamic_source_split into {P, R} (where P and R must be together equivalent to S), then subsequent progress and proposed_stop_position should be interpreted relative to P, and in a potential subsequent dynamic_source_split into {P', R'}, P' and R' must be together equivalent to P, etc.|
|totalThrottlerWaitTimeSeconds|number(double)|false|none|Total time the worker spent being throttled by external systems.|
|workItemId|string|false|none|Identifies the WorkItem.|

<h2 id="tocS_WorkerDetails">WorkerDetails</h2>
<!-- backwards compatibility -->
<a id="schemaworkerdetails"></a>
<a id="schema_WorkerDetails"></a>
<a id="tocSworkerdetails"></a>
<a id="tocsworkerdetails"></a>

```json
{
  "workItems": [
    {
      "attemptId": "string",
      "endTime": "string",
      "metrics": [
        {
          "cumulative": true,
          "distribution": null,
          "gauge": null,
          "internal": null,
          "kind": "string",
          "meanCount": null,
          "meanSum": null,
          "name": {
            "context": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "origin": "string"
          },
          "scalar": null,
          "set": null,
          "updateTime": "string"
        }
      ],
      "progress": {
        "currentProgress": 0,
        "dataPoints": [
          {
            "time": "string",
            "value": 0
          }
        ]
      },
      "startTime": "string",
      "state": "EXECUTION_STATE_UNKNOWN",
      "stragglerInfo": {
        "causes": {
          "property1": {
            "hotKey": {
              "detectedHotKeys": {
                "property1": {
                  "hotKeyAge": "string",
                  "key": "string",
                  "keyTruncated": true
                },
                "property2": {
                  "hotKeyAge": "string",
                  "key": "string",
                  "keyTruncated": true
                }
              }
            }
          },
          "property2": {
            "hotKey": {
              "detectedHotKeys": {
                "property1": {
                  "hotKeyAge": "string",
                  "key": "string",
                  "keyTruncated": true
                },
                "property2": {
                  "hotKeyAge": "string",
                  "key": "string",
                  "keyTruncated": true
                }
              }
            }
          }
        },
        "startTime": "string"
      },
      "taskId": "string"
    }
  ],
  "workerName": "string"
}
```

Information about a worker

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workItems|[[WorkItemDetails](#schemaworkitemdetails)]|false|none|Work items processed by this worker, sorted by time.|
|workerName|string|false|none|Name of this worker|

<h2 id="tocS_WorkerHealthReport">WorkerHealthReport</h2>
<!-- backwards compatibility -->
<a id="schemaworkerhealthreport"></a>
<a id="schema_WorkerHealthReport"></a>
<a id="tocSworkerhealthreport"></a>
<a id="tocsworkerhealthreport"></a>

```json
{
  "msg": "string",
  "pods": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "reportInterval": "string",
  "vmBrokenCode": "string",
  "vmIsBroken": true,
  "vmIsHealthy": true,
  "vmStartupTime": "string"
}
```

WorkerHealthReport contains information about the health of a worker. The VM should be identified by the labels attached to the WorkerMessage that this health ping belongs to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|Message describing any unusual health reports.|
|pods|[object]|false|none|The pods running on the worker. See: http://kubernetes.io/v1.1/docs/api-reference/v1/definitions.html#_v1_pod This field is used by the worker to send the status of the indvidual containers running on each worker.|
|reportInterval|string(google-duration)|false|none|The interval at which the worker is sending health reports. The default value of 0 should be interpreted as the field is not being explicitly set by the worker.|
|vmBrokenCode|string|false|none|Code to describe a specific reason, if known, that a VM has reported broken state.|
|vmIsBroken|boolean|false|none|Whether the VM is in a permanently broken state. Broken VMs should be abandoned or deleted ASAP to avoid assigning or completing any work.|
|vmIsHealthy|boolean|false|none|Whether the VM is currently healthy.|
|vmStartupTime|string(google-datetime)|false|none|The time the VM was booted.|

<h2 id="tocS_WorkerHealthReportResponse">WorkerHealthReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkerhealthreportresponse"></a>
<a id="schema_WorkerHealthReportResponse"></a>
<a id="tocSworkerhealthreportresponse"></a>
<a id="tocsworkerhealthreportresponse"></a>

```json
{
  "reportInterval": "string"
}
```

WorkerHealthReportResponse contains information returned to the worker in response to a health ping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportInterval|string(google-duration)|false|none|A positive value indicates the worker should change its reporting interval to the specified value. The default value of zero means no change in report rate is requested by the server.|

<h2 id="tocS_WorkerLifecycleEvent">WorkerLifecycleEvent</h2>
<!-- backwards compatibility -->
<a id="schemaworkerlifecycleevent"></a>
<a id="schema_WorkerLifecycleEvent"></a>
<a id="tocSworkerlifecycleevent"></a>
<a id="tocsworkerlifecycleevent"></a>

```json
{
  "containerStartTime": "string",
  "event": "UNKNOWN_EVENT",
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

A report of an event in a worker's lifecycle. The proto contains one event, because the worker is expected to asynchronously send each message immediately after the event. Due to this asynchrony, messages may arrive out of order (or missing), and it is up to the consumer to interpret. The timestamp of the event is in the enclosing WorkerMessage proto.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerStartTime|string(google-datetime)|false|none|The start time of this container. All events will report this so that events can be grouped together across container/VM restarts.|
|event|string|false|none|The event being reported.|
|metadata|object|false|none|Other stats that can accompany an event. E.g. { "downloaded_bytes" : "123456" }|

#### Enumerated Values

|Property|Value|
|---|---|
|event|UNKNOWN_EVENT|
|event|OS_START|
|event|CONTAINER_START|
|event|NETWORK_UP|
|event|STAGING_FILES_DOWNLOAD_START|
|event|STAGING_FILES_DOWNLOAD_FINISH|
|event|SDK_INSTALL_START|
|event|SDK_INSTALL_FINISH|

<h2 id="tocS_WorkerMessage">WorkerMessage</h2>
<!-- backwards compatibility -->
<a id="schemaworkermessage"></a>
<a id="schema_WorkerMessage"></a>
<a id="tocSworkermessage"></a>
<a id="tocsworkermessage"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "time": "string",
  "workerHealthReport": {
    "msg": "string",
    "pods": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "reportInterval": "string",
    "vmBrokenCode": "string",
    "vmIsBroken": true,
    "vmIsHealthy": true,
    "vmStartupTime": "string"
  },
  "workerLifecycleEvent": {
    "containerStartTime": "string",
    "event": "UNKNOWN_EVENT",
    "metadata": {
      "property1": "string",
      "property2": "string"
    }
  },
  "workerMessageCode": {
    "code": "string",
    "parameters": {
      "property1": null,
      "property2": null
    }
  },
  "workerMetrics": {
    "containers": {
      "property1": {},
      "property2": {}
    },
    "cpuTime": [
      {
        "rate": 0,
        "timestamp": "string",
        "totalMs": "string"
      }
    ],
    "memoryInfo": [
      {
        "currentLimitBytes": "string",
        "currentOoms": "string",
        "currentRssBytes": "string",
        "timestamp": "string",
        "totalGbMs": "string"
      }
    ]
  },
  "workerShutdownNotice": {
    "reason": "string"
  },
  "workerThreadScalingReport": {
    "currentThreadCount": 0
  }
}
```

WorkerMessage provides information to the backend about a worker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|Labels are used to group WorkerMessages. For example, a worker_message about a particular container might have the labels: { "JOB_ID": "2015-04-22", "WORKER_ID": "wordcount-vm-2015…" "CONTAINER_TYPE": "worker", "CONTAINER_ID": "ac1234def"} Label tags typically correspond to Label enum values. However, for ease of development other strings can be used as tags. LABEL_UNSPECIFIED should not be used here.|
|time|string(google-datetime)|false|none|The timestamp of the worker_message.|
|workerHealthReport|[WorkerHealthReport](#schemaworkerhealthreport)|false|none|The health of a worker.|
|workerLifecycleEvent|[WorkerLifecycleEvent](#schemaworkerlifecycleevent)|false|none|Record of worker lifecycle events.|
|workerMessageCode|[WorkerMessageCode](#schemaworkermessagecode)|false|none|A worker message code.|
|workerMetrics|[ResourceUtilizationReport](#schemaresourceutilizationreport)|false|none|Resource metrics reported by workers.|
|workerShutdownNotice|[WorkerShutdownNotice](#schemaworkershutdownnotice)|false|none|Shutdown notice by workers.|
|workerThreadScalingReport|[WorkerThreadScalingReport](#schemaworkerthreadscalingreport)|false|none|Thread scaling information reported by workers.|

<h2 id="tocS_WorkerMessageCode">WorkerMessageCode</h2>
<!-- backwards compatibility -->
<a id="schemaworkermessagecode"></a>
<a id="schema_WorkerMessageCode"></a>
<a id="tocSworkermessagecode"></a>
<a id="tocsworkermessagecode"></a>

```json
{
  "code": "string",
  "parameters": {
    "property1": null,
    "property2": null
  }
}
```

A message code is used to report status and error messages to the service. The message codes are intended to be machine readable. The service will take care of translating these into user understandable messages if necessary. Example use cases: 1. Worker processes reporting successful startup. 2. Worker processes reporting specific errors (e.g. package staging failure).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The code is a string intended for consumption by a machine that identifies the type of message being sent. Examples: 1. "HARNESS_STARTED" might be used to indicate the worker harness has started. 2. "GCS_DOWNLOAD_ERROR" might be used to indicate an error downloading a Cloud Storage file as part of the boot process of one of the worker containers. This is a string and not an enum to make it easy to add new codes without waiting for an API change.|
|parameters|object|false|none|Parameters contains specific information about the code. This is a struct to allow parameters of different types. Examples: 1. For a "HARNESS_STARTED" message parameters might provide the name of the worker and additional data like timing information. 2. For a "GCS_DOWNLOAD_ERROR" parameters might contain fields listing the Cloud Storage objects being downloaded and fields containing errors. In general complex data structures should be avoided. If a worker needs to send a specific and complicated data structure then please consider defining a new proto and adding it to the data oneof in WorkerMessageResponse. Conventions: Parameters should only be used for information that isn't typically passed as a label. hostname and other worker identifiers should almost always be passed as labels since they will be included on most messages.|

<h2 id="tocS_WorkerMessageResponse">WorkerMessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkermessageresponse"></a>
<a id="schema_WorkerMessageResponse"></a>
<a id="tocSworkermessageresponse"></a>
<a id="tocsworkermessageresponse"></a>

```json
{
  "workerHealthReportResponse": {
    "reportInterval": "string"
  },
  "workerMetricsResponse": {},
  "workerShutdownNoticeResponse": {},
  "workerThreadScalingReportResponse": {
    "recommendedThreadCount": 0
  }
}
```

A worker_message response allows the server to pass information to the sender.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workerHealthReportResponse|[WorkerHealthReportResponse](#schemaworkerhealthreportresponse)|false|none|The service's response to a worker's health report.|
|workerMetricsResponse|[ResourceUtilizationReportResponse](#schemaresourceutilizationreportresponse)|false|none|Service's response to reporting worker metrics (currently empty).|
|workerShutdownNoticeResponse|[WorkerShutdownNoticeResponse](#schemaworkershutdownnoticeresponse)|false|none|Service's response to shutdown notice (currently empty).|
|workerThreadScalingReportResponse|[WorkerThreadScalingReportResponse](#schemaworkerthreadscalingreportresponse)|false|none|Service's thread scaling recommendation for workers.|

<h2 id="tocS_WorkerPool">WorkerPool</h2>
<!-- backwards compatibility -->
<a id="schemaworkerpool"></a>
<a id="schema_WorkerPool"></a>
<a id="tocSworkerpool"></a>
<a id="tocsworkerpool"></a>

```json
{
  "autoscalingSettings": {
    "algorithm": "AUTOSCALING_ALGORITHM_UNKNOWN",
    "maxNumWorkers": 0
  },
  "dataDisks": [
    {
      "diskType": "string",
      "mountPoint": "string",
      "sizeGb": 0
    }
  ],
  "defaultPackageSet": "DEFAULT_PACKAGE_SET_UNKNOWN",
  "diskSizeGb": 0,
  "diskSourceImage": "string",
  "diskType": "string",
  "ipConfiguration": "WORKER_IP_UNSPECIFIED",
  "kind": "string",
  "machineType": "string",
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "network": "string",
  "numThreadsPerWorker": 0,
  "numWorkers": 0,
  "onHostMaintenance": "string",
  "packages": [
    {
      "location": "string",
      "name": "string"
    }
  ],
  "poolArgs": {
    "property1": null,
    "property2": null
  },
  "sdkHarnessContainerImages": [
    {
      "capabilities": [
        "string"
      ],
      "containerImage": "string",
      "environmentId": "string",
      "useSingleCorePerContainer": true
    }
  ],
  "subnetwork": "string",
  "taskrunnerSettings": {
    "alsologtostderr": true,
    "baseTaskDir": "string",
    "baseUrl": "string",
    "commandlinesFileName": "string",
    "continueOnException": true,
    "dataflowApiVersion": "string",
    "harnessCommand": "string",
    "languageHint": "string",
    "logDir": "string",
    "logToSerialconsole": true,
    "logUploadLocation": "string",
    "oauthScopes": [
      "string"
    ],
    "parallelWorkerSettings": {
      "baseUrl": "string",
      "reportingEnabled": true,
      "servicePath": "string",
      "shuffleServicePath": "string",
      "tempStoragePrefix": "string",
      "workerId": "string"
    },
    "streamingWorkerMainClass": "string",
    "taskGroup": "string",
    "taskUser": "string",
    "tempStoragePrefix": "string",
    "vmId": "string",
    "workflowFileName": "string"
  },
  "teardownPolicy": "TEARDOWN_POLICY_UNKNOWN",
  "workerHarnessContainerImage": "string",
  "zone": "string"
}
```

Describes one particular pool of Cloud Dataflow workers to be instantiated by the Cloud Dataflow service in order to perform the computations required by a job. Note that a workflow job may use multiple pools, in order to match the various computational requirements of the various stages of the job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoscalingSettings|[AutoscalingSettings](#schemaautoscalingsettings)|false|none|Settings for autoscaling of this WorkerPool.|
|dataDisks|[[Disk](#schemadisk)]|false|none|Data disks that are used by a VM in this workflow.|
|defaultPackageSet|string|false|none|The default package set to install. This allows the service to select a default set of packages which are useful to worker harnesses written in a particular language.|
|diskSizeGb|integer(int32)|false|none|Size of root disk for VMs, in GB. If zero or unspecified, the service will attempt to choose a reasonable default.|
|diskSourceImage|string|false|none|Fully qualified source image for disks.|
|diskType|string|false|none|Type of root disk for VMs. If empty or unspecified, the service will attempt to choose a reasonable default.|
|ipConfiguration|string|false|none|Configuration for VM IPs.|
|kind|string|false|none|The kind of the worker pool; currently only `harness` and `shuffle` are supported.|
|machineType|string|false|none|Machine type (e.g. "n1-standard-1"). If empty or unspecified, the service will attempt to choose a reasonable default.|
|metadata|object|false|none|Metadata to set on the Google Compute Engine VMs.|
|network|string|false|none|Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".|
|numThreadsPerWorker|integer(int32)|false|none|The number of threads per worker harness. If empty or unspecified, the service will choose a number of threads (according to the number of cores on the selected machine type for batch, or 1 by convention for streaming).|
|numWorkers|integer(int32)|false|none|Number of Google Compute Engine workers in this pool needed to execute the job. If zero or unspecified, the service will attempt to choose a reasonable default.|
|onHostMaintenance|string|false|none|The action to take on host maintenance, as defined by the Google Compute Engine API.|
|packages|[[Package](#schemapackage)]|false|none|Packages to be installed on workers.|
|poolArgs|object|false|none|Extra arguments for this worker pool.|
|sdkHarnessContainerImages|[[SdkHarnessContainerImage](#schemasdkharnesscontainerimage)]|false|none|Set of SDK harness containers needed to execute this pipeline. This will only be set in the Fn API path. For non-cross-language pipelines this should have only one entry. Cross-language pipelines will have two or more entries.|
|subnetwork|string|false|none|Subnetwork to which VMs will be assigned, if desired. Expected to be of the form "regions/REGION/subnetworks/SUBNETWORK".|
|taskrunnerSettings|[TaskRunnerSettings](#schemataskrunnersettings)|false|none|Settings passed through to Google Compute Engine workers when using the standard Dataflow task runner. Users should ignore this field.|
|teardownPolicy|string|false|none|Sets the policy for determining when to turndown worker pool. Allowed values are: `TEARDOWN_ALWAYS`, `TEARDOWN_ON_SUCCESS`, and `TEARDOWN_NEVER`. `TEARDOWN_ALWAYS` means workers are always torn down regardless of whether the job succeeds. `TEARDOWN_ON_SUCCESS` means workers are torn down if the job succeeds. `TEARDOWN_NEVER` means the workers are never torn down. If the workers are not torn down by the service, they will continue to run and use Google Compute Engine VM resources in the user's project until they are explicitly terminated by the user. Because of this, Google recommends using the `TEARDOWN_ALWAYS` policy except for small, manually supervised test jobs. If unknown or unspecified, the service will attempt to choose a reasonable default.|
|workerHarnessContainerImage|string|false|none|Required. Docker container image that executes the Cloud Dataflow worker harness, residing in Google Container Registry. Deprecated for the Fn API path. Use sdk_harness_container_images instead.|
|zone|string|false|none|Zone to run the worker pools in. If empty or unspecified, the service will attempt to choose a reasonable default.|

#### Enumerated Values

|Property|Value|
|---|---|
|defaultPackageSet|DEFAULT_PACKAGE_SET_UNKNOWN|
|defaultPackageSet|DEFAULT_PACKAGE_SET_NONE|
|defaultPackageSet|DEFAULT_PACKAGE_SET_JAVA|
|defaultPackageSet|DEFAULT_PACKAGE_SET_PYTHON|
|ipConfiguration|WORKER_IP_UNSPECIFIED|
|ipConfiguration|WORKER_IP_PUBLIC|
|ipConfiguration|WORKER_IP_PRIVATE|
|teardownPolicy|TEARDOWN_POLICY_UNKNOWN|
|teardownPolicy|TEARDOWN_ALWAYS|
|teardownPolicy|TEARDOWN_ON_SUCCESS|
|teardownPolicy|TEARDOWN_NEVER|

<h2 id="tocS_WorkerSettings">WorkerSettings</h2>
<!-- backwards compatibility -->
<a id="schemaworkersettings"></a>
<a id="schema_WorkerSettings"></a>
<a id="tocSworkersettings"></a>
<a id="tocsworkersettings"></a>

```json
{
  "baseUrl": "string",
  "reportingEnabled": true,
  "servicePath": "string",
  "shuffleServicePath": "string",
  "tempStoragePrefix": "string",
  "workerId": "string"
}
```

Provides data to pass through to the worker harness.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseUrl|string|false|none|The base URL for accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/"|
|reportingEnabled|boolean|false|none|Whether to send work progress updates to the service.|
|servicePath|string|false|none|The Cloud Dataflow service path relative to the root URL, for example, "dataflow/v1b3/projects".|
|shuffleServicePath|string|false|none|The Shuffle service path relative to the root URL, for example, "shuffle/v1beta1".|
|tempStoragePrefix|string|false|none|The prefix of the resources the system should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}|
|workerId|string|false|none|The ID of the worker running this pipeline.|

<h2 id="tocS_WorkerShutdownNotice">WorkerShutdownNotice</h2>
<!-- backwards compatibility -->
<a id="schemaworkershutdownnotice"></a>
<a id="schema_WorkerShutdownNotice"></a>
<a id="tocSworkershutdownnotice"></a>
<a id="tocsworkershutdownnotice"></a>

```json
{
  "reason": "string"
}
```

Shutdown notification from workers. This is to be sent by the shutdown script of the worker VM so that the backend knows that the VM is being shut down.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason for the worker shutdown. Current possible values are: "UNKNOWN": shutdown reason is unknown. "PREEMPTION": shutdown reason is preemption. Other possible reasons may be added in the future.|

<h2 id="tocS_WorkerShutdownNoticeResponse">WorkerShutdownNoticeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkershutdownnoticeresponse"></a>
<a id="schema_WorkerShutdownNoticeResponse"></a>
<a id="tocSworkershutdownnoticeresponse"></a>
<a id="tocsworkershutdownnoticeresponse"></a>

```json
{}
```

Service-side response to WorkerMessage issuing shutdown notice.

<h2 id="tocS_WorkerThreadScalingReport">WorkerThreadScalingReport</h2>
<!-- backwards compatibility -->
<a id="schemaworkerthreadscalingreport"></a>
<a id="schema_WorkerThreadScalingReport"></a>
<a id="tocSworkerthreadscalingreport"></a>
<a id="tocsworkerthreadscalingreport"></a>

```json
{
  "currentThreadCount": 0
}
```

Contains information about the thread scaling information of a worker.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentThreadCount|integer(int32)|false|none|Current number of active threads in a worker.|

<h2 id="tocS_WorkerThreadScalingReportResponse">WorkerThreadScalingReportResponse</h2>
<!-- backwards compatibility -->
<a id="schemaworkerthreadscalingreportresponse"></a>
<a id="schema_WorkerThreadScalingReportResponse"></a>
<a id="tocSworkerthreadscalingreportresponse"></a>
<a id="tocsworkerthreadscalingreportresponse"></a>

```json
{
  "recommendedThreadCount": 0
}
```

Contains the thread scaling recommendation for a worker from the backend.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommendedThreadCount|integer(int32)|false|none|Recommended number of threads for a worker.|

<h2 id="tocS_WriteInstruction">WriteInstruction</h2>
<!-- backwards compatibility -->
<a id="schemawriteinstruction"></a>
<a id="schema_WriteInstruction"></a>
<a id="tocSwriteinstruction"></a>
<a id="tocswriteinstruction"></a>

```json
{
  "input": {
    "outputNum": 0,
    "producerInstructionIndex": 0
  },
  "sink": {
    "codec": {
      "property1": null,
      "property2": null
    },
    "spec": {
      "property1": null,
      "property2": null
    }
  }
}
```

An instruction that writes records. Takes one input, produces no outputs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|[InstructionInput](#schemainstructioninput)|false|none|The input.|
|sink|[Sink](#schemasink)|false|none|The sink to write to.|
