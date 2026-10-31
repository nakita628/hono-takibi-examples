<h1 id="data-labeling-api">Data Labeling API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Public API for Google Cloud AI Data Labeling Service.

Base URLs:

* <a href="https://datalabeling.googleapis.com/">https://datalabeling.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/data-labeling/docs/">External documentation</a>

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

<h1 id="data-labeling-api-projects">projects</h1>

## datalabeling.projects.operations.get

<a id="opIddatalabeling.projects.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="datalabelingprojectsoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource.|
|filter|query|string|false|Optional. An expression for filtering Examples. Filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}"|
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

<h3 id="datalabelingprojectsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.operations.delete

<a id="opIddatalabeling.projects.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="datalabelingprojectsoperationsdelete-parameters">Parameters</h3>

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

<h3 id="datalabelingprojectsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.evaluationJobs.patch

<a id="opIddatalabeling.projects.evaluationJobs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotationSpecSet": "string",
    "attempts": [
      {
        "attemptTime": "string",
        "partialFailures": [
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
        ]
      }
    ],
    "createTime": "string",
    "description": "string",
    "evaluationJobConfig": {
      "bigqueryImportKeys": {
        "property1": "string",
        "property2": "string"
      },
      "boundingPolyConfig": {
        "annotationSpecSet": "string",
        "instructionMessage": "string"
      },
      "evaluationConfig": {
        "boundingBoxEvaluationOptions": {
          "iouThreshold": 0
        }
      },
      "evaluationJobAlertConfig": {
        "email": "string",
        "minAcceptableMeanAveragePrecision": 0
      },
      "exampleCount": 0,
      "exampleSamplePercentage": 0,
      "humanAnnotationConfig": {
        "annotatedDatasetDescription": "string",
        "annotatedDatasetDisplayName": "string",
        "contributorEmails": [
          "string"
        ],
        "instruction": "string",
        "labelGroup": "string",
        "languageCode": "string",
        "questionDuration": "string",
        "replicaCount": 0,
        "userEmailAddress": "string"
      },
      "imageClassificationConfig": {
        "allowMultiLabel": true,
        "annotationSpecSet": "string",
        "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
      },
      "inputConfig": {
        "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
        "bigquerySource": {
          "inputUri": "string"
        },
        "classificationMetadata": {
          "isMultiLabel": true
        },
        "dataType": "DATA_TYPE_UNSPECIFIED",
        "gcsSource": {
          "inputUri": "string",
          "mimeType": "string"
        },
        "textMetadata": {
          "languageCode": "string"
        }
      },
      "textClassificationConfig": {
        "allowMultiLabel": true,
        "annotationSpecSet": "string",
        "sentimentConfig": {
          "enableLabelSentimentSelection": true
        }
      }
    },
    "labelMissingGroundTruth": true,
    "modelVersion": "string",
    "name": "string",
    "schedule": "string",
    "state": "STATE_UNSPECIFIED"
  }'
