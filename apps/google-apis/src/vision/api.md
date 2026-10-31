<h1 id="cloud-vision-api">Cloud Vision API v1p1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Integrates Google Vision features, including image labeling, face, logo, and landmark detection, optical character recognition (OCR), and detection of explicit content, into applications.

Base URLs:

* <a href="https://vision.googleapis.com/">https://vision.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/vision/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-vision|Apply machine learning models to understand and label images|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|
|https://www.googleapis.com/auth/cloud-vision|Apply machine learning models to understand and label images|

<h1 id="cloud-vision-api-files">files</h1>

## vision.files.annotate

<a id="opIdvision.files.annotate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1p1beta1/files:annotate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "parent": "string",
    "requests": [
      {
        "features": [
          {
            "maxResults": 0,
            "model": "string",
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "imageContext": {
          "cropHintsParams": {
            "aspectRatios": [
              0
            ]
          },
          "languageHints": [
            "string"
          ],
          "latLongRect": {
            "maxLatLng": {
              "latitude": 0,
              "longitude": 0
            },
            "minLatLng": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "productSearchParams": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "filter": "string",
            "productCategories": [
              "string"
            ],
            "productSet": "string"
          },
          "textDetectionParams": {
            "advancedOcrOptions": [
              "string"
            ],
            "enableTextDetectionConfidenceScore": true
          },
          "webDetectionParams": {
            "includeGeoResults": true
          }
        },
        "inputConfig": {
          "content": "string",
          "gcsSource": {
            "uri": "string"
          },
          "mimeType": "string"
        },
        "pages": [
          0
        ]
      }
    ]
  }'
```

`POST /v1p1beta1/files:annotate`

Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.

> Body parameter

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "parent": "string",
  "requests": [
    {
      "features": [
        {
          "maxResults": 0,
          "model": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "imageContext": {
        "cropHintsParams": {
          "aspectRatios": [
            0
          ]
        },
        "languageHints": [
          "string"
        ],
        "latLongRect": {
          "maxLatLng": {
            "latitude": 0,
            "longitude": 0
          },
          "minLatLng": {
            "latitude": 0,
            "longitude": 0
          }
        },
        "productSearchParams": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "filter": "string",
          "productCategories": [
            "string"
          ],
          "productSet": "string"
        },
        "textDetectionParams": {
          "advancedOcrOptions": [
            "string"
          ],
          "enableTextDetectionConfidenceScore": true
        },
        "webDetectionParams": {
          "includeGeoResults": true
        }
      },
      "inputConfig": {
        "content": "string",
        "gcsSource": {
          "uri": "string"
        },
        "mimeType": "string"
      },
      "pages": [
        0
      ]
    }
  ]
}
```

<h3 id="visionfilesannotate-parameters">Parameters</h3>

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
|body|body|[GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest](#schemagooglecloudvisionv1p1beta1batchannotatefilesrequest)|false|none|
|» labels|body|object|false|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.|
|» » **additionalProperties**|body|string|false|none|
|» parent|body|string|false|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
|» requests|body|[[GoogleCloudVisionV1p1beta1AnnotateFileRequest](#schemagooglecloudvisionv1p1beta1annotatefilerequest)]|false|Required. The list of file annotation requests. Right now we support only one AnnotateFileRequest in BatchAnnotateFilesRequest.|

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
  "responses": [
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
      "inputConfig": {
        "content": "string",
        "gcsSource": {
          "uri": "string"
        },
        "mimeType": "string"
      },
      "responses": [
        {
          "context": {
            "pageNumber": 0,
            "uri": "string"
          },
          "cropHintsAnnotation": {
            "cropHints": [
              {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "importanceFraction": 0
              }
            ]
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
          "faceAnnotations": [
            {
              "angerLikelihood": "UNKNOWN",
              "blurredLikelihood": "UNKNOWN",
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "detectionConfidence": 0,
              "fdBoundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "headwearLikelihood": "UNKNOWN",
              "joyLikelihood": "UNKNOWN",
              "landmarkingConfidence": 0,
              "landmarks": [
                {
                  "position": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                  },
                  "type": "UNKNOWN_LANDMARK"
                }
              ],
              "panAngle": 0,
              "rollAngle": 0,
              "sorrowLikelihood": "UNKNOWN",
              "surpriseLikelihood": "UNKNOWN",
              "tiltAngle": 0,
              "underExposedLikelihood": "UNKNOWN"
            }
          ],
          "fullTextAnnotation": {
            "pages": [
              {
                "blocks": [
                  {
                    "blockType": "UNKNOWN",
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "paragraphs": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "words": [
                          {
                            "boundingBox": {
                              "normalizedVertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ],
                              "vertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ]
                            },
                            "confidence": 0,
                            "property": {
                              "detectedBreak": {
                                "isPrefix": true,
                                "type": "UNKNOWN"
                              },
                              "detectedLanguages": [
                                {
                                  "confidence": 0,
                                  "languageCode": "string"
                                }
                              ]
                            },
                            "symbols": [
                              {
                                "boundingBox": {
                                  "normalizedVertices": [
                                    {
                                      "x": 0,
                                      "y": 0
                                    }
                                  ],
                                  "vertices": [
                                    {
                                      "x": 0,
                                      "y": 0
                                    }
                                  ]
                                },
                                "confidence": 0,
                                "property": {
                                  "detectedBreak": {
                                    "isPrefix": true,
                                    "type": "UNKNOWN"
                                  },
                                  "detectedLanguages": [
                                    {
                                      "confidence": 0,
                                      "languageCode": "string"
                                    }
                                  ]
                                },
                                "text": "string"
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    }
                  }
                ],
                "confidence": 0,
                "height": 0,
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                },
                "width": 0
              }
            ],
            "text": "string"
          },
          "imagePropertiesAnnotation": {
            "dominantColors": {
              "colors": [
                {
                  "color": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "pixelFraction": 0,
                  "score": 0
                }
              ]
            }
          },
          "labelAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "landmarkAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "localizedObjectAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "languageCode": "string",
              "mid": "string",
              "name": "string",
              "score": 0
            }
          ],
          "logoAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "productSearchResults": {
            "indexTime": "string",
            "productGroupedResults": [
              {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "objectAnnotations": [
                  {
                    "languageCode": "string",
                    "mid": "string",
                    "name": "string",
                    "score": 0
                  }
                ],
                "results": [
                  {
                    "image": "string",
                    "product": {
                      "description": "string",
                      "displayName": "string",
                      "name": "string",
                      "productCategory": "string",
                      "productLabels": [
                        {
                          "key": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "score": 0
                  }
                ]
              }
            ],
            "results": [
              {
                "image": "string",
                "product": {
                  "description": "string",
                  "displayName": "string",
                  "name": "string",
                  "productCategory": "string",
                  "productLabels": [
                    {
                      "key": "string",
                      "value": "string"
                    }
                  ]
                },
                "score": 0
              }
            ]
          },
          "safeSearchAnnotation": {
            "adult": "UNKNOWN",
            "medical": "UNKNOWN",
            "racy": "UNKNOWN",
            "spoof": "UNKNOWN",
            "violence": "UNKNOWN"
          },
          "textAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "webDetection": {
            "bestGuessLabels": [
              {
                "label": "string",
                "languageCode": "string"
              }
            ],
            "fullMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "pagesWithMatchingImages": [
              {
                "fullMatchingImages": [
                  {
                    "score": 0,
                    "url": "string"
                  }
                ],
                "pageTitle": "string",
                "partialMatchingImages": [
                  {
                    "score": 0,
                    "url": "string"
                  }
                ],
                "score": 0,
                "url": "string"
              }
            ],
            "partialMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "visuallySimilarImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "webEntities": [
              {
                "description": "string",
                "entityId": "string",
                "score": 0
              }
            ]
          }
        }
      ],
      "totalPages": 0
    }
  ]
}
```

<h3 id="visionfilesannotate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse](#schemagooglecloudvisionv1p1beta1batchannotatefilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-vision ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-vision )
</aside>

## vision.files.asyncBatchAnnotate

<a id="opIdvision.files.asyncBatchAnnotate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1p1beta1/files:asyncBatchAnnotate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "parent": "string",
    "requests": [
      {
        "features": [
          {
            "maxResults": 0,
            "model": "string",
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "imageContext": {
          "cropHintsParams": {
            "aspectRatios": [
              0
            ]
          },
          "languageHints": [
            "string"
          ],
          "latLongRect": {
            "maxLatLng": {
              "latitude": 0,
              "longitude": 0
            },
            "minLatLng": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "productSearchParams": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "filter": "string",
            "productCategories": [
              "string"
            ],
            "productSet": "string"
          },
          "textDetectionParams": {
            "advancedOcrOptions": [
              "string"
            ],
            "enableTextDetectionConfidenceScore": true
          },
          "webDetectionParams": {
            "includeGeoResults": true
          }
        },
        "inputConfig": {
          "content": "string",
          "gcsSource": {
            "uri": "string"
          },
          "mimeType": "string"
        },
        "outputConfig": {
          "batchSize": 0,
          "gcsDestination": {
            "uri": "string"
          }
        }
      }
    ]
  }'
```

`POST /v1p1beta1/files:asyncBatchAnnotate`

Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

> Body parameter

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "parent": "string",
  "requests": [
    {
      "features": [
        {
          "maxResults": 0,
          "model": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "imageContext": {
        "cropHintsParams": {
          "aspectRatios": [
            0
          ]
        },
        "languageHints": [
          "string"
        ],
        "latLongRect": {
          "maxLatLng": {
            "latitude": 0,
            "longitude": 0
          },
          "minLatLng": {
            "latitude": 0,
            "longitude": 0
          }
        },
        "productSearchParams": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "filter": "string",
          "productCategories": [
            "string"
          ],
          "productSet": "string"
        },
        "textDetectionParams": {
          "advancedOcrOptions": [
            "string"
          ],
          "enableTextDetectionConfidenceScore": true
        },
        "webDetectionParams": {
          "includeGeoResults": true
        }
      },
      "inputConfig": {
        "content": "string",
        "gcsSource": {
          "uri": "string"
        },
        "mimeType": "string"
      },
      "outputConfig": {
        "batchSize": 0,
        "gcsDestination": {
          "uri": "string"
        }
      }
    }
  ]
}
```

<h3 id="visionfilesasyncbatchannotate-parameters">Parameters</h3>

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
|body|body|[GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest](#schemagooglecloudvisionv1p1beta1asyncbatchannotatefilesrequest)|false|none|
|» labels|body|object|false|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.|
|» » **additionalProperties**|body|string|false|none|
|» parent|body|string|false|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
|» requests|body|[[GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest](#schemagooglecloudvisionv1p1beta1asyncannotatefilerequest)]|false|Required. Individual async file annotation requests for this batch.|

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

<h3 id="visionfilesasyncbatchannotate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-vision ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-vision )
</aside>

<h1 id="cloud-vision-api-images">images</h1>

## vision.images.annotate

<a id="opIdvision.images.annotate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1p1beta1/images:annotate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "parent": "string",
    "requests": [
      {
        "features": [
          {
            "maxResults": 0,
            "model": "string",
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "image": {
          "content": "string",
          "source": {
            "gcsImageUri": "string",
            "imageUri": "string"
          }
        },
        "imageContext": {
          "cropHintsParams": {
            "aspectRatios": [
              0
            ]
          },
          "languageHints": [
            "string"
          ],
          "latLongRect": {
            "maxLatLng": {
              "latitude": 0,
              "longitude": 0
            },
            "minLatLng": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "productSearchParams": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "filter": "string",
            "productCategories": [
              "string"
            ],
            "productSet": "string"
          },
          "textDetectionParams": {
            "advancedOcrOptions": [
              "string"
            ],
            "enableTextDetectionConfidenceScore": true
          },
          "webDetectionParams": {
            "includeGeoResults": true
          }
        }
      }
    ]
  }'
```

`POST /v1p1beta1/images:annotate`

Run image detection and annotation for a batch of images.

> Body parameter

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "parent": "string",
  "requests": [
    {
      "features": [
        {
          "maxResults": 0,
          "model": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "image": {
        "content": "string",
        "source": {
          "gcsImageUri": "string",
          "imageUri": "string"
        }
      },
      "imageContext": {
        "cropHintsParams": {
          "aspectRatios": [
            0
          ]
        },
        "languageHints": [
          "string"
        ],
        "latLongRect": {
          "maxLatLng": {
            "latitude": 0,
            "longitude": 0
          },
          "minLatLng": {
            "latitude": 0,
            "longitude": 0
          }
        },
        "productSearchParams": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "filter": "string",
          "productCategories": [
            "string"
          ],
          "productSet": "string"
        },
        "textDetectionParams": {
          "advancedOcrOptions": [
            "string"
          ],
          "enableTextDetectionConfidenceScore": true
        },
        "webDetectionParams": {
          "includeGeoResults": true
        }
      }
    }
  ]
}
```

<h3 id="visionimagesannotate-parameters">Parameters</h3>

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
|body|body|[GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest](#schemagooglecloudvisionv1p1beta1batchannotateimagesrequest)|false|none|
|» labels|body|object|false|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.|
|» » **additionalProperties**|body|string|false|none|
|» parent|body|string|false|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
|» requests|body|[[GoogleCloudVisionV1p1beta1AnnotateImageRequest](#schemagooglecloudvisionv1p1beta1annotateimagerequest)]|false|Required. Individual image annotation requests for this batch.|

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
  "responses": [
    {
      "context": {
        "pageNumber": 0,
        "uri": "string"
      },
      "cropHintsAnnotation": {
        "cropHints": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "importanceFraction": 0
          }
        ]
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
      "faceAnnotations": [
        {
          "angerLikelihood": "UNKNOWN",
          "blurredLikelihood": "UNKNOWN",
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "detectionConfidence": 0,
          "fdBoundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "headwearLikelihood": "UNKNOWN",
          "joyLikelihood": "UNKNOWN",
          "landmarkingConfidence": 0,
          "landmarks": [
            {
              "position": {
                "x": 0,
                "y": 0,
                "z": 0
              },
              "type": "UNKNOWN_LANDMARK"
            }
          ],
          "panAngle": 0,
          "rollAngle": 0,
          "sorrowLikelihood": "UNKNOWN",
          "surpriseLikelihood": "UNKNOWN",
          "tiltAngle": 0,
          "underExposedLikelihood": "UNKNOWN"
        }
      ],
      "fullTextAnnotation": {
        "pages": [
          {
            "blocks": [
              {
                "blockType": "UNKNOWN",
                "boundingBox": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "paragraphs": [
                  {
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    },
                    "words": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "symbols": [
                          {
                            "boundingBox": {
                              "normalizedVertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ],
                              "vertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ]
                            },
                            "confidence": 0,
                            "property": {
                              "detectedBreak": {
                                "isPrefix": true,
                                "type": "UNKNOWN"
                              },
                              "detectedLanguages": [
                                {
                                  "confidence": 0,
                                  "languageCode": "string"
                                }
                              ]
                            },
                            "text": "string"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                }
              }
            ],
            "confidence": 0,
            "height": 0,
            "property": {
              "detectedBreak": {
                "isPrefix": true,
                "type": "UNKNOWN"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ]
            },
            "width": 0
          }
        ],
        "text": "string"
      },
      "imagePropertiesAnnotation": {
        "dominantColors": {
          "colors": [
            {
              "color": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "pixelFraction": 0,
              "score": 0
            }
          ]
        }
      },
      "labelAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "landmarkAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "localizedObjectAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "languageCode": "string",
          "mid": "string",
          "name": "string",
          "score": 0
        }
      ],
      "logoAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "productSearchResults": {
        "indexTime": "string",
        "productGroupedResults": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "objectAnnotations": [
              {
                "languageCode": "string",
                "mid": "string",
                "name": "string",
                "score": 0
              }
            ],
            "results": [
              {
                "image": "string",
                "product": {
                  "description": "string",
                  "displayName": "string",
                  "name": "string",
                  "productCategory": "string",
                  "productLabels": [
                    {
                      "key": "string",
                      "value": "string"
                    }
                  ]
                },
                "score": 0
              }
            ]
          }
        ],
        "results": [
          {
            "image": "string",
            "product": {
              "description": "string",
              "displayName": "string",
              "name": "string",
              "productCategory": "string",
              "productLabels": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "score": 0
          }
        ]
      },
      "safeSearchAnnotation": {
        "adult": "UNKNOWN",
        "medical": "UNKNOWN",
        "racy": "UNKNOWN",
        "spoof": "UNKNOWN",
        "violence": "UNKNOWN"
      },
      "textAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "webDetection": {
        "bestGuessLabels": [
          {
            "label": "string",
            "languageCode": "string"
          }
        ],
        "fullMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "pagesWithMatchingImages": [
          {
            "fullMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "pageTitle": "string",
            "partialMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "score": 0,
            "url": "string"
          }
        ],
        "partialMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "visuallySimilarImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "webEntities": [
          {
            "description": "string",
            "entityId": "string",
            "score": 0
          }
        ]
      }
    }
  ]
}
```

<h3 id="visionimagesannotate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse](#schemagooglecloudvisionv1p1beta1batchannotateimagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-vision ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-vision )
</aside>

## vision.images.asyncBatchAnnotate

<a id="opIdvision.images.asyncBatchAnnotate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1p1beta1/images:asyncBatchAnnotate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "outputConfig": {
      "batchSize": 0,
      "gcsDestination": {
        "uri": "string"
      }
    },
    "parent": "string",
    "requests": [
      {
        "features": [
          {
            "maxResults": 0,
            "model": "string",
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "image": {
          "content": "string",
          "source": {
            "gcsImageUri": "string",
            "imageUri": "string"
          }
        },
        "imageContext": {
          "cropHintsParams": {
            "aspectRatios": [
              0
            ]
          },
          "languageHints": [
            "string"
          ],
          "latLongRect": {
            "maxLatLng": {
              "latitude": 0,
              "longitude": 0
            },
            "minLatLng": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "productSearchParams": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "filter": "string",
            "productCategories": [
              "string"
            ],
            "productSet": "string"
          },
          "textDetectionParams": {
            "advancedOcrOptions": [
              "string"
            ],
            "enableTextDetectionConfidenceScore": true
          },
          "webDetectionParams": {
            "includeGeoResults": true
          }
        }
      }
    ]
  }'
```

`POST /v1p1beta1/images:asyncBatchAnnotate`

Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

> Body parameter

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "outputConfig": {
    "batchSize": 0,
    "gcsDestination": {
      "uri": "string"
    }
  },
  "parent": "string",
  "requests": [
    {
      "features": [
        {
          "maxResults": 0,
          "model": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "image": {
        "content": "string",
        "source": {
          "gcsImageUri": "string",
          "imageUri": "string"
        }
      },
      "imageContext": {
        "cropHintsParams": {
          "aspectRatios": [
            0
          ]
        },
        "languageHints": [
          "string"
        ],
        "latLongRect": {
          "maxLatLng": {
            "latitude": 0,
            "longitude": 0
          },
          "minLatLng": {
            "latitude": 0,
            "longitude": 0
          }
        },
        "productSearchParams": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "filter": "string",
          "productCategories": [
            "string"
          ],
          "productSet": "string"
        },
        "textDetectionParams": {
          "advancedOcrOptions": [
            "string"
          ],
          "enableTextDetectionConfidenceScore": true
        },
        "webDetectionParams": {
          "includeGeoResults": true
        }
      }
    }
  ]
}
```

<h3 id="visionimagesasyncbatchannotate-parameters">Parameters</h3>

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
|body|body|[GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest](#schemagooglecloudvisionv1p1beta1asyncbatchannotateimagesrequest)|false|none|
|» labels|body|object|false|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.|
|» » **additionalProperties**|body|string|false|none|
|» outputConfig|body|[GoogleCloudVisionV1p1beta1OutputConfig](#schemagooglecloudvisionv1p1beta1outputconfig)|false|Required. The desired output location and metadata (e.g. format).|
|» parent|body|string|false|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
|» requests|body|[[GoogleCloudVisionV1p1beta1AnnotateImageRequest](#schemagooglecloudvisionv1p1beta1annotateimagerequest)]|false|Required. Individual image annotation requests for this batch.|

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

<h3 id="visionimagesasyncbatchannotate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-vision ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-vision )
</aside>

<h1 id="cloud-vision-api-projects">projects</h1>

## vision.projects.locations.files.annotate

<a id="opIdvision.projects.locations.files.annotate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1p1beta1/string/files:annotate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "parent": "string",
    "requests": [
      {
        "features": [
          {
            "maxResults": 0,
            "model": "string",
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "imageContext": {
          "cropHintsParams": {
            "aspectRatios": [
              0
            ]
          },
          "languageHints": [
            "string"
          ],
          "latLongRect": {
            "maxLatLng": {
              "latitude": 0,
              "longitude": 0
            },
            "minLatLng": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "productSearchParams": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "filter": "string",
            "productCategories": [
              "string"
            ],
            "productSet": "string"
          },
          "textDetectionParams": {
            "advancedOcrOptions": [
              "string"
            ],
            "enableTextDetectionConfidenceScore": true
          },
          "webDetectionParams": {
            "includeGeoResults": true
          }
        },
        "inputConfig": {
          "content": "string",
          "gcsSource": {
            "uri": "string"
          },
          "mimeType": "string"
        },
        "pages": [
          0
        ]
      }
    ]
  }'
```

`POST /v1p1beta1/{parent}/files:annotate`

Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.

> Body parameter

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "parent": "string",
  "requests": [
    {
      "features": [
        {
          "maxResults": 0,
          "model": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "imageContext": {
        "cropHintsParams": {
          "aspectRatios": [
            0
          ]
        },
        "languageHints": [
          "string"
        ],
        "latLongRect": {
          "maxLatLng": {
            "latitude": 0,
            "longitude": 0
          },
          "minLatLng": {
            "latitude": 0,
            "longitude": 0
          }
        },
        "productSearchParams": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "filter": "string",
          "productCategories": [
            "string"
          ],
          "productSet": "string"
        },
        "textDetectionParams": {
          "advancedOcrOptions": [
            "string"
          ],
          "enableTextDetectionConfidenceScore": true
        },
        "webDetectionParams": {
          "includeGeoResults": true
        }
      },
      "inputConfig": {
        "content": "string",
        "gcsSource": {
          "uri": "string"
        },
        "mimeType": "string"
      },
      "pages": [
        0
      ]
    }
  ]
}
```

<h3 id="visionprojectslocationsfilesannotate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
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
|body|body|[GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest](#schemagooglecloudvisionv1p1beta1batchannotatefilesrequest)|false|none|
|» labels|body|object|false|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.|
|» » **additionalProperties**|body|string|false|none|
|» parent|body|string|false|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
|» requests|body|[[GoogleCloudVisionV1p1beta1AnnotateFileRequest](#schemagooglecloudvisionv1p1beta1annotatefilerequest)]|false|Required. The list of file annotation requests. Right now we support only one AnnotateFileRequest in BatchAnnotateFilesRequest.|

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
  "responses": [
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
      "inputConfig": {
        "content": "string",
        "gcsSource": {
          "uri": "string"
        },
        "mimeType": "string"
      },
      "responses": [
        {
          "context": {
            "pageNumber": 0,
            "uri": "string"
          },
          "cropHintsAnnotation": {
            "cropHints": [
              {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "importanceFraction": 0
              }
            ]
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
          "faceAnnotations": [
            {
              "angerLikelihood": "UNKNOWN",
              "blurredLikelihood": "UNKNOWN",
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "detectionConfidence": 0,
              "fdBoundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "headwearLikelihood": "UNKNOWN",
              "joyLikelihood": "UNKNOWN",
              "landmarkingConfidence": 0,
              "landmarks": [
                {
                  "position": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                  },
                  "type": "UNKNOWN_LANDMARK"
                }
              ],
              "panAngle": 0,
              "rollAngle": 0,
              "sorrowLikelihood": "UNKNOWN",
              "surpriseLikelihood": "UNKNOWN",
              "tiltAngle": 0,
              "underExposedLikelihood": "UNKNOWN"
            }
          ],
          "fullTextAnnotation": {
            "pages": [
              {
                "blocks": [
                  {
                    "blockType": "UNKNOWN",
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "paragraphs": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "words": [
                          {
                            "boundingBox": {
                              "normalizedVertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ],
                              "vertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ]
                            },
                            "confidence": 0,
                            "property": {
                              "detectedBreak": {
                                "isPrefix": true,
                                "type": "UNKNOWN"
                              },
                              "detectedLanguages": [
                                {
                                  "confidence": 0,
                                  "languageCode": "string"
                                }
                              ]
                            },
                            "symbols": [
                              {
                                "boundingBox": {
                                  "normalizedVertices": [
                                    {
                                      "x": 0,
                                      "y": 0
                                    }
                                  ],
                                  "vertices": [
                                    {
                                      "x": 0,
                                      "y": 0
                                    }
                                  ]
                                },
                                "confidence": 0,
                                "property": {
                                  "detectedBreak": {
                                    "isPrefix": true,
                                    "type": "UNKNOWN"
                                  },
                                  "detectedLanguages": [
                                    {
                                      "confidence": 0,
                                      "languageCode": "string"
                                    }
                                  ]
                                },
                                "text": "string"
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    }
                  }
                ],
                "confidence": 0,
                "height": 0,
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                },
                "width": 0
              }
            ],
            "text": "string"
          },
          "imagePropertiesAnnotation": {
            "dominantColors": {
              "colors": [
                {
                  "color": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "pixelFraction": 0,
                  "score": 0
                }
              ]
            }
          },
          "labelAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "landmarkAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "localizedObjectAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "languageCode": "string",
              "mid": "string",
              "name": "string",
              "score": 0
            }
          ],
          "logoAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "productSearchResults": {
            "indexTime": "string",
            "productGroupedResults": [
              {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "objectAnnotations": [
                  {
                    "languageCode": "string",
                    "mid": "string",
                    "name": "string",
                    "score": 0
                  }
                ],
                "results": [
                  {
                    "image": "string",
                    "product": {
                      "description": "string",
                      "displayName": "string",
                      "name": "string",
                      "productCategory": "string",
                      "productLabels": [
                        {
                          "key": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "score": 0
                  }
                ]
              }
            ],
            "results": [
              {
                "image": "string",
                "product": {
                  "description": "string",
                  "displayName": "string",
                  "name": "string",
                  "productCategory": "string",
                  "productLabels": [
                    {
                      "key": "string",
                      "value": "string"
                    }
                  ]
                },
                "score": 0
              }
            ]
          },
          "safeSearchAnnotation": {
            "adult": "UNKNOWN",
            "medical": "UNKNOWN",
            "racy": "UNKNOWN",
            "spoof": "UNKNOWN",
            "violence": "UNKNOWN"
          },
          "textAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "webDetection": {
            "bestGuessLabels": [
              {
                "label": "string",
                "languageCode": "string"
              }
            ],
            "fullMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "pagesWithMatchingImages": [
              {
                "fullMatchingImages": [
                  {
                    "score": 0,
                    "url": "string"
                  }
                ],
                "pageTitle": "string",
                "partialMatchingImages": [
                  {
                    "score": 0,
                    "url": "string"
                  }
                ],
                "score": 0,
                "url": "string"
              }
            ],
            "partialMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "visuallySimilarImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "webEntities": [
              {
                "description": "string",
                "entityId": "string",
                "score": 0
              }
            ]
          }
        }
      ],
      "totalPages": 0
    }
  ]
}
```

<h3 id="visionprojectslocationsfilesannotate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse](#schemagooglecloudvisionv1p1beta1batchannotatefilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-vision ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-vision )
</aside>

## vision.projects.locations.files.asyncBatchAnnotate

<a id="opIdvision.projects.locations.files.asyncBatchAnnotate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1p1beta1/string/files:asyncBatchAnnotate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "parent": "string",
    "requests": [
      {
        "features": [
          {
            "maxResults": 0,
            "model": "string",
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "imageContext": {
          "cropHintsParams": {
            "aspectRatios": [
              0
            ]
          },
          "languageHints": [
            "string"
          ],
          "latLongRect": {
            "maxLatLng": {
              "latitude": 0,
              "longitude": 0
            },
            "minLatLng": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "productSearchParams": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "filter": "string",
            "productCategories": [
              "string"
            ],
            "productSet": "string"
          },
          "textDetectionParams": {
            "advancedOcrOptions": [
              "string"
            ],
            "enableTextDetectionConfidenceScore": true
          },
          "webDetectionParams": {
            "includeGeoResults": true
          }
        },
        "inputConfig": {
          "content": "string",
          "gcsSource": {
            "uri": "string"
          },
          "mimeType": "string"
        },
        "outputConfig": {
          "batchSize": 0,
          "gcsDestination": {
            "uri": "string"
          }
        }
      }
    ]
  }'
```

`POST /v1p1beta1/{parent}/files:asyncBatchAnnotate`

Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

> Body parameter

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "parent": "string",
  "requests": [
    {
      "features": [
        {
          "maxResults": 0,
          "model": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "imageContext": {
        "cropHintsParams": {
          "aspectRatios": [
            0
          ]
        },
        "languageHints": [
          "string"
        ],
        "latLongRect": {
          "maxLatLng": {
            "latitude": 0,
            "longitude": 0
          },
          "minLatLng": {
            "latitude": 0,
            "longitude": 0
          }
        },
        "productSearchParams": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "filter": "string",
          "productCategories": [
            "string"
          ],
          "productSet": "string"
        },
        "textDetectionParams": {
          "advancedOcrOptions": [
            "string"
          ],
          "enableTextDetectionConfidenceScore": true
        },
        "webDetectionParams": {
          "includeGeoResults": true
        }
      },
      "inputConfig": {
        "content": "string",
        "gcsSource": {
          "uri": "string"
        },
        "mimeType": "string"
      },
      "outputConfig": {
        "batchSize": 0,
        "gcsDestination": {
          "uri": "string"
        }
      }
    }
  ]
}
```

<h3 id="visionprojectslocationsfilesasyncbatchannotate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
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
|body|body|[GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest](#schemagooglecloudvisionv1p1beta1asyncbatchannotatefilesrequest)|false|none|
|» labels|body|object|false|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.|
|» » **additionalProperties**|body|string|false|none|
|» parent|body|string|false|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
|» requests|body|[[GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest](#schemagooglecloudvisionv1p1beta1asyncannotatefilerequest)]|false|Required. Individual async file annotation requests for this batch.|

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

<h3 id="visionprojectslocationsfilesasyncbatchannotate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-vision ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-vision )
</aside>

## vision.projects.locations.images.annotate

<a id="opIdvision.projects.locations.images.annotate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1p1beta1/string/images:annotate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "parent": "string",
    "requests": [
      {
        "features": [
          {
            "maxResults": 0,
            "model": "string",
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "image": {
          "content": "string",
          "source": {
            "gcsImageUri": "string",
            "imageUri": "string"
          }
        },
        "imageContext": {
          "cropHintsParams": {
            "aspectRatios": [
              0
            ]
          },
          "languageHints": [
            "string"
          ],
          "latLongRect": {
            "maxLatLng": {
              "latitude": 0,
              "longitude": 0
            },
            "minLatLng": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "productSearchParams": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "filter": "string",
            "productCategories": [
              "string"
            ],
            "productSet": "string"
          },
          "textDetectionParams": {
            "advancedOcrOptions": [
              "string"
            ],
            "enableTextDetectionConfidenceScore": true
          },
          "webDetectionParams": {
            "includeGeoResults": true
          }
        }
      }
    ]
  }'
```

`POST /v1p1beta1/{parent}/images:annotate`

Run image detection and annotation for a batch of images.

> Body parameter

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "parent": "string",
  "requests": [
    {
      "features": [
        {
          "maxResults": 0,
          "model": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "image": {
        "content": "string",
        "source": {
          "gcsImageUri": "string",
          "imageUri": "string"
        }
      },
      "imageContext": {
        "cropHintsParams": {
          "aspectRatios": [
            0
          ]
        },
        "languageHints": [
          "string"
        ],
        "latLongRect": {
          "maxLatLng": {
            "latitude": 0,
            "longitude": 0
          },
          "minLatLng": {
            "latitude": 0,
            "longitude": 0
          }
        },
        "productSearchParams": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "filter": "string",
          "productCategories": [
            "string"
          ],
          "productSet": "string"
        },
        "textDetectionParams": {
          "advancedOcrOptions": [
            "string"
          ],
          "enableTextDetectionConfidenceScore": true
        },
        "webDetectionParams": {
          "includeGeoResults": true
        }
      }
    }
  ]
}
```

<h3 id="visionprojectslocationsimagesannotate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
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
|body|body|[GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest](#schemagooglecloudvisionv1p1beta1batchannotateimagesrequest)|false|none|
|» labels|body|object|false|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.|
|» » **additionalProperties**|body|string|false|none|
|» parent|body|string|false|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
|» requests|body|[[GoogleCloudVisionV1p1beta1AnnotateImageRequest](#schemagooglecloudvisionv1p1beta1annotateimagerequest)]|false|Required. Individual image annotation requests for this batch.|

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
  "responses": [
    {
      "context": {
        "pageNumber": 0,
        "uri": "string"
      },
      "cropHintsAnnotation": {
        "cropHints": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "importanceFraction": 0
          }
        ]
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
      "faceAnnotations": [
        {
          "angerLikelihood": "UNKNOWN",
          "blurredLikelihood": "UNKNOWN",
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "detectionConfidence": 0,
          "fdBoundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "headwearLikelihood": "UNKNOWN",
          "joyLikelihood": "UNKNOWN",
          "landmarkingConfidence": 0,
          "landmarks": [
            {
              "position": {
                "x": 0,
                "y": 0,
                "z": 0
              },
              "type": "UNKNOWN_LANDMARK"
            }
          ],
          "panAngle": 0,
          "rollAngle": 0,
          "sorrowLikelihood": "UNKNOWN",
          "surpriseLikelihood": "UNKNOWN",
          "tiltAngle": 0,
          "underExposedLikelihood": "UNKNOWN"
        }
      ],
      "fullTextAnnotation": {
        "pages": [
          {
            "blocks": [
              {
                "blockType": "UNKNOWN",
                "boundingBox": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "paragraphs": [
                  {
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    },
                    "words": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "symbols": [
                          {
                            "boundingBox": {
                              "normalizedVertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ],
                              "vertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ]
                            },
                            "confidence": 0,
                            "property": {
                              "detectedBreak": {
                                "isPrefix": true,
                                "type": "UNKNOWN"
                              },
                              "detectedLanguages": [
                                {
                                  "confidence": 0,
                                  "languageCode": "string"
                                }
                              ]
                            },
                            "text": "string"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                }
              }
            ],
            "confidence": 0,
            "height": 0,
            "property": {
              "detectedBreak": {
                "isPrefix": true,
                "type": "UNKNOWN"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ]
            },
            "width": 0
          }
        ],
        "text": "string"
      },
      "imagePropertiesAnnotation": {
        "dominantColors": {
          "colors": [
            {
              "color": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "pixelFraction": 0,
              "score": 0
            }
          ]
        }
      },
      "labelAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "landmarkAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "localizedObjectAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "languageCode": "string",
          "mid": "string",
          "name": "string",
          "score": 0
        }
      ],
      "logoAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "productSearchResults": {
        "indexTime": "string",
        "productGroupedResults": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "objectAnnotations": [
              {
                "languageCode": "string",
                "mid": "string",
                "name": "string",
                "score": 0
              }
            ],
            "results": [
              {
                "image": "string",
                "product": {
                  "description": "string",
                  "displayName": "string",
                  "name": "string",
                  "productCategory": "string",
                  "productLabels": [
                    {
                      "key": "string",
                      "value": "string"
                    }
                  ]
                },
                "score": 0
              }
            ]
          }
        ],
        "results": [
          {
            "image": "string",
            "product": {
              "description": "string",
              "displayName": "string",
              "name": "string",
              "productCategory": "string",
              "productLabels": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "score": 0
          }
        ]
      },
      "safeSearchAnnotation": {
        "adult": "UNKNOWN",
        "medical": "UNKNOWN",
        "racy": "UNKNOWN",
        "spoof": "UNKNOWN",
        "violence": "UNKNOWN"
      },
      "textAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "webDetection": {
        "bestGuessLabels": [
          {
            "label": "string",
            "languageCode": "string"
          }
        ],
        "fullMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "pagesWithMatchingImages": [
          {
            "fullMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "pageTitle": "string",
            "partialMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "score": 0,
            "url": "string"
          }
        ],
        "partialMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "visuallySimilarImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "webEntities": [
          {
            "description": "string",
            "entityId": "string",
            "score": 0
          }
        ]
      }
    }
  ]
}
```

<h3 id="visionprojectslocationsimagesannotate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse](#schemagooglecloudvisionv1p1beta1batchannotateimagesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-vision ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-vision )
</aside>

## vision.projects.locations.images.asyncBatchAnnotate

<a id="opIdvision.projects.locations.images.asyncBatchAnnotate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1p1beta1/string/images:asyncBatchAnnotate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "outputConfig": {
      "batchSize": 0,
      "gcsDestination": {
        "uri": "string"
      }
    },
    "parent": "string",
    "requests": [
      {
        "features": [
          {
            "maxResults": 0,
            "model": "string",
            "type": "TYPE_UNSPECIFIED"
          }
        ],
        "image": {
          "content": "string",
          "source": {
            "gcsImageUri": "string",
            "imageUri": "string"
          }
        },
        "imageContext": {
          "cropHintsParams": {
            "aspectRatios": [
              0
            ]
          },
          "languageHints": [
            "string"
          ],
          "latLongRect": {
            "maxLatLng": {
              "latitude": 0,
              "longitude": 0
            },
            "minLatLng": {
              "latitude": 0,
              "longitude": 0
            }
          },
          "productSearchParams": {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "filter": "string",
            "productCategories": [
              "string"
            ],
            "productSet": "string"
          },
          "textDetectionParams": {
            "advancedOcrOptions": [
              "string"
            ],
            "enableTextDetectionConfidenceScore": true
          },
          "webDetectionParams": {
            "includeGeoResults": true
          }
        }
      }
    ]
  }'
```

`POST /v1p1beta1/{parent}/images:asyncBatchAnnotate`

Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

> Body parameter

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "outputConfig": {
    "batchSize": 0,
    "gcsDestination": {
      "uri": "string"
    }
  },
  "parent": "string",
  "requests": [
    {
      "features": [
        {
          "maxResults": 0,
          "model": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "image": {
        "content": "string",
        "source": {
          "gcsImageUri": "string",
          "imageUri": "string"
        }
      },
      "imageContext": {
        "cropHintsParams": {
          "aspectRatios": [
            0
          ]
        },
        "languageHints": [
          "string"
        ],
        "latLongRect": {
          "maxLatLng": {
            "latitude": 0,
            "longitude": 0
          },
          "minLatLng": {
            "latitude": 0,
            "longitude": 0
          }
        },
        "productSearchParams": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "filter": "string",
          "productCategories": [
            "string"
          ],
          "productSet": "string"
        },
        "textDetectionParams": {
          "advancedOcrOptions": [
            "string"
          ],
          "enableTextDetectionConfidenceScore": true
        },
        "webDetectionParams": {
          "includeGeoResults": true
        }
      }
    }
  ]
}
```

<h3 id="visionprojectslocationsimagesasyncbatchannotate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
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
|body|body|[GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest](#schemagooglecloudvisionv1p1beta1asyncbatchannotateimagesrequest)|false|none|
|» labels|body|object|false|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.|
|» » **additionalProperties**|body|string|false|none|
|» outputConfig|body|[GoogleCloudVisionV1p1beta1OutputConfig](#schemagooglecloudvisionv1p1beta1outputconfig)|false|Required. The desired output location and metadata (e.g. format).|
|» parent|body|string|false|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
|» requests|body|[[GoogleCloudVisionV1p1beta1AnnotateImageRequest](#schemagooglecloudvisionv1p1beta1annotateimagerequest)]|false|Required. Individual image annotation requests for this batch.|

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

<h3 id="visionprojectslocationsimagesasyncbatchannotate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform ), Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-vision ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-vision )
</aside>

# Schemas

<h2 id="tocS_AnnotateFileResponse">AnnotateFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaannotatefileresponse"></a>
<a id="schema_AnnotateFileResponse"></a>
<a id="tocSannotatefileresponse"></a>
<a id="tocsannotatefileresponse"></a>

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
  "inputConfig": {
    "content": "string",
    "gcsSource": {
      "uri": "string"
    },
    "mimeType": "string"
  },
  "responses": [
    {
      "context": {
        "pageNumber": 0,
        "uri": "string"
      },
      "cropHintsAnnotation": {
        "cropHints": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "importanceFraction": 0
          }
        ]
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
      "faceAnnotations": [
        {
          "angerLikelihood": "UNKNOWN",
          "blurredLikelihood": "UNKNOWN",
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "detectionConfidence": 0,
          "fdBoundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "headwearLikelihood": "UNKNOWN",
          "joyLikelihood": "UNKNOWN",
          "landmarkingConfidence": 0,
          "landmarks": [
            {
              "position": {
                "x": 0,
                "y": 0,
                "z": 0
              },
              "type": "UNKNOWN_LANDMARK"
            }
          ],
          "panAngle": 0,
          "rollAngle": 0,
          "sorrowLikelihood": "UNKNOWN",
          "surpriseLikelihood": "UNKNOWN",
          "tiltAngle": 0,
          "underExposedLikelihood": "UNKNOWN"
        }
      ],
      "fullTextAnnotation": {
        "pages": [
          {
            "blocks": [
              {
                "blockType": "UNKNOWN",
                "boundingBox": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "paragraphs": [
                  {
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    },
                    "words": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "symbols": [
                          {
                            "boundingBox": {
                              "normalizedVertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ],
                              "vertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ]
                            },
                            "confidence": 0,
                            "property": {
                              "detectedBreak": {
                                "isPrefix": true,
                                "type": "UNKNOWN"
                              },
                              "detectedLanguages": [
                                {
                                  "confidence": 0,
                                  "languageCode": "string"
                                }
                              ]
                            },
                            "text": "string"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                }
              }
            ],
            "confidence": 0,
            "height": 0,
            "property": {
              "detectedBreak": {
                "isPrefix": true,
                "type": "UNKNOWN"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ]
            },
            "width": 0
          }
        ],
        "text": "string"
      },
      "imagePropertiesAnnotation": {
        "dominantColors": {
          "colors": [
            {
              "color": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "pixelFraction": 0,
              "score": 0
            }
          ]
        }
      },
      "labelAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "landmarkAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "localizedObjectAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "languageCode": "string",
          "mid": "string",
          "name": "string",
          "score": 0
        }
      ],
      "logoAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "productSearchResults": {
        "indexTime": "string",
        "productGroupedResults": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "objectAnnotations": [
              {
                "languageCode": "string",
                "mid": "string",
                "name": "string",
                "score": 0
              }
            ],
            "results": [
              {
                "image": "string",
                "product": {
                  "description": "string",
                  "displayName": "string",
                  "name": "string",
                  "productCategory": "string",
                  "productLabels": [
                    {
                      "key": "string",
                      "value": "string"
                    }
                  ]
                },
                "score": 0
              }
            ]
          }
        ],
        "results": [
          {
            "image": "string",
            "product": {
              "description": "string",
              "displayName": "string",
              "name": "string",
              "productCategory": "string",
              "productLabels": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "score": 0
          }
        ]
      },
      "safeSearchAnnotation": {
        "adult": "UNKNOWN",
        "medical": "UNKNOWN",
        "racy": "UNKNOWN",
        "spoof": "UNKNOWN",
        "violence": "UNKNOWN"
      },
      "textAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "webDetection": {
        "bestGuessLabels": [
          {
            "label": "string",
            "languageCode": "string"
          }
        ],
        "fullMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "pagesWithMatchingImages": [
          {
            "fullMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "pageTitle": "string",
            "partialMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "score": 0,
            "url": "string"
          }
        ],
        "partialMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "visuallySimilarImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "webEntities": [
          {
            "description": "string",
            "entityId": "string",
            "score": 0
          }
        ]
      }
    }
  ],
  "totalPages": 0
}
```

Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Status](#schemastatus)|false|none|If set, represents the error message for the failed request. The `responses` field will not be set in this case.|
|inputConfig|[InputConfig](#schemainputconfig)|false|none|Information about the file for which this response is generated.|
|responses|[[AnnotateImageResponse](#schemaannotateimageresponse)]|false|none|Individual responses to images found within the file. This field will be empty if the `error` field is set.|
|totalPages|integer(int32)|false|none|This field gives the total number of pages in the file.|

<h2 id="tocS_AnnotateImageResponse">AnnotateImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemaannotateimageresponse"></a>
<a id="schema_AnnotateImageResponse"></a>
<a id="tocSannotateimageresponse"></a>
<a id="tocsannotateimageresponse"></a>

```json
{
  "context": {
    "pageNumber": 0,
    "uri": "string"
  },
  "cropHintsAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "importanceFraction": 0
      }
    ]
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
  "faceAnnotations": [
    {
      "angerLikelihood": "UNKNOWN",
      "blurredLikelihood": "UNKNOWN",
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "detectionConfidence": 0,
      "fdBoundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "headwearLikelihood": "UNKNOWN",
      "joyLikelihood": "UNKNOWN",
      "landmarkingConfidence": 0,
      "landmarks": [
        {
          "position": {
            "x": 0,
            "y": 0,
            "z": 0
          },
          "type": "UNKNOWN_LANDMARK"
        }
      ],
      "panAngle": 0,
      "rollAngle": 0,
      "sorrowLikelihood": "UNKNOWN",
      "surpriseLikelihood": "UNKNOWN",
      "tiltAngle": 0,
      "underExposedLikelihood": "UNKNOWN"
    }
  ],
  "fullTextAnnotation": {
    "pages": [
      {
        "blocks": [
          {
            "blockType": "UNKNOWN",
            "boundingBox": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "paragraphs": [
              {
                "boundingBox": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                },
                "words": [
                  {
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "text": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "property": {
              "detectedBreak": {
                "isPrefix": true,
                "type": "UNKNOWN"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ]
            }
          }
        ],
        "confidence": 0,
        "height": 0,
        "property": {
          "detectedBreak": {
            "isPrefix": true,
            "type": "UNKNOWN"
          },
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ]
        },
        "width": 0
      }
    ],
    "text": "string"
  },
  "imagePropertiesAnnotation": {
    "dominantColors": {
      "colors": [
        {
          "color": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "pixelFraction": 0,
          "score": 0
        }
      ]
    }
  },
  "labelAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "landmarkAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "localizedObjectAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "languageCode": "string",
      "mid": "string",
      "name": "string",
      "score": 0
    }
  ],
  "logoAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "productSearchResults": {
    "indexTime": "string",
    "productGroupedResults": [
      {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "objectAnnotations": [
          {
            "languageCode": "string",
            "mid": "string",
            "name": "string",
            "score": 0
          }
        ],
        "results": [
          {
            "image": "string",
            "product": {
              "description": "string",
              "displayName": "string",
              "name": "string",
              "productCategory": "string",
              "productLabels": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "score": 0
          }
        ]
      }
    ],
    "results": [
      {
        "image": "string",
        "product": {
          "description": "string",
          "displayName": "string",
          "name": "string",
          "productCategory": "string",
          "productLabels": [
            {
              "key": "string",
              "value": "string"
            }
          ]
        },
        "score": 0
      }
    ]
  },
  "safeSearchAnnotation": {
    "adult": "UNKNOWN",
    "medical": "UNKNOWN",
    "racy": "UNKNOWN",
    "spoof": "UNKNOWN",
    "violence": "UNKNOWN"
  },
  "textAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "webDetection": {
    "bestGuessLabels": [
      {
        "label": "string",
        "languageCode": "string"
      }
    ],
    "fullMatchingImages": [
      {
        "score": 0,
        "url": "string"
      }
    ],
    "pagesWithMatchingImages": [
      {
        "fullMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "pageTitle": "string",
        "partialMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "score": 0,
        "url": "string"
      }
    ],
    "partialMatchingImages": [
      {
        "score": 0,
        "url": "string"
      }
    ],
    "visuallySimilarImages": [
      {
        "score": 0,
        "url": "string"
      }
    ],
    "webEntities": [
      {
        "description": "string",
        "entityId": "string",
        "score": 0
      }
    ]
  }
}
```

Response to an image annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[ImageAnnotationContext](#schemaimageannotationcontext)|false|none|If present, contextual information is needed to understand where this image comes from.|
|cropHintsAnnotation|[CropHintsAnnotation](#schemacrophintsannotation)|false|none|If present, crop hints have completed successfully.|
|error|[Status](#schemastatus)|false|none|If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.|
|faceAnnotations|[[FaceAnnotation](#schemafaceannotation)]|false|none|If present, face detection has completed successfully.|
|fullTextAnnotation|[TextAnnotation](#schematextannotation)|false|none|If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.|
|imagePropertiesAnnotation|[ImageProperties](#schemaimageproperties)|false|none|If present, image properties were extracted successfully.|
|labelAnnotations|[[EntityAnnotation](#schemaentityannotation)]|false|none|If present, label detection has completed successfully.|
|landmarkAnnotations|[[EntityAnnotation](#schemaentityannotation)]|false|none|If present, landmark detection has completed successfully.|
|localizedObjectAnnotations|[[LocalizedObjectAnnotation](#schemalocalizedobjectannotation)]|false|none|If present, localized object detection has completed successfully. This will be sorted descending by confidence score.|
|logoAnnotations|[[EntityAnnotation](#schemaentityannotation)]|false|none|If present, logo detection has completed successfully.|
|productSearchResults|[ProductSearchResults](#schemaproductsearchresults)|false|none|If present, product search has completed successfully.|
|safeSearchAnnotation|[SafeSearchAnnotation](#schemasafesearchannotation)|false|none|If present, safe-search annotation has completed successfully.|
|textAnnotations|[[EntityAnnotation](#schemaentityannotation)]|false|none|If present, text (OCR) detection has completed successfully.|
|webDetection|[WebDetection](#schemawebdetection)|false|none|If present, web detection has completed successfully.|

<h2 id="tocS_AsyncAnnotateFileResponse">AsyncAnnotateFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaasyncannotatefileresponse"></a>
<a id="schema_AsyncAnnotateFileResponse"></a>
<a id="tocSasyncannotatefileresponse"></a>
<a id="tocsasyncannotatefileresponse"></a>

```json
{
  "outputConfig": {
    "batchSize": 0,
    "gcsDestination": {
      "uri": "string"
    }
  }
}
```

The response for a single offline file annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputConfig|[OutputConfig](#schemaoutputconfig)|false|none|The output location and metadata from AsyncAnnotateFileRequest.|

<h2 id="tocS_AsyncBatchAnnotateFilesResponse">AsyncBatchAnnotateFilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaasyncbatchannotatefilesresponse"></a>
<a id="schema_AsyncBatchAnnotateFilesResponse"></a>
<a id="tocSasyncbatchannotatefilesresponse"></a>
<a id="tocsasyncbatchannotatefilesresponse"></a>

```json
{
  "responses": [
    {
      "outputConfig": {
        "batchSize": 0,
        "gcsDestination": {
          "uri": "string"
        }
      }
    }
  ]
}
```

Response to an async batch file annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[AsyncAnnotateFileResponse](#schemaasyncannotatefileresponse)]|false|none|The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.|

<h2 id="tocS_AsyncBatchAnnotateImagesResponse">AsyncBatchAnnotateImagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaasyncbatchannotateimagesresponse"></a>
<a id="schema_AsyncBatchAnnotateImagesResponse"></a>
<a id="tocSasyncbatchannotateimagesresponse"></a>
<a id="tocsasyncbatchannotateimagesresponse"></a>

```json
{
  "outputConfig": {
    "batchSize": 0,
    "gcsDestination": {
      "uri": "string"
    }
  }
}
```

Response to an async batch image annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputConfig|[OutputConfig](#schemaoutputconfig)|false|none|The output location and metadata from AsyncBatchAnnotateImagesRequest.|

<h2 id="tocS_BatchAnnotateFilesResponse">BatchAnnotateFilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchannotatefilesresponse"></a>
<a id="schema_BatchAnnotateFilesResponse"></a>
<a id="tocSbatchannotatefilesresponse"></a>
<a id="tocsbatchannotatefilesresponse"></a>

```json
{
  "responses": [
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
      "inputConfig": {
        "content": "string",
        "gcsSource": {
          "uri": "string"
        },
        "mimeType": "string"
      },
      "responses": [
        {
          "context": {
            "pageNumber": 0,
            "uri": "string"
          },
          "cropHintsAnnotation": {
            "cropHints": [
              {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "importanceFraction": 0
              }
            ]
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
          "faceAnnotations": [
            {
              "angerLikelihood": "UNKNOWN",
              "blurredLikelihood": "UNKNOWN",
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "detectionConfidence": 0,
              "fdBoundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "headwearLikelihood": "UNKNOWN",
              "joyLikelihood": "UNKNOWN",
              "landmarkingConfidence": 0,
              "landmarks": [
                {
                  "position": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                  },
                  "type": "UNKNOWN_LANDMARK"
                }
              ],
              "panAngle": 0,
              "rollAngle": 0,
              "sorrowLikelihood": "UNKNOWN",
              "surpriseLikelihood": "UNKNOWN",
              "tiltAngle": 0,
              "underExposedLikelihood": "UNKNOWN"
            }
          ],
          "fullTextAnnotation": {
            "pages": [
              {
                "blocks": [
                  {
                    "blockType": "UNKNOWN",
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "paragraphs": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "words": [
                          {
                            "boundingBox": {
                              "normalizedVertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ],
                              "vertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ]
                            },
                            "confidence": 0,
                            "property": {
                              "detectedBreak": {
                                "isPrefix": true,
                                "type": "UNKNOWN"
                              },
                              "detectedLanguages": [
                                {
                                  "confidence": 0,
                                  "languageCode": "string"
                                }
                              ]
                            },
                            "symbols": [
                              {
                                "boundingBox": {
                                  "normalizedVertices": [
                                    {
                                      "x": 0,
                                      "y": 0
                                    }
                                  ],
                                  "vertices": [
                                    {
                                      "x": 0,
                                      "y": 0
                                    }
                                  ]
                                },
                                "confidence": 0,
                                "property": {
                                  "detectedBreak": {
                                    "isPrefix": true,
                                    "type": "UNKNOWN"
                                  },
                                  "detectedLanguages": [
                                    {
                                      "confidence": 0,
                                      "languageCode": "string"
                                    }
                                  ]
                                },
                                "text": "string"
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    }
                  }
                ],
                "confidence": 0,
                "height": 0,
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                },
                "width": 0
              }
            ],
            "text": "string"
          },
          "imagePropertiesAnnotation": {
            "dominantColors": {
              "colors": [
                {
                  "color": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "pixelFraction": 0,
                  "score": 0
                }
              ]
            }
          },
          "labelAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "landmarkAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "localizedObjectAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "languageCode": "string",
              "mid": "string",
              "name": "string",
              "score": 0
            }
          ],
          "logoAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "productSearchResults": {
            "indexTime": "string",
            "productGroupedResults": [
              {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "objectAnnotations": [
                  {
                    "languageCode": "string",
                    "mid": "string",
                    "name": "string",
                    "score": 0
                  }
                ],
                "results": [
                  {
                    "image": "string",
                    "product": {
                      "description": "string",
                      "displayName": "string",
                      "name": "string",
                      "productCategory": "string",
                      "productLabels": [
                        {
                          "key": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "score": 0
                  }
                ]
              }
            ],
            "results": [
              {
                "image": "string",
                "product": {
                  "description": "string",
                  "displayName": "string",
                  "name": "string",
                  "productCategory": "string",
                  "productLabels": [
                    {
                      "key": "string",
                      "value": "string"
                    }
                  ]
                },
                "score": 0
              }
            ]
          },
          "safeSearchAnnotation": {
            "adult": "UNKNOWN",
            "medical": "UNKNOWN",
            "racy": "UNKNOWN",
            "spoof": "UNKNOWN",
            "violence": "UNKNOWN"
          },
          "textAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "webDetection": {
            "bestGuessLabels": [
              {
                "label": "string",
                "languageCode": "string"
              }
            ],
            "fullMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "pagesWithMatchingImages": [
              {
                "fullMatchingImages": [
                  {
                    "score": 0,
                    "url": "string"
                  }
                ],
                "pageTitle": "string",
                "partialMatchingImages": [
                  {
                    "score": 0,
                    "url": "string"
                  }
                ],
                "score": 0,
                "url": "string"
              }
            ],
            "partialMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "visuallySimilarImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "webEntities": [
              {
                "description": "string",
                "entityId": "string",
                "score": 0
              }
            ]
          }
        }
      ],
      "totalPages": 0
    }
  ]
}
```

A list of file annotation responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[AnnotateFileResponse](#schemaannotatefileresponse)]|false|none|The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest.|

<h2 id="tocS_BatchOperationMetadata">BatchOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemabatchoperationmetadata"></a>
<a id="schema_BatchOperationMetadata"></a>
<a id="tocSbatchoperationmetadata"></a>
<a id="tocsbatchoperationmetadata"></a>

```json
{
  "endTime": "string",
  "state": "STATE_UNSPECIFIED",
  "submitTime": "string"
}
```

Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The time when the batch request is finished and google.longrunning.Operation.done is set to true.|
|state|string|false|none|The current state of the batch operation.|
|submitTime|string(google-datetime)|false|none|The time when the batch request was submitted to the server.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PROCESSING|
|state|SUCCESSFUL|
|state|FAILED|
|state|CANCELLED|

<h2 id="tocS_Block">Block</h2>
<!-- backwards compatibility -->
<a id="schemablock"></a>
<a id="schema_Block"></a>
<a id="tocSblock"></a>
<a id="tocsblock"></a>

```json
{
  "blockType": "UNKNOWN",
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "paragraphs": [
    {
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "words": [
        {
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          },
          "symbols": [
            {
              "boundingBox": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "property": {
                "detectedBreak": {
                  "isPrefix": true,
                  "type": "UNKNOWN"
                },
                "detectedLanguages": [
                  {
                    "confidence": 0,
                    "languageCode": "string"
                  }
                ]
              },
              "text": "string"
            }
          ]
        }
      ]
    }
  ],
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  }
}
```

Logical element on the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockType|string|false|none|Detected block type (text, image etc) for this block.|
|boundingBox|[BoundingPoly](#schemaboundingpoly)|false|none|The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results on the block. Range [0, 1].|
|paragraphs|[[Paragraph](#schemaparagraph)]|false|none|List of paragraphs in this block (if this blocks is of type text).|
|property|[TextProperty](#schematextproperty)|false|none|Additional information detected for the block.|

#### Enumerated Values

|Property|Value|
|---|---|
|blockType|UNKNOWN|
|blockType|TEXT|
|blockType|TABLE|
|blockType|PICTURE|
|blockType|RULER|
|blockType|BARCODE|

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
  ],
  "vertices": [
    {
      "x": 0,
      "y": 0
    }
  ]
}
```

A bounding polygon for the detected image annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedVertices|[[NormalizedVertex](#schemanormalizedvertex)]|false|none|The bounding polygon normalized vertices.|
|vertices|[[Vertex](#schemavertex)]|false|none|The bounding polygon vertices.|

<h2 id="tocS_Color">Color</h2>
<!-- backwards compatibility -->
<a id="schemacolor"></a>
<a id="schema_Color"></a>
<a id="tocScolor"></a>
<a id="tocscolor"></a>

```json
{
  "alpha": 0,
  "blue": 0,
  "green": 0,
  "red": 0
}
```

Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alpha|number(float)|false|none|The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).|
|blue|number(float)|false|none|The amount of blue in the color as a value in the interval [0, 1].|
|green|number(float)|false|none|The amount of green in the color as a value in the interval [0, 1].|
|red|number(float)|false|none|The amount of red in the color as a value in the interval [0, 1].|

<h2 id="tocS_ColorInfo">ColorInfo</h2>
<!-- backwards compatibility -->
<a id="schemacolorinfo"></a>
<a id="schema_ColorInfo"></a>
<a id="tocScolorinfo"></a>
<a id="tocscolorinfo"></a>

```json
{
  "color": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "pixelFraction": 0,
  "score": 0
}
```

Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|[Color](#schemacolor)|false|none|RGB components of the color.|
|pixelFraction|number(float)|false|none|The fraction of pixels the color occupies in the image. Value in range [0, 1].|
|score|number(float)|false|none|Image-specific score for this color. Value in range [0, 1].|

<h2 id="tocS_CropHint">CropHint</h2>
<!-- backwards compatibility -->
<a id="schemacrophint"></a>
<a id="schema_CropHint"></a>
<a id="tocScrophint"></a>
<a id="tocscrophint"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "importanceFraction": 0
}
```

Single crop hint that is used to generate a new crop when serving an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[BoundingPoly](#schemaboundingpoly)|false|none|The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale.|
|confidence|number(float)|false|none|Confidence of this being a salient region. Range [0, 1].|
|importanceFraction|number(float)|false|none|Fraction of importance of this salient region with respect to the original image.|

<h2 id="tocS_CropHintsAnnotation">CropHintsAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemacrophintsannotation"></a>
<a id="schema_CropHintsAnnotation"></a>
<a id="tocScrophintsannotation"></a>
<a id="tocscrophintsannotation"></a>

```json
{
  "cropHints": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "importanceFraction": 0
    }
  ]
}
```

Set of crop hints that are used to generate new crops when serving images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cropHints|[[CropHint](#schemacrophint)]|false|none|Crop hint results.|

<h2 id="tocS_DetectedBreak">DetectedBreak</h2>
<!-- backwards compatibility -->
<a id="schemadetectedbreak"></a>
<a id="schema_DetectedBreak"></a>
<a id="tocSdetectedbreak"></a>
<a id="tocsdetectedbreak"></a>

```json
{
  "isPrefix": true,
  "type": "UNKNOWN"
}
```

Detected start or end of a structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPrefix|boolean|false|none|True if break prepends the element.|
|type|string|false|none|Detected break type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNKNOWN|
|type|SPACE|
|type|SURE_SPACE|
|type|EOL_SURE_SPACE|
|type|HYPHEN|
|type|LINE_BREAK|

<h2 id="tocS_DetectedLanguage">DetectedLanguage</h2>
<!-- backwards compatibility -->
<a id="schemadetectedlanguage"></a>
<a id="schema_DetectedLanguage"></a>
<a id="tocSdetectedlanguage"></a>
<a id="tocsdetectedlanguage"></a>

```json
{
  "confidence": 0,
  "languageCode": "string"
}
```

Detected language for a structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence of detected language. Range [0, 1].|
|languageCode|string|false|none|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|

<h2 id="tocS_DominantColorsAnnotation">DominantColorsAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemadominantcolorsannotation"></a>
<a id="schema_DominantColorsAnnotation"></a>
<a id="tocSdominantcolorsannotation"></a>
<a id="tocsdominantcolorsannotation"></a>

```json
{
  "colors": [
    {
      "color": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "pixelFraction": 0,
      "score": 0
    }
  ]
}
```

Set of dominant colors and their corresponding scores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|[[ColorInfo](#schemacolorinfo)]|false|none|RGB color values with their score and pixel fraction.|

<h2 id="tocS_EntityAnnotation">EntityAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemaentityannotation"></a>
<a id="schema_EntityAnnotation"></a>
<a id="tocSentityannotation"></a>
<a id="tocsentityannotation"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "description": "string",
  "locale": "string",
  "locations": [
    {
      "latLng": {
        "latitude": 0,
        "longitude": 0
      }
    }
  ],
  "mid": "string",
  "properties": [
    {
      "name": "string",
      "uint64Value": "string",
      "value": "string"
    }
  ],
  "score": 0,
  "topicality": 0
}
```

Set of detected entity features.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[BoundingPoly](#schemaboundingpoly)|false|none|Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.|
|confidence|number(float)|false|none|**Deprecated.** **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].|
|description|string|false|none|Entity textual description, expressed in its `locale` language.|
|locale|string|false|none|The language code for the locale in which the entity textual `description` is expressed.|
|locations|[[LocationInfo](#schemalocationinfo)]|false|none|The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.|
|mid|string|false|none|Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).|
|properties|[[Property](#schemaproperty)]|false|none|Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.|
|score|number(float)|false|none|Overall score of the result. Range [0, 1].|
|topicality|number(float)|false|none|The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].|

<h2 id="tocS_FaceAnnotation">FaceAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemafaceannotation"></a>
<a id="schema_FaceAnnotation"></a>
<a id="tocSfaceannotation"></a>
<a id="tocsfaceannotation"></a>

```json
{
  "angerLikelihood": "UNKNOWN",
  "blurredLikelihood": "UNKNOWN",
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "detectionConfidence": 0,
  "fdBoundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "headwearLikelihood": "UNKNOWN",
  "joyLikelihood": "UNKNOWN",
  "landmarkingConfidence": 0,
  "landmarks": [
    {
      "position": {
        "x": 0,
        "y": 0,
        "z": 0
      },
      "type": "UNKNOWN_LANDMARK"
    }
  ],
  "panAngle": 0,
  "rollAngle": 0,
  "sorrowLikelihood": "UNKNOWN",
  "surpriseLikelihood": "UNKNOWN",
  "tiltAngle": 0,
  "underExposedLikelihood": "UNKNOWN"
}
```

A face annotation object contains the results of face detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angerLikelihood|string|false|none|Anger likelihood.|
|blurredLikelihood|string|false|none|Blurred likelihood.|
|boundingPoly|[BoundingPoly](#schemaboundingpoly)|false|none|The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.|
|detectionConfidence|number(float)|false|none|Detection confidence. Range [0, 1].|
|fdBoundingPoly|[BoundingPoly](#schemaboundingpoly)|false|none|The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix.|
|headwearLikelihood|string|false|none|Headwear likelihood.|
|joyLikelihood|string|false|none|Joy likelihood.|
|landmarkingConfidence|number(float)|false|none|Face landmarking confidence. Range [0, 1].|
|landmarks|[[Landmark](#schemalandmark)]|false|none|Detected face landmarks.|
|panAngle|number(float)|false|none|Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].|
|rollAngle|number(float)|false|none|Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].|
|sorrowLikelihood|string|false|none|Sorrow likelihood.|
|surpriseLikelihood|string|false|none|Surprise likelihood.|
|tiltAngle|number(float)|false|none|Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].|
|underExposedLikelihood|string|false|none|Under-exposed likelihood.|

#### Enumerated Values

|Property|Value|
|---|---|
|angerLikelihood|UNKNOWN|
|angerLikelihood|VERY_UNLIKELY|
|angerLikelihood|UNLIKELY|
|angerLikelihood|POSSIBLE|
|angerLikelihood|LIKELY|
|angerLikelihood|VERY_LIKELY|
|blurredLikelihood|UNKNOWN|
|blurredLikelihood|VERY_UNLIKELY|
|blurredLikelihood|UNLIKELY|
|blurredLikelihood|POSSIBLE|
|blurredLikelihood|LIKELY|
|blurredLikelihood|VERY_LIKELY|
|headwearLikelihood|UNKNOWN|
|headwearLikelihood|VERY_UNLIKELY|
|headwearLikelihood|UNLIKELY|
|headwearLikelihood|POSSIBLE|
|headwearLikelihood|LIKELY|
|headwearLikelihood|VERY_LIKELY|
|joyLikelihood|UNKNOWN|
|joyLikelihood|VERY_UNLIKELY|
|joyLikelihood|UNLIKELY|
|joyLikelihood|POSSIBLE|
|joyLikelihood|LIKELY|
|joyLikelihood|VERY_LIKELY|
|sorrowLikelihood|UNKNOWN|
|sorrowLikelihood|VERY_UNLIKELY|
|sorrowLikelihood|UNLIKELY|
|sorrowLikelihood|POSSIBLE|
|sorrowLikelihood|LIKELY|
|sorrowLikelihood|VERY_LIKELY|
|surpriseLikelihood|UNKNOWN|
|surpriseLikelihood|VERY_UNLIKELY|
|surpriseLikelihood|UNLIKELY|
|surpriseLikelihood|POSSIBLE|
|surpriseLikelihood|LIKELY|
|surpriseLikelihood|VERY_LIKELY|
|underExposedLikelihood|UNKNOWN|
|underExposedLikelihood|VERY_UNLIKELY|
|underExposedLikelihood|UNLIKELY|
|underExposedLikelihood|POSSIBLE|
|underExposedLikelihood|LIKELY|
|underExposedLikelihood|VERY_LIKELY|

<h2 id="tocS_GcsDestination">GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagcsdestination"></a>
<a id="schema_GcsDestination"></a>
<a id="tocSgcsdestination"></a>
<a id="tocsgcsdestination"></a>

```json
{
  "uri": "string"
}
```

The Google Cloud Storage location where the output will be written to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.|

<h2 id="tocS_GcsSource">GcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagcssource"></a>
<a id="schema_GcsSource"></a>
<a id="tocSgcssource"></a>
<a id="tocsgcssource"></a>

```json
{
  "uri": "string"
}
```

The Google Cloud Storage location where the input will be read from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1AnnotateFileRequest">GoogleCloudVisionV1p1beta1AnnotateFileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1annotatefilerequest"></a>
<a id="schema_GoogleCloudVisionV1p1beta1AnnotateFileRequest"></a>
<a id="tocSgooglecloudvisionv1p1beta1annotatefilerequest"></a>
<a id="tocsgooglecloudvisionv1p1beta1annotatefilerequest"></a>

```json
{
  "features": [
    {
      "maxResults": 0,
      "model": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "imageContext": {
    "cropHintsParams": {
      "aspectRatios": [
        0
      ]
    },
    "languageHints": [
      "string"
    ],
    "latLongRect": {
      "maxLatLng": {
        "latitude": 0,
        "longitude": 0
      },
      "minLatLng": {
        "latitude": 0,
        "longitude": 0
      }
    },
    "productSearchParams": {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "filter": "string",
      "productCategories": [
        "string"
      ],
      "productSet": "string"
    },
    "textDetectionParams": {
      "advancedOcrOptions": [
        "string"
      ],
      "enableTextDetectionConfidenceScore": true
    },
    "webDetectionParams": {
      "includeGeoResults": true
    }
  },
  "inputConfig": {
    "content": "string",
    "gcsSource": {
      "uri": "string"
    },
    "mimeType": "string"
  },
  "pages": [
    0
  ]
}
```

A request to annotate one single file, e.g. a PDF, TIFF or GIF file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[[GoogleCloudVisionV1p1beta1Feature](#schemagooglecloudvisionv1p1beta1feature)]|false|none|Required. Requested features.|
|imageContext|[GoogleCloudVisionV1p1beta1ImageContext](#schemagooglecloudvisionv1p1beta1imagecontext)|false|none|Additional context that may accompany the image(s) in the file.|
|inputConfig|[GoogleCloudVisionV1p1beta1InputConfig](#schemagooglecloudvisionv1p1beta1inputconfig)|false|none|Required. Information about the input file.|
|pages|[integer(int32)]|false|none|Pages of the file to perform image annotation. Pages starts from 1, we assume the first page of the file is page 1. At most 5 pages are supported per request. Pages can be negative. Page 1 means the first page. Page 2 means the second page. Page -1 means the last page. Page -2 means the second to the last page. If the file is GIF instead of PDF or TIFF, page refers to GIF frames. If this field is empty, by default the service performs image annotation for the first 5 pages of the file.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1AnnotateFileResponse">GoogleCloudVisionV1p1beta1AnnotateFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1annotatefileresponse"></a>
<a id="schema_GoogleCloudVisionV1p1beta1AnnotateFileResponse"></a>
<a id="tocSgooglecloudvisionv1p1beta1annotatefileresponse"></a>
<a id="tocsgooglecloudvisionv1p1beta1annotatefileresponse"></a>

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
  "inputConfig": {
    "content": "string",
    "gcsSource": {
      "uri": "string"
    },
    "mimeType": "string"
  },
  "responses": [
    {
      "context": {
        "pageNumber": 0,
        "uri": "string"
      },
      "cropHintsAnnotation": {
        "cropHints": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "importanceFraction": 0
          }
        ]
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
      "faceAnnotations": [
        {
          "angerLikelihood": "UNKNOWN",
          "blurredLikelihood": "UNKNOWN",
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "detectionConfidence": 0,
          "fdBoundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "headwearLikelihood": "UNKNOWN",
          "joyLikelihood": "UNKNOWN",
          "landmarkingConfidence": 0,
          "landmarks": [
            {
              "position": {
                "x": 0,
                "y": 0,
                "z": 0
              },
              "type": "UNKNOWN_LANDMARK"
            }
          ],
          "panAngle": 0,
          "rollAngle": 0,
          "sorrowLikelihood": "UNKNOWN",
          "surpriseLikelihood": "UNKNOWN",
          "tiltAngle": 0,
          "underExposedLikelihood": "UNKNOWN"
        }
      ],
      "fullTextAnnotation": {
        "pages": [
          {
            "blocks": [
              {
                "blockType": "UNKNOWN",
                "boundingBox": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "paragraphs": [
                  {
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    },
                    "words": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "symbols": [
                          {
                            "boundingBox": {
                              "normalizedVertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ],
                              "vertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ]
                            },
                            "confidence": 0,
                            "property": {
                              "detectedBreak": {
                                "isPrefix": true,
                                "type": "UNKNOWN"
                              },
                              "detectedLanguages": [
                                {
                                  "confidence": 0,
                                  "languageCode": "string"
                                }
                              ]
                            },
                            "text": "string"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                }
              }
            ],
            "confidence": 0,
            "height": 0,
            "property": {
              "detectedBreak": {
                "isPrefix": true,
                "type": "UNKNOWN"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ]
            },
            "width": 0
          }
        ],
        "text": "string"
      },
      "imagePropertiesAnnotation": {
        "dominantColors": {
          "colors": [
            {
              "color": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "pixelFraction": 0,
              "score": 0
            }
          ]
        }
      },
      "labelAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "landmarkAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "localizedObjectAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "languageCode": "string",
          "mid": "string",
          "name": "string",
          "score": 0
        }
      ],
      "logoAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "productSearchResults": {
        "indexTime": "string",
        "productGroupedResults": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "objectAnnotations": [
              {
                "languageCode": "string",
                "mid": "string",
                "name": "string",
                "score": 0
              }
            ],
            "results": [
              {
                "image": "string",
                "product": {
                  "description": "string",
                  "displayName": "string",
                  "name": "string",
                  "productCategory": "string",
                  "productLabels": [
                    {
                      "key": "string",
                      "value": "string"
                    }
                  ]
                },
                "score": 0
              }
            ]
          }
        ],
        "results": [
          {
            "image": "string",
            "product": {
              "description": "string",
              "displayName": "string",
              "name": "string",
              "productCategory": "string",
              "productLabels": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "score": 0
          }
        ]
      },
      "safeSearchAnnotation": {
        "adult": "UNKNOWN",
        "medical": "UNKNOWN",
        "racy": "UNKNOWN",
        "spoof": "UNKNOWN",
        "violence": "UNKNOWN"
      },
      "textAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "webDetection": {
        "bestGuessLabels": [
          {
            "label": "string",
            "languageCode": "string"
          }
        ],
        "fullMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "pagesWithMatchingImages": [
          {
            "fullMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "pageTitle": "string",
            "partialMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "score": 0,
            "url": "string"
          }
        ],
        "partialMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "visuallySimilarImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "webEntities": [
          {
            "description": "string",
            "entityId": "string",
            "score": 0
          }
        ]
      }
    }
  ],
  "totalPages": 0
}
```

Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Status](#schemastatus)|false|none|If set, represents the error message for the failed request. The `responses` field will not be set in this case.|
|inputConfig|[GoogleCloudVisionV1p1beta1InputConfig](#schemagooglecloudvisionv1p1beta1inputconfig)|false|none|Information about the file for which this response is generated.|
|responses|[[GoogleCloudVisionV1p1beta1AnnotateImageResponse](#schemagooglecloudvisionv1p1beta1annotateimageresponse)]|false|none|Individual responses to images found within the file. This field will be empty if the `error` field is set.|
|totalPages|integer(int32)|false|none|This field gives the total number of pages in the file.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1AnnotateImageRequest">GoogleCloudVisionV1p1beta1AnnotateImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1annotateimagerequest"></a>
<a id="schema_GoogleCloudVisionV1p1beta1AnnotateImageRequest"></a>
<a id="tocSgooglecloudvisionv1p1beta1annotateimagerequest"></a>
<a id="tocsgooglecloudvisionv1p1beta1annotateimagerequest"></a>

```json
{
  "features": [
    {
      "maxResults": 0,
      "model": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "image": {
    "content": "string",
    "source": {
      "gcsImageUri": "string",
      "imageUri": "string"
    }
  },
  "imageContext": {
    "cropHintsParams": {
      "aspectRatios": [
        0
      ]
    },
    "languageHints": [
      "string"
    ],
    "latLongRect": {
      "maxLatLng": {
        "latitude": 0,
        "longitude": 0
      },
      "minLatLng": {
        "latitude": 0,
        "longitude": 0
      }
    },
    "productSearchParams": {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "filter": "string",
      "productCategories": [
        "string"
      ],
      "productSet": "string"
    },
    "textDetectionParams": {
      "advancedOcrOptions": [
        "string"
      ],
      "enableTextDetectionConfidenceScore": true
    },
    "webDetectionParams": {
      "includeGeoResults": true
    }
  }
}
```

Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[[GoogleCloudVisionV1p1beta1Feature](#schemagooglecloudvisionv1p1beta1feature)]|false|none|Requested features.|
|image|[GoogleCloudVisionV1p1beta1Image](#schemagooglecloudvisionv1p1beta1image)|false|none|The image to be processed.|
|imageContext|[GoogleCloudVisionV1p1beta1ImageContext](#schemagooglecloudvisionv1p1beta1imagecontext)|false|none|Additional context that may accompany the image.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1AnnotateImageResponse">GoogleCloudVisionV1p1beta1AnnotateImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1annotateimageresponse"></a>
<a id="schema_GoogleCloudVisionV1p1beta1AnnotateImageResponse"></a>
<a id="tocSgooglecloudvisionv1p1beta1annotateimageresponse"></a>
<a id="tocsgooglecloudvisionv1p1beta1annotateimageresponse"></a>

```json
{
  "context": {
    "pageNumber": 0,
    "uri": "string"
  },
  "cropHintsAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "importanceFraction": 0
      }
    ]
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
  "faceAnnotations": [
    {
      "angerLikelihood": "UNKNOWN",
      "blurredLikelihood": "UNKNOWN",
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "detectionConfidence": 0,
      "fdBoundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "headwearLikelihood": "UNKNOWN",
      "joyLikelihood": "UNKNOWN",
      "landmarkingConfidence": 0,
      "landmarks": [
        {
          "position": {
            "x": 0,
            "y": 0,
            "z": 0
          },
          "type": "UNKNOWN_LANDMARK"
        }
      ],
      "panAngle": 0,
      "rollAngle": 0,
      "sorrowLikelihood": "UNKNOWN",
      "surpriseLikelihood": "UNKNOWN",
      "tiltAngle": 0,
      "underExposedLikelihood": "UNKNOWN"
    }
  ],
  "fullTextAnnotation": {
    "pages": [
      {
        "blocks": [
          {
            "blockType": "UNKNOWN",
            "boundingBox": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "paragraphs": [
              {
                "boundingBox": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                },
                "words": [
                  {
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "text": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "property": {
              "detectedBreak": {
                "isPrefix": true,
                "type": "UNKNOWN"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ]
            }
          }
        ],
        "confidence": 0,
        "height": 0,
        "property": {
          "detectedBreak": {
            "isPrefix": true,
            "type": "UNKNOWN"
          },
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ]
        },
        "width": 0
      }
    ],
    "text": "string"
  },
  "imagePropertiesAnnotation": {
    "dominantColors": {
      "colors": [
        {
          "color": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "pixelFraction": 0,
          "score": 0
        }
      ]
    }
  },
  "labelAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "landmarkAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "localizedObjectAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "languageCode": "string",
      "mid": "string",
      "name": "string",
      "score": 0
    }
  ],
  "logoAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "productSearchResults": {
    "indexTime": "string",
    "productGroupedResults": [
      {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "objectAnnotations": [
          {
            "languageCode": "string",
            "mid": "string",
            "name": "string",
            "score": 0
          }
        ],
        "results": [
          {
            "image": "string",
            "product": {
              "description": "string",
              "displayName": "string",
              "name": "string",
              "productCategory": "string",
              "productLabels": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "score": 0
          }
        ]
      }
    ],
    "results": [
      {
        "image": "string",
        "product": {
          "description": "string",
          "displayName": "string",
          "name": "string",
          "productCategory": "string",
          "productLabels": [
            {
              "key": "string",
              "value": "string"
            }
          ]
        },
        "score": 0
      }
    ]
  },
  "safeSearchAnnotation": {
    "adult": "UNKNOWN",
    "medical": "UNKNOWN",
    "racy": "UNKNOWN",
    "spoof": "UNKNOWN",
    "violence": "UNKNOWN"
  },
  "textAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "webDetection": {
    "bestGuessLabels": [
      {
        "label": "string",
        "languageCode": "string"
      }
    ],
    "fullMatchingImages": [
      {
        "score": 0,
        "url": "string"
      }
    ],
    "pagesWithMatchingImages": [
      {
        "fullMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "pageTitle": "string",
        "partialMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "score": 0,
        "url": "string"
      }
    ],
    "partialMatchingImages": [
      {
        "score": 0,
        "url": "string"
      }
    ],
    "visuallySimilarImages": [
      {
        "score": 0,
        "url": "string"
      }
    ],
    "webEntities": [
      {
        "description": "string",
        "entityId": "string",
        "score": 0
      }
    ]
  }
}
```

Response to an image annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[GoogleCloudVisionV1p1beta1ImageAnnotationContext](#schemagooglecloudvisionv1p1beta1imageannotationcontext)|false|none|If present, contextual information is needed to understand where this image comes from.|
|cropHintsAnnotation|[GoogleCloudVisionV1p1beta1CropHintsAnnotation](#schemagooglecloudvisionv1p1beta1crophintsannotation)|false|none|If present, crop hints have completed successfully.|
|error|[Status](#schemastatus)|false|none|If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.|
|faceAnnotations|[[GoogleCloudVisionV1p1beta1FaceAnnotation](#schemagooglecloudvisionv1p1beta1faceannotation)]|false|none|If present, face detection has completed successfully.|
|fullTextAnnotation|[GoogleCloudVisionV1p1beta1TextAnnotation](#schemagooglecloudvisionv1p1beta1textannotation)|false|none|If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.|
|imagePropertiesAnnotation|[GoogleCloudVisionV1p1beta1ImageProperties](#schemagooglecloudvisionv1p1beta1imageproperties)|false|none|If present, image properties were extracted successfully.|
|labelAnnotations|[[GoogleCloudVisionV1p1beta1EntityAnnotation](#schemagooglecloudvisionv1p1beta1entityannotation)]|false|none|If present, label detection has completed successfully.|
|landmarkAnnotations|[[GoogleCloudVisionV1p1beta1EntityAnnotation](#schemagooglecloudvisionv1p1beta1entityannotation)]|false|none|If present, landmark detection has completed successfully.|
|localizedObjectAnnotations|[[GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation](#schemagooglecloudvisionv1p1beta1localizedobjectannotation)]|false|none|If present, localized object detection has completed successfully. This will be sorted descending by confidence score.|
|logoAnnotations|[[GoogleCloudVisionV1p1beta1EntityAnnotation](#schemagooglecloudvisionv1p1beta1entityannotation)]|false|none|If present, logo detection has completed successfully.|
|productSearchResults|[GoogleCloudVisionV1p1beta1ProductSearchResults](#schemagooglecloudvisionv1p1beta1productsearchresults)|false|none|If present, product search has completed successfully.|
|safeSearchAnnotation|[GoogleCloudVisionV1p1beta1SafeSearchAnnotation](#schemagooglecloudvisionv1p1beta1safesearchannotation)|false|none|If present, safe-search annotation has completed successfully.|
|textAnnotations|[[GoogleCloudVisionV1p1beta1EntityAnnotation](#schemagooglecloudvisionv1p1beta1entityannotation)]|false|none|If present, text (OCR) detection has completed successfully.|
|webDetection|[GoogleCloudVisionV1p1beta1WebDetection](#schemagooglecloudvisionv1p1beta1webdetection)|false|none|If present, web detection has completed successfully.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest">GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1asyncannotatefilerequest"></a>
<a id="schema_GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest"></a>
<a id="tocSgooglecloudvisionv1p1beta1asyncannotatefilerequest"></a>
<a id="tocsgooglecloudvisionv1p1beta1asyncannotatefilerequest"></a>

```json
{
  "features": [
    {
      "maxResults": 0,
      "model": "string",
      "type": "TYPE_UNSPECIFIED"
    }
  ],
  "imageContext": {
    "cropHintsParams": {
      "aspectRatios": [
        0
      ]
    },
    "languageHints": [
      "string"
    ],
    "latLongRect": {
      "maxLatLng": {
        "latitude": 0,
        "longitude": 0
      },
      "minLatLng": {
        "latitude": 0,
        "longitude": 0
      }
    },
    "productSearchParams": {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "filter": "string",
      "productCategories": [
        "string"
      ],
      "productSet": "string"
    },
    "textDetectionParams": {
      "advancedOcrOptions": [
        "string"
      ],
      "enableTextDetectionConfidenceScore": true
    },
    "webDetectionParams": {
      "includeGeoResults": true
    }
  },
  "inputConfig": {
    "content": "string",
    "gcsSource": {
      "uri": "string"
    },
    "mimeType": "string"
  },
  "outputConfig": {
    "batchSize": 0,
    "gcsDestination": {
      "uri": "string"
    }
  }
}
```

An offline file annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|features|[[GoogleCloudVisionV1p1beta1Feature](#schemagooglecloudvisionv1p1beta1feature)]|false|none|Required. Requested features.|
|imageContext|[GoogleCloudVisionV1p1beta1ImageContext](#schemagooglecloudvisionv1p1beta1imagecontext)|false|none|Additional context that may accompany the image(s) in the file.|
|inputConfig|[GoogleCloudVisionV1p1beta1InputConfig](#schemagooglecloudvisionv1p1beta1inputconfig)|false|none|Required. Information about the input file.|
|outputConfig|[GoogleCloudVisionV1p1beta1OutputConfig](#schemagooglecloudvisionv1p1beta1outputconfig)|false|none|Required. The desired output location and metadata (e.g. format).|

<h2 id="tocS_GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse">GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1asyncannotatefileresponse"></a>
<a id="schema_GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse"></a>
<a id="tocSgooglecloudvisionv1p1beta1asyncannotatefileresponse"></a>
<a id="tocsgooglecloudvisionv1p1beta1asyncannotatefileresponse"></a>

```json
{
  "outputConfig": {
    "batchSize": 0,
    "gcsDestination": {
      "uri": "string"
    }
  }
}
```

The response for a single offline file annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputConfig|[GoogleCloudVisionV1p1beta1OutputConfig](#schemagooglecloudvisionv1p1beta1outputconfig)|false|none|The output location and metadata from AsyncAnnotateFileRequest.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest">GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1asyncbatchannotatefilesrequest"></a>
<a id="schema_GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest"></a>
<a id="tocSgooglecloudvisionv1p1beta1asyncbatchannotatefilesrequest"></a>
<a id="tocsgooglecloudvisionv1p1beta1asyncbatchannotatefilesrequest"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "parent": "string",
  "requests": [
    {
      "features": [
        {
          "maxResults": 0,
          "model": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "imageContext": {
        "cropHintsParams": {
          "aspectRatios": [
            0
          ]
        },
        "languageHints": [
          "string"
        ],
        "latLongRect": {
          "maxLatLng": {
            "latitude": 0,
            "longitude": 0
          },
          "minLatLng": {
            "latitude": 0,
            "longitude": 0
          }
        },
        "productSearchParams": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "filter": "string",
          "productCategories": [
            "string"
          ],
          "productSet": "string"
        },
        "textDetectionParams": {
          "advancedOcrOptions": [
            "string"
          ],
          "enableTextDetectionConfidenceScore": true
        },
        "webDetectionParams": {
          "includeGeoResults": true
        }
      },
      "inputConfig": {
        "content": "string",
        "gcsSource": {
          "uri": "string"
        },
        "mimeType": "string"
      },
      "outputConfig": {
        "batchSize": 0,
        "gcsDestination": {
          "uri": "string"
        }
      }
    }
  ]
}
```

Multiple async file annotation requests are batched into a single service call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.|
|parent|string|false|none|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
|requests|[[GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest](#schemagooglecloudvisionv1p1beta1asyncannotatefilerequest)]|false|none|Required. Individual async file annotation requests for this batch.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponse">GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1asyncbatchannotatefilesresponse"></a>
<a id="schema_GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesResponse"></a>
<a id="tocSgooglecloudvisionv1p1beta1asyncbatchannotatefilesresponse"></a>
<a id="tocsgooglecloudvisionv1p1beta1asyncbatchannotatefilesresponse"></a>

```json
{
  "responses": [
    {
      "outputConfig": {
        "batchSize": 0,
        "gcsDestination": {
          "uri": "string"
        }
      }
    }
  ]
}
```

Response to an async batch file annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[GoogleCloudVisionV1p1beta1AsyncAnnotateFileResponse](#schemagooglecloudvisionv1p1beta1asyncannotatefileresponse)]|false|none|The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest">GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1asyncbatchannotateimagesrequest"></a>
<a id="schema_GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest"></a>
<a id="tocSgooglecloudvisionv1p1beta1asyncbatchannotateimagesrequest"></a>
<a id="tocsgooglecloudvisionv1p1beta1asyncbatchannotateimagesrequest"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "outputConfig": {
    "batchSize": 0,
    "gcsDestination": {
      "uri": "string"
    }
  },
  "parent": "string",
  "requests": [
    {
      "features": [
        {
          "maxResults": 0,
          "model": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "image": {
        "content": "string",
        "source": {
          "gcsImageUri": "string",
          "imageUri": "string"
        }
      },
      "imageContext": {
        "cropHintsParams": {
          "aspectRatios": [
            0
          ]
        },
        "languageHints": [
          "string"
        ],
        "latLongRect": {
          "maxLatLng": {
            "latitude": 0,
            "longitude": 0
          },
          "minLatLng": {
            "latitude": 0,
            "longitude": 0
          }
        },
        "productSearchParams": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "filter": "string",
          "productCategories": [
            "string"
          ],
          "productSet": "string"
        },
        "textDetectionParams": {
          "advancedOcrOptions": [
            "string"
          ],
          "enableTextDetectionConfidenceScore": true
        },
        "webDetectionParams": {
          "includeGeoResults": true
        }
      }
    }
  ]
}
```

Request for async image annotation for a list of images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.|
|outputConfig|[GoogleCloudVisionV1p1beta1OutputConfig](#schemagooglecloudvisionv1p1beta1outputconfig)|false|none|Required. The desired output location and metadata (e.g. format).|
|parent|string|false|none|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
|requests|[[GoogleCloudVisionV1p1beta1AnnotateImageRequest](#schemagooglecloudvisionv1p1beta1annotateimagerequest)]|false|none|Required. Individual image annotation requests for this batch.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest">GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1batchannotatefilesrequest"></a>
<a id="schema_GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest"></a>
<a id="tocSgooglecloudvisionv1p1beta1batchannotatefilesrequest"></a>
<a id="tocsgooglecloudvisionv1p1beta1batchannotatefilesrequest"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "parent": "string",
  "requests": [
    {
      "features": [
        {
          "maxResults": 0,
          "model": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "imageContext": {
        "cropHintsParams": {
          "aspectRatios": [
            0
          ]
        },
        "languageHints": [
          "string"
        ],
        "latLongRect": {
          "maxLatLng": {
            "latitude": 0,
            "longitude": 0
          },
          "minLatLng": {
            "latitude": 0,
            "longitude": 0
          }
        },
        "productSearchParams": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "filter": "string",
          "productCategories": [
            "string"
          ],
          "productSet": "string"
        },
        "textDetectionParams": {
          "advancedOcrOptions": [
            "string"
          ],
          "enableTextDetectionConfidenceScore": true
        },
        "webDetectionParams": {
          "includeGeoResults": true
        }
      },
      "inputConfig": {
        "content": "string",
        "gcsSource": {
          "uri": "string"
        },
        "mimeType": "string"
      },
      "pages": [
        0
      ]
    }
  ]
}
```

A list of requests to annotate files using the BatchAnnotateFiles API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.|
|parent|string|false|none|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
|requests|[[GoogleCloudVisionV1p1beta1AnnotateFileRequest](#schemagooglecloudvisionv1p1beta1annotatefilerequest)]|false|none|Required. The list of file annotation requests. Right now we support only one AnnotateFileRequest in BatchAnnotateFilesRequest.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse">GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1batchannotatefilesresponse"></a>
<a id="schema_GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse"></a>
<a id="tocSgooglecloudvisionv1p1beta1batchannotatefilesresponse"></a>
<a id="tocsgooglecloudvisionv1p1beta1batchannotatefilesresponse"></a>

```json
{
  "responses": [
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
      "inputConfig": {
        "content": "string",
        "gcsSource": {
          "uri": "string"
        },
        "mimeType": "string"
      },
      "responses": [
        {
          "context": {
            "pageNumber": 0,
            "uri": "string"
          },
          "cropHintsAnnotation": {
            "cropHints": [
              {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "importanceFraction": 0
              }
            ]
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
          "faceAnnotations": [
            {
              "angerLikelihood": "UNKNOWN",
              "blurredLikelihood": "UNKNOWN",
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "detectionConfidence": 0,
              "fdBoundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "headwearLikelihood": "UNKNOWN",
              "joyLikelihood": "UNKNOWN",
              "landmarkingConfidence": 0,
              "landmarks": [
                {
                  "position": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                  },
                  "type": "UNKNOWN_LANDMARK"
                }
              ],
              "panAngle": 0,
              "rollAngle": 0,
              "sorrowLikelihood": "UNKNOWN",
              "surpriseLikelihood": "UNKNOWN",
              "tiltAngle": 0,
              "underExposedLikelihood": "UNKNOWN"
            }
          ],
          "fullTextAnnotation": {
            "pages": [
              {
                "blocks": [
                  {
                    "blockType": "UNKNOWN",
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "paragraphs": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "words": [
                          {
                            "boundingBox": {
                              "normalizedVertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ],
                              "vertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ]
                            },
                            "confidence": 0,
                            "property": {
                              "detectedBreak": {
                                "isPrefix": true,
                                "type": "UNKNOWN"
                              },
                              "detectedLanguages": [
                                {
                                  "confidence": 0,
                                  "languageCode": "string"
                                }
                              ]
                            },
                            "symbols": [
                              {
                                "boundingBox": {
                                  "normalizedVertices": [
                                    {
                                      "x": 0,
                                      "y": 0
                                    }
                                  ],
                                  "vertices": [
                                    {
                                      "x": 0,
                                      "y": 0
                                    }
                                  ]
                                },
                                "confidence": 0,
                                "property": {
                                  "detectedBreak": {
                                    "isPrefix": true,
                                    "type": "UNKNOWN"
                                  },
                                  "detectedLanguages": [
                                    {
                                      "confidence": 0,
                                      "languageCode": "string"
                                    }
                                  ]
                                },
                                "text": "string"
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    }
                  }
                ],
                "confidence": 0,
                "height": 0,
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                },
                "width": 0
              }
            ],
            "text": "string"
          },
          "imagePropertiesAnnotation": {
            "dominantColors": {
              "colors": [
                {
                  "color": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "pixelFraction": 0,
                  "score": 0
                }
              ]
            }
          },
          "labelAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "landmarkAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "localizedObjectAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "languageCode": "string",
              "mid": "string",
              "name": "string",
              "score": 0
            }
          ],
          "logoAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "productSearchResults": {
            "indexTime": "string",
            "productGroupedResults": [
              {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "objectAnnotations": [
                  {
                    "languageCode": "string",
                    "mid": "string",
                    "name": "string",
                    "score": 0
                  }
                ],
                "results": [
                  {
                    "image": "string",
                    "product": {
                      "description": "string",
                      "displayName": "string",
                      "name": "string",
                      "productCategory": "string",
                      "productLabels": [
                        {
                          "key": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "score": 0
                  }
                ]
              }
            ],
            "results": [
              {
                "image": "string",
                "product": {
                  "description": "string",
                  "displayName": "string",
                  "name": "string",
                  "productCategory": "string",
                  "productLabels": [
                    {
                      "key": "string",
                      "value": "string"
                    }
                  ]
                },
                "score": 0
              }
            ]
          },
          "safeSearchAnnotation": {
            "adult": "UNKNOWN",
            "medical": "UNKNOWN",
            "racy": "UNKNOWN",
            "spoof": "UNKNOWN",
            "violence": "UNKNOWN"
          },
          "textAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "webDetection": {
            "bestGuessLabels": [
              {
                "label": "string",
                "languageCode": "string"
              }
            ],
            "fullMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "pagesWithMatchingImages": [
              {
                "fullMatchingImages": [
                  {
                    "score": 0,
                    "url": "string"
                  }
                ],
                "pageTitle": "string",
                "partialMatchingImages": [
                  {
                    "score": 0,
                    "url": "string"
                  }
                ],
                "score": 0,
                "url": "string"
              }
            ],
            "partialMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "visuallySimilarImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "webEntities": [
              {
                "description": "string",
                "entityId": "string",
                "score": 0
              }
            ]
          }
        }
      ],
      "totalPages": 0
    }
  ]
}
```

A list of file annotation responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[GoogleCloudVisionV1p1beta1AnnotateFileResponse](#schemagooglecloudvisionv1p1beta1annotatefileresponse)]|false|none|The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest">GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1batchannotateimagesrequest"></a>
<a id="schema_GoogleCloudVisionV1p1beta1BatchAnnotateImagesRequest"></a>
<a id="tocSgooglecloudvisionv1p1beta1batchannotateimagesrequest"></a>
<a id="tocsgooglecloudvisionv1p1beta1batchannotateimagesrequest"></a>

```json
{
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "parent": "string",
  "requests": [
    {
      "features": [
        {
          "maxResults": 0,
          "model": "string",
          "type": "TYPE_UNSPECIFIED"
        }
      ],
      "image": {
        "content": "string",
        "source": {
          "gcsImageUri": "string",
          "imageUri": "string"
        }
      },
      "imageContext": {
        "cropHintsParams": {
          "aspectRatios": [
            0
          ]
        },
        "languageHints": [
          "string"
        ],
        "latLongRect": {
          "maxLatLng": {
            "latitude": 0,
            "longitude": 0
          },
          "minLatLng": {
            "latitude": 0,
            "longitude": 0
          }
        },
        "productSearchParams": {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "filter": "string",
          "productCategories": [
            "string"
          ],
          "productSet": "string"
        },
        "textDetectionParams": {
          "advancedOcrOptions": [
            "string"
          ],
          "enableTextDetectionConfidenceScore": true
        },
        "webDetectionParams": {
          "includeGeoResults": true
        }
      }
    }
  ]
}
```

Multiple image annotation requests are batched into a single service call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labels|object|false|none|Optional. The labels with user-defined metadata for the request. Label keys and values can be no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter.|
|parent|string|false|none|Optional. Target project and location to make a call. Format: `projects/{project-id}/locations/{location-id}`. If no parent is specified, a region will be chosen automatically. Supported location-ids: `us`: USA country only, `asia`: East asia areas, like Japan, Taiwan, `eu`: The European Union. Example: `projects/project-A/locations/eu`.|
|requests|[[GoogleCloudVisionV1p1beta1AnnotateImageRequest](#schemagooglecloudvisionv1p1beta1annotateimagerequest)]|false|none|Required. Individual image annotation requests for this batch.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse">GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1batchannotateimagesresponse"></a>
<a id="schema_GoogleCloudVisionV1p1beta1BatchAnnotateImagesResponse"></a>
<a id="tocSgooglecloudvisionv1p1beta1batchannotateimagesresponse"></a>
<a id="tocsgooglecloudvisionv1p1beta1batchannotateimagesresponse"></a>

```json
{
  "responses": [
    {
      "context": {
        "pageNumber": 0,
        "uri": "string"
      },
      "cropHintsAnnotation": {
        "cropHints": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "importanceFraction": 0
          }
        ]
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
      "faceAnnotations": [
        {
          "angerLikelihood": "UNKNOWN",
          "blurredLikelihood": "UNKNOWN",
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "detectionConfidence": 0,
          "fdBoundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "headwearLikelihood": "UNKNOWN",
          "joyLikelihood": "UNKNOWN",
          "landmarkingConfidence": 0,
          "landmarks": [
            {
              "position": {
                "x": 0,
                "y": 0,
                "z": 0
              },
              "type": "UNKNOWN_LANDMARK"
            }
          ],
          "panAngle": 0,
          "rollAngle": 0,
          "sorrowLikelihood": "UNKNOWN",
          "surpriseLikelihood": "UNKNOWN",
          "tiltAngle": 0,
          "underExposedLikelihood": "UNKNOWN"
        }
      ],
      "fullTextAnnotation": {
        "pages": [
          {
            "blocks": [
              {
                "blockType": "UNKNOWN",
                "boundingBox": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "paragraphs": [
                  {
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    },
                    "words": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "symbols": [
                          {
                            "boundingBox": {
                              "normalizedVertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ],
                              "vertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ]
                            },
                            "confidence": 0,
                            "property": {
                              "detectedBreak": {
                                "isPrefix": true,
                                "type": "UNKNOWN"
                              },
                              "detectedLanguages": [
                                {
                                  "confidence": 0,
                                  "languageCode": "string"
                                }
                              ]
                            },
                            "text": "string"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                }
              }
            ],
            "confidence": 0,
            "height": 0,
            "property": {
              "detectedBreak": {
                "isPrefix": true,
                "type": "UNKNOWN"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ]
            },
            "width": 0
          }
        ],
        "text": "string"
      },
      "imagePropertiesAnnotation": {
        "dominantColors": {
          "colors": [
            {
              "color": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "pixelFraction": 0,
              "score": 0
            }
          ]
        }
      },
      "labelAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "landmarkAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "localizedObjectAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "languageCode": "string",
          "mid": "string",
          "name": "string",
          "score": 0
        }
      ],
      "logoAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "productSearchResults": {
        "indexTime": "string",
        "productGroupedResults": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "objectAnnotations": [
              {
                "languageCode": "string",
                "mid": "string",
                "name": "string",
                "score": 0
              }
            ],
            "results": [
              {
                "image": "string",
                "product": {
                  "description": "string",
                  "displayName": "string",
                  "name": "string",
                  "productCategory": "string",
                  "productLabels": [
                    {
                      "key": "string",
                      "value": "string"
                    }
                  ]
                },
                "score": 0
              }
            ]
          }
        ],
        "results": [
          {
            "image": "string",
            "product": {
              "description": "string",
              "displayName": "string",
              "name": "string",
              "productCategory": "string",
              "productLabels": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "score": 0
          }
        ]
      },
      "safeSearchAnnotation": {
        "adult": "UNKNOWN",
        "medical": "UNKNOWN",
        "racy": "UNKNOWN",
        "spoof": "UNKNOWN",
        "violence": "UNKNOWN"
      },
      "textAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "webDetection": {
        "bestGuessLabels": [
          {
            "label": "string",
            "languageCode": "string"
          }
        ],
        "fullMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "pagesWithMatchingImages": [
          {
            "fullMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "pageTitle": "string",
            "partialMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "score": 0,
            "url": "string"
          }
        ],
        "partialMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "visuallySimilarImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "webEntities": [
          {
            "description": "string",
            "entityId": "string",
            "score": 0
          }
        ]
      }
    }
  ]
}
```

Response to a batch image annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[GoogleCloudVisionV1p1beta1AnnotateImageResponse](#schemagooglecloudvisionv1p1beta1annotateimageresponse)]|false|none|Individual responses to image annotation requests within the batch.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1Block">GoogleCloudVisionV1p1beta1Block</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1block"></a>
<a id="schema_GoogleCloudVisionV1p1beta1Block"></a>
<a id="tocSgooglecloudvisionv1p1beta1block"></a>
<a id="tocsgooglecloudvisionv1p1beta1block"></a>

```json
{
  "blockType": "UNKNOWN",
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "paragraphs": [
    {
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "words": [
        {
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          },
          "symbols": [
            {
              "boundingBox": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "property": {
                "detectedBreak": {
                  "isPrefix": true,
                  "type": "UNKNOWN"
                },
                "detectedLanguages": [
                  {
                    "confidence": 0,
                    "languageCode": "string"
                  }
                ]
              },
              "text": "string"
            }
          ]
        }
      ]
    }
  ],
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  }
}
```

Logical element on the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockType|string|false|none|Detected block type (text, image etc) for this block.|
|boundingBox|[GoogleCloudVisionV1p1beta1BoundingPoly](#schemagooglecloudvisionv1p1beta1boundingpoly)|false|none|The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results on the block. Range [0, 1].|
|paragraphs|[[GoogleCloudVisionV1p1beta1Paragraph](#schemagooglecloudvisionv1p1beta1paragraph)]|false|none|List of paragraphs in this block (if this blocks is of type text).|
|property|[GoogleCloudVisionV1p1beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p1beta1textannotationtextproperty)|false|none|Additional information detected for the block.|

#### Enumerated Values

|Property|Value|
|---|---|
|blockType|UNKNOWN|
|blockType|TEXT|
|blockType|TABLE|
|blockType|PICTURE|
|blockType|RULER|
|blockType|BARCODE|

<h2 id="tocS_GoogleCloudVisionV1p1beta1BoundingPoly">GoogleCloudVisionV1p1beta1BoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1boundingpoly"></a>
<a id="schema_GoogleCloudVisionV1p1beta1BoundingPoly"></a>
<a id="tocSgooglecloudvisionv1p1beta1boundingpoly"></a>
<a id="tocsgooglecloudvisionv1p1beta1boundingpoly"></a>

```json
{
  "normalizedVertices": [
    {
      "x": 0,
      "y": 0
    }
  ],
  "vertices": [
    {
      "x": 0,
      "y": 0
    }
  ]
}
```

A bounding polygon for the detected image annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedVertices|[[GoogleCloudVisionV1p1beta1NormalizedVertex](#schemagooglecloudvisionv1p1beta1normalizedvertex)]|false|none|The bounding polygon normalized vertices.|
|vertices|[[GoogleCloudVisionV1p1beta1Vertex](#schemagooglecloudvisionv1p1beta1vertex)]|false|none|The bounding polygon vertices.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1ColorInfo">GoogleCloudVisionV1p1beta1ColorInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1colorinfo"></a>
<a id="schema_GoogleCloudVisionV1p1beta1ColorInfo"></a>
<a id="tocSgooglecloudvisionv1p1beta1colorinfo"></a>
<a id="tocsgooglecloudvisionv1p1beta1colorinfo"></a>

```json
{
  "color": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "pixelFraction": 0,
  "score": 0
}
```

Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|[Color](#schemacolor)|false|none|RGB components of the color.|
|pixelFraction|number(float)|false|none|The fraction of pixels the color occupies in the image. Value in range [0, 1].|
|score|number(float)|false|none|Image-specific score for this color. Value in range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p1beta1CropHint">GoogleCloudVisionV1p1beta1CropHint</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1crophint"></a>
<a id="schema_GoogleCloudVisionV1p1beta1CropHint"></a>
<a id="tocSgooglecloudvisionv1p1beta1crophint"></a>
<a id="tocsgooglecloudvisionv1p1beta1crophint"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "importanceFraction": 0
}
```

Single crop hint that is used to generate a new crop when serving an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p1beta1BoundingPoly](#schemagooglecloudvisionv1p1beta1boundingpoly)|false|none|The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale.|
|confidence|number(float)|false|none|Confidence of this being a salient region. Range [0, 1].|
|importanceFraction|number(float)|false|none|Fraction of importance of this salient region with respect to the original image.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1CropHintsAnnotation">GoogleCloudVisionV1p1beta1CropHintsAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1crophintsannotation"></a>
<a id="schema_GoogleCloudVisionV1p1beta1CropHintsAnnotation"></a>
<a id="tocSgooglecloudvisionv1p1beta1crophintsannotation"></a>
<a id="tocsgooglecloudvisionv1p1beta1crophintsannotation"></a>

```json
{
  "cropHints": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "importanceFraction": 0
    }
  ]
}
```

Set of crop hints that are used to generate new crops when serving images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cropHints|[[GoogleCloudVisionV1p1beta1CropHint](#schemagooglecloudvisionv1p1beta1crophint)]|false|none|Crop hint results.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1CropHintsParams">GoogleCloudVisionV1p1beta1CropHintsParams</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1crophintsparams"></a>
<a id="schema_GoogleCloudVisionV1p1beta1CropHintsParams"></a>
<a id="tocSgooglecloudvisionv1p1beta1crophintsparams"></a>
<a id="tocsgooglecloudvisionv1p1beta1crophintsparams"></a>

```json
{
  "aspectRatios": [
    0
  ]
}
```

Parameters for crop hints annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspectRatios|[number(float)]|false|none|Aspect ratios in floats, representing the ratio of the width to the height of the image. For example, if the desired aspect ratio is 4/3, the corresponding float value should be 1.33333. If not specified, the best possible crop is returned. The number of provided aspect ratios is limited to a maximum of 16; any aspect ratios provided after the 16th are ignored.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1DominantColorsAnnotation">GoogleCloudVisionV1p1beta1DominantColorsAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1dominantcolorsannotation"></a>
<a id="schema_GoogleCloudVisionV1p1beta1DominantColorsAnnotation"></a>
<a id="tocSgooglecloudvisionv1p1beta1dominantcolorsannotation"></a>
<a id="tocsgooglecloudvisionv1p1beta1dominantcolorsannotation"></a>

```json
{
  "colors": [
    {
      "color": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "pixelFraction": 0,
      "score": 0
    }
  ]
}
```

Set of dominant colors and their corresponding scores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|[[GoogleCloudVisionV1p1beta1ColorInfo](#schemagooglecloudvisionv1p1beta1colorinfo)]|false|none|RGB color values with their score and pixel fraction.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1EntityAnnotation">GoogleCloudVisionV1p1beta1EntityAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1entityannotation"></a>
<a id="schema_GoogleCloudVisionV1p1beta1EntityAnnotation"></a>
<a id="tocSgooglecloudvisionv1p1beta1entityannotation"></a>
<a id="tocsgooglecloudvisionv1p1beta1entityannotation"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "description": "string",
  "locale": "string",
  "locations": [
    {
      "latLng": {
        "latitude": 0,
        "longitude": 0
      }
    }
  ],
  "mid": "string",
  "properties": [
    {
      "name": "string",
      "uint64Value": "string",
      "value": "string"
    }
  ],
  "score": 0,
  "topicality": 0
}
```

Set of detected entity features.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p1beta1BoundingPoly](#schemagooglecloudvisionv1p1beta1boundingpoly)|false|none|Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.|
|confidence|number(float)|false|none|**Deprecated.** **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].|
|description|string|false|none|Entity textual description, expressed in its `locale` language.|
|locale|string|false|none|The language code for the locale in which the entity textual `description` is expressed.|
|locations|[[GoogleCloudVisionV1p1beta1LocationInfo](#schemagooglecloudvisionv1p1beta1locationinfo)]|false|none|The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.|
|mid|string|false|none|Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).|
|properties|[[GoogleCloudVisionV1p1beta1Property](#schemagooglecloudvisionv1p1beta1property)]|false|none|Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.|
|score|number(float)|false|none|Overall score of the result. Range [0, 1].|
|topicality|number(float)|false|none|The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p1beta1FaceAnnotation">GoogleCloudVisionV1p1beta1FaceAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1faceannotation"></a>
<a id="schema_GoogleCloudVisionV1p1beta1FaceAnnotation"></a>
<a id="tocSgooglecloudvisionv1p1beta1faceannotation"></a>
<a id="tocsgooglecloudvisionv1p1beta1faceannotation"></a>

```json
{
  "angerLikelihood": "UNKNOWN",
  "blurredLikelihood": "UNKNOWN",
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "detectionConfidence": 0,
  "fdBoundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "headwearLikelihood": "UNKNOWN",
  "joyLikelihood": "UNKNOWN",
  "landmarkingConfidence": 0,
  "landmarks": [
    {
      "position": {
        "x": 0,
        "y": 0,
        "z": 0
      },
      "type": "UNKNOWN_LANDMARK"
    }
  ],
  "panAngle": 0,
  "rollAngle": 0,
  "sorrowLikelihood": "UNKNOWN",
  "surpriseLikelihood": "UNKNOWN",
  "tiltAngle": 0,
  "underExposedLikelihood": "UNKNOWN"
}
```

A face annotation object contains the results of face detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angerLikelihood|string|false|none|Anger likelihood.|
|blurredLikelihood|string|false|none|Blurred likelihood.|
|boundingPoly|[GoogleCloudVisionV1p1beta1BoundingPoly](#schemagooglecloudvisionv1p1beta1boundingpoly)|false|none|The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.|
|detectionConfidence|number(float)|false|none|Detection confidence. Range [0, 1].|
|fdBoundingPoly|[GoogleCloudVisionV1p1beta1BoundingPoly](#schemagooglecloudvisionv1p1beta1boundingpoly)|false|none|The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix.|
|headwearLikelihood|string|false|none|Headwear likelihood.|
|joyLikelihood|string|false|none|Joy likelihood.|
|landmarkingConfidence|number(float)|false|none|Face landmarking confidence. Range [0, 1].|
|landmarks|[[GoogleCloudVisionV1p1beta1FaceAnnotationLandmark](#schemagooglecloudvisionv1p1beta1faceannotationlandmark)]|false|none|Detected face landmarks.|
|panAngle|number(float)|false|none|Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].|
|rollAngle|number(float)|false|none|Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].|
|sorrowLikelihood|string|false|none|Sorrow likelihood.|
|surpriseLikelihood|string|false|none|Surprise likelihood.|
|tiltAngle|number(float)|false|none|Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].|
|underExposedLikelihood|string|false|none|Under-exposed likelihood.|

#### Enumerated Values

|Property|Value|
|---|---|
|angerLikelihood|UNKNOWN|
|angerLikelihood|VERY_UNLIKELY|
|angerLikelihood|UNLIKELY|
|angerLikelihood|POSSIBLE|
|angerLikelihood|LIKELY|
|angerLikelihood|VERY_LIKELY|
|blurredLikelihood|UNKNOWN|
|blurredLikelihood|VERY_UNLIKELY|
|blurredLikelihood|UNLIKELY|
|blurredLikelihood|POSSIBLE|
|blurredLikelihood|LIKELY|
|blurredLikelihood|VERY_LIKELY|
|headwearLikelihood|UNKNOWN|
|headwearLikelihood|VERY_UNLIKELY|
|headwearLikelihood|UNLIKELY|
|headwearLikelihood|POSSIBLE|
|headwearLikelihood|LIKELY|
|headwearLikelihood|VERY_LIKELY|
|joyLikelihood|UNKNOWN|
|joyLikelihood|VERY_UNLIKELY|
|joyLikelihood|UNLIKELY|
|joyLikelihood|POSSIBLE|
|joyLikelihood|LIKELY|
|joyLikelihood|VERY_LIKELY|
|sorrowLikelihood|UNKNOWN|
|sorrowLikelihood|VERY_UNLIKELY|
|sorrowLikelihood|UNLIKELY|
|sorrowLikelihood|POSSIBLE|
|sorrowLikelihood|LIKELY|
|sorrowLikelihood|VERY_LIKELY|
|surpriseLikelihood|UNKNOWN|
|surpriseLikelihood|VERY_UNLIKELY|
|surpriseLikelihood|UNLIKELY|
|surpriseLikelihood|POSSIBLE|
|surpriseLikelihood|LIKELY|
|surpriseLikelihood|VERY_LIKELY|
|underExposedLikelihood|UNKNOWN|
|underExposedLikelihood|VERY_UNLIKELY|
|underExposedLikelihood|UNLIKELY|
|underExposedLikelihood|POSSIBLE|
|underExposedLikelihood|LIKELY|
|underExposedLikelihood|VERY_LIKELY|

<h2 id="tocS_GoogleCloudVisionV1p1beta1FaceAnnotationLandmark">GoogleCloudVisionV1p1beta1FaceAnnotationLandmark</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1faceannotationlandmark"></a>
<a id="schema_GoogleCloudVisionV1p1beta1FaceAnnotationLandmark"></a>
<a id="tocSgooglecloudvisionv1p1beta1faceannotationlandmark"></a>
<a id="tocsgooglecloudvisionv1p1beta1faceannotationlandmark"></a>

```json
{
  "position": {
    "x": 0,
    "y": 0,
    "z": 0
  },
  "type": "UNKNOWN_LANDMARK"
}
```

A face-specific landmark (for example, a face feature).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[GoogleCloudVisionV1p1beta1Position](#schemagooglecloudvisionv1p1beta1position)|false|none|Face landmark position.|
|type|string|false|none|Face landmark type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNKNOWN_LANDMARK|
|type|LEFT_EYE|
|type|RIGHT_EYE|
|type|LEFT_OF_LEFT_EYEBROW|
|type|RIGHT_OF_LEFT_EYEBROW|
|type|LEFT_OF_RIGHT_EYEBROW|
|type|RIGHT_OF_RIGHT_EYEBROW|
|type|MIDPOINT_BETWEEN_EYES|
|type|NOSE_TIP|
|type|UPPER_LIP|
|type|LOWER_LIP|
|type|MOUTH_LEFT|
|type|MOUTH_RIGHT|
|type|MOUTH_CENTER|
|type|NOSE_BOTTOM_RIGHT|
|type|NOSE_BOTTOM_LEFT|
|type|NOSE_BOTTOM_CENTER|
|type|LEFT_EYE_TOP_BOUNDARY|
|type|LEFT_EYE_RIGHT_CORNER|
|type|LEFT_EYE_BOTTOM_BOUNDARY|
|type|LEFT_EYE_LEFT_CORNER|
|type|RIGHT_EYE_TOP_BOUNDARY|
|type|RIGHT_EYE_RIGHT_CORNER|
|type|RIGHT_EYE_BOTTOM_BOUNDARY|
|type|RIGHT_EYE_LEFT_CORNER|
|type|LEFT_EYEBROW_UPPER_MIDPOINT|
|type|RIGHT_EYEBROW_UPPER_MIDPOINT|
|type|LEFT_EAR_TRAGION|
|type|RIGHT_EAR_TRAGION|
|type|LEFT_EYE_PUPIL|
|type|RIGHT_EYE_PUPIL|
|type|FOREHEAD_GLABELLA|
|type|CHIN_GNATHION|
|type|CHIN_LEFT_GONION|
|type|CHIN_RIGHT_GONION|
|type|LEFT_CHEEK_CENTER|
|type|RIGHT_CHEEK_CENTER|

<h2 id="tocS_GoogleCloudVisionV1p1beta1Feature">GoogleCloudVisionV1p1beta1Feature</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1feature"></a>
<a id="schema_GoogleCloudVisionV1p1beta1Feature"></a>
<a id="tocSgooglecloudvisionv1p1beta1feature"></a>
<a id="tocsgooglecloudvisionv1p1beta1feature"></a>

```json
{
  "maxResults": 0,
  "model": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxResults|integer(int32)|false|none|Maximum number of results of this type. Does not apply to `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`.|
|model|string|false|none|Model to use for the feature. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". `DOCUMENT_TEXT_DETECTION` and `TEXT_DETECTION` also support "builtin/weekly" for the bleeding edge release updated weekly.|
|type|string|false|none|The feature type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|FACE_DETECTION|
|type|LANDMARK_DETECTION|
|type|LOGO_DETECTION|
|type|LABEL_DETECTION|
|type|TEXT_DETECTION|
|type|DOCUMENT_TEXT_DETECTION|
|type|SAFE_SEARCH_DETECTION|
|type|IMAGE_PROPERTIES|
|type|CROP_HINTS|
|type|WEB_DETECTION|
|type|PRODUCT_SEARCH|
|type|OBJECT_LOCALIZATION|

<h2 id="tocS_GoogleCloudVisionV1p1beta1GcsDestination">GoogleCloudVisionV1p1beta1GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1gcsdestination"></a>
<a id="schema_GoogleCloudVisionV1p1beta1GcsDestination"></a>
<a id="tocSgooglecloudvisionv1p1beta1gcsdestination"></a>
<a id="tocsgooglecloudvisionv1p1beta1gcsdestination"></a>

```json
{
  "uri": "string"
}
```

The Google Cloud Storage location where the output will be written to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1GcsSource">GoogleCloudVisionV1p1beta1GcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1gcssource"></a>
<a id="schema_GoogleCloudVisionV1p1beta1GcsSource"></a>
<a id="tocSgooglecloudvisionv1p1beta1gcssource"></a>
<a id="tocsgooglecloudvisionv1p1beta1gcssource"></a>

```json
{
  "uri": "string"
}
```

The Google Cloud Storage location where the input will be read from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1Image">GoogleCloudVisionV1p1beta1Image</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1image"></a>
<a id="schema_GoogleCloudVisionV1p1beta1Image"></a>
<a id="tocSgooglecloudvisionv1p1beta1image"></a>
<a id="tocsgooglecloudvisionv1p1beta1image"></a>

```json
{
  "content": "string",
  "source": {
    "gcsImageUri": "string",
    "imageUri": "string"
  }
}
```

Client image to perform Google Cloud Vision API tasks over.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|Image content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateImages requests. It does not work for AsyncBatchAnnotateImages requests.|
|source|[GoogleCloudVisionV1p1beta1ImageSource](#schemagooglecloudvisionv1p1beta1imagesource)|false|none|Google Cloud Storage image location, or publicly-accessible image URL. If both `content` and `source` are provided for an image, `content` takes precedence and is used to perform the image annotation request.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1ImageAnnotationContext">GoogleCloudVisionV1p1beta1ImageAnnotationContext</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1imageannotationcontext"></a>
<a id="schema_GoogleCloudVisionV1p1beta1ImageAnnotationContext"></a>
<a id="tocSgooglecloudvisionv1p1beta1imageannotationcontext"></a>
<a id="tocsgooglecloudvisionv1p1beta1imageannotationcontext"></a>

```json
{
  "pageNumber": 0,
  "uri": "string"
}
```

If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageNumber|integer(int32)|false|none|If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.|
|uri|string|false|none|The URI of the file used to produce the image.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1ImageContext">GoogleCloudVisionV1p1beta1ImageContext</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1imagecontext"></a>
<a id="schema_GoogleCloudVisionV1p1beta1ImageContext"></a>
<a id="tocSgooglecloudvisionv1p1beta1imagecontext"></a>
<a id="tocsgooglecloudvisionv1p1beta1imagecontext"></a>

```json
{
  "cropHintsParams": {
    "aspectRatios": [
      0
    ]
  },
  "languageHints": [
    "string"
  ],
  "latLongRect": {
    "maxLatLng": {
      "latitude": 0,
      "longitude": 0
    },
    "minLatLng": {
      "latitude": 0,
      "longitude": 0
    }
  },
  "productSearchParams": {
    "boundingPoly": {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    },
    "filter": "string",
    "productCategories": [
      "string"
    ],
    "productSet": "string"
  },
  "textDetectionParams": {
    "advancedOcrOptions": [
      "string"
    ],
    "enableTextDetectionConfidenceScore": true
  },
  "webDetectionParams": {
    "includeGeoResults": true
  }
}
```

Image context and/or feature-specific parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cropHintsParams|[GoogleCloudVisionV1p1beta1CropHintsParams](#schemagooglecloudvisionv1p1beta1crophintsparams)|false|none|Parameters for crop hints annotation request.|
|languageHints|[string]|false|none|List of languages to use for TEXT_DETECTION. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting `language_hints` is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Text detection returns an error if one or more of the specified languages is not one of the [supported languages](https://cloud.google.com/vision/docs/languages).|
|latLongRect|[GoogleCloudVisionV1p1beta1LatLongRect](#schemagooglecloudvisionv1p1beta1latlongrect)|false|none|Not used.|
|productSearchParams|[GoogleCloudVisionV1p1beta1ProductSearchParams](#schemagooglecloudvisionv1p1beta1productsearchparams)|false|none|Parameters for product search.|
|textDetectionParams|[GoogleCloudVisionV1p1beta1TextDetectionParams](#schemagooglecloudvisionv1p1beta1textdetectionparams)|false|none|Parameters for text detection and document text detection.|
|webDetectionParams|[GoogleCloudVisionV1p1beta1WebDetectionParams](#schemagooglecloudvisionv1p1beta1webdetectionparams)|false|none|Parameters for web detection.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1ImageProperties">GoogleCloudVisionV1p1beta1ImageProperties</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1imageproperties"></a>
<a id="schema_GoogleCloudVisionV1p1beta1ImageProperties"></a>
<a id="tocSgooglecloudvisionv1p1beta1imageproperties"></a>
<a id="tocsgooglecloudvisionv1p1beta1imageproperties"></a>

```json
{
  "dominantColors": {
    "colors": [
      {
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "pixelFraction": 0,
        "score": 0
      }
    ]
  }
}
```

Stores image properties, such as dominant colors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dominantColors|[GoogleCloudVisionV1p1beta1DominantColorsAnnotation](#schemagooglecloudvisionv1p1beta1dominantcolorsannotation)|false|none|If present, dominant colors completed successfully.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1ImageSource">GoogleCloudVisionV1p1beta1ImageSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1imagesource"></a>
<a id="schema_GoogleCloudVisionV1p1beta1ImageSource"></a>
<a id="tocSgooglecloudvisionv1p1beta1imagesource"></a>
<a id="tocsgooglecloudvisionv1p1beta1imagesource"></a>

```json
{
  "gcsImageUri": "string",
  "imageUri": "string"
}
```

External image source (Google Cloud Storage or web URL image location).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsImageUri|string|false|none|**Use `image_uri` instead.** The Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info.|
|imageUri|string|false|none|The URI of the source image. Can be either: 1. A Google Cloud Storage URI of the form `gs://bucket_name/object_name`. Object versioning is not supported. See [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris) for more info. 2. A publicly-accessible image HTTP/HTTPS URL. When fetching images from HTTP/HTTPS URLs, Google cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DOS prevention), or if Google throttles requests to the site for abuse prevention. You should not depend on externally-hosted images for production applications. When both `gcs_image_uri` and `image_uri` are specified, `image_uri` takes precedence.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1InputConfig">GoogleCloudVisionV1p1beta1InputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1inputconfig"></a>
<a id="schema_GoogleCloudVisionV1p1beta1InputConfig"></a>
<a id="tocSgooglecloudvisionv1p1beta1inputconfig"></a>
<a id="tocsgooglecloudvisionv1p1beta1inputconfig"></a>

```json
{
  "content": "string",
  "gcsSource": {
    "uri": "string"
  },
  "mimeType": "string"
}
```

The desired input location and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.|
|gcsSource|[GoogleCloudVisionV1p1beta1GcsSource](#schemagooglecloudvisionv1p1beta1gcssource)|false|none|The Google Cloud Storage location to read the input from.|
|mimeType|string|false|none|The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1LatLongRect">GoogleCloudVisionV1p1beta1LatLongRect</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1latlongrect"></a>
<a id="schema_GoogleCloudVisionV1p1beta1LatLongRect"></a>
<a id="tocSgooglecloudvisionv1p1beta1latlongrect"></a>
<a id="tocsgooglecloudvisionv1p1beta1latlongrect"></a>

```json
{
  "maxLatLng": {
    "latitude": 0,
    "longitude": 0
  },
  "minLatLng": {
    "latitude": 0,
    "longitude": 0
  }
}
```

Rectangle determined by min and max `LatLng` pairs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxLatLng|[LatLng](#schemalatlng)|false|none|Max lat/long pair.|
|minLatLng|[LatLng](#schemalatlng)|false|none|Min lat/long pair.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation">GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1localizedobjectannotation"></a>
<a id="schema_GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation"></a>
<a id="tocSgooglecloudvisionv1p1beta1localizedobjectannotation"></a>
<a id="tocsgooglecloudvisionv1p1beta1localizedobjectannotation"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "languageCode": "string",
  "mid": "string",
  "name": "string",
  "score": 0
}
```

Set of detected objects with bounding boxes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p1beta1BoundingPoly](#schemagooglecloudvisionv1p1beta1boundingpoly)|false|none|Image region to which this object belongs. This must be populated.|
|languageCode|string|false|none|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|mid|string|false|none|Object ID that should align with EntityAnnotation mid.|
|name|string|false|none|Object name, expressed in its `language_code` language.|
|score|number(float)|false|none|Score of the result. Range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p1beta1LocationInfo">GoogleCloudVisionV1p1beta1LocationInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1locationinfo"></a>
<a id="schema_GoogleCloudVisionV1p1beta1LocationInfo"></a>
<a id="tocSgooglecloudvisionv1p1beta1locationinfo"></a>
<a id="tocsgooglecloudvisionv1p1beta1locationinfo"></a>

```json
{
  "latLng": {
    "latitude": 0,
    "longitude": 0
  }
}
```

Detected entity location information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latLng|[LatLng](#schemalatlng)|false|none|lat/long location coordinates.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1NormalizedVertex">GoogleCloudVisionV1p1beta1NormalizedVertex</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1normalizedvertex"></a>
<a id="schema_GoogleCloudVisionV1p1beta1NormalizedVertex"></a>
<a id="tocSgooglecloudvisionv1p1beta1normalizedvertex"></a>
<a id="tocsgooglecloudvisionv1p1beta1normalizedvertex"></a>

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

<h2 id="tocS_GoogleCloudVisionV1p1beta1OperationMetadata">GoogleCloudVisionV1p1beta1OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1operationmetadata"></a>
<a id="schema_GoogleCloudVisionV1p1beta1OperationMetadata"></a>
<a id="tocSgooglecloudvisionv1p1beta1operationmetadata"></a>
<a id="tocsgooglecloudvisionv1p1beta1operationmetadata"></a>

```json
{
  "createTime": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Contains metadata for the BatchAnnotateImages operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time when the batch request was received.|
|state|string|false|none|Current state of the batch operation.|
|updateTime|string(google-datetime)|false|none|The time when the operation result was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATED|
|state|RUNNING|
|state|DONE|
|state|CANCELLED|

<h2 id="tocS_GoogleCloudVisionV1p1beta1OutputConfig">GoogleCloudVisionV1p1beta1OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1outputconfig"></a>
<a id="schema_GoogleCloudVisionV1p1beta1OutputConfig"></a>
<a id="tocSgooglecloudvisionv1p1beta1outputconfig"></a>
<a id="tocsgooglecloudvisionv1p1beta1outputconfig"></a>

```json
{
  "batchSize": 0,
  "gcsDestination": {
    "uri": "string"
  }
}
```

The desired output location and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchSize|integer(int32)|false|none|The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.|
|gcsDestination|[GoogleCloudVisionV1p1beta1GcsDestination](#schemagooglecloudvisionv1p1beta1gcsdestination)|false|none|The Google Cloud Storage location to write the output(s) to.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1Page">GoogleCloudVisionV1p1beta1Page</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1page"></a>
<a id="schema_GoogleCloudVisionV1p1beta1Page"></a>
<a id="tocSgooglecloudvisionv1p1beta1page"></a>
<a id="tocsgooglecloudvisionv1p1beta1page"></a>

```json
{
  "blocks": [
    {
      "blockType": "UNKNOWN",
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "paragraphs": [
        {
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          },
          "words": [
            {
              "boundingBox": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "property": {
                "detectedBreak": {
                  "isPrefix": true,
                  "type": "UNKNOWN"
                },
                "detectedLanguages": [
                  {
                    "confidence": 0,
                    "languageCode": "string"
                  }
                ]
              },
              "symbols": [
                {
                  "boundingBox": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ],
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "confidence": 0,
                  "property": {
                    "detectedBreak": {
                      "isPrefix": true,
                      "type": "UNKNOWN"
                    },
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ]
                  },
                  "text": "string"
                }
              ]
            }
          ]
        }
      ],
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      }
    }
  ],
  "confidence": 0,
  "height": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "width": 0
}
```

Detected page from OCR.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocks|[[GoogleCloudVisionV1p1beta1Block](#schemagooglecloudvisionv1p1beta1block)]|false|none|List of blocks of text, images etc on this page.|
|confidence|number(float)|false|none|Confidence of the OCR results on the page. Range [0, 1].|
|height|integer(int32)|false|none|Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.|
|property|[GoogleCloudVisionV1p1beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p1beta1textannotationtextproperty)|false|none|Additional information detected on the page.|
|width|integer(int32)|false|none|Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1Paragraph">GoogleCloudVisionV1p1beta1Paragraph</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1paragraph"></a>
<a id="schema_GoogleCloudVisionV1p1beta1Paragraph"></a>
<a id="tocSgooglecloudvisionv1p1beta1paragraph"></a>
<a id="tocsgooglecloudvisionv1p1beta1paragraph"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "words": [
    {
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "symbols": [
        {
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          },
          "text": "string"
        }
      ]
    }
  ]
}
```

Structural unit of text representing a number of words in certain order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[GoogleCloudVisionV1p1beta1BoundingPoly](#schemagooglecloudvisionv1p1beta1boundingpoly)|false|none|The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results for the paragraph. Range [0, 1].|
|property|[GoogleCloudVisionV1p1beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p1beta1textannotationtextproperty)|false|none|Additional information detected for the paragraph.|
|words|[[GoogleCloudVisionV1p1beta1Word](#schemagooglecloudvisionv1p1beta1word)]|false|none|List of all words in this paragraph.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1Position">GoogleCloudVisionV1p1beta1Position</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1position"></a>
<a id="schema_GoogleCloudVisionV1p1beta1Position"></a>
<a id="tocSgooglecloudvisionv1p1beta1position"></a>
<a id="tocsgooglecloudvisionv1p1beta1position"></a>

```json
{
  "x": 0,
  "y": 0,
  "z": 0
}
```

A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number(float)|false|none|X coordinate.|
|y|number(float)|false|none|Y coordinate.|
|z|number(float)|false|none|Z coordinate (or depth).|

<h2 id="tocS_GoogleCloudVisionV1p1beta1Product">GoogleCloudVisionV1p1beta1Product</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1product"></a>
<a id="schema_GoogleCloudVisionV1p1beta1Product"></a>
<a id="tocSgooglecloudvisionv1p1beta1product"></a>
<a id="tocsgooglecloudvisionv1p1beta1product"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "name": "string",
  "productCategory": "string",
  "productLabels": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

A Product contains ReferenceImages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|User-provided metadata to be stored with this product. Must be at most 4096 characters long.|
|displayName|string|false|none|The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.|
|name|string|false|none|The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.|
|productCategory|string|false|none|Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.|
|productLabels|[[GoogleCloudVisionV1p1beta1ProductKeyValue](#schemagooglecloudvisionv1p1beta1productkeyvalue)]|false|none|Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1ProductKeyValue">GoogleCloudVisionV1p1beta1ProductKeyValue</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1productkeyvalue"></a>
<a id="schema_GoogleCloudVisionV1p1beta1ProductKeyValue"></a>
<a id="tocSgooglecloudvisionv1p1beta1productkeyvalue"></a>
<a id="tocsgooglecloudvisionv1p1beta1productkeyvalue"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

A product label represented as a key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.|
|value|string|false|none|The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1ProductSearchParams">GoogleCloudVisionV1p1beta1ProductSearchParams</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1productsearchparams"></a>
<a id="schema_GoogleCloudVisionV1p1beta1ProductSearchParams"></a>
<a id="tocSgooglecloudvisionv1p1beta1productsearchparams"></a>
<a id="tocsgooglecloudvisionv1p1beta1productsearchparams"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "filter": "string",
  "productCategories": [
    "string"
  ],
  "productSet": "string"
}
```

Parameters for a product search request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p1beta1BoundingPoly](#schemagooglecloudvisionv1p1beta1boundingpoly)|false|none|The bounding polygon around the area of interest in the image. If it is not specified, system discretion will be applied.|
|filter|string|false|none|The filtering expression. This can be used to restrict search results based on Product labels. We currently support an AND of OR of key-value expressions, where each expression within an OR must have the same key. An '=' should be used to connect the key and value. For example, "(color = red OR color = blue) AND brand = Google" is acceptable, but "(color = red OR brand = Google)" is not acceptable. "color: red" is not acceptable because it uses a ':' instead of an '='.|
|productCategories|[string]|false|none|The list of product categories to search in. Currently, we only consider the first category, and either "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1", or "general-v1" should be specified. The legacy categories "homegoods", "apparel", and "toys" are still supported but will be deprecated. For new products, please use "homegoods-v2", "apparel-v2", or "toys-v2" for better product search accuracy. It is recommended to migrate existing products to these categories as well.|
|productSet|string|false|none|The resource name of a ProductSet to be searched for similar images. Format is: `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1ProductSearchResults">GoogleCloudVisionV1p1beta1ProductSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1productsearchresults"></a>
<a id="schema_GoogleCloudVisionV1p1beta1ProductSearchResults"></a>
<a id="tocSgooglecloudvisionv1p1beta1productsearchresults"></a>
<a id="tocsgooglecloudvisionv1p1beta1productsearchresults"></a>

```json
{
  "indexTime": "string",
  "productGroupedResults": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "objectAnnotations": [
        {
          "languageCode": "string",
          "mid": "string",
          "name": "string",
          "score": 0
        }
      ],
      "results": [
        {
          "image": "string",
          "product": {
            "description": "string",
            "displayName": "string",
            "name": "string",
            "productCategory": "string",
            "productLabels": [
              {
                "key": "string",
                "value": "string"
              }
            ]
          },
          "score": 0
        }
      ]
    }
  ],
  "results": [
    {
      "image": "string",
      "product": {
        "description": "string",
        "displayName": "string",
        "name": "string",
        "productCategory": "string",
        "productLabels": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "score": 0
    }
  ]
}
```

Results for a product search request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexTime|string(google-datetime)|false|none|Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.|
|productGroupedResults|[[GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult](#schemagooglecloudvisionv1p1beta1productsearchresultsgroupedresult)]|false|none|List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.|
|results|[[GoogleCloudVisionV1p1beta1ProductSearchResultsResult](#schemagooglecloudvisionv1p1beta1productsearchresultsresult)]|false|none|List of results, one for each product match.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult">GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1productsearchresultsgroupedresult"></a>
<a id="schema_GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult"></a>
<a id="tocSgooglecloudvisionv1p1beta1productsearchresultsgroupedresult"></a>
<a id="tocsgooglecloudvisionv1p1beta1productsearchresultsgroupedresult"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "objectAnnotations": [
    {
      "languageCode": "string",
      "mid": "string",
      "name": "string",
      "score": 0
    }
  ],
  "results": [
    {
      "image": "string",
      "product": {
        "description": "string",
        "displayName": "string",
        "name": "string",
        "productCategory": "string",
        "productLabels": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "score": 0
    }
  ]
}
```

Information about the products similar to a single product in a query image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p1beta1BoundingPoly](#schemagooglecloudvisionv1p1beta1boundingpoly)|false|none|The bounding polygon around the product detected in the query image.|
|objectAnnotations|[[GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation](#schemagooglecloudvisionv1p1beta1productsearchresultsobjectannotation)]|false|none|List of generic predictions for the object in the bounding box.|
|results|[[GoogleCloudVisionV1p1beta1ProductSearchResultsResult](#schemagooglecloudvisionv1p1beta1productsearchresultsresult)]|false|none|List of results, one for each product match.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation">GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1productsearchresultsobjectannotation"></a>
<a id="schema_GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation"></a>
<a id="tocSgooglecloudvisionv1p1beta1productsearchresultsobjectannotation"></a>
<a id="tocsgooglecloudvisionv1p1beta1productsearchresultsobjectannotation"></a>

```json
{
  "languageCode": "string",
  "mid": "string",
  "name": "string",
  "score": 0
}
```

Prediction for what the object in the bounding box is.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|mid|string|false|none|Object ID that should align with EntityAnnotation mid.|
|name|string|false|none|Object name, expressed in its `language_code` language.|
|score|number(float)|false|none|Score of the result. Range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p1beta1ProductSearchResultsResult">GoogleCloudVisionV1p1beta1ProductSearchResultsResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1productsearchresultsresult"></a>
<a id="schema_GoogleCloudVisionV1p1beta1ProductSearchResultsResult"></a>
<a id="tocSgooglecloudvisionv1p1beta1productsearchresultsresult"></a>
<a id="tocsgooglecloudvisionv1p1beta1productsearchresultsresult"></a>

```json
{
  "image": "string",
  "product": {
    "description": "string",
    "displayName": "string",
    "name": "string",
    "productCategory": "string",
    "productLabels": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "score": 0
}
```

Information about a product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|string|false|none|The resource name of the image from the product that is the closest match to the query.|
|product|[GoogleCloudVisionV1p1beta1Product](#schemagooglecloudvisionv1p1beta1product)|false|none|The Product.|
|score|number(float)|false|none|A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).|

<h2 id="tocS_GoogleCloudVisionV1p1beta1Property">GoogleCloudVisionV1p1beta1Property</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1property"></a>
<a id="schema_GoogleCloudVisionV1p1beta1Property"></a>
<a id="tocSgooglecloudvisionv1p1beta1property"></a>
<a id="tocsgooglecloudvisionv1p1beta1property"></a>

```json
{
  "name": "string",
  "uint64Value": "string",
  "value": "string"
}
```

A `Property` consists of a user-supplied name/value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the property.|
|uint64Value|string(uint64)|false|none|Value of numeric properties.|
|value|string|false|none|Value of the property.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1SafeSearchAnnotation">GoogleCloudVisionV1p1beta1SafeSearchAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1safesearchannotation"></a>
<a id="schema_GoogleCloudVisionV1p1beta1SafeSearchAnnotation"></a>
<a id="tocSgooglecloudvisionv1p1beta1safesearchannotation"></a>
<a id="tocsgooglecloudvisionv1p1beta1safesearchannotation"></a>

```json
{
  "adult": "UNKNOWN",
  "medical": "UNKNOWN",
  "racy": "UNKNOWN",
  "spoof": "UNKNOWN",
  "violence": "UNKNOWN"
}
```

Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adult|string|false|none|Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.|
|medical|string|false|none|Likelihood that this is a medical image.|
|racy|string|false|none|Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.|
|spoof|string|false|none|Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.|
|violence|string|false|none|Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals.|

#### Enumerated Values

|Property|Value|
|---|---|
|adult|UNKNOWN|
|adult|VERY_UNLIKELY|
|adult|UNLIKELY|
|adult|POSSIBLE|
|adult|LIKELY|
|adult|VERY_LIKELY|
|medical|UNKNOWN|
|medical|VERY_UNLIKELY|
|medical|UNLIKELY|
|medical|POSSIBLE|
|medical|LIKELY|
|medical|VERY_LIKELY|
|racy|UNKNOWN|
|racy|VERY_UNLIKELY|
|racy|UNLIKELY|
|racy|POSSIBLE|
|racy|LIKELY|
|racy|VERY_LIKELY|
|spoof|UNKNOWN|
|spoof|VERY_UNLIKELY|
|spoof|UNLIKELY|
|spoof|POSSIBLE|
|spoof|LIKELY|
|spoof|VERY_LIKELY|
|violence|UNKNOWN|
|violence|VERY_UNLIKELY|
|violence|UNLIKELY|
|violence|POSSIBLE|
|violence|LIKELY|
|violence|VERY_LIKELY|

<h2 id="tocS_GoogleCloudVisionV1p1beta1Symbol">GoogleCloudVisionV1p1beta1Symbol</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1symbol"></a>
<a id="schema_GoogleCloudVisionV1p1beta1Symbol"></a>
<a id="tocSgooglecloudvisionv1p1beta1symbol"></a>
<a id="tocsgooglecloudvisionv1p1beta1symbol"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "text": "string"
}
```

A single symbol representation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[GoogleCloudVisionV1p1beta1BoundingPoly](#schemagooglecloudvisionv1p1beta1boundingpoly)|false|none|The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results for the symbol. Range [0, 1].|
|property|[GoogleCloudVisionV1p1beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p1beta1textannotationtextproperty)|false|none|Additional information detected for the symbol.|
|text|string|false|none|The actual UTF-8 representation of the symbol.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1TextAnnotation">GoogleCloudVisionV1p1beta1TextAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1textannotation"></a>
<a id="schema_GoogleCloudVisionV1p1beta1TextAnnotation"></a>
<a id="tocSgooglecloudvisionv1p1beta1textannotation"></a>
<a id="tocsgooglecloudvisionv1p1beta1textannotation"></a>

```json
{
  "pages": [
    {
      "blocks": [
        {
          "blockType": "UNKNOWN",
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "paragraphs": [
            {
              "boundingBox": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "property": {
                "detectedBreak": {
                  "isPrefix": true,
                  "type": "UNKNOWN"
                },
                "detectedLanguages": [
                  {
                    "confidence": 0,
                    "languageCode": "string"
                  }
                ]
              },
              "words": [
                {
                  "boundingBox": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ],
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "confidence": 0,
                  "property": {
                    "detectedBreak": {
                      "isPrefix": true,
                      "type": "UNKNOWN"
                    },
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ]
                  },
                  "symbols": [
                    {
                      "boundingBox": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "property": {
                        "detectedBreak": {
                          "isPrefix": true,
                          "type": "UNKNOWN"
                        },
                        "detectedLanguages": [
                          {
                            "confidence": 0,
                            "languageCode": "string"
                          }
                        ]
                      },
                      "text": "string"
                    }
                  ]
                }
              ]
            }
          ],
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          }
        }
      ],
      "confidence": 0,
      "height": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "width": 0
    }
  ],
  "text": "string"
}
```

TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pages|[[GoogleCloudVisionV1p1beta1Page](#schemagooglecloudvisionv1p1beta1page)]|false|none|List of pages detected by OCR.|
|text|string|false|none|UTF-8 text detected on the pages.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak">GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1textannotationdetectedbreak"></a>
<a id="schema_GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak"></a>
<a id="tocSgooglecloudvisionv1p1beta1textannotationdetectedbreak"></a>
<a id="tocsgooglecloudvisionv1p1beta1textannotationdetectedbreak"></a>

```json
{
  "isPrefix": true,
  "type": "UNKNOWN"
}
```

Detected start or end of a structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPrefix|boolean|false|none|True if break prepends the element.|
|type|string|false|none|Detected break type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNKNOWN|
|type|SPACE|
|type|SURE_SPACE|
|type|EOL_SURE_SPACE|
|type|HYPHEN|
|type|LINE_BREAK|

<h2 id="tocS_GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage">GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1textannotationdetectedlanguage"></a>
<a id="schema_GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage"></a>
<a id="tocSgooglecloudvisionv1p1beta1textannotationdetectedlanguage"></a>
<a id="tocsgooglecloudvisionv1p1beta1textannotationdetectedlanguage"></a>

```json
{
  "confidence": 0,
  "languageCode": "string"
}
```

Detected language for a structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence of detected language. Range [0, 1].|
|languageCode|string|false|none|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1TextAnnotationTextProperty">GoogleCloudVisionV1p1beta1TextAnnotationTextProperty</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1textannotationtextproperty"></a>
<a id="schema_GoogleCloudVisionV1p1beta1TextAnnotationTextProperty"></a>
<a id="tocSgooglecloudvisionv1p1beta1textannotationtextproperty"></a>
<a id="tocsgooglecloudvisionv1p1beta1textannotationtextproperty"></a>

```json
{
  "detectedBreak": {
    "isPrefix": true,
    "type": "UNKNOWN"
  },
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ]
}
```

Additional information detected on the structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedBreak|[GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak](#schemagooglecloudvisionv1p1beta1textannotationdetectedbreak)|false|none|Detected start or end of a text segment.|
|detectedLanguages|[[GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage](#schemagooglecloudvisionv1p1beta1textannotationdetectedlanguage)]|false|none|A list of detected languages together with confidence.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1TextDetectionParams">GoogleCloudVisionV1p1beta1TextDetectionParams</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1textdetectionparams"></a>
<a id="schema_GoogleCloudVisionV1p1beta1TextDetectionParams"></a>
<a id="tocSgooglecloudvisionv1p1beta1textdetectionparams"></a>
<a id="tocsgooglecloudvisionv1p1beta1textdetectionparams"></a>

```json
{
  "advancedOcrOptions": [
    "string"
  ],
  "enableTextDetectionConfidenceScore": true
}
```

Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advancedOcrOptions|[string]|false|none|A list of advanced OCR options to further fine-tune OCR behavior. Current valid values are: - `legacy_layout`: a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm. Customers can choose the best suitable layout algorithm based on their situation.|
|enableTextDetectionConfidenceScore|boolean|false|none|By default, Cloud Vision API only includes confidence score for DOCUMENT_TEXT_DETECTION result. Set the flag to true to include confidence score for TEXT_DETECTION as well.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1Vertex">GoogleCloudVisionV1p1beta1Vertex</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1vertex"></a>
<a id="schema_GoogleCloudVisionV1p1beta1Vertex"></a>
<a id="tocSgooglecloudvisionv1p1beta1vertex"></a>
<a id="tocsgooglecloudvisionv1p1beta1vertex"></a>

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

<h2 id="tocS_GoogleCloudVisionV1p1beta1WebDetection">GoogleCloudVisionV1p1beta1WebDetection</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1webdetection"></a>
<a id="schema_GoogleCloudVisionV1p1beta1WebDetection"></a>
<a id="tocSgooglecloudvisionv1p1beta1webdetection"></a>
<a id="tocsgooglecloudvisionv1p1beta1webdetection"></a>

```json
{
  "bestGuessLabels": [
    {
      "label": "string",
      "languageCode": "string"
    }
  ],
  "fullMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "pagesWithMatchingImages": [
    {
      "fullMatchingImages": [
        {
          "score": 0,
          "url": "string"
        }
      ],
      "pageTitle": "string",
      "partialMatchingImages": [
        {
          "score": 0,
          "url": "string"
        }
      ],
      "score": 0,
      "url": "string"
    }
  ],
  "partialMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "visuallySimilarImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "webEntities": [
    {
      "description": "string",
      "entityId": "string",
      "score": 0
    }
  ]
}
```

Relevant information for the image from the Internet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bestGuessLabels|[[GoogleCloudVisionV1p1beta1WebDetectionWebLabel](#schemagooglecloudvisionv1p1beta1webdetectionweblabel)]|false|none|The service's best guess as to the topic of the request image. Inferred from similar images on the open web.|
|fullMatchingImages|[[GoogleCloudVisionV1p1beta1WebDetectionWebImage](#schemagooglecloudvisionv1p1beta1webdetectionwebimage)]|false|none|Fully matching images from the Internet. Can include resized copies of the query image.|
|pagesWithMatchingImages|[[GoogleCloudVisionV1p1beta1WebDetectionWebPage](#schemagooglecloudvisionv1p1beta1webdetectionwebpage)]|false|none|Web pages containing the matching images from the Internet.|
|partialMatchingImages|[[GoogleCloudVisionV1p1beta1WebDetectionWebImage](#schemagooglecloudvisionv1p1beta1webdetectionwebimage)]|false|none|Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.|
|visuallySimilarImages|[[GoogleCloudVisionV1p1beta1WebDetectionWebImage](#schemagooglecloudvisionv1p1beta1webdetectionwebimage)]|false|none|The visually similar image results.|
|webEntities|[[GoogleCloudVisionV1p1beta1WebDetectionWebEntity](#schemagooglecloudvisionv1p1beta1webdetectionwebentity)]|false|none|Deduced entities from similar images on the Internet.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1WebDetectionParams">GoogleCloudVisionV1p1beta1WebDetectionParams</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1webdetectionparams"></a>
<a id="schema_GoogleCloudVisionV1p1beta1WebDetectionParams"></a>
<a id="tocSgooglecloudvisionv1p1beta1webdetectionparams"></a>
<a id="tocsgooglecloudvisionv1p1beta1webdetectionparams"></a>

```json
{
  "includeGeoResults": true
}
```

Parameters for web detection request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeGeoResults|boolean|false|none|**Deprecated.** This field has no effect on results.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1WebDetectionWebEntity">GoogleCloudVisionV1p1beta1WebDetectionWebEntity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1webdetectionwebentity"></a>
<a id="schema_GoogleCloudVisionV1p1beta1WebDetectionWebEntity"></a>
<a id="tocSgooglecloudvisionv1p1beta1webdetectionwebentity"></a>
<a id="tocsgooglecloudvisionv1p1beta1webdetectionwebentity"></a>

```json
{
  "description": "string",
  "entityId": "string",
  "score": 0
}
```

Entity deduced from similar images on the Internet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Canonical description of the entity, in English.|
|entityId|string|false|none|Opaque entity ID.|
|score|number(float)|false|none|Overall relevancy score for the entity. Not normalized and not comparable across different image queries.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1WebDetectionWebImage">GoogleCloudVisionV1p1beta1WebDetectionWebImage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1webdetectionwebimage"></a>
<a id="schema_GoogleCloudVisionV1p1beta1WebDetectionWebImage"></a>
<a id="tocSgooglecloudvisionv1p1beta1webdetectionwebimage"></a>
<a id="tocsgooglecloudvisionv1p1beta1webdetectionwebimage"></a>

```json
{
  "score": 0,
  "url": "string"
}
```

Metadata for online images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score|number(float)|false|none|(Deprecated) Overall relevancy score for the image.|
|url|string|false|none|The result image URL.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1WebDetectionWebLabel">GoogleCloudVisionV1p1beta1WebDetectionWebLabel</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1webdetectionweblabel"></a>
<a id="schema_GoogleCloudVisionV1p1beta1WebDetectionWebLabel"></a>
<a id="tocSgooglecloudvisionv1p1beta1webdetectionweblabel"></a>
<a id="tocsgooglecloudvisionv1p1beta1webdetectionweblabel"></a>

```json
{
  "label": "string",
  "languageCode": "string"
}
```

Label to provide extra metadata for the web detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|Label for extra metadata.|
|languageCode|string|false|none|The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1WebDetectionWebPage">GoogleCloudVisionV1p1beta1WebDetectionWebPage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1webdetectionwebpage"></a>
<a id="schema_GoogleCloudVisionV1p1beta1WebDetectionWebPage"></a>
<a id="tocSgooglecloudvisionv1p1beta1webdetectionwebpage"></a>
<a id="tocsgooglecloudvisionv1p1beta1webdetectionwebpage"></a>

```json
{
  "fullMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "pageTitle": "string",
  "partialMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "score": 0,
  "url": "string"
}
```

Metadata for web pages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullMatchingImages|[[GoogleCloudVisionV1p1beta1WebDetectionWebImage](#schemagooglecloudvisionv1p1beta1webdetectionwebimage)]|false|none|Fully matching images on the page. Can include resized copies of the query image.|
|pageTitle|string|false|none|Title for the web page, may contain HTML markups.|
|partialMatchingImages|[[GoogleCloudVisionV1p1beta1WebDetectionWebImage](#schemagooglecloudvisionv1p1beta1webdetectionwebimage)]|false|none|Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.|
|score|number(float)|false|none|(Deprecated) Overall relevancy score for the web page.|
|url|string|false|none|The result web page URL.|

<h2 id="tocS_GoogleCloudVisionV1p1beta1Word">GoogleCloudVisionV1p1beta1Word</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p1beta1word"></a>
<a id="schema_GoogleCloudVisionV1p1beta1Word"></a>
<a id="tocSgooglecloudvisionv1p1beta1word"></a>
<a id="tocsgooglecloudvisionv1p1beta1word"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "symbols": [
    {
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "text": "string"
    }
  ]
}
```

A word representation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[GoogleCloudVisionV1p1beta1BoundingPoly](#schemagooglecloudvisionv1p1beta1boundingpoly)|false|none|The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results for the word. Range [0, 1].|
|property|[GoogleCloudVisionV1p1beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p1beta1textannotationtextproperty)|false|none|Additional information detected for the word.|
|symbols|[[GoogleCloudVisionV1p1beta1Symbol](#schemagooglecloudvisionv1p1beta1symbol)]|false|none|List of symbols in the word. The order of the symbols follows the natural reading order.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1AnnotateFileResponse">GoogleCloudVisionV1p2beta1AnnotateFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1annotatefileresponse"></a>
<a id="schema_GoogleCloudVisionV1p2beta1AnnotateFileResponse"></a>
<a id="tocSgooglecloudvisionv1p2beta1annotatefileresponse"></a>
<a id="tocsgooglecloudvisionv1p2beta1annotatefileresponse"></a>

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
  "inputConfig": {
    "content": "string",
    "gcsSource": {
      "uri": "string"
    },
    "mimeType": "string"
  },
  "responses": [
    {
      "context": {
        "pageNumber": 0,
        "uri": "string"
      },
      "cropHintsAnnotation": {
        "cropHints": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "importanceFraction": 0
          }
        ]
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
      "faceAnnotations": [
        {
          "angerLikelihood": "UNKNOWN",
          "blurredLikelihood": "UNKNOWN",
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "detectionConfidence": 0,
          "fdBoundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "headwearLikelihood": "UNKNOWN",
          "joyLikelihood": "UNKNOWN",
          "landmarkingConfidence": 0,
          "landmarks": [
            {
              "position": {
                "x": 0,
                "y": 0,
                "z": 0
              },
              "type": "UNKNOWN_LANDMARK"
            }
          ],
          "panAngle": 0,
          "rollAngle": 0,
          "sorrowLikelihood": "UNKNOWN",
          "surpriseLikelihood": "UNKNOWN",
          "tiltAngle": 0,
          "underExposedLikelihood": "UNKNOWN"
        }
      ],
      "fullTextAnnotation": {
        "pages": [
          {
            "blocks": [
              {
                "blockType": "UNKNOWN",
                "boundingBox": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "paragraphs": [
                  {
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    },
                    "words": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "symbols": [
                          {
                            "boundingBox": {
                              "normalizedVertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ],
                              "vertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ]
                            },
                            "confidence": 0,
                            "property": {
                              "detectedBreak": {
                                "isPrefix": true,
                                "type": "UNKNOWN"
                              },
                              "detectedLanguages": [
                                {
                                  "confidence": 0,
                                  "languageCode": "string"
                                }
                              ]
                            },
                            "text": "string"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                }
              }
            ],
            "confidence": 0,
            "height": 0,
            "property": {
              "detectedBreak": {
                "isPrefix": true,
                "type": "UNKNOWN"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ]
            },
            "width": 0
          }
        ],
        "text": "string"
      },
      "imagePropertiesAnnotation": {
        "dominantColors": {
          "colors": [
            {
              "color": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "pixelFraction": 0,
              "score": 0
            }
          ]
        }
      },
      "labelAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "landmarkAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "localizedObjectAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "languageCode": "string",
          "mid": "string",
          "name": "string",
          "score": 0
        }
      ],
      "logoAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "productSearchResults": {
        "indexTime": "string",
        "productGroupedResults": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "objectAnnotations": [
              {
                "languageCode": "string",
                "mid": "string",
                "name": "string",
                "score": 0
              }
            ],
            "results": [
              {
                "image": "string",
                "product": {
                  "description": "string",
                  "displayName": "string",
                  "name": "string",
                  "productCategory": "string",
                  "productLabels": [
                    {
                      "key": "string",
                      "value": "string"
                    }
                  ]
                },
                "score": 0
              }
            ]
          }
        ],
        "results": [
          {
            "image": "string",
            "product": {
              "description": "string",
              "displayName": "string",
              "name": "string",
              "productCategory": "string",
              "productLabels": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "score": 0
          }
        ]
      },
      "safeSearchAnnotation": {
        "adult": "UNKNOWN",
        "medical": "UNKNOWN",
        "racy": "UNKNOWN",
        "spoof": "UNKNOWN",
        "violence": "UNKNOWN"
      },
      "textAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "webDetection": {
        "bestGuessLabels": [
          {
            "label": "string",
            "languageCode": "string"
          }
        ],
        "fullMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "pagesWithMatchingImages": [
          {
            "fullMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "pageTitle": "string",
            "partialMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "score": 0,
            "url": "string"
          }
        ],
        "partialMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "visuallySimilarImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "webEntities": [
          {
            "description": "string",
            "entityId": "string",
            "score": 0
          }
        ]
      }
    }
  ],
  "totalPages": 0
}
```

Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Status](#schemastatus)|false|none|If set, represents the error message for the failed request. The `responses` field will not be set in this case.|
|inputConfig|[GoogleCloudVisionV1p2beta1InputConfig](#schemagooglecloudvisionv1p2beta1inputconfig)|false|none|Information about the file for which this response is generated.|
|responses|[[GoogleCloudVisionV1p2beta1AnnotateImageResponse](#schemagooglecloudvisionv1p2beta1annotateimageresponse)]|false|none|Individual responses to images found within the file. This field will be empty if the `error` field is set.|
|totalPages|integer(int32)|false|none|This field gives the total number of pages in the file.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1AnnotateImageResponse">GoogleCloudVisionV1p2beta1AnnotateImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1annotateimageresponse"></a>
<a id="schema_GoogleCloudVisionV1p2beta1AnnotateImageResponse"></a>
<a id="tocSgooglecloudvisionv1p2beta1annotateimageresponse"></a>
<a id="tocsgooglecloudvisionv1p2beta1annotateimageresponse"></a>

```json
{
  "context": {
    "pageNumber": 0,
    "uri": "string"
  },
  "cropHintsAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "importanceFraction": 0
      }
    ]
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
  "faceAnnotations": [
    {
      "angerLikelihood": "UNKNOWN",
      "blurredLikelihood": "UNKNOWN",
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "detectionConfidence": 0,
      "fdBoundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "headwearLikelihood": "UNKNOWN",
      "joyLikelihood": "UNKNOWN",
      "landmarkingConfidence": 0,
      "landmarks": [
        {
          "position": {
            "x": 0,
            "y": 0,
            "z": 0
          },
          "type": "UNKNOWN_LANDMARK"
        }
      ],
      "panAngle": 0,
      "rollAngle": 0,
      "sorrowLikelihood": "UNKNOWN",
      "surpriseLikelihood": "UNKNOWN",
      "tiltAngle": 0,
      "underExposedLikelihood": "UNKNOWN"
    }
  ],
  "fullTextAnnotation": {
    "pages": [
      {
        "blocks": [
          {
            "blockType": "UNKNOWN",
            "boundingBox": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "paragraphs": [
              {
                "boundingBox": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                },
                "words": [
                  {
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "text": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "property": {
              "detectedBreak": {
                "isPrefix": true,
                "type": "UNKNOWN"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ]
            }
          }
        ],
        "confidence": 0,
        "height": 0,
        "property": {
          "detectedBreak": {
            "isPrefix": true,
            "type": "UNKNOWN"
          },
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ]
        },
        "width": 0
      }
    ],
    "text": "string"
  },
  "imagePropertiesAnnotation": {
    "dominantColors": {
      "colors": [
        {
          "color": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "pixelFraction": 0,
          "score": 0
        }
      ]
    }
  },
  "labelAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "landmarkAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "localizedObjectAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "languageCode": "string",
      "mid": "string",
      "name": "string",
      "score": 0
    }
  ],
  "logoAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "productSearchResults": {
    "indexTime": "string",
    "productGroupedResults": [
      {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "objectAnnotations": [
          {
            "languageCode": "string",
            "mid": "string",
            "name": "string",
            "score": 0
          }
        ],
        "results": [
          {
            "image": "string",
            "product": {
              "description": "string",
              "displayName": "string",
              "name": "string",
              "productCategory": "string",
              "productLabels": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "score": 0
          }
        ]
      }
    ],
    "results": [
      {
        "image": "string",
        "product": {
          "description": "string",
          "displayName": "string",
          "name": "string",
          "productCategory": "string",
          "productLabels": [
            {
              "key": "string",
              "value": "string"
            }
          ]
        },
        "score": 0
      }
    ]
  },
  "safeSearchAnnotation": {
    "adult": "UNKNOWN",
    "medical": "UNKNOWN",
    "racy": "UNKNOWN",
    "spoof": "UNKNOWN",
    "violence": "UNKNOWN"
  },
  "textAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "webDetection": {
    "bestGuessLabels": [
      {
        "label": "string",
        "languageCode": "string"
      }
    ],
    "fullMatchingImages": [
      {
        "score": 0,
        "url": "string"
      }
    ],
    "pagesWithMatchingImages": [
      {
        "fullMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "pageTitle": "string",
        "partialMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "score": 0,
        "url": "string"
      }
    ],
    "partialMatchingImages": [
      {
        "score": 0,
        "url": "string"
      }
    ],
    "visuallySimilarImages": [
      {
        "score": 0,
        "url": "string"
      }
    ],
    "webEntities": [
      {
        "description": "string",
        "entityId": "string",
        "score": 0
      }
    ]
  }
}
```

Response to an image annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[GoogleCloudVisionV1p2beta1ImageAnnotationContext](#schemagooglecloudvisionv1p2beta1imageannotationcontext)|false|none|If present, contextual information is needed to understand where this image comes from.|
|cropHintsAnnotation|[GoogleCloudVisionV1p2beta1CropHintsAnnotation](#schemagooglecloudvisionv1p2beta1crophintsannotation)|false|none|If present, crop hints have completed successfully.|
|error|[Status](#schemastatus)|false|none|If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.|
|faceAnnotations|[[GoogleCloudVisionV1p2beta1FaceAnnotation](#schemagooglecloudvisionv1p2beta1faceannotation)]|false|none|If present, face detection has completed successfully.|
|fullTextAnnotation|[GoogleCloudVisionV1p2beta1TextAnnotation](#schemagooglecloudvisionv1p2beta1textannotation)|false|none|If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.|
|imagePropertiesAnnotation|[GoogleCloudVisionV1p2beta1ImageProperties](#schemagooglecloudvisionv1p2beta1imageproperties)|false|none|If present, image properties were extracted successfully.|
|labelAnnotations|[[GoogleCloudVisionV1p2beta1EntityAnnotation](#schemagooglecloudvisionv1p2beta1entityannotation)]|false|none|If present, label detection has completed successfully.|
|landmarkAnnotations|[[GoogleCloudVisionV1p2beta1EntityAnnotation](#schemagooglecloudvisionv1p2beta1entityannotation)]|false|none|If present, landmark detection has completed successfully.|
|localizedObjectAnnotations|[[GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation](#schemagooglecloudvisionv1p2beta1localizedobjectannotation)]|false|none|If present, localized object detection has completed successfully. This will be sorted descending by confidence score.|
|logoAnnotations|[[GoogleCloudVisionV1p2beta1EntityAnnotation](#schemagooglecloudvisionv1p2beta1entityannotation)]|false|none|If present, logo detection has completed successfully.|
|productSearchResults|[GoogleCloudVisionV1p2beta1ProductSearchResults](#schemagooglecloudvisionv1p2beta1productsearchresults)|false|none|If present, product search has completed successfully.|
|safeSearchAnnotation|[GoogleCloudVisionV1p2beta1SafeSearchAnnotation](#schemagooglecloudvisionv1p2beta1safesearchannotation)|false|none|If present, safe-search annotation has completed successfully.|
|textAnnotations|[[GoogleCloudVisionV1p2beta1EntityAnnotation](#schemagooglecloudvisionv1p2beta1entityannotation)]|false|none|If present, text (OCR) detection has completed successfully.|
|webDetection|[GoogleCloudVisionV1p2beta1WebDetection](#schemagooglecloudvisionv1p2beta1webdetection)|false|none|If present, web detection has completed successfully.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse">GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1asyncannotatefileresponse"></a>
<a id="schema_GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse"></a>
<a id="tocSgooglecloudvisionv1p2beta1asyncannotatefileresponse"></a>
<a id="tocsgooglecloudvisionv1p2beta1asyncannotatefileresponse"></a>

```json
{
  "outputConfig": {
    "batchSize": 0,
    "gcsDestination": {
      "uri": "string"
    }
  }
}
```

The response for a single offline file annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputConfig|[GoogleCloudVisionV1p2beta1OutputConfig](#schemagooglecloudvisionv1p2beta1outputconfig)|false|none|The output location and metadata from AsyncAnnotateFileRequest.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse">GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1asyncbatchannotatefilesresponse"></a>
<a id="schema_GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesResponse"></a>
<a id="tocSgooglecloudvisionv1p2beta1asyncbatchannotatefilesresponse"></a>
<a id="tocsgooglecloudvisionv1p2beta1asyncbatchannotatefilesresponse"></a>

```json
{
  "responses": [
    {
      "outputConfig": {
        "batchSize": 0,
        "gcsDestination": {
          "uri": "string"
        }
      }
    }
  ]
}
```

Response to an async batch file annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[GoogleCloudVisionV1p2beta1AsyncAnnotateFileResponse](#schemagooglecloudvisionv1p2beta1asyncannotatefileresponse)]|false|none|The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1Block">GoogleCloudVisionV1p2beta1Block</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1block"></a>
<a id="schema_GoogleCloudVisionV1p2beta1Block"></a>
<a id="tocSgooglecloudvisionv1p2beta1block"></a>
<a id="tocsgooglecloudvisionv1p2beta1block"></a>

```json
{
  "blockType": "UNKNOWN",
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "paragraphs": [
    {
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "words": [
        {
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          },
          "symbols": [
            {
              "boundingBox": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "property": {
                "detectedBreak": {
                  "isPrefix": true,
                  "type": "UNKNOWN"
                },
                "detectedLanguages": [
                  {
                    "confidence": 0,
                    "languageCode": "string"
                  }
                ]
              },
              "text": "string"
            }
          ]
        }
      ]
    }
  ],
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  }
}
```

Logical element on the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockType|string|false|none|Detected block type (text, image etc) for this block.|
|boundingBox|[GoogleCloudVisionV1p2beta1BoundingPoly](#schemagooglecloudvisionv1p2beta1boundingpoly)|false|none|The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results on the block. Range [0, 1].|
|paragraphs|[[GoogleCloudVisionV1p2beta1Paragraph](#schemagooglecloudvisionv1p2beta1paragraph)]|false|none|List of paragraphs in this block (if this blocks is of type text).|
|property|[GoogleCloudVisionV1p2beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p2beta1textannotationtextproperty)|false|none|Additional information detected for the block.|

#### Enumerated Values

|Property|Value|
|---|---|
|blockType|UNKNOWN|
|blockType|TEXT|
|blockType|TABLE|
|blockType|PICTURE|
|blockType|RULER|
|blockType|BARCODE|

<h2 id="tocS_GoogleCloudVisionV1p2beta1BoundingPoly">GoogleCloudVisionV1p2beta1BoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1boundingpoly"></a>
<a id="schema_GoogleCloudVisionV1p2beta1BoundingPoly"></a>
<a id="tocSgooglecloudvisionv1p2beta1boundingpoly"></a>
<a id="tocsgooglecloudvisionv1p2beta1boundingpoly"></a>

```json
{
  "normalizedVertices": [
    {
      "x": 0,
      "y": 0
    }
  ],
  "vertices": [
    {
      "x": 0,
      "y": 0
    }
  ]
}
```

A bounding polygon for the detected image annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedVertices|[[GoogleCloudVisionV1p2beta1NormalizedVertex](#schemagooglecloudvisionv1p2beta1normalizedvertex)]|false|none|The bounding polygon normalized vertices.|
|vertices|[[GoogleCloudVisionV1p2beta1Vertex](#schemagooglecloudvisionv1p2beta1vertex)]|false|none|The bounding polygon vertices.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1ColorInfo">GoogleCloudVisionV1p2beta1ColorInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1colorinfo"></a>
<a id="schema_GoogleCloudVisionV1p2beta1ColorInfo"></a>
<a id="tocSgooglecloudvisionv1p2beta1colorinfo"></a>
<a id="tocsgooglecloudvisionv1p2beta1colorinfo"></a>

```json
{
  "color": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "pixelFraction": 0,
  "score": 0
}
```

Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|[Color](#schemacolor)|false|none|RGB components of the color.|
|pixelFraction|number(float)|false|none|The fraction of pixels the color occupies in the image. Value in range [0, 1].|
|score|number(float)|false|none|Image-specific score for this color. Value in range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p2beta1CropHint">GoogleCloudVisionV1p2beta1CropHint</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1crophint"></a>
<a id="schema_GoogleCloudVisionV1p2beta1CropHint"></a>
<a id="tocSgooglecloudvisionv1p2beta1crophint"></a>
<a id="tocsgooglecloudvisionv1p2beta1crophint"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "importanceFraction": 0
}
```

Single crop hint that is used to generate a new crop when serving an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p2beta1BoundingPoly](#schemagooglecloudvisionv1p2beta1boundingpoly)|false|none|The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale.|
|confidence|number(float)|false|none|Confidence of this being a salient region. Range [0, 1].|
|importanceFraction|number(float)|false|none|Fraction of importance of this salient region with respect to the original image.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1CropHintsAnnotation">GoogleCloudVisionV1p2beta1CropHintsAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1crophintsannotation"></a>
<a id="schema_GoogleCloudVisionV1p2beta1CropHintsAnnotation"></a>
<a id="tocSgooglecloudvisionv1p2beta1crophintsannotation"></a>
<a id="tocsgooglecloudvisionv1p2beta1crophintsannotation"></a>

```json
{
  "cropHints": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "importanceFraction": 0
    }
  ]
}
```

Set of crop hints that are used to generate new crops when serving images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cropHints|[[GoogleCloudVisionV1p2beta1CropHint](#schemagooglecloudvisionv1p2beta1crophint)]|false|none|Crop hint results.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1DominantColorsAnnotation">GoogleCloudVisionV1p2beta1DominantColorsAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1dominantcolorsannotation"></a>
<a id="schema_GoogleCloudVisionV1p2beta1DominantColorsAnnotation"></a>
<a id="tocSgooglecloudvisionv1p2beta1dominantcolorsannotation"></a>
<a id="tocsgooglecloudvisionv1p2beta1dominantcolorsannotation"></a>

```json
{
  "colors": [
    {
      "color": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "pixelFraction": 0,
      "score": 0
    }
  ]
}
```

Set of dominant colors and their corresponding scores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|[[GoogleCloudVisionV1p2beta1ColorInfo](#schemagooglecloudvisionv1p2beta1colorinfo)]|false|none|RGB color values with their score and pixel fraction.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1EntityAnnotation">GoogleCloudVisionV1p2beta1EntityAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1entityannotation"></a>
<a id="schema_GoogleCloudVisionV1p2beta1EntityAnnotation"></a>
<a id="tocSgooglecloudvisionv1p2beta1entityannotation"></a>
<a id="tocsgooglecloudvisionv1p2beta1entityannotation"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "description": "string",
  "locale": "string",
  "locations": [
    {
      "latLng": {
        "latitude": 0,
        "longitude": 0
      }
    }
  ],
  "mid": "string",
  "properties": [
    {
      "name": "string",
      "uint64Value": "string",
      "value": "string"
    }
  ],
  "score": 0,
  "topicality": 0
}
```

Set of detected entity features.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p2beta1BoundingPoly](#schemagooglecloudvisionv1p2beta1boundingpoly)|false|none|Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.|
|confidence|number(float)|false|none|**Deprecated.** **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].|
|description|string|false|none|Entity textual description, expressed in its `locale` language.|
|locale|string|false|none|The language code for the locale in which the entity textual `description` is expressed.|
|locations|[[GoogleCloudVisionV1p2beta1LocationInfo](#schemagooglecloudvisionv1p2beta1locationinfo)]|false|none|The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.|
|mid|string|false|none|Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).|
|properties|[[GoogleCloudVisionV1p2beta1Property](#schemagooglecloudvisionv1p2beta1property)]|false|none|Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.|
|score|number(float)|false|none|Overall score of the result. Range [0, 1].|
|topicality|number(float)|false|none|The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p2beta1FaceAnnotation">GoogleCloudVisionV1p2beta1FaceAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1faceannotation"></a>
<a id="schema_GoogleCloudVisionV1p2beta1FaceAnnotation"></a>
<a id="tocSgooglecloudvisionv1p2beta1faceannotation"></a>
<a id="tocsgooglecloudvisionv1p2beta1faceannotation"></a>

```json
{
  "angerLikelihood": "UNKNOWN",
  "blurredLikelihood": "UNKNOWN",
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "detectionConfidence": 0,
  "fdBoundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "headwearLikelihood": "UNKNOWN",
  "joyLikelihood": "UNKNOWN",
  "landmarkingConfidence": 0,
  "landmarks": [
    {
      "position": {
        "x": 0,
        "y": 0,
        "z": 0
      },
      "type": "UNKNOWN_LANDMARK"
    }
  ],
  "panAngle": 0,
  "rollAngle": 0,
  "sorrowLikelihood": "UNKNOWN",
  "surpriseLikelihood": "UNKNOWN",
  "tiltAngle": 0,
  "underExposedLikelihood": "UNKNOWN"
}
```

A face annotation object contains the results of face detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angerLikelihood|string|false|none|Anger likelihood.|
|blurredLikelihood|string|false|none|Blurred likelihood.|
|boundingPoly|[GoogleCloudVisionV1p2beta1BoundingPoly](#schemagooglecloudvisionv1p2beta1boundingpoly)|false|none|The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.|
|detectionConfidence|number(float)|false|none|Detection confidence. Range [0, 1].|
|fdBoundingPoly|[GoogleCloudVisionV1p2beta1BoundingPoly](#schemagooglecloudvisionv1p2beta1boundingpoly)|false|none|The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix.|
|headwearLikelihood|string|false|none|Headwear likelihood.|
|joyLikelihood|string|false|none|Joy likelihood.|
|landmarkingConfidence|number(float)|false|none|Face landmarking confidence. Range [0, 1].|
|landmarks|[[GoogleCloudVisionV1p2beta1FaceAnnotationLandmark](#schemagooglecloudvisionv1p2beta1faceannotationlandmark)]|false|none|Detected face landmarks.|
|panAngle|number(float)|false|none|Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].|
|rollAngle|number(float)|false|none|Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].|
|sorrowLikelihood|string|false|none|Sorrow likelihood.|
|surpriseLikelihood|string|false|none|Surprise likelihood.|
|tiltAngle|number(float)|false|none|Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].|
|underExposedLikelihood|string|false|none|Under-exposed likelihood.|

#### Enumerated Values

|Property|Value|
|---|---|
|angerLikelihood|UNKNOWN|
|angerLikelihood|VERY_UNLIKELY|
|angerLikelihood|UNLIKELY|
|angerLikelihood|POSSIBLE|
|angerLikelihood|LIKELY|
|angerLikelihood|VERY_LIKELY|
|blurredLikelihood|UNKNOWN|
|blurredLikelihood|VERY_UNLIKELY|
|blurredLikelihood|UNLIKELY|
|blurredLikelihood|POSSIBLE|
|blurredLikelihood|LIKELY|
|blurredLikelihood|VERY_LIKELY|
|headwearLikelihood|UNKNOWN|
|headwearLikelihood|VERY_UNLIKELY|
|headwearLikelihood|UNLIKELY|
|headwearLikelihood|POSSIBLE|
|headwearLikelihood|LIKELY|
|headwearLikelihood|VERY_LIKELY|
|joyLikelihood|UNKNOWN|
|joyLikelihood|VERY_UNLIKELY|
|joyLikelihood|UNLIKELY|
|joyLikelihood|POSSIBLE|
|joyLikelihood|LIKELY|
|joyLikelihood|VERY_LIKELY|
|sorrowLikelihood|UNKNOWN|
|sorrowLikelihood|VERY_UNLIKELY|
|sorrowLikelihood|UNLIKELY|
|sorrowLikelihood|POSSIBLE|
|sorrowLikelihood|LIKELY|
|sorrowLikelihood|VERY_LIKELY|
|surpriseLikelihood|UNKNOWN|
|surpriseLikelihood|VERY_UNLIKELY|
|surpriseLikelihood|UNLIKELY|
|surpriseLikelihood|POSSIBLE|
|surpriseLikelihood|LIKELY|
|surpriseLikelihood|VERY_LIKELY|
|underExposedLikelihood|UNKNOWN|
|underExposedLikelihood|VERY_UNLIKELY|
|underExposedLikelihood|UNLIKELY|
|underExposedLikelihood|POSSIBLE|
|underExposedLikelihood|LIKELY|
|underExposedLikelihood|VERY_LIKELY|

<h2 id="tocS_GoogleCloudVisionV1p2beta1FaceAnnotationLandmark">GoogleCloudVisionV1p2beta1FaceAnnotationLandmark</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1faceannotationlandmark"></a>
<a id="schema_GoogleCloudVisionV1p2beta1FaceAnnotationLandmark"></a>
<a id="tocSgooglecloudvisionv1p2beta1faceannotationlandmark"></a>
<a id="tocsgooglecloudvisionv1p2beta1faceannotationlandmark"></a>

```json
{
  "position": {
    "x": 0,
    "y": 0,
    "z": 0
  },
  "type": "UNKNOWN_LANDMARK"
}
```

A face-specific landmark (for example, a face feature).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[GoogleCloudVisionV1p2beta1Position](#schemagooglecloudvisionv1p2beta1position)|false|none|Face landmark position.|
|type|string|false|none|Face landmark type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNKNOWN_LANDMARK|
|type|LEFT_EYE|
|type|RIGHT_EYE|
|type|LEFT_OF_LEFT_EYEBROW|
|type|RIGHT_OF_LEFT_EYEBROW|
|type|LEFT_OF_RIGHT_EYEBROW|
|type|RIGHT_OF_RIGHT_EYEBROW|
|type|MIDPOINT_BETWEEN_EYES|
|type|NOSE_TIP|
|type|UPPER_LIP|
|type|LOWER_LIP|
|type|MOUTH_LEFT|
|type|MOUTH_RIGHT|
|type|MOUTH_CENTER|
|type|NOSE_BOTTOM_RIGHT|
|type|NOSE_BOTTOM_LEFT|
|type|NOSE_BOTTOM_CENTER|
|type|LEFT_EYE_TOP_BOUNDARY|
|type|LEFT_EYE_RIGHT_CORNER|
|type|LEFT_EYE_BOTTOM_BOUNDARY|
|type|LEFT_EYE_LEFT_CORNER|
|type|RIGHT_EYE_TOP_BOUNDARY|
|type|RIGHT_EYE_RIGHT_CORNER|
|type|RIGHT_EYE_BOTTOM_BOUNDARY|
|type|RIGHT_EYE_LEFT_CORNER|
|type|LEFT_EYEBROW_UPPER_MIDPOINT|
|type|RIGHT_EYEBROW_UPPER_MIDPOINT|
|type|LEFT_EAR_TRAGION|
|type|RIGHT_EAR_TRAGION|
|type|LEFT_EYE_PUPIL|
|type|RIGHT_EYE_PUPIL|
|type|FOREHEAD_GLABELLA|
|type|CHIN_GNATHION|
|type|CHIN_LEFT_GONION|
|type|CHIN_RIGHT_GONION|
|type|LEFT_CHEEK_CENTER|
|type|RIGHT_CHEEK_CENTER|

<h2 id="tocS_GoogleCloudVisionV1p2beta1GcsDestination">GoogleCloudVisionV1p2beta1GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1gcsdestination"></a>
<a id="schema_GoogleCloudVisionV1p2beta1GcsDestination"></a>
<a id="tocSgooglecloudvisionv1p2beta1gcsdestination"></a>
<a id="tocsgooglecloudvisionv1p2beta1gcsdestination"></a>

```json
{
  "uri": "string"
}
```

The Google Cloud Storage location where the output will be written to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1GcsSource">GoogleCloudVisionV1p2beta1GcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1gcssource"></a>
<a id="schema_GoogleCloudVisionV1p2beta1GcsSource"></a>
<a id="tocSgooglecloudvisionv1p2beta1gcssource"></a>
<a id="tocsgooglecloudvisionv1p2beta1gcssource"></a>

```json
{
  "uri": "string"
}
```

The Google Cloud Storage location where the input will be read from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1ImageAnnotationContext">GoogleCloudVisionV1p2beta1ImageAnnotationContext</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1imageannotationcontext"></a>
<a id="schema_GoogleCloudVisionV1p2beta1ImageAnnotationContext"></a>
<a id="tocSgooglecloudvisionv1p2beta1imageannotationcontext"></a>
<a id="tocsgooglecloudvisionv1p2beta1imageannotationcontext"></a>

```json
{
  "pageNumber": 0,
  "uri": "string"
}
```

If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageNumber|integer(int32)|false|none|If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.|
|uri|string|false|none|The URI of the file used to produce the image.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1ImageProperties">GoogleCloudVisionV1p2beta1ImageProperties</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1imageproperties"></a>
<a id="schema_GoogleCloudVisionV1p2beta1ImageProperties"></a>
<a id="tocSgooglecloudvisionv1p2beta1imageproperties"></a>
<a id="tocsgooglecloudvisionv1p2beta1imageproperties"></a>

```json
{
  "dominantColors": {
    "colors": [
      {
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "pixelFraction": 0,
        "score": 0
      }
    ]
  }
}
```

Stores image properties, such as dominant colors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dominantColors|[GoogleCloudVisionV1p2beta1DominantColorsAnnotation](#schemagooglecloudvisionv1p2beta1dominantcolorsannotation)|false|none|If present, dominant colors completed successfully.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1InputConfig">GoogleCloudVisionV1p2beta1InputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1inputconfig"></a>
<a id="schema_GoogleCloudVisionV1p2beta1InputConfig"></a>
<a id="tocSgooglecloudvisionv1p2beta1inputconfig"></a>
<a id="tocsgooglecloudvisionv1p2beta1inputconfig"></a>

```json
{
  "content": "string",
  "gcsSource": {
    "uri": "string"
  },
  "mimeType": "string"
}
```

The desired input location and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.|
|gcsSource|[GoogleCloudVisionV1p2beta1GcsSource](#schemagooglecloudvisionv1p2beta1gcssource)|false|none|The Google Cloud Storage location to read the input from.|
|mimeType|string|false|none|The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation">GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1localizedobjectannotation"></a>
<a id="schema_GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation"></a>
<a id="tocSgooglecloudvisionv1p2beta1localizedobjectannotation"></a>
<a id="tocsgooglecloudvisionv1p2beta1localizedobjectannotation"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "languageCode": "string",
  "mid": "string",
  "name": "string",
  "score": 0
}
```

Set of detected objects with bounding boxes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p2beta1BoundingPoly](#schemagooglecloudvisionv1p2beta1boundingpoly)|false|none|Image region to which this object belongs. This must be populated.|
|languageCode|string|false|none|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|mid|string|false|none|Object ID that should align with EntityAnnotation mid.|
|name|string|false|none|Object name, expressed in its `language_code` language.|
|score|number(float)|false|none|Score of the result. Range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p2beta1LocationInfo">GoogleCloudVisionV1p2beta1LocationInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1locationinfo"></a>
<a id="schema_GoogleCloudVisionV1p2beta1LocationInfo"></a>
<a id="tocSgooglecloudvisionv1p2beta1locationinfo"></a>
<a id="tocsgooglecloudvisionv1p2beta1locationinfo"></a>

```json
{
  "latLng": {
    "latitude": 0,
    "longitude": 0
  }
}
```

Detected entity location information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latLng|[LatLng](#schemalatlng)|false|none|lat/long location coordinates.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1NormalizedVertex">GoogleCloudVisionV1p2beta1NormalizedVertex</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1normalizedvertex"></a>
<a id="schema_GoogleCloudVisionV1p2beta1NormalizedVertex"></a>
<a id="tocSgooglecloudvisionv1p2beta1normalizedvertex"></a>
<a id="tocsgooglecloudvisionv1p2beta1normalizedvertex"></a>

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

<h2 id="tocS_GoogleCloudVisionV1p2beta1OperationMetadata">GoogleCloudVisionV1p2beta1OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1operationmetadata"></a>
<a id="schema_GoogleCloudVisionV1p2beta1OperationMetadata"></a>
<a id="tocSgooglecloudvisionv1p2beta1operationmetadata"></a>
<a id="tocsgooglecloudvisionv1p2beta1operationmetadata"></a>

```json
{
  "createTime": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Contains metadata for the BatchAnnotateImages operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time when the batch request was received.|
|state|string|false|none|Current state of the batch operation.|
|updateTime|string(google-datetime)|false|none|The time when the operation result was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATED|
|state|RUNNING|
|state|DONE|
|state|CANCELLED|

<h2 id="tocS_GoogleCloudVisionV1p2beta1OutputConfig">GoogleCloudVisionV1p2beta1OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1outputconfig"></a>
<a id="schema_GoogleCloudVisionV1p2beta1OutputConfig"></a>
<a id="tocSgooglecloudvisionv1p2beta1outputconfig"></a>
<a id="tocsgooglecloudvisionv1p2beta1outputconfig"></a>

```json
{
  "batchSize": 0,
  "gcsDestination": {
    "uri": "string"
  }
}
```

The desired output location and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchSize|integer(int32)|false|none|The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.|
|gcsDestination|[GoogleCloudVisionV1p2beta1GcsDestination](#schemagooglecloudvisionv1p2beta1gcsdestination)|false|none|The Google Cloud Storage location to write the output(s) to.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1Page">GoogleCloudVisionV1p2beta1Page</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1page"></a>
<a id="schema_GoogleCloudVisionV1p2beta1Page"></a>
<a id="tocSgooglecloudvisionv1p2beta1page"></a>
<a id="tocsgooglecloudvisionv1p2beta1page"></a>

```json
{
  "blocks": [
    {
      "blockType": "UNKNOWN",
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "paragraphs": [
        {
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          },
          "words": [
            {
              "boundingBox": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "property": {
                "detectedBreak": {
                  "isPrefix": true,
                  "type": "UNKNOWN"
                },
                "detectedLanguages": [
                  {
                    "confidence": 0,
                    "languageCode": "string"
                  }
                ]
              },
              "symbols": [
                {
                  "boundingBox": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ],
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "confidence": 0,
                  "property": {
                    "detectedBreak": {
                      "isPrefix": true,
                      "type": "UNKNOWN"
                    },
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ]
                  },
                  "text": "string"
                }
              ]
            }
          ]
        }
      ],
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      }
    }
  ],
  "confidence": 0,
  "height": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "width": 0
}
```

Detected page from OCR.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocks|[[GoogleCloudVisionV1p2beta1Block](#schemagooglecloudvisionv1p2beta1block)]|false|none|List of blocks of text, images etc on this page.|
|confidence|number(float)|false|none|Confidence of the OCR results on the page. Range [0, 1].|
|height|integer(int32)|false|none|Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.|
|property|[GoogleCloudVisionV1p2beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p2beta1textannotationtextproperty)|false|none|Additional information detected on the page.|
|width|integer(int32)|false|none|Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1Paragraph">GoogleCloudVisionV1p2beta1Paragraph</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1paragraph"></a>
<a id="schema_GoogleCloudVisionV1p2beta1Paragraph"></a>
<a id="tocSgooglecloudvisionv1p2beta1paragraph"></a>
<a id="tocsgooglecloudvisionv1p2beta1paragraph"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "words": [
    {
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "symbols": [
        {
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          },
          "text": "string"
        }
      ]
    }
  ]
}
```

Structural unit of text representing a number of words in certain order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[GoogleCloudVisionV1p2beta1BoundingPoly](#schemagooglecloudvisionv1p2beta1boundingpoly)|false|none|The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results for the paragraph. Range [0, 1].|
|property|[GoogleCloudVisionV1p2beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p2beta1textannotationtextproperty)|false|none|Additional information detected for the paragraph.|
|words|[[GoogleCloudVisionV1p2beta1Word](#schemagooglecloudvisionv1p2beta1word)]|false|none|List of all words in this paragraph.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1Position">GoogleCloudVisionV1p2beta1Position</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1position"></a>
<a id="schema_GoogleCloudVisionV1p2beta1Position"></a>
<a id="tocSgooglecloudvisionv1p2beta1position"></a>
<a id="tocsgooglecloudvisionv1p2beta1position"></a>

```json
{
  "x": 0,
  "y": 0,
  "z": 0
}
```

A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number(float)|false|none|X coordinate.|
|y|number(float)|false|none|Y coordinate.|
|z|number(float)|false|none|Z coordinate (or depth).|

<h2 id="tocS_GoogleCloudVisionV1p2beta1Product">GoogleCloudVisionV1p2beta1Product</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1product"></a>
<a id="schema_GoogleCloudVisionV1p2beta1Product"></a>
<a id="tocSgooglecloudvisionv1p2beta1product"></a>
<a id="tocsgooglecloudvisionv1p2beta1product"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "name": "string",
  "productCategory": "string",
  "productLabels": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

A Product contains ReferenceImages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|User-provided metadata to be stored with this product. Must be at most 4096 characters long.|
|displayName|string|false|none|The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.|
|name|string|false|none|The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.|
|productCategory|string|false|none|Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.|
|productLabels|[[GoogleCloudVisionV1p2beta1ProductKeyValue](#schemagooglecloudvisionv1p2beta1productkeyvalue)]|false|none|Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1ProductKeyValue">GoogleCloudVisionV1p2beta1ProductKeyValue</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1productkeyvalue"></a>
<a id="schema_GoogleCloudVisionV1p2beta1ProductKeyValue"></a>
<a id="tocSgooglecloudvisionv1p2beta1productkeyvalue"></a>
<a id="tocsgooglecloudvisionv1p2beta1productkeyvalue"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

A product label represented as a key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.|
|value|string|false|none|The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1ProductSearchResults">GoogleCloudVisionV1p2beta1ProductSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1productsearchresults"></a>
<a id="schema_GoogleCloudVisionV1p2beta1ProductSearchResults"></a>
<a id="tocSgooglecloudvisionv1p2beta1productsearchresults"></a>
<a id="tocsgooglecloudvisionv1p2beta1productsearchresults"></a>

```json
{
  "indexTime": "string",
  "productGroupedResults": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "objectAnnotations": [
        {
          "languageCode": "string",
          "mid": "string",
          "name": "string",
          "score": 0
        }
      ],
      "results": [
        {
          "image": "string",
          "product": {
            "description": "string",
            "displayName": "string",
            "name": "string",
            "productCategory": "string",
            "productLabels": [
              {
                "key": "string",
                "value": "string"
              }
            ]
          },
          "score": 0
        }
      ]
    }
  ],
  "results": [
    {
      "image": "string",
      "product": {
        "description": "string",
        "displayName": "string",
        "name": "string",
        "productCategory": "string",
        "productLabels": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "score": 0
    }
  ]
}
```

Results for a product search request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexTime|string(google-datetime)|false|none|Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.|
|productGroupedResults|[[GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult](#schemagooglecloudvisionv1p2beta1productsearchresultsgroupedresult)]|false|none|List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.|
|results|[[GoogleCloudVisionV1p2beta1ProductSearchResultsResult](#schemagooglecloudvisionv1p2beta1productsearchresultsresult)]|false|none|List of results, one for each product match.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult">GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1productsearchresultsgroupedresult"></a>
<a id="schema_GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult"></a>
<a id="tocSgooglecloudvisionv1p2beta1productsearchresultsgroupedresult"></a>
<a id="tocsgooglecloudvisionv1p2beta1productsearchresultsgroupedresult"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "objectAnnotations": [
    {
      "languageCode": "string",
      "mid": "string",
      "name": "string",
      "score": 0
    }
  ],
  "results": [
    {
      "image": "string",
      "product": {
        "description": "string",
        "displayName": "string",
        "name": "string",
        "productCategory": "string",
        "productLabels": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "score": 0
    }
  ]
}
```

Information about the products similar to a single product in a query image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p2beta1BoundingPoly](#schemagooglecloudvisionv1p2beta1boundingpoly)|false|none|The bounding polygon around the product detected in the query image.|
|objectAnnotations|[[GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation](#schemagooglecloudvisionv1p2beta1productsearchresultsobjectannotation)]|false|none|List of generic predictions for the object in the bounding box.|
|results|[[GoogleCloudVisionV1p2beta1ProductSearchResultsResult](#schemagooglecloudvisionv1p2beta1productsearchresultsresult)]|false|none|List of results, one for each product match.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation">GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1productsearchresultsobjectannotation"></a>
<a id="schema_GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation"></a>
<a id="tocSgooglecloudvisionv1p2beta1productsearchresultsobjectannotation"></a>
<a id="tocsgooglecloudvisionv1p2beta1productsearchresultsobjectannotation"></a>

```json
{
  "languageCode": "string",
  "mid": "string",
  "name": "string",
  "score": 0
}
```

Prediction for what the object in the bounding box is.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|mid|string|false|none|Object ID that should align with EntityAnnotation mid.|
|name|string|false|none|Object name, expressed in its `language_code` language.|
|score|number(float)|false|none|Score of the result. Range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p2beta1ProductSearchResultsResult">GoogleCloudVisionV1p2beta1ProductSearchResultsResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1productsearchresultsresult"></a>
<a id="schema_GoogleCloudVisionV1p2beta1ProductSearchResultsResult"></a>
<a id="tocSgooglecloudvisionv1p2beta1productsearchresultsresult"></a>
<a id="tocsgooglecloudvisionv1p2beta1productsearchresultsresult"></a>

```json
{
  "image": "string",
  "product": {
    "description": "string",
    "displayName": "string",
    "name": "string",
    "productCategory": "string",
    "productLabels": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "score": 0
}
```

Information about a product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|string|false|none|The resource name of the image from the product that is the closest match to the query.|
|product|[GoogleCloudVisionV1p2beta1Product](#schemagooglecloudvisionv1p2beta1product)|false|none|The Product.|
|score|number(float)|false|none|A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).|

<h2 id="tocS_GoogleCloudVisionV1p2beta1Property">GoogleCloudVisionV1p2beta1Property</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1property"></a>
<a id="schema_GoogleCloudVisionV1p2beta1Property"></a>
<a id="tocSgooglecloudvisionv1p2beta1property"></a>
<a id="tocsgooglecloudvisionv1p2beta1property"></a>

```json
{
  "name": "string",
  "uint64Value": "string",
  "value": "string"
}
```

A `Property` consists of a user-supplied name/value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the property.|
|uint64Value|string(uint64)|false|none|Value of numeric properties.|
|value|string|false|none|Value of the property.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1SafeSearchAnnotation">GoogleCloudVisionV1p2beta1SafeSearchAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1safesearchannotation"></a>
<a id="schema_GoogleCloudVisionV1p2beta1SafeSearchAnnotation"></a>
<a id="tocSgooglecloudvisionv1p2beta1safesearchannotation"></a>
<a id="tocsgooglecloudvisionv1p2beta1safesearchannotation"></a>

```json
{
  "adult": "UNKNOWN",
  "medical": "UNKNOWN",
  "racy": "UNKNOWN",
  "spoof": "UNKNOWN",
  "violence": "UNKNOWN"
}
```

Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adult|string|false|none|Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.|
|medical|string|false|none|Likelihood that this is a medical image.|
|racy|string|false|none|Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.|
|spoof|string|false|none|Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.|
|violence|string|false|none|Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals.|

#### Enumerated Values

|Property|Value|
|---|---|
|adult|UNKNOWN|
|adult|VERY_UNLIKELY|
|adult|UNLIKELY|
|adult|POSSIBLE|
|adult|LIKELY|
|adult|VERY_LIKELY|
|medical|UNKNOWN|
|medical|VERY_UNLIKELY|
|medical|UNLIKELY|
|medical|POSSIBLE|
|medical|LIKELY|
|medical|VERY_LIKELY|
|racy|UNKNOWN|
|racy|VERY_UNLIKELY|
|racy|UNLIKELY|
|racy|POSSIBLE|
|racy|LIKELY|
|racy|VERY_LIKELY|
|spoof|UNKNOWN|
|spoof|VERY_UNLIKELY|
|spoof|UNLIKELY|
|spoof|POSSIBLE|
|spoof|LIKELY|
|spoof|VERY_LIKELY|
|violence|UNKNOWN|
|violence|VERY_UNLIKELY|
|violence|UNLIKELY|
|violence|POSSIBLE|
|violence|LIKELY|
|violence|VERY_LIKELY|

<h2 id="tocS_GoogleCloudVisionV1p2beta1Symbol">GoogleCloudVisionV1p2beta1Symbol</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1symbol"></a>
<a id="schema_GoogleCloudVisionV1p2beta1Symbol"></a>
<a id="tocSgooglecloudvisionv1p2beta1symbol"></a>
<a id="tocsgooglecloudvisionv1p2beta1symbol"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "text": "string"
}
```

A single symbol representation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[GoogleCloudVisionV1p2beta1BoundingPoly](#schemagooglecloudvisionv1p2beta1boundingpoly)|false|none|The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results for the symbol. Range [0, 1].|
|property|[GoogleCloudVisionV1p2beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p2beta1textannotationtextproperty)|false|none|Additional information detected for the symbol.|
|text|string|false|none|The actual UTF-8 representation of the symbol.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1TextAnnotation">GoogleCloudVisionV1p2beta1TextAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1textannotation"></a>
<a id="schema_GoogleCloudVisionV1p2beta1TextAnnotation"></a>
<a id="tocSgooglecloudvisionv1p2beta1textannotation"></a>
<a id="tocsgooglecloudvisionv1p2beta1textannotation"></a>

```json
{
  "pages": [
    {
      "blocks": [
        {
          "blockType": "UNKNOWN",
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "paragraphs": [
            {
              "boundingBox": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "property": {
                "detectedBreak": {
                  "isPrefix": true,
                  "type": "UNKNOWN"
                },
                "detectedLanguages": [
                  {
                    "confidence": 0,
                    "languageCode": "string"
                  }
                ]
              },
              "words": [
                {
                  "boundingBox": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ],
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "confidence": 0,
                  "property": {
                    "detectedBreak": {
                      "isPrefix": true,
                      "type": "UNKNOWN"
                    },
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ]
                  },
                  "symbols": [
                    {
                      "boundingBox": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "property": {
                        "detectedBreak": {
                          "isPrefix": true,
                          "type": "UNKNOWN"
                        },
                        "detectedLanguages": [
                          {
                            "confidence": 0,
                            "languageCode": "string"
                          }
                        ]
                      },
                      "text": "string"
                    }
                  ]
                }
              ]
            }
          ],
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          }
        }
      ],
      "confidence": 0,
      "height": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "width": 0
    }
  ],
  "text": "string"
}
```

TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pages|[[GoogleCloudVisionV1p2beta1Page](#schemagooglecloudvisionv1p2beta1page)]|false|none|List of pages detected by OCR.|
|text|string|false|none|UTF-8 text detected on the pages.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak">GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1textannotationdetectedbreak"></a>
<a id="schema_GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak"></a>
<a id="tocSgooglecloudvisionv1p2beta1textannotationdetectedbreak"></a>
<a id="tocsgooglecloudvisionv1p2beta1textannotationdetectedbreak"></a>

```json
{
  "isPrefix": true,
  "type": "UNKNOWN"
}
```

Detected start or end of a structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPrefix|boolean|false|none|True if break prepends the element.|
|type|string|false|none|Detected break type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNKNOWN|
|type|SPACE|
|type|SURE_SPACE|
|type|EOL_SURE_SPACE|
|type|HYPHEN|
|type|LINE_BREAK|

<h2 id="tocS_GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage">GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1textannotationdetectedlanguage"></a>
<a id="schema_GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage"></a>
<a id="tocSgooglecloudvisionv1p2beta1textannotationdetectedlanguage"></a>
<a id="tocsgooglecloudvisionv1p2beta1textannotationdetectedlanguage"></a>

```json
{
  "confidence": 0,
  "languageCode": "string"
}
```

Detected language for a structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence of detected language. Range [0, 1].|
|languageCode|string|false|none|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1TextAnnotationTextProperty">GoogleCloudVisionV1p2beta1TextAnnotationTextProperty</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1textannotationtextproperty"></a>
<a id="schema_GoogleCloudVisionV1p2beta1TextAnnotationTextProperty"></a>
<a id="tocSgooglecloudvisionv1p2beta1textannotationtextproperty"></a>
<a id="tocsgooglecloudvisionv1p2beta1textannotationtextproperty"></a>

```json
{
  "detectedBreak": {
    "isPrefix": true,
    "type": "UNKNOWN"
  },
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ]
}
```

Additional information detected on the structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedBreak|[GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak](#schemagooglecloudvisionv1p2beta1textannotationdetectedbreak)|false|none|Detected start or end of a text segment.|
|detectedLanguages|[[GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage](#schemagooglecloudvisionv1p2beta1textannotationdetectedlanguage)]|false|none|A list of detected languages together with confidence.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1Vertex">GoogleCloudVisionV1p2beta1Vertex</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1vertex"></a>
<a id="schema_GoogleCloudVisionV1p2beta1Vertex"></a>
<a id="tocSgooglecloudvisionv1p2beta1vertex"></a>
<a id="tocsgooglecloudvisionv1p2beta1vertex"></a>

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

<h2 id="tocS_GoogleCloudVisionV1p2beta1WebDetection">GoogleCloudVisionV1p2beta1WebDetection</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1webdetection"></a>
<a id="schema_GoogleCloudVisionV1p2beta1WebDetection"></a>
<a id="tocSgooglecloudvisionv1p2beta1webdetection"></a>
<a id="tocsgooglecloudvisionv1p2beta1webdetection"></a>

```json
{
  "bestGuessLabels": [
    {
      "label": "string",
      "languageCode": "string"
    }
  ],
  "fullMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "pagesWithMatchingImages": [
    {
      "fullMatchingImages": [
        {
          "score": 0,
          "url": "string"
        }
      ],
      "pageTitle": "string",
      "partialMatchingImages": [
        {
          "score": 0,
          "url": "string"
        }
      ],
      "score": 0,
      "url": "string"
    }
  ],
  "partialMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "visuallySimilarImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "webEntities": [
    {
      "description": "string",
      "entityId": "string",
      "score": 0
    }
  ]
}
```

Relevant information for the image from the Internet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bestGuessLabels|[[GoogleCloudVisionV1p2beta1WebDetectionWebLabel](#schemagooglecloudvisionv1p2beta1webdetectionweblabel)]|false|none|The service's best guess as to the topic of the request image. Inferred from similar images on the open web.|
|fullMatchingImages|[[GoogleCloudVisionV1p2beta1WebDetectionWebImage](#schemagooglecloudvisionv1p2beta1webdetectionwebimage)]|false|none|Fully matching images from the Internet. Can include resized copies of the query image.|
|pagesWithMatchingImages|[[GoogleCloudVisionV1p2beta1WebDetectionWebPage](#schemagooglecloudvisionv1p2beta1webdetectionwebpage)]|false|none|Web pages containing the matching images from the Internet.|
|partialMatchingImages|[[GoogleCloudVisionV1p2beta1WebDetectionWebImage](#schemagooglecloudvisionv1p2beta1webdetectionwebimage)]|false|none|Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.|
|visuallySimilarImages|[[GoogleCloudVisionV1p2beta1WebDetectionWebImage](#schemagooglecloudvisionv1p2beta1webdetectionwebimage)]|false|none|The visually similar image results.|
|webEntities|[[GoogleCloudVisionV1p2beta1WebDetectionWebEntity](#schemagooglecloudvisionv1p2beta1webdetectionwebentity)]|false|none|Deduced entities from similar images on the Internet.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1WebDetectionWebEntity">GoogleCloudVisionV1p2beta1WebDetectionWebEntity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1webdetectionwebentity"></a>
<a id="schema_GoogleCloudVisionV1p2beta1WebDetectionWebEntity"></a>
<a id="tocSgooglecloudvisionv1p2beta1webdetectionwebentity"></a>
<a id="tocsgooglecloudvisionv1p2beta1webdetectionwebentity"></a>

```json
{
  "description": "string",
  "entityId": "string",
  "score": 0
}
```

Entity deduced from similar images on the Internet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Canonical description of the entity, in English.|
|entityId|string|false|none|Opaque entity ID.|
|score|number(float)|false|none|Overall relevancy score for the entity. Not normalized and not comparable across different image queries.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1WebDetectionWebImage">GoogleCloudVisionV1p2beta1WebDetectionWebImage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1webdetectionwebimage"></a>
<a id="schema_GoogleCloudVisionV1p2beta1WebDetectionWebImage"></a>
<a id="tocSgooglecloudvisionv1p2beta1webdetectionwebimage"></a>
<a id="tocsgooglecloudvisionv1p2beta1webdetectionwebimage"></a>

```json
{
  "score": 0,
  "url": "string"
}
```

Metadata for online images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score|number(float)|false|none|(Deprecated) Overall relevancy score for the image.|
|url|string|false|none|The result image URL.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1WebDetectionWebLabel">GoogleCloudVisionV1p2beta1WebDetectionWebLabel</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1webdetectionweblabel"></a>
<a id="schema_GoogleCloudVisionV1p2beta1WebDetectionWebLabel"></a>
<a id="tocSgooglecloudvisionv1p2beta1webdetectionweblabel"></a>
<a id="tocsgooglecloudvisionv1p2beta1webdetectionweblabel"></a>

```json
{
  "label": "string",
  "languageCode": "string"
}
```

Label to provide extra metadata for the web detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|Label for extra metadata.|
|languageCode|string|false|none|The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1WebDetectionWebPage">GoogleCloudVisionV1p2beta1WebDetectionWebPage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1webdetectionwebpage"></a>
<a id="schema_GoogleCloudVisionV1p2beta1WebDetectionWebPage"></a>
<a id="tocSgooglecloudvisionv1p2beta1webdetectionwebpage"></a>
<a id="tocsgooglecloudvisionv1p2beta1webdetectionwebpage"></a>

```json
{
  "fullMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "pageTitle": "string",
  "partialMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "score": 0,
  "url": "string"
}
```

Metadata for web pages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullMatchingImages|[[GoogleCloudVisionV1p2beta1WebDetectionWebImage](#schemagooglecloudvisionv1p2beta1webdetectionwebimage)]|false|none|Fully matching images on the page. Can include resized copies of the query image.|
|pageTitle|string|false|none|Title for the web page, may contain HTML markups.|
|partialMatchingImages|[[GoogleCloudVisionV1p2beta1WebDetectionWebImage](#schemagooglecloudvisionv1p2beta1webdetectionwebimage)]|false|none|Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.|
|score|number(float)|false|none|(Deprecated) Overall relevancy score for the web page.|
|url|string|false|none|The result web page URL.|

<h2 id="tocS_GoogleCloudVisionV1p2beta1Word">GoogleCloudVisionV1p2beta1Word</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p2beta1word"></a>
<a id="schema_GoogleCloudVisionV1p2beta1Word"></a>
<a id="tocSgooglecloudvisionv1p2beta1word"></a>
<a id="tocsgooglecloudvisionv1p2beta1word"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "symbols": [
    {
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "text": "string"
    }
  ]
}
```

A word representation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[GoogleCloudVisionV1p2beta1BoundingPoly](#schemagooglecloudvisionv1p2beta1boundingpoly)|false|none|The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results for the word. Range [0, 1].|
|property|[GoogleCloudVisionV1p2beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p2beta1textannotationtextproperty)|false|none|Additional information detected for the word.|
|symbols|[[GoogleCloudVisionV1p2beta1Symbol](#schemagooglecloudvisionv1p2beta1symbol)]|false|none|List of symbols in the word. The order of the symbols follows the natural reading order.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1AnnotateFileResponse">GoogleCloudVisionV1p3beta1AnnotateFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1annotatefileresponse"></a>
<a id="schema_GoogleCloudVisionV1p3beta1AnnotateFileResponse"></a>
<a id="tocSgooglecloudvisionv1p3beta1annotatefileresponse"></a>
<a id="tocsgooglecloudvisionv1p3beta1annotatefileresponse"></a>

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
  "inputConfig": {
    "content": "string",
    "gcsSource": {
      "uri": "string"
    },
    "mimeType": "string"
  },
  "responses": [
    {
      "context": {
        "pageNumber": 0,
        "uri": "string"
      },
      "cropHintsAnnotation": {
        "cropHints": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "importanceFraction": 0
          }
        ]
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
      "faceAnnotations": [
        {
          "angerLikelihood": "UNKNOWN",
          "blurredLikelihood": "UNKNOWN",
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "detectionConfidence": 0,
          "fdBoundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "headwearLikelihood": "UNKNOWN",
          "joyLikelihood": "UNKNOWN",
          "landmarkingConfidence": 0,
          "landmarks": [
            {
              "position": {
                "x": 0,
                "y": 0,
                "z": 0
              },
              "type": "UNKNOWN_LANDMARK"
            }
          ],
          "panAngle": 0,
          "rollAngle": 0,
          "sorrowLikelihood": "UNKNOWN",
          "surpriseLikelihood": "UNKNOWN",
          "tiltAngle": 0,
          "underExposedLikelihood": "UNKNOWN"
        }
      ],
      "fullTextAnnotation": {
        "pages": [
          {
            "blocks": [
              {
                "blockType": "UNKNOWN",
                "boundingBox": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "paragraphs": [
                  {
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    },
                    "words": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "symbols": [
                          {
                            "boundingBox": {
                              "normalizedVertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ],
                              "vertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ]
                            },
                            "confidence": 0,
                            "property": {
                              "detectedBreak": {
                                "isPrefix": true,
                                "type": "UNKNOWN"
                              },
                              "detectedLanguages": [
                                {
                                  "confidence": 0,
                                  "languageCode": "string"
                                }
                              ]
                            },
                            "text": "string"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                }
              }
            ],
            "confidence": 0,
            "height": 0,
            "property": {
              "detectedBreak": {
                "isPrefix": true,
                "type": "UNKNOWN"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ]
            },
            "width": 0
          }
        ],
        "text": "string"
      },
      "imagePropertiesAnnotation": {
        "dominantColors": {
          "colors": [
            {
              "color": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "pixelFraction": 0,
              "score": 0
            }
          ]
        }
      },
      "labelAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "landmarkAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "localizedObjectAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "languageCode": "string",
          "mid": "string",
          "name": "string",
          "score": 0
        }
      ],
      "logoAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "productSearchResults": {
        "indexTime": "string",
        "productGroupedResults": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "objectAnnotations": [
              {
                "languageCode": "string",
                "mid": "string",
                "name": "string",
                "score": 0
              }
            ],
            "results": [
              {
                "image": "string",
                "product": {
                  "description": "string",
                  "displayName": "string",
                  "name": "string",
                  "productCategory": "string",
                  "productLabels": [
                    {
                      "key": "string",
                      "value": "string"
                    }
                  ]
                },
                "score": 0
              }
            ]
          }
        ],
        "results": [
          {
            "image": "string",
            "product": {
              "description": "string",
              "displayName": "string",
              "name": "string",
              "productCategory": "string",
              "productLabels": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "score": 0
          }
        ]
      },
      "safeSearchAnnotation": {
        "adult": "UNKNOWN",
        "medical": "UNKNOWN",
        "racy": "UNKNOWN",
        "spoof": "UNKNOWN",
        "violence": "UNKNOWN"
      },
      "textAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "webDetection": {
        "bestGuessLabels": [
          {
            "label": "string",
            "languageCode": "string"
          }
        ],
        "fullMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "pagesWithMatchingImages": [
          {
            "fullMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "pageTitle": "string",
            "partialMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "score": 0,
            "url": "string"
          }
        ],
        "partialMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "visuallySimilarImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "webEntities": [
          {
            "description": "string",
            "entityId": "string",
            "score": 0
          }
        ]
      }
    }
  ],
  "totalPages": 0
}
```

Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Status](#schemastatus)|false|none|If set, represents the error message for the failed request. The `responses` field will not be set in this case.|
|inputConfig|[GoogleCloudVisionV1p3beta1InputConfig](#schemagooglecloudvisionv1p3beta1inputconfig)|false|none|Information about the file for which this response is generated.|
|responses|[[GoogleCloudVisionV1p3beta1AnnotateImageResponse](#schemagooglecloudvisionv1p3beta1annotateimageresponse)]|false|none|Individual responses to images found within the file. This field will be empty if the `error` field is set.|
|totalPages|integer(int32)|false|none|This field gives the total number of pages in the file.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1AnnotateImageResponse">GoogleCloudVisionV1p3beta1AnnotateImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1annotateimageresponse"></a>
<a id="schema_GoogleCloudVisionV1p3beta1AnnotateImageResponse"></a>
<a id="tocSgooglecloudvisionv1p3beta1annotateimageresponse"></a>
<a id="tocsgooglecloudvisionv1p3beta1annotateimageresponse"></a>

```json
{
  "context": {
    "pageNumber": 0,
    "uri": "string"
  },
  "cropHintsAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "importanceFraction": 0
      }
    ]
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
  "faceAnnotations": [
    {
      "angerLikelihood": "UNKNOWN",
      "blurredLikelihood": "UNKNOWN",
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "detectionConfidence": 0,
      "fdBoundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "headwearLikelihood": "UNKNOWN",
      "joyLikelihood": "UNKNOWN",
      "landmarkingConfidence": 0,
      "landmarks": [
        {
          "position": {
            "x": 0,
            "y": 0,
            "z": 0
          },
          "type": "UNKNOWN_LANDMARK"
        }
      ],
      "panAngle": 0,
      "rollAngle": 0,
      "sorrowLikelihood": "UNKNOWN",
      "surpriseLikelihood": "UNKNOWN",
      "tiltAngle": 0,
      "underExposedLikelihood": "UNKNOWN"
    }
  ],
  "fullTextAnnotation": {
    "pages": [
      {
        "blocks": [
          {
            "blockType": "UNKNOWN",
            "boundingBox": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "paragraphs": [
              {
                "boundingBox": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                },
                "words": [
                  {
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "text": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "property": {
              "detectedBreak": {
                "isPrefix": true,
                "type": "UNKNOWN"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ]
            }
          }
        ],
        "confidence": 0,
        "height": 0,
        "property": {
          "detectedBreak": {
            "isPrefix": true,
            "type": "UNKNOWN"
          },
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ]
        },
        "width": 0
      }
    ],
    "text": "string"
  },
  "imagePropertiesAnnotation": {
    "dominantColors": {
      "colors": [
        {
          "color": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "pixelFraction": 0,
          "score": 0
        }
      ]
    }
  },
  "labelAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "landmarkAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "localizedObjectAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "languageCode": "string",
      "mid": "string",
      "name": "string",
      "score": 0
    }
  ],
  "logoAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "productSearchResults": {
    "indexTime": "string",
    "productGroupedResults": [
      {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "objectAnnotations": [
          {
            "languageCode": "string",
            "mid": "string",
            "name": "string",
            "score": 0
          }
        ],
        "results": [
          {
            "image": "string",
            "product": {
              "description": "string",
              "displayName": "string",
              "name": "string",
              "productCategory": "string",
              "productLabels": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "score": 0
          }
        ]
      }
    ],
    "results": [
      {
        "image": "string",
        "product": {
          "description": "string",
          "displayName": "string",
          "name": "string",
          "productCategory": "string",
          "productLabels": [
            {
              "key": "string",
              "value": "string"
            }
          ]
        },
        "score": 0
      }
    ]
  },
  "safeSearchAnnotation": {
    "adult": "UNKNOWN",
    "medical": "UNKNOWN",
    "racy": "UNKNOWN",
    "spoof": "UNKNOWN",
    "violence": "UNKNOWN"
  },
  "textAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "webDetection": {
    "bestGuessLabels": [
      {
        "label": "string",
        "languageCode": "string"
      }
    ],
    "fullMatchingImages": [
      {
        "score": 0,
        "url": "string"
      }
    ],
    "pagesWithMatchingImages": [
      {
        "fullMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "pageTitle": "string",
        "partialMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "score": 0,
        "url": "string"
      }
    ],
    "partialMatchingImages": [
      {
        "score": 0,
        "url": "string"
      }
    ],
    "visuallySimilarImages": [
      {
        "score": 0,
        "url": "string"
      }
    ],
    "webEntities": [
      {
        "description": "string",
        "entityId": "string",
        "score": 0
      }
    ]
  }
}
```

Response to an image annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[GoogleCloudVisionV1p3beta1ImageAnnotationContext](#schemagooglecloudvisionv1p3beta1imageannotationcontext)|false|none|If present, contextual information is needed to understand where this image comes from.|
|cropHintsAnnotation|[GoogleCloudVisionV1p3beta1CropHintsAnnotation](#schemagooglecloudvisionv1p3beta1crophintsannotation)|false|none|If present, crop hints have completed successfully.|
|error|[Status](#schemastatus)|false|none|If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.|
|faceAnnotations|[[GoogleCloudVisionV1p3beta1FaceAnnotation](#schemagooglecloudvisionv1p3beta1faceannotation)]|false|none|If present, face detection has completed successfully.|
|fullTextAnnotation|[GoogleCloudVisionV1p3beta1TextAnnotation](#schemagooglecloudvisionv1p3beta1textannotation)|false|none|If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.|
|imagePropertiesAnnotation|[GoogleCloudVisionV1p3beta1ImageProperties](#schemagooglecloudvisionv1p3beta1imageproperties)|false|none|If present, image properties were extracted successfully.|
|labelAnnotations|[[GoogleCloudVisionV1p3beta1EntityAnnotation](#schemagooglecloudvisionv1p3beta1entityannotation)]|false|none|If present, label detection has completed successfully.|
|landmarkAnnotations|[[GoogleCloudVisionV1p3beta1EntityAnnotation](#schemagooglecloudvisionv1p3beta1entityannotation)]|false|none|If present, landmark detection has completed successfully.|
|localizedObjectAnnotations|[[GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation](#schemagooglecloudvisionv1p3beta1localizedobjectannotation)]|false|none|If present, localized object detection has completed successfully. This will be sorted descending by confidence score.|
|logoAnnotations|[[GoogleCloudVisionV1p3beta1EntityAnnotation](#schemagooglecloudvisionv1p3beta1entityannotation)]|false|none|If present, logo detection has completed successfully.|
|productSearchResults|[GoogleCloudVisionV1p3beta1ProductSearchResults](#schemagooglecloudvisionv1p3beta1productsearchresults)|false|none|If present, product search has completed successfully.|
|safeSearchAnnotation|[GoogleCloudVisionV1p3beta1SafeSearchAnnotation](#schemagooglecloudvisionv1p3beta1safesearchannotation)|false|none|If present, safe-search annotation has completed successfully.|
|textAnnotations|[[GoogleCloudVisionV1p3beta1EntityAnnotation](#schemagooglecloudvisionv1p3beta1entityannotation)]|false|none|If present, text (OCR) detection has completed successfully.|
|webDetection|[GoogleCloudVisionV1p3beta1WebDetection](#schemagooglecloudvisionv1p3beta1webdetection)|false|none|If present, web detection has completed successfully.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse">GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1asyncannotatefileresponse"></a>
<a id="schema_GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse"></a>
<a id="tocSgooglecloudvisionv1p3beta1asyncannotatefileresponse"></a>
<a id="tocsgooglecloudvisionv1p3beta1asyncannotatefileresponse"></a>

```json
{
  "outputConfig": {
    "batchSize": 0,
    "gcsDestination": {
      "uri": "string"
    }
  }
}
```

The response for a single offline file annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputConfig|[GoogleCloudVisionV1p3beta1OutputConfig](#schemagooglecloudvisionv1p3beta1outputconfig)|false|none|The output location and metadata from AsyncAnnotateFileRequest.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponse">GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1asyncbatchannotatefilesresponse"></a>
<a id="schema_GoogleCloudVisionV1p3beta1AsyncBatchAnnotateFilesResponse"></a>
<a id="tocSgooglecloudvisionv1p3beta1asyncbatchannotatefilesresponse"></a>
<a id="tocsgooglecloudvisionv1p3beta1asyncbatchannotatefilesresponse"></a>

```json
{
  "responses": [
    {
      "outputConfig": {
        "batchSize": 0,
        "gcsDestination": {
          "uri": "string"
        }
      }
    }
  ]
}
```

Response to an async batch file annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[GoogleCloudVisionV1p3beta1AsyncAnnotateFileResponse](#schemagooglecloudvisionv1p3beta1asyncannotatefileresponse)]|false|none|The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1BatchOperationMetadata">GoogleCloudVisionV1p3beta1BatchOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1batchoperationmetadata"></a>
<a id="schema_GoogleCloudVisionV1p3beta1BatchOperationMetadata"></a>
<a id="tocSgooglecloudvisionv1p3beta1batchoperationmetadata"></a>
<a id="tocsgooglecloudvisionv1p3beta1batchoperationmetadata"></a>

```json
{
  "endTime": "string",
  "state": "STATE_UNSPECIFIED",
  "submitTime": "string"
}
```

Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The time when the batch request is finished and google.longrunning.Operation.done is set to true.|
|state|string|false|none|The current state of the batch operation.|
|submitTime|string(google-datetime)|false|none|The time when the batch request was submitted to the server.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PROCESSING|
|state|SUCCESSFUL|
|state|FAILED|
|state|CANCELLED|

<h2 id="tocS_GoogleCloudVisionV1p3beta1Block">GoogleCloudVisionV1p3beta1Block</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1block"></a>
<a id="schema_GoogleCloudVisionV1p3beta1Block"></a>
<a id="tocSgooglecloudvisionv1p3beta1block"></a>
<a id="tocsgooglecloudvisionv1p3beta1block"></a>

```json
{
  "blockType": "UNKNOWN",
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "paragraphs": [
    {
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "words": [
        {
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          },
          "symbols": [
            {
              "boundingBox": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "property": {
                "detectedBreak": {
                  "isPrefix": true,
                  "type": "UNKNOWN"
                },
                "detectedLanguages": [
                  {
                    "confidence": 0,
                    "languageCode": "string"
                  }
                ]
              },
              "text": "string"
            }
          ]
        }
      ]
    }
  ],
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  }
}
```

Logical element on the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockType|string|false|none|Detected block type (text, image etc) for this block.|
|boundingBox|[GoogleCloudVisionV1p3beta1BoundingPoly](#schemagooglecloudvisionv1p3beta1boundingpoly)|false|none|The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results on the block. Range [0, 1].|
|paragraphs|[[GoogleCloudVisionV1p3beta1Paragraph](#schemagooglecloudvisionv1p3beta1paragraph)]|false|none|List of paragraphs in this block (if this blocks is of type text).|
|property|[GoogleCloudVisionV1p3beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p3beta1textannotationtextproperty)|false|none|Additional information detected for the block.|

#### Enumerated Values

|Property|Value|
|---|---|
|blockType|UNKNOWN|
|blockType|TEXT|
|blockType|TABLE|
|blockType|PICTURE|
|blockType|RULER|
|blockType|BARCODE|

<h2 id="tocS_GoogleCloudVisionV1p3beta1BoundingPoly">GoogleCloudVisionV1p3beta1BoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1boundingpoly"></a>
<a id="schema_GoogleCloudVisionV1p3beta1BoundingPoly"></a>
<a id="tocSgooglecloudvisionv1p3beta1boundingpoly"></a>
<a id="tocsgooglecloudvisionv1p3beta1boundingpoly"></a>

```json
{
  "normalizedVertices": [
    {
      "x": 0,
      "y": 0
    }
  ],
  "vertices": [
    {
      "x": 0,
      "y": 0
    }
  ]
}
```

A bounding polygon for the detected image annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedVertices|[[GoogleCloudVisionV1p3beta1NormalizedVertex](#schemagooglecloudvisionv1p3beta1normalizedvertex)]|false|none|The bounding polygon normalized vertices.|
|vertices|[[GoogleCloudVisionV1p3beta1Vertex](#schemagooglecloudvisionv1p3beta1vertex)]|false|none|The bounding polygon vertices.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1ColorInfo">GoogleCloudVisionV1p3beta1ColorInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1colorinfo"></a>
<a id="schema_GoogleCloudVisionV1p3beta1ColorInfo"></a>
<a id="tocSgooglecloudvisionv1p3beta1colorinfo"></a>
<a id="tocsgooglecloudvisionv1p3beta1colorinfo"></a>

```json
{
  "color": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "pixelFraction": 0,
  "score": 0
}
```

Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|[Color](#schemacolor)|false|none|RGB components of the color.|
|pixelFraction|number(float)|false|none|The fraction of pixels the color occupies in the image. Value in range [0, 1].|
|score|number(float)|false|none|Image-specific score for this color. Value in range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p3beta1CropHint">GoogleCloudVisionV1p3beta1CropHint</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1crophint"></a>
<a id="schema_GoogleCloudVisionV1p3beta1CropHint"></a>
<a id="tocSgooglecloudvisionv1p3beta1crophint"></a>
<a id="tocsgooglecloudvisionv1p3beta1crophint"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "importanceFraction": 0
}
```

Single crop hint that is used to generate a new crop when serving an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p3beta1BoundingPoly](#schemagooglecloudvisionv1p3beta1boundingpoly)|false|none|The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale.|
|confidence|number(float)|false|none|Confidence of this being a salient region. Range [0, 1].|
|importanceFraction|number(float)|false|none|Fraction of importance of this salient region with respect to the original image.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1CropHintsAnnotation">GoogleCloudVisionV1p3beta1CropHintsAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1crophintsannotation"></a>
<a id="schema_GoogleCloudVisionV1p3beta1CropHintsAnnotation"></a>
<a id="tocSgooglecloudvisionv1p3beta1crophintsannotation"></a>
<a id="tocsgooglecloudvisionv1p3beta1crophintsannotation"></a>

```json
{
  "cropHints": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "importanceFraction": 0
    }
  ]
}
```

Set of crop hints that are used to generate new crops when serving images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cropHints|[[GoogleCloudVisionV1p3beta1CropHint](#schemagooglecloudvisionv1p3beta1crophint)]|false|none|Crop hint results.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1DominantColorsAnnotation">GoogleCloudVisionV1p3beta1DominantColorsAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1dominantcolorsannotation"></a>
<a id="schema_GoogleCloudVisionV1p3beta1DominantColorsAnnotation"></a>
<a id="tocSgooglecloudvisionv1p3beta1dominantcolorsannotation"></a>
<a id="tocsgooglecloudvisionv1p3beta1dominantcolorsannotation"></a>

```json
{
  "colors": [
    {
      "color": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "pixelFraction": 0,
      "score": 0
    }
  ]
}
```

Set of dominant colors and their corresponding scores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|[[GoogleCloudVisionV1p3beta1ColorInfo](#schemagooglecloudvisionv1p3beta1colorinfo)]|false|none|RGB color values with their score and pixel fraction.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1EntityAnnotation">GoogleCloudVisionV1p3beta1EntityAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1entityannotation"></a>
<a id="schema_GoogleCloudVisionV1p3beta1EntityAnnotation"></a>
<a id="tocSgooglecloudvisionv1p3beta1entityannotation"></a>
<a id="tocsgooglecloudvisionv1p3beta1entityannotation"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "description": "string",
  "locale": "string",
  "locations": [
    {
      "latLng": {
        "latitude": 0,
        "longitude": 0
      }
    }
  ],
  "mid": "string",
  "properties": [
    {
      "name": "string",
      "uint64Value": "string",
      "value": "string"
    }
  ],
  "score": 0,
  "topicality": 0
}
```

Set of detected entity features.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p3beta1BoundingPoly](#schemagooglecloudvisionv1p3beta1boundingpoly)|false|none|Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.|
|confidence|number(float)|false|none|**Deprecated.** **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].|
|description|string|false|none|Entity textual description, expressed in its `locale` language.|
|locale|string|false|none|The language code for the locale in which the entity textual `description` is expressed.|
|locations|[[GoogleCloudVisionV1p3beta1LocationInfo](#schemagooglecloudvisionv1p3beta1locationinfo)]|false|none|The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.|
|mid|string|false|none|Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).|
|properties|[[GoogleCloudVisionV1p3beta1Property](#schemagooglecloudvisionv1p3beta1property)]|false|none|Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.|
|score|number(float)|false|none|Overall score of the result. Range [0, 1].|
|topicality|number(float)|false|none|The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p3beta1FaceAnnotation">GoogleCloudVisionV1p3beta1FaceAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1faceannotation"></a>
<a id="schema_GoogleCloudVisionV1p3beta1FaceAnnotation"></a>
<a id="tocSgooglecloudvisionv1p3beta1faceannotation"></a>
<a id="tocsgooglecloudvisionv1p3beta1faceannotation"></a>

```json
{
  "angerLikelihood": "UNKNOWN",
  "blurredLikelihood": "UNKNOWN",
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "detectionConfidence": 0,
  "fdBoundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "headwearLikelihood": "UNKNOWN",
  "joyLikelihood": "UNKNOWN",
  "landmarkingConfidence": 0,
  "landmarks": [
    {
      "position": {
        "x": 0,
        "y": 0,
        "z": 0
      },
      "type": "UNKNOWN_LANDMARK"
    }
  ],
  "panAngle": 0,
  "rollAngle": 0,
  "sorrowLikelihood": "UNKNOWN",
  "surpriseLikelihood": "UNKNOWN",
  "tiltAngle": 0,
  "underExposedLikelihood": "UNKNOWN"
}
```

A face annotation object contains the results of face detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angerLikelihood|string|false|none|Anger likelihood.|
|blurredLikelihood|string|false|none|Blurred likelihood.|
|boundingPoly|[GoogleCloudVisionV1p3beta1BoundingPoly](#schemagooglecloudvisionv1p3beta1boundingpoly)|false|none|The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.|
|detectionConfidence|number(float)|false|none|Detection confidence. Range [0, 1].|
|fdBoundingPoly|[GoogleCloudVisionV1p3beta1BoundingPoly](#schemagooglecloudvisionv1p3beta1boundingpoly)|false|none|The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix.|
|headwearLikelihood|string|false|none|Headwear likelihood.|
|joyLikelihood|string|false|none|Joy likelihood.|
|landmarkingConfidence|number(float)|false|none|Face landmarking confidence. Range [0, 1].|
|landmarks|[[GoogleCloudVisionV1p3beta1FaceAnnotationLandmark](#schemagooglecloudvisionv1p3beta1faceannotationlandmark)]|false|none|Detected face landmarks.|
|panAngle|number(float)|false|none|Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].|
|rollAngle|number(float)|false|none|Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].|
|sorrowLikelihood|string|false|none|Sorrow likelihood.|
|surpriseLikelihood|string|false|none|Surprise likelihood.|
|tiltAngle|number(float)|false|none|Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].|
|underExposedLikelihood|string|false|none|Under-exposed likelihood.|

#### Enumerated Values

|Property|Value|
|---|---|
|angerLikelihood|UNKNOWN|
|angerLikelihood|VERY_UNLIKELY|
|angerLikelihood|UNLIKELY|
|angerLikelihood|POSSIBLE|
|angerLikelihood|LIKELY|
|angerLikelihood|VERY_LIKELY|
|blurredLikelihood|UNKNOWN|
|blurredLikelihood|VERY_UNLIKELY|
|blurredLikelihood|UNLIKELY|
|blurredLikelihood|POSSIBLE|
|blurredLikelihood|LIKELY|
|blurredLikelihood|VERY_LIKELY|
|headwearLikelihood|UNKNOWN|
|headwearLikelihood|VERY_UNLIKELY|
|headwearLikelihood|UNLIKELY|
|headwearLikelihood|POSSIBLE|
|headwearLikelihood|LIKELY|
|headwearLikelihood|VERY_LIKELY|
|joyLikelihood|UNKNOWN|
|joyLikelihood|VERY_UNLIKELY|
|joyLikelihood|UNLIKELY|
|joyLikelihood|POSSIBLE|
|joyLikelihood|LIKELY|
|joyLikelihood|VERY_LIKELY|
|sorrowLikelihood|UNKNOWN|
|sorrowLikelihood|VERY_UNLIKELY|
|sorrowLikelihood|UNLIKELY|
|sorrowLikelihood|POSSIBLE|
|sorrowLikelihood|LIKELY|
|sorrowLikelihood|VERY_LIKELY|
|surpriseLikelihood|UNKNOWN|
|surpriseLikelihood|VERY_UNLIKELY|
|surpriseLikelihood|UNLIKELY|
|surpriseLikelihood|POSSIBLE|
|surpriseLikelihood|LIKELY|
|surpriseLikelihood|VERY_LIKELY|
|underExposedLikelihood|UNKNOWN|
|underExposedLikelihood|VERY_UNLIKELY|
|underExposedLikelihood|UNLIKELY|
|underExposedLikelihood|POSSIBLE|
|underExposedLikelihood|LIKELY|
|underExposedLikelihood|VERY_LIKELY|

<h2 id="tocS_GoogleCloudVisionV1p3beta1FaceAnnotationLandmark">GoogleCloudVisionV1p3beta1FaceAnnotationLandmark</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1faceannotationlandmark"></a>
<a id="schema_GoogleCloudVisionV1p3beta1FaceAnnotationLandmark"></a>
<a id="tocSgooglecloudvisionv1p3beta1faceannotationlandmark"></a>
<a id="tocsgooglecloudvisionv1p3beta1faceannotationlandmark"></a>

```json
{
  "position": {
    "x": 0,
    "y": 0,
    "z": 0
  },
  "type": "UNKNOWN_LANDMARK"
}
```

A face-specific landmark (for example, a face feature).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[GoogleCloudVisionV1p3beta1Position](#schemagooglecloudvisionv1p3beta1position)|false|none|Face landmark position.|
|type|string|false|none|Face landmark type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNKNOWN_LANDMARK|
|type|LEFT_EYE|
|type|RIGHT_EYE|
|type|LEFT_OF_LEFT_EYEBROW|
|type|RIGHT_OF_LEFT_EYEBROW|
|type|LEFT_OF_RIGHT_EYEBROW|
|type|RIGHT_OF_RIGHT_EYEBROW|
|type|MIDPOINT_BETWEEN_EYES|
|type|NOSE_TIP|
|type|UPPER_LIP|
|type|LOWER_LIP|
|type|MOUTH_LEFT|
|type|MOUTH_RIGHT|
|type|MOUTH_CENTER|
|type|NOSE_BOTTOM_RIGHT|
|type|NOSE_BOTTOM_LEFT|
|type|NOSE_BOTTOM_CENTER|
|type|LEFT_EYE_TOP_BOUNDARY|
|type|LEFT_EYE_RIGHT_CORNER|
|type|LEFT_EYE_BOTTOM_BOUNDARY|
|type|LEFT_EYE_LEFT_CORNER|
|type|RIGHT_EYE_TOP_BOUNDARY|
|type|RIGHT_EYE_RIGHT_CORNER|
|type|RIGHT_EYE_BOTTOM_BOUNDARY|
|type|RIGHT_EYE_LEFT_CORNER|
|type|LEFT_EYEBROW_UPPER_MIDPOINT|
|type|RIGHT_EYEBROW_UPPER_MIDPOINT|
|type|LEFT_EAR_TRAGION|
|type|RIGHT_EAR_TRAGION|
|type|LEFT_EYE_PUPIL|
|type|RIGHT_EYE_PUPIL|
|type|FOREHEAD_GLABELLA|
|type|CHIN_GNATHION|
|type|CHIN_LEFT_GONION|
|type|CHIN_RIGHT_GONION|
|type|LEFT_CHEEK_CENTER|
|type|RIGHT_CHEEK_CENTER|

<h2 id="tocS_GoogleCloudVisionV1p3beta1GcsDestination">GoogleCloudVisionV1p3beta1GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1gcsdestination"></a>
<a id="schema_GoogleCloudVisionV1p3beta1GcsDestination"></a>
<a id="tocSgooglecloudvisionv1p3beta1gcsdestination"></a>
<a id="tocsgooglecloudvisionv1p3beta1gcsdestination"></a>

```json
{
  "uri": "string"
}
```

The Google Cloud Storage location where the output will be written to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1GcsSource">GoogleCloudVisionV1p3beta1GcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1gcssource"></a>
<a id="schema_GoogleCloudVisionV1p3beta1GcsSource"></a>
<a id="tocSgooglecloudvisionv1p3beta1gcssource"></a>
<a id="tocsgooglecloudvisionv1p3beta1gcssource"></a>

```json
{
  "uri": "string"
}
```

The Google Cloud Storage location where the input will be read from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1ImageAnnotationContext">GoogleCloudVisionV1p3beta1ImageAnnotationContext</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1imageannotationcontext"></a>
<a id="schema_GoogleCloudVisionV1p3beta1ImageAnnotationContext"></a>
<a id="tocSgooglecloudvisionv1p3beta1imageannotationcontext"></a>
<a id="tocsgooglecloudvisionv1p3beta1imageannotationcontext"></a>

```json
{
  "pageNumber": 0,
  "uri": "string"
}
```

If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageNumber|integer(int32)|false|none|If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.|
|uri|string|false|none|The URI of the file used to produce the image.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1ImageProperties">GoogleCloudVisionV1p3beta1ImageProperties</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1imageproperties"></a>
<a id="schema_GoogleCloudVisionV1p3beta1ImageProperties"></a>
<a id="tocSgooglecloudvisionv1p3beta1imageproperties"></a>
<a id="tocsgooglecloudvisionv1p3beta1imageproperties"></a>

```json
{
  "dominantColors": {
    "colors": [
      {
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "pixelFraction": 0,
        "score": 0
      }
    ]
  }
}
```

Stores image properties, such as dominant colors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dominantColors|[GoogleCloudVisionV1p3beta1DominantColorsAnnotation](#schemagooglecloudvisionv1p3beta1dominantcolorsannotation)|false|none|If present, dominant colors completed successfully.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1ImportProductSetsResponse">GoogleCloudVisionV1p3beta1ImportProductSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1importproductsetsresponse"></a>
<a id="schema_GoogleCloudVisionV1p3beta1ImportProductSetsResponse"></a>
<a id="tocSgooglecloudvisionv1p3beta1importproductsetsresponse"></a>
<a id="tocsgooglecloudvisionv1p3beta1importproductsetsresponse"></a>

```json
{
  "referenceImages": [
    {
      "boundingPolys": [
        {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        }
      ],
      "name": "string",
      "uri": "string"
    }
  ],
  "statuses": [
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

Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|referenceImages|[[GoogleCloudVisionV1p3beta1ReferenceImage](#schemagooglecloudvisionv1p3beta1referenceimage)]|false|none|The list of reference_images that are imported successfully.|
|statuses|[[Status](#schemastatus)]|false|none|The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1InputConfig">GoogleCloudVisionV1p3beta1InputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1inputconfig"></a>
<a id="schema_GoogleCloudVisionV1p3beta1InputConfig"></a>
<a id="tocSgooglecloudvisionv1p3beta1inputconfig"></a>
<a id="tocsgooglecloudvisionv1p3beta1inputconfig"></a>

```json
{
  "content": "string",
  "gcsSource": {
    "uri": "string"
  },
  "mimeType": "string"
}
```

The desired input location and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.|
|gcsSource|[GoogleCloudVisionV1p3beta1GcsSource](#schemagooglecloudvisionv1p3beta1gcssource)|false|none|The Google Cloud Storage location to read the input from.|
|mimeType|string|false|none|The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation">GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1localizedobjectannotation"></a>
<a id="schema_GoogleCloudVisionV1p3beta1LocalizedObjectAnnotation"></a>
<a id="tocSgooglecloudvisionv1p3beta1localizedobjectannotation"></a>
<a id="tocsgooglecloudvisionv1p3beta1localizedobjectannotation"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "languageCode": "string",
  "mid": "string",
  "name": "string",
  "score": 0
}
```

Set of detected objects with bounding boxes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p3beta1BoundingPoly](#schemagooglecloudvisionv1p3beta1boundingpoly)|false|none|Image region to which this object belongs. This must be populated.|
|languageCode|string|false|none|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|mid|string|false|none|Object ID that should align with EntityAnnotation mid.|
|name|string|false|none|Object name, expressed in its `language_code` language.|
|score|number(float)|false|none|Score of the result. Range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p3beta1LocationInfo">GoogleCloudVisionV1p3beta1LocationInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1locationinfo"></a>
<a id="schema_GoogleCloudVisionV1p3beta1LocationInfo"></a>
<a id="tocSgooglecloudvisionv1p3beta1locationinfo"></a>
<a id="tocsgooglecloudvisionv1p3beta1locationinfo"></a>

```json
{
  "latLng": {
    "latitude": 0,
    "longitude": 0
  }
}
```

Detected entity location information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latLng|[LatLng](#schemalatlng)|false|none|lat/long location coordinates.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1NormalizedVertex">GoogleCloudVisionV1p3beta1NormalizedVertex</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1normalizedvertex"></a>
<a id="schema_GoogleCloudVisionV1p3beta1NormalizedVertex"></a>
<a id="tocSgooglecloudvisionv1p3beta1normalizedvertex"></a>
<a id="tocsgooglecloudvisionv1p3beta1normalizedvertex"></a>

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

<h2 id="tocS_GoogleCloudVisionV1p3beta1OperationMetadata">GoogleCloudVisionV1p3beta1OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1operationmetadata"></a>
<a id="schema_GoogleCloudVisionV1p3beta1OperationMetadata"></a>
<a id="tocSgooglecloudvisionv1p3beta1operationmetadata"></a>
<a id="tocsgooglecloudvisionv1p3beta1operationmetadata"></a>

```json
{
  "createTime": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Contains metadata for the BatchAnnotateImages operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time when the batch request was received.|
|state|string|false|none|Current state of the batch operation.|
|updateTime|string(google-datetime)|false|none|The time when the operation result was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATED|
|state|RUNNING|
|state|DONE|
|state|CANCELLED|

<h2 id="tocS_GoogleCloudVisionV1p3beta1OutputConfig">GoogleCloudVisionV1p3beta1OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1outputconfig"></a>
<a id="schema_GoogleCloudVisionV1p3beta1OutputConfig"></a>
<a id="tocSgooglecloudvisionv1p3beta1outputconfig"></a>
<a id="tocsgooglecloudvisionv1p3beta1outputconfig"></a>

```json
{
  "batchSize": 0,
  "gcsDestination": {
    "uri": "string"
  }
}
```

The desired output location and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchSize|integer(int32)|false|none|The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.|
|gcsDestination|[GoogleCloudVisionV1p3beta1GcsDestination](#schemagooglecloudvisionv1p3beta1gcsdestination)|false|none|The Google Cloud Storage location to write the output(s) to.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1Page">GoogleCloudVisionV1p3beta1Page</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1page"></a>
<a id="schema_GoogleCloudVisionV1p3beta1Page"></a>
<a id="tocSgooglecloudvisionv1p3beta1page"></a>
<a id="tocsgooglecloudvisionv1p3beta1page"></a>

```json
{
  "blocks": [
    {
      "blockType": "UNKNOWN",
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "paragraphs": [
        {
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          },
          "words": [
            {
              "boundingBox": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "property": {
                "detectedBreak": {
                  "isPrefix": true,
                  "type": "UNKNOWN"
                },
                "detectedLanguages": [
                  {
                    "confidence": 0,
                    "languageCode": "string"
                  }
                ]
              },
              "symbols": [
                {
                  "boundingBox": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ],
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "confidence": 0,
                  "property": {
                    "detectedBreak": {
                      "isPrefix": true,
                      "type": "UNKNOWN"
                    },
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ]
                  },
                  "text": "string"
                }
              ]
            }
          ]
        }
      ],
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      }
    }
  ],
  "confidence": 0,
  "height": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "width": 0
}
```

Detected page from OCR.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocks|[[GoogleCloudVisionV1p3beta1Block](#schemagooglecloudvisionv1p3beta1block)]|false|none|List of blocks of text, images etc on this page.|
|confidence|number(float)|false|none|Confidence of the OCR results on the page. Range [0, 1].|
|height|integer(int32)|false|none|Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.|
|property|[GoogleCloudVisionV1p3beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p3beta1textannotationtextproperty)|false|none|Additional information detected on the page.|
|width|integer(int32)|false|none|Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1Paragraph">GoogleCloudVisionV1p3beta1Paragraph</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1paragraph"></a>
<a id="schema_GoogleCloudVisionV1p3beta1Paragraph"></a>
<a id="tocSgooglecloudvisionv1p3beta1paragraph"></a>
<a id="tocsgooglecloudvisionv1p3beta1paragraph"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "words": [
    {
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "symbols": [
        {
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          },
          "text": "string"
        }
      ]
    }
  ]
}
```

Structural unit of text representing a number of words in certain order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[GoogleCloudVisionV1p3beta1BoundingPoly](#schemagooglecloudvisionv1p3beta1boundingpoly)|false|none|The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results for the paragraph. Range [0, 1].|
|property|[GoogleCloudVisionV1p3beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p3beta1textannotationtextproperty)|false|none|Additional information detected for the paragraph.|
|words|[[GoogleCloudVisionV1p3beta1Word](#schemagooglecloudvisionv1p3beta1word)]|false|none|List of all words in this paragraph.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1Position">GoogleCloudVisionV1p3beta1Position</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1position"></a>
<a id="schema_GoogleCloudVisionV1p3beta1Position"></a>
<a id="tocSgooglecloudvisionv1p3beta1position"></a>
<a id="tocsgooglecloudvisionv1p3beta1position"></a>

```json
{
  "x": 0,
  "y": 0,
  "z": 0
}
```

A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number(float)|false|none|X coordinate.|
|y|number(float)|false|none|Y coordinate.|
|z|number(float)|false|none|Z coordinate (or depth).|

<h2 id="tocS_GoogleCloudVisionV1p3beta1Product">GoogleCloudVisionV1p3beta1Product</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1product"></a>
<a id="schema_GoogleCloudVisionV1p3beta1Product"></a>
<a id="tocSgooglecloudvisionv1p3beta1product"></a>
<a id="tocsgooglecloudvisionv1p3beta1product"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "name": "string",
  "productCategory": "string",
  "productLabels": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

A Product contains ReferenceImages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|User-provided metadata to be stored with this product. Must be at most 4096 characters long.|
|displayName|string|false|none|The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.|
|name|string|false|none|The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.|
|productCategory|string|false|none|Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.|
|productLabels|[[GoogleCloudVisionV1p3beta1ProductKeyValue](#schemagooglecloudvisionv1p3beta1productkeyvalue)]|false|none|Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1ProductKeyValue">GoogleCloudVisionV1p3beta1ProductKeyValue</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1productkeyvalue"></a>
<a id="schema_GoogleCloudVisionV1p3beta1ProductKeyValue"></a>
<a id="tocSgooglecloudvisionv1p3beta1productkeyvalue"></a>
<a id="tocsgooglecloudvisionv1p3beta1productkeyvalue"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

A product label represented as a key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.|
|value|string|false|none|The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1ProductSearchResults">GoogleCloudVisionV1p3beta1ProductSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1productsearchresults"></a>
<a id="schema_GoogleCloudVisionV1p3beta1ProductSearchResults"></a>
<a id="tocSgooglecloudvisionv1p3beta1productsearchresults"></a>
<a id="tocsgooglecloudvisionv1p3beta1productsearchresults"></a>

```json
{
  "indexTime": "string",
  "productGroupedResults": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "objectAnnotations": [
        {
          "languageCode": "string",
          "mid": "string",
          "name": "string",
          "score": 0
        }
      ],
      "results": [
        {
          "image": "string",
          "product": {
            "description": "string",
            "displayName": "string",
            "name": "string",
            "productCategory": "string",
            "productLabels": [
              {
                "key": "string",
                "value": "string"
              }
            ]
          },
          "score": 0
        }
      ]
    }
  ],
  "results": [
    {
      "image": "string",
      "product": {
        "description": "string",
        "displayName": "string",
        "name": "string",
        "productCategory": "string",
        "productLabels": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "score": 0
    }
  ]
}
```

Results for a product search request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexTime|string(google-datetime)|false|none|Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.|
|productGroupedResults|[[GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult](#schemagooglecloudvisionv1p3beta1productsearchresultsgroupedresult)]|false|none|List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.|
|results|[[GoogleCloudVisionV1p3beta1ProductSearchResultsResult](#schemagooglecloudvisionv1p3beta1productsearchresultsresult)]|false|none|List of results, one for each product match.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult">GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1productsearchresultsgroupedresult"></a>
<a id="schema_GoogleCloudVisionV1p3beta1ProductSearchResultsGroupedResult"></a>
<a id="tocSgooglecloudvisionv1p3beta1productsearchresultsgroupedresult"></a>
<a id="tocsgooglecloudvisionv1p3beta1productsearchresultsgroupedresult"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "objectAnnotations": [
    {
      "languageCode": "string",
      "mid": "string",
      "name": "string",
      "score": 0
    }
  ],
  "results": [
    {
      "image": "string",
      "product": {
        "description": "string",
        "displayName": "string",
        "name": "string",
        "productCategory": "string",
        "productLabels": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "score": 0
    }
  ]
}
```

Information about the products similar to a single product in a query image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p3beta1BoundingPoly](#schemagooglecloudvisionv1p3beta1boundingpoly)|false|none|The bounding polygon around the product detected in the query image.|
|objectAnnotations|[[GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation](#schemagooglecloudvisionv1p3beta1productsearchresultsobjectannotation)]|false|none|List of generic predictions for the object in the bounding box.|
|results|[[GoogleCloudVisionV1p3beta1ProductSearchResultsResult](#schemagooglecloudvisionv1p3beta1productsearchresultsresult)]|false|none|List of results, one for each product match.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation">GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1productsearchresultsobjectannotation"></a>
<a id="schema_GoogleCloudVisionV1p3beta1ProductSearchResultsObjectAnnotation"></a>
<a id="tocSgooglecloudvisionv1p3beta1productsearchresultsobjectannotation"></a>
<a id="tocsgooglecloudvisionv1p3beta1productsearchresultsobjectannotation"></a>

```json
{
  "languageCode": "string",
  "mid": "string",
  "name": "string",
  "score": 0
}
```

Prediction for what the object in the bounding box is.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|mid|string|false|none|Object ID that should align with EntityAnnotation mid.|
|name|string|false|none|Object name, expressed in its `language_code` language.|
|score|number(float)|false|none|Score of the result. Range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p3beta1ProductSearchResultsResult">GoogleCloudVisionV1p3beta1ProductSearchResultsResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1productsearchresultsresult"></a>
<a id="schema_GoogleCloudVisionV1p3beta1ProductSearchResultsResult"></a>
<a id="tocSgooglecloudvisionv1p3beta1productsearchresultsresult"></a>
<a id="tocsgooglecloudvisionv1p3beta1productsearchresultsresult"></a>

```json
{
  "image": "string",
  "product": {
    "description": "string",
    "displayName": "string",
    "name": "string",
    "productCategory": "string",
    "productLabels": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "score": 0
}
```

Information about a product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|string|false|none|The resource name of the image from the product that is the closest match to the query.|
|product|[GoogleCloudVisionV1p3beta1Product](#schemagooglecloudvisionv1p3beta1product)|false|none|The Product.|
|score|number(float)|false|none|A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).|

<h2 id="tocS_GoogleCloudVisionV1p3beta1Property">GoogleCloudVisionV1p3beta1Property</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1property"></a>
<a id="schema_GoogleCloudVisionV1p3beta1Property"></a>
<a id="tocSgooglecloudvisionv1p3beta1property"></a>
<a id="tocsgooglecloudvisionv1p3beta1property"></a>

```json
{
  "name": "string",
  "uint64Value": "string",
  "value": "string"
}
```

A `Property` consists of a user-supplied name/value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the property.|
|uint64Value|string(uint64)|false|none|Value of numeric properties.|
|value|string|false|none|Value of the property.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1ReferenceImage">GoogleCloudVisionV1p3beta1ReferenceImage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1referenceimage"></a>
<a id="schema_GoogleCloudVisionV1p3beta1ReferenceImage"></a>
<a id="tocSgooglecloudvisionv1p3beta1referenceimage"></a>
<a id="tocsgooglecloudvisionv1p3beta1referenceimage"></a>

```json
{
  "boundingPolys": [
    {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  ],
  "name": "string",
  "uri": "string"
}
```

A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPolys|[[GoogleCloudVisionV1p3beta1BoundingPoly](#schemagooglecloudvisionv1p3beta1boundingpoly)]|false|none|Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).|
|name|string|false|none|The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image.|
|uri|string|false|none|Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1SafeSearchAnnotation">GoogleCloudVisionV1p3beta1SafeSearchAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1safesearchannotation"></a>
<a id="schema_GoogleCloudVisionV1p3beta1SafeSearchAnnotation"></a>
<a id="tocSgooglecloudvisionv1p3beta1safesearchannotation"></a>
<a id="tocsgooglecloudvisionv1p3beta1safesearchannotation"></a>

```json
{
  "adult": "UNKNOWN",
  "medical": "UNKNOWN",
  "racy": "UNKNOWN",
  "spoof": "UNKNOWN",
  "violence": "UNKNOWN"
}
```

Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adult|string|false|none|Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.|
|medical|string|false|none|Likelihood that this is a medical image.|
|racy|string|false|none|Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.|
|spoof|string|false|none|Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.|
|violence|string|false|none|Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals.|

#### Enumerated Values

|Property|Value|
|---|---|
|adult|UNKNOWN|
|adult|VERY_UNLIKELY|
|adult|UNLIKELY|
|adult|POSSIBLE|
|adult|LIKELY|
|adult|VERY_LIKELY|
|medical|UNKNOWN|
|medical|VERY_UNLIKELY|
|medical|UNLIKELY|
|medical|POSSIBLE|
|medical|LIKELY|
|medical|VERY_LIKELY|
|racy|UNKNOWN|
|racy|VERY_UNLIKELY|
|racy|UNLIKELY|
|racy|POSSIBLE|
|racy|LIKELY|
|racy|VERY_LIKELY|
|spoof|UNKNOWN|
|spoof|VERY_UNLIKELY|
|spoof|UNLIKELY|
|spoof|POSSIBLE|
|spoof|LIKELY|
|spoof|VERY_LIKELY|
|violence|UNKNOWN|
|violence|VERY_UNLIKELY|
|violence|UNLIKELY|
|violence|POSSIBLE|
|violence|LIKELY|
|violence|VERY_LIKELY|

<h2 id="tocS_GoogleCloudVisionV1p3beta1Symbol">GoogleCloudVisionV1p3beta1Symbol</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1symbol"></a>
<a id="schema_GoogleCloudVisionV1p3beta1Symbol"></a>
<a id="tocSgooglecloudvisionv1p3beta1symbol"></a>
<a id="tocsgooglecloudvisionv1p3beta1symbol"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "text": "string"
}
```

A single symbol representation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[GoogleCloudVisionV1p3beta1BoundingPoly](#schemagooglecloudvisionv1p3beta1boundingpoly)|false|none|The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results for the symbol. Range [0, 1].|
|property|[GoogleCloudVisionV1p3beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p3beta1textannotationtextproperty)|false|none|Additional information detected for the symbol.|
|text|string|false|none|The actual UTF-8 representation of the symbol.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1TextAnnotation">GoogleCloudVisionV1p3beta1TextAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1textannotation"></a>
<a id="schema_GoogleCloudVisionV1p3beta1TextAnnotation"></a>
<a id="tocSgooglecloudvisionv1p3beta1textannotation"></a>
<a id="tocsgooglecloudvisionv1p3beta1textannotation"></a>

```json
{
  "pages": [
    {
      "blocks": [
        {
          "blockType": "UNKNOWN",
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "paragraphs": [
            {
              "boundingBox": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "property": {
                "detectedBreak": {
                  "isPrefix": true,
                  "type": "UNKNOWN"
                },
                "detectedLanguages": [
                  {
                    "confidence": 0,
                    "languageCode": "string"
                  }
                ]
              },
              "words": [
                {
                  "boundingBox": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ],
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "confidence": 0,
                  "property": {
                    "detectedBreak": {
                      "isPrefix": true,
                      "type": "UNKNOWN"
                    },
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ]
                  },
                  "symbols": [
                    {
                      "boundingBox": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "property": {
                        "detectedBreak": {
                          "isPrefix": true,
                          "type": "UNKNOWN"
                        },
                        "detectedLanguages": [
                          {
                            "confidence": 0,
                            "languageCode": "string"
                          }
                        ]
                      },
                      "text": "string"
                    }
                  ]
                }
              ]
            }
          ],
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          }
        }
      ],
      "confidence": 0,
      "height": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "width": 0
    }
  ],
  "text": "string"
}
```

TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pages|[[GoogleCloudVisionV1p3beta1Page](#schemagooglecloudvisionv1p3beta1page)]|false|none|List of pages detected by OCR.|
|text|string|false|none|UTF-8 text detected on the pages.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak">GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1textannotationdetectedbreak"></a>
<a id="schema_GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak"></a>
<a id="tocSgooglecloudvisionv1p3beta1textannotationdetectedbreak"></a>
<a id="tocsgooglecloudvisionv1p3beta1textannotationdetectedbreak"></a>

```json
{
  "isPrefix": true,
  "type": "UNKNOWN"
}
```

Detected start or end of a structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPrefix|boolean|false|none|True if break prepends the element.|
|type|string|false|none|Detected break type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNKNOWN|
|type|SPACE|
|type|SURE_SPACE|
|type|EOL_SURE_SPACE|
|type|HYPHEN|
|type|LINE_BREAK|

<h2 id="tocS_GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage">GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1textannotationdetectedlanguage"></a>
<a id="schema_GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage"></a>
<a id="tocSgooglecloudvisionv1p3beta1textannotationdetectedlanguage"></a>
<a id="tocsgooglecloudvisionv1p3beta1textannotationdetectedlanguage"></a>

```json
{
  "confidence": 0,
  "languageCode": "string"
}
```

Detected language for a structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence of detected language. Range [0, 1].|
|languageCode|string|false|none|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1TextAnnotationTextProperty">GoogleCloudVisionV1p3beta1TextAnnotationTextProperty</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1textannotationtextproperty"></a>
<a id="schema_GoogleCloudVisionV1p3beta1TextAnnotationTextProperty"></a>
<a id="tocSgooglecloudvisionv1p3beta1textannotationtextproperty"></a>
<a id="tocsgooglecloudvisionv1p3beta1textannotationtextproperty"></a>

```json
{
  "detectedBreak": {
    "isPrefix": true,
    "type": "UNKNOWN"
  },
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ]
}
```

Additional information detected on the structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedBreak|[GoogleCloudVisionV1p3beta1TextAnnotationDetectedBreak](#schemagooglecloudvisionv1p3beta1textannotationdetectedbreak)|false|none|Detected start or end of a text segment.|
|detectedLanguages|[[GoogleCloudVisionV1p3beta1TextAnnotationDetectedLanguage](#schemagooglecloudvisionv1p3beta1textannotationdetectedlanguage)]|false|none|A list of detected languages together with confidence.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1Vertex">GoogleCloudVisionV1p3beta1Vertex</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1vertex"></a>
<a id="schema_GoogleCloudVisionV1p3beta1Vertex"></a>
<a id="tocSgooglecloudvisionv1p3beta1vertex"></a>
<a id="tocsgooglecloudvisionv1p3beta1vertex"></a>

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

<h2 id="tocS_GoogleCloudVisionV1p3beta1WebDetection">GoogleCloudVisionV1p3beta1WebDetection</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1webdetection"></a>
<a id="schema_GoogleCloudVisionV1p3beta1WebDetection"></a>
<a id="tocSgooglecloudvisionv1p3beta1webdetection"></a>
<a id="tocsgooglecloudvisionv1p3beta1webdetection"></a>

```json
{
  "bestGuessLabels": [
    {
      "label": "string",
      "languageCode": "string"
    }
  ],
  "fullMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "pagesWithMatchingImages": [
    {
      "fullMatchingImages": [
        {
          "score": 0,
          "url": "string"
        }
      ],
      "pageTitle": "string",
      "partialMatchingImages": [
        {
          "score": 0,
          "url": "string"
        }
      ],
      "score": 0,
      "url": "string"
    }
  ],
  "partialMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "visuallySimilarImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "webEntities": [
    {
      "description": "string",
      "entityId": "string",
      "score": 0
    }
  ]
}
```

Relevant information for the image from the Internet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bestGuessLabels|[[GoogleCloudVisionV1p3beta1WebDetectionWebLabel](#schemagooglecloudvisionv1p3beta1webdetectionweblabel)]|false|none|The service's best guess as to the topic of the request image. Inferred from similar images on the open web.|
|fullMatchingImages|[[GoogleCloudVisionV1p3beta1WebDetectionWebImage](#schemagooglecloudvisionv1p3beta1webdetectionwebimage)]|false|none|Fully matching images from the Internet. Can include resized copies of the query image.|
|pagesWithMatchingImages|[[GoogleCloudVisionV1p3beta1WebDetectionWebPage](#schemagooglecloudvisionv1p3beta1webdetectionwebpage)]|false|none|Web pages containing the matching images from the Internet.|
|partialMatchingImages|[[GoogleCloudVisionV1p3beta1WebDetectionWebImage](#schemagooglecloudvisionv1p3beta1webdetectionwebimage)]|false|none|Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.|
|visuallySimilarImages|[[GoogleCloudVisionV1p3beta1WebDetectionWebImage](#schemagooglecloudvisionv1p3beta1webdetectionwebimage)]|false|none|The visually similar image results.|
|webEntities|[[GoogleCloudVisionV1p3beta1WebDetectionWebEntity](#schemagooglecloudvisionv1p3beta1webdetectionwebentity)]|false|none|Deduced entities from similar images on the Internet.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1WebDetectionWebEntity">GoogleCloudVisionV1p3beta1WebDetectionWebEntity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1webdetectionwebentity"></a>
<a id="schema_GoogleCloudVisionV1p3beta1WebDetectionWebEntity"></a>
<a id="tocSgooglecloudvisionv1p3beta1webdetectionwebentity"></a>
<a id="tocsgooglecloudvisionv1p3beta1webdetectionwebentity"></a>

```json
{
  "description": "string",
  "entityId": "string",
  "score": 0
}
```

Entity deduced from similar images on the Internet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Canonical description of the entity, in English.|
|entityId|string|false|none|Opaque entity ID.|
|score|number(float)|false|none|Overall relevancy score for the entity. Not normalized and not comparable across different image queries.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1WebDetectionWebImage">GoogleCloudVisionV1p3beta1WebDetectionWebImage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1webdetectionwebimage"></a>
<a id="schema_GoogleCloudVisionV1p3beta1WebDetectionWebImage"></a>
<a id="tocSgooglecloudvisionv1p3beta1webdetectionwebimage"></a>
<a id="tocsgooglecloudvisionv1p3beta1webdetectionwebimage"></a>

```json
{
  "score": 0,
  "url": "string"
}
```

Metadata for online images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score|number(float)|false|none|(Deprecated) Overall relevancy score for the image.|
|url|string|false|none|The result image URL.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1WebDetectionWebLabel">GoogleCloudVisionV1p3beta1WebDetectionWebLabel</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1webdetectionweblabel"></a>
<a id="schema_GoogleCloudVisionV1p3beta1WebDetectionWebLabel"></a>
<a id="tocSgooglecloudvisionv1p3beta1webdetectionweblabel"></a>
<a id="tocsgooglecloudvisionv1p3beta1webdetectionweblabel"></a>

```json
{
  "label": "string",
  "languageCode": "string"
}
```

Label to provide extra metadata for the web detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|Label for extra metadata.|
|languageCode|string|false|none|The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1WebDetectionWebPage">GoogleCloudVisionV1p3beta1WebDetectionWebPage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1webdetectionwebpage"></a>
<a id="schema_GoogleCloudVisionV1p3beta1WebDetectionWebPage"></a>
<a id="tocSgooglecloudvisionv1p3beta1webdetectionwebpage"></a>
<a id="tocsgooglecloudvisionv1p3beta1webdetectionwebpage"></a>

```json
{
  "fullMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "pageTitle": "string",
  "partialMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "score": 0,
  "url": "string"
}
```

Metadata for web pages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullMatchingImages|[[GoogleCloudVisionV1p3beta1WebDetectionWebImage](#schemagooglecloudvisionv1p3beta1webdetectionwebimage)]|false|none|Fully matching images on the page. Can include resized copies of the query image.|
|pageTitle|string|false|none|Title for the web page, may contain HTML markups.|
|partialMatchingImages|[[GoogleCloudVisionV1p3beta1WebDetectionWebImage](#schemagooglecloudvisionv1p3beta1webdetectionwebimage)]|false|none|Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.|
|score|number(float)|false|none|(Deprecated) Overall relevancy score for the web page.|
|url|string|false|none|The result web page URL.|

<h2 id="tocS_GoogleCloudVisionV1p3beta1Word">GoogleCloudVisionV1p3beta1Word</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p3beta1word"></a>
<a id="schema_GoogleCloudVisionV1p3beta1Word"></a>
<a id="tocSgooglecloudvisionv1p3beta1word"></a>
<a id="tocsgooglecloudvisionv1p3beta1word"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "symbols": [
    {
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "text": "string"
    }
  ]
}
```

A word representation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[GoogleCloudVisionV1p3beta1BoundingPoly](#schemagooglecloudvisionv1p3beta1boundingpoly)|false|none|The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results for the word. Range [0, 1].|
|property|[GoogleCloudVisionV1p3beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p3beta1textannotationtextproperty)|false|none|Additional information detected for the word.|
|symbols|[[GoogleCloudVisionV1p3beta1Symbol](#schemagooglecloudvisionv1p3beta1symbol)]|false|none|List of symbols in the word. The order of the symbols follows the natural reading order.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1AnnotateFileResponse">GoogleCloudVisionV1p4beta1AnnotateFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1annotatefileresponse"></a>
<a id="schema_GoogleCloudVisionV1p4beta1AnnotateFileResponse"></a>
<a id="tocSgooglecloudvisionv1p4beta1annotatefileresponse"></a>
<a id="tocsgooglecloudvisionv1p4beta1annotatefileresponse"></a>

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
  "inputConfig": {
    "content": "string",
    "gcsSource": {
      "uri": "string"
    },
    "mimeType": "string"
  },
  "responses": [
    {
      "context": {
        "pageNumber": 0,
        "uri": "string"
      },
      "cropHintsAnnotation": {
        "cropHints": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "importanceFraction": 0
          }
        ]
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
      "faceAnnotations": [
        {
          "angerLikelihood": "UNKNOWN",
          "blurredLikelihood": "UNKNOWN",
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "detectionConfidence": 0,
          "fdBoundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "headwearLikelihood": "UNKNOWN",
          "joyLikelihood": "UNKNOWN",
          "landmarkingConfidence": 0,
          "landmarks": [
            {
              "position": {
                "x": 0,
                "y": 0,
                "z": 0
              },
              "type": "UNKNOWN_LANDMARK"
            }
          ],
          "panAngle": 0,
          "recognitionResult": [
            {
              "celebrity": {
                "description": "string",
                "displayName": "string",
                "name": "string"
              },
              "confidence": 0
            }
          ],
          "rollAngle": 0,
          "sorrowLikelihood": "UNKNOWN",
          "surpriseLikelihood": "UNKNOWN",
          "tiltAngle": 0,
          "underExposedLikelihood": "UNKNOWN"
        }
      ],
      "fullTextAnnotation": {
        "pages": [
          {
            "blocks": [
              {
                "blockType": "UNKNOWN",
                "boundingBox": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "paragraphs": [
                  {
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    },
                    "words": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "symbols": [
                          {
                            "boundingBox": {
                              "normalizedVertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ],
                              "vertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ]
                            },
                            "confidence": 0,
                            "property": {
                              "detectedBreak": {
                                "isPrefix": true,
                                "type": "UNKNOWN"
                              },
                              "detectedLanguages": [
                                {
                                  "confidence": 0,
                                  "languageCode": "string"
                                }
                              ]
                            },
                            "text": "string"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                }
              }
            ],
            "confidence": 0,
            "height": 0,
            "property": {
              "detectedBreak": {
                "isPrefix": true,
                "type": "UNKNOWN"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ]
            },
            "width": 0
          }
        ],
        "text": "string"
      },
      "imagePropertiesAnnotation": {
        "dominantColors": {
          "colors": [
            {
              "color": {
                "alpha": 0,
                "blue": 0,
                "green": 0,
                "red": 0
              },
              "pixelFraction": 0,
              "score": 0
            }
          ]
        }
      },
      "labelAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "landmarkAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "localizedObjectAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "languageCode": "string",
          "mid": "string",
          "name": "string",
          "score": 0
        }
      ],
      "logoAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "productSearchResults": {
        "indexTime": "string",
        "productGroupedResults": [
          {
            "boundingPoly": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "objectAnnotations": [
              {
                "languageCode": "string",
                "mid": "string",
                "name": "string",
                "score": 0
              }
            ],
            "results": [
              {
                "image": "string",
                "product": {
                  "description": "string",
                  "displayName": "string",
                  "name": "string",
                  "productCategory": "string",
                  "productLabels": [
                    {
                      "key": "string",
                      "value": "string"
                    }
                  ]
                },
                "score": 0
              }
            ]
          }
        ],
        "results": [
          {
            "image": "string",
            "product": {
              "description": "string",
              "displayName": "string",
              "name": "string",
              "productCategory": "string",
              "productLabels": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "score": 0
          }
        ]
      },
      "safeSearchAnnotation": {
        "adult": "UNKNOWN",
        "medical": "UNKNOWN",
        "racy": "UNKNOWN",
        "spoof": "UNKNOWN",
        "violence": "UNKNOWN"
      },
      "textAnnotations": [
        {
          "boundingPoly": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "description": "string",
          "locale": "string",
          "locations": [
            {
              "latLng": {
                "latitude": 0,
                "longitude": 0
              }
            }
          ],
          "mid": "string",
          "properties": [
            {
              "name": "string",
              "uint64Value": "string",
              "value": "string"
            }
          ],
          "score": 0,
          "topicality": 0
        }
      ],
      "webDetection": {
        "bestGuessLabels": [
          {
            "label": "string",
            "languageCode": "string"
          }
        ],
        "fullMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "pagesWithMatchingImages": [
          {
            "fullMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "pageTitle": "string",
            "partialMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "score": 0,
            "url": "string"
          }
        ],
        "partialMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "visuallySimilarImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "webEntities": [
          {
            "description": "string",
            "entityId": "string",
            "score": 0
          }
        ]
      }
    }
  ],
  "totalPages": 0
}
```

Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[Status](#schemastatus)|false|none|If set, represents the error message for the failed request. The `responses` field will not be set in this case.|
|inputConfig|[GoogleCloudVisionV1p4beta1InputConfig](#schemagooglecloudvisionv1p4beta1inputconfig)|false|none|Information about the file for which this response is generated.|
|responses|[[GoogleCloudVisionV1p4beta1AnnotateImageResponse](#schemagooglecloudvisionv1p4beta1annotateimageresponse)]|false|none|Individual responses to images found within the file. This field will be empty if the `error` field is set.|
|totalPages|integer(int32)|false|none|This field gives the total number of pages in the file.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1AnnotateImageResponse">GoogleCloudVisionV1p4beta1AnnotateImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1annotateimageresponse"></a>
<a id="schema_GoogleCloudVisionV1p4beta1AnnotateImageResponse"></a>
<a id="tocSgooglecloudvisionv1p4beta1annotateimageresponse"></a>
<a id="tocsgooglecloudvisionv1p4beta1annotateimageresponse"></a>

```json
{
  "context": {
    "pageNumber": 0,
    "uri": "string"
  },
  "cropHintsAnnotation": {
    "cropHints": [
      {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "confidence": 0,
        "importanceFraction": 0
      }
    ]
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
  "faceAnnotations": [
    {
      "angerLikelihood": "UNKNOWN",
      "blurredLikelihood": "UNKNOWN",
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "detectionConfidence": 0,
      "fdBoundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "headwearLikelihood": "UNKNOWN",
      "joyLikelihood": "UNKNOWN",
      "landmarkingConfidence": 0,
      "landmarks": [
        {
          "position": {
            "x": 0,
            "y": 0,
            "z": 0
          },
          "type": "UNKNOWN_LANDMARK"
        }
      ],
      "panAngle": 0,
      "recognitionResult": [
        {
          "celebrity": {
            "description": "string",
            "displayName": "string",
            "name": "string"
          },
          "confidence": 0
        }
      ],
      "rollAngle": 0,
      "sorrowLikelihood": "UNKNOWN",
      "surpriseLikelihood": "UNKNOWN",
      "tiltAngle": 0,
      "underExposedLikelihood": "UNKNOWN"
    }
  ],
  "fullTextAnnotation": {
    "pages": [
      {
        "blocks": [
          {
            "blockType": "UNKNOWN",
            "boundingBox": {
              "normalizedVertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ],
              "vertices": [
                {
                  "x": 0,
                  "y": 0
                }
              ]
            },
            "confidence": 0,
            "paragraphs": [
              {
                "boundingBox": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                },
                "words": [
                  {
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    },
                    "symbols": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "text": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "property": {
              "detectedBreak": {
                "isPrefix": true,
                "type": "UNKNOWN"
              },
              "detectedLanguages": [
                {
                  "confidence": 0,
                  "languageCode": "string"
                }
              ]
            }
          }
        ],
        "confidence": 0,
        "height": 0,
        "property": {
          "detectedBreak": {
            "isPrefix": true,
            "type": "UNKNOWN"
          },
          "detectedLanguages": [
            {
              "confidence": 0,
              "languageCode": "string"
            }
          ]
        },
        "width": 0
      }
    ],
    "text": "string"
  },
  "imagePropertiesAnnotation": {
    "dominantColors": {
      "colors": [
        {
          "color": {
            "alpha": 0,
            "blue": 0,
            "green": 0,
            "red": 0
          },
          "pixelFraction": 0,
          "score": 0
        }
      ]
    }
  },
  "labelAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "landmarkAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "localizedObjectAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "languageCode": "string",
      "mid": "string",
      "name": "string",
      "score": 0
    }
  ],
  "logoAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "productSearchResults": {
    "indexTime": "string",
    "productGroupedResults": [
      {
        "boundingPoly": {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        },
        "objectAnnotations": [
          {
            "languageCode": "string",
            "mid": "string",
            "name": "string",
            "score": 0
          }
        ],
        "results": [
          {
            "image": "string",
            "product": {
              "description": "string",
              "displayName": "string",
              "name": "string",
              "productCategory": "string",
              "productLabels": [
                {
                  "key": "string",
                  "value": "string"
                }
              ]
            },
            "score": 0
          }
        ]
      }
    ],
    "results": [
      {
        "image": "string",
        "product": {
          "description": "string",
          "displayName": "string",
          "name": "string",
          "productCategory": "string",
          "productLabels": [
            {
              "key": "string",
              "value": "string"
            }
          ]
        },
        "score": 0
      }
    ]
  },
  "safeSearchAnnotation": {
    "adult": "UNKNOWN",
    "medical": "UNKNOWN",
    "racy": "UNKNOWN",
    "spoof": "UNKNOWN",
    "violence": "UNKNOWN"
  },
  "textAnnotations": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "description": "string",
      "locale": "string",
      "locations": [
        {
          "latLng": {
            "latitude": 0,
            "longitude": 0
          }
        }
      ],
      "mid": "string",
      "properties": [
        {
          "name": "string",
          "uint64Value": "string",
          "value": "string"
        }
      ],
      "score": 0,
      "topicality": 0
    }
  ],
  "webDetection": {
    "bestGuessLabels": [
      {
        "label": "string",
        "languageCode": "string"
      }
    ],
    "fullMatchingImages": [
      {
        "score": 0,
        "url": "string"
      }
    ],
    "pagesWithMatchingImages": [
      {
        "fullMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "pageTitle": "string",
        "partialMatchingImages": [
          {
            "score": 0,
            "url": "string"
          }
        ],
        "score": 0,
        "url": "string"
      }
    ],
    "partialMatchingImages": [
      {
        "score": 0,
        "url": "string"
      }
    ],
    "visuallySimilarImages": [
      {
        "score": 0,
        "url": "string"
      }
    ],
    "webEntities": [
      {
        "description": "string",
        "entityId": "string",
        "score": 0
      }
    ]
  }
}
```

Response to an image annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[GoogleCloudVisionV1p4beta1ImageAnnotationContext](#schemagooglecloudvisionv1p4beta1imageannotationcontext)|false|none|If present, contextual information is needed to understand where this image comes from.|
|cropHintsAnnotation|[GoogleCloudVisionV1p4beta1CropHintsAnnotation](#schemagooglecloudvisionv1p4beta1crophintsannotation)|false|none|If present, crop hints have completed successfully.|
|error|[Status](#schemastatus)|false|none|If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when `error` is set.|
|faceAnnotations|[[GoogleCloudVisionV1p4beta1FaceAnnotation](#schemagooglecloudvisionv1p4beta1faceannotation)]|false|none|If present, face detection has completed successfully.|
|fullTextAnnotation|[GoogleCloudVisionV1p4beta1TextAnnotation](#schemagooglecloudvisionv1p4beta1textannotation)|false|none|If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.|
|imagePropertiesAnnotation|[GoogleCloudVisionV1p4beta1ImageProperties](#schemagooglecloudvisionv1p4beta1imageproperties)|false|none|If present, image properties were extracted successfully.|
|labelAnnotations|[[GoogleCloudVisionV1p4beta1EntityAnnotation](#schemagooglecloudvisionv1p4beta1entityannotation)]|false|none|If present, label detection has completed successfully.|
|landmarkAnnotations|[[GoogleCloudVisionV1p4beta1EntityAnnotation](#schemagooglecloudvisionv1p4beta1entityannotation)]|false|none|If present, landmark detection has completed successfully.|
|localizedObjectAnnotations|[[GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation](#schemagooglecloudvisionv1p4beta1localizedobjectannotation)]|false|none|If present, localized object detection has completed successfully. This will be sorted descending by confidence score.|
|logoAnnotations|[[GoogleCloudVisionV1p4beta1EntityAnnotation](#schemagooglecloudvisionv1p4beta1entityannotation)]|false|none|If present, logo detection has completed successfully.|
|productSearchResults|[GoogleCloudVisionV1p4beta1ProductSearchResults](#schemagooglecloudvisionv1p4beta1productsearchresults)|false|none|If present, product search has completed successfully.|
|safeSearchAnnotation|[GoogleCloudVisionV1p4beta1SafeSearchAnnotation](#schemagooglecloudvisionv1p4beta1safesearchannotation)|false|none|If present, safe-search annotation has completed successfully.|
|textAnnotations|[[GoogleCloudVisionV1p4beta1EntityAnnotation](#schemagooglecloudvisionv1p4beta1entityannotation)]|false|none|If present, text (OCR) detection has completed successfully.|
|webDetection|[GoogleCloudVisionV1p4beta1WebDetection](#schemagooglecloudvisionv1p4beta1webdetection)|false|none|If present, web detection has completed successfully.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse">GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1asyncannotatefileresponse"></a>
<a id="schema_GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse"></a>
<a id="tocSgooglecloudvisionv1p4beta1asyncannotatefileresponse"></a>
<a id="tocsgooglecloudvisionv1p4beta1asyncannotatefileresponse"></a>

```json
{
  "outputConfig": {
    "batchSize": 0,
    "gcsDestination": {
      "uri": "string"
    }
  }
}
```

The response for a single offline file annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputConfig|[GoogleCloudVisionV1p4beta1OutputConfig](#schemagooglecloudvisionv1p4beta1outputconfig)|false|none|The output location and metadata from AsyncAnnotateFileRequest.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponse">GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1asyncbatchannotatefilesresponse"></a>
<a id="schema_GoogleCloudVisionV1p4beta1AsyncBatchAnnotateFilesResponse"></a>
<a id="tocSgooglecloudvisionv1p4beta1asyncbatchannotatefilesresponse"></a>
<a id="tocsgooglecloudvisionv1p4beta1asyncbatchannotatefilesresponse"></a>

```json
{
  "responses": [
    {
      "outputConfig": {
        "batchSize": 0,
        "gcsDestination": {
          "uri": "string"
        }
      }
    }
  ]
}
```

Response to an async batch file annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[GoogleCloudVisionV1p4beta1AsyncAnnotateFileResponse](#schemagooglecloudvisionv1p4beta1asyncannotatefileresponse)]|false|none|The list of file annotation responses, one for each request in AsyncBatchAnnotateFilesRequest.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse">GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1asyncbatchannotateimagesresponse"></a>
<a id="schema_GoogleCloudVisionV1p4beta1AsyncBatchAnnotateImagesResponse"></a>
<a id="tocSgooglecloudvisionv1p4beta1asyncbatchannotateimagesresponse"></a>
<a id="tocsgooglecloudvisionv1p4beta1asyncbatchannotateimagesresponse"></a>

```json
{
  "outputConfig": {
    "batchSize": 0,
    "gcsDestination": {
      "uri": "string"
    }
  }
}
```

Response to an async batch image annotation request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputConfig|[GoogleCloudVisionV1p4beta1OutputConfig](#schemagooglecloudvisionv1p4beta1outputconfig)|false|none|The output location and metadata from AsyncBatchAnnotateImagesRequest.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponse">GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1batchannotatefilesresponse"></a>
<a id="schema_GoogleCloudVisionV1p4beta1BatchAnnotateFilesResponse"></a>
<a id="tocSgooglecloudvisionv1p4beta1batchannotatefilesresponse"></a>
<a id="tocsgooglecloudvisionv1p4beta1batchannotatefilesresponse"></a>

```json
{
  "responses": [
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
      "inputConfig": {
        "content": "string",
        "gcsSource": {
          "uri": "string"
        },
        "mimeType": "string"
      },
      "responses": [
        {
          "context": {
            "pageNumber": 0,
            "uri": "string"
          },
          "cropHintsAnnotation": {
            "cropHints": [
              {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "confidence": 0,
                "importanceFraction": 0
              }
            ]
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
          "faceAnnotations": [
            {
              "angerLikelihood": "UNKNOWN",
              "blurredLikelihood": "UNKNOWN",
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "detectionConfidence": 0,
              "fdBoundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "headwearLikelihood": "UNKNOWN",
              "joyLikelihood": "UNKNOWN",
              "landmarkingConfidence": 0,
              "landmarks": [
                {
                  "position": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                  },
                  "type": "UNKNOWN_LANDMARK"
                }
              ],
              "panAngle": 0,
              "recognitionResult": [
                {
                  "celebrity": {
                    "description": "string",
                    "displayName": "string",
                    "name": "string"
                  },
                  "confidence": 0
                }
              ],
              "rollAngle": 0,
              "sorrowLikelihood": "UNKNOWN",
              "surpriseLikelihood": "UNKNOWN",
              "tiltAngle": 0,
              "underExposedLikelihood": "UNKNOWN"
            }
          ],
          "fullTextAnnotation": {
            "pages": [
              {
                "blocks": [
                  {
                    "blockType": "UNKNOWN",
                    "boundingBox": {
                      "normalizedVertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ],
                      "vertices": [
                        {
                          "x": 0,
                          "y": 0
                        }
                      ]
                    },
                    "confidence": 0,
                    "paragraphs": [
                      {
                        "boundingBox": {
                          "normalizedVertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ],
                          "vertices": [
                            {
                              "x": 0,
                              "y": 0
                            }
                          ]
                        },
                        "confidence": 0,
                        "property": {
                          "detectedBreak": {
                            "isPrefix": true,
                            "type": "UNKNOWN"
                          },
                          "detectedLanguages": [
                            {
                              "confidence": 0,
                              "languageCode": "string"
                            }
                          ]
                        },
                        "words": [
                          {
                            "boundingBox": {
                              "normalizedVertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ],
                              "vertices": [
                                {
                                  "x": 0,
                                  "y": 0
                                }
                              ]
                            },
                            "confidence": 0,
                            "property": {
                              "detectedBreak": {
                                "isPrefix": true,
                                "type": "UNKNOWN"
                              },
                              "detectedLanguages": [
                                {
                                  "confidence": 0,
                                  "languageCode": "string"
                                }
                              ]
                            },
                            "symbols": [
                              {
                                "boundingBox": {
                                  "normalizedVertices": [
                                    {
                                      "x": 0,
                                      "y": 0
                                    }
                                  ],
                                  "vertices": [
                                    {
                                      "x": 0,
                                      "y": 0
                                    }
                                  ]
                                },
                                "confidence": 0,
                                "property": {
                                  "detectedBreak": {
                                    "isPrefix": true,
                                    "type": "UNKNOWN"
                                  },
                                  "detectedLanguages": [
                                    {
                                      "confidence": 0,
                                      "languageCode": "string"
                                    }
                                  ]
                                },
                                "text": "string"
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "property": {
                      "detectedBreak": {
                        "isPrefix": true,
                        "type": "UNKNOWN"
                      },
                      "detectedLanguages": [
                        {
                          "confidence": 0,
                          "languageCode": "string"
                        }
                      ]
                    }
                  }
                ],
                "confidence": 0,
                "height": 0,
                "property": {
                  "detectedBreak": {
                    "isPrefix": true,
                    "type": "UNKNOWN"
                  },
                  "detectedLanguages": [
                    {
                      "confidence": 0,
                      "languageCode": "string"
                    }
                  ]
                },
                "width": 0
              }
            ],
            "text": "string"
          },
          "imagePropertiesAnnotation": {
            "dominantColors": {
              "colors": [
                {
                  "color": {
                    "alpha": 0,
                    "blue": 0,
                    "green": 0,
                    "red": 0
                  },
                  "pixelFraction": 0,
                  "score": 0
                }
              ]
            }
          },
          "labelAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "landmarkAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "localizedObjectAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "languageCode": "string",
              "mid": "string",
              "name": "string",
              "score": 0
            }
          ],
          "logoAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "productSearchResults": {
            "indexTime": "string",
            "productGroupedResults": [
              {
                "boundingPoly": {
                  "normalizedVertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ],
                  "vertices": [
                    {
                      "x": 0,
                      "y": 0
                    }
                  ]
                },
                "objectAnnotations": [
                  {
                    "languageCode": "string",
                    "mid": "string",
                    "name": "string",
                    "score": 0
                  }
                ],
                "results": [
                  {
                    "image": "string",
                    "product": {
                      "description": "string",
                      "displayName": "string",
                      "name": "string",
                      "productCategory": "string",
                      "productLabels": [
                        {
                          "key": "string",
                          "value": "string"
                        }
                      ]
                    },
                    "score": 0
                  }
                ]
              }
            ],
            "results": [
              {
                "image": "string",
                "product": {
                  "description": "string",
                  "displayName": "string",
                  "name": "string",
                  "productCategory": "string",
                  "productLabels": [
                    {
                      "key": "string",
                      "value": "string"
                    }
                  ]
                },
                "score": 0
              }
            ]
          },
          "safeSearchAnnotation": {
            "adult": "UNKNOWN",
            "medical": "UNKNOWN",
            "racy": "UNKNOWN",
            "spoof": "UNKNOWN",
            "violence": "UNKNOWN"
          },
          "textAnnotations": [
            {
              "boundingPoly": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "description": "string",
              "locale": "string",
              "locations": [
                {
                  "latLng": {
                    "latitude": 0,
                    "longitude": 0
                  }
                }
              ],
              "mid": "string",
              "properties": [
                {
                  "name": "string",
                  "uint64Value": "string",
                  "value": "string"
                }
              ],
              "score": 0,
              "topicality": 0
            }
          ],
          "webDetection": {
            "bestGuessLabels": [
              {
                "label": "string",
                "languageCode": "string"
              }
            ],
            "fullMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "pagesWithMatchingImages": [
              {
                "fullMatchingImages": [
                  {
                    "score": 0,
                    "url": "string"
                  }
                ],
                "pageTitle": "string",
                "partialMatchingImages": [
                  {
                    "score": 0,
                    "url": "string"
                  }
                ],
                "score": 0,
                "url": "string"
              }
            ],
            "partialMatchingImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "visuallySimilarImages": [
              {
                "score": 0,
                "url": "string"
              }
            ],
            "webEntities": [
              {
                "description": "string",
                "entityId": "string",
                "score": 0
              }
            ]
          }
        }
      ],
      "totalPages": 0
    }
  ]
}
```

A list of file annotation responses.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responses|[[GoogleCloudVisionV1p4beta1AnnotateFileResponse](#schemagooglecloudvisionv1p4beta1annotatefileresponse)]|false|none|The list of file annotation responses, each response corresponding to each AnnotateFileRequest in BatchAnnotateFilesRequest.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1BatchOperationMetadata">GoogleCloudVisionV1p4beta1BatchOperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1batchoperationmetadata"></a>
<a id="schema_GoogleCloudVisionV1p4beta1BatchOperationMetadata"></a>
<a id="tocSgooglecloudvisionv1p4beta1batchoperationmetadata"></a>
<a id="tocsgooglecloudvisionv1p4beta1batchoperationmetadata"></a>

```json
{
  "endTime": "string",
  "state": "STATE_UNSPECIFIED",
  "submitTime": "string"
}
```

Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The time when the batch request is finished and google.longrunning.Operation.done is set to true.|
|state|string|false|none|The current state of the batch operation.|
|submitTime|string(google-datetime)|false|none|The time when the batch request was submitted to the server.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PROCESSING|
|state|SUCCESSFUL|
|state|FAILED|
|state|CANCELLED|

<h2 id="tocS_GoogleCloudVisionV1p4beta1Block">GoogleCloudVisionV1p4beta1Block</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1block"></a>
<a id="schema_GoogleCloudVisionV1p4beta1Block"></a>
<a id="tocSgooglecloudvisionv1p4beta1block"></a>
<a id="tocsgooglecloudvisionv1p4beta1block"></a>

```json
{
  "blockType": "UNKNOWN",
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "paragraphs": [
    {
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "words": [
        {
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          },
          "symbols": [
            {
              "boundingBox": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "property": {
                "detectedBreak": {
                  "isPrefix": true,
                  "type": "UNKNOWN"
                },
                "detectedLanguages": [
                  {
                    "confidence": 0,
                    "languageCode": "string"
                  }
                ]
              },
              "text": "string"
            }
          ]
        }
      ]
    }
  ],
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  }
}
```

Logical element on the page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockType|string|false|none|Detected block type (text, image etc) for this block.|
|boundingBox|[GoogleCloudVisionV1p4beta1BoundingPoly](#schemagooglecloudvisionv1p4beta1boundingpoly)|false|none|The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results on the block. Range [0, 1].|
|paragraphs|[[GoogleCloudVisionV1p4beta1Paragraph](#schemagooglecloudvisionv1p4beta1paragraph)]|false|none|List of paragraphs in this block (if this blocks is of type text).|
|property|[GoogleCloudVisionV1p4beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p4beta1textannotationtextproperty)|false|none|Additional information detected for the block.|

#### Enumerated Values

|Property|Value|
|---|---|
|blockType|UNKNOWN|
|blockType|TEXT|
|blockType|TABLE|
|blockType|PICTURE|
|blockType|RULER|
|blockType|BARCODE|

<h2 id="tocS_GoogleCloudVisionV1p4beta1BoundingPoly">GoogleCloudVisionV1p4beta1BoundingPoly</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1boundingpoly"></a>
<a id="schema_GoogleCloudVisionV1p4beta1BoundingPoly"></a>
<a id="tocSgooglecloudvisionv1p4beta1boundingpoly"></a>
<a id="tocsgooglecloudvisionv1p4beta1boundingpoly"></a>

```json
{
  "normalizedVertices": [
    {
      "x": 0,
      "y": 0
    }
  ],
  "vertices": [
    {
      "x": 0,
      "y": 0
    }
  ]
}
```

A bounding polygon for the detected image annotation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|normalizedVertices|[[GoogleCloudVisionV1p4beta1NormalizedVertex](#schemagooglecloudvisionv1p4beta1normalizedvertex)]|false|none|The bounding polygon normalized vertices.|
|vertices|[[GoogleCloudVisionV1p4beta1Vertex](#schemagooglecloudvisionv1p4beta1vertex)]|false|none|The bounding polygon vertices.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1Celebrity">GoogleCloudVisionV1p4beta1Celebrity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1celebrity"></a>
<a id="schema_GoogleCloudVisionV1p4beta1Celebrity"></a>
<a id="tocSgooglecloudvisionv1p4beta1celebrity"></a>
<a id="tocsgooglecloudvisionv1p4beta1celebrity"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "name": "string"
}
```

A Celebrity is a group of Faces with an identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The Celebrity's description.|
|displayName|string|false|none|The Celebrity's display name.|
|name|string|false|none|The resource name of the preloaded Celebrity. Has the format `builtin/{mid}`.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1ColorInfo">GoogleCloudVisionV1p4beta1ColorInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1colorinfo"></a>
<a id="schema_GoogleCloudVisionV1p4beta1ColorInfo"></a>
<a id="tocSgooglecloudvisionv1p4beta1colorinfo"></a>
<a id="tocsgooglecloudvisionv1p4beta1colorinfo"></a>

```json
{
  "color": {
    "alpha": 0,
    "blue": 0,
    "green": 0,
    "red": 0
  },
  "pixelFraction": 0,
  "score": 0
}
```

Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|[Color](#schemacolor)|false|none|RGB components of the color.|
|pixelFraction|number(float)|false|none|The fraction of pixels the color occupies in the image. Value in range [0, 1].|
|score|number(float)|false|none|Image-specific score for this color. Value in range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p4beta1CropHint">GoogleCloudVisionV1p4beta1CropHint</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1crophint"></a>
<a id="schema_GoogleCloudVisionV1p4beta1CropHint"></a>
<a id="tocSgooglecloudvisionv1p4beta1crophint"></a>
<a id="tocsgooglecloudvisionv1p4beta1crophint"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "importanceFraction": 0
}
```

Single crop hint that is used to generate a new crop when serving an image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p4beta1BoundingPoly](#schemagooglecloudvisionv1p4beta1boundingpoly)|false|none|The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale.|
|confidence|number(float)|false|none|Confidence of this being a salient region. Range [0, 1].|
|importanceFraction|number(float)|false|none|Fraction of importance of this salient region with respect to the original image.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1CropHintsAnnotation">GoogleCloudVisionV1p4beta1CropHintsAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1crophintsannotation"></a>
<a id="schema_GoogleCloudVisionV1p4beta1CropHintsAnnotation"></a>
<a id="tocSgooglecloudvisionv1p4beta1crophintsannotation"></a>
<a id="tocsgooglecloudvisionv1p4beta1crophintsannotation"></a>

```json
{
  "cropHints": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "importanceFraction": 0
    }
  ]
}
```

Set of crop hints that are used to generate new crops when serving images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cropHints|[[GoogleCloudVisionV1p4beta1CropHint](#schemagooglecloudvisionv1p4beta1crophint)]|false|none|Crop hint results.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1DominantColorsAnnotation">GoogleCloudVisionV1p4beta1DominantColorsAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1dominantcolorsannotation"></a>
<a id="schema_GoogleCloudVisionV1p4beta1DominantColorsAnnotation"></a>
<a id="tocSgooglecloudvisionv1p4beta1dominantcolorsannotation"></a>
<a id="tocsgooglecloudvisionv1p4beta1dominantcolorsannotation"></a>

```json
{
  "colors": [
    {
      "color": {
        "alpha": 0,
        "blue": 0,
        "green": 0,
        "red": 0
      },
      "pixelFraction": 0,
      "score": 0
    }
  ]
}
```

Set of dominant colors and their corresponding scores.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colors|[[GoogleCloudVisionV1p4beta1ColorInfo](#schemagooglecloudvisionv1p4beta1colorinfo)]|false|none|RGB color values with their score and pixel fraction.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1EntityAnnotation">GoogleCloudVisionV1p4beta1EntityAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1entityannotation"></a>
<a id="schema_GoogleCloudVisionV1p4beta1EntityAnnotation"></a>
<a id="tocSgooglecloudvisionv1p4beta1entityannotation"></a>
<a id="tocsgooglecloudvisionv1p4beta1entityannotation"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "description": "string",
  "locale": "string",
  "locations": [
    {
      "latLng": {
        "latitude": 0,
        "longitude": 0
      }
    }
  ],
  "mid": "string",
  "properties": [
    {
      "name": "string",
      "uint64Value": "string",
      "value": "string"
    }
  ],
  "score": 0,
  "topicality": 0
}
```

Set of detected entity features.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p4beta1BoundingPoly](#schemagooglecloudvisionv1p4beta1boundingpoly)|false|none|Image region to which this entity belongs. Not produced for `LABEL_DETECTION` features.|
|confidence|number(float)|false|none|**Deprecated.** **Deprecated. Use `score` instead.** The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].|
|description|string|false|none|Entity textual description, expressed in its `locale` language.|
|locale|string|false|none|The language code for the locale in which the entity textual `description` is expressed.|
|locations|[[GoogleCloudVisionV1p4beta1LocationInfo](#schemagooglecloudvisionv1p4beta1locationinfo)]|false|none|The location information for the detected entity. Multiple `LocationInfo` elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.|
|mid|string|false|none|Opaque entity ID. Some IDs may be available in [Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/).|
|properties|[[GoogleCloudVisionV1p4beta1Property](#schemagooglecloudvisionv1p4beta1property)]|false|none|Some entities may have optional user-supplied `Property` (name/value) fields, such a score or string that qualifies the entity.|
|score|number(float)|false|none|Overall score of the result. Range [0, 1].|
|topicality|number(float)|false|none|The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p4beta1FaceAnnotation">GoogleCloudVisionV1p4beta1FaceAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1faceannotation"></a>
<a id="schema_GoogleCloudVisionV1p4beta1FaceAnnotation"></a>
<a id="tocSgooglecloudvisionv1p4beta1faceannotation"></a>
<a id="tocsgooglecloudvisionv1p4beta1faceannotation"></a>

```json
{
  "angerLikelihood": "UNKNOWN",
  "blurredLikelihood": "UNKNOWN",
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "detectionConfidence": 0,
  "fdBoundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "headwearLikelihood": "UNKNOWN",
  "joyLikelihood": "UNKNOWN",
  "landmarkingConfidence": 0,
  "landmarks": [
    {
      "position": {
        "x": 0,
        "y": 0,
        "z": 0
      },
      "type": "UNKNOWN_LANDMARK"
    }
  ],
  "panAngle": 0,
  "recognitionResult": [
    {
      "celebrity": {
        "description": "string",
        "displayName": "string",
        "name": "string"
      },
      "confidence": 0
    }
  ],
  "rollAngle": 0,
  "sorrowLikelihood": "UNKNOWN",
  "surpriseLikelihood": "UNKNOWN",
  "tiltAngle": 0,
  "underExposedLikelihood": "UNKNOWN"
}
```

A face annotation object contains the results of face detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|angerLikelihood|string|false|none|Anger likelihood.|
|blurredLikelihood|string|false|none|Blurred likelihood.|
|boundingPoly|[GoogleCloudVisionV1p4beta1BoundingPoly](#schemagooglecloudvisionv1p4beta1boundingpoly)|false|none|The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the `BoundingPoly` (the polygon will be unbounded) if only a partial face appears in the image to be annotated.|
|detectionConfidence|number(float)|false|none|Detection confidence. Range [0, 1].|
|fdBoundingPoly|[GoogleCloudVisionV1p4beta1BoundingPoly](#schemagooglecloudvisionv1p4beta1boundingpoly)|false|none|The `fd_bounding_poly` bounding polygon is tighter than the `boundingPoly`, and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the fd (face detection) prefix.|
|headwearLikelihood|string|false|none|Headwear likelihood.|
|joyLikelihood|string|false|none|Joy likelihood.|
|landmarkingConfidence|number(float)|false|none|Face landmarking confidence. Range [0, 1].|
|landmarks|[[GoogleCloudVisionV1p4beta1FaceAnnotationLandmark](#schemagooglecloudvisionv1p4beta1faceannotationlandmark)]|false|none|Detected face landmarks.|
|panAngle|number(float)|false|none|Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].|
|recognitionResult|[[GoogleCloudVisionV1p4beta1FaceRecognitionResult](#schemagooglecloudvisionv1p4beta1facerecognitionresult)]|false|none|Additional recognition information. Only computed if image_context.face_recognition_params is provided, **and** a match is found to a Celebrity in the input CelebritySet. This field is sorted in order of decreasing confidence values.|
|rollAngle|number(float)|false|none|Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].|
|sorrowLikelihood|string|false|none|Sorrow likelihood.|
|surpriseLikelihood|string|false|none|Surprise likelihood.|
|tiltAngle|number(float)|false|none|Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].|
|underExposedLikelihood|string|false|none|Under-exposed likelihood.|

#### Enumerated Values

|Property|Value|
|---|---|
|angerLikelihood|UNKNOWN|
|angerLikelihood|VERY_UNLIKELY|
|angerLikelihood|UNLIKELY|
|angerLikelihood|POSSIBLE|
|angerLikelihood|LIKELY|
|angerLikelihood|VERY_LIKELY|
|blurredLikelihood|UNKNOWN|
|blurredLikelihood|VERY_UNLIKELY|
|blurredLikelihood|UNLIKELY|
|blurredLikelihood|POSSIBLE|
|blurredLikelihood|LIKELY|
|blurredLikelihood|VERY_LIKELY|
|headwearLikelihood|UNKNOWN|
|headwearLikelihood|VERY_UNLIKELY|
|headwearLikelihood|UNLIKELY|
|headwearLikelihood|POSSIBLE|
|headwearLikelihood|LIKELY|
|headwearLikelihood|VERY_LIKELY|
|joyLikelihood|UNKNOWN|
|joyLikelihood|VERY_UNLIKELY|
|joyLikelihood|UNLIKELY|
|joyLikelihood|POSSIBLE|
|joyLikelihood|LIKELY|
|joyLikelihood|VERY_LIKELY|
|sorrowLikelihood|UNKNOWN|
|sorrowLikelihood|VERY_UNLIKELY|
|sorrowLikelihood|UNLIKELY|
|sorrowLikelihood|POSSIBLE|
|sorrowLikelihood|LIKELY|
|sorrowLikelihood|VERY_LIKELY|
|surpriseLikelihood|UNKNOWN|
|surpriseLikelihood|VERY_UNLIKELY|
|surpriseLikelihood|UNLIKELY|
|surpriseLikelihood|POSSIBLE|
|surpriseLikelihood|LIKELY|
|surpriseLikelihood|VERY_LIKELY|
|underExposedLikelihood|UNKNOWN|
|underExposedLikelihood|VERY_UNLIKELY|
|underExposedLikelihood|UNLIKELY|
|underExposedLikelihood|POSSIBLE|
|underExposedLikelihood|LIKELY|
|underExposedLikelihood|VERY_LIKELY|

<h2 id="tocS_GoogleCloudVisionV1p4beta1FaceAnnotationLandmark">GoogleCloudVisionV1p4beta1FaceAnnotationLandmark</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1faceannotationlandmark"></a>
<a id="schema_GoogleCloudVisionV1p4beta1FaceAnnotationLandmark"></a>
<a id="tocSgooglecloudvisionv1p4beta1faceannotationlandmark"></a>
<a id="tocsgooglecloudvisionv1p4beta1faceannotationlandmark"></a>

```json
{
  "position": {
    "x": 0,
    "y": 0,
    "z": 0
  },
  "type": "UNKNOWN_LANDMARK"
}
```

A face-specific landmark (for example, a face feature).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[GoogleCloudVisionV1p4beta1Position](#schemagooglecloudvisionv1p4beta1position)|false|none|Face landmark position.|
|type|string|false|none|Face landmark type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNKNOWN_LANDMARK|
|type|LEFT_EYE|
|type|RIGHT_EYE|
|type|LEFT_OF_LEFT_EYEBROW|
|type|RIGHT_OF_LEFT_EYEBROW|
|type|LEFT_OF_RIGHT_EYEBROW|
|type|RIGHT_OF_RIGHT_EYEBROW|
|type|MIDPOINT_BETWEEN_EYES|
|type|NOSE_TIP|
|type|UPPER_LIP|
|type|LOWER_LIP|
|type|MOUTH_LEFT|
|type|MOUTH_RIGHT|
|type|MOUTH_CENTER|
|type|NOSE_BOTTOM_RIGHT|
|type|NOSE_BOTTOM_LEFT|
|type|NOSE_BOTTOM_CENTER|
|type|LEFT_EYE_TOP_BOUNDARY|
|type|LEFT_EYE_RIGHT_CORNER|
|type|LEFT_EYE_BOTTOM_BOUNDARY|
|type|LEFT_EYE_LEFT_CORNER|
|type|RIGHT_EYE_TOP_BOUNDARY|
|type|RIGHT_EYE_RIGHT_CORNER|
|type|RIGHT_EYE_BOTTOM_BOUNDARY|
|type|RIGHT_EYE_LEFT_CORNER|
|type|LEFT_EYEBROW_UPPER_MIDPOINT|
|type|RIGHT_EYEBROW_UPPER_MIDPOINT|
|type|LEFT_EAR_TRAGION|
|type|RIGHT_EAR_TRAGION|
|type|LEFT_EYE_PUPIL|
|type|RIGHT_EYE_PUPIL|
|type|FOREHEAD_GLABELLA|
|type|CHIN_GNATHION|
|type|CHIN_LEFT_GONION|
|type|CHIN_RIGHT_GONION|
|type|LEFT_CHEEK_CENTER|
|type|RIGHT_CHEEK_CENTER|

<h2 id="tocS_GoogleCloudVisionV1p4beta1FaceRecognitionResult">GoogleCloudVisionV1p4beta1FaceRecognitionResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1facerecognitionresult"></a>
<a id="schema_GoogleCloudVisionV1p4beta1FaceRecognitionResult"></a>
<a id="tocSgooglecloudvisionv1p4beta1facerecognitionresult"></a>
<a id="tocsgooglecloudvisionv1p4beta1facerecognitionresult"></a>

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

Information about a face's identity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|celebrity|[GoogleCloudVisionV1p4beta1Celebrity](#schemagooglecloudvisionv1p4beta1celebrity)|false|none|The Celebrity that this face was matched to.|
|confidence|number(float)|false|none|Recognition confidence. Range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p4beta1GcsDestination">GoogleCloudVisionV1p4beta1GcsDestination</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1gcsdestination"></a>
<a id="schema_GoogleCloudVisionV1p4beta1GcsDestination"></a>
<a id="tocSgooglecloudvisionv1p4beta1gcsdestination"></a>
<a id="tocsgooglecloudvisionv1p4beta1gcsdestination"></a>

```json
{
  "uri": "string"
}
```

The Google Cloud Storage location where the output will be written to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with "filenameprefix". * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1GcsSource">GoogleCloudVisionV1p4beta1GcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1gcssource"></a>
<a id="schema_GoogleCloudVisionV1p4beta1GcsSource"></a>
<a id="tocSgooglecloudvisionv1p4beta1gcssource"></a>
<a id="tocsgooglecloudvisionv1p4beta1gcssource"></a>

```json
{
  "uri": "string"
}
```

The Google Cloud Storage location where the input will be read from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Google Cloud Storage URI for the input file. This must only be a Google Cloud Storage object. Wildcards are not currently supported.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1ImageAnnotationContext">GoogleCloudVisionV1p4beta1ImageAnnotationContext</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1imageannotationcontext"></a>
<a id="schema_GoogleCloudVisionV1p4beta1ImageAnnotationContext"></a>
<a id="tocSgooglecloudvisionv1p4beta1imageannotationcontext"></a>
<a id="tocsgooglecloudvisionv1p4beta1imageannotationcontext"></a>

```json
{
  "pageNumber": 0,
  "uri": "string"
}
```

If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageNumber|integer(int32)|false|none|If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.|
|uri|string|false|none|The URI of the file used to produce the image.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1ImageProperties">GoogleCloudVisionV1p4beta1ImageProperties</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1imageproperties"></a>
<a id="schema_GoogleCloudVisionV1p4beta1ImageProperties"></a>
<a id="tocSgooglecloudvisionv1p4beta1imageproperties"></a>
<a id="tocsgooglecloudvisionv1p4beta1imageproperties"></a>

```json
{
  "dominantColors": {
    "colors": [
      {
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "pixelFraction": 0,
        "score": 0
      }
    ]
  }
}
```

Stores image properties, such as dominant colors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dominantColors|[GoogleCloudVisionV1p4beta1DominantColorsAnnotation](#schemagooglecloudvisionv1p4beta1dominantcolorsannotation)|false|none|If present, dominant colors completed successfully.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1ImportProductSetsResponse">GoogleCloudVisionV1p4beta1ImportProductSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1importproductsetsresponse"></a>
<a id="schema_GoogleCloudVisionV1p4beta1ImportProductSetsResponse"></a>
<a id="tocSgooglecloudvisionv1p4beta1importproductsetsresponse"></a>
<a id="tocsgooglecloudvisionv1p4beta1importproductsetsresponse"></a>

```json
{
  "referenceImages": [
    {
      "boundingPolys": [
        {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        }
      ],
      "name": "string",
      "uri": "string"
    }
  ],
  "statuses": [
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

Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|referenceImages|[[GoogleCloudVisionV1p4beta1ReferenceImage](#schemagooglecloudvisionv1p4beta1referenceimage)]|false|none|The list of reference_images that are imported successfully.|
|statuses|[[Status](#schemastatus)]|false|none|The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1InputConfig">GoogleCloudVisionV1p4beta1InputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1inputconfig"></a>
<a id="schema_GoogleCloudVisionV1p4beta1InputConfig"></a>
<a id="tocSgooglecloudvisionv1p4beta1inputconfig"></a>
<a id="tocsgooglecloudvisionv1p4beta1inputconfig"></a>

```json
{
  "content": "string",
  "gcsSource": {
    "uri": "string"
  },
  "mimeType": "string"
}
```

The desired input location and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.|
|gcsSource|[GoogleCloudVisionV1p4beta1GcsSource](#schemagooglecloudvisionv1p4beta1gcssource)|false|none|The Google Cloud Storage location to read the input from.|
|mimeType|string|false|none|The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation">GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1localizedobjectannotation"></a>
<a id="schema_GoogleCloudVisionV1p4beta1LocalizedObjectAnnotation"></a>
<a id="tocSgooglecloudvisionv1p4beta1localizedobjectannotation"></a>
<a id="tocsgooglecloudvisionv1p4beta1localizedobjectannotation"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "languageCode": "string",
  "mid": "string",
  "name": "string",
  "score": 0
}
```

Set of detected objects with bounding boxes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p4beta1BoundingPoly](#schemagooglecloudvisionv1p4beta1boundingpoly)|false|none|Image region to which this object belongs. This must be populated.|
|languageCode|string|false|none|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|mid|string|false|none|Object ID that should align with EntityAnnotation mid.|
|name|string|false|none|Object name, expressed in its `language_code` language.|
|score|number(float)|false|none|Score of the result. Range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p4beta1LocationInfo">GoogleCloudVisionV1p4beta1LocationInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1locationinfo"></a>
<a id="schema_GoogleCloudVisionV1p4beta1LocationInfo"></a>
<a id="tocSgooglecloudvisionv1p4beta1locationinfo"></a>
<a id="tocsgooglecloudvisionv1p4beta1locationinfo"></a>

```json
{
  "latLng": {
    "latitude": 0,
    "longitude": 0
  }
}
```

Detected entity location information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latLng|[LatLng](#schemalatlng)|false|none|lat/long location coordinates.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1NormalizedVertex">GoogleCloudVisionV1p4beta1NormalizedVertex</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1normalizedvertex"></a>
<a id="schema_GoogleCloudVisionV1p4beta1NormalizedVertex"></a>
<a id="tocSgooglecloudvisionv1p4beta1normalizedvertex"></a>
<a id="tocsgooglecloudvisionv1p4beta1normalizedvertex"></a>

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

<h2 id="tocS_GoogleCloudVisionV1p4beta1OperationMetadata">GoogleCloudVisionV1p4beta1OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1operationmetadata"></a>
<a id="schema_GoogleCloudVisionV1p4beta1OperationMetadata"></a>
<a id="tocSgooglecloudvisionv1p4beta1operationmetadata"></a>
<a id="tocsgooglecloudvisionv1p4beta1operationmetadata"></a>

```json
{
  "createTime": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Contains metadata for the BatchAnnotateImages operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time when the batch request was received.|
|state|string|false|none|Current state of the batch operation.|
|updateTime|string(google-datetime)|false|none|The time when the operation result was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATED|
|state|RUNNING|
|state|DONE|
|state|CANCELLED|

<h2 id="tocS_GoogleCloudVisionV1p4beta1OutputConfig">GoogleCloudVisionV1p4beta1OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1outputconfig"></a>
<a id="schema_GoogleCloudVisionV1p4beta1OutputConfig"></a>
<a id="tocSgooglecloudvisionv1p4beta1outputconfig"></a>
<a id="tocsgooglecloudvisionv1p4beta1outputconfig"></a>

```json
{
  "batchSize": 0,
  "gcsDestination": {
    "uri": "string"
  }
}
```

The desired output location and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchSize|integer(int32)|false|none|The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.|
|gcsDestination|[GoogleCloudVisionV1p4beta1GcsDestination](#schemagooglecloudvisionv1p4beta1gcsdestination)|false|none|The Google Cloud Storage location to write the output(s) to.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1Page">GoogleCloudVisionV1p4beta1Page</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1page"></a>
<a id="schema_GoogleCloudVisionV1p4beta1Page"></a>
<a id="tocSgooglecloudvisionv1p4beta1page"></a>
<a id="tocsgooglecloudvisionv1p4beta1page"></a>

```json
{
  "blocks": [
    {
      "blockType": "UNKNOWN",
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "paragraphs": [
        {
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          },
          "words": [
            {
              "boundingBox": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "property": {
                "detectedBreak": {
                  "isPrefix": true,
                  "type": "UNKNOWN"
                },
                "detectedLanguages": [
                  {
                    "confidence": 0,
                    "languageCode": "string"
                  }
                ]
              },
              "symbols": [
                {
                  "boundingBox": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ],
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "confidence": 0,
                  "property": {
                    "detectedBreak": {
                      "isPrefix": true,
                      "type": "UNKNOWN"
                    },
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ]
                  },
                  "text": "string"
                }
              ]
            }
          ]
        }
      ],
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      }
    }
  ],
  "confidence": 0,
  "height": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "width": 0
}
```

Detected page from OCR.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocks|[[GoogleCloudVisionV1p4beta1Block](#schemagooglecloudvisionv1p4beta1block)]|false|none|List of blocks of text, images etc on this page.|
|confidence|number(float)|false|none|Confidence of the OCR results on the page. Range [0, 1].|
|height|integer(int32)|false|none|Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.|
|property|[GoogleCloudVisionV1p4beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p4beta1textannotationtextproperty)|false|none|Additional information detected on the page.|
|width|integer(int32)|false|none|Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1Paragraph">GoogleCloudVisionV1p4beta1Paragraph</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1paragraph"></a>
<a id="schema_GoogleCloudVisionV1p4beta1Paragraph"></a>
<a id="tocSgooglecloudvisionv1p4beta1paragraph"></a>
<a id="tocsgooglecloudvisionv1p4beta1paragraph"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "words": [
    {
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "symbols": [
        {
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          },
          "text": "string"
        }
      ]
    }
  ]
}
```

Structural unit of text representing a number of words in certain order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[GoogleCloudVisionV1p4beta1BoundingPoly](#schemagooglecloudvisionv1p4beta1boundingpoly)|false|none|The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results for the paragraph. Range [0, 1].|
|property|[GoogleCloudVisionV1p4beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p4beta1textannotationtextproperty)|false|none|Additional information detected for the paragraph.|
|words|[[GoogleCloudVisionV1p4beta1Word](#schemagooglecloudvisionv1p4beta1word)]|false|none|List of all words in this paragraph.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1Position">GoogleCloudVisionV1p4beta1Position</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1position"></a>
<a id="schema_GoogleCloudVisionV1p4beta1Position"></a>
<a id="tocSgooglecloudvisionv1p4beta1position"></a>
<a id="tocsgooglecloudvisionv1p4beta1position"></a>

```json
{
  "x": 0,
  "y": 0,
  "z": 0
}
```

A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number(float)|false|none|X coordinate.|
|y|number(float)|false|none|Y coordinate.|
|z|number(float)|false|none|Z coordinate (or depth).|

<h2 id="tocS_GoogleCloudVisionV1p4beta1Product">GoogleCloudVisionV1p4beta1Product</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1product"></a>
<a id="schema_GoogleCloudVisionV1p4beta1Product"></a>
<a id="tocSgooglecloudvisionv1p4beta1product"></a>
<a id="tocsgooglecloudvisionv1p4beta1product"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "name": "string",
  "productCategory": "string",
  "productLabels": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

A Product contains ReferenceImages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|User-provided metadata to be stored with this product. Must be at most 4096 characters long.|
|displayName|string|false|none|The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.|
|name|string|false|none|The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.|
|productCategory|string|false|none|Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.|
|productLabels|[[GoogleCloudVisionV1p4beta1ProductKeyValue](#schemagooglecloudvisionv1p4beta1productkeyvalue)]|false|none|Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1ProductKeyValue">GoogleCloudVisionV1p4beta1ProductKeyValue</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1productkeyvalue"></a>
<a id="schema_GoogleCloudVisionV1p4beta1ProductKeyValue"></a>
<a id="tocSgooglecloudvisionv1p4beta1productkeyvalue"></a>
<a id="tocsgooglecloudvisionv1p4beta1productkeyvalue"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

A product label represented as a key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.|
|value|string|false|none|The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1ProductSearchResults">GoogleCloudVisionV1p4beta1ProductSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1productsearchresults"></a>
<a id="schema_GoogleCloudVisionV1p4beta1ProductSearchResults"></a>
<a id="tocSgooglecloudvisionv1p4beta1productsearchresults"></a>
<a id="tocsgooglecloudvisionv1p4beta1productsearchresults"></a>

```json
{
  "indexTime": "string",
  "productGroupedResults": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "objectAnnotations": [
        {
          "languageCode": "string",
          "mid": "string",
          "name": "string",
          "score": 0
        }
      ],
      "results": [
        {
          "image": "string",
          "product": {
            "description": "string",
            "displayName": "string",
            "name": "string",
            "productCategory": "string",
            "productLabels": [
              {
                "key": "string",
                "value": "string"
              }
            ]
          },
          "score": 0
        }
      ]
    }
  ],
  "results": [
    {
      "image": "string",
      "product": {
        "description": "string",
        "displayName": "string",
        "name": "string",
        "productCategory": "string",
        "productLabels": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "score": 0
    }
  ]
}
```

Results for a product search request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexTime|string(google-datetime)|false|none|Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.|
|productGroupedResults|[[GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult](#schemagooglecloudvisionv1p4beta1productsearchresultsgroupedresult)]|false|none|List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.|
|results|[[GoogleCloudVisionV1p4beta1ProductSearchResultsResult](#schemagooglecloudvisionv1p4beta1productsearchresultsresult)]|false|none|List of results, one for each product match.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult">GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1productsearchresultsgroupedresult"></a>
<a id="schema_GoogleCloudVisionV1p4beta1ProductSearchResultsGroupedResult"></a>
<a id="tocSgooglecloudvisionv1p4beta1productsearchresultsgroupedresult"></a>
<a id="tocsgooglecloudvisionv1p4beta1productsearchresultsgroupedresult"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "objectAnnotations": [
    {
      "languageCode": "string",
      "mid": "string",
      "name": "string",
      "score": 0
    }
  ],
  "results": [
    {
      "image": "string",
      "product": {
        "description": "string",
        "displayName": "string",
        "name": "string",
        "productCategory": "string",
        "productLabels": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "score": 0
    }
  ]
}
```

Information about the products similar to a single product in a query image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[GoogleCloudVisionV1p4beta1BoundingPoly](#schemagooglecloudvisionv1p4beta1boundingpoly)|false|none|The bounding polygon around the product detected in the query image.|
|objectAnnotations|[[GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation](#schemagooglecloudvisionv1p4beta1productsearchresultsobjectannotation)]|false|none|List of generic predictions for the object in the bounding box.|
|results|[[GoogleCloudVisionV1p4beta1ProductSearchResultsResult](#schemagooglecloudvisionv1p4beta1productsearchresultsresult)]|false|none|List of results, one for each product match.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation">GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1productsearchresultsobjectannotation"></a>
<a id="schema_GoogleCloudVisionV1p4beta1ProductSearchResultsObjectAnnotation"></a>
<a id="tocSgooglecloudvisionv1p4beta1productsearchresultsobjectannotation"></a>
<a id="tocsgooglecloudvisionv1p4beta1productsearchresultsobjectannotation"></a>

```json
{
  "languageCode": "string",
  "mid": "string",
  "name": "string",
  "score": 0
}
```

Prediction for what the object in the bounding box is.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|mid|string|false|none|Object ID that should align with EntityAnnotation mid.|
|name|string|false|none|Object name, expressed in its `language_code` language.|
|score|number(float)|false|none|Score of the result. Range [0, 1].|

<h2 id="tocS_GoogleCloudVisionV1p4beta1ProductSearchResultsResult">GoogleCloudVisionV1p4beta1ProductSearchResultsResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1productsearchresultsresult"></a>
<a id="schema_GoogleCloudVisionV1p4beta1ProductSearchResultsResult"></a>
<a id="tocSgooglecloudvisionv1p4beta1productsearchresultsresult"></a>
<a id="tocsgooglecloudvisionv1p4beta1productsearchresultsresult"></a>

```json
{
  "image": "string",
  "product": {
    "description": "string",
    "displayName": "string",
    "name": "string",
    "productCategory": "string",
    "productLabels": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "score": 0
}
```

Information about a product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|string|false|none|The resource name of the image from the product that is the closest match to the query.|
|product|[GoogleCloudVisionV1p4beta1Product](#schemagooglecloudvisionv1p4beta1product)|false|none|The Product.|
|score|number(float)|false|none|A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).|

<h2 id="tocS_GoogleCloudVisionV1p4beta1Property">GoogleCloudVisionV1p4beta1Property</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1property"></a>
<a id="schema_GoogleCloudVisionV1p4beta1Property"></a>
<a id="tocSgooglecloudvisionv1p4beta1property"></a>
<a id="tocsgooglecloudvisionv1p4beta1property"></a>

```json
{
  "name": "string",
  "uint64Value": "string",
  "value": "string"
}
```

A `Property` consists of a user-supplied name/value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the property.|
|uint64Value|string(uint64)|false|none|Value of numeric properties.|
|value|string|false|none|Value of the property.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1ReferenceImage">GoogleCloudVisionV1p4beta1ReferenceImage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1referenceimage"></a>
<a id="schema_GoogleCloudVisionV1p4beta1ReferenceImage"></a>
<a id="tocSgooglecloudvisionv1p4beta1referenceimage"></a>
<a id="tocsgooglecloudvisionv1p4beta1referenceimage"></a>

```json
{
  "boundingPolys": [
    {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  ],
  "name": "string",
  "uri": "string"
}
```

A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPolys|[[GoogleCloudVisionV1p4beta1BoundingPoly](#schemagooglecloudvisionv1p4beta1boundingpoly)]|false|none|Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).|
|name|string|false|none|The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image.|
|uri|string|false|none|Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1SafeSearchAnnotation">GoogleCloudVisionV1p4beta1SafeSearchAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1safesearchannotation"></a>
<a id="schema_GoogleCloudVisionV1p4beta1SafeSearchAnnotation"></a>
<a id="tocSgooglecloudvisionv1p4beta1safesearchannotation"></a>
<a id="tocsgooglecloudvisionv1p4beta1safesearchannotation"></a>

```json
{
  "adult": "UNKNOWN",
  "medical": "UNKNOWN",
  "racy": "UNKNOWN",
  "spoof": "UNKNOWN",
  "violence": "UNKNOWN"
}
```

Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adult|string|false|none|Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.|
|medical|string|false|none|Likelihood that this is a medical image.|
|racy|string|false|none|Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.|
|spoof|string|false|none|Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.|
|violence|string|false|none|Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals.|

#### Enumerated Values

|Property|Value|
|---|---|
|adult|UNKNOWN|
|adult|VERY_UNLIKELY|
|adult|UNLIKELY|
|adult|POSSIBLE|
|adult|LIKELY|
|adult|VERY_LIKELY|
|medical|UNKNOWN|
|medical|VERY_UNLIKELY|
|medical|UNLIKELY|
|medical|POSSIBLE|
|medical|LIKELY|
|medical|VERY_LIKELY|
|racy|UNKNOWN|
|racy|VERY_UNLIKELY|
|racy|UNLIKELY|
|racy|POSSIBLE|
|racy|LIKELY|
|racy|VERY_LIKELY|
|spoof|UNKNOWN|
|spoof|VERY_UNLIKELY|
|spoof|UNLIKELY|
|spoof|POSSIBLE|
|spoof|LIKELY|
|spoof|VERY_LIKELY|
|violence|UNKNOWN|
|violence|VERY_UNLIKELY|
|violence|UNLIKELY|
|violence|POSSIBLE|
|violence|LIKELY|
|violence|VERY_LIKELY|

<h2 id="tocS_GoogleCloudVisionV1p4beta1Symbol">GoogleCloudVisionV1p4beta1Symbol</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1symbol"></a>
<a id="schema_GoogleCloudVisionV1p4beta1Symbol"></a>
<a id="tocSgooglecloudvisionv1p4beta1symbol"></a>
<a id="tocsgooglecloudvisionv1p4beta1symbol"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "text": "string"
}
```

A single symbol representation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[GoogleCloudVisionV1p4beta1BoundingPoly](#schemagooglecloudvisionv1p4beta1boundingpoly)|false|none|The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results for the symbol. Range [0, 1].|
|property|[GoogleCloudVisionV1p4beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p4beta1textannotationtextproperty)|false|none|Additional information detected for the symbol.|
|text|string|false|none|The actual UTF-8 representation of the symbol.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1TextAnnotation">GoogleCloudVisionV1p4beta1TextAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1textannotation"></a>
<a id="schema_GoogleCloudVisionV1p4beta1TextAnnotation"></a>
<a id="tocSgooglecloudvisionv1p4beta1textannotation"></a>
<a id="tocsgooglecloudvisionv1p4beta1textannotation"></a>

```json
{
  "pages": [
    {
      "blocks": [
        {
          "blockType": "UNKNOWN",
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "paragraphs": [
            {
              "boundingBox": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "property": {
                "detectedBreak": {
                  "isPrefix": true,
                  "type": "UNKNOWN"
                },
                "detectedLanguages": [
                  {
                    "confidence": 0,
                    "languageCode": "string"
                  }
                ]
              },
              "words": [
                {
                  "boundingBox": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ],
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "confidence": 0,
                  "property": {
                    "detectedBreak": {
                      "isPrefix": true,
                      "type": "UNKNOWN"
                    },
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ]
                  },
                  "symbols": [
                    {
                      "boundingBox": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "property": {
                        "detectedBreak": {
                          "isPrefix": true,
                          "type": "UNKNOWN"
                        },
                        "detectedLanguages": [
                          {
                            "confidence": 0,
                            "languageCode": "string"
                          }
                        ]
                      },
                      "text": "string"
                    }
                  ]
                }
              ]
            }
          ],
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          }
        }
      ],
      "confidence": 0,
      "height": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "width": 0
    }
  ],
  "text": "string"
}
```

TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pages|[[GoogleCloudVisionV1p4beta1Page](#schemagooglecloudvisionv1p4beta1page)]|false|none|List of pages detected by OCR.|
|text|string|false|none|UTF-8 text detected on the pages.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak">GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1textannotationdetectedbreak"></a>
<a id="schema_GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak"></a>
<a id="tocSgooglecloudvisionv1p4beta1textannotationdetectedbreak"></a>
<a id="tocsgooglecloudvisionv1p4beta1textannotationdetectedbreak"></a>

```json
{
  "isPrefix": true,
  "type": "UNKNOWN"
}
```

Detected start or end of a structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isPrefix|boolean|false|none|True if break prepends the element.|
|type|string|false|none|Detected break type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNKNOWN|
|type|SPACE|
|type|SURE_SPACE|
|type|EOL_SURE_SPACE|
|type|HYPHEN|
|type|LINE_BREAK|

<h2 id="tocS_GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage">GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1textannotationdetectedlanguage"></a>
<a id="schema_GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage"></a>
<a id="tocSgooglecloudvisionv1p4beta1textannotationdetectedlanguage"></a>
<a id="tocsgooglecloudvisionv1p4beta1textannotationdetectedlanguage"></a>

```json
{
  "confidence": 0,
  "languageCode": "string"
}
```

Detected language for a structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confidence|number(float)|false|none|Confidence of detected language. Range [0, 1].|
|languageCode|string|false|none|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1TextAnnotationTextProperty">GoogleCloudVisionV1p4beta1TextAnnotationTextProperty</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1textannotationtextproperty"></a>
<a id="schema_GoogleCloudVisionV1p4beta1TextAnnotationTextProperty"></a>
<a id="tocSgooglecloudvisionv1p4beta1textannotationtextproperty"></a>
<a id="tocsgooglecloudvisionv1p4beta1textannotationtextproperty"></a>

```json
{
  "detectedBreak": {
    "isPrefix": true,
    "type": "UNKNOWN"
  },
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ]
}
```

Additional information detected on the structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedBreak|[GoogleCloudVisionV1p4beta1TextAnnotationDetectedBreak](#schemagooglecloudvisionv1p4beta1textannotationdetectedbreak)|false|none|Detected start or end of a text segment.|
|detectedLanguages|[[GoogleCloudVisionV1p4beta1TextAnnotationDetectedLanguage](#schemagooglecloudvisionv1p4beta1textannotationdetectedlanguage)]|false|none|A list of detected languages together with confidence.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1Vertex">GoogleCloudVisionV1p4beta1Vertex</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1vertex"></a>
<a id="schema_GoogleCloudVisionV1p4beta1Vertex"></a>
<a id="tocSgooglecloudvisionv1p4beta1vertex"></a>
<a id="tocsgooglecloudvisionv1p4beta1vertex"></a>

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

<h2 id="tocS_GoogleCloudVisionV1p4beta1WebDetection">GoogleCloudVisionV1p4beta1WebDetection</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1webdetection"></a>
<a id="schema_GoogleCloudVisionV1p4beta1WebDetection"></a>
<a id="tocSgooglecloudvisionv1p4beta1webdetection"></a>
<a id="tocsgooglecloudvisionv1p4beta1webdetection"></a>

```json
{
  "bestGuessLabels": [
    {
      "label": "string",
      "languageCode": "string"
    }
  ],
  "fullMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "pagesWithMatchingImages": [
    {
      "fullMatchingImages": [
        {
          "score": 0,
          "url": "string"
        }
      ],
      "pageTitle": "string",
      "partialMatchingImages": [
        {
          "score": 0,
          "url": "string"
        }
      ],
      "score": 0,
      "url": "string"
    }
  ],
  "partialMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "visuallySimilarImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "webEntities": [
    {
      "description": "string",
      "entityId": "string",
      "score": 0
    }
  ]
}
```

Relevant information for the image from the Internet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bestGuessLabels|[[GoogleCloudVisionV1p4beta1WebDetectionWebLabel](#schemagooglecloudvisionv1p4beta1webdetectionweblabel)]|false|none|The service's best guess as to the topic of the request image. Inferred from similar images on the open web.|
|fullMatchingImages|[[GoogleCloudVisionV1p4beta1WebDetectionWebImage](#schemagooglecloudvisionv1p4beta1webdetectionwebimage)]|false|none|Fully matching images from the Internet. Can include resized copies of the query image.|
|pagesWithMatchingImages|[[GoogleCloudVisionV1p4beta1WebDetectionWebPage](#schemagooglecloudvisionv1p4beta1webdetectionwebpage)]|false|none|Web pages containing the matching images from the Internet.|
|partialMatchingImages|[[GoogleCloudVisionV1p4beta1WebDetectionWebImage](#schemagooglecloudvisionv1p4beta1webdetectionwebimage)]|false|none|Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.|
|visuallySimilarImages|[[GoogleCloudVisionV1p4beta1WebDetectionWebImage](#schemagooglecloudvisionv1p4beta1webdetectionwebimage)]|false|none|The visually similar image results.|
|webEntities|[[GoogleCloudVisionV1p4beta1WebDetectionWebEntity](#schemagooglecloudvisionv1p4beta1webdetectionwebentity)]|false|none|Deduced entities from similar images on the Internet.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1WebDetectionWebEntity">GoogleCloudVisionV1p4beta1WebDetectionWebEntity</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1webdetectionwebentity"></a>
<a id="schema_GoogleCloudVisionV1p4beta1WebDetectionWebEntity"></a>
<a id="tocSgooglecloudvisionv1p4beta1webdetectionwebentity"></a>
<a id="tocsgooglecloudvisionv1p4beta1webdetectionwebentity"></a>

```json
{
  "description": "string",
  "entityId": "string",
  "score": 0
}
```

Entity deduced from similar images on the Internet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Canonical description of the entity, in English.|
|entityId|string|false|none|Opaque entity ID.|
|score|number(float)|false|none|Overall relevancy score for the entity. Not normalized and not comparable across different image queries.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1WebDetectionWebImage">GoogleCloudVisionV1p4beta1WebDetectionWebImage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1webdetectionwebimage"></a>
<a id="schema_GoogleCloudVisionV1p4beta1WebDetectionWebImage"></a>
<a id="tocSgooglecloudvisionv1p4beta1webdetectionwebimage"></a>
<a id="tocsgooglecloudvisionv1p4beta1webdetectionwebimage"></a>

```json
{
  "score": 0,
  "url": "string"
}
```

Metadata for online images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score|number(float)|false|none|(Deprecated) Overall relevancy score for the image.|
|url|string|false|none|The result image URL.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1WebDetectionWebLabel">GoogleCloudVisionV1p4beta1WebDetectionWebLabel</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1webdetectionweblabel"></a>
<a id="schema_GoogleCloudVisionV1p4beta1WebDetectionWebLabel"></a>
<a id="tocSgooglecloudvisionv1p4beta1webdetectionweblabel"></a>
<a id="tocsgooglecloudvisionv1p4beta1webdetectionweblabel"></a>

```json
{
  "label": "string",
  "languageCode": "string"
}
```

Label to provide extra metadata for the web detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|Label for extra metadata.|
|languageCode|string|false|none|The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1WebDetectionWebPage">GoogleCloudVisionV1p4beta1WebDetectionWebPage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1webdetectionwebpage"></a>
<a id="schema_GoogleCloudVisionV1p4beta1WebDetectionWebPage"></a>
<a id="tocSgooglecloudvisionv1p4beta1webdetectionwebpage"></a>
<a id="tocsgooglecloudvisionv1p4beta1webdetectionwebpage"></a>

```json
{
  "fullMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "pageTitle": "string",
  "partialMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "score": 0,
  "url": "string"
}
```

Metadata for web pages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullMatchingImages|[[GoogleCloudVisionV1p4beta1WebDetectionWebImage](#schemagooglecloudvisionv1p4beta1webdetectionwebimage)]|false|none|Fully matching images on the page. Can include resized copies of the query image.|
|pageTitle|string|false|none|Title for the web page, may contain HTML markups.|
|partialMatchingImages|[[GoogleCloudVisionV1p4beta1WebDetectionWebImage](#schemagooglecloudvisionv1p4beta1webdetectionwebimage)]|false|none|Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.|
|score|number(float)|false|none|(Deprecated) Overall relevancy score for the web page.|
|url|string|false|none|The result web page URL.|

<h2 id="tocS_GoogleCloudVisionV1p4beta1Word">GoogleCloudVisionV1p4beta1Word</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudvisionv1p4beta1word"></a>
<a id="schema_GoogleCloudVisionV1p4beta1Word"></a>
<a id="tocSgooglecloudvisionv1p4beta1word"></a>
<a id="tocsgooglecloudvisionv1p4beta1word"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "symbols": [
    {
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "text": "string"
    }
  ]
}
```

A word representation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[GoogleCloudVisionV1p4beta1BoundingPoly](#schemagooglecloudvisionv1p4beta1boundingpoly)|false|none|The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results for the word. Range [0, 1].|
|property|[GoogleCloudVisionV1p4beta1TextAnnotationTextProperty](#schemagooglecloudvisionv1p4beta1textannotationtextproperty)|false|none|Additional information detected for the word.|
|symbols|[[GoogleCloudVisionV1p4beta1Symbol](#schemagooglecloudvisionv1p4beta1symbol)]|false|none|List of symbols in the word. The order of the symbols follows the natural reading order.|

<h2 id="tocS_GroupedResult">GroupedResult</h2>
<!-- backwards compatibility -->
<a id="schemagroupedresult"></a>
<a id="schema_GroupedResult"></a>
<a id="tocSgroupedresult"></a>
<a id="tocsgroupedresult"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "objectAnnotations": [
    {
      "languageCode": "string",
      "mid": "string",
      "name": "string",
      "score": 0
    }
  ],
  "results": [
    {
      "image": "string",
      "product": {
        "description": "string",
        "displayName": "string",
        "name": "string",
        "productCategory": "string",
        "productLabels": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "score": 0
    }
  ]
}
```

Information about the products similar to a single product in a query image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[BoundingPoly](#schemaboundingpoly)|false|none|The bounding polygon around the product detected in the query image.|
|objectAnnotations|[[ObjectAnnotation](#schemaobjectannotation)]|false|none|List of generic predictions for the object in the bounding box.|
|results|[[Result](#schemaresult)]|false|none|List of results, one for each product match.|

<h2 id="tocS_ImageAnnotationContext">ImageAnnotationContext</h2>
<!-- backwards compatibility -->
<a id="schemaimageannotationcontext"></a>
<a id="schema_ImageAnnotationContext"></a>
<a id="tocSimageannotationcontext"></a>
<a id="tocsimageannotationcontext"></a>

```json
{
  "pageNumber": 0,
  "uri": "string"
}
```

If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageNumber|integer(int32)|false|none|If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.|
|uri|string|false|none|The URI of the file used to produce the image.|

<h2 id="tocS_ImageProperties">ImageProperties</h2>
<!-- backwards compatibility -->
<a id="schemaimageproperties"></a>
<a id="schema_ImageProperties"></a>
<a id="tocSimageproperties"></a>
<a id="tocsimageproperties"></a>

```json
{
  "dominantColors": {
    "colors": [
      {
        "color": {
          "alpha": 0,
          "blue": 0,
          "green": 0,
          "red": 0
        },
        "pixelFraction": 0,
        "score": 0
      }
    ]
  }
}
```

Stores image properties, such as dominant colors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dominantColors|[DominantColorsAnnotation](#schemadominantcolorsannotation)|false|none|If present, dominant colors completed successfully.|

<h2 id="tocS_ImportProductSetsResponse">ImportProductSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimportproductsetsresponse"></a>
<a id="schema_ImportProductSetsResponse"></a>
<a id="tocSimportproductsetsresponse"></a>
<a id="tocsimportproductsetsresponse"></a>

```json
{
  "referenceImages": [
    {
      "boundingPolys": [
        {
          "normalizedVertices": [
            {
              "x": 0,
              "y": 0
            }
          ],
          "vertices": [
            {
              "x": 0,
              "y": 0
            }
          ]
        }
      ],
      "name": "string",
      "uri": "string"
    }
  ],
  "statuses": [
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

Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|referenceImages|[[ReferenceImage](#schemareferenceimage)]|false|none|The list of reference_images that are imported successfully.|
|statuses|[[Status](#schemastatus)]|false|none|The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0.|

<h2 id="tocS_InputConfig">InputConfig</h2>
<!-- backwards compatibility -->
<a id="schemainputconfig"></a>
<a id="schema_InputConfig"></a>
<a id="tocSinputconfig"></a>
<a id="tocsinputconfig"></a>

```json
{
  "content": "string",
  "gcsSource": {
    "uri": "string"
  },
  "mimeType": "string"
}
```

The desired input location and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string(byte)|false|none|File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.|
|gcsSource|[GcsSource](#schemagcssource)|false|none|The Google Cloud Storage location to read the input from.|
|mimeType|string|false|none|The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.|

<h2 id="tocS_KeyValue">KeyValue</h2>
<!-- backwards compatibility -->
<a id="schemakeyvalue"></a>
<a id="schema_KeyValue"></a>
<a id="tocSkeyvalue"></a>
<a id="tocskeyvalue"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

A product label represented as a key-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.|
|value|string|false|none|The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes.|

<h2 id="tocS_Landmark">Landmark</h2>
<!-- backwards compatibility -->
<a id="schemalandmark"></a>
<a id="schema_Landmark"></a>
<a id="tocSlandmark"></a>
<a id="tocslandmark"></a>

```json
{
  "position": {
    "x": 0,
    "y": 0,
    "z": 0
  },
  "type": "UNKNOWN_LANDMARK"
}
```

A face-specific landmark (for example, a face feature).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|position|[Position](#schemaposition)|false|none|Face landmark position.|
|type|string|false|none|Face landmark type.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|UNKNOWN_LANDMARK|
|type|LEFT_EYE|
|type|RIGHT_EYE|
|type|LEFT_OF_LEFT_EYEBROW|
|type|RIGHT_OF_LEFT_EYEBROW|
|type|LEFT_OF_RIGHT_EYEBROW|
|type|RIGHT_OF_RIGHT_EYEBROW|
|type|MIDPOINT_BETWEEN_EYES|
|type|NOSE_TIP|
|type|UPPER_LIP|
|type|LOWER_LIP|
|type|MOUTH_LEFT|
|type|MOUTH_RIGHT|
|type|MOUTH_CENTER|
|type|NOSE_BOTTOM_RIGHT|
|type|NOSE_BOTTOM_LEFT|
|type|NOSE_BOTTOM_CENTER|
|type|LEFT_EYE_TOP_BOUNDARY|
|type|LEFT_EYE_RIGHT_CORNER|
|type|LEFT_EYE_BOTTOM_BOUNDARY|
|type|LEFT_EYE_LEFT_CORNER|
|type|RIGHT_EYE_TOP_BOUNDARY|
|type|RIGHT_EYE_RIGHT_CORNER|
|type|RIGHT_EYE_BOTTOM_BOUNDARY|
|type|RIGHT_EYE_LEFT_CORNER|
|type|LEFT_EYEBROW_UPPER_MIDPOINT|
|type|RIGHT_EYEBROW_UPPER_MIDPOINT|
|type|LEFT_EAR_TRAGION|
|type|RIGHT_EAR_TRAGION|
|type|LEFT_EYE_PUPIL|
|type|RIGHT_EYE_PUPIL|
|type|FOREHEAD_GLABELLA|
|type|CHIN_GNATHION|
|type|CHIN_LEFT_GONION|
|type|CHIN_RIGHT_GONION|
|type|LEFT_CHEEK_CENTER|
|type|RIGHT_CHEEK_CENTER|

<h2 id="tocS_LatLng">LatLng</h2>
<!-- backwards compatibility -->
<a id="schemalatlng"></a>
<a id="schema_LatLng"></a>
<a id="tocSlatlng"></a>
<a id="tocslatlng"></a>

```json
{
  "latitude": 0,
  "longitude": 0
}
```

An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number(double)|false|none|The latitude in degrees. It must be in the range [-90.0, +90.0].|
|longitude|number(double)|false|none|The longitude in degrees. It must be in the range [-180.0, +180.0].|

<h2 id="tocS_LocalizedObjectAnnotation">LocalizedObjectAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemalocalizedobjectannotation"></a>
<a id="schema_LocalizedObjectAnnotation"></a>
<a id="tocSlocalizedobjectannotation"></a>
<a id="tocslocalizedobjectannotation"></a>

```json
{
  "boundingPoly": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "languageCode": "string",
  "mid": "string",
  "name": "string",
  "score": 0
}
```

Set of detected objects with bounding boxes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPoly|[BoundingPoly](#schemaboundingpoly)|false|none|Image region to which this object belongs. This must be populated.|
|languageCode|string|false|none|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|mid|string|false|none|Object ID that should align with EntityAnnotation mid.|
|name|string|false|none|Object name, expressed in its `language_code` language.|
|score|number(float)|false|none|Score of the result. Range [0, 1].|

<h2 id="tocS_LocationInfo">LocationInfo</h2>
<!-- backwards compatibility -->
<a id="schemalocationinfo"></a>
<a id="schema_LocationInfo"></a>
<a id="tocSlocationinfo"></a>
<a id="tocslocationinfo"></a>

```json
{
  "latLng": {
    "latitude": 0,
    "longitude": 0
  }
}
```

Detected entity location information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latLng|[LatLng](#schemalatlng)|false|none|lat/long location coordinates.|

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

A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number(float)|false|none|X coordinate.|
|y|number(float)|false|none|Y coordinate.|

<h2 id="tocS_ObjectAnnotation">ObjectAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemaobjectannotation"></a>
<a id="schema_ObjectAnnotation"></a>
<a id="tocSobjectannotation"></a>
<a id="tocsobjectannotation"></a>

```json
{
  "languageCode": "string",
  "mid": "string",
  "name": "string",
  "score": 0
}
```

Prediction for what the object in the bounding box is.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|none|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|
|mid|string|false|none|Object ID that should align with EntityAnnotation mid.|
|name|string|false|none|Object name, expressed in its `language_code` language.|
|score|number(float)|false|none|Score of the result. Range [0, 1].|

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
|response|object|false|none|The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_OperationMetadata">OperationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaoperationmetadata"></a>
<a id="schema_OperationMetadata"></a>
<a id="tocSoperationmetadata"></a>
<a id="tocsoperationmetadata"></a>

```json
{
  "createTime": "string",
  "state": "STATE_UNSPECIFIED",
  "updateTime": "string"
}
```

Contains metadata for the BatchAnnotateImages operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The time when the batch request was received.|
|state|string|false|none|Current state of the batch operation.|
|updateTime|string(google-datetime)|false|none|The time when the operation result was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|CREATED|
|state|RUNNING|
|state|DONE|
|state|CANCELLED|

<h2 id="tocS_OutputConfig">OutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoutputconfig"></a>
<a id="schema_OutputConfig"></a>
<a id="tocSoutputconfig"></a>
<a id="tocsoutputconfig"></a>

```json
{
  "batchSize": 0,
  "gcsDestination": {
    "uri": "string"
  }
}
```

The desired output location and metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchSize|integer(int32)|false|none|The max number of response protos to put into each output JSON file on Google Cloud Storage. The valid range is [1, 100]. If not specified, the default value is 20. For example, for one pdf file with 100 pages, 100 response protos will be generated. If `batch_size` = 20, then 5 json files each containing 20 response protos will be written under the prefix `gcs_destination`.`uri`. Currently, batch_size only applies to GcsDestination, with potential future support for other output configurations.|
|gcsDestination|[GcsDestination](#schemagcsdestination)|false|none|The Google Cloud Storage location to write the output(s) to.|

<h2 id="tocS_Page">Page</h2>
<!-- backwards compatibility -->
<a id="schemapage"></a>
<a id="schema_Page"></a>
<a id="tocSpage"></a>
<a id="tocspage"></a>

```json
{
  "blocks": [
    {
      "blockType": "UNKNOWN",
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "paragraphs": [
        {
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          },
          "words": [
            {
              "boundingBox": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "property": {
                "detectedBreak": {
                  "isPrefix": true,
                  "type": "UNKNOWN"
                },
                "detectedLanguages": [
                  {
                    "confidence": 0,
                    "languageCode": "string"
                  }
                ]
              },
              "symbols": [
                {
                  "boundingBox": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ],
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "confidence": 0,
                  "property": {
                    "detectedBreak": {
                      "isPrefix": true,
                      "type": "UNKNOWN"
                    },
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ]
                  },
                  "text": "string"
                }
              ]
            }
          ]
        }
      ],
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      }
    }
  ],
  "confidence": 0,
  "height": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "width": 0
}
```

Detected page from OCR.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocks|[[Block](#schemablock)]|false|none|List of blocks of text, images etc on this page.|
|confidence|number(float)|false|none|Confidence of the OCR results on the page. Range [0, 1].|
|height|integer(int32)|false|none|Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.|
|property|[TextProperty](#schematextproperty)|false|none|Additional information detected on the page.|
|width|integer(int32)|false|none|Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.|

<h2 id="tocS_Paragraph">Paragraph</h2>
<!-- backwards compatibility -->
<a id="schemaparagraph"></a>
<a id="schema_Paragraph"></a>
<a id="tocSparagraph"></a>
<a id="tocsparagraph"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "words": [
    {
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "symbols": [
        {
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          },
          "text": "string"
        }
      ]
    }
  ]
}
```

Structural unit of text representing a number of words in certain order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[BoundingPoly](#schemaboundingpoly)|false|none|The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results for the paragraph. Range [0, 1].|
|property|[TextProperty](#schematextproperty)|false|none|Additional information detected for the paragraph.|
|words|[[Word](#schemaword)]|false|none|List of all words in this paragraph.|

<h2 id="tocS_Position">Position</h2>
<!-- backwards compatibility -->
<a id="schemaposition"></a>
<a id="schema_Position"></a>
<a id="tocSposition"></a>
<a id="tocsposition"></a>

```json
{
  "x": 0,
  "y": 0,
  "z": 0
}
```

A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x|number(float)|false|none|X coordinate.|
|y|number(float)|false|none|Y coordinate.|
|z|number(float)|false|none|Z coordinate (or depth).|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "name": "string",
  "productCategory": "string",
  "productLabels": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

A Product contains ReferenceImages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|User-provided metadata to be stored with this product. Must be at most 4096 characters long.|
|displayName|string|false|none|The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long.|
|name|string|false|none|The resource name of the product. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`. This field is ignored when creating a product.|
|productCategory|string|false|none|Immutable. The category for the product identified by the reference image. This should be one of "homegoods-v2", "apparel-v2", "toys-v2", "packagedgoods-v1" or "general-v1". The legacy categories "homegoods", "apparel", and "toys" are still supported, but these should not be used for new products.|
|productLabels|[[KeyValue](#schemakeyvalue)]|false|none|Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. "1199". Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet.|

<h2 id="tocS_ProductSearchResults">ProductSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemaproductsearchresults"></a>
<a id="schema_ProductSearchResults"></a>
<a id="tocSproductsearchresults"></a>
<a id="tocsproductsearchresults"></a>

```json
{
  "indexTime": "string",
  "productGroupedResults": [
    {
      "boundingPoly": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "objectAnnotations": [
        {
          "languageCode": "string",
          "mid": "string",
          "name": "string",
          "score": 0
        }
      ],
      "results": [
        {
          "image": "string",
          "product": {
            "description": "string",
            "displayName": "string",
            "name": "string",
            "productCategory": "string",
            "productLabels": [
              {
                "key": "string",
                "value": "string"
              }
            ]
          },
          "score": 0
        }
      ]
    }
  ],
  "results": [
    {
      "image": "string",
      "product": {
        "description": "string",
        "displayName": "string",
        "name": "string",
        "productCategory": "string",
        "productLabels": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "score": 0
    }
  ]
}
```

Results for a product search request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexTime|string(google-datetime)|false|none|Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.|
|productGroupedResults|[[GroupedResult](#schemagroupedresult)]|false|none|List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.|
|results|[[Result](#schemaresult)]|false|none|List of results, one for each product match.|

<h2 id="tocS_Property">Property</h2>
<!-- backwards compatibility -->
<a id="schemaproperty"></a>
<a id="schema_Property"></a>
<a id="tocSproperty"></a>
<a id="tocsproperty"></a>

```json
{
  "name": "string",
  "uint64Value": "string",
  "value": "string"
}
```

A `Property` consists of a user-supplied name/value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the property.|
|uint64Value|string(uint64)|false|none|Value of numeric properties.|
|value|string|false|none|Value of the property.|

<h2 id="tocS_ReferenceImage">ReferenceImage</h2>
<!-- backwards compatibility -->
<a id="schemareferenceimage"></a>
<a id="schema_ReferenceImage"></a>
<a id="tocSreferenceimage"></a>
<a id="tocsreferenceimage"></a>

```json
{
  "boundingPolys": [
    {
      "normalizedVertices": [
        {
          "x": 0,
          "y": 0
        }
      ],
      "vertices": [
        {
          "x": 0,
          "y": 0
        }
      ]
    }
  ],
  "name": "string",
  "uri": "string"
}
```

A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingPolys|[[BoundingPoly](#schemaboundingpoly)]|false|none|Optional. Bounding polygons around the areas of interest in the reference image. If this field is empty, the system will try to detect regions of interest. At most 10 bounding polygons will be used. The provided shape is converted into a non-rotated rectangle. Once converted, the small edge of the rectangle must be greater than or equal to 300 pixels. The aspect ratio must be 1:4 or less (i.e. 1:3 is ok; 1:5 is not).|
|name|string|false|none|The resource name of the reference image. Format is: `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID/referenceImages/IMAGE_ID`. This field is ignored when creating a reference image.|
|uri|string|false|none|Required. The Google Cloud Storage URI of the reference image. The URI must start with `gs://`.|

<h2 id="tocS_Result">Result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_Result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
{
  "image": "string",
  "product": {
    "description": "string",
    "displayName": "string",
    "name": "string",
    "productCategory": "string",
    "productLabels": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "score": 0
}
```

Information about a product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|string|false|none|The resource name of the image from the product that is the closest match to the query.|
|product|[Product](#schemaproduct)|false|none|The Product.|
|score|number(float)|false|none|A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).|

<h2 id="tocS_SafeSearchAnnotation">SafeSearchAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemasafesearchannotation"></a>
<a id="schema_SafeSearchAnnotation"></a>
<a id="tocSsafesearchannotation"></a>
<a id="tocssafesearchannotation"></a>

```json
{
  "adult": "UNKNOWN",
  "medical": "UNKNOWN",
  "racy": "UNKNOWN",
  "spoof": "UNKNOWN",
  "violence": "UNKNOWN"
}
```

Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adult|string|false|none|Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.|
|medical|string|false|none|Likelihood that this is a medical image.|
|racy|string|false|none|Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.|
|spoof|string|false|none|Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.|
|violence|string|false|none|Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals.|

#### Enumerated Values

|Property|Value|
|---|---|
|adult|UNKNOWN|
|adult|VERY_UNLIKELY|
|adult|UNLIKELY|
|adult|POSSIBLE|
|adult|LIKELY|
|adult|VERY_LIKELY|
|medical|UNKNOWN|
|medical|VERY_UNLIKELY|
|medical|UNLIKELY|
|medical|POSSIBLE|
|medical|LIKELY|
|medical|VERY_LIKELY|
|racy|UNKNOWN|
|racy|VERY_UNLIKELY|
|racy|UNLIKELY|
|racy|POSSIBLE|
|racy|LIKELY|
|racy|VERY_LIKELY|
|spoof|UNKNOWN|
|spoof|VERY_UNLIKELY|
|spoof|UNLIKELY|
|spoof|POSSIBLE|
|spoof|LIKELY|
|spoof|VERY_LIKELY|
|violence|UNKNOWN|
|violence|VERY_UNLIKELY|
|violence|UNLIKELY|
|violence|POSSIBLE|
|violence|LIKELY|
|violence|VERY_LIKELY|

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

<h2 id="tocS_Symbol">Symbol</h2>
<!-- backwards compatibility -->
<a id="schemasymbol"></a>
<a id="schema_Symbol"></a>
<a id="tocSsymbol"></a>
<a id="tocssymbol"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "text": "string"
}
```

A single symbol representation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[BoundingPoly](#schemaboundingpoly)|false|none|The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results for the symbol. Range [0, 1].|
|property|[TextProperty](#schematextproperty)|false|none|Additional information detected for the symbol.|
|text|string|false|none|The actual UTF-8 representation of the symbol.|

<h2 id="tocS_TextAnnotation">TextAnnotation</h2>
<!-- backwards compatibility -->
<a id="schematextannotation"></a>
<a id="schema_TextAnnotation"></a>
<a id="tocStextannotation"></a>
<a id="tocstextannotation"></a>

```json
{
  "pages": [
    {
      "blocks": [
        {
          "blockType": "UNKNOWN",
          "boundingBox": {
            "normalizedVertices": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "vertices": [
              {
                "x": 0,
                "y": 0
              }
            ]
          },
          "confidence": 0,
          "paragraphs": [
            {
              "boundingBox": {
                "normalizedVertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ],
                "vertices": [
                  {
                    "x": 0,
                    "y": 0
                  }
                ]
              },
              "confidence": 0,
              "property": {
                "detectedBreak": {
                  "isPrefix": true,
                  "type": "UNKNOWN"
                },
                "detectedLanguages": [
                  {
                    "confidence": 0,
                    "languageCode": "string"
                  }
                ]
              },
              "words": [
                {
                  "boundingBox": {
                    "normalizedVertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ],
                    "vertices": [
                      {
                        "x": 0,
                        "y": 0
                      }
                    ]
                  },
                  "confidence": 0,
                  "property": {
                    "detectedBreak": {
                      "isPrefix": true,
                      "type": "UNKNOWN"
                    },
                    "detectedLanguages": [
                      {
                        "confidence": 0,
                        "languageCode": "string"
                      }
                    ]
                  },
                  "symbols": [
                    {
                      "boundingBox": {
                        "normalizedVertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ],
                        "vertices": [
                          {
                            "x": 0,
                            "y": 0
                          }
                        ]
                      },
                      "confidence": 0,
                      "property": {
                        "detectedBreak": {
                          "isPrefix": true,
                          "type": "UNKNOWN"
                        },
                        "detectedLanguages": [
                          {
                            "confidence": 0,
                            "languageCode": "string"
                          }
                        ]
                      },
                      "text": "string"
                    }
                  ]
                }
              ]
            }
          ],
          "property": {
            "detectedBreak": {
              "isPrefix": true,
              "type": "UNKNOWN"
            },
            "detectedLanguages": [
              {
                "confidence": 0,
                "languageCode": "string"
              }
            ]
          }
        }
      ],
      "confidence": 0,
      "height": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "width": 0
    }
  ],
  "text": "string"
}
```

TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pages|[[Page](#schemapage)]|false|none|List of pages detected by OCR.|
|text|string|false|none|UTF-8 text detected on the pages.|

<h2 id="tocS_TextProperty">TextProperty</h2>
<!-- backwards compatibility -->
<a id="schematextproperty"></a>
<a id="schema_TextProperty"></a>
<a id="tocStextproperty"></a>
<a id="tocstextproperty"></a>

```json
{
  "detectedBreak": {
    "isPrefix": true,
    "type": "UNKNOWN"
  },
  "detectedLanguages": [
    {
      "confidence": 0,
      "languageCode": "string"
    }
  ]
}
```

Additional information detected on the structural component.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedBreak|[DetectedBreak](#schemadetectedbreak)|false|none|Detected start or end of a text segment.|
|detectedLanguages|[[DetectedLanguage](#schemadetectedlanguage)]|false|none|A list of detected languages together with confidence.|

<h2 id="tocS_Vertex">Vertex</h2>
<!-- backwards compatibility -->
<a id="schemavertex"></a>
<a id="schema_Vertex"></a>
<a id="tocSvertex"></a>
<a id="tocsvertex"></a>

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

<h2 id="tocS_WebDetection">WebDetection</h2>
<!-- backwards compatibility -->
<a id="schemawebdetection"></a>
<a id="schema_WebDetection"></a>
<a id="tocSwebdetection"></a>
<a id="tocswebdetection"></a>

```json
{
  "bestGuessLabels": [
    {
      "label": "string",
      "languageCode": "string"
    }
  ],
  "fullMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "pagesWithMatchingImages": [
    {
      "fullMatchingImages": [
        {
          "score": 0,
          "url": "string"
        }
      ],
      "pageTitle": "string",
      "partialMatchingImages": [
        {
          "score": 0,
          "url": "string"
        }
      ],
      "score": 0,
      "url": "string"
    }
  ],
  "partialMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "visuallySimilarImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "webEntities": [
    {
      "description": "string",
      "entityId": "string",
      "score": 0
    }
  ]
}
```

Relevant information for the image from the Internet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bestGuessLabels|[[WebLabel](#schemaweblabel)]|false|none|The service's best guess as to the topic of the request image. Inferred from similar images on the open web.|
|fullMatchingImages|[[WebImage](#schemawebimage)]|false|none|Fully matching images from the Internet. Can include resized copies of the query image.|
|pagesWithMatchingImages|[[WebPage](#schemawebpage)]|false|none|Web pages containing the matching images from the Internet.|
|partialMatchingImages|[[WebImage](#schemawebimage)]|false|none|Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.|
|visuallySimilarImages|[[WebImage](#schemawebimage)]|false|none|The visually similar image results.|
|webEntities|[[WebEntity](#schemawebentity)]|false|none|Deduced entities from similar images on the Internet.|

<h2 id="tocS_WebEntity">WebEntity</h2>
<!-- backwards compatibility -->
<a id="schemawebentity"></a>
<a id="schema_WebEntity"></a>
<a id="tocSwebentity"></a>
<a id="tocswebentity"></a>

```json
{
  "description": "string",
  "entityId": "string",
  "score": 0
}
```

Entity deduced from similar images on the Internet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Canonical description of the entity, in English.|
|entityId|string|false|none|Opaque entity ID.|
|score|number(float)|false|none|Overall relevancy score for the entity. Not normalized and not comparable across different image queries.|

<h2 id="tocS_WebImage">WebImage</h2>
<!-- backwards compatibility -->
<a id="schemawebimage"></a>
<a id="schema_WebImage"></a>
<a id="tocSwebimage"></a>
<a id="tocswebimage"></a>

```json
{
  "score": 0,
  "url": "string"
}
```

Metadata for online images.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score|number(float)|false|none|(Deprecated) Overall relevancy score for the image.|
|url|string|false|none|The result image URL.|

<h2 id="tocS_WebLabel">WebLabel</h2>
<!-- backwards compatibility -->
<a id="schemaweblabel"></a>
<a id="schema_WebLabel"></a>
<a id="tocSweblabel"></a>
<a id="tocsweblabel"></a>

```json
{
  "label": "string",
  "languageCode": "string"
}
```

Label to provide extra metadata for the web detection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|Label for extra metadata.|
|languageCode|string|false|none|The BCP-47 language code for `label`, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.|

<h2 id="tocS_WebPage">WebPage</h2>
<!-- backwards compatibility -->
<a id="schemawebpage"></a>
<a id="schema_WebPage"></a>
<a id="tocSwebpage"></a>
<a id="tocswebpage"></a>

```json
{
  "fullMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "pageTitle": "string",
  "partialMatchingImages": [
    {
      "score": 0,
      "url": "string"
    }
  ],
  "score": 0,
  "url": "string"
}
```

Metadata for web pages.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullMatchingImages|[[WebImage](#schemawebimage)]|false|none|Fully matching images on the page. Can include resized copies of the query image.|
|pageTitle|string|false|none|Title for the web page, may contain HTML markups.|
|partialMatchingImages|[[WebImage](#schemawebimage)]|false|none|Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.|
|score|number(float)|false|none|(Deprecated) Overall relevancy score for the web page.|
|url|string|false|none|The result web page URL.|

<h2 id="tocS_Word">Word</h2>
<!-- backwards compatibility -->
<a id="schemaword"></a>
<a id="schema_Word"></a>
<a id="tocSword"></a>
<a id="tocsword"></a>

```json
{
  "boundingBox": {
    "normalizedVertices": [
      {
        "x": 0,
        "y": 0
      }
    ],
    "vertices": [
      {
        "x": 0,
        "y": 0
      }
    ]
  },
  "confidence": 0,
  "property": {
    "detectedBreak": {
      "isPrefix": true,
      "type": "UNKNOWN"
    },
    "detectedLanguages": [
      {
        "confidence": 0,
        "languageCode": "string"
      }
    ]
  },
  "symbols": [
    {
      "boundingBox": {
        "normalizedVertices": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "vertices": [
          {
            "x": 0,
            "y": 0
          }
        ]
      },
      "confidence": 0,
      "property": {
        "detectedBreak": {
          "isPrefix": true,
          "type": "UNKNOWN"
        },
        "detectedLanguages": [
          {
            "confidence": 0,
            "languageCode": "string"
          }
        ]
      },
      "text": "string"
    }
  ]
}
```

A word representation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boundingBox|[BoundingPoly](#schemaboundingpoly)|false|none|The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 \| \| 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 \| \| 1----0 and the vertex order will still be (0, 1, 2, 3).|
|confidence|number(float)|false|none|Confidence of the OCR results for the word. Range [0, 1].|
|property|[TextProperty](#schematextproperty)|false|none|Additional information detected for the word.|
|symbols|[[Symbol](#schemasymbol)]|false|none|List of symbols in the word. The order of the symbols follows the natural reading order.|
