<h1 id="firebase-ml-api">Firebase ML API v1beta2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Access custom machine learning models hosted via Firebase ML.

Base URLs:

* <a href="https://firebaseml.googleapis.com/">https://firebaseml.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://firebase.google.com">External documentation</a>

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

<h1 id="firebase-ml-api-projects">projects</h1>

## firebaseml.projects.operations.get

<a id="opIdfirebaseml.projects.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="firebasemlprojectsoperationsget-parameters">Parameters</h3>

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

<h3 id="firebasemlprojectsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseml.projects.models.delete

<a id="opIdfirebaseml.projects.models.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta2/{name}`

Deletes a model

<h3 id="firebasemlprojectsmodelsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the model to delete. The name must have the form `projects/{project_id}/models/{model_id}`|
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

<h3 id="firebasemlprojectsmodelsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseml.projects.models.patch

<a id="opIdfirebaseml.projects.models.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "name": "string",
    "state": {
      "published": true
    },
    "tags": [
      "string"
    ],
    "tfliteModel": {
      "automlModel": "string",
      "gcsTfliteUri": "string"
    }
  }'
```

`PATCH /v1beta2/{name}`

Updates a model. The longrunning operation will eventually return a Model.

> Body parameter

```json
{
  "displayName": "string",
  "name": "string",
  "state": {
    "published": true
  },
  "tags": [
    "string"
  ],
  "tfliteModel": {
    "automlModel": "string",
    "gcsTfliteUri": "string"
  }
}
```

<h3 id="firebasemlprojectsmodelspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the Model. Model names have the form `projects/{project_id}/models/{model_id}` The name is ignored when creating a model.|
|updateMask|query|string|false|The update mask|
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
|body|body|[Model](#schemamodel)|false|none|
|» displayName|body|string|false|Required. The name of the model to create. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_) and ASCII digits 0-9. It must start with a letter.|
|» name|body|string|false|The resource name of the Model. Model names have the form `projects/{project_id}/models/{model_id}` The name is ignored when creating a model.|
|» state|body|[ModelState](#schemamodelstate)|false|State common to all model types. Includes publishing and validation information.|
|» tags|body|[string]|false|User defined tags which can be used to group/filter models during listing|
|» tfliteModel|body|[TfLiteModel](#schematflitemodel)|false|A TFLite Model|

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

<h3 id="firebasemlprojectsmodelspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseml.projects.models.download

<a id="opIdfirebaseml.projects.models.download"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string:download \
  -H 'Accept: application/json'
```

`GET /v1beta2/{name}:download`

Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.

<h3 id="firebasemlprojectsmodelsdownload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the model to download. The name must have the form `projects/{project}/models/{model}`|
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
  "downloadUri": "string",
  "expireTime": "string",
  "modelFormat": "MODEL_FORMAT_UNSPECIFIED",
  "sizeBytes": "string"
}
```

<h3 id="firebasemlprojectsmodelsdownload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DownloadModelResponse](#schemadownloadmodelresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## firebaseml.projects.models.list

<a id="opIdfirebaseml.projects.models.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/models \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta2/{parent}/models`

Lists the models

<h3 id="firebasemlprojectsmodelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the parent to list models for. The parent must have the form `projects/{project_id}'|
|filter|query|string|false|A filter for the list e.g. 'tags: abc' to list models which are tagged with "abc"|
|pageSize|query|integer|false|The maximum number of items to return|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any.|
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
      "activeOperations": [
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
      ],
      "createTime": "string",
      "displayName": "string",
      "etag": "string",
      "modelHash": "string",
      "name": "string",
      "state": {
        "published": true,
        "validationError": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        }
      },
      "tags": [
        "string"
      ],
      "tfliteModel": {
        "automlModel": "string",
        "gcsTfliteUri": "string",
        "sizeBytes": "string"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="firebasemlprojectsmodelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListModelsResponse](#schemalistmodelsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## firebaseml.projects.models.create

<a id="opIdfirebaseml.projects.models.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta2/string/models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "name": "string",
    "state": {
      "published": true
    },
    "tags": [
      "string"
    ],
    "tfliteModel": {
      "automlModel": "string",
      "gcsTfliteUri": "string"
    }
  }'