```

`PATCH /v1beta1/{name}`

Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.

> Body parameter

```json
{
  "annotationSpecSet": "string",
  "attempts": [
    {
      "attemptTime": "string",
      "partialFailures": [
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
      ]
    }
  ],
  "createTime": "string",
  "description": "string",
  "evaluationJobConfig": {
    "bigqueryImportKeys": {
      "property1": "string",
      "property2": "string"
    },
    "boundingPolyConfig": {
      "annotationSpecSet": "string",
      "instructionMessage": "string"
    },
    "evaluationConfig": {
      "boundingBoxEvaluationOptions": {
        "iouThreshold": 0
      }
    },
    "evaluationJobAlertConfig": {
      "email": "string",
      "minAcceptableMeanAveragePrecision": 0
    },
    "exampleCount": 0,
    "exampleSamplePercentage": 0,
    "humanAnnotationConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    },
    "imageClassificationConfig": {
      "allowMultiLabel": true,
      "annotationSpecSet": "string",
      "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
    },
    "inputConfig": {
      "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
      "bigquerySource": {
        "inputUri": "string"
      },
      "classificationMetadata": {
        "isMultiLabel": true
      },
      "dataType": "DATA_TYPE_UNSPECIFIED",
      "gcsSource": {
        "inputUri": "string",
        "mimeType": "string"
      },
      "textMetadata": {
        "languageCode": "string"
      }
    },
    "textClassificationConfig": {
      "allowMultiLabel": true,
      "annotationSpecSet": "string",
      "sentimentConfig": {
        "enableLabelSentimentSelection": true
      }
    }
  },
  "labelMissingGroundTruth": true,
  "modelVersion": "string",
  "name": "string",
  "schedule": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="datalabelingprojectsevaluationjobspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}"|
|updateMask|query|string|false|Optional. Mask for which fields to update. You can only provide the following fields: * `evaluationJobConfig.humanAnnotationConfig.instruction` * `evaluationJobConfig.exampleCount` * `evaluationJobConfig.exampleSamplePercentage` You can provide more than one of these fields by separating them with commas.|
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
|body|body|[GoogleCloudDatalabelingV1beta1EvaluationJob](#schemagoogleclouddatalabelingv1beta1evaluationjob)|false|none|
|» annotationSpecSet|body|string|false|Required. Name of the AnnotationSpecSet describing all the labels that your machine learning model outputs. You must create this resource before you create an evaluation job and provide its name in the following format: "projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}"|
|» attempts|body|[[GoogleCloudDatalabelingV1beta1Attempt](#schemagoogleclouddatalabelingv1beta1attempt)]|false|Output only. Every time the evaluation job runs and an error occurs, the failed attempt is appended to this array.|
|» createTime|body|string(google-datetime)|false|Output only. Timestamp of when this evaluation job was created.|
|» description|body|string|false|Required. Description of the job. The description can be up to 25,000 characters long.|
|» evaluationJobConfig|body|[GoogleCloudDatalabelingV1beta1EvaluationJobConfig](#schemagoogleclouddatalabelingv1beta1evaluationjobconfig)|false|Required. Configuration details for the evaluation job.|
|» labelMissingGroundTruth|body|boolean|false|Required. Whether you want Data Labeling Service to provide ground truth labels for prediction input. If you want the service to assign human labelers to annotate your data, set this to `true`. If you want to provide your own ground truth labels in the evaluation job's BigQuery table, set this to `false`.|
|» modelVersion|body|string|false|Required. The [AI Platform Prediction model version](/ml-engine/docs/prediction-overview) to be evaluated. Prediction input and output is sampled from this model version. When creating an evaluation job, specify the model version in the following format: "projects/{project_id}/models/{model_name}/versions/{version_name}" There can only be one evaluation job per model version.|
|» name|body|string|false|Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}"|
|» schedule|body|string|false|Required. Describes the interval at which the job runs. This interval must be at least 1 day, and it is rounded to the nearest day. For example, if you specify a 50-hour interval, the job runs every 2 days. You can provide the schedule in [crontab format](/scheduler/docs/configuring/cron-job-schedules) or in an [English-like format](/appengine/docs/standard/python/config/cronref#schedule_format). Regardless of what you specify, the job will run at 10:00 AM UTC. Only the interval from this schedule is used, not the specific time of day.|
|» state|body|string|false|Output only. Describes the current state of the job.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|SCHEDULED|
|» state|RUNNING|
|» state|PAUSED|
|» state|STOPPED|

> Example responses

> 200 Response

```json
{
  "annotationSpecSet": "string",
  "attempts": [
    {
      "attemptTime": "string",
      "partialFailures": [
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
      ]
    }
  ],
  "createTime": "string",
  "description": "string",
  "evaluationJobConfig": {
    "bigqueryImportKeys": {
      "property1": "string",
      "property2": "string"
    },
    "boundingPolyConfig": {
      "annotationSpecSet": "string",
      "instructionMessage": "string"
    },
    "evaluationConfig": {
      "boundingBoxEvaluationOptions": {
        "iouThreshold": 0
      }
    },
    "evaluationJobAlertConfig": {
      "email": "string",
      "minAcceptableMeanAveragePrecision": 0
    },
    "exampleCount": 0,
    "exampleSamplePercentage": 0,
    "humanAnnotationConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    },
    "imageClassificationConfig": {
      "allowMultiLabel": true,
      "annotationSpecSet": "string",
      "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
    },
    "inputConfig": {
      "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
      "bigquerySource": {
        "inputUri": "string"
      },
      "classificationMetadata": {
        "isMultiLabel": true
      },
      "dataType": "DATA_TYPE_UNSPECIFIED",
      "gcsSource": {
        "inputUri": "string",
        "mimeType": "string"
      },
      "textMetadata": {
        "languageCode": "string"
      }
    },
    "textClassificationConfig": {
      "allowMultiLabel": true,
      "annotationSpecSet": "string",
      "sentimentConfig": {
        "enableLabelSentimentSelection": true
      }
    }
  },
  "labelMissingGroundTruth": true,
  "modelVersion": "string",
  "name": "string",
  "schedule": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="datalabelingprojectsevaluationjobspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatalabelingV1beta1EvaluationJob](#schemagoogleclouddatalabelingv1beta1evaluationjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.operations.list

<a id="opIddatalabeling.projects.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<h3 id="datalabelingprojectsoperationslist-parameters">Parameters</h3>

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

<h3 id="datalabelingprojectsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.operations.cancel

<a id="opIddatalabeling.projects.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:cancel \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

<h3 id="datalabelingprojectsoperationscancel-parameters">Parameters</h3>

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

<h3 id="datalabelingprojectsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.datasets.exportData

<a id="opIddatalabeling.projects.datasets.exportData"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:exportData \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotatedDataset": "string",
    "filter": "string",
    "outputConfig": {
      "gcsDestination": {
        "mimeType": "string",
        "outputUri": "string"
      },
      "gcsFolderDestination": {
        "outputFolderUri": "string"
      }
    },
    "userEmailAddress": "string"
  }'
```

`POST /v1beta1/{name}:exportData`

Exports data and annotations from dataset.

> Body parameter

```json
{
  "annotatedDataset": "string",
  "filter": "string",
  "outputConfig": {
    "gcsDestination": {
      "mimeType": "string",
      "outputUri": "string"
    },
    "gcsFolderDestination": {
      "outputFolderUri": "string"
    }
  },
  "userEmailAddress": "string"
}
```

<h3 id="datalabelingprojectsdatasetsexportdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}|
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
|body|body|[GoogleCloudDatalabelingV1beta1ExportDataRequest](#schemagoogleclouddatalabelingv1beta1exportdatarequest)|false|none|
|» annotatedDataset|body|string|false|Required. Annotated dataset resource name. DataItem in Dataset and their annotations in specified annotated dataset will be exported. It's in format of projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}|
|» filter|body|string|false|Optional. Filter is not supported at this moment.|
|» outputConfig|body|[GoogleCloudDatalabelingV1beta1OutputConfig](#schemagoogleclouddatalabelingv1beta1outputconfig)|false|Required. Specify the output destination.|
|» userEmailAddress|body|string|false|Email of the user who started the export task and should be notified by email. If empty no notification will be sent.|

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

<h3 id="datalabelingprojectsdatasetsexportdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.datasets.importData

<a id="opIddatalabeling.projects.datasets.importData"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:importData \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inputConfig": {
      "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
      "bigquerySource": {
        "inputUri": "string"
      },
      "classificationMetadata": {
        "isMultiLabel": true
      },
      "dataType": "DATA_TYPE_UNSPECIFIED",
      "gcsSource": {
        "inputUri": "string",
        "mimeType": "string"
      },
      "textMetadata": {
        "languageCode": "string"
      }
    },
    "userEmailAddress": "string"
  }'
```

`POST /v1beta1/{name}:importData`

Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.

> Body parameter

```json
{
  "inputConfig": {
    "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
    "bigquerySource": {
      "inputUri": "string"
    },
    "classificationMetadata": {
      "isMultiLabel": true
    },
    "dataType": "DATA_TYPE_UNSPECIFIED",
    "gcsSource": {
      "inputUri": "string",
      "mimeType": "string"
    },
    "textMetadata": {
      "languageCode": "string"
    }
  },
  "userEmailAddress": "string"
}
```

<h3 id="datalabelingprojectsdatasetsimportdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Dataset resource name, format: projects/{project_id}/datasets/{dataset_id}|
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
|body|body|[GoogleCloudDatalabelingV1beta1ImportDataRequest](#schemagoogleclouddatalabelingv1beta1importdatarequest)|false|none|
|» inputConfig|body|[GoogleCloudDatalabelingV1beta1InputConfig](#schemagoogleclouddatalabelingv1beta1inputconfig)|false|Required. Specify the input source of the data.|
|» userEmailAddress|body|string|false|Email of the user who started the import task and should be notified by email. If empty no notification will be sent.|

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

<h3 id="datalabelingprojectsdatasetsimportdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.evaluationJobs.pause

<a id="opIddatalabeling.projects.evaluationJobs.pause"></a>

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

Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.

> Body parameter

```json
{}
```

<h3 id="datalabelingprojectsevaluationjobspause-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the evaluation job that is going to be paused. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}"|
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
|body|body|[GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest](#schemagoogleclouddatalabelingv1beta1pauseevaluationjobrequest)|false|none|

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

<h3 id="datalabelingprojectsevaluationjobspause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.evaluationJobs.resume

<a id="opIddatalabeling.projects.evaluationJobs.resume"></a>

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

Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.

> Body parameter

```json
{}
```

<h3 id="datalabelingprojectsevaluationjobsresume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the evaluation job that is going to be resumed. Format: "projects/{project_id}/evaluationJobs/{evaluation_job_id}"|
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
|body|body|[GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest](#schemagoogleclouddatalabelingv1beta1resumeevaluationjobrequest)|false|none|

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

<h3 id="datalabelingprojectsevaluationjobsresume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.datasets.annotatedDatasets.list

<a id="opIddatalabeling.projects.datasets.annotatedDatasets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/annotatedDatasets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/annotatedDatasets`

Lists annotated datasets for a dataset. Pagination is supported.

<h3 id="datalabelingprojectsdatasetsannotateddatasetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the dataset to list annotated datasets, format: projects/{project_id}/datasets/{dataset_id}|
|filter|query|string|false|Optional. Filter is not supported at this moment.|
|pageSize|query|integer|false|Optional. Requested page size. Server may return fewer results than requested. Default value is 100.|
|pageToken|query|string|false|Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotatedDatasetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotatedDatasets] call. Return first page if empty.|
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
  "annotatedDatasets": [
    {
      "annotationSource": "ANNOTATION_SOURCE_UNSPECIFIED",
      "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
      "blockingResources": [
        "string"
      ],
      "completedExampleCount": "string",
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "exampleCount": "string",
      "labelStats": {
        "exampleCount": {
          "property1": "string",
          "property2": "string"
        }
      },
      "metadata": {
        "boundingPolyConfig": {
          "annotationSpecSet": "string",
          "instructionMessage": "string"
        },
        "eventConfig": {
          "annotationSpecSets": [
            "string"
          ],
          "clipLength": 0,
          "overlapLength": 0
        },
        "humanAnnotationConfig": {
          "annotatedDatasetDescription": "string",
          "annotatedDatasetDisplayName": "string",
          "contributorEmails": [
            "string"
          ],
          "instruction": "string",
          "labelGroup": "string",
          "languageCode": "string",
          "questionDuration": "string",
          "replicaCount": 0,
          "userEmailAddress": "string"
        },
        "imageClassificationConfig": {
          "allowMultiLabel": true,
          "annotationSpecSet": "string",
          "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
        },
        "objectDetectionConfig": {
          "annotationSpecSet": "string",
          "extractionFrameRate": 0
        },
        "objectTrackingConfig": {
          "annotationSpecSet": "string",
          "clipLength": 0,
          "overlapLength": 0
        },
        "polylineConfig": {
          "annotationSpecSet": "string",
          "instructionMessage": "string"
        },
        "segmentationConfig": {
          "annotationSpecSet": "string",
          "instructionMessage": "string"
        },
        "textClassificationConfig": {
          "allowMultiLabel": true,
          "annotationSpecSet": "string",
          "sentimentConfig": {
            "enableLabelSentimentSelection": true
          }
        },
        "textEntityExtractionConfig": {
          "annotationSpecSet": "string"
        },
        "videoClassificationConfig": {
          "annotationSpecSetConfigs": [
            {
              "allowMultiLabel": true,
              "annotationSpecSet": "string"
            }
          ],
          "applyShotDetection": true
        }
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datalabelingprojectsdatasetsannotateddatasetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse](#schemagoogleclouddatalabelingv1beta1listannotateddatasetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.annotationSpecSets.list

<a id="opIddatalabeling.projects.annotationSpecSets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/annotationSpecSets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/annotationSpecSets`

Lists annotation spec sets for a project. Pagination is supported.

<h3 id="datalabelingprojectsannotationspecsetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Parent of AnnotationSpecSet resource, format: projects/{project_id}|
|filter|query|string|false|Optional. Filter is not supported at this moment.|
|pageSize|query|integer|false|Optional. Requested page size. Server may return fewer results than requested. Default value is 100.|
|pageToken|query|string|false|Optional. A token identifying a page of results for the server to return. Typically obtained by ListAnnotationSpecSetsResponse.next_page_token of the previous [DataLabelingService.ListAnnotationSpecSets] call. Return first page if empty.|
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
  "annotationSpecSets": [
    {
      "annotationSpecs": [
        {
          "description": "string",
          "displayName": "string",
          "index": 0
        }
      ],
      "blockingResources": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datalabelingprojectsannotationspecsetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse](#schemagoogleclouddatalabelingv1beta1listannotationspecsetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.annotationSpecSets.create

<a id="opIddatalabeling.projects.annotationSpecSets.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/annotationSpecSets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "annotationSpecSet": {
      "annotationSpecs": [
        {
          "description": "string",
          "displayName": "string",
          "index": 0
        }
      ],
      "blockingResources": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "name": "string"
    }
  }'
```

`POST /v1beta1/{parent}/annotationSpecSets`

Creates an annotation spec set by providing a set of labels.

> Body parameter

```json
{
  "annotationSpecSet": {
    "annotationSpecs": [
      {
        "description": "string",
        "displayName": "string",
        "index": 0
      }
    ],
    "blockingResources": [
      "string"
    ],
    "description": "string",
    "displayName": "string",
    "name": "string"
  }
}
```

<h3 id="datalabelingprojectsannotationspecsetscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. AnnotationSpecSet resource parent, format: projects/{project_id}|
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
|body|body|[GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest](#schemagoogleclouddatalabelingv1beta1createannotationspecsetrequest)|false|none|
|» annotationSpecSet|body|[GoogleCloudDatalabelingV1beta1AnnotationSpecSet](#schemagoogleclouddatalabelingv1beta1annotationspecset)|false|Required. Annotation spec set to create. Annotation specs must be included. Only one annotation spec will be accepted for annotation specs with same display_name.|

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
  "annotationSpecs": [
    {
      "description": "string",
      "displayName": "string",
      "index": 0
    }
  ],
  "blockingResources": [
    "string"
  ],
  "description": "string",
  "displayName": "string",
  "name": "string"
}
```

<h3 id="datalabelingprojectsannotationspecsetscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatalabelingV1beta1AnnotationSpecSet](#schemagoogleclouddatalabelingv1beta1annotationspecset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.datasets.dataItems.list

<a id="opIddatalabeling.projects.datasets.dataItems.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/dataItems \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/dataItems`

Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.

<h3 id="datalabelingprojectsdatasetsdataitemslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the dataset to list data items, format: projects/{project_id}/datasets/{dataset_id}|
|filter|query|string|false|Optional. Filter is not supported at this moment.|
|pageSize|query|integer|false|Optional. Requested page size. Server may return fewer results than requested. Default value is 100.|
|pageToken|query|string|false|Optional. A token identifying a page of results for the server to return. Typically obtained by ListDataItemsResponse.next_page_token of the previous [DataLabelingService.ListDataItems] call. Return first page if empty.|
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
  "dataItems": [
    {
      "imagePayload": {
        "imageThumbnail": "string",
        "imageUri": "string",
        "mimeType": "string",
        "signedUri": "string"
      },
      "name": "string",
      "textPayload": {
        "textContent": "string"
      },
      "videoPayload": {
        "frameRate": 0,
        "mimeType": "string",
        "signedUri": "string",
        "videoThumbnails": [
          {
            "thumbnail": "string",
            "timeOffset": "string"
          }
        ],
        "videoUri": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datalabelingprojectsdatasetsdataitemslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatalabelingV1beta1ListDataItemsResponse](#schemagoogleclouddatalabelingv1beta1listdataitemsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.datasets.list

<a id="opIddatalabeling.projects.datasets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/datasets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/datasets`

Lists datasets under a project. Pagination is supported.

<h3 id="datalabelingprojectsdatasetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Dataset resource parent, format: projects/{project_id}|
|filter|query|string|false|Optional. Filter on dataset is not supported at this moment.|
|pageSize|query|integer|false|Optional. Requested page size. Server may return fewer results than requested. Default value is 100.|
|pageToken|query|string|false|Optional. A token identifying a page of results for the server to return. Typically obtained by ListDatasetsResponse.next_page_token of the previous [DataLabelingService.ListDatasets] call. Returns the first page if empty.|
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
  "datasets": [
    {
      "blockingResources": [
        "string"
      ],
      "createTime": "string",
      "dataItemCount": "string",
      "description": "string",
      "displayName": "string",
      "inputConfigs": [
        {
          "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
          "bigquerySource": {
            "inputUri": "string"
          },
          "classificationMetadata": {
            "isMultiLabel": true
          },
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "gcsSource": {
            "inputUri": "string",
            "mimeType": "string"
          },
          "textMetadata": {
            "languageCode": "string"
          }
        }
      ],
      "lastMigrateTime": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datalabelingprojectsdatasetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatalabelingV1beta1ListDatasetsResponse](#schemagoogleclouddatalabelingv1beta1listdatasetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.datasets.create

<a id="opIddatalabeling.projects.datasets.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/datasets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataset": {
      "blockingResources": [
        "string"
      ],
      "createTime": "string",
      "dataItemCount": "string",
      "description": "string",
      "displayName": "string",
      "inputConfigs": [
        {
          "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
          "bigquerySource": {
            "inputUri": "string"
          },
          "classificationMetadata": {
            "isMultiLabel": true
          },
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "gcsSource": {
            "inputUri": "string",
            "mimeType": "string"
          },
          "textMetadata": {
            "languageCode": "string"
          }
        }
      ],
      "lastMigrateTime": "string",
      "name": "string"
    }
  }'
```

`POST /v1beta1/{parent}/datasets`

Creates dataset. If success return a Dataset resource.

> Body parameter

```json
{
  "dataset": {
    "blockingResources": [
      "string"
    ],
    "createTime": "string",
    "dataItemCount": "string",
    "description": "string",
    "displayName": "string",
    "inputConfigs": [
      {
        "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
        "bigquerySource": {
          "inputUri": "string"
        },
        "classificationMetadata": {
          "isMultiLabel": true
        },
        "dataType": "DATA_TYPE_UNSPECIFIED",
        "gcsSource": {
          "inputUri": "string",
          "mimeType": "string"
        },
        "textMetadata": {
          "languageCode": "string"
        }
      }
    ],
    "lastMigrateTime": "string",
    "name": "string"
  }
}
```

<h3 id="datalabelingprojectsdatasetscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Dataset resource parent, format: projects/{project_id}|
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
|body|body|[GoogleCloudDatalabelingV1beta1CreateDatasetRequest](#schemagoogleclouddatalabelingv1beta1createdatasetrequest)|false|none|
|» dataset|body|[GoogleCloudDatalabelingV1beta1Dataset](#schemagoogleclouddatalabelingv1beta1dataset)|false|Required. The dataset to be created.|

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
  "blockingResources": [
    "string"
  ],
  "createTime": "string",
  "dataItemCount": "string",
  "description": "string",
  "displayName": "string",
  "inputConfigs": [
    {
      "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
      "bigquerySource": {
        "inputUri": "string"
      },
      "classificationMetadata": {
        "isMultiLabel": true
      },
      "dataType": "DATA_TYPE_UNSPECIFIED",
      "gcsSource": {
        "inputUri": "string",
        "mimeType": "string"
      },
      "textMetadata": {
        "languageCode": "string"
      }
    }
  ],
  "lastMigrateTime": "string",
  "name": "string"
}
```

<h3 id="datalabelingprojectsdatasetscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatalabelingV1beta1Dataset](#schemagoogleclouddatalabelingv1beta1dataset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.evaluationJobs.list

<a id="opIddatalabeling.projects.evaluationJobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/evaluationJobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/evaluationJobs`

Lists all evaluation jobs within a project with possible filters. Pagination is supported.

<h3 id="datalabelingprojectsevaluationjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Evaluation job resource parent. Format: "projects/{project_id}"|
|filter|query|string|false|Optional. You can filter the jobs to list by model_id (also known as model_name, as described in EvaluationJob.modelVersion) or by evaluation job state (as described in EvaluationJob.state). To filter by both criteria, use the `AND` operator or the `OR` operator. For example, you can use the following string for your filter: "evaluation_job.model_id = {model_name} AND evaluation_job.state = {evaluation_job_state}"|
|pageSize|query|integer|false|Optional. Requested page size. Server may return fewer results than requested. Default value is 100.|
|pageToken|query|string|false|Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken in the response to the previous request. The request returns the first page if this is empty.|
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
  "evaluationJobs": [
    {
      "annotationSpecSet": "string",
      "attempts": [
        {
          "attemptTime": "string",
          "partialFailures": [
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
          ]
        }
      ],
      "createTime": "string",
      "description": "string",
      "evaluationJobConfig": {
        "bigqueryImportKeys": {
          "property1": "string",
          "property2": "string"
        },
        "boundingPolyConfig": {
          "annotationSpecSet": "string",
          "instructionMessage": "string"
        },
        "evaluationConfig": {
          "boundingBoxEvaluationOptions": {
            "iouThreshold": 0
          }
        },
        "evaluationJobAlertConfig": {
          "email": "string",
          "minAcceptableMeanAveragePrecision": 0
        },
        "exampleCount": 0,
        "exampleSamplePercentage": 0,
        "humanAnnotationConfig": {
          "annotatedDatasetDescription": "string",
          "annotatedDatasetDisplayName": "string",
          "contributorEmails": [
            "string"
          ],
          "instruction": "string",
          "labelGroup": "string",
          "languageCode": "string",
          "questionDuration": "string",
          "replicaCount": 0,
          "userEmailAddress": "string"
        },
        "imageClassificationConfig": {
          "allowMultiLabel": true,
          "annotationSpecSet": "string",
          "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
        },
        "inputConfig": {
          "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
          "bigquerySource": {
            "inputUri": "string"
          },
          "classificationMetadata": {
            "isMultiLabel": true
          },
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "gcsSource": {
            "inputUri": "string",
            "mimeType": "string"
          },
          "textMetadata": {
            "languageCode": "string"
          }
        },
        "textClassificationConfig": {
          "allowMultiLabel": true,
          "annotationSpecSet": "string",
          "sentimentConfig": {
            "enableLabelSentimentSelection": true
          }
        }
      },
      "labelMissingGroundTruth": true,
      "modelVersion": "string",
      "name": "string",
      "schedule": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datalabelingprojectsevaluationjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse](#schemagoogleclouddatalabelingv1beta1listevaluationjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.evaluationJobs.create

<a id="opIddatalabeling.projects.evaluationJobs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/evaluationJobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "job": {
      "annotationSpecSet": "string",
      "attempts": [
        {
          "attemptTime": "string",
          "partialFailures": [
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
          ]
        }
      ],
      "createTime": "string",
      "description": "string",
      "evaluationJobConfig": {
        "bigqueryImportKeys": {
          "property1": "string",
          "property2": "string"
        },
        "boundingPolyConfig": {
          "annotationSpecSet": "string",
          "instructionMessage": "string"
        },
        "evaluationConfig": {
          "boundingBoxEvaluationOptions": {
            "iouThreshold": 0
          }
        },
        "evaluationJobAlertConfig": {
          "email": "string",
          "minAcceptableMeanAveragePrecision": 0
        },
        "exampleCount": 0,
        "exampleSamplePercentage": 0,
        "humanAnnotationConfig": {
          "annotatedDatasetDescription": "string",
          "annotatedDatasetDisplayName": "string",
          "contributorEmails": [
            "string"
          ],
          "instruction": "string",
          "labelGroup": "string",
          "languageCode": "string",
          "questionDuration": "string",
          "replicaCount": 0,
          "userEmailAddress": "string"
        },
        "imageClassificationConfig": {
          "allowMultiLabel": true,
          "annotationSpecSet": "string",
          "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
        },
        "inputConfig": {
          "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
          "bigquerySource": {
            "inputUri": "string"
          },
          "classificationMetadata": {
            "isMultiLabel": true
          },
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "gcsSource": {
            "inputUri": "string",
            "mimeType": "string"
          },
          "textMetadata": {
            "languageCode": "string"
          }
        },
        "textClassificationConfig": {
          "allowMultiLabel": true,
          "annotationSpecSet": "string",
          "sentimentConfig": {
            "enableLabelSentimentSelection": true
          }
        }
      },
      "labelMissingGroundTruth": true,
      "modelVersion": "string",
      "name": "string",
      "schedule": "string",
      "state": "STATE_UNSPECIFIED"
    }
  }'
```

`POST /v1beta1/{parent}/evaluationJobs`

Creates an evaluation job.

> Body parameter

```json
{
  "job": {
    "annotationSpecSet": "string",
    "attempts": [
      {
        "attemptTime": "string",
        "partialFailures": [
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
        ]
      }
    ],
    "createTime": "string",
    "description": "string",
    "evaluationJobConfig": {
      "bigqueryImportKeys": {
        "property1": "string",
        "property2": "string"
      },
      "boundingPolyConfig": {
        "annotationSpecSet": "string",
        "instructionMessage": "string"
      },
      "evaluationConfig": {
        "boundingBoxEvaluationOptions": {
          "iouThreshold": 0
        }
      },
      "evaluationJobAlertConfig": {
        "email": "string",
        "minAcceptableMeanAveragePrecision": 0
      },
      "exampleCount": 0,
      "exampleSamplePercentage": 0,
      "humanAnnotationConfig": {
        "annotatedDatasetDescription": "string",
        "annotatedDatasetDisplayName": "string",
        "contributorEmails": [
          "string"
        ],
        "instruction": "string",
        "labelGroup": "string",
        "languageCode": "string",
        "questionDuration": "string",
        "replicaCount": 0,
        "userEmailAddress": "string"
      },
      "imageClassificationConfig": {
        "allowMultiLabel": true,
        "annotationSpecSet": "string",
        "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
      },
      "inputConfig": {
        "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
        "bigquerySource": {
          "inputUri": "string"
        },
        "classificationMetadata": {
          "isMultiLabel": true
        },
        "dataType": "DATA_TYPE_UNSPECIFIED",
        "gcsSource": {
          "inputUri": "string",
          "mimeType": "string"
        },
        "textMetadata": {
          "languageCode": "string"
        }
      },
      "textClassificationConfig": {
        "allowMultiLabel": true,
        "annotationSpecSet": "string",
        "sentimentConfig": {
          "enableLabelSentimentSelection": true
        }
      }
    },
    "labelMissingGroundTruth": true,
    "modelVersion": "string",
    "name": "string",
    "schedule": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

<h3 id="datalabelingprojectsevaluationjobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Evaluation job resource parent. Format: "projects/{project_id}"|
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
|body|body|[GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest](#schemagoogleclouddatalabelingv1beta1createevaluationjobrequest)|false|none|
|» job|body|[GoogleCloudDatalabelingV1beta1EvaluationJob](#schemagoogleclouddatalabelingv1beta1evaluationjob)|false|Required. The evaluation job to create.|

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
  "annotationSpecSet": "string",
  "attempts": [
    {
      "attemptTime": "string",
      "partialFailures": [
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
      ]
    }
  ],
  "createTime": "string",
  "description": "string",
  "evaluationJobConfig": {
    "bigqueryImportKeys": {
      "property1": "string",
      "property2": "string"
    },
    "boundingPolyConfig": {
      "annotationSpecSet": "string",
      "instructionMessage": "string"
    },
    "evaluationConfig": {
      "boundingBoxEvaluationOptions": {
        "iouThreshold": 0
      }
    },
    "evaluationJobAlertConfig": {
      "email": "string",
      "minAcceptableMeanAveragePrecision": 0
    },
    "exampleCount": 0,
    "exampleSamplePercentage": 0,
    "humanAnnotationConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    },
    "imageClassificationConfig": {
      "allowMultiLabel": true,
      "annotationSpecSet": "string",
      "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
    },
    "inputConfig": {
      "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
      "bigquerySource": {
        "inputUri": "string"
      },
      "classificationMetadata": {
        "isMultiLabel": true
      },
      "dataType": "DATA_TYPE_UNSPECIFIED",
      "gcsSource": {
        "inputUri": "string",
        "mimeType": "string"
      },
      "textMetadata": {
        "languageCode": "string"
      }
    },
    "textClassificationConfig": {
      "allowMultiLabel": true,
      "annotationSpecSet": "string",
      "sentimentConfig": {
        "enableLabelSentimentSelection": true
      }
    }
  },
  "labelMissingGroundTruth": true,
  "modelVersion": "string",
  "name": "string",
  "schedule": "string",
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="datalabelingprojectsevaluationjobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatalabelingV1beta1EvaluationJob](#schemagoogleclouddatalabelingv1beta1evaluationjob)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.evaluations.search

<a id="opIddatalabeling.projects.evaluations.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/evaluations:search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/evaluations:search`

Searches evaluations within a project.

<h3 id="datalabelingprojectsevaluationssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Evaluation search parent (project ID). Format: "projects/ {project_id}"|
|filter|query|string|false|Optional. To search evaluations, you can filter by the following: * evaluation_job.evaluation_job_id (the last part of EvaluationJob.name) * evaluation_job.model_id (the {model_name} portion of EvaluationJob.modelVersion) * evaluation_job.evaluation_job_run_time_start (Minimum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.evaluation_job_run_time_end (Maximum threshold for the evaluationJobRunTime that created the evaluation) * evaluation_job.job_state (EvaluationJob.state) * annotation_spec.display_name (the Evaluation contains a metric for the annotation spec with this displayName) To filter by multiple critiera, use the `AND` operator or the `OR` operator. The following examples shows a string that filters by several critiera: "evaluation_job.evaluation_job_id = {evaluation_job_id} AND evaluation_job.model_id = {model_name} AND evaluation_job.evaluation_job_run_time_start = {timestamp_1} AND evaluation_job.evaluation_job_run_time_end = {timestamp_2} AND annotation_spec.display_name = {display_name}"|
|pageSize|query|integer|false|Optional. Requested page size. Server may return fewer results than requested. Default value is 100.|
|pageToken|query|string|false|Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search request. If you don't specify this field, the API call requests the first page of the search.|
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
  "evaluations": [
    {
      "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
      "config": {
        "boundingBoxEvaluationOptions": {
          "iouThreshold": 0
        }
      },
      "createTime": "string",
      "evaluatedItemCount": "string",
      "evaluationJobRunTime": "string",
      "evaluationMetrics": {
        "classificationMetrics": {
          "confusionMatrix": {
            "row": [
              {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "entries": [
                  {
                    "annotationSpec": {
                      "description": "string",
                      "displayName": "string",
                      "index": 0
                    },
                    "itemCount": 0
                  }
                ]
              }
            ]
          },
          "prCurve": {
            "annotationSpec": {
              "description": "string",
              "displayName": "string",
              "index": 0
            },
            "areaUnderCurve": 0,
            "confidenceMetricsEntries": [
              {
                "confidenceThreshold": 0,
                "f1Score": 0,
                "f1ScoreAt1": 0,
                "f1ScoreAt5": 0,
                "precision": 0,
                "precisionAt1": 0,
                "precisionAt5": 0,
                "recall": 0,
                "recallAt1": 0,
                "recallAt5": 0
              }
            ],
            "meanAveragePrecision": 0
          }
        },
        "objectDetectionMetrics": {
          "prCurve": {
            "annotationSpec": {
              "description": "string",
              "displayName": "string",
              "index": 0
            },
            "areaUnderCurve": 0,
            "confidenceMetricsEntries": [
              {
                "confidenceThreshold": 0,
                "f1Score": 0,
                "f1ScoreAt1": 0,
                "f1ScoreAt5": 0,
                "precision": 0,
                "precisionAt1": 0,
                "precisionAt5": 0,
                "recall": 0,
                "recallAt1": 0,
                "recallAt5": 0
              }
            ],
            "meanAveragePrecision": 0
          }
        }
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datalabelingprojectsevaluationssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse](#schemagoogleclouddatalabelingv1beta1searchevaluationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.datasets.evaluations.exampleComparisons.search

<a id="opIddatalabeling.projects.datasets.evaluations.exampleComparisons.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/exampleComparisons:search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pageSize": 0,
    "pageToken": "string"
  }'
```

`POST /v1beta1/{parent}/exampleComparisons:search`

Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.

> Body parameter

```json
{
  "pageSize": 0,
  "pageToken": "string"
}
```

<h3 id="datalabelingprojectsdatasetsevaluationsexamplecomparisonssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the Evaluation resource to search for example comparisons from. Format: "projects/{project_id}/datasets/{dataset_id}/evaluations/ {evaluation_id}"|
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
|body|body|[GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest](#schemagoogleclouddatalabelingv1beta1searchexamplecomparisonsrequest)|false|none|
|» pageSize|body|integer(int32)|false|Optional. Requested page size. Server may return fewer results than requested. Default value is 100.|
|» pageToken|body|string|false|Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search rquest. If you don't specify this field, the API call requests the first page of the search.|

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
  "exampleComparisons": [
    {
      "groundTruthExample": {
        "annotations": [
          {
            "annotationMetadata": {
              "operatorMetadata": {
                "comments": [
                  "string"
                ],
                "labelVotes": 0,
                "score": 0,
                "totalVotes": 0
              }
            },
            "annotationSentiment": "ANNOTATION_SENTIMENT_UNSPECIFIED",
            "annotationSource": "ANNOTATION_SOURCE_UNSPECIFIED",
            "annotationValue": {
              "imageBoundingPolyAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "normalizedBoundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                }
              },
              "imageClassificationAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                }
              },
              "imagePolylineAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "normalizedPolyline": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "polyline": {
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                }
              },
              "imageSegmentationAnnotation": {
                "annotationColors": {
                  "property1": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  },
                  "property2": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  }
                },
                "imageBytes": "string",
                "mimeType": "string"
              },
              "textClassificationAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                }
              },
              "textEntityExtractionAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "sequentialSegment": {
                  "end": 0,
                  "start": 0
                }
              },
              "videoClassificationAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "timeSegment": {
                  "endTimeOffset": "string",
                  "startTimeOffset": "string"
                }
              },
              "videoEventAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "timeSegment": {
                  "endTimeOffset": "string",
                  "startTimeOffset": "string"
                }
              },
              "videoObjectTrackingAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "objectTrackingFrames": [
                  {
                    "boundingPoly": {
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "normalizedBoundingPoly": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "timeOffset": "string"
                  }
                ],
                "timeSegment": {
                  "endTimeOffset": "string",
                  "startTimeOffset": "string"
                }
              }
            },
            "name": "string"
          }
        ],
        "imagePayload": {
          "imageThumbnail": "string",
          "imageUri": "string",
          "mimeType": "string",
          "signedUri": "string"
        },
        "name": "string",
        "textPayload": {
          "textContent": "string"
        },
        "videoPayload": {
          "frameRate": 0,
          "mimeType": "string",
          "signedUri": "string",
          "videoThumbnails": [
            {
              "thumbnail": "string",
              "timeOffset": "string"
            }
          ],
          "videoUri": "string"
        }
      },
      "modelCreatedExamples": [
        {
          "annotations": [
            {
              "annotationMetadata": {
                "operatorMetadata": {
                  "comments": [
                    "string"
                  ],
                  "labelVotes": 0,
                  "score": 0,
                  "totalVotes": 0
                }
              },
              "annotationSentiment": "ANNOTATION_SENTIMENT_UNSPECIFIED",
              "annotationSource": "ANNOTATION_SOURCE_UNSPECIFIED",
              "annotationValue": {
                "imageBoundingPolyAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  },
                  "boundingPoly": {
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "normalizedBoundingPoly": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  }
                },
                "imageClassificationAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  }
                },
                "imagePolylineAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  },
                  "normalizedPolyline": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "polyline": {
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  }
                },
                "imageSegmentationAnnotation": {
                  "annotationColors": {
                    "property1": {
                      "description": "string",
                      "displayName": "string",
                      "index": 0
                    },
                    "property2": {
                      "description": "string",
                      "displayName": "string",
                      "index": 0
                    }
                  },
                  "imageBytes": "string",
                  "mimeType": "string"
                },
                "textClassificationAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  }
                },
                "textEntityExtractionAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  },
                  "sequentialSegment": {
                    "end": 0,
                    "start": 0
                  }
                },
                "videoClassificationAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  },
                  "timeSegment": {
                    "endTimeOffset": "string",
                    "startTimeOffset": "string"
                  }
                },
                "videoEventAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  },
                  "timeSegment": {
                    "endTimeOffset": "string",
                    "startTimeOffset": "string"
                  }
                },
                "videoObjectTrackingAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  },
                  "objectTrackingFrames": [
                    {
                      "boundingPoly": {
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "normalizedBoundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "timeOffset": "string"
                    }
                  ],
                  "timeSegment": {
                    "endTimeOffset": "string",
                    "startTimeOffset": "string"
                  }
                }
              },
              "name": "string"
            }
          ],
          "imagePayload": {
            "imageThumbnail": "string",
            "imageUri": "string",
            "mimeType": "string",
            "signedUri": "string"
          },
          "name": "string",
          "textPayload": {
            "textContent": "string"
          },
          "videoPayload": {
            "frameRate": 0,
            "mimeType": "string",
            "signedUri": "string",
            "videoThumbnails": [
              {
                "thumbnail": "string",
                "timeOffset": "string"
              }
            ],
            "videoUri": "string"
          }
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datalabelingprojectsdatasetsevaluationsexamplecomparisonssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse](#schemagoogleclouddatalabelingv1beta1searchexamplecomparisonsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.datasets.annotatedDatasets.examples.list

<a id="opIddatalabeling.projects.datasets.annotatedDatasets.examples.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/examples \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/examples`

Lists examples in an annotated dataset. Pagination is supported.

<h3 id="datalabelingprojectsdatasetsannotateddatasetsexampleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Example resource parent.|
|filter|query|string|false|Optional. An expression for filtering Examples. For annotated datasets that have annotation spec set, filter by annotation_spec.display_name is supported. Format "annotation_spec.display_name = {display_name}"|
|pageSize|query|integer|false|Optional. Requested page size. Server may return fewer results than requested. Default value is 100.|
|pageToken|query|string|false|Optional. A token identifying a page of results for the server to return. Typically obtained by ListExamplesResponse.next_page_token of the previous [DataLabelingService.ListExamples] call. Return first page if empty.|
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
  "examples": [
    {
      "annotations": [
        {
          "annotationMetadata": {
            "operatorMetadata": {
              "comments": [
                "string"
              ],
              "labelVotes": 0,
              "score": 0,
              "totalVotes": 0
            }
          },
          "annotationSentiment": "ANNOTATION_SENTIMENT_UNSPECIFIED",
          "annotationSource": "ANNOTATION_SOURCE_UNSPECIFIED",
          "annotationValue": {
            "imageBoundingPolyAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "normalizedBoundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              }
            },
            "imageClassificationAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              }
            },
            "imagePolylineAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "normalizedPolyline": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "polyline": {
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              }
            },
            "imageSegmentationAnnotation": {
              "annotationColors": {
                "property1": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "property2": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                }
              },
              "imageBytes": "string",
              "mimeType": "string"
            },
            "textClassificationAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              }
            },
            "textEntityExtractionAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "sequentialSegment": {
                "end": 0,
                "start": 0
              }
            },
            "videoClassificationAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "timeSegment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            },
            "videoEventAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "timeSegment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            },
            "videoObjectTrackingAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "objectTrackingFrames": [
                {
                  "boundingPoly": {
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "normalizedBoundingPoly": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "timeOffset": "string"
                }
              ],
              "timeSegment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          },
          "name": "string"
        }
      ],
      "imagePayload": {
        "imageThumbnail": "string",
        "imageUri": "string",
        "mimeType": "string",
        "signedUri": "string"
      },
      "name": "string",
      "textPayload": {
        "textContent": "string"
      },
      "videoPayload": {
        "frameRate": 0,
        "mimeType": "string",
        "signedUri": "string",
        "videoThumbnails": [
          {
            "thumbnail": "string",
            "timeOffset": "string"
          }
        ],
        "videoUri": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datalabelingprojectsdatasetsannotateddatasetsexampleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatalabelingV1beta1ListExamplesResponse](#schemagoogleclouddatalabelingv1beta1listexamplesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.list

<a id="opIddatalabeling.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/feedbackMessages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/feedbackMessages`

List FeedbackMessages with pagination.

<h3 id="datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadsfeedbackmessageslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. FeedbackMessage resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}"|
|pageSize|query|integer|false|Optional. Requested page size. Server may return fewer results than requested. Default value is 100.|
|pageToken|query|string|false|Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackMessages.next_page_token of the previous [DataLabelingService.ListFeedbackMessages] call. Return first page if empty.|
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
  "feedbackMessages": [
    {
      "body": "string",
      "createTime": "string",
      "image": "string",
      "name": "string",
      "operatorFeedbackMetadata": {},
      "requesterFeedbackMetadata": {}
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadsfeedbackmessageslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse](#schemagoogleclouddatalabelingv1beta1listfeedbackmessagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.create

<a id="opIddatalabeling.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/feedbackMessages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "body": "string",
    "createTime": "string",
    "image": "string",
    "name": "string",
    "operatorFeedbackMetadata": {},
    "requesterFeedbackMetadata": {}
  }'
```

`POST /v1beta1/{parent}/feedbackMessages`

Create a FeedbackMessage object.

> Body parameter

```json
{
  "body": "string",
  "createTime": "string",
  "image": "string",
  "name": "string",
  "operatorFeedbackMetadata": {},
  "requesterFeedbackMetadata": {}
}
```

<h3 id="datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadsfeedbackmessagescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. FeedbackMessage resource parent, format: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}.|
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
|body|body|[GoogleCloudDatalabelingV1beta1FeedbackMessage](#schemagoogleclouddatalabelingv1beta1feedbackmessage)|false|none|
|» body|body|string|false|String content of the feedback. Maximum of 10000 characters.|
|» createTime|body|string(google-datetime)|false|Create time.|
|» image|body|string(byte)|false|The image storing this feedback if the feedback is an image representing operator's comments.|
|» name|body|string|false|Name of the feedback message in a feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessage/{feedback_message_id}'|
|» operatorFeedbackMetadata|body|[GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata](#schemagoogleclouddatalabelingv1beta1operatorfeedbackmetadata)|false|Metadata describing the feedback from the operator.|
|» requesterFeedbackMetadata|body|[GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata](#schemagoogleclouddatalabelingv1beta1requesterfeedbackmetadata)|false|Metadata describing the feedback from the labeling task requester.|

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

<h3 id="datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadsfeedbackmessagescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.datasets.annotatedDatasets.feedbackThreads.list

<a id="opIddatalabeling.projects.datasets.annotatedDatasets.feedbackThreads.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/feedbackThreads \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/feedbackThreads`

List FeedbackThreads with pagination.

<h3 id="datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. FeedbackThread resource parent. Format: "projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}"|
|pageSize|query|integer|false|Optional. Requested page size. Server may return fewer results than requested. Default value is 100.|
|pageToken|query|string|false|Optional. A token identifying a page of results for the server to return. Typically obtained by ListFeedbackThreads.next_page_token of the previous [DataLabelingService.ListFeedbackThreads] call. Return first page if empty.|
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
  "feedbackThreads": [
    {
      "feedbackThreadMetadata": {
        "createTime": "string",
        "lastUpdateTime": "string",
        "status": "FEEDBACK_THREAD_STATUS_UNSPECIFIED",
        "thumbnail": "string"
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datalabelingprojectsdatasetsannotateddatasetsfeedbackthreadslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse](#schemagoogleclouddatalabelingv1beta1listfeedbackthreadsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.datasets.image.label

<a id="opIddatalabeling.projects.datasets.image.label"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/image:label \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    },
    "boundingPolyConfig": {
      "annotationSpecSet": "string",
      "instructionMessage": "string"
    },
    "feature": "FEATURE_UNSPECIFIED",
    "imageClassificationConfig": {
      "allowMultiLabel": true,
      "annotationSpecSet": "string",
      "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
    },
    "polylineConfig": {
      "annotationSpecSet": "string",
      "instructionMessage": "string"
    },
    "segmentationConfig": {
      "annotationSpecSet": "string",
      "instructionMessage": "string"
    }
  }'
```

`POST /v1beta1/{parent}/image:label`

Starts a labeling task for image. The type of image labeling task is configured by feature in the request.

> Body parameter

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  },
  "boundingPolyConfig": {
    "annotationSpecSet": "string",
    "instructionMessage": "string"
  },
  "feature": "FEATURE_UNSPECIFIED",
  "imageClassificationConfig": {
    "allowMultiLabel": true,
    "annotationSpecSet": "string",
    "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
  },
  "polylineConfig": {
    "annotationSpecSet": "string",
    "instructionMessage": "string"
  },
  "segmentationConfig": {
    "annotationSpecSet": "string",
    "instructionMessage": "string"
  }
}
```

<h3 id="datalabelingprojectsdatasetsimagelabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id}|
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
|body|body|[GoogleCloudDatalabelingV1beta1LabelImageRequest](#schemagoogleclouddatalabelingv1beta1labelimagerequest)|false|none|
|» basicConfig|body|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|Required. Basic human annotation config.|
|» boundingPolyConfig|body|[GoogleCloudDatalabelingV1beta1BoundingPolyConfig](#schemagoogleclouddatalabelingv1beta1boundingpolyconfig)|false|Configuration for bounding box and bounding poly task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.|
|» feature|body|string|false|Required. The type of image labeling task.|
|» imageClassificationConfig|body|[GoogleCloudDatalabelingV1beta1ImageClassificationConfig](#schemagoogleclouddatalabelingv1beta1imageclassificationconfig)|false|Configuration for image classification task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.|
|» polylineConfig|body|[GoogleCloudDatalabelingV1beta1PolylineConfig](#schemagoogleclouddatalabelingv1beta1polylineconfig)|false|Configuration for polyline task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.|
|» segmentationConfig|body|[GoogleCloudDatalabelingV1beta1SegmentationConfig](#schemagoogleclouddatalabelingv1beta1segmentationconfig)|false|Configuration for segmentation task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» feature|FEATURE_UNSPECIFIED|
|» feature|CLASSIFICATION|
|» feature|BOUNDING_BOX|
|» feature|ORIENTED_BOUNDING_BOX|
|» feature|BOUNDING_POLY|
|» feature|POLYLINE|
|» feature|SEGMENTATION|

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

<h3 id="datalabelingprojectsdatasetsimagelabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.instructions.list

<a id="opIddatalabeling.projects.instructions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/instructions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/instructions`

Lists instructions for a project. Pagination is supported.

<h3 id="datalabelingprojectsinstructionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Instruction resource parent, format: projects/{project_id}|
|filter|query|string|false|Optional. Filter is not supported at this moment.|
|pageSize|query|integer|false|Optional. Requested page size. Server may return fewer results than requested. Default value is 100.|
|pageToken|query|string|false|Optional. A token identifying a page of results for the server to return. Typically obtained by ListInstructionsResponse.next_page_token of the previous [DataLabelingService.ListInstructions] call. Return first page if empty.|
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
  "instructions": [
    {
      "blockingResources": [
        "string"
      ],
      "createTime": "string",
      "csvInstruction": {
        "gcsFileUri": "string"
      },
      "dataType": "DATA_TYPE_UNSPECIFIED",
      "description": "string",
      "displayName": "string",
      "name": "string",
      "pdfInstruction": {
        "gcsFileUri": "string"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datalabelingprojectsinstructionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatalabelingV1beta1ListInstructionsResponse](#schemagoogleclouddatalabelingv1beta1listinstructionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.instructions.create

<a id="opIddatalabeling.projects.instructions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/instructions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "instruction": {
      "blockingResources": [
        "string"
      ],
      "createTime": "string",
      "csvInstruction": {
        "gcsFileUri": "string"
      },
      "dataType": "DATA_TYPE_UNSPECIFIED",
      "description": "string",
      "displayName": "string",
      "name": "string",
      "pdfInstruction": {
        "gcsFileUri": "string"
      },
      "updateTime": "string"
    }
  }'
```

`POST /v1beta1/{parent}/instructions`

Creates an instruction for how data should be labeled.

> Body parameter

```json
{
  "instruction": {
    "blockingResources": [
      "string"
    ],
    "createTime": "string",
    "csvInstruction": {
      "gcsFileUri": "string"
    },
    "dataType": "DATA_TYPE_UNSPECIFIED",
    "description": "string",
    "displayName": "string",
    "name": "string",
    "pdfInstruction": {
      "gcsFileUri": "string"
    },
    "updateTime": "string"
  }
}
```

<h3 id="datalabelingprojectsinstructionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Instruction resource parent, format: projects/{project_id}|
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
|body|body|[GoogleCloudDatalabelingV1beta1CreateInstructionRequest](#schemagoogleclouddatalabelingv1beta1createinstructionrequest)|false|none|
|» instruction|body|[GoogleCloudDatalabelingV1beta1Instruction](#schemagoogleclouddatalabelingv1beta1instruction)|false|Required. Instruction of how to perform the labeling task.|

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

<h3 id="datalabelingprojectsinstructionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.datasets.text.label

<a id="opIddatalabeling.projects.datasets.text.label"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/text:label \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    },
    "feature": "FEATURE_UNSPECIFIED",
    "textClassificationConfig": {
      "allowMultiLabel": true,
      "annotationSpecSet": "string",
      "sentimentConfig": {
        "enableLabelSentimentSelection": true
      }
    },
    "textEntityExtractionConfig": {
      "annotationSpecSet": "string"
    }
  }'
```

`POST /v1beta1/{parent}/text:label`

Starts a labeling task for text. The type of text labeling task is configured by feature in the request.

> Body parameter

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  },
  "feature": "FEATURE_UNSPECIFIED",
  "textClassificationConfig": {
    "allowMultiLabel": true,
    "annotationSpecSet": "string",
    "sentimentConfig": {
      "enableLabelSentimentSelection": true
    }
  },
  "textEntityExtractionConfig": {
    "annotationSpecSet": "string"
  }
}
```

<h3 id="datalabelingprojectsdatasetstextlabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the data set to request labeling task, format: projects/{project_id}/datasets/{dataset_id}|
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
|body|body|[GoogleCloudDatalabelingV1beta1LabelTextRequest](#schemagoogleclouddatalabelingv1beta1labeltextrequest)|false|none|
|» basicConfig|body|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|Required. Basic human annotation config.|
|» feature|body|string|false|Required. The type of text labeling task.|
|» textClassificationConfig|body|[GoogleCloudDatalabelingV1beta1TextClassificationConfig](#schemagoogleclouddatalabelingv1beta1textclassificationconfig)|false|Configuration for text classification task. One of text_classification_config and text_entity_extraction_config is required.|
|» textEntityExtractionConfig|body|[GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig](#schemagoogleclouddatalabelingv1beta1textentityextractionconfig)|false|Configuration for entity extraction task. One of text_classification_config and text_entity_extraction_config is required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» feature|FEATURE_UNSPECIFIED|
|» feature|TEXT_CLASSIFICATION|
|» feature|TEXT_ENTITY_EXTRACTION|

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

<h3 id="datalabelingprojectsdatasetstextlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datalabeling.projects.datasets.video.label

<a id="opIddatalabeling.projects.datasets.video.label"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/video:label \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    },
    "eventConfig": {
      "annotationSpecSets": [
        "string"
      ],
      "clipLength": 0,
      "overlapLength": 0
    },
    "feature": "FEATURE_UNSPECIFIED",
    "objectDetectionConfig": {
      "annotationSpecSet": "string",
      "extractionFrameRate": 0
    },
    "objectTrackingConfig": {
      "annotationSpecSet": "string",
      "clipLength": 0,
      "overlapLength": 0
    },
    "videoClassificationConfig": {
      "annotationSpecSetConfigs": [
        {
          "allowMultiLabel": true,
          "annotationSpecSet": "string"
        }
      ],
      "applyShotDetection": true
    }
  }'
```

`POST /v1beta1/{parent}/video:label`

Starts a labeling task for video. The type of video labeling task is configured by feature in the request.

> Body parameter

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  },
  "eventConfig": {
    "annotationSpecSets": [
      "string"
    ],
    "clipLength": 0,
    "overlapLength": 0
  },
  "feature": "FEATURE_UNSPECIFIED",
  "objectDetectionConfig": {
    "annotationSpecSet": "string",
    "extractionFrameRate": 0
  },
  "objectTrackingConfig": {
    "annotationSpecSet": "string",
    "clipLength": 0,
    "overlapLength": 0
  },
  "videoClassificationConfig": {
    "annotationSpecSetConfigs": [
      {
        "allowMultiLabel": true,
        "annotationSpecSet": "string"
      }
    ],
    "applyShotDetection": true
  }
}
```

<h3 id="datalabelingprojectsdatasetsvideolabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the dataset to request labeling task, format: projects/{project_id}/datasets/{dataset_id}|
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
|body|body|[GoogleCloudDatalabelingV1beta1LabelVideoRequest](#schemagoogleclouddatalabelingv1beta1labelvideorequest)|false|none|
|» basicConfig|body|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|Required. Basic human annotation config.|
|» eventConfig|body|[GoogleCloudDatalabelingV1beta1EventConfig](#schemagoogleclouddatalabelingv1beta1eventconfig)|false|Configuration for video event task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.|
|» feature|body|string|false|Required. The type of video labeling task.|
|» objectDetectionConfig|body|[GoogleCloudDatalabelingV1beta1ObjectDetectionConfig](#schemagoogleclouddatalabelingv1beta1objectdetectionconfig)|false|Configuration for video object detection task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.|
|» objectTrackingConfig|body|[GoogleCloudDatalabelingV1beta1ObjectTrackingConfig](#schemagoogleclouddatalabelingv1beta1objecttrackingconfig)|false|Configuration for video object tracking task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.|
|» videoClassificationConfig|body|[GoogleCloudDatalabelingV1beta1VideoClassificationConfig](#schemagoogleclouddatalabelingv1beta1videoclassificationconfig)|false|Configuration for video classification task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» feature|FEATURE_UNSPECIFIED|
|» feature|CLASSIFICATION|
|» feature|OBJECT_DETECTION|
|» feature|OBJECT_TRACKING|
|» feature|EVENT|

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

<h3 id="datalabelingprojectsdatasetsvideolabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata">GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1createinstructionmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1CreateInstructionMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1createinstructionmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1createinstructionmetadata"></a>

```json
{
  "createTime": "string",
  "instruction": "string",
  "partialFailures": [
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
  ]
}
```

Metadata of a CreateInstruction operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Timestamp when create instruction request was created.|
|instruction|string|false|none|The name of the created Instruction. projects/{project_id}/instructions/{instruction_id}|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1ExportDataOperationMetadata">GoogleCloudDatalabelingV1alpha1ExportDataOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1exportdataoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1ExportDataOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1exportdataoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1exportdataoperationmetadata"></a>

```json
{
  "annotatedDataset": "string",
  "createTime": "string",
  "dataset": "string",
  "partialFailures": [
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
  ]
}
```

Metadata of an ExportData operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDataset|string|false|none|Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".|
|createTime|string(google-datetime)|false|none|Output only. Timestamp when export dataset request was created.|
|dataset|string|false|none|Output only. The name of dataset to be exported. "projects/*/datasets/*"|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse">GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1exportdataoperationresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1exportdataoperationresponse"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1exportdataoperationresponse"></a>

```json
{
  "annotatedDataset": "string",
  "dataset": "string",
  "exportCount": 0,
  "labelStats": {
    "exampleCount": {
      "property1": "string",
      "property2": "string"
    }
  },
  "outputConfig": {
    "gcsDestination": {
      "mimeType": "string",
      "outputUri": "string"
    },
    "gcsFolderDestination": {
      "outputFolderUri": "string"
    }
  },
  "totalCount": 0
}
```

Response used for ExportDataset longrunning operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDataset|string|false|none|Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".|
|dataset|string|false|none|Ouptut only. The name of dataset. "projects/*/datasets/*"|
|exportCount|integer(int32)|false|none|Output only. Number of examples exported successfully.|
|labelStats|[GoogleCloudDatalabelingV1alpha1LabelStats](#schemagoogleclouddatalabelingv1alpha1labelstats)|false|none|Output only. Statistic infos of labels in the exported dataset.|
|outputConfig|[GoogleCloudDatalabelingV1alpha1OutputConfig](#schemagoogleclouddatalabelingv1alpha1outputconfig)|false|none|Output only. output_config in the ExportData request.|
|totalCount|integer(int32)|false|none|Output only. Total number of examples requested to export|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1GcsDestination">GoogleCloudDatalabelingV1alpha1GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1gcsdestination"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1GcsDestination"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1gcsdestination"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1gcsdestination"></a>

```json
{
  "mimeType": "string",
  "outputUri": "string"
}
```

Export destination of the data.Only gcs path is allowed in output_uri.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mimeType|string|false|none|Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.|
|outputUri|string|false|none|Required. The output uri of destination file.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1GcsFolderDestination">GoogleCloudDatalabelingV1alpha1GcsFolderDestination</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1gcsfolderdestination"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1GcsFolderDestination"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1gcsfolderdestination"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1gcsfolderdestination"></a>

```json
{
  "outputFolderUri": "string"
}
```

Export folder destination of the data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputFolderUri|string|false|none|Required. Cloud Storage directory to export data to.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig">GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1humanannotationconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1humanannotationconfig"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1humanannotationconfig"></a>

```json
{
  "annotatedDatasetDescription": "string",
  "annotatedDatasetDisplayName": "string",
  "contributorEmails": [
    "string"
  ],
  "instruction": "string",
  "labelGroup": "string",
  "languageCode": "string",
  "questionDuration": "string",
  "replicaCount": 0,
  "userEmailAddress": "string"
}
```

Configuration for how human labeling task should be done.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDatasetDescription|string|false|none|Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.|
|annotatedDatasetDisplayName|string|false|none|Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .|
|contributorEmails|[string]|false|none|Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/|
|instruction|string|false|none|Required. Instruction resource name.|
|labelGroup|string|false|none|Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`.|
|languageCode|string|false|none|Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.|
|questionDuration|string(google-duration)|false|none|Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.|
|replicaCount|integer(int32)|false|none|Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.|
|userEmailAddress|string|false|none|Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1ImportDataOperationMetadata">GoogleCloudDatalabelingV1alpha1ImportDataOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1importdataoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1ImportDataOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1importdataoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1importdataoperationmetadata"></a>

```json
{
  "createTime": "string",
  "dataset": "string",
  "partialFailures": [
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
  ]
}
```

Metadata of an ImportData operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. Timestamp when import dataset request was created.|
|dataset|string|false|none|Output only. The name of imported dataset. "projects/*/datasets/*"|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1ImportDataOperationResponse">GoogleCloudDatalabelingV1alpha1ImportDataOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1importdataoperationresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1ImportDataOperationResponse"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1importdataoperationresponse"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1importdataoperationresponse"></a>

```json
{
  "dataset": "string",
  "importCount": 0,
  "totalCount": 0
}
```

Response used for ImportData longrunning operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|string|false|none|Ouptut only. The name of imported dataset.|
|importCount|integer(int32)|false|none|Output only. Number of examples imported successfully.|
|totalCount|integer(int32)|false|none|Output only. Total number of examples requested to import|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata">GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1labelimageboundingboxoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1labelimageboundingboxoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1labelimageboundingboxoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelImageBoundingBox operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata">GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1labelimageboundingpolyoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1labelimageboundingpolyoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1labelimageboundingpolyoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of LabelImageBoundingPoly operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata">GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1labelimageclassificationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1labelimageclassificationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1labelimageclassificationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Metadata of a LabelImageClassification operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata">GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1labelimageorientedboundingboxoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1labelimageorientedboundingboxoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1labelimageorientedboundingboxoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelImageOrientedBoundingBox operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1alpha1humanannotationconfig)|false|none|Basic human annotation config.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata">GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1labelimagepolylineoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1labelimagepolylineoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1labelimagepolylineoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of LabelImagePolyline operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata">GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1labelimagesegmentationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1labelimagesegmentationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1labelimagesegmentationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelImageSegmentation operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1alpha1humanannotationconfig)|false|none|Basic human annotation config.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1LabelOperationMetadata">GoogleCloudDatalabelingV1alpha1LabelOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1labeloperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1LabelOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1labeloperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1labeloperationmetadata"></a>

```json
{
  "annotatedDataset": "string",
  "createTime": "string",
  "dataset": "string",
  "imageBoundingBoxDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageBoundingPolyDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageClassificationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageOrientedBoundingBoxDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imagePolylineDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageSegmentationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "partialFailures": [
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
  "progressPercent": 0,
  "textClassificationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "textEntityExtractionDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoClassificationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoEventDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoObjectDetectionDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoObjectTrackingDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  }
}
```

Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDataset|string|false|none|Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".|
|createTime|string(google-datetime)|false|none|Output only. Timestamp when labeling request was created.|
|dataset|string|false|none|Output only. The name of dataset to be labeled. "projects/*/datasets/*"|
|imageBoundingBoxDetails|[GoogleCloudDatalabelingV1alpha1LabelImageBoundingBoxOperationMetadata](#schemagoogleclouddatalabelingv1alpha1labelimageboundingboxoperationmetadata)|false|none|Details of label image bounding box operation.|
|imageBoundingPolyDetails|[GoogleCloudDatalabelingV1alpha1LabelImageBoundingPolyOperationMetadata](#schemagoogleclouddatalabelingv1alpha1labelimageboundingpolyoperationmetadata)|false|none|Details of label image bounding poly operation.|
|imageClassificationDetails|[GoogleCloudDatalabelingV1alpha1LabelImageClassificationOperationMetadata](#schemagoogleclouddatalabelingv1alpha1labelimageclassificationoperationmetadata)|false|none|Details of label image classification operation.|
|imageOrientedBoundingBoxDetails|[GoogleCloudDatalabelingV1alpha1LabelImageOrientedBoundingBoxOperationMetadata](#schemagoogleclouddatalabelingv1alpha1labelimageorientedboundingboxoperationmetadata)|false|none|Details of label image oriented bounding box operation.|
|imagePolylineDetails|[GoogleCloudDatalabelingV1alpha1LabelImagePolylineOperationMetadata](#schemagoogleclouddatalabelingv1alpha1labelimagepolylineoperationmetadata)|false|none|Details of label image polyline operation.|
|imageSegmentationDetails|[GoogleCloudDatalabelingV1alpha1LabelImageSegmentationOperationMetadata](#schemagoogleclouddatalabelingv1alpha1labelimagesegmentationoperationmetadata)|false|none|Details of label image segmentation operation.|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|
|progressPercent|integer(int32)|false|none|Output only. Progress of label operation. Range: [0, 100].|
|textClassificationDetails|[GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata](#schemagoogleclouddatalabelingv1alpha1labeltextclassificationoperationmetadata)|false|none|Details of label text classification operation.|
|textEntityExtractionDetails|[GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata](#schemagoogleclouddatalabelingv1alpha1labeltextentityextractionoperationmetadata)|false|none|Details of label text entity extraction operation.|
|videoClassificationDetails|[GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata](#schemagoogleclouddatalabelingv1alpha1labelvideoclassificationoperationmetadata)|false|none|Details of label video classification operation.|
|videoEventDetails|[GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata](#schemagoogleclouddatalabelingv1alpha1labelvideoeventoperationmetadata)|false|none|Details of label video event operation.|
|videoObjectDetectionDetails|[GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata](#schemagoogleclouddatalabelingv1alpha1labelvideoobjectdetectionoperationmetadata)|false|none|Details of label video object detection operation.|
|videoObjectTrackingDetails|[GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata](#schemagoogleclouddatalabelingv1alpha1labelvideoobjecttrackingoperationmetadata)|false|none|Details of label video object tracking operation.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1LabelStats">GoogleCloudDatalabelingV1alpha1LabelStats</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1labelstats"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1LabelStats"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1labelstats"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1labelstats"></a>

```json
{
  "exampleCount": {
    "property1": "string",
    "property2": "string"
  }
}
```

Statistics about annotation specs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exampleCount|object|false|none|Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata">GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1labeltextclassificationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1LabelTextClassificationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1labeltextclassificationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1labeltextclassificationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelTextClassification operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata">GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1labeltextentityextractionoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1LabelTextEntityExtractionOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1labeltextentityextractionoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1labeltextentityextractionoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelTextEntityExtraction operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata">GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1labelvideoclassificationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1LabelVideoClassificationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1labelvideoclassificationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1labelvideoclassificationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoClassification operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata">GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1labelvideoeventoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1LabelVideoEventOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1labelvideoeventoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1labelvideoeventoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoEvent operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata">GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1labelvideoobjectdetectionoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1LabelVideoObjectDetectionOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1labelvideoobjectdetectionoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1labelvideoobjectdetectionoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoObjectDetection operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata">GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1labelvideoobjecttrackingoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1LabelVideoObjectTrackingOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1labelvideoobjecttrackingoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1labelvideoobjecttrackingoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoObjectTracking operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1alpha1OutputConfig">GoogleCloudDatalabelingV1alpha1OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1alpha1outputconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1alpha1OutputConfig"></a>
<a id="tocSgoogleclouddatalabelingv1alpha1outputconfig"></a>
<a id="tocsgoogleclouddatalabelingv1alpha1outputconfig"></a>

```json
{
  "gcsDestination": {
    "mimeType": "string",
    "outputUri": "string"
  },
  "gcsFolderDestination": {
    "outputFolderUri": "string"
  }
}
```

The configuration of output data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsDestination|[GoogleCloudDatalabelingV1alpha1GcsDestination](#schemagoogleclouddatalabelingv1alpha1gcsdestination)|false|none|Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation.|
|gcsFolderDestination|[GoogleCloudDatalabelingV1alpha1GcsFolderDestination](#schemagoogleclouddatalabelingv1alpha1gcsfolderdestination)|false|none|Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1AnnotatedDataset">GoogleCloudDatalabelingV1beta1AnnotatedDataset</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1annotateddataset"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1AnnotatedDataset"></a>
<a id="tocSgoogleclouddatalabelingv1beta1annotateddataset"></a>
<a id="tocsgoogleclouddatalabelingv1beta1annotateddataset"></a>

```json
{
  "annotationSource": "ANNOTATION_SOURCE_UNSPECIFIED",
  "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
  "blockingResources": [
    "string"
  ],
  "completedExampleCount": "string",
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "exampleCount": "string",
  "labelStats": {
    "exampleCount": {
      "property1": "string",
      "property2": "string"
    }
  },
  "metadata": {
    "boundingPolyConfig": {
      "annotationSpecSet": "string",
      "instructionMessage": "string"
    },
    "eventConfig": {
      "annotationSpecSets": [
        "string"
      ],
      "clipLength": 0,
      "overlapLength": 0
    },
    "humanAnnotationConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    },
    "imageClassificationConfig": {
      "allowMultiLabel": true,
      "annotationSpecSet": "string",
      "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
    },
    "objectDetectionConfig": {
      "annotationSpecSet": "string",
      "extractionFrameRate": 0
    },
    "objectTrackingConfig": {
      "annotationSpecSet": "string",
      "clipLength": 0,
      "overlapLength": 0
    },
    "polylineConfig": {
      "annotationSpecSet": "string",
      "instructionMessage": "string"
    },
    "segmentationConfig": {
      "annotationSpecSet": "string",
      "instructionMessage": "string"
    },
    "textClassificationConfig": {
      "allowMultiLabel": true,
      "annotationSpecSet": "string",
      "sentimentConfig": {
        "enableLabelSentimentSelection": true
      }
    },
    "textEntityExtractionConfig": {
      "annotationSpecSet": "string"
    },
    "videoClassificationConfig": {
      "annotationSpecSetConfigs": [
        {
          "allowMultiLabel": true,
          "annotationSpecSet": "string"
        }
      ],
      "applyShotDetection": true
    }
  },
  "name": "string"
}
```

AnnotatedDataset is a set holding annotations for data in a Dataset. Each labeling task will generate an AnnotatedDataset under the Dataset that the task is requested for.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSource|string|false|none|Output only. Source of the annotation.|
|annotationType|string|false|none|Output only. Type of the annotation. It is specified when starting labeling task.|
|blockingResources|[string]|false|none|Output only. The names of any related resources that are blocking changes to the annotated dataset.|
|completedExampleCount|string(int64)|false|none|Output only. Number of examples that have annotation in the annotated dataset.|
|createTime|string(google-datetime)|false|none|Output only. Time the AnnotatedDataset was created.|
|description|string|false|none|Output only. The description of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 10000 characters.|
|displayName|string|false|none|Output only. The display name of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 64 characters.|
|exampleCount|string(int64)|false|none|Output only. Number of examples in the annotated dataset.|
|labelStats|[GoogleCloudDatalabelingV1beta1LabelStats](#schemagoogleclouddatalabelingv1beta1labelstats)|false|none|Output only. Per label statistics.|
|metadata|[GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata](#schemagoogleclouddatalabelingv1beta1annotateddatasetmetadata)|false|none|Output only. Additional information about AnnotatedDataset.|
|name|string|false|none|Output only. AnnotatedDataset resource name in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}|

#### Enumerated Values

|Property|Value|
|---|---|
|annotationSource|ANNOTATION_SOURCE_UNSPECIFIED|
|annotationSource|OPERATOR|
|annotationType|ANNOTATION_TYPE_UNSPECIFIED|
|annotationType|IMAGE_CLASSIFICATION_ANNOTATION|
|annotationType|IMAGE_BOUNDING_BOX_ANNOTATION|
|annotationType|IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION|
|annotationType|IMAGE_BOUNDING_POLY_ANNOTATION|
|annotationType|IMAGE_POLYLINE_ANNOTATION|
|annotationType|IMAGE_SEGMENTATION_ANNOTATION|
|annotationType|VIDEO_SHOTS_CLASSIFICATION_ANNOTATION|
|annotationType|VIDEO_OBJECT_TRACKING_ANNOTATION|
|annotationType|VIDEO_OBJECT_DETECTION_ANNOTATION|
|annotationType|VIDEO_EVENT_ANNOTATION|
|annotationType|TEXT_CLASSIFICATION_ANNOTATION|
|annotationType|TEXT_ENTITY_EXTRACTION_ANNOTATION|
|annotationType|GENERAL_CLASSIFICATION_ANNOTATION|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata">GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1annotateddatasetmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1annotateddatasetmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1annotateddatasetmetadata"></a>

```json
{
  "boundingPolyConfig": {
    "annotationSpecSet": "string",
    "instructionMessage": "string"
  },
  "eventConfig": {
    "annotationSpecSets": [
      "string"
    ],
    "clipLength": 0,
    "overlapLength": 0
  },
  "humanAnnotationConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  },
  "imageClassificationConfig": {
    "allowMultiLabel": true,
    "annotationSpecSet": "string",
    "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
  },
  "objectDetectionConfig": {
    "annotationSpecSet": "string",
    "extractionFrameRate": 0
  },
  "objectTrackingConfig": {
    "annotationSpecSet": "string",
    "clipLength": 0,
    "overlapLength": 0
  },
  "polylineConfig": {
    "annotationSpecSet": "string",
    "instructionMessage": "string"
  },
  "segmentationConfig": {
    "annotationSpecSet": "string",
    "instructionMessage": "string"
  },
  "textClassificationConfig": {
    "allowMultiLabel": true,
    "annotationSpecSet": "string",
    "sentimentConfig": {
      "enableLabelSentimentSelection": true
    }
  },
  "textEntityExtractionConfig": {
    "annotationSpecSet": "string"
  },
  "videoClassificationConfig": {
    "annotationSpecSetConfigs": [
      {
        "allowMultiLabel": true,
        "annotationSpecSet": "string"
      }
    ],
    "applyShotDetection": true
  }
}
```

Metadata on AnnotatedDataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPolyConfig|[GoogleCloudDatalabelingV1beta1BoundingPolyConfig](#schemagoogleclouddatalabelingv1beta1boundingpolyconfig)|false|none|Configuration for image bounding box and bounding poly task.|
|eventConfig|[GoogleCloudDatalabelingV1beta1EventConfig](#schemagoogleclouddatalabelingv1beta1eventconfig)|false|none|Configuration for video event labeling task.|
|humanAnnotationConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|HumanAnnotationConfig used when requesting the human labeling task for this AnnotatedDataset.|
|imageClassificationConfig|[GoogleCloudDatalabelingV1beta1ImageClassificationConfig](#schemagoogleclouddatalabelingv1beta1imageclassificationconfig)|false|none|Configuration for image classification task.|
|objectDetectionConfig|[GoogleCloudDatalabelingV1beta1ObjectDetectionConfig](#schemagoogleclouddatalabelingv1beta1objectdetectionconfig)|false|none|Configuration for video object detection task.|
|objectTrackingConfig|[GoogleCloudDatalabelingV1beta1ObjectTrackingConfig](#schemagoogleclouddatalabelingv1beta1objecttrackingconfig)|false|none|Configuration for video object tracking task.|
|polylineConfig|[GoogleCloudDatalabelingV1beta1PolylineConfig](#schemagoogleclouddatalabelingv1beta1polylineconfig)|false|none|Configuration for image polyline task.|
|segmentationConfig|[GoogleCloudDatalabelingV1beta1SegmentationConfig](#schemagoogleclouddatalabelingv1beta1segmentationconfig)|false|none|Configuration for image segmentation task.|
|textClassificationConfig|[GoogleCloudDatalabelingV1beta1TextClassificationConfig](#schemagoogleclouddatalabelingv1beta1textclassificationconfig)|false|none|Configuration for text classification task.|
|textEntityExtractionConfig|[GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig](#schemagoogleclouddatalabelingv1beta1textentityextractionconfig)|false|none|Configuration for text entity extraction task.|
|videoClassificationConfig|[GoogleCloudDatalabelingV1beta1VideoClassificationConfig](#schemagoogleclouddatalabelingv1beta1videoclassificationconfig)|false|none|Configuration for video classification task.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1Annotation">GoogleCloudDatalabelingV1beta1Annotation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1annotation"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1Annotation"></a>
<a id="tocSgoogleclouddatalabelingv1beta1annotation"></a>
<a id="tocsgoogleclouddatalabelingv1beta1annotation"></a>

```json
{
  "annotationMetadata": {
    "operatorMetadata": {
      "comments": [
        "string"
      ],
      "labelVotes": 0,
      "score": 0,
      "totalVotes": 0
    }
  },
  "annotationSentiment": "ANNOTATION_SENTIMENT_UNSPECIFIED",
  "annotationSource": "ANNOTATION_SOURCE_UNSPECIFIED",
  "annotationValue": {
    "imageBoundingPolyAnnotation": {
      "annotationSpec": {
        "description": "string",
        "displayName": "string",
        "index": 0
      },
      "boundingPoly": {
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "normalizedBoundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      }
    },
    "imageClassificationAnnotation": {
      "annotationSpec": {
        "description": "string",
        "displayName": "string",
        "index": 0
      }
    },
    "imagePolylineAnnotation": {
      "annotationSpec": {
        "description": "string",
        "displayName": "string",
        "index": 0
      },
      "normalizedPolyline": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "polyline": {
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      }
    },
    "imageSegmentationAnnotation": {
      "annotationColors": {
        "property1": {
          "description": "string",
          "displayName": "string",
          "index": 0
        },
        "property2": {
          "description": "string",
          "displayName": "string",
          "index": 0
        }
      },
      "imageBytes": "string",
      "mimeType": "string"
    },
    "textClassificationAnnotation": {
      "annotationSpec": {
        "description": "string",
        "displayName": "string",
        "index": 0
      }
    },
    "textEntityExtractionAnnotation": {
      "annotationSpec": {
        "description": "string",
        "displayName": "string",
        "index": 0
      },
      "sequentialSegment": {
        "end": 0,
        "start": 0
      }
    },
    "videoClassificationAnnotation": {
      "annotationSpec": {
        "description": "string",
        "displayName": "string",
        "index": 0
      },
      "timeSegment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    },
    "videoEventAnnotation": {
      "annotationSpec": {
        "description": "string",
        "displayName": "string",
        "index": 0
      },
      "timeSegment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    },
    "videoObjectTrackingAnnotation": {
      "annotationSpec": {
        "description": "string",
        "displayName": "string",
        "index": 0
      },
      "objectTrackingFrames": [
        {
          "boundingPoly": {
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "normalizedBoundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "timeOffset": "string"
        }
      ],
      "timeSegment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  },
  "name": "string"
}
```

Annotation for Example. Each example may have one or more annotations. For example in image classification problem, each image might have one or more labels. We call labels binded with this image an Annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationMetadata|[GoogleCloudDatalabelingV1beta1AnnotationMetadata](#schemagoogleclouddatalabelingv1beta1annotationmetadata)|false|none|Output only. Annotation metadata, including information like votes for labels.|
|annotationSentiment|string|false|none|Output only. Sentiment for this annotation.|
|annotationSource|string|false|none|Output only. The source of the annotation.|
|annotationValue|[GoogleCloudDatalabelingV1beta1AnnotationValue](#schemagoogleclouddatalabelingv1beta1annotationvalue)|false|none|Output only. This is the actual annotation value, e.g classification, bounding box values are stored here.|
|name|string|false|none|Output only. Unique name of this annotation, format is: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset}/examples/{example_id}/annotations/{annotation_id}|

#### Enumerated Values

|Property|Value|
|---|---|
|annotationSentiment|ANNOTATION_SENTIMENT_UNSPECIFIED|
|annotationSentiment|NEGATIVE|
|annotationSentiment|POSITIVE|
|annotationSource|ANNOTATION_SOURCE_UNSPECIFIED|
|annotationSource|OPERATOR|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1AnnotationMetadata">GoogleCloudDatalabelingV1beta1AnnotationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1annotationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1AnnotationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1annotationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1annotationmetadata"></a>

```json
{
  "operatorMetadata": {
    "comments": [
      "string"
    ],
    "labelVotes": 0,
    "score": 0,
    "totalVotes": 0
  }
}
```

Additional information associated with the annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operatorMetadata|[GoogleCloudDatalabelingV1beta1OperatorMetadata](#schemagoogleclouddatalabelingv1beta1operatormetadata)|false|none|Metadata related to human labeling.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1AnnotationSpec">GoogleCloudDatalabelingV1beta1AnnotationSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1annotationspec"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1AnnotationSpec"></a>
<a id="tocSgoogleclouddatalabelingv1beta1annotationspec"></a>
<a id="tocsgoogleclouddatalabelingv1beta1annotationspec"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "index": 0
}
```

Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. User-provided description of the annotation specification. The description can be up to 10,000 characters long.|
|displayName|string|false|none|Required. The display name of the AnnotationSpec. Maximum of 64 characters.|
|index|integer(int32)|false|none|Output only. This is the integer index of the AnnotationSpec. The index for the whole AnnotationSpecSet is sequential starting from 0. For example, an AnnotationSpecSet with classes `dog` and `cat`, might contain one AnnotationSpec with `{ display_name: "dog", index: 0 }` and one AnnotationSpec with `{ display_name: "cat", index: 1 }`. This is especially useful for model training as it encodes the string labels into numeric values.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1AnnotationSpecSet">GoogleCloudDatalabelingV1beta1AnnotationSpecSet</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1annotationspecset"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1AnnotationSpecSet"></a>
<a id="tocSgoogleclouddatalabelingv1beta1annotationspecset"></a>
<a id="tocsgoogleclouddatalabelingv1beta1annotationspecset"></a>

```json
{
  "annotationSpecs": [
    {
      "description": "string",
      "displayName": "string",
      "index": 0
    }
  ],
  "blockingResources": [
    "string"
  ],
  "description": "string",
  "displayName": "string",
  "name": "string"
}
```

An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecs|[[GoogleCloudDatalabelingV1beta1AnnotationSpec](#schemagoogleclouddatalabelingv1beta1annotationspec)]|false|none|Required. The array of AnnotationSpecs that you define when you create the AnnotationSpecSet. These are the possible labels for the labeling task.|
|blockingResources|[string]|false|none|Output only. The names of any related resources that are blocking changes to the annotation spec set.|
|description|string|false|none|Optional. User-provided description of the annotation specification set. The description can be up to 10,000 characters long.|
|displayName|string|false|none|Required. The display name for AnnotationSpecSet that you define when you create it. Maximum of 64 characters.|
|name|string|false|none|Output only. The AnnotationSpecSet resource name in the following format: "projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}"|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig">GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1annotationspecsetconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1annotationspecsetconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1annotationspecsetconfig"></a>

```json
{
  "allowMultiLabel": true,
  "annotationSpecSet": "string"
}
```

Annotation spec set with the setting of allowing multi labels or not.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowMultiLabel|boolean|false|none|Optional. If allow_multi_label is true, contributors are able to choose multiple labels from one annotation spec set.|
|annotationSpecSet|string|false|none|Required. Annotation spec set resource name.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1AnnotationValue">GoogleCloudDatalabelingV1beta1AnnotationValue</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1annotationvalue"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1AnnotationValue"></a>
<a id="tocSgoogleclouddatalabelingv1beta1annotationvalue"></a>
<a id="tocsgoogleclouddatalabelingv1beta1annotationvalue"></a>

```json
{
  "imageBoundingPolyAnnotation": {
    "annotationSpec": {
      "description": "string",
      "displayName": "string",
      "index": 0
    },
    "boundingPoly": {
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "normalizedBoundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  "imageClassificationAnnotation": {
    "annotationSpec": {
      "description": "string",
      "displayName": "string",
      "index": 0
    }
  },
  "imagePolylineAnnotation": {
    "annotationSpec": {
      "description": "string",
      "displayName": "string",
      "index": 0
    },
    "normalizedPolyline": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "polyline": {
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  "imageSegmentationAnnotation": {
    "annotationColors": {
      "property1": {
        "description": "string",
        "displayName": "string",
        "index": 0
      },
      "property2": {
        "description": "string",
        "displayName": "string",
        "index": 0
      }
    },
    "imageBytes": "string",
    "mimeType": "string"
  },
  "textClassificationAnnotation": {
    "annotationSpec": {
      "description": "string",
      "displayName": "string",
      "index": 0
    }
  },
  "textEntityExtractionAnnotation": {
    "annotationSpec": {
      "description": "string",
      "displayName": "string",
      "index": 0
    },
    "sequentialSegment": {
      "end": 0,
      "start": 0
    }
  },
  "videoClassificationAnnotation": {
    "annotationSpec": {
      "description": "string",
      "displayName": "string",
      "index": 0
    },
    "timeSegment": {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    }
  },
  "videoEventAnnotation": {
    "annotationSpec": {
      "description": "string",
      "displayName": "string",
      "index": 0
    },
    "timeSegment": {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    }
  },
  "videoObjectTrackingAnnotation": {
    "annotationSpec": {
      "description": "string",
      "displayName": "string",
      "index": 0
    },
    "objectTrackingFrames": [
      {
        "boundingPoly": {
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "normalizedBoundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "timeOffset": "string"
      }
    ],
    "timeSegment": {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    }
  }
}
```

Annotation value for an example.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageBoundingPolyAnnotation|[GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation](#schemagoogleclouddatalabelingv1beta1imageboundingpolyannotation)|false|none|Annotation value for image bounding box, oriented bounding box and polygon cases.|
|imageClassificationAnnotation|[GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation](#schemagoogleclouddatalabelingv1beta1imageclassificationannotation)|false|none|Annotation value for image classification case.|
|imagePolylineAnnotation|[GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation](#schemagoogleclouddatalabelingv1beta1imagepolylineannotation)|false|none|Annotation value for image polyline cases. Polyline here is different from BoundingPoly. It is formed by line segments connected to each other but not closed form(Bounding Poly). The line segments can cross each other.|
|imageSegmentationAnnotation|[GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation](#schemagoogleclouddatalabelingv1beta1imagesegmentationannotation)|false|none|Annotation value for image segmentation.|
|textClassificationAnnotation|[GoogleCloudDatalabelingV1beta1TextClassificationAnnotation](#schemagoogleclouddatalabelingv1beta1textclassificationannotation)|false|none|Annotation value for text classification case.|
|textEntityExtractionAnnotation|[GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation](#schemagoogleclouddatalabelingv1beta1textentityextractionannotation)|false|none|Annotation value for text entity extraction case.|
|videoClassificationAnnotation|[GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation](#schemagoogleclouddatalabelingv1beta1videoclassificationannotation)|false|none|Annotation value for video classification case.|
|videoEventAnnotation|[GoogleCloudDatalabelingV1beta1VideoEventAnnotation](#schemagoogleclouddatalabelingv1beta1videoeventannotation)|false|none|Annotation value for video event case.|
|videoObjectTrackingAnnotation|[GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation](#schemagoogleclouddatalabelingv1beta1videoobjecttrackingannotation)|false|none|Annotation value for video object detection and tracking case.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1Attempt">GoogleCloudDatalabelingV1beta1Attempt</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1attempt"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1Attempt"></a>
<a id="tocSgoogleclouddatalabelingv1beta1attempt"></a>
<a id="tocsgoogleclouddatalabelingv1beta1attempt"></a>

```json
{
  "attemptTime": "string",
  "partialFailures": [
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
  ]
}
```

Records a failed evaluation job run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attemptTime|string(google-datetime)|false|none|none|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Details of errors that occurred.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1BigQuerySource">GoogleCloudDatalabelingV1beta1BigQuerySource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1bigquerysource"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1BigQuerySource"></a>
<a id="tocSgoogleclouddatalabelingv1beta1bigquerysource"></a>
<a id="tocsgoogleclouddatalabelingv1beta1bigquerysource"></a>

```json
{
  "inputUri": "string"
}
```

The BigQuery location for input data. If used in an EvaluationJob, this is where the service saves the prediction input and output sampled from the model version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputUri|string|false|none|Required. BigQuery URI to a table, up to 2,000 characters long. If you specify the URI of a table that does not exist, Data Labeling Service creates a table at the URI with the correct schema when you create your EvaluationJob. If you specify the URI of a table that already exists, it must have the [correct schema](/ml-engine/docs/continuous-evaluation/create-job#table-schema). Provide the table URI in the following format: "bq://{your_project_id}/ {your_dataset_name}/{your_table_name}" [Learn more](/ml-engine/docs/continuous-evaluation/create-job#table-schema).|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions">GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1boundingboxevaluationoptions"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions"></a>
<a id="tocSgoogleclouddatalabelingv1beta1boundingboxevaluationoptions"></a>
<a id="tocsgoogleclouddatalabelingv1beta1boundingboxevaluationoptions"></a>

```json
{
  "iouThreshold": 0
}
```

Options regarding evaluation between bounding boxes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iouThreshold|number(float)|false|none|Minimum [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) required for 2 bounding boxes to be considered a match. This must be a number between 0 and 1.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1BoundingPoly">GoogleCloudDatalabelingV1beta1BoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1boundingpoly"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1BoundingPoly"></a>
<a id="tocSgoogleclouddatalabelingv1beta1boundingpoly"></a>
<a id="tocsgoogleclouddatalabelingv1beta1boundingpoly"></a>

```json
{
  "vertices": [
    {
      "x": 0,
      "y": 0
    }
  ]
}
```

A bounding polygon in the image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vertices|[[GoogleCloudDatalabelingV1beta1Vertex](#schemagoogleclouddatalabelingv1beta1vertex)]|false|none|The bounding polygon vertices.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1BoundingPolyConfig">GoogleCloudDatalabelingV1beta1BoundingPolyConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1boundingpolyconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1BoundingPolyConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1boundingpolyconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1boundingpolyconfig"></a>

```json
{
  "annotationSpecSet": "string",
  "instructionMessage": "string"
}
```

Config for image bounding poly (and bounding box) human labeling task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecSet|string|false|none|Required. Annotation spec set resource name.|
|instructionMessage|string|false|none|Optional. Instruction message showed on contributors UI.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ClassificationMetadata">GoogleCloudDatalabelingV1beta1ClassificationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1classificationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ClassificationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1classificationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1classificationmetadata"></a>

```json
{
  "isMultiLabel": true
}
```

Metadata for classification annotations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isMultiLabel|boolean|false|none|Whether the classification task is multi-label or not.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ClassificationMetrics">GoogleCloudDatalabelingV1beta1ClassificationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1classificationmetrics"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ClassificationMetrics"></a>
<a id="tocSgoogleclouddatalabelingv1beta1classificationmetrics"></a>
<a id="tocsgoogleclouddatalabelingv1beta1classificationmetrics"></a>

```json
{
  "confusionMatrix": {
    "row": [
      {
        "annotationSpec": {
          "description": "string",
          "displayName": "string",
          "index": 0
        },
        "entries": [
          {
            "annotationSpec": {
              "description": "string",
              "displayName": "string",
              "index": 0
            },
            "itemCount": 0
          }
        ]
      }
    ]
  },
  "prCurve": {
    "annotationSpec": {
      "description": "string",
      "displayName": "string",
      "index": 0
    },
    "areaUnderCurve": 0,
    "confidenceMetricsEntries": [
      {
        "confidenceThreshold": 0,
        "f1Score": 0,
        "f1ScoreAt1": 0,
        "f1ScoreAt5": 0,
        "precision": 0,
        "precisionAt1": 0,
        "precisionAt5": 0,
        "recall": 0,
        "recallAt1": 0,
        "recallAt5": 0
      }
    ],
    "meanAveragePrecision": 0
  }
}
```

Metrics calculated for a classification model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confusionMatrix|[GoogleCloudDatalabelingV1beta1ConfusionMatrix](#schemagoogleclouddatalabelingv1beta1confusionmatrix)|false|none|Confusion matrix of predicted labels vs. ground truth labels.|
|prCurve|[GoogleCloudDatalabelingV1beta1PrCurve](#schemagoogleclouddatalabelingv1beta1prcurve)|false|none|Precision-recall curve based on ground truth labels, predicted labels, and scores for the predicted labels.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry">GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1confidencemetricsentry"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry"></a>
<a id="tocSgoogleclouddatalabelingv1beta1confidencemetricsentry"></a>
<a id="tocsgoogleclouddatalabelingv1beta1confidencemetricsentry"></a>

```json
{
  "confidenceThreshold": 0,
  "f1Score": 0,
  "f1ScoreAt1": 0,
  "f1ScoreAt5": 0,
  "precision": 0,
  "precisionAt1": 0,
  "precisionAt5": 0,
  "recall": 0,
  "recallAt1": 0,
  "recallAt5": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidenceThreshold|number(float)|false|none|Threshold used for this entry. For classification tasks, this is a classification threshold: a predicted label is categorized as positive or negative (in the context of this point on the PR curve) based on whether the label's score meets this threshold. For image object detection (bounding box) tasks, this is the [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) threshold for the context of this point on the PR curve.|
|f1Score|number(float)|false|none|Harmonic mean of recall and precision.|
|f1ScoreAt1|number(float)|false|none|The harmonic mean of recall_at1 and precision_at1.|
|f1ScoreAt5|number(float)|false|none|The harmonic mean of recall_at5 and precision_at5.|
|precision|number(float)|false|none|Precision value.|
|precisionAt1|number(float)|false|none|Precision value for entries with label that has highest score.|
|precisionAt5|number(float)|false|none|Precision value for entries with label that has highest 5 scores.|
|recall|number(float)|false|none|Recall value.|
|recallAt1|number(float)|false|none|Recall value for entries with label that has highest score.|
|recallAt5|number(float)|false|none|Recall value for entries with label that has highest 5 scores.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ConfusionMatrix">GoogleCloudDatalabelingV1beta1ConfusionMatrix</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1confusionmatrix"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ConfusionMatrix"></a>
<a id="tocSgoogleclouddatalabelingv1beta1confusionmatrix"></a>
<a id="tocsgoogleclouddatalabelingv1beta1confusionmatrix"></a>

```json
{
  "row": [
    {
      "annotationSpec": {
        "description": "string",
        "displayName": "string",
        "index": 0
      },
      "entries": [
        {
          "annotationSpec": {
            "description": "string",
            "displayName": "string",
            "index": 0
          },
          "itemCount": 0
        }
      ]
    }
  ]
}
```

Confusion matrix of the model running the classification. Only applicable when the metrics entry aggregates multiple labels. Not applicable when the entry is for a single label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|row|[[GoogleCloudDatalabelingV1beta1Row](#schemagoogleclouddatalabelingv1beta1row)]|false|none|none|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry">GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1confusionmatrixentry"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry"></a>
<a id="tocSgoogleclouddatalabelingv1beta1confusionmatrixentry"></a>
<a id="tocsgoogleclouddatalabelingv1beta1confusionmatrixentry"></a>

```json
{
  "annotationSpec": {
    "description": "string",
    "displayName": "string",
    "index": 0
  },
  "itemCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpec|[GoogleCloudDatalabelingV1beta1AnnotationSpec](#schemagoogleclouddatalabelingv1beta1annotationspec)|false|none|The annotation spec of a predicted label.|
|itemCount|integer(int32)|false|none|Number of items predicted to have this label. (The ground truth label for these items is the `Row.annotationSpec` of this entry's parent.)|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest">GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1createannotationspecsetrequest"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest"></a>
<a id="tocSgoogleclouddatalabelingv1beta1createannotationspecsetrequest"></a>
<a id="tocsgoogleclouddatalabelingv1beta1createannotationspecsetrequest"></a>

```json
{
  "annotationSpecSet": {
    "annotationSpecs": [
      {
        "description": "string",
        "displayName": "string",
        "index": 0
      }
    ],
    "blockingResources": [
      "string"
    ],
    "description": "string",
    "displayName": "string",
    "name": "string"
  }
}
```

Request message for CreateAnnotationSpecSet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecSet|[GoogleCloudDatalabelingV1beta1AnnotationSpecSet](#schemagoogleclouddatalabelingv1beta1annotationspecset)|false|none|Required. Annotation spec set to create. Annotation specs must be included. Only one annotation spec will be accepted for annotation specs with same display_name.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1CreateDatasetRequest">GoogleCloudDatalabelingV1beta1CreateDatasetRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1createdatasetrequest"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1CreateDatasetRequest"></a>
<a id="tocSgoogleclouddatalabelingv1beta1createdatasetrequest"></a>
<a id="tocsgoogleclouddatalabelingv1beta1createdatasetrequest"></a>

```json
{
  "dataset": {
    "blockingResources": [
      "string"
    ],
    "createTime": "string",
    "dataItemCount": "string",
    "description": "string",
    "displayName": "string",
    "inputConfigs": [
      {
        "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
        "bigquerySource": {
          "inputUri": "string"
        },
        "classificationMetadata": {
          "isMultiLabel": true
        },
        "dataType": "DATA_TYPE_UNSPECIFIED",
        "gcsSource": {
          "inputUri": "string",
          "mimeType": "string"
        },
        "textMetadata": {
          "languageCode": "string"
        }
      }
    ],
    "lastMigrateTime": "string",
    "name": "string"
  }
}
```

Request message for CreateDataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|[GoogleCloudDatalabelingV1beta1Dataset](#schemagoogleclouddatalabelingv1beta1dataset)|false|none|Required. The dataset to be created.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest">GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1createevaluationjobrequest"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest"></a>
<a id="tocSgoogleclouddatalabelingv1beta1createevaluationjobrequest"></a>
<a id="tocsgoogleclouddatalabelingv1beta1createevaluationjobrequest"></a>

```json
{
  "job": {
    "annotationSpecSet": "string",
    "attempts": [
      {
        "attemptTime": "string",
        "partialFailures": [
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
        ]
      }
    ],
    "createTime": "string",
    "description": "string",
    "evaluationJobConfig": {
      "bigqueryImportKeys": {
        "property1": "string",
        "property2": "string"
      },
      "boundingPolyConfig": {
        "annotationSpecSet": "string",
        "instructionMessage": "string"
      },
      "evaluationConfig": {
        "boundingBoxEvaluationOptions": {
          "iouThreshold": 0
        }
      },
      "evaluationJobAlertConfig": {
        "email": "string",
        "minAcceptableMeanAveragePrecision": 0
      },
      "exampleCount": 0,
      "exampleSamplePercentage": 0,
      "humanAnnotationConfig": {
        "annotatedDatasetDescription": "string",
        "annotatedDatasetDisplayName": "string",
        "contributorEmails": [
          "string"
        ],
        "instruction": "string",
        "labelGroup": "string",
        "languageCode": "string",
        "questionDuration": "string",
        "replicaCount": 0,
        "userEmailAddress": "string"
      },
      "imageClassificationConfig": {
        "allowMultiLabel": true,
        "annotationSpecSet": "string",
        "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
      },
      "inputConfig": {
        "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
        "bigquerySource": {
          "inputUri": "string"
        },
        "classificationMetadata": {
          "isMultiLabel": true
        },
        "dataType": "DATA_TYPE_UNSPECIFIED",
        "gcsSource": {
          "inputUri": "string",
          "mimeType": "string"
        },
        "textMetadata": {
          "languageCode": "string"
        }
      },
      "textClassificationConfig": {
        "allowMultiLabel": true,
        "annotationSpecSet": "string",
        "sentimentConfig": {
          "enableLabelSentimentSelection": true
        }
      }
    },
    "labelMissingGroundTruth": true,
    "modelVersion": "string",
    "name": "string",
    "schedule": "string",
    "state": "STATE_UNSPECIFIED"
  }
}
```

Request message for CreateEvaluationJob.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|job|[GoogleCloudDatalabelingV1beta1EvaluationJob](#schemagoogleclouddatalabelingv1beta1evaluationjob)|false|none|Required. The evaluation job to create.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1CreateInstructionMetadata">GoogleCloudDatalabelingV1beta1CreateInstructionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1createinstructionmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1CreateInstructionMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1createinstructionmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1createinstructionmetadata"></a>

```json
{
  "createTime": "string",
  "instruction": "string",
  "partialFailures": [
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
  ]
}
```

Metadata of a CreateInstruction operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Timestamp when create instruction request was created.|
|instruction|string|false|none|The name of the created Instruction. projects/{project_id}/instructions/{instruction_id}|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1CreateInstructionRequest">GoogleCloudDatalabelingV1beta1CreateInstructionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1createinstructionrequest"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1CreateInstructionRequest"></a>
<a id="tocSgoogleclouddatalabelingv1beta1createinstructionrequest"></a>
<a id="tocsgoogleclouddatalabelingv1beta1createinstructionrequest"></a>

```json
{
  "instruction": {
    "blockingResources": [
      "string"
    ],
    "createTime": "string",
    "csvInstruction": {
      "gcsFileUri": "string"
    },
    "dataType": "DATA_TYPE_UNSPECIFIED",
    "description": "string",
    "displayName": "string",
    "name": "string",
    "pdfInstruction": {
      "gcsFileUri": "string"
    },
    "updateTime": "string"
  }
}
```

Request message for CreateInstruction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instruction|[GoogleCloudDatalabelingV1beta1Instruction](#schemagoogleclouddatalabelingv1beta1instruction)|false|none|Required. Instruction of how to perform the labeling task.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1CsvInstruction">GoogleCloudDatalabelingV1beta1CsvInstruction</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1csvinstruction"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1CsvInstruction"></a>
<a id="tocSgoogleclouddatalabelingv1beta1csvinstruction"></a>
<a id="tocsgoogleclouddatalabelingv1beta1csvinstruction"></a>

```json
{
  "gcsFileUri": "string"
}
```

Deprecated: this instruction format is not supported any more. Instruction from a CSV file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsFileUri|string|false|none|CSV file for the instruction. Only gcs path is allowed.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1DataItem">GoogleCloudDatalabelingV1beta1DataItem</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1dataitem"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1DataItem"></a>
<a id="tocSgoogleclouddatalabelingv1beta1dataitem"></a>
<a id="tocsgoogleclouddatalabelingv1beta1dataitem"></a>

```json
{
  "imagePayload": {
    "imageThumbnail": "string",
    "imageUri": "string",
    "mimeType": "string",
    "signedUri": "string"
  },
  "name": "string",
  "textPayload": {
    "textContent": "string"
  },
  "videoPayload": {
    "frameRate": 0,
    "mimeType": "string",
    "signedUri": "string",
    "videoThumbnails": [
      {
        "thumbnail": "string",
        "timeOffset": "string"
      }
    ],
    "videoUri": "string"
  }
}
```

DataItem is a piece of data, without annotation. For example, an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imagePayload|[GoogleCloudDatalabelingV1beta1ImagePayload](#schemagoogleclouddatalabelingv1beta1imagepayload)|false|none|The image payload, a container of the image bytes/uri.|
|name|string|false|none|Output only. Name of the data item, in format of: projects/{project_id}/datasets/{dataset_id}/dataItems/{data_item_id}|
|textPayload|[GoogleCloudDatalabelingV1beta1TextPayload](#schemagoogleclouddatalabelingv1beta1textpayload)|false|none|The text payload, a container of text content.|
|videoPayload|[GoogleCloudDatalabelingV1beta1VideoPayload](#schemagoogleclouddatalabelingv1beta1videopayload)|false|none|The video payload, a container of the video uri.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1Dataset">GoogleCloudDatalabelingV1beta1Dataset</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1dataset"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1Dataset"></a>
<a id="tocSgoogleclouddatalabelingv1beta1dataset"></a>
<a id="tocsgoogleclouddatalabelingv1beta1dataset"></a>

```json
{
  "blockingResources": [
    "string"
  ],
  "createTime": "string",
  "dataItemCount": "string",
  "description": "string",
  "displayName": "string",
  "inputConfigs": [
    {
      "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
      "bigquerySource": {
        "inputUri": "string"
      },
      "classificationMetadata": {
        "isMultiLabel": true
      },
      "dataType": "DATA_TYPE_UNSPECIFIED",
      "gcsSource": {
        "inputUri": "string",
        "mimeType": "string"
      },
      "textMetadata": {
        "languageCode": "string"
      }
    }
  ],
  "lastMigrateTime": "string",
  "name": "string"
}
```

Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockingResources|[string]|false|none|Output only. The names of any related resources that are blocking changes to the dataset.|
|createTime|string(google-datetime)|false|none|Output only. Time the dataset is created.|
|dataItemCount|string(int64)|false|none|Output only. The number of data items in the dataset.|
|description|string|false|none|Optional. User-provided description of the annotation specification set. The description can be up to 10000 characters long.|
|displayName|string|false|none|Required. The display name of the dataset. Maximum of 64 characters.|
|inputConfigs|[[GoogleCloudDatalabelingV1beta1InputConfig](#schemagoogleclouddatalabelingv1beta1inputconfig)]|false|none|Output only. This is populated with the original input configs where ImportData is called. It is available only after the clients import data to this dataset.|
|lastMigrateTime|string(google-datetime)|false|none|Last time that the Dataset is migrated to AI Platform V2. If any of the AnnotatedDataset is migrated, the last_migration_time in Dataset is also updated.|
|name|string|false|none|Output only. Dataset resource name, format is: projects/{project_id}/datasets/{dataset_id}|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1Evaluation">GoogleCloudDatalabelingV1beta1Evaluation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1evaluation"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1Evaluation"></a>
<a id="tocSgoogleclouddatalabelingv1beta1evaluation"></a>
<a id="tocsgoogleclouddatalabelingv1beta1evaluation"></a>

```json
{
  "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
  "config": {
    "boundingBoxEvaluationOptions": {
      "iouThreshold": 0
    }
  },
  "createTime": "string",
  "evaluatedItemCount": "string",
  "evaluationJobRunTime": "string",
  "evaluationMetrics": {
    "classificationMetrics": {
      "confusionMatrix": {
        "row": [
          {
            "annotationSpec": {
              "description": "string",
              "displayName": "string",
              "index": 0
            },
            "entries": [
              {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "itemCount": 0
              }
            ]
          }
        ]
      },
      "prCurve": {
        "annotationSpec": {
          "description": "string",
          "displayName": "string",
          "index": 0
        },
        "areaUnderCurve": 0,
        "confidenceMetricsEntries": [
          {
            "confidenceThreshold": 0,
            "f1Score": 0,
            "f1ScoreAt1": 0,
            "f1ScoreAt5": 0,
            "precision": 0,
            "precisionAt1": 0,
            "precisionAt5": 0,
            "recall": 0,
            "recallAt1": 0,
            "recallAt5": 0
          }
        ],
        "meanAveragePrecision": 0
      }
    },
    "objectDetectionMetrics": {
      "prCurve": {
        "annotationSpec": {
          "description": "string",
          "displayName": "string",
          "index": 0
        },
        "areaUnderCurve": 0,
        "confidenceMetricsEntries": [
          {
            "confidenceThreshold": 0,
            "f1Score": 0,
            "f1ScoreAt1": 0,
            "f1ScoreAt5": 0,
            "precision": 0,
            "precisionAt1": 0,
            "precisionAt5": 0,
            "recall": 0,
            "recallAt1": 0,
            "recallAt5": 0
          }
        ],
        "meanAveragePrecision": 0
      }
    }
  },
  "name": "string"
}
```

Describes an evaluation between a machine learning model's predictions and ground truth labels. Created when an EvaluationJob runs successfully.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationType|string|false|none|Output only. Type of task that the model version being evaluated performs, as defined in the evaluationJobConfig.inputConfig.annotationType field of the evaluation job that created this evaluation.|
|config|[GoogleCloudDatalabelingV1beta1EvaluationConfig](#schemagoogleclouddatalabelingv1beta1evaluationconfig)|false|none|Output only. Options used in the evaluation job that created this evaluation.|
|createTime|string(google-datetime)|false|none|Output only. Timestamp for when this evaluation was created.|
|evaluatedItemCount|string(int64)|false|none|Output only. The number of items in the ground truth dataset that were used for this evaluation. Only populated when the evaulation is for certain AnnotationTypes.|
|evaluationJobRunTime|string(google-datetime)|false|none|Output only. Timestamp for when the evaluation job that created this evaluation ran.|
|evaluationMetrics|[GoogleCloudDatalabelingV1beta1EvaluationMetrics](#schemagoogleclouddatalabelingv1beta1evaluationmetrics)|false|none|Output only. Metrics comparing predictions to ground truth labels.|
|name|string|false|none|Output only. Resource name of an evaluation. The name has the following format: "projects/{project_id}/datasets/{dataset_id}/evaluations/ {evaluation_id}'|

#### Enumerated Values

|Property|Value|
|---|---|
|annotationType|ANNOTATION_TYPE_UNSPECIFIED|
|annotationType|IMAGE_CLASSIFICATION_ANNOTATION|
|annotationType|IMAGE_BOUNDING_BOX_ANNOTATION|
|annotationType|IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION|
|annotationType|IMAGE_BOUNDING_POLY_ANNOTATION|
|annotationType|IMAGE_POLYLINE_ANNOTATION|
|annotationType|IMAGE_SEGMENTATION_ANNOTATION|
|annotationType|VIDEO_SHOTS_CLASSIFICATION_ANNOTATION|
|annotationType|VIDEO_OBJECT_TRACKING_ANNOTATION|
|annotationType|VIDEO_OBJECT_DETECTION_ANNOTATION|
|annotationType|VIDEO_EVENT_ANNOTATION|
|annotationType|TEXT_CLASSIFICATION_ANNOTATION|
|annotationType|TEXT_ENTITY_EXTRACTION_ANNOTATION|
|annotationType|GENERAL_CLASSIFICATION_ANNOTATION|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1EvaluationConfig">GoogleCloudDatalabelingV1beta1EvaluationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1evaluationconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1EvaluationConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1evaluationconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1evaluationconfig"></a>

```json
{
  "boundingBoxEvaluationOptions": {
    "iouThreshold": 0
  }
}
```

Configuration details used for calculating evaluation metrics and creating an Evaluation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBoxEvaluationOptions|[GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions](#schemagoogleclouddatalabelingv1beta1boundingboxevaluationoptions)|false|none|Only specify this field if the related model performs image object detection (`IMAGE_BOUNDING_BOX_ANNOTATION`). Describes how to evaluate bounding boxes.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1EvaluationJob">GoogleCloudDatalabelingV1beta1EvaluationJob</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1evaluationjob"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1EvaluationJob"></a>
<a id="tocSgoogleclouddatalabelingv1beta1evaluationjob"></a>
<a id="tocsgoogleclouddatalabelingv1beta1evaluationjob"></a>

```json
{
  "annotationSpecSet": "string",
  "attempts": [
    {
      "attemptTime": "string",
      "partialFailures": [
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
      ]
    }
  ],
  "createTime": "string",
  "description": "string",
  "evaluationJobConfig": {
    "bigqueryImportKeys": {
      "property1": "string",
      "property2": "string"
    },
    "boundingPolyConfig": {
      "annotationSpecSet": "string",
      "instructionMessage": "string"
    },
    "evaluationConfig": {
      "boundingBoxEvaluationOptions": {
        "iouThreshold": 0
      }
    },
    "evaluationJobAlertConfig": {
      "email": "string",
      "minAcceptableMeanAveragePrecision": 0
    },
    "exampleCount": 0,
    "exampleSamplePercentage": 0,
    "humanAnnotationConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    },
    "imageClassificationConfig": {
      "allowMultiLabel": true,
      "annotationSpecSet": "string",
      "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
    },
    "inputConfig": {
      "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
      "bigquerySource": {
        "inputUri": "string"
      },
      "classificationMetadata": {
        "isMultiLabel": true
      },
      "dataType": "DATA_TYPE_UNSPECIFIED",
      "gcsSource": {
        "inputUri": "string",
        "mimeType": "string"
      },
      "textMetadata": {
        "languageCode": "string"
      }
    },
    "textClassificationConfig": {
      "allowMultiLabel": true,
      "annotationSpecSet": "string",
      "sentimentConfig": {
        "enableLabelSentimentSelection": true
      }
    }
  },
  "labelMissingGroundTruth": true,
  "modelVersion": "string",
  "name": "string",
  "schedule": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecSet|string|false|none|Required. Name of the AnnotationSpecSet describing all the labels that your machine learning model outputs. You must create this resource before you create an evaluation job and provide its name in the following format: "projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}"|
|attempts|[[GoogleCloudDatalabelingV1beta1Attempt](#schemagoogleclouddatalabelingv1beta1attempt)]|false|none|Output only. Every time the evaluation job runs and an error occurs, the failed attempt is appended to this array.|
|createTime|string(google-datetime)|false|none|Output only. Timestamp of when this evaluation job was created.|
|description|string|false|none|Required. Description of the job. The description can be up to 25,000 characters long.|
|evaluationJobConfig|[GoogleCloudDatalabelingV1beta1EvaluationJobConfig](#schemagoogleclouddatalabelingv1beta1evaluationjobconfig)|false|none|Required. Configuration details for the evaluation job.|
|labelMissingGroundTruth|boolean|false|none|Required. Whether you want Data Labeling Service to provide ground truth labels for prediction input. If you want the service to assign human labelers to annotate your data, set this to `true`. If you want to provide your own ground truth labels in the evaluation job's BigQuery table, set this to `false`.|
|modelVersion|string|false|none|Required. The [AI Platform Prediction model version](/ml-engine/docs/prediction-overview) to be evaluated. Prediction input and output is sampled from this model version. When creating an evaluation job, specify the model version in the following format: "projects/{project_id}/models/{model_name}/versions/{version_name}" There can only be one evaluation job per model version.|
|name|string|false|none|Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}"|
|schedule|string|false|none|Required. Describes the interval at which the job runs. This interval must be at least 1 day, and it is rounded to the nearest day. For example, if you specify a 50-hour interval, the job runs every 2 days. You can provide the schedule in [crontab format](/scheduler/docs/configuring/cron-job-schedules) or in an [English-like format](/appengine/docs/standard/python/config/cronref#schedule_format). Regardless of what you specify, the job will run at 10:00 AM UTC. Only the interval from this schedule is used, not the specific time of day.|
|state|string|false|none|Output only. Describes the current state of the job.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|SCHEDULED|
|state|RUNNING|
|state|PAUSED|
|state|STOPPED|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig">GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1evaluationjobalertconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1evaluationjobalertconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1evaluationjobalertconfig"></a>

```json
{
  "email": "string",
  "minAcceptableMeanAveragePrecision": 0
}
```

Provides details for how an evaluation job sends email alerts based on the results of a run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Required. An email address to send alerts to.|
|minAcceptableMeanAveragePrecision|number(double)|false|none|Required. A number between 0 and 1 that describes a minimum mean average precision threshold. When the evaluation job runs, if it calculates that your model version's predictions from the recent interval have meanAveragePrecision below this threshold, then it sends an alert to your specified email.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1EvaluationJobConfig">GoogleCloudDatalabelingV1beta1EvaluationJobConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1evaluationjobconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1EvaluationJobConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1evaluationjobconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1evaluationjobconfig"></a>

```json
{
  "bigqueryImportKeys": {
    "property1": "string",
    "property2": "string"
  },
  "boundingPolyConfig": {
    "annotationSpecSet": "string",
    "instructionMessage": "string"
  },
  "evaluationConfig": {
    "boundingBoxEvaluationOptions": {
      "iouThreshold": 0
    }
  },
  "evaluationJobAlertConfig": {
    "email": "string",
    "minAcceptableMeanAveragePrecision": 0
  },
  "exampleCount": 0,
  "exampleSamplePercentage": 0,
  "humanAnnotationConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  },
  "imageClassificationConfig": {
    "allowMultiLabel": true,
    "annotationSpecSet": "string",
    "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
  },
  "inputConfig": {
    "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
    "bigquerySource": {
      "inputUri": "string"
    },
    "classificationMetadata": {
      "isMultiLabel": true
    },
    "dataType": "DATA_TYPE_UNSPECIFIED",
    "gcsSource": {
      "inputUri": "string",
      "mimeType": "string"
    },
    "textMetadata": {
      "languageCode": "string"
    }
  },
  "textClassificationConfig": {
    "allowMultiLabel": true,
    "annotationSpecSet": "string",
    "sentimentConfig": {
      "enableLabelSentimentSelection": true
    }
  }
}
```

Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryImportKeys|object|false|none|Required. Prediction keys that tell Data Labeling Service where to find the data for evaluation in your BigQuery table. When the service samples prediction input and output from your model version and saves it to BigQuery, the data gets stored as JSON strings in the BigQuery table. These keys tell Data Labeling Service how to parse the JSON. You can provide the following entries in this field: * `data_json_key`: the data key for prediction input. You must provide either this key or `reference_json_key`. * `reference_json_key`: the data reference key for prediction input. You must provide either this key or `data_json_key`. * `label_json_key`: the label key for prediction output. Required. * `label_score_json_key`: the score key for prediction output. Required. * `bounding_box_json_key`: the bounding box key for prediction output. Required if your model version perform image object detection. Learn [how to configure prediction keys](/ml-engine/docs/continuous-evaluation/create-job#prediction-keys).|
|boundingPolyConfig|[GoogleCloudDatalabelingV1beta1BoundingPolyConfig](#schemagoogleclouddatalabelingv1beta1boundingpolyconfig)|false|none|Specify this field if your model version performs image object detection (bounding box detection). `annotationSpecSet` in this configuration must match EvaluationJob.annotationSpecSet.|
|evaluationConfig|[GoogleCloudDatalabelingV1beta1EvaluationConfig](#schemagoogleclouddatalabelingv1beta1evaluationconfig)|false|none|Required. Details for calculating evaluation metrics and creating Evaulations. If your model version performs image object detection, you must specify the `boundingBoxEvaluationOptions` field within this configuration. Otherwise, provide an empty object for this configuration.|
|evaluationJobAlertConfig|[GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig](#schemagoogleclouddatalabelingv1beta1evaluationjobalertconfig)|false|none|Optional. Configuration details for evaluation job alerts. Specify this field if you want to receive email alerts if the evaluation job finds that your predictions have low mean average precision during a run.|
|exampleCount|integer(int32)|false|none|Required. The maximum number of predictions to sample and save to BigQuery during each evaluation interval. This limit overrides `example_sample_percentage`: even if the service has not sampled enough predictions to fulfill `example_sample_perecentage` during an interval, it stops sampling predictions when it meets this limit.|
|exampleSamplePercentage|number(double)|false|none|Required. Fraction of predictions to sample and save to BigQuery during each evaluation interval. For example, 0.1 means 10% of predictions served by your model version get saved to BigQuery.|
|humanAnnotationConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Optional. Details for human annotation of your data. If you set labelMissingGroundTruth to `true` for this evaluation job, then you must specify this field. If you plan to provide your own ground truth labels, then omit this field. Note that you must create an Instruction resource before you can specify this field. Provide the name of the instruction resource in the `instruction` field within this configuration.|
|imageClassificationConfig|[GoogleCloudDatalabelingV1beta1ImageClassificationConfig](#schemagoogleclouddatalabelingv1beta1imageclassificationconfig)|false|none|Specify this field if your model version performs image classification or general classification. `annotationSpecSet` in this configuration must match EvaluationJob.annotationSpecSet. `allowMultiLabel` in this configuration must match `classificationMetadata.isMultiLabel` in input_config.|
|inputConfig|[GoogleCloudDatalabelingV1beta1InputConfig](#schemagoogleclouddatalabelingv1beta1inputconfig)|false|none|Rquired. Details for the sampled prediction input. Within this configuration, there are requirements for several fields: * `dataType` must be one of `IMAGE`, `TEXT`, or `GENERAL_DATA`. * `annotationType` must be one of `IMAGE_CLASSIFICATION_ANNOTATION`, `TEXT_CLASSIFICATION_ANNOTATION`, `GENERAL_CLASSIFICATION_ANNOTATION`, or `IMAGE_BOUNDING_BOX_ANNOTATION` (image object detection). * If your machine learning model performs classification, you must specify `classificationMetadata.isMultiLabel`. * You must specify `bigquerySource` (not `gcsSource`).|
|textClassificationConfig|[GoogleCloudDatalabelingV1beta1TextClassificationConfig](#schemagoogleclouddatalabelingv1beta1textclassificationconfig)|false|none|Specify this field if your model version performs text classification. `annotationSpecSet` in this configuration must match EvaluationJob.annotationSpecSet. `allowMultiLabel` in this configuration must match `classificationMetadata.isMultiLabel` in input_config.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1EvaluationMetrics">GoogleCloudDatalabelingV1beta1EvaluationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1evaluationmetrics"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1EvaluationMetrics"></a>
<a id="tocSgoogleclouddatalabelingv1beta1evaluationmetrics"></a>
<a id="tocsgoogleclouddatalabelingv1beta1evaluationmetrics"></a>

```json
{
  "classificationMetrics": {
    "confusionMatrix": {
      "row": [
        {
          "annotationSpec": {
            "description": "string",
            "displayName": "string",
            "index": 0
          },
          "entries": [
            {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "itemCount": 0
            }
          ]
        }
      ]
    },
    "prCurve": {
      "annotationSpec": {
        "description": "string",
        "displayName": "string",
        "index": 0
      },
      "areaUnderCurve": 0,
      "confidenceMetricsEntries": [
        {
          "confidenceThreshold": 0,
          "f1Score": 0,
          "f1ScoreAt1": 0,
          "f1ScoreAt5": 0,
          "precision": 0,
          "precisionAt1": 0,
          "precisionAt5": 0,
          "recall": 0,
          "recallAt1": 0,
          "recallAt5": 0
        }
      ],
      "meanAveragePrecision": 0
    }
  },
  "objectDetectionMetrics": {
    "prCurve": {
      "annotationSpec": {
        "description": "string",
        "displayName": "string",
        "index": 0
      },
      "areaUnderCurve": 0,
      "confidenceMetricsEntries": [
        {
          "confidenceThreshold": 0,
          "f1Score": 0,
          "f1ScoreAt1": 0,
          "f1ScoreAt5": 0,
          "precision": 0,
          "precisionAt1": 0,
          "precisionAt5": 0,
          "recall": 0,
          "recallAt1": 0,
          "recallAt5": 0
        }
      ],
      "meanAveragePrecision": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classificationMetrics|[GoogleCloudDatalabelingV1beta1ClassificationMetrics](#schemagoogleclouddatalabelingv1beta1classificationmetrics)|false|none|Metrics calculated for a classification model.|
|objectDetectionMetrics|[GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics](#schemagoogleclouddatalabelingv1beta1objectdetectionmetrics)|false|none|Metrics calculated for an image object detection (bounding box) model.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1EventConfig">GoogleCloudDatalabelingV1beta1EventConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1eventconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1EventConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1eventconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1eventconfig"></a>

```json
{
  "annotationSpecSets": [
    "string"
  ],
  "clipLength": 0,
  "overlapLength": 0
}
```

Config for video event human labeling task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecSets|[string]|false|none|Required. The list of annotation spec set resource name. Similar to video classification, we support selecting event from multiple AnnotationSpecSet at the same time.|
|clipLength|integer(int32)|false|none|Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 60s.|
|overlapLength|integer(int32)|false|none|The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 1s.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1Example">GoogleCloudDatalabelingV1beta1Example</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1example"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1Example"></a>
<a id="tocSgoogleclouddatalabelingv1beta1example"></a>
<a id="tocsgoogleclouddatalabelingv1beta1example"></a>

```json
{
  "annotations": [
    {
      "annotationMetadata": {
        "operatorMetadata": {
          "comments": [
            "string"
          ],
          "labelVotes": 0,
          "score": 0,
          "totalVotes": 0
        }
      },
      "annotationSentiment": "ANNOTATION_SENTIMENT_UNSPECIFIED",
      "annotationSource": "ANNOTATION_SOURCE_UNSPECIFIED",
      "annotationValue": {
        "imageBoundingPolyAnnotation": {
          "annotationSpec": {
            "description": "string",
            "displayName": "string",
            "index": 0
          },
          "boundingPoly": {
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "normalizedBoundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          }
        },
        "imageClassificationAnnotation": {
          "annotationSpec": {
            "description": "string",
            "displayName": "string",
            "index": 0
          }
        },
        "imagePolylineAnnotation": {
          "annotationSpec": {
            "description": "string",
            "displayName": "string",
            "index": 0
          },
          "normalizedPolyline": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "polyline": {
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          }
        },
        "imageSegmentationAnnotation": {
          "annotationColors": {
            "property1": {
              "description": "string",
              "displayName": "string",
              "index": 0
            },
            "property2": {
              "description": "string",
              "displayName": "string",
              "index": 0
            }
          },
          "imageBytes": "string",
          "mimeType": "string"
        },
        "textClassificationAnnotation": {
          "annotationSpec": {
            "description": "string",
            "displayName": "string",
            "index": 0
          }
        },
        "textEntityExtractionAnnotation": {
          "annotationSpec": {
            "description": "string",
            "displayName": "string",
            "index": 0
          },
          "sequentialSegment": {
            "end": 0,
            "start": 0
          }
        },
        "videoClassificationAnnotation": {
          "annotationSpec": {
            "description": "string",
            "displayName": "string",
            "index": 0
          },
          "timeSegment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        },
        "videoEventAnnotation": {
          "annotationSpec": {
            "description": "string",
            "displayName": "string",
            "index": 0
          },
          "timeSegment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        },
        "videoObjectTrackingAnnotation": {
          "annotationSpec": {
            "description": "string",
            "displayName": "string",
            "index": 0
          },
          "objectTrackingFrames": [
            {
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "normalizedBoundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "timeOffset": "string"
            }
          ],
          "timeSegment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      },
      "name": "string"
    }
  ],
  "imagePayload": {
    "imageThumbnail": "string",
    "imageUri": "string",
    "mimeType": "string",
    "signedUri": "string"
  },
  "name": "string",
  "textPayload": {
    "textContent": "string"
  },
  "videoPayload": {
    "frameRate": 0,
    "mimeType": "string",
    "signedUri": "string",
    "videoThumbnails": [
      {
        "thumbnail": "string",
        "timeOffset": "string"
      }
    ],
    "videoUri": "string"
  }
}
```

An Example is a piece of data and its annotation. For example, an image with label "house".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[[GoogleCloudDatalabelingV1beta1Annotation](#schemagoogleclouddatalabelingv1beta1annotation)]|false|none|Output only. Annotations for the piece of data in Example. One piece of data can have multiple annotations.|
|imagePayload|[GoogleCloudDatalabelingV1beta1ImagePayload](#schemagoogleclouddatalabelingv1beta1imagepayload)|false|none|The image payload, a container of the image bytes/uri.|
|name|string|false|none|Output only. Name of the example, in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}/examples/{example_id}|
|textPayload|[GoogleCloudDatalabelingV1beta1TextPayload](#schemagoogleclouddatalabelingv1beta1textpayload)|false|none|The text payload, a container of the text content.|
|videoPayload|[GoogleCloudDatalabelingV1beta1VideoPayload](#schemagoogleclouddatalabelingv1beta1videopayload)|false|none|The video payload, a container of the video uri.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ExampleComparison">GoogleCloudDatalabelingV1beta1ExampleComparison</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1examplecomparison"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ExampleComparison"></a>
<a id="tocSgoogleclouddatalabelingv1beta1examplecomparison"></a>
<a id="tocsgoogleclouddatalabelingv1beta1examplecomparison"></a>

```json
{
  "groundTruthExample": {
    "annotations": [
      {
        "annotationMetadata": {
          "operatorMetadata": {
            "comments": [
              "string"
            ],
            "labelVotes": 0,
            "score": 0,
            "totalVotes": 0
          }
        },
        "annotationSentiment": "ANNOTATION_SENTIMENT_UNSPECIFIED",
        "annotationSource": "ANNOTATION_SOURCE_UNSPECIFIED",
        "annotationValue": {
          "imageBoundingPolyAnnotation": {
            "annotationSpec": {
              "description": "string",
              "displayName": "string",
              "index": 0
            },
            "boundingPoly": {
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "normalizedBoundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            }
          },
          "imageClassificationAnnotation": {
            "annotationSpec": {
              "description": "string",
              "displayName": "string",
              "index": 0
            }
          },
          "imagePolylineAnnotation": {
            "annotationSpec": {
              "description": "string",
              "displayName": "string",
              "index": 0
            },
            "normalizedPolyline": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "polyline": {
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            }
          },
          "imageSegmentationAnnotation": {
            "annotationColors": {
              "property1": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "property2": {
                "description": "string",
                "displayName": "string",
                "index": 0
              }
            },
            "imageBytes": "string",
            "mimeType": "string"
          },
          "textClassificationAnnotation": {
            "annotationSpec": {
              "description": "string",
              "displayName": "string",
              "index": 0
            }
          },
          "textEntityExtractionAnnotation": {
            "annotationSpec": {
              "description": "string",
              "displayName": "string",
              "index": 0
            },
            "sequentialSegment": {
              "end": 0,
              "start": 0
            }
          },
          "videoClassificationAnnotation": {
            "annotationSpec": {
              "description": "string",
              "displayName": "string",
              "index": 0
            },
            "timeSegment": {
              "endTimeOffset": "string",
              "startTimeOffset": "string"
            }
          },
          "videoEventAnnotation": {
            "annotationSpec": {
              "description": "string",
              "displayName": "string",
              "index": 0
            },
            "timeSegment": {
              "endTimeOffset": "string",
              "startTimeOffset": "string"
            }
          },
          "videoObjectTrackingAnnotation": {
            "annotationSpec": {
              "description": "string",
              "displayName": "string",
              "index": 0
            },
            "objectTrackingFrames": [
              {
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "normalizedBoundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "timeOffset": "string"
              }
            ],
            "timeSegment": {
              "endTimeOffset": "string",
              "startTimeOffset": "string"
            }
          }
        },
        "name": "string"
      }
    ],
    "imagePayload": {
      "imageThumbnail": "string",
      "imageUri": "string",
      "mimeType": "string",
      "signedUri": "string"
    },
    "name": "string",
    "textPayload": {
      "textContent": "string"
    },
    "videoPayload": {
      "frameRate": 0,
      "mimeType": "string",
      "signedUri": "string",
      "videoThumbnails": [
        {
          "thumbnail": "string",
          "timeOffset": "string"
        }
      ],
      "videoUri": "string"
    }
  },
  "modelCreatedExamples": [
    {
      "annotations": [
        {
          "annotationMetadata": {
            "operatorMetadata": {
              "comments": [
                "string"
              ],
              "labelVotes": 0,
              "score": 0,
              "totalVotes": 0
            }
          },
          "annotationSentiment": "ANNOTATION_SENTIMENT_UNSPECIFIED",
          "annotationSource": "ANNOTATION_SOURCE_UNSPECIFIED",
          "annotationValue": {
            "imageBoundingPolyAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "normalizedBoundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              }
            },
            "imageClassificationAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              }
            },
            "imagePolylineAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "normalizedPolyline": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "polyline": {
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              }
            },
            "imageSegmentationAnnotation": {
              "annotationColors": {
                "property1": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "property2": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                }
              },
              "imageBytes": "string",
              "mimeType": "string"
            },
            "textClassificationAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              }
            },
            "textEntityExtractionAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "sequentialSegment": {
                "end": 0,
                "start": 0
              }
            },
            "videoClassificationAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "timeSegment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            },
            "videoEventAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "timeSegment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            },
            "videoObjectTrackingAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "objectTrackingFrames": [
                {
                  "boundingPoly": {
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "normalizedBoundingPoly": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "timeOffset": "string"
                }
              ],
              "timeSegment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          },
          "name": "string"
        }
      ],
      "imagePayload": {
        "imageThumbnail": "string",
        "imageUri": "string",
        "mimeType": "string",
        "signedUri": "string"
      },
      "name": "string",
      "textPayload": {
        "textContent": "string"
      },
      "videoPayload": {
        "frameRate": 0,
        "mimeType": "string",
        "signedUri": "string",
        "videoThumbnails": [
          {
            "thumbnail": "string",
            "timeOffset": "string"
          }
        ],
        "videoUri": "string"
      }
    }
  ]
}
```

Example comparisons comparing ground truth output and predictions for a specific input.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groundTruthExample|[GoogleCloudDatalabelingV1beta1Example](#schemagoogleclouddatalabelingv1beta1example)|false|none|The ground truth output for the input.|
|modelCreatedExamples|[[GoogleCloudDatalabelingV1beta1Example](#schemagoogleclouddatalabelingv1beta1example)]|false|none|Predictions by the model for the input.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ExportDataOperationMetadata">GoogleCloudDatalabelingV1beta1ExportDataOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1exportdataoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ExportDataOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1exportdataoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1exportdataoperationmetadata"></a>

```json
{
  "annotatedDataset": "string",
  "createTime": "string",
  "dataset": "string",
  "partialFailures": [
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
  ]
}
```

Metadata of an ExportData operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDataset|string|false|none|Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".|
|createTime|string(google-datetime)|false|none|Output only. Timestamp when export dataset request was created.|
|dataset|string|false|none|Output only. The name of dataset to be exported. "projects/*/datasets/*"|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ExportDataOperationResponse">GoogleCloudDatalabelingV1beta1ExportDataOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1exportdataoperationresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ExportDataOperationResponse"></a>
<a id="tocSgoogleclouddatalabelingv1beta1exportdataoperationresponse"></a>
<a id="tocsgoogleclouddatalabelingv1beta1exportdataoperationresponse"></a>

```json
{
  "annotatedDataset": "string",
  "dataset": "string",
  "exportCount": 0,
  "labelStats": {
    "exampleCount": {
      "property1": "string",
      "property2": "string"
    }
  },
  "outputConfig": {
    "gcsDestination": {
      "mimeType": "string",
      "outputUri": "string"
    },
    "gcsFolderDestination": {
      "outputFolderUri": "string"
    }
  },
  "totalCount": 0
}
```

Response used for ExportDataset longrunning operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDataset|string|false|none|Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".|
|dataset|string|false|none|Ouptut only. The name of dataset. "projects/*/datasets/*"|
|exportCount|integer(int32)|false|none|Output only. Number of examples exported successfully.|
|labelStats|[GoogleCloudDatalabelingV1beta1LabelStats](#schemagoogleclouddatalabelingv1beta1labelstats)|false|none|Output only. Statistic infos of labels in the exported dataset.|
|outputConfig|[GoogleCloudDatalabelingV1beta1OutputConfig](#schemagoogleclouddatalabelingv1beta1outputconfig)|false|none|Output only. output_config in the ExportData request.|
|totalCount|integer(int32)|false|none|Output only. Total number of examples requested to export|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ExportDataRequest">GoogleCloudDatalabelingV1beta1ExportDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1exportdatarequest"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ExportDataRequest"></a>
<a id="tocSgoogleclouddatalabelingv1beta1exportdatarequest"></a>
<a id="tocsgoogleclouddatalabelingv1beta1exportdatarequest"></a>

```json
{
  "annotatedDataset": "string",
  "filter": "string",
  "outputConfig": {
    "gcsDestination": {
      "mimeType": "string",
      "outputUri": "string"
    },
    "gcsFolderDestination": {
      "outputFolderUri": "string"
    }
  },
  "userEmailAddress": "string"
}
```

Request message for ExportData API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDataset|string|false|none|Required. Annotated dataset resource name. DataItem in Dataset and their annotations in specified annotated dataset will be exported. It's in format of projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}|
|filter|string|false|none|Optional. Filter is not supported at this moment.|
|outputConfig|[GoogleCloudDatalabelingV1beta1OutputConfig](#schemagoogleclouddatalabelingv1beta1outputconfig)|false|none|Required. Specify the output destination.|
|userEmailAddress|string|false|none|Email of the user who started the export task and should be notified by email. If empty no notification will be sent.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1FeedbackMessage">GoogleCloudDatalabelingV1beta1FeedbackMessage</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1feedbackmessage"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1FeedbackMessage"></a>
<a id="tocSgoogleclouddatalabelingv1beta1feedbackmessage"></a>
<a id="tocsgoogleclouddatalabelingv1beta1feedbackmessage"></a>

```json
{
  "body": "string",
  "createTime": "string",
  "image": "string",
  "name": "string",
  "operatorFeedbackMetadata": {},
  "requesterFeedbackMetadata": {}
}
```

A feedback message inside a feedback thread.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|String content of the feedback. Maximum of 10000 characters.|
|createTime|string(google-datetime)|false|none|Create time.|
|image|string(byte)|false|none|The image storing this feedback if the feedback is an image representing operator's comments.|
|name|string|false|none|Name of the feedback message in a feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}/feedbackMessage/{feedback_message_id}'|
|operatorFeedbackMetadata|[GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata](#schemagoogleclouddatalabelingv1beta1operatorfeedbackmetadata)|false|none|Metadata describing the feedback from the operator.|
|requesterFeedbackMetadata|[GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata](#schemagoogleclouddatalabelingv1beta1requesterfeedbackmetadata)|false|none|Metadata describing the feedback from the labeling task requester.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1FeedbackThread">GoogleCloudDatalabelingV1beta1FeedbackThread</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1feedbackthread"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1FeedbackThread"></a>
<a id="tocSgoogleclouddatalabelingv1beta1feedbackthread"></a>
<a id="tocsgoogleclouddatalabelingv1beta1feedbackthread"></a>

```json
{
  "feedbackThreadMetadata": {
    "createTime": "string",
    "lastUpdateTime": "string",
    "status": "FEEDBACK_THREAD_STATUS_UNSPECIFIED",
    "thumbnail": "string"
  },
  "name": "string"
}
```

A feedback thread of a certain labeling task on a certain annotated dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feedbackThreadMetadata|[GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata](#schemagoogleclouddatalabelingv1beta1feedbackthreadmetadata)|false|none|Metadata regarding the feedback thread.|
|name|string|false|none|Name of the feedback thread. Format: 'project/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset_id}/feedbackThreads/{feedback_thread_id}'|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata">GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1feedbackthreadmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1feedbackthreadmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1feedbackthreadmetadata"></a>

```json
{
  "createTime": "string",
  "lastUpdateTime": "string",
  "status": "FEEDBACK_THREAD_STATUS_UNSPECIFIED",
  "thumbnail": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|When the thread is created|
|lastUpdateTime|string(google-datetime)|false|none|When the thread is last updated.|
|status|string|false|none|none|
|thumbnail|string(byte)|false|none|An image thumbnail of this thread.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|FEEDBACK_THREAD_STATUS_UNSPECIFIED|
|status|NEW|
|status|REPLIED|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1GcsDestination">GoogleCloudDatalabelingV1beta1GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1gcsdestination"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1GcsDestination"></a>
<a id="tocSgoogleclouddatalabelingv1beta1gcsdestination"></a>
<a id="tocsgoogleclouddatalabelingv1beta1gcsdestination"></a>

```json
{
  "mimeType": "string",
  "outputUri": "string"
}
```

Export destination of the data.Only gcs path is allowed in output_uri.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mimeType|string|false|none|Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.|
|outputUri|string|false|none|Required. The output uri of destination file.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1GcsFolderDestination">GoogleCloudDatalabelingV1beta1GcsFolderDestination</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1gcsfolderdestination"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1GcsFolderDestination"></a>
<a id="tocSgoogleclouddatalabelingv1beta1gcsfolderdestination"></a>
<a id="tocsgoogleclouddatalabelingv1beta1gcsfolderdestination"></a>

```json
{
  "outputFolderUri": "string"
}
```

Export folder destination of the data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputFolderUri|string|false|none|Required. Cloud Storage directory to export data to.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1GcsSource">GoogleCloudDatalabelingV1beta1GcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1gcssource"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1GcsSource"></a>
<a id="tocSgoogleclouddatalabelingv1beta1gcssource"></a>
<a id="tocsgoogleclouddatalabelingv1beta1gcssource"></a>

```json
{
  "inputUri": "string",
  "mimeType": "string"
}
```

Source of the Cloud Storage file to be imported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputUri|string|false|none|Required. The input URI of source file. This must be a Cloud Storage path (`gs://...`).|
|mimeType|string|false|none|Required. The format of the source file. Only "text/csv" is supported.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1HumanAnnotationConfig">GoogleCloudDatalabelingV1beta1HumanAnnotationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1humanannotationconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1HumanAnnotationConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1humanannotationconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1humanannotationconfig"></a>

```json
{
  "annotatedDatasetDescription": "string",
  "annotatedDatasetDisplayName": "string",
  "contributorEmails": [
    "string"
  ],
  "instruction": "string",
  "labelGroup": "string",
  "languageCode": "string",
  "questionDuration": "string",
  "replicaCount": 0,
  "userEmailAddress": "string"
}
```

Configuration for how human labeling task should be done.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDatasetDescription|string|false|none|Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.|
|annotatedDatasetDisplayName|string|false|none|Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .|
|contributorEmails|[string]|false|none|Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/|
|instruction|string|false|none|Required. Instruction resource name.|
|labelGroup|string|false|none|Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`.|
|languageCode|string|false|none|Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.|
|questionDuration|string(google-duration)|false|none|Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.|
|replicaCount|integer(int32)|false|none|Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.|
|userEmailAddress|string|false|none|Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation">GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1imageboundingpolyannotation"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation"></a>
<a id="tocSgoogleclouddatalabelingv1beta1imageboundingpolyannotation"></a>
<a id="tocsgoogleclouddatalabelingv1beta1imageboundingpolyannotation"></a>

```json
{
  "annotationSpec": {
    "description": "string",
    "displayName": "string",
    "index": 0
  },
  "boundingPoly": {
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "normalizedBoundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  }
}
```

Image bounding poly annotation. It represents a polygon including bounding box in the image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpec|[GoogleCloudDatalabelingV1beta1AnnotationSpec](#schemagoogleclouddatalabelingv1beta1annotationspec)|false|none|Label of object in this bounding polygon.|
|boundingPoly|[GoogleCloudDatalabelingV1beta1BoundingPoly](#schemagoogleclouddatalabelingv1beta1boundingpoly)|false|none|A bounding polygon in the image.|
|normalizedBoundingPoly|[GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly](#schemagoogleclouddatalabelingv1beta1normalizedboundingpoly)|false|none|Normalized bounding polygon.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation">GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1imageclassificationannotation"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation"></a>
<a id="tocSgoogleclouddatalabelingv1beta1imageclassificationannotation"></a>
<a id="tocsgoogleclouddatalabelingv1beta1imageclassificationannotation"></a>

```json
{
  "annotationSpec": {
    "description": "string",
    "displayName": "string",
    "index": 0
  }
}
```

Image classification annotation definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpec|[GoogleCloudDatalabelingV1beta1AnnotationSpec](#schemagoogleclouddatalabelingv1beta1annotationspec)|false|none|Label of image.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ImageClassificationConfig">GoogleCloudDatalabelingV1beta1ImageClassificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1imageclassificationconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ImageClassificationConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1imageclassificationconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1imageclassificationconfig"></a>

```json
{
  "allowMultiLabel": true,
  "annotationSpecSet": "string",
  "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
}
```

Config for image classification human labeling task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowMultiLabel|boolean|false|none|Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one image.|
|annotationSpecSet|string|false|none|Required. Annotation spec set resource name.|
|answerAggregationType|string|false|none|Optional. The type of how to aggregate answers.|

#### Enumerated Values

|Property|Value|
|---|---|
|answerAggregationType|STRING_AGGREGATION_TYPE_UNSPECIFIED|
|answerAggregationType|MAJORITY_VOTE|
|answerAggregationType|UNANIMOUS_VOTE|
|answerAggregationType|NO_AGGREGATION|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ImagePayload">GoogleCloudDatalabelingV1beta1ImagePayload</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1imagepayload"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ImagePayload"></a>
<a id="tocSgoogleclouddatalabelingv1beta1imagepayload"></a>
<a id="tocsgoogleclouddatalabelingv1beta1imagepayload"></a>

```json
{
  "imageThumbnail": "string",
  "imageUri": "string",
  "mimeType": "string",
  "signedUri": "string"
}
```

Container of information about an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageThumbnail|string(byte)|false|none|A byte string of a thumbnail image.|
|imageUri|string|false|none|Image uri from the user bucket.|
|mimeType|string|false|none|Image format.|
|signedUri|string|false|none|Signed uri of the image file in the service bucket.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation">GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1imagepolylineannotation"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation"></a>
<a id="tocSgoogleclouddatalabelingv1beta1imagepolylineannotation"></a>
<a id="tocsgoogleclouddatalabelingv1beta1imagepolylineannotation"></a>

```json
{
  "annotationSpec": {
    "description": "string",
    "displayName": "string",
    "index": 0
  },
  "normalizedPolyline": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "polyline": {
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  }
}
```

A polyline for the image annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpec|[GoogleCloudDatalabelingV1beta1AnnotationSpec](#schemagoogleclouddatalabelingv1beta1annotationspec)|false|none|Label of this polyline.|
|normalizedPolyline|[GoogleCloudDatalabelingV1beta1NormalizedPolyline](#schemagoogleclouddatalabelingv1beta1normalizedpolyline)|false|none|Normalized polyline.|
|polyline|[GoogleCloudDatalabelingV1beta1Polyline](#schemagoogleclouddatalabelingv1beta1polyline)|false|none|A line with multiple line segments.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation">GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1imagesegmentationannotation"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation"></a>
<a id="tocSgoogleclouddatalabelingv1beta1imagesegmentationannotation"></a>
<a id="tocsgoogleclouddatalabelingv1beta1imagesegmentationannotation"></a>

```json
{
  "annotationColors": {
    "property1": {
      "description": "string",
      "displayName": "string",
      "index": 0
    },
    "property2": {
      "description": "string",
      "displayName": "string",
      "index": 0
    }
  },
  "imageBytes": "string",
  "mimeType": "string"
}
```

Image segmentation annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationColors|object|false|none|The mapping between rgb color and annotation spec. The key is the rgb color represented in format of rgb(0, 0, 0). The value is the AnnotationSpec.|
|imageBytes|string(byte)|false|none|A byte string of a full image's color map.|
|mimeType|string|false|none|Image format.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ImportDataOperationMetadata">GoogleCloudDatalabelingV1beta1ImportDataOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1importdataoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ImportDataOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1importdataoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1importdataoperationmetadata"></a>

```json
{
  "createTime": "string",
  "dataset": "string",
  "partialFailures": [
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
  ]
}
```

Metadata of an ImportData operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. Timestamp when import dataset request was created.|
|dataset|string|false|none|Output only. The name of imported dataset. "projects/*/datasets/*"|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ImportDataOperationResponse">GoogleCloudDatalabelingV1beta1ImportDataOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1importdataoperationresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ImportDataOperationResponse"></a>
<a id="tocSgoogleclouddatalabelingv1beta1importdataoperationresponse"></a>
<a id="tocsgoogleclouddatalabelingv1beta1importdataoperationresponse"></a>

```json
{
  "dataset": "string",
  "importCount": 0,
  "totalCount": 0
}
```

Response used for ImportData longrunning operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|string|false|none|Ouptut only. The name of imported dataset.|
|importCount|integer(int32)|false|none|Output only. Number of examples imported successfully.|
|totalCount|integer(int32)|false|none|Output only. Total number of examples requested to import|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ImportDataRequest">GoogleCloudDatalabelingV1beta1ImportDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1importdatarequest"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ImportDataRequest"></a>
<a id="tocSgoogleclouddatalabelingv1beta1importdatarequest"></a>
<a id="tocsgoogleclouddatalabelingv1beta1importdatarequest"></a>

```json
{
  "inputConfig": {
    "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
    "bigquerySource": {
      "inputUri": "string"
    },
    "classificationMetadata": {
      "isMultiLabel": true
    },
    "dataType": "DATA_TYPE_UNSPECIFIED",
    "gcsSource": {
      "inputUri": "string",
      "mimeType": "string"
    },
    "textMetadata": {
      "languageCode": "string"
    }
  },
  "userEmailAddress": "string"
}
```

Request message for ImportData API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputConfig|[GoogleCloudDatalabelingV1beta1InputConfig](#schemagoogleclouddatalabelingv1beta1inputconfig)|false|none|Required. Specify the input source of the data.|
|userEmailAddress|string|false|none|Email of the user who started the import task and should be notified by email. If empty no notification will be sent.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1InputConfig">GoogleCloudDatalabelingV1beta1InputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1inputconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1InputConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1inputconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1inputconfig"></a>

```json
{
  "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
  "bigquerySource": {
    "inputUri": "string"
  },
  "classificationMetadata": {
    "isMultiLabel": true
  },
  "dataType": "DATA_TYPE_UNSPECIFIED",
  "gcsSource": {
    "inputUri": "string",
    "mimeType": "string"
  },
  "textMetadata": {
    "languageCode": "string"
  }
}
```

The configuration of input data, including data type, location, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationType|string|false|none|Optional. The type of annotation to be performed on this data. You must specify this field if you are using this InputConfig in an EvaluationJob.|
|bigquerySource|[GoogleCloudDatalabelingV1beta1BigQuerySource](#schemagoogleclouddatalabelingv1beta1bigquerysource)|false|none|Source located in BigQuery. You must specify this field if you are using this InputConfig in an EvaluationJob.|
|classificationMetadata|[GoogleCloudDatalabelingV1beta1ClassificationMetadata](#schemagoogleclouddatalabelingv1beta1classificationmetadata)|false|none|Optional. Metadata about annotations for the input. You must specify this field if you are using this InputConfig in an EvaluationJob for a model version that performs classification.|
|dataType|string|false|none|Required. Data type must be specifed when user tries to import data.|
|gcsSource|[GoogleCloudDatalabelingV1beta1GcsSource](#schemagoogleclouddatalabelingv1beta1gcssource)|false|none|Source located in Cloud Storage.|
|textMetadata|[GoogleCloudDatalabelingV1beta1TextMetadata](#schemagoogleclouddatalabelingv1beta1textmetadata)|false|none|Required for text import, as language code must be specified.|

#### Enumerated Values

|Property|Value|
|---|---|
|annotationType|ANNOTATION_TYPE_UNSPECIFIED|
|annotationType|IMAGE_CLASSIFICATION_ANNOTATION|
|annotationType|IMAGE_BOUNDING_BOX_ANNOTATION|
|annotationType|IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION|
|annotationType|IMAGE_BOUNDING_POLY_ANNOTATION|
|annotationType|IMAGE_POLYLINE_ANNOTATION|
|annotationType|IMAGE_SEGMENTATION_ANNOTATION|
|annotationType|VIDEO_SHOTS_CLASSIFICATION_ANNOTATION|
|annotationType|VIDEO_OBJECT_TRACKING_ANNOTATION|
|annotationType|VIDEO_OBJECT_DETECTION_ANNOTATION|
|annotationType|VIDEO_EVENT_ANNOTATION|
|annotationType|TEXT_CLASSIFICATION_ANNOTATION|
|annotationType|TEXT_ENTITY_EXTRACTION_ANNOTATION|
|annotationType|GENERAL_CLASSIFICATION_ANNOTATION|
|dataType|DATA_TYPE_UNSPECIFIED|
|dataType|IMAGE|
|dataType|VIDEO|
|dataType|TEXT|
|dataType|GENERAL_DATA|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1Instruction">GoogleCloudDatalabelingV1beta1Instruction</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1instruction"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1Instruction"></a>
<a id="tocSgoogleclouddatalabelingv1beta1instruction"></a>
<a id="tocsgoogleclouddatalabelingv1beta1instruction"></a>

```json
{
  "blockingResources": [
    "string"
  ],
  "createTime": "string",
  "csvInstruction": {
    "gcsFileUri": "string"
  },
  "dataType": "DATA_TYPE_UNSPECIFIED",
  "description": "string",
  "displayName": "string",
  "name": "string",
  "pdfInstruction": {
    "gcsFileUri": "string"
  },
  "updateTime": "string"
}
```

Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockingResources|[string]|false|none|Output only. The names of any related resources that are blocking changes to the instruction.|
|createTime|string(google-datetime)|false|none|Output only. Creation time of instruction.|
|csvInstruction|[GoogleCloudDatalabelingV1beta1CsvInstruction](#schemagoogleclouddatalabelingv1beta1csvinstruction)|false|none|Deprecated: this instruction format is not supported any more. Instruction from a CSV file, such as for classification task. The CSV file should have exact two columns, in the following format: * The first column is labeled data, such as an image reference, text. * The second column is comma separated labels associated with data.|
|dataType|string|false|none|Required. The data type of this instruction.|
|description|string|false|none|Optional. User-provided description of the instruction. The description can be up to 10000 characters long.|
|displayName|string|false|none|Required. The display name of the instruction. Maximum of 64 characters.|
|name|string|false|none|Output only. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id}|
|pdfInstruction|[GoogleCloudDatalabelingV1beta1PdfInstruction](#schemagoogleclouddatalabelingv1beta1pdfinstruction)|false|none|Instruction from a PDF document. The PDF should be in a Cloud Storage bucket.|
|updateTime|string(google-datetime)|false|none|Output only. Last update time of instruction.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataType|DATA_TYPE_UNSPECIFIED|
|dataType|IMAGE|
|dataType|VIDEO|
|dataType|TEXT|
|dataType|GENERAL_DATA|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata">GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labelimageboundingboxoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labelimageboundingboxoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labelimageboundingboxoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelImageBoundingBox operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata">GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labelimageboundingpolyoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labelimageboundingpolyoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labelimageboundingpolyoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of LabelImageBoundingPoly operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata">GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labelimageclassificationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labelimageclassificationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labelimageclassificationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Metadata of a LabelImageClassification operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata">GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labelimageorientedboundingboxoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labelimageorientedboundingboxoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labelimageorientedboundingboxoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelImageOrientedBoundingBox operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Basic human annotation config.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata">GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labelimagepolylineoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labelimagepolylineoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labelimagepolylineoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of LabelImagePolyline operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelImageRequest">GoogleCloudDatalabelingV1beta1LabelImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labelimagerequest"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelImageRequest"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labelimagerequest"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labelimagerequest"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  },
  "boundingPolyConfig": {
    "annotationSpecSet": "string",
    "instructionMessage": "string"
  },
  "feature": "FEATURE_UNSPECIFIED",
  "imageClassificationConfig": {
    "allowMultiLabel": true,
    "annotationSpecSet": "string",
    "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
  },
  "polylineConfig": {
    "annotationSpecSet": "string",
    "instructionMessage": "string"
  },
  "segmentationConfig": {
    "annotationSpecSet": "string",
    "instructionMessage": "string"
  }
}
```

Request message for starting an image labeling task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Required. Basic human annotation config.|
|boundingPolyConfig|[GoogleCloudDatalabelingV1beta1BoundingPolyConfig](#schemagoogleclouddatalabelingv1beta1boundingpolyconfig)|false|none|Configuration for bounding box and bounding poly task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.|
|feature|string|false|none|Required. The type of image labeling task.|
|imageClassificationConfig|[GoogleCloudDatalabelingV1beta1ImageClassificationConfig](#schemagoogleclouddatalabelingv1beta1imageclassificationconfig)|false|none|Configuration for image classification task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.|
|polylineConfig|[GoogleCloudDatalabelingV1beta1PolylineConfig](#schemagoogleclouddatalabelingv1beta1polylineconfig)|false|none|Configuration for polyline task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.|
|segmentationConfig|[GoogleCloudDatalabelingV1beta1SegmentationConfig](#schemagoogleclouddatalabelingv1beta1segmentationconfig)|false|none|Configuration for segmentation task. One of image_classification_config, bounding_poly_config, polyline_config and segmentation_config are required.|

#### Enumerated Values

|Property|Value|
|---|---|
|feature|FEATURE_UNSPECIFIED|
|feature|CLASSIFICATION|
|feature|BOUNDING_BOX|
|feature|ORIENTED_BOUNDING_BOX|
|feature|BOUNDING_POLY|
|feature|POLYLINE|
|feature|SEGMENTATION|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata">GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labelimagesegmentationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labelimagesegmentationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labelimagesegmentationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelImageSegmentation operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Basic human annotation config.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelOperationMetadata">GoogleCloudDatalabelingV1beta1LabelOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labeloperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labeloperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labeloperationmetadata"></a>

```json
{
  "annotatedDataset": "string",
  "createTime": "string",
  "dataset": "string",
  "imageBoundingBoxDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageBoundingPolyDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageClassificationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageOrientedBoundingBoxDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imagePolylineDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageSegmentationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "partialFailures": [
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
  "progressPercent": 0,
  "textClassificationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "textEntityExtractionDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoClassificationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoEventDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoObjectDetectionDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoObjectTrackingDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  }
}
```

Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDataset|string|false|none|Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".|
|createTime|string(google-datetime)|false|none|Output only. Timestamp when labeling request was created.|
|dataset|string|false|none|Output only. The name of dataset to be labeled. "projects/*/datasets/*"|
|imageBoundingBoxDetails|[GoogleCloudDatalabelingV1beta1LabelImageBoundingBoxOperationMetadata](#schemagoogleclouddatalabelingv1beta1labelimageboundingboxoperationmetadata)|false|none|Details of label image bounding box operation.|
|imageBoundingPolyDetails|[GoogleCloudDatalabelingV1beta1LabelImageBoundingPolyOperationMetadata](#schemagoogleclouddatalabelingv1beta1labelimageboundingpolyoperationmetadata)|false|none|Details of label image bounding poly operation.|
|imageClassificationDetails|[GoogleCloudDatalabelingV1beta1LabelImageClassificationOperationMetadata](#schemagoogleclouddatalabelingv1beta1labelimageclassificationoperationmetadata)|false|none|Details of label image classification operation.|
|imageOrientedBoundingBoxDetails|[GoogleCloudDatalabelingV1beta1LabelImageOrientedBoundingBoxOperationMetadata](#schemagoogleclouddatalabelingv1beta1labelimageorientedboundingboxoperationmetadata)|false|none|Details of label image oriented bounding box operation.|
|imagePolylineDetails|[GoogleCloudDatalabelingV1beta1LabelImagePolylineOperationMetadata](#schemagoogleclouddatalabelingv1beta1labelimagepolylineoperationmetadata)|false|none|Details of label image polyline operation.|
|imageSegmentationDetails|[GoogleCloudDatalabelingV1beta1LabelImageSegmentationOperationMetadata](#schemagoogleclouddatalabelingv1beta1labelimagesegmentationoperationmetadata)|false|none|Details of label image segmentation operation.|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|
|progressPercent|integer(int32)|false|none|Output only. Progress of label operation. Range: [0, 100].|
|textClassificationDetails|[GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata](#schemagoogleclouddatalabelingv1beta1labeltextclassificationoperationmetadata)|false|none|Details of label text classification operation.|
|textEntityExtractionDetails|[GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata](#schemagoogleclouddatalabelingv1beta1labeltextentityextractionoperationmetadata)|false|none|Details of label text entity extraction operation.|
|videoClassificationDetails|[GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata](#schemagoogleclouddatalabelingv1beta1labelvideoclassificationoperationmetadata)|false|none|Details of label video classification operation.|
|videoEventDetails|[GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata](#schemagoogleclouddatalabelingv1beta1labelvideoeventoperationmetadata)|false|none|Details of label video event operation.|
|videoObjectDetectionDetails|[GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata](#schemagoogleclouddatalabelingv1beta1labelvideoobjectdetectionoperationmetadata)|false|none|Details of label video object detection operation.|
|videoObjectTrackingDetails|[GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata](#schemagoogleclouddatalabelingv1beta1labelvideoobjecttrackingoperationmetadata)|false|none|Details of label video object tracking operation.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelStats">GoogleCloudDatalabelingV1beta1LabelStats</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labelstats"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelStats"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labelstats"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labelstats"></a>

```json
{
  "exampleCount": {
    "property1": "string",
    "property2": "string"
  }
}
```

Statistics about annotation specs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exampleCount|object|false|none|Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata">GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labeltextclassificationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelTextClassificationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labeltextclassificationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labeltextclassificationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelTextClassification operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata">GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labeltextentityextractionoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelTextEntityExtractionOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labeltextentityextractionoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labeltextentityextractionoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelTextEntityExtraction operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelTextRequest">GoogleCloudDatalabelingV1beta1LabelTextRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labeltextrequest"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelTextRequest"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labeltextrequest"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labeltextrequest"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  },
  "feature": "FEATURE_UNSPECIFIED",
  "textClassificationConfig": {
    "allowMultiLabel": true,
    "annotationSpecSet": "string",
    "sentimentConfig": {
      "enableLabelSentimentSelection": true
    }
  },
  "textEntityExtractionConfig": {
    "annotationSpecSet": "string"
  }
}
```

Request message for LabelText.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Required. Basic human annotation config.|
|feature|string|false|none|Required. The type of text labeling task.|
|textClassificationConfig|[GoogleCloudDatalabelingV1beta1TextClassificationConfig](#schemagoogleclouddatalabelingv1beta1textclassificationconfig)|false|none|Configuration for text classification task. One of text_classification_config and text_entity_extraction_config is required.|
|textEntityExtractionConfig|[GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig](#schemagoogleclouddatalabelingv1beta1textentityextractionconfig)|false|none|Configuration for entity extraction task. One of text_classification_config and text_entity_extraction_config is required.|

#### Enumerated Values

|Property|Value|
|---|---|
|feature|FEATURE_UNSPECIFIED|
|feature|TEXT_CLASSIFICATION|
|feature|TEXT_ENTITY_EXTRACTION|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata">GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labelvideoclassificationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelVideoClassificationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labelvideoclassificationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labelvideoclassificationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoClassification operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata">GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labelvideoeventoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelVideoEventOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labelvideoeventoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labelvideoeventoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoEvent operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata">GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labelvideoobjectdetectionoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelVideoObjectDetectionOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labelvideoobjectdetectionoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labelvideoobjectdetectionoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoObjectDetection operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata">GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labelvideoobjecttrackingoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelVideoObjectTrackingOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labelvideoobjecttrackingoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labelvideoobjecttrackingoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoObjectTracking operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1LabelVideoRequest">GoogleCloudDatalabelingV1beta1LabelVideoRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1labelvideorequest"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1LabelVideoRequest"></a>
<a id="tocSgoogleclouddatalabelingv1beta1labelvideorequest"></a>
<a id="tocsgoogleclouddatalabelingv1beta1labelvideorequest"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  },
  "eventConfig": {
    "annotationSpecSets": [
      "string"
    ],
    "clipLength": 0,
    "overlapLength": 0
  },
  "feature": "FEATURE_UNSPECIFIED",
  "objectDetectionConfig": {
    "annotationSpecSet": "string",
    "extractionFrameRate": 0
  },
  "objectTrackingConfig": {
    "annotationSpecSet": "string",
    "clipLength": 0,
    "overlapLength": 0
  },
  "videoClassificationConfig": {
    "annotationSpecSetConfigs": [
      {
        "allowMultiLabel": true,
        "annotationSpecSet": "string"
      }
    ],
    "applyShotDetection": true
  }
}
```

Request message for LabelVideo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1beta1humanannotationconfig)|false|none|Required. Basic human annotation config.|
|eventConfig|[GoogleCloudDatalabelingV1beta1EventConfig](#schemagoogleclouddatalabelingv1beta1eventconfig)|false|none|Configuration for video event task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.|
|feature|string|false|none|Required. The type of video labeling task.|
|objectDetectionConfig|[GoogleCloudDatalabelingV1beta1ObjectDetectionConfig](#schemagoogleclouddatalabelingv1beta1objectdetectionconfig)|false|none|Configuration for video object detection task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.|
|objectTrackingConfig|[GoogleCloudDatalabelingV1beta1ObjectTrackingConfig](#schemagoogleclouddatalabelingv1beta1objecttrackingconfig)|false|none|Configuration for video object tracking task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.|
|videoClassificationConfig|[GoogleCloudDatalabelingV1beta1VideoClassificationConfig](#schemagoogleclouddatalabelingv1beta1videoclassificationconfig)|false|none|Configuration for video classification task. One of video_classification_config, object_detection_config, object_tracking_config and event_config is required.|

#### Enumerated Values

|Property|Value|
|---|---|
|feature|FEATURE_UNSPECIFIED|
|feature|CLASSIFICATION|
|feature|OBJECT_DETECTION|
|feature|OBJECT_TRACKING|
|feature|EVENT|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse">GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1listannotateddatasetsresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse"></a>
<a id="tocSgoogleclouddatalabelingv1beta1listannotateddatasetsresponse"></a>
<a id="tocsgoogleclouddatalabelingv1beta1listannotateddatasetsresponse"></a>

```json
{
  "annotatedDatasets": [
    {
      "annotationSource": "ANNOTATION_SOURCE_UNSPECIFIED",
      "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
      "blockingResources": [
        "string"
      ],
      "completedExampleCount": "string",
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "exampleCount": "string",
      "labelStats": {
        "exampleCount": {
          "property1": "string",
          "property2": "string"
        }
      },
      "metadata": {
        "boundingPolyConfig": {
          "annotationSpecSet": "string",
          "instructionMessage": "string"
        },
        "eventConfig": {
          "annotationSpecSets": [
            "string"
          ],
          "clipLength": 0,
          "overlapLength": 0
        },
        "humanAnnotationConfig": {
          "annotatedDatasetDescription": "string",
          "annotatedDatasetDisplayName": "string",
          "contributorEmails": [
            "string"
          ],
          "instruction": "string",
          "labelGroup": "string",
          "languageCode": "string",
          "questionDuration": "string",
          "replicaCount": 0,
          "userEmailAddress": "string"
        },
        "imageClassificationConfig": {
          "allowMultiLabel": true,
          "annotationSpecSet": "string",
          "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
        },
        "objectDetectionConfig": {
          "annotationSpecSet": "string",
          "extractionFrameRate": 0
        },
        "objectTrackingConfig": {
          "annotationSpecSet": "string",
          "clipLength": 0,
          "overlapLength": 0
        },
        "polylineConfig": {
          "annotationSpecSet": "string",
          "instructionMessage": "string"
        },
        "segmentationConfig": {
          "annotationSpecSet": "string",
          "instructionMessage": "string"
        },
        "textClassificationConfig": {
          "allowMultiLabel": true,
          "annotationSpecSet": "string",
          "sentimentConfig": {
            "enableLabelSentimentSelection": true
          }
        },
        "textEntityExtractionConfig": {
          "annotationSpecSet": "string"
        },
        "videoClassificationConfig": {
          "annotationSpecSetConfigs": [
            {
              "allowMultiLabel": true,
              "annotationSpecSet": "string"
            }
          ],
          "applyShotDetection": true
        }
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Results of listing annotated datasets for a dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDatasets|[[GoogleCloudDatalabelingV1beta1AnnotatedDataset](#schemagoogleclouddatalabelingv1beta1annotateddataset)]|false|none|The list of annotated datasets to return.|
|nextPageToken|string|false|none|A token to retrieve next page of results.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse">GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1listannotationspecsetsresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse"></a>
<a id="tocSgoogleclouddatalabelingv1beta1listannotationspecsetsresponse"></a>
<a id="tocsgoogleclouddatalabelingv1beta1listannotationspecsetsresponse"></a>

```json
{
  "annotationSpecSets": [
    {
      "annotationSpecs": [
        {
          "description": "string",
          "displayName": "string",
          "index": 0
        }
      ],
      "blockingResources": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Results of listing annotation spec set under a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecSets|[[GoogleCloudDatalabelingV1beta1AnnotationSpecSet](#schemagoogleclouddatalabelingv1beta1annotationspecset)]|false|none|The list of annotation spec sets.|
|nextPageToken|string|false|none|A token to retrieve next page of results.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ListDataItemsResponse">GoogleCloudDatalabelingV1beta1ListDataItemsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1listdataitemsresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ListDataItemsResponse"></a>
<a id="tocSgoogleclouddatalabelingv1beta1listdataitemsresponse"></a>
<a id="tocsgoogleclouddatalabelingv1beta1listdataitemsresponse"></a>

```json
{
  "dataItems": [
    {
      "imagePayload": {
        "imageThumbnail": "string",
        "imageUri": "string",
        "mimeType": "string",
        "signedUri": "string"
      },
      "name": "string",
      "textPayload": {
        "textContent": "string"
      },
      "videoPayload": {
        "frameRate": 0,
        "mimeType": "string",
        "signedUri": "string",
        "videoThumbnails": [
          {
            "thumbnail": "string",
            "timeOffset": "string"
          }
        ],
        "videoUri": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Results of listing data items in a dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataItems|[[GoogleCloudDatalabelingV1beta1DataItem](#schemagoogleclouddatalabelingv1beta1dataitem)]|false|none|The list of data items to return.|
|nextPageToken|string|false|none|A token to retrieve next page of results.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ListDatasetsResponse">GoogleCloudDatalabelingV1beta1ListDatasetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1listdatasetsresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ListDatasetsResponse"></a>
<a id="tocSgoogleclouddatalabelingv1beta1listdatasetsresponse"></a>
<a id="tocsgoogleclouddatalabelingv1beta1listdatasetsresponse"></a>

```json
{
  "datasets": [
    {
      "blockingResources": [
        "string"
      ],
      "createTime": "string",
      "dataItemCount": "string",
      "description": "string",
      "displayName": "string",
      "inputConfigs": [
        {
          "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
          "bigquerySource": {
            "inputUri": "string"
          },
          "classificationMetadata": {
            "isMultiLabel": true
          },
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "gcsSource": {
            "inputUri": "string",
            "mimeType": "string"
          },
          "textMetadata": {
            "languageCode": "string"
          }
        }
      ],
      "lastMigrateTime": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Results of listing datasets within a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasets|[[GoogleCloudDatalabelingV1beta1Dataset](#schemagoogleclouddatalabelingv1beta1dataset)]|false|none|The list of datasets to return.|
|nextPageToken|string|false|none|A token to retrieve next page of results.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse">GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1listevaluationjobsresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse"></a>
<a id="tocSgoogleclouddatalabelingv1beta1listevaluationjobsresponse"></a>
<a id="tocsgoogleclouddatalabelingv1beta1listevaluationjobsresponse"></a>

```json
{
  "evaluationJobs": [
    {
      "annotationSpecSet": "string",
      "attempts": [
        {
          "attemptTime": "string",
          "partialFailures": [
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
          ]
        }
      ],
      "createTime": "string",
      "description": "string",
      "evaluationJobConfig": {
        "bigqueryImportKeys": {
          "property1": "string",
          "property2": "string"
        },
        "boundingPolyConfig": {
          "annotationSpecSet": "string",
          "instructionMessage": "string"
        },
        "evaluationConfig": {
          "boundingBoxEvaluationOptions": {
            "iouThreshold": 0
          }
        },
        "evaluationJobAlertConfig": {
          "email": "string",
          "minAcceptableMeanAveragePrecision": 0
        },
        "exampleCount": 0,
        "exampleSamplePercentage": 0,
        "humanAnnotationConfig": {
          "annotatedDatasetDescription": "string",
          "annotatedDatasetDisplayName": "string",
          "contributorEmails": [
            "string"
          ],
          "instruction": "string",
          "labelGroup": "string",
          "languageCode": "string",
          "questionDuration": "string",
          "replicaCount": 0,
          "userEmailAddress": "string"
        },
        "imageClassificationConfig": {
          "allowMultiLabel": true,
          "annotationSpecSet": "string",
          "answerAggregationType": "STRING_AGGREGATION_TYPE_UNSPECIFIED"
        },
        "inputConfig": {
          "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
          "bigquerySource": {
            "inputUri": "string"
          },
          "classificationMetadata": {
            "isMultiLabel": true
          },
          "dataType": "DATA_TYPE_UNSPECIFIED",
          "gcsSource": {
            "inputUri": "string",
            "mimeType": "string"
          },
          "textMetadata": {
            "languageCode": "string"
          }
        },
        "textClassificationConfig": {
          "allowMultiLabel": true,
          "annotationSpecSet": "string",
          "sentimentConfig": {
            "enableLabelSentimentSelection": true
          }
        }
      },
      "labelMissingGroundTruth": true,
      "modelVersion": "string",
      "name": "string",
      "schedule": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Results for listing evaluation jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluationJobs|[[GoogleCloudDatalabelingV1beta1EvaluationJob](#schemagoogleclouddatalabelingv1beta1evaluationjob)]|false|none|The list of evaluation jobs to return.|
|nextPageToken|string|false|none|A token to retrieve next page of results.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ListExamplesResponse">GoogleCloudDatalabelingV1beta1ListExamplesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1listexamplesresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ListExamplesResponse"></a>
<a id="tocSgoogleclouddatalabelingv1beta1listexamplesresponse"></a>
<a id="tocsgoogleclouddatalabelingv1beta1listexamplesresponse"></a>

```json
{
  "examples": [
    {
      "annotations": [
        {
          "annotationMetadata": {
            "operatorMetadata": {
              "comments": [
                "string"
              ],
              "labelVotes": 0,
              "score": 0,
              "totalVotes": 0
            }
          },
          "annotationSentiment": "ANNOTATION_SENTIMENT_UNSPECIFIED",
          "annotationSource": "ANNOTATION_SOURCE_UNSPECIFIED",
          "annotationValue": {
            "imageBoundingPolyAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "boundingPoly": {
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "normalizedBoundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              }
            },
            "imageClassificationAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              }
            },
            "imagePolylineAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "normalizedPolyline": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "polyline": {
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              }
            },
            "imageSegmentationAnnotation": {
              "annotationColors": {
                "property1": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "property2": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                }
              },
              "imageBytes": "string",
              "mimeType": "string"
            },
            "textClassificationAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              }
            },
            "textEntityExtractionAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "sequentialSegment": {
                "end": 0,
                "start": 0
              }
            },
            "videoClassificationAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "timeSegment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            },
            "videoEventAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "timeSegment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            },
            "videoObjectTrackingAnnotation": {
              "annotationSpec": {
                "description": "string",
                "displayName": "string",
                "index": 0
              },
              "objectTrackingFrames": [
                {
                  "boundingPoly": {
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "normalizedBoundingPoly": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "timeOffset": "string"
                }
              ],
              "timeSegment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          },
          "name": "string"
        }
      ],
      "imagePayload": {
        "imageThumbnail": "string",
        "imageUri": "string",
        "mimeType": "string",
        "signedUri": "string"
      },
      "name": "string",
      "textPayload": {
        "textContent": "string"
      },
      "videoPayload": {
        "frameRate": 0,
        "mimeType": "string",
        "signedUri": "string",
        "videoThumbnails": [
          {
            "thumbnail": "string",
            "timeOffset": "string"
          }
        ],
        "videoUri": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Results of listing Examples in and annotated dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|examples|[[GoogleCloudDatalabelingV1beta1Example](#schemagoogleclouddatalabelingv1beta1example)]|false|none|The list of examples to return.|
|nextPageToken|string|false|none|A token to retrieve next page of results.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse">GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1listfeedbackmessagesresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse"></a>
<a id="tocSgoogleclouddatalabelingv1beta1listfeedbackmessagesresponse"></a>
<a id="tocsgoogleclouddatalabelingv1beta1listfeedbackmessagesresponse"></a>

```json
{
  "feedbackMessages": [
    {
      "body": "string",
      "createTime": "string",
      "image": "string",
      "name": "string",
      "operatorFeedbackMetadata": {},
      "requesterFeedbackMetadata": {}
    }
  ],
  "nextPageToken": "string"
}
```

Results for listing FeedbackMessages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feedbackMessages|[[GoogleCloudDatalabelingV1beta1FeedbackMessage](#schemagoogleclouddatalabelingv1beta1feedbackmessage)]|false|none|The list of feedback messages to return.|
|nextPageToken|string|false|none|A token to retrieve next page of results.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse">GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1listfeedbackthreadsresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse"></a>
<a id="tocSgoogleclouddatalabelingv1beta1listfeedbackthreadsresponse"></a>
<a id="tocsgoogleclouddatalabelingv1beta1listfeedbackthreadsresponse"></a>

```json
{
  "feedbackThreads": [
    {
      "feedbackThreadMetadata": {
        "createTime": "string",
        "lastUpdateTime": "string",
        "status": "FEEDBACK_THREAD_STATUS_UNSPECIFIED",
        "thumbnail": "string"
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Results for listing FeedbackThreads.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feedbackThreads|[[GoogleCloudDatalabelingV1beta1FeedbackThread](#schemagoogleclouddatalabelingv1beta1feedbackthread)]|false|none|The list of feedback threads to return.|
|nextPageToken|string|false|none|A token to retrieve next page of results.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ListInstructionsResponse">GoogleCloudDatalabelingV1beta1ListInstructionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1listinstructionsresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ListInstructionsResponse"></a>
<a id="tocSgoogleclouddatalabelingv1beta1listinstructionsresponse"></a>
<a id="tocsgoogleclouddatalabelingv1beta1listinstructionsresponse"></a>

```json
{
  "instructions": [
    {
      "blockingResources": [
        "string"
      ],
      "createTime": "string",
      "csvInstruction": {
        "gcsFileUri": "string"
      },
      "dataType": "DATA_TYPE_UNSPECIFIED",
      "description": "string",
      "displayName": "string",
      "name": "string",
      "pdfInstruction": {
        "gcsFileUri": "string"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Results of listing instructions under a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instructions|[[GoogleCloudDatalabelingV1beta1Instruction](#schemagoogleclouddatalabelingv1beta1instruction)]|false|none|The list of Instructions to return.|
|nextPageToken|string|false|none|A token to retrieve next page of results.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly">GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1normalizedboundingpoly"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly"></a>
<a id="tocSgoogleclouddatalabelingv1beta1normalizedboundingpoly"></a>
<a id="tocsgoogleclouddatalabelingv1beta1normalizedboundingpoly"></a>

```json
{
  "normalizedVertices": [
    {
      "x": 0,
      "y": 0
    }
  ]
}
```

Normalized bounding polygon.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedVertices|[[GoogleCloudDatalabelingV1beta1NormalizedVertex](#schemagoogleclouddatalabelingv1beta1normalizedvertex)]|false|none|The bounding polygon normalized vertices.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1NormalizedPolyline">GoogleCloudDatalabelingV1beta1NormalizedPolyline</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1normalizedpolyline"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1NormalizedPolyline"></a>
<a id="tocSgoogleclouddatalabelingv1beta1normalizedpolyline"></a>
<a id="tocsgoogleclouddatalabelingv1beta1normalizedpolyline"></a>

```json
{
  "normalizedVertices": [
    {
      "x": 0,
      "y": 0
    }
  ]
}
```

Normalized polyline.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedVertices|[[GoogleCloudDatalabelingV1beta1NormalizedVertex](#schemagoogleclouddatalabelingv1beta1normalizedvertex)]|false|none|The normalized polyline vertices.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1NormalizedVertex">GoogleCloudDatalabelingV1beta1NormalizedVertex</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1normalizedvertex"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1NormalizedVertex"></a>
<a id="tocSgoogleclouddatalabelingv1beta1normalizedvertex"></a>
<a id="tocsgoogleclouddatalabelingv1beta1normalizedvertex"></a>

```json
{
  "x": 0,
  "y": 0
}
```

A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number(float)|false|none|X coordinate.|
|y|number(float)|false|none|Y coordinate.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ObjectDetectionConfig">GoogleCloudDatalabelingV1beta1ObjectDetectionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1objectdetectionconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ObjectDetectionConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1objectdetectionconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1objectdetectionconfig"></a>

```json
{
  "annotationSpecSet": "string",
  "extractionFrameRate": 0
}
```

Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecSet|string|false|none|Required. Annotation spec set resource name.|
|extractionFrameRate|number(double)|false|none|Required. Number of frames per second to be extracted from the video.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics">GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1objectdetectionmetrics"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics"></a>
<a id="tocSgoogleclouddatalabelingv1beta1objectdetectionmetrics"></a>
<a id="tocsgoogleclouddatalabelingv1beta1objectdetectionmetrics"></a>

```json
{
  "prCurve": {
    "annotationSpec": {
      "description": "string",
      "displayName": "string",
      "index": 0
    },
    "areaUnderCurve": 0,
    "confidenceMetricsEntries": [
      {
        "confidenceThreshold": 0,
        "f1Score": 0,
        "f1ScoreAt1": 0,
        "f1ScoreAt5": 0,
        "precision": 0,
        "precisionAt1": 0,
        "precisionAt5": 0,
        "recall": 0,
        "recallAt1": 0,
        "recallAt5": 0
      }
    ],
    "meanAveragePrecision": 0
  }
}
```

Metrics calculated for an image object detection (bounding box) model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prCurve|[GoogleCloudDatalabelingV1beta1PrCurve](#schemagoogleclouddatalabelingv1beta1prcurve)|false|none|Precision-recall curve.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ObjectTrackingConfig">GoogleCloudDatalabelingV1beta1ObjectTrackingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1objecttrackingconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ObjectTrackingConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1objecttrackingconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1objecttrackingconfig"></a>

```json
{
  "annotationSpecSet": "string",
  "clipLength": 0,
  "overlapLength": 0
}
```

Config for video object tracking human labeling task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecSet|string|false|none|Required. Annotation spec set resource name.|
|clipLength|integer(int32)|false|none|Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 20s.|
|overlapLength|integer(int32)|false|none|The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 0.3s.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ObjectTrackingFrame">GoogleCloudDatalabelingV1beta1ObjectTrackingFrame</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1objecttrackingframe"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ObjectTrackingFrame"></a>
<a id="tocSgoogleclouddatalabelingv1beta1objecttrackingframe"></a>
<a id="tocsgoogleclouddatalabelingv1beta1objecttrackingframe"></a>

```json
{
  "boundingPoly": {
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "normalizedBoundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "timeOffset": "string"
}
```

Video frame level annotation for object detection and tracking.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudDatalabelingV1beta1BoundingPoly](#schemagoogleclouddatalabelingv1beta1boundingpoly)|false|none|A bounding polygon in the image.|
|normalizedBoundingPoly|[GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly](#schemagoogleclouddatalabelingv1beta1normalizedboundingpoly)|false|none|Normalized bounding polygon.|
|timeOffset|string(google-duration)|false|none|The time offset of this frame relative to the beginning of the video.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata">GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1operatorfeedbackmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1OperatorFeedbackMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1operatorfeedbackmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1operatorfeedbackmetadata"></a>

```json
{}
```

Metadata describing the feedback from the operator.

<h2 id="tocS_GoogleCloudDatalabelingV1beta1OperatorMetadata">GoogleCloudDatalabelingV1beta1OperatorMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1operatormetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1OperatorMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1operatormetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1operatormetadata"></a>

```json
{
  "comments": [
    "string"
  ],
  "labelVotes": 0,
  "score": 0,
  "totalVotes": 0
}
```

General information useful for labels coming from contributors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|[string]|false|none|Comments from contributors.|
|labelVotes|integer(int32)|false|none|The total number of contributors that choose this label.|
|score|number(float)|false|none|Confidence score corresponding to a label. For examle, if 3 contributors have answered the question and 2 of them agree on the final label, the confidence score will be 0.67 (2/3).|
|totalVotes|integer(int32)|false|none|The total number of contributors that answer this question.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1OutputConfig">GoogleCloudDatalabelingV1beta1OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1outputconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1OutputConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1outputconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1outputconfig"></a>

```json
{
  "gcsDestination": {
    "mimeType": "string",
    "outputUri": "string"
  },
  "gcsFolderDestination": {
    "outputFolderUri": "string"
  }
}
```

The configuration of output data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsDestination|[GoogleCloudDatalabelingV1beta1GcsDestination](#schemagoogleclouddatalabelingv1beta1gcsdestination)|false|none|Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation.|
|gcsFolderDestination|[GoogleCloudDatalabelingV1beta1GcsFolderDestination](#schemagoogleclouddatalabelingv1beta1gcsfolderdestination)|false|none|Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest">GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1pauseevaluationjobrequest"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1PauseEvaluationJobRequest"></a>
<a id="tocSgoogleclouddatalabelingv1beta1pauseevaluationjobrequest"></a>
<a id="tocsgoogleclouddatalabelingv1beta1pauseevaluationjobrequest"></a>

```json
{}
```

Request message for PauseEvaluationJob.

<h2 id="tocS_GoogleCloudDatalabelingV1beta1PdfInstruction">GoogleCloudDatalabelingV1beta1PdfInstruction</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1pdfinstruction"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1PdfInstruction"></a>
<a id="tocSgoogleclouddatalabelingv1beta1pdfinstruction"></a>
<a id="tocsgoogleclouddatalabelingv1beta1pdfinstruction"></a>

```json
{
  "gcsFileUri": "string"
}
```

Instruction from a PDF file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsFileUri|string|false|none|PDF file for the instruction. Only gcs path is allowed.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1Polyline">GoogleCloudDatalabelingV1beta1Polyline</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1polyline"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1Polyline"></a>
<a id="tocSgoogleclouddatalabelingv1beta1polyline"></a>
<a id="tocsgoogleclouddatalabelingv1beta1polyline"></a>

```json
{
  "vertices": [
    {
      "x": 0,
      "y": 0
    }
  ]
}
```

A line with multiple line segments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vertices|[[GoogleCloudDatalabelingV1beta1Vertex](#schemagoogleclouddatalabelingv1beta1vertex)]|false|none|The polyline vertices.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1PolylineConfig">GoogleCloudDatalabelingV1beta1PolylineConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1polylineconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1PolylineConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1polylineconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1polylineconfig"></a>

```json
{
  "annotationSpecSet": "string",
  "instructionMessage": "string"
}
```

Config for image polyline human labeling task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecSet|string|false|none|Required. Annotation spec set resource name.|
|instructionMessage|string|false|none|Optional. Instruction message showed on contributors UI.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1PrCurve">GoogleCloudDatalabelingV1beta1PrCurve</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1prcurve"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1PrCurve"></a>
<a id="tocSgoogleclouddatalabelingv1beta1prcurve"></a>
<a id="tocsgoogleclouddatalabelingv1beta1prcurve"></a>

```json
{
  "annotationSpec": {
    "description": "string",
    "displayName": "string",
    "index": 0
  },
  "areaUnderCurve": 0,
  "confidenceMetricsEntries": [
    {
      "confidenceThreshold": 0,
      "f1Score": 0,
      "f1ScoreAt1": 0,
      "f1ScoreAt5": 0,
      "precision": 0,
      "precisionAt1": 0,
      "precisionAt5": 0,
      "recall": 0,
      "recallAt1": 0,
      "recallAt5": 0
    }
  ],
  "meanAveragePrecision": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpec|[GoogleCloudDatalabelingV1beta1AnnotationSpec](#schemagoogleclouddatalabelingv1beta1annotationspec)|false|none|The annotation spec of the label for which the precision-recall curve calculated. If this field is empty, that means the precision-recall curve is an aggregate curve for all labels.|
|areaUnderCurve|number(float)|false|none|Area under the precision-recall curve. Not to be confused with area under a receiver operating characteristic (ROC) curve.|
|confidenceMetricsEntries|[[GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry](#schemagoogleclouddatalabelingv1beta1confidencemetricsentry)]|false|none|Entries that make up the precision-recall graph. Each entry is a "point" on the graph drawn for a different `confidence_threshold`.|
|meanAveragePrecision|number(float)|false|none|Mean average prcision of this curve.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata">GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1requesterfeedbackmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1RequesterFeedbackMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1requesterfeedbackmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1requesterfeedbackmetadata"></a>

```json
{}
```

Metadata describing the feedback from the labeling task requester.

<h2 id="tocS_GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest">GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1resumeevaluationjobrequest"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1ResumeEvaluationJobRequest"></a>
<a id="tocSgoogleclouddatalabelingv1beta1resumeevaluationjobrequest"></a>
<a id="tocsgoogleclouddatalabelingv1beta1resumeevaluationjobrequest"></a>

```json
{}
```

Request message ResumeEvaluationJob.

<h2 id="tocS_GoogleCloudDatalabelingV1beta1Row">GoogleCloudDatalabelingV1beta1Row</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1row"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1Row"></a>
<a id="tocSgoogleclouddatalabelingv1beta1row"></a>
<a id="tocsgoogleclouddatalabelingv1beta1row"></a>

```json
{
  "annotationSpec": {
    "description": "string",
    "displayName": "string",
    "index": 0
  },
  "entries": [
    {
      "annotationSpec": {
        "description": "string",
        "displayName": "string",
        "index": 0
      },
      "itemCount": 0
    }
  ]
}
```

A row in the confusion matrix. Each entry in this row has the same ground truth label.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpec|[GoogleCloudDatalabelingV1beta1AnnotationSpec](#schemagoogleclouddatalabelingv1beta1annotationspec)|false|none|The annotation spec of the ground truth label for this row.|
|entries|[[GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry](#schemagoogleclouddatalabelingv1beta1confusionmatrixentry)]|false|none|A list of the confusion matrix entries. One entry for each possible predicted label.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse">GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1searchevaluationsresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse"></a>
<a id="tocSgoogleclouddatalabelingv1beta1searchevaluationsresponse"></a>
<a id="tocsgoogleclouddatalabelingv1beta1searchevaluationsresponse"></a>

```json
{
  "evaluations": [
    {
      "annotationType": "ANNOTATION_TYPE_UNSPECIFIED",
      "config": {
        "boundingBoxEvaluationOptions": {
          "iouThreshold": 0
        }
      },
      "createTime": "string",
      "evaluatedItemCount": "string",
      "evaluationJobRunTime": "string",
      "evaluationMetrics": {
        "classificationMetrics": {
          "confusionMatrix": {
            "row": [
              {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "entries": [
                  {
                    "annotationSpec": {
                      "description": "string",
                      "displayName": "string",
                      "index": 0
                    },
                    "itemCount": 0
                  }
                ]
              }
            ]
          },
          "prCurve": {
            "annotationSpec": {
              "description": "string",
              "displayName": "string",
              "index": 0
            },
            "areaUnderCurve": 0,
            "confidenceMetricsEntries": [
              {
                "confidenceThreshold": 0,
                "f1Score": 0,
                "f1ScoreAt1": 0,
                "f1ScoreAt5": 0,
                "precision": 0,
                "precisionAt1": 0,
                "precisionAt5": 0,
                "recall": 0,
                "recallAt1": 0,
                "recallAt5": 0
              }
            ],
            "meanAveragePrecision": 0
          }
        },
        "objectDetectionMetrics": {
          "prCurve": {
            "annotationSpec": {
              "description": "string",
              "displayName": "string",
              "index": 0
            },
            "areaUnderCurve": 0,
            "confidenceMetricsEntries": [
              {
                "confidenceThreshold": 0,
                "f1Score": 0,
                "f1ScoreAt1": 0,
                "f1ScoreAt5": 0,
                "precision": 0,
                "precisionAt1": 0,
                "precisionAt5": 0,
                "recall": 0,
                "recallAt1": 0,
                "recallAt5": 0
              }
            ],
            "meanAveragePrecision": 0
          }
        }
      },
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Results of searching evaluations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evaluations|[[GoogleCloudDatalabelingV1beta1Evaluation](#schemagoogleclouddatalabelingv1beta1evaluation)]|false|none|The list of evaluations matching the search.|
|nextPageToken|string|false|none|A token to retrieve next page of results.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest">GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1searchexamplecomparisonsrequest"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest"></a>
<a id="tocSgoogleclouddatalabelingv1beta1searchexamplecomparisonsrequest"></a>
<a id="tocsgoogleclouddatalabelingv1beta1searchexamplecomparisonsrequest"></a>

```json
{
  "pageSize": 0,
  "pageToken": "string"
}
```

Request message of SearchExampleComparisons.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageSize|integer(int32)|false|none|Optional. Requested page size. Server may return fewer results than requested. Default value is 100.|
|pageToken|string|false|none|Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search rquest. If you don't specify this field, the API call requests the first page of the search.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse">GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1searchexamplecomparisonsresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse"></a>
<a id="tocSgoogleclouddatalabelingv1beta1searchexamplecomparisonsresponse"></a>
<a id="tocsgoogleclouddatalabelingv1beta1searchexamplecomparisonsresponse"></a>

```json
{
  "exampleComparisons": [
    {
      "groundTruthExample": {
        "annotations": [
          {
            "annotationMetadata": {
              "operatorMetadata": {
                "comments": [
                  "string"
                ],
                "labelVotes": 0,
                "score": 0,
                "totalVotes": 0
              }
            },
            "annotationSentiment": "ANNOTATION_SENTIMENT_UNSPECIFIED",
            "annotationSource": "ANNOTATION_SOURCE_UNSPECIFIED",
            "annotationValue": {
              "imageBoundingPolyAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "boundingPoly": {
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "normalizedBoundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                }
              },
              "imageClassificationAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                }
              },
              "imagePolylineAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "normalizedPolyline": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "polyline": {
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                }
              },
              "imageSegmentationAnnotation": {
                "annotationColors": {
                  "property1": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  },
                  "property2": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  }
                },
                "imageBytes": "string",
                "mimeType": "string"
              },
              "textClassificationAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                }
              },
              "textEntityExtractionAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "sequentialSegment": {
                  "end": 0,
                  "start": 0
                }
              },
              "videoClassificationAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "timeSegment": {
                  "endTimeOffset": "string",
                  "startTimeOffset": "string"
                }
              },
              "videoEventAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "timeSegment": {
                  "endTimeOffset": "string",
                  "startTimeOffset": "string"
                }
              },
              "videoObjectTrackingAnnotation": {
                "annotationSpec": {
                  "description": "string",
                  "displayName": "string",
                  "index": 0
                },
                "objectTrackingFrames": [
                  {
                    "boundingPoly": {
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "normalizedBoundingPoly": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "timeOffset": "string"
                  }
                ],
                "timeSegment": {
                  "endTimeOffset": "string",
                  "startTimeOffset": "string"
                }
              }
            },
            "name": "string"
          }
        ],
        "imagePayload": {
          "imageThumbnail": "string",
          "imageUri": "string",
          "mimeType": "string",
          "signedUri": "string"
        },
        "name": "string",
        "textPayload": {
          "textContent": "string"
        },
        "videoPayload": {
          "frameRate": 0,
          "mimeType": "string",
          "signedUri": "string",
          "videoThumbnails": [
            {
              "thumbnail": "string",
              "timeOffset": "string"
            }
          ],
          "videoUri": "string"
        }
      },
      "modelCreatedExamples": [
        {
          "annotations": [
            {
              "annotationMetadata": {
                "operatorMetadata": {
                  "comments": [
                    "string"
                  ],
                  "labelVotes": 0,
                  "score": 0,
                  "totalVotes": 0
                }
              },
              "annotationSentiment": "ANNOTATION_SENTIMENT_UNSPECIFIED",
              "annotationSource": "ANNOTATION_SOURCE_UNSPECIFIED",
              "annotationValue": {
                "imageBoundingPolyAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  },
                  "boundingPoly": {
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "normalizedBoundingPoly": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  }
                },
                "imageClassificationAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  }
                },
                "imagePolylineAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  },
                  "normalizedPolyline": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "polyline": {
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  }
                },
                "imageSegmentationAnnotation": {
                  "annotationColors": {
                    "property1": {
                      "description": "string",
                      "displayName": "string",
                      "index": 0
                    },
                    "property2": {
                      "description": "string",
                      "displayName": "string",
                      "index": 0
                    }
                  },
                  "imageBytes": "string",
                  "mimeType": "string"
                },
                "textClassificationAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  }
                },
                "textEntityExtractionAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  },
                  "sequentialSegment": {
                    "end": 0,
                    "start": 0
                  }
                },
                "videoClassificationAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  },
                  "timeSegment": {
                    "endTimeOffset": "string",
                    "startTimeOffset": "string"
                  }
                },
                "videoEventAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  },
                  "timeSegment": {
                    "endTimeOffset": "string",
                    "startTimeOffset": "string"
                  }
                },
                "videoObjectTrackingAnnotation": {
                  "annotationSpec": {
                    "description": "string",
                    "displayName": "string",
                    "index": 0
                  },
                  "objectTrackingFrames": [
                    {
                      "boundingPoly": {
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "normalizedBoundingPoly": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "timeOffset": "string"
                    }
                  ],
                  "timeSegment": {
                    "endTimeOffset": "string",
                    "startTimeOffset": "string"
                  }
                }
              },
              "name": "string"
            }
          ],
          "imagePayload": {
            "imageThumbnail": "string",
            "imageUri": "string",
            "mimeType": "string",
            "signedUri": "string"
          },
          "name": "string",
          "textPayload": {
            "textContent": "string"
          },
          "videoPayload": {
            "frameRate": 0,
            "mimeType": "string",
            "signedUri": "string",
            "videoThumbnails": [
              {
                "thumbnail": "string",
                "timeOffset": "string"
              }
            ],
            "videoUri": "string"
          }
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

Results of searching example comparisons.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exampleComparisons|[[GoogleCloudDatalabelingV1beta1ExampleComparison](#schemagoogleclouddatalabelingv1beta1examplecomparison)]|false|none|A list of example comparisons matching the search criteria.|
|nextPageToken|string|false|none|A token to retrieve next page of results.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1SegmentationConfig">GoogleCloudDatalabelingV1beta1SegmentationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1segmentationconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1SegmentationConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1segmentationconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1segmentationconfig"></a>

```json
{
  "annotationSpecSet": "string",
  "instructionMessage": "string"
}
```

Config for image segmentation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecSet|string|false|none|Required. Annotation spec set resource name. format: projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}|
|instructionMessage|string|false|none|Instruction message showed on labelers UI.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1SentimentConfig">GoogleCloudDatalabelingV1beta1SentimentConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1sentimentconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1SentimentConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1sentimentconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1sentimentconfig"></a>

```json
{
  "enableLabelSentimentSelection": true
}
```

Config for setting up sentiments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableLabelSentimentSelection|boolean|false|none|If set to true, contributors will have the option to select sentiment of the label they selected, to mark it as negative or positive label. Default is false.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1SequentialSegment">GoogleCloudDatalabelingV1beta1SequentialSegment</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1sequentialsegment"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1SequentialSegment"></a>
<a id="tocSgoogleclouddatalabelingv1beta1sequentialsegment"></a>
<a id="tocsgoogleclouddatalabelingv1beta1sequentialsegment"></a>

```json
{
  "end": 0,
  "start": 0
}
```

Start and end position in a sequence (e.g. text segment).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer(int32)|false|none|End position (exclusive).|
|start|integer(int32)|false|none|Start position (inclusive).|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1TextClassificationAnnotation">GoogleCloudDatalabelingV1beta1TextClassificationAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1textclassificationannotation"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1TextClassificationAnnotation"></a>
<a id="tocSgoogleclouddatalabelingv1beta1textclassificationannotation"></a>
<a id="tocsgoogleclouddatalabelingv1beta1textclassificationannotation"></a>

```json
{
  "annotationSpec": {
    "description": "string",
    "displayName": "string",
    "index": 0
  }
}
```

Text classification annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpec|[GoogleCloudDatalabelingV1beta1AnnotationSpec](#schemagoogleclouddatalabelingv1beta1annotationspec)|false|none|Label of the text.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1TextClassificationConfig">GoogleCloudDatalabelingV1beta1TextClassificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1textclassificationconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1TextClassificationConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1textclassificationconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1textclassificationconfig"></a>

```json
{
  "allowMultiLabel": true,
  "annotationSpecSet": "string",
  "sentimentConfig": {
    "enableLabelSentimentSelection": true
  }
}
```

Config for text classification human labeling task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowMultiLabel|boolean|false|none|Optional. If allow_multi_label is true, contributors are able to choose multiple labels for one text segment.|
|annotationSpecSet|string|false|none|Required. Annotation spec set resource name.|
|sentimentConfig|[GoogleCloudDatalabelingV1beta1SentimentConfig](#schemagoogleclouddatalabelingv1beta1sentimentconfig)|false|none|Optional. Configs for sentiment selection. We deprecate sentiment analysis in data labeling side as it is incompatible with uCAIP.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation">GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1textentityextractionannotation"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation"></a>
<a id="tocSgoogleclouddatalabelingv1beta1textentityextractionannotation"></a>
<a id="tocsgoogleclouddatalabelingv1beta1textentityextractionannotation"></a>

```json
{
  "annotationSpec": {
    "description": "string",
    "displayName": "string",
    "index": 0
  },
  "sequentialSegment": {
    "end": 0,
    "start": 0
  }
}
```

Text entity extraction annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpec|[GoogleCloudDatalabelingV1beta1AnnotationSpec](#schemagoogleclouddatalabelingv1beta1annotationspec)|false|none|Label of the text entities.|
|sequentialSegment|[GoogleCloudDatalabelingV1beta1SequentialSegment](#schemagoogleclouddatalabelingv1beta1sequentialsegment)|false|none|Position of the entity.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig">GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1textentityextractionconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1textentityextractionconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1textentityextractionconfig"></a>

```json
{
  "annotationSpecSet": "string"
}
```

Config for text entity extraction human labeling task.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecSet|string|false|none|Required. Annotation spec set resource name.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1TextMetadata">GoogleCloudDatalabelingV1beta1TextMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1textmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1TextMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1beta1textmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1beta1textmetadata"></a>

```json
{
  "languageCode": "string"
}
```

Metadata for the text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|The language of this text, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1TextPayload">GoogleCloudDatalabelingV1beta1TextPayload</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1textpayload"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1TextPayload"></a>
<a id="tocSgoogleclouddatalabelingv1beta1textpayload"></a>
<a id="tocsgoogleclouddatalabelingv1beta1textpayload"></a>

```json
{
  "textContent": "string"
}
```

Container of information about a piece of text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|textContent|string|false|none|Text content.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1TimeSegment">GoogleCloudDatalabelingV1beta1TimeSegment</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1timesegment"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1TimeSegment"></a>
<a id="tocSgoogleclouddatalabelingv1beta1timesegment"></a>
<a id="tocsgoogleclouddatalabelingv1beta1timesegment"></a>

```json
{
  "endTimeOffset": "string",
  "startTimeOffset": "string"
}
```

A time period inside of an example that has a time dimension (e.g. video).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTimeOffset|string(google-duration)|false|none|End of the time segment (exclusive), represented as the duration since the example start.|
|startTimeOffset|string(google-duration)|false|none|Start of the time segment (inclusive), represented as the duration since the example start.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1Vertex">GoogleCloudDatalabelingV1beta1Vertex</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1vertex"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1Vertex"></a>
<a id="tocSgoogleclouddatalabelingv1beta1vertex"></a>
<a id="tocsgoogleclouddatalabelingv1beta1vertex"></a>

```json
{
  "x": 0,
  "y": 0
}
```

A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|integer(int32)|false|none|X coordinate.|
|y|integer(int32)|false|none|Y coordinate.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation">GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1videoclassificationannotation"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation"></a>
<a id="tocSgoogleclouddatalabelingv1beta1videoclassificationannotation"></a>
<a id="tocsgoogleclouddatalabelingv1beta1videoclassificationannotation"></a>

```json
{
  "annotationSpec": {
    "description": "string",
    "displayName": "string",
    "index": 0
  },
  "timeSegment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video classification annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpec|[GoogleCloudDatalabelingV1beta1AnnotationSpec](#schemagoogleclouddatalabelingv1beta1annotationspec)|false|none|Label of the segment specified by time_segment.|
|timeSegment|[GoogleCloudDatalabelingV1beta1TimeSegment](#schemagoogleclouddatalabelingv1beta1timesegment)|false|none|The time segment of the video to which the annotation applies.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1VideoClassificationConfig">GoogleCloudDatalabelingV1beta1VideoClassificationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1videoclassificationconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1VideoClassificationConfig"></a>
<a id="tocSgoogleclouddatalabelingv1beta1videoclassificationconfig"></a>
<a id="tocsgoogleclouddatalabelingv1beta1videoclassificationconfig"></a>

```json
{
  "annotationSpecSetConfigs": [
    {
      "allowMultiLabel": true,
      "annotationSpecSet": "string"
    }
  ],
  "applyShotDetection": true
}
```

Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecSetConfigs|[[GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig](#schemagoogleclouddatalabelingv1beta1annotationspecsetconfig)]|false|none|Required. The list of annotation spec set configs. Since watching a video clip takes much longer time than an image, we support label with multiple AnnotationSpecSet at the same time. Labels in each AnnotationSpecSet will be shown in a group to contributors. Contributors can select one or more (depending on whether to allow multi label) from each group.|
|applyShotDetection|boolean|false|none|Optional. Option to apply shot detection on the video.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1VideoEventAnnotation">GoogleCloudDatalabelingV1beta1VideoEventAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1videoeventannotation"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1VideoEventAnnotation"></a>
<a id="tocSgoogleclouddatalabelingv1beta1videoeventannotation"></a>
<a id="tocsgoogleclouddatalabelingv1beta1videoeventannotation"></a>

```json
{
  "annotationSpec": {
    "description": "string",
    "displayName": "string",
    "index": 0
  },
  "timeSegment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video event annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpec|[GoogleCloudDatalabelingV1beta1AnnotationSpec](#schemagoogleclouddatalabelingv1beta1annotationspec)|false|none|Label of the event in this annotation.|
|timeSegment|[GoogleCloudDatalabelingV1beta1TimeSegment](#schemagoogleclouddatalabelingv1beta1timesegment)|false|none|The time segment of the video to which the annotation applies.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation">GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1videoobjecttrackingannotation"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation"></a>
<a id="tocSgoogleclouddatalabelingv1beta1videoobjecttrackingannotation"></a>
<a id="tocsgoogleclouddatalabelingv1beta1videoobjecttrackingannotation"></a>

```json
{
  "annotationSpec": {
    "description": "string",
    "displayName": "string",
    "index": 0
  },
  "objectTrackingFrames": [
    {
      "boundingPoly": {
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "normalizedBoundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "timeOffset": "string"
    }
  ],
  "timeSegment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video object tracking annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpec|[GoogleCloudDatalabelingV1beta1AnnotationSpec](#schemagoogleclouddatalabelingv1beta1annotationspec)|false|none|Label of the object tracked in this annotation.|
|objectTrackingFrames|[[GoogleCloudDatalabelingV1beta1ObjectTrackingFrame](#schemagoogleclouddatalabelingv1beta1objecttrackingframe)]|false|none|The list of frames where this object track appears.|
|timeSegment|[GoogleCloudDatalabelingV1beta1TimeSegment](#schemagoogleclouddatalabelingv1beta1timesegment)|false|none|The time segment of the video to which object tracking applies.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1VideoPayload">GoogleCloudDatalabelingV1beta1VideoPayload</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1videopayload"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1VideoPayload"></a>
<a id="tocSgoogleclouddatalabelingv1beta1videopayload"></a>
<a id="tocsgoogleclouddatalabelingv1beta1videopayload"></a>

```json
{
  "frameRate": 0,
  "mimeType": "string",
  "signedUri": "string",
  "videoThumbnails": [
    {
      "thumbnail": "string",
      "timeOffset": "string"
    }
  ],
  "videoUri": "string"
}
```

Container of information of a video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frameRate|number(float)|false|none|FPS of the video.|
|mimeType|string|false|none|Video format.|
|signedUri|string|false|none|Signed uri of the video file in the service bucket.|
|videoThumbnails|[[GoogleCloudDatalabelingV1beta1VideoThumbnail](#schemagoogleclouddatalabelingv1beta1videothumbnail)]|false|none|The list of video thumbnails.|
|videoUri|string|false|none|Video uri from the user bucket.|

<h2 id="tocS_GoogleCloudDatalabelingV1beta1VideoThumbnail">GoogleCloudDatalabelingV1beta1VideoThumbnail</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1beta1videothumbnail"></a>
<a id="schema_GoogleCloudDatalabelingV1beta1VideoThumbnail"></a>
<a id="tocSgoogleclouddatalabelingv1beta1videothumbnail"></a>
<a id="tocsgoogleclouddatalabelingv1beta1videothumbnail"></a>

```json
{
  "thumbnail": "string",
  "timeOffset": "string"
}
```

Container of information of a video thumbnail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thumbnail|string(byte)|false|none|A byte string of the video frame.|
|timeOffset|string(google-duration)|false|none|Time offset relative to the beginning of the video, corresponding to the video frame where the thumbnail has been extracted from.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadata">GoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1createinstructionmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1CreateInstructionMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1createinstructionmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1createinstructionmetadata"></a>

```json
{
  "createTime": "string",
  "instruction": "string",
  "partialFailures": [
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
  ]
}
```

Metadata of a CreateInstruction operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Timestamp when create instruction request was created.|
|instruction|string|false|none|The name of the created Instruction. projects/{project_id}/instructions/{instruction_id}|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata">GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1exportdataoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1exportdataoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1exportdataoperationmetadata"></a>

```json
{
  "annotatedDataset": "string",
  "createTime": "string",
  "dataset": "string",
  "partialFailures": [
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
  ]
}
```

Metadata of an ExportData operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDataset|string|false|none|Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".|
|createTime|string(google-datetime)|false|none|Output only. Timestamp when export dataset request was created.|
|dataset|string|false|none|Output only. The name of dataset to be exported. "projects/*/datasets/*"|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponse">GoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1exportdataoperationresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1ExportDataOperationResponse"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1exportdataoperationresponse"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1exportdataoperationresponse"></a>

```json
{
  "annotatedDataset": "string",
  "dataset": "string",
  "exportCount": 0,
  "labelStats": {
    "exampleCount": {
      "property1": "string",
      "property2": "string"
    }
  },
  "outputConfig": {
    "gcsDestination": {
      "mimeType": "string",
      "outputUri": "string"
    },
    "gcsFolderDestination": {
      "outputFolderUri": "string"
    }
  },
  "totalCount": 0
}
```

Response used for ExportDataset longrunning operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDataset|string|false|none|Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".|
|dataset|string|false|none|Ouptut only. The name of dataset. "projects/*/datasets/*"|
|exportCount|integer(int32)|false|none|Output only. Number of examples exported successfully.|
|labelStats|[GoogleCloudDatalabelingV1p1alpha1LabelStats](#schemagoogleclouddatalabelingv1p1alpha1labelstats)|false|none|Output only. Statistic infos of labels in the exported dataset.|
|outputConfig|[GoogleCloudDatalabelingV1p1alpha1OutputConfig](#schemagoogleclouddatalabelingv1p1alpha1outputconfig)|false|none|Output only. output_config in the ExportData request.|
|totalCount|integer(int32)|false|none|Output only. Total number of examples requested to export|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1GcsDestination">GoogleCloudDatalabelingV1p1alpha1GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1gcsdestination"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1GcsDestination"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1gcsdestination"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1gcsdestination"></a>

```json
{
  "mimeType": "string",
  "outputUri": "string"
}
```

Export destination of the data.Only gcs path is allowed in output_uri.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mimeType|string|false|none|Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.|
|outputUri|string|false|none|Required. The output uri of destination file.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination">GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1gcsfolderdestination"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1gcsfolderdestination"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1gcsfolderdestination"></a>

```json
{
  "outputFolderUri": "string"
}
```

Export folder destination of the data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputFolderUri|string|false|none|Required. Cloud Storage directory to export data to.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata">GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1generateanalysisreportoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1generateanalysisreportoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1generateanalysisreportoperationmetadata"></a>

```json
{
  "createTime": "string",
  "dataset": "string"
}
```

Metadata of an GenerateAnalysisReport operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Timestamp when generate report request was created.|
|dataset|string|false|none|The name of the dataset for which the analysis report is generated. Format: "projects/*/datasets/*"|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig">GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1humanannotationconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1humanannotationconfig"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1humanannotationconfig"></a>

```json
{
  "annotatedDatasetDescription": "string",
  "annotatedDatasetDisplayName": "string",
  "contributorEmails": [
    "string"
  ],
  "instruction": "string",
  "labelGroup": "string",
  "languageCode": "string",
  "questionDuration": "string",
  "replicaCount": 0,
  "userEmailAddress": "string"
}
```

Configuration for how human labeling task should be done.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDatasetDescription|string|false|none|Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.|
|annotatedDatasetDisplayName|string|false|none|Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .|
|contributorEmails|[string]|false|none|Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/|
|instruction|string|false|none|Required. Instruction resource name.|
|labelGroup|string|false|none|Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`.|
|languageCode|string|false|none|Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.|
|questionDuration|string(google-duration)|false|none|Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.|
|replicaCount|integer(int32)|false|none|Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.|
|userEmailAddress|string|false|none|Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadata">GoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1importdataoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1ImportDataOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1importdataoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1importdataoperationmetadata"></a>

```json
{
  "createTime": "string",
  "dataset": "string",
  "partialFailures": [
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
  ]
}
```

Metadata of an ImportData operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. Timestamp when import dataset request was created.|
|dataset|string|false|none|Output only. The name of imported dataset. "projects/*/datasets/*"|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponse">GoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1importdataoperationresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1ImportDataOperationResponse"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1importdataoperationresponse"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1importdataoperationresponse"></a>

```json
{
  "dataset": "string",
  "importCount": 0,
  "totalCount": 0
}
```

Response used for ImportData longrunning operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|string|false|none|Ouptut only. The name of imported dataset.|
|importCount|integer(int32)|false|none|Output only. Number of examples imported successfully.|
|totalCount|integer(int32)|false|none|Output only. Total number of examples requested to import|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata">GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1labelimageboundingboxoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1labelimageboundingboxoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1labelimageboundingboxoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelImageBoundingBox operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata">GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1labelimageboundingpolyoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1labelimageboundingpolyoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1labelimageboundingpolyoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of LabelImageBoundingPoly operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata">GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1labelimageclassificationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1labelimageclassificationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1labelimageclassificationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Metadata of a LabelImageClassification operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata">GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1labelimageorientedboundingboxoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1labelimageorientedboundingboxoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1labelimageorientedboundingboxoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelImageOrientedBoundingBox operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p1alpha1humanannotationconfig)|false|none|Basic human annotation config.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata">GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1labelimagepolylineoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1labelimagepolylineoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1labelimagepolylineoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of LabelImagePolyline operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata">GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1labelimagesegmentationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1labelimagesegmentationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1labelimagesegmentationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelImageSegmentation operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p1alpha1humanannotationconfig)|false|none|Basic human annotation config.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata">GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1labeloperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1LabelOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1labeloperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1labeloperationmetadata"></a>

```json
{
  "annotatedDataset": "string",
  "createTime": "string",
  "dataset": "string",
  "imageBoundingBoxDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageBoundingPolyDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageClassificationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageOrientedBoundingBoxDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imagePolylineDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageSegmentationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "partialFailures": [
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
  "progressPercent": 0,
  "textClassificationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "textEntityExtractionDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoClassificationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoEventDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoObjectDetectionDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoObjectTrackingDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  }
}
```

Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDataset|string|false|none|Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".|
|createTime|string(google-datetime)|false|none|Output only. Timestamp when labeling request was created.|
|dataset|string|false|none|Output only. The name of dataset to be labeled. "projects/*/datasets/*"|
|imageBoundingBoxDetails|[GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingBoxOperationMetadata](#schemagoogleclouddatalabelingv1p1alpha1labelimageboundingboxoperationmetadata)|false|none|Details of label image bounding box operation.|
|imageBoundingPolyDetails|[GoogleCloudDatalabelingV1p1alpha1LabelImageBoundingPolyOperationMetadata](#schemagoogleclouddatalabelingv1p1alpha1labelimageboundingpolyoperationmetadata)|false|none|Details of label image bounding poly operation.|
|imageClassificationDetails|[GoogleCloudDatalabelingV1p1alpha1LabelImageClassificationOperationMetadata](#schemagoogleclouddatalabelingv1p1alpha1labelimageclassificationoperationmetadata)|false|none|Details of label image classification operation.|
|imageOrientedBoundingBoxDetails|[GoogleCloudDatalabelingV1p1alpha1LabelImageOrientedBoundingBoxOperationMetadata](#schemagoogleclouddatalabelingv1p1alpha1labelimageorientedboundingboxoperationmetadata)|false|none|Details of label image oriented bounding box operation.|
|imagePolylineDetails|[GoogleCloudDatalabelingV1p1alpha1LabelImagePolylineOperationMetadata](#schemagoogleclouddatalabelingv1p1alpha1labelimagepolylineoperationmetadata)|false|none|Details of label image polyline operation.|
|imageSegmentationDetails|[GoogleCloudDatalabelingV1p1alpha1LabelImageSegmentationOperationMetadata](#schemagoogleclouddatalabelingv1p1alpha1labelimagesegmentationoperationmetadata)|false|none|Details of label image segmentation operation.|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|
|progressPercent|integer(int32)|false|none|Output only. Progress of label operation. Range: [0, 100].|
|textClassificationDetails|[GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata](#schemagoogleclouddatalabelingv1p1alpha1labeltextclassificationoperationmetadata)|false|none|Details of label text classification operation.|
|textEntityExtractionDetails|[GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata](#schemagoogleclouddatalabelingv1p1alpha1labeltextentityextractionoperationmetadata)|false|none|Details of label text entity extraction operation.|
|videoClassificationDetails|[GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata](#schemagoogleclouddatalabelingv1p1alpha1labelvideoclassificationoperationmetadata)|false|none|Details of label video classification operation.|
|videoEventDetails|[GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata](#schemagoogleclouddatalabelingv1p1alpha1labelvideoeventoperationmetadata)|false|none|Details of label video event operation.|
|videoObjectDetectionDetails|[GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata](#schemagoogleclouddatalabelingv1p1alpha1labelvideoobjectdetectionoperationmetadata)|false|none|Details of label video object detection operation.|
|videoObjectTrackingDetails|[GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata](#schemagoogleclouddatalabelingv1p1alpha1labelvideoobjecttrackingoperationmetadata)|false|none|Details of label video object tracking operation.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1LabelStats">GoogleCloudDatalabelingV1p1alpha1LabelStats</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1labelstats"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1LabelStats"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1labelstats"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1labelstats"></a>

```json
{
  "exampleCount": {
    "property1": "string",
    "property2": "string"
  }
}
```

Statistics about annotation specs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exampleCount|object|false|none|Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata">GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1labeltextclassificationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1LabelTextClassificationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1labeltextclassificationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1labeltextclassificationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelTextClassification operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata">GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1labeltextentityextractionoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1LabelTextEntityExtractionOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1labeltextentityextractionoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1labeltextentityextractionoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelTextEntityExtraction operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata">GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1labelvideoclassificationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1LabelVideoClassificationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1labelvideoclassificationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1labelvideoclassificationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoClassification operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata">GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1labelvideoeventoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1LabelVideoEventOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1labelvideoeventoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1labelvideoeventoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoEvent operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata">GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1labelvideoobjectdetectionoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectDetectionOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1labelvideoobjectdetectionoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1labelvideoobjectdetectionoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoObjectDetection operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata">GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1labelvideoobjecttrackingoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1LabelVideoObjectTrackingOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1labelvideoobjecttrackingoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1labelvideoobjecttrackingoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoObjectTracking operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p1alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p1alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p1alpha1OutputConfig">GoogleCloudDatalabelingV1p1alpha1OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p1alpha1outputconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1p1alpha1OutputConfig"></a>
<a id="tocSgoogleclouddatalabelingv1p1alpha1outputconfig"></a>
<a id="tocsgoogleclouddatalabelingv1p1alpha1outputconfig"></a>

```json
{
  "gcsDestination": {
    "mimeType": "string",
    "outputUri": "string"
  },
  "gcsFolderDestination": {
    "outputFolderUri": "string"
  }
}
```

The configuration of output data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsDestination|[GoogleCloudDatalabelingV1p1alpha1GcsDestination](#schemagoogleclouddatalabelingv1p1alpha1gcsdestination)|false|none|Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation.|
|gcsFolderDestination|[GoogleCloudDatalabelingV1p1alpha1GcsFolderDestination](#schemagoogleclouddatalabelingv1p1alpha1gcsfolderdestination)|false|none|Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadata">GoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1createinstructionmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1CreateInstructionMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1createinstructionmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1createinstructionmetadata"></a>

```json
{
  "createTime": "string",
  "instruction": "string",
  "partialFailures": [
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
  ]
}
```

Metadata of a CreateInstruction operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Timestamp when create instruction request was created.|
|instruction|string|false|none|The name of the created Instruction. projects/{project_id}/instructions/{instruction_id}|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadata">GoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1exportdataoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1ExportDataOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1exportdataoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1exportdataoperationmetadata"></a>

```json
{
  "annotatedDataset": "string",
  "createTime": "string",
  "dataset": "string",
  "partialFailures": [
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
  ]
}
```

Metadata of an ExportData operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDataset|string|false|none|Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".|
|createTime|string(google-datetime)|false|none|Output only. Timestamp when export dataset request was created.|
|dataset|string|false|none|Output only. The name of dataset to be exported. "projects/*/datasets/*"|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponse">GoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1exportdataoperationresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1ExportDataOperationResponse"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1exportdataoperationresponse"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1exportdataoperationresponse"></a>

```json
{
  "annotatedDataset": "string",
  "dataset": "string",
  "exportCount": 0,
  "labelStats": {
    "exampleCount": {
      "property1": "string",
      "property2": "string"
    }
  },
  "outputConfig": {
    "gcsDestination": {
      "mimeType": "string",
      "outputUri": "string"
    },
    "gcsFolderDestination": {
      "outputFolderUri": "string"
    }
  },
  "totalCount": 0
}
```

Response used for ExportDataset longrunning operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDataset|string|false|none|Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".|
|dataset|string|false|none|Ouptut only. The name of dataset. "projects/*/datasets/*"|
|exportCount|integer(int32)|false|none|Output only. Number of examples exported successfully.|
|labelStats|[GoogleCloudDatalabelingV1p2alpha1LabelStats](#schemagoogleclouddatalabelingv1p2alpha1labelstats)|false|none|Output only. Statistic infos of labels in the exported dataset.|
|outputConfig|[GoogleCloudDatalabelingV1p2alpha1OutputConfig](#schemagoogleclouddatalabelingv1p2alpha1outputconfig)|false|none|Output only. output_config in the ExportData request.|
|totalCount|integer(int32)|false|none|Output only. Total number of examples requested to export|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1GcsDestination">GoogleCloudDatalabelingV1p2alpha1GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1gcsdestination"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1GcsDestination"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1gcsdestination"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1gcsdestination"></a>

```json
{
  "mimeType": "string",
  "outputUri": "string"
}
```

Export destination of the data.Only gcs path is allowed in output_uri.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mimeType|string|false|none|Required. The format of the gcs destination. Only "text/csv" and "application/json" are supported.|
|outputUri|string|false|none|Required. The output uri of destination file.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination">GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1gcsfolderdestination"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1gcsfolderdestination"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1gcsfolderdestination"></a>

```json
{
  "outputFolderUri": "string"
}
```

Export folder destination of the data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputFolderUri|string|false|none|Required. Cloud Storage directory to export data to.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig">GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1humanannotationconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1humanannotationconfig"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1humanannotationconfig"></a>

```json
{
  "annotatedDatasetDescription": "string",
  "annotatedDatasetDisplayName": "string",
  "contributorEmails": [
    "string"
  ],
  "instruction": "string",
  "labelGroup": "string",
  "languageCode": "string",
  "questionDuration": "string",
  "replicaCount": 0,
  "userEmailAddress": "string"
}
```

Configuration for how human labeling task should be done.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDatasetDescription|string|false|none|Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long.|
|annotatedDatasetDisplayName|string|false|none|Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters .|
|contributorEmails|[string]|false|none|Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/|
|instruction|string|false|none|Required. Instruction resource name.|
|labelGroup|string|false|none|Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression `[a-zA-Z\\d_-]{0,128}`.|
|languageCode|string|false|none|Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification.|
|questionDuration|string(google-duration)|false|none|Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds.|
|replicaCount|integer(int32)|false|none|Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5.|
|userEmailAddress|string|false|none|Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadata">GoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1importdataoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1ImportDataOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1importdataoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1importdataoperationmetadata"></a>

```json
{
  "createTime": "string",
  "dataset": "string",
  "partialFailures": [
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
  ]
}
```

Metadata of an ImportData operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. Timestamp when import dataset request was created.|
|dataset|string|false|none|Output only. The name of imported dataset. "projects/*/datasets/*"|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse">GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1importdataoperationresponse"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1ImportDataOperationResponse"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1importdataoperationresponse"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1importdataoperationresponse"></a>

```json
{
  "dataset": "string",
  "importCount": 0,
  "totalCount": 0
}
```

Response used for ImportData longrunning operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|string|false|none|Ouptut only. The name of imported dataset.|
|importCount|integer(int32)|false|none|Output only. Number of examples imported successfully.|
|totalCount|integer(int32)|false|none|Output only. Total number of examples requested to import|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata">GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1labelimageboundingboxoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1labelimageboundingboxoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1labelimageboundingboxoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelImageBoundingBox operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p2alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata">GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1labelimageboundingpolyoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1labelimageboundingpolyoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1labelimageboundingpolyoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of LabelImageBoundingPoly operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p2alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata">GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1labelimageclassificationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1labelimageclassificationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1labelimageclassificationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Metadata of a LabelImageClassification operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p2alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata">GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1labelimageorientedboundingboxoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1labelimageorientedboundingboxoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1labelimageorientedboundingboxoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelImageOrientedBoundingBox operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p2alpha1humanannotationconfig)|false|none|Basic human annotation config.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata">GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1labelimagepolylineoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1labelimagepolylineoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1labelimagepolylineoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of LabelImagePolyline operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p2alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata">GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1labelimagesegmentationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1labelimagesegmentationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1labelimagesegmentationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelImageSegmentation operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p2alpha1humanannotationconfig)|false|none|Basic human annotation config.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1LabelOperationMetadata">GoogleCloudDatalabelingV1p2alpha1LabelOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1labeloperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1LabelOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1labeloperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1labeloperationmetadata"></a>

```json
{
  "annotatedDataset": "string",
  "createTime": "string",
  "dataset": "string",
  "imageBoundingBoxDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageBoundingPolyDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageClassificationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageOrientedBoundingBoxDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imagePolylineDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "imageSegmentationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "partialFailures": [
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
  "progressPercent": 0,
  "textClassificationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "textEntityExtractionDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoClassificationDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoEventDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoObjectDetectionDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  },
  "videoObjectTrackingDetails": {
    "basicConfig": {
      "annotatedDatasetDescription": "string",
      "annotatedDatasetDisplayName": "string",
      "contributorEmails": [
        "string"
      ],
      "instruction": "string",
      "labelGroup": "string",
      "languageCode": "string",
      "questionDuration": "string",
      "replicaCount": 0,
      "userEmailAddress": "string"
    }
  }
}
```

Metadata of a labeling operation, such as LabelImage or LabelVideo. Next tag: 23

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotatedDataset|string|false|none|Output only. The name of annotated dataset in format "projects/*/datasets/*/annotatedDatasets/*".|
|createTime|string(google-datetime)|false|none|Output only. Timestamp when labeling request was created.|
|dataset|string|false|none|Output only. The name of dataset to be labeled. "projects/*/datasets/*"|
|imageBoundingBoxDetails|[GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingBoxOperationMetadata](#schemagoogleclouddatalabelingv1p2alpha1labelimageboundingboxoperationmetadata)|false|none|Details of label image bounding box operation.|
|imageBoundingPolyDetails|[GoogleCloudDatalabelingV1p2alpha1LabelImageBoundingPolyOperationMetadata](#schemagoogleclouddatalabelingv1p2alpha1labelimageboundingpolyoperationmetadata)|false|none|Details of label image bounding poly operation.|
|imageClassificationDetails|[GoogleCloudDatalabelingV1p2alpha1LabelImageClassificationOperationMetadata](#schemagoogleclouddatalabelingv1p2alpha1labelimageclassificationoperationmetadata)|false|none|Details of label image classification operation.|
|imageOrientedBoundingBoxDetails|[GoogleCloudDatalabelingV1p2alpha1LabelImageOrientedBoundingBoxOperationMetadata](#schemagoogleclouddatalabelingv1p2alpha1labelimageorientedboundingboxoperationmetadata)|false|none|Details of label image oriented bounding box operation.|
|imagePolylineDetails|[GoogleCloudDatalabelingV1p2alpha1LabelImagePolylineOperationMetadata](#schemagoogleclouddatalabelingv1p2alpha1labelimagepolylineoperationmetadata)|false|none|Details of label image polyline operation.|
|imageSegmentationDetails|[GoogleCloudDatalabelingV1p2alpha1LabelImageSegmentationOperationMetadata](#schemagoogleclouddatalabelingv1p2alpha1labelimagesegmentationoperationmetadata)|false|none|Details of label image segmentation operation.|
|partialFailures|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|Output only. Partial failures encountered. E.g. single files that couldn't be read. Status details field will contain standard GCP error details.|
|progressPercent|integer(int32)|false|none|Output only. Progress of label operation. Range: [0, 100].|
|textClassificationDetails|[GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata](#schemagoogleclouddatalabelingv1p2alpha1labeltextclassificationoperationmetadata)|false|none|Details of label text classification operation.|
|textEntityExtractionDetails|[GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata](#schemagoogleclouddatalabelingv1p2alpha1labeltextentityextractionoperationmetadata)|false|none|Details of label text entity extraction operation.|
|videoClassificationDetails|[GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata](#schemagoogleclouddatalabelingv1p2alpha1labelvideoclassificationoperationmetadata)|false|none|Details of label video classification operation.|
|videoEventDetails|[GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata](#schemagoogleclouddatalabelingv1p2alpha1labelvideoeventoperationmetadata)|false|none|Details of label video event operation.|
|videoObjectDetectionDetails|[GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata](#schemagoogleclouddatalabelingv1p2alpha1labelvideoobjectdetectionoperationmetadata)|false|none|Details of label video object detection operation.|
|videoObjectTrackingDetails|[GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata](#schemagoogleclouddatalabelingv1p2alpha1labelvideoobjecttrackingoperationmetadata)|false|none|Details of label video object tracking operation.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1LabelStats">GoogleCloudDatalabelingV1p2alpha1LabelStats</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1labelstats"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1LabelStats"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1labelstats"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1labelstats"></a>

```json
{
  "exampleCount": {
    "property1": "string",
    "property2": "string"
  }
}
```

Statistics about annotation specs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exampleCount|object|false|none|Map of each annotation spec's example count. Key is the annotation spec name and value is the number of examples for that annotation spec. If the annotated dataset does not have annotation spec, the map will return a pair where the key is empty string and value is the total number of annotations.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata">GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1labeltextclassificationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1LabelTextClassificationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1labeltextclassificationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1labeltextclassificationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelTextClassification operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p2alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata">GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1labeltextentityextractionoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1LabelTextEntityExtractionOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1labeltextentityextractionoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1labeltextentityextractionoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelTextEntityExtraction operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p2alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata">GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1labelvideoclassificationoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1LabelVideoClassificationOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1labelvideoclassificationoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1labelvideoclassificationoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoClassification operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p2alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata">GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1labelvideoeventoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1LabelVideoEventOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1labelvideoeventoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1labelvideoeventoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoEvent operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p2alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata">GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1labelvideoobjectdetectionoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectDetectionOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1labelvideoobjectdetectionoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1labelvideoobjectdetectionoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoObjectDetection operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p2alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata">GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1labelvideoobjecttrackingoperationmetadata"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1LabelVideoObjectTrackingOperationMetadata"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1labelvideoobjecttrackingoperationmetadata"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1labelvideoobjecttrackingoperationmetadata"></a>

```json
{
  "basicConfig": {
    "annotatedDatasetDescription": "string",
    "annotatedDatasetDisplayName": "string",
    "contributorEmails": [
      "string"
    ],
    "instruction": "string",
    "labelGroup": "string",
    "languageCode": "string",
    "questionDuration": "string",
    "replicaCount": 0,
    "userEmailAddress": "string"
  }
}
```

Details of a LabelVideoObjectTracking operation metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicConfig|[GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig](#schemagoogleclouddatalabelingv1p2alpha1humanannotationconfig)|false|none|Basic human annotation config used in labeling request.|

<h2 id="tocS_GoogleCloudDatalabelingV1p2alpha1OutputConfig">GoogleCloudDatalabelingV1p2alpha1OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatalabelingv1p2alpha1outputconfig"></a>
<a id="schema_GoogleCloudDatalabelingV1p2alpha1OutputConfig"></a>
<a id="tocSgoogleclouddatalabelingv1p2alpha1outputconfig"></a>
<a id="tocsgoogleclouddatalabelingv1p2alpha1outputconfig"></a>

```json
{
  "gcsDestination": {
    "mimeType": "string",
    "outputUri": "string"
  },
  "gcsFolderDestination": {
    "outputFolderUri": "string"
  }
}
```

The configuration of output data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsDestination|[GoogleCloudDatalabelingV1p2alpha1GcsDestination](#schemagoogleclouddatalabelingv1p2alpha1gcsdestination)|false|none|Output to a file in Cloud Storage. Should be used for labeling output other than image segmentation.|
|gcsFolderDestination|[GoogleCloudDatalabelingV1p2alpha1GcsFolderDestination](#schemagoogleclouddatalabelingv1p2alpha1gcsfolderdestination)|false|none|Output to a folder in Cloud Storage. Should be used for image segmentation or document de-identification labeling outputs.|

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
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
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
