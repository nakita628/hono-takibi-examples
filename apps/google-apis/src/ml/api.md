<h1 id="ai-platform-training-prediction-api">AI Platform Training &amp; Prediction API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API to enable creating and using machine learning models.

Base URLs:

* <a href="https://ml.googleapis.com/">https://ml.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/ml/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-platform.read-only|View your data across Google Cloud services and see the email address of your Google Account|

<h1 id="ai-platform-training-prediction-api-projects">projects</h1>

## ml.projects.operations.get

<a id="opIdml.projects.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="mlprojectsoperationsget-parameters">Parameters</h3>

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

<h3 id="mlprojectsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunning__Operation](#schemagooglelongrunning__operation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## ml.projects.models.versions.delete

<a id="opIdml.projects.models.versions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/{name}`

Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.

<h3 id="mlprojectsmodelsversionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the version. You can get the names of all the versions of a model by calling projects.models.versions.list.|
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

<h3 id="mlprojectsmodelsversionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunning__Operation](#schemagooglelongrunning__operation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.models.versions.patch

<a id="opIdml.projects.models.versions.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acceleratorConfig": {
      "count": "string",
      "type": "ACCELERATOR_TYPE_UNSPECIFIED"
    },
    "autoScaling": {
      "maxNodes": 0,
      "metrics": [
        {
          "name": "METRIC_NAME_UNSPECIFIED",
          "target": 0
        }
      ],
      "minNodes": 0
    },
    "container": {
      "args": [
        "string"
      ],
      "command": [
        "string"
      ],
      "env": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "image": "string",
      "ports": [
        {
          "containerPort": 0
        }
      ]
    },
    "createTime": "string",
    "deploymentUri": "string",
    "description": "string",
    "errorMessage": "string",
    "etag": "string",
    "explanationConfig": {
      "integratedGradientsAttribution": {
        "numIntegralSteps": 0
      },
      "sampledShapleyAttribution": {
        "numPaths": 0
      },
      "xraiAttribution": {
        "numIntegralSteps": 0
      }
    },
    "framework": "FRAMEWORK_UNSPECIFIED",
    "isDefault": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUseTime": "string",
    "machineType": "string",
    "manualScaling": {
      "nodes": 0
    },
    "name": "string",
    "packageUris": [
      "string"
    ],
    "predictionClass": "string",
    "pythonVersion": "string",
    "requestLoggingConfig": {
      "bigqueryTableName": "string",
      "samplingPercentage": 0
    },
    "routes": {
      "health": "string",
      "predict": "string"
    },
    "runtimeVersion": "string",
    "serviceAccount": "string",
    "state": "UNKNOWN"
  }'
