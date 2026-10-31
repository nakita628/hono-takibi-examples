<h1 id="cloud-automl-api">Cloud AutoML API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Train high-quality custom machine learning models with minimum effort and machine learning expertise.

Base URLs:

* <a href="https://automl.googleapis.com/">https://automl.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/automl">External documentation</a>

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

<h1 id="cloud-automl-api-projects">projects</h1>

## automl.projects.locations.operations.get

<a id="opIdautoml.projects.locations.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="automlprojectslocationsoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource.|
|fieldMask|query|string|false|Mask specifying which fields to read.|
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

<h3 id="automlprojectslocationsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.operations.delete

<a id="opIdautoml.projects.locations.operations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

<h3 id="automlprojectslocationsoperationsdelete-parameters">Parameters</h3>

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

<h3 id="automlprojectslocationsoperationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.datasets.tableSpecs.columnSpecs.patch

<a id="opIdautoml.projects.locations.datasets.tableSpecs.columnSpecs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataStats": {
      "arrayStats": {},
      "categoryStats": {
        "topCategoryStats": [
          {
            "count": "string",
            "value": "string"
          }
        ]
      },
      "distinctValueCount": "string",
      "float64Stats": {
        "histogramBuckets": [
          {
            "count": "string",
            "max": 0,
            "min": 0
          }
        ],
        "mean": 0,
        "quantiles": [
          0
        ],
        "standardDeviation": 0
      },
      "nullValueCount": "string",
      "stringStats": {
        "topUnigramStats": [
          {
            "count": "string",
            "value": "string"
          }
        ]
      },
      "structStats": {},
      "timestampStats": {
        "granularStats": {
          "property1": {
            "buckets": {
              "property1": "string",
              "property2": "string"
            }
          },
          "property2": {
            "buckets": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      },
      "validValueCount": "string"
    },
    "dataType": {
      "listElementType": {},
      "nullable": true,
      "structType": {},
      "timeFormat": "string",
      "typeCode": "TYPE_CODE_UNSPECIFIED"
    },
    "displayName": "string",
    "etag": "string",
    "name": "string",
    "topCorrelatedColumns": [
      {
        "columnSpecId": "string",
        "correlationStats": {
          "cramersV": 0
        }
      }
    ]
  }'
```

`PATCH /v1beta1/{name}`

Updates a column spec.

> Body parameter

```json
{
  "dataStats": {
    "arrayStats": {},
    "categoryStats": {
      "topCategoryStats": [
        {
          "count": "string",
          "value": "string"
        }
      ]
    },
    "distinctValueCount": "string",
    "float64Stats": {
      "histogramBuckets": [
        {
          "count": "string",
          "max": 0,
          "min": 0
        }
      ],
      "mean": 0,
      "quantiles": [
        0
      ],
      "standardDeviation": 0
    },
    "nullValueCount": "string",
    "stringStats": {
      "topUnigramStats": [
        {
          "count": "string",
          "value": "string"
        }
      ]
    },
    "structStats": {},
    "timestampStats": {
      "granularStats": {
        "property1": {
          "buckets": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "buckets": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    },
    "validValueCount": "string"
  },
  "dataType": {
    "listElementType": {},
    "nullable": true,
    "structType": {},
    "timeFormat": "string",
    "typeCode": "TYPE_CODE_UNSPECIFIED"
  },
  "displayName": "string",
  "etag": "string",
  "name": "string",
  "topCorrelatedColumns": [
    {
      "columnSpecId": "string",
      "correlationStats": {
        "cramersV": 0
      }
    }
  ]
}
```

<h3 id="automlprojectslocationsdatasetstablespecscolumnspecspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. The resource name of the column specs. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}/columnSpecs/{column_spec_id}`|
|updateMask|query|string|false|The update mask applies to the resource.|
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
|body|body|[ColumnSpec](#schemacolumnspec)|false|none|
|» dataStats|body|[DataStats](#schemadatastats)|false|Output only. Stats of the series of values in the column. This field may be stale, see the ancestor's Dataset.tables_dataset_metadata.stats_update_time field for the timestamp at which these stats were last updated.|
|» dataType|body|[DataType](#schemadatatype)|false|The data type of elements stored in the column.|
|» displayName|body|string|false|Output only. The name of the column to show in the interface. The name can be up to 100 characters long and can consist only of ASCII Latin letters A-Z and a-z, ASCII digits 0-9, underscores(_), and forward slashes(/), and must start with a letter or a digit.|
|» etag|body|string|false|Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.|
|» name|body|string|false|Output only. The resource name of the column specs. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}/columnSpecs/{column_spec_id}`|
|» topCorrelatedColumns|body|[[CorrelatedColumn](#schemacorrelatedcolumn)]|false|Deprecated.|

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
  "dataStats": {
    "arrayStats": {},
    "categoryStats": {
      "topCategoryStats": [
        {
          "count": "string",
          "value": "string"
        }
      ]
    },
    "distinctValueCount": "string",
    "float64Stats": {
      "histogramBuckets": [
        {
          "count": "string",
          "max": 0,
          "min": 0
        }
      ],
      "mean": 0,
      "quantiles": [
        0
      ],
      "standardDeviation": 0
    },
    "nullValueCount": "string",
    "stringStats": {
      "topUnigramStats": [
        {
          "count": "string",
          "value": "string"
        }
      ]
    },
    "structStats": {},
    "timestampStats": {
      "granularStats": {
        "property1": {
          "buckets": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "buckets": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    },
    "validValueCount": "string"
  },
  "dataType": {
    "listElementType": {},
    "nullable": true,
    "structType": {},
    "timeFormat": "string",
    "typeCode": "TYPE_CODE_UNSPECIFIED"
  },
  "displayName": "string",
  "etag": "string",
  "name": "string",
  "topCorrelatedColumns": [
    {
      "columnSpecId": "string",
      "correlationStats": {
        "cramersV": 0
      }
    }
  ]
}
```

<h3 id="automlprojectslocationsdatasetstablespecscolumnspecspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ColumnSpec](#schemacolumnspec)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.list

<a id="opIdautoml.projects.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/locations`

Lists information about the supported locations for this service.

<h3 id="automlprojectslocationslist-parameters">Parameters</h3>

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

<h3 id="automlprojectslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.operations.list

<a id="opIdautoml.projects.locations.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="automlprojectslocationsoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation's parent resource.|
|filter|query|string|false|An expression for filtering the results of the request. * `operation_id` - for = or !=. * `done` - for = or !=. * `works_on` - for = or !=. Some examples of using the filter are: * `done=true` --> The operation has finished running. * `works_on = projects/my-project/locations/us-central1/datasets/5` --> The operation works on a dataset with ID 5. * `works_on = projects/my-project/locations/us-central1/models/15` --> The operation works on a model with ID 15.|
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

<h3 id="automlprojectslocationsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListOperationsResponse](#schemalistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.models.batchPredict

<a id="opIdautoml.projects.locations.models.batchPredict"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:batchPredict \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inputConfig": {
      "bigquerySource": {
        "inputUri": "string"
      },
      "gcsSource": {
        "inputUris": [
          "string"
        ]
      }
    },
    "outputConfig": {
      "bigqueryDestination": {
        "outputUri": "string"
      },
      "gcsDestination": {
        "outputUriPrefix": "string"
      }
    },
    "params": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /v1beta1/{name}:batchPredict`

Perform a batch prediction. Unlike the online Predict, batch prediction result won't be immediately available in the response. Instead, a long running operation object is returned. User can poll the operation result via GetOperation method. Once the operation is done, BatchPredictResult is returned in the response field. Available for following ML problems: * Image Classification * Image Object Detection * Video Classification * Video Object Tracking * Text Extraction * Tables

> Body parameter

```json
{
  "inputConfig": {
    "bigquerySource": {
      "inputUri": "string"
    },
    "gcsSource": {
      "inputUris": [
        "string"
      ]
    }
  },
  "outputConfig": {
    "bigqueryDestination": {
      "outputUri": "string"
    },
    "gcsDestination": {
      "outputUriPrefix": "string"
    }
  },
  "params": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="automlprojectslocationsmodelsbatchpredict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the model requested to serve the batch prediction.|
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
|body|body|[BatchPredictRequest](#schemabatchpredictrequest)|false|none|
|» inputConfig|body|[BatchPredictInputConfig](#schemabatchpredictinputconfig)|false|Required. The input configuration for batch prediction.|
|» outputConfig|body|[BatchPredictOutputConfig](#schemabatchpredictoutputconfig)|false|Required. The Configuration specifying where output predictions should be written.|
|» params|body|object|false|Required. Additional domain-specific parameters for the predictions, any string must be up to 25000 characters long. * For Text Classification: `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for a text snippet, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Classification: `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for an image, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Object Detection: `score_threshold` - (float) When Model detects objects on the image, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. `max_bounding_box_count` - (int64) No more than this number of bounding boxes will be produced per image. Default is 100, the requested value may be limited by server. * For Video Classification : `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for a video, it will only produce results that have at least this confidence score. The default is 0.5. `segment_classification` - (boolean) Set to true to request segment-level classification. AutoML Video Intelligence returns labels and their confidence scores for the entire segment of the video that user specified in the request configuration. The default is "true". `shot_classification` - (boolean) Set to true to request shot-level classification. AutoML Video Intelligence determines the boundaries for each camera shot in the entire segment of the video that user specified in the request configuration. AutoML Video Intelligence then returns labels and their confidence scores for each detected shot, along with the start and end time of the shot. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. The default is "false". `1s_interval_classification` - (boolean) Set to true to request classification for a video at one-second intervals. AutoML Video Intelligence returns labels and their confidence scores for each second of the entire segment of the video that user specified in the request configuration. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. The default is "false". * For Tables: feature_importance - (boolean) Whether feature importance should be populated in the returned TablesAnnotations. The default is false. * For Video Object Tracking: `score_threshold` - (float) When Model detects objects on video frames, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. `max_bounding_box_count` - (int64) No more than this number of bounding boxes will be returned per frame. Default is 100, the requested value may be limited by server. `min_bounding_box_size` - (float) Only bounding boxes with shortest edge at least that long as a relative value of video frame size will be returned. Value in 0 to 1 range. Default is 0.|
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

<h3 id="automlprojectslocationsmodelsbatchpredict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.operations.cancel

<a id="opIdautoml.projects.locations.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="automlprojectslocationsoperationscancel-parameters">Parameters</h3>

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

<h3 id="automlprojectslocationsoperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.models.deploy

<a id="opIdautoml.projects.locations.models.deploy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:deploy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "imageClassificationModelDeploymentMetadata": {
      "nodeCount": "string"
    },
    "imageObjectDetectionModelDeploymentMetadata": {
      "nodeCount": "string"
    }
  }'
```

`POST /v1beta1/{name}:deploy`

Deploys a model. If a model is already deployed, deploying it with the same parameters has no effect. Deploying with different parametrs (as e.g. changing node_number) will reset the deployment state without pausing the model's availability. Only applicable for Text Classification, Image Object Detection , Tables, and Image Segmentation; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.

> Body parameter

```json
{
  "imageClassificationModelDeploymentMetadata": {
    "nodeCount": "string"
  },
  "imageObjectDetectionModelDeploymentMetadata": {
    "nodeCount": "string"
  }
}
```

<h3 id="automlprojectslocationsmodelsdeploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the model to deploy.|
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
|body|body|[DeployModelRequest](#schemadeploymodelrequest)|false|none|
|» imageClassificationModelDeploymentMetadata|body|[ImageClassificationModelDeploymentMetadata](#schemaimageclassificationmodeldeploymentmetadata)|false|Model deployment metadata specific to Image Classification.|
|» imageObjectDetectionModelDeploymentMetadata|body|[ImageObjectDetectionModelDeploymentMetadata](#schemaimageobjectdetectionmodeldeploymentmetadata)|false|Model deployment metadata specific to Image Object Detection.|

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

<h3 id="automlprojectslocationsmodelsdeploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.models.export

<a id="opIdautoml.projects.locations.models.export"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "outputConfig": {
      "gcrDestination": {
        "outputUri": "string"
      },
      "gcsDestination": {
        "outputUriPrefix": "string"
      },
      "modelFormat": "string",
      "params": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /v1beta1/{name}:export`

Exports a trained, "export-able", model to a user specified Google Cloud Storage location. A model is considered export-able if and only if it has an export format defined for it in ModelExportOutputConfig. Returns an empty response in the response field when it completes.

> Body parameter

```json
{
  "outputConfig": {
    "gcrDestination": {
      "outputUri": "string"
    },
    "gcsDestination": {
      "outputUriPrefix": "string"
    },
    "modelFormat": "string",
    "params": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="automlprojectslocationsmodelsexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the model to export.|
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
|body|body|[ExportModelRequest](#schemaexportmodelrequest)|false|none|
|» outputConfig|body|[ModelExportOutputConfig](#schemamodelexportoutputconfig)|false|Required. The desired output location and configuration.|

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

<h3 id="automlprojectslocationsmodelsexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.datasets.exportData

<a id="opIdautoml.projects.locations.datasets.exportData"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:exportData \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "outputConfig": {
      "bigqueryDestination": {
        "outputUri": "string"
      },
      "gcsDestination": {
        "outputUriPrefix": "string"
      }
    }
  }'
```

`POST /v1beta1/{name}:exportData`

Exports dataset's data to the provided output location. Returns an empty response in the response field when it completes.

> Body parameter

```json
{
  "outputConfig": {
    "bigqueryDestination": {
      "outputUri": "string"
    },
    "gcsDestination": {
      "outputUriPrefix": "string"
    }
  }
}
```

<h3 id="automlprojectslocationsdatasetsexportdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the dataset.|
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
|body|body|[ExportDataRequest](#schemaexportdatarequest)|false|none|
|» outputConfig|body|[OutputConfig](#schemaoutputconfig)|false|Required. The desired output location.|

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

<h3 id="automlprojectslocationsdatasetsexportdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.models.exportEvaluatedExamples

<a id="opIdautoml.projects.locations.models.exportEvaluatedExamples"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:exportEvaluatedExamples \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "outputConfig": {
      "bigqueryDestination": {
        "outputUri": "string"
      }
    }
  }'
```

`POST /v1beta1/{name}:exportEvaluatedExamples`

Exports examples on which the model was evaluated (i.e. which were in the TEST set of the dataset the model was created from), together with their ground truth annotations and the annotations created (predicted) by the model. The examples, ground truth and predictions are exported in the state they were at the moment the model was evaluated. This export is available only for 30 days since the model evaluation is created. Currently only available for Tables. Returns an empty response in the response field when it completes.

> Body parameter

```json
{
  "outputConfig": {
    "bigqueryDestination": {
      "outputUri": "string"
    }
  }
}
```

<h3 id="automlprojectslocationsmodelsexportevaluatedexamples-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the model whose evaluated examples are to be exported.|
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
|body|body|[ExportEvaluatedExamplesRequest](#schemaexportevaluatedexamplesrequest)|false|none|
|» outputConfig|body|[ExportEvaluatedExamplesOutputConfig](#schemaexportevaluatedexamplesoutputconfig)|false|Required. The desired output location and configuration.|

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

<h3 id="automlprojectslocationsmodelsexportevaluatedexamples-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.datasets.importData

<a id="opIdautoml.projects.locations.datasets.importData"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:importData \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inputConfig": {
      "bigquerySource": {
        "inputUri": "string"
      },
      "gcsSource": {
        "inputUris": [
          "string"
        ]
      },
      "params": {
        "property1": "string",
        "property2": "string"
      }
    }
  }'
```

`POST /v1beta1/{name}:importData`

Imports data into a dataset. For Tables this method can only be called on an empty Dataset. For Tables: * A schema_inference_version parameter must be explicitly set. Returns an empty response in the response field when it completes.

> Body parameter

```json
{
  "inputConfig": {
    "bigquerySource": {
      "inputUri": "string"
    },
    "gcsSource": {
      "inputUris": [
        "string"
      ]
    },
    "params": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

<h3 id="automlprojectslocationsdatasetsimportdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Dataset name. Dataset must already exist. All imported annotations and examples will be added.|
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
|body|body|[ImportDataRequest](#schemaimportdatarequest)|false|none|
|» inputConfig|body|[InputConfig](#schemainputconfig)|false|Required. The desired input location and its domain specific semantics, if any.|

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

<h3 id="automlprojectslocationsdatasetsimportdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.models.predict

<a id="opIdautoml.projects.locations.models.predict"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:predict \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "params": {
      "property1": "string",
      "property2": "string"
    },
    "payload": {
      "document": {
        "documentDimensions": {
          "height": 0,
          "unit": "DOCUMENT_DIMENSION_UNIT_UNSPECIFIED",
          "width": 0
        },
        "documentText": {
          "content": "string",
          "contentUri": "string",
          "mimeType": "string"
        },
        "inputConfig": {
          "gcsSource": {
            "inputUris": [
              "string"
            ]
          }
        },
        "layout": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "pageNumber": 0,
            "textSegment": {
              "content": "string",
              "endOffset": "string",
              "startOffset": "string"
            },
            "textSegmentType": "TEXT_SEGMENT_TYPE_UNSPECIFIED"
          }
        ],
        "pageCount": 0
      },
      "image": {
        "imageBytes": "string",
        "inputConfig": {
          "bigquerySource": {
            "inputUri": "string"
          },
          "gcsSource": {
            "inputUris": [
              "string"
            ]
          },
          "params": {
            "property1": "string",
            "property2": "string"
          }
        },
        "thumbnailUri": "string"
      },
      "row": {
        "columnSpecIds": [
          "string"
        ],
        "values": [
          null
        ]
      },
      "textSnippet": {
        "content": "string",
        "contentUri": "string",
        "mimeType": "string"
      }
    }
  }'
```

`POST /v1beta1/{name}:predict`

Perform an online prediction. The prediction result will be directly returned in the response. Available for following ML problems, and their expected request payloads: * Image Classification - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Image Object Detection - Image in .JPEG, .GIF or .PNG format, image_bytes up to 30MB. * Text Classification - TextSnippet, content up to 60,000 characters, UTF-8 encoded. * Text Extraction - TextSnippet, content up to 30,000 characters, UTF-8 NFC encoded. * Translation - TextSnippet, content up to 25,000 characters, UTF-8 encoded. * Tables - Row, with column values matching the columns of the model, up to 5MB. Not available for FORECASTING prediction_type. * Text Sentiment - TextSnippet, content up 500 characters, UTF-8 encoded.

> Body parameter

```json
{
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": {
    "document": {
      "documentDimensions": {
        "height": 0,
        "unit": "DOCUMENT_DIMENSION_UNIT_UNSPECIFIED",
        "width": 0
      },
      "documentText": {
        "content": "string",
        "contentUri": "string",
        "mimeType": "string"
      },
      "inputConfig": {
        "gcsSource": {
          "inputUris": [
            "string"
          ]
        }
      },
      "layout": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "pageNumber": 0,
          "textSegment": {
            "content": "string",
            "endOffset": "string",
            "startOffset": "string"
          },
          "textSegmentType": "TEXT_SEGMENT_TYPE_UNSPECIFIED"
        }
      ],
      "pageCount": 0
    },
    "image": {
      "imageBytes": "string",
      "inputConfig": {
        "bigquerySource": {
          "inputUri": "string"
        },
        "gcsSource": {
          "inputUris": [
            "string"
          ]
        },
        "params": {
          "property1": "string",
          "property2": "string"
        }
      },
      "thumbnailUri": "string"
    },
    "row": {
      "columnSpecIds": [
        "string"
      ],
      "values": [
        null
      ]
    },
    "textSnippet": {
      "content": "string",
      "contentUri": "string",
      "mimeType": "string"
    }
  }
}
```

<h3 id="automlprojectslocationsmodelspredict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Name of the model requested to serve the prediction.|
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
|body|body|[PredictRequest](#schemapredictrequest)|false|none|
|» params|body|object|false|Additional domain-specific parameters, any string must be up to 25000 characters long. * For Image Classification: `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for an image, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Object Detection: `score_threshold` - (float) When Model detects objects on the image, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. `max_bounding_box_count` - (int64) No more than this number of bounding boxes will be returned in the response. Default is 100, the requested value may be limited by server. * For Tables: feature_importance - (boolean) Whether feature importance should be populated in the returned TablesAnnotation. The default is false.|
|» » **additionalProperties**|body|string|false|none|
|» payload|body|[ExamplePayload](#schemaexamplepayload)|false|Required. Payload to perform a prediction on. The payload must match the problem type that the model was trained to solve.|

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
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "payload": [
    {
      "annotationSpecId": "string",
      "classification": {
        "score": 0
      },
      "displayName": "string",
      "imageObjectDetection": {
        "boundingBox": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "score": 0
      },
      "tables": {
        "baselineScore": 0,
        "predictionInterval": {
          "end": 0,
          "start": 0
        },
        "score": 0,
        "tablesModelColumnInfo": [
          {
            "columnDisplayName": "string",
            "columnSpecName": "string",
            "featureImportance": 0
          }
        ],
        "value": null
      },
      "textExtraction": {
        "score": 0,
        "textSegment": {
          "content": "string",
          "endOffset": "string",
          "startOffset": "string"
        }
      },
      "textSentiment": {
        "sentiment": 0
      },
      "translation": {
        "translatedContent": {
          "content": "string",
          "contentUri": "string",
          "mimeType": "string"
        }
      },
      "videoClassification": {
        "classificationAnnotation": {
          "score": 0
        },
        "timeSegment": {
          "endTimeOffset": "string",
          "startTimeOffset": "string"
        },
        "type": "string"
      },
      "videoObjectTracking": {
        "boundingBox": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "instanceId": "string",
        "score": 0,
        "timeOffset": "string"
      }
    }
  ],
  "preprocessedInput": {
    "document": {
      "documentDimensions": {
        "height": 0,
        "unit": "DOCUMENT_DIMENSION_UNIT_UNSPECIFIED",
        "width": 0
      },
      "documentText": {
        "content": "string",
        "contentUri": "string",
        "mimeType": "string"
      },
      "inputConfig": {
        "gcsSource": {
          "inputUris": [
            "string"
          ]
        }
      },
      "layout": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "pageNumber": 0,
          "textSegment": {
            "content": "string",
            "endOffset": "string",
            "startOffset": "string"
          },
          "textSegmentType": "TEXT_SEGMENT_TYPE_UNSPECIFIED"
        }
      ],
      "pageCount": 0
    },
    "image": {
      "imageBytes": "string",
      "inputConfig": {
        "bigquerySource": {
          "inputUri": "string"
        },
        "gcsSource": {
          "inputUris": [
            "string"
          ]
        },
        "params": {
          "property1": "string",
          "property2": "string"
        }
      },
      "thumbnailUri": "string"
    },
    "row": {
      "columnSpecIds": [
        "string"
      ],
      "values": [
        null
      ]
    },
    "textSnippet": {
      "content": "string",
      "contentUri": "string",
      "mimeType": "string"
    }
  }
}
```

<h3 id="automlprojectslocationsmodelspredict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PredictResponse](#schemapredictresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.models.undeploy

<a id="opIdautoml.projects.locations.models.undeploy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:undeploy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:undeploy`

Undeploys a model. If the model is not deployed this method has no effect. Only applicable for Text Classification, Image Object Detection and Tables; all other domains manage deployment automatically. Returns an empty response in the response field when it completes.

> Body parameter

```json
{}
```

<h3 id="automlprojectslocationsmodelsundeploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the model to undeploy.|
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
|body|body|[UndeployModelRequest](#schemaundeploymodelrequest)|false|none|

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

<h3 id="automlprojectslocationsmodelsundeploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.operations.wait

<a id="opIdautoml.projects.locations.operations.wait"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:wait \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "timeout": "string"
  }'
```

`POST /v1beta1/{name}:wait`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

> Body parameter

```json
{
  "timeout": "string"
}
```

<h3 id="automlprojectslocationsoperationswait-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to wait on.|
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
|body|body|[WaitOperationRequest](#schemawaitoperationrequest)|false|none|
|» timeout|body|string(google-duration)|false|The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.|

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

<h3 id="automlprojectslocationsoperationswait-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.datasets.tableSpecs.columnSpecs.list

<a id="opIdautoml.projects.locations.datasets.tableSpecs.columnSpecs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/columnSpecs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/columnSpecs`

Lists column specs in a table spec.

<h3 id="automlprojectslocationsdatasetstablespecscolumnspecslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the table spec to list column specs from.|
|fieldMask|query|string|false|Mask specifying which fields to read.|
|filter|query|string|false|Filter expression, see go/filtering.|
|pageSize|query|integer|false|Requested page size. The server can return fewer results than requested. If unspecified, the server will pick a default size.|
|pageToken|query|string|false|A token identifying a page of results for the server to return. Typically obtained from the ListColumnSpecsResponse.next_page_token field of the previous AutoMl.ListColumnSpecs call.|
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
  "columnSpecs": [
    {
      "dataStats": {
        "arrayStats": {},
        "categoryStats": {
          "topCategoryStats": [
            {
              "count": "string",
              "value": "string"
            }
          ]
        },
        "distinctValueCount": "string",
        "float64Stats": {
          "histogramBuckets": [
            {
              "count": "string",
              "max": 0,
              "min": 0
            }
          ],
          "mean": 0,
          "quantiles": [
            0
          ],
          "standardDeviation": 0
        },
        "nullValueCount": "string",
        "stringStats": {
          "topUnigramStats": [
            {
              "count": "string",
              "value": "string"
            }
          ]
        },
        "structStats": {},
        "timestampStats": {
          "granularStats": {
            "property1": {
              "buckets": {
                "property1": "string",
                "property2": "string"
              }
            },
            "property2": {
              "buckets": {
                "property1": "string",
                "property2": "string"
              }
            }
          }
        },
        "validValueCount": "string"
      },
      "dataType": {
        "listElementType": {},
        "nullable": true,
        "structType": {},
        "timeFormat": "string",
        "typeCode": "TYPE_CODE_UNSPECIFIED"
      },
      "displayName": "string",
      "etag": "string",
      "name": "string",
      "topCorrelatedColumns": [
        {
          "columnSpecId": "string",
          "correlationStats": {
            "cramersV": 0
          }
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="automlprojectslocationsdatasetstablespecscolumnspecslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListColumnSpecsResponse](#schemalistcolumnspecsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.datasets.list

<a id="opIdautoml.projects.locations.datasets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/datasets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/datasets`

Lists datasets in a project.

<h3 id="automlprojectslocationsdatasetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the project from which to list datasets.|
|filter|query|string|false|An expression for filtering the results of the request. * `dataset_metadata` - for existence of the case (e.g. `image_classification_dataset_metadata:*`). Some examples of using the filter are: * `translation_dataset_metadata:*` --> The dataset has `translation_dataset_metadata`.|
|pageSize|query|integer|false|Requested page size. Server may return fewer results than requested. If unspecified, server will pick a default size.|
|pageToken|query|string|false|A token identifying a page of results for the server to return Typically obtained via ListDatasetsResponse.next_page_token of the previous AutoMl.ListDatasets call.|
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
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "etag": "string",
      "exampleCount": 0,
      "imageClassificationDatasetMetadata": {
        "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
      },
      "imageObjectDetectionDatasetMetadata": {},
      "name": "string",
      "tablesDatasetMetadata": {
        "mlUseColumnSpecId": "string",
        "primaryTableSpecId": "string",
        "statsUpdateTime": "string",
        "targetColumnCorrelations": {
          "property1": {
            "cramersV": 0
          },
          "property2": {
            "cramersV": 0
          }
        },
        "targetColumnSpecId": "string",
        "weightColumnSpecId": "string"
      },
      "textClassificationDatasetMetadata": {
        "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
      },
      "textExtractionDatasetMetadata": {},
      "textSentimentDatasetMetadata": {
        "sentimentMax": 0
      },
      "translationDatasetMetadata": {
        "sourceLanguageCode": "string",
        "targetLanguageCode": "string"
      },
      "videoClassificationDatasetMetadata": {},
      "videoObjectTrackingDatasetMetadata": {}
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="automlprojectslocationsdatasetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDatasetsResponse](#schemalistdatasetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.datasets.create

<a id="opIdautoml.projects.locations.datasets.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/datasets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createTime": "string",
    "description": "string",
    "displayName": "string",
    "etag": "string",
    "exampleCount": 0,
    "imageClassificationDatasetMetadata": {
      "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
    },
    "imageObjectDetectionDatasetMetadata": {},
    "name": "string",
    "tablesDatasetMetadata": {
      "mlUseColumnSpecId": "string",
      "primaryTableSpecId": "string",
      "statsUpdateTime": "string",
      "targetColumnCorrelations": {
        "property1": {
          "cramersV": 0
        },
        "property2": {
          "cramersV": 0
        }
      },
      "targetColumnSpecId": "string",
      "weightColumnSpecId": "string"
    },
    "textClassificationDatasetMetadata": {
      "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
    },
    "textExtractionDatasetMetadata": {},
    "textSentimentDatasetMetadata": {
      "sentimentMax": 0
    },
    "translationDatasetMetadata": {
      "sourceLanguageCode": "string",
      "targetLanguageCode": "string"
    },
    "videoClassificationDatasetMetadata": {},
    "videoObjectTrackingDatasetMetadata": {}
  }'
```

`POST /v1beta1/{parent}/datasets`

Creates a dataset.

> Body parameter

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "etag": "string",
  "exampleCount": 0,
  "imageClassificationDatasetMetadata": {
    "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
  },
  "imageObjectDetectionDatasetMetadata": {},
  "name": "string",
  "tablesDatasetMetadata": {
    "mlUseColumnSpecId": "string",
    "primaryTableSpecId": "string",
    "statsUpdateTime": "string",
    "targetColumnCorrelations": {
      "property1": {
        "cramersV": 0
      },
      "property2": {
        "cramersV": 0
      }
    },
    "targetColumnSpecId": "string",
    "weightColumnSpecId": "string"
  },
  "textClassificationDatasetMetadata": {
    "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
  },
  "textExtractionDatasetMetadata": {},
  "textSentimentDatasetMetadata": {
    "sentimentMax": 0
  },
  "translationDatasetMetadata": {
    "sourceLanguageCode": "string",
    "targetLanguageCode": "string"
  },
  "videoClassificationDatasetMetadata": {},
  "videoObjectTrackingDatasetMetadata": {}
}
```

<h3 id="automlprojectslocationsdatasetscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the project to create the dataset for.|
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
|body|body|[Dataset](#schemadataset)|false|none|
|» createTime|body|string(google-datetime)|false|Output only. Timestamp when this dataset was created.|
|» description|body|string|false|User-provided description of the dataset. The description can be up to 25000 characters long.|
|» displayName|body|string|false|Required. The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.|
|» etag|body|string|false|Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.|
|» exampleCount|body|integer(int32)|false|Output only. The number of examples in the dataset.|
|» imageClassificationDatasetMetadata|body|[ImageClassificationDatasetMetadata](#schemaimageclassificationdatasetmetadata)|false|Metadata for a dataset used for image classification.|
|» imageObjectDetectionDatasetMetadata|body|[ImageObjectDetectionDatasetMetadata](#schemaimageobjectdetectiondatasetmetadata)|false|Metadata for a dataset used for image object detection.|
|» name|body|string|false|Output only. The resource name of the dataset. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`|
|» tablesDatasetMetadata|body|[TablesDatasetMetadata](#schematablesdatasetmetadata)|false|Metadata for a dataset used for Tables.|
|» textClassificationDatasetMetadata|body|[TextClassificationDatasetMetadata](#schematextclassificationdatasetmetadata)|false|Metadata for a dataset used for text classification.|
|» textExtractionDatasetMetadata|body|[TextExtractionDatasetMetadata](#schematextextractiondatasetmetadata)|false|Metadata for a dataset used for text extraction.|
|» textSentimentDatasetMetadata|body|[TextSentimentDatasetMetadata](#schematextsentimentdatasetmetadata)|false|Metadata for a dataset used for text sentiment.|
|» translationDatasetMetadata|body|[TranslationDatasetMetadata](#schematranslationdatasetmetadata)|false|Metadata for a dataset used for translation.|
|» videoClassificationDatasetMetadata|body|[VideoClassificationDatasetMetadata](#schemavideoclassificationdatasetmetadata)|false|Metadata for a dataset used for video classification.|
|» videoObjectTrackingDatasetMetadata|body|[VideoObjectTrackingDatasetMetadata](#schemavideoobjecttrackingdatasetmetadata)|false|Metadata for a dataset used for video object tracking.|

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
  "displayName": "string",
  "etag": "string",
  "exampleCount": 0,
  "imageClassificationDatasetMetadata": {
    "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
  },
  "imageObjectDetectionDatasetMetadata": {},
  "name": "string",
  "tablesDatasetMetadata": {
    "mlUseColumnSpecId": "string",
    "primaryTableSpecId": "string",
    "statsUpdateTime": "string",
    "targetColumnCorrelations": {
      "property1": {
        "cramersV": 0
      },
      "property2": {
        "cramersV": 0
      }
    },
    "targetColumnSpecId": "string",
    "weightColumnSpecId": "string"
  },
  "textClassificationDatasetMetadata": {
    "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
  },
  "textExtractionDatasetMetadata": {},
  "textSentimentDatasetMetadata": {
    "sentimentMax": 0
  },
  "translationDatasetMetadata": {
    "sourceLanguageCode": "string",
    "targetLanguageCode": "string"
  },
  "videoClassificationDatasetMetadata": {},
  "videoObjectTrackingDatasetMetadata": {}
}
```

<h3 id="automlprojectslocationsdatasetscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Dataset](#schemadataset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.models.modelEvaluations.list

<a id="opIdautoml.projects.locations.models.modelEvaluations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/modelEvaluations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/modelEvaluations`

Lists model evaluations.

<h3 id="automlprojectslocationsmodelsmodelevaluationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the model to list the model evaluations for. If modelId is set as "-", this will list model evaluations from across all models of the parent location.|
|filter|query|string|false|An expression for filtering the results of the request. * `annotation_spec_id` - for =, != or existence. See example below for the last. Some examples of using the filter are: * `annotation_spec_id!=4` --> The model evaluation was done for annotation spec with ID different than 4. * `NOT annotation_spec_id:*` --> The model evaluation was done for aggregate of all annotation specs.|
|pageSize|query|integer|false|Requested page size.|
|pageToken|query|string|false|A token identifying a page of results for the server to return. Typically obtained via ListModelEvaluationsResponse.next_page_token of the previous AutoMl.ListModelEvaluations call.|
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
  "modelEvaluation": [
    {
      "annotationSpecId": "string",
      "classificationEvaluationMetrics": {
        "annotationSpecId": [
          "string"
        ],
        "auPrc": 0,
        "auRoc": 0,
        "baseAuPrc": 0,
        "confidenceMetricsEntry": [
          {
            "confidenceThreshold": 0,
            "f1Score": 0,
            "f1ScoreAt1": 0,
            "falseNegativeCount": "string",
            "falsePositiveCount": "string",
            "falsePositiveRate": 0,
            "falsePositiveRateAt1": 0,
            "positionThreshold": 0,
            "precision": 0,
            "precisionAt1": 0,
            "recall": 0,
            "recallAt1": 0,
            "trueNegativeCount": "string",
            "truePositiveCount": "string"
          }
        ],
        "confusionMatrix": {
          "annotationSpecId": [
            "string"
          ],
          "displayName": [
            "string"
          ],
          "row": [
            {
              "exampleCount": [
                0
              ]
            }
          ]
        },
        "logLoss": 0
      },
      "createTime": "string",
      "displayName": "string",
      "evaluatedExampleCount": 0,
      "imageObjectDetectionEvaluationMetrics": {
        "boundingBoxMeanAveragePrecision": 0,
        "boundingBoxMetricsEntries": [
          {
            "confidenceMetricsEntries": [
              {
                "confidenceThreshold": 0,
                "f1Score": 0,
                "precision": 0,
                "recall": 0
              }
            ],
            "iouThreshold": 0,
            "meanAveragePrecision": 0
          }
        ],
        "evaluatedBoundingBoxCount": 0
      },
      "name": "string",
      "regressionEvaluationMetrics": {
        "meanAbsoluteError": 0,
        "meanAbsolutePercentageError": 0,
        "rSquared": 0,
        "rootMeanSquaredError": 0,
        "rootMeanSquaredLogError": 0
      },
      "textExtractionEvaluationMetrics": {
        "auPrc": 0,
        "confidenceMetricsEntries": [
          {
            "confidenceThreshold": 0,
            "f1Score": 0,
            "precision": 0,
            "recall": 0
          }
        ]
      },
      "textSentimentEvaluationMetrics": {
        "annotationSpecId": [
          "string"
        ],
        "confusionMatrix": {
          "annotationSpecId": [
            "string"
          ],
          "displayName": [
            "string"
          ],
          "row": [
            {
              "exampleCount": [
                0
              ]
            }
          ]
        },
        "f1Score": 0,
        "linearKappa": 0,
        "meanAbsoluteError": 0,
        "meanSquaredError": 0,
        "precision": 0,
        "quadraticKappa": 0,
        "recall": 0
      },
      "translationEvaluationMetrics": {
        "baseBleuScore": 0,
        "bleuScore": 0
      },
      "videoObjectTrackingEvaluationMetrics": {
        "boundingBoxMeanAveragePrecision": 0,
        "boundingBoxMetricsEntries": [
          {
            "confidenceMetricsEntries": [
              {
                "confidenceThreshold": 0,
                "f1Score": 0,
                "precision": 0,
                "recall": 0
              }
            ],
            "iouThreshold": 0,
            "meanAveragePrecision": 0
          }
        ],
        "evaluatedBoundingBoxCount": 0,
        "evaluatedFrameCount": 0
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="automlprojectslocationsmodelsmodelevaluationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListModelEvaluationsResponse](#schemalistmodelevaluationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.models.list

<a id="opIdautoml.projects.locations.models.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/models \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/models`

Lists models.

<h3 id="automlprojectslocationsmodelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the project, from which to list the models.|
|filter|query|string|false|An expression for filtering the results of the request. * `model_metadata` - for existence of the case (e.g. `video_classification_model_metadata:*`). * `dataset_id` - for = or !=. Some examples of using the filter are: * `image_classification_model_metadata:*` --> The model has `image_classification_model_metadata`. * `dataset_id=5` --> The model was created from a dataset with ID 5.|
|pageSize|query|integer|false|Requested page size.|
|pageToken|query|string|false|A token identifying a page of results for the server to return Typically obtained via ListModelsResponse.next_page_token of the previous AutoMl.ListModels call.|
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
  "model": [
    {
      "createTime": "string",
      "datasetId": "string",
      "deploymentState": "DEPLOYMENT_STATE_UNSPECIFIED",
      "displayName": "string",
      "imageClassificationModelMetadata": {
        "baseModelId": "string",
        "modelType": "string",
        "nodeCount": "string",
        "nodeQps": 0,
        "stopReason": "string",
        "trainBudget": "string",
        "trainCost": "string"
      },
      "imageObjectDetectionModelMetadata": {
        "modelType": "string",
        "nodeCount": "string",
        "nodeQps": 0,
        "stopReason": "string",
        "trainBudgetMilliNodeHours": "string",
        "trainCostMilliNodeHours": "string"
      },
      "name": "string",
      "tablesModelMetadata": {
        "disableEarlyStopping": true,
        "inputFeatureColumnSpecs": [
          {
            "dataStats": {
              "arrayStats": {},
              "categoryStats": {
                "topCategoryStats": [
                  {
                    "count": "string",
                    "value": "string"
                  }
                ]
              },
              "distinctValueCount": "string",
              "float64Stats": {
                "histogramBuckets": [
                  {
                    "count": "string",
                    "max": 0,
                    "min": 0
                  }
                ],
                "mean": 0,
                "quantiles": [
                  0
                ],
                "standardDeviation": 0
              },
              "nullValueCount": "string",
              "stringStats": {
                "topUnigramStats": [
                  {
                    "count": "string",
                    "value": "string"
                  }
                ]
              },
              "structStats": {},
              "timestampStats": {
                "granularStats": {
                  "property1": {
                    "buckets": {
                      "property1": "string",
                      "property2": "string"
                    }
                  },
                  "property2": {
                    "buckets": {
                      "property1": "string",
                      "property2": "string"
                    }
                  }
                }
              },
              "validValueCount": "string"
            },
            "dataType": {
              "listElementType": {},
              "nullable": true,
              "structType": {},
              "timeFormat": "string",
              "typeCode": "TYPE_CODE_UNSPECIFIED"
            },
            "displayName": "string",
            "etag": "string",
            "name": "string",
            "topCorrelatedColumns": [
              {
                "columnSpecId": "string",
                "correlationStats": {
                  "cramersV": 0
                }
              }
            ]
          }
        ],
        "optimizationObjective": "string",
        "optimizationObjectivePrecisionValue": 0,
        "optimizationObjectiveRecallValue": 0,
        "tablesModelColumnInfo": [
          {
            "columnDisplayName": "string",
            "columnSpecName": "string",
            "featureImportance": 0
          }
        ],
        "targetColumnSpec": {
          "dataStats": {
            "arrayStats": {},
            "categoryStats": {
              "topCategoryStats": [
                {
                  "count": "string",
                  "value": "string"
                }
              ]
            },
            "distinctValueCount": "string",
            "float64Stats": {
              "histogramBuckets": [
                {
                  "count": "string",
                  "max": 0,
                  "min": 0
                }
              ],
              "mean": 0,
              "quantiles": [
                0
              ],
              "standardDeviation": 0
            },
            "nullValueCount": "string",
            "stringStats": {
              "topUnigramStats": [
                {
                  "count": "string",
                  "value": "string"
                }
              ]
            },
            "structStats": {},
            "timestampStats": {
              "granularStats": {
                "property1": {
                  "buckets": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "property2": {
                  "buckets": {
                    "property1": "string",
                    "property2": "string"
                  }
                }
              }
            },
            "validValueCount": "string"
          },
          "dataType": {
            "listElementType": {},
            "nullable": true,
            "structType": {},
            "timeFormat": "string",
            "typeCode": "TYPE_CODE_UNSPECIFIED"
          },
          "displayName": "string",
          "etag": "string",
          "name": "string",
          "topCorrelatedColumns": [
            {
              "columnSpecId": "string",
              "correlationStats": {
                "cramersV": 0
              }
            }
          ]
        },
        "trainBudgetMilliNodeHours": "string",
        "trainCostMilliNodeHours": "string"
      },
      "textClassificationModelMetadata": {
        "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
      },
      "textExtractionModelMetadata": {
        "modelHint": "string"
      },
      "textSentimentModelMetadata": {},
      "trainExampleCount": 0,
      "translationModelMetadata": {
        "baseModel": "string",
        "sourceLanguageCode": "string",
        "targetLanguageCode": "string"
      },
      "updateTime": "string",
      "validateExampleCount": 0,
      "videoClassificationModelMetadata": {},
      "videoObjectTrackingModelMetadata": {}
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="automlprojectslocationsmodelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListModelsResponse](#schemalistmodelsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.models.create

<a id="opIdautoml.projects.locations.models.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createTime": "string",
    "datasetId": "string",
    "deploymentState": "DEPLOYMENT_STATE_UNSPECIFIED",
    "displayName": "string",
    "imageClassificationModelMetadata": {
      "baseModelId": "string",
      "modelType": "string",
      "nodeCount": "string",
      "nodeQps": 0,
      "stopReason": "string",
      "trainBudget": "string",
      "trainCost": "string"
    },
    "imageObjectDetectionModelMetadata": {
      "modelType": "string",
      "nodeCount": "string",
      "nodeQps": 0,
      "stopReason": "string",
      "trainBudgetMilliNodeHours": "string",
      "trainCostMilliNodeHours": "string"
    },
    "name": "string",
    "tablesModelMetadata": {
      "disableEarlyStopping": true,
      "inputFeatureColumnSpecs": [
        {
          "dataStats": {
            "arrayStats": {},
            "categoryStats": {
              "topCategoryStats": [
                {
                  "count": "string",
                  "value": "string"
                }
              ]
            },
            "distinctValueCount": "string",
            "float64Stats": {
              "histogramBuckets": [
                {
                  "count": "string",
                  "max": 0,
                  "min": 0
                }
              ],
              "mean": 0,
              "quantiles": [
                0
              ],
              "standardDeviation": 0
            },
            "nullValueCount": "string",
            "stringStats": {
              "topUnigramStats": [
                {
                  "count": "string",
                  "value": "string"
                }
              ]
            },
            "structStats": {},
            "timestampStats": {
              "granularStats": {
                "property1": {
                  "buckets": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "property2": {
                  "buckets": {
                    "property1": "string",
                    "property2": "string"
                  }
                }
              }
            },
            "validValueCount": "string"
          },
          "dataType": {
            "listElementType": {},
            "nullable": true,
            "structType": {},
            "timeFormat": "string",
            "typeCode": "TYPE_CODE_UNSPECIFIED"
          },
          "displayName": "string",
          "etag": "string",
          "name": "string",
          "topCorrelatedColumns": [
            {
              "columnSpecId": "string",
              "correlationStats": {
                "cramersV": 0
              }
            }
          ]
        }
      ],
      "optimizationObjective": "string",
      "optimizationObjectivePrecisionValue": 0,
      "optimizationObjectiveRecallValue": 0,
      "tablesModelColumnInfo": [
        {
          "columnDisplayName": "string",
          "columnSpecName": "string",
          "featureImportance": 0
        }
      ],
      "targetColumnSpec": {
        "dataStats": {
          "arrayStats": {},
          "categoryStats": {
            "topCategoryStats": [
              {
                "count": "string",
                "value": "string"
              }
            ]
          },
          "distinctValueCount": "string",
          "float64Stats": {
            "histogramBuckets": [
              {
                "count": "string",
                "max": 0,
                "min": 0
              }
            ],
            "mean": 0,
            "quantiles": [
              0
            ],
            "standardDeviation": 0
          },
          "nullValueCount": "string",
          "stringStats": {
            "topUnigramStats": [
              {
                "count": "string",
                "value": "string"
              }
            ]
          },
          "structStats": {},
          "timestampStats": {
            "granularStats": {
              "property1": {
                "buckets": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "property2": {
                "buckets": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            }
          },
          "validValueCount": "string"
        },
        "dataType": {
          "listElementType": {},
          "nullable": true,
          "structType": {},
          "timeFormat": "string",
          "typeCode": "TYPE_CODE_UNSPECIFIED"
        },
        "displayName": "string",
        "etag": "string",
        "name": "string",
        "topCorrelatedColumns": [
          {
            "columnSpecId": "string",
            "correlationStats": {
              "cramersV": 0
            }
          }
        ]
      },
      "trainBudgetMilliNodeHours": "string",
      "trainCostMilliNodeHours": "string"
    },
    "textClassificationModelMetadata": {
      "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
    },
    "textExtractionModelMetadata": {
      "modelHint": "string"
    },
    "textSentimentModelMetadata": {},
    "translationModelMetadata": {
      "baseModel": "string",
      "sourceLanguageCode": "string",
      "targetLanguageCode": "string"
    },
    "updateTime": "string",
    "videoClassificationModelMetadata": {},
    "videoObjectTrackingModelMetadata": {}
  }'
```

`POST /v1beta1/{parent}/models`

Creates a model. Returns a Model in the response field when it completes. When you create a model, several model evaluations are created for it: a global evaluation, and one evaluation for each annotation spec.

> Body parameter

```json
{
  "createTime": "string",
  "datasetId": "string",
  "deploymentState": "DEPLOYMENT_STATE_UNSPECIFIED",
  "displayName": "string",
  "imageClassificationModelMetadata": {
    "baseModelId": "string",
    "modelType": "string",
    "nodeCount": "string",
    "nodeQps": 0,
    "stopReason": "string",
    "trainBudget": "string",
    "trainCost": "string"
  },
  "imageObjectDetectionModelMetadata": {
    "modelType": "string",
    "nodeCount": "string",
    "nodeQps": 0,
    "stopReason": "string",
    "trainBudgetMilliNodeHours": "string",
    "trainCostMilliNodeHours": "string"
  },
  "name": "string",
  "tablesModelMetadata": {
    "disableEarlyStopping": true,
    "inputFeatureColumnSpecs": [
      {
        "dataStats": {
          "arrayStats": {},
          "categoryStats": {
            "topCategoryStats": [
              {
                "count": "string",
                "value": "string"
              }
            ]
          },
          "distinctValueCount": "string",
          "float64Stats": {
            "histogramBuckets": [
              {
                "count": "string",
                "max": 0,
                "min": 0
              }
            ],
            "mean": 0,
            "quantiles": [
              0
            ],
            "standardDeviation": 0
          },
          "nullValueCount": "string",
          "stringStats": {
            "topUnigramStats": [
              {
                "count": "string",
                "value": "string"
              }
            ]
          },
          "structStats": {},
          "timestampStats": {
            "granularStats": {
              "property1": {
                "buckets": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "property2": {
                "buckets": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            }
          },
          "validValueCount": "string"
        },
        "dataType": {
          "listElementType": {},
          "nullable": true,
          "structType": {},
          "timeFormat": "string",
          "typeCode": "TYPE_CODE_UNSPECIFIED"
        },
        "displayName": "string",
        "etag": "string",
        "name": "string",
        "topCorrelatedColumns": [
          {
            "columnSpecId": "string",
            "correlationStats": {
              "cramersV": 0
            }
          }
        ]
      }
    ],
    "optimizationObjective": "string",
    "optimizationObjectivePrecisionValue": 0,
    "optimizationObjectiveRecallValue": 0,
    "tablesModelColumnInfo": [
      {
        "columnDisplayName": "string",
        "columnSpecName": "string",
        "featureImportance": 0
      }
    ],
    "targetColumnSpec": {
      "dataStats": {
        "arrayStats": {},
        "categoryStats": {
          "topCategoryStats": [
            {
              "count": "string",
              "value": "string"
            }
          ]
        },
        "distinctValueCount": "string",
        "float64Stats": {
          "histogramBuckets": [
            {
              "count": "string",
              "max": 0,
              "min": 0
            }
          ],
          "mean": 0,
          "quantiles": [
            0
          ],
          "standardDeviation": 0
        },
        "nullValueCount": "string",
        "stringStats": {
          "topUnigramStats": [
            {
              "count": "string",
              "value": "string"
            }
          ]
        },
        "structStats": {},
        "timestampStats": {
          "granularStats": {
            "property1": {
              "buckets": {
                "property1": "string",
                "property2": "string"
              }
            },
            "property2": {
              "buckets": {
                "property1": "string",
                "property2": "string"
              }
            }
          }
        },
        "validValueCount": "string"
      },
      "dataType": {
        "listElementType": {},
        "nullable": true,
        "structType": {},
        "timeFormat": "string",
        "typeCode": "TYPE_CODE_UNSPECIFIED"
      },
      "displayName": "string",
      "etag": "string",
      "name": "string",
      "topCorrelatedColumns": [
        {
          "columnSpecId": "string",
          "correlationStats": {
            "cramersV": 0
          }
        }
      ]
    },
    "trainBudgetMilliNodeHours": "string",
    "trainCostMilliNodeHours": "string"
  },
  "textClassificationModelMetadata": {
    "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
  },
  "textExtractionModelMetadata": {
    "modelHint": "string"
  },
  "textSentimentModelMetadata": {},
  "translationModelMetadata": {
    "baseModel": "string",
    "sourceLanguageCode": "string",
    "targetLanguageCode": "string"
  },
  "updateTime": "string",
  "videoClassificationModelMetadata": {},
  "videoObjectTrackingModelMetadata": {}
}
```

<h3 id="automlprojectslocationsmodelscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the parent project where the model is being created.|
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
|» createTime|body|string(google-datetime)|false|Output only. Timestamp when the model training finished and can be used for prediction.|
|» datasetId|body|string|false|Required. The resource ID of the dataset used to create the model. The dataset must come from the same ancestor project and location.|
|» deploymentState|body|string|false|Output only. Deployment state of the model. A model can only serve prediction requests after it gets deployed.|
|» displayName|body|string|false|Required. The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. It must start with a letter.|
|» imageClassificationModelMetadata|body|[ImageClassificationModelMetadata](#schemaimageclassificationmodelmetadata)|false|Metadata for image classification models.|
|» imageObjectDetectionModelMetadata|body|[ImageObjectDetectionModelMetadata](#schemaimageobjectdetectionmodelmetadata)|false|Metadata for image object detection models.|
|» name|body|string|false|Output only. Resource name of the model. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}`|
|» tablesModelMetadata|body|[TablesModelMetadata](#schematablesmodelmetadata)|false|Metadata for Tables models.|
|» textClassificationModelMetadata|body|[TextClassificationModelMetadata](#schematextclassificationmodelmetadata)|false|Metadata for text classification models.|
|» textExtractionModelMetadata|body|[TextExtractionModelMetadata](#schematextextractionmodelmetadata)|false|Metadata for text extraction models.|
|» textSentimentModelMetadata|body|[TextSentimentModelMetadata](#schematextsentimentmodelmetadata)|false|Metadata for text sentiment models.|
|» translationModelMetadata|body|[TranslationModelMetadata](#schematranslationmodelmetadata)|false|Metadata for translation models.|
|» updateTime|body|string(google-datetime)|false|Output only. Timestamp when this model was last updated.|
|» videoClassificationModelMetadata|body|[VideoClassificationModelMetadata](#schemavideoclassificationmodelmetadata)|false|Metadata for video classification models.|
|» videoObjectTrackingModelMetadata|body|[VideoObjectTrackingModelMetadata](#schemavideoobjecttrackingmodelmetadata)|false|Metadata for video object tracking models.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» deploymentState|DEPLOYMENT_STATE_UNSPECIFIED|
|» deploymentState|DEPLOYED|
|» deploymentState|UNDEPLOYED|

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

<h3 id="automlprojectslocationsmodelscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.datasets.tableSpecs.list

<a id="opIdautoml.projects.locations.datasets.tableSpecs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/tableSpecs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/tableSpecs`

Lists table specs in a dataset.

<h3 id="automlprojectslocationsdatasetstablespecslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the dataset to list table specs from.|
|fieldMask|query|string|false|Mask specifying which fields to read.|
|filter|query|string|false|Filter expression, see go/filtering.|
|pageSize|query|integer|false|Requested page size. The server can return fewer results than requested. If unspecified, the server will pick a default size.|
|pageToken|query|string|false|A token identifying a page of results for the server to return. Typically obtained from the ListTableSpecsResponse.next_page_token field of the previous AutoMl.ListTableSpecs call.|
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
  "tableSpecs": [
    {
      "columnCount": "string",
      "etag": "string",
      "inputConfigs": [
        {
          "bigquerySource": {
            "inputUri": "string"
          },
          "gcsSource": {
            "inputUris": [
              "string"
            ]
          },
          "params": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "name": "string",
      "rowCount": "string",
      "timeColumnSpecId": "string",
      "validRowCount": "string"
    }
  ]
}
```

<h3 id="automlprojectslocationsdatasetstablespecslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListTableSpecsResponse](#schemalisttablespecsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.models.getIamPolicy

<a id="opIdautoml.projects.locations.models.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:getIamPolicy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{resource}:getIamPolicy`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

<h3 id="automlprojectslocationsmodelsgetiampolicy-parameters">Parameters</h3>

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

<h3 id="automlprojectslocationsmodelsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.models.setIamPolicy

<a id="opIdautoml.projects.locations.models.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setIamPolicy \
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

`POST /v1beta1/{resource}:setIamPolicy`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

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

<h3 id="automlprojectslocationsmodelssetiampolicy-parameters">Parameters</h3>

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

<h3 id="automlprojectslocationsmodelssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## automl.projects.locations.testIamPermissions

<a id="opIdautoml.projects.locations.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:testIamPermissions \
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

`POST /v1beta1/{resource}:testIamPermissions`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="automlprojectslocationstestiampermissions-parameters">Parameters</h3>

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

<h3 id="automlprojectslocationstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_AnnotationPayload">AnnotationPayload</h2>
<!-- backwards compatibility -->
<a id="schemaannotationpayload"></a>
<a id="schema_AnnotationPayload"></a>
<a id="tocSannotationpayload"></a>
<a id="tocsannotationpayload"></a>

```json
{
  "annotationSpecId": "string",
  "classification": {
    "score": 0
  },
  "displayName": "string",
  "imageObjectDetection": {
    "boundingBox": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "score": 0
  },
  "tables": {
    "baselineScore": 0,
    "predictionInterval": {
      "end": 0,
      "start": 0
    },
    "score": 0,
    "tablesModelColumnInfo": [
      {
        "columnDisplayName": "string",
        "columnSpecName": "string",
        "featureImportance": 0
      }
    ],
    "value": null
  },
  "textExtraction": {
    "score": 0,
    "textSegment": {
      "content": "string",
      "endOffset": "string",
      "startOffset": "string"
    }
  },
  "textSentiment": {
    "sentiment": 0
  },
  "translation": {
    "translatedContent": {
      "content": "string",
      "contentUri": "string",
      "mimeType": "string"
    }
  },
  "videoClassification": {
    "classificationAnnotation": {
      "score": 0
    },
    "timeSegment": {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    },
    "type": "string"
  },
  "videoObjectTracking": {
    "boundingBox": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "instanceId": "string",
    "score": 0,
    "timeOffset": "string"
  }
}
```

Contains annotation information that is relevant to AutoML.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecId|string|false|none|Output only . The resource ID of the annotation spec that this annotation pertains to. The annotation spec comes from either an ancestor dataset, or the dataset that was used to train the model in use.|
|classification|[ClassificationAnnotation](#schemaclassificationannotation)|false|none|Annotation details for content or image classification.|
|displayName|string|false|none|Output only. The value of display_name when the model was trained. Because this field returns a value at model training time, for different models trained using the same dataset, the returned value could be different as model owner could update the `display_name` between any two model training.|
|imageObjectDetection|[ImageObjectDetectionAnnotation](#schemaimageobjectdetectionannotation)|false|none|Annotation details for image object detection.|
|tables|[TablesAnnotation](#schematablesannotation)|false|none|Annotation details for Tables.|
|textExtraction|[TextExtractionAnnotation](#schematextextractionannotation)|false|none|Annotation details for text extraction.|
|textSentiment|[TextSentimentAnnotation](#schematextsentimentannotation)|false|none|Annotation details for text sentiment.|
|translation|[TranslationAnnotation](#schematranslationannotation)|false|none|Annotation details for translation.|
|videoClassification|[VideoClassificationAnnotation](#schemavideoclassificationannotation)|false|none|Annotation details for video classification. Returned for Video Classification predictions.|
|videoObjectTracking|[VideoObjectTrackingAnnotation](#schemavideoobjecttrackingannotation)|false|none|Annotation details for video object tracking.|

<h2 id="tocS_AnnotationSpec">AnnotationSpec</h2>
<!-- backwards compatibility -->
<a id="schemaannotationspec"></a>
<a id="schema_AnnotationSpec"></a>
<a id="tocSannotationspec"></a>
<a id="tocsannotationspec"></a>

```json
{
  "displayName": "string",
  "exampleCount": 0,
  "name": "string"
}
```

A definition of an annotation spec.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Required. The name of the annotation spec to show in the interface. The name can be up to 32 characters long and must match the regexp `[a-zA-Z0-9_]+`.|
|exampleCount|integer(int32)|false|none|Output only. The number of examples in the parent dataset labeled by the annotation spec.|
|name|string|false|none|Output only. Resource name of the annotation spec. Form: 'projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationSpecs/{annotation_spec_id}'|

<h2 id="tocS_ArrayStats">ArrayStats</h2>
<!-- backwards compatibility -->
<a id="schemaarraystats"></a>
<a id="schema_ArrayStats"></a>
<a id="tocSarraystats"></a>
<a id="tocsarraystats"></a>

```json
{
  "memberStats": {
    "arrayStats": {},
    "categoryStats": {
      "topCategoryStats": [
        {
          "count": "string",
          "value": "string"
        }
      ]
    },
    "distinctValueCount": "string",
    "float64Stats": {
      "histogramBuckets": [
        {
          "count": "string",
          "max": 0,
          "min": 0
        }
      ],
      "mean": 0,
      "quantiles": [
        0
      ],
      "standardDeviation": 0
    },
    "nullValueCount": "string",
    "stringStats": {
      "topUnigramStats": [
        {
          "count": "string",
          "value": "string"
        }
      ]
    },
    "structStats": {},
    "timestampStats": {
      "granularStats": {
        "property1": {
          "buckets": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "buckets": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    },
    "validValueCount": "string"
  }
}
```

The data statistics of a series of ARRAY values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberStats|[DataStats](#schemadatastats)|false|none|Stats of all the values of all arrays, as if they were a single long series of data. The type depends on the element type of the array.|

<h2 id="tocS_BatchPredictInputConfig">BatchPredictInputConfig</h2>
<!-- backwards compatibility -->
<a id="schemabatchpredictinputconfig"></a>
<a id="schema_BatchPredictInputConfig"></a>
<a id="tocSbatchpredictinputconfig"></a>
<a id="tocsbatchpredictinputconfig"></a>

```json
{
  "bigquerySource": {
    "inputUri": "string"
  },
  "gcsSource": {
    "inputUris": [
      "string"
    ]
  }
}
```

Input configuration for BatchPredict Action. The format of input depends on the ML problem of the model used for prediction. As input source the gcs_source is expected, unless specified otherwise. The formats are represented in EBNF with commas being literal and with non-terminal symbols defined near the end of this comment. The formats are: * For Image Classification: CSV file(s) with each line having just a single column: GCS_FILE_PATH which leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in the Batch predict output. Three sample rows: gs://folder/image1.jpeg gs://folder/image2.gif gs://folder/image3.png * For Image Object Detection: CSV file(s) with each line having just a single column: GCS_FILE_PATH which leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. This path is treated as the ID in the Batch predict output. Three sample rows: gs://folder/image1.jpeg gs://folder/image2.gif gs://folder/image3.png * For Video Classification: CSV file(s) with each line in format: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Three sample rows: gs://folder/video1.mp4,10,40 gs://folder/video1.mp4,20,60 gs://folder/vid2.mov,0,inf * For Video Object Tracking: CSV file(s) with each line in format: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END GCS_FILE_PATH leads to video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Three sample rows: gs://folder/video1.mp4,10,240 gs://folder/video1.mp4,300,360 gs://folder/vid2.mov,0,inf * For Text Classification: CSV file(s) with each line having just a single column: GCS_FILE_PATH | TEXT_SNIPPET Any given text file can have size upto 128kB. Any given text snippet content must have 60,000 characters or less. Three sample rows: gs://folder/text1.txt "Some text content to predict" gs://folder/text3.pdf Supported file extensions: .txt, .pdf * For Text Sentiment: CSV file(s) with each line having just a single column: GCS_FILE_PATH | TEXT_SNIPPET Any given text file can have size upto 128kB. Any given text snippet content must have 500 characters or less. Three sample rows: gs://folder/text1.txt "Some text content to predict" gs://folder/text3.pdf Supported file extensions: .txt, .pdf * For Text Extraction .JSONL (i.e. JSON Lines) file(s) which either provide text in-line or as documents (for a single BatchPredict call only one of the these formats may be used). The in-line .JSONL file(s) contain per line a proto that wraps a temporary user-assigned TextSnippet ID (string up to 2000 characters long) called "id", a TextSnippet proto (in json representation) and zero or more TextFeature protos. Any given text snippet content must have 30,000 characters or less, and also be UTF-8 NFC encoded (ASCII already is). The IDs provided should be unique. The document .JSONL file(s) contain, per line, a proto that wraps a Document proto with input_config set. Only PDF documents are supported now, and each document must be up to 2MB large. Any given .JSONL file must be 100MB or smaller, and no more than 20 files may be given. Sample in-line JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \n): { "id": "my_first_id", "text_snippet": { "content": "dog car cat"}, "text_features": [ { "text_segment": {"start_offset": 4, "end_offset": 6}, "structural_type": PARAGRAPH, "bounding_poly": { "normalized_vertices": [ {"x": 0.1, "y": 0.1}, {"x": 0.1, "y": 0.3}, {"x": 0.3, "y": 0.3}, {"x": 0.3, "y": 0.1}, ] }, } ], }\n { "id": "2", "text_snippet": { "content": "An elaborate content", "mime_type": "text/plain" } } Sample document JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \n).: { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ] } } } }\n { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ] } } } } * For Tables: Either gcs_source or bigquery_source. GCS case: CSV file(s), each by itself 10GB or smaller and total size must be 100GB or smaller, where first file must have a header containing column names. If the first row of a subsequent file is the same as the header, then it is also treated as a header. All other rows contain values for the corresponding columns. The column names must contain the model's input_feature_column_specs' display_name-s (order doesn't matter). The columns corresponding to the model's input feature column specs must contain values compatible with the column spec's data types. Prediction on all the rows, i.e. the CSV lines, will be attempted. For FORECASTING prediction_type: all columns having TIME_SERIES_AVAILABLE_PAST_ONLY type will be ignored. First three sample rows of a CSV file: "First Name","Last Name","Dob","Addresses" "John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]" "Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]} BigQuery case: An URI of a BigQuery table. The user data size of the BigQuery table must be 100GB or smaller. The column names must contain the model's input_feature_column_specs' display_name-s (order doesn't matter). The columns corresponding to the model's input feature column specs must contain values compatible with the column spec's data types. Prediction on all the rows of the table will be attempted. For FORECASTING prediction_type: all columns having TIME_SERIES_AVAILABLE_PAST_ONLY type will be ignored. Definitions: GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/video.avi". TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within double quotes ("") TIME_SEGMENT_START = TIME_OFFSET Expresses a beginning, inclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_SEGMENT_END = TIME_OFFSET Expresses an end, exclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_OFFSET = A number of seconds as measured from the start of an example (e.g. video). Fractions are allowed, up to a microsecond precision. "inf" is allowed and it means the end of the example. Errors: If any of the provided CSV files can't be parsed or if more than certain percent of CSV rows cannot be processed then the operation fails and prediction does not happen. Regardless of overall success or failure the per-row failures, up to a certain count cap, will be listed in Operation.metadata.partial_failures.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigquerySource|[BigQuerySource](#schemabigquerysource)|false|none|The BigQuery location for the input content.|
|gcsSource|[GcsSource](#schemagcssource)|false|none|The Google Cloud Storage location for the input content.|

<h2 id="tocS_BatchPredictOperationMetadata">BatchPredictOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemabatchpredictoperationmetadata"></a>
<a id="schema_BatchPredictOperationMetadata"></a>
<a id="tocSbatchpredictoperationmetadata"></a>
<a id="tocsbatchpredictoperationmetadata"></a>

```json
{
  "inputConfig": {
    "bigquerySource": {
      "inputUri": "string"
    },
    "gcsSource": {
      "inputUris": [
        "string"
      ]
    }
  },
  "outputInfo": {
    "bigqueryOutputDataset": "string",
    "gcsOutputDirectory": "string"
  }
}
```

Details of BatchPredict operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputConfig|[BatchPredictInputConfig](#schemabatchpredictinputconfig)|false|none|Output only. The input config that was given upon starting this batch predict operation.|
|outputInfo|[BatchPredictOutputInfo](#schemabatchpredictoutputinfo)|false|none|Output only. Information further describing this batch predict's output.|

<h2 id="tocS_BatchPredictOutputConfig">BatchPredictOutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemabatchpredictoutputconfig"></a>
<a id="schema_BatchPredictOutputConfig"></a>
<a id="tocSbatchpredictoutputconfig"></a>
<a id="tocsbatchpredictoutputconfig"></a>

```json
{
  "bigqueryDestination": {
    "outputUri": "string"
  },
  "gcsDestination": {
    "outputUriPrefix": "string"
  }
}
```

Output configuration for BatchPredict Action. As destination the gcs_destination must be set unless specified otherwise for a domain. If gcs_destination is set then in the given directory a new directory is created. Its name will be "prediction--", where timestamp is in YYYY-MM-DDThh:mm:ss.sssZ ISO-8601 format. The contents of it depends on the ML problem the predictions are made for. * For Image Classification: In the created directory files `image_classification_1.jsonl`, `image_classification_2.jsonl`,...,`image_classification_N.jsonl` will be created, where N may be 1, and depends on the total number of the successfully predicted images and annotations. A single image will be listed only once with all its annotations, and its annotations will never be split across files. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps image's "ID" : "" followed by a list of zero or more AnnotationPayload protos (called annotations), which have classification detail populated. If prediction for any image failed (partially or completely), then an additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps the same "ID" : "" but here followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`fields. * For Image Object Detection: In the created directory files `image_object_detection_1.jsonl`, `image_object_detection_2.jsonl`,...,`image_object_detection_N.jsonl` will be created, where N may be 1, and depends on the total number of the successfully predicted images and annotations. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps image's "ID" : "" followed by a list of zero or more AnnotationPayload protos (called annotations), which have image_object_detection detail populated. A single image will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any image failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps the same "ID" : "" but here followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`fields. * For Video Classification: In the created directory a video_classification.csv file, and a .JSON file per each video classification requested in the input (i.e. each line in given CSV(s)), will be created. The format of video_classification.csv is: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END,JSON_FILE_NAME,STATUS where: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END = matches 1 to 1 the prediction input lines (i.e. video_classification.csv has precisely the same number of lines as the prediction input had.) JSON_FILE_NAME = Name of .JSON file in the output directory, which contains prediction responses for the video time segment. STATUS = "OK" if prediction completed successfully, or an error code with message otherwise. If STATUS is not "OK" then the .JSON file for that line may not exist or be empty. Each .JSON file, assuming STATUS is "OK", will contain a list of AnnotationPayload protos in JSON format, which are the predictions for the video time segment the file is assigned to in the video_classification.csv. All AnnotationPayload protos will have video_classification field set, and will be sorted by video_classification.type field (note that the returned types are governed by `classifaction_types` parameter in PredictService.BatchPredictRequest.params). * For Video Object Tracking: In the created directory a video_object_tracking.csv file will be created, and multiple files video_object_trackinng_1.json, video_object_trackinng_2.json,..., video_object_trackinng_N.json, where N is the number of requests in the input (i.e. the number of lines in given CSV(s)). The format of video_object_tracking.csv is: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END,JSON_FILE_NAME,STATUS where: GCS_FILE_PATH,TIME_SEGMENT_START,TIME_SEGMENT_END = matches 1 to 1 the prediction input lines (i.e. video_object_tracking.csv has precisely the same number of lines as the prediction input had.) JSON_FILE_NAME = Name of .JSON file in the output directory, which contains prediction responses for the video time segment. STATUS = "OK" if prediction completed successfully, or an error code with message otherwise. If STATUS is not "OK" then the .JSON file for that line may not exist or be empty. Each .JSON file, assuming STATUS is "OK", will contain a list of AnnotationPayload protos in JSON format, which are the predictions for each frame of the video time segment the file is assigned to in video_object_tracking.csv. All AnnotationPayload protos will have video_object_tracking field set. * For Text Classification: In the created directory files `text_classification_1.jsonl`, `text_classification_2.jsonl`,...,`text_classification_N.jsonl` will be created, where N may be 1, and depends on the total number of inputs and annotations found. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps input text snippet or input text file and a list of zero or more AnnotationPayload protos (called annotations), which have classification detail populated. A single text snippet or file will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any text snippet or file failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps input text snippet or input text file followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`. * For Text Sentiment: In the created directory files `text_sentiment_1.jsonl`, `text_sentiment_2.jsonl`,...,`text_sentiment_N.jsonl` will be created, where N may be 1, and depends on the total number of inputs and annotations found. Each .JSONL file will contain, per line, a JSON representation of a proto that wraps input text snippet or input text file and a list of zero or more AnnotationPayload protos (called annotations), which have text_sentiment detail populated. A single text snippet or file will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any text snippet or file failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps input text snippet or input text file followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`. * For Text Extraction: In the created directory files `text_extraction_1.jsonl`, `text_extraction_2.jsonl`,...,`text_extraction_N.jsonl` will be created, where N may be 1, and depends on the total number of inputs and annotations found. The contents of these .JSONL file(s) depend on whether the input used inline text, or documents. If input was inline, then each .JSONL file will contain, per line, a JSON representation of a proto that wraps given in request text snippet's "id" (if specified), followed by input text snippet, and a list of zero or more AnnotationPayload protos (called annotations), which have text_extraction detail populated. A single text snippet will be listed only once with all its annotations, and its annotations will never be split across files. If input used documents, then each .JSONL file will contain, per line, a JSON representation of a proto that wraps given in request document proto, followed by its OCR-ed representation in the form of a text snippet, finally followed by a list of zero or more AnnotationPayload protos (called annotations), which have text_extraction detail populated and refer, via their indices, to the OCR-ed text snippet. A single document (and its text snippet) will be listed only once with all its annotations, and its annotations will never be split across files. If prediction for any text snippet failed (partially or completely), then additional `errors_1.jsonl`, `errors_2.jsonl`,..., `errors_N.jsonl` files will be created (N depends on total number of failed predictions). These files will have a JSON representation of a proto that wraps either the "id" : "" (in case of inline) or the document proto (in case of document) but here followed by exactly one [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) containing only `code` and `message`. * For Tables: Output depends on whether gcs_destination or bigquery_destination is set (either is allowed). GCS case: In the created directory files `tables_1.csv`, `tables_2.csv`,..., `tables_N.csv` will be created, where N may be 1, and depends on the total number of the successfully predicted rows. For all CLASSIFICATION prediction_type-s: Each .csv file will contain a header, listing all columns' display_name-s given on input followed by M target column names in the format of "__score" where M is the number of distinct target values, i.e. number of distinct values in the target column of the table used to train the model. Subsequent lines will contain the respective values of successfully predicted rows, with the last, i.e. the target, columns having the corresponding prediction scores. For REGRESSION and FORECASTING prediction_type-s: Each .csv file will contain a header, listing all columns' display_name-s given on input followed by the predicted target column with name in the format of "predicted_" Subsequent lines will contain the respective values of successfully predicted rows, with the last, i.e. the target, column having the predicted target value. If prediction for any rows failed, then an additional `errors_1.csv`, `errors_2.csv`,..., `errors_N.csv` will be created (N depends on total number of failed rows). These files will have analogous format as `tables_*.csv`, but always with a single target column having [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) represented as a JSON string, and containing only `code` and `message`. BigQuery case: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `prediction__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In the dataset two tables will be created, `predictions`, and `errors`. The `predictions` table's column names will be the input columns' display_name-s followed by the target column with name in the format of "predicted_" The input feature columns will contain the respective values of successfully predicted rows, with the target column having an ARRAY of AnnotationPayloads, represented as STRUCT-s, containing TablesAnnotation. The `errors` table contains rows for which the prediction has failed, it has analogous input columns while the target column name is in the format of "errors_", and as a value has [`google.rpc.Status`](https: //github.com/googleapis/googleapis/blob/master/google/rpc/status.proto) represented as a STRUCT, and containing only `code` and `message`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryDestination|[BigQueryDestination](#schemabigquerydestination)|false|none|The BigQuery location where the output is to be written to.|
|gcsDestination|[GcsDestination](#schemagcsdestination)|false|none|The Google Cloud Storage location of the directory where the output is to be written to.|

<h2 id="tocS_BatchPredictOutputInfo">BatchPredictOutputInfo</h2>
<!-- backwards compatibility -->
<a id="schemabatchpredictoutputinfo"></a>
<a id="schema_BatchPredictOutputInfo"></a>
<a id="tocSbatchpredictoutputinfo"></a>
<a id="tocsbatchpredictoutputinfo"></a>

```json
{
  "bigqueryOutputDataset": "string",
  "gcsOutputDirectory": "string"
}
```

Further describes this batch predict's output. Supplements BatchPredictOutputConfig.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryOutputDataset|string|false|none|The path of the BigQuery dataset created, in bq://projectId.bqDatasetId format, into which the prediction output is written.|
|gcsOutputDirectory|string|false|none|The full path of the Google Cloud Storage directory created, into which the prediction output is written.|

<h2 id="tocS_BatchPredictRequest">BatchPredictRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchpredictrequest"></a>
<a id="schema_BatchPredictRequest"></a>
<a id="tocSbatchpredictrequest"></a>
<a id="tocsbatchpredictrequest"></a>

```json
{
  "inputConfig": {
    "bigquerySource": {
      "inputUri": "string"
    },
    "gcsSource": {
      "inputUris": [
        "string"
      ]
    }
  },
  "outputConfig": {
    "bigqueryDestination": {
      "outputUri": "string"
    },
    "gcsDestination": {
      "outputUriPrefix": "string"
    }
  },
  "params": {
    "property1": "string",
    "property2": "string"
  }
}
```

Request message for PredictionService.BatchPredict.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputConfig|[BatchPredictInputConfig](#schemabatchpredictinputconfig)|false|none|Required. The input configuration for batch prediction.|
|outputConfig|[BatchPredictOutputConfig](#schemabatchpredictoutputconfig)|false|none|Required. The Configuration specifying where output predictions should be written.|
|params|object|false|none|Required. Additional domain-specific parameters for the predictions, any string must be up to 25000 characters long. * For Text Classification: `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for a text snippet, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Classification: `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for an image, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Object Detection: `score_threshold` - (float) When Model detects objects on the image, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. `max_bounding_box_count` - (int64) No more than this number of bounding boxes will be produced per image. Default is 100, the requested value may be limited by server. * For Video Classification : `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for a video, it will only produce results that have at least this confidence score. The default is 0.5. `segment_classification` - (boolean) Set to true to request segment-level classification. AutoML Video Intelligence returns labels and their confidence scores for the entire segment of the video that user specified in the request configuration. The default is "true". `shot_classification` - (boolean) Set to true to request shot-level classification. AutoML Video Intelligence determines the boundaries for each camera shot in the entire segment of the video that user specified in the request configuration. AutoML Video Intelligence then returns labels and their confidence scores for each detected shot, along with the start and end time of the shot. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. The default is "false". `1s_interval_classification` - (boolean) Set to true to request classification for a video at one-second intervals. AutoML Video Intelligence returns labels and their confidence scores for each second of the entire segment of the video that user specified in the request configuration. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. The default is "false". * For Tables: feature_importance - (boolean) Whether feature importance should be populated in the returned TablesAnnotations. The default is false. * For Video Object Tracking: `score_threshold` - (float) When Model detects objects on video frames, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. `max_bounding_box_count` - (int64) No more than this number of bounding boxes will be returned per frame. Default is 100, the requested value may be limited by server. `min_bounding_box_size` - (float) Only bounding boxes with shortest edge at least that long as a relative value of video frame size will be returned. Value in 0 to 1 range. Default is 0.|

<h2 id="tocS_BatchPredictResult">BatchPredictResult</h2>
<!-- backwards compatibility -->
<a id="schemabatchpredictresult"></a>
<a id="schema_BatchPredictResult"></a>
<a id="tocSbatchpredictresult"></a>
<a id="tocsbatchpredictresult"></a>

```json
{
  "metadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

Result of the Batch Predict. This message is returned in response of the operation returned by the PredictionService.BatchPredict.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Additional domain-specific prediction response metadata. * For Image Object Detection: `max_bounding_box_count` - (int64) At most that many bounding boxes per image could have been returned. * For Video Object Tracking: `max_bounding_box_count` - (int64) At most that many bounding boxes per frame could have been returned.|

<h2 id="tocS_BigQueryDestination">BigQueryDestination</h2>
<!-- backwards compatibility -->
<a id="schemabigquerydestination"></a>
<a id="schema_BigQueryDestination"></a>
<a id="tocSbigquerydestination"></a>
<a id="tocsbigquerydestination"></a>

```json
{
  "outputUri": "string"
}
```

The BigQuery location for the output content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputUri|string|false|none|Required. BigQuery URI to a project, up to 2000 characters long. Accepted forms: * BigQuery path e.g. bq://projectId|

<h2 id="tocS_BigQuerySource">BigQuerySource</h2>
<!-- backwards compatibility -->
<a id="schemabigquerysource"></a>
<a id="schema_BigQuerySource"></a>
<a id="tocSbigquerysource"></a>
<a id="tocsbigquerysource"></a>

```json
{
  "inputUri": "string"
}
```

The BigQuery location for the input content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputUri|string|false|none|Required. BigQuery URI to a table, up to 2000 characters long. Accepted forms: * BigQuery path e.g. bq://projectId.bqDatasetId.bqTableId|

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
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

<h2 id="tocS_BoundingBoxMetricsEntry">BoundingBoxMetricsEntry</h2>
<!-- backwards compatibility -->
<a id="schemaboundingboxmetricsentry"></a>
<a id="schema_BoundingBoxMetricsEntry"></a>
<a id="tocSboundingboxmetricsentry"></a>
<a id="tocsboundingboxmetricsentry"></a>

```json
{
  "confidenceMetricsEntries": [
    {
      "confidenceThreshold": 0,
      "f1Score": 0,
      "precision": 0,
      "recall": 0
    }
  ],
  "iouThreshold": 0,
  "meanAveragePrecision": 0
}
```

Bounding box matching model metrics for a single intersection-over-union threshold and multiple label match confidence thresholds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidenceMetricsEntries|[[BoundingBoxMetricsEntryConfidenceMetricsEntry](#schemaboundingboxmetricsentryconfidencemetricsentry)]|false|none|Output only. Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. Precision-recall curve is derived from them.|
|iouThreshold|number(float)|false|none|Output only. The intersection-over-union threshold value used to compute this metrics entry.|
|meanAveragePrecision|number(float)|false|none|Output only. The mean average precision, most often close to au_prc.|

<h2 id="tocS_BoundingBoxMetricsEntryConfidenceMetricsEntry">BoundingBoxMetricsEntryConfidenceMetricsEntry</h2>
<!-- backwards compatibility -->
<a id="schemaboundingboxmetricsentryconfidencemetricsentry"></a>
<a id="schema_BoundingBoxMetricsEntryConfidenceMetricsEntry"></a>
<a id="tocSboundingboxmetricsentryconfidencemetricsentry"></a>
<a id="tocsboundingboxmetricsentryconfidencemetricsentry"></a>

```json
{
  "confidenceThreshold": 0,
  "f1Score": 0,
  "precision": 0,
  "recall": 0
}
```

Metrics for a single confidence threshold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidenceThreshold|number(float)|false|none|Output only. The confidence threshold value used to compute the metrics.|
|f1Score|number(float)|false|none|Output only. The harmonic mean of recall and precision.|
|precision|number(float)|false|none|Output only. Precision under the given confidence threshold.|
|recall|number(float)|false|none|Output only. Recall under the given confidence threshold.|

<h2 id="tocS_BoundingPoly">BoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemaboundingpoly"></a>
<a id="schema_BoundingPoly"></a>
<a id="tocSboundingpoly"></a>
<a id="tocsboundingpoly"></a>

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

A bounding polygon of a detected object on a plane. On output both vertices and normalized_vertices are provided. The polygon is formed by connecting vertices in the order they are listed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedVertices|[[NormalizedVertex](#schemanormalizedvertex)]|false|none|Output only . The bounding polygon normalized vertices.|

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

<h2 id="tocS_CategoryStats">CategoryStats</h2>
<!-- backwards compatibility -->
<a id="schemacategorystats"></a>
<a id="schema_CategoryStats"></a>
<a id="tocScategorystats"></a>
<a id="tocscategorystats"></a>

```json
{
  "topCategoryStats": [
    {
      "count": "string",
      "value": "string"
    }
  ]
}
```

The data statistics of a series of CATEGORY values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topCategoryStats|[[SingleCategoryStats](#schemasinglecategorystats)]|false|none|The statistics of the top 20 CATEGORY values, ordered by count.|

<h2 id="tocS_ClassificationAnnotation">ClassificationAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationannotation"></a>
<a id="schema_ClassificationAnnotation"></a>
<a id="tocSclassificationannotation"></a>
<a id="tocsclassificationannotation"></a>

```json
{
  "score": 0
}
```

Contains annotation details specific to classification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score|number(float)|false|none|Output only. A confidence estimate between 0.0 and 1.0. A higher value means greater confidence that the annotation is positive. If a user approves an annotation as negative or positive, the score value remains unchanged. If a user creates an annotation, the score is 0 for negative or 1 for positive.|

<h2 id="tocS_ClassificationEvaluationMetrics">ClassificationEvaluationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationevaluationmetrics"></a>
<a id="schema_ClassificationEvaluationMetrics"></a>
<a id="tocSclassificationevaluationmetrics"></a>
<a id="tocsclassificationevaluationmetrics"></a>

```json
{
  "annotationSpecId": [
    "string"
  ],
  "auPrc": 0,
  "auRoc": 0,
  "baseAuPrc": 0,
  "confidenceMetricsEntry": [
    {
      "confidenceThreshold": 0,
      "f1Score": 0,
      "f1ScoreAt1": 0,
      "falseNegativeCount": "string",
      "falsePositiveCount": "string",
      "falsePositiveRate": 0,
      "falsePositiveRateAt1": 0,
      "positionThreshold": 0,
      "precision": 0,
      "precisionAt1": 0,
      "recall": 0,
      "recallAt1": 0,
      "trueNegativeCount": "string",
      "truePositiveCount": "string"
    }
  ],
  "confusionMatrix": {
    "annotationSpecId": [
      "string"
    ],
    "displayName": [
      "string"
    ],
    "row": [
      {
        "exampleCount": [
          0
        ]
      }
    ]
  },
  "logLoss": 0
}
```

Model evaluation metrics for classification problems. Note: For Video Classification this metrics only describe quality of the Video Classification predictions of "segment_classification" type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecId|[string]|false|none|Output only. The annotation spec ids used for this evaluation.|
|auPrc|number(float)|false|none|Output only. The Area Under Precision-Recall Curve metric. Micro-averaged for the overall evaluation.|
|auRoc|number(float)|false|none|Output only. The Area Under Receiver Operating Characteristic curve metric. Micro-averaged for the overall evaluation.|
|baseAuPrc|number(float)|false|none|Output only. The Area Under Precision-Recall Curve metric based on priors. Micro-averaged for the overall evaluation. Deprecated.|
|confidenceMetricsEntry|[[ClassificationEvaluationMetricsConfidenceMetricsEntry](#schemaclassificationevaluationmetricsconfidencemetricsentry)]|false|none|Output only. Metrics for each confidence_threshold in 0.00,0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and position_threshold = INT32_MAX_VALUE. ROC and precision-recall curves, and other aggregated metrics are derived from them. The confidence metrics entries may also be supplied for additional values of position_threshold, but from these no aggregated metrics are computed.|
|confusionMatrix|[ConfusionMatrix](#schemaconfusionmatrix)|false|none|Output only. Confusion matrix of the evaluation. Only set for MULTICLASS classification problems where number of labels is no more than 10. Only set for model level evaluation, not for evaluation per label.|
|logLoss|number(float)|false|none|Output only. The Log Loss metric.|

<h2 id="tocS_ClassificationEvaluationMetricsConfidenceMetricsEntry">ClassificationEvaluationMetricsConfidenceMetricsEntry</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationevaluationmetricsconfidencemetricsentry"></a>
<a id="schema_ClassificationEvaluationMetricsConfidenceMetricsEntry"></a>
<a id="tocSclassificationevaluationmetricsconfidencemetricsentry"></a>
<a id="tocsclassificationevaluationmetricsconfidencemetricsentry"></a>

```json
{
  "confidenceThreshold": 0,
  "f1Score": 0,
  "f1ScoreAt1": 0,
  "falseNegativeCount": "string",
  "falsePositiveCount": "string",
  "falsePositiveRate": 0,
  "falsePositiveRateAt1": 0,
  "positionThreshold": 0,
  "precision": 0,
  "precisionAt1": 0,
  "recall": 0,
  "recallAt1": 0,
  "trueNegativeCount": "string",
  "truePositiveCount": "string"
}
```

Metrics for a single confidence threshold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidenceThreshold|number(float)|false|none|Output only. Metrics are computed with an assumption that the model never returns predictions with score lower than this value.|
|f1Score|number(float)|false|none|Output only. The harmonic mean of recall and precision.|
|f1ScoreAt1|number(float)|false|none|Output only. The harmonic mean of recall_at1 and precision_at1.|
|falseNegativeCount|string(int64)|false|none|Output only. The number of ground truth labels that are not matched by a model created label.|
|falsePositiveCount|string(int64)|false|none|Output only. The number of model created labels that do not match a ground truth label.|
|falsePositiveRate|number(float)|false|none|Output only. False Positive Rate for the given confidence threshold.|
|falsePositiveRateAt1|number(float)|false|none|Output only. The False Positive Rate when only considering the label that has the highest prediction score and not below the confidence threshold for each example.|
|positionThreshold|integer(int32)|false|none|Output only. Metrics are computed with an assumption that the model always returns at most this many predictions (ordered by their score, descendingly), but they all still need to meet the confidence_threshold.|
|precision|number(float)|false|none|Output only. Precision for the given confidence threshold.|
|precisionAt1|number(float)|false|none|Output only. The precision when only considering the label that has the highest prediction score and not below the confidence threshold for each example.|
|recall|number(float)|false|none|Output only. Recall (True Positive Rate) for the given confidence threshold.|
|recallAt1|number(float)|false|none|Output only. The Recall (True Positive Rate) when only considering the label that has the highest prediction score and not below the confidence threshold for each example.|
|trueNegativeCount|string(int64)|false|none|Output only. The number of labels that were not created by the model, but if they would, they would not match a ground truth label.|
|truePositiveCount|string(int64)|false|none|Output only. The number of model created labels that match a ground truth label.|

<h2 id="tocS_ClassificationEvaluationMetricsConfusionMatrixRow">ClassificationEvaluationMetricsConfusionMatrixRow</h2>
<!-- backwards compatibility -->
<a id="schemaclassificationevaluationmetricsconfusionmatrixrow"></a>
<a id="schema_ClassificationEvaluationMetricsConfusionMatrixRow"></a>
<a id="tocSclassificationevaluationmetricsconfusionmatrixrow"></a>
<a id="tocsclassificationevaluationmetricsconfusionmatrixrow"></a>

```json
{
  "exampleCount": [
    0
  ]
}
```

Output only. A row in the confusion matrix.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exampleCount|[integer(int32)]|false|none|Output only. Value of the specific cell in the confusion matrix. The number of values each row has (i.e. the length of the row) is equal to the length of the `annotation_spec_id` field or, if that one is not populated, length of the display_name field.|

<h2 id="tocS_ColumnSpec">ColumnSpec</h2>
<!-- backwards compatibility -->
<a id="schemacolumnspec"></a>
<a id="schema_ColumnSpec"></a>
<a id="tocScolumnspec"></a>
<a id="tocscolumnspec"></a>

```json
{
  "dataStats": {
    "arrayStats": {},
    "categoryStats": {
      "topCategoryStats": [
        {
          "count": "string",
          "value": "string"
        }
      ]
    },
    "distinctValueCount": "string",
    "float64Stats": {
      "histogramBuckets": [
        {
          "count": "string",
          "max": 0,
          "min": 0
        }
      ],
      "mean": 0,
      "quantiles": [
        0
      ],
      "standardDeviation": 0
    },
    "nullValueCount": "string",
    "stringStats": {
      "topUnigramStats": [
        {
          "count": "string",
          "value": "string"
        }
      ]
    },
    "structStats": {},
    "timestampStats": {
      "granularStats": {
        "property1": {
          "buckets": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "buckets": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    },
    "validValueCount": "string"
  },
  "dataType": {
    "listElementType": {},
    "nullable": true,
    "structType": {},
    "timeFormat": "string",
    "typeCode": "TYPE_CODE_UNSPECIFIED"
  },
  "displayName": "string",
  "etag": "string",
  "name": "string",
  "topCorrelatedColumns": [
    {
      "columnSpecId": "string",
      "correlationStats": {
        "cramersV": 0
      }
    }
  ]
}
```

A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were given on import . Used by: * Tables

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataStats|[DataStats](#schemadatastats)|false|none|Output only. Stats of the series of values in the column. This field may be stale, see the ancestor's Dataset.tables_dataset_metadata.stats_update_time field for the timestamp at which these stats were last updated.|
|dataType|[DataType](#schemadatatype)|false|none|The data type of elements stored in the column.|
|displayName|string|false|none|Output only. The name of the column to show in the interface. The name can be up to 100 characters long and can consist only of ASCII Latin letters A-Z and a-z, ASCII digits 0-9, underscores(_), and forward slashes(/), and must start with a letter or a digit.|
|etag|string|false|none|Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.|
|name|string|false|none|Output only. The resource name of the column specs. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}/columnSpecs/{column_spec_id}`|
|topCorrelatedColumns|[[CorrelatedColumn](#schemacorrelatedcolumn)]|false|none|Deprecated.|

<h2 id="tocS_ConfusionMatrix">ConfusionMatrix</h2>
<!-- backwards compatibility -->
<a id="schemaconfusionmatrix"></a>
<a id="schema_ConfusionMatrix"></a>
<a id="tocSconfusionmatrix"></a>
<a id="tocsconfusionmatrix"></a>

```json
{
  "annotationSpecId": [
    "string"
  ],
  "displayName": [
    "string"
  ],
  "row": [
    {
      "exampleCount": [
        0
      ]
    }
  ]
}
```

Confusion matrix of the model running the classification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecId|[string]|false|none|Output only. IDs of the annotation specs used in the confusion matrix. For Tables CLASSIFICATION prediction_type only list of annotation_spec_display_name-s is populated.|
|displayName|[string]|false|none|Output only. Display name of the annotation specs used in the confusion matrix, as they were at the moment of the evaluation. For Tables CLASSIFICATION prediction_type-s, distinct values of the target column at the moment of the model evaluation are populated here.|
|row|[[ClassificationEvaluationMetricsConfusionMatrixRow](#schemaclassificationevaluationmetricsconfusionmatrixrow)]|false|none|Output only. Rows in the confusion matrix. The number of rows is equal to the size of `annotation_spec_id`. `row[i].example_count[j]` is the number of examples that have ground truth of the `annotation_spec_id[i]` and are predicted as `annotation_spec_id[j]` by the model being evaluated.|

<h2 id="tocS_CorrelatedColumn">CorrelatedColumn</h2>
<!-- backwards compatibility -->
<a id="schemacorrelatedcolumn"></a>
<a id="schema_CorrelatedColumn"></a>
<a id="tocScorrelatedcolumn"></a>
<a id="tocscorrelatedcolumn"></a>

```json
{
  "columnSpecId": "string",
  "correlationStats": {
    "cramersV": 0
  }
}
```

Identifies the table's column, and its correlation with the column this ColumnSpec describes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnSpecId|string|false|none|The column_spec_id of the correlated column, which belongs to the same table as the in-context column.|
|correlationStats|[CorrelationStats](#schemacorrelationstats)|false|none|Correlation between this and the in-context column.|

<h2 id="tocS_CorrelationStats">CorrelationStats</h2>
<!-- backwards compatibility -->
<a id="schemacorrelationstats"></a>
<a id="schema_CorrelationStats"></a>
<a id="tocScorrelationstats"></a>
<a id="tocscorrelationstats"></a>

```json
{
  "cramersV": 0
}
```

A correlation statistics between two series of DataType values. The series may have differing DataType-s, but within a single series the DataType must be the same.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cramersV|number(double)|false|none|The correlation value using the Cramer's V measure.|

<h2 id="tocS_CreateModelOperationMetadata">CreateModelOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemacreatemodeloperationmetadata"></a>
<a id="schema_CreateModelOperationMetadata"></a>
<a id="tocScreatemodeloperationmetadata"></a>
<a id="tocscreatemodeloperationmetadata"></a>

```json
{}
```

Details of CreateModel operation.

<h2 id="tocS_DataStats">DataStats</h2>
<!-- backwards compatibility -->
<a id="schemadatastats"></a>
<a id="schema_DataStats"></a>
<a id="tocSdatastats"></a>
<a id="tocsdatastats"></a>

```json
{
  "arrayStats": {
    "memberStats": {}
  },
  "categoryStats": {
    "topCategoryStats": [
      {
        "count": "string",
        "value": "string"
      }
    ]
  },
  "distinctValueCount": "string",
  "float64Stats": {
    "histogramBuckets": [
      {
        "count": "string",
        "max": 0,
        "min": 0
      }
    ],
    "mean": 0,
    "quantiles": [
      0
    ],
    "standardDeviation": 0
  },
  "nullValueCount": "string",
  "stringStats": {
    "topUnigramStats": [
      {
        "count": "string",
        "value": "string"
      }
    ]
  },
  "structStats": {
    "fieldStats": {
      "property1": {},
      "property2": {}
    }
  },
  "timestampStats": {
    "granularStats": {
      "property1": {
        "buckets": {
          "property1": "string",
          "property2": "string"
        }
      },
      "property2": {
        "buckets": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  },
  "validValueCount": "string"
}
```

The data statistics of a series of values that share the same DataType.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arrayStats|[ArrayStats](#schemaarraystats)|false|none|The statistics for ARRAY DataType.|
|categoryStats|[CategoryStats](#schemacategorystats)|false|none|The statistics for CATEGORY DataType.|
|distinctValueCount|string(int64)|false|none|The number of distinct values.|
|float64Stats|[Float64Stats](#schemafloat64stats)|false|none|The statistics for FLOAT64 DataType.|
|nullValueCount|string(int64)|false|none|The number of values that are null.|
|stringStats|[StringStats](#schemastringstats)|false|none|The statistics for STRING DataType.|
|structStats|[StructStats](#schemastructstats)|false|none|The statistics for STRUCT DataType.|
|timestampStats|[TimestampStats](#schematimestampstats)|false|none|The statistics for TIMESTAMP DataType.|
|validValueCount|string(int64)|false|none|The number of values that are valid.|

<h2 id="tocS_DataType">DataType</h2>
<!-- backwards compatibility -->
<a id="schemadatatype"></a>
<a id="schema_DataType"></a>
<a id="tocSdatatype"></a>
<a id="tocsdatatype"></a>

```json
{
  "listElementType": {
    "listElementType": {},
    "nullable": true,
    "structType": {},
    "timeFormat": "string",
    "typeCode": "TYPE_CODE_UNSPECIFIED"
  },
  "nullable": true,
  "structType": {
    "fields": {
      "property1": {},
      "property2": {}
    }
  },
  "timeFormat": "string",
  "typeCode": "TYPE_CODE_UNSPECIFIED"
}
```

Indicated the type of data that can be stored in a structured data entity (e.g. a table).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listElementType|[DataType](#schemadatatype)|false|none|If type_code == ARRAY, then `list_element_type` is the type of the elements.|
|nullable|boolean|false|none|If true, this DataType can also be `NULL`. In .CSV files `NULL` value is expressed as an empty string.|
|structType|[StructType](#schemastructtype)|false|none|If type_code == STRUCT, then `struct_type` provides type information for the struct's fields.|
|timeFormat|string|false|none|If type_code == TIMESTAMP then `time_format` provides the format in which that time field is expressed. The time_format must either be one of: * `UNIX_SECONDS` * `UNIX_MILLISECONDS` * `UNIX_MICROSECONDS` * `UNIX_NANOSECONDS` (for respectively number of seconds, milliseconds, microseconds and nanoseconds since start of the Unix epoch); or be written in `strftime` syntax. If time_format is not set, then the default format as described on the type_code is used.|
|typeCode|string|false|none|Required. The TypeCode for this type.|

#### Enumerated Values

|Property|Value|
|---|---|
|typeCode|TYPE_CODE_UNSPECIFIED|
|typeCode|FLOAT64|
|typeCode|TIMESTAMP|
|typeCode|STRING|
|typeCode|ARRAY|
|typeCode|STRUCT|
|typeCode|CATEGORY|

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "etag": "string",
  "exampleCount": 0,
  "imageClassificationDatasetMetadata": {
    "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
  },
  "imageObjectDetectionDatasetMetadata": {},
  "name": "string",
  "tablesDatasetMetadata": {
    "mlUseColumnSpecId": "string",
    "primaryTableSpecId": "string",
    "statsUpdateTime": "string",
    "targetColumnCorrelations": {
      "property1": {
        "cramersV": 0
      },
      "property2": {
        "cramersV": 0
      }
    },
    "targetColumnSpecId": "string",
    "weightColumnSpecId": "string"
  },
  "textClassificationDatasetMetadata": {
    "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
  },
  "textExtractionDatasetMetadata": {},
  "textSentimentDatasetMetadata": {
    "sentimentMax": 0
  },
  "translationDatasetMetadata": {
    "sourceLanguageCode": "string",
    "targetLanguageCode": "string"
  },
  "videoClassificationDatasetMetadata": {},
  "videoObjectTrackingDatasetMetadata": {}
}
```

A workspace for solving a single, particular machine learning (ML) problem. A workspace contains examples that may be annotated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. Timestamp when this dataset was created.|
|description|string|false|none|User-provided description of the dataset. The description can be up to 25000 characters long.|
|displayName|string|false|none|Required. The name of the dataset to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.|
|etag|string|false|none|Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.|
|exampleCount|integer(int32)|false|none|Output only. The number of examples in the dataset.|
|imageClassificationDatasetMetadata|[ImageClassificationDatasetMetadata](#schemaimageclassificationdatasetmetadata)|false|none|Metadata for a dataset used for image classification.|
|imageObjectDetectionDatasetMetadata|[ImageObjectDetectionDatasetMetadata](#schemaimageobjectdetectiondatasetmetadata)|false|none|Metadata for a dataset used for image object detection.|
|name|string|false|none|Output only. The resource name of the dataset. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`|
|tablesDatasetMetadata|[TablesDatasetMetadata](#schematablesdatasetmetadata)|false|none|Metadata for a dataset used for Tables.|
|textClassificationDatasetMetadata|[TextClassificationDatasetMetadata](#schematextclassificationdatasetmetadata)|false|none|Metadata for a dataset used for text classification.|
|textExtractionDatasetMetadata|[TextExtractionDatasetMetadata](#schematextextractiondatasetmetadata)|false|none|Metadata for a dataset used for text extraction.|
|textSentimentDatasetMetadata|[TextSentimentDatasetMetadata](#schematextsentimentdatasetmetadata)|false|none|Metadata for a dataset used for text sentiment.|
|translationDatasetMetadata|[TranslationDatasetMetadata](#schematranslationdatasetmetadata)|false|none|Metadata for a dataset used for translation.|
|videoClassificationDatasetMetadata|[VideoClassificationDatasetMetadata](#schemavideoclassificationdatasetmetadata)|false|none|Metadata for a dataset used for video classification.|
|videoObjectTrackingDatasetMetadata|[VideoObjectTrackingDatasetMetadata](#schemavideoobjecttrackingdatasetmetadata)|false|none|Metadata for a dataset used for video object tracking.|

<h2 id="tocS_DeleteOperationMetadata">DeleteOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeleteoperationmetadata"></a>
<a id="schema_DeleteOperationMetadata"></a>
<a id="tocSdeleteoperationmetadata"></a>
<a id="tocsdeleteoperationmetadata"></a>

```json
{}
```

Details of operations that perform deletes of any entities.

<h2 id="tocS_DeployModelOperationMetadata">DeployModelOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadeploymodeloperationmetadata"></a>
<a id="schema_DeployModelOperationMetadata"></a>
<a id="tocSdeploymodeloperationmetadata"></a>
<a id="tocsdeploymodeloperationmetadata"></a>

```json
{}
```

Details of DeployModel operation.

<h2 id="tocS_DeployModelRequest">DeployModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeploymodelrequest"></a>
<a id="schema_DeployModelRequest"></a>
<a id="tocSdeploymodelrequest"></a>
<a id="tocsdeploymodelrequest"></a>

```json
{
  "imageClassificationModelDeploymentMetadata": {
    "nodeCount": "string"
  },
  "imageObjectDetectionModelDeploymentMetadata": {
    "nodeCount": "string"
  }
}
```

Request message for AutoMl.DeployModel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageClassificationModelDeploymentMetadata|[ImageClassificationModelDeploymentMetadata](#schemaimageclassificationmodeldeploymentmetadata)|false|none|Model deployment metadata specific to Image Classification.|
|imageObjectDetectionModelDeploymentMetadata|[ImageObjectDetectionModelDeploymentMetadata](#schemaimageobjectdetectionmodeldeploymentmetadata)|false|none|Model deployment metadata specific to Image Object Detection.|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "documentDimensions": {
    "height": 0,
    "unit": "DOCUMENT_DIMENSION_UNIT_UNSPECIFIED",
    "width": 0
  },
  "documentText": {
    "content": "string",
    "contentUri": "string",
    "mimeType": "string"
  },
  "inputConfig": {
    "gcsSource": {
      "inputUris": [
        "string"
      ]
    }
  },
  "layout": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "pageNumber": 0,
      "textSegment": {
        "content": "string",
        "endOffset": "string",
        "startOffset": "string"
      },
      "textSegmentType": "TEXT_SEGMENT_TYPE_UNSPECIFIED"
    }
  ],
  "pageCount": 0
}
```

A structured text document e.g. a PDF.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentDimensions|[DocumentDimensions](#schemadocumentdimensions)|false|none|The dimensions of the page in the document.|
|documentText|[TextSnippet](#schematextsnippet)|false|none|The plain text version of this document.|
|inputConfig|[DocumentInputConfig](#schemadocumentinputconfig)|false|none|An input config specifying the content of the document.|
|layout|[[Layout](#schemalayout)]|false|none|Describes the layout of the document. Sorted by page_number.|
|pageCount|integer(int32)|false|none|Number of pages in the document.|

<h2 id="tocS_DocumentDimensions">DocumentDimensions</h2>
<!-- backwards compatibility -->
<a id="schemadocumentdimensions"></a>
<a id="schema_DocumentDimensions"></a>
<a id="tocSdocumentdimensions"></a>
<a id="tocsdocumentdimensions"></a>

```json
{
  "height": 0,
  "unit": "DOCUMENT_DIMENSION_UNIT_UNSPECIFIED",
  "width": 0
}
```

Message that describes dimension of a document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|number(float)|false|none|Height value of the document, works together with the unit.|
|unit|string|false|none|Unit of the dimension.|
|width|number(float)|false|none|Width value of the document, works together with the unit.|

#### Enumerated Values

|Property|Value|
|---|---|
|unit|DOCUMENT_DIMENSION_UNIT_UNSPECIFIED|
|unit|INCH|
|unit|CENTIMETER|
|unit|POINT|

<h2 id="tocS_DocumentInputConfig">DocumentInputConfig</h2>
<!-- backwards compatibility -->
<a id="schemadocumentinputconfig"></a>
<a id="schema_DocumentInputConfig"></a>
<a id="tocSdocumentinputconfig"></a>
<a id="tocsdocumentinputconfig"></a>

```json
{
  "gcsSource": {
    "inputUris": [
      "string"
    ]
  }
}
```

Input configuration of a Document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsSource|[GcsSource](#schemagcssource)|false|none|The Google Cloud Storage location of the document file. Only a single path should be given. Max supported size: 512MB. Supported extensions: .PDF.|

<h2 id="tocS_DoubleRange">DoubleRange</h2>
<!-- backwards compatibility -->
<a id="schemadoublerange"></a>
<a id="schema_DoubleRange"></a>
<a id="tocSdoublerange"></a>
<a id="tocsdoublerange"></a>

```json
{
  "end": 0,
  "start": 0
}
```

A range between two double numbers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|number(double)|false|none|End of the range, exclusive.|
|start|number(double)|false|none|Start of the range, inclusive.|

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

<h2 id="tocS_ExamplePayload">ExamplePayload</h2>
<!-- backwards compatibility -->
<a id="schemaexamplepayload"></a>
<a id="schema_ExamplePayload"></a>
<a id="tocSexamplepayload"></a>
<a id="tocsexamplepayload"></a>

```json
{
  "document": {
    "documentDimensions": {
      "height": 0,
      "unit": "DOCUMENT_DIMENSION_UNIT_UNSPECIFIED",
      "width": 0
    },
    "documentText": {
      "content": "string",
      "contentUri": "string",
      "mimeType": "string"
    },
    "inputConfig": {
      "gcsSource": {
        "inputUris": [
          "string"
        ]
      }
    },
    "layout": [
      {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "pageNumber": 0,
        "textSegment": {
          "content": "string",
          "endOffset": "string",
          "startOffset": "string"
        },
        "textSegmentType": "TEXT_SEGMENT_TYPE_UNSPECIFIED"
      }
    ],
    "pageCount": 0
  },
  "image": {
    "imageBytes": "string",
    "inputConfig": {
      "bigquerySource": {
        "inputUri": "string"
      },
      "gcsSource": {
        "inputUris": [
          "string"
        ]
      },
      "params": {
        "property1": "string",
        "property2": "string"
      }
    },
    "thumbnailUri": "string"
  },
  "row": {
    "columnSpecIds": [
      "string"
    ],
    "values": [
      null
    ]
  },
  "textSnippet": {
    "content": "string",
    "contentUri": "string",
    "mimeType": "string"
  }
}
```

Example data used for training or prediction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|[Document](#schemadocument)|false|none|Example document.|
|image|[Image](#schemaimage)|false|none|Example image.|
|row|[Row](#schemarow)|false|none|Example relational table row.|
|textSnippet|[TextSnippet](#schematextsnippet)|false|none|Example text.|

<h2 id="tocS_ExportDataOperationMetadata">ExportDataOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaexportdataoperationmetadata"></a>
<a id="schema_ExportDataOperationMetadata"></a>
<a id="tocSexportdataoperationmetadata"></a>
<a id="tocsexportdataoperationmetadata"></a>

```json
{
  "outputInfo": {
    "bigqueryOutputDataset": "string",
    "gcsOutputDirectory": "string"
  }
}
```

Details of ExportData operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputInfo|[ExportDataOutputInfo](#schemaexportdataoutputinfo)|false|none|Output only. Information further describing this export data's output.|

<h2 id="tocS_ExportDataOutputInfo">ExportDataOutputInfo</h2>
<!-- backwards compatibility -->
<a id="schemaexportdataoutputinfo"></a>
<a id="schema_ExportDataOutputInfo"></a>
<a id="tocSexportdataoutputinfo"></a>
<a id="tocsexportdataoutputinfo"></a>

```json
{
  "bigqueryOutputDataset": "string",
  "gcsOutputDirectory": "string"
}
```

Further describes this export data's output. Supplements OutputConfig.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryOutputDataset|string|false|none|The path of the BigQuery dataset created, in bq://projectId.bqDatasetId format, into which the exported data is written.|
|gcsOutputDirectory|string|false|none|The full path of the Google Cloud Storage directory created, into which the exported data is written.|

<h2 id="tocS_ExportDataRequest">ExportDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportdatarequest"></a>
<a id="schema_ExportDataRequest"></a>
<a id="tocSexportdatarequest"></a>
<a id="tocsexportdatarequest"></a>

```json
{
  "outputConfig": {
    "bigqueryDestination": {
      "outputUri": "string"
    },
    "gcsDestination": {
      "outputUriPrefix": "string"
    }
  }
}
```

Request message for AutoMl.ExportData.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputConfig|[OutputConfig](#schemaoutputconfig)|false|none|Required. The desired output location.|

<h2 id="tocS_ExportEvaluatedExamplesOperationMetadata">ExportEvaluatedExamplesOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaexportevaluatedexamplesoperationmetadata"></a>
<a id="schema_ExportEvaluatedExamplesOperationMetadata"></a>
<a id="tocSexportevaluatedexamplesoperationmetadata"></a>
<a id="tocsexportevaluatedexamplesoperationmetadata"></a>

```json
{
  "outputInfo": {
    "bigqueryOutputDataset": "string"
  }
}
```

Details of EvaluatedExamples operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputInfo|[ExportEvaluatedExamplesOutputInfo](#schemaexportevaluatedexamplesoutputinfo)|false|none|Output only. Information further describing the output of this evaluated examples export.|

<h2 id="tocS_ExportEvaluatedExamplesOutputConfig">ExportEvaluatedExamplesOutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemaexportevaluatedexamplesoutputconfig"></a>
<a id="schema_ExportEvaluatedExamplesOutputConfig"></a>
<a id="tocSexportevaluatedexamplesoutputconfig"></a>
<a id="tocsexportevaluatedexamplesoutputconfig"></a>

```json
{
  "bigqueryDestination": {
    "outputUri": "string"
  }
}
```

Output configuration for ExportEvaluatedExamples Action. Note that this call is available only for 30 days since the moment the model was evaluated. The output depends on the domain, as follows (note that only examples from the TEST set are exported): * For Tables: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `export_evaluated_examples__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In the dataset an `evaluated_examples` table will be created. It will have all the same columns as the primary_table of the dataset from which the model was created, as they were at the moment of model's evaluation (this includes the target column with its ground truth), followed by a column called "predicted_". That last column will contain the model's prediction result for each respective row, given as ARRAY of AnnotationPayloads, represented as STRUCT-s, containing TablesAnnotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryDestination|[BigQueryDestination](#schemabigquerydestination)|false|none|The BigQuery location where the output is to be written to.|

<h2 id="tocS_ExportEvaluatedExamplesOutputInfo">ExportEvaluatedExamplesOutputInfo</h2>
<!-- backwards compatibility -->
<a id="schemaexportevaluatedexamplesoutputinfo"></a>
<a id="schema_ExportEvaluatedExamplesOutputInfo"></a>
<a id="tocSexportevaluatedexamplesoutputinfo"></a>
<a id="tocsexportevaluatedexamplesoutputinfo"></a>

```json
{
  "bigqueryOutputDataset": "string"
}
```

Further describes the output of the evaluated examples export. Supplements ExportEvaluatedExamplesOutputConfig.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryOutputDataset|string|false|none|The path of the BigQuery dataset created, in bq://projectId.bqDatasetId format, into which the output of export evaluated examples is written.|

<h2 id="tocS_ExportEvaluatedExamplesRequest">ExportEvaluatedExamplesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportevaluatedexamplesrequest"></a>
<a id="schema_ExportEvaluatedExamplesRequest"></a>
<a id="tocSexportevaluatedexamplesrequest"></a>
<a id="tocsexportevaluatedexamplesrequest"></a>

```json
{
  "outputConfig": {
    "bigqueryDestination": {
      "outputUri": "string"
    }
  }
}
```

Request message for AutoMl.ExportEvaluatedExamples.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputConfig|[ExportEvaluatedExamplesOutputConfig](#schemaexportevaluatedexamplesoutputconfig)|false|none|Required. The desired output location and configuration.|

<h2 id="tocS_ExportModelOperationMetadata">ExportModelOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaexportmodeloperationmetadata"></a>
<a id="schema_ExportModelOperationMetadata"></a>
<a id="tocSexportmodeloperationmetadata"></a>
<a id="tocsexportmodeloperationmetadata"></a>

```json
{
  "outputInfo": {
    "gcsOutputDirectory": "string"
  }
}
```

Details of ExportModel operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputInfo|[ExportModelOutputInfo](#schemaexportmodeloutputinfo)|false|none|Output only. Information further describing the output of this model export.|

<h2 id="tocS_ExportModelOutputInfo">ExportModelOutputInfo</h2>
<!-- backwards compatibility -->
<a id="schemaexportmodeloutputinfo"></a>
<a id="schema_ExportModelOutputInfo"></a>
<a id="tocSexportmodeloutputinfo"></a>
<a id="tocsexportmodeloutputinfo"></a>

```json
{
  "gcsOutputDirectory": "string"
}
```

Further describes the output of model export. Supplements ModelExportOutputConfig.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsOutputDirectory|string|false|none|The full path of the Google Cloud Storage directory created, into which the model will be exported.|

<h2 id="tocS_ExportModelRequest">ExportModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexportmodelrequest"></a>
<a id="schema_ExportModelRequest"></a>
<a id="tocSexportmodelrequest"></a>
<a id="tocsexportmodelrequest"></a>

```json
{
  "outputConfig": {
    "gcrDestination": {
      "outputUri": "string"
    },
    "gcsDestination": {
      "outputUriPrefix": "string"
    },
    "modelFormat": "string",
    "params": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Request message for AutoMl.ExportModel. Models need to be enabled for exporting, otherwise an error code will be returned.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputConfig|[ModelExportOutputConfig](#schemamodelexportoutputconfig)|false|none|Required. The desired output location and configuration.|

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

<h2 id="tocS_Float64Stats">Float64Stats</h2>
<!-- backwards compatibility -->
<a id="schemafloat64stats"></a>
<a id="schema_Float64Stats"></a>
<a id="tocSfloat64stats"></a>
<a id="tocsfloat64stats"></a>

```json
{
  "histogramBuckets": [
    {
      "count": "string",
      "max": 0,
      "min": 0
    }
  ],
  "mean": 0,
  "quantiles": [
    0
  ],
  "standardDeviation": 0
}
```

The data statistics of a series of FLOAT64 values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|histogramBuckets|[[HistogramBucket](#schemahistogrambucket)]|false|none|Histogram buckets of the data series. Sorted by the min value of the bucket, ascendingly, and the number of the buckets is dynamically generated. The buckets are non-overlapping and completely cover whole FLOAT64 range with min of first bucket being `"-Infinity"`, and max of the last one being `"Infinity"`.|
|mean|number(double)|false|none|The mean of the series.|
|quantiles|[number(double)]|false|none|Ordered from 0 to k k-quantile values of the data series of n values. The value at index i is, approximately, the i*n/k-th smallest value in the series; for i = 0 and i = k these are, respectively, the min and max values.|
|standardDeviation|number(double)|false|none|The standard deviation of the series.|

<h2 id="tocS_GcrDestination">GcrDestination</h2>
<!-- backwards compatibility -->
<a id="schemagcrdestination"></a>
<a id="schema_GcrDestination"></a>
<a id="tocSgcrdestination"></a>
<a id="tocsgcrdestination"></a>

```json
{
  "outputUri": "string"
}
```

The GCR location where the image must be pushed to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputUri|string|false|none|Required. Google Contained Registry URI of the new image, up to 2000 characters long. See https: //cloud.google.com/container-registry/do // cs/pushing-and-pulling#pushing_an_image_to_a_registry Accepted forms: * [HOSTNAME]/[PROJECT-ID]/[IMAGE] * [HOSTNAME]/[PROJECT-ID]/[IMAGE]:[TAG] The requesting user must have permission to push images the project.|

<h2 id="tocS_GcsDestination">GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagcsdestination"></a>
<a id="schema_GcsDestination"></a>
<a id="tocSgcsdestination"></a>
<a id="tocsgcsdestination"></a>

```json
{
  "outputUriPrefix": "string"
}
```

The Google Cloud Storage location where the output is to be written to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputUriPrefix|string|false|none|Required. Google Cloud Storage URI to output directory, up to 2000 characters long. Accepted forms: * Prefix path: gs://bucket/directory The requesting user must have write permission to the bucket. The directory is created if it doesn't exist.|

<h2 id="tocS_GcsSource">GcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagcssource"></a>
<a id="schema_GcsSource"></a>
<a id="tocSgcssource"></a>
<a id="tocsgcssource"></a>

```json
{
  "inputUris": [
    "string"
  ]
}
```

The Google Cloud Storage location for the input content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputUris|[string]|false|none|Required. Google Cloud Storage URIs to input files, up to 2000 characters long. Accepted forms: * Full object path, e.g. gs://bucket/directory/object.csv|

<h2 id="tocS_GranularStats">GranularStats</h2>
<!-- backwards compatibility -->
<a id="schemagranularstats"></a>
<a id="schema_GranularStats"></a>
<a id="tocSgranularstats"></a>
<a id="tocsgranularstats"></a>

```json
{
  "buckets": {
    "property1": "string",
    "property2": "string"
  }
}
```

Stats split by a defined in context granularity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buckets|object|false|none|A map from granularity key to example count for that key. E.g. for hour_of_day `13` means 1pm, or for month_of_year `5` means May).|

<h2 id="tocS_HistogramBucket">HistogramBucket</h2>
<!-- backwards compatibility -->
<a id="schemahistogrambucket"></a>
<a id="schema_HistogramBucket"></a>
<a id="tocShistogrambucket"></a>
<a id="tocshistogrambucket"></a>

```json
{
  "count": "string",
  "max": 0,
  "min": 0
}
```

A bucket of a histogram.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string(int64)|false|none|The number of data values that are in the bucket, i.e. are between min and max values.|
|max|number(double)|false|none|The maximum value of the bucket, exclusive unless max = `"Infinity"`, in which case it's inclusive.|
|min|number(double)|false|none|The minimum value of the bucket, inclusive.|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "imageBytes": "string",
  "inputConfig": {
    "bigquerySource": {
      "inputUri": "string"
    },
    "gcsSource": {
      "inputUris": [
        "string"
      ]
    },
    "params": {
      "property1": "string",
      "property2": "string"
    }
  },
  "thumbnailUri": "string"
}
```

A representation of an image. Only images up to 30MB in size are supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageBytes|string(byte)|false|none|Image content represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64.|
|inputConfig|[InputConfig](#schemainputconfig)|false|none|An input config specifying the content of the image.|
|thumbnailUri|string|false|none|Output only. HTTP URI to the thumbnail image.|

<h2 id="tocS_ImageClassificationDatasetMetadata">ImageClassificationDatasetMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaimageclassificationdatasetmetadata"></a>
<a id="schema_ImageClassificationDatasetMetadata"></a>
<a id="tocSimageclassificationdatasetmetadata"></a>
<a id="tocsimageclassificationdatasetmetadata"></a>

```json
{
  "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
}
```

Dataset metadata that is specific to image classification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classificationType|string|false|none|Required. Type of the classification problem.|

#### Enumerated Values

|Property|Value|
|---|---|
|classificationType|CLASSIFICATION_TYPE_UNSPECIFIED|
|classificationType|MULTICLASS|
|classificationType|MULTILABEL|

<h2 id="tocS_ImageClassificationModelDeploymentMetadata">ImageClassificationModelDeploymentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaimageclassificationmodeldeploymentmetadata"></a>
<a id="schema_ImageClassificationModelDeploymentMetadata"></a>
<a id="tocSimageclassificationmodeldeploymentmetadata"></a>
<a id="tocsimageclassificationmodeldeploymentmetadata"></a>

```json
{
  "nodeCount": "string"
}
```

Model deployment metadata specific to Image Classification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodeCount|string(int64)|false|none|Input only. The number of nodes to deploy the model on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the model's node_qps. Must be between 1 and 100, inclusive on both ends.|

<h2 id="tocS_ImageClassificationModelMetadata">ImageClassificationModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaimageclassificationmodelmetadata"></a>
<a id="schema_ImageClassificationModelMetadata"></a>
<a id="tocSimageclassificationmodelmetadata"></a>
<a id="tocsimageclassificationmodelmetadata"></a>

```json
{
  "baseModelId": "string",
  "modelType": "string",
  "nodeCount": "string",
  "nodeQps": 0,
  "stopReason": "string",
  "trainBudget": "string",
  "trainCost": "string"
}
```

Model metadata for image classification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseModelId|string|false|none|Optional. The ID of the `base` model. If it is specified, the new model will be created based on the `base` model. Otherwise, the new model will be created from scratch. The `base` model must be in the same `project` and `location` as the new model to create, and have the same `model_type`.|
|modelType|string|false|none|Optional. Type of the model. The available values are: * `cloud` - Model to be used via prediction calls to AutoML API. This is the default value. * `mobile-low-latency-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-versatile-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. * `mobile-high-accuracy-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models. * `mobile-core-ml-low-latency-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-core-ml-versatile-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. * `mobile-core-ml-high-accuracy-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile device with Core ML afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models.|
|nodeCount|string(int64)|false|none|Output only. The number of nodes this model is deployed on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the node_qps field.|
|nodeQps|number(double)|false|none|Output only. An approximate number of online prediction QPS that can be supported by this model per each node on which it is deployed.|
|stopReason|string|false|none|Output only. The reason that this create model operation stopped, e.g. `BUDGET_REACHED`, `MODEL_CONVERGED`.|
|trainBudget|string(int64)|false|none|Required. The train budget of creating this model, expressed in hours. The actual `train_cost` will be equal or less than this value.|
|trainCost|string(int64)|false|none|Output only. The actual train cost of creating this model, expressed in hours. If this model is created from a `base` model, the train cost used to create the `base` model are not included.|

<h2 id="tocS_ImageObjectDetectionAnnotation">ImageObjectDetectionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemaimageobjectdetectionannotation"></a>
<a id="schema_ImageObjectDetectionAnnotation"></a>
<a id="tocSimageobjectdetectionannotation"></a>
<a id="tocsimageobjectdetectionannotation"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "score": 0
}
```

Annotation details for image object detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[BoundingPoly](#schemaboundingpoly)|false|none|Output only. The rectangle representing the object location.|
|score|number(float)|false|none|Output only. The confidence that this annotation is positive for the parent example, value in [0, 1], higher means higher positivity confidence.|

<h2 id="tocS_ImageObjectDetectionDatasetMetadata">ImageObjectDetectionDatasetMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaimageobjectdetectiondatasetmetadata"></a>
<a id="schema_ImageObjectDetectionDatasetMetadata"></a>
<a id="tocSimageobjectdetectiondatasetmetadata"></a>
<a id="tocsimageobjectdetectiondatasetmetadata"></a>

```json
{}
```

Dataset metadata specific to image object detection.

<h2 id="tocS_ImageObjectDetectionEvaluationMetrics">ImageObjectDetectionEvaluationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaimageobjectdetectionevaluationmetrics"></a>
<a id="schema_ImageObjectDetectionEvaluationMetrics"></a>
<a id="tocSimageobjectdetectionevaluationmetrics"></a>
<a id="tocsimageobjectdetectionevaluationmetrics"></a>

```json
{
  "boundingBoxMeanAveragePrecision": 0,
  "boundingBoxMetricsEntries": [
    {
      "confidenceMetricsEntries": [
        {
          "confidenceThreshold": 0,
          "f1Score": 0,
          "precision": 0,
          "recall": 0
        }
      ],
      "iouThreshold": 0,
      "meanAveragePrecision": 0
    }
  ],
  "evaluatedBoundingBoxCount": 0
}
```

Model evaluation metrics for image object detection problems. Evaluates prediction quality of labeled bounding boxes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBoxMeanAveragePrecision|number(float)|false|none|Output only. The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries.|
|boundingBoxMetricsEntries|[[BoundingBoxMetricsEntry](#schemaboundingboxmetricsentry)]|false|none|Output only. The bounding boxes match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 pair.|
|evaluatedBoundingBoxCount|integer(int32)|false|none|Output only. The total number of bounding boxes (i.e. summed over all images) the ground truth used to create this evaluation had.|

<h2 id="tocS_ImageObjectDetectionModelDeploymentMetadata">ImageObjectDetectionModelDeploymentMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaimageobjectdetectionmodeldeploymentmetadata"></a>
<a id="schema_ImageObjectDetectionModelDeploymentMetadata"></a>
<a id="tocSimageobjectdetectionmodeldeploymentmetadata"></a>
<a id="tocsimageobjectdetectionmodeldeploymentmetadata"></a>

```json
{
  "nodeCount": "string"
}
```

Model deployment metadata specific to Image Object Detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodeCount|string(int64)|false|none|Input only. The number of nodes to deploy the model on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the model's qps_per_node. Must be between 1 and 100, inclusive on both ends.|

<h2 id="tocS_ImageObjectDetectionModelMetadata">ImageObjectDetectionModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaimageobjectdetectionmodelmetadata"></a>
<a id="schema_ImageObjectDetectionModelMetadata"></a>
<a id="tocSimageobjectdetectionmodelmetadata"></a>
<a id="tocsimageobjectdetectionmodelmetadata"></a>

```json
{
  "modelType": "string",
  "nodeCount": "string",
  "nodeQps": 0,
  "stopReason": "string",
  "trainBudgetMilliNodeHours": "string",
  "trainCostMilliNodeHours": "string"
}
```

Model metadata specific to image object detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelType|string|false|none|Optional. Type of the model. The available values are: * `cloud-high-accuracy-1` - (default) A model to be used via prediction calls to AutoML API. Expected to have a higher latency, but should also have a higher prediction quality than other models. * `cloud-low-latency-1` - A model to be used via prediction calls to AutoML API. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-low-latency-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have low latency, but may have lower prediction quality than other models. * `mobile-versatile-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. * `mobile-high-accuracy-1` - A model that, in addition to providing prediction via AutoML API, can also be exported (see AutoMl.ExportModel) and used on a mobile or edge device with TensorFlow afterwards. Expected to have a higher latency, but should also have a higher prediction quality than other models.|
|nodeCount|string(int64)|false|none|Output only. The number of nodes this model is deployed on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the qps_per_node field.|
|nodeQps|number(double)|false|none|Output only. An approximate number of online prediction QPS that can be supported by this model per each node on which it is deployed.|
|stopReason|string|false|none|Output only. The reason that this create model operation stopped, e.g. `BUDGET_REACHED`, `MODEL_CONVERGED`.|
|trainBudgetMilliNodeHours|string(int64)|false|none|The train budget of creating this model, expressed in milli node hours i.e. 1,000 value in this field means 1 node hour. The actual `train_cost` will be equal or less than this value. If further model training ceases to provide any improvements, it will stop without using full budget and the stop_reason will be `MODEL_CONVERGED`. Note, node_hour = actual_hour * number_of_nodes_invovled. For model type `cloud-high-accuracy-1`(default) and `cloud-low-latency-1`, the train budget must be between 20,000 and 900,000 milli node hours, inclusive. The default value is 216, 000 which represents one day in wall time. For model type `mobile-low-latency-1`, `mobile-versatile-1`, `mobile-high-accuracy-1`, `mobile-core-ml-low-latency-1`, `mobile-core-ml-versatile-1`, `mobile-core-ml-high-accuracy-1`, the train budget must be between 1,000 and 100,000 milli node hours, inclusive. The default value is 24, 000 which represents one day in wall time.|
|trainCostMilliNodeHours|string(int64)|false|none|Output only. The actual train cost of creating this model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed the train budget.|

<h2 id="tocS_ImportDataOperationMetadata">ImportDataOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaimportdataoperationmetadata"></a>
<a id="schema_ImportDataOperationMetadata"></a>
<a id="tocSimportdataoperationmetadata"></a>
<a id="tocsimportdataoperationmetadata"></a>

```json
{}
```

Details of ImportData operation.

<h2 id="tocS_ImportDataRequest">ImportDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimportdatarequest"></a>
<a id="schema_ImportDataRequest"></a>
<a id="tocSimportdatarequest"></a>
<a id="tocsimportdatarequest"></a>

```json
{
  "inputConfig": {
    "bigquerySource": {
      "inputUri": "string"
    },
    "gcsSource": {
      "inputUris": [
        "string"
      ]
    },
    "params": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Request message for AutoMl.ImportData.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputConfig|[InputConfig](#schemainputconfig)|false|none|Required. The desired input location and its domain specific semantics, if any.|

<h2 id="tocS_InputConfig">InputConfig</h2>
<!-- backwards compatibility -->
<a id="schemainputconfig"></a>
<a id="schema_InputConfig"></a>
<a id="tocSinputconfig"></a>
<a id="tocsinputconfig"></a>

```json
{
  "bigquerySource": {
    "inputUri": "string"
  },
  "gcsSource": {
    "inputUris": [
      "string"
    ]
  },
  "params": {
    "property1": "string",
    "property2": "string"
  }
}
```

Input configuration for ImportData Action. The format of input depends on dataset_metadata the Dataset into which the import is happening has. As input source the gcs_source is expected, unless specified otherwise. Additionally any input .CSV file by itself must be 100MB or smaller, unless specified otherwise. If an "example" file (that is, image, video etc.) with identical content (even if it had different GCS_FILE_PATH) is mentioned multiple times, then its label, bounding boxes etc. are appended. The same file should be always provided with the same ML_USE and GCS_FILE_PATH, if it is not, then these values are nondeterministically selected from the given ones. The formats are represented in EBNF with commas being literal and with non-terminal symbols defined near the end of this comment. The formats are: * For Image Classification: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH,LABEL,LABEL,... GCS_FILE_PATH leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG, .WEBP, .BMP, .TIFF, .ICO For MULTICLASS classification type, at most one LABEL is allowed per image. If an image has not yet been labeled, then it should be mentioned just once with no LABEL. Some sample rows: TRAIN,gs://folder/image1.jpg,daisy TEST,gs://folder/image2.jpg,dandelion,tulip,rose UNASSIGNED,gs://folder/image3.jpg,daisy UNASSIGNED,gs://folder/image4.jpg * For Image Object Detection: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH,(LABEL,BOUNDING_BOX | ,,,,,,,) GCS_FILE_PATH leads to image of up to 30MB in size. Supported extensions: .JPEG, .GIF, .PNG. Each image is assumed to be exhaustively labeled. The minimum allowed BOUNDING_BOX edge length is 0.01, and no more than 500 BOUNDING_BOX-es per image are allowed (one BOUNDING_BOX is defined per line). If an image has not yet been labeled, then it should be mentioned just once with no LABEL and the ",,,,,,," in place of the BOUNDING_BOX. For images which are known to not contain any bounding boxes, they should be labelled explictly as "NEGATIVE_IMAGE", followed by ",,,,,,," in place of the BOUNDING_BOX. Sample rows: TRAIN,gs://folder/image1.png,car,0.1,0.1,,,0.3,0.3,, TRAIN,gs://folder/image1.png,bike,.7,.6,,,.8,.9,, UNASSIGNED,gs://folder/im2.png,car,0.1,0.1,0.2,0.1,0.2,0.3,0.1,0.3 TEST,gs://folder/im3.png,,,,,,,,, TRAIN,gs://folder/im4.png,NEGATIVE_IMAGE,,,,,,,,, * For Video Classification: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH should lead to another .csv file which describes examples that have given ML_USE, using the following row format: GCS_FILE_PATH,(LABEL,TIME_SEGMENT_START,TIME_SEGMENT_END | ,,) Here GCS_FILE_PATH leads to a video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. TIME_SEGMENT_START and TIME_SEGMENT_END must be within the length of the video, and end has to be after the start. Any segment of a video which has one or more labels on it, is considered a hard negative for all other labels. Any segment with no labels on it is considered to be unknown. If a whole video is unknown, then it shuold be mentioned just once with ",," in place of LABEL, TIME_SEGMENT_START,TIME_SEGMENT_END. Sample top level CSV file: TRAIN,gs://folder/train_videos.csv TEST,gs://folder/test_videos.csv UNASSIGNED,gs://folder/other_videos.csv Sample rows of a CSV file for a particular ML_USE: gs://folder/video1.avi,car,120,180.000021 gs://folder/video1.avi,bike,150,180.000021 gs://folder/vid2.avi,car,0,60.5 gs://folder/vid3.avi,,, * For Video Object Tracking: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH where ML_USE VALIDATE value should not be used. The GCS_FILE_PATH should lead to another .csv file which describes examples that have given ML_USE, using one of the following row format: GCS_FILE_PATH,LABEL,[INSTANCE_ID],TIMESTAMP,BOUNDING_BOX or GCS_FILE_PATH,,,,,,,,,, Here GCS_FILE_PATH leads to a video of up to 50GB in size and up to 3h duration. Supported extensions: .MOV, .MPEG4, .MP4, .AVI. Providing INSTANCE_IDs can help to obtain a better model. When a specific labeled entity leaves the video frame, and shows up afterwards it is not required, albeit preferable, that the same INSTANCE_ID is given to it. TIMESTAMP must be within the length of the video, the BOUNDING_BOX is assumed to be drawn on the closest video's frame to the TIMESTAMP. Any mentioned by the TIMESTAMP frame is expected to be exhaustively labeled and no more than 500 BOUNDING_BOX-es per frame are allowed. If a whole video is unknown, then it should be mentioned just once with ",,,,,,,,,," in place of LABEL, [INSTANCE_ID],TIMESTAMP,BOUNDING_BOX. Sample top level CSV file: TRAIN,gs://folder/train_videos.csv TEST,gs://folder/test_videos.csv UNASSIGNED,gs://folder/other_videos.csv Seven sample rows of a CSV file for a particular ML_USE: gs://folder/video1.avi,car,1,12.10,0.8,0.8,0.9,0.8,0.9,0.9,0.8,0.9 gs://folder/video1.avi,car,1,12.90,0.4,0.8,0.5,0.8,0.5,0.9,0.4,0.9 gs://folder/video1.avi,car,2,12.10,.4,.2,.5,.2,.5,.3,.4,.3 gs://folder/video1.avi,car,2,12.90,.8,.2,,,.9,.3,, gs://folder/video1.avi,bike,,12.50,.45,.45,,,.55,.55,, gs://folder/video2.avi,car,1,0,.1,.9,,,.9,.1,, gs://folder/video2.avi,,,,,,,,,,, * For Text Extraction: CSV file(s) with each line in format: ML_USE,GCS_FILE_PATH GCS_FILE_PATH leads to a .JSONL (that is, JSON Lines) file which either imports text in-line or as documents. Any given .JSONL file must be 100MB or smaller. The in-line .JSONL file contains, per line, a proto that wraps a TextSnippet proto (in json representation) followed by one or more AnnotationPayload protos (called annotations), which have display_name and text_extraction detail populated. The given text is expected to be annotated exhaustively, for example, if you look for animals and text contains "dolphin" that is not labeled, then "dolphin" is assumed to not be an animal. Any given text snippet content must be 10KB or smaller, and also be UTF-8 NFC encoded (ASCII already is). The document .JSONL file contains, per line, a proto that wraps a Document proto. The Document proto must have either document_text or input_config set. In document_text case, the Document proto may also contain the spatial information of the document, including layout, document dimension and page number. In input_config case, only PDF documents are supported now, and each document may be up to 2MB large. Currently, annotations on documents cannot be specified at import. Three sample CSV rows: TRAIN,gs://folder/file1.jsonl VALIDATE,gs://folder/file2.jsonl TEST,gs://folder/file3.jsonl Sample in-line JSON Lines file for entity extraction (presented here with artificial line breaks, but the only actual line break is denoted by \n).: { "document": { "document_text": {"content": "dog cat"} "layout": [ { "text_segment": { "start_offset": 0, "end_offset": 3, }, "page_number": 1, "bounding_poly": { "normalized_vertices": [ {"x": 0.1, "y": 0.1}, {"x": 0.1, "y": 0.3}, {"x": 0.3, "y": 0.3}, {"x": 0.3, "y": 0.1}, ], }, "text_segment_type": TOKEN, }, { "text_segment": { "start_offset": 4, "end_offset": 7, }, "page_number": 1, "bounding_poly": { "normalized_vertices": [ {"x": 0.4, "y": 0.1}, {"x": 0.4, "y": 0.3}, {"x": 0.8, "y": 0.3}, {"x": 0.8, "y": 0.1}, ], }, "text_segment_type": TOKEN, } ], "document_dimensions": { "width": 8.27, "height": 11.69, "unit": INCH, } "page_count": 1, }, "annotations": [ { "display_name": "animal", "text_extraction": {"text_segment": {"start_offset": 0, "end_offset": 3}} }, { "display_name": "animal", "text_extraction": {"text_segment": {"start_offset": 4, "end_offset": 7}} } ], }\n { "text_snippet": { "content": "This dog is good." }, "annotations": [ { "display_name": "animal", "text_extraction": { "text_segment": {"start_offset": 5, "end_offset": 8} } } ] } Sample document JSON Lines file (presented here with artificial line breaks, but the only actual line break is denoted by \n).: { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document1.pdf" ] } } } }\n { "document": { "input_config": { "gcs_source": { "input_uris": [ "gs://folder/document2.pdf" ] } } } } * For Text Classification: CSV file(s) with each line in format: ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),LABEL,LABEL,... TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If the column content is a valid gcs file path, i.e. prefixed by "gs://", it will be treated as a GCS_FILE_PATH, else if the content is enclosed within double quotes (""), it is treated as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path must lead to a .txt file with UTF-8 encoding, for example, "gs://folder/content.txt", and the content in it is extracted as a text snippet. In TEXT_SNIPPET case, the column content excluding quotes is treated as to be imported text snippet. In both cases, the text snippet/file size must be within 128kB. Maximum 100 unique labels are allowed per CSV row. Sample rows: TRAIN,"They have bad food and very rude",RudeService,BadFood TRAIN,gs://folder/content.txt,SlowService TEST,"Typically always bad service there.",RudeService VALIDATE,"Stomach ache to go.",BadFood * For Text Sentiment: CSV file(s) with each line in format: ML_USE,(TEXT_SNIPPET | GCS_FILE_PATH),SENTIMENT TEXT_SNIPPET and GCS_FILE_PATH are distinguished by a pattern. If the column content is a valid gcs file path, that is, prefixed by "gs://", it is treated as a GCS_FILE_PATH, otherwise it is treated as a TEXT_SNIPPET. In the GCS_FILE_PATH case, the path must lead to a .txt file with UTF-8 encoding, for example, "gs://folder/content.txt", and the content in it is extracted as a text snippet. In TEXT_SNIPPET case, the column content itself is treated as to be imported text snippet. In both cases, the text snippet must be up to 500 characters long. Sample rows: TRAIN,"@freewrytin this is way too good for your product",2 TRAIN,"I need this product so bad",3 TEST,"Thank you for this product.",4 VALIDATE,gs://folder/content.txt,2 * For Tables: Either gcs_source or bigquery_source can be used. All inputs is concatenated into a single primary_table For gcs_source: CSV file(s), where the first row of the first file is the header, containing unique column names. If the first row of a subsequent file is the same as the header, then it is also treated as a header. All other rows contain values for the corresponding columns. Each .CSV file by itself must be 10GB or smaller, and their total size must be 100GB or smaller. First three sample rows of a CSV file: "Id","First Name","Last Name","Dob","Addresses" "1","John","Doe","1968-01-22","[{"status":"current","address":"123_First_Avenue","city":"Seattle","state":"WA","zip":"11111","numberOfYears":"1"},{"status":"previous","address":"456_Main_Street","city":"Portland","state":"OR","zip":"22222","numberOfYears":"5"}]" "2","Jane","Doe","1980-10-16","[{"status":"current","address":"789_Any_Avenue","city":"Albany","state":"NY","zip":"33333","numberOfYears":"2"},{"status":"previous","address":"321_Main_Street","city":"Hoboken","state":"NJ","zip":"44444","numberOfYears":"3"}]} For bigquery_source: An URI of a BigQuery table. The user data size of the BigQuery table must be 100GB or smaller. An imported table must have between 2 and 1,000 columns, inclusive, and between 1000 and 100,000,000 rows, inclusive. There are at most 5 import data running in parallel. Definitions: ML_USE = "TRAIN" | "VALIDATE" | "TEST" | "UNASSIGNED" Describes how the given example (file) should be used for model training. "UNASSIGNED" can be used when user has no preference. GCS_FILE_PATH = A path to file on GCS, e.g. "gs://folder/image1.png". LABEL = A display name of an object on an image, video etc., e.g. "dog". Must be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_), and ASCII digits 0-9. For each label an AnnotationSpec is created which display_name becomes the label; AnnotationSpecs are given back in predictions. INSTANCE_ID = A positive integer that identifies a specific instance of a labeled entity on an example. Used e.g. to track two cars on a video while being able to tell apart which one is which. BOUNDING_BOX = VERTEX,VERTEX,VERTEX,VERTEX | VERTEX,,,VERTEX,, A rectangle parallel to the frame of the example (image, video). If 4 vertices are given they are connected by edges in the order provided, if 2 are given they are recognized as diagonally opposite vertices of the rectangle. VERTEX = COORDINATE,COORDINATE First coordinate is horizontal (x), the second is vertical (y). COORDINATE = A float in 0 to 1 range, relative to total length of image or video in given dimension. For fractions the leading non-decimal 0 can be omitted (i.e. 0.3 = .3). Point 0,0 is in top left. TIME_SEGMENT_START = TIME_OFFSET Expresses a beginning, inclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_SEGMENT_END = TIME_OFFSET Expresses an end, exclusive, of a time segment within an example that has a time dimension (e.g. video). TIME_OFFSET = A number of seconds as measured from the start of an example (e.g. video). Fractions are allowed, up to a microsecond precision. "inf" is allowed, and it means the end of the example. TEXT_SNIPPET = A content of a text snippet, UTF-8 encoded, enclosed within double quotes (""). SENTIMENT = An integer between 0 and Dataset.text_sentiment_dataset_metadata.sentiment_max (inclusive). Describes the ordinal of the sentiment - higher value means a more positive sentiment. All the values are completely relative, i.e. neither 0 needs to mean a negative or neutral sentiment nor sentiment_max needs to mean a positive one - it is just required that 0 is the least positive sentiment in the data, and sentiment_max is the most positive one. The SENTIMENT shouldn't be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API. All SENTIMENT values between 0 and sentiment_max must be represented in the imported data. On prediction the same 0 to sentiment_max range will be used. The difference between neighboring sentiment values needs not to be uniform, e.g. 1 and 2 may be similar whereas the difference between 2 and 3 may be huge. Errors: If any of the provided CSV files can't be parsed or if more than certain percent of CSV rows cannot be processed then the operation fails and nothing is imported. Regardless of overall success or failure the per-row failures, up to a certain count cap, is listed in Operation.metadata.partial_failures.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigquerySource|[BigQuerySource](#schemabigquerysource)|false|none|The BigQuery location for the input content.|
|gcsSource|[GcsSource](#schemagcssource)|false|none|The Google Cloud Storage location for the input content. In ImportData, the gcs_source points to a csv with structure described in the comment.|
|params|object|false|none|Additional domain-specific parameters describing the semantic of the imported data, any string must be up to 25000 characters long. * For Tables: `schema_inference_version` - (integer) Required. The version of the algorithm that should be used for the initial inference of the schema (columns' DataTypes) of the table the data is being imported into. Allowed values: "1".|

<h2 id="tocS_Layout">Layout</h2>
<!-- backwards compatibility -->
<a id="schemalayout"></a>
<a id="schema_Layout"></a>
<a id="tocSlayout"></a>
<a id="tocslayout"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "pageNumber": 0,
  "textSegment": {
    "content": "string",
    "endOffset": "string",
    "startOffset": "string"
  },
  "textSegmentType": "TEXT_SEGMENT_TYPE_UNSPECIFIED"
}
```

Describes the layout information of a text_segment in the document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[BoundingPoly](#schemaboundingpoly)|false|none|The position of the text_segment in the page. Contains exactly 4 normalized_vertices and they are connected by edges in the order provided, which will represent a rectangle parallel to the frame. The NormalizedVertex-s are relative to the page. Coordinates are based on top-left as point (0,0).|
|pageNumber|integer(int32)|false|none|Page number of the text_segment in the original document, starts from 1.|
|textSegment|[TextSegment](#schematextsegment)|false|none|Text Segment that represents a segment in document_text.|
|textSegmentType|string|false|none|The type of the text_segment in document.|

#### Enumerated Values

|Property|Value|
|---|---|
|textSegmentType|TEXT_SEGMENT_TYPE_UNSPECIFIED|
|textSegmentType|TOKEN|
|textSegmentType|PARAGRAPH|
|textSegmentType|FORM_FIELD|
|textSegmentType|FORM_FIELD_NAME|
|textSegmentType|FORM_FIELD_CONTENTS|
|textSegmentType|TABLE|
|textSegmentType|TABLE_HEADER|
|textSegmentType|TABLE_ROW|
|textSegmentType|TABLE_CELL|

<h2 id="tocS_ListColumnSpecsResponse">ListColumnSpecsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcolumnspecsresponse"></a>
<a id="schema_ListColumnSpecsResponse"></a>
<a id="tocSlistcolumnspecsresponse"></a>
<a id="tocslistcolumnspecsresponse"></a>

```json
{
  "columnSpecs": [
    {
      "dataStats": {
        "arrayStats": {},
        "categoryStats": {
          "topCategoryStats": [
            {
              "count": "string",
              "value": "string"
            }
          ]
        },
        "distinctValueCount": "string",
        "float64Stats": {
          "histogramBuckets": [
            {
              "count": "string",
              "max": 0,
              "min": 0
            }
          ],
          "mean": 0,
          "quantiles": [
            0
          ],
          "standardDeviation": 0
        },
        "nullValueCount": "string",
        "stringStats": {
          "topUnigramStats": [
            {
              "count": "string",
              "value": "string"
            }
          ]
        },
        "structStats": {},
        "timestampStats": {
          "granularStats": {
            "property1": {
              "buckets": {
                "property1": "string",
                "property2": "string"
              }
            },
            "property2": {
              "buckets": {
                "property1": "string",
                "property2": "string"
              }
            }
          }
        },
        "validValueCount": "string"
      },
      "dataType": {
        "listElementType": {},
        "nullable": true,
        "structType": {},
        "timeFormat": "string",
        "typeCode": "TYPE_CODE_UNSPECIFIED"
      },
      "displayName": "string",
      "etag": "string",
      "name": "string",
      "topCorrelatedColumns": [
        {
          "columnSpecId": "string",
          "correlationStats": {
            "cramersV": 0
          }
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

Response message for AutoMl.ListColumnSpecs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnSpecs|[[ColumnSpec](#schemacolumnspec)]|false|none|The column specs read.|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass to ListColumnSpecsRequest.page_token to obtain that page.|

<h2 id="tocS_ListDatasetsResponse">ListDatasetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasetsresponse"></a>
<a id="schema_ListDatasetsResponse"></a>
<a id="tocSlistdatasetsresponse"></a>
<a id="tocslistdatasetsresponse"></a>

```json
{
  "datasets": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "etag": "string",
      "exampleCount": 0,
      "imageClassificationDatasetMetadata": {
        "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
      },
      "imageObjectDetectionDatasetMetadata": {},
      "name": "string",
      "tablesDatasetMetadata": {
        "mlUseColumnSpecId": "string",
        "primaryTableSpecId": "string",
        "statsUpdateTime": "string",
        "targetColumnCorrelations": {
          "property1": {
            "cramersV": 0
          },
          "property2": {
            "cramersV": 0
          }
        },
        "targetColumnSpecId": "string",
        "weightColumnSpecId": "string"
      },
      "textClassificationDatasetMetadata": {
        "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
      },
      "textExtractionDatasetMetadata": {},
      "textSentimentDatasetMetadata": {
        "sentimentMax": 0
      },
      "translationDatasetMetadata": {
        "sourceLanguageCode": "string",
        "targetLanguageCode": "string"
      },
      "videoClassificationDatasetMetadata": {},
      "videoObjectTrackingDatasetMetadata": {}
    }
  ],
  "nextPageToken": "string"
}
```

Response message for AutoMl.ListDatasets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasets|[[Dataset](#schemadataset)]|false|none|The datasets read.|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass to ListDatasetsRequest.page_token to obtain that page.|

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

<h2 id="tocS_ListModelEvaluationsResponse">ListModelEvaluationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelevaluationsresponse"></a>
<a id="schema_ListModelEvaluationsResponse"></a>
<a id="tocSlistmodelevaluationsresponse"></a>
<a id="tocslistmodelevaluationsresponse"></a>

```json
{
  "modelEvaluation": [
    {
      "annotationSpecId": "string",
      "classificationEvaluationMetrics": {
        "annotationSpecId": [
          "string"
        ],
        "auPrc": 0,
        "auRoc": 0,
        "baseAuPrc": 0,
        "confidenceMetricsEntry": [
          {
            "confidenceThreshold": 0,
            "f1Score": 0,
            "f1ScoreAt1": 0,
            "falseNegativeCount": "string",
            "falsePositiveCount": "string",
            "falsePositiveRate": 0,
            "falsePositiveRateAt1": 0,
            "positionThreshold": 0,
            "precision": 0,
            "precisionAt1": 0,
            "recall": 0,
            "recallAt1": 0,
            "trueNegativeCount": "string",
            "truePositiveCount": "string"
          }
        ],
        "confusionMatrix": {
          "annotationSpecId": [
            "string"
          ],
          "displayName": [
            "string"
          ],
          "row": [
            {
              "exampleCount": [
                0
              ]
            }
          ]
        },
        "logLoss": 0
      },
      "createTime": "string",
      "displayName": "string",
      "evaluatedExampleCount": 0,
      "imageObjectDetectionEvaluationMetrics": {
        "boundingBoxMeanAveragePrecision": 0,
        "boundingBoxMetricsEntries": [
          {
            "confidenceMetricsEntries": [
              {
                "confidenceThreshold": 0,
                "f1Score": 0,
                "precision": 0,
                "recall": 0
              }
            ],
            "iouThreshold": 0,
            "meanAveragePrecision": 0
          }
        ],
        "evaluatedBoundingBoxCount": 0
      },
      "name": "string",
      "regressionEvaluationMetrics": {
        "meanAbsoluteError": 0,
        "meanAbsolutePercentageError": 0,
        "rSquared": 0,
        "rootMeanSquaredError": 0,
        "rootMeanSquaredLogError": 0
      },
      "textExtractionEvaluationMetrics": {
        "auPrc": 0,
        "confidenceMetricsEntries": [
          {
            "confidenceThreshold": 0,
            "f1Score": 0,
            "precision": 0,
            "recall": 0
          }
        ]
      },
      "textSentimentEvaluationMetrics": {
        "annotationSpecId": [
          "string"
        ],
        "confusionMatrix": {
          "annotationSpecId": [
            "string"
          ],
          "displayName": [
            "string"
          ],
          "row": [
            {
              "exampleCount": [
                0
              ]
            }
          ]
        },
        "f1Score": 0,
        "linearKappa": 0,
        "meanAbsoluteError": 0,
        "meanSquaredError": 0,
        "precision": 0,
        "quadraticKappa": 0,
        "recall": 0
      },
      "translationEvaluationMetrics": {
        "baseBleuScore": 0,
        "bleuScore": 0
      },
      "videoObjectTrackingEvaluationMetrics": {
        "boundingBoxMeanAveragePrecision": 0,
        "boundingBoxMetricsEntries": [
          {
            "confidenceMetricsEntries": [
              {
                "confidenceThreshold": 0,
                "f1Score": 0,
                "precision": 0,
                "recall": 0
              }
            ],
            "iouThreshold": 0,
            "meanAveragePrecision": 0
          }
        ],
        "evaluatedBoundingBoxCount": 0,
        "evaluatedFrameCount": 0
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for AutoMl.ListModelEvaluations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelEvaluation|[[ModelEvaluation](#schemamodelevaluation)]|false|none|List of model evaluations in the requested page.|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass to the ListModelEvaluationsRequest.page_token field of a new AutoMl.ListModelEvaluations request to obtain that page.|

<h2 id="tocS_ListModelsResponse">ListModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmodelsresponse"></a>
<a id="schema_ListModelsResponse"></a>
<a id="tocSlistmodelsresponse"></a>
<a id="tocslistmodelsresponse"></a>

```json
{
  "model": [
    {
      "createTime": "string",
      "datasetId": "string",
      "deploymentState": "DEPLOYMENT_STATE_UNSPECIFIED",
      "displayName": "string",
      "imageClassificationModelMetadata": {
        "baseModelId": "string",
        "modelType": "string",
        "nodeCount": "string",
        "nodeQps": 0,
        "stopReason": "string",
        "trainBudget": "string",
        "trainCost": "string"
      },
      "imageObjectDetectionModelMetadata": {
        "modelType": "string",
        "nodeCount": "string",
        "nodeQps": 0,
        "stopReason": "string",
        "trainBudgetMilliNodeHours": "string",
        "trainCostMilliNodeHours": "string"
      },
      "name": "string",
      "tablesModelMetadata": {
        "disableEarlyStopping": true,
        "inputFeatureColumnSpecs": [
          {
            "dataStats": {
              "arrayStats": {},
              "categoryStats": {
                "topCategoryStats": [
                  {
                    "count": "string",
                    "value": "string"
                  }
                ]
              },
              "distinctValueCount": "string",
              "float64Stats": {
                "histogramBuckets": [
                  {
                    "count": "string",
                    "max": 0,
                    "min": 0
                  }
                ],
                "mean": 0,
                "quantiles": [
                  0
                ],
                "standardDeviation": 0
              },
              "nullValueCount": "string",
              "stringStats": {
                "topUnigramStats": [
                  {
                    "count": "string",
                    "value": "string"
                  }
                ]
              },
              "structStats": {},
              "timestampStats": {
                "granularStats": {
                  "property1": {
                    "buckets": {
                      "property1": "string",
                      "property2": "string"
                    }
                  },
                  "property2": {
                    "buckets": {
                      "property1": "string",
                      "property2": "string"
                    }
                  }
                }
              },
              "validValueCount": "string"
            },
            "dataType": {
              "listElementType": {},
              "nullable": true,
              "structType": {},
              "timeFormat": "string",
              "typeCode": "TYPE_CODE_UNSPECIFIED"
            },
            "displayName": "string",
            "etag": "string",
            "name": "string",
            "topCorrelatedColumns": [
              {
                "columnSpecId": "string",
                "correlationStats": {
                  "cramersV": 0
                }
              }
            ]
          }
        ],
        "optimizationObjective": "string",
        "optimizationObjectivePrecisionValue": 0,
        "optimizationObjectiveRecallValue": 0,
        "tablesModelColumnInfo": [
          {
            "columnDisplayName": "string",
            "columnSpecName": "string",
            "featureImportance": 0
          }
        ],
        "targetColumnSpec": {
          "dataStats": {
            "arrayStats": {},
            "categoryStats": {
              "topCategoryStats": [
                {
                  "count": "string",
                  "value": "string"
                }
              ]
            },
            "distinctValueCount": "string",
            "float64Stats": {
              "histogramBuckets": [
                {
                  "count": "string",
                  "max": 0,
                  "min": 0
                }
              ],
              "mean": 0,
              "quantiles": [
                0
              ],
              "standardDeviation": 0
            },
            "nullValueCount": "string",
            "stringStats": {
              "topUnigramStats": [
                {
                  "count": "string",
                  "value": "string"
                }
              ]
            },
            "structStats": {},
            "timestampStats": {
              "granularStats": {
                "property1": {
                  "buckets": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "property2": {
                  "buckets": {
                    "property1": "string",
                    "property2": "string"
                  }
                }
              }
            },
            "validValueCount": "string"
          },
          "dataType": {
            "listElementType": {},
            "nullable": true,
            "structType": {},
            "timeFormat": "string",
            "typeCode": "TYPE_CODE_UNSPECIFIED"
          },
          "displayName": "string",
          "etag": "string",
          "name": "string",
          "topCorrelatedColumns": [
            {
              "columnSpecId": "string",
              "correlationStats": {
                "cramersV": 0
              }
            }
          ]
        },
        "trainBudgetMilliNodeHours": "string",
        "trainCostMilliNodeHours": "string"
      },
      "textClassificationModelMetadata": {
        "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
      },
      "textExtractionModelMetadata": {
        "modelHint": "string"
      },
      "textSentimentModelMetadata": {},
      "trainExampleCount": 0,
      "translationModelMetadata": {
        "baseModel": "string",
        "sourceLanguageCode": "string",
        "targetLanguageCode": "string"
      },
      "updateTime": "string",
      "validateExampleCount": 0,
      "videoClassificationModelMetadata": {},
      "videoObjectTrackingModelMetadata": {}
    }
  ],
  "nextPageToken": "string"
}
```

Response message for AutoMl.ListModels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|[[Model](#schemamodel)]|false|none|List of models in the requested page.|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass to ListModelsRequest.page_token to obtain that page.|

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

<h2 id="tocS_ListTableSpecsResponse">ListTableSpecsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttablespecsresponse"></a>
<a id="schema_ListTableSpecsResponse"></a>
<a id="tocSlisttablespecsresponse"></a>
<a id="tocslisttablespecsresponse"></a>

```json
{
  "nextPageToken": "string",
  "tableSpecs": [
    {
      "columnCount": "string",
      "etag": "string",
      "inputConfigs": [
        {
          "bigquerySource": {
            "inputUri": "string"
          },
          "gcsSource": {
            "inputUris": [
              "string"
            ]
          },
          "params": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "name": "string",
      "rowCount": "string",
      "timeColumnSpecId": "string",
      "validRowCount": "string"
    }
  ]
}
```

Response message for AutoMl.ListTableSpecs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve next page of results. Pass to ListTableSpecsRequest.page_token to obtain that page.|
|tableSpecs|[[TableSpec](#schematablespec)]|false|none|The table specs read.|

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

A resource that represents Google Cloud Platform location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The friendly name for this location, typically a nearby city name. For example, "Tokyo".|
|labels|object|false|none|Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}|
|locationId|string|false|none|The canonical id for this location. For example: `"us-east1"`.|
|metadata|object|false|none|Service-specific metadata. For example the available capacity at the given location.|
|name|string|false|none|Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`|

<h2 id="tocS_Model">Model</h2>
<!-- backwards compatibility -->
<a id="schemamodel"></a>
<a id="schema_Model"></a>
<a id="tocSmodel"></a>
<a id="tocsmodel"></a>

```json
{
  "createTime": "string",
  "datasetId": "string",
  "deploymentState": "DEPLOYMENT_STATE_UNSPECIFIED",
  "displayName": "string",
  "imageClassificationModelMetadata": {
    "baseModelId": "string",
    "modelType": "string",
    "nodeCount": "string",
    "nodeQps": 0,
    "stopReason": "string",
    "trainBudget": "string",
    "trainCost": "string"
  },
  "imageObjectDetectionModelMetadata": {
    "modelType": "string",
    "nodeCount": "string",
    "nodeQps": 0,
    "stopReason": "string",
    "trainBudgetMilliNodeHours": "string",
    "trainCostMilliNodeHours": "string"
  },
  "name": "string",
  "tablesModelMetadata": {
    "disableEarlyStopping": true,
    "inputFeatureColumnSpecs": [
      {
        "dataStats": {
          "arrayStats": {},
          "categoryStats": {
            "topCategoryStats": [
              {
                "count": "string",
                "value": "string"
              }
            ]
          },
          "distinctValueCount": "string",
          "float64Stats": {
            "histogramBuckets": [
              {
                "count": "string",
                "max": 0,
                "min": 0
              }
            ],
            "mean": 0,
            "quantiles": [
              0
            ],
            "standardDeviation": 0
          },
          "nullValueCount": "string",
          "stringStats": {
            "topUnigramStats": [
              {
                "count": "string",
                "value": "string"
              }
            ]
          },
          "structStats": {},
          "timestampStats": {
            "granularStats": {
              "property1": {
                "buckets": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "property2": {
                "buckets": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            }
          },
          "validValueCount": "string"
        },
        "dataType": {
          "listElementType": {},
          "nullable": true,
          "structType": {},
          "timeFormat": "string",
          "typeCode": "TYPE_CODE_UNSPECIFIED"
        },
        "displayName": "string",
        "etag": "string",
        "name": "string",
        "topCorrelatedColumns": [
          {
            "columnSpecId": "string",
            "correlationStats": {
              "cramersV": 0
            }
          }
        ]
      }
    ],
    "optimizationObjective": "string",
    "optimizationObjectivePrecisionValue": 0,
    "optimizationObjectiveRecallValue": 0,
    "tablesModelColumnInfo": [
      {
        "columnDisplayName": "string",
        "columnSpecName": "string",
        "featureImportance": 0
      }
    ],
    "targetColumnSpec": {
      "dataStats": {
        "arrayStats": {},
        "categoryStats": {
          "topCategoryStats": [
            {
              "count": "string",
              "value": "string"
            }
          ]
        },
        "distinctValueCount": "string",
        "float64Stats": {
          "histogramBuckets": [
            {
              "count": "string",
              "max": 0,
              "min": 0
            }
          ],
          "mean": 0,
          "quantiles": [
            0
          ],
          "standardDeviation": 0
        },
        "nullValueCount": "string",
        "stringStats": {
          "topUnigramStats": [
            {
              "count": "string",
              "value": "string"
            }
          ]
        },
        "structStats": {},
        "timestampStats": {
          "granularStats": {
            "property1": {
              "buckets": {
                "property1": "string",
                "property2": "string"
              }
            },
            "property2": {
              "buckets": {
                "property1": "string",
                "property2": "string"
              }
            }
          }
        },
        "validValueCount": "string"
      },
      "dataType": {
        "listElementType": {},
        "nullable": true,
        "structType": {},
        "timeFormat": "string",
        "typeCode": "TYPE_CODE_UNSPECIFIED"
      },
      "displayName": "string",
      "etag": "string",
      "name": "string",
      "topCorrelatedColumns": [
        {
          "columnSpecId": "string",
          "correlationStats": {
            "cramersV": 0
          }
        }
      ]
    },
    "trainBudgetMilliNodeHours": "string",
    "trainCostMilliNodeHours": "string"
  },
  "textClassificationModelMetadata": {
    "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
  },
  "textExtractionModelMetadata": {
    "modelHint": "string"
  },
  "textSentimentModelMetadata": {},
  "trainExampleCount": 0,
  "translationModelMetadata": {
    "baseModel": "string",
    "sourceLanguageCode": "string",
    "targetLanguageCode": "string"
  },
  "updateTime": "string",
  "validateExampleCount": 0,
  "videoClassificationModelMetadata": {},
  "videoObjectTrackingModelMetadata": {}
}
```

API proto representing a trained machine learning model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. Timestamp when the model training finished and can be used for prediction.|
|datasetId|string|false|none|Required. The resource ID of the dataset used to create the model. The dataset must come from the same ancestor project and location.|
|deploymentState|string|false|none|Output only. Deployment state of the model. A model can only serve prediction requests after it gets deployed.|
|displayName|string|false|none|Required. The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. It must start with a letter.|
|imageClassificationModelMetadata|[ImageClassificationModelMetadata](#schemaimageclassificationmodelmetadata)|false|none|Metadata for image classification models.|
|imageObjectDetectionModelMetadata|[ImageObjectDetectionModelMetadata](#schemaimageobjectdetectionmodelmetadata)|false|none|Metadata for image object detection models.|
|name|string|false|none|Output only. Resource name of the model. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}`|
|tablesModelMetadata|[TablesModelMetadata](#schematablesmodelmetadata)|false|none|Metadata for Tables models.|
|textClassificationModelMetadata|[TextClassificationModelMetadata](#schematextclassificationmodelmetadata)|false|none|Metadata for text classification models.|
|textExtractionModelMetadata|[TextExtractionModelMetadata](#schematextextractionmodelmetadata)|false|none|Metadata for text extraction models.|
|textSentimentModelMetadata|[TextSentimentModelMetadata](#schematextsentimentmodelmetadata)|false|none|Metadata for text sentiment models.|
|trainExampleCount|integer(int32)|false|read-only|Output only. The number of examples in the training set used for the model creation.|
|translationModelMetadata|[TranslationModelMetadata](#schematranslationmodelmetadata)|false|none|Metadata for translation models.|
|updateTime|string(google-datetime)|false|none|Output only. Timestamp when this model was last updated.|
|validateExampleCount|integer(int32)|false|read-only|Output only. The number of examples in the validation set used for the model creation.|
|videoClassificationModelMetadata|[VideoClassificationModelMetadata](#schemavideoclassificationmodelmetadata)|false|none|Metadata for video classification models.|
|videoObjectTrackingModelMetadata|[VideoObjectTrackingModelMetadata](#schemavideoobjecttrackingmodelmetadata)|false|none|Metadata for video object tracking models.|

#### Enumerated Values

|Property|Value|
|---|---|
|deploymentState|DEPLOYMENT_STATE_UNSPECIFIED|
|deploymentState|DEPLOYED|
|deploymentState|UNDEPLOYED|

<h2 id="tocS_ModelEvaluation">ModelEvaluation</h2>
<!-- backwards compatibility -->
<a id="schemamodelevaluation"></a>
<a id="schema_ModelEvaluation"></a>
<a id="tocSmodelevaluation"></a>
<a id="tocsmodelevaluation"></a>

```json
{
  "annotationSpecId": "string",
  "classificationEvaluationMetrics": {
    "annotationSpecId": [
      "string"
    ],
    "auPrc": 0,
    "auRoc": 0,
    "baseAuPrc": 0,
    "confidenceMetricsEntry": [
      {
        "confidenceThreshold": 0,
        "f1Score": 0,
        "f1ScoreAt1": 0,
        "falseNegativeCount": "string",
        "falsePositiveCount": "string",
        "falsePositiveRate": 0,
        "falsePositiveRateAt1": 0,
        "positionThreshold": 0,
        "precision": 0,
        "precisionAt1": 0,
        "recall": 0,
        "recallAt1": 0,
        "trueNegativeCount": "string",
        "truePositiveCount": "string"
      }
    ],
    "confusionMatrix": {
      "annotationSpecId": [
        "string"
      ],
      "displayName": [
        "string"
      ],
      "row": [
        {
          "exampleCount": [
            0
          ]
        }
      ]
    },
    "logLoss": 0
  },
  "createTime": "string",
  "displayName": "string",
  "evaluatedExampleCount": 0,
  "imageObjectDetectionEvaluationMetrics": {
    "boundingBoxMeanAveragePrecision": 0,
    "boundingBoxMetricsEntries": [
      {
        "confidenceMetricsEntries": [
          {
            "confidenceThreshold": 0,
            "f1Score": 0,
            "precision": 0,
            "recall": 0
          }
        ],
        "iouThreshold": 0,
        "meanAveragePrecision": 0
      }
    ],
    "evaluatedBoundingBoxCount": 0
  },
  "name": "string",
  "regressionEvaluationMetrics": {
    "meanAbsoluteError": 0,
    "meanAbsolutePercentageError": 0,
    "rSquared": 0,
    "rootMeanSquaredError": 0,
    "rootMeanSquaredLogError": 0
  },
  "textExtractionEvaluationMetrics": {
    "auPrc": 0,
    "confidenceMetricsEntries": [
      {
        "confidenceThreshold": 0,
        "f1Score": 0,
        "precision": 0,
        "recall": 0
      }
    ]
  },
  "textSentimentEvaluationMetrics": {
    "annotationSpecId": [
      "string"
    ],
    "confusionMatrix": {
      "annotationSpecId": [
        "string"
      ],
      "displayName": [
        "string"
      ],
      "row": [
        {
          "exampleCount": [
            0
          ]
        }
      ]
    },
    "f1Score": 0,
    "linearKappa": 0,
    "meanAbsoluteError": 0,
    "meanSquaredError": 0,
    "precision": 0,
    "quadraticKappa": 0,
    "recall": 0
  },
  "translationEvaluationMetrics": {
    "baseBleuScore": 0,
    "bleuScore": 0
  },
  "videoObjectTrackingEvaluationMetrics": {
    "boundingBoxMeanAveragePrecision": 0,
    "boundingBoxMetricsEntries": [
      {
        "confidenceMetricsEntries": [
          {
            "confidenceThreshold": 0,
            "f1Score": 0,
            "precision": 0,
            "recall": 0
          }
        ],
        "iouThreshold": 0,
        "meanAveragePrecision": 0
      }
    ],
    "evaluatedBoundingBoxCount": 0,
    "evaluatedFrameCount": 0
  }
}
```

Evaluation results of a model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecId|string|false|none|Output only. The ID of the annotation spec that the model evaluation applies to. The The ID is empty for the overall model evaluation. For Tables annotation specs in the dataset do not exist and this ID is always not set, but for CLASSIFICATION prediction_type-s the display_name field is used.|
|classificationEvaluationMetrics|[ClassificationEvaluationMetrics](#schemaclassificationevaluationmetrics)|false|none|Model evaluation metrics for image, text, video and tables classification. Tables problem is considered a classification when the target column is CATEGORY DataType.|
|createTime|string(google-datetime)|false|none|Output only. Timestamp when this model evaluation was created.|
|displayName|string|false|none|Output only. The value of display_name at the moment when the model was trained. Because this field returns a value at model training time, for different models trained from the same dataset, the values may differ, since display names could had been changed between the two model's trainings. For Tables CLASSIFICATION prediction_type-s distinct values of the target column at the moment of the model evaluation are populated here. The display_name is empty for the overall model evaluation.|
|evaluatedExampleCount|integer(int32)|false|none|Output only. The number of examples used for model evaluation, i.e. for which ground truth from time of model creation is compared against the predicted annotations created by the model. For overall ModelEvaluation (i.e. with annotation_spec_id not set) this is the total number of all examples used for evaluation. Otherwise, this is the count of examples that according to the ground truth were annotated by the annotation_spec_id.|
|imageObjectDetectionEvaluationMetrics|[ImageObjectDetectionEvaluationMetrics](#schemaimageobjectdetectionevaluationmetrics)|false|none|Model evaluation metrics for image object detection.|
|name|string|false|none|Output only. Resource name of the model evaluation. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}/modelEvaluations/{model_evaluation_id}`|
|regressionEvaluationMetrics|[RegressionEvaluationMetrics](#schemaregressionevaluationmetrics)|false|none|Model evaluation metrics for Tables regression. Tables problem is considered a regression when the target column has FLOAT64 DataType.|
|textExtractionEvaluationMetrics|[TextExtractionEvaluationMetrics](#schematextextractionevaluationmetrics)|false|none|Evaluation metrics for text extraction models.|
|textSentimentEvaluationMetrics|[TextSentimentEvaluationMetrics](#schematextsentimentevaluationmetrics)|false|none|Evaluation metrics for text sentiment models.|
|translationEvaluationMetrics|[TranslationEvaluationMetrics](#schematranslationevaluationmetrics)|false|none|Model evaluation metrics for translation.|
|videoObjectTrackingEvaluationMetrics|[VideoObjectTrackingEvaluationMetrics](#schemavideoobjecttrackingevaluationmetrics)|false|none|Model evaluation metrics for video object tracking.|

<h2 id="tocS_ModelExportOutputConfig">ModelExportOutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemamodelexportoutputconfig"></a>
<a id="schema_ModelExportOutputConfig"></a>
<a id="tocSmodelexportoutputconfig"></a>
<a id="tocsmodelexportoutputconfig"></a>

```json
{
  "gcrDestination": {
    "outputUri": "string"
  },
  "gcsDestination": {
    "outputUriPrefix": "string"
  },
  "modelFormat": "string",
  "params": {
    "property1": "string",
    "property2": "string"
  }
}
```

Output configuration for ModelExport Action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcrDestination|[GcrDestination](#schemagcrdestination)|false|none|The GCR location where model image is to be pushed to. This location may only be set for the following model formats: "docker". The model image will be created under the given URI.|
|gcsDestination|[GcsDestination](#schemagcsdestination)|false|none|The Google Cloud Storage location where the model is to be written to. This location may only be set for the following model formats: "tflite", "edgetpu_tflite", "tf_saved_model", "tf_js", "core_ml". Under the directory given as the destination a new one with name "model-export--", where timestamp is in YYYY-MM-DDThh:mm:ss.sssZ ISO-8601 format, will be created. Inside the model and any of its supporting files will be written.|
|modelFormat|string|false|none|The format in which the model must be exported. The available, and default, formats depend on the problem and model type (if given problem and type combination doesn't have a format listed, it means its models are not exportable): * For Image Classification mobile-low-latency-1, mobile-versatile-1, mobile-high-accuracy-1: "tflite" (default), "edgetpu_tflite", "tf_saved_model", "tf_js", "docker". * For Image Classification mobile-core-ml-low-latency-1, mobile-core-ml-versatile-1, mobile-core-ml-high-accuracy-1: "core_ml" (default). * For Image Object Detection mobile-low-latency-1, mobile-versatile-1, mobile-high-accuracy-1: "tflite", "tf_saved_model", "tf_js". * For Video Classification cloud, "tf_saved_model". * For Video Object Tracking cloud, "tf_saved_model". * For Video Object Tracking mobile-versatile-1: "tflite", "edgetpu_tflite", "tf_saved_model", "docker". * For Video Object Tracking mobile-coral-versatile-1: "tflite", "edgetpu_tflite", "docker". * For Video Object Tracking mobile-coral-low-latency-1: "tflite", "edgetpu_tflite", "docker". * For Video Object Tracking mobile-jetson-versatile-1: "tf_saved_model", "docker". * For Tables: "docker". Formats description: * tflite - Used for Android mobile devices. * edgetpu_tflite - Used for [Edge TPU](https://cloud.google.com/edge-tpu/) devices. * tf_saved_model - A tensorflow model in SavedModel format. * tf_js - A [TensorFlow.js](https://www.tensorflow.org/js) model that can be used in the browser and in Node.js using JavaScript. * docker - Used for Docker containers. Use the params field to customize the container. The container is verified to work correctly on ubuntu 16.04 operating system. See more at [containers quickstart](https: //cloud.google.com/vision/automl/docs/containers-gcs-quickstart) * core_ml - Used for iOS mobile devices.|
|params|object|false|none|Additional model-type and format specific parameters describing the requirements for the to be exported model files, any string must be up to 25000 characters long. * For `docker` format: `cpu_architecture` - (string) "x86_64" (default). `gpu_architecture` - (string) "none" (default), "nvidia".|

<h2 id="tocS_NormalizedVertex">NormalizedVertex</h2>
<!-- backwards compatibility -->
<a id="schemanormalizedvertex"></a>
<a id="schema_NormalizedVertex"></a>
<a id="tocSnormalizedvertex"></a>
<a id="tocsnormalizedvertex"></a>

```json
{
  "x": 0,
  "y": 0
}
```

A vertex represents a 2D point in the image. The normalized vertex coordinates are between 0 to 1 fractions relative to the original plane (image, video). E.g. if the plane (e.g. whole image) would have size 10 x 20 then a point with normalized coordinates (0.1, 0.3) would be at the position (1, 6) on that plane.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number(float)|false|none|Required. Horizontal coordinate.|
|y|number(float)|false|none|Required. Vertical coordinate.|

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

<h2 id="tocS_OperationMetadata">OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadata"></a>
<a id="schema_OperationMetadata"></a>
<a id="tocSoperationmetadata"></a>
<a id="tocsoperationmetadata"></a>

```json
{
  "batchPredictDetails": {
    "inputConfig": {
      "bigquerySource": {
        "inputUri": "string"
      },
      "gcsSource": {
        "inputUris": [
          "string"
        ]
      }
    },
    "outputInfo": {
      "bigqueryOutputDataset": "string",
      "gcsOutputDirectory": "string"
    }
  },
  "createModelDetails": {},
  "createTime": "string",
  "deleteDetails": {},
  "deployModelDetails": {},
  "exportDataDetails": {
    "outputInfo": {
      "bigqueryOutputDataset": "string",
      "gcsOutputDirectory": "string"
    }
  },
  "exportEvaluatedExamplesDetails": {
    "outputInfo": {
      "bigqueryOutputDataset": "string"
    }
  },
  "exportModelDetails": {
    "outputInfo": {
      "gcsOutputDirectory": "string"
    }
  },
  "importDataDetails": {},
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
  "undeployModelDetails": {},
  "updateTime": "string"
}
```

Metadata used across all long running operations returned by AutoML API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchPredictDetails|[BatchPredictOperationMetadata](#schemabatchpredictoperationmetadata)|false|none|Details of BatchPredict operation.|
|createModelDetails|[CreateModelOperationMetadata](#schemacreatemodeloperationmetadata)|false|none|Details of CreateModel operation.|
|createTime|string(google-datetime)|false|none|Output only. Time when the operation was created.|
|deleteDetails|[DeleteOperationMetadata](#schemadeleteoperationmetadata)|false|none|Details of a Delete operation.|
|deployModelDetails|[DeployModelOperationMetadata](#schemadeploymodeloperationmetadata)|false|none|Details of a DeployModel operation.|
|exportDataDetails|[ExportDataOperationMetadata](#schemaexportdataoperationmetadata)|false|none|Details of ExportData operation.|
|exportEvaluatedExamplesDetails|[ExportEvaluatedExamplesOperationMetadata](#schemaexportevaluatedexamplesoperationmetadata)|false|none|Details of ExportEvaluatedExamples operation.|
|exportModelDetails|[ExportModelOperationMetadata](#schemaexportmodeloperationmetadata)|false|none|Details of ExportModel operation.|
|importDataDetails|[ImportDataOperationMetadata](#schemaimportdataoperationmetadata)|false|none|Details of ImportData operation.|
|partialFailures|[[Status](#schemastatus)]|false|none|Output only. Partial failures encountered. E.g. single files that couldn't be read. This field should never exceed 20 entries. Status details field will contain standard GCP error details.|
|progressPercent|integer(int32)|false|none|Output only. Progress of operation. Range: [0, 100]. Not used currently.|
|undeployModelDetails|[UndeployModelOperationMetadata](#schemaundeploymodeloperationmetadata)|false|none|Details of an UndeployModel operation.|
|updateTime|string(google-datetime)|false|none|Output only. Time when the operation was updated for the last time.|

<h2 id="tocS_OutputConfig">OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoutputconfig"></a>
<a id="schema_OutputConfig"></a>
<a id="tocSoutputconfig"></a>
<a id="tocsoutputconfig"></a>

```json
{
  "bigqueryDestination": {
    "outputUri": "string"
  },
  "gcsDestination": {
    "outputUriPrefix": "string"
  }
}
```

* For Translation: CSV file `translation.csv`, with each line in format: ML_USE,GCS_FILE_PATH GCS_FILE_PATH leads to a .TSV file which describes examples that have given ML_USE, using the following row format per line: TEXT_SNIPPET (in source language) \t TEXT_SNIPPET (in target language) * For Tables: Output depends on whether the dataset was imported from GCS or BigQuery. GCS case: gcs_destination must be set. Exported are CSV file(s) `tables_1.csv`, `tables_2.csv`,...,`tables_N.csv` with each having as header line the table's column names, and all other lines contain values for the header columns. BigQuery case: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `export_data__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ "based on ISO-8601" format. In that dataset a new table called `primary_table` will be created, and filled with precisely the same data as this obtained on import.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryDestination|[BigQueryDestination](#schemabigquerydestination)|false|none|The BigQuery location where the output is to be written to.|
|gcsDestination|[GcsDestination](#schemagcsdestination)|false|none|The Google Cloud Storage location where the output is to be written to. For Image Object Detection, Text Extraction, Video Classification and Tables, in the given directory a new directory will be created with name: export_data-- where timestamp is in YYYY-MM-DDThh:mm:ss.sssZ ISO-8601 format. All export output will be written into that directory.|

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

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_PredictRequest">PredictRequest</h2>
<!-- backwards compatibility -->
<a id="schemapredictrequest"></a>
<a id="schema_PredictRequest"></a>
<a id="tocSpredictrequest"></a>
<a id="tocspredictrequest"></a>

```json
{
  "params": {
    "property1": "string",
    "property2": "string"
  },
  "payload": {
    "document": {
      "documentDimensions": {
        "height": 0,
        "unit": "DOCUMENT_DIMENSION_UNIT_UNSPECIFIED",
        "width": 0
      },
      "documentText": {
        "content": "string",
        "contentUri": "string",
        "mimeType": "string"
      },
      "inputConfig": {
        "gcsSource": {
          "inputUris": [
            "string"
          ]
        }
      },
      "layout": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "pageNumber": 0,
          "textSegment": {
            "content": "string",
            "endOffset": "string",
            "startOffset": "string"
          },
          "textSegmentType": "TEXT_SEGMENT_TYPE_UNSPECIFIED"
        }
      ],
      "pageCount": 0
    },
    "image": {
      "imageBytes": "string",
      "inputConfig": {
        "bigquerySource": {
          "inputUri": "string"
        },
        "gcsSource": {
          "inputUris": [
            "string"
          ]
        },
        "params": {
          "property1": "string",
          "property2": "string"
        }
      },
      "thumbnailUri": "string"
    },
    "row": {
      "columnSpecIds": [
        "string"
      ],
      "values": [
        null
      ]
    },
    "textSnippet": {
      "content": "string",
      "contentUri": "string",
      "mimeType": "string"
    }
  }
}
```

Request message for PredictionService.Predict.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|params|object|false|none|Additional domain-specific parameters, any string must be up to 25000 characters long. * For Image Classification: `score_threshold` - (float) A value from 0.0 to 1.0. When the model makes predictions for an image, it will only produce results that have at least this confidence score. The default is 0.5. * For Image Object Detection: `score_threshold` - (float) When Model detects objects on the image, it will only produce bounding boxes which have at least this confidence score. Value in 0 to 1 range, default is 0.5. `max_bounding_box_count` - (int64) No more than this number of bounding boxes will be returned in the response. Default is 100, the requested value may be limited by server. * For Tables: feature_importance - (boolean) Whether feature importance should be populated in the returned TablesAnnotation. The default is false.|
|payload|[ExamplePayload](#schemaexamplepayload)|false|none|Required. Payload to perform a prediction on. The payload must match the problem type that the model was trained to solve.|

<h2 id="tocS_PredictResponse">PredictResponse</h2>
<!-- backwards compatibility -->
<a id="schemapredictresponse"></a>
<a id="schema_PredictResponse"></a>
<a id="tocSpredictresponse"></a>
<a id="tocspredictresponse"></a>

```json
{
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "payload": [
    {
      "annotationSpecId": "string",
      "classification": {
        "score": 0
      },
      "displayName": "string",
      "imageObjectDetection": {
        "boundingBox": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "score": 0
      },
      "tables": {
        "baselineScore": 0,
        "predictionInterval": {
          "end": 0,
          "start": 0
        },
        "score": 0,
        "tablesModelColumnInfo": [
          {
            "columnDisplayName": "string",
            "columnSpecName": "string",
            "featureImportance": 0
          }
        ],
        "value": null
      },
      "textExtraction": {
        "score": 0,
        "textSegment": {
          "content": "string",
          "endOffset": "string",
          "startOffset": "string"
        }
      },
      "textSentiment": {
        "sentiment": 0
      },
      "translation": {
        "translatedContent": {
          "content": "string",
          "contentUri": "string",
          "mimeType": "string"
        }
      },
      "videoClassification": {
        "classificationAnnotation": {
          "score": 0
        },
        "timeSegment": {
          "endTimeOffset": "string",
          "startTimeOffset": "string"
        },
        "type": "string"
      },
      "videoObjectTracking": {
        "boundingBox": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "instanceId": "string",
        "score": 0,
        "timeOffset": "string"
      }
    }
  ],
  "preprocessedInput": {
    "document": {
      "documentDimensions": {
        "height": 0,
        "unit": "DOCUMENT_DIMENSION_UNIT_UNSPECIFIED",
        "width": 0
      },
      "documentText": {
        "content": "string",
        "contentUri": "string",
        "mimeType": "string"
      },
      "inputConfig": {
        "gcsSource": {
          "inputUris": [
            "string"
          ]
        }
      },
      "layout": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "pageNumber": 0,
          "textSegment": {
            "content": "string",
            "endOffset": "string",
            "startOffset": "string"
          },
          "textSegmentType": "TEXT_SEGMENT_TYPE_UNSPECIFIED"
        }
      ],
      "pageCount": 0
    },
    "image": {
      "imageBytes": "string",
      "inputConfig": {
        "bigquerySource": {
          "inputUri": "string"
        },
        "gcsSource": {
          "inputUris": [
            "string"
          ]
        },
        "params": {
          "property1": "string",
          "property2": "string"
        }
      },
      "thumbnailUri": "string"
    },
    "row": {
      "columnSpecIds": [
        "string"
      ],
      "values": [
        null
      ]
    },
    "textSnippet": {
      "content": "string",
      "contentUri": "string",
      "mimeType": "string"
    }
  }
}
```

Response message for PredictionService.Predict.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|object|false|none|Additional domain-specific prediction response metadata. * For Image Object Detection: `max_bounding_box_count` - (int64) At most that many bounding boxes per image could have been returned. * For Text Sentiment: `sentiment_score` - (float, deprecated) A value between -1 and 1, -1 maps to least positive sentiment, while 1 maps to the most positive one and the higher the score, the more positive the sentiment in the document is. Yet these values are relative to the training data, so e.g. if all data was positive then -1 will be also positive (though the least). The sentiment_score shouldn't be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API.|
|payload|[[AnnotationPayload](#schemaannotationpayload)]|false|none|Prediction result. Translation and Text Sentiment will return precisely one payload.|
|preprocessedInput|[ExamplePayload](#schemaexamplepayload)|false|none|The preprocessed example that AutoML actually makes prediction on. Empty if AutoML does not preprocess the input example. * For Text Extraction: If the input is a .pdf file, the OCR'ed text will be provided in document_text.|

<h2 id="tocS_RegressionEvaluationMetrics">RegressionEvaluationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaregressionevaluationmetrics"></a>
<a id="schema_RegressionEvaluationMetrics"></a>
<a id="tocSregressionevaluationmetrics"></a>
<a id="tocsregressionevaluationmetrics"></a>

```json
{
  "meanAbsoluteError": 0,
  "meanAbsolutePercentageError": 0,
  "rSquared": 0,
  "rootMeanSquaredError": 0,
  "rootMeanSquaredLogError": 0
}
```

Metrics for regression problems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meanAbsoluteError|number(float)|false|none|Output only. Mean Absolute Error (MAE).|
|meanAbsolutePercentageError|number(float)|false|none|Output only. Mean absolute percentage error. Only set if all ground truth values are are positive.|
|rSquared|number(float)|false|none|Output only. R squared.|
|rootMeanSquaredError|number(float)|false|none|Output only. Root Mean Squared Error (RMSE).|
|rootMeanSquaredLogError|number(float)|false|none|Output only. Root mean squared log error.|

<h2 id="tocS_Row">Row</h2>
<!-- backwards compatibility -->
<a id="schemarow"></a>
<a id="schema_Row"></a>
<a id="tocSrow"></a>
<a id="tocsrow"></a>

```json
{
  "columnSpecIds": [
    "string"
  ],
  "values": [
    null
  ]
}
```

A representation of a row in a relational table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnSpecIds|[string]|false|none|The resource IDs of the column specs describing the columns of the row. If set must contain, but possibly in a different order, all input feature column_spec_ids of the Model this row is being passed to. Note: The below `values` field must match order of this field, if this field is set.|
|values|[object]|false|none|Required. The values of the row cells, given in the same order as the column_spec_ids, or, if not set, then in the same order as input feature column_specs of the Model this row is being passed to.|

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

<h2 id="tocS_SingleCategoryStats">SingleCategoryStats</h2>
<!-- backwards compatibility -->
<a id="schemasinglecategorystats"></a>
<a id="schema_SingleCategoryStats"></a>
<a id="tocSsinglecategorystats"></a>
<a id="tocssinglecategorystats"></a>

```json
{
  "count": "string",
  "value": "string"
}
```

The statistics of a single CATEGORY value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string(int64)|false|none|The number of occurrences of this value in the series.|
|value|string|false|none|The CATEGORY value.|

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

<h2 id="tocS_StringStats">StringStats</h2>
<!-- backwards compatibility -->
<a id="schemastringstats"></a>
<a id="schema_StringStats"></a>
<a id="tocSstringstats"></a>
<a id="tocsstringstats"></a>

```json
{
  "topUnigramStats": [
    {
      "count": "string",
      "value": "string"
    }
  ]
}
```

The data statistics of a series of STRING values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topUnigramStats|[[UnigramStats](#schemaunigramstats)]|false|none|The statistics of the top 20 unigrams, ordered by count.|

<h2 id="tocS_StructStats">StructStats</h2>
<!-- backwards compatibility -->
<a id="schemastructstats"></a>
<a id="schema_StructStats"></a>
<a id="tocSstructstats"></a>
<a id="tocsstructstats"></a>

```json
{
  "fieldStats": {
    "property1": {
      "arrayStats": {},
      "categoryStats": {
        "topCategoryStats": [
          {
            "count": "string",
            "value": "string"
          }
        ]
      },
      "distinctValueCount": "string",
      "float64Stats": {
        "histogramBuckets": [
          {
            "count": "string",
            "max": 0,
            "min": 0
          }
        ],
        "mean": 0,
        "quantiles": [
          0
        ],
        "standardDeviation": 0
      },
      "nullValueCount": "string",
      "stringStats": {
        "topUnigramStats": [
          {
            "count": "string",
            "value": "string"
          }
        ]
      },
      "structStats": {},
      "timestampStats": {
        "granularStats": {
          "property1": {
            "buckets": {
              "property1": "string",
              "property2": "string"
            }
          },
          "property2": {
            "buckets": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      },
      "validValueCount": "string"
    },
    "property2": {
      "arrayStats": {},
      "categoryStats": {
        "topCategoryStats": [
          {
            "count": "string",
            "value": "string"
          }
        ]
      },
      "distinctValueCount": "string",
      "float64Stats": {
        "histogramBuckets": [
          {
            "count": "string",
            "max": 0,
            "min": 0
          }
        ],
        "mean": 0,
        "quantiles": [
          0
        ],
        "standardDeviation": 0
      },
      "nullValueCount": "string",
      "stringStats": {
        "topUnigramStats": [
          {
            "count": "string",
            "value": "string"
          }
        ]
      },
      "structStats": {},
      "timestampStats": {
        "granularStats": {
          "property1": {
            "buckets": {
              "property1": "string",
              "property2": "string"
            }
          },
          "property2": {
            "buckets": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      },
      "validValueCount": "string"
    }
  }
}
```

The data statistics of a series of STRUCT values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldStats|object|false|none|Map from a field name of the struct to data stats aggregated over series of all data in that field across all the structs.|

<h2 id="tocS_StructType">StructType</h2>
<!-- backwards compatibility -->
<a id="schemastructtype"></a>
<a id="schema_StructType"></a>
<a id="tocSstructtype"></a>
<a id="tocsstructtype"></a>

```json
{
  "fields": {
    "property1": {
      "listElementType": {},
      "nullable": true,
      "structType": {},
      "timeFormat": "string",
      "typeCode": "TYPE_CODE_UNSPECIFIED"
    },
    "property2": {
      "listElementType": {},
      "nullable": true,
      "structType": {},
      "timeFormat": "string",
      "typeCode": "TYPE_CODE_UNSPECIFIED"
    }
  }
}
```

`StructType` defines the DataType-s of a STRUCT type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|object|false|none|Unordered map of struct field names to their data types. Fields cannot be added or removed via Update. Their names and data types are still mutable.|

<h2 id="tocS_TableSpec">TableSpec</h2>
<!-- backwards compatibility -->
<a id="schematablespec"></a>
<a id="schema_TableSpec"></a>
<a id="tocStablespec"></a>
<a id="tocstablespec"></a>

```json
{
  "columnCount": "string",
  "etag": "string",
  "inputConfigs": [
    {
      "bigquerySource": {
        "inputUri": "string"
      },
      "gcsSource": {
        "inputUris": [
          "string"
        ]
      },
      "params": {
        "property1": "string",
        "property2": "string"
      }
    }
  ],
  "name": "string",
  "rowCount": "string",
  "timeColumnSpecId": "string",
  "validRowCount": "string"
}
```

A specification of a relational table. The table's schema is represented via its child column specs. It is pre-populated as part of ImportData by schema inference algorithm, the version of which is a required parameter of ImportData InputConfig. Note: While working with a table, at times the schema may be inconsistent with the data in the table (e.g. string in a FLOAT64 column). The consistency validation is done upon creation of a model. Used by: * Tables

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnCount|string(int64)|false|none|Output only. The number of columns of the table. That is, the number of child ColumnSpec-s.|
|etag|string|false|none|Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.|
|inputConfigs|[[InputConfig](#schemainputconfig)]|false|none|Output only. Input configs via which data currently residing in the table had been imported.|
|name|string|false|none|Output only. The resource name of the table spec. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}`|
|rowCount|string(int64)|false|none|Output only. The number of rows (i.e. examples) in the table.|
|timeColumnSpecId|string|false|none|column_spec_id of the time column. Only used if the parent dataset's ml_use_column_spec_id is not set. Used to split rows into TRAIN, VALIDATE and TEST sets such that oldest rows go to TRAIN set, newest to TEST, and those in between to VALIDATE. Required type: TIMESTAMP. If both this column and ml_use_column are not set, then ML use of all rows will be assigned by AutoML. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset.|
|validRowCount|string(int64)|false|none|Output only. The number of valid rows (i.e. without values that don't match DataType-s of their columns).|

<h2 id="tocS_TablesAnnotation">TablesAnnotation</h2>
<!-- backwards compatibility -->
<a id="schematablesannotation"></a>
<a id="schema_TablesAnnotation"></a>
<a id="tocStablesannotation"></a>
<a id="tocstablesannotation"></a>

```json
{
  "baselineScore": 0,
  "predictionInterval": {
    "end": 0,
    "start": 0
  },
  "score": 0,
  "tablesModelColumnInfo": [
    {
      "columnDisplayName": "string",
      "columnSpecName": "string",
      "featureImportance": 0
    }
  ],
  "value": null
}
```

Contains annotation details specific to Tables.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baselineScore|number(float)|false|none|Output only. Stores the prediction score for the baseline example, which is defined as the example with all values set to their baseline values. This is used as part of the Sampled Shapley explanation of the model's prediction. This field is populated only when feature importance is requested. For regression models, this holds the baseline prediction for the baseline example. For classification models, this holds the baseline prediction for the baseline example for the argmax class.|
|predictionInterval|[DoubleRange](#schemadoublerange)|false|none|Output only. Only populated when target_column_spec has FLOAT64 data type. An interval in which the exactly correct target value has 95% chance to be in.|
|score|number(float)|false|none|Output only. A confidence estimate between 0.0 and 1.0, inclusive. A higher value means greater confidence in the returned value. For target_column_spec of FLOAT64 data type the score is not populated.|
|tablesModelColumnInfo|[[TablesModelColumnInfo](#schematablesmodelcolumninfo)]|false|none|Output only. Auxiliary information for each of the model's input_feature_column_specs with respect to this particular prediction. If no other fields than column_spec_name and column_display_name would be populated, then this whole field is not.|
|value|object|false|none|The predicted value of the row's target_column. The value depends on the column's DataType: * CATEGORY - the predicted (with the above confidence `score`) CATEGORY value. * FLOAT64 - the predicted (with above `prediction_interval`) FLOAT64 value.|

<h2 id="tocS_TablesDatasetMetadata">TablesDatasetMetadata</h2>
<!-- backwards compatibility -->
<a id="schematablesdatasetmetadata"></a>
<a id="schema_TablesDatasetMetadata"></a>
<a id="tocStablesdatasetmetadata"></a>
<a id="tocstablesdatasetmetadata"></a>

```json
{
  "mlUseColumnSpecId": "string",
  "primaryTableSpecId": "string",
  "statsUpdateTime": "string",
  "targetColumnCorrelations": {
    "property1": {
      "cramersV": 0
    },
    "property2": {
      "cramersV": 0
    }
  },
  "targetColumnSpecId": "string",
  "weightColumnSpecId": "string"
}
```

Metadata for a dataset used for AutoML Tables.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mlUseColumnSpecId|string|false|none|column_spec_id of the primary table column which specifies a possible ML use of the row, i.e. the column will be used to split the rows into TRAIN, VALIDATE and TEST sets. Required type: STRING. This column, if set, must either have all of `TRAIN`, `VALIDATE`, `TEST` among its values, or only have `TEST`, `UNASSIGNED` values. In the latter case the rows with `UNASSIGNED` value will be assigned by AutoML. Note that if a given ml use distribution makes it impossible to create a "good" model, that call will error describing the issue. If both this column_spec_id and primary table's time_column_spec_id are not set, then all rows are treated as `UNASSIGNED`. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset.|
|primaryTableSpecId|string|false|none|Output only. The table_spec_id of the primary table of this dataset.|
|statsUpdateTime|string(google-datetime)|false|none|Output only. The most recent timestamp when target_column_correlations field and all descendant ColumnSpec.data_stats and ColumnSpec.top_correlated_columns fields were last (re-)generated. Any changes that happened to the dataset afterwards are not reflected in these fields values. The regeneration happens in the background on a best effort basis.|
|targetColumnCorrelations|object|false|none|Output only. Correlations between TablesDatasetMetadata.target_column_spec_id, and other columns of the TablesDatasetMetadataprimary_table. Only set if the target column is set. Mapping from other column spec id to its CorrelationStats with the target column. This field may be stale, see the stats_update_time field for for the timestamp at which these stats were last updated.|
|targetColumnSpecId|string|false|none|column_spec_id of the primary table's column that should be used as the training & prediction target. This column must be non-nullable and have one of following data types (otherwise model creation will error): * CATEGORY * FLOAT64 If the type is CATEGORY , only up to 100 unique values may exist in that column across all rows. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset.|
|weightColumnSpecId|string|false|none|column_spec_id of the primary table's column that should be used as the weight column, i.e. the higher the value the more important the row will be during model training. Required type: FLOAT64. Allowed values: 0 to 10000, inclusive on both ends; 0 means the row is ignored for training. If not set all rows are assumed to have equal weight of 1. NOTE: Updates of this field will instantly affect any other users concurrently working with the dataset.|

<h2 id="tocS_TablesModelColumnInfo">TablesModelColumnInfo</h2>
<!-- backwards compatibility -->
<a id="schematablesmodelcolumninfo"></a>
<a id="schema_TablesModelColumnInfo"></a>
<a id="tocStablesmodelcolumninfo"></a>
<a id="tocstablesmodelcolumninfo"></a>

```json
{
  "columnDisplayName": "string",
  "columnSpecName": "string",
  "featureImportance": 0
}
```

An information specific to given column and Tables Model, in context of the Model and the predictions created by it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columnDisplayName|string|false|none|Output only. The display name of the column (same as the display_name of its ColumnSpec).|
|columnSpecName|string|false|none|Output only. The name of the ColumnSpec describing the column. Not populated when this proto is outputted to BigQuery.|
|featureImportance|number(float)|false|none|Output only. When given as part of a Model (always populated): Measurement of how much model predictions correctness on the TEST data depend on values in this column. A value between 0 and 1, higher means higher influence. These values are normalized - for all input feature columns of a given model they add to 1. When given back by Predict (populated iff feature_importance param is set) or Batch Predict (populated iff feature_importance param is set): Measurement of how impactful for the prediction returned for the given row the value in this column was. Specifically, the feature importance specifies the marginal contribution that the feature made to the prediction score compared to the baseline score. These values are computed using the Sampled Shapley method.|

<h2 id="tocS_TablesModelMetadata">TablesModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schematablesmodelmetadata"></a>
<a id="schema_TablesModelMetadata"></a>
<a id="tocStablesmodelmetadata"></a>
<a id="tocstablesmodelmetadata"></a>

```json
{
  "disableEarlyStopping": true,
  "inputFeatureColumnSpecs": [
    {
      "dataStats": {
        "arrayStats": {},
        "categoryStats": {
          "topCategoryStats": [
            {
              "count": "string",
              "value": "string"
            }
          ]
        },
        "distinctValueCount": "string",
        "float64Stats": {
          "histogramBuckets": [
            {
              "count": "string",
              "max": 0,
              "min": 0
            }
          ],
          "mean": 0,
          "quantiles": [
            0
          ],
          "standardDeviation": 0
        },
        "nullValueCount": "string",
        "stringStats": {
          "topUnigramStats": [
            {
              "count": "string",
              "value": "string"
            }
          ]
        },
        "structStats": {},
        "timestampStats": {
          "granularStats": {
            "property1": {
              "buckets": {
                "property1": "string",
                "property2": "string"
              }
            },
            "property2": {
              "buckets": {
                "property1": "string",
                "property2": "string"
              }
            }
          }
        },
        "validValueCount": "string"
      },
      "dataType": {
        "listElementType": {},
        "nullable": true,
        "structType": {},
        "timeFormat": "string",
        "typeCode": "TYPE_CODE_UNSPECIFIED"
      },
      "displayName": "string",
      "etag": "string",
      "name": "string",
      "topCorrelatedColumns": [
        {
          "columnSpecId": "string",
          "correlationStats": {
            "cramersV": 0
          }
        }
      ]
    }
  ],
  "optimizationObjective": "string",
  "optimizationObjectivePrecisionValue": 0,
  "optimizationObjectiveRecallValue": 0,
  "tablesModelColumnInfo": [
    {
      "columnDisplayName": "string",
      "columnSpecName": "string",
      "featureImportance": 0
    }
  ],
  "targetColumnSpec": {
    "dataStats": {
      "arrayStats": {},
      "categoryStats": {
        "topCategoryStats": [
          {
            "count": "string",
            "value": "string"
          }
        ]
      },
      "distinctValueCount": "string",
      "float64Stats": {
        "histogramBuckets": [
          {
            "count": "string",
            "max": 0,
            "min": 0
          }
        ],
        "mean": 0,
        "quantiles": [
          0
        ],
        "standardDeviation": 0
      },
      "nullValueCount": "string",
      "stringStats": {
        "topUnigramStats": [
          {
            "count": "string",
            "value": "string"
          }
        ]
      },
      "structStats": {},
      "timestampStats": {
        "granularStats": {
          "property1": {
            "buckets": {
              "property1": "string",
              "property2": "string"
            }
          },
          "property2": {
            "buckets": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      },
      "validValueCount": "string"
    },
    "dataType": {
      "listElementType": {},
      "nullable": true,
      "structType": {},
      "timeFormat": "string",
      "typeCode": "TYPE_CODE_UNSPECIFIED"
    },
    "displayName": "string",
    "etag": "string",
    "name": "string",
    "topCorrelatedColumns": [
      {
        "columnSpecId": "string",
        "correlationStats": {
          "cramersV": 0
        }
      }
    ]
  },
  "trainBudgetMilliNodeHours": "string",
  "trainCostMilliNodeHours": "string"
}
```

Model metadata specific to AutoML Tables.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableEarlyStopping|boolean|false|none|Use the entire training budget. This disables the early stopping feature. By default, the early stopping feature is enabled, which means that AutoML Tables might stop training before the entire training budget has been used.|
|inputFeatureColumnSpecs|[[ColumnSpec](#schemacolumnspec)]|false|none|Column specs of the dataset's primary table's columns, on which the model is trained and which are used as the input for predictions. The target_column as well as, according to dataset's state upon model creation, weight_column, and ml_use_column must never be included here. Only 3 fields are used: * name - May be set on CreateModel, if set only the columns specified are used, otherwise all primary table's columns (except the ones listed above) are used for the training and prediction input. * display_name - Output only. * data_type - Output only.|
|optimizationObjective|string|false|none|Objective function the model is optimizing towards. The training process creates a model that maximizes/minimizes the value of the objective function over the validation set. The supported optimization objectives depend on the prediction type. If the field is not set, a default objective function is used. CLASSIFICATION_BINARY: "MAXIMIZE_AU_ROC" (default) - Maximize the area under the receiver operating characteristic (ROC) curve. "MINIMIZE_LOG_LOSS" - Minimize log loss. "MAXIMIZE_AU_PRC" - Maximize the area under the precision-recall curve. "MAXIMIZE_PRECISION_AT_RECALL" - Maximize precision for a specified recall value. "MAXIMIZE_RECALL_AT_PRECISION" - Maximize recall for a specified precision value. CLASSIFICATION_MULTI_CLASS : "MINIMIZE_LOG_LOSS" (default) - Minimize log loss. REGRESSION: "MINIMIZE_RMSE" (default) - Minimize root-mean-squared error (RMSE). "MINIMIZE_MAE" - Minimize mean-absolute error (MAE). "MINIMIZE_RMSLE" - Minimize root-mean-squared log error (RMSLE).|
|optimizationObjectivePrecisionValue|number(float)|false|none|Required when optimization_objective is "MAXIMIZE_RECALL_AT_PRECISION". Must be between 0 and 1, inclusive.|
|optimizationObjectiveRecallValue|number(float)|false|none|Required when optimization_objective is "MAXIMIZE_PRECISION_AT_RECALL". Must be between 0 and 1, inclusive.|
|tablesModelColumnInfo|[[TablesModelColumnInfo](#schematablesmodelcolumninfo)]|false|none|Output only. Auxiliary information for each of the input_feature_column_specs with respect to this particular model.|
|targetColumnSpec|[ColumnSpec](#schemacolumnspec)|false|none|Column spec of the dataset's primary table's column the model is predicting. Snapshotted when model creation started. Only 3 fields are used: name - May be set on CreateModel, if it's not then the ColumnSpec corresponding to the current target_column_spec_id of the dataset the model is trained from is used. If neither is set, CreateModel will error. display_name - Output only. data_type - Output only.|
|trainBudgetMilliNodeHours|string(int64)|false|none|Required. The train budget of creating this model, expressed in milli node hours i.e. 1,000 value in this field means 1 node hour. The training cost of the model will not exceed this budget. The final cost will be attempted to be close to the budget, though may end up being (even) noticeably smaller - at the backend's discretion. This especially may happen when further model training ceases to provide any improvements. If the budget is set to a value known to be insufficient to train a model for the given dataset, the training won't be attempted and will error. The train budget must be between 1,000 and 72,000 milli node hours, inclusive.|
|trainCostMilliNodeHours|string(int64)|false|none|Output only. The actual training cost of the model, expressed in milli node hours, i.e. 1,000 value in this field means 1 node hour. Guaranteed to not exceed the train budget.|

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

<h2 id="tocS_TextClassificationDatasetMetadata">TextClassificationDatasetMetadata</h2>
<!-- backwards compatibility -->
<a id="schematextclassificationdatasetmetadata"></a>
<a id="schema_TextClassificationDatasetMetadata"></a>
<a id="tocStextclassificationdatasetmetadata"></a>
<a id="tocstextclassificationdatasetmetadata"></a>

```json
{
  "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
}
```

Dataset metadata for classification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classificationType|string|false|none|Required. Type of the classification problem.|

#### Enumerated Values

|Property|Value|
|---|---|
|classificationType|CLASSIFICATION_TYPE_UNSPECIFIED|
|classificationType|MULTICLASS|
|classificationType|MULTILABEL|

<h2 id="tocS_TextClassificationModelMetadata">TextClassificationModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schematextclassificationmodelmetadata"></a>
<a id="schema_TextClassificationModelMetadata"></a>
<a id="tocStextclassificationmodelmetadata"></a>
<a id="tocstextclassificationmodelmetadata"></a>

```json
{
  "classificationType": "CLASSIFICATION_TYPE_UNSPECIFIED"
}
```

Model metadata that is specific to text classification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classificationType|string|false|none|Output only. Classification type of the dataset used to train this model.|

#### Enumerated Values

|Property|Value|
|---|---|
|classificationType|CLASSIFICATION_TYPE_UNSPECIFIED|
|classificationType|MULTICLASS|
|classificationType|MULTILABEL|

<h2 id="tocS_TextExtractionAnnotation">TextExtractionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schematextextractionannotation"></a>
<a id="schema_TextExtractionAnnotation"></a>
<a id="tocStextextractionannotation"></a>
<a id="tocstextextractionannotation"></a>

```json
{
  "score": 0,
  "textSegment": {
    "content": "string",
    "endOffset": "string",
    "startOffset": "string"
  }
}
```

Annotation for identifying spans of text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score|number(float)|false|none|Output only. A confidence estimate between 0.0 and 1.0. A higher value means greater confidence in correctness of the annotation.|
|textSegment|[TextSegment](#schematextsegment)|false|none|An entity annotation will set this, which is the part of the original text to which the annotation pertains.|

<h2 id="tocS_TextExtractionDatasetMetadata">TextExtractionDatasetMetadata</h2>
<!-- backwards compatibility -->
<a id="schematextextractiondatasetmetadata"></a>
<a id="schema_TextExtractionDatasetMetadata"></a>
<a id="tocStextextractiondatasetmetadata"></a>
<a id="tocstextextractiondatasetmetadata"></a>

```json
{}
```

Dataset metadata that is specific to text extraction

<h2 id="tocS_TextExtractionEvaluationMetrics">TextExtractionEvaluationMetrics</h2>
<!-- backwards compatibility -->
<a id="schematextextractionevaluationmetrics"></a>
<a id="schema_TextExtractionEvaluationMetrics"></a>
<a id="tocStextextractionevaluationmetrics"></a>
<a id="tocstextextractionevaluationmetrics"></a>

```json
{
  "auPrc": 0,
  "confidenceMetricsEntries": [
    {
      "confidenceThreshold": 0,
      "f1Score": 0,
      "precision": 0,
      "recall": 0
    }
  ]
}
```

Model evaluation metrics for text extraction problems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auPrc|number(float)|false|none|Output only. The Area under precision recall curve metric.|
|confidenceMetricsEntries|[[TextExtractionEvaluationMetricsConfidenceMetricsEntry](#schematextextractionevaluationmetricsconfidencemetricsentry)]|false|none|Output only. Metrics that have confidence thresholds. Precision-recall curve can be derived from it.|

<h2 id="tocS_TextExtractionEvaluationMetricsConfidenceMetricsEntry">TextExtractionEvaluationMetricsConfidenceMetricsEntry</h2>
<!-- backwards compatibility -->
<a id="schematextextractionevaluationmetricsconfidencemetricsentry"></a>
<a id="schema_TextExtractionEvaluationMetricsConfidenceMetricsEntry"></a>
<a id="tocStextextractionevaluationmetricsconfidencemetricsentry"></a>
<a id="tocstextextractionevaluationmetricsconfidencemetricsentry"></a>

```json
{
  "confidenceThreshold": 0,
  "f1Score": 0,
  "precision": 0,
  "recall": 0
}
```

Metrics for a single confidence threshold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidenceThreshold|number(float)|false|none|Output only. The confidence threshold value used to compute the metrics. Only annotations with score of at least this threshold are considered to be ones the model would return.|
|f1Score|number(float)|false|none|Output only. The harmonic mean of recall and precision.|
|precision|number(float)|false|none|Output only. Precision under the given confidence threshold.|
|recall|number(float)|false|none|Output only. Recall under the given confidence threshold.|

<h2 id="tocS_TextExtractionModelMetadata">TextExtractionModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schematextextractionmodelmetadata"></a>
<a id="schema_TextExtractionModelMetadata"></a>
<a id="tocStextextractionmodelmetadata"></a>
<a id="tocstextextractionmodelmetadata"></a>

```json
{
  "modelHint": "string"
}
```

Model metadata that is specific to text extraction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelHint|string|false|none|Indicates the scope of model use case. * `default`: Use to train a general text extraction model. Default value. * `health_care`: Use to train a text extraction model that is tuned for healthcare applications.|

<h2 id="tocS_TextSegment">TextSegment</h2>
<!-- backwards compatibility -->
<a id="schematextsegment"></a>
<a id="schema_TextSegment"></a>
<a id="tocStextsegment"></a>
<a id="tocstextsegment"></a>

```json
{
  "content": "string",
  "endOffset": "string",
  "startOffset": "string"
}
```

A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Output only. The content of the TextSegment.|
|endOffset|string(int64)|false|none|Required. Zero-based character index of the first character past the end of the text segment (counting character from the beginning of the text). The character at the end_offset is NOT included in the text segment.|
|startOffset|string(int64)|false|none|Required. Zero-based character index of the first character of the text segment (counting characters from the beginning of the text).|

<h2 id="tocS_TextSentimentAnnotation">TextSentimentAnnotation</h2>
<!-- backwards compatibility -->
<a id="schematextsentimentannotation"></a>
<a id="schema_TextSentimentAnnotation"></a>
<a id="tocStextsentimentannotation"></a>
<a id="tocstextsentimentannotation"></a>

```json
{
  "sentiment": 0
}
```

Contains annotation details specific to text sentiment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sentiment|integer(int32)|false|none|Output only. The sentiment with the semantic, as given to the AutoMl.ImportData when populating the dataset from which the model used for the prediction had been trained. The sentiment values are between 0 and Dataset.text_sentiment_dataset_metadata.sentiment_max (inclusive), with higher value meaning more positive sentiment. They are completely relative, i.e. 0 means least positive sentiment and sentiment_max means the most positive from the sentiments present in the train data. Therefore e.g. if train data had only negative sentiment, then sentiment_max, would be still negative (although least negative). The sentiment shouldn't be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API.|

<h2 id="tocS_TextSentimentDatasetMetadata">TextSentimentDatasetMetadata</h2>
<!-- backwards compatibility -->
<a id="schematextsentimentdatasetmetadata"></a>
<a id="schema_TextSentimentDatasetMetadata"></a>
<a id="tocStextsentimentdatasetmetadata"></a>
<a id="tocstextsentimentdatasetmetadata"></a>

```json
{
  "sentimentMax": 0
}
```

Dataset metadata for text sentiment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sentimentMax|integer(int32)|false|none|Required. A sentiment is expressed as an integer ordinal, where higher value means a more positive sentiment. The range of sentiments that will be used is between 0 and sentiment_max (inclusive on both ends), and all the values in the range must be represented in the dataset before a model can be created. sentiment_max value must be between 1 and 10 (inclusive).|

<h2 id="tocS_TextSentimentEvaluationMetrics">TextSentimentEvaluationMetrics</h2>
<!-- backwards compatibility -->
<a id="schematextsentimentevaluationmetrics"></a>
<a id="schema_TextSentimentEvaluationMetrics"></a>
<a id="tocStextsentimentevaluationmetrics"></a>
<a id="tocstextsentimentevaluationmetrics"></a>

```json
{
  "annotationSpecId": [
    "string"
  ],
  "confusionMatrix": {
    "annotationSpecId": [
      "string"
    ],
    "displayName": [
      "string"
    ],
    "row": [
      {
        "exampleCount": [
          0
        ]
      }
    ]
  },
  "f1Score": 0,
  "linearKappa": 0,
  "meanAbsoluteError": 0,
  "meanSquaredError": 0,
  "precision": 0,
  "quadraticKappa": 0,
  "recall": 0
}
```

Model evaluation metrics for text sentiment problems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationSpecId|[string]|false|none|Output only. The annotation spec ids used for this evaluation. Deprecated .|
|confusionMatrix|[ConfusionMatrix](#schemaconfusionmatrix)|false|none|Output only. Confusion matrix of the evaluation. Only set for the overall model evaluation, not for evaluation of a single annotation spec.|
|f1Score|number(float)|false|none|Output only. The harmonic mean of recall and precision.|
|linearKappa|number(float)|false|none|Output only. Linear weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec.|
|meanAbsoluteError|number(float)|false|none|Output only. Mean absolute error. Only set for the overall model evaluation, not for evaluation of a single annotation spec.|
|meanSquaredError|number(float)|false|none|Output only. Mean squared error. Only set for the overall model evaluation, not for evaluation of a single annotation spec.|
|precision|number(float)|false|none|Output only. Precision.|
|quadraticKappa|number(float)|false|none|Output only. Quadratic weighted kappa. Only set for the overall model evaluation, not for evaluation of a single annotation spec.|
|recall|number(float)|false|none|Output only. Recall.|

<h2 id="tocS_TextSentimentModelMetadata">TextSentimentModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schematextsentimentmodelmetadata"></a>
<a id="schema_TextSentimentModelMetadata"></a>
<a id="tocStextsentimentmodelmetadata"></a>
<a id="tocstextsentimentmodelmetadata"></a>

```json
{}
```

Model metadata that is specific to text sentiment.

<h2 id="tocS_TextSnippet">TextSnippet</h2>
<!-- backwards compatibility -->
<a id="schematextsnippet"></a>
<a id="schema_TextSnippet"></a>
<a id="tocStextsnippet"></a>
<a id="tocstextsnippet"></a>

```json
{
  "content": "string",
  "contentUri": "string",
  "mimeType": "string"
}
```

A representation of a text snippet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|Required. The content of the text snippet as a string. Up to 250000 characters long.|
|contentUri|string|false|none|Output only. HTTP URI where you can download the content.|
|mimeType|string|false|none|Optional. The format of content. Currently the only two allowed values are "text/html" and "text/plain". If left blank, the format is automatically determined from the type of the uploaded content.|

<h2 id="tocS_TimeSegment">TimeSegment</h2>
<!-- backwards compatibility -->
<a id="schematimesegment"></a>
<a id="schema_TimeSegment"></a>
<a id="tocStimesegment"></a>
<a id="tocstimesegment"></a>

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

<h2 id="tocS_TimestampStats">TimestampStats</h2>
<!-- backwards compatibility -->
<a id="schematimestampstats"></a>
<a id="schema_TimestampStats"></a>
<a id="tocStimestampstats"></a>
<a id="tocstimestampstats"></a>

```json
{
  "granularStats": {
    "property1": {
      "buckets": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "buckets": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

The data statistics of a series of TIMESTAMP values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|granularStats|object|false|none|The string key is the pre-defined granularity. Currently supported: hour_of_day, day_of_week, month_of_year. Granularities finer that the granularity of timestamp data are not populated (e.g. if timestamps are at day granularity, then hour_of_day is not populated).|

<h2 id="tocS_TranslationAnnotation">TranslationAnnotation</h2>
<!-- backwards compatibility -->
<a id="schematranslationannotation"></a>
<a id="schema_TranslationAnnotation"></a>
<a id="tocStranslationannotation"></a>
<a id="tocstranslationannotation"></a>

```json
{
  "translatedContent": {
    "content": "string",
    "contentUri": "string",
    "mimeType": "string"
  }
}
```

Annotation details specific to translation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|translatedContent|[TextSnippet](#schematextsnippet)|false|none|Output only . The translated content.|

<h2 id="tocS_TranslationDatasetMetadata">TranslationDatasetMetadata</h2>
<!-- backwards compatibility -->
<a id="schematranslationdatasetmetadata"></a>
<a id="schema_TranslationDatasetMetadata"></a>
<a id="tocStranslationdatasetmetadata"></a>
<a id="tocstranslationdatasetmetadata"></a>

```json
{
  "sourceLanguageCode": "string",
  "targetLanguageCode": "string"
}
```

Dataset metadata that is specific to translation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceLanguageCode|string|false|none|Required. The BCP-47 language code of the source language.|
|targetLanguageCode|string|false|none|Required. The BCP-47 language code of the target language.|

<h2 id="tocS_TranslationEvaluationMetrics">TranslationEvaluationMetrics</h2>
<!-- backwards compatibility -->
<a id="schematranslationevaluationmetrics"></a>
<a id="schema_TranslationEvaluationMetrics"></a>
<a id="tocStranslationevaluationmetrics"></a>
<a id="tocstranslationevaluationmetrics"></a>

```json
{
  "baseBleuScore": 0,
  "bleuScore": 0
}
```

Evaluation metrics for the dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseBleuScore|number(double)|false|none|Output only. BLEU score for base model.|
|bleuScore|number(double)|false|none|Output only. BLEU score.|

<h2 id="tocS_TranslationModelMetadata">TranslationModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schematranslationmodelmetadata"></a>
<a id="schema_TranslationModelMetadata"></a>
<a id="tocStranslationmodelmetadata"></a>
<a id="tocstranslationmodelmetadata"></a>

```json
{
  "baseModel": "string",
  "sourceLanguageCode": "string",
  "targetLanguageCode": "string"
}
```

Model metadata that is specific to translation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseModel|string|false|none|The resource name of the model to use as a baseline to train the custom model. If unset, we use the default base model provided by Google Translate. Format: `projects/{project_id}/locations/{location_id}/models/{model_id}`|
|sourceLanguageCode|string|false|none|Output only. Inferred from the dataset. The source languge (The BCP-47 language code) that is used for training.|
|targetLanguageCode|string|false|none|Output only. The target languge (The BCP-47 language code) that is used for training.|

<h2 id="tocS_UndeployModelOperationMetadata">UndeployModelOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaundeploymodeloperationmetadata"></a>
<a id="schema_UndeployModelOperationMetadata"></a>
<a id="tocSundeploymodeloperationmetadata"></a>
<a id="tocsundeploymodeloperationmetadata"></a>

```json
{}
```

Details of UndeployModel operation.

<h2 id="tocS_UndeployModelRequest">UndeployModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemaundeploymodelrequest"></a>
<a id="schema_UndeployModelRequest"></a>
<a id="tocSundeploymodelrequest"></a>
<a id="tocsundeploymodelrequest"></a>

```json
{}
```

Request message for AutoMl.UndeployModel.

<h2 id="tocS_UnigramStats">UnigramStats</h2>
<!-- backwards compatibility -->
<a id="schemaunigramstats"></a>
<a id="schema_UnigramStats"></a>
<a id="tocSunigramstats"></a>
<a id="tocsunigramstats"></a>

```json
{
  "count": "string",
  "value": "string"
}
```

The statistics of a unigram.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string(int64)|false|none|The number of occurrences of this unigram in the series.|
|value|string|false|none|The unigram.|

<h2 id="tocS_VideoClassificationAnnotation">VideoClassificationAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemavideoclassificationannotation"></a>
<a id="schema_VideoClassificationAnnotation"></a>
<a id="tocSvideoclassificationannotation"></a>
<a id="tocsvideoclassificationannotation"></a>

```json
{
  "classificationAnnotation": {
    "score": 0
  },
  "timeSegment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "type": "string"
}
```

Contains annotation details specific to video classification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classificationAnnotation|[ClassificationAnnotation](#schemaclassificationannotation)|false|none|Output only . The classification details of this annotation.|
|timeSegment|[TimeSegment](#schematimesegment)|false|none|Output only . The time segment of the video to which the annotation applies.|
|type|string|false|none|Output only. Expresses the type of video classification. Possible values: * `segment` - Classification done on a specified by user time segment of a video. AnnotationSpec is answered to be present in that time segment, if it is present in any part of it. The video ML model evaluations are done only for this type of classification. * `shot`- Shot-level classification. AutoML Video Intelligence determines the boundaries for each camera shot in the entire segment of the video that user specified in the request configuration. AutoML Video Intelligence then returns labels and their confidence scores for each detected shot, along with the start and end time of the shot. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality. * `1s_interval` - AutoML Video Intelligence returns labels and their confidence scores for each second of the entire segment of the video that user specified in the request configuration. WARNING: Model evaluation is not done for this classification type, the quality of it depends on training data, but there are no metrics provided to describe that quality.|

<h2 id="tocS_VideoClassificationDatasetMetadata">VideoClassificationDatasetMetadata</h2>
<!-- backwards compatibility -->
<a id="schemavideoclassificationdatasetmetadata"></a>
<a id="schema_VideoClassificationDatasetMetadata"></a>
<a id="tocSvideoclassificationdatasetmetadata"></a>
<a id="tocsvideoclassificationdatasetmetadata"></a>

```json
{}
```

Dataset metadata specific to video classification. All Video Classification datasets are treated as multi label.

<h2 id="tocS_VideoClassificationModelMetadata">VideoClassificationModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemavideoclassificationmodelmetadata"></a>
<a id="schema_VideoClassificationModelMetadata"></a>
<a id="tocSvideoclassificationmodelmetadata"></a>
<a id="tocsvideoclassificationmodelmetadata"></a>

```json
{}
```

Model metadata specific to video classification.

<h2 id="tocS_VideoObjectTrackingAnnotation">VideoObjectTrackingAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemavideoobjecttrackingannotation"></a>
<a id="schema_VideoObjectTrackingAnnotation"></a>
<a id="tocSvideoobjecttrackingannotation"></a>
<a id="tocsvideoobjecttrackingannotation"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "instanceId": "string",
  "score": 0,
  "timeOffset": "string"
}
```

Annotation details for video object tracking.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[BoundingPoly](#schemaboundingpoly)|false|none|Required. The rectangle representing the object location on the frame (i.e. at the time_offset of the video).|
|instanceId|string|false|none|Optional. The instance of the object, expressed as a positive integer. Used to tell apart objects of the same type (i.e. AnnotationSpec) when multiple are present on a single example. NOTE: Instance ID prediction quality is not a part of model evaluation and is done as best effort. Especially in cases when an entity goes off-screen for a longer time (minutes), when it comes back it may be given a new instance ID.|
|score|number(float)|false|none|Output only. The confidence that this annotation is positive for the video at the time_offset, value in [0, 1], higher means higher positivity confidence. For annotations created by the user the score is 1. When user approves an annotation, the original float score is kept (and not changed to 1).|
|timeOffset|string(google-duration)|false|none|Required. A time (frame) of a video to which this annotation pertains. Represented as the duration since the video's start.|

<h2 id="tocS_VideoObjectTrackingDatasetMetadata">VideoObjectTrackingDatasetMetadata</h2>
<!-- backwards compatibility -->
<a id="schemavideoobjecttrackingdatasetmetadata"></a>
<a id="schema_VideoObjectTrackingDatasetMetadata"></a>
<a id="tocSvideoobjecttrackingdatasetmetadata"></a>
<a id="tocsvideoobjecttrackingdatasetmetadata"></a>

```json
{}
```

Dataset metadata specific to video object tracking.

<h2 id="tocS_VideoObjectTrackingEvaluationMetrics">VideoObjectTrackingEvaluationMetrics</h2>
<!-- backwards compatibility -->
<a id="schemavideoobjecttrackingevaluationmetrics"></a>
<a id="schema_VideoObjectTrackingEvaluationMetrics"></a>
<a id="tocSvideoobjecttrackingevaluationmetrics"></a>
<a id="tocsvideoobjecttrackingevaluationmetrics"></a>

```json
{
  "boundingBoxMeanAveragePrecision": 0,
  "boundingBoxMetricsEntries": [
    {
      "confidenceMetricsEntries": [
        {
          "confidenceThreshold": 0,
          "f1Score": 0,
          "precision": 0,
          "recall": 0
        }
      ],
      "iouThreshold": 0,
      "meanAveragePrecision": 0
    }
  ],
  "evaluatedBoundingBoxCount": 0,
  "evaluatedFrameCount": 0
}
```

Model evaluation metrics for video object tracking problems. Evaluates prediction quality of both labeled bounding boxes and labeled tracks (i.e. series of bounding boxes sharing same label and instance ID).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBoxMeanAveragePrecision|number(float)|false|none|Output only. The single metric for bounding boxes evaluation: the mean_average_precision averaged over all bounding_box_metrics_entries.|
|boundingBoxMetricsEntries|[[BoundingBoxMetricsEntry](#schemaboundingboxmetricsentry)]|false|none|Output only. The bounding boxes match metrics for each Intersection-over-union threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and each label confidence threshold 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 pair.|
|evaluatedBoundingBoxCount|integer(int32)|false|none|Output only. The total number of bounding boxes (i.e. summed over all frames) the ground truth used to create this evaluation had.|
|evaluatedFrameCount|integer(int32)|false|none|Output only. The number of video frames used to create this evaluation.|

<h2 id="tocS_VideoObjectTrackingModelMetadata">VideoObjectTrackingModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemavideoobjecttrackingmodelmetadata"></a>
<a id="schema_VideoObjectTrackingModelMetadata"></a>
<a id="tocSvideoobjecttrackingmodelmetadata"></a>
<a id="tocsvideoobjecttrackingmodelmetadata"></a>

```json
{}
```

Model metadata specific to video object tracking.

<h2 id="tocS_WaitOperationRequest">WaitOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemawaitoperationrequest"></a>
<a id="schema_WaitOperationRequest"></a>
<a id="tocSwaitoperationrequest"></a>
<a id="tocswaitoperationrequest"></a>

```json
{
  "timeout": "string"
}
```

The request message for Operations.WaitOperation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeout|string(google-duration)|false|none|The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.|
