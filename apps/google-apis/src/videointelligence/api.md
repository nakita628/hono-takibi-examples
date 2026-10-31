<h1 id="cloud-video-intelligence-api">Cloud Video Intelligence API v1p3beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Detects objects, explicit content, and scene changes in videos. It also specifies the region for annotation and transcribes speech to text. Supports both asynchronous API and streaming API.

Base URLs:

* <a href="https://videointelligence.googleapis.com/">https://videointelligence.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/video-intelligence/docs/">External documentation</a>

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

<h1 id="cloud-video-intelligence-api-videos">videos</h1>

## videointelligence.videos.annotate

<a id="opIdvideointelligence.videos.annotate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1p3beta1/videos:annotate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "features": [
      "FEATURE_UNSPECIFIED"
    ],
    "inputContent": "string",
    "inputUri": "string",
    "locationId": "string",
    "outputUri": "string",
    "videoContext": {
      "explicitContentDetectionConfig": {
        "model": "string"
      },
      "faceDetectionConfig": {
        "includeAttributes": true,
        "includeBoundingBoxes": true,
        "model": "string"
      },
      "labelDetectionConfig": {
        "frameConfidenceThreshold": 0,
        "labelDetectionMode": "LABEL_DETECTION_MODE_UNSPECIFIED",
        "model": "string",
        "stationaryCamera": true,
        "videoConfidenceThreshold": 0
      },
      "objectTrackingConfig": {
        "model": "string"
      },
      "personDetectionConfig": {
        "includeAttributes": true,
        "includeBoundingBoxes": true,
        "includePoseLandmarks": true
      },
      "segments": [
        {
          "endTimeOffset": "string",
          "startTimeOffset": "string"
        }
      ],
      "shotChangeDetectionConfig": {
        "model": "string"
      },
      "speechTranscriptionConfig": {
        "audioTracks": [
          0
        ],
        "diarizationSpeakerCount": 0,
        "enableAutomaticPunctuation": true,
        "enableSpeakerDiarization": true,
        "enableWordConfidence": true,
        "filterProfanity": true,
        "languageCode": "string",
        "maxAlternatives": 0,
        "speechContexts": [
          {
            "phrases": [
              "string"
            ]
          }
        ]
      },
      "textDetectionConfig": {
        "languageHints": [
          "string"
        ],
        "model": "string"
      }
    }
  }'