```

`POST /v1beta2/{parent}/models`

Creates a model in Firebase ML. The longrunning operation will eventually return a Model

> Body parameter

```json
{
  "displayName": "string",
  "name": "string",
  "state": {
    "published": true
  },
  "tags": [
    "string"
  ],
  "tfliteModel": {
    "automlModel": "string",
    "gcsTfliteUri": "string"
  }
}
```

<h3 id="firebasemlprojectsmodelscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent project resource where the model is to be created. The parent must have the form `projects/{project_id}`|
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
|body|body|[Model](#schemamodel)|false|none|
|» displayName|body|string|false|Required. The name of the model to create. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_) and ASCII digits 0-9. It must start with a letter.|
|» name|body|string|false|The resource name of the Model. Model names have the form `projects/{project_id}/models/{model_id}` The name is ignored when creating a model.|
|» state|body|[ModelState](#schemamodelstate)|false|State common to all model types. Includes publishing and validation information.|
|» tags|body|[string]|false|User defined tags which can be used to group/filter models during listing|
|» tfliteModel|body|[TfLiteModel](#schematflitemodel)|false|A TFLite Model|

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

<h3 id="firebasemlprojectsmodelscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_DownloadModelResponse">DownloadModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemadownloadmodelresponse"></a>
<a id="schema_DownloadModelResponse"></a>
<a id="tocSdownloadmodelresponse"></a>
<a id="tocsdownloadmodelresponse"></a>

```json
{
  "downloadUri": "string",
  "expireTime": "string",
  "modelFormat": "MODEL_FORMAT_UNSPECIFIED",
  "sizeBytes": "string"
}
```

The response for downloading a model to device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadUri|string|false|read-only|Output only. A download URI for the model/zip file.|
|expireTime|string(google-datetime)|false|read-only|Output only. The time that the download URI link expires. If the link has expired, the REST call must be repeated.|
|modelFormat|string|false|read-only|Output only. The format of the model being downloaded.|
|sizeBytes|string(int64)|false|read-only|Output only. The size of the file(s), if this information is available.|

#### Enumerated Values

|Property|Value|
|---|---|
|modelFormat|MODEL_FORMAT_UNSPECIFIED|
|modelFormat|TFLITE|

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

<h2 id="tocS_ListModelsResponse">ListModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelsresponse"></a>
<a id="schema_ListModelsResponse"></a>
<a id="tocSlistmodelsresponse"></a>
<a id="tocslistmodelsresponse"></a>

```json
{
  "models": [
    {
      "activeOperations": [
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
      ],
      "createTime": "string",
      "displayName": "string",
      "etag": "string",
      "modelHash": "string",
      "name": "string",
      "state": {
        "published": true,
        "validationError": {
          "code": 0,
          "details": [
            {
              "property1": null,
              "property2": null
            }
          ],
          "message": "string"
        }
      },
      "tags": [
        "string"
      ],
      "tfliteModel": {
        "automlModel": "string",
        "gcsTfliteUri": "string",
        "sizeBytes": "string"
      },
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

The response for list models

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|models|[[Model](#schemamodel)]|false|none|The list of models|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|

<h2 id="tocS_Model">Model</h2>
<!-- backwards compatibility -->
<a id="schemamodel"></a>
<a id="schema_Model"></a>
<a id="tocSmodel"></a>
<a id="tocsmodel"></a>

```json
{
  "activeOperations": [
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
  ],
  "createTime": "string",
  "displayName": "string",
  "etag": "string",
  "modelHash": "string",
  "name": "string",
  "state": {
    "published": true,
    "validationError": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  },
  "tags": [
    "string"
  ],
  "tfliteModel": {
    "automlModel": "string",
    "gcsTfliteUri": "string",
    "sizeBytes": "string"
  },
  "updateTime": "string"
}
```

An ML model hosted in Firebase ML

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeOperations|[[Operation](#schemaoperation)]|false|read-only|Output only. Lists operation ids associated with this model whose status is NOT done.|
|createTime|string(google-datetime)|false|read-only|Output only. Timestamp when this model was created in Firebase ML.|
|displayName|string|false|none|Required. The name of the model to create. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_) and ASCII digits 0-9. It must start with a letter.|
|etag|string|false|read-only|Output only. See RFC7232 https://tools.ietf.org/html/rfc7232#section-2.3|
|modelHash|string|false|read-only|Output only. The model_hash will change if a new file is available for download.|
|name|string|false|none|The resource name of the Model. Model names have the form `projects/{project_id}/models/{model_id}` The name is ignored when creating a model.|
|state|[ModelState](#schemamodelstate)|false|none|State common to all model types. Includes publishing and validation information.|
|tags|[string]|false|none|User defined tags which can be used to group/filter models during listing|
|tfliteModel|[TfLiteModel](#schematflitemodel)|false|none|A TFLite Model|
|updateTime|string(google-datetime)|false|read-only|Output only. Timestamp when this model was updated in Firebase ML.|

<h2 id="tocS_ModelOperationMetadata">ModelOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemamodeloperationmetadata"></a>
<a id="schema_ModelOperationMetadata"></a>
<a id="tocSmodeloperationmetadata"></a>
<a id="tocsmodeloperationmetadata"></a>

```json
{
  "basicOperationStatus": "BASIC_OPERATION_STATUS_UNSPECIFIED",
  "name": "string"
}
```

This is returned in the longrunning operations for create/update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|basicOperationStatus|string|false|none|none|
|name|string|false|none|The name of the model we are creating/updating The name must have the form `projects/{project_id}/models/{model_id}`|

#### Enumerated Values

|Property|Value|
|---|---|
|basicOperationStatus|BASIC_OPERATION_STATUS_UNSPECIFIED|
|basicOperationStatus|BASIC_OPERATION_STATUS_UPLOADING|
|basicOperationStatus|BASIC_OPERATION_STATUS_VERIFYING|

<h2 id="tocS_ModelState">ModelState</h2>
<!-- backwards compatibility -->
<a id="schemamodelstate"></a>
<a id="schema_ModelState"></a>
<a id="tocSmodelstate"></a>
<a id="tocsmodelstate"></a>

```json
{
  "published": true,
  "validationError": {
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

State common to all model types. Includes publishing and validation information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|published|boolean|false|none|Indicates if this model has been published.|
|validationError|[Status](#schemastatus)|false|none|Output only. Indicates the latest validation error on the model if any. A model may have validation errors if there were problems during the model creation/update. e.g. in the case of a TfLiteModel, if a tflite model file was missing or in the wrong format. This field will be empty for valid models.|

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
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

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

<h2 id="tocS_TfLiteModel">TfLiteModel</h2>
<!-- backwards compatibility -->
<a id="schematflitemodel"></a>
<a id="schema_TfLiteModel"></a>
<a id="tocStflitemodel"></a>
<a id="tocstflitemodel"></a>

```json
{
  "automlModel": "string",
  "gcsTfliteUri": "string",
  "sizeBytes": "string"
}
```

Information that is specific to TfLite models.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automlModel|string|false|none|The AutoML model id referencing a model you created with the AutoML API. The name should have format 'projects//locations//models/' (This is the model resource name returned from the AutoML API)|
|gcsTfliteUri|string|false|none|The TfLite file containing the model. (Stored in Google Cloud). The gcs_tflite_uri should have form: gs://some-bucket/some-model.tflite Note: If you update the file in the original location, it is necessary to call UpdateModel for ML to pick up and validate the updated file.|
|sizeBytes|string|false|read-only|Output only. The size of the TFLite model|