```

`PATCH /v1/{name}`

Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.

> Body parameter

```json
{
  "acceleratorConfig": {
    "count": "string",
    "type": "ACCELERATOR_TYPE_UNSPECIFIED"
  },
  "autoScaling": {
    "maxNodes": 0,
    "metrics": [
      {
        "name": "METRIC_NAME_UNSPECIFIED",
        "target": 0
      }
    ],
    "minNodes": 0
  },
  "container": {
    "args": [
      "string"
    ],
    "command": [
      "string"
    ],
    "env": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "image": "string",
    "ports": [
      {
        "containerPort": 0
      }
    ]
  },
  "createTime": "string",
  "deploymentUri": "string",
  "description": "string",
  "errorMessage": "string",
  "etag": "string",
  "explanationConfig": {
    "integratedGradientsAttribution": {
      "numIntegralSteps": 0
    },
    "sampledShapleyAttribution": {
      "numPaths": 0
    },
    "xraiAttribution": {
      "numIntegralSteps": 0
    }
  },
  "framework": "FRAMEWORK_UNSPECIFIED",
  "isDefault": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lastUseTime": "string",
  "machineType": "string",
  "manualScaling": {
    "nodes": 0
  },
  "name": "string",
  "packageUris": [
    "string"
  ],
  "predictionClass": "string",
  "pythonVersion": "string",
  "requestLoggingConfig": {
    "bigqueryTableName": "string",
    "samplingPercentage": 0
  },
  "routes": {
    "health": "string",
    "predict": "string"
  },
  "runtimeVersion": "string",
  "serviceAccount": "string",
  "state": "UNKNOWN"
}
```

<h3 id="mlprojectsmodelsversionspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the model.|
|updateMask|query|string|false|Required. Specifies the path, relative to `Version`, of the field to update. Must be present and non-empty. For example, to change the description of a version to "foo", the `update_mask` parameter would be specified as `description`, and the `PATCH` request body would specify the new value, as follows: ``` { "description": "foo" } ``` Currently the only supported update mask fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`. However, you can only update `manualScaling.nodes` if the version uses a [Compute Engine (N1) machine type](/ml-engine/docs/machine-types-online-prediction).|
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
|body|body|[GoogleCloudMlV1__Version](#schemagooglecloudmlv1__version)|false|none|
|» acceleratorConfig|body|[GoogleCloudMlV1__AcceleratorConfig](#schemagooglecloudmlv1__acceleratorconfig)|false|Optional. Accelerator config for using GPUs for online prediction (beta). Only specify this field if you have specified a Compute Engine (N1) machine type in the `machineType` field. Learn more about [using GPUs for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus).|
|» autoScaling|body|[GoogleCloudMlV1__AutoScaling](#schemagooglecloudmlv1__autoscaling)|false|Automatically scale the number of nodes used to serve the model in response to increases and decreases in traffic. Care should be taken to ramp up traffic according to the model's ability to scale or you will start seeing increases in latency and 429 response codes.|
|» container|body|[GoogleCloudMlV1__ContainerSpec](#schemagooglecloudmlv1__containerspec)|false|Optional. Specifies a custom container to use for serving predictions. If you specify this field, then `machineType` is required. If you specify this field, then `deploymentUri` is optional. If you specify this field, then you must not specify `runtimeVersion`, `packageUris`, `framework`, `pythonVersion`, or `predictionClass`.|
|» createTime|body|string(google-datetime)|false|Output only. The time the version was created.|
|» deploymentUri|body|string|false|The Cloud Storage URI of a directory containing trained model artifacts to be used to create the model version. See the [guide to deploying models](/ai-platform/prediction/docs/deploying-models) for more information. The total number of files under this directory must not exceed 1000. During projects.models.versions.create, AI Platform Prediction copies all files from the specified directory to a location managed by the service. From then on, AI Platform Prediction uses these copies of the model artifacts to serve predictions, not the original files in Cloud Storage, so this location is useful only as a historical record. If you specify container, then this field is optional. Otherwise, it is required. Learn [how to use this field with a custom container](/ai-platform/prediction/docs/custom-container-requirements#artifacts).|
|» description|body|string|false|Optional. The description specified for the version when it was created.|
|» errorMessage|body|string|false|Output only. The details of a failure or a cancellation.|
|» etag|body|string(byte)|false|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetVersion`, and systems are expected to put that etag in the request to `UpdateVersion` to ensure that their change will be applied to the model as intended.|
|» explanationConfig|body|[GoogleCloudMlV1__ExplanationConfig](#schemagooglecloudmlv1__explanationconfig)|false|Optional. Configures explainability features on the model's version. Some explanation features require additional metadata to be loaded as part of the model payload.|
|» framework|body|string|false|Optional. The machine learning framework AI Platform uses to train this version of the model. Valid values are `TENSORFLOW`, `SCIKIT_LEARN`, `XGBOOST`. If you do not specify a framework, AI Platform will analyze files in the deployment_uri to determine a framework. If you choose `SCIKIT_LEARN` or `XGBOOST`, you must also set the runtime version of the model to 1.4 or greater. Do **not** specify a framework if you're deploying a [custom prediction routine](/ai-platform/prediction/docs/custom-prediction-routines) or if you're using a [custom container](/ai-platform/prediction/docs/use-custom-container).|
|» isDefault|body|boolean|false|Output only. If true, this version will be used to handle prediction requests that do not specify a version. You can change the default version by calling projects.methods.versions.setDefault.|
|» labels|body|object|false|Optional. One or more labels that you can add, to organize your model versions. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models.|
|» » **additionalProperties**|body|string|false|none|
|» lastUseTime|body|string(google-datetime)|false|Output only. The time the version was last used for prediction.|
|» machineType|body|string|false|Optional. The type of machine on which to serve the model. Currently only applies to online prediction service. To learn about valid values for this field, read [Choosing a machine type for online prediction](/ai-platform/prediction/docs/machine-types-online-prediction). If this field is not specified and you are using a [regional endpoint](/ai-platform/prediction/docs/regional-endpoints), then the machine type defaults to `n1-standard-2`. If this field is not specified and you are using the global endpoint (`ml.googleapis.com`), then the machine type defaults to `mls1-c1-m2`.|
|» manualScaling|body|[GoogleCloudMlV1__ManualScaling](#schemagooglecloudmlv1__manualscaling)|false|Manually select the number of nodes to use for serving the model. You should generally use `auto_scaling` with an appropriate `min_nodes` instead, but this option is available if you want more predictable billing. Beware that latency and error rates will increase if the traffic exceeds that capability of the system to serve it based on the selected number of nodes.|
|» name|body|string|false|Required. The name specified for the version when it was created. The version name must be unique within the model it is created in.|
|» packageUris|body|[string]|false|Optional. Cloud Storage paths (`gs://…`) of packages for [custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines) or [scikit-learn pipelines with custom code](/ml-engine/docs/scikit/exporting-for-prediction#custom-pipeline-code). For a custom prediction routine, one of these packages must contain your Predictor class (see [`predictionClass`](#Version.FIELDS.prediction_class)). Additionally, include any dependencies used by your Predictor or scikit-learn pipeline uses that are not already included in your selected [runtime version](/ml-engine/docs/tensorflow/runtime-version-list). If you specify this field, you must also set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater.|
|» predictionClass|body|string|false|Optional. The fully qualified name (module_name.class_name) of a class that implements the Predictor interface described in this reference field. The module containing this class should be included in a package provided to the [`packageUris` field](#Version.FIELDS.package_uris). Specify this field if and only if you are deploying a [custom prediction routine (beta)](/ml-engine/docs/tensorflow/custom-prediction-routines). If you specify this field, you must set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater and you must set `machineType` to a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction). The following code sample provides the Predictor interface: class Predictor(object): """Interface for constructing custom predictors.""" def predict(self, instances, **kwargs): """Performs custom prediction. Instances are the decoded values from the request. They have already been deserialized from JSON. Args: instances: A list of prediction input instances. **kwargs: A dictionary of keyword args provided as additional fields on the predict request body. Returns: A list of outputs containing the prediction results. This list must be JSON serializable. """ raise NotImplementedError() @classmethod def from_path(cls, model_dir): """Creates an instance of Predictor using the given path. Loading of the predictor should be done in this method. Args: model_dir: The local directory that contains the exported model file along with any additional files uploaded when creating the version resource. Returns: An instance implementing this Predictor class. """ raise NotImplementedError() Learn more about [the Predictor interface and custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines).|
|» pythonVersion|body|string|false|Required. The version of Python used in prediction. The following Python versions are available: * Python '3.7' is available when `runtime_version` is set to '1.15' or later. * Python '3.5' is available when `runtime_version` is set to a version from '1.4' to '1.14'. * Python '2.7' is available when `runtime_version` is set to '1.15' or earlier. Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list).|
|» requestLoggingConfig|body|[GoogleCloudMlV1__RequestLoggingConfig](#schemagooglecloudmlv1__requestloggingconfig)|false|Optional. *Only* specify this field in a projects.models.versions.patch request. Specifying it in a projects.models.versions.create request has no effect. Configures the request-response pair logging on predictions from this Version.|
|» routes|body|[GoogleCloudMlV1__RouteMap](#schemagooglecloudmlv1__routemap)|false|Optional. Specifies paths on a custom container's HTTP server where AI Platform Prediction sends certain requests. If you specify this field, then you must also specify the `container` field. If you specify the `container` field and do not specify this field, it defaults to the following: ```json { "predict": "/v1/models/MODEL/versions/VERSION:predict", "health": "/v1/models/MODEL/versions/VERSION" } ``` See RouteMap for more details about these default values.|
|» runtimeVersion|body|string|false|Required. The AI Platform runtime version to use for this deployment. For more information, see the [runtime version list](/ml-engine/docs/runtime-version-list) and [how to manage runtime versions](/ml-engine/docs/versioning).|
|» serviceAccount|body|string|false|Optional. Specifies the service account for resource access control. If you specify this field, then you must also specify either the `containerSpec` or the `predictionClass` field. Learn more about [using a custom service account](/ai-platform/prediction/docs/custom-service-account).|
|» state|body|string|false|Output only. The state of a version.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» framework|FRAMEWORK_UNSPECIFIED|
|» framework|TENSORFLOW|
|» framework|SCIKIT_LEARN|
|» framework|XGBOOST|
|» state|UNKNOWN|
|» state|READY|
|» state|CREATING|
|» state|FAILED|
|» state|DELETING|
|» state|UPDATING|

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

<h3 id="mlprojectsmodelsversionspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunning__Operation](#schemagooglelongrunning__operation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.operations.list

<a id="opIdml.projects.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="mlprojectsoperationslist-parameters">Parameters</h3>

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

<h3 id="mlprojectsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunning__ListOperationsResponse](#schemagooglelongrunning__listoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.locations.studies.trials.addMeasurement

<a id="opIdml.projects.locations.studies.trials.addMeasurement"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:addMeasurement \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "measurement": {
      "elapsedTime": "string",
      "metrics": [
        {
          "metric": "string",
          "value": 0
        }
      ],
      "stepCount": "string"
    }
  }'
```

`POST /v1/{name}:addMeasurement`

Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.

> Body parameter

```json
{
  "measurement": {
    "elapsedTime": "string",
    "metrics": [
      {
        "metric": "string",
        "value": 0
      }
    ],
    "stepCount": "string"
  }
}
```

<h3 id="mlprojectslocationsstudiestrialsaddmeasurement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The trial name.|
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
|body|body|[GoogleCloudMlV1__AddTrialMeasurementRequest](#schemagooglecloudmlv1__addtrialmeasurementrequest)|false|none|
|» measurement|body|[GoogleCloudMlV1__Measurement](#schemagooglecloudmlv1__measurement)|false|Required. The measurement to be added to a trial.|

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
  "clientId": "string",
  "endTime": "string",
  "finalMeasurement": {
    "elapsedTime": "string",
    "metrics": [
      {
        "metric": "string",
        "value": 0
      }
    ],
    "stepCount": "string"
  },
  "infeasibleReason": "string",
  "measurements": [
    {
      "elapsedTime": "string",
      "metrics": [
        {
          "metric": "string",
          "value": 0
        }
      ],
      "stepCount": "string"
    }
  ],
  "name": "string",
  "parameters": [
    {
      "floatValue": 0,
      "intValue": "string",
      "parameter": "string",
      "stringValue": "string"
    }
  ],
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "trialInfeasible": true
}
```

<h3 id="mlprojectslocationsstudiestrialsaddmeasurement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__Trial](#schemagooglecloudmlv1__trial)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.operations.cancel

<a id="opIdml.projects.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="mlprojectsoperationscancel-parameters">Parameters</h3>

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
|body|body|[GoogleCloudMlV1__CancelJobRequest](#schemagooglecloudmlv1__canceljobrequest)|false|none|

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

<h3 id="mlprojectsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobuf__Empty](#schemagoogleprotobuf__empty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.locations.studies.trials.checkEarlyStoppingState

<a id="opIdml.projects.locations.studies.trials.checkEarlyStoppingState"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:checkEarlyStoppingState \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:checkEarlyStoppingState`

Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.

> Body parameter

```json
{}
```

<h3 id="mlprojectslocationsstudiestrialscheckearlystoppingstate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The trial name.|
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
|body|body|[GoogleCloudMlV1__CheckTrialEarlyStoppingStateRequest](#schemagooglecloudmlv1__checktrialearlystoppingstaterequest)|false|none|

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

<h3 id="mlprojectslocationsstudiestrialscheckearlystoppingstate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunning__Operation](#schemagooglelongrunning__operation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.locations.studies.trials.complete

<a id="opIdml.projects.locations.studies.trials.complete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:complete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "finalMeasurement": {
      "elapsedTime": "string",
      "metrics": [
        {
          "metric": "string",
          "value": 0
        }
      ],
      "stepCount": "string"
    },
    "infeasibleReason": "string",
    "trialInfeasible": true
  }'
```

`POST /v1/{name}:complete`

Marks a trial as complete.

> Body parameter

```json
{
  "finalMeasurement": {
    "elapsedTime": "string",
    "metrics": [
      {
        "metric": "string",
        "value": 0
      }
    ],
    "stepCount": "string"
  },
  "infeasibleReason": "string",
  "trialInfeasible": true
}
```

<h3 id="mlprojectslocationsstudiestrialscomplete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The trial name.metat|
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
|body|body|[GoogleCloudMlV1__CompleteTrialRequest](#schemagooglecloudmlv1__completetrialrequest)|false|none|
|» finalMeasurement|body|[GoogleCloudMlV1__Measurement](#schemagooglecloudmlv1__measurement)|false|Optional. If provided, it will be used as the completed trial's final_measurement; Otherwise, the service will auto-select a previously reported measurement as the final-measurement|
|» infeasibleReason|body|string|false|Optional. A human readable reason why the trial was infeasible. This should only be provided if `trial_infeasible` is true.|
|» trialInfeasible|body|boolean|false|Optional. True if the trial cannot be run with the given Parameter, and final_measurement will be ignored.|

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
  "clientId": "string",
  "endTime": "string",
  "finalMeasurement": {
    "elapsedTime": "string",
    "metrics": [
      {
        "metric": "string",
        "value": 0
      }
    ],
    "stepCount": "string"
  },
  "infeasibleReason": "string",
  "measurements": [
    {
      "elapsedTime": "string",
      "metrics": [
        {
          "metric": "string",
          "value": 0
        }
      ],
      "stepCount": "string"
    }
  ],
  "name": "string",
  "parameters": [
    {
      "floatValue": 0,
      "intValue": "string",
      "parameter": "string",
      "stringValue": "string"
    }
  ],
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "trialInfeasible": true
}
```

<h3 id="mlprojectslocationsstudiestrialscomplete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__Trial](#schemagooglecloudmlv1__trial)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.explain

<a id="opIdml.projects.explain"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:explain \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "httpBody": {
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

`POST /v1/{name}:explain`

Performs explanation on the data in the request. {% dynamic include "/ai-platform/includes/___explain-request" %} 

> Body parameter

```json
{
  "httpBody": {
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

<h3 id="mlprojectsexplain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of a model or a version. Authorization: requires the `predict` permission on the specified resource.|
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
|body|body|[GoogleCloudMlV1__ExplainRequest](#schemagooglecloudmlv1__explainrequest)|false|none|
|» httpBody|body|[GoogleApi__HttpBody](#schemagoogleapi__httpbody)|false|Required. The explanation request body.|

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

<h3 id="mlprojectsexplain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleApi__HttpBody](#schemagoogleapi__httpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.getConfig

<a id="opIdml.projects.getConfig"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getConfig \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{name}:getConfig`

Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.

<h3 id="mlprojectsgetconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The project name.|
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
  "config": {
    "tpuServiceAccount": "string"
  },
  "serviceAccount": "string",
  "serviceAccountProject": "string"
}
```

<h3 id="mlprojectsgetconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__GetConfigResponse](#schemagooglecloudmlv1__getconfigresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.predict

<a id="opIdml.projects.predict"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:predict \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "httpBody": {
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

`POST /v1/{name}:predict`

Performs online prediction on the data in the request. {% dynamic include "/ai-platform/includes/___predict-request" %} 

> Body parameter

```json
{
  "httpBody": {
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

<h3 id="mlprojectspredict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of a model or a version. Authorization: requires the `predict` permission on the specified resource.|
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
|body|body|[GoogleCloudMlV1__PredictRequest](#schemagooglecloudmlv1__predictrequest)|false|none|
|» httpBody|body|[GoogleApi__HttpBody](#schemagoogleapi__httpbody)|false| Required. The prediction request body. Refer to the [request body details section](#request-body-details) for more information on how to structure your request.|

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

<h3 id="mlprojectspredict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleApi__HttpBody](#schemagoogleapi__httpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.models.versions.setDefault

<a id="opIdml.projects.models.versions.setDefault"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:setDefault \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{name}:setDefault`

Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.

> Body parameter

```json
{}
```

<h3 id="mlprojectsmodelsversionssetdefault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the version to make the default for the model. You can get the names of all the versions of a model by calling projects.models.versions.list.|
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
|body|body|[GoogleCloudMlV1__SetDefaultVersionRequest](#schemagooglecloudmlv1__setdefaultversionrequest)|false|none|

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
  "acceleratorConfig": {
    "count": "string",
    "type": "ACCELERATOR_TYPE_UNSPECIFIED"
  },
  "autoScaling": {
    "maxNodes": 0,
    "metrics": [
      {
        "name": "METRIC_NAME_UNSPECIFIED",
        "target": 0
      }
    ],
    "minNodes": 0
  },
  "container": {
    "args": [
      "string"
    ],
    "command": [
      "string"
    ],
    "env": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "image": "string",
    "ports": [
      {
        "containerPort": 0
      }
    ]
  },
  "createTime": "string",
  "deploymentUri": "string",
  "description": "string",
  "errorMessage": "string",
  "etag": "string",
  "explanationConfig": {
    "integratedGradientsAttribution": {
      "numIntegralSteps": 0
    },
    "sampledShapleyAttribution": {
      "numPaths": 0
    },
    "xraiAttribution": {
      "numIntegralSteps": 0
    }
  },
  "framework": "FRAMEWORK_UNSPECIFIED",
  "isDefault": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lastMigrationModelId": "string",
  "lastMigrationTime": "string",
  "lastUseTime": "string",
  "machineType": "string",
  "manualScaling": {
    "nodes": 0
  },
  "name": "string",
  "packageUris": [
    "string"
  ],
  "predictionClass": "string",
  "pythonVersion": "string",
  "requestLoggingConfig": {
    "bigqueryTableName": "string",
    "samplingPercentage": 0
  },
  "routes": {
    "health": "string",
    "predict": "string"
  },
  "runtimeVersion": "string",
  "serviceAccount": "string",
  "state": "UNKNOWN"
}
```

<h3 id="mlprojectsmodelsversionssetdefault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__Version](#schemagooglecloudmlv1__version)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.locations.studies.trials.stop

<a id="opIdml.projects.locations.studies.trials.stop"></a>

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

Stops a trial.

> Body parameter

```json
{}
```

<h3 id="mlprojectslocationsstudiestrialsstop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The trial name.|
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
|body|body|[GoogleCloudMlV1__StopTrialRequest](#schemagooglecloudmlv1__stoptrialrequest)|false|none|

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
  "clientId": "string",
  "endTime": "string",
  "finalMeasurement": {
    "elapsedTime": "string",
    "metrics": [
      {
        "metric": "string",
        "value": 0
      }
    ],
    "stepCount": "string"
  },
  "infeasibleReason": "string",
  "measurements": [
    {
      "elapsedTime": "string",
      "metrics": [
        {
          "metric": "string",
          "value": 0
        }
      ],
      "stepCount": "string"
    }
  ],
  "name": "string",
  "parameters": [
    {
      "floatValue": 0,
      "intValue": "string",
      "parameter": "string",
      "stringValue": "string"
    }
  ],
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "trialInfeasible": true
}
```

<h3 id="mlprojectslocationsstudiestrialsstop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__Trial](#schemagooglecloudmlv1__trial)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.jobs.list

<a id="opIdml.projects.jobs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/jobs`

Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: {}.

<h3 id="mlprojectsjobslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project for which to list jobs.|
|filter|query|string|false|Optional. Specifies the subset of jobs to retrieve. You can filter on the value of one or more attributes of the job object. For example, retrieve jobs with a job identifier that starts with 'census': gcloud ai-platform jobs list --filter='jobId:census*' List all failed jobs with names that start with 'rnn': gcloud ai-platform jobs list --filter='jobId:rnn* AND state:FAILED' For more examples, see the guide to monitoring jobs.|
|pageSize|query|integer|false|Optional. The number of jobs to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.|
|pageToken|query|string|false|Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.|
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
      "endTime": "string",
      "errorMessage": "string",
      "etag": "string",
      "jobId": "string",
      "jobPosition": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "predictionInput": {
        "batchSize": "string",
        "dataFormat": "DATA_FORMAT_UNSPECIFIED",
        "inputPaths": [
          "string"
        ],
        "maxWorkerCount": "string",
        "modelName": "string",
        "outputDataFormat": "DATA_FORMAT_UNSPECIFIED",
        "outputPath": "string",
        "region": "string",
        "runtimeVersion": "string",
        "signatureName": "string",
        "uri": "string",
        "versionName": "string"
      },
      "predictionOutput": {
        "errorCount": "string",
        "nodeHours": 0,
        "outputPath": "string",
        "predictionCount": "string"
      },
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "trainingInput": {
        "args": [
          "string"
        ],
        "enableWebAccess": true,
        "encryptionConfig": {
          "kmsKeyName": "string"
        },
        "evaluatorConfig": {
          "acceleratorConfig": {
            "count": "string",
            "type": "ACCELERATOR_TYPE_UNSPECIFIED"
          },
          "containerArgs": [
            "string"
          ],
          "containerCommand": [
            "string"
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string"
          },
          "imageUri": "string",
          "tpuTfVersion": "string"
        },
        "evaluatorCount": "string",
        "evaluatorType": "string",
        "hyperparameters": {
          "algorithm": "ALGORITHM_UNSPECIFIED",
          "enableTrialEarlyStopping": true,
          "goal": "GOAL_TYPE_UNSPECIFIED",
          "hyperparameterMetricTag": "string",
          "maxFailedTrials": 0,
          "maxParallelTrials": 0,
          "maxTrials": 0,
          "params": [
            {
              "categoricalValues": [
                "string"
              ],
              "discreteValues": [
                0
              ],
              "maxValue": 0,
              "minValue": 0,
              "parameterName": "string",
              "scaleType": "NONE",
              "type": "PARAMETER_TYPE_UNSPECIFIED"
            }
          ],
          "resumePreviousJobId": "string"
        },
        "jobDir": "string",
        "masterConfig": {
          "acceleratorConfig": {
            "count": "string",
            "type": "ACCELERATOR_TYPE_UNSPECIFIED"
          },
          "containerArgs": [
            "string"
          ],
          "containerCommand": [
            "string"
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string"
          },
          "imageUri": "string",
          "tpuTfVersion": "string"
        },
        "masterType": "string",
        "network": "string",
        "packageUris": [
          "string"
        ],
        "parameterServerConfig": {
          "acceleratorConfig": {
            "count": "string",
            "type": "ACCELERATOR_TYPE_UNSPECIFIED"
          },
          "containerArgs": [
            "string"
          ],
          "containerCommand": [
            "string"
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string"
          },
          "imageUri": "string",
          "tpuTfVersion": "string"
        },
        "parameterServerCount": "string",
        "parameterServerType": "string",
        "pythonModule": "string",
        "pythonVersion": "string",
        "region": "string",
        "runtimeVersion": "string",
        "scaleTier": "BASIC",
        "scheduling": {
          "maxRunningTime": "string",
          "maxWaitTime": "string",
          "priority": 0
        },
        "serviceAccount": "string",
        "useChiefInTfConfig": true,
        "workerConfig": {
          "acceleratorConfig": {
            "count": "string",
            "type": "ACCELERATOR_TYPE_UNSPECIFIED"
          },
          "containerArgs": [
            "string"
          ],
          "containerCommand": [
            "string"
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string"
          },
          "imageUri": "string",
          "tpuTfVersion": "string"
        },
        "workerCount": "string",
        "workerType": "string"
      },
      "trainingOutput": {
        "builtInAlgorithmOutput": {
          "framework": "string",
          "modelPath": "string",
          "pythonVersion": "string",
          "runtimeVersion": "string"
        },
        "completedTrialCount": "string",
        "consumedMLUnits": 0,
        "hyperparameterMetricTag": "string",
        "isBuiltInAlgorithmJob": true,
        "isHyperparameterTuningJob": true,
        "trials": [
          {
            "allMetrics": [
              {
                "objectiveValue": 0,
                "trainingStep": "string"
              }
            ],
            "builtInAlgorithmOutput": {
              "framework": "string",
              "modelPath": "string",
              "pythonVersion": "string",
              "runtimeVersion": "string"
            },
            "endTime": "string",
            "finalMetric": {
              "objectiveValue": 0,
              "trainingStep": "string"
            },
            "hyperparameters": {
              "property1": "string",
              "property2": "string"
            },
            "isTrialStoppedEarly": true,
            "startTime": "string",
            "state": "STATE_UNSPECIFIED",
            "trialId": "string",
            "webAccessUris": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "webAccessUris": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="mlprojectsjobslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__ListJobsResponse](#schemagooglecloudmlv1__listjobsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## ml.projects.jobs.create

<a id="opIdml.projects.jobs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createTime": "string",
    "endTime": "string",
    "errorMessage": "string",
    "etag": "string",
    "jobId": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "predictionInput": {
      "batchSize": "string",
      "dataFormat": "DATA_FORMAT_UNSPECIFIED",
      "inputPaths": [
        "string"
      ],
      "maxWorkerCount": "string",
      "modelName": "string",
      "outputDataFormat": "DATA_FORMAT_UNSPECIFIED",
      "outputPath": "string",
      "region": "string",
      "runtimeVersion": "string",
      "signatureName": "string",
      "uri": "string",
      "versionName": "string"
    },
    "predictionOutput": {
      "errorCount": "string",
      "nodeHours": 0,
      "outputPath": "string",
      "predictionCount": "string"
    },
    "startTime": "string",
    "state": "STATE_UNSPECIFIED",
    "trainingInput": {
      "args": [
        "string"
      ],
      "enableWebAccess": true,
      "encryptionConfig": {
        "kmsKeyName": "string"
      },
      "evaluatorConfig": {
        "acceleratorConfig": {
          "count": "string",
          "type": "ACCELERATOR_TYPE_UNSPECIFIED"
        },
        "containerArgs": [
          "string"
        ],
        "containerCommand": [
          "string"
        ],
        "diskConfig": {
          "bootDiskSizeGb": 0,
          "bootDiskType": "string"
        },
        "imageUri": "string",
        "tpuTfVersion": "string"
      },
      "evaluatorCount": "string",
      "evaluatorType": "string",
      "hyperparameters": {
        "algorithm": "ALGORITHM_UNSPECIFIED",
        "enableTrialEarlyStopping": true,
        "goal": "GOAL_TYPE_UNSPECIFIED",
        "hyperparameterMetricTag": "string",
        "maxFailedTrials": 0,
        "maxParallelTrials": 0,
        "maxTrials": 0,
        "params": [
          {
            "categoricalValues": [
              "string"
            ],
            "discreteValues": [
              0
            ],
            "maxValue": 0,
            "minValue": 0,
            "parameterName": "string",
            "scaleType": "NONE",
            "type": "PARAMETER_TYPE_UNSPECIFIED"
          }
        ],
        "resumePreviousJobId": "string"
      },
      "jobDir": "string",
      "masterConfig": {
        "acceleratorConfig": {
          "count": "string",
          "type": "ACCELERATOR_TYPE_UNSPECIFIED"
        },
        "containerArgs": [
          "string"
        ],
        "containerCommand": [
          "string"
        ],
        "diskConfig": {
          "bootDiskSizeGb": 0,
          "bootDiskType": "string"
        },
        "imageUri": "string",
        "tpuTfVersion": "string"
      },
      "masterType": "string",
      "network": "string",
      "packageUris": [
        "string"
      ],
      "parameterServerConfig": {
        "acceleratorConfig": {
          "count": "string",
          "type": "ACCELERATOR_TYPE_UNSPECIFIED"
        },
        "containerArgs": [
          "string"
        ],
        "containerCommand": [
          "string"
        ],
        "diskConfig": {
          "bootDiskSizeGb": 0,
          "bootDiskType": "string"
        },
        "imageUri": "string",
        "tpuTfVersion": "string"
      },
      "parameterServerCount": "string",
      "parameterServerType": "string",
      "pythonModule": "string",
      "pythonVersion": "string",
      "region": "string",
      "runtimeVersion": "string",
      "scaleTier": "BASIC",
      "scheduling": {
        "maxRunningTime": "string",
        "maxWaitTime": "string",
        "priority": 0
      },
      "serviceAccount": "string",
      "useChiefInTfConfig": true,
      "workerConfig": {
        "acceleratorConfig": {
          "count": "string",
          "type": "ACCELERATOR_TYPE_UNSPECIFIED"
        },
        "containerArgs": [
          "string"
        ],
        "containerCommand": [
          "string"
        ],
        "diskConfig": {
          "bootDiskSizeGb": 0,
          "bootDiskType": "string"
        },
        "imageUri": "string",
        "tpuTfVersion": "string"
      },
      "workerCount": "string",
      "workerType": "string"
    },
    "trainingOutput": {
      "builtInAlgorithmOutput": {
        "framework": "string",
        "modelPath": "string",
        "pythonVersion": "string",
        "runtimeVersion": "string"
      },
      "completedTrialCount": "string",
      "consumedMLUnits": 0,
      "hyperparameterMetricTag": "string",
      "isBuiltInAlgorithmJob": true,
      "isHyperparameterTuningJob": true,
      "trials": [
        {
          "allMetrics": [
            {
              "objectiveValue": 0,
              "trainingStep": "string"
            }
          ],
          "builtInAlgorithmOutput": {
            "framework": "string",
            "modelPath": "string",
            "pythonVersion": "string",
            "runtimeVersion": "string"
          },
          "endTime": "string",
          "finalMetric": {
            "objectiveValue": 0,
            "trainingStep": "string"
          },
          "hyperparameters": {
            "property1": "string",
            "property2": "string"
          },
          "isTrialStoppedEarly": true,
          "startTime": "string",
          "state": "STATE_UNSPECIFIED",
          "trialId": "string",
          "webAccessUris": {
            "property1": "string",
            "property2": "string"
          }
        }
      ]
    }
  }'
```

`POST /v1/{parent}/jobs`

Creates a training or a batch prediction job.

> Body parameter

```json
{
  "createTime": "string",
  "endTime": "string",
  "errorMessage": "string",
  "etag": "string",
  "jobId": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "predictionInput": {
    "batchSize": "string",
    "dataFormat": "DATA_FORMAT_UNSPECIFIED",
    "inputPaths": [
      "string"
    ],
    "maxWorkerCount": "string",
    "modelName": "string",
    "outputDataFormat": "DATA_FORMAT_UNSPECIFIED",
    "outputPath": "string",
    "region": "string",
    "runtimeVersion": "string",
    "signatureName": "string",
    "uri": "string",
    "versionName": "string"
  },
  "predictionOutput": {
    "errorCount": "string",
    "nodeHours": 0,
    "outputPath": "string",
    "predictionCount": "string"
  },
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "trainingInput": {
    "args": [
      "string"
    ],
    "enableWebAccess": true,
    "encryptionConfig": {
      "kmsKeyName": "string"
    },
    "evaluatorConfig": {
      "acceleratorConfig": {
        "count": "string",
        "type": "ACCELERATOR_TYPE_UNSPECIFIED"
      },
      "containerArgs": [
        "string"
      ],
      "containerCommand": [
        "string"
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string"
      },
      "imageUri": "string",
      "tpuTfVersion": "string"
    },
    "evaluatorCount": "string",
    "evaluatorType": "string",
    "hyperparameters": {
      "algorithm": "ALGORITHM_UNSPECIFIED",
      "enableTrialEarlyStopping": true,
      "goal": "GOAL_TYPE_UNSPECIFIED",
      "hyperparameterMetricTag": "string",
      "maxFailedTrials": 0,
      "maxParallelTrials": 0,
      "maxTrials": 0,
      "params": [
        {
          "categoricalValues": [
            "string"
          ],
          "discreteValues": [
            0
          ],
          "maxValue": 0,
          "minValue": 0,
          "parameterName": "string",
          "scaleType": "NONE",
          "type": "PARAMETER_TYPE_UNSPECIFIED"
        }
      ],
      "resumePreviousJobId": "string"
    },
    "jobDir": "string",
    "masterConfig": {
      "acceleratorConfig": {
        "count": "string",
        "type": "ACCELERATOR_TYPE_UNSPECIFIED"
      },
      "containerArgs": [
        "string"
      ],
      "containerCommand": [
        "string"
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string"
      },
      "imageUri": "string",
      "tpuTfVersion": "string"
    },
    "masterType": "string",
    "network": "string",
    "packageUris": [
      "string"
    ],
    "parameterServerConfig": {
      "acceleratorConfig": {
        "count": "string",
        "type": "ACCELERATOR_TYPE_UNSPECIFIED"
      },
      "containerArgs": [
        "string"
      ],
      "containerCommand": [
        "string"
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string"
      },
      "imageUri": "string",
      "tpuTfVersion": "string"
    },
    "parameterServerCount": "string",
    "parameterServerType": "string",
    "pythonModule": "string",
    "pythonVersion": "string",
    "region": "string",
    "runtimeVersion": "string",
    "scaleTier": "BASIC",
    "scheduling": {
      "maxRunningTime": "string",
      "maxWaitTime": "string",
      "priority": 0
    },
    "serviceAccount": "string",
    "useChiefInTfConfig": true,
    "workerConfig": {
      "acceleratorConfig": {
        "count": "string",
        "type": "ACCELERATOR_TYPE_UNSPECIFIED"
      },
      "containerArgs": [
        "string"
      ],
      "containerCommand": [
        "string"
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string"
      },
      "imageUri": "string",
      "tpuTfVersion": "string"
    },
    "workerCount": "string",
    "workerType": "string"
  },
  "trainingOutput": {
    "builtInAlgorithmOutput": {
      "framework": "string",
      "modelPath": "string",
      "pythonVersion": "string",
      "runtimeVersion": "string"
    },
    "completedTrialCount": "string",
    "consumedMLUnits": 0,
    "hyperparameterMetricTag": "string",
    "isBuiltInAlgorithmJob": true,
    "isHyperparameterTuningJob": true,
    "trials": [
      {
        "allMetrics": [
          {
            "objectiveValue": 0,
            "trainingStep": "string"
          }
        ],
        "builtInAlgorithmOutput": {
          "framework": "string",
          "modelPath": "string",
          "pythonVersion": "string",
          "runtimeVersion": "string"
        },
        "endTime": "string",
        "finalMetric": {
          "objectiveValue": 0,
          "trainingStep": "string"
        },
        "hyperparameters": {
          "property1": "string",
          "property2": "string"
        },
        "isTrialStoppedEarly": true,
        "startTime": "string",
        "state": "STATE_UNSPECIFIED",
        "trialId": "string",
        "webAccessUris": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }
}
```

<h3 id="mlprojectsjobscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project name.|
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
|body|body|[GoogleCloudMlV1__Job](#schemagooglecloudmlv1__job)|false|none|
|» createTime|body|string(google-datetime)|false|Output only. When the job was created.|
|» endTime|body|string(google-datetime)|false|Output only. When the job processing was completed.|
|» errorMessage|body|string|false|Output only. The details of a failure or a cancellation.|
|» etag|body|string(byte)|false|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a job from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform job updates in order to avoid race conditions: An `etag` is returned in the response to `GetJob`, and systems are expected to put that etag in the request to `UpdateJob` to ensure that their change will be applied to the same version of the job.|
|» jobId|body|string|false|Required. The user-specified id of the job.|
|» labels|body|object|false|Optional. One or more labels that you can add, to organize your jobs. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels.|
|» » **additionalProperties**|body|string|false|none|
|» predictionInput|body|[GoogleCloudMlV1__PredictionInput](#schemagooglecloudmlv1__predictioninput)|false|Input parameters to create a prediction job.|
|» predictionOutput|body|[GoogleCloudMlV1__PredictionOutput](#schemagooglecloudmlv1__predictionoutput)|false|The current prediction job result.|
|» startTime|body|string(google-datetime)|false|Output only. When the job processing was started.|
|» state|body|string|false|Output only. The detailed state of a job.|
|» trainingInput|body|[GoogleCloudMlV1__TrainingInput](#schemagooglecloudmlv1__traininginput)|false|Input parameters to create a training job.|
|» trainingOutput|body|[GoogleCloudMlV1__TrainingOutput](#schemagooglecloudmlv1__trainingoutput)|false|The current training job result.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|QUEUED|
|» state|PREPARING|
|» state|RUNNING|
|» state|SUCCEEDED|
|» state|FAILED|
|» state|CANCELLING|
|» state|CANCELLED|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "endTime": "string",
  "errorMessage": "string",
  "etag": "string",
  "jobId": "string",
  "jobPosition": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "predictionInput": {
    "batchSize": "string",
    "dataFormat": "DATA_FORMAT_UNSPECIFIED",
    "inputPaths": [
      "string"
    ],
    "maxWorkerCount": "string",
    "modelName": "string",
    "outputDataFormat": "DATA_FORMAT_UNSPECIFIED",
    "outputPath": "string",
    "region": "string",
    "runtimeVersion": "string",
    "signatureName": "string",
    "uri": "string",
    "versionName": "string"
  },
  "predictionOutput": {
    "errorCount": "string",
    "nodeHours": 0,
    "outputPath": "string",
    "predictionCount": "string"
  },
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "trainingInput": {
    "args": [
      "string"
    ],
    "enableWebAccess": true,
    "encryptionConfig": {
      "kmsKeyName": "string"
    },
    "evaluatorConfig": {
      "acceleratorConfig": {
        "count": "string",
        "type": "ACCELERATOR_TYPE_UNSPECIFIED"
      },
      "containerArgs": [
        "string"
      ],
      "containerCommand": [
        "string"
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string"
      },
      "imageUri": "string",
      "tpuTfVersion": "string"
    },
    "evaluatorCount": "string",
    "evaluatorType": "string",
    "hyperparameters": {
      "algorithm": "ALGORITHM_UNSPECIFIED",
      "enableTrialEarlyStopping": true,
      "goal": "GOAL_TYPE_UNSPECIFIED",
      "hyperparameterMetricTag": "string",
      "maxFailedTrials": 0,
      "maxParallelTrials": 0,
      "maxTrials": 0,
      "params": [
        {
          "categoricalValues": [
            "string"
          ],
          "discreteValues": [
            0
          ],
          "maxValue": 0,
          "minValue": 0,
          "parameterName": "string",
          "scaleType": "NONE",
          "type": "PARAMETER_TYPE_UNSPECIFIED"
        }
      ],
      "resumePreviousJobId": "string"
    },
    "jobDir": "string",
    "masterConfig": {
      "acceleratorConfig": {
        "count": "string",
        "type": "ACCELERATOR_TYPE_UNSPECIFIED"
      },
      "containerArgs": [
        "string"
      ],
      "containerCommand": [
        "string"
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string"
      },
      "imageUri": "string",
      "tpuTfVersion": "string"
    },
    "masterType": "string",
    "network": "string",
    "packageUris": [
      "string"
    ],
    "parameterServerConfig": {
      "acceleratorConfig": {
        "count": "string",
        "type": "ACCELERATOR_TYPE_UNSPECIFIED"
      },
      "containerArgs": [
        "string"
      ],
      "containerCommand": [
        "string"
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string"
      },
      "imageUri": "string",
      "tpuTfVersion": "string"
    },
    "parameterServerCount": "string",
    "parameterServerType": "string",
    "pythonModule": "string",
    "pythonVersion": "string",
    "region": "string",
    "runtimeVersion": "string",
    "scaleTier": "BASIC",
    "scheduling": {
      "maxRunningTime": "string",
      "maxWaitTime": "string",
      "priority": 0
    },
    "serviceAccount": "string",
    "useChiefInTfConfig": true,
    "workerConfig": {
      "acceleratorConfig": {
        "count": "string",
        "type": "ACCELERATOR_TYPE_UNSPECIFIED"
      },
      "containerArgs": [
        "string"
      ],
      "containerCommand": [
        "string"
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string"
      },
      "imageUri": "string",
      "tpuTfVersion": "string"
    },
    "workerCount": "string",
    "workerType": "string"
  },
  "trainingOutput": {
    "builtInAlgorithmOutput": {
      "framework": "string",
      "modelPath": "string",
      "pythonVersion": "string",
      "runtimeVersion": "string"
    },
    "completedTrialCount": "string",
    "consumedMLUnits": 0,
    "hyperparameterMetricTag": "string",
    "isBuiltInAlgorithmJob": true,
    "isHyperparameterTuningJob": true,
    "trials": [
      {
        "allMetrics": [
          {
            "objectiveValue": 0,
            "trainingStep": "string"
          }
        ],
        "builtInAlgorithmOutput": {
          "framework": "string",
          "modelPath": "string",
          "pythonVersion": "string",
          "runtimeVersion": "string"
        },
        "endTime": "string",
        "finalMetric": {
          "objectiveValue": 0,
          "trainingStep": "string"
        },
        "hyperparameters": {
          "property1": "string",
          "property2": "string"
        },
        "isTrialStoppedEarly": true,
        "startTime": "string",
        "state": "STATE_UNSPECIFIED",
        "trialId": "string",
        "webAccessUris": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "webAccessUris": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="mlprojectsjobscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__Job](#schemagooglecloudmlv1__job)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.locations.list

<a id="opIdml.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/locations`

List all locations that provides at least one type of CMLE capability.

<h3 id="mlprojectslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project for which available locations are to be listed (since some locations might be whitelisted for specific projects).|
|pageSize|query|integer|false|Optional. The number of locations to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.|
|pageToken|query|string|false|Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.|
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
      "capabilities": [
        {
          "availableAccelerators": [
            "ACCELERATOR_TYPE_UNSPECIFIED"
          ],
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="mlprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__ListLocationsResponse](#schemagooglecloudmlv1__listlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## ml.projects.models.list

<a id="opIdml.projects.models.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/models \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/models`

Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: {}.

<h3 id="mlprojectsmodelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project whose models are to be listed.|
|filter|query|string|false|Optional. Specifies the subset of models to retrieve.|
|pageSize|query|integer|false|Optional. The number of models to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.|
|pageToken|query|string|false|Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.|
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
  "models": [
    {
      "defaultVersion": {
        "acceleratorConfig": {
          "count": "string",
          "type": "ACCELERATOR_TYPE_UNSPECIFIED"
        },
        "autoScaling": {
          "maxNodes": 0,
          "metrics": [
            {
              "name": "METRIC_NAME_UNSPECIFIED",
              "target": 0
            }
          ],
          "minNodes": 0
        },
        "container": {
          "args": [
            "string"
          ],
          "command": [
            "string"
          ],
          "env": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "image": "string",
          "ports": [
            {
              "containerPort": 0
            }
          ]
        },
        "createTime": "string",
        "deploymentUri": "string",
        "description": "string",
        "errorMessage": "string",
        "etag": "string",
        "explanationConfig": {
          "integratedGradientsAttribution": {
            "numIntegralSteps": 0
          },
          "sampledShapleyAttribution": {
            "numPaths": 0
          },
          "xraiAttribution": {
            "numIntegralSteps": 0
          }
        },
        "framework": "FRAMEWORK_UNSPECIFIED",
        "isDefault": true,
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "lastMigrationModelId": "string",
        "lastMigrationTime": "string",
        "lastUseTime": "string",
        "machineType": "string",
        "manualScaling": {
          "nodes": 0
        },
        "name": "string",
        "packageUris": [
          "string"
        ],
        "predictionClass": "string",
        "pythonVersion": "string",
        "requestLoggingConfig": {
          "bigqueryTableName": "string",
          "samplingPercentage": 0
        },
        "routes": {
          "health": "string",
          "predict": "string"
        },
        "runtimeVersion": "string",
        "serviceAccount": "string",
        "state": "UNKNOWN"
      },
      "description": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "onlinePredictionConsoleLogging": true,
      "onlinePredictionLogging": true,
      "regions": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="mlprojectsmodelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__ListModelsResponse](#schemagooglecloudmlv1__listmodelsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## ml.projects.models.create

<a id="opIdml.projects.models.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "defaultVersion": {
      "acceleratorConfig": {
        "count": "string",
        "type": "ACCELERATOR_TYPE_UNSPECIFIED"
      },
      "autoScaling": {
        "maxNodes": 0,
        "metrics": [
          {
            "name": "METRIC_NAME_UNSPECIFIED",
            "target": 0
          }
        ],
        "minNodes": 0
      },
      "container": {
        "args": [
          "string"
        ],
        "command": [
          "string"
        ],
        "env": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "image": "string",
        "ports": [
          {
            "containerPort": 0
          }
        ]
      },
      "createTime": "string",
      "deploymentUri": "string",
      "description": "string",
      "errorMessage": "string",
      "etag": "string",
      "explanationConfig": {
        "integratedGradientsAttribution": {
          "numIntegralSteps": 0
        },
        "sampledShapleyAttribution": {
          "numPaths": 0
        },
        "xraiAttribution": {
          "numIntegralSteps": 0
        }
      },
      "framework": "FRAMEWORK_UNSPECIFIED",
      "isDefault": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lastUseTime": "string",
      "machineType": "string",
      "manualScaling": {
        "nodes": 0
      },
      "name": "string",
      "packageUris": [
        "string"
      ],
      "predictionClass": "string",
      "pythonVersion": "string",
      "requestLoggingConfig": {
        "bigqueryTableName": "string",
        "samplingPercentage": 0
      },
      "routes": {
        "health": "string",
        "predict": "string"
      },
      "runtimeVersion": "string",
      "serviceAccount": "string",
      "state": "UNKNOWN"
    },
    "description": "string",
    "etag": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "onlinePredictionConsoleLogging": true,
    "onlinePredictionLogging": true,
    "regions": [
      "string"
    ]
  }'
```

`POST /v1/{parent}/models`

Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.

> Body parameter

```json
{
  "defaultVersion": {
    "acceleratorConfig": {
      "count": "string",
      "type": "ACCELERATOR_TYPE_UNSPECIFIED"
    },
    "autoScaling": {
      "maxNodes": 0,
      "metrics": [
        {
          "name": "METRIC_NAME_UNSPECIFIED",
          "target": 0
        }
      ],
      "minNodes": 0
    },
    "container": {
      "args": [
        "string"
      ],
      "command": [
        "string"
      ],
      "env": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "image": "string",
      "ports": [
        {
          "containerPort": 0
        }
      ]
    },
    "createTime": "string",
    "deploymentUri": "string",
    "description": "string",
    "errorMessage": "string",
    "etag": "string",
    "explanationConfig": {
      "integratedGradientsAttribution": {
        "numIntegralSteps": 0
      },
      "sampledShapleyAttribution": {
        "numPaths": 0
      },
      "xraiAttribution": {
        "numIntegralSteps": 0
      }
    },
    "framework": "FRAMEWORK_UNSPECIFIED",
    "isDefault": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUseTime": "string",
    "machineType": "string",
    "manualScaling": {
      "nodes": 0
    },
    "name": "string",
    "packageUris": [
      "string"
    ],
    "predictionClass": "string",
    "pythonVersion": "string",
    "requestLoggingConfig": {
      "bigqueryTableName": "string",
      "samplingPercentage": 0
    },
    "routes": {
      "health": "string",
      "predict": "string"
    },
    "runtimeVersion": "string",
    "serviceAccount": "string",
    "state": "UNKNOWN"
  },
  "description": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "onlinePredictionConsoleLogging": true,
  "onlinePredictionLogging": true,
  "regions": [
    "string"
  ]
}
```

<h3 id="mlprojectsmodelscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project name.|
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
|body|body|[GoogleCloudMlV1__Model](#schemagooglecloudmlv1__model)|false|none|
|» defaultVersion|body|[GoogleCloudMlV1__Version](#schemagooglecloudmlv1__version)|false|Output only. The default version of the model. This version will be used to handle prediction requests that do not specify a version. You can change the default version by calling projects.models.versions.setDefault.|
|» description|body|string|false|Optional. The description specified for the model when it was created.|
|» etag|body|string(byte)|false|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetModel`, and systems are expected to put that etag in the request to `UpdateModel` to ensure that their change will be applied to the model as intended.|
|» labels|body|object|false|Optional. One or more labels that you can add, to organize your models. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models.|
|» » **additionalProperties**|body|string|false|none|
|» name|body|string|false|Required. The name specified for the model when it was created. The model name must be unique within the project it is created in.|
|» onlinePredictionConsoleLogging|body|boolean|false|Optional. If true, online prediction nodes send `stderr` and `stdout` streams to Cloud Logging. These can be more verbose than the standard access logs (see `onlinePredictionLogging`) and can incur higher cost. However, they are helpful for debugging. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high QPS. Estimate your costs before enabling this option. Default is false.|
|» onlinePredictionLogging|body|boolean|false|Optional. If true, online prediction access logs are sent to Cloud Logging. These logs are like standard server access logs, containing information like timestamp and latency for each request. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option. Default is false.|
|» regions|body|[string]|false|Optional. The list of regions where the model is going to be deployed. Only one region per model is supported. Defaults to 'us-central1' if nothing is set. See the available regions for AI Platform services. Note: * No matter where a model is deployed, it can always be accessed by users from anywhere, both for online and batch prediction. * The region for a batch prediction job is set by the region field when submitting the batch prediction job and does not take its value from this field.|

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
  "defaultVersion": {
    "acceleratorConfig": {
      "count": "string",
      "type": "ACCELERATOR_TYPE_UNSPECIFIED"
    },
    "autoScaling": {
      "maxNodes": 0,
      "metrics": [
        {
          "name": "METRIC_NAME_UNSPECIFIED",
          "target": 0
        }
      ],
      "minNodes": 0
    },
    "container": {
      "args": [
        "string"
      ],
      "command": [
        "string"
      ],
      "env": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "image": "string",
      "ports": [
        {
          "containerPort": 0
        }
      ]
    },
    "createTime": "string",
    "deploymentUri": "string",
    "description": "string",
    "errorMessage": "string",
    "etag": "string",
    "explanationConfig": {
      "integratedGradientsAttribution": {
        "numIntegralSteps": 0
      },
      "sampledShapleyAttribution": {
        "numPaths": 0
      },
      "xraiAttribution": {
        "numIntegralSteps": 0
      }
    },
    "framework": "FRAMEWORK_UNSPECIFIED",
    "isDefault": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastMigrationModelId": "string",
    "lastMigrationTime": "string",
    "lastUseTime": "string",
    "machineType": "string",
    "manualScaling": {
      "nodes": 0
    },
    "name": "string",
    "packageUris": [
      "string"
    ],
    "predictionClass": "string",
    "pythonVersion": "string",
    "requestLoggingConfig": {
      "bigqueryTableName": "string",
      "samplingPercentage": 0
    },
    "routes": {
      "health": "string",
      "predict": "string"
    },
    "runtimeVersion": "string",
    "serviceAccount": "string",
    "state": "UNKNOWN"
  },
  "description": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "onlinePredictionConsoleLogging": true,
  "onlinePredictionLogging": true,
  "regions": [
    "string"
  ]
}
```

<h3 id="mlprojectsmodelscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__Model](#schemagooglecloudmlv1__model)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.locations.studies.list

<a id="opIdml.projects.locations.studies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/studies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/studies`

Lists all the studies in a region for an associated project.

<h3 id="mlprojectslocationsstudieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location that the study belongs to. Format: projects/{project}/locations/{location}|
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
  "studies": [
    {
      "createTime": "string",
      "inactiveReason": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "studyConfig": {
        "algorithm": "ALGORITHM_UNSPECIFIED",
        "automatedStoppingConfig": {
          "decayCurveStoppingConfig": {
            "useElapsedTime": true
          },
          "medianAutomatedStoppingConfig": {
            "useElapsedTime": true
          }
        },
        "metrics": [
          {
            "goal": "GOAL_TYPE_UNSPECIFIED",
            "metric": "string"
          }
        ],
        "parameters": [
          {
            "categoricalValueSpec": {
              "values": [
                "string"
              ]
            },
            "childParameterSpecs": [
              {}
            ],
            "discreteValueSpec": {
              "values": [
                0
              ]
            },
            "doubleValueSpec": {
              "maxValue": 0,
              "minValue": 0
            },
            "integerValueSpec": {
              "maxValue": "string",
              "minValue": "string"
            },
            "parameter": "string",
            "parentCategoricalValues": {
              "values": [
                "string"
              ]
            },
            "parentDiscreteValues": {
              "values": [
                0
              ]
            },
            "parentIntValues": {
              "values": [
                "string"
              ]
            },
            "scaleType": "SCALE_TYPE_UNSPECIFIED",
            "type": "PARAMETER_TYPE_UNSPECIFIED"
          }
        ]
      }
    }
  ]
}
```

<h3 id="mlprojectslocationsstudieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__ListStudiesResponse](#schemagooglecloudmlv1__liststudiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.locations.studies.create

<a id="opIdml.projects.locations.studies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/studies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "studyConfig": {
      "algorithm": "ALGORITHM_UNSPECIFIED",
      "automatedStoppingConfig": {
        "decayCurveStoppingConfig": {
          "useElapsedTime": true
        },
        "medianAutomatedStoppingConfig": {
          "useElapsedTime": true
        }
      },
      "metrics": [
        {
          "goal": "GOAL_TYPE_UNSPECIFIED",
          "metric": "string"
        }
      ],
      "parameters": [
        {
          "categoricalValueSpec": {
            "values": [
              "string"
            ]
          },
          "childParameterSpecs": [
            {}
          ],
          "discreteValueSpec": {
            "values": [
              0
            ]
          },
          "doubleValueSpec": {
            "maxValue": 0,
            "minValue": 0
          },
          "integerValueSpec": {
            "maxValue": "string",
            "minValue": "string"
          },
          "parameter": "string",
          "parentCategoricalValues": {
            "values": [
              "string"
            ]
          },
          "parentDiscreteValues": {
            "values": [
              0
            ]
          },
          "parentIntValues": {
            "values": [
              "string"
            ]
          },
          "scaleType": "SCALE_TYPE_UNSPECIFIED",
          "type": "PARAMETER_TYPE_UNSPECIFIED"
        }
      ]
    }
  }'
```

`POST /v1/{parent}/studies`

Creates a study.

> Body parameter

```json
{
  "studyConfig": {
    "algorithm": "ALGORITHM_UNSPECIFIED",
    "automatedStoppingConfig": {
      "decayCurveStoppingConfig": {
        "useElapsedTime": true
      },
      "medianAutomatedStoppingConfig": {
        "useElapsedTime": true
      }
    },
    "metrics": [
      {
        "goal": "GOAL_TYPE_UNSPECIFIED",
        "metric": "string"
      }
    ],
    "parameters": [
      {
        "categoricalValueSpec": {
          "values": [
            "string"
          ]
        },
        "childParameterSpecs": [
          {}
        ],
        "discreteValueSpec": {
          "values": [
            0
          ]
        },
        "doubleValueSpec": {
          "maxValue": 0,
          "minValue": 0
        },
        "integerValueSpec": {
          "maxValue": "string",
          "minValue": "string"
        },
        "parameter": "string",
        "parentCategoricalValues": {
          "values": [
            "string"
          ]
        },
        "parentDiscreteValues": {
          "values": [
            0
          ]
        },
        "parentIntValues": {
          "values": [
            "string"
          ]
        },
        "scaleType": "SCALE_TYPE_UNSPECIFIED",
        "type": "PARAMETER_TYPE_UNSPECIFIED"
      }
    ]
  }
}
```

<h3 id="mlprojectslocationsstudiescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The project and location that the study belongs to. Format: projects/{project}/locations/{location}|
|studyId|query|string|false|Required. The ID to use for the study, which will become the final component of the study's resource name.|
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
|body|body|[GoogleCloudMlV1__Study](#schemagooglecloudmlv1__study)|false|none|
|» studyConfig|body|[GoogleCloudMlV1__StudyConfig](#schemagooglecloudmlv1__studyconfig)|false|Required. Configuration of the study.|

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
  "inactiveReason": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "studyConfig": {
    "algorithm": "ALGORITHM_UNSPECIFIED",
    "automatedStoppingConfig": {
      "decayCurveStoppingConfig": {
        "useElapsedTime": true
      },
      "medianAutomatedStoppingConfig": {
        "useElapsedTime": true
      }
    },
    "metrics": [
      {
        "goal": "GOAL_TYPE_UNSPECIFIED",
        "metric": "string"
      }
    ],
    "parameters": [
      {
        "categoricalValueSpec": {
          "values": [
            "string"
          ]
        },
        "childParameterSpecs": [
          {}
        ],
        "discreteValueSpec": {
          "values": [
            0
          ]
        },
        "doubleValueSpec": {
          "maxValue": 0,
          "minValue": 0
        },
        "integerValueSpec": {
          "maxValue": "string",
          "minValue": "string"
        },
        "parameter": "string",
        "parentCategoricalValues": {
          "values": [
            "string"
          ]
        },
        "parentDiscreteValues": {
          "values": [
            0
          ]
        },
        "parentIntValues": {
          "values": [
            "string"
          ]
        },
        "scaleType": "SCALE_TYPE_UNSPECIFIED",
        "type": "PARAMETER_TYPE_UNSPECIFIED"
      }
    ]
  }
}
```

<h3 id="mlprojectslocationsstudiescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__Study](#schemagooglecloudmlv1__study)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.locations.studies.trials.list

<a id="opIdml.projects.locations.studies.trials.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/trials \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/trials`

Lists the trials associated with a study.

<h3 id="mlprojectslocationsstudiestrialslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the study that the trial belongs to.|
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
  "trials": [
    {
      "clientId": "string",
      "endTime": "string",
      "finalMeasurement": {
        "elapsedTime": "string",
        "metrics": [
          {
            "metric": "string",
            "value": 0
          }
        ],
        "stepCount": "string"
      },
      "infeasibleReason": "string",
      "measurements": [
        {
          "elapsedTime": "string",
          "metrics": [
            {
              "metric": "string",
              "value": 0
            }
          ],
          "stepCount": "string"
        }
      ],
      "name": "string",
      "parameters": [
        {
          "floatValue": 0,
          "intValue": "string",
          "parameter": "string",
          "stringValue": "string"
        }
      ],
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "trialInfeasible": true
    }
  ]
}
```

<h3 id="mlprojectslocationsstudiestrialslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__ListTrialsResponse](#schemagooglecloudmlv1__listtrialsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.locations.studies.trials.create

<a id="opIdml.projects.locations.studies.trials.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/trials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "finalMeasurement": {
      "elapsedTime": "string",
      "metrics": [
        {
          "metric": "string",
          "value": 0
        }
      ],
      "stepCount": "string"
    },
    "measurements": [
      {
        "elapsedTime": "string",
        "metrics": [
          {
            "metric": "string",
            "value": 0
          }
        ],
        "stepCount": "string"
      }
    ],
    "parameters": [
      {
        "floatValue": 0,
        "intValue": "string",
        "parameter": "string",
        "stringValue": "string"
      }
    ],
    "state": "STATE_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/trials`

Adds a user provided trial to a study.

> Body parameter

```json
{
  "finalMeasurement": {
    "elapsedTime": "string",
    "metrics": [
      {
        "metric": "string",
        "value": 0
      }
    ],
    "stepCount": "string"
  },
  "measurements": [
    {
      "elapsedTime": "string",
      "metrics": [
        {
          "metric": "string",
          "value": 0
        }
      ],
      "stepCount": "string"
    }
  ],
  "parameters": [
    {
      "floatValue": 0,
      "intValue": "string",
      "parameter": "string",
      "stringValue": "string"
    }
  ],
  "state": "STATE_UNSPECIFIED"
}
```

<h3 id="mlprojectslocationsstudiestrialscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the study that the trial belongs to.|
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
|body|body|[GoogleCloudMlV1__Trial](#schemagooglecloudmlv1__trial)|false|none|
|» finalMeasurement|body|[GoogleCloudMlV1__Measurement](#schemagooglecloudmlv1__measurement)|false|The final measurement containing the objective value.|
|» measurements|body|[[GoogleCloudMlV1__Measurement](#schemagooglecloudmlv1__measurement)]|false|A list of measurements that are strictly lexicographically ordered by their induced tuples (steps, elapsed_time). These are used for early stopping computations.|
|» parameters|body|[[GoogleCloudMlV1_Trial_Parameter](#schemagooglecloudmlv1_trial_parameter)]|false|The parameters of the trial.|
|» state|body|string|false|The detailed state of a trial.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» state|STATE_UNSPECIFIED|
|» state|REQUESTED|
|» state|ACTIVE|
|» state|COMPLETED|
|» state|STOPPING|

> Example responses

> 200 Response

```json
{
  "clientId": "string",
  "endTime": "string",
  "finalMeasurement": {
    "elapsedTime": "string",
    "metrics": [
      {
        "metric": "string",
        "value": 0
      }
    ],
    "stepCount": "string"
  },
  "infeasibleReason": "string",
  "measurements": [
    {
      "elapsedTime": "string",
      "metrics": [
        {
          "metric": "string",
          "value": 0
        }
      ],
      "stepCount": "string"
    }
  ],
  "name": "string",
  "parameters": [
    {
      "floatValue": 0,
      "intValue": "string",
      "parameter": "string",
      "stringValue": "string"
    }
  ],
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "trialInfeasible": true
}
```

<h3 id="mlprojectslocationsstudiestrialscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__Trial](#schemagooglecloudmlv1__trial)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.locations.studies.trials.listOptimalTrials

<a id="opIdml.projects.locations.studies.trials.listOptimalTrials"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/trials:listOptimalTrials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/{parent}/trials:listOptimalTrials`

Lists the pareto-optimal trials for multi-objective study or the optimal trials for single-objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency

> Body parameter

```json
{}
```

<h3 id="mlprojectslocationsstudiestrialslistoptimaltrials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the study that the pareto-optimal trial belongs to.|
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
|body|body|[GoogleCloudMlV1__ListOptimalTrialsRequest](#schemagooglecloudmlv1__listoptimaltrialsrequest)|false|none|

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
  "trials": [
    {
      "clientId": "string",
      "endTime": "string",
      "finalMeasurement": {
        "elapsedTime": "string",
        "metrics": [
          {
            "metric": "string",
            "value": 0
          }
        ],
        "stepCount": "string"
      },
      "infeasibleReason": "string",
      "measurements": [
        {
          "elapsedTime": "string",
          "metrics": [
            {
              "metric": "string",
              "value": 0
            }
          ],
          "stepCount": "string"
        }
      ],
      "name": "string",
      "parameters": [
        {
          "floatValue": 0,
          "intValue": "string",
          "parameter": "string",
          "stringValue": "string"
        }
      ],
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "trialInfeasible": true
    }
  ]
}
```

<h3 id="mlprojectslocationsstudiestrialslistoptimaltrials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__ListOptimalTrialsResponse](#schemagooglecloudmlv1__listoptimaltrialsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.locations.studies.trials.suggest

<a id="opIdml.projects.locations.studies.trials.suggest"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/trials:suggest \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientId": "string",
    "suggestionCount": 0
  }'
```

`POST /v1/{parent}/trials:suggest`

Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.

> Body parameter

```json
{
  "clientId": "string",
  "suggestionCount": 0
}
```

<h3 id="mlprojectslocationsstudiestrialssuggest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the study that the trial belongs to.|
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
|body|body|[GoogleCloudMlV1__SuggestTrialsRequest](#schemagooglecloudmlv1__suggesttrialsrequest)|false|none|
|» clientId|body|string|false|Required. The identifier of the client that is requesting the suggestion. If multiple SuggestTrialsRequests have the same `client_id`, the service will return the identical suggested trial if the trial is pending, and provide a new trial if the last suggested trial was completed.|
|» suggestionCount|body|integer(int32)|false|Required. The number of suggestions requested.|

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

<h3 id="mlprojectslocationsstudiestrialssuggest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunning__Operation](#schemagooglelongrunning__operation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.models.versions.list

<a id="opIdml.projects.models.versions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/versions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{parent}/versions`

Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: {}.

<h3 id="mlprojectsmodelsversionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the model for which to list the version.|
|filter|query|string|false|Optional. Specifies the subset of versions to retrieve.|
|pageSize|query|integer|false|Optional. The number of versions to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.|
|pageToken|query|string|false|Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.|
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
  "versions": [
    {
      "acceleratorConfig": {
        "count": "string",
        "type": "ACCELERATOR_TYPE_UNSPECIFIED"
      },
      "autoScaling": {
        "maxNodes": 0,
        "metrics": [
          {
            "name": "METRIC_NAME_UNSPECIFIED",
            "target": 0
          }
        ],
        "minNodes": 0
      },
      "container": {
        "args": [
          "string"
        ],
        "command": [
          "string"
        ],
        "env": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "image": "string",
        "ports": [
          {
            "containerPort": 0
          }
        ]
      },
      "createTime": "string",
      "deploymentUri": "string",
      "description": "string",
      "errorMessage": "string",
      "etag": "string",
      "explanationConfig": {
        "integratedGradientsAttribution": {
          "numIntegralSteps": 0
        },
        "sampledShapleyAttribution": {
          "numPaths": 0
        },
        "xraiAttribution": {
          "numIntegralSteps": 0
        }
      },
      "framework": "FRAMEWORK_UNSPECIFIED",
      "isDefault": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lastMigrationModelId": "string",
      "lastMigrationTime": "string",
      "lastUseTime": "string",
      "machineType": "string",
      "manualScaling": {
        "nodes": 0
      },
      "name": "string",
      "packageUris": [
        "string"
      ],
      "predictionClass": "string",
      "pythonVersion": "string",
      "requestLoggingConfig": {
        "bigqueryTableName": "string",
        "samplingPercentage": 0
      },
      "routes": {
        "health": "string",
        "predict": "string"
      },
      "runtimeVersion": "string",
      "serviceAccount": "string",
      "state": "UNKNOWN"
    }
  ]
}
```

<h3 id="mlprojectsmodelsversionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudMlV1__ListVersionsResponse](#schemagooglecloudmlv1__listversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform.read-only )
</aside>

## ml.projects.models.versions.create

<a id="opIdml.projects.models.versions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acceleratorConfig": {
      "count": "string",
      "type": "ACCELERATOR_TYPE_UNSPECIFIED"
    },
    "autoScaling": {
      "maxNodes": 0,
      "metrics": [
        {
          "name": "METRIC_NAME_UNSPECIFIED",
          "target": 0
        }
      ],
      "minNodes": 0
    },
    "container": {
      "args": [
        "string"
      ],
      "command": [
        "string"
      ],
      "env": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "image": "string",
      "ports": [
        {
          "containerPort": 0
        }
      ]
    },
    "createTime": "string",
    "deploymentUri": "string",
    "description": "string",
    "errorMessage": "string",
    "etag": "string",
    "explanationConfig": {
      "integratedGradientsAttribution": {
        "numIntegralSteps": 0
      },
      "sampledShapleyAttribution": {
        "numPaths": 0
      },
      "xraiAttribution": {
        "numIntegralSteps": 0
      }
    },
    "framework": "FRAMEWORK_UNSPECIFIED",
    "isDefault": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastUseTime": "string",
    "machineType": "string",
    "manualScaling": {
      "nodes": 0
    },
    "name": "string",
    "packageUris": [
      "string"
    ],
    "predictionClass": "string",
    "pythonVersion": "string",
    "requestLoggingConfig": {
      "bigqueryTableName": "string",
      "samplingPercentage": 0
    },
    "routes": {
      "health": "string",
      "predict": "string"
    },
    "runtimeVersion": "string",
    "serviceAccount": "string",
    "state": "UNKNOWN"
  }'
```

`POST /v1/{parent}/versions`

Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.

> Body parameter

```json
{
  "acceleratorConfig": {
    "count": "string",
    "type": "ACCELERATOR_TYPE_UNSPECIFIED"
  },
  "autoScaling": {
    "maxNodes": 0,
    "metrics": [
      {
        "name": "METRIC_NAME_UNSPECIFIED",
        "target": 0
      }
    ],
    "minNodes": 0
  },
  "container": {
    "args": [
      "string"
    ],
    "command": [
      "string"
    ],
    "env": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "image": "string",
    "ports": [
      {
        "containerPort": 0
      }
    ]
  },
  "createTime": "string",
  "deploymentUri": "string",
  "description": "string",
  "errorMessage": "string",
  "etag": "string",
  "explanationConfig": {
    "integratedGradientsAttribution": {
      "numIntegralSteps": 0
    },
    "sampledShapleyAttribution": {
      "numPaths": 0
    },
    "xraiAttribution": {
      "numIntegralSteps": 0
    }
  },
  "framework": "FRAMEWORK_UNSPECIFIED",
  "isDefault": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lastUseTime": "string",
  "machineType": "string",
  "manualScaling": {
    "nodes": 0
  },
  "name": "string",
  "packageUris": [
    "string"
  ],
  "predictionClass": "string",
  "pythonVersion": "string",
  "requestLoggingConfig": {
    "bigqueryTableName": "string",
    "samplingPercentage": 0
  },
  "routes": {
    "health": "string",
    "predict": "string"
  },
  "runtimeVersion": "string",
  "serviceAccount": "string",
  "state": "UNKNOWN"
}
```

<h3 id="mlprojectsmodelsversionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the model.|
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
|body|body|[GoogleCloudMlV1__Version](#schemagooglecloudmlv1__version)|false|none|
|» acceleratorConfig|body|[GoogleCloudMlV1__AcceleratorConfig](#schemagooglecloudmlv1__acceleratorconfig)|false|Optional. Accelerator config for using GPUs for online prediction (beta). Only specify this field if you have specified a Compute Engine (N1) machine type in the `machineType` field. Learn more about [using GPUs for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus).|
|» autoScaling|body|[GoogleCloudMlV1__AutoScaling](#schemagooglecloudmlv1__autoscaling)|false|Automatically scale the number of nodes used to serve the model in response to increases and decreases in traffic. Care should be taken to ramp up traffic according to the model's ability to scale or you will start seeing increases in latency and 429 response codes.|
|» container|body|[GoogleCloudMlV1__ContainerSpec](#schemagooglecloudmlv1__containerspec)|false|Optional. Specifies a custom container to use for serving predictions. If you specify this field, then `machineType` is required. If you specify this field, then `deploymentUri` is optional. If you specify this field, then you must not specify `runtimeVersion`, `packageUris`, `framework`, `pythonVersion`, or `predictionClass`.|
|» createTime|body|string(google-datetime)|false|Output only. The time the version was created.|
|» deploymentUri|body|string|false|The Cloud Storage URI of a directory containing trained model artifacts to be used to create the model version. See the [guide to deploying models](/ai-platform/prediction/docs/deploying-models) for more information. The total number of files under this directory must not exceed 1000. During projects.models.versions.create, AI Platform Prediction copies all files from the specified directory to a location managed by the service. From then on, AI Platform Prediction uses these copies of the model artifacts to serve predictions, not the original files in Cloud Storage, so this location is useful only as a historical record. If you specify container, then this field is optional. Otherwise, it is required. Learn [how to use this field with a custom container](/ai-platform/prediction/docs/custom-container-requirements#artifacts).|
|» description|body|string|false|Optional. The description specified for the version when it was created.|
|» errorMessage|body|string|false|Output only. The details of a failure or a cancellation.|
|» etag|body|string(byte)|false|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetVersion`, and systems are expected to put that etag in the request to `UpdateVersion` to ensure that their change will be applied to the model as intended.|
|» explanationConfig|body|[GoogleCloudMlV1__ExplanationConfig](#schemagooglecloudmlv1__explanationconfig)|false|Optional. Configures explainability features on the model's version. Some explanation features require additional metadata to be loaded as part of the model payload.|
|» framework|body|string|false|Optional. The machine learning framework AI Platform uses to train this version of the model. Valid values are `TENSORFLOW`, `SCIKIT_LEARN`, `XGBOOST`. If you do not specify a framework, AI Platform will analyze files in the deployment_uri to determine a framework. If you choose `SCIKIT_LEARN` or `XGBOOST`, you must also set the runtime version of the model to 1.4 or greater. Do **not** specify a framework if you're deploying a [custom prediction routine](/ai-platform/prediction/docs/custom-prediction-routines) or if you're using a [custom container](/ai-platform/prediction/docs/use-custom-container).|
|» isDefault|body|boolean|false|Output only. If true, this version will be used to handle prediction requests that do not specify a version. You can change the default version by calling projects.methods.versions.setDefault.|
|» labels|body|object|false|Optional. One or more labels that you can add, to organize your model versions. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models.|
|» » **additionalProperties**|body|string|false|none|
|» lastUseTime|body|string(google-datetime)|false|Output only. The time the version was last used for prediction.|
|» machineType|body|string|false|Optional. The type of machine on which to serve the model. Currently only applies to online prediction service. To learn about valid values for this field, read [Choosing a machine type for online prediction](/ai-platform/prediction/docs/machine-types-online-prediction). If this field is not specified and you are using a [regional endpoint](/ai-platform/prediction/docs/regional-endpoints), then the machine type defaults to `n1-standard-2`. If this field is not specified and you are using the global endpoint (`ml.googleapis.com`), then the machine type defaults to `mls1-c1-m2`.|
|» manualScaling|body|[GoogleCloudMlV1__ManualScaling](#schemagooglecloudmlv1__manualscaling)|false|Manually select the number of nodes to use for serving the model. You should generally use `auto_scaling` with an appropriate `min_nodes` instead, but this option is available if you want more predictable billing. Beware that latency and error rates will increase if the traffic exceeds that capability of the system to serve it based on the selected number of nodes.|
|» name|body|string|false|Required. The name specified for the version when it was created. The version name must be unique within the model it is created in.|
|» packageUris|body|[string]|false|Optional. Cloud Storage paths (`gs://…`) of packages for [custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines) or [scikit-learn pipelines with custom code](/ml-engine/docs/scikit/exporting-for-prediction#custom-pipeline-code). For a custom prediction routine, one of these packages must contain your Predictor class (see [`predictionClass`](#Version.FIELDS.prediction_class)). Additionally, include any dependencies used by your Predictor or scikit-learn pipeline uses that are not already included in your selected [runtime version](/ml-engine/docs/tensorflow/runtime-version-list). If you specify this field, you must also set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater.|
|» predictionClass|body|string|false|Optional. The fully qualified name (module_name.class_name) of a class that implements the Predictor interface described in this reference field. The module containing this class should be included in a package provided to the [`packageUris` field](#Version.FIELDS.package_uris). Specify this field if and only if you are deploying a [custom prediction routine (beta)](/ml-engine/docs/tensorflow/custom-prediction-routines). If you specify this field, you must set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater and you must set `machineType` to a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction). The following code sample provides the Predictor interface: class Predictor(object): """Interface for constructing custom predictors.""" def predict(self, instances, **kwargs): """Performs custom prediction. Instances are the decoded values from the request. They have already been deserialized from JSON. Args: instances: A list of prediction input instances. **kwargs: A dictionary of keyword args provided as additional fields on the predict request body. Returns: A list of outputs containing the prediction results. This list must be JSON serializable. """ raise NotImplementedError() @classmethod def from_path(cls, model_dir): """Creates an instance of Predictor using the given path. Loading of the predictor should be done in this method. Args: model_dir: The local directory that contains the exported model file along with any additional files uploaded when creating the version resource. Returns: An instance implementing this Predictor class. """ raise NotImplementedError() Learn more about [the Predictor interface and custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines).|
|» pythonVersion|body|string|false|Required. The version of Python used in prediction. The following Python versions are available: * Python '3.7' is available when `runtime_version` is set to '1.15' or later. * Python '3.5' is available when `runtime_version` is set to a version from '1.4' to '1.14'. * Python '2.7' is available when `runtime_version` is set to '1.15' or earlier. Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list).|
|» requestLoggingConfig|body|[GoogleCloudMlV1__RequestLoggingConfig](#schemagooglecloudmlv1__requestloggingconfig)|false|Optional. *Only* specify this field in a projects.models.versions.patch request. Specifying it in a projects.models.versions.create request has no effect. Configures the request-response pair logging on predictions from this Version.|
|» routes|body|[GoogleCloudMlV1__RouteMap](#schemagooglecloudmlv1__routemap)|false|Optional. Specifies paths on a custom container's HTTP server where AI Platform Prediction sends certain requests. If you specify this field, then you must also specify the `container` field. If you specify the `container` field and do not specify this field, it defaults to the following: ```json { "predict": "/v1/models/MODEL/versions/VERSION:predict", "health": "/v1/models/MODEL/versions/VERSION" } ``` See RouteMap for more details about these default values.|
|» runtimeVersion|body|string|false|Required. The AI Platform runtime version to use for this deployment. For more information, see the [runtime version list](/ml-engine/docs/runtime-version-list) and [how to manage runtime versions](/ml-engine/docs/versioning).|
|» serviceAccount|body|string|false|Optional. Specifies the service account for resource access control. If you specify this field, then you must also specify either the `containerSpec` or the `predictionClass` field. Learn more about [using a custom service account](/ai-platform/prediction/docs/custom-service-account).|
|» state|body|string|false|Output only. The state of a version.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» framework|FRAMEWORK_UNSPECIFIED|
|» framework|TENSORFLOW|
|» framework|SCIKIT_LEARN|
|» framework|XGBOOST|
|» state|UNKNOWN|
|» state|READY|
|» state|CREATING|
|» state|FAILED|
|» state|DELETING|
|» state|UPDATING|

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

<h3 id="mlprojectsmodelsversionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunning__Operation](#schemagooglelongrunning__operation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.models.getIamPolicy

<a id="opIdml.projects.models.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="mlprojectsmodelsgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
|options.requestedPolicyVersion|query|integer|false|Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
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

<h3 id="mlprojectsmodelsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1__Policy](#schemagoogleiamv1__policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.models.setIamPolicy

<a id="opIdml.projects.models.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "auditConfigs": [
        {
          "auditLogConfigs": [
            {
              "exemptedMembers": [
                "string"
              ],
              "logType": "LOG_TYPE_UNSPECIFIED"
            }
          ],
          "service": "string"
        }
      ],
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
    },
    "updateMask": "string"
  }'
```

`POST /v1/{resource}:setIamPolicy`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

> Body parameter

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
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
  },
  "updateMask": "string"
}
```

<h3 id="mlprojectsmodelssetiampolicy-parameters">Parameters</h3>

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
|body|body|[GoogleIamV1__SetIamPolicyRequest](#schemagoogleiamv1__setiampolicyrequest)|false|none|
|» policy|body|[GoogleIamV1__Policy](#schemagoogleiamv1__policy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|» updateMask|body|string(google-fieldmask)|false|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

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
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
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

<h3 id="mlprojectsmodelssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1__Policy](#schemagoogleiamv1__policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## ml.projects.models.testIamPermissions

<a id="opIdml.projects.models.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:testIamPermissions \
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

`POST /v1/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="mlprojectsmodelstestiampermissions-parameters">Parameters</h3>

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
|body|body|[GoogleIamV1__TestIamPermissionsRequest](#schemagoogleiamv1__testiampermissionsrequest)|false|none|
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

<h3 id="mlprojectsmodelstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1__TestIamPermissionsResponse](#schemagoogleiamv1__testiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleApi__HttpBody">GoogleApi__HttpBody</h2>
<!-- backwards compatibility -->
<a id="schemagoogleapi__httpbody"></a>
<a id="schema_GoogleApi__HttpBody"></a>
<a id="tocSgoogleapi__httpbody"></a>
<a id="tocsgoogleapi__httpbody"></a>

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

<h2 id="tocS_GoogleCloudMlV1_AutomatedStoppingConfig_DecayCurveAutomatedStoppingConfig">GoogleCloudMlV1_AutomatedStoppingConfig_DecayCurveAutomatedStoppingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1_automatedstoppingconfig_decaycurveautomatedstoppingconfig"></a>
<a id="schema_GoogleCloudMlV1_AutomatedStoppingConfig_DecayCurveAutomatedStoppingConfig"></a>
<a id="tocSgooglecloudmlv1_automatedstoppingconfig_decaycurveautomatedstoppingconfig"></a>
<a id="tocsgooglecloudmlv1_automatedstoppingconfig_decaycurveautomatedstoppingconfig"></a>

```json
{
  "useElapsedTime": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|useElapsedTime|boolean|false|none|If true, measurement.elapsed_time is used as the x-axis of each Trials Decay Curve. Otherwise, Measurement.steps will be used as the x-axis.|

<h2 id="tocS_GoogleCloudMlV1_AutomatedStoppingConfig_MedianAutomatedStoppingConfig">GoogleCloudMlV1_AutomatedStoppingConfig_MedianAutomatedStoppingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1_automatedstoppingconfig_medianautomatedstoppingconfig"></a>
<a id="schema_GoogleCloudMlV1_AutomatedStoppingConfig_MedianAutomatedStoppingConfig"></a>
<a id="tocSgooglecloudmlv1_automatedstoppingconfig_medianautomatedstoppingconfig"></a>
<a id="tocsgooglecloudmlv1_automatedstoppingconfig_medianautomatedstoppingconfig"></a>

```json
{
  "useElapsedTime": true
}
```

The median automated stopping rule stops a pending trial if the trial's best objective_value is strictly below the median 'performance' of all completed trials reported up to the trial's last measurement. Currently, 'performance' refers to the running average of the objective values reported by the trial in each measurement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|useElapsedTime|boolean|false|none|If true, the median automated stopping rule applies to measurement.use_elapsed_time, which means the elapsed_time field of the current trial's latest measurement is used to compute the median objective value for each completed trial.|

<h2 id="tocS_GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric">GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1_hyperparameteroutput_hyperparametermetric"></a>
<a id="schema_GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric"></a>
<a id="tocSgooglecloudmlv1_hyperparameteroutput_hyperparametermetric"></a>
<a id="tocsgooglecloudmlv1_hyperparameteroutput_hyperparametermetric"></a>

```json
{
  "objectiveValue": 0,
  "trainingStep": "string"
}
```

An observed value of a metric.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectiveValue|number(double)|false|none|The objective value at this training step.|
|trainingStep|string(int64)|false|none|The global training step for this metric.|

<h2 id="tocS_GoogleCloudMlV1_Measurement_Metric">GoogleCloudMlV1_Measurement_Metric</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1_measurement_metric"></a>
<a id="schema_GoogleCloudMlV1_Measurement_Metric"></a>
<a id="tocSgooglecloudmlv1_measurement_metric"></a>
<a id="tocsgooglecloudmlv1_measurement_metric"></a>

```json
{
  "metric": "string",
  "value": 0
}
```

A message representing a metric in the measurement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metric|string|false|none|Required. Metric name.|
|value|number(double)|false|none|Required. The value for this metric.|

<h2 id="tocS_GoogleCloudMlV1_StudyConfigParameterSpec_CategoricalValueSpec">GoogleCloudMlV1_StudyConfigParameterSpec_CategoricalValueSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1_studyconfigparameterspec_categoricalvaluespec"></a>
<a id="schema_GoogleCloudMlV1_StudyConfigParameterSpec_CategoricalValueSpec"></a>
<a id="tocSgooglecloudmlv1_studyconfigparameterspec_categoricalvaluespec"></a>
<a id="tocsgooglecloudmlv1_studyconfigparameterspec_categoricalvaluespec"></a>

```json
{
  "values": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[string]|false|none|Must be specified if type is `CATEGORICAL`. The list of possible categories.|

<h2 id="tocS_GoogleCloudMlV1_StudyConfigParameterSpec_DiscreteValueSpec">GoogleCloudMlV1_StudyConfigParameterSpec_DiscreteValueSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1_studyconfigparameterspec_discretevaluespec"></a>
<a id="schema_GoogleCloudMlV1_StudyConfigParameterSpec_DiscreteValueSpec"></a>
<a id="tocSgooglecloudmlv1_studyconfigparameterspec_discretevaluespec"></a>
<a id="tocsgooglecloudmlv1_studyconfigparameterspec_discretevaluespec"></a>

```json
{
  "values": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[number(double)]|false|none|Must be specified if type is `DISCRETE`. A list of feasible points. The list should be in strictly increasing order. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values.|

<h2 id="tocS_GoogleCloudMlV1_StudyConfigParameterSpec_DoubleValueSpec">GoogleCloudMlV1_StudyConfigParameterSpec_DoubleValueSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1_studyconfigparameterspec_doublevaluespec"></a>
<a id="schema_GoogleCloudMlV1_StudyConfigParameterSpec_DoubleValueSpec"></a>
<a id="tocSgooglecloudmlv1_studyconfigparameterspec_doublevaluespec"></a>
<a id="tocsgooglecloudmlv1_studyconfigparameterspec_doublevaluespec"></a>

```json
{
  "maxValue": 0,
  "minValue": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxValue|number(double)|false|none|Must be specified if type is `DOUBLE`. Maximum value of the parameter.|
|minValue|number(double)|false|none|Must be specified if type is `DOUBLE`. Minimum value of the parameter.|

<h2 id="tocS_GoogleCloudMlV1_StudyConfigParameterSpec_IntegerValueSpec">GoogleCloudMlV1_StudyConfigParameterSpec_IntegerValueSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1_studyconfigparameterspec_integervaluespec"></a>
<a id="schema_GoogleCloudMlV1_StudyConfigParameterSpec_IntegerValueSpec"></a>
<a id="tocSgooglecloudmlv1_studyconfigparameterspec_integervaluespec"></a>
<a id="tocsgooglecloudmlv1_studyconfigparameterspec_integervaluespec"></a>

```json
{
  "maxValue": "string",
  "minValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxValue|string(int64)|false|none|Must be specified if type is `INTEGER`. Maximum value of the parameter.|
|minValue|string(int64)|false|none|Must be specified if type is `INTEGER`. Minimum value of the parameter.|

<h2 id="tocS_GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentCategoricalValueSpec">GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentCategoricalValueSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1_studyconfigparameterspec_matchingparentcategoricalvaluespec"></a>
<a id="schema_GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentCategoricalValueSpec"></a>
<a id="tocSgooglecloudmlv1_studyconfigparameterspec_matchingparentcategoricalvaluespec"></a>
<a id="tocsgooglecloudmlv1_studyconfigparameterspec_matchingparentcategoricalvaluespec"></a>

```json
{
  "values": [
    "string"
  ]
}
```

Represents the spec to match categorical values from parent parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[string]|false|none|Matches values of the parent parameter with type 'CATEGORICAL'. All values must exist in `categorical_value_spec` of parent parameter.|

<h2 id="tocS_GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentDiscreteValueSpec">GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentDiscreteValueSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1_studyconfigparameterspec_matchingparentdiscretevaluespec"></a>
<a id="schema_GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentDiscreteValueSpec"></a>
<a id="tocSgooglecloudmlv1_studyconfigparameterspec_matchingparentdiscretevaluespec"></a>
<a id="tocsgooglecloudmlv1_studyconfigparameterspec_matchingparentdiscretevaluespec"></a>

```json
{
  "values": [
    0
  ]
}
```

Represents the spec to match discrete values from parent parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[number(double)]|false|none|Matches values of the parent parameter with type 'DISCRETE'. All values must exist in `discrete_value_spec` of parent parameter.|

<h2 id="tocS_GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentIntValueSpec">GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentIntValueSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1_studyconfigparameterspec_matchingparentintvaluespec"></a>
<a id="schema_GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentIntValueSpec"></a>
<a id="tocSgooglecloudmlv1_studyconfigparameterspec_matchingparentintvaluespec"></a>
<a id="tocsgooglecloudmlv1_studyconfigparameterspec_matchingparentintvaluespec"></a>

```json
{
  "values": [
    "string"
  ]
}
```

Represents the spec to match integer values from parent parameter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|values|[string(int64)]|false|none|Matches values of the parent parameter with type 'INTEGER'. All values must lie in `integer_value_spec` of parent parameter.|

<h2 id="tocS_GoogleCloudMlV1_StudyConfig_MetricSpec">GoogleCloudMlV1_StudyConfig_MetricSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1_studyconfig_metricspec"></a>
<a id="schema_GoogleCloudMlV1_StudyConfig_MetricSpec"></a>
<a id="tocSgooglecloudmlv1_studyconfig_metricspec"></a>
<a id="tocsgooglecloudmlv1_studyconfig_metricspec"></a>

```json
{
  "goal": "GOAL_TYPE_UNSPECIFIED",
  "metric": "string"
}
```

Represents a metric to optimize.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|goal|string|false|none|Required. The optimization goal of the metric.|
|metric|string|false|none|Required. The name of the metric.|

#### Enumerated Values

|Property|Value|
|---|---|
|goal|GOAL_TYPE_UNSPECIFIED|
|goal|MAXIMIZE|
|goal|MINIMIZE|

<h2 id="tocS_GoogleCloudMlV1_StudyConfig_ParameterSpec">GoogleCloudMlV1_StudyConfig_ParameterSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1_studyconfig_parameterspec"></a>
<a id="schema_GoogleCloudMlV1_StudyConfig_ParameterSpec"></a>
<a id="tocSgooglecloudmlv1_studyconfig_parameterspec"></a>
<a id="tocsgooglecloudmlv1_studyconfig_parameterspec"></a>

```json
{
  "categoricalValueSpec": {
    "values": [
      "string"
    ]
  },
  "childParameterSpecs": [
    {
      "categoricalValueSpec": {
        "values": [
          "string"
        ]
      },
      "childParameterSpecs": [
        {}
      ],
      "discreteValueSpec": {
        "values": [
          0
        ]
      },
      "doubleValueSpec": {
        "maxValue": 0,
        "minValue": 0
      },
      "integerValueSpec": {
        "maxValue": "string",
        "minValue": "string"
      },
      "parameter": "string",
      "parentCategoricalValues": {
        "values": [
          "string"
        ]
      },
      "parentDiscreteValues": {
        "values": [
          0
        ]
      },
      "parentIntValues": {
        "values": [
          "string"
        ]
      },
      "scaleType": "SCALE_TYPE_UNSPECIFIED",
      "type": "PARAMETER_TYPE_UNSPECIFIED"
    }
  ],
  "discreteValueSpec": {
    "values": [
      0
    ]
  },
  "doubleValueSpec": {
    "maxValue": 0,
    "minValue": 0
  },
  "integerValueSpec": {
    "maxValue": "string",
    "minValue": "string"
  },
  "parameter": "string",
  "parentCategoricalValues": {
    "values": [
      "string"
    ]
  },
  "parentDiscreteValues": {
    "values": [
      0
    ]
  },
  "parentIntValues": {
    "values": [
      "string"
    ]
  },
  "scaleType": "SCALE_TYPE_UNSPECIFIED",
  "type": "PARAMETER_TYPE_UNSPECIFIED"
}
```

Represents a single parameter to optimize.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoricalValueSpec|[GoogleCloudMlV1_StudyConfigParameterSpec_CategoricalValueSpec](#schemagooglecloudmlv1_studyconfigparameterspec_categoricalvaluespec)|false|none|The value spec for a 'CATEGORICAL' parameter.|
|childParameterSpecs|[[GoogleCloudMlV1_StudyConfig_ParameterSpec](#schemagooglecloudmlv1_studyconfig_parameterspec)]|false|none|A child node is active if the parameter's value matches the child node's matching_parent_values. If two items in child_parameter_specs have the same name, they must have disjoint matching_parent_values.|
|discreteValueSpec|[GoogleCloudMlV1_StudyConfigParameterSpec_DiscreteValueSpec](#schemagooglecloudmlv1_studyconfigparameterspec_discretevaluespec)|false|none|The value spec for a 'DISCRETE' parameter.|
|doubleValueSpec|[GoogleCloudMlV1_StudyConfigParameterSpec_DoubleValueSpec](#schemagooglecloudmlv1_studyconfigparameterspec_doublevaluespec)|false|none|The value spec for a 'DOUBLE' parameter.|
|integerValueSpec|[GoogleCloudMlV1_StudyConfigParameterSpec_IntegerValueSpec](#schemagooglecloudmlv1_studyconfigparameterspec_integervaluespec)|false|none|The value spec for an 'INTEGER' parameter.|
|parameter|string|false|none|Required. The parameter name must be unique amongst all ParameterSpecs.|
|parentCategoricalValues|[GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentCategoricalValueSpec](#schemagooglecloudmlv1_studyconfigparameterspec_matchingparentcategoricalvaluespec)|false|none|Represents the spec to match categorical values from parent parameter.|
|parentDiscreteValues|[GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentDiscreteValueSpec](#schemagooglecloudmlv1_studyconfigparameterspec_matchingparentdiscretevaluespec)|false|none|Represents the spec to match discrete values from parent parameter.|
|parentIntValues|[GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentIntValueSpec](#schemagooglecloudmlv1_studyconfigparameterspec_matchingparentintvaluespec)|false|none|Represents the spec to match integer values from parent parameter.|
|scaleType|string|false|none|How the parameter should be scaled. Leave unset for categorical parameters.|
|type|string|false|none|Required. The type of the parameter.|

#### Enumerated Values

|Property|Value|
|---|---|
|scaleType|SCALE_TYPE_UNSPECIFIED|
|scaleType|UNIT_LINEAR_SCALE|
|scaleType|UNIT_LOG_SCALE|
|scaleType|UNIT_REVERSE_LOG_SCALE|
|type|PARAMETER_TYPE_UNSPECIFIED|
|type|DOUBLE|
|type|INTEGER|
|type|CATEGORICAL|
|type|DISCRETE|

<h2 id="tocS_GoogleCloudMlV1_Trial_Parameter">GoogleCloudMlV1_Trial_Parameter</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1_trial_parameter"></a>
<a id="schema_GoogleCloudMlV1_Trial_Parameter"></a>
<a id="tocSgooglecloudmlv1_trial_parameter"></a>
<a id="tocsgooglecloudmlv1_trial_parameter"></a>

```json
{
  "floatValue": 0,
  "intValue": "string",
  "parameter": "string",
  "stringValue": "string"
}
```

A message representing a parameter to be tuned. Contains the name of the parameter and the suggested value to use for this trial.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|floatValue|number(double)|false|none|Must be set if ParameterType is DOUBLE or DISCRETE.|
|intValue|string(int64)|false|none|Must be set if ParameterType is INTEGER|
|parameter|string|false|none|The name of the parameter.|
|stringValue|string|false|none|Must be set if ParameterTypeis CATEGORICAL|

<h2 id="tocS_GoogleCloudMlV1__AcceleratorConfig">GoogleCloudMlV1__AcceleratorConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__acceleratorconfig"></a>
<a id="schema_GoogleCloudMlV1__AcceleratorConfig"></a>
<a id="tocSgooglecloudmlv1__acceleratorconfig"></a>
<a id="tocsgooglecloudmlv1__acceleratorconfig"></a>

```json
{
  "count": "string",
  "type": "ACCELERATOR_TYPE_UNSPECIFIED"
}
```

Represents a hardware accelerator request config. Note that the AcceleratorConfig can be used in both Jobs and Versions. Learn more about [accelerators for training](/ml-engine/docs/using-gpus) and [accelerators for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string(int64)|false|none|The number of accelerators to attach to each machine running the job.|
|type|string|false|none|The type of accelerator to use.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ACCELERATOR_TYPE_UNSPECIFIED|
|type|NVIDIA_TESLA_K80|
|type|NVIDIA_TESLA_P100|
|type|NVIDIA_TESLA_V100|
|type|NVIDIA_TESLA_P4|
|type|NVIDIA_TESLA_T4|
|type|NVIDIA_TESLA_A100|
|type|TPU_V2|
|type|TPU_V3|
|type|TPU_V2_POD|
|type|TPU_V3_POD|
|type|TPU_V4_POD|

<h2 id="tocS_GoogleCloudMlV1__AddTrialMeasurementRequest">GoogleCloudMlV1__AddTrialMeasurementRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__addtrialmeasurementrequest"></a>
<a id="schema_GoogleCloudMlV1__AddTrialMeasurementRequest"></a>
<a id="tocSgooglecloudmlv1__addtrialmeasurementrequest"></a>
<a id="tocsgooglecloudmlv1__addtrialmeasurementrequest"></a>

```json
{
  "measurement": {
    "elapsedTime": "string",
    "metrics": [
      {
        "metric": "string",
        "value": 0
      }
    ],
    "stepCount": "string"
  }
}
```

The request message for the AddTrialMeasurement service method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|measurement|[GoogleCloudMlV1__Measurement](#schemagooglecloudmlv1__measurement)|false|none|Required. The measurement to be added to a trial.|

<h2 id="tocS_GoogleCloudMlV1__AutoScaling">GoogleCloudMlV1__AutoScaling</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__autoscaling"></a>
<a id="schema_GoogleCloudMlV1__AutoScaling"></a>
<a id="tocSgooglecloudmlv1__autoscaling"></a>
<a id="tocsgooglecloudmlv1__autoscaling"></a>

```json
{
  "maxNodes": 0,
  "metrics": [
    {
      "name": "METRIC_NAME_UNSPECIFIED",
      "target": 0
    }
  ],
  "minNodes": 0
}
```

Options for automatically scaling a model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxNodes|integer(int32)|false|none|The maximum number of nodes to scale this model under load. The actual value will depend on resource quota and availability.|
|metrics|[[GoogleCloudMlV1__MetricSpec](#schemagooglecloudmlv1__metricspec)]|false|none|MetricSpec contains the specifications to use to calculate the desired nodes count.|
|minNodes|integer(int32)|false|none|Optional. The minimum number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed. Therefore, the cost of operating this model will be at least `rate` * `min_nodes` * number of hours since last billing cycle, where `rate` is the cost per node-hour as documented in the [pricing guide](/ml-engine/docs/pricing), even if no predictions are performed. There is additional cost for each prediction performed. Unlike manual scaling, if the load gets too heavy for the nodes that are up, the service will automatically add nodes to handle the increased load as well as scale back as traffic drops, always maintaining at least `min_nodes`. You will be charged for the time in which additional nodes are used. If `min_nodes` is not specified and AutoScaling is used with a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction), `min_nodes` defaults to 0, in which case, when traffic to a model stops (and after a cool-down period), nodes will be shut down and no charges will be incurred until traffic to the model resumes. If `min_nodes` is not specified and AutoScaling is used with a [Compute Engine (N1) machine type](/ml-engine/docs/machine-types-online-prediction), `min_nodes` defaults to 1. `min_nodes` must be at least 1 for use with a Compute Engine machine type. You can set `min_nodes` when creating the model version, and you can also update `min_nodes` for an existing version: update_body.json: { 'autoScaling': { 'minNodes': 5 } } HTTP request: PATCH https://ml.googleapis.com/v1/{name=projects/*/models/*/versions/*}?update_mask=autoScaling.minNodes -d @./update_body.json |

<h2 id="tocS_GoogleCloudMlV1__AutomatedStoppingConfig">GoogleCloudMlV1__AutomatedStoppingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__automatedstoppingconfig"></a>
<a id="schema_GoogleCloudMlV1__AutomatedStoppingConfig"></a>
<a id="tocSgooglecloudmlv1__automatedstoppingconfig"></a>
<a id="tocsgooglecloudmlv1__automatedstoppingconfig"></a>

```json
{
  "decayCurveStoppingConfig": {
    "useElapsedTime": true
  },
  "medianAutomatedStoppingConfig": {
    "useElapsedTime": true
  }
}
```

Configuration for Automated Early Stopping of Trials. If no implementation_config is set, automated early stopping will not be run.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|decayCurveStoppingConfig|[GoogleCloudMlV1_AutomatedStoppingConfig_DecayCurveAutomatedStoppingConfig](#schemagooglecloudmlv1_automatedstoppingconfig_decaycurveautomatedstoppingconfig)|false|none|none|
|medianAutomatedStoppingConfig|[GoogleCloudMlV1_AutomatedStoppingConfig_MedianAutomatedStoppingConfig](#schemagooglecloudmlv1_automatedstoppingconfig_medianautomatedstoppingconfig)|false|none|The median automated stopping rule stops a pending trial if the trial's best objective_value is strictly below the median 'performance' of all completed trials reported up to the trial's last measurement. Currently, 'performance' refers to the running average of the objective values reported by the trial in each measurement.|

<h2 id="tocS_GoogleCloudMlV1__BuiltInAlgorithmOutput">GoogleCloudMlV1__BuiltInAlgorithmOutput</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__builtinalgorithmoutput"></a>
<a id="schema_GoogleCloudMlV1__BuiltInAlgorithmOutput"></a>
<a id="tocSgooglecloudmlv1__builtinalgorithmoutput"></a>
<a id="tocsgooglecloudmlv1__builtinalgorithmoutput"></a>

```json
{
  "framework": "string",
  "modelPath": "string",
  "pythonVersion": "string",
  "runtimeVersion": "string"
}
```

Represents output related to a built-in algorithm Job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|framework|string|false|none|Framework on which the built-in algorithm was trained.|
|modelPath|string|false|none|The Cloud Storage path to the `model/` directory where the training job saves the trained model. Only set for successful jobs that don't use hyperparameter tuning.|
|pythonVersion|string|false|none|Python version on which the built-in algorithm was trained.|
|runtimeVersion|string|false|none|AI Platform runtime version on which the built-in algorithm was trained.|

<h2 id="tocS_GoogleCloudMlV1__CancelJobRequest">GoogleCloudMlV1__CancelJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__canceljobrequest"></a>
<a id="schema_GoogleCloudMlV1__CancelJobRequest"></a>
<a id="tocSgooglecloudmlv1__canceljobrequest"></a>
<a id="tocsgooglecloudmlv1__canceljobrequest"></a>

```json
{}
```

Request message for the CancelJob method.

<h2 id="tocS_GoogleCloudMlV1__Capability">GoogleCloudMlV1__Capability</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__capability"></a>
<a id="schema_GoogleCloudMlV1__Capability"></a>
<a id="tocSgooglecloudmlv1__capability"></a>
<a id="tocsgooglecloudmlv1__capability"></a>

```json
{
  "availableAccelerators": [
    "ACCELERATOR_TYPE_UNSPECIFIED"
  ],
  "type": "TYPE_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableAccelerators|[string]|false|none|Available accelerators for the capability.|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|availableAccelerators|ACCELERATOR_TYPE_UNSPECIFIED|
|availableAccelerators|NVIDIA_TESLA_K80|
|availableAccelerators|NVIDIA_TESLA_P100|
|availableAccelerators|NVIDIA_TESLA_V100|
|availableAccelerators|NVIDIA_TESLA_P4|
|availableAccelerators|NVIDIA_TESLA_T4|
|availableAccelerators|NVIDIA_TESLA_A100|
|availableAccelerators|TPU_V2|
|availableAccelerators|TPU_V3|
|availableAccelerators|TPU_V2_POD|
|availableAccelerators|TPU_V3_POD|
|availableAccelerators|TPU_V4_POD|
|type|TYPE_UNSPECIFIED|
|type|TRAINING|
|type|BATCH_PREDICTION|
|type|ONLINE_PREDICTION|

<h2 id="tocS_GoogleCloudMlV1__CheckTrialEarlyStoppingStateMetatdata">GoogleCloudMlV1__CheckTrialEarlyStoppingStateMetatdata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__checktrialearlystoppingstatemetatdata"></a>
<a id="schema_GoogleCloudMlV1__CheckTrialEarlyStoppingStateMetatdata"></a>
<a id="tocSgooglecloudmlv1__checktrialearlystoppingstatemetatdata"></a>
<a id="tocsgooglecloudmlv1__checktrialearlystoppingstatemetatdata"></a>

```json
{
  "createTime": "string",
  "study": "string",
  "trial": "string"
}
```

This message will be placed in the metadata field of a google.longrunning.Operation associated with a CheckTrialEarlyStoppingState request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time at which the operation was submitted.|
|study|string|false|none|The name of the study that the trial belongs to.|
|trial|string|false|none|The trial name.|

<h2 id="tocS_GoogleCloudMlV1__CheckTrialEarlyStoppingStateRequest">GoogleCloudMlV1__CheckTrialEarlyStoppingStateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__checktrialearlystoppingstaterequest"></a>
<a id="schema_GoogleCloudMlV1__CheckTrialEarlyStoppingStateRequest"></a>
<a id="tocSgooglecloudmlv1__checktrialearlystoppingstaterequest"></a>
<a id="tocsgooglecloudmlv1__checktrialearlystoppingstaterequest"></a>

```json
{}
```

The request message for the CheckTrialEarlyStoppingState service method.

<h2 id="tocS_GoogleCloudMlV1__CheckTrialEarlyStoppingStateResponse">GoogleCloudMlV1__CheckTrialEarlyStoppingStateResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__checktrialearlystoppingstateresponse"></a>
<a id="schema_GoogleCloudMlV1__CheckTrialEarlyStoppingStateResponse"></a>
<a id="tocSgooglecloudmlv1__checktrialearlystoppingstateresponse"></a>
<a id="tocsgooglecloudmlv1__checktrialearlystoppingstateresponse"></a>

```json
{
  "endTime": "string",
  "shouldStop": true,
  "startTime": "string"
}
```

The message will be placed in the response field of a completed google.longrunning.Operation associated with a CheckTrialEarlyStoppingState request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The time at which operation processing completed.|
|shouldStop|boolean|false|none|True if the Trial should stop.|
|startTime|string(google-datetime)|false|none|The time at which the operation was started.|

<h2 id="tocS_GoogleCloudMlV1__CompleteTrialRequest">GoogleCloudMlV1__CompleteTrialRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__completetrialrequest"></a>
<a id="schema_GoogleCloudMlV1__CompleteTrialRequest"></a>
<a id="tocSgooglecloudmlv1__completetrialrequest"></a>
<a id="tocsgooglecloudmlv1__completetrialrequest"></a>

```json
{
  "finalMeasurement": {
    "elapsedTime": "string",
    "metrics": [
      {
        "metric": "string",
        "value": 0
      }
    ],
    "stepCount": "string"
  },
  "infeasibleReason": "string",
  "trialInfeasible": true
}
```

The request message for the CompleteTrial service method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finalMeasurement|[GoogleCloudMlV1__Measurement](#schemagooglecloudmlv1__measurement)|false|none|Optional. If provided, it will be used as the completed trial's final_measurement; Otherwise, the service will auto-select a previously reported measurement as the final-measurement|
|infeasibleReason|string|false|none|Optional. A human readable reason why the trial was infeasible. This should only be provided if `trial_infeasible` is true.|
|trialInfeasible|boolean|false|none|Optional. True if the trial cannot be run with the given Parameter, and final_measurement will be ignored.|

<h2 id="tocS_GoogleCloudMlV1__Config">GoogleCloudMlV1__Config</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__config"></a>
<a id="schema_GoogleCloudMlV1__Config"></a>
<a id="tocSgooglecloudmlv1__config"></a>
<a id="tocsgooglecloudmlv1__config"></a>

```json
{
  "tpuServiceAccount": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tpuServiceAccount|string|false|none|The service account Cloud ML uses to run on TPU node.|

<h2 id="tocS_GoogleCloudMlV1__ContainerPort">GoogleCloudMlV1__ContainerPort</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__containerport"></a>
<a id="schema_GoogleCloudMlV1__ContainerPort"></a>
<a id="tocSgooglecloudmlv1__containerport"></a>
<a id="tocsgooglecloudmlv1__containerport"></a>

```json
{
  "containerPort": 0
}
```

Represents a network port in a single container. This message is a subset of the [Kubernetes ContainerPort v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#containerport-v1-core).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|containerPort|integer(int32)|false|none|Number of the port to expose on the container. This must be a valid port number: 0 < PORT_NUMBER < 65536.|

<h2 id="tocS_GoogleCloudMlV1__ContainerSpec">GoogleCloudMlV1__ContainerSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__containerspec"></a>
<a id="schema_GoogleCloudMlV1__ContainerSpec"></a>
<a id="tocSgooglecloudmlv1__containerspec"></a>
<a id="tocsgooglecloudmlv1__containerspec"></a>

```json
{
  "args": [
    "string"
  ],
  "command": [
    "string"
  ],
  "env": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "image": "string",
  "ports": [
    {
      "containerPort": 0
    }
  ]
}
```

Specification of a custom container for serving predictions. This message is a subset of the [Kubernetes Container v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|args|[string]|false|none|Immutable. Specifies arguments for the command that runs when the container starts. This overrides the container's [`CMD`](https://docs.docker.com/engine/reference/builder/#cmd). Specify this field as an array of executable and arguments, similar to a Docker `CMD`'s "default parameters" form. If you don't specify this field but do specify the command field, then the command from the `command` field runs without any additional arguments. See the [Kubernetes documentation about how the `command` and `args` fields interact with a container's `ENTRYPOINT` and `CMD`](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#notes). If you don't specify this field and don't specify the `commmand` field, then the container's [`ENTRYPOINT`](https://docs.docker.com/engine/reference/builder/#cmd) and `CMD` determine what runs based on their default behavior. See the [Docker documentation about how `CMD` and `ENTRYPOINT` interact](https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact). In this field, you can reference [environment variables set by AI Platform Prediction](/ai-platform/prediction/docs/custom-container-requirements#aip-variables) and environment variables set in the env field. You cannot reference environment variables set in the Docker image. In order for environment variables to be expanded, reference them by using the following syntax: $( VARIABLE_NAME) Note that this differs from Bash variable expansion, which does not use parentheses. If a variable cannot be resolved, the reference in the input string is used unchanged. To avoid variable expansion, you can escape this syntax with `$$`; for example: $$(VARIABLE_NAME) This field corresponds to the `args` field of the [Kubernetes Containers v1 core API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core).|
|command|[string]|false|none|Immutable. Specifies the command that runs when the container starts. This overrides the container's [`ENTRYPOINT`](https://docs.docker.com/engine/reference/builder/#entrypoint). Specify this field as an array of executable and arguments, similar to a Docker `ENTRYPOINT`'s "exec" form, not its "shell" form. If you do not specify this field, then the container's `ENTRYPOINT` runs, in conjunction with the args field or the container's [`CMD`](https://docs.docker.com/engine/reference/builder/#cmd), if either exists. If this field is not specified and the container does not have an `ENTRYPOINT`, then refer to the [Docker documentation about how `CMD` and `ENTRYPOINT` interact](https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact). If you specify this field, then you can also specify the `args` field to provide additional arguments for this command. However, if you specify this field, then the container's `CMD` is ignored. See the [Kubernetes documentation about how the `command` and `args` fields interact with a container's `ENTRYPOINT` and `CMD`](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#notes). In this field, you can reference [environment variables set by AI Platform Prediction](/ai-platform/prediction/docs/custom-container-requirements#aip-variables) and environment variables set in the env field. You cannot reference environment variables set in the Docker image. In order for environment variables to be expanded, reference them by using the following syntax: $( VARIABLE_NAME) Note that this differs from Bash variable expansion, which does not use parentheses. If a variable cannot be resolved, the reference in the input string is used unchanged. To avoid variable expansion, you can escape this syntax with `$$`; for example: $$(VARIABLE_NAME) This field corresponds to the `command` field of the [Kubernetes Containers v1 core API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core).|
|env|[[GoogleCloudMlV1__EnvVar](#schemagooglecloudmlv1__envvar)]|false|none|Immutable. List of environment variables to set in the container. After the container starts running, code running in the container can read these environment variables. Additionally, the command and args fields can reference these variables. Later entries in this list can also reference earlier entries. For example, the following example sets the variable `VAR_2` to have the value `foo bar`: ```json [ { "name": "VAR_1", "value": "foo" }, { "name": "VAR_2", "value": "$(VAR_1) bar" } ] ``` If you switch the order of the variables in the example, then the expansion does not occur. This field corresponds to the `env` field of the [Kubernetes Containers v1 core API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core).|
|image|string|false|none|URI of the Docker image to be used as the custom container for serving predictions. This URI must identify [an image in Artifact Registry](/artifact-registry/docs/overview) and begin with the hostname `{REGION}-docker.pkg.dev`, where `{REGION}` is replaced by the region that matches AI Platform Prediction [regional endpoint](/ai-platform/prediction/docs/regional-endpoints) that you are using. For example, if you are using the `us-central1-ml.googleapis.com` endpoint, then this URI must begin with `us-central1-docker.pkg.dev`. To use a custom container, the [AI Platform Google-managed service account](/ai-platform/prediction/docs/custom-service-account#default) must have permission to pull (read) the Docker image at this URI. The AI Platform Google-managed service account has the following format: `service-{PROJECT_NUMBER}@cloud-ml.google.com.iam.gserviceaccount.com` {PROJECT_NUMBER} is replaced by your Google Cloud project number. By default, this service account has necessary permissions to pull an Artifact Registry image in the same Google Cloud project where you are using AI Platform Prediction. In this case, no configuration is necessary. If you want to use an image from a different Google Cloud project, learn how to [grant the Artifact Registry Reader (roles/artifactregistry.reader) role for a repository](/artifact-registry/docs/access-control#grant-repo) to your projet's AI Platform Google-managed service account. To learn about the requirements for the Docker image itself, read [Custom container requirements](/ai-platform/prediction/docs/custom-container-requirements).|
|ports|[[GoogleCloudMlV1__ContainerPort](#schemagooglecloudmlv1__containerport)]|false|none|Immutable. List of ports to expose from the container. AI Platform Prediction sends any prediction requests that it receives to the first port on this list. AI Platform Prediction also sends [liveness and health checks](/ai-platform/prediction/docs/custom-container-requirements#health) to this port. If you do not specify this field, it defaults to following value: ```json [ { "containerPort": 8080 } ] ``` AI Platform Prediction does not use ports other than the first one listed. This field corresponds to the `ports` field of the [Kubernetes Containers v1 core API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core).|

<h2 id="tocS_GoogleCloudMlV1__DiskConfig">GoogleCloudMlV1__DiskConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__diskconfig"></a>
<a id="schema_GoogleCloudMlV1__DiskConfig"></a>
<a id="tocSgooglecloudmlv1__diskconfig"></a>
<a id="tocsgooglecloudmlv1__diskconfig"></a>

```json
{
  "bootDiskSizeGb": 0,
  "bootDiskType": "string"
}
```

Represents the config of disk options.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bootDiskSizeGb|integer(int32)|false|none|Size in GB of the boot disk (default is 100GB).|
|bootDiskType|string|false|none|Type of the boot disk (default is "pd-ssd"). Valid values: "pd-ssd" (Persistent Disk Solid State Drive) or "pd-standard" (Persistent Disk Hard Disk Drive).|

<h2 id="tocS_GoogleCloudMlV1__EncryptionConfig">GoogleCloudMlV1__EncryptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__encryptionconfig"></a>
<a id="schema_GoogleCloudMlV1__EncryptionConfig"></a>
<a id="tocSgooglecloudmlv1__encryptionconfig"></a>
<a id="tocsgooglecloudmlv1__encryptionconfig"></a>

```json
{
  "kmsKeyName": "string"
}
```

Represents a custom encryption key configuration that can be applied to a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kmsKeyName|string|false|none|The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a training job. It has the following format: `projects/{PROJECT_ID}/locations/{REGION}/keyRings/{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}`|

<h2 id="tocS_GoogleCloudMlV1__EnvVar">GoogleCloudMlV1__EnvVar</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__envvar"></a>
<a id="schema_GoogleCloudMlV1__EnvVar"></a>
<a id="tocSgooglecloudmlv1__envvar"></a>
<a id="tocsgooglecloudmlv1__envvar"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

Represents an environment variable to be made available in a container. This message is a subset of the [Kubernetes EnvVar v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#envvar-v1-core).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the environment variable. Must be a [valid C identifier](https://github.com/kubernetes/kubernetes/blob/v1.18.8/staging/src/k8s.io/apimachinery/pkg/util/validation/validation.go#L258) and must not begin with the prefix `AIP_`.|
|value|string|false|none|Value of the environment variable. Defaults to an empty string. In this field, you can reference [environment variables set by AI Platform Prediction](/ai-platform/prediction/docs/custom-container-requirements#aip-variables) and environment variables set earlier in the same env field as where this message occurs. You cannot reference environment variables set in the Docker image. In order for environment variables to be expanded, reference them by using the following syntax: $(VARIABLE_NAME) Note that this differs from Bash variable expansion, which does not use parentheses. If a variable cannot be resolved, the reference in the input string is used unchanged. To avoid variable expansion, you can escape this syntax with `$$`; for example: $$(VARIABLE_NAME)|

<h2 id="tocS_GoogleCloudMlV1__ExplainRequest">GoogleCloudMlV1__ExplainRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__explainrequest"></a>
<a id="schema_GoogleCloudMlV1__ExplainRequest"></a>
<a id="tocSgooglecloudmlv1__explainrequest"></a>
<a id="tocsgooglecloudmlv1__explainrequest"></a>

```json
{
  "httpBody": {
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

Request for explanations to be issued against a trained model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpBody|[GoogleApi__HttpBody](#schemagoogleapi__httpbody)|false|none|Required. The explanation request body.|

<h2 id="tocS_GoogleCloudMlV1__ExplanationConfig">GoogleCloudMlV1__ExplanationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__explanationconfig"></a>
<a id="schema_GoogleCloudMlV1__ExplanationConfig"></a>
<a id="tocSgooglecloudmlv1__explanationconfig"></a>
<a id="tocsgooglecloudmlv1__explanationconfig"></a>

```json
{
  "integratedGradientsAttribution": {
    "numIntegralSteps": 0
  },
  "sampledShapleyAttribution": {
    "numPaths": 0
  },
  "xraiAttribution": {
    "numIntegralSteps": 0
  }
}
```

Message holding configuration options for explaining model predictions. There are three feature attribution methods supported for TensorFlow models: integrated gradients, sampled Shapley, and XRAI. [Learn more about feature attributions.](/ai-platform/prediction/docs/ai-explanations/overview)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integratedGradientsAttribution|[GoogleCloudMlV1__IntegratedGradientsAttribution](#schemagooglecloudmlv1__integratedgradientsattribution)|false|none|Attributes credit by computing the Aumann-Shapley value taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365|
|sampledShapleyAttribution|[GoogleCloudMlV1__SampledShapleyAttribution](#schemagooglecloudmlv1__sampledshapleyattribution)|false|none|An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features.|
|xraiAttribution|[GoogleCloudMlV1__XraiAttribution](#schemagooglecloudmlv1__xraiattribution)|false|none|Attributes credit by computing the XRAI taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 Currently only implemented for models with natural image inputs.|

<h2 id="tocS_GoogleCloudMlV1__GetConfigResponse">GoogleCloudMlV1__GetConfigResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__getconfigresponse"></a>
<a id="schema_GoogleCloudMlV1__GetConfigResponse"></a>
<a id="tocSgooglecloudmlv1__getconfigresponse"></a>
<a id="tocsgooglecloudmlv1__getconfigresponse"></a>

```json
{
  "config": {
    "tpuServiceAccount": "string"
  },
  "serviceAccount": "string",
  "serviceAccountProject": "string"
}
```

Returns service account information associated with a project.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[GoogleCloudMlV1__Config](#schemagooglecloudmlv1__config)|false|none|none|
|serviceAccount|string|false|none|The service account Cloud ML uses to access resources in the project.|
|serviceAccountProject|string(int64)|false|none|The project number for `service_account`.|

<h2 id="tocS_GoogleCloudMlV1__HyperparameterOutput">GoogleCloudMlV1__HyperparameterOutput</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__hyperparameteroutput"></a>
<a id="schema_GoogleCloudMlV1__HyperparameterOutput"></a>
<a id="tocSgooglecloudmlv1__hyperparameteroutput"></a>
<a id="tocsgooglecloudmlv1__hyperparameteroutput"></a>

```json
{
  "allMetrics": [
    {
      "objectiveValue": 0,
      "trainingStep": "string"
    }
  ],
  "builtInAlgorithmOutput": {
    "framework": "string",
    "modelPath": "string",
    "pythonVersion": "string",
    "runtimeVersion": "string"
  },
  "endTime": "string",
  "finalMetric": {
    "objectiveValue": 0,
    "trainingStep": "string"
  },
  "hyperparameters": {
    "property1": "string",
    "property2": "string"
  },
  "isTrialStoppedEarly": true,
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "trialId": "string",
  "webAccessUris": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents the result of a single hyperparameter tuning trial from a training job. The TrainingOutput object that is returned on successful completion of a training job with hyperparameter tuning includes a list of HyperparameterOutput objects, one for each successful trial.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allMetrics|[[GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric](#schemagooglecloudmlv1_hyperparameteroutput_hyperparametermetric)]|false|none|All recorded object metrics for this trial. This field is not currently populated.|
|builtInAlgorithmOutput|[GoogleCloudMlV1__BuiltInAlgorithmOutput](#schemagooglecloudmlv1__builtinalgorithmoutput)|false|none|Details related to built-in algorithms jobs. Only set for trials of built-in algorithms jobs that have succeeded.|
|endTime|string(google-datetime)|false|none|Output only. End time for the trial.|
|finalMetric|[GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric](#schemagooglecloudmlv1_hyperparameteroutput_hyperparametermetric)|false|none|The final objective metric seen for this trial.|
|hyperparameters|object|false|none|The hyperparameters given to this trial.|
|isTrialStoppedEarly|boolean|false|none|True if the trial is stopped early.|
|startTime|string(google-datetime)|false|none|Output only. Start time for the trial.|
|state|string|false|none|Output only. The detailed state of the trial.|
|trialId|string|false|none|The trial id for these results.|
|webAccessUris|object|false|none|URIs for accessing [interactive shells](https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) (one URI for each training node). Only available if this trial is part of a hyperparameter tuning job and the job's training_input.enable_web_access is `true`. The keys are names of each node in the training job; for example, `master-replica-0` for the master node, `worker-replica-0` for the first worker, and `ps-replica-0` for the first parameter server. The values are the URIs for each node's interactive shell.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|QUEUED|
|state|PREPARING|
|state|RUNNING|
|state|SUCCEEDED|
|state|FAILED|
|state|CANCELLING|
|state|CANCELLED|

<h2 id="tocS_GoogleCloudMlV1__HyperparameterSpec">GoogleCloudMlV1__HyperparameterSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__hyperparameterspec"></a>
<a id="schema_GoogleCloudMlV1__HyperparameterSpec"></a>
<a id="tocSgooglecloudmlv1__hyperparameterspec"></a>
<a id="tocsgooglecloudmlv1__hyperparameterspec"></a>

```json
{
  "algorithm": "ALGORITHM_UNSPECIFIED",
  "enableTrialEarlyStopping": true,
  "goal": "GOAL_TYPE_UNSPECIFIED",
  "hyperparameterMetricTag": "string",
  "maxFailedTrials": 0,
  "maxParallelTrials": 0,
  "maxTrials": 0,
  "params": [
    {
      "categoricalValues": [
        "string"
      ],
      "discreteValues": [
        0
      ],
      "maxValue": 0,
      "minValue": 0,
      "parameterName": "string",
      "scaleType": "NONE",
      "type": "PARAMETER_TYPE_UNSPECIFIED"
    }
  ],
  "resumePreviousJobId": "string"
}
```

Represents a set of hyperparameters to optimize.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|Optional. The search algorithm specified for the hyperparameter tuning job. Uses the default AI Platform hyperparameter tuning algorithm if unspecified.|
|enableTrialEarlyStopping|boolean|false|none|Optional. Indicates if the hyperparameter tuning job enables auto trial early stopping.|
|goal|string|false|none|Required. The type of goal to use for tuning. Available types are `MAXIMIZE` and `MINIMIZE`. Defaults to `MAXIMIZE`.|
|hyperparameterMetricTag|string|false|none|Optional. The TensorFlow summary tag name to use for optimizing trials. For current versions of TensorFlow, this tag name should exactly match what is shown in TensorBoard, including all scopes. For versions of TensorFlow prior to 0.12, this should be only the tag passed to tf.Summary. By default, "training/hptuning/metric" will be used.|
|maxFailedTrials|integer(int32)|false|none|Optional. The number of failed trials that need to be seen before failing the hyperparameter tuning job. You can specify this field to override the default failing criteria for AI Platform hyperparameter tuning jobs. Defaults to zero, which means the service decides when a hyperparameter job should fail.|
|maxParallelTrials|integer(int32)|false|none|Optional. The number of training trials to run concurrently. You can reduce the time it takes to perform hyperparameter tuning by adding trials in parallel. However, each trail only benefits from the information gained in completed trials. That means that a trial does not get access to the results of trials running at the same time, which could reduce the quality of the overall optimization. Each trial will use the same scale tier and machine types. Defaults to one.|
|maxTrials|integer(int32)|false|none|Optional. How many training trials should be attempted to optimize the specified hyperparameters. Defaults to one.|
|params|[[GoogleCloudMlV1__ParameterSpec](#schemagooglecloudmlv1__parameterspec)]|false|none|Required. The set of parameters to tune.|
|resumePreviousJobId|string|false|none|Optional. The prior hyperparameter tuning job id that users hope to continue with. The job id will be used to find the corresponding vizier study guid and resume the study.|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|ALGORITHM_UNSPECIFIED|
|algorithm|GRID_SEARCH|
|algorithm|RANDOM_SEARCH|
|goal|GOAL_TYPE_UNSPECIFIED|
|goal|MAXIMIZE|
|goal|MINIMIZE|

<h2 id="tocS_GoogleCloudMlV1__IntegratedGradientsAttribution">GoogleCloudMlV1__IntegratedGradientsAttribution</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__integratedgradientsattribution"></a>
<a id="schema_GoogleCloudMlV1__IntegratedGradientsAttribution"></a>
<a id="tocSgooglecloudmlv1__integratedgradientsattribution"></a>
<a id="tocsgooglecloudmlv1__integratedgradientsattribution"></a>

```json
{
  "numIntegralSteps": 0
}
```

Attributes credit by computing the Aumann-Shapley value taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numIntegralSteps|integer(int32)|false|none|Number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range.|

<h2 id="tocS_GoogleCloudMlV1__Job">GoogleCloudMlV1__Job</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__job"></a>
<a id="schema_GoogleCloudMlV1__Job"></a>
<a id="tocSgooglecloudmlv1__job"></a>
<a id="tocsgooglecloudmlv1__job"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "errorMessage": "string",
  "etag": "string",
  "jobId": "string",
  "jobPosition": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "predictionInput": {
    "batchSize": "string",
    "dataFormat": "DATA_FORMAT_UNSPECIFIED",
    "inputPaths": [
      "string"
    ],
    "maxWorkerCount": "string",
    "modelName": "string",
    "outputDataFormat": "DATA_FORMAT_UNSPECIFIED",
    "outputPath": "string",
    "region": "string",
    "runtimeVersion": "string",
    "signatureName": "string",
    "uri": "string",
    "versionName": "string"
  },
  "predictionOutput": {
    "errorCount": "string",
    "nodeHours": 0,
    "outputPath": "string",
    "predictionCount": "string"
  },
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "trainingInput": {
    "args": [
      "string"
    ],
    "enableWebAccess": true,
    "encryptionConfig": {
      "kmsKeyName": "string"
    },
    "evaluatorConfig": {
      "acceleratorConfig": {
        "count": "string",
        "type": "ACCELERATOR_TYPE_UNSPECIFIED"
      },
      "containerArgs": [
        "string"
      ],
      "containerCommand": [
        "string"
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string"
      },
      "imageUri": "string",
      "tpuTfVersion": "string"
    },
    "evaluatorCount": "string",
    "evaluatorType": "string",
    "hyperparameters": {
      "algorithm": "ALGORITHM_UNSPECIFIED",
      "enableTrialEarlyStopping": true,
      "goal": "GOAL_TYPE_UNSPECIFIED",
      "hyperparameterMetricTag": "string",
      "maxFailedTrials": 0,
      "maxParallelTrials": 0,
      "maxTrials": 0,
      "params": [
        {
          "categoricalValues": [
            "string"
          ],
          "discreteValues": [
            0
          ],
          "maxValue": 0,
          "minValue": 0,
          "parameterName": "string",
          "scaleType": "NONE",
          "type": "PARAMETER_TYPE_UNSPECIFIED"
        }
      ],
      "resumePreviousJobId": "string"
    },
    "jobDir": "string",
    "masterConfig": {
      "acceleratorConfig": {
        "count": "string",
        "type": "ACCELERATOR_TYPE_UNSPECIFIED"
      },
      "containerArgs": [
        "string"
      ],
      "containerCommand": [
        "string"
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string"
      },
      "imageUri": "string",
      "tpuTfVersion": "string"
    },
    "masterType": "string",
    "network": "string",
    "packageUris": [
      "string"
    ],
    "parameterServerConfig": {
      "acceleratorConfig": {
        "count": "string",
        "type": "ACCELERATOR_TYPE_UNSPECIFIED"
      },
      "containerArgs": [
        "string"
      ],
      "containerCommand": [
        "string"
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string"
      },
      "imageUri": "string",
      "tpuTfVersion": "string"
    },
    "parameterServerCount": "string",
    "parameterServerType": "string",
    "pythonModule": "string",
    "pythonVersion": "string",
    "region": "string",
    "runtimeVersion": "string",
    "scaleTier": "BASIC",
    "scheduling": {
      "maxRunningTime": "string",
      "maxWaitTime": "string",
      "priority": 0
    },
    "serviceAccount": "string",
    "useChiefInTfConfig": true,
    "workerConfig": {
      "acceleratorConfig": {
        "count": "string",
        "type": "ACCELERATOR_TYPE_UNSPECIFIED"
      },
      "containerArgs": [
        "string"
      ],
      "containerCommand": [
        "string"
      ],
      "diskConfig": {
        "bootDiskSizeGb": 0,
        "bootDiskType": "string"
      },
      "imageUri": "string",
      "tpuTfVersion": "string"
    },
    "workerCount": "string",
    "workerType": "string"
  },
  "trainingOutput": {
    "builtInAlgorithmOutput": {
      "framework": "string",
      "modelPath": "string",
      "pythonVersion": "string",
      "runtimeVersion": "string"
    },
    "completedTrialCount": "string",
    "consumedMLUnits": 0,
    "hyperparameterMetricTag": "string",
    "isBuiltInAlgorithmJob": true,
    "isHyperparameterTuningJob": true,
    "trials": [
      {
        "allMetrics": [
          {
            "objectiveValue": 0,
            "trainingStep": "string"
          }
        ],
        "builtInAlgorithmOutput": {
          "framework": "string",
          "modelPath": "string",
          "pythonVersion": "string",
          "runtimeVersion": "string"
        },
        "endTime": "string",
        "finalMetric": {
          "objectiveValue": 0,
          "trainingStep": "string"
        },
        "hyperparameters": {
          "property1": "string",
          "property2": "string"
        },
        "isTrialStoppedEarly": true,
        "startTime": "string",
        "state": "STATE_UNSPECIFIED",
        "trialId": "string",
        "webAccessUris": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "webAccessUris": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Represents a training or prediction job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. When the job was created.|
|endTime|string(google-datetime)|false|none|Output only. When the job processing was completed.|
|errorMessage|string|false|none|Output only. The details of a failure or a cancellation.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a job from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform job updates in order to avoid race conditions: An `etag` is returned in the response to `GetJob`, and systems are expected to put that etag in the request to `UpdateJob` to ensure that their change will be applied to the same version of the job.|
|jobId|string|false|none|Required. The user-specified id of the job.|
|jobPosition|string(int64)|false|read-only|Output only. It's only effect when the job is in QUEUED state. If it's positive, it indicates the job's position in the job scheduler. It's 0 when the job is already scheduled.|
|labels|object|false|none|Optional. One or more labels that you can add, to organize your jobs. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels.|
|predictionInput|[GoogleCloudMlV1__PredictionInput](#schemagooglecloudmlv1__predictioninput)|false|none|Input parameters to create a prediction job.|
|predictionOutput|[GoogleCloudMlV1__PredictionOutput](#schemagooglecloudmlv1__predictionoutput)|false|none|The current prediction job result.|
|startTime|string(google-datetime)|false|none|Output only. When the job processing was started.|
|state|string|false|none|Output only. The detailed state of a job.|
|trainingInput|[GoogleCloudMlV1__TrainingInput](#schemagooglecloudmlv1__traininginput)|false|none|Input parameters to create a training job.|
|trainingOutput|[GoogleCloudMlV1__TrainingOutput](#schemagooglecloudmlv1__trainingoutput)|false|none|The current training job result.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|QUEUED|
|state|PREPARING|
|state|RUNNING|
|state|SUCCEEDED|
|state|FAILED|
|state|CANCELLING|
|state|CANCELLED|

<h2 id="tocS_GoogleCloudMlV1__ListJobsResponse">GoogleCloudMlV1__ListJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__listjobsresponse"></a>
<a id="schema_GoogleCloudMlV1__ListJobsResponse"></a>
<a id="tocSgooglecloudmlv1__listjobsresponse"></a>
<a id="tocsgooglecloudmlv1__listjobsresponse"></a>

```json
{
  "jobs": [
    {
      "createTime": "string",
      "endTime": "string",
      "errorMessage": "string",
      "etag": "string",
      "jobId": "string",
      "jobPosition": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "predictionInput": {
        "batchSize": "string",
        "dataFormat": "DATA_FORMAT_UNSPECIFIED",
        "inputPaths": [
          "string"
        ],
        "maxWorkerCount": "string",
        "modelName": "string",
        "outputDataFormat": "DATA_FORMAT_UNSPECIFIED",
        "outputPath": "string",
        "region": "string",
        "runtimeVersion": "string",
        "signatureName": "string",
        "uri": "string",
        "versionName": "string"
      },
      "predictionOutput": {
        "errorCount": "string",
        "nodeHours": 0,
        "outputPath": "string",
        "predictionCount": "string"
      },
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "trainingInput": {
        "args": [
          "string"
        ],
        "enableWebAccess": true,
        "encryptionConfig": {
          "kmsKeyName": "string"
        },
        "evaluatorConfig": {
          "acceleratorConfig": {
            "count": "string",
            "type": "ACCELERATOR_TYPE_UNSPECIFIED"
          },
          "containerArgs": [
            "string"
          ],
          "containerCommand": [
            "string"
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string"
          },
          "imageUri": "string",
          "tpuTfVersion": "string"
        },
        "evaluatorCount": "string",
        "evaluatorType": "string",
        "hyperparameters": {
          "algorithm": "ALGORITHM_UNSPECIFIED",
          "enableTrialEarlyStopping": true,
          "goal": "GOAL_TYPE_UNSPECIFIED",
          "hyperparameterMetricTag": "string",
          "maxFailedTrials": 0,
          "maxParallelTrials": 0,
          "maxTrials": 0,
          "params": [
            {
              "categoricalValues": [
                "string"
              ],
              "discreteValues": [
                0
              ],
              "maxValue": 0,
              "minValue": 0,
              "parameterName": "string",
              "scaleType": "NONE",
              "type": "PARAMETER_TYPE_UNSPECIFIED"
            }
          ],
          "resumePreviousJobId": "string"
        },
        "jobDir": "string",
        "masterConfig": {
          "acceleratorConfig": {
            "count": "string",
            "type": "ACCELERATOR_TYPE_UNSPECIFIED"
          },
          "containerArgs": [
            "string"
          ],
          "containerCommand": [
            "string"
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string"
          },
          "imageUri": "string",
          "tpuTfVersion": "string"
        },
        "masterType": "string",
        "network": "string",
        "packageUris": [
          "string"
        ],
        "parameterServerConfig": {
          "acceleratorConfig": {
            "count": "string",
            "type": "ACCELERATOR_TYPE_UNSPECIFIED"
          },
          "containerArgs": [
            "string"
          ],
          "containerCommand": [
            "string"
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string"
          },
          "imageUri": "string",
          "tpuTfVersion": "string"
        },
        "parameterServerCount": "string",
        "parameterServerType": "string",
        "pythonModule": "string",
        "pythonVersion": "string",
        "region": "string",
        "runtimeVersion": "string",
        "scaleTier": "BASIC",
        "scheduling": {
          "maxRunningTime": "string",
          "maxWaitTime": "string",
          "priority": 0
        },
        "serviceAccount": "string",
        "useChiefInTfConfig": true,
        "workerConfig": {
          "acceleratorConfig": {
            "count": "string",
            "type": "ACCELERATOR_TYPE_UNSPECIFIED"
          },
          "containerArgs": [
            "string"
          ],
          "containerCommand": [
            "string"
          ],
          "diskConfig": {
            "bootDiskSizeGb": 0,
            "bootDiskType": "string"
          },
          "imageUri": "string",
          "tpuTfVersion": "string"
        },
        "workerCount": "string",
        "workerType": "string"
      },
      "trainingOutput": {
        "builtInAlgorithmOutput": {
          "framework": "string",
          "modelPath": "string",
          "pythonVersion": "string",
          "runtimeVersion": "string"
        },
        "completedTrialCount": "string",
        "consumedMLUnits": 0,
        "hyperparameterMetricTag": "string",
        "isBuiltInAlgorithmJob": true,
        "isHyperparameterTuningJob": true,
        "trials": [
          {
            "allMetrics": [
              {
                "objectiveValue": 0,
                "trainingStep": "string"
              }
            ],
            "builtInAlgorithmOutput": {
              "framework": "string",
              "modelPath": "string",
              "pythonVersion": "string",
              "runtimeVersion": "string"
            },
            "endTime": "string",
            "finalMetric": {
              "objectiveValue": 0,
              "trainingStep": "string"
            },
            "hyperparameters": {
              "property1": "string",
              "property2": "string"
            },
            "isTrialStoppedEarly": true,
            "startTime": "string",
            "state": "STATE_UNSPECIFIED",
            "trialId": "string",
            "webAccessUris": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "webAccessUris": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for the ListJobs method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jobs|[[GoogleCloudMlV1__Job](#schemagooglecloudmlv1__job)]|false|none|The list of jobs.|
|nextPageToken|string|false|none|Optional. Pass this token as the `page_token` field of the request for a subsequent call.|

<h2 id="tocS_GoogleCloudMlV1__ListLocationsResponse">GoogleCloudMlV1__ListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__listlocationsresponse"></a>
<a id="schema_GoogleCloudMlV1__ListLocationsResponse"></a>
<a id="tocSgooglecloudmlv1__listlocationsresponse"></a>
<a id="tocsgooglecloudmlv1__listlocationsresponse"></a>

```json
{
  "locations": [
    {
      "capabilities": [
        {
          "availableAccelerators": [
            "ACCELERATOR_TYPE_UNSPECIFIED"
          ],
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[GoogleCloudMlV1__Location](#schemagooglecloudmlv1__location)]|false|none|Locations where at least one type of CMLE capability is available.|
|nextPageToken|string|false|none|Optional. Pass this token as the `page_token` field of the request for a subsequent call.|

<h2 id="tocS_GoogleCloudMlV1__ListModelsResponse">GoogleCloudMlV1__ListModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__listmodelsresponse"></a>
<a id="schema_GoogleCloudMlV1__ListModelsResponse"></a>
<a id="tocSgooglecloudmlv1__listmodelsresponse"></a>
<a id="tocsgooglecloudmlv1__listmodelsresponse"></a>

```json
{
  "models": [
    {
      "defaultVersion": {
        "acceleratorConfig": {
          "count": "string",
          "type": "ACCELERATOR_TYPE_UNSPECIFIED"
        },
        "autoScaling": {
          "maxNodes": 0,
          "metrics": [
            {
              "name": "METRIC_NAME_UNSPECIFIED",
              "target": 0
            }
          ],
          "minNodes": 0
        },
        "container": {
          "args": [
            "string"
          ],
          "command": [
            "string"
          ],
          "env": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "image": "string",
          "ports": [
            {
              "containerPort": 0
            }
          ]
        },
        "createTime": "string",
        "deploymentUri": "string",
        "description": "string",
        "errorMessage": "string",
        "etag": "string",
        "explanationConfig": {
          "integratedGradientsAttribution": {
            "numIntegralSteps": 0
          },
          "sampledShapleyAttribution": {
            "numPaths": 0
          },
          "xraiAttribution": {
            "numIntegralSteps": 0
          }
        },
        "framework": "FRAMEWORK_UNSPECIFIED",
        "isDefault": true,
        "labels": {
          "property1": "string",
          "property2": "string"
        },
        "lastMigrationModelId": "string",
        "lastMigrationTime": "string",
        "lastUseTime": "string",
        "machineType": "string",
        "manualScaling": {
          "nodes": 0
        },
        "name": "string",
        "packageUris": [
          "string"
        ],
        "predictionClass": "string",
        "pythonVersion": "string",
        "requestLoggingConfig": {
          "bigqueryTableName": "string",
          "samplingPercentage": 0
        },
        "routes": {
          "health": "string",
          "predict": "string"
        },
        "runtimeVersion": "string",
        "serviceAccount": "string",
        "state": "UNKNOWN"
      },
      "description": "string",
      "etag": "string",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "onlinePredictionConsoleLogging": true,
      "onlinePredictionLogging": true,
      "regions": [
        "string"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

Response message for the ListModels method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|models|[[GoogleCloudMlV1__Model](#schemagooglecloudmlv1__model)]|false|none|The list of models.|
|nextPageToken|string|false|none|Optional. Pass this token as the `page_token` field of the request for a subsequent call.|

<h2 id="tocS_GoogleCloudMlV1__ListOptimalTrialsRequest">GoogleCloudMlV1__ListOptimalTrialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__listoptimaltrialsrequest"></a>
<a id="schema_GoogleCloudMlV1__ListOptimalTrialsRequest"></a>
<a id="tocSgooglecloudmlv1__listoptimaltrialsrequest"></a>
<a id="tocsgooglecloudmlv1__listoptimaltrialsrequest"></a>

```json
{}
```

The request message for the ListTrials service method.

<h2 id="tocS_GoogleCloudMlV1__ListOptimalTrialsResponse">GoogleCloudMlV1__ListOptimalTrialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__listoptimaltrialsresponse"></a>
<a id="schema_GoogleCloudMlV1__ListOptimalTrialsResponse"></a>
<a id="tocSgooglecloudmlv1__listoptimaltrialsresponse"></a>
<a id="tocsgooglecloudmlv1__listoptimaltrialsresponse"></a>

```json
{
  "trials": [
    {
      "clientId": "string",
      "endTime": "string",
      "finalMeasurement": {
        "elapsedTime": "string",
        "metrics": [
          {
            "metric": "string",
            "value": 0
          }
        ],
        "stepCount": "string"
      },
      "infeasibleReason": "string",
      "measurements": [
        {
          "elapsedTime": "string",
          "metrics": [
            {
              "metric": "string",
              "value": 0
            }
          ],
          "stepCount": "string"
        }
      ],
      "name": "string",
      "parameters": [
        {
          "floatValue": 0,
          "intValue": "string",
          "parameter": "string",
          "stringValue": "string"
        }
      ],
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "trialInfeasible": true
    }
  ]
}
```

The response message for the ListOptimalTrials method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trials|[[GoogleCloudMlV1__Trial](#schemagooglecloudmlv1__trial)]|false|none|The pareto-optimal trials for multiple objective study or the optimal trial for single objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency|

<h2 id="tocS_GoogleCloudMlV1__ListStudiesResponse">GoogleCloudMlV1__ListStudiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__liststudiesresponse"></a>
<a id="schema_GoogleCloudMlV1__ListStudiesResponse"></a>
<a id="tocSgooglecloudmlv1__liststudiesresponse"></a>
<a id="tocsgooglecloudmlv1__liststudiesresponse"></a>

```json
{
  "studies": [
    {
      "createTime": "string",
      "inactiveReason": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "studyConfig": {
        "algorithm": "ALGORITHM_UNSPECIFIED",
        "automatedStoppingConfig": {
          "decayCurveStoppingConfig": {
            "useElapsedTime": true
          },
          "medianAutomatedStoppingConfig": {
            "useElapsedTime": true
          }
        },
        "metrics": [
          {
            "goal": "GOAL_TYPE_UNSPECIFIED",
            "metric": "string"
          }
        ],
        "parameters": [
          {
            "categoricalValueSpec": {
              "values": [
                "string"
              ]
            },
            "childParameterSpecs": [
              {}
            ],
            "discreteValueSpec": {
              "values": [
                0
              ]
            },
            "doubleValueSpec": {
              "maxValue": 0,
              "minValue": 0
            },
            "integerValueSpec": {
              "maxValue": "string",
              "minValue": "string"
            },
            "parameter": "string",
            "parentCategoricalValues": {
              "values": [
                "string"
              ]
            },
            "parentDiscreteValues": {
              "values": [
                0
              ]
            },
            "parentIntValues": {
              "values": [
                "string"
              ]
            },
            "scaleType": "SCALE_TYPE_UNSPECIFIED",
            "type": "PARAMETER_TYPE_UNSPECIFIED"
          }
        ]
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|studies|[[GoogleCloudMlV1__Study](#schemagooglecloudmlv1__study)]|false|none|The studies associated with the project.|

<h2 id="tocS_GoogleCloudMlV1__ListTrialsResponse">GoogleCloudMlV1__ListTrialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__listtrialsresponse"></a>
<a id="schema_GoogleCloudMlV1__ListTrialsResponse"></a>
<a id="tocSgooglecloudmlv1__listtrialsresponse"></a>
<a id="tocsgooglecloudmlv1__listtrialsresponse"></a>

```json
{
  "trials": [
    {
      "clientId": "string",
      "endTime": "string",
      "finalMeasurement": {
        "elapsedTime": "string",
        "metrics": [
          {
            "metric": "string",
            "value": 0
          }
        ],
        "stepCount": "string"
      },
      "infeasibleReason": "string",
      "measurements": [
        {
          "elapsedTime": "string",
          "metrics": [
            {
              "metric": "string",
              "value": 0
            }
          ],
          "stepCount": "string"
        }
      ],
      "name": "string",
      "parameters": [
        {
          "floatValue": 0,
          "intValue": "string",
          "parameter": "string",
          "stringValue": "string"
        }
      ],
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "trialInfeasible": true
    }
  ]
}
```

The response message for the ListTrials method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trials|[[GoogleCloudMlV1__Trial](#schemagooglecloudmlv1__trial)]|false|none|The trials associated with the study.|

<h2 id="tocS_GoogleCloudMlV1__ListVersionsResponse">GoogleCloudMlV1__ListVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__listversionsresponse"></a>
<a id="schema_GoogleCloudMlV1__ListVersionsResponse"></a>
<a id="tocSgooglecloudmlv1__listversionsresponse"></a>
<a id="tocsgooglecloudmlv1__listversionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "versions": [
    {
      "acceleratorConfig": {
        "count": "string",
        "type": "ACCELERATOR_TYPE_UNSPECIFIED"
      },
      "autoScaling": {
        "maxNodes": 0,
        "metrics": [
          {
            "name": "METRIC_NAME_UNSPECIFIED",
            "target": 0
          }
        ],
        "minNodes": 0
      },
      "container": {
        "args": [
          "string"
        ],
        "command": [
          "string"
        ],
        "env": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "image": "string",
        "ports": [
          {
            "containerPort": 0
          }
        ]
      },
      "createTime": "string",
      "deploymentUri": "string",
      "description": "string",
      "errorMessage": "string",
      "etag": "string",
      "explanationConfig": {
        "integratedGradientsAttribution": {
          "numIntegralSteps": 0
        },
        "sampledShapleyAttribution": {
          "numPaths": 0
        },
        "xraiAttribution": {
          "numIntegralSteps": 0
        }
      },
      "framework": "FRAMEWORK_UNSPECIFIED",
      "isDefault": true,
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "lastMigrationModelId": "string",
      "lastMigrationTime": "string",
      "lastUseTime": "string",
      "machineType": "string",
      "manualScaling": {
        "nodes": 0
      },
      "name": "string",
      "packageUris": [
        "string"
      ],
      "predictionClass": "string",
      "pythonVersion": "string",
      "requestLoggingConfig": {
        "bigqueryTableName": "string",
        "samplingPercentage": 0
      },
      "routes": {
        "health": "string",
        "predict": "string"
      },
      "runtimeVersion": "string",
      "serviceAccount": "string",
      "state": "UNKNOWN"
    }
  ]
}
```

Response message for the ListVersions method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Optional. Pass this token as the `page_token` field of the request for a subsequent call.|
|versions|[[GoogleCloudMlV1__Version](#schemagooglecloudmlv1__version)]|false|none|The list of versions.|

<h2 id="tocS_GoogleCloudMlV1__Location">GoogleCloudMlV1__Location</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__location"></a>
<a id="schema_GoogleCloudMlV1__Location"></a>
<a id="tocSgooglecloudmlv1__location"></a>
<a id="tocsgooglecloudmlv1__location"></a>

```json
{
  "capabilities": [
    {
      "availableAccelerators": [
        "ACCELERATOR_TYPE_UNSPECIFIED"
      ],
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capabilities|[[GoogleCloudMlV1__Capability](#schemagooglecloudmlv1__capability)]|false|none|Capabilities available in the location.|
|name|string|false|none|none|

<h2 id="tocS_GoogleCloudMlV1__ManualScaling">GoogleCloudMlV1__ManualScaling</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__manualscaling"></a>
<a id="schema_GoogleCloudMlV1__ManualScaling"></a>
<a id="tocSgooglecloudmlv1__manualscaling"></a>
<a id="tocsgooglecloudmlv1__manualscaling"></a>

```json
{
  "nodes": 0
}
```

Options for manually scaling a model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodes|integer(int32)|false|none|The number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed, so the cost of operating this model will be proportional to `nodes` * number of hours since last billing cycle plus the cost for each prediction performed.|

<h2 id="tocS_GoogleCloudMlV1__Measurement">GoogleCloudMlV1__Measurement</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__measurement"></a>
<a id="schema_GoogleCloudMlV1__Measurement"></a>
<a id="tocSgooglecloudmlv1__measurement"></a>
<a id="tocsgooglecloudmlv1__measurement"></a>

```json
{
  "elapsedTime": "string",
  "metrics": [
    {
      "metric": "string",
      "value": 0
    }
  ],
  "stepCount": "string"
}
```

A message representing a measurement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|elapsedTime|string(google-duration)|false|none|Output only. Time that the trial has been running at the point of this measurement.|
|metrics|[[GoogleCloudMlV1_Measurement_Metric](#schemagooglecloudmlv1_measurement_metric)]|false|none|Provides a list of metrics that act as inputs into the objective function.|
|stepCount|string(int64)|false|none|The number of steps a machine learning model has been trained for. Must be non-negative.|

<h2 id="tocS_GoogleCloudMlV1__MetricSpec">GoogleCloudMlV1__MetricSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__metricspec"></a>
<a id="schema_GoogleCloudMlV1__MetricSpec"></a>
<a id="tocSgooglecloudmlv1__metricspec"></a>
<a id="tocsgooglecloudmlv1__metricspec"></a>

```json
{
  "name": "METRIC_NAME_UNSPECIFIED",
  "target": 0
}
```

MetricSpec contains the specifications to use to calculate the desired nodes count when autoscaling is enabled.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|metric name.|
|target|integer(int32)|false|none|Target specifies the target value for the given metric; once real metric deviates from the threshold by a certain percentage, the node count changes.|

#### Enumerated Values

|Property|Value|
|---|---|
|name|METRIC_NAME_UNSPECIFIED|
|name|CPU_USAGE|
|name|GPU_DUTY_CYCLE|

<h2 id="tocS_GoogleCloudMlV1__Model">GoogleCloudMlV1__Model</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__model"></a>
<a id="schema_GoogleCloudMlV1__Model"></a>
<a id="tocSgooglecloudmlv1__model"></a>
<a id="tocsgooglecloudmlv1__model"></a>

```json
{
  "defaultVersion": {
    "acceleratorConfig": {
      "count": "string",
      "type": "ACCELERATOR_TYPE_UNSPECIFIED"
    },
    "autoScaling": {
      "maxNodes": 0,
      "metrics": [
        {
          "name": "METRIC_NAME_UNSPECIFIED",
          "target": 0
        }
      ],
      "minNodes": 0
    },
    "container": {
      "args": [
        "string"
      ],
      "command": [
        "string"
      ],
      "env": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "image": "string",
      "ports": [
        {
          "containerPort": 0
        }
      ]
    },
    "createTime": "string",
    "deploymentUri": "string",
    "description": "string",
    "errorMessage": "string",
    "etag": "string",
    "explanationConfig": {
      "integratedGradientsAttribution": {
        "numIntegralSteps": 0
      },
      "sampledShapleyAttribution": {
        "numPaths": 0
      },
      "xraiAttribution": {
        "numIntegralSteps": 0
      }
    },
    "framework": "FRAMEWORK_UNSPECIFIED",
    "isDefault": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastMigrationModelId": "string",
    "lastMigrationTime": "string",
    "lastUseTime": "string",
    "machineType": "string",
    "manualScaling": {
      "nodes": 0
    },
    "name": "string",
    "packageUris": [
      "string"
    ],
    "predictionClass": "string",
    "pythonVersion": "string",
    "requestLoggingConfig": {
      "bigqueryTableName": "string",
      "samplingPercentage": 0
    },
    "routes": {
      "health": "string",
      "predict": "string"
    },
    "runtimeVersion": "string",
    "serviceAccount": "string",
    "state": "UNKNOWN"
  },
  "description": "string",
  "etag": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "onlinePredictionConsoleLogging": true,
  "onlinePredictionLogging": true,
  "regions": [
    "string"
  ]
}
```

Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultVersion|[GoogleCloudMlV1__Version](#schemagooglecloudmlv1__version)|false|none|Output only. The default version of the model. This version will be used to handle prediction requests that do not specify a version. You can change the default version by calling projects.models.versions.setDefault.|
|description|string|false|none|Optional. The description specified for the model when it was created.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetModel`, and systems are expected to put that etag in the request to `UpdateModel` to ensure that their change will be applied to the model as intended.|
|labels|object|false|none|Optional. One or more labels that you can add, to organize your models. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models.|
|name|string|false|none|Required. The name specified for the model when it was created. The model name must be unique within the project it is created in.|
|onlinePredictionConsoleLogging|boolean|false|none|Optional. If true, online prediction nodes send `stderr` and `stdout` streams to Cloud Logging. These can be more verbose than the standard access logs (see `onlinePredictionLogging`) and can incur higher cost. However, they are helpful for debugging. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high QPS. Estimate your costs before enabling this option. Default is false.|
|onlinePredictionLogging|boolean|false|none|Optional. If true, online prediction access logs are sent to Cloud Logging. These logs are like standard server access logs, containing information like timestamp and latency for each request. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option. Default is false.|
|regions|[string]|false|none|Optional. The list of regions where the model is going to be deployed. Only one region per model is supported. Defaults to 'us-central1' if nothing is set. See the available regions for AI Platform services. Note: * No matter where a model is deployed, it can always be accessed by users from anywhere, both for online and batch prediction. * The region for a batch prediction job is set by the region field when submitting the batch prediction job and does not take its value from this field.|

<h2 id="tocS_GoogleCloudMlV1__OperationMetadata">GoogleCloudMlV1__OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__operationmetadata"></a>
<a id="schema_GoogleCloudMlV1__OperationMetadata"></a>
<a id="tocSgooglecloudmlv1__operationmetadata"></a>
<a id="tocsgooglecloudmlv1__operationmetadata"></a>

```json
{
  "createTime": "string",
  "endTime": "string",
  "isCancellationRequested": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "modelName": "string",
  "operationType": "OPERATION_TYPE_UNSPECIFIED",
  "projectNumber": "string",
  "startTime": "string",
  "version": {
    "acceleratorConfig": {
      "count": "string",
      "type": "ACCELERATOR_TYPE_UNSPECIFIED"
    },
    "autoScaling": {
      "maxNodes": 0,
      "metrics": [
        {
          "name": "METRIC_NAME_UNSPECIFIED",
          "target": 0
        }
      ],
      "minNodes": 0
    },
    "container": {
      "args": [
        "string"
      ],
      "command": [
        "string"
      ],
      "env": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "image": "string",
      "ports": [
        {
          "containerPort": 0
        }
      ]
    },
    "createTime": "string",
    "deploymentUri": "string",
    "description": "string",
    "errorMessage": "string",
    "etag": "string",
    "explanationConfig": {
      "integratedGradientsAttribution": {
        "numIntegralSteps": 0
      },
      "sampledShapleyAttribution": {
        "numPaths": 0
      },
      "xraiAttribution": {
        "numIntegralSteps": 0
      }
    },
    "framework": "FRAMEWORK_UNSPECIFIED",
    "isDefault": true,
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "lastMigrationModelId": "string",
    "lastMigrationTime": "string",
    "lastUseTime": "string",
    "machineType": "string",
    "manualScaling": {
      "nodes": 0
    },
    "name": "string",
    "packageUris": [
      "string"
    ],
    "predictionClass": "string",
    "pythonVersion": "string",
    "requestLoggingConfig": {
      "bigqueryTableName": "string",
      "samplingPercentage": 0
    },
    "routes": {
      "health": "string",
      "predict": "string"
    },
    "runtimeVersion": "string",
    "serviceAccount": "string",
    "state": "UNKNOWN"
  }
}
```

Represents the metadata of the long-running operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time the operation was submitted.|
|endTime|string(google-datetime)|false|none|The time operation processing completed.|
|isCancellationRequested|boolean|false|none|Indicates whether a request to cancel this operation has been made.|
|labels|object|false|none|The user labels, inherited from the model or the model version being operated on.|
|modelName|string|false|none|Contains the name of the model associated with the operation.|
|operationType|string|false|none|The operation type.|
|projectNumber|string(int64)|false|none|Contains the project number associated with the operation.|
|startTime|string(google-datetime)|false|none|The time operation processing started.|
|version|[GoogleCloudMlV1__Version](#schemagooglecloudmlv1__version)|false|none|Contains the version associated with the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|OPERATION_TYPE_UNSPECIFIED|
|operationType|CREATE_VERSION|
|operationType|DELETE_VERSION|
|operationType|DELETE_MODEL|
|operationType|UPDATE_MODEL|
|operationType|UPDATE_VERSION|
|operationType|UPDATE_CONFIG|

<h2 id="tocS_GoogleCloudMlV1__ParameterSpec">GoogleCloudMlV1__ParameterSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__parameterspec"></a>
<a id="schema_GoogleCloudMlV1__ParameterSpec"></a>
<a id="tocSgooglecloudmlv1__parameterspec"></a>
<a id="tocsgooglecloudmlv1__parameterspec"></a>

```json
{
  "categoricalValues": [
    "string"
  ],
  "discreteValues": [
    0
  ],
  "maxValue": 0,
  "minValue": 0,
  "parameterName": "string",
  "scaleType": "NONE",
  "type": "PARAMETER_TYPE_UNSPECIFIED"
}
```

Represents a single hyperparameter to optimize.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoricalValues|[string]|false|none|Required if type is `CATEGORICAL`. The list of possible categories.|
|discreteValues|[number(double)]|false|none|Required if type is `DISCRETE`. A list of feasible points. The list should be in strictly increasing order. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values.|
|maxValue|number(double)|false|none|Required if type is `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is `INTEGER`.|
|minValue|number(double)|false|none|Required if type is `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is INTEGER.|
|parameterName|string|false|none|Required. The parameter name must be unique amongst all ParameterConfigs in a HyperparameterSpec message. E.g., "learning_rate".|
|scaleType|string|false|none|Optional. How the parameter should be scaled to the hypercube. Leave unset for categorical parameters. Some kind of scaling is strongly recommended for real or integral parameters (e.g., `UNIT_LINEAR_SCALE`).|
|type|string|false|none|Required. The type of the parameter.|

#### Enumerated Values

|Property|Value|
|---|---|
|scaleType|NONE|
|scaleType|UNIT_LINEAR_SCALE|
|scaleType|UNIT_LOG_SCALE|
|scaleType|UNIT_REVERSE_LOG_SCALE|
|type|PARAMETER_TYPE_UNSPECIFIED|
|type|DOUBLE|
|type|INTEGER|
|type|CATEGORICAL|
|type|DISCRETE|

<h2 id="tocS_GoogleCloudMlV1__PredictRequest">GoogleCloudMlV1__PredictRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__predictrequest"></a>
<a id="schema_GoogleCloudMlV1__PredictRequest"></a>
<a id="tocSgooglecloudmlv1__predictrequest"></a>
<a id="tocsgooglecloudmlv1__predictrequest"></a>

```json
{
  "httpBody": {
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

Request for predictions to be issued against a trained model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpBody|[GoogleApi__HttpBody](#schemagoogleapi__httpbody)|false|none| Required. The prediction request body. Refer to the [request body details section](#request-body-details) for more information on how to structure your request.|

<h2 id="tocS_GoogleCloudMlV1__PredictionInput">GoogleCloudMlV1__PredictionInput</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__predictioninput"></a>
<a id="schema_GoogleCloudMlV1__PredictionInput"></a>
<a id="tocSgooglecloudmlv1__predictioninput"></a>
<a id="tocsgooglecloudmlv1__predictioninput"></a>

```json
{
  "batchSize": "string",
  "dataFormat": "DATA_FORMAT_UNSPECIFIED",
  "inputPaths": [
    "string"
  ],
  "maxWorkerCount": "string",
  "modelName": "string",
  "outputDataFormat": "DATA_FORMAT_UNSPECIFIED",
  "outputPath": "string",
  "region": "string",
  "runtimeVersion": "string",
  "signatureName": "string",
  "uri": "string",
  "versionName": "string"
}
```

Represents input parameters for a prediction job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchSize|string(int64)|false|none|Optional. Number of records per batch, defaults to 64. The service will buffer batch_size number of records in memory before invoking one Tensorflow prediction call internally. So take the record size and memory available into consideration when setting this parameter.|
|dataFormat|string|false|none|Required. The format of the input data files.|
|inputPaths|[string]|false|none|Required. The Cloud Storage location of the input data files. May contain wildcards.|
|maxWorkerCount|string(int64)|false|none|Optional. The maximum number of workers to be used for parallel processing. Defaults to 10 if not specified.|
|modelName|string|false|none|Use this field if you want to use the default version for the specified model. The string must use the following format: `"projects/YOUR_PROJECT/models/YOUR_MODEL"`|
|outputDataFormat|string|false|none|Optional. Format of the output data files, defaults to JSON.|
|outputPath|string|false|none|Required. The output Google Cloud Storage location.|
|region|string|false|none|Required. The Google Compute Engine region to run the prediction job in. See the available regions for AI Platform services.|
|runtimeVersion|string|false|none|Optional. The AI Platform runtime version to use for this batch prediction. If not set, AI Platform will pick the runtime version used during the CreateVersion request for this model version, or choose the latest stable version when model version information is not available such as when the model is specified by uri.|
|signatureName|string|false|none|Optional. The name of the signature defined in the SavedModel to use for this job. Please refer to [SavedModel](https://tensorflow.github.io/serving/serving_basic.html) for information about how to use signatures. Defaults to [DEFAULT_SERVING_SIGNATURE_DEF_KEY](https://www.tensorflow.org/api_docs/python/tf/saved_model/signature_constants) , which is "serving_default".|
|uri|string|false|none|Use this field if you want to specify a Google Cloud Storage path for the model to use.|
|versionName|string|false|none|Use this field if you want to specify a version of the model to use. The string is formatted the same way as `model_version`, with the addition of the version information: `"projects/YOUR_PROJECT/models/YOUR_MODEL/versions/YOUR_VERSION"`|

#### Enumerated Values

|Property|Value|
|---|---|
|dataFormat|DATA_FORMAT_UNSPECIFIED|
|dataFormat|JSON|
|dataFormat|TEXT|
|dataFormat|TF_RECORD|
|dataFormat|TF_RECORD_GZIP|
|dataFormat|CSV|
|outputDataFormat|DATA_FORMAT_UNSPECIFIED|
|outputDataFormat|JSON|
|outputDataFormat|TEXT|
|outputDataFormat|TF_RECORD|
|outputDataFormat|TF_RECORD_GZIP|
|outputDataFormat|CSV|

<h2 id="tocS_GoogleCloudMlV1__PredictionOutput">GoogleCloudMlV1__PredictionOutput</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__predictionoutput"></a>
<a id="schema_GoogleCloudMlV1__PredictionOutput"></a>
<a id="tocSgooglecloudmlv1__predictionoutput"></a>
<a id="tocsgooglecloudmlv1__predictionoutput"></a>

```json
{
  "errorCount": "string",
  "nodeHours": 0,
  "outputPath": "string",
  "predictionCount": "string"
}
```

Represents results of a prediction job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCount|string(int64)|false|none|The number of data instances which resulted in errors.|
|nodeHours|number(double)|false|none|Node hours used by the batch prediction job.|
|outputPath|string|false|none|The output Google Cloud Storage location provided at the job creation time.|
|predictionCount|string(int64)|false|none|The number of generated predictions.|

<h2 id="tocS_GoogleCloudMlV1__ReplicaConfig">GoogleCloudMlV1__ReplicaConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__replicaconfig"></a>
<a id="schema_GoogleCloudMlV1__ReplicaConfig"></a>
<a id="tocSgooglecloudmlv1__replicaconfig"></a>
<a id="tocsgooglecloudmlv1__replicaconfig"></a>

```json
{
  "acceleratorConfig": {
    "count": "string",
    "type": "ACCELERATOR_TYPE_UNSPECIFIED"
  },
  "containerArgs": [
    "string"
  ],
  "containerCommand": [
    "string"
  ],
  "diskConfig": {
    "bootDiskSizeGb": 0,
    "bootDiskType": "string"
  },
  "imageUri": "string",
  "tpuTfVersion": "string"
}
```

Represents the configuration for a replica in a cluster.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorConfig|[GoogleCloudMlV1__AcceleratorConfig](#schemagooglecloudmlv1__acceleratorconfig)|false|none|Represents the type and number of accelerators used by the replica. [Learn about restrictions on accelerator configurations for training.](/ai-platform/training/docs/using-gpus#compute-engine-machine-types-with-gpu)|
|containerArgs|[string]|false|none|Arguments to the entrypoint command. The following rules apply for container_command and container_args: - If you do not supply command or args: The defaults defined in the Docker image are used. - If you supply a command but no args: The default EntryPoint and the default Cmd defined in the Docker image are ignored. Your command is run without any arguments. - If you supply only args: The default Entrypoint defined in the Docker image is run with the args that you supplied. - If you supply a command and args: The default Entrypoint and the default Cmd defined in the Docker image are ignored. Your command is run with your args. It cannot be set if custom container image is not provided. Note that this field and [TrainingInput.args] are mutually exclusive, i.e., both cannot be set at the same time.|
|containerCommand|[string]|false|none|The command with which the replica's custom container is run. If provided, it will override default ENTRYPOINT of the docker image. If not provided, the docker image's ENTRYPOINT is used. It cannot be set if custom container image is not provided. Note that this field and [TrainingInput.args] are mutually exclusive, i.e., both cannot be set at the same time.|
|diskConfig|[GoogleCloudMlV1__DiskConfig](#schemagooglecloudmlv1__diskconfig)|false|none|Represents the configuration of disk options.|
|imageUri|string|false|none|The Docker image to run on the replica. This image must be in Container Registry. Learn more about [configuring custom containers](/ai-platform/training/docs/distributed-training-containers).|
|tpuTfVersion|string|false|none|The AI Platform runtime version that includes a TensorFlow version matching the one used in the custom container. This field is required if the replica is a TPU worker that uses a custom container. Otherwise, do not specify this field. This must be a [runtime version that currently supports training with TPUs](/ml-engine/docs/tensorflow/runtime-version-list#tpu-support). Note that the version of TensorFlow included in a runtime version may differ from the numbering of the runtime version itself, because it may have a different [patch version](https://www.tensorflow.org/guide/version_compat#semantic_versioning_20). In this field, you must specify the runtime version (TensorFlow minor version). For example, if your custom container runs TensorFlow `1.x.y`, specify `1.x`.|

<h2 id="tocS_GoogleCloudMlV1__RequestLoggingConfig">GoogleCloudMlV1__RequestLoggingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__requestloggingconfig"></a>
<a id="schema_GoogleCloudMlV1__RequestLoggingConfig"></a>
<a id="tocSgooglecloudmlv1__requestloggingconfig"></a>
<a id="tocsgooglecloudmlv1__requestloggingconfig"></a>

```json
{
  "bigqueryTableName": "string",
  "samplingPercentage": 0
}
```

Configuration for logging request-response pairs to a BigQuery table. Online prediction requests to a model version and the responses to these requests are converted to raw strings and saved to the specified BigQuery table. Logging is constrained by [BigQuery quotas and limits](/bigquery/quotas). If your project exceeds BigQuery quotas or limits, AI Platform Prediction does not log request-response pairs, but it continues to serve predictions. If you are using [continuous evaluation](/ml-engine/docs/continuous-evaluation/), you do not need to specify this configuration manually. Setting up continuous evaluation automatically enables logging of request-response pairs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryTableName|string|false|none|Required. Fully qualified BigQuery table name in the following format: " project_id.dataset_name.table_name" The specified table must already exist, and the "Cloud ML Service Agent" for your project must have permission to write to it. The table must have the following [schema](/bigquery/docs/schemas): Field nameType Mode model STRING REQUIRED model_version STRING REQUIRED time TIMESTAMP REQUIRED raw_data STRING REQUIRED raw_prediction STRING NULLABLE groundtruth STRING NULLABLE |
|samplingPercentage|number(double)|false|none|Percentage of requests to be logged, expressed as a fraction from 0 to 1. For example, if you want to log 10% of requests, enter `0.1`. The sampling window is the lifetime of the model version. Defaults to 0.|

<h2 id="tocS_GoogleCloudMlV1__RouteMap">GoogleCloudMlV1__RouteMap</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__routemap"></a>
<a id="schema_GoogleCloudMlV1__RouteMap"></a>
<a id="tocSgooglecloudmlv1__routemap"></a>
<a id="tocsgooglecloudmlv1__routemap"></a>

```json
{
  "health": "string",
  "predict": "string"
}
```

Specifies HTTP paths served by a custom container. AI Platform Prediction sends requests to these paths on the container; the custom container must run an HTTP server that responds to these requests with appropriate responses. Read [Custom container requirements](/ai-platform/prediction/docs/custom-container-requirements) for details on how to create your container image to meet these requirements.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|health|string|false|none|HTTP path on the container to send health checkss to. AI Platform Prediction intermittently sends GET requests to this path on the container's IP address and port to check that the container is healthy. Read more about [health checks](/ai-platform/prediction/docs/custom-container-requirements#checks). For example, if you set this field to `/bar`, then AI Platform Prediction intermittently sends a GET request to the `/bar` path on the port of your container specified by the first value of Version.container.ports. If you don't specify this field, it defaults to the following value: /v1/models/ MODEL/versions/VERSION The placeholders in this value are replaced as follows: * MODEL: The name of the parent Model. This does not include the "projects/PROJECT_ID/models/" prefix that the API returns in output; it is the bare model name, as provided to projects.models.create. * VERSION: The name of the model version. This does not include the "projects/PROJECT_ID /models/MODEL/versions/" prefix that the API returns in output; it is the bare version name, as provided to projects.models.versions.create.|
|predict|string|false|none|HTTP path on the container to send prediction requests to. AI Platform Prediction forwards requests sent using projects.predict to this path on the container's IP address and port. AI Platform Prediction then returns the container's response in the API response. For example, if you set this field to `/foo`, then when AI Platform Prediction receives a prediction request, it forwards the request body in a POST request to the `/foo` path on the port of your container specified by the first value of Version.container.ports. If you don't specify this field, it defaults to the following value: /v1/models/MODEL/versions/VERSION:predict The placeholders in this value are replaced as follows: * MODEL: The name of the parent Model. This does not include the "projects/PROJECT_ID/models/" prefix that the API returns in output; it is the bare model name, as provided to projects.models.create. * VERSION: The name of the model version. This does not include the "projects/PROJECT_ID/models/MODEL/versions/" prefix that the API returns in output; it is the bare version name, as provided to projects.models.versions.create.|

<h2 id="tocS_GoogleCloudMlV1__SampledShapleyAttribution">GoogleCloudMlV1__SampledShapleyAttribution</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__sampledshapleyattribution"></a>
<a id="schema_GoogleCloudMlV1__SampledShapleyAttribution"></a>
<a id="tocSgooglecloudmlv1__sampledshapleyattribution"></a>
<a id="tocsgooglecloudmlv1__sampledshapleyattribution"></a>

```json
{
  "numPaths": 0
}
```

An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numPaths|integer(int32)|false|none|The number of feature permutations to consider when approximating the Shapley values.|

<h2 id="tocS_GoogleCloudMlV1__Scheduling">GoogleCloudMlV1__Scheduling</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__scheduling"></a>
<a id="schema_GoogleCloudMlV1__Scheduling"></a>
<a id="tocSgooglecloudmlv1__scheduling"></a>
<a id="tocsgooglecloudmlv1__scheduling"></a>

```json
{
  "maxRunningTime": "string",
  "maxWaitTime": "string",
  "priority": 0
}
```

All parameters related to scheduling of training jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxRunningTime|string(google-duration)|false|none|Optional. The maximum job running time, expressed in seconds. The field can contain up to nine fractional digits, terminated by `s`. If not specified, this field defaults to `604800s` (seven days). If the training job is still running after this duration, AI Platform Training cancels it. The duration is measured from when the job enters the `RUNNING` state; therefore it does not overlap with the duration limited by Scheduling.max_wait_time. For example, if you want to ensure your job runs for no more than 2 hours, set this field to `7200s` (2 hours * 60 minutes / hour * 60 seconds / minute). If you submit your training job using the `gcloud` tool, you can [specify this field in a `config.yaml` file](/ai-platform/training/docs/training-jobs#formatting_your_configuration_parameters). For example: ```yaml trainingInput: scheduling: maxRunningTime: 7200s ```|
|maxWaitTime|string(google-duration)|false|none|Optional. The maximum job wait time, expressed in seconds. The field can contain up to nine fractional digits, terminated by `s`. If not specified, there is no limit to the wait time. The minimum for this field is `1800s` (30 minutes). If the training job has not entered the `RUNNING` state after this duration, AI Platform Training cancels it. After the job begins running, it can no longer be cancelled due to the maximum wait time. Therefore the duration limited by this field does not overlap with the duration limited by Scheduling.max_running_time. For example, if the job temporarily stops running and retries due to a [VM restart](/ai-platform/training/docs/overview#restarts), this cannot lead to a maximum wait time cancellation. However, independently of this constraint, AI Platform Training might stop a job if there are too many retries due to exhausted resources in a region. The following example describes how you might use this field: To cancel your job if it doesn't start running within 1 hour, set this field to `3600s` (1 hour * 60 minutes / hour * 60 seconds / minute). If the job is still in the `QUEUED` or `PREPARING` state after an hour of waiting, AI Platform Training cancels the job. If you submit your training job using the `gcloud` tool, you can [specify this field in a `config.yaml` file](/ai-platform/training/docs/training-jobs#formatting_your_configuration_parameters). For example: ```yaml trainingInput: scheduling: maxWaitTime: 3600s ```|
|priority|integer(int32)|false|none|Optional. Job scheduling will be based on this priority, which in the range [0, 1000]. The bigger the number, the higher the priority. Default to 0 if not set. If there are multiple jobs requesting same type of accelerators, the high priority job will be scheduled prior to ones with low priority.|

<h2 id="tocS_GoogleCloudMlV1__SetDefaultVersionRequest">GoogleCloudMlV1__SetDefaultVersionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__setdefaultversionrequest"></a>
<a id="schema_GoogleCloudMlV1__SetDefaultVersionRequest"></a>
<a id="tocSgooglecloudmlv1__setdefaultversionrequest"></a>
<a id="tocsgooglecloudmlv1__setdefaultversionrequest"></a>

```json
{}
```

Request message for the SetDefaultVersion request.

<h2 id="tocS_GoogleCloudMlV1__StopTrialRequest">GoogleCloudMlV1__StopTrialRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__stoptrialrequest"></a>
<a id="schema_GoogleCloudMlV1__StopTrialRequest"></a>
<a id="tocSgooglecloudmlv1__stoptrialrequest"></a>
<a id="tocsgooglecloudmlv1__stoptrialrequest"></a>

```json
{}
```

<h2 id="tocS_GoogleCloudMlV1__Study">GoogleCloudMlV1__Study</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__study"></a>
<a id="schema_GoogleCloudMlV1__Study"></a>
<a id="tocSgooglecloudmlv1__study"></a>
<a id="tocsgooglecloudmlv1__study"></a>

```json
{
  "createTime": "string",
  "inactiveReason": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "studyConfig": {
    "algorithm": "ALGORITHM_UNSPECIFIED",
    "automatedStoppingConfig": {
      "decayCurveStoppingConfig": {
        "useElapsedTime": true
      },
      "medianAutomatedStoppingConfig": {
        "useElapsedTime": true
      }
    },
    "metrics": [
      {
        "goal": "GOAL_TYPE_UNSPECIFIED",
        "metric": "string"
      }
    ],
    "parameters": [
      {
        "categoricalValueSpec": {
          "values": [
            "string"
          ]
        },
        "childParameterSpecs": [
          {}
        ],
        "discreteValueSpec": {
          "values": [
            0
          ]
        },
        "doubleValueSpec": {
          "maxValue": 0,
          "minValue": 0
        },
        "integerValueSpec": {
          "maxValue": "string",
          "minValue": "string"
        },
        "parameter": "string",
        "parentCategoricalValues": {
          "values": [
            "string"
          ]
        },
        "parentDiscreteValues": {
          "values": [
            0
          ]
        },
        "parentIntValues": {
          "values": [
            "string"
          ]
        },
        "scaleType": "SCALE_TYPE_UNSPECIFIED",
        "type": "PARAMETER_TYPE_UNSPECIFIED"
      }
    ]
  }
}
```

A message representing a Study.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Time at which the study was created.|
|inactiveReason|string|false|read-only|Output only. A human readable reason why the Study is inactive. This should be empty if a study is ACTIVE or COMPLETED.|
|name|string|false|read-only|Output only. The name of a study.|
|state|string|false|read-only|Output only. The detailed state of a study.|
|studyConfig|[GoogleCloudMlV1__StudyConfig](#schemagooglecloudmlv1__studyconfig)|false|none|Required. Configuration of the study.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|INACTIVE|
|state|COMPLETED|

<h2 id="tocS_GoogleCloudMlV1__StudyConfig">GoogleCloudMlV1__StudyConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__studyconfig"></a>
<a id="schema_GoogleCloudMlV1__StudyConfig"></a>
<a id="tocSgooglecloudmlv1__studyconfig"></a>
<a id="tocsgooglecloudmlv1__studyconfig"></a>

```json
{
  "algorithm": "ALGORITHM_UNSPECIFIED",
  "automatedStoppingConfig": {
    "decayCurveStoppingConfig": {
      "useElapsedTime": true
    },
    "medianAutomatedStoppingConfig": {
      "useElapsedTime": true
    }
  },
  "metrics": [
    {
      "goal": "GOAL_TYPE_UNSPECIFIED",
      "metric": "string"
    }
  ],
  "parameters": [
    {
      "categoricalValueSpec": {
        "values": [
          "string"
        ]
      },
      "childParameterSpecs": [
        {}
      ],
      "discreteValueSpec": {
        "values": [
          0
        ]
      },
      "doubleValueSpec": {
        "maxValue": 0,
        "minValue": 0
      },
      "integerValueSpec": {
        "maxValue": "string",
        "minValue": "string"
      },
      "parameter": "string",
      "parentCategoricalValues": {
        "values": [
          "string"
        ]
      },
      "parentDiscreteValues": {
        "values": [
          0
        ]
      },
      "parentIntValues": {
        "values": [
          "string"
        ]
      },
      "scaleType": "SCALE_TYPE_UNSPECIFIED",
      "type": "PARAMETER_TYPE_UNSPECIFIED"
    }
  ]
}
```

Represents configuration of a study.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|The search algorithm specified for the study.|
|automatedStoppingConfig|[GoogleCloudMlV1__AutomatedStoppingConfig](#schemagooglecloudmlv1__automatedstoppingconfig)|false|none|Configuration for automated stopping of unpromising Trials.|
|metrics|[[GoogleCloudMlV1_StudyConfig_MetricSpec](#schemagooglecloudmlv1_studyconfig_metricspec)]|false|none|Metric specs for the study.|
|parameters|[[GoogleCloudMlV1_StudyConfig_ParameterSpec](#schemagooglecloudmlv1_studyconfig_parameterspec)]|false|none|Required. The set of parameters to tune.|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|ALGORITHM_UNSPECIFIED|
|algorithm|GAUSSIAN_PROCESS_BANDIT|
|algorithm|GRID_SEARCH|
|algorithm|RANDOM_SEARCH|

<h2 id="tocS_GoogleCloudMlV1__SuggestTrialsMetadata">GoogleCloudMlV1__SuggestTrialsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__suggesttrialsmetadata"></a>
<a id="schema_GoogleCloudMlV1__SuggestTrialsMetadata"></a>
<a id="tocSgooglecloudmlv1__suggesttrialsmetadata"></a>
<a id="tocsgooglecloudmlv1__suggesttrialsmetadata"></a>

```json
{
  "clientId": "string",
  "createTime": "string",
  "study": "string",
  "suggestionCount": 0
}
```

Metadata field of a google.longrunning.Operation associated with a SuggestTrialsRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|The identifier of the client that is requesting the suggestion.|
|createTime|string(google-datetime)|false|none|The time operation was submitted.|
|study|string|false|none|The name of the study that the trial belongs to.|
|suggestionCount|integer(int32)|false|none|The number of suggestions requested.|

<h2 id="tocS_GoogleCloudMlV1__SuggestTrialsRequest">GoogleCloudMlV1__SuggestTrialsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__suggesttrialsrequest"></a>
<a id="schema_GoogleCloudMlV1__SuggestTrialsRequest"></a>
<a id="tocSgooglecloudmlv1__suggesttrialsrequest"></a>
<a id="tocsgooglecloudmlv1__suggesttrialsrequest"></a>

```json
{
  "clientId": "string",
  "suggestionCount": 0
}
```

The request message for the SuggestTrial service method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|Required. The identifier of the client that is requesting the suggestion. If multiple SuggestTrialsRequests have the same `client_id`, the service will return the identical suggested trial if the trial is pending, and provide a new trial if the last suggested trial was completed.|
|suggestionCount|integer(int32)|false|none|Required. The number of suggestions requested.|

<h2 id="tocS_GoogleCloudMlV1__SuggestTrialsResponse">GoogleCloudMlV1__SuggestTrialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__suggesttrialsresponse"></a>
<a id="schema_GoogleCloudMlV1__SuggestTrialsResponse"></a>
<a id="tocSgooglecloudmlv1__suggesttrialsresponse"></a>
<a id="tocsgooglecloudmlv1__suggesttrialsresponse"></a>

```json
{
  "endTime": "string",
  "startTime": "string",
  "studyState": "STATE_UNSPECIFIED",
  "trials": [
    {
      "clientId": "string",
      "endTime": "string",
      "finalMeasurement": {
        "elapsedTime": "string",
        "metrics": [
          {
            "metric": "string",
            "value": 0
          }
        ],
        "stepCount": "string"
      },
      "infeasibleReason": "string",
      "measurements": [
        {
          "elapsedTime": "string",
          "metrics": [
            {
              "metric": "string",
              "value": 0
            }
          ],
          "stepCount": "string"
        }
      ],
      "name": "string",
      "parameters": [
        {
          "floatValue": 0,
          "intValue": "string",
          "parameter": "string",
          "stringValue": "string"
        }
      ],
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "trialInfeasible": true
    }
  ]
}
```

This message will be placed in the response field of a completed google.longrunning.Operation associated with a SuggestTrials request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The time at which operation processing completed.|
|startTime|string(google-datetime)|false|none|The time at which the operation was started.|
|studyState|string|false|none|The state of the study.|
|trials|[[GoogleCloudMlV1__Trial](#schemagooglecloudmlv1__trial)]|false|none|A list of trials.|

#### Enumerated Values

|Property|Value|
|---|---|
|studyState|STATE_UNSPECIFIED|
|studyState|ACTIVE|
|studyState|INACTIVE|
|studyState|COMPLETED|

<h2 id="tocS_GoogleCloudMlV1__TrainingInput">GoogleCloudMlV1__TrainingInput</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__traininginput"></a>
<a id="schema_GoogleCloudMlV1__TrainingInput"></a>
<a id="tocSgooglecloudmlv1__traininginput"></a>
<a id="tocsgooglecloudmlv1__traininginput"></a>

```json
{
  "args": [
    "string"
  ],
  "enableWebAccess": true,
  "encryptionConfig": {
    "kmsKeyName": "string"
  },
  "evaluatorConfig": {
    "acceleratorConfig": {
      "count": "string",
      "type": "ACCELERATOR_TYPE_UNSPECIFIED"
    },
    "containerArgs": [
      "string"
    ],
    "containerCommand": [
      "string"
    ],
    "diskConfig": {
      "bootDiskSizeGb": 0,
      "bootDiskType": "string"
    },
    "imageUri": "string",
    "tpuTfVersion": "string"
  },
  "evaluatorCount": "string",
  "evaluatorType": "string",
  "hyperparameters": {
    "algorithm": "ALGORITHM_UNSPECIFIED",
    "enableTrialEarlyStopping": true,
    "goal": "GOAL_TYPE_UNSPECIFIED",
    "hyperparameterMetricTag": "string",
    "maxFailedTrials": 0,
    "maxParallelTrials": 0,
    "maxTrials": 0,
    "params": [
      {
        "categoricalValues": [
          "string"
        ],
        "discreteValues": [
          0
        ],
        "maxValue": 0,
        "minValue": 0,
        "parameterName": "string",
        "scaleType": "NONE",
        "type": "PARAMETER_TYPE_UNSPECIFIED"
      }
    ],
    "resumePreviousJobId": "string"
  },
  "jobDir": "string",
  "masterConfig": {
    "acceleratorConfig": {
      "count": "string",
      "type": "ACCELERATOR_TYPE_UNSPECIFIED"
    },
    "containerArgs": [
      "string"
    ],
    "containerCommand": [
      "string"
    ],
    "diskConfig": {
      "bootDiskSizeGb": 0,
      "bootDiskType": "string"
    },
    "imageUri": "string",
    "tpuTfVersion": "string"
  },
  "masterType": "string",
  "network": "string",
  "packageUris": [
    "string"
  ],
  "parameterServerConfig": {
    "acceleratorConfig": {
      "count": "string",
      "type": "ACCELERATOR_TYPE_UNSPECIFIED"
    },
    "containerArgs": [
      "string"
    ],
    "containerCommand": [
      "string"
    ],
    "diskConfig": {
      "bootDiskSizeGb": 0,
      "bootDiskType": "string"
    },
    "imageUri": "string",
    "tpuTfVersion": "string"
  },
  "parameterServerCount": "string",
  "parameterServerType": "string",
  "pythonModule": "string",
  "pythonVersion": "string",
  "region": "string",
  "runtimeVersion": "string",
  "scaleTier": "BASIC",
  "scheduling": {
    "maxRunningTime": "string",
    "maxWaitTime": "string",
    "priority": 0
  },
  "serviceAccount": "string",
  "useChiefInTfConfig": true,
  "workerConfig": {
    "acceleratorConfig": {
      "count": "string",
      "type": "ACCELERATOR_TYPE_UNSPECIFIED"
    },
    "containerArgs": [
      "string"
    ],
    "containerCommand": [
      "string"
    ],
    "diskConfig": {
      "bootDiskSizeGb": 0,
      "bootDiskType": "string"
    },
    "imageUri": "string",
    "tpuTfVersion": "string"
  },
  "workerCount": "string",
  "workerType": "string"
}
```

Represents input parameters for a training job. When using the gcloud command to submit your training job, you can specify the input parameters as command-line arguments and/or in a YAML configuration file referenced from the --config command-line argument. For details, see the guide to [submitting a training job](/ai-platform/training/docs/training-jobs).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|args|[string]|false|none|Optional. Command-line arguments passed to the training application when it starts. If your job uses a custom container, then the arguments are passed to the container's `ENTRYPOINT` command.|
|enableWebAccess|boolean|false|none|Optional. Whether you want AI Platform Training to enable [interactive shell access](https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) to training containers. If set to `true`, you can access interactive shells at the URIs given by TrainingOutput.web_access_uris or HyperparameterOutput.web_access_uris (within TrainingOutput.trials).|
|encryptionConfig|[GoogleCloudMlV1__EncryptionConfig](#schemagooglecloudmlv1__encryptionconfig)|false|none|Optional. Options for using customer-managed encryption keys (CMEK) to protect resources created by a training job, instead of using Google's default encryption. If this is set, then all resources created by the training job will be encrypted with the customer-managed encryption key that you specify. [Learn how and when to use CMEK with AI Platform Training](/ai-platform/training/docs/cmek).|
|evaluatorConfig|[GoogleCloudMlV1__ReplicaConfig](#schemagooglecloudmlv1__replicaconfig)|false|none|Optional. The configuration for evaluators. You should only set `evaluatorConfig.acceleratorConfig` if `evaluatorType` is set to a Compute Engine machine type. [Learn about restrictions on accelerator configurations for training.](/ai-platform/training/docs/using-gpus#compute-engine-machine-types-with-gpu) Set `evaluatorConfig.imageUri` only if you build a custom image for your evaluator. If `evaluatorConfig.imageUri` has not been set, AI Platform uses the value of `masterConfig.imageUri`. Learn more about [configuring custom containers](/ai-platform/training/docs/distributed-training-containers).|
|evaluatorCount|string(int64)|false|none|Optional. The number of evaluator replicas to use for the training job. Each replica in the cluster will be of the type specified in `evaluator_type`. This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `evaluator_type`. The default value is zero.|
|evaluatorType|string|false|none|Optional. Specifies the type of virtual machine to use for your training job's evaluator nodes. The supported values are the same as those described in the entry for `masterType`. This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types. This value must be present when `scaleTier` is set to `CUSTOM` and `evaluatorCount` is greater than zero.|
|hyperparameters|[GoogleCloudMlV1__HyperparameterSpec](#schemagooglecloudmlv1__hyperparameterspec)|false|none|Optional. The set of Hyperparameters to tune.|
|jobDir|string|false|none|Optional. A Google Cloud Storage path in which to store training outputs and other data needed for training. This path is passed to your TensorFlow program as the '--job-dir' command-line argument. The benefit of specifying this field is that Cloud ML validates the path for use in training.|
|masterConfig|[GoogleCloudMlV1__ReplicaConfig](#schemagooglecloudmlv1__replicaconfig)|false|none|Optional. The configuration for your master worker. You should only set `masterConfig.acceleratorConfig` if `masterType` is set to a Compute Engine machine type. Learn about [restrictions on accelerator configurations for training.](/ai-platform/training/docs/using-gpus#compute-engine-machine-types-with-gpu) Set `masterConfig.imageUri` only if you build a custom image. Only one of `masterConfig.imageUri` and `runtimeVersion` should be set. Learn more about [configuring custom containers](/ai-platform/training/docs/distributed-training-containers).|
|masterType|string|false|none|Optional. Specifies the type of virtual machine to use for your training job's master worker. You must specify this field when `scaleTier` is set to `CUSTOM`. You can use certain Compute Engine machine types directly in this field. See the [list of compatible Compute Engine machine types](/ai-platform/training/docs/machine-types#compute-engine-machine-types). Alternatively, you can use the certain legacy machine types in this field. See the [list of legacy machine types](/ai-platform/training/docs/machine-types#legacy-machine-types). Finally, if you want to use a TPU for training, specify `cloud_tpu` in this field. Learn more about the [special configuration options for training with TPUs](/ai-platform/training/docs/using-tpus#configuring_a_custom_tpu_machine).|
|network|string|false|none|Optional. The full name of the [Compute Engine network](/vpc/docs/vpc) to which the Job is peered. For example, `projects/12345/global/networks/myVPC`. The format of this field is `projects/{project}/global/networks/{network}`, where {project} is a project number (like `12345`) and {network} is network name. Private services access must already be configured for the network. If left unspecified, the Job is not peered with any network. [Learn about using VPC Network Peering.](/ai-platform/training/docs/vpc-peering).|
|packageUris|[string]|false|none|Required. The Google Cloud Storage location of the packages with the training program and any additional dependencies. The maximum number of package URIs is 100.|
|parameterServerConfig|[GoogleCloudMlV1__ReplicaConfig](#schemagooglecloudmlv1__replicaconfig)|false|none|Optional. The configuration for parameter servers. You should only set `parameterServerConfig.acceleratorConfig` if `parameterServerType` is set to a Compute Engine machine type. [Learn about restrictions on accelerator configurations for training.](/ai-platform/training/docs/using-gpus#compute-engine-machine-types-with-gpu) Set `parameterServerConfig.imageUri` only if you build a custom image for your parameter server. If `parameterServerConfig.imageUri` has not been set, AI Platform uses the value of `masterConfig.imageUri`. Learn more about [configuring custom containers](/ai-platform/training/docs/distributed-training-containers).|
|parameterServerCount|string(int64)|false|none|Optional. The number of parameter server replicas to use for the training job. Each replica in the cluster will be of the type specified in `parameter_server_type`. This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `parameter_server_type`. The default value is zero.|
|parameterServerType|string|false|none|Optional. Specifies the type of virtual machine to use for your training job's parameter server. The supported values are the same as those described in the entry for `master_type`. This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types. This value must be present when `scaleTier` is set to `CUSTOM` and `parameter_server_count` is greater than zero.|
|pythonModule|string|false|none|Required. The Python module name to run after installing the packages.|
|pythonVersion|string|false|none|Optional. The version of Python used in training. You must either specify this field or specify `masterConfig.imageUri`. The following Python versions are available: * Python '3.7' is available when `runtime_version` is set to '1.15' or later. * Python '3.5' is available when `runtime_version` is set to a version from '1.4' to '1.14'. * Python '2.7' is available when `runtime_version` is set to '1.15' or earlier. Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list).|
|region|string|false|none|Required. The region to run the training job in. See the [available regions](/ai-platform/training/docs/regions) for AI Platform Training.|
|runtimeVersion|string|false|none|Optional. The AI Platform runtime version to use for training. You must either specify this field or specify `masterConfig.imageUri`. For more information, see the [runtime version list](/ai-platform/training/docs/runtime-version-list) and learn [how to manage runtime versions](/ai-platform/training/docs/versioning).|
|scaleTier|string|false|none|Required. Specifies the machine types, the number of replicas for workers and parameter servers.|
|scheduling|[GoogleCloudMlV1__Scheduling](#schemagooglecloudmlv1__scheduling)|false|none|Optional. Scheduling options for a training job.|
|serviceAccount|string|false|none|Optional. The email address of a service account to use when running the training appplication. You must have the `iam.serviceAccounts.actAs` permission for the specified service account. In addition, the AI Platform Training Google-managed service account must have the `roles/iam.serviceAccountAdmin` role for the specified service account. [Learn more about configuring a service account.](/ai-platform/training/docs/custom-service-account) If not specified, the AI Platform Training Google-managed service account is used by default.|
|useChiefInTfConfig|boolean|false|none|Optional. Use `chief` instead of `master` in the `TF_CONFIG` environment variable when training with a custom container. Defaults to `false`. [Learn more about this field.](/ai-platform/training/docs/distributed-training-details#chief-versus-master) This field has no effect for training jobs that don't use a custom container.|
|workerConfig|[GoogleCloudMlV1__ReplicaConfig](#schemagooglecloudmlv1__replicaconfig)|false|none|Optional. The configuration for workers. You should only set `workerConfig.acceleratorConfig` if `workerType` is set to a Compute Engine machine type. [Learn about restrictions on accelerator configurations for training.](/ai-platform/training/docs/using-gpus#compute-engine-machine-types-with-gpu) Set `workerConfig.imageUri` only if you build a custom image for your worker. If `workerConfig.imageUri` has not been set, AI Platform uses the value of `masterConfig.imageUri`. Learn more about [configuring custom containers](/ai-platform/training/docs/distributed-training-containers).|
|workerCount|string(int64)|false|none|Optional. The number of worker replicas to use for the training job. Each replica in the cluster will be of the type specified in `worker_type`. This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `worker_type`. The default value is zero.|
|workerType|string|false|none|Optional. Specifies the type of virtual machine to use for your training job's worker nodes. The supported values are the same as those described in the entry for `masterType`. This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types. If you use `cloud_tpu` for this value, see special instructions for [configuring a custom TPU machine](/ml-engine/docs/tensorflow/using-tpus#configuring_a_custom_tpu_machine). This value must be present when `scaleTier` is set to `CUSTOM` and `workerCount` is greater than zero.|

#### Enumerated Values

|Property|Value|
|---|---|
|scaleTier|BASIC|
|scaleTier|STANDARD_1|
|scaleTier|PREMIUM_1|
|scaleTier|BASIC_GPU|
|scaleTier|BASIC_TPU|
|scaleTier|CUSTOM|

<h2 id="tocS_GoogleCloudMlV1__TrainingOutput">GoogleCloudMlV1__TrainingOutput</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__trainingoutput"></a>
<a id="schema_GoogleCloudMlV1__TrainingOutput"></a>
<a id="tocSgooglecloudmlv1__trainingoutput"></a>
<a id="tocsgooglecloudmlv1__trainingoutput"></a>

```json
{
  "builtInAlgorithmOutput": {
    "framework": "string",
    "modelPath": "string",
    "pythonVersion": "string",
    "runtimeVersion": "string"
  },
  "completedTrialCount": "string",
  "consumedMLUnits": 0,
  "hyperparameterMetricTag": "string",
  "isBuiltInAlgorithmJob": true,
  "isHyperparameterTuningJob": true,
  "trials": [
    {
      "allMetrics": [
        {
          "objectiveValue": 0,
          "trainingStep": "string"
        }
      ],
      "builtInAlgorithmOutput": {
        "framework": "string",
        "modelPath": "string",
        "pythonVersion": "string",
        "runtimeVersion": "string"
      },
      "endTime": "string",
      "finalMetric": {
        "objectiveValue": 0,
        "trainingStep": "string"
      },
      "hyperparameters": {
        "property1": "string",
        "property2": "string"
      },
      "isTrialStoppedEarly": true,
      "startTime": "string",
      "state": "STATE_UNSPECIFIED",
      "trialId": "string",
      "webAccessUris": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "webAccessUris": {
    "property1": "string",
    "property2": "string"
  }
}
```

Represents results of a training job. Output only.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|builtInAlgorithmOutput|[GoogleCloudMlV1__BuiltInAlgorithmOutput](#schemagooglecloudmlv1__builtinalgorithmoutput)|false|none|Details related to built-in algorithms jobs. Only set for built-in algorithms jobs.|
|completedTrialCount|string(int64)|false|none|The number of hyperparameter tuning trials that completed successfully. Only set for hyperparameter tuning jobs.|
|consumedMLUnits|number(double)|false|none|The amount of ML units consumed by the job.|
|hyperparameterMetricTag|string|false|none|The TensorFlow summary tag name used for optimizing hyperparameter tuning trials. See [`HyperparameterSpec.hyperparameterMetricTag`](#HyperparameterSpec.FIELDS.hyperparameter_metric_tag) for more information. Only set for hyperparameter tuning jobs.|
|isBuiltInAlgorithmJob|boolean|false|none|Whether this job is a built-in Algorithm job.|
|isHyperparameterTuningJob|boolean|false|none|Whether this job is a hyperparameter tuning job.|
|trials|[[GoogleCloudMlV1__HyperparameterOutput](#schemagooglecloudmlv1__hyperparameteroutput)]|false|none|Results for individual Hyperparameter trials. Only set for hyperparameter tuning jobs.|
|webAccessUris|object|false|read-only|Output only. URIs for accessing [interactive shells](https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) (one URI for each training node). Only available if training_input.enable_web_access is `true`. The keys are names of each node in the training job; for example, `master-replica-0` for the master node, `worker-replica-0` for the first worker, and `ps-replica-0` for the first parameter server. The values are the URIs for each node's interactive shell.|

<h2 id="tocS_GoogleCloudMlV1__Trial">GoogleCloudMlV1__Trial</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__trial"></a>
<a id="schema_GoogleCloudMlV1__Trial"></a>
<a id="tocSgooglecloudmlv1__trial"></a>
<a id="tocsgooglecloudmlv1__trial"></a>

```json
{
  "clientId": "string",
  "endTime": "string",
  "finalMeasurement": {
    "elapsedTime": "string",
    "metrics": [
      {
        "metric": "string",
        "value": 0
      }
    ],
    "stepCount": "string"
  },
  "infeasibleReason": "string",
  "measurements": [
    {
      "elapsedTime": "string",
      "metrics": [
        {
          "metric": "string",
          "value": 0
        }
      ],
      "stepCount": "string"
    }
  ],
  "name": "string",
  "parameters": [
    {
      "floatValue": 0,
      "intValue": "string",
      "parameter": "string",
      "stringValue": "string"
    }
  ],
  "startTime": "string",
  "state": "STATE_UNSPECIFIED",
  "trialInfeasible": true
}
```

A message representing a trial.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|read-only|Output only. The identifier of the client that originally requested this trial.|
|endTime|string(google-datetime)|false|read-only|Output only. Time at which the trial's status changed to COMPLETED.|
|finalMeasurement|[GoogleCloudMlV1__Measurement](#schemagooglecloudmlv1__measurement)|false|none|The final measurement containing the objective value.|
|infeasibleReason|string|false|read-only|Output only. A human readable string describing why the trial is infeasible. This should only be set if trial_infeasible is true.|
|measurements|[[GoogleCloudMlV1__Measurement](#schemagooglecloudmlv1__measurement)]|false|none|A list of measurements that are strictly lexicographically ordered by their induced tuples (steps, elapsed_time). These are used for early stopping computations.|
|name|string|false|read-only|Output only. Name of the trial assigned by the service.|
|parameters|[[GoogleCloudMlV1_Trial_Parameter](#schemagooglecloudmlv1_trial_parameter)]|false|none|The parameters of the trial.|
|startTime|string(google-datetime)|false|read-only|Output only. Time at which the trial was started.|
|state|string|false|none|The detailed state of a trial.|
|trialInfeasible|boolean|false|read-only|Output only. If true, the parameters in this trial are not attempted again.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|REQUESTED|
|state|ACTIVE|
|state|COMPLETED|
|state|STOPPING|

<h2 id="tocS_GoogleCloudMlV1__Version">GoogleCloudMlV1__Version</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__version"></a>
<a id="schema_GoogleCloudMlV1__Version"></a>
<a id="tocSgooglecloudmlv1__version"></a>
<a id="tocsgooglecloudmlv1__version"></a>

```json
{
  "acceleratorConfig": {
    "count": "string",
    "type": "ACCELERATOR_TYPE_UNSPECIFIED"
  },
  "autoScaling": {
    "maxNodes": 0,
    "metrics": [
      {
        "name": "METRIC_NAME_UNSPECIFIED",
        "target": 0
      }
    ],
    "minNodes": 0
  },
  "container": {
    "args": [
      "string"
    ],
    "command": [
      "string"
    ],
    "env": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "image": "string",
    "ports": [
      {
        "containerPort": 0
      }
    ]
  },
  "createTime": "string",
  "deploymentUri": "string",
  "description": "string",
  "errorMessage": "string",
  "etag": "string",
  "explanationConfig": {
    "integratedGradientsAttribution": {
      "numIntegralSteps": 0
    },
    "sampledShapleyAttribution": {
      "numPaths": 0
    },
    "xraiAttribution": {
      "numIntegralSteps": 0
    }
  },
  "framework": "FRAMEWORK_UNSPECIFIED",
  "isDefault": true,
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "lastMigrationModelId": "string",
  "lastMigrationTime": "string",
  "lastUseTime": "string",
  "machineType": "string",
  "manualScaling": {
    "nodes": 0
  },
  "name": "string",
  "packageUris": [
    "string"
  ],
  "predictionClass": "string",
  "pythonVersion": "string",
  "requestLoggingConfig": {
    "bigqueryTableName": "string",
    "samplingPercentage": 0
  },
  "routes": {
    "health": "string",
    "predict": "string"
  },
  "runtimeVersion": "string",
  "serviceAccount": "string",
  "state": "UNKNOWN"
}
```

Represents a version of the model. Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceleratorConfig|[GoogleCloudMlV1__AcceleratorConfig](#schemagooglecloudmlv1__acceleratorconfig)|false|none|Optional. Accelerator config for using GPUs for online prediction (beta). Only specify this field if you have specified a Compute Engine (N1) machine type in the `machineType` field. Learn more about [using GPUs for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus).|
|autoScaling|[GoogleCloudMlV1__AutoScaling](#schemagooglecloudmlv1__autoscaling)|false|none|Automatically scale the number of nodes used to serve the model in response to increases and decreases in traffic. Care should be taken to ramp up traffic according to the model's ability to scale or you will start seeing increases in latency and 429 response codes.|
|container|[GoogleCloudMlV1__ContainerSpec](#schemagooglecloudmlv1__containerspec)|false|none|Optional. Specifies a custom container to use for serving predictions. If you specify this field, then `machineType` is required. If you specify this field, then `deploymentUri` is optional. If you specify this field, then you must not specify `runtimeVersion`, `packageUris`, `framework`, `pythonVersion`, or `predictionClass`.|
|createTime|string(google-datetime)|false|none|Output only. The time the version was created.|
|deploymentUri|string|false|none|The Cloud Storage URI of a directory containing trained model artifacts to be used to create the model version. See the [guide to deploying models](/ai-platform/prediction/docs/deploying-models) for more information. The total number of files under this directory must not exceed 1000. During projects.models.versions.create, AI Platform Prediction copies all files from the specified directory to a location managed by the service. From then on, AI Platform Prediction uses these copies of the model artifacts to serve predictions, not the original files in Cloud Storage, so this location is useful only as a historical record. If you specify container, then this field is optional. Otherwise, it is required. Learn [how to use this field with a custom container](/ai-platform/prediction/docs/custom-container-requirements#artifacts).|
|description|string|false|none|Optional. The description specified for the version when it was created.|
|errorMessage|string|false|none|Output only. The details of a failure or a cancellation.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetVersion`, and systems are expected to put that etag in the request to `UpdateVersion` to ensure that their change will be applied to the model as intended.|
|explanationConfig|[GoogleCloudMlV1__ExplanationConfig](#schemagooglecloudmlv1__explanationconfig)|false|none|Optional. Configures explainability features on the model's version. Some explanation features require additional metadata to be loaded as part of the model payload.|
|framework|string|false|none|Optional. The machine learning framework AI Platform uses to train this version of the model. Valid values are `TENSORFLOW`, `SCIKIT_LEARN`, `XGBOOST`. If you do not specify a framework, AI Platform will analyze files in the deployment_uri to determine a framework. If you choose `SCIKIT_LEARN` or `XGBOOST`, you must also set the runtime version of the model to 1.4 or greater. Do **not** specify a framework if you're deploying a [custom prediction routine](/ai-platform/prediction/docs/custom-prediction-routines) or if you're using a [custom container](/ai-platform/prediction/docs/use-custom-container).|
|isDefault|boolean|false|none|Output only. If true, this version will be used to handle prediction requests that do not specify a version. You can change the default version by calling projects.methods.versions.setDefault.|
|labels|object|false|none|Optional. One or more labels that you can add, to organize your model versions. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models.|
|lastMigrationModelId|string|false|read-only|Output only. The [AI Platform (Unified) `Model`](https://cloud.google.com/ai-platform-unified/docs/reference/rest/v1beta1/projects.locations.models) ID for the last [model migration](https://cloud.google.com/ai-platform-unified/docs/start/migrating-to-ai-platform-unified).|
|lastMigrationTime|string(google-datetime)|false|read-only|Output only. The last time this version was successfully [migrated to AI Platform (Unified)](https://cloud.google.com/ai-platform-unified/docs/start/migrating-to-ai-platform-unified).|
|lastUseTime|string(google-datetime)|false|none|Output only. The time the version was last used for prediction.|
|machineType|string|false|none|Optional. The type of machine on which to serve the model. Currently only applies to online prediction service. To learn about valid values for this field, read [Choosing a machine type for online prediction](/ai-platform/prediction/docs/machine-types-online-prediction). If this field is not specified and you are using a [regional endpoint](/ai-platform/prediction/docs/regional-endpoints), then the machine type defaults to `n1-standard-2`. If this field is not specified and you are using the global endpoint (`ml.googleapis.com`), then the machine type defaults to `mls1-c1-m2`.|
|manualScaling|[GoogleCloudMlV1__ManualScaling](#schemagooglecloudmlv1__manualscaling)|false|none|Manually select the number of nodes to use for serving the model. You should generally use `auto_scaling` with an appropriate `min_nodes` instead, but this option is available if you want more predictable billing. Beware that latency and error rates will increase if the traffic exceeds that capability of the system to serve it based on the selected number of nodes.|
|name|string|false|none|Required. The name specified for the version when it was created. The version name must be unique within the model it is created in.|
|packageUris|[string]|false|none|Optional. Cloud Storage paths (`gs://…`) of packages for [custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines) or [scikit-learn pipelines with custom code](/ml-engine/docs/scikit/exporting-for-prediction#custom-pipeline-code). For a custom prediction routine, one of these packages must contain your Predictor class (see [`predictionClass`](#Version.FIELDS.prediction_class)). Additionally, include any dependencies used by your Predictor or scikit-learn pipeline uses that are not already included in your selected [runtime version](/ml-engine/docs/tensorflow/runtime-version-list). If you specify this field, you must also set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater.|
|predictionClass|string|false|none|Optional. The fully qualified name (module_name.class_name) of a class that implements the Predictor interface described in this reference field. The module containing this class should be included in a package provided to the [`packageUris` field](#Version.FIELDS.package_uris). Specify this field if and only if you are deploying a [custom prediction routine (beta)](/ml-engine/docs/tensorflow/custom-prediction-routines). If you specify this field, you must set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater and you must set `machineType` to a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction). The following code sample provides the Predictor interface: class Predictor(object): """Interface for constructing custom predictors.""" def predict(self, instances, **kwargs): """Performs custom prediction. Instances are the decoded values from the request. They have already been deserialized from JSON. Args: instances: A list of prediction input instances. **kwargs: A dictionary of keyword args provided as additional fields on the predict request body. Returns: A list of outputs containing the prediction results. This list must be JSON serializable. """ raise NotImplementedError() @classmethod def from_path(cls, model_dir): """Creates an instance of Predictor using the given path. Loading of the predictor should be done in this method. Args: model_dir: The local directory that contains the exported model file along with any additional files uploaded when creating the version resource. Returns: An instance implementing this Predictor class. """ raise NotImplementedError() Learn more about [the Predictor interface and custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines).|
|pythonVersion|string|false|none|Required. The version of Python used in prediction. The following Python versions are available: * Python '3.7' is available when `runtime_version` is set to '1.15' or later. * Python '3.5' is available when `runtime_version` is set to a version from '1.4' to '1.14'. * Python '2.7' is available when `runtime_version` is set to '1.15' or earlier. Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list).|
|requestLoggingConfig|[GoogleCloudMlV1__RequestLoggingConfig](#schemagooglecloudmlv1__requestloggingconfig)|false|none|Optional. *Only* specify this field in a projects.models.versions.patch request. Specifying it in a projects.models.versions.create request has no effect. Configures the request-response pair logging on predictions from this Version.|
|routes|[GoogleCloudMlV1__RouteMap](#schemagooglecloudmlv1__routemap)|false|none|Optional. Specifies paths on a custom container's HTTP server where AI Platform Prediction sends certain requests. If you specify this field, then you must also specify the `container` field. If you specify the `container` field and do not specify this field, it defaults to the following: ```json { "predict": "/v1/models/MODEL/versions/VERSION:predict", "health": "/v1/models/MODEL/versions/VERSION" } ``` See RouteMap for more details about these default values.|
|runtimeVersion|string|false|none|Required. The AI Platform runtime version to use for this deployment. For more information, see the [runtime version list](/ml-engine/docs/runtime-version-list) and [how to manage runtime versions](/ml-engine/docs/versioning).|
|serviceAccount|string|false|none|Optional. Specifies the service account for resource access control. If you specify this field, then you must also specify either the `containerSpec` or the `predictionClass` field. Learn more about [using a custom service account](/ai-platform/prediction/docs/custom-service-account).|
|state|string|false|none|Output only. The state of a version.|

#### Enumerated Values

|Property|Value|
|---|---|
|framework|FRAMEWORK_UNSPECIFIED|
|framework|TENSORFLOW|
|framework|SCIKIT_LEARN|
|framework|XGBOOST|
|state|UNKNOWN|
|state|READY|
|state|CREATING|
|state|FAILED|
|state|DELETING|
|state|UPDATING|

<h2 id="tocS_GoogleCloudMlV1__XraiAttribution">GoogleCloudMlV1__XraiAttribution</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudmlv1__xraiattribution"></a>
<a id="schema_GoogleCloudMlV1__XraiAttribution"></a>
<a id="tocSgooglecloudmlv1__xraiattribution"></a>
<a id="tocsgooglecloudmlv1__xraiattribution"></a>

```json
{
  "numIntegralSteps": 0
}
```

Attributes credit by computing the XRAI taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 Currently only implemented for models with natural image inputs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numIntegralSteps|integer(int32)|false|none|Number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range.|

<h2 id="tocS_GoogleIamV1__AuditConfig">GoogleIamV1__AuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1__auditconfig"></a>
<a id="schema_GoogleIamV1__AuditConfig"></a>
<a id="tocSgoogleiamv1__auditconfig"></a>
<a id="tocsgoogleiamv1__auditconfig"></a>

```json
{
  "auditLogConfigs": [
    {
      "exemptedMembers": [
        "string"
      ],
      "logType": "LOG_TYPE_UNSPECIFIED"
    }
  ],
  "service": "string"
}
```

Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditLogConfigs|[[GoogleIamV1__AuditLogConfig](#schemagoogleiamv1__auditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.|

<h2 id="tocS_GoogleIamV1__AuditLogConfig">GoogleIamV1__AuditLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1__auditlogconfig"></a>
<a id="schema_GoogleIamV1__AuditLogConfig"></a>
<a id="tocSgoogleiamv1__auditlogconfig"></a>
<a id="tocsgoogleiamv1__auditlogconfig"></a>

```json
{
  "exemptedMembers": [
    "string"
  ],
  "logType": "LOG_TYPE_UNSPECIFIED"
}
```

Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exemptedMembers|[string]|false|none|Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.|
|logType|string|false|none|The log type that this config enables.|

#### Enumerated Values

|Property|Value|
|---|---|
|logType|LOG_TYPE_UNSPECIFIED|
|logType|ADMIN_READ|
|logType|DATA_WRITE|
|logType|DATA_READ|

<h2 id="tocS_GoogleIamV1__Binding">GoogleIamV1__Binding</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1__binding"></a>
<a id="schema_GoogleIamV1__Binding"></a>
<a id="tocSgoogleiamv1__binding"></a>
<a id="tocsgoogleiamv1__binding"></a>

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
|condition|[GoogleType__Expr](#schemagoogletype__expr)|false|none|The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

<h2 id="tocS_GoogleIamV1__Policy">GoogleIamV1__Policy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1__policy"></a>
<a id="schema_GoogleIamV1__Policy"></a>
<a id="tocSgoogleiamv1__policy"></a>
<a id="tocsgoogleiamv1__policy"></a>

```json
{
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
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

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditConfigs|[[GoogleIamV1__AuditConfig](#schemagoogleiamv1__auditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[GoogleIamV1__Binding](#schemagoogleiamv1__binding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_GoogleIamV1__SetIamPolicyRequest">GoogleIamV1__SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1__setiampolicyrequest"></a>
<a id="schema_GoogleIamV1__SetIamPolicyRequest"></a>
<a id="tocSgoogleiamv1__setiampolicyrequest"></a>
<a id="tocsgoogleiamv1__setiampolicyrequest"></a>

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
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
  },
  "updateMask": "string"
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[GoogleIamV1__Policy](#schemagoogleiamv1__policy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|
|updateMask|string(google-fieldmask)|false|none|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`|

<h2 id="tocS_GoogleIamV1__TestIamPermissionsRequest">GoogleIamV1__TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1__testiampermissionsrequest"></a>
<a id="schema_GoogleIamV1__TestIamPermissionsRequest"></a>
<a id="tocSgoogleiamv1__testiampermissionsrequest"></a>
<a id="tocsgoogleiamv1__testiampermissionsrequest"></a>

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

<h2 id="tocS_GoogleIamV1__TestIamPermissionsResponse">GoogleIamV1__TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1__testiampermissionsresponse"></a>
<a id="schema_GoogleIamV1__TestIamPermissionsResponse"></a>
<a id="tocSgoogleiamv1__testiampermissionsresponse"></a>
<a id="tocsgoogleiamv1__testiampermissionsresponse"></a>

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

<h2 id="tocS_GoogleLongrunning__ListOperationsResponse">GoogleLongrunning__ListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunning__listoperationsresponse"></a>
<a id="schema_GoogleLongrunning__ListOperationsResponse"></a>
<a id="tocSgooglelongrunning__listoperationsresponse"></a>
<a id="tocsgooglelongrunning__listoperationsresponse"></a>

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
|operations|[[GoogleLongrunning__Operation](#schemagooglelongrunning__operation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_GoogleLongrunning__Operation">GoogleLongrunning__Operation</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunning__operation"></a>
<a id="schema_GoogleLongrunning__Operation"></a>
<a id="tocSgooglelongrunning__operation"></a>
<a id="tocsgooglelongrunning__operation"></a>

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
|error|[GoogleRpc__Status](#schemagooglerpc__status)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_GoogleProtobuf__Empty">GoogleProtobuf__Empty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobuf__empty"></a>
<a id="schema_GoogleProtobuf__Empty"></a>
<a id="tocSgoogleprotobuf__empty"></a>
<a id="tocsgoogleprotobuf__empty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GoogleRpc__Status">GoogleRpc__Status</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpc__status"></a>
<a id="schema_GoogleRpc__Status"></a>
<a id="tocSgooglerpc__status"></a>
<a id="tocsgooglerpc__status"></a>

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

<h2 id="tocS_GoogleType__Expr">GoogleType__Expr</h2>
<!-- backwards compatibility -->
<a id="schemagoogletype__expr"></a>
<a id="schema_GoogleType__Expr"></a>
<a id="tocSgoogletype__expr"></a>
<a id="tocsgoogletype__expr"></a>

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