```

`POST /v1p3beta1/videos:annotate`

Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).

> Body parameter

```json
{
  "features": [
    "FEATURE_UNSPECIFIED"
  ],
  "inputContent": "string",
  "inputUri": "string",
  "locationId": "string",
  "outputUri": "string",
  "videoContext": {
    "explicitContentDetectionConfig": {
      "model": "string"
    },
    "faceDetectionConfig": {
      "includeAttributes": true,
      "includeBoundingBoxes": true,
      "model": "string"
    },
    "labelDetectionConfig": {
      "frameConfidenceThreshold": 0,
      "labelDetectionMode": "LABEL_DETECTION_MODE_UNSPECIFIED",
      "model": "string",
      "stationaryCamera": true,
      "videoConfidenceThreshold": 0
    },
    "objectTrackingConfig": {
      "model": "string"
    },
    "personDetectionConfig": {
      "includeAttributes": true,
      "includeBoundingBoxes": true,
      "includePoseLandmarks": true
    },
    "segments": [
      {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    ],
    "shotChangeDetectionConfig": {
      "model": "string"
    },
    "speechTranscriptionConfig": {
      "audioTracks": [
        0
      ],
      "diarizationSpeakerCount": 0,
      "enableAutomaticPunctuation": true,
      "enableSpeakerDiarization": true,
      "enableWordConfidence": true,
      "filterProfanity": true,
      "languageCode": "string",
      "maxAlternatives": 0,
      "speechContexts": [
        {
          "phrases": [
            "string"
          ]
        }
      ]
    },
    "textDetectionConfig": {
      "languageHints": [
        "string"
      ],
      "model": "string"
    }
  }
}
```

<h3 id="videointelligencevideosannotate-parameters">Parameters</h3>

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
|body|body|[GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoRequest](#schemagooglecloudvideointelligencev1p3beta1_annotatevideorequest)|false|none|
|» features|body|[string]|false|Required. Requested video annotation features.|
|» inputContent|body|string(byte)|false|The video data bytes. If unset, the input video(s) should be specified via the `input_uri`. If set, `input_uri` must be unset.|
|» inputUri|body|string|false|Input video location. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. URIs must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints). To identify multiple videos, a video URI may include wildcards in the `object-id`. Supported wildcards: '*' to match 0 or more characters; '?' to match 1 character. If unset, the input video should be embedded in the request as `input_content`. If set, `input_content` must be unset.|
|» locationId|body|string|false|Optional. Cloud region where annotation should take place. Supported cloud regions are: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region is specified, the region will be determined based on video file location.|
|» outputUri|body|string|false|Optional. Location where the output (in JSON format) should be stored. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. These must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints).|
|» videoContext|body|[GoogleCloudVideointelligenceV1p3beta1_VideoContext](#schemagooglecloudvideointelligencev1p3beta1_videocontext)|false|Additional video context and/or feature-specific parameters.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» features|FEATURE_UNSPECIFIED|
|» features|LABEL_DETECTION|
|» features|SHOT_CHANGE_DETECTION|
|» features|EXPLICIT_CONTENT_DETECTION|
|» features|FACE_DETECTION|
|» features|SPEECH_TRANSCRIPTION|
|» features|TEXT_DETECTION|
|» features|OBJECT_TRACKING|
|» features|LOGO_RECOGNITION|
|» features|CELEBRITY_RECOGNITION|
|» features|PERSON_DETECTION|

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

<h3 id="videointelligencevideosannotate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunning_Operation](#schemagooglelongrunning_operation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudVideointelligenceV1_AnnotateVideoProgress">GoogleCloudVideointelligenceV1_AnnotateVideoProgress</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_annotatevideoprogress"></a>
<a id="schema_GoogleCloudVideointelligenceV1_AnnotateVideoProgress"></a>
<a id="tocSgooglecloudvideointelligencev1_annotatevideoprogress"></a>
<a id="tocsgooglecloudvideointelligencev1_annotatevideoprogress"></a>

```json
{
  "annotationProgress": [
    {
      "feature": "FEATURE_UNSPECIFIED",
      "inputUri": "string",
      "progressPercent": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "startTime": "string",
      "updateTime": "string"
    }
  ]
}
```

Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationProgress|[[GoogleCloudVideointelligenceV1_VideoAnnotationProgress](#schemagooglecloudvideointelligencev1_videoannotationprogress)]|false|none|Progress metadata for all videos specified in `AnnotateVideoRequest`.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_AnnotateVideoResponse">GoogleCloudVideointelligenceV1_AnnotateVideoResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_annotatevideoresponse"></a>
<a id="schema_GoogleCloudVideointelligenceV1_AnnotateVideoResponse"></a>
<a id="tocSgooglecloudvideointelligencev1_annotatevideoresponse"></a>
<a id="tocsgooglecloudvideointelligencev1_annotatevideoresponse"></a>

```json
{
  "annotationResults": [
    {
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
      "explicitAnnotation": {
        "frames": [
          {
            "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
            "timeOffset": "string"
          }
        ],
        "version": "string"
      },
      "faceAnnotations": [
        {
          "frames": [
            {
              "normalizedBoundingBoxes": [
                {
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "top": 0
                }
              ],
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "thumbnail": "string"
        }
      ],
      "faceDetectionAnnotations": [
        {
          "thumbnail": "string",
          "tracks": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          ],
          "version": "string"
        }
      ],
      "frameLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "inputUri": "string",
      "logoRecognitionAnnotations": [
        {
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "segments": [
            {
              "endTimeOffset": "string",
              "startTimeOffset": "string"
            }
          ],
          "tracks": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          ]
        }
      ],
      "objectAnnotations": [
        {
          "confidence": 0,
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ],
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "trackId": "string",
          "version": "string"
        }
      ],
      "personDetectionAnnotations": [
        {
          "tracks": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          ],
          "version": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "segmentLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "segmentPresenceLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "shotAnnotations": [
        {
          "endTimeOffset": "string",
          "startTimeOffset": "string"
        }
      ],
      "shotLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "shotPresenceLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "speechTranscriptions": [
        {
          "alternatives": [
            {
              "confidence": 0,
              "transcript": "string",
              "words": [
                {
                  "confidence": 0,
                  "endTime": "string",
                  "speakerTag": 0,
                  "startTime": "string",
                  "word": "string"
                }
              ]
            }
          ],
          "languageCode": "string"
        }
      ],
      "textAnnotations": [
        {
          "segments": [
            {
              "confidence": 0,
              "frames": [
                {
                  "rotatedBoundingBox": {
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "timeOffset": "string"
                }
              ],
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "text": "string",
          "version": "string"
        }
      ]
    }
  ]
}
```

Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationResults|[[GoogleCloudVideointelligenceV1_VideoAnnotationResults](#schemagooglecloudvideointelligencev1_videoannotationresults)]|false|none|Annotation results for all videos specified in `AnnotateVideoRequest`.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_DetectedAttribute">GoogleCloudVideointelligenceV1_DetectedAttribute</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_detectedattribute"></a>
<a id="schema_GoogleCloudVideointelligenceV1_DetectedAttribute"></a>
<a id="tocSgooglecloudvideointelligencev1_detectedattribute"></a>
<a id="tocsgooglecloudvideointelligencev1_detectedattribute"></a>

```json
{
  "confidence": 0,
  "name": "string",
  "value": "string"
}
```

A generic detected attribute represented by name in string format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Detected attribute confidence. Range [0, 1].|
|name|string|false|none|The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.|
|value|string|false|none|Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_DetectedLandmark">GoogleCloudVideointelligenceV1_DetectedLandmark</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_detectedlandmark"></a>
<a id="schema_GoogleCloudVideointelligenceV1_DetectedLandmark"></a>
<a id="tocSgooglecloudvideointelligencev1_detectedlandmark"></a>
<a id="tocsgooglecloudvideointelligencev1_detectedlandmark"></a>

```json
{
  "confidence": 0,
  "name": "string",
  "point": {
    "x": 0,
    "y": 0
  }
}
```

A generic detected landmark represented by name in string format and a 2D location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|The confidence score of the detected landmark. Range [0, 1].|
|name|string|false|none|The name of this landmark, for example, left_hand, right_shoulder.|
|point|[GoogleCloudVideointelligenceV1_NormalizedVertex](#schemagooglecloudvideointelligencev1_normalizedvertex)|false|none|The 2D point of the detected landmark using the normalized image coordindate system. The normalized coordinates have the range from 0 to 1.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_Entity">GoogleCloudVideointelligenceV1_Entity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_entity"></a>
<a id="schema_GoogleCloudVideointelligenceV1_Entity"></a>
<a id="tocSgooglecloudvideointelligencev1_entity"></a>
<a id="tocsgooglecloudvideointelligencev1_entity"></a>

```json
{
  "description": "string",
  "entityId": "string",
  "languageCode": "string"
}
```

Detected entity from video analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Textual description, e.g., `Fixed-gear bicycle`.|
|entityId|string|false|none|Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).|
|languageCode|string|false|none|Language code for `description` in BCP-47 format.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_ExplicitContentAnnotation">GoogleCloudVideointelligenceV1_ExplicitContentAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_explicitcontentannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1_ExplicitContentAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1_explicitcontentannotation"></a>
<a id="tocsgooglecloudvideointelligencev1_explicitcontentannotation"></a>

```json
{
  "frames": [
    {
      "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
      "timeOffset": "string"
    }
  ],
  "version": "string"
}
```

Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frames|[[GoogleCloudVideointelligenceV1_ExplicitContentFrame](#schemagooglecloudvideointelligencev1_explicitcontentframe)]|false|none|All video frames where explicit content was detected.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_ExplicitContentFrame">GoogleCloudVideointelligenceV1_ExplicitContentFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_explicitcontentframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1_ExplicitContentFrame"></a>
<a id="tocSgooglecloudvideointelligencev1_explicitcontentframe"></a>
<a id="tocsgooglecloudvideointelligencev1_explicitcontentframe"></a>

```json
{
  "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
  "timeOffset": "string"
}
```

Video frame level annotation results for explicit content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pornographyLikelihood|string|false|none|Likelihood of the pornography content..|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.|

#### Enumerated Values

|Property|Value|
|---|---|
|pornographyLikelihood|LIKELIHOOD_UNSPECIFIED|
|pornographyLikelihood|VERY_UNLIKELY|
|pornographyLikelihood|UNLIKELY|
|pornographyLikelihood|POSSIBLE|
|pornographyLikelihood|LIKELY|
|pornographyLikelihood|VERY_LIKELY|

<h2 id="tocS_GoogleCloudVideointelligenceV1_FaceAnnotation">GoogleCloudVideointelligenceV1_FaceAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_faceannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1_FaceAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1_faceannotation"></a>
<a id="tocsgooglecloudvideointelligencev1_faceannotation"></a>

```json
{
  "frames": [
    {
      "normalizedBoundingBoxes": [
        {
          "bottom": 0,
          "left": 0,
          "right": 0,
          "top": 0
        }
      ],
      "timeOffset": "string"
    }
  ],
  "segments": [
    {
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  ],
  "thumbnail": "string"
}
```

Deprecated. No effect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frames|[[GoogleCloudVideointelligenceV1_FaceFrame](#schemagooglecloudvideointelligencev1_faceframe)]|false|none|All video frames where a face was detected.|
|segments|[[GoogleCloudVideointelligenceV1_FaceSegment](#schemagooglecloudvideointelligencev1_facesegment)]|false|none|All video segments where a face was detected.|
|thumbnail|string(byte)|false|none|Thumbnail of a representative face view (in JPEG format).|

<h2 id="tocS_GoogleCloudVideointelligenceV1_FaceDetectionAnnotation">GoogleCloudVideointelligenceV1_FaceDetectionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_facedetectionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1_FaceDetectionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1_facedetectionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1_facedetectionannotation"></a>

```json
{
  "thumbnail": "string",
  "tracks": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "timestampedObjects": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "landmarks": [
            {
              "confidence": 0,
              "name": "string",
              "point": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ]
    }
  ],
  "version": "string"
}
```

Face detection annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thumbnail|string(byte)|false|none|The thumbnail of a person's face.|
|tracks|[[GoogleCloudVideointelligenceV1_Track](#schemagooglecloudvideointelligencev1_track)]|false|none|The face tracks with attributes.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_FaceFrame">GoogleCloudVideointelligenceV1_FaceFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_faceframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1_FaceFrame"></a>
<a id="tocSgooglecloudvideointelligencev1_faceframe"></a>
<a id="tocsgooglecloudvideointelligencev1_faceframe"></a>

```json
{
  "normalizedBoundingBoxes": [
    {
      "bottom": 0,
      "left": 0,
      "right": 0,
      "top": 0
    }
  ],
  "timeOffset": "string"
}
```

Deprecated. No effect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedBoundingBoxes|[[GoogleCloudVideointelligenceV1_NormalizedBoundingBox](#schemagooglecloudvideointelligencev1_normalizedboundingbox)]|false|none|Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_FaceSegment">GoogleCloudVideointelligenceV1_FaceSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_facesegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1_FaceSegment"></a>
<a id="tocSgooglecloudvideointelligencev1_facesegment"></a>
<a id="tocsgooglecloudvideointelligencev1_facesegment"></a>

```json
{
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video segment level annotation results for face detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segment|[GoogleCloudVideointelligenceV1_VideoSegment](#schemagooglecloudvideointelligencev1_videosegment)|false|none|Video segment where a face was detected.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_LabelAnnotation">GoogleCloudVideointelligenceV1_LabelAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_labelannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1_LabelAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1_labelannotation"></a>
<a id="tocsgooglecloudvideointelligencev1_labelannotation"></a>

```json
{
  "categoryEntities": [
    {
      "description": "string",
      "entityId": "string",
      "languageCode": "string"
    }
  ],
  "entity": {
    "description": "string",
    "entityId": "string",
    "languageCode": "string"
  },
  "frames": [
    {
      "confidence": 0,
      "timeOffset": "string"
    }
  ],
  "segments": [
    {
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  ],
  "version": "string"
}
```

Label annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryEntities|[[GoogleCloudVideointelligenceV1_Entity](#schemagooglecloudvideointelligencev1_entity)]|false|none|Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.|
|entity|[GoogleCloudVideointelligenceV1_Entity](#schemagooglecloudvideointelligencev1_entity)|false|none|Detected entity.|
|frames|[[GoogleCloudVideointelligenceV1_LabelFrame](#schemagooglecloudvideointelligencev1_labelframe)]|false|none|All video frames where a label was detected.|
|segments|[[GoogleCloudVideointelligenceV1_LabelSegment](#schemagooglecloudvideointelligencev1_labelsegment)]|false|none|All video segments where a label was detected.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_LabelFrame">GoogleCloudVideointelligenceV1_LabelFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_labelframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1_LabelFrame"></a>
<a id="tocSgooglecloudvideointelligencev1_labelframe"></a>
<a id="tocsgooglecloudvideointelligencev1_labelframe"></a>

```json
{
  "confidence": 0,
  "timeOffset": "string"
}
```

Video frame level annotation results for label detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence that the label is accurate. Range: [0, 1].|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_LabelSegment">GoogleCloudVideointelligenceV1_LabelSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_labelsegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1_LabelSegment"></a>
<a id="tocSgooglecloudvideointelligencev1_labelsegment"></a>
<a id="tocsgooglecloudvideointelligencev1_labelsegment"></a>

```json
{
  "confidence": 0,
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video segment level annotation results for label detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence that the label is accurate. Range: [0, 1].|
|segment|[GoogleCloudVideointelligenceV1_VideoSegment](#schemagooglecloudvideointelligencev1_videosegment)|false|none|Video segment where a label was detected.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_LogoRecognitionAnnotation">GoogleCloudVideointelligenceV1_LogoRecognitionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_logorecognitionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1_LogoRecognitionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1_logorecognitionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1_logorecognitionannotation"></a>

```json
{
  "entity": {
    "description": "string",
    "entityId": "string",
    "languageCode": "string"
  },
  "segments": [
    {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    }
  ],
  "tracks": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "timestampedObjects": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "landmarks": [
            {
              "confidence": 0,
              "name": "string",
              "point": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ]
    }
  ]
}
```

Annotation corresponding to one detected, tracked and recognized logo class.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|[GoogleCloudVideointelligenceV1_Entity](#schemagooglecloudvideointelligencev1_entity)|false|none|Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.|
|segments|[[GoogleCloudVideointelligenceV1_VideoSegment](#schemagooglecloudvideointelligencev1_videosegment)]|false|none|All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.|
|tracks|[[GoogleCloudVideointelligenceV1_Track](#schemagooglecloudvideointelligencev1_track)]|false|none|All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_NormalizedBoundingBox">GoogleCloudVideointelligenceV1_NormalizedBoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_normalizedboundingbox"></a>
<a id="schema_GoogleCloudVideointelligenceV1_NormalizedBoundingBox"></a>
<a id="tocSgooglecloudvideointelligencev1_normalizedboundingbox"></a>
<a id="tocsgooglecloudvideointelligencev1_normalizedboundingbox"></a>

```json
{
  "bottom": 0,
  "left": 0,
  "right": 0,
  "top": 0
}
```

Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bottom|number(float)|false|none|Bottom Y coordinate.|
|left|number(float)|false|none|Left X coordinate.|
|right|number(float)|false|none|Right X coordinate.|
|top|number(float)|false|none|Top Y coordinate.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_NormalizedBoundingPoly">GoogleCloudVideointelligenceV1_NormalizedBoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_normalizedboundingpoly"></a>
<a id="schema_GoogleCloudVideointelligenceV1_NormalizedBoundingPoly"></a>
<a id="tocSgooglecloudvideointelligencev1_normalizedboundingpoly"></a>
<a id="tocsgooglecloudvideointelligencev1_normalizedboundingpoly"></a>

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

Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vertices|[[GoogleCloudVideointelligenceV1_NormalizedVertex](#schemagooglecloudvideointelligencev1_normalizedvertex)]|false|none|Normalized vertices of the bounding polygon.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_NormalizedVertex">GoogleCloudVideointelligenceV1_NormalizedVertex</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_normalizedvertex"></a>
<a id="schema_GoogleCloudVideointelligenceV1_NormalizedVertex"></a>
<a id="tocSgooglecloudvideointelligencev1_normalizedvertex"></a>
<a id="tocsgooglecloudvideointelligencev1_normalizedvertex"></a>

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

<h2 id="tocS_GoogleCloudVideointelligenceV1_ObjectTrackingAnnotation">GoogleCloudVideointelligenceV1_ObjectTrackingAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_objecttrackingannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1_ObjectTrackingAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1_objecttrackingannotation"></a>
<a id="tocsgooglecloudvideointelligencev1_objecttrackingannotation"></a>

```json
{
  "confidence": 0,
  "entity": {
    "description": "string",
    "entityId": "string",
    "languageCode": "string"
  },
  "frames": [
    {
      "normalizedBoundingBox": {
        "bottom": 0,
        "left": 0,
        "right": 0,
        "top": 0
      },
      "timeOffset": "string"
    }
  ],
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "trackId": "string",
  "version": "string"
}
```

Annotations corresponding to one tracked object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Object category's labeling confidence of this track.|
|entity|[GoogleCloudVideointelligenceV1_Entity](#schemagooglecloudvideointelligencev1_entity)|false|none|Entity to specify the object category that this track is labeled as.|
|frames|[[GoogleCloudVideointelligenceV1_ObjectTrackingFrame](#schemagooglecloudvideointelligencev1_objecttrackingframe)]|false|none|Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.|
|segment|[GoogleCloudVideointelligenceV1_VideoSegment](#schemagooglecloudvideointelligencev1_videosegment)|false|none|Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.|
|trackId|string(int64)|false|none|Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_ObjectTrackingFrame">GoogleCloudVideointelligenceV1_ObjectTrackingFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_objecttrackingframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1_ObjectTrackingFrame"></a>
<a id="tocSgooglecloudvideointelligencev1_objecttrackingframe"></a>
<a id="tocsgooglecloudvideointelligencev1_objecttrackingframe"></a>

```json
{
  "normalizedBoundingBox": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "top": 0
  },
  "timeOffset": "string"
}
```

Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedBoundingBox|[GoogleCloudVideointelligenceV1_NormalizedBoundingBox](#schemagooglecloudvideointelligencev1_normalizedboundingbox)|false|none|The normalized bounding box location of this object track for the frame.|
|timeOffset|string(google-duration)|false|none|The timestamp of the frame in microseconds.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_PersonDetectionAnnotation">GoogleCloudVideointelligenceV1_PersonDetectionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_persondetectionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1_PersonDetectionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1_persondetectionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1_persondetectionannotation"></a>

```json
{
  "tracks": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "timestampedObjects": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "landmarks": [
            {
              "confidence": 0,
              "name": "string",
              "point": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ]
    }
  ],
  "version": "string"
}
```

Person detection annotation per video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tracks|[[GoogleCloudVideointelligenceV1_Track](#schemagooglecloudvideointelligencev1_track)]|false|none|The detected tracks of a person.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_SpeechRecognitionAlternative">GoogleCloudVideointelligenceV1_SpeechRecognitionAlternative</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_speechrecognitionalternative"></a>
<a id="schema_GoogleCloudVideointelligenceV1_SpeechRecognitionAlternative"></a>
<a id="tocSgooglecloudvideointelligencev1_speechrecognitionalternative"></a>
<a id="tocsgooglecloudvideointelligencev1_speechrecognitionalternative"></a>

```json
{
  "confidence": 0,
  "transcript": "string",
  "words": [
    {
      "confidence": 0,
      "endTime": "string",
      "speakerTag": 0,
      "startTime": "string",
      "word": "string"
    }
  ]
}
```

Alternative hypotheses (a.k.a. n-best list).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|read-only|Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.|
|transcript|string|false|none|Transcript text representing the words that the user spoke.|
|words|[[GoogleCloudVideointelligenceV1_WordInfo](#schemagooglecloudvideointelligencev1_wordinfo)]|false|read-only|Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_SpeechTranscription">GoogleCloudVideointelligenceV1_SpeechTranscription</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_speechtranscription"></a>
<a id="schema_GoogleCloudVideointelligenceV1_SpeechTranscription"></a>
<a id="tocSgooglecloudvideointelligencev1_speechtranscription"></a>
<a id="tocsgooglecloudvideointelligencev1_speechtranscription"></a>

```json
{
  "alternatives": [
    {
      "confidence": 0,
      "transcript": "string",
      "words": [
        {
          "confidence": 0,
          "endTime": "string",
          "speakerTag": 0,
          "startTime": "string",
          "word": "string"
        }
      ]
    }
  ],
  "languageCode": "string"
}
```

A speech recognition result corresponding to a portion of the audio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternatives|[[GoogleCloudVideointelligenceV1_SpeechRecognitionAlternative](#schemagooglecloudvideointelligencev1_speechrecognitionalternative)]|false|none|May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.|
|languageCode|string|false|read-only|Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_TextAnnotation">GoogleCloudVideointelligenceV1_TextAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_textannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1_TextAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1_textannotation"></a>
<a id="tocsgooglecloudvideointelligencev1_textannotation"></a>

```json
{
  "segments": [
    {
      "confidence": 0,
      "frames": [
        {
          "rotatedBoundingBox": {
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "timeOffset": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  ],
  "text": "string",
  "version": "string"
}
```

Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segments|[[GoogleCloudVideointelligenceV1_TextSegment](#schemagooglecloudvideointelligencev1_textsegment)]|false|none|All video segments where OCR detected text appears.|
|text|string|false|none|The detected text.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_TextFrame">GoogleCloudVideointelligenceV1_TextFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_textframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1_TextFrame"></a>
<a id="tocSgooglecloudvideointelligencev1_textframe"></a>
<a id="tocsgooglecloudvideointelligencev1_textframe"></a>

```json
{
  "rotatedBoundingBox": {
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "timeOffset": "string"
}
```

Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rotatedBoundingBox|[GoogleCloudVideointelligenceV1_NormalizedBoundingPoly](#schemagooglecloudvideointelligencev1_normalizedboundingpoly)|false|none|Bounding polygon of the detected text for this frame.|
|timeOffset|string(google-duration)|false|none|Timestamp of this frame.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_TextSegment">GoogleCloudVideointelligenceV1_TextSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_textsegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1_TextSegment"></a>
<a id="tocSgooglecloudvideointelligencev1_textsegment"></a>
<a id="tocsgooglecloudvideointelligencev1_textsegment"></a>

```json
{
  "confidence": 0,
  "frames": [
    {
      "rotatedBoundingBox": {
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "timeOffset": "string"
    }
  ],
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video segment level annotation results for text detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.|
|frames|[[GoogleCloudVideointelligenceV1_TextFrame](#schemagooglecloudvideointelligencev1_textframe)]|false|none|Information related to the frames where OCR detected text appears.|
|segment|[GoogleCloudVideointelligenceV1_VideoSegment](#schemagooglecloudvideointelligencev1_videosegment)|false|none|Video segment where a text snippet was detected.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_TimestampedObject">GoogleCloudVideointelligenceV1_TimestampedObject</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_timestampedobject"></a>
<a id="schema_GoogleCloudVideointelligenceV1_TimestampedObject"></a>
<a id="tocSgooglecloudvideointelligencev1_timestampedobject"></a>
<a id="tocsgooglecloudvideointelligencev1_timestampedobject"></a>

```json
{
  "attributes": [
    {
      "confidence": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "landmarks": [
    {
      "confidence": 0,
      "name": "string",
      "point": {
        "x": 0,
        "y": 0
      }
    }
  ],
  "normalizedBoundingBox": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "top": 0
  },
  "timeOffset": "string"
}
```

For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[GoogleCloudVideointelligenceV1_DetectedAttribute](#schemagooglecloudvideointelligencev1_detectedattribute)]|false|none|Optional. The attributes of the object in the bounding box.|
|landmarks|[[GoogleCloudVideointelligenceV1_DetectedLandmark](#schemagooglecloudvideointelligencev1_detectedlandmark)]|false|none|Optional. The detected landmarks.|
|normalizedBoundingBox|[GoogleCloudVideointelligenceV1_NormalizedBoundingBox](#schemagooglecloudvideointelligencev1_normalizedboundingbox)|false|none|Normalized Bounding box in a frame, where the object is located.|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_Track">GoogleCloudVideointelligenceV1_Track</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_track"></a>
<a id="schema_GoogleCloudVideointelligenceV1_Track"></a>
<a id="tocSgooglecloudvideointelligencev1_track"></a>
<a id="tocsgooglecloudvideointelligencev1_track"></a>

```json
{
  "attributes": [
    {
      "confidence": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "confidence": 0,
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "timestampedObjects": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "landmarks": [
        {
          "confidence": 0,
          "name": "string",
          "point": {
            "x": 0,
            "y": 0
          }
        }
      ],
      "normalizedBoundingBox": {
        "bottom": 0,
        "left": 0,
        "right": 0,
        "top": 0
      },
      "timeOffset": "string"
    }
  ]
}
```

A track of an object instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[GoogleCloudVideointelligenceV1_DetectedAttribute](#schemagooglecloudvideointelligencev1_detectedattribute)]|false|none|Optional. Attributes in the track level.|
|confidence|number(float)|false|none|Optional. The confidence score of the tracked object.|
|segment|[GoogleCloudVideointelligenceV1_VideoSegment](#schemagooglecloudvideointelligencev1_videosegment)|false|none|Video segment of a track.|
|timestampedObjects|[[GoogleCloudVideointelligenceV1_TimestampedObject](#schemagooglecloudvideointelligencev1_timestampedobject)]|false|none|The object with timestamp and attributes per frame in the track.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_VideoAnnotationProgress">GoogleCloudVideointelligenceV1_VideoAnnotationProgress</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_videoannotationprogress"></a>
<a id="schema_GoogleCloudVideointelligenceV1_VideoAnnotationProgress"></a>
<a id="tocSgooglecloudvideointelligencev1_videoannotationprogress"></a>
<a id="tocsgooglecloudvideointelligencev1_videoannotationprogress"></a>

```json
{
  "feature": "FEATURE_UNSPECIFIED",
  "inputUri": "string",
  "progressPercent": 0,
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "startTime": "string",
  "updateTime": "string"
}
```

Annotation progress for a single video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feature|string|false|none|Specifies which feature is being tracked if the request contains more than one feature.|
|inputUri|string|false|none|Video file location in [Cloud Storage](https://cloud.google.com/storage/).|
|progressPercent|integer(int32)|false|none|Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.|
|segment|[GoogleCloudVideointelligenceV1_VideoSegment](#schemagooglecloudvideointelligencev1_videosegment)|false|none|Specifies which segment is being tracked if the request contains more than one segment.|
|startTime|string(google-datetime)|false|none|Time when the request was received.|
|updateTime|string(google-datetime)|false|none|Time of the most recent update.|

#### Enumerated Values

|Property|Value|
|---|---|
|feature|FEATURE_UNSPECIFIED|
|feature|LABEL_DETECTION|
|feature|SHOT_CHANGE_DETECTION|
|feature|EXPLICIT_CONTENT_DETECTION|
|feature|FACE_DETECTION|
|feature|SPEECH_TRANSCRIPTION|
|feature|TEXT_DETECTION|
|feature|OBJECT_TRACKING|
|feature|LOGO_RECOGNITION|
|feature|PERSON_DETECTION|

<h2 id="tocS_GoogleCloudVideointelligenceV1_VideoAnnotationResults">GoogleCloudVideointelligenceV1_VideoAnnotationResults</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_videoannotationresults"></a>
<a id="schema_GoogleCloudVideointelligenceV1_VideoAnnotationResults"></a>
<a id="tocSgooglecloudvideointelligencev1_videoannotationresults"></a>
<a id="tocsgooglecloudvideointelligencev1_videoannotationresults"></a>

```json
{
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
  "explicitAnnotation": {
    "frames": [
      {
        "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
        "timeOffset": "string"
      }
    ],
    "version": "string"
  },
  "faceAnnotations": [
    {
      "frames": [
        {
          "normalizedBoundingBoxes": [
            {
              "bottom": 0,
              "left": 0,
              "right": 0,
              "top": 0
            }
          ],
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "thumbnail": "string"
    }
  ],
  "faceDetectionAnnotations": [
    {
      "thumbnail": "string",
      "tracks": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      ],
      "version": "string"
    }
  ],
  "frameLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "inputUri": "string",
  "logoRecognitionAnnotations": [
    {
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "segments": [
        {
          "endTimeOffset": "string",
          "startTimeOffset": "string"
        }
      ],
      "tracks": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      ]
    }
  ],
  "objectAnnotations": [
    {
      "confidence": 0,
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "trackId": "string",
      "version": "string"
    }
  ],
  "personDetectionAnnotations": [
    {
      "tracks": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      ],
      "version": "string"
    }
  ],
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "segmentLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "segmentPresenceLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "shotAnnotations": [
    {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    }
  ],
  "shotLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "shotPresenceLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "speechTranscriptions": [
    {
      "alternatives": [
        {
          "confidence": 0,
          "transcript": "string",
          "words": [
            {
              "confidence": 0,
              "endTime": "string",
              "speakerTag": 0,
              "startTime": "string",
              "word": "string"
            }
          ]
        }
      ],
      "languageCode": "string"
    }
  ],
  "textAnnotations": [
    {
      "segments": [
        {
          "confidence": 0,
          "frames": [
            {
              "rotatedBoundingBox": {
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "timeOffset": "string"
            }
          ],
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "text": "string",
      "version": "string"
    }
  ]
}
```

Annotation results for a single video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[GoogleRpc_Status](#schemagooglerpc_status)|false|none|If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.|
|explicitAnnotation|[GoogleCloudVideointelligenceV1_ExplicitContentAnnotation](#schemagooglecloudvideointelligencev1_explicitcontentannotation)|false|none|Explicit content annotation.|
|faceAnnotations|[[GoogleCloudVideointelligenceV1_FaceAnnotation](#schemagooglecloudvideointelligencev1_faceannotation)]|false|none|Deprecated. Please use `face_detection_annotations` instead.|
|faceDetectionAnnotations|[[GoogleCloudVideointelligenceV1_FaceDetectionAnnotation](#schemagooglecloudvideointelligencev1_facedetectionannotation)]|false|none|Face detection annotations.|
|frameLabelAnnotations|[[GoogleCloudVideointelligenceV1_LabelAnnotation](#schemagooglecloudvideointelligencev1_labelannotation)]|false|none|Label annotations on frame level. There is exactly one element for each unique label.|
|inputUri|string|false|none|Video file location in [Cloud Storage](https://cloud.google.com/storage/).|
|logoRecognitionAnnotations|[[GoogleCloudVideointelligenceV1_LogoRecognitionAnnotation](#schemagooglecloudvideointelligencev1_logorecognitionannotation)]|false|none|Annotations for list of logos detected, tracked and recognized in video.|
|objectAnnotations|[[GoogleCloudVideointelligenceV1_ObjectTrackingAnnotation](#schemagooglecloudvideointelligencev1_objecttrackingannotation)]|false|none|Annotations for list of objects detected and tracked in video.|
|personDetectionAnnotations|[[GoogleCloudVideointelligenceV1_PersonDetectionAnnotation](#schemagooglecloudvideointelligencev1_persondetectionannotation)]|false|none|Person detection annotations.|
|segment|[GoogleCloudVideointelligenceV1_VideoSegment](#schemagooglecloudvideointelligencev1_videosegment)|false|none|Video segment on which the annotation is run.|
|segmentLabelAnnotations|[[GoogleCloudVideointelligenceV1_LabelAnnotation](#schemagooglecloudvideointelligencev1_labelannotation)]|false|none|Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.|
|segmentPresenceLabelAnnotations|[[GoogleCloudVideointelligenceV1_LabelAnnotation](#schemagooglecloudvideointelligencev1_labelannotation)]|false|none|Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.|
|shotAnnotations|[[GoogleCloudVideointelligenceV1_VideoSegment](#schemagooglecloudvideointelligencev1_videosegment)]|false|none|Shot annotations. Each shot is represented as a video segment.|
|shotLabelAnnotations|[[GoogleCloudVideointelligenceV1_LabelAnnotation](#schemagooglecloudvideointelligencev1_labelannotation)]|false|none|Topical label annotations on shot level. There is exactly one element for each unique label.|
|shotPresenceLabelAnnotations|[[GoogleCloudVideointelligenceV1_LabelAnnotation](#schemagooglecloudvideointelligencev1_labelannotation)]|false|none|Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.|
|speechTranscriptions|[[GoogleCloudVideointelligenceV1_SpeechTranscription](#schemagooglecloudvideointelligencev1_speechtranscription)]|false|none|Speech transcription.|
|textAnnotations|[[GoogleCloudVideointelligenceV1_TextAnnotation](#schemagooglecloudvideointelligencev1_textannotation)]|false|none|OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.|

<h2 id="tocS_GoogleCloudVideointelligenceV1_VideoSegment">GoogleCloudVideointelligenceV1_VideoSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_videosegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1_VideoSegment"></a>
<a id="tocSgooglecloudvideointelligencev1_videosegment"></a>
<a id="tocsgooglecloudvideointelligencev1_videosegment"></a>

```json
{
  "endTimeOffset": "string",
  "startTimeOffset": "string"
}
```

Video segment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTimeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).|
|startTimeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).|

<h2 id="tocS_GoogleCloudVideointelligenceV1_WordInfo">GoogleCloudVideointelligenceV1_WordInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1_wordinfo"></a>
<a id="schema_GoogleCloudVideointelligenceV1_WordInfo"></a>
<a id="tocSgooglecloudvideointelligencev1_wordinfo"></a>
<a id="tocsgooglecloudvideointelligencev1_wordinfo"></a>

```json
{
  "confidence": 0,
  "endTime": "string",
  "speakerTag": 0,
  "startTime": "string",
  "word": "string"
}
```

Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|read-only|Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.|
|endTime|string(google-duration)|false|none|Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.|
|speakerTag|integer(int32)|false|read-only|Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.|
|startTime|string(google-duration)|false|none|Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.|
|word|string|false|none|The word corresponding to this set of information.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress">GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_annotatevideoprogress"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_annotatevideoprogress"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_annotatevideoprogress"></a>

```json
{
  "annotationProgress": [
    {
      "feature": "FEATURE_UNSPECIFIED",
      "inputUri": "string",
      "progressPercent": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "startTime": "string",
      "updateTime": "string"
    }
  ]
}
```

Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationProgress|[[GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress](#schemagooglecloudvideointelligencev1beta2_videoannotationprogress)]|false|none|Progress metadata for all videos specified in `AnnotateVideoRequest`.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse">GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_annotatevideoresponse"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_annotatevideoresponse"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_annotatevideoresponse"></a>

```json
{
  "annotationResults": [
    {
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
      "explicitAnnotation": {
        "frames": [
          {
            "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
            "timeOffset": "string"
          }
        ],
        "version": "string"
      },
      "faceAnnotations": [
        {
          "frames": [
            {
              "normalizedBoundingBoxes": [
                {
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "top": 0
                }
              ],
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "thumbnail": "string"
        }
      ],
      "faceDetectionAnnotations": [
        {
          "thumbnail": "string",
          "tracks": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          ],
          "version": "string"
        }
      ],
      "frameLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "inputUri": "string",
      "logoRecognitionAnnotations": [
        {
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "segments": [
            {
              "endTimeOffset": "string",
              "startTimeOffset": "string"
            }
          ],
          "tracks": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          ]
        }
      ],
      "objectAnnotations": [
        {
          "confidence": 0,
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ],
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "trackId": "string",
          "version": "string"
        }
      ],
      "personDetectionAnnotations": [
        {
          "tracks": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          ],
          "version": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "segmentLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "segmentPresenceLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "shotAnnotations": [
        {
          "endTimeOffset": "string",
          "startTimeOffset": "string"
        }
      ],
      "shotLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "shotPresenceLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "speechTranscriptions": [
        {
          "alternatives": [
            {
              "confidence": 0,
              "transcript": "string",
              "words": [
                {
                  "confidence": 0,
                  "endTime": "string",
                  "speakerTag": 0,
                  "startTime": "string",
                  "word": "string"
                }
              ]
            }
          ],
          "languageCode": "string"
        }
      ],
      "textAnnotations": [
        {
          "segments": [
            {
              "confidence": 0,
              "frames": [
                {
                  "rotatedBoundingBox": {
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "timeOffset": "string"
                }
              ],
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "text": "string",
          "version": "string"
        }
      ]
    }
  ]
}
```

Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationResults|[[GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults](#schemagooglecloudvideointelligencev1beta2_videoannotationresults)]|false|none|Annotation results for all videos specified in `AnnotateVideoRequest`.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_DetectedAttribute">GoogleCloudVideointelligenceV1beta2_DetectedAttribute</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_detectedattribute"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_DetectedAttribute"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_detectedattribute"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_detectedattribute"></a>

```json
{
  "confidence": 0,
  "name": "string",
  "value": "string"
}
```

A generic detected attribute represented by name in string format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Detected attribute confidence. Range [0, 1].|
|name|string|false|none|The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.|
|value|string|false|none|Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_DetectedLandmark">GoogleCloudVideointelligenceV1beta2_DetectedLandmark</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_detectedlandmark"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_DetectedLandmark"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_detectedlandmark"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_detectedlandmark"></a>

```json
{
  "confidence": 0,
  "name": "string",
  "point": {
    "x": 0,
    "y": 0
  }
}
```

A generic detected landmark represented by name in string format and a 2D location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|The confidence score of the detected landmark. Range [0, 1].|
|name|string|false|none|The name of this landmark, for example, left_hand, right_shoulder.|
|point|[GoogleCloudVideointelligenceV1beta2_NormalizedVertex](#schemagooglecloudvideointelligencev1beta2_normalizedvertex)|false|none|The 2D point of the detected landmark using the normalized image coordindate system. The normalized coordinates have the range from 0 to 1.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_Entity">GoogleCloudVideointelligenceV1beta2_Entity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_entity"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_Entity"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_entity"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_entity"></a>

```json
{
  "description": "string",
  "entityId": "string",
  "languageCode": "string"
}
```

Detected entity from video analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Textual description, e.g., `Fixed-gear bicycle`.|
|entityId|string|false|none|Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).|
|languageCode|string|false|none|Language code for `description` in BCP-47 format.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation">GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_explicitcontentannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_explicitcontentannotation"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_explicitcontentannotation"></a>

```json
{
  "frames": [
    {
      "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
      "timeOffset": "string"
    }
  ],
  "version": "string"
}
```

Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frames|[[GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame](#schemagooglecloudvideointelligencev1beta2_explicitcontentframe)]|false|none|All video frames where explicit content was detected.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame">GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_explicitcontentframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_explicitcontentframe"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_explicitcontentframe"></a>

```json
{
  "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
  "timeOffset": "string"
}
```

Video frame level annotation results for explicit content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pornographyLikelihood|string|false|none|Likelihood of the pornography content..|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.|

#### Enumerated Values

|Property|Value|
|---|---|
|pornographyLikelihood|LIKELIHOOD_UNSPECIFIED|
|pornographyLikelihood|VERY_UNLIKELY|
|pornographyLikelihood|UNLIKELY|
|pornographyLikelihood|POSSIBLE|
|pornographyLikelihood|LIKELY|
|pornographyLikelihood|VERY_LIKELY|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_FaceAnnotation">GoogleCloudVideointelligenceV1beta2_FaceAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_faceannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_FaceAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_faceannotation"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_faceannotation"></a>

```json
{
  "frames": [
    {
      "normalizedBoundingBoxes": [
        {
          "bottom": 0,
          "left": 0,
          "right": 0,
          "top": 0
        }
      ],
      "timeOffset": "string"
    }
  ],
  "segments": [
    {
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  ],
  "thumbnail": "string"
}
```

Deprecated. No effect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frames|[[GoogleCloudVideointelligenceV1beta2_FaceFrame](#schemagooglecloudvideointelligencev1beta2_faceframe)]|false|none|All video frames where a face was detected.|
|segments|[[GoogleCloudVideointelligenceV1beta2_FaceSegment](#schemagooglecloudvideointelligencev1beta2_facesegment)]|false|none|All video segments where a face was detected.|
|thumbnail|string(byte)|false|none|Thumbnail of a representative face view (in JPEG format).|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_FaceDetectionAnnotation">GoogleCloudVideointelligenceV1beta2_FaceDetectionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_facedetectionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_FaceDetectionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_facedetectionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_facedetectionannotation"></a>

```json
{
  "thumbnail": "string",
  "tracks": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "timestampedObjects": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "landmarks": [
            {
              "confidence": 0,
              "name": "string",
              "point": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ]
    }
  ],
  "version": "string"
}
```

Face detection annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thumbnail|string(byte)|false|none|The thumbnail of a person's face.|
|tracks|[[GoogleCloudVideointelligenceV1beta2_Track](#schemagooglecloudvideointelligencev1beta2_track)]|false|none|The face tracks with attributes.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_FaceFrame">GoogleCloudVideointelligenceV1beta2_FaceFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_faceframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_FaceFrame"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_faceframe"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_faceframe"></a>

```json
{
  "normalizedBoundingBoxes": [
    {
      "bottom": 0,
      "left": 0,
      "right": 0,
      "top": 0
    }
  ],
  "timeOffset": "string"
}
```

Deprecated. No effect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedBoundingBoxes|[[GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox](#schemagooglecloudvideointelligencev1beta2_normalizedboundingbox)]|false|none|Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_FaceSegment">GoogleCloudVideointelligenceV1beta2_FaceSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_facesegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_FaceSegment"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_facesegment"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_facesegment"></a>

```json
{
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video segment level annotation results for face detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segment|[GoogleCloudVideointelligenceV1beta2_VideoSegment](#schemagooglecloudvideointelligencev1beta2_videosegment)|false|none|Video segment where a face was detected.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_LabelAnnotation">GoogleCloudVideointelligenceV1beta2_LabelAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_labelannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_LabelAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_labelannotation"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_labelannotation"></a>

```json
{
  "categoryEntities": [
    {
      "description": "string",
      "entityId": "string",
      "languageCode": "string"
    }
  ],
  "entity": {
    "description": "string",
    "entityId": "string",
    "languageCode": "string"
  },
  "frames": [
    {
      "confidence": 0,
      "timeOffset": "string"
    }
  ],
  "segments": [
    {
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  ],
  "version": "string"
}
```

Label annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryEntities|[[GoogleCloudVideointelligenceV1beta2_Entity](#schemagooglecloudvideointelligencev1beta2_entity)]|false|none|Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.|
|entity|[GoogleCloudVideointelligenceV1beta2_Entity](#schemagooglecloudvideointelligencev1beta2_entity)|false|none|Detected entity.|
|frames|[[GoogleCloudVideointelligenceV1beta2_LabelFrame](#schemagooglecloudvideointelligencev1beta2_labelframe)]|false|none|All video frames where a label was detected.|
|segments|[[GoogleCloudVideointelligenceV1beta2_LabelSegment](#schemagooglecloudvideointelligencev1beta2_labelsegment)]|false|none|All video segments where a label was detected.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_LabelFrame">GoogleCloudVideointelligenceV1beta2_LabelFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_labelframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_LabelFrame"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_labelframe"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_labelframe"></a>

```json
{
  "confidence": 0,
  "timeOffset": "string"
}
```

Video frame level annotation results for label detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence that the label is accurate. Range: [0, 1].|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_LabelSegment">GoogleCloudVideointelligenceV1beta2_LabelSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_labelsegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_LabelSegment"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_labelsegment"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_labelsegment"></a>

```json
{
  "confidence": 0,
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video segment level annotation results for label detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence that the label is accurate. Range: [0, 1].|
|segment|[GoogleCloudVideointelligenceV1beta2_VideoSegment](#schemagooglecloudvideointelligencev1beta2_videosegment)|false|none|Video segment where a label was detected.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotation">GoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_logorecognitionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_logorecognitionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_logorecognitionannotation"></a>

```json
{
  "entity": {
    "description": "string",
    "entityId": "string",
    "languageCode": "string"
  },
  "segments": [
    {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    }
  ],
  "tracks": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "timestampedObjects": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "landmarks": [
            {
              "confidence": 0,
              "name": "string",
              "point": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ]
    }
  ]
}
```

Annotation corresponding to one detected, tracked and recognized logo class.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|[GoogleCloudVideointelligenceV1beta2_Entity](#schemagooglecloudvideointelligencev1beta2_entity)|false|none|Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.|
|segments|[[GoogleCloudVideointelligenceV1beta2_VideoSegment](#schemagooglecloudvideointelligencev1beta2_videosegment)]|false|none|All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.|
|tracks|[[GoogleCloudVideointelligenceV1beta2_Track](#schemagooglecloudvideointelligencev1beta2_track)]|false|none|All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox">GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_normalizedboundingbox"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_normalizedboundingbox"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_normalizedboundingbox"></a>

```json
{
  "bottom": 0,
  "left": 0,
  "right": 0,
  "top": 0
}
```

Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bottom|number(float)|false|none|Bottom Y coordinate.|
|left|number(float)|false|none|Left X coordinate.|
|right|number(float)|false|none|Right X coordinate.|
|top|number(float)|false|none|Top Y coordinate.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_NormalizedBoundingPoly">GoogleCloudVideointelligenceV1beta2_NormalizedBoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_normalizedboundingpoly"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_NormalizedBoundingPoly"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_normalizedboundingpoly"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_normalizedboundingpoly"></a>

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

Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vertices|[[GoogleCloudVideointelligenceV1beta2_NormalizedVertex](#schemagooglecloudvideointelligencev1beta2_normalizedvertex)]|false|none|Normalized vertices of the bounding polygon.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_NormalizedVertex">GoogleCloudVideointelligenceV1beta2_NormalizedVertex</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_normalizedvertex"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_NormalizedVertex"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_normalizedvertex"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_normalizedvertex"></a>

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

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotation">GoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_objecttrackingannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_objecttrackingannotation"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_objecttrackingannotation"></a>

```json
{
  "confidence": 0,
  "entity": {
    "description": "string",
    "entityId": "string",
    "languageCode": "string"
  },
  "frames": [
    {
      "normalizedBoundingBox": {
        "bottom": 0,
        "left": 0,
        "right": 0,
        "top": 0
      },
      "timeOffset": "string"
    }
  ],
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "trackId": "string",
  "version": "string"
}
```

Annotations corresponding to one tracked object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Object category's labeling confidence of this track.|
|entity|[GoogleCloudVideointelligenceV1beta2_Entity](#schemagooglecloudvideointelligencev1beta2_entity)|false|none|Entity to specify the object category that this track is labeled as.|
|frames|[[GoogleCloudVideointelligenceV1beta2_ObjectTrackingFrame](#schemagooglecloudvideointelligencev1beta2_objecttrackingframe)]|false|none|Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.|
|segment|[GoogleCloudVideointelligenceV1beta2_VideoSegment](#schemagooglecloudvideointelligencev1beta2_videosegment)|false|none|Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.|
|trackId|string(int64)|false|none|Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_ObjectTrackingFrame">GoogleCloudVideointelligenceV1beta2_ObjectTrackingFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_objecttrackingframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_ObjectTrackingFrame"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_objecttrackingframe"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_objecttrackingframe"></a>

```json
{
  "normalizedBoundingBox": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "top": 0
  },
  "timeOffset": "string"
}
```

Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedBoundingBox|[GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox](#schemagooglecloudvideointelligencev1beta2_normalizedboundingbox)|false|none|The normalized bounding box location of this object track for the frame.|
|timeOffset|string(google-duration)|false|none|The timestamp of the frame in microseconds.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_PersonDetectionAnnotation">GoogleCloudVideointelligenceV1beta2_PersonDetectionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_persondetectionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_PersonDetectionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_persondetectionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_persondetectionannotation"></a>

```json
{
  "tracks": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "timestampedObjects": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "landmarks": [
            {
              "confidence": 0,
              "name": "string",
              "point": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ]
    }
  ],
  "version": "string"
}
```

Person detection annotation per video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tracks|[[GoogleCloudVideointelligenceV1beta2_Track](#schemagooglecloudvideointelligencev1beta2_track)]|false|none|The detected tracks of a person.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternative">GoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternative</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_speechrecognitionalternative"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternative"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_speechrecognitionalternative"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_speechrecognitionalternative"></a>

```json
{
  "confidence": 0,
  "transcript": "string",
  "words": [
    {
      "confidence": 0,
      "endTime": "string",
      "speakerTag": 0,
      "startTime": "string",
      "word": "string"
    }
  ]
}
```

Alternative hypotheses (a.k.a. n-best list).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|read-only|Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.|
|transcript|string|false|none|Transcript text representing the words that the user spoke.|
|words|[[GoogleCloudVideointelligenceV1beta2_WordInfo](#schemagooglecloudvideointelligencev1beta2_wordinfo)]|false|read-only|Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_SpeechTranscription">GoogleCloudVideointelligenceV1beta2_SpeechTranscription</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_speechtranscription"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_SpeechTranscription"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_speechtranscription"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_speechtranscription"></a>

```json
{
  "alternatives": [
    {
      "confidence": 0,
      "transcript": "string",
      "words": [
        {
          "confidence": 0,
          "endTime": "string",
          "speakerTag": 0,
          "startTime": "string",
          "word": "string"
        }
      ]
    }
  ],
  "languageCode": "string"
}
```

A speech recognition result corresponding to a portion of the audio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternatives|[[GoogleCloudVideointelligenceV1beta2_SpeechRecognitionAlternative](#schemagooglecloudvideointelligencev1beta2_speechrecognitionalternative)]|false|none|May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.|
|languageCode|string|false|read-only|Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_TextAnnotation">GoogleCloudVideointelligenceV1beta2_TextAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_textannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_TextAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_textannotation"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_textannotation"></a>

```json
{
  "segments": [
    {
      "confidence": 0,
      "frames": [
        {
          "rotatedBoundingBox": {
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "timeOffset": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  ],
  "text": "string",
  "version": "string"
}
```

Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segments|[[GoogleCloudVideointelligenceV1beta2_TextSegment](#schemagooglecloudvideointelligencev1beta2_textsegment)]|false|none|All video segments where OCR detected text appears.|
|text|string|false|none|The detected text.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_TextFrame">GoogleCloudVideointelligenceV1beta2_TextFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_textframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_TextFrame"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_textframe"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_textframe"></a>

```json
{
  "rotatedBoundingBox": {
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "timeOffset": "string"
}
```

Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rotatedBoundingBox|[GoogleCloudVideointelligenceV1beta2_NormalizedBoundingPoly](#schemagooglecloudvideointelligencev1beta2_normalizedboundingpoly)|false|none|Bounding polygon of the detected text for this frame.|
|timeOffset|string(google-duration)|false|none|Timestamp of this frame.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_TextSegment">GoogleCloudVideointelligenceV1beta2_TextSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_textsegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_TextSegment"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_textsegment"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_textsegment"></a>

```json
{
  "confidence": 0,
  "frames": [
    {
      "rotatedBoundingBox": {
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "timeOffset": "string"
    }
  ],
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video segment level annotation results for text detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.|
|frames|[[GoogleCloudVideointelligenceV1beta2_TextFrame](#schemagooglecloudvideointelligencev1beta2_textframe)]|false|none|Information related to the frames where OCR detected text appears.|
|segment|[GoogleCloudVideointelligenceV1beta2_VideoSegment](#schemagooglecloudvideointelligencev1beta2_videosegment)|false|none|Video segment where a text snippet was detected.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_TimestampedObject">GoogleCloudVideointelligenceV1beta2_TimestampedObject</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_timestampedobject"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_TimestampedObject"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_timestampedobject"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_timestampedobject"></a>

```json
{
  "attributes": [
    {
      "confidence": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "landmarks": [
    {
      "confidence": 0,
      "name": "string",
      "point": {
        "x": 0,
        "y": 0
      }
    }
  ],
  "normalizedBoundingBox": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "top": 0
  },
  "timeOffset": "string"
}
```

For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[GoogleCloudVideointelligenceV1beta2_DetectedAttribute](#schemagooglecloudvideointelligencev1beta2_detectedattribute)]|false|none|Optional. The attributes of the object in the bounding box.|
|landmarks|[[GoogleCloudVideointelligenceV1beta2_DetectedLandmark](#schemagooglecloudvideointelligencev1beta2_detectedlandmark)]|false|none|Optional. The detected landmarks.|
|normalizedBoundingBox|[GoogleCloudVideointelligenceV1beta2_NormalizedBoundingBox](#schemagooglecloudvideointelligencev1beta2_normalizedboundingbox)|false|none|Normalized Bounding box in a frame, where the object is located.|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_Track">GoogleCloudVideointelligenceV1beta2_Track</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_track"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_Track"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_track"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_track"></a>

```json
{
  "attributes": [
    {
      "confidence": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "confidence": 0,
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "timestampedObjects": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "landmarks": [
        {
          "confidence": 0,
          "name": "string",
          "point": {
            "x": 0,
            "y": 0
          }
        }
      ],
      "normalizedBoundingBox": {
        "bottom": 0,
        "left": 0,
        "right": 0,
        "top": 0
      },
      "timeOffset": "string"
    }
  ]
}
```

A track of an object instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[GoogleCloudVideointelligenceV1beta2_DetectedAttribute](#schemagooglecloudvideointelligencev1beta2_detectedattribute)]|false|none|Optional. Attributes in the track level.|
|confidence|number(float)|false|none|Optional. The confidence score of the tracked object.|
|segment|[GoogleCloudVideointelligenceV1beta2_VideoSegment](#schemagooglecloudvideointelligencev1beta2_videosegment)|false|none|Video segment of a track.|
|timestampedObjects|[[GoogleCloudVideointelligenceV1beta2_TimestampedObject](#schemagooglecloudvideointelligencev1beta2_timestampedobject)]|false|none|The object with timestamp and attributes per frame in the track.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress">GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_videoannotationprogress"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_videoannotationprogress"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_videoannotationprogress"></a>

```json
{
  "feature": "FEATURE_UNSPECIFIED",
  "inputUri": "string",
  "progressPercent": 0,
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "startTime": "string",
  "updateTime": "string"
}
```

Annotation progress for a single video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feature|string|false|none|Specifies which feature is being tracked if the request contains more than one feature.|
|inputUri|string|false|none|Video file location in [Cloud Storage](https://cloud.google.com/storage/).|
|progressPercent|integer(int32)|false|none|Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.|
|segment|[GoogleCloudVideointelligenceV1beta2_VideoSegment](#schemagooglecloudvideointelligencev1beta2_videosegment)|false|none|Specifies which segment is being tracked if the request contains more than one segment.|
|startTime|string(google-datetime)|false|none|Time when the request was received.|
|updateTime|string(google-datetime)|false|none|Time of the most recent update.|

#### Enumerated Values

|Property|Value|
|---|---|
|feature|FEATURE_UNSPECIFIED|
|feature|LABEL_DETECTION|
|feature|SHOT_CHANGE_DETECTION|
|feature|EXPLICIT_CONTENT_DETECTION|
|feature|FACE_DETECTION|
|feature|SPEECH_TRANSCRIPTION|
|feature|TEXT_DETECTION|
|feature|OBJECT_TRACKING|
|feature|LOGO_RECOGNITION|
|feature|PERSON_DETECTION|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults">GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_videoannotationresults"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_videoannotationresults"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_videoannotationresults"></a>

```json
{
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
  "explicitAnnotation": {
    "frames": [
      {
        "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
        "timeOffset": "string"
      }
    ],
    "version": "string"
  },
  "faceAnnotations": [
    {
      "frames": [
        {
          "normalizedBoundingBoxes": [
            {
              "bottom": 0,
              "left": 0,
              "right": 0,
              "top": 0
            }
          ],
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "thumbnail": "string"
    }
  ],
  "faceDetectionAnnotations": [
    {
      "thumbnail": "string",
      "tracks": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      ],
      "version": "string"
    }
  ],
  "frameLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "inputUri": "string",
  "logoRecognitionAnnotations": [
    {
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "segments": [
        {
          "endTimeOffset": "string",
          "startTimeOffset": "string"
        }
      ],
      "tracks": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      ]
    }
  ],
  "objectAnnotations": [
    {
      "confidence": 0,
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "trackId": "string",
      "version": "string"
    }
  ],
  "personDetectionAnnotations": [
    {
      "tracks": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      ],
      "version": "string"
    }
  ],
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "segmentLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "segmentPresenceLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "shotAnnotations": [
    {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    }
  ],
  "shotLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "shotPresenceLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "speechTranscriptions": [
    {
      "alternatives": [
        {
          "confidence": 0,
          "transcript": "string",
          "words": [
            {
              "confidence": 0,
              "endTime": "string",
              "speakerTag": 0,
              "startTime": "string",
              "word": "string"
            }
          ]
        }
      ],
      "languageCode": "string"
    }
  ],
  "textAnnotations": [
    {
      "segments": [
        {
          "confidence": 0,
          "frames": [
            {
              "rotatedBoundingBox": {
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "timeOffset": "string"
            }
          ],
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "text": "string",
      "version": "string"
    }
  ]
}
```

Annotation results for a single video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[GoogleRpc_Status](#schemagooglerpc_status)|false|none|If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.|
|explicitAnnotation|[GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation](#schemagooglecloudvideointelligencev1beta2_explicitcontentannotation)|false|none|Explicit content annotation.|
|faceAnnotations|[[GoogleCloudVideointelligenceV1beta2_FaceAnnotation](#schemagooglecloudvideointelligencev1beta2_faceannotation)]|false|none|Deprecated. Please use `face_detection_annotations` instead.|
|faceDetectionAnnotations|[[GoogleCloudVideointelligenceV1beta2_FaceDetectionAnnotation](#schemagooglecloudvideointelligencev1beta2_facedetectionannotation)]|false|none|Face detection annotations.|
|frameLabelAnnotations|[[GoogleCloudVideointelligenceV1beta2_LabelAnnotation](#schemagooglecloudvideointelligencev1beta2_labelannotation)]|false|none|Label annotations on frame level. There is exactly one element for each unique label.|
|inputUri|string|false|none|Video file location in [Cloud Storage](https://cloud.google.com/storage/).|
|logoRecognitionAnnotations|[[GoogleCloudVideointelligenceV1beta2_LogoRecognitionAnnotation](#schemagooglecloudvideointelligencev1beta2_logorecognitionannotation)]|false|none|Annotations for list of logos detected, tracked and recognized in video.|
|objectAnnotations|[[GoogleCloudVideointelligenceV1beta2_ObjectTrackingAnnotation](#schemagooglecloudvideointelligencev1beta2_objecttrackingannotation)]|false|none|Annotations for list of objects detected and tracked in video.|
|personDetectionAnnotations|[[GoogleCloudVideointelligenceV1beta2_PersonDetectionAnnotation](#schemagooglecloudvideointelligencev1beta2_persondetectionannotation)]|false|none|Person detection annotations.|
|segment|[GoogleCloudVideointelligenceV1beta2_VideoSegment](#schemagooglecloudvideointelligencev1beta2_videosegment)|false|none|Video segment on which the annotation is run.|
|segmentLabelAnnotations|[[GoogleCloudVideointelligenceV1beta2_LabelAnnotation](#schemagooglecloudvideointelligencev1beta2_labelannotation)]|false|none|Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.|
|segmentPresenceLabelAnnotations|[[GoogleCloudVideointelligenceV1beta2_LabelAnnotation](#schemagooglecloudvideointelligencev1beta2_labelannotation)]|false|none|Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.|
|shotAnnotations|[[GoogleCloudVideointelligenceV1beta2_VideoSegment](#schemagooglecloudvideointelligencev1beta2_videosegment)]|false|none|Shot annotations. Each shot is represented as a video segment.|
|shotLabelAnnotations|[[GoogleCloudVideointelligenceV1beta2_LabelAnnotation](#schemagooglecloudvideointelligencev1beta2_labelannotation)]|false|none|Topical label annotations on shot level. There is exactly one element for each unique label.|
|shotPresenceLabelAnnotations|[[GoogleCloudVideointelligenceV1beta2_LabelAnnotation](#schemagooglecloudvideointelligencev1beta2_labelannotation)]|false|none|Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.|
|speechTranscriptions|[[GoogleCloudVideointelligenceV1beta2_SpeechTranscription](#schemagooglecloudvideointelligencev1beta2_speechtranscription)]|false|none|Speech transcription.|
|textAnnotations|[[GoogleCloudVideointelligenceV1beta2_TextAnnotation](#schemagooglecloudvideointelligencev1beta2_textannotation)]|false|none|OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_VideoSegment">GoogleCloudVideointelligenceV1beta2_VideoSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_videosegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_VideoSegment"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_videosegment"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_videosegment"></a>

```json
{
  "endTimeOffset": "string",
  "startTimeOffset": "string"
}
```

Video segment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTimeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).|
|startTimeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).|

<h2 id="tocS_GoogleCloudVideointelligenceV1beta2_WordInfo">GoogleCloudVideointelligenceV1beta2_WordInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1beta2_wordinfo"></a>
<a id="schema_GoogleCloudVideointelligenceV1beta2_WordInfo"></a>
<a id="tocSgooglecloudvideointelligencev1beta2_wordinfo"></a>
<a id="tocsgooglecloudvideointelligencev1beta2_wordinfo"></a>

```json
{
  "confidence": 0,
  "endTime": "string",
  "speakerTag": 0,
  "startTime": "string",
  "word": "string"
}
```

Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|read-only|Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.|
|endTime|string(google-duration)|false|none|Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.|
|speakerTag|integer(int32)|false|read-only|Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.|
|startTime|string(google-duration)|false|none|Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.|
|word|string|false|none|The word corresponding to this set of information.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgress">GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgress</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_annotatevideoprogress"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoProgress"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_annotatevideoprogress"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_annotatevideoprogress"></a>

```json
{
  "annotationProgress": [
    {
      "feature": "FEATURE_UNSPECIFIED",
      "inputUri": "string",
      "progressPercent": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "startTime": "string",
      "updateTime": "string"
    }
  ]
}
```

Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationProgress|[[GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress](#schemagooglecloudvideointelligencev1p1beta1_videoannotationprogress)]|false|none|Progress metadata for all videos specified in `AnnotateVideoRequest`.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponse">GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_annotatevideoresponse"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_AnnotateVideoResponse"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_annotatevideoresponse"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_annotatevideoresponse"></a>

```json
{
  "annotationResults": [
    {
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
      "explicitAnnotation": {
        "frames": [
          {
            "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
            "timeOffset": "string"
          }
        ],
        "version": "string"
      },
      "faceAnnotations": [
        {
          "frames": [
            {
              "normalizedBoundingBoxes": [
                {
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "top": 0
                }
              ],
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "thumbnail": "string"
        }
      ],
      "faceDetectionAnnotations": [
        {
          "thumbnail": "string",
          "tracks": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          ],
          "version": "string"
        }
      ],
      "frameLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "inputUri": "string",
      "logoRecognitionAnnotations": [
        {
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "segments": [
            {
              "endTimeOffset": "string",
              "startTimeOffset": "string"
            }
          ],
          "tracks": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          ]
        }
      ],
      "objectAnnotations": [
        {
          "confidence": 0,
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ],
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "trackId": "string",
          "version": "string"
        }
      ],
      "personDetectionAnnotations": [
        {
          "tracks": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          ],
          "version": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "segmentLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "segmentPresenceLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "shotAnnotations": [
        {
          "endTimeOffset": "string",
          "startTimeOffset": "string"
        }
      ],
      "shotLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "shotPresenceLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "speechTranscriptions": [
        {
          "alternatives": [
            {
              "confidence": 0,
              "transcript": "string",
              "words": [
                {
                  "confidence": 0,
                  "endTime": "string",
                  "speakerTag": 0,
                  "startTime": "string",
                  "word": "string"
                }
              ]
            }
          ],
          "languageCode": "string"
        }
      ],
      "textAnnotations": [
        {
          "segments": [
            {
              "confidence": 0,
              "frames": [
                {
                  "rotatedBoundingBox": {
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "timeOffset": "string"
                }
              ],
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "text": "string",
          "version": "string"
        }
      ]
    }
  ]
}
```

Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationResults|[[GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults](#schemagooglecloudvideointelligencev1p1beta1_videoannotationresults)]|false|none|Annotation results for all videos specified in `AnnotateVideoRequest`.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute">GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_detectedattribute"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_detectedattribute"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_detectedattribute"></a>

```json
{
  "confidence": 0,
  "name": "string",
  "value": "string"
}
```

A generic detected attribute represented by name in string format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Detected attribute confidence. Range [0, 1].|
|name|string|false|none|The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.|
|value|string|false|none|Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_DetectedLandmark">GoogleCloudVideointelligenceV1p1beta1_DetectedLandmark</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_detectedlandmark"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_DetectedLandmark"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_detectedlandmark"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_detectedlandmark"></a>

```json
{
  "confidence": 0,
  "name": "string",
  "point": {
    "x": 0,
    "y": 0
  }
}
```

A generic detected landmark represented by name in string format and a 2D location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|The confidence score of the detected landmark. Range [0, 1].|
|name|string|false|none|The name of this landmark, for example, left_hand, right_shoulder.|
|point|[GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex](#schemagooglecloudvideointelligencev1p1beta1_normalizedvertex)|false|none|The 2D point of the detected landmark using the normalized image coordindate system. The normalized coordinates have the range from 0 to 1.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_Entity">GoogleCloudVideointelligenceV1p1beta1_Entity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_entity"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_Entity"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_entity"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_entity"></a>

```json
{
  "description": "string",
  "entityId": "string",
  "languageCode": "string"
}
```

Detected entity from video analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Textual description, e.g., `Fixed-gear bicycle`.|
|entityId|string|false|none|Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).|
|languageCode|string|false|none|Language code for `description` in BCP-47 format.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation">GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_explicitcontentannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_explicitcontentannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_explicitcontentannotation"></a>

```json
{
  "frames": [
    {
      "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
      "timeOffset": "string"
    }
  ],
  "version": "string"
}
```

Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frames|[[GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame](#schemagooglecloudvideointelligencev1p1beta1_explicitcontentframe)]|false|none|All video frames where explicit content was detected.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame">GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_explicitcontentframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_ExplicitContentFrame"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_explicitcontentframe"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_explicitcontentframe"></a>

```json
{
  "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
  "timeOffset": "string"
}
```

Video frame level annotation results for explicit content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pornographyLikelihood|string|false|none|Likelihood of the pornography content..|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.|

#### Enumerated Values

|Property|Value|
|---|---|
|pornographyLikelihood|LIKELIHOOD_UNSPECIFIED|
|pornographyLikelihood|VERY_UNLIKELY|
|pornographyLikelihood|UNLIKELY|
|pornographyLikelihood|POSSIBLE|
|pornographyLikelihood|LIKELY|
|pornographyLikelihood|VERY_LIKELY|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_FaceAnnotation">GoogleCloudVideointelligenceV1p1beta1_FaceAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_faceannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_FaceAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_faceannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_faceannotation"></a>

```json
{
  "frames": [
    {
      "normalizedBoundingBoxes": [
        {
          "bottom": 0,
          "left": 0,
          "right": 0,
          "top": 0
        }
      ],
      "timeOffset": "string"
    }
  ],
  "segments": [
    {
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  ],
  "thumbnail": "string"
}
```

Deprecated. No effect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frames|[[GoogleCloudVideointelligenceV1p1beta1_FaceFrame](#schemagooglecloudvideointelligencev1p1beta1_faceframe)]|false|none|All video frames where a face was detected.|
|segments|[[GoogleCloudVideointelligenceV1p1beta1_FaceSegment](#schemagooglecloudvideointelligencev1p1beta1_facesegment)]|false|none|All video segments where a face was detected.|
|thumbnail|string(byte)|false|none|Thumbnail of a representative face view (in JPEG format).|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation">GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_facedetectionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_facedetectionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_facedetectionannotation"></a>

```json
{
  "thumbnail": "string",
  "tracks": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "timestampedObjects": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "landmarks": [
            {
              "confidence": 0,
              "name": "string",
              "point": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ]
    }
  ],
  "version": "string"
}
```

Face detection annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thumbnail|string(byte)|false|none|The thumbnail of a person's face.|
|tracks|[[GoogleCloudVideointelligenceV1p1beta1_Track](#schemagooglecloudvideointelligencev1p1beta1_track)]|false|none|The face tracks with attributes.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_FaceFrame">GoogleCloudVideointelligenceV1p1beta1_FaceFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_faceframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_FaceFrame"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_faceframe"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_faceframe"></a>

```json
{
  "normalizedBoundingBoxes": [
    {
      "bottom": 0,
      "left": 0,
      "right": 0,
      "top": 0
    }
  ],
  "timeOffset": "string"
}
```

Deprecated. No effect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedBoundingBoxes|[[GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox](#schemagooglecloudvideointelligencev1p1beta1_normalizedboundingbox)]|false|none|Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_FaceSegment">GoogleCloudVideointelligenceV1p1beta1_FaceSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_facesegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_FaceSegment"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_facesegment"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_facesegment"></a>

```json
{
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video segment level annotation results for face detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segment|[GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#schemagooglecloudvideointelligencev1p1beta1_videosegment)|false|none|Video segment where a face was detected.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation">GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_labelannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_labelannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_labelannotation"></a>

```json
{
  "categoryEntities": [
    {
      "description": "string",
      "entityId": "string",
      "languageCode": "string"
    }
  ],
  "entity": {
    "description": "string",
    "entityId": "string",
    "languageCode": "string"
  },
  "frames": [
    {
      "confidence": 0,
      "timeOffset": "string"
    }
  ],
  "segments": [
    {
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  ],
  "version": "string"
}
```

Label annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryEntities|[[GoogleCloudVideointelligenceV1p1beta1_Entity](#schemagooglecloudvideointelligencev1p1beta1_entity)]|false|none|Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.|
|entity|[GoogleCloudVideointelligenceV1p1beta1_Entity](#schemagooglecloudvideointelligencev1p1beta1_entity)|false|none|Detected entity.|
|frames|[[GoogleCloudVideointelligenceV1p1beta1_LabelFrame](#schemagooglecloudvideointelligencev1p1beta1_labelframe)]|false|none|All video frames where a label was detected.|
|segments|[[GoogleCloudVideointelligenceV1p1beta1_LabelSegment](#schemagooglecloudvideointelligencev1p1beta1_labelsegment)]|false|none|All video segments where a label was detected.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_LabelFrame">GoogleCloudVideointelligenceV1p1beta1_LabelFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_labelframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_LabelFrame"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_labelframe"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_labelframe"></a>

```json
{
  "confidence": 0,
  "timeOffset": "string"
}
```

Video frame level annotation results for label detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence that the label is accurate. Range: [0, 1].|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_LabelSegment">GoogleCloudVideointelligenceV1p1beta1_LabelSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_labelsegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_LabelSegment"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_labelsegment"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_labelsegment"></a>

```json
{
  "confidence": 0,
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video segment level annotation results for label detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence that the label is accurate. Range: [0, 1].|
|segment|[GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#schemagooglecloudvideointelligencev1p1beta1_videosegment)|false|none|Video segment where a label was detected.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotation">GoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_logorecognitionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_logorecognitionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_logorecognitionannotation"></a>

```json
{
  "entity": {
    "description": "string",
    "entityId": "string",
    "languageCode": "string"
  },
  "segments": [
    {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    }
  ],
  "tracks": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "timestampedObjects": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "landmarks": [
            {
              "confidence": 0,
              "name": "string",
              "point": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ]
    }
  ]
}
```

Annotation corresponding to one detected, tracked and recognized logo class.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|[GoogleCloudVideointelligenceV1p1beta1_Entity](#schemagooglecloudvideointelligencev1p1beta1_entity)|false|none|Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.|
|segments|[[GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#schemagooglecloudvideointelligencev1p1beta1_videosegment)]|false|none|All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.|
|tracks|[[GoogleCloudVideointelligenceV1p1beta1_Track](#schemagooglecloudvideointelligencev1p1beta1_track)]|false|none|All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox">GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_normalizedboundingbox"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_normalizedboundingbox"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_normalizedboundingbox"></a>

```json
{
  "bottom": 0,
  "left": 0,
  "right": 0,
  "top": 0
}
```

Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bottom|number(float)|false|none|Bottom Y coordinate.|
|left|number(float)|false|none|Left X coordinate.|
|right|number(float)|false|none|Right X coordinate.|
|top|number(float)|false|none|Top Y coordinate.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPoly">GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_normalizedboundingpoly"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPoly"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_normalizedboundingpoly"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_normalizedboundingpoly"></a>

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

Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vertices|[[GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex](#schemagooglecloudvideointelligencev1p1beta1_normalizedvertex)]|false|none|Normalized vertices of the bounding polygon.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex">GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_normalizedvertex"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_NormalizedVertex"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_normalizedvertex"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_normalizedvertex"></a>

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

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotation">GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_objecttrackingannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_objecttrackingannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_objecttrackingannotation"></a>

```json
{
  "confidence": 0,
  "entity": {
    "description": "string",
    "entityId": "string",
    "languageCode": "string"
  },
  "frames": [
    {
      "normalizedBoundingBox": {
        "bottom": 0,
        "left": 0,
        "right": 0,
        "top": 0
      },
      "timeOffset": "string"
    }
  ],
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "trackId": "string",
  "version": "string"
}
```

Annotations corresponding to one tracked object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Object category's labeling confidence of this track.|
|entity|[GoogleCloudVideointelligenceV1p1beta1_Entity](#schemagooglecloudvideointelligencev1p1beta1_entity)|false|none|Entity to specify the object category that this track is labeled as.|
|frames|[[GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrame](#schemagooglecloudvideointelligencev1p1beta1_objecttrackingframe)]|false|none|Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.|
|segment|[GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#schemagooglecloudvideointelligencev1p1beta1_videosegment)|false|none|Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.|
|trackId|string(int64)|false|none|Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrame">GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_objecttrackingframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingFrame"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_objecttrackingframe"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_objecttrackingframe"></a>

```json
{
  "normalizedBoundingBox": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "top": 0
  },
  "timeOffset": "string"
}
```

Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedBoundingBox|[GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox](#schemagooglecloudvideointelligencev1p1beta1_normalizedboundingbox)|false|none|The normalized bounding box location of this object track for the frame.|
|timeOffset|string(google-duration)|false|none|The timestamp of the frame in microseconds.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_PersonDetectionAnnotation">GoogleCloudVideointelligenceV1p1beta1_PersonDetectionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_persondetectionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_PersonDetectionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_persondetectionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_persondetectionannotation"></a>

```json
{
  "tracks": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "timestampedObjects": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "landmarks": [
            {
              "confidence": 0,
              "name": "string",
              "point": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ]
    }
  ],
  "version": "string"
}
```

Person detection annotation per video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tracks|[[GoogleCloudVideointelligenceV1p1beta1_Track](#schemagooglecloudvideointelligencev1p1beta1_track)]|false|none|The detected tracks of a person.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative">GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_speechrecognitionalternative"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_speechrecognitionalternative"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_speechrecognitionalternative"></a>

```json
{
  "confidence": 0,
  "transcript": "string",
  "words": [
    {
      "confidence": 0,
      "endTime": "string",
      "speakerTag": 0,
      "startTime": "string",
      "word": "string"
    }
  ]
}
```

Alternative hypotheses (a.k.a. n-best list).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|read-only|Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.|
|transcript|string|false|none|Transcript text representing the words that the user spoke.|
|words|[[GoogleCloudVideointelligenceV1p1beta1_WordInfo](#schemagooglecloudvideointelligencev1p1beta1_wordinfo)]|false|read-only|Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription">GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_speechtranscription"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_speechtranscription"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_speechtranscription"></a>

```json
{
  "alternatives": [
    {
      "confidence": 0,
      "transcript": "string",
      "words": [
        {
          "confidence": 0,
          "endTime": "string",
          "speakerTag": 0,
          "startTime": "string",
          "word": "string"
        }
      ]
    }
  ],
  "languageCode": "string"
}
```

A speech recognition result corresponding to a portion of the audio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternatives|[[GoogleCloudVideointelligenceV1p1beta1_SpeechRecognitionAlternative](#schemagooglecloudvideointelligencev1p1beta1_speechrecognitionalternative)]|false|none|May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.|
|languageCode|string|false|read-only|Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_TextAnnotation">GoogleCloudVideointelligenceV1p1beta1_TextAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_textannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_TextAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_textannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_textannotation"></a>

```json
{
  "segments": [
    {
      "confidence": 0,
      "frames": [
        {
          "rotatedBoundingBox": {
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "timeOffset": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  ],
  "text": "string",
  "version": "string"
}
```

Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segments|[[GoogleCloudVideointelligenceV1p1beta1_TextSegment](#schemagooglecloudvideointelligencev1p1beta1_textsegment)]|false|none|All video segments where OCR detected text appears.|
|text|string|false|none|The detected text.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_TextFrame">GoogleCloudVideointelligenceV1p1beta1_TextFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_textframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_TextFrame"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_textframe"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_textframe"></a>

```json
{
  "rotatedBoundingBox": {
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "timeOffset": "string"
}
```

Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rotatedBoundingBox|[GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingPoly](#schemagooglecloudvideointelligencev1p1beta1_normalizedboundingpoly)|false|none|Bounding polygon of the detected text for this frame.|
|timeOffset|string(google-duration)|false|none|Timestamp of this frame.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_TextSegment">GoogleCloudVideointelligenceV1p1beta1_TextSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_textsegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_TextSegment"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_textsegment"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_textsegment"></a>

```json
{
  "confidence": 0,
  "frames": [
    {
      "rotatedBoundingBox": {
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "timeOffset": "string"
    }
  ],
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video segment level annotation results for text detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.|
|frames|[[GoogleCloudVideointelligenceV1p1beta1_TextFrame](#schemagooglecloudvideointelligencev1p1beta1_textframe)]|false|none|Information related to the frames where OCR detected text appears.|
|segment|[GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#schemagooglecloudvideointelligencev1p1beta1_videosegment)|false|none|Video segment where a text snippet was detected.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_TimestampedObject">GoogleCloudVideointelligenceV1p1beta1_TimestampedObject</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_timestampedobject"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_TimestampedObject"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_timestampedobject"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_timestampedobject"></a>

```json
{
  "attributes": [
    {
      "confidence": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "landmarks": [
    {
      "confidence": 0,
      "name": "string",
      "point": {
        "x": 0,
        "y": 0
      }
    }
  ],
  "normalizedBoundingBox": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "top": 0
  },
  "timeOffset": "string"
}
```

For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute](#schemagooglecloudvideointelligencev1p1beta1_detectedattribute)]|false|none|Optional. The attributes of the object in the bounding box.|
|landmarks|[[GoogleCloudVideointelligenceV1p1beta1_DetectedLandmark](#schemagooglecloudvideointelligencev1p1beta1_detectedlandmark)]|false|none|Optional. The detected landmarks.|
|normalizedBoundingBox|[GoogleCloudVideointelligenceV1p1beta1_NormalizedBoundingBox](#schemagooglecloudvideointelligencev1p1beta1_normalizedboundingbox)|false|none|Normalized Bounding box in a frame, where the object is located.|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_Track">GoogleCloudVideointelligenceV1p1beta1_Track</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_track"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_Track"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_track"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_track"></a>

```json
{
  "attributes": [
    {
      "confidence": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "confidence": 0,
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "timestampedObjects": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "landmarks": [
        {
          "confidence": 0,
          "name": "string",
          "point": {
            "x": 0,
            "y": 0
          }
        }
      ],
      "normalizedBoundingBox": {
        "bottom": 0,
        "left": 0,
        "right": 0,
        "top": 0
      },
      "timeOffset": "string"
    }
  ]
}
```

A track of an object instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[GoogleCloudVideointelligenceV1p1beta1_DetectedAttribute](#schemagooglecloudvideointelligencev1p1beta1_detectedattribute)]|false|none|Optional. Attributes in the track level.|
|confidence|number(float)|false|none|Optional. The confidence score of the tracked object.|
|segment|[GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#schemagooglecloudvideointelligencev1p1beta1_videosegment)|false|none|Video segment of a track.|
|timestampedObjects|[[GoogleCloudVideointelligenceV1p1beta1_TimestampedObject](#schemagooglecloudvideointelligencev1p1beta1_timestampedobject)]|false|none|The object with timestamp and attributes per frame in the track.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress">GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_videoannotationprogress"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationProgress"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_videoannotationprogress"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_videoannotationprogress"></a>

```json
{
  "feature": "FEATURE_UNSPECIFIED",
  "inputUri": "string",
  "progressPercent": 0,
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "startTime": "string",
  "updateTime": "string"
}
```

Annotation progress for a single video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feature|string|false|none|Specifies which feature is being tracked if the request contains more than one feature.|
|inputUri|string|false|none|Video file location in [Cloud Storage](https://cloud.google.com/storage/).|
|progressPercent|integer(int32)|false|none|Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.|
|segment|[GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#schemagooglecloudvideointelligencev1p1beta1_videosegment)|false|none|Specifies which segment is being tracked if the request contains more than one segment.|
|startTime|string(google-datetime)|false|none|Time when the request was received.|
|updateTime|string(google-datetime)|false|none|Time of the most recent update.|

#### Enumerated Values

|Property|Value|
|---|---|
|feature|FEATURE_UNSPECIFIED|
|feature|LABEL_DETECTION|
|feature|SHOT_CHANGE_DETECTION|
|feature|EXPLICIT_CONTENT_DETECTION|
|feature|FACE_DETECTION|
|feature|SPEECH_TRANSCRIPTION|
|feature|TEXT_DETECTION|
|feature|OBJECT_TRACKING|
|feature|LOGO_RECOGNITION|
|feature|PERSON_DETECTION|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults">GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_videoannotationresults"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_VideoAnnotationResults"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_videoannotationresults"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_videoannotationresults"></a>

```json
{
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
  "explicitAnnotation": {
    "frames": [
      {
        "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
        "timeOffset": "string"
      }
    ],
    "version": "string"
  },
  "faceAnnotations": [
    {
      "frames": [
        {
          "normalizedBoundingBoxes": [
            {
              "bottom": 0,
              "left": 0,
              "right": 0,
              "top": 0
            }
          ],
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "thumbnail": "string"
    }
  ],
  "faceDetectionAnnotations": [
    {
      "thumbnail": "string",
      "tracks": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      ],
      "version": "string"
    }
  ],
  "frameLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "inputUri": "string",
  "logoRecognitionAnnotations": [
    {
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "segments": [
        {
          "endTimeOffset": "string",
          "startTimeOffset": "string"
        }
      ],
      "tracks": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      ]
    }
  ],
  "objectAnnotations": [
    {
      "confidence": 0,
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "trackId": "string",
      "version": "string"
    }
  ],
  "personDetectionAnnotations": [
    {
      "tracks": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      ],
      "version": "string"
    }
  ],
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "segmentLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "segmentPresenceLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "shotAnnotations": [
    {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    }
  ],
  "shotLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "shotPresenceLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "speechTranscriptions": [
    {
      "alternatives": [
        {
          "confidence": 0,
          "transcript": "string",
          "words": [
            {
              "confidence": 0,
              "endTime": "string",
              "speakerTag": 0,
              "startTime": "string",
              "word": "string"
            }
          ]
        }
      ],
      "languageCode": "string"
    }
  ],
  "textAnnotations": [
    {
      "segments": [
        {
          "confidence": 0,
          "frames": [
            {
              "rotatedBoundingBox": {
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "timeOffset": "string"
            }
          ],
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "text": "string",
      "version": "string"
    }
  ]
}
```

Annotation results for a single video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[GoogleRpc_Status](#schemagooglerpc_status)|false|none|If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.|
|explicitAnnotation|[GoogleCloudVideointelligenceV1p1beta1_ExplicitContentAnnotation](#schemagooglecloudvideointelligencev1p1beta1_explicitcontentannotation)|false|none|Explicit content annotation.|
|faceAnnotations|[[GoogleCloudVideointelligenceV1p1beta1_FaceAnnotation](#schemagooglecloudvideointelligencev1p1beta1_faceannotation)]|false|none|Deprecated. Please use `face_detection_annotations` instead.|
|faceDetectionAnnotations|[[GoogleCloudVideointelligenceV1p1beta1_FaceDetectionAnnotation](#schemagooglecloudvideointelligencev1p1beta1_facedetectionannotation)]|false|none|Face detection annotations.|
|frameLabelAnnotations|[[GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p1beta1_labelannotation)]|false|none|Label annotations on frame level. There is exactly one element for each unique label.|
|inputUri|string|false|none|Video file location in [Cloud Storage](https://cloud.google.com/storage/).|
|logoRecognitionAnnotations|[[GoogleCloudVideointelligenceV1p1beta1_LogoRecognitionAnnotation](#schemagooglecloudvideointelligencev1p1beta1_logorecognitionannotation)]|false|none|Annotations for list of logos detected, tracked and recognized in video.|
|objectAnnotations|[[GoogleCloudVideointelligenceV1p1beta1_ObjectTrackingAnnotation](#schemagooglecloudvideointelligencev1p1beta1_objecttrackingannotation)]|false|none|Annotations for list of objects detected and tracked in video.|
|personDetectionAnnotations|[[GoogleCloudVideointelligenceV1p1beta1_PersonDetectionAnnotation](#schemagooglecloudvideointelligencev1p1beta1_persondetectionannotation)]|false|none|Person detection annotations.|
|segment|[GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#schemagooglecloudvideointelligencev1p1beta1_videosegment)|false|none|Video segment on which the annotation is run.|
|segmentLabelAnnotations|[[GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p1beta1_labelannotation)]|false|none|Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.|
|segmentPresenceLabelAnnotations|[[GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p1beta1_labelannotation)]|false|none|Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.|
|shotAnnotations|[[GoogleCloudVideointelligenceV1p1beta1_VideoSegment](#schemagooglecloudvideointelligencev1p1beta1_videosegment)]|false|none|Shot annotations. Each shot is represented as a video segment.|
|shotLabelAnnotations|[[GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p1beta1_labelannotation)]|false|none|Topical label annotations on shot level. There is exactly one element for each unique label.|
|shotPresenceLabelAnnotations|[[GoogleCloudVideointelligenceV1p1beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p1beta1_labelannotation)]|false|none|Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.|
|speechTranscriptions|[[GoogleCloudVideointelligenceV1p1beta1_SpeechTranscription](#schemagooglecloudvideointelligencev1p1beta1_speechtranscription)]|false|none|Speech transcription.|
|textAnnotations|[[GoogleCloudVideointelligenceV1p1beta1_TextAnnotation](#schemagooglecloudvideointelligencev1p1beta1_textannotation)]|false|none|OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_VideoSegment">GoogleCloudVideointelligenceV1p1beta1_VideoSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_videosegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_VideoSegment"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_videosegment"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_videosegment"></a>

```json
{
  "endTimeOffset": "string",
  "startTimeOffset": "string"
}
```

Video segment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTimeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).|
|startTimeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).|

<h2 id="tocS_GoogleCloudVideointelligenceV1p1beta1_WordInfo">GoogleCloudVideointelligenceV1p1beta1_WordInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p1beta1_wordinfo"></a>
<a id="schema_GoogleCloudVideointelligenceV1p1beta1_WordInfo"></a>
<a id="tocSgooglecloudvideointelligencev1p1beta1_wordinfo"></a>
<a id="tocsgooglecloudvideointelligencev1p1beta1_wordinfo"></a>

```json
{
  "confidence": 0,
  "endTime": "string",
  "speakerTag": 0,
  "startTime": "string",
  "word": "string"
}
```

Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|read-only|Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.|
|endTime|string(google-duration)|false|none|Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.|
|speakerTag|integer(int32)|false|read-only|Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.|
|startTime|string(google-duration)|false|none|Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.|
|word|string|false|none|The word corresponding to this set of information.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoProgress">GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoProgress</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_annotatevideoprogress"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoProgress"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_annotatevideoprogress"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_annotatevideoprogress"></a>

```json
{
  "annotationProgress": [
    {
      "feature": "FEATURE_UNSPECIFIED",
      "inputUri": "string",
      "progressPercent": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "startTime": "string",
      "updateTime": "string"
    }
  ]
}
```

Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationProgress|[[GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgress](#schemagooglecloudvideointelligencev1p2beta1_videoannotationprogress)]|false|none|Progress metadata for all videos specified in `AnnotateVideoRequest`.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoResponse">GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_annotatevideoresponse"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_AnnotateVideoResponse"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_annotatevideoresponse"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_annotatevideoresponse"></a>

```json
{
  "annotationResults": [
    {
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
      "explicitAnnotation": {
        "frames": [
          {
            "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
            "timeOffset": "string"
          }
        ],
        "version": "string"
      },
      "faceAnnotations": [
        {
          "frames": [
            {
              "normalizedBoundingBoxes": [
                {
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "top": 0
                }
              ],
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "thumbnail": "string"
        }
      ],
      "faceDetectionAnnotations": [
        {
          "thumbnail": "string",
          "tracks": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          ],
          "version": "string"
        }
      ],
      "frameLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "inputUri": "string",
      "logoRecognitionAnnotations": [
        {
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "segments": [
            {
              "endTimeOffset": "string",
              "startTimeOffset": "string"
            }
          ],
          "tracks": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          ]
        }
      ],
      "objectAnnotations": [
        {
          "confidence": 0,
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ],
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "trackId": "string",
          "version": "string"
        }
      ],
      "personDetectionAnnotations": [
        {
          "tracks": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          ],
          "version": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "segmentLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "segmentPresenceLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "shotAnnotations": [
        {
          "endTimeOffset": "string",
          "startTimeOffset": "string"
        }
      ],
      "shotLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "shotPresenceLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "speechTranscriptions": [
        {
          "alternatives": [
            {
              "confidence": 0,
              "transcript": "string",
              "words": [
                {
                  "confidence": 0,
                  "endTime": "string",
                  "speakerTag": 0,
                  "startTime": "string",
                  "word": "string"
                }
              ]
            }
          ],
          "languageCode": "string"
        }
      ],
      "textAnnotations": [
        {
          "segments": [
            {
              "confidence": 0,
              "frames": [
                {
                  "rotatedBoundingBox": {
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "timeOffset": "string"
                }
              ],
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "text": "string",
          "version": "string"
        }
      ]
    }
  ]
}
```

Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationResults|[[GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResults](#schemagooglecloudvideointelligencev1p2beta1_videoannotationresults)]|false|none|Annotation results for all videos specified in `AnnotateVideoRequest`.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute">GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_detectedattribute"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_detectedattribute"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_detectedattribute"></a>

```json
{
  "confidence": 0,
  "name": "string",
  "value": "string"
}
```

A generic detected attribute represented by name in string format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Detected attribute confidence. Range [0, 1].|
|name|string|false|none|The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.|
|value|string|false|none|Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_DetectedLandmark">GoogleCloudVideointelligenceV1p2beta1_DetectedLandmark</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_detectedlandmark"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_DetectedLandmark"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_detectedlandmark"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_detectedlandmark"></a>

```json
{
  "confidence": 0,
  "name": "string",
  "point": {
    "x": 0,
    "y": 0
  }
}
```

A generic detected landmark represented by name in string format and a 2D location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|The confidence score of the detected landmark. Range [0, 1].|
|name|string|false|none|The name of this landmark, for example, left_hand, right_shoulder.|
|point|[GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex](#schemagooglecloudvideointelligencev1p2beta1_normalizedvertex)|false|none|The 2D point of the detected landmark using the normalized image coordindate system. The normalized coordinates have the range from 0 to 1.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_Entity">GoogleCloudVideointelligenceV1p2beta1_Entity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_entity"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_Entity"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_entity"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_entity"></a>

```json
{
  "description": "string",
  "entityId": "string",
  "languageCode": "string"
}
```

Detected entity from video analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Textual description, e.g., `Fixed-gear bicycle`.|
|entityId|string|false|none|Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).|
|languageCode|string|false|none|Language code for `description` in BCP-47 format.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotation">GoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_explicitcontentannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_explicitcontentannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_explicitcontentannotation"></a>

```json
{
  "frames": [
    {
      "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
      "timeOffset": "string"
    }
  ],
  "version": "string"
}
```

Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frames|[[GoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrame](#schemagooglecloudvideointelligencev1p2beta1_explicitcontentframe)]|false|none|All video frames where explicit content was detected.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrame">GoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_explicitcontentframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_ExplicitContentFrame"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_explicitcontentframe"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_explicitcontentframe"></a>

```json
{
  "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
  "timeOffset": "string"
}
```

Video frame level annotation results for explicit content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pornographyLikelihood|string|false|none|Likelihood of the pornography content..|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.|

#### Enumerated Values

|Property|Value|
|---|---|
|pornographyLikelihood|LIKELIHOOD_UNSPECIFIED|
|pornographyLikelihood|VERY_UNLIKELY|
|pornographyLikelihood|UNLIKELY|
|pornographyLikelihood|POSSIBLE|
|pornographyLikelihood|LIKELY|
|pornographyLikelihood|VERY_LIKELY|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_FaceAnnotation">GoogleCloudVideointelligenceV1p2beta1_FaceAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_faceannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_FaceAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_faceannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_faceannotation"></a>

```json
{
  "frames": [
    {
      "normalizedBoundingBoxes": [
        {
          "bottom": 0,
          "left": 0,
          "right": 0,
          "top": 0
        }
      ],
      "timeOffset": "string"
    }
  ],
  "segments": [
    {
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  ],
  "thumbnail": "string"
}
```

Deprecated. No effect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frames|[[GoogleCloudVideointelligenceV1p2beta1_FaceFrame](#schemagooglecloudvideointelligencev1p2beta1_faceframe)]|false|none|All video frames where a face was detected.|
|segments|[[GoogleCloudVideointelligenceV1p2beta1_FaceSegment](#schemagooglecloudvideointelligencev1p2beta1_facesegment)]|false|none|All video segments where a face was detected.|
|thumbnail|string(byte)|false|none|Thumbnail of a representative face view (in JPEG format).|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_FaceDetectionAnnotation">GoogleCloudVideointelligenceV1p2beta1_FaceDetectionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_facedetectionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_FaceDetectionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_facedetectionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_facedetectionannotation"></a>

```json
{
  "thumbnail": "string",
  "tracks": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "timestampedObjects": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "landmarks": [
            {
              "confidence": 0,
              "name": "string",
              "point": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ]
    }
  ],
  "version": "string"
}
```

Face detection annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thumbnail|string(byte)|false|none|The thumbnail of a person's face.|
|tracks|[[GoogleCloudVideointelligenceV1p2beta1_Track](#schemagooglecloudvideointelligencev1p2beta1_track)]|false|none|The face tracks with attributes.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_FaceFrame">GoogleCloudVideointelligenceV1p2beta1_FaceFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_faceframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_FaceFrame"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_faceframe"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_faceframe"></a>

```json
{
  "normalizedBoundingBoxes": [
    {
      "bottom": 0,
      "left": 0,
      "right": 0,
      "top": 0
    }
  ],
  "timeOffset": "string"
}
```

Deprecated. No effect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedBoundingBoxes|[[GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox](#schemagooglecloudvideointelligencev1p2beta1_normalizedboundingbox)]|false|none|Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_FaceSegment">GoogleCloudVideointelligenceV1p2beta1_FaceSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_facesegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_FaceSegment"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_facesegment"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_facesegment"></a>

```json
{
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video segment level annotation results for face detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segment|[GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#schemagooglecloudvideointelligencev1p2beta1_videosegment)|false|none|Video segment where a face was detected.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation">GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_labelannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_labelannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_labelannotation"></a>

```json
{
  "categoryEntities": [
    {
      "description": "string",
      "entityId": "string",
      "languageCode": "string"
    }
  ],
  "entity": {
    "description": "string",
    "entityId": "string",
    "languageCode": "string"
  },
  "frames": [
    {
      "confidence": 0,
      "timeOffset": "string"
    }
  ],
  "segments": [
    {
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  ],
  "version": "string"
}
```

Label annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryEntities|[[GoogleCloudVideointelligenceV1p2beta1_Entity](#schemagooglecloudvideointelligencev1p2beta1_entity)]|false|none|Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.|
|entity|[GoogleCloudVideointelligenceV1p2beta1_Entity](#schemagooglecloudvideointelligencev1p2beta1_entity)|false|none|Detected entity.|
|frames|[[GoogleCloudVideointelligenceV1p2beta1_LabelFrame](#schemagooglecloudvideointelligencev1p2beta1_labelframe)]|false|none|All video frames where a label was detected.|
|segments|[[GoogleCloudVideointelligenceV1p2beta1_LabelSegment](#schemagooglecloudvideointelligencev1p2beta1_labelsegment)]|false|none|All video segments where a label was detected.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_LabelFrame">GoogleCloudVideointelligenceV1p2beta1_LabelFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_labelframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_LabelFrame"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_labelframe"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_labelframe"></a>

```json
{
  "confidence": 0,
  "timeOffset": "string"
}
```

Video frame level annotation results for label detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence that the label is accurate. Range: [0, 1].|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_LabelSegment">GoogleCloudVideointelligenceV1p2beta1_LabelSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_labelsegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_LabelSegment"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_labelsegment"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_labelsegment"></a>

```json
{
  "confidence": 0,
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video segment level annotation results for label detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence that the label is accurate. Range: [0, 1].|
|segment|[GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#schemagooglecloudvideointelligencev1p2beta1_videosegment)|false|none|Video segment where a label was detected.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotation">GoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_logorecognitionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_logorecognitionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_logorecognitionannotation"></a>

```json
{
  "entity": {
    "description": "string",
    "entityId": "string",
    "languageCode": "string"
  },
  "segments": [
    {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    }
  ],
  "tracks": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "timestampedObjects": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "landmarks": [
            {
              "confidence": 0,
              "name": "string",
              "point": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ]
    }
  ]
}
```

Annotation corresponding to one detected, tracked and recognized logo class.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|[GoogleCloudVideointelligenceV1p2beta1_Entity](#schemagooglecloudvideointelligencev1p2beta1_entity)|false|none|Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.|
|segments|[[GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#schemagooglecloudvideointelligencev1p2beta1_videosegment)]|false|none|All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.|
|tracks|[[GoogleCloudVideointelligenceV1p2beta1_Track](#schemagooglecloudvideointelligencev1p2beta1_track)]|false|none|All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox">GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_normalizedboundingbox"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_normalizedboundingbox"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_normalizedboundingbox"></a>

```json
{
  "bottom": 0,
  "left": 0,
  "right": 0,
  "top": 0
}
```

Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bottom|number(float)|false|none|Bottom Y coordinate.|
|left|number(float)|false|none|Left X coordinate.|
|right|number(float)|false|none|Right X coordinate.|
|top|number(float)|false|none|Top Y coordinate.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPoly">GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_normalizedboundingpoly"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPoly"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_normalizedboundingpoly"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_normalizedboundingpoly"></a>

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

Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vertices|[[GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex](#schemagooglecloudvideointelligencev1p2beta1_normalizedvertex)]|false|none|Normalized vertices of the bounding polygon.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex">GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_normalizedvertex"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_NormalizedVertex"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_normalizedvertex"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_normalizedvertex"></a>

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

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotation">GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_objecttrackingannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_objecttrackingannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_objecttrackingannotation"></a>

```json
{
  "confidence": 0,
  "entity": {
    "description": "string",
    "entityId": "string",
    "languageCode": "string"
  },
  "frames": [
    {
      "normalizedBoundingBox": {
        "bottom": 0,
        "left": 0,
        "right": 0,
        "top": 0
      },
      "timeOffset": "string"
    }
  ],
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "trackId": "string",
  "version": "string"
}
```

Annotations corresponding to one tracked object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Object category's labeling confidence of this track.|
|entity|[GoogleCloudVideointelligenceV1p2beta1_Entity](#schemagooglecloudvideointelligencev1p2beta1_entity)|false|none|Entity to specify the object category that this track is labeled as.|
|frames|[[GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrame](#schemagooglecloudvideointelligencev1p2beta1_objecttrackingframe)]|false|none|Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.|
|segment|[GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#schemagooglecloudvideointelligencev1p2beta1_videosegment)|false|none|Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.|
|trackId|string(int64)|false|none|Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrame">GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_objecttrackingframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingFrame"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_objecttrackingframe"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_objecttrackingframe"></a>

```json
{
  "normalizedBoundingBox": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "top": 0
  },
  "timeOffset": "string"
}
```

Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedBoundingBox|[GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox](#schemagooglecloudvideointelligencev1p2beta1_normalizedboundingbox)|false|none|The normalized bounding box location of this object track for the frame.|
|timeOffset|string(google-duration)|false|none|The timestamp of the frame in microseconds.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_PersonDetectionAnnotation">GoogleCloudVideointelligenceV1p2beta1_PersonDetectionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_persondetectionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_PersonDetectionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_persondetectionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_persondetectionannotation"></a>

```json
{
  "tracks": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "timestampedObjects": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "landmarks": [
            {
              "confidence": 0,
              "name": "string",
              "point": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ]
    }
  ],
  "version": "string"
}
```

Person detection annotation per video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tracks|[[GoogleCloudVideointelligenceV1p2beta1_Track](#schemagooglecloudvideointelligencev1p2beta1_track)]|false|none|The detected tracks of a person.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternative">GoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternative</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_speechrecognitionalternative"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternative"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_speechrecognitionalternative"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_speechrecognitionalternative"></a>

```json
{
  "confidence": 0,
  "transcript": "string",
  "words": [
    {
      "confidence": 0,
      "endTime": "string",
      "speakerTag": 0,
      "startTime": "string",
      "word": "string"
    }
  ]
}
```

Alternative hypotheses (a.k.a. n-best list).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|read-only|Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.|
|transcript|string|false|none|Transcript text representing the words that the user spoke.|
|words|[[GoogleCloudVideointelligenceV1p2beta1_WordInfo](#schemagooglecloudvideointelligencev1p2beta1_wordinfo)]|false|read-only|Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_SpeechTranscription">GoogleCloudVideointelligenceV1p2beta1_SpeechTranscription</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_speechtranscription"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_SpeechTranscription"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_speechtranscription"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_speechtranscription"></a>

```json
{
  "alternatives": [
    {
      "confidence": 0,
      "transcript": "string",
      "words": [
        {
          "confidence": 0,
          "endTime": "string",
          "speakerTag": 0,
          "startTime": "string",
          "word": "string"
        }
      ]
    }
  ],
  "languageCode": "string"
}
```

A speech recognition result corresponding to a portion of the audio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternatives|[[GoogleCloudVideointelligenceV1p2beta1_SpeechRecognitionAlternative](#schemagooglecloudvideointelligencev1p2beta1_speechrecognitionalternative)]|false|none|May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.|
|languageCode|string|false|read-only|Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_TextAnnotation">GoogleCloudVideointelligenceV1p2beta1_TextAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_textannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_TextAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_textannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_textannotation"></a>

```json
{
  "segments": [
    {
      "confidence": 0,
      "frames": [
        {
          "rotatedBoundingBox": {
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "timeOffset": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  ],
  "text": "string",
  "version": "string"
}
```

Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segments|[[GoogleCloudVideointelligenceV1p2beta1_TextSegment](#schemagooglecloudvideointelligencev1p2beta1_textsegment)]|false|none|All video segments where OCR detected text appears.|
|text|string|false|none|The detected text.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_TextFrame">GoogleCloudVideointelligenceV1p2beta1_TextFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_textframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_TextFrame"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_textframe"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_textframe"></a>

```json
{
  "rotatedBoundingBox": {
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "timeOffset": "string"
}
```

Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rotatedBoundingBox|[GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingPoly](#schemagooglecloudvideointelligencev1p2beta1_normalizedboundingpoly)|false|none|Bounding polygon of the detected text for this frame.|
|timeOffset|string(google-duration)|false|none|Timestamp of this frame.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_TextSegment">GoogleCloudVideointelligenceV1p2beta1_TextSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_textsegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_TextSegment"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_textsegment"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_textsegment"></a>

```json
{
  "confidence": 0,
  "frames": [
    {
      "rotatedBoundingBox": {
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "timeOffset": "string"
    }
  ],
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video segment level annotation results for text detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.|
|frames|[[GoogleCloudVideointelligenceV1p2beta1_TextFrame](#schemagooglecloudvideointelligencev1p2beta1_textframe)]|false|none|Information related to the frames where OCR detected text appears.|
|segment|[GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#schemagooglecloudvideointelligencev1p2beta1_videosegment)|false|none|Video segment where a text snippet was detected.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_TimestampedObject">GoogleCloudVideointelligenceV1p2beta1_TimestampedObject</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_timestampedobject"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_TimestampedObject"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_timestampedobject"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_timestampedobject"></a>

```json
{
  "attributes": [
    {
      "confidence": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "landmarks": [
    {
      "confidence": 0,
      "name": "string",
      "point": {
        "x": 0,
        "y": 0
      }
    }
  ],
  "normalizedBoundingBox": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "top": 0
  },
  "timeOffset": "string"
}
```

For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute](#schemagooglecloudvideointelligencev1p2beta1_detectedattribute)]|false|none|Optional. The attributes of the object in the bounding box.|
|landmarks|[[GoogleCloudVideointelligenceV1p2beta1_DetectedLandmark](#schemagooglecloudvideointelligencev1p2beta1_detectedlandmark)]|false|none|Optional. The detected landmarks.|
|normalizedBoundingBox|[GoogleCloudVideointelligenceV1p2beta1_NormalizedBoundingBox](#schemagooglecloudvideointelligencev1p2beta1_normalizedboundingbox)|false|none|Normalized Bounding box in a frame, where the object is located.|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_Track">GoogleCloudVideointelligenceV1p2beta1_Track</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_track"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_Track"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_track"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_track"></a>

```json
{
  "attributes": [
    {
      "confidence": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "confidence": 0,
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "timestampedObjects": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "landmarks": [
        {
          "confidence": 0,
          "name": "string",
          "point": {
            "x": 0,
            "y": 0
          }
        }
      ],
      "normalizedBoundingBox": {
        "bottom": 0,
        "left": 0,
        "right": 0,
        "top": 0
      },
      "timeOffset": "string"
    }
  ]
}
```

A track of an object instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[GoogleCloudVideointelligenceV1p2beta1_DetectedAttribute](#schemagooglecloudvideointelligencev1p2beta1_detectedattribute)]|false|none|Optional. Attributes in the track level.|
|confidence|number(float)|false|none|Optional. The confidence score of the tracked object.|
|segment|[GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#schemagooglecloudvideointelligencev1p2beta1_videosegment)|false|none|Video segment of a track.|
|timestampedObjects|[[GoogleCloudVideointelligenceV1p2beta1_TimestampedObject](#schemagooglecloudvideointelligencev1p2beta1_timestampedobject)]|false|none|The object with timestamp and attributes per frame in the track.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgress">GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgress</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_videoannotationprogress"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationProgress"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_videoannotationprogress"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_videoannotationprogress"></a>

```json
{
  "feature": "FEATURE_UNSPECIFIED",
  "inputUri": "string",
  "progressPercent": 0,
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "startTime": "string",
  "updateTime": "string"
}
```

Annotation progress for a single video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feature|string|false|none|Specifies which feature is being tracked if the request contains more than one feature.|
|inputUri|string|false|none|Video file location in [Cloud Storage](https://cloud.google.com/storage/).|
|progressPercent|integer(int32)|false|none|Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.|
|segment|[GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#schemagooglecloudvideointelligencev1p2beta1_videosegment)|false|none|Specifies which segment is being tracked if the request contains more than one segment.|
|startTime|string(google-datetime)|false|none|Time when the request was received.|
|updateTime|string(google-datetime)|false|none|Time of the most recent update.|

#### Enumerated Values

|Property|Value|
|---|---|
|feature|FEATURE_UNSPECIFIED|
|feature|LABEL_DETECTION|
|feature|SHOT_CHANGE_DETECTION|
|feature|EXPLICIT_CONTENT_DETECTION|
|feature|FACE_DETECTION|
|feature|SPEECH_TRANSCRIPTION|
|feature|TEXT_DETECTION|
|feature|OBJECT_TRACKING|
|feature|LOGO_RECOGNITION|
|feature|PERSON_DETECTION|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResults">GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResults</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_videoannotationresults"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_VideoAnnotationResults"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_videoannotationresults"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_videoannotationresults"></a>

```json
{
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
  "explicitAnnotation": {
    "frames": [
      {
        "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
        "timeOffset": "string"
      }
    ],
    "version": "string"
  },
  "faceAnnotations": [
    {
      "frames": [
        {
          "normalizedBoundingBoxes": [
            {
              "bottom": 0,
              "left": 0,
              "right": 0,
              "top": 0
            }
          ],
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "thumbnail": "string"
    }
  ],
  "faceDetectionAnnotations": [
    {
      "thumbnail": "string",
      "tracks": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      ],
      "version": "string"
    }
  ],
  "frameLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "inputUri": "string",
  "logoRecognitionAnnotations": [
    {
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "segments": [
        {
          "endTimeOffset": "string",
          "startTimeOffset": "string"
        }
      ],
      "tracks": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      ]
    }
  ],
  "objectAnnotations": [
    {
      "confidence": 0,
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "trackId": "string",
      "version": "string"
    }
  ],
  "personDetectionAnnotations": [
    {
      "tracks": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      ],
      "version": "string"
    }
  ],
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "segmentLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "segmentPresenceLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "shotAnnotations": [
    {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    }
  ],
  "shotLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "shotPresenceLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "speechTranscriptions": [
    {
      "alternatives": [
        {
          "confidence": 0,
          "transcript": "string",
          "words": [
            {
              "confidence": 0,
              "endTime": "string",
              "speakerTag": 0,
              "startTime": "string",
              "word": "string"
            }
          ]
        }
      ],
      "languageCode": "string"
    }
  ],
  "textAnnotations": [
    {
      "segments": [
        {
          "confidence": 0,
          "frames": [
            {
              "rotatedBoundingBox": {
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "timeOffset": "string"
            }
          ],
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "text": "string",
      "version": "string"
    }
  ]
}
```

Annotation results for a single video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[GoogleRpc_Status](#schemagooglerpc_status)|false|none|If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.|
|explicitAnnotation|[GoogleCloudVideointelligenceV1p2beta1_ExplicitContentAnnotation](#schemagooglecloudvideointelligencev1p2beta1_explicitcontentannotation)|false|none|Explicit content annotation.|
|faceAnnotations|[[GoogleCloudVideointelligenceV1p2beta1_FaceAnnotation](#schemagooglecloudvideointelligencev1p2beta1_faceannotation)]|false|none|Deprecated. Please use `face_detection_annotations` instead.|
|faceDetectionAnnotations|[[GoogleCloudVideointelligenceV1p2beta1_FaceDetectionAnnotation](#schemagooglecloudvideointelligencev1p2beta1_facedetectionannotation)]|false|none|Face detection annotations.|
|frameLabelAnnotations|[[GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p2beta1_labelannotation)]|false|none|Label annotations on frame level. There is exactly one element for each unique label.|
|inputUri|string|false|none|Video file location in [Cloud Storage](https://cloud.google.com/storage/).|
|logoRecognitionAnnotations|[[GoogleCloudVideointelligenceV1p2beta1_LogoRecognitionAnnotation](#schemagooglecloudvideointelligencev1p2beta1_logorecognitionannotation)]|false|none|Annotations for list of logos detected, tracked and recognized in video.|
|objectAnnotations|[[GoogleCloudVideointelligenceV1p2beta1_ObjectTrackingAnnotation](#schemagooglecloudvideointelligencev1p2beta1_objecttrackingannotation)]|false|none|Annotations for list of objects detected and tracked in video.|
|personDetectionAnnotations|[[GoogleCloudVideointelligenceV1p2beta1_PersonDetectionAnnotation](#schemagooglecloudvideointelligencev1p2beta1_persondetectionannotation)]|false|none|Person detection annotations.|
|segment|[GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#schemagooglecloudvideointelligencev1p2beta1_videosegment)|false|none|Video segment on which the annotation is run.|
|segmentLabelAnnotations|[[GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p2beta1_labelannotation)]|false|none|Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.|
|segmentPresenceLabelAnnotations|[[GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p2beta1_labelannotation)]|false|none|Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.|
|shotAnnotations|[[GoogleCloudVideointelligenceV1p2beta1_VideoSegment](#schemagooglecloudvideointelligencev1p2beta1_videosegment)]|false|none|Shot annotations. Each shot is represented as a video segment.|
|shotLabelAnnotations|[[GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p2beta1_labelannotation)]|false|none|Topical label annotations on shot level. There is exactly one element for each unique label.|
|shotPresenceLabelAnnotations|[[GoogleCloudVideointelligenceV1p2beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p2beta1_labelannotation)]|false|none|Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.|
|speechTranscriptions|[[GoogleCloudVideointelligenceV1p2beta1_SpeechTranscription](#schemagooglecloudvideointelligencev1p2beta1_speechtranscription)]|false|none|Speech transcription.|
|textAnnotations|[[GoogleCloudVideointelligenceV1p2beta1_TextAnnotation](#schemagooglecloudvideointelligencev1p2beta1_textannotation)]|false|none|OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_VideoSegment">GoogleCloudVideointelligenceV1p2beta1_VideoSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_videosegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_VideoSegment"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_videosegment"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_videosegment"></a>

```json
{
  "endTimeOffset": "string",
  "startTimeOffset": "string"
}
```

Video segment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTimeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).|
|startTimeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).|

<h2 id="tocS_GoogleCloudVideointelligenceV1p2beta1_WordInfo">GoogleCloudVideointelligenceV1p2beta1_WordInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p2beta1_wordinfo"></a>
<a id="schema_GoogleCloudVideointelligenceV1p2beta1_WordInfo"></a>
<a id="tocSgooglecloudvideointelligencev1p2beta1_wordinfo"></a>
<a id="tocsgooglecloudvideointelligencev1p2beta1_wordinfo"></a>

```json
{
  "confidence": 0,
  "endTime": "string",
  "speakerTag": 0,
  "startTime": "string",
  "word": "string"
}
```

Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|read-only|Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.|
|endTime|string(google-duration)|false|none|Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.|
|speakerTag|integer(int32)|false|read-only|Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.|
|startTime|string(google-duration)|false|none|Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.|
|word|string|false|none|The word corresponding to this set of information.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoProgress">GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoProgress</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_annotatevideoprogress"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoProgress"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_annotatevideoprogress"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_annotatevideoprogress"></a>

```json
{
  "annotationProgress": [
    {
      "feature": "FEATURE_UNSPECIFIED",
      "inputUri": "string",
      "progressPercent": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "startTime": "string",
      "updateTime": "string"
    }
  ]
}
```

Video annotation progress. Included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationProgress|[[GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgress](#schemagooglecloudvideointelligencev1p3beta1_videoannotationprogress)]|false|none|Progress metadata for all videos specified in `AnnotateVideoRequest`.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoRequest">GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_annotatevideorequest"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoRequest"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_annotatevideorequest"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_annotatevideorequest"></a>

```json
{
  "features": [
    "FEATURE_UNSPECIFIED"
  ],
  "inputContent": "string",
  "inputUri": "string",
  "locationId": "string",
  "outputUri": "string",
  "videoContext": {
    "explicitContentDetectionConfig": {
      "model": "string"
    },
    "faceDetectionConfig": {
      "includeAttributes": true,
      "includeBoundingBoxes": true,
      "model": "string"
    },
    "labelDetectionConfig": {
      "frameConfidenceThreshold": 0,
      "labelDetectionMode": "LABEL_DETECTION_MODE_UNSPECIFIED",
      "model": "string",
      "stationaryCamera": true,
      "videoConfidenceThreshold": 0
    },
    "objectTrackingConfig": {
      "model": "string"
    },
    "personDetectionConfig": {
      "includeAttributes": true,
      "includeBoundingBoxes": true,
      "includePoseLandmarks": true
    },
    "segments": [
      {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    ],
    "shotChangeDetectionConfig": {
      "model": "string"
    },
    "speechTranscriptionConfig": {
      "audioTracks": [
        0
      ],
      "diarizationSpeakerCount": 0,
      "enableAutomaticPunctuation": true,
      "enableSpeakerDiarization": true,
      "enableWordConfidence": true,
      "filterProfanity": true,
      "languageCode": "string",
      "maxAlternatives": 0,
      "speechContexts": [
        {
          "phrases": [
            "string"
          ]
        }
      ]
    },
    "textDetectionConfig": {
      "languageHints": [
        "string"
      ],
      "model": "string"
    }
  }
}
```

Video annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[string]|false|none|Required. Requested video annotation features.|
|inputContent|string(byte)|false|none|The video data bytes. If unset, the input video(s) should be specified via the `input_uri`. If set, `input_uri` must be unset.|
|inputUri|string|false|none|Input video location. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. URIs must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints). To identify multiple videos, a video URI may include wildcards in the `object-id`. Supported wildcards: '*' to match 0 or more characters; '?' to match 1 character. If unset, the input video should be embedded in the request as `input_content`. If set, `input_content` must be unset.|
|locationId|string|false|none|Optional. Cloud region where annotation should take place. Supported cloud regions are: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region is specified, the region will be determined based on video file location.|
|outputUri|string|false|none|Optional. Location where the output (in JSON format) should be stored. Currently, only [Cloud Storage](https://cloud.google.com/storage/) URIs are supported. These must be specified in the following format: `gs://bucket-id/object-id` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/request-endpoints).|
|videoContext|[GoogleCloudVideointelligenceV1p3beta1_VideoContext](#schemagooglecloudvideointelligencev1p3beta1_videocontext)|false|none|Additional video context and/or feature-specific parameters.|

#### Enumerated Values

|Property|Value|
|---|---|
|features|FEATURE_UNSPECIFIED|
|features|LABEL_DETECTION|
|features|SHOT_CHANGE_DETECTION|
|features|EXPLICIT_CONTENT_DETECTION|
|features|FACE_DETECTION|
|features|SPEECH_TRANSCRIPTION|
|features|TEXT_DETECTION|
|features|OBJECT_TRACKING|
|features|LOGO_RECOGNITION|
|features|CELEBRITY_RECOGNITION|
|features|PERSON_DETECTION|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoResponse">GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_annotatevideoresponse"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_AnnotateVideoResponse"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_annotatevideoresponse"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_annotatevideoresponse"></a>

```json
{
  "annotationResults": [
    {
      "celebrityRecognitionAnnotations": {
        "celebrityTracks": [
          {
            "celebrities": [
              {
                "celebrity": {
                  "description": "string",
                  "displayName": "string",
                  "name": "string"
                },
                "confidence": 0
              }
            ],
            "faceTrack": {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          }
        ],
        "version": "string"
      },
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
      "explicitAnnotation": {
        "frames": [
          {
            "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
            "timeOffset": "string"
          }
        ],
        "version": "string"
      },
      "faceAnnotations": [
        {
          "frames": [
            {
              "normalizedBoundingBoxes": [
                {
                  "bottom": 0,
                  "left": 0,
                  "right": 0,
                  "top": 0
                }
              ],
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "thumbnail": "string"
        }
      ],
      "faceDetectionAnnotations": [
        {
          "thumbnail": "string",
          "tracks": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          ],
          "version": "string"
        }
      ],
      "frameLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "inputUri": "string",
      "logoRecognitionAnnotations": [
        {
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "segments": [
            {
              "endTimeOffset": "string",
              "startTimeOffset": "string"
            }
          ],
          "tracks": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          ]
        }
      ],
      "objectAnnotations": [
        {
          "confidence": 0,
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ],
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "trackId": "string",
          "version": "string"
        }
      ],
      "personDetectionAnnotations": [
        {
          "tracks": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              },
              "timestampedObjects": [
                {
                  "attributes": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "value": "string"
                    }
                  ],
                  "landmarks": [
                    {
                      "confidence": 0,
                      "name": "string",
                      "point": {
                        "x": 0,
                        "y": 0
                      }
                    }
                  ],
                  "normalizedBoundingBox": {
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "top": 0
                  },
                  "timeOffset": "string"
                }
              ]
            }
          ],
          "version": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "segmentLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "segmentPresenceLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "shotAnnotations": [
        {
          "endTimeOffset": "string",
          "startTimeOffset": "string"
        }
      ],
      "shotLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "shotPresenceLabelAnnotations": [
        {
          "categoryEntities": [
            {
              "description": "string",
              "entityId": "string",
              "languageCode": "string"
            }
          ],
          "entity": {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          },
          "frames": [
            {
              "confidence": 0,
              "timeOffset": "string"
            }
          ],
          "segments": [
            {
              "confidence": 0,
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "version": "string"
        }
      ],
      "speechTranscriptions": [
        {
          "alternatives": [
            {
              "confidence": 0,
              "transcript": "string",
              "words": [
                {
                  "confidence": 0,
                  "endTime": "string",
                  "speakerTag": 0,
                  "startTime": "string",
                  "word": "string"
                }
              ]
            }
          ],
          "languageCode": "string"
        }
      ],
      "textAnnotations": [
        {
          "segments": [
            {
              "confidence": 0,
              "frames": [
                {
                  "rotatedBoundingBox": {
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "timeOffset": "string"
                }
              ],
              "segment": {
                "endTimeOffset": "string",
                "startTimeOffset": "string"
              }
            }
          ],
          "text": "string",
          "version": "string"
        }
      ]
    }
  ]
}
```

Video annotation response. Included in the `response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationResults|[[GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResults](#schemagooglecloudvideointelligencev1p3beta1_videoannotationresults)]|false|none|Annotation results for all videos specified in `AnnotateVideoRequest`.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_Celebrity">GoogleCloudVideointelligenceV1p3beta1_Celebrity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_celebrity"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_Celebrity"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_celebrity"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_celebrity"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "name": "string"
}
```

Celebrity definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Textual description of additional information about the celebrity, if applicable.|
|displayName|string|false|none|The celebrity name.|
|name|string|false|none|The resource name of the celebrity. Have the format `video-intelligence/kg-mid` indicates a celebrity from preloaded gallery. kg-mid is the id in Google knowledge graph, which is unique for the celebrity.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotation">GoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_celebrityrecognitionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_celebrityrecognitionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_celebrityrecognitionannotation"></a>

```json
{
  "celebrityTracks": [
    {
      "celebrities": [
        {
          "celebrity": {
            "description": "string",
            "displayName": "string",
            "name": "string"
          },
          "confidence": 0
        }
      ],
      "faceTrack": {
        "attributes": [
          {
            "confidence": 0,
            "name": "string",
            "value": "string"
          }
        ],
        "confidence": 0,
        "segment": {
          "endTimeOffset": "string",
          "startTimeOffset": "string"
        },
        "timestampedObjects": [
          {
            "attributes": [
              {
                "confidence": 0,
                "name": "string",
                "value": "string"
              }
            ],
            "landmarks": [
              {
                "confidence": 0,
                "name": "string",
                "point": {
                  "x": 0,
                  "y": 0
                }
              }
            ],
            "normalizedBoundingBox": {
              "bottom": 0,
              "left": 0,
              "right": 0,
              "top": 0
            },
            "timeOffset": "string"
          }
        ]
      }
    }
  ],
  "version": "string"
}
```

Celebrity recognition annotation per video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|celebrityTracks|[[GoogleCloudVideointelligenceV1p3beta1_CelebrityTrack](#schemagooglecloudvideointelligencev1p3beta1_celebritytrack)]|false|none|The tracks detected from the input video, including recognized celebrities and other detected faces in the video.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_CelebrityTrack">GoogleCloudVideointelligenceV1p3beta1_CelebrityTrack</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_celebritytrack"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_CelebrityTrack"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_celebritytrack"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_celebritytrack"></a>

```json
{
  "celebrities": [
    {
      "celebrity": {
        "description": "string",
        "displayName": "string",
        "name": "string"
      },
      "confidence": 0
    }
  ],
  "faceTrack": {
    "attributes": [
      {
        "confidence": 0,
        "name": "string",
        "value": "string"
      }
    ],
    "confidence": 0,
    "segment": {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    },
    "timestampedObjects": [
      {
        "attributes": [
          {
            "confidence": 0,
            "name": "string",
            "value": "string"
          }
        ],
        "landmarks": [
          {
            "confidence": 0,
            "name": "string",
            "point": {
              "x": 0,
              "y": 0
            }
          }
        ],
        "normalizedBoundingBox": {
          "bottom": 0,
          "left": 0,
          "right": 0,
          "top": 0
        },
        "timeOffset": "string"
      }
    ]
  }
}
```

The annotation result of a celebrity face track. RecognizedCelebrity field could be empty if the face track does not have any matched celebrities.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|celebrities|[[GoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrity](#schemagooglecloudvideointelligencev1p3beta1_recognizedcelebrity)]|false|none|Top N match of the celebrities for the face in this track.|
|faceTrack|[GoogleCloudVideointelligenceV1p3beta1_Track](#schemagooglecloudvideointelligencev1p3beta1_track)|false|none|A track of a person's face.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute">GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_detectedattribute"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_detectedattribute"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_detectedattribute"></a>

```json
{
  "confidence": 0,
  "name": "string",
  "value": "string"
}
```

A generic detected attribute represented by name in string format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Detected attribute confidence. Range [0, 1].|
|name|string|false|none|The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.|
|value|string|false|none|Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_DetectedLandmark">GoogleCloudVideointelligenceV1p3beta1_DetectedLandmark</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_detectedlandmark"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_DetectedLandmark"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_detectedlandmark"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_detectedlandmark"></a>

```json
{
  "confidence": 0,
  "name": "string",
  "point": {
    "x": 0,
    "y": 0
  }
}
```

A generic detected landmark represented by name in string format and a 2D location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|The confidence score of the detected landmark. Range [0, 1].|
|name|string|false|none|The name of this landmark, for example, left_hand, right_shoulder.|
|point|[GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex](#schemagooglecloudvideointelligencev1p3beta1_normalizedvertex)|false|none|The 2D point of the detected landmark using the normalized image coordindate system. The normalized coordinates have the range from 0 to 1.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_Entity">GoogleCloudVideointelligenceV1p3beta1_Entity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_entity"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_Entity"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_entity"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_entity"></a>

```json
{
  "description": "string",
  "entityId": "string",
  "languageCode": "string"
}
```

Detected entity from video analysis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Textual description, e.g., `Fixed-gear bicycle`.|
|entityId|string|false|none|Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).|
|languageCode|string|false|none|Language code for `description` in BCP-47 format.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation">GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_explicitcontentannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_explicitcontentannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_explicitcontentannotation"></a>

```json
{
  "frames": [
    {
      "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
      "timeOffset": "string"
    }
  ],
  "version": "string"
}
```

Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frames|[[GoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrame](#schemagooglecloudvideointelligencev1p3beta1_explicitcontentframe)]|false|none|All video frames where explicit content was detected.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_ExplicitContentDetectionConfig">GoogleCloudVideointelligenceV1p3beta1_ExplicitContentDetectionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_explicitcontentdetectionconfig"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_ExplicitContentDetectionConfig"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_explicitcontentdetectionconfig"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_explicitcontentdetectionconfig"></a>

```json
{
  "model": "string"
}
```

Config for EXPLICIT_CONTENT_DETECTION.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|Model to use for explicit content detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrame">GoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_explicitcontentframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_ExplicitContentFrame"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_explicitcontentframe"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_explicitcontentframe"></a>

```json
{
  "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
  "timeOffset": "string"
}
```

Video frame level annotation results for explicit content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pornographyLikelihood|string|false|none|Likelihood of the pornography content..|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.|

#### Enumerated Values

|Property|Value|
|---|---|
|pornographyLikelihood|LIKELIHOOD_UNSPECIFIED|
|pornographyLikelihood|VERY_UNLIKELY|
|pornographyLikelihood|UNLIKELY|
|pornographyLikelihood|POSSIBLE|
|pornographyLikelihood|LIKELY|
|pornographyLikelihood|VERY_LIKELY|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_FaceAnnotation">GoogleCloudVideointelligenceV1p3beta1_FaceAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_faceannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_FaceAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_faceannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_faceannotation"></a>

```json
{
  "frames": [
    {
      "normalizedBoundingBoxes": [
        {
          "bottom": 0,
          "left": 0,
          "right": 0,
          "top": 0
        }
      ],
      "timeOffset": "string"
    }
  ],
  "segments": [
    {
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  ],
  "thumbnail": "string"
}
```

Deprecated. No effect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frames|[[GoogleCloudVideointelligenceV1p3beta1_FaceFrame](#schemagooglecloudvideointelligencev1p3beta1_faceframe)]|false|none|All video frames where a face was detected.|
|segments|[[GoogleCloudVideointelligenceV1p3beta1_FaceSegment](#schemagooglecloudvideointelligencev1p3beta1_facesegment)]|false|none|All video segments where a face was detected.|
|thumbnail|string(byte)|false|none|Thumbnail of a representative face view (in JPEG format).|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotation">GoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_facedetectionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_facedetectionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_facedetectionannotation"></a>

```json
{
  "thumbnail": "string",
  "tracks": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "timestampedObjects": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "landmarks": [
            {
              "confidence": 0,
              "name": "string",
              "point": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ]
    }
  ],
  "version": "string"
}
```

Face detection annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thumbnail|string(byte)|false|none|The thumbnail of a person's face.|
|tracks|[[GoogleCloudVideointelligenceV1p3beta1_Track](#schemagooglecloudvideointelligencev1p3beta1_track)]|false|none|The face tracks with attributes.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_FaceDetectionConfig">GoogleCloudVideointelligenceV1p3beta1_FaceDetectionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_facedetectionconfig"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_FaceDetectionConfig"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_facedetectionconfig"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_facedetectionconfig"></a>

```json
{
  "includeAttributes": true,
  "includeBoundingBoxes": true,
  "model": "string"
}
```

Config for FACE_DETECTION.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeAttributes|boolean|false|none|Whether to enable face attributes detection, such as glasses, dark_glasses, mouth_open etc. Ignored if 'include_bounding_boxes' is set to false.|
|includeBoundingBoxes|boolean|false|none|Whether bounding boxes are included in the face annotation output.|
|model|string|false|none|Model to use for face detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_FaceFrame">GoogleCloudVideointelligenceV1p3beta1_FaceFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_faceframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_FaceFrame"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_faceframe"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_faceframe"></a>

```json
{
  "normalizedBoundingBoxes": [
    {
      "bottom": 0,
      "left": 0,
      "right": 0,
      "top": 0
    }
  ],
  "timeOffset": "string"
}
```

Deprecated. No effect.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedBoundingBoxes|[[GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox](#schemagooglecloudvideointelligencev1p3beta1_normalizedboundingbox)]|false|none|Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_FaceSegment">GoogleCloudVideointelligenceV1p3beta1_FaceSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_facesegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_FaceSegment"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_facesegment"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_facesegment"></a>

```json
{
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video segment level annotation results for face detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segment|[GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#schemagooglecloudvideointelligencev1p3beta1_videosegment)|false|none|Video segment where a face was detected.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation">GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_labelannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_labelannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_labelannotation"></a>

```json
{
  "categoryEntities": [
    {
      "description": "string",
      "entityId": "string",
      "languageCode": "string"
    }
  ],
  "entity": {
    "description": "string",
    "entityId": "string",
    "languageCode": "string"
  },
  "frames": [
    {
      "confidence": 0,
      "timeOffset": "string"
    }
  ],
  "segments": [
    {
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  ],
  "version": "string"
}
```

Label annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryEntities|[[GoogleCloudVideointelligenceV1p3beta1_Entity](#schemagooglecloudvideointelligencev1p3beta1_entity)]|false|none|Common categories for the detected entity. For example, when the label is `Terrier`, the category is likely `dog`. And in some cases there might be more than one categories e.g., `Terrier` could also be a `pet`.|
|entity|[GoogleCloudVideointelligenceV1p3beta1_Entity](#schemagooglecloudvideointelligencev1p3beta1_entity)|false|none|Detected entity.|
|frames|[[GoogleCloudVideointelligenceV1p3beta1_LabelFrame](#schemagooglecloudvideointelligencev1p3beta1_labelframe)]|false|none|All video frames where a label was detected.|
|segments|[[GoogleCloudVideointelligenceV1p3beta1_LabelSegment](#schemagooglecloudvideointelligencev1p3beta1_labelsegment)]|false|none|All video segments where a label was detected.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_LabelDetectionConfig">GoogleCloudVideointelligenceV1p3beta1_LabelDetectionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_labeldetectionconfig"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_LabelDetectionConfig"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_labeldetectionconfig"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_labeldetectionconfig"></a>

```json
{
  "frameConfidenceThreshold": 0,
  "labelDetectionMode": "LABEL_DETECTION_MODE_UNSPECIFIED",
  "model": "string",
  "stationaryCamera": true,
  "videoConfidenceThreshold": 0
}
```

Config for LABEL_DETECTION.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frameConfidenceThreshold|number(float)|false|none|The confidence threshold we perform filtering on the labels from frame-level detection. If not set, it is set to 0.4 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model.|
|labelDetectionMode|string|false|none|What labels should be detected with LABEL_DETECTION, in addition to video-level labels or segment-level labels. If unspecified, defaults to `SHOT_MODE`.|
|model|string|false|none|Model to use for label detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".|
|stationaryCamera|boolean|false|none|Whether the video has been shot from a stationary (i.e., non-moving) camera. When set to true, might improve detection accuracy for moving objects. Should be used with `SHOT_AND_FRAME_MODE` enabled.|
|videoConfidenceThreshold|number(float)|false|none|The confidence threshold we perform filtering on the labels from video-level and shot-level detections. If not set, it's set to 0.3 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model.|

#### Enumerated Values

|Property|Value|
|---|---|
|labelDetectionMode|LABEL_DETECTION_MODE_UNSPECIFIED|
|labelDetectionMode|SHOT_MODE|
|labelDetectionMode|FRAME_MODE|
|labelDetectionMode|SHOT_AND_FRAME_MODE|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_LabelFrame">GoogleCloudVideointelligenceV1p3beta1_LabelFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_labelframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_LabelFrame"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_labelframe"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_labelframe"></a>

```json
{
  "confidence": 0,
  "timeOffset": "string"
}
```

Video frame level annotation results for label detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence that the label is accurate. Range: [0, 1].|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_LabelSegment">GoogleCloudVideointelligenceV1p3beta1_LabelSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_labelsegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_LabelSegment"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_labelsegment"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_labelsegment"></a>

```json
{
  "confidence": 0,
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video segment level annotation results for label detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence that the label is accurate. Range: [0, 1].|
|segment|[GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#schemagooglecloudvideointelligencev1p3beta1_videosegment)|false|none|Video segment where a label was detected.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotation">GoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_logorecognitionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_logorecognitionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_logorecognitionannotation"></a>

```json
{
  "entity": {
    "description": "string",
    "entityId": "string",
    "languageCode": "string"
  },
  "segments": [
    {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    }
  ],
  "tracks": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "timestampedObjects": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "landmarks": [
            {
              "confidence": 0,
              "name": "string",
              "point": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ]
    }
  ]
}
```

Annotation corresponding to one detected, tracked and recognized logo class.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity|[GoogleCloudVideointelligenceV1p3beta1_Entity](#schemagooglecloudvideointelligencev1p3beta1_entity)|false|none|Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.|
|segments|[[GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#schemagooglecloudvideointelligencev1p3beta1_videosegment)]|false|none|All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.|
|tracks|[[GoogleCloudVideointelligenceV1p3beta1_Track](#schemagooglecloudvideointelligencev1p3beta1_track)]|false|none|All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox">GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_normalizedboundingbox"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_normalizedboundingbox"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_normalizedboundingbox"></a>

```json
{
  "bottom": 0,
  "left": 0,
  "right": 0,
  "top": 0
}
```

Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bottom|number(float)|false|none|Bottom Y coordinate.|
|left|number(float)|false|none|Left X coordinate.|
|right|number(float)|false|none|Right X coordinate.|
|top|number(float)|false|none|Top Y coordinate.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPoly">GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_normalizedboundingpoly"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPoly"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_normalizedboundingpoly"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_normalizedboundingpoly"></a>

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

Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2 When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vertices|[[GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex](#schemagooglecloudvideointelligencev1p3beta1_normalizedvertex)]|false|none|Normalized vertices of the bounding polygon.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex">GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_normalizedvertex"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_NormalizedVertex"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_normalizedvertex"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_normalizedvertex"></a>

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

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation">GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_objecttrackingannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_objecttrackingannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_objecttrackingannotation"></a>

```json
{
  "confidence": 0,
  "entity": {
    "description": "string",
    "entityId": "string",
    "languageCode": "string"
  },
  "frames": [
    {
      "normalizedBoundingBox": {
        "bottom": 0,
        "left": 0,
        "right": 0,
        "top": 0
      },
      "timeOffset": "string"
    }
  ],
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "trackId": "string",
  "version": "string"
}
```

Annotations corresponding to one tracked object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Object category's labeling confidence of this track.|
|entity|[GoogleCloudVideointelligenceV1p3beta1_Entity](#schemagooglecloudvideointelligencev1p3beta1_entity)|false|none|Entity to specify the object category that this track is labeled as.|
|frames|[[GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrame](#schemagooglecloudvideointelligencev1p3beta1_objecttrackingframe)]|false|none|Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.|
|segment|[GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#schemagooglecloudvideointelligencev1p3beta1_videosegment)|false|none|Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.|
|trackId|string(int64)|false|none|Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer track_id so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same track_id over time.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingConfig">GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_objecttrackingconfig"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingConfig"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_objecttrackingconfig"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_objecttrackingconfig"></a>

```json
{
  "model": "string"
}
```

Config for OBJECT_TRACKING.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|Model to use for object tracking. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrame">GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_objecttrackingframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingFrame"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_objecttrackingframe"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_objecttrackingframe"></a>

```json
{
  "normalizedBoundingBox": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "top": 0
  },
  "timeOffset": "string"
}
```

Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedBoundingBox|[GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox](#schemagooglecloudvideointelligencev1p3beta1_normalizedboundingbox)|false|none|The normalized bounding box location of this object track for the frame.|
|timeOffset|string(google-duration)|false|none|The timestamp of the frame in microseconds.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotation">GoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_persondetectionannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_persondetectionannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_persondetectionannotation"></a>

```json
{
  "tracks": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "confidence": 0,
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "timestampedObjects": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "landmarks": [
            {
              "confidence": 0,
              "name": "string",
              "point": {
                "x": 0,
                "y": 0
              }
            }
          ],
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ]
    }
  ],
  "version": "string"
}
```

Person detection annotation per video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tracks|[[GoogleCloudVideointelligenceV1p3beta1_Track](#schemagooglecloudvideointelligencev1p3beta1_track)]|false|none|The detected tracks of a person.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_PersonDetectionConfig">GoogleCloudVideointelligenceV1p3beta1_PersonDetectionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_persondetectionconfig"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_PersonDetectionConfig"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_persondetectionconfig"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_persondetectionconfig"></a>

```json
{
  "includeAttributes": true,
  "includeBoundingBoxes": true,
  "includePoseLandmarks": true
}
```

Config for PERSON_DETECTION.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeAttributes|boolean|false|none|Whether to enable person attributes detection, such as cloth color (black, blue, etc), type (coat, dress, etc), pattern (plain, floral, etc), hair, etc. Ignored if 'include_bounding_boxes' is set to false.|
|includeBoundingBoxes|boolean|false|none|Whether bounding boxes are included in the person detection annotation output.|
|includePoseLandmarks|boolean|false|none|Whether to enable pose landmarks detection. Ignored if 'include_bounding_boxes' is set to false.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrity">GoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_recognizedcelebrity"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_RecognizedCelebrity"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_recognizedcelebrity"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_recognizedcelebrity"></a>

```json
{
  "celebrity": {
    "description": "string",
    "displayName": "string",
    "name": "string"
  },
  "confidence": 0
}
```

The recognized celebrity with confidence score.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|celebrity|[GoogleCloudVideointelligenceV1p3beta1_Celebrity](#schemagooglecloudvideointelligencev1p3beta1_celebrity)|false|none|The recognized celebrity.|
|confidence|number(float)|false|none|Recognition confidence. Range [0, 1].|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_ShotChangeDetectionConfig">GoogleCloudVideointelligenceV1p3beta1_ShotChangeDetectionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_shotchangedetectionconfig"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_ShotChangeDetectionConfig"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_shotchangedetectionconfig"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_shotchangedetectionconfig"></a>

```json
{
  "model": "string"
}
```

Config for SHOT_CHANGE_DETECTION.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|Model to use for shot change detection. Supported values: "builtin/stable" (the default if unset), "builtin/latest", and "builtin/legacy".|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_SpeechContext">GoogleCloudVideointelligenceV1p3beta1_SpeechContext</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_speechcontext"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_SpeechContext"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_speechcontext"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_speechcontext"></a>

```json
{
  "phrases": [
    "string"
  ]
}
```

Provides "hints" to the speech recognizer to favor specific words and phrases in the results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phrases|[string]|false|none|Optional. A list of strings containing words and phrases "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See [usage limits](https://cloud.google.com/speech/limits#content).|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternative">GoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternative</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_speechrecognitionalternative"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternative"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_speechrecognitionalternative"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_speechrecognitionalternative"></a>

```json
{
  "confidence": 0,
  "transcript": "string",
  "words": [
    {
      "confidence": 0,
      "endTime": "string",
      "speakerTag": 0,
      "startTime": "string",
      "word": "string"
    }
  ]
}
```

Alternative hypotheses (a.k.a. n-best list).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|read-only|Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.|
|transcript|string|false|none|Transcript text representing the words that the user spoke.|
|words|[[GoogleCloudVideointelligenceV1p3beta1_WordInfo](#schemagooglecloudvideointelligencev1p3beta1_wordinfo)]|false|read-only|Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is set to true, you will see all the words from the beginning of the audio.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_SpeechTranscription">GoogleCloudVideointelligenceV1p3beta1_SpeechTranscription</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_speechtranscription"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_SpeechTranscription"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_speechtranscription"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_speechtranscription"></a>

```json
{
  "alternatives": [
    {
      "confidence": 0,
      "transcript": "string",
      "words": [
        {
          "confidence": 0,
          "endTime": "string",
          "speakerTag": 0,
          "startTime": "string",
          "word": "string"
        }
      ]
    }
  ],
  "languageCode": "string"
}
```

A speech recognition result corresponding to a portion of the audio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternatives|[[GoogleCloudVideointelligenceV1p3beta1_SpeechRecognitionAlternative](#schemagooglecloudvideointelligencev1p3beta1_speechrecognitionalternative)]|false|none|May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.|
|languageCode|string|false|read-only|Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_SpeechTranscriptionConfig">GoogleCloudVideointelligenceV1p3beta1_SpeechTranscriptionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_speechtranscriptionconfig"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_SpeechTranscriptionConfig"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_speechtranscriptionconfig"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_speechtranscriptionconfig"></a>

```json
{
  "audioTracks": [
    0
  ],
  "diarizationSpeakerCount": 0,
  "enableAutomaticPunctuation": true,
  "enableSpeakerDiarization": true,
  "enableWordConfidence": true,
  "filterProfanity": true,
  "languageCode": "string",
  "maxAlternatives": 0,
  "speechContexts": [
    {
      "phrases": [
        "string"
      ]
    }
  ]
}
```

Config for SPEECH_TRANSCRIPTION.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audioTracks|[integer(int32)]|false|none|Optional. For file formats, such as MXF or MKV, supporting multiple audio tracks, specify up to two tracks. Default: track 0.|
|diarizationSpeakerCount|integer(int32)|false|none|Optional. If set, specifies the estimated number of speakers in the conversation. If not set, defaults to '2'. Ignored unless enable_speaker_diarization is set to true.|
|enableAutomaticPunctuation|boolean|false|none|Optional. If 'true', adds punctuation to recognition result hypotheses. This feature is only available in select languages. Setting this for requests in other languages has no effect at all. The default 'false' value does not add punctuation to result hypotheses. NOTE: "This is currently offered as an experimental service, complimentary to all users. In the future this may be exclusively available as a premium feature."|
|enableSpeakerDiarization|boolean|false|none|Optional. If 'true', enables speaker detection for each recognized word in the top alternative of the recognition result using a speaker_tag provided in the WordInfo. Note: When this is true, we send all the words from the beginning of the audio for the top alternative in every consecutive response. This is done in order to improve our speaker tags as our models learn to identify the speakers in the conversation over time.|
|enableWordConfidence|boolean|false|none|Optional. If `true`, the top result includes a list of words and the confidence for those words. If `false`, no word-level confidence information is returned. The default is `false`.|
|filterProfanity|boolean|false|none|Optional. If set to `true`, the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks, e.g. "f***". If set to `false` or omitted, profanities won't be filtered out.|
|languageCode|string|false|none|Required. *Required* The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". See [Language Support](https://cloud.google.com/speech/docs/languages) for a list of the currently supported language codes.|
|maxAlternatives|integer(int32)|false|none|Optional. Maximum number of recognition hypotheses to be returned. Specifically, the maximum number of `SpeechRecognitionAlternative` messages within each `SpeechTranscription`. The server may return fewer than `max_alternatives`. Valid values are `0`-`30`. A value of `0` or `1` will return a maximum of one. If omitted, will return a maximum of one.|
|speechContexts|[[GoogleCloudVideointelligenceV1p3beta1_SpeechContext](#schemagooglecloudvideointelligencev1p3beta1_speechcontext)]|false|none|Optional. A means to provide context to assist the speech recognition.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_StreamingAnnotateVideoResponse">GoogleCloudVideointelligenceV1p3beta1_StreamingAnnotateVideoResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_streamingannotatevideoresponse"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_StreamingAnnotateVideoResponse"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_streamingannotatevideoresponse"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_streamingannotatevideoresponse"></a>

```json
{
  "annotationResults": {
    "explicitAnnotation": {
      "frames": [
        {
          "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
          "timeOffset": "string"
        }
      ],
      "version": "string"
    },
    "frameTimestamp": "string",
    "labelAnnotations": [
      {
        "categoryEntities": [
          {
            "description": "string",
            "entityId": "string",
            "languageCode": "string"
          }
        ],
        "entity": {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        },
        "frames": [
          {
            "confidence": 0,
            "timeOffset": "string"
          }
        ],
        "segments": [
          {
            "confidence": 0,
            "segment": {
              "endTimeOffset": "string",
              "startTimeOffset": "string"
            }
          }
        ],
        "version": "string"
      }
    ],
    "objectAnnotations": [
      {
        "confidence": 0,
        "entity": {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        },
        "frames": [
          {
            "normalizedBoundingBox": {
              "bottom": 0,
              "left": 0,
              "right": 0,
              "top": 0
            },
            "timeOffset": "string"
          }
        ],
        "segment": {
          "endTimeOffset": "string",
          "startTimeOffset": "string"
        },
        "trackId": "string",
        "version": "string"
      }
    ],
    "shotAnnotations": [
      {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    ]
  },
  "annotationResultsUri": "string",
  "error": {
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

`StreamingAnnotateVideoResponse` is the only message returned to the client by `StreamingAnnotateVideo`. A series of zero or more `StreamingAnnotateVideoResponse` messages are streamed back to the client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotationResults|[GoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResults](#schemagooglecloudvideointelligencev1p3beta1_streamingvideoannotationresults)|false|none|Streaming annotation results.|
|annotationResultsUri|string|false|none|Google Cloud Storage URI that stores annotation results of one streaming session in JSON format. It is the annotation_result_storage_directory from the request followed by '/cloud_project_number-session_id'.|
|error|[GoogleRpc_Status](#schemagooglerpc_status)|false|none|If set, returns a google.rpc.Status message that specifies the error for the operation.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResults">GoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResults</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_streamingvideoannotationresults"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_StreamingVideoAnnotationResults"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_streamingvideoannotationresults"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_streamingvideoannotationresults"></a>

```json
{
  "explicitAnnotation": {
    "frames": [
      {
        "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
        "timeOffset": "string"
      }
    ],
    "version": "string"
  },
  "frameTimestamp": "string",
  "labelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "objectAnnotations": [
    {
      "confidence": 0,
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "trackId": "string",
      "version": "string"
    }
  ],
  "shotAnnotations": [
    {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    }
  ]
}
```

Streaming annotation results corresponding to a portion of the video that is currently being processed. Only ONE type of annotation will be specified in the response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|explicitAnnotation|[GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation](#schemagooglecloudvideointelligencev1p3beta1_explicitcontentannotation)|false|none|Explicit content annotation results.|
|frameTimestamp|string(google-duration)|false|none|Timestamp of the processed frame in microseconds.|
|labelAnnotations|[[GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p3beta1_labelannotation)]|false|none|Label annotation results.|
|objectAnnotations|[[GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation](#schemagooglecloudvideointelligencev1p3beta1_objecttrackingannotation)]|false|none|Object tracking results.|
|shotAnnotations|[[GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#schemagooglecloudvideointelligencev1p3beta1_videosegment)]|false|none|Shot annotation results. Each shot is represented as a video segment.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_TextAnnotation">GoogleCloudVideointelligenceV1p3beta1_TextAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_textannotation"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_TextAnnotation"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_textannotation"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_textannotation"></a>

```json
{
  "segments": [
    {
      "confidence": 0,
      "frames": [
        {
          "rotatedBoundingBox": {
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "timeOffset": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      }
    }
  ],
  "text": "string",
  "version": "string"
}
```

Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segments|[[GoogleCloudVideointelligenceV1p3beta1_TextSegment](#schemagooglecloudvideointelligencev1p3beta1_textsegment)]|false|none|All video segments where OCR detected text appears.|
|text|string|false|none|The detected text.|
|version|string|false|none|Feature version.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_TextDetectionConfig">GoogleCloudVideointelligenceV1p3beta1_TextDetectionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_textdetectionconfig"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_TextDetectionConfig"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_textdetectionconfig"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_textdetectionconfig"></a>

```json
{
  "languageHints": [
    "string"
  ],
  "model": "string"
}
```

Config for TEXT_DETECTION.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageHints|[string]|false|none|Language hint can be specified if the language to be detected is known a priori. It can increase the accuracy of the detection. Language hint must be language code in BCP-47 format. Automatic language detection is performed if no hint is provided.|
|model|string|false|none|Model to use for text detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_TextFrame">GoogleCloudVideointelligenceV1p3beta1_TextFrame</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_textframe"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_TextFrame"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_textframe"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_textframe"></a>

```json
{
  "rotatedBoundingBox": {
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "timeOffset": "string"
}
```

Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rotatedBoundingBox|[GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingPoly](#schemagooglecloudvideointelligencev1p3beta1_normalizedboundingpoly)|false|none|Bounding polygon of the detected text for this frame.|
|timeOffset|string(google-duration)|false|none|Timestamp of this frame.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_TextSegment">GoogleCloudVideointelligenceV1p3beta1_TextSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_textsegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_TextSegment"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_textsegment"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_textsegment"></a>

```json
{
  "confidence": 0,
  "frames": [
    {
      "rotatedBoundingBox": {
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "timeOffset": "string"
    }
  ],
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  }
}
```

Video segment level annotation results for text detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.|
|frames|[[GoogleCloudVideointelligenceV1p3beta1_TextFrame](#schemagooglecloudvideointelligencev1p3beta1_textframe)]|false|none|Information related to the frames where OCR detected text appears.|
|segment|[GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#schemagooglecloudvideointelligencev1p3beta1_videosegment)|false|none|Video segment where a text snippet was detected.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_TimestampedObject">GoogleCloudVideointelligenceV1p3beta1_TimestampedObject</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_timestampedobject"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_TimestampedObject"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_timestampedobject"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_timestampedobject"></a>

```json
{
  "attributes": [
    {
      "confidence": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "landmarks": [
    {
      "confidence": 0,
      "name": "string",
      "point": {
        "x": 0,
        "y": 0
      }
    }
  ],
  "normalizedBoundingBox": {
    "bottom": 0,
    "left": 0,
    "right": 0,
    "top": 0
  },
  "timeOffset": "string"
}
```

For tracking related features. An object at time_offset with attributes, and located with normalized_bounding_box.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute](#schemagooglecloudvideointelligencev1p3beta1_detectedattribute)]|false|none|Optional. The attributes of the object in the bounding box.|
|landmarks|[[GoogleCloudVideointelligenceV1p3beta1_DetectedLandmark](#schemagooglecloudvideointelligencev1p3beta1_detectedlandmark)]|false|none|Optional. The detected landmarks.|
|normalizedBoundingBox|[GoogleCloudVideointelligenceV1p3beta1_NormalizedBoundingBox](#schemagooglecloudvideointelligencev1p3beta1_normalizedboundingbox)|false|none|Normalized Bounding box in a frame, where the object is located.|
|timeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_Track">GoogleCloudVideointelligenceV1p3beta1_Track</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_track"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_Track"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_track"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_track"></a>

```json
{
  "attributes": [
    {
      "confidence": 0,
      "name": "string",
      "value": "string"
    }
  ],
  "confidence": 0,
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "timestampedObjects": [
    {
      "attributes": [
        {
          "confidence": 0,
          "name": "string",
          "value": "string"
        }
      ],
      "landmarks": [
        {
          "confidence": 0,
          "name": "string",
          "point": {
            "x": 0,
            "y": 0
          }
        }
      ],
      "normalizedBoundingBox": {
        "bottom": 0,
        "left": 0,
        "right": 0,
        "top": 0
      },
      "timeOffset": "string"
    }
  ]
}
```

A track of an object instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[GoogleCloudVideointelligenceV1p3beta1_DetectedAttribute](#schemagooglecloudvideointelligencev1p3beta1_detectedattribute)]|false|none|Optional. Attributes in the track level.|
|confidence|number(float)|false|none|Optional. The confidence score of the tracked object.|
|segment|[GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#schemagooglecloudvideointelligencev1p3beta1_videosegment)|false|none|Video segment of a track.|
|timestampedObjects|[[GoogleCloudVideointelligenceV1p3beta1_TimestampedObject](#schemagooglecloudvideointelligencev1p3beta1_timestampedobject)]|false|none|The object with timestamp and attributes per frame in the track.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgress">GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgress</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_videoannotationprogress"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationProgress"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_videoannotationprogress"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_videoannotationprogress"></a>

```json
{
  "feature": "FEATURE_UNSPECIFIED",
  "inputUri": "string",
  "progressPercent": 0,
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "startTime": "string",
  "updateTime": "string"
}
```

Annotation progress for a single video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feature|string|false|none|Specifies which feature is being tracked if the request contains more than one feature.|
|inputUri|string|false|none|Video file location in [Cloud Storage](https://cloud.google.com/storage/).|
|progressPercent|integer(int32)|false|none|Approximate percentage processed thus far. Guaranteed to be 100 when fully processed.|
|segment|[GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#schemagooglecloudvideointelligencev1p3beta1_videosegment)|false|none|Specifies which segment is being tracked if the request contains more than one segment.|
|startTime|string(google-datetime)|false|none|Time when the request was received.|
|updateTime|string(google-datetime)|false|none|Time of the most recent update.|

#### Enumerated Values

|Property|Value|
|---|---|
|feature|FEATURE_UNSPECIFIED|
|feature|LABEL_DETECTION|
|feature|SHOT_CHANGE_DETECTION|
|feature|EXPLICIT_CONTENT_DETECTION|
|feature|FACE_DETECTION|
|feature|SPEECH_TRANSCRIPTION|
|feature|TEXT_DETECTION|
|feature|OBJECT_TRACKING|
|feature|LOGO_RECOGNITION|
|feature|CELEBRITY_RECOGNITION|
|feature|PERSON_DETECTION|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResults">GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResults</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_videoannotationresults"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_VideoAnnotationResults"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_videoannotationresults"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_videoannotationresults"></a>

```json
{
  "celebrityRecognitionAnnotations": {
    "celebrityTracks": [
      {
        "celebrities": [
          {
            "celebrity": {
              "description": "string",
              "displayName": "string",
              "name": "string"
            },
            "confidence": 0
          }
        ],
        "faceTrack": {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      }
    ],
    "version": "string"
  },
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
  "explicitAnnotation": {
    "frames": [
      {
        "pornographyLikelihood": "LIKELIHOOD_UNSPECIFIED",
        "timeOffset": "string"
      }
    ],
    "version": "string"
  },
  "faceAnnotations": [
    {
      "frames": [
        {
          "normalizedBoundingBoxes": [
            {
              "bottom": 0,
              "left": 0,
              "right": 0,
              "top": 0
            }
          ],
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "thumbnail": "string"
    }
  ],
  "faceDetectionAnnotations": [
    {
      "thumbnail": "string",
      "tracks": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      ],
      "version": "string"
    }
  ],
  "frameLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "inputUri": "string",
  "logoRecognitionAnnotations": [
    {
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "segments": [
        {
          "endTimeOffset": "string",
          "startTimeOffset": "string"
        }
      ],
      "tracks": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      ]
    }
  ],
  "objectAnnotations": [
    {
      "confidence": 0,
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "normalizedBoundingBox": {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0
          },
          "timeOffset": "string"
        }
      ],
      "segment": {
        "endTimeOffset": "string",
        "startTimeOffset": "string"
      },
      "trackId": "string",
      "version": "string"
    }
  ],
  "personDetectionAnnotations": [
    {
      "tracks": [
        {
          "attributes": [
            {
              "confidence": 0,
              "name": "string",
              "value": "string"
            }
          ],
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          },
          "timestampedObjects": [
            {
              "attributes": [
                {
                  "confidence": 0,
                  "name": "string",
                  "value": "string"
                }
              ],
              "landmarks": [
                {
                  "confidence": 0,
                  "name": "string",
                  "point": {
                    "x": 0,
                    "y": 0
                  }
                }
              ],
              "normalizedBoundingBox": {
                "bottom": 0,
                "left": 0,
                "right": 0,
                "top": 0
              },
              "timeOffset": "string"
            }
          ]
        }
      ],
      "version": "string"
    }
  ],
  "segment": {
    "endTimeOffset": "string",
    "startTimeOffset": "string"
  },
  "segmentLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "segmentPresenceLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "shotAnnotations": [
    {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    }
  ],
  "shotLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "shotPresenceLabelAnnotations": [
    {
      "categoryEntities": [
        {
          "description": "string",
          "entityId": "string",
          "languageCode": "string"
        }
      ],
      "entity": {
        "description": "string",
        "entityId": "string",
        "languageCode": "string"
      },
      "frames": [
        {
          "confidence": 0,
          "timeOffset": "string"
        }
      ],
      "segments": [
        {
          "confidence": 0,
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "version": "string"
    }
  ],
  "speechTranscriptions": [
    {
      "alternatives": [
        {
          "confidence": 0,
          "transcript": "string",
          "words": [
            {
              "confidence": 0,
              "endTime": "string",
              "speakerTag": 0,
              "startTime": "string",
              "word": "string"
            }
          ]
        }
      ],
      "languageCode": "string"
    }
  ],
  "textAnnotations": [
    {
      "segments": [
        {
          "confidence": 0,
          "frames": [
            {
              "rotatedBoundingBox": {
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "timeOffset": "string"
            }
          ],
          "segment": {
            "endTimeOffset": "string",
            "startTimeOffset": "string"
          }
        }
      ],
      "text": "string",
      "version": "string"
    }
  ]
}
```

Annotation results for a single video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|celebrityRecognitionAnnotations|[GoogleCloudVideointelligenceV1p3beta1_CelebrityRecognitionAnnotation](#schemagooglecloudvideointelligencev1p3beta1_celebrityrecognitionannotation)|false|none|Celebrity recognition annotations.|
|error|[GoogleRpc_Status](#schemagooglerpc_status)|false|none|If set, indicates an error. Note that for a single `AnnotateVideoRequest` some videos may succeed and some may fail.|
|explicitAnnotation|[GoogleCloudVideointelligenceV1p3beta1_ExplicitContentAnnotation](#schemagooglecloudvideointelligencev1p3beta1_explicitcontentannotation)|false|none|Explicit content annotation.|
|faceAnnotations|[[GoogleCloudVideointelligenceV1p3beta1_FaceAnnotation](#schemagooglecloudvideointelligencev1p3beta1_faceannotation)]|false|none|Deprecated. Please use `face_detection_annotations` instead.|
|faceDetectionAnnotations|[[GoogleCloudVideointelligenceV1p3beta1_FaceDetectionAnnotation](#schemagooglecloudvideointelligencev1p3beta1_facedetectionannotation)]|false|none|Face detection annotations.|
|frameLabelAnnotations|[[GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p3beta1_labelannotation)]|false|none|Label annotations on frame level. There is exactly one element for each unique label.|
|inputUri|string|false|none|Video file location in [Cloud Storage](https://cloud.google.com/storage/).|
|logoRecognitionAnnotations|[[GoogleCloudVideointelligenceV1p3beta1_LogoRecognitionAnnotation](#schemagooglecloudvideointelligencev1p3beta1_logorecognitionannotation)]|false|none|Annotations for list of logos detected, tracked and recognized in video.|
|objectAnnotations|[[GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingAnnotation](#schemagooglecloudvideointelligencev1p3beta1_objecttrackingannotation)]|false|none|Annotations for list of objects detected and tracked in video.|
|personDetectionAnnotations|[[GoogleCloudVideointelligenceV1p3beta1_PersonDetectionAnnotation](#schemagooglecloudvideointelligencev1p3beta1_persondetectionannotation)]|false|none|Person detection annotations.|
|segment|[GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#schemagooglecloudvideointelligencev1p3beta1_videosegment)|false|none|Video segment on which the annotation is run.|
|segmentLabelAnnotations|[[GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p3beta1_labelannotation)]|false|none|Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.|
|segmentPresenceLabelAnnotations|[[GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p3beta1_labelannotation)]|false|none|Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical `segment_label_annotations`, this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.|
|shotAnnotations|[[GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#schemagooglecloudvideointelligencev1p3beta1_videosegment)]|false|none|Shot annotations. Each shot is represented as a video segment.|
|shotLabelAnnotations|[[GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p3beta1_labelannotation)]|false|none|Topical label annotations on shot level. There is exactly one element for each unique label.|
|shotPresenceLabelAnnotations|[[GoogleCloudVideointelligenceV1p3beta1_LabelAnnotation](#schemagooglecloudvideointelligencev1p3beta1_labelannotation)]|false|none|Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical `shot_label_annotations`, this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets `LabelDetectionConfig.model` to "builtin/latest" in the request.|
|speechTranscriptions|[[GoogleCloudVideointelligenceV1p3beta1_SpeechTranscription](#schemagooglecloudvideointelligencev1p3beta1_speechtranscription)]|false|none|Speech transcription.|
|textAnnotations|[[GoogleCloudVideointelligenceV1p3beta1_TextAnnotation](#schemagooglecloudvideointelligencev1p3beta1_textannotation)]|false|none|OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_VideoContext">GoogleCloudVideointelligenceV1p3beta1_VideoContext</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_videocontext"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_VideoContext"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_videocontext"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_videocontext"></a>

```json
{
  "explicitContentDetectionConfig": {
    "model": "string"
  },
  "faceDetectionConfig": {
    "includeAttributes": true,
    "includeBoundingBoxes": true,
    "model": "string"
  },
  "labelDetectionConfig": {
    "frameConfidenceThreshold": 0,
    "labelDetectionMode": "LABEL_DETECTION_MODE_UNSPECIFIED",
    "model": "string",
    "stationaryCamera": true,
    "videoConfidenceThreshold": 0
  },
  "objectTrackingConfig": {
    "model": "string"
  },
  "personDetectionConfig": {
    "includeAttributes": true,
    "includeBoundingBoxes": true,
    "includePoseLandmarks": true
  },
  "segments": [
    {
      "endTimeOffset": "string",
      "startTimeOffset": "string"
    }
  ],
  "shotChangeDetectionConfig": {
    "model": "string"
  },
  "speechTranscriptionConfig": {
    "audioTracks": [
      0
    ],
    "diarizationSpeakerCount": 0,
    "enableAutomaticPunctuation": true,
    "enableSpeakerDiarization": true,
    "enableWordConfidence": true,
    "filterProfanity": true,
    "languageCode": "string",
    "maxAlternatives": 0,
    "speechContexts": [
      {
        "phrases": [
          "string"
        ]
      }
    ]
  },
  "textDetectionConfig": {
    "languageHints": [
      "string"
    ],
    "model": "string"
  }
}
```

Video context and/or feature-specific parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|explicitContentDetectionConfig|[GoogleCloudVideointelligenceV1p3beta1_ExplicitContentDetectionConfig](#schemagooglecloudvideointelligencev1p3beta1_explicitcontentdetectionconfig)|false|none|Config for EXPLICIT_CONTENT_DETECTION.|
|faceDetectionConfig|[GoogleCloudVideointelligenceV1p3beta1_FaceDetectionConfig](#schemagooglecloudvideointelligencev1p3beta1_facedetectionconfig)|false|none|Config for FACE_DETECTION.|
|labelDetectionConfig|[GoogleCloudVideointelligenceV1p3beta1_LabelDetectionConfig](#schemagooglecloudvideointelligencev1p3beta1_labeldetectionconfig)|false|none|Config for LABEL_DETECTION.|
|objectTrackingConfig|[GoogleCloudVideointelligenceV1p3beta1_ObjectTrackingConfig](#schemagooglecloudvideointelligencev1p3beta1_objecttrackingconfig)|false|none|Config for OBJECT_TRACKING.|
|personDetectionConfig|[GoogleCloudVideointelligenceV1p3beta1_PersonDetectionConfig](#schemagooglecloudvideointelligencev1p3beta1_persondetectionconfig)|false|none|Config for PERSON_DETECTION.|
|segments|[[GoogleCloudVideointelligenceV1p3beta1_VideoSegment](#schemagooglecloudvideointelligencev1p3beta1_videosegment)]|false|none|Video segments to annotate. The segments may overlap and are not required to be contiguous or span the whole video. If unspecified, each video is treated as a single segment.|
|shotChangeDetectionConfig|[GoogleCloudVideointelligenceV1p3beta1_ShotChangeDetectionConfig](#schemagooglecloudvideointelligencev1p3beta1_shotchangedetectionconfig)|false|none|Config for SHOT_CHANGE_DETECTION.|
|speechTranscriptionConfig|[GoogleCloudVideointelligenceV1p3beta1_SpeechTranscriptionConfig](#schemagooglecloudvideointelligencev1p3beta1_speechtranscriptionconfig)|false|none|Config for SPEECH_TRANSCRIPTION.|
|textDetectionConfig|[GoogleCloudVideointelligenceV1p3beta1_TextDetectionConfig](#schemagooglecloudvideointelligencev1p3beta1_textdetectionconfig)|false|none|Config for TEXT_DETECTION.|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_VideoSegment">GoogleCloudVideointelligenceV1p3beta1_VideoSegment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_videosegment"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_VideoSegment"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_videosegment"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_videosegment"></a>

```json
{
  "endTimeOffset": "string",
  "startTimeOffset": "string"
}
```

Video segment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTimeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the end of the segment (inclusive).|
|startTimeOffset|string(google-duration)|false|none|Time-offset, relative to the beginning of the video, corresponding to the start of the segment (inclusive).|

<h2 id="tocS_GoogleCloudVideointelligenceV1p3beta1_WordInfo">GoogleCloudVideointelligenceV1p3beta1_WordInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvideointelligencev1p3beta1_wordinfo"></a>
<a id="schema_GoogleCloudVideointelligenceV1p3beta1_WordInfo"></a>
<a id="tocSgooglecloudvideointelligencev1p3beta1_wordinfo"></a>
<a id="tocsgooglecloudvideointelligencev1p3beta1_wordinfo"></a>

```json
{
  "confidence": 0,
  "endTime": "string",
  "speakerTag": 0,
  "startTime": "string",
  "word": "string"
}
```

Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as `enable_word_time_offsets`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|read-only|Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.|
|endTime|string(google-duration)|false|none|Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.|
|speakerTag|integer(int32)|false|read-only|Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarization_speaker_count, and is only set if speaker diarization is enabled.|
|startTime|string(google-duration)|false|none|Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.|
|word|string|false|none|The word corresponding to this set of information.|

<h2 id="tocS_GoogleLongrunning_Operation">GoogleLongrunning_Operation</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunning_operation"></a>
<a id="schema_GoogleLongrunning_Operation"></a>
<a id="tocSgooglelongrunning_operation"></a>
<a id="tocsgooglelongrunning_operation"></a>

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
|error|[GoogleRpc_Status](#schemagooglerpc_status)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_GoogleRpc_Status">GoogleRpc_Status</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpc_status"></a>
<a id="schema_GoogleRpc_Status"></a>
<a id="tocSgooglerpc_status"></a>
<a id="tocsgooglerpc_status"></a>

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
